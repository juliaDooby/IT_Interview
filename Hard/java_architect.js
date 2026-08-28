Question 1 of 18
Beginner
What is the main difference between JDK and JRE?

A.
JDK is specifically designed for running Java applications in production environments, while JRE is primarily used for developing and compiling Java source code

B.
JDK includes development tools and JRE, while JRE only provides runtime environment for executing Java applications

C.
They are essentially the same technology with different naming conventions

D.
JRE is newer version with enhanced performance optimization features

Java architects help in design and implementation considerations for functional and non-functional requirements of applications developed, and suggest resolutions for technical challenges faced by projects and engineering teams comprising developers and testers during the software development life cycle.

Java Architect Interview Questions
Java architects should be familiar with open-source technologies and design patterns for scalability, security, high availability, and better performance for applications under development.

What is a Java Architect?
A Java architect is primarily responsible for designing, upgrading, and integrating Java applications. This involves his contributions to recommend and review design plans and strategies during the design phase and resolving design or network issues during the development, integration, or release phase of the application.

The candidate must have experience preparing budgets, scheduling expenses, analyzing variations, and implementing changes required by business requirements.

He should have in-depth knowledge of various features like concurrency, Threads, API and web services, Java Server Pages, Servlet, Java Server Faces, EJB, Java Persistent API, JAX-RS, JAX-WS, JNDI, and application and web servers.

He should have hands-on experience in implementing various design patterns for Java applications and successfully designing workable, scalable solutions for various business challenges.

Basic Java Architect Interview Questions for Beginners
Q #1) Explain Continuous Integration, Continuous Delivery, and Continuous Deployment

Answer: In the current software industry, DevOps helps with Continuous integration, delivery, and deployment for agile environments, all done using automated scripts.

Continuous Integration

In an agile development environment, developers integrate their changes into a central repository that contains builds multiple times a day. These builds are stored based on their version in version control systems like Git, SVN, or CVS.

Automated tests validate the changed code files for syntax style, code quality, and compile-time errors before final integration with the build during release.

Continuous Delivery

It is an extension of continuous integration, where changes to your codebase can be deployed to the testing or development environment on a successful build. With continuous delivery, there is an improvement in velocity, productivity, and sustainability. You can plan to release your codebase daily, or weekly, or deploy production quickly with continuous delivery.

Continuous Deployment

Well-designed and reliable test automation defines continuous deployment as the process of releasing developer changes from the version control repository to production. Improved productivity, the real-time response of developers to market demands, and any defects and release of daily stress have become things of the past with continuous deployment.

Q #2) Explain Domain-Driven Design.

Answer: Domain-driven design focuses on the core domain and business logic related to domain problems, with a complex design based on domain models and collaborations with domain and technical experts to resolve specific domain problems.

The domain model consists of data, goals, metrics, ideas, and knowledge about the domain problem to be resolved.

Q #3) Describe the Single Responsibility Principle.

Answer: Single Responsibility Principle, in short, can be described as each class should have a single purpose and responsibility, thereby making software implementation easy and preventing side effects resulting from changes made in the future.

With more frequent changes in a class, the dependencies of other classes also get affected, increasing complexity. With a single responsibility in class, the number of bugs reduces, and the speed of development increases.

The real-time example of a single responsibility principle is Java Persistence API (JPA), with managing data persisting in a relational database in a standard way being the only responsibility.

Q #4) Explain SOLID principles.

Answer: SOLID represents the initials of design principles popular in the development of object-oriented software, making it easy to remember them.

The list of these principles is listed below:

Single Responsibility Principle
Open/Closed Principle
Liskov Substitution Principle
Interface Segregation Principle
Dependency Inversion
Q #5) How would you deal with memory leaks in Java applications?

Answer: When the garbage collector fails to identify unused objects, it reduces the amount of memory allocated to the Java application. The unused object still referred to in the application results in OutOfMemoryError, making the application less reliable. This results in a memory leak.

Memory leaks can be a result of the following:

Use of an unused object reference.
Using Static objects.
Failing to clean up the Native system resources.
Defects in third-party libraries.
We can prevent a memory leak in the following ways:

You should not create unnecessary objects.
Minimize using String Concatenation
Use String Builder to perform append, insert, replace, and delete operations on a string.
Avoid storing excessive data in the session.
Use a timeout for sessions no longer in use.
Avoid the use of the System.gc() method.
Limit using static objects; if used explicitly, refer them to null.
Finally, block close Connection, Statement, and ResultSet.
Q #6) What are the twelve-factor application principles?

Answer: The twelve-factor app methodology is used to build software as a service. It is applied to all applications written in any programming language and uses a combination of cache, database, memory, and queue as backing services.

The twelve factors are listed below:

Admin processes: Automated scripts for the admin task can be packaged along with the application or in source control to ensure they run in the same environment as that of an application.
Build, release, run: The delivery pipeline should have three separate stages—build, release, and run.
Backing services: backing services like database, SMTP, or FTP server, web services should be treated as attached services and should be managed by the execution environment.
Codebase: Maintain the one-to-one association between versioned codebases. Use branches for different versions to prevent complexity within a repository.
Configuration: Environment-specific configuration should be stored in the environment and not in the application.
Concurrency: The application should handle load-balanced requests for multiple identical nodes running simultaneously and scale horizontally for the processes and threads in parallel execution using a feature of handling multithreading in a Java virtual machine.
Dependencies: The services running in the application should declare dependencies explicitly and should not rely on system-level libraries or tools. You can install Apache Maven to maintain application dependencies.
Disposability: Application processes should be disposable, and applications should have a quick start-up and graceful shutdown process. During the shutdown, it should not accept any new tasks but allow the existing tasks to complete.
Development/Production parity: The gap between application development, test environments, and production deployment should be minimal.
Logs: The application, when executed, should log a stream of events that should be integrated with the ELK stack or Splunk as centralized logging.
Processes: Application transient processes should not share anything and are stateless. The backing services should be present to store persistent data.
Port binding: Applications should be self-contained and accessible to HTTP ports.
Q #7) List the differences between monolithic, SOA, and microservices architecture.

Answer: Application architecture is categorized into three major categories: monolithic, SOA, and microservices. The definition and differences between them are explained below:

Monolithic applications are single, wherein data access and user interface code are combined in a single platform. E-commerce software as a service (SaaS) is an example of a monolithic application.

Service Oriented Architecture (SOA) applications use network services such as the web, and mobile applications using the Global Positioning System (GPS) to send the current locations is an example of SOA architecture.

Microservices architecture is a collection of loosely-coupled services where services are fine-grained, and protocols are lightweight. Amazon Web Services and Netflix are some examples of microservices applications.

Monolithic architecture	Service oriented architecture (SOA)	Micro services architecture
Better performance	Better maintainable	Increased agility
Simple deployment and development	Higher reliability	Able to horizontal scaling
Easy to overcome cross cutting concerns	Parallel development	Complex design
Limited agility	Complex management	Security concerns
Codebase getting cumbersome over time	High investment costs	Different programming languages
Difficult to adopt new technologies	Extra overload	
Q #8) List the benefits of sharding in the database.

Answer: In Sharding single dataset is distributed across multiple databases and eventually stored on multiple machines.

Benefits database sharding offer is listed below:

Improved Read/Write Throughput: With reading and write operations assigned to a single shard, and the dataset distributed across multiple shards. The capacity for reading and writing operations is enhanced.
Enhanced Storage Capacity: Capacity to store increases with infinite scalability on increasing shards count.
High availability: Shard offers higher availability in two ways. First, with each shard a replica set, each data is replicated. Second, the entire shard becomes unavailable for distributed data, the database remaining partially functional, and part of the schema on different shards.
Q #9) Explain the advantages of the Spring framework for Java applications.

Answer: Below is a list of the advantages of the Spring Framework.

