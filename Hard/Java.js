30+ TOP Servlet Interview Questions and Answers (2026 LIST)
By Vijay  Updated December 6, 2025
Most frequently asked Servlet interview questions and answers to help you in interview preparation:

This series of Servlet questions will guide you through any Servlet interview.

It includes all about what a servlet is t, why Servlet came into the picture, the life cycle of Servlet and its methods, Load on start-up, WAR file, Deployment Descriptor, and its function, and the Welcome file and its importance.

We will also learn how Servlet works, Servlet Collaboration, Servlet config, Servlet context, Session tracking and techniques & benefits, Events, filter, its working principles, and its importance.

Servlet Interview Questions Quiz
Try this expert quiz to prove your Servlet skills. This quiz on Servlet interview questions covers fundamental and advanced concepts along with practical & scenario-based questions to ace your next interview.

🚀 Servlet Interview Questions QUIZ
Master Servlet concepts with confidence-building practice
Basic Concepts and Lifecycle
Question 1 of 15
Which HTTP method is used to retrieve data from a server?
GET
PUT
POST
DELETE

Servlet Interview Questions and Answers
The Interviewer always expects some real-time examples in your answer that turn out to be handy in interviews. Hence, if you go through all these questions thoroughly and if you can explain it in your own words, then you can get through an interview.

Best Servlet Interview Questions
Here is a quick list of some of the important questions covered in this article:

What is Servlet?
Types of a Servlet
Servlet Life Cycle
Servlet Life Cycle methods
How Servlet Work?
WAR file and its use?
What is Load on Start-up and its importance?
What is the deployment descriptor?
Servlet Collaboration procedure
What is RequestDispatcher?
What are SendRedirect method and its use?
About Servlet Config and Servlet Context
About Session tracking and its techniques
Cookies, Hidden Form Fields, URLs, etc
About Events
What is a Filter and what types of filters?
Let’s start with detailed answers.

Q #1) What do you mean by Servlet?

Answer: Servlet is a powerful mechanism that is used to create web applications.

It is occupied at the server side and helps to generate dynamic web pages. It acts as a mediator between the incoming HTTP request from the browser and the database.

Servlet is based on Java Language, hence, it is robust and called a server-side programming language.

Flow of Servlets
The above diagram explains the flow of Servlet.

A request comes from the web page to the servlet, servlet redirects the request to the appropriate JSP page and the JSP page sends the response as a result page, which is visible to the user.

Recommended Reading =>> JSP Interview Questions

Q #2) What is CGI and what are its drawbacks?

Answer: CGI stands for Common Gateway Interface, which is a set of codes written on the server side that is used to interact through the Web Server with a client running on a web server.

It takes the incoming request and for every new request; it starts a new process.

Drawbacks of the Common Gateway Interface:

As it creates a new process for every incoming request, if the number of incoming requests is more than the response generated will be very slow, which in turn reduces the efficiency.
CGI is platform-dependent.
Q #3) What are the advantages of Servlet over CGI?

Answer: The advantages of the servlet are as follows:

Servlet creates a thread for each incoming request and does not process, thus it is faster.
Servlet is platform-independent as it is based on the Java Programming Language.
As it is based on Java, it is also robust and secure.
Q #4) How is a Servlet implemented in code?

Answer: Servlet can be implemented in code by simply extending the Httpservlet or generic servlet class.

Q #5) What is the difference between the HTTP Servlet and Generic Servlet?

Answer: Generic Servlet can handle all types of requests. As it has a service () method, it is independent, whereas Http Servlet extends the generic servlet and supports the HTTP methods such as doGet (), doPost (), doHead (), doTrace (), etc.

Q #6) What are the life cycle methods of the Servlet?

Answer: There are three lifecycle methods of a servlet.

These are:

Init ()
Service ()
Destroy ()
Q #7) Explain the Lifecycle of Servlet.

Answer: The life cycle of a servlet is explained in the diagram below .

At first, the Servlet class is loaded as per the request received from the Client.
Then the new instance or object of a servlet is created. Only one object is created for every life cycle.
Then the Init () method, used to initialize the servlet, is invoked.
Syntax: public void Init ()

The Service () method is invoked whenever a new request is received to perform any operations.
Syntax: public void service ()

Then the destroy method is invoked to perform the clean-up operation.
Syntax: destroy ()

Servlet Flow Diagram

Servlet Flow Diagram
Q #8) What is a web container, and what is its responsibility?

Answer: A web container is also called Servlet container and is used to interact with the Servlet and contains all the Servlet, JSP, XML files in it. Web container manages the life cycle of a servlet and helps to map the URL to a specific servlet. Web container creates the object of a servlet.

Q #9) How is the Get () method different from the Post() method?

Answer: The reasons why the Get () method is preferred over the Post() method are given below.

Get () method:

Here, a specific amount of data or information can be sent as the data is sent through the header.
In the Get() method, data is not secured as it is exposed in the URL bar to the user.
The Get () method can be bookmarked.
Generally, the get () method is more effective and used over the post () method.
Post () method:

Here, a huge amount of data or information can be transferred as the data is sent through the body.
As the data in the Post () method is sent through the body, it is secured.
The Post () method cannot be bookmarked.
Generally, the Post () method is less effective and is not often used.
Q #10) What is Servlet looping or chaining?

Answer: Servlet looping is a process in which the output of one servlet is given as an input to another servlet and the last servlet output is considered as the actual output which is provided to the client.

This process is achieved through the request dispatcher interface.

Q #11) How will two or three servlets interact or communicate with each other?

Answer: There are two processes in which the servlets can communicate with each other.

Request Dispatcher Interface
Servlet Chaining
Q #12) Explain Request Dispatcher and its methods.

Answer: Request Dispatcher creates an object that is responsible for receiving requests from the browser or client and then navigates them to any resources like Servlets, JSP, or HTML that reside on the server side.

There are two methods of Request Dispatcher:

a) Forward () method:

In the Forward() method, the client sends the request to Servlet1.
The Servlet1 processes the request and then forwards the request to Servlet2.
The servlet2 processes the request and generates a response which in turn is sent back to the client as the final response.
b) Include () method:

In Include () method, the client sends the request to Servlet1.
The Servlet1 processes the request and then includes the request and sends the request to Servlet2.
The Servlet2 processes the request and again sends it back to Servlet1.
The Servlet1 generates a response, which in turn is sent back to the client as the final response.
Q #13) What is the use of the Send Redirect () method?

Answer: Send Redirect () method which works on the client side is used to redirect the response to another resource like Servlet, JSP, HTML.

Syntax: void send Redirect(URL);

Example: response.sendredirect(“http://www.google.com”);

Q #14) How Forward () method is different from Send Redirect () method?

Answer:

Forward () method:

It is used to send the same request to another resource.
It works on the server-side within the server.
Send Redirect () method:

It always sends a new request to the resources as it uses the URL.
It works at the client side, both outside and within the server.
Q #15) Explain the WAR file.

Answer: A WAR file is basically referred to as a Web Archived file, which has all the files of your application like XML, servlets, JSP, HTML, and configuration files, combined into a single file so that deploying the application would be simple and easy.

It is advisable to use a WAR file for deployment.

Q #16) What do you mean by Servlet Context?

Answer: Servlet Context is referred to as an object that has information regarding the application and the Web Container. With the Servlet context, we can log events, get the URL of the specific resource, and can easily store the attributes for other servlets to use.

The core advantage of Servlet is that it is easy to maintain and acts as a mediator between the container and the servlet.

There are some important methods of the servlet context which are given below:

getInitParameter () – return the value of the parameter.
getInitParameterNames () – returns the name of the parameter.
void setAttribute () – used to set the values of attributes.
void getAttribute () – used to get the values of attributes.
void removeAttribute () – used to remove the attribute.
Q #17) What exactly are the functions of Servlet?

Answer: The functions performed by the servlets are:

Firstly, Servlets receive the HTTP request which is sent from the client-side.
Reads the request and extract the data from the request.
After extracting the information, the servlets perform a business logic operation by accessing a database or invoking EJBs.
Lastly, it generates a response and sends it to the client as HTTP or sends the response to the JSP page.
Q #18) What do you mean by deployment descriptor?

Answer: WEB.XML is said to be the deployment descriptor for a servlet.

It is the entry point for any application and possesses the welcome file list. It defines resources, and information about which servlet will be used and maps the servlet to URL.

Q #19) Explain Session tracking and its importance.

Answer: Session tracking is a process in which the data of the client or user can be maintained.

As every time a new request comes to the server, the server cannot recognize that the new request is coming from the same client, to avoid this problem, a session tracking technique is used.

Session Tracking plays a vital role in recognizing the client or the request.

Q #20) What are the different Session Tracking Techniques?

Answer:

There are four types of techniques, which are given below:

a) Cookies: Cookies are small information that are added to multiple client requests.

