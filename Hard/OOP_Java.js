

OOPS Concept in Java

Table of Contents: [Show]

Video Tutorials on OOPS Concepts
OOPS Concept in Java – Part 1:


In-depth look at OOPS Concept in Java – Part 2:


Object-oriented programming languages emphasize on data more than the functions. The object-oriented programming (OOP) revolves around objects i.e. a real-time entity.

This object bundles up data and the methods that operate on this data in one unit. This way, the data is protected from the outside world by having the methods inside the object. In OOP, the objects communicate with each other through messages.

Any OOP language supports the following features:

Classes
Encapsulation
Abstraction
Inheritance
Polymorphism
All these features ensure that the data is secured and at the same time we can also write robust applications. Smalltalk, C++, Java, etc are some of the object-oriented programming languages.

In this tutorial, we will discuss the basics of OOP concerning Java language.

Object-Oriented Programming (OOP) In Java
Java is the most sought after programming skill at present. In Java, everything is based on the object. Java has a root class called Object from which the entire functionality of Java is derived. Thus in this tutorial, we will discuss the main features of OOP concerning Java.

Recommended Reading => OOP Interview Questions and Answers

Here we are going to discuss how Java supports the following OOP features.

Object & class
Class
Inheritance
Polymorphism
Abstraction
Encapsulation
Let’s discuss each of these Java OOP concepts in detail.

Object & Class
A class can be defined as a design prototype or a blueprint. Objects are created from these blueprints. It essentially defines a common type consisting of properties and methods that operate on these properties for this common type. Then we define the instances of this class called objects.

A class has many components as shown in the following figure.

Object & Class - Components

An object represents a real-life entity. In Java, an object is an instance of a class. So a class which is a blueprint may be used to create many objects. These objects often communicate with each other by passing messages to each other through methods.

Video Tutorial: Classes & Objects 


An object typically has:

 A state: The properties or attributes of an object at a particular time.
Behavior: Methods represent the behavior of an object. Methods also define how the objects communicate.
Identity: Identifies the object by giving it a unique name.
For example, if we have a class PetAnimals.

Then we can define an object of this class as follows:

PetAnimals pig = new PetAnimals.

Here the identity of the object is a pig.

Given below is a program that demonstrates class and object.

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
//student class
class Student{  
 int roll_No;  
 String student_name;  
}  
class Main{  
 public static void main(String args[]){  
  //Create objects of class Student 
  Student student1=new Student();  
  Student student2=new Student();  
  //Initialize Student class objects
  student1.roll_No=101;  
  student1.student_name="Lisa";  
  student2.roll_No=102;  
  student2.student_name="Dan";  
  //Print object data
  System.out.println("Student 1 Details: " + 
            student1.roll_No+" "+student1.student_name);  
  System.out.println("Student 2 Details: " +
            student2.roll_No+" "+student2.student_name);  
 }  
}  
Output

output - Object & Class

In the above class, we have defined a class Student with two properties roll_No and student_name. Then in the main method, we declare two class objects i.e. student1 and student2. Note that these objects are created using a new operator. Once the objects are created we assign data to both the object properties.

Finally, we print the object contents using ‘.’ (dot) operator.

We will learn more about classes and objects in our specific OOP tutorials topics.

Inheritance
Inheritance is one of the most important characteristics of OOP. Through inheritance, Java promotes the reusability of code.

So what is an inheritance in Java?

Inheritance is a mechanism in Java in which one class can inherit the properties of another class. The properties that can be inherited include data members and methods of the class.

The class that inherits the properties of another class is called the subclass. The inherited class is known as the “super” class in Java.

By inheriting the class, the subclass not only inherits the properties but also reuses the code as the programmer need not once again write the code when it can directly inherit it using inheritance.

In Java, inheritance is achieved by using the “extends” keyword. This extends keyword is used in the definition of the class and is followed by the class name that is to be inherited.

For example, if there are two classes, A and B, and A is to be inherited by B then this inheritance is written in Java as:

class B extends A {

……

}
As already mentioned, here A is the superclass or base class or parent class. B is a subclass, derived class or child class.

Inheritance is further divided into the following types.

Inheritance - Types

Java supports single, multi-level, and hierarchical inheritance.