Spring is lightweight due to POJO (plain old Java objects) implementation
Spring Framework provides flexible libraries with configurations using either XML or Java annotations.
Applications developed using the Spring framework are loosely coupled due to dependency injection.
The framework provided powerful abstraction for JEE specifications like JDBC, JTA, JPA, and JMS.
Spring provides declarative support for validation, transactions, caching, and formatting.
Swing application client-side business logic is portable.
The resource manager is easy to copy and paste wherever needed, cross-cutting concerns.
The Spring Framework provides a configuration separate from the application logic.
The framework has well-defined components of the lifecycle, such as init(), destroy().
The dependency injection concept simplifies JavaEE development.
The testing spring application is easier due to the use of dependency injection.
Fast Starting, Fast Shut down, and optimized execution performance make the Spring framework desirable in the industry.
The Spring Security framework makes applications secure.
Spring community supports the developers with tutorials, videos, and guides.
It is produced as we can combine Spring Boot with Spring Cloud.
Q #10) List and explain different memory types allocated by the Java virtual machine.

Answer: The different memory types allocated by the JVM are explained below:

Class: Class area in the JVM stores class, variable, method, and constructor code of a Java program. It stores the runtime constant pool, method, and field data – class-level data of every class and method code.
Heap: Objects are created and stored in the heap area. Heap memory is allocated for arrays, class interfaces, and objects at runtime.
Stack: There is a private JVM stack for each of the threads that stores partial results and data that is required while returning a value for performing dynamic linking and methods. The Java stack stores a frame created at every method invocation.
Program Counter Register: Special method carried out by the JVM thread has a program counter register associated with the thread. The JVM instruction address is stored in the non-native method of a program counter, whereas the program counter value is undefined for the native method. The native pointer on the platform or return address can store on the program counter register.
Native Method Stack: Each thread is allocated each thread when created, which is fixed or dynamic.
Q #11) List various class loaders of the Java Virtual Machine.

Answer: Class loaders dynamically load Java classes to Java virtual machine (JVM) during runtime.

The different class loaders in the JVM are described below:

Application or system class loader loads application-type classes that are found in the environment variable with any of the command-line options such as CLASSPATH, -classpath, or –cp option.
Bootstrap or primordial class loader executes the code on the JVM call. It loads the first pure Java ClassLoader and classes from the rt.jar location.
Extension class loader is a child of the bootstrap class loader, loads core Java class from the respective JDK extension library. It loads the file from the location jre/lib/ext OR directories that point to the system property java.ext.dirs
Q #12) List the differences between an interface and an abstract class in Java.

Answer: Both abstract class and interface contain methods that are declared with or without implementation. You cannot instantiate them.

The differences between them are as follows:

Abstract class
Interface
It can have abstract and non-abstract methods	It can have abstract methods as well as default and static methods since Java 8
There is no support for multiple inheritance	There is support multiple inheritance
It can have final, non-final, static and non-static variables.	Can have only static and final variables
Provide implementation of interface	Can’t provide implementation of abstract class
To declare abstract class use abstract keyword	To declare interface use interface keyword
It can extend another Java class and implement multiple Java interfaces	It can extend another Java interface only
Use “extends” keyword to extend abstract class	Use “implements” keyword to implement interface
Have Class members like private, protected etc.	Java interface members are public by default.
Q #13) List the differences between a local variable and an instance variable in Java.

Answer: Java has three variable types – class variable, instance variable, and local variable.

The difference between the instance variable and local variable is listed below:

Instance (variable)
Local (variable)
Defined in class but outside of method body	Declared within programming blocks or subroutine
Created when object is instantiated and accessible to all blocks, methods and constructors in class	Created when block, method or constructor starts and destroyed on exit from block, method and constructor
Destroyed when object is destroyed	Destroyed when method or constructor is exited
Accessible throughout the class	Access is limited to the methods in which they are declared
Used for reservation of memory for data class needs and lifetime of an object	Used to decrease component dependencies.
Initializing instance variable before its use is not mandatory	It is essential to initialize local variable before its use
Access modifiers – private, public and protected is included while declaring variable.	While declaring local variable, access modifiers are not included.
Java Architect Intermediate Interview Questions
Q #14) Explain various collection classes and interfaces used in Java applications.