Example: One request comes to the server; the server adds some cookies with the response. Now, when the same client sends the request to the server again, the server recognizes the user.

b) Hidden Form Field: Here, we use a hidden text field for maintaining the state of the user.

c) URL Rewriting: Here, we give an extra link for the next servlet to be mapped.

d) Http Session: Here, a specific ID is generated for each user, so the server can recognize the user.

Q #21) What are the Servlet events?

Answer: Events are nothing but occurrences. Even changing the condition of the object is also an event.

The event classes and interfaces are as follows:

Classes: ServletRequestEvent, ServletContextEvent, HttpSessionEvent etc.
Interfaces: ServletRequestListner, ServletContextListner, HttpSessionListner etc.
Q #22) What do you mean by a filter, and how does it work?

Answer: A Filter is basically used to filter out things.

In a similar manner Filter in servlet is an object that is introduced at the pre-processing of request and post-processing of request. Its major functions include conversion, encrypting and decrypting values, input validation on data capturing the IP address, and saving all incoming requests.

A filter is defined in web.xml and it can be removed from the web.xml so that there is no need to change the servlet resulting in cost reduction.

Diagram of Servlet Filter working

Servlet Filter
Q #23) Explain the load on start-up and its importance.

Answer: Load on start-up is an element defined in web.xml (deployment descriptor) which helps the servlet to load at the time of deployment, while the server is restarting.

The reason to use load on start-up is that the servlet is loaded on the first request received so initially it takes more time to load resulting in decreased efficiency if we define loan on start-up it loads the servlet while the server restarting which increases efficiency.

Load on start-up is also working on two values:

Positive (0,1,2,3….): The lowest positive value will be loaded first.
Negative: The servlet will be loaded when the first request is received.
Q #24) Is the servlet synchronized?

Answer: No, the servlets are not synchronized. If we want to make the servlet synchronized, we must implement SingleThreadInterface.

Q #25) What do you mean by Scope Object and what are its types?

Answer: Scope objects help to share information among web components via setattribute() and getattribute().

Types of Scope Objects are:

Web Context
Session
Request
Page
Q #26) What does the term Localization refer to?

Answer: Localization refers to the local tradition or language followed by the user. So, we add resources or elements to the particular website, like adding the Hindi language, so every user can understand.

Q #27) If the servlet receives multiple requests, how many objects will it create?

Answer: Servlet will create only one instance, no matter how many incoming requests it receives.

Q #28) What is the major difference between Servlet and Applet?

Answer: The major difference between Servlet and Applet is that the Servlet resides on the server side whereas the Applet resides on the client side in the web browser.

Q #29) Is it possible to have a Constructor inside the Servlet?

Answer: Yes, it is possible to define a constructor inside a servlet, but it can be called only by the Servlet container and not explicitly.

Q #30) Name the packages that work with Servlet.

Answer: Two packages work with Servlet as shown below:

Javax.servlet
Javax.servlet.http
Q #31) What are the kinds of HTTP requests?

Answer: Kinds of HTTP requests include:

Get
Post
Head
Options
Put
Trace
Delete
Q #32) What is the major difference between Context Parameter and Context Attribute?

Answer: The major difference between the two is,

Context Parameter is a value stored in the deployment descriptor i.e. web.xml and is loaded during the deployment process. Whereas, Context Attribute is the values that are set dynamically and can be used throughout the application.

Q #33) What is the process for chaining servlets?

Answer: Servlet chaining is a very simple process in which we give the output of one servlet as input to another servlet.

Firstly, we have to create a RequestDispatcher for a resource that has to be chained. Then, we have to set the attribute values for the request if required. Then we need to call the forward () method or include () method on a RequestDispatcher object.

I’m sure that you would have got a clear picture of what Servlet is all about!


50+ Top Core Java Interview Questions and Answers (2026)
By Vijay  Updated December 4, 2025
Most frequently asked Core Java Interview Questions and answers with examples. Read and practice these core java questions covering basic and advanced questions for freshers and experienced professionals:

In this tutorial, we have covered almost 50+ important Java interview questions with detailed answers.

This post on JAVA Interview is prepared to help you understand the basic concepts of Java programming for interview purposes. All the important JAVA concepts are explained here with examples for your easy understanding.

Table of Contents: [Show]

Quick TEST on Core Java Interview Questions
Core Java Interview Quiz
Master the fundamentals with interactive practice

Ready to Test Your Java Skills?
Challenge yourself with 15 carefully crafted questions covering essential Core Java concepts for junior to mid-level developers.

15 randomized questions each attempt
Instant feedback with detailed explanations
Covers OOP, Collections, Multithreading & more
Mobile-friendly responsive design
Start Quiz
This tutorial covers JAVA topics like basic Java definitions, OOP concepts, Access specifiers, Collections, Exceptions, Threads, Serialization, etc., with examples to make you get ready perfectly to face any JAVA interview confidently.

Java Interview Questions And Answers
Core Java Interview Questions for Beginners
Given below is a comprehensive list of the most important and commonly asked basic and advanced Java programming interview questions with detailed answers.

Q #1) What is JAVA?

Answer: Java is a high-level programming language and is platform-independent.

Java is a collection of objects. It was developed by Sun Microsystems. There are a lot of applications, websites, and games that are developed using Java.

Q #2) What are the features of JAVA?

Answer: Features of Java are as follows:

OOP concepts
Object-oriented
Inheritance
Encapsulation
Polymorphism
Abstraction
Platform independent: A single program works on different platforms without any modification.
High Performance: JIT (Just In Time compiler) enables high performance in Java. JIT converts the bytecode into machine language and then JVM starts the execution.
Multi-threaded: A flow of execution is known as a Thread. JVM creates a thread which is called the main thread. The user can create multiple threads by extending the thread class or by implementing the Runnable interface.
Q #3) How does Java enable high performance?

Answer: Java uses Just In Time compiler to enable high performance. It is used to convert the instructions into bytecodes.

Q #4) Name the Java IDE’s?

Answer: Eclipse and NetBeans are the IDE’s of JAVA.

Q #5) What do you mean by Constructor?

Answer: Constructors can be explained in detail with enlisted points:

When a new object is created in a program a constructor gets invoked corresponding to the class.
The constructor is a method which has the same name as the class name.
If a user doesn’t create a constructor implicitly a default constructor will be created.
The constructor can be overloaded.
If the user created a constructor with a parameter then he should create another constructor explicitly without a parameter.
Q #6) What is meant by the Local variable and the Instance variable?

Answer:

Local variables are defined in the method and scope of the variables that exist inside the method itself.

Instance variable is defined inside the class and outside the method and the scope of the variables exists throughout the class.

Q #7) What is a Class?

Answer: All Java codes are defined in a Class. It has variables and methods.

Variables are attributes which define the state of a class.

Methods is a place where the exact business logic has to be done. It contains a set of statements (or) instructions to satisfy the particular requirement.

Example:

1
2
3
4
5
6
7
public class Addition{ //Class name declaration
int a = 5; //Variable declaration
int b= 5;
public void add(){ //Method declaration
int c = a+b;
}
}
Q #8) What is an Object?

Answer: An instance of a class is called an object. The object has state and behavior.

Whenever the JVM reads the “new()” keyword then it will create an instance of that class.

Example:

1
2
3
4
5
public class Addition{
public static void main(String[] args){
Addion add = new Addition();//Object creation
}
}
The above code creates the object for the Addition class.

Q #9)What are the OOPs concepts?

Answer: OOPs concepts include:

Inheritance
Encapsulation
Polymorphism
Abstraction
Interface
Suggested Read =>> Top OOPs Interview Questions

What is Object Oriented Programming (OOPS)? Simple Explanation for Beginners
Q #10) What is Inheritance?

Answer: Inheritance means one class can extend to another class. So that the codes can be reused from one class to another class. The existing class is known as the Super class whereas the derived class is known as a sub class.

Example:

1
2
3
4
5
6
Super class:
public class Manupulation(){
}
Sub class:
public class Addition extends Manipulation(){
}
Inheritance is only applicable to the public and protected members only. Private members can’t be inherited.

Q #11) What is Encapsulation?

Answer: Purpose of Encapsulation:

Protects the code from others.
Code maintainability.
Example:

We are declaring ‘a’ as an integer variable and it should not be negative.

1
2
3
public class Addition(){
int a=5;
}
If someone changes the exact variable as “a = -5” then it is bad.

In order to overcome the problem we need to follow the steps below:

We can make the variable private or protected.
Use public accessor methods such as set<property> and get<property>.
So that the above code can be modified as:

1
2
3
public class Addition(){
private int a = 5; //Here the variable is marked as private
}
The code below shows the getter and setter.

Conditions can be provided while setting the variable.

1
2
3
4
5
6
7
get A(){
}
set A(int a){
if(a>0){// Here condition is applied
.........
}
}
For encapsulation, we need to make all the instance variables private and create a setter and getter for those variables. Which in turn will force others to call the setters rather than access the data directly.

Q #12) What is Polymorphism?

Answer: Polymorphism has many forms.

A single object can refer to the super-class or sub-class depending on the reference type which is called polymorphism.

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
Public class Manipulation(){ //Super class
public void add(){
}
}
public class Addition extends Manipulation(){ // Sub class
public void add(){
}
public static void main(String args[]){
Manipulation addition = new Addition();//Manipulation is reference type and Addition is reference type
addition.add();
}
}
Example:

Using the Manipulation reference type we can call the Addition class “add()” method. This ability is known as Polymorphism. Polymorphism is applicable for overriding and not for overloading.

Q #13) What is meant by Method Overriding?

Answer: Method overriding happens if the sub-class method satisfies the below conditions with the Super-class method:

Method name should be the same
The argument should be the same
Return type should also be the same
The key benefit of overriding is that the Sub-class can provide some specific information about that sub-class type than the super-class.

Example:

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
public class Manipulation{ //Super class
public void add(){
………………
}
}
  
Public class Addition extends Manipulation(){
Public void add(){
………..
}
Public static void main(String args[]){
Manipulation addition = new Addition(); //Polimorphism is applied
addition.add(); // It calls the Sub class add() method
}
}
addition.add() method calls the add() method in the Sub-class and not the parent class. So it overrides the Super-class method and is known as Method Overriding.

Q #14) What is meant by Overloading?

Answer: Method overloading happens for different classes or within the same class.

For method overloading, sub-class method should satisfy the below conditions with the Super-class method (or) methods in the same class itself:

Same method name
Different argument types
There may be different return types
Example:

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
public class Manipulation{ //Super class
public void add(String name){ //String parameter
………………
}
}
  
Public class Addition extends Manipulation(){
Public void add(){//No Parameter
………..
}
Public void add(int a){ //integer parameter
  
}
Public static void main(String args[]){
Addition addition = new Addition();
addition.add();
}
}
Here the add() method has different parameters in the Addition class is overloaded in the same class as with the super-class.

Note: Polymorphism is not applicable for method overloading.

Q #15) What is meant by Interface?

Answer: Multiple inheritances cannot be achieved in java. To overcome this problem the Interface concept is introduced.

An interface is a template that has only method declarations and not the method implementation.

Example:

1
2
3
4
Public abstract interface IManupulation{ //Interface declaration
Public abstract void add();//method declaration
public abstract void subtract();
}
All the methods in the interface are internally public abstract void.
All the variables in the interface are internally public static final that is constants.
Classes can implement the interface and not extends it.
The class which implements the interface should provide an implementation for all the methods declared in the interface.
1
2
3
4
5
6
7
8
public class Manupulation implements IManupulation{ //Manupulation class uses the interface
Public void add(){
……………
}
Public void subtract(){
…………….
}
}
Q #16) What is meant by Abstract class?

Answer: We can create the Abstract class by using the “Abstract” keyword before the class name. An abstract class can have both “Abstract” methods and “Non-abstract” methods that are a concrete class.

Abstract method:

The method that has only the declaration and not the implementation is called the abstract method and it has the keyword called “abstract”. Declarations end with a semicolon.

Example:

1
2
3
4
5
public abstract class Manupulation{
public abstract void add();//Abstract method declaration
Public void subtract(){
}
}
An abstract class may have a non-abstract method also.
The concrete Subclass which extends the Abstract class should provide the implementation for abstract methods.
Q #17) Difference between Array and Array List.

Answer: The Difference between Array and Array List can be understood from the table below:

                        Array                                      

   Array List    
Size should be given at the time of array declaration.

String[] name = new String[2]	Size may not be required. It changes the size dynamically.
To put an object into array we need to specify the index.

name[1] = “book”	No index required.

name.add(“book”)
Array is not type parameterized	ArrayList in java 5.0 are parameterized.

Eg: This angle bracket is a type parameter which means a list of String.
Q #18) Difference between String, String Builder, and String Buffer.

Answer:

String: String variables are stored in a “constant string pool”. Once the string reference changes the old value that exists in the “constant string pool”, it cannot be erased.

Example:

String name = “book”;

Constant string pool

Constant string pool.

If the name-value has changed from “book” to “pen”.

Constant string pool

Constant string pools
Then the older value remains in the constant string pool.

String Buffer:

Here string values are stored in a stack. If the values are changed then the new value replaces the older value.
The string buffer is synchronized which is thread-safe.
Performance is slower than the String Builder.
Example:

String Buffer name =”book”;

Stack
Once the name value has been changed to “pen” then the “book” is erased in the stack.

Stack1
String Builder:

This is the same as String Buffer except for the String Builder which is not threaded safely that is not synchronized. So obviously the performance is fast.

Q #19) Explain about Public and Private access specifiers.

Answer: Methods and instance variables are known as members.

Public:

Public members are visible in the same package as well as the outside package that is for other packages.

Public
Public members of Class A are visible to Class B (same package) as well as Class C (different packages).

Private:

Private members are visible in the same class only and not for the other classes in the same package as well as classes in the outside packages.

Private
Private members in class A are visible only in that class. It is invisible for class  B as well as class C.

Q #20) Difference between Default and Protected access specifiers.

Answer:

Default: Methods and variables declared in a class without any access specifiers are called default.

Default
Default members in Class A are visible to the other classes which are inside the package and invisible to the classes which are outside the package.

So Class A members are visible to Class B and invisible to Class C.

Protected:

Protected             .

Protected is the same as Default but if a class extends then it is visible even if it is outside the package.

Class A members are visible to Class B because it is inside the package. For Class C it is invisible but if Class C extends Class A then the members are visible to Class C even if it is outside the package.

Q #21) Difference between HashMap and HashTable.

Answer: The difference between HashMap and HashTable can be seen below:

HashMap	HashTable
Methods are not synchronized	Key methods are synchronized
Not thread safety	Thread safety
Iterator is used to iterate the values	Enumerator is used to iterate the values
Allows one null key and multiple null values	Doesn’t allow anything that is null
Performance is high than HashTable	Performance is slow
Q #22) Difference between HashSet and TreeSet.

Answer: The difference between HashSet and TreeSet can be seen below:

HashSet	TreeSet
Inserted elements are in random order	Maintains the elements in the sorted order
Can able to store null objects	Couldn’t store null objects
Performance is fast	Performance is slow
Q #23) Difference between Abstract class and Interface.

Answer: The differences between Abstract Class and Interface are as follows:

Abstract Class:

Abstract classes have a default constructor and it is called whenever the concrete subclass is instantiated.
It contains Abstract methods as well as Non-Abstract methods.
The class which extends the Abstract class shouldn’t require the implementation of all the methods, only Abstract methods need to be implemented in the concrete sub-class.
Abstract class contains instance variables.
Interface:

It doesn’t have any constructor and couldn’t be instantiated.
The abstract method alone should be declared.
Classes that implement the interface should provide the implementation for all the methods.
The interface contains only constants.
Q #24)  What is the meaning of Collections in Java?

Answer: Collection is a framework that is designed to store the objects and manipulate the design to store the objects.

Collections are used to perform the following operations:

Searching
Sorting
Manipulation
Insertion
Deletion
A group of objects is known as collections. All the classes and interfaces for collecting are available in Java util package.

Further Reading => Most Popular Java Development Companies To Look For

Q #25) What are all the Classes and Interfaces that are available in the collections?

Answer: Given below are the Classes and Interfaces that are available in Collections:

Interfaces:

Collection
List
Set
Map
Sorted Set
Sorted Map
Queue
Classes:

Lists:
Array List
Vector
Linked List
Sets:

Hash set
Linked Hash Set
Tree Set
Maps:

Hash Map
Hash Table
TreeMap
Linked Hashed Map
Queue:

Priority Queue
Q #26) What is meant by Ordered and Sorted in collections?

Answer:

Ordered: It means the values that are stored in a collection is based on the values that are added to the collection. So we can iterate the values from the collection in a specific order.

Sorted: Sorting mechanisms can be applied internally or externally so that the group of objects sorted in a particular collection is based on the properties of the objects.

Q #27) Explain the different lists available in the collection.

Answer: Values added to the list are based on the index position and it is ordered by index position. Duplicates are allowed.

The types of Lists are:

a) Array List:

Fast iteration and fast Random Access.
It is an ordered collection (by index) and not sorted.
It implements the Random Access Interface.
Example:

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
public class Fruits{
public static void main (String [ ] args){
ArrayList <String>names=new ArrayList <String>();
names.add (“apple”);
names.add (“cherry”);
names.add (“kiwi”);
names.add (“banana”);
names.add (“cherry”);
System.out.println (names);
}
}
Output:

[Apple, cherry, kiwi, banana, cherry]

From the output, Array List maintains the insertion order and it accepts the duplicates. But it’s not sorted.

b) Vector:

It is the same as Array List.

Vector methods are synchronized.
Thread safety.
It also implements Random Access.
Thread safety usually causes a performance hit.
Example:

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
public class Fruit {
public static void main (String [ ] args){
Vector <String> names = new Vector <String> ( );
 names.add (“cherry”);
names.add (“apple”);
names.add (“banana”);
names.add (“kiwi”);
names.add (“apple”);
System.out.println (“names”);
}
}
Output:

[cherry,apple,banana,kiwi,apple]

Vector also maintains the insertion order and accepts the duplicates.

c) Linked List:

Elements are doubly linked to one another.
Performance is slower than the Array list.
Good choice for insertion and deletion.
In Java 5.0 it supports common queue methods peek( ), Pool ( ), Offer ( ) etc.
Example:

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
public class Fruit {
public static void main (String [ ] args){
Linkedlist <String> names = new linkedlist <String> ( ) ;
names.add(“banana”);
names.add(“cherry”);
names.add(“apple”);
names.add(“kiwi”);
names.add(“banana”);
System.out.println (names);
}
}
Output:

[ banana,cherry,apple,kiwi,banana]

Maintains the insertion order and accepts the duplicates.

Q #28) Explain about Set and their types in a collection.

Answer: Set cares about uniqueness. It doesn’t allow duplications. Here “equals ( )” method is used to determine whether two objects are identical or not.

a) Hash Set:

Unordered and unsorted.
Uses the hash code of the object to insert the values.
Use this when the requirement is “no duplicates and don’t care about the order”.
Example:

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
public class Fruit {
public static void main (String[ ] args){
HashSet<String> names = new HashSet <=String>( ) ;
names.add(“banana”);
names.add(“cherry”);
names.add(“apple”);
names.add(“kiwi”);
names.add(“banana”);
System.out.println (names);
}
}
Output:

[banana, cherry, kiwi, apple]

It doesn’t follow any insertion order. Duplicates are not allowed.

b) Linked Hash set:

An ordered version of the hash set is known as Linked Hash Set.
Maintains a doubly-Linked list of all the elements.
Use this when an iteration order is required.
Example:

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
public class Fruit {
public static void main (String[ ] args){
LinkedHashSet<String>; names = new LinkedHashSet <String>( ) ;
 names.add(“banana”);
 names.add(“cherry”);
 names.add(“apple”);
 names.add(“kiwi”);
 names.add(“banana”);
 System.out.println (names);
 }
}
Output:

[banana, cherry, apple, kiwi]

It maintains the insertion order in which they have been added to the Set. Duplicates are not allowed.

c) Tree Set:

It is one of the two sorted collections.
Uses the “Read-Black” tree structure and guarantees that the elements will be in ascending order.
We can construct a tree set with the constructor by using a comparable (or) comparator.
Example:

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
public class Fruits{
public static void main (String[ ]args) {
Treeset<String> names= new TreeSet<String>( ) ;
names.add(“cherry”);
names.add(“banana”);
names.add(“apple”);
names.add(“kiwi”);
names.add(“cherry”);
System.out.println(names);
}
}
Output:

[apple, banana, cherry, kiwi]

TreeSet sorts the elements in ascending order. And duplicates are not allowed.

Q #29) Explain about Map and its types.

Answer: Map cares about the unique identifier. We can map a unique key to a specific value. It is a key/value pair. We can search a value, based on the key. Like the set, the map also uses the “equals ( )” method to determine whether two keys are the same or different.

Map is of following types:

a) Hash Map:

Unordered and unsorted map.
Hashmap is a good choice when we don’t care about the order.
It allows one null key and multiple null values.
Example:

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
Public class Fruit{
Public static void main(String[ ] args){
HashMap<Sting,String> names =new HashMap<String,String>( );
names.put(“key1”,“cherry”);
names.put (“key2”,“banana”);
names.put (“key3”,“apple”);
names.put (“key4”,“kiwi”);
names.put (“key1”,“cherry”);
System.out.println(names);
}
 }
Output:

{key2 =banana, key1=cherry, key4 =kiwi, key3= apple}

Duplicate keys are not allowed in Map.

It doesn’t maintain any insertion order and is unsorted.

b) Hash Table:

Like the vector key, methods of the class are synchronized.
Thread safety and therefore slows the performance.
It doesn’t allow anything that is null.
Example:

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
public class Fruit{
public static void main(String[ ]args){
Hashtable<Sting,String> names =new Hashtable<String,String>( );
names.put(“key1”,“cherry”);
names.put(“key2”,“apple”);
names.put(“key3”,“banana”);
names.put(“key4”,“kiwi”);
names.put(“key2”,“orange”);
System.out.println(names);
}
 }
Output:

{key2=apple, key1=cherry,key4=kiwi, key3=banana}

Duplicate keys are not allowed.

c) Linked Hash Map:

Maintains insertion order.
Slower than Hash map.
I can expect a faster iteration.
Example:

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
public class Fruit{
public static void main(String[ ] args){
LinkedHashMap<Sting,String> names =new LinkedHashMap<String,String>( );
 names.put(“key1”,“cherry”);
 names.put(“key2”,“apple”);
 names.put(“key3”,“banana”);
 names.put(“key4”,“kiwi”);
 names.put(“key2”,“orange”);
 System.out.println(names);
 }
 }
Output:

{key2=apple, key1=cherry,key4=kiwi, key3=banana}

Duplicate keys are not allowed.

d) TreeMap:

Sorted Map.
Like Tree set, we can construct a sort order with the constructor.
Example:

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
public class Fruit{
public static void main(String[ ]args){
TreeMap<Sting,String> names =new TreeMap<String,String>( );
names.put(“key1”,“cherry”);
names.put(“key2”,“banana”);
names.put(“key3”,“apple”);
names.put(“key4”,“kiwi”);
names.put(“key2”,“orange”);
System.out.println(names);
}
}
Output:

