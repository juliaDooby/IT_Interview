Basic Questions for Hibernate

Q #1) Describe Java Hibernate.

Answer: Hibernate is a Java framework and object-relational mapping that maps Java classes to database tables and Java data types with SQL data types and manages data retrieval and retention (persistence) tasks using Java Persistence API.

Q #2) List hibernate four ORM levels

Answer: The following are the four object-relational mapping levels used for Hibernate applications:

Full object mapping supports features like persistence, polymorphism, inheritance, and composition. Persistent classes in full object mapping do not implement a special interface or base class.
Light object mapping represents entities as classes that are manually mapped to relational tables. It uses design patterns that hide business logic code. Developers use this mapping for applications with common metadata-driven data models and fewer entities.
Medium object mapping has object association support from persistence with SQL code generated during build time. This mapping is applied for medium-sized applications with complex transactions and mapping exceeding 25 different database products.
Pure relational mapping is used for applications and user interfaces that are designed around SQL-based relational models and operations.
Q #3) What is the ORM tool?

Answer: Object Relational Mapping (ORM) tool is a technique to convert data between incompatible data types using object-oriented programming languages such as Java, C#, PHP, etc.

Some examples of ORMs in various OOPs languages are Java Persistence API, Hibernate, Django ORM, and Dapper ORM in C#. ORM tool manages data from database tables to classes and objects to rows in these tables. Active Record, DataMapper, OpenJPA, MyBatis, and Sequelize are some ORM examples.

Popular ORM Tools:

ormtool
Q #4) What are the advantages of using Java Hibernate?

Answer: Advantages are described below:

It is lightweight and open source under GNU General Public License.
The first and second-level cache used internally provides fast performance.
Hibernate Query Language (HQL) offers database-independent queries.
Database tables are generated using Hibernate.
Data from multiple tables are easy to fetch.
Supports query cache and provides database status and query statistics.
Q #5) Explain the components of the Hibernate framework

Answer: Hibernate framework is used in the software industry to map object-oriented domain models to a relational database.

Components included in hibernate framework are as explained below:

SessionFactory is a session factory and a client for ConnectionProvider. SessionFactory belongs to org.hibernate.SessionFactory interface that offers a factory method to get Session object, it also holds second-level optional data cache.

The session is a factory of Criteria, Transaction, and Query. A session is a short-lived object that wraps a JDBC connection, holds a first-level mandatory data cache, and provides an interface between data stored in the database and the application. org. hibernate. The session interface has methods to insert, update, and delete objects.

Transaction object is optional, specifying the atomic unit of work. org.hibernate.Transaction interface offers transaction management methods.

ConnectionProvider is a factory of JDBC connections that abstracts applications from DataSource or DriverManager.

TransactionFactory is an optional factory for transactions. It creates transactions on an existing database.

Persistence objects are Java classes whose instances or objects are stored in database tables and represent rows in these tables. These objects follow the Plain Old Java Objects (POJO) programming model.

framework components
Q #6) List features supported by Hibernate framework.

Answer: Hibernate framework supports the following features:

Lightweight
Open Source
Object Relation Mapping
High performance
Hibernate Query Language
Caching
Automatic table generation
Scalability
Q #7) List technologies supported by Hibernate

Answer: It supports the following technologies:

XDoclet Spring
J2EE
Eclipse Plug-ins
Maven
Q #8) Explain HQL

Answer: Hibernate Query Language (HQL) operates on persistent objects and their properties. It is easy to learn, independent of the database, and supports polymorphic queries.

Polymorphic queries mean the ‘From’ clause of the query returns instances of entity classes and instances of subclasses of these classes.

Q #9) List interfaces supported by the Hibernate framework.

Answer: Hibernate supports the following important interfaces:

ServiceRegistry
SessionFactory
Session
Transaction
Query
Q #10) Explain one-to-one association in Hibernate with example.

Answer: A one-to-one association can be implemented in the following ways:

Foreign key association
Using JOIN between tables
Use of shared primary key
Using annotation @MapsId
Hibernate Interview Questions for Intermediates
Q #11) Explain one-to-many associations in Hibernate.