Answer: In Java, the Collection interface and the Map interface are two root interfaces of Java collection classes. Prior to the Collection framework, Arrays Vectors, or Hashtables were used to group Java objects.

Class is a prototype objects are created from these prototypes and represents a set of methods or properties common to one type of all objects.
Interface like class can have variables and methods, with methods declared as abstract, having only a method signature but without a body. Interface – blueprints for class, instructs the class on what to do and what not to do.
Q #15) List the ways to manage sessions in Java using JSP and Servlets.

Answer: In modern web applications, the session tracking feature helps the server to remember clients and previous visitors with a session for each user. It helps in the personalization of profiles, safety, and security for e-commerce applications.

You can manage sessions for a Java application built with JSPs and Servlets in the following four ways:

Cookies
HTTPS and SSL
Hidden Form fields
URL rewriting
Q #16) Describe different ways of exception handling in the Spring MVC framework.

Answer: The exception is handled in multiple ways in the Spring MVC framework in the following ways:

Controller-based classes: Using @ExceptionHandler annotation using exception class as an argument in exception handling methods in controller classes.
Global exception handler: Spring provides @ControllerAdvice annotation are used with any class for defining global exception handler. This exception is used when the controller class cannot handle exceptions.
HandleExceptionResolver: In order to create a global exception handler HandleExceptionResolver interface can be implemented. We can define default implementation classes in the Spring bean configuration file for Spring Framework exception handling benefits.
Q #17) What are ACID properties?

Answer: A single unit of work by accessing and updating the content in the database is described as a Transaction. Using Read and Write operations, access to records (data) from the database is handled by the transaction. The consistency of the database, before and after the transaction, is maintained by ACID properties.

Atomicity: The transaction in the database takes place successfully or does not take place at all.
Consistency: Before the transaction and after the transaction, the database remains consistent.
Isolation: There occur independent multiple transactions without any interference
Durability: The changes due to successful transactions are reflected even if the system fails.
Q #18) List the beneficiaries of API reusability.

Answer: Using API functionality for multiple applications instead of creating new ones for each application is known as API reusability.

There are two beneficiaries of API reusability:

Information is shared internally for multiple applications for utilization. For example, an API designed to manage inventory can also be utilized for e-commerce order updates by the marketing team, resource management by the human resources team, and the ERP system.
Third parties use the API for retrieving information; for example, the payment gateway API application is integrated with multiple payment options used by third parties. The customization, like payment using foreign currency, can be applied as a wrapper to this API.
Q #19) List the differences between SOAP and REST services.

Answer: The services that are built on standards such as TCP/IP, HTTP, XML, and Java can be invoked over the network to communicate between software using XML or JSON-based medium for data exchange. SOAP and REST are commonly used web services.

Below, we list the difference between them.

Simple Object Access Protocol
Representational State Transfer
It is a protocol	It is architecture
Business logic is exposed with services interface	Business logic exposed using URI
JAX-WS is a Java API used for SOAP web services	JAX-RS – Java API used for RESTful web services
Need more resources and bandwidth compared to REST	Need less resources and bandwidth compared to SOAP
Data format permitted is XML	Accepts plain text, XML, HTML and JSON as data format
It is less preferred compared to REST	It is preferred than SOAP
Q #20) List the differences between API and web service.

Answer: API without any implementation knowledge allows applications to communicate with other applications or services without user intervention. Web services are a collection of standards or open protocols used to exchange information between applications or systems.

The list of differences between API and web services is given below:

API
Web service
API service cannot essentially be a web service	All web services are essentially APIs
Response format for API are XML, JSON or any other format.	XML is only response format supported
Its architecture is light weight.	Web services need SOAP protocol for exchange of data over network hence it is not considered light weight.
Used with any communication style	Use SOAP, REST and XML-RPC
It supports URL request/Response header in addition to HTTP/s protocol	It supports only HTTP protocol
Used for client with XML OR JSON knowledge	Used for client that has only XML understanding
Q #21) Differentiate between JDBC and Hibernate.