{key1=cherry, key2=banana, key3 =apple, key4=kiwi}

It is sorted in ascending order based on the key. Duplicate keys are not allowed.

Q #30) Explain the Priority Queue.

Answer: Queue Interface

Priority Queue: Linked list class has been enhanced to implement the queue interface. Queues can be handled with a linked list. The purpose of a queue is “Priority-in, Priority-out”.

Hence elements are ordered either naturally or according to the comparator. The elements ordering represents their relative priority.

Q #31) What is meant by Exception?

Answer: An Exception is a problem that can occur during the normal flow of execution. A method can throw an exception when something wails at runtime. If that exception couldn’t be handled, then the execution gets terminated before it completes the task.

If we handled the exception, then the normal flow gets continued. Exceptions are a subclass of java.lang.Exception.

Example for handling Exception:

1
2
3
4
5
try{
//Risky codes are surrounded by this block
}catch(Exception e){
//Exceptions are caught in catch block
}
Q #32) What are the types of Exceptions?

Answer: There are two types of Exceptions. They are explained below in detail.

a) Checked Exception:

These exceptions are checked by the compiler at the time of compilation. Classes that extend Throwable class except Runtime exception and Error are called checked Exception.

Checked Exceptions must either declare the exception using throws keyword (or) surrounded by appropriate try/catch.

For Example, ClassNotFound Exception

b) Unchecked Exception:

These exceptions are not checked during the compile time by the compiler.  The compiler doesn’t force to handle these exceptions. It includes:

Arithmetic Exception
ArrayIndexOutOfBounds Exception
Q #33) What are the different ways to handle exceptions?

Answer: Two different ways to handle exceptions are explained below:

a) Using try/catch:

The risky code is surrounded by try block. If an exception occurs, then it is caught by the catch block which is followed by the try block.

Example:

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
class Manipulation{
public static void main(String[] args){
add();
}
Public void add(){
try{
addition();
}catch(Exception e){
e.printStacktrace();
}
}
}
b) By declaring throws keyword:

At the end of the method, we can declare the exception using throws keyword.

Example:

1
2
3
4
5
6
7
8
class Manipulation{
public static void main(String[] args){
add();
}
public void add() throws Exception{
addition();
}
}
Q #34) What are the advantages of Exception handling?

Answer: The advantages of exception handling are as follows:

The normal flow of the execution won’t be terminated if an exception gets handled
We can identify the problem by using catch declaration
 Q #35) What are the Exception handling keywords in Java?

Answer: Enlisted below are the two Exception Handling Keywords:

a) try:

When a risky code is surrounded by a try block. An exception occurring in the try block is caught by a catch block. Try can be followed either by catch (or) finally (or) both. But any one of the blocks is mandatory.

b) catch:

This is followed by a try block. Exceptions are caught here.

c) finally:

This is followed either by try block (or) catch block. This block gets executed regardless of an exception. So generally clean up codes are provided here.

Q #36) Explain about Exception Propagation.

Answer: Exception is first thrown from the method which is at the top of the stack. If it doesn’t catch, then it pops up the method and moves to the previous method and so on until they are got.

This is called Exception propagation.

Example:

1
2
3
4
5
6
7
public class Manipulation{
public static void main(String[] args){
add();
}
public void add(){
addition();
}
From the above example, the stack looks like as shown below:

Stack Example
If an exception occurs in the addition() method is not caught, then it moves to the method add(). Then it is moved to the main() method and then it will stop the flow of execution. It is called Exception Propagation.

Q #37) What is the final keyword in Java?

Answer:

Final variable: Once a variable is declared as final, then the value of the variable could not be changed. It is like a constant.

Example:

final int = 12;

Final method: A final keyword in a method, couldn’t be overridden. If a method is marked as a final, then it can’t be overridden by the subclass.

Final class: If a class is declared as final, then the class couldn’t be subclassed. No class can extend the final class.

Q #38) What is a Thread?

Answer: In Java, the flow of execution is called Thread. Every java program has at least one thread called the main thread, the main thread is created by JVM. The user can define their own threads by extending the Thread class (or) by implementing the Runnable interface. Threads are executed concurrently.

Example:

1
2
public static void main(String[] args){//main thread starts here
}
Q #39) How do you make a thread in Java?

Answer: There are two ways available to make a thread.

a) Extend Thread class: Extending a Thread class and override the run method. The thread is available in java.lang.thread.

Example:

1
2
3
4
Public class Addition extends Thread {
public void run () {
}
}
The disadvantage of using a thread class is that we cannot extend any other classes because we have already extended the thread class. We can overload the run () method in our class.

b) Implement Runnable interface: Another way is by implementing the runnable interface. For that, we should provide the implementation for the run () method which is defined in the interface.

Example:

1
2
3
4
Public class Addition implements Runnable {
public void run () {
}
}
Q #40) Explain about join () method.

Answer: Join () method is used to join one thread with the end of the currently running thread.

Example:

1
2
3
4
5
public static void main (String[] args){
Thread t = new Thread ();
t.start ();
t.join ();
}
Based on the above code, the main thread has started the execution. When it reaches the code t.start() then ‘thread t’ starts the own stack for the execution. JVM switches between the main thread and ‘thread t’.

Once it reaches the code t.join() then ‘thread t’ alone is executed and completes its task, then only the main thread starts the execution.

It is a non-static method. The Join () method has an overloaded version. So we can mention the time duration in join () method also “.s”.

Q #41) What does the yield method of the Thread class do?

Answer: A yield () method moves the currently running thread to a runnable state and allows the other threads for execution. So that equal priority threads have a chance to run. It is a static method. It doesn’t release any lock.

Yield () method moves the thread back to the Runnable state only, and not the thread to sleep (), wait () (or) block.

Example:

1
2
3
4
5
6
7
8
public static void main (String[] args){
Thread t = new Thread ();
t.start ();
}
public void run(){
Thread.yield();
}
}
Q #42) Explain about wait () method.

Answer: wait () method is used to make the thread to wait in the waiting pool. When the wait () method is executed during a thread execution then immediately the thread gives up the lock on the object and goes to the waiting pool. Wait () method tells the thread to wait for a given amount of time.

Then the thread will wake up after notify () (or) notify all () method is called.

Wait() and the other above-mentioned methods do not give the lock on the object immediately until the currently executing thread completes the synchronized code. It is mostly used in synchronization.

Example:

1
2
3
4
5
6
7
public static void main (String[] args){
Thread t = new Thread ();
t.start ();
Synchronized (t) {
Wait();
}
}
Q #43) Difference between notify() method and notifyAll() method in Java.

Answer: The differences between notify() method and notifyAll() method are enlisted below:

notify()	notifyAll()
This method is used to send a signal to wake up a single thread in the waiting pool.	This method sends the signal to wake up all the threads in a waiting spool.
Q #44) How to stop a thread in java? Explain about sleep () method in a thread?

Answer: We can stop a thread by using the following thread methods:

Sleeping
Waiting
Blocked
Sleep: Sleep () method is used to sleep the currently executing thread for the given amount of time. Once the thread is wake up it can move to the runnable state. So sleep () method is used to delay the execution for some period.

It is a static method.

Example:

Thread. Sleep (2000)

