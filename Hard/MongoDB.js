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