Answer: Java Database Connectivity (JDBC) is an application programming interface (API) for Java programming language that decides how the client interface connects with or accesses the database. A part of Java Standard Edition, the JDBC API has classes and interfaces that help connect the backend database with the front-end client.

Hibernate is an object-relational mapping (ORM) tool and Java persistent framework that helps to store and retrieve data from the database and maps this data with Java objects using XML.

Q #22) How would you resolve database deadlock?

Answer: The database deadlock is a situation that occurs when two or more transactions are waiting for another transaction to get complete and give up the lock. The deadlock occurs when both processes are on hold for each other to finish. We can avoid this situation by allocating resources in such a way that deadlock never occurs.

A queue can be designed that would verify each request before sending it to the database.
Use very few cursors in our queries to prevent the locking of database tables.
Q #23) Select which one is a better option – you store session info or use session info in the request.

Answer: Storing session info is a better option than using session info in a request, as the latter option is vulnerable and can be intercepted. The respective domain can only access session info stored in cookies in order to ensure the right session information is provided by the user.

Q #24) What are the main differences between the first-level and second-level cache in Hibernate?

Answer: The first-level cache in Hibernate is accessible to Sessions and maintained at the Session level whereas the second-level cache is available to all Sessions and maintained at the SessionFactory level.

For the second-level cache–concurrency strategy to be decided, cache expiration and physical cache attributes need to be configured. The first-level cache does not need any additional configuration.

Q #25) List the steps to avoid LazyInitializationException

Answer: LazyInitializationException is thrown by the Hibernate framework while initializing a lazily fetched association to another entity without an active session context.

You can avoid it using the following steps:

By setting parameter value, lazy=false in hibernate config file.
At mapping setting @Basic(fetch=FetchType.EAGER).
By making sure the dependent objects are accessed before the closing of the session.
Using Hibernate.initialize.
Use of Fetch Joins in HQL.
Q #26) What are the ways to improve application performance that need improvement in database communication?

Answer: The following steps will improve application performance that needs improved database communication:

Optimization of queries using rewriting queries and using Prepared Statements.
Restructuring of Indexes.
Tuning of DB caching when ORM tool like Hibernate is used,
Identifying problems with ORM strategy if used.
Q #27) Explain with reason what approach you would choose in code implementation – inserting a record or updating if the record already exists.

Insert record in a database table, if an exception occurs, update an existing record.
Verify if the record exists, and update it if the record exists, or else insert a new record.
Answer: Decision on the selection of the approach will depend on

Are we using hibernate indices, and how costly is a call to the database Approach 1 should be selected if the DB call is costly.
The advantage of using the 1st call to DB in the first approach should be bigger than Bookkeeping for exceptions.
If the DB table is empty, using the 1st approach will make sense, as it will pass without any exception.
Q #28) List the new features introduced in Java 8

Answer: The following are the newly introduced features in Java 8

Functional interfaces.
Default and Static methods in interfaces.
Use of forEach() method in the Iterable interface.
Introduction to Java Date Time API.
Introduction of an Optional class.
Improvement in Collection API.
Improvements in Java IO.
Java Stream API for bulk data operations on collections.
Lambda expressions.
Q #29) What is Metaspace in Java 8?

Answer: The permanent generation space (permgen) has been replaced with a new space called metaspace, thereby JVM arguments – PermSize and MaxPermSize are ignored and you will never get java.lang.OutOfMemoryError due to PermGen.

Q #30) While creating your own exception in Java, list the measures you should consider.

Answer: The following measures should be taken while creating your own exceptions in Java.

All exceptions should be children of Throwable class.
You should extend the Exception class, to write a checked exception enforced by the Handle or Declare Rule.
You should extend the RuntimeException class, to write a runtime exception.
Conclusion
Java architect develops application design and helps the team in identifying business requirements, troubleshooting design flaws, and suggesting development frameworks and technologies to be applied to obtain the resolution in the form of Java-based software applications across the design, development, test, and release stages.