Answer: Hibernate one-to-many associations has relation between two entities, with the first entity having related to the second entity of multiple instances. It can perform one-to-many associations using the association of foreign keys and using JOIN between tables.

Q #12) Explain many-to-many associations in Hibernate.

Answer: Hibernate many-to-many associations can be applied between two entities with the relation between many entity instances. One of the examples can have a relation between two entities, such as an employee and a project with an employee can work for multiple projects, whereas a project has multiple employees working under it.

Q #13) List essential annotations used in Hibernate mapping.

Answer: The Hibernate association mapping annotations are:

@OneToOne
@ManyToOne
@OneToMany
@ManyToMany
@PrimayKeyJoinColumn
@JoinColumn
@JoinTable
@MapsId
Q #14) Describe the session in Hibernate framework.

Answer: A session is a lightweight object that is instantiated every time interaction with the database is needed. Session object saves and retrieves the persistent object. The session is not thread-safe hence should be created and destroyed as needed.

The session provides first-level cache. Session objects are mainly used to create, read, delete, and offer operations for mapped entity class instances.

Q #15) Describe SessionFactory in Hibernate framework.

Answer: SessionFactory is an interface from the org.hibernate package. It is a thread-safe and immutable interface used to create Session objects.

SessionFactory is a factory class that is long-lived and available for the entire application, whereas Session object is short-lived and becomes available only for particular transactions. SessionFactory provides a second-level cache.

Q #16) List the differences between getCurrentSession() and openSession() methods in Java Hibernate.

Answer: SessionFactory class uses two methods to create a session – openSession and getCurrentSession. Following is the list of differences between these two methods.

openSession()
getCurrentSession()
openSession() method always creates new Session object.	getCurrentSession() method creates new Session when it does not exist. OR use same session from current hibernate context
It uses flush and close session objects explicitly	Hibernate internally flush or close session objects and does not need use them explicitly.
For single threaded environment openSession() method performs weaker compared to getCurrentSession() method	For single threaded environment, getCurrentSession() method performs better compared to openSession() method.
openSession() does not need configuration of any property to call it.	It is required to configure “CURRENT_SESSION_CONTEXT_CLASS” property before calling getCurrentSession() else it may fail
Q #17) Describe Hibernate collections types.

Answer: Collection in hibernate is a list of unordered objects that may have duplicates. It is similar to java.util.List, The simple collection type in hibernate is <bag>. The content of a collection is needed for SQL query which won’t execute until code gets accessed.

The developer can separate the data access logic from object traversal logic – This process is known as lazy collection.

Q #18) List various collection types used in Hibernate.

Answer: Various collection types are as listed below:

ArrayType
BagType
CustomCollectionType
IdentifierBagType
ListType
MapType
SetType
Q #19) List the difference between save() and persist() methods of session object in hibernate.

Answer: Both Save() and persist() are session object methods applied to save objects in the database.

The difference between Save() and Persist() method is listed below:

Save()
Persist()
Save() method returns the identifier of the instance which is serializable in nature.	The method has return type as void, hence it does not return anything
Save() method returns an identifier hence an insert query gets executed to get the identifier. Irrespective of whether it is inside or outside of transaction	If persist() method is called out side of transaction boundaries, it will not execute an insert query.
Q #20) List the difference between get() and load() method.

Answer: get() and load() method of hibernate are applied with an identifier to fetch a data.

The differences between these hibernate session class are listed below:

Get()
Load()
if object is not found get() method will return null	If object is not found, load() method will throw ObjectNotFoundException exception.
get() always will hit the database	load() method does not hit database
get() returns real object – hence is known as eager method for an object	load() method returns proxy object – hence load() is lazy load for an object
Use get() method if you are not sure of object exists.	Use load() method when you are sure that object exists
get() method is slower than load() method	load() is faster compared to get() method
Q #21) Describe Hibernate Template Class.

Answer: HibernateTemplate class helps with different methods for retrieving and querying data from databases. When Spring and Hibernate are integrated, Spring ORM provides 2 helper classes – HiberTemplate and HibernateDaoSupport.

This helper class is used to retrieve sessions from Hibernate and get Spring transaction management.

Q #22) List the benefits of using HibernateTemplate.

