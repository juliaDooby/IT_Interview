Node.js Interview Questions for Developers
Use our engineer-created questions to interview and hire the most qualified Node developers for your organization.

Get a demo
Back to interview questions

Node.js
The premier back-end JavaScript framework, Node continues to rise in popularity due to its low learning curve, extensive library support, and excellent performance due to its non-blocking input/output design.

According to the CoderPad 2024 Developer survey, Node is THE most in-demand back-end framework among technical recruiters and hiring managers.

To evaluate the Node expertise of developers during coding interviews, we have provided hands-on coding challenges and interview questions below.

Additionally, we have outlined a set of suggested practices to ensure that your interview questions accurately measure the candidates’ Node skillset.

Table of Contents
Node.js example question
Junior Node.js interview questions
Intermediate Node.js interview questions
Senior Node.js interview questions
Interview best practices for Node roles
Node.js example question
Create a NodeJS CRUD API
The goal of this exercise is to retrieve data from an external source, store it in an appropriate database structure, and create a CRUD RESTful API to interface with the database

Goals
1. Read the data from this graphql endpoint: https://swapi-graphql.netlify.app/.netlify/functions/index with the following query:

query Query {allPlanets{planets{name population terrains climates}}}

(View the shape of the data here.)

2. Store the data from the graphql endpoint into the database and create appropriate models

3. Write RESTful Create, Read, Update, and Delete endpoints to interact with the database


Node skills to assess
RESTful API design
Databases and ORMs
JavaScript fundamentals
Packet manager (npm)
Jobs using Node
Node developer
Back-end engineer
Full-stack developer
Junior Node.js interview questions
Question:
Explain the concept of Node.js and its role as a server-side JavaScript runtime environment. How does it differ from the client-side JavaScript environment?

Answer:
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the web browser. It is built on the V8 JavaScript engine from Google Chrome and provides a runtime environment for executing JavaScript code on the server-side. Node.js enables developers to build scalable, high-performance, and event-driven applications using JavaScript.

Difference from client-side JavaScript environment:

Context: In the client-side environment, JavaScript runs within a web browser and has access to the Document Object Model (DOM) to interact with web pages. On the other hand, Node.js runs on the server-side, and it has access to various built-in modules, file system, and network functionalities to perform server-related tasks.
Execution Environment: Client-side JavaScript is executed by the web browser, which may have limitations and security restrictions due to its sandboxed environment. Node.js, being server-side, runs in a server environment, giving it more access and control over the system resources.
Application Type: Client-side JavaScript is mainly used for enhancing user interfaces and adding interactivity to web pages. Node.js is used to build server-side applications, APIs, microservices, real-time applications, and other backend services.
Asynchronous I/O: Node.js utilizes a non-blocking, event-driven I/O model, allowing it to handle concurrent requests efficiently. This is especially useful for applications that deal with multiple concurrent connections, such as web servers and chat applications.
Question:
Explain the significance of the Node Package Manager (NPM) in Node.js development. How do you initialize a new Node.js project and manage dependencies using NPM?

Answer:
The Node Package Manager (NPM) is a crucial tool in Node.js development. It is the default package manager for Node.js, providing a vast ecosystem of reusable packages and modules that developers can use to build applications efficiently. NPM allows developers to manage project dependencies, install and update packages, and share their own packages with the community.

To initialize a new Node.js project and manage dependencies using NPM:

Initialize a new project: Open your terminal, navigate to the project’s root directory, and run the following command:
npm init
This command will create a package.json file that holds the project’s metadata and dependencies.

Install dependencies: After initializing the project, you can use NPM to install external packages. For example, to install the express package, run:
npm install express
This will install the express package and add it as a dependency in the package.json file.

Use dependencies in the project: You can now use the installed packages in your Node.js application by requiring them in your code. For example, to use express, add the following line in your app.js file:
const express = require('express');
Code language: JavaScript (javascript)
Question:
Explain the concept of modules in Node.js and how they promote code reusability. Provide an example of creating and using a custom module in Node.js.

Answer:
Modules in Node.js are reusable blocks of code that can be encapsulated and exported from one file and imported into another file. They promote code reusability, maintainability, and organization in large Node.js projects.

Here’s an example of creating and using a custom module in Node.js:

Create a new file named mathUtils.js:
// mathUtils.js
exports.add = function (a, b) {
  return a + b;
};

exports.subtract = function (a, b) {
  return a - b;
};
Code language: JavaScript (javascript)
Use the custom module in another file:
// main.js
const mathUtils = require('./mathUtils');

const sum = mathUtils.add(10, 5);
const difference = mathUtils.subtract(10, 5);

console.log('Sum:', sum);
console.log('Difference:', difference);
Code language: JavaScript (javascript)
In this example, we create a custom module in mathUtils.js that exports two functions: add and subtract. In main.js, we require the mathUtils module and use its functions to perform addition and subtraction operations.

Question:
Explain the concept of asynchronous programming in Node.js. What is the importance of callbacks and how do they handle asynchronous operations?

Answer:
Asynchronous programming in Node.js is a fundamental concept that allows non-blocking execution of code. It enables Node.js to handle multiple tasks simultaneously without waiting for each operation to complete before moving to the next one. Asynchronous programming is crucial for handling I/O operations, such as reading and writing files or making network requests, without blocking the entire application.

Callbacks play a significant role in handling asynchronous operations in Node.js. They are functions passed as arguments to asynchronous functions, and they get executed once the asynchronous operation is completed. Callbacks allow developers to specify what action should be taken after the asynchronous operation finishes.

Here’s an example of using a callback for an asynchronous file read operation:

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('File content:', data);
  }
});
Code language: JavaScript (javascript)
In this example, fs.readFile() is an asynchronous function that reads the content of file.txt. The third argument is a callback function that handles the result of the file read operation. If there’s an error, it will be passed as the first argument to the callback; otherwise, the data read from the file will be passed as the second argument.

Question:
Explain the purpose of the require function in Node.js and how it facilitates module loading. How do you load core modules, built-in modules, and local modules using require?

Answer:
The require function in Node.js is used to load modules and files. It allows you to include external modules, built-in modules, and custom modules in your Node.js application.

To load core modules or built-in modules provided by Node.js, you can use the require function directly:

const http = require('http');
const fs = require('fs');
const path = require('path');
Code language: JavaScript (javascript)
Core modules are modules that are included by default in Node.js, and you can use them without installing any additional packages.

To load local modules or custom modules created by you or other developers, you need to provide the file path relative to the current file:

Assume you have a file named mathUtils.js in the same directory as your current file:

const mathUtils = require('./mathUtils');
Code language: JavaScript (javascript)
In this example, we load the custom module mathUtils.js using require. The ./ indicates that the module is in the same directory as the current file.

Question:
Explain the concept of the Node.js Event Loop and how it enables non-blocking I/O operations. How does the Event Loop handle asynchronous events in Node.js?

Answer:
The Node.js Event Loop is a core mechanism that enables non-blocking I/O operations in Node.js. It is responsible for handling and processing asynchronous events such as I/O operations, timers, and callbacks. The Event Loop is what makes Node.js highly performant and scalable.

Here’s a simplified overview of how the Node.js Event Loop works:

Node.js runs the initial synchronous code, and any asynchronous operations (e.g., reading a file) are delegated to the system.
Asynchronous operations are initiated and move to a separate thread (known as the Thread Pool) managed by libuv, a library that handles asynchronous I/O operations.
While waiting for the completion of an asynchronous operation, the main Node.js thread continues executing other code and processing new events.
When an asynchronous operation is completed, the corresponding callback is added to the Event Queue.
The Event Loop continuously checks the Event Queue for pending callbacks. If there are any, it processes them one by one, executing their respective callback functions.
The process repeats, allowing Node.js to handle multiple concurrent operations efficiently, providing a non-blocking I/O model.
This mechanism allows Node.js to manage multiple asynchronous operations simultaneously, making it well-suited for handling concurrent requests in web applications and other I/O-intensive tasks.

Question:
Explain the purpose of the fs module in Node.js and how it enables file system operations. Provide an example of reading and writing files using the fs module.

Answer:
The fs module in Node.js is a built-in module that provides file system-related functionalities, allowing developers to work with files and directories. It enables reading, writing, updating, and deleting files, as well as managing directories.

Here’s an example of reading and writing files using the fs module:

const fs = require('fs');

// Reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});

// Writing to a file
const contentToWrite = 'This is some content to write to the file.';
fs.writeFile('output.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully.');
  }
});
Code language: JavaScript (javascript)
In this example, we use the readFile() method to read the content of a file named file.txt in UTF-8 encoding. The content is read asynchronously, and the result is passed to the callback function. Similarly, we use the writeFile() method to write content to a file named output.txt. The content is written asynchronously, and the callback is used to handle any errors that may occur during the write operation.

Question:
Explain the concept of the Node.js http module and how it enables building web servers. Provide an example of creating a basic HTTP server using the http module.

Answer:
The http module in Node.js is a built-in module that provides functionality to create HTTP servers and make HTTP requests. It enables developers to build web servers that can handle incoming HTTP requests and send responses to clients.

Here’s an example of creating a basic HTTP server using the http module:

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
Code language: JavaScript (javascript)
In this example, we create an HTTP server using the createServer() method of the http module. The server responds to all incoming requests with a simple “Hello, Node.js!” message. The server listens on port 3000, and when it starts, the message “Server is running on http://localhost:3000” is logged to the console.

Question:
Explain the purpose of the npm command-line tool and its role in managing Node.js packages. How do you use npm to install, update, and remove packages?

Answer:
The npm command-line tool is the Node Package Manager, used to manage Node.js packages and modules. It comes bundled with Node.js installation and provides a convenient way to install, update, and remove packages for Node.js projects.

Here’s how you can use npm to manage packages:

Install a package: To install a package and add it as a dependency to your project, use the npm install command. For example, to install the express package:
npm install express
The package will be downloaded and saved to the node_modules directory in your project.

Install a package globally: To install a package globally on your system, use the -g flag. For example, to install nodemon globally:
npm install -g nodemon
Global packages are typically used for development tools and utilities.

Update a package: To update a package to the latest version, use the npm update command followed by the package name. For example, to update the express package:
npm update express
Remove a package: To remove a package from your project’s dependencies, use the npm uninstall command followed by the package name. For example, to remove the express package:
npm uninstall express
These are some of the basic npm commands that you can use to manage packages in your Node.js projects effectively.

Question:
Explain the concept of middleware in Node.js, and its role in handling HTTP requests in frameworks like Express.js. Provide an example of using middleware in an Express.js application.

Answer:
Middleware in Node.js is a function that sits between the server and the route handlers in a web application. It intercepts HTTP requests and can perform various tasks such as authentication, logging, data parsing, and error handling. Middleware functions have access to the request (req) and response (res) objects, and they can modify the request or response before passing it to the next middleware or the route handler.

In Express.js, middleware plays a crucial role in processing incoming requests and preparing the response before sending it back to the client.

Here’s an example of using middleware in an Express.js application:

const express = require('express');
const app = express();

// Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Body Parser Middleware
app.use(express.json());

// Route Handler
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
Code language: JavaScript (javascript)
In this example, we have three middleware functions:

Logger Middleware: Logs the incoming requests to the console with the current timestamp.
Body Parser Middleware: Parses the request body as JSON if the content type is ‘application/json’.
Error Handling Middleware: Captures any errors that occur during request processing and responds with a generic error message and a 500 status code.
Middleware functions are executed in the order they are declared using app.use(), and they can modify the request, response, or perform actions before passing the control to the next middleware or route handler. Middleware makes Express.js flexible and powerful for building web applications with various functionalities.

Intermediate Node.js interview questions
Question:
Explain the concept of asynchronous programming in Node.js. Provide an example of how you can use callbacks to handle asynchronous operations.

Answer:
Asynchronous programming in Node.js allows executing tasks without blocking the execution of the main program. Instead of waiting for a task to complete before moving on to the next one, Node.js utilizes callbacks and event loops to handle asynchronous operations.

Here’s an example of how you can use callbacks for asynchronous file reading in Node.js:

const fs = require('fs');

// Asynchronous file reading with a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File content:', data);
  }
});
Code language: JavaScript (javascript)
In this example, fs.readFile() asynchronously reads the content of ‘example.txt’ and calls the provided callback function when the operation is complete. The callback function receives an error (if any) and the file content. This way, the rest of the program can continue executing while the file is being read, enhancing overall performance.

Question:
What is npm in the context of Node.js development? Explain its significance and provide an example of how you can use npm packages in a Node.js application.

Answer:
npm (Node Package Manager) is a package manager for Node.js that allows developers to discover, install, and manage reusable code packages, also known as modules or packages. npm simplifies the process of managing dependencies and enables easy integration of third-party code into Node.js applications.

Here’s an example of how you can use an npm package in a Node.js application:

Install the npm package:
npm install axios
Use the package in your Node.js application:
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    console.log('API response:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
Code language: JavaScript (javascript)
In this example, we first install the axios package using npm install axios. Then, in our Node.js application, we require the axios module and use it to make an HTTP GET request to an example API. The response data is logged to the console, and any errors are handled with the .catch() method.

Question:
Explain the concept of middleware in the context of Node.js and how it is commonly used in web applications.

Answer:
Middleware in Node.js refers to functions that are executed in the request-response cycle of a web application. Middleware functions have access to the request and response objects, and they can perform tasks, modify request/response objects, or terminate the request-response cycle.

In web applications, middleware is commonly used for tasks such as authentication, logging, error handling, parsing request bodies, and handling CORS (Cross-Origin Resource Sharing) headers.

Here’s an example of how middleware can be used in a simple Express.js application:

const express = require('express');
const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handling
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something went wrong.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
Code language: JavaScript (javascript)
In this example, the first middleware logs the incoming requests, and the second middleware handles errors. The next() function is called to pass control to the next middleware in the chain or the route handler. Middleware allows for modularizing application logic and making the code more maintainable.

Question:
What is the role of the “Event Loop” in Node.js, and how does it enable non-blocking I/O operations?

Answer:
The Event Loop is a crucial component of Node.js that enables non-blocking I/O operations and asynchronous programming. It’s responsible for handling and dispatching events and callbacks in a single-threaded manner, which allows Node.js to efficiently manage multiple I/O operations concurrently without blocking the execution of the main program.

The Event Loop continuously listens for events, such as incoming HTTP requests or file read completions, and adds the associated callbacks to the callback queue. When the current execution stack is empty, Node.js picks up the callbacks from the callback queue and processes them one by one. This process allows the application to be highly responsive and handle multiple requests simultaneously without creating new threads for each request.

Overall, the Event Loop is the key to Node.js’ ability to handle a large number of I/O operations with low overhead, making it well-suited for scalable and high-performance applications.

Question:
Explain the concept of Promises in Node.js and how they help in handling asynchronous operations. Provide an example of using Promises in a Node.js application.

Answer:
Promises in Node.js are a way to handle asynchronous operations in a more organized and readable manner. A Promise represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks to handle the result or error once the operation completes.

Here’s an example of using Promises to read a file asynchronously in Node.js:

const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync('example.txt')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(error => {
    console.error('Error reading the file:', error);
  });
Code language: JavaScript (javascript)
In this example, we create a function readFileAsync() that returns a Promise. The Promise wraps the fs.readFile() operation, and when the operation completes, it either resolves with the file content or rejects with an error. We can then use .then() to handle the successful result and .catch() to handle any errors, making the code more readable and organized.

Question:
Explain the concept of streams in Node.js and their significance in handling large data efficiently. Provide an example of reading a large file using streams in Node.js.

Answer:
Streams in Node.js are a way to handle large amounts of data efficiently, especially when dealing with files or network communication. A stream is a continuous flow of data that can be processed incrementally, in small chunks, without loading the entire data into memory.

Streams in Node.js can be of four types: Readable, Writable, Duplex, and Transform. Readable streams are used to read data, Writable streams for writing data, Duplex streams for both reading and writing, and Transform streams for modifying data while reading or writing.

Here’s an example of reading a large file using streams in Node.js:

const fs = require('fs');

const readableStream = fs.createReadStream('largefile.txt', 'utf8');

readableStream.on('data', chunk => {
  console.log('Received a chunk of data:', chunk);
});

readableStream.on('end', () => {
  console.log('Reading finished.');
});

readableStream.on('

error', err => {
  console.error('Error while reading:', err);
});
Code language: PHP (php)
In this example, we create a Readable stream using fs.createReadStream(). As the file is read, the 'data' event is emitted with chunks of data that can be processed immediately, without waiting for the whole file to be read. The 'end' event is emitted when the reading is finished, and the 'error' event is emitted if an error occurs during the reading process.

