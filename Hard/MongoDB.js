95 MongoDB interview questions (including answers), 10,000 words detailed analysis!
January 3, 2024  by 李冠廷  No Comments
1. What is mongodb?
MongoDB is an open source database system based on distributed file storage written in C++ language. In case of high load, adding more nodes can ensure server performance. MongoDB aims to provide scalable, high-performance data storage solutions for WEB applications.

MongoDB stores data as a document. The data structure consists of key=>value pairs. MongoDB documents are similar to JSON objects. Field values can contain other documents, arrays, and document arrays.


2. What are the features of mongodb?
(1) MongoDB is a document storage-oriented database, which is relatively simple and easy to operate.

(2) You can index any attribute in the MongoDB record (e.g. FirstName=”Sameer”,Address=”8 Gandhi Road”) for faster sorting.

(3) You can create data images locally or online, which makes MongoDB more scalable.

(4) If the load increases (requiring more storage space and stronger processing capacity), it can be distributed to other nodes in the computer network, which is called sharding.

(5) Mongo supports rich query expressions. Query instructions use JSON-style tags to easily query objects and arrays embedded in documents.

(6) MongoDb can replace completed documents (data) or some specified data fields with update() command.

(7) Map/ Reduce in Mongodb is mainly used for batch processing and aggregation of data.

8. Map and Reduce. The Map function invokes emit(key,value) to traverse all records in the set and send the key and value to the Reduce function for processing.

(9) Map and Reduce functions are written in Javascript, and mapReduce operations can be performed by db.runCommand or mapReduce command.

(10) GridFS is a built-in feature in MongoDB that can be used to store a large number of small files.

(11) MongoDB allows script execution on the server side. You can write a function with Javascript and execute it directly on the server side. You can also store the definition of the function on the server side and call it directly next time.

What do you mean by NoSQL database? What is the difference between NoSQL and RDBMS directly? Why use and not use NoSQL databases? What are the advantages of NoSQL databases?
NoSQL is a non-relational database. NoSQL = Not Only SQL.

Relational databases use structured data. NoSQL uses key-value pairs to store data.

When dealing with unstructured/semi-structured big data; When extending horizontally; NoSQL databases are preferred when dealing with dynamically increasing data items.

Consider the maturity of the database; Support; Analytics and business intelligence; When it comes to management and professionalism, relational databases should be given priority.

What are the types of NoSQL databases?
Type of the NoSQL database

For example, MongoDB, Cassandra, CouchDB, Hypertable, Redis, Riak, HBASE, and Memcache

5. What are the basic differences between MySQL and MongoDB?
MySQL and MongoDB are both free and open source databases. There are many basic differences between MySQL and MongoDB including data representation, queries, relationships, transactions, schema design and definition, normalization, speed and performance.

By comparing MySQL and MongoDB, we are actually comparing relational and non-relational databases, i.e. the data store structure is different.

6. How do you compare MongoDB to CouchDB and CouchBase?
MongoDB and CouchDB are document-oriented databases. MongoDB and CouchDB are examples of open source NoSQL databases. Except it’s all stored in document form

We have nothing else in common. MongoDB and CouchDB differ in data model implementation, interfaces, object storage, and replication methods.

7. What makes MongoDB the best NoSQL database?
The following features make MongoDB the best NoSQL database:

file-oriented
A high performance
High availability
Easy extensibility
Rich query language
8. Does journal playback encounter problems when entries are incomplete (for example, one of them happens to fail midway)?
The write operation of each journal (group) is consistent and will not be played back during recovery unless it is complete.

9. What is the role of profilers in MongoDB?
MongoDB includes a database analyzer that shows the performance characteristics of each operation in the database. With this analyzer you can find queries (or writes) that are slower than expected; You can use this information to determine, for example, whether you need to add an index.

What is a namespace?
MongoDB stores BSON objects in collections. Database names and cluster names are joined by periods called namespaces.

11. If a user removes an attribute of an object, check whether the attribute is deleted from the storage tier.
Yes, the user removes the attribute and the object is re-saved (re-save()).

12. Can log features be used for secure backup?
Yes.

Is null allowed?
For object members, yes. However, users cannot add null values to the database collection because null values are not objects. However, users can add an empty object {}.

14. Update operation fsync to disk immediately?
No, disk writes are deferred by default. Write operations may reach disk after two or three seconds (60 seconds by default). For example, if the database receives a thousand incrementing operations on an object in a second, the disk is flushed only once. (Note that although the fsync option is valid on the command line and through getLastError_old)

How to perform transaction/lock?
MongoDB does not use traditional locks or complex roll-back transactions because it is designed to be lightweight, fast, and predictably high performance. It can be likened to MySQLMylSAM’s auto-commit mode. By streamlining transaction support, performance is improved, especially in a system that may traverse multiple servers.

16. Why is my data file so huge?
MongoDB actively preallocates reserved space to prevent file system fragmentation.

17. How long does it take to enable backup failover?
It will take 10 to 30 seconds from the time the backup database declares that the primary database is down to the time a backup database is selected as the new primary database. Operations on the primary database will fail during this period — including

Write and Strong Consistent Read operations. However, you can also perform a final consistent query (in slaveOk mode) on the second database, even during this time.

18, What is master or primary?
It is the primary node/member in the current replica set that handles all write operations. In a backup cluster, when a failover occurs, another member becomes primary.

19. What is secondary or slave?
Seconday replicates the operations from the current primary. It does this by tracing replication of oplog(local.oplog.rs).

Do I have to call getLastError to make sure the write works?
Don’t have to. The server does the same thing whether or not you call getLastError(aka “Safe Mode”). GetLastError is called only to confirm that the write operation committed successfully. Of course, you often want validation, but the safety and validity of a write is not determined by that.

21. Should I start a sharded or non-sharded MongoDB environment?
For ease of development, we recommend starting a MongoDB environment unsharded, unless one server is not enough to hold your initial data set. Upgrading from non-clustered sharding to clustered sharding is seamless, so there is no need to consider sharding when your data set is not yet large.

22. How do Sharding and replication work?
Each shard is a logical collection of partitioned data. Shards may consist of a single server or cluster, and we recommend clustering for each shard.

23. When will data be spread across multiple shards?
MongoDB sharding is range based. So all the objects in a collection are stored in a chunk. The option to fragment data is available only if there is more than one block. Right now, each default block size is 64Mb, so you need at least 64Mb space to perform a migration.

24. What happens when I try to update a document on a chunk that is being migrated?
Updates occur immediately on the old shard, and changes are copied to the new shard before ownership transfers.

25. What if I launch a query when a shard is stopped or slow?
If a shard stops, the query will return an error unless the Partial option is set. If a shard is slow to respond, MongoDB waits for its response.

Can I delete the old files in the moveChunk directory?
No problem, these files are temporary files generated when balancing on shards. Once these operations are complete, the associated temporary files should also be deleted. At the moment, however, the cleanup is manual, so think carefully about freeing space for these files.

27. How do I view the links Mongo is using?
db._adminCommand(“connPoolStats”);

28. If the moveChunk fails, do I need to manually remove some of the transferred documents?
No, moves are consistent and deterministic; After a failure, the move operation is constantly retried; When finished, the data will only appear in the new shard.

29. If I am using replication, can I use journaling for one part and not for the other?
You can.

30. What happens when you update documents on a Chunk that is being migrated?
Updates occur immediately on the old Chunk, and changes are copied to the new shard before ownership is transferred.

Select * from A:{B,C} where A:{B,C} where A:{C,B} where B :{C,B}
No, only indexes are used on A:{B,C}.

32. What if a Shard is stopped or slow and a query is launched?
If a shard stops, the query will return an error unless the Partial option is set. If a shard is slow to respond, MongoDB waits for its response.

33. Does MongoDB support stored procedures? If so, how to use it?
MongoDB supports stored procedures, which are written in javascript and stored in db.system.js tables.

How to understand the GridFS mechanism in MongoDB and why MongoDB uses GridFS to store files?
GridFS is a file specification for storing large files in MongoDB. GridFS allows large files to be split into smaller documents, which allows us to store large documents efficiently and eliminates the limitations of BSON objects.

35, What is NoSQL database? What is the difference between NoSQL and RDBMS? When do YOU use and not use NoSQL databases?
NoSQL is a non-relational database. NoSQL = Not Only SQL.

Relational databases use structured data. NoSQL uses key-value pairs to store data.

When dealing with unstructured/semi-structured big data; When extending horizontally; NoSQL databases are preferred when dealing with dynamically increasing data items.

Considering the maturity of the database; Support; Analytics and business intelligence; When it comes to management and professionalism, relational databases should be given priority.

Does MongoDB support stored procedures? If so, how to use it?
MongoDB supports stored procedures, which are written in javascript and stored in db.system.js tables.

How to understand the GridFS mechanism in MongoDB and why MongoDB uses GridFS to store files?
GridFS is a file specification for storing large files in MongoDB. GridFS allows large files to be split into smaller documents, which allows us to store large documents efficiently and eliminates the limitations of BSON objects.

38. Why are MongoDB data files large?
MongoDB preallocates space to prevent file fragmentation.

39. What happens when you update documents on a Chunk that is being migrated?
Updates occur immediately on the old Chunk, and changes are copied to the new shard before ownership is transferred.

A:{B,C} A:{C,B} A:{C,B} A:{C,B}
No, only indexes are used on A:{B,C}.

41. What happens if a Shard stops or is slow and launches a query?
If a shard stops, the query will return an error unless the Partial option is set. If a shard is slow to respond, MongoDB waits for its response.

42. What is the role of profilers in MongoDB?
An analyzer is a database analyzer that displays the performance characteristics of each operation in Explain. It is possible to find slower-than-expected operations through the parser

43. If a user removes an attribute of an object, is the attribute deleted from the storage tier?
Yes, the user removes the attribute and the object is re-saved (re-save()).

44. Can log features be used for secure backup?
Yes.

45, Update operation fsync to disk immediately?
Generally, disk write operations are deferred

How do I perform transactions/locks?
Because mongodb is designed to be lightweight and high performance, there is no traditional locking or complex transaction rollback

47, What is master or primary?
In the current backup cluster, the primary node is responsible for all write operations. In the cluster, when the master node fails, another member becomes master

48, getLastError function
A call to getLastError verifies that the current write operation was successfully committed