Answer: Using HibernateTemplate class has the following benefits:

Provides different methods for querying/retrieving data from the database.
Simplified interactions with Hibernate Session.
Common functions are simplified to a single method call.
Exceptions are caught and converted to runtime exceptions.
The sessions are closed automatically using HibernateTemplate.
Q #23) What design patterns Hibernate framework use?

Answer: Hibernate framework uses the following design patterns:

Domain Model
Proxy Design
Factory Design
Query Object
Data Mapper
Unit of Work
Q #24) List the strategies applied for performance tuning of hibernating applications

Answer: Strategies for performance tuning hibernate applications are listed below:

SQL optimization
Session Management
Data Caching
Q #25) What different stages of persistent entity are found in hibernating?

Answer: Hibernate persistent entity comprises the following four stages of object:

New (Transient)
Persistent (Managed)
Detached (Unmanaged)
Removed (Deleted)
Hibernate Scenario-Based Interview Questions
Q #26) Describe the working of hibernating transaction management.

Answer: Transaction is a unit of work in a Hibernate framework that maintains an abstraction from its Java transaction API and JDBC implementation. session.beginTransaction() method instantiates the transaction process in hibernate framework.

Transaction process in Hibernate:

transaction
The new transaction starts with begin() method. For a successful transaction commit() method completes the transaction and flushes the associated session when a transaction fails rollback() method rolls back the database transaction and removes an object which was newly created.

Q #27) How does Hibernate Proxy support lazy loading?

Answer: An uninitialized proxy from the desired entity class is created when Session.load() is called. These proxies or byte code enhancements are used to implement JPA lazy loading functionality. Using lazy loading lazy associations are intercepted, and relations are initialized prior to sending results back to the caller.

SQL statement from HQL to fetch an entity object is executed by Hibernate on getter or setter method call of non-primary key attribute. Lazy loading of hibernate is used to load a Catalog – (list of products on sale) without losing performance in online stores.

Q #28) Explain Query Cache in Hibernate.

Answer: Query Cache is a MySQL feature that excels in data retrieval from the database by storing together MySQL select statements along with a recordset retrieved in memory, the data is quickly served when a client sends identical query requests, without repeating the execution of database commands.

Query Cache is not used for queries

That is part of the subquery of the outer query.
Executed within the body of an event, trigger, or stored function.
User should have select privilege for all the tables and databases in order to fetch the result set from the query cache.

All the query cache becomes invalid and is removed from the cache when the database table is changed by any of the following SQL functions

Alter Table, Truncate Table, Drop Table, Drop Database, Insert, Update, or Delete statements.

Q #29) What is the difference between SessionFactory and Session of Hibernate framework?

Answer: SessionFactory creates a Session object.

The differences between SessionFactory and Session are listed below:

SessionFactory
Session
There is one instance of SessionFactory per database or datasource	Session is one instance per transaction/client/thread
It is a thread safe	It is not thread safe
Heavy weight object – maintains datasources, mappings and hibernate configuration	It is a light weight
It creates and manages the Sessions	Session is created by SessionFactory
Immutable object, created as singleton, server initializes SessionFactory	Sessions are opened using sessionFactory.openSession() for database operations. database operations. database operations. Session.close() method are used to close the Session.
Q #30) Describe Transient, Persistent, and Detached states in Hibernate.

Answer: An entity in hibernate framework is in three states – namely transient, persistent, and detached referred to as a transient object, persistent object, and detached object respectively.

On creation of an entity for the first time, using a new operator, it is not called by session.save(user) or has no association with Hibernate session, it is known as a transient object. Hibernate at this stage has no information about the object or the object has no representation in the database, like a row in a particular table.

An object from the transient state will be moved into a persistent state by the saveOrUpdate() or save() method from hibernate session or by associating this object with hibernate session.

You can close hibernate session or call evict() method to move an object to a detached state. There is no object tracking by hibernating in this stage, you can reattach the detached object to Hibernate by calling merge(), update(), or saveOrUpdate() method. After reattaching, the detached entity can be modified into the Persistent stage.

Q #31) List the best practice for Persistent classes recommended by Hibernate.

Answer: Best practice recommended by Hibernate for Persistent classes:

hasCode() and equals() methods should be implemented.
Prevent using references to the ID in equals() method of the persistent class.
equals() and hasCode() methods should be accessed using getter and setter methods.
The collection should not be mapped using Array.
Persisted Java classes need a default constructor.
Ease of identification between hibernate and database objects with class ID helps in mapping with the database table’s primary key column.
Implementation of interfaces that declare public methods and non-final persistent classes are the key feature of proxies and hibernate.
Persisted attributes use to get and set methods of JavaBeans and are declared private.
Classes that do not implement or extend specialized interfaces or classes as needed by the EJB framework.
Q #32) List different types of cascading.

Answer: Cascade feature can be implemented in two ways – using an XML file OR using annotation. The various types of cascading used by Java Persistence API (JPA) and Hibernate are listed below:

Java Persistence API Cascade Types

PERSIST
MERGE
REFRESH
REMOVE
DETACH
ALL
Hibernate Cascade Types

REPLICATE
SAVE_UPDATE
LOCK
Q #33) List the steps of integrating log4j logging with Hibernate

Answer: Hibernate uses log4j using log4j.xml file or using log4j.properties file

Log4j logging using xml file

Step i) Add log4j and slf4j JAR files
Step ii) Log4j.xml file creation in src folder (along with hibernate.cfg.xml file)
Logging using log4j properties file

Step i) Add log4j and slf4j JAR files
Step ii) Create log4j properties file that has a file path for log file messages, console log message, root Logger options, and JDBC parameters for log.
Q #34) List advantages of Hibernate Tools Eclipse plugin

Answer: Using Hibernate Tools plugin for eclipse IDE has the following advantages for developers working on hibernate projects:

Ease of testing, prototyping, and creation of hibernate or JPA mapped projects.
Useful for exploring mappings, running queries, and generating code for data projects.
Support for hibernating annotations, core hbm.xml, and JPA persistence projects.
Database connection option using JPA project connection, raw hibernate setup, or available existing connection from Eclipse.
Ease of code generation via hibernate model configuration menu.
Control over database translation to a persistence model during reverse engineering.
Configuration of various artifacts with exporters wizard.
Exploring (SessionFactory & configuration) models and database using console.
Read-only view of hibernating mapping diagrams with console.
Hibernate Query viewer allows viewing the output.
Prototyping HQL queries with the HQL editor.
Preview of SQL for HQL using hibernate dynamic SQL preview feature.
Importing hibernate and model classes using criteria editor.
Content assist for XML for java properties and classes and hibernate types with hbm.xml source editor.
Q #35) List various joins you can use in hibernate?

Answer: There are multiple ways you can use joins in Hibernate:

Joins in HQL.
Joins in SQL native query.
One-to-one, One-to-many, and many-to-many relations can be used.
Q #36) List the advantages of using native SQL query support for hibernating.

Answer: With Hibernate SQLQuery object, you can run database-specific queries that use connect keywords in Oracle or query hints unsupported by Hibernate API.

Q #37) Explain the Named SQL query in hibernate

Answer: Named SQL query can be used for both Native SQL and HQL. Configured and defined in hibernate mapping files with JPA annotations – @NamedNativeQuery and @NamedQuery.

Named Queries syntax is verified with the creation of the session factory and if an error occurs makes hibernate application fail fast. The named query can access the application from several places thereby improving reusability.

Hibernate Interview Questions for Experienced
Q #38) How can you view SQL query logs in Java hibernate applications?

Answer: In order to check SQL query logs, the show_sql property can be added in the configuration file of hibernate application as below

1
&lt;property name="show_sql"> true&lt;/property>
Q #39) List the ways objects can be retrieved from Hibernate database.

Answer: Objects can be retrieved from Hibernate database in four ways:

Standard SQL
HQL
Criteria API
The identifier
Q #40) List ways in which Hibernate’s second-level cache can be disabled

Answer: Second level cache in hibernate can be disabled in the following ways:

Using CACHEMODE.IGNORE statement

Using org.hibernate.cache.NoCacheProvider

Setting property hibernate.cache.use_second_level_cache to False.

Advanced level interview questions for professionals’ experience using Hibernate framework.