Note that Java does not support multiple inheritances. Java also does not support hybrid inheritance which is a combination of multiple and hierarchical inheritances.

Given below is an example program of Single Inheritance in Java.

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
//base class
class Employee{  
 float salary=50000;  
}
//derived class
class Developer extends Employee{  
 int bonus=20000; 
}
class Main{
 public static void main(String args[]){  
    //declare Developer class object and access properties of base and derived class
   Developer p=new Developer();  
   System.out.println("Inheritance in Java");
   System.out.println("Developer salary: "+p.salary);  
   System.out.println("Bonus declared for Developer: "+p.bonus);  
   System.out.println("Developer Total Earnings: " + (p.salary + p.bonus));
}  
}  
Output

output - Inheritance in Java

In the above program, we have a base class Employee. We have another class Developer that inherits from the Employee class. In the main method, we can see that by declaring an object of Developer class we can access not only the properties of the Developer class but also of the Employee class as it is inherited by Developer class.

Polymorphism
Polymorphism is yet another important feature of OOP. Polymorphism is the ability of the language to allow objects or entities to assume multiple forms. For example, a method that has various implementations is polymorphic in Java.

Polymorphism is of two types in Java:

Overloading or Compile Time Polymorphism: In compile-time polymorphism, the call to the polymorphic or overloaded method is resolved at compile time.
Overriding or Runtime Polymorphism: In runtime polymorphism, the call to an overridden method in the Java program is resolved at runtime.
We will discuss polymorphism in detail in our subsequent tutorials.

Given below is an example of compile-time polymorphism in Java wherein we have method add that is overloaded to perform addition with different operand types.

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
class Numbers_Sum { 
    //add method : takes two int parameters
    public int add(int val1, int val2)  { 
        return (val1 + val2); 
    } 
   
    // overloaded add : takes three int parameters
    public int add(int val1, int val2, int val3)  { 
        return (val1 + val2 + val3); 
    } 
   
    //overloaded add: takes two double parameters
    public double add(double val1, double val2)  { 
        return (val1 + val2); 
    } 
}
 
class Main{
    public static void main(String args[])   { 
        //create an object of Numbers_Sum class and call overloaded functions 
        Numbers_Sum numsum = new Numbers_Sum(); 
        System.out.println("Polymorphism in Java");
        System.out.println("add(int, int): " + numsum.add(15, 18)); 
        System.out.println("add(int, int, int): " + numsum.add(5, 10, 20)); 
        System.out.println("add(double,double): " + numsum.add(5.5, 15.5)); 
    } 
}
Output

output 3

In this program, we have three overloaded methods named add. The first method takes two int parameters, the next method takes three int parameters and the third method takes two double parameters. Depending on the number of parameters, the method call is resolved at compile-time and the appropriate call is made.

Abstraction
Using data abstraction, we only expose the essential parts of the application that are made accessible to the user. For example, if we have a car, we are not concerned about the internal components of the car, rather we only consider the car as a whole.

Using a data abstraction mechanism, we only identify the necessary details and ignore the irrelevant details. Java uses abstract classes and interfaces to achieve abstraction. Interfaces are 100 % abstract as they only have method prototypes and not their definition.

The below example shows an abstract class and its usage.

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
// Abstract class declaration
abstract class PetAnimal {
  // Abstract method: should be defined in derived class
  public abstract void animalSound();
  // non-abstract method
  public void print() {
    System.out.println("This method is example of abstraction");
  }
}
 
// Derived class
class Dog extends PetAnimal {
  //abstract method defined here
  public void animalSound() {
    System.out.println("The doggy barks");
  }
}
 
class Main {
  public static void main(String[] args) {
    Dog doggy = new Dog(); // Instantiate derived class and call methods
    doggy.animalSound();
    doggy.print();
  }
}
Output

output - Abstraction in Java

In the above program, we have an abstract class PetAnimals. In this, we have an abstract method ‘animalSound’. Then we create a Dog class and inherit the PetAnimals class. In the Dog class, we override the animalSound method.

Encapsulation
Encapsulation is hiding data or protecting the data. In programming, we achieve encapsulation by wrapping data and methods operating on that data under a single unit.

