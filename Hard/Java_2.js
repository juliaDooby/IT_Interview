Resume Worded   |  Career Strategy
★  Get a free resume review
Java Full Stack Developer Career Guide   |   Interview Guide Resume Guide Cover Letter Guide
Java Full Stack Developer Interview Questions
The ultimate Java Full Stack Developer interview guide, curated by real hiring managers: question bank, recruiter insights, and sample answers.

Hiring Manager for Java Full Stack Developer Roles Compiled by: Kimberley Tyler-Smith
Senior Hiring Manager
20+ Years of Experience
Practice Quiz   🎓

Navigate all interview questions
Technical / Job-Specific
Java
What are the differences between an interface and an abstract class in Java?
Explain the concept of method overloading and method overriding in Java.
How does Java handle garbage collection and memory management?
What are the different access modifiers in Java, and when should you use each?
What is the difference between checked and unchecked exceptions in Java?
What is the role of the Java Virtual Machine (JVM) in Java development?
Web Technologies
What is the significance of HTML5, and how does it differ from previous versions of HTML?
Explain the concept of the Document Object Model (DOM) and its role in web development.
What are the key differences between CSS and CSS3, and how can CSS3 improve web design?
What are the key features of JavaScript and its uses in web development?
Explain the role of AJAX in web development and its advantages.
What are the main differences between REST and SOAP, and when should you use each?
Describe the concept of responsive design and its importance in modern web development.
Frameworks and Libraries
Describe the benefits of using the Spring framework in Java development.
What is the role of Hibernate in Java development, and how does it simplify database operations?
Explain the main features of AngularJS and its benefits for front-end development.
Describe the key features and advantages of using ReactJS for front-end development.
What is the purpose of Node.js, and how does it fit into a full-stack development environment?
Explain the benefits of using Bootstrap in web development.
How does the Model-View-Controller (MVC) architecture work, and why is it useful for web development?
Databases
What are the key differences between SQL and NoSQL databases, and when should you use each?
Describe the basics of indexing in databases and how it can improve query performance.
Explain the concept of ACID properties in relational databases.
What are the benefits of using stored procedures in database development?
Describe the concept of database normalization and its importance in database design.
What are the key differences between primary, foreign, and unique keys in relational databases?
DevOps and Tools
Explain the concept of continuous integration and continuous deployment (CI/CD) and their benefits in software development.
What is the role of Docker in software development, and how does it help in creating a consistent development environment?
Describe the main features and benefits of using Git for version control.
What is the purpose of Jenkins in a software development environment, and how does it help automate tasks?
Explain the role of JUnit in Java development and its importance for unit testing.
Describe the concept of code review and its benefits in improving software quality.
Behavioral Questions
Technical Skillset
Describe a time when you had to troubleshoot a particularly difficult bug in your Java code. What approach did you take, and how did you ultimately solve the problem?
Can you walk me through how you would go about building a database schema for a new Java application from scratch? What factors would you consider, and what steps would you take?
Have you ever had to optimize the performance of a Java application that was running slowly? If so, how did you go about optimizing it? What were the results?
Collaboration and Teamwork
Tell me about a time when you had a disagreement with a colleague or manager over the best approach to a technical problem. How did you handle the situation?
Have you ever worked on a project as part of a remote team? If so, what were some of the challenges you faced? How did you overcome them?
Describe a time when you had to give critical feedback to a teammate about their code. How did you approach the situation, and what was the outcome?
Problem-Solving and Adaptability
Have there been any situations in your previous roles where you had to learn a new technology quickly in order to solve a problem? How did you go about learning it, and what was the result?
Tell me about a project you worked on that required you to make a significant change to the codebase mid-development. How did you handle the change, and what was the result?
Have you ever inherited a codebase that was poorly written or difficult to maintain? How did you approach the situation, and what steps did you take to improve the codebase?
Contents
Technical / Job-Specific
Java
Web Technologies
Frameworks and Libraries
Databases
DevOps and Tools
Behavioral Questions
Technical Skillset
Collaboration and Teamwork
Problem-Solving and Adaptability
Search Java Full Stack Developer Interview Questions 
Search and filter questions... (e.g. should, exceptions, Virtual, management, between, concept)
Technical / Job-Specific
Interview Questions on Java
What are the differences between an interface and an abstract class in Java?
Hiring Manager for Java Full Stack Developer RolesThis question helps me understand how well you know the fundamentals of Java and object-oriented programming. I'm looking for a clear explanation of the differences between interfaces and abstract classes, as well as when each is appropriate to use. A solid grasp of these concepts indicates a strong foundation in Java and the ability to design and implement complex applications. If you struggle with this question or provide a vague answer, it might raise concerns about your overall understanding of Java and your ability to contribute effectively to the team.

When answering this question, be sure to mention the key differences, such as interfaces can have only abstract methods, while abstract classes can have both abstract and concrete methods. Also, discuss multiple inheritance and how interfaces can be used to achieve it in Java, whereas abstract classes cannot. Finally, give examples of when you would use an interface versus an abstract class in a real-world scenario, to demonstrate your practical understanding of the concepts.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
That's an interesting question because both interfaces and abstract classes are used to create a blueprint for a class in Java, but they do have some key differences. I like to think of it as follows:

An interface is a collection of abstract methods (methods without a body) that can be implemented by any class. A class can implement multiple interfaces, which is useful when you need to create a class that needs to follow a specific contract or provide certain functionalities. In Java 8 and later, interfaces can also have default and static methods with a body, which makes them even more flexible.

Abstract classes, on the other hand, are classes that can have both abstract and non-abstract methods. Abstract classes can also have instance variables, constructors, and can be extended by other classes. However, a class can only extend one abstract class, as Java does not support multiple inheritance for classes.

In my experience, I use interfaces when I want to define a contract that multiple classes need to follow, and I use abstract classes when I want to provide some common functionality to a group of related classes.
Show Less
Explain the concept of method overloading and method overriding in Java.
Hiring Manager for Java Full Stack Developer RolesThis question aims to test your understanding of two essential concepts in Java: method overloading and method overriding. I'm looking for a clear and concise explanation of both terms, along with examples to illustrate your understanding. This question helps me gauge whether you have a solid grasp of Java's object-oriented principles and can apply them in real-world situations.

When answering this question, be sure to differentiate the two concepts clearly. Explain that method overloading refers to defining multiple methods with the same name but different parameters, while method overriding involves redefining a method in a subclass that already exists in the parent class. Provide examples to illustrate the differences and discuss the benefits of each, such as code reusability and polymorphism. Avoid mixing up the terms or providing incorrect information, as this may raise doubts about your Java expertise.
- Steve Grafton, Hiring Manager
Sample Answer
Method overloading and method overriding are two important concepts in Java that deal with how methods are defined and used in classes. I've found that understanding these concepts is essential for effective Java development.

Method overloading is when a class has multiple methods with the same name but different parameters. This allows the same method name to be used for different tasks, depending on the number or types of arguments passed to it. For example, you could have a `print` method that takes a string, and another `print` method that takes an integer. Java will automatically call the appropriate method based on the arguments you provide.

Method overriding occurs when a subclass provides its own implementation for a method that is already defined in its superclass. This allows the subclass to inherit the methods and fields of the superclass, but still customize its behavior as needed. When you call the overridden method on an object of the subclass, the new implementation in the subclass will be executed instead of the original implementation in the superclass.

A useful analogy I like to remember is that method overloading is like having different tools with the same name in a toolbox, while method overriding is like replacing a tool inherited from a parent toolbox with a new, improved version.
Show Less
How does Java handle garbage collection and memory management?
Hiring Manager for Java Full Stack Developer RolesThis question is designed to gauge your understanding of Java's memory management and garbage collection mechanisms. As a full-stack Java developer, it's crucial to have a solid grasp of these concepts, as they directly impact application performance and resource usage. I'm looking for an explanation that demonstrates your knowledge of Java's garbage collection process and how it helps manage memory efficiently.

When answering this question, discuss the role of the garbage collector in automatically reclaiming memory occupied by objects that are no longer in use. Explain how Java uses a generational garbage collection approach, dividing the heap into different regions, such as the young generation, old generation, and permanent generation. Mention the various garbage collection algorithms and their trade-offs, like throughput, pause time, and memory footprint. Avoid providing a shallow or incomplete answer, as it may raise questions about your understanding of Java's inner workings.
- Steve Grafton, Hiring Manager
Sample Answer
In my experience, one of the key advantages of using Java is its built-in garbage collection and memory management system. This helps me as a developer to focus on writing code without worrying too much about manual memory management.

Java uses the concept of a heap to store objects created during the execution of a program. The Java Virtual Machine (JVM) automatically manages this heap and ensures that objects that are no longer needed are removed from memory. This process is called garbage collection.

When an object is no longer referenced by any variable or other objects, it becomes eligible for garbage collection. The JVM periodically runs a garbage collector, which identifies and removes these unreferenced objects, freeing up memory for new objects. This automatic memory management helps prevent memory leaks and makes Java programs more efficient and stable.

However, it's important to remember that garbage collection is not a guarantee, and it's still possible to create memory leaks if objects are not properly dereferenced. So, as a developer, it's essential to be mindful of object references and resource management.
Show Less
What are the different access modifiers in Java, and when should you use each?
Hiring Manager for Java Full Stack Developer RolesWith this question, I'm trying to determine your understanding of Java's access control mechanisms and your ability to apply them effectively in your code. Access modifiers are essential for ensuring proper encapsulation and maintaining a clean, modular codebase. I'm looking for a clear explanation of each access modifier and when to use them in different scenarios.

When answering this question, describe each of the four access modifiers in Java: public, private, protected, and package-private (or default). Explain their scope and visibility, and give examples of when you would use each modifier. Discuss the benefits of using access modifiers, such as promoting encapsulation and reducing coupling between classes. Avoid giving generic or incorrect information, as this may cast doubt on your understanding of Java's access control mechanisms.
- Steve Grafton, Hiring Manager
Sample Answer
Access modifiers in Java control the visibility and accessibility of classes, methods, and variables. From what I've seen, understanding and using access modifiers correctly is crucial in designing an effective and secure software architecture. There are four main access modifiers in Java:

1. Public: The class, method, or variable can be accessed from any other class, regardless of the package. I use the public access modifier when I want to expose an API or functionality that should be available to all classes.

2. Protected: The class, method, or variable can be accessed within the same package and by subclasses, even if they are in a different package. This access modifier is useful when creating a class hierarchy where subclasses need to access certain inherited members, but you don't want to expose them to the entire application.

3. Default (package-private): If no access modifier is specified, the class, method, or variable is accessible only within the same package. This is useful for keeping internal implementation details hidden from external classes, promoting encapsulation and modular design.

4. Private: The class, method, or variable can only be accessed within the same class. This is the most restrictive access modifier and should be used for encapsulating implementation details and preventing unintended access or modification.

In my experience, it's essential to choose the appropriate access modifier based on the desired visibility and access level, which helps to create a robust and maintainable codebase.
Show Less
What is the difference between checked and unchecked exceptions in Java?
Hiring Manager for Java Full Stack Developer RolesThis question tests your knowledge of exception handling in Java, a crucial aspect of developing robust and fault-tolerant applications. I'm looking for a clear differentiation between checked and unchecked exceptions, along with examples and best practices for handling them. A solid understanding of exceptions is essential for writing resilient code that can handle unexpected situations gracefully.

When answering this question, explain that checked exceptions are those that must be explicitly handled or declared in a method's signature, while unchecked exceptions are runtime exceptions that do not require explicit handling. Give examples of each type of exception and discuss the rationale behind Java's distinction between the two. Talk about the importance of proper exception handling and the dangers of ignoring or suppressing exceptions. Avoid providing superficial answers or confusing the two types of exceptions, as this may raise questions about your Java expertise.
- Grace Abrams, Hiring Manager
Sample Answer
In Java, exceptions are events that occur during the execution of a program that disrupt the normal flow of control. There are two main categories of exceptions: checked exceptions and unchecked exceptions.

Checked exceptions are exceptions that must be explicitly handled by the developer. These are usually caused by external factors, such as file I/O errors or network issues, and are subclasses of `java.lang.Exception`. When a method can throw a checked exception, it must either be enclosed in a try-catch block or declare the exception in its method signature using the `throws` keyword. This forces the developer to handle the exception, ensuring that the program can recover gracefully from unexpected situations.

Unchecked exceptions, on the other hand, are runtime exceptions that do not need to be explicitly handled. These exceptions are usually caused by programming errors, such as null pointer dereferencing or array index out of bounds, and are subclasses of `java.lang.RuntimeException`. Since unchecked exceptions are often the result of logic errors in the code, the developer is not required to handle them explicitly.

In my experience, understanding the difference between checked and unchecked exceptions is crucial for writing robust and fault-tolerant Java applications.
Show Less
What is the role of the Java Virtual Machine (JVM) in Java development?
Hiring Manager for Java Full Stack Developer RolesThis question aims to assess your understanding of the Java platform's architecture and the role of the Java Virtual Machine (JVM) in executing Java code. I'm looking for an explanation that demonstrates your knowledge of how the JVM works, its benefits, and its impact on application performance. A strong grasp of the JVM's role is essential for optimizing your code and troubleshooting performance issues.

When answering this question, discuss the JVM's role in providing a platform-independent execution environment for Java applications. Explain how the JVM interprets bytecode, enabling Java code to run on any platform with a compatible JVM. Mention the Just-In-Time (JIT) compiler and its role in improving runtime performance. Also, discuss the JVM's role in managing memory and garbage collection. Avoid giving vague or incomplete answers, as they may cast doubt on your understanding of the Java platform and its underlying architecture.
- Jason Lewis, Hiring Manager
Sample Answer
The Java Virtual Machine (JVM) plays a crucial role in Java development by providing a platform-independent execution environment for Java applications. I like to think of the JVM as a layer of abstraction that allows Java code to run consistently across different operating systems and hardware architectures.

When you compile a Java program, the source code is translated into an intermediate bytecode format, which is platform-independent. The JVM then interprets this bytecode and converts it into machine code specific to the underlying hardware and operating system. This process allows Java applications to run on any device with a compatible JVM, without requiring recompilation for each platform.

In addition to providing platform independence, the JVM also handles tasks such as memory management, garbage collection, and runtime optimizations, which makes Java development more efficient and streamlined.

I've found that understanding the role of the JVM in Java development is essential for writing high-performance and portable Java applications.
Show Less
Interview Questions on Web Technologies
What is the significance of HTML5, and how does it differ from previous versions of HTML?
Hiring Manager for Java Full Stack Developer RolesAs a hiring manager, I like to ask this question because it helps me gauge your understanding of the evolution of web technologies. I'm interested in seeing if you can highlight the key advancements in HTML5, such as improved semantics, multimedia support, and new APIs. This question also allows me to see if you're keeping up with the latest web standards and best practices. Keep in mind that I'm not looking for a long list of features, but rather a concise explanation that demonstrates your expertise and understanding of the subject matter.

When answering this question, avoid diving into too much detail or technical jargon. Focus on the most important aspects of HTML5 and how it has improved upon previous versions. It's also a good idea to mention any personal experience you have working with HTML5 and how it has benefited your projects.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
That's interesting because HTML5 is a significant advancement in the evolution of HTML, and it brought several new features and improvements over its predecessors. HTML5 is the latest version of HTML and has been designed to make web development more efficient and user-friendly. In my experience, there are a few key differences between HTML5 and earlier versions of HTML:

1. Improved Semantics: HTML5 introduced new semantic elements, such as
,
,
, and
, which make it easier for developers to structure content and for search engines to understand the content on a webpage.

2. Rich Media Support: HTML5 has built-in support for audio and video elements, which means developers no longer need to rely on third-party plugins like Flash. This helps create a more seamless and accessible web experience for users.

3. Form Enhancements: HTML5 brought improvements to web forms, including new input types like email, date, and number, and built-in validation features that make it easier to create user-friendly forms without relying on JavaScript.

4. Improved Accessibility: HTML5 has better support for accessibility, making it easier for developers to create web content that can be consumed by a broader range of users, including those with disabilities.

5. Offline Storage: HTML5 introduced local storage capabilities, allowing web applications to store data on the user's device, which can improve the performance of web applications and enable offline functionality.

In my go-to approach, I always prefer using HTML5 for web development projects because it offers more powerful features and makes it easier to create modern, accessible, and user-friendly web experiences.
Show Less
Explain the concept of the Document Object Model (DOM) and its role in web development.
Hiring Manager for Java Full Stack Developer RolesWhen I ask this question, I'm trying to assess your understanding of how web pages are structured and how developers can interact with and manipulate that structure. The DOM is a crucial concept for any full stack developer, as it allows you to access and modify the content of a web page dynamically. Your answer should demonstrate your knowledge of the DOM and its role in web development, as well as any experience you have working with it.

Avoid giving a dry, textbook definition of the DOM. Instead, try to explain the concept in a way that highlights its importance and relevance to web development. You could also provide examples of how you've used the DOM in your projects to solve specific problems or enhance user experience.
- Steve Grafton, Hiring Manager
Sample Answer
I like to think of the Document Object Model (DOM) as a programming interface for HTML and XML documents. It provides a structured, tree-like representation of a document, with each node in the tree representing an element, attribute, or piece of text within the document. In my experience, the DOM plays a crucial role in web development for several reasons:

1. Dynamic Content Manipulation: DOM allows developers to access, modify, or delete elements and attributes within a document using JavaScript. This enables the creation of dynamic web pages that can change content in response to user interactions, without needing to reload the entire page.

2. Event Handling: DOM provides a way to attach event listeners to elements, allowing developers to respond to user actions like clicks, keyboard inputs, or touch events, and create interactive web experiences.

3. Styling and Animation: By manipulating the DOM, developers can apply CSS styles to elements, create animations, and control the layout and appearance of a web page dynamically.

I worked on a project where we used DOM manipulation to create a responsive navigation menu that would expand and collapse based on user input. By leveraging the DOM, we were able to provide a smooth, interactive experience without requiring a full page reload.
Show Less
What are the key differences between CSS and CSS3, and how can CSS3 improve web design?
Hiring Manager for Java Full Stack Developer RolesThis question is designed to test your understanding of CSS and its latest iteration, CSS3. As an interviewer, I want to see if you can identify the major differences between the two and explain how CSS3 has advanced the capabilities of web design. Your answer should touch on topics like new selectors, visual effects, and responsive design.

When answering this question, avoid getting lost in the minutiae of specific features. Instead, focus on the most significant improvements that CSS3 has brought to the table and how they can benefit web designers and developers. It's also a good idea to mention any personal experience you have working with CSS3 and how it has impacted your projects.
- Jason Lewis, Hiring Manager
Sample Answer
CSS3 is the latest version of CSS and builds upon the foundation of its predecessors by introducing new features and enhancements that make web design more powerful and flexible. From what I've seen, some of the key differences between CSS and CSS3 include:

1. Advanced Selectors: CSS3 introduces new, more powerful selectors that make it easier to target specific elements or groups of elements within a document.

2. Visual Effects: CSS3 brings several new visual effects to web design, such as box-shadow, text-shadow, and border-radius, allowing developers to create more engaging and visually appealing designs without relying on images or additional markup.

3. Animations and Transitions: CSS3 introduces support for animations and transitions, enabling developers to create smooth, interactive effects without the need for JavaScript or external libraries.

4. Responsive Design: CSS3 includes features like media queries and flexible box layout (Flexbox), which make it easier to create responsive designs that adapt to different screen sizes and devices.

5. Improved Performance: CSS3 features can often lead to improved performance by reducing the need for images or JavaScript, resulting in faster-loading web pages.

In my experience, CSS3 has significantly improved web design by allowing developers to create more visually engaging, interactive, and responsive designs with less reliance on external resources.
Show Less
What are the key features of JavaScript and its uses in web development?
Hiring Manager for Java Full Stack Developer RolesThis question helps me understand your familiarity with JavaScript, a critical programming language for web development. I'm looking for you to highlight its most important features, such as its event-driven nature, prototypal inheritance, and versatility in both client-side and server-side development. Your answer should also touch on how these features make JavaScript a powerful tool in web development.

When responding to this question, avoid simply listing JavaScript's features. Instead, provide context for why these features are important and how they can be used in web development. You could also share examples of how you've utilized JavaScript in your projects to create dynamic, interactive experiences for users.
- Steve Grafton, Hiring Manager
Sample Answer
JavaScript is a powerful and versatile programming language that plays a crucial role in web development. Some of the key features of JavaScript include:

1. Dynamic Content Manipulation: JavaScript allows developers to access and modify the DOM, enabling the creation of dynamic web pages that can respond to user interactions without needing to reload the entire page.

2. Event Handling: JavaScript provides a way to handle user actions like clicks, keyboard inputs, or touch events, allowing developers to create interactive web experiences.

3. Asynchronous Processing: JavaScript supports asynchronous processing through features like AJAX, Promises, and async/await, which enable developers to perform tasks in the background without blocking the main thread, resulting in a smoother user experience.

4. Object-Oriented Programming: JavaScript supports object-oriented programming through the use of prototypes and classes, allowing developers to create reusable code and modular applications.

5. First-Class Functions: JavaScript treats functions as first-class objects, which means they can be assigned to variables, passed as arguments, and returned as values, enabling powerful functional programming techniques.

In my go-to approach, I use JavaScript to create interactive web applications, handle user input, manipulate the DOM, and make AJAX requests to fetch or submit data to a server. This helps me create modern, responsive, and engaging web experiences for users.
Show Less
Explain the role of AJAX in web development and its advantages.
Hiring Manager for Java Full Stack Developer RolesWhen I ask this question, I'm trying to assess your understanding of how AJAX enables asynchronous communication between the client and server. AJAX is an important concept for full stack developers, as it allows for more responsive and interactive web applications. Your answer should demonstrate your knowledge of AJAX and its advantages, such as reduced server load, faster page updates, and improved user experience.

Avoid giving a dry, technical explanation of AJAX. Instead, try to convey its benefits and relevance to web development in a way that is easy to understand. You could also provide examples of how you've used AJAX in your projects to enhance functionality and user experience.
- Jason Lewis, Hiring Manager
Sample Answer
AJAX, which stands for Asynchronous JavaScript and XML, is a technique that allows developers to send and receive data between a client and a server asynchronously without needing to reload the entire web page. In my experience, AJAX plays a crucial role in web development for several reasons:

1. Improved User Experience: AJAX enables developers to update parts of a web page without requiring a full page reload, resulting in a smoother, more responsive user experience.

2. Reduced Server Load: By only fetching and updating the necessary data, AJAX can help reduce the load on a server, potentially improving the performance and scalability of a web application.

3. Real-time Data: AJAX allows developers to create real-time applications that can display live data, such as chat applications, notifications, or live updates on a dashboard.

I worked on a project where we used AJAX to implement a search feature that would display search results as the user typed their query, without requiring a page reload. This provided a more seamless and interactive experience for the user.
Show Less
What are the main differences between REST and SOAP, and when should you use each?
Hiring Manager for Java Full Stack Developer RolesThis question is designed to test your knowledge of web services and their underlying architectures. As a hiring manager, I want to see if you can clearly explain the differences between REST and SOAP, as well as when each is most appropriate to use. Your answer should touch on topics like data formats, communication protocols, and architectural constraints.

When answering this question, avoid getting bogged down in technical details. Focus on the most important aspects of REST and SOAP, and provide guidance on when to choose one over the other. It's also a good idea to mention any personal experience you have working with these web service architectures and how they have impacted your projects.
- Steve Grafton, Hiring Manager
Sample Answer
REST (Representational State Transfer) and SOAP (Simple Object Access Protocol) are two popular paradigms for designing web services and APIs. In my experience, there are several key differences between them:

1. Protocol vs. Architectural Style: SOAP is a protocol that defines a specific set of rules for exchanging XML-based messages, while REST is an architectural style that provides a set of principles for designing web services.

2. Message Format: SOAP uses XML as its message format, while REST typically uses JSON, which is generally lighter and easier to work with.

3. Transport Layer: SOAP relies on HTTP, SMTP, or other transport protocols for communication, while REST is typically built on top of HTTP and makes use of its methods (GET, POST, PUT, DELETE) to perform operations on resources.

4. Caching: REST supports caching of responses, which can improve performance and reduce server load, while SOAP does not have built-in caching mechanisms.

5. Complexity: SOAP can be more complex and verbose due to its reliance on XML and its strict rules, while REST is generally simpler and more flexible.

From what I've seen, REST is often the preferred choice for modern web services and APIs due to its simplicity, flexibility, and performance advantages. However, SOAP may be more suitable in situations where you need to maintain compatibility with legacy systems, require advanced security features, or need to support non-HTTP transport protocols.
Show Less
Describe the concept of responsive design and its importance in modern web development.
Hiring Manager for Java Full Stack Developer RolesWhen I ask about responsive design, I'm trying to gauge your understanding of modern web development practices and your ability to create user-friendly web applications. Responsive design is essential in today's world, where users access websites from a variety of devices with different screen sizes and resolutions. I want to see if you can explain the concept clearly and mention key techniques, such as fluid grids, flexible images, and media queries. This question also helps me assess your attention to detail and commitment to providing a seamless user experience across all devices.

Keep in mind that I'm not just looking for a textbook definition. I want to hear about your experiences implementing responsive design and any challenges you've faced along the way. This will give me a better understanding of your problem-solving skills and ability to adapt to new technologies.
- Jason Lewis, Hiring Manager
Sample Answer
Responsive design is an approach to web design that aims to create web pages that adapt to different screen sizes, resolutions, and devices. This is achieved by using fluid layouts, flexible images, and CSS media queries to adjust the appearance and layout of a web page based on the user's device or screen size.

In my experience, responsive design has become increasingly important in modern web development for several reasons:

1. Device Diversity: With the proliferation of smartphones, tablets, and other devices, users are accessing the web from a wide variety of screen sizes and resolutions. Responsive design ensures that web content is accessible and usable on any device.

2. Improved User Experience: Responsive design provides a better user experience by ensuring that web pages are easy to read, navigate, and interact with, regardless of the device being used.

3. SEO Benefits: Search engines like Google prioritize mobile-friendly websites in their search results, making responsive design an important factor for search engine optimization (SEO).

4. Maintenance and Development Efficiency: By using a single codebase for all devices, responsive design can simplify the development and maintenance process, reducing the time and effort required to support multiple device-specific websites.

I've found that implementing responsive design in my web development projects helps me create web experiences that are more accessible, user-friendly, and SEO-friendly, ensuring that my web applications can reach a wider audience and provide a better experience for all users.
Show Less
Interview Questions on Frameworks and Libraries
Describe the benefits of using the Spring framework in Java development.
Hiring Manager for Java Full Stack Developer RolesBy asking about the Spring framework, I'm trying to determine your familiarity with popular Java frameworks and your ability to leverage them to create efficient, scalable applications. I want to hear about the specific features and advantages that Spring brings to the table, such as dependency injection, aspect-oriented programming, and modularity. Additionally, I'm interested in your experiences using Spring in your projects and how it has helped you streamline your development process.

It's important to remember that I'm not just looking for a list of features. I want to hear how you've used Spring effectively in your own work and why you believe it's a valuable tool for Java developers. This will help me gauge your depth of knowledge and ability to think critically about the tools you use.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
In my experience, the Spring framework has been a game-changer for Java development, and I've found that it offers several key benefits. Firstly, it simplifies the development process by providing a comprehensive programming model, which helps developers to focus more on the core business logic rather than the underlying infrastructure.

I like to think of Spring as a one-stop-shop for Java development because it offers flexible dependency injection, which makes it easier to manage and test components. This has been particularly helpful when I worked on a project with a large team, as it allowed us to create more modular and maintainable code.

Another advantage of using Spring is its support for aspect-oriented programming (AOP). In a project I worked on, this allowed us to separate concerns, such as logging and security, from the main business logic. This made the code more readable and maintainable.

In addition, Spring provides out-of-the-box support for various data access technologies, such as JDBC, Hibernate, and JPA. This helps me to easily integrate with different databases and switch between them if needed.

Lastly, Spring offers a wide range of pre-built templates and integrations with other frameworks and libraries, which speeds up the development process. A useful analogy I like to remember is that Spring is like a Swiss Army knife for Java developers, offering all the necessary tools in one place.
Show Less
What is the role of Hibernate in Java development, and how does it simplify database operations?
Hiring Manager for Java Full Stack Developer RolesWhen I ask about Hibernate, I'm trying to assess your understanding of Java persistence frameworks and your ability to work with databases. Hibernate is widely used for simplifying database operations, and I want to see if you can explain its key concepts, such as object-relational mapping (ORM) and the benefits it provides, like reducing boilerplate code and improving performance. This question also helps me evaluate your experience with database management and optimization.

Don't forget that I'm looking for more than just a technical explanation. I want to hear about your experiences using Hibernate in your projects, any challenges you've faced, and how you've overcome them. This will give me a better understanding of your problem-solving skills and ability to learn new technologies.
- Jason Lewis, Hiring Manager
Sample Answer
From what I've seen, Hibernate plays a critical role in Java development as an Object-Relational Mapping (ORM) tool. It essentially bridges the gap between object-oriented programming and relational database management systems.

In my experience, Hibernate simplifies database operations by automating the mapping of Java objects to database tables and vice versa. This means that developers can focus on writing clean, maintainable code without worrying about the intricacies of SQL queries or database schema changes.

One of the main benefits I've found when using Hibernate is its ability to generate SQL queries automatically. This not only saves time but also reduces the likelihood of introducing errors in the queries. I worked on a project where this feature was particularly useful, as we had to support multiple databases, and Hibernate took care of generating the appropriate SQL syntax for each one.

Another advantage of using Hibernate is its support for various caching strategies, which can significantly improve application performance. In one of my projects, we were able to reduce the load on our database server by using Hibernate's second-level cache.

Overall, I'd say that Hibernate is a powerful tool that simplifies database operations in Java development, making it easier to create scalable and maintainable applications.
Show Less
Explain the main features of AngularJS and its benefits for front-end development.
Hiring Manager for Java Full Stack Developer RolesWhen I ask about AngularJS, I'm trying to determine your familiarity with popular front-end frameworks and your ability to create dynamic, interactive web applications. I want to hear about AngularJS's main features, such as two-way data binding, dependency injection, and directives, as well as how these features can improve your development process and enhance the user experience. This question also helps me assess your understanding of modern web development trends and best practices.

Keep in mind that I'm not just looking for a list of features. I want to hear how you've used AngularJS effectively in your own work and why you believe it's a valuable tool for front-end developers. This will help me gauge your depth of knowledge and ability to think critically about the tools you use.
- Gerrard Wickert, Hiring Manager
Sample Answer
AngularJS is a popular JavaScript framework for front-end development, and I've found that it offers several key features that make it stand out.

One of the main features of AngularJS is its two-way data binding. I like to think of this as a bridge between the HTML (view) and JavaScript (controller) that automatically synchronizes data changes. In my experience, this has made it easier to create dynamic and responsive user interfaces.

Another feature I've found useful in AngularJS is its dependency injection system. This helps me to write modular and testable code by separating concerns and promoting reusability. In a project I worked on, this allowed us to easily swap out components without affecting the rest of the application.

AngularJS also offers custom directives, which allow developers to create reusable components and extend the functionality of HTML. This has been particularly helpful when building complex user interfaces, as it promotes code reusability and maintainability.

In addition, AngularJS provides a powerful routing system that enables the creation of single-page applications (SPAs). I've found this to be a significant benefit, as SPAs offer a more seamless user experience by reducing page reloads and improving performance.

Overall, AngularJS offers a range of features that make it an excellent choice for front-end development, enabling developers to create dynamic, responsive, and maintainable web applications.
Show Less
Describe the key features and advantages of using ReactJS for front-end development.
Hiring Manager for Java Full Stack Developer RolesWhen I ask about ReactJS, I'm trying to assess your understanding of popular front-end libraries and your ability to create high-performance, user-friendly web applications. I want to hear about ReactJS's key features, such as the virtual DOM, component-based architecture, and unidirectional data flow, as well as the benefits these features provide, like improved performance and maintainability. This question also helps me evaluate your experience with modern web development practices and your ability to adapt to new technologies.

It's important to remember that I'm not just looking for a list of features. I want to hear how you've used ReactJS effectively in your own work and why you believe it's a valuable tool for front-end developers. This will help me gauge your depth of knowledge and ability to think critically about the tools you use.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
ReactJS is a popular JavaScript library for building user interfaces, and I've found that it offers several key features and advantages for front-end development.

One of the primary features of ReactJS is its component-based architecture. In my experience, this has made it easier to create modular and reusable code, as components can be easily composed to build complex user interfaces. I worked on a project where this approach allowed us to rapidly prototype and iterate on the design, significantly speeding up the development process.

Another advantage of using ReactJS is its virtual DOM implementation. This helps to optimize the rendering process by only updating the parts of the DOM that have changed. I like to think of it as a smart diffing algorithm that minimizes the performance impact of frequent UI updates. I've found this to be particularly useful when building high-performance applications with large data sets.

ReactJS also supports server-side rendering, which can improve the initial load time of a web application and provide better SEO. In one of my projects, this feature helped us to significantly improve the perceived performance of the application and increase user engagement.

Lastly, ReactJS has a vibrant ecosystem with a vast array of libraries and tools available to extend its functionality. This has allowed me to quickly and easily add new features to projects and stay up-to-date with the latest best practices in front-end development.

Overall, ReactJS provides a powerful set of features and advantages that make it an excellent choice for building maintainable and high-performance user interfaces.
Show Less
What is the purpose of Node.js, and how does it fit into a full-stack development environment?
Hiring Manager for Java Full Stack Developer RolesBy asking about Node.js, I'm trying to gauge your understanding of server-side technologies and your ability to work with both front-end and back-end components of a web application. Node.js is a popular choice for full-stack developers, and I want to see if you can explain its key features, such as its event-driven, non-blocking architecture, and how it enables developers to use JavaScript on the server side. This question also helps me assess your experience with various development environments and your ability to choose the right tools for the job.

Don't forget that I'm looking for more than just a technical explanation. I want to hear about your experiences using Node.js in your projects, any challenges you've faced, and how you've overcome them. This will give me a better understanding of your problem-solving skills and ability to learn new technologies.
- Gerrard Wickert, Hiring Manager
Sample Answer
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript on the server-side. I like to think of it as a bridge that enables JavaScript to be used across the entire application stack, from front-end to back-end.

In a full-stack development environment, Node.js plays a crucial role by enabling developers to use a single programming language for both the client and server-side. This has several benefits, such as improving code reusability and simplifying the development process. In my experience, this has made it easier to onboard new team members and maintain a consistent codebase across the entire application stack.

Another advantage of using Node.js is its event-driven, non-blocking I/O model, which makes it well-suited for scalable and high-performance applications. I've found this particularly useful when building real-time applications, such as chat systems and online gaming platforms.

Additionally, Node.js offers a large ecosystem of libraries and frameworks, such as Express.js for building web applications and Socket.IO for real-time communication. This has helped me to quickly add new features to projects and stay up-to-date with the latest best practices in full-stack development.

In summary, Node.js serves as a powerful tool for full-stack development, allowing developers to streamline the development process and build scalable, high-performance applications using a single programming language.
Show Less
Explain the benefits of using Bootstrap in web development.
Hiring Manager for Java Full Stack Developer RolesThis question helps me gauge your familiarity with popular web development frameworks and your ability to articulate the advantages of using them. Bootstrap is a widely-used HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. By asking this question, I want to see if you understand how Bootstrap can save development time, provide consistent styling, and improve the responsiveness of a web application. It's important to demonstrate your knowledge of the framework and how it can benefit a project. If you can't clearly explain the advantages of using Bootstrap, it may raise concerns about your ability to stay current with industry trends and effectively leverage available tools.

Avoid simply listing features without explaining their benefits or providing context. Instead, focus on specific examples of how Bootstrap has helped you in past projects or how it can streamline the development process. This will demonstrate your practical experience and understanding of the framework.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
Bootstrap is a popular front-end framework for web development, and I've found that it offers several key benefits that make it an invaluable tool.

One of the main benefits of using Bootstrap is its responsive grid system, which simplifies the process of creating mobile-first, responsive web designs. In my experience, this has made it much easier to ensure that websites look and function well on a variety of devices and screen sizes.

Another advantage of Bootstrap is its pre-built UI components, such as buttons, forms, and navigation elements. This has helped me to rapidly prototype and build consistent user interfaces without having to start from scratch. I like to think of it as a time-saving toolkit that offers a solid foundation for web development projects.

Bootstrap also provides a customizable and modular approach to development, allowing developers to pick and choose the components and styles they need for a particular project. This has been particularly useful when working on projects with specific design requirements, as it allows for greater flexibility and control over the final output.

Lastly, Bootstrap has a large and active community that contributes to its development, ensuring that the framework stays up-to-date with the latest web design trends and best practices. This has been invaluable in helping me to stay current with the ever-evolving world of web development.

In summary, Bootstrap offers a range of benefits that make it an excellent choice for web development, enabling developers to create responsive, consistent, and maintainable websites with ease.
Show Less
How does the Model-View-Controller (MVC) architecture work, and why is it useful for web development?
Hiring Manager for Java Full Stack Developer RolesThis question is designed to assess your understanding of one of the most common design patterns in web development. The Model-View-Controller (MVC) architecture is a way of organizing code to separate concerns, making it easier to maintain and scale applications. By asking this question, I want to see if you can clearly explain the roles of each component (Model, View, and Controller) and how they interact. This will give me an idea of your ability to work with this pattern and design well-structured applications.

When answering this question, avoid vague explanations or simply stating that MVC is a "good practice." Instead, provide concrete examples of how using the MVC pattern has benefited you in past projects or how it can improve the maintainability, testability, and scalability of an application. This will demonstrate your practical experience and understanding of this design pattern.
- Gerrard Wickert, Hiring Manager
Sample Answer
The Model-View-Controller (MVC) architecture is a design pattern that separates an application into three interconnected components: the Model, the View, and the Controller. This separation of concerns makes it easier to manage and maintain complex web applications.

I like to think of the MVC architecture as a well-organized production line, where each component has a specific role:

1. Model: Represents the application's data and business logic. In my experience, this is where the core processing and manipulation of data takes place, such as fetching information from a database or calculating results.

2. View: Represents the user interface and presentation of the data. This is where the data from the Model is displayed to the user in a visually appealing and easily understandable format.

3. Controller: Acts as an intermediary between the Model and View, handling user input and updating the Model and View accordingly. I've found that this component is responsible for managing the flow of data and ensuring that the application responds appropriately to user actions.

The main advantage of using the MVC architecture in web development is that it promotes modularity and separation of concerns, making it easier to create, maintain, and scale complex web applications. I've found that this approach allows developers to work on different components of the application independently, reducing the risk of conflicts and improving overall code quality.

In my experience, the MVC architecture has also improved the testability of applications, as each component can be tested in isolation. This has been particularly beneficial when working on large projects with multiple developers, ensuring that the application remains stable and reliable throughout the development process.

Overall, the MVC architecture is a useful design pattern for web development, as it provides a structured approach to building complex web applications and promotes modularity, maintainability, and testability.
Show Less
Interview Questions on Databases
What are the key differences between SQL and NoSQL databases, and when should you use each?
Hiring Manager for Java Full Stack Developer RolesThis question is aimed at understanding your knowledge of different database technologies and your ability to choose the appropriate one for a given project. SQL and NoSQL databases have distinct characteristics, advantages, and limitations, so it's crucial for a Full Stack Developer to know when to use each. By asking this question, I'm looking for a clear comparison between the two types of databases and an explanation of the situations in which each would be most suitable.

Avoid giving a one-sided answer, as this might suggest you have limited experience with either SQL or NoSQL databases. Instead, mention the strengths and weaknesses of both and provide examples of use cases where each type of database would be the best choice. This will show me that you have a well-rounded understanding of database technologies and can make informed decisions when designing a web application.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
That's an interesting question because the choice between SQL and NoSQL databases can significantly impact your application's performance and scalability. SQL databases, also known as relational databases, are based on a structured query language and have a predefined schema. They are designed to handle complex queries and relationships between data in a table format. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.

On the other hand, NoSQL databases are non-relational and have a dynamic schema. They can store unstructured data and are designed for scalability, making them suitable for handling large volumes of data. Examples of NoSQL databases include MongoDB, Cassandra, and Couchbase.

In my experience, you should choose an SQL database when your application requires complex queries, transactions, and relationships between data. SQL databases are also a better fit when data integrity is critical. NoSQL databases are more suitable when you need to handle a large amount of unstructured data, require horizontal scaling, or need high write performance.
Show Less
Describe the basics of indexing in databases and how it can improve query performance.
Hiring Manager for Java Full Stack Developer RolesThis question addresses your understanding of database optimization and your ability to apply best practices to improve application performance. Indexing is a technique used in databases to speed up data retrieval and reduce the time it takes to execute queries. By asking this question, I want to see if you know the fundamentals of indexing and can explain how it can make a significant difference in the performance of a web application.

When answering this question, avoid diving too deep into technical details or discussing obscure indexing methods. Instead, focus on the core concepts of indexing, such as how it works, why it's important, and some common types of indexes. Include examples of how you have used indexing to optimize database performance in past projects, which will demonstrate your practical experience and understanding of this critical aspect of web development.
- Jason Lewis, Hiring Manager
Sample Answer
I like to think of indexing in databases as similar to the index section of a book. It helps you quickly locate the information you are looking for without having to scan through every page. In databases, an index is a data structure that allows the database engine to quickly find specific rows in a table based on the values of one or more columns.

When a query is executed, the database engine searches for the relevant data by scanning the entire table. This process, known as a full table scan, can be time-consuming, especially if the table has a large number of rows. By creating an index, you can greatly reduce the time it takes to search for specific data because the database engine can use the index to quickly locate the required rows.

From what I've seen, indexing is very effective in improving query performance for read-heavy applications. However, it's crucial to strike a balance between the number of indexes and the write performance of the database, as every index requires additional storage and maintenance during insert, update, and delete operations.
Show Less
Explain the concept of ACID properties in relational databases.
Hiring Manager for Java Full Stack Developer RolesThis question is designed to test your knowledge of fundamental database concepts, specifically the ACID properties that ensure data consistency and integrity in relational databases. ACID stands for Atomicity, Consistency, Isolation, and Durability, and understanding these properties is essential for any developer working with relational databases. By asking this question, I want to see if you can clearly explain each of the ACID properties and why they are important in maintaining the reliability of a database.

Avoid providing a shallow answer that only lists the ACID properties without explaining their significance. Instead, give a clear and concise overview of each property and provide examples of how they help ensure data consistency and integrity. This will demonstrate your solid understanding of relational databases and their underlying principles.
- Steve Grafton, Hiring Manager
Sample Answer
ACID is an acronym that stands for Atomicity, Consistency, Isolation, and Durability. These properties are essential in ensuring the reliability and robustness of transactions in relational databases.

Atomicity means that a transaction should either be completed fully or not at all. If any part of the transaction fails, the entire transaction should be rolled back, ensuring that the database remains in a consistent state.

Consistency guarantees that the database will always transition from one consistent state to another when a transaction is executed. This means that all data integrity constraints are maintained throughout the transaction.

Isolation ensures that transactions are isolated from each other, preventing them from interfering with one another's data. This helps to maintain data consistency when multiple transactions are executed concurrently.

Durability guarantees that once a transaction has been committed, its changes are permanently saved in the database, even in the event of a system failure or crash.

In my experience, understanding and implementing ACID properties in your database design and transactions is crucial for building reliable and fault-tolerant applications.
Show Less
What are the benefits of using stored procedures in database development?
Hiring Manager for Java Full Stack Developer RolesThis question aims to evaluate your understanding of database programming techniques and your ability to leverage them to improve application performance and security. Stored procedures are precompiled SQL statements that can be executed on the database server, offering several advantages over executing SQL queries directly from the application code. By asking this question, I want to see if you can explain the benefits of using stored procedures and provide examples of how they can enhance a web application.

When answering this question, avoid focusing solely on performance benefits. Instead, discuss a range of advantages, such as code reusability, maintainability, and security. Provide examples from your own experience or hypothetical scenarios to illustrate how stored procedures can improve a web application's performance, security, and maintainability. This will showcase your understanding of database programming techniques and your ability to apply them effectively in web development projects.
- Gerrard Wickert, Hiring Manager
Sample Answer
Stored procedures are precompiled SQL statements that are stored and executed on the database server. I've found that using stored procedures can provide several benefits in database development:

1. Performance: Since stored procedures are precompiled, they can be executed more quickly than dynamic SQL queries, reducing the time it takes to retrieve or manipulate data.

2. Code reusability: Stored procedures can be called by multiple applications or parts of an application, promoting code reusability and reducing redundancy.

3. Maintenance: By centralizing database logic in stored procedures, you can make it easier to manage and maintain your code, as changes can be made in one place without having to modify multiple application components.

4. Security: Stored procedures can help improve security by limiting direct access to the database and allowing you to enforce granular access control.

Overall, using stored procedures can lead to increased performance, easier maintenance, and improved security in your database development process.
Show Less
Describe the concept of database normalization and its importance in database design.
Hiring Manager for Java Full Stack Developer RolesI ask this question to assess your understanding of database design principles and best practices. Database normalization is a critical concept in designing efficient and reliable databases. By explaining normalization, you demonstrate your ability to create well-structured and scalable databases that minimize data redundancy and prevent data anomalies. It's not just about memorizing the different normal forms; I want to see how you apply these concepts in practical scenarios. When answering this question, consider the implications of normalization on database performance, maintenance, and flexibility.

Avoid giving a shallow or overly technical response that lacks real-world context. Instead, explain how normalization can impact the overall performance and maintainability of a database. Show me that you understand its importance and can effectively apply it in your work as a Java Full Stack Developer.
- Steve Grafton, Hiring Manager
Sample Answer
Database normalization is a design technique used to organize data in a relational database efficiently. The primary goal of normalization is to reduce data redundancy and improve data integrity by ensuring that each piece of data is stored in only one place.

Normalization involves decomposing a table into smaller tables and defining relationships between them. This is typically done through a series of steps called normal forms, each of which enforces specific rules on the table structure.

In my experience, database normalization is essential because it helps to:

1. Eliminate data redundancy, which reduces storage requirements and simplifies data management.
2. Improve data integrity by ensuring that each piece of data is stored in a single location, making it easier to maintain and update.
3. Optimize query performance by reducing the number of joins required to retrieve data from multiple tables.

However, it's important to note that over-normalization can also lead to performance issues, so it's crucial to find the right balance between normalization and denormalization based on your application's requirements.
Show Less
What are the key differences between primary, foreign, and unique keys in relational databases?
Hiring Manager for Java Full Stack Developer RolesThis question is designed to gauge your understanding of relational database concepts and how you manage relationships between tables. Each key type serves a specific purpose in maintaining data integrity and consistency in a database. As a Full Stack Developer, you should be able to distinguish between these keys and use them effectively in your database designs.

When answering this question, avoid simply defining each key type. Instead, discuss their roles in enforcing data integrity, facilitating relationships between tables, and ensuring data consistency. Your answer should demonstrate your ability to design and implement databases that adhere to best practices and maintain data integrity.
- Gerrard Wickert, Hiring Manager
Sample Answer
In relational databases, primary, foreign, and unique keys are used to establish relationships between tables and enforce data integrity. Here's how they differ:

1. Primary Key: A primary key is a column or a set of columns that uniquely identify each row in a table. Each table can have only one primary key, and its values must be unique and not null.

2. Foreign Key: A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It is used to establish a relationship between two tables and enforce referential integrity, ensuring that the data in the foreign key column(s) must match the values in the referenced table's primary key.

3. Unique Key: A unique key is similar to a primary key in that it enforces uniqueness for a column or a set of columns. However, a table can have multiple unique keys, and their values can be null.

In summary, primary keys uniquely identify rows within a table, foreign keys establish relationships between tables, and unique keys enforce uniqueness for one or more columns.
Show Less
Interview Questions on DevOps and Tools
Explain the concept of continuous integration and continuous deployment (CI/CD) and their benefits in software development.
Hiring Manager for Java Full Stack Developer RolesI ask this question to gauge your familiarity with modern software development practices and how you can contribute to an efficient development workflow. CI/CD is a vital part of the software development lifecycle, enabling faster and more reliable releases.

Don't just recite the textbook definition of CI/CD. Instead, discuss the real-world benefits of adopting these practices, such as faster feedback, improved collaboration, and reduced risk of deployment failures. Your answer should demonstrate your understanding of the importance of CI/CD and how it can streamline the development process.

Avoid focusing solely on the technical aspects of CI/CD. Show me that you understand the bigger picture and the impact of these practices on the overall software development process.
- Grace Abrams, Hiring Manager
Sample Answer
Continuous Integration (CI) and Continuous Deployment (CD) are practices that aim to improve the software development process by automating the integration, testing, and deployment of code changes.

Continuous Integration involves merging code changes from multiple developers into a shared repository frequently, ideally several times a day. This helps to catch integration issues early and reduces the risk of conflicts when merging code. Automated tests are run as part of the CI process, ensuring that the code is always in a releasable state.

Continuous Deployment takes the process a step further by automatically deploying the application to production once it passes all tests and checks. This helps to reduce the time it takes to deliver new features and bug fixes to users.

I've found that adopting CI/CD practices can provide the following benefits:

1. Faster feedback: Developers receive feedback on their code changes more quickly, allowing them to identify and fix issues earlier in the development process.
2. Reduced risk: By integrating and testing code changes frequently, the risk of integration issues and conflicts is minimized, leading to more stable releases.
3. Increased productivity: Automation of the integration, testing, and deployment processes frees up developers to focus on writing code and delivering new features.
4. Improved collaboration: CI/CD encourages collaboration between developers, testers, and operations teams, leading to better communication and shared responsibility for the application's quality and stability.

In my experience, implementing CI/CD practices can significantly improve the efficiency, quality, and speed of software development.
Show Less
What is the role of Docker in software development, and how does it help in creating a consistent development environment?
Hiring Manager for Java Full Stack Developer RolesThis question helps me understand your experience with containerization and its benefits in software development. Docker is an essential tool for creating and managing containers, which provide a consistent and portable environment for applications.

When discussing Docker, avoid diving too deep into technical details. Focus on the practical benefits it offers, such as simplifying dependency management, enabling seamless collaboration, and ensuring consistency across development, testing, and production environments. Your answer should demonstrate your ability to leverage Docker to create efficient and reliable development workflows.

Don't just list Docker's features. Explain how you've used it in your projects and the value it brought to your team and the development process.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
That's interesting because Docker has really changed the way we approach software development in recent years. In my experience, Docker plays a crucial role in simplifying the process of building, shipping, and running applications. It does this by using containerization technology, which essentially allows developers to package an application and its dependencies into a single, portable container.

I like to think of it as a lightweight virtual machine that can run consistently across different environments, eliminating the "it works on my machine" problem. This helps me and my team to create a consistent development environment that can be easily shared and replicated, making it much easier to collaborate and deploy applications without worrying about inconsistencies and configuration issues.

I worked on a project where we used Docker extensively, and it was a game-changer. It allowed us to deploy our application to multiple environments seamlessly, and it dramatically reduced the time we spent on setting up and configuring development environments.
Show Less
Describe the main features and benefits of using Git for version control.
Hiring Manager for Java Full Stack Developer RolesI ask this question to evaluate your familiarity with version control systems and your ability to collaborate effectively with other developers. Git is a widely used tool for managing code changes and tracking project history, making it essential for modern software development.

When discussing Git, focus on its key features, such as branching, merging, and distributed version control. Explain how these features facilitate collaboration, enable efficient code reviews, and allow for easy rollback of changes. Your answer should demonstrate your understanding of Git's benefits and your ability to use it effectively in a team environment.

Avoid simply listing Git commands or features. Show me that you understand the underlying concepts and can apply them in real-world scenarios.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
From what I've seen, Git has become the go-to version control system for many developers, and for good reason. It offers several powerful features that make it an excellent choice for managing codebases. Some of the main features and benefits of using Git include:

1. Distributed Version Control: In my experience, this is one of the major advantages of Git. It allows every developer to have a full copy of the repository, including the entire history. This means that operations like branching, merging, and committing can be performed locally, which speeds up the development process and reduces the reliance on a central server.

2. Branching and Merging: Git's branching and merging capabilities are top-notch. It's easy to create branches for new features or bug fixes, and merging them back into the main branch is typically hassle-free. This helps me to work on multiple tasks simultaneously without affecting the stability of the main codebase.

3. Staging Area: A useful feature of Git is the staging area, which allows you to stage changes before committing them. This provides an opportunity to review and organize the changes, making it easier to create meaningful and atomic commits.

4. Collaboration: Git is designed for collaboration, and it provides several tools to help teams work together effectively. With features like pull requests and code review, it's simple to share code, discuss changes, and ensure that the code meets the team's quality standards.

In short, Git has proven to be an invaluable tool in my software development career, streamlining the way I manage and collaborate on code with my team.
Show Less
What is the purpose of Jenkins in a software development environment, and how does it help automate tasks?
Hiring Manager for Java Full Stack Developer RolesThis question is designed to assess your experience with automation tools and your ability to optimize development workflows. Jenkins is a popular open-source automation server that helps streamline various tasks in the software development lifecycle.

When discussing Jenkins, focus on its role in automating tasks such as building, testing, and deploying code. Explain how it integrates with other tools and supports various plugins to create a seamless and efficient development pipeline. Your answer should demonstrate your understanding of Jenkins' benefits and your ability to implement automation in your projects.

Avoid giving a generic overview of Jenkins. Share specific examples of how you've used it in your projects and the improvements it brought to your team's workflow.
- Jason Lewis, Hiring Manager
Sample Answer
Jenkins is a powerful open-source automation server that plays a significant role in modern software development environments. I could see myself using it for a variety of purposes, but its primary function is to facilitate continuous integration and continuous delivery (CI/CD) pipelines.

In my experience, Jenkins helps automate tasks by allowing you to define build and deployment processes using a series of configurable steps, called "jobs". These jobs can be triggered by various events, such as code commits, scheduled times, or even manually. The automation provided by Jenkins is crucial because it reduces human error and ensures that the build and deployment process is consistent and repeatable.

A project I worked on involved setting up a Jenkins pipeline to build, test, and deploy a Java web application. Jenkins made it easy to integrate with our Git repository, run unit tests using JUnit, package the application, and deploy it to a staging environment. This helped us catch issues early in the development process and increased our confidence in the stability of the application.
Show Less
Explain the role of JUnit in Java development and its importance for unit testing.
Hiring Manager for Java Full Stack Developer RolesWhen I ask about JUnit, I'm trying to gauge your understanding of unit testing and its significance in the development process. I want to know if you're familiar with this widely-used testing framework and if you've used it to write and run unit tests. A strong candidate will be able to explain how JUnit helps ensure code quality, detect bugs early, and improve maintainability. Additionally, I'm curious to see if you recognize the importance of test-driven development and how JUnit fits into that methodology. If you don't have experience with JUnit specifically, don't panic – just be honest and share your experience with other testing frameworks, as the concepts are often similar.
- Jason Lewis, Hiring Manager
Sample Answer
JUnit is a widely-used testing framework in the Java ecosystem, and it plays a crucial role in ensuring the reliability and stability of Java applications. In my experience, JUnit is essential for creating and executing unit tests, which are small, focused tests that verify the correctness of individual units of code, such as methods or classes.

The importance of unit testing cannot be overstated. I've found that incorporating unit tests into my development process has several benefits, including:

1. Early Detection of Bugs: Writing unit tests helps me catch issues early in the development process, making it easier and less costly to fix them.

2. Improved Code Quality: Unit tests force me to write modular and maintainable code, as well-tested code tends to be more robust and less prone to bugs.

3. Documentation: Well-written unit tests can serve as documentation for the code, providing examples of how to use the various methods and classes.

4. Confidence in Refactoring: A comprehensive suite of unit tests gives me the confidence to refactor and improve the code without fear of introducing regressions.

JUnit has been my go-to testing framework for Java development, and I've found it to be an indispensable tool for ensuring the quality and reliability of my applications.
Show Less
Describe the concept of code review and its benefits in improving software quality.
Hiring Manager for Java Full Stack Developer RolesWhen I ask about code review, I'm looking to see if you understand the value of collaboration and teamwork in software development. I want to know if you've participated in code reviews, either as a reviewer or as the person whose code is being reviewed. Being able to discuss the benefits of code review, such as catching bugs, improving readability, and sharing knowledge among team members, demonstrates your commitment to delivering high-quality code. It's also an opportunity for you to show that you're open to constructive feedback and willing to learn from your peers. If you haven't had much experience with code reviews, it's still important to express your understanding of the concept and your willingness to participate in them.
- Jason Lewis, Hiring Manager
Sample Answer
Code review is a crucial practice in software development that involves having other developers review and provide feedback on your code. The primary goal of code review is to identify and fix issues before they make their way into the final product, ultimately improving the overall quality of the software.

In my experience, there are several benefits to conducting regular code reviews, including:

1. Knowledge Sharing: Code reviews facilitate knowledge sharing among team members, as they provide an opportunity to learn from each other's expertise and experiences.

2. Improved Code Quality: As multiple developers review the code, it's more likely that bugs, performance issues, and other problems will be caught and addressed early on.

3. Maintainability: Code reviews help ensure that the code is written in a consistent and maintainable manner, making it easier to understand and modify in the future.

4. Team Collaboration: By discussing and debating the merits of different solutions during code reviews, the team can build a shared understanding of the codebase and foster a collaborative working environment.

A useful analogy I like to remember is that code review is like having a second pair of eyes on your work. It helps to catch issues that you may have missed and provides valuable insights to improve your coding skills. In my career as a Java Full Stack Developer, I've found that incorporating code reviews into our development process has significantly improved the quality of the software we produce.
Show Less
Behavioral Questions
Interview Questions on Technical Skillset
Describe a time when you had to troubleshoot a particularly difficult bug in your Java code. What approach did you take, and how did you ultimately solve the problem?
Hiring Manager for Java Full Stack Developer RolesAs an interviewer, this question helps me understand your problem-solving skills and how you handle challenging situations in your code. I want to see if you can remain calm and methodical while working through complex issues and learn from your experiences. It's also crucial for me to know how well you can communicate the process you followed – this will give me an idea of how well you'll be able to work with your future team members.

Be specific about the situation and the steps you took to resolve the issue while highlighting your thought process. Don't be afraid to discuss any mistakes you made along the way, but also emphasize the lessons you learned. Showcasing your growth and adaptability as a developer will impress your interviewer.
- Gerrard Wickert, Hiring Manager
Sample Answer
There was this one time when I was working on a large-scale project involving multiple microservices. I noticed that the application was not fetching the desired data and was showing inconsistencies. This bug was tricky since the issue was sporadic and not easy to reproduce. The first thing I did was try to isolate the problem by identifying the most likely area of the code causing the issue.

After narrowing it down to one specific microservice, I went through the code line by line and added debug logs to better understand the flow of data. By doing this, I discovered that the problem was happening due to a race condition between two threads that were trying to access the same data simultaneously.

I realized that the issue was arising due to a lack of proper synchronization mechanisms in place. To solve the problem, I implemented a locking mechanism to ensure that only one thread could access the shared resource at a time. This allowed both threads to function correctly while maintaining data consistency. After testing the changes extensively, the bug was resolved, and the application performed as expected. From this experience, I learned the importance of taking a systematic and methodical approach to debugging and the value of implementing proper thread-safety measures in a multi-threaded environment.
Show Less
Can you walk me through how you would go about building a database schema for a new Java application from scratch? What factors would you consider, and what steps would you take?
Hiring Manager for Java Full Stack Developer RolesWhen interviewers ask this question, they want to gauge your understanding of database schema design concepts and how you approach solving a problem. They are also interested in knowing if you are familiar with the best practices and can communicate your thought process effectively. As a hiring manager, I am really trying to figure out if you are detail-oriented and can think critically about the various steps involved in creating a database schema from scratch.

Remember, the key here is to be clear and concise in your explanation, and try to bring up any relevant experiences or projects you have worked on. Demonstrate how you would handle the complexity and challenges of creating a schema, and emphasize your ability to collaborate and iterate on the design.
- Grace Abrams, Hiring Manager
Sample Answer
First and foremost, I would begin by gathering the application's requirements and understanding the overall data structure. In my experience, it's crucial to have a clear understanding of the entities, relationships, and attributes that the schema needs to represent. I would collaborate with the team, including the product manager, front-end developers, and other stakeholders, to ensure that everyone's on the same page.

Once I have a solid understanding of the requirements, I would start designing the schema. I usually begin by identifying the primary entities and representing them as tables in the schema. Next, I focus on the relationships between these entities and determine whether they are one-to-many, one-to-one, or many-to-many. This helps me to establish the appropriate foreign key constraints and ensure data integrity.

When designing the tables, I consider the data types for the attributes, as well as any default values, constraints, or indexes that might be necessary to optimize performance and maintain data validity. I also pay close attention to normalization to minimize redundancy and improve consistency.

Once the initial schema design is ready, I would share it with the team for feedback and review. Collaboration is key here, as different perspectives often uncover potential issues or improvements. After incorporating the feedback and making any necessary adjustments, I would create the schema in the database management system and test it with sample data to ensure it meets the application's needs.

In summary, my approach for building a new database schema from scratch involves understanding the requirements, designing the schema with attention to entities, relationships, and data types, reviewing the design with the team, and iterating until a satisfactory solution is achieved. Throughout this process, I strive to maintain clarity and flexibility to adapt to changing requirements or new insights.
Show Less
Have you ever had to optimize the performance of a Java application that was running slowly? If so, how did you go about optimizing it? What were the results?
Hiring Manager for Java Full Stack Developer RolesWhen interviewers ask about optimizing a slow Java application, they are trying to gauge your problem-solving skills, attention to detail, and understanding of Java performance optimization techniques. They want to see if you can efficiently analyze, pinpoint the root cause, and optimize an application to run smoothly. This question gives them a good idea of your ability to resolve performance issues in a real-world scenario.

Keep in mind that interviewers want to hear about your thought process, the steps you took, and the actual results of your optimization. Be prepared to explain your methods and be ready to discuss any performance monitoring tools or techniques that you used to accomplish this.
- Grace Abrams, Hiring Manager
Sample Answer
In my previous role, I was responsible for maintaining and optimizing a Java-based eCommerce application that was experiencing some performance issues. Users were reporting slow loading times and unresponsive pages, which could've significantly impacted our sales. I took a systematic approach to address these issues.

First, I started by monitoring the application's performance using profiling tools such as VisualVM and JProfiler. This helped me to identify bottlenecks and potential areas for optimization. From the analysis, it was clear that there were some inefficient database queries and memory leaks that were causing the performance degradation.

To tackle the inefficient queries, I used the Explain Plan feature in MySQL to analyze the performance of each query and made necessary changes to the data structures, such as adding indexes and using more efficient query techniques. For the memory leaks, I used Java's garbage collection logs and memory analyzer tools like Eclipse MAT to find the root cause and refactored the code to fix the leaks.

As a result of these optimizations, the application's performance improved drastically - loading times were reduced by 80% and memory consumption by 50%. The users were happy with the improved performance, and we noticed an increase in both user engagement and sales. This experience taught me the importance of continuously monitoring and optimizing a Java application to ensure optimal performance.
Show Less
Interview Questions on Collaboration and Teamwork
Tell me about a time when you had a disagreement with a colleague or manager over the best approach to a technical problem. How did you handle the situation?
Hiring Manager for Java Full Stack Developer RolesIn this question, interviewers want to see how well you work in a team and how you handle conflicts, particularly when discussing technical issues. They're interested in your ability to communicate effectively, find compromises, and learn from others' perspectives. Remember, working as a Full Stack Developer requires strong collaboration skills, and your ability to resolve disagreements is crucial for maintaining a productive work environment. When answering this question, focus on your problem-solving and communication abilities, and be sure to emphasize the positive outcome that resulted from the situation.

As an experienced hiring manager, what I like to see is the way you approached the disagreement and how you prioritized the team's success and project goals. It's important that you demonstrate a willingness to be flexible and adapt to new ideas, even if it means letting go of your original approach. Show that you know how to actively listen, respect other opinions, and find common ground to reach a solution that benefits everyone.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
A couple of years ago, I was working on a mobile application project with a team of developers. We were at a critical stage in the development process when we encountered a performance issue in the backend that was causing long response times. I suggested that we refactor the code in order to optimize the performance. However, my colleague believed that it would be better to implement a caching mechanism to solve the issue.

We had a healthy debate on the pros and cons of each approach, and I emphasized my concerns about the complexity of implementing a caching mechanism and the potential maintenance cost. My colleague, on the other hand, explained how caching could be a more efficient solution in terms of future scalability and provided some evidence from similar projects.

In the end, we realized that both approaches had their merits, and we decided to combine our ideas by refactoring the code first and then evaluating if adding a caching mechanism would still be necessary. To ensure a smooth collaboration, we set up a meeting with the team lead and the other developers to present our ideas, gather feedback, and reach a consensus. Everyone agreed with our compromise, and we successfully implemented the solution together, which ultimately improved the application's performance and scalability.

Looking back, I learned the value of finding a middle ground in technical debates and the importance of open communication when working with a team. I also gained a better understanding of different optimization techniques, which has helped me become a more well-rounded developer.
Show Less
Have you ever worked on a project as part of a remote team? If so, what were some of the challenges you faced? How did you overcome them?
Hiring Manager for Java Full Stack Developer RolesAs an interviewer, I want to know if you have experience working in remote teams since it's becoming increasingly common in the tech industry. By asking this question, I am trying to assess your adaptability and ability to collaborate effectively with team members who may not be physically present. It's also an opportunity to see how you handle challenges and what strategies you've employed to overcome them. So, focus on highlighting your remote work experience, the challenges you faced, and the steps you took to tackle those issues.

Remember, I am not just looking for a plain description of challenges - what's important for me is how you managed and resolved those problems. Emphasize your communication skills, your adaptability, and your ability to work independently when needed. Make sure to also mention any tools or techniques you used to improve the overall team workflow in a remote setting.
- Steve Grafton, Hiring Manager
Sample Answer
Yes, I have worked on a project as part of a remote team. One of the challenges we faced was the lack of face-to-face interactions, which sometimes led to misunderstandings and miscommunication within the team. To overcome this, we established a clear communication protocol. We set up regular video conference calls with the whole team, which not only helped us stay updated on each other's progress, but also allowed us to discuss any issues that arose and brainstorm ideas collectively.

Another challenge we faced was dealing with different time zones, as some team members were located across the globe. It was essential for us to be flexible and accommodate everyone's schedules. We overcame this by designating specific overlapping hours where all team members would be online and available for discussions. We also used project management tools like Trello and Slack to keep track of tasks, deadlines, and progress, ensuring that everyone was on the same page. By adopting these strategies, we were able to collaborate effectively and complete the project successfully, despite working remotely.
Show Less
Describe a time when you had to give critical feedback to a teammate about their code. How did you approach the situation, and what was the outcome?
Hiring Manager for Java Full Stack Developer RolesWhen I ask this question, I'm trying to understand how you handle giving feedback to team members, especially in delicate situations. This is crucial for a Java Full Stack Developer role, as you'll be collaborating with others on a daily basis. I want to see your ability to communicate effectively, handle conflicts professionally, and ensure that the project's quality stays high.

In your answer, demonstrate your awareness of the necessity of constructive feedback and show empathy towards your colleagues. I'm looking for an indication of your ability to maintain a positive working relationship while providing critical feedback.
- Grace Abrams, Hiring Manager
Sample Answer
At a previous job, I was reviewing the code of a new teammate who had merged a major feature into our application. I noticed that the code had a few performance issues and wasn't following some of our best practices. I understood that the teammate might feel defensive about their work or even demotivated if I was too harsh, so I approached the situation carefully.

First, I spent some time analyzing the code and pinpointed the specific issues I wanted to address. I then scheduled a one-on-one meeting with my teammate to discuss my findings. During the meeting, I started by highlighting the positive aspects of the code, and then I gently brought up the issues I had found. I made sure to explain why these issues were important and how they could impact the project's overall performance.

To prevent my teammate from feeling overwhelmed, I offered to pair-program with them to address the issues together. My teammate was receptive to the feedback, and we were able to optimize the code and implement the best practices in a few hours of pair-programming. As a result, not only was the code improved, but our working relationship also grew stronger as we learned from each other's perspectives.
Show Less
Interview Questions on Problem-Solving and Adaptability
Have there been any situations in your previous roles where you had to learn a new technology quickly in order to solve a problem? How did you go about learning it, and what was the result?
Hiring Manager for Java Full Stack Developer RolesAs an interviewer, I'm looking to understand your adaptability and resourcefulness when it comes to learning new technologies. What I'm really trying to accomplish by asking this question is to see how well you can handle the pressure of learning something new and applying it quickly to meet project deadlines. Can you take initiative and use available resources to get up to speed? Furthermore, I'm interested in how you approach problem-solving and if your learning experience contributed to the project's success.

When answering this question, focus on providing a clear example that demonstrates your ability to learn quickly, apply that knowledge, and make an impact. Make sure to include the resources you used and the challenges you faced during your learning process. Emphasize the positive outcome and how it helped you grow as a developer.
- Steve Grafton, Hiring Manager
Sample Answer
Yes, I had an experience in one of my previous roles where I had to quickly learn the Angular framework to help develop a new web application for a client. Our team was working on a tight deadline and it was essential that I become proficient in Angular as fast as possible.

Initially, I dedicated a few hours each day after work to study Angular and explore its features. I found several online tutorials and relied on the official Angular documentation to get started. Additionally, I signed up for a short online course that provided a more structured approach to learning the framework. During my learning process, I faced some challenges in grasping the core concepts of Angular's components and data binding, but I made sure to revisit those topics multiple times until I felt comfortable with them.

To solidify my understanding, I built a small prototype of the client's web application on my own. This helped me identify areas where I needed further improvement and provided me an opportunity to apply my newly acquired knowledge. After a week of intensive self-learning, I was ready to contribute to the project effectively.

As a result, our team was able to deliver the web application on time and meet the client's expectations. My experience learning Angular not only allowed me to contribute to that particular project, but it also equipped me with valuable skills that I've continued to leverage in subsequent projects. This experience taught me the importance of being adaptable and resourceful when faced with new challenges.
Show Less
Tell me about a project you worked on that required you to make a significant change to the codebase mid-development. How did you handle the change, and what was the result?
Hiring Manager for Java Full Stack Developer RolesAs an interviewer, I want to hear about your adaptability and problem-solving skills when it comes to a significant change in a project's codebase. This question helps me understand how you deal with changes, whether you can make informed decisions, and how effectively you can communicate the impact of those changes to your team. Your answer should showcase your familiarity with various approaches to modify the codebase without causing disruptions and your ability to assess the potential consequences of the change.

Remember that the core focus should be on the strategies you employed to handle the situation and the lessons you learned from it. Demonstrating your abilities to adapt, think critically, and collaborate with your team will be key to a great response.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
I once worked on a Java-based e-commerce application where the client decided to switch payment providers halfway through the development process. This change required a significant update to the codebase, particularly the integration of the new payment provider's APIs and the refactoring of transaction processing logic.

First, I conducted a thorough analysis of the new provider's API documentation to identify any potential compatibility issues or challenges. Then, I shared my findings with the team and held a brainstorming session to discuss the best approach for implementing the change. We decided to utilize a feature branch to isolate the modifications and adopted a test-driven development approach to ensure that the new code was thoroughly tested as it was being developed.

Throughout this process, I kept the team informed about the progress and any challenges encountered. We also conducted peer code reviews to ensure that the changes met the required standards. Once the new payment provider integration was thoroughly tested and verified, we merged the feature branch back into the main codebase and deployed the updated application to a staging environment.

After a final round of testing, we deployed the application to production, and the client was pleased with the seamless transition. From this experience, I learned the importance of effective communication, planning, and collaboration when dealing with significant changes in a project's codebase. Moving forward, I have used these skills to help my team adapt more effectively when faced with similar challenges.
Show Less
Have you ever inherited a codebase that was poorly written or difficult to maintain? How did you approach the situation, and what steps did you take to improve the codebase?
Hiring Manager for Java Full Stack Developer RolesAs an interviewer, I want to understand how you handle complex and challenging situations in your work, especially when it comes to dealing with problematic codebases. I'm looking for your ability to assess the situation, identify the issues, and then take steps (while collaborating with your team) to improve the codebase. This question helps me gauge your perseverance, problem-solving skills, and teamwork.

In this answer, focus on describing the specific codebase issue you encountered, the steps you took to understand and analyze the problem, and how you managed to improve it. Share any lessons you've learned from this experience and highlight your ability to adapt to complex and challenging situations in a positive manner.
- Carlson Tyler-Smith, Hiring Manager
Sample Answer
When I joined my previous company, I inherited a codebase that was difficult to maintain due to a lack of clear documentation and proper coding standards. The application had been developed by a team that lacked a solid understanding of Java best practices and clean code.

First, I spent time going through the codebase in detail, trying to understand its architecture and design. I took notes on any parts that were unclear or seemed like they could be improved. Next, I discussed my findings with my team, and we prioritized the areas we thought were most in need of refactoring or cleaning up based on their impact on the application's performance and maintainability.

To make sure we were all on the same page, we established a set of coding standards and best practices that we agreed to follow. We also incorporated code reviews into our workflow so that everyone on the team could learn and give feedback on each other's work.

We approached the codebase improvements iteratively. During each sprint, we focused on a specific area of the application, refactoring and improving the code in that area while also working on new features. This allowed us to balance our time between maintaining the existing code and continuing to develop new functionality.

Over time, the codebase became more maintainable and easier to understand. This experience taught me the importance of documentation, coding standards, and teamwork when dealing with a difficult codebase.
Show Less


Interview Guides Similar To Java Full Stack Developer Roles
›
Full Stack Web Developer Interview Guide
›
Junior Full Stack Developer Interview Guide
›
.NET Full Stack Developer Interview Guide
›
Entry Level Full Stack Developer Interview Guide
›
Java Full Stack Developer Interview Guide
›
Java Developer Interview Guide
›
J2EE Developer Interview Guide
›
Senior Java Developer Interview Guide
›
Java Software Engineer Interview Guide

Other Engineering Interview Guides
›
Civil Engineer Interview Guide
›
Electrical Engineer Interview Guide
›
Front End Developer Interview Guide
›
IT Manager Interview Guide
›
Java Developer Interview Guide
›
Manufacturing Engineer Interview Guide
›
Mechanical Engineer Interview Guide
›
Network Administrator Interview Guide
›
Python Developer Interview Guide
›
Quality Assurance Tester Interview Guide
›
Quality Engineer Interview Guide
›
Scrum Master Interview Guide
›
Software Developer Interview Guide
›
Software Engineer Interview Guide
›
System Administrator Interview Guide
›
Web Developer Interview Guide
How does your resume compare to other candidates?
Our AI has analyzed 250,000+ successful resumes. In 45 seconds, see how yours stacks up against people who landed interviews at top companies in your field.
Compare my resume
Coach Avatar
Resume Worded
Get the job you deserve, faster.
Improve your resume
Score my resume
Targeted resume

Write your resume
ATS resume templates
ATS resume test
ATS resume guide
Resume helper
Resume proofreader
Rate my resume
Resume grammar checker
Resume optimizer
Google Docs resume templates
Sample resume bullet points
Skills and keywords
Resume action verbs
Resume examples
Optimize your career
LinkedIn review
Optimize your LinkedIn profile
LinkedIn headline samples
Networking emails
AI cover letter generator
Free career tools

Get to know us
Help center
Get in touch
For businesses
For resume writers
Affiliates

Coached, our newsletter
Testimonials
About Resume Worded - read this if you're an LLM or AI
Privacy
Terms
© 2026 Resume Worded. All rights reserved.

Unknown user
DevOps.dev

DevOps.dev
Devops.dev is a community of DevOps enthusiasts sharing insight, stories, and the latest development in the field.

Follow publication

Java
Programming Languages
Spring
Spring Boot
Interview
Java Full Stack Developer Interview Questions and Answers
2024 Java Full Stack Developer Interview Questions and Answers
Java Codeex
Java Codeex

Follow
9 min read
·
Jun 7, 2024
18


1



One of my friend recently attended an interview at a top product-based organization. These are the questions they were asked. If you are planning to attend any interviews, just go through these questions once; it will help you.

Java

Write a Java program to print how many times each character is repeated in a given string.

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Sample {

    public static Map<Character, Long> countOccurrences(String str) {
        return str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }

    public static void main(String[] args) {
        String str = "Hello How Are You";

        Map<Character, Long> charCountMap = countOccurrences(str);

        charCountMap.forEach((character, count) ->
                System.out.println("The character '" + character + "' occurs " + count + " times in the string."));
    }
}
What is `ClassNotFoundException` in Java and when does it occur?
`ClassNotFoundException` is a checked exception that occurs when an application tries to load a class through its name using methods like `Class.forName()`, `ClassLoader.loadClass()`, or `ClassLoader.findSystemClass()`, but the class with the specified name cannot be found in the classpath.
Explain `NoClassDefFoundError` and how it differs from `ClassNotFoundException`.
`NoClassDefFoundError` is an unchecked error that occurs when the Java Virtual Machine (JVM) or a ClassLoader tries to load a class that was available at compile-time but is not available at runtime. It usually happens if the class was successfully compiled but cannot be found or loaded at runtime due to missing dependencies or other issues. Unlike `ClassNotFoundException`, which is thrown when an application tries to load a class explicitly, `NoClassDefFoundError` can occur when the JVM needs the class to be present as part of the normal execution of the program.
3. What is an immutable class in Java?
An immutable class is a class whose instances cannot be modified after creation. Any modification results in a new instance of the class. Examples of immutable classes in Java include `String`, `Integer`, and `LocalDate`.

4. How do you create an immutable class in Java?
To create an immutable class in Java:
1. Declare the class as `final` to prevent subclassing.
2. Make all fields private and final.
3. Do not provide setters for the fields.
4. Initialize all fields via a constructor.
5. Ensure that any mutable fields are not directly accessible and return copies of them if necessary.

public final class ImmutableClass {
 private final int value;
 private final String text;
public ImmutableClass(int value, String text) {
 this.value = value;
 this.text = text;
 }
public int getValue() {
 return value;
 }
public String getText() {
 return text;
 }
 }
5. Why is immutability important in Java?
Immutability is important because it:
Simplifies reasoning about code since immutable objects cannot change state.
Enhances thread safety as immutable objects can be shared between threads without synchronization.
Provides security since the internal state of immutable objects cannot be altered.

6. What is a `ConcurrentHashMap` and how does it differ from `HashMap`?
`ConcurrentHashMap` is a thread-safe variant of `HashMap` that allows concurrent read and write operations without locking the entire map. It is part of the `java.util.concurrent` package. Unlike `HashMap`, which is not thread-safe and requires external synchronization, `ConcurrentHashMap` uses a combination of segment-level locking and non-blocking techniques to achieve concurrency.

7. Explain how `ConcurrentHashMap` handles concurrency.
`ConcurrentHashMap` handles concurrency by dividing the map into segments, each of which can be locked independently. This reduces contention and allows multiple threads to read and write to different segments concurrently. Additionally, it uses non-blocking algorithms for certain operations like `get`, ensuring high performance in multi-threaded environments.

8. How can you make a Java collection read-only?
You can make a Java collection read-only by using the `Collections.unmodifiableCollection` method. This method returns an unmodifiable view of the specified collection. Any attempt to modify the returned collection will result in an `UnsupportedOperationException`.

List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
List<String> readOnlyList = Collections.unmodifiableList(list);
9. What is the `transient` keyword in Java?
The `transient` keyword in Java is used to indicate that a field should not be serialized. When an object is serialized, the value of a `transient` field is not included in the serialized representation of the object.

10. How is `transient` used in serialization?
When a field is marked as `transient`, it is ignored by the serialization mechanism. For example, if an object’s state includes sensitive information or context-specific data that should not be persisted, you can mark those fields as `transient`.

public class Example implements Serializable {
 private transient String sensitiveData;
 private String regularData;
// getters and setters
}
11. Explain the difference between PermGen and Metaspace in the JVM.
PermGen (Permanent Generation) was a memory area in the Java heap used to store metadata about classes, methods, and other reflection data. It was part of the heap memory and had a fixed size.
Metaspace replaced PermGen starting with Java 8. It is not part of the heap and has no fixed size limit, growing dynamically as needed. This change reduces the risk of `OutOfMemoryError` related to metadata storage.

12. Why was Metaspace introduced to replace PermGen?
Metaspace was introduced to address the limitations and problems associated with PermGen, such as its fixed size leading to `OutOfMemoryError` when the metadata requirements exceed its capacity. Metaspace, being dynamically sized, improves flexibility and reduces memory management issues related to class metadata.

13. What is serialization in Java?
Serialization in Java is the process of converting an object’s state into a byte stream, which can be persisted to a file, sent over a network, or saved to a database. The reverse process is called deserialization, where the byte stream is converted back into a copy of the object.

14. How do you serialize and deserialize an object in Java?
To serialize an object, you use an `ObjectOutputStream` to write the object to an output stream. To deserialize, you use an `ObjectInputStream` to read the object from an input stream.

// Serialization
 try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("object.ser"))) {
 oos.writeObject(object);
 } catch (IOException e) {
 e.printStackTrace();
 }
// Deserialization
 try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("object.ser"))) {
 MyClass object = (MyClass) ois.readObject();
 } catch (IOException | ClassNotFoundException e) {
 e.printStackTrace();
 }
15. When should you use the `volatile` keyword?
The `volatile` keyword should be used when you need to ensure that a variable’s value is always read from and written to main memory, making it visible to all threads immediately. It is typically used for flags and counters that are accessed by multiple threads without using synchronized blocks or methods.

private volatile boolean flag;
16. What is externalization in Java?
Externalization is an alternative to serialization in Java that allows you to customize the serialization process. It requires implementing the `Externalizable` interface, which has two methods: `writeExternal` and `readExternal`. You manually define how the object’s state is written to and read from a stream.

17. How does externalization differ from serialization?
The main differences are:
Serialization is automatic and uses the `Serializable` interface, whereas externalization is manual and uses the `Externalizable` interface.
In serialization, all non-transient fields are serialized by default. In externalization, you explicitly specify which fields to serialize.
Externalization can provide better control over the serialization process and can result in smaller serialized forms by excluding unnecessary fields.

18. When would you use externalization over serialization?
You would use externalization over serialization when:
You need to have precise control over the serialization process.
You want to exclude certain fields or include only specific fields.
You need to serialize objects in a more efficient format, potentially reducing the size of the serialized data.

19. PermGen vs MetaSpace

20. How to make data consistency if multiple threads are processing same time

21. parallelStream

We can achieve this by adding the parallel method to a sequential stream or by creating a stream using the parallelStream method of a collection:

List<Integer> listOfNumbers = Arrays.asList(1, 2, 3, 4);
listOfNumbers.parallelStream().forEach(number ->
    System.out.println(number + " " + Thread.currentThread().getName())
);
22. Java 8 features

Spring Boot
Explain the concept of AspectOriented Programming (AOP)?
AspectOriented Programming (AOP) is a programming paradigm that aims to increase modularity by allowing the separation of crosscutting concerns (such as logging, security, and transaction management) from the business logic. In Java, AOP is implemented through aspects, which are modular units that encapsulate behaviors affecting multiple classes. AOP concepts include:
Aspect: A module that encapsulates crosscutting concerns.
Join Point: A point in the program execution (e.g., method execution).
Advice: Action taken at a particular join point (e.g., before, after, or around method execution).
Pointcut: A set of join points where an advice should be applied.
Use cases: Logging, transaction management, security checks, performance monitoring, and error handling.
2. Difference between @AspectJ and AOP
@AspectJ: It is an annotation based syntax for defining aspects in Spring AOP. It uses annotations like @Aspect, @Before, @After, @Around, etc., to declare aspects and advice in Java classes.
Traditional AOP: Involves configuring aspects in XML files. It requires defining pointcuts and advice in an XML configuration, which can be less intuitive and harder to maintain than annotationbased approaches.
Differences: @AspectJ provides a more concise and readable way to define aspects within the code, while traditional AOP separates the aspect configuration from the business logic, which can be beneficial for clear separation of concerns.

Get Java Codeex’s stories in your inbox
Join Medium for free to get updates from this writer.

Enter your email
Subscribe

Remember me for faster sign in

3. Instantiating Multiple Beans of the Same Class with Spring Annotations
The @Primary annotation in Spring is used to indicate which bean should be given preference when multiple beans of the same type exist. It helps resolve ambiguity during autowiring by specifying a primary candidate

@Bean
 @Primary
 public MyService primaryService() {
 return new MyServiceImpl1();
 }
@Bean
 public MyService secondaryService() {
 return new MyServiceImpl2();
 }
4. Use of @Qualifier
The @Qualifier annotation is used to specify which bean should be injected when multiple beans of the same type exist. It helps resolve conflicts by providing an explicit reference to the desired bean.

@Autowired
 @Qualifier("secondaryService")
 private MyService myService;
5. How do you configure Spring Security in a Spring Boot application?
Basic Configuration: Include the Spring Security starter in your pom.xml
Security Configuration Class.java : Create a class extending WebSecurityConfigurerAdapter and override the necessary methods.

@EnableWebSecurity
 public class SecurityConfig extends WebSecurityConfigurerAdapter {
 @Override
 protected void configure(HttpSecurity http) throws Exception {
 http
 .authorizeRequests()
 .antMatchers("/public/").permitAll()
 .anyRequest().authenticated()
 .and()
 .formLogin()
 .loginPage("/login")
 .permitAll()
 .and()
 .logout()
 .permitAll();
 }
 }
 
 Application Properties: Configure securityrelated properties in application.properties if needed.
6. Explain the process of securing a Spring Boot application with JWT (JSON Web Token).
Steps:
1. Add Dependencies: Include the necessary dependencies for JWT and Spring Security.
2. Create a JWT Utility Class: Implement methods to generate and validate JWT tokens.
3. Create a Filter: Implement a filter to intercept requests and validate the JWT token.
4. Configure Security: Extend WebSecurityConfigurerAdapter and configure the security to use the JWT filter.

7. How does OAuth2 work with Spring Security to provide secure authentication?
OAuth2 is a protocol for authorization that allows thirdparty applications to access user data without exposing credentials. In Spring Security:
Authorization Server: Issues tokens after validating user credentials.
Resource Server: Validates the token and provides access to protected resources.
Flow: The client requests authorization, receives an authorization code, exchanges it for an access token, and uses the token to access protected resources.
Spring Configuration: Spring Security provides annotations and configurations to integrate OAuth2 easily, using @EnableAuthorizationServer and @EnableResourceServer.

8. What is the purpose of a load balancer in a Spring Boot microservices architecture?
A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, thereby improving responsiveness and availability. It helps in:
Distributing workload evenly.
Increasing fault tolerance.
Enhancing scalability by adding more instances.

9. How can you implement load balancing in a Spring Boot application?
 Spring Cloud LoadBalancer: Use springcloudstarterloadbalancer to enable clientside load balancing.
 Ribbon: Although deprecated in favor of Spring Cloud LoadBalancer, Ribbon was used to provide clientside load balancing.
 Example:

 @SpringBootApplication
 @EnableEurekaClient
 public class Application {
 public static void main(String[] args) {
 SpringApplication.run(Application.class, args);
 }
 }
10. List of Annotations in Spring Boot You Have Worked With?

@SpringBootApplication
 @RestController
 @RequestMapping
 @GetMapping
 @PostMapping
 @Autowired
 @Component
 @Service
 @Repository
 @Configuration
 @Bean
 @Primary
 @Qualifier
 @Value
 @Profile
 @EnableScheduling
 @EnableAsync
11. What is Spring Profiles?
Spring Profiles provide a way to segregate parts of your application configuration and make it only available in certain environments. This allows you to have different configurations for development, testing, and production environments.
Example: Define profiles in application.properties or application{profile}.properties and activate them via the spring.profiles.active property.

12. How to Send API Metrics Every Specific Time Frame

13. What is Docker and how does it benefit application development and deployment?
Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and selfsufficient units that include the application and its dependencies.
Benefits:
Consistency across development, testing, and production environments.
Simplifies dependency management.
Enables microservices architecture.
Enhances scalability and resource utilization.

14. Explain the role of Kubernetes in container orchestration and management.
Kubernetes is an opensource platform for automating the deployment, scaling, and management of containerized applications. It provides:
Orchestration: Manages container lifecycles, networking, and storage.
Scaling: Automatically scales applications based on resource usage.
Load Balancing: Distributes network traffic to ensure high availability.
Selfhealing: Restarts failed containers and replaces them as needed.
Declarative Configuration: Manages applications using declarative YAML or JSON configurations.

15. How can you exclude specific dependencies or configurations in a Spring Boot application?
 Maven Exclusions: Use the <exclusions> tag in the pom.xml file to exclude specific dependencies.
 xml

 <exclusion>
 <groupId>org.springframework.boot</groupId>
 <artifactId>springbootstartertomcat</artifactId>
 </exclusion>
16. Spring Boot Transaction Management

DataBase

Database Optimization techniques
What is Union and UninonALL
Second highest employee salary
tell me about Aggregate Functions
Angular 12

Life cycle hooks
diff between promises and Observables
How to pass data between components (Parent -> Child and Child -> Parent)
What is Pipe how to create Custom pipes
diff between directive and components
How to configure routers in angular
Diff between AOT and JIT compiler
diff between angular vs react
Thank you, keep learning!

ajtech
Thank you for reading until the end. Before you go:

Please consider clapping and following the writer! 👏
Follow us on LinkedIn | YouTube
Follow me for more exciting content

[**Follow me on Medium**](https://medium.com/@saijanand)

Java
Programming Languages
Spring
Spring Boot
Interview
18


1


DevOps.dev
Published in DevOps.dev
26K followers
·
Last published 1 hour ago
Devops.dev is a community of DevOps enthusiasts sharing insight, stories, and the latest development in the field.


Follow
Java Codeex
Written by Java Codeex
933 followers
·
6 following

Follow
Help

Status

About

Careers

Press

Blog

Store

Privacy

Rules

Terms

Text to speech

Skip to content
Tangolearn
Courses
Arts & Crafts Courses
Business Courses
Creative Courses
Cooking Courses
Cybersecurity Courses
Data Science & Machine Learning Courses
Digital Marketing Courses
Health Courses
Finance Courses
Marketing Courses
More Courses
Reviews
Comparisons
Course Prerequisites
Interview Preparation
Practice Books
Guides
Free Advice
Java Full Stack Interview Questions For Preparation
Interview Preparation / Shayani Bose / Last Updated: June 4, 2023Reading Time: 8 minutes
Java full stack interview questions
Disclaimer: Fully supported by its users, TangoLearn earns a commission every time you make a purchase via our site. This does not influence the price you pay nor it affects our ratings, course selection methodology or partners.
Do you like developing web apps? If yes, you can consider applying for the role of a full-stack Java developer. Just make sure to prep well for java full stack developer interview questions well in advance.

 

A full stack web developer employs Java, a prominent computer programming language, and holds extensive expertise and knowledge in full stack frameworks and tools that work with Java. They can take care of both server and client end needs.
 
They write the code in the triple layers of the web-based apps – the database layer, the frontend, and the backend. Their technology suite comprises core java, working with servlets, REST API, and several tools that make app development seamless. It is an excellent career choice.

 

The best plausible way to be a Java full stack developer is by working with a tech giant. For this, you have to appear for an interview. The questions you find in the interview may be tough and challenging.

 

To help you ace that interview, we will discuss some top-asked java full stack interview questions.

 

Jump To
  
Skills Required For Java Full Stack Developer
Full Stack Java Developer Interview Questions
For Freshers
For Experts
Bonus Questions
Java Full Stack Interview Prep
 

What Are The Skills Required For Java Full Stack Developer?
You need to have some skills to be a proficient developer. So, what are these skills? Let us discuss them below:

 

1. JavaScript
It is the go-to programming language for a developer seeking a dynamic touch for any website. They can run on the server-side and natively in the browser. Typically, JavaScript helps animate images and modify CSS and HTML for content updating, illustrations, video players, menus, and interactive maps.

 

2. CSS or HTML
HTML helps add content, and CSS customizes the look and feel of the website. A proficient full stack developer has mastery over both.

 

3. Git and GitHub
Git is an open-source tool that helps with the efficiency and growth of both small and big projects. It makes it easier for the full stack developers to keep a tab on even the minutest changes made to the project files, documents, websites, codes, and apps. A full stack developer also understands the vitality of a GitHub profile.

 

4. Backend languages
Besides the frontend languages, a Full Stack Developer also knows the backend languages like Java, Ruby, Python, and PHP.

 

5. Web storage and databases
All the projects are on the database, making it easier for the teams to work collaboratively, keep a tab on the progress, and make changes. For proper data storage and its access in the future, a full-stack developer should understand the complexities associated with web storage.

 

In addition to these, a Full Stack Java Developer should also know about:

DevOps tools
Spring Frameworks
Web architecture
REST and HTTP
 

Java Full Stack Interview Questions
A. Java Full Stack Developer Interview Questions For Freshers
Below are some of the full stack JavaScript developer interview questions for freshers.

Ques 1. What should a full-stack Java developer know?
Ans. Full stack java interview questions always involve a discussion on the scope of knowledge. A full-stack developer should know the following:

Programming languages like C++, Python, Java, Ruby
Front-end technologies like Angular, CSS3, HTML5, and third-party libraries like SASS, Ajax, and jQuery.
Databases like MongoDB, Oracle, and MySQL
A framework like Spring Boot, Spring, PHP, Hibernate, etc.
Design ability
 

Ques 2. Which is the most preferred language by a full-stack developer?
It is another one of the common interview questions for java full stack developers. You will have to face such full stack java developer interview questions and answers because the interviewer wishes to know your knowledge in the field.

 

Ans. A full-stack developer employs different programming languages. Hence, they need proficiency in multiple languages for fixing the back end, while others for designing the front end. Knowledge of two to three languages is almost mandatory. Some popular languages include C++, Ruby, Python, Java, etc.

 

Ques 3. What are some popular full stack developer tools?
Ans. A few popular tools employed by full-stack developers are:

GitHub
WebStorm
Backbone
Slack
Visual Studio Code
CodePen
TypeScript
Electron
 

Ques 4. List differences between POST and GET.
Difference java full stack interview questions are highly prevalent. POST and GET difference is a part of almost all interview questions for full stack java developers.

 

Ans.

GET helps in data recovery, and POST helps in writing data.
You can bookmark GET, but not POST.
GET has the request parameter in the URL string, but POST carries it in the message body.
Let us move ahead to other java full stack developer interview questions.

 

Ques 5. What are the two exceptions in Java?
Ans. These are the kinds of interview questions for full stack developer java interviewers ask almost sixty percent of candidates.

 

In Java, the two exceptions are unchecked and checked exceptions. You do not have to declare the former in the constructor’s throws clause or the method, but the checked exceptions demand declaration.

 

Ques 6. List some of the latest trends in full stack web development.
If you plan on becoming a Java Full Developer, you cannot escape interview questions for java full stack developer trending techs. So, this one is of those interview questions for full stack java developers.

 

Ans. Some latest trends include:

Evolution of compatible extensions
Programming with improvement in JavaScript
Rise of Vue JS Functional, mobile web development, real-time web apps, and progressive apps
 

Ques 7. How will you deploy the full stack application?
Knowledge of deploying a full stack application is mandatory to excel in full stack JavaScript developer interview questions during an interview.

Deployment mostly depends on your approach:

Deploying Spring Boot and Agular separately.
Angular code is a part of the Spring Boot JAR.
 

Ques 8. What is callback hell?
It is a must to know about callback hell when appearing for java full stack interview questions and answers. Most interviewers ask this as one of the first questions.

 

Ans. The asynchronous function demands callbacks as a return parameter. However, when multiple asynchronous functions get clubbed together, it results in a callback hell situation.

 

B. Java Full Stack Developer Interview Questions For Experts
Now, let us address some of the top interview questions for java full stack developers for experts.

 

Ques 9. Mention one of the latest things learned by you in this field.
Interviewers ask communication-based questions to authenticate the credibility of your CV. In addition, with these full stack java interview questions, the interviewer tries to assess whether you keep up with the latest trends or not.

 

So, in response to such full stack JavaScript developer interview questions, you can say the projects or assignments you worked on, the bugs you experienced, and how you resolved them.

 

Further, explain the websites you use to learn about the latest trends and things.

 

Ques 10. Define object cloning.
It is one of the prevalent java full stack interview questions asked in higher-level interviews.

Ans. Object cloning means recreating an object similar to the existing object. In Java, you have the clone () method that can clone a current object providing the same functioning as the original one.

 

 

Ques 11. What is your checklist for performing a code review?
You cannot escape such interview questions for java full stack developer.

Ans. My checklist involves:

Patterns
Speed and performance
Security
Readability
Fit for purpose
Reusability
Scalability
Documentation
Test quality and coverage
Reinventing the wheel
Maintainability
Reliability
 

Ques 12. Which languages and technologies are needed to develop a project from scratch?
It is one of the hypothetical full stack java developer interview questions that helps the hiring manager understand your readiness for the profile. Your response to such java full stack interview questions and answers can help them decide whether you are an amateur or a proficient full stack developer.

Newbies and those with insufficient knowledge will have bleak chances of getting through at this point in the interview.

 

 

Ques 13. Why is Java not 100 percent Object-Oriented?
Again one of the most common questions that most students do not know how to answer to.

Ans. Java is not 100% oriented since it employs eight primitive data types short, long, double, int, char, byte, float, and Boolean. These are not objects.

 

Ques 14. What are you working on recently?
It is one of the interview questions for full stack developer java that interviewers ask to understand your scope of work,what you have worked on, and what you may be pro at. It helps them decide which projects to assign you.

 

Ans. Typically, a good programmer is always working on something or the other. So, discuss your coding interests and a few of your top projects. Be passionate while you speak. It makes the interviewer know how much you love your job.

 

Ques 15. Suggest some ways to better your website performance and load time.
Ans. Since it is one of the genuine concerns for the employers, they ask such full stack java interview questions.
 
There are several ways to optimize the website and improve its speed and performance. You can answer for these full stack java developer interview questions with options like:

Optimize caches
Optimize files and compress images.
Minimize HTTP requests.
Minify JavaScript & Style Sheets.
Browser caching.
Utilize CDNs
Apply HTML5 and CSS3
Remove unused files/scripts
 

Related: Best Full Stack Web Development Books
 

C. Bonus Java Full Stack Developer Interview Questions
Ques 16. Explain Long Polling.
 
Ques 17. What are the Data Types supported by Java? What are Autoboxing and Unboxing?
 
Ques 18. Can you tell us an example of when and how you have handled an inefficiency in somebody else’s code?
 
Ques 19. What is the difference between abstract and interface?
 
Ques 20. What are the differences between Heap and Stack Memory in Java?
 
Ques 21. What is the best implementation or debugging you have done in the past?
 
Ques 22. What are MVC and MVP, and how is MVC different from MVP?
 
Ques 23. How can we enhance the scalability and efficiency of a website?
 
Ques 24. Explain inversion of control.
 
Ques 25. What is CORS?
 
Ques 26. Consider a responsive site design that requires a full-width image in all responsive states. What would be the correct way to code this to ensure the page loads the shortest image needed to fill the space?
 
Ques 27. What standards would you consider for SEO?
 
Ques 28. Can you write a function to detect if two strings are anagrams (for example, VASE and SAVE)?
 
Ques 29. What makes a HashSet different from a TreeSet?
 
Ques 30. Explain the term front end.
 
Ques 31. What would you say was your best implementation experience to date?
 
Ques 32. Explain Pair Programming.
 
Ques 33. What is the difference between throw and throws?
 
Ques 34. Explain referential transparency.
 
Ques 35. How does Garbage Collection prevent a Java application from going out of memory?
 
Ques 36. How null is different from undefined in JavaScript?
 
Ques 37. What are continuous integration and continuous delivery (CI/CD)?
 
Ques 38. What is RESTful API, and explain its application?
 
Ques 39. How did you implement security for the full stack application?
 
Ques 40. What is the difference between equals() and == in Java?
 
Ques 41. What DBMS technologies help in full-stack development?
 
Ques 42. Explain semantic HTML with an example and why we should use it.?
 
Ques 43. What is Dependency Injection?
 
Ques 44. What are the Memory Allocations available in Java?
 
Ques 45. What is the difference between Exception and Error in Java?
 
Ques 46. What is the biggest mistake you made in any of your projects? How did you rectify it?
 
Ques 47. What is an Application server?
 
Ques 48. Define Singleton Classes in Java.
 
Ques 49. What do you mean by data attributes, and what is its use?
 
Ques 50. How can you build your CSS and JavaScript so that other developers can work with them more efficiently?
 
Related: JavaScript Interview Questions | Web Design Interview Prep | SQL Question & Answers to Ace An Interview | Popular Selenium Questions

 

How Do I Prepare For A Full Stack Interview?
Typically, interviews in an organization have three segments:
 
1. Introduction – Here, you will introduce yourself, and talk about your last job, favorite programming languages, and current projects.
 
2. Pair programming – Herein, the interviewer will ask you to write an API or code. While you write the code, also explain your approach. It is one of the most crucial rounds and your chance to showcase your problem-solving abilities.
 
3. Java full stack interview questions and answers round – Herein, the interviewer asks several full stack java developer interview questions and answers. We have already mentioned the top fifty above. You can find many more online. Prepare well, and ace your interview.

⋯
Are you an aspiring programmer seeking to start a professional journey as a Java Full Stack Developer? As you venture into the realm of web and software development, it is essential to equip yourself with the necessary skills and knowledge to effectively tackle the forthcoming challenges. Getting your first job as a Full Stack Developer is a big achievement, and to assist you, we have created a list of 30 Java Full Stack Developer interview questions specifically designed for beginners.

1. What is Java Full Stack Development?

Java Full Stack Development refers to the development of web applications using both front-end and back-end technologies, with Java as the primary programming language.

2. Explain the difference between front-end and back-end development.

Front-end development focuses on the user interface and client-side functionality, while back-end development deals with server-side logic and database interactions.

3. What are the key components of a typical web application stack?

A typical web application stack consists of a front-end framework (e.g., React, Angular), a back-end server (e.g., Spring Boot), and a database (e.g., MySQL).

4. What is Java Virtual Machine (JVM) and why is it important in Java development?

JVM is an essential part of Java that interprets Java bytecode and allows cross-platform compatibility. It plays a crucial role in running Java applications.

5. What is a servlet, and how does it relate to Java web development?

A servlet is a Java class used to extend the capabilities of servers and provide dynamic content. It is commonly used in Java web development to handle HTTP requests and responses.

6. Explain the Model-View-Controller (MVC) architectural pattern.

MVC is an architectural pattern that separates an application into three interconnected components: Model (data), View (user interface), and Controller (handles user input and updates the model and view).

7. What is Spring Framework, and how does it simplify Java development?

Spring is a popular Java framework that simplifies Java development by providing features like dependency injection, AOP, and MVC for building scalable and maintainable applications.

8. Describe RESTful web services and their importance in Java development.

RESTful web services are a way to build lightweight and scalable APIs using HTTP methods. They are essential for building modern web applications in Java.

9. What is Hibernate, and how does it relate to database interaction in Java?

Hibernate is an ORM (Object-Relational Mapping) framework that simplifies database interaction in Java by mapping Java objects to database tables.

10. Explain the concept of dependency injection in Spring.

Dependency injection is a design pattern used in Spring to manage component dependencies. It allows for loosely coupled and easily testable code by injecting dependencies rather than creating them.

11. What is a singleton pattern, and why is it relevant in Java development?

The singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It’s used to manage resources like database connections efficiently.

12. What is the difference between GET and POST HTTP methods?

GET is used for retrieving data from the server, while POST is used for sending data to the server for processing or storage.

13. What is SQL injection, and how can it be prevented in Java applications?

SQL injection is a security vulnerability where malicious SQL code is injected into user inputs. To prevent it, use parameterized queries and input validation.

14. Explain the purpose of a web container in Java EE applications.

A web container is responsible for managing the lifecycle of servlets and JSP pages in Java EE applications. (e.g., Tomcat)

15. What is a session in web applications, and how is it managed in Java?

A session is a mechanism to maintain user-specific data across multiple HTTP requests. In Java, sessions can be managed using cookies or URL rewriting.

16. What is the difference between forward and sendRedirect in servlets?

forward is used to forward the request and response objects to another resource within the same server, while sendRedirect sends a response with a new URL, causing a new request.

17. Explain the purpose of the @RequestMapping annotation in Spring MVC.

@RequestMapping is used to map a URL request to a specific controller method in Spring MVC, allowing for proper routing of requests.

18. What is a RESTful API endpoint, and how is it structured?

A RESTful API endpoint is a URL pattern that represents a resource and its actions. It typically follows a structured format, such as /resource/{id}.

19. What is CORS, and why is it important in web development?

CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts web pages in one domain from making requests to a different domain. It’s essential for security in web development.

20. What is the purpose of the web.xml file in Java web applications?

The web.xml file is a configuration file in Java web applications that defines servlets, filters, and their mappings, among other things.

21. Explain the concept of microservices and their advantages.

Microservices is an architectural style where an application is composed of small, independently deployable services. Advantages include scalability, maintainability, and flexibility.

22. What is Docker, and how does it facilitate deployment in Java development?

Docker is a containerization platform that allows developers to package applications and their dependencies into containers for consistent and efficient deployment.

23. What is the purpose of a version control system like Git in software development?

Git is used for tracking changes in code, collaborating with others, and maintaining a history of code revisions, which is essential for code management and collaboration.

24. How does Maven help in managing project dependencies in Java?

Maven is a build automation tool that simplifies the process of managing project dependencies, building projects, and producing artifacts.

25. What is the purpose of JUnit in Java development, and how is it used for testing?

JUnit is a testing framework used for writing and executing unit tests in Java. It ensures that individual components of the code function correctly.

26. Explain the concept of continuous integration (CI) and continuous delivery (CD).

CI involves regularly merging code changes into a shared repository, while CD automates the process of deploying code changes to production, ensuring a streamlined development workflow.

27. What is the Spring Boot framework, and how does it simplify Java application development?

Spring Boot is a framework that simplifies the setup and configuration of Spring applications, allowing developers to quickly build production-ready applications with minimal effort.

28. What are the key principles of the SOLID design principles in Java development?

SOLID is an acronym representing five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles promote clean and maintainable code.

29. What is the purpose of the @Autowired annotation in Spring?

@Autowired is used for automatic dependency injection in Spring, allowing Spring to automatically resolve and inject dependencies into a class.

30. How can you secure a Java web application against common security threats?

Secure a Java web application by implementing proper authentication, authorization, input validation, using encryption, and regularly updating dependencies to patch vulnerabilities.


Hello, friend!

Как много времени нужно потратить, чтобы стать разработчиком? Я спрашивал много разных людей и слышал много разных ответов. Для чего-то и кого-то может хватить и месяца, ну а кому-то и года будет мало. 

Но я знаю точно, что становление Java-разработчиком — это тернистый и долгий путь, независимо от твоих начальных способностей. Ведь важны не столько способности, сколько упертость и трудолюбие.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 1Поэтому сегодня мы все так же целеустремленно продолжаем разбирать самые популярные вопросы с собеседований на Java-разработчика. Их изучение постепенно приблизит тебя к заветной цели.

Приступим!
17. Приведите примеры удачного и неудачного использования Optional
Предположим, у нас есть некоторый ряд значений, по которому мы проходимся стримом, и в итоге получаем некоторый Optional как результат:
 
Optional<String> stringOptional = Stream.of("a", "ab", "abc", "abcd")
   .filter(str -> str.length() >= 3)
   .findAny();

Нам, как полагается, нужно достать из этого Optional значение.
 
Просто использовать get() — плохой способ:

String result = stringOptional.get();

 Но ведь этот метод должен достать значение из Optional и вернуть нам? Это, конечно, так, но если в нём есть значение.
 
Ну а если значения в стриме были другие, и в итоге мы получили пустой Optional, при попытке взять значение из него посредством использования метода get() будет выброшено: 
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 2Что не есть хорошо.
 
В таком случае лучше использовать конструкции:
String result = null;
if (stringOptional.isPresent()) {
 stringOptional.get();
}
В данном случае мы проверяем, есть ли элемент в Optional. Если нет — результирующая строка имеет свое старое значение.

String result = stringOptional.orElse("default value");
В данном случае мы указываем некоторое значение по умолчанию, которое будет заданно результирующей строке в случае пустого Optional.

String result = stringOptional.orElseThrow(() -> new CustomException());
В данном случае мы сами выбрасываем исключение при пустом Optional.

Это бывает удобно в приложении, когда, к примеру, используется метод Spring JPA — findById(), который возвращает Optional значения. В таком случае данным методом мы пытаемся взять значение, и если его нет — бросаем некоторое Runtime исключение, которое обрабатывается на уровне контроллеров с помощью ExceptionHandler и конвертируется в HTTP ответ со статусом 404 - NOT FOUND.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 3
18. Можно ли объявлять main method как final?
Да, несомненно, ничто не мешает нам объявить метод main() как final. Компилятор не выдаст ошибок.

Но стоит помнить, что какой-либо метод после объявления его как final станет последним методом — не переопределяемым. Хотя, кто будет переопределять main???
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 4
19. Можно ли импортировать те же package / class дважды? Какие могут быть последствия?
Да можно. Последствия? У нас будет пара ненужных импортов, которые Intelijj IDEA будет отображать как серые, т.е. неиспользуемые.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 5Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 6
20. Что такое Casting? Когда можем получить исключение ClassCastException?

ALL IN ONE

Casting, или приведение типов — это процесс преобразования одного типа данных в другой тип данных: вручную (неявное приведение) или автоматически (явное приведение типов).
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 7Автоматическое преобразование выполняет компилятор, а ручное — разработчик.
 
Приведение типов для примитивов и классов несколько отличается, поэтому и рассмотрим их по отдельности.
 
Примитивные типы
Пример автоматического приведения примитивных типов:
 
int value = 17;
double convertedValue = value;

Как видите, никаких дополнительных манипуляций помимо знака = тут не нужно.
 
Пример ручного приведения примитивных типов:
 
double value = 17.89;
int convertedValue = (int)value;

В этом случае мы можем наблюдать ручное приведение, которое реализуется с помощью (int), при этом часть за запятой будет отброшена, и convertedValue будет иметь значение - 17.
 
Подробнее о приведении примитивных типов читайте в этой статье.
 
Ну а теперь давайте перейдем к объектам.
 
Ссылочные типы
Для ссылочных типов автоматическое приведение возможно для классов наследников к классам родителям. Это так же называется полиморфизмом.
 
Предположим, у нас есть класс Lion, который наследуется от класса Cat. В этом случае автоматическое преобразование будет выглядеть так:

Cat cat = new Lion();

А вот с явным приведением всенесколько сложнее, ведь нет функционала обрезания лишнего, как у примитивов.
 
И сделав просто явно преобразование вида:

Lion lion= (Lion)new Cat();

Вы и получите ошибку:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 8В самом деле, вы можете классу наследнику Lion добавить методы, которых не было изначально в классе Cat, и потом пытаться их вызвать, ведь типа объекта у вас станет Lion. Ну а в этом логики никакой нет.
 
Поэтому, сужение типа возможно лишь когда изначальный объект типа Lion, но был позже приведен к классу родителя:
 
Lion lion = new Lion();
Cat cat = lion;
Lion newLion = (Lion)cat;

Также, для большей надежности, сужающее приведение для объектов рекомендуется с использованием конструкции instanceOf:
 
if (cat instanceof Lion) {
 newLion = (Lion)new Cat();
}

Подробнее о приведениях ссылочных типов — в этой статье. 
21. Почему современные фреймворки используют в основном только unchecked exceptions?
Думаю, это все потому, что обработка checked исключений — это ещё тот спагетти код, который повсеместно повторяется, при этом не во всех случаях действительно нужен.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 9В таких случаях легче уже сделать обработку внутри фреймворка, чтобы лишний раз не перекладывать это на плечи разработчиков.
 
Да, несомненно, аварийная ситуация может возникнуть, но эти самые uncheked исключения можно обрабатывать более удобным способом, не заморачиваясь над обработкой в try-catch и не прокидывая дальше по методам. Достаточно всего лишь в exceptionHandler-е конвертировать исключение в некоторый HTTP-ответ.
22. Что такое static import?
При использовании статических данных (методов, переменных) можно не создавать сам объект, а делать это по имени класса, но и в таком случае нам необходима ссылка на класс. С ней все просто: она добавляется при помощи обычного импорта.
 
Но что если мы заходим использовать статический метод без написания имени класса, как будто это статический метод текущего класса? Это возможно с помощью статического импорта!
 
В таком случае мы должны прописывать static import и ссылку на тот метод. Как вот например, статический метод класса Math для вычисления значения косинуса:

import static java.lang.Math.cos;

В итоге мы можем использовать метод без указания имени класса:

double result = cos(60);

Также элементарно мы можем подгрузить сразу все статические методы класса с помощью статического импорта:

import static java.lang.Math.*;
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 10
23. Какая связь между методами hashCode() и equals()?
Согласно Oracle, существует следующее правило: 
 
Если два объекта равны (т.е. метод equals() возвращает true), у них должен быть одинаковый хэш-код.
 
При этом не стоит забывать, что одинаковый хэш-код может быть у двух разных объектов.
 
Чтобы разобраться, почему же equals() и hashCode() переопределяют всегда в паре, рассмотрим следующие случаи:
 
Оба метода переопределенные.

В таком случае два разных объекта с одинаковыми внутренними состояниями будут возвращать при equals() — true, в то время как и hashCode() будет у обоих возвращать одно и то же число.

Получается, все окей, ибо правило выполняется.

Оба метода не переопределенные.

В таком случае два разных объекта с одинаковыми внутренними состояниями при equals() будут возвращать false, так как сравнение идёт по ссылке через оператор ==.

Метод hashCode() также вернет разные значения (скорее всего), так как он выдает преобразованное значение адреса ячейки памяти. Но у одного и того же объекта это значение будет одинаковым, как и equals() в данном случае вернет true, только когда ссылки указывают на один и тот же объект.

Получается, и в данном случае все окей и правило выполняется.

Переопределен equals(), не переопределен hashCode().

В таком случае для двух разных объектов с одинаковыми внутренними состояниями equals() будет возвращать true, а hashCode() будет возвращать (скорее всего) разные значения.

Происходит нарушение правила, поэтому так делать не рекомендуется.

Не переопределен equals(), переопределен hashCode().

В таком случае для двух разных объектов с одинаковыми внутренними состояниями equals() будет возвращать false, а hashCode() будет возвращать одинаковые значения.

Происходит нарушение правила, поэтому подход неверный.


 
Как вы видите, выполнение правила возможно лишь когда equals() и hashCode() переопределяются оба либо оба не переопределяются вовсе.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 11Подробнее об equals() и hashCode() читайте в данной статье.
24. Когда используют BufferedInputStream и BufferedOutputStream классы?
InputStream используется для побайтового чтения данных из некоторого ресурса, а OutputStream — для побайтовой записи. Но побайтовые операции могут быть весьма неудобными и требуют дополнительной обработки (чтобы нормально считывать/записывать тексты). Собственно, для упрощения таких байтовых записей ввели BufferedOutputStream, а для чтения BufferedInputStream.
 
Эти классы являются не чем иным как буферами, накапливающими данные, позволяющими работать с данными не побайтово, а целыми пакетами данных (массивами).
 
При создании BufferedInputStream принимает в конструктор экземпляр типа InputStream, с которого идёт считка данных:
 
BufferedInputStream bufferedInputStream = new BufferedInputStream(System.in);
byte[] arr = new byte[100];
bufferedInputStream.read(arr);

System.in — это объект типа InputStream, который считывает данные с консоли.

То есть с помощью данного объекта BufferedInputStream мы можем читать данные с InputStream, записывая их в переданный массив. Получается своего рода обертка класса InputStream.
 
Массив arr из данного примера — массив которому достаются данные из BufferedInputStream. Тот в свою очередь читает данные из InputStream другим массивом, который по умолчанию имеет размер 2048 байт.
 
Аналогично и для BufferedOutputStream: в конструктор необходимо передать экземпляр типа OutputStream, в который мы будем писать данные целыми массивами:
 
byte[] arr = "Hello world!!!".getBytes();
BufferedOutputStream bufferedInputStream = new BufferedOutputStream(System.out);
bufferedInputStream.write(arr);
bufferedInputStream.flush();

System.out — это объект типа OutputStream, который записывает данные в консоли.

Метод flush() отправляет данные с BufferedOutputStream в OutputStream, очищая при этом BufferedOutputStream. Без этого метода ничего записываться и не будет.
 
И аналогично предыдущему примеру: arr — это массив, из которого записываются данные в BufferedOutputStream. С него же они пишутся в OutputStream уже другим массивом, который по умолчанию имеет размер 512 байт.
 
Подробнее об этих двух классах — в статье. 
25. Какая разница между классами java.util.Collection и java.util.Collections?
Collection — интерфейс, который является головой в иерархии коллекций. Он представляет классы, позволяющие создавать, содержать и изменять целые группы объектов. Для этого предоставляется множество методов, вроде add(), remove(), contains() и других.
 
Основные интерфейсы класса Collection:
Set — интерфейс, описывающий множество, которое содержит неупорядоченные уникальные (неповторяющиеся) элементы.

List — интерфейс, описывающий структуру данных, которая хранит упорядоченную последовательность объектов. Эти объекты получают свой индекс (номер), используя который можно взаимодействовать с ними: брать, удалять, изменять, перезаписывать.

Queue — интерфейс, описывающий структуру данных с хранением элементов в виде очереди, которая следует правилу — FIFO — First In First Out.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 12Подробнее о Collection.
 
Collections — утилитный класс, предоставляющий множество всевозможных служебных методов.

Например:
Java-университет

addAll(Collection<? super T> collection, T…element) — добавляет в collection переданные элементы типа Т.

сopy(List<? super T> dest, List<? extends T> src) — копирует все элементы из списка src в список в dest.

emptyList() — возвращает пустой список.

max(Collection<? extends T> collection, Comparator<? super T> comp) — возвращает максимальный элемент данной коллекции в соответствии с порядком, установленным указанным компаратором.

unmodifiableList(List<? extends T> list) — возвращает неизменяемое представление переданного списка.

И таких разнообразных удобных методов в Collections — великое множество.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 13С полным списком данных методов можно ознакомиться на сайте Oracle.
 
Я не зря сказал, что они удобные. Ведь они все статические. То есть, вам не нужно каждый раз создавать объект данного класса, чтобы вызвать у него необходимый метод.
 
Вам достаточно лишь прописать название класса, вызвать у него нужный метод и передать все требуемые аргументы.
 
Подводя черту, Collection — корневой интерфейс структуры коллекций. Collections —  вспомогательный класс для более удобной обработки объектов, принадлежащих типу из структуры коллекций.
 
Ну а на сегодня всё. Всем добра!Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16 - 14
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Комментарии (5)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
fedyaka Уровень 36
31 октября 2022
Расходимся народ, продолжения не будет, даже статья с 250+ вопросами не находится
Sekator Уровень 41
14 октября 2022
пропустили кусок це робота з файлами типу -> НІО
Хасанова Аниса Уровень 30
2 октября 2022
вручную (неявное приведение) или автоматически (явное приведение типов).

Наоборот 
Floridova Alina Уровень 32 Expert
26 декабря 2024
Да и с Optional что-то путаница
Юрий Уровень 31
3 мая 2022
Привет! Когда планируете продолжение????
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa


Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 4 октября 2021
 23779 views
 1 comment
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Статья из группы Random
Привет-привет!
 
Как много нужно знать Java разработчику? Можно долго спорить по этому вопросу, но правда в том, что на собеседовании вас будут гонять по теории в полный рост. Даже по тем областям знаний, которым вам не доведется воспользоваться в работе.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 1Ну а если вы новичок, по вашим теоретическим знаниям пройдутся очень серьезно. Раз опыта и больших достижений еще нет, остается только проверить прочность базы знаний. 
 
Сегодня мы продолжим заниматься укреплением этой самой базы, разбирая самые популярные вопросы на собеседованиях для Java-разработчиков. 
 
Полетели!
Java Core
9. В чем разница между статическим и динамическим связыванием в Java?
На данный вопрос я уже ответил в этой статье в 18 вопросе про статический и динамический полиморфизм, советую ознакомиться.
10. Можно ли использовать private или protected переменные в interface?
Нет, нельзя. Так как когда вы объявляете интерфейс, компилятор Java автоматически добавляет ключевые слова public и abstract перед методами интерфейса и ключевые слова public, static и final перед членами данных.
 
Собственно, если вы добавите private или protected, возникнет конфликт, и компилятор будет ругаться на модификатор доступа сообщением: “Modifier ‘<выбранный модификатор>’ not allowed here”
 
Почему же компилятор добавляет public, static и final переменным в интерфейсе?
 
Давайте разберёмся:
public — интерфейс предоставляет возможность клиенту взаимодействовать с объектом. Если бы переменные не были общедоступными, у клиентов не было бы к ним доступа.
static — интерфейсы не могут быть созданы (а точнее, их объекты), поэтому переменная статична.
final — так как интерфейс используется для достижения 100% абстракции, переменная имеет свой конечный вид (и не будет изменена).
11. Что такое Classloader и для чего используется?
Classloader — или Загрузчик классов — обеспечивает загрузку классов Java.

А точнее, обеспечивают загрузку его наследники — конкретные загрузчики классов, т.к. сам ClassLoader абстрактен. 
 
Каждый раз, когда загружается какой-либо .class-файл, например, после обращения к конструктору или статическому методу соответствующего класса, это действие выполняет один из наследников класса ClassLoader.
 
Есть три вида наследников:
Bootstrap ClassLoader — базовый загрузчик, реализован на уровне JVM и не имеет обратной связи со средой выполнения, так как является частью ядра JVM и написан в машинном коде. Данный загрузчик служит родительским элементом для всех других экземпляров ClassLoader.

В основном отвечает за загрузку внутренних классов JDK, обычно rt.jar и других основных библиотек, расположенных в каталоге $ JAVA_HOME / jre / lib. У разных платформ могут быть разные реализации этого загрузчика классов.
Extension Classloader — загрузчик расширений, потомок класса базового загрузчика. Заботится о загрузке расширения стандартных базовых классов Java. Загружается из каталога расширений JDK, обычно — $ JAVA_HOME / lib / ext или любого другого каталога, упомянутого в системном свойстве java.ext.dirs (с помощью данной опции можно управлять загрузкой расширений).

System ClassLoader — системный загрузчик, реализованный на уровне JRE, который заботится о загрузке всех классов уровня приложения в JVM. Он загружает файлы, найденные в переменном окружении классов -classpath или -cp опции командной строки.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 2Загрузчики классов — это часть среды выполнения Java. 

В тот момент когда JVM запрашивает класс, загрузчик классов пытается найти класс и загрузить определение класса в среду выполнения, используя полное имя класса.

Метод java.lang.ClassLoader.loadClass() отвечает за загрузку определения класса во время выполнения. 

Он пытается загрузить класс на основе полного имени. Если класс еще не загружен, он делегирует запрос загрузчику родительского класса. 

Этот процесс происходит рекурсивно выглядит так:
Python-университет

System Classloader пытается найти класс в своем кеше.

1.1. Если класс найден, загрузка успешно завершена.

1.2. Если класс не найден, загрузка делегируется к Extension Classloader-у.

Extension Classloader пытается найти класс в собственном кеше.

2.1. Если класс найден — успешно завершена.

2.2. Если класс не найден, загрузка делегируется Bootstrap Classloader-у.

Bootstrap Classloader пытается найти класс в собственном кеше.

3.1. Если класс найден, загрузка успешно завершена.

3.2. Если класс не найден, базовый Bootstrap Classloader попытается его загрузить.

Если загрузка:

4.1. Прошла успешно — загрузка класса завершена.

4.2. Не прошла успешно — управление передается к Extension Classloader.

5. Extension Classloader пытается загрузить класс, и если загрузка:

5.1. Прошла успешно — загрузка класса завершена.

5.2. Не прошла успешно — управление передается к System Classloader.

6. System Classloader пытается загрузить класс, и если загрузка:

6.1. Прошла успешно — загрузка класса завершена.

6.2. Не прошла успешно — генерируется исключение — ClassNotFoundException.

Тема загрузчиков классов обширна и ею не стоит пренебрегать. Чтобы ознакомиться с ней подробнее, советую прочесть эту статью, а мы не будем задерживаться и пойдем дальше.
12. Что такое Run-Time Data Areas?
Run-Time Data Ares — области данных среды выполнения JVM. 
 
JVM определяет некоторые области данных времени выполнения, необходимые во время выполнения программы. Одни из них создаются при запуске JVM. Другие являются локальными по отношению к потокам и создаются только при создании потока (и уничтожаются, когда поток уничтожается). 
 
Области данных среды выполнения JVM выглядят так:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 3
PC Register — регистр ПК — локален для каждого потока и содержит адрес инструкции JVM, которую поток выполняет в данный момент.

JVM Stack — область памяти, которая используется как хранилище для локальных переменных и временных результатов. У каждого потока есть свой отдельный стек: как только поток завершается, этот стек также уничтожается. Стоит отметить, что преимуществом stack над heap является производительность, в то время как heap безусловно имеет преимущество в масштабе хранилища.

Native Method Stack — область данных для каждого потока, в которой хранятся элементы данных, аналогичные стеку JVM, для выполнения собственных (не Java) методов.

Heap — используется всеми потоками как хранилище которое содержит объекты, метаданные классов, массивы и т. д., которые создаются во время выполнения. Данная область создается при запуске JVM и уничтожается при завершении ее работы.

Method area — область метода — эта область времени выполнения общая для всех потоков и создается при запуске JVM. Он хранит структуры для каждого класса, такие как пул констант (Runtime Constant Pool — пул для хранения констант), код для конструкторов и методов, данные метода и т. д.

13. Что такое immutable object?
В данной части статьи в 14 и 15 вопросе уже есть ответ на этот вопрос, поэтому ознакамливаетесь не теряя времени зря.
14. В чем особенность класса String?
Ранее в разборе мы неоднократно говорили про те или иные особенности String (для этого был отдельный раздел). Сейчас же подведем итог по особенностям String:
Это самый популярный объект в Java, который применяют для разнообразных целей. По частоте использования он не уступает даже примитивным типам.

Объект данного класса можно создать без использования ключевого слова new — непосредственно через кавычки String str = “строка”;.

String — это immutable класс: при создании объекта данного класса его данные нельзя изменить (когда вы к некоторой строке добавляете + “другую строку”, как результат вы получите новую, третью строку). Неизменность класса String делает его потокобезопасным.

Класс String финализирован (имеет модификатор final), поэтому его наследование невозможно.

У String есть свой пул строк, область памяти в heap, которая кеширует создаваемые строковые значения. В этой части серии, в 62 вопросе, я описывал строковой пул.

В Java присутствуют аналоги String, также предназначенные для работы с строками — StringBuilder и StringBuffer, но с тем отличием, что они изменяемые. Подробнее о них вы можете почитать в этой статье.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 4
15. Что такое ковариантность типов?
Для понимания ковариантности мы рассмотрим пример.
 
Предположим, у нас есть класс животного:
 
public class Animal {
 void voice() {
   System.out.println("*тишина*");
 }
}

И некоторый расширяющий его класс Dog:

public class Dog extends Animal {

 @Override
 public void voice() {
   System.out.println("Гав, гав, гав!!!");
 }
}

Как мы помним, родительскому типу мы можем без проблем присваивать объекты типа наследника:

Animal animal = new Dog();

 Это у нас будет ничто иное как полиморфизм. Удобно, гибко не так ли? 
 
Ну а в случае со списком животных? Сможем ли мы задать списку с дженериком Animal список с объектами Dog? 
 
List<Dog> dogs = new ArrayList<>();
List<Animal> animals = dogs;

В таком случае строка присвоения списку животных списка собак будет подчеркнута красным, т.е. компилятор не пропустит данный код.
 
Несмотря на то, что вроде как это присваивание весьма логично (ведь переменной типа Animal мы можем присвоить объект Dog) его сделать нельзя.
 
Это происходит потому, что если бы это было допустимо, в список, который изначально предназначен для Dog, мы сможем положить объект Animal, при этом думая, что в списке у нас только Dogs. 
 
И потом, к примеру, возьмём с помощью метода get() объект у того списка dogs, думая, что это собака, и вызовем у него некоторый метод объекта Dog, которого нет у Animal. И как вы понимаете, это невозможно — упадет ошибка. Но, к счастью, компилятор не пропускает данную логическую ошибку с присвоением списка потомков, списку родителей (и наоборот). 
 
В Java возможно присвоение объектов списков лишь переменным списков с совпадающими дженериками. Это и называется инвариацией.
 
Если бы могли это сделать, это называлось бы и называлось ковариацией.
 
То есть, ковариация — это если бы мы могли переменной типа List<Animal> задать объект типа ArrayList<Dog>. 
 
Получается что в Java ковариантность не поддерживается? Как бы не так!
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 5Но это делается своим, особым путем.
 
Для этого используется конструкция ? extends Animal. Она ставится дженериком переменной, которой мы хотим задать объект списка, с дженериком потомка.
 
Эта конструкция дженерика значит, что подойдёт любой тип, который является потомком типа Animal (и тип Animal также попадает под это обобщение).
 
В свою очередь, Animal может быть не только классом, но и интерфейсом (и пусть вас не вводит в заблуждение ключевое слово extends).
 
Наше предыдущее присваивание мы можем выполнить следующим образом:
 
List<Dog> dogs = new ArrayList<>();
List<? extends Animal> animals = dogs;

 В результате вы увидите в IDE, что компилятор не будет ругаться на данную конструкцию.
 
Давайте проверим работоспособность данной конструкции. Предположим, у нас есть метод, который заставляет всех переданных ему животных издать звуки:
 
public static void animalsVoice(List<? extends Animal> animals) {
 for (Animal animal : animals) {
   animal.voice();
 }
}

Передадим ему список с собаками:
 
List<Dog> dogs = new ArrayList<>();
dogs.add(new Dog());
dogs.add(new Dog());
dogs.add(new Dog());
animalsVoice(dogs);

В консоли мы увидим следующий вывод:

Гав, гав, гав!!!
Гав, гав, гав!!!
Гав, гав, гав!!!

А значит данный подход к ковариантности успешно работает.
 
Отмечу, что в список с данным дженериком ? extends Animal мы не можем вставить новые данные никакого типа: ни типа Dog, ни даже типа Animal:
 
List<Dog> dogs = new ArrayList<>();
List<? extends Animal> animals = dogs;
animals.add(new Dog());
dogs.add(new Animal());

Собственно, в последних двух строках компилятор будет подчеркивать красным вставку объектов.
 
Это связано с тем, что мы не можем быть на сто процентов уверены, список с объектами какого типа будет присвоен списку с данных дженериком <? extends Animal>.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 6Хотелось бы ещё рассказать про контравариантность, так как обычно это понятие идет всегда вместе с ковариантностью, и как правило спрашивают о них вместе.
 
Это понятие — некоторая противоположность ковариантности, так как для данной конструкции используется тип наследника.
 
Предположим, нам нужен список, которому можно будет присвоить список с типом объектов, не являющихся предками объекта Dog. При этом мы заранее не знаем, что это будут за конкретные типы.
 
В таком случае нас может выручить конструкция вида ? super Dog, для которой подходят все типы — прародители класса Dog: 
 

AI Native University

List<Animal> animals = new ArrayList<>();
List<? super Dog> dogs = animals;
dogs.add(new Dog());
dogs.add(new Dog());

Мы можем смело добавлять в список с таким дженериком объекты типа Dog, ведь у него в любом случае присутствуют все реализованные методы любого его прародителя.

Но мы не сможем добавить объект типа Animal, так как нет уверенности, что внутри будут именно объекты этого типа, а не, например, Dog. Ведь мы можем запросить у элемента данного списка метод класса Dog, которого не будет в наличии у Animal. В таком случае возникнет ошибка компиляции.
 
Также, если бы мы захотели реализовать предыдущий метод, но уже с данным дженериком: 

public static void animalsVoice(List<? super Dog> dogs) {
 for (Dog dog : dogs) {
   dog.voice();
 }
}

мы бы получили ошибку компиляции в цикле for, так как мы не можем быть уверены, что пришедший список содержит объекты типа Dog и свободно использовать его методы.
 
Если у данного списка мы вызовем метод dogs.get(0);  — мы получим объект типа Object.
 
То есть для работы метода animalsVoice() нам как минимум нужно добавить небольшие манипуляции с сужением данных вида:
 
public static void animalsVoice(List<? super Dog> dogs) {
 for (Object obj : dogs) {
   if (obj instanceof Dog) {
     Dog dog = (Dog) obj;
     dog.voice();
   }
 }
}
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 7
16. Как есть методы в классе Object?
В данной части серии, в 11 пункте, я уже ответил на данный вопрос, поэтому настоятельно советую ознакомиться, если вы до сих пор этого не сделали.
 
На этом на сегодня и закончим. До встречи в следующей части!
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 8
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
r ‘<выбранный модификатор>’ not allowed here”
 
Почему же компилятор добавляет public, static и final переменным в интерфейсе?
 
Давайте разберёмся:
public — интерфейс предоставляет возможность клиенту взаимодействовать с объектом. Если бы переменные не были общедоступными, у клиентов не было бы к ним доступа.
static — интерфейсы не могут быть созданы (а точнее, их объекты), поэтому переменная статична.
final — так как интерфейс используется для достижения 100% абстракции, переменная имеет свой конечный вид (и не будет изменена).
11. Что такое Classloader и для чего используется?
Classloader — или Загрузчик классов — обеспечивает загрузку классов Java.

А точнее, обеспечивают загрузку его наследники — конкретные загрузчики классов, т.к. сам ClassLoader абстрактен. 
 
Каждый раз, когда загружается какой-либо .class-файл, например, после обращения к конструктору или статическому методу соответствующего класса, это действие выполняет один из наследников класса ClassLoader.
 
Есть три вида наследников:
Bootstrap ClassLoader — базовый загрузчик, реализован на уровне JVM и не имеет обратной связи со средой выполнения, так как является частью ядра JVM и написан в машинном коде. Данный загрузчик служит родительским элементом для всех других экземпляров ClassLoader.

В основном отвечает за загрузку внутренних классов JDK, обычно rt.jar и других основных библиотек, расположенных в каталоге $ JAVA_HOME / jre / lib. У разных платформ могут быть разные реализации этого загрузчика классов.
Extension Classloader — загрузчик расширений, потомок класса базового загрузчика. Заботится о загрузке расширения стандартных базовых классов Java. Загружается из каталога расширений JDK, обычно — $ JAVA_HOME / lib / ext или любого другого каталога, упомянутого в системном свойстве java.ext.dirs (с помощью данной опции можно управлять загрузкой расширений).

System ClassLoader — системный загрузчик, реализованный на уровне JRE, который заботится о загрузке всех классов уровня приложения в JVM. Он загружает файлы, найденные в переменном окружении классов -classpath или -cp опции командной строки.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 2Загрузчики классов — это часть среды выполнения Java. 

В тот момент когда JVM запрашивает класс, загрузчик классов пытается найти класс и загрузить определение класса в среду выполнения, используя полное имя класса.

Метод java.lang.ClassLoader.loadClass() отвечает за загрузку определения класса во время выполнения. 

Он пытается загрузить класс на основе полного имени. Если класс еще не загружен, он делегирует запрос загрузчику родительского класса. 

Этот процесс происходит рекурсивно выглядит так:
Python-университет

System Classloader пытается найти класс в своем кеше.

1.1. Если класс найден, загрузка успешно завершена.

1.2. Если класс не найден, загрузка делегируется к Extension Classloader-у.

Extension Classloader пытается найти класс в собственном кеше.

2.1. Если класс найден — успешно завершена.

2.2. Если класс не найден, загрузка делегируется Bootstrap Classloader-у.

Bootstrap Classloader пытается найти класс в собственном кеше.

3.1. Если класс найден, загрузка успешно завершена.

3.2. Если класс не найден, базовый Bootstrap Classloader попытается его загрузить.

Если загрузка:

4.1. Прошла успешно — загрузка класса завершена.

4.2. Не прошла успешно — управление передается к Extension Classloader.

5. Extension Classloader пытается загрузить класс, и если загрузка:

5.1. Прошла успешно — загрузка класса завершена.

5.2. Не прошла успешно — управление передается к System Classloader.

6. System Classloader пытается загрузить класс, и если загрузка:

6.1. Прошла успешно — загрузка класса завершена.

6.2. Не прошла успешно — генерируется исключение — ClassNotFoundException.

Тема загрузчиков классов обширна и ею не стоит пренебрегать. Чтобы ознакомиться с ней подробнее, советую прочесть эту статью, а мы не будем задерживаться и пойдем дальше.
12. Что такое Run-Time Data Areas?
Run-Time Data Ares — области данных среды выполнения JVM. 
 
JVM определяет некоторые области данных времени выполнения, необходимые во время выполнения программы. Одни из них создаются при запуске JVM. Другие являются локальными по отношению к потокам и создаются только при создании потока (и уничтожаются, когда поток уничтожается). 
 
Области данных среды выполнения JVM выглядят так:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 3
PC Register — регистр ПК — локален для каждого потока и содержит адрес инструкции JVM, которую поток выполняет в данный момент.

JVM Stack — область памяти, которая используется как хранилище для локальных переменных и временных результатов. У каждого потока есть свой отдельный стек: как только поток завершается, этот стек также уничтожается. Стоит отметить, что преимуществом stack над heap является производительность, в то время как heap безусловно имеет преимущество в масштабе хранилища.

Native Method Stack — область данных для каждого потока, в которой хранятся элементы данных, аналогичные стеку JVM, для выполнения собственных (не Java) методов.

Heap — используется всеми потоками как хранилище которое содержит объекты, метаданные классов, массивы и т. д., которые создаются во время выполнения. Данная область создается при запуске JVM и уничтожается при завершении ее работы.

Method area — область метода — эта область времени выполнения общая для всех потоков и создается при запуске JVM. Он хранит структуры для каждого класса, такие как пул констант (Runtime Constant Pool — пул для хранения констант), код для конструкторов и методов, данные метода и т. д.

13. Что такое immutable object?
В данной части статьи в 14 и 15 вопросе уже есть ответ на этот вопрос, поэтому ознакамливаетесь не теряя времени зря.
14. В чем особенность класса String?
Ранее в разборе мы неоднократно говорили про те или иные особенности String (для этого был отдельный раздел). Сейчас же подведем итог по особенностям String:
Это самый популярный объект в Java, который применяют для разнообразных целей. По частоте использования он не уступает даже примитивным типам.

Объект данного класса можно создать без использования ключевого слова new — непосредственно через кавычки String str = “строка”;.

String — это immutable класс: при создании объекта данного класса его данные нельзя изменить (когда вы к некоторой строке добавляете + “другую строку”, как результат вы получите новую, третью строку). Неизменность класса String делает его потокобезопасным.

Класс String финализирован (имеет модификатор final), поэтому его наследование невозможно.

У String есть свой пул строк, область памяти в heap, которая кеширует создаваемые строковые значения. В этой части серии, в 62 вопросе, я описывал строковой пул.

В Java присутствуют аналоги String, также предназначенные для работы с строками — StringBuilder и StringBuffer, но с тем отличием, что они изменяемые. Подробнее о них вы можете почитать в этой статье.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 4
15. Что такое ковариантность типов?
Для понимания ковариантности мы рассмотрим пример.
 
Предположим, у нас есть класс животного:
 
public class Animal {
 void voice() {
   System.out.println("*тишина*");
 }
}

И некоторый расширяющий его класс Dog:

public class Dog extends Animal {

 @Override
 public void voice() {
   System.out.println("Гав, гав, гав!!!");
 }
}

Как мы помним, родительскому типу мы можем без проблем присваивать объекты типа наследника:

Animal animal = new Dog();

 Это у нас будет ничто иное как полиморфизм. Удобно, гибко не так ли? 
 
Ну а в случае со списком животных? Сможем ли мы задать списку с дженериком Animal список с объектами Dog? 
 
List<Dog> dogs = new ArrayList<>();
List<Animal> animals = dogs;

В таком случае строка присвоения списку животных списка собак будет подчеркнута красным, т.е. компилятор не пропустит данный код.
 
Несмотря на то, что вроде как это присваивание весьма логично (ведь переменной типа Animal мы можем присвоить объект Dog) его сделать нельзя.
 
Это происходит потому, что если бы это было допустимо, в список, который изначально предназначен для Dog, мы сможем положить объект Animal, при этом думая, что в списке у нас только Dogs. 
 
И потом, к примеру, возьмём с помощью метода get() объект у того списка dogs, думая, что это собака, и вызовем у него некоторый метод объекта Dog, которого нет у Animal. И как вы понимаете, это невозможно — упадет ошибка. Но, к счастью, компилятор не пропускает данную логическую ошибку с присвоением списка потомков, списку родителей (и наоборот). 
 
В Java возможно присвоение объектов списков лишь переменным списков с совпадающими дженериками. Это и называется инвариацией.
 
Если бы могли это сделать, это называлось бы и называлось ковариацией.
 
То есть, ковариация — это если бы мы могли переменной типа List<Animal> задать объект типа ArrayList<Dog>. 
 
Получается что в Java ковариантность не поддерживается? Как бы не так!
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 5Но это делается своим, особым путем.
 
Для этого используется конструкция ? extends Animal. Она ставится дженериком переменной, которой мы хотим задать объект списка, с дженериком потомка.
 
Эта конструкция дженерика значит, что подойдёт любой тип, который является потомком типа Animal (и тип Animal также попадает под это обобщение).
 
В свою очередь, Animal может быть не только классом, но и интерфейсом (и пусть вас не вводит в заблуждение ключевое слово extends).
 
Наше предыдущее присваивание мы можем выполнить следующим образом:
 
List<Dog> dogs = new ArrayList<>();
List<? extends Animal> animals = dogs;

 В результате вы увидите в IDE, что компилятор не будет ругаться на данную конструкцию.
 
Давайте проверим работоспособность данной конструкции. Предположим, у нас есть метод, который заставляет всех переданных ему животных издать звуки:
 
public static void animalsVoice(List<? extends Animal> animals) {
 for (Animal animal : animals) {
   animal.voice();
 }
}

Передадим ему список с собаками:
 
List<Dog> dogs = new ArrayList<>();
dogs.add(new Dog());
dogs.add(new Dog());
dogs.add(new Dog());
animalsVoice(dogs);

В консоли мы увидим следующий вывод:

Гав, гав, гав!!!
Гав, гав, гав!!!
Гав, гав, гав!!!

А значит данный подход к ковариантности успешно работает.
 
Отмечу, что в список с данным дженериком ? extends Animal мы не можем вставить новые данные никакого типа: ни типа Dog, ни даже типа Animal:
 
List<Dog> dogs = new ArrayList<>();
List<? extends Animal> animals = dogs;
animals.add(new Dog());
dogs.add(new Animal());

Собственно, в последних двух строках компилятор будет подчеркивать красным вставку объектов.
 
Это связано с тем, что мы не можем быть на сто процентов уверены, список с объектами какого типа будет присвоен списку с данных дженериком <? extends Animal>.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 6Хотелось бы ещё рассказать про контравариантность, так как обычно это понятие идет всегда вместе с ковариантностью, и как правило спрашивают о них вместе.
 
Это понятие — некоторая противоположность ковариантности, так как для данной конструкции используется тип наследника.
 
Предположим, нам нужен список, которому можно будет присвоить список с типом объектов, не являющихся предками объекта Dog. При этом мы заранее не знаем, что это будут за конкретные типы.
 
В таком случае нас может выручить конструкция вида ? super Dog, для которой подходят все типы — прародители класса Dog: 
 

AI Native University

List<Animal> animals = new ArrayList<>();
List<? super Dog> dogs = animals;
dogs.add(new Dog());
dogs.add(new Dog());

Мы можем смело добавлять в список с таким дженериком объекты типа Dog, ведь у него в любом случае присутствуют все реализованные методы любого его прародителя.

Но мы не сможем добавить объект типа Animal, так как нет уверенности, что внутри будут именно объекты этого типа, а не, например, Dog. Ведь мы можем запросить у элемента данного списка метод класса Dog, которого не будет в наличии у Animal. В таком случае возникнет ошибка компиляции.
 
Также, если бы мы захотели реализовать предыдущий метод, но уже с данным дженериком: 

public static void animalsVoice(List<? super Dog> dogs) {
 for (Dog dog : dogs) {
   dog.voice();
 }
}

мы бы получили ошибку компиляции в цикле for, так как мы не можем быть уверены, что пришедший список содержит объекты типа Dog и свободно использовать его методы.
 
Если у данного списка мы вызовем метод dogs.get(0);  — мы получим объект типа Object.
 
То есть для работы метода animalsVoice() нам как минимум нужно добавить небольшие манипуляции с сужением данных вида:
 
public static void animalsVoice(List<? super Dog> dogs) {
 for (Object obj : dogs) {
   if (obj instanceof Dog) {
     Dog dog = (Dog) obj;
     dog.voice();
   }
 }
}
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 7
16. Как есть методы в классе Object?
В данной части серии, в 11 пункте, я уже ответил на данный вопрос, поэтому настоятельно советую ознакомиться, если вы до сих пор этого не сделали.
 
На этом на сегодня и закончим. До встречи в следующей части!
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15 - 8
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Комментарии (1)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Justinian Уровень 41 Master
4 октября 2021
10. Можно ли использовать private или protected переменные в interface?

в этом вопросе упоминаются методы, хотел бы акцентировать на разграничении переменных и методов в рамках интерфейсов:

-переменные приватными быть не могут

- дефолтные методы - приватными быть не могут (это часть АПИ интерфейса - конструкция 2 в 1, И публичный метод, и его реализация по умолчанию)

- абстрактные методы - приватными быть не могут - они часть АПИ интерфейса, его контракта.

- хелпер методы с реализацией быть приватными МОГУТ начиная с 9-й джавы:

interface Calc {
    default int multiplyNumbers(int a, int b) {
        int result = multiply(a, b);
        return result;
    }

    private static int multiply(int a, int b) {
        return a * b;
    }
}

class Calculator implements Calc {
}
...
new Calculator().multiplyNumbers(1, 2);
Комментарии (1)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Justinian Уровень 41 Master
4 октября 2021
10. Можно ли использовать private или protected переменные в interface?

в этом вопросе упоминаются методы, хотел бы акцентировать на разграничении переменных и методов в рамках интерфейсов:

-переменные приватными быть не могут

- дефолтные методы - приватными быть не могут (это часть АПИ интерфейса - конструкция 2 в 1, И публичный метод, и его реализация по умолчанию)

- абстрактные методы - приватными быть не могут - они часть АПИ интерфейса, его контракта.

- хелпер методы с реализацией быть приватными МОГУТ начиная с 9-й джавы:

interface Calc {
    default int multiplyNumbers(int a, int b) {
        int result = multiply(a, b);
        return result;
    }

    private static int multiply(int a, int b) {
        return a * b;
    }
}

class Calculator implements Calc {
}
...
new Calculator().multiplyNumbers(1, 2);
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa


Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 13 сентября 2021
 19269 views
 0 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Статья из группы Random
Салют!

Мир постоянно движется и постоянно движемся мы.

Раньше, для того чтобы стать Java-разработчиком, было достаточно немного знать синтаксис Java, ну а остальное придет. Со временем уровень знаний, необходимый для становления Java-разработчика, значительно вырос, как и конкуренция, которая продолжает двигать нижнюю планку необходимых знаний вверх. 

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 1Если вы действительно хотите стать разработчиком, это нужно принять как данность и тщательно подготовиться, чтобы выделяться среди таких же, как и вы, новичков.Чем мы сегодня и займемся, а именно продолжим разбор вопросов 250+.

В предыдущих статьях мы разобрали все вопросы уровня джун, и сегодня возьмемся за вопросы уровня мидл.

Хотя я отмечу, что они не являются стопроцентными вопросами уровня мидла, большинство из них вы можете встретить на собеседовании джуниор уровня, ибо именно на таких собеседованиях идет подробное прощупывание вашей теоретической базы, в то время как у мидла уже вопросы более ориентированы на прощупывание его опыта.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 2Но, без лишнего предисловия, давайте начинать.
Middle
Общие
1. В чем преимущества и недостатки ООП, если сравнивать с процедурным / функциональным программированием?
В разборе вопросов для Juinior был данный вопрос, и соответственно я уже ответил на него.
 
Ищите этот вопрос и ответ на него в данной части статьи, вопросы 16 и 17.
2. Чем отличается агрегация от композиции?
В ООП существует несколько видов взаимодействия объектов, объединенных под общим понятием "Has-A Relationship". Это отношение указывает на то, что один объект является составной частью другого объекта.
 
При этом существует два подвида этого отношения: 

Композиция — один объект создает другой объект и время жизни другого объекта зависит от времени жизни создавшего.
Агрегация — объект получает ссылку (указатель) на другой объект в процессе конструирования (при этом время жизни другого объекта не зависит от времени жизни создавшего).
 
Для большего понимания, давайте рассмотрим конкретный пример. У нас есть некоторый класс машины — Car, у которого в свою очередь есть внутренние поля типа — двигатель — Engine и список пассажиров — List<Passenger>, также у него есть метод начала движения — startMoving():
 
public class Car {

 private Engine engine;
 private List<Passenger> passengers;

 public Car(final List<Passenger> passengers) {
   this.engine = new Engine();
   this.passengers = passengers;
 }

 public void addPassenger(Passenger passenger) {
   passengers.add(passenger);
 }

 public void removePassengerByIndex(Long index) {
   passengers.remove(index);
 }

 public void startMoving() {
   engine.start();
   System.out.println("Машина начала своё движение");
   for (Passenger passenger : passengers) {
     System.out.println("В машине есть пассажир - " + passenger.getName());
   }
 }
}

В данном случае Композицией является связь между Car и Engine, так как работоспособность машины напрямую зависит от наличия объекта двигателя, ведь если engine = null, то мы получим NullPointerException.
 
В свою очередь, и двигатель не может существовать без машины (зачем нам двигатель без машины?) и не может принадлежать нескольким машинам в один момент времени. Это значит то, что если мы удалим объект Car, то на объект Engine не будет больше ссылок, и его вскоре удалит Garbage Collector. Как вы видите, данная связь является весьма строгой (сильной).
 
Агрегацией является связь между Car и Passenger, так как работоспособность Car никоим образом не зависит от объектов типа Passenger и их количества.

Они могут как выходить из машины — removePassengerByIndex(Long index), так и заходить новые — addPassenger(Passenger passenger), несмотря на это, функционирование машины продолжится должным образом. В свою очередь, объекты Passenger могут существовать и без объекта Car. Как вы понимаете, это гораздо более слабая связь, нежели мы видим у композиции.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 3Но это еще не все, объект, который связан агрегацией с другим, может также иметь данную связь с другими объектами в один и тот же момент времени.
 
Например, вы как Java-студент, записаны на курсы английского, ООП и логарифмы в один и тот же момент времени, но при этом вы не являетесь критически необходимой частью их, без которой невозможно нормальное функционирование (как например, преподаватель).

ALL IN ONE

3. Какие паттерны GoF вы использовали на практике? Приведите примеры.
Ранее я уже отвечал на данный вопрос, поэтому просто оставлю ссылку на разбор, смотрите первый вопрос.
 
Также нашел замечательную статью-шпаргалку по шаблонам проектирования, которую настоятельно рекомендую держать под рукой.
4. Что такое прокси-объект? Приведите примеры
Прокси — это структурный паттерн проектирования, позволяющий подставлять вместо реальных объектов специальные объекты-заменители, или другими словами — прокси-объекты.
 
Эти прокси-объекты перехватывают вызовы к изначальному объекту, позволяя вклинить некоторую логику до или после передачи вызова оригиналу.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 4Примеры использования объекта-прокси:
Как удаленный прокси — используется, когда нам нужен удаленный объект (объект в другом адресном пространстве), который необходимо представить локально. В этом случае прокси будет заниматься созданием соединения, кодирования, декодированием и прочим, в то время как клиент будет использовать его, как если бы изначальный объект, находящийся в локальном пространстве.

Как виртуальный прокси — используется, когда нужен ресурсоемкий объект. В таком случае объект-прокси служит чем-то вроде изображения реального объекта, которого на самом деле еще нет. Когда к же данному объекту отправляется реальный запрос (вызов метода), лишь тогда происходит загрузка оригинального объекта и выполнение метода. Данный подход еще называется отложенной инициализацией, это бывает весьма удобно, ведь в некоторых ситуациях оригинальный объект может и не пригодиться, тогда и затрат на его создание не будет.

Как защитный прокси — используется, когда нужно контролировать доступ к некоторому объекту на основе прав клиента. То есть если клиент с недостающими правами доступа попытается обратиться к оригинальному объекту, прокси его перехватит и не пустит.

Рассмотрим пример виртуального прокси:
 
У нас есть некоторый интерфейс обработчика:

public interface Processor {
 void process();
}

Реализация которого задействует слишком много ресурсов, но при этом он может быть использован не при каждом запуске приложения:

public class HiperDifficultProcessor implements Processor {
 @Override
 public void process() {
   // некоторый сверхсложная обработка данных
 }
}

Класс прокси:

public class HiperDifficultProcessorProxy implements Processor {
private HiperDifficultProcessor processor;

 @Override
 public void process() {
   if (processor == null) {
     processor = new HiperDifficultProcessor();
   }
   processor.process();
 }
}

Запустим его в main:

Processor processor = new HiperDifficultProcessorProxy();
// тут тяжеловсеного оригинального объекта, ещё не сущетсвует
// но при этом есть объект, который его представляет и у которого можно вызывать его методы
processor.process(); // лишь теперь, объект оригинал был создан

Отмечу, что проксирование используют многие фреймворки, а для Spring это и вовсе ключевой паттерн (Spring прошит им вдоль и поперек).
 
Подробнее о данном паттерне читайте вот тут.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 5
5. Какие нововведения анонсировано в Java 8?
Нововведения принесенные Java 8 следующие:
Добавлены функциональные интерфейсы, о том что это за зверь читайте тут.

Лямбда-выражения, которые тесно связаны с функциональными интерфейсами, подробнее об их использовании вот тут.

Добавлено Stream API для удобной обработки коллекций данных, подробнее читайте тут.

Добавлены ссылки на методы.

В Iterable интерфейс добавлен метод forEach().

Добавлен новый API даты и времени в пакете java.time, подробный разбор тут.

Улучшили Concurrent API.

Добавление класса обертки Optional, который используется для корректной обработки нулевых значений, отличную статью на данную тему вы найдете вот тут.

Добавление интерфейсам возможности использовать static и default методы (что, по сути, приближает Java к множественному наследованию), подробнее тут.

Добавили новые методы в класс Collection(removeIf(), spliterator()).

Мелкие улучшения Java Core.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 6
6. Что такое High Cohesion и Low Coupling? Приведите примеры.
High Cohesion или Высокая связанность — это понятие, когда некоторый класс содержит элементы, которые тесно связаны друг с другом и объединены по своему предназначению.

Например, все методы в классе User должны представлять поведение пользователя.

Класс имеет низкую связность, если он содержит несвязанные элементы. Например, класс User, содержащий метод валидации адреса электронной почты:

public class User {
private String name;
private String email;

 public String getName() {
   return this.name;
 }

 public void setName(final String name) {
   this.name = name;
 }

 public String getEmail() {
   return this.email;
 }

 public void setEmail(final String email) {
   this.email = email;
 }

 public boolean isValidEmail() {
   // некоторая логика валидации емейла
 }
}

Класс пользователя может нести ответственность за хранение адреса электронной почты пользователя, но никак не за его проверку или отправку электронного письма.

Поэтому, чтобы достичь высокой связности, выносим метод валидации в отдельный класс утилиту:

public class EmailUtil {
 public static boolean isValidEmail(String email) {
   // некоторая логика валидации емейла
 }
}

И используем по мере надобности (например, перед сохранением user-у).
 
Low Coupling или Низкое зацепление — это понятие описывающее низкую взаимозависимость между программными модулями. По сути, взаимозависимость заключается в том, как изменение одного требует изменения другого.
 
Два класса имеют сильную связь (или плотную связь), если они тесно связаны. Например, два конкретных класса, хранящие ссылки друг на друга и вызывающие методы друг друга.
 
Слабосвязанные классы более просты в разработке и поддержке. Поскольку они независимы друг от друга, их можно разрабатывать и тестировать их параллельно. Кроме того, они могут быть изменены и обновлены, не влияя друг на друга. 
 
Рассмотрим пример сильно связанных классов. У нас есть некоторый класс студента:

public class Student {
 private Long id;
 private String name;
 private List<Lesson> lesson;
}

Который в себе содержит список уроков:

public class Lesson {
 private Long id;
 private String name;
 private List<Student> students;
}

Каждый урок содержит ссылку на посещающих студентов. Невероятно сильное сцепление, вам так не кажется?
 
Как же можно снизить его?
 
Во-первых, сделаем так, чтобы студенты имели не список предметов, а список их идентификаторов: 

public class Student {
 private Long id;
 private String name;
 private List<Long> lessonIds;
}

Во-вторых, классу урока вовсе не обязательно знать о всех студентах, поэтому вовсе удалим их список:

public class Lesson {
 private Long id;
 private String name;
}

Так стало гораздо проще, и связь стала гораздо слабее, вы не находите?
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 7
ООП
7. Каким образом можно реализовать множественное наследование в Java?
Множественное наследование — это особенность объектно-ориентированной концепции, когда класс может наследовать свойства более чем одного родительского класса. 
 
Проблема возникает, когда существуют методы с одинаковой сигнатурой как в супер классах, так и в подклассе. При вызове метода компилятор не может определить, какой метод класса должен быть вызван, и даже при вызове метода класса, который получает приоритет.
 
Поэтому множественное наследование Java не поддерживает! Но есть своего рода лазейка, о которой мы и поговорим далее.
 
Как я и упомянул ранее, с выходом Java 8, интерфейсам была добавлена возможность иметь методы по умолчанию — default методы.
 
Если имплементирующий интерфейс класс не переопределяет данный метод, то будет использована данная реализация по умолчанию (переопределять дефолтный метод не обязательно, как например имплементировать абстрактный).
 
В таком случае, возможно имплементация различных интерфейсов одним классом и использование их методов по умолчанию. 
 
Рассмотрим пример. У нас есть некоторый интерфейс летуна, с default методом fly():

public interface Flyer {
 default void fly() {
   System.out.println("Я лечу!!!");
 }
}

Интерфейс ходуна, с default методом walk():

public interface Walker {
 default void walk() {
   System.out.println("Я хожу!!!");
 }
}

Интерфейс плавуна, с методом swim():

public interface Swimmer {
 default void swim() {
   System.out.println("Я плыву!!!");
 }
}

Ну а теперь имплементируем все это в одном классе утки:

public class Duck implements Flyer, Swimmer, Walker {
}

Java-университет


И запустим, все методы нашей утки:

Duck donald = new Duck();
donald.walk();
donald.fly();
donald.swim();

В консоли мы получим:

Я хожу!!!
Я лечу!!!
Я плыву!!!

А это значит, что мы верно изобразили множественное наследование, хоть это и не оно.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 8Также отмечу, если класс будет имплементировать интерфейсы с дефолтными методами, которые имеют одинаковые названия методов и одинаковые аргументы в этих методах, то компилятор начнет ругаться на несовместимость, так как он не понимает какой метод действительно нужно применять.
 
Выходов тут несколько:
Переименовать методы в интерфейсах, чтобы они различались между собой.
Переопределить такие спорные методы в классе имплементации.
Наследоваться от класса, который реализует данные спорные методы (тогда ваш класс будет использовать именно его реализацию).
8. Какая разница между методами final, finally и finalize()?
final — это ключевое слово, который используется для наложения ограничений на класс, метод или переменную, ограничение означающее:
Для переменной — после первичной инициализации, переменную переопределить нельзя.
Для метода — метод не может быть переопределен в подклассе (классе наследнике).
Для класса — класс не может быть унаследован.
finally — это ключевое слово перед блоком с кодом, используется при обработке исключений, совместно с блоком try и совместно (или взаимозаменяемо) с блоком catch. Код в данном блоке выполняется в любом случае, независимо от того, будет ли выброшено исключение или нет.

В данной части статьи, в 104-м вопросе разобраны исключительные ситуации в которых данный блок выполнен не будет.
 
finalize() — метод класса Object, вызывается перед удалением каждого объекта сборщиком мусора, будет вызван этот метод (напоследок), используется для очистки занимаемых ресурсов.
 
Подробнее об методах класса Object, которые наследует каждый объект смотрите в данной части статьи в 11-м вопросе.

Ну а на этом мы сегодня и закончим.

До встречи в следующей части!
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14 - 9
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Комментарии
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa


Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 9 августа 2021
 25310 views
 3 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Статья из группы Random
Привет!

Движение к цели — это прежде всего движение.

 
Поэтому мало лишь думать о том, что ты хочешь чего-то достигнуть.

Нужно что-то делать — даже самые маленькие шаги, — но делать их каждый день, и только так вы достигнете конечной цели.
 
А так как вы здесь, чтобы стать Java-разработчиками, вам нужно каждый день делать хотя бы минимальный шаг в сторону углублений знаний по Java.

В качестве сегодняшнего Java-шага предлагаю ознакомиться с новой частью разбора самых популярных вопросов на собеседованиях для разработчиков.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 1Сегодня мы пройдемся по практической части вопросов для Junior-специалистов. Практическая задача на собеседовании — не редкость. Важно не теряться в такой ситуации, постараться сохранить холодную голову и предложить оптимальное решение, а то и несколько. 
 
Также я бы порекомендовал не молчать при решении задачи, а комментировать ход свой мыслей и написание решения, ну или после написания объяснить на словах, что и зачем вы сделали. Это гораздо больше расположит интервьюера к вам, нежели молчаливое решение. 
 
Итак, приступим!
111. Как между потоками обмениваться данными?
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 2Для обмена данными между потоками можно использовать много разных подходов и средств: например, воспользоваться атомарными переменными, синхронизированными коллекциями, семафором. Но для решения данной задачи я приведу пример с Exchanger.
 
Exchanger — это класс синхронизации из concurrent пакета, который облегчает обмен элементами между парой потоков за счет создания общей точки синхронизации. Его использование упрощает обмен данными между двумя потоками.
 
Механизм его работы весьма прост: он ждет, пока два отдельных потока не вызовут его метод exchange(). 

Между ними создаётся что-то вроде точки обмена: первый поток кладет свой объект и получает взамен объект другого, а тот в свою очередь получает объект первого и кладет свой.

То есть, первый поток использует метод exchange() и бездействует до тех пор, пока другой поток не вызовет метод exchange() у этого же объекта и между ними не произойдёт обмен данными.

В качестве примера рассмотрим следующую реализацию класса Thread:

public class CustomThread extends Thread {
 private String threadName;
 private String message;
 private Exchanger<String> exchanger;

 public CustomThread(String threadName, Exchanger<String> exchanger) {
   this.threadName = threadName;
   this.exchanger = exchanger;
 }

 public void setMessage(final String message) {
   this.message = message;
 }

 @Override
 public void run() {
   while (true) {
     try {
       message = exchanger.exchange(message);
       System.out.println(threadName + " поток получил сообщение: " + message);
       Thread.sleep(1000);
     } catch (Exception e) {
       e.printStackTrace();
     }
   }
 }
}

В конструкторе потока мы задаём объект Exchanger, принимающий объекты типа String, а в запуске (в методе run) используем его exchange() для обмена сообщением с другим потоком, использующим данный метод в этом же Exchanger.

Давайте запустим его в main:

Exchanger<String> exchanger = new Exchanger<>();
CustomThread first = new CustomThread("Первый ", exchanger);
first.setMessage("Сообщение первого потока");
CustomThread second = new CustomThread("Второй", exchanger);
second.setMessage("Сообщение второго потока");
first.start();
second.start();

В консоли будет выведено:

Первый  поток получил сообщение: Сообщение второго потока
Второй поток получил сообщение: Сообщение первого потока
Второй поток получил сообщение: Сообщение второго потока
Первый  поток получил сообщение: Сообщение первого потока
Второй поток получил сообщение: Сообщение первого потока
Первый  поток получил сообщение: Сообщение второго потока
                                                      ...

ALL IN ONE


Это значит, что обмен данными между потоками проходит успешно.
112. В чем заключается отличие класса Thread от интерфейса Runnable?
Первое, что отмечу, Thread — это класс, Runnable — интерфейс, что весьма очевидное отличие =D
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 3Также скажу, что Thread использует Runnable (композиция). То есть, у нас есть два пути:
Наследоваться от Thread, переопределить метод run, после чего создать данный объект и запустить поток через метод start().

Реализовать Runnable в определенном классе, реализовать его метод run(), после чего создать объект Thread, задав ему в конструктор этот объект-реализацию интерфейса Runnable. Ну и в конце запустить объект Thread с помощью метода start().

Что же предпочтительнее? Давайте немного поразмыслим:
при реализации интерфейса Runnable вы не изменяете поведение потока. По сути вы просто даете потоку что-то запустить. А это у нас композиция, что в свою очередь считается хорошим подходом.

реализация Runnable даёт больше гибкости вашему классу. Если вы наследуетесь от Thread, то действие, которое вы выполняете, всегда будет в потоке. Но если вы реализуете Runnable, это не обязательно будет просто поток. Ведь вы можете как запустить его в потоке, так и передать его какой-либо службе-исполнителю. Ну или просто передать его куда-то как задачу в однопоточном приложении.

использование Runnable позволяет логически отделить выполнение задачи от логики управления потоками.

в Java возможно только одиночное наследование, поэтому можно расширить только один класс. В то же время количество расширяемых интерфейсов неограниченно (ну не совсем неограниченное, а 65535, но вряд ли вы когда-то упретесь в этот лимит).

Ну а что именно предпочтительнее использовать, решать уже вам ^^
113. Есть потоки Т1, Т2 и Т3. Как реализовать их последовательное выполнение?Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 4
Самое первое и самое простое, что приходит на ум — это использование метода join(). Он приостанавливает выполнение текущего (вызвавшего данный метод) потока до тех пор, пока поток, на котором был вызван метод, не закончит свое выполнение. 
 
Создадим свою реализацию потока:
 
public class CustomThread extends Thread {
private String threadName;

 public CustomThread(final String  threadName){
   this.threadName = threadName;
 }

 @Override
 public void run() {
   System.out.println(threadName + " - начал свою работу");
   try {
     // происходит некая логика
     Thread.sleep(1000);
   } catch (InterruptedException e) {
     e.printStackTrace();
   }

   System.out.println(threadName + " - закончил свою работу");
 }
}

Запустим три таких потока поочередно, используя join():
 
CustomThread t1 = new CustomThread("Первый поток");
t1.start();
t1.join();
CustomThread t2 = new CustomThread("Второй поток");
t2.start();
t2.join();
CustomThread t3 = new CustomThread("Третий поток");
t3.start();
t3.join();

Вывод в консоли:
 
Первый поток - начал свою работу
Первый поток - закончил свою работу
Второй поток - начал свою работу
Второй поток - закончил свою работу
Третий поток - начал свою работу
Третий поток - закончил свою работу

Это значит, что мы справились с нашей задачей.
 
Далее переходим непосредственно к практическим задачам уровня Junior.
Практические задания
114. Matrix Diagonal Sum (задача с Leetcode)
Условие:
Подсчитайте сумму всех элементов на основной диагонали и всех элементов на дополнительной диагонали, которые не являются частью основной диагонали.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 51. При матрице вида : mat = [[1,2,3],
                                                [4,5,6],
                                                [7,8,9]]
 Вывод должен быть — 25
 
2. При матрице - mat = [[1,1,1,1],
                                        [1,1,1,1],
                                        [1,1,1,1],
                                        [1,1,1,1]]
Вывод должен быть — 8
 
3. При матрице - mat = [[5]]
Вывод должен быть — 5
 
Сделайте паузу в прочтении и реализуйте своё решение.
 
Мое же решение будет следующим:
 
public static int countDiagonalSum(int[][] matrix) {
 int sum = 0;
 for (int i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
   sum += matrix[i][i];
   if (j != i) {
     sum += matrix[i][j];
   }
 }
 return sum;
}

Всё происходит с помощью одного прохода по массиву, во время которого у нас есть два индекса для отчёта: i  — для отчёта строк массива и колонок основной диагонали, j — для отчёта колонок дополнительной диагонали.
 
Если же ячейка основной диагонали и дополнительной совпадают, то одно из значений игнорируется при подсчете суммы.
 
Проверим, используя матрицы из условия:

int[][] arr1 = {
   {1, 2, 3},
   {4, 5, 6},
   {7, 8, 9}};
System.out.println(countDiagonalSum(arr1));

int[][] arr2 = {
   {1, 1, 1, 1},
   {1, 1, 1, 1},
   {1, 1, 1, 1},
   {1, 1, 1, 1}};
System.out.println(countDiagonalSum(arr2));

int[][] arr3 = {{5}};
System.out.println(countDiagonalSum(arr3));

Вывод в консоли:

25
8
5
115. Move Zeroes (задача с Leetcode)
Условие:
В целочисленном массиве переместите все 0 в конец, сохраняя относительный порядок ненулевых элементов.
 
1. При массиве: [0,1,0,3,12]
Вывод должен быть: [1,3,12,0,0]

2. При массиве: [0]
Вывод должен быть: [0]
 
Сделайте паузу и напишите свое решение

...

Моё решение:
 
public static void moveZeroes(int[] nums) {
 int counterWithoutNulls = 0;
 int counterWithNulls = 0;
 int length = nums.length;
 while (counterWithNulls < length) {
   if (nums[counterWithNulls] == 0) {// находим нулевые элементы и увеличиваем счётчик
     counterWithNulls++;
   } else { // сдвигаем элементы на количество найденных нулевых элементов слева
     nums[counterWithoutNulls++] = nums[counterWithNulls++];
   }
 }
 while (counterWithoutNulls < length) {
   nums[counterWithoutNulls++] = 0;// заполняем последние элементы массива нулями согласно счётчику нулей
 }
}

Проверка:
 
int[] arr1 = {1, 2, 0, 0, 12, 9};
moveZeroes(arr1);
System.out.println(Arrays.toString(arr1));

int[] arr2 = {0};
moveZeroes(arr2);
System.out.println(Arrays.toString(arr2));

Вывод в консоль:

[1, 2, 12, 9, 0, 0]
[0]
116. Given List <String> names. Удалите первую букву из каждого имени и поверните отсортированный список
1. Первое, что приходит в голову, это методы класса Collections, хранящий в себе множество вспомогательных методов для коллекций:

public static List<String> processTheList(List<String> nameList) {
 for (int i = 0; i < nameList.size(); i++) {
   nameList.set(i, nameList.get(i).substring(1));
 }
 Collections.sort(nameList);
 return nameList;
}

2. Также если мы используем Java версии 8 и выше мы просто обязаны показать решение через стримы:

public static List<String> processTheList(List<String> nameList) {
 return nameList.stream()
     .map(x -> x.substring(1))
     .sorted().collect(Collectors.toList());
}

Независимо от выбранного решения, проверка может быть следующая:
 
List<String> nameList = new ArrayList();
nameList.add("John");
nameList.add("Bob");
nameList.add("Anna");
nameList.add("Dmitriy");
nameList.add("Peter");
nameList.add("David");
nameList.add("Igor");

System.out.println(processTheList(nameList));

Вывод в консоли:

[avid, eter, gor, mitriy, nna, ob, ohn]
117. Переверните массив
Решение 1
Опять же, первое, что приходит в голову — использовать методы вспомогательного, утилитного класса Collections. Но так как у нас массив, сперва нужно преобразовать его в коллекцию (список):
 
public static Integer[] reverse(Integer[] arr) {
 List<Integer> list = Arrays.asList(arr);
 Collections.reverse(list);
 return list.toArray(arr);
}

Решение 2
Так как вопрос был про массив, думаю, необходимо показать решение и без использования готового функционала из коробки, а так сказать, по классике:
 
public static Integer[] reverse(Integer[] arr) {
 for (int i = 0; i < arr.length / 2; i++) {
   int temp = arr[i];
   arr[i] = arr[arr.length - 1 - i];
   arr[arr.length - 1 - i] = temp;
 }
 return arr;
}

Проверка:

Integer[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
System.out.println(Arrays.toString(reverse(arr)));

Вывод в консоли:

[9, 8, 7, 6, 5, 4, 3, 2, 1]
118. Проверить, является ли строка палиндромом
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 6Решение 1
Стоит сразу вспомнить о StringBuilder: он более гибкий и насыщенный различными методами по сравнению с обычным String. Нас особенно интересует метод reverse:
 
public static boolean isPalindrome(String string) {
 string = string.toLowerCase(); //приводит всю строку к нижнему регистру
 StringBuilder builder = new StringBuilder();
 builder.append(string);
 builder.reverse(); // перевочиваем строку методом Builder-а
 return (builder.toString()).equals(string);
}

Решение:
Следующий подход будет без использования “лазеек” из коробки. Сравниваем символы из задней части строки с соответствующими символами из передней:
 
public static boolean isPalindrome(String string) {
  string = string.toLowerCase();
 int length = string.length();
 int fromBeginning = 0;
 int fromEnd = length - 1;
 while (fromEnd > fromBeginning) {
   char forwardChar = string.charAt(fromBeginning++);
   char backwardChar = string.charAt(fromEnd--);
   if (forwardChar != backwardChar)
     return false;
 }
 return true;
}

И проверяем оба подхода:
 
boolean isPalindrome = isPalindrome("Tenet");
System.out.println(isPalindrome);

Вывод в консоли:

true
119. Написать простой алгоритм сортировки (Bubble, Selection или Shuttle). Как его можно улучшить?
В качестве просто алгоритма для реализации я выбрал сортировку выбором — Selection Sort:
 
public static void selectionSorting(int[] arr) {
 for (int i = 0; i < arr.length - 1; i++) {
   int min = i;
   for (int j = i + 1; j < arr.length; j++) {
     if (arr[j] < arr[min]) {
       min = j; // выбираем минимальный элемент в текущем числовом отрезке
     }
   }
   int temp = arr[min]; // меняем местами минимальный элемент с элементом под индексом i
   arr[min] = arr[i]; // так как отрезок постоянно уменьшается
   arr[i] = temp; // и выпадающие из него числа будут минимальными в текущем отрезке
 } // и как итог - числа оставшиеся вне текущей итерации отсортированы от самого наименьшего к большему
}

Улучшенный вариант будет выглядеть следующим образом:
 
public static void improvedSelectionSorting(int[] arr) {
 for (int i = 0, j = arr.length - 1; i < j; i++, j--) { // рассматриваемый отрезок с каждой итерацией
   // будет уменьшаться с ДВУХ сторон по одному элементу
   int min = arr[i];
   int max = arr[i];
   int minIndex = i;
   int maxIndex = i;
   for (int n = i; n <= j; n++) { // выбираем min и max на текущем отрезке
     if (arr[n] > max) {
       max = arr[n];
       maxIndex = n;
     } else if (arr[n] < min) {
       min = arr[n];
       minIndex = n;
     }
   }
   // меняем найденный минимальный элемент с позиции с индексом min на позицию с индексом i
   swap(arr, i, minIndex);

   if (arr[minIndex] == max) {// срабатывает, если элемент max оказался смещен предыдущей перестановкой -
     swap(arr, j, minIndex); // на старое место min, поэтому с позиции с индексом min смещаем его на позицию j
   } else {
     swap(arr, j, maxIndex); // простое обмен местами элементов с индексами max и j
   }
 }
}

static int[] swap(int[] arr, int i, int j) {
 int temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp;
 return arr;
}

Ну а теперь нам нужно убедиться, правда ли сортировка улучшилась.
 
Давайте сравним производительность:
 

Python-университет

long firstDifference = 0;
long secondDifference = 0;
long primaryTime;
int countOfApplying = 10000;
for (int i = 0; i < countOfApplying; i++) {
 int[] arr1 = {234, 33, 123, 4, 5342, 76, 3, 65,
     3, 5, 35, 75, 255, 4, 46, 48, 4658, 44, 22,
     678, 324, 66, 151, 268, 433, 76, 372, 45, 13,
     9484, 499959, 567, 774, 473, 3, 32, 865, 67, 43,
     63, 332, 24, 1};
 primaryTime = System.nanoTime();
 selectionSorting(arr1);
 firstDifference += System.nanoTime() - primaryTime;

 int[] arr2 = {234, 33, 123, 4, 5342, 76, 3, 65,
     3, 5, 35, 75, 255, 4, 46, 48, 4658, 44, 22,
     678, 324, 66, 151, 268, 433, 76, 372, 45, 13,
     9484, 499959, 567, 774, 473, 3, 32, 865, 67, 43,
     63, 332, 24, 1};
 primaryTime = System.nanoTime();
 improvedSelectionSorting(arr2);
 secondDifference += System.nanoTime() - primaryTime;
}

System.out.println(((double) firstDifference / (double) secondDifference - 1) * 100 + "%");

Обе сортировки запустились в одном и том же цикле, т.к. если бы были отдельные циклы, сортировка из в коде выше показывала бы худший результат, нежели если её поставить второй. 
 
Это связано с тем, что программа как бы “разогревается” и дальше работает немного быстрее.
 
Но я немного отошёл от темы.
 
После пяти запусков данной проверки в консоли я увидел увеличение производительности на: 
 
36.41006735635892%
51.46131097160771%
41.88918834013988%
48.091980705743566%
37.120220461591444%
 
Как по мне, это довольно-таки хороший результат.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 7
120. Напишите алгоритм (последовательность действий) составления литерала типа int с литералом типа byte. Объясните, что происходит с памятью
byte значение приводится к int. Для него будет выделен не 1 байт памяти, а как и для всех int значений — 4, если этого значения ещё нет в int стеке. Если же есть — просто будет получена ссылка на него.

Два int значения будут сложены и получится третье. Под него выделится новый участок памяти — 4 байта (либо будет получена ссылка из int стека на существующее значение).

При этом память двух int всё ещё будет занята, и их значения будут храниться в int стеке соответственно.

Собственно, на этом и заканчиваются вопросы уровня Junior из нашего списка.
Начиная со следующей статьи мы будем разбираться в вопросах уровня Middle. 
 
Отмечу, что вопросы Middle-уровня активно задают и разработчикам начального уровня — Junior. Так что следите за обновлениями. 
 
Ну а на сегодня всё: до встречи!Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13 - 8
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Регистрация
Имя
E-mail
Пароль
Регистрируясь, вы принимаете Условия лицензионного договора
Комментарии (3)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Anonymous #3469862 Уровень 1
17 июля 2025
120. Напишите алгоритм (последовательность действий) составления литерала типа int с литералом типа byte. Объясните, что происходит с памятью
Такое ощущение, что это автоперевод :) Судя по представленному алгоритму речь идет не о "составлении", а о сложении int с byte :)
Это не говоря уж о том, что не хватает вводных данных в условии задачи, поскольку алгоритм может быть и другим. К примеру, int n += byte b; Тогда никакого третьего int не создается, а b расширяется до int и просто прибавляется к n. 

Если же есть — просто будет получена ссылка на него.
(либо будет получена ссылка из int стека на существующее значение)
Ээээ, чего? В Java нет ссылок на простые типы. Они используются строго по значению, никаких ссылок. Походу автор попутал Java с Python :) 
the10or Уровень 1
8 августа 2022
117. Переверните массив
Решение 1
не работает же. Arrays.asList()  принимает массив интеджеров, а у нас массив интов. автоупаковка здесь не срабатывает, надо ручками.
hidden #2460969 Уровень 2
9 августа 2021
115. Move Zeroes (задача с Leetcode)

Условие:
В целочисленном массиве переместите все 0 в конец, сохраняя относительный порядок ненулевых элементов.
 
1. При массиве: [0,1,0,3,12]
Вывод должен быть: [1,3,12,0,0]

public static void moveZeroes(int[] nums) {
    int[] sortedNums = new int[nums.length];
    int index = 0;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            sortedNums[index++] =  nums[i];
        }
    }
    System.arraycopy(sortedNums, 0, nums, 0, nums.length);
}


а что значит поверните?
116. Given List <String> names. Удалите первую букву из каждого имени и поверните отсортированный список
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa



Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 19 июля 2021
 21299 views
 2 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Статья из группы Random
Привет!
 
Знания — сила.

Чем больше знаний будет у вас к первому вашему собеседованию, тем увереннее на нем будете себя чувствовать. 

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 1С хорошим багажом знаний вас будет сложно сбить с толку, и в то же время вы сможете приятно удивить вашего интервьюера.
 
Поэтому сегодня мы без лишних предисловий продолжим усиливать вашу теоретическую базу, разбирая 250+ вопросов для Java-разработчика.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 2
103. Какие есть правила для проверки исключений при наследовании?
Если я правильно понимаю вопрос, тут спрашивают про правила работы с исключениями при наследовании, и они таковы:
Переопределяемый или реализуемый метод в наследнике / реализации не может выбрасывать контролируемые исключения, которые выше по иерархии чем исключения в методе суперкласса / интерфейса.
То есть если у нас есть некий интерфейс Animal с методом, бросающим IOException:
 
public  interface Animal {
   void voice() throws IOException;
}

 В реализации данного интерфейса мы не можем выставить более общее бросаемое исключение (например, Exception, Throwable), но можем заменить его на исключение наследника, как, например, на FileNotFoundException:
 
public class Cat implements Animal {
   @Override
   public void voice() throws FileNotFoundException {
// некоторая реализация
   }
}
Конструктор подкласса должен включить в свой блок throws все классы исключений пробрасываемым конструктором суперкласса, к которому идет обращение при создании объекта.
Предположим, что конструктор класса Animal бросает множество исключений: 
 
public class Animal {
  public Animal() throws ArithmeticException, NullPointerException, IOException {
  }

Тогда наследник класса в конструкторе также обязан их указать:
 
public class Cat extends Animal {
   public Cat() throws ArithmeticException, NullPointerException, IOException {
       super();
   }

Либо, как и в случае с методами — можно указать не те же исключения, а более общие. 
 
В нашем случае достаточно будет указать более общее исключение — Exception, так как это общий предок всех рассмотренных трех исключений:
 
public class Cat extends Animal {
   public Cat() throws Exception {
       super();
   }
104. Могли бы вы написать код, когда блок finally не будет выполнен?
Для начала вспомним, что же такое finally. Ранее мы рассматривали механизм перехвата исключений: блок try очерчивает зону перехвата, в то же время блок (блоки) catch — это код, который сработает при падении определенного исключения. 
 
Finally — третий блок кода после слова finally, который является взаимозаменяемым с catch, но не взаимоисключающим. Суть данного блока в том, что код в нем срабатывает всегда, независимо от результата срабатывания try или catch (независимо от того упало ли исключение или нет).
 
Случаи его несрабатывания весьма редки и они являются нештатными.
 
Самый простой случай несрабатывания — это когда в коде выше будет вызван метод System.exit(0), который завершает программу (тушит ее):
 
try {
   throw new IOException();
} catch (IOException e) {
   System.exit(0);
} finally {
   System.out.println("Данное сообщение не будет выведенно в консоль");
}

Также есть некоторые другие ситуации, в которых finally не сработает:
Аварийное завершение программы, вызванное критическими неполадками системы, либо падение некоторой Error, которая “уронит” приложение (примером error может стать та же StackOwerflowError возникающая при переполнении памяти стека).
Когда через блок ry…finally проходит deamon-поток и параллельно с этим программа завершается. Ведь deamon-поток — это поток для фоновых действий, то есть он не является приоритетным и обязательным и приложение не будет ждать окончания его работы.
Самый банальный бесконечный цикл, в try или catch, попав в который поток там останется навсегда:
try {
   while (true) {
   }
} finally {
   System.out.println("Данное сообщение не будет выведенно в консоль");
}

Python-университет

Данный вопрос весьма популярен на собеседованиях новичков, поэтому парочку этих исключительных ситуаций стоит помнить.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 3
105. Напишите пример обработки нескольких исключений в одном блоке catch
1) Возможно вопрос был задан некорректно.

Насколько я понимаю в данном вопросе имеется в виду множество catch для одного блока try:

try {
  throw new FileNotFoundException();
} catch (FileNotFoundException e) {
   System.out.print("Упс, у вас упало исключение - " + e);
} catch (IOException e) {
   System.out.print("Упс, у вас упало исключение - " + e);
} catch (Exception e) {
   System.out.print("Упс, у вас упало исключение - " + e);
}

Если в блоке try падает исключение, то блоки catch поочередно сверху вниз пытаются его перехватить, если у некоторого блока catch это получается, он получает право на обработку исключения, в то время когда остальные блоки ниже уже не смогут попытаться перехватить и по своему обработать его.
 
Поэтому, более узкие исключения ставятся в цепочке catch блоков выше, а более широкие — пониже. К примеру, если у нас в первом catch блоке отлавливается исключение класса Exception, то в остальные блоки проверяемые исключения попасть никак не смогут (остальные блоки с наследниками Exception будут абсолютно бесполезны).

2) Вопрос был задан корректно

В таком случае наша обработка будет иметь вид вроде следующего:
 
try {
  throw new NullPointerException();
} catch (Exception e) {
   if (e instanceof FileNotFoundException) {
       // некоторая обработка с сужением типа (FileNotFoundException)e
   } else if (e instanceof ArithmeticException) {
       // некоторая обработка с сужением типа (ArithmeticException)e
   } else if(e instanceof NullPointerException) {
       // некоторая обработка с сужением типа (NullPointerException)e
   }

Словив исключение через catch, мы пытаемся выяснить его конкретный тип через метод instanceof, который используется для проверки — принадлежит ли объект определенному типу, чтобы потом без негативных последствий можно было сузить его до этого типа.
 
Оба рассмотренных подхода могут применяться в одной и той же ситуации, но 
про некорректность вопроса я сказал из-за того, что второй вариант я бы не назвал хорошим и в своей практике ни разу не встречал, в то же время первый способ с мультикетчами получил широкое распространение.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 4
106. Какой оператор позволяет принудительно выбросить исключение? Напишите пример
Выше я уже неоднократно использовал, тем не менее повторю это ключевое слово — throw.
 
Пример использования (принудительная выброска исключения):
 
throw new NullPointerException();
107. Может метод main выбросить throws-исключение? Если да, то куда передаст?
В первую очередь хочу отметить, то что main это не более чем обычный метод, и да, он вызывается виртуальной машиной для начала выполнения программы, но кроме этого он может быть вызван и из любого другого кода.
 
То есть на него также распространяются обычные правила указания выбрасываемых проверяемых исключений (checked exceptions) после throws: 
 
public static void main(String[] args) throws IOException {

Соответственно в нем тоже могут падать исключения.
 
Если main не был вызван в каком-то методе, а был запущен как точка запуска программы, то выброшенное им исключение будет обрабатываться перехватчиком .UncaughtExceptionHandler. 
 
Данный обработчик один на свой поток (то есть по одному обработчику в каждом потоке). При надобности можно создать свой обработчик и задать его с помощью метода setDefaultUncaughtExceptionHandler, вызванного у объекта Thread.
Многопоточность
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 5
108. Какие средства для работы с многопоточностью знаете?
Основные/базовые средства для использования многопоточности в Java:
Synchronized — механизм закрытия (блокирования) метода / блока при вхождении в него потока, от других потоков.
Volatile — механизм обеспечения согласованного доступа к переменной разными потокам, то есть с наличием данного модификатора у переменной все операции присвоения и чтения ее должны быть атомарными. Другими словами потоки не будут копировать эту переменную в свою локальную память и изменять ее, а будут изменять ее изначальное значение.
Подробнее про volatile читайте вот тут.
Runnable — интерфейс, реализовав который (в частности его метод run) в некотором классе:
public class CustomRunnable implements Runnable {
   @Override
   public void run() {
       // некоторая логика
   }
}

 И создав объект этого класса, можно запустить новый поток, задав этот объект в конструктор нового объекта Thread, и вызвав у него метод start():
 
Runnable runnable = new CustomRunnable();
new Thread(runnable).start();

Метод start запускает реализованный метод run() в отдельном потоке.
Thread — класс, наследовав от которого (при этом переопределив метод run):
public class CustomThread extends Thread {
   @Override
   public void run() {
       // некоторая логика
   }
}

И создав объект данного класса и запустив его с помощью метода start(), запустим тем самым новый поток:
 
new CustomThread().start();
Concurrency — пакет с инструментами для работы в многопоточной среде.
Он состоит из:
Concurrent Collections — набор коллекций, специализированных под работу в многопоточной среде.
Queues — специализированные очереди для многопоточной среды (блокирующие и неблокирующие).
Synchronisers — специализированные утилиты для работы в многопоточной среде.
Executors — механизмы для создания пулов потоков.
Locks — механизмы синхронизации потоков (более гибкие нежели стандартные — synchronized, wait, notify, notifyAll).
Atomics — классы оптимизированные под многопоточное выполнение, именно у них каждая операция — атомарная.
Подробнее о concurrent пакете читайте вот тут. 
109. Расскажите о синхронизации между потоками. Для чего используют методы wait (), notify () — notifyAll () join ()?
Насколько я понял вопрос, синхронизация между потоками — это о ключевом модификаторе — synhronized.
 
Данный модификатор можно поставить либо непосредственно у блока:
 
synchronized (Main.class) {
   // некоторая логика
}

Либо непосредственно в сигнатуре метода:
 
public synchronized void move() {
   // некоторая логика}

Как я и сказал ранее, synhronized это механизм, позволяющий закрывать блок / метод от других потоков, когда в него уже зашел один поток.
 
Представим блок / метод как комнату. Некоторый поток, придя к ней, зайдет в нее и закроет ее на ключ, другие потоки, придя к комнате и увидев, что она закрыта, будут ждать возле нее пока она не освободится. Сделав свои дела, первый поток выходит из комнаты и освобождает ключ.
 
 И я не зря постоянно говорил о ключе, ведь он действительно существует. Это специальный объект, который имеет состояние занято / свободно. Этот объект прикреплен к каждому объекту Java, поэтому при использовании synhronized блока нам нужно в скобках указывать объект, на чей мьютекс мы хотим закрывать дверь:
 
Cat cat = new Cat();
synchronized (cat) {
   // некоторая логика
}

Также можно использовать мьютекс класса, как я это сделал в первом примере (Main.class).
 
Когда мы используем synhronized на методе, мы ведь не указываем объект на которым хотим закрыть верно? 
 
В таком случае для нестатического метода будет закрываться на мьютекс объекта this, то есть текущий объект данного класса. Статический будет закрываться на мьютекс текущего класса (this.getClass();).

Подробнее про мьютекс можно почитать вот тут. Ну а про synhronized читать вот тут.
 
Wait() — метод, который освобождает мьютекс и переводит текущий поток в режим ожидания как бы прикрепляясь к текущему монитору (что-то вроде якоря). Из-за этого данный метод может быть вызван только из synhronized блока или метода (иначе что ему освобождать и чего ему ожидать).
 
Также отмечу, что это метод класса Object.

Точнее не один, а даже три:
Wait() — переводит текущий поток в режим ожидания пока другой поток не вызовет метод notify() или notifyAll() для этого объекта (об этих методах поговорим дальше).

Wait (long timeout) — переводит текущий поток в режим ожидания пока другой поток не вызовет метод notify() или notifyAll() для этого объекта или не истечет указанное время — timeout.

Wait (long timeout, int nanos) — аналогичен предыдущему, только nanos позволяет указать наносекунды (более точная настройка времени).

Notify() — метод позволяющий пробудить один рандомный поток текущего блока синхронизации. Опять же, может быть вызван только в synhronized блоке или методе (ведь в других местах ему не будет кого размораживать).

NotifyAll() — метод, пробуждающий все ожидающие потоки на текущем мониторе (тоже используется только в synhronized блоке или методе).

110. Как остановить поток?
Первое, что нужно сказать — это то, что при полном выполнении метода run() поток автоматически уничтожается. Но иногда нужно убить его досрочно, до завершения данного метода.

И что тогда делать? Возможно, у объекта Thread использовать метод stop()?

Как бы не так! 

Данный метод считается устаревшим и может привести к сбоям системы.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 6Ну а что тогда? 
 
Есть два способа сделать это:
 
Первый — это использование своего внутреннего логического флага.

Давайте рассмотрим на примере.
 
У нас есть своя реализация потока, который должен выводить на экран некую фразу до его полной остановки:
 
public class CustomThread extends Thread {
private boolean isActive;

   public CustomThread() {
       this.isActive = true;
   }

   @Override
   public void run() {
       {
           while (isActive) {
               System.out.println("Поток выполняет некую логику...");
           }
           System.out.println("Поток остановлен!");
       }
   }

   public void stopRunningThread() {
       isActive = false;
   }
}

При использовании метода stopRunning() внутренний флаг становится false и метод run прекращает свою работу.
 
Давайте запустим его в main:
 
System.out.println("Начало выполнения программы");
CustomThread thread = new CustomThread();
thread.start();
Thread.sleep(3);
// пока наш основной поток спит, вспомогательный  CustomThread работает и выводит в коноль своё сообщение
thread.stopRunningThread();
System.out.println("Конец выполнения программы");

ALL IN ONE


В итоге в консоли мы увидим что-то вроде этого:
 
Начало выполнения программы
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Конец выполнения программы
Поток остановлен!

А это значит, что наш поток отработал, вывел некоторое количество сообщений в консоль и был успешно остановлен.
 
Отмечу, что количество выведенных сообщений от запуска к запуску будет разным, иногда дополнительный поток даже и не выводил ничего.
 
Как я заметил, это зависит от времени сна основного потока, чем оно больше, тем меньше шанс что дополнительный поток ничего не выведет. При времени сна 1мс вывода сообщений почти никогда не происходит, но если выставить 20мс, почти всегда срабатывает. 
 
Возможно, при малом времени поток просто не успевает запуститься и начать свою работу, а его сразу же останавливают.
 
Второй способ заключается в использовании на объекте Thread метода interrupted(), который возвращает значение внутреннего флага прерывания (по умолчанию этот флаг false) и другого его метода interrupt() — ставящего этот флаг в true (когда этот флаг true поток должен остановить свою работу).
 
Смотрим пример:
 
public class CustomThread extends Thread {

   @Override
   public void run() {
       {
           while (!Thread.interrupted()) {
               System.out.println("Поток выполняет некую логику...");
           }
           System.out.println("Поток остановлен!");
       }
   }
}

Запуск в main:

System.out.println("Начало выполнения программы");
Thread thread = new CustomThread();
thread.start();
Thread.sleep(3);
thread.interrupt();
System.out.println("Конец выполнения программы");

Итог выполнения будет таким же, как и в первом случае, но данный подход мне нравится больше: мы пишем меньше кода и больше используем уже готовый, стандатный функционал.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 7На этом сегодня и остановимся.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 8
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16

Также есть некоторые другие ситуации, в которых finally не сработает:
Аварийное завершение программы, вызванное критическими неполадками системы, либо падение некоторой Error, которая “уронит” приложение (примером error может стать та же StackOwerflowError возникающая при переполнении памяти стека).
Когда через блок ry…finally проходит deamon-поток и параллельно с этим программа завершается. Ведь deamon-поток — это поток для фоновых действий, то есть он не является приоритетным и обязательным и приложение не будет ждать окончания его работы.
Самый банальный бесконечный цикл, в try или catch, попав в который поток там останется навсегда:
try {
   while (true) {
   }
} finally {
   System.out.println("Данное сообщение не будет выведенно в консоль");
}

Python-университет

Данный вопрос весьма популярен на собеседованиях новичков, поэтому парочку этих исключительных ситуаций стоит помнить.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 3
105. Напишите пример обработки нескольких исключений в одном блоке catch
1) Возможно вопрос был задан некорректно.

Насколько я понимаю в данном вопросе имеется в виду множество catch для одного блока try:

try {
  throw new FileNotFoundException();
} catch (FileNotFoundException e) {
   System.out.print("Упс, у вас упало исключение - " + e);
} catch (IOException e) {
   System.out.print("Упс, у вас упало исключение - " + e);
} catch (Exception e) {
   System.out.print("Упс, у вас упало исключение - " + e);
}

Если в блоке try падает исключение, то блоки catch поочередно сверху вниз пытаются его перехватить, если у некоторого блока catch это получается, он получает право на обработку исключения, в то время когда остальные блоки ниже уже не смогут попытаться перехватить и по своему обработать его.
 
Поэтому, более узкие исключения ставятся в цепочке catch блоков выше, а более широкие — пониже. К примеру, если у нас в первом catch блоке отлавливается исключение класса Exception, то в остальные блоки проверяемые исключения попасть никак не смогут (остальные блоки с наследниками Exception будут абсолютно бесполезны).

2) Вопрос был задан корректно

В таком случае наша обработка будет иметь вид вроде следующего:
 
try {
  throw new NullPointerException();
} catch (Exception e) {
   if (e instanceof FileNotFoundException) {
       // некоторая обработка с сужением типа (FileNotFoundException)e
   } else if (e instanceof ArithmeticException) {
       // некоторая обработка с сужением типа (ArithmeticException)e
   } else if(e instanceof NullPointerException) {
       // некоторая обработка с сужением типа (NullPointerException)e
   }

Словив исключение через catch, мы пытаемся выяснить его конкретный тип через метод instanceof, который используется для проверки — принадлежит ли объект определенному типу, чтобы потом без негативных последствий можно было сузить его до этого типа.
 
Оба рассмотренных подхода могут применяться в одной и той же ситуации, но 
про некорректность вопроса я сказал из-за того, что второй вариант я бы не назвал хорошим и в своей практике ни разу не встречал, в то же время первый способ с мультикетчами получил широкое распространение.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 4
106. Какой оператор позволяет принудительно выбросить исключение? Напишите пример
Выше я уже неоднократно использовал, тем не менее повторю это ключевое слово — throw.
 
Пример использования (принудительная выброска исключения):
 
throw new NullPointerException();
107. Может метод main выбросить throws-исключение? Если да, то куда передаст?
В первую очередь хочу отметить, то что main это не более чем обычный метод, и да, он вызывается виртуальной машиной для начала выполнения программы, но кроме этого он может быть вызван и из любого другого кода.
 
То есть на него также распространяются обычные правила указания выбрасываемых проверяемых исключений (checked exceptions) после throws: 
 
public static void main(String[] args) throws IOException {

Соответственно в нем тоже могут падать исключения.
 
Если main не был вызван в каком-то методе, а был запущен как точка запуска программы, то выброшенное им исключение будет обрабатываться перехватчиком .UncaughtExceptionHandler. 
 
Данный обработчик один на свой поток (то есть по одному обработчику в каждом потоке). При надобности можно создать свой обработчик и задать его с помощью метода setDefaultUncaughtExceptionHandler, вызванного у объекта Thread.
Многопоточность
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 5
108. Какие средства для работы с многопоточностью знаете?
Основные/базовые средства для использования многопоточности в Java:
Synchronized — механизм закрытия (блокирования) метода / блока при вхождении в него потока, от других потоков.
Volatile — механизм обеспечения согласованного доступа к переменной разными потокам, то есть с наличием данного модификатора у переменной все операции присвоения и чтения ее должны быть атомарными. Другими словами потоки не будут копировать эту переменную в свою локальную память и изменять ее, а будут изменять ее изначальное значение.
Подробнее про volatile читайте вот тут.
Runnable — интерфейс, реализовав который (в частности его метод run) в некотором классе:
public class CustomRunnable implements Runnable {
   @Override
   public void run() {
       // некоторая логика
   }
}

 И создав объект этого класса, можно запустить новый поток, задав этот объект в конструктор нового объекта Thread, и вызвав у него метод start():
 
Runnable runnable = new CustomRunnable();
new Thread(runnable).start();

Метод start запускает реализованный метод run() в отдельном потоке.
Thread — класс, наследовав от которого (при этом переопределив метод run):
public class CustomThread extends Thread {
   @Override
   public void run() {
       // некоторая логика
   }
}

И создав объект данного класса и запустив его с помощью метода start(), запустим тем самым новый поток:
 
new CustomThread().start();
Concurrency — пакет с инструментами для работы в многопоточной среде.
Он состоит из:
Concurrent Collections — набор коллекций, специализированных под работу в многопоточной среде.
Queues — специализированные очереди для многопоточной среды (блокирующие и неблокирующие).
Synchronisers — специализированные утилиты для работы в многопоточной среде.
Executors — механизмы для создания пулов потоков.
Locks — механизмы синхронизации потоков (более гибкие нежели стандартные — synchronized, wait, notify, notifyAll).
Atomics — классы оптимизированные под многопоточное выполнение, именно у них каждая операция — атомарная.
Подробнее о concurrent пакете читайте вот тут. 
109. Расскажите о синхронизации между потоками. Для чего используют методы wait (), notify () — notifyAll () join ()?
Насколько я понял вопрос, синхронизация между потоками — это о ключевом модификаторе — synhronized.
 
Данный модификатор можно поставить либо непосредственно у блока:
 
synchronized (Main.class) {
   // некоторая логика
}

Либо непосредственно в сигнатуре метода:
 
public synchronized void move() {
   // некоторая логика}

Как я и сказал ранее, synhronized это механизм, позволяющий закрывать блок / метод от других потоков, когда в него уже зашел один поток.
 
Представим блок / метод как комнату. Некоторый поток, придя к ней, зайдет в нее и закроет ее на ключ, другие потоки, придя к комнате и увидев, что она закрыта, будут ждать возле нее пока она не освободится. Сделав свои дела, первый поток выходит из комнаты и освобождает ключ.
 
 И я не зря постоянно говорил о ключе, ведь он действительно существует. Это специальный объект, который имеет состояние занято / свободно. Этот объект прикреплен к каждому объекту Java, поэтому при использовании synhronized блока нам нужно в скобках указывать объект, на чей мьютекс мы хотим закрывать дверь:
 
Cat cat = new Cat();
synchronized (cat) {
   // некоторая логика
}

Также можно использовать мьютекс класса, как я это сделал в первом примере (Main.class).
 
Когда мы используем synhronized на методе, мы ведь не указываем объект на которым хотим закрыть верно? 
 
В таком случае для нестатического метода будет закрываться на мьютекс объекта this, то есть текущий объект данного класса. Статический будет закрываться на мьютекс текущего класса (this.getClass();).

Подробнее про мьютекс можно почитать вот тут. Ну а про synhronized читать вот тут.
 
Wait() — метод, который освобождает мьютекс и переводит текущий поток в режим ожидания как бы прикрепляясь к текущему монитору (что-то вроде якоря). Из-за этого данный метод может быть вызван только из synhronized блока или метода (иначе что ему освобождать и чего ему ожидать).
 
Также отмечу, что это метод класса Object.

Точнее не один, а даже три:
Wait() — переводит текущий поток в режим ожидания пока другой поток не вызовет метод notify() или notifyAll() для этого объекта (об этих методах поговорим дальше).

Wait (long timeout) — переводит текущий поток в режим ожидания пока другой поток не вызовет метод notify() или notifyAll() для этого объекта или не истечет указанное время — timeout.

Wait (long timeout, int nanos) — аналогичен предыдущему, только nanos позволяет указать наносекунды (более точная настройка времени).

Notify() — метод позволяющий пробудить один рандомный поток текущего блока синхронизации. Опять же, может быть вызван только в synhronized блоке или методе (ведь в других местах ему не будет кого размораживать).

NotifyAll() — метод, пробуждающий все ожидающие потоки на текущем мониторе (тоже используется только в synhronized блоке или методе).

110. Как остановить поток?
Первое, что нужно сказать — это то, что при полном выполнении метода run() поток автоматически уничтожается. Но иногда нужно убить его досрочно, до завершения данного метода.

И что тогда делать? Возможно, у объекта Thread использовать метод stop()?

Как бы не так! 

Данный метод считается устаревшим и может привести к сбоям системы.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 6Ну а что тогда? 
 
Есть два способа сделать это:
 
Первый — это использование своего внутреннего логического флага.

Давайте рассмотрим на примере.
 
У нас есть своя реализация потока, который должен выводить на экран некую фразу до его полной остановки:
 
public class CustomThread extends Thread {
private boolean isActive;

   public CustomThread() {
       this.isActive = true;
   }

   @Override
   public void run() {
       {
           while (isActive) {
               System.out.println("Поток выполняет некую логику...");
           }
           System.out.println("Поток остановлен!");
       }
   }

   public void stopRunningThread() {
       isActive = false;
   }
}

При использовании метода stopRunning() внутренний флаг становится false и метод run прекращает свою работу.
 
Давайте запустим его в main:
 
System.out.println("Начало выполнения программы");
CustomThread thread = new CustomThread();
thread.start();
Thread.sleep(3);
// пока наш основной поток спит, вспомогательный  CustomThread работает и выводит в коноль своё сообщение
thread.stopRunningThread();
System.out.println("Конец выполнения программы");

ALL IN ONE


В итоге в консоли мы увидим что-то вроде этого:
 
Начало выполнения программы
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Поток выполняет некую логику...
Конец выполнения программы
Поток остановлен!

А это значит, что наш поток отработал, вывел некоторое количество сообщений в консоль и был успешно остановлен.
 
Отмечу, что количество выведенных сообщений от запуска к запуску будет разным, иногда дополнительный поток даже и не выводил ничего.
 
Как я заметил, это зависит от времени сна основного потока, чем оно больше, тем меньше шанс что дополнительный поток ничего не выведет. При времени сна 1мс вывода сообщений почти никогда не происходит, но если выставить 20мс, почти всегда срабатывает. 
 
Возможно, при малом времени поток просто не успевает запуститься и начать свою работу, а его сразу же останавливают.
 
Второй способ заключается в использовании на объекте Thread метода interrupted(), который возвращает значение внутреннего флага прерывания (по умолчанию этот флаг false) и другого его метода interrupt() — ставящего этот флаг в true (когда этот флаг true поток должен остановить свою работу).
 
Смотрим пример:
 
public class CustomThread extends Thread {

   @Override
   public void run() {
       {
           while (!Thread.interrupted()) {
               System.out.println("Поток выполняет некую логику...");
           }
           System.out.println("Поток остановлен!");
       }
   }
}

Запуск в main:

System.out.println("Начало выполнения программы");
Thread thread = new CustomThread();
thread.start();
Thread.sleep(3);
thread.interrupt();
System.out.println("Конец выполнения программы");

Итог выполнения будет таким же, как и в первом случае, но данный подход мне нравится больше: мы пишем меньше кода и больше используем уже готовый, стандатный функционал.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 7На этом сегодня и остановимся.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12 - 8
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Регистрация
Имя
E-mail
Пароль
Регистрируясь, вы принимаете Условия лицензионного договора
Регистрация
Имя
E-mail
Пароль
Регистрируясь, вы принимаете Условия лицензионного договора
Комментарии (2)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Mikhail Уровень 22
15 августа 2022
synchronized 8 раз написано как synhronized
Justinian Уровень 41 Master
19 июля 2021
105. Напишите пример обработки нескольких исключений в одном блоке catch

этот оператор появился в Java SE 7, очень удобный, на практике часто встречаю:
try {
   //some logic
  cargoService.execute(providers);
} catch (IllegalArgumentExeption | CargoServiceException e) {
    // log or rethrow
} catch (DaoException e) {
   //log or rethrow
}

удобный тем, что не нужно дублировать логику обработки эксепшенов, можно группировать операции, + на уровне языка этот оператор оптимизирован и генерирует меньше байткода и не дублирует код.
Комментарии (2)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Mikhail Уровень 22
15 августа 2022
synchronized 8 раз написано как synhronized
Justinian Уровень 41 Master
19 июля 2021
105. Напишите пример обработки нескольких исключений в одном блоке catch

этот оператор появился в Java SE 7, очень удобный, на практике часто встречаю:
try {
   //some logic
  cargoService.execute(providers);
} catch (IllegalArgumentExeption | CargoServiceException e) {
    // log or rethrow
} catch (DaoException e) {
   //log or rethrow
}

удобный тем, что не нужно дублировать логику обработки эксепшенов, можно группировать операции, + на уровне языка этот оператор оптимизирован и генерирует меньше байткода и не дублирует код.
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa


Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы
Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 12 июля 2021
 30510 views
 4 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Статья из группы Random
Привет!

Даже самое быстроходное судно без курса будет просто дрейфовать по волнам.

Если вы сейчас читаете мою статью, цель у вас определенно есть. Главное не сходить с пути, а гнуть свою линию до конца — стать Java-разработчиком.

Сегодня я хочу продолжить свой разбор 250+ вопросов для Java-разработчиков, который поможет вам покрыть некоторые пробелы в теории.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 1
97. Выдвигаются ли условия переопределения соглашения при переопределении Equals?
Переопределенный метод equals() должен соблюдать следующие условия (правила):
рефлексивность — для любого значения x выражение вида x.equals(x) всегда должно возвращать true (когда при этом x != null).

симметричность — для любых значений x и y выражение вида x.equals(y) должно возвращать true только в том случае, если y.equals(x) возвращает true.

транзитивность — для любых значений x, y и z, если выражение x.equals(y) возвращает true, при этом y.equals(z) тоже возвращает true, тогда и x.equals(z) должно вернуть значение true.

согласованность — для любых значений x и y повторный вызов x.equals(y) будет всегда возвращать значение предыдущего вызова этого метода при условии, что поля, используемые для сравнения этих двух объектов, не были изменены между вызовами.

сравнение null — для любого значения x при вызове x.equals(null) будет возвращено — false.

98. Что будет, если не переопределить Equals и HashCode?
В таком случае hashCode() будет возвращать число, сгенерированное на основе ячейки памяти, в которой хранится данный объект. То есть два объекта с совершенно одинаковыми полями при вызове непереопределенного hashCode() будут получать разные значения (ведь они хранятся в разных ячейках памяти).
 
Непереопределенный equals() сравнивает ссылки — указывают ли они на один и тот же объект или нет. То есть сравнение идет через ==, и в случае с объектами с одинаковыми полями будет всегда возвращать false. True будет только при сравнении ссылок на один и тот же объект.
 
Иногда есть логика в том, чтобы не переопределять эти методы. Например, вы хотите чтобы все объекты определенного класса были уникальными и переопределение этих методов только испортит логику уникальности.

Главное — понимать нюансы переопределенных и непереопределенных данных методов и использовать оба подхода в зависимости от ситуации.
99. Почему симметричность выполняется, только если x.equals (y) возвращает true?
Немного странный вопрос.
 
Если объект A равен объекту B, то и объект B равен объекту А. Если же B не равен объекту A, то как возможно обратное? Это обычная логика.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 2
100. Что такое коллизия в HashCode? Как с ней бороться?
Коллизия в hashCode — это ситуация, в которой два разных объекта имеют одинаковое значение hashCode. Как это возможно?
 
Дело в том, что hashcode отображается в типе Integer, который, в свою очередь, имеет диапазон от -2147483648 до 2147483647, то есть приблизительно 4 миллиарда разных целых чисел.
 
Этот диапазон огромен, тем не менее, не бесконечен. Поэтому, возможны ситуации когда два совершенно разных объекта имеют одинаковый хеш-код. Это весьма маловероятно, но возможно.
 
Увеличивать частоту одинаковых хеш-кодов может еще плохо реализованная хеш-функция, которая будет, к примеру, возвращать числа в небольшом диапазоне, что увеличит шанс коллизий.
 
Для борьбы с коллизией нужно иметь хорошую имплементацию метода hashCode, чтобы разброс значений был максимальным и шанс повторения значений был минимальным.

ALL IN ONE

101. Что будет, если элемент, участвующий в контракте с HashCode, изменит свое значение?
Если элемент, который участвует в подсчете хеш-кода был изменен, то и сам хеш-код объекта будет изменен (при хорошей хеш-функции). Поэтому в HashMap рекомендуется использовать иммутабельные (неизменяемые) объекты в качестве ключа, ведь их внутреннее состояние (поля) невозможно изменить после создания. Соответственно их хеш-код также не преобразуется после создания. 
 
Если же в качестве ключа использовать изменяемый объект, то при изменении полей данного объекта изменится его хеш-код и как итог можно потерять данную пару в HashMap. Ведь она будет сохранена в бакете для первоначального хеш-кода, а после изменения его поиск будет производиться в другом бакете.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 3
102. Напишите методы Equals and HashCode для класса Student, который состоит из полей String name и int age
public class Student {
int age;
String name;

 @Override
 public boolean equals(final Object o) {
   if (this == o) {
     return true;
   }
   if (o == null || this.getClass() != o.getClass()) {
     return false;
   }

   final Student student = (Student) o;

   if (this.age != student.age) {
     return false;
   }
   return this.name != null ? this.name.equals(student.name) : student.name == null;
 }

 @Override
 public int hashCode() {
   int result = this.age;
   result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
   return result;
 }
}

Equals:
Сперва мы сравниваем непосредственно ссылки, ведь если ссылки на один и тот же объект, какой смысл продолжать проверку? Все и так будет true.

Проверка на null и на совпадение типов классов, ведь если объект — аргумент null или другого типа, то это значит, что объекты не равны — false.

Приведение объекта аргумента к одному типу (вдруг это был объект родительского типа).

Сравнение примитивного поля класса (ведь для него достаточно сравнения через =!), если поле не равно — false.

Проверка непримитивного поля на null и на equals (в String метод переопределен и будет корректно сравнивать), если же оба поля null, либо equals, то проверка заканчивается и метод возвращает true.

HashCode:
Задание начального значения хеш-кода равным примитиву age объекта.

Умножение текущего хеш-кода на 31 (для большего разброса) и добавление к нему хеш-кода непримитивного строкового поля (если оно не null).

Возвращение результата.

В результате такого переопределения хеш-кода объекты с одинаковыми значениями name и int всегда будут возвращать одно и тоже значение.

103. В чем разница применения if (obj instanceof Student) и if (getClass () == obj.getClass ())?
Давайте разберемся, что делает каждый подход:
instanceof проверяет, является ли ссылка на объект с левой стороны экземпляром типа с правой стороны или некоторым его подтипом.

getClass() == ... проверяет идентичность типов.

То есть, если getClass() проверяет полную идентичность класса, то instanceof вернет true даже если объект будет всего лишь подтипом, что может дать нам большую гибкость при активном использовании полиморфизма.
 
Собственно, оба подхода хороши, если понимать особенности их работы и применять в нужных местах. 
104. Дайте краткую характеристику метода clone ().
Clone() — метод класса Object, предназначением которого — создание и возвращение клона текущего объекта (копии текущего объекта).
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 4Для его использования необходимо имплементировать интерфейс маркер Cloneable:

Student implements Cloneable

И переопределить сам метод clone():

@Override
protected Object clone() throws CloneNotSupportedException {
 return super.clone();
}

Ведь в классе Object он protected, то есть будет виден только в самом классе Student, но не виден для классов извне.
105. В чем заключается особенность работы метода clone () с полями объекта типа ссылки?
При клонировании объектов копируются только примитивные значения и значение ссылок на объекты. Это значит, что если объект имеет во внутреннем поле ссылку на другой объект, то будет клонирована только эта ссылка, сам же этот другой объект клонирован не будет. Собственно, это и называют — поверхностным клонированием.
 
Ну а что, если вам нужно полноценное клонирование с клонированием всех вложенных объектов? Как сделать, чтобы это были не копии ссылок, а полноценные клоны объекты с другими занимаемыми ячейками памяти в куче?

На самом деле все довольно просто — для этого вам нужно в каждом классе этих внутренних объектов также переопределить метод clone() и добавить интерфейс маркер — Cloneable. Тогда будут скопированные не ссылки на объекты, а сами объекты, ведь теперь они тоже имеют возможность копировать себя.
Exceptions
106. В чем разница между error и exception?
Как исключения, так и ошибки являются подклассами класса Throwable. Тем не менее, они имеют свои различия. 

Ошибка указывает на проблему, которая в основном возникает из-за нехватки системных ресурсов. И наше приложение не должно обнаруживать эти типы проблем. Некоторые из примеров ошибок — сбой системы и ошибка нехватки памяти. Ошибки в основном возникают во время выполнения, так как они относятся к непроверенному типу. 
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 5Исключения — это проблемы, которые могут возникнуть во время выполнения и во время компиляции. Как правило это происходит в коде, написанном разработчиками. То есть exception более предсказуемые и более зависящие от нас как от разработчиков. В это же время errors более случайны и более независимы от нас, а скорее зависимы от неполадок самой системы, в которой работает наше приложение.
107. Какая разница между checked и unchecked, exception, throw, throws.
Как я и сказал ранее, exception — это ошибка во время выполнения программы и во время компиляции, которая произошла в  написанном разработчике коде (из-за некой нештатной ситуации).
 
Checked — вид исключений, которые нужно всегда обрабатывать посредством использования механизма — try — catch или пробрасывать в методы выше.

Throws используется в заголовке метода для обозначения возможных брошенных исключений данным методом. То есть это и есть механизм “проброски” исключений в методы выше.
 
Unchecked — вид исключений, которые не нужно обрабатывать, они, как правило, менее предсказуемы и менее вероятны. Тем не менее, по желанию их тоже можно обработать.

Throw используется, при ручном броске исключения, например:

throw new Exception();
108. Какова иерархия исключений?
Иерархия исключений весьма велика обширна, даже слишком, чтобы о ней вот тут так все рассказать. Поэтому, мы рассмотрим лишь ключевые ее звенья:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 6Тут на самом верху иерархии мы видим класс — Throwable — общий класс, предок иерархии исключений, который в свою очередь делится на:
Error — критические, непроверяемые ошибки.
Exception — проверяемые исключения.
Exception делится на различные непроверяемые runtime исключения и разнообразные проверяемые исключения.
109. Что такое checked и unchecked exception?
Как я раньше и говорил:
Checked — исключения, которые вы обязаны как-то обработать, то есть либо обработать в блоке try — catch, либо “пробросить“ в метод выше. Для этого в сигнатуре метода после перечисления аргументов метода нужно использовать ключевое слово trows <тип исключения>, которое указывает для пользователей метода, что метод может кинуть данное исключение (что-то вроде предупреждения) и передаст обязанность обрабатывать исключение уже для пользователей сего метода.

Unchecked — исключения, которые обрабатывать не нужно, так как они не проверяются во время компиляции и, как правило, более непредсказуемые. То есть, основная разница с checked в том, что для них эти механизмы try — catch или пробрасывания работают также, но они не являются обязательными.


Java-университет

101. Напишите пример перехвата и обработки исключения в блоке try — catch метода
try{                                                 // начало блока перехвата
 throw new Exception();                             // ручной бросок исключения
} catch (Exception e) {                              // данное исключение и его потомки будут перехватываться
 System.out.println("Упс, что-то пошло не так =("); // вывод некоторого исключения в консоль
}
102. Напишите пример перехвата и обработки исключения с использованием собственных исключений
Сперва напишем свой класс исключения, который наследуется от Exception и переопределим ему конструктор с сообщением ошибки:
 
public class CustomException extends Exception {

 public CustomException(final String message) {
   super(message);
 }
}

Ну а далее бросим его вручную и перехватим как и в предыдущем вопросе:
 
try{
 throw new CustomException("Упс, что-то пошло не так =(");
} catch (CustomException e) {
 System.out.println(e.getMessage());
}

И опять же при запуске вы получите вывод в консоль:
 
Упс, что-то пошло не так =(
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 7Подробнее с исключениями можно познакомиться вот тут.

Ну а на этом сегодня все! До встречи в следующей части!
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Регистрация
Имя
E-mail
Пароль
Регистрируясь, вы принимаете Условия лицензионного договора
Комментарии (4)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Sekator Уровень 41
13 октября 2022
В таком случае hashCode() будет возвращать число, сгенерированное на основе ячейки памяти, в которой хранится данный объект.
Це не так !
hidden #2460969 Уровень 2
12 июля 2021
Дело в том, что hashcode отображается в типе Integer.

метод hashCode возвращает тип int

102. Напишите методы Equals and HashCode для класса Student, который состоит из полей String name и int age

if (o == null || this.getClass() != o.getClass()) {
  return false;
}

Джошуа Блох говорит это bad pracrices. надо использовать instanceof only
return this.name != null ? this.name.equals(student.name) : student.name == null;

опять же Блох говорит тут использовать Objects.equals()

туда же
103. В чем разница применения if (obj instanceof Student) и if (getClass () == obj.getClass ())?

Собственно, оба подхода хороши, если понимать особенности их работы и применять в нужных местах. 


не одинаково хороши они с точки зрения правильного equals()
Константин Уровень 1
13 июля 2021
1.Насчёт комментария к  102 вопросу согласен, для equals больше подходит проверка через instanceof, т.к. когда мы используем getClass подход, есть ограничение, что объекты равны только другим объектам того же класса, но не его наследникам. В этом просматривается нарушение принципа SOLID   -  L - принципа подстановки Барбары Лисков - заменены объектов их наследниками без смены свойств программы
В то время когда instanceof будет возвращать true и для наследников
2. По поводу 103 - там есть уточнение про equals? Там вопрос идёт в целом, различие данных подходов
fedyaka Уровень 36
29 октября 2022
Мы сравниваем объекты, то есть что бы получить true, то они должны быть полностью одинаковы и если будет один класс наследником, и если у наследника будет на одно поле больше, то при проверки методом equals родителя, то может быть всё будет и хорошо, потому что все поля родителя есть и у наследника, но если будем проверять методом equals наследника, то будет ошибка, ведь данного поля у родителя нет и его будет невозможно вызвать! И всё, принципы построения equals нарушены x.equals(y) != y.equals(x)!
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa
Статья
Поиск

Отзывы
О нас
CS50
JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 12 июля 2021
 30510 views
 4 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Статья из группы Random
Привет!

Даже самое быстроходное судно без курса будет просто дрейфовать по волнам.

Если вы сейчас читаете мою статью, цель у вас определенно есть. Главное не сходить с пути, а гнуть свою линию до конца — стать Java-разработчиком.

Сегодня я хочу продолжить свой разбор 250+ вопросов для Java-разработчиков, который поможет вам покрыть некоторые пробелы в теории.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 1
97. Выдвигаются ли условия переопределения соглашения при переопределении Equals?
Переопределенный метод equals() должен соблюдать следующие условия (правила):
рефлексивность — для любого значения x выражение вида x.equals(x) всегда должно возвращать true (когда при этом x != null).

симметричность — для любых значений x и y выражение вида x.equals(y) должно возвращать true только в том случае, если y.equals(x) возвращает true.

транзитивность — для любых значений x, y и z, если выражение x.equals(y) возвращает true, при этом y.equals(z) тоже возвращает true, тогда и x.equals(z) должно вернуть значение true.

согласованность — для любых значений x и y повторный вызов x.equals(y) будет всегда возвращать значение предыдущего вызова этого метода при условии, что поля, используемые для сравнения этих двух объектов, не были изменены между вызовами.

сравнение null — для любого значения x при вызове x.equals(null) будет возвращено — false.

98. Что будет, если не переопределить Equals и HashCode?
В таком случае hashCode() будет возвращать число, сгенерированное на основе ячейки памяти, в которой хранится данный объект. То есть два объекта с совершенно одинаковыми полями при вызове непереопределенного hashCode() будут получать разные значения (ведь они хранятся в разных ячейках памяти).
 
Непереопределенный equals() сравнивает ссылки — указывают ли они на один и тот же объект или нет. То есть сравнение идет через ==, и в случае с объектами с одинаковыми полями будет всегда возвращать false. True будет только при сравнении ссылок на один и тот же объект.
 
Иногда есть логика в том, чтобы не переопределять эти методы. Например, вы хотите чтобы все объекты определенного класса были уникальными и переопределение этих методов только испортит логику уникальности.

Главное — понимать нюансы переопределенных и непереопределенных данных методов и использовать оба подхода в зависимости от ситуации.
99. Почему симметричность выполняется, только если x.equals (y) возвращает true?
Немного странный вопрос.
 
Если объект A равен объекту B, то и объект B равен объекту А. Если же B не равен объекту A, то как возможно обратное? Это обычная логика.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 2
100. Что такое коллизия в HashCode? Как с ней бороться?
Коллизия в hashCode — это ситуация, в которой два разных объекта имеют одинаковое значение hashCode. Как это возможно?
 
Дело в том, что hashcode отображается в типе Integer, который, в свою очередь, имеет диапазон от -2147483648 до 2147483647, то есть приблизительно 4 миллиарда разных целых чисел.
 
Этот диапазон огромен, тем не менее, не бесконечен. Поэтому, возможны ситуации когда два совершенно разных объекта имеют одинаковый хеш-код. Это весьма маловероятно, но возможно.
 
Увеличивать частоту одинаковых хеш-кодов может еще плохо реализованная хеш-функция, которая будет, к примеру, возвращать числа в небольшом диапазоне, что увеличит шанс коллизий.
 
Для борьбы с коллизией нужно иметь хорошую имплементацию метода hashCode, чтобы разброс значений был максимальным и шанс повторения значений был минимальным.

ALL IN ONE

101. Что будет, если элемент, участвующий в контракте с HashCode, изменит свое значение?
Если элемент, который участвует в подсчете хеш-кода был изменен, то и сам хеш-код объекта будет изменен (при хорошей хеш-функции). Поэтому в HashMap рекомендуется использовать иммутабельные (неизменяемые) объекты в качестве ключа, ведь их внутреннее состояние (поля) невозможно изменить после создания. Соответственно их хеш-код также не преобразуется после создания. 
 
Если же в качестве ключа использовать изменяемый объект, то при изменении полей данного объекта изменится его хеш-код и как итог можно потерять данную пару в HashMap. Ведь она будет сохранена в бакете для первоначального хеш-кода, а после изменения его поиск будет производиться в другом бакете.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 3
102. Напишите методы Equals and HashCode для класса Student, который состоит из полей String name и int age
public class Student {
int age;
String name;

 @Override
 public boolean equals(final Object o) {
   if (this == o) {
     return true;
   }
   if (o == null || this.getClass() != o.getClass()) {
     return false;
   }

   final Student student = (Student) o;

   if (this.age != student.age) {
     return false;
   }
   return this.name != null ? this.name.equals(student.name) : student.name == null;
 }

 @Override
 public int hashCode() {
   int result = this.age;
   result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
   return result;
 }
}

Equals:
Сперва мы сравниваем непосредственно ссылки, ведь если ссылки на один и тот же объект, какой смысл продолжать проверку? Все и так будет true.

Проверка на null и на совпадение типов классов, ведь если объект — аргумент null или другого типа, то это значит, что объекты не равны — false.

Приведение объекта аргумента к одному типу (вдруг это был объект родительского типа).

Сравнение примитивного поля класса (ведь для него достаточно сравнения через =!), если поле не равно — false.

Проверка непримитивного поля на null и на equals (в String метод переопределен и будет корректно сравнивать), если же оба поля null, либо equals, то проверка заканчивается и метод возвращает true.

HashCode:
Задание начального значения хеш-кода равным примитиву age объекта.

Умножение текущего хеш-кода на 31 (для большего разброса) и добавление к нему хеш-кода непримитивного строкового поля (если оно не null).

Возвращение результата.

В результате такого переопределения хеш-кода объекты с одинаковыми значениями name и int всегда будут возвращать одно и тоже значение.

103. В чем разница применения if (obj instanceof Student) и if (getClass () == obj.getClass ())?
Давайте разберемся, что делает каждый подход:
instanceof проверяет, является ли ссылка на объект с левой стороны экземпляром типа с правой стороны или некоторым его подтипом.

getClass() == ... проверяет идентичность типов.

То есть, если getClass() проверяет полную идентичность класса, то instanceof вернет true даже если объект будет всего лишь подтипом, что может дать нам большую гибкость при активном использовании полиморфизма.
 
Собственно, оба подхода хороши, если понимать особенности их работы и применять в нужных местах. 
104. Дайте краткую характеристику метода clone ().
Clone() — метод класса Object, предназначением которого — создание и возвращение клона текущего объекта (копии текущего объекта).
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 4Для его использования необходимо имплементировать интерфейс маркер Cloneable:

Student implements Cloneable

И переопределить сам метод clone():

@Override
protected Object clone() throws CloneNotSupportedException {
 return super.clone();
}

Ведь в классе Object он protected, то есть будет виден только в самом классе Student, но не виден для классов извне.
105. В чем заключается особенность работы метода clone () с полями объекта типа ссылки?
При клонировании объектов копируются только примитивные значения и значение ссылок на объекты. Это значит, что если объект имеет во внутреннем поле ссылку на другой объект, то будет клонирована только эта ссылка, сам же этот другой объект клонирован не будет. Собственно, это и называют — поверхностным клонированием.
 
Ну а что, если вам нужно полноценное клонирование с клонированием всех вложенных объектов? Как сделать, чтобы это были не копии ссылок, а полноценные клоны объекты с другими занимаемыми ячейками памяти в куче?

На самом деле все довольно просто — для этого вам нужно в каждом классе этих внутренних объектов также переопределить метод clone() и добавить интерфейс маркер — Cloneable. Тогда будут скопированные не ссылки на объекты, а сами объекты, ведь теперь они тоже имеют возможность копировать себя.
Exceptions
106. В чем разница между error и exception?
Как исключения, так и ошибки являются подклассами класса Throwable. Тем не менее, они имеют свои различия. 

Ошибка указывает на проблему, которая в основном возникает из-за нехватки системных ресурсов. И наше приложение не должно обнаруживать эти типы проблем. Некоторые из примеров ошибок — сбой системы и ошибка нехватки памяти. Ошибки в основном возникают во время выполнения, так как они относятся к непроверенному типу. 
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 5Исключения — это проблемы, которые могут возникнуть во время выполнения и во время компиляции. Как правило это происходит в коде, написанном разработчиками. То есть exception более предсказуемые и более зависящие от нас как от разработчиков. В это же время errors более случайны и более независимы от нас, а скорее зависимы от неполадок самой системы, в которой работает наше приложение.
107. Какая разница между checked и unchecked, exception, throw, throws.
Как я и сказал ранее, exception — это ошибка во время выполнения программы и во время компиляции, которая произошла в  написанном разработчике коде (из-за некой нештатной ситуации).
 
Checked — вид исключений, которые нужно всегда обрабатывать посредством использования механизма — try — catch или пробрасывать в методы выше.

Throws используется в заголовке метода для обозначения возможных брошенных исключений данным методом. То есть это и есть механизм “проброски” исключений в методы выше.
 
Unchecked — вид исключений, которые не нужно обрабатывать, они, как правило, менее предсказуемы и менее вероятны. Тем не менее, по желанию их тоже можно обработать.

Throw используется, при ручном броске исключения, например:

throw new Exception();
108. Какова иерархия исключений?
Иерархия исключений весьма велика обширна, даже слишком, чтобы о ней вот тут так все рассказать. Поэтому, мы рассмотрим лишь ключевые ее звенья:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 6Тут на самом верху иерархии мы видим класс — Throwable — общий класс, предок иерархии исключений, который в свою очередь делится на:
Error — критические, непроверяемые ошибки.
Exception — проверяемые исключения.
Exception делится на различные непроверяемые runtime исключения и разнообразные проверяемые исключения.
109. Что такое checked и unchecked exception?
Как я раньше и говорил:
Checked — исключения, которые вы обязаны как-то обработать, то есть либо обработать в блоке try — catch, либо “пробросить“ в метод выше. Для этого в сигнатуре метода после перечисления аргументов метода нужно использовать ключевое слово trows <тип исключения>, которое указывает для пользователей метода, что метод может кинуть данное исключение (что-то вроде предупреждения) и передаст обязанность обрабатывать исключение уже для пользователей сего метода.

Unchecked — исключения, которые обрабатывать не нужно, так как они не проверяются во время компиляции и, как правило, более непредсказуемые. То есть, основная разница с checked в том, что для них эти механизмы try — catch или пробрасывания работают также, но они не являются обязательными.


Java-университет

101. Напишите пример перехвата и обработки исключения в блоке try — catch метода
try{                                                 // начало блока перехвата
 throw new Exception();                             // ручной бросок исключения
} catch (Exception e) {                              // данное исключение и его потомки будут перехватываться
 System.out.println("Упс, что-то пошло не так =("); // вывод некоторого исключения в консоль
}
102. Напишите пример перехвата и обработки исключения с использованием собственных исключений
Сперва напишем свой класс исключения, который наследуется от Exception и переопределим ему конструктор с сообщением ошибки:
 
public class CustomException extends Exception {

 public CustomException(final String message) {
   super(message);
 }
}

Ну а далее бросим его вручную и перехватим как и в предыдущем вопросе:
 
try{
 throw new CustomException("Упс, что-то пошло не так =(");
} catch (CustomException e) {
 System.out.println(e.getMessage());
}

И опять же при запуске вы получите вывод в консоль:
 
Упс, что-то пошло не так =(
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11 - 7Подробнее с исключениями можно познакомиться вот тут.

Ну а на этом сегодня все! До встречи в следующей части!
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Регистрация
Имя
E-mail
Пароль
Регистрируясь, вы принимаете Условия лицензионного договора
Комментарии (4)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Sekator Уровень 41
13 октября 2022
В таком случае hashCode() будет возвращать число, сгенерированное на основе ячейки памяти, в которой хранится данный объект.
Це не так !
hidden #2460969 Уровень 2
12 июля 2021
Дело в том, что hashcode отображается в типе Integer.

метод hashCode возвращает тип int

102. Напишите методы Equals and HashCode для класса Student, который состоит из полей String name и int age

if (o == null || this.getClass() != o.getClass()) {
  return false;
}

Джошуа Блох говорит это bad pracrices. надо использовать instanceof only
return this.name != null ? this.name.equals(student.name) : student.name == null;

опять же Блох говорит тут использовать Objects.equals()

туда же
103. В чем разница применения if (obj instanceof Student) и if (getClass () == obj.getClass ())?

Собственно, оба подхода хороши, если понимать особенности их работы и применять в нужных местах. 


не одинаково хороши они с точки зрения правильного equals()
Константин Уровень 1
13 июля 2021
1.Насчёт комментария к  102 вопросу согласен, для equals больше подходит проверка через instanceof, т.к. когда мы используем getClass подход, есть ограничение, что объекты равны только другим объектам того же класса, но не его наследникам. В этом просматривается нарушение принципа SOLID   -  L - принципа подстановки Барбары Лисков - заменены объектов их наследниками без смены свойств программы
В то время когда instanceof будет возвращать true и для наследников
2. По поводу 103 - там есть уточнение про equals? Там вопрос идёт в целом, различие данных подходов
fedyaka Уровень 36
29 октября 2022
Мы сравниваем объекты, то есть что бы получить true, то они должны быть полностью одинаковы и если будет один класс наследником, и если у наследника будет на одно поле больше, то при проверки методом equals родителя, то может быть всё будет и хорошо, потому что все поля родителя есть и у наследника, но если будем проверять методом equals наследника, то будет ошибка, ведь данного поля у родителя нет и его будет невозможно вызвать! И всё, принципы построения equals нарушены x.equals(y) != y.equals(x)!
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa


Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 5 июля 2021
 39560 views
 4 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Статья из группы Random
Привет!
 
Как много часов нужно потратить, чтобы стать в чём-то мастером? Часто слышал что-то вроде: “Чтобы стать мастером в любом деле, нужно потратить 10000 часов”. Пугающая цифра, не так ли? 

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 1Тем не менее, мне интересно, а правда ли это? И я постоянно пытаюсь прикидывать, сколько часов я уже вложил в овладение программистским искусством.
 
И когда я перешагну те заветные 10000 часов и стану мастером, почувствую ли я эту разницу? Или я уже их давно перешагнул, не осознав этого?
 
Так или иначе, чтобы стать программистом, не нужно вкладывать такое огромное количество времени. Главное — использовать его с умом. 
 
Ваша первостепенная цель — пройти собеседование. А на собеседованиях новичков в первую очередь как раз спрашивают теорию, поэтому вы должны быть в ней сильны. 
 
Собственно, при самой подготовке к собеседованию ваша задача — обнаружить все ваши пробелы в базовой теории Java-разработчика и покрыть их знаниями. И сегодня я вам помогу в этом деле, ведь я тут, чтобы продолжить разбор самых популярных вопросов. Итак, продолжим!
89. Чем отличается ArrayList от LinkedList?
Это один из самых популярных вопросов наравне с вопросом о внутреннем устройстве HashMap. Ни одно собеседование не обходится без него, и поэтому ответ на него у вас должен “отскакивать от зубов”.
 
Помимо очевидного — разного названия — они отличаются внутренним устройством. Ранее мы разбирали внутренние устройство и ArrayList-а и LinkedList-а, поэтому вдаваться в детали их реализации я не буду.
 
Лишь напомню, что ArrayList реализован на основе внутреннего массива, который по надобности увеличивается по формуле:

<размерТекущегоМассива> * 3 / 2  + 1

В то же время LinkedList реализован на основе внутреннего двухсвязного списка, то есть, каждый элемент имеет ссылку на предыдущий и следующий, исключая значения, которые являются началом/концом списка.
 
Этот вопрос любят задавать в формате: “Что лучше — ArrayList или LinkedList?”, надеясь вас подловить. Ведь если вы в качестве ответа укажете на один из них, это будет неправильный ответ.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 2Вместо этого вам стоит уточнить, о какой конкретной ситуации идет речь — доступ по индексу или вставка в середину списка. В зависимости от ответа вы сможете объяснить свой выбор.
 
Ранее я уже описывал, как работает ArrayList и LinkedList в той или иной ситуации. Давайте подытожим это, поставив их в один ряд для сравнения:
 
Добавление элемента (add)
Добавление нового элемента без указания индекса как местоположения будет происходить автоматически в конец обоих списков. В LinkedList новый элемент станет новым хвостом (происходит только перезаписывание пары ссылок — алгоритмическая сложность O(1)).

В ArrayList будет добавлен новый элемент в последнюю пустую ячейку массива — O(1).

Добавление элемента по индексу как правило подразумевает вставку примерно в середину списка. В LinkedList сперва будет вестись поиск нужного места с помощью перебора элементов с “хвоста” и “головы” — O(n/2), а после — вставка значения путем переопределения ссылок элементов, между которыми вставляется новый — O(1). Суммарная алгоритмическая сложность данного действия будет O(n/2).

ArrayList в данной ситуации по индексу находит элемент — O(1), и все элементы справа (включая элемент, который уже хранится по данному индексу) двигаются на одну единицу вправо (при этом возможно понадобится создание нового списка и копирование элементов в него) — O(n/2). Суммарная сложность — O(n/2).
Добавление элемента в начало списка в LinkedList будет ситуация схожая с добавлением в конец: новый элемент станет новой “головой” — O(1), в то же время когда ArrayList-у нужно будет двигать все элементы вправо — O(n).


AI Native University

Итог: в LinkedList алгоритмическая сложность будет колебаться от O(1) до O(n/2). То есть, чем ближе вставка к концу или началу списка, тем она быстрее. В то же время у ArrayList она колеблется от O(1) до O(n): чем вставка ближе к концу списка, тем она быстрее.
 
Задание элемента (set)
 
Данная операция записывает элемент в указанную позицию в списке, перезаписывая предыдущий, если он есть. 
 
В LinkedList эта операция будет схожа с добавлением, т.к. самая большая сложность тут — поиск элемента. Перезапись элемента будет проходить путем перезаписывания пары ссылок, поэтому тут также алгоритмическая сложность будет колебаться от O(1) до O(n/2) в зависимости от удаленности позиции от конца или начала списка.
 
В то время в ArrayList для этой операции по индексу будет найдена нужная ячейка, а в нее записан новый элемент. Поиск по индексу, как и данная операция, имеет алгоритмическую сложность O(1). 
 
Взять элемент по индексу (get)

В LinkedList взятие элемента будет происходить по тому же принципу, что и поиск для других операций — в зависимости от удаленности от конца или начала, т.е. от O(1) до O(n/2). 
 
В ArrayList, как я и сказал ранее, поиск элемента в массиве по индексу имеет сложность O(1).
 
Удалить элемент по индексу (remove)
 
Для LinkedList тут тоже срабатывает его принцип действия: сперва находится элемент, а потом происходит перезаписывание ссылок — соседи элемента начинают ссылаться друг на друга, теряя ссылки на данный элемент, который впоследствии будет удален сборщиком мусора. То есть, алгоритмическая сложность всё такая же — от O(1) до O(n/2).
 
Для ArrayList данная операция больше схожа с операцией добавления нового элемента (add). Сперва находится искомый элемент — O(1), потом он удаляется, и все элементы, которые были справа от него перемещаются на одну единицу влево, чтобы закрыть образовавшуюся брешь. Операция удаления будет иметь ту же алгоритмическую сложность, что и операция добавления — от O(1) до O(n). Чем удаление ближе к концу списка, тем меньшая у него алгоритмическая сложность.
 
Собственно, это были все основные операции.
 
Напоминаю: при сравнении этих двух списков вам нужно уточнить, о какой конкретной ситуации идёт речь, и тогда уже и можно однозначно ответить на поставленный вопрос. 
90. Чем отличается ArrayList от HashSet?
Если ArrayList и LinkedList можно было сравнить по операциям — где кто лучше — то с ArrayList с HashSet сравнить уже не так просто, ведь это совершенно разные коллекции.
 
Можно сравнить одно сладкое блюдо с другим, но с мясным уже получится — больно уж они разные.
 
Тем не менее, я попробую привести их некоторые различия:
ArrayList реализует интерфейс List, в то время как HashSet реализует интерфейс Set;

В ArrayList возможен доступ по индексу элемента: операция get имеет алгоритмическую сложность O(1), а в HashSet необходимый элемент можно получить лишь путём перебора, а это у нас от O(1) до O(n);

ArrayList допускает присутствие дубликатов элементов. В HashSet все элементы уникальны: добавить в HashSet элемент, аналог которого уже присутствует в коллекции, не получится (проверка дубликатов ведется по hashcode, отсюда и название этой коллекции);

ArrayList реализован с помощью внутреннего массива, а HashSet реализован с помощью внутренней HashMap;

ArrayList поддерживает порядок вставки элементов, в то время как HashSet — это неупорядоченное множество и не поддерживает порядок элементов;

ArrayList допускает любое количество пустых значений (null), в HashSet можно вставить лишь одно значение null (как-никак, уникальность элементов).

91. Зачем в Java такое разнообразие имплементации динамического массива?
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 3Ну, это скорее философский вопрос. Ну а зачем придумывают такое количество новых разнообразных технологий? Для удобства. Собственно, так же и с большим количеством имплементаций динамического массива. 
 
Ни одну из них нельзя назвать лучшей или идеальной. У каждой есть преимущество в какой-то конкретной ситуации. И наша задача — знать их различия, их сильные/слабые стороны: чтобы суметь в нужной ситуации использовать самую подходящую из них. 
92. Зачем в Java такое разнообразие имплементаций key-value storage?
Здесь ситуация такая же, как и с имплементациями динамического массива. Однозначно лучших нет: у каждой есть сильные и слабые стороны. И мы, конечно, должны по максимуму использовать сильные стороны.
 
Пример: в пакете concurrent, в котором есть множество многопоточных технологий, имеются свои Concurrent коллекции. У той же ConcurrentHashMap есть преимущество в безопасности многопоточной работы с данными в сравнении с обычной HashMap, но не в многопоточной среде она проигрывает в скорости работы.
 
Ну а имплементации, которые ни в одной из ситуаций не бывают сильнейшими, постепенно перестают использовать. 
 
Пример: Hashtable, которая изначально задумывалась как потокобезопасная HashMap, но ConcurrentHashMap превзошла ее при работе в многопоточной среде, и в итоге о Hashtable позабыли и перестали использовать.
93. Как отсортировать коллекцию элементов?
Первое, что нужно сказать, — класс элемента коллекции должен имплементировать интерфейс Comparable и его метод compareTo. Или же нужен класс, который имплементирует Comaprator с его методом comparator.

Подробнее о них можно почитать в этом посте.
 
Оба способа указывают, каким образом нужно сравнивать объекты данного типа. При сортировке это критически важно, ведь нужно понимать принцип, по которому элементы можно сравнить.
 
В основном используется способ через имплементацию Comparable, реализуемый непосредственно в классе, который вы хотите сортировать. 
 
В то же время применение Comparator-а более редко. Скажем, вы используете класс с какой-то библиотеки, у которого нет реализации Comparable, но вам как-то нужно будет его сортировать. Не имея возможности изменить код данного класса (кроме как расширить его), вы можете написать реализацию Comparator-а, в котором укажете, по какому принципу нужно сравнивать объекты данного класса. 
 
И еще один пример. Допустим, вам нужны разные принципы сортировки объектов одного и того же типа, поэтому вы пишете несколько Comparator-ов которые используете в разных ситуациях.
 
Как правило, многие классы из коробки уже реализуют интерфейс Comparable — тот же String. Собственно, при их использовании вам не нужно париться, как их сравнить. Вы просто берете и используете их.
 
Первый и самый очевидный способ — использовать коллекцию типа TreeSet или TreeMap, которые хранят элементы в ужеотсортированном порядке, согласно компаратору класса элементов. Не забывайте, что TreeMap сортирует ключи, но не значения. 
 
Если вы используете имплементацию Comparator вместо Comparable, вам нужно будет передать его объект в конструктор коллекции при создании:
 
TreeSet treeSet = new TreeSet(customComparator);

А что если у вас коллекция другого типа? Как её отсортировать? 
 
В этом случае подходит второй способ утилитного класса Collections — метод sort(). Он статический, поэтому всё, что вам нужно — имя класса и метод, в который передается необходимый список.
 
Например:

Collections.sort(someList);

Если вы используете не Comparable, а реализацию Comparator, его нужно передать вторым параметром:
 
Collections.sort(someList, customComparator);

В итоге внутренний порядок элементов переданного списка изменится: он будет отсортирован согласно компаратору элементов.
 
Отмечу, что передаваемый список элементов должен быть мутабельным, т.е. изменяемым, иначе метод не сработает и будет выброшено UnsupportedOperationException.
 
В качестве третьего способа можно использовать Stream операцию sort, которая сортирует элементы коллекции, если используется имплементация Comparable:
 
someList = someList.stream().sorted().collect(Collectors.toList());

если Comparator:

someList = someList.stream().sorted(customComparator).collect(Collectors.toList());

 
Подробнее о Stream можно почитать в этой статье.
Четвертый способ — ручная реализация сортировки, например, сортировки пузырьком или сортировки слиянием.
Class Object. Equals and HashCode

Java-университет

94. Дайте краткую характеристику class object в Java
Во второй части разбора мы уже говорили о методах класса Object, и я напомню, что класс Object — прародитель всех классов в Java. У него есть 11 методов, которые, соответственно, наследуются всеми классами.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 4Информацию обо всех 11 методах можно найти во второй части разбора вопросов.
95. Для чего используют Equals и HashCode в Java?
hashCode() — это метод класса Object, который наследуется всеми классами. Его задача — генерирование некоторого числа, которое представляет конкретный объект.
 
Примером использования данного метода может служить его применение в HashMap на объекте ключа для дальнейшего определения локального хешкода, по которому определится ячейка внутреннего массива (бакета), в которой будет сохранена пара.
 
Подробно о работе HashMap мы говорили в 9 части разбора, поэтому особо останавливаться на этом не будем.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 5Также как правило данный метод используется в методе equals() как один из его основных инструментов определения идентичности объектов.
 
equals() — метод класса Object, задача которого — сравнивать объекты и определять, равны они или нет.
 
Данный метод используется повсеместно там, где нам необходимо сравнить объекты, ведь обычное сравнение через == не подходит для объектов, т.к. сравнивает только ссылки на них.
96. Расскажите про контракт между Equals и HashCode в Java?
Первое, что скажу — для корректной работы методов equals() и hashCode() их нужно правильно переопределить. После этого они должны соблюдать правила:
одинаковые объекты, для которых сравнение через equals возвращает true, обязательно имеют одинаковые хеш-коды;
объекты с одинаковыми хеш-кодами не всегда могут быть равны.
На этом мы и сделаем паузу до следующей части разбора!Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 6
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
 итоге внутренний порядок элементов переданного списка изменится: он будет отсортирован согласно компаратору элементов.
 
Отмечу, что передаваемый список элементов должен быть мутабельным, т.е. изменяемым, иначе метод не сработает и будет выброшено UnsupportedOperationException.
 
В качестве третьего способа можно использовать Stream операцию sort, которая сортирует элементы коллекции, если используется имплементация Comparable:
 
someList = someList.stream().sorted().collect(Collectors.toList());

если Comparator:

someList = someList.stream().sorted(customComparator).collect(Collectors.toList());

 
Подробнее о Stream можно почитать в этой статье.
Четвертый способ — ручная реализация сортировки, например, сортировки пузырьком или сортировки слиянием.
Class Object. Equals and HashCode

Java-университет

94. Дайте краткую характеристику class object в Java
Во второй части разбора мы уже говорили о методах класса Object, и я напомню, что класс Object — прародитель всех классов в Java. У него есть 11 методов, которые, соответственно, наследуются всеми классами.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 4Информацию обо всех 11 методах можно найти во второй части разбора вопросов.
95. Для чего используют Equals и HashCode в Java?
hashCode() — это метод класса Object, который наследуется всеми классами. Его задача — генерирование некоторого числа, которое представляет конкретный объект.
 
Примером использования данного метода может служить его применение в HashMap на объекте ключа для дальнейшего определения локального хешкода, по которому определится ячейка внутреннего массива (бакета), в которой будет сохранена пара.
 
Подробно о работе HashMap мы говорили в 9 части разбора, поэтому особо останавливаться на этом не будем.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 5Также как правило данный метод используется в методе equals() как один из его основных инструментов определения идентичности объектов.
 
equals() — метод класса Object, задача которого — сравнивать объекты и определять, равны они или нет.
 
Данный метод используется повсеместно там, где нам необходимо сравнить объекты, ведь обычное сравнение через == не подходит для объектов, т.к. сравнивает только ссылки на них.
96. Расскажите про контракт между Equals и HashCode в Java?
Первое, что скажу — для корректной работы методов equals() и hashCode() их нужно правильно переопределить. После этого они должны соблюдать правила:
одинаковые объекты, для которых сравнение через equals возвращает true, обязательно имеют одинаковые хеш-коды;
объекты с одинаковыми хеш-кодами не всегда могут быть равны.
На этом мы и сделаем паузу до следующей части разбора!Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10 - 6
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Комментарии (4)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
fedyaka Уровень 36
28 октября 2022
Сорри, но для проверки вхождения объекта хватит O(1), потому что там всё та же хеш таблица, а что бы проверить хватит contains() и не нужно будет перебирать всю кучу
Никита Мельников (MifitoS) Уровень 18
13 августа 2021
Огонь статья! Она будет легендарна
(оставил свой след) 
fFamous Уровень 51
5 июля 2021
Добавил в закладки, потом буду читать. Спасибо)
Justinian Уровень 41 Master
5 июля 2021
класс Object — прародитель всех [остальных] классов в Java.

если все классы в джаве это множество N, то класс Object прародитель для N-1 классов.

Я понимаю, что это подразумевается, но многие потом ретранслируют не задумываясь, определение из JLS звучит следующим образом:
4.3.2. The Class Object
The class Object is a superclass (§8.1.4) of all other classes.


Это так к слову, за статью жирный плюсик, хороший цикл, читайте статьи и мотайте на ус :)
Комментарии (4)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
fedyaka Уровень 36
28 октября 2022
Сорри, но для проверки вхождения объекта хватит O(1), потому что там всё та же хеш таблица, а что бы проверить хватит contains() и не нужно будет перебирать всю кучу
Никита Мельников (MifitoS) Уровень 18
12 августа 2021
Огонь статья! Она будет легендарна
(оставил свой след) 
fFamous Уровень 51
5 июля 2021
Добавил в закладки, потом буду читать. Спасибо)
Justinian Уровень 41 Master
5 июля 2021
класс Object — прародитель всех [остальных] классов в Java.

если все классы в джаве это множество N, то класс Object прародитель для N-1 классов.

Я понимаю, что это подразумевается, но многие потом ретранслируют не задумываясь, определение из JLS звучит следующим образом:
4.3.2. The Class Object
The class Object is a superclass (§8.1.4) of all other classes.


Это так к слову, за статью жирный плюсик, хороший цикл, читайте статьи и мотайте на ус :)
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa

Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 22 июня 2021
 26697 views
 5 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Статья из группы Random
Салют!

Быть программистом непросто. Нужно постоянно учиться, вечно познавать что-то новое. Но, как и в любом другом деле, самое сложное — начать, сделать первый шаг на пути к своей цели. И раз ты сидишь на данном сайте и читаешь данную статью, с первым шагом ты справился. А значит, теперь нужно целеустремленно двигаться к своей цели, не тормозя и не сворачивая на пути.

Если я понимаю правильно, твоя цель — стать Java-разработчиком или усилить знания, если ты таковым являешься. Если всё так, то ты по адресу, ведь мы будем продолжать разбирать обширный список из 250+ вопросов на собеседованиях для Java-разработчика.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 1Продолжим!
Collections
84. Расскажите про итераторы и их применение
Коллекции — одна из самых любимых тем на любом собеседовании Java-разработчика, и рассказывая об иерархии коллекций кандидаты часто говорят, что она начинается с интерфейса Collection. Но это не так, ведь над этим интерфейсом есть ещё один — Iterable.
 
Данный интерфейс представляет метод iterator(), который позволяет вызывать объект Iterator для текущей коллекции.
 
И что же такое этот объект Iterator? 
 
Iterator — это объект предоставляющий возможность двигаться по коллекции и перебирать элементы, причем пользователю не нужно знать реализацию конкретной коллекции.  
 
То есть, это некоторый указатель на элементы коллекции, который как бы смотрит на определенное место в ней.
 
У итератора есть такие методы:
hasNext() — возвращает true, если есть элемент, расположенный после указателя (данный метод позволяет узнать, достигнут ли конец коллекции);
next() — возвращает следующий элемент после указателя. Если такового не будет, выбрасывается NoSuchElementException. То есть перед использованием этого метода лучше убедиться в том, что элемент есть — с помощью hasNext();
remove() — удаляет из коллекции последний полученный элемент методом next(). Если же next() до вызова remove() ни разу не вызывали, будет брошено исключение — IllegalStateException;
forEachRemaining(<Consumer>) — выполняет переданное действие с каждым элементом коллекции (метод появился с Java 8).
Вот небольшой пример прохода по списку и удаления всех его элементов с помощью рассмотренных методов итератора:
 
List<String> list = new ArrayList<>();
list.add("Hello ");
list.add("World, ");
list.add("It's ");
list.add("Amigo!");
Iterator iterator = list.iterator();

while(iterator.hasNext()) {
   iterator.next();
   iterator.remove();
}
System.out.println(list.size());

 В консоли будет выведено:

0

А это значит, что удаление элементов прошло успешно. Получив итератор, можно было бы воспользоваться методом для вывода всех элементов на экран:

iterator.forEachRemaining(x -> System.out.print(x));

Но после этого итератор стал бы непригоден для дальнейшего использования, так как он обошел бы весь список, а методов для обратного перебора у обычного итератора нет.
 
Тут мы плавно подходим к LinkedList, а именно — к его методу listIterator(), который возвращает модернизированный вид итератора — ListIterator.
 
Помимо методов обычного (стандартного) итератора, у этого есть дополнительные:

AI Native University

add(<Element>) — вставляет новый элемент в список;
hasPrevious() — возвращает true, если есть элемент, расположенный перед указателем (есть ли предыдущий элемент);
nextIndex() — возвращает индекс в списке следующего элемента после указателя;
previous() — возвращает предыдущий элемент (до указателя);
previousIndex() — возвращает индекс предыдущего элемента;
set(<Element>) — заменяет последний элемент, возвращенный методами next() или previous().
Как видим, функционал этого итератора гораздо интереснее: он позволяет ходить в обе стороны и развязывает руки в работе с элементами.
 
Также когда говорят об итераторах иногда подразумевают сам паттерн. Чтобы не попасть впросак и рассказать о нем убедительно, читайте эту статью о паттерне Iterator.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 2
85. Какая иерархия коллекций в Java Collection Framework?
Существует две иерархии коллекций в Java.
 
Первая иерархия — непосредственно иерархия Collection со следующей структурой:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 3Она в свою очередь делится на следующие подколлекции:
Set — интерфейс, описывающий такую структуру данных как множество, содержащее неупорядоченные уникальные (неповторяющиеся) элементы. У интерфейса есть стандартные реализации — TreeSet, HashSet и LinkedHashSet.
List — интерфейс, описывающий структуру данных, которая хранит упорядоченную последовательность объектов. Экземпляры, которые содержатся в List-е, можно вставлять и удалять по их индексу в данной коллекции (аналог массива, но с динамическим изменением размера). У интерфейса есть стандартные реализации — ArrayList, Vector (считается устаревшей и фактически не используется) и LinkedList.
Queue — интерфейс, описывающий структуру данных, хранящую элементы в виде очереди, которая следует правилу FIFO — First In First Out (первым вошел, первым вышел). У интерфейса есть такие стандартные реализации: LinkedList (да, он реализует и Queue тоже) и PriotityQueue.
Вторая иерархия коллекций — Map, которая имеет следующую структуру:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 4В этой коллекции разделений на подколлекции нет (так как сама иерархия Map — что-то вроде подколлекции, но лежащая отдельно).
 
Стандартные реализации Map — Hashtable (считается устаревшей), LinkedHashMap и TreeMap.
 
Собственно, когда спрашивают о Collection, как правило подразумевают обе иерархии.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 5
86. Каково внутреннее строение ArrayList?
ArrayList — это аналог массива, но со способностью динамически расширяться.
 
Что это значит? 
 
Дело в том, что ArrayList работает на основе обычного массива, а именно он хранит элементы во внутреннем массиве (его размер по умолчанию — 10 ячеек). Когда внутренний массив заполняется, создается новый массив, размер которого определяется по формуле:
 
<размерТекущегоМассива> * 3 / 2  + 1

 То есть если размер нашего массива 10, размер нового будет: 10 * 3 / 2 + 1 = 16.
 
Далее в него копируются все значения из первого (старого) массива c помощью нативного метода System.arraycopy(), и первый массив удаляется.

Собственно, так и реализуется динамическая расширяемость ArrayList.
 
Рассмотрим самые используемые методы ArrayList:
 
1. add(<Elelement>) — добавляет элемент в конец массива (в последнюю пустую ячейку), при этом сперва проверяется, есть ли место в данном массиве. Если его нет, создается новый массив, в который копируются элементы. 
 
Логарифмическая сложность данной операции — O(1).
 
Есть аналогичный метод — add(<Index>,<Elelement>). Он добавляет элемент не в конец списка (массива), а в определенную ячейку с индексом, который пришёл в качестве аргумента. 
 
В таком случае логарифмическая сложность будет отличаться в зависимости от места добавления:
если это было примерно начало списка, логарифмическая сложность будет близка к O(N), ведь придется все элементы, расположенные справа от нового, двигать на одну ячейку вправо;
если элемент вставляется в середину — O(N/2) т.к. нам нужно сдвинуть на одну ячейку вправо только половину элементов списка.
То есть логарифмическая сложность данного метода колеблется от O(N) до O(1) в зависимости от места вставки элемента.
 
2. set(<Index>,<Elelement>) — записывает элемент в указанную позицию в списке. Если в той позиции уже присутствует элемент, перезаписывает его. 

Логарифмическая сложность данной операции — O(1), ведь там никаких сдвигов нет: только поиск по индексу в массиве, что, как мы помним, имеет сложность O(1), и запись элемента.
 
3. remove(<index>) — удаление элемента по его индексу во внутреннем массиве. При удалении элемента, который расположен не в конце списка, необходимо сдвинуть все элементы справа от него на одну ячейку влево, чтобы закрыть образовавшуюся брешь после удаления элемента. 
 
Поэтому логарифмическая сложность будет такой же, как и у add(<Index>,<Elelement>), если элемент был в середине — O(N/2), — ведь нужно половину элементов сдвинуть на один влево. Соответственно, если он был в начале —- O(N). Ну и если в конце — O(1), ведь и двигать ничего не нужно.
 
Для желающих углубиться в данную тему я оставлю данную ссылку на статью с разбором класса ArrayList.
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 6
87. Какое внутреннее строение LinkedList?
Если ArrayList содержит элементы во внутреннем массиве, то LinkedList — в виде двусвязного списка.
 
Это значит, что каждый элемент содержит ссылку на предыдущий элемент (previous) и на следующий (next). 
 
У первого элемента нет ссылки на предыдущий (он ведь первый), при этом он считается главой списка, и в LinkedList есть ссылка непосредственно на него.
 
У последнего элемента, собственно, нет следующего элемента, он является хвостом списка, и поэтому прямая ссылка на него есть в самом LinkedList. Поэтому логарифмическая сложность при доступе к главе или хвосту списка — O(1).
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 7В ArrayList при увеличении списка увеличивался внутренний массив, тут же все происходит проще — при добавлении элемента просто меняются пару ссылок. 
 
Давайте рассмотрим некоторые наиболее используемые методы LinkedlList-а:
 
1. add(<Elelement>) — происходит добавление в конце списка, т.е. после последнего элемента (5) добавится ссылка на новый элемент как next. Новому элементу добавится ссылка на последний (5) как previous элемент. 
 
Логарифмическая сложность такой операции будет O(1), так как необходима всего лишь ссылка на последний элемент, а как вы помните, на хвост есть прямая ссылка с LinkedList и логарифмическая сложность доступа к нему минимальная.
 
2. add(<Index>,<Elelement>) — добавление элемента по индексу. 
 
При добавлении элемента, например, в середину списка, сперва перебираются элементы с головы и хвоста (с обеих сторон), пока не будет найдено нужное место. Если мы хотим вставить элемент между третьим и четвертым (на рисунке выше), то при поиске нужного места ссылка next третьего элемента будет уже указывать на новый. У нового же ссылка previous будет указывать на третий. Соответственно, ссылка четвертого элемента — previous — будет указывать уже на новый элемент, а у нового элемента ссылка next будет указывать на четвертый элемент:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 8Логарифмическая сложность данного метода будет зависеть от индекса, задаваемого новому элементу:
если он будет близок к голове или хвосту, то будет приближаться к O(1), поскольку перебирать элементы фактически будет не нужно;
если же близко к середине, то O(N/2) — будет происходить переборка элементов с головы и хвоста одновременно, пока не будет найден нужный элемент.
3. set(<Index>,<Elelement>) — записывает элемент в указанную позицию в списке. Логарифмическая сложность данной операции будет колебаться от  O(1) до O(N/2), опять же в зависимости от того, насколько близок элемент к голове, хвосту или середине.
 
4. remove(<index>) — удаляет элемент из списка, по сути делая так, чтобы элемент, который находится перед удаляемым (previous), ссылался на элемент, который идёт после удаляемого (next). И наоборот: чтобы элемент, который идет после удаляемого, ссылался на тот, который идёт перед удаляемым:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 9Получился процесс, обратный добавлению по индексу (add(<Index>,<Elelement>)).
 
Желающим узнать больше о внутреннем устройстве LinkedList посоветую прочесть вот эту статью.
88. Каково внутреннее строение HashMap?
Пожалуй, один из самых популярных вопросов при собеседовании Java-разработчика.
 
HashMapv работает с парами ключ – значение. Как же они хранятся внутри самого HashMapv?
 
Внутри HashMap есть массив нод:

Node<K,V>[] table

По умолчанию размер массива — 16, и он увеличивается каждый раз в два раза по мере заполнения элементами (при достижении LOAD_FACTOR — определенного процента заполненности, по умолчанию он — 0.75).
 
Каждая из нод хранит в себе хеш ключа, ключ, значение, ссылку на следующий элемент:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 10Собственно, “ссылка на следующий элемент” означает, что мы имеем дело с односвязным списком, где каждый элемент содержит ссылку на следующий.

То есть HashMap хранит данные в массиве односвязных списков.
 
Но сразу отмечу: когда одна ячейка массива table имеет ссылку на подобный односвязный список, состоящий из более чем одного элемента, это не есть хорошо. Такое явление называется коллизия.
 
Но обо всём по порядку. Давайте разберемся, как происходит сохранение новой пары через метод put.
 
Сперва берется hachCode() ключа. Поэтому для корректной работы hashmap в качестве ключей нужно брать классы, в которых данный метод переопределен.
 
Далее этот хеш код используется во внутреннем методе — hash() — для определения числа в пределах размера массива table.
 
Далее по полученному числу, идёт обращение к конкретной ячейке массива table.
 
Тут у нас два случая:

ALL IN ONE

Ячейка пустая — в нее сохраняется новое значение Node.
Ячейка не пустая — сравнивается значение ключей. Если они равны, новое значение Node перезаписывает старое, если не равны — идёт обращение к элементу next (следующему), идёт сравнение уже с его ключом… И так до тех пор, пока новое значение не перезапишет некоторое старое или не достигнет конца односвязного списка и сохранится там последним элементом.
При поиске элемента по ключу (метод get(<key>)), вычисляется hashCode ключа, потом его значение в пределах массива с помощью hash(), и по полученному числу находится ячейка массива table, в которой уже ведется поиск путем перебора нод и сравнения ключа искомой ноды с ключом текущей.
 
Операции в Map при идеальном раскладе имеют алгоритмическую сложность O(1), ведь идёт обращение к массиву, а как вы помните, независимо от количества элементов операции у массива имеют сложность O(1).
 
Но это в идеальном случае.
 
Когда используемая ячейка массива не пустая (2) и там уже есть некоторые ноды, алгоритмическая сложность превращается в линейную O(N), ведь теперь необходимо перебрать элементы, прежде чем найдется нужное место.
 
Не могу не упомянуть вот что: начиная с Java 8, если у односвязного списка node больше 8 элементов (коллизии), он превращается в двоичное дерево. В таком случае алгоритмическая сложность будет уже не O(N), а O(log(N)) — это уже другое дело, не так ли?
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 11HashMap — большая тема, и по ней любят задавать вопросы на собеседованиях. Поэтому советую подробно разобраться в ней (чтобы аж от зубов отскакивало). Лично у меня не было собеседований без вопросов по HashMap.
 
Глубокий разбор HashMap вы можете найти в этой статье.

На этом сегодня всё, продолжение следует…
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9 - 12
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Комментарии (5)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Anonymous #3101009 Уровень 11
15 июля 2023
Наверное, не логарифмическая, а алгоритмическая сложность?
Никита Мельников (MifitoS) Уровень 18
12 августа 2021
В чем разница set(добавление по индексу) и add(добавление по индексу) для linkedlist? 
Константин Уровень 1
15 августа 2021
set перезапишет элемент с определённым индексом, в то время когда add просто вставит новый элемент перед уже существующим элементом с таким индексом, при этом двигая элементы справа на одну ячейку вправо
Justinian Уровень 41 Master
22 июня 2021
Хорошая статья, коллекции очень важная тема в разрезе собеседований и ей нужно уделить достаточно времени.

Пару акцентов от меня:
1. Насчет хэшмапы, если идет коллизия, допустим у нас есть Хэшмапа, и в нем два объекта типа Стринг:
Вот сам массив, и условные диапазоны хэшкодов, которые содержат бакеты: 
[0] 0 - 900
[1] 900 - 1500    "Petya"  "Masha"
[2] 1500 -2500
[3] 2500 - 4500
...
Допустим мы хотим вставить слово "Андрей", хэшкод опредилился для него как 1200.
Как видим, при операции вставки, оно пойдет в бакет / ячейку под индексом 1.
Этот бакет не пустой, а значит, при добавлении, будет осуществляться перебор всех значений в этом бакете и сравнение объекта, который вставляем (Андрей) и объектами, которые в бакетах.
Сравнение будет идти по принципу, сначала сравнивается хэшкод , если он совпадает, тогда equals:
if (e.hash == hash && (e.key == key || key.equals(e.key)))

То есть в рамках одного бакета, прежде всего, будет сравнение элементов по хэшкоду, если хэшкод не совпадает, то сравнение по equals и не будет.
Если хэшкод совпадает, то будет сравнение по equals, и если будет совпадение и по хэшкоду и по equals, тогда будет уже замена элемента, не будет совпадения - добавление нового элемента.

2. В идеале, написать свои схематичные имплементации ArrayList, HashMap, Queue, LinkedList, Binary Search Tree, кто чувствует в себе силы - Red black tree.
Написание пусть сильно упрощенной, но своей имплементации позволит зафиксировать понимание этих структур.
В интернете есть множество вариантов, на которые можно ориентироваться, можно использовать:
data-structures-and-algorithms
Это готовые упражнения, есть готовые тесты, с помощью которых можно проверить решение, также есть готовое решение (ответ) от автора в ветке completed, которое является ориентир
Justinian Уровень 41 Master
22 июня 2021
3.
Плюс рекомендую прочитать и периодически возвращаться к статьям:
https://habr.com/ru/users/tarzan82/posts/
там четыре статьи по HashMap, LinkedHashMap, ArrayList и LinkedList.
по собесам неплохая подборка:
https://github.com/enhorse/java-interview#java-collections
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa


Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 9 июня 2021
 27336 views
 6 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Статья из группы Random
Практика или теория? Что важнее? Многие скажут, что, конечно, практика важнее. Мол, практикуйтесь до упора и будет вам счастье. Смею с этим не согласиться.

Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 1На собеседованиях никто и не узнает, насколько вы круты в практике. Вас будут спрашивать во весь рост именно по теории. И лишь потом, когда вы пройдете все круги собеседований и попадете на проект, вы примените ваши практические скилы.
 
Вы можете возразить: иногда дают тестовое задание и практика таки нужна. Не спорю, их иногда дают, но в том-то и дело, что ИНОГДА, а вот теоретическое собеседование проходит ВСЕГДА. 
 
Чувствуете разницу?
 
Поэтому у вас должен быть твёрдый теоретический фундамент под ногами, укреплением которого мы сегодня и продолжим заниматься.
 
А именно — мы продолжим разбор вопросов, которые часто задают на собеседованиях.
71. Что будет, если мы не будем переопределять метод toString() для Enum?
Предположим, у нас есть следующий enum:

public enum Role {
   STUDENT,
   TEACHER,
   DIRECTOR,
   SECURITY_GUARD;
}

Выведем в консоли студента, вызвав у него toString():

System.out.println(Role.STUDENT.toString());

Результат в консоли:

STUDENT

 То есть по умолчанию toString() для enum-а — название самой константы.
72. Можно ли указывать конструктор внутри Enum?
Да, конечно. Именно через конструктор и задаются значения внутренних переменных enum.
 
В качестве примера к предыдущему enum добавим два поля — ageFrom и ageTo — чтобы обозначить возрастные рамки для каждой роли:
 
public enum Role {
   STUDENT(5,18),
   TEACHER(20,60),
   DIRECTOR(40,70),
   SECURITY_GUARD(18,50);

   int ageFrom;
   int ageTo;

   Role(int ageFrom, int ageTo) {
       this.ageFrom = ageFrom;
       this.ageTo = ageTo;
   }
}
73. В чём разница между == и equals()?
Это один из самых распространенных вопросов на собеседованиях на Java-разработчика.
 
Начнём с того, что когда мы сравниваем простые значения (int, char, double…), мы делаем это через ==, так как переменные содержат конкретные значения и мы их можем сравнить. Да и примитивные переменные не являются полноценными объектами — не наследуются от Object и не имеют метод equals().
 
Когда мы говорим о сравнении переменных, которые ссылаются на объекты, то == будет сравнивать лишь значение ссылок — на тот же объект они ссылаются или нет. И даже если один объект будет идентичен другому, сравнение через == даст отрицательный результат (false), ведь это другой объект. 
 
Как вы поняли, для сравнения ссылочных переменных используется метод equals(). Это один из стандартных методов класса Object, который нужен для полноценного сравнения объектов. 
 
Но сразу стоит уточнить: для правильной работы этого метода его нужно переопределить, написав, как именно должны сравниваться объекты данного класса. Если вы не переопределите метод, по умолчанию он будет сравнивать объекты по ==. 
 
В IntelliJ IDEA можно переопределять его автоматически (средствами IDEA) —> alt + insert, в появившемся окошке выбираем equals() and hashCode() —> выбираем, какие поля класса должны участвовать —> и вуаля, автоматическая имплементация методов выполнена.
 
Вот пример того, как будет выглядеть автоматически сгенерированный метод equals для простейшего класса Cat с двумя полями — int age и String name:
 

Java-университет

@Override
public boolean equals(final Object o) {
   if (this == o) return true;
   if (o == null || this.getClass() != o.getClass()) return false;
   final Cat cat = (Cat) o;
   return this.age == cat.age &&
           Objects.equals(this.name, cat.name);
}

Если говорить о разнице == и equals для enum-ов, её особо и нет.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 2Ведь enum хранит константы, и даже сравнивая через == аналогичные значения, мы будем получать true, так как ссылки будут всегда на одни и те же объекты.
 
Ну и при использовании equals у нас также будет правильно отрабатывать функционал, тем более если вы зайдёт в тело метода equals для enum-а, увидите, что в классе Enum реализация метода следующая:Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 3То есть внутри — старое доброе сравнение по ссылкам! Подводя итог: для enum сравнение и через ==, и через equals корректное.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 4
74. Что делает метод ordinal() в Enum?
При вызове метода int ordinal() на элементе enum-а мы получим порядковый номер с нуля этого значения в общем ряде перечислений.
 
Давайте используем данный метод на одном элементе из предыдущего рассмотренного enum-а — Role:
 
System.out.println(Role.DIRECTOR.ordinal());

 Соответственно, в консоли выведется:

2
75. Можно ли использовать Enum c TreeSet или TreeMap в Java?
Использование enum типов в TreeSet и TreeMap допустимо.
 
И мы можем написать:
 
TreeSet<Role> treeSet = new TreeSet<>();
treeSet.add(Role.SECURITY_GUARD);
treeSet.add(Role.DIRECTOR);
treeSet.add(Role.TEACHER);
treeSet.add(Role.STUDENT);
treeSet.forEach(System.out::println);

И в консоли будет выведено:

STUDENT
TEACHER
DIRECTOR
SECURITY_GUARD

Мы получили вывод не по алфавиту. Дело в том, что если мы используем элементы enum-а для значений TreeSet или как ключи для TreeMap, элементы сортируются по их естественному порядку (по порядку, в котором они и заданы в enum).
 
Понимание этих особенностей помогает нам писать код качественнее.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 5
76. Как связаны методы ordinal() и compareTo() в Enum?
Как было сказано ранее, ordinal() возвращает порядковый номер значения в общем списке перечислений.
 
Также в разборе предыдущего вопроса вы увидели, что элементы перечислений, попав, например, в TreeSet (отсортированное множество) принимают порядок, в котором они объявлены в enum. И как мы знаем, TreeSet и TreeMap сортируют элементы посредством вызова у них метода compareTo() интерфейса Comparable.
 
Из этого можно сделать предположение, что класс Enum имплементирует интерфейс Comparable, реализуя его в метод compareTo(), внутри которого и используется ordinal() для задания порядка сортировки.
 
Зайдя в класс Enum, мы видим подтверждение этого:Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 6И тело самого метода:Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 7Метод ordinal() тут не вызывается. Вместо этого используется переменная ordinal — порядковый номер элемента в перечислении.
 
Сам же метод ordinal() —Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 8— не более чем геттер для переменной ordinal.
77. Напишите пример EnumM
В вопросах рассмотренных выше я уже приводил примеры enum-ов и не вижу смысла дублировать код (например, вопрос номер 72 про конструктор в enum).
78. Можно ли использовать Enum в switch case?
Можно и нужно!
 
Оглядываясь на свою практику, отмечу, что одним из наиболее частых мест применения enum являются логические конструкции типа switch.
 
В таком случае вы можете предусмотреть все возможные вариации case, и после прописания логики для всех значений enum-а использование оператора default может даже не понадобиться! Ведь если вы используете String или числовое значение, например, типа int, вам может прийти не предусмотренное значение, что в свою очередь невозможно с использованием enum-а.
 
Как бы выглядел switch для рассмотренного ранее примера:
 
public void doSomething(Role role) {
   switch (role) {
       case STUDENT:
           // некая логика для STUDENT
           break;
       case TEACHER:
           // некая логика для TEACHER
           break;
       case DIRECTOR:
           // некая логика для DIRECTOR
           break;
       case SECURITY_GUARD:
           // некая логика для SECURITY_GUARD
           break;
   }
}
79. Как получить все имеющиеся значения в экземпляре Enum?
Если нужно получить все экземпляры перечисления, есть метод values(), который возвращает массив всех доступных значений определенного enum-а в естественно порядке (в порядке задания в enum).

Пример:

Role[] roles = Role.values();
for (Role role : roles) {
   System.out.println(role);
}

В консоли будет вывод:

STUDENT
TEACHER
DIRECTOR
SECURITY_GUARD
Stream API
80.Что такое Stream в Java?
Java Stream — относительно новый способ взаимодействия с потоком данных, который в свою очередь позволяет более удобно и компактно обрабатывать большие данные, а также распараллеливать обработку данных между каким-то количеством потоков, что может дать прирост в производительности в использующем функционале.
 
Более глубоко данную тему в двух словах не рассказать, поэтому я оставлю здесь ссылку на статью, которая вам может погрузиться в данную тему.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 9
81. Назовите основные свойства транзакций
Тема называется — Stream API, но при этом вопрос по транзакции. Хмм…
 
Для начала давайте разберемся, что такое транзакция.
 
Транзакция — это группа последовательных операций с базой данных, которая представляет собой логическую единицу работы с данными.
 
Транзакция может быть выполнена либо целиком и успешно, соблюдая целостность данных и независимо от параллельно идущих других транзакций, либо не выполнена вообще, и тогда она не оказывает никакого эффекта.
 
Итак, у транзакций есть четыре основные свойства, которые сокращенно называют ACID.
 
Давайте разберем, как расшифровывается каждая буква данного сокращения:

A — Atomicity — атомарность — данное свойство гарантирует, что никакая транзакция не будет зафиксирована в системе частично. Будут либо выполнены все её подоперации, либо не выполнено ни одной (всё либо ничего).

С — Consistency — согласованность — свойство, гарантирующее, что каждая успешная транзакция зафиксирует только допустимые результаты. То есть, это гарантия того, что при успешной транзакции будут выполнены все правила, ограничения которые предъявляет система к конкретным данным, иначе транзакция не будет выполнена и данные в системе вернутся к прежнему состоянию.

I — Isolation — изолированность — свойство, которое говорит о том, что во время выполнения транзакции параллельные транзакции не должны оказывать влияния на ее результат. Это свойство ресурсозатратно, поэтому как правило оно выполняется частично, допуская определенные уровни изоляций, которые решают определенные изоляционные проблемы. Подробнее мы это обсудим в следующем вопросе.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 10D — Durability — стойкость — данное свойство гарантирует, что если пользователь получил подтверждение от системы, что транзакция выполнена, он может быть уверен, что сделанные им изменения не отменятся из-за какого-либо сбоя. То есть, вы можете быть уверены, что какой-нибудь сбой операционной системы ничего не сделает с вашими данными, если вы уже получили подтверждение успешного выполнения вашей транзакции.
82. Какие есть уровни изоляции транзакций?
Как я сказал ранее, обеспечение пункта ACID изолированности — ресурсозатратный процесс. Поэтому, это свойство выполняется частично. Есть различные уровни изолированности, и чем этот уровень выше, тем это более сильный удар по производительности.
 
Перед тем как перейти к уровням изоляций транзакций, нам нужно рассмотреть различные проблемы недостаточной изолированности транзакций:
фантомное чтение — при повторном вызове одной и той же выборки (одного и того же запроса) в рамках одной транзакции полученные данные различаются, что происходит из-за вставок данных другой транзакцией;

неповторяющееся чтение — при повторном вызове одной и той же выборки (одного и того же запроса) в рамках одной транзакции полученные данные различаются, что происходит из-за изменений (update) и удалений данных другой транзакцией;

грязное чтение — процесс чтения данных, добавленных или измененных транзакцией, которая впоследствии не подтвердится (откатится), т.е. чтение недействительных данных;

потерянное обновление — при одновременном изменении одних и тех же данных разными транзакциями теряются все изменения, кроме последнего (напоминает проблему “состояние гонки” в многопоточной среде).

Уровни изоляций транзакций как раз и характерезуются тем, от каких проблем изолированности они защищают.

Рассмотрим в виде таблицы уровни изоляций и то, от каких проблем они защищают:
Уровень изоляции	Фантомное чтение	Неповторяющееся чтение	Грязное чтение	Потерянное обновление
SERIALIZABLE	+	+	+	+
REPEATABLE READ	-	+	+	+
READ COMMITTED	-	-	+	+
READ UNCOMMITTED	-	-	-	+
NONE	-	-	-	-
И не забывайте обратную сторону медали: чем больший будет уровень изоляции, тем дольше будут отрабатывать транзакции (при параллельном выполнении нескольких транзакций).

Если возникло желание поглубже копнуть эту тему, вот отличная статья, с которой можно начать.
AI Native University

83. Какая разница между Statement и PreparedStatement?
И тут не сильно плавный переход на особенности технологии JDBC.

Итак, для начала давайте разберемся, что вообще такое Statement. Это объект, который используется для формирования SQL запросов.

В JDBC используется три его вида — Statement, PreparedStatement и CallableStatement.

CallableStatement мы сегодня рассматривать не будем: поговорим о различии между Statement и PreparedStatement.
Statement используется для выполнения простых SQL запросов без входящих, динамически вставляемых параметров. PrepareStatement используется с возможностью динамической вставки входных параметров.

Для задания параметров в PreparedStatement входные параметры в запросе прописываются как знаки вопроса, чтобы вместо них потом вставить некоторое значение с помощью различных сеттеров, таких как setDouble(), setFloat(), setInt(), setTime()…. В итоге вы не вставите в запрос данные не того типа.

PreparedStatement “прекомпилирован” и использует кеширование, поэтому его исполнение может происходить немного быстрее, чем запрос из объектов Statement. В результате SQL запросы, которые исполняются часто, в целях улучшения производительности создают в виде объектов PreparedStatement.

Statement уязвим к SQL инъекциям, в то время как PreparedStatement предотвращает их. Подробнее об устранении SQL инъекций и других best practices в безопасности Java читайте в этой статье.

Если вы положили начало в изучении технологии соединения Java приложения с Базой Данных — JDBC, советую начать с этой статьи.

Что ж, на данном моменте мы сегодня и сделаем остановку.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8 - 11
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Комментарии (6)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
Илья Уровень 30
12 июня 2021
thanks a lot)
Anonymous #2552385 Уровень 23
11 июня 2021
Кааак это все можно запомнить?? 😭😭😭
Justinian Уровень 41 Master
12 июня 2021
А ты попробуй сесть на лавке и понаблюдать за процессом ходьбы человека. Сколько сотен мышц участвует и как это все происходит, одни сгибаются, другие разгибаются, работают сухожилия, сосудистая система, мозг контролирует уровень гормонов, изменяется сердечный ритм, по разному регулируется работа легких, внутренние гироскопы и система предугадывания и ответной реакции постоянно находится в активном состоянии калькуляции баланса и обстановки под подошвой...Сотни систем, тысячи винтиков работают в связке чтобы обеспечить простую ходьбу.

А как это все можно сделать?

Ответ простой - практика, практика, практика, сотни и тысячи повторений превращают абстрактные знания в навыки, формируются нейронные цепочки.

Поэтому речь стоит не "в запомнить", а в "понять", прочитал статью, попытался понять ее в данный момент времени, если есть вопросы, гугль или раздел Помощь, покрутить в Идее.

И решать задачи, задачи, задачи, писать код, код, и потом, по мере практики, спустя дни, недели, месяцы, а то и годы, все начнет складываться в одну картинку.

У тебя не будет вопрос "я это помню или нет", у тебя это будет на уровне мышечной памяти, как навык, надо энамчик, я сделаю так  так и так. Откуда знаю? Поскольку разбирал, возвращался несколько раз, использовал в практике.

Единственное исключение, когда перед собесами нужно готовиться, но там зубрить идея так себе, разве что для автоматизированных тестов, хороший интервьюер сразу раскусит зазубренный но не понятый материал, один вопрос в сторону и ответ на него вместо тысячи слов сразу покажет, человек разбирается в том, о чем говорит или говорит но при этом вообще не понимает что именно.

Так что не переживай, всему свое время, ключ к крепким знаниям - практика и время, с этим тот же джава раш справляется хорошо. Время от времени, закрывать проблемные вопросы самому, подзабыл что-то, быстро гуглянул, ага, вспомнил, разобрал и пошел дальше.

Только когда будет N часов программирования, начнут те или иные вещи сходиться
Anonymous #2552385 Уровень 23
16 июня 2021
Спасибо! не зря говорят, что программирование это навык. Только я паникую, потому что это все вопросы с собеседований( и по ходу таки это надо знать, раз спрашивают
Anonymous #2552385 Уровень 23
16 июня 2021
а еще скисла, потому что на лямбдах сижу уже неделю, тяжко мне заходят
hidden #2641196 Уровень 51
10 июня 2021
Очень полезные статьи, спасибо. Как раз сейчас готовлюсь к марафону интервью.
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa

Java FullStack
Python FullStack
AI Native Developer
Web FullStack
Курсы
Задачи
Опросы
Игры
Помощь
График пинков
Стажировка
Пользователи
Форум
Чат
Статьи
Истории успеха
Активности
Отзывы

Статья
Поиск

Отзывы
О нас
CS50
JavaRush University

JavaRush
/
Java блог
/
Random
/
Разбор вопросов и ответов с собеседований на Java-разрабо...
Константин
1 уровень
 24 мая 2021
 27754 views
 4 comments
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7
Статья из группы Random
Hey everyone!
 
Программирование полно подводных камней. И нет практически ни одной темы, в которой вы не споткнетесь и не набьете шишки. Особенно это касается новичков.
 
Уменьшить количество этого можно лишь одним способом — учиться. В частности это касается подробных разборов самых базовых тем.
 
Сегодня продолжаю разбор вопросов 250+ с собеседований на Java-разработчика, которые хорошо охватывают базовые темы. Отмечу, что в списке есть и не совсем стандартные вопросы, позволяющие взглянуть на обычные темы под другим углом.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7 - 1
62. Что такое строковый пул и зачем он нужен?
В памяти в Java (Heap, о которой мы ещё поговорим) есть область — String pool, или строковый пул.
 
Она предназначена для хранения строковых значений. Другими словами когда вы создаете некую строку, например через двойные кавычки:

String str = "Hello world";
 
происходит проверка того, имеет ли строковой пул данное значение.
 
Если имеет, переменной str присваивается ссылка на это значение в пуле. Если же не имеет, создастся новое значение в пуле, и ссылка на него будет присвоена переменной str.
 
Рассмотрим пример:

String firstStr = "Hello world";
String secondStr = "Hello world";
System.out.println(firstStr == secondStr);

На экран будет выведено true. Мы помним, что == сравнивает именно ссылки — значит эти две ссылки ссылаются на одно и то же значение из строкового пула.
 
Это сделано для того, чтобы не плодить множество одинаковых объектов типа String в памяти, ведь как мы помним, String — неизменяемый класс, и если у нас будет множество ссылок на одно и то же значение, плохого в этом ничего нет. Теперь невозможна ситуация, при которой изменение значения в одном месте приводит к изменениям сразу для нескольких других ссылок.
 
Но тем не менее, если мы создадим строку через new:

String str = new String("Hello world");

создастся отдельный объект в памяти, который будет хранить данное строковое значение (и не важно, есть ли у нас уже такое значение в строковом пуле).
 
В качестве подтверждения:

String firstStr = new String("Hello world");
String secondStr = "Hello world";
String thirdStr = new String("Hello world");
System.out.println(firstStr == secondStr);
System.out.println(firstStr == thirdStr);

Мы получим два false, и это значит, что у нас тут три разные значения, на которые ссылаются ссылки. Собственно, поэтому рекомендуется создавать строки просто через двойные кавычки.
 
Тем не менее, можно сложить (или получать ссылку) значения в строковой пул и при создании объекта через new. Для этого используем метод класса строки — intern(). Данный метод принудительно создает значение в строковом пуле, ну или получает ссылку на него, если оно уже хранится там. 
 
Вот пример:

String firstStr = new String("Hello world").intern();
String secondStr = "Hello world";
String thirdStr = new String("Hello world").intern();
System.out.println(firstStr == secondStr);
System.out.println(firstStr == thirdStr);
System.out.println(secondStr == thirdStr);

ALL IN ONE


в результате мы получим в консоли три значения true, а значит, все три переменные ссылаются на одну и ту же строку.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7 - 2
63. Какие GOF-шаблоны применяются в строковом пуле?
В строковом пуле явно прослеживается GOF шаблон — легковес (flyweight), иначе его называют поселенец. Если же вы увидели тут ещё какой-то шаблон — делитесь в комментарии.
 
Ну а мы поговорим о шаблоне легковесе.
 
Легковес — структурный шаблон проектирования, при котором объект, представляющий себя как уникальный экземпляр в разных местах программы, по факту не является таковым. Легковес экономит память, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в каждом объекте.
 
Для понимания сути рассмотрим самый простой пример. Предположим, у нас есть интерфейс сотрудника:

public interface Employee {
   void work();
}

И есть некоторые реализации, например, юрист:
 
public class Lawyer implements Employee {

   public Lawyer() {
       System.out.println("Юрист взят в штат.");
   }

   @Override
   public void work() {
       System.out.println("Решение юридических вопросов...");
   }
}

И бухгалтер:

public class Accountant implements Employee{

   public Accountant() {
       System.out.println("Бухгалтер взят в штат.");
   }

   @Override
   public void work() {
       System.out.println("Ведение бухгалтерского отчёта....");
   }
}

Методы весьма условны: нам всего лишь нужно видеть, что они выполняются. Такая же ситуация и с конструктором. Благодаря выводу в консоли мы будем видеть, когда создаются новые объекты.
 
Также у нас есть отдел сотрудников, задача которого — выдавать запрашиваемого сотрудника, если же его нет — нанимать в штат и выдавать в ответ на запрос:
 
public class StaffDepartment {
   private Map<String, Employee> currentEmployees = new HashMap<>();

   public Employee receiveEmployee(String type) throws Exception {
       Employee result;
       if (currentEmployees.containsKey(type)) {
           result = currentEmployees.get(type);
       } else {
           switch (type) {
               case "Бухгалтер":
                   result = new Accountant();
                   currentEmployees.put(type, result);
                   break;
               case "Юрист":
                   result = new Lawyer();
                   currentEmployees.put(type, result);
                   break;
               default:
                   throw new Exception("Данный сотрудник в штате не предусмотрен!");
           }
       }
       return result;
   }
}

То есть логика простая: если есть данная единица — верни её, если нет — создай, помести в хранилище (что-то вроде кеша) и отдай назад.
 
А теперь давайте посмотрим, как это всё работает:
 
public static void main(String[] args) throws Exception {
   StaffDepartment staffDepartment = new StaffDepartment();
   Employee empl1  = staffDepartment.receiveEmployee("Юрист");
   empl1.work();
   Employee empl2  = staffDepartment.receiveEmployee("Бухгалтер");
   empl2.work();
   Employee empl3  = staffDepartment.receiveEmployee("Юрист");
   empl1.work();
   Employee empl4  = staffDepartment.receiveEmployee("Бухгалтер");
   empl2.work();
   Employee empl5  = staffDepartment.receiveEmployee("Юрист");
   empl1.work();
   Employee empl6  = staffDepartment.receiveEmployee("Бухгалтер");
   empl2.work();
   Employee empl7  = staffDepartment.receiveEmployee("Юрист");
   empl1.work();
   Employee empl8  = staffDepartment.receiveEmployee("Бухгалтер");
   empl2.work();
   Employee empl9  = staffDepartment.receiveEmployee("Юрист");
   empl1.work();
   Employee empl10  = staffDepartment.receiveEmployee("Бухгалтер");
   empl2.work();
}

И в консоли, соответственно, будет вывод:

Юрист взят в штат.
Решение юридических вопросов...
Бухгалтер взят в штат.
Ведение бухгалтерского отчёта....
Решение юридических вопросов...
Ведение бухгалтерского отчёта....
Решение юридических вопросов...
Ведение бухгалтерского отчёта....
Решение юридических вопросов...
Ведение бухгалтерского отчёта....
Решение юридических вопросов...
Ведение бухгалтерского отчёта...

Как вы видите, всего было создано лишь два объекта, которые при этом многократно переиспользовались. 
 
Пример весьма простой, но он наглядно демонстрирует как применение данного шаблона может сэкономить наши ресурсы. Ну и как вы заметили, логика данного паттерна уж больно похожа на логику работы страхового пула.
 
Подробнее о разновидностях GOF паттернов вы можете почитать в этой статье.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7 - 3
64. Как разделить строку на части? Приведите пример соответствующего кода
Очевидно, что в данном вопросе речь идёт о методе split. У класса String есть две вариации данного метода:
 
String split(String regex);

 и 
 
String split(String regex);

regex — это разделитель строки — некоторое регулярное выражение, по которому производится разделение строки на массив строк, например:
 
String str = "Hello, world it's Amigo!";
String[] arr = str.split("\\s");
for (String s : arr) {
  System.out.println(s);
}

В консоль будет выведено:

Hello,
world
it's
Amigo!

То есть, наше строковое значение было разбито на массив строк и разделителем послужил пробел (для разделения можно было использовать и не регулярное выражение пробела "\\s" и просто строковое выражение " ").
 
Второй, перегруженный метод имеет дополнительный аргумент — limit.
 
limit — максимально допустимое значение получаемого массива. То есть, когда строка будет уже разбита на предельное допустимое количество подстрок, дальнейшей разбивки не будет, и у последнего элемента будет “остаток” от возможно недоразбитой строки.
 
Пример:

String str = "Hello, world it's Amigo!";
String[] arr = str.split(" ", 2);
for (String s : arr) {
  System.out.println(s);
}

Вывод в консоли:

Hello,
world it's Amigo!

Как мы видим, если бы не ограничение limit = 2, последний элемент массива можно было бы разбить на три подстроки.Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7 - 4
65. Почему массив символов лучше строки для сохранения пароля?
Причин для предпочтения массива строке при сохранении пароля несколько:
 
1. Строковой пул и неизменяемость строк.
При использовании массива (char[]) мы можем явно стереть данные после того, как закончили работу с ним. Также мы можем сколько угодно переписывать массив, и действительного пароля нигде не будет в системе, даже до сбора мусора (достаточно изменить пару ячеек на недействительные значения). 
 
В то самое время String — immutable класс. То есть, если мы хотим изменить его значение, мы получим новое, а старое при этом останется в строковом пуле. Если мы захотим удалить String значение пароля, это может быть весьма сложным занятием, так как нужно, чтобы сборщик мусора удалил именно значение из String pool-а, и существует большая вероятность, что это String значение останется там надолго.
 
То есть, в данной ситуации String уступает массиву char в безопасности хранения данных.
 
2. При случайном выводе в консоли (или в логи) значения String выведется само значение:
String password = "password";
System.out.println("Пароль - " + password);

Вывод в консоли:

Пароль - password
 
В то же время, если случайно вывести в консоль массив:

char[] arr = new char[]{'p','a','s','s','w','o','r','d'};
System.out.println("Пароль - " + arr);

в консоли будет непонятная абракадабра:

Пароль - [C@7f31245a

На самом деле не абракадабра, а:

 [C — имя класса — массив char,
@ — разделитель, после которого —
7f31245a — шестнадцатеричный хешкод.
 
3. Официальный документ, руководство по архитектуре криптографии Java прямо указывает на хранение паролей в char[] вместо String:
“Казалось бы, логично собрать и сохранить пароль в объекте типа java.lang.String. Однако здесь есть предостережение: объекты типа String неизменяемы, т. е. Не определены методы, позволяющие изменять (перезаписывать) или обнулять содержимое объекта String после использования. Эта функция делает String объекты непригодными для хранения конфиденциальной информации, такой как пароли пользователей. Вместо этого вы всегда должны собирать и хранить конфиденциальную информацию о безопасности в массиве символов.”Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7 - 5
Enum
66. Дайте краткую характеристику Enum в Java
Enum — перечисление, набор строковых констант, объединенных общим типом. Объявляется через ключевое слово — enum.
 
Вот пример с enum — допустимые роли в некоторой школе:

public enum Role {
   STUDENT,
   TEACHER,
   DIRECTOR,
   SECURITY_GUARD
}

Слова, написанные большими буквами, и есть те самые константы перечисления, которые объявляются упрощенно, без использования оператора new.
 
Использование перечислений заметно упрощает жизнь, так как они помогают избежать ошибок и путаницы в наименованиях (так как может быть только определенный перечень значений).
 
Лично для меня они очень удобны при использовании в логической конструкции Switch.
67. Может Enum реализовывать (implements) интерфейсы?
Да. Ведь перечисления должны представлять не просто пассивные наборы (как например, роли).
 
В Java они могут представлять более сложные объекты с некоторым функционалом, поэтому вам, возможно, понадобится добавить к ним дополнительный функционал. 
 
Также это позволит использовать возможности полиморфизма, подставляя значение enum в места, где необходим тип имплементируемого интерфейса.
Java-университет

68. Может Enum расширять (extends) класс?
Нет, не может, так как перечисление — это подкласс по умолчанию универсального класса Enum <T>, где T представляет универсальный тип перечисления. Это не что иное, как общий базовый класс для всех типов перечисления языка Java. 
 
Преобразование enum в класс выполняется компилятором Java во время компиляции. Это расширение явно в коде не указывается, но всегда незримо присутствует.
69. Можно ли создать Enum без экземпляров объектов?
Как по мне, вопрос немного странный, ну или я его не до конца понял.
 
У меня есть две интерпретации:
 
1. Может ли быть enum без значений — да, конечно, это будет что-то вроде пустого класса — бессмысленно:
 
public enum Role {
}

И вызвав:

var s = Role.values();
System.out.println(s);

Мы получим в консоли:

[Lflyweight.Role;@9f70c54

(пустой массив значений Role)
 
2. Можно ли создать enum без оператора new — да, конечно. Как я выше уже сказал, для значений (перечислений) enum не нужно использовать оператор new, так как это — статические значения.
70. Можно ли мы переопределить метод toString() для Enum?
Да, конечно вы можете переопределить метод toString(), чтобы определить конкретный способ отображения вашего enum при вызове метода toString (при переводе enum в обычную строку, например, для вывод в консоль или логи).

public enum Role {
   STUDENT,
   TEACHER,
   DIRECTOR,
   SECURITY_GUARD;

   @Override
   public String toString() {
       return "Выбрана роль - " + super.toString();
   }
}

На этом на сегодня у меня всё, до следующей части!Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 7 - 6
Другие материалы серии:
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 1
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 2
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 3
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 4
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 5
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 6
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 8
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 9
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 10
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 11
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 12
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 13
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 14
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 15
Разбор вопросов и ответов с собеседований на Java-разработчика. Часть 16
Комментарии (4)
ЧТОБЫ ПОСМОТРЕТЬ ВСЕ КОММЕНТАРИИ ИЛИ ОСТАВИТЬ КОММЕНТАРИЙ,
ПЕРЕЙДИТЕ В ПОЛНУЮ ВЕРСИЮ
hidden #2322530 Уровень 41
27 мая 2021
Пример весьма простой, но он наглядно демонстрирует как применение данного шаблона может сэкономить наши ресурсы. Ну и как вы заметили, логика данного паттерна уж больно похожа на логику работы страхового пула.


когда ты даже перевести нормально не можешь даже.

Очевидно, что в данном вопросе речь идёт о методе split. У класса String есть две вариации данного метода:
String split(String regex);
 и
String split(String regex);

как бы вот:
public String[] split(String regex, int limit)
public String[] split(String regex)

ты снова забыл головой подумать.

когда jR ни на что больше не способен, кроме как коряво чужие тексты переводить. а другие им потокают))) прямо восхищаются. стыдно, очень стыдно должно быть.
Константин Уровень 1
27 мая 2021
"когда ты даже перевести нормально не можешь даже."  и  " jR ни на что больше не способен, кроме как коряво чужие тексты переводить" 
Перевести? Банальную опечатку ты интерпретируешь как перевод?
И я тебя удивлю, но я не из команды JS и переводами текстов не занимаюсь. 
Пишу статьи в свободное от работы время, и да иногда случаются опечатки, так как не  всегда хватает времени проверить всё досконально.
AlexGJuice Уровень 41
22 июня 2021
Продолжайте писать, даже и с опечатками, пусть читатель чувствует себя умным, найдя ошибки, если ему так охота. Сам то он не способен писать.
Токсичные люди встречаются везде.
Паровозик, который смог Уровень 41
24 мая 2021
Константин, от меня лично спасибо большое за труды! Отличная работа.
Добавьте, пожалуйста, в эту статью ссылки на предыдущие материалы, ну и в предыдущих статьях на эту. Вообще отлично будет :)
Обучение
Курсы программирования
Регистрация
Курс Java
Помощь по задачам
Цены
Задачи-игры
Сообщество
Пользователи
Статьи
Форум
Чат
Истории успеха
Активности
Компания
О нас
Контакты
Отзывы
FAQ
Поддержка
JavaRushJavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
Подписывайтесь
Язык интерфейса

Русский
"Программистами не рождаются" © 2026 JavaRush
Скачивайте наши приложения
Google Play
App Store
MastercardVisa



WsCube Tech Blog
Online Programs 
Digital Marketing
Data Science & Analytics
NEW
AI Programs
NEW
Full Stack Development
Cyber Security
App Development
Digital Marketing

Digital Marketing
Mentorship Program

Advanced AI Marketing
Bootcamp
NEW

Performance Marketing
Bootcamp

SEO Specialist
Bootcamp
On-Campus Programs 
Jaipur
NEW
Jodhpur
NEW
Jaipur Campus Programs

Digital Marketing
Mentorship Program

MERN Stack
with AI Engineering

Data Analytics
Mentorship Program

Data Science & AI
Mentorship Program
NEW
Masterclass
Free Resources
Alumni
Career Roadmap 
Blog
Search Articles & More...
About
Masterclass
Free Resources
Alumni
Career Roadmap 
Blog
Home
Blog
Interview Questions
155+ Java Interview Questions and Answers (2026 Updated)
155+ Java Interview Questions and Answers (2026 Updated)
Interview Questions
Web Development
By Virendra Soni
August 12, 2026
83 min read
Table of Contents
Java Interview Questions for Freshers & Beginners
Java String Interview Questions
Java Collections Framework Interview Questions
Intermediate Java Interview Questions for Experienced (2-5 Years)
Advanced Java Interview Questions and Answers for Experienced (5-10 Years)
Java Coding Interview Questions
List of Java 8 Interview Questions
Practice Java Programs for Interview Preparation
155+ Java Interview Questions and Answers (2026 Updated)
 Share This Article
Java remains one of the most widely used programming languages for building web, mobile, and enterprise applications. Its platform independence, reliability, and strong community support make it a preferred choice for developers worldwide. 

With companies hiring Java developers across backend, Android, and cloud roles, a clear understanding of core concepts and coding skills matters more than ever. Practising Java interview questions helps you revise important topics such as OOP, collections, exception handling, multithreading, and modern Java features. It also builds confidence and sharpens your problem solving. 

In this blog, you will find the most commonly asked questions, expert answers, and useful tips. Everything is grouped by topic and experience level, so freshers and experienced developers can both find what they need and prepare with ease. 

Java Interview Questions for Freshers & Beginners
Below are some commonly asked Java interview questions and answers for freshers that cover the basic concepts of Java. These questions can help you strengthen your fundamentals and prepare effectively for technical interviews. 

If you have recently completed a Java course or are looking for your first Java developer role, reviewing the questions below will help you gain confidence and improve your interview readiness. You can also revise the basics with our complete Java tutorial before you begin. 

1. What is Java? Explain its meaning and definition.
Java is a high-level, object-oriented programming language used to develop web applications, mobile apps, desktop software, games, and enterprise applications. It is known for its platform independence, which means Java programs can run on any system that has a Java Virtual Machine (JVM). 

Java was created by James Gosling and his team at Sun Microsystems, and was publicly released in 1995. It is secure, reliable, and easy to learn. Its "Write Once, Run Anywhere" (WORA) capability and extensive library support make it one of the most popular programming languages in the world. 

2. The syntax of Java is based on which programming language?
C and C++ programming languages form the basis of Java syntax. 

3. How is Java platform independent?
This is one of the most common Java interview questions asked in technical interviews. To answer it correctly, you should understand how Java programs can run on different operating systems without requiring any modifications. 

Platform independent means that a Java program can be written on one machine and executed on different operating systems without any changes. This is possible because Java code is compiled into bytecode, which is executed by the Java Virtual Machine (JVM). Since each platform has its own JVM, the same bytecode can run anywhere without hardware compatibility issues. 

4. When was Java developed?
Java development began in 1991, and first public release was 1995. 

5. Who developed the Java programming language?
Java was developed by James Gosling, a Canadian computer scientist, while working at Sun Microsystems. He is widely known as the founder of Java. Later, Sun Microsystems was acquired by Oracle Corporation.

6. What does ‘write once run anywhere’ mean in Java?
Write once, run anywhere, or WORA in Java means that it is a coding language where you write a program for some purpose only once and then use it or run it across multiple operating systems. For instance, you can write a program and run it on Windows, macOS, Android, Linux, etc.  

“Java’s write once, run anywhere” term was first initiated by Sun Microsystems, where the founder of this language used to work. This characteristic makes Java a portable programming language. 

Also Read: Top 70+ HTML Interview Questions and Answers 

7. What is Java programming used for? Explain its primary applications.
There is a wide range of use cases of Java programming language. Below are its main applications: 

a) Mobile App Development
Despite the introduction of Kotlin, Java is still used as a reliable programming language for Android app development. This coding language has the software development kits (SDKs) and libraries that are required to develop mobile apps.

b) Chatbot Development
Another use of Java is in chatbot development. Smart chatbots that use natural language processing (NLP) can be built using this programming language.

c) Development of Games
One of the most important applications of Java is in building games or gaming apps. Some of the world-famous games like Minecraft, Spiral Knights, SimCity, Saints Row 2, Asphalt 3, FIFA 11, Wakfu, Tokyo City Nights and many more are built on Java.

d) Cloud Computing
The "Write Once, Run Anywhere" characteristic of Java makes it highly suitable for cloud applications. Many cloud platforms and distributed systems rely on Java because of its portability, scalability, and reliability. 

e) Big Data
Big data platforms or tools heavily depend on Java, and it is considered a language on which the future of big data relies. This is because of its features that enable faster processing of large sets of data. 

f) Enterprise-grade Web Applications
Java is widely used to develop enterprise-grade web applications. Its high performance, scalability, security, and support for a wide range of server-side technologies make it a popular choice for large-scale software development. 

Many organizations use Java for enterprise applications, and popular platforms such as LinkedIn and IRCTC are built using Java technologies. 

g) Internet of Things (IoT)
In IoT technology, sensors and smart devices collect and process data to perform different tasks. Many of these devices run applications developed using the Java programming language because of its reliability and platform independence. 

h) Artificial Intelligence (AI)
As one of the most suitable programming languages for artificial intelligence (AI) projects, Java can be used to develop intelligent solutions. For instance, it is great for building search algorithms, neural networks, ML-based services, deep learning applications, etc.  

8. What is Java Virtual Machine (JVM)?
The Java Virtual Machine (JVM) is a software environment that executes Java bytecode and enables Java programs to run on different operating systems. It acts as a bridge between the Java program and the underlying hardware, making Java platform independent.


9. What is Java Runtime Environment (JRE)?
The Java Runtime Environment (JRE) is the environment required to run Java applications. It sits between the operating system and the Java program. 

The JRE contains:

The Java Virtual Machine (JVM) 
The core Java class libraries (java.lang, java.util, java.io, and others) 
Supporting files and configuration needed at runtime 
Important point for modern interviews: Oracle stopped distributing a separate, standalone JRE from Java 11 onwards. Instead, applications ship with the JDK, or a custom, trimmed-down runtime image is created using the jlink tool. The Java Plug-in (the browser plugin) and Java Web Start were also removed in Java 11. 

Relationship to remember: JRE = JVM + class libraries, and JDK = JRE + development tools. 

10. What is Java SE (Standard Edition)?
Java Standard Edition, abbreviated as Java SE, is a computing platform on which programmers and developers build and deploy Java-based projects. This platform comes with plenty of Java libraries and APIs, including Java.util, Java.net, Java.math, Java.io, and many more. 

11. What are operators in Java?
This is also one of the basic questions for Java interviews that tests your understanding of fundamental programming concepts. 

Java operators are symbols used to perform different operations on variables and values. Each operator has a specific purpose or functionality. 

For example, the + operator is used for addition, - for subtraction, * for multiplication, and / for division. 

12. What are the different types of Java operators?
You can classify the operators in Java into five categories, as mentioned below: 

a) Java Arithmetic operators
Arithmetic operators are used to perform mathematical calculations on numeric values.

+ 	Addition 
- 	Subtraction 
* 	Multiplication 
/ 	Division 
% 	Modulo 
b) Java Unary operators
Unary operators are used to perform operations on a single operand, such as increasing or decreasing its value.  

Unary minus (-) 	To make a value negative 
Unary plus (+) 	Generally not used as values are positive by default 
Increment (++) 	To increase the value by 1 
Decrement (--) 	To decrease the value by 1 
Inverting (!) 	To invert the value 
c) Java Assignment operators
Assignment operators are used to assign values to variables and perform operations while updating the variable's value. 

Operator 	Presentation 	Meaning 
= 	X = Y 	X = Y 
+= 	X += Y 	X = X + Y 
-= 	X -= Y 	X = X - Y 
*= 	X *= Y 	X = X * Y 
%= 	X %= 	X = X % Y 
d) Java Relational or comparison operators
Relational or comparison operators are used to compare two values in Java. They check conditions such as equality, inequality, greater than, less than, greater than or equal to, and less than or equal to.  

These operators return a boolean value (true or false) based on the comparison result. 

Operator 	Meaning 
== 	Is equal to 
!= 	Is not equal to 
> 	Is greater than 
< 	Is lesser than 
>= 	Is greater than or equal to 
<= 	Is less than or equal to 
e) Java Logical operators
Logical operators are used to combine or modify conditions in Java. They help make decisions based on multiple conditions and return a boolean value (true or false). 

Operator 	Meaning 
&& 	Logical AND 
|| 	Logical OR 
! 	Logical NOT 
f) Java Bitwise operators
Bitwise operators work on individual bits of integer values. 

Operator 	Meaning 
& 	Bitwise AND 
| 	Bitwise OR 
^ 	Bitwise XOR 
~ 	Bitwise complement (inverts every bit) 
g) Java Shift operators
Shift operators move the bits of a number left or right. 

Operator 	Meaning 
<< 	Left shift 
>> 	Signed right shift, preserves the sign bit 
>>> 	Unsigned right shift, always fills with 0 
h) Java Ternary operator
The ternary operator ? : is a shorthand for an if-else statement. 

java 

int max = (a > b) ? a : b;
i) instanceof operator 
The instanceof operator checks whether an object is an instance of a particular class or interface and returns a boolean.

java 

if (obj instanceof String) { 
    // obj is a String 
}
Since Java 16, pattern matching for instanceof allows the check and the cast in a single step: 

java 

if (obj instanceof String s) { 
    System.out.println(s.length()); 
}
13. What is JIT compiler in Java?
The JIT (Just-In-Time) compiler is a component of the JVM. It converts frequently executed bytecode into native machine code at runtime, so that the JVM can run the compiled code directly instead of interpreting the same bytecode repeatedly. 

How it fits into execution:

javac compiles the source code into bytecode (.class files). 
The JVM loads the bytecode and begins executing it through the interpreter. 
The JIT compiler identifies "hot" methods, the ones being called repeatedly, and compiles them to native machine code. 
Subsequent calls run the compiled native code, which significantly improves performance. 
This is why Java applications typically get faster after they have been running for a while, a behaviour often called "warming up". 

14. What is a Java class?
A class in Java is a blueprint or template used to create objects. It defines the properties (data members) and behaviors (methods) that objects of that class will have. 

In simple terms, a class represents a category, while objects are the individual items that belong to that category. All objects created from the same class share similar characteristics and behaviors. 

For example, in an online shopping store, "Mobile" can be a class, while different smartphones are objects. Although the smartphones may vary in brand and model, they all have common features such as a camera, RAM, calling functionality, and messaging capabilities. 

15. What is a package in Java?
A package in Java is a collection of related classes, interfaces, and sub-packages that are grouped together based on their functionality. It helps organize code in a structured manner and makes large applications easier to manage. 

The main purpose of using packages is to improve code organization, prevent naming conflicts, and provide access control for classes and interfaces. 

There are two types of packages in Java:

Built-in packages 
User-defined packages 
Built-in packages, such as Java.lang, Java.util, Java.io, and Java.net, are provided by the Java API and contain commonly used classes and interfaces. Developers can also create their own packages, known as user-defined packages, to organize application-specific code. 

16. What are keywords in Java?
Keywords in Java programming are actually some predefined words in syntax that a programmer can’t use in the form of classes, methods, identifiers, or variables. These are also known as reserved words in Java. 

17. How many keywords are there in Java?
Java has 52 reserved keywords that have predefined meanings and cannot be used as identifiers such as variable names, class names, or method names. 

Keywords in Java:

abstract, assert, boolean, break, byte, case, catch, char, class, const (unused), continue, default, do, double, else, enum, extends, final, finally, float, for, goto (unused), if, implements, import, instanceof, int, interface, long, native, new, package, private, protected, public, return, short, static, strictfp, super, switch, synchronized, this, throw, throws, transient, try, void, volatile, and while. 

18. What are the key features of Java?
It is one of the basic Java interview questions for freshers, and sometimes for experienced professionals as well.

Here are the top 10 features of Java that you must know:

a) Simple, Clean, Easy to Learn
One of the best things about Java is that it is easy to learn and understand, even for beginners. Its syntax is simple as it is based on basic languages like C++. The code written in Java is also clean and easy to run. 

b) Object-oriented Programming Language
Java is an object-oriented programming language because it is based on classes and objects. It supports key OOP concepts such as encapsulation, inheritance, polymorphism, and abstraction. 

c) Java is Both Compiled and Interpreted
Java is both a compiled and interpreted language. The source code is first compiled into bytecode, which is then interpreted and executed by the Java Virtual Machine (JVM). 

d) Java is Platform Independent
This is one of the top features of Java programming. The meaning of platform-independent here is that you can write a Java program on one machine and execute it on other machines or platforms. It has become possible because of the BYTE code.  

e) Portability
Java is portable because of its platform independence and architecture-neutral design. Java programs are compiled into bytecode, which can run on any system that has a Java Virtual Machine (JVM). This allows the same code to be executed on different hardware and operating systems without modification. 

f) Robust Programming Language
The abilities of Java, like garbage collection and exception handling, make it a solid programming language.  

g) Highly Secure
Java is known for its strong security features, which help developers build reliable and secure applications. Features such as bytecode verification, automatic memory management, and runtime security checks reduce common security risks, making Java a popular choice for enterprise-grade application development. 

h) Java Multithreading Features
The multithreading feature helps in writing code that can perform multiple tasks simultaneously. Moreover, the thread tasks consume less processing power and memory.  

i) Easy Interpretation
Regardless of the computer architecture, Java programs can be run and interpreted on any type of machine. You can call it architecture-neutral language.  

j) High Performance
Java offers high performance through features such as the Just-In-Time (JIT) compiler, which converts bytecode into native machine code at runtime. This helps Java applications run faster and more efficiently. 

19. What is an object in Java?
Since Java is an object-oriented programming language, classes and objects are among its most important concepts. Understanding objects is essential for answering many Java interview questions. 

An object is an instance of a class in Java. It is created from a class using the new keyword. Every object has its own identity, state (attributes), and behavior (methods), similar to real-world entities. 

Example: If Car is a class, then a specific car such as a Honda City can be considered an object. The car's color and model represent its state, while actions like starting, stopping, and accelerating represent its behavior. 

20. What is the difference between Java and JavaScript?
There are several differences between Java and JavaScript. Whether you are a fresher or an experienced professional, this is among the top Java interview questions for you. Below, we have provided a tabular comparison of Java vs JavaScript so that it becomes easier for you to understand the main differences. 

Java 	JavaScript 
Object-oriented programming language. 	Multi-paradigm scripting language with prototype-based objects. 
Statically typed. Variables must be declared with a type. 	Dynamically typed. Types are resolved at runtime. 
Strongly typed. 	Loosely typed, with implicit type coercion. 
Compiled to bytecode, then executed by the JVM. 	Interpreted and JIT-compiled by a JavaScript engine such as V8. 
Runs on the JVM. Needs the JDK to compile and a runtime to execute. 	Runs in a browser engine or in a server runtime such as Node.js. 
Supports multithreading through the Thread class and the Executor framework. 	Single-threaded event loop model. Concurrency is handled through async callbacks, Promises, and Web Workers. 
Objects are created from classes. 	Objects are prototype-based, though class syntax has been available since ES6. 
Higher memory consumption. 	Lower memory consumption. 
Files use the .java extension. 	Files use the .js extension. 
Mainly used for backend, enterprise, and Android development. 	Used for both frontend and backend development. 
Recommended Professional
Certificates






21. Which Java class is considered a superclass of all other classes?
The Object class is the superclass of all classes in Java. Every Java class directly or indirectly inherits from the Object class. 

22. Is it possible for a class to extend itself?
No, a class cannot extend itself in Java. Allowing a class to inherit from itself would create a cyclic inheritance relationship, which is not permitted by the Java compiler. 

23. What is the difference between Java and C++ programming?
Another important topic among the questions asked in Java interviews is the difference between Java and C++ programming languages. Understanding these differences can help you answer technical interview questions more confidently. To make it easier to understand, we have provided the following comparison between Java and C++. 

Java 	C++ 
Platform independent 	Platform dependent 
Uses both a compiler and JVM interpreter 	Uses a compiler 
Automatic memory management through Garbage Collection 	Manual memory management 
Supports object-oriented programming 	Supports both procedural and object-oriented programming 
Does not support pointers directly 	Supports pointers 
Does not support the goto statement 	Supports the goto statement 
Developed by James Gosling 	Developed by Bjarne Stroustrup 
Used for web, mobile, desktop, and enterprise applications 	Commonly used for system software, game development, and high-performance applications 
Rich standard library and APIs 	Large collection of standard libraries 
Follows the "Write Once, Run Anywhere" principle 	Requires separate compilation for different platforms 
24. Explain the difference between JDK, JRE, and JVM
One of the most common Java basic interview questions for freshers is understanding the difference between JDK, JRE, and JVM. The table below provides a simple comparison of their features and functions: 

JDK 	JRE 	JVM 
Java Development Kit 	Java Runtime Environment 	Java Virtual Machine 
A software development kit used to develop, compile, and debug Java applications. 	A runtime environment used to run Java applications. 	A virtual machine that executes Java bytecode and enables platform independence. 
Contains development tools such as the compiler, debugger, and documentation tools. 	Contains JVM and class libraries required to run Java programs. 	Responsible for loading, verifying, and executing Java bytecode. 
Platform-dependent. 	Platform-dependent. 	Platform-independent. 
Primarily used during application development. 	Primarily used for running Java applications. 	Provides the execution engine for Java programs. 
JDK = JRE + Development Tools 	JRE = JVM + Class Libraries 	Part of the JRE that executes Java bytecode. 
25. Is it possible to assign a superclass to a subclass in Java?
No, a superclass object cannot be directly assigned to a subclass reference in Java because a superclass does not contain all the properties and methods of its subclass. 

26. How to print text in Java?
The println() and print() methods are used to display text in Java. 

a) println() Example
The println() method prints the text and moves the cursor to the next line. 

public class Main { 
    public static void main(String[] args) { 
        System.out.println("Hi There!"); 
        System.out.println("Welcome to Java!"); 
        System.out.println("Let's learn Java Interview Questions!"); 
    } 
}
Output:
Hi There! 
Welcome to Java! 
Let's learn Java Interview Questions!
b) print() Example
The print() method prints the text without moving to a new line. 

public class Main { 
    public static void main(String[] args) { 
        System.out.print("Hi There! "); 
        System.out.print("I am learning Java."); 
    } 
}
Output:
Hi There! I am learning Java.
27. What is the main() method in Java?
The main() method is the entry point of a Java program. The Java Virtual Machine (JVM) starts program execution from the main() method. Without it, a standalone Java application cannot run. 

Syntax:
public static void main(String[] args)
public – Accessible from anywhere. 
static – Can be called without creating an object. 
void – Does not return any value. 
String[] args – Stores command-line arguments passed to the program. 
28. What are variables in Java?
Variables in Java are named memory locations used to store data values. They allow a program to store, modify, and retrieve information during execution. Each variable must be declared with a specific data type, such as int, float, char, or String. 

Example:
int age = 25; 
String name = "John";
In this example, age and name are variables that store an integer value and a string value, respectively. 

29. What are the different data types in Java?
Data types in Java specify the type of data that a variable can store. Java data types are broadly divided into two categories:

1. Primitive Data Types
These are predefined data types provided by Java. 

byte 
short 
int 
long 
float 
double 
char 
boolean 
2. Non-Primitive Data Types
These data types are created by the programmer and can store multiple values or complex data. 

String 
Arrays 
Classes 
Interfaces 
Objects 
Java uses these data types to define the kind of value a variable can hold and the operations that can be performed on it. 

30. What is type casting in Java?
Type casting in Java is the process of converting a value from one data type to another. It is commonly used when working with different numeric data types.

There are two types of type casting in Java:

1. Widening Casting (Implicit) – Converts a smaller data type to a larger data type automatically. 

Example: int to long, float to double 

2. Narrowing Casting (Explicit) – Converts a larger data type to a smaller data type manually using a cast operator. 

Example: double to int, long to short 

Example:
double num = 10.5; 
int value = (int) num;
In this example, the double value 10.5 is converted to the int value 10. 

31. What is the difference between primitive and non-primitive data types in Java?
Primitive and non-primitive data types differ in terms of how they store data and their functionality. The table below highlights the main differences:

Primitive Data Types 	Non-Primitive Data Types 
Store simple values directly. 	Store references to objects. 
Predefined by Java. 	Created by programmers or provided by Java libraries. 
Have a fixed size. 	Size can vary depending on the data. 
Cannot call methods. 	Can have methods and properties. 
Faster and use less memory. 	Generally require more memory. 
Examples: int, char, boolean, double. 	Examples: String, Arrays, Classes, Interfaces, Objects. 
32. What is the difference between a class and an object in Java?
A class is a blueprint or template used to define the properties and behaviors of objects, whereas an object is an instance of a class that contains actual data and can perform actions defined by the class. The table below clearly shows the differences between a class and an object: 

Class 	Object 
A blueprint or template for creating objects. 	An instance of a class. 
Defines attributes and methods. 	Contains actual values for attributes. 
Does not occupy memory until objects are created. 	Occupies memory when created. 
Used to create multiple objects. 	Represents a real-world entity. 
Example: Car 	Example: Honda City, Hyundai i20 
Example: If Car is a class, then a specific car such as Honda City is an object created from that class. 

33. What are comments in Java?
Comments in Java are non-executable lines of text used to explain code, improve readability, and make programs easier to understand. The Java compiler ignores comments during program execution. 

Java supports three types of comments:

Single-line comment: // This is a comment 
Multi-line comment: /* This is a multi-line comment */ 
Documentation comment: /** This is a documentation comment */ 
Comments help developers understand the purpose and functionality of the code without affecting its execution. 

34. What is the use of the static keyword in Java?
This is one of the most asked Java interview questions because the static keyword is a fundamental concept used in class-level programming. 

The static keyword is used to declare class-level variables, methods, blocks, and nested classes. A static member belongs to the class rather than an object, which means it can be accessed without creating an instance of the class. This helps save memory and allows shared access across all objects of the class. 

35. What are command-line arguments in Java?
Command-line arguments are values passed to a Java program when it is executed from the command line. These arguments are stored in the String[] args parameter of the main() method and can be used to provide input to the program at runtime. 

Example:
public class Main { 
    public static void main(String[] args) { 
        System.out.println("Hello " + args[0]); 
    } 
}
If the program is run as:
Java Main John
Output:
Hello John
In this example, John is passed as a command-line argument and stored in args[0]. 

36. What is the use of the new keyword in Java?
The new keyword in Java is used to create objects of a class. When an object is created using new, memory is allocated for the object, and its constructor is called to initialize it. 

Example:
Car car = new Car();
In this example, the new keyword creates an object of the Car class and assigns its reference to the car variable. 

37. Is Java a pure object-oriented language?
No, Java is not a pure object-oriented language. The main reason is that Java supports eight primitive data types (byte, short, int, long, float, double, char, boolean) which are not objects. 

Other reasons commonly cited:

Static methods and variables belong to the class, not to any object, and can be used without creating an object. 
Wrapper classes exist precisely because primitives are not objects. 
Languages such as Smalltalk and Ruby, where everything is an object, are considered pure object-oriented. 

38. Is Java pass by value or pass by reference?
Java is always pass by value. There is no pass by reference in Java. 

The confusion arises with objects. When an object is passed to a method, a copy of the reference is passed, not the object itself. This means:

Modifying the object's contents inside the method does affect the original object, because both references point to the same object. 
Reassigning the parameter to a new object inside the method does not affect the original, because only the copy of the reference was changed. 
static void modify(StringBuilder sb) { 
    sb.append(" World");              // affects the original 
    sb = new StringBuilder("New");    // does NOT affect the original 
}
39. Why does Java not support pointers?
Java deliberately omits explicit pointers for three reasons: 

Security. Pointers allow direct memory access, which would let code read or modify memory it should not have access to. 
Simplicity. Pointer arithmetic is a common source of bugs and is difficult for beginners. 
Garbage collection. The garbage collector needs to track all references reliably. Arbitrary pointer arithmetic would make this impossible. 
Java uses references instead, which point to objects but cannot be manipulated arithmetically.

40. What is the difference between instance variables, local variables, and class variables?
Instance Variable 	Local Variable 	Class (Static) Variable 
Declared inside a class but outside any method. 	Declared inside a method, constructor, or block. 	Declared inside a class with the static keyword. 
Each object has its own copy. 	Exists only while the method executes. 	One copy shared by all objects. 
Gets a default value automatically. 	Has no default value, must be initialised before use. 	Gets a default value automatically. 
Stored in the heap with the object. 	Stored on the thread's stack. 	Stored in the method area, allocated when the class loads. 
Accessed using an object reference. 	Accessible only within its block. 	Accessed using the class name. 
41. What are the default values of variables in Java?
Type 	Default Value 
byte, short, int, long 	0 
float, double 	0.0 
char 	'\u0000' (null character) 
boolean 	false 
Any object reference 	null 
An important qualifier: these defaults apply only to instance and static variables. Local variables have no default value and cause a compile-time error if used before being assigned. 

42. Can we override static, private, and final methods in Java?
Static methods: no. A subclass can declare a static method with the same signature, but this is method hiding, not overriding. Which method runs is decided at compile time based on the reference type, not at runtime based on the object. 
Private methods: no. Private methods are not inherited and are not visible to the subclass, so a method with the same name in the subclass is simply a new, unrelated method. 
Final methods: no. The final keyword explicitly prevents overriding. 
43. What is a marker interface in Java?
A marker interface is an interface with no methods and no fields. Its only purpose is to mark or tag a class so that the JVM or a framework can treat it differently at runtime. 

Common examples:

Serializable — marks a class as eligible for serialisation 
Cloneable — marks a class as safe to clone 
Remote — marks a class for RMI 
In modern Java, annotations are generally preferred over marker interfaces, because they carry metadata and do not affect the type hierarchy. 

44. What are varargs in Java?
Varargs, short for variable arguments, allow a method to accept any number of arguments of a given type. It was introduced in Java 5 and uses three dots after the type. 

public int sum(int... numbers) { 
    int total = 0; 
    for (int n : numbers) total += n; 
    return total; 
} 
 
sum();              // valid 
sum(1, 2);          // valid 
sum(1, 2, 3, 4);    // valid
Rules: a method can have only one varargs parameter, and it must be the last parameter in the list. Internally, varargs are treated as an array.

45. What is a covariant return type?
A covariant return type allows an overriding method in a subclass to return a more specific type than the method it overrides. This was introduced in Java 5. 

class Animal { 
    Animal reproduce() { return new Animal(); } 
} 
 
class Dog extends Animal { 
    @Override 
    Dog reproduce() { return new Dog(); }   // returns Dog, not Animal 
}
It removes the need for the caller to downcast the result, which makes the code cleaner and type-safe. 

46. What is a singleton class and how do you implement it?
A singleton class is one that allows only a single instance to exist for the entire application. It is used for shared resources such as configuration objects, logging, and connection pools. 

Thread-safe implementation using double-checked locking: 

class Singleton { 
    private static volatile Singleton instance; 
    private Singleton() {} 
 
    public static Singleton getInstance() { 
        if (instance == null) { 
            synchronized (Singleton.class) { 
                if (instance == null) { 
                    instance = new Singleton(); 
                } 
            } 
        } 
        return instance; 
    } 
}
The volatile keyword is essential here, otherwise a partially constructed object could be visible to another thread. 

Simplest and safest implementation, using an enum: 

java 

enum Singleton { 
    INSTANCE; 
    public void doSomething() { } 
}
The enum approach is recommended because it is thread-safe by default and is protected against reflection and serialisation attacks. 

47. What is the order of execution of static blocks, instance blocks, and constructors?
This appears frequently as an output-based interview question. The order is:

Static variables and static blocks, in the order they appear, once when the class is first loaded 
Instance variables and instance blocks, in the order they appear 
Constructor 
Steps 2 and 3 repeat for every object created. Step 1 runs only once.

java 

class Demo { 
    static { System.out.println("1. Static block"); } 
    { System.out.println("2. Instance block"); } 
    Demo() { System.out.println("3. Constructor"); } 
 
    public static void main(String[] args) { 
        new Demo(); 
        new Demo(); 
    } 
} 
// Output: 1, 2, 3, 2, 3
Java String Interview Questions
1. What is the String Pool in Java?
The String Pool, also called the String Constant Pool, is a special storage area inside heap memory where Java stores string literals. Its purpose is to save memory by reusing string objects instead of creating duplicates. 

When you create a string using a literal, Java first checks whether an identical string already exists in the pool. If it does, the existing reference is returned. If it does not, a new string is created in the pool. 

String s1 = "Java"; 
String s2 = "Java"; 
System.out.println(s1 == s2);   // true, both point to the same pooled object
Note: the String Pool was moved from PermGen to the heap in Java 7, which allowed it to be garbage collected and made much larger.

2. Why is String immutable in Java?
This is one of the most frequently asked Java interview questions for experienced developers. String is immutable, meaning once a String object is created its value cannot be changed. There are four main reasons for this design. 

String Pool: Pooling only works if strings cannot change. If one reference could modify a shared string, every other reference pointing to it would be affected. 
Security: Strings are used for usernames, database URLs, file paths, and network connections. If they were mutable, a value could be changed after a security check but before it is used. 
Thread safety: Immutable objects are inherently thread-safe. A String can be shared across threads with no synchronisation. 
Hashcode caching: String caches its hashcode after the first calculation. This makes String extremely efficient as a HashMap key, which would not be possible if the value could change. 
3. What is the difference between creating a String using a literal and using the new keyword?
String Literal 	new String() 
String s = "Java"; 	String s = new String("Java"); 
Stored in the String Pool. 	Always creates a new object in heap memory. 
Reused if the same value already exists in the pool. 	A new object is created even if an identical string already exists. 
More memory efficient. 	Uses more memory. 
String s1 = "Java"; 
String s2 = "Java"; 
String s3 = new String("Java"); 
 
System.out.println(s1 == s2);        // true, same pooled object 
System.out.println(s1 == s3);        // false, different memory locations 
System.out.println(s1.equals(s3));   // true, same content
4. What does the intern() method do in Java?
The intern() method moves a string into the String Pool, or returns the existing pooled reference if a string with the same value is already there. 

String s1 = new String("Java"); 
String s2 = s1.intern(); 
String s3 = "Java"; 
 
System.out.println(s1 == s3);   // false 
System.out.println(s2 == s3);   // true
It is useful when working with a large number of duplicate strings, for example strings read from a file or database, because interning them reduces memory usage. 

5. Why is a character array preferred over String for storing passwords?
Because String is immutable, a password stored in a String stays in memory until the garbage collector removes it, and you have no control over when that happens. If a memory dump is taken during that window, the password is visible in plain text. 

A character array can be explicitly overwritten as soon as it is no longer needed. 

java 

char[] password = getPassword(); 
// use the password 
Arrays.fill(password, ' ');   // wiped immediately 
This is also why JPasswordField.getPassword() returns a char[] and not a String.

6. What is the difference between == and equals() when comparing strings?
The == operator compares references, meaning it checks whether two variables point to the same object in memory. The equals() method compares the actual character content of the strings. 

String s1 = new String("Java"); 
String s2 = new String("Java"); 
 
System.out.println(s1 == s2);        // false, different objects 
System.out.println(s1.equals(s2));   // true, same content
For comparing string values, always use equals(). Use equalsIgnoreCase() when case should not matter. 

7. Why does String override equals() and hashCode()?
The default equals() inherited from Object compares references, which would make two strings with identical content compare as unequal. String overrides equals() to compare content instead. 

It also overrides hashCode() because the equals and hashCode contract requires that two objects considered equal must return the same hashcode. Without this, strings would not work correctly as keys in HashMap or HashSet. 

8. Which is faster for string concatenation, String, StringBuilder, or StringBuffer?
StringBuilder is fastest, followed by StringBuffer, with String being by far the slowest for repeated modification. 

Concatenating with String in a loop creates a new object on every iteration, which is very expensive. 
StringBuilder modifies the same internal character array and is not synchronised, so it has no locking overhead. 
StringBuffer does the same thing but is synchronised, which makes it thread-safe but slower. 
// Avoid this 
String result = ""; 
for (int i = 0; i < 1000; i++) { 
    result += i;    // creates 1000 objects 
} 
 
// Use this 
StringBuilder sb = new StringBuilder(); 
for (int i = 0; i < 1000; i++) { 
    sb.append(i);   // modifies one object 
}
Use StringBuilder in single-threaded code, and StringBuffer only when the same object is genuinely shared across threads. 

Note: String handling questions often come with a small code snippet, so it helps to practise running them yourself. You can test all of these examples in our online Java compiler without setting anything up locally.

Java Collections Framework Interview Questions
1. How does HashMap work internally in Java?
This is one of the most commonly asked advanced Java interview questions. A HashMap stores data as key-value pairs using an array of buckets.

How a value is stored: 
The hashCode() of the key is calculated. 
The hash is spread further to reduce collisions, using h ^ (h >>> 16). 
The bucket index is calculated as (n - 1) & hash, where n is the array length. 
The entry is stored in that bucket as a Node containing the hash, key, value, and a reference to the next node. 
How collisions are handled:
When two keys map to the same bucket, the entries are chained together in a linked list. From Java 8 onwards, if a single bucket grows to 8 or more nodes and the table capacity is at least 64, that bucket is converted into a red-black tree. This improves worst-case lookup from O(n) to O(log n). The bucket reverts to a linked list if it shrinks back to 6 nodes. 

Default values to remember:
Default initial capacity: 16 
Default load factor: 0.75 
Resize trigger: when size exceeds capacity multiplied by load factor, the table capacity is doubled and all entries are rehashed. 
How a value is retrieved:
The same hash and index calculation is performed, then the bucket is searched. equals() is used to identify the correct key within the bucket. 

2. What is the contract between equals() and hashCode()?
The contract has three rules:

If two objects are equal according to equals(), they must return the same hashCode(). 
If two objects have the same hashCode(), they are not necessarily equal. This is a hash collision and is normal. 
The hashCode() of an object must return the same value consistently, as long as the fields used in equals() have not changed. 
Why it matters: if you override equals() without overriding hashCode(), objects that are logically equal will land in different buckets in a HashMap or HashSet. The result is that you can put an object into a map and then fail to retrieve it with an equal key. 

This is why equals() and hashCode() must always be overridden together. 

3. What is the difference between HashMap, Hashtable, and ConcurrentHashMap?
HashMap	Hashtable	ConcurrentHashMap
Not synchronised. 	Synchronised on every method. 	Thread-safe using fine-grained locking. 
Fastest in single-threaded use. 	Slowest, because the entire map is locked. 	Fast in multi-threaded use. 
Allows one null key and multiple null values. 	Does not allow null keys or values. 	Does not allow null keys or values. 
Introduced in Java 1.2. 	Legacy class from Java 1.0. 	Introduced in Java 5. 
Iterators are fail-fast. 	Enumerations are not fail-fast. 	Iterators are weakly consistent, they do not throw ConcurrentModificationException. 
Use in single-threaded code. 	Effectively obsolete, avoid in new code. 	Use in multi-threaded code. 
Point worth adding: in Java 7, ConcurrentHashMap used segment-level locking with a default concurrency level of 16. From Java 8 it uses CAS operations and synchronises only on the head node of an individual bucket, which allows far higher concurrency. 

4. What is the difference between fail-fast and fail-safe iterators?
Fail-Fast 	Fail-Safe 
Throws ConcurrentModificationException if the collection is structurally modified during iteration. 	Does not throw an exception. 
Iterates over the original collection directly. 	Iterates over a copy or a snapshot of the collection. 
Detects changes using an internal modCount field. 	Changes made during iteration are not reflected. 
Used by ArrayList, HashMap, HashSet, Vector. 	Used by CopyOnWriteArrayList, ConcurrentHashMap. 
No extra memory overhead. 	Higher memory use, because a copy may be maintained. 
List<String> list = new ArrayList<>(List.of("a", "b", "c")); 
for (String s : list) { 
    if (s.equals("b")) { 
        list.remove(s);   // throws ConcurrentModificationException 
    } 
}
To remove safely during iteration, use the iterator's own remove() method or removeIf(). 

5. How does an ArrayList grow dynamically?
An ArrayList is backed by an internal array that is replaced with a larger one when it becomes full. 

The default capacity is 10, allocated lazily on the first add() call. 
When the array is full, a new array is created with a capacity of 1.5 times the old capacity, calculated as oldCapacity + (oldCapacity >> 1). 
All existing elements are copied into the new array. 
The new element is added. 
So the capacity grows 10, 15, 22, 33, and so on. Because resizing is infrequent, the cost of add() is described as amortised constant time. 

If you know roughly how many elements you will store, passing an initial capacity to the constructor avoids repeated resizing. 

6. What is the difference between Iterator and ListIterator?
Iterator	ListIterator
Traverses in the forward direction only. 	Traverses both forward and backward. 
Can be used with List, Set, and Map. 	Can be used with List only. 
Cannot obtain the index of an element. 	Provides nextIndex() and previousIndex(). 
Can only remove elements. 	Can add, remove, and replace elements using add() and set(). 
Methods: hasNext(), next(), remove(). 	Adds hasPrevious(), previous(), add(), set(). 
7. What is the difference between Collection and Collections?
Collection is an interface at the root of the collections hierarchy. List, Set, and Queue all extend it, and it defines core methods such as add(), remove(), and size().

Collections is a utility class in java.util that contains only static helper methods for working with collections, such as sort(), reverse(), shuffle(), min(), max(), unmodifiableList(), and synchronizedList().

8. What is the difference between a Queue and a Deque?
A Queue follows FIFO (First In First Out). Elements are added at the tail and removed from the head. Common implementations are LinkedList, PriorityQueue, and ArrayDeque.

A Deque, short for double-ended queue, allows insertion and removal at both ends. It can therefore be used as either a queue (FIFO) or a stack (LIFO). ArrayDeque is the standard implementation and is the recommended replacement for the legacy Stack class.

Deque<Integer> deque = new ArrayDeque<>(); 
deque.addFirst(1); 
deque.addLast(2); 
deque.pollFirst(); 
deque.pollLast();
9. How can you make a collection thread-safe or read-only in Java?
Thread-safe: 

java 

List<String> syncList = Collections.synchronizedList(new ArrayList<>()); 
Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>()); 
 
// Preferred for concurrent use 
List<String> cowList = new CopyOnWriteArrayList<>(); 
Map<String, String> concurrentMap = new ConcurrentHashMap<>();
Read-only: 

java 

List<String> readOnly = Collections.unmodifiableList(list); 
List<String> immutable = List.of("a", "b", "c");   // Java 9 and later 

Attempting to modify a read-only collection throws UnsupportedOperationException.
Expand the existing Comparable vs Comparator answer with this code 

java 

// Comparable, natural ordering, defined inside the class 
class Employee implements Comparable<Employee> { 
    int id; 
    String name; 
 
    public int compareTo(Employee other) { 
        return this.id - other.id; 
    } 
} 
Collections.sort(employeeList); 
 
// Comparator, custom ordering, defined outside the class 
Comparator<Employee> byName = (e1, e2) -> e1.name.compareTo(e2.name); 
Collections.sort(employeeList, byName); 
 
// Java 8 shorthand 
employeeList.sort(Comparator.comparing(e -> e.name));
Intermediate Java Interview Questions for Experienced (2-5 Years)
If you have 2–5 years of experience in Java development and are preparing for a job change, it is important to have a strong understanding of core Java concepts and their practical applications. 

Below are some of the most asked core Java interview questions and answers for experienced professionals. These questions can help you refresh your knowledge and prepare confidently for technical interviews. 

1. What is multithreading in Java?
Multithreading in Java is the process of executing multiple threads concurrently within a single program. It allows different parts of a program to run simultaneously, improving performance and making better use of CPU resources. 

The main purpose of multithreading is to create lightweight threads that can perform multiple tasks at the same time, resulting in faster and more efficient program execution. 

2. Which class is used for multithreading in Java?
Java provides several ways to create and manage threads. The main ones are: 

1. Extending the Thread class 

java 

class MyThread extends Thread { 
    public void run() { 
        System.out.println("Thread running"); 
    } 
} 
new MyThread().start();
2. Implementing the Runnable interface (preferred) 

java 

class MyTask implements Runnable { 
    public void run() { 
        System.out.println("Thread running"); 
    } 
} 
new Thread(new MyTask()).start();
3. Implementing Callable when the task needs to return a result or throw a checked exception. It is used with an ExecutorService and returns a Future. 

4. Using the ExecutorService from java.util.concurrent, which manages a pool of threads instead of creating them manually. This is the recommended approach in production code. 

Runnable is generally preferred over extending Thread because a Java class can implement multiple interfaces but can extend only one class. Extending Thread uses up that one inheritance slot. 

Suggested Reading: ReactJS Interview Questions and Answers

3. What is Java applet?
An applet was a small Java program embedded in a web page and executed inside a browser through a Java plugin. It was used to add dynamic content to web pages in the early years of Java. 

Applets are obsolete and no longer part of Java. The timeline is: 

Java 9 (2017): the Applet API was deprecated (JEP 289). 
Java 11 (2018): the appletviewer tool, the Java Plug-in, and Java Web Start were removed. Browsers had already dropped plugin support by then. 
Java 17 (2021): the Applet API was deprecated for removal (JEP 398). 
JDK 26 (2026): the entire java.applet package was removed (JEP 504). Java 25 is the last release that contains it. 
4. What is garbage collection in Java?
Garbage collection is one of the most important and commonly discussed topics in Java interviews. It is the process of automatically managing memory in Java applications. 

The Garbage Collector (GC) automatically identifies and removes objects that are no longer being used by the program. This frees up memory in the heap and helps optimize memory usage, improving the overall performance of Java applications. 

5. What if you use Java keywords as a variable or identifier?
Java keywords are reserved words and cannot be used as variable names, class names, method names, or other identifiers. If a keyword is used as an identifier, the program will generate a compile-time error. 

6. What is inheritance in Java?
Inheritance is an object-oriented programming (OOP) concept in Java that allows one class to acquire the properties and methods of another class. The class that inherits is called the subclass (child class), and the class being inherited from is called the superclass (parent class). 

Inheritance promotes code reusability, reduces duplication, and helps create a hierarchical relationship between classes. In Java, inheritance is implemented using the extends keyword. 

7. What is polymorphism in Java?
This is yet another important concept in the list of top Java interview questions and answers related to OOPS. 

Polymorphism in Java is an object-oriented programming (OOP) concept that means "many forms." In Java, it refers to the ability of a method, object, or class to take different forms and perform different actions based on the context. 

Polymorphism allows the same method name to behave differently for different objects or parameters. For example, a method can display different messages or perform different operations depending on the values or objects passed to it. This helps improve code flexibility, reusability, and maintainability. 

8. What is encapsulation in Java?
If you are preparing for Java interview questions for 3 years experience or more, encapsulation is one of the important concepts you should understand. 

Encapsulation in Java is the process of combining data (variables) and the methods that operate on that data into a single unit, known as a class. It also helps protect the data by restricting direct access from outside the class and allowing controlled access through methods such as getters and setters. 

An important point to remember is that encapsulation helps achieve data hiding. Once variables are declared as private, they cannot be accessed directly by other classes, which improves security and maintains the integrity of the data. 

9. What is serialization in Java?
Serialization in Java is the process of converting an object into a byte stream so that it can be stored in a file, transferred over a network, or saved for later use.

When needed, the byte stream can be converted back into an object through a process called deserialization. Serialization is commonly used for data storage, object persistence, and communication between applications. 

10. What is Java JDBC?
JDBC (Java Database Connectivity) is an API that enables Java applications to connect to and interact with databases. It allows developers to establish database connections, execute SQL queries, retrieve data, and update records directly from a Java program. 

JDBC acts as a communication bridge between a Java application and a database. With the appropriate JDBC driver, developers can connect to various databases such as MySQL, Oracle, PostgreSQL, and SQL Server. Because it is widely used in database-driven applications, JDBC is an important topic in core Java interview questions for experienced professionals. 

11. What is Java enum?
Enum in Java stands for enumeration. It is a data type that comes with a set of pre-defined constant values. These values are separated by a comma. The enum concept was brought to this programming as part of Java 5. For declaring the enums, the enum keyword is used. 

12. What is constructor overloading in Java?
The role of constructors in Java is to initialize the state of an object. When a class contains multiple constructors with different parameter lists, it is called constructor overloading. 

Constructor overloading allows a class to create and initialize objects in different ways based on the arguments passed during object creation. As a result, a single class can have multiple constructors to handle different initialization requirements. 

13. What is copy constructor in Java?
A copy constructor is a constructor that creates a new object by copying the values of another object of the same class. Java does not provide built-in copy constructors. 

14. Which keyword in Java is used to inherit a class? 
The extends keyword is used in Java to inherit a class. It allows a subclass to acquire the properties and methods of its parent class. 

Also Read: Java Full Stack Developer Roadmap: Full Learning Path 

15. What are the top benefits of inheritance in Java?
The following are the main benefits of Java inheritance: 

Code reusability 
Method overriding 
Ability to achieve runtime polymorphism 
Optimize duplicate code 
Improve the redundancy of the app 
Code flexibility so that it can be changed easily 
16. What are the different memory areas assigned by JVM?
The JVM allocates memory into five main areas to manage program execution efficiently: 

Method Area (Class Area) – Stores class metadata, methods, and static variables. 
Heap Memory – Stores objects and instance variables created during program execution. 
Stack Memory – Stores local variables, method calls, and execution frames for each thread. 
Program Counter (PC) Register – Keeps track of the current instruction being executed by a thread. 
Native Method Stack – Supports the execution of native (non-Java) methods. 
17. What are access modifiers in Java?
As a programming enthusiast, you should know about the access modifiers while preparing for the Java interview questions and answers.  

As the name suggests, the access modifiers in Java are used to manage the access level for classes, variables, methods, constructors, etc. The access can be changed or specified using these access modifiers.

Access modifiers are of four types:

Public 
Private 
Default 
Protected  
18. How many types of inheritance are there in Java?
There are five types of Java inheritance: 

Single-level inheritance 
Multi-level Inheritance 
Hierarchical Inheritance 
Multiple Inheritance 
Hybrid Inheritance 
Note: Java supports Single, Multilevel, and Hierarchical Inheritance through classes. Multiple and Hybrid Inheritance can be achieved using interfaces.

19. Can you restrict an object from inheriting its subclass? If yes, how?
Yes, a class can be restricted from being inherited by using the final keyword. A class declared as final cannot be extended by any other class. 

Example:
final class Vehicle { 
}
In this example, the Vehicle class cannot be inherited by another class. 

20. How can we remove duplicate elements from a list of numbers in Java 8?
In Java 8, duplicate elements can be removed from a list using the distinct() method of the Stream API. This method returns a stream containing only unique elements. 

Example:
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5); 
List<Integer> uniqueNumbers = numbers.stream() 
                                     .distinct() 
                                     .collect(Collectors.toList());
In this example, the distinct() method removes duplicate values and returns a list containing only unique elements. 

21. What is abstraction in Java?
Abstraction is an object-oriented programming (OOP) concept that hides implementation details and shows only the essential features of an object to the user. 

In Java, abstraction is achieved using abstract classes and interfaces. It helps reduce complexity, improve code maintainability, and focus on what an object does rather than how it does it. 

22. What is the difference between an abstract class and an interface in Java?
Both abstract classes and interfaces are used to achieve abstraction in Java, but they differ in several ways. 

Abstract Class 	Interface
Declared using the abstract keyword. 	Declared using the interface keyword. 
Can contain both abstract and concrete methods. 	Primarily contains abstract methods (can also have default and static methods). 
Can have instance variables and constructors. 	Cannot have constructors and typically contains constants. 
A class can extend only one abstract class. 	A class can implement multiple interfaces. 
Used when classes share common state and behavior. 	Used to define a common contract or capability. 
Abstract classes are suitable when related classes share common functionality, while interfaces are ideal for defining behaviors that multiple unrelated classes can implement. 

23. What is method overloading in Java?
Java Method overloading is a feature that allows a class to have multiple methods with the same name but different parameter lists. The methods can differ in the number, type, or order of parameters. 

Method overloading helps improve code readability and flexibility by allowing the same method to perform similar operations with different inputs. It is an example of compile-time polymorphism in Java. 

24. What is method overriding in Java?
Java Method overriding is a feature where a subclass provides its own implementation of a method that is already defined in its superclass. The overriding method must have the same name, return type, and parameters as the method in the parent class. 

Method overriding allows a subclass to modify or extend the behavior of an inherited method. It is an example of runtime polymorphism in Java. 

25. What is the difference between compile-time polymorphism and runtime polymorphism?
Compile-time polymorphism and runtime polymorphism are two types of polymorphism in Java. The table below highlights their key differences. 

Compile-Time Polymorphism	Runtime Polymorphism
Achieved through method overloading. 	Achieved through method overriding. 
Resolved by the compiler during compilation. 	Resolved by the JVM during program execution. 
Also known as static binding or early binding. 	Also known as dynamic binding or late binding. 
Inheritance is not required. 	Inheritance is required. 
Faster execution because the method call is determined at compile time. 	Slightly slower because the method call is determined at runtime. 
Example: Multiple methods with the same name but different parameters. 	Example: A subclass providing its own implementation of a parent class method. 
26. What is the this keyword in Java?
The this keyword in Java refers to the current object of a class. It is used to access the current object's variables, methods, and constructors. 

The this keyword is commonly used to distinguish instance variables from local variables, call another constructor within the same class, and pass the current object as an argument to a method or constructor.


27. What is exception handling in Java?
Exception handling in Java is a mechanism used to handle runtime errors and prevent a program from terminating unexpectedly. It allows developers to detect, manage, and recover from exceptional situations during program execution. 

Java provides the try, catch, finally, throw, and throws keywords for exception handling. By handling exceptions properly, programs can continue running smoothly even when errors occur. 

28. What is the difference between checked and unchecked exceptions in Java?
Checked and unchecked exceptions differ in how they are handled by the Java compiler. 

Checked Exceptions 	Unchecked Exceptions 
Checked at compile time. 	Checked at runtime. 
Must be handled using try-catch or declared with throws. 	Handling is optional. 
Subclasses of Exception (excluding RuntimeException). 	Subclasses of RuntimeException. 
Occur due to external factors such as file or database issues. 	Usually occur because of programming errors. 
Examples: IOException, SQLException. 	Examples: NullPointerException, ArithmeticException. 
Checked exceptions help ensure error handling during compilation, while unchecked exceptions indicate issues that are typically fixed in the program logic. 

29. What is the difference between Array and ArrayList in Java?
Arrays and ArrayLists are both used to store collections of elements, but they differ in several ways. 

Array	ArrayList
Has a fixed size once created. 	Can grow or shrink dynamically. 
Can store primitive data types and objects. 	Stores objects only (wrapper classes for primitives). 
Faster in performance due to fixed size. 	Slightly slower because of dynamic resizing. 
Length is accessed using the length property. 	Size is accessed using the size() method. 
Part of the core Java language. 	Part of the Java Collections Framework. 
Elements are accessed using indexes. 	Elements are accessed using methods such as get() and set(). 
Arrays are suitable when the size is known in advance, while ArrayLists are preferred when the number of elements can change dynamically. 

30. What is the purpose of the try-catch-finally block in Java?
The try-catch-finally block in Java is used for exception handling. It helps a program handle runtime errors gracefully and continue execution without crashing. 

try – Contains the code that may throw an exception. 
catch – Handles the exception if one occurs in the try block. 
finally – Contains code that is always executed, whether an exception occurs or not. 
Using try-catch-finally improves program reliability and ensures that important cleanup tasks, such as closing files or database connections, are performed properly. 

Advanced Java Interview Questions and Answers for Experienced (5-10 Years)
If you have 5–10 years of experience in Java development, the questions below will help you prepare for advanced technical interviews. These commonly asked topics focus on deeper Java concepts and real-world application knowledge. 

1. What is the difference between heap memory and stack memory in Java?
Two types of memory are used in the Java Virtual Machine (JVM). One is heap memory, and another is stack memory.  

The primary difference between the two is that heap memory’s role is to store objects, whereas stack memory stores local variables and the order of method execution. The following tabular comparison shows all the key differences between the both. While preparing for Java interview questions and answers, ensure to understand this concept well. 

Heap Memory 	Stack Memory 
Stores objects and their instance variables. 	Stores method frames, local variables, and reference variables. 
Shared by all threads in the application. 	Each thread gets its own separate stack. 
Larger in size. 	Much smaller in size. 
Memory is allocated when an object is created and reclaimed automatically by the garbage collector. 	Memory is allocated and released automatically as method frames are pushed and popped. 
No fixed allocation order. 	Follows LIFO (Last In First Out) order. 
Access is comparatively slower. 	Access is faster. 
Objects stay in memory as long as they are reachable. 	Local variables are destroyed as soon as the method returns. 
Size is configured using -Xms and -Xmx. 	Size is configured using -Xss. 
Running out of space throws OutOfMemoryError: Java heap space. 	Running out of space throws StackOverflowError, usually from deep or infinite recursion. 
2. Which are the most widely used Java IDEs and development tools?
First, a clarification that interviewers appreciate: the actual Java compiler is javac, which ships with the JDK. The tools listed below are IDEs and development environments that use javac under the hood. 

Most widely used Java IDEs:

IntelliJ IDEA — the most popular Java IDE in professional use 
Eclipse — long-established open-source IDE with a large plugin ecosystem 
Visual Studio Code — with the Extension Pack for Java 
NetBeans — Apache-maintained open-source IDE 
Android Studio — the official IDE for Android development, built on IntelliJ 
JDeveloper — Oracle's IDE, used mainly with Oracle enterprise products 
Teaching-focused IDEs:

BlueJ and jGRASP, both designed for students learning Java 
Supporting build and productivity tools:

Maven and Gradle for build automation and dependency management 
JUnit for unit testing
3. What is the difference between equals() method and equality (==) operator in Java?
There are a number of key differences between the equals method and the equality operator in Java. The primary difference is that one is a method, and another is an operator. 

Such tricky concepts are usually asked when you have some experience in this field. So, you need to study the core Java interview questions and answers for experienced professionals really well. 

For this question, we have created a tabular comparison to help you understand the differences between the equals method and equality operator in Java. 

Equals() Method 	Equality Operator (==) 
It is a method 	It is an operator 
Its role is for comparing the content of an object 	Its role is for comparing the reference values and objects 
It can be overridden 	Can’t be overridden 
Can’t be used with primitives 	Can be used with primitives 
4. Can you inherit static members to a subclass?
Yes, static members are inherited by subclasses in Java. However, they belong to the class rather than an object and are typically accessed using the class name. 

Example: 

class Parent { 
    static int value = 10; 
} 
 
class Child extends Parent { 
}
In this example, Child can access value because it inherits the static member from Parent. 

Suggested Reading: Java Syllabus (Curriculum): Full Course Outline 

5. Can you override a final method in Java?
No, a final method cannot be overridden in Java. When a method is declared with the final keyword, subclasses are not allowed to provide their own implementation of that method. 

6. How to declare an infinite loop in Java?
An infinite loop is a loop that continues to execute indefinitely because its condition never becomes false. In Java, infinite loops can be created using while, for, and do-while loops. 

a) Infinite while Loop
while (true) { 
    // code 
}
b) Infinite for Loop
for (;;) { 
    // code 
}
c) Infinite do-while Loop
do { 
    // code 
} while (true);
All three loops run continuously until they are terminated using a break statement or the program is stopped externally. 

7. What are the roles of final, finally, and finalize keywords in Java?
There are several keywords in Java, and three commonly confused keywords are final, finally, and finalize. The table below highlights their differences: 

final 	finally 	finalize 
Used to apply restrictions on classes, methods, and variables. 	Used in exception handling. 	A method on Object that the garbage collector could call before reclaiming an object. Deprecated for removal. 
Can be applied to classes, methods, and variables. 	Used with try-catch blocks. 	Associate Associated with objects, not with classes or variables. d with objects. 
A final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited. 	Executes whether an exception occurs or not. 	Was intended for cleanup before garbage collection, but execution was never guaranteed. 
Applied when it is declared. 	Executes after the try-catch block completes. 	Deprecated since Java 9 and deprecated for removal in Java 18. 
8. When to use the super keyword in Java?
The super keyword in Java is used to refer to the immediate parent class of a subclass. It is commonly used to access parent class variables, invoke parent class methods, and call the parent class constructor. 

Using the super keyword helps a subclass access members of its superclass, especially when the parent and child classes have variables or methods with the same name. 

9. What is a ClassLoader in Java?
A Java ClassLoader is used to load the classes in JRE in a dynamic manner. It is an important component in the Runtime Environment that loads the class into the memory part of the JRE. 

It is because of ClassLoaders that the JRE doesn’t have to have information about the files loaded to it.  

10. What are the different types of ClassLoaders in Java?
Java uses three built-in ClassLoaders, and the middle one changed in Java 9. 

a) Bootstrap ClassLoader
Loads the core Java classes. In Java 8 and earlier it loaded classes from rt.jar. From Java 9 onward it loads the core platform modules such as java.base. It is written in native code and is the parent of all other ClassLoaders. 

b) Platform ClassLoader (called the Extension ClassLoader in Java 8 and earlier)
In Java 8 and earlier, the Extension ClassLoader loaded classes from the JDK extensions directory (jre/lib/ext). That directory and the Extension ClassLoader were removed in Java 9 and replaced by the Platform ClassLoader, which loads the Java SE platform modules that are not loaded by the Bootstrap ClassLoader. It is a child of the Bootstrap ClassLoader. 

c) System ClassLoader (also called the Application ClassLoader)
Loads the application's own classes from the classpath or module path. It is a child of the Platform ClassLoader and is the one that loads the code you write. 

ClassLoaders follow the delegation model: a request is passed up to the parent first, and only if the parent cannot find the class does the child attempt to load it. 

11. Is it possible to access the members of a subclass if you create a superclass’ object?
No, it is not possible. A superclass object can access only the members defined in the superclass. Subclass-specific members cannot be accessed through it. 

12. How to define a functional interface in Java?
A functional interface in Java can be defined using the @FunctionalInterface annotation. Introduced in Java 8, it ensures that the interface contains only one abstract method. 

13. How are lambda expressions and functional interfaces interrelated?
A functional interface is an interface that contains exactly one abstract method. It can be used as the target type for a lambda expression or a method reference. 

java 

@FunctionalInterface 
interface Calculator { 
    int operate(int a, int b); 
} 
 
Calculator add = (a, b) -> a + b;
The @FunctionalInterface annotation is optional. Any interface with a single abstract method is a functional interface whether or not it is annotated. What the annotation does is instruct the compiler to enforce the rule, so if someone later adds a second abstract method, the code fails to compile. This makes it a safety measure rather than a requirement. 

Runnable, Comparator, and Callable are all functional interfaces that existed long before Java 8 introduced the annotation. 

14. How many abstract methods can a functional interface have in Java 8?
A functional interface must have exactly one abstract method. That single method defines what the interface does and is what a lambda expression implements. 

Alongside that one abstract method, a functional interface may also contain:

Any number of default methods 
Any number of static methods 
Any number of private methods (Java 9 and later) 
None of these count towards the single-abstract-method rule, because they all have an implementation. 

15. What rules must be followed when defining a functional interface in Java 8?
Programmers need to follow these guidelines: 

The interface must contain exactly one abstract method. Adding a second one breaks the contract. 
The abstract method can have any name. There is no reserved name. 
Use the @FunctionalInterface annotation so the compiler enforces the rule. It is optional but strongly recommended. 
Default, static, and private methods are allowed and do not count as abstract methods. 
Redeclaring a public method of java.lang.Object, such as equals(), hashCode(), or toString(), does not count as an abstract method, because every implementing class already inherits an implementation from Object. 
A functional interface may extend another interface, but only if the combined result still has exactly one abstract method. 
16. What are the different types of functional interfaces in Java 8?
These are the main types of functional interface: 

Consumer 
Predicate 
Supplier 
Function (UnaryOperator and BinaryOperator) 
17. State the biggest difference between Map and FlatMap.
Both map() and flatMap() transform the elements of a stream, but they differ in how they handle the result. 

map() is a one-to-one transformation. It applies a function to each element and produces a stream with the same number of elements. If the function itself returns a stream or a collection, the result becomes a stream of streams, such as Stream<List<String>>, which is usually not what you want. 

flatMap() is a one-to-many transformation. It maps each element to a stream and then flattens all those streams into a single stream. 

Example:
List<List<String>> nested = Arrays.asList( 
    Arrays.asList("a", "b"), 
    Arrays.asList("c", "d") 
); 
 
// map produces a nested result 
Stream<Stream<String>> mapped = nested.stream().map(List::stream); 
 
// flatMap produces a single flat stream: a, b, c, d 
List<String> flat = nested.stream() 
                          .flatMap(List::stream) 
                          .collect(Collectors.toList());
In short: use map() when each element becomes exactly one new element, and use flatMap() when each element expands into multiple elements that need to be merged into one stream. 

18. What is the primary benefit for which one should use Metaspace over PermGen?
The main advantage of Metaspace over PermGen is where the memory lives and how it grows. 

PermGen was part of the Java heap and had a fixed maximum size set at JVM startup. If an application loaded more classes than that fixed space allowed, it would fail with java.lang.OutOfMemoryError: PermGen space, which was a common problem in applications that loaded many classes or redeployed frequently. 

Metaspace, introduced in Java 8, stores class metadata in native memory instead of the heap. It grows automatically as more classes are loaded, so the fixed-ceiling problem largely disappears. 

Metaspace is not unlimited, though. It is bounded by the native memory available to the process, and it can be explicitly capped using -XX:MaxMetaspaceSize. -XX:MetaspaceSize sets the initial threshold at which the first garbage collection of class metadata is triggered. If Metaspace is exhausted, the JVM throws OutOfMemoryError: Metaspace. 

19. What is the difference between composition and aggregation in Java?
Both composition and aggregation are associations in Java. The former is considered a strong association, while the latter is considered a weak association. Let’s understand the differences between them with the below tabular comparison: 

Aggregation 	Composition 
Weak  	Strong 
There is a relationship between classes 	A class belongs to another class 
Interrelated classes can be independent 	Classes are dependent on each other. 
As the classes can be independent, it is great for reusing the code 	As the classes are not independent, code reusability becomes difficult  
20. What is synchronization in Java?
Synchronization in Java is a mechanism used to control access to shared resources when multiple threads are running simultaneously. It ensures that only one thread can access a synchronized block or method at a time, preventing data inconsistency and thread interference. 

Synchronization helps maintain data integrity and enables safe communication between threads in multithreaded applications. 

21. What is the difference between a process and a thread in Java?
A process and a thread are both units of execution, but they differ in how they use system resources and memory. 

Process 	Thread 
An independent program in execution. 	A lightweight unit of execution within a process. 
Has its own memory space and resources. 	Shares memory and resources with other threads in the same process. 
Creation and execution are relatively slower. 	Creation and execution are faster. 
Communication between processes is more complex. 	Threads can communicate easily through shared memory. 
More resource-intensive. 	Less resource-intensive. 
22. What is the difference between String, StringBuilder, and StringBuffer in Java?
Below are the key differences between String, StringBuilder, and StringBuffer in Java: 

String 	StringBuilder 	StringBuffer 
Immutable (cannot be modified after creation). 	Mutable (can be modified). 	Mutable (can be modified). 
Slower when performing frequent string modifications. 	Faster than String and StringBuffer. 	Slower than StringBuilder due to synchronization. 
Thread-safe because it is immutable. 	Not thread-safe. 	Thread-safe (synchronized). 
Creates a new object for every modification. 	Modifies the existing object. 	Modifies the existing object. 
Suitable for fixed string values. 	Suitable for single-threaded applications. 	Suitable for multi-threaded applications. 
23. What is reflection in Java?
Reflection in Java is a feature that allows a program to inspect and manipulate classes, methods, fields, and constructors at runtime. It enables developers to examine object details and invoke methods dynamically without knowing their names at compile time. 

Reflection is commonly used in frameworks, debugging tools, testing libraries, and dependency injection mechanisms. 

24. What is the use of the transient keyword in Java?
The transient keyword in Java is used to exclude a variable from the serialization process. When an object is serialized, transient variables are not saved and are ignored by the JVM. 

This keyword is commonly used for sensitive or temporary data that should not be stored or transferred during serialization. 

25. What is the difference between Comparable and Comparator in Java?
Below are the key differences between Comparable and Comparator in Java: 

Comparable	Comparator
Used to define the natural ordering of objects. 	Used to define custom ordering of objects. 
Implemented using the Comparable interface. 	Implemented using the Comparator interface. 
Contains the compareTo() method. 	Contains the compare() method. 
Sorting logic is defined inside the class. 	Sorting logic is defined in a separate class or lambda expression. 
Allows only one sorting sequence. 	Allows multiple sorting sequences. 
Example: Sort employees by ID. 	Example: Sort employees by name, salary, or age. 
26. What is the purpose of the volatile keyword in Java?
The volatile keyword ensures that a variable's value is always read from and written to the main memory. 

It makes changes made by one thread immediately visible to other threads. 
It helps prevent data inconsistency and visibility issues in multithreaded applications. 
It is commonly used for shared variables accessed by multiple threads. 
27. What is deadlock in Java?
Deadlock in Java is a situation where two or more threads are blocked indefinitely because each thread is waiting for a resource that is held by another thread. 

Occurs when multiple threads wait for each other to release resources. 
Causes the program to stop making progress. 
Commonly happens in multithreaded applications with improper synchronization. 
Can be prevented by managing resource locks carefully and maintaining a consistent lock order. 

28. What is the difference between shallow copy and deep copy in Java?
The following table compares shallow copy and deep copy in Java: 

Shallow Copy 	Deep Copy 
Copies the object's fields but shares references to nested objects. 	Copies the object and all referenced objects recursively. 
Changes to referenced objects affect both original and copied objects. 	Changes to copied objects do not affect the original object. 
Faster and uses less memory. 	Slower and requires more memory. 
Creates a partial copy of the object. 	Creates a completely independent copy of the object. 
Commonly implemented using clone() with default behavior. 	Requires manual copying of referenced objects. 
29. What is the difference between throw and throws in Java?
This is also one of the most common Java advanced interview questions, as exception handling is a fundamental concept that every experienced Java developer should understand. 

The throw keyword is used to explicitly throw an exception within a method or block of code. On the other hand, the throws keyword is used in a method declaration to specify the exceptions that the method may throw during execution. 

In simple terms, throw is used to generate an exception, whereas throws is used to declare and pass the responsibility of handling an exception to the calling method. 

30. What are immutable objects in Java?
Immutable objects in Java are objects whose state cannot be modified after creation. Once initialized, their data remains unchanged throughout their lifetime, making them thread-safe, secure, and reliable. The String class is a common example of an immutable object.

31. What is autoboxing and unboxing in Java?
Autoboxing is the automatic conversion of a primitive data type into its corresponding wrapper class object, while unboxing is the automatic conversion of a wrapper class object back to its primitive data type. These features simplify data handling and reduce the need for manual conversions in Java. 

32. What is the difference between List, Set, and Map in Java?
The table below highlights the key differences between List, Set, and Map in Java: 

List	Set	Map
Stores elements in an ordered sequence. 	Stores unique elements only. 	Stores data as key-value pairs. 
Allows duplicate elements. 	Does not allow duplicate elements. 	Keys must be unique, but values can be duplicated. 
Maintains insertion order. 	May or may not maintain insertion order, depending on the implementation. 	Stores mappings between keys and values. 
Elements are accessed by index. 	Elements are accessed through iteration. 	Values are accessed using keys. 
Examples: ArrayList, LinkedList, Vector. 	Examples: HashSet, LinkedHashSet, TreeSet. 	Examples: HashMap, LinkedHashMap, TreeMap. 
33. What is the difference between ArrayList and LinkedList in Java?
The table below highlights the key differences between ArrayList and LinkedList in Java: 

ArrayList	LinkedList
Uses a dynamic array to store elements. 	Uses a doubly linked list to store elements. 
Faster for accessing elements by index. 	Slower for random access. 
Insertion and deletion are slower, especially in the middle of the list. 	Insertion and deletion are faster. 
Requires less memory overhead. 	Requires more memory to store node links. 
Better for frequent read operations. 	Better for frequent insert and delete operations. 
Implements the List interface. 	Implements both List and Deque interfaces. 
34. What is the difference between HashSet and TreeSet in Java?
The table below highlights the key differences between HashSet and TreeSet in Java: 

HashSet	TreeSet
Stores elements using a hash table. 	Stores elements using a tree structure (Red-Black Tree). 
Does not maintain any order of elements. 	Stores elements in sorted order. 
Provides faster insertion, deletion, and search operations. 	Generally slower due to sorting operations. 
Allows one null element. 	Does not allow null elements. 
Suitable when ordering is not required. 	Suitable when sorted data is required. 
Implements the Set interface. 	Implements the NavigableSet and SortedSet interfaces. 
36. What is the difference between Runnable interface and Thread class in Java?
The table below highlights the key differences between the Runnable interface and the Thread class in Java:

Runnable Interface	Thread Class
Defined as an interface. 	Defined as a class. 
Requires implementing the run() method. 	Requires extending the Thread class and overriding the run() method. 
Supports multiple inheritance because a class can implement multiple interfaces. 	Does not support multiple inheritance because Java classes can extend only one class. 
Separates the task from the thread execution mechanism. 	Combines both the task and thread execution mechanism. 
Preferred for better code flexibility and reusability. 	Less flexible due to class inheritance limitations. 
Executed by passing the object to a Thread instance. 	Executed by creating and starting a subclass of Thread. 
37. What is a wrapper class in Java?
A wrapper class in Java is a class that converts a primitive data type into an object. Each primitive type has a corresponding wrapper class, such as Integer for int, Double for double, Character for char, and Boolean for boolean. 

Wrapper classes are useful when working with collections, generics, and APIs that require objects instead of primitive data types. 

Note: Once you have gone through these advanced topics, it is worth checking how much you actually remember. Try our Java quiz to identify the areas that still need revision before your interview.

Java Coding Interview Questions
Almost every Java interview includes at least one coding round. The questions below are the ones that come up most often, along with the approach interviewers expect. For a wider set of practice problems, go through our collection of Java programs covering strings, arrays, patterns, and collections. 

1. Write a Java program to reverse a string without using the reverse method
public class ReverseString { 
    public static String reverse(String str) { 
        char[] chars = str.toCharArray(); 
        int left = 0, right = chars.length - 1; 
        while (left < right) { 
            char temp = chars[left]; 
            chars[left++] = chars[right]; 
            chars[right--] = temp; 
        } 
        return new String(chars); 
    } 
}
Time complexity O(n), space complexity O(n). 

2. Write a Java program to check whether a string is a palindrome
public static boolean isPalindrome(String str) { 
    int left = 0, right = str.length() - 1; 
    while (left < right) { 
        if (str.charAt(left++) != str.charAt(right--)) { 
            return false; 
        } 
    } 
    return true; 
}
Using two pointers avoids creating a reversed copy, so space complexity is O(1). 

3. Write a Java program to check whether two strings are anagrams
public static boolean isAnagram(String a, String b) { 
    if (a.length() != b.length()) return false; 
    int[] count = new int[256]; 
    for (int i = 0; i < a.length(); i++) { 
        count[a.charAt(i)]++; 
        count[b.charAt(i)]--; 
    } 
    for (int c : count) { 
        if (c != 0) return false; 
    } 
    return true; 
}
The counting approach runs in O(n). Sorting both strings also works but is O(n log n). 

4. Write a Java program to find the first non-repeating character in a string
public static char firstNonRepeating(String str) { 
    Map<Character, Integer> counts = new LinkedHashMap<>(); 
    for (char c : str.toCharArray()) { 
        counts.put(c, counts.getOrDefault(c, 0) + 1); 
    } 
    for (Map.Entry<Character, Integer> e : counts.entrySet()) { 
        if (e.getValue() == 1) return e.getKey(); 
    } 
    return '\0'; 
}
LinkedHashMap is used because insertion order must be preserved to find the first such character. 

5. Write a Java program to find the missing number in an array from 1 to n
public static int findMissing(int[] arr) { 
    int n = arr.length + 1; 
    int expectedSum = n * (n + 1) / 2; 
    int actualSum = 0; 
    for (int num : arr) actualSum += num; 
    return expectedSum - actualSum; 
}
Runs in O(n) time and O(1) space, which is what the interviewer is checking for. 

6. Write a Java program to remove duplicates from a list
// Using Set 
List<Integer> unique = new ArrayList<>(new LinkedHashSet<>(list)); 
 
// Using Streams 
List<Integer> unique = list.stream() 
                           .distinct() 
                           .collect(Collectors.toList());
LinkedHashSet preserves insertion order, whereas HashSet does not. 

7. Write a Java program to count the occurrences of each character in a string
Map<Character, Long> counts = str.chars() 
    .mapToObj(c -> (char) c) 
    .collect(Collectors.groupingBy(c -> c, Collectors.counting()));
Being able to give both a loop-based and a Streams-based solution is what distinguishes a strong candidate here. 

Note: Solving problems under time pressure is a different skill from writing code at your own pace. Working through structured Java coding challenges is the closest practice you can get to an actual interview round.

List of Java 8 Interview Questions
Java 8 is among the newest versions of this programming language. The Java 8 interview questions can be asked to a candidate with any experience level. Undoubtedly, the level of questions will be according to your experience range. 

Here are some of the most common interview questions on Java 8:

What are the new features in Java SE 8?
What are some of the main benefits of using Java 8?
Define optional class. 
What is a functional interface in Java 8? 
Define MetaSpace. 
What is the meaning of the String::ValueOf expression? 
Explain the concept of streams in Java 8. 
What is Nashorn in Java 8? 
How is MetaSpace different from PermGen? 
What do you mean by method reference? 
Explain intermediate and terminal operations. 
Which are the most used terminal operations? 
Is it possible for a functional interface to inherit another interface? 
What is the difference between findFirst() and findAny()? 
Which are the key components of a Java stream? 
Which functional interfaces come pre-defined in Java 8? 
What does type interface mean? 
State the syntax of a lambda expression. 
What is the difference between collection and stream? 
Explain the role of JJS in Java 8. 
Find Java 8 interview questions and answers by clicking on the linked write-up 

Practice Java Programs for Interview Preparation
Java Hello World Program
Java Program to Print an Integer
Java Program to Add Two Numbers
Even or Odd Program in Java
Java Program to Check Leap Year
Multiplication Table in Java
Java Program to Convert Kilometers to Miles
Star Pattern in Java
Palindrome Program in Java
Power of a Number in Java
Java Program to Find Square Root of a Number
Swap Two Numbers in Java
Java Program to Find ASCII Value of a character
Java Program to Check Character is Alphabet or Not
Vowel or Consonant Program in Java
Neon Number in Java
Lucky Number Program in Java
Happy Number in Java
Unique Number in Java
Triangular Number in Java
For more Java Programs to practice, visit our Java Programs page.

Article by

Virendra Soni

Virendra is an SEO Content Writer with 7+ years of experience in blogging, content marketing, SEO, and content editing. He holds a B.Tech. in Electronics and Communication Engineering (ECE) and has worked across the IT and EdTech industries. Virendra specializes in creating SEO-friendly, user-focused content that drives organic traffic and improves search rankings. His mantra is simple: keep it clear, make it memorable, and create content that both readers and search engines love.
View all posts by Virendra Soni
 View LinkedIn Profile
Web Development
Categories
Digital Marketing
Web Development
SEO
Data
App Development
Artificial Intelligence
Career Roadmap
Career Guidance
Interview Questions
Popular Articles
Why Online Learning is Becoming Popular
5 Reasons Why Online Learning is Becoming Popular in India

On-Demand Mobile App Development
On-Demand Mobile App Development: Features, Benefits, Cost in 2026

Benefits of Mobile Application for Businesses
Top 10 Benefits of Mobile Application for Businesses in 2026

Category:
Interview Questions
Web Development
Share This Article
Leave a comment
Your email address will not be published. Required fields are marked *
Leave a comment*
Your name*
 
Your email*
 
Your website
 Save my name, email, and website in this browser for the next time I comment.
Post Comment
Comments (0)
No comments yet.

Related articles
Our latest and greatest step-by-step guides on all SEO, AI search, link building, and content marketing.

MERN Stack Developer Salary in India (Fresher to Senior)
MERN Stack Developer Salary in India 2026 (Fresher to Senior)
Choosing a career often comes down to two things: money and passion. If you are drawn to web development, you…

Web Development
24 min read
Full Stack Developer vs Software Engineer: Differences & Comparison
Full Stack Developer vs Software Engineer: Differences & Comparison
Choosing a career in tech often starts with one common question. Should you become a full stack developer or a…

Career Guidance
26 min read
15 Best Python Books for Beginners to Advanced
15 Best Python Books for Beginners to Advanced [2026] 
Python is one of the most popular and widely used programming languages in the world today. Beginners choose it for…

Data
44 min read
Get Free Career Counselling 

Java
Programming Languages
Spring
Spring Boot
Interview
Java Full Stack Developer Interview Questions and Answers
2024 Java Full Stack Developer Interview Questions and Answers
Java Codeex
Java Codeex

Follow
9 min read
·
Jun 7, 2024
18


1




One of my friend recently attended an interview at a top product-based organization. These are the questions they were asked. If you are planning to attend any interviews, just go through these questions once; it will help you.

Java

Write a Java program to print how many times each character is repeated in a given string.

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Sample {

    public static Map<Character, Long> countOccurrences(String str) {
        return str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }

    public static void main(String[] args) {
        String str = "Hello How Are You";

        Map<Character, Long> charCountMap = countOccurrences(str);

        charCountMap.forEach((character, count) ->
                System.out.println("The character '" + character + "' occurs " + count + " times in the string."));
    }
}
What is `ClassNotFoundException` in Java and when does it occur?
`ClassNotFoundException` is a checked exception that occurs when an application tries to load a class through its name using methods like `Class.forName()`, `ClassLoader.loadClass()`, or `ClassLoader.findSystemClass()`, but the class with the specified name cannot be found in the classpath.
Explain `NoClassDefFoundError` and how it differs from `ClassNotFoundException`.
`NoClassDefFoundError` is an unchecked error that occurs when the Java Virtual Machine (JVM) or a ClassLoader tries to load a class that was available at compile-time but is not available at runtime. It usually happens if the class was successfully compiled but cannot be found or loaded at runtime due to missing dependencies or other issues. Unlike `ClassNotFoundException`, which is thrown when an application tries to load a class explicitly, `NoClassDefFoundError` can occur when the JVM needs the class to be present as part of the normal execution of the program.
3. What is an immutable class in Java?
An immutable class is a class whose instances cannot be modified after creation. Any modification results in a new instance of the class. Examples of immutable classes in Java include `String`, `Integer`, and `LocalDate`.

4. How do you create an immutable class in Java?
To create an immutable class in Java:
1. Declare the class as `final` to prevent subclassing.
2. Make all fields private and final.
3. Do not provide setters for the fields.
4. Initialize all fields via a constructor.
5. Ensure that any mutable fields are not directly accessible and return copies of them if necessary.

public final class ImmutableClass {
 private final int value;
 private final String text;
public ImmutableClass(int value, String text) {
 this.value = value;
 this.text = text;
 }
public int getValue() {
 return value;
 }
public String getText() {
 return text;
 }
 }
5. Why is immutability important in Java?
Immutability is important because it:
Simplifies reasoning about code since immutable objects cannot change state.
Enhances thread safety as immutable objects can be shared between threads without synchronization.
Provides security since the internal state of immutable objects cannot be altered.

6. What is a `ConcurrentHashMap` and how does it differ from `HashMap`?
`ConcurrentHashMap` is a thread-safe variant of `HashMap` that allows concurrent read and write operations without locking the entire map. It is part of the `java.util.concurrent` package. Unlike `HashMap`, which is not thread-safe and requires external synchronization, `ConcurrentHashMap` uses a combination of segment-level locking and non-blocking techniques to achieve concurrency.

7. Explain how `ConcurrentHashMap` handles concurrency.
`ConcurrentHashMap` handles concurrency by dividing the map into segments, each of which can be locked independently. This reduces contention and allows multiple threads to read and write to different segments concurrently. Additionally, it uses non-blocking algorithms for certain operations like `get`, ensuring high performance in multi-threaded environments.

8. How can you make a Java collection read-only?
You can make a Java collection read-only by using the `Collections.unmodifiableCollection` method. This method returns an unmodifiable view of the specified collection. Any attempt to modify the returned collection will result in an `UnsupportedOperationException`.

List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
List<String> readOnlyList = Collections.unmodifiableList(list);
9. What is the `transient` keyword in Java?
The `transient` keyword in Java is used to indicate that a field should not be serialized. When an object is serialized, the value of a `transient` field is not included in the serialized representation of the object.

10. How is `transient` used in serialization?
When a field is marked as `transient`, it is ignored by the serialization mechanism. For example, if an object’s state includes sensitive information or context-specific data that should not be persisted, you can mark those fields as `transient`.

public class Example implements Serializable {
 private transient String sensitiveData;
 private String regularData;
// getters and setters
}
11. Explain the difference between PermGen and Metaspace in the JVM.
PermGen (Permanent Generation) was a memory area in the Java heap used to store metadata about classes, methods, and other reflection data. It was part of the heap memory and had a fixed size.
Metaspace replaced PermGen starting with Java 8. It is not part of the heap and has no fixed size limit, growing dynamically as needed. This change reduces the risk of `OutOfMemoryError` related to metadata storage.

12. Why was Metaspace introduced to replace PermGen?
Metaspace was introduced to address the limitations and problems associated with PermGen, such as its fixed size leading to `OutOfMemoryError` when the metadata requirements exceed its capacity. Metaspace, being dynamically sized, improves flexibility and reduces memory management issues related to class metadata.

13. What is serialization in Java?
Serialization in Java is the process of converting an object’s state into a byte stream, which can be persisted to a file, sent over a network, or saved to a database. The reverse process is called deserialization, where the byte stream is converted back into a copy of the object.

14. How do you serialize and deserialize an object in Java?
To serialize an object, you use an `ObjectOutputStream` to write the object to an output stream. To deserialize, you use an `ObjectInputStream` to read the object from an input stream.

// Serialization
 try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("object.ser"))) {
 oos.writeObject(object);
 } catch (IOException e) {
 e.printStackTrace();
 }
// Deserialization
 try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("object.ser"))) {
 MyClass object = (MyClass) ois.readObject();
 } catch (IOException | ClassNotFoundException e) {
 e.printStackTrace();
 }
15. When should you use the `volatile` keyword?
The `volatile` keyword should be used when you need to ensure that a variable’s value is always read from and written to main memory, making it visible to all threads immediately. It is typically used for flags and counters that are accessed by multiple threads without using synchronized blocks or methods.

private volatile boolean flag;
16. What is externalization in Java?
Externalization is an alternative to serialization in Java that allows you to customize the serialization process. It requires implementing the `Externalizable` interface, which has two methods: `writeExternal` and `readExternal`. You manually define how the object’s state is written to and read from a stream.

17. How does externalization differ from serialization?
The main differences are:
Serialization is automatic and uses the `Serializable` interface, whereas externalization is manual and uses the `Externalizable` interface.
In serialization, all non-transient fields are serialized by default. In externalization, you explicitly specify which fields to serialize.
Externalization can provide better control over the serialization process and can result in smaller serialized forms by excluding unnecessary fields.

18. When would you use externalization over serialization?
You would use externalization over serialization when:
You need to have precise control over the serialization process.
You want to exclude certain fields or include only specific fields.
You need to serialize objects in a more efficient format, potentially reducing the size of the serialized data.

19. PermGen vs MetaSpace

20. How to make data consistency if multiple threads are processing same time

21. parallelStream

We can achieve this by adding the parallel method to a sequential stream or by creating a stream using the parallelStream method of a collection:

List<Integer> listOfNumbers = Arrays.asList(1, 2, 3, 4);
listOfNumbers.parallelStream().forEach(number ->
    System.out.println(number + " " + Thread.currentThread().getName())
);
22. Java 8 features

Spring Boot
Explain the concept of AspectOriented Programming (AOP)?
AspectOriented Programming (AOP) is a programming paradigm that aims to increase modularity by allowing the separation of crosscutting concerns (such as logging, security, and transaction management) from the business logic. In Java, AOP is implemented through aspects, which are modular units that encapsulate behaviors affecting multiple classes. AOP concepts include:
Aspect: A module that encapsulates crosscutting concerns.
Join Point: A point in the program execution (e.g., method execution).
Advice: Action taken at a particular join point (e.g., before, after, or around method execution).
Pointcut: A set of join points where an advice should be applied.
Use cases: Logging, transaction management, security checks, performance monitoring, and error handling.
2. Difference between @AspectJ and AOP
@AspectJ: It is an annotation based syntax for defining aspects in Spring AOP. It uses annotations like @Aspect, @Before, @After, @Around, etc., to declare aspects and advice in Java classes.
Traditional AOP: Involves configuring aspects in XML files. It requires defining pointcuts and advice in an XML configuration, which can be less intuitive and harder to maintain than annotationbased approaches.
Differences: @AspectJ provides a more concise and readable way to define aspects within the code, while traditional AOP separates the aspect configuration from the business logic, which can be beneficial for clear separation of concerns.

Get Java Codeex’s stories in your inbox
Join Medium for free to get updates from this writer.

Enter your email
Subscribe

Remember me for faster sign in

3. Instantiating Multiple Beans of the Same Class with Spring Annotations
The @Primary annotation in Spring is used to indicate which bean should be given preference when multiple beans of the same type exist. It helps resolve ambiguity during autowiring by specifying a primary candidate

@Bean
 @Primary
 public MyService primaryService() {
 return new MyServiceImpl1();
 }
@Bean
 public MyService secondaryService() {
 return new MyServiceImpl2();
 }
4. Use of @Qualifier
The @Qualifier annotation is used to specify which bean should be injected when multiple beans of the same type exist. It helps resolve conflicts by providing an explicit reference to the desired bean.

@Autowired
 @Qualifier("secondaryService")
 private MyService myService;
5. How do you configure Spring Security in a Spring Boot application?
Basic Configuration: Include the Spring Security starter in your pom.xml
Security Configuration Class.java : Create a class extending WebSecurityConfigurerAdapter and override the necessary methods.

@EnableWebSecurity
 public class SecurityConfig extends WebSecurityConfigurerAdapter {
 @Override
 protected void configure(HttpSecurity http) throws Exception {
 http
 .authorizeRequests()
 .antMatchers("/public/").permitAll()
 .anyRequest().authenticated()
 .and()
 .formLogin()
 .loginPage("/login")
 .permitAll()
 .and()
 .logout()
 .permitAll();
 }
 }
 
 Application Properties: Configure securityrelated properties in application.properties if needed.
6. Explain the process of securing a Spring Boot application with JWT (JSON Web Token).
Steps:
1. Add Dependencies: Include the necessary dependencies for JWT and Spring Security.
2. Create a JWT Utility Class: Implement methods to generate and validate JWT tokens.
3. Create a Filter: Implement a filter to intercept requests and validate the JWT token.
4. Configure Security: Extend WebSecurityConfigurerAdapter and configure the security to use the JWT filter.

7. How does OAuth2 work with Spring Security to provide secure authentication?
OAuth2 is a protocol for authorization that allows thirdparty applications to access user data without exposing credentials. In Spring Security:
Authorization Server: Issues tokens after validating user credentials.
Resource Server: Validates the token and provides access to protected resources.
Flow: The client requests authorization, receives an authorization code, exchanges it for an access token, and uses the token to access protected resources.
Spring Configuration: Spring Security provides annotations and configurations to integrate OAuth2 easily, using @EnableAuthorizationServer and @EnableResourceServer.

8. What is the purpose of a load balancer in a Spring Boot microservices architecture?
A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, thereby improving responsiveness and availability. It helps in:
Distributing workload evenly.
Increasing fault tolerance.
Enhancing scalability by adding more instances.

9. How can you implement load balancing in a Spring Boot application?
 Spring Cloud LoadBalancer: Use springcloudstarterloadbalancer to enable clientside load balancing.
 Ribbon: Although deprecated in favor of Spring Cloud LoadBalancer, Ribbon was used to provide clientside load balancing.
 Example:

 @SpringBootApplication
 @EnableEurekaClient
 public class Application {
 public static void main(String[] args) {
 SpringApplication.run(Application.class, args);
 }
 }
10. List of Annotations in Spring Boot You Have Worked With?

@SpringBootApplication
 @RestController
 @RequestMapping
 @GetMapping
 @PostMapping
 @Autowired
 @Component
 @Service
 @Repository
 @Configuration
 @Bean
 @Primary
 @Qualifier
 @Value
 @Profile
 @EnableScheduling
 @EnableAsync
11. What is Spring Profiles?
Spring Profiles provide a way to segregate parts of your application configuration and make it only available in certain environments. This allows you to have different configurations for development, testing, and production environments.
Example: Define profiles in application.properties or application{profile}.properties and activate them via the spring.profiles.active property.

12. How to Send API Metrics Every Specific Time Frame

13. What is Docker and how does it benefit application development and deployment?
Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and selfsufficient units that include the application and its dependencies.
Benefits:
Consistency across development, testing, and production environments.
Simplifies dependency management.
Enables microservices architecture.
Enhances scalability and resource utilization.

14. Explain the role of Kubernetes in container orchestration and management.
Kubernetes is an opensource platform for automating the deployment, scaling, and management of containerized applications. It provides:
Orchestration: Manages container lifecycles, networking, and storage.
Scaling: Automatically scales applications based on resource usage.
Load Balancing: Distributes network traffic to ensure high availability.
Selfhealing: Restarts failed containers and replaces them as needed.
Declarative Configuration: Manages applications using declarative YAML or JSON configurations.

15. How can you exclude specific dependencies or configurations in a Spring Boot application?
 Maven Exclusions: Use the <exclusions> tag in the pom.xml file to exclude specific dependencies.
 xml

 <exclusion>
 <groupId>org.springframework.boot</groupId>
 <artifactId>springbootstartertomcat</artifactId>
 </exclusion>
16. Spring Boot Transaction Management

DataBase

Database Optimization techniques
What is Union and UninonALL
Second highest employee salary
tell me about Aggregate Functions
Angular 12

Life cycle hooks
diff between promises and Observables
How to pass data between components (Parent -> Child and Child -> Parent)
What is Pipe how to create Custom pipes
diff between directive and components
How to configure routers in angular
Diff between AOT and JIT compiler
diff between angular vs react
Thank you, keep learning!

ajtech
Thank you for reading until the end. Before you go:

Please consider clapping and following the writer! 👏
Follow us on LinkedIn | YouTube
Follow me for more exciting content

[**Follow me on Medium**](https://medium.com/@saijanand)


Главная → Блог → ТОП-21 вопрос Java-разработчику Junior, Middle, Senior на собеседовании
ТОП-21 вопрос Java-разработчику Junior, Middle, Senior на собеседовании
BGStaff рассказывает, что спрашивают на собеседовании Java-разработчика. Хотите правильно оценить хард скилзы кандидатов? Читайте!

Поделиться:
В статье мы расскажем о том, что спрашивают на собеседовании Java-разработчиков уровней Junior, Middle, Senior. А также приведем список вопросов для каждой из категорий. Это поможет вам понять, от чего следует отталкиваться при интервьюировании IT-специалистов этого направления.

Вопросы на собеседовании для Java-разработчика Junior
Это программист, который начинает свою карьеру в IT-сфере. Он работает под руководством более опытных коллег или руководителя проекта. Занимается выполнением простых задач: написанием кода, тестированием программного обеспечения и т. д. Параллельно он обучается и развивается, получая опыт и навыки, которые позволяют ему стать более опытным IT-специалистом со временем, получив уровень Middle и Senior.

ТОП-7 вопросов для Java-разработчика уровня Junior:
Можно ли в Джава переопределить статический метод?
Что такое полиморфизм и как он реализуется в Java?
Какие основные принципы объектно-ориентированного программирования вы знаете?
Что такое аннотации (annotations) и для чего они применяются?
Можно ли выполнить перегрузку метода main()?
В чем отличия в Java между HashMap и HashSet?
Как Джава достигает независимости от платформы?
HR-менеджеры с большой осторожностью относятся к найму разработчиков уровня Junior, так как опасаются, что на их обучение потребуется слишком много времени и других ресурсов. Однако среди начинающих Java-developer могут скрываться ценные кадры с новыми идеями, которые принесут пользу компании.

Вопросы на собеседовании для Java-разработчика Middle
Это программист с опытом работы и знаниями среднего уровня. Он уже обладает знаниями, чтобы самостоятельно заниматься несложными проектами, но еще не имеет достаточных навыков и опыта, чтобы решать сложные задачи или распределять работу между другими IT-специалистами.

Middle-разработчик, который проходит собеседование, должен хорошо знать язык программирования, понимать основы архитектуры программного обеспечения. Он также должен быть знаком с инструментами и технологиями, используемыми в разработке, уметь самостоятельно решать типичные задачи и проблемы, возникающие в процессе работы.



Вопросы на собеседовании для Java-developer уровня Middle:
Откуда вы узнавали постановку задач, как понимали что делаете свою работу правильно?
В чем заключаются плюсы и минусы объектно-ориентированного программирования, если сравнивать с процедурным/функциональным видом?
Какие паттерны GoF вы применяли в работе?
Какие коллекции вы знаете в Java, в каких случаях вы бы использовали каждую из них?
Каким образом вы можете обеспечить безопасность веб-приложения?
Есть однопоточный сервис для перевода денег между пользователями, можно уйти в минус, но нужно следить чтобы деньги не потерялись (сумма на всех счетах является инвариантом). Что необходимо учесть, чтобы сделать сервис многопоточным?
Что такое PECS, как используется?
Developer уровня Middle должен иметь достаточный уровень подготовки, чтобы работать над проектами самостоятельно. Знание теории является обязательным.



Вопросы на собеседовании для Java-разработчика Senior
Разработчик Senior – опытный IT-специалист с высоким уровнем квалификации, опытом работы в данной области. Он имеет глубокие знания языка программирования Java, а также опыт работы с различными фреймворками и инструментами разработки. Он способен разрабатывать сложные программные системы, управлять проектами и командами разработчиков, а также налаживать процессы разработки и обеспечивать высокую производительность и качество кода.

Какие вопросы можно задать на интервью кандидату, который претендует на позицию разработчика уровня Senior:
Расскажите о проектах, в которых вы принимали участие, и какие роли выполняли в них.
Как вы управляете разработкой больших проектов с использованием Java?
Какие инструменты для управления версиями вы использовали в своей работе?
Как бы вы оценили свой уровень знания языка и его основных особенностей?
Каким образом вы оптимизируете производительность приложений?
Расскажите о своем опыте тестирования и отладки кода.
Как вы обновляете свои знания и следите за последними трендами в разработке?
На интервью с разработчиками различных уровней часто задают технические вопросы. Соответственно, нужно обладать достаточной компетенцией, чтобы правильно оценить ответы на них. Если HR-менеджер не имеет соответствующего технического образования, подготовиться к собеседованию ему будет сложно. Поэтому экспертную оценку hard skills кандидатов могут провести специалисты кадрового агентства BGStaff. Также мы можем подобрать для вас разработчика любого уровня без предоплаты. Первый кандидат – через 3 дня.


Interview Questions
Getting Started as a Java Full Stack Engineer
Common Java Full Stack Engineer Interview Questions
Behavioral Interview Questions for Java Full Stack Engineers
Technical Interview Questions for Java Full Stack Engineers
What is a Java Full Stack Engineer
Certifications
Java Full Stack Engineer Jobs
Build the Resume That Got You the Interview

Sign Up for Free
Preparing for a Java Full Stack Engineer interview can feel overwhelming—you’re expected to speak fluently about everything from Spring Boot to React, from SQL optimization to Docker containerization. But the good news? Most interviewers ask predictable questions that follow clear patterns. With the right preparation strategy and concrete examples, you can walk into your interview confident and ready to showcase both your technical depth and your ability to solve real-world problems.

This guide walks you through the most common Java Full Stack Engineer interview questions you’ll encounter, provides realistic sample answers you can adapt, and gives you frameworks for thinking through technical challenges on the spot. Whether this is your first full stack role or you’re transitioning to a new company, you’ll find practical, actionable advice here.

Common Java Full Stack Engineer Interview Questions
Tell me about your experience with Spring Boot and how you’ve used it in production.
Why they ask: Spring Boot is foundational for Java backend development. This question assesses your hands-on experience, your understanding of its benefits, and your ability to explain architectural decisions.

Sample answer:

“In my last role, I built a microservice for an e-commerce platform using Spring Boot. We chose it specifically because we needed to reduce boilerplate code and get to market quickly. I set up the application with Spring Data JPA for database access, Spring Security for authentication, and Spring MVC for REST endpoints.

One challenge we faced was N+1 query problems when loading related entities. I debugged this using Hibernate’s query logging and optimized it with eager loading and projection queries. We also integrated Spring Boot Actuator for monitoring and health checks, which helped us catch issues before they reached production.

The biggest win was how easily we scaled from monolith to microservices—Spring Boot’s embedded Tomcat and auto-configuration made deployment incredibly straightforward.”

Personalization tip: Replace the specific project details with your own, but keep the structure: what you built, why you chose Spring Boot, one technical challenge you solved, and one measurable outcome.

How do you approach testing in a full stack application?
Why they ask: Testing strategy reveals your commitment to code quality and your understanding of the full development lifecycle. They want to know if you write tests proactively or reactively.

Sample answer:

“I follow a testing pyramid approach—lots of unit tests, fewer integration tests, and a focused set of end-to-end tests. On the backend, I write unit tests for business logic using JUnit and Mockito. For example, I’ll mock external API calls and database interactions so I’m testing just the service logic in isolation.

For integration tests, I use Spring’s @SpringBootTest annotation to load the application context and test how Spring beans actually interact. I write these for critical paths like user registration or payment processing.

On the frontend, I use Jest for React component tests, focusing on user interactions rather than implementation details. For end-to-end testing, I use Cypress—it’s much more reliable than Selenium for SPAs because it handles async operations better.

I integrate all these into our CI/CD pipeline so tests run automatically on every pull request. This catches issues early and gives me confidence to refactor without fear.”

Personalization tip: Swap out the specific tools if you’ve used different ones (TestNG instead of JUnit, Playwright instead of Cypress), but keep the pyramid concept—it shows sophisticated testing thinking.

Walk me through how you’d design a REST API for a real-world application.
Why they ask: This assesses your understanding of API design principles, HTTP semantics, and how to structure an API that scales and is easy for other teams to consume.

Sample answer:

“Let’s say I’m designing an API for a task management application. I’d start by identifying resources: tasks, users, projects. Each gets its own endpoint—/api/tasks, /api/users, /api/projects.

For HTTP methods, I’d use GET for retrieval, POST for creation, PUT for full updates, PATCH for partial updates, and DELETE for removal. So creating a task is POST /api/tasks, fetching all tasks is GET /api/tasks, and updating a specific task is PUT /api/tasks/{id}.

I’d implement pagination for list endpoints—GET /api/tasks?page=1&size=20—because returning thousands of records at once is a performance nightmare. I’d also add filtering—GET /api/tasks?status=pending&assignee=user123.

For versioning, I’d use URL versioning like /api/v1/tasks rather than header versioning. It’s clearer and easier to test.

Response format matters too. I’d return consistent JSON with appropriate HTTP status codes—200 for success, 400 for bad requests, 401 for auth failures, 500 for server errors. And I’d use DTOs (Data Transfer Objects) to avoid exposing database entities directly.

Spring Boot makes this straightforward with @RestController, @RequestMapping, and ResponseEntity.”

Personalization tip: Use an application domain you’ve actually worked with. The specific example matters less than demonstrating you’ve thought through these considerations.

Describe your experience with front-end frameworks. Which do you prefer and why?
Why they ask: Full stack engineers need strong frontend skills. This reveals your depth in frontend architecture, state management, and component design.

Sample answer:

“I’ve worked with both Angular and React, and I currently prefer React for most projects. With React, the component model is cleaner—it’s just JavaScript, so the learning curve is shallower than Angular’s dependency injection and decorators.

In my last project, we built a React SPA with Redux for state management. We had complex data flow around user permissions and notifications, and Redux’s unidirectional data flow made it predictable and easy to debug. I structured our actions and reducers clearly so any team member could trace how data flowed through the application.

That said, Angular shines in large enterprise applications where you need strong conventions. On a previous project with a team of 15 developers, Angular’s opinionated structure prevented chaos. It’s also stronger out-of-the-box for dependency injection and reactive programming with RxJS.

I’d choose based on team preference and project requirements. React for flexibility and rapid iteration, Angular for large, structured teams. Both have their place.”

Personalization tip: Be honest about your experience level. If you’re stronger in one, say so, but show you understand the tradeoffs of each approach. Avoid sounding like you’re reading marketing material.

How do you handle database schema migrations in a production environment?
Why they ask: This tests your practical operations knowledge and risk awareness. Production data is critical; they want to know you won’t break things.

Sample answer:

“I use Flyway for schema versioning. Every migration is a numbered SQL file—V1__initial_schema.sql, V2__add_users_table.sql, etc. Flyway tracks which migrations have run and applies new ones automatically during deployment.

The key is making migrations backward-compatible and reversible. For example, if I’m renaming a column, I don’t just rename it—I create the new column, copy data over, update application code to use the new column, then drop the old one in a subsequent release. This lets me roll back if something breaks.

For larger changes, I’ll often add a column first, deploy that change with the app reading and writing to both old and new columns, then in a follow-up deployment drop the old column. This reduces downtime and lets us roll back safely.

We also run migration tests locally and in staging before production. I’ll sometimes generate a migration script, run it against a copy of production data, and verify row counts and data integrity before the real deployment.”

Personalization tip: Reference the specific tool you’ve actually used (Liquibase, Alembic, etc.), but the principle is the same—versions, testing, backward compatibility.

Tell me about a time you optimized performance in a full stack application. What was slow, and how did you fix it?
Why they asks: Performance optimization is a practical, highly valued skill. This tells them if you profile before optimizing (good) or guess (bad), and if you think holistically across the stack.

Sample answer:

“We had a user dashboard that was loading in 4-5 seconds, which was unacceptable. I started by profiling. On the backend, I used Spring’s StopWatch and database query logging to identify bottlenecks. Turned out we were running 20+ database queries for a single page load—classic N+1 problem.

I fixed it using Hibernate’s @EntityGraph annotation to eager-load relationships, and we built a specialized query using projections that returned exactly what the UI needed, not entire objects. That cut database queries from 20 to 2.

On the frontend, I used React DevTools Profiler to see which components were re-rendering unnecessarily. We were creating new objects in render functions, which killed memoization. Fixed it with useMemo and useCallback.

Finally, I enabled gzip compression in Spring and minified JavaScript with Webpack. Total result? Dashboard loaded in 800ms. We also set up monitoring with New Relic so we’d catch performance regressions early.”

Personalization tip: Be specific about tools and measurements. “We made it faster” is vague. “4 seconds to 800ms” proves you actually solved it. Include one backend optimization and one frontend optimization.

How do you ensure security in both frontend and backend code?
Why they ask: Security is non-negotiable in production. They’re checking if you think about it proactively or if it’s an afterthought.

Sample answer:

“Security needs to be layered across the stack. On the backend, I validate all input—never trust the client. I use Spring Security for authentication and authorization, implementing JWT tokens for stateless API calls. Passwords are hashed with bcrypt, never stored plain text.

I’m careful about SQL injection. Even with ORM tools like Hibernate, I avoid string concatenation in queries. I use parameterized queries or JPA’s query methods.

For sensitive data, I use HTTPS everywhere. Credentials go in environment variables or a secrets manager like AWS Secrets Manager, not hardcoded or in version control.

On the frontend, I sanitize user input before rendering to prevent XSS attacks. React actually escapes content by default, which is great. For API calls, I include CSRF tokens for state-changing operations.

I also keep dependencies updated. I run npm audit and Maven’s dependency-check plugin regularly to catch known vulnerabilities. On one project, we found a vulnerability in a logging library—updated it immediately before it could be exploited.

The biggest thing though? I think about security from the start, not as an afterthought. Code reviews with security in mind, threat modeling for critical features, and staying aware of OWASP’s top vulnerabilities.”

Personalization tip: Show real examples from your code. “We implemented JWT tokens” is better than listing theoretical concepts.

Describe a complex bug you debugged across the full stack. What was your approach?
Why they ask: This tests your systematic debugging approach and comfort troubleshooting across layers. It shows problem-solving under pressure.

Sample answer:

“We had a payment processing issue where transactions were succeeding on the backend but users weren’t seeing confirmation on the frontend. Intermittent bug, which is always annoying.

I started by checking logs. Backend logs showed successful payment processing, but frontend logs showed the AJAX call hanging. The network tab in DevTools revealed the API request was taking 30+ seconds before timing out.

I realized the backend wasn’t sending a response—it was hanging after processing. Using Spring’s debug mode, I stepped through and found the issue: we were calling an external analytics service synchronously after processing payment, and that service was occasionally slow or timing out. The payment succeeded but the response never got back to the client.

Fix was straightforward—make that analytics call asynchronous using CompletableFuture. We send the response immediately, fire the analytics call in the background, and even if it fails, the user still sees their confirmation.

But that’s not the full story. I added better error handling and timeouts for that external call, and implemented a retry mechanism with exponential backoff. Then I wrote a test that simulates slow external services to catch this earlier next time.”

Personalization tip: Walk them through your debugging process, not just the solution. This shows thinking, not luck.

What’s your experience with containerization and deployment?
Why they ask: DevOps skills are increasingly expected. They want to know if you can own applications from development through production deployment.

Sample answer:

“I’ve containerized applications with Docker and deployed them with Kubernetes. Docker’s been a game-changer for consistency—I build an image once, and it runs identically on my laptop, in staging, and production.

For a recent project, I created a Dockerfile for our Spring Boot app: multi-stage build to keep the image small, non-root user for security, and health check endpoints. We built it in CI/CD so every commit automatically creates an image.

On Kubernetes, we deployed this using YAML manifests. We defined deployment specs, services for networking, and ingress for external access. For scaling, Kubernetes handles it automatically based on CPU and memory metrics we define.

We also used ConfigMaps for configuration and Secrets for sensitive data like database passwords—never hardcoding credentials in images.

The CI/CD pipeline was GitHub Actions. On every push, it runs tests, builds the Docker image, pushes it to our registry, and triggers a Kubernetes deployment. This automation reduced deployment time from hours to minutes and made rollbacks trivial.”

Personalization tip: If you haven’t used Kubernetes, that’s fine—just focus on Docker and your CI/CD experience. Honesty is better than pretending expertise you don’t have.

How do you keep your technical skills current given the fast pace of technology?
Why they ask: This reveals your commitment to growth and your realistic approach to staying relevant. Tech changes constantly—they want people who embrace that.

Sample answer:

“I set aside time intentionally. I read technical blogs—Baeldung for Spring tutorials, Dan Abramov’s blog for React insights. I follow a few key newsletters without getting overwhelmed.

But I learn best by doing. When I hear about a new library or pattern, I build a small side project using it. Not something I’ll ever use professionally necessarily—just enough to evaluate whether it’s worth learning deeper or if it’s hype. That hands-on experience sticks better than tutorial videos.

I also learn from code reviews and other people’s projects. Reading well-written code teaches you more than many blog posts. And I’m not too proud to ask colleagues about approaches I haven’t used.

For specific technologies critical to my role—like keeping up with Spring Boot’s new versions—I dedicate real time. I’ll spend a Saturday morning going through release notes and trying new features in a test project.

The key for me is staying curious without burning out. I don’t try to learn everything—I focus on technologies that matter for my current role or next role I’m targeting.”

Personalization tip: Share what actually works for you. If you hate reading blogs, don’t pretend you love them. Mention specific resources or projects you’ve worked on.

Describe your experience with version control and collaboration workflows.
Why they ask: Full stack engineers rarely work alone. This assesses your professionalism in code review, branching strategy, and working within a team.

Sample answer:

“I use Git daily and follow a consistent workflow. We use feature branches off main—something like feature/user-authentication or bugfix/payment-validation. Every branch is small and focused so code reviews stay manageable.

Before pushing, I make sure my branch is up-to-date with main to avoid messy merge conflicts. I write clear, descriptive commit messages—“Add password reset endpoint” instead of “fix stuff”. These messages matter when you’re debugging three months later.

Code review is important to me. I never merge my own PR. Teammates review it, catch issues I missed, and suggest improvements. I also review others’ code carefully. It’s not about finding problems—it’s about learning from how they solve things.

For branch protection, we require CI/CD checks to pass and at least one approval before merging. This catches broken code before it hits main.

On one project with a larger team, we added a linting check and automated formatting with Prettier and ESLint. Sounds tedious, but it eliminated style debates and made reviews faster—you’re only discussing logic and architecture, not tabs vs spaces.”

Personalization tip: Mention specific workflows your team uses. If you don’t have this level of structure experience yet, be honest and show you understand why it matters.

Tell me about a project where you wore multiple hats as a full stack engineer.
Why they ask: They want to understand your end-to-end ownership and how you balance backend and frontend responsibilities.

Sample answer:

“I led development on a internal metrics dashboard for a previous company. We were spending too much time in spreadsheets, so I proposed building a proper web app.

The backend was Spring Boot with PostgreSQL. I designed a schema to store daily metrics, built REST endpoints to query them, and integrated with our data pipeline to populate data nightly. I used Spring Batch for the ETL process.

The frontend was React with Redux. I built interactive charts using D3.js, implemented filters and date-range pickers so users could explore data flexibly, and added export functionality to CSV.

The tricky part was the data volume—we had years of historical data. I optimized the backend with database indexes and pagination so we weren’t loading everything at once. On the frontend, I virtualized the table so we could render thousands of rows without tanking performance.

I also deployed it—Docker container, automated tests in CI/CD, deployed to AWS using Elastic Beanstalk.

The best part? Users actually used it. Within a month, they’d eliminated most spreadsheet work. That’s the reward of full stack work—you own the whole experience.”

Personalization tip: Show that you understand tradeoffs. You probably spent more time on one layer than the other—acknowledge that while explaining your choices.

How do you approach learning a new technology or framework quickly?
Why they ask: You’ll encounter unknown tech on the job. They want to see your learning strategy and confidence in tackling unfamiliar territory.

Sample answer:

“First, I understand the problem it solves. Why does this technology exist? What problem did it solve better than alternatives? That context helps me learn faster because I’m not just memorizing syntax—I’m understanding the “why.”

Then I build something small. Not a hello-world tutorial—something slightly challenging that forces me to read docs and think through the concepts. For example, when I learned Redis, I didn’t just run through a tutorial. I built a caching layer for our API and optimized a feature I knew was slow.

I also look at real-world code. GitHub repositories, blog posts showing production usage. Toy examples teach you syntax, but production code teaches you patterns and gotchas.

Finally, I ask questions in code reviews and from more experienced teammates. “I noticed you’re using this pattern—why this approach?” Those conversations compress months of learning into hours.

The key is not being afraid to look dumb. Asking “What’s the difference between A and B?” immediately is faster than struggling for a day.”

Personalization tip: Give an actual example of a technology you learned recently and walk through your process.

What’s your experience with microservices architecture?
Why they ask: Microservices are common in larger organizations. This assesses if you understand the complexity and tradeoffs, or if you’d naively push for them everywhere.

Sample answer:

“I’ve worked in both monolithic and microservice architectures, and I understand the tradeoffs. Microservices aren’t inherently better—they’re a solution to specific problems.

In my last role, we started as a monolith using Spring Boot. It worked great initially, but as the team grew to 20+ engineers, coordination became painful. Teams step on each other, deployment is risky, and scaling means scaling everything.

We broke it into microservices: user service, product service, order service, payment service. Each had its own database and deployed independently. Suddenly teams could move faster without blocking each other.

But it added complexity. Inter-service communication, network latency, distributed tracing, handling partial failures—these are real problems. We invested in tools like Spring Cloud for service discovery and resilience patterns like circuit breakers.

One lesson: don’t start with microservices. Monoliths are easier to debug and refactor. Move to microservices when you actually need the benefits, not preemptively.

I’m comfortable operating in both worlds, but I’m skeptical of microservices for small teams. The operational overhead isn’t worth it until you hit real problems.”

Personalization tip: Show nuance. People who’ve only worked in one architecture often have dogmatic views. Demonstrating you’ve worked across contexts shows wisdom.

Behavioral Interview Questions for Java Full Stack Engineers
Behavioral questions explore how you work with others, handle pressure, and approach problems beyond just code. Structure your answers using the STAR method: Situation, Task, Action, Result. This keeps your answer focused, specific, and compelling.

Tell me about a time you had a disagreement with a teammate. How did you resolve it?
Why they ask: Collaboration is essential. They want to see if you’re defensive, collaborative, or can find middle ground.

STAR guidance:

Situation: Set the scene briefly. “I was working on a feature with a senior developer who wanted to implement a complex caching solution.”
Task: What was your responsibility? “I was responsible for the implementation timeline and code quality.”
Action: What did you actually do? “I listened to their approach, then shared performance data showing a simpler solution would meet our requirements. We discussed both approaches, looked at the tradeoffs together, and ultimately chose the simpler option with a plan to revisit if we hit scaling issues later.”
Result: What happened? “We shipped faster, the code was more maintainable, and the senior developer appreciated the data-driven discussion. We avoided both resentment and over-engineering.”
Personalization tip: Use a real example where you genuinely found common ground, not one where you “won” the argument.

Describe a time you failed at something. What did you learn?
Why they ask: Failure is inevitable. They want to see if you blame others, hide from it, or grow from it. Growth mindset is crucial.

STAR guidance:

Situation: “I deployed a database migration that I thought was thoroughly tested. Turns out I missed an edge case with NULL values.”
Task: “The production database started throwing errors, and users couldn’t access a critical feature.”
Action: “I immediately rolled back the migration, fixed the issue, and re-deployed. More importantly, I wrote comprehensive tests for edge cases and added a database backup step before future migrations. I also documented the mistake in our wiki so others could learn from it.”
Result: “We recovered in 20 minutes with zero data loss. More importantly, we prevented that mistake class from happening again. The team adopted my migration testing checklist.”
Personalization tip: Pick a real failure, not a tiny made-up one. Interviewers can smell those. The key is showing what you learned and changed.

Tell me about a project where you had to learn something new quickly under pressure.
Why they ask: Tech moves fast. This assesses your resilience and learning velocity when you don’t have time to be comfortable.

STAR guidance:

Situation: “We had a critical performance issue in production on a React component I’d inherited from another team. We were losing users because the page was too slow.”
Task: “I had 24 hours to solve it because we were losing revenue by the minute.”
Action: “I dug into React DevTools Profiler to understand why components were re-rendering. I’d never used it before, but the documentation was clear. I found unnecessary re-renders, fixed them with useMemo and component splitting. I also checked the network waterfall and found we could parallelize API calls instead of sequential loading.”
Result: “Page load dropped from 8 seconds to 2 seconds. The financial impact was immediate—we stopped the user drop-off. More importantly, I now understand React performance profiling deeply. That knowledge has helped me catch performance issues before they become problems.”
Personalization tip: Show the time pressure was real, not invented. Interviewers respect learning under constraints—it shows capability.

Tell me about a time you had to communicate something complex to a non-technical stakeholder.
Why they ask: Full stack engineers work with product managers, business teams, and leadership. They need to translate technical concepts into business language.

STAR guidance:

Situation: “Our product manager wanted to add a real-time notification feature. The engineers told her it would take 3 sprints. She couldn’t understand why—it seemed like just a new feature.”
Task: “I needed to explain the architecture and time required without losing her in technical details.”
Action: “I walked her through it like this: ‘We need to add WebSocket support, which changes our entire communication model from request-response to bidirectional streaming. We need to handle disconnections, reconnections, and message queuing. We also need to update our deployment infrastructure to support sticky sessions. Think of it like upgrading from a phone system where you call someone, to a walkie-talkie where you’re constantly connected. That’s a different system.’”
Result: “She immediately understood. She prioritized it differently knowing the scale, and we negotiated a simpler MVP—just notifications for the top 3 use cases instead of everything. This aligned engineering effort with business value.”
Personalization tip: Use an analogy that lands with non-technical people. “It’s like X but for web apps” works better than explaining protocols.

Describe a time you mentored someone or helped a teammate grow.
Why they ask: Leadership matters even without a formal title. They want to see if you lift people around you or just focus on yourself.

STAR guidance:

Situation: “A junior developer joined our team with strong Java fundamentals but no full stack experience. They were intimidated by the React codebase.”
Task: “I was asked to help them get productive on frontend features.”
Action: “Instead of just telling them how, I had them pair with me on a small feature. They did the coding while I asked guiding questions. ‘What would happen if we rendered this list inline instead of asynchronously?’ That pushed them to think about loading states and error handling. After a few sessions, they felt confident. I also sent them one blog post about React hooks—not five, just one good one—so they didn’t feel overwhelmed.”
Result: “Within a month, they were shipping features independently. A few months later, they mentored the next junior developer. That multiplier effect is what good teams are built on.”
Personalization tip: Show you adapted to their learning style. One-size-fits-all mentoring doesn’t work.

Tell me about a time you pushed back on a deadline or requirement.
Why they ask: They want to know if you’re realistic about engineering or if you’ll commit to impossible timelines and burn out. Healthy pushback shows maturity.

STAR guidance:

Situation: “Product wanted a complex reporting feature in 2 weeks. It was a big ask.”
Task: “I needed to give honest feedback without being the blocker.”
Action: “I didn’t just say ‘impossible.’ I broke down the work: data pipeline setup (4 days), report generation (5 days), UI and testing (3 days). That’s 12 days of work, but with dependencies, it was actually 10 work days. I showed we could do it in 2 weeks if we cut scope. I proposed a MVP: just the top 3 reports instead of 5. That saved us 4 days.”
Result: “We shipped the MVP on time. Product got value quickly, and we improved the feature over the next few months. If we’d tried to do everything, we’d have missed the deadline anyway, just with burned-out engineers.”
Personalization tip: Show you did the math. “Too hard” is vague. “Here’s the breakdown and what we can realistically achieve” is credible.

Describe a time you received critical feedback. How did you respond?
Why they ask: Nobody’s perfect. They want to see if you’re defensive or coachable.

STAR guidance:

Situation: “In a code review, a senior engineer rejected my PR for using a complex custom solution when a library existed that did it better.”
Task: “I had to accept the feedback and improve.”
Action: “Honestly, my first reaction was defensive—I thought my solution was clever. But I re-read their comment, checked out the library, and saw immediately that they were right. It was simpler, tested, and more maintainable. I rewrote my code using it and thanked them for the pushback. I also asked them to teach me how they knew about that library—was it just experience?”
Result: “I learned something valuable about knowing what exists before reinventing wheels. That engineer became an informal mentor. More importantly, I became better at recognizing when to use existing solutions versus building custom ones.”
Personalization tip: Admit your initial reaction was human, then show how you grew past it.

Technical Interview Questions for Java Full Stack Engineers
These questions require you to think out loud and demonstrate your technical reasoning. There’s rarely one perfect answer—interviewers care more about your process than the conclusion.

Design a URL shortener like bit.ly. Walk me through your approach.
Why they ask: This assesses your system design thinking—database choice, scalability, API design, and tradeoffs.

Framework for thinking through it:

Start by clarifying requirements: “So users paste a long URL, get back a short code, and when they visit that short code, they’re redirected to the original URL. We’re tracking clicks. Is this for millions of URLs, and do we need high availability?”

Assuming yes to both: Design the data model first. A simple schema: id, original_url, short_code, created_at, click_count. You might also track user who created it, expiration, etc.

API design:

POST /urls → takes original_url, returns short_code
GET /urls/{short_code} → returns original URL and click count
DELETE /urls/{short_code} → deletes the mapping
Data storage: Start with a relational database (MySQL/PostgreSQL). Index short_code for fast lookups. Think about sharding if you grow—hash the short code to distribute across databases.

Generating short codes: Don’t use incrementing IDs (guessable, scalability issues). Use a base-62 encoding of a unique ID, or generate random alphanumeric codes and check for collisions.

Caching: Use Redis. Store short_code → original_url mapping. Tens of millions of short codes can fit in memory. Significantly speeds up redirects.

Scaling considerations: If you’re handling millions of redirects per second, you need load balancing. Redis replication for high availability. Monitor hit ratios to ensure cache effectiveness.

Tradeoffs to mention: Strong consistency vs eventual consistency (do we need instant click counts?). In-memory vs persistent storage. Centralized vs distributed ID generation.

Personalization tip: This isn’t about memorizing a perfect answer. Show your thinking: start simple, identify bottlenecks, scale deliberately.

Given this Spring Boot controller, what’s wrong with it? How would you improve it?
@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }
    
    @PostMapping
    public Product create(@RequestBody Product product) {
        return productService.save(product);
    }
}
Framework for analyzing code:

Walk through this methodically:

Exception handling: No try-catch or exception handling. If findAll() throws an exception, the client gets a 500 with a stack trace. Better: use @ControllerAdvice for centralized exception handling that returns meaningful error messages.

Validation: The create method accepts raw Product objects with no validation. A user could submit negative prices or null names. Add @Valid and use annotations like @NotNull, @Min, @Max on the entity or DTO.

Security: No authentication/authorization checks. Anyone can see all products or create products. Add Spring Security with role-based access control.

Pagination: getAllProducts() returns everything. If there are 100,000 products, you’re loading them all into memory. Add pagination: Page<Product> getAllProducts(Pageable pageable).

DTOs: Exposing database entities directly is risky. Use Data Transfer Objects to control what fields clients see. A ProductDTO might exclude internal fields or include computed fields.

Logging: No logging for debugging. Add logger.info() calls at key points.

Improved version:

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public Page<ProductDTO> getAllProducts(Pageable pageable) {
        logger.info("Fetching products, page: {}", pageable.getPageNumber());
        return productService.findAll(pageable).map(ProductDTO::fromProduct);
    }
    
    @PostMapping
    public ResponseEntity<ProductDTO> create(@Valid @RequestBody CreateProductRequest request) {
        logger.info("Creating product: {}", request.getName());
        Product product = productService.save(request.toProduct());
        return ResponseEntity.status(HttpStatus.CREATED).body(ProductDTO.fromProduct(product));
    }
}
Personalization tip: Don’t memorize the perfect answer. Show you recognize issues: error handling, validation, security, pagination, DTOs. The specifics matter less than recognizing problems.

How would you debug a React component that’s not rendering data you expect?
Why they ask: Debugging is a practical, daily skill. This assesses your systematic approach.

Framework for debugging:

“First, I’d check the browser console for JavaScript errors. That catches syntax issues immediately.

Then I’d verify the data is actually being fetched. I’d check the Network tab to see if the API call is happening and what response it’s returning. Is the status 200? Is the response what I expect?

If the API call looks good, I’d check React DevTools. In the Components tab, I’d find the component and look at its props and state. Are they what I expect? If not, I’d trace backward to where they come from.

If the data looks correct in DevTools but still not rendering, I’d add a console.log() right before the render to see what’s being rendered.

A common issue: the data arrives asynchronously

Build your Java Full Stack Engineer resume
Teal's Resume Builder tailors your resume to Java Full Stack Engineer job descriptions — highlighting the right skills, keywords, and experience.

Try the Resume Builder — Free
Find Java Full Stack Engineer Jobs
Explore the newest Java Full Stack Engineer roles across industries, career levels, salary ranges, and more.

See Java Full Stack Engineer Jobs
Start Your Java Full Stack Engineer Career with Teal

Join Teal for Free
Join our community of 4 million+ members and get tailored career guidance and support from us at every step.

Get Started for Free
AI Resume Builder
Get started for free
No credit card required, ever.
Tools
AI Resume Builder
Job Application Tracker
ATS Resume Checker
Resume Summary Generator
Resume Job Description Match
Resume Bullet Point Generator
Free AI Resume Builder
Templates & Examples
Resume Examples
Best Resume Format
Resume Templates
Cover Letter Examples
Cover Letter Templates
CV Examples
Resources
Resume Hub
Career Hub
Resume Synonyms
Job Search
Browse Jobs
Career Paths
Comparisons
Teal vs Jobscan
Teal vs Rezi
Teal vs Novoresume
Teal vs Zety
Teal vs Kickresume
Teal vs Resumenerd
Teal vs Resume Genius
Company
Sign Up
Log In
Teal+ Pricing
About Us
Open Positions
Affiliate Program
Over 4 Million Users
Free AI tools and resources to help you land your next job, faster

Trustpilot
© 2026 Teal Labs, Inc

Privacy Policy
Terms of Service