So it delays the thread to sleep 2 milliseconds. Sleep () method throws an uninterrupted exception, hence we need to surround the block with try/catch.

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
public class ExampleThread implements Runnable{
public static void main (String[] args){
Thread t = new Thread ();
t.start ();
}
public void run(){
try{
Thread.sleep(2000);
}catch(InterruptedException e){
}
}
Q #45) When to use the Runnable interface Vs Thread class in Java?

Answer: If we need our class to extend some other classes other than the thread then we can go with the runnable interface because in java we can extend only one class.

If we are not going to extend any class then we can extend the thread class.

Q #46) Difference between start() and run() method of thread class.

Answer: Start() method creates a new thread and the code inside the run () method is executed in the new thread. If we directly called the run() method then a new thread is not created and the currently executing thread will continue to execute the run() method.

Q #47) What is Multi-threading?

Answer: Multiple threads are executed simultaneously. Each thread starts its own stack based on the flow (or) priority of the threads.

Example Program:

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
public class ExampleThread implements Runnable{
public static void main (String[] args){
Thread t = new Thread ();
t.start ();
}
public void run(){
try{
Thread.sleep(2000);
}catch(InterruptedException e){
}
}
On the 1st line execution, JVM calls the main method and the main thread stack looks as shown below.

Thread1
Once the execution reaches, t.start () line then a new thread is created and the new stack for the thread is also created. Now JVM switches to the new thread and the main thread are back to the runnable state.

The two stacks look as shown below.

Thread2
Now, the user thread executed the code inside the run() method.

Thread3
Once the run() method has completed, then JVM switches back to the main thread and the user thread has completed the task and the stack was disappeared.

JVM switches between each thread until both the threads are completed. This is called Multi-threading.

Q #48) Explain the thread life cycle in Java.

Answer: Thread has the following states:

New
Runnable
Running
Non-runnable (Blocked)
Terminated
Thread Life Cycle in JAVA
New: In New state, a Thread instance has been created but start () method is not yet invoked. Now the thread is not considered alive.
Runnable: The Thread is in the runnable state after the invocation of the start () method, but before the run () method is invoked. But a thread can also return to the runnable state from waiting/sleeping. In this state, the thread is considered alive.
Running: The thread is in a running state after it calls the run () method. Now the thread begins the execution.
Non-Runnable(Blocked): The thread is alive but it is not eligible to run. It is not in the runnable state but also, it will return to the runnable state after some time. Example: wait, sleep, block.
Terminated: Once the run method is completed then it is terminated. Now the thread is not alive.
Q #49) What is Synchronization?

Answer: Synchronization makes only one thread to access a block of code at a time. If multiple threads accesses the block of code, then there is a chance for inaccurate results at the end. To avoid this issue, we can provide synchronization for the sensitive block of codes.

The synchronized keyword means that a thread needs a key in order to access the synchronized code.

Locks are per objects. Every Java object has a lock. A lock has only one key. A thread can access a synchronized method only if the thread can get the key to the objects to lock.

For this, we use the “Synchronized” keyword.

Example:

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
public class ExampleThread implements Runnable{
 public static void main (String[] args){
 Thread t = new Thread ();
 t.start ();
 } 
 public void run(){
 synchronized(object){
 {
 }
}
Q #50) What is the disadvantage of Synchronization?

Ans: Synchronization is not recommended to implement all the methods. Because if one thread accesses the synchronized code then the next thread should have to wait. So it makes a slow performance on the other end.

Q #51) What is meant by Serialization?

Answer: Converting a file into a byte stream is known as Serialization. The objects in the file are converted to bytes for security purposes. For this, we need to implement a java.io.Serializable interface. It has no method to define.

Variables that are marked as transient will not be a part of the serialization. So we can skip the serialization for the variables in the file by using a transient keyword.

Learn More =>> Serializable and Cloneable

Q #52) What is the purpose of a transient variable?

Answer: Transient variables are not part of the serialization process. During deserialization, the values of the transient variables are set to the default value. It is not used with static variables.

Example:

transient int numbers;

Q #53) Which methods are used during the Serialization and Deserialization process?

Answer: ObjectOutputStream and ObjectInputStream classes are higher level java.io. package. We will use them with lower level classes FileOutputStream and FileInputStream.

ObjectOutputStream.writeObject —->Serialize the object and write the serialized object to a file.

ObjectInputStream.readObject —> Reads the file and deserializes the object.

To be serialized, an object must implement the serializable interface. If superclass implements Serializable, then the subclass will automatically be serializable.

Q #54) What is the purpose of a Volatile Variable?

Answer: Volatile variable values are always read from the main memory and not from thread’s cache memory. This is used mainly during synchronization. It is applicable only for variables.

Example:

volatile int number;

Q #55) Difference between Serialization and Deserialization in Java.

Answer: These are the differences between serialization and deserialization in java:

Serialization	Deserialization
Serialization is the process which is used to convert the objects into byte stream	Deserialization is the opposite process of serialization where we can get the objects back from the byte stream.
An object is serialized by writing it an ObjectOutputStream.	An object is deserialized by reading it from an ObjectInputStream.
Q #56) What is SerialVersionUID?

Answer: Whenever an object is Serialized, the object is stamped with a version ID number for the object class. This ID is called the  SerialVersionUID. This is used during deserialization to verify that the sender and receiver that are compatible with the Serialization.



Встроенный MongoDB с Spring не работает
Вопросы
JAVA
Встроенный MongoDB с Spring не работает
Я пытаюсь создать приложение Spring с WebFlux и встроенным MongoDB. Однако, даже если мои тесты проходят отлично, я не могу запустить свое приложение, потому что кажется, что встроенный mongodb еще не запущен.

Исключение, которое я получаю, следующее:

com.mongodb.MongoSocketOpenException: Exception opening socket
    at com.mongodb.connection.SocketStream.open(SocketStream.java:62) ~[mongodb-driver-core-3.6.3.jar:na]
    at com.mongodb.connection.InternalStreamConnection.open(InternalStreamConnection.java:126) ~[mongodb-driver-core-3.6.3.jar:na]
    at com.mongodb.connection.DefaultServerMonitor$ServerMonitorRunnable.run(DefaultServerMonitor.java:114) ~[mongodb-driver-core-3.6.3.jar:na]
    at java.lang.Thread.run(Thread.java:748) [na:1.8.0_144]
Caused by: java.net.ConnectException: Connection refused: connect
    at java.net.DualStackPlainSocketImpl.waitForConnect(Native Method) ~[na:1.8.0_144]
    at java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85) ~[na:1.8.0_144]
    at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350) ~[na:1.8.0_144]
    at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206) ~[na:1.8.0_144]
    at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188) ~[na:1.8.0_144]
    at java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172) ~[na:1.8.0_144]
    at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392) ~[na:1.8.0_144]
    at java.net.Socket.connect(Socket.java:589) ~[na:1.8.0_144]
    at com.mongodb.connection.SocketStreamHelper.initialize(SocketStreamHelper.java:59) ~[mongodb-driver-core-3.6.3.jar:na]
    at com.mongodb.connection.SocketStream.open(SocketStream.java:57) ~[mongodb-driver-core-3.6.3.jar:na]
    ... 3 common frames omitted

2018-03-25 17:47:15.372  INFO 14188 --- [localhost:27017] org.mongodb.driver.cluster               : Exception in monitor thread while connecting to server localhost:27017

com.mongodb.MongoSocketOpenException: Exception opening socket
    at com.mongodb.connection.netty.NettyStream$2.operationComplete(NettyStream.java:158) ~[mongodb-driver-core-3.6.3.jar:na]
    at com.mongodb.connection.netty.NettyStream$2.operationComplete(NettyStream.java:145) ~[mongodb-driver-core-3.6.3.jar:na]
    at io.netty.util.concurrent.DefaultPromise.notifyListener0(DefaultPromise.java:511) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.util.concurrent.DefaultPromise.notifyListeners0(DefaultPromise.java:504) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.util.concurrent.DefaultPromise.notifyListenersNow(DefaultPromise.java:483) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.util.concurrent.DefaultPromise.notifyListeners(DefaultPromise.java:424) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.util.concurrent.DefaultPromise.tryFailure(DefaultPromise.java:121) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.fulfillConnectPromise(AbstractNioChannel.java:327) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:343) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:633) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:580) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:497) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:459) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:886) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30) ~[netty-common-4.1.22.Final.jar:4.1.22.Final]
    at java.lang.Thread.run(Thread.java:748) [na:1.8.0_144]
 Caused by: io.netty.channel.AbstractChannel$AnnotatedConnectException: Connection refused: no further information: localhost/127.0.0.1:27017
    at sun.nio.ch.SocketChannelImpl.checkConnect(Native Method) ~[na:1.8.0_144]
    at sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:717) ~[na:1.8.0_144]
    at io.netty.channel.socket.nio.NioSocketChannel.doFinishConnect(NioSocketChannel.java:325) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    at io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:340) ~[netty-transport-4.1.22.Final.jar:4.1.22.Final]
    ... 7 common frames omitted