Video Tutorial: Encapsulation and Polymorphism in Java


A class can be viewed as an encapsulation unit i.e. we have data members and methods operating on these data members as bundled in one single unit.

Proper encapsulation can be achieved by making data members private and having the methods operating on these data as public so that data is completely protected from the outside entities.

The below Java program demonstrates the encapsulation concept.

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
class Customer_Account {  
//private data of class  
private long customer_accountNo;  
private String customer_name,customer_email;  
private float customer_salary;  
//public getter/setter methods to access private data  
public long getAcc_no() {  
    return customer_accountNo;  
}  
public void setAcc_no(long acc_no) {  
    this.customer_accountNo = acc_no;  
}  
public String getName() {  
    return customer_name;  
}  
public void setName(String name) {  
    this.customer_name = name;  
}  
public String getEmail() {  
    return customer_email;  
}  
public void setEmail(String email) {  
    this.customer_email = email;  
}  
public float getSalary() {  
    return customer_salary;  
}  
public void setSalary(float salary) {  
    this.customer_salary = salary;  
}  
}  
public class Main {  
public static void main(String[] args) {  
    //create an object of customer_Account class 
    Customer_Account acc=new Customer_Account();  
    //use setter methods to set values  
    acc.setAcc_no(123458765432L);  
    acc.setName("SoftwareTestingHelp");  
    acc.setEmail("sth@sth.com");  
    acc.setSalary(65000f);  
    //use getter methods to read values  
    System.out.println("Customer Account Number: " + acc.getAcc_no());
    System.out.println("Customer Account Details:");
    System.out.println("  Customer Name: "+acc.getName()+"\n "+
                       " Customer Email: " + acc.getEmail()+"\n " + 
                       " Customer Salary: " +acc.getSalary());  
}  
}  
Output

output - Encapsulation in Java

In the above program, we have a class Customer_Account.

In this class, we have data members which are all private. Then for each private field, we provide getter and setter methods to read and set values respectively. These getters and setters are public. This way we protect the data fields by not allowing them any access from outside the class directly.

They can be accessed only through getters and setters. This demonstrates the encapsulation that we described above.

Frequently Asked Questions
Q #1) What is meant by Object Oriented Programming?

Answer: Object-oriented programming (OOP) is a software paradigm that revolves around data. In OOP, the emphasis is laid on data and thus problems are expressed in terms of objects that are entities consisting of data or fields and methods that operate on these data fields.

By doing so, several distinguishing features of OOP like Inheritance, Polymorphism, Abstraction, and Encapsulation are applied to ensure data safety, reusability, etc.

Q #2) What are the 4 basic principles of OOP?

Answer: Object-oriented programming (OOP) has four basic principles:

Inheritance
Polymorphism
Abstraction
Encapsulation
They are also called four pillars of OOP.

Q #3) Why is Java called Object-Oriented?

Answer: Java has a root class object from which we derive all the other features of Java. Thus without class and object, we cannot have a Java program. Hence Java is called OOP language.

Q #4) Is Java purely object-oriented?

Answer: No, Java is not a pure object-oriented language. As Java also provides primitive data types like int, char, float, double, long, etc. it is not classified as a pure OOP language.

Q#5) What is the difference between C++ and Java?

Answer: Both C++ and Java are Object-oriented languages and support OOP features. But C++ is a compiled language. Java on the other hand is compiled as well as an interpreted language.

The Java interpreter executes the byte code at runtime and generates output that makes it platform-independent. C++ however is platform dependent.

More On OOPS Concept
Class

The class is a blueprint/prototype of a real-world object and it models the state and behavior of that real-world object.

Class Declaration

1
2
3
4
class <em>MyClass</em> {
// field, constructor, and
// method declarations
}
1
2
3
4
5
6
7
8
9
Class room(){
 
//room should have dimension.
 
Dimension is attribute.
//in the room, we are going keep things. Keeping is the function we are going
to do.
Keepthings (); this is a method in java.
}
Class declaration

Object

Software objects are like real life objects with state and behavior. The state will be stored as a field and expose its behavior as methods.