49. How do Sharding and replication work?
Sharding can be a single server or a cluster. A cluster is recommended

50. When will data be spread across multiple shards?
Mongodb sharding is region-based, so all objects in a collection are placed in the same block, and there is only the option of multiple sharding to retrieve data if there is more than one block

51. What happens when I try to update a document on a chunk that is being migrated?
The old shard is updated immediately, and the changes are copied to the new shard before ownership is transferred

How do I view the links Mongo is using?
db._adminCommand("connPoolStats");Copy the code
53. Structure introduction of mongodb
The object design stored in the database is BSON, a JSON-like binary file consisting of key-value pairs

54. Overall structure of the database
Key – value pair – document – collection – database

What language is MongoDB written in
MongoDB is written in c++, as is MySQL, the popular open source database. C++, released in 1983, is a widely used computer programming language. It is a programming language that supports multiple programming modes.

What are the advantages of MongoDB
Document-oriented storage: Save data in JSON format documents.
Any attribute can be indexed.
Replication and high scalability.
Automatic sharding.
Rich query function.
Quick real-time updates.
Professional support from MongoDB.
What is a set
A collection is a set of MongoDB documents. It is equivalent to the concept of a table in a relational database (RDBMS). The collection resides in a separate database. Multiple documents within a collection can have multiple different fields. In general, documents in a collection have the same or related purpose.

What is a document
A document consists of a set of key values. Documents are in dynamic mode, which means that documents in the same collection do not need to have the same fields and structure. Each record in a table in a relational database is equivalent to a document in MongoDB.

59. What is “Mongod”
Mongod is the main process that handles the MongoDB system. It handles data requests, manages data stores, and performs background administrative operations. When we run the mongod command, we are starting the MongoDB process and running it in the background.

60. What is the “Mongod” parameter
Pass the database storage path, default is “/data/db”
The default port number is 27017.
61. What is “Mongo”
It is a command line tool used to connect to a specific mongod instance. When we run the mongo command with no arguments it will use the default port number and localhost connection

62, MongoDB which command can switch database
MongoDB uses use + database name to create a database. Use creates a new database and returns it if it exists.

What is a non-relational database
Non – relational database is different from the traditional relational database. The salient feature of non-relational databases is that they do not use SQL as the query language and do not require a specific table schema for data storage. It is used for big data and Web Apps due to its simple design and very good performance

What are the types of non-relational databases
– key-value Stores Eg:Amazon S3
The chart Eg: secondary effects
Document storage Eg:MongoDB
Column-based storage Eg:Cassandra
65. Why MOngoDB?
Architecture is simple
No complex connections
Deep query ability,MongoDB supports dynamic query.
Easier to debug
Easy to extend
There is no need to convert/map application objects to database objects
Use internal memory as a storage workspace for faster data access.
66. Which scenarios will MongoDB be used
Big data
Content management system
Mobile Apps
Data management
67. What do namespaces in MongoDB mean?
MongoDB has a mechanism for pre-allocating space, and each pre-allocated file is filled with 0.

Each time a new data file is allocated, its size is twice the size of the previous data file. The maximum size of each data file is 2G.

MongoDB has a namespace for each collection and index. The metadata of these namespaces is concentrated in a 16M *.ns file, and each name occupies about 628 bytes on average, which means the upper limit of the entire database namespace is about 24000.

If each collection has one index (such as the default _ID index), a maximum of 12,000 collections can be created. If there are more indexes, there are fewer collections to create. Also, if there are too many sets, some operations will be slow.

To create more collections, MongoDB also supports “–nssize” at startup so that the database namespace file becomes larger to hold more names. This namespace file (.ns file) can be up to 2G.

The extents corresponding to each namespace are not necessarily contiguous. As data files grow, the size of each partition grows with the number of allocations. The goal is to balance the wasted space of a namespace with maintaining the continuity of data in a namespace.

One namespace of note, $freelist, is used to record extents (deleted collections or indexes) that are no longer in use. Whenever a namespace needs to allocate a new extent, $freelist is checked to see if it has a suitable size to use, and if so, free disk space is reclaimed.

68. Which languages support MongoDB?
C, C++, C#, Java, Node.js, Perl, Php, etc

How do I create a new database in MongoDB
MongoDB uses use + database name to create a database. Use creates a new database and returns it if it exists.

How do I view the database list in MongoDB
Use the command “show DBS”

71, What is sharding in MongoDB
Sharding is the horizontal partitioning of data into different physical nodes. As the application data gets bigger and bigger, so does the amount of data. As the data volume grows, a single machine may not be able to store the data or have an acceptable read and write throughput. Sharding allows more machines to be added to cope with increased data volumes and read and write operations.

Sharding-mongodb Manual21 How do I view connections using MongoDB
Use the command “db.adminCommand(” connPoolStats “)”

> the adminCommand (" connPoolStats ")Copy the code
What is replication
Replication is the process of synchronizing data to multiple servers, increasing data availability by storing multiple copies of data on multiple servers. Replication ensures data security, disaster recovery, no downtime for maintenance (such as backup, re-indexing, compression), and distributed data reading.

How do I insert a document into a collection in MongoDB
To insert data into the MongoDB collection, either insert() or save() methods are used.

>db.collectionName.insert({"key":"value"})
>db.collectionName.save({"key":"value"})Copy the code
Mysql > remove database Collection Methods24 How do I remove a database in MongoDB
The dropDatabase() command of MongoDB is used to delete an existing database.

>db.dropDatabase()Copy the code
How to create a collection in MongoDB.
In MongoDB, db.createcollection (name, options) is used to create collections. Options is a document used to specify the collection configuration.

>db.createCollection("collectionName")db.createCollection() - MongoDB Manual>db.createCollection("Copy the code
77. How do I view a created collection in MongoDB
You can use Show Collections to see a list of all collections in the current database

>show collectionsCopy the code
78, How to delete a collection in MongoDB
MongoDB uses db.collection.drop() to drop collections from the database.

>db.CollectionName.drop()Copy the code
79. Why use profilers in MongoDB
The Database Profiler collects information about the execution of Database commands against a running Mongod instance. The commands include add, delete, modify, and check commands and configuration and management commands. Profilers write all collected data into the System.profile collection, a capped collection in the administrator database. Profilers are turned off by default and you can turn them on via a PER database or per instance.

Does MongoDB support primary and foreign key relationships
By default, MongoDB does not support primary and foreign key relationships. Using Mongodb’s own API requires hard coding to achieve foreign key association, which is not intuitive and difficult.

What data types do MongoDB support
String, Integer, Double, Boolean, Object, Object ID, Arrays, Min/Max Keys, Datetime, Code, Regular Expression, etc

82. Why use “Code” in MongoDB
The “Code” type is used to store JavaScript Code in a document.

83. Why use “Regular Expression” in MongoDB
The “Regular Expression” type is used to store Regular expressions in a document

84. Why use the “Object ID” type in MongoDB
The “ObjectID” data type is used to store document ids

How do I insert a document into a collection
To insert data into the MongoDB collection, either insert() or save() methods are used.

>db.collectionName.insert({"key":"value"})
>db.collectionName.save({"key":"value"})Copy the code
86. What components does the “ObjectID” consist of
It consists of four parts: the timestamp, the client ID, the client process ID, and a three-byte increment counter

The _id is a 12-byte hexadecimal number that guarantees the uniqueness of each document. When inserting a document, you need to provide the _ID. If you don’t, MongoDB will provide a unique ID for each document. The first four bytes of the _id represent the current timestamp, the next three bytes represent the machine ID number, the next two bytes represent the MongoDB server process ID, and the last three bytes represent the increment value.

87. What are indexes in MongoDb
Indexes are used to efficiently execute queries. Without indexes, MongoDB scans and queries all documents in the entire collection, which is inefficient and requires a lot of data to process. An index is a special data structure that stores a small set of data in a form that is easy to traverse. An index can store the values of a particular field or set of fields and sort the field values in a manner specified by the index.

88, How to add index
With the db. Collection. CreateIndex () create an index in the collection

>db.collectionName.createIndex({columnName:1})Copy the code
What method can I use to format the output
Use the pretty() method to format the display

>db.collectionName.find().pretty()Copy the code
90, How to use “AND” OR” OR” conditional loop to query documents in a collection
In the find() method, if multiple keys are passed in AND separated by commas (,), MongoDB treats this as an AND condition.

>db.mycol.find({key1:value1, key2:value2}).pretty()Copy the code
To query documents based on an OR condition, use the keyword $OR.

>db.mycol.find(
 {
  $or: [
    {key1: value1}, {key2:value2}
  ]
 }
).pretty()Copy the code
91. How do I update data in MongoDB
Both the update() and save() methods can be used to update documents in a collection. The update() method updates the values in the existing document, while the save() method replaces the existing document with the document passed into the method.

How do I delete a document
MongoDB uses the remove() method to remove documents from the collection. It takes two optional arguments:

Deletion criteria :(optional) criteria for deleting a document.
JustOne :(optional) if set to true or 1, only one document is deleted.
>db.collectionName.remove({key:value})Copy the code
93. How do I sort things in MongoDB
Document sorting in MongoDB is implemented through sort(). The sort() method can specify the fields to sort by taking some arguments and using 1 and -1 to specify the rows

In order mode, 1 indicates ascending and -1 indicates descending.

>db.connectionName.find({key:value}).sort({columnName:1})Copy the code
What is aggregation
Aggregation operations can process data records and return computed results. Aggregation operations can combine values from multiple documents, perform various operations on groups of data, and return a single result. It is equivalent to the count(*) group by in SQL. For aggregate operations in MongoDB, the aggregate() method should be used.

>db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)Copy the code
95. What are replica sets in MongoDB
In MongoDB, a replica set is composed of a group of MongoDB instances, including a Primary node and multiple secondary nodes. All data of the MongoDB client is written to the Primary node, and the secondary nodes write data synchronically from the Primary node to keep the same data stored in all replication sets and improve data availability.

 Most Frequently Asked MongoDB Interview Questions
Here in this article, we will be listing frequently asked MongoDB Interview Questions and Answers with the belief that they will be helpful for you to gain higher marks. Also, to let you know that this article has been written under the guidance of industry professionals and covered all the current competencies.

Q1. What is MongoDB and how it works? Explain
Answer
MongoDB is an open source database management system (DBMS) that is used for high volume data storage. MongoDB is one of many non-relational database technologies that came up in the mid-2000s for use in big data applications and other processing jobs. Instead of using tables and rows as in other databases, MongoDB architecture uses documents and collections.