By using streams, Node.js can efficiently process large files, as only a small chunk of data is held in memory at any given time, reducing memory consumption and enabling faster data processing.

Question:
Explain the purpose of the Express.js framework in Node.js and its significance in building web applications. Provide an example of creating a simple web server using Express.js.

Answer:
Express.js is a popular and minimalist web framework for Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features for handling routes, middleware, templates, and much more, making it an excellent choice for building web applications with Node.js.

Here’s an example of creating a simple web server using Express.js:

const express = require('express');
const app = express();
const port = 3000;

// Route handling
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
Code language: JavaScript (javascript)
In this example, we create an Express application using express(). We define a route for the root URL '/', and when a GET request is made to this route, it responds with the message 'Hello, World!'. We then start the server on port 3000 using app.listen(). Express handles the HTTP server setup and provides an easy-to-use interface for handling routes and responding to requests.

Express.js significantly reduces boilerplate code and provides a straightforward and flexible structure for building web applications, allowing developers to focus on implementing business logic and features.

Question:
Explain the concept of Authentication and Authorization in the context of web applications. Provide an example of how you can implement token-based authentication in a Node.js application.

Answer:
Authentication and Authorization are two essential aspects of web applications for ensuring security and controlling access to resources.

Authentication is the process of verifying the identity of a user, typically by providing credentials (such as username and password). Once the user is authenticated, they receive an authentication token, which is used to identify them in subsequent requests.

Authorization, on the other hand, is the process of determining what actions a user is allowed to perform on the application’s resources based on their identity and assigned roles or permissions.

Here’s an example of implementing token-based authentication in a Node.js application using JSON Web Tokens (JWT):

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = 'your-secret-key';

// Middleware to check for authentication token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

// Login route
app.post('/login', (req, res) => {
  // Assuming you have a user authentication logic here
  const user = { id: 1, username: 'exampleUser' };

  const token = jwt.sign(user, secretKey);
  res.json({ token });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed!', user: req.user });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
Code language: PHP (php)
In this example, when a user successfully logs in ('/login' route), we generate a JWT token using the jwt.sign() method, which includes the user information (e.g., user ID and username). The token is then sent to the client as a response. On subsequent requests to the protected route ('/protected'), the token is passed in the Authorization header. The authenticateToken middleware verifies the token using jwt.verify() and allows access to the protected route only if the token is valid. If the token is missing or invalid, appropriate status codes (401 or 403) are sent in response, indicating unauthorized access.

Question:
Explain the concept of sessions and cookies in the context of web applications. Provide an example of how you can implement session-based authentication using cookies in a Node.js application.

Answer:
Sessions and cookies are mechanisms used to maintain user state and enable authentication in web applications.

A session is a logical unit of user state on the server side. When a user logs in, a unique session identifier is generated, and this identifier is stored on the server along with user-specific data. The session identifier is typically sent to the client as a cookie, allowing the server to recognize the user across multiple requests.

Here’s an example of implementing session-based authentication using cookies in a Node.js application:

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const secretKey = 'your-secret-key';
const users = [
  { id: 1, username: 'exampleUser', password: 'password123' }
];

app.use(cookieParser());

// Middleware to check for a valid session
function authenticateSession(req, res, next) {
  const sessionId = req.cookies.sessionId;

  if (!sessionId) {
    return res.sendStatus(401);
  }

  // Assuming you have a session store here (e.g., in-memory or database)
  const user = sessionStore[sessionId];
  if (!user) {
    return res.sendStatus(403);
  }

  req.user = user;
  next();
}

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.sendStatus(401);
  }

  // Generate a random session ID and store user data
  const sessionId = Math.random().toString(36).substr(2);
  sessionStore[sessionId] = user;

  // Set the session ID as a cookie
  res.cookie('sessionId', sessionId, { httpOnly: true });
  res.json({ message: 'Login successful!' });
});

// Protected route
app.get('/protected', authenticateSession, (req, res) => {
  res.json({ message: 'Protected route accessed!', user: req.user });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
Code language: PHP (php)
In this example, when a user successfully logs in ('/login' route), a random session ID is generated and associated with the user data in the session store. The session ID is then sent to the client as a cookie with the res.cookie() method. On subsequent requests, the client sends the session ID in the Cookie header, allowing the server to identify the

user by looking up the session ID in the session store. If the session ID is not valid or missing, appropriate status codes (401 or 403) are sent in response, indicating unauthorized access.

Senior Node.js interview questions
Question:
Explain the concept of asynchronous programming in Node.js and how it helps in building scalable applications. Provide an example of asynchronous code using callbacks.

Answer:
Asynchronous programming in Node.js allows executing multiple tasks concurrently without blocking the execution of the main program. It is essential for building scalable applications as it allows the server to handle a large number of concurrent connections efficiently, without getting stuck waiting for slow I/O operations.

Example of asynchronous code using callbacks:

const fs = require('fs');

// Asynchronous file read operation
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('File contents:', data);
  }
});

console.log('Async operation is in progress...');
Code language: JavaScript (javascript)
In this example, the readFile() function reads the contents of a file asynchronously. The callback function is executed once the file read operation is completed. While the file is being read, the program continues executing the console.log('Async operation is in progress...') statement, showing the non-blocking nature of the asynchronous operation.

Question:
Explain the concept of the event loop in Node.js and how it enables non-blocking I/O operations. How can developers avoid blocking the event loop?

Answer:
The event loop is a critical part of Node.js that allows it to handle asynchronous I/O operations efficiently. The event loop is a loop that continuously checks for pending events, such as I/O operations, timers, and callbacks, and executes their corresponding event handlers.

Node.js relies on non-blocking I/O operations to avoid blocking the event loop. When a function initiates an I/O operation, instead of waiting for it to complete, Node.js continues executing other tasks while the I/O operation is handled in the background. Once the I/O operation is completed, its callback is added to the event queue, and the event loop executes it when all other tasks in the current event loop iteration are done.

Developers can avoid blocking the event loop by using asynchronous patterns, such as callbacks, Promises, or async/await, for I/O operations and CPU-intensive tasks. By doing so, they ensure that long-running operations don’t block the event loop, allowing the server to remain responsive to incoming requests.

Question:
In Node.js, what is the purpose of the module.exports object, and how does it facilitate module-based development? Provide an example of exporting and importing modules in Node.js.

Answer:
In Node.js, the module.exports object is used to define what parts of a module should be accessible and usable by other modules that require it. It facilitates module-based development by encapsulating code into individual modules, making the code modular, maintainable, and reusable.

Example of exporting and importing modules:

Module: mathOperations.js

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};
Code language: JavaScript (javascript)
Module: main.js

const mathOps = require('./mathOperations');

console.log(mathOps.add(5, 3));       // Output: 8
console.log(mathOps.subtract(10, 5)); // Output: 5
Code language: JavaScript (javascript)
In this example, we have two modules. The mathOperations.js module exports the add and subtract functions using module.exports. The main.js module imports those functions using require and can use them as if they were defined locally. This illustrates how module.exports enables us to share functionality between modules in Node.js.

Question:
Explain the purpose of middleware in Express.js. Provide an example of how to use middleware to handle HTTP requests.

Answer:
Middleware in Express.js is a function or a set of functions that are executed in a sequence during the lifecycle of an HTTP request. Middleware functions have access to the request (req) and response (res) objects and can perform tasks such as logging, authentication, data parsing, and error handling. Middleware provides a way to modularize and reuse common functionality across routes in an Express application.

Example of using middleware in Express.js:

const express = require('express');
const app = express();

// Middleware for logging the request method and URL
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to the next middleware or route handler
};

// Middleware for parsing JSON data
app.use(express.json());

// Apply the loggerMiddleware to all routes
app.use(loggerMiddleware);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
Code language: JavaScript (javascript)
In this example, we have defined two middleware functions: loggerMiddleware for logging requests and express.json() middleware for parsing JSON data. The app.use() function is used to apply middleware to all routes, and the next() function is called within each middleware to pass control to the next middleware or route handler.

Question:
Explain the concept of streams in Node.js and how they help in handling large datasets efficiently. Provide an example of using readable and writable streams in Node.js.

Answer:
Streams in Node.js are an essential feature that allows reading or writing data in chunks, rather than loading the entire dataset into memory at once. Streams are beneficial when handling large datasets as they enable efficient memory usage and reduced processing time.

Example of using readable and writable streams:

Read a file using readable stream:

const fs = require('fs');

const readableStream = fs.createReadStream('largeFile.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on('end', () => {
  console.log('Reading file completed.');
});
Code language: JavaScript (javascript)
Write data to a file using writable stream:

const fs = require('fs');

const writableStream = fs.createWriteStream('outputFile.txt');

writableStream.write('This is the first line.n');
writableStream.write('This is the second line.n');
writableStream.end('Writing data completed.');
Code language: JavaScript (javascript)
In the first example, a readable stream is created using fs.createReadStream(), and it reads a large file in chunks. The data event is emitted for each chunk, allowing you to process the data in smaller portions.

In the second example, a writable stream is created using fs.createWriteStream(), and it writes data to an output file in chunks. The write() method allows you to write data in smaller chunks, reducing memory consumption and improving performance.

Question:
Explain the role of the Node.js util.promisify function and how it simplifies working with asynchronous functions that use callbacks. Provide an example of using util.promisify to convert a callback-based function into a Promise-based function.

Answer:
The util.promisify function in Node.js is part of the util module, and it is used to convert functions that use callbacks into functions that return Promises. This simplifies working with asynchronous functions, as it allows you to use async/await or .then() syntax to handle asynchronous operations.

Example of using util.promisify:

const util = require('util');
const fs = require('fs');

// Callback-based function
const readFileCallback = (file, callback) => {
  fs.readFile(file, 'utf8', callback);
};

// Promise-based function using util.promisify
const readFilePromise = util.promisify(readFileCallback);

// Usage with async/await
(async () => {
  try {
    const data = await readFilePromise('example.txt');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error:', err);
  }
})();
Code language: JavaScript (javascript)
In this example, we have a callback-based function readFileCallback, which reads a file and returns the data through the callback. Using util.promisify, we convert readFileCallback into readFilePromise, a Promise-based function that returns a Promise that resolves with the file data.

With readFilePromise, we can use async/await to handle the asynchronous operation more concisely and with better error handling.

Question:
Explain the concept of WebSocket in Node.js and how it enables bidirectional communication between clients and servers. Provide an example of implementing a WebSocket server in Node.js using the ws library.

Answer:
WebSocket is a communication protocol that enables full-duplex, bidirectional communication between clients and servers over a single, long-lived connection. Unlike traditional HTTP, which is request-response-based, WebSocket allows real-time, low-latency communication, making it ideal for applications that require frequent data exchange, such as chat applications, real-time gaming, and live data updates.

Example of implementing a WebSocket server using the ws library:

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Event handler for new connections
wss.on('connection', (ws) => {
  console.log('New client connected.');

  // Event handler for receiving messages from clients
  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Send a response back to the client
    ws.send(`Server received: ${message}`);
  });

  // Event handler for client disconnection
  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});
Code language: JavaScript (javascript)
In this example, we use the ws library to create a WebSocket server. When a client connects ('connection' event), the server logs a message. When the server receives a message from a client ('message' event), it logs the message and sends a response back to the client using ws.send(). If a client disconnects ('close' event), the server logs a disconnection message.

Question:
Explain the concept of error handling in Node.js, and describe how the try-catch mechanism can be used to handle errors in asynchronous code. Provide an example of error handling in asynchronous code.

Answer:
Error handling in Node.js is crucial for gracefully handling unexpected situations and preventing the application from crashing. Errors in asynchronous code can be handled using the try-catch mechanism combined with Promises or async/await.

Example of error handling in asynchronous code with async/await:

const fs = require('fs').promises;