Q #41) What concurrency strategies are available in Hibernate?

Answer: A mediator responsible for storing data items in cache and retrieving them back from cache is known as concurrency strategies. The session is a first-level cache, whereas SessionFactory is a second-level cache in Hibernate applications.

For a second-level cache, you need to select one of the concurrency strategies available in Hibernate.

The concurrency strategies available with Hibernate are listed below:

Transactional: This strategy can be selected for the case where the update of data is rare, with mostly read data and having concurrent transactions it is critical to prevent stale data.
Read-write: Similar to that transactional strategy, you can use the read-write strategy.
Nonstrict-read-write: In the case where there is no consistency between cache and database, and there are rarely any data changes, it is not critical if there occur any stale data.
Read-only: This strategy is suitable for non-changing reference data that never change.
Q #42) Describe how to solve N+1 select problem.

Answer: N+1 query problem can occur when a data access framework such as Hibernate executes N SQL statements additionally to retrieve the same data fetched from the database during execution of the primary SQL query. With the large value of N, more queries will get executed, impacting performance and slowing down the query output.

Hibernate can resolve N+1 select problems in multiple ways

Using JOIN fetch – The query as listed works fine, however, it does not allow pagination as we cannot apply query.setMaxResults(n) – hibernate will retrieve all records and do pagination in memory thereby memory consumption will be increased.
entityManager.createQuery(“select x from Employees x left join fetch x.designation”, Employees.class);
Use @BatchSize annotation on Lazy association – Using annotation @BatchSize on lazy association as stated below, pagination can be performed in this case. We use size() method on the order collection.

public class Items {
        @OneToMany(fetch = FetchType.LAZY, mappedBy =”items”)
        @BatchSize(size = 15)
        private Set &amp;amp;amp;amp;amp;amp;lt;ORDER&amp;amp;amp;amp;amp;amp;gt; order;
    }
Using subqueries returning a list of result set identifiers – @Fetch(FetchMode.SUBSELECT) on lazy association as below statement

public class Items {
        @OneToMany(fetch = FetchType.LAZY, mappedBy =”items”)
    @Fetch(FetchMode.SUBSELECT)
    Private Set&amp;amp;amp;amp;amp;amp;lt;ORDER&amp;amp;amp;amp;amp;amp;gt; order;
}
Q #43) Can the entity class be declared as final?

Answer: In Hibernate using the final keyword for entity class is not a good practice. In Hibernate proxy pattern is used to improve performance with the lazy association. Using the final entity, Hibernate cannot use a proxy. These proxies are dynamically created by means of subclassing the object at runtime.

Q #44) If the no-args constructor is absent in the entity bean what will happen?

Answer: Reflection API class.newInstance() of Hibernate instance of Entity beans is created that require no-args constructor, to call load() or get() methods. When the no-arg constructor is absent, the entity bean instance cannot get created and HibernateException is issued.

Q #45) How to view Hibernate -generated SQL on a console?

Answer: Hibernate uses its built-in functions to view SQL statements on the console.

Show_sql -You need to enable the functionality by adding ‘show_sql’ property in ‘hibernate.cfg.xml’ configuration file. By updating show_sql property in configuration file as <property name=”show_sql”>true</property>, the SQL statements will be listed on the console.

format_sql – Using format_sql statement will make it more readable, but takes console screen space on the console using <property name=”format_sql”>true</property>

use_sql_comments – the comments are added inside SQL statement, such as

<property name=”use_sql_comments”>true</property>

Q #46) List the ways to create a primary key using Hibernate.

Answer: The following are four strategies to generate primary keys using JPA and Hibernate:

GenerationType.AUTO
GenerationType.IDENTITY
GenerationType.SEQUENCE
GenerationType.TABLE
Q #47) List ways to fetch objects from the Hibernate database.

Answer: Hibernate uses HQL (Hibernate Query Language) to retrieve objects from its database.

Batch Fetch
Join Fetch
Select Fetch
Sub-Select Fetch
Conclusion
Hibernate is one of the most accepted object-relational mapping tools used to manage data stored in a database with Java objects. Session objects are used to handle persisted data in Hibernate.

Hibernate is one of the best Java Persistent API (JPA) providers.