Q2. What are the uses of MongoDB? Explain
Answer
MongoDB is used for high volume data storage. MongoDB is one of many non-relational database technologies that came up in the mid-2000s for use in big data applications and other processing jobs. MongoDB is more faster than others because it allows users to query in a different manner.

In MongoDB, a record is a document, which is a data structure composed of field and value pairs. It is similar to JavaScript Object Notation objects

Q3. Is MongoDB better than Mysql? Explain
Answer
Most developers prefer MongoDB over MySQL because MongoDB allows them to build applications quicker, handle diverse data types, and efficiently manage applications. The flexible data model in MongoDB ensures database schema evolves with business needs.

Q4. When was MongoDB founded and why it is called MongoDB?
Answer
MongoDB was founded in 2007.

MongoDB originally dubbed “p”, the database was officially named MongoDB, with “Mongo” being short for the word humongous. After received many inputs about MongoDB, the company decided it scrap the Babble project and release MongoDB on its own as an open-source database platform in 2009.

Related Article: What Is The Difference Between MySQL And MongoDB
Q5. What is the difference between Mysql and MongoDB? Explain
Answer
S.no	MySQL	MongoDB
1.	Written in C, C++	Written in C, C++, JavaScript
2.	Data stored in tables	Data stored in JSON documents
3.	Sses schemas for defining DB structure	Schema-free
4.	Development and maintenance by Oracle Corp.	Development and maintenance by MongoDB, Inc.
Q6. Is MongoDB a relational database? Explain
Answer
No. MongoDB is a non-relational database. Instead, it is document-oriented. This means, instead of storing data in tables, similar to a relational database, it stores data in individual documents.

Q7. What are the difference between SQL and MongoDB? Explain
Answer
Q8. Explain "Namespace" in MongoDB.
Answer
In MongoDB, Binary Interchange and Structure Object Notation (BSON) objects are stored in a collection. The combination of collection and database names is called a namespace. All documents in MongoDB belong to a namespace.

Q9. What is index and how it is used in MongoDB?
Answer
An Index is a special structure in MongoDB. It stores a minimal portion of data belonging to a specific field in a form that is easy to traverse. This feature is ordered by the value of a field, which is pre-specified in the index.

The primary role of an Index is to offer great performance read operations for queries that are used frequently.

Related Article: Mysql Interview Questions
Q10. Explain Storage Engine in MongoDB
Answer
A storage engine in MongoDB is a part of the database, which is responsible for managing and storing data on the disk. The two storage engines in MongoDB are WiredTiger and MMAPv1.

Q11. In MongoDB, what is CRUD?
Answer
CRUD in MongoDB refers to the fundamental operations - Create, Read, Update, and Delete.

Q12. What is sharding in MongoDB? Explain
Answer
MongoDB uses the method of sharding for enabling deployments of large data sets and operations that demand high throughput. This method allows data to be stored across different machines.

Q13. How do I create a collection in MongoDB? Write it's syntax
Answer
In MongoDB, developers do not need to create a collection. It will get created automatically when a document will be inserted.

The syntax for creating a collection in MongoDB is: db.createCollection(name,options)

Q14. How do I drop a collection in MongoDB? Write it's syntax
Answer
To drop a collection in MongoDB, connect to the database where you want to delete the collection.

Type the following command for deleting: db.collection_name.drop()

Related Article: SQL Interview Questions
Q15. How we can create an index in MongoDB?
Answer
You can use the db.collection.createIndex() method for creating Indexes in MongoDB.

Q16. What is the command which are use to drop database in MongoDB?
Answer
The command - db.dropDatabse() is used for drop databases in MongoDB.

Q17. What is the use of limit() function in MongoDB?
Answer
The limit() method in MongoDB is used for limiting the records in different databases.

Q18. Can we store images in MongoDB?
Answer
Yes. You can use GridFS function in MongoDB for storing as well as retrieving large files such as Images, audio files, and video files.

Q19. What are alternatives to MongoDB?
Answer
You can consider CouchDB, Cassandra, Riak, Redis, and HBase as some of the decent alternatives to MongoDB.

Q20. What is replica set in Mongodb?
Answer
A Replica Set in MongoDB is a group of instances that maintain similar data sets. These type of sets are essential for production deployments as they offer high availability as well as good redundancy.

Related Article: How to Best Prepare Yourself with MongoDB Interview Questions
Q21. What will be objects between two dates in MongoDB?
Answer
Q22. Is MongoDB support ACID transactions?
Answer
Yes. MongoDB 4.0 version provides complete multi-document ACID transaction support.

Q23. How to install MongoDB on our machine?
Answer
Q24. How to list all indexes in MongoDB?
Answer
To list all indexes you can use db.items.getIndexes()

74 MongoDB Interview Questions & Answers in 2026
By Aditya Kumar
Share This Article:
Last updated on Feb 15, 20265757
Top MongoDB Interview Questions and Answers
What Is MongoDB?
MongoDB is a popular open-source, NoSQL (non-relational) database management system that is created to store, retrieve, and manage data flexibly and scalable. MongoDB is classified as a document database, storing data in a format similar to JSON (JavaScript Object Notation) documents. 

Document-Oriented: MongoDB stores data in collections that contain documents. Each document is a JSON-like object, and these documents can have varying structures within the same collection. This flexibility makes it well-suited for handling data with dynamic or evolving schemas.
Schema-less: Unlike traditional relational databases, MongoDB doesn't require a predefined schema for data. You can insert documents with different fields in the same collection without altering the schema.
Scalability: MongoDB is designed for horizontal scalability. You can distribute data across multiple servers and clusters to handle large volumes of data and high traffic loads.
High Performance: MongoDB can provide high read and write throughput, especially for certain types of applications where rapid data access is critical.
Rich Query Language: MongoDB supports a powerful query language for retrieving and manipulating data. You can perform complex queries, indexing, and aggregation operations.
Geospatial Data: MongoDB has built-in support for geospatial data and allows you to perform geospatial queries, making it suitable for location-based applications.
Replication and High Availability: MongoDB supports replication for data redundancy and high availability. It can automatically recover from hardware failures and provide continuous service.
Flexible Indexing: You can create custom indexes to optimize query performance for specific use cases.
Community and Enterprise Editions: MongoDB provides a freely available Community Edition and a premium Enterprise Edition, which includes extra functionalities and comprehensive support.
Large Ecosystem: MongoDB boasts a thriving and engaged community, comprehensive documentation, and diverse drivers and connectors tailored to numerous programming languages and frameworks.
MongoDB is commonly used in web and mobile applications, content management systems, real-time analytics, and other scenarios where flexibility, scalability, and speed are essential. It's a popular choice for developers and organizations looking to work with data that doesn't fit neatly into traditional relational databases. Now, let’s look at the most popular MongoDB Interview Questions and Answers for 2024.

MongoDB Basic Interview Questions
1. How does MongoDB differ from traditional relational databases?
MongoDB is a NoSQL database, while traditional relational databases are SQL-based.
It stores data in flexible, schema-less documents, whereas relational databases use structured tables with fixed schemas.
It is designed for horizontal scalability and can handle large volumes of data, while relational databases typically scale vertically.
2. Can you explain what a document in MongoDB is?
A document is a JSON-like data structure that stores and represents data. It can contain key-value pairs, arrays, and nested documents. Documents are stored in collections, equivalent to tables in relational databases.

3. What is a collection in MongoDB?
A collection in MongoDB is a grouping of documents. Collections are schema-less, meaning documents in the same collection can have different structures. Collections are similar to tables in traditional relational databases.

4. How does MongoDB store data?
MongoDB stores data in BSON (Binary JSON) format, a binary-encoded serialization of JSON-like documents. These documents are stored in collections within databases.

5. What is a primary key in MongoDB?
In MongoDB, the `_id` field serves as the primary key for a document. It must be unique within a collection and is automatically generated if not provided during document insertion.

6. Can you explain the concept of sharding in MongoDB?
Sharding in MongoDB is a strategy used to distribute data horizontally across numerous servers or clusters, efficiently managing extensive datasets and heavy workloads. In this approach, data is divided into distinct subsets known as shards, and MongoDB's query router directs queries to the relevant shard as needed.

7. What are indexes in MongoDB?
MongoDB employs data structures known as indexes to enhance query performance, enabling the database to swiftly locate documents according to the indexed fields. MongoDB offers support for a range of index types.

8. How do you create a database in MongoDB?
You create a database implicitly by switching to it or explicitly by running the `use <database_name>` command in the MongoDB shell. When you insert data into it, MongoDB will create the database if it doesn't already exist.

9. How do you insert data into a MongoDB collection?
You can insert data into a MongoDB collection using the `insertOne()` or `insertMany()` method. You provide a document or an array of documents to be inserted.

10. What is a replica set in MongoDB?
It is a group of servers that maintain the same data. It provides data redundancy and high availability. One server acts as the primary, while others are secondary servers that replicate data from the primary.

11. What are the data types supported by MongoDB?
MongoDB supports various data types, including string, number, boolean, date, array, object, null, regex, and more. It also helps geospatial and binary data types.

12. How do you update documents in MongoDB?
You can update documents in MongoDB using methods like `updateOne()`, `updateMany(),` or `findOneAndUpdate().` You specify the query to select the documents to update and provide an update operation.

13. What is the role of `_id` in MongoDB documents?
The `_id` field uniquely identifies each document in a collection. MongoDB uses it as the primary key, and if not provided during document insertion, MongoDB generates a unique value for it.

14. How do you delete data from a MongoDB collection?
You can delete data from a MongoDB collection using methods like `deleteOne()`, `deleteMany()`, or `findOneAndDelete()`. You specify a query to select the documents to delete.

15. What is a cursor in MongoDB, and when is it used?
A cursor in MongoDB is an iterator to retrieve and process documents from query results. Cursors are used when fetching large result sets, allowing you to retrieve documents in batches.

16. Can you explain the concept of data modeling in MongoDB?
Data modeling in MongoDB involves designing the structure of your documents and collections to represent your data best and meet your application's requirements. It includes defining document schemas, relationships, and indexing strategies.

17. How is data consistency maintained in MongoDB?
MongoDB provides strong consistency within a single document but offers eventual consistency for distributed data across multiple nodes or shards. It controls data consistency levels by using mechanisms like write concern and read preferences.