Here room is like general design. Within this room, you should design a living room, cooking room, bedroom.

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
Class CookingRoom(){
Dimension is attribute.
 
//here we should have method to keep cooking things.
Keepthings(){  
This method is same like room class keep things method. 
but it should   have   some more features to hold cooking items.
}
 
cooking();
}
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
Class LivingRoom(){
 
Dimension is attribute.
 
//here we should have method to keep Living Room things.
Keepthings(){  
This method is same like room class keep things method. 
but it should   have   some more features to hold living room items(like tv etc).
}
 
watching tv();
}
Here “Keepthings()” method should do the basic functionalities required for room and it should have additional specification according to “living room” class and “cooking room” class requirement. So the two classes should inherit the methods in the “room” class.

object

Inheritance

Behavior (methods) and state of one class inherited to the other class are called inheritance. The methods and state are inherited from the parent class to the child class.

So,

Class  CookingRoom extends Room{
}
Class  LivingRoom extends Room{
}
Polymorphism

In biology, polymorphism refers to the spices which can have many different forms.

With the same concept in object-oriented programming, the child class can inherit its parent class methods, also it can add unique features to that behavior. Polymorphism can be achieved by method overloading or overriding.

Overloading

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
public class OverloadDemo {
public int add( int a,int b) {
int rs=a+b;
return rs;
 
}
public int add( int a,int b,int c) {
 
int rs=a+b+c;
return rs;
}
public static void main(String[] args) {
 
OverloadDemo ov=new OverloadDemo();
System.out.println(ov.add(23,56,45));
System.out.println(ov.add(23,56));
}
 
}
ovrloading

Overriding

1
2
3
4
5
6
7
public class Bicycle {
int wheels=2;
String seat;
public void riding() {
System.out.println("bicycle is used for riding");
}
}
overriding1

1
2
3
4
5
public class RoadBicycle extends Bicycle{
public void riding() {
System.out.println("RoadBicycle is used for road riding");
}
}
overriding2

1
2
3
4
5
6
7
8
public class TestBicycle {
 
public static void main(String[] args) {
Bicycle b=new RoadBicycle();
b.riding();
 
}
}
class testbicycle

OUTPUT: Here the child class method overrides the parent class method.

output- overriding

Super Keyword

Super keyword is a reference variable which is used to refer to the immediate parent class object. With super keyword, you can refer the parent class method or variables or constructor.

This Keyword

This keyword is used to refer to the current class object. Using this keyword, you can access the current class instance variable or current class method. This can be passed as an argument in the method call.

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
public class DemoThisKeyword {
 
private int accno;
private int  balance;
 
public void setvalues(int accno,int balance) {
 
this.accno=accno;
 
this.balance=balance;
 
}
public int showdata()
{
 
System.out.println(accno);
System.out.println(balance);
return balance;
}
 
public static void main(String[] args) {
// TODO Auto-generated method stub
 
DemoThisKeyword obj =new DemoThisKeyword();
obj.setvalues(11, 100);
obj.showdata();
System.out.println(obj.showdata());
 
}
}
this keyword

Constructor

Java constructors are like methods which will be called when the object is created for the class. The constructor should have the same name as the class.

1
2
3
4
5
Class Myclass{
Myclass();
Method1() {
}
}
constructor

While Creating an object for the class, Myclass myobj =new Myclass ();