Caused by: java.net.ConnectException: Connection refused: no further information
    ... 11 common frames omitted
Мой pom.xml следующий:

<?xml version = "1.0" encoding = "UTF-8"?>
<project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>

<groupId>com.lorescianatico</groupId>
<artifactId>driftcoin</artifactId>
<version>0.0.1-SNAPSHOT</version>
<packaging>jar</packaging>

<name>driftcoin</name>
<description>Driftcoin project for Spring Boot</description>

<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.0.RELEASE</version>
    <relativePath/> <!-- lookup parent from repository -->
</parent>

<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <java.version>1.8</java.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-mongodb</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-mongodb-reactive</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webflux</artifactId>
    </dependency>

    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>de.flapdoodle.embed</groupId>
        <artifactId>de.flapdoodle.embed.mongo</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>io.projectreactor</groupId>
        <artifactId>reactor-test</artifactId>
        <scope>test</scope>
    </dependency>

    <!-- https://mvnrepository.com/artifact/com.google.guava/guava -->
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version>24.0-jre</version>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>


</project>
Свойства моего приложения - это просто пустой файл. Мой класс репозитория следующий:

package com.lorescianatico.driftcoin.repository;

import com.lorescianatico.driftcoin.model.BlockChain;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface BlockChainRepository extends ReactiveMongoRepository<BlockChain, String> {
}
Как видите, я использую реактивный репозиторий для mongodb. Я уже пробовал активировать через аннотации реактивные репозитории, но это не меняло исключения. Мне чего-то не хватает, например конфигурации или чего-то подобного?

Заранее спасибо.

 25.03.2018 17:57
3
3
9 366
5
Данный вопрос помечен как решенный
 Ответы 5
вы добавили эти свойства mongo в свой application.properites

spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=app1
пример весенней загрузки mongo

эта ссылка будет полезна для решения вашей проблемы

 25.03.2018 18:13
При использовании класса у меня возникла та же проблема, и проблема заключалась в том, что мой build.gradle решил ее, изменив эту строку:

testCompile ('de.flapdoodle.embed: de.flapdoodle.embed.mongo')

к

compile ('de.flapdoodle.embed: de.flapdoodle.embed.mongo')

Таким образом, проблема должна быть в вашем pom, встроенный mongodb не настраивается.

 09.06.2018 10:13
 Ответ принят как подходящий
Ваш встроенный mongodb настроен для использования при тестировании:

<dependency>
    <groupId>de.flapdoodle.embed</groupId>
    <artifactId>de.flapdoodle.embed.mongo</artifactId>
    <scope>test</scope>
</dependency>
Удалите оттуда тестовую область, чтобы вы могли использовать ее во время выполнения:

<dependency>
    <groupId>de.flapdoodle.embed</groupId>
    <artifactId>de.flapdoodle.embed.mongo</artifactId>
</dependency>
 01.09.2018 17:36
Я решил проблему, установив mongo на виртуальную машину, а затем запустив экземпляр загрузки Spring.

Для меня встроенный драйвер mongo (de.flapdoodle.embed.mongo) не работал, поэтому я удалил зависимость.

Установите Mongo и запустите его

sudo apt-key adv --keyserver hkp: //keyserver.ubuntu.com: 80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [arch = amd64, arm64] https://repo.mongodb.org/apt/ubuntu xenial / mongodb-org / 4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod перезапуск
Запустить приложение Spring Boot

 16.10.2018 23:10
Отправляю свое решение, так как оно может кому-то помочь - я добавил версию в зависимость от de.flapdoodle.embed.mongo, и это помогло:

Использовать это:

        <dependency>
            <groupId>de.flapdoodle.embed</groupId>
            <artifactId>de.flapdoodle.embed.mongo</artifactId>
            <version>2.2.0</version>
            <scope>test</scope>
        </dependency>
вместо этого:

        <dependency>
            <groupId>de.flapdoodle.embed</groupId>
            <artifactId>de.flapdoodle.embed.mongo</artifactId>
            <scope>test</scope>
        </dependency>
Ссылка на репозиторий Maven: https://mvnrepository.com/artifact/de.flapdoodle.embed/de.flapdoodle.embed.mongo


Java MongoDB сохраняет сразу несколько документов
Вопросы
MONGODB
Java MongoDB сохраняет сразу несколько документов
У меня есть список обновленных объектов / документов, мне нужно сохранить все объекты в списке сразу.

Я видел save () в MongoTemplate, но он может принимать один документ за раз. Есть ли способ сохранить сразу несколько документов или мне нужно вызвать цикл сохранения?

 06.06.2018 13:07
4
2
12 220
5
 Ответы 5
Это один из способов сделать.

mongoTemplate.getCollection("your_collection_name").insert(List<Documents>)
Вы также можете проверить класс BulkWriteOperation.

 06.06.2018 13:13
Для вставки:

Вы должны использовать функцию InsertMany как:

List<Document> docList = new List<Document>();
docList.add(doc1); // assuming that doc1 and doc2 are defined
docList.add(doc2);
yourMongoDb.getCollection("your_collection").insertMany(docList);
Для Upsert (что вам нужно):

UpdateOptions options = new UpdateOptions().upsert(true) ;
yourCollectionOfDocuments.forEach( doc ->{ 
    Document filter = Filters.eq("_id", doc.get("id"));
    yourDb.getCollection("your_collection").updateOne(filter,update,option); 
})
 06.06.2018 13:19
Спасибо за помощь.

Я смог сделать это, используя данные Spring MongoDB. Данные Spring MongoDB MongoRepository имеет множество встроенных методов.

org.springframework.data.mongodb.repository.MongoRepository.saveAll (Итерируемые объекты) это тот, который я использовал для сохранения нескольких документов.

 06.06.2018 19:30
Используя Spring, вы можете легко хранить сразу несколько документов.

Интерфейс уже доступен с методом saveAll и подробностями, указанными ниже:

@NoRepositoryBean
public interface MongoRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {

    /*
     * (non-Javadoc)
     * @see org.springframework.data.repository.CrudRepository#saveAll(java.lang.Iterable)
     */
    @Override
    <S extends T> List<S> saveAll(Iterable<S> entites);
//...
}
Пример использования Spring:

@Component
public class Processor {

@Autowired
public Processor(Repository repository) {
    this.repository= repository;
}

public void save(Iterable<ProductEntity> entites) {
    List<ProductEntity> saved = repository.saveAll(entites);
    logger.info("Saved {} entities", saved.size());
}

}
ваш интерфейс репозитория:

//https://docs.spring.io/spring-data/mongodb/docs/1.2.0.RELEASE/reference/html/mongo.repositories.html
public interface Repository extends MongoRepository<ProductEntity, String> {   
}
Вызов метода сохранения со списком сущностей продукта

 12.09.2018 13:03
Вы можете использовать insertAll из MongoTemplate или ReactiveMongoTemplate, но вы должны использовать его с осторожностью. Он делает то, что означает его название - вставляет все документы. Если вы вызываете метод save, тогда save имеет оптимистическую блокировку, поэтому он проверяет, не переопределяете ли вы документ, который вам не следует (если он имеет аннотацию @Version). insertAll не проверяет оптимистическую блокировку, поэтому вы можете использовать ее до тех пор, пока действительно хотите вставить вставку, например. сохраняйте документы, которые еще не сохранены, или вы не заботитесь о переопределении этих документов и оптимистической блокировке. Если вы заботитесь об оптимистической блокировке, все, что вы можете сделать, - это вызвать save для каждого документа, который будет генерировать множество операций ввода-вывода, но это то, что нужно, чтобы убедиться, что вы обновите документы с соответствующей версией. Также вы должны помнить, что insertAll фактически вставляет новые документы, а это означает, что вы не можете обновить документ с помощью этого метода, потому что вы получите исключение дублированного ключа. В настоящее время в spring mongo отсутствует функция, которая позволяла бы обновлять все документы (вы можете только `` вставить '' их, поэтому сохраните в первый раз)