18. What is the role of collections in MongoDB?
Collections in MongoDB are containers for organizing and storing related documents. They act as the equivalent of tables in relational databases, grouping similar data.

19. How do you perform a query in MongoDB?
You can perform queries in MongoDB using the `find()` method, where you specify criteria to filter documents. You can also use various query operators to refine your queries.

20. Can you explain the concept of aggregation in MongoDB?
MongoDB's aggregation framework is a powerful tool designed for processing and transforming documents within a collection. With it, you can execute various operations such as grouping, sorting, and computing aggregate values on your dataset.

21. What is the difference between MongoDB and MySQL?
MongoDB is a NoSQL database, while MySQL is a traditional relational database.
MongoDB stores data in flexible, schema-less documents; MySQL uses structured tables with fixed schemas.
MongoDB is designed for horizontal scalability, while MySQL typically scales vertically.
MongoDB is often used for unstructured or semi-structured data, while MySQL is commonly used for structured data.
22. How do you backup a MongoDB database?
You can back up a MongoDB database using tools like `mongodump` or by configuring regular snapshots at the file system or cluster level.

23. What are the main features of MongoDB?
Some prominent features of MongoDB include flexibility in data modeling, horizontal scalability, support for unstructured data, powerful query language, automatic sharding, high availability with replica sets, and geospatial capabilities.

24. What is the purpose of using MongoDB over other databases?
MongoDB is chosen over other databases for its ability to handle flexible, unstructured, and rapidly changing data. It excels in scenarios where scalability, speed, and agility are essential, such as web and mobile applications, real-time analytics, and content management systems. Its horizontal scaling capabilities also make it suitable for large-scale data storage and processing.

MongoDB Intermediate Interview Questions
1. How does MongoDB ensure high availability?
MongoDB guarantees robust availability via replica sets consisting of multiple MongoDB servers that store identical data. This setup offers redundancy and seamless failover capabilities. In the event of a primary node failure, an automatic process elects one of the secondary nodes to take over as the new primary, thus ensuring uninterrupted service.

2. What is the role of a sharding key in MongoDB?
A sharding key determines how data is distributed across multiple shards (database partitions) in a sharded cluster. MongoDB uses a field in the document to decide which shard should store the document. Choosing an appropriate sharding key is crucial for even data distribution and efficient queries.

3. Can you explain replica set elections in MongoDB?
Replica set elections occur when the primary node in a replica set becomes unavailable. In such cases, the replica set members vote to elect a new primary. The node with the most votes becomes the new primary, ensuring data availability and continuity of service.

4. How does MongoDB handle transactions?
MongoDB introduced multi-document transactions in version 4.0, allowing you to perform ACID-compliant transactions. Transactions ensure that a series of operations succeeds or fails, maintaining data consistency.

5. What are the different types of indexes in MongoDB?
MongoDB supports various indexes, including single-field indexes, compound indexes, geospatial indexes, text indexes, hashed indexes, and wildcard indexes.

6. Can you explain the aggregation pipeline in MongoDB?
The Aggregation Pipeline is a robust framework for performing data transformations and computations on data stored in MongoDB. It consists of stages, each processing and transforming data before passing it to the next stage. It's commonly used for complex data analysis and aggregation operations.

7. How do you monitor the performance of a MongoDB database?
You can monitor MongoDB using various tools and techniques. MongoDB provides built-in metrics and logs, and external monitoring tools like MongoDB Atlas, MMS, and third-party solutions can help track performance, query execution, and resource usage.

8. What is journaling in MongoDB?
In MongoDB, journaling is a durability feature that ensures data is written to a journal (write-ahead log) before it's written to data files. This provides crash recovery and data consistency guarantees.

9. How does MongoDB handle replication and failover?
MongoDB uses replica sets for replication and failover. Data is replicated to secondary nodes, and when a primary node failure occurs, one of the secondaries is automatically elected as the new primary to maintain high availability.

10. What are the different types of sharding strategies in MongoDB?
MongoDB supports various sharding strategies, including range-based sharding, hash-based sharding, and tag-aware sharding. The choice of strategy depends on the data distribution and query patterns.

11. Can you explain the read and write concerns in MongoDB?
Read and Write concerns in MongoDB allow you to specify the data consistency and acknowledgment required for read and write operations. They include options like "majority," "acknowledged," and "unacknowledged."

12. How do you scale a MongoDB database?
You can scale MongoDB horizontally by adding more servers to a cluster, vertically by upgrading server hardware, or by using sharding to distribute data across multiple servers in a sharded cluster.

13. What is the role of the WiredTiger storage engine in MongoDB?
Since version 3.2 of MongoDB, WiredTiger has served as the primary storage engine responsible for data storage, compression, and caching, thereby enhancing both performance and concurrency.

14. How do you implement security in MongoDB?
MongoDB provides a range of security capabilities, including authentication, role-based access control (RBAC), SSL/TLS encryption, auditing, and network security, ensuring data safeguarding and preventing unauthorized access.

15. Can you explain how MongoDB handles large data sets?
MongoDB can handle large data sets using horizontal scaling (sharding), optimized indexing, and efficient storage mechanisms like WiredTiger. It also provides tools for data partitioning and distribution.

16. What is the difference between embedded documents and references in MongoDB?
Embedded documents are nested within another document, while references are links or references to documents in separate collections. Embedded documents are used for denormalization and improved query performance, while references maintain data integrity.

17. How do you optimize query performance in MongoDB?
You can optimize query performance by creating appropriate indexes, using the Aggregation Pipeline, minimizing the number of queries, and optimizing query patterns to leverage the query planner.

18. What are capped collections in MongoDB?
Capped collections are fixed-size collections that maintain data insertion order. Once the collection reaches its size limit, old data is automatically overwritten by new data. They are often used for logging and event tracking.

19. How does MongoDB handle schema migrations?
MongoDB's flexible schema makes it easier to evolve the data model over time. When schema changes are required, applications can handle data migration using techniques like in-place updates or background processes.

20. What are the common pitfalls in MongoDB data modeling?
Common pitfalls include not choosing an appropriate sharding key, not understanding query patterns, not considering index size, and failing to denormalize data when necessary.

21. Can you explain the concept of GridFS in MongoDB?
GridFS represents a MongoDB standard designed to handle storing and retrieving substantial files, such as images, videos, and binary data. This approach involves breaking down large files into smaller segments and then saving them as individual documents within collections. This method enables the efficient handling, retrieval, and administration of such files.

22. How do you manage sessions in MongoDB?
MongoDB provides a session management API for managing multi-statement transactions. Sessions allow you to start and commit transactions, ensuring data consistency.

23. What are the best practices for index creation in MongoDB?
Best practices include creating indexes based on query patterns, avoiding too many indexes, using compound indexes effectively, and periodically reviewing and maintaining indexes for optimal performance.

24. How does MongoDB integrate with other data analysis tools?
MongoDB can integrate with various data analysis tools and frameworks through connectors, drivers, and plugins. Popular tools like Apache Spark and Hadoop have connectors for MongoDB data.

25. What is the role of Oplog in MongoDB replication?
Oplog (short for "operation log") is a capped collection that records all write operations in the primary node of a replica set. Secondary nodes use the oplog to replicate changes and maintain data consistency with the primary. It plays a crucial role in replication and failover processes.

MongoDB Advanced Interview Questions
1. How do you design a sharded MongoDB architecture for a large-scale application?
To design a sharded MongoDB architecture for a large-scale application, consider the following steps:
Identify a sharding key that evenly distributes data across shards.
Set up a shard cluster with multiple shard servers.
Configure a shard router (mongos) to route queries to the appropriate shards.
Implement replica sets within each shard for high availability.
Monitor and scale the cluster as needed to maintain performance.
2. Can you explain the complexities involved in MongoDB data sharding?
MongoDB data sharding introduces complexities such as choosing the right shard key, managing data distribution, ensuring data consistency, and handling shard rebalancing. Handling shard keys and ensuring balanced data distribution are key challenges.

3. What are the strategies for handling data consistency in distributed MongoDB deployments?
In distributed MongoDB deployments, you can achieve data consistency through various strategies:

Read Preference: Specify read preferences to control which data is read.
Write Concern: Use write concern levels to control the acknowledgment of write operations.
Transactions: MongoDB supports multi-document transactions to ensure consistency across documents.
4. How do you handle data migration in a live MongoDB environment?
Use tools like MongoDB's `mongodump` and `mongorestore` to perform live data migrations. These tools allow you to export data from one cluster and import it into another while minimizing downtime.

5. Can you explain the internals of the WiredTiger storage engine?
In MongoDB, WiredTiger is the default storage engine. It supports document-level locking, compression, and data durability through write-ahead logging (WAL). It uses B-trees and LSM trees for data storage.

6. What are the best practices for disaster recovery in MongoDB?
Disaster recovery best practices in MongoDB include regular backups, offsite storage, automated backup processes, and testing backup restoration procedures. Implementing replication and having a well-defined recovery plan is crucial.

7. How do you perform advanced data aggregation operations in MongoDB?
MongoDB offers the Aggregation Framework, allowing for complex data aggregation operations. You can use operators like `$group`, `$project`, and `$lookup` to perform operations like filtering, grouping, and joining data.

8. What are the considerations for choosing shard keys in a highly distributed environment?
Consider even data distribution, query patterns, and scalability when choosing shard keys. Avoid monotonically increasing keys to prevent hotspots. Use hashed shard keys for better distribution.

9. How do you troubleshoot performance issues in a sharded MongoDB cluster?
Troubleshooting performance in a sharded MongoDB cluster involves monitoring metrics, identifying slow queries, optimizing indexes, and scaling resources where needed. Analyzing the query execution plan is crucial.

10. Can you explain the process of tuning Read and Write operations in high-load environments?
In high-load environments, you can optimize read and write operations by adjusting the MongoDB configuration parameters, using appropriate indexes, and employing caching mechanisms like Redis or Memcached.

11. How does MongoDB handle network partitioning and split-brain scenarios?
MongoDB uses a replica set and an internal consensus algorithm to handle network partitioning scenarios. In split-brain scenarios, priority settings and automatic failover can help maintain data consistency.

12. What are the best practices for securing a MongoDB cluster in a public cloud environment?
Best practices for securing MongoDB in a public cloud environment include network security groups, authentication, role-based access control, rest and transit encryption, and regularly applying security patches.