async function readFileAsync(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

readFileAsync('nonExistentFile.txt');
Code language: JavaScript (javascript)
In this example, the readFileAsync function reads a file using fs.readFile with await. If the file does not exist, an error will be thrown. The try-catch block allows us to catch and handle the error gracefully, logging the error message without crashing the application.

Question:
Explain the concept of the cluster module in Node.js and how it helps in scaling applications across multiple CPU cores. Provide an example of using the cluster module to create a cluster of worker processes.

Answer:
The cluster module in Node.js allows scaling applications across multiple CPU cores by creating a cluster of worker processes. Each worker process runs in its own thread and handles incoming requests independently. This approach enables applications to utilize the full processing power of the server and handle more concurrent connections efficiently.

Example of using the cluster module to create a cluster of worker processes:

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers based on the number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Replace the dead worker
    cluster.fork();
  });
} else {
  // Workers will handle HTTP server connections here
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
Code language: JavaScript (javascript)
In this example, the master process (cluster.isMaster) creates a cluster of worker processes using cluster.fork(). Each worker process listens on the same port and handles incoming HTTP server connections. If a worker process dies ('exit' event), the master process replaces it with a new worker using cluster.fork(). This way, the application can gracefully recover from worker failures and maintain high availability.

Question:
Explain the purpose of the npm package manager in Node.js and how it simplifies dependency management. Provide an example of using npm to initialize a new project and install external packages.

Answer:
The npm (Node Package Manager) is the default package manager for Node.js, used for installing, managing, and sharing reusable JavaScript packages and libraries. It simplifies dependency management by allowing developers to specify project dependencies in a package.json file and then automatically installing all required dependencies with a single command.

Example of using npm to initialize a new project and install external packages:

Create a new directory for your project:
mkdir my-node-project
cd my-node-project
Initialize a new Node.js project and create a package.json file:
npm init
Follow the prompts to provide details about your project. You can also use npm init -y to accept all the default values.

Install external packages using npm:
npm install express
This command installs the express package and adds it to the dependencies section of your package.json file.

Install additional packages and save them as dev dependencies:
npm install nodemon --save-dev
This command installs nodemon and adds it to the devDependencies section of your package.json file. Dev dependencies are used during development and are not required in production.

After installing the packages, you can start using them in your Node.js project by requiring them in your code. For example, const express = require('express');

will now allow you to use the express package in your code.

Node.js Interview Questions and Answers for 2025

Table of Contents

View all
Node.js Interview Questions and Answers for Freshers
Node.js Interview Questions and Answers For Intermediate-Level
Node.js Interview Questions and Answers for Experienced Professionals
Node.js Interview Tips
Conclusion
Node.js has revolutionized backend development with its asynchronous, event-driven architecture and high scalability. Built on Chrome’s V8 engine, it enables developers to build fast, efficient, and lightweight server-side applications. Its non-blocking I/O model makes it ideal for real-time applications, APIs, and microservices, making it a preferred choice for companies like Netflix, LinkedIn, and PayPal.

In 2025, Node.js is a crucial skill due to its dominance in backend development, high demand in full-stack roles, and efficiency in building scalable applications. So, if you’re preparing for a role that requires Node.js expertise, this blog provides 60+commonly asked Node.js interview questions and answers to help you confidently crack your next Node.js interview. 

Want to dive deeper into Node JS? Kickstart your journey with upGrad’s online data science courses and gain the skills to excel in this data-driven world!  

Node.js Interview Questions and Answers for Freshers
For freshers and entry-level candidates, understanding the core concepts of Node.js is essential. Below are some common Node.js interview questions for freshers along with structured answers to help you confidently tackle Node.js basic interview questions. 

1. What is Node.js, and why is it used?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside the browser. Built on the Chrome V8 engine, it is designed for asynchronous, event-driven programming and is widely used for building scalable web applications, APIs, real-time applications, and microservices.

Example:
It is used in applications like Netflix, PayPal, and LinkedIn due to its speed and scalability.

2. How does Node.js differ from JavaScript in the browser?
Node.js runs JavaScript on the server-side, while browsers execute JavaScript on the client-side.
Node.js provides built-in modules like fs (file system), http, and path to handle server-side operations, which are not available in browsers.
Unlike browsers, Node.js allows direct interaction with the operating system, databases, and file systems.
Example:
In the browser, JavaScript manipulates the DOM, while in Node.js, it handles HTTP requests, database queries, and file operations.

3. Explain the key features of Node.js.
Asynchronous & Non-blocking I/O: Handles multiple requests without waiting for previous ones to complete.
Event-Driven Architecture: Uses an event loop to manage operations efficiently.
Single-Threaded Model: Uses a single thread with asynchronous processing, improving performance.
Fast Execution: Built on the V8 engine, which compiles JavaScript into machine code.
NPM (Node Package Manager): Provides access to thousands of reusable packages.
Example:
Node.js is ideal for real-time applications like chat apps and live streaming services.

4. What is the role of the V8 engine in Node.js?
The V8 engine is Google’s open-source JavaScript engine that compiles JavaScript into machine code for fast execution. It is used in both Google Chrome and Node.js to improve performance.

Example:
Due to the V8 engine, Node.js can handle thousands of concurrent connections, making it suitable for high-performance applications.

5. What is npm, and how does it work?
npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, manage, and share packages (modules) for faster development.

Key commands:

npm init – Initializes a new Node.js project.
npm install <package> – Installs a package.
npm update – Updates installed packages.
Example:
To install Express.js, use:

npm install express
6. What is the event-driven architecture in Node.js?
Node.js follows an event-driven architecture, meaning that actions (like user requests) trigger events instead of sequential execution. The Event Loop listens for these events and handles them asynchronously.

Example:

const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet', () => {
    console.log('Hello, World!');
});
event.emit('greet');
Output: Hello, World!

7. How does the non-blocking I/O model work?
In Node.js, non-blocking I/O allows the system to handle multiple requests simultaneously without waiting for one operation to complete before starting another.

Example:

const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet', () => {
    console.log('Hello, World!');
});
event.emit('greet');
Output:
Reading file...
(file contents displayed later)
The file read operation doesn’t block the execution of other tasks.

8. What are modules in Node.js, and how do you use them?
Modules in Node.js are reusable pieces of code that help keep the code organized. There are three types:

Built-in modules (e.g., fs, path, http)
Custom modules (user-defined)
Third-party modules (installed via npm, e.g., Express)
Example:
 Creating a module (math.js):

exports.add = (a, b) => a + b;
Using the module in another file:

const math = require('./math');
console.log(math.add(5, 3));
Output: 8
9. What is middleware in Express.js?
Middleware functions in Express.js process incoming requests before sending a response. They can modify requests, handle errors, and enable authentication.

Types of middleware:

Application-level middleware – Runs for all routes (app.use()).
Router-level middleware – Specific to certain routes.
Error-handling middleware – Handles errors in the app.
Example:

const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('Request received');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000);
10. What are streams in Node.js, and how are they used?
Streams in Node.js allow handling large amounts of data efficiently by processing it in chunks instead of loading everything into memory.

Types of streams:

Readable Streams: Read data in chunks (e.g., fs.createReadStream()).
Writable Streams: Write data in chunks (e.g., fs.createWriteStream()).
Duplex Streams: Both readable and writable (e.g., net.Socket).
Transform Streams: Modify data as it is read or written.

Example:

const fs = require('fs');
const readStream = fs.createReadStream('file.txt');
readStream.on('data', chunk => {
    console.log('Received chunk:', chunk.toString());
});
This reads and processes a file chunk by chunk, preventing memory overload.

11. What is the difference between process.nextTick() and setImmediate() in Node.js?
Both process.nextTick() and setImmediate() are used for scheduling asynchronous operations in Node.js, but they execute at different points in the event loop.

process.nextTick() schedules a callback before the next event loop iteration.
setImmediate() schedules a callback after the current event loop iteration completes.
Feature

process.nextTick()

setImmediate()

Execution Timing	Runs before the next event loop cycle begins	Runs after the current event loop cycle completes
Priority	Higher priority; executes before I/O events	Lower priority; executes after I/O events
Use Case	Used for deferring execution of a function to the next tick of the event loop	Used for executing callbacks after I/O operations
12. What is a callback function in Node.js, and how is it used?
A callback function is a function passed as an argument to another function, which executes after the completion of an asynchronous operation.

It is widely used in file operations, database queries, and API requests to ensure non-blocking execution.
Example: When reading a file, the callback function executes after the file content is loaded, preventing the application from freezing while waiting for the file.
13. What is the difference between CommonJS and ES6 modules in Node.js?
Node.js supports two module systems: CommonJS (require) and ES6 Modules (import/export). The key differences are:

Feature

CommonJS (require)

ES6 Modules (import/export)

Syntax	const module = require('module')	import module from 'module'
Exporting	module.exports = {}	export default or export {}
File Extension	.js	.mjs or .js (with "type": "module" in package.json)
Loading Type	Synchronous (Blocking)	Asynchronous (Non-Blocking)
Usage in Node.js	Default module system	Requires "type": "module" in package.json
14. How does clustering work in Node.js, and why is it useful?
Node.js is single-threaded, meaning it can only utilize one CPU core at a time. The cluster module allows multiple worker processes to run, each handling a portion of the workload.

The master process creates multiple worker processes to improve performance.
Each worker handles separate incoming requests, preventing bottlenecks.
If a worker crashes, another worker takes over, ensuring high availability.
Clustering is useful for scalability, allowing applications to leverage multi-core processors efficiently.

15. What are Worker Threads in Node.js, and when should you use them?
Worker Threads enable Node.js to execute JavaScript code in multiple threads within the same process.

Unlike the cluster module, Worker Threads do not create separate Node.js processes.
They are ideal for CPU-intensive tasks, such as image processing, cryptography, and mathematical computations.
Since Node.js is single-threaded, Worker Threads help prevent performance bottlenecks by offloading heavy computations.
Earn a Free Certificate in Java Object-oriented Programming from upGrad. Learn the framework of classes and objects, and explore OOP principles: Abstraction, Encapsulation, Inheritance, and Polymorphism. Hurry! Enroll now!

16. How does Node.js handle errors, and what are the different types of error-handling mechanisms?
Node.js provides multiple error-handling techniques to ensure applications remain stable:

Try-Catch Blocks: Used for handling synchronous errors.
Callback Error Handling: Errors are passed as the first argument in callbacks (error-first callbacks).
Promise Error Handling: Uses .catch() to handle rejected Promises.
Global Error Handling: Captures unhandled exceptions using:
process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err);
});
17. What is the purpose of the Buffer module in Node.js, and how is it used?
The Buffer module in Node.js allows handling binary data efficiently. Since JavaScript primarily handles strings, the Buffer module is essential for working with raw binary data, such as files, streams, or network packets.

Buffers help in reading, modifying, and storing binary data without conversion to strings.
They are frequently used in file handling, cryptography, and network communication.
18. What is the difference between fork() and spawn() methods in the child_process module?
The child_process module in Node.js provides fork() and spawn() to create child processes, but they serve different purposes.

Feature

fork()

spawn()

Functionality	Creates a new Node.js process that runs a script with its own V8 instance.	Spawns an external process to execute system commands.
Communication	Supports Inter-Process Communication (IPC), allowing parent and child to exchange messages.	Uses standard input/output streams instead of IPC.
Memory Usage	Higher due to an additional V8 instance.	Lower as it does not create a separate Node.js instance.
Use Case	Running another Node.js script as a child process.	Running system commands like ls, grep, or executing external scripts.
19. What are CORS (Cross-Origin Resource Sharing) issues in Node.js, and how can they be resolved?
CORS is a security restriction enforced by web browsers that blocks requests from different origins unless explicitly allowed by the server.

Example: If a frontend application (example.com) tries to fetch data from an API on (api.example.com), the request may be blocked due to CORS policies.

To resolve CORS issues in Node.js, use the cors middleware in Express.js:

const cors = require('cors');
app.use(cors());
This allows the server to accept requests from different origins.

20. How do you secure a Node.js application against common security vulnerabilities like SQL injection and XSS?
To protect a Node.js application from common security threats, follow these best practices:

Prevent SQL Injection: Use parameterized queries instead of direct SQL queries:
db.query("SELECT * FROM users WHERE username = ?", [userInput], callback);
Prevent XSS (Cross-Site Scripting): Use input sanitization and libraries like helmet to set secure HTTP headers.
Sanitize User Input: Use express-validator to validate user inputs before processing.
Use HTTPS: Encrypt communication using SSL/TLS certificates.
Implement Rate Limiting: Use express-rate-limit to prevent brute-force attacks:
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
Node.js Interview Questions and Answers For Intermediate-Level
This section covers intermediate-level Node.js interview questions and answers, focusing on essential concepts such as asynchronous programming, performance optimization, and key Node.js functionalities. You'll gain insights into problem-solving techniques and best practices, helping you strengthen your expertise and prepare for more advanced Node.js roles.

21. What Is Middleware in Express.js?
Middleware in Express.js is a function that runs during the request-response cycle. It can modify requests, execute logic, or handle errors. Middleware is used for authentication, logging, and validation. Express provides built-in middleware like express.json(), and developers can create custom middleware using next().

22. How Does Node.js Handle File Uploads?
Node.js handles file uploads using libraries like Multer and Formidable, which process multipart/form-data requests. These libraries parse files, validate data, and store uploads. Proper security measures, such as file size limits and MIME type validation, help prevent vulnerabilities like file injection attacks.

23. What Is the Difference Between Promise and Callback in Node.js?
Callbacks and promises are both mechanisms for handling asynchronous operations in Node.js, but they differ in structure and readability.

Callback functions require passing a function as an argument, which executes after a task completes. However, excessive nesting leads to "callback hell," making the code difficult to read and maintain.
Promises provide a cleaner alternative by returning an object representing a future value. They use .then() for success and .catch() for error handling, allowing better control over async execution.
Async/Await, built on promises, further simplifies async code, making it more readable and synchronous in appearance.
In modern applications, promises and async/await are preferred due to improved readability, error handling, and maintainability.

Also Read: How to Create Index.js File in Node?

24. What Is the Significance of the __dirname Variable in Node.js?
The __dirname variable provides the absolute directory path of the executing script. It ensures reliable file handling across environments, avoiding issues with relative paths. Common uses include reading/writing files, serving static assets, and setting configuration paths. Being a global variable, it requires no imports.

25. How Can You Handle Exceptions in Node.js?
Exception handling in Node.js is crucial for maintaining application stability. There are multiple ways to handle errors effectively:

Try-Catch Blocks: Used for handling synchronous errors by enclosing risky code inside a try block and catching exceptions in the catch block.
Error Events in EventEmitters: Since many Node.js operations are event-driven, handling errors via .on('error', callback) prevents crashes.
Promise Rejections: Unhandled rejections in promises should be caught using .catch() or global handlers like process.on('unhandledRejection', callback).
Global Exception Handling: process.on('uncaughtException', callback) prevents an entire application from crashing due to an unhandled error, but should be used cautiously as it may leave the system in an unstable state.
Implementing structured error-handling mechanisms ensures resilience and helps in debugging issues effectively.

26. What Is the Purpose of the Node.js Cluster Module?
The Cluster module in Node.js enables applications to take full advantage of multi-core systems by spawning multiple worker processes that run concurrently. By default, Node.js operates on a single thread, which can limit its ability to handle high-traffic applications efficiently. The cluster module mitigates this limitation by creating child processes that share the same server port, thereby improving scalability.

Each worker process runs independently but can communicate with the master process. If a worker crashes, the master process can automatically restart it, enhancing fault tolerance. The cluster module is particularly useful for CPU-intensive tasks where parallel processing is beneficial.

27. How Do You Manage Dependencies in Node.js?
Dependency management in Node.js is handled primarily through npm (Node Package Manager) or Yarn, both of which allow developers to install, update, and remove packages efficiently. Key aspects include:

Installing Dependencies: Using npm install package-name to add dependencies, which are recorded in package.json.
Versioning: Dependencies can be pinned to specific versions to ensure consistency across environments. The package-lock.json file helps maintain the exact versions used.
Updating Dependencies: Running npm update updates installed packages to the latest compatible versions.
Global vs Local Installation: Packages installed with -g are available system-wide, whereas local dependencies are project-specific.
Removing Dependencies: npm uninstall package-name removes unnecessary packages.
Following best practices, such as using dependency checkers (npm audit), ensures security and stability in Node.js applications.

28. What Is the Difference Between .on() and .once() Methods in Node.js EventEmitter?
Both .on() and .once() are used to listen for events in the EventEmitter module, but they differ in execution:

.on(event, listener): Listens for an event indefinitely and triggers the callback function every time the event occurs. It is suitable for continuous monitoring, such as logging or real-time notifications.
.once(event, listener): Executes the callback function only once and then automatically removes the listener. It is useful for one-time setups, such as initializing a resource or handling a single authentication request.
Using .once() where applicable prevents memory leaks by ensuring event handlers do not persist unnecessarily.

29. What Is the Use of the util Module in Node.js?
The util module in Node.js provides utility functions that simplify common programming tasks. Some of its key functionalities include:

util.format(): Similar to printf in C, it allows formatted string output.
util.promisify(): Converts callback-based functions into promise-based ones, making it easier to work with async/await.
util.inspect(): Used for debugging by displaying object properties, even deeply nested ones.
util.inherits(): Helps in setting up prototype-based inheritance between constructor functions.
The util module enhances development efficiency by providing built-in helpers for frequent coding patterns.

30. How Does Node.js Handle JSON Data?
JSON (JavaScript Object Notation) is widely used in Node.js for data exchange, particularly in RESTful APIs. Node.js provides built-in methods for JSON processing:

JSON.parse(string): Converts a JSON string into a JavaScript object, enabling manipulation and data retrieval.
JSON.stringify(object): Converts a JavaScript object into a JSON-formatted string, often used for API responses and data storage.
JSON is the primary format for transmitting data between a client and server in web applications. Efficient handling of JSON, including validation and security checks, is crucial to prevent issues such as injection attacks or unexpected application behavior.

31. What Is the Purpose of the crypto Module in Node.js?
The crypto module in Node.js provides cryptographic functionality to implement security features such as hashing, encryption, decryption, and digital signing. It enables developers to secure data transmission, generate secure tokens, and implement authentication mechanisms.

Key features of the crypto module:

Supports hashing algorithms like SHA-256, SHA-512, and MD5
Implements encryption techniques like AES, RSA, and ECC
Facilitates secure password storage with salting and key derivation functions (PBKDF2, scrypt)
This module is commonly used for user authentication, token generation, and data protection in Node.js applications.

upGrad’s Exclusive Software Development Webinar for you –

SAAS Business – What is So Different?

 

32. What Is a WebSocket in Node.js?
A WebSocket is a communication protocol that provides full-duplex, real-time communication between a client and a server over a single persistent connection. Unlike traditional HTTP requests, which require repeated polling, WebSockets establish a long-lived connection that remains open, allowing both the client and server to send messages at any time.

Key Advantages of WebSockets:

Reduces network overhead by eliminating repeated HTTP requests
Enables instant updates, making it ideal for chat applications, real-time notifications, and live streaming
Works efficiently with Node.js because of its event-driven architecture
WebSockets can be implemented in Node.js using the ws package:

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
server.on('connection', socket => {
  socket.send('Welcome to WebSocket Server');
});
This allows seamless real-time communication between the client and the server.

33. How Does Node.js Handle Concurrency With the Event Loop?
Node.js is single-threaded but highly scalable because of its event-driven, non-blocking architecture. It handles concurrency using the event loop, which efficiently manages asynchronous operations.

How It Works:

When Node.js receives a request, it offloads blocking tasks (like file I/O, database queries) to worker threads or the system kernel.
Once the task completes, its callback function is queued for execution in the event loop.
The event loop processes callbacks in different phases, ensuring non-blocking execution.
This architecture enables Node.js to handle thousands of concurrent requests efficiently without spawning multiple threads, making it ideal for high-performance web applications.

34. What Is the Purpose of the Async/Await Pattern in Node.js?
The async/await pattern simplifies asynchronous programming in Node.js by making the code more readable and easier to manage. It is built on top of Promises and eliminates the need for .then() and .catch() chaining.

Key Features:

async functions always return a Promise.
The await keyword pauses the execution until the Promise resolves.
Improves readability and avoids callback nesting.
Example:

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  return response.json();
}
This approach enhances maintainability and makes asynchronous code more structured.

35. What Is CORS and How Is It Handled in Node.js?
CORS (Cross-Origin Resource Sharing) is a security mechanism that determines whether a browser should allow requests from a different origin (domain, protocol, or port). By default, browsers restrict cross-origin requests for security reasons.

How to Handle CORS in Node.js?
In an Express-based application, the cors middleware can be used to enable or restrict cross-origin requests:

const cors = require('cors');
app.use(cors()); // Allows all origins
Developers can configure CORS to allow specific domains, methods, and headers for secure API access.

36. What Is the Difference Between process.nextTick() and setImmediate()?
Before diving into the comparison, it's important to note that both process.nextTick() and setImmediate() deal with scheduling callbacks in Node.js but execute them at different points in the event loop.

Feature

process.nextTick()

setImmediate()

Execution Timing	Executes before the event loop continues	Executes in the next iteration of the loop
Priority Level	Higher priority; runs before I/O callbacks	Lower priority; runs after I/O callbacks
Use Case	Deferring execution within the same phase	Executing code in the next event loop cycle
Potential Issue	Can block the event loop if misused	More predictable scheduling behavior
37. How Do Streams Work in Node.js?
Streams in Node.js provide an efficient way to process large amounts of data without loading everything into memory at once. They handle data in chunks, improving performance and reducing memory usage.

Stream Type

Description

Example Usage

Readable	Data flows from source to destination (one-way)	Reading files, receiving HTTP requests
Writable	Data flows from destination to source (one-way)	Writing to files, sending HTTP responses
Duplex	Two-way communication (read & write)	Sockets, WebSockets
Transform	Data is modified during transmission	Compression, encryption
Streams are commonly used for file handling, network communications, and real-time data processing.

Also Read: Top 45+ Nodejs Project Ideas for Beginners and Professionals

38. How Can You Prevent Memory Leaks in Node.js?
Memory leaks occur when allocated memory is not properly released, leading to excessive memory consumption. To prevent memory leaks in Node.js:

Clean up event listeners: Avoid accumulating unused event listeners by using removeListener().
Avoid global variables: Unused global variables prevent garbage collection.
Monitor garbage collection: Use tools like node --inspect and Chrome DevTools to track memory usage.
Use memory profiling tools: Tools like Heap Snapshot and clinic.js help identify leaks.
Implementing these best practices ensures optimal memory management in Node.js applications.

39. What Is the Difference Between Forking and Clustering in Node.js?
Both forking and clustering allow running multiple processes in Node.js to enhance performance. However, they serve different purposes:

Feature

Forking

Clustering

Purpose	Creates a separate process for executing a task	Creates multiple worker processes for load balancing
Process Count	One process per forked instance	Multiple processes managed by the cluster module
Memory Usage	Higher (separate memory allocation)	Lower (shared memory among worker processes)
Use Case	Best for CPU-intensive tasks	Best for handling multiple incoming requests
Example	child_process.fork()	cluster.fork()
40. How Can You Improve the Performance of a Node.js Application?
Optimizing a Node.js application is essential for scalability and efficiency. Below are key strategies:

Optimization Technique

Description

Use Caching	Store frequent responses in memory (e.g., Redis, Memcached) to reduce redundant computations.
Optimize Database Queries	Use indexing, avoid unnecessary joins, and limit data fetching to improve database performance.
Avoid Blocking Operations	Use asynchronous operations instead of synchronous ones to prevent delays.
Enable Compression	Use gzip or Brotli compression to reduce response sizes and speed up delivery.
Implement Clustering	Distribute load across multiple processes to utilize multi-core CPUs effectively.
Software Development Courses to upskill

Explore Software Development Courses for Career Progression







Node.js Interview Questions and Answers for Experienced Professionals
For senior-level roles, interviewers focus on advanced concepts such as system architecture, performance optimization, and security best practices. This section covers top Node.js interview questions for experienced that test your ability to handle real-world challenges, optimize applications, and implement best coding practices in large-scale projects.

Let's take a look at these expert-level Node.js interview questions and answers: 

41. How does Node.js overcome the problem of blocking I/O operations?
Node.js uses a non-blocking, event-driven architecture with an asynchronous I/O model. It relies on callbacks, Promises, and the async/await syntax to handle multiple requests concurrently. The single-threaded event loop manages tasks efficiently, preventing the blocking of operations and ensuring smooth performance.

42. How can we use async/await in Node.js?
The async keyword declares an asynchronous function, while await pauses execution until a Promise resolves. This simplifies asynchronous code by making it readable and structured like synchronous code. It eliminates the need for callbacks, enhancing maintainability and debugging.

43. Why should you separate the Express app and server?
Separating the Express app from the server improves testability, scalability, and maintainability. It allows unit testing without starting the server, enables running multiple instances efficiently, and simplifies migrating to different server configurations without modifying core application logic.

44. Explain the concept of stub in Node.js.
A stub is a placeholder function used in testing to simulate real functionality. It returns predefined responses instead of executing actual logic, ensuring predictable outcomes. Stubs help isolate components, test edge cases, and avoid dependencies on external services during unit testing.

45. What is the framework that is used majorly in Node.js today?
Express.js is the most popular Node.js framework, providing a minimalistic, flexible structure for building web applications and APIs. It offers middleware support, routing, and template engines, making development faster and more efficient. Other frameworks include Koa, NestJS, and Hapi.js.

46. What are the security implementations that are present in Node.js?
Node.js offers security measures like HTTPS for encrypted communication, environment variable protection, input validation, and security headers. Using authentication tools like JWT, enforcing CORS policies, and regularly updating dependencies also mitigate vulnerabilities.

47. What is Libuv?
Libuv is a multi-platform library that powers Node.js’s asynchronous I/O operations. It provides event-driven capabilities, handles the event loop, and manages non-blocking I/O tasks such as file system operations, networking, and process management, ensuring efficient resource utilization.

48. What are global objects in Node.js?
Global objects in Node.js are accessible across all modules without requiring explicit imports. Examples include process (provides system information), console (handles logging), setTimeout (executes delayed functions), and __dirname (returns the directory of the current module).

49. Why is assert used in Node.js?
The assert module is used for writing test cases and verifying assumptions in code. It throws errors when conditions fail, helping developers catch issues early. Common methods include assert.strictEqual() for equality checks and assert.deepStrictEqual() for object comparisons.

50. Why is ExpressJS used?
ExpressJS simplifies backend development with features like routing, middleware support, and template engines. It streamlines handling HTTP requests and responses, making it ideal for RESTful APIs and web applications. Its lightweight nature and extensive community support enhance productivity.

51. What is the use of the connect module in Node.js?
The Connect module is a middleware framework for handling HTTP requests. It provides utilities for logging, session management, cookie parsing, and error handling, making it easier to build robust web applications by chaining middleware functions.

52. What’s the difference between ‘front-end’ and ‘back-end’ development?
Front-end and back-end development are two core components of web development. The front-end deals with the user interface and experience, while the back-end handles data processing and server-side logic. Here’s a comparison:

Aspect

Front-End Development

Back-End Development

Definition	Manages the visual and interactive elements of a website or application	Handles server-side logic, databases, and APIs
Technologies	HTML, CSS, JavaScript, React, Angular, Vue.js	Node.js, Python, Java, Ruby, PHP
Role	Ensures a responsive and engaging UI/UX	Manages business logic, authentication, and database interactions
Execution	Runs in the browser	Runs on the server
Examples	Buttons, menus, layouts, animations	User authentication, database queries, API handling
53. What are LTS releases of Node.js?
Long-Term Support (LTS) releases of Node.js receive security updates and bug fixes for a longer duration, typically 30 months. These versions are stable and recommended for production environments, ensuring reliability over feature-driven non-LTS versions.

54. What do you understand about ESLint?
ESLint is a JavaScript linting tool that identifies syntax errors and enforces coding standards. It helps maintain consistent code quality, reduces bugs, and supports custom rule configurations for teams. It integrates with development environments and CI/CD pipelines.

55. Define the concept of the test pyramid. Explain the process of implementing it in terms of HTTP APIs.
The test pyramid categorizes tests into unit (most frequent, testing individual components), integration (validating interactions between components), and end-to-end (simulating real-world use). For HTTP APIs, unit tests check route handlers, integration tests validate middleware, and end-to-end tests simulate API requests.

56. How does Node.js handle child threads?
Node.js is single-threaded but uses the child_process module to spawn child processes for CPU-intensive tasks. These child threads operate independently or communicate via message passing, preventing main-thread blocking while handling parallel workloads.

57. What is an Event Emitter in Node.js?
The EventEmitter module facilitates event-driven programming by allowing objects to emit and listen for events. It helps manage asynchronous operations by executing event handlers when specific events occur, improving modularity and reusability.

58. How to enhance Node.js performance through clustering?
Clustering utilizes multiple CPU cores by creating child processes using the cluster module. It distributes workloads across processes, improving request handling, scalability, and overall application performance.

59. What is a thread pool, and which library handles it in Node.js?
A thread pool is a collection of worker threads used to execute tasks concurrently. The libuv library manages the Node.js thread pool, handling operations like file system access, cryptography, and networking efficiently.

60. How are worker threads different from clusters?
Worker threads enable multithreading within a single process, sharing memory, whereas clusters create separate processes with independent memory spaces. Worker threads suit computational tasks, while clusters efficiently handle multiple incoming HTTP requests.

61. How to measure the duration of async operations?
The console.time() and console.timeEnd() methods measure execution time. Alternatively, performance.now() provides high-precision timestamps, helping track async function execution duration.

62. How to measure the performance of async operations?
Node.js offers tools like --prof, perf_hooks, and external benchmarking libraries like benchmark.js to analyze async function performance and optimize execution times.

63. How Does Node.js Handle Concurrency with a Single Thread?
Node.js uses an event-driven, non-blocking architecture with a single-threaded event loop to manage concurrency. While JavaScript runs in a single thread, Node.js offloads heavy tasks like file I/O, database queries, and networking operations to libuv's thread pool or system APIs. The event loop efficiently manages callbacks, ensuring seamless execution of multiple operations without blocking the main thread.

64. Where is package.json used in Node.js?
The package.json file defines project metadata, dependencies, scripts, and configurations. It helps manage package installations, scripts execution (npm start), and versioning in Node.js projects.

65. What is the difference between readFile and createReadStream in Node.js?
Both readFile and createReadStream are used to read files, but they differ in how they handle memory and performance.

Aspect

readFile

createReadStream

Working	Reads the entire file into memory before processing	Reads the file in chunks using a stream
Best For	Small files (e.g., config files, small JSON files)	Large files (e.g., logs, video files)
Memory Usage	High (entire file stored in RAM)	Low (processes data in chunks)
Performance	Can be slow for large files	Efficient for handling large amounts of data
Use readFile when you need the entire content at once, while createReadStream is better for large files to optimize memory and performance.

Also Read: Node JS vs Python: Difference Between Node JS and Python

Node.js Interview Tips
Preparing for a Node.js interview requires a strong understanding of core concepts, hands-on experience, and familiarity with common Node.js interview questions. Here are some essential tips to help you ace your Node.js interview:

1. Understand Core Concepts
Master key Node.js principles, including event-driven architecture, asynchronous programming, the non-blocking I/O model, and modularization. Strong fundamentals will help in answering both theoretical and practical Node.js interview questions.

