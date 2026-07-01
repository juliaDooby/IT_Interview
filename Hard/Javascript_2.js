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