13. How do you automate MongoDB deployments in a DevOps environment?
Automation tools like Ansible, Terraform, or Kubernetes can be used to automate MongoDB deployments in a DevOps environment. Infrastructure as Code (IaC) principles are often applied.

14. Can you discuss the challenges of integrating MongoDB with big data technologies?
Integrating MongoDB with big data technologies like Hadoop, Spark, or Kafka can be challenging. You may use connectors or ETL tools to transfer and process data between MongoDB and these systems.

15. How do you optimize MongoDB for IoT applications with high ingestion rates?
To optimize MongoDB for IoT applications, use sharding, time-series data models, and proper indexing. Implement data retention policies and consider using edge computing for data preprocessing.

16. What are the trade-offs between different replication strategies in MongoDB?
MongoDB offers primary-secondary replication, replica sets, and sharding. Each has trade-offs regarding data consistency, failover, and read scalability. Choose the replication strategy that suits your application's needs.

17. How do you manage large-scale data migrations in MongoDB?
For large-scale data migrations, use tools like MongoDB Atlas Data Lake or data pipeline solutions like Apache Kafka. Plan for data validation and verification to ensure data integrity.

18. What are the advanced techniques for monitoring MongoDB clusters?
Use monitoring tools like MongoDB Cloud Manager, Prometheus, or Grafana to track key performance metrics, resource utilization, and cluster health. Set up alerts for proactive issue detection.

19. How do you ensure data integrity in a MongoDB transaction?
MongoDB supports multi-document transactions to ensure data integrity. You can use transactions to group multiple operations into a single unit of work, allowing for atomicity, consistency, isolation, and durability (ACID).

20. Can you explain the role of consensus algorithms in MongoDB cluster management?
MongoDB uses the Raft consensus algorithm to replicate set elections and leader selection. Raft ensures that the cluster maintains a consistent state and can recover from failures.

21. How do you handle schema evolution in MongoDB for agile development practices?
MongoDB's flexible schema allows for agile development practices. Developers can evolve the schema by adding or removing fields as needed, and versioning data structures may be necessary for compatibility.

22. What are the challenges and solutions for backup and restoration in large MongoDB deployments?
Challenges in large MongoDB deployments include data volume, backup frequency, and retention policies. Solutions involve using incremental backups, snapshots, and offsite storage with efficient data deduplication.

23. How does MongoDB interact with microservices architectures?
MongoDB can be used as a data store in microservices architectures. Each microservice can have its database or share it with others, depending on data isolation and coupling requirements.

24. Can you discuss the impact of network latency on MongoDB’s performance and scalability?
Network latency can impact MongoDB's performance and scalability, especially in geographically distributed deployments. Techniques like read preference configuration and sharding can help mitigate latency issues.

25. What are the future trends and expected developments in MongoDB?
While I cannot provide real-time information, MongoDB's future trends may include enhanced support for multi-cloud deployments, further improvements in scalability and performance, and new features to address evolving application needs in data management and analysis.

Simplilearn's Professional Certificate Program in Data Engineering, aligned with AWS and Azure certifications, will help all master crucial Data Engineering skills. Explore now to know more about the program.

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

Top MongoDB Interview Questions and Answers
15 mins read
4.5K Views
Comment
Share
Call
Call 8585951111
Got Doubts?
Rashmi
Rashmi Karan
Manager - Content
Updated on Aug 8, 2024 13:36 IST
This blog covers the most frequently asked MongoDB Interview Questions. It starts with the basic MongoDB interview questions and moves on to core MongoDB interview questions.

2020_12_MongoDB-interview-questions-e1607689190780.jpg
MongoDB Interview Questions
Recommended online courses
Best-suited Interview preparation courses for you
Learn Interview preparation with these high-rated online courses

name
Aptitude Preparation Course
Coding Ninjas
Certificate
Total Fees
₹4.96 K
Duration
2 months

Download IconBrochure
name
How to turn your internship into a job offer?
Great Learning
Certificate
Total Fees
Free
Duration
1 hours

Go to Free Course
name
Interview Skills
TCS ion
Certificate
Star Icon
4.4
Total Fees
Free
Duration
1 week

Go to Free Course
name
Quantitative Aptitude for Interview Part 1
Great Learning
Certificate
Total Fees
Free
Duration
2 hours

Go to Free Course
name
Interview Crack-Jack Program
eAge Tutor
Certificate
Star Icon
4.3
Total Fees
₹3.3 K
Duration
22 hours

Download IconBrochure
name
Internship & Job Preparation
Internshala
Certificate
Star Icon
4.0
Total Fees
₹1.35 K
Duration
4 weeks

Download IconBrochure
name
Interview Prep and workplace Comm Combo International
LIQVID
Certificate
Star Icon
5.0
Total Fees
₹5.13 K
Duration
67 hours

Download IconBrochure
name
Interview Prep and workplace Comm Combo
LIQVID
Certificate
Star Icon
4.7
Total Fees
₹5.13 K
Duration
45 hours

Download IconBrochure
name
Start a CV
Google Cloud
Certificate
Star Icon
3.7
Total Fees
Free
Duration
1 hours

Go to Free Course
name
How to Prepare for an Interview?
Great Learning
Certificate
Star Icon
5.0
Total Fees
Free
Duration
1 hours

Go to Free Course
Q1. What is MongoDB?
MongoDB is a cross-platform, document-oriented database system, with a free schema. This means that each entry or record can have a different data schema, with attributes or “columns” that do not have to be repeated from one record to another. It is written in C ++, which gives it a certain proximity to bare metal, or hardware resources of the machine, so that it is quite fast when executing its tasks.

MongoDB supports all other popular programming languages such as C, C#, Node.js, Python, Erlang, JavaScript, and more. Also, it is licensed as GNU AGPL 3.0, so it is freely licensed software. It works on Windows, Linux, OS X and Solaris operating systems.


Stay updated with the latest blogs on online courses and skills
Enter Mobile Number
Q2. Where can we use MongoDB?
MongoDB can be used in many of the projects we develop today .

Any application that needs to store semi-structured data can use MongoDB . This is the case of typical CRUD applications or many of the current web developments.

Of course, although MongoDB collections do not need to define a schema, it is important that we design our application to follow one. We will have to think about whether we need to normalize the data, denormalize it, or use a hybrid approximation. These decisions can affect the performance of our application. In short, the scheme is defined by the queries that we are going to carry out more frequently.

MongoDB is especially useful in environments that require scalability. With its replication and sharding options, which are very easy to configure, we can achieve a system that scales horizontally without too much trouble

Q3. What are the advantages of MongoDB?
Ans. Following are the advantages of MongoDB over other databases:

Easy to set up and install
Does not require conversion/mapping of application objects to the database
Can derive a document-based data model
Supports document query language, essential to prevent dynamic queries
Q4. What is “Namespace” in MongoDB?
Ans. A Namespace provides access to the running code that are present in different databases. There is a file ‘CACHE.DAT’ in a database that provides a collection of namespaces and databases to the user. The concatenation of the collection name and database name is called a namespace.

Namespace has a maximum length of 120 bytes which includes the collection name, database name, and the dot (.) separator.

Q5. How is data collected in MongoDB?
Ans. The MongoDB distribution includes utilities that quickly return performance and activity statistics. These are typically used for troubleshooting and evaluating normal operations: Mongotop and MongoStat .

Mongostop collects and reports on the current read and write activity of a MongoDB instance providing visibility into its usage. Mongostop verifies that the activity and use of the mongo db meets the assigned expectations.

Mongostat captures and returns the counters for database operations. Reports operations based on each type (for example, insert, query, update, delete, etc.). Its format makes it easy to understand the load distribution on the server.

Mongostat offers more metrics to collect data . This is why Mongo DB recommends using this command to collect the data. Next, we list a list of metrics where we can obtain information from:

_MongoDB_OpenConns_: Open database connections for this instance.
_MongoDB_ActiveClientsReading_: Active reads in open databases for this instance.
_MongoDB_ActiveClientsWriting_: Open DB writes for this instance.
_MongoDB_Inserts_: Inserts in DB per second for this instance.
_MongoDB_Queries_: Queries in DB per second for this instance.
_MongoDB_Updates_: Updates in DB per second for this instance.
_MongoDB_Deletes_: Deletes in DB per second for this instance.
_MongoDB_IdxMiss_: Percentage of bttree pages lost in this instance.
The most interesting is mentioned above. Although there are more interesting metrics available.

_MongoDB_Getmores_: DB Getmores per second for this instance.
_MongoDB_Commands_: DB commands per second for this instance.
_MongoDB_Flushes_: DB Fsync Flushes per second for this instance.
_MongoDB_PageFaults_: page faults per second for this instance.
_MongoDB_ClientReadQueueLenght_ – Queued read clients for this instance.
_MongoDB_ClientWriteQueueLength_ – Queue write clients for this instance.
_MongoDB_NetworkTrafficInBits_ – Inbound network traffic in bits for this instance.
_MongoDB_NetworkTrafficOutBits_ – Outbound network traffic in bits for this instance.
Most of these metrics are useful for uncovering performance issues such as server instances with a load that they cannot handle, timeout issues, worrying trends, or capacity planning issues.

Q6. Do MongoDB databases have tables?
Ans. No. it stores its data in collections that include BSON documents, i.e. data records.

Q7. What is sharding in MongoDB?
Ans. It is the process of distributing data across various machines. MongoDB uses these approaches to meet the demand for data growth. If there is an increase in the size of data, then a single machine is not able to store the data and also not able to provide read and write throughput. It will create horizontal scaling to solve the issue.

Also Read>> Drupal Vs Joomla Vs WordPress!
Q8. How does sharding work with replication?
Ans. Every shard is a collection of data records. The shard could incorporate a single server or a group of replicas. Using a replica set for every shard is helpful for the data collection.

Q9. What is a replica set?
Ans. A replica set is a cluster of MongoDB database servers that possess the master-slave replication. It provides redundancy and helps to increase data availability with various copies of data on different servers.

Convert standalone MongoDB instance into a replica set:

Shutdown the running server.
Then, start the server by specifying the ‘replSet’ option.
Syntax of replSet
mongod –port “PORT” –dbpath “YOUR_DB_DATA_PATH” –replSet “REPLICA_SET_INSTANCE_NAME”