2. Practice Hands-on Coding
Work on small projects, contribute to open-source repositories, and build RESTful APIs to gain real-world experience. Practical knowledge demonstrates problem-solving skills and familiarity with Node.js internals.

3. Review Documentation Regularly
Stay updated with the latest Node.js features, best practices, and performance improvements by reading the official Node.js documentation. Knowing recent updates gives you an edge in interviews.

4. Learn Debugging Techniques
Be proficient in debugging using Chrome DevTools, Node.js Inspector, and logging methods like console.log(), debug, and winston. Debugging questions are common in Node.js interviews.

5. Prepare for System Design (For Senior Roles)
If applying for senior positions, understand concepts like scalability, performance optimization, and microservices. Be prepared to discuss load balancing, caching, and event-driven architectures.

6. Know Security Best Practices
Be ready to explain authentication (JWT, OAuth), authorization (RBAC, ACL), and security vulnerabilities such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL Injection. Implementing security best practices is a crucial Node.js interview topic.

Conclusion
Mastering Node.js interview questions requires a solid understanding of core concepts, hands-on experience, and continuous learning. Regularly practicing coding problems, staying updated with the latest Node.js features, and refining debugging and security skills are essential for success.

To improve your Node.js interview performance, focus on real-world projects, contribute to open-source communities, and engage in mock interviews. Adopting a structured approach to learning will boost your confidence and problem-solving abilities irrespective of the roles you apply for.

By following these strategies, you can effectively tackle Node.js interview questions and enhance your chances of securing your desired role in Node.js development.

Boost your career with our popular Software Engineering courses, offering hands-on training and expert guidance to turn you into a skilled software developer.

Master in-demand Software Development skills like coding, system design, DevOps, and agile methodologies to excel in today’s competitive tech industry.

In-Demand Software Development Skills
JavaScript Courses	Core Java Courses	Data Structures Courses
Node.js Courses	SQL Courses	Full stack development Courses
NFT Courses	DevOps Courses	Big Data Courses
React.js Courses	Cyber Security Courses	Cloud Computing Courses
Database Design Courses	Python Courses	Cryptocurrency Courses
Stay informed with our widely-read Software Development articles, covering everything from coding techniques to the latest advancements in software engineering.

Read our Articles related to Software Development
Why Learn to Code Now and How	How to Install Specific Version of NPM Package?	Types of Inheritance in C++ What Should You Know?
Frequently Asked Questions
1. How to clear a Node.js interview?
To clear a Node.js interview, focus on core concepts like event-driven architecture, asynchronous programming, and the Node.js module system. Practice coding challenges, build small projects, and contribute to open source. Stay updated with the latest Node.js features, understand debugging techniques, and prepare for system design if applying for senior roles. Lastly, familiarity with common Node.js interview questions and answers will also help you anticipate what interviewers may ask and answer confidently.

2. Is Node.js a framework?
No, Node.js is not a framework; it is a runtime environment built on Chrome’s V8 JavaScript engine. It allows developers to execute JavaScript code outside a web browser, making it ideal for server-side development. However, frameworks like Express.js, NestJS, and Koa.js are built on top of Node.js to simplify development.

3. Is Node easier than Python?
Node.js vs Python depends on the use case. Node.js is easier for developers familiar with JavaScript and is preferred for real-time applications. Python is simpler for beginners and widely used in data science and AI. Node.js is faster due to asynchronous execution, while Python excels in CPU-intensive tasks.

4. Is Node.js synchronous or asynchronous?
Node.js is primarily asynchronous and non-blocking, meaning it processes multiple requests concurrently using an event-driven model. This improves performance for I/O-heavy tasks. However, Node.js also supports synchronous programming using async/await or synchronous modules, which can be useful in specific cases like file system operations.

5. Is Node.js frontend or backend?
Node.js is primarily used for backend development, but it can also be used in frontend development with frameworks like React or Vue.js for server-side rendering. Its non-blocking I/O model makes it suitable for scalable backend APIs, handling real-time data, and serving as the backend for full-stack applications.

6. How many types of APIs are in Node.js?
Node.js supports two main types of APIs:

REST APIs – Representational State Transfer APIs that use HTTP methods (GET, POST, PUT, DELETE).
WebSocket APIs – Real-time, bidirectional communication APIs for apps like chat applications and live streaming.
Additionally, Node.js provides built-in APIs for file system operations, cryptography, and networking.

7. What are the advantages of Node.js?
Asynchronous & Non-blocking – Handles multiple requests efficiently.
Fast Performance – Uses the V8 engine for quick execution.
Scalability – Suitable for microservices and real-time applications.
Full-stack JavaScript – Allows both frontend and backend development.
Rich Package Ecosystem – Large NPM (Node Package Manager) library for extended functionality.

8. What is the function of fs in Node.js?
The fs (File System) module in Node.js allows developers to perform file-related operations like reading, writing, updating, and deleting files. It supports both synchronous and asynchronous methods. For example, fs.readFile() reads a file asynchronously, while fs.writeFileSync() writes a file synchronously.

9. How do you write a stream to a file in Node.js?
To write a stream to a file in Node.js, use the fs module and create a writable stream. Example:
const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, Node.js Streaming!');
writeStream.end();

This is useful for handling large files efficiently without consuming too much memory.

10. Is Node.js basically JavaScript?
Yes, Node.js is built on JavaScript, but it extends JavaScript capabilities beyond the browser. While JavaScript in the browser is used for client-side interactions, Node.js enables server-side development, file system access, and networking operations, making it a runtime environment rather than just a scripting language.

11. What is REPL in Node.js?
REPL (Read-Eval-Print Loop) is an interactive shell in Node.js that allows developers to execute JavaScript code in real time. It reads user input, evaluates expressions, prints results, and loops. It is useful for testing snippets, debugging, and learning Node.js interactively. Run it by typing node in the terminal.

Node.js Interview Questions and Answers for 2025
By Mayank Sahu

Table of Contents

View all
Node.js Interview Questions and Answers for Freshers
Node.js Interview Questions and Answers For Intermediate-Level
Node.js Interview Questions and Answers for Experienced Professionals
Node.js Interview Tips
Conclusion
Node.js has revolutionized backend development with its asynchronous, event-driven architecture and high scalability. Built on Chrome’s V8 engine, it enables developers to build fast, efficient, and lightweight server-side applications. Its non-blocking I/O model makes it ideal for real-time applications, APIs, and microservices, making it a preferred choice for companies like Netflix, LinkedIn, and PayPal.

In 2025, Node.js is a crucial skill due to its dominance in backend development, high demand in full-stack roles, and efficiency in building scalable applications. So, if you’re preparing for a role that requires Node.js expertise, this blog provides 60+commonly asked Node.js interview questions and answers to help you confidently crack your next Node.js interview. 

Want to dive deeper into Node JS? Kickstart your journey with upGrad’s online data science courses and gain the skills to excel in this data-driven world!  

Node.js Interview Questions and Answers for Freshers
For freshers and entry-level candidates, understanding the core concepts of Node.js is essential. Below are some common Node.js interview questions for freshers along with structured answers to help you confidently tackle Node.js basic interview questions. 

1. What is Node.js, and why is it used?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside the browser. Built on the Chrome V8 engine, it is designed for asynchronous, event-driven programming and is widely used for building scalable web applications, APIs, real-time applications, and microservices.

Example:
It is used in applications like Netflix, PayPal, and LinkedIn due to its speed and scalability.

2. How does Node.js differ from JavaScript in the browser?
Node.js runs JavaScript on the server-side, while browsers execute JavaScript on the client-side.
Node.js provides built-in modules like fs (file system), http, and path to handle server-side operations, which are not available in browsers.
Unlike browsers, Node.js allows direct interaction with the operating system, databases, and file systems.
Example:
In the browser, JavaScript manipulates the DOM, while in Node.js, it handles HTTP requests, database queries, and file operations.

3. Explain the key features of Node.js.
Asynchronous & Non-blocking I/O: Handles multiple requests without waiting for previous ones to complete.
Event-Driven Architecture: Uses an event loop to manage operations efficiently.
Single-Threaded Model: Uses a single thread with asynchronous processing, improving performance.
Fast Execution: Built on the V8 engine, which compiles JavaScript into machine code.
NPM (Node Package Manager): Provides access to thousands of reusable packages.
Example:
Node.js is ideal for real-time applications like chat apps and live streaming services.

4. What is the role of the V8 engine in Node.js?
The V8 engine is Google’s open-source JavaScript engine that compiles JavaScript into machine code for fast execution. It is used in both Google Chrome and Node.js to improve performance.

Example:
Due to the V8 engine, Node.js can handle thousands of concurrent connections, making it suitable for high-performance applications.

5. What is npm, and how does it work?
npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, manage, and share packages (modules) for faster development.

Key commands:

npm init – Initializes a new Node.js project.
npm install <package> – Installs a package.
npm update – Updates installed packages.
Example:
To install Express.js, use:

npm install express
6. What is the event-driven architecture in Node.js?
Node.js follows an event-driven architecture, meaning that actions (like user requests) trigger events instead of sequential execution. The Event Loop listens for these events and handles them asynchronously.

Example:

const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet', () => {
    console.log('Hello, World!');
});
event.emit('greet');
Output: Hello, World!

7. How does the non-blocking I/O model work?
In Node.js, non-blocking I/O allows the system to handle multiple requests simultaneously without waiting for one operation to complete before starting another.

Example:

const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet', () => {
    console.log('Hello, World!');
});
event.emit('greet');
Output:
Reading file...
(file contents displayed later)
The file read operation doesn’t block the execution of other tasks.

8. What are modules in Node.js, and how do you use them?
Modules in Node.js are reusable pieces of code that help keep the code organized. There are three types:

Built-in modules (e.g., fs, path, http)
Custom modules (user-defined)
Third-party modules (installed via npm, e.g., Express)
Example:
 Creating a module (math.js):

exports.add = (a, b) => a + b;
Using the module in another file:

const math = require('./math');
console.log(math.add(5, 3));
Output: 8
9. What is middleware in Express.js?
Middleware functions in Express.js process incoming requests before sending a response. They can modify requests, handle errors, and enable authentication.

Types of middleware:

Application-level middleware – Runs for all routes (app.use()).
Router-level middleware – Specific to certain routes.
Error-handling middleware – Handles errors in the app.
Example:

const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('Request received');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000);
10. What are streams in Node.js, and how are they used?
Streams in Node.js allow handling large amounts of data efficiently by processing it in chunks instead of loading everything into memory.

Types of streams:

Readable Streams: Read data in chunks (e.g., fs.createReadStream()).
Writable Streams: Write data in chunks (e.g., fs.createWriteStream()).
Duplex Streams: Both readable and writable (e.g., net.Socket).
Transform Streams: Modify data as it is read or written.

Example:

const fs = require('fs');
const readStream = fs.createReadStream('file.txt');
readStream.on('data', chunk => {
    console.log('Received chunk:', chunk.toString());
});
This reads and processes a file chunk by chunk, preventing memory overload.

11. What is the difference between process.nextTick() and setImmediate() in Node.js?
Both process.nextTick() and setImmediate() are used for scheduling asynchronous operations in Node.js, but they execute at different points in the event loop.

process.nextTick() schedules a callback before the next event loop iteration.
setImmediate() schedules a callback after the current event loop iteration completes.
Feature

process.nextTick()

setImmediate()

Execution Timing	Runs before the next event loop cycle begins	Runs after the current event loop cycle completes
Priority	Higher priority; executes before I/O events	Lower priority; executes after I/O events
Use Case	Used for deferring execution of a function to the next tick of the event loop	Used for executing callbacks after I/O operations
12. What is a callback function in Node.js, and how is it used?
A callback function is a function passed as an argument to another function, which executes after the completion of an asynchronous operation.

It is widely used in file operations, database queries, and API requests to ensure non-blocking execution.
Example: When reading a file, the callback function executes after the file content is loaded, preventing the application from freezing while waiting for the file.
13. What is the difference between CommonJS and ES6 modules in Node.js?
Node.js supports two module systems: CommonJS (require) and ES6 Modules (import/export). The key differences are:

Feature

CommonJS (require)

ES6 Modules (import/export)

Syntax	const module = require('module')	import module from 'module'
Exporting	module.exports = {}	export default or export {}
File Extension	.js	.mjs or .js (with "type": "module" in package.json)
Loading Type	Synchronous (Blocking)	Asynchronous (Non-Blocking)
Usage in Node.js	Default module system	Requires "type": "module" in package.json
14. How does clustering work in Node.js, and why is it useful?
Node.js is single-threaded, meaning it can only utilize one CPU core at a time. The cluster module allows multiple worker processes to run, each handling a portion of the workload.

The master process creates multiple worker processes to improve performance.
Each worker handles separate incoming requests, preventing bottlenecks.
If a worker crashes, another worker takes over, ensuring high availability.
Clustering is useful for scalability, allowing applications to leverage multi-core processors efficiently.

15. What are Worker Threads in Node.js, and when should you use them?
Worker Threads enable Node.js to execute JavaScript code in multiple threads within the same process.

Unlike the cluster module, Worker Threads do not create separate Node.js processes.
They are ideal for CPU-intensive tasks, such as image processing, cryptography, and mathematical computations.
Since Node.js is single-threaded, Worker Threads help prevent performance bottlenecks by offloading heavy computations.
Earn a Free Certificate in Java Object-oriented Programming from upGrad. Learn the framework of classes and objects, and explore OOP principles: Abstraction, Encapsulation, Inheritance, and Polymorphism. Hurry! Enroll now!

16. How does Node.js handle errors, and what are the different types of error-handling mechanisms?
Node.js provides multiple error-handling techniques to ensure applications remain stable:

Try-Catch Blocks: Used for handling synchronous errors.
Callback Error Handling: Errors are passed as the first argument in callbacks (error-first callbacks).
Promise Error Handling: Uses .catch() to handle rejected Promises.
Global Error Handling: Captures unhandled exceptions using:
process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err);
});
17. What is the purpose of the Buffer module in Node.js, and how is it used?
The Buffer module in Node.js allows handling binary data efficiently. Since JavaScript primarily handles strings, the Buffer module is essential for working with raw binary data, such as files, streams, or network packets.

Buffers help in reading, modifying, and storing binary data without conversion to strings.
They are frequently used in file handling, cryptography, and network communication.
18. What is the difference between fork() and spawn() methods in the child_process module?
The child_process module in Node.js provides fork() and spawn() to create child processes, but they serve different purposes.

Feature

fork()

spawn()

Functionality	Creates a new Node.js process that runs a script with its own V8 instance.	Spawns an external process to execute system commands.
Communication	Supports Inter-Process Communication (IPC), allowing parent and child to exchange messages.	Uses standard input/output streams instead of IPC.
Memory Usage	Higher due to an additional V8 instance.	Lower as it does not create a separate Node.js instance.
Use Case	Running another Node.js script as a child process.	Running system commands like ls, grep, or executing external scripts.
19. What are CORS (Cross-Origin Resource Sharing) issues in Node.js, and how can they be resolved?
CORS is a security restriction enforced by web browsers that blocks requests from different origins unless explicitly allowed by the server.