The constructor method will be called. The constructor is automatically created by Java compiler for all the classes by default.

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
public class ConstructorExampleProgram {
 
int employee_age;
String employee_name;
int employee_salary;
 
//Default constructor
ConstructorExampleProgram(){
this.employee_name=Bob";
this.employee_age=30;
this.employee_salary=7000;
}
 
//Parameterized constructor
ConstructorExampleProgram(String n,int a,int b){
this.employee_name=n;
this.employee_age=a;
this.employee_salary=b;
}
public static void main(String args[]){
ConstructorExampleProgram obj1 = new ConstructorExampleProgram();
ConstructorExampleProgram obj2 =
new ConstructorExampleProgram("clare", 56,7500);
System.out.println(obj1.employee_name+" "+obj1.employee_age+"
"+obj1.employee_salary);
 
System.out.println(obj2.employee_name+" "+obj2.employee_age+"
"+obj2.employee_salary);
}
}
Constructor sample programme

Rules to be followed for the constructor:

The constructor should have the same name as the class name.
The constructor should not have a return statement.
Points to be noted:

In Object-oriented programming, objects are the main part of programming.
OOP concepts are object, class, inheritance, polymorphism, constructor.
Super keyword used to refer to the parent class members, and this keyword is used to refer to a current class object.
Constructors are like methods which will be called when the object is created for the class.
Conclusion
This tutorial covered the basics of important object-oriented features supported by Java. This is just an introductory tutorial on OOPS in Java. We will cover all the topics in detail in our subsequent tutorials. Java supports four pillars of OOP i.e. Polymorphism, Inheritance, Abstraction, and Encapsulation.

Apart from these features, Java also supports the other features and OOP constructs like containment, aggregation, message passing, etc. which will be discussed in our upcoming tutorials.

Was this helpful?
Recommended Reading
What Is Abstraction In Java - Learn With Examples
Abstraction in Java
This tutorial explains what is Abstraction in Java along with programming examples. You will also learn what is an abstract class & why is it used: In this JAVA Series, we will discuss the important features of object-oriented programming (OOP) that are also known as four pillars i.e. Abstraction, Encapsulation,…

What Is Inheritance In Java - Tutorial With Examples
Inheritance in Java – Introduction
This tutorial explains the concept of Inheritance in Java, related terms like 'extends' and 'super' keywords, subclass, superclass, Is-A, HAS-A relationships, etc.: After learning about the three Pillars of OOP namely, Abstraction, Encapsulation, and Polymorphism in Java, we come to the last pillar of OOP i.e. inheritance. Starting with this…

What Is Polymorphism In Java - Tutorial With Examples
What is Polymorphism in Java1 Polymorphism in Java 
This tutorial explains what is Polymorphism in Java, the types of polymorphism, & how to implement compile-time polymorphism with examples: The word “Polymorphism” derives from two words i.e. “Poly” which means many and “morphs” meaning forms. Thus polymorphism means many forms. In a programming language, we can say that an…

Encapsulation In Java: Complete Tutorial With Examples
Encapsulation in Java
Learn about Encapsulation in Java with examples, why we need it, associated getter and setter methods: In this tutorial, we will discuss another OOP concept - “Encapsulation”. OOP has four pillars namely, abstraction, encapsulation, polymorphism, and inheritance. While abstraction is used to expose only the relevant details to the end-user,…

Types Of Inheritance In Java - Single Vs Multiple Inheritance
Types of Inheritance in Java
Learn all about the various types of inheritance in Java with the help of simple examples. Find out if Java supports multiple inheritances: We introduced Inheritance in Java along with the various basic concepts related to inheritance to the readers in our last tutorial. In this tutorial, we will explore…

OOPS Concepts In C#: Object Oriented Programming Concept Tutorial
C# Object Oriented Programming
This Tutorial Explains The OOPS Concepts In C#. You Can Learn About Object Oriented Programming Principles Like Polymorphism, Encapsulation, Inheritance & Abstraction: Object-Oriented Programming is a programming model that works on a principle that revolves around objects rather than action or logic. It allows the users to create objects based…

READ MORE FROM THIS SERIES:

JAVA Tutorial For Beginners: 100+ Hands-on Java Video Tutorials
Introduction To Java Programming Language – Video Tutorial
Java DataTypes, Loops, Arrays, Switch and Assertions
OOP Java: Introduction To Object Oriented Programming In Java
Java Interface and Abstract Class Tutorial With Examples
Java Exceptions And Exception Handling With Examples
Java String Data Type With String Buffer And String Builder
Java Threads with Methods and Life Cycle
Basic I/O Operations In Java (Input/Output Streams)
Java Collections Framework (JCF) Tutorial
Java Reflection Tutorial With Examples
Java SWING Tutorial: Container, Components and Event Handling
Java Deployment: Creation and Execution of Java JAR File
Java Virtual Machine: How JVM Helps in Running Java Application
Access Modifiers In Java – Tutorial With Examples
Spock Tutorial: Testing With Spock And Groovy
Writing Unit Tests with Spock Framework
Spock Mocking and Stubbing (Examples with Video Tutorials)
Data-driven or Parameterized Testing With Spock Framework
Spock For Integration And Functional Testing With Selenium
Java Development Using Eclipse IDE
Prominent Java 8 Features With Code Examples
IntelliJ IDEA Tutorial – Java Development With IntelliJ IDE
Java Hello World – Create Your First Program In Java Today
Java ‘this’ Keyword: Tutorial With Code Examples
Java Generics Tutorial With Examples
What Is Static Keyword In Java?
Java Iterator: Learn To Use Iterators In Java With Examples
Introduction To Java Arrays And Related Concepts
Java Array Length Tutorial With Code Examples
Java Array – Declare, Create & Initialize An Array In Java
Java Array – How To Print Elements Of An Array In Java?
Java Operators – Arithmetic, Unary & Bitwise Operators In Java
How To Handle The ArrayIndexOutOfBoundsException in Java?
Array Data Types – int Array, Double array, Array of Strings Etc.
How To Add Elements To An Array In Java
Java Copy Array: How To Copy / Clone An Array In Java
Remove/Delete An Element From An Array In Java
How To Sort An Array In Java – Tutorial With Examples
How to Reverse An Array In Java: 3 Methods With Examples
Java String Array- Tutorial With Code Examples
Java Logical Operators – OR, XOR, Not & More
How To Pass / Return An Array In Java
Array Of Objects In Java: How To Create, Initialize And Use
MultiDimensional Arrays In Java (2d and 3d Arrays In Java)
Java Generic Array – How To Simulate Generic Arrays In Java?
Jagged Array In Java – Tutorial With Examples
Arrays In Java 8 – Stream Class And ParallelSort Method
Java Array Class Tutorial – java.util.Arrays Class with Examples
The Top 10+ Java IDEs & Online Java Compilers (2026 Rankings)
Java List – How To Create, Initialize & Use List In Java
ListIterator Interface In Java With Examples
Ternary Operator In Java – Tutorial With Examples
Java Components: Java Platform, JDK, JRE, & Java Virtual Machine
Java Basics: Java Syntax, Java Class and Core Java Concepts
How To Download, Install And Configure Java
Java List Methods – Sort List, Contains, List Add, List Remove
Java Scanner Class Tutorial With Examples
What Is Java Vector | Java Vector Class Tutorial With Examples
Java String Methods Tutorial With Examples
Java ArrayList: How to Declare, Create, Initialize ArrayList
Covert List To Array And Other Collections In Java
Java ArrayList Conversions To Other Collections
Binary Search Algorithm In Java – Implementation & Examples
Doubly Linked List In Java – Implementation & Code Examples
ArrayList Methods In Java – Tutorial With Example Programs
Bubble Sort In Java – Java Sorting Algorithms & Code Examples
Insertion Sort In Java – Insertion Sort Algorithm & Examples
Selection Sort In Java – Selection Sort Algorithm & Examples
Linked List In Java – Linked List Implementation & Java Examples
Java Vs Python – Key Differences Between Java And Python
Java String compareTo Method With Programming Examples
Java String contains() Method Tutorial With Examples
QuickSort In Java – Algorithm, Illustration & Implementation
Merge Sort In Java – Program To Implement MergeSort
Java Map Interface Tutorial With Implementation & Examples
What Is A Java HashTable: HashTable Implementation & Example
What Is A HashMap In Java?
LinkedHashMap In Java – LinkedHashMap Example & Implementation
TreeMap In Java – Tutorial With Java TreeMap Examples
TreeSet In Java: Tutorial With Programming Examples
Java String Split() Method – How To Split A String In Java
Java Stack Tutorial: Stack Class Implementation With Examples
Set Interface In Java: Java Set Tutorial With Examples
Java Queue – Queue Methods, Queue Implementation With Examples
Java JDBC Tutorial: What Is JDBC (Java Database Connectivity)
Binary Search Tree In Java – Implementation & Code Examples
Deque In Java – Deque Implementation And Examples
How To Implement Dijkstra’s Algorithm In Java
Java Graph Tutorial – How To Implement Graph Data Structure
What Is A Heap Data Structure In Java
Java Priority Queue Tutorial – Implementation & Examples
Java String indexOf Method With Code Examples
Java String length() Method With Examples
Java String Replace(), ReplaceAll() & ReplaceFirst() Methods
Java Reverse String: Tutorial With Programming Examples
Java substring() Method – Tutorial With Examples
How To Use Java toString Method?
Java JDBC Connection Tutorial With Programming Example
Concurrency In Java: Semaphore And Executor Framework
Multithreading In Java – Tutorial With Examples
What Is NullPointerException In Java & How To Avoid It
Java Synchronized: What Is Thread Synchronization In Java
Try, Catch, Throw, Finally in Java: Java Exception handling
Thread.Sleep() – Thread Sleep() Method In Java With Examples
Assertions In Java – Java Assert Tutorial With Code Examples
What Is Garbage Collection In Java And How Does It Work
Recursion In Java – Tutorial With Examples
Java Class Vs Object – How To Use Class And Object In Java
Java Variables And Their Types With Examples
Java Integer And Java BigInteger Class With Examples
Important Java Keywords List – Reserved Words In Java
Types Of Classes In Java: Abstract, Concrete, Final, Static
Java Double – Tutorial With Programming Examples
Java Float Tutorial With Programming Examples
JDBC DriverManager, JDBC PreparedStatement And Statement
What Is Abstraction In Java – Learn With Examples
Java Constructor – Class, Copy And Default Constructors
Private, Abstract, Array And String Constructors In Java
Overriding Predefined Methods In Java
What Is Polymorphism In Java – Tutorial With Examples
Java @override: Method Overriding And Runtime Polymorphism
Encapsulation In Java: Complete Tutorial With Examples
Java Enum: Java Enumeration Tutorial With Examples
JDBC ResultSet: How To Use Java ResultSet To Retrieve Data
Comparable And Comparator Interfaces In Java
Java Composition – What Is Composition (Has-A) In Java
What Is Inheritance In Java – Tutorial With Examples
Types Of Inheritance In Java – Single Vs Multiple Inheritance
Marker Interface In Java: Serializable And Cloneable
Interface Enhancements In Java 8 – Java Functional Interface
Design Patterns In Java: Singleton, Factory And Builder
Introduction To JFC And GUI Programming In Java
Java Regex Tutorial With Regular Expression Examples
What Is Java Used For: 12 Real World Java Applications
What Is JavaDoc And How To Use It To Generate Documentation
Java Vs JavaScript: What Are The Important Differences
What Is Java AWT (Abstract Window Toolkit)
Java JDBC Transaction Management With Example
 JDBC Exception Handling – How To Handle SQL Exceptions
Java If Statement Tutorial With Examples
Methods In Java – Tutorial With Programming Examples
HashSet In Java – Tutorial With Programming Examples
Java For Loop Tutorial With Program Examples
JDBC Batch Processing And Stored Procedure Tutorial
Java Switch Case Statement With Programming Examples
Java While Loop – Tutorial With Programming Examples
How To Convert Java String To Int – Tutorial With Examples
Java Do While Loop – Tutorial With Examples
8 Methods To Convert An Integer To String In Java
Java Break Statement – Tutorial With Examples
Java Continue Statement – How To Use Continue In Java
How To Convert Char To Int In Java [With Examples]
4 Methods To Convert Char To String In Java
Java Boolean – What Is A Boolean In Java (With Examples)
3 Methods To Convert Double To Int In Java
How To Use .equals Method In Java – Tutorial With Examples
Methods To Convert Java String To Double [With Examples]
Java char – Character Data Type In Java With Examples
Java Timer – How To Set A Timer In Java With Examples
Escape Characters OR Escape Sequences In Java
Java Pass By Reference And Pass By Value With Examples
TOP 15 Java Project Ideas for Beginners in 2026 (New LIST)

Get the Premium eBook 
Download your copy now 👇
Our Bestselling eBook 'Software Testing Career package' Now Available FREE for Limited Period
Enter your email..

DOWNLOAD NOW!
Leave a Comment
Comment

Name
Name *
Email
Email *

About SoftwareTestingHelp
Helping our community since 2006! Most popular portal for Software professionals with 400 million+ visits and 500,000+ followers! You will absolutely love our creative content on QA, Dev, Software Tools & Services Reviews!

Learn In This Article:
Video Tutorials on OOPS Concepts
Object-Oriented Programming (OOP) In Java
Object & Class
Inheritance
Polymorphism
Abstraction
Encapsulation
Frequently Asked Questions
More On OOPS Concept
Conclusion
Software Testing Help

Communication Details

Main Office: A708, City Vista, Fountain Road, Kharadi, Pune, MH, 411014.

Email Us: info@softwaretestinghelp.com

Facebook Linkedin X-twitter Youtube
Software Testing Tools

Test Management Tools
Web Application Testing Software
Cross Browser Testing Tools
Best ETL Testing Tools
Mobile Testing Tools
Regression Testing Tools
Defect Tracking Tools
GUI Testing Tools
Requirements Management Tools
ALL Testing Tools
Performance Testing Tools

Performance Testing Tools
Performance Testing Services
Computer Stress Test Tools
Cloud- Load Testing Service
Performance Testing Guide
Database Performance Tools
Website Performance Testing Tools
Application Performance Monitoring
Automation Testing Tools

Unit Testing Tools
API Testing Tools
Best ETL Tools
Open Source Testing Tools
Functional Testing Tools
Selenium Alternatives
Accessibility Testing Tools
Mobile Automation Tools
Automation Testing Software
Automation Testing Services
Data Tools

Data Masking Tools
Data Modeling Tools
Data Analysis Tools
Data Migration Software
Data Integration Tools
Data Mapping Tools
Data Loss Prevention
Test Data Management Tools
Data Recovery Software
Data Analytics Companies
ALL Data Tools
Coding Software

Best Code Editors
Code Coverage Tools
Low-Code Development Tools
Static Code Analysis Tools
Source Code Management Tools
Version Control Software
Code Review Tools
Javascript Online Editors
Code Review Tools
Code Quality Tools
Security Testing Tools

Penetration Testing Tools
App Security Testing Tools
Web Security Scanners
Vulnerability Assessment
Mobile App Security
Malware Removal Tools
Anti-Ransomware Tools
Spyware Removal Tools
Mobile Pen Testing Tools
Pen Testing as a Service
DAST Software
Testing Service Providers

Managed Testing Services
Mobile Testing Services
Software Testing Services
Performance Testing Services
Penetration Testing Companies
Cyber Security Companies
QA Outsourcing Companies
USA Testing Companies
Website Testing Services
Regression Testing Services
Software Development

Custom Software Companies
App Development Tools
Software Development Tools
Game Development Companies
Software Companies USA
SaaS Development Companies
Android App Development
DevOps Tools
DevOps Service Providers
App Development Companies
Healthcare Dev Companies
Networking Tools

Network Management
Network Security Tools
Network Scanning Tools
Application Scanners
Network Testing Tools
Network Monitoring Tools
Network Security Tools
Server Monitoring Tools
Network Mapping Software
SIEM Tools
System Monitoring Tools
Infrastructure Monitoring Tools
Project Management Tools

Project Management Software
Project Management Apps
Agile Project Management Tools
Workflow Management Software
Task Management Software
Team Collaboration Tools
JIRA Alternatives
Project Planning Tools
Team Management Software
Cloud Tools

Cloud Monitoring Tools
Crowdsourcing Platforms
Cloud Management
Crowdsourced Testing Companies
Cloud Mobile Testing
Cloud Computing Companies
Cloud Managed Services
Cloud Testing Tools
Cloud Security Companies
ALL Categories
Security Software

Free Antivirus Software
Cybersecurity Software
Internet Security Tools
External Vulnerability Scanner
Website Malware Scanner
Web Security Scanners
Zero Trust Security
Vulnerability Assessment
ALL Security Tools
IT Management Tools

Remote Desktop Software
Configuration Management
Incident Management Software
Change Management Software
IT Asset Management
Managed IT Services
ITSM Tools
Remote Monitoring Software
Remote Access Software
Asset Discovery Tools
Workload Automation Tools
IT Automation Tools

About us | Contact us | Advertise
All articles are copyrighted and cannot be reproduced without permission. SoftwareTestingHelp® is a registered trademark.
©SoftwareTestingHelp 2025 — Read our Copyright Policy | Privacy Policy | Terms | Cookie Policy | Affiliate Disclaimer

Software Testing Help


AI Engine Chatbot