Q10. What is the role of database profiler in MongoDB?
Ans. The database profiler collects fine-grained data about MongoDB write operations, cursors, and database commands on a running database instance. This includes CRUD operations, configuration, and administration commands.

In easy words, the database profilers determine the performance of each operation characteristics against the database.

The syntax for profile command:

{

profile: <level>,

slowms: <threshold>,

sampleRate: <rate>

}

Q11. What is Journaling in MongoDB?
Ans. Journaling is the process in which the right operation is performed in MongoDB. It provides crash resiliency and creates changes in the private view of the database. It will look like the first block is memory and the second block is the ‘my disc’.

Q12. What are the data modeling considerations in MongoDB?
Ans. The data in MongoDB has a flexible schema, so much so that Collections should not follow a document structure, or in other words, documents in the same collection do not have to have the same structure and even common fields can be of different types.

As in any modeling with MongoDB, the following must be taken into account:

Collection properties
Relationships between application objects
How data grows and changes over time
What kind of queries will the application have
This leads to making certain decisions when modeling the data (since equivalent data models can however affect performance), such as:

Normalization and denormalization: Fully normalized data models describe the relationships with references between documents, while denormalized models can store redundant information across related models
Indexing strategy
Data representation in arrays in BSON
Q13. Why are data files so large in MongoDB?
Ans. MongoDB does aggressive pre-allocation of reserved space to avoid file system fragmentation, which is the reason why data files are so large.

MongoDB tries to avoid fragmentation on your hard drive by pre-allocating a size for each file. For this reason, the size on your hard drive may be greater than the size that is actually used by your data.

This is probably the biggest cause of the difference you find. The option 

storage.mmapv1.smallFiles
Copy code
allows you to reduce the size of these files.
Q14. What points should we consider while creating a schema in MongoDB?
Ans. We must consider the below points while creating a schema in MongoDB –

Design our schema as per the user requirements
Combine objects into one document
Do joins while on write
Optimiza the schema for frequent use cases
Do complex aggregation in the schema
Also Read>> IOS Interview Questions and Answers
Q15. What are the indexes in MongoDB?
Ans. An index is a special data structure that consists of the data of a few fields of documents and used to execute queries systematically. It helps to improve the speed of search operations.

Syntax:

db.collection_name.createIndex({field_name: 1 or -1})

Here, the value 1 is for ascending order and -1 for descending order

For example, there is a collection of student data that includes student_name, student_id and student_age

If you want to create the index for student_name field in ascending order:

db.studentdata.createIndex({student_name: 1})

Output:

{

“createdCollectionAutomatically” : false,

“numIndexesBefore” : 1,

“numIndexesAfter” : 2,

“ok” : 1

}

Q16. What is the use of GridFS in MongoDB?
Ans. It is used for storing and retrieving files larger than 16 MB, such as images, video files, and audio files. In certain conditions, it is more efficient to store large files in a MongoDB database than on a system-level filesystem. If your filesystem limits the number of files in a directory, you can use GridFS to store as many files as needed.

Q17. What is GridFS in MongoDB?
Ans. GridFS is one of the features of MongoDB, which is used to store and retrieve large files that exceed the BSON document size of 16MB, such as video files, audio files, images, etc. The data of GridFS is stored within a database collection.

Sample code for GridFS:

{

“filename”: “test.txt”,

“chunkSize”: NumberInt(261120),

“uploadDate”: ISODate(“2014-04-13T11:32:33.557Z”),

“md5”: “7b762939321e146569b07f72c62cca4f”,

“length”: NumberInt(646)

}

Also Read>> Database Interview Questions & Answers
Q18. What is CRUD?
Ans. MongoDB provides CRUD operations that are Create, Read, Update, and Delete.

Q19. What is ObjectID? What are the components ObjectID composed of?
Ans. An ObjectID class is a default primary key for a MongoDB. The syntax used to denote ObjectID is “_id.”

{

“_id”: ObjectId(“54759eb3c090d83494e2d804”)

}

ObjectID is composed of:

Timestamp
Client machine ID
Client process ID
3-byte increment counter
Q20. Which syntax is used to create a collection in MongoDB?
Ans. db.collection.drop() is used to drop collection in mongodb.

Also Read>> Database Interview Questions & Answers
Q21. Where do we use MongoDB?
Ans. MongoDB is used instead of RDBMS in various scenarios:

Distributed data
It makes the task easy by the recovery of data because there are multiple copies of data that are collected over multiple servers. It makes the recovery of data safe even if there is a failure in the hardware.

Big Data
It is highly featured with storing a large amount of data. It has a built-in solution for partitioning and sharding of data.

Unstable Schema
It is Schema-less, and it is easy to add a column using MongoDB. Adding a new field to the document does not affect the old document, and it is easy to use.

Q22. What is vertical scaling?
Ans. Vertical scaling works to improve the performance of a single server by adding more powerful processors, upgrading RAM, or adding more disk space to the system. But there are potential implications of applying vertical scaling in practical use cases with existing hardware and technology configurations.

Q23. What is horizontal scaling?

Ans. Horizontal scaling works by adding more servers and spreading the load across multiple servers. Since each machine will handle the subset of the complete data set, it provides a more efficient and cost-effective solution rather than implementing the high-end hardware. However it requires additional maintenance of a complex infrastructure with a large number of servers.

Q24. Which command is used to restore the backup?
Ans. mongorestore command is used to restore the backup.

Q25. Define auditing.
Ans. Auditing provides administrators with the ability to verify that the implemented security policies are controlling activity in the system.

Once enabled, the auditing system can record –

Schema (DDL)
Replica set and sharded cluster
Authentication and authorization
CRUD operations (requires auditAuthorizationSuccess set to true)
Q26. If you remove an object attribute, is it deleted from the database?
Ans. Yes, it is deleted.

Q27. Does MongoDB support SQL?
Ans. No. However, MongoDB does support a rich query language of its own.

Learn NO SQL Databases Now>>

Q28. What is the structure of ObjectID in MongoDB?
Ans. An ObjectID is a 12-byte BSON type having the following structure:

The first 4-byte value representing the seconds
The next 3-byte is the machine identifier
The next 2-byte contains the process ID
The last 3-bytes are a counter value
Q29. How to move old files in the moveChunk directory?
Ans. You can move old files in the moveChunk directory by using Mongod. It will create backup files at the time of normal shard balancing operations and deleted them after the operation is done.

Q30. Explain Aggregation in MongoDB?
Ans.  Aggregation is collecting a group of data from various documents and operate them to provide combined results. It is used to process the data that provide computer result.

These are some of the popular questions asked in a MongoDB interview. Always be prepared to answer all types of questions — technical skills, interpersonal, leadership or methodology. If you are someone who has recently started your career in MongoDB, you can always get certified in the various technique and skills needed to be an expert in the field.

Q31. Why is MongoDB not chosen for a 32-bit system?
Ans. MongoDB is not examined as a 32-bit system because 32-bit has limited data of 2 GB. It storage engine uses memory-mapped files for the performance. Because of not supporting 32-bit, the code is much easier and simpler to work on. It includes various benefits such as less number of bugs, reduces the product release time.

Q32. What is the Sharded cluster?
Ans. Sharding means “partition,” and it is one of the main features of MongoDB. In MongoDB, each document will be on a “shard” or partition. A partition should not be understood as a single server but as a replica set.

Q33. What are the components of the Sharded cluster?
Ans. The components of the sharded cluster are –

MongoS: it is the process that will route the requests to the appropriate server
Replica Set: which will act as the first member of the sharded cluster
CSRS: Configuration Server Replica Set or configuration server replica set
Q34. What are the limitations of Sharded clusters?
Ans. Sharded clusters have the restrictions and thresholds as follows – 

$where does not permit references to the db object from the $where function. This is uncommon in un-sharded collections
The geoSearch command is not supported in sharded environments
An index cannot cover a query on a sharded collection if the index does not contain the shard key, with the following exception for the _id index – If a query on a sharded collection only specifies a condition on the _id field and returns only the _id field, the _id index can cover the query when run against a mongos even if the _id field is not the shard key
An existing collection can only be sharded if its size does not exceed specific limits. These limits can be estimated based on the average size of all shard key values, and the configured chunk size
Q35. What is the difference between MongoDB and Redis database?
Ans. Difference between MongoDB and Redis:

 	
MongoDB
Redis
Generic 	Has relational database features that give it strong consistency	Offers advanced data structures, like lists, sorted sets, strings, and bitmaps
Data Storage	Document oriented where documents are heterogeneous, and each has a unique key within a collection
 

Used over Redis when structuring or modeling related information

Stores data in-memory using various key values
 

Excels over MongoDB when working with rapidly changing data

Programming languages	Single-master replication with built-in auto-election	Master-slave replication
Speed	Slower than Redis	Faster than MongoDB
Coding 	Easy to code	Hard to code
Q36. What is the difference between MongoDB and CouchDB?
Ans. Difference between MongoDB and CouchDB:

 	
MongoDB
CouchDB
Database Structure	Stores schema-free data using documents in the BSON format	Offers a RESTful HTTP API for reading, adding, editing, and deleting database documents
Replication / Clustering	Offers single-master replication with auto-selection built-in	Supports both master-master and master-slave replication
Programming languages	Supports Actionscript, C, C#, C++, Clojure, ColdFusion, D, Dart, Delphi, Erlang, Go, Groovy, Haskell, Java, JavaScript, Lisp, Lua, MatLab, Perl, PHP, PowerShell, Prolog, Python, R, Ruby, Scala, and Smalltalk	Supports C, C#, ColdFusion, Erlang, Haskell, Java, JavaScript, Lisp, Lua, Objective-C, OCaml, Perl, PHP, PL/SQL, Python, Ruby, and Smalltalk
Speed	Faster than CouchDB	Slower but safer than MongoDB
Triggers	Not available	Available
Q37. What is the difference between MongoDB and Cassandra?
Ans. Difference between MongoDB and Cassandra:

 	
MongoDB
Cassandra
Feature	Cross-platform database system	High performance distributed database system.
Usage	Mobile applications and the Internet of Things 	e-commerce, fraud detection, and real-time analytics
Storage
 

 