Example: If a frontend application (example.com) tries to fetch data from an API on (api.example.com), the request may be blocked due to CORS policies.

To resolve CORS issues in Node.js, use the cors middleware in Express.js:

const cors = require('cors');
app.use(cors());
This allows the server to accept requests from different origins.

20. How do you secure a Node.js application against common security vulnerabilities like SQL injection and XSS?
To protect a Node.js application from common security threats, follow these best practices:

Prevent SQL Injection: Use parameterized queries instead of direct SQL queries:
db.query("SELECT * FROM users WHERE username = ?", [userInput], callback);
Prevent XSS (Cross-Site Scripting): Use input sanitization and libraries like helmet to set secure HTTP headers.
Sanitize User Input: Use express-validator to validate user inputs before processing.
Use HTTPS: Encrypt communication using SSL/TLS certificates.
Implement Rate Limiting: Use express-rate-limit to prevent brute-force attacks:
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
Node.js Interview Questions and Answers For Intermediate-Level
This section covers intermediate-level Node.js interview questions and answers, focusing on essential concepts such as asynchronous programming, performance optimization, and key Node.js functionalities. You'll gain insights into problem-solving techniques and best practices, helping you strengthen your expertise and prepare for more advanced Node.js roles.

21. What Is Middleware in Express.js?
Middleware in Express.js is a function that runs during the request-response cycle. It can modify requests, execute logic, or handle errors. Middleware is used for authentication, logging, and validation. Express provides built-in middleware like express.json(), and developers can create custom middleware using next().

22. How Does Node.js Handle File Uploads?
Node.js handles file uploads using libraries like Multer and Formidable, which process multipart/form-data requests. These libraries parse files, validate data, and store uploads. Proper security measures, such as file size limits and MIME type validation, help prevent vulnerabilities like file injection attacks.

23. What Is the Difference Between Promise and Callback in Node.js?
Callbacks and promises are both mechanisms for handling asynchronous operations in Node.js, but they differ in structure and readability.

Callback functions require passing a function as an argument, which executes after a task completes. However, excessive nesting leads to "callback hell," making the code difficult to read and maintain.
Promises provide a cleaner alternative by returning an object representing a future value. They use .then() for success and .catch() for error handling, allowing better control over async execution.
Async/Await, built on promises, further simplifies async code, making it more readable and synchronous in appearance.
In modern applications, promises and async/await are preferred due to improved readability, error handling, and maintainability.

Also Read: How to Create Index.js File in Node?

24. What Is the Significance of the __dirname Variable in Node.js?
The __dirname variable provides the absolute directory path of the executing script. It ensures reliable file handling across environments, avoiding issues with relative paths. Common uses include reading/writing files, serving static assets, and setting configuration paths. Being a global variable, it requires no imports.

25. How Can You Handle Exceptions in Node.js?
Exception handling in Node.js is crucial for maintaining application stability. There are multiple ways to handle errors effectively:

Try-Catch Blocks: Used for handling synchronous errors by enclosing risky code inside a try block and catching exceptions in the catch block.
Error Events in EventEmitters: Since many Node.js operations are event-driven, handling errors via .on('error', callback) prevents crashes.
Promise Rejections: Unhandled rejections in promises should be caught using .catch() or global handlers like process.on('unhandledRejection', callback).
Global Exception Handling: process.on('uncaughtException', callback) prevents an entire application from crashing due to an unhandled error, but should be used cautiously as it may leave the system in an unstable state.
Implementing structured error-handling mechanisms ensures resilience and helps in debugging issues effectively.

26. What Is the Purpose of the Node.js Cluster Module?
The Cluster module in Node.js enables applications to take full advantage of multi-core systems by spawning multiple worker processes that run concurrently. By default, Node.js operates on a single thread, which can limit its ability to handle high-traffic applications efficiently. The cluster module mitigates this limitation by creating child processes that share the same server port, thereby improving scalability.

Each worker process runs independently but can communicate with the master process. If a worker crashes, the master process can automatically restart it, enhancing fault tolerance. The cluster module is particularly useful for CPU-intensive tasks where parallel processing is beneficial.

27. How Do You Manage Dependencies in Node.js?
Dependency management in Node.js is handled primarily through npm (Node Package Manager) or Yarn, both of which allow developers to install, update, and remove packages efficiently. Key aspects include:

Installing Dependencies: Using npm install package-name to add dependencies, which are recorded in package.json.
Versioning: Dependencies can be pinned to specific versions to ensure consistency across environments. The package-lock.json file helps maintain the exact versions used.
Updating Dependencies: Running npm update updates installed packages to the latest compatible versions.
Global vs Local Installation: Packages installed with -g are available system-wide, whereas local dependencies are project-specific.
Removing Dependencies: npm uninstall package-name removes unnecessary packages.
Following best practices, such as using dependency checkers (npm audit), ensures security and stability in Node.js applications.

28. What Is the Difference Between .on() and .once() Methods in Node.js EventEmitter?
Both .on() and .once() are used to listen for events in the EventEmitter module, but they differ in execution:

.on(event, listener): Listens for an event indefinitely and triggers the callback function every time the event occurs. It is suitable for continuous monitoring, such as logging or real-time notifications.
.once(event, listener): Executes the callback function only once and then automatically removes the listener. It is useful for one-time setups, such as initializing a resource or handling a single authentication request.
Using .once() where applicable prevents memory leaks by ensuring event handlers do not persist unnecessarily.

29. What Is the Use of the util Module in Node.js?
The util module in Node.js provides utility functions that simplify common programming tasks. Some of its key functionalities include:

util.format(): Similar to printf in C, it allows formatted string output.
util.promisify(): Converts callback-based functions into promise-based ones, making it easier to work with async/await.
util.inspect(): Used for debugging by displaying object properties, even deeply nested ones.
util.inherits(): Helps in setting up prototype-based inheritance between constructor functions.
The util module enhances development efficiency by providing built-in helpers for frequent coding patterns.

30. How Does Node.js Handle JSON Data?
JSON (JavaScript Object Notation) is widely used in Node.js for data exchange, particularly in RESTful APIs. Node.js provides built-in methods for JSON processing:

JSON.parse(string): Converts a JSON string into a JavaScript object, enabling manipulation and data retrieval.
JSON.stringify(object): Converts a JavaScript object into a JSON-formatted string, often used for API responses and data storage.
JSON is the primary format for transmitting data between a client and server in web applications. Efficient handling of JSON, including validation and security checks, is crucial to prevent issues such as injection attacks or unexpected application behavior.

31. What Is the Purpose of the crypto Module in Node.js?
The crypto module in Node.js provides cryptographic functionality to implement security features such as hashing, encryption, decryption, and digital signing. It enables developers to secure data transmission, generate secure tokens, and implement authentication mechanisms.

Key features of the crypto module:

Supports hashing algorithms like SHA-256, SHA-512, and MD5
Implements encryption techniques like AES, RSA, and ECC
Facilitates secure password storage with salting and key derivation functions (PBKDF2, scrypt)
This module is commonly used for user authentication, token generation, and data protection in Node.js applications.

upGrad’s Exclusive Software Development Webinar for you –

SAAS Business – What is So Different?

 

32. What Is a WebSocket in Node.js?
A WebSocket is a communication protocol that provides full-duplex, real-time communication between a client and a server over a single persistent connection. Unlike traditional HTTP requests, which require repeated polling, WebSockets establish a long-lived connection that remains open, allowing both the client and server to send messages at any time.

Key Advantages of WebSockets:

Reduces network overhead by eliminating repeated HTTP requests
Enables instant updates, making it ideal for chat applications, real-time notifications, and live streaming
Works efficiently with Node.js because of its event-driven architecture
WebSockets can be implemented in Node.js using the ws package:

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
server.on('connection', socket => {
  socket.send('Welcome to WebSocket Server');
});
This allows seamless real-time communication between the client and the server.

33. How Does Node.js Handle Concurrency With the Event Loop?
Node.js is single-threaded but highly scalable because of its event-driven, non-blocking architecture. It handles concurrency using the event loop, which efficiently manages asynchronous operations.

How It Works:

When Node.js receives a request, it offloads blocking tasks (like file I/O, database queries) to worker threads or the system kernel.
Once the task completes, its callback function is queued for execution in the event loop.
The event loop processes callbacks in different phases, ensuring non-blocking execution.
This architecture enables Node.js to handle thousands of concurrent requests efficiently without spawning multiple threads, making it ideal for high-performance web applications.

34. What Is the Purpose of the Async/Await Pattern in Node.js?
The async/await pattern simplifies asynchronous programming in Node.js by making the code more readable and easier to manage. It is built on top of Promises and eliminates the need for .then() and .catch() chaining.

Key Features:

async functions always return a Promise.
The await keyword pauses the execution until the Promise resolves.
Improves readability and avoids callback nesting.
Example:

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  return response.json();
}
This approach enhances maintainability and makes asynchronous code more structured.

35. What Is CORS and How Is It Handled in Node.js?
CORS (Cross-Origin Resource Sharing) is a security mechanism that determines whether a browser should allow requests from a different origin (domain, protocol, or port). By default, browsers restrict cross-origin requests for security reasons.

How to Handle CORS in Node.js?
In an Express-based application, the cors middleware can be used to enable or restrict cross-origin requests:

const cors = require('cors');
app.use(cors()); // Allows all origins
Developers can configure CORS to allow specific domains, methods, and headers for secure API access.

36. What Is the Difference Between process.nextTick() and setImmediate()?
Before diving into the comparison, it's important to note that both process.nextTick() and setImmediate() deal with scheduling callbacks in Node.js but execute them at different points in the event loop.

Feature

process.nextTick()

setImmediate()

Execution Timing	Executes before the event loop continues	Executes in the next iteration of the loop
Priority Level	Higher priority; runs before I/O callbacks	Lower priority; runs after I/O callbacks
Use Case	Deferring execution within the same phase	Executing code in the next event loop cycle
Potential Issue	Can block the event loop if misused	More predictable scheduling behavior
37. How Do Streams Work in Node.js?
Streams in Node.js provide an efficient way to process large amounts of data without loading everything into memory at once. They handle data in chunks, improving performance and reducing memory usage.

Stream Type

Description

Example Usage

Readable	Data flows from source to destination (one-way)	Reading files, receiving HTTP requests
Writable	Data flows from destination to source (one-way)	Writing to files, sending HTTP responses
Duplex	Two-way communication (read & write)	Sockets, WebSockets
Transform	Data is modified during transmission	Compression, encryption
Streams are commonly used for file handling, network communications, and real-time data processing.

Also Read: Top 45+ Nodejs Project Ideas for Beginners and Professionals

38. How Can You Prevent Memory Leaks in Node.js?
Memory leaks occur when allocated memory is not properly released, leading to excessive memory consumption. To prevent memory leaks in Node.js:

Clean up event listeners: Avoid accumulating unused event listeners by using removeListener().
Avoid global variables: Unused global variables prevent garbage collection.
Monitor garbage collection: Use tools like node --inspect and Chrome DevTools to track memory usage.
Use memory profiling tools: Tools like Heap Snapshot and clinic.js help identify leaks.
Implementing these best practices ensures optimal memory management in Node.js applications.

39. What Is the Difference Between Forking and Clustering in Node.js?
Both forking and clustering allow running multiple processes in Node.js to enhance performance. However, they serve different purposes:

Feature

Forking

Clustering

Purpose	Creates a separate process for executing a task	Creates multiple worker processes for load balancing
Process Count	One process per forked instance	Multiple processes managed by the cluster module
Memory Usage	Higher (separate memory allocation)	Lower (shared memory among worker processes)
Use Case	Best for CPU-intensive tasks	Best for handling multiple incoming requests
Example	child_process.fork()	cluster.fork()
40. How Can You Improve the Performance of a Node.js Application?
Optimizing a Node.js application is essential for scalability and efficiency. Below are key strategies:

Optimization Technique

Description

Use Caching	Store frequent responses in memory (e.g., Redis, Memcached) to reduce redundant computations.
Optimize Database Queries	Use indexing, avoid unnecessary joins, and limit data fetching to improve database performance.
Avoid Blocking Operations	Use asynchronous operations instead of synchronous ones to prevent delays.
Enable Compression	Use gzip or Brotli compression to reduce response sizes and speed up delivery.
Implement Clustering	Distribute load across multiple processes to utilize multi-core CPUs effectively.
Software Development Courses to upskill

Explore Software Development Courses for Career Progression







Node.js Interview Questions and Answers for Experienced Professionals
For senior-level roles, interviewers focus on advanced concepts such as system architecture, performance optimization, and security best practices. This section covers top Node.js interview questions for experienced that test your ability to handle real-world challenges, optimize applications, and implement best coding practices in large-scale projects.

Let's take a look at these expert-level Node.js interview questions and answers: 

41. How does Node.js overcome the problem of blocking I/O operations?
Node.js uses a non-blocking, event-driven architecture with an asynchronous I/O model. It relies on callbacks, Promises, and the async/await syntax to handle multiple requests concurrently. The single-threaded event loop manages tasks efficiently, preventing the blocking of operations and ensuring smooth performance.

42. How can we use async/await in Node.js?
The async keyword declares an asynchronous function, while await pauses execution until a Promise resolves. This simplifies asynchronous code by making it readable and structured like synchronous code. It eliminates the need for callbacks, enhancing maintainability and debugging.

43. Why should you separate the Express app and server?
Separating the Express app from the server improves testability, scalability, and maintainability. It allows unit testing without starting the server, enables running multiple instances efficiently, and simplifies migrating to different server configurations without modifying core application logic.

44. Explain the concept of stub in Node.js.
A stub is a placeholder function used in testing to simulate real functionality. It returns predefined responses instead of executing actual logic, ensuring predictable outcomes. Stubs help isolate components, test edge cases, and avoid dependencies on external services during unit testing.

45. What is the framework that is used majorly in Node.js today?
Express.js is the most popular Node.js framework, providing a minimalistic, flexible structure for building web applications and APIs. It offers middleware support, routing, and template engines, making development faster and more efficient. Other frameworks include Koa, NestJS, and Hapi.js.

46. What are the security implementations that are present in Node.js?
Node.js offers security measures like HTTPS for encrypted communication, environment variable protection, input validation, and security headers. Using authentication tools like JWT, enforcing CORS policies, and regularly updating dependencies also mitigate vulnerabilities.

47. What is Libuv?
Libuv is a multi-platform library that powers Node.js’s asynchronous I/O operations. It provides event-driven capabilities, handles the event loop, and manages non-blocking I/O tasks such as file system operations, networking, and process management, ensuring efficient resource utilization.

48. What are global objects in Node.js?
Global objects in Node.js are accessible across all modules without requiring explicit imports. Examples include process (provides system information), console (handles logging), setTimeout (executes delayed functions), and __dirname (returns the directory of the current module).

49. Why is assert used in Node.js?
The assert module is used for writing test cases and verifying assumptions in code. It throws errors when conditions fail, helping developers catch issues early. Common methods include assert.strictEqual() for equality checks and assert.deepStrictEqual() for object comparisons.