Запрашивать дочерние документы на основе поля, которое присутствует только в родительском?
Вопросы
JAVA
Запрашивать дочерние документы на основе поля, которое присутствует только в родительском?
В моей коллекции MongoDB есть документы, которые соответствуют структуре «родитель-потомок».

Каждый родительский документ обычно имеет 4 поля, а дочерние — 3 (без поля группы).

родитель:

{
_id: doc_123
parent_id: 123
active: true
group: A
}
дети

{
id: doc_123_1
parent_id: 123
active: true
}

{
id: doc_123_2
parent_id: 123
active: true
}
Я хочу написать запрос/агрегацию BSON, если это необходимо для моего проекта Java Spring, который вернет все документы, соответствующие следующим полям, предоставленным пользователем:

активное поле – это будет true или false
групповое поле - например, "A"
Моя трудность заключается в том, что предполагается, что каждый дочерний документ имеет то же значение, что и родительский для поля группы, но на самом деле его нет в документе.

Как написать запрос, который будет соответствовать всем родительским и дочерним документам определенной группы?

Все документы находятся в одной коллекции, отдельных коллекций для родительских и дочерних документов нет.

 12.04.2024 15:47
1
0
132
4
Данный вопрос помечен как решенный
 Ответы 4
Этапы агрегирования:

Поиск по group и active true/false на основе значений, предоставленных пользователем.
обратите внимание, что группа есть только у родительских записей, для дочерних она отсутствует или имеет значение NULL.
поэтому этот этап возвращает только подходящих родителей
Используйте parent_id для самостоятельного поиска в той же коллекции и сопоставления с parent_id.
По какой-то причине parent_id одинаков для детей и родителей.
Полагаться на шаблон идентификатора документов для идентификации родителей и детей — очень плохая идея: doc_123 для родителей и doc_123_1, doc_123_2 для детей будут очень неэффективны для фактического поиска/совпадения/поиска.
id у детей называется id или _id? Но здесь это не влияет на трубопровод.
Исключите родительскую запись, если вам нужны только дочерние записи. См. комментарий к этому этапу.
db.collection.aggregate([
  {
    $match: {
      // set this to a variable for true/false search
      active: true,
      // set this to a variable for group search
      // only "parents" have the group
      group: "A"
    }
  },
  {
    // self-lookup into the same collection, matching on parent_id
    $lookup: {
      from: "collection",
      localField: "parent_id",
      foreignField: "parent_id",
      as: "children"
    }
  },
  { $unwind: "$children" },
  { $replaceWith: "$children" },
  {
    // exclude the parents
    // IF YOU WANT PARENTS ALSO THEN REMOVE THIS STAGE
    $match: {
      group: { $exists: false }
    }
  }
])
Игровая площадка Монго

 12.04.2024 16:30
 Ответ принят как подходящий
Присоединяйтесь к родителям, добавляя условие группы при присоединении:

db.collection.aggregate([
  {
    // self-join on child.parent_id -> parent.parent_id
    $lookup: {
      from: "collection",
      localField: "parent_id",
      foreignField: "parent_id",
      "pipeline": [
        {
          "$match": {
            "group": "$$group" // pass "A" as "group" parameter to the query
          }
        }
      ],
      as: "parent"
    }
  },
  {
    $match: {
      active: $$active, // pass true or false as "active" parameter to the query
      group: {
        $exists: false // exclude parents which join to themselves
      }
    }
  }
])
Смотрите живую демонстрацию.

Определите этот запрос как собственный запрос в весенней загрузке Repository и передайте ему два именованных параметра (с именами «группа» и «активный»).

 14.04.2024 19:55
Я создал Spring Service, который использует mongoTemplate и возвращает List<Bson> по запросу.

@Service
@AllArgsConstructor
public class DocumentService
{
    private MongoTemplate mongoTemplate;

    public List<Bson> getAggregatedDocuments(boolean active, String group, boolean excludeParent)
    {
        List<AggregationOperation> stages = new ArrayList<>();
        stages.add(Aggregation.match(Criteria.where("active").is(active).and("group").is(group)));
        stages.add(Aggregation.lookup("collection", "parent_id", "parent_id", "children"));
        stages.add(Aggregation.unwind("$children"));
        stages.add(Aggregation.replaceRoot("$children"));

        if (excludeParent)
        {
            stages.add(Aggregation.match(Criteria.where("group").exists(false)));
        }

        return mongoTemplate
            .aggregate(Aggregation.newAggregation(stages), "collection", Bson.class)
            .getMappedResults();
    }
}
Используя lapdoodle , я могу легко протестировать ваш вариант использования:

@Test
public void getAggregatedDocumentsTest()
{
    DocumentEntity parent = createDocumentEntity("doc_123", 123, true, "A");
    DocumentEntity child1 = createDocumentEntity("doc_123_1", 123, true, null);
    DocumentEntity child2 = createDocumentEntity("doc_123_2", 123, true, null);

    documentRepository.saveAll(List.of(parent, child1, child2));
    System.out.println("All docs = " + documentRepository.findAll());

    var resultWithoutParent = documentService.getAggregatedDocuments(true, "A", true);
    System.out.println("Result without parent = " + resultWithoutParent);

    var resultWithParent = documentService.getAggregatedDocuments(true, "A", false);
    System.out.println("Result with parent = " + resultWithParent);
}

private static DocumentEntity createDocumentEntity(String id, Integer parentId, boolean active, String group)
{
    DocumentEntity documentEntity = new DocumentEntity();
    documentEntity.setId(id);
    documentEntity.setParent_id(parentId);
    documentEntity.setActive(active);
    documentEntity.setGroup(group);

    return documentEntity;
}
И вот результат:

Все документы = [DocumentEntity(id=doc_123,parent_id=123, active=true, group=A), DocumentEntity(id=doc_123_1,parent_id=123, active=true, group=null), DocumentEntity(id=doc_123_2,parent_id= 123, активный=истина, группа=ноль)]

Результат без родителя = [Document{{_id=doc_123_1, Parent_id=123, active=true, _class=com.example.demomongo.DocumentEntity}}, Document{{_id=doc_123_2, Parent_id=123, active=true, _class=com .example.demomongo.DocumentEntity}}]

Результат с родителем = [Document{{_id=doc_123, Parent_id=123, active=true, group=A, _class=com.example.demomongo.DocumentEntity}}, Document{{_id=doc_123_1, Parent_id=123, active=true , _class=com.example.demomongo.DocumentEntity}}, Document{{_id=doc_123_2, Parent_id=123, active=true, _class=com.example.demomongo.DocumentEntity}}]

Я создал репозиторий на GitHub с полным примером проекта здесь

 16.04.2024 04:48
Я хочу написать запрос/агрегацию BSON, если это необходимо для моего проекта Java Spring, который вернет все документы...

Следующий код Java возвращает результат как List<Bson>. При этом используется собственный код драйвера Java MongoDB для построения конвейера агрегации и его запуска. Для этого используется Spring Data MongoDB MongoTemplate (Spring Boot версии 3.2).

private void runAggregation() {

    MongoOperations ops = new MongoTemplate(MongoClients.create(), "test"); // "test" is the database name
    MongoCollection<Document> coll = ops.getCollection("test"); // "test" is collection name

    List<Bson> pipeline =
            Arrays.asList(new Document("$match",
                            new Document("active", true)
                                    .append("group", "A")),
                    new Document("$lookup",
                            new Document("from", "test")
                                    .append("localField", "parent_id")
                                    .append("foreignField", "parent_id")
                                    .append("as", "children")),
                    new Document("$unwind", "$children"),
                    new Document("$replaceWith", "$children"),
                    new Document("$match",
                            new Document("group",
                                    new Document("$exists", false))));

    List<Bson> result = new ArrayList<>();

    coll.aggregate(pipeline).into(result);

    for (Bson doc : result) {
        System.out.println(doc);
    }
}