Column-oriented and directly stores the data	Document-oriented
Programming languages	MongoDB is written in C++	Cassandra is written in Java
Administration 	Easy to administer in failures	High availability with no single point of failure
Q38. Define MapReduce.
Ans. MapReduce is a framework that provides a distributed and parallel data processing system. Its name is due to the main functions that are Map and Reduce. MapReduce is designed for the practical solution of some problems that can be parallelized. Still, it must be taken into account that not all problems can be solved efficiently with MapReduce. MapReduce is geared towards solving problems with large data sets, using the HDFS distributed file system.

The MapReduce Framework has a master/slave architecture. It has a master or JobTracker server and several slave or TaskTrackers servers, one for each node in the cluster.

Q39. What is the difference between MongoDB and MySQL?
Ans. Although both MongoDB and MySQL are free and open-source databases, there is a lot of difference between them in data representation, relationships, transactions, querying data, schema design, definition, and performance speed, normalization, and many more. To compare MySQL with MongoDB is like a comparison between relational and non-relational databases.

MongoDB
MySQL
Stores data in JSON-like documents	Stores data in tables and uses SQL for database access
Removes the complex ORM layer that translates objects in code to relational tables	Has a rigid relational structure
Can be scaled within and across multiple distributed data centers	Allows handling data output in a better way and has a better-organized complex structure
Not a suitable solution for applications with complex transactions	Supports atomic transactions
Shorter recovery time from failure	Stability issues
Q40. What is the covered query?
Ans. A query is a covered query if it satisfies the following two conditions:

The fields used in the query are part of an index used in the query
The fields returned in the results are in the same index
Q41. Why is the covered query important in MongoDB?
Ans. Covered query allows faster execution of the query. It ensures that the created index has all the fields required by the query. It doesn’t require examining any documents, except for the indexed ones.  

MongoDB can match the query conditandl as return the result fields using the same index without looking inside the documents.

MongoDB - Basics
Q1
What is MongoDB? How is it different from other relational or non-relational databases?
MongoDB is a non-relational, document based database.

Relational databases such as MySql and Oracle store data in tables, rows and columns. They are based on a branch of algebraic theory known as relational algebra. Relational databases are structured, and tables can be linked with each other via foreign keys. Relational databases follow ACID properties, which ensures that database transactions are processed reliably.

Non-Relational databases, also called NoSQL databases, contain unstructured data and are commonly used in big data solutions to store and process massive amounts of disparate data.

There are four different kinds of NoSQL databases.

Graph databases – Graph databases are based on graph theory. These databases are designed for data which needs to be represented as graphs. The data elements are interconnected with multiple number of relations between them. Example of a graph database is Neo4j.

Key-Value stores – These databases store data as an indexed key and value pairs. These databases store data in a schema-less way. Example of key-value data stores include Cassandra, DynamoDB, Riak and BerkleyDB.

Column store – These databases are designed to store data as columns of data, rather than as rows as data. Example of column store databases are HBase, BigTable and HyperTable.

Document databases – Document databases are designed to store documents, with each document having a unique key. Examples of document databases are MongoDB and CouchDB.

Q2
What are the key features MongoDB?
Following are the key features of MongoDB.

Document store - MongoDB is non-relational document based database. Documents in MongoDB contain field and value pairs and are structured similar to JSON objects. Fields in MongoDB documents may contain other documents, reference to other document, arrays and arrays to other documents.

High Availability – MongoDB provides high availability as part of its core functionality. MongoDB has replica sets that replicates data and provides high availability and data redundancy.

Horizontal scalability – MongoDB provides sharding feature as part of its core functionality which distributes data across a cluster of machines.

Query Language – MongoDB provides a rich query language that supports read and write operations, aggregations and search operations.

Q3
How is data stored in MongoDB? How does it compare to a relational database?
MongoDB database contains Collections. Collections contains Documents. Documents contains fields and values in BSON format.

Collections are analogous to tables in relational database. Documents are analogous to rows in relational database.

Q4
How do you create a new MongoDB database from Mongo shell?
You can create a new MongoDB database via Mongo shell by using the command ‘use’ followed by the database name

> use interview_grid_db
switched to db interview_grid_db
Q5
How do you create a new collection in MongoDB via the Mongo shell?
Explicit creation – You can explicitly create a new collection by using the command db.createCollection(). This enables us to set properties on the collection such as the setting the maximum file size, validation rules etc.

Implicit creation – MongoDB creates a new collection automatically, if you insert a document into a collection and that collection does not exist. In below example a new collection ‘employees’ is created if the collection does not already exist.

//Explicit Creation
>db.createCollection("employees")
{ "ok" : 1 }
//Implicit Creation
>db.employees.insert({fname:"John", lname:"Doe", age:"25",
 title:"Manager", dept:"IT"})
WriteResult({ "nInserted" : 1 })
Q6
What are capped collections in MongoDB?
Capped collections are collections that store a fixed number of documents and maintains the insertion order of the documents.

If the number of documents in a capped collection reached the maximum, then the earliest inserted document will be deleted to make space for the new document.

Q7
What is Mongo shell?
Mongo shell is a command line user interface to MongoDB. You can use Mongo shell to query and update data from MongoDB. MongoDB is written in Java script.

Q8
What is Mongo shell?
Mongo shell is a command line user interface to MongoDB. You can use Mongo shell to query and update data from MongoDB. MongoDB is written in Java script.

You can start mongo shell by going to /bin and running the command mongo.

MongoDB - Create
Q9
What is the significance of _id field in a MongoDB document? What happens if you insert a document without the _id field in a MongoDb collection?
_id is the field that uniquely identifies a document in the MongoDB collection. If you insert a document that does not contain the _id field, then MongoDB automatically generates the unique id.

In below example a MongoDB document without the _id field is inserted into a MongoDB collection. MongoDB generates a unique _id field for the document, inserts the document into the collection, and returns the result document containing the generated _id value.

> db.employees.insertOne({fname:'John', lname:'Doe', age:'25', 
title:'Manager', dept:'IT'})

{'acknowledged' :true,
'insertedId' : ObjectId('58479913fa42b4972b1efe40')}
Q10
What is the difference between the operations db.collection.insertOne() and db.collection.insertMany()?
db.collection.insertOne() – Inserts a single document into a MongoDB collection. It returns a document containing the inserted document’s _id field.

db.collection.insertMany() – Inserts a single document or multiple documents into a MongoDB collection. It returns a document containing each inserted document’s _id.

> db.employees.insertOne({fname:"John", lname:"Doe", age:"25", 
title:"Manager",dept:"IT"})

{
"acknowledged" : true, 
"insertedId" : ObjectId("58479913fa42b4972b1efe40")
}
> db.employees.insertMany([{fname:"John", lname:"Doe", age:"25", 
title:"Manager", dept:"IT"},{fname:"Mike", lname:"Adams", age:"32", 
title:"Director", dept:"IT"}])

{
"acknowledged" : true,
"insertedIds" : [
ObjectId("58479c2dfa42b4972b1efe46"),
ObjectId("58479c2dfa42b4972b1efe47")
]
}
Q11
What is the difference between the operations db.collection.insertMany() and db.collection.insert()?
db.collection.insertMany() – Inserts a single document or multiple documents into a MongoDB collection. It returns a document containing each inserted document’s _id.

db.collection.insert() – Inserts one or multiple documents into a MongoDB collection. It returns a BulkWriteResult object with status of the operation including details such as error, number of documents inserted, number of documents upserted etc.

> db.employees.insertOne({fname:"John", lname:"Doe", age:"25", 
title:"Manager",dept:"IT"})

{
"acknowledged" : true,
"insertedId" : 
ObjectId("58479913fa42b4972b1efe40")
}
> db.employees.insert([{fname:"John", lname:"Doe", age:"25", 
title:"Manager", dept:"IT"},{fname:"Mike", lname:"Adams", age:"32", 
title:"Director", dept:"IT"}])

BulkWriteResult({
"writeErrors" : [ ],
"writeConcernErrors" : [ ],
"nInserted" : 2,
"nUpserted" : 0,
"nMatched" : 0,
"nModified" : 0,
"nRemoved" : 0,
"upserted" : [ ]
})
Q12
What is WriteResult object?
WriteResult object is an object returned by the db.collection.insertOne() and db.collection.insertMany() operations, which contains the object ids of the documents inserted by the operation.

Q13
What is BulkWriteResult object?
BulkWriteResult object is an object returned by the db.collection.insert() operation in which multiple documents are inserted. BulkWriteResult object contains status of the operation including details such as error, number of documents inserted, number of documents upserted etc.

Q14
Can a MongoDB document contain fields with array as value?
Yes, MongoDB document can have fields with values of type array. The array elements can be single values or can be documents.