50. Why is ExpressJS used?
ExpressJS simplifies backend development with features like routing, middleware support, and template engines. It streamlines handling HTTP requests and responses, making it ideal for RESTful APIs and web applications. Its lightweight nature and extensive community support enhance productivity.

51. What is the use of the connect module in Node.js?
The Connect module is a middleware framework for handling HTTP requests. It provides utilities for logging, session management, cookie parsing, and error handling, making it easier to build robust web applications by chaining middleware functions.

52. What’s the difference between ‘front-end’ and ‘back-end’ development?
Front-end and back-end development are two core components of web development. The front-end deals with the user interface and experience, while the back-end handles data processing and server-side logic. Here’s a comparison:

Aspect

Front-End Development

Back-End Development

Definition	Manages the visual and interactive elements of a website or application	Handles server-side logic, databases, and APIs
Technologies	HTML, CSS, JavaScript, React, Angular, Vue.js	Node.js, Python, Java, Ruby, PHP
Role	Ensures a responsive and engaging UI/UX	Manages business logic, authentication, and database interactions
Execution	Runs in the browser	Runs on the server
Examples	Buttons, menus, layouts, animations	User authentication, database queries, API handling
53. What are LTS releases of Node.js?
Long-Term Support (LTS) releases of Node.js receive security updates and bug fixes for a longer duration, typically 30 months. These versions are stable and recommended for production environments, ensuring reliability over feature-driven non-LTS versions.

54. What do you understand about ESLint?
ESLint is a JavaScript linting tool that identifies syntax errors and enforces coding standards. It helps maintain consistent code quality, reduces bugs, and supports custom rule configurations for teams. It integrates with development environments and CI/CD pipelines.

55. Define the concept of the test pyramid. Explain the process of implementing it in terms of HTTP APIs.
The test pyramid categorizes tests into unit (most frequent, testing individual components), integration (validating interactions between components), and end-to-end (simulating real-world use). For HTTP APIs, unit tests check route handlers, integration tests validate middleware, and end-to-end tests simulate API requests.

56. How does Node.js handle child threads?
Node.js is single-threaded but uses the child_process module to spawn child processes for CPU-intensive tasks. These child threads operate independently or communicate via message passing, preventing main-thread blocking while handling parallel workloads.

57. What is an Event Emitter in Node.js?
The EventEmitter module facilitates event-driven programming by allowing objects to emit and listen for events. It helps manage asynchronous operations by executing event handlers when specific events occur, improving modularity and reusability.

58. How to enhance Node.js performance through clustering?
Clustering utilizes multiple CPU cores by creating child processes using the cluster module. It distributes workloads across processes, improving request handling, scalability, and overall application performance.

59. What is a thread pool, and which library handles it in Node.js?
A thread pool is a collection of worker threads used to execute tasks concurrently. The libuv library manages the Node.js thread pool, handling operations like file system access, cryptography, and networking efficiently.

60. How are worker threads different from clusters?
Worker threads enable multithreading within a single process, sharing memory, whereas clusters create separate processes with independent memory spaces. Worker threads suit computational tasks, while clusters efficiently handle multiple incoming HTTP requests.

61. How to measure the duration of async operations?
The console.time() and console.timeEnd() methods measure execution time. Alternatively, performance.now() provides high-precision timestamps, helping track async function execution duration.

62. How to measure the performance of async operations?
Node.js offers tools like --prof, perf_hooks, and external benchmarking libraries like benchmark.js to analyze async function performance and optimize execution times.

63. How Does Node.js Handle Concurrency with a Single Thread?
Node.js uses an event-driven, non-blocking architecture with a single-threaded event loop to manage concurrency. While JavaScript runs in a single thread, Node.js offloads heavy tasks like file I/O, database queries, and networking operations to libuv's thread pool or system APIs. The event loop efficiently manages callbacks, ensuring seamless execution of multiple operations without blocking the main thread.

64. Where is package.json used in Node.js?
The package.json file defines project metadata, dependencies, scripts, and configurations. It helps manage package installations, scripts execution (npm start), and versioning in Node.js projects.

65. What is the difference between readFile and createReadStream in Node.js?
Both readFile and createReadStream are used to read files, but they differ in how they handle memory and performance.

Aspect

readFile

createReadStream

Working	Reads the entire file into memory before processing	Reads the file in chunks using a stream
Best For	Small files (e.g., config files, small JSON files)	Large files (e.g., logs, video files)
Memory Usage	High (entire file stored in RAM)	Low (processes data in chunks)
Performance	Can be slow for large files	Efficient for handling large amounts of data
Use readFile when you need the entire content at once, while createReadStream is better for large files to optimize memory and performance.

Also Read: Node JS vs Python: Difference Between Node JS and Python

Node.js Interview Tips
Preparing for a Node.js interview requires a strong understanding of core concepts, hands-on experience, and familiarity with common Node.js interview questions. Here are some essential tips to help you ace your Node.js interview:

1. Understand Core Concepts
Master key Node.js principles, including event-driven architecture, asynchronous programming, the non-blocking I/O model, and modularization. Strong fundamentals will help in answering both theoretical and practical Node.js interview questions.

2. Practice Hands-on Coding
Work on small projects, contribute to open-source repositories, and build RESTful APIs to gain real-world experience. Practical knowledge demonstrates problem-solving skills and familiarity with Node.js internals.

3. Review Documentation Regularly
Stay updated with the latest Node.js features, best practices, and performance improvements by reading the official Node.js documentation. Knowing recent updates gives you an edge in interviews.

4. Learn Debugging Techniques
Be proficient in debugging using Chrome DevTools, Node.js Inspector, and logging methods like console.log(), debug, and winston. Debugging questions are common in Node.js interviews.

5. Prepare for System Design (For Senior Roles)
If applying for senior positions, understand concepts like scalability, performance optimization, and microservices. Be prepared to discuss load balancing, caching, and event-driven architectures.

6. Know Security Best Practices
Be ready to explain authentication (JWT, OAuth), authorization (RBAC, ACL), and security vulnerabilities such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL Injection. Implementing security best practices is a crucial Node.js interview topic.

Conclusion
Mastering Node.js interview questions requires a solid understanding of core concepts, hands-on experience, and continuous learning. Regularly practicing coding problems, staying updated with the latest Node.js features, and refining debugging and security skills are essential for success.

To improve your Node.js interview performance, focus on real-world projects, contribute to open-source communities, and engage in mock interviews. Adopting a structured approach to learning will boost your confidence and problem-solving abilities irrespective of the roles you apply for.

By following these strategies, you can effectively tackle Node.js interview questions and enhance your chances of securing your desired role in Node.js development.

Boost your career with our popular Software Engineering courses, offering hands-on training and expert guidance to turn you into a skilled software developer.

Master in-demand Software Development skills like coding, system design, DevOps, and agile methodologies to excel in today’s competitive tech industry.

In-Demand Software Development Skills
JavaScript Courses	Core Java Courses	Data Structures Courses
Node.js Courses	SQL Courses	Full stack development Courses
NFT Courses	DevOps Courses	Big Data Courses
React.js Courses	Cyber Security Courses	Cloud Computing Courses
Database Design Courses	Python Courses	Cryptocurrency Courses
Stay informed with our widely-read Software Development articles, covering everything from coding techniques to the latest advancements in software engineering.

Read our Articles related to Software Development
Why Learn to Code Now and How	How to Install Specific Version of NPM Package?	Types of Inheritance in C++ What Should You Know?
Frequently Asked Questions
1. How to clear a Node.js interview?
To clear a Node.js interview, focus on core concepts like event-driven architecture, asynchronous programming, and the Node.js module system. Practice coding challenges, build small projects, and contribute to open source. Stay updated with the latest Node.js features, understand debugging techniques, and prepare for system design if applying for senior roles. Lastly, familiarity with common Node.js interview questions and answers will also help you anticipate what interviewers may ask and answer confidently.

2. Is Node.js a framework?
No, Node.js is not a framework; it is a runtime environment built on Chrome’s V8 JavaScript engine. It allows developers to execute JavaScript code outside a web browser, making it ideal for server-side development. However, frameworks like Express.js, NestJS, and Koa.js are built on top of Node.js to simplify development.

3. Is Node easier than Python?
Node.js vs Python depends on the use case. Node.js is easier for developers familiar with JavaScript and is preferred for real-time applications. Python is simpler for beginners and widely used in data science and AI. Node.js is faster due to asynchronous execution, while Python excels in CPU-intensive tasks.

4. Is Node.js synchronous or asynchronous?
Node.js is primarily asynchronous and non-blocking, meaning it processes multiple requests concurrently using an event-driven model. This improves performance for I/O-heavy tasks. However, Node.js also supports synchronous programming using async/await or synchronous modules, which can be useful in specific cases like file system operations.

5. Is Node.js frontend or backend?
Node.js is primarily used for backend development, but it can also be used in frontend development with frameworks like React or Vue.js for server-side rendering. Its non-blocking I/O model makes it suitable for scalable backend APIs, handling real-time data, and serving as the backend for full-stack applications.

6. How many types of APIs are in Node.js?
Node.js supports two main types of APIs:

REST APIs – Representational State Transfer APIs that use HTTP methods (GET, POST, PUT, DELETE).
WebSocket APIs – Real-time, bidirectional communication APIs for apps like chat applications and live streaming.
Additionally, Node.js provides built-in APIs for file system operations, cryptography, and networking.

7. What are the advantages of Node.js?
Asynchronous & Non-blocking – Handles multiple requests efficiently.
Fast Performance – Uses the V8 engine for quick execution.
Scalability – Suitable for microservices and real-time applications.
Full-stack JavaScript – Allows both frontend and backend development.
Rich Package Ecosystem – Large NPM (Node Package Manager) library for extended functionality.

8. What is the function of fs in Node.js?
The fs (File System) module in Node.js allows developers to perform file-related operations like reading, writing, updating, and deleting files. It supports both synchronous and asynchronous methods. For example, fs.readFile() reads a file asynchronously, while fs.writeFileSync() writes a file synchronously.

9. How do you write a stream to a file in Node.js?
To write a stream to a file in Node.js, use the fs module and create a writable stream. Example:
const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, Node.js Streaming!');
writeStream.end();

This is useful for handling large files efficiently without consuming too much memory.

10. Is Node.js basically JavaScript?
Yes, Node.js is built on JavaScript, but it extends JavaScript capabilities beyond the browser. While JavaScript in the browser is used for client-side interactions, Node.js enables server-side development, file system access, and networking operations, making it a runtime environment rather than just a scripting language.

11. What is REPL in Node.js?
REPL (Read-Eval-Print Loop) is an interactive shell in Node.js that allows developers to execute JavaScript code in real time. It reads user input, evaluates expressions, prints results, and loops. It is useful for testing snippets, debugging, and learning Node.js interactively. Run it by typing node in the terminal.

Node.js Interview Questions and Answers
Last Updated : 10 Apr 2026
Node.js interview questions and answers include event-driven architecture, APIs, and backend development concepts. Practice these real-world questions and answers to strengthen your server-side development skills.

Node.js Interview Questions and Answers
A list of top frequently asked Node.js interview questions and answers are given below.

1) What is Node.js?
Node.js is Server-side scripting which is used to build scalable programs. It is a web application framework built on Google Chrome's JavaScript Engine. It runs within the Node.js runtime on Mac OS, Windows, and Linux with no changes. This runtime facilitates you to execute a JavaScript code on any machine outside a browser.

2) Is Node.js free to use?
Yes. It is released under MIT license and is free to use.

3) Is Node a single threaded application?
Yes. Node is a single-threaded application with event looping.

4) What is the purpose of Node.js?
These are the following purposes of Node.js:

Real-time web applications
Network applications
Distributed systems
General purpose applications
5) What are the advantages of Node.js?
Following are the main advantages of Node.js:

Node.js is asynchronous and event-driven. All API?s of Node.js library are non-blocking, and its server doesn't wait for an API to return data. It moves to the next API after calling it, and a notification mechanism of Events of Node.js responds to the server from the previous API call.
Node.js is very fast because it builds on Google Chrome?s V8 JavaScript engine. Its library is very fast in code execution.
Node.js is single threaded but highly scalable.
Node.js provides a facility of no buffering. Its application never buffers any data. It outputs the data in chunks.
6) Explain Node.js web application architecture?
A web application distinguishes into 4 layers:

Client Layer: The Client layer contains web browsers, mobile browsers or applications which can make an HTTP request to the web server.
Server Layer: The Server layer contains the Web server which can intercept the request made by clients and pass them the response.
Business Layer: The business layer contains application server which is utilized by the web server to do required processing. This layer interacts with the data layer via database or some external programs.
Data Layer: The Data layer contains databases or any source of data.
Node.js web layer
7) What do you understand by the term I/O?
The term I/O stands for input and output. It is used to access anything outside of your application. The I/O describes any program, operation, or device that transfers data to or from a medium or another medium. This medium can be a physical device, network, or files within a system.

I/O is loaded into the machine memory to run the program once the application starts.

8) How many types of API functions are available in Node.js?
There are two types of API functions in Node.js:

Asynchronous, Non-blocking functions
Synchronous, Blocking functions
9) What do you understand by the first class function in JavaScript?
When functions are treated like any other variable, then those functions are called first-class functions. Apart from JavaScript, many other programming languages, such as Scala, Haskell, etc. follow this pattern. The first class functions can be passed as a param to another function (callback), or a function can return another function (higher-order function). Some examples of higher-order functions that are popularly used are map() and filter().

10) What is the difference between JavaScript and Node.js?
Difference between JavaScript and Node.js

The following table specifies the crucial differences between JavaScript and Node.js:

Comparison features
JavaScript
Node.js
Type
JavaScript is a programming language. More precisely, you can say that it is a scripting language used for writing scripts on the website.
Node.js is an interpreter and run time environment for JavaScript.
Utility
JavaScript is used for any client-side activity for a web application.
Node.js is used for accessing or performing any non-blocking operation of any operating system.
Running Engine
The running engine for JavaScript is Spider monkey (Firefox), JavaScript Core (Safari), V8 (Google Chrome), etc.
The running engine for Node.js is V8 (Google Chrome).
Browser compatibility
JavaScript can only be run in browsers.
The Node.js code can be run outside the browser.
Platform dependency
JavaScript is basically used on the client-side and is used in frontend development.
Node.js is mostly used on the server-side and is used in server-side development.
HTML compatibility
JavaScript is capable enough to add HTML and play with the DOM.
Node.js is not compatible enough to add HTML tags.
Examples
Some examples of the JavaScript frameworks are RamdaJS, TypedJS, etc.
Some examples of the Node.js modules are Lodash, express, etc. We have to import these modules from npm.
Written in
JavaScript is the upgraded version of ECMA script that uses Chrome's V8 engine and is written in C++.
Node.js is written in C, C++, and Javascript.
11) Explain the working of Node.js?
The workflow of a Node.js web server typically looks like the following diagram. Let us see the flow of operations in detail:

Node.js Interview Questions
According to the above diagram, the clients send requests to the webserver to interact with the web application. These requests can be non-blocking or blocking and used for querying the data, deleting data, or updating the data.
js receives the incoming requests and adds those to the Event Queue.
After this step, the requests are passed one by one through the Event Loop. It checks if the requests are simple enough not to require any external resources.
The event loop then processes the simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients.
A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing external resources, such as computation, database, file system, etc.
Once the task is completed, the response is sent to the Event Loop that sends that response back to the client.
12) How can you manage the packages in your Node.js project?
We can manage the packages in our Node.js project by using several package installers and their configuration file accordingly. Most of them use npm or yarn. The npm and yarn both provide almost all libraries of JavaScript with extended features of controlling environment-specific configurations. We can use package.json and package-lock.json to maintain versions of libs being installed in a project. So, there is no issue in porting that app to a different environment.

13) Why is Node.js Single-threaded?
Node.js is a single-threaded application with event looping for async processing. The biggest advantage of doing async processing on a single thread under typical web loads is that you can achieve more performance and scalability than the typical thread-based implementation.

14) What do you understand by callback hell in Node.js?
Callback hell is a phenomenon that creates a lot of problems for a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. A function is called an asynchronous function when some external activity must complete before processing a result. It is called asynchronous because there is an unpredictable amount of time before a result becomes available. These functions require a callback function to handle errors and process the result.

Example:

getData(function(a){
    getMoreData(a, function(b){
        getMoreData(b, function(c){ 
            getMoreData(c, function(d){ 
	            getMoreData(d, function(e){ 
		            ...
		        });
	        });
        });
    });
});

15) How is Node.js better than other most popular frameworks?
Based on the following criteria, we can say that Node.js is better than other most popular frameworks:

js makes development simple because of its non-blocking I/O and even-based model. This simplicity results in short response time and concurrent processing, unlike other frameworks where developers use thread management.
js runs on a chrome V8 engine which is written in C++. It enhances its performance highly with constant improvement.
With Node.js, we will use JavaScript in both the frontend and backend development that will be much faster.
js provides ample libraries so that we don't need to reinvent the wheel.
16) In which types of applications is Node.js most frequently used?
Node.js is most frequently and widely used in the following applications:

Internet of Things
Real-time collaboration tools
Real-time chats
Complex SPAs (Single-Page Applications)
Streaming applications
Microservices architecture etc.
17) What are some commonly used timing features of Node.js?
Following is a list of some commonly used timing features of Node.js:

setTimeout/clearTimeout: This timing feature of Node.js is used to implement delays in the code execution.
setInterval/clearInterval: The setInterval or clearInterval timing feature is used to run a code block multiple times in the application.
setImmediate/clearImmediate: This timing feature of Node.js is used to set the execution of the code at the end of the event loop cycle.
nextTick: This timing feature sets the execution of code at the beginning of the next event loop cycle.
18) What do you understand by the term fork in Node.js?
Generally, a fork is used to spawn child processes. In Node.js, it is used to create a new instance of the V8 engine to run multiple workers to execute the code.

19) Which is the best tool we can use to assure consistent code style in Node.js?
ESLint tool is one of the best tools we can use with any IDE to ensure a consistent coding style. It also helps in maintaining the codebase.

20) What is the main difference between front-end and back-end development?
The following table specifies the key differences between a front-end and back-end development:

Front-end Development
Back-end Development
The front-end development in an application refers to the client-side of an application.
The back-end development in an application refers to the server-side of an application.
As the name specifies, the front-end development is the part of a web application where users can see and interact.
As the name specifies, the back-end development consists of everything that happens behind the scenes and users cannot see and interact with.
The front-end development includes everything that attributes to the visual aspects of a web application.
The back-end development generally includes a web server that communicates with the database to serve the users' requests.
HTML, CSS, Bootstrap, jQuery, JavaScript, AngularJS, and React.js are essential front-end development technologies.
Java, PHP, Python, C++, Node.js, etc., are the technologies required for back-end development.
Examples of some front-end frameworks are AngularJS, React.js, jQuery, Sass, etc.
Examples of some back-end frameworks are Express, Django, Rails, Laravel, Spring, etc.
21) Give an example to demonstrate how can we use async await in Node.js?
See the following example of using async-await pattern:

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

22) What are the modules in Node.js? Which are the different modules used in Node.js?
In Node.js applications, modules are like JavaScript libraries and include a set of functions. To include a module in a Node.js application, we must use the require() function with the parentheses containing the module's name.

Node.js has several modules which are used to provide the basic functionality needed for a web application. Following is a list of some of them:

Core Modules
Description
HTTP:
The HTTP module includes classes, methods, and events to create a Node.js HTTP server.
util:
The util module includes utility functions required in the application and is very useful for developers.
url:
The url module is used to include the methods for URL parsing.
fs:
The fs module includes events, classes, and methods to handle the file I/O operations.
stream:
The stream module is used to include the methods to handle streaming data.
query string:
The query string module is used to include the methods to work with a query string.
zlib:
The zlib module is used to include the methods to compress or decompress the files used in an application.
23) What are buffers in Node.js?
In general, a buffer is a temporary memory mainly used by the stream to hold on to some data until it is consumed. Buffers are used to represent a fixed-size chunk of memory allocated outside of the V8 JavaScript engine. It can't be resized. It is like an array of integers, which each represents a byte of data. It is implemented by the Node. js Buffer class. Buffers also support legacy encodings like ASCII, utf-8, etc.

24) What is error-first callback?
Error-first callbacks are used to pass errors and data. If something goes wrong, the programmer has to check the first argument because it is always an error argument. Additional arguments are used to pass data.

fs.readFile(filePath, function(err, data) {  
  if (err) {
    //handle the error
  }
  // use the data object
});

25) What is an asynchronous API?
All the API's of Node.js library are asynchronous means non-blocking. A Node.js based server never waits for an API to return data. The Node.js server moves to the next API after calling it, and a notification mechanism of Events of Node.js responds to the server for the previous API call.

26) How can you avoid callbacks?
To avoid callbacks, you can use any one of the following options:

You can use modularization. It breaks callbacks into independent functions.
You can use promises.
You can use yield with Generators and Promises.
27) Does Node.js provide Debugger?
Yes, Node.js provides a simple TCP based protocol and built-in debugging client. For debugging your JavaScript file, you can use debug argument followed by the js file name you want to debug.

Syntax:
    node debug [script.js | -e "script" | <host>:<port>]

28) What is a control flow function?
Control flow function is a generic piece of code that runs in between several asynchronous function calls.

29) How "Control Flow" controls the functions calls?
The control flow does the following job:

Control the order of execution
Collect data
Limit concurrency
Call the next step in a program
30) Is it possible to access DOM in Node?
No, it is not possible to access DOM in Node.

31) What types of tasks can be done asynchronously using the event loop?
I/O operations
Heavy computation
Anything requiring blocking
32) What is REPL in Node.js?
REPL stands for Read Eval Print Loop. It specifies a computer environment like a window console or Unix/Linux shell where you can enter a command, and the computer responds with an output. It is very useful in writing and debugging the codes. REPL environment incorporates Node.js.

See the Example:

$ node
> 100 + 200
300
> 100 + ( 200 * 300 ) - 400
59700
>


Node.js Interview Questions
33) Explain the tasks of terms used in Node REPL.
Following are the terms used in REPL with their defined tasks:

Read: It reads user's input; parse the input into JavaScript data-structure and stores in memory.

Eval: It takes and evaluates the data structure.

Print: It is used to print the result.

Loop: It loops the above command until user press ctrl-c twice to terminate.

34) Is it possible to evaluate simple expressions using Node REPL?
Yes. You can evaluate simple expressions using Node REPL.

35) What is the use of the underscore variable in REPL?
In REPL, the underscore variable is used to get the last result.

C:\Nodejs_WorkSpace>node
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
>

36) Does Node.js supports cryptography?
Yes, Node.js Crypto module supports cryptography. It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions. For example:

    const crypto = require('crypto');  
    const secret = 'abcdefg';  
    const hash = crypto.createHmac('sha256', secret)  
                       .update('Welcome to tpointtech')  
                       .digest('hex');  
    console.log(hash);  

37) What is npm? What is the main functionality of npm?
npm stands for Node Package Manager. Following are the two main functionalities of npm:

Online repositories for node.js packages/modules which are searchable on search.nodejs.org
Command line utility to install packages, do version management and dependency management of Node.js packages.
38) What tools can be used to assure a consistent style in Node.js?
Following is a list of tools that can be used in developing code in teams, to enforce a given style guide and to catch common errors using static analysis.

JSLint
JSHint
ESLint
JSCS
39) What is the difference between operational and programmer errors?
Operational errors are not bugs, but create problems with the system like request timeout or hardware failure. On the other hand, programmer errors are actual bugs.

40) What is the difference between the global installation of dependencies and local installation of dependencies?
Global installation of dependencies is stored in/npm directory. While local installation of dependencies stores in the local mode. Here local mode refers to the package installation in node_modules directory lying in the folder where Node application is present.
Globally deployed packages cannot be imported using require() in Node application directly. On the other hand, locally deployed packages are accessible via require().
To install a Node project globally -g flag is used.
C:\Nodejs_WorkSpace>npm install express ?g 

To install a Node project locally, the syntax is:
C:\Nodejs_WorkSpace>npm install express 

41) What is the use of a buffer class in Node.js?
The Node.js provides Buffer class to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. It is a global class and can be accessed in an application without importing a buffer module. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it's necessary to handle octet streams.

42) What is the role of assert in Node.js?
The Node.js Assert is a way to write tests. It provides no feedback when running your test unless one fails. The assert module provides a simple set of assertion tests that can be used to test invariants. The module is intended for internal use by Node.js, but can be used in application code via require ('assert'). For example:

    var assert = require('assert');  
    function add (a, b) {  
      return a + b;  
    }  
    var expected = add(1,2);  
    assert( expected === 3, 'one plus two is three');   

43) What are the streams in Node.js?
The Streams are the objects that facilitate you to read data from a source and write data to a destination. There are four types of streams in Node.js:

Readable: This stream is used for reading operations.
Writable: This stream is used for write operations.
Duplex: This stream can be used for both reading and write operations.
Transform: It is a type of duplex stream where the output computes according to input.
44) What is event-driven programming in Node.js?
In Node.js, event-driven programming means as soon as Node starts its server, it initiates its variables, declares functions and then waits for an event to occur. It is one of the reasons why Node.js is pretty fast compared to other similar technologies.

Node.js events 1
45) What is the difference between events and callbacks in Node.js?
Although, Events and Callbacks look similar the differences lies in the fact that callback functions are called when an asynchronous function returns its result whereas event handling works on the observer pattern. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through the events module and EventEmitter class which is used to bind events and event listeners.

46) What is the Punycode in Node.js?
The Punycode is an encoding syntax which is used to convert Unicode (UTF-8) string of characters to ASCII string of characters. It is bundled with Node.js v0.6.2 and later versions. If you want to use it with other Node.js versions, then use npm to install Punycode module first. You have to used require ('Punycode') to access it.

Syntax:
    punycode = require('punycode');

47) What does Node.js TTY module contains?
The Node.js TTY module contains tty.ReadStream and tty.WriteStream classes. In most cases, there is no need to use this module directly. You have to used require ('tty') to access this module.

Syntax:
var tty = require('tty'); 

48) What are the key differences between Angular and Node.js?
Key differences between Angular and Node.js:

Angular
Node.js
Angular is a structural front-end development framework for developing dynamic web apps.
Node.js is a cross-platform, run-time, server-side environment for applications written in JavaScript language.
Angular is entirely written in TypeScript language.
Node.js is written in C, C++, and JavaScript languages.
Angular is used for building single-page, client-side web applications.
Node.js is used for building fast and scalable, client-side, and server-side networking applications.
Angular is easy to use. The developers need to add the Angular file to use it in their applications.
Node.js is slightly complicated to use. Here, the developers need to install Node.js on their computer system.
Angular split a web application into MVC components. Here, the models and views are much simpler than what is found in other JavaScript client-side frameworks.
Node.js generates database queries and uses the event-driven nature of JavaScript to support non-blocking operations, making the platform efficient.
Angular is based on the model-view-controller design pattern and follows that pattern completely.
Node.js is single-threaded. It means the web requests and processing runs on the same thread.
Angular is a Web Framework.
Node.js provides different Web Frameworks like Socket.io, Hapi.js, Meteor.js, Express.js, and Sails.js, etc.
Angular is ideal for creating highly active and interactive web apps.
Node.js is the best for developing small-size projects.
Angular requires a deep understanding of prototyping, scope, and various other JavaScript aspects.
Node.js facilitates developers to use JavaScript on the client as well as the server-side. So, they can focus on learning one language.
49) What are the main differences between operational and programmer errors?
The most crucial difference between operational and programmer errors is that the operational errors are not bugs but problems with the system such as to request timeout or hardware failure. On the other hand, the programmer errors are actual bugs in the application.

50) What do you understand by an EventEmitter in Node.js?
In Node.js, an EventEmitter is a class that includes all the objects capable of emitting events. This can be achieved by attaching named events that are emitted by the object using an eventEmitter.on() function. Thus whenever this object throws an event, the attached functions are invoked synchronously.

Example:

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
 console.log('an event occurred!');
});
myEmitter.emit('event');

51) What is the difference between readFile and createReadStream in Node.js?
In Node.js, there are two ways to read and execute files: readFile and CreateStream.

The readFile() process is a fully buffered process that returns the response only when the complete file is pushed into the buffer and is read. This process is called a memory-intensive process, and in the case of large files, the processing can be very slow.
On the other hand, the createReadStream() is a partially buffered process that treats the entire process as an event series. The entire file is split into chunks and then processed and sent back as a response one by one. After completing this step, they are finally removed from the buffer. Unlike the readFile process, the createReadStream process is effective for the processing of large files.
52) What is the concept of Punycode in Node.js?
In Node.js, the concept of Punycode is used for converting one type of string into another type. Punycode is an encoding syntax used for converting Unicode (UTF-8) string of characters into a basic ASCII string of characters. Now, the hostnames can only understand the ASCII characters so, after the Node.js version 0.6.2 onwards, it was bundled up with the default Node package.

To use it with any previous versions, you have to use the following code:

Syntax:

punycode = require('punycode');

53) How can you enhance the Node.js performance through clustering?
Just because the Node.js applications run on a single processor, they don't take advantage of a multiple-core system by default. Clustering is used to overcome this issue. The cluster mode is used to start up multiple node.js processes, thereby having multiple instances of the event loop. When we start using clusters in a Node.js app, it creates multiple node.js processes. But there is also a parent process called the cluster manager, which is responsible for monitoring the health of the individual instances of the application.

Node.js Interview Questions
54) What is a thread pool in Node.js? Which library handles it?
In Node.js, the libuv library is used to handle the Thread pool. The libuv library is a multi-platform C library that supports asynchronous I/O-based operations such as file systems, networking, and concurrency.

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