//field "skills" has array of values
> db.employees.insertOne({fname:"Dave", lname:"Smith", age:"30", 
title:"Manager", dept:"IT", 
skills:[“Java”,”Oracle”,”People Management”,”Project Management”])
//field "skills" has array of documents 
> db.employees.insertOne({fname:"John", lname:"Smith", age:"32", 
title:"Manager", dept:"IT", 
skills: [{skill: “Java”, exp: “10”}, {skill: “Oracle”, exp: “10”}, 
{skill: “MongoDb”, exp: “10”}, {skill: “BigData”, exp: “10”}])
Q15
Can a MongoDB document contain embedded documents?
Yes, MongoDB document can have fields that hold embedded documents. For example - in below document the field ‘address’ contains an embedded document. The field 'skills' is of type array and contains elements which are documents.

> db.employees.insertOne({fname:"John", lname:"Smith", age:"32", 
title:"Manager",dept:"IT", 
address: {line1:”1111 broadway”, line2:”Flat# 203”,
city:”New York”, state:”NY”, country:”USA”}, 
skills: [{skill: “Java”, exp: “10”}, {skill: “Oracle”, exp: “10”}, 
{skill: “MongoDb”, exp: “10”}, {skill: “BigData”, exp: “10”}])
MongoDB - Read
Q16
How do you find documents from a collection?
MongoDB provides db.collections.find() operation to find documents in a collection. The syntax of find() operation is db.collections.find({query filter},{projection}).

You can enter search queries in 'query filter' section. For example {'title':'manager'} would return all employees whose title in 'manager'.

You can specify what data you want to see in the results. For example a projection of {'fname','lname'} would return only first name and last name from the resulting data.

//find all employees whose title is manager
>db.employees.find({"title":"Manager"})

{ "_id" : ObjectId("58a0abd281554bf3084e7ee0"), "fname" : "John", 
"lname" : "Doe", "age" : "25", "title" : "Manager", "dept" : "IT" },
{...}, ... , {...}
Q17
How do you find all documents from a collection?
You can find all the documents from a collection by using the find() operation without the query filter section. You can use db.collections.find() or db.collections.find({}) to find all the documents contained in a collection. For example, db.employees.find() returns all the documents contained in employees collection

>db.employees.find()

{ "_id" : ObjectId("588e54d4363650c07be0817b"),
 "fname" : "John", "lname" : "Doe",
 "age" : "25", "title" : "Manager",
 "dept" : "IT" }, {...}, ... , {...}
Q18
How do you search for exact field matches in MongoDB. i.e how do you find all documents that contains a field with a specific value? For example, how do you find all employees in the employee collection, whose ‘title’ is ‘Manager’?
You can use db.collections.find() operation and use filter condition specifying the field and value - db.collections.find({field:value}.

Below code returns all employees whose title is Manager.

>db.employees.find({"title":"manager"})

{ "_id" : ObjectId("588e54d4363650c07be0817b"),
 "fname" : "John", "lname" : "Doe",
 "age" : "25", "title" : "manager",
 "dept" : "IT" }, {...}, ... , {...}
Q19
How do you search for documents in which a specific field have one or more values? For example, how do you find all employees in the employee collection, whose ‘title’ is either ‘Manager’ or 'supervisor?
You can use db.collections.find() operation and use query operator $in specifying the field and values

Below code returns all employees whose title is 'manager' or 'supervisor'.

>db.employees.find({ title: { $in: ["manager" , "supervisor"] } } )

{ "_id" : ObjectId("588e54d4363650c07be0817b"),
 "fname" : "John", "lname" : "Doe",
 "age" : "25", "title" : "manager",
 "dept" : "IT" }, {...}, ... , {...}
Q20
How do specify AND conditions when searching for MongoDB documents? For example, how do you find all employees in the employee collection, whose ‘title’ is ‘Manager’ AND 'age' is less than '30'?
You can use db.collections.find() operation and use compound queries to specify conditions for more that one field in the collection's documents.

Below example finds all employees in the employee collection whose 'title' is 'manager' and 'age' is less than '30'.

>db.employees.find({ title: "manager", age: { $lt: 30 } } )

{ "_id" : ObjectId("588e54d4363650c07be0817b"),
 "fname" : "John", "lname" : "Doe",
 "age" : "25", "title" : "manager",
 "dept" : "IT" }, {...}, ... , {...}
Q21
How do specify OR conditions when searching for MongoDB documents? For example, how do you find all employees in the employee collection, whose ‘title’ is ‘Manager’ OR 'age' is less than '30'?
You can use db.collections.find() operation and use compound queries with $or operator to search for documents that match at least one condition.

Below example finds all employees in the employee collection whose 'title' is 'manager' OR 'age' is less than '30'.

>db.employees.find( { $or: [ { title: "manager" } , { age: { $lt: 30 } } ] } )

{ "_id" : ObjectId("588e54d4363650c07be0817b"),
 "fname" : "John", "lname" : "Doe",
 "age" : "25", "title" : "manager",
 "dept" : "IT" }, {...}, ... , {...}
Q22
How do you search for MongoDB documents that specify both AND as well as OR conditions? For example, how do you find all employees in the employee collection, whose ‘dept’ is ‘IT’ AND either 'age' is less than '30' or 'title' is 'manager'?
You can use db.collections.find() operation and use compound queries with $or operator to search for documents that match at least one condition.

Below example finds all employees in the employee collection whose 'dept' is 'IT' and either 'title' is 'manager' OR 'age' is less than '30'.

>db.employees.find( dept : "IT", 
 $or: [ { title: "manager" } , { age: { $lt: 30 } ] } 
)

{ "_id" : ObjectId("588e54d4363650c07be0817b"),
 "fname" : "John", "lname" : "Doe",
 "age" : "25", "title" : "manager",
 "dept" : "IT" }, {...}, ... , {...}
MongoDB - Update
Q23
How do you update documents in a collection?
MongoDB documents can be updated using the operation db.collection.update().

For example, below operation updates the title of an employee named 'John Doe' to 'Sr Manager'

>db.employees.update(
{fname:"John", lname:"Doe"},
{$set:{ title:"Sr. Manager"}}
)
MongoDB - Delete
Q24
How do you delete all documents from a collection?
MongoDB documents can be deleted using the operation db.collection.deleteMany().

All documents can be deleted from a MongoDB collection by using the operation db.collection.deleteMany() and passing an empty filter {}

For example, below operation deletes all the documents from the employee collection.

>db.employees.deleteMany({})
Q25
How do you delete all documents in a collection that match a condition?
All documents that match a condition can be deleted from a MongoDB collection by using the operation db.collection.deleteMany() and passing the filter condition { : }

For example, below operation deletes all the documents from the employee collection who has the title 'Manager'.

> db.employees.deleteMany({ title : 'Manager' })
Q26
How do you delete a single document in a collection that matches a condition?
A single MongoDB document can be deleted using the operation db.collection.deleteOne().

For example, below operation deletes the first document having ‘title’ as ‘manager’.

> db.employees.deleteOne({ title: 'manager'})
MongoDB - Search
Q27
What are text indexes in MongoDB?
MongoDB provides text indexes to support and optimize text search queries on text content. Text indexes can include one or more fields whose value is a string or an array of strings.

A collection can have only one text index, but that single text index can include multiple fields

For example, below operation creates a text index on fname and lname fields in the employees collection

>db.employees.createIndex({fname:"Text", lname:"Text"})
MongoDB - Aggregation
Q28
What are aggregation operations in MongoDB?
MongoDB aggregation operations act on groups of values from multiple documents, perform operations on the grouped values and return a single computed result.

Q29
What are the different ways to perform aggregations in MongoDB?
MongoDB provides three ways to perform aggregations.

Aggregation pipeline – MongoDB provides aggregation framework that follows the concept of data processing pipeline. The pipeline includes multiple stages that transform the document into an aggregated result.

Map-reduce operation – MondoDB provides map-reduce operations to perform aggregation. Map-reduce operations have two phases, a map phase that processes each document and emits one or more objects and a reduce stage that combine the output of the map operation.

Single purpose aggregation methods – MongoDB provides operations such as db.collections.distinct() and db.collections.count() that aggregate documents from a collection.

MongoDB - Data Modeling
Q30
How are relationships maintained in MongoDB?
There are two ways relationship between documents can be maintained in MongoDB.

References - References store the links or references from one document to the other. Data in this form is normalized data.

Embedded documents – MongoDB documents can embed documents within fields or within array elements. This enables related documents to be captured in a single document. Data in this form is renormalized data.

Q31
How do you model One-to-One relationship in MongoDB?
You can model One-to-One relationships between documents in MongoDB by either referencing documents or by embedding documents. In general, for One-to-One relationships, if you query the documents frequently then embedding documents is more efficient then referencing documents.

Q32
How do you model One-to-Many relationship in MongoDB?
You can model One-to-Many relationships between documents in MongoDB by either referencing documents or by embedding documents. If the data on 'many' side of the relationship is not repetitive and it has to be queried frequently then embedding the data is more efficient. But if data 'many' side of the relationship is repetitive then referencing data may be more efficient.

Q33
What are the different ways to model tree structures with MongoDB?
You can model tree structures with MongoDB following ways.

Model with parent references - In this model the tree structure is maintained by storing references to parent node in the children node. The reference to parent node is stored in a field called ‘parent’ within the child document.

Model with child references - In this model the tree structure is maintained by storing references to child nodes in the parent node. The child node references are stored in the parent node in a field called ‘children’ which is of type array.

Model with an array of ancestors - In this model each node maintains references to its ancestors in an array filed called ‘ancestors’. In addition each node maintains a reference to its immediate parent node in a field called ‘parent’.

Model with materialized paths - In this model the tree structure is maintained by storing full relationship paths between documents. Each node maintains as a string its ancestors or the path. The path is stored in the field named ‘path’ in each node document.

Model with nested sets - Model with nested sets: In this model the tree structure is maintained by capturing the stop numbers of each node in a round-trip traversal of the tree. Each node has two stop numbers – first stop number for the initial trip and second stop number for the return trip. Each node stores its first stop in a field called ‘left’ and the second stop in a field called ‘right’. In addition each node stores its immediate parent in a field called ‘parent’.

MongoDB - Data Replication
Q34
How is replication performed in MongoDb?
MongoDB performs replication by means of replica sets. Replica sets are group of Mongod processes that maintain the same data across data sets.

MongoDB - Sharding
Q35
What is sharding. How does MongoDB perform sharding?
Sharding is a method of distributing data across multiple machines. MongoDB supports horizontal scaling by Sharding. MongoDB supports deployments with large data sets and high throughput operations via Sharding.

Q36
What are the components of a MongoDB sharded cluster?
A MongoDB sharded cluster contains following three components.

1. Shard: Shard contains a subset of the sharded data. Each shard can be deployed as a replica set

2. Mongos: Mongos provide an interface between the client applications and the mongo cluster. Mongos act as a query router to the sharded cluster.

3. Config servers: Config servers store metadata and configuration settings for the MongoDB sharded cluster

Q37
What are the components of a MongoDB sharded cluster?
A MongoDB sharded cluster contains following three components.

1. Shard: Shard contains a subset of the sharded data. Each shard can be deployed as a replica set

2. Mongos: Mongos provide an interface between the client applications and the mongo cluster. Mongos act as a query router to the sharded cluster.

3. Config servers: Config servers store metadata and configuration settings for the MongoDB sharded cluster

Q38
What is a shard key?
Shard key is used by MongoDB to distribute the documents of a collection across shards. Shard key consists of a field or fields that exist in every document of the MongoDb collection

Q39
Can you change the shard key after a collection is sharded?
No, the shard key cannot be changed after a collection is sharded.

Q40
What are the advantages of sharding?
Following are the key advantages of sharding a MongoDB collection.

1. Faster reads: Queries that include a shard key or a prefix of a compound shard key are faster, because MongoDB can target the search to a specific shard.

2. Horizontal scaling: Both read and write loads can be scaled horizontally by adding more shards to the cluster.

3. Storage capacity: Storage capacity of the cluster can be increased by increasing the number of shards. in the cluster

4. High availability: Sharding increases the availability of requests since the sharded cluster can continue to perform read and write operations even if one of the shards is unavailable
