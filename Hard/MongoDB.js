Неверный транспорт, должен быть объект с методом журнала winston mongodb logging
Вопросы
JAVASCRIPT
Неверный транспорт, должен быть объект с методом журнала winston mongodb logging
Я хочу хранить свои журналы ошибок в коллекции mongoDB. Я использую winston & winston -mongoDB.

Получение ошибки:

throw new Error('Invalid transport, must be an object with a log method.'); Error: Invalid transport, must be an object with a log method.

Вот код в файле регистратора. Вот мой код: импортировать appRoot из 'app-root-path'; Импортировать { createLogger, транспорт, формат, } от winston;

import * as winston from 'winston';


require('winston-mongodb');


const options = {
    fileInfo: {
        level: 'info',
        filename: `${appRoot}/logs/info.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        timestamp: true,
    },
    mongoDB: {
        db: 'mongodb://127.0.0.1:27017/test',
        collection: 'log',
        level: 'info',
        storeHost: true,
        capped: true,
    },
};

winston.add(winston.transports.MongoDB, options.mongoDB);


const logger = createLogger({
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.json()
    ),
    transports: [
        new transports.File(options.fileInfo)
    ],
});

logger.stream = {
    write: (message, encoding) => {
        logger.info(message);
    },
};

export default logger;
Версии:

 "mongoose": "^5.2.6",
    "morgan": "^1.9.0",
    "winston": "^3.0.0",
    "winston-mongodb": "^4.0.3",
    mongodb@3.1.1

MONGO DB ADMIN Interview Questions and Answers
MongoDB Interview Questions
1.Define MongoDB?                   

MongoDB is a purely document oriented NoSQL database that is schema less and scalable.                    

2.What is a BSON?               

BSON stands for Binary Javascript Object Notation. It is a binary-encoded serialization of JSON documents. BSON has been extended to add some more optional non-JSON-native data types, like dates and binary data.

3.Define is a JSON?             

JSON is a lightweight data internally exchange format that is often used to store data in MongoDB. JSON documents are stored in the formate of BSON, which is a binary representation of JSON that makes MongoDB very efficient at storing and querying JSON data.             

4.Explain some the difference between BSON and JSON?       

Feature

BSON

JSON

Data types

Supports a wider range of data types, including dates, binary data, and floating-point numbers with arbitrary precision.

Supports a limited range of data types, including a strings, numbers, booleans, and null.

Size

Can be more compact than JSON, especially for documents with large amounts of binary data.

Can be larger than BSON, especially for documents with a lot of nested objects.

Speed

Can be faster than JSON for reading and writing data, especially for large documents.

Can be slower than BSON for reading and writing data, especially for large documents.

Encoding

Uses a binary encoding format, which makes it more efficient for storing and transmitting data.

Uses a text encoding format, which helps it more human-readable.

Parsing

Requires parsing, which can be slow for large documents.

Does not require parsing, which makes it faster for large documents.

5. How do you install MongoDB?                  

MongoDB can be installed on Windows, macOS, and Linux. To install MongoDB, you can download the installer from the MongoDB website.  Once the  installer is downloaded, you can run it and follow the on-screen instructions. After the installation is completed, you can start MongoDB by running the mongod command in a terminal window. You can connect to MongoDB using the mongosh command.                

6. How do you start and stop the MongoDB server?

To initiate the MongoDB server, execute the ‘mongod’ command. For termination, use ‘mongod –shutdown’ or ‘mongo admin –eval “db.shutdown Server()”‘ command. These commands manage the server’s start and stop processes effectively.                

Mongo DB Training
7. What are indexes in MongoDB and why are they important?

Indexes in MongoDB are data structures that enhance query performance by facilitating faster data retrieval. They work like a table of contents, allowing the database to quickly locate and access specific documents. Indexes are crucial as they optimize query execution, reducing the need for scanning the entire collection and improving overall application speed. They’re vital for handling large datasets and complex queries, enabling efficient data access and retrieval.

8. How can you create an index in MongoDB?

Index can be created using the create Index() method. Specify the collection and field(s) to be indexed along with optional settings like sorting or uniqueness. This enhances query performance by speeding up data retrieval for those fields, improving overall database efficiency.

9. How do you backup and restore a MongoDB database?

To back up a MongoDB database, use the mongo dump command, specifying the database and destination. For restoration, apply the mongo restore command with the backup path. These commands safeguard data by creating backups and restoring them when needed, ensuring data continuity and recovery capabilities.

10. What is sharding in MongoDB? How does it work?

Sharding in MongoDB is data partitioning across shards for scalability. Each shard stores a portion of data, managed by a balancer. It boosts performance by distributing load, enabling efficient queries, and accommodating growing datasets while ensuring data integrity and availability.

11. How do you add a new shard to an existing sharded cluster?

To add a new shard to an existing sharded cluster, follow these steps:

Connect to the MongoDB instance.
Use the sh.addShard() command with the appropriate configuration.
Verify the shard’s status with sh.status().
Update sharded collections to start distributing data.
This process ensures seamless scalability and improved performance in your MongoDB sharded cluster setup.

12. What is the purpose of the “config” database in MongoDB sharding?

The “config” database in MongoDB sharding is pivotal as it stores metadata about the sharded cluster’s configuration. It tracks information about shards, chunks, and distribution of data across the cluster. This database enables the query router to efficiently direct queries to appropriate shards and ensures proper distribution and management of data, contributing to the scalability and functionality of the sharded cluster.

13. How do you optimize a MongoDB query performance?

To enhance MongoDB query performance:

Use indexes wisely for frequently queried fields.
Design schema for efficient data retrieval.
Utilize aggregation pipelines for complex operations.
Limit returned fields with projections.
Cache frequent queries with the internal cache or an external caching mechanism.
Analyze and optimize queries using the explain() method.
Scale horizontally with sharding for large datasets.
Regularly monitor and analyze performance for continuous improvement.
14. Explain the significance of the “mongodump” and “mongorestore” utilities.

Mongodump” and “mongorestore” are vital MongoDB utilities. “Mongodump” creates backups by exporting data and metadata, aiding disaster recovery and migration. “Mongorestore” restores data from “mongodump” backups, ensuring data integrity and continuity. These tools are essential for backup strategies, data migration between environments, and maintaining data consistency, playing a crucial role in database management and administration

15. How do you enable authentication in MongoDB?

To enable authentication in MongoDB:

Start MongoDB with the –auth option.
Create admin user in the admin database.
Secure other databases with user roles.
Use TLS/SSL for secure connections.
Configure MongoDB to require authentication.
Authentication enhances security by ensuring only authorized users and access the database, safeguarding sensitive data and maintaining system integrity.

MongoDB Admin Training
16. What is a replica set in MongoDB and why is it used?

A replica set in MongoDB is a group of interconnected servers that maintain identical data copies. It offers data redundancy, high availability, and automatic failover. In case of a primary node failure, another replica automatically takes over, minimizing downtime. This architecture ensures data reliability, fault tolerance, and improved read scalability, making replica sets fundamental for data resilience and consistent performance in MongoDB deployments.

17. Describe the process of adding a new member to a MongoDB replica set.

To add a new member to a MongoDB replica set:

Launch an instance with MongoDB installed.
Initiate MongoDB on the new member.
Connect to the primary member.
Use “rs.add()” command to add the new member to the replica set.
Monitor the replica set status using “rs.status()”.
Data synchronization occurs automatically.
Adding a member increases fault tolerance, read scalability, and data redundancy, enhancing the overall reliability and performance of the MongoDB replica set.

18. How do you monitor the performance of a MongoDB instance?

Monitor MongoDB performance by:

Utilizing built-in tools like mongostat and mongotop.
Setting up alerts with MongoDB Cloud Manager or Prometheus.
Analyzing logs for insights into queries and issues.
Using a monitoring service to track metrics like CPU, memory, and disk usage.
Employing query profiling for optimization.
Regular monitoring ensures optimal performance, timely issue detection, and effective resource allocation in MongoDB instances.

19. What are WiredTiger and MMAPv1 storage engines in MongoDB? How do they differ?

WiredTiger and MMAPv1 are MongoDB storage engines. WiredTiger excels in performance and compression, ideal for production environments. It employs multi-version concurrency control (MVCC) for efficient handling of concurrent operations. MMAPv1, an older engine, uses memory-mapped files for storage. While it’s less performant than WiredTiger, it suits specific use cases. WiredTiger’s advanced features and optimizations make it the preferred choice for all the deployments, offering better scalability and resource utilization.

20. Explain the purpose of the “oplog” in a replica set.

The “oplog” (operation log) in a MongoDB replica set records all write operations in a capped collection. It maintains a chronological history of changes, enabling secondary members to replicate data from the primary. By applying these operations, secondary nodes catch up with the primary’s state, ensuring data consistency and facilitating failover. The “oplog” is essential for maintaining data integrity and ensuring that all members of the replica set remain synchronized.

21. How can you handle failover in a MongoDB replica set?

To manage failover in a MongoDB replica set:

Configure automatic failover by setting priorities and electable secondaries.
Use “heartbeat” monitoring to detect primary node health.
If the primary fails, eligible secondaries trigger an election.
The new primary is chosen, and clients automatically redirect to it.
Maintain data consistency with the “oplog.”
Failover guarantees optimal uptime and minimal service disruption, playing a pivotal role in maintaining continuous accessibility and data integrity within MongoDB replica sets.

22. What is the significance of Write Concern in MongoDB?

Write Concern in MongoDB defines the acknowledgment level required for write operations. It ensures data consistency and durability by specifying how many nodes must confirm a write before success is acknowledged to the client. This feature helps developers to balance performance and reliability based on their application’s needs. Stronger write concerns provide greater data durability at the cost of potential latency, making it a pivotal control for maintaining data integrity in distributed systems.

23. How do you configure SSL/TLS encryption in MongoDB?

To set up SSL/TLS encryption in MongoDB:

Generate or acquire SSL/TLS certificates.
Update MongoDB configuration to include SSL settings.
Restart MongoDB with SSL options enabled.
Clients must connect using SSL certificates.
Enabling SSL/TLS enhances security by encrypting data during transmission, safeguarding sensitive information from unauthorized access or interception.

24. What are journaling and write-ahead logging in MongoDB?

Journaling and write-ahead logging (WAL) enhance data durability in MongoDB. Journaling records write operations before applying them to the data files. This ensures the event of a crash, the server can recover uncommitted changes from the journal. Write-ahead logging involves recording changes in a log before modifying the actual data. It prevents data inconsistencies by allowing recovery to a consistent state even after a crash. Both mechanisms safeguard data integrity and minimize potential data loss in case of system failures also.

25. Imagine your MongoDB server is running slow. How would you troubleshoot and identify the cause?

To troubleshoot a slow-running MongoDB server:

Monitor Performance Metrics: Check CPU, memory, disk I/O, and network usage to identify resource bottlenecks.
Analyze Queries: Use “db.currentOp()” to review active queries and look for slow or long-running queries.
Examine Indexes: Ensure appropriate indexes exist for frequently executed queries.
Check System Logs: Investigate MongoDB’s logs for errors, warnings, or unusual activity.
Profile Queries: Enable query profiling to identify poorly performing queries.
Review Hardware: Evaluate server hardware and consider scaling up or optimizing resources.
Optimize Configuration: Adjust MongoDB configuration parameters for better performance.
Upgrade MongoDB: Consider upgrading to the latest version with performance improvements.
Utilize Monitoring Tools: Deploy monitoring tools like MongoDB Cloud Manager or Prometheus for real-time insights.
By systematically addressing these areas, you can pinpoint and resolve performance issues, optimizing the MongoDB server’s performance.

26. How would you handle a situation where a replica set member is consistently lagging behind the others?

To address a lagging replica set member:

Check Network and Hardware: Ensure no network or hardware issues affecting the lagging member.
Monitor Oplog: Verify if the oplog size is sufficient; resize if needed.
Check Load: Assess server load; redistribute workload if imbalanced.
Re-sync or Replace: If lag persists, resync the member or replace it with a fresh sync from another member.
Analyze Slow Operations: Investigate slow queries that might hinder replication.
Monitor: Continuously monitor to ensure synchronization catches up and maintains.
Finding and resolving the root cause ensures proper replication and data consistency.

27. A sharded cluster is experiencing imbalanced data distribution. How will you rebalance the data?

Rebalancing a sharded cluster entails redistributing data across shards for a more equitable distribution. Here’s a concise outline:

Cluster Health Check: Understand the cluster’s status—monitor shard data, utilization, and performance.
Identify Imbalance: Pinpoint shards with disproportionate data via size and document analysis.
Balancing Strategies
Split Chunks: Divide large shard data into smaller pieces for even distribution.
Merge Chunks: Combine small chunks on underutilized shards.
Chunk Migration: MongoDB’s balancer autonomously moves data between shards for balance.
Adjust Chunk Size: Fine-tune size for optimal balancing and reduced overhead.
Enable Balancer: Activate balancer in MongoDB settings using sh.enableBalancer().
Balancing Process: Allow the balancer to work and oversee progress.
Manual Balancing: Optionally trigger balance manually via sh.startBalancer().
Monitoring and Verification: Continuously watch data distribution and use MongoDB tools to confirm balance.
Exercise caution, as rebalancing affects performance. Test strategies in a safe environment before implementing on live clusters.

28. Describe a disaster recovery plan for a MongoDB deployment?

Develop a MongoDB disaster recovery strategy:

Backup Regimen: Regularly back up MongoDB data and configurations to remote storage.
Redundancy Setup: Employ replica sets for data redundancy and automatic failover.
Point-in-Time Recovery: Utilize oplog backups for precise recovery to a specific moment.
Offsite Storage: Store backups offsite to ensure data availability in case of site failure.
Testing and Updates: Regularly test backups and practice recovery procedures. Keep MongoDB updated for security.
Documentation: Maintain clear recovery documentation for swift action during emergencies.

MongoDB Interview Questions
Introduction to MongoDB
When dealing with data, there are two types of data as we know – (i) structured data and (ii) unstructured data. Structured data is usually stored in a tabular form whereas unstructured data is not. To manage huge sets of unstructured data like log or IoT data, a NoSQL database is used.

Now, what is MongoDB?

MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas.
It provides easy scalability and is a cross-platform, document-oriented database.
MongoDB works on the concept of Collection and Document.
It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.
MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).
Crack your next tech interview with confidence!

Take a free mock interview, get instant⚡️ feedback and recommendation💡

Take Free Mock Interview

MongoDB Basic Interview Questions
1. What are some of the advantages of MongoDB?
Some advantages of MongoDB are as follows:

MongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database
MongoDB support primary and secondary index on any fields
MongoDB basically uses JavaScript objects in place of procedures
MongoDB uses a dynamic database schema
MongoDB is very easy to scale up or down
MongoDB has inbuilt support for data partitioning (Sharding).
2. What is a Document in MongoDB?
A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:
{"greeting" : "Hello world!"}

Complex documents will contain multiple key/value pairs:
{"greeting" : "Hello world!", "views" : 3}

3. What is a Collection in MongoDB?
A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.
Documents within a single collection can have any number of different “shapes.”, i.e. collections have dynamic schemas.
For example, both of the following documents could be stored in a single collection:

{"greeting" : "Hello world!", "views": 3}
{"signoff": "Good bye"}
You can download a PDF version of Mongodb Interview Questions.

Download PDF

4. What are Databases in MongoDB?
MongoDB groups collections into databases. MongoDB can host several databases, each grouping together collections.
Some reserved database names are as follows:
admin
local
config

5. What is the Mongo Shell?
It is a JavaScript shell that allows interaction with a MongoDB instance from the command line. With that one can perform administrative functions, inspecting an instance, or exploring MongoDB.

To start the shell, run the mongo executable:

$ mongod
$ mongo
MongoDB shell version: 4.2.0
connecting to: test
>
The shell is a full-featured JavaScript interpreter, capable of running arbitrary JavaScript programs. Let’s see how basic math works on this:

> x = 100;
200
> x / 5;
20
6. How does Scale-Out occur in MongoDB?
The document-oriented data model of MongoDB makes it easier to split data across multiple servers. Balancing and loading data across a cluster is done by MongoDB. It then redistributes documents automatically.

The mongos acts as a query router, providing an interface between client applications and the sharded cluster.

Config servers store metadata and configuration settings for the cluster. MongoDB uses the config servers to manage distributed locks. Each sharded cluster must have its own config servers.



7. What are some features of MongoDB?
Indexing: It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.
Aggregation: It provides an aggregation framework based on the concept of data processing pipelines.
Special collection and index types: It supports time-to-live (TTL) collections for data that should expire at a certain time
File storage: It supports an easy-to-use protocol for storing large files and file metadata.
Sharding: Sharding is the process of splitting data up across machines.
8. How to add data in MongoDB?
The basic method for adding data to MongoDB is “inserts”. To insert a single document, use the collection’s insertOne method:

> db.books.insertOne({"title" : "Start With Why"})
For inserting multiple documents into a collection, we use insertMany. This method enables passing an array of documents to the database.

9. How do you Update a Document?
Once a document is stored in the database, it can be changed using one of several update methods: updateOne, updateMany, and replaceOne. updateOne and updateMany each takes a filter document as their first parameter and a modifier document, which describes changes to make, as the second parameter. replaceOne also takes a filter as the first parameter, but as the second parameter replaceOne expects a document with which it will replace the document matching the filter.

For example, in order to replace a document:

{
   "_id" : ObjectId("4b2b9f67a1f631733d917a7a"),
   "name" : "alice",
   "friends" : 24,
   "enemies" : 2
}
10. How do you Delete a Document?
The CRUD API in MongoDB provides deleteOne and deleteMany for this purpose. Both of these methods take a filter document as their first parameter. The filter specifies a set of criteria to match against in removing documents.

For example:
> db.books.deleteOne({"_id" : 3})

11. How to perform queries in MongoDB?
The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.

Example:
> db.users.find({"age" : 24})

12. What are the data types in MongoDB?
MongoDB supports a wide range of data types as values in documents. Documents in MongoDB are similar to objects in JavaScript. Along with JSON’s essential key/value–pair nature, MongoDB adds support for a number of additional data types. The common data types in MongoDB are:

Null
{"x" : null}
Boolean
{"x" : true}
Number
{"x" : 4}
String
{"x" : "foobar"}
Date
{"x" : new Date()}
Regular expression
{"x" : /foobar/i}
Array
{"x" : ["a", "b", "c"]}
Embedded document
{"x" : {"foo" : "bar"}}
Object ID
{"x" : ObjectId()}
Binary Data
Binary data is a string of arbitrary bytes.
Code
{"x" : function() { /* ... */ }}
13. When to use MongoDB?
You should use MongoDB when you are building internet and business applications that need to evolve quickly and scale elegantly. MongoDB is popular with developers of all kinds who are building scalable applications using agile methodologies.
MongoDB is a great choice if one needs to:

Support a rapid iterative development.
Scale to high levels of read and write traffic - MongoDB supports horizontal scaling through Sharding, distributing data across several machines, and facilitating high throughput operations with large sets of data.
Scale your data repository to a massive size.
Evolve the type of deployment as the business changes.
Store, manage and search data with text, geospatial, or time-series dimensions.
MongoDB Intermediate Interview Questions
14. How is Querying done in MongoDB?
The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.

For example: If we have a string we want to match, such as a “username” key with the value “alice”, we use that key/value pair instead:

> db.users.find({"username" : "alice"})

15. Explain the term “Indexing” in MongoDB.
In MongoDB, indexes help in efficiently resolving queries. What an Index does is that it stores a small part of the data set in a form that is easy to traverse. The index stores the value of the specific field or set of fields, ordered by the value of the field as specified in the index.
MongoDB’s indexes work almost identically to typical relational database indexes.

Indexes look at an ordered list with references to the content. These in turn allow MongoDB to query orders of magnitude faster. To create an index, use the createIndex collection method.

For example:

> db.users.find({"username": "user101"}).explain("executionStats")

Here, executionStats mode helps us understand the effect of using an index to satisfy queries.

16. What are Geospatial Indexes in MongoDB?
MongoDB has two types of geospatial indexes: 2dsphere and 2d. 2dsphere indexes work with spherical geometries that model the surface of the earth based on the WGS84 datum. This datum model the surface of the earth as an oblate spheroid, meaning that there is some flattening at the poles. Distance calculations using 2sphere indexes, therefore, take the shape of the earth into account and provide a more accurate treatment of distance between, for example, two cities, than do 2d indexes. Use 2d indexes for points stored on a two-dimensional plane.

2dsphere allows you to specify geometries for points, lines, and polygons in the GeoJSON format. A point is given by a two-element array, representing [longitude, latitude]:

{
   "name" : "New York City",
   "loc" : {
       "type" : "Point",
       "coordinates" : [50, 2]
   }
}
A line is given by an array of points:

{
   "name" : "Hudson River",
   "loc" : {
       "type" : "LineString",
       "coordinates" : [[0,1], [0,2], [1,2]]
   }
}
17. Explain the process of Sharding.
Sharding is the process of splitting data up across machines. We also use the term “partitioning” sometimes to describe this concept. We can store more data and handle more load without requiring larger or more powerful machines, by putting a subset of data on each machine.
In the figure below, RS0 and RS1 are shards. MongoDB’s sharding allows you to create a cluster of many machines (shards) and break up a collection across them, putting a subset of data on each shard. This allows your application to grow beyond the resource limits of a standalone server or replica set.



Sharded Client Connection



Non Sharded Client Connection

18. Explain the SET Modifier in MongoDB?
If the value of a field does not yet exist, the “$set” sets the value. This can be useful for updating schemas or adding user-defined keys.

Example:

> db.users.findOne()
{
   "_id" : ObjectId("4b253b067525f35f94b60a31"),
   "name" : "alice",
   "age" : 23,
   "sex" : "female",
   "location" : "India"
}
To add a field to this, we use “$set”:

> db.users.updateOne({"_id" :
ObjectId("4b253b067525f35f94b60a31")},
... {"$set" : {"favorite book" : "Start with Why"}})
MongoDB Advanced Interview Questions
19. What do you mean by Transactions?
A transaction is a logical unit of processing in a database that includes one or more database operations, which can be read or write operations. Transactions provide a useful feature in MongoDB to ensure consistency.

MongoDB provides two APIs to use transactions.

Core API: It is a similar syntax to relational databases (e.g., start_transaction and commit_transaction)
Call-back API: This is the recommended approach to using transactions. It starts a transaction, executes the specified operations, and commits (or aborts on the error). It also automatically incorporates error handling logic for “TransientTransactionError” and”UnknownTransactionCommitResult”.
20. What are MongoDB Charts?
MongoDB Charts is a new, integrated tool in MongoDB for data visualization.

MongoDB Charts offers the best way to create visualizations using data from a MongoDB database.
It allows users to perform quick data representation from a database without writing code in a programming language such as Java or Python.

The two different implementations of MongoDB Charts are:

MongoDB Charts PaaS (Platform as a Service)
MongoDB Charts Server
21. What is the Aggregation Framework in MongoDB?
The aggregation framework is a set of analytics tools within MongoDB that allow you to do analytics on documents in one or more collections.
The aggregation framework is based on the concept of a pipeline. With an aggregation pipeline, we take input from a MongoDB collection and pass the documents from that collection through one or more stages, each of which performs a different operation on its inputs (See figure below). Each stage takes as input whatever the stage before it produced as output. The inputs and outputs for all stages are documents—a stream of documents.


22. Explain the concept of pipeline in the MongoDB aggregation framework.
An individual stage of an aggregation pipeline is a data processing unit. It takes in a stream of input documents one at a time, processes each document one at a time, and produces an output stream of documents one at a time (see figure below).



23. What is a Replica Set in MongoDB?
To keep identical copies of your data on multiple servers, we use replication. It is recommended for all production deployments. Use replication to keep your application running and your data safe, even if something happens to one or more of your servers.

Such replication can be created by a replica set with MongoDB. A replica set is a group of servers with one primary, the server taking writes, and multiple secondaries, servers that keep copies of the primary’s data. If the primary crashes, the secondaries can elect a new primary from amongst themselves.

24. Explain the Replication Architecture in MongoDB.
The following diagram depicts the architecture diagram of a simple replica set cluster with only three server nodes – one primary node and two secondary nodes:



In the preceding model, the PRIMARY database is the only active replica set member that receives write operations from database clients. The PRIMARY database saves data changes in the Oplog. Changes saved in the Oplog are sequential—that is, saved in the order that they are received and executed.
The SECONDARY database is querying the PRIMARY database for new changes in the Oplog. If there are any changes, then Oplog entries are copied from PRIMARY to SECONDARY as soon as they are created on the PRIMARY node.
Then, the SECONDARY database applies changes from the Oplog to its own datafiles. Oplog entries are applied in the same order they were inserted in the log. As a result, datafiles on SECONDARY are kept in sync with changes on PRIMARY.
Usually, SECONDARY databases copy data changes directly from PRIMARY. Sometimes a SECONDARY database can replicate data from another SECONDARY. This type of replication is called Chained Replication because it is a two-step replication process. Chained replication is useful in certain replication topologies, and it is enabled by default in MongoDB.
25. What are some utilities for backup and restore in MongoDB?
The mongo shell does not include functions for exporting, importing, backup, or restore. However, MongoDB has created methods for accomplishing this, so that no scripting work or complex GUIs are needed. For this, several utility scripts are provided that can be used to get data in or out of the database in bulk. These utility scripts are:

mongoimport
mongoexport
mongodump
mongorestore
Conclusion
26. Conclusion
MongoDB is a powerful, flexible, and scalable general-purpose database. It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.
Thus, in conclusion, MongoDB is:

Supports Indexing
Designed to scale
Rich with Features
High Performance
Load Balancing
Supports sharding
Although MongoDB is powerful, incorporating many features from relational systems, it is not intended to do everything that a relational database does. For some functionality, the database server offloads processing and logic to the client-side (handled either by the drivers or by a user’s application code). Its maintenance of this streamlined design is one of the reasons MongoDB can achieve such high performance.

Here are few References to understand MongoDB in-depth:
https://www.mongodb.com/2
https://docs.mongodb.com

Interview Questions MongoDB

What is MongoDB?
MongoDB is a cross-platform, document-oriented database program that provides high performance, high availability, and easy scalability. It is a leading NoSQL database, which is designed for ease of development and scaling​​.

What are the features of MongoDB?
Key features of MongoDB include its document-oriented storage with JSON-like documents with dynamic schemas, full index support, replication & high availability, auto-sharding for horizontal scalability, built-in aggregation, and a rich query language​​.

What type of NoSQL database is MongoDB?

MongoDB is a document-based NoSQL database. This means that it stores data in Binary JSON (BSON) format, which allows the integration of data in certain types of applications more easily and quickly​​.
Explain the importance and benefits of using a document-based database like MongoDB.
Document databases like MongoDB are collection-oriented, and schema-free, and allow for a more flexible representation of relationships between data items. They are ideal for scenarios with large amounts of data and where the structure of the data may change over time. The benefits include faster development cycles, performance efficiency, and the ability to handle diverse and large amounts of data​​.

What is Mongo shell?

Mongo shell is a JavaScript interface to MongoDB, which allows you to perform tasks such as querying and updating data, managing the database’s structure, and setting up replication and sharding​​.
How does indexing work in MongoDB?
Indexing in MongoDB works by creating a data structure that improves the speed of data retrieval operations on a database collection. Just like indexes in other database systems, MongoDB indexes use a small portion of RAM to store a reference to the data, which can significantly improve the performance of queries​​.

What is sharding in MongoDB?
Sharding in MongoDB is the process of storing data records across multiple machines. It is MongoDB’s approach to meeting the demands of data growth. By splitting the data across multiple servers, sharding can provide a way to scale horizontally and facilitate high throughput operations with large sets of data​​.

What are some common use cases for MongoDB?
MongoDB is often used for mobile apps, content management, real-time analytics, and applications involving the Internet of Things. Its flexible schema, scalability, and performance make it suitable for a wide range of applications, especially where rapid development and iteration are required​​.

Differentiate MongoDB and MySQL.
The main difference between MongoDB and MySQL is that MongoDB is a NoSQL database that stores data in documents and does not require a predefined schema, allowing the fields to vary from document to document. MySQL, on the other hand, is a relational database management system that stores data in tables and requires a predefined schema for the data​​.

How do you create a database in MongoDB?
To create a database in MongoDB, you use the use command followed by the database name. If the database does not exist, MongoDB creates it when you first store data in that database.

How does MongoDB provide concurrency?
MongoDB uses a locking system to ensure that multiple clients can’t write to the same data at the same time. It uses reader-writer locks that allow concurrent readers shared access to a resource but give exclusive access to a single writer.

What is replication in MongoDB?
Replication in MongoDB is the process of synchronizing data across multiple servers. It increases data availability and ensures redundancy and high availability. This is achieved by using replica sets, which are a group of MongoDB instances that maintain the same data set.

What is a replica set?
A replica set in MongoDB is a group of mongod instances that host the same data set. In a replica, one node is the primary node that receives all write operations. The other, secondary nodes replicate the primary’s oplog and apply the operations to their data sets.

What are the different types of collections in MongoDB?
MongoDB has several types of collections, including capped collections, which are fixed-size collections that automatically overwrite their oldest entries when they reach their maximum size.

What is a document in MongoDB?
In MongoDB, a document is a basic unit of data that contains BSON (Binary JSON) key-value pairs. It is the MongoDB equivalent of a row in a relational database table.

How do you perform transactions in MongoDB?
MongoDB supports multi-document transactions, which are used to perform operations that require atomicity across multiple documents in one or more collections. Transactions in MongoDB feel similar to transactions in relational databases and are started with a startTransaction command.

How do you back up a MongoDB database?
Backing up a MongoDB database can be done using tools like Mongodump, which creates a binary export of the contents of a database. Another method is filesystem snapshots or using MongoDB Atlas’ backup solutions if you use MongoDB’s cloud service.

Can you explain sharding and its components?
Sharding is MongoDB’s strategy for meeting the demands of data growth. It involves splitting data across multiple MongoDB instances or shards. Components include shard key, query router (mongos), and config servers.

What are aggregations in MongoDB?
Aggregations in MongoDB are operations that process data records and return computed results. Aggregation operations group values from multiple documents together and can perform a variety of operations on the grouped data to return a single result.

What is the purpose of the skip() and limit() methods in MongoDB?
The skip() method is used to skip a specified number of documents in a query and is often used with limit() to paginate through documents. The limit() method is used to limit the number of documents returned by a query, which is useful for controlling the amount of data sent to a client.

What is MongoDB Atlas?
MongoDB Atlas is a fully-managed cloud database service provided by MongoDB. It offers a hosted MongoDB service that takes care of setup, infrastructure management, scaling, and backups in the cloud platform of your choice (AWS, Azure, or Google Cloud Platform).

How do you ensure that an index fits into RAM in MongoDB?
To ensure an index fits into RAM, you should create indexes that only cover the fields you frequently query and avoid adding unnecessary fields to the index. Monitoring performance and using MongoDB’s index size statistics can also help in managing index RAM fit.

What is a GridFS in MongoDB?
GridFS is a specification for storing and retrieving large files such as images, audio files, video files, etc. It allows storing files larger than the BSON-document size limit of 16MB by dividing them into chunks and storing them as separate documents.

What are the limitations when sharding a MongoDB collection?
When sharding a collection, you cannot shard on a hashed index that includes an array field, and you cannot change the shard key after sharding. Additionally, all queries that do not include the shard key must be broadcast to all shards.

Explain the role of a query router in MongoDB.
The query router, or mongos, is the component of a sharded MongoDB cluster that interfaces with client applications and directs operations to the appropriate shard(s). The mongos process queries the config servers to determine the metadata about the cluster and routes operations accordingly.

What is journaling in MongoDB and why is it important?
Journaling is a feature that provides durability in MongoDB. It ensures that write operations are written to a journal file first, so in the event of a crash, MongoDB can recover the writes from this journal. This is crucial for preventing data loss.

How do you update a document in MongoDB?
To update a document in MongoDB, you use the updateOne(), updateMany(), or replaceOne() operations, specifying the criteria for selecting the document and the updated values or document.

What is the oplog in MongoDB?
The oplog (operations log) is a special capped collection that keeps a rolling record of all operations that modify the data stored in your databases. It’s used as part of replication to keep secondary members consistent with the primary.

How can you achieve transaction-like functionality in MongoDB?
MongoDB provides multi-document transactions which allow performing multiple write operations across different documents in a single atomic operation, similar to transactions in relational databases.

What are the best practices for securing a MongoDB instance?
Best practices for securing a MongoDB instance include enabling authentication, using role-based access control, encrypting communication with TLS/SSL, encrypting sensitive data at rest, and keeping MongoDB and its underlying operating system up to date with security patches.

What is the difference between deleteOne() and deleteMany() in MongoDB?
deleteOne() deletes the first document that matches the query criteria, whereas deleteMany() deletes all documents that match the query criteria.

How does MongoDB handle transactions in a sharded environment?
MongoDB uses a two-phase commit process to handle transactions across sharded environments to maintain ACID (Atomicity, Consistency, Isolation, Durability) properties. It manages distributed transactions that can span multiple shards and ensures that the changes are committed only if all shards report success.

What is the significance of the _id field in MongoDB documents?
The _id field is a unique identifier for a document in a MongoDB collection. It is automatically added by MongoDB to every document if not provided and is used to ensure that every document can be uniquely identified.

How do you monitor the performance of a MongoDB database?
MongoDB provides various tools for monitoring performance, including the MongoDB Atlas platform, which offers monitoring and alerting features. Locally, you can use the mongostat and mongotop utilities to monitor database statistics and collection-level performance, respectively.

What is a compound index in MongoDB?
A compound index is an index on multiple fields within a MongoDB collection. Documents are sorted first by the value of the first field, then by the value of the second field within each group of documents with the same first field value, and so on.

What are the advantages of using MongoDB over traditional databases?
MongoDB offers a flexible schema, allowing developers to store data in a format that is more natural to their application logic. It also provides scalability through sharding, good performance for read and write operations, and a rich set of features like full-text search and geospatial queries.

Can you explain the explain() method in MongoDB?
The explain() method is used to provide information about how MongoDB executes a query. It can be used to diagnose performance issues by showing details such as which indexes have been used and how many documents were scanned.

What is a covered query in MongoDB?
A covered query is a query in which all the fields used in the query are part of an index and all the fields returned in the results are in the same index. Covered queries can be executed by MongoDB entirely using the index without having to look up the actual documents, resulting in improved query performance.

What is the role of mongod and mongos in MongoDB?
MongoDB is the primary daemon process for the MongoDB system—it handles data requests, manages data access, and performs background management operations. mongos acts as a query router, providing an interface between client applications and the sharded cluster.

How does MongoDB ensure data redundancy and high availability?
MongoDB ensures data redundancy and high availability through the use of replica sets, which are groups of two or more copies of a MongoDB database. The replica set includes a primary node and secondary nodes that replicate the data of the primary node. If the primary fails, an election process designates a new primary from the secondaries to maintain service continuity.

Потоки изменений Mongo выполняются несколько раз (вроде): приложение Node запускает несколько экземпляров
Вопросы
NODE.JS
Потоки изменений Mongo выполняются несколько раз (вроде): приложение Node запускает несколько экземпляров
Приложение My Node использует потоки изменений Mongo, и приложение запускает 3+ экземпляра в производственной среде (со временем, так что это станет все более серьезной проблемой по мере роста). Таким образом, когда происходит изменение, функциональность потока изменений запускается столько раз, сколько существует процессов.

Как настроить так, чтобы поток изменений запускался только один раз?

Вот что у меня есть:

const options = { fullDocument: "updateLookup" };

const filter = [
  {
    $match: {
      $and: [
        { "updateDescription.updatedFields.sites": { $exists: true } },
        { operationType: "update" }
      ]
    }
  }
];

const sitesStream = Client.watch(sitesFilter, options);

// Start listening to site stream
sitesStream.on("change", async change => {
  console.info("in site change stream", change);
  console.info(
    "in site change stream, update desc",
    change.updateDescription
  );

  // Do work...
  console.info("site change stream done.");
  return;
});
 24.08.2018 17:36
3
0
3 460
5
Данный вопрос помечен как решенный
 Ответы 5
Похоже, вам нужен способ разделить обновления между экземплярами. Вы заглянули в Apache Kafka? По сути, вам нужно иметь одно приложение, которое записывает данные изменений в секционированную тему Kafka, и ваше приложение узла будет потребителем Kafka. Это гарантирует, что только один экземпляр приложения когда-либо получит обновление.

В зависимости от вашей стратегии разделения вы даже можете гарантировать, что обновления для одной и той же записи всегда будут поступать в одно и то же приложение узла (если вашему приложению необходимо поддерживать собственное состояние). В противном случае вы можете распределять обновления по круговой системе.

Самым большим преимуществом использования Kafka является то, что вы можете добавлять и удалять экземпляры, не изменяя конфигурации. Например, вы можете запустить один экземпляр, и он будет обрабатывать все обновления. Затем, как только вы запускаете другой экземпляр, каждый из них начинает обрабатывать половину нагрузки. Вы можете продолжить этот шаблон для такого количества экземпляров, сколько есть разделов (и вы можете настроить тему на 1000 разделов, если хотите), в этом заключается сила группы потребителей Kafka. Уменьшение работает в обратном порядке.

 24.08.2018 18:07
 Ответ принят как подходящий
Хотя вариант Kafka казался интересным, это была большая работа с инфраструктурой на платформе, с которой я не знаком, поэтому я решил пойти с чем-то более близким для меня, отправив сообщение MQTT в небольшое автономное приложение, и позволяя серверу MQTT отслеживать сообщения на предмет уникальности.

siteStream.on("change", async change => {
  console.info("in site change stream);
  const mqttClient = mqtt.connect("mqtt://localhost:1883");
  const id = JSON.stringify(change._id._data);
  // You'll want to push more than just the change stream id obviously...
  mqttClient.on("connect", function() {
    mqttClient.publish("myTopic", id);
    mqttClient.end();
  });
});
Я все еще работаю над окончательной версией сервера MQTT, но метод оценки уникальности сообщений, вероятно, будет хранить массив идентификаторов потоков изменений в памяти приложения, поскольку нет необходимости их сохранять, и оценивать, следует ли продолжать какие-либо действия. далее в зависимости от того, был ли ранее виден этот идентификатор потока изменений.

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883");
var seen = [];
client.on("connect", function() {
  client.subscribe("myTopic");
});
client.on("message", function(topic, message) {
  context = message.toString().replace(/"/g, "");
  if (seen.indexOf(context) < 0) {
    seen.push(context);
    // Do stuff
  }
});
Это не включает безопасность и т. д., Но идею вы поняли.

 30.08.2018 15:03
Это легко сделать с помощью только операторов запросов Mongodb. Вы можете добавить запрос по модулю в поле идентификатора, где делитель - это количество экземпляров вашего приложения (N). Остаток тогда является элементом {0, 1, 2, ..., N-1}. Если экземпляры вашего приложения пронумерованы в порядке возрастания от нуля до N-1, вы можете написать фильтр следующим образом:

const filter = [
  {
    "$match": {
      "$and": [
        // Other filters
        { "_id": { "$mod": [<number of instances>, <this instance's id>]}}
      ]
    }
  }
];
 13.11.2019 15:01
Будет ли это иметь поле в БД под названием status, которое будет обновляться с помощью findAnUpdate на основе события, полученного из потока изменений. Допустим, вы получаете 2 события одновременно из потока изменений. Первое событие обновит статус до start, а другое вызовет ошибку, если статус - start. Таким образом, второе событие не будет обрабатывать бизнес-логику.

что, если они выполняют чтение одновременно со статусом "начало", а затем оба меняют его ... это плохое решение

— 
Ameur Baccoucha
 10.08.2020 12:09
Таким образом, только один сможет изменить его, так как поле статуса будет обновлено до `` конец '', и пока другой пытается изменить это, потерпит неудачу. Это то, что вы можете гарантировать в MongoDB, что обновление является атомарным.

— 
iAviator


Производительность MongoDB Java API при медленном чтении
Вопросы
JAVA
Производительность MongoDB Java API при медленном чтении
Мы читаем из локальной MongoDB все документы из коллекций, и производительность не очень хороша.

Нам нужно выгрузить все данные, не беспокойтесь о причинах, просто верьте, что они действительно нужны, и обходного пути нет.

У нас есть 4 миллиона документов, которые выглядят так:

{
    "_id":"4d094f58c96767d7a0099d49",
    "exchange":"NASDAQ",
    "stock_symbol":"AACC",
    "date":"2008-03-07",
    "open":8.4,
    "high":8.75,
    "low":8.08,
    "close":8.55,
    "volume":275800,
    "adj close":8.55
}
И мы используем этот тривиальный код для чтения:

MongoClient mongoClient = MongoClients.create();
MongoDatabase database = mongoClient.getDatabase("localhost");
MongoCollection<Document> collection = database.getCollection("test");

MutableInt count = new MutableInt();
long start = System.currentTimeMillis();
collection.find().forEach((Block<Document>) document -> count.increment() /* actually something more complicated */ );
long start = System.currentTimeMillis();
Мы читаем всю коллекцию за 16 секунд (250 тыс. Строк в секунду), что совсем не впечатляет для небольших документов. Имейте в виду, что мы хотим загрузить 800 миллионов строк. Невозможно агрегирование, сокращение карты или подобное.

Это так быстро, как MongoDB, или есть другие способы быстрее загружать документы (другие методы, перемещение Linux, больше ОЗУ, настройки ...)?

 30.08.2018 18:09
22
7
4 909
5
 Ответы 5
collection.find().forEach((Block<Document>) document -> count.increment());

Эта строка может занимать много времени, поскольку вы выполняете итерацию более 250 тыс. Записей в памяти.

Чтобы быстро проверить, так ли это, вы можете попробовать это -

long start1 = System.currentTimeMillis();
List<Document> documents = collection.find();
System.out.println(System.currentTimeMillis() - start1);

long start2 = System.currentTimeMillis();
documents.forEach((Block<Document>) document -> count.increment());
System.out.println(System.currentTimeMillis() - start2);
Это поможет вам понять, сколько времени на самом деле требуется для получения документов из базы данных и сколько времени занимает итерация.

 30.08.2018 18:16
Вы не указали свой вариант использования, поэтому очень сложно сказать вам, как настроить ваш запрос. (То есть: кто захочет загружать 800-миллиметровую строку за раз только для подсчета?).

Учитывая вашу схему, я думаю, что ваши данные почти доступны только для чтения, а ваша задача связана с агрегацией данных.

Ваша текущая работа - это просто считывание данных (скорее всего, ваш драйвер будет считывать данные в пакетном режиме), затем остановка, затем выполнение некоторых вычислений (черт возьми, оболочка int используется для большего увеличения времени обработки), а затем повторить. Это не лучший подход. БД не будет работать волшебным образом, если вы не получите к ней доступ правильным образом.

Если вычисления не слишком сложны, я предлагаю вам использовать структура агрегирования вместо загрузки всего в вашу оперативную память.

Что-то, что вам следует подумать, чтобы улучшить вашу агрегацию:

Разделите свой набор данных на меньший набор. (Например: раздел на date, раздел на exchange ...). Добавьте индекс для поддержки этого раздела и выполните агрегацию в разделе, а затем объедините результат (типичный подход «разделяй и властвуй»)
Спроектировать только необходимые поля
Отфильтруйте ненужный документ (если возможно)
Разрешите использование диска, если вы не можете выполнить агрегацию в памяти (если вы достигли предела 100 МБ на пипилин).
Используйте встроенный конвейер для ускорения вычислений (например, $count для вашего примера)
Если ваши вычисления слишком сложны, и вы не можете выразить их с помощью фреймворка агрегации, используйте mapReduce. Он работает на основе процесса mongod, и данные не нужно передавать по сети в вашу память.

Обновлено

Итак, похоже, вы хотите выполнить обработку OLAP, но застряли на этапе ETL.

Вам не нужно и нужно избегать загрузки всех данных OLTP в OLAP каждый раз. Нужно только загрузить новые изменения в ваше хранилище данных. Тогда первая загрузка / сброс данных занимает больше времени, это нормально и приемлемо.

При первой загрузке следует учитывать следующие моменты:

Divide-N-Conquer, опять же, разбивает ваши данные на меньший набор данных (с предикатом вроде даты / обмена / бирки ...)
Выполните параллельные вычисления, а затем объедините свой результат (вы должны правильно разделить свой набор данных)
Выполняйте вычисления в пакетном режиме вместо обработки в forEach: загрузите раздел данных, затем выполняйте вычисления вместо одного за другим.
 04.09.2018 03:41
То, что я думаю, что я должен сделать в вашем случае, было простым решением и одновременно эффективным способом - максимизировать общую пропускную способность с помощью parallelCollectionScan.

Allows applications to use multiple parallel cursors when reading all the documents from a collection, thereby increasing throughput. The parallelCollectionScan command returns a document that contains an array of cursor information.

Each cursor provides access to the return of a partial set of documents from a collection. Iterating each cursor returns every document in the collection. Cursors do not contain the results of the database command. The result of the database command identifies the cursors, but does not contain or constitute the cursors.

Простой пример с parallelCollectionScan должен быть похож на этот

 MongoClient mongoClient = MongoClients.create();
 MongoDatabase database = mongoClient.getDatabase("localhost");
 Document commandResult = database.runCommand(new Document("parallelCollectionScan", "collectionName").append("numCursors", 3));
 04.09.2018 10:17
По моим подсчетам, вы обрабатываете около 50 МБ / с (250 тыс. Строк в секунду * 0,2 КиБ / строка). Это приводит к узким местам как в дисковых накопителях, так и в сети. Какое хранилище использует MongoDB? Какая у вас пропускная способность между клиентом и сервером MongoDB? Вы пробовали совместное размещение сервера и клиента в высокоскоростной (> = 10 Гиб / с) сети с минимальной (<1,0 мс) задержкой? Имейте в виду, что если вы используете поставщика облачных вычислений, такого как AWS или GCP, у него будут узкие места виртуализации, помимо физических.

Вы спросили о настройках, которые могут помочь. Вы можете попробовать изменить настройки сжатия на связь и на коллекция (варианты «нет», snappy и zlib). Даже если ни один из них не улучшит snappy, наблюдение за той разницей, которую вносят (или не влияют) настройки, может помочь выяснить, какая часть системы испытывает наибольшую нагрузку.

Java не имеет хорошей производительности для обработки чисел по сравнению с C++ или Python, поэтому вы можете подумать о том, чтобы переписать эту конкретную операцию на одном из этих языков, а затем интегрировать ее с вашим кодом Java. Я предлагаю вам выполнить тестовый прогон, просто перебирая данные в Python и сравнивая их с тем же в Java.

 10.09.2018 00:49
Во-первых, как прокомментировал @ xtreme-biker, производительность во многом зависит от вашего оборудования. В частности, мой первый совет - проверить, работаете ли вы на виртуальной машине или на собственном хосте. В моем случае с виртуальной машиной CentOS на i7 с диском SDD я могу читать 123 000 документов в секунду, но точно такой же код, работающий на хосте Windows на том же диске, читает до 387 000 документов в секунду.

Далее предположим, что вам действительно нужно прочитать всю коллекцию. Это означает, что вы должны выполнить полное сканирование. И давайте предположим, что вы не можете изменить конфигурацию своего сервера MongoDB, а только оптимизировать свой код.

Тогда все сводится к тому, что

collection.find().forEach((Block<Document>) document -> count.increment());
действительно делает.

Быстрое развертывание MongoCollection.find () показывает, что он действительно делает это:

ReadPreference readPref = ReadPreference.primary();
ReadConcern concern = ReadConcern.DEFAULT;
MongoNamespace ns = new MongoNamespace(databaseName,collectionName);
Decoder<Document> codec = new DocumentCodec();
FindOperation<Document> fop = new FindOperation<Document>(ns,codec);
ReadWriteBinding readBinding = new ClusterBinding(getCluster(), readPref, concern);
QueryBatchCursor<Document> cursor = (QueryBatchCursor<Document>) fop.execute(readBinding);
AtomicInteger count = new AtomicInteger(0);
try (MongoBatchCursorAdapter<Document> cursorAdapter = new MongoBatchCursorAdapter<Document>(cursor)) {
    while (cursorAdapter.hasNext()) {
        Document doc = cursorAdapter.next();
        count.incrementAndGet();
    }
}
Здесь FindOperation.execute() работает довольно быстро (менее 10 мс), и большую часть времени он проводит внутри цикла while, особенно внутри частного метода QueryBatchCursor.getMore().

getMore() вызывает DefaultServerConnection.command(), и это время тратится в основном на две операции: 1) получение строковых данных с сервера и 2) преобразование строковых данных в BsonDocument.

Оказывается, Mongo довольно умен в отношении того, сколько сетевых обходов он сделает, чтобы получить большой набор результатов. Сначала он получит 100 результатов с помощью команды firstBatch, а затем выберет более крупные пакеты, причем nextBatch будет размером пакета, зависящим от размера коллекции до предела.

Итак, под дровами произойдет что-то подобное, чтобы забрать первую партию.

ReadPreference readPref = ReadPreference.primary();
ReadConcern concern = ReadConcern.DEFAULT;
MongoNamespace ns = new MongoNamespace(databaseName,collectionName);
FieldNameValidator noOpValidator = new NoOpFieldNameValidator();
DocumentCodec payloadDecoder = new DocumentCodec();
Constructor<CodecProvider> providerConstructor = (Constructor<CodecProvider>) Class.forName("com.mongodb.operation.CommandResultCodecProvider").getDeclaredConstructor(Decoder.class, List.class);
providerConstructor.setAccessible(true);
CodecProvider firstBatchProvider = providerConstructor.newInstance(payloadDecoder, Collections.singletonList("firstBatch"));
CodecProvider nextBatchProvider = providerConstructor.newInstance(payloadDecoder, Collections.singletonList("nextBatch"));
Codec<BsonDocument> firstBatchCodec = fromProviders(Collections.singletonList(firstBatchProvider)).get(BsonDocument.class);
Codec<BsonDocument> nextBatchCodec = fromProviders(Collections.singletonList(nextBatchProvider)).get(BsonDocument.class);
ReadWriteBinding readBinding = new ClusterBinding(getCluster(), readPref, concern);
BsonDocument find = new BsonDocument("find", new BsonString(collectionName));
Connection conn = readBinding.getReadConnectionSource().getConnection();

BsonDocument results = conn.command(databaseName,find,noOpValidator,readPref,firstBatchCodec,readBinding.getReadConnectionSource().getSessionContext(), true, null, null);
BsonDocument cursor = results.getDocument("cursor");
long cursorId = cursor.getInt64("id").longValue();

BsonArray firstBatch = cursor.getArray("firstBatch");
Затем cursorId используется для выборки каждой следующей партии.

На мой взгляд, «проблема» с реализацией драйвера заключается в том, что декодер String to JSON внедряется, а JsonReader - в котором полагается метод decode () - нет. Это так даже до com.mongodb.internal.connection.InternalStreamConnection, где вы уже находитесь рядом с коммуникацией сокета.

Поэтому я думаю, что вряд ли что-то можно сделать для улучшения MongoCollection.find(), если вы не углубитесь в InternalStreamConnection.sendAndReceiveAsync().

Вы не можете уменьшить количество циклов обработки и изменить способ преобразования ответа в BsonDocument. Не обошлось без обхода драйвера и написания собственного клиента, что, я сомневаюсь, хорошая идея.

P.D. Если вы хотите попробовать что-то из приведенного выше кода, вам понадобится метод getCluster (), который требует грязного взлома монго-Java-драйвер.

private Cluster getCluster() {
    Field cluster, delegate;
    Cluster mongoCluster = null;
    try {
        delegate = mongoClient.getClass().getDeclaredField("delegate");
        delegate.setAccessible(true);
        Object clientDelegate = delegate.get(mongoClient);
        cluster = clientDelegate.getClass().getDeclaredField("cluster");
        cluster.setAccessible(true);
        mongoCluster = (Cluster) cluster.get(clientDelegate);
    } catch (NoSuchFieldException | SecurityException | IllegalArgumentException | IllegalAccessException e) {
        System.err.println(e.getClass().getName()+" "+e.getMessage());
    }
    return mongoCluster;
}
Мы поигрались и пришли к аналогичному выводу, декодирование занимает большую часть времени. Спасибо

— 
ic3
 10.09.2018 09:51
@ ic3 Я думаю, что это все еще поддерживает идею о том, что вам следует переписать эту конкретную операцию на Python или C++, по крайней мере, в качестве теста.

— 
Old Pro
 10.09.2018 21:44
@OldPro мы работали над этой идеей и развязывали прослушивание порта и декодирование в одном потоке и многое другое. Когда все будет готово и настроено, я напишу наши выводы. Жалкий bson не помещает fieldNames в карты, поэтому одни и те же не пересылаются снова и снова ... намек на то, что мы улучшаем ;-)

Mongoose findbyid () возвращает значение null
Вопросы
NODE.JS
Mongoose findbyid () возвращает значение null
Я пытаюсь найти запись в своей базе данных mongo по ее идентификатору

Независимо от того, что я использую findbyid (), findone (id, ...), он возвращает null

вот мой код. Каково решение?

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Movie', {useNewUrlParser: true})
.then(() => console.info('Connected to Databse'))
.catch(err => console.err('Could not connect to MongoDB', err));

var ObjectId = require('mongodb').ObjectID;

const Schema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date, 
    isPublished: Boolean,
    price: Number
});

const Data = mongoose.model('Datas', Schema);

async function updateData(id){
const result = await Data.findById(id);
console.info(result);
}
updateData('5a6900fff467be65019a9001');
 03.09.2018 12:14
8
6
11 891
5
Данный вопрос помечен как решенный
 Ответы 5
Проверьте свою базу данных mongodb, если _id хранится как String, findById(id) не может найти id. FindById(id) только finds ObjectId('yourId'). Вы можете импортировать базу данных, используя mongoimport и включая _id в JSON, это неправильно, удалите _id в импортированном JSON.

 14.09.2018 05:39
В моем случае импортированный файл имел столбец _id в виде строки, поэтому он мешал БД, и я не мог фильтровать с помощью этого столбца.

Как только я удалил коллекцию, удалил столбец _id из файла данных и повторно импортировал его, фильтрация _id начала работать нормально.

 30.12.2018 22:46
 Ответ принят как подходящий
У меня такая же проблема. _Id в моей коллекции БД был String. После того, как я включил отладку mongoose require('mongoose').set('debug', true), я обнаружил, что mongoose запрашивает id как ObjectId("yourId"), если мы не определим _id в схеме. Чтобы решить эту проблему, мне пришлось добавить _id:String в схему мангуста.

const MyDataSchema = new Schema({
  _id: String,
...
...
}
 18.02.2019 03:04
Для этого есть простое решение:

Заменять

const result = await Data.findById(id);
с

const result = await Data.findById(id).exec();
См. Mongoose - что делает функция exec? для объяснения того, что делает exec().

 27.04.2020 22:51
Я тоже столкнулся с той же проблемой. Затем я обратился к этому решение. Убедитесь, что документы в коллекции имеют _я бы как Объект, а не Нить. Если вы импортировали записи базы данных с помощью файла JSON, просто удалите все поля _id, а затем импортируйте его.

После импорта MongoDB сама присвоит значения _я бы всем записям.

Включает ли Mongo Compass функцию удаления нескольких документов за один раз?
Вопросы
MONGODB
Включает ли Mongo Compass функцию удаления нескольких документов за один раз?
Некоторое время я использую MongoDB в своих проектах. Но в настоящее время новичок в приложении компаса MongoDB. поэтому, когда я хочу удалить много документов за раз. Как мне выполнить эту операцию в Mongo Compass?

 07.09.2018 07:44
10
0
13 071
5
 Ответы 5
Последняя стабильная версия Compass (1.16.3) не поддерживает операцию удаления множества. Для этого вам нужно использовать оболочку mongo - https://docs.mongodb.com/v3.2/tutorial/remove-documents/

 27.01.2019 11:16
Обходной путь в Compass: сначала отбросьте коллекцию, а затем создайте коллекцию с тем же именем или даже импортируйте образец документа.

 11.07.2019 14:20
Единственный способ [до выпуска 1.20.5] - выполнить команду удаления из mongo-shell. Вот шаги и пример для удаления нескольких документов, соответствующих фильтру, с использованием mongo-shell

скачать mongo-shell из ссылка
Откройте командную строку и перейдите в папку, в которой находятся двоичные файлы.
Подключитесь к mongo-server, запустите команду подключения> mongo "mongodb+srv://cluster-name.mongodb.net/db_name" --username <uasername> --password <password>
пример команды удаления, запустите: db.users.remove( { status : "P" } ), чтобы удалить все документы из коллекции пользователей, где поле статуса равно "P"
 15.03.2020 07:19
Я использую Функция удаления Robo 3T для удаления многих записей, потому что в MongoDB Compass вы можете делать это только по одной.

 06.06.2020 19:29
При поиске варианта оболочки с MongoDB Compass я узнал, что компас также предоставляет встроенную оболочку, которую можно использовать для выполнения команд MongoDB. Пожалуйста, проверьте мой ответ ниже для получения дополнительной информации.

Как удалить несколько выбранных записей в коллекции в MongoDB с помощью компаса MongoDB

Ваше здоровье,

Mongoose Model.update не работает в моем коде
Вопросы
NODE.JS
Mongoose Model.update не работает в моем коде
Я хочу обновить некоторые свойства курса с заданным идентификатором. Это мой код:

const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);
mongoose.connect('mongodb://localhost/mongo-exercises');

async function updateCourse(id) {
     const result = await Course.update({_id: id}, {
        $set: {
            author: 'New', 
            isPublished: false
        }
    });

console.info(result);
}

updateCourse('5a68fde3f09ad7646ddec17e');
На консоли я получаю {ok: 1, nModified: 0, n: 0}.

Я пробовал обновить элемент этим другим способом, но он не работает. Для этого фрагмента кода я не получаю результата, нет ответа:

const course = await Course.findById(id);
  if (!course) return; 

  course.isPublished = true; 
  course.author = 'Another Author';

  const result = await course.save();
  console.info(result);
Когда я пытаюсь обновить с помощью findByIdAndUpdate с этим другим кодом, в консоли результат будет нулевым:

 async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id, {
    $set: {
        author: 'Billy',
        isPublished: false
    }
 });

   console.info(course);

 }
updateCourse('5a68fde3f09ad7646ddec17e');
База данных, с которой я работаю, имеет:

 { _id: 5a68fdd7bee8ea64649c2777,
   name: 'Node.js Course',
   author: 'Sam',
   isPublished: true,
   price: 20 },
 { _id: 5a68fde3f09ad7646ddec17e,
   name: 'ASP.NET MVC Course',
   author: 'Mosh',
   isPublished: true,
   price: 15 },
 { _id: 5a6900fff467be65019a9001,
   name: 'Angular Course',
   author: 'Mosh',
   isPublished: true,
   price: 15 },
 { _id: 5a68fe2142ae6a6482c4c9cb,
   name: 'Node.js Course by Jack',
   author: 'Jack',
   isPublished: true,
   price: 12 }
Курс не обновляется. Где ошибка? Обратите внимание: если я хочу создать новые документы, это без проблем.

Возможно, author и isPublished уже имеют то же значение, которое вы пытаетесь установить?

— 
GMachado
 09.09.2018 05:35
Привет. isPublished имеет то же значение, но автор другой. Я пробовал другие варианты обновления, например, находя элемент по его идентификатору, а затем обновляя его, но это не работает.

— 
Samu R
 09.09.2018 13:58
Вы пытаетесь выполнить обновление с одним и тем же жестко запрограммированным значением, поэтому mongodb обнаруживает, что старая и новая запись совпадают, поэтому поле nModified установлено в ноль.

— 
Vishnu Singh


Как сгруппировать в mongoDB и вернуть все поля в результате
Вопросы
NODE.JS
Как сгруппировать в mongoDB и вернуть все поля в результате
Я использую агрегированный метод в mongoDB для группировки, но когда я использую $group, он возвращает единственное поле, которое я использовал для группировки. Я пробовал $project, но он тоже не работает. Я также попробовал $first, и он работал, но данные результата теперь в другом формате.

Нужный мне формат ответа выглядит так:

{
    "_id" : ObjectId("5b814b2852d47e00514d6a09"),
    "tags" : [],
    "name" : "name here",
    "rating" : "123456789"
}
и после добавления $ group в мой query.response значение _id изменяется. (и $ group принимает только _id, если я попробую любое другое ключевое слово, это вызовет ошибку аккумулятора чего-то. Пожалуйста, объясните это также.)

{
    "_id" :"name here" //the value of _id changed to the name field which i used in $group condition
}
Мне нужно удалить дубликаты в поле имени, не меняя структуру и поля. также я использую nodeJS с mongoose, поэтому предоставьте решение, которое с ним работает.

 29.09.2018 11:16
27
7
27 005
5
Данный вопрос помечен как решенный
 Ответы 5
Когда вы группируете данные в любой базе данных, это означает, что вы хотите выполнить накопленную операцию в обязательном поле, а другое поле, которое не будет включено в накопленную операцию, будет использоваться в группе, например

 db.collection.aggregate([{
 $group: {
   _id: { field1: "", field1: "" },
   acc: { $sum: 1 }
 }}]
здесь в _id объект будет содержать все остальные поля, которые вы хотите сохранить.

для ваших данных вы можете попробовать это

db.collection.aggregate([{
    $group: {
        _id: "$name",
        rating: { $first: "$rating" },
        tags: { $first: "$tag" },
        docid: { $first: "$_id" }
    }
},
{
    $project: {
        _id: "$docid",
        name: "$_id",
        rating: 1,
        tags: 1
    }
}])
 29.09.2018 11:43
Вы можете использовать этот запрос

db.col.aggregate([
                        {"$group" : {"_id" : "$name","data" : {"$first" : "$$ROOT"}}},
                        {"$project" : {
                            "tags" : "$data.tags",
                            "name" : "$data.name",
                            "rating" : "$data.rating",
                            "_id" : "$data._id"
                            }
                        }])
 29.09.2018 12:47
 Ответ принят как подходящий
Вы можете использовать ниже агрегированный запрос.

$$ROOT, чтобы сохранить весь документ для каждого имени, за которым следует $replaceRoot, чтобы продвинуть документ наверх.

db.col.aggregate([
  {"$group":{"_id":"$name","doc":{"$first":"$$ROOT"}}},
  {"$replaceRoot":{"newRoot":"$doc"}}
])
 30.09.2018 15:48
Решение user2683814 сработало для меня, но в моем случае у меня есть счетчик-аккумулятор, когда мы заменяем объект newRoot, поле счетчика отсутствует на последнем этапе, поэтому я использовал оператор $mergeObjects, чтобы вернуть свое поле счетчика.

db.collection.aggregate([
 {
  $group: {
    _id: '$product',
    detail: { $first: '$$ROOT' },
    count: {
      $sum: 1,
    },
  },
},
{
  $replaceRoot: {
    newRoot: { $mergeObjects: [{ count: '$count' }, '$detail'] },
  },
}])
 04.01.2020 13:46
Я хотел сгруппировать свою коллекцию по полю groupById и сохранить ее как пары ключ-значение, имеющие ключ как groupById и значение как все элементы этой группы.

db.col.aggregate([{$group :{_id :"$groupById",newfieldname:{$push:"$"}}}]).pretty()
У меня это работает нормально ..

Не удается подключиться к базе данных MongoParseError: неэкранированный раздел авторизации при входе
Вопросы
NODE.JS
Не удается подключиться к базе данных MongoParseError: неэкранированный раздел авторизации при входе
Я пытаюсь подключиться к серверу mongodb в своем проекте nodeJS. У меня есть файл конфигурации db как DB.js

module.exports = {
    DB: 'mongodb+srv://user%40gmail.com:%24ugar@cluster-jfgsm.mongodb.net/test?retryWrites=true'
 };
имя пользователя содержит отметку @ (% 40), поскольку это идентификатор электронной почты, а пароль содержит символы $ (% 24).

И я подключил это в своем файле server.js как

    mongoose = require('mongoose'),
    config = require('./config/DB');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB,  { useNewUrlParser: true } ).then(
      () => {console.info('Database is connected') },
      err => { console.info('Can not connect to the database'+ err)}
    );
и я добавил настраиваемую опцию serve в свой файл package.json для запуска nodemon.

"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "serve": "nodemon server.js"
  },
Но когда я попытался запустить проект с помощью команды npm run serve, я получил сообщение об ошибке в консоли.

Can not connect to the databaseMongoParseError: Unescaped at-sign in authority section

Я также искал много вопросов в переполнении стека, но у меня ничего не работало.

Любая помощь приветствуется. Спасибо

 03.10.2018 19:42
2
0
15 246
5
Данный вопрос помечен как решенный
 Ответы 5
Вы пытались избежать @ и $ like?

mongodb+srv://user\@gmail.com:\$ugar@cluster-jfgsm.mongodb.net/test?retryWrites=true
 03.10.2018 19:52
const dbName = 'your db name';
const dbUser = 'your db username';
const dbPassword = 'your db user password';

const MONGODB_URI = `mongodb://${dbUser}:${dbPassword}@ds047207.mlab.com:47207/${dbName}`;
Note : @ds047207.mlab.com:47207 its provide u in your account check. its not connect try to simple username and password. create user ex: username :asif , password :asif123 Bcoz i had create user with username :asif-vora and password :asif@1234 its getting error in database connection when i try with username :asif , password :asif123 its work fine :)

Image

 16.10.2018 13:16
 Ответ принят как подходящий
Кодировать пароль можно так:

const DB_USER = 'user';
const PASSWORD = encodeURIComponent('hello@123'); 
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@ds331735.mlab.com:31772/any_db`;
Если в вашем пароле есть @, вы должны изменить его на %40.

 12.02.2019 19:30
Обнаружена та же проблема, но, в конце концов, это не пользователь учетной записи атласа mongodb (у которого есть адрес электронной почты в качестве имени пользователя), необходимый для входа в систему.

Нужен пользователь, имеющий доступ к кластеру, созданному в атласе mongodb.

Project > clusters > [Select cluster]

Security tab > select/create new db user

Этим пользователям не нужны специальные символы (есть даже сообщение о том, что такие символы будут закодированы)

См. Изображение ниже:

MongoDB cluster interface (as of Feb 2019)

 26.02.2019 16:45
попробуйте, это сработало со мной:

DB: mongodb://admin:<password>@nerdstore-shard-00-00-4iypj.mongodb.net:27017,nerdstore-shard-00-01-4iypj.mongodb.net:27017,nerdstore-shard-00-02-4iypj.mongodb.net:27017/nerdstore?ssl=true&replicaSet=nerdstore-shard-0&authSource=admin&retryWrites=true&w=majority
измените его с помощью ur shard.

у вас есть 3 осколка при создании db, измените его на свой осколок имени db, а также имя пользователя и пароль. DB: mongodb: // yourUsername: <yourpassword> @ yourCluster-shard-00-0‌ 0-4iypj.mongodb.net:‌ 27017, yourCluster-sh‌ ard-00-01-4iypj.mong‌ odb.net: 27017, yourCl‌ uster-shard-00-02-4i‌ ypj.mongodb.net:2701‌ 7 / yourDatabase? Ssl = t‌ rue & replicaSet = yourC‌ lustre-shard-0 & authS‌ ource = admin & retryWri‌ tes = true & w = most

— 
Ahmad S Habibi

Mongodb 4 Каталог данных C: \ data \ db \ не найден
Вопросы
DATABASE
Mongodb 4 Каталог данных C: \ data \ db \ не найден
Я загружаю и устанавливаю последнюю версию MongoDb - 4.0.2 и устанавливаю правильную переменную пути. Когда я хочу запустить службу mondoDb с помощью команды mongod, я получил следующую ошибку:

exception in initAndListen: NonExistentPath: Data directory C:\data\db\ not found., terminating

Я знаю, что мне нужно создать отсутствующий каталог, но этот каталог автоматически создается по следующему пути: C: \ Program Files \ MongoDB \ Server \ 4.0 Я проверил файл mongod.cfg, и правильный путь уже установлен: dbPath: C:\Program Files\MongoDB\Server\4.0\data

Теперь, как заставить монго искать папку, которая, по его мнению, отсутствует на правильном пути?

 04.10.2018 15:16
12
0
18 775
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
У меня была такая же проблема, но после того, как я создал каталог C:\data\db\, все заработало.

 04.10.2018 15:35
Это решение может решить вашу проблему.

Сделайте каталог как

sudo mkdir -p / data / db

Это создаст каталог с именем db, а затем попытается начать с команд

судо монгод

Если вы получаете другую ошибку или проблему с запуском mongod, вы можете найти проблему как

Failed to set up listener: SocketException: Address already in use If you find that another error than you have to kill the running process of mongod by typing to terminal as

ps ax | grep mongod
Найдите работающий порт mongod и завершите процесс. sudo kill ps_number

Другой способ - сделать специальный порт при запуске mongod как

sudo mongod --port 27018
 03.02.2019 10:14
У меня тоже была такая же проблема после обновления Windows, Mongodb не запускался автоматически. Создание нового каталога C: data / db будет неправильным решением, поскольку Mongodb уже настроил каталог C: \ Program Files \ MongoDB \ Server \ 4.0 \ data в качестве пути данных.

Выполните следующую команду в cmd от имени администратора.

cd C:\Program Files\MongoDB\Server\4.0\bin
mongod --dbpath = "C:\Program Files\MongoDB\Server\4.0\data".
Это сработало для меня.

 09.04.2019 06:06
Я попытался открыть CMD в режиме администратора, и ошибка исчезла. Надеюсь, это кому-то поможет.

 04.11.2019 07:22
попал в файл C: \ Program Files \ MongoDB \ Server \ 4.0 \ bin \ mongod.cfg

обновить поля ниже с этими значениями dbPath: .... \ data \ db (путь к каталогу)

и перезапустите сервер один раз

Вероятно, вам следует расширить свой ответ, чтобы предоставить достаточно подробностей, чтобы кто-то смог решить свою проблему. Вы упоминаете поля, но четко не указываете, на какие поля вы ссылаетесь и почему эти поля актуальны.

— 
Jason K.

Изменить ключ документа JSON
Вопросы
JAVASCRIPT
Изменить ключ документа JSON
У меня есть следующий файл JSON, который вставлен в MongoDB

"entities": [{
    "type": "Location",
    "text": "Marília",
    "relevance": 0.966306,
    "disambiguation": {
      "subtype": [
        "CityTown",
        "City"
      ],
      "name": "Marília",
      "dbpedia_resource": "http://dbpedia.org/resource/Marília"
    },
    "count": 3
  },
  {
    "type": "Organization",
    "text": "Associação Engenheiros, Arquitetos",
    "relevance": 0.647857,
    "count": 1
  }
]
В MongoDB type - зарезервированное слово. Как поменять ключ type на desctype? Я работаю с NodeJS.

Я уже пробовал:

data = JSON.stringify(data).replace(/"type"/g, /"desctype"/); 
data = JSON.parse(data);
Но у меня ошибка:

JSON.parse: SyntaxError: Unexpected token / in JSON

 05.10.2018 15:50
0
0
59
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Ваш синтаксис неверен:

Вы должны использовать это так:

data = JSON.stringify(data).replace(/type/g, "desctype"); 
Однако, поскольку у вас также есть subtype, это не сработает.

Лучший способ сделать это - отобразить данные, чтобы изменить их структуру следующим образом:

data.entities.map(entity => ({ ...entity, desctype: entity.type, type: null }))
...entity распространит все свойства entity, мы создадим desctype, который будет инициализирован с помощью entity.type, а затем мы установим type на null.

 05.10.2018 15:56
Если вы пытаетесь манипулировать своей структурой данных, я бы рекомендовал использовать для этого функции манипулирования объектами. Здесь вы можете использовать для этого Array.map.

Кроме того, вы можете использовать способ ES6 для упрощения функции с помощью Стрелочные функции и дальнейшего упрощения манипулирования объектами с помощью Распространение синтаксиса, где он распространяет все свойства объекта. Здесь {type, ...rest} в функции разрушает объекта в type, а другие свойства собраны в rest с использованием концепции Остальные параметры.

let entities = [{"type":"Location","text":"Marília","relevance":0.966306,"disambiguation":{"subtype":["CityTown","City"],"name":"Marília","dbpedia_resource":"http://dbpedia.org/resource/Marília"},"count":3},{"type":"Organization","text":"Associação Engenheiros, Arquitetos","relevance":0.647857,"count":1}];

entities = entities.map(({type, ...rest}) => ({...rest, desctype:type}));
console.info(entities);
 05.10.2018 15:56
Это заменит type на desctype

let data = {
  "entities": [{
      "type": "Location",
      "text": "Marília",
      "relevance": 0.966306,
      "disambiguation": {
        "subtype": [
          "CityTown",
          "City"
        ],
        "name": "Marília",
        "dbpedia_resource": "http://dbpedia.org/resource/Marília"
      },
      "count": 3
    },
    {
      "type": "Organization",
      "text": "Associação Engenheiros, Arquitetos",
      "relevance": 0.647857,
      "count": 1
    }
  ]
}


data['entities'] = data['entities'].map(function(i){

  i['desctype'] = i['type'];
  delete i['type'];

  return i

})

console.info(data)
 05.10.2018 15:58
Вы можете использовать метод lodash _.mapKeys.

const newEntities = entities.map((entity) => {
    _.mapKeys(entity, (value, key) => {
        return (key === 'type') ? 'desctype' : key;
     }
 });
 05.10.2018 15:58
fileData.findAndCountAll ({ attrib, whr }) .then (dta => { if (dta.count> 0) { res.send (dta.rows); } еще { var msg = "Запись не найдена"; res.status (404) .json ({статус: ложь, сообщение: сообщение}); } });

Добро пожаловать в StackOverflow! Пожалуйста, отформатируйте свой код и объясните, как ваш код помогает.

— 
Andrey Moiseev

Соединение docker-compose между node и mongo
Вопросы
NODE.JS
Соединение docker-compose между node и mongo
Я прочитал много примеров подключения приложений к докеру, это кажется очень простым

В моем случае у меня есть

version: '2'

services:

  mongodb:
    image: mongo
    container_name: infra-mongodb
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin
    ports:
      - 27017:27017
  service:
    build:
      context: .
    container_name: service
    restart: always
    ports:
      - 3012:3012
    depends_on:
      - mongodb
    links:
      - mongodb
Мое соединение в узле

const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://admin:admin@mongodb:27017/admin?replicaSet=rs0&slaveOk=true'
MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    console.info(err)
});
У меня следующая ошибка

{ MongoNetworkError: failed to connect to server [9d574801e4b4:27017] on first connect [MongoNetworkError: getaddrinfo ENOTFOUND 9d574801e4b4 9d574801e4b4:27017]
    at Pool.<anonymous> (/usr/src/app/node_modules/mongodb-core/lib/topologies/server.js:564:11)
    at emitOne (events.js:116:13)
    at Pool.emit (events.js:211:7)
    at Connection.<anonymous> (/usr/src/app/node_modules/mongodb-core/lib/connection/pool.js:317:12)
    at Object.onceWrapper (events.js:317:30)
    at emitTwo (events.js:126:13)
    at Connection.emit (events.js:214:7)
    at Socket.<anonymous> (/usr/src/app/node_modules/mongodb-core/lib/connection/connection.js:246:50)
    at Object.onceWrapper (events.js:315:30)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at emitErrorNT (internal/streams/destroy.js:64:8)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
  name: 'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]: {} }
Не понимаю, почему хост стал 9d574801e4b4

Когда я запускаю ping mongodb в свой контейнер, все в порядке

PING mongodb (172.21.0.3) 56(84) bytes of data.
64 bytes from infra-mongodb.app-admin_default (172.21.0.3): icmp_seq=1 ttl=64 time=0.088 ms
64 bytes from infra-mongodb.app-admin_default (172.21.0.3): icmp_seq=2 ttl=64 time=0.101 ms
64 bytes from infra-mongodb.app-admin_default (172.21.0.3): icmp_seq=3 ttl=64 time=0.102 ms
64 bytes from infra-mongodb.app-admin_default (172.21.0.3): icmp_seq=4 ttl=64 time=0.216 ms
^C
--- mongodb ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3156ms
rtt min/avg/max/mdev = 0.088/0.126/0.216/0.053 ms
 29.10.2018 17:02
0
2
395
5
 Ответы 5
По умолчанию mongo слушает только localhost. Если это для локальной разработки, просто привязать его ко всем интерфейсам:

version: '2'

services:

  mongodb:
    image: mongo
    container_name: infra-mongodb
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin
    ports:
      - 27017:27017
    command: --bind_ip_all
 29.10.2018 17:20
Только предположение, но поле depends_on в Docker Compose означает только «этот контейнер должен дождаться запуска другого». Служба внутри еще не обязательно должна быть запущена. Возможно, ваше приложение запускается слишком быстро. Сервер Mongo может быть еще не готов принимать соединения, когда ваше приложение пытается подключиться. Запустите docker-compose up, дождитесь, пока он не запустится, а затем запустите docker-compose restart service.

Если это исправит, вы, вероятно, захотите, чтобы ваше приложение повторило попытку подключения после какого-то тайм-аута, если оно не может подключиться при запуске.

 29.10.2018 19:46
Проверь это:

docker-compose.yaml

version: '2' 

services:
  nodejs:
    container_name: nodejs
    image: nexus.XXXX.com:8000/${BE_BUILD}
    restart: always
    environment:
       - dbhost=mongo
    ports:
      - "8888:8888"
    links:
      - mongo
  mongo:
    container_name: mongo
    image: nexus.XXXX.com:8000/doc/docker/proj-mongodb:latest
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin
    ports:
      - "27017:27017"
И я успешно могу подключиться по следующему URL-адресу:

const mongoUrl = mongodb://admin:admin@mongo:27017/admin?authSource=admin
Check below things that can solve the issue:
Задайте имя dbHost из конфигурации NodeJS.
Свяжите контейнер mongo из конфигурации NodeJS.
Используйте имя контейнера для подключения.
Проверьте, требуется ли authSource URL-адрес.
 30.10.2018 09:18
Просто найдите проблему, я не очень понимаю, как это работает ...

version: '2'

services:

  mongodb:
    image: mongo
    container_name: infra-mongodb
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin
    ports:
      - 27017:27017
    networks:
      service-network:
        aliases:
            - localhost
  service:
    build:
      context: .
    container_name: service
    restart: always
    ports:
      - 3012:3012
    depends_on:
      - mongodb
    links:
      - mongodb

networks:
  app-admin-network:
    driver: bridge
 30.10.2018 10:19
Журнал создания докеров не отображается, но. была аналогичная проблема сегодня. Решено с помощью небольшого сценария, который я сделал. жди-монго В вашем файле докеров добавьте это:

RUN npm install -g wait-for-mongodb-slim

## Launch the wait tool and then your application
CMD wait-for-mongo --uri $MONGO_URI --t 2.5 && npm start
где --t - это значения, пока он не проверит снова.

и в вашем сочинении добавьте uri в качестве переменной среды:

environment:
   MONGO_URI: mongodb://usr:pw@containername:27017/dbname

Angular 6 json object pipe не отображает данные
Вопросы
HTML
Angular 6 json object pipe не отображает данные
У меня есть html-файл, который пытается отображать задачи для проекта. Задачи содержатся в массиве ref внутри схемы проекта, которую я получаю от MongoDB. Когда я пробую код ниже:

<div class = "card-body">
    {{project.taskName | json}}
</div>
Он отображает весь объект задачи следующим образом

[ { "project": [ "5bd973fe33bd3a09586c8eb2" ], "user": [], "_id": "5bd9776833bd3a09586c8eb3", "taskName": "Test task", "taskDescription": "This task is a test", "__v": 0 } ]

Если я попробую {{project.task.taskName | json}} ничего не отображается. Как мне заставить html отображать название и описание задачи? Спасибо!

Обновлено: полезная нагрузка json, которую я получаю

[
    {
        "team": [],
        "task": [
            {
                "project": [
                    "5bd973fe33bd3a09586c8eb2"
                ],
                "user": [],
                "_id": "5bd9776833bd3a09586c8eb3",
                "taskName": "Test task",
                "taskDescription": "This task is a test",
                "__v": 0
            }
        ],
        "_id": "5bd973fe33bd3a09586c8eb2",
        "projectName": "Test project",
        "projectDescription": "This is a test project",
        "__v": 1
    }
]
 31.10.2018 11:33
0
0
1 460
5
Данный вопрос помечен как решенный
 Ответы 5
Вы не должны использовать | json с оператором точки, если вам нужно распечатать весь объект, используйте

<div class = "card-body">
    {{project | json}}
</div>
если вам нужно taskName

<div class = "card-body">
    {{project.taskName}}
</div>
РЕДАКТИРОВАТЬ

Вам нужно получить доступ с помощью индекса, так как это массив

   <div class = "card-body">
        {{project[0].taskName}}
   </div>
 31.10.2018 11:35
Вы можете передать объект по конвейеру, используя JSON {{project.task | json }}. В вашем случае project.task.taskName не является объектом, это строка. Таким образом, нет необходимости в конвейере JSON. Вы можете просто использовать {{ project.taskName }}

 31.10.2018 11:36
The best would be to have a small function which gets only the desired properties like taskName and taskDescription.

 getCustomProjects() {
    return this.project.map(p => {
      return {
        name: p.taskName,
        taskDescription: p.taskDescription
      }
    });
  }
html

<div class = "card-body">
    {{ getCustomProjects() | json}}
</div>
Примечание: вы можете вызвать getCustomProjects и построить новый массив, если в ts вместо html.

Рабочая демонстрация здесь - https://stackblitz.com/edit/angular-2chhvd

 31.10.2018 11:44
 Ответ принят как подходящий
Я подозреваю, что проблема связана с тем, что ваша полезная нагрузка (проект) представляет собой массив.

Это должно работать нормально: {{project.taskName [0] .taskName | json}}

надеюсь, это поможет

 31.10.2018 11:46
Этот код работает для меня

array

abc = [
    {
      'team': [''],
      'task': [
        {
          'project': [
            '5bd973fe33bd3a09586c8eb2'
          ],
          'user': [''],
          '_id': '5bd9776833bd3a09586c8eb3',
          'taskName': 'Test task',
          'taskDescription': 'This task is a test',
          '__v': 0
        }
      ],
      '_id': '5bd973fe33bd3a09586c8eb2',
      'projectName': 'Test project',
      'projectDescription': 'This is a test project',
      '__v': 1
    }
    ];
html

<div class= = "card-body">
  {{abc[0].task[0].taskName}}
</div>

Аутентификация Mongo внутри Docker
Вопросы
MONGODB
Аутентификация Mongo внутри Docker
Я пытаюсь запустить образ докера mongo с аутентификацией. Следуя простейшему примеру из документация, я запустил изображения mongo и mongo-express с помощью команды docker-compose up. Мой docker-compose.yml на данном этапе:

version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
Это работает, оба контейнера запускаются нормально, и я могу просматривать содержимое mongo с веб-сайта mongo-express. Однако всякий раз, когда я меняю имя пользователя или пароль в файле docker-compose.yml, например, на это:

version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example123

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example123
mongo-express выдает несанкционированное сообщение об ошибке:

mongo-express_1  | Admin Database connected
mongo-express_1  | { MongoError: Authentication failed.
mongo-express_1  |     at Function.MongoError.create (/node_modules/mongodb-core/lib/error.js:31:11)
mongo-express_1  |     at /node_modules/mongodb-core/lib/connection/pool.js:483:72
mongo-express_1  |     at authenticateStragglers (/node_modules/mongodb-core/lib/connection/pool.js:429:16)
mongo-express_1  |     at Connection.messageHandler (/node_modules/mongodb-core/lib/connection/pool.js:463:5)
mongo-express_1  |     at Socket.<anonymous> (/node_modules/mongodb-core/lib/connection/connection.js:319:22)
mongo-express_1  |     at emitOne (events.js:116:13)
mongo-express_1  |     at Socket.emit (events.js:211:7)
mongo-express_1  |     at addChunk (_stream_readable.js:263:12)
mongo-express_1  |     at readableAddChunk (_stream_readable.js:250:11)
mongo-express_1  |     at Socket.Readable.push (_stream_readable.js:208:10)
mongo-express_1  |   name: 'MongoError',
mongo-express_1  |   message: 'Authentication failed.',
mongo-express_1  |   ok: 0,
mongo-express_1  |   errmsg: 'Authentication failed.',
mongo-express_1  |   code: 18,
mongo-express_1  |   codeName: 'AuthenticationFailed' }
mongo-express_1  | unable to list databases
mongo-express_1  | { MongoError: command listDatabases requires authentication
mongo-express_1  |     at Function.MongoError.create (/node_modules/mongodb-core/lib/error.js:31:11)
mongo-express_1  |     at /node_modules/mongodb-core/lib/connection/pool.js:483:72
mongo-express_1  |     at authenticateStragglers (/node_modules/mongodb-core/lib/connection/pool.js:429:16)
mongo-express_1  |     at Connection.messageHandler (/node_modules/mongodb-core/lib/connection/pool.js:463:5)
mongo-express_1  |     at Socket.<anonymous> (/node_modules/mongodb-core/lib/connection/connection.js:319:22)
mongo-express_1  |     at emitOne (events.js:116:13)
mongo-express_1  |     at Socket.emit (events.js:211:7)
mongo-express_1  |     at addChunk (_stream_readable.js:263:12)
mongo-express_1  |     at readableAddChunk (_stream_readable.js:250:11)
mongo-express_1  |     at Socket.Readable.push (_stream_readable.js:208:10)
mongo-express_1  |   name: 'MongoError',
mongo-express_1  |   message: 'command listDatabases requires authentication',
mongo-express_1  |   ok: 0,
mongo-express_1  |   errmsg: 'command listDatabases requires authentication',
mongo-express_1  |   code: 13,
mongo-express_1  |   codeName: 'Unauthorized' }
Независимо от того, какое имя пользователя или пароль я ввожу в docker-compose.yml, я не могу подключить mongo-express к mongo, только если я использую исходную пару root и example.

Обратите внимание, что я не получаю имя пользователя и пароль как переменные среды, но они напрямую вводятся в файл docker-compose.yml, как вы можете видеть здесь.

Также обратите внимание, что когда я меняю переменные MONGO_INITDB_ROOT_USERNAME и MONGO_INITDB_ROOT_PASSWORD (mongo) на что-либо, они, похоже, не действуют, я все еще могу подключиться к mongo-express, используя исходные учетные данные root и example.

Что вызывает такое поведение? Как я могу заставить это работать?

 27.11.2018 23:30
17
3
14 796
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Ваша команда docker-compose:

docker-compose up --build --force-recreate    
Образ Mongo использует анонимные тома, поэтому вам также понадобится --renew-anon-volumes (док):

docker-compose up --build --force-recreate --renew-anon-volumes
В противном случае используется предыдущий том с уже инициализированной БД => переменные env INITDB не будут использоваться.

 28.11.2018 00:43
В моем случае мне пришлось сначала остановить все свои контейнеры.

Тогда docker system prune -a --volumes

⚠️ Это последнее средство. Перед использованием этой команды проверьте докер документ,

 04.12.2020 14:25
Если вы создадите контейнер mongodb (docker-compose up создаст / извлечет образ и запустит контейнер), указав ему имя пользователя и пароль, mongodb настроится при первом запуске и никогда больше! Пока вы не создадите новый контейнер для этой службы, пользователь / пароль по умолчанию будут теми, которые были установлены изначально. Если вы хотите изменить значение по умолчанию, необходимо создать новый контейнер. Вы также можете добавлять пользователей после запуска контейнера.

Только остановка служебных контейнеров (docker-compose stop) не уничтожит контейнер. Для этого вызовите docker-compose down или при запуске вызовите docker-compose up --force-recreate.

С Уважением

 07.01.2021 14:19
Команда docker system prune -a --volumes может решить проблему, но гораздо более простой способ (если вы монтируете том данных, чтобы db был постоянным), вы можете просто удалить и воссоздать новый, таким образом, другие тома останутся нетронутыми. И, конечно же, объедините его с: docker-compose up --build --force -create --renew-anon-volume

 02.02.2021 15:21
Для меня сработало просто добавление переменной окружения для сервера mongodb.

ME_CONFIG_MONGODB_SERVER: mongo
нравится:

version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_SERVER: mongo
Это было для меня, было какое-то время и, кажется, хост по умолчанию был удален в какой-то момент.

— 
dogmatic69
 12.07.2021 22:37
это просто безумие, потому что на странице докеров mongo-express говорится, что по умолчанию используется mongo, но, видимо, его тоже нужно предоставить

— 
lulliezy
 13.07.2021 08:21
Когда ME_CONFIG_MONGODB_SERVER - это имя контейнера mongodb, а не имя хоста.

Как запустить запрос последовательно в цикле?
Вопросы
JAVASCRIPT
Как запустить запрос последовательно в цикле?
Это псевдокод того, чего я пытаюсь достичь. Сначала мне нужно получить список URL-адресов из тела запроса, затем передать эти URL-адреса для функции запроса (с использованием модуля запроса), которая получит данные с каждого URL-адреса, а затем сохранит эти данные в MongoDB. Только после того, как все запросы будут завершены, включая сохранение данных на сервере, он должен отправить ответ.

app.post('/', (req, resp) => {

    const { urls } = req.body;

    urls.forEach((url, i) => {

        request(url, function (err, resp, body) {

            if (err) {
                console.info('Error: ', err)
            } else {
                // function to save data to MongoDB server
               saveUrlData(body);
               console.info(`Data saved for URL number - ${i+1}`)
            }
        })
    });

    // Should be called after all data saved from for loop
    resp.send('All data saved')
})
Я пробовал этот код, и, конечно же, функция resp.send () будет работать, не беспокоясь о том, завершился ли запрос. Используя этот код, я получаю на консоли следующий результат:

Data saved for URL number - 3
Data saved for URL number - 1
Data saved for URL number - 5
Data saved for URL number - 2
Data saved for URL number - 4
Я мог бы записать их во вложенной форме, но переменная urls может иметь любое количество URL-адресов, и поэтому она должна быть в цикле, по крайней мере, с моего понимания. Я хочу, чтобы запросы выполнялись последовательно, т.е. он должен разрешать 1-й URL-адрес, а затем второй и так далее, и когда все URL-адреса выполнены, только тогда он должен ответить. Пожалуйста помоги!

 11.12.2018 07:20
0
1
1 001
5
 Ответы 5
Вы должны посмотреть Обещания JavaScript

В противном случае вы можете сделать рекурсивный запрос следующим образом:

app.post('/', (req, resp) => {

    const { urls } = req.body;

    sendRequest(urls, 0);
})

function sendRequest(urlArr, i){

    request(urlArr[i], function (err, resp, body) {
      if (err) {
           console.info('Error: ', err)
      }
      else {
           saveUrlData(body);
           console.info(`Data saved for URL number - ${i+1}`)
      }

      i++;
      if (i == urlArr.length) resp.send('All data saved') //finish
      else sendRequest(urlArr, i); //send another request
   })
}
Все, что мне нужно было сделать, это создать отдельную функцию, которую я могу вызывать снова и снова, передавая в качестве аргументов массив URL-адресов и базовый индекс 0. Каждый успешный обратный вызов увеличивает индексную переменную, которую я снова передаю в ту же функцию. Промойте и повторяйте, пока мой индекс не достигнет длины массива url, я остановлю рекурсивный цикл оттуда.

 11.12.2018 07:29
app.post('/', async (req, resp) => {

    const {
        urls
    } = req.body;

    for (const url of urls) {
        try {
            const result = await doRequest(url)
            console.info(result)

        } catch (error) {
            // do error processing here 
            console.info('Error: ', err)
        }
    }
})

function doRequest(url) {
    return new Promise((resolve, reject) => {
        request(url, function(err, resp, body) {
            err ? reject(err) ? resolve(body)
        })    
    })    
}
using async await

 11.12.2018 07:37
Вы хотите подождать, пока весь ответ api вы получите и сохраните в db, поэтому вам следует выполнить async-await и обещать весь ответ. Вы можете использовать модуль Request-Promise вместо request. Таким образом, вы будете получать обещание при каждом запрошенном вызове API вместо обратного вызова. И используйте обещание.all для подталкивания всех вызовов запросов (модулей) внутри массива. Используя async-await, выполнение кода будет ждать, пока все вызовы api не получат ответ и не сохранятся в db.

const rp = require('request-promise');
app.post('/', async (req, res) => {
  try{
   const { urls } = req.body;
    // completed all will have all the api resonse. 
    const completedAll = await sendRequest(urls);
    // now we have all api response that needs to be saved
    // completedAll is array
    const saved = await saveAllData(completedAll);
    // Should be called after all data saved from for loop
    res.status(200).send('All data saved')
  }
  catch(err) {
   res.status(500).send({msg: Internal_server_error})
 }
})

function sendRequest(urlArr, i){
    const apiCalls = [];
    for(let i=0;i < urlArr.length; i++){
      apiCalls.push(rp(urlArr[i]));
    }
    // promise.all will give all api response in order as we pushed api call
    return Promise.all(apiCalls);
}
Вы можете сослаться на эти ссылки: https://www.npmjs.com/package/request-promisehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

 11.12.2018 07:48
Глядя на намерение (поисковый робот), вы можете использовать Promise.all, потому что URL-адреса не зависят друг от друга.

app.post('/', (req, resp) => {

    const { urls } = req.body;

    const promises = urls.map((url, i) => {
        return new Promise((resolve, rej)=>{
            request(url, function (err, resp, body) {
                if (err) {
                    rej(err);
                } else {
                   resolve(body);
                }
            })
        })
        .then((body)=>{
            //this should definitely be a promise as you are saving data to mongo
            return saveUrlData(body);
        })
    });

    // Should be called after all data saved from for loop
    Promise.all(promises).then(()=>resp.send('All data saved'));
})
Примечание. Также необходимо выполнить обработку ошибок.

 11.12.2018 08:01
есть несколько способов решить эту проблему.

вы можете использовать async/await

Обещания

вы также можете использовать асинхронная библиотека

app.post('/', (req, res, next) => {
    const { urls } = req.body;

    async.each(urls, get_n_save, err => {
        if (err) return next(err);
        res.send('All data saved');
    });

    function get_n_save (url, callback) {
        request(url, (err, resp, body) => {
            if (err) {
                return callback(err);
            }
            saveUrlData(body);
            callback();
        });
    }
});

«Ошибка тайм-аута выбора сервера» Драйвер MongoDB Go с Docker
Вопросы
MONGODB
«Ошибка тайм-аута выбора сервера» Драйвер MongoDB Go с Docker
Я работаю над очень простой (как мне показалось) стартовой программой на Go с использованием MongoDB и Docker. Попытка разобраться с ними, прежде чем мы начнем использовать их на работе. У меня MongoDB работает в контейнере докеров, просто используя мой локальный хост, используя официальный образ Docker. Это работает нормально, я могу подключиться к нему через MongoDB Compass и изменить БД.

Моей следующей задачей было создать отдельный контейнер Docker, который может читать и писать в БД. Я использую для этого MongoDB-Go-Driver (https://godoc.org/github.com/mongodb/mongo-go-driver/mongo), так как mgo больше не поддерживается.

Это мой код, я просто следую многочисленным онлайн-руководствам, чтобы установить простое соединение, а затем пинговать БД, чтобы обеспечить соединение.

client, err := mongo.Connect("mongodb://localhost:27017")

if err != nil {
    log.Fatal("error ", err)
}

// Check the connection
err = client.Ping(context.TODO(), nil)

if err != nil {
    log.Fatal("error2 ", err)
}

fmt.Println("Connected to MongoDB!")
Он всегда терпит неудачу при выполнении каких-либо операций с БД (Find, FindOne, Ping и т. д.) С error2 server selection timeout.

Это мой файл для создания докеров, который я использую.

version: "3"

services:
  datastore:
    image: mongo
    ports: 
      - "27017:27017"
    networks: 
      - maccaptionNet
    volumes: 
      - .:/go/src/maccaption_microservice/dbdata
  jobservice:
    image: jobservicemaccaption:1.0
    networks:
      - maccaptionNet
    depends_on:
      - "datastore"


networks: 
  maccaptionNet:
    driver: bridge
Я новичок в MongoDB, и после нескольких часов исследований не добился никакого прогресса в этом. Прочитал https://docs.mongodb.com/manual/core/read-preference-mechanics/https://docs.mongodb.com/manual/replication/

Может ли кто-нибудь указать мне правильное направление для этого? Мне не удалось найти много информации по этой конкретной проблеме.

Спасибо!

 21.12.2018 17:04
11
5
19 844
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Когда вы запускаете службу и mongodb в докере, вы не можете использовать localhost, поскольку служба находится в другом контейнере, чем mongodb, и с точки зрения докера она находится под другим IP-адресом.

Вы можете подключиться с именем службы, указанным в docker-compose datastore

mongo.Connect("mongodb://datastore:27017")
Редактировать:

из: https://docs.docker.com/compose/networking/

By default Compose sets up a single network for your app. Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by them at a hostname identical to the container name

Это означает, что если вы запускаете несколько контейнеров через compose, вы можете получить доступ к одному контейнеру из другого по имени контейнера,

Обычно при запуске docker-compose настраивает сеть, и каждый контейнер в составе присоединяется к сети под своим именем контейнера. С точки зрения контейнера, localhost - это просто сам контейнер, в то время как он может искать имя другого контейнера и получать обратно IP-адрес контейнера.

Предполагая, что докер работает на вашем локальном хосте, вы можете установить имя в файле etc/hosts следующим образом:

127.0.0.1 datastore
(если не просто заменить 127.0.0.1 на ip докера)

А в приложении вы подключитесь к mongodb://datastore:27017

Таким образом, вы сможете запускать службу как в докере, так и извне, если вы решите запускать только db в докере.

docker-compose start datastore
 21.12.2018 17:31
Если вы подключаетесь к одному докеру из другого (как это написано в вашем файле docker-compose, и используете сетевой режим bridge, вам необходимо изменить свой localhost на имя хоста, например datastore

client, err := mongo.Connect("mongodb://datastore:27017")
Когда ваш скрипт go использует localhost, он ожидает, что база данных будет находиться в том же докере.

 21.12.2018 17:31
Как-то я решил эту проблему другим способом: заменив ports с "27018:27017" на "27017:27017". IDK, почему это помогает. Может быть, если Mongo видит не порт по умолчанию, он думает, что есть кластер узлов Mongo.

 20.04.2019 21:13
Я думаю, что мой ответ может быть не связан, но все же я получал ту же ошибку, потому что мой IP-адрес не был указан на вкладке белого списка IP в атласе MongoDB, поэтому убедитесь, что у вас есть свой IP-адрес, прежде чем пытаться подключиться.

 09.02.2020 11:48
У меня была такая же проблема, но я нашел другой способ решить эту проблему. Вы можете просто передать сетевой параметр при запуске образа докера, и таким образом докер указывает на исправление localhost.

docker run --network = "host" ....

Источник этого решения

Ошибка подключения к кластеру MongoDB Atlas
Вопросы
MONGODB
Ошибка подключения к кластеру MongoDB Atlas
У меня возникла проблема с подключением к моему кластеру MongoDB Atlas через Node.js, express и mongoose:

{ MongoNetworkError: connection 4 to mongodb-passport-auth-shard-00-00-vp7yg.mongodb.net:27017 closed
    at TLSSocket.<anonymous> (C:\Users\Vishesh\Documents\Projects\nodejs-passport-auth\node_modules\mongodb-core\lib\connection\connection.js:276:9)
    at Object.onceWrapper (events.js:273:13)
    at TLSSocket.emit (events.js:187:15)
    at _handle.close (net.js:606:12)
    at TCP.done (_tls_wrap.js:386:7)
  name: 'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]: {} }
Вот код, который я использовал для подключения к моему кластеру через короткую строку подключения SRV:

mongoose
  .connect(
    'mongodb+srv://myname:mypwd@myapp-vp7yg.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(() => console.info("Connected to mongodb..."))
  .catch(err => console.info(err));
 29.12.2018 19:43
9
3
8 314
5
 Ответы 5
Я думаю, вы должны добавить свой IP-адрес в Белый список IP-адресов в консоли mongoDB.atlas.

mongoDB.atlass console

 16.04.2019 09:30
Я получал ту же ошибку, вот решение, которое разрешило эту проблему. Добавьте свой IP-адрес в белый список IP-адресов.

Надеюсь на это.



 22.04.2019 19:49
Обновите свой метод mongoose.connect, чтобы избежать предупреждений об устаревании

mongoose.connect(
  mongoAtlasUri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.info(" Mongoose is connected")
);
Если вы не знаете свой IP-адрес, вы также можете указать этот IP-адрес - 0.0.0.0/0, но рекомендуется использовать ваш собственный IP-адрес.



 09.11.2020 20:22
Я недавно столкнулся с этой проблемой, это какая-то ошибка со стороны altas. Даже если вы разрешили все IP-адреса, которые есть в атласе, он все равно будет выдавать ту же ошибку.

Способ исправить это, добавив свой IP-адрес местоположения. У вас есть специальный белый список для вашего собственного IP, что немного странно, учитывая, что вы разрешили все.

У меня это сработало, надеюсь, это поможет и другим.

 18.03.2021 20:08
Я получал ошибку

MongoNetworkError: connection 1 to ......-shard-00-00.b2zap.mongodb.net:27017 closed
даже если я добавил разрешить доступ из любого места в белом списке IP.

После добавления моего IP-адреса и разрешения доступа из любого места у меня это сработало.

Ошибка: querySrv ENODATA _mongodb._tcp.blog-cluster-0hb5z.mongodb.net в QueryReqWrap.onresolve [как oncomplete]
Вопросы
JAVASCRIPT
Ошибка: querySrv ENODATA _mongodb._tcp.blog-cluster-0hb5z.mongodb.net в QueryReqWrap.onresolve [как oncomplete]
Похоже, я больше не могу подключиться к своему бесплатному кластеру Mongo Atlas. Все работало, и у меня есть данные, которые были собраны, когда я просматриваю веб-сайт MongoDB, поэтому я понятия не имею, почему он перестал работать и больше не может подключаться. Весь мой сайт не загружается.

Это ошибка, которую я получал:

{ Error: querySrv ENODATA _mongodb._tcp.blog-cluster-0hb5z.mongodb.net
    at QueryReqWrap.onresolve [as oncomplete] (dns.js:197:19)
  errno: 'ENODATA',
  code: 'ENODATA',
  syscall: 'querySrv',                                                                  Blog/app.js:54:14
  hostname: '_mongodb._tcp.blog-cluster-0hb5z.mongodb.net' }
 01.02.2019 18:48
9
2
14 149
5
 Ответы 5
У меня возникла эта проблема, когда я попытался получить доступ к атласу MongoDB в кафе. Раньше он работал идеально, но внезапно выдал мне эту точную ошибку. Я не уверен, почему, я не могу дать вам все детали, но что исправило это для меня, так это переход к моему кластеру и подключение к стандартная строка подключения. Я скопировал и вставил эту более длинную строку подключения, и после ввода пароля и его настройки у меня это сработало. Надеюсь, это помогло.

 25.02.2019 17:50
По какой-то причине DNS-сервер не возвращал записи srv, изменение DNS-сервера на тот, который возвращает эти записи, устранило проблему. (Я использовал https://use.opendns.com/, чтобы исправить это)

 02.05.2019 09:08
У меня была такая же проблема, когда я работал в Starbucks, пошел домой, и он сразу же подключился, попробуйте другое соединение Wi-Fi.

 03.08.2019 00:18
Для меня эта проблема возникала только в кофе Starbucks и была чем-то случайным, OpenDNS не работал у меня, ни Google DNS, ни какие-либо другие попытки, забавно, потому что дома отлично работает. Раньше я использовал строковый формат mongodb+srv для подключения внутри «uri», используя Mongoid и Ruby с файлом конфигурации mongoid.yml.

Чтобы решить эту проблему, обязательно следуйте конфигурации, описанной в этой ссылке https://docs.atlas.mongodb.com/драйвер-соединение/ (пример Mongoid).

production:
  # Configure available database clients. (required)
  clients:
    # Defines the default client. (required)
    default:
      # Defines the name of the default database that Mongoid can connect to.
      # (required).
      database: 'myDatabaseName'

      # Provides the hosts the default client can connect to. Must be an array
      # of host:port pairs. (required)
      hosts:
        - mycluster0-shard-00-00.mongodb.net:27017
        - mycluster0-shard-00-01.mongodb.net:27017
        - mycluster0-shard-00-02.mongodb.net:27017
      options:
        # The name of the user for authentication.
        user: kay

        # The password of the user for authentication.
        password: myRealPassword

        # The database or source to authenticate the user against. If the database
        # specified above is not admin, admin MUST be specified here.
        auth_source: admin

        # All Atlas servers use SSL. (default: false)
        ssl: true
 19.08.2019 00:03
В некоторых случаях это происходит, когда ваш IP-адрес не занесен в белый список кластера MongoDB Atlas. Вот почему он работает с вашим IP-адресом дома, где вы изначально зарегистрировали свою учетную запись, но не работает с Wi-Fi в кафе или где-либо еще.

Поэтому убедитесь, что ваш текущий IP-адрес добавлен в ваш кластер MongoDB.

Кластер Amazon DocumentDB с ошибкой соединения Mongo из приложения
Вопросы
MONGODB
Кластер Amazon DocumentDB с ошибкой соединения Mongo из приложения
Я пытаюсь настроить экземпляр Amazon EB для работы с DocumentDB. Когда я пытаюсь подключиться к терминалу amazon linux, соединение работает нормально. Но когда я пытаюсь подключиться к PHP, он возвращает ошибку, показанную ниже.

"No suitable servers found (serverSelectionTryOnceset): [socket timeout calling ismaster on 'docdb-XXXX-XX-XX-XX-XX-XX.cluster-cXXXXXXXXXX.eu-west-1.docdb.amazonaws.com:27017']"

Я устранил неполадки с терминалом и получил "успешно!" которые снова указывают на успешное соединение.

nc -zv docdb-docdb-XXXX-XX-XX-XX-XX-XX.cluster-cXXXXXXXXXX.eu-west-1.docdb.amazonaws.com 27017

Кто-нибудь знает, что может быть не так?

Вот мой код для подключения к DocumentDB

$conn = new MongoClient("mongodb://username:password@docdb-docdb-XXXX-XX-XX-XX-XX-XX.cluster-cXXXXXXXXXX.eu-west-1.docdb.amazonaws.com:27017/?ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0");



MONGODB_URI не определен
Вопросы
NODE.JS
MONGODB_URI не определен
Пытаюсь создать чат-бота Facebook по этому руководству: https://medium.com/@viviancpy/part-1-facebook-chatbot-with-heroku-webhook-b14090a136c7

У меня вообще нет опыта работы с узлом и JavaScript, в основном только с Python. Поэтому я просто копирую и вставляю код с GitHub, но когда я пытаюсь его запустить (как описано в шаге 4, с «запуском пряжи»), я получаю эту ошибку:

MongooseError: параметр uri для openUri() должен быть строкой, получившей значение «undefined». Убедитесь, что первым параметром mongoose.connect() или mongoose.createConnection() является строка.

Итак, я просмотрел код и нашел это:

const MONGODB_URI = process.env.MONGODB_URI;
var db = mongoose.connect(MONGODB_URI);
Так что в Python, по крайней мере, это будет означать, что константа MONGODB_URI не определена, но я не могу понять, почему. Возможно, мне не хватает пакета (кажется, он называется), или это проблема, связанная с тем, что я запускаю этот код в Windows, или что-то совершенно другое. Я также пытался гуглить, но либо я не понимаю ответа, либо не могу найти ответ.

 23.04.2019 17:45
1
3
5 594
5
Данный вопрос помечен как решенный
 Ответы 5
const MONGODB_URI = process.env.MONGODB_URI;

Эта строка означает, что вы пытаетесь получить URI соединения mongo из среды машины, вам нужно убедиться, что вы действительно установили его там, чтобы это работало.

 23.04.2019 17:47
Попробуйте сделать что-то вроде этого:

MONGODB_URI=http://localhost:27017 node index.js
Замените index.js своим скриптом (и uri, если это необходимо)

Но я думаю, вы можете использовать пакет дотнев

 23.04.2019 17:51
 Ответ принят как подходящий
От Документация Node JS по процессу

The process.env property returns an object containing the user environment.

Прочитайте этот статья на process.env для лучшего понимания. Я собираюсь процитировать статью о том, что такое process.env для целей TL;DR.

The process.env global variable is injected by the Node at runtime for your application to use and it represents the state of the system environment your application is in when it starts. For example, if the system has a PATH variable set, this will be made accessible to you through process.env.PATH which you can use to check where binaries are located and make external calls to them if required.

При этом проблема, с которой вы столкнулись, заключается в том, что ваша переменная MONGODB_URI равна undefined, как говорит ваша ошибка, потому что вы никогда ее не определяли. Причина, по которой статья, за которой вы следили, сделала это, заключается в том, что автор развертывает ее на HEROKU, и она автоматически запускается там. Итак, чтобы решить вашу проблему (если вы хотите запустить приложение локально)

1) Загрузите и установите MongoDB (если вы еще этого не сделали).

2) В вашем Package.JSON конкретно в "start": "node index.js". Вы можете обновить сценарий запуска до "start": "MONGODB_URI=http://localhost:27017 node index.js" (из ответа Фрути). (Локальный сервер Mongo запускается на ПОРТ 27017 по умолчанию). Это сначала установит Mongo_URI в локальный экземпляр вашего Mongo в вашей системе. Затем запустите файл Index.js

 23.04.2019 21:56
Правильный способ сделать это — создать файл с именем «.env» в корневом каталоге вашего проекта, откуда вы запускаете «heroku local».

Используя этот файл, heroku-cli создаст среду с соответствующими переменными среды.

Шаг 1: Узнайте свой фактический MONGODB_URI.

Шаг 2: Создайте файл .env

Шаг 3. Запишите строку MONGODB_URI='your-actual-mongodb_uri' в файл .env.

Шаг 4: Начните процесс с «heroku local»

Теперь ваш процесс может получить доступ к process.env.MONGODB_URI, как если бы он был развернут непосредственно на героку.

 02.06.2020 14:18
Создайте файл с именем «.env.local» в корне и добавьте в него следующее:

MONGODB_URI=mongodb+srv://имя пользователя:пароль@cluster0.9mmia.mongodb.net/имя-базы-данных-внутри-mongodb?retryWrites=true&w=majority MONGODB_DB = имя-базы-данных-внутри-mongodb

Как исправить «Не удалось создать экземпляр« className »с использованием конструктора NO_CONSTRUCTOR с аргументами» в неизменяемом классе
Вопросы
JAVA
Как исправить «Не удалось создать экземпляр« className »с использованием конструктора NO_CONSTRUCTOR с аргументами» в неизменяемом классе
Я использую MongoDBRepository при весенней загрузке, и когда я сохраняю какой-либо объект в базе данных, все в порядке. но когда я нахожу объект по идентификатору, весна не позволяет этого сделать.

Я пытаюсь изменить тип VehicleRoutingProblemSolution на тип объекта, но у VehicleRoutingProblemSolution есть другое поле объекта PickupService, и у него нет конструктора по умолчанию. И да, этот класс имеет неизменяемый... Я не могу создавать конструкторы по умолчанию, что я могу сделать?

import com.fasterxml.jackson.annotation.JsonProperty;
import com.graphhopper.jsprit.core.problem.solution.VehicleRoutingProblemSolution;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vrp_solutions")
public class VrpSolutionHolder {
    // Specifies the solution id
    @Id
    @JsonProperty("id")
    private String id;

    // Specifies the solution id
    @JsonProperty("solution")
    private VehicleRoutingProblemSolution vehicleRoutingProblemSolution;

    // Created at timestamp in millis
    @JsonProperty("created_at")
    private Long created_at = System.currentTimeMillis();


    public VrpSolutionHolder(String id, VehicleRoutingProblemSolution vehicleRoutingProblemSolution) {
        this.id = id;
        this.vehicleRoutingProblemSolution = vehicleRoutingProblemSolution;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public VehicleRoutingProblemSolution getVehicleRoutingProblemSolution() {
        return vehicleRoutingProblemSolution;
    }

    public void setVehicleRoutingProblemSolution(VehicleRoutingProblemSolution vehicleRoutingProblemSolution) {
        this.vehicleRoutingProblemSolution = vehicleRoutingProblemSolution;
    }

    public Long getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Long created_at) {
        this.created_at = created_at;
    }
}

org.springframework.web.util.NestedServletException: Request processing failed; nested exception is org.springframework.data.mapping.model.MappingInstantiationException: Failed to instantiate com.graphhopper.jsprit.core.problem.solution.VehicleRoutingProblemSolution using constructor NO_CONSTRUCTOR with arguments

 24.04.2019 12:14
6
0
9 020
5
Данный вопрос помечен как решенный
 Ответы 5
Если ваш фреймворк требует (видимый) конструкторы без аргументов (плюс сопутствующие сеттеры), а класс, который у вас есть, требуется, чтобы остаться как есть, то вы можете свернуть свое собственное, скажем, MutableVehicleRoutingProblemSolution, где в сеттерах вы могли бы иметь:

this.vehicleRoutingProblemSolution = new VehicleRoutingProblemSolution(vehicleRoutingProblemSolution.getId(), newSolution);
Таким образом, ваше решение MutableVehicleRoutingProblemSolution охватывает существующее решение VehicleRoutingProblemSolution.

Хакерский запах к нему, но он соответствует требованиям.

(Или вы можете попытаться найти инструмент, который может использовать не аннотации к содержащимся полям, а аннотации к аргументам конструктора.)

 24.04.2019 13:01
 Ответ принят как подходящий
Я столкнулся с той же проблемой. Постоянный неизменяемый класс, содержащий экземпляры других классов, вызывающий вышеупомянутое исключение при получении этим методом репозитория:

public interface ProjectCodeCacheRepository extends MongoRepository<CachedCode, String> {
    public CachedCode findByCode(String code);  
    public List<CachedCode> findByClientId(UUID clientId);
}
...
List<CachedCode> cachedForClient = this.codeCacheRepo.`**findByClientId**`(clientId);
...
Следуя подсказкам Эрвина Смаутса, это хорошо исправлено, если дать ему специальный конструктор с аннотацией org.springframework.data.annotation.PersistenceConstructor вот так:

@Document(collection = "cachedcodes")
public class CachedCode {
    
    @PersistenceConstructor
    public CachedCode(String code, UUID clientId, LocalDateTime expiration) {
        this.code = code;
        this.clientId = clientId;
        this.expiration = expiration;
    }
    
    public CachedCode(String code, UUID clientId, long secondsExpiring) {
        this.code = code;
        this.clientId = clientId;
        this.expiration = LocalDateTime.now().plusSeconds(secondsExpiring);
    }
    
    
    public UUID getClientId( ) {
        return this.clientId;
    }
            
    public String getCode() {
        return this.code;
    }
        
    public boolean hasExpired(LocalDateTime now) {
        return (expiration.isBefore(now));
    }
    
    ...
    @Id
    private final String code;
    private final UUID clientId;
    private final LocalDateTime expiration;
}
Итак, вы должны проверить, есть ли у вашего VehicleRoutingProblemSolution а) конструктор, который соответствует полям базы данных (проверьте в клиенте mongo) и б) аннотирован, чтобы быть тем, который используется драйвером (или любой другой частью магии Spring под капотом).

 25.09.2019 16:40
Это проблема, когда соответствующий класс не имеет конструктора без аргументов, например - я столкнулся с проблемой с java.io.File.

Решение:
В общем, измените объявление на класс Object и преобразуйте, где мы используем класс.

от

class MyClass{

    File myfile;

}
к

class MyClass{

    Object myFile;

}
 24.09.2021 08:57
Для тех, кто использует ломбок, вам нужно удалить аннотацию @Builder в своем классе и использовать вместо нее @Data или следовать приведенному выше решению, чтобы предоставить специализированный конструктор.

 04.10.2021 17:15
Как ни странно, я получил это, когда попытался украсить пользовательский интерфейс с помощью...

@Document(collection = "Person")
Пример:

package test.barry.interfaces;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.UpdateDefinition;


@Document(collection = "Person")
public interface CustomRepository
{
    void updatex(Query filterPredicate, UpdateDefinition updatePredicate);
}

Как исправить: «MongoError: ошибка аутентификации» @MongoDB Atlas
Вопросы
NODE.JS
Как исправить: «MongoError: ошибка аутентификации» @MongoDB Atlas
Я подключаюсь к MongoDB Atlas и получаю ошибку аутентификации.

это моя строка подключения:

mongodb://user:<password>@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true
Вот что я получаю:

------------------------------------------------

    Mongoose connection "error" event fired with:

    { MongoError: authentication fail
        at Function.MongoError.create (/mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/error.js:31:11)
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/topologies/replset.js:1245:38
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/connection/pool.js:760:7
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/connection/pool.js:736:20
        at finish (/mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/auth/scram.js:168:16)
        at handleEnd (/mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/auth/scram.js:178:7)
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/auth/scram.js:269:11
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb-core/lib/connection/pool.js:469:18
        at process._tickCallback (internal/process/next_tick.js:61:11)
      name: 'MongoError',
      message: 'authentication fail',
      errors:
       [ { name: 'mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017',
           err: [Error] },
         { name: 'mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017',
           err: [Error] } ] }
    Error: KeystoneJS (Keystone Demo) failed to start - Check that you are running `mongod` in a separate process.
        at NativeConnection.<anonymous> (/mnt/c/WEB/keystone-md2/node_modules/keystone/lib/core/openDatabaseConnection.js:62:10)
        at NativeConnection.emit (events.js:189:13)
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/lib/connection.js:824:17
        at connectCallback (/mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb/lib/mongo_client.js:527:5)
        at /mnt/c/WEB/keystone-md2/node_modules/mongoose/node_modules/mongodb/lib/mongo_client.js:459:13
        at process._tickCallback (internal/process/next_tick.js:61:11)
 27.04.2019 19:09
5
1
12 380
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Вы должны поместить свои user и password в строку uri вашего подключения.

 mongodb://***'your user':' here comes password '***@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true
например

 mongodb://dbuser:dbpassword@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true
 27.04.2019 20:03
Проблема в том, что я оставлял <> в строке подключения. Вы должны удалить их, чтобы аутентификация работала.

 28.04.2019 09:55
У меня похожая ошибка, но с подключением к новой базе данных Atlas. Несмотря на то, что я определенно правильно настроил имя пользователя и пароль, как указано здесь и в документации (очевидно, я заменил ПАРОЛЬ своим правильным паролем MLAB:

var mongoURI = 'mongodb+srv://heroku_3kcdl3j9:PASSWORD@cluster-3kcdl3j9.auof1.mongodb.net/heroku_3kcdl3j9?retryWrites=true&w=majority';
Я перенес свою базу данных из MLAB в Atlas, успешно установив правильные параметры доступа к сети на IP-адреса 0.0.0.0. Настройте переменную окружения в Heroku. Но все равно получаю эту ошибку:

    { MongoError: authentication fail
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/topologies/replset.js:1462:15
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/connection/pool.js:868:7
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/connection/pool.js:844:20
    at finish (/Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/auth/scram.js:232:16)
    at handleEnd (/Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/auth/scram.js:242:7)
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/auth/scram.js:351:15
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/connection/pool.js:531:18
    at process._tickCallback (internal/process/next_tick.js:61:11)
  name: 'MongoError',
  message: 'authentication fail',
  errors:
   [ { name: 'cluster-3kcdl3j9-shard-00-01.auof1.mongodb.net:27017',
       err: [MongoError] },
     { name: 'cluster-3kcdl3j9-shard-00-00.auof1.mongodb.net:27017',
       err: [MongoError] },
     { name: 'cluster-3kcdl3j9-shard-00-02.auof1.mongodb.net:27017',
       err: [MongoError] } ],
  [Symbol(mongoErrorContextSymbol)]: {} }
(node:47015) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 's' of undefined
    at Admin.buildInfo (/Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb/lib/admin.js:100:37)
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/index.js:95:13
    at $initialConnection.then.err (/Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongoose/lib/connection.js:556:14)
    at process._tickCallback (internal/process/next_tick.js:68:7)
(node:47015) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:47015) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:47015) UnhandledPromiseRejectionWarning: MongoError: authentication fail
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/topologies/replset.js:1462:15
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/connection/pool.js:868:7
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/connection/pool.js:844:20
    at finish (/Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/auth/scram.js:232:16)
    at handleEnd (/Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/auth/scram.js:242:7)
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/auth/scram.js:351:15
    at /Users/bensmith/Downloads/DocumentsDirNew/Scraper and API/diveapi/node_modules/mongodb-core/lib/connection/pool.js:531:18
    at process._tickCallback (internal/process/next_tick.js:61:11)
(node:47015) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
 03.10.2020 10:25
Я тоже столкнулся с этой проблемой. Но через час я узнал, что использовал переменные process.env для имени пользователя и пароля. А также объявил их в файле .env. Но я забыл настроить пакет dotenv в своем коде.

Так что убедитесь, что вы не сделали эту глупую ошибку.

Для получения дополнительной информации просмотрите эту документацию по репозиториям узлов. https://www.npmjs.com/package/dotenv

 13.12.2020 12:36
У меня была аналогичная ошибка, и в моем случае проблема заключалась в том, что я добавил (в белый список) неправильный IP-адрес в «Список доступа IP» на странице «Безопасность -> Доступ к сети».

Ошибка docker-compose Не удается запустить службу монго: драйверу не удалось запрограммировать внешнее подключение к конечной точке
Вопросы
WINDOWS
Ошибка docker-compose Не удается запустить службу монго: драйверу не удалось запрограммировать внешнее подключение к конечной точке
Я настраиваю grandnode с помощью mondodb в докере, используя docker compose.

докер-compose.yml

    version: "3.6"

    services:
      mongo:
        image: mongo:3.6
        volumes:
          - mongo_data_db:/data/db
          - mongo_data_configdb:/data/configdb
        ports:
          - 27017:27017
      grandnode:
        image: grandnode/grandnode:4.10
        ports:
          - 8080:8080
        depends_on:
          - mongo

    volumes:
      mongo_data_db:
        external: true
      mongo_data_configdb:
        external: true
Получение ошибки ниже при использовании файла docker-compose.

E:\docker\grandnode>docker-compose up
Creating network "grandnode_default" with the default driver
Creating grandnode_mongo_1 ... error

ERROR: for grandnode_mongo_1 Cannot start service mongo: driver failed programming external connectivity on endpoint grandnode_mongo_1 (1e54342c07b093e32189aad487927f226b3ed0d1b6bdf7413588377b0e99bc2c): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:27017:tcp:172.20.0.2:27017: input/output error

ERROR: for mongo Cannot start service mongo: driver failed programming external connectivity on endpoint grandnode_mongo_1 (1e54342c07b093e32189aad487927f226b3ed0d1b6bdf7413588377b0e99bc2c): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:27017:tcp:172.20.0.2:27017: input/output error
ERROR: Encountered errors while bringing up the project.
 28.04.2019 07:53
4
4
8 480
5
Данный вопрос помечен как решенный
 Ответы 5
Если вы не хотите подключаться к своему экземпляру MongoDB с локального хоста, вам не нужно это сопоставление портов «27017:27017». Оба сервиса находятся в одной сети и все равно будут видеть друг друга. Grandnode может подключиться к MongoDB по адресу mongo:27017.

 29.04.2019 07:16
 Ответ принят как подходящий
Проблема заключалась в том, что общие диски не были проверены.

Проверьте необходимые диски
Нажмите Применить
Перезапустите Докер
Это решит проблему.



 05.12.2019 12:35
Это случилось со мной, в Xubuntu 20.04. Проблема заключалась в том, что на моем компьютере был запущен mongod. Остановить mongod, было решением для меня.

Я сделал это:

sudo systemctl stop mongod
Убедитесь, что mongod был остановлен с помощью:

systemctl status mongod | grep Active
Вывод этой команды должен быть:

Active: inactive (dead)
Затем снова выполните это:

docker-compose up -d
Все сработало, как и ожидалось.

 15.08.2021 22:55
остановите свой сервер MongoDB из вашей ОС.

для линукса

sudo systemctl stop mongod
если это все еще не работает, удалите MongoDB с локального компьютера и снова запустите docker compose.

 18.09.2021 07:59
для пользователя Linux

sudo systemctl остановить MongoDB

sudo docker-compose up -d

Переменные, которые я обновил в своем forEach, возвращаются к исходному значению
Вопросы
JAVASCRIPT
Переменные, которые я обновил в своем forEach, возвращаются к исходному значению
Я пытаюсь запросить, чтобы получить всю сумму и сумму заработка и снятия, но каким-то образом после завершения и выхода цикла forEach все обновленные значения, которые я поместил в переменную, возвращаются к своим исходным значениям.

  var withdrawbalance = 0;
  var totalearning = 0;

  userplans.forEach((up) => {
    DepositEarning.findOne({deposit: up.deposit._id})
      .then(depositearning => {
        withdrawbalance += parseInt(depositearning.WithdrawableBalance, 10);
      });
    Earning.findOne({deposit: up.deposit._id})
      .then(earnings => {
        totalearning += parseInt(earnings.Earning, 10);
    });
  })

  console.info(withdrawbalance);
  console.info(totalearning);
 01.06.2019 16:07
0
1
67
5
Данный вопрос помечен как решенный
 Ответы 5
forEach является асинхронным. Таким образом, console.info запускается до вашего цикла мутации. Вы можете сделать его синхронным, используя map, но даже в этом случае внутри него будут асинхронные вызовы. Вам нужно будет сгладить его дальше - возможно, выполнив Promise.all на карте, а затем уменьшив вывод этого.

 01.06.2019 16:10
Я думаю, причина может заключаться в том, что DepositEarning.findOne() и Earning.findOne() являются асинхронными функциями. Это означает, что они не возвращаются сразу со значением, поэтому ваши переменные остаются прежними после цикла.

 01.06.2019 16:18
 Ответ принят как подходящий
Вы запускаете асинхронный код внутри forEach, и forEach не будет ждать завершения асинхронного кода, для этого вы должны обернуть свой асинхронный код ожидающим примитивом, например

await Promise.all(userplans.map(async (up) => {
    await DepositEarning.findOne({deposit: up.deposit._id})
      .then(depositearning => {
        withdrawbalance += parseInt(depositearning.WithdrawableBalance, 10);
      });
    await Earning.findOne({deposit: up.deposit._id})
      .then(earnings => {
        totalearning += parseInt(earnings.Earning, 10);
    });
  }))
 01.06.2019 16:20
Вот функциональный подход к этому, который устраняет побочный эффект мутации внутри цикла. Для этого вам нужен движок, поддерживающий распространение Object Rest:

async function calculate(userplans) {
    const add = (acc, n) => acc + n;
    const flatten = (acc, e) => ({
        depositEarnings: [...acc.depositEarnings, e.depositEarnings], 
        earnings: [...acc.earnings, e.earnings]
    });

    const {depositEarnings, earnings} = (await Promise.all(userplans
          .map(async (up) => ({
              depositEarnings: await DepositEarning.findOne({deposit: up.deposit._id}),
              earnings: await Earning.findOne({deposit: up.deposit._id})
}))))
          .reduce(flatten, {depositEarnings: [], earnings: []});

    const withdrawalBalance = depositEarnings
          .map(d => parseInt(d.WithdrawableBalance, 10))
          .reduce(add, 0);
    const totalEarning = earnings
          .map(e => parseInt(e.Earning, 10))
          .reduce(add, 0);

    console.info(withdrawalBalance);
    console.info(totalEarning);
}
 01.06.2019 16:42
Просто добавлю свои два цента,

Как указывалось в других ответах, ваш цикл foreach использует асинхронный код. Он использует некоторый API, который не является частью Js.

Вызов помещается в стек вызовов, а затем удаленный из стека вызовов. Потому что работу теперь будет выполнять API. призыв к

console.info(withdrawbalance); console.info(totalearning);

добавляется в стек вызовов и каково значение прямо сейчас? 0 0.

API, когда он закончит работу, добавит функцию в task queue и, исходя из этого, event loop проверит, пуст ли стек вызовов. Поскольку сейчас он пуст, мы добавим функцию в стек вызовов.

А потом запускается. И тогда у вас будут реальные значения withdrawbalance and totalearning значений.

Mongoose не подключается к MongoDB Atlas
Вопросы
NODE.JS
Mongoose не подключается к MongoDB Atlas
Это первый раз, когда я использую MongoDB Atlas для работы с Mongo, и при попытке подключения я получаю сообщение об ошибке:

Error: connect ECONNREFUSED 3.209.60.172:27017
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1054:14) {
  name: 'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]: {}
}
Это мой код:

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://johnnybox:<password>@cluster0-cgxqx.mongodb.net/test?retryWrites=true&w=majority', { 
  useNewUrlParser: true
}).then(() => console.info('MongoDB Connected...'))
  .catch(err => console.info(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3331);
ps * я не пропускаю свои учетные данные

Уже искал решение здесь, но ничего похожего на мою проблему нет.

Мой белый список:

Mongoose не подключается к MongoDB Atlas

 07.06.2019 18:36
1
5
1 759
5
Данный вопрос помечен как решенный
 Ответы 5
попробуй это

mongoose
  .connect(
    'mongodb+srv://{my_user}:{mypass}@johnnybox-cgxqx.mongodb.net/johnnybox?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => console.info('MongoDB Connected...'))
  .catch(err => console.info(err));
 07.06.2019 18:41
Попробуйте добавить свой IP-адрес в белый список IP-адресов mongo atlas. В противном случае принимайте все соединения, если вам не нужно безопасное соединение.

 07.06.2019 21:03
Новый ответ на новую ошибку:

Согласно этому отвечать, у которого была точно такая же ошибка, а именно:

'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]:
Добавьте свой текущий IP-адрес в белый список после «clusters/security/whitelist» на веб-сайте MongoDB.

Извините, я потратил как минимум час, чтобы решить эту проблему. Это все, что я могу сделать.

Старый ответ, касающийся прежней ошибки (он исправил эту часть, но все же получил новую ошибку):

Если вы внимательно прочитаете журнал ошибок, он говорит:

UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block
Это означает, что вам нужно добавить catch() к вашему соединению мангуста:

mongoose.connect({some code}).then({some code}).catch(err => console.info(err))

 07.06.2019 21:18
 Ответ принят как подходящий
Я пытался запустить этот код дома, и он работал отлично!

Так что это было что-то здесь, в моем офисе, после некоторого тестирования проблема была с заблокированным портом подключения.

Посмотри:

Error: connect ECONNREFUSED 3.209.60.172:27017
Обратите внимание, что он подключается к порту 27017

** IP-адрес является случайным, поэтому он меняется после каждой заявки.

После того, как мой Sd открыл этот порт, все заработало правильно!!



Большое спасибо за вашу помощь, ребята!

 11.06.2019 23:08
Для тех из вас, кто пробовал разные URI, единственное, что заработало здесь, это Добавить свой IP против разрешить доступ из любого места. Надеюсь, это сэкономит вам время.

Strapi: отладка ⛔️ Сервер не смог запуститься должным образом
Вопросы
MONGODB
Strapi: отладка ⛔️ Сервер не смог запуститься должным образом
Пожалуйста, исправьте мою проблему.

Это работает, когда я пытаюсь более 50 раз. Теперь не работает, пробую 100+ раз.

Я запускаю это -> страпи новый сервер

� Starting to create your Strapi application.

? Choose your installation type Custom (manual settings)
? Choose your main database: MongoDB
? Database name: server
? Host: @cluster0-8tfpd.mongodb.net
? +srv connection: true
? Port (It will be ignored if you enable +srv): 27017
? Username: deep
? Password: *******
? Authentication database (Maybe "admin" or blank):
? Enable SSL connection: true

⏳ Testing database connection...
It might take a minute, please have a coffee ☕️

The app has been connected to the database successfully!

�  Application generation:
√ Copy dashboard
√ Install plugin settings-manager.
√ Install plugin content-type-builder.
√ Install plugin content-manager.
√ Install plugin users-permissions.
√ Install plugin email.
√ Install plugin upload.
√ Link strapi dependency to the project.

� Your new application server is ready at E:\Dev. Project\Flutter\flutter_ecommerce\server.

⚡️ Change directory:
$ cd server

⚡️ Start application:
$ strapi start  
Но проблема в том, что -> запуск страпи

[2019-06-15T09:34:30.604Z] debug ⛔️ Server wasn't able to start properly. [2019-06-15T09:34:30.609Z] error Make sure your MongoDB database is running...

 15.06.2019 11:56
4
1
16 468
5
Данный вопрос помечен как решенный
 Ответы 5
Пожалуйста, убедитесь, что ваша MongoDB работает с настройками, которые вы установили в своем ./config/environment/.../database.json

Я думаю, что у вашего хоста есть проблема, @ не нужен.

Я предлагаю вам следовать документу Strapi о документах Mongo Atlas. Это работа с кластерами. https://strapi.io/documentation/3.0.0-beta.x/guides/databases.html#install-on-atlas-mongodb-atlas

 20.06.2019 16:12
Проверьте, запущен ли экземпляр MongoDB
Проверьте в настройках правильность host: ./config/environment/.../database.json. Обычно в разработке находится localhost
 25.06.2019 18:47
Посмотреть картинку

Вы должны добавить запись uri в свой ./config/environment/.../database.json

uri должно быть mongodb://<host>:<port>/<database name>

 21.08.2019 13:32
 Ответ принят как подходящий
Если вы столкнулись с этой ошибкой при работе с докером, Добавление --network=host решает эту проблему. Имейте в виду, используйте это решение только локально.

Как описано самим докером,

--network = "host" gives the container full access to local system services such as D-bus and is therefore considered insecure.

 29.01.2020 12:42
Если эта ошибка повторится, используйте ремешок консоль, а не страпи начать.


Golang сообщает, что «крайний срок контекста превышен» с MongoDB
Вопросы
MONGODB
Golang сообщает, что «крайний срок контекста превышен» с MongoDB
Я написал функцию обновления, но многократное выполнение выдаст ошибку context deadline exceeded.

Моя функция:

func Update(link string, m bson.M) {
    configInfo := config.Config()

    // client := GetInstance().client
    // ctx := GetInstance().ctx

    client, _ := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    err := client.Connect(ctx)
    if err != nil {
        fmt.Print("connect error!")
        fmt.Println(err)
    }
    db := client.Database("test")
    lianjia := db.Collection("test")
    _, err = lianjia.UpdateOne(ctx, bson.M{"Link": link}, bson.M{"$set": m})
    if err != nil {
        fmt.Print("update error!")
        fmt.Println(err)
    }
}
Выход:

update error!context deadline exceeded
 02.07.2019 11:14
8
5
11 680
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Изменятьmongodb://localhost:27017кmongodb://127.0.0.1:27017/

 28.10.2019 06:33
Ваш URI неверен, потому что вы использовали докер.

Если ваши контейнеры mongoDB называются mongoContainer, вам следует:

client, _ := mongo.NewClient(options.Client().ApplyURI("mongodb://mongoContainer"))
 10.02.2020 08:36
Это иногда происходит при отладке в GoLand, если у вас есть точка останова и программа ждет, вы продолжаете и получаете эту ошибку. Если вы удалите точку останова и снова запустите программу, она сработает. По крайней мере, так было в моем случае.

 22.07.2021 10:15
Попробуйте использовать

ctx := context.Background()
Вместо,

ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
Это решило проблему для моей проблемы, когда я пытаюсь разработать серверную часть REST с сервером MongoDB.

 06.01.2022 09:17
попробуйте изменить время ожидания контекста, скажем, 30 секунд

ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)


Монго как набор реплик в тестовых контейнерах в .NET
Вопросы
C#
Монго как набор реплик в тестовых контейнерах в .NET
Я пытаюсь запустить Mongo в Docker, используя Тестовые контейнеры в dotnet. У меня нет проблем, когда я использую следующий код:

        Container = new MongoDbBuilder()
            .WithPortBinding("27017")
            .Build();
Но с этим MongoDbBuilder по умолчанию я не могу запустить его как набор реплик. Я обнаружил, что мне нужно запустить его как построитель контейнеров с собственным изображением:

        Container = new ContainerBuilder()
            .WithImage("mongo:6.0")
            .WithEntrypoint("mongod")
            .WithCommand("--replSet", "rs0")
            .WithPortBinding("27017")
            .Build();
Затем я инициализирую реплику, установленную как:

    var result = Container.ExecAsync(new List<string>
    {
        "mongosh", "--eval", "rs.initiate()"
    }).GetAwaiter().GetResult();
Когда я пытаюсь выполнить какую-либо операцию с mongo в коде dotnet, я получаю ошибку тайм-аута. Когда я запускаю его в режиме отладки и пытаюсь подключиться к созданному докеру с помощью клиента Mongo (я использую DataGrip), я тоже получаю ошибку тайм-аута. Когда я подключаюсь напрямую к консоли контейнера докеров с помощью mongosh, это работает.

Работающий образ Docker:

Настройки подключения в клиенте Mongo:

Когда я использую MongoDbBuilder, как упоминалось вначале, работает клиент Mongo со строкой подключения.

 25.02.2024 15:25
3
2
511
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Перенос mongod в команду мне помог:

var container = new ContainerBuilder()
        .WithImage("mongo:6.0")
        .WithCommand("mongod", "--replSet", "rs0")
        .WithPortBinding("27017")
        .Build();
Не забудьте переключиться на «Без аутентификации», поскольку настройка образа докера по умолчанию не требует аутентификации (в отличие от созданной MongoDbBuilder):

По умолчанию конфигурация Mongo не требует аутентификации для доступа, даже для пользователя с правами администратора.

 28.02.2024 20:24
Я помещаю этот ответ здесь для себя в будущем:

Мне удалось использовать MongoDbBuilder, чтобы получить набор реплик одного узла, работающий со следующим, что позволяет мне использовать транзакции:

        var cancellationTokenSource = new CancellationTokenSource();
        cancellationTokenSource.CancelAfter(TimeSpan.FromSeconds(10));

        mongoContainer = new MongoDbBuilder()
            .WithUsername("")
            .WithPassword("")
            .WithImage("mongo:latest")
            .WithExtraHost("host.docker.internal", "host-gateway")
            .WithCommand("--replSet", "rs0")
            .WithWaitStrategy(Wait.ForUnixContainer())
            .Build();

        await mongoContainer.StartAsync(cancellationTokenSource.Token);
        await mongoContainer.ExecScriptAsync($"rs.initiate({{_id:'rs0',members:[{{_id:0,host:'host.docker.internal:{mongoContainer.GetMappedPublicPort(27017)}'}}]}})", cancellationTokenSource.Token);

        var connectionString = mongoContainer.GetConnectionString();
        var client = new MongoClient(connectionString);
Использование пустой строки для .WithUserName("") и .WithPassword("") кажется эквивалентом «Нет аутентификации». Я думаю, .WithUserName(null) и .WithPassword(null) тоже подойдут.

Важно: убедитесь, что в вашем файле хостов (на хост-компьютере) есть запись 127.0.0.1 host.docker.internal

 31.03.2024 00:16
Ни один из текущих ответов мне не подходит. Кроме того, строка подключения должна быть похожа на mongodb://{hostname}:{port}/?replicaSet=rs0&ssl=false, чтобы использовать экземпляр mongoDb с набором реплик с именем rs0.

Мне не удалось заставить его работать с TestContainers, но у меня получилось с другими nuget и с docker-compose. Я создал это обсуждение https://github.com/testcontainers/testcontainers-dotnet/discussions/1150, чтобы, возможно, я мог решить эту проблему.

Вот что я нашел на случай, если это окажется полезным и кто-то еще знает, чего не хватает.

Это код:

const string replicaSetName = "rs0";
const string hostname = "mongo";

var mongoContainer =
    new MongoDbBuilder()
        .WithUsername("") // it needs to be empty
        .WithPassword("") // it needs to be empty
        .WithImage("mongo:7.0.7-jammy")
        .WithHostname(hostname)
        // do I really need .WithExtraHost() ?
        .WithCommand("mongod", "--replSet", replicaSetName, "--bind_ip_all")
        .WithWaitStrategy(Wait.ForUnixContainer())
        .Build();

await mongoContainer.StartAsync();
var port = mongoContainer.GetMappedPublicPort(27017);
var mongoInitiateCommand = 
      $@"mongosh --eval ""rs.initiate({{_id: '{replicaSetName}', members: [{{_id: 0, host: '{hostname}:{port}'}}]}});""";
var result = await mongoContainer.ExecAsync([mongoInitiateCommand]);
var connectionString = mongoContainer.GetConnectionString() ??  $"mongodb://{hostname}:{port}/?replicaSet=rs0&ssl=false";
Теперь, если я начну отладку, я увижу, что попытка инициализации дает такой результат:

код выхода: 126
stdout: Ошибка выполнения во время выполнения OCI: Ошибка выполнения: невозможно запустить процесс контейнера: exec: "mongosh --eval" rs.initiate({_id: 'rs0', члены: [{_id: 0, хост: 'mongo:56039') }]});"": исполняемый файл не найден в $PATH: неизвестно
Поэтому я добавил точку останова в эту строку и стал ждать.

В этот момент я вижу, что контейнер монго правильно развернут со случайным именем контейнера (и это нормально, потому что я не указал ничего конкретного в .WithName("foo")) и идентификатором (т. е.: a57fdd333258).

$ docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS         PORTS                      NAMES
a57fdd333258   mongo:7.0.7-jammy           "docker-entrypoint.s…"   9 seconds ago    Up 8 seconds   0.0.0.0:55888->27017/tcp   keen_mcclintock
eafa8f35d5bc   testcontainers/ryuk:0.6.0   "/bin/ryuk"              10 seconds ago   Up 9 seconds   0.0.0.0:55886->8080/tcp    testcontainers-ryuk-3145c507-e454-4424-b83d-4984c85f54be
Теперь я могу получить доступ к своему контейнеру с помощью mongosh следующим образом:

$ docker exec -it a57fdd333258 mongosh
Current Mongosh Log ID: 660f338d06102d7ba8db83af
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.0
Using MongoDB:          7.0.7
Using Mongosh:          2.2.0
...
и, оказавшись внутри, я могу проверить статус сервера

test> db.serverStatus()
{
  host: 'mongo',
  version: '7.0.7',
  process: 'mongod',
  pid: Long('1'),
  uptime: 27,
  uptimeMillis: Long('27918'),
  uptimeEstimate: Long('27'),
  ...
  ok: 1
}
Самое главное здесь то, что я вижу, что хост называется mongo, как я и указал.

Итак, я могу попытаться выполнить инициализацию набора реплик с помощью

test> const configuration = { _id: "rs0", members: [{ _id: 0, host: "mongo:55888"}]}
для хранения переменной, в которой я указываю имя набора реплик как rs0 и хост mongo:55888.

Этот порт я вижу при отладке, каждый раз при его запуске он назначается случайным, но на этот раз я его получил, поэтому редактирую его вручную.

Теперь я пытаюсь инициировать набор реплик и получаю следующую ошибку

test> rs.initiate(configuration)
MongoServerError[InvalidReplicaSetConfig]: No host described in new configuration with {version: 1, term: 0} for replica set rs0 maps to this node
На данный момент я не знаю, в чем проблема, но я точно знаю, что текущие ответы на самом деле не инициализируют какой-либо набор реплик.

Здесь вы можете увидеть мой собственный комментарий о том, как мне создать набор реплик mongoDb (который, например, поддерживает потоки изменений) с помощью docker-compose и mongosh. И мне удалось заставить это работать и с другим пакетом nuget, но этот вызывает у меня проблемы. https://github.com/testcontainers/testcontainers-dotnet/discussions/1150#discussioncomment-9014959

 05.04.2024 01:26
Мне удалось запустить реплику одного узла с тестовыми контейнерами, используя немного измененный пример из ответов по теме.

Нам нужно инициализировать новый контейнер MongoDB с набором no-auth и rs0 repl, а стратегия ожидания тест-контейнеров должна быть в режиме wait unix socket healthy.

Затем запустите контейнер и инициируйте набор repl:

MongoDbContainer mongoContainer = new MongoDbBuilder()
                                          .WithUsername("") // Set no-auth
                                          .WithPassword("")
                                          .WithCommand("mongod", "--replSet", "rs0") // Enable rs0 repl set
                                          .WithWaitStrategy(Wait.ForUnixContainer()) // Wait only unix container healthy status.
                                          .Build();

await mongoContainer.StartAsync();
await mongoContainer.ExecScriptAsync("rs.initiate();"); // The same example you can find here: https://github.com/testcontainers/testcontainers-java/blob/9d6e7655a929abcc4db735e16642e4eb40e12155/modules/mongodb/src/main/java/org/testcontainers/containers/MongoDBContainer.java#L171 in test-containers Java impl.
Я не выполнял никаких дополнительных настроек для механизма докера или другой среды. Использовалась Docker Desktop на Windows 11.

 02.07.2024 06:45
Если вы не хотите использовать MongoDbBuilder

var container = new ContainerBuilder()
         .WithImage("mongo:latest")
         .WithCommand("--replSet", "rs0")
         .WithWaitStrategy(Wait.ForUnixContainer())
         .Build();

await container.StartAsync();

await container.ExecAsync(new List<string>
                       {
                           "/bin/sh",
                           "-c",
                           $"mongosh --quiet --eval 'rs.initiate()'"
                       });


Mongorestore, похоже, исчерпывает память и убивает процесс mongo
Вопросы
MONGODB
Mongorestore, похоже, исчерпывает память и убивает процесс mongo
В текущей настройке есть два контейнера Mongo Docker, работающие на хостах A и B, с версией Mongo 3.4 и работающие в наборе реплик. Я хотел бы обновить их до 3,6 и увеличить член, чтобы контейнеры работали на хостах A, B и C. Контейнеры имеют ограничение памяти 8 ГБ и не выделены подкачки (в настоящее время), и администрируются в Владелец ранчо. Итак, мой план состоял в том, чтобы загрузить три новых контейнера, инициализировать набор реплик для них, взять дамп из контейнера 3.4 и восстановить его в качестве нового мастера набора реплик.

Снятие дампа прошло нормально, и его размер составлял около 16 ГБ. Когда я попытался восстановить его на новом мастере 3.6, восстановление началось нормально, но после восстановления примерно 5 ГБ данных процесс mongo, похоже, был убит OS / Rancher, и хотя сам контейнер не перезапускается, процесс MongoDB просто вылетает и снова перезагружается. Если я снова запускаю mongorestore в той же базе данных, он сообщает об ошибке уникального ключа для всех уже вставленных записей, а затем продолжает с того места, где он остановился, только чтобы сделать то же самое снова через 5 ГБ или около того. Таким образом, похоже, что mongorestore загружает все записи, которые он восстанавливает, в память.

Итак, я должен найти какое-то решение для этого, и:

Каждый раз, когда он выходит из строя, просто запускайте команду mongorestore, чтобы продолжить с того места, где было остановлено. Вероятно, это должно сработать, но мне это немного неудобно.
Восстанавливайте базу данных по одной коллекции за раз, но самая большая коллекция превышает 5 ГБ, поэтому она также не будет работать должным образом.
Добавьте в контейнер подкачку или физическую память (временно), чтобы процесс не был убит после того, как у процесса закончится физическая память.
Что-нибудь еще, надеюсь, лучшее решение?
 19.04.2018 20:42
3
2
5 176
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Поскольку похоже, что у вас не заканчивается место на диске из-за того, что mongorestore продолжает работу с того места, где он был успешно остановлен, правильным ответом является сосредоточение внимания на проблемах с памятью. Вам определенно не хватает памяти во время процесса mongorestore.

Я настоятельно рекомендую использовать пространство подкачки, так как это самый простой, самый надежный, наименее опасный и, возможно, наиболее официально поддерживаемый способ решения этой проблемы.

В качестве альтернативы, если вы по какой-то причине полностью против использования пространства подкачки, вы можете временно использовать узел с большим объемом памяти, выполнить mongorestore на этом узле, позволить ему реплицироваться, затем отключить узел и заменить его на узел, которому выделено меньше ресурсов. Этот вариант должен работать, но может стать довольно сложным для больших наборов данных и для чего-то вроде этого является излишним.

 19.04.2018 21:46
Вместо того, чтобы запускать новый набор реплик, можно выполнить все расширение и обновление, даже не выходя из сети.

Запустите MongoDB 3.6 на хосте C
На первичном (в настоящее время A или B) добавьте узел C в набор реплик.
Узел C выполнит начальную синхронизацию данных; Это может занять некоторое время
Как только это будет закончено, снимите узел B; в вашем наборе реплик все еще есть два рабочих узла (A и C), поэтому он будет работать без перебоев
Замените v3.4 на узле B на v3.6 и снова запустите резервную копию
Когда узел B будет готов, снимите узел A
Замените v3.4 на узле A на v3.6 и снова запустите резервную копию
У вас останется тот же набор реплик, что и раньше, но теперь с тремя узлами, на всех запущенных версии 3.4.

PS Обязательно ознакомьтесь с документацией по Обновить набор реплик до 3.6 перед тем, как начать.

 20.04.2018 23:22
Увеличение размера свопа, как указал другой ответ, сработало для меня. Кроме того, опция --numParallelCollections контролирует количество коллекций, которые mongodump / mongorestore должны выгружать / восстанавливать параллельно. По умолчанию - 4, что может потреблять много памяти.

 15.10.2018 02:03
Я столкнулся с аналогичной проблемой при запуске 3 узлов на одном компьютере (всего 8 ГБ ОЗУ) в рамках тестирования набора реплик. размер кеша хранилища по умолчанию составляет 0,5 * (общий объем ОЗУ - 1 ГБ). В mongorestore каждый узел использовал полный размер кеша при восстановлении и потреблял всю доступную оперативную память.

Я использую доступный шаблон для этой части mongod.conf, но вы можете установить для своего cacheSizeGB любое разумное значение, чтобы несколько экземпляров не потребляли ОЗУ.

storage:
    wiredTiger:
        engineConfig:
            cacheSizeGB: {{ ansible_memtotal_mb /  1024 * 0.2 }}
 31.03.2020 06:08
Я решил проблему OOM, используя параметр --wiredTigerCacheSizeGB mongod. Выдержка из моего docker-compose.yaml ниже:

version: '3.6'
services:
    db:
        container_name: db
        image: mongo:3.2
        volumes:
            - ./vol/db/:/data/db
        restart: always
        # use 1.5GB for cache instead of the default (Total RAM - 1GB)/2:
        command: mongod --wiredTigerCacheSizeGB 1.5
 07.07.2020 00:00
Просто документирую здесь свой опыт использования mongodb 4.4 в 2020 году:

Я столкнулся с этой проблемой, восстанавливая коллекцию 5 ГБ на машине с памятью 4 ГБ. Я добавил подкачку 4 ГБ, которая, похоже, работала, я больше не видел сообщение KILLED.

Однако через некоторое время я заметил, что мне не хватает многих данных! Оказывается, если mongorestore исчерпает память на последнем шаге (при 100%), он не покажет убитый, НО ВАШИ ДАННЫЕ НЕ ИМПОРТИРОВАЛИ.

Вы хотите убедиться, что видите эту последнюю строку:

[########################]  cranlike.files.chunks  5.00GB/5.00GB  (100.0%)
[########################]  cranlike.files.chunks  5.00GB/5.00GB  (100.0%)
[########################]  cranlike.files.chunks  5.00GB/5.00GB  (100.0%)
[########################]  cranlike.files.chunks  5.00GB/5.00GB  (100.0%)
[########################]  cranlike.files.chunks  5.00GB/5.00GB  (100.0%)
restoring indexes for collection cranlike.files.chunks from metadata
finished restoring cranlike.files.chunks (23674 documents, 0 failures)
34632 document(s) restored successfully. 0 document(s) failed to restore.
В моем случае мне понадобилось 4 ГБ памяти + 8 ГБ подкачки, чтобы импортировать коллекцию GridFS размером 5 ГБ.

Спасибо, что записали. «Не удалось восстановить 0 документов», чтобы гарантировать отсутствие потери / пропуска данных.

Как настроить кластер MongoDB, поддерживающий сеансы?
Вопросы
SPRING
Как настроить кластер MongoDB, поддерживающий сеансы?
Я хочу изучить новую функцию транзакций MongoDB и использовать Spring Data MongoDB. Однако я получаю сообщение об исключении «Сеансы не поддерживаются кластером MongoDB, к которому подключен этот клиент.». Любые подсказки относительно конфигурации MongoDB 3.7.9 приветствуются.

Трассировка стека начинается с:

com.mongodb.MongoClientException: Sessions are not supported by the MongoDB cluster to which this client is connected at com.mongodb.MongoClient.startSession(MongoClient.java:555) ~[mongodb-driver-3.8.0-beta2.jar:na] at org.springframework.data.mongodb.core.SimpleMongoDbFactory.getSession(SimpleMongoDbFactory.java:163) ~[spring-data-mongodb-2.1.0.DATAMONGO-1920-SNAPSHOT.jar:2.1.0.DATAMONGO-1920-SNAPSHOT]

 09.05.2018 15:55
12
5
15 161
6
Данный вопрос помечен как решенный
 Ответы 6
Я отключил TLS (внутри Spring Data MongoDB), и теперь функция транзакций в разрабатываемой версии 3.7.9 работает нормально.

 11.05.2018 15:34
 Ответ принят как подходящий
У меня была такая же проблема, когда я пытался подключить его к одному автономному экземпляру mongo, однако, как написано в официальная документация, Mongo поддерживает функцию транзакции для набора реплик. Итак, я затем попытался создать набор реплик со всеми экземплярами на MongoDB 4.0.0, мне удалось успешно выполнить код. Так, Запустите набор реплик (3 члена), затем попробуйте выполнить код, проблема будет решена.

NB: вы можете настроить набор реплик на той же машине для тестов https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/

 18.07.2018 10:09
Убедитесь, что вы используете обновленный API - например:

MongoClient mongoClient = MongoClients.create();
MongoDatabase dataBase = mongoClient.getDatabase("mainDatabase");
MongoCollection<Document> collection = dataBase.getCollection("entities");
Также убедитесь, что у вас открыт mongo.exe.

 15.05.2019 16:23
Набор реплик - это наверняка решение проблемы

Но делать реплику 3 узлов не обязательно.

Решение 1 (для автономной установки)

Для автономной установки mongo вы можете пропустить настройку 2-го или 3-го узла, как описано в официальной документации mongo здесь

И вам нужно будет установить replSetName в конфигурации

replication:
   oplogSizeMB: <int>
   replSetName: <string>
   enableMajorityReadConcern: <boolean>
а затем запустите детали, которые здесь

rs.initiate()
после этого строка подключения будет выглядеть, как показано ниже: -

mongodb://localhost:27017/<database_name>?replicaSet=<replSet_Name>
ключи выше, которые вам необходимо заменить: -

имя_базы_данных = имя базы данных

replSet_Name = имя набора реплик, который вы установили в приведенной выше конфигурации

Решение 2 (только для требований на основе докеров)

Пример изображения Docker с набор реплик одного узла, действующий как первичный узел для среды разработки выглядит следующим образом: -

Я размещал образ докера в докере

docker pull krnbr/mongo:latest
Содержание того же Dockerfile ниже: -

FROM mongo
RUN echo "rs.initiate({'_id':'rs0','members':[{'_id':0,'host':'127.0.0.1:27017'}]});" > /docker-entrypoint-initdb.d/replica-init.js
RUN cat /docker-entrypoint-initdb.d/replica-init.js
CMD [ "--bind_ip_all", "--replSet", "rs0" ]
Команда запуска Docker (замените на имя образа, который вы создаете самостоятельно, или используйте указанное выше, например, krnbr / mongo): -

без объема


docker run -d --name mongo -p 27017:27017 <Image Name> mongod --replSet rs0 --port 27017
с объемом


docker run -d --name mongo -p 27017:27017 -v ~/.mongodb:/data/db <Image Name> mongod --replSet rs0 --port 27017
для поддержки привязка любого ip

docker run -d --name mongo -p 27017:27017 -v ~/.mongodb:/data/db <Image Name> mongod --bind_ip_all --replSet rs0 --port 27017
 17.05.2020 06:58
Что касается ответа @kakabali, у меня есть несколько немного разных сценариев и я их настраиваю.

Я настраиваю mongo с весенней загрузкой и пытаюсь использовать управление транзакциями и получаю сообщение об ошибке:

com.mongodb.MongoClientException: Sessions are not supported by the MongoDB cluster to which this client is connected at

Я следую нескольким шагам, указанным в приведенном выше ответе, и добавил несколько:

Измените mongo.cfg и добавьте это

replication:
   oplogSizeMB: 128
   replSetName: "rs0"
   enableMajorityReadConcern: true
Перезапустите службу, поскольку я использую Windows10.

Откройте консоль mongo и запустите rs.initilize ()

 10.06.2020 19:34
Мы смогли настроить локально, как показано ниже

В Linux включен файл конфигурации по умолчанию /etc/mongod.conf при использовании диспетчера пакетов для установки MongoDB.

В Windows по умолчанию <каталог установки> /bin/mongod.cfg файл конфигурации включены во время установки

В macOS включен файл конфигурации по умолчанию /usr/local/etc/mongod.conf при установке с официального крана Homebrew MongoDB.

Добавлять следующий конфиг

replication:
   oplogSizeMB: 128
   replSetName: "rs0"
   enableMajorityReadConcern: true
sudo service mongod restart;

монго;

rs.initiate({
      _id: "rs0",
      version: 1,
      members: [
         { _id: 0, host : "localhost:27017" }
      ]
   }
)
проверять для включения конфигурации

rs.conf()
мы можем использовать URL подключения как

mongodb://localhost/default?ssl=false&replicaSet=rs0&readPreference=primary
документы: параметры конфигурациирепликация одного экземпляра

Обновление пути 'x' вызовет конфликт в 'x'
Вопросы
MONGODB
Обновление пути 'x' вызовет конфликт в 'x'
Эта ошибка возникает, когда я пытался обновить элемент upsert:

Updating the path 'x' would create a conflict at 'x'
 20.06.2018 14:01
62
0
19 228
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Поле должно появиться либо в $set, либо в $setOnInsert. Не в обоих.

 20.06.2018 14:01
Если вы передадите один и тот же ключ в $set и $unset при обновлении элемента, вы получите эту ошибку.

Например:

const body = {
   _id: '47b82d36f33ad21b90'
   name: 'John',
   lastName: 'Smith'
}

MyModel.findByIdAndUpdate(body._id, { $set: body, $unset: {name: 1}})

// Updating the path 'name' would create a conflict at 'name'
 11.06.2019 16:25
У меня была такая же проблема при выполнении запроса Обновить с использованием PyMongo.
Я пытался сделать:


> db.people.update( {'name':'lmn'}, { $inc : { 'key1' : 2 }, $set: { 'key1' : 5 }})
Обратите внимание, что здесь я пытаюсь обновить значение key1 из двух Операторы обновления MongoDB.

Обычно это происходит, когда вы пытаетесь обновить значение тот же ключ более чем одним Операторы обновления MongoDB в одном запросе.

Вы можете найти список операторов обновления по здесь

 16.09.2019 12:02
db.products.update(
  { _id: 1 },
  {
     $set: { item: "apple" },
     $setOnInsert: { defaultQty: 100 }
  },
  { upsert: true }
)
Ниже приводится ключевое объяснение проблемы:

MongoDB creates a new document with _id equal to 1 from the condition, and then applies the $set AND $setOnInsert operations to this document.

Если вы хотите, чтобы значение поля устанавливалось или обновлялось независимо от вставки или обновления, используйте его в $ set. Если вы хотите, чтобы он устанавливался только при вставке, используйте его в $ setOnInsert.

Вот пример: https://docs.mongodb.com/manual/reference/operator/update/setOnInsert/#example

 24.06.2020 13:54
Начиная с MongoDB 4.2, вы можете использовать агрегатные конвейеры в обновлении:

db.your_collection.update({
    _id: 1
}, 
[{
    $set:{
        x_field: {
            $cond: {
                if: {$eq:[{$type:"$_id"} ,  "missing"]},
                then: 'upsert value',   // it's the upsert case
                else: '$x_field'    // it's the update case
            }
        }
    }
}],
{
     upsert: true
})
db.collection.bulkWrite () также поддерживает его

 09.07.2020 18:47
Вы не можете ссылаться на один и тот же путь более одного раза в обновлении. Например, даже если приведенное ниже приведет к чему-то логическому, MongoDB не позволит этого.

db.getCollection("user").updateOne(
  {_id: ...},
  {$set: {'address': {state: 'CA'}, 'address.city' : 'San Diego'}}
)
Вы получите следующую ошибку:

Updating the path 'address.city' would create a conflict at 'address'

Ошибка: сетевая ошибка при попытке запустить команду isMaster на хосте 127.0.0.1:27017
Вопросы
MONGODB
Ошибка: сетевая ошибка при попытке запустить команду isMaster на хосте 127.0.0.1:27017
Ошибка: сетевая ошибка при попытке запустить команду isMaster на хосте 127.0.0.1:27017 .> монго

Версия оболочки MongoDB v3.6.5 подключение к: mongodb: //127.0.0.1: 27017 2018-06-26T17: 37: 13.313 + 0530 I NETWORK [thread1] Socket recv () Установленное соединение было прервано программным обеспечением на вашем хост-компьютере. 127.0.0.1:27017 2018-06-26T17: 37: 13.313 + 0530 I NETWORK [thread1] SocketException: remote: (NONE): 0 error: SocketException socket exception [RECV_ERROR] server [127.0.0.1:27017] 2018-06-26T17: 37: 13.313 + 0530 E QUERY [thread1] Ошибка: сетевая ошибка при попытке выполнить команду isMaster на хосте 127.0.0.1:27017: connect@src/mongo/shell/mongo.js: 251: 13 @ (соединение): 1: 6 исключение: сбой подключения

 26.06.2018 14:10
10
0
22 801
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
См. Журналы Mongodb, чтобы найти основную причину. Для меня это была утечка соединений от одного из клиентов, вот что я нашел в журналах: NETWORK [listener] connection refused because too many open connections:

 06.09.2018 18:31
Эта проблема может возникнуть при попытке подключиться к базе данных, для которой требуется SSL.

 23.10.2019 14:55
просто зайдите в диспетчер задач и нажмите на сервис
см. приведенное ниже изображение, чтобы скопировать ссылку на URL-адрес 

найдите MongoDB и нажмите «Открыть службу».
см. изображение ниже, чтобы скопировать ссылку на URL-адрес 

затем снова найдите MongoDB и запустите остановленную БД в рабочий режим, просто нажмите зеленую кнопку точки, и вы снова подключитесь к MongoDB.
[см. изображение ниже, чтобы скопировать ссылку на URL]

 14.10.2020 07:58
В моем случае я запускал несколько приложений на других портах. Приведенные выше решения не сработали для меня .
Наконец, я закрыл все вкладки редактора кода и веб-приложения и перезапустил его. Теперь работает нормально.

Хорошо! Вы можете просто перезапустить систему, это тоже будет работать с наименьшими хлопотами.

 08.11.2020 15:15
Эта ошибка обычно вызвана попыткой подключиться без SSL к серверу MongoDB, которому он необходим. Используйте следующую команду для подключения:

mongo --ssl --username "$USERNAME" --password "$PASSWORD" --host "$HOST" --port  "$PORT"
 01.04.2021 20:23
Как уже говорилось, это может произойти, потому что серверу требуется TLS в соединении. Вы увидите причину в журналах сервера.

Для тех, кто заканчивает здесь, не зная, как это исправить (например, я), стоит отметить, как подключиться к этим серверам:

В командной строке вы можете использовать параметр --tls (https://docs.mongodb.com/manual/tutorial/configure-ssl-clients/)

mongo --tls [other params and/or connection string]

Если вы используете только строку подключения, вы можете добавить параметр tls=true:

mongo://[user]:[pass]@[host]/[db]?tls=true[&others]

Как «сортировать» и «ограничивать» результаты в mongodb?
Вопросы
MONGODB
Как «сортировать» и «ограничивать» результаты в mongodb?
Я пытаюсь выполнить запрос с «сортировкой» и «пределом». С МГО вы могли бы сделать Find(nil).Sort(“-when”).Limit(10), но новый, официальный драйвер mongo не имеет таких методов. Как я могу отсортировать и «ограничить» новый драйвер?

 04.07.2018 20:57
14
1
13 089
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Официальный драйвер не такой простой, как mgo. Вы можете сортировать и ограничивать, используя findopt.Limit и findopt.Sort.

Вы можете увидеть примеры из официального репозитория.

https://github.com/mongodb/mongo-go-driver/blob/5fea1444e52844a15513c0d9490327b2bd89ed7c/mongo/crud_spec_test.go#L364

 05.07.2018 00:01
Параметр сортировки, по-видимому, требует, чтобы вы добавили map[string]interface{}, где вы можете указать поле в качестве ключа и sortOrder в качестве значения (где 1 означает возрастание, а -1 означает убывание) следующим образом:

sortMap := make(map[string]interface{})
sortMap["version"] = 1
opt := findopt.Sort(sortMap)
Насколько я понимаю, это означает, что вы можете правильно сортировать результаты только по одному sortField, потому что ключи в карте go хранятся в случайном порядке.

 12.11.2018 12:28
В текущей версии Монго-гоу-драйвер v1.0.3 параметры упрощены. Например, чтобы выполнить поиск, сортировку и ограничение:

import (
"go.mongodb.org/mongo-driver/bson"
"go.mongodb.org/mongo-driver/mongo"
"go.mongodb.org/mongo-driver/mongo/options"
)

options := options.Find()

// Sort by `_id` field descending
options.SetSort(bson.D{{"_id", -1}})

// Limit by 10 documents only 
options.SetLimit(10)

cursor, err := collection.Find(context.Background(), bson.D{}, options)
Смотрите другие доступные варианты на godoc.org/go.mongodb.org/mongo-driver/mongo/options. Тем более FindOptions для всех возможных вариантов Find().

 23.11.2018 01:30
Ты можешь использовать

findOptions := options.Find()
findOptions.SetLimit(2)
findOptions.SetSkip(2)
...
cursor, err := collection.Find(context.Background(), bson.M{}, findOptions)
ресурс в https://www.mongodb.com/blog/post/mongodb-go-driver-tutorial

 03.06.2019 10:15
вам нужно импортировать пакет github.com/mongodb/mongo-go-driver/options для сборки findOptions.

import github.com/mongodb/mongo-go-driver/options

findOptions := options.Find() // build a `findOptions`
findOptions.SetSort(map[string]int{"when": -1}) // reverse order by `when`
findOptions.SetSkip(0) // skip whatever you want, like `offset` clause in mysql
findOptions.SetLimit(10) // like `limit` clause in mysql

// apply findOptions
cur, err := collection.Find(context.TODO(), bson.D{}, findOptions)
// resolve err

for cur.Next(context.TODO()) {
   // call cur.Decode()
}

 10.06.2019 07:45
ВАРИАНТ ОДНОЙ ЛИНИИ

Я знаю, что ответов уже много, но вы можете сделать это одной строкой (если он вам нужен для любого вашего случая)

// From the Doc
// func (f *FindOptions) SetSort(sort interface{}) *FindOptions

cursor, err := collection.Find(context.Background(), bson.M{}, options.Find().SetSort(map[string]int{"when": -1}).SetLimit(10))
SetSort () и другие в настоящее время возвращает сам родительский указатель

Mongodb с Node Js
Вопросы
NODE.JS
Mongodb с Node Js
Как я могу выполнить этот запрос mongodb через node js (мангуст). у меня есть две таблицы со следующими схемами, Я хочу получить имя пользователя и пароль из таблицы пользователей и получить полное имя из информационной таблицы.

var infoSchema = mongoose.Schema ({ khatam_id: строка, user_id: строка, полное имя: Строка, });

var usersSchema = mongoose.Schema ({ user_id: строка, имя пользователя: String, пароль: строка, });

 09.07.2018 07:31
2
5
468
6
 Ответы 6
установите мангуста на свою машину

npm install mongoose
импорт библиотеки мангуста

const mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
подключитесь к mongodb и создайте схему для своей таблицы

mongoose.connect('mongodb://localhost/myappdatabase');

const usersSchema = new Schema({
 _id: ObjectId,
 user_id: String,
 username: String,
 fullname: String
});

const Users = mongoose.model('Users', usersSchema );
Найти пользователя из таблицы «Пользователи» с помощью запроса mongo

Users.find({<here you can write your mongo query>}, function (err, docs) {
  // docs.forEach
});
 09.07.2018 07:57
вы должны использовать совокупность

db.users.aggregate([
{
   $lookup:
     {
       from: "info",
       localField: "user_id",
       foreignField: "_id",
       as: "userInfo"
     }
},
{ "$unwind": "$userInfo" },
])
 09.07.2018 08:16
Я не знаю, горячо ли вы, но если да, то можете использовать это.

userSchema.virtual('infos', 
 {
   ref: 'Info',
   localField: 'user_id',
   foreignField: 'user_id',
 })
Предполагая, что u вы называете infoSchema в качестве модели Info, mongodb преобразует ее в информацию, если вы не знали, поэтому виртуальное поле будет вызываться как infos ref, очевидно, ссылка на модель Info localField - это поле, относящееся к уникальному идентификатору userSchema, а foreignField - это поле, которое u ссылается в infoSchema, которое соответствует уникальному значению, упомянутому localfield u. Наконец, вместе со всеми полями в вашей userSchema добавьте это

{
toJSON: { virtuals: true },
toObject: { virtuals: true },
}
поэтому, когда вы запрашиваете пользователя Попробуйте, это действительно пригодится. Примечание: на самом деле он не создает поле в базе данных (виртуальный дух), он просто заполняет ваш объект ответа для внешнего рендеринга, что на самом деле лучше.

 09.07.2018 09:03
Подключитесь к MongoDB: перед выполнением программы убедитесь, что служба MongoDB запущена.

 var mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost:27017/your-database");
    mongoose.Promise = global.Promise;
    var connection = mongoose.connection;
    connection.once('open', function() {
       console.info('connected to database);

    });

    connection.on('error', function() {
      console.error('Mongoose connection error");

     });
    process.on('SIGINT', function() {
       mongoose.connection.close(function() {
       console.info('Mongoose connection disconnected due to app SIGINT.');
     });

   });
создать схему пользователя:

const Schema = mongoose.Schema;
    const usersSchema = new Schema({
     user_id: String,
     username: String,
     fullname: String
    });

  const Users = mongoose.model('Users', usersSchema );
Запустите запрос следующим образом:

 Users.findOne({query})
    .then(function(user){
      // do something
     })
    .catch(function(err){
      // handle error
     }) 
 09.07.2018 09:10
Вы можете использовать этот запрос, чтобы получить те типы записей, которые вам нужны:

db.users.aggregate([
{  $lookup: {
       from: "info",
       localField: "user_id",
       foreignField: "user_id",
       as: "userInfo"}},
{ "$unwind": "$userInfo" }])
 12.10.2019 19:05
Предполагая, что вы знаете, как установить setup mongoose и подключить свою базу данных, и вам нужен только правильный запрос, позвольте мне поделиться тем, что я заметил с помощью предоставленных вами моделей. Я не думаю, что есть необходимость в двух коллекциях, поскольку вы можете хранить одно и то же в одной коллекции, потому что это экономит время на поиск пользовательских данных из информационной схемы. Таким образом, пользовательская схема может быть

var usersSchema = mongoose.Schema({ 
  user_id: String, 
  username: String, 
  password: String,
  khatam_id: String,
  fullname: String
});
И используя следующий запрос, вы можете получить информацию о пользователе

Users.findOne({})
.then(function(user){
  // do something
 })
.catch(function(err){
  // handle error
 }) 
Это намного эффективнее и быстрее по сравнению с использованием агрегированных запросов или функций заполнения мангуста.

Если описанный выше метод вам не подходит, вы можете попробовать функцию заполнения мангуста.

UserSchema = new mongoose.Schema({
    user_id: String,
    password: String,
},
// schema options: Don't forget this option
// if you declare foreign keys for this schema afterwards.
{
    toObject: {virtuals:true},
    // use if your results might be retrieved as JSON
    // see http://stackoverflow.com/q/13133911/488666
    //toJSON: {virtuals:true} 
});

UserInfoSchema = new mongoose.Schema({
  user_id: String,
  khatam_id: String,
  username: String,
  fullname: String,
});


// Foreign keys definitions

UserSchema.virtual('userDetails', {
  ref: 'UserInfoSchema',
  localField: 'user_id',
  foreignField: 'user_id',
  justOne: true // for many-to-1 relationships
});


// Models creation

var UserSchema = mongoose.model('UserSchema', UserSchema);
var UserInfoSchema = mongoose.model('UserInfoSchema', UserInfoSchema);


// Querying

UserSchema.find({...})
    // if you use select() be sure to include the foreign key field !
   .select({.... user_id ....}) 
   // use the 'virtual population' name
   .populate('userDetails')
   .exec(function(err, books) {...})

Сообщество MongoDB: ошибка при установке службы от имени локального пользователя или пользователя домена
Вопросы
MONGODB
Сообщество MongoDB: ошибка при установке службы от имени локального пользователя или пользователя домена
При установке MongoDB Community в качестве локальной службы вам необходимо ввести будущие учетные данные вашей учетной записи:

Сообщество MongoDB: ошибка при установке службы от имени локального пользователя или пользователя домена

Если я введу, например: пользователь: MongoDB пароль: root

Я получил это сообщение об ошибке:

The domain, user name and/or password are incorrect. Remember to use "." for the domain if the account is on the local machine.

Сообщество MongoDB: ошибка при установке службы от имени локального пользователя или пользователя домена

Что мне здесь написать? Когда я что-то пишу, я получаю сообщение об ошибке.

 30.08.2018 10:32
46
4
21 437
6
 Ответы 6
Вот решение: Имя пользователя должно быть «именем пользователя» вашей системы / устройства. И пароль должен быть паролем вашей системы / устройства. Это странно, но это сработает.

 04.02.2019 14:25
Вот решение для Windows 10 (x64):

Если у вас нет домена (для домашнего или персонального компьютера), оставьте поле домена с "."
Если ваш компьютер принадлежит вашей компании, обратитесь к системному администратору, а затем в поле домена введите: Company_Domain

В поле имени пользователя

для персональных компьютеров: введите свой имя пользователя. Если вы вошли в систему с Учетная запись Microsoft, введите адрес электронной почты или имя своей учетной записи Microsoft.

для машин, предоставленных компанией: введите свое имя пользователя как Company_Domain / Your_Username

В поле пароля введите пароль, а не ПИН-код (если вы его настроили).

Это должно помочь.

 08.03.2019 02:38
бросить intall. перезапустите установочный файл msi и выберите вариант по умолчанию

 17.03.2019 15:32
У меня был пользователь с правами администратора без пароля. Я установил пароль и попытался установить и дал локального администратора и пароль. Он работает для меня.

 12.04.2019 14:11
Я использовал то же решение, что и Хан. Я пошел в каталог загрузки, и когда я на этот раз запустил файл msi, меня спросили, нужно ли устанавливать компас. После снятия этого флажка остальная часть установки работала с использованием параметров по умолчанию. Это ноутбук с Windows 10.

 25.05.2019 20:12
Вот лучшее решение: укажите имя пользователя и пароль для вашей системы / устройства. И пароль должен быть паролем вашей системы / устройства. Это странно, но сработает.

Как подключить MongoDB Compass с помощью строки подключения MLab
Вопросы
MONGODB
Как подключить MongoDB Compass с помощью строки подключения MLab
У меня есть база данных, размещенная на MLab, и я пытаюсь подключить ее к Compass. Я использую хост и порт, указанные в строке подключения, но он показывает ошибку, вот мой снимок экрана:

Как подключить MongoDB Compass с помощью строки подключения MLab

Что я делаю неправильно?

 14.09.2018 22:57
23
0
8 554
6
 Ответы 6
У меня была такая же проблема.

Я исправил это, обновив мою версию MongoDB Compass. В версии 1.15.4 проблем не возникало.

Кроме того, в базе данных аутентификации не должно быть значения «admin», а должно быть имя БД для подключения к вам.

Чтобы упростить подключение, скопируйте всю строку подключения в буфер обмена. Компас обнаруживает это и предлагает автоматически заполнить форму подключения.

 22.09.2018 13:07
Требуемые учетные данные не являются вашими учетными данными для входа в MLab, вместо этого это учетные данные пользователя базы данных.

Как их получить:
щелкните свою БД на MLab.

перейдите на вкладку пользователей и создайте нового пользователя.

использовать учетные данные созданных пользователей для доступа к базе данных.

установите базу данных аутентификации в качестве вашей базы данных.

 28.09.2018 23:39
У меня такая же проблема. URL-адрес MongoDB работал в коде, но Authentication failed отображался в MongoDB Compass.

Когда я проверил, мой пароль mongodb был iam%40me1234.

Здесь я использую шестнадцатеричный код HTML %40 в пароле для символа @.

Итак, если мы будем использовать исходный символ в пароле, например iam@me1234 в MongoDB Compass, тогда он будет отлично работать.

Вот полный список Hex коды

 27.10.2018 06:13
Проблема, с которой я столкнулся, заключалась в том, что компас Authentication Database, заполненный автоматически, не соответствовал моей настройке. По умолчанию это указывало на admin, но оно должно указывать на базу данных, с которой связан пользователь.

Резюмирую: базы данных admin не существовало.

Чтобы исключить это, дважды проверьте, на какую базу данных вы указываете. Он должен быть в имени, например ds739176/database_name, где database_name, как вы уже догадались, имя вашей базы данных.

Надеюсь это поможет.

 17.12.2018 21:45
Если бы ту же проблему удалось решить так:

mLab user tab

A. Зайдите в свою db в mlab и во вкладке выберите "users"

Б. Создайте нового пользователя, например: имя пользователя: admin, пароль: 123456.

C: Подойдите к компасу и залейте его так

Пример вашего пути подключения
ds012345.mlab.com:56789/myDBname

имя хоста

ds012345.mlab.com

порт

56789

аутентификация: имя пользователя / пароль

admin // or the name of the user you created in step A
123456 // or password for the user you created in step A

база данных аутентификации

myDBname // the name of your database in mlab

Для меня проблема с базой данных аутентификации.

— 
AutumnSky
 22.04.2019 15:21
Главное было База данных аутентификации, по умолчанию админ.

— 
Rohit Sharma
 17.05.2019 09:48
Это должен быть правильный ответ! Решил мою проблему

— 
Raphael Schubert
 10.12.2019 12:50
Решено! Тем не менее, я не понимаю, зачем нам создавать другого пользователя базы данных.

Подключите Mongodb к Django
Вопросы
PYTHON
Подключите Mongodb к Django
Я пытаюсь подключить mongodb к django, но получаю эту ошибку

ImproperlyConfigured: 'djongo' isn't an available database backend.
Try using 'django.db.backends.XXX', where XXX is one of:
    'mysql', 'oracle', 'postgresql_psycopg2', 'sqlite3'
Я читал сообщения, но все они старые и мне не помогают. Я создал базу данных mongodb с помощью студии 3T, имя базы данных - NewDataBase, пользователь - gsc-30310, порт - 27017 - хост localhost

Я использую следующие версии:

python3

Django==2.1.1
mongoengine==0.15.3
pymongo==3.7.1
Вот мой файл settings.py, расскажите, пожалуйста, как настроить новую версию django и python 3. спасибо

    """
Django settings for RestUserAPI project.

Generated by 'django-admin startproject' using Django 2.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os
import mongoengine

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '3==2yxbjdvt+hkqm#*%s7cs4g(_+cus9pdup%bxd*uk03g^&w%'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    #RestFrameWork
    'rest_framework',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'RestUserAPI.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'RestUserAPI.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        #'ENGINE': 'django.db.backends.sqlite3',
        #'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'ENGINE' : '',
        'NAME' : 'local',
        'USER' : 'gsc-30310',
        'PASSWORD': 'gsc-30310',
        'HOST': 'localhost',                      
        'PORT': '27017',
    }
}

# _MONGODB_USER = 'gsc-30310'
# _MONGODB_PASSWD = 'gsc-30310'
# _MONGODB_HOST = '127.0.0.1'
# _MONGODB_NAME = 'NewDataBase'
# _MONGODB_DATABASE_HOST = \
#     'mongodb://%s:%s@%s/%s' \
#     % (_MONGODB_USER, _MONGODB_PASSWD, _MONGODB_HOST, _MONGODB_NAME)
#
# mongoengine.connect(_MONGODB_NAME, host=_MONGODB_DATABASE_HOST)

AUTHENTICATION_BACKENDS = (
    'mongoengine.django.auth.MongoEngineBackend',
)

# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ],
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    # 'DEFAULT_PARSER_CLASSES': (
    #     'rest_framework.parsers.JSONParser',
    # )
    'DEFAULT_AUTHENTICATION_CLASSES':[
        'rest_framework.authentication.SessionAuthentication',
    #'rest_framework.authentication.BasicAuthentication'
    ],
    'DEFAULT_PERMISSION_CLASSES':[
        'rest_framework.permissions.AllowAny',
    ]

}
 05.10.2018 08:59
0
4
7 552
6
 Ответы 6
Django хорошо работает с реляционными базами данных, такими как PostGreSQL, MySQL. Каждые настройки django должны иметь конфигурацию базы данных, определенную с конфигурациями `` по умолчанию '', также требуется соответствующий движок базы данных, такой как psycopg2 для PostGreSQL, mysqlclient для MySQL - если у вас есть несколько конфигураций базы данных, вам необходимо использовать маршрутизатор базы данных, проверьте здесь для справки. В случае MongoDB - это база данных NoSql, которую Django официально не поддерживает, если вам действительно нужно использовать MongoDB, создайте конфигурацию mongoengine в представлениях, и вы можете определить учетные данные mongo в settings.py

 05.10.2018 10:16
Использование pymongo в представлениях django:

client = pymongo.MongoClient(MONGO_URI)
mongodb = client[MONGO_DB_NAME]
...
class MongoClassView(View):
   def post(request):
       ...
       mapped_data = {'name': 'John'}
       mongodb.get_collection('mycollection').insert(mapped_data)
       return JsonResponse({})
надеюсь это поможет

 05.10.2018 12:33
Вы можете попробовать эти шаги, чтобы подключить свой django 2.0 или более поздней версии к базе данных MongoDB:

1) Установите mongoengine для django 2.0

pip install -e git+https://github.com/MongoEngine/django-mongoengine.git#egg=django-mongoengine

2) Добавьте их в свой файл настроек:

from mongoengine import *

'django_mongoengine', // Add this line to installed app

MONGODB_DATABASES = {
"default": {
"name": '<db_name>',
"host": 'localhost',
"password": '',
"username": '',
"tz_aware": True, # if you using timezones in django (USE_TZ = True)
},
}
Вы можете найти детали для запроса базы данных здесь

 22.03.2019 10:39
сначала спасибо за ответы и поддержку в этом вопросе.

Я согласен с ответами Санчит и Шриш Катти, мы можем использовать mongoclient и mongoengine для подключения к MongoDB, оба работают хорошо.

Я нашел другой способ, есть проект с открытым исходным кодом djongo, и я использую djongo для подключения к базе данных MongoDB. Основное преимущество djongo заключается в том, что он позволяет использовать все, что предоставляет django (например, models.Model).

вот ссылка на страницу djongo GitHub https://github.com/nesdis/djongo

это настройки, которые нам нужны для использования djongo settings.py

DATABASES = {
'default': {
    'ENGINE': 'djongo',
    'NAME': 'MyDB',
}
}

 22.03.2019 12:05
Используйте mongoengine и djongo для подключения. Внесите следующие изменения в свой файл settings.py

mongoengine.connect(
        db=config.main_db,
        host=config.host,
        #username=config.username_admin,
        #password=config.password_admin,
        #authentication_source=config.authSource_admin,
        #authentication_mechanism=config.authenticationMechanisms)



DATABASES = {
        'default': {
            'ENGINE': 'djongo',
            'NAME': config.main_db,
            # 'USER': config.username_admin,
            # 'PASSWORD': config.password_admin,
            # 'HOST': config.host,
            # 'PORT': config.port,
        }
    }
 19.05.2019 13:03
используйте djongo для подключения к вашему mongodb: используйте эти версии на своем venv (если вы хотите использовать виртуальный env):

dataclasses==0.1

Django==2.0

djongo==1.2.30

pymongo==3.2

pytz==2018.5

sqlparse==0.2.3
и следуйте этому: Подключите MongoDB к Django (используя djongo)

Подключение мангуста к атласу mongoDB и nodejs
Вопросы
NODE.JS
Подключение мангуста к атласу mongoDB и nodejs
Это мой код подключения мангуста:

mongoose.connect("mongodb+srv://Sarthak:*******:Wb@cluster0-jli2a.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true })
    .then(()=>{
        console.info("Connected to mongo database");
    })
    .catch((err)=>{
        console.info("Error connecting mongo database",err);
    });
У меня есть ошибки ниже, есть идеи, как это исправить?

Error connecting mongo database { MongoParseError: Unescaped colon in authority section at parseConnectionString (/home/sarthak/Projects/thePracticalGuide/node_modules/mongodb-core/lib/uri_parser.js:250:23) at QueryReqWrap.dns.resolveTxt [as callback] (/home/sarthak/Projects/thePracticalGuide/node_modules/mongodb-core/lib/uri_parser.js:126:7) at QueryReqWrap.onresolve [as oncomplete] (dns.js:240:10) name: 'MongoParseError', [Symbol(mongoErrorContextSymbol)]: {} }

Подключение мангуста к атласу mongoDB и nodejs

 09.10.2018 21:57
3
4
7 505
6
Данный вопрос помечен как решенный
 Ответы 6
Описание ошибки довольно ясное - есть ли у вас двоеточие в пароле? Типичный формат строки подключения - «mongodb + srv: [имя пользователя: пароль @] host1 ...», поэтому неэкранированное двоеточие вызовет ошибку синтаксического анализа.

 09.10.2018 22:30
У меня была такая же проблема, также с "неэкранированными двоеточиями", хотя они были очень явно экранированы. Попробуй это:

var uri = encodeURI('mongodb+srv://Sarthak:*******:Wb@cluster0-jli2a.mongodb.net/test?retryWrites=true');
 19.02.2019 11:06
 Ответ принят как подходящий
Попробуйте использовать и этот способ подключения

 /* I've removed the ":Wb" between your password and @clus... As mongoDB atlas website didn't use that in my generated connection string */
  mongoose.connect("mongodb+srv://Sarthak:*******@cluster0-jli2a.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true });    

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
В противном случае следует учитывать:

Убедитесь, что вы добавили IP-адрес вашего подключаемого устройства в белый список IP-адресов в кране безопасности вашего кластера на веб-сайте атласа mongoDB (если вы уже сделали это, вы можете попробовать дать разрешение для каждого IP-адреса, добавив 0.0.0.0/0 чтобы проверить, нет ли проблем по этому поводу)
Что касается пароля, вы можете запутаться с паролем для входа в атлас mongoDB, а не с паролем пользователя, которого вы сделали для кластера (это распространенная ошибка, которую делают новички в атласе mongoDB).
Если нет и вы используете правильный пароль, вы можете попробовать удалить пользователя и заново создать его на вкладке безопасности (в представлении кластеров на веб-сайте атласа mongoDB). Сначала рассмотрите возможность предоставления пользователю очень простого пароля без каких-либо специальных символов и попробуйте подключиться снова, чтобы убедиться, что это не проблема с кодировкой.
В конце, если ничего из вышеперечисленного не сработало, попробуйте установить соединение через оболочку. (Вы можете увидеть строку подключения на веб-сайте атласа mongoDB, в разделе подключения вашего кластера. Там вы можете получить более точные журналы относительно причины вашей проблемы.
 19.04.2019 13:32
Просто перейдите на вкладку безопасности веб-сайта атласа, отредактируйте пароль пользователя и убедитесь, что вы не используете «@» или «:». Вот и все.

 24.05.2019 20:12
Вам необходимо закодировать свой пароль в строке подключения:

const connectionString = `mongodb://yourUsername:${encodeURIComponent('yourPassword')}@127.0.0.1:27017/mydb`;
 13.08.2019 17:00
Я получал «Неэкранированный двоеточие в авторитетном разделе» с помощью MongoDB Compass при вводе строки подключения.

Для которого -

Я вошел в кнопку «Создать свободный кластер» и создал кластер.

Потом я получил строку подключения. Однако при вводе доступной строки подключения я получил ошибку.

Я просто сменил пароль, войдя в атлас mongodb.

Вот процедура, которую я использовал ->

 [1]  To change the password - click on encode URI


 [2]   It will take you here -->


  [3]   Click on the edit button from the screen above and change your password.


Я выполнил вышеуказанные шаги и смог войти в систему.

Составной литерал использует поля без ключей
Вопросы
MONGODB
Составной литерал использует поля без ключей
Я работаю с новым официальным драйвером mongodb для golang. Я создал один сложный запрос, чтобы вставить данные в mongo db, а затем отсортировать их в соответствии со значением элемента. Я использую фильтр, в котором я создал тип bson, используя: -

filter := bson.D{{"autorefid", "100"}}
Но он показывает предупреждение, говорящее:

primitive.E composite literal uses unkeyed fields

Предупреждения создают беспорядок в моем коде.

 06.02.2019 08:19
71
4
50 646
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Предупреждения можно остановить, установив флаг проверки на false.

$ go doc cmd/vet
By default all checks are performed. If any flags are explicitly set to true, only those tests are run. Conversely, if any flag is explicitly set to false, only those tests are disabled. Thus -printf=true runs the printf check, -printf=false runs all checks except the printf check.

Unkeyed composite literals

Flag: -composites

Composite struct literals that do not use the field-keyed syntax.
Но предупреждение связано с тем, что не указано имя ключа при установке значения в структуре primitive.E.

Установка ключей для структуры primitive.E удалит предупреждающие сообщения. Например

filter := bson.D{primitive.E{Key: "autorefid", Value: "100"}}
Package primitive contains types similar to Go primitives for BSON types can do not have direct Go primitive representations.

type E struct {
    Key   string
    Value interface{}
}
E represents a BSON element for a D. It is usually used inside a D.

Для получения дополнительной информации см. примитив.E

 06.02.2019 08:24
Ты можешь измениться:

filter := bson.D{{"autorefid", "100"}}
к:

filter := bson.D{primitive.E{Key: "autorefid", Value: "100"}}
 16.12.2019 20:56
Вы можете просто изменить:

filter := bson.D{{"autorefid", "100"}}
к:

filter := bson.D{{Key: "autorefid", Value: "100"}}
//Пропустить примитив.E, как сказал Крис В.

 08.08.2020 21:03
Поскольку никто другой не указал на это, предупреждение предназначено для того, чтобы защитить вас от изменений в стороннем API, которые незаметно нарушат ваш код.

Игнорирование этого предупреждения vet потенциально может привести к очень неприятным и трудным для отслеживания ошибкам во время выполнения, так что вам будет лучше, если вы будете использовать всегда явно указывайте ключи сторонних struct.

Это было бы так, если бы сопровождающие библиотеки, которую вы используете, решили изменить порядок элементов в своем struct по какой-либо причине. Например, переключение Key на Value в случае OP. Ваш код по-прежнему выглядел бы хорошо компилируемым, но то, что вы намеревались использовать в качестве ключа, теперь будет передаваться как значение и наоборот, и все просто начнет ломаться неожиданным образом.

 04.09.2020 22:10
На самом деле, если представление заказал документа BSON не требуется, вы можете изменить свой документ BSON на представление неупорядоченный, просто изменив

filter := bson.D{{"autorefid", "100"}}
к

filter := bson.M{"autorefid": "100"}
Дополнительные сведения о bson.D и bson.M см. в ответе это stackoverflow. Сервер MongoDB достаточно умен, чтобы находить совпадающие индексы независимо от используемого порядка.

 12.02.2021 14:10
Если вы используете vscode, попробуйте отключить в настройках следующее:


MongoParseError: неверная строка подключения
Вопросы
JAVASCRIPT
MongoParseError: неверная строка подключения
Я пытаюсь подключить базу данных MongoDB с помощью этого кода, но при его запуске я получаю сообщение об ошибке (см. ошибку ниже после кода). Первоначальная ошибка была в строке, где она была устранена добавлением useNewUrlParser: true, но даже после этого я все еще получаю больше ошибок. Я использую MongoDB версии 4.0.1. Кто-нибудь знает, как решить эту ошибку?

mongoose.connect('User://localhost:27017/User',{ useNewUrlParser: true })
Ошибка при выполнении этого кода:

(node:11068) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): MongoParseError: Invalid connection string (node:11068) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

 16.02.2019 09:22
7
0
39 703
6
 Ответы 6
Вместо User://localhost используйте mongodb://localhost/ У меня такая же проблема.

 19.03.2019 17:05
У меня была такая же проблема. В моем случае проблема была вызвана моим паролем. Судя по всему, если в пароле есть специальные символы, нужно использовать HEX-значение.

 26.05.2019 05:02
Хост, который вы написали, неверен, и он должен быть

mongoose.connect('mongodb://localhost:27017/User',{ useNewUrlParser: true })
 05.10.2019 11:15
Попробуйте это, и это должно сработать,

mongoose.connect('mongodb://localhost/mycargarage', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.info('MongoDB Connected...'))
    .catch((err) => console.info(err))
 11.01.2020 20:22
Я получал ту же ошибку, затем использовал:

mongoose.connect("mongodb://localhost:27017/[yourDbName]", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
Замените [yourDbName] на имя вашей базы данных MongoDB:

 09.04.2020 19:24
Я просто добавил // после точек, чтобы указать локальные хосты, это для mongodb 5

const mongoose = require('mongoose');

const MONGODB_HOST = 'mongodb://localhost/'
const MONGODB_DB = 'usuarios'

mongoose.connect(MONGODB_HOST,{
    useUnifiedTopology: true,
    useNewUrlParser: true

})

    .then(db => console.info('Db connection established'))
    .catch(err => console.info(err))

Не удается подключиться к базе данных AWS с помощью TLS с проверкой ЦС сервера
Вопросы
MONGODB
Не удается подключиться к базе данных AWS с помощью TLS с проверкой ЦС сервера
В документации AWS указано, что для подключения к моему кластеру DocumentDB мне нужно использовать строку запроса, которая заканчивается так ?ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0. Это цепочка корневых сертификатов., который должен проверить мой клиент. Мне не нужен Сертификат клиента.

Используя драйвер MongoDB C# и этот конкретный запрос с файлом .pem в том же каталоге, я не могу установить соединение. Если я использую тот же файл .pem и строку запроса из Mongo Shell, я могу правильно подключиться к своей базе данных. Это не работает только в моем основном приложении .net, которое также работает на AWS.

Удалив TLS из кластера и удалив параметр ssl_ca_certs из запроса, я могу правильно подключиться к моему кластеру.

Я думал, что смогу преобразовать свой .pem файл в .pfx с помощью openssl, но мне нужно указать .pfx пароль и В документации MongoDB указано, что

It is imperative that when loading a certificate with a password, the PrivateKey property not be null. If the property is null, it means that your certificate does not contain the private key and will not be passed to the server.

Как я могу использовать файл .pem, предоставленный Amazon AWS для подключения к моей базе данных с помощью драйвера C# MongoDB?

 23.02.2019 00:46
8
4
6 112
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Попробуйте добавить файл ЦС RDS в хранилище доверенных сертификатов C#.

            X509Store store = new X509Store(StoreName.Root);
            X509Certificate2 ca = new X509Certificate2(<path_to_rds-combined-ca-bundle.pem>);
            try {
                store.Open(OpenFlags.ReadWrite);
                store.Add(ca);
            } catch (Exception ex) {
                Console.WriteLine("Root certificate import failed: " + ex.Message);
                throw;
            } finally {
                store.Close();
            }
 25.02.2019 09:29
###Подключение к базе данных документов с помощью простого консольного приложения .Net с SSL.
-> Прежде всего, включите SSL в кластере базы данных документов, установив для параметра tls значение «включено». Обязательно перезагрузите узел записи вашего кластера, чтобы перезагрузить весь кластер, чтобы применить изменения группы параметров. По умолчанию TLS включен, когда вы запускаете новый кластер БД документов.

-> Настройте SSL-сертификат в вашей среде:

1) Загрузите SSL-сертификат PKCS#7 на свой исходный компьютер с Windows по ссылке ниже:

https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.p7b

2) Нажмите на меню «Пуск», нажмите «Выполнить» и введите mmc

3) В MMC Файл->Добавить/удалить оснастку.

4) Выберите Сертификаты из списка оснасток и нажмите Добавить.

5) Сертификаты доверенного ЦС должны находиться в хранилище «Локальный компьютер», поэтому выберите переключатель «Учетная запись компьютера», нажмите «Далее», а затем выберите «Локальный компьютер». Нажмите «Далее», а затем «Готово».

6) Теперь на левой панели (в разделе «Корень консоли» вы увидите параметр «Сертификаты». Нажмите на него.

7) Появится список, щелкните правой кнопкой мыши «Доверенные корневые центры сертификации», затем выберите «Все задачи» -> «Импорт».

8) В открывшемся окне нажмите «Далее», найдите файл сертификата (.p7b), загруженный на шаге 1 (если вы не можете его найти, в раскрывающемся списке типов файлов выберите «Все файлы»), а затем «Продолжить». нажмите «Далее» и, наконец, «Готово». Затем сохраните конфигурацию.

-> Затем написал следующий код:

---------------------------------------------------

using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
namespace FirstDocDB
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var connectionString = "mongodb://pulkit:password@ClusterID:27017/?ssl=true&sslVerifyCertificate=true&replicaSet=rs0";
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("test");
            var collection = database.GetCollection("stuff");
            var document = collection.Find(new BsonDocument()).FirstOrDefault();
            Console.WriteLine(document.ToString());
        }
    }
}

---------------------------------------------------
-> И после сборки и запуска я успешно смог получить документ в коллекции с именем «stuff» в качестве вывода: { "_id": ObjectId("5c5a63b10cf861158c1d241c"), "привет" : "мир" }

Таким образом, после выполнения вышеуказанных шагов мне удалось успешно подключиться к базе данных документов с помощью драйвера Mongo для .Net.

 06.03.2019 05:28
У меня была аналогичная проблема, у меня был открыт билет с AWS, и он был решен с помощью тех же шагов, что и ответ Пулкита Агарвала.

Основным изменением была строка подключения, даже после добавления сертификата в локальное хранилище я все еще использовал строку запроса как «?ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0», которую необходимо изменить на «?ssl=true&sslVerifyCertificate=true&replicaSet =rs0"

 08.03.2019 05:03
Вот еще один способ. Однако я обнаружил, что при использовании SSL с драйвером С# Mongo не выполняется объединение соединений и открывается новое соединение для каждого вызова. Вы можете уменьшить количество активных подключений, включив MaxConnectionIdleTime, но это все равно не идеально, если ваше приложение создает много подключений.

    var connectionString = "username:password@cluster_endpoint:27017/?replicaSet=rs0";
    var clientSettings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://" + connectionString));
    var certificatePath = "ssl\rds-combined-ca-bundle.pem";

    var pem = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + certificatePath);
    byte[] certBuffer = GetBytesFromPEM(pem, "CERTIFICATE");

    clientSettings.UseSsl = true;
    clientSettings.SslSettings = new SslSettings()
    {
        ClientCertificates = new List<X509Certificate2>()
        {
            new X509Certificate2(certBuffer)
        },
        EnabledSslProtocols = System.Security.Authentication.SslProtocols.Default,
        CheckCertificateRevocation = true
        };

    clientSettings.VerifySslCertificate = true;

    clientSettings.SslSettings.ClientCertificateSelectionCallback = (sender, host, certificates, certificate, issuers) => clientSettings.SslSettings.ClientCertificates.ToList()[0];
    clientSettings.SslSettings.ServerCertificateValidationCallback = (sender, certificate, chain, errors) => true;

    clientSettings.MaxConnectionIdleTime = new TimeSpan(0, 0, 30);

    _client = new MongoClient(clientSettings);
    _database = _client.GetDatabase(db.ToString());

 09.03.2019 15:00
Ниже приведены примеры программного подключения к Amazon DocumentDB с помощью C# (и других драйверов) с включенным или отключенным протоколом TLS.

https://docs.aws.amazon.com/documentdb/latest/developerguide/connect.html

 26.04.2019 19:11
Стоит добавить, что в настоящее время драйвер MongoDB C# не поддерживает сертификаты PEM. Поэтому все, что ссылается на сертификат PEM, потерпит неудачу с System.Security.Authentication.AuthenticationException: The remote certificate is invalid according to the validation procedure.

Руководство разработчика AWS предлагает вместо этого использовать сертификаты P7B, которые можно скачать отсюда: https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.p7b

Это сработало для нас.

В Kubernetes и Windows нам нужно было добавить rds-combined-ca-bundlee.p7b в локальное хранилище доверенных сертификатов, как показано в Пример AWS C#, и НЕ ссылаться на него в строке подключения.

На Mac я изо всех сил пытался добавить сертификат P7B в хранилище ключей программно из-за проблемы access denied. Обновлю ответ, если мне удастся его решить.

Последнее, что стоит упомянуть, ответ, предоставленный Кенни Дики, по существу отключает проверку сертификата и делает установку небезопасной. Эта строка кода clientSettings.SslSettings.ServerCertificateValidationCallback = (sender, certificate, chain, errors) => true; всегда будет возвращать true.

Как экспортировать приложение Node Express для chai-http
Вопросы
JAVASCRIPT
Как экспортировать приложение Node Express для chai-http
У меня есть экспресс-приложение с несколькими конечными точками, и в настоящее время я тестирую его, используя mocha, chai и chai-http. Это работало нормально, пока я не добавил логику для объединенного соединения монго и не начал создавать конечные точки, которые зависели от соединения с БД. По сути, прежде чем я импортирую свои маршруты API и запускаю приложение, я хочу убедиться, что я подключен к монго.

Моя проблема в том, что мне трудно понять, как я могу экспортировать свое приложение для chai-http, но также убедиться, что есть соединение с БД, прежде чем тестировать какие-либо конечные точки.

Здесь я подключаюсь к монго, затем в обратном вызове применяю свой API и запускаю приложение. Проблема с этим примером заключается в том, что мои тесты начнутся до того, как будет установлено соединение с базой данных и до того, как будут определены какие-либо конечные точки. Я мог бы переместить app.listen и api(app) за пределы обратного вызова MongoPool.connect(), но тогда у меня все еще есть проблема с отсутствием соединения с БД во время выполнения тестов, поэтому мои конечные точки не будут работать.

сервер.js

import express from 'express';
import api from './api';
import MongoPool from './lib/MongoPool';
let app = express();
let port = process.env.PORT || 3000;
MongoPool.connect((err, success) => {
    if (err) throw err;
    if (success) {
        console.info("Connected to db.")
        // apply express router endpoints to app
        api(app);
        app.listen(port, () => {
            console.info(`App listening on port ${port}`);
        })
    } else {
        throw "Couldnt connect to db";
    }

})
export default app;
Как я могу протестировать свои конечные точки с помощью chai-http, убедившись, что существует соединение в пуле, прежде чем тесты будут фактически выполнены? Мне кажется грязным написание моего приложения таким образом, чтобы оно соответствовало тестам, которые я использую. Является ли это проблемой дизайна с реализацией моего пула? Есть ли лучший способ проверить мои конечные точки с помощью chai-http?

Вот тест, который я запускаю

test.js

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server').default;;
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Forecast', () => {
/*
  * Test the /GET route
  */
  describe('/GET forecast', () => {
      it('it should GET the forecast', (done) => {
        chai.request(server)
            .get('/api/forecast?type=grid&lat=39.2667&long=-81.5615')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

});
И это конечная точка, которую я тестирую

/api/прогноз.js

import express from 'express';
import MongoPool from '../lib/MongoPool';
let router = express.Router();
let db = MongoPool.db();

router.get('/forecast', (req, res) => {
    // do something with DB here
})

export default router;
Спасибо за любую помощь

 15.03.2019 06:11
8
1
1 621
6
Данный вопрос помечен как решенный
 Ответы 6
Просто создайте функцию ниже, чтобы подключиться к монго и заставить ее возвращать обещание. затем используйте await, чтобы дождаться его подключения и возврата. функция может быть такой

function dbconnect(){
    return new Promise(function(resolve, reject){

    MongoPool.connect((err, success) => {
    if (err) reject(err);
    if (success) {
        resolve({'status' : true})
    } else {
        reject(new Error({'status' : false}))
    }

})
    })
}
А затем используйте

await dbconnect();
api(app);
app.listen(port, () => {
    console.info(`App listening on port ${port}`);
})
теперь строка ожидания будет ждать, пока функция подключится к БД, а затем вернет успех или ошибку в случае сбоя. Это своего рода решение, которое вы можете использовать, но я бы не рекомендовал вам это делать, что мы на самом деле и делаем.

create services and use those services in routes, don't write DB code directly in routes.

а также

while writing tests for routes mock/stub those services, and test services separately in other test cases, where you just pass DB object and service will add functions on that DB objects, so in tests you can connect to DB and pass that object to those services to test functions, it will give you additional benefit, if you want to use dummy/test DB for testing you can set that in test cases.

 19.03.2019 08:47
Используйте функцию До в своих тестах, как показано ниже:

 describe('Forecast', () => {
  before(function(done){
   checkMongoPool(done); // this function should wait and ensure mongo connection is established.
  });
  it('/GET forecast', function(cb){
  // write test code here ...
  });
});
И вы можете проверить соединение mongodb следующим образом:

Способ 1: просто проверьте свойство readyState -

mongoose.connection.readyState == 0; // not connected
mongoose.connection.readyState == 1; // connected`
Способ 2: использовать события

mongoose.connection.on('connected', function(){});
mongoose.connection.on('error', function(){});
mongoose.connection.on('disconnected', function(){});
 19.03.2019 09:28
Express app — это экземпляр EventEmitter, поэтому мы можем легко подписаться на события. то есть app может прослушивать событие «готово».

Ваш файл server.js будет выглядеть следующим образом:

import express from 'express';
import api from './api';
import MongoPool from './lib/MongoPool';
let app = express();
let port = process.env.PORT || 3000;

app.on('ready', function() {
  app.listen(3000, function() {
    console.info('app is ready');
  });
});

MongoPool.connect((err, success) => {
  if (err) throw err;
  if (success) {
    console.info('Connected to db.');
    // apply express router endpoints to app
    api(app);

    // All OK - fire (emit) a ready event.
    app.emit('ready');
  } else {
    throw 'Couldnt connect to db';
  }
});

export default app;
 20.03.2019 06:53
Если вы используете собственный клиент mongodb, вы можете реализовать многоразовый пул, например:

MongoPool.js
// This creates a pool with default size of 5
// This gives client; You can add few lines to get db if you wish
// connection is a promise
let connection;
module.exports.getConnection = () => {
  connection = MongoClient(url).connect()
}

module.exports.getClient = () => connection

Now in your test you could,
const { getConnection } = require('./MongoPool')
...
describe('Forecast', () => {
  // get client connection
  getConnection()
  ...

In your route:
...
const { getClient } = require('./MongoPool')
router.get('/forecast', (req, res) => {
    // if you made sure you called getConnection() elsewhere in your code, client is a promise (which resolves to mongodb connection pool)
    const client = getClient()
    // do something with DB here
    // then you could do something like client.db('db-name').then(//more).catch()
})
 24.03.2019 15:46
Вы можете использовать running server вместо express instance.

Запустите свой сервер с помощью private port, затем пройдите тесты на работающем сервере.

пример: PORT=9876 node server.js

В тестовом блоке используйте chai.request('http://localhost:9876') (замените на свой протокол, IP-адрес сервера...) вместо chai.request(server).

 24.03.2019 16:10
 Ответ принят как подходящий
Получив хорошие отзывы, я обнаружил, что это решение работает лучше всего для меня на основе ответ Гомзи и Ответ Викаша Сингха.

В сервер.js я подключаюсь к пулу монго, а затем выдаю событие «готово» на экспресс app. Затем в тесте я могу использовать before(), чтобы дождаться появления события «готово» в приложении. Как только это произойдет, я могу приступить к выполнению теста.

сервер.js

import express from 'express';
import bodyParser from 'body-parser';
import MongoPool from './lib/MongoPool';
let app = express();
let port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(async () => {
    await MongoPool.connect();
    console.info("Connected to db.");
    require('./api').default(app);
    app.listen(port, () => {
        console.info(`Listening on port ${port}.`)
        app.emit("ready");
    });
})();

export default app;
test.js

//Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server'; 
let should = chai.should();
chai.use(chaiHttp);

before(done => {
  server.on("ready", () => {
    done();
  })
})
describe('Forecast', () => {
  describe('/GET forecast', () => {
    it('it should GET the forecast', (done) => {
      chai.request(server)
          .get('/api/forecast?type=grid&lat=39.2667&long=-81.5615')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });

});
Кажется, лучшее решение. Спасибо, что поделился.

— 
netishix
 20.09.2019 06:36
кто-нибудь когда-нибудь получал TypeError: server.on is not a function с таким подходом?

— 
SimonBarker
 11.09.2020 08:50
@SimonBarker в вашем случае является server экземпляром экспресса?

UnhandledPromiseRejectionWarning: Ошибка: URI не имеет имени хоста, доменного имени и tld
Вопросы
JAVASCRIPT
UnhandledPromiseRejectionWarning: Ошибка: URI не имеет имени хоста, доменного имени и tld
Я следую учебнику Веса Боса, Learn Node.js.

Я скачал все начальные файлы и создал базу данных с MongoDb Atlas.

Когда я запускаю npm start, я получаю эту ошибку:

UnhandledPromiseRejectionWarning: Error: URI does not have hostname, domain name and tld
DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Я использую переменную среды для подключения к базе данных

mongoose.connect(process.env.DATABASE);
и переменная выглядит так:

DATABASE=mongodb+srv://<username>:<password>@cluster1-rgvum.mongodb.net/test?retryWrites=true
Я не указал имя пользователя и пароль по понятным причинам. Если у кого-то есть идеи, как действовать, было бы очень признательно! Спасибо.

 31.03.2019 22:14
3
2
6 657
6
 Ответы 6
Попробуйте добавить цитаты:

DATABASE = "mongodb+srv://<username>:<password>@cluster1-rgvum.mongodb.net/test?retryWrites=true"
 01.04.2019 10:58
Убедитесь, что ваше имя пользователя и пароль не содержат специальных символов. Это нарушит синтаксический анализ.

Это то, что заставило меня столкнуться с той же ошибкой.

 11.04.2019 15:04
Это связано со специальными символами внутри вашего URI (возможно, вашего пароля).

Попробуй это:

"mongodb+srv://<username>:" + encodeURIComponent(<password>) + "@cluster1-rgvum.mongodb.net/test?retryWrites=true"
 03.06.2019 20:35
Это происходит потому, что ваш пароль не закодирован в URL-адресе. Соединение Mongo требует, чтобы пароль был закодирован в URL-адресе. Просто попробуйте добавить {useNewUrlParser: true} в свой метод подключения. Смотри ниже:

mongoose.connect(keys.mongoURI, {useNewUrlParser: true}, (err, db) => {});
 05.07.2019 00:41
Да, это из-за использования специальных символов в паролях, просто используйте этот простой метод, либо используя вышеуказанные сложные коды для кодирования.

В пароле используйте шестнадцатеричный код вместо символов, которые вы используете в пароле, например, если ваш пароль в тексте: - pass123#

поэтому используйте его как: - pass123%23

Получите коды ASCII отсюда и используйте шестнадцатеричный код: - https://ascii.cl/

Для получения более подробной информации: - https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password

 10.07.2019 16:05
Столкнулся с теми же проблемами. Это не закодированный URL...

БЫСТРОЕ решение Лучший способ создать безопасный пароль — использовать функцию «Автоматическое создание безопасного пароля» на сайте cloud.mongodb.com в соответствии с требованиями.

Как подключить Django ORM к монго-атласу?
Вопросы
DJANGO
Как подключить Django ORM к монго-атласу?
Я пытаюсь подключить свой экземпляр django к кластеру mongo db, используя django. Я проверил из разных источников, и вот как это приближается к работе:

Установить DNSPython
Имейте следующий DATABASES словарь в settings.py
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'test',
        'HOST': 'mongodb+srv://mongo_usr:' + urllib.parse.quote('mypassword') + '@domain_assigned.mongodb.net/test?ssl=true&ssl_cert_reqs=CERT_NONE&retryWrites=true',
        'ENFORCE_SCHEMA': False
    }
}

Он действительно находит конечную точку, но я получаю странную ошибку:

pymongo.errors.ServerSelectionTimeoutError: connection closed,connection closed,connection closed

кто-нибудь исправил это раньше?

 05.04.2019 23:38
6
5
7 747
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Я просто установил Djongo и MongoDB Atlas со следующим:

DATABASES = {
        'default': {
        'ENGINE': 'djongo',
        'NAME': '<db name>',
        'HOST': 'mongodb+srv://<db username>:<db password>@....mongodb.net/test?retryWrites=true',
        'USER': '<db username>',
        'PASSWORD': '<db password>',
    }
}
Надеюсь, это поможет!

 07.04.2019 17:06
Мне удалось подключиться к монго-атласу с помощью djongo, используя фрагмент из @Market Ahead здесь

Похоже, они не хотят, чтобы пароль содержал странные символы внутри. В таком случае даже побег не работает оптимально.

 14.04.2019 15:33
Установите пакет djongo, используя pip install djongo.

Убедитесь, что вы импортируете следующий модуль:

import urllib
Настройте параметры базы данных.

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': '<db_name>',
        'HOST': "mongodb+srv://<db_username>:" +
                urllib.parse.quote_plus("<db_password>") +
                "@........mongodb.net/test?retryWrites=true&ssl=true&ssl_cert_reqs=CERT_NONE&w=majority",
    }
}
Замените db_username, db_name и db_password своими учетными данными.

Также отредактируйте имя хоста, данное Mongo Atlas.

 01.11.2019 15:25
Получил эту работу без взлома следующим образом:

Установить pip install dnspython.
Обновите settings.py следующим образом:
'default': {
        'ENGINE': 'djongo',
        'NAME': '<dbname>',
        'CLIENT': {
            'host': "mongodb+srv://<username>:" + quote_plus('<password>') + "@<cluster-name>.mongodb.net/test?retryWrites=true&w=majority"
        },   
    }
Беги python manage.py makemigrations
Беги python manage.py migrate
 10.05.2020 20:39
Самое простое и правильное решение:

Шаг 1: Установите djongo и dnspython

pip install djongo

pip install dnspython

Шаг 2: Изменения в settings.py:

DATABASES = {
"default": {
    "ENGINE": "djongo",
    "CLIENT": {
        "host": "mongodb+srv://<username>:<password>@<cluster_name>.mongodb.net/?retryWrites=true&w=majority",
        "username": "<username>",
        "password": "<password>",
        "name": "<database_name>",
        "authMechanism": "SCRAM-SHA-1",
    },
}}
 01.06.2020 09:13
После редактирования файла settings.py вашей БД перейдите в свою библиотеку env и внесите эти изменения в pymongo/mongo_client.py.

HOST = "mongodb+srv://<Username>:<password>@cluster0-gbdot.mongodb.net/<databaseName>?retryWrites=true&w=majority"

Как проверить успех/неудача в запросах к базе данных Java Spring?
Вопросы
JAVA
Как проверить успех/неудача в запросах к базе данных Java Spring?
У меня есть код для удаления рецепта из моей базы данных mongoDB:

@RequestMapping(value = "/recipe/{id}", method = RequestMethod.DELETE)
public String deleteSingleRecipe(@PathVariable("id") String recipeId) {
    try {
        repository.deleteById(recipeId);
        return "Deleted RECIPE success";
    } catch (Exception ex) {
        return ex.toString();
    }
}
Это может успешно удалить рецепт на основе идентификатора. Однако я не уверен, как отловить такие случаи, когда рецепт даже не существует или если удаление не удалось.

С JavaScript/Node это было очень просто, потому что я мог передать функцию обратного вызова, и в зависимости от того, был ли результат/ошибка нулевым, я мог определить успех запроса и продолжить. Я совершенно не понимаю, как это сделать в Java/Spring.

Когда я попытался удалить рецепт во второй раз, я все равно получил сообщение «удален рецепт успешно».

 08.04.2019 08:14
2
0
6 301
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Вы можете добавить проверку перед использованием existsById

boolean isFound = repository.existsById(recipeId);
Returns whether an entity with the given id exists.

 08.04.2019 08:19
Попробуйте добавить новый метод в интерфейс репозитория, подобный этому

@Modifying
@Query("DELETE FROM MY_TABLE WHERE ID = ?1")
default boolean deleteById(IdPrimitiveType id){
  return true;
 }
Надеюсь, поможет

 08.04.2019 08:58
Если вы проверите интерфейс JPARepository, вы получите

/**
     * Deletes the entity with the given id.
     * 
     * @param id must not be {@literal null}.
     * @throws IllegalArgumentException in case the given {@code id} is {@literal null}
     */
    void deleteById(ID id);

/**
     * Deletes a given entity.
     * 
     * @param entity
     * @throws IllegalArgumentException in case the given entity is {@literal null}.
     */
    void delete(T entity);
поэтому в соответствии с вашим требованием он не будет генерировать никаких исключений, если данный идентификатор не существует в БД.

для этого вы можете использовать boolean isFound = repository.existsById(recipeId);, и если isFound верно, вы можете удалить его. и если isFound ложно, вы можете выдать исключение.

второй способ, вы можете проверить

  public class SimpleJpaRepository<T, ID> implements JpaRepository<T, ID>, JpaSpecificationExecutor<T>
этот класс содержит метод deleteById. и этот метод выдаст исключение, если id не существует в БД.

/*
     * (non-Javadoc)
     * @see org.springframework.data.repository.CrudRepository#delete(java.io.Serializable)
     */
    @Transactional
    public void deleteById(ID id) {

        Assert.notNull(id, ID_MUST_NOT_BE_NULL);

        delete(findById(id).orElseThrow(() -> new EmptyResultDataAccessException(
                String.format("No %s entity with id %s exists!", entityInformation.getJavaType(), id), 1)));
    }
 08.04.2019 10:02
Об этом сообщили Spring как об ошибке (которая все еще открыта): https://jira.spring.io/browse/DATAMONGO-1997?jql=text%20~%20%22deleteById%22

Проверка того, существует ли он до или после, не была для нас решением, поскольку она чувствительна к состоянию гонки. Лучший и более эффективный обходной путь, который мы нашли, был предложен @SandOfTime: в вашем интерфейсе MongoRepository добавьте:

@DeleteQuery("{_id:?0}")
Long deleteByIdReturningDeletedCount(String id);
 19.09.2019 18:16
У меня также было подобное требование, но мой случай немного отличается. Сначала я скажу свое требование: мне нужно добавить пользователя, если имя пользователя не существует. Итак, в репозитории есть встроенный метод поиска имени пользователя.

Usermodel findByUsername(String username);
Итак, на уровне контроллера я реализовал следующее.

public String signUp(@RequestBody Usermodel user) {
        if (userRepository.findByUsername(user.getUsername())==null) {
            userRepository.save(user);
            return "Success";
        }
        else{
            return "Username Already Exsist";
        }
    }
Я думаю, что для вашего случая это также может быть применено. Нужно проверить recipeId, а затем вы можете выполнить удаление.

 18.06.2020 15:14
Начиная с Spring Data JPA (>=1.7.x), мы можем использовать производный запрос delete или remove. Он возвращает количество удаленных объектов или количество удаленных объектов.

Используя его, вы можете обновить свой код как:

public interface RecipetRepository extends CrudRepository<Reciepe, Long> {
    long deleteById(String id);
}
и мы можем создать исключение, если объект не существует.

@RequestMapping(value = "/recipe/{id}", method = RequestMethod.DELETE)
public String deleteSingleRecipe(@PathVariable("id") String recipeId) {
    long numberOfRecipiesDeleted;
    try {
        numberOfRecipiesDeleted = repository.deleteById(recipeId);
    } catch (DataAccessException ex) {
        return ex.toString();
    }
    if (numberOfRecipiesDeleted == 0){
      throw new ReciepeNotFoundException();
    }
    return "Deleted RECIPE success";
}

Не удается подключиться к MongoDB Atlas (queryTxt ETIMEOUT)
Вопросы
MONGODB
Не удается подключиться к MongoDB Atlas (queryTxt ETIMEOUT)
Я не могу подключиться к MongoDB Atlas через драйвер, mongoshell или компас MongoDB. Получить ошибку: queryTxt ETIMEOUT

Error:  { Error: queryTxt ETIMEOUT clustermasjeed1-ekpfe.mongodb.net
    at QueryReqWrap.onresolve [as oncomplete] (dns.js:197:19)
  errno: 'ETIMEOUT',
  code: 'ETIMEOUT',
  syscall: 'queryTxt',
  hostname: 'clustermasjeed1-ekpfe.mongodb.net' }
Я следовал руководству из атласа mongodb (mongodb.cloud) о том, как подключиться:

const MongoClient = require(‘mongodb’).MongoClient;
const uri = "mongodb+srv://<username>:<password>@clustermasjeed1-ekpfe.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
с заменой имени пользователя и пароля реальным строковым значением. У меня есть сильное подозрение, что причиной является часть +srv. При использовании mlab ранее соединение было только mongodb:// (без +srv)

 28.05.2019 05:27
0
1
5 363
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Решил проблему, обратившись в службу поддержки MongoDB. Строка URI должна быть изменена на:

mongodb://<username>:<password>@clustermasjeed1-shard-00-00-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-01-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-02-ekpfe.mongodb.net:27017/test?ssl=true&replicaSet=ClusterMasjeed1-shard-0&authSource=admin&retryWrites=true
Это все имена хостов (первичные и вторичные), которые вы можете увидеть на вкладке метрик кластера.

 28.05.2019 06:26
Я столкнулся с подобной проблемой.

Моя строка была:

.connect(
    "mongoURI": "mongodb+srv://user:<password>@cluster0-lo1zs.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
Терминал кода VS показывает эти ошибки.

[0] Server started on port 9999<br/>
[0] queryTxt ETIMEOUT cluster0-lo1zs.mongodb.net<br/>
[1] Proxy error: Could not proxy request /api/profile/user/5f2be6e70fa40287805f6488 from localhost:3000
to http://localhost:9999/.<br/>
[1] See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNRESET).<br/>
[1]<br/>
[0] [nodemon] app crashed - waiting for file changes before starting...<br/>
Это вызвало ошибку, которую я решил, внеся это изменение:

.connect(
  "mongoURI": "mongodb://user:<password>@cluster0-shard-00-00-lo1zs.mongodb.net:27017,cluster0-shard-00-01-lo1zs.mongodb.net:27017,cluster0-shard-00-02-lo1zs.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
)
Более подробную информацию можно найти здесь

 06.08.2020 13:50
Я пишу этот ответ после изучения многих веб-сайтов и даже связался со службой поддержки MongoDB.

Проблема связана с DNS-сервером вашего Wi-Fi. Пожалуйста, измените свой Wi-Fi или используйте мобильную точку доступа, а также добавьте в белый список текущий подключенный IP-адрес на MongoDB, это обязательно поможет, или измените DNS вашего Wi-Fi.

 29.08.2020 00:06
Ценим Дэвида Бака и Абхая Кумара:

Эта проблема связана с подключением к сети. Wi-Fi или другое проводное соединение не получает полных привилегий для передачи или подключения вашей системы к сети MongoDB. Решение: Белый список IP в Mongodb и вам нужно добавить 8.8.8.8 в Public DNS вашей системы под Ethernet - IP V4.

 17.10.2020 20:02
Я просто решил это, выбрав версию «2.2.12» в раскрывающемся меню.

Строка была изменена с

mongodb+srv://username:password@cluster0.nbp7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

К

mongodb://username:password@cluster0-shard-00-00.nbp7d.mongodb.net:27017,cluster0-shard-00-01.nbp7d.mongodb.net:27017,cluster0-shard-00-02.nbp7d.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11wic9-shard-0&authSource=admin&retryWrites=true&w=majority

У меня это сработало 20 октября 2021 г. (Node js и Macbook в качестве ОС)

Пожалуйста, проверьте скриншот для получения дополнительной помощи.



 20.10.2021 11:37
У меня была та же проблема, и я исправил ее, понизив версию соединения драйвера узла вместо использования узла v4, попробуйте использовать узел 2.2.

Как реализовать MongoDB в angular?
Вопросы
ANGULAR
Как реализовать MongoDB в angular?
Я использую угловой7 и хочу установить MongoDB в свое приложение Angular. Каков самый прямой, то есть самый простой способ сделать это?

 18.06.2019 08:13
3
1
2 771
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Angular — это интерфейсный фреймворк. Вы можете реализовать его в любой среде в качестве посредника для подключения базы данных к MongoDB.

если вы хотите использовать MongoDB, поместите это на серверную часть.

 18.06.2019 08:22
Angular — это фреймворк пользовательского интерфейса Frond End. Если вы хотите использовать MongoDB в качестве своей базы данных, стандартным способом является создание серверного приложения с остальными API-интерфейсами, подключающимися к вашей MongoDB.

1) Установите и настройте базу данных MangoDB. 2) Node поддерживает MongoDB с объектным моделированием под названием Mangoose, вы можете добавить этот пакет в качестве зависимости в свое серверное приложение. 3) Напишите остальные API, охватывающие вашу логику для выполнения операций с MangoDB. Используйте Express JS, который имеет предопределенный способ написания API в узле JS с минимальным кодированием. 4) Подключитесь к этим API из своего приложения Angular UI.

Вы также можете иметь все эти Angular, API-интерфейсы, созданные в одном приложении, которые может быть сложно поддерживать, если возможности приложения расширятся.

 18.06.2019 08:26
Angular — это фреймворк на стороне клиента, что означает, что невозможно иметь некоторые внутренние возможности, такие как подключение к серверу mongdb.

просто вы можете внедрить экспресс-приложение и подключиться к mongdb и создать API для взаимодействия с серверной частью через http-протокол

 18.06.2019 08:28
Angular — это фреймворк Внешний интерфейс. Вы можете подключить Mongo DB к серверной платформе, такой как Java, Dotnet, nodejs и т. д.,

Затем вы можете общаться с ними через API.

 18.06.2019 08:42
Чтобы внедрить MongoDB в качестве базы данных для вашего приложения с использованием Angular в качестве интерфейсной среды, вы можете использовать express.js и mongoose в файле с именем server.js, где вы запустите сервер для своего приложения.

Используйте mongoose для подключения вашего приложения к базе данных mongodb, например mongoose.connect('mongodb://localhost:27017/myangularappdb', ...) или MongoClient const MongoClient = require('mongodb').MongoClient;. Вы можете запустить свою MongoDB локально или использовать mLab mlab.com.

 18.06.2019 08:42
Mongo DB, если быть точным, является документно-ориентированной базой данных. и может использоваться с технологиями, которые имеют дело с бэкэнд.

Ошибка сообщества MongoDB
Вопросы
MONGODB
Ошибка сообщества MongoDB
У меня была эта ошибка во время работы brew services start mongodb-community

mongodb-community error   root /Library/LaunchDaemons/homebrew.mxcl.mongodb-community.plist
Я пытался переустановить home brew, mongodb и множество других решений, но ничего не помогло. Любая помощь будет оценена, спасибо!

 15.12.2020 16:06
9
0
13 714
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Здравствуйте, так работает sudo brew services start mongodb-community исправлено после остановки mongodb.

 15.12.2020 21:22
У меня была такая же проблема. Наконец-то обнаружил ошибку в /usr/local/var/log/mongodb/mongo.log, которая указывала на то, что мои файлы базы данных в /usr/local/var/mongodb были слишком старыми (версия 4.2) для этой версии mongodb (версия 4.4). Поскольку эти файлы мне были не нужны, я их удалил, и mongodb запустился нормально. Почитай логи, там подскажут что не так.

 17.12.2020 17:43
Здравствуйте, только что решил похожую проблему. Если вы попытаетесь запустить mongodb с правами root, появится сообщение об ошибке, и проблема, скорее всего, связана с правами доступа к файлу.

Вы можете подтвердить, где (каталог может отличаться, это значение по умолчанию): показать журнал монго с cat /usr/local/var/log/mongodb/mongo.log

Скорее всего, вы видите ошибку «Отказано в доступе» к файлу. (мой был для кучи файлов).

Вам нужно будет запустить chown для этих файлов:

chown -R <login> /usr/local/var/mongodb

должен решить это.

Вы можете проверить, запустив ls -la <directory> и убедиться, что теперь все принадлежит вашему логину.

 28.05.2021 19:33
Я пытался в течение 2 часов решить эту проблему. Проблема заключалась в неожиданном токене в файле mongod.conf, из-за которого mongodb-community@4.2 не запускался.

Чтобы отследить проблему, откройте файл .plist и посмотрите расположение выходного файла журнала, вы можете найти его после клавиши StandardErrorPath.

 28.01.2022 14:02
Пожалуйста, обратитесь https://blog.codewithdan.com/installing-mongodb-on-mac-catalina-using-homebrew/ Я следовал этому, чтобы создать папку data/db в папке /System/Volumes/Data и обновил путь в /usr/local/etc/mongod.conf для переменной 'dbPath:'

Убедитесь, что пользователь и права пользователя (пользователь, который создает этот файл, является тем же пользователем, который запускает службу brew для Mongo)

До сих пор мои услуги не начались. Я получил ошибку, когда запускаю «Список служб варки»

Та же ошибка, упомянутая выше по этому вопросу.

Когда я проверил /usr/local/var/log/mongodb/mongo.log

Не удалось отменить связь /tmp/mongodb-27017.sock с этим файлом.

Пожалуйста, обратитесь к следующей ссылке, чтобы решить эту проблему (просто удалите этот файл .sock)

https://www.dev2qa.com/how-to-fix-failed-to-unlink-socket-file-error-when-start-mongo-db-on-macos/

Затем я убедился, что разрешения для data/db хорошие.

d-wx--x--x 3 имя колесо 96 22 марта 11:20 данные

Затем остановил службы варки для монго и запустил снова. Это сработало.

 22.03.2022 21:00
Другая причина этой ошибки может заключаться в том, что вы забыли включить обратно несовместимые функции вашей старой версии. Это может произойти, если вы обновили несколько версий одну за другой. Например, если вы хотите перейти с 3.2 на 3.6, вам придется установить все промежуточные версии (в данном случае 3.4), и для каждой из них вам придется включить «обратно несовместимые функции 3.4» перед установкой следующую версию (в данном случае 3.6), используя эту команду:

db.adminCommand( { setFeatureCompatibilityVersion: "3.4" } ) 
(например, согласно инструкциям в https://www.mongodb.com/docs/manual/release-notes/3.4-upgrade-standalone/ ). Если вы забыли сделать это, версия 3.6 не запустится, показывая в файле журнала (/usr/local/var/log/mongodb/mongo.log) уведомление «* ВАЖНО: ПРОБЛЕМА ОБНОВЛЕНИЯ: файлы данных должны быть полностью обновлены до версии 3.4 перед попыткой обновления до 3.6; см. http://dochub.mongodb.org/core/3.6-upgrade-fcv для получения более подробной информации».

Для механизма аутентификации "SCRAM-SHA-1" требуется libmongoc, созданный с помощью --enable-ssl
Вопросы
MONGODB
Для механизма аутентификации "SCRAM-SHA-1" требуется libmongoc, созданный с помощью --enable-ssl
Получение сообщения об ошибке при подключении к базе данных с использованием Laravel 5.4 и Mongodb 3.6

The "SCRAM-SHA-1" authentication mechanism requires libmongoc built with --enable-ssl

Он отлично работает в ubuntu 16.04 с такими же версиями, но не в AWS Linux.

Установлен LAMP [php70, apach24]:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html
Установлен Mongodb [3.6]:

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/
Установлен драйвер php-mongodb для php7:

sudo yum -y install php7-pear php70-devel gcc  // completed
sudo pecl7 install mongodb                     // completed 
sudo yum install openssl-devel                 // completed
Драйвер php-mongodb установлен и обновлен до php.ini, mongodb также отображается в phpinfo ().

мы обнаруживаем, что libmongoc ssl отключен от phpinfo, это проблема?

Для механизма аутентификации &quot;SCRAM-SHA-1&quot; требуется libmongoc, созданный с помощью --enable-ssl

Как мы можем это включить?

 26.05.2018 12:11
5
3
6 905
7
Данный вопрос помечен как решенный
 Ответы 7
 Ответ принят как подходящий
Ошибка из-за того, что libmongoc SSL и libmongoc Crypto отключены из драйвера php-mongodb и включены с помощью следующей команды.

sudo pecl7 config-set php_ini /etc/php.ini
После установки драйвера mongodb sudo pecl7 install mongodb мы должны установить вышеуказанное.

теперь работает нормально.

 26.05.2018 15:12
В Ubuntu 18.04 LTS, PHP 7.2.7

Пришлось установить дополнительные пакеты:

sudo apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev
Затем переустановите mongodb:

sudo pecl uninstall mongodb
sudo pecl install mongodb
Затем убедитесь, что SSL включен:

php -i | grep mongo
/etc/php/7.2/cli/conf.d/20-mongodb.ini, mongodb
libmongoc bundled version => 1.11.0 libmongoc SSL => enabled libmongoc SSL library => OpenSSL libmongoc crypto => enabled libmongoc crypto library => libcrypto

Перезагрузите php:

sudo service php7.2-fpm restart
 13.07.2018 15:03
На моем Debian 9 компиляция модуля завершается неудачно со следующей ошибкой:

configure: error: OpenSSL libraries and development headers could not be found

Если у вас такая же ошибка, попробуйте следующее:

apt-get remove libssl-dev
apt-get install libssl1.0-dev
 05.09.2018 18:54
Для тех, у кого ошибка на Альпийский докер. Вы должны добавить в свой Dockerfile:

RUN apk add curl-dev openssl-dev

вместо sudo apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev

Я тоже использовал RUN pecl config-set php_ini /etc/php.ini

 24.07.2019 09:32
Как по мне, эта команда делает все на Debian 9 и php 7.0

sudo apt-get install php-mongodb
После этого просто перезапустите службу Apache2.

 13.09.2019 21:39
Я получаю то же сообщение с помощью докера. Я добавляю в свой файл Docker

apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev
и беги

docker-compose up -d --build
 22.09.2019 11:07
Вот как я решил в CentOS 7

Удалите расширение mongodb:

pecl uninstall mongodb
Установить openssl

sudo yum install openssl-devel
Переустановите расширение MongoDB еще раз

pecl install mongodb

Отклонение необработанного обещания: ошибка: неверный URL-адрес, не может быть проанализирован
Вопросы
MONGODB
Отклонение необработанного обещания: ошибка: неверный URL-адрес, не может быть проанализирован
Я новичок в aws и mongodb одновременно, поэтому я застрял на очень простом этапе, пытаясь подключиться к моей базе данных mongo, размещенной на экземпляре amazon linux ec2. Причина в том, что я не могу построить путь к своей базе данных.

Вот что я пытаюсь использовать:

mongoose.connect('mongod://ec2-user@ec2-XX-XX-XXX-XXX-XX.compute-1.amazonaws.com:27017/test' )
А вот результат моей тестовой лямбда-функции:

UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Error: URL malformed, cannot be parsed
Я использую mongodb 3.6.5.

 29.05.2018 19:45
8
0
25 227
7
Данный вопрос помечен как решенный
 Ответы 7
 Ответ принят как подходящий
Mongoose 5.x поддерживает следующий синтаксис для авторизации, а также убедитесь, что вы не использовали какой-либо специальный символ в URL-адресе, например @,-,+,>

mongoose.connect(MONGO_URL, {
  auth: {
    user: MONGO_DB_USER,
    password: MONGO_DB_PASSWORD
  }
})
Или, если вы хотите удалить предупреждение о депригации Избегайте «текущего парсера строки URL устарел»

Добавить опцию useNewUrlParser

mongoose.connect(MONGO_URL, {
  auth: {
    user: MONGO_DB_USER,
    password: MONGO_DB_PASSWORD
  },
  { useNewUrlParser: true }
})
 29.05.2018 20:09
Моя проблема заключалась в более простой проблеме с URI. Поскольку в адресе mongod был символ @.

Мне пришлось использовать это:

return mongoose.connect(encodeURI(process.env.DB_CONNECT)); //added ');'
 30.05.2018 04:52
Я просто хочу обновить ответ от @ anthony-winzlet, потому что у меня такая же ошибка, и я решил ее с помощью этого кода.

mongoose.connect(url, {
  auth: {
    user:'usrkoperasi',
    password:'password'
  },
  useNewUrlParser:true
}, function(err, client) {
  if (err) {
    console.info(err);
  }
  console.info('connect!!!');
});
Я просто добавляю обратный вызов и useNewUrlParser:true. Пользуюсь "mongoose": "^5.2.7",.

Удачного кодирования!

 08.08.2018 02:53
Если вы использовали следующий URI в файле среды, например MongoDB://<dbuser>:<dbpassword>@ds055915.mlab.com:55915/fullstack-vue-graphql Убедитесь, что ваш пароль в MONGOD_URI не содержит специального символа, такого как @. Я использовал @ как часть моего пароля и получал ошибку. После того, как я удалил специальные символы из моего DB Password, все заработало, как ожидалось.

 29.12.2018 08:17
В моем случае ниже работало нормально.

Внутри db.js

const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://host-name:27017/db-name?authSource=admin";
const MONGODB_USER = "mongouser";
const MONGODB_PASS = "myasri*$atIP38:nG*#o";

const authData =  {
    "user": MONGODB_USER,
    "pass": MONGODB_PASS,
    "useNewUrlParser": true,
    "useCreateIndex": true
}; 
mongoose.connect(
    MONGODB_URI, 
    authData,
    (err) => {
        if (!err) { console.info('MongoDB connection succeeded.'); }
        else { console.info('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
    }
);
Примечание:

Моя версия Node - 10.x

Версия сервера MongoDb - 3.6.3

версия мангуста - ^ 5.1.2

 11.02.2019 09:16
Если вы развернули свое приложение в Heroku, убедитесь, что вы обновили Config Vars, как они есть в вашем файле .env. По крайней мере, так было в моем случае.

 03.09.2020 15:31
У меня такая же проблема, но проблема с паролем не должен особый персонаж

password not use like this  Admin@%+admin.com wrong


password use like this  Admin  right
или любой пароль, который вы хотите использовать

Ошибка JavaScript в основном процессе: Компас
Вопросы
MONGODB
Ошибка JavaScript в основном процессе: Компас
Когда я запускал клиентское приложение mongoDB Compass 1.13.1, я получаю сообщение об ошибке: Ошибка JavaScript в основном процессе: Компас

Как я могу это решить? Та же проблема была здесь.

 22.06.2018 20:20
26
0
17 209
7
Данный вопрос помечен как решенный
 Ответы 7
Вот несколько дополнительных способов решения:
Из \ AppData \ Local \ MongoDBCompass \ app-1.13.1 \ resources удалите файл с именем app.asar перед его копированием куда-нибудь (в моем случае это был рабочий стол). Затем снова вставьте файл app.asar в этот путь \ AppData \ Local \ MongoDBCompass \ app-1.13.1 \ resources и перезапустите Compass.
Перезагрузите Windows и попробуйте снова запустить Компас.
Если ничего не помогает, переустановите приложение (например, другую версию).
 22.06.2018 20:20
 Ответ принят как подходящий
Решение, которое сработало для меня:

Перейти в диспетчер задач
Убейте процесс под названием "Графический интерфейс MongoDB".
 05.09.2018 20:02
Застрявший?
открыть приложение -> получить ошибку -> без перезагрузки ->

диспетчер задач -> «Графический интерфейс MongoDB» или «MongoDBCompassCommunity» -> уничтожить процесс

Профилактика?
Никогда закрыть приложение, используя собственные методы закрытия (кнопка "Икс" / "Закрыть окно")

Всегда выйти через Connect -> Quit (Ctrl+Q)

Нет необходимости сначала отключать. Это просто плохо сделанное электронное приложение.

Ответ основан на решении от @Senne Verhaegen

 17.10.2018 13:36
Я получил эту ошибку, потому что закрыл приложение, не отключаясь. Я попытался запустить программу и получил ошибку. Ждал секунд 30 и тут сюрприз! Компас выскочил и работает - хотя ошибка отображалась. Должно быть, он очистился. Я использую MongoDB Compass 4.0.3 Enterprise.

 07.11.2018 19:06
Проблема в том, что процесс «Графический интерфейс MongoDB» все еще работает после закрытия приложения.

Поскольку я очень ленив, чтобы каждый раз открывать диспетчер задач, я создал файл batch со следующим содержимым:

@ECHO OFF
taskkill /f /im MongoDBCompass.exe
%LOCALAPPDATA%\MongoDBCompass\MongoDBCompass.exe
exit 
Я сохранил этот файл в том же каталоге MongoDBCompass.exe, который можно легко найти, проверив свойства ярлыка MongoDBCompass.

Я переопределил Цель, чтобы использовать этот .bat вместо .exe по умолчанию, и просто сказал ему Запустить от имени администратора, больше никогда не было проблем.


 16.01.2019 17:05
Я рекомендую установить последнюю версию Compass. Эта проблема исправлена ​​в версии 1.17.

 13.08.2019 11:39
Решение, которое сработало для меня:

Перейти в диспетчер задач
Убейте процесс под названием: «Ошибка». На нем будет значок mongodb

Ошибка установки MongoDB Zip в Ubuntu 18.04
Вопросы
MONGODB
Ошибка установки MongoDB Zip в Ubuntu 18.04
Я пытаюсь установить MongoDB из Zip-папки, загруженной с сайта MongoDB (https://www.mongodb.com/download-center/enterprise/releases/development)

Я правильно настроил путь к журналу, путь к данным и пытаюсь запустить mongod и получаю следующую ошибку зависимости.

amran:~$ mongod
mongod: /usr/lib/x86_64-linux-gnu/libcurl.so.4: version `CURL_OPENSSL_3' not found (required by mongod)
libcurl.so.4 существует в моей машине

amran:~$ locate libcurl.so.4
/usr/lib/x86_64-linux-gnu/libcurl.so.4
/usr/lib/x86_64-linux-gnu/libcurl.so.4.5.0
Как исправить эту проблему. Любая идея, пожалуйста!

 24.06.2018 06:23
5
4
6 686
7
Данный вопрос помечен как решенный
 Ответы 7
На странице загрузки, которой вы поделились, не упоминается версия mongodb для Ubuntu 18.04.

Вам нужно проверить с помощью mongodb, есть ли какой-либо выпуск, совместимый с Ubuntu 18.04.

 24.06.2018 10:07
 Ответ принят как подходящий
Чтобы запустить MongoDB 4.0 в Ubuntu 18.10, вам необходимо выполнить некоторые настройки.

sudo apt-get install libcurl3
найдите файл libcurl3, вероятно, в / usr / lib / x86_64-linux-gnu /

создайте папку LD_LIBRARY дома.

 cp /usr/lib/x86_64-linux-gnu/libcurl.so.4 /home/user/LD_LIBRARY
 mv /home/user/LD_LIBRARY/libcurl.so.4 /home/user/LD_LIBRARY/libcurl.so.3
сделайте ссылку на libcurl3:

ln -s libcurl.so.3 libcurl.so.4
echo "export LD_LIBRARY_PATH=~/LD_LIBRARY/:$LD_LIBRARY_PATH" >> ~/.bashrc
source ~/.bashrc
теперь запустите MongoDB, он будет работать.

Также теперь вы можете установить

sudo apt-get install libcurl4 php-curl
И использовать все приложения требуют php-curl и libcurl4

 29.07.2018 13:32
У меня была эта проблема (но на Debian 10), и я думаю, что мои файлы .so были повреждены. Поскольку у меня не было корневого доступа на сервере, который я использую, я скопировал libcurl.so.4 со своего домашнего компьютера (через SCP) в новый каталог (например, LD_LIBRARY в принятом ответе) и добавил это в свой LD_LIBRARY_PATH как в принятом ответе. Мне пришлось сделать это еще с двумя файлами (libcrypto.so.1.0.0 и libssl.so.1.0.0), прежде чем запускать mongod на сервере.

Надеюсь, это кому-то сэкономит время!

 18.09.2018 09:14
Я только что установил ...

sudo apt-get install libcurl4 php-curl
Как предложил @bhawnesh dipu, и это работает для меня

 15.10.2018 19:46
Проблема в том, что для этого двоичного дистрибутива MongoDB требуется более старая версия libcurl. В других ответах система модифицируется путем глобальной установки более старой версии libcurl, я сильно рекомендую не делать этого, поскольку он удалит и / или сломает все остальное, что зависит от более новой версии.

Вместо этого загрузите копию старой библиотеки, извлеките требуемый двоичный файл и предварительно загрузите его при запуске двоичного файла mongod. Таким образом, вы ничего не меняете в системе, и в качестве дополнительного бонуса вам не нужны права root для этого. Вот как:

Сначала создайте временный каталог, загрузите пакет deb и извлеките файл:

me@server:~$ mkdir tmp
me@server:~$ cd tmp
me@server:~/tmp$ apt download libcurl3
Get:1 http://gb.archive.ubuntu.com/ubuntu bionic/universe amd64 libcurl3 amd64 7.58.0-2ubuntu2 [214 kB]
Fetched 214 kB in 0s (9,969 kB/s)
me@server:~/tmp$ ar x libcurl3_7.58.0-2ubuntu2_amd64.deb
me@server:~/tmp$ tar xf data.tar.xz
Теперь скопируйте библиотеку туда, где находится ваш двоичный файл mongod:

me@server:~/tmp$ cp usr/lib/x86_64-linux-gnu/libcurl.so.4.5.0 ~/mongodb/mongodb-linux-x86_64-debian92-4.2.2-39-g38e05a1/bin/
Вы можете сделать оболочку для mongod, чтобы она предварительно загружала требуемую версию libcurl:

me@server:~/tmp$ cd ~/mongodb/mongodb-linux-x86_64-debian92-4.2.2-39-g38e05a1/bin/
me@server:~/mongodb/mongodb-linux-x86_64-debian92-4.2.2-39-g38e05a1/bin$ mv mongod mongod.real
me@server:~/mongodb/mongodb-linux-x86_64-debian92-4.2.2-39-g38e05a1/bin$ cat > mongod
#!/bin/sh

DIR = "$(cd "$(dirname "$0")" && pwd)"
LD_PRELOAD=$DIR/libcurl.so.4.5.0 exec $DIR/mongod.bin $*
me@server:~/mongodb/mongodb-linux-x86_64-debian92-4.2.2-39-g38e05a1/bin$ chmod 755 mongod
Теперь вы можете запустить mongod, и он будет работать. Важно отметить, что вы не вносили никаких изменений в установленные пакеты в системе, и вам не нужно использовать sudo, чтобы это работало.

 02.01.2020 16:42
Для Ubuntu версии 18.04 лучше, если вы установите MongoDB вручную.

Я потратил почти 3 часа на настройку зависимостей с помощью обычных шагов по установке в соответствии с руководством Mongo, но ничего не помогло. Наконец, мне дали попробовать ручную установку, и она, на удивление, у меня отлично работает.

Мне нужно выполнить следующие шаги, чтобы запустить его на моем Ubuntu 18.04:

Следуйте инструкциям по установке вручную из следующего руководства mongo DB https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/
Загрузите .tgz со следующими конфигурациями Скачать MongoDB
Обратите внимание: когда вы устанавливаете MongoDB 3.6 или более поздней версии, у него есть библиотека Curl версии "libcurl4", которая имеет некоторые проблемы совместимости с ubuntu 18.04.
Из-за этого при попытке выполнить команду "mongod" вы получите следующий результат:
mongod: /usr/lib/x86_64-linux-gnu/libcurl.so.4: version `CURL_OPENSSL_3' not found (required by mongod)

Чтобы решить эту проблему, вам необходимо удалить зависимую библиотеку libcurl4 с помощью следующей команды

sudo apt-get удалить libcurl4

Затем необходимо установить более низкую версию библиотеки curl (например, "libcurl3"), как ожидает Монго в версии ubuntu "18.04".

sudo apt-get установить libcurl3

Вам может потребоваться использовать команду "sudo" для разделения каталогов данных и журналов с установкой, если это не удается выполнить вручную.

sudo mongod --dbpath / var / lib / mongo --logpath /var/log/mongodb/mongod.log --fork

Теперь вы можете запустить команду «mongo», чтобы увидеть запущенную оболочку mongo.

По крайней мере, это сработало для меня.

 25.04.2020 22:39
Я пробовал следующие разные варианты:

Вариант 1: с двоичными файлами Ubuntu-16 mongo (перед вариантом 3, шаг 2); если у нас все в порядке с libcurl3

1.  apt-get remove libcurl4
2.  apt-get install libcurl3
3.  able to start the daemon
Вариант 2: не сработало

1.  apt-get remove libcurl4
2.  apt-get install libcurl4
3.  /etc/init.d/mongo_db7020
/usr/bin/mongod: /usr/lib/x86_64-linux-gnu/libcurl.so.4: version `CURL_OPENSSL_3' not found (required by /usr/bin/mongod) 
Вариант 3: копирование двоичных файлов mongodb 18 сработало

1.  apt-get remove libcurl4
2.  rsync -asvh mongoserver:/usr/bin/mongodb-linux-x86_64-ubuntu1804-4.0.4/bin/* /usr/bin/mongodb-linux-x86_64-ubuntu1604-4.0.4/bin
3.  apt-get install libcurl4
4.  able to start the daemon
Варианты 1 и 3 отлично работали для меня.

Mongodb получает ошибку при создании нового пользователя
Вопросы
MONGODB
Mongodb получает ошибку при создании нового пользователя
Я только что установил новый mongodb на сервер Ubuntu, и когда я пытаюсь установить adduser, я получаю сообщение об ошибке

db.createUser(
  {
    user: "admin",
    pwd: "ADYkdfd332@@33",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)


2018-07-03T13:29:41.556+0530 E QUERY    [thread1] Error: couldn't add user: Use of SCRAM-SHA-256 requires undigested passwords :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype.createUser@src/mongo/shell/db.js:1437:15
@(shell):1:1
 03.07.2018 10:01
19
0
30 624
7
 Ответы 7
См. Создание пароля SCRAM-SHA-256 с дайджестом или недайджестом здесь

db.createUser(
  {
    user: "admin",
    pwd: "ADYkdfd332@@33",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ],
    passwordDigestor : "<server|client>"
  }
)
 03.07.2018 10:42
Если вы используете Методы управления пользователями, вам необходимо установить параметр passwordDigestor.

 db.createUser(
  {
    user: "admin",
    pwd: "ADYkdfd332@@33",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ],
    passwordDigestor: "<server|client>"
  }
)
 04.07.2018 10:44
Это работает для меня:

db.createUser({  
 user:"test1",
 pwd:"test1",
 roles:[  
  {  
     role:"readWrite",
     db:"u8"
  }
 ],
 mechanisms:[  
  "SCRAM-SHA-1"
 ]
})
 12.07.2018 04:53
Выполните следующие команды в Mongo Shell:

use admin
db.createUser({
    user:"admin",
    pwd:"abc123",
    roles:[{role:"userAdminAnyDatabase",db:"admin"}],
    passwordDigestor:"server"
})
Далее вы можете сослаться на включить аутентификацию

 12.08.2018 11:25
Я запускаю подсистему Windows для Linux с помощью Ubuntu и получаю эту ошибку. Иногда возникает проблема, связанная с тем, что окна не закрывают mongod правильно на exit, поэтому вам нужно запустить Ctrl+Shift+Esc в диспетчер задач и закрыть его вручную.

На самом деле, всякий раз, когда монго делает что-то необычное, это кажется проблемой.

Затем запустите mongod. В другом терминале попробуйте снова добавить своего пользователя.

Надеюсь, это кому-то поможет.

 22.01.2019 18:20
use "database name"

db.createUser(
   {
     user: "username",
     pwd: "password",
     roles: [ { role: "dbOwner", db: "database name" } ],
     mechanisms:[  
       "SCRAM-SHA-1"
     ]
   }
)
 26.08.2019 15:32
Эта ошибка возникает только при удаленном доступе к ней.

Если passwordDigestor является клиентом, то mechanisms несовместим с SCRAM-SHA-256, и можно использовать только SCRAM-SHA-1.

use admin
db.createUser(
  {
    user: "username",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ],
    mechanisms: [ "SCRAM-SHA-1" ],
    passwordDigestor: "client"

  }
)

Если passwordDigestor является сервером, то можно использовать как mechanisms, то есть SCRAM-SHA-1, так и SCRAM-SHA-256, или он работает, даже если вы его вообще не указываете.

use admin
db.createUser(
  {
    user: "username",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ],
    passwordDigestor: "server"

  }
)

Mongo db (mongodb.service) не удалось, статус 14
Вопросы
DATABASE
Mongo db (mongodb.service) не удалось, статус 14
У меня возникла следующая проблема при использовании mongodb.

Это ошибка, когда я проверяю статус:

Скриншот ошибки (mongodb.service, статус 14)

Скриншот кода в файле mongod.config

Скриншот файла журнала

Я попытался удалить mongodb, следуя каждому шагу с веб-сайта, и установить все снова, и когда я проверяю статус, я все еще получаю ту же ошибку. Я выложил скриншот ошибки. Если это важно, я использую MacBook Pro.

Был бы очень признателен, если бы кто-нибудь мог помочь мне это исправить.

 25.11.2018 17:37
10
4
14 199
7
 Ответы 7
Похоже из лога у тебя раньше нечистое выключение. Или это также может указывать на то, что mongod уже запущен. Сначала убедитесь, что mongod еще не запущен. ps aux | grep mongod

Если это не так, удалите файл: rm /tmp/mongodb-27017.sock

Затем попробуйте systemctl start mongod, чтобы снова запустить MongoDB.

 27.11.2018 08:24
После перезагрузки в командной строке проблема была устранена, не знаю, почему после остановки mongo, удаления и установки проблема не была устранена, но после перезагрузки все работает нормально.

 27.11.2018 08:26
Изменив владельца на пользователя monogdb / var / lib / mongodb и /tmp/mongodb-27017.lock у меня сработали.

sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
 07.02.2020 00:37
Это сработало для меня на Ubuntu 18.04

Go to the TMP directory: cd /tmp
Check if you have the mongodb sock file: ls *.sock
Change the user:group permission: chown mongodb:mongodb <YOUR_SOCK>
Start MongoDB: sudo service mongod start
Check the MongoDB status: sudo service mongod status
Если это не сработает, вы можете попробовать

sudo reboot
См. Здесь: https://medium.com/@gabrielpires/mongodb-ubuntu-16-04-code-exited-status-14-aws-lightsail-problem-417ffc78cb11

 16.05.2020 14:38
У меня похожая проблема. Был SELinux, блокирующий нормальное выполнение. Так я и сделал:

# ausearch -c 'mongod' --raw | audit2allow -M my-mongod
# semodule -X 300 -i my-mongod.pp
а потом:

$ sudo systemctl start mongod
и проверьте:

sudo systemctl status mongod
 19.05.2020 23:27
У меня была аналогичная проблема, и хотя с разрешениями все в порядке, служба не запускалась. Я посмотрел журнал mongodb

sudo tail -40 /var/log/mongodb/mongod.log
Он сказал, что база данных была неожиданно отключена и ее необходимо отремонтировать. Я побежал

sudo mongod --repair --config /etc/mongod.conf
Это исправило базу данных, но теперь изменило разрешения. Вам нужно будет снова повторить шаги chown.

sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
Запустите сервис mongod. Теперь он будет запущен.

 23.03.2021 14:55
chown -R mongodb:mongodb /var/lib/mongodb
chown mongodb:mongodb /tmp/mongodb-27017.sock

MongoDB - ошибка установки - мастер установки mongodb завершился преждевременно
Вопросы
MONGODB
MongoDB - ошибка установки - мастер установки mongodb завершился преждевременно
У меня раньше была эта проблема при установке. Проверял и с другими потоками, но не смог найти подходящего решения в моем случае.

MongoDB - ошибка установки - мастер установки mongodb завершился преждевременно

ОБНОВИТЬ :

ЗАКРЫТО!

 08.04.2018 20:41
43
1
18 148
8
 Ответы 8
Снимите отметку с опции Install MongoDB Compass в мастере установки. Работал у меня.

 09.04.2018 06:45
снятие отметки Установите MongoDB Compass решает проблему непосредственно из мастера запуска при установке в windows10

 09.04.2018 10:16
Просто убедитесь, что вы подключены к Интернету, чтобы установить MongoDB Compass, его пользовательский графический интерфейс mongoDb отключен, и вы не можете пользоваться графическим интерфейсом.

 08.05.2018 19:59
Для Windows 10 вам нужно будет установить MongoDB Compass отдельно. После установки MongoDB загрузите MongoDB Compass отдельно от здесь. Для MongoDB Compass обязательно выберите правильную версию (примечание: версия Community Edition не является версией по умолчанию) и платформу для загрузки. Он должен успешно установиться.

 23.05.2018 14:15
Для тех, кто пытается установить версию 4.0.x Компас является проблема, но вы не можете сразу убрать галочку. Согласно https://jira.mongodb.org/browse/SERVER-34451 это проблема межсетевого экрана. Отключите брандмауэр или разрешите доступ исправили это для меня.

 16.09.2018 16:19
Снятие отметки с Install MongoDB Compass у меня работает.

 19.03.2019 06:32
Если вы используете учетную запись Microsoft, решение состоит в том, чтобы вместо этого войти в систему с локальной учетной записью, которая доступна в настройках учетной записи.

После того, как вы вошли в систему с локальной учетной записью, вы можете завершить установку с локальным именем пользователя и паролем.

 21.01.2021 12:12
Я сталкиваюсь с той же ошибкой, мое решение:

У моего пользователя Windows не было пароля, я установил для него пароль и использовал свои имя пользователя и пароль на «Запуск от имени локального пользователя или пользователя домена», и моя проблема была исправлена.



Кончик *: Я также установил Компас (не отдельно), и это не было проблемой.

Разница между findOneAndDelete () и findOneAndRemove ()
Вопросы
MONGODB
Разница между findOneAndDelete () и findOneAndRemove ()
Я не могу различить findOneAndDelete () и findOneAndRemove () в мангуст документальный.

Query.prototype.findOneAndDelete()

This function differs slightly from Model.findOneAndRemove() in that findOneAndRemove() becomes a MongoDB findAndModify() command, as opposed to a findOneAndDelete() command. For most mongoose use cases, this distinction is purely pedantic. You should use findOneAndDelete() unless you have a good reason not to.

 30.05.2018 12:12
43
9
21 754
8
 Ответы 8
В мангусте findOneAndDelete работает так же, как findOneAndRemove. Они оба просматривают объект по его свойствам в JSON, затем удаляют его, а также возвращают объект один раз после удаления. Когда вы используете собственный mongodb в качестве базы данных, findOneAndDelete может быть вам полезен, но в случае с mongoose он устарел, я могу посоветовать вам использовать findOneAndDelete для выполнения вашей операции на основе последней конфигурации mongoose и nodejs на этот период. https://github.com/Automattic/mongoose/issues/6880

 25.11.2018 10:43
Я бы посоветовал вам использовать findOneAndDelete (). Mongoose предоставляет как функции для обработки данных с использованием ORM, так и функции для записи непосредственно в базу данных, при этом findOneAndDelete () является одной из последних. Прямая запись в базу данных более опасна, поскольку вы рискуете не вызвать промежуточное программное обеспечение или валидаторы, потенциально отправив частичные или неполные данные в базу данных. Обратите внимание, что я сказал, что это более опасно, а не то, что это категорически опасно, findOneAndDelete () просто проходит через ORM, добавляя безопасности.

 30.11.2018 03:01
findOneAndRemove возвращает удаленный документ, поэтому, если вы удалите документ, который, как вы позже решите, не следует удалять, вы можете вставить его обратно в базу данных. Проверка правильности вашей логики перед удалением документа была бы предпочтительнее, чем проверка после IMO.

findOneAndDelete имеет параметр сортировки, который можно использовать, чтобы повлиять на то, какой документ обновляется. Он также имеет параметр TimeLimit, который может контролировать, в течение какого периода операция должна завершиться.

 21.02.2019 07:41
В собственном клиенте MongoDB (в отличие от Mongoose) передача { remove: true } в findAndModify заставляет его удалить найденный документ, его поведение в этом случае будет очень похоже на findOneAndDelete. Однако есть некоторые отличия при использовании других опций:

findAndModify принимает 5 параметров: query, sort, doc (объект обновления), options и callback. findOneAndDelete занимает только 3 (filter или запрос, options и callback)
options для findAndModify включают w, wtimeout и j для проблем записи, например:

“the level of acknowledgment requested from MongoDB for write operations to a standalone mongod or to replica sets or to sharded clusters.“ or simply guarantee levels available for reporting the success of a write operation.

options для findOneAndDelete не включает конфигурацию проблем записи.

findAndModify позволяет вернуть новый документ и одновременно удалить его.

Пример:

// Simple findAndModify command returning the new document and
  // removing it at the same time
  collection.findAndModify({b:1}, [['b', 1]], {$set:{deleted: Date()}}, {remove:true}, calback)
 02.04.2019 17:55
Оба они почти похожи, за исключением того, что findOneAndRemove использует findAndModify с флагом удаления, а временная сложность будет немного выше по сравнению с findOneAndDelete, потому что вы выполняете обновление. Удалять всегда быстрее.

 08.04.2019 05:06
Вот точная разница (цитата из документации мангуста в разделе Model.findOneAndDelete ()):

"This function differs slightly from Model.findOneAndRemove() in that findOneAndRemove() becomes a MongoDB findAndModify() command, as opposed to a findOneAndDelete() command. For most mongoose use cases, this distinction is purely pedantic. You should use findOneAndDelete() unless you have a good reason not to."

Вот ссылка на него: https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete

 11.09.2019 19:57
TL; DR: вам следует использовать findOneAndDelete (), если у вас нет веской причины не делать этого.

Более длинный ответ:

Из документации Mongoose для findOneAndDelete:

This function differs slightly from Model.findOneAndRemove() in that findOneAndRemove() becomes a MongoDB findAndModify() command, as opposed to a findOneAndDelete() command. For most mongoose use cases, this distinction is purely pedantic. You should use findOneAndDelete() unless you have a good reason not to.

Документы Mongoose findOneAndDelete

 18.12.2019 10:44
В других ответах здесь много неправильной информации. Они для всех намерений и целей одинаковы, и вам следует просто использовать findOneAndDelete().

Model.findOneAndRemove(query) Mongoose становится findAndModify({query, remove: true}) MongoDB.

Model.findOneAndDelete() Mongoose становится findOneAndDelete() MongoDB. Однако драйвер MongoDB преобразует findOneAndDelete(query, opts) в findAndModify({query, remove: true}) (src). Таким образом, они делают то же самое в базе данных.

Оба используют одни и те же варианты.

Оба возвращают удаленный документ.

Предупреждение об устаревании MongoDB mongoose
Вопросы
JAVASCRIPT
Предупреждение об устаревании MongoDB mongoose
При запросе документов с помощью collection.find я начал получать следующее предупреждение в моей консоли

DeprecationWarning: collection.find option [fields] is deprecated and will be removed in a later version

Почему я это вижу и как это исправить? (Возможные альтернативы)

Обновлено: запрос добавлен

Session
        .find({ sessionCode: '18JANMON', completed: false })
        .limit(10)
        .sort({time: 1})
        .select({time: 1, sessionCode: 1});
Mongoose версии 5.2.9

 19.08.2018 12:14
41
7
28 767
8
Данный вопрос помечен как решенный
 Ответы 8
 Ответ принят как подходящий
Обновлять:

Выпущена и доступна для скачивания 5.2.10 здесь.

Для получения дополнительной информации о документах вы можете просмотреть страницу https://mongoosejs.com/docs/deprecations

Для получения дополнительной информации о проблеме и ее решении https://github.com/Automattic/mongoose/issues/6880

Оригинальный ответ:

Версия Mongoose 5.2.9 обновила собственный драйвер mongodb до версии 3.1.3, в которую были добавлены изменения для выдачи предупреждающих сообщений при вызове устаревшего собственного метода драйвера.

Опция fields устарела и заменена опцией projection.

Вам придется подождать, пока мангуст внесет изменения в свой конец, чтобы заменить опцию полей проекцией. Исправление запланировано на выпуск 5.2.10.

На данный момент вы можете вернуться к версии 5.2.8, которая подавит все предупреждения об устаревании.

npm install mongoose@5.2.8
Для всех других устаревших предупреждений вы должны подходить к ним в каждом конкретном случае.

Вы увидите другие предупреждения об устаревании при использовании других методов сбора.

DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
DeprecationWarning: collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.
DeprecationWarning: collection.save is deprecated. Use insertOne, insertMany, updateOne, or updateMany instead.
DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
Все методы записи mongoose findOne* по умолчанию используют метод findAndModify, который устарел в собственном драйвере mongodb.

Используйте mongoose.set('useFindAndModify', false);, чтобы mongooose вызывал соответствующий метод findOne* в собственном драйвере mongodb.

Для remove и update замените эти вызовы методами delete* и update* соответственно.

Для save замените эти вызовы методами insert* / update* соответственно.

Используйте mongoose.set('useCreateIndex', true);, чтобы mongooose вызывал метод createIndex в собственном драйвере mongodb.

 19.08.2018 16:43
Вы можете сделать npm install mongoose@5.2.8, и это поможет вам вернуться к более ранней версии, которая не будет отображать никаких предупреждений об устаревании.

 27.08.2018 18:26
После обновления до версии 5.2.10. Можно использовать любой из вариантов ниже

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {

  useCreateIndex: true,
  useNewUrlParser: true

})
.then(() => console.info('connecting to database successful'))
.catch(err => console.error('could not connect to mongo DB', err));
or
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/test',{

    useNewUrlParser: true

})
.then(() =>  console.info('connecting to database successful') )
.catch(err =>  console.error('could not connect to mongo DB', err) );
 19.09.2018 01:30
mongoose.connect('your db url', {
  useCreateIndex: true,
  useNewUrlParser: true
})
или

mongoose.set('useCreateIndex', true)
mongoose.connect('your db url', { useNewUrlParser: true })
 10.11.2018 08:19
Это сработало для меня в апреле 2020 года:

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
 26.04.2020 17:15
mongoose.connect('mongodb://localhost:27017/tablename',{ useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex: true },()=>{ console.info( подключил db) });

 29.05.2020 14:50
Просто передайте следующие параметры при подключении к базе данных

например, для

const mongoose = require("mongoose");

mongoose.connect("uri",{ 
                       "useNewUrlParser": true,
                       "useUnifiedTopology": true, 
                       "useCreateIndex": true 
                       // other deprecations 
                       },(err)=>{
     // connection logging
});

 27.09.2020 14:30
В настоящее время я использую "mongoose@5.11.15" вы можете избавиться от DeprecationWarning, используя это,

Способ 1

mongoose.connect("Your DB address", {
useNewUrlParser: true,                       
useUnifiedTopology: true,                 
useCreateIndex: true               // to handle collection.ensureIndex is deprecated
});
Способ 2

mongoose.connect("Your DB address", {
useNewUrlParser: true,                       
useUnifiedTopology: true,                 // other deprecation warnings            
});
mongoose.set("useCreateIndex", true);     // to handle collection.ensureIndex is deprecated

DeprecationWarning: collection.findAndModify устарел. Использовать вместо этого findOneAndUpdate, findOneAndReplace или findOneAndDelete?
Вопросы
NODE.JS
DeprecationWarning: collection.findAndModify устарел. Использовать вместо этого findOneAndUpdate, findOneAndReplace или findOneAndDelete?
Я использую mongoose findOneAndUpdate, но все равно получаю сообщение об ошибке,

DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.

Но я даже не использую findAndModify, почему он конвертирует мой запрос в findAndModify?

 29.09.2018 23:53
77
5
85 628
8
Данный вопрос помечен как решенный
 Ответы 8
 Ответ принят как подходящий
Вам необходимо установить опцию в запросе useFindAndModify на false, как указано в документы.

(ключевое слово для поиска В настоящее время поддерживаются следующие варианты:)

'useFindAndModify': true by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().

и если вы видите файл определения мангуста, где упоминалось, что он вызывает команду обновления findAndModify.

 /**
  * Issues a mongodb findAndModify update command.
  * Finds a matching document, updates it according to the update arg, 
    passing any options,
  * and returns the found document (if any) to the callback. The query 
    executes immediately
  * if callback is passed else a Query object is returned.
  */
 findOneAndUpdate(): DocumentQuery<T | null, T>;
Недавно обновлено в документации мангуста (кликните сюда) для этих устаревших, где упоминается:

Mongoose's findOneAndUpdate() long pre-dates the MongoDB driver's findOneAndUpdate() function, so it uses the MongoDB driver's findAndModify() function instead.

Есть три или более способов избежать использования FindAndModify:

На глобальном уровне: установите значение false.
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
На уровне подключения: мы можем настроить, используя параметры подключения:
    mongoose.connect(uri, { useFindAndModify: false });
На уровне запроса:
   await ModelName.findOneAndUpdate({matchQuery},
   {$set: updateData}, {useFindAndModify: false});

 30.09.2018 00:10
Измените глобальную конфигурацию мангуста следующим образом:

mongoose.set('useFindAndModify', false);
Или передайте параметры в строке запроса следующим образом:

Person.findOneAndUpdate({_id: id}, {$set: body}, {new: true, useFindAndModify: false}).then(..
Вы также можете управлять другими предупреждениями об устаревании мангуста, указав документы

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
Вот и все.

 16.12.2018 19:13
вы также можете передать опции при соединении с опцией требований useNewUrlParser. Посмотрите на следующее -> https://mongoosejs.com/docs/deprecations.html

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false}); 
 08.02.2019 09:16
Вам необходимо изменить параметры метода подключения, чтобы избавиться от ошибки:

mongoose.connect("mongodb://localhost/DB_Name", {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
Вы можете использовать это так.

 10.05.2019 08:13
Mongoose.connect(Config.database,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false});
чтобы пропустить все ошибки :-) добавьте это в свой index.js или как вы его назвали. Я имею в виду основной файл js. ;-)

 09.05.2020 01:01
Версия Mongoose обновляется настолько, что,

для использования Model.findByIdAndUpdate() требуется параметр опции, также см. ниже

List.findByIdAndUpdate(id, update, options, callback) // executes
для решения этого

Передайте этот useFindAndModify: false в mongoose.connect в стартовом

mongoose.connect("mongodb://localhost:27017/yourDatabase", { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false });
или

mongoose.set('useFindAndModify', false); 
кликните сюда, чтобы проверить связанные устаревания

 24.08.2020 21:38
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
Эти решения работают для меня!

 30.09.2020 06:51
Чтобы исправить все предупреждения об устаревании, выполните следующие действия:

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
Замените update () на updateOne (), updateMany () или replaceOne () Замените remove () на deleteOne () или deleteMany (). Замените count () на countDocuments (), если вы не хотите подсчитывать, сколько документов находится во всей коллекции (без фильтра). В последнем случае используйте EstimatedDocumentCount ().

Mongodb Compass не открывается в Ubuntu 18.10
Вопросы
MONGODB
Mongodb Compass не открывается в Ubuntu 18.10
MongoDB Compass успешно установлен на Ubuntu 18.10. Но при попытке запустить он отказывается запускаться, ничего не показывая. Я новичок в MongoDB. Что делать?

 02.11.2018 17:51
21
1
21 038
8
Данный вопрос помечен как решенный
 Ответы 8
Попробуйте эту команду в терминале:

1. $ wget https://downloads.mongodb.com/compass/mongodb-compass_1.12.1_amd64.deb;

2. $ sudo dpkg -i mongodb-compass_1.12.1_amd64.deb

$ mongodb-compass;
Работал у меня, я тоже использую Ubuntu 18.10

(Попробуйте сменить версию компаса mongodb - ниже 15- v)

 14.11.2018 12:48
У меня была такая же проблема с ubuntu 18.10. Эта проблема все еще существует в версиях 15 и 16. Более ранние версии отлично работают в ubuntu 18.10.

1) wget https://downloads.mongodb.com/compass/mongodb-compass_1.14.1_amd64.deb

2) sudo dpkg -i mongodb-compass_1.14.1_amd64.deb

3) mongodb-compass (монгодб-компас)

 23.01.2019 05:03
Таким способом нельзя загрузить полную версию, это можно сделать только для версий сообщества, например:

1) wget https://downloads.mongodb.com/compass/mongodb-compass-community_1.15.1_amd64.deb

Его можно скачать, но проблема та же.

Я загрузил mongodb-compass-community_1.12.1_amd64.deb с помощью wget. Я установил его с помощью dpkg -i, и он работает.

 23.02.2019 19:14
Мы только что выпустили Compass 1.18-beta.1, Compass снова будет работать в Ubuntu 18.10 и других последних дистрибутивах Linux. Вы можете скачать его отсюда: https://www.mongodb.com/download-center/compass.

 05.03.2019 14:03
Попробуйте эту команду в терминале:

wget https://downloads.mongodb.com/compass/mongodb-compass_1.14.1_amd64.deb;
sudo dpkg -i mongodb-compass_1.14.1_amd64.deb;
mongodb-compass;
попробуйте использовать версию меньше 15. Это решило мою проблему.

 18.03.2019 09:49
 Ответ принят как подходящий
Попробуйте следующие команды. Эти шаги сработали для меня.

wget https://downloads.mongodb.com/compass/mongodb-compass_1.15.1_amd64.deb
sudo dpkg -i mongodb-compass_1.15.1_amd64.deb
sudo apt --fix-broken install
sudo apt -y install libgconf2-4
mongodb-compass;
 07.11.2019 04:27
Практически такое же решение для Ubuntu 20.04

wget https://downloads.mongodb.com/compass/mongodb-compass_1.21.1_amd64.deb
sudo dpkg -i mongodb-compass_1.21.1_amd64.deb
sudo apt --fix-broken install
mongodb-compass
 11.05.2020 14:13
После установки dpkg необходимо запустить следующие команды из терминала

 1. sudo apt --fix-broken install
 2. sudo apt -y install libgconf2-4
 3. mongodb-compass;

Как решить ошибку SQLdecode при переносе моделей в django?
Вопросы
PYTHON
Как решить ошибку SQLdecode при переносе моделей в django?
Я новичок в django, я создал проект и приложение и хочу подключить свой проект к mongodb. когда я ввожу команду python manage.py migrate, я получаю указанную ниже ошибку.

Я удалил базу данных и очистил все миграции в таблице django_migration и удалил файлы миграции в созданной папке миграций. Все еще получаю ту же ошибку.

Пожалуйста, помогите мне с этим. заранее спасибо

Ошибка:

    raise TypeError("documents must be a non-empty list")
TypeError: documents must be a non-empty list
Вышеупомянутое исключение было прямой причиной следующего исключения:

djongo.sql2mongo.SQLDecodeError: FAILED SQL: INSERT INTO "django_migrations" ("app", "name", "applied") VALUES (%(0)s, %(1)s, %(2)s)
    Version: 1.2.31
Настройки.py

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'DB_name',
        'HOST':'localhost',
        # 'PORT': 27017,
        # 'USER':'',
        # 'PASSWORD':''
    },
модели.py

from django.db import models

# Create your models here.
class dummy(models.Model):

    name= models.CharField(max_length=100, blank=True, null= True)
 16.03.2019 07:30
2
2
4 405
8
 Ответы 8
У меня та же проблема с u, я пробовал использовать sqlite3 в качестве базы данных, и данные такие же:



так что данные не пустые!!

И я попытался изменить команду sql следующим образом (строка 760 в sql2mongo\query.py):

statement = statement[0]
    sm_type = statement.get_type()
    if sm_type=='INSERT':
        self._sql = 'INSERT INTO "django_migrations" ("app", "name", "applied") VALUES ("test", "windy", "2019-03-15 12:00")'
но все же не удалось.

 16.03.2019 08:50
Я решил эту проблему. Проблема может быть в версии sqlparse - sqlparse 0.2.4 работает хорошо, а sqlparse 0.3.0 - нет. Используйте следующую команду:

pip install sqlparse==0.2.4 --user
 17.03.2019 04:53
Просто установите sqlprase, чтобы решить эту проблему.

Загрузить гитхаб sqlprase

pip install filename.zip
 19.03.2019 11:04
После создания проекта django удалите sqlparse, набрав

pip3 uninstall sqlparse
Затем установите sqlparse version=0.2.4, набрав

pip3 install sqlparse==0.2.4
Затем перенесите базу данных mongodb, набрав

python3 manage.py migrate
Если вы используете питон2, используйте (точка) вместо (пункт3) и (питон) вместо (питон3) в команде.

 20.08.2019 07:48
Используйте python manage.py migrate --fake-initial при первом переносе проекта.

В settings.py добавить INSTALLED_APPS=[ 'APP_NAME.apps.APP_NAMEConfig', ..., ..., ]

 02.04.2020 11:44
Я решил это так sqlparse==0.2.4 и djongo==1.3.3 и django==2.1.7

 04.10.2020 08:57
Я обновил djongo с помощью pip install --upgrade djongo, выполнил миграцию python manage.py migrate --fake-initial, и это было исправлено.

 04.01.2021 11:01
Пожалуйста, попробуйте установить пакет sqlparse, используя эту команду в терминале.

 pip install sqlparse==0.2.4 

Я получаю эту ошибку при подключении к mongodb Atlas: «dns.exception.Timeout: время ожидания операции DNS истекло через 30,000985383987427 секунд»
Вопросы
PYTHON
Я получаю эту ошибку при подключении к mongodb Atlas: «dns.exception.Timeout: время ожидания операции DNS истекло через 30,000985383987427 секунд»
я подключаю свое приложение Flask к атласу mongodb, используя Flask-PyMongo, но получаю эту ошибку.

«dns.exception.Timeout: время ожидания операции DNS истекло через 30,000985383987427 секунд»

и после этого он говорит: Во время обработки вышеупомянутого исключения произошло другое исключение:

«pymongo.errors.ConfigurationError: время ожидания операции DNS истекло через 30,000985383987427 секунд»

Вот код:

from flask import Flask 
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'FirstCluster'
app.config['MONGO_URI'] = 'mongodb+srv://username:password@firstcluster-bblvc.mongodb.net/test?retryWrites=true'


mongo = PyMongo(app)

@app.route('/connect')
def connect_to_mongo():
    return 'Connecting to Mongodb'

@app.route('/collections')
def adding():
    user = mongo.db.users
    user.insert({'name' : 'vatsalay'})
    return 'Added User!'


if __name__ == '__main__':
    app.run(debug=True)
 24.03.2019 12:50
7
3
10 474
8
 Ответы 8
Была такая же проблема, она сработала для меня, изменив мой DNS с автоматического на «8.8.8.8». Как? Если вы используете Windows, выполните следующие действия.

Откройте настройки сети и Интернета.
Центр коммуникаций и передачи данных
Нажмите на ваше интернет-соединение Wi-Fi (название вашего маршрутизатора)
Перейти к приличиям
Выберите tcp/ipv4 и снова зайдите в свойства
Выберите этот и отредактируйте его «использовать следующий DNS-сервер и выберите» 8.8.8.8 (google dns)
Также, как сказал Нил Ланн, проверьте разрешенные ips

 02.09.2019 15:58
Похоже, вам нужно установить pymongo[srv], чтобы заставить работать mongodb+srv URI.
Попробуйте установить его с помощью pip3 install 'pymongo[srv]'

 17.12.2019 07:43
Попробуйте использовать другую строку подключения. У меня были проблемы со строкой 3.6 или более поздней версии. Просто использовал строку 3.4 или более позднюю, и она мгновенно подключилась.

если вы настаиваете на использовании более новой строки подключения, вам необходимо установить pymongo srv

Для Windows

pip install pymongo[srv]
Для Mac

pip3 install pymongo[srv]
На зш

pip3 install 'pymongo[srv]'
 15.03.2020 01:42
Это может быть ошибка, вызванная тем, что ваш клиент Mongo не может найти соединение с сервером. Итак, лучше проверьте подключение к Интернету, а затем запустите программу.

 02.05.2020 11:11
Та же проблема в стандарте Google App Engine.

В моем случае было решение использовать старый тип URL:

client = pymongo.MongoClient("mongodb://USERNAME:PASSWORD@CLUSTER...
ПО:

Убунту 18.04
Питон 2.7.17/2.7.12
Пимонго 3.11.1
Google Cloud SDK 319.0.0
Соединение из тестового файла непосредственно из ОС было в порядке, но тот же код, запущенный из Google SDK dev appserver2, не удался.

URL-адрес после изменения, сгенерированный cloud.mongodb.com Atlas в разделе Кластер -> Подключить -> Выбрать способ подключения -> Python - 3.4 или выше связь была установлена.

 23.11.2020 03:22
Я использовал Python 3.6.2, поэтому решил использовать строку подключения для «3.6 или новее». Это дало мне эту ошибку. Позже я попробовал это со строкой подключения для «3.4 или новее». Это работало отлично.

Попробуйте использовать строку подключения для «3.4 или более поздней версии».

 23.11.2020 15:14
У меня была аналогичная проблема. Я вдруг не смог подключиться. Все мои коллеги использовали одну и ту же версию Python и т. д.

За несколько дней до этого у другого коллеги был тайм-аут при использовании Wi-Fi на их телефонах. Они могли подключиться, когда переключились на свой обычный Wi-Fi.

После того, как я перезагрузил свой Wi-Fi, я смог подключиться.

Это не лучшее решение, но попробовать стоит.

 25.03.2021 17:26
Попробуйте использовать другую версию строки подключения. Вы можете изменить версию в кластере -> подключить -> подключить ваше приложение.

Почему мой тест flapdoodle Embedded MongoDB не запускается? (при создании embeddedMongoServer не удалось запустить процесс EOF)
Вопросы
MONGODB
Почему мой тест flapdoodle Embedded MongoDB не запускается? (при создании embeddedMongoServer не удалось запустить процесс EOF)
У меня проблемы с созданием моего нового проекта. Я использовал https://start.spring.io/ для создания нового проекта Spring 2.0 MongoDB Maven и хочу иметь встроенную базу данных MongoDB для моих интеграционных тестов. Инициализатор spring добавил с этой целью зависимость для de.flapdoodle.embed.mongo.

Но каждый раз, когда я пытаюсь запустить «mvn clean package», во время теста я получаю следующую ошибку:

Caused by: org.springframework.beans.factory.BeanCreationException: 
Error creating bean with name 'embeddedMongoServer' defined in class path resource
[org/springframework/boot/autoconfigure/mongo/embedded/EmbeddedMongoAutoConfiguration.class]: 
Invocation of init method failed; nested exception is java.io.IOException: 
Could not start process: <EOF>
at de.flapdoodle.embed.mongo.AbstractMongoProcess.onAfterProcessStart(AbstractMongoProcess.java:79) ~[de.flapdoodle.embed.mongo-2.0.3.jar:na]
at de.flapdoodle.embed.process.runtime.AbstractProcess.<init>(AbstractProcess.java:116) ~[de.flapdoodle.embed.process-2.0.2.jar:na]
at de.flapdoodle.embed.mongo.AbstractMongoProcess.<init>(AbstractMongoProcess.java:53) ~[de.flapdoodle.embed.mongo-2.0.3.jar:na]
at de.flapdoodle.embed.mongo.MongodProcess.<init>(MongodProcess.java:50) ~[de.flapdoodle.embed.mongo-2.0.3.jar:na]
at de.flapdoodle.embed.mongo.MongodExecutable.start(MongodExecutable.java:44) ~[de.flapdoodle.embed.mongo-2.0.3.jar:na]
at de.flapdoodle.embed.mongo.MongodExecutable.start(MongodExecutable.java:34) ~[de.flapdoodle.embed.mongo-2.0.3.jar:na]
at de.flapdoodle.embed.process.runtime.Executable.start(Executable.java:108) ~[de.flapdoodle.embed.process-2.0.2.jar:na]
Что мне не хватает?

Мой файл приложения довольно прост:

@SpringBootApplication
public class NewnewinternetApplication {

    public static void main(String[] args) {
        SpringApplication.run(NewnewinternetApplication.class, args);
    }
}
Мой файл конфигурации очень прост:

@Configuration
@EnableMongoRepositories
@ComponentScan(basePackages = "com.snoop.dougg.newnewinternet")
public class AppConfig {

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/");
        resolver.setSuffix(".html");
        return resolver;
    }
}
На данный момент у меня есть два простых контроллера, возвращающих только статический вывод.

У меня есть небольшой документ:

@Document(collection = "user")
public class User implements Serializable {
    protected static final long serialVersionUID = -1L;

    @Id
    private String id;

    private String username;
    private String firstName;
    private String lastName;

    public User() {}

    public User(String username, String firstName, String lastName) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Getters, setters, and equals and hash code methods...
}
А затем небольшой глупый тест:

@RunWith(SpringRunner.class)
//@SpringBootTest -> Doesn't work either
@DataMongoTest
public class NewnewinternetApplicationTests {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Test
    public void sillyLittleTest() {
        mongoTemplate.save(new User("sdoug", "Snoop", "Dougg"));
        Assert.notNull(
            mongoTemplate.find(
                new Query(Criteria.where("firstName").is("Snoop")), User.class),
            "Couldn't find by first name!");
    }
}
А затем мой файл pom, который я действительно просто оставил в покое:

<?xml version = "1.0" encoding = "UTF-8"?>
<project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.snoop.dougg.newnewinternet</groupId>
    <artifactId>NewNewInternet</artifactId>
    <version>0.0.1</version>
    <packaging>jar</packaging>

    <name>NewNewInternet</name>
    <description>A new new internet</description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.1.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <azure.version>2.0.1</azure.version>
        <java.version>1.8</java.version>
        <spring-cloud.version>Finchley.M9</spring-cloud.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-mongodb</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>com.microsoft.azure</groupId>
            <artifactId>azure-active-directory-spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>com.microsoft.azure</groupId>
            <artifactId>azure-keyvault-secrets-spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>com.microsoft.azure</groupId>
            <artifactId>azure-spring-boot</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-oauth2</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.session</groupId>
            <artifactId>spring-session-core</artifactId>
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
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>com.microsoft.azure</groupId>
                <artifactId>azure-spring-boot-bom</artifactId>
                <version>${azure.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

    <repositories>
        <repository>
            <id>spring-milestones</id>
            <name>Spring Milestones</name>
            <url>https://repo.spring.io/milestone</url>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>


</project>
 23.04.2018 23:36
15
0
9 962
9
 Ответы 9
скорее всего, экземпляр mongodb, загруженный через плагин spring, равен 32, и вы работаете на 64-битной java или наоборот. Пожалуйста, подтвердите, есть ли другой способ определить исправление.

 07.07.2018 09:12
Мой случай был немного особенным, но, возможно, это поможет кому-то еще решить эту проблему.

Если по какой-то причине вы используете win 10 и у вас уже есть MongoDB, работающая как служба (в моем случае это была более ранняя версия - v3.4 - работала), попробуйте остановить службу и затем запустить тест. .

 23.08.2018 22:06
Попробуйте добавить @DirtiesContext на уровень тестового класса.

 10.05.2019 06:21
У меня была такая же ситуация, и я мог решить ее с помощью @DirtiesContext следующим образом:

@DirtiesContext(classMode = ClassMode.AFTER_EACH_TEST_METHOD)
public class CommoditiesApplicationTests {

}
 19.09.2019 11:44
У меня здесь был примерно такой же сценарий, и я решил его, используя

    <dependency>
        <groupId>com.github.fakemongo</groupId>
        <artifactId>fongo</artifactId>
        <version>2.1.1</version>
        <scope>test</scope>
    </dependency>
вместо de.flapdoodle.embed.mongo

 11.12.2019 01:40
Комментирование следующих строк в application.properties и их размещение в другом профиле также может работать. Нашел здесь

spring.data.mongodb.database=
spring.data.mongodb.host=
spring.data.mongodb.port=
 16.05.2020 00:00
Обычно источником проблемы является уже запущенный экземпляр mongodb. Я бы начал с проверки, занимает ли что-нибудь порт mongodb по умолчанию - 27017.

 16.09.2020 15:44
В моем случае файл сокета все еще был рядом.

Чтобы разобраться в основной проблеме, мне нужен вывод журнала консоли, я поставил точку останова в предложении elseAbstractMongoProcess::onAfterProcessStart (которое срабатывает при сбое). Здесь у вас есть доступ к logWatch и вы можете запустить System.out.println(logWatch.output.toString()); в режиме отладки, чтобы получить консоль mongo. Для моей проблемы в выводе указано SocketException: Address already in use

Попробовать предложенные команды, такие как sudo lsof -iTCP -sTCP:LISTEN -n -P, у меня не сработало (в моем случае ничего не указано)

Я нашел еще один ответ SO, в котором говорилось, что нужно запустить ls -lrta /tmp | grep .sock

Файл .sock все еще был там после предыдущего запуска (видимо, я прервал свои тесты)

Удаление этого файла решило проблему.

 16.12.2020 15:19
В моем случае вместо 64-битного был загружен 32-битный клиент mongodb. Библиотека embedded.mongo использует класс BitSize для определения архитектуры ОС. В моей системе System.getProperty("os.arch") не возвращал значение, указанное в операторе if. Я решил проблему, установив системное свойство os.arch на x86_64 (одно из значений, используемых BitSize для возврата B64) в основном приложении.

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        System.setProperty("os.arch", "x86_64");
        SpringApplication.run(Application.class, args);
    }
}
Примечание: System.getProperty("os.arch") вернет неправильное значение, если вы используете 32-битную версию Java для запуска вашего приложения в 64-битной системе!

(узел: 71307) [DEP0079] DeprecationWarning
Вопросы
JAVASCRIPT
(узел: 71307) [DEP0079] DeprecationWarning
Попробуйте обновить документ MongoDB. Предупреждение об устаревании как

(node:71307) [DEP0079] DeprecationWarning: Custom inspection function on Objects via .inspect() is deprecated

Версия узла v10.5.0, db версии v3.6.5, Версия Mongoose mongoose@4.1.12

Campground.findById(campgroundId, function(err, campground){
    if (err){
        console.info(err);
    } else {
        console.info(campground.celebrity);
        Celebrity.create(celebrityData, function(err, celebrity){
            if (err){
                console.info(err);
            } else {
                //save comment
                celebrity.save();
                campground.celebrity.push(celebrity);
                campground.save();
                console.info(celebrity);
                //req.flash('success', 'Created a comment!');
            }
        });
    }
});
 20.07.2018 08:10
9
4
16 185
9
Данный вопрос помечен как решенный
 Ответы 9
 Ответ принят как подходящий
Вы не должны беспокоиться об этой ошибке, это предупреждение мангуста. На самом деле Mongoose использует inspect () для отладки вывода. они обновят его, возможно, до узла 12.x. На данный момент это безопасно.

Не о чем беспокоиться.

Проверьте эту информацию. https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect

DEP0079: Custom inspection function on Objects via .inspect()# Type: Runtime

Using a property named inspect on an object to specify a custom inspection function for util.inspect() is deprecated. Use util.inspect.custom instead. For backward compatibility with Node.js prior to version 6.4.0, both may be specified.

Если вам нужны подробности, посмотрите это. Это в стадии разработки. Предупреждение придет в узле 10

https://github.com/Automattic/mongoose/issues/6420

 20.07.2018 08:20
Чтобы не получать сообщение об устаревании, вы можете выполнить обновление до mongoose версии 5.2.10 или более поздней в соответствии с этим Проблема с мангустом на Github и установить следующее в нужном месте в коде:

mongoose.set('useCreateIndex', true)
 28.10.2018 13:42
обновить до 5.2.10 и установить

  mongoose.set('useCreateIndex', true);
 15.11.2018 07:56
Другой способ установить это ...

mongoose.connect(
    "mongodb://<user>:<password>@<url>",
    { 
      useNewUrlParser: true, 
      useCreateIndex: true 
    }
  )
Более подробную информацию можно найти здесь: https://github.com/Automattic/mongoose/issues/6890

 01.12.2018 21:40
Чтобы решить эту проблему, вы должны использовать useNewUrlParser и useCreateIndex. См. Код ниже.

mongoose.connect(
 config.databaseUrl,
 { 
    useNewUrlParser: true, 
    useCreateIndex: true 
 }
)
Или же

mongoose.set("useCreateIndex", true);    
mongoose.connect(
    config.databaseUrl,
    { 
        useNewUrlParser: true
    }
  );
 10.12.2018 20:22
Вы должны добавить параметры useCreateIndex в свой метод подключения.

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
})
 25.12.2018 15:30
Совершенно случайный, но, по крайней мере, это не подражатель: я получал это предупреждение об устаревании (и неожиданное поведение), когда случайно использовал Model.find() вместо Model.findOne().

Итак, мой ошибочный код выглядел так

User.find(query)
.then(user => {
  console.info(user.emailSettings.confirmToken)
})
... с обычным объектом / массивом это не сработает с TypeError: Cannot read property 'confirmToken' of undefined, но с массивом документов mongo, по-видимому, он выполняет эту проверку и теперь выдает это предупреждение об устаревании.

 26.08.2019 17:24
Я хочу добавить к этой теме, что она может иметь отношение и к другим зависимостям.

Например, ничего, что я обновлял или устанавливал для NodeJS, MongoDB или Mongoose, не было проблемой, однако моя проблема заключалась в том, что connect-mongodb-session был обновлен и начал выдавать ту же ошибку. В данном случае решением было просто откатить версию connect-mongodb-session с версии 2.3.0 на 2.2.0.



 07.02.2020 01:20
mongoose.connect(process.env.CONNECTION_MONGO, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.then(() => {
console.info("Database connected...");
})
.catch((err) => console.error(err));

Не удалось подключиться к серверу 127.0.0.1:27017 попытка подключения не удалась MongoDB
Вопросы
MONGODB
Не удалось подключиться к серверу 127.0.0.1:27017 попытка подключения не удалась MongoDB
Я работаю над ОС Ubuntu 16.04. Я запускаю mongodb с помощью команд: sudo service mongod start, а затем mongo

Это сгенерировало для меня эту ошибку:

MongoDB shell version v4.0.1
connecting to: mongodb://127.0.0.1:27017
2018-09-27T16:50:41.345+0530 E QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:257:13
@(connect):1:6
exception: connect failed
Теперь я не могу запустить mongodb. Как устранить эту ошибку и каковы причины этих ошибок. Я испробовал все решения этой проблемы, но не нашел решения.

 27.09.2018 13:30
12
2
37 685
9
Данный вопрос помечен как решенный
 Ответы 9
Эта ошибка возникает, когда ваш mongodb server не работает через порт 27017. Попробуйте выполнить команду ниже, чтобы запустить сервер mongodb.

sudo systemctl start mongod
И после выполнения этой команды запустите команду mongo.

 27.09.2018 13:35
 Ответ принят как подходящий
mongod - у меня сработал ремонт,

sudo mongod --repair
sudo mongod
Затем откройте другую вкладку / терминал:

mongo
После этого ваша локальная настройка будет работать правильно

 27.09.2018 13:56
Это сработало для меня (MAC):

Шаг 1: проверьте статус, работает ли MongoDB или нет

brew services list | grep mongo
Шаг 2: если вы получите что-то вроде:

Name           Status  User    Plist
mongodb        stopped
Шаг 3:: запустить службу:

brew services start mongodb 
еще :

если после шага 2 вы получите следующее:

Name           Status  User    Plist
mongodb        started u1 /Users/u1/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
тогда он уже запущен затем вы можете перезапустить свою службу,

brew services restart mongodb
 10.06.2019 12:54
MAC: В моем случае я забыл включить сервер mongo локально, поэтому я исправил проблему, сначала открыв новую вкладку на терминале, а затем включив сервер mongodb следующим образом: -

mongod 
После этого просто попробуйте снова открыть оболочку mongo, например: -

mongo 
Наконец-то это сработало!

 10.08.2019 03:46
В MacOS я выполнил 4-й шаг этого https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/

учебник с sudo

sudo mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork

и это сработало!

 23.07.2020 06:51
У меня тоже была такая же проблема. вот как я решил. перейдите к taskmanager.select> services и найдите mongodbserver в списке, убедитесь, что mongodb запущен, выбрав его.

источник изображения

 01.09.2020 09:21
Окна

Откройте диспетчер задач.
перейдите на вкладку услуг.
Найдите службу MongoDB.
После выбора щелкните вкладку «Просмотр услуг».
Найдите сервер MongoDB.
После выбора нажмите кнопку «Выполнить» в верхнем левом меню.
И тебе хорошо идти.

 05.10.2020 10:10
Для окон,

1) Щелкните правой кнопкой мыши на панели задач и выберите Диспетчер задач.

2) Выберите сервер в данном меню

3) Найдите mongoDB, выберите его и щелкните правой кнопкой мыши (щелкните открытые службы).

4) Найдите сервер mongoDB, выберите его и нажмите «Пуск» в левом окне.

Теперь все готово

 30.12.2020 04:06
К сожалению, ни одно из вышеперечисленных решений у меня не помогло. Глядя на журналы mongodb, кажется, что файл сокета .sock не может быть отключен, что ограничивает перезапуск службы. Удаление связи вручную и перезапуск действительно помогли мне.

Проверка последних 100 строк журналов mongodb:

sudo tail -100 /var/log/mongodb/mongod.log


{"t":{"$date":"2021-04-07T22:11:44.059-04:00"},"s":"E",  "c":"NETWORK",  "id":23024,   "ctx":"initandlisten","msg":"Failed to unlink socket file","attr":{"path":"/tmp/mongodb-27017.sock","error":"Operation not permitted"}}
{"t":{"$date":"2021-04-07T22:11:44.059-04:00"},"s":"F",  "c":"-",        "id":23091,   "ctx":"initandlisten","msg":"Fatal assertion","attr":{"msgid":40486,"file":"src/mongo/transport/transport_layer_asio.cpp","line":919}}
{"t":{"$date":"2021-04-07T22:11:44.059-04:00"},"s":"F",  "c":"-",        "id":23092,   "ctx":"initandlisten","msg":"\n\n***aborting after fassert() failure\n\n"}
Отключение вручную

sudo unlink /tmp/mongodb-27017.sock
Затем следует команда запуска

 sudo systemctl start mongod
Возвращен успешный статус :)

$ sudo systemctl status mongod
 mongod.service - MongoDB Database Server
 Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
 Active: active (running) since Wed 2021-04-07 22:47:23 EDT; 6s ago
   Docs: https://docs.mongodb.org/manual
 Main PID: 96418 (mongod)
 Memory: 177.0M
 CGroup: /system.slice/mongod.service
         └─96418 /usr/bin/mongod --config /etc/mongod.conf

Ошибка MongoDB Atlas при выполнении транзакции для нескольких коллекций (код 8000)
Вопросы
MONGODB
Ошибка MongoDB Atlas при выполнении транзакции для нескольких коллекций (код 8000)
Я пытаюсь выполнить транзакцию на экземпляре Mongo DB Atlas M0 из драйвера Mongo DB Node JS (как описано здесь) и получаю следующую ошибку:

code:8000
codeName:"AtlasError"
errmsg:"internal atlas error checking things: Failure getting dbStats: read tcp 192.168.254.78:50064->192.168.254.78:27000: i/o timeout"
message:"internal atlas error checking things: Failure getting dbStats: read tcp 192.168.254.78:50064->192.168.254.78:27000: i/o timeout"
name:"MongoError"
Я долго искал и не могу найти подсказки, как это решить.

Дополнительная информация:

Ошибка возникает после добавления второй операции в сделка.

Если я удалю все остальные операции и оставлю только одну (не
независимо от того, какой) он работает нормально.

Если я изменю порядок операций (на любой), выйдет ошибка
. еще по добавлению второй операции.

Если все операции выполняются с одним и тем же db и сборником, он отлично работает

Мой код:

async function connect () {

if (dbClient !== null && dbClient.isConnected()) {
    console.info('Reusing db connection => ' + JSON.stringify(dbClient));
  } else {
      console.info('Connecting to database');
      dbClient = await MongoClient.connect(url, { useNewUrlParser: true });
      console.info('Successfully connected to database');
  }
}

async function insertDocuments(document1, document2, document3) {

  try {
    await connect();
  } catch (error) {
    throw error
  }

  let session = dbClient.startSession();

  session.startTransaction({
    readConcern: { level: 'snapshot' },
    writeConcern: { w: 'majority' }
  });

  const collection1 = dbClient.db('mydbname').collection('collection1');
  const collection2 = dbClient.db('mydbname').collection('collection2');
  const collection3 = dbClient.db('mydbname').collection('collection3');
  const logsCollection = dbClient.db('mydbname').collection('logs');

  await collection1.replaceOne(
    { _id: document1._id },
    document1,
    {
      upsert: true,
      session
    }
  );
  await collection2.replaceOne(
    { _id: document2._id },
    document2,
    {
      upsert: true,
      session
    }
  );
  await collection3.replaceOne(
    { _id: document3._id },
    document3,
    {
      upsert: true,
      session
    }
  );
  await logsCollection.updateOne(
    { _id: document1._id },
    { $unset: { estoque: '' } },
    { session }
  );

  try {
    await commitWithRetry(session);
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
}

async function commitWithRetry(session) {
  try {
    await session.commitTransaction();
    console.info('Transação gravada com sucesso');
  } catch (error) {
    if (
      error.errorLabels &&
      error.errorLabels.indexOf('UnknownTransactionCommitResult') >= 0
    ) {
      console.info('Transação não realizada, tentando novamente ...');
      await commitWithRetry(session);
    } else {
      console.info('Erro ao gravar no banco de dados ...');
      throw error;
    }
  }
}
Есть идеи, как это исправить? Заранее спасибо!

 12.11.2018 00:09
7
16
8 880
9
Данный вопрос помечен как решенный
 Ответы 9
У меня была такая же проблема. В отделе поддержки сказали, что, поскольку я использую Mongoose, они не могут помочь. Однако они были достаточно любезны и подарили мне 10 долларов в кредит, чтобы я мог проверить это на более высоком уровне.

Это было проблемой, как только я перешел на уровень M10 (следующий после M0), транзакции начали работать, как задумано. Ваш код очень похож на мой, только я создавал один документ и одновременно обновлял 2 других. Как и в вашем случае, первый прошел (независимо от порядка), а следующий просто истек с той же ошибкой.

 20.11.2018 10:55
У меня была такая же проблема, и я не мог ее решить. В итоге я создал новый кластер в Azure (вместо AWS), и, похоже, он работает нормально.

Не уверен, проблема ли это в их реализации на AWS или в индивидуальной неправильной настройке

Обновлять: та же ошибка теперь происходит в новом кластере. Я поднял билет и получил следующий ответ;

This has been determined to be a bug currently affecting the M0 free cluster and shared tiers of Atlas (M2 and M5). We have opened an internal bug report to address this. While the internal development queue for our Cloud products is not publicly visible, we are tracking the work required to make multi-document transactions work on Atlas free tier clusters.

Они сказали то же самое, что и другой ответ. Пожалуйста, используйте M10. Однако M10 стоит около 60 долларов за квадратный метр, что ни в коем случае не является разрешением. Это также полностью лишает законной силы их главный аргумент в пользу того, что M0 теперь включает MongoDb 4.0.

 20.11.2018 21:28
 Ответ принят как подходящий
Как упоминалось в комментариях, по словам команды MongoDB, эта проблема была решена в версии 4.0.5.

Я протестировал тот же код, что и в моем вопросе, и теперь он работает нормально.

Тем, кто сталкивается с такой же проблемой, убедитесь, что вы используете версию 4.0.5 или выше.

 09.01.2019 21:47
Шаг 1 загрузите https://robomongo.org/download

если у вас есть пробная версия Studio 3T License, перейдите в Быстрый старт
Шаг 2: создайте новое соединение. Убедитесь, что порт - localhost:27017, а db назовите имя вашего проекта.

Шаг 3: вы увидите синий значок для подключения, оставьте примечание по умолчанию.

Вы получите начальную ошибку, потому что БД не установлена ​​на терминале.
Перейти к: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

В папке проекта терминала в macOS.

brew tap mongodb/brew
brew install mongodb-community@4.2
mongo. если вы получите ==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community), то, надеюсь, на терминале нет ошибки.
Последний шаг: вернитесь в интерфейс и нажмите синюю кнопку. БД подключится автоматически.

// .env file on project root folder
MONGO_URI='mongodb://localhost:27017/projectname'
Код подключения ниже:

const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.info('DB Connected'));

mongoose.connection.on('error', (err) => {
  console.info(`DB connection error: ${err.message}`);
});

app.get('/', (req, res) => {
  res.send('hello from the other side');
});
 15.06.2020 16:40
У меня была аналогичная ошибка, и я часами пытался ее отладить. Затем я удалил старый кластер с AWS и создал новый с Google Cloud, и он работал нормально.

 05.10.2020 19:50
Я столкнулся с аналогичной проблемой, просто проверьте свой URI подключения. У меня неправильный пароль.

 10.01.2021 07:57
Я тоже столкнулся с такой ошибкой. в качестве вывода установите пароль кластера без специальных символов, таких как'@/# '. или используйте автоматически сгенерированный пароль. это сработало для меня

 11.01.2021 16:39
Я решил эту проблему, создав базу данных с атласом на сайте MongoDb.

 11.02.2021 18:40
Я решил эту проблему, перейдя к NetWork Access в моей базе данных, что в mongo db Cloub, и удалил старый IP-адрес и поместил новый IP-адрес, щелкнув добавить IP-адрес и выбрав этот текущий ID-адрес



ReactJS: как развернуть на локальном сервере
Вопросы
NODE.JS
ReactJS: как развернуть на локальном сервере
У меня есть веб-приложение, разработанное с использованием серверной части NodeJS + Express + GraphQL + MongoDB и клиентской части ReactJS + Apollo. Я хочу развернуть это приложение локально. Это вообще возможно?

Я встречал десятки «как развернуть на Heroku», «как развернуть в Digital Ocean», «как развернуть на Github» и т. д. Но ни одна из них не объясняет, как развернуть локально.

Прямо сейчас я использую: nodemon server для серверной части и npm start для клиентской части. Я вижу приложение, работающее на http://localhost:3000/ (я использую cors для подключения внешнего интерфейса к серверу, работающему на порту 3001).

Я хотел бы просто перейти на http://localhost:3000/ и посмотреть приложение, не выполняя команды npm start и nodemon server. Это возможно? Если да, то как мне это сделать?

Насколько мне известно, наш локальный сервер не является сервером WAMP (хотя наша ОС - Windows). В ИТ-отделе мне сказали, что это

[...] plain, regular old server. The address is localhost running on port 3000. You can open up another port on 3001 if you need it. Just drop your stuff on the C: drive and you should be good to go. I've never heard of Node or React so I can't help if you have questions.

Любые идеи? Заранее большое спасибо за вашу помощь!

ОБНОВИТЬ

Кажется, есть некоторая путаница в том, что я ищу. Я пытаюсь развернуть это локально.

Скажем, на вашем локальном компьютере (домашнем ноутбуке) вы переходите на localhost: 3000 в своем любимом браузере. Если вы не обслуживаете что-то на localhost в этот момент, ничего не будет отображаться, он скажет «отказано в подключении» или что-то в этом роде. Я хочу иметь возможность открывать любую машину в сети всякий раз, когда я перехожу на localhost: 3000, и мой сайт реакции появляется и работает ... имеет ли это больше смысла?

Я не хочу, чтобы это был режим разработки. Я хочу собрать этот проект на localhost ... Я начинаю думать, что это невозможно.

 08.12.2018 15:25
15
10
19 780
9
Данный вопрос помечен как решенный
 Ответы 9
Вам нужно сделать npm start. Могут быть и другие способы его запуска, но все они приведут к одному и тому же. Вы можете прочитать эту статью о Freecodecamp по развертыванию в DigitalOcean. Вы можете управлять им на своем локальном хосте. Не должно быть слишком разным.

 17.12.2018 13:51
Как я понял, вы хотите развернуть его на локальный сервер, а не на локально на своем развивающемся устройстве.

I thought about doing that...but I'm not so sure IT will be okay with it always running... :(

Как вы можете использовать сервер, если он не работает? Так же, как WAMP (который запускает apache) или что бы там ни было, он должен быть запущен. Итак, просто сделайте это фоновым процессом, как предлагается славомир.

PS Я не думаю, что вы правильно понимаете сервер узла. Прочтите это, чтобы понять, почему сервер узла нуждается в перезагрузке. После этого вам нужно понять, что ни один инструмент горячей перезагрузки не идеален, и вам нужно время от времени перезагружать сервер.

PPS Я не знаю, что это значит

[...] plain, regular old server. The address is localhost running on port 3000.

если есть сервер, работающий на 3000, вам нужно изменить порт для вашего сервера на что-то еще (чаще всего 9000)

 17.12.2018 14:41
 Ответ принят как подходящий
Чтобы решить эту проблему, вы можете создать сценарий запуска, который выполняет npm start и nodemon server. Затем убедитесь, что он скрыт, чтобы ваш сервер всегда работал. Однако имейте в виду, что любые возникшие ошибки остановят ваш сервер, и, если вы не настроите его, сервер не будет перезагружен сам по себе.

 17.12.2018 18:43
Чтобы решить проблему, сначала необходимо создать командный файл с расширением .bat or .cmd и под этим файлом добавить следующие 2 команды

nodemon servernpm start

Затем выполните следующие действия, чтобы добавить его в качестве сценария запуска для ОС Windows.

Создайте ярлык для командного файла.
После создания ярлыка щелкните файл правой кнопкой мыши и выберите Резать.
Нажмите кнопку «Пуск», введите «Выполнить» и нажмите «Ввод».
В окне «Выполнить» введите shell: startup, чтобы открыть папку «Автозагрузка».
После того, как папка автозагрузки будет открыта, щелкните вкладку «Главная» в вверху папки и выберите Вставить, чтобы вставить ярлык в папка.
Вышеупомянутые шаги предназначены, например, для создания командного файла и добавления его в качестве сценария запуска для пользователей Windows 8 и 10. Для большей ясности или справки перейдите по следующей ссылке.

 20.12.2018 13:34
Нет возможности перезагрузить сервер, не отключая его. Технически, у вас может быть ваш «основной» файл, отслеживающий изменения в другом файле. Это будет файл, в котором вы фактически храните свою серверную программу. Затем при внесении изменений вы отбрасываете текущую логику и начинаете ее выполнять. Тем не менее, делать это таким образом было бы очень хрупким и весьма беспорядочным способом сделать это. Это также не исправит ваш интерфейс, для которого вам понадобится аналогичное решение.

Вместо этого вы можете подключиться к событию сохранения вашего любимого редактора и запустить эти две консольные команды, чтобы при каждом сохранении автоматически запускался сервер. (Не забудьте также очистить существующие серверы)

Беги при сохранении для VSCode
команды сохранения для Atom
 23.12.2018 06:29
Я бы попробовал следующее:

создайте свое приложение с установленными переменными производственной среды
получить все файлы из папки dist и развернуть их на своем сервере
теперь получите доступ к вашему приложению, используя localhost /
 23.12.2018 15:33
Возможно, вы ищете что-то вроде нгрок, который создает туннель socks для вашего локального хоста, эффективно развертываясь с локального хоста, насколько я понимаю, позволяя вам получить доступ к вашему локальному хосту через URL-адрес, например ldiuhv093.ngrok.io, или даже настраиваемый поддомен, если вы платите за абонентская плата.

Если у меня что-то не так, подскажите пожалуйста!

 20.02.2020 23:13
Я знаю, что этот пост был два года назад. Но я думаю, что решение вашего второго желаемого результата - использовать параллелизм. https://www.npmjs.com/package/concurrently. Это позволит вам сделать один NPM START, чтобы запустить два всех трех процесса.

И что касается вашего первого вопроса, я думаю, что решение состоит в том, чтобы добавить Electron в ваше приложение, чтобы вы могли упаковать его в исполняемое приложение. Когда вы запустите приложение, ваш экспресс-сервер начнет работать в фоновом режиме.

Большинство людей, вероятно, не понимают, зачем это нужно. Запуск на локальном сервере (компьютере) позволяет получить доступ к локальной файловой системе и даже может выполнять запросы SQL внутри прокси, что потребует участия ИТ-специалистов, если они размещены на внешнем сервере.

 06.08.2020 02:34
Насколько я понимаю, вы хотите развернуть свое приложение на локальном сервере, что означает, что вы хотите развернуть его в сети, к которой вы подключены.

Проверьте ip из командной строки Чтобы развернуть его локально, Выполнить: HOST = ip npm run start

Он будет развернут на вашем локальном сервере. И каждый, кто подключен к серверу, может получить доступ к URL-адресу

Если это сработало для вас, пожалуйста, проголосуйте за

Подключение к Mongodb внутри докера с графическим интерфейсом компаса mongodb
Вопросы
DATABASE
Подключение к Mongodb внутри докера с графическим интерфейсом компаса mongodb
У меня есть база данных mongodb, работающая на порту 27017 по умолчанию в контейнере докеров.

Есть ли способ подключиться к базе данных с помощью графического интерфейса компаса mongodb, изначально работающего в моей ОС Ubuntu?

 26.03.2018 16:20
19
4
22 360
10
 Ответы 10
Запустите свой контейнер mongo с опцией «опубликовать все порты» (docker run -P). Затем вы сможете проверить порт, доступный для хоста через docker ps -a, и подключиться к нему из Compass (просто используйте свое имя хоста: localhost и порт: <exposed port>).

 04.07.2018 21:04
docker run -p 27018:27017, а затем подключитесь из Compass на вашем хосте с портом 27018. Я не вижу причин открывать все порты.

 28.08.2018 19:47
Да мы можем бежать

Шаги:

Вытяните / перезапустите контейнер докеров mongodb

Войдите в оболочку bash

docker exec -it mongodb bash
Теперь откройте сообщество компаса mongodb и с тем же подключением по умолчанию просто нажмите «Подключиться», и mongodb контейнера докеров будет подключен к сообществу компаса.

Мой терминал с докером:
My terminal running docker

Компас Mongodb:
Mongodb Compass

 23.07.2019 13:44
С docker-compose вам просто нужно открыть порт 27017. Когда вы нажмете «Подключиться» в графическом интерфейсе, он автоматически обнаружит это соединение.

version: "3"
services:
  mongo-database:
    container_name: mongo-database
    image: mongo:4
    ports:
      - 27017:27017
 08.06.2020 17:35
Я мог бы подключить компас на окнах к докеру, используя эти теги в конце:

mongodb://user:password@localhost:27017/dbname?authSource=dbname&readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false

 16.06.2020 19:29
Замените localhost своим IP-адресом в строке подключения, например, мой IP-адрес 10.1.2.123, тогда у меня есть mongodb://10.1.2.123:27017?readPreference=primary&appname=MongoDB%20Compass&ssl=false.

Видел это ? здесь: https://nickjanetakis.com/blog/docker-tip-35-connect-to-a-database-running-on-your-docker-host

 08.07.2020 11:33
Просто откройте компас и внутри подключения добавьте учетные данные, если вы использовали envs, например

ME_CONFIG_MONGODB_ADMINUSERNAME=admin
и нажмите "Подключиться". Никаких дополнительных настроек не требуется. Или вы можете использовать mongo-express, который является веб-инструментом пользовательского интерфейса для monodb.

 10.11.2020 13:26
Используйте docker inspect или docker desktop, чтобы проверить и найти открытый порт

docker inspect your_container_name
и найдите этот раздел

       "Ports": {
            "27017/tcp": [
                {
                    "HostIp": "0.0.0.0",
                    "HostPort": "27012"
                }
            ]
        },
а затем подключитесь, используя эту строку URL

mongodb://localhost:27012/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
Не передавайте имя набора реплик, если вы его используете, иначе соединение не будет установлено. Это происходит в том случае, если вы развернули набор реплик вместо того, чтобы превращать автономный набор реплик в набор реплик.

Оставьте комментарий, если вы не знаете, как развернуть набор реплик, и я могу оставить файл docker-compose для настройки и развертывания набора реплик.

 27.11.2020 11:53
Выполните команду sudo docker ps он покажет контейнеры докеров, которые у вас есть, где вы можете найти номер порта mongodb запустите команду sudo mongodb-compass он откроет компас mongodb

Если вы подключаетесь локально, общее имя хоста: localhost а затем просто введите номер порта и нажмите соединять.

 19.03.2021 05:28
У меня также были проблемы с подключением к моей локальной MongoDB с помощью Compass, но я обнаружил, что это проблема с SSL. По умолчанию Compass устанавливает для SSL значение «Системный CA». Однако, если вы попробуете это с докеризованным Mongo, ваши журналы Mongo покажут вам эту ошибку:

Error receiving request from client: SSLHandshakeFailed: SSL handshake received but server is started without SSL support. Ending connection from 172.17.0.1:45902 (connection id: 12)
end connection 172.17.0.1:45902 (0 connections now open)
Поэтому для подключения мне пришлось нажать «Заполнить поля подключения по отдельности», а затем установить для поля SSL значение «Нет». Для справки, я запустил Mongo, используя это: docker run -p 27017:27017 --name some-mongo mongo:4.0. Никакой аутентификации не требуется.

Как сопоставить две строки с пробелами и без них
Вопросы
NODE.JS
Как сопоставить две строки с пробелами и без них
Например: в БД есть строковое значение типа "cell phones". Если я получу строковое значение типа "cellphones" из внешнего интерфейса. Как я могу сравнить его со строкой БД и получить в ответ соответствующие строковые значения.

 30.08.2018 09:40
15
0
1 107
10
Данный вопрос помечен как решенный
 Ответы 10
Вы можете использовать регулярное выражение при поиске своего значения, например:

cellphones|cell phones
Collection.find({
  someName: {
     $regex: new RegExp('cellphones|cell phones', ''),
  },
});
 30.08.2018 09:44
Сначала вы можете начать с удаления пробелов в обеих строках, прежде чем сравнивать их, например:

let a = "cell phone";
let b = "cellphone";
let c = "cell phones"

const stripSpaces = s => s.replace(/\s/g, '');

// compare
console.info(stripSpaces(a) == stripSpaces(b)); // true
console.info(stripSpaces(a) == stripSpaces(c)); // false
 30.08.2018 09:48
Вы можете сравнить так:

let val1 = 'cell phones';
let val2 = 'cellphones';

console.info(val1.replace(/\s/g, '') === val2.replace(/\s/g, '')) // true
//OR
console.info(val1.split(' ').join('') === val2.split(' ').join('')) // true
 30.08.2018 09:49
Вы можете начать с удаления пробелов в обеих строках, прежде чем сравнивать их. Я предполагаю, что вы не знаете, в каком из них есть пробелы, поэтому вы запустите все значения через функцию stripSpaces, например:

let a = "cell phone";
let b = "cellphone";
let c = "cell phones"

const stripSpaces = (s) => s.split(' ').join('');

// compare
console.info(stripSpaces(a) == stripSpaces(b)); // true
console.info(stripSpaces(a) == stripSpaces(c)); // false
 30.08.2018 09:49
Если вам нужен трюк с агрегацией, вы можете попробовать это

db.collection.aggregate([
  { "$project": {
    "name": {
      "$reduce": {
        "input": { "$split": ["$name", " "] },
        "initialValue": "",
        "in": { "$concat": ["$$value", "$$this"] }
      }
    }
  }},
  { "$match": { "name": "cellphones" }}
])
Вы можете проверить это Здесь

 30.08.2018 10:03
попробуйте сначала заменить пустую строку из строки запроса, а затем сравните с полем как

db.test.find(function() { 
    return this.data(function(elm) {
        "cell phones".replace(/ /g,"") == elm.name
    });
});
 03.09.2018 08:12
Учитывая такой документ:

{
    "text" : "cell phones"
}
Вы можете использовать оператор $where следующим образом:

db.collection.find({
    $where: function() {
        return this.text.replace(' ', '') == "cellphones"
    }
});
Я бы не рекомендовал это для больших коллекций (производительность может быть невысокой). Однако даже с большими коллекциями вы могли бы достичь неплохой производительности, добавив дополнительный фильтр в поле "text", чтобы отфильтровать все документы, которые не начинаются с правильного первого символа (ов):

db.collection.find({
    "text": { $regex: "^" + "cellphones".charAt(0) }, // this will use an index on the "text" field if available
    $where: function() {
        return this.text.replace(' ', '') == "cellphones"
    }
});
Или, возможно, даже эта версия с еще одним фильтром в бите $where, который проверяет длину строки для уменьшения количества сравнений строк:

db.collection.find({
    "text": { $regex: "^" + "cellphones".charAt(0) }, // this will use an index on the "text" field if available
    $where: function() {
        return this.text.length >= "cellphones".length // performance shortcut
               && this.text.replace(' ', '') == "cellphones"
    }
});
 03.09.2018 23:34
Ответы ниже этого вопроса хороши, например, при использовании where и Regex, но могут быть лучше всего, если у вас есть небольшое количество документов, из которых вы, возможно, захотите запросить.

Если у вас много документов, я бы посоветовал вам: 1. Используйте дополнительное поле, например cellphone, без пробелов, если предполагается, что значения исходного поля будут короткими. 2. Попробуйте использовать поисковые системы, такие как ElasticSearch или собственный текстовый поиск MongoDB, чтобы найти то, что вам нужно, не только cell phone - cellphone, но и mobile phone, даже smartphone. На самом деле, когда вы что-то гуглите, предложения при вводе также исходят от аналогичных, но более сложных алгоритмов.

 04.09.2018 08:05
Может это решит вашу проблему

   Take Device_Names column contains 

               "cell phone"
               "mobile phone"
               "cellphone"
               "laptop"
1.) Обычный способ:

    select Device_Name from devices where Device_Name='cellphone' ;

             result: 
                    "cellphone"

      which is third one
2.) Удалив пробелы:

  SELECT  Device_Name FROM devices WHERE REPLACE(Device_Name, ' ', '')='cellphone'

               result: 
                    "cell phone"
                    "cellphone"

       which includes first and third one
 08.09.2018 19:28
 Ответ принят как подходящий
Просто удалите эти пробелы из ответа, который вы получаете после поиска запроса, а затем передайте ответ в поле ввода. Затем сопоставьте эту строку с внешней или входной строкой. Если оба совпадения, загрузите необходимый контент. Предположим, что название коллекции - Категория. Тогда пример запроса будет таким

Category.find().exec((err, categories) => {
         var details=[]
         var matchCategory=[]
         categories.map((category,key)=>{
           var obj  = {}
           obj.name = category.name.toLowerCase().replace(/\s/g, "")
           details.push(obj);
         })
       if (details.length > 0){
         var detailsLength=details.length
         details.map((category,key)=>{
             if (category.name= = "cellphones"){ // match your input string 
               matchCategory.push(category)
             }
             detailsLength--
         })
         if (detailsLength==0){
               resolve(matchCategory);
         }
       }
     })
Это может помочь вам протянуть руку помощи.

Pymongo - для использования mongodb + srv: // URI должен быть установлен модуль dnspython
Вопросы
PYTHON
Pymongo - для использования mongodb + srv: // URI должен быть установлен модуль dnspython
Я пытаюсь подключить MongoDB из Атласа.

Мой Монго Ури: mongodb+srv://abc:123@something.something.com/admin?retryWrites=True

Мой версия пимонго - это 3.6.1

Я установил dnspython и сделал import dns

Но я все еще получаю эту ошибку:

dnspython module must be installed to use mongodb+srv:// URI

 22.10.2018 15:15
64
1
59 613
10
 Ответы 10
Возможно, это протокол, ваш URI должен начинаться с:

монго + SRV вместо mongo + src

Если он по-прежнему не работает, поместите список пунктов с версиями PyMongo и dnspython (и версией python, которую вы используете)

 15.11.2018 02:09
В файле requirements.txt замените pymongo на pymongo[tls,srv], как указано в здесь.

 06.12.2018 04:14
Я хотел бы здесь ответить на свои вопросы. Как я упоминал в комментарии, необходимо перезапустить ядро ​​ноутбука jupyter, чтобы pymongo вступил в силу после загруженного dnspython.

 06.12.2018 05:59
Я решил эту проблему с помощью:

$ python -m pip install pymongo [SRV]

 24.07.2019 15:48
Чтобы использовать протокол монго + SRV, вам необходимо установить Pymongo-SRV Запустите эту команду, чтобы сделать это с Python 3:

pip3 install pymongo[srv]
или этот для других версий:

pip install pymongo[srv]
И, как предлагает @lukrebs, добавьте кавычки для ZSH:

pip3 install 'pymongo[srv]'
 12.09.2019 15:28
вы можете использовать mongo:// вместо mongodb+srv://

 29.09.2019 15:30
Я застрял с той же проблемой и попробовал

pip install dnspython==2.0.0

Это последняя версия от https://pypi.org/project/dnspython/

Это сработало: D

 24.08.2020 22:14
У меня была такая же проблема с Ubuntu 18, но поскольку я использую Anaconda Я только что попробовал

Conda install dns python
У меня был запущен IPython, он не работал, пока тот же экземпляр был открыт, но когда я перезапустил этот экземпляр, он работал.

На другой машине, используя

Conda install dns python
и это сработало, но мне пришлось полностью перезагрузить компьютер по другой причине, прежде чем тестировать его

 20.01.2021 09:20
У меня была такая же проблема, и я нашел следующую строку.

import dns.resolver
dns.resolver.default_resolver=dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers=['8.8.8.8'] 
У меня это сработало.

 19.05.2021 01:45
pip install dnspython
dnspython - это набор инструментов DNS для Python. Он поддерживает практически все типы записей. Его можно использовать для запросов, передачи зон и динамических обновлений. Он поддерживает сообщения с аутентификацией TSIG и EDNS0.

FindOneAndUpdate вызывает проблему дублирования
Вопросы
ARRAYS
FindOneAndUpdate вызывает проблему дублирования
У меня проблема с findOneAndUpdate в мангусте. Дело в том, что я обновляю документ, найдя его. Запрос выглядит следующим образом:

UserModel.findOneAndUpdate({
individualId: 'some id'
}, {
$push: {
supporterOf: 'some string'
}
})
«supporterOf» — это ссылка на UserModel, а его тип — «ObjectId».

The issue i am facing here is that, 'some string' is being pushed twice under 'supporterOf' in the document.

Может ли кто-нибудь сказать мне, как вставить элемент массива внутрь документа?

 11.03.2019 14:51
2
5
2 823
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Недавно я столкнулся с той же проблемой. Тем не менее, мне удалось решить эту проблему с помощью некоторых других логик (подробности приведены ниже), но я не мог понять причину того, почему найтиOneAndUpdate вставляет записи дубликат в mongodb.

Вы можете решить эту проблему, следуя логике.

Используйте найтиодин или найти по идентификатору вместо найтиOneAndUpdate для поиска документа в вашей коллекции, а затем вручную обновите документ и запустите спасти().

Вы можете лучше понять этот фрагмент кода

return new Promise(function (resolve, reject) {
    Model.findOne({
            someCondition...
        }, function (err, item) {
            if (err) {
                reject(err);
            } else {
                item.someArray.push({
                    someKeyValue...
                });
                item.save().then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                });
            }
        }).catch((err) => {
            reject(err)
        });
   });
Это не будет вставлять повторяющийся элемент. Однако, если вы узнаете причину дублирования, обязательно обновите эту ветку.

 12.03.2019 12:48
У меня была такая же проблема, решение есть.

Я ждал, как показано ниже.

 **await** schema.findOneAndUpdate(queryParms, {
                "$push": {
                    "array1": arrayDetails,
                    "array2": array2Details
                }
            }, {
                "upsert": true,
                "new": true
            },
            function (error, updateResponse) {
                if (error) {
                    throw new Error (error);
                } else {
                    // do something with updateResponse;
                }
            });
простое удаление ожидания помогло мне решить эту проблему. Нужно найти первопричину. любой указатель для ссылок приветствуется.

 16.03.2020 08:56
У меня была такая же проблема. Мой код был:

const doc = await model.findOneAndUpdate(
{filter}, {update},
{new: true}, (err, item) =>  if (err) console.info(err) }
)
res.locals.doc = doc
next();
Дело в том, что по какой-то причине этот обратный вызов после «новой» опции создавал двойную запись. Я удалил обратный вызов, и это сработало.

 18.06.2020 18:30
У меня такая же проблема. Я нашел решение для себя:

Я использовал обратный вызов и обещание (поэтому использовал ключевое слово «ожидание») одновременно.

Using a callback and a promise simultaneously will result in the query being executed twice. You should be using one or the other, but not both.

  options = {
    upsert: true  // creates the object if it doesn't exist. defaults to false.
  };
  await Company.findByIdAndUpdate(company._id,
    { $push: { employees: savedEmployees } },
    options,
    (err) => {
       if (err) {
          debug(err);
       }
    }
  ).exec();
к

  options = {
    upsert: true  // creates the object if it doesn't exist. defaults to false.
  };
  await Company.findByIdAndUpdate(company._id,
    { $push: { employees: savedEmployees } },
    options
  ).exec();
 15.08.2020 05:13
UserModel.findOneAndUpdate(
{ _id: id },
{ object }
)
Даже если вы используете _id в качестве параметра, не забудьте сделать фильтр явным по id

 17.08.2020 02:00
Проблема с принятым ответом заключается в том, что он решает проблему только путем заключения его в ненужное дополнительное обещание, когда метод findOneAndUpdate() уже возвращает обещание. Кроме того, он использует как обещания, так и обратные вызовы, чего вам почти никогда не следует делать.

Вместо этого я бы выбрал следующий подход:

Обычно я предпочитаю отделять логику запроса на обновление от других проблем как для удобочитаемости, так и для повторного использования. поэтому я бы сделал функцию-оболочку вроде:

const update = (id, updateObj) => {
    const options = {
      new: true,
      upsert: true
    }
    return model.findOneAndUpdate({_id: id}, {...updateObj}, options).exec()
}
Затем эту функцию можно было бы повторно использовать во всем моем приложении, избавляя меня от необходимости переписывать повторяющиеся настройки параметров или вызовы exec.

Затем у меня была бы какая-то другая функция, отвечающая за вызов моего запроса, передачу ему значений и обработку того, что возвращается от него.

Что-то вроде:

const makePush = async () => {
   try {
     const result = await update('someObjectId', {$push: {someField: value}});
     // do whatever you want to do with the updated document
   catch (e) {
     handleError(e)
    }
 }
Нет необходимости создавать ненужные обещания, никакого ада обратных вызовов, никаких дублирующих запросов и строгое соблюдение принципов единой ответственности.

 17.08.2020 03:01
Проблема, похоже, связана с объединением ожидания и обратного вызова. У меня была такая же проблема, пока я не понял, что использую обратный вызов (err, resp) а также a .catch(...).

models[auxType].findOneAndUpdate(
    filter,
    updateObject,
    options,
    (err, resp)=>{
        if (err) {
            console.info("Update failed:",err)
            res.json(err)
        } else if (resp) {
            console.info("Update succeeded:",resp)
            res.json(resp)
        } else {
            console.info("No error or response returned by server")
        }
    })
    .catch((e)=>{console.info("Error saving Aux Edit:",e)}); // << THE PROBLEM WAS HERE!!
Проблема решилась, как только я удалил строку .catch(...).

Из документации мангуста:

«Запросы Mongoose не являются промисами. У них есть функция .then() для co и async/await для удобства. Однако, в отличие от промисов, вызов .then() запроса может выполнить запрос несколько раз». (https://mongoosejs.com/docs/queries.html#queries-не-обещания)
 22.10.2020 09:28
В моем случае изменение обратного вызова асинхронный решило проблему.

изменить это:

await schema.findOneAndUpdate(
    { queryData },
    { updateData },
    { upsert: true },
    (err) => {
      if (err) console.info(err); 
      else await asyncFunction();
    }
  );
К этому:

await schema.findOneAndUpdate(
    { queryData },
    { updateData },
    { upsert: true },
    (err) => {
      if (err) console.info(err);
    }
  );
 if (success) await asyncFunction();
 30.12.2020 12:22
Используйте $addToSet вместо $push, это должно решить проблему. Я считаю, что есть проблема со структурой данных, используемой при создании «Модели» мангуста. Как мы знаем, push — это операция массива (которая допускает дублирование), в то время как addToSet может быть операцией Set (Sets не допускают дублирования).

 17.06.2021 14:36
$addToSet вместо $push позволил мне предотвратить дублирование записи в моем поле массива mongoDb пользовательского документа, подобного этому.

const blockUserServiceFunc = async(req, res) => {

let filter = {
    _id : req.body.userId
}

let update = { $addToSet: { blockedUserIds:  req.body.blockUserId  } };

await User.findOneAndUpdate(filter, update, (err, user) => {
    if (err) {
        res.json({
            status: 501,
            success: false,
            message: messages.FAILURE.SWW
        });
    } else {

        res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.USER.BLOCKED,
            data: {
                'id': user._id,
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'isActive': user.isActive,
                'isDeleted': user.isDeleted,
                'deletedAt': user.deletedAt,
                'mobileNo': user.mobileNo,
                'userName': user.userName,
                'dob': user.dob,
                'role': user.role,
                'reasonForDeleting': user.reasonForDeleting,
                'blockedUserIds': user.blockedUserIds,
                'accountType': user.accountType
            }
        });

    }
}
).catch(err => {
    res.json({
        status: 500,
        success: false,
        message: err
    });
});

UnhandledPromiseRejectionWarning: MongoNetworkError: не удалось подключиться к серверу [localhost: 27017] при первом подключении [MongoNetworkError
Вопросы
JAVASCRIPT
UnhandledPromiseRejectionWarning: MongoNetworkError: не удалось подключиться к серверу [localhost: 27017] при первом подключении [MongoNetworkError
Я попытался выполнить следующую команду:

node index.js
Однако со своего терминала я получаю следующее:

    success connection to port 3000
(node:16767) UnhandledPromiseRejectionWarning: MongoNetworkError: failed to connect to server [localhost:27017] on first connect [MongoNetworkError
: connect ECONNREFUSED 127.0.0.1:27017]
    at Pool.<anonymous> (/Users/hatchery/Documents/nodejs/fxexpress/node_modules/mongoose/node_modules/mongodb-core/lib/topologies/server.js:503:11
)
    at emitOne (events.js:116:13)
    at Pool.emit (events.js:211:7)
    at Connection.<anonymous> (/Users/hatchery/Documents/nodejs/fxexpress/node_modules/mongoose/node_modules/mongodb-core/lib/connection/pool.js:326:12)
    at Object.onceWrapper (events.js:317:30)
    at emitTwo (events.js:126:13)
    at Connection.emit (events.js:214:7)
    at Socket.<anonymous> (/Users/hatchery/Documents/nodejs/fxexpress/node_modules/mongoose/node_modules/mongodb-core/lib/connection/connection.js:245:50)
    at Object.onceWrapper (events.js:315:30)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at emitErrorNT (internal/streams/destroy.js:64:8)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
(node:16767) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:16767) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Я не уверен, почему я получаю эту ошибку. Может ли кто-нибудь посоветовать, что делать?

 24.04.2018 15:57
8
0
25 150
11
Данный вопрос помечен как решенный
 Ответы 11
Не уверен, в какой вы системе, но попробуйте запустить это, если вы работаете в Linux:

mongo
или для macOS:

mongod
и оставьте его работать в новом терминале, а затем попробуйте снова запустить сервер

 24.04.2018 16:01
Хотя приведенное выше решение может работать, лучше понять, как отлаживать и что говорит ошибка.

У вас есть UnhandledPromiseRejectionWarning, потому что в вашем коде вы не должны обрабатывать случай отклонения обещания, когда вы подключаетесь к MongoDB.

Затем серверу узла не удалось подключиться к mongodb. Это могло быть по нескольким причинам. Один простой случай, о котором упоминал @Sayegh, - сам сервер не работает. Может быть другая причина, например, неправильный порт и т. д., Сервер не принимает входящие соединения и т. д.

Как отлаживать. Первый шаг - выяснить, запущен процесс или нет. Один простой способ - запустить эту команду ps aux | grep mongo, которая перечислит все процессы от всех пользователей с mongo в виде текста. Если это было так и по-прежнему невозможно подключиться, поищите порт. Если по-прежнему не удается подключиться, проверьте, принимает ли сервер входящее соединение, и возьмите его оттуда.

 25.04.2018 06:51
Прежде чем запускать команду NodeJS, убедитесь, что вы создали правильные каталоги с нужными разрешениями:

> sudo mkdir -p /data/db
> sudo chmod -R go+w /data/db
 21.03.2019 16:48
 Ответ принят как подходящий
Если вы используете mongoDB.Atlas, перейдите к сетевому доступу и установите Whitelist Entry: 0.0.0.0/0. 



Повторно запустите вашу команду.

 28.06.2019 08:26
Сначала я попробовал решение Skitty, и оно не сработало для меня, но я все еще сохраняю решение в своем коде, а затем я изменил app.listen(process.env.PORT || 3000);, и это сработало для меня.

 14.07.2019 01:34
Я столкнулся с той же проблемой, но после большого количества RND. Я обнаружил, в чем проблема, поэтому запустите эту команду на своем терминале.

sudo service mongod start

затем запустите монго на терминале и посмотрите.

 05.12.2019 18:36
У меня была такая же проблема, и я решил ее, изменив имя пользователя и пароль пользователя базы данных на что-то более простое, например dev: dev, и у меня возникла ошибка, используя его с пользователь-разработчик: пользователь-разработчик ... просто измените его на что-то простое

 17.12.2019 09:59
Просто восстановите mongodb, установленный в вашей системе. Нажав на установленный вами пакет, вы сможете его восстановить.

 03.05.2020 10:15
Если вы используете атлас Mongodb, перейдите в раздел Доступ к сети и установите свой текущий IP-адрес, а затем повторно запустите свою команду.

Надеюсь, у вас это сработает.

 06.05.2020 06:15


Соединение MongoDB ожидает, что вы введете закодированный пароль URL. Но когда у меня был пароль с "." (xxx.xxx), кодировка URL остается точкой. Однако это все равно не сработало. Я изменил пароль на простую строчную строку, и он работал нормально.

Не уверен, почему он не принимает. Но это на время решило вопрос.

 17.05.2020 07:49
Если вы пользователь Mac, это может быть уместный комментарий. Для меня это было потому, что сервер не работал. При запуске mongodb я увидел в консоли сообщение о том, что /data/db не существует и / не доступен для записи. Итак, я использовал решение synt.conf.

sudo mkdir -p /System/Volumes/Data/data/db
sudo chown -R whoami /System/Volumes/Data/data/db`

echo "data\t/System/Volumes/Data/data" | sudo tee -a /etc/synthetic.conf
перезагрузите вашу систему
запустить mongodb
и это работает.

Не удалось автоматически настроить источник данных: spring.datasource.url не указан
Вопросы
JAVA
Не удалось автоматически настроить источник данных: spring.datasource.url не указан
Я создал базовое приложение для весенней загрузки из ПРУЖИНА ИНИЦИАЛИЗР с зависимостями Web, MongoDB и JPA.

Когда я пытаюсь запустить приложение весенней загрузки, я получаю следующее исключение:

Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
2018-03-25 16:27:02.807 ERROR 16256 --- [  restartedMain] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************
Description:
Failed to auto-configure a DataSource: 'spring.datasource.url' is not specified and no embedded datasource could be auto-configured.
Reason: Failed to determine a suitable driver class

Action:

Consider the following situation:
If you want an embedded database like H2, HSQL or Derby, please add it in the Classpath.
If you have database settings to be loaded from a particular profile you may need to activate it since no profiles were currently active.
В файле application.properties у меня следующая конфигурация:

server.port=8081
spring.data.mongodb.database=TestDatabase
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
Версии, которые я использую: Spring: 5.0.4, MongoDB: 3.6, Весенняя загрузка: 2.0

 25.03.2018 13:14
46
0
125 860
12
Данный вопрос помечен как решенный
 Ответы 12
Кажется, отсутствует драйвер MongoDB. Включите следующую зависимость для pom.xml:

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
 25.03.2018 13:27
 Ответ принят как подходящий
Поскольку вы добавили зависимости mongodb и data-jpa в свой файл pom.xml, он создавал конфликт зависимостей, как показано ниже

<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
Попробуйте удалить зависимость jpa и запустить. Он должен работать нормально.

 25.03.2018 13:37
Перейдите в папку ресурсов, где присутствует application.properties, обновите в ней приведенный ниже код.

spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
 31.05.2018 12:08
Добавьте строку ниже в файл application.properties в папке ресурсов и перезапустите приложение.

spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
 05.06.2018 20:02
ваша зависимость на основе данных пытается найти свои соответствующие сущности, которые не были созданы, комментирует зависимости на основе данных и снова запускает приложение.

<!-- <dependency> -->
        <!-- <groupId>org.springframework.boot</groupId> -->
        <!-- <artifactId>spring-boot-starter-data-jpa</artifactId> -->
        <!-- </dependency> -->
 24.07.2018 17:36
Добавьте свои зависимости, такие как mongodb, web, jpa. Удалите / очистите остатки.

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>
 13.08.2018 13:47
добавление зависимости org.apache.derby решило мою проблему.

<dependency>
            <groupId>org.apache.derby</groupId>
            <artifactId>derby</artifactId>
            <scope>runtime</scope>
        </dependency>
 16.10.2018 07:34
В gradle build я просто:

compile('org.springframework.boot:spring-boot-starter-data-jpa') compile('org.springframework.boot:spring-boot-starter-security') compile('org.springframework.boot:spring-boot-starter-web') compile('org.springframework.boot:spring-boot-devtools')

удаленный

**`compile('org.springframework.boot:spring-boot-starter-data-jpa')`**
и это сработало для меня.

 09.01.2019 11:42
Эта ошибка возникла, когда вы помещаете зависимости JPA в файл конфигурации весенней загрузки, например, в maven или gradle. Решение: Документация Spring-Boot

В файле application.properties необходимо указать строку подключения к БД и сведения о драйвере. Это решит проблему. Это может кому-то помочь.

 16.02.2019 19:03
Я столкнулся с этой проблемой, когда просто неправильно ввел свой URL-адрес jdbc в application.properties. Надеюсь, это кому-то поможет: перед:

spring.datasource.url=jdbc://localhost:3306/test
после:

spring.datasource.url=jdbc:mysql://localhost:3306/test
 10.03.2019 02:35
@Bhabadyuti Bal, дайте нам хороший ответ, в gradle вы можете использовать:

compile 'org.springframework.boot:spring-boot-starter-data-jpa' 
compile 'com.h2database:h2'
во время теста:

testCompile 'org.reactivecommons.utils:object-mapper:0.1.0'
testCompile 'com.h2database:h2'

Неожиданный конец ввода JSON в MongoDB Compass
Вопросы
JSON
Неожиданный конец ввода JSON в MongoDB Compass
Я хочу импортировать данные типа JSON в компас MongoDB, функция импорта выдает эту ошибку "неожиданный конец ввода JSON"

Неожиданный конец ввода JSON в MongoDB Compass

есть некоторые из моих файлов JSON

[
   {
      "id":4,
      "user":"test@example.com",
      "date1":"2019-03-01",
      "date2":"2019-04-01",
      "statut":"Good",
      "guest_number":4
   }
]
 15.05.2019 15:55
22
0
18 915
12
Данный вопрос помечен как решенный
 Ответы 12
Структура вашего JSON неверна, вы можете прочитать информацию о Стандарты JSON

A value can be a string in double quotes, or a number, or true or false or null, or an object or an array. These structures can be nested.

попробуйте использовать двойные кавычки вместо одинарных:

Валидаторы JSON также могут помочь вам

[
    {
     "id" : 4,
     "user" : "test@example.com",
     "date1" : "2019-03-01",
     "date2" : "2019-04-01",
     "statut" : "Good",
     "guest_number" : 4
    }
]
 15.05.2019 16:09
У меня была эта проблема 6 месяцев назад, решение - записать все JSON в одну строку. [{"id":4,"user":"test@example.com","date1":"2019-03-01","date2":"2019-04-01","statut":"Good","guest_number":4}]

MongoDB Compass скажет вам:

Import success!

Но документ точно не появится в вашей коллекции, так что лучше используйте Robo3T, если собираетесь вставлять json. Затем вы можете снова использовать Компас, как я. Это странно, да, но другого решения я пока не нашел.

[ОБНОВИТЬ]

Я импортирую данные с помощью Compass, но сначала экспортирую документ из Compass, чтобы посмотреть, как он пишет json.

{"_id":{"$oid":"5e4cf105c9ba1a21143d04a2"},"tPreguntas":["Pregunta 1","Pregunta 2","Pregunta 3","Pregunta 4","Pregunta 5"],"tCategorias":[],"tPublico":true,"tFechaCreacion":{"$date":{"$numberLong":"1582100741716"}},"tCodigo":"test1","tTitulo":"Test 1","tDescripcion":"Test de muestreo número uno para comprobar.","tCreadoPor":"eoeo@eoeo.com"}
Он выглядит иначе, чем json в Интернете, который я опубликовал в своем первом посте. (посмотрите, например, на этот objectId "$oid"). Так что, если вы будете следовать этому шаблону, Compass будет импортировать вас нормально.

 15.05.2019 16:10
 Ответ принят как подходящий
решение состоит в том, чтобы написать все JSON в одну строку, но если у нас есть большой документ !! Я только что нашел решение, что я могу импортировать данные с помощью этой команды в терминале:

mongoimport --jsonArray --db YourDatabase --collection YourCollection --file Yourfile.json
 16.05.2019 19:12
Вы также можете использовать командную строку mongodb следующим образом:

db.user.insert(
[
    {
     "id" : 4,
     "user" : "test@example.com",
     "date1" : "2019-03-01",
     "date2" : "2019-04-01",
     "statut" : "Good",
     "guest_number" : 4
    },
    {
     "id" : 5,
     "user" : "test2@example.com",
     "date1" : "2019-03-01",
     "date2" : "2019-04-01",
     "statut" : "Good",
     "guest_number" : 4
    }
]
 31.05.2019 03:14
Эта ошибка синтаксического анализа может быть решена с помощью минификации. Итак, минимизируйте json следующим образом. Хотя, это довольно лихорадочный процесс, чтобы сделать это для каждого объекта.

{
"_id" : "123456",
"name" :  "stackoverflow"
}
изменить на:

{"_id":"123456","name":"stackoverflow"}
 30.07.2019 09:37
Эта ошибка синтаксического анализа может быть решена с помощью минификации. Итак, минимизируйте json следующим образом. Хотя, это довольно лихорадочный процесс, чтобы сделать это для каждого объекта.

И такая минификация сработала для меня.

{ 
    "_id" : ObjectId("5b9ecf9a64f634289ca895bb"), 
    "name" : "Mark"
}
{ 
    "_id" : ObjectId("5b9edd9064f634289ca895e4"), 
    "name" : "David"
}
К :

{"_id":"ObjectId(\"5b9ecf9a64f634289ca895bb\")","name":"Mark"}
{"_id":"ObjectId(\"5b9edd9064f634289ca895e4\")","name":"David"}
 04.09.2019 16:19
У меня была аналогичная проблема, но оказалось, что это дополнительные переводы строки в конце файла. Их удаление устранило проблему. Я предлагаю открыть ваш файл в редакторе, который показывает переводы строк, например. Блокнот++

 02.10.2019 11:53
Этот ответ здесь Решение решил проблему для меня. Кажется, это проблема форматирования.

 19.11.2019 21:07
Запустите эту команду в cmd, и путь cmd должен находиться в той же папке, где находится файл JSON.

mongoimport --jsonArray --db YourDatabase --collection YourCollection --file Yourfile.json
 18.12.2019 08:08
Просто скопируйте содержимое вашего файла json, затем в Mongodb Compass выберите свою базу данных, затем нажмите «Добавить данные», которая выпадет, затем нажмите «Вставить документ», появится диалоговое окно, затем вставьте его туда и нажмите «Вставить».

 04.02.2020 23:37
Это проблема с символами конца строки (EOL).

В среде Windows окончанием строки обычно является CR NL (\r\n), в то время как MongoDB Compass поддерживает только CR (\r).

Вы можете открыть файл в Notepad++, включить переключатель «Показать все символы» на панели инструментов и проверить текущий символ конца строки.

Чтобы устранить проблему, выберите «Правка» > «Преобразование EOL» > «Macintosh (CR)».

 02.04.2020 23:39
Добавьте --jsonFormat=canonical в свой скрипт mongoexport:

mongoexport --db=quotes --collection=quotes  --jsonFormat=canonical --out=data/quotes.json
JSON can only directly represent a subset of the types supported by BSON. To preserve type information, MongoDB adds the following extensions to the JSON format.

MongoParseError: URI не имеет имени хоста, доменного имени и tld
Вопросы
NODE.JS
MongoParseError: URI не имеет имени хоста, доменного имени и tld
Я получаю эту ошибку, когда пытаюсь подключить свое приложение (nodejs) к mongodb. Я очень ценю вашу помощь здесь.

MongoParseError: URI does not have hostname, domain name and tld
    at parseSrvConnectionString (E:\Projects\NodeAPI\node_modules\mongodb-core\lib\uri_parser.js:41:21)
    at parseConnectionString (E:\Projects\NodeAPI\node_modules\mongodb-core\lib\uri_parser.js:509:12)
    at connect (E:\Projects\NodeAPI\node_modules\mongodb\lib\operations\mongo_client_ops.js:195:3)
    at connectOp (E:\Projects\NodeAPI\node_modules\mongodb\lib\operations\mongo_client_ops.js:284:3)
    at executeOperation (E:\Projects\NodeAPI\node_modules\mongodb\lib\utils.js:416:24)
    at MongoClient.connect (E:\Projects\NodeAPI\node_modules\mongodb\lib\mongo_client.js:175:10)
    at Function.MongoClient.connect (E:\Projects\NodeAPI\node_modules\mongodb\lib\mongo_client.js:341:22)
    at Object.<anonymous> (E:\Projects\NodeAPI\server.js:12:13)
    at Module._compile (internal/modules/cjs/loader.js:816:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:827:10)
  name: 'MongoParseError',
  [Symbol(mongoErrorContextSymbol)]: {} }
Мой код:

db.js

 module.exports = {
uri : "mongodb+srv://mithun:*******@cluster0-s089x.mongodb.net/test?retryWrites=true"}
================================================== ================

node_route.js

 module.exports = function(app, db){
app.post('/notes', (req, res) => {
    const note = {text: req.body.body, title: req.body.title};
    db.collection('notes').insert(note, (err, results) => {
        if (err){
            res.send({'error': 'An error has occured'});
        } else {
            res.send(result.ops[0]);
        }
    });
 });
 };
================================================== ====================== index.js

 const noteRoutes = require('./note_route');
 module.exports = function(app, db){
 noteRoutes(app, db);
}
================================================== ======================= сервер.js

       const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 8000;
 app.use(bodyParser.urlencoded({extended: true}));
  MongoClient.connect(db.uri,{ useNewUrlParser: true }, (err, database) => 
  {
     if (err) return console.info(err);
     require('./app/routes')(app, database);
      app.listen(port, () => {
           console.info("We are live on " +port);
  });
 });
================================================== ==========================

module.exports = {
uri : "mongodb+srv://mithun:m3Thun#47@cluster0-s089x.mongodb.net/test?retryWrites=true&ssl=false"
}

Я пробовал с ssl= false, но ошибка остается прежней.

 18.04.2019 22:42
37
4
46 129
13
Данный вопрос помечен как решенный
 Ответы 13
Use of the +srv connection string modifier automatically sets the ssl option to true for the connection. You can override this behavior by explicitly setting the ssl option to false with ssl=false in the query string.

Может ли это быть проблемой ssl? Попробуйте без ssl: ssl=false

 23.04.2019 12:13
 Ответ принят как подходящий
Решение-1: Если вы используете какой-либо специальный символ в своем пароле, вам необходимо закодировать конкретный символ, как %+ASCII_code_of_the_character ссылка ниже все объясняет. https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password

Решение-2: Нажмите на автоматическое создание пароля и вставьте его в строку подключения, он будет работать.

screenshot

 21.06.2019 16:38
Убедитесь, что специальные символы в вашем пароле закодированы. Например, если ваш пароль содержит «#», вы должны заменить буквенный символ «#» на «% 23», где 23 — шестнадцатеричный код для «#», см.: https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password.

 04.09.2019 15:31
Убедитесь, что пароль имени пользователя закодирован, если в нем есть специальные символы, такие как @!: и т. д., или вы использовали генератор паролей MongoDB. Видеть: https://docs.mongodb.com/manual/reference/connection-string/#examples

 18.10.2019 02:57
У вас может быть специальные символы в строке пароль.

Например. Если бы ваш пароль был - password!#, !# это специальные символы, их нужно было бы переписать как %23%21. Таким образом, ваш пароль строки подключения должен быть password%23%21.

Для получения дополнительной информации - MongoDB, ASCII

 14.11.2019 17:03
Эта проблема возникает, если ваш пользователь MongoDB содержит какие-либо специальные символы Попробуйте удалить любой специальный символ из пароля

 29.03.2020 20:31
Я также столкнулся с этой проблемой.

В моем случае я использовал пакет npm dotenv, чтобы получить имя пользователя и пароль из файла .env.

Когда я записал значения из файла .env, я заметил, что он неправильно извлекает пароль.

Проблема может быть как в логине, так и в пароле.

 30.05.2020 02:00
используйте '%23' вместо # в вашем пароле а также

mongoURI = "mongodb+srv://username:password@devconnector.jpokp.mongodb.net/dbname?retryWrites=true&w=majority"

mongoose .connect(mongoURI, { useNewUrlParser: true }) .then(() => console.info("MongoDB connected")) .catch((err) => console.info(err));

 22.07.2020 10:26
В моем случае оказалось, что в строке подключения был пробел, который было трудно увидеть в небольшом поле ввода текста, которое Heroku предоставляет для параметров конфигурации.

 12.09.2020 00:28
Даже я столкнулся с той же проблемой, и я сделал эти шаги, это сработало для меня!

Перейдите к своей базе данных monogoDB (веб-сайт).
Измените пароль пользователя на автоматически сгенерированный пароль.
Вставьте этот автоматически сгенерированный пароль в строку URI.
Проверьте URI один и два раза, подтвердите его и запустите приложение в оболочке.
 22.11.2020 12:51
попробуй закодировать пароль

здесь: закодировать свой пропуск
ссылка: Специальные символы в пароле строки подключения
бывший)

# before encode
test@#123%^
# after encode
test%40%23123%25%5E
эта работа для меня :)

 31.01.2021 02:01
Я думаю, что ваш пароль может содержать и или? (или могут быть специальные символы), поэтому вы должны удалить его, чтобы вызвать ошибку синтаксического анализа

 06.08.2021 13:43
Я решил это с помощью следующих шагов в MongoDB Compass: -

Нажмите "Заполните поля подключения индивидуально"
Fill in connection fields individually

заполните свои Имя пользователя и пароль
fill your Username and password

Нажмите на Соединять

Невозможно правильно установить mongodb на ubuntu 18.04 LTS
Вопросы
MONGODB
Невозможно правильно установить mongodb на ubuntu 18.04 LTS
Я пытаюсь установить mongodb на свой Ubuntu 18.04 LTS, но появляется следующая ошибка:

You might want to run 'apt --fix-broken install' to correct these. The following packages have unmet dependencies: mongodb-org : Depends: mongodb-org-server but it is not going to be installed Depends: mongodb-org-mongos but it is not going to be installed Depends: mongodb-org-tools but it is not going to be installed E: Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution). umar@umar-Lenovo-ideapad-320-15ISK:~/Desktop/portfolio/async-demo$ sudo apt-get install -y mongodb

Я полагаю, что причина этого уже упоминается на их веб-сайте, ясно говоря,

PLATFORM SUPPORT

MongoDB only provides packages for 64-bit LTS (long-term support) Ubuntu releases; for example, 14.04 LTS (trusty) and 16.04 LTS (xenial). See Supported Platforms for more information.

These packages may work with other Ubuntu releases; however, they are not supported.

Итак, как я могу установить mongodb на мою последнюю версию Ubuntu 18.04 LTS? Для ясности я перечисляю действия, которые я сделал для исправления ошибок: Я следил за их официальным сайтом, чтобы установить mongodb

1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
2. echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
3. sudo apt-get update
4. sudo apt-get install -y mongodb-org
Now here I got errors saying: You might want to run 'apt --fix-broken install' to correct these. The following packages have unmet dependencies:

Я пытался,

apt --fix-broken install
Не получилось, где-то я догадался бежать

sudo apt -f install
Он также вернул ошибку.

Errors were encountered while processing: /var/cache/apt/archives/mongodb-org-server_4.0.0_amd64.deb /var/cache/apt/archives/mongodb-org-mongos_4.0.0_amd64.deb /var/cache/apt/archives/mongodb-org-tools_4.0.0_amd64.deb E: Sub-process /usr/bin/dpkg returned an error code (1)

Я считаю, что основная проблема - это совместимость с версией. Итак, в основном у меня Ubuntu 18.04, как я устанавливаю mongodb в этой версии, чтобы я мог работать без каких-либо проблем.

 19.07.2018 10:19
30
0
58 134
14
Данный вопрос помечен как решенный
 Ответы 14
 Ответ принят как подходящий
Вам нужно сначала удалить mongodb, вы можете использовать:

sudo apt-get purge mongodb-org*
После этого установите mongodb с помощью следующих команд:

sudo apt-get install mongodb
А затем обновите:

sudo apt-get update
Вы закончили установку mongodb. Вы можете проверить это с помощью следующей команды:

mongo --version
 19.07.2018 10:39
Это связано с тем, что на данный момент Mongo DB для Ubuntu 18.04 доступна только в качестве версии для разработки (см. Дистрибутивы MongoDB).

Я только что установил его, выполнив следующие действия:

Добавьте соответствующую подпись:

    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 4B7C549A058F8B6B  
Добавьте поддерживаемую версию:

echo "deb [arch=amd64] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/development multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
Обновлять:

    sudo apt update
Установить:

sudo apt install mongodb-org-unstable
Если вы получили сообщение «Ошибка GPG», повторите шаг 1 с ключом, который указан в сообщении об ошибке. Вы могли бы установить через

sudo apt install mongodb
но, согласно MongoDB, это не поддерживается и, скорее всего, не установит последнюю версию.

 19.07.2018 13:10
Попробуй, я успешно это выяснил

$ sudo apt-get install -y mongodb
 01.09.2018 13:33
просто хочу быть здесь. Я старший технический писатель по серверной документации MongoDB. Этот пост - один из немногих, в котором говорится «установить MongoDB на Ubuntu 18.04», и здесь есть несколько комментариев, относящихся к пакету mongodb для установки. Неофициальный пакет mongodb, предоставляемый Ubuntu, не поддерживается MongoDB. Вы всегда должны использовать официальные пакеты MongoDB mongodb-org. Кроме того, из небольшого личного тестирования похоже, что установка mongodb вызовет проблемы, если вы попытаетесь установить mongodb-org, поэтому это просто добавило проблем.

Несколько раз я сталкивался с этой проблемой при локальном тестировании, при попытке установить один из подпакетов (например, mongodb-org-server) обычно выявлялась фактическая ошибка (т.е. отсутствовал libcurl3, который был удален в 18.04 как установленная по умолчанию библиотека). Эти проблемы могут быть более распространенными при тестировании сборок для разработки (на момент написания это серия для разработчиков 4.2).

Чтобы проверить, какой пакет вы установили в своей локальной системе, выполните следующее:

sudo apt list --installed | grep mongo
Это был мой результат после того, как я установил mongodb, а затем попробовал mongodb-org:

mongo-tools/bionic,now 3.6.3-0ubuntu1 amd64 [installed,auto-removable]
mongodb-org/bionic,now 4.0.5 amd64 [installed]
mongodb-org-shell/bionic,now 4.0.5 amd64 [installed,automatic]
mongodb-server-core/bionic,now 1:3.6.3-0ubuntu1 amd64 [installed,auto-removable]
Как видите, у меня смесь двух пакетов (и куча ошибок dkpg). В итоге я использовал смесь apt remove, apt autoremove и apt purge для исправления системы.

 03.01.2019 16:41
Если вам нужно установить двоичный файл mongodb (вручную) на ваш Ubuntu 18.04 LTS (Bionic). Вам нужно скачать файл mongodb .tgz с этого ссылка на сайт.

1) Загрузите его в папку ~ / Downloads и переместите в домашний каталог, набрав mv Downloads/mongodb-linux-x86_64-ubuntu1804-4.0.4.tgz ~/.

2) Затем удалите его, набрав tar -zxvf mongodb-linux-x86_64-ubuntu1804-4.0.4.tgz, поместите его сюда (Домашний каталог / home /). Не убирайте его отсюда.

3) Затем создайте каталог в расположении / data / db и дайте разрешение на запись в этот каталог.

sudo mkdir -p /data/db

sudo chmod -R 777 /data/db
4) Теперь это сложная область. Убедитесь, что вы находитесь в каталоге hme, набрав pwd (текущий рабочий каталог)

pwd 
это покажет

/home/<your user name>
Затем введите

ls -al

Эта команда отобразит все скрытые файлы в домашнем каталоге и выполнит поиск

~/.bashrc

5) Отредактируйте файл .bashrc и напишите

export PATH=mongodb-linux-x86_64-ubuntu1804-4.0.4/bin:$PATH
и сохраните тип файла source ./bashrc

Затем введите echo $PATH на терминале, он отобразит ~/mongodb-linux-x86_64-ubuntu1804-4.0.4/bin:/home/xenon/.nvm/versions/node/v10.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin.

6) Теперь на терминале типа mongo --nodb он покажет MongoDB shell version v4.0.4

Здесь все готово, продолжайте и наслаждайтесь установкой mongodb. Эта установка немного сложна, но с помощью этого метода вы можете легко контролировать версию mongodb и использовать ее в соответствии с вашими потребностями. 

7) Затем запускаем mongod

>sudo mkdir -p /var/log && sudo chmod -R 777 /var/log
>mongod --port 27017 --dbpath /data/db --logpath /var/log/local.log --fork
>mongo --port 27017
 19.01.2019 17:13
запустите sudo apt autoremove и переустановите mongodb.

 23.01.2019 17:47
Самый простой способ установить MongoDB и использовать команду mongod в ubuntu 18.04.
1. Обновите список пакетов.
    $ sudo apt update
2. Установите MongoDB.
    $ sudo apt install -y mongodb
3. Проверьте статус услуги.
    $ sudo systemctl status mongodb
3а. Тебе следует увидеть

    ● mongodb.service - An object/document-oriented database
      Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor 
      preset:enabled)
      Active: active (running) since Sat 2019-03-11 10:45:01 UTC; 4min 13s ago
      Docs: man:mongod(1)
      Main PID: 2312 (mongod)
      Tasks: 23 (limit: 1153)
      CGroup: /system.slice/mongodb.service
            └─2312 /usr/bin/mongod --unixSocketPrefix=/run/mongodb --config
      /etc/mongodb.conf
4. Чтобы разрешить доступ к MongoDB на его port 27017 по умолчанию.
     $ sudo ufw allow 27017
5. Проверить статус
     $ sudo ufw status
5а. Тебе следует увидеть

     Status: active
     To                         Action      From
     --                         ------      ----
     27017                      ALLOW       Anywhere
     27017 (v6)                 ALLOW       Anywhere (v6)
5б. Если он вернет inactive

     $ sudo ufw enable

     Output:
     Firewall is active and enabled on system startup.
6. Проверьте каталог /, чтобы узнать, существует ли каталог data/db, если нет:
     $ sudo mkdir -p /data/db
7. Чтобы сначала запустить mongod, вам нужно остановить mongodb:
     $ sudo systemctl stop mongodb
8. Наконец, вы можете запустить mongod:
     $ sudo mongod
Надеюсь, я помог ?
 15.03.2019 14:02
cd /etc/apt/sources.list.d

удалить файлы, связанные с mongodb

sudo apt update

Это решило проблему для меня.

 13.07.2019 02:34
Основываясь на этом отличном ответе: https://stackoverflow.com/a/51421152/659354

И эта страница: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Команды, которые я использовал для установки MongoDB 4.2

sudo apt-get purge mongo* - Примечание: mongo для удаления клиента, а также сервера.

sudo apt-get install mongodb-org - команда установки Примечание: запускается после того, как исходный код Mongodb.org был добавлен в список источников Apt-get.

 16.08.2019 04:14
У меня была такая же проблема, и для меня решением была чистка, но с (*). Очистите все, поэтому я сделал это:

sudo apt-get purge mongo-tools*
sudo apt-get purge mongodb*
Затем я следую инструкциям из документации. (Фактическая версия - 4.2.2), а установка производилась в Ubuntu 18.04. (URL: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt-get update

sudo apt-get install -y mongodb-org
С этими четырьмя шагами из документации я, наконец, устанавливаю версию сообщества mongodb на Ubuntu. Моя проблема заключалась в 3 файлах, которые невозможно обработать.

mongodb-org-server
mongodb-org-mongos
mongodb-org-tools
Надеюсь, это кому-то поможет

 05.01.2020 00:56
Просто запустите команду sudo apt установить mongodb, она установит mongodb, потому что mongodb теперь является частью репозитория ubuntu. После установки запустите команду запуск службы sudo mongodb, чтобы запустить сервер mongodb. Затем, если вы запустите команду монго, она предоставит вам помощника оболочки. Чтобы увидеть существующую базу данных, используйте команду показать БД. После успешной установки вы обнаружите, что существующие имена баз данных - админ, конфиг, локальный. Используйте команду db, чтобы увидеть, какая база данных в настоящее время работает на сервере, это будет база данных с именем тест или что-то. Чтобы добавить коллекцию (таблицы в базе данных SQL), просто используйте команду вставки с информацией исходного документа (строки в базе данных SQL) db.data.insert ({"имя пользователя": "Брэд Питт"})
В предыдущей команде данные - это имя моей коллекции. Теперь, чтобы увидеть все документы в сборе данных, просто используйте команду db.data.find (); Другие команды: sudo service mongod status, sudo service mongodb stop, sudo service mongod restart, sudo service mongod stop.

Для получения дополнительной информации вы можете посетить https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

; 



 18.04.2020 12:41
Для Ubuntu версии 18.04 LTS лучше установить MongoDB вручную.

Мне нужно выполнить следующие шаги, чтобы запустить его на моем Ubuntu 18.04:

Следуйте инструкциям по установке вручную из следующего руководства mongo DB https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/
Загрузите .tgz со следующими конфигурациями Скачать MongoDB
Обратите внимание: когда вы устанавливаете MongoDB 3.6 или более поздней версии, у него есть библиотека Curl версии "libcurl4", которая имеет некоторые проблемы совместимости с ubuntu 18.04.
Из-за этого при попытке выполнить команду "mongod" вы получите следующий результат:
mongod: /usr/lib/x86_64-linux-gnu/libcurl.so.4: version `CURL_OPENSSL_3' not found (required by mongod)

Чтобы решить эту проблему, вам необходимо удалить зависимую библиотеку libcurl4 с помощью следующей команды

sudo apt-get удалить libcurl4

Затем необходимо установить более низкую версию библиотеки curl (например, "libcurl3"), как ожидает Монго в версии ubuntu "18.04".

sudo apt-get установить libcurl3

Вам может потребоваться использовать команду "sudo" для разделения каталогов данных и журналов с установкой, если она не удалась с помощью ручных шагов.

sudo mongod --dbpath / var / lib / mongo --logpath /var/log/mongodb/mongod.log --fork

теперь вы можете запустить команду «mongo», чтобы увидеть запущенную оболочку mongo.

Меня устраивает.

 25.04.2020 22:45
Удалите все пакеты Mongo.

$ sudo apt-get purge mongodb-org*
Проверьте, удалены ли связанные каталоги

$ sudo rm -r /var/log/mongodb
$ sudo rm -r /var/lib/mongodb
Еще раз проверьте автоматическое удаление любых оставшихся пакетов mongo

$ sudo apt-get autoremove
Настройте свой каталог

$ sudo dpkg --configure -a
Принудительно установить все необходимое

$ sudo apt-get install -f
Установить с официального сайта: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Наконец, перезапустите Ubuntu и проверьте статус сервера Mogodb, как вы это делали ранее.

 06.10.2020 21:14
Мне на Pop_OS помогло Linux 20.04 LTS:

$ sudo apt-get purge mongodb*
Затем создайте файл /etc/apt/sources.list.d/mongodb-org-4.4.list для Ubuntu 18.04 (Bionic) с помощью этой команды:

$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
вместо Ubuntu 20.04 (Focal)

После этого установите mongodb-org:

$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
И запустите службу mongodb:

$ sudo systemctl start mongod

Ошибка «Нет режима записи с именем «большинство» в конфигурации набора реплик»
Вопросы
MONGODB
Ошибка «Нет режима записи с именем «большинство» в конфигурации набора реплик»
Я пытаюсь вставить объект в mongodb через запрос POST. Объект, который я отправляю, успешно вставляется в базу данных, однако я получаю сообщение об ошибке, упомянутое выше.

Пакет, который я использую для mongo db:

https://github.com/mongodb/mongo-go-driver

Строка подключения

mongodb+srv://пользователь:пароль@bookcluster.pxcqs.mongodb.net/DBname?retryWrites=true&w=majority`

Как я настроил соединение с базой данных:

var DbConn *mongo.Client //*sql.DB //*mongo.Client

func SetupDB(conn_str string) {
    var err error
    DbConn, err = mongo.NewClient(options.Client().ApplyURI(conn_str))
    if err != nil {
        log.Fatal(err)
    }
    ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
    err = DbConn.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }
}
Мой объект:

package book

import "go.mongodb.org/mongo-driver/bson/primitive"

type Book struct {
    Id        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
    Title     string             `json:"title" bson:"title"`
    Author    string             `json:"author" bson:"author"`
    Year      int                `json:"year" bson:"year"`
    ShortDesc string             `json:"shortDesc" bson:"shortDesc"`
    Genre     string             `json:"genre" bson:"genre"`
}
Вот как я отправляю запрос внутри insertBook() (где b имеет тип Book):

ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
    defer cancel()

    result, err := database.DbConn.Database(dbName).Collection(collectionName).InsertOne(ctx, b)
Полный текст ошибки:

несколько ошибок записи: [{ошибки записи: []}, {(UnknownReplWriteConcern) Режим отсутствия проблем с записью с именем «большинство» найдено в конфигурации набора реплик}]

Моя просьба в Почтальоне

Я не уверен, что мне где-то не хватает какой-то настройки конфигурации - я только начал с mongoDB Я попытался следовать примеру, приведенному в этих уроках: 3 , 4, и они, кажется, ничего не упоминают о «заботе о написании» и «большинстве». Также попытался просмотреть документацию и погуглить ошибку, но не нашел ничего полезного.

 15.12.2020 13:28
10
11
20 037
14
Данный вопрос помечен как решенный
 Ответы 14
 Ответ принят как подходящий
"mongoURI" : "mongodb+srv://${ db user name }:${ db password }@cluster0.mde0j.mongodb.net/cluster0?retryWrites=true&w=majority "
Я получаю ту же ошибку с этим когда я пытаюсь вставить объект в mongodb через запрос POST. Объект, который я отправляю, успешно вставляется в базу данных, однако я получаю сообщение об ошибке errmsg: «Нет режима записи с именем« большинство »в конфигурации набора реплик».

его простая ошибка, вам нужно удалить часть &w=majority в конце, и она будет решена

 30.12.2020 14:45
Я получил ту же ошибку с дополнительным пробелом в конце строки подключения. В моем случае я удалил пробел, и все было хорошо.

 26.04.2021 23:19
mongodb+srv://user:password@bookcluster.pxcqs.mongodb.net/DBname?retryWrites=true&w=majority`
Удалите этот ( ` ) в конце URI, потому что это вызовет ошибку «Нет режима записи с именем «большинство» в конфигурации набора реплик».

 20.09.2021 07:56
Проблема не в &w=majority. Если ваша строка подключения находится внутри файла .env, напишите ее, как показано ниже, без одинарных или двойных кавычек и без точки с запятой в конце.

URI=mongodb+srv://user:password@bookcluster.pxcqs.mongodb.net/DBname?retryWrites=true&w=majority
 06.01.2022 16:46
в моем случае я удалил / в конце uri, и это сработало.

 03.08.2022 12:20
В моем случае я также столкнулся с этой же ошибкой. Мое решение для этого, когда я удалил косую черту из последнего (этот --> большинство/), моя проблема была решена.

Ошибка перед строкой: - mongodb+srv://deepu:IvZ98NCXTOV7ro3M@cluster0.m13scys.mongodb.net/employeeDB?retryWrites=true&w=majority/

Решенная строка: - mongodb+srv://deepu:IvZ98NCXTOV7ro3M@cluster0.m13scys.mongodb.net/employeeDB?retryWrites=true&w=majority

 22.09.2022 08:02
Столкнулся с той же ошибкой со строкой подключения --->

вместо этого используйте строку подключения как «mongodb+srv://deepu:IvZ98NCXTOV7ro3M@cluster0.m13scys.mongodb.net/(databasename)»

Удалите все, что находится между .net/ и именем базы данных.

Надеюсь, это решит ваш вопрос!

 24.09.2022 21:43
Это может быть из-за использования пробела или точки с запятой в конце URL-адреса, который вы определили в файле .env. Поэтому не используйте кавычки, двойные кавычки, точки с запятой или пробелы. MONGO_URI = mongodb+srv://Hussain_Siddiqui:Hsrusher8$$@chatapp.aw5bzak.mongodb.net/?retryWrites=true&w=majority Тем не менее это предупреждение удаляет &w=majority из URL-адреса

 09.10.2022 13:20
Попробуйте удалить все после mongodb.net/{databaseName}?retryWrites=true&w=majority и сделать его чистым и аккуратным, как показано ниже.

mongoose.connect("mongodb+srv://{nameOfAdmin}:{password}@atlascluster.ux104bi.mongodb.net/{databaseName}", {useNewUrlParser: true, useUnifiedTopology: true})
 22.10.2022 22:50
Удаление точки с запятой после URI из файла .env спасло меня.

Ошибка: mongodb+srv://имя пользователя:пароль@cluster0.hcyv7.mongodb.net/?retryWrites=true&w=majority;

Решено: mongodb+srv://имя пользователя:пароль@cluster0.hcyv7.mongodb.net/?retryWrites=true&w=большинство

 16.11.2022 21:50
Я решил проблему, удалив &w=majority. Потом я пошел немного вздремнуть. Я снова написал &w=большинство в uri. Это сработало очень хорошо.

Что происходит ! Я не знаю. Юзи получилось!

 08.12.2022 02:11
Я тоже столкнулся с той же проблемой. Удаление ; в конце строки подключения решил проблему для меня.

 12.12.2022 06:45
Посмотрите в конце URL-адреса, возможно, там есть space или запятая ;, которые являются недопустимыми символами в .env.

У меня была такая же ошибка, и причиной была запятая:

DB_URI = mongodb+srv://user:password@cluster0.8fir3uv.mongodb.net/db?retryWrites=true&w=majority,
 19.01.2023 17:57
удалить двойные кавычки в конце URL-адреса mongodb



Не удалось запустить службу MongoDB Server (MongoDB). Убедитесь, что у вас достаточно прав для запуска системных служб
Вопросы
MONGODB
Не удалось запустить службу MongoDB Server (MongoDB). Убедитесь, что у вас достаточно прав для запуска системных служб
Когда я пытаюсь установить версию сообщества MongoDB в Windows 8.1, я получаю сообщение об ошибке ниже.

Не удалось запустить службу MongoDB Server (MongoDB). Убедитесь, что у вас достаточно прав для запуска системных служб

Я попробовал большинство доступных решений из Интернета, но ни одно из них не сработало.

 18.10.2018 17:41
8
7
14 177
15
 Ответы 15
В моем случае я менял путь, в котором хранились папки данных и журналов, и установщик не был достаточно умен, чтобы автоматически создавать целевые пути. Таким образом, после создания каждого набора папок вручную и перезапуска установки версия 4.0.10 установилась без ошибок.

 03.06.2019 18:30
Некоторое время я боролся с той же проблемой, пока не понял, что моя проблема заключается в месте установки. Скорее всего, вы столкнетесь с этой ошибкой, если установите MongoDb в эту папку: C:\MongoDB. Я решил это, установив в папку по умолчанию, которая является C:\Program Files\MongoDB\Server\4.0\bin

 26.07.2019 22:19
Я временно решил эту проблему, перейдя на предыдущую версию MongoDB: 3.6.13.

 25.08.2019 20:07
Я решил эту проблему, установив Microsoft Visual C++ Redistributable 2019.

Вы можете скачать его по ссылке ниже.

https://www.itechtics.com/microsoft-visual-c-redistributable-versions-direct-download-links/

 18.10.2019 20:21
У меня такая же проблема!

Возможно, вы пытаетесь установить MongoDB в пользовательскую папку (например, C: \ mongodb).

Не делай этого!

Позвольте программе установки установить mongoDB по пути к программе по умолчанию (Usual path -> C:\Program Files\MongoDB\Server\4.2).

После того, как вы установили его, вы можете скопировать содержимое этой папки и вставить его в нужную настраиваемую папку. (В этом примере -> C:\mongodb)

После того, как вы это сделаете, вы больше не должны получать ошибок при запуске mongo из командной оболочки.

 22.10.2019 15:02
Послушайте, это правильное решение. В windows откройте служебную программу и посмотрите свойства службы mongodb (для меня это "E: \ mongodb \ bin \ mongod.exe --config" E: \ mongodb \ bin \ mongod.cfg "- Service "), скопируйте этот атрибут в cmd и выполните его вручную. Вы обнаружите, что он сообщает об ошибке. Сообщение об ошибке заключается в том, что "mp" не распознается. Так что нам нужно только закомментировать "mp" в файле mongod.cfg. Если вы не выберете выборочный путь установки, в mongod.cfg нет «mp», что является странной ошибкой!

 04.11.2019 16:40
Перейдите к «C: \ mongodb \ bin» и откройте «mongod.cfg», затем выполните поиск: #mp

Просто удалите из файла текст: #mp (вы найдете: #mp там, где заканчивается содержимое файла).

Теперь запустите: net start mongodb. Теперь это должно сработать.

 03.02.2020 12:14
Я перезагрузил компьютер и при установке выбрал путь по умолчанию:

C:\Program Files\MongoDB\Server\4.2\bin
и он успешно установлен.

 17.02.2020 14:57
Перейдите в папку bin mongodb и откройте там командную строку или git bash. Введите команду: ./mongod --repair

Это запустится, и вы узнаете точную ошибку. В моем случае: MongoDb извлекает папку db в F: \ data \ db, но моя настройка - F: \ mongodb \ data \ db

Ошибка, которую я получил при установке mongodb в пользовательскую папку Итак, я изменил путь к db с помощью команды:

./mongod --dbpath F: \ mongodb \ data \ db

Если указанная выше команда не сработала, используйте двойную обратную косую черту.

./mongod --dbpath F: \\ mongodb \\ data \\ db

И БРАВО !!!

 15.04.2020 08:30
Десять часов работы, ничего из вышеперечисленного у меня не работает, кроме следующего:

создайте свой собственный каталог, например C: \ mongodb
предоставьте разрешение на полный доступ, щелкнув его правой кнопкой мыши, характеристики в виджете безопасности для всех групп и пользователей.
внутри сделайте каталог данные и внутри него каталог db
установите MongoDB с помощью установщика msi, выберите обычай и выберите созданный каталог C: \ mongodb в качестве пути установки.
Когда при установке вы получите указанную ошибку, выберите Игнорировать.
Запустите командную строку на C:\mongodb\bin от имени администратора и введите mongod. Вы увидите, что это было прервано.
Удалите текущую службу MongoDB, выполнив mongod --remove.
Выполните следующее: mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --install
Запустите net start MongoDB, чтобы убедиться, что он работает правильно.
Наслаждаться
 21.04.2020 12:50
Просто откройте CMD в режиме администратора.
измените путь с помощью cd. /path к папке, в которую вы загрузили установку MongoDB.
откройте настройку, введя ее имя в cmd.
Устанавливайте программу как обычно в любую папку! Ваше здоровье...
 06.05.2020 15:48
если вы устанавливаете в младшую версию Windows-10 то вам необходимо установить этот файл перед установкой MongoDB 4.2.6.

установить обновление для Windows 8 для систем на базе x64 (KB2999226) из https://www.microsoft.com/en-us/download/details.aspx?id=49082
после этой установки

Установите MongoDB
Установить успешно

 07.05.2020 11:05
Я боролся за то же самое, наконец, целый день придумал это решение. У меня окно 8.1 ...



когда этот экран выскакивает! нажмите здесь "игнорировать" (он закроется)
откройте «Просмотр дополнительных настроек системы» (найдите его в меню победы).
На вкладке «Расширение» внизу нажмите «Переменные среды», откройте это.
Теперь найдите переменную пути в системной переменной и другую, выберите переменную пути и нажмите `` Изменить ''.
Теперь в конце переменной добавьте следующее ...
...initialText;path where path is the where your MongoDB was installed with the bin folder in the same. By default its C:\Program Files\MongoDB\Server\4.2(your version)\bin

редактировать, как это initialText;C:\Program Files\MongoDB\Server\4.2\bin, нажмите ОК, закрыть.

Попробуйте запустить mongod в командной строке, он покажет ошибку и закроется. Ошибка скажет создать папку C:\data\db вручную. Сделай это.

Все готово, попробуйте снова запустить mongod.

Пожалуйста!

 12.07.2020 19:42
У меня сработала установка mongodb из командной строки / интерпретатора Windows (cmd.exe) с помощью msiexec.exe.

msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-windows-x86_64-4.4.1-signed.msi ^
            ADDLOCAL = "ServerService,Client" ^
            SHOULD_INSTALL_COMPASS = "0"
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/#procedure

 11.11.2020 12:55
У меня была такая же проблема, поэтому я создал репо C: \ mongodb, когда я сделал установку, снова появилось то же окно, и я просто нажал «игнорировать», я не знаю, как, но у меня это сработало, все установлено :).

Как исправить «Ошибка: querySrv EREFUSED» при подключении к MongoDB Atlas?
Вопросы
NODE.JS
Как исправить «Ошибка: querySrv EREFUSED» при подключении к MongoDB Atlas?
Я новичок в MongoDB 4.0.6 и пытался внедрить его на свой веб-сайт с помощью Node/Express.js, но когда я пытаюсь подключиться к mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@main-03xkr.mongodb.net/main, я получаю эту ошибку:

{ Error: querySrv EREFUSED _mongodb._tcp.main-03xkr.mongodb.net at QueryReqWrap.onresolve [as oncomplete] (dns.js:199:19) errno: 'EREFUSED', code: 'EREFUSED', syscall: 'querySrv', hostname: '_mongodb._tcp.main-03xkr.mongodb.net' }

Я пытался подключиться к mongodb://localhost:27017/main, но этот делает, похоже, работает.

Вот соответствующий код:

require('dotenv').config();
const mongoose = require('mongoose');

// Database
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@main-03xkr.mongodb.net/main`;
const localURI = 'mongodb://localhost:27017/main';

var Project = require('./models/project');

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => console.info('Successfully connected to MongoDB'));
db.on('error', (e) => console.info(e));

// Routes
app.get('/', (req, res) => {
  Project.find({}, (e, projects) => {
    if (e) console.info(e);

    res.render('home.ejs', {
      projects: projects
    });
  });
});

Так кто-нибудь знает, как исправить эту ошибку и, возможно, объяснить, что здесь происходит?

 03.04.2019 17:43
34
2
56 532
15
Данный вопрос помечен как решенный
 Ответы 15
У вас есть undefined в строке подключения. Не знаю, опечатка это или нет. Но попробуй изменить

const uri = `mongodb+srv://undefined:${process.env.MONGOPASS}@main-03xkr.mongodb.net/main`;
к

const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@main-03xkr.mongodb.net/main`;
Я использую MongoAtlas для проекта, и эта строка (без неопределенного пользователя) выглядит правильно.

 03.04.2019 19:07
 Ответ принят как подходящий
Если вы столкнулись с этой ошибкой, попробуйте использовать старую строку подключения для Node.js 2.2.12 или более поздней версии:

mongodb://<username>:<password>@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true
Согласно MongoDB, SRV, возможно, не работает из-за Mongoose.

 11.04.2019 20:28
У меня была такая же ошибка, когда я подключался к Node версии 3.0 or later, и я решил ее, перейдя на 2.2.12 or later версию:

downgrade

 01.09.2019 21:54
В нашем случае антивирус/брандмауэр блокирует,

Попробуйте отключить антивирус/брандмауэр и проверьте еще раз. надеюсь, это сработает.

 16.09.2019 06:19
Передайте опцию { useNewUrlParser: true, useUnifiedTopology: true } конструктору MongoClient

const uri = "mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@main-03xkr.mongodb.net/main"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(error => console.info(error));
 18.04.2020 19:26
MongoClient.connect(
  "mongodb://USER:PASSWORT@mflix-shard-00-00-r5yfb.mongodb.net/test?ssl=true&replicaSet=mflix-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await MoviesDAO.injectDB(client)
    await UsersDAO.injectDB(client)
    await CommentsDAO.injectDB(client)
    app.listen(port, () => {
      console.info(`listening on port ${port}`)
    })
  })
Возможно, может работать с MongoClient (не Mongoose)

 20.04.2020 18:59
Error: querySrv ESERVFAIL _mongodb._tcp.databasename-zcbag.mongodb.net
    at QueryReqWrap.onresolve [as oncomplete] (dns.js:202:19) {
  errno: 'ESERVFAIL',
  code: 'ESERVFAIL',
  syscall: 'querySrv',
  hostname: '_mongodb._tcp.databasename-zcbag.mongodb.net'
}
Если приведенный выше код является вашим выходом, то в вашем коде нет ошибки. Вы должны проверить подключение к сети. Возможно, вам придется переключить свою сеть с телефонной сети на другую или наоборот.

 15.07.2020 05:03
Эта ошибка иногда возникает, когда вы используете MongoDB Atlas и потеряли подключение к Интернету. Вы не сможете получить доступ к своей базе данных.

 24.07.2020 06:32
Обязательно измените версию узла на 2.2.12:



И добавьте IP-адрес:



 16.09.2020 04:49
В моем случае эта ошибка происходила, когда DNS-конфигурация в моем маршрутизаторе TP-Link отсутствовал.

Я установил на него прошивку OpenWRT и забыл настроить параметры DNS.

Я смог открыть YouTube или любой другой веб-сайт, потому что это не мой основной маршрутизатор, но не смог подключиться к базе данных.

Это была проблема с интернетом, как сказал @Камеш Кумар Сингх в своем ответе.

Я думаю, что это не обычный ответ на этот вопрос, но может кому-то помочь.

 21.09.2020 17:30
Эта ошибка возникает, если вы не можете подключиться к базе данных mongoDB Atlas. Ваш сервер работает успешно, но вы получаете эту ошибку при подключении к базе данных. Убедитесь, что ваше интернет-соединение хорошее, и повторите попытку, вы не увидите эту ошибку.

 17.10.2020 19:38
Сценарий "Не в корневой папке":
Create a .env file in the root directory of your project. https://github.com/motdotla/dotenv



Одним из сценариев этой ошибки является создание файла дотенв.env --НЕТ-- в root folder (например, под /src).

Чем этот код:

const url = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_USER_PASSWORD
}@${process.env.DB_CLUSTER}.mongodb.net`;

console.info(url)
выход:

mongodb+srv://undefined:undefined@undefined.mongodb.net
Итак, URL-соединение "undefined":

const client = new MongoClient(url);
Бросьте 3 предупреждения:

(node:27240) UnhandledPromiseRejectionWarning: Error: querySrv ENOTFOUND _mongodb._tcp.undefined.mongodb.net at QueryReqWrap.onresolve [as oncomplete] (dns.js:207:19)

(node:27240) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag --unhandled-rejections=strict (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)

(node:27240) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

Еще один "близкий" сценарий:.env в корневой папке, но файл пустой:



Решение
первый шаг для решения этой проблемы заключается в console.info(url) и проверке, возвращает ли process.env правильный Строка подключения.

Связанный:

dotenv github readme: https://github.com/motdotla/dotenv#readme
Подключиться к базе данных MongoDB с помощью Node.js :https://developer.mongodb.com/quickstart/node-connect-mongodb/
 03.03.2021 19:04
В моем случае это в основном проблема с DNS на Mac, чтобы решить ее, просто добавьте DNS-сервер Google в разделе DNS в настройках Mac Book Pro:

8.8.8.8
4.4.4.4


 18.05.2021 20:09
В моем случае проблема возникла из-за того, что MongoDB приостановила мой кластер из-за более чем 4 месяцев бездействия. После того, как я вошел в свою учетную запись и возобновил работу кластера, проблема была немедленно решена.

 25.07.2021 14:27
Я решил свою проблему, зайдя в MongoDB -> войти в систему -> базы данных -> подключиться -> подключить ваше приложение (среднее) -> скопировать код -> вставить код в код mongooseDB в моем файле .JS:

const mongoose = require('mongoose');
require('dotenv/config');

mongoose
  .connect(process.env.THE_MONGO_DB_URL_GOES_HERE_IN_DOTENV_FILE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.info("Database connected!"))
  .catch(err => console.info(err));

  const PostSchema = mongoose.Schema({
    email: String,
    password: String
  }, {strict: false});

  const DataEntry = mongoose.model('n26-users-collection', PostSchema); 

  module.exports = DataEntry; 

Что такое TransientTransactionError в Mongoose (или MongoDB)?
Вопросы
JAVASCRIPT
Что такое TransientTransactionError в Mongoose (или MongoDB)?
У меня есть server.js и db.js. Файл db.js взаимодействует с моей базой данных с помощью Mongoose, и я использую server.js для вызова функций из db.js:

var mongoose = require('mongoose');
mongoose.connect('', { useNewUrlParser: true })
var Schema = mongoose.Schema;

module.exports = function () {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    return db.once('open', function() {
        console.info("Connected to DB")
        var postschema = new Schema({
            title: String,
            intro: String,
            body: String,
            author: String,
            timestamp: { type: Date, default: Date.now }
        });

        var post = mongoose.model('post', postschema);

        return {
            newPost(title, intro, body, author) {
                var newpost = new post({
                    title: title,
                    intro: intro,
                    body: body,
                    author: author
                })
            },
            getPostsAll() {
                post.find({}, function (err, res) {
                    return (`Error:${err} Posts:${res}`)
                })
            }
        }
    })
}
И мой server.js вызывает три функции из db.js:

var DB = require('./db.js')
var db = DB()
db.getPostsAll()
db.newPost()
Я не понимаю, почему я получаю эту ошибку:

connection error: { MongoNetworkError: connection 4 to black-test-shard-00-01-ewyaf.mongodb.net:27017 closed
at TLSSocket.<anonymous> (E:\HTML\black-box\node_modules\mongodb-core\lib\connection\connection.js:276:9)
at Object.onceWrapper (events.js:272:13)
at TLSSocket.emit (events.js:185:15)
at _handle.close (net.js:541:12)
at TCP.done [as _onclose] (_tls_wrap.js:379:7)
  name: 'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]: {} }
Что я делаю не так? Я нашел статья, но ничего не могу сделать.

 03.09.2018 18:32
34
2
41 457
16
Данный вопрос помечен как решенный
 Ответы 16
 Ответ принят как подходящий
What is a TransientTransactionError

TransientTransactionError - это транзакционная ошибка, которая классифицируется как временная, и при повторной попытке май будет успешной. Более того, конфликт записи TransientTransactionError возникает перед фиксацией, когда не была произведена блокировка записи и транзакция (новые данные) не отражена в моментальном снимке транзакции (предыдущие данные). В результате эти ошибки полностью безопасны для повторной попытки, пока не произойдет это успешная фиксация.

Транзакции, которые повторяют попытку в этом сценарии, повторяются с начала транзакции.

Иметь ввиду Эта метка ошибки отличается от ошибок фиксации, которые происходят, когда блокировка была взята, но транзакция не может завершить свое фиксацию. Метка ошибки для этого - UnknownTransactionCommitResult. Ссылка на это примечательна из-за разницы в понимании того, где в вашем приложении возникает ошибка, и какова может быть основная причина и как приложение может и или будет реагировать из-за различных типов ошибок.

Если вы используете Драйверы, поддерживаемые MongoDB, есть две возможные причины, по которым код получает эту ошибку:

Любая ошибка команды базы данных, которая включает метку ошибки «TransientTransactionError» в поле «errorLabels».
Любая сетевая ошибка, обнаруженная при выполнении любой команды, кроме commitTransaction в транзакции.
Пример кода в Транзакции MongoDB: повторная транзакция показывает, как обрабатывать TransientTransactionError.

Если сообщение об ошибке - MongoNetworkError, это означает, что временная ошибка транзакции связана с сетевым подключением между клиентом и сервером. Это может быть либо одноразовый сетевой сбой, который можно повторить, либо отсутствие доступа к сети, требующего настройки сети. Если ошибка возникает при первой попытке клиента получить доступ к серверу, вероятно, требуется конфигурация сети. Если сервер находится в MongoDB Atlas, см. Настроить записи белого списка.

 18.10.2018 07:51
У меня была аналогичная проблема ... Весь день я мог подключиться через мангуста. Затем я начал получать ошибку TransientTransactionError. Я мог подключиться к mongoDB через оболочку, поэтому я знал, что сервер работает должным образом.

IPv6 / локальный хост. Мой IP переключился с IPv4 на IPv6. Я решил проблему, отключив IPv6 и получив обычный IPv4 IP.

ИЗМЕНИТЬ - кажется, я могу надежно воссоздать / создать эту проблему, подключившись к «localhost», в то время как моя сетевая карта настроена с IPv6 IP. Изменение localhost-> 127.0.0.1, похоже, решает проблему.

 13.12.2018 23:34
У меня была такая же проблема / ошибка, хотя и на компьютере с Windows. Хотя я думал, что запустил службу mongodb, я не видел, чтобы она работала в службах Windows. Итак, я вручную запустил службу mongoDB внутри служб, а затем ошибка исчезла. Надеюсь это поможет!

 24.01.2019 16:49
Я столкнулся с этой ошибкой при запуске сценария populatedb.js в учебнике MDN для Express / NodeJS.

Сценарий искал соединение с базой данных, начиная с mongodb://, однако моя строка подключения от mongo началась с mongodb+srv://.

Вместо этого я отредактировал сценарий, чтобы проверить этот синтаксис, что устранило ошибку.

Я надеюсь, что это помогает кому-то.

 18.02.2019 05:49
я имел

  'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]:
Я добавил свой текущий IP-адрес в белый список после «главная страница> раздел безопасности> доступ к сети> добавить IP» на веб-сайте MongoDB.

Надеюсь, это поможет.

 02.03.2019 08:03
У меня возникла эта проблема при попытке подключить мое приложение Heroku к базе данных MongoDB Atlas.

Если вы сделаете на своем терминале

heroku logs --tail

Вы могли бы увидеть

ERROR: { MongoNetworkError: 
connection 4 to cluster0-shard-40-01-qnwp8.mongodb.net:27017 closed
name: 'MongoNetworkError',
errorLabels: [ 'TransientTransactionError' ],
[Symbol(mongoErrorContextSymbol)]: {} }`
После внесения в белый список подключения к серверу в MongoDB Atlas ошибка подключения к базе данных была устранена.

 19.03.2019 17:26
Для меня временная ошибка транзакции возникала всякий раз, когда я переключался с моей сети Wi-Fi на точку доступа моего телефона. Если это произойдет и с вами, перейдите на веб-сайт MongoDB, где вы создали свою базу данных, и снова внесите в белый список свой текущий IP-адрес. Это решит вашу проблему.

 26.03.2019 07:43
Если вы используете MongoDB Atlas. Вам необходимо внести свой IP-адрес в белый список на консоли Atlas в настройках безопасности.

 10.04.2019 01:08
Если проблем с безопасностью нет, а вы просто делаете это для подключения: При настройке белого списка IP-адресов; формат должен быть 0.0.0.0/0, вы не столкнетесь с проблемой.



Более того, как вы сами ответили, мы можем добавить ip, к которому нам нужен доступ.

 16.04.2019 00:40
Вы можете прочитать об ошибке в Интернете, но решение этой проблемы: перейдите к атласу MongoDB и добавьте свой IP-адрес.

Перейти к: главная страница> раздел безопасности> доступ к сети> добавить IP

Эта проблема в основном возникает, когда архитектура не знает ваш собственный IP-адрес.

Кроме того, скопируйте и вставьте прямо в Google, чтобы получить прямое решение.

 26.05.2019 12:02
Если у вас все еще есть эта ошибка, другая причина в том, что вы забыли перезапустить сервер nodemon после изменения файла конфигурации. CTRL + C и начать заново, вот как я это решил.

 09.07.2019 23:21
Безопасность> Доступ к сети> Добавить IP-адрес> Добавить текущий IP-адрес компьютера. Решил мою проблему.

 21.08.2019 15:59
Использование mLab - Когда ваш кластер создан, вам нужно добавить пользователя базы данных (на вкладке «Пользователи») и не устанавливать флажок Make read-only. Как только я это сделал, ошибки исчезли. Я получал те же ошибки, что и выше. Пользователь базы данных может быть вашим логином и паролем.

 22.08.2019 16:45
Перейдите на панель управления MongoDb Atlas. Нажмите «Доступ к сети», нажмите «Добавить IP-адрес» и разрешите подключение с любого IP-адреса. Это должно решить вашу проблему.

MongooseError - время буферизации операции `users.findOne()` истекло через 10000 мс
Вопросы
NODE.JS
MongooseError - время буферизации операции `users.findOne()` истекло через 10000 мс
Мой код работал раньше, но я не знаю, почему он просто перестал работать и выдал мне эту ошибку:

MongooseError: Operation `users.findOne()` buffering timed out after 10000ms
    at Timeout.<anonymous> (/Users/nishant/Desktop/Yourfolio/backend/node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:184:20)
    at listOnTimeout (internal/timers.js:549:17)
    at processTimers (internal/timers.js:492:7)
Я пытаюсь аутентифицировать пользователя, войдя в систему с помощью JWT. Мой клиент работает нормально, но в моем бэкэнде я получаю эту ошибку. Мой внутренний код:

import neuron from '@yummyweb/neuronjs'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import emailValidator from 'email-validator'
import passwordValidator from 'password-validator'
import User from './models/User.js'
import Portfolio from './models/Portfolio.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from './utils/auth.js'

// Dot env
import dotenv from 'dotenv'
dotenv.config()

// Custom Password Specifications
// Username Schema
const usernameSchema = new passwordValidator()
usernameSchema.is().min(3).is().max(18).is().not().spaces()

// Password Schema
const passwordSchema = new passwordValidator()
passwordSchema.is().min(8).is().max(100).has().uppercase().has().lowercase().has().digits().is().not().spaces()

const PORT = process.env.PORT || 5000
const neuronjs = neuron()

// Middleware
neuronjs.use(bodyParser())
neuronjs.use(cors())

// Mongoose Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => console.info("MongoDB Connected"))

// API Routes
neuronjs.POST('/api/auth/signup', async (req, res) => {
    const { username, email, password, passwordConfirmation } = req.body

    // Validation: all fields are filled
    if (!username || !email || !password || !passwordConfirmation) {
        return res.status(400).json({ 
            "error": "true",
            "for": "fields",
            "msg": "fill all the fields"
        })
    }

    // Validation: username is valid
    if (usernameSchema.validate(username, { list: true }).length !== 0) {
        return res.status(400).json({ 
            "error": "true",
            "for": "username",
            "method_fail": usernameSchema.validate(username, { list: true }),
            "msg": "username is invalid"
        })
    }

    // Validation: email is valid
    if (!emailValidator.validate(email)) {
        return res.status(400).json({ 
            "error": "true",
            "for": "email",
            "msg": "email is invalid"
        })
    }

    // Validation: password is valid
    if (passwordSchema.validate(password, { list: true }).length !== 0) {
        return res.status(400).json({ 
            "error": "true",
            "for": "password",
            "method_fail": passwordSchema.validate(password, { list: true }),
            "msg": "password is invalid"
        })
    }

    // Validation: password is confirmed
    if (password !== passwordConfirmation) {
        return res.status(400).json({ 
            "error": "true",
            "for": "confirmation",
            "msg": "confirmation password needs to match password"
        })
    }

    // Check for existing user with email
    const existingUserWithEmail = await User.findOne({ email })
    if (existingUserWithEmail)
        return res.status(400).json({ "error": "true", "msg": "a user already exists with this email" })

    // Check for existing user with username
    const existingUserWithUsername = await User.findOne({ username })
    if (existingUserWithUsername)
        return res.status(400).json({ "error": "true", "msg": "a user already exists with this username" })

    // Generating salt
    const salt = bcrypt.genSalt()
    .then(salt => {
        // Hashing password with bcrypt
        const hashedPassword = bcrypt.hash(password, salt)
        .then(hash => {
            const newUser = new User({
                username,
                email,
                password: hash
            })
            // Saving the user
            newUser.save()
            .then(savedUser => {
                const newPortfolio = new Portfolio({
                    user: savedUser._id,
                    description: "",
                    socialMediaHandles: {
                        github: savedUser.username,
                        dribbble: savedUser.username,
                        twitter: savedUser.username,
                        devto: savedUser.username,
                        linkedin: savedUser.username,
                    }
                })

                // Save the portfolio
                newPortfolio.save()

                // Return the status code and the json
                return res.status(200).json({
                    savedUser
                })
            })
            .catch(err => console.info(err))
        })
        .catch(err => console.info(err))
    })
    .catch(err => console.info(err))
})

neuronjs.POST('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body

        // Validate
        if (!username || !password) {
            return res.status(400).json({ "error": "true", "msg": "fill all the fields", "for": "fields", })
        }

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ "error": "true", "msg": "no account is registered with this username", "for": "username" })
        }
    
        // Compare hashed password with plain text password
        const match = await bcrypt.compare(password, user.password)
    
        if (!match) {
            return res.status(400).json({ "error": "true", "msg": "invalid credentials", "for": "password" })
        }
    
        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        return res.json({ token, user: { "id": user._id, "username": user.username, "email": user.email } })
    }
    catch (e) {
        console.info(e)
    }
})

// Delete a user and their portfolio
neuronjs.DELETE("/api/users/delete", async (req, res) => {
    auth(req, res)
    const deletedPortfolio = await Portfolio.findOneAndDelete({ user: req.user })
    const deletedUser = await User.findByIdAndDelete(req.user)
    res.json(deletedUser)
})

neuronjs.POST("/api/isTokenValid", async (req, res) => {
    const token = req.headers["x-auth-token"]
    if (!token) return res.json(false)
    
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
    if (!verifiedToken) return res.json(false)
    
    const user = await User.findById(verifiedToken.id)
    if (!user) return res.json(false)

    return res.json(true)
})

// Getting one user
neuronjs.GET("/api/users/user", async (req, res) => {
    auth(req, res)
    const user = await User.findById(req.user)
    res.json({
        "username": user.username,
        "email": user.email,
        "id": user._id
    })
})

// Getting the porfolio based on username
neuronjs.GET("/api/portfolio/:username", async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.params.username })
        // User exists
        if (existingUser) {
            const userPortfolio = await Portfolio.findOne({ user: existingUser._id })
            return res.status(200).json(userPortfolio)
        }
        // User does not exist
        else return res.status(400).json({ "error": "true", "msg": "user does not exist" })
    }
    catch (e) {
        console.info(e)
        return res.status(400).json({ "error": "true", "msg": "user does not exist" })
    }
})

// Update Portfolio info
neuronjs.POST("/api/portfolio/update", async (req, res) => {
    auth(req, res)

    // Find the portfolio
    const portfolio = await Portfolio.findOne({ user: req.user })
    // Then, update the portfolio
    if (portfolio) {
        // Call the update method
        const updatedPortfolio = await portfolio.updateOne({
             user: req.user, 
             description: req.body.description, 
             socialMediaHandles: req.body.socialMediaHandles, 
             greetingText: req.body.greetingText, 
             navColor: req.body.navColor, 
             font: req.body.font, 
             backgroundColor: req.body.backgroundColor,
             rssFeed: req.body.rssFeed,
             displayName: req.body.displayName,
             layout: req.body.layout,
             occupation: req.body.occupation
            })
        return res.status(200).json(portfolio)
    }
})

neuronjs.listen(PORT, () => console.info("Server is running on port " + PORT))

Функция файла auth.js:

import jwt from 'jsonwebtoken'

const auth = (req, res) => {
    const token = req.headers["x-auth-token"]
    if (!token)
        return res.status(401).json({ "error": "true", "msg": "no authentication token" })
    
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
    if (!verifiedToken)
        return res.status(401).json({ "error": "true", "msg": "token failed" })
    
    req.user = verifiedToken.id
}

export default auth
Любая помощь очень ценится, и я уже пробовал несколько решений, таких как удаление node_modules и повторная установка mongoose.

 22.12.2020 13:18
66
0
92 674
17
Данный вопрос помечен как решенный
 Ответы 17
После создания кластера нажмите «Подключиться» и добавьте свой IP-адрес или добавьте другой IP-адрес в Атлас MongoDB.

 03.01.2021 07:26
Согласно документации, найденной по этой ссылке: https://mongoosejs.com/docs/connections.html#buffering

Mongoose позволяет сразу же начать использовать свои модели, не дожидаясь, пока mongoose установит соединение с MongoDB.

Это потому, что мангуст буферизирует вызовы функций модели внутри. Этот буферизация удобна, но также является распространенным источником путаницы. Mongoose не будет выдавать никаких ошибок по умолчанию, если вы используете модель без подключения.

TL;DR:

Ваша модель вызывается до установления соединения. Вам нужно использовать async/await с connect() или createConnection(); или используйте .then() , так как эти функции теперь возвращают промисы из Mongoose 5.

 10.01.2021 08:01
 Ответ принят как подходящий
По моему опыту, это происходит, когда ваша база данных не подключена. Попробуйте проверить следующие вещи:

Подключена ли ваша база данных, и вы указываете на тот же URL-адрес из своего кода.
проверьте, загружается ли ваш код mongoose.connect(...).
Я столкнулся с этой проблемой, когда запускал node index.js из своего терминала, а код подключения мангуста находился в другом файле. После запроса этого кода мангуста в index.js он снова заработал.

 12.01.2021 19:28
mongoose.connect('mongodb://localhost/myapp', {useNewUrlParser: true});

Просто добавьте {useNewUrlParser: true} в файл подключения.

 22.01.2021 09:23
Эта ошибка [user.findOne()] отображается, потому что ваша версия пакета config обновляется автоматически.

Введите следующее в свой терминал:

npm i -E config@3.3.1
или

yarn add -E config@3.3.1
 09.03.2021 15:50
Я сталкивался с этим несколько раз; особенно когда я обновил вложенные зависимости, для которых требуется mongoose. Это всегда помогает мне.

rm -rf node_modules
rm package-lock.json
npm install --package-lock-only
npm install
 12.04.2021 20:51
Мой код работал нормально на одном ПК, но на другом я получил ту же ошибку. У меня есть бесплатный хостинг MongoDB от https://www.mongodb.com/.

Я исправил это, добавив свой текущий IP-адрес в Security - Network Access - IP Access List на хостинг-сервере.

 13.04.2021 21:02
У меня такая же проблема. В моем случае я сохранил оператор mongoose.connect в другом файле и забыл вызвать его при написании оператора require.

require(./services/mongoose);
Я сделал это в своем файле index.js и изменил его на это

require(./services/mongoose)();
 24.04.2021 10:11
Уже был кластер, коллекция, сделанная в моем атласе mongo db, все, что мне нужно было сделать, это очистить это и отправить еще один почтовый запрос, чтобы он заработал.

 04.07.2021 05:46
У меня была такая же проблема при использовании Mongoose 6. Я подключился к Mongoose в своем файле index.js следующим образом:

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.info('Connected to MongoDB');
  }
);
Я нашел следующую информацию для Mongoose 6 на их сайте:

useNewUrlParser, useUnifiedTopology, useFindAndModify и useCreateIndex больше не поддерживаются. Мангуст 6 всегда ведет себя так, как если бы useNewUrlParser, useUnifiedTopology и useCreateIndex являются истинными, а useFindAndModify — ложными. Пожалуйста, удалите эти параметры из вашего кода.

Когда я удалил опцию useCreateIndex: true, проблема была решена.

 20.10.2021 23:51
У меня была эта проблема сама, когда я пытался использовать свою базу данных, когда мой сервер был в ошибке, и мангуст создал огромную панель ошибок из 87 частей, которую мне пришлось просеивать, и когда я это сделал, я обнаружил, что параметры, которые я передал мангусту, были обесценивается. Поэтому, если вы можете прокрутить до места, где вы запускаете свой сервер, вы можете увидеть детали, говорящие вам удалить или добавить определенные параметры. Удаление дополнительных параметров решило мою проблему.

 07.11.2021 14:58
Убедитесь, что вы подключаетесь к MongoDB вверху своей функции (внутри файла) и выполняете (CRUD) операции после подключения к MongoDB Atlas.

Надеюсь, это имеет смысл. Я получаю сообщение об ошибке, потому что в своем файле я загружаю данные с другого сервера и вставляю в свою MongoDB после этих асинхронных операций, которые я подключаю к своему серверу MongoDB, поэтому я получаю сообщение об ошибке.

ПРАВИЛЬНО ↓

await mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 
await parseAndLoadPlanetsData();
НЕПРАВИЛЬНО ↓

await parseAndLoadPlanetsData();
await mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Ошибка при подключении к серверу MongoDb Atlas
Вопросы
NODE.JS
Ошибка при подключении к серверу MongoDb Atlas
Итак, я сейчас создаю веб-приложение, и мне нужна база данных, поэтому я решил использовать mongodb и mongoose. До сих пор я тестировал все на localhost, и это работало, но я хотел перенести данные на сервер. Я слышал об Атласе, зарегистрировался и «загрузил» данные.

Теперь я хочу подключиться к кластеру через приложение node.js.

mongoose.connect('mongodb+srv://engllucas:p%40ssw0rd@insight-quhku.mongodb.net/test');
Получил строку сайта mongodb Atlas в точке Подключите ваше приложение

Затем я сменил пароль.

mongoose.connect('mongodb://engllucas:p%40ssw0rd@insight-quhku.mongodb.net/test');
Это тоже не сработало.

Это сообщение об ошибке:

{ MongoError: failed to connect to server [insight-shard-00-02-quhku.mongodb.net:27017] on first connect [MongoNetworkError: connect ECONNREFUSED 18.194.163.64:27017]
at Pool.<anonymous> (U:\WEBT\ProjectInsight\Quiz\node_modules\mongodb-core\lib\topologies\server.js:503:11)
at emitOne (events.js:115:13)
at Pool.emit (events.js:210:7)
at Connection.<anonymous> (U:\WEBT\ProjectInsight\Quiz\node_modules\mongodb-core\lib\connection\pool.js:326:12)
at Object.onceWrapper (events.js:318:30)
at emitTwo (events.js:125:13)
at Connection.emit (events.js:213:7)
at TLSSocket.<anonymous> (U:\WEBT\ProjectInsight\Quiz\node_modules\mongodb-core\lib\connection\connection.js:245:50)
at Object.onceWrapper (events.js:316:30)
at emitOne (events.js:115:13)
at TLSSocket.emit (events.js:210:7)
at emitErrorNT (internal/streams/destroy.js:64:8)
at _combinedTickCallback (internal/process/next_tick.js:138:11)
at process._tickCallback (internal/process/next_tick.js:180:9)
  name: 'MongoNetworkError',
сообщение: 'не удалось подключиться к серверу [insight-shard-00-02-quhku.mongodb.net:27017] при первом подключении [MongoNetworkError: connect ECONNREFUSED 18.194.163.64:27017]'} (узел: 4920) UnhandledPromiseRejectionWarning: необработанное отклонение обещания (идентификатор отказа: 1): MongoNetworkError: не удалось подключиться к серверу [insight-shard-00-02-quhku.mongodb.net:27017] при первом подключении [MongoNetworkError: connect ECONNREFUSED 18.194 .163.64: 27017] (узел: 4920) [DEP0018] DeprecationWarning: необработанные отклонения обещаний устарели. В будущем необработанные отклонения обещаний завершат процесс Node.js с ненулевым кодом выхода.

 18.04.2018 10:34
30
0
46 084
19
Данный вопрос помечен как решенный
 Ответы 19
если вы используете мангуст до версии 5.0.15:
вmongodb+srv://uri недействителен для базового собственного драйвера.

просто удаление + srv тоже не сработает, так как uri должен будет включать ваши реплики хостов и параметры replicaSet / authSource.

вы также можете
1. Обновитесь до mongoose 5.0.15 и используйте более короткий формат + srv.

или же
2. Используйте текущую версию с полным uri из панели управления кластера Atlas, выбрав более старую версию драйвера. (см. Примечание ниже) версия uri.

на панели управления кластера нажмите кнопку подключения, затем (при условии, что вы занесли в белый список IP-адрес сервера узла) выберите «подключить приложение», затем нажмите «Я использую драйвер версии 3.4 или старше». Используйте полученную строку uri вместо вашего пароля.

Примечание: В диалоговом окне выбора строки URI в помощнике подключения на панели управления кластера Atlas говорится «Я использую драйвер 3. * или (более новый | старый)». Это плохой выбор слов, поскольку версии 3.6 и 3.4 относятся не к версии драйвера, а к версии сервера. Кроме того, использование той или иной версии сервера не имеет ничего общего с драйвером, используемым для подключения, и именно здесь находится фактическая зависимость, определяющая, какую версию URI использовать.

 18.04.2018 10:58
 Ответ принят как подходящий
У меня также была аналогичная проблема, и я смог ее решить, добавив свой IP-адрес в белый список в разделе Кластеры -> Безопасность -> Белый список IP. Вместо того, чтобы нажимать my current ip address, просто найдите мой IP-адрес в Google и вставьте его вместо этого. Надеюсь это работает!

 11.02.2019 13:46
Это проблема вашего «белого списка IP». Отредактируйте и обновите его один раз, тогда он должен работать нормально.

 13.04.2019 14:30
У меня была аналогичная проблема, и я не смог подключиться к mongo. Видимо mongodb не понравился мой пароль, содержащий специальные символы. Я пробовал выполнять кодирование URL-адресов и другие виды манипуляций, но оказалось, что проблема для меня в конечном итоге решена просто изменением пароля на тот, в котором не используются специальные символы. Я использовал генератор паролей mongodb, и теперь все работает нормально.

 24.04.2019 14:23
Видимо, меняя

mongoose.connect(keys.mongoURI);
к

mongoose.connect(keys.mongoURI, () => { }, { useNewUrlParser: true })
    .catch(err => {
        console.info(err);
    });
работал у меня.

 11.06.2019 20:29
Убедитесь, что ваш текущий IP-адрес находится в белом списке IP-адресов MongoAtlas. Я столкнулся с этой проблемой после того, как обновил свой VPN.

 12.06.2019 04:27
google => мой IP-адрес => copyit

попал в Атлас => Как только вы окажетесь на вкладке Кластеры, проверьте слева => Безопасность => Доступ к сети => Изменить IP => вставить IP-адрес.

перезапустите свой сервер, и он должен работать :)

 25.06.2019 14:17
Выше ответ правильный, но я хочу добавить одно очко:

С точки зрения безопасности это нехорошо;

У меня также была аналогичная проблема, и я смог решить ее, добавив мой IP-адрес в белый список в разделе Clusters -> security -> IP Whitelist.. Вместо того, чтобы нажимать мой current ip address, просто найдите мой IP-адрес в Google и вставьте его вместо этого. Надеюсь это работает!

У меня также была аналогичная проблема, и я смог ее решить, добавив мой IP-адрес в белый список под Clusters -> security -> IP Whitelist., добавил этот IP-адрес в список: 0.0.0.0/0, он будет открыт для всех.

 16.07.2019 08:06
У меня возникла проблема с подключением к кластеру MongoDB Atlas. Мне приходилось решать эту проблему дважды, потому что я работал над проектом с двух разных компьютеров (Macbook Pro и ПК с Windows).

Вот мой исчерпывающий ответ на все, что я придумал, чтобы решить проблему, когда мое приложение не подключается к кластеру.

Первый Убедитесь, что ваш IP-адрес внесен в белый список, как указано выше. Самым простым решением является белый список "Все IP-адреса" 0.0.0.0/0.

Второй Проверьте свой VPN, если вы его используете. Я пытался подключиться к кластеру при подключении к VPN. Как только я отключил свой VPN, я смог подключиться.

В третьих Убедитесь, что ваши настройки Интернета не мешают вам подключиться к кластеру. Мои домашние настройки безопасности Wi-Fi Xfinity были слишком высокими, и это мешало подключению. Я думаю, что маршрутизатор не разрешал подключение к порту 27017. Один из способов проверить, возникает ли эта проблема, - привязать компьютер к телефону для доступа в Интернет вместо Wi-Fi и попытаться подключиться. Мне удалось подключиться, используя свой iPhone в качестве точки доступа в Интернет. Я сбросил свой маршрутизатор до заводских настроек, что устранило проблему.

 02.08.2019 23:07
У меня была такая же проблема, а белый список IP был настроен правильно!

Причина заключалась в том, что MongoDB Enterprise Atlas требует уровня исключения SSL, пытающегося подключиться без этого, вызывает необоснованную и не требующую пояснений ошибку, например:

Failed to connect to mongodb-m0-nnxxx.mongodb.net:27017
No chance to Authorize
При попытке подключиться с помощью клиента mondodb с проблемой белого списка IP-адресов появляется следующее сообщение об ошибке:

mongo "mongodb+srv://mongodb-m0-nnxxx.mongodb.net/test" --username admin

DBClientConnection failed to receive message from mongodb-m0-shard-00-00-nnxxx.mongodb.net.:27017 - HostUnreachable: Connection closed by peer
Unable to reach primary for set mongodb-m0-shard-0
Cannot reach any nodes for set mongodb-m0-shard-0. Please check network connectivity and the status of the set. This has happened for 5 checks in a row.
Например, при использовании клиента Robo 3T флажок "Использовать протокол SSL" должен быть включен, и ** Метод аутентификации: самоподписанный сертификат **

Тест дает диагностический вывод:

v Connected to mongodb-m0-nnxxx.mongodb.net:27017 via SSL tunnel
v Authorized on admin database as admin
Надеюсь, это кому-то поможет.

 14.08.2019 15:18
У меня возникла эта проблема, и я ее исправил. Ниже приведены шаги, которые я использовал:

Прежде всего добавьте нового пользователя в mongodb (Безопасность> Доступ к базе данных> ДОБАВИТЬ НОВОГО ПОЛЬЗОВАТЕЛЯ>)
затем напишите в файл .env новое имя пользователя и пароль.
Убейте сервер и перезапустите сервер.
Это решение, которое сработало для меня.

 04.09.2019 12:45
Я также столкнулся с аналогичной проблемой, когда подключал MongoDB Compass к кластеру https://cloud.mongodb.com/.

Следующие шаги решают проблему.

Посетите google.com> Введите мой IP-адрес> Скопируйте общедоступный IP-адрес вашей системы / сети
Перейдите в Кластер https://cloud.mongodb.com/> Выберите Безопасность> Доступ к сети> Щелкните вкладку IP-адреса> Добавить IP-адрес> Введите свой общедоступный IP-адрес.
 06.12.2019 09:56
Я подключился к vpn до того, как понял это. Когда я позже попытался подключиться к db, я не смог этого сделать. Я снова открыл свою веревку и все разрешения в разрешениях. Затем, когда я снова подключился к vpm, я смог подключиться.

 11.04.2020 19:34
У меня тоже была такая же проблема. затем изменил

mongoose.connect(db, () => { }, { useNewUrlParser: true })
    .catch(err => {console.info(err);});
но возникла ошибка,

(node:5796) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

затем изменил код на

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => { })
        .catch(err => console.info(err));
Это сработало для меня.

 09.05.2020 21:51
Если вы подключены к точке доступа и чувствуете, что все сделали правильно, отключите и снова подключитесь. В особенности отключите подключение к Интернету и подключитесь снова.

 11.05.2020 10:46
У меня тоже была такая же ошибка, и я попробовал эту логику.
Помимо этого в атласе mongoDb в доступе к сети, подтвердите все IP-адрес и установите ---------------- 0.0.0.0/0
 28.05.2020 08:35
Я решил эту проблему, просто включив "+ srv" в начало строки подключения, например:

mongoose.connect("mongodb+srv://<username>:<password>@<address>/<database>?retryWrites=true&w=majority", {useNewUrlParser: true});
Что странно, потому что я нашел несколько ответов, которые заставляли меня поступать наоборот. Думаю, я перепутал свои версии мангуста.

Надеюсь, это кому-то поможет.

 15.06.2020 18:51
Странно, но помогла смена пароля (без специальных символов) кластера.

 11.09.2020 14:39
У меня была такая же проблема, добавление в белый список и другие решения не помогли. Но после того, как я создал другого пользователя. При создании нового пользователя в поле «Права пользователя базы данных» я выбрал «Админ Атласа» вместо «Чтение и запись в любую базу данных» по умолчанию. После этого связь заработала

Избегайте предупреждения о том, что парсер текущей строки URL устарел, задав для параметра useNewUrlParser значение true
Вопросы
NODE.JS
Избегайте предупреждения о том, что парсер текущей строки URL устарел, задав для параметра useNewUrlParser значение true
У меня есть класс-оболочка базы данных, который устанавливает соединение с некоторым экземпляром MongoDB:

async connect(connectionString: string): Promise<void> {
        this.client = await MongoClient.connect(connectionString)
        this.db = this.client.db()
}
Это дало мне предупреждение:

(node:4833) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

Метод connect() принимает экземпляр MongoClientOptions в качестве второго аргумента. Но у него нет свойства под названием useNewUrlParser. Я также попытался установить это свойство в строке подключения следующим образом: mongodb://127.0.0.1/my-db?useNewUrlParser=true, но это не повлияло на это предупреждение.

Итак, как я могу настроить useNewUrlParser на удаление этого предупреждения? Это важно для меня, поскольку скрипт должен запускаться как cron, и эти предупреждения приводят к спаму в мусорной почте.

Я использую драйвер mongodb в версии 3.1.0-beta4 с соответствующим пакетом @types/mongodb в 3.0.18. Оба они являются последними, доступными с использованием npm install.

Обходной путь
Используя более старую версию драйвера mongodb:

"mongodb": "~3.0.8",
"@types/mongodb": "~3.0.18"
 21.05.2018 13:50
265
2
276 449
22
 Ответы 22
Как уже отмечалось, версия драйвера 3.1.0-beta4, судя по всему, была "выпущена в мир" несколько раньше. Релиз является частью незавершенной работы по поддержке новых функций в предстоящем выпуске MongoDB 4.0 и внесению некоторых других изменений в API.

Одним из таких изменений, запускающих текущее предупреждение, является опция useNewUrlParser из-за некоторых изменений в том, как фактически работает передача URI соединения. Подробнее об этом позже.

Пока все не "успокоится", вероятно, это будет желательно "приколоть" по крайней мере до минорной версии для релизов 3.0.x:

  "dependencies": {
    "mongodb": "~3.0.8"
  }
Это должно остановить установку ветки 3.1.x при «свежих» установках узловых модулей. Если вы уже установили «последний» выпуск, который является «бета-версией», то вам следует очистить свои пакеты (и package-lock.json) и убедиться, что вы сделали это до выпуска серии 3.0.x.

Что касается фактического использования «новых» параметров URI подключения, основным ограничением является фактическое включение port в строку подключения:

const { MongoClient } = require("mongodb");
const uri = 'mongodb://localhost:27017';  // mongodb://localhost - will fail

(async function() {
  try {

    const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
    // ... anything

    client.close();
  } catch(e) {
    console.error(e)
  }

})()
Это более «строгое» правило в новом коде. Суть в том, что текущий код по существу является частью кода репозитория «node-native-driver» (npm mongodb), а «новый код» фактически импортируется из библиотеки mongodb-core, которая «поддерживает» «общедоступный» драйвер узла.

Смысл добавления «опции» состоит в том, чтобы «облегчить» переход путем добавления опции в новый код, чтобы в коде использовался более новый синтаксический анализатор (фактически основанный на url), добавляя параметр и очищая предупреждение об устаревании, и, следовательно, проверяя что переданные вами строки подключения действительно соответствуют ожиданиям нового парсера.

В будущих выпусках «устаревший» парсер будет удален, и тогда новый парсер будет просто тем, что используется, даже без этой опции. Но к тому времени ожидается, что у всего существующего кода будет достаточно возможностей проверить существующие строки подключения на соответствие ожиданиям нового синтаксического анализатора.

Поэтому, если вы хотите начать использовать новые функции драйвера по мере их выпуска, используйте доступный beta и последующие выпуски и, в идеале, убедитесь, что вы предоставляете строку подключения, которая действительна для нового анализатора, включив опцию useNewUrlParser в MongoClient.connect().

Если вам на самом деле не нужен доступ к функциям, связанным с предварительным просмотром выпуска MongoDB 4.0, закрепите версию за серией 3.0.x, как отмечалось ранее. Это будет работать, как описано в документации, и «закрепление» гарантирует, что выпуски 3.1.x не будут «обновлены» сверх ожидаемой зависимости до тех пор, пока вы действительно не захотите установить стабильную версию.

 22.05.2018 08:07
Проверьте свою версию mongo:

mongo --version
Если вы используете версию> = 3.1.0, измените файл подключения mongo на ->

MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
или ваш файл подключения мангуста к ->

mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
В идеале это функция версии 4, но v3.1.0 и выше также поддерживают ее. За подробностями обращайтесь к MongoDB GitHub.

 05.07.2018 03:47
Ничего не менять. Передайте только функцию подключения {useNewUrlParser: true }.

Это будет работать:

    MongoClient.connect(url, {useNewUrlParser:true,useUnifiedTopology: true }, function(err, db) {
        if (err) {
            console.info(err);
        }
        else {
            console.info('connected to ' + url);
            db.close();
        }
    })
 09.07.2018 08:44
Вот как это у меня. Подсказка не отображалась на моей консоли, пока я не обновил npm пару дней назад.

.connect имеет три параметра: URI, параметры и ошибку.

mongoose.connect(
    keys.getDbConnectionString(),
    { useNewUrlParser: true },
    err => {
        if (err) 
            throw err;
        console.info(`Successfully connected to database.`);
    }
);
 09.07.2018 16:29
Проблему можно решить, указав номер порта и используя этот парсер: {useNewUrlParser: true}

Решение может быть:

mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });
Это решает мою проблему.

 29.07.2018 21:57
Мы использовали:
mongoose.connect("mongodb://localhost/mean-course").then(
  (res) => {
   console.info("Connected to Database Successfully.")
  }
).catch(() => {
  console.info("Connection to database failed.");
});
→ Это дает ошибку парсера URL

Правильный синтаксис:
mongoose.connect("mongodb://localhost:27017/mean-course" , { useNewUrlParser: true }).then(
  (res) => {
   console.info("Connected to Database Successfully.")
  }
).catch(() => {
  console.info("Connection to database failed.");
});
 04.08.2018 06:14
Я использовал mlab.com в качестве базы данных MongoDB. Я разделил строку подключения на другую папку с именем config и внутри файла keys.js сохранил строку подключения, которая была:

module.exports = {
  mongoURI: "mongodb://username:password@ds147267.mlab.com:47267/projectname"
};
И код сервера был

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Database configuration
const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true } // Need this for API support
  )
  .then(() => console.info("MongoDB connected"))
  .catch(err => console.info(err));

app.get("/", (req, res) => res.send("hello!!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Server running on port ${port}`)); // Tilde, not inverted comma
Вам нужно написать { useNewUrlParser: true } после строки подключения, как я сделал выше.

Проще говоря, вам нужно сделать:

mongoose.connect(connectionString,{ useNewUrlParser: true } 
// Or
MongoClient.connect(connectionString,{ useNewUrlParser: true } 
    
 16.08.2018 09:10
Приведенный ниже выделенный код для подключения мангуста устраняет предупреждение для драйвера мангуста:

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
 16.08.2018 11:54
Эти строки помогли справиться и со всеми остальными предупреждениями об устаревании:

const db = await mongoose.createConnection(url, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
 10.09.2018 22:57
Я не думаю, что вам нужно добавлять { useNewUrlParser: true }.

Вам решать, хотите ли вы уже использовать новый парсер URL. В конце концов, предупреждение исчезнет, ​​когда MongoDB переключится на новый парсер URL.

Как указано в Формат URI строки подключения, вам не нужно устанавливать номер порта.

Достаточно просто добавить { useNewUrlParser: true }.

 22.09.2018 12:16
Вам нужно добавить { useNewUrlParser: true } в метод mongoose.connect().

mongoose.connect('mongodb://localhost:27017/Notification',{ useNewUrlParser: true });
 06.10.2018 19:32
Формат строки подключения должен быть mongodb: // пользователь: пароль @ хост: порт / база данных

Например:

MongoClient.connect('mongodb://user:password@127.0.0.1:27017/yourDB', { useNewUrlParser: true } )
 06.11.2018 18:22
Если username или password имеют символ @, используйте его так:

mongoose
    .connect(
        'DB_url',
        { user: '@dmin', pass: 'p@ssword', useNewUrlParser: true }
    )
    .then(() => console.info('Connected to MongoDB'))
    .catch(err => console.info('Could not connect to MongoDB', err));
 29.01.2019 17:56
Обновлено для ECMAScript 8 / await
Неправильный ECMAScript 8 демонстрационный код MongoDB inc предоставляет также создает это предупреждение.

MongoDB дает следующий совет, который неверен

To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

Это вызовет следующую ошибку:

TypeError: final argument to executeOperation must be a callback

Вместо опция должна быть предоставлена ​​new MongoClient:

См. Код ниже:

const DATABASE_NAME = 'mydatabase',
    URL = `mongodb://localhost:27017/${DATABASE_NAME}`

module.exports = async function() {
    const client = new MongoClient(URL, {useNewUrlParser: true})
    var db = null
    try {
        // Note this breaks.
        // await client.connect({useNewUrlParser: true})
        await client.connect()
        db = client.db(DATABASE_NAME)
    } catch (err) {
        console.info(err.stack)
    }

    return db
}
 29.01.2019 20:44
Полный пример для Express.js, случая вызова API и отправки содержимого JSON выглядит следующим образом:

...
app.get('/api/myApi', (req, res) => {
  MongoClient.connect('mongodb://user:password@domain.com:port/dbname',
    { useNewUrlParser: true }, (err, db) => {

      if (err) throw err
      const dbo = db.db('dbname')
      dbo.collection('myCollection')
        .find({}, { _id: 0 })
        .sort({ _id: -1 })
        .toArray(
          (errFind, result) => {
            if (errFind) throw errFind
            const resultJson = JSON.stringify(result)
            console.info('find:', resultJson)
            res.send(resultJson)
            db.close()
          },
        )
    })
}
 21.04.2019 02:16
Я использую для своего проекта mongoose версии 5.x. После запроса пакета mongoose установите глобальное значение, как показано ниже.

const mongoose = require('mongoose');

// Set the global useNewUrlParser option to turn on useNewUrlParser for every connection by default.
mongoose.set('useNewUrlParser', true);
 24.09.2019 14:43
Вам просто нужно установить следующие параметры перед подключением к базе данных, как показано ниже:

const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/testaroo');
Также,

Replace update() with updateOne(), updateMany(), or replaceOne()
Replace remove() with deleteOne() or deleteMany().
Replace count() with countDocuments(), unless you want to count how many documents are in the whole collection (no filter).
In the latter case, use estimatedDocumentCount().
 23.10.2019 11:02
Следующие работы для меня

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/playground", { useNewUrlParser: true,useUnifiedTopology: true })
.then(res => console.info('Connected to db'));
Версия mongoose - 5.8.10.

 28.01.2020 10:35
Следующая работа для меня для версии mongoose5.9.16

const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/dbName')
    .then(() => console.info('Connect to MongoDB..'))
    .catch(err => console.error('Could not connect to MongoDB..', err))
 28.05.2020 13:38
У меня это прекрасно работает:

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(db) //Connection string defined in another file
  .then(() => console.info("Mongo Connected..."))
  .catch(() => console.info(err));
 11.11.2020 13:34
const mongoose = require('mongoose');

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.info("connected to db");
  });
попробуйте использовать это

 28.01.2021 13:52
(node:16596) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect. (Use node --trace-deprecation ... to show where the warning was created) (node:16596) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.

Применение:

async connect(connectionString: string): Promise<void> {
        this.client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
        this.db = this.client.db()
}


Сообщение об ошибке: MongoError: неверная аутентификация Ошибка аутентификации через строку URI
Вопросы
NODE.JS
Сообщение об ошибке: MongoError: неверная аутентификация Ошибка аутентификации через строку URI
Я пытаюсь подключиться к своему серверу mongoDB через строку подключения, предоставленную мне mongo:

"mongodb+srv://david:password@cluster0-re3gq.mongodb.net/test?retryWrites=true"
В моем коде я вызываю соединение через мангуста следующим образом (очевидно, вводя свой пароль):

const mongoose = require('mongoose');
const db = 'mongodb+srv://david:<password>@cluster0-re3gq.mongodb.net/test?retryWrites=true'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true
      })
    .then(() => console.info('MongoDB connected...'))
    .catch(err => console.info(err));
Когда я запускаю код, я получаю следующую ошибку

"MongoError: bad auth Authentication failed."

Любые идеи о том, что это может означать?

 15.04.2019 20:49
66
1
114 922
26
Данный вопрос помечен как решенный
 Ответы 26
Вы пишете свой пароль вместо <password>? Если это не так, рекомендуется создать переменную среды в вашей операционной системе и вызывать ее с помощью process.env.[ваша переменная]. Бывший:

const password = process.env.YOURPASSWORDVARIABLE
const db = 'mongodb+srv://david:'+password+'@cluster0-re3gq.mongodb.net/test?retryWrites=true'
Еще лучше, вы также можете поместить всю строку подключения URL в переменную env:

 15.04.2019 21:02
У меня была та же проблема, и в моем случае ответ был таким же простым, как удаление угловых скобок «<» и «>» вокруг <password>. Я пытался: my_login_id:<my_password>, когда это должно было быть my_login_id:my_password.

 17.04.2019 18:39
 Ответ принят как подходящий
Я думаю, вы запутались с паролем учетной записи mongodb и паролем пользователя. Вы должны использовать пароль пользователя, а не пароль учетной записи. Это было причиной моего случая.

 18.04.2019 20:19
Это происходит из-за того, что введен неправильный пароль. Потому что вы вводите пароль для входа, а не для кластера.

Решение ===> Шаг 1. Нажмите «Доступ к базе данных» с левой стороны. Навигация по странице атласа mongodb.

шаг 2. выберите свое имя пользователя и нажмите, чтобы редактировать с правой стороны.

Шаг 3. Нажмите, чтобы изменить пароль.

Шаг 4. Нажмите «Обновить пользователя».

При смене пароля сохраняйте пароль только в алфавитном порядке, т.к. специальные символы нуждаются в кодировке. See The Image For Your Better Understanding

это все, теперь вы можете подключиться.

 22.10.2019 08:21
Не используйте кредиты в URI, используйте вместо этого:

mongoose.connect(mongodb+srv://clusterAnything.mongodb.net/test?retryWrites=true&w=majority, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
 22.01.2020 03:24
Та же проблема, с которой я столкнулся при проверке подлинности пароля mongoDB, не удалась.

"Ошибка: неверная аутентификация. Ошибка аутентификации."

В соответствии с предложением Павана, приведенным выше, я заменил свой пароль для входа в ссылку MONGO_URI на пароль базы данных, и он работает. обязательно проверьте и это.

Если вы не сгенерировали, сгенерируйте новый или если создали ранее, замените новым.

 18.03.2020 08:47
Контрольный список:

1) Убедитесь, что вы используете правильный пароль (пароль пользователя БД, а не учетную запись Mongo).

2) При вводе пароля убедитесь, что все специальные символы закодированы в URL-адресе (например: p@ssword должно быть p%40ssword).

3) Если вы не помните свой пароль пользователя БД - перейдите в Доступ к базе данных (если вы используете Mongo Atlas) -> выберите пользователя БД -> изменить -> создать новый пароль -> не забудьте обновить, чтобы нажать «Обновить пользователя».

(!) Предупреждение безопасности: Не пишите пароль открытым текстом внутри вашего кода - следуйте рекомендациям, данным здесь.

 11.04.2020 17:12
В моем случае мой пароль был неправильным, чтобы диагностировать ошибку, я выполнил следующие шаги:

Я должен попробовать подключение через командную строку: 

С помощью этой команды: mongo "mongodb+srv://cluster0-j8ods.mongodb.net/test" --username:



Ответ был снова: 2020-04-26T11:48:27.641-0500 E QUERY [js] Ошибка: неверная аутентификация Ошибка аутентификации. :

затем я меняю пароль для своего пользователя, в моем случае пользователя root. и все, я авторизован

 26.04.2020 18:53
mongodb+srv://jehat123:<password>@jehatarmancdeniz-x2yf7.mongodb.net/question-answer?retryWrites=true&w=majority
Удалить всю часть пароля

Используйте так:

mongodb+srv://jehat123:yourpass@jehatarmancdeniz-x2yf7.mongodb.net/question-answer?retryWrites=true&w=majority
 02.05.2020 09:52
Ну наконец то, мне удалось использовать эту строку подключения с более низким классом, чем URL-адрес кластера версий NodeJs (2.2.12 или более поздней версии). И после этого убедитесь, что у вас есть белый список ваш текущий IP-адрес из Atlas MongoDB. Он должен отображаться как 0.0.0.0/0 (включая ваш текущий IP-адрес) в разделе «Доступ к сети» в Atlas MongoDB. Подключиться к кластеру NodeJs версии 2.2.12 или новее

И основная проблема заключалась в том, где я храню этот URL-адрес строки подключения в постоянной части. Итак, изначально я сохранял это значение строки подключения в одинарной/двойной кавычке, но каждый раз, когда я получал ошибку сбоя аутентификации, поскольку он не мог проанализировать это значение «Пароль» из Atlas mongoDB. Поэтому я использовал обратная галочка (``) вместо одинарной/двойной кавычки для хранения этой строки подключения.

Пример кода, в котором я подключаю mongoDB Atlas через приложение NodeJs.

const DB_USER = 'your username in atlas mongodb';

const PASSWORD = encodeURIComponent('your password in atlas mongodb');

const url = `mongodb://${DB_USER}:${PASSWORD}@cluster0-shard-00-00.3ytbz.mongodb.net:27017,cluster0-shard-00-01.3ytbz.mongodb.net:27017,cluster0-shard-00-02.3ytbz.mongodb.net:27017/sample-db?ssl=true&replicaSet=atlas-z26ao5-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.info('Connected to database !!');
  })
  .catch((err)=>{
    console.info('Connection failed !!'+ err.message);
  });
 12.08.2020 16:59
Просто удалите угловые скобки с обеих сторон пароля.

Неправильный ответ :
const db = 'mongodb+srv://username:<password>@cluster0-re3gq.mongodb.net/test?retryWrites=true'

Правильный ответ :
const db = 'mongodb+srv://username:password@cluster0-re3gq.mongodb.net/test?retryWrites=true'

 15.11.2020 15:24
Я столкнулся с подобной проблемой, как ни странно, она была решена, когда я создал нового пользователя в доступе к базе данных. На этот раз, хотя я нажал на автогенерацию пароля. Это не должно иметь значения, но в моем случае это решило проблему.

 17.11.2020 14:21
Вы также можете избавиться от этой ошибки, создав нового пользователя базы данных, перейдя в «Доступ к базе данных» с левой стороны, а затем перейдите к «Добавить нового пользователя базы данных» справа. Теперь создайте новое имя пользователя и пароль, нажмите OK. Теперь замените это новое имя пользователя и пароль на файл MongoUri.

 03.12.2020 17:10
Я забыл обновить пользователя после создания и копирования пароля, и мне было интересно, почему он не работает. Кнопку обновить я увидел позже. Раньше меня не было видно. ржу не могу. Решил проблему.

Доступ к базе данных => изменить пользователя => создать/скопировать пароль => обновить его! Это сработало для меня.

не забудьте убедиться, что вы обновили его.

 03.12.2020 22:07
Не только пароль
Проверьте все поля, это может быть пароль пользователя или базы данных. Если вы ошибетесь в написании любого из них, у вас будет ошибка аутентификации.
Перейдите к доступу к базе данных на левой панели в разделе безопасности: 

И на всякий случай смените пароль с помощью кнопки edit. Допустим, ваш пароль: P@sW0rd Вы можете скомпилировать URL-адрес, используя информацию, содержащуюся на экране «Пользователи базы данных»:

client = MongoClient("mongodb+srv://giac:P@sW0rd@cluster0.wjdtk.mongodb.net/testc?retryWrites=true&w=majority")
В других ответах не говорилось, что даже если вы ошибетесь в имени базы данных, у вас будет ошибка аутентификации.

 23.01.2021 17:57
У меня просто была эта проблема, зная, что я использую правильное имя пользователя, пароль и имя БД.

Я попытался изменить пароль для пользователя db для двойной проверки, но это все равно не сработало.

Затем вместо этого я создал нового пользователя, дал пользователю роль администратора, установил пароль и т. д., а затем использовал этого нового пользователя и пароль (то же самое имя базы данных) для подключения, и это сработало.

Я не знаю точно, в чем проблема, но надеюсь, что это поможет некоторым из вас сэкономить время :)

 07.02.2021 22:06
В моем случае вышеуказанная ошибка была устранена путем прямой установки переменной пароля.

DATABASE = "test"
#PASSWORD = os.environ.get("YOUR_PASSWORD") #This line was causing an error in code
PASSWORD = "YOUR_PASSWORD"                  # I added directly password variable

client = connect(
    DATABASE,
    host=f"mongodb+srv://mano:{PASSWORD}@cluster0.e2arj.mongodb.net/?retryWrites=true&w=majority",
    alias = "default",
)
 12.04.2021 06:07
В дополнение к приведенным выше ответам проблема, похоже, связана с неправильным вводом пароля базы данных для меня из-за искажения того, что я прочитал как свой текущий пароль в меню Atlas, и того, что MongoDB Atlas действительно сохранил в качестве моего текущего пароля.

Кажется, есть "баг" при использовании кнопки "Копировать" при выборе нового пароля.

Мне помогло следующее:

Открыть Атлас в Интернете
Перейдите в «Доступ к базе данных»
Нажмите «Изменить» для пользователя базы данных.
Выберите «Пароль» для метода аутентификации
Нажмите «Изменить пароль»
Нажмите «Показать» в поле пароля
Нажмите «Создать безопасный пароль автоматически».
НЕ нажимайте кнопку «Копировать» для копирования, используйте ручной выбор с помощью мыши и скопируйте текст с помощью правой кнопки мыши или команды клавиатуры.
Нажмите «Обновить пользователя» ниже
Потом: Просмотрите список пользователей базы данных, чтобы убедиться, что ни у одного другого пользователя базы данных нет такого же пароля, который вы только что создали.

Теперь попробуйте еще раз ввести комбинацию имени пользователя и пароля, используя эту строку подключения (опустив символы-заполнители «$» и «[]»:

'mongodb+srv://$[имя пользователя]:$[пароль]@$[список хостов]/$[база данных]?retryWrites=true'

Я заметил, что когда я автоматически сгенерировал новый пароль, щелкнув, а затем нажав кнопку «Копировать», автоматически сгенерированный пароль был сброшен на старый пароль. Поэтому я предположил, что новый автоматически сгенерированный пароль правильный, но на самом деле это был мой старый пароль, который вдобавок был таким же, как и у другого пользователя базы данных. Я не мог этого понять, пока не нажал «Показать» в поле ввода пароля.

 16.05.2021 11:48
Смена пароля мне помогла

nB: не пароль атласа

 09.06.2021 12:00
mongodb+srv://david:password@cluster0-re3gq.mongodb.net/test?retryWrites=true

Замените «пароль» паролем, который вы зарегистрировали для указанного имени пользователя.
Замените «test» после net на имя базы данных, которую вы создали в collections.
 23.06.2021 05:25
В моем случае есть левый и правый символы

так:

<Password>
поэтому изменено на:

Password
 05.07.2021 07:38
Для меня оказалось, что мне пришлось выйти из поля пароля на странице Атласа MongoDB. Прежде чем нажать «Обновить пользователя»

 24.07.2021 19:47
Это сработало для меня

    mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.adv0t.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
Создайте файл «.env» (перед этим необходимо установить дотенв) в родительском каталоге (если вы выберете пользовательское местоположение, добавьте следующее в server.js/app.js).

require('dotenv').config({ path: '/custom/path/to/.env' }) //uses custom location
В противном случае добавьте это в server.js/app.js тот, который инициирует server.

require('dotenv').config() //uses default location
В файле «.env» определите пользователя, пароль и базу данных следующим образом.

MONGO_USER=uSerName
MONGO_PASS=p@sSW0rd
MONGO_DATABASE=myDatabase
 12.10.2021 15:06
Потратив почти час на возню с URI, изменение разрешений и конфигураций и еще много чего, я обнаружил, что получаю это сообщение об ошибке из-за активного VPN-подключения. После отключения VPN я смог подключиться.

Поэтому, если у вас больше ничего не работает, возможно, что-то в вашей системе препятствует успешному установлению соединения, и mongodb просто отвечает bad auth

 22.10.2021 20:30


Просто перейдите на вкладку «Пользователи MongoDB», где вы найдете список пользователей. Нажмите «Изменить», где вы можете сбросить пароль. Иногда сброс пароля может решить проблему.

 27.12.2021 17:42
если у вас возникла эта проблема и вы изучаете монго на официальных тренингах по монго, используйте m001-mongodb-basics в качестве пароля для своей базы данных. И правильное имя БД - Sandbox (если вы выполнили все шаги)


MongoNetworkError: не удалось подключиться к серверу [localhost: 27017] при первом подключении [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]
Вопросы
NODE.JS
MongoNetworkError: не удалось подключиться к серверу [localhost: 27017] при первом подключении [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]
Я новичок в nodeJS, начал учиться, следя за трейлером на YouTube, все идет хорошо, пока я не добавил функцию подключения, если mongodb,

mongo.connect("mongodb://localhost:27017/mydb")
когда я запускаю свой код в cmd (node ​​start-app), получаю следующую ошибку:

MongoNetworkError: failed to connect to server [localhost:27017] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]
Может ли кто-нибудь объяснить мне, какой шаг я пропустил? мой код:

var express = require("express");
var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/mydb";
var webService = require("./webService");
var server = express();

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.info("Database created!");
    db.close();
});

server.use(express.urlencoded({ extended: true }));

server.set('views', __dirname);

server.get('/', function (request, response) {
    response.sendFile(__dirname + '/MainPage.html');
});

server.get('/Sign', function (request, response) {
    response.render(__dirname + '/Sign.ejs');
});

server.post("/signUp", webService.signUp);

server.post("/createUser", webService.createUser);

server.listen(5500);
 04.05.2018 12:45
54
1
186 620
27
Данный вопрос помечен как решенный
 Ответы 27
 Ответ принят как подходящий
Вы должны сначала установить сервер базы данных MongoDB в вашей системе и запустить его.

Используйте ссылку ниже, чтобы установить MongoDB

https://docs.mongodb.com/manual/installation/

 04.05.2018 12:48
Попробовав КАЖДОЕ решение, которое Google придумал для переполнения стека, я обнаружил, в чем была моя конкретная проблема. Я отредактировал свой файл hosts давным-давно, чтобы я мог получить доступ к моему локальному хосту из моего виртуального бокса.

Удаление этой записи решило эту проблему для меня вместе с правильной установкой mongoDB из ссылки, указанной в приведенном выше решении, и включая правильный код обработки обещаний:

mongoose.connect('mongodb://localhost/testdb').then(() => {
console.info("Connected to Database");
}).catch((err) => {
    console.info("Not Connected to Database ERROR! ", err);
});
 20.06.2018 21:15
Это произошло со мной, и я узнал, что это произошло из-за плохого подключения к Интернету. Если я использую общедоступный Wi-Fi у себя, который блокирует различные веб-сайты по соображениям безопасности, Mongo отказывается подключаться. Но если бы я использовал свои собственные мобильные данные, я мог бы подключиться к базе данных.

 29.08.2018 20:29
просто запустите mongod в терминале в базовой папке, если все настроено, например, установка mongo db и клиента для него, например, mongoose. После выполнения команды запустите файл проекта, над которым вы работаете, и тогда ошибка не должна появиться.

 06.11.2018 10:31
сначала создайте папку с помощью командной строки mkdir C: \ data \ db (это для базы данных) затем запустите команду mongod --port 27018 из одной командной строки (режим администрирования) - вы можете указать номер порта имени по своему желанию

 08.11.2018 07:40
Вы можете проверить детали ошибки, выполнив эту команду

sudo service mongod status

если ошибка примерно такая

Не удалось отключить файл сокета /tmp/mongodb-27017.sock Неизвестная ошибка
Фатальное утверждение 40486 в src / mongo / transport / transport_layer_asio.cpp 670
просто запустив это, вы решите вашу проблему

rm /tmp/mongodb-27017.sock

 03.12.2018 11:16
1) Если вы не установили mongodb, установите его.

2) откройте новый терминал, введите «mongo». Это подключит вас к экземпляру MongoDB, запущенному на вашем локальном хосте с портом по умолчанию 27017:

 09.01.2019 02:18
Я столкнулся с той же проблемой, но после большого количества RND. Я обнаружил, в чем проблема, поэтому запустите эту команду на своем терминале.

sudo service mongod start

затем запустите монго на терминале

 18.03.2019 07:49
Следуя логике ответа @CoryM выше:

After trying EVERY solution google came up with on stack overflow, I found what my particular problem was. I had edited my hosts file a long time ago to allow me to access my localhost from my virtualbox.

Removing this entry solved it for me...

Я также редактировал свой файл hosts для установки машинного обучения Python 2 месяца назад. Поэтому вместо того, чтобы удалять его, потому что он мне все еще нужен, я использую 127.0.0.1 вместо localhost, и он работал:

mongoose.connect('mongodb://127.0.0.1/testdb')
 06.05.2019 20:33
Многие из них не добавляют этого, особенно в AWS EC2 Instance, у меня была такая же проблема, и я пробовал разные решения. Решение: в одном из URL-адресов моей базы данных внутри кода отсутствовал этот параметр authSource, добавив, что это сработало для меня.

mongodb://myUserName:MyPassword@ElasticIP:27017/databaseName?authSource=admin
 26.06.2019 03:26
У меня возникла эта проблема, когда я работал в местном Starbucks, и я вспомнил об этом, когда изначально настраивал свою базу данных через Mongo Atlas. Я установил свой IP-адрес, чтобы иметь доступ к базе данных. После просмотра нескольких тем я изменил свой IP-адрес в Atlas, и проблема исчезла. Надеюсь, это кому-то поможет.

 04.08.2019 03:17
Мой случай был немного другим. После перезапуска системы я не внес свой IP-адрес в белый список на Mongo при локальной разработке.

Select Network Access > Add IP Address > Add your current IP Address
 11.08.2019 15:15
mongoose.connect('mongodb://localhost:27017/').then(() => {
console.info("Connected to Database");
}).catch((err) => {
console.info("Not Connected to Database ERROR! ", err);
});
Лучше просто подключиться только к базе данных Mongoose localhost и создавать свои собственные коллекции. Не забудьте указать номер порта. (По умолчанию: 27017)

Для лучшего обзора загрузите Mongoose-compass для пользовательского интерфейса MongoDB.

 25.08.2019 07:41
Если установить до Mongodb, просто начните с этого кода:

brew services start mongodb-community
next => mongod
If Not Install before this Way

1.brew tap mongodb/brew
2.brew install mongodb-community
3.brew services start mongodb-community
4.mongod
 22.12.2019 10:33
Этот мне помог. Попробуйте создать новую папку, если ваш MongoDB установлен в C: \ Program Files, папка должна называться db и в папке data. C: \ данные \ db

Когда вы запускаете mongod, должен быть журнал, в котором db 'isnt found'.

 15.01.2020 16:08
просто установите MongoDB в свою систему. Вот и все.

 27.01.2020 17:06
Я подключился к VPN, и соединение установлено. Я использовал школьный Wi-Fi, который явно имеет некоторые ограничения.

 10.02.2020 23:02
Это сработало для меня.

mongoose.Promise = global.Promise;
  .connect(
    "mongodb://127.0.0.1:27017/mydb",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(db => {
      console.info("Database connected");
    }).catch(error => console.info("Could not connect to mongo db " + error));
Я использовал localhost, поэтому изменил его на:

mongodb://127.0.0.1:27017/mydb
 29.02.2020 20:46
Я не знаю, может ли это быть полезно, но когда я это сделал, это сработало:

Команда mongo в терминале.

Затем я скопировал URL-адрес, который возвращает команда mongo, что-то вроде

mongodb://127.0.0.1:*port*
Я заменил URL-адрес на это в моем JS-коде.

 28.04.2020 14:00
Я предполагаю, что вы, должно быть, подключаетесь к cloud.mongodb.com к своему кластеру.

Одно из быстрых исправлений - перейти на вкладку подключения и добавить свой текущий IP-адрес (в кластерном портале браузера или настольного приложения).. IP-адрес должен был быть изменен по разным причинам, например, из-за изменения Wi-Fi.

Просто попробуйте этот подход, у меня он сработал, когда я получил эту ошибку.

 28.04.2020 14:11
Возможно, ваш IP-адрес изменился.

Если вы недавно перезапустили модем, это изменит ваш IP-адрес, который, вероятно, был внесен в белый список Atlas.

Так вот, вам нужно вернуться в Atlas и добавить новый IP-адрес в белый список в разделе «Безопасность»> «Доступ к сети».

 14.05.2020 09:07
Вам нужно сначала инициализировать вашу базу данных mongoDB, вы можете запустить «mongod» в своем терминале, и тогда он будет работать нормально.

 26.05.2020 00:11
Моя проблема заключалась в неправильном номере порта для сервера mongoDB.

Я имел:

DATABASE_URL= "mongodb://localhost:3000/node-express-mongodb-server"
в моем файле .env (мои переменные среды), но я написал его до запуска mongoDB server. Поэтому, когда я запустил mongoDB server, он записал другой номер порта, и мне пришлось его изменить. Я изменил его на правильный номер порта (который был написан в моем окне cmd mongoDB):

DATABASE_URL= "mongodb://localhost:27017/node-express-mongodb-server"
и теперь все работает нормально.

 26.09.2020 15:30
Если сервер mongoDB уже установлен и вы не можете подключиться с удаленного хоста, выполните следующие действия:

Войдите на свой компьютер, откройте файл конфигурации mongodb, расположенный по адресу /etc/mongod.conf , и измените поле bindIp на конкретный ip / 0.0.0.0, после чего перезапустите сервер mongodb.

    sudo vi /etc/mongod.conf
Файл должен содержать следующий вид контента:

  systemLog:
      destination: file
      path: "/var/log/mongodb/mongod.log"
      logAppend: true
  storage:
      journal:
          enabled: true
  processManagement:
      fork: true
  net:
      bindIp: 127.0.0.1  // change here to 0.0.0.0
      port: 27017
  setParameter:
      enableLocalhostAuthBypass: false
После смены bindIp вам необходимо перезапустить mongodb, используя следующую команду

  sudo service mongod restart
Теперь вы сможете подключиться к серверу mongodb с удаленного сервера.

 29.09.2020 21:56
Ваш брандмауэр заблокировал порт 27017, который используется для подключения к MongoDB.

Попробуйте найти, какой брандмауэр используется в вашей системе, например в моем случае это csf, файл конфигурации размещен в

/etc/csf/csf.conf
найдите TCP_IN и TCP_OUT, как показано ниже, и добавьте порт 27017 к разрешенным входящим и исходящим портам

# Allow incoming TCP ports
TCP_IN = "20,21,22,25,53,80,110,143,443,465,587,993,995,2222,27017"

# Allow outgoing TCP ports
TCP_OUT = "20,21,22,25,53,80,110,113,443,587,993,995,2222,27017"
Сохраните файл конфигурации и перезапустите csf, чтобы применить его:

csf -r
 21.10.2020 17:15
это может помочь кому-то, если вы установили свой mongo в настройке .msi, любезно откройте программное обеспечение и выберите ремонт вместо установки и повторите попытку, это работает для меня.

 12.11.2020 18:18
Поэтому, когда ни одно из вышеперечисленных решений у меня не помогло, после правильной установки я подумал о перезапустить систему.

Теперь работает.

Обратите внимание, что я сделал все, что было сказано выше, но безуспешно. Единственная перезагрузка у меня сработала. !! Вы также можете перезапустить один раз.


Your Essential Guide to MongoDB Interview Questions and Answers
12 minute read
July 19, 2024
Karan Sharma
Written by:

Karan Sharma
  Reviewed by:

Anubhav Jain
Anubhav Jain
Summary: This guide offers a comprehensive collection of MongoDB interview questions and answers, ranging from basic to advanced and scenario-based queries. It helps you prepare effectively for interviews, showcasing your expertise and problem-solving skills in MongoDB.

Table of Contents
Introduction
What is MongoDB?
Comparison with Traditional Relational Databases
Use Cases and Industries Where MongoDB is Commonly Used
Basic MongoDB Interview Questions and Answers
What Is MongoDB?
What are the Advantages of Using MongoDB?
Explain The Difference Between MongoDB and SQL Databases.
What Is a Document in MongoDB?
What Is a Collection in MongoDB?
How Does MongoDB Handle Indexing?
What Is a Replica Set in MongoDB?
What Is Sharding in MongoDB?
What is the Aggregation Framework in MongoDB?
What Is a MongoDB Atlas?
Difficult MongoDB Interview Questions and Answers
How Do You Handle Schema Design in MongoDB?
What are Capped Collections in MongoDB?
Explain the Concept of a Write Concern in MongoDB.
How Does MongoDB Ensure Data Consistency?
What is the Use of the `$Lookup` Operator in MongoDB?
How Do You Handle Performance Tuning in MongoDB?
What is the Use of the `$Unwind` Operator in MongoDB?
Explain the Purpose of the `$Group` Operator in MongoDB.
What is the Role of MongoDB’s Wiredtiger Storage Engine?
How Does MongoDB Handle Large Data Volumes?
Very Difficult MongoDB Interview Questions and Answers
How Does MongoDB Manage Concurrent Write Operations?
 What Is the Role of The Oplog in MongoDB?
Explain How MongoDB Handles Failover in A Replica Set.
How Does MongoDB Implement a Two-Phase Commit for Transactions?
What Is the Aggregation Pipeline Builder?
How Do You Optimise MongoDB for Write-Heavy Workloads?
Describe MongoDB’s Journaling Mechanism.
How Does MongoDB Perform Data Validation?
What are Change Streams in MongoDB?
How Does MongoDB Handle Large-Scale Data Migrations?
Scenario-Based MongoDB Interview Questions and Answers
You Must Migrate Data from A SQL Database To MongoDB. How Would You Approach This Task?
How Would You Design A Schema For A Social Media Application In MongoDB?
A MongoDB Query Is Running Slower Than Expected. How Do You Diagnose And Resolve The Issue?
How Would You Handle a Situation Where A Primary Node In A Replica Set Fails?
You Need To Implement a Full-Text Search In MongoDB. How Would You Do It?
How Would You Optimise MongoDB For Read-Heavy Workloads?
Describe Your Approach to Handling Data Archiving In MongoDB.
How Do You Ensure Data Security and Compliance In A MongoDB Deployment?
You Are Tasked with Designing A High-Availability MongoDB Deployment. What Steps Do You Take?
A Client Reports Intermittent Connectivity Issues with Their MongoDB Instance. How Do You Troubleshoot This?
Bottom Line
Introduction
MongoDB is a robust NoSQL database, crucial in today’s data-driven tech industry. Its flexibility and scalability make it a popular choice for modern applications. Preparing for MongoDB interviews is essential for aspiring developers and data professionals. 

This guide offers a comprehensive collection of Mongodb interview questions and answers, catering to various skill levels. Expect easy, complex, and scenario-based questions, each with detailed explanations. This resource boosts your confidence and readiness for any MongoDB interview, ensuring you stand out to potential employers.

Read Blogs: 
Crucial Statistics Interview Questions for Data Science Success.
Python Interview Questions And Answers.

What is MongoDB?
MongoDB is a NoSQL database that handles large-scale data and modern application requirements. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents, allowing for dynamic schemas. This flexibility makes MongoDB a preferred choice for developers working on agile and fast-paced projects. Critical features of MongoDB include:

Horizontal scalability,
High availability through replica sets and
A powerful aggregation framework that supports complex queries and data transformations.
Comparison with Traditional Relational Databases
Traditional relational databases (RDBMS) like MySQL or PostgreSQL store data in structured tables with predefined schemas. In contrast, MongoDB’s document-based model allows for a more flexible and scalable approach. 

Relational databases use SQL for querying, which can be complex and rigid. In contrast, MongoDB uses a more straightforward query language that works well with JSON data structures. 

MongoDB’s horizontal scaling capabilities surpass relational databases’ typical vertical scaling limitations, making it suitable for big data applications.

Use Cases and Industries Where MongoDB is Commonly Used
MongoDB’s versatility and performance make it ideal for various industries and applications. In e-commerce, MongoDB handles product catalogues that require frequent updates and schema changes. 

Social media platforms leverage MongoDB for storing user profiles, posts, and interactions due to its ability to handle large volumes of unstructured data. The healthcare industry uses MongoDB to manage patient records and genomic data, which requires flexibility and scalability. 

Furthermore, financial services rely on MongoDB for fraud detection and real-time analytics due to its powerful querying and indexing capabilities.

Understanding these aspects is crucial when preparing for MongoDB interviews. Expect MongoDB interview questions and answers to cover these foundational topics, helping you demonstrate your knowledge and practical experience with MongoDB. This understanding will give you an edge in showcasing your ability to apply MongoDB in various real-world scenarios.

Further Check: 
Top DBMS Interview Questions and Answers.
Top 50+ Data Analyst Interview Questions & Answers.

Basic MongoDB Interview Questions and Answers

This section will cover some basic questions you might encounter in a MongoDB interview. These questions test your fundamental understanding of MongoDB and its core concepts. Mastering these will help you build a solid foundation for more advanced topics.

What Is MongoDB?
MongoDB is a NoSQL database that uses a document-oriented data model. It stores data in flexible, JSON-like documents, allowing for dynamic schemas. This flexibility makes it ideal for applications that require rapid development and iteration.

What are the Advantages of Using MongoDB?
MongoDB offers several advantages, including high scalability, flexible schema design, powerful querying and indexing capabilities, and robust performance. It also supports horizontal scaling through sharding, making it suitable for handling large volumes of data.

Explain The Difference Between MongoDB and SQL Databases.
MongoDB is a NoSQL database that stores data in documents, while SQL databases store data in tables with rows and columns. MongoDB’s flexible schema allows for easier and faster development. In contrast, SQL databases require a predefined schema and are often used for applications requiring complex queries and transactions.

What Is a Document in MongoDB?
A document in MongoDB is a JSON-like object that contains key-value pairs. Each document can have a different structure, allowing for flexibility in data modelling. Documents are stored in collections, analogous to SQL database tables.

What Is a Collection in MongoDB?
A collection is a group of MongoDB documents. Collections are similar to tables in relational databases but do not enforce a schema, allowing documents within the same collection to have different structures.

How Does MongoDB Handle Indexing?
MongoDB uses indexes to improve query performance. By default, MongoDB creates an index on the `_id` field, but additional indexes can be created on other fields to speed up search operations. Indexes support various types, including single field, compound, and geospatial indexes.

What Is a Replica Set in MongoDB?
A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability. One node is the primary that receives all write operations. In contrast, the other nodes are secondaries that replicate the primary’s data and can serve read operations or step in if the primary fails.

What Is Sharding in MongoDB?
Sharding in MongoDB’s method for distributing data across multiple servers. It enables horizontal scaling by partitioning data into smaller, more manageable pieces called shards. Each shard operates as an independent database, allowing for high scalability and performance.

What is the Aggregation Framework in MongoDB?
The MongoDB Aggregation Framework allows for processing data records and returning computed results. It uses a pipeline approach, where documents pass through multiple stages, such as filtering, grouping, and sorting. This framework is helpful for complex data transformations and analytics.

What Is a MongoDB Atlas?
MongoDB Atlas is a fully managed cloud database service provided by MongoDB. It automates database administration tasks such as provisioning, patching, and backup. It offers features like built-in security, scalability, and performance monitoring, making deploying and managing MongoDB databases in the cloud easier.

These questions provide a solid starting point for understanding the basics of MongoDB. By familiarising yourself with these concepts, you’ll be better prepared for more advanced topics and real-world applications.

Also Explore: 
Machine Learning Interview Questions: Ace Your Next Interview.
2024’s top Power BI interview questions simplified.

Difficult MongoDB Interview Questions and Answers
In this section, we will delve into more challenging questions typically posed to candidates with a deeper understanding of MongoDB. These questions require a firm grasp of basic concepts and practical experience with MongoDB’s more advanced features. Answering these questions will demonstrate your comprehensive knowledge and readiness to handle complex scenarios in MongoDB.

How Do You Handle Schema Design in MongoDB?
Schema design in MongoDB is flexible and depends on the application’s requirements. It involves defining the structure of documents and collections, considering data relationships, and optimising for read-and-write performance. Standard practices include embedding documents for one-to-one relationships and using references for one-to-many or many-to-many relationships.

What are Capped Collections in MongoDB?
Capped collections are fixed-size collections that automatically overwrite the oldest documents when the size limit is reached. They maintain insertion order and are ideal for use cases like logging, where you want to retain the most recent entries.

Explain the Concept of a Write Concern in MongoDB.
Write concern in MongoDB specifies the level of acknowledgement requested from MongoDB for write operations. It determines the durability and availability guarantees of the data. For example, a write concern of `w:1` ensures acknowledgement from the primary, while `w majority` ensures acknowledgement from the majority of replica set members.

How Does MongoDB Ensure Data Consistency?
MongoDB ensures data consistency through replica sets and writes concerns. Replica sets replicate data across multiple nodes and write concerns allow for configuring the level of acknowledgement for write operations. Additionally, MongoDB provides transactions that allow various operations to be executed atomically.

What is the Use of the `$Lookup` Operator in MongoDB?
The `$lookup` operator performs left outer joins in MongoDB’s aggregation framework. It allows for combining data from multiple collections, similar to SQL joins, and helps retrieve related data in a single query.

How Do You Handle Performance Tuning in MongoDB?
MongoDB performance tuning involves optimising queries, indexing strategies, schema design, and hardware resources. Techniques include using appropriate indexes, avoiding large document sizes, optimising shard keys, and monitoring system performance with tools like MongoDB’s built-in profiler and monitoring services.

What is the Use of the `$Unwind` Operator in MongoDB?
The `$unwind` operator is used in the aggregation pipeline to deconstruct an array field from the input documents and output a document for each array element. It is helpful in normalising data stored in arrays and performing operations on each array element.

Explain the Purpose of the `$Group` Operator in MongoDB.
The `$group` operator is used in the aggregation pipeline to group input documents by a specified identifier, and aggregate functions, such as sum, average, or count, are applied to each group. It is useful for generating summary data from a collection, like totals or averages.

What is the Role of MongoDB’s Wiredtiger Storage Engine?
WiredTiger is the default storage engine in MongoDB, offering high performance and concurrency. It supports document-level locking, compression, and checkpoints, which help improve throughput and reduce storage requirements. WiredTiger also allows tuning performance through various configuration options.

How Does MongoDB Handle Large Data Volumes?
MongoDB handles large data volumes through sharding, which distributes data across multiple servers. Each shard contains a subset of the data, allowing the database to scale horizontally. MongoDB also uses replication to ensure data redundancy and availability, distributing data across multiple nodes in a replica set.

These questions provide a deeper insight into MongoDB’s advanced features and best practices. By mastering these concepts, you will be well-prepared to tackle complex challenges and demonstrate your expertise in MongoDB during interviews.

More to see: 
Top 10 Data Science Interviews Questions and Expert Answers.
Top 20 Cyber Security Interview Questions and Answers.

Very Difficult MongoDB Interview Questions and Answers

This section will explore highly challenging MongoDB interview questions that test an in-depth understanding and expertise in MongoDB. These questions require detailed knowledge of MongoDB’s internal mechanisms, advanced features, and practical application in complex scenarios. Demonstrating proficiency with these questions will highlight your ability to handle and optimise MongoDB in real-world, demanding environments.

How Does MongoDB Manage Concurrent Write Operations?
MongoDB uses an optimistic concurrency control mechanism with document-level locking. When a write operation occurs, MongoDB locks only the written document, allowing other documents in the collection to be read or written concurrently, thus improving overall throughput.

 What Is the Role of The Oplog in MongoDB?
The oplog (operations log) is a unique capped collection that records all changes to the data in a replica set. Secondary members use the oplog to replicate changes from the primary. It ensures data consistency across the replica set and supports rollback operations in case of primary failover.

Explain How MongoDB Handles Failover in A Replica Set.
MongoDB’s replica set members use an election process to handle failover. The remaining members elect a new primary from the available secondaries if the primary node becomes unavailable. The new primary takes over write operations, ensuring high availability and minimal downtime.

How Does MongoDB Implement a Two-Phase Commit for Transactions?
MongoDB uses a two-phase commit protocol to ensure atomicity in transactions involving multiple documents or collections. In the preparation phase, changes are written for internal system collection. The transaction is either fully committed or aborted in the commit phase based on the final commit command, ensuring all-or-nothing execution.

What Is the Aggregation Pipeline Builder?
The Aggregation Pipeline Builder is a graphical tool in MongoDB Compass that allows users to construct aggregation pipelines visually. It provides real-time feedback and results to help build, test, and optimise complex aggregation queries.

How Do You Optimise MongoDB for Write-Heavy Workloads?
To optimise MongoDB for write-heavy workloads, you can use techniques such as increasing the write concern to balance durability and performance, using appropriate indexes to speed up queries, partitioning data with sharding, and optimising schema design to reduce document size and complexity.

Describe MongoDB’s Journaling Mechanism.
MongoDB’s journaling mechanism records write operations to a journal file before applying them to the data files. It ensures durability and data integrity, allowing MongoDB to recover and restore data consistently in case of a crash or power failure.

How Does MongoDB Perform Data Validation?
MongoDB performs data validation using JSON Schema validation rules defined at the collection level. These rules specify documents’ required structure and constraints, ensuring data consistency and integrity. Validation rules can be enforced during insert and update operations.

What are Change Streams in MongoDB?
Change streams allow applications to access real-time data changes in MongoDB collections. They enable building reactive applications by providing a continuous stream of change events, such as insertions, updates, and deletions, which can be processed and acted upon immediately.

How Does MongoDB Handle Large-Scale Data Migrations?
MongoDB handles large-scale data migrations using tools like `mongodump` and `mongorestore` for backup and restore operations, `mongoimport` and `mongoexport` for data transfer, and Atlas Live Migration Service for migrating data from on-premises or other cloud providers to MongoDB Atlas with minimal downtime.

These questions cover MongoDB’s most complex and advanced aspects, showcasing your ability to manage, optimise, and troubleshoot MongoDB deployments in demanding scenarios. Mastery of these topics will set you apart as an expert in MongoDB.

Also Read: 
Python Basic Interview Questions & Answers.
SQL Interview Questions for Data Analyst 2023.

Scenario-Based MongoDB Interview Questions and Answers

This section will explore scenario-based questions that test your ability to apply MongoDB concepts in real-world situations. These questions evaluate your problem-solving skills, practical knowledge, and understanding of MongoDB in various contexts. Answering these questions effectively will demonstrate your readiness to handle complex challenges and make informed decisions in MongoDB deployments.

You Must Migrate Data from A SQL Database To MongoDB. How Would You Approach This Task?
I would start by analysing the existing SQL schema and identifying the equivalent document structures in MongoDB. Then, I would use tools like `mongoimport` and `mongoexport` or custom ETL scripts to transfer the data. During the migration, I would ensure data consistency and integrity and optimise the schema for MongoDB’s document-oriented model.

How Would You Design A Schema For A Social Media Application In MongoDB?
I would design the schema to include collections for users, posts, comments, and likes. For example, the user’s collection would store user profiles. In contrast, the post’s collection would contain documents with post content, author references, and timestamps. Comments and likes would be embedded within the post documents for efficient querying and retrieval.

A MongoDB Query Is Running Slower Than Expected. How Do You Diagnose And Resolve The Issue?
I would start by analysing the query plan using the `explain()` method to identify bottlenecks. I would check for missing or inefficient indexes and create or optimise them as needed. Additionally, I would review the schema design for potential improvements and monitor system resources to ensure adequate performance.

How Would You Handle a Situation Where A Primary Node In A Replica Set Fails?
If the primary node fails, I will rely on the replica set’s automatic failover mechanism. The remaining nodes would elect a new primary to continue handling write operations. I would then investigate the cause of the failure, recover the original primary node, and reintroduce it into the replica set as a secondary.

You Need To Implement a Full-Text Search In MongoDB. How Would You Do It?
I would enable text search by creating a text index on the fields that require full-text search. Then, I would use the `$text` operator to search in queries. I suggest integrating MongoDB with a dedicated search engine like Elasticsearch for more advanced text search capabilities.

How Would You Optimise MongoDB For Read-Heavy Workloads?
To optimise for read-heavy workloads, I would ensure appropriate indexing on frequently queried fields, use replica sets to distribute read operations across secondary nodes, and consider denormalising data to reduce the need for complex joins. Additionally, I would implement caching strategies to minimise direct database access.

Describe Your Approach to Handling Data Archiving In MongoDB.
I would implement data archiving by creating a separate collection for archived documents. Using a combination of scheduled batch processes and TTL (Time-To-Live) indexes, I would move old or less frequently accessed data from the main collections to the archive collection, ensuring that the archived data remains accessible if needed.

How Do You Ensure Data Security and Compliance In A MongoDB Deployment?
I would ensure data security by implementing authentication and authorisation mechanisms, encrypting data at rest and in transit, and regularly auditing access logs. For compliance, I would adhere to industry standards and regulations, implement data masking and anonymisation where necessary, and ensure proper data retention and disposal policies.

You Are Tasked with Designing A High-Availability MongoDB Deployment. What Steps Do You Take?
I would design the deployment using replica sets to provide redundancy and automatic failover. I would distribute the replica set members across different geographic regions or data centres to ensure resilience against regional failures. It also implement regular backups and proactively monitor the system to address potential issues.

A Client Reports Intermittent Connectivity Issues with Their MongoDB Instance. How Do You Troubleshoot This?
I would start by reviewing the client’s network configuration and checking for any firewalls or network latency issues. I would also examine the MongoDB logs for connection-related errors and ensure that the MongoDB instance is correctly configured for high availability. Additionally, I would verify that the client’s application handles connection retries appropriately.

These scenario-based questions provide insight into your practical problem-solving abilities and demonstrate your capacity to apply MongoDB knowledge in real-world situations. By mastering these scenarios, you can showcase your readiness to tackle complex challenges in MongoDB environments.

More to discover: 
Top 35 Data Analyst Interview Questions and Answers 2023.
Data Engineering Interview Questions and Answers.

Bottom Line
In conclusion, preparing for MongoDB interviews involves understanding fundamental and advanced concepts and practical applications. This guide provides comprehensive MongoDB interview questions and answers, covering primary, complex, and scenario-based topics to enhance your readiness. 

Mastering these questions will help demonstrate your expertise and problem-solving abilities in real-world scenarios. By familiarising yourself with MongoDB’s features, schema design, and performance optimisation techniques, you’ll be well-equipped to handle any challenge. This preparation will boost your confidence and make you a standout candidate for potential employers in the data-driven tech industry.

50+ MongoDB Interview Questions and Answers
Janvi Kumari
Janvi Kumari
Last Updated : 07 Jan, 2025
 8 min read
0
MongoDB is a NoSQL database offering high performance and scalability. It stores data as documents, similar to JSON objects, allowing for complex structures like nested documents and arrays. This approach matches native data types in many programming languages. It also reduces the need for joins with embedded documents and arrays. Moreover, it supports dynamic schema for flexible data modeling. These features make MongoDB a robust choice for modern data management and an important topic for interviews. In this article we will see some of the most common interview questions on MongoDB.

Mongodb interview questions
MongoDB Interview Questions and Answers
Here are over 50 most commonly asked interview questions on MongoDB.

Q1. What is MongoDB?
Answer: MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents called BSON (Binary JSON). It’s designed for scalability, performance, and high availability.

Q2. What are documents and collections in MongoDB?
Answer: Documents are basic units of data in MongoDB, similar to rows in relational databases. They’re JSON-like objects with field-value pairs. Collections are groups of documents, analogous to tables in relational databases.

Q3. What are the differences between MongoDB and traditional relational databases?
Answer: Here are 4 main differences between the two:

Data model: MongoDB uses flexible documents; relational DBs use fixed schemas.
Scalability: MongoDB offers easier horizontal scaling.
Querying: MongoDB uses a document-based query language; relational DBs use SQL.
Relationships: MongoDB typically denormalizes data; relational DBs use joins.
Q4. What are the types of NoSQL databases?
Answer: There are four main types of NoSQL databases:

Document Database: Stores data in documents similar to JSON. Examples include MongoDB, CosmosDB, and CouchDB.
Key-Value Database: Stores data as a collection of key-value pairs. Examples include Redis and DynamoDB.
Column Store Database: Organizes data in columns within a keyspace. Examples include Cassandra, BigTable, and HBase.
Graph Store Database: Designed for data best represented as graphs with interconnected nodes. Examples include AllegroDB and GraphDB.
Q5. What are the advantages of MongoDB?
Answer: MongoDB offers several benefits:

Handles large volumes of data efficiently.
Supports cross-platform operations.
Provides high performance and easy scalability.
Eliminates the need for complex joins.
Supports horizontal and vertical scaling.
Available on cloud platforms like Azure and AWS.
Q6. What is sharding in MongoDB?
Answer: Sharding is MongoDB’s method for distributing data across multiple machines. It’s used to support deployments with very large data sets and high throughput operations.

Q7. Describe indexing in MongoDB.
Answer: Indexing in MongoDB improves query performance by creating efficient data structures for faster data retrieval. MongoDB supports various index types including single field, compound, multikey, and text indexes.

Q8. What are replica sets in MongoDB?
Answer: Replica sets are a group of MongoDB servers that maintain the same data set, providing redundancy and high availability. They consist of primary and secondary nodes, with automatic failover.

Q9. Explain the aggregation framework in MongoDB.
Answer: The aggregation framework is a set of analytical tools for processing data and returning computed results. It uses a pipeline concept where operators transform documents as they pass through.

Q10. How does MongoDB ensure data consistency?
Answer: MongoDB ensures consistency through reading and writing concerns, journaling, and two-phase commits for multi-document transactions.

mongodb interview questions
Q11. What are capped collections in MongoDB?
Answer: Capped collections are fixed-size collections that maintain insertion order and automatically overwrite old documents when the size limit is reached. They’re useful for log files or caching.

Q12. Describe the $lookup operator in MongoDB.
Answer: The $lookup operator performs a left outer join to another collection in the same database. It’s used in aggregation pipelines to combine data from multiple collections.

Q13. What is the ObjectId in MongoDB?
Answer: ObjectId is a 12-byte unique identifier automatically generated for each document in MongoDB if not specified by the user. It consists of a timestamp, machine identifier, process ID, and a random value.

Q14. Explain the concept of “schema-less” in MongoDB.
Answer: MongoDB is schema-less, meaning documents in the same collection can have different fields. This flexibility allows for easy adaptation to changing data requirements without needing to modify a rigid schema.

Q15. What is the difference between save() and insert() methods?
Answer: insert() adds a new document to the collection.
save() inserts a new document if it doesn’t exist, or updates an existing one if the _id matches.

Q16. How does MongoDB ensure high availability?
Answer: MongoDB ensures high availability through replica sets, automatic failover, data redundancy across multiple servers, and read scaling through secondary reads.

Q17. What is the purpose of the explain() method in MongoDB?
Answer: The explain() method provides information about query execution plans. It’s used for query optimization and understanding how MongoDB executes queries.

Q18. Describe MongoDB’s storage engines.
Answer: MongoDB supports multiple storage engines:

WiredTiger: The default since version 3.2, offering better performance and compression.
MMAPv1: The original engine, deprecated in newer versions.
In-Memory: For faster operations when persistence isn’t required.
Q19. How does MongoDB handle transactions?
Answer: Since version 4.0, MongoDB supports multi-document ACID transactions. They can be used across multiple operations, collections, and databases.

Q20. What is the difference between $where and $expr in MongoDB queries?
Answer: $where allows JavaScript expressions in queries but is slower and less secure.
$expr allows the use of aggregation expressions within the query language, offering better performance and security.


Q21. Explain the concept of TTL (Time-To-Live) indexes in MongoDB.
Answer: TTL indexes automatically remove documents from a collection after a specified amount of time or at a specific clock time. They’re useful for managing data like sessions, logs, or temporary data.

Q22. What is BSON in MongoDB?
Answer: BSON (Binary JSON) is the binary-encoded serialization of JSON-like documents that MongoDB uses for document storage and data transfer.

Q23. How do you create a database in MongoDB?
Answer: You can create a database using the command use database_name. If it doesn’t exist, MongoDB creates it when you first store data.

Q24. What is the significance of the _id field in MongoDB documents?
Answer: The _id field serves as a primary key for MongoDB documents. It’s automatically added if not specified and must be unique within a collection.

Q25. Explain the difference between $set and $unset operators.
Answer: The $set operator in MongoDB updates existing fields or adds new ones to a document. In contrast, the $unset operator removes specified fields from a document. $set modifies or creates fields, whereas $unset deletes fields entirely.

Q26. What is the purpose of the $push operator in MongoDB?
Answer: $push adds an element to an array field in a document. If the field doesn’t exist, it creates a new array with the element.

Q27. Explain the concept of covered queries in MongoDB.
Answer: A covered query is one where all fields in the query are part of an index, so MongoDB can return results without examining any documents.

Q28. What is the purpose of the $lookup stage in aggregation?
Answer: $lookup performs a left outer join with another collection in the same database, allowing data combination in aggregation pipelines.

Q29. How does MongoDB handle map-reduce operations?
Answer: MongoDB supports map-reduce operations for complex data processing, though aggregation pipeline is now preferred for most use cases.

Q30. What is the difference between $ and $all operators?
Answer: $and performs a logical AND operation on an array of expressions.
$all matches arrays that contain all elements specified in the query.

Interview Questions
Q31. How can you optimize MongoDB query performance?
Answer: Optimize through proper indexing, using covered queries, avoiding large documents, and using the explain() method to analyze query execution.

Q32. What is the purpose of the $match stage in aggregation?
Answer: $match filters documents to pass only those that match specified conditions to the next pipeline stage.

Q33. Explain the concept of write concerns in MongoDB.
Answer: Write concerns determine the level of acknowledgment requested from MongoDB for write operations, affecting data durability and latency.

Q34. What is the difference between $inc and $mul operators?
Answer: $inc increments a field by a specified value.
$mul multiplies a field by a specified value.

Q35. How does MongoDB handle full-text search?
Answer: MongoDB supports full-text search through text indexes and the $text operator for efficient text-based queries.

Q36. What is the purpose of the $group stage in aggregation?
Answer: $group groups documents by a specified expression and can perform aggregation operations on grouped data.

Q37. Explain the concept of change streams in MongoDB.
Answer: Change streams allow applications to watch for changes in the database in real-time, useful for triggering events or keeping caches updated.

Q38. How to add data in MongoDB?
Answer: Use the insertOne method for single documents and insertMany for multiple documents.

db.books.insertOne({"title": "ScholarHat"})
db.books.insertMany([{"title": "Book1"}, {"title": "Book2"}])
Q39. How can you enforce document validation in MongoDB?
Answer: Use schema validation rules with the $jsonSchema operator to enforce document structure and field types within a collection.

Q40. What is the difference between $elemMatch and $all in MongoDB queries?
Answer: The $elemMatch operator matches documents containing an array field with at least one element that meets all specified criteria. In contrast, the $all operator matches documents where an array field contains all specified elements, regardless of order.

Q41. Explain the Replication Architecture in MongoDB.
Answer: The primary node handles write operations and logs changes in the oplog, which secondary nodes replicate to maintain data consistency.

Q42. What is the purpose of the $out stage in aggregation pipelines?
Answer: The $out stage takes the documents returned by the aggregation pipeline and writes them to a specified collection, either creating a new collection or replacing an existing one.

Q43. Explain the concept of read preferences in MongoDB.
Answer: Read preferences determine how MongoDB clients direct read operations to members of a replica set, allowing for customization of read distribution for performance and reliability.

Q44. What is the difference between $unwind and $flatten in MongoDB?
Answer: The $unwind operator deconstructs an array field from input documents, outputting one document per array element. In contrast, $flatten (introduced in MongoDB 5.0) flattens nested arrays within a document without creating separate documents for each element.

Q45. How does MongoDB handle concurrency control?
Answer: MongoDB uses multi-version concurrency control (MVCC) to allow concurrent reads and writes. Write operations acquire exclusive locks, while read operations use shared locks.

Q46. What is the purpose of the $graphLookup stage in aggregation?
Answer: $graphLookup performs a recursive search on a collection, useful for hierarchical data structures or graph-like data models.

Q47. Explain the concept of the oplog in MongoDB.
Answer: The oplog (operations log) is a special capped collection that keeps a rolling record of all operations that modify data in the database, crucial for replication in MongoDB.

Q48. How can you implement soft deletes in MongoDB?
Answer: Soft deletes can be implemented by adding a boolean field (e.g., ‘isDeleted’) to documents and updating it instead of removing the document, then filtering queries to exclude “deleted” documents.

Q49. What is the purpose of the $merge stage in aggregation pipelines?
Answer: The $merge stage writes the results of an aggregation pipeline to a collection, allowing for sophisticated update strategies like inserting new documents, merging fields, or replacing existing documents.

Q50. Does MongoDB support foreign key constraints?
Answer: No, MongoDB does not support foreign key constraints due to its flexible, document-based structure.

Q51. What is the role of the profiler in MongoDB?
Answer: The MongoDB profiler collects detailed information about database operations. It’s useful for performance tuning and identifying slow queries.

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

Top 10 MongoDB Interview Questions for Freshers
logo
Skill-Lync

MongoDB is one of the most favoured NoSQL databases today. It has quickly become a staple for developers and is used in many applications. While it is easy to learn and use, understanding the basics of MongoDB can be a challenge for new users. 

This article will provide a comprehensive overview of the most commonly asked interview questions on MongoDB for freshers. Taking the time to understand these concepts can help freshers become more confident when applying for job positions that demand knowledge of MongoDB.

MongoDB Interview Questions

Top 10 MongoDB Interview Questions and Answers
Below is a compilation of MongoDB interview questions with answers. 

What do you understand by MongoDB? 
Answer: MongoDB is an open-source, cross-platform, document-oriented database program. It is written in C++ and is developed by MongoDB Inc. It is classified as a NoSQL database, meaning it does not use the traditional table-based relational database structure. Instead, it stores data in JSON-like documents with dynamic schemas, making it more flexible and scalable than its relational database counterparts. 

MongoDB is designed to provide high performance and scalability while providing data consistency and durability. Many organisations use it to store and manage large volumes of data, with complex relationships. MongoDB can be used for various applications, including web applications, mobile applications, analytics, and more. 

What is your understanding of NoSQL databases? Is MongoDB classified as a NoSQL database? Please explain.
Answer: NoSQL databases are a type of database that does not use the traditional Structured Query Language (SQL). Instead, they use non-relational, distributed data stores and are typically used to store large amounts of data that need to be accessed quickly. 

MongoDB is indeed classified as a NoSQL database. MongoDB is a document-oriented database that stores data in documents instead of relational databases' typical row-column structure. It is also a distributed database designed to run on multiple servers in a cluster, allowing for scalability and reliability. MongoDB is also schema-less, meaning it does not require a fixed set of fields or data types. This makes it easier to store and access data flexibly and dynamically. 

How much RAM does MongoDB require? 
Answer: MongoDB does not have a specific RAM requirement, but it is recommended to have at least 2GB of RAM for the basic deployment of MongoDB. If you are running more complex queries or a larger amount of data, you may need more RAM. 

What language was used to create MongoDB? 
Answer: MongoDB was created utilising the C++ programming language. However, many client libraries and drivers are written in other languages, with C Extensions utilised in specific scenarios to boost the performance of the said drivers.

What is the purpose of Indexes in MongoDB?
Answer: Indexes play a key role in MongoDB for efficient query execution. Without the use of indexes, MongoDB is required to scan every single document of a collection to find the documents that match the query statement. 

Nevertheless, if an index that is suitable for the query is available, MongoDB can take advantage of it and restrict the number of documents it has to inspect. 

Why the 32-bit version of MongoDB is not preferred? 
Answer: MongoDB takes advantage of memory-mapped files. Thus, the total storage size of the server is limited to 2GB when a 32-bit build of MongoDB is used. 

However, if you run a 64-bit build of MongoDB, you can access virtually unlimited storage sizes. This makes the 64-bit build of MongoDB the preferred option. 

What kind of database is MongoDB? 
Answer: MongoDB is an open-source, document-oriented database system with a flexible, JSON-like syntax. It is a NoSQL database, which means it does not employ the usual relational database structure of tables. MongoDB, however, stores data in collections of documents that can contain any fields and have no fixed schema. 

How do MySQL and MongoDB differ from one another?
Answer: The difference between MySQL and MongoDB is listed below:difference between MySQL and MongoDB

What does a profiler do in MongoDB?  
Answer: The MongoDB Database Profiler displays the performance of each operation in relation to the database. You can examine all the queries the DB system executes through the profiler. This data can then be employed to identify when an index is required. 

What are the benefits of using MongoDB? 
Answer: The following are the reasons why MongoDB is utilised:

High Performance: MongoDB is highly efficient in terms of performance, being able to store and process large volumes of data quickly.
Scalability: MongoDB is highly scalable, allowing you to store and process data across multiple servers. 
Flexibility: MongoDB is a document database that allows you to store data flexibly and dynamically. 
High Availability: MongoDB is designed to provide high availability and resilience to failures. 
Easy to Use: MongoDB is designed to be easy to use and learn, with a simple query language and powerful indexing capabilities. 
Security: MongoDB provides a range of security features to help ensure the safety of your data.  
Cloud Support: MongoDB can be deployed on various cloud platforms, making it easier to manage and scale. 

25 Advanced MongoDB Interview Questions for Backend Developers
June 18, 2025
·
14 min read
Jump to Category
️ Data Modeling & Schema	Indexing & Query Optimization
Aggregation Framework	Replication & High Availability
Sharding & Scalability	Transactions & Internals
Data Modeling & Schema Design
1. When would you choose to embed a document versus creating a reference to it?
The choice depends on the relationship between the data and the application’s access patterns.

Embed (Denormalization): Choose embedding for “contains” or “has-a” relationships where the child data is frequently accessed with the parent and doesn’t have a meaningful existence on its own (e.g., comments within a blog post). This is highly performant as it avoids extra queries. However, it can lead to large documents and data duplication.
Reference (Normalization): Choose referencing for “uses” or “borrows” relationships, or when the child data is large, frequently updated, or accessed independently (e.g., products and suppliers). This keeps documents smaller and avoids data duplication but requires a separate query (using `$lookup`) to fetch the related data.
2. What is the Bucketing Pattern and what problem does it solve?
The **Bucketing Pattern** is a data modeling strategy where you group related data into a single document (a “bucket”) instead of storing each piece of data in its own document. It’s designed to solve issues with “unbounded” array growth in a one-to-many relationship.

A classic example is storing time-series data, like sensor readings. Instead of one document per reading, you can create one document per hour (the bucket) that contains an array of all readings for that hour. This reduces the total number of documents and the index size, leading to more efficient queries.

Read about the Bucketing Pattern on the MongoDB blog.
3. How can you enforce a schema on your collections in MongoDB?
While MongoDB is schema-less, you can enforce a schema using **JSON Schema validation**, available since version 3.6. You define a validator on a collection using the `$jsonSchema` operator.

This allows you to specify required fields, data types, value ranges, and complex validation rules. You can set a `validationLevel` (off, moderate, strict) to control how it applies to existing documents and a `validationAction` (error or warn) to determine the behavior when a document fails validation.

4. What are Capped Collections? Provide a use case.
Capped collections are fixed-size collections that work like circular buffers. Once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents. They maintain insertion order and do not allow documents to grow in size after they are written.

A primary use case is for storing high-volume log data. You can ensure that you always have the most recent logs without the collection growing indefinitely and consuming all disk space.

5. What is GridFS and when should it be used?
GridFS is a specification for storing and retrieving files that exceed the BSON document size limit of 16 MB. Instead of storing a file in a single document, GridFS divides the file into smaller chunks and stores each chunk as a separate document in one collection, and metadata about the file in another collection.

It should be used when you need to store large files (e.g., images, videos, PDFs) directly in the database and want to access parts of the file without loading the entire thing into memory.

Indexing & Query Optimization
6. What is a covered query in MongoDB?
A covered query is a query that can be satisfied entirely using an index, without needing to examine any documents from the collection itself. This is highly performant as it avoids reading from disk (if the index is in RAM).

For a query to be covered, two conditions must be met:

All the fields in the query’s filter and projection are part of the same index.
The query does not return the `_id` field (unless `_id` is part of the index itself).
You can verify if a query is covered by checking the `executionStats` of an `explain()` plan; the `totalDocsExamined` should be 0. Read the documentation on Covered Queries.
7. Explain compound indexes and the importance of rule of ESR (Equality, Sort, Range).
A **compound index** is an index on multiple fields. The order of fields in the index is crucial for its effectiveness.

The **ESR (Equality, Sort, Range) rule** is a guideline for ordering fields in a compound index:

Equality: Fields on which you will perform an exact match should come first.
Sort: Fields on which you will sort your results (`.sort()`) should come next.
Range: Fields on which you will perform a range query (`$gt`, `$lt`) should come last.
Following this rule helps MongoDB efficiently use the index to select and order data without needing an expensive in-memory sort.

8. What is a multikey index?
A multikey index is created when you create an index on a field that contains an array value. MongoDB creates an index key for *each element* in the array. This allows you to efficiently query for documents where the array field contains a specific value. For example, if a `tags` field contains `[“mongodb”, “database”]`, a multikey index on `tags` would create separate index entries for “mongodb” and “database”, both pointing to the same document.

9. What are partial indexes and when are they useful?
A partial index only indexes the documents in a collection that meet a specified filter expression. By indexing a smaller subset of documents, partial indexes have lower storage requirements and reduced performance costs for creation and maintenance.

They are useful when you frequently query for a specific subset of data. For example, indexing only users with a `status: “active”` or only products with `inventory_count > 0`.

10. How do you analyze a query’s performance using the `explain()` method?
The `db.collection.find().explain(“executionStats”)` method provides detailed statistics about how MongoDB executed a query. Key things to look for in the output are:

`winningPlan.stage`: The final plan used. A `COLLSCAN` (collection scan) is bad; an `IXSCAN` (index scan) is good.
`executionStats.nReturned`: The number of documents returned.
`executionStats.totalKeysExamined`: The number of index keys scanned. Should be close to `nReturned`.
`executionStats.totalDocsExamined`: The number of documents fetched from the collection. Should be close to `nReturned`. A high value here compared to `totalKeysExamined` indicates the index is not very selective.
Aggregation Framework
11. What is the MongoDB Aggregation Pipeline? Describe some common stages.
The Aggregation Pipeline is a framework for performing multi-stage data processing and analysis on a collection. Documents pass through a series of stages, where each stage transforms the documents and passes the results to the next stage.

Common stages include:

`$match`: Filters the documents, similar to a `find()` query. Should be placed early to reduce the amount of data processed.
`$group`: Groups documents by a specified key and allows for accumulating values (e.g., `_id: “$category”, total: { $sum: “$price” }`).
`$project`: Reshapes documents by adding new fields, removing existing fields, or renaming fields.
`$sort`: Sorts the documents.
`$unwind`: Deconstructs an array field, creating a new output document for each element in the array.
`$lookup`: Performs a left outer join to another collection.
Read the official Aggregation Pipeline documentation.
12. How can you optimize the performance of an aggregation pipeline?
Place a `$match` stage as early as possible to filter out documents and reduce the amount of data that needs to be processed by subsequent stages.
If possible, use an index to support the initial `$match` or `$sort` stages.
Use `$project` to remove any unnecessary fields early in the pipeline.
Perform a `$sort` before a `$limit` to reduce the amount of data that needs to be sorted.
13. What is the `$lookup` stage and what are its limitations?
The `$lookup` stage performs a left outer join to another collection in the same database. It adds a new array field to the input documents containing the matching documents from the “joined” collection.

Limitations:

It cannot be used on a sharded “from” collection.
It can be less performant than embedding data, as it requires a separate read operation.
By default, it performs an equality match. More complex correlated subqueries are possible but can be slow if not supported by indexes.
Replication & High Availability
14. What is a replica set and what is its purpose?
A replica set is a group of `mongod` instances that maintain the same data set. Its purpose is to provide redundancy and high availability. A replica set consists of:

One **Primary** node that receives all write operations.
Multiple **Secondary** nodes that replicate the primary’s operation log (oplog) and apply the changes to their own data sets.
If the primary becomes unavailable, the secondaries will hold an election to choose a new primary, allowing the cluster to fail over automatically.

15. Explain the replica set election process.
An election is triggered when a primary is unreachable for more than the configured timeout. The remaining secondary members vote for a new primary.

A member is eligible to be elected if it has the most up-to-date data (highest oplog timestamp) and is in good health. To win, a candidate must receive a majority of the votes from all *surviving* members of the replica set. For this reason, it’s recommended to have an odd number of voting members (e.g., 3 or 5) to avoid a tie. An arbiter can be used to add a vote without holding data.

Read the documentation on Replica Set Elections.
16. What are read preferences and write concerns?
These settings control how your application interacts with a replica set.

Read Preference: Determines which nodes to route read operations to. Options include `primary` (default, strongest consistency), `primaryPreferred`, `secondary` (for scaling read traffic, but data might be slightly stale), `secondaryPreferred`, and `nearest`.
Write Concern: Determines the level of acknowledgment requested from MongoDB for write operations. You can specify that a write must be acknowledged by the primary only (`w:1`), by a majority of nodes (`w:”majority”`), or by a specific number of nodes. A higher write concern provides greater durability at the cost of higher latency.
Read about Read Preference and Write Concern.
Sharding & Scalability
17. When should you consider sharding a MongoDB collection?
Sharding is the process of distributing data across multiple machines to support deployments with very large data sets and high throughput operations. You should consider sharding when:

Your data set is approaching the storage capacity of a single server (vertical scaling is no longer feasible or cost-effective).
The size of your working set (frequently accessed data and its indexes) exceeds the RAM of a single server, leading to high disk I/O.
Your application’s write or read throughput is overwhelming a single server’s capacity.
18. What are the key considerations for choosing a good shard key?
Choosing a good shard key is the most critical decision in a sharded cluster. The key should have:

High Cardinality: A large number of unique values. A key with low cardinality (like a boolean `status` field) would lead to a few massive chunks that cannot be split.
High Frequency: The key should appear frequently in your query patterns to allow for targeted queries that go to a single shard.
Non-Monotonic Growth: A monotonically increasing key (like a timestamp or `_id`) will cause all new inserts to go to the same “hot” shard, creating a bottleneck. A hashed shard key is often used to distribute writes evenly.
Read the guide on Choosing a Shard Key.
19. What is a “hot shard” and how can you avoid it?
A “hot shard” is a shard in a cluster that receives a disproportionately high amount of traffic, creating a performance bottleneck that negates the benefits of sharding. This is almost always caused by a poor shard key. Specifically, using a monotonically increasing key (like a default `_id` or a timestamp) will direct all new inserts to the last shard in the range. The best way to avoid this is to use a **hashed shard key**, which computes a hash of the key’s value to ensure a random, even distribution of writes across all shards.

20. What is the role of the `mongos` router?
The `mongos` is a lightweight routing service in a sharded cluster. Application clients connect to `mongos` instead of directly to the shards. Its job is to:

Route queries to the appropriate shard(s) based on the shard key.
Merge results from multiple shards for queries that cannot be targeted to a single shard.
Provide a single, unified interface to the sharded cluster, making it appear as a single `mongod` instance to the application.
Transactions & Internals
21. Does MongoDB support ACID transactions? Explain their scope.
Yes. MongoDB has supported single-document ACID transactions for a long time. Since version 4.0, it supports **multi-document ACID transactions** across multiple documents, collections, and databases within a replica set. Since 4.2, this extends to sharded clusters.

These transactions provide an “all-or-nothing” execution model, ensuring data integrity for complex operations that must update multiple documents atomically. They are initiated using a client session and have a specific syntax (`session.startTransaction()`, `commitTransaction()`, `abortTransaction()`).

Read the documentation on Transactions.
22. What is the WiredTiger storage engine? What is its role?
WiredTiger is the default storage engine for MongoDB. It is a high-performance, scalable engine responsible for managing how data is stored on disk and in memory.

Key features include:

Document-level Concurrency: It uses optimistic concurrency control, allowing multiple clients to modify different documents in a collection simultaneously.
Compression: It supports compression for collections and indexes (e.g., Snappy, zlib), reducing storage footprint.
Caching: It has its own internal cache to hold frequently accessed data in memory.
Checkpoints: It periodically creates consistent snapshots of the data for durability and crash recovery.
Learn about the WiredTiger Storage Engine.
23. How would you implement optimistic locking in MongoDB?
Optimistic locking is a strategy to handle concurrent updates without using database locks. You can implement it by adding a `version` field to your documents.

The process is:

When you read a document, you also retrieve its `version` number.
When you perform an update, you include the `version` number in the query filter (`{ _id: docId, version: currentVersion }`) and also increment the version number in the update operation (`{ $inc: { version: 1 }, $set: { … } }`).
If the update affects one document, it means you had the correct version and the update succeeded. If it affects zero documents, it means another process updated the document first (changing its version), so your update fails. You can then retry the read-modify-update cycle.
24. What is the oplog and how is it used?
The **oplog** (operations log) is a special capped collection (`oplog.rs`) that keeps a rolling record of all data-modifying operations on your database. It is the core mechanism that enables replication. Secondary nodes continuously monitor the primary’s oplog and apply the operations to their own data sets to stay in sync. Because it’s a capped collection, its size is fixed, and older entries are overwritten as new ones are added.

25. What is the difference between a sparse index and a regular index?
A **regular index** contains an entry for every single document in a collection, even if the indexed field is null

Top 30 MongoDB Interview Questions 2019
by Mohammed on Mar 17, 2018 12:02:52 PM

Top 30 MongoDB Interview Questions 2019

Top 30 MongoDB Interview Questions 2019

Q1. What is MongoDB?
Ans: Mongo-DB is a record database which gives superior, high accessibility and simple adaptability.

Q2. What are the best features of Mongodb?
Ans:

Document-oriented
High performance
High availability
Easy scalability
Rich-query language
Q3. What is a replica set?
Ans: A copy set is a group of mongo examples that host similar data index. In replica set, one hub is essential, and another is auxiliary. From essential to the secondary hub all information replicates.

Q4. How replication works in MongoDB?
Ans: Over different servers, the way toward synchronizing information is known as replication. It gives excess and increment information accessibility with various duplicates of information on various database servers. Replication helps in shielding the database from the departure of a solitary server.

Q5. What is “Namespace” in MongoDB?
Ans: MongoDB stores BSON (Binary Interchange and Structure Object Notation) objects in the collection. The link of the collection name and database name is known as a namespace.

Q6. What is sharding in MongoDB?
Ans: The system of storing data records over different machines is known as Sharding. It is a MongoDB way to deal with the requests of data development. It is the flat segment of data in a database or search engine. Each partition is referred as shard or database shard.

Q7. How can you see the connection used by Mongos?
Ans: To see the association utilized by Mongos utilize db_adminCommand (“connPoolStats”);

Q8. Does an update fsync to disk immediately?
Ans: No. Writes to disk are lazy by default. A write may only hit the disk a couple of seconds later. For example, if the database receives thousand increments to an object within one second, it will only be flushed to disk once. (Note: fsync options are available both at the command line and via getLastError_old.)

Q9. How do I do transactions/locking?
Ans: MongoDB does not use traditional locking or complex transactions with rollback, as it is designed to be light weight, fast and predictable in its performance. It can be thought of how analogous is to the MySQL’s MyISAM autocommit model. By keeping transaction support extremely simple, performance is enhanced, especially in a system that may run across many servers.

Q10. Why are data files so large?
Ans: MongoDB does aggressive preallocation of reserved space to avoid file system fragmentation.

Q11. When using replication, can some members use journaling and others not?
Ans: Yes!

Q12. Can journaling feature be used to perform safe hot backups?
Ans: Yes!

Q13. What is 32-bit nuances?
Ans: There is an extra memory mapped file activity with journaling. This will further constrain the limited db size of 32-bit builds. For now, journaling by default is disabled on 32-bit systems.

Q14. Will there be journal replay programs in case of incomplete entries (if there is a failure in the middle of one)?
Ans: Each journal (group) write is consistent and won’t be replayed during recovery unless it is complete.

Q15. Are null values allowed?
Ans: Yes, but only for the members of an object. A null cannot be added to the database collection as it isn’t an object. But {}can be added.

Q16. Is it required to call ‘getLastError’ to make a write durable?
Ans: No. If ‘getLastError’ (aka ‘Safe Mode’) is not called, the server does exactly behave the way as if it has been called. The ‘getLastError’ call simply allows one to get a confirmation that the write operation was successfully committed. Of course, often you will want that confirmation, but the safety of the write and its durability is independent.

Q17. Should you start out with Sharded or with a Non-Sharded MongoDB environment?
Ans: We suggest starting with Non-Sharded for simplicity and quick startup, unless your initial data set will not fit on single servers. Upgrading to Sharded from Non-sharded is easy and seamless, so there is not a lot of advantage in setting up Sharding before your data set is large.

Q18. What is the role of profiler in MongoDB?
Ans: MongoDB includes a database profiler which shows performance characteristics of each operation against the database. With this profiler you can find queries (and write operations) which are slower than they should be and use this information for determining when an index is needed.

Q19. When an object attribute is removed, is it deleted from the store?
Ans: Yes, you can remove the attribute and then re-save() the object.

Q20. How long does replica set failover take?
Ans: It may take 10-30 seconds for the primary to be declared down by the other members and a new primary to be elected. During this window of time, the cluster is down for primary operations i.e writes and strong consistent reads. However, eventually consistent queries may be executed to secondaries at any time (in slaveOk mode), including during this window.

Q21. What’s a Master or Primary?
Ans: This is a node/member which is currently the primary and processes all writes for the replica set. During a failover event in a replica set, a different member can become primary.

Q22. What’s a Secondary or Slave?
Ans: A secondary is a node/member which applies operations from the current primary. This is done by tailing the replication oplog (local.oplog.rs). Replication from primary to secondary is asynchronous, however, the secondary will try to stay as close to current as possible (often this is just a few milliseconds on a LAN).

Q23. How does Sharding work with replication?
Ans: Each Shard is a logical collection of partitioned data. The shard could consist of a single server or a cluster of replicas. Using a replica set for each Shard is highly recommended.

Q24. When will data be on more than one Shard?
Ans: MongoDB Sharding is range-based. So all the objects in a collection lie into a chunk. Only when there is more than 1 chunk there is an option for multiple Shards to get data. Right now, the default chunk size is 64mb, so you need at least 64mb for migration.

Q25. What happens when a document is updated on a chunk that is being migrated?
Ans: The update will go through immediately on the old Shard and then the change will be replicated to the new Shard before ownership transfers.

Q26. What happens when a Shard is down or slow when querying?
Ans: If a Shard is down, the query will return an error unless the ‘Partial’ query options is set. If a shard is responding slowly, Mongos will wait for it.

Q27. Can the old files in the ‘moveChunk’ directory be removed?
Ans: Yes, these files are made as backups during normal Shard balancing operations. Once the operations are done then they can be deleted. The clean-up process is currently manual so this needs to be taken care of to free up space.

Q28. How do you see the connections used by Mongos?
Ans: The following command needs to be used: db._adminCommand(“connPoolStats”);

Q29. What are the disadvantages of MongoDB?
Ans:

A 32-bit edition has 2GB data limit. After that it will corrupt the entire DB, including the existing data. A 64-bit edition won’t suffer from this bug/feature.
Default installation of MongoDB has asynchronous and batch commits turned on. Meaning, it lies when asked to store something in DB and commits all changes in a batch at a later time in future. If there is a server crash or power failure, all those commits buffered in memory will be lost. This functionality can be disabled, but then it will perform as good as or worse than MySQL.
MongoDB is only ideal for implementing things like analytics/caching where impact of small data loss is negligible.
In MongoDB, it’s difficult to represent relationships between data so you end up doing that manually by creating another table to represent the relationship between rows in two or more tables.
Q30. Mention how you can inspect the source code of a function?
Ans: To inspect a source code of a function, without any parentheses, the function must be invoked.

MongoDB Interview Questions and Answers
Find 100+ MongoDB interview questions and answers to assess candidates' skills in NoSQL databases, document modeling, indexing, aggregation, and performance optimization.
By
WeCP Team
Table of Content
MongoDB Interview Questions for Beginners
MongoDB Interview Questions for Intermediate
MongoDB Interview Questions for Experienced
MongoDB Interview Questions and Answers for Beginners
1. What is MongoDB, and how does it differ from relational databases?
2. What is a document in MongoDB?
3. What is a collection in MongoDB?
4. What is a database in MongoDB?
Schedule A Demo
Assess Candidate's Skills
As businesses increasingly adopt NoSQL databases for scalability and flexibility, recruiters must identify MongoDB experts who can design, manage, and optimize document-based databases efficiently. With expertise in schema design, indexing, replication, and aggregation, MongoDB professionals play a key role in handling large-scale data processing and real-time applications.

This resource, "100+ MongoDB Interview Questions and Answers," is tailored for recruiters to simplify the evaluation process. It covers topics from MongoDB fundamentals to advanced database management, including sharding, performance tuning, security, and cloud integration.

Whether hiring MongoDB developers, database administrators (DBAs), or data engineers, this guide enables you to assess a candidate’s:

Core MongoDB Knowledge: Understanding of collections, documents, CRUD operations, and BSON format.
Advanced Skills: Indexing, aggregation pipeline, replication, and sharding strategies.
Real-World Proficiency: Performance optimization, backup strategies, and integrating MongoDB with cloud platforms like AWS, Azure, and GCP.
For a streamlined assessment process, consider platforms like WeCP, which allow you to:

✅ Create customized MongoDB assessments with hands-on database challenges.
✅ Include real-world data modeling tasks to test schema design and query performance.
✅ Conduct remote proctored exams to ensure test integrity.
✅ Leverage AI-powered evaluation for faster and more accurate hiring decisions.

Save time, improve hiring efficiency, and confidently recruit MongoDB professionals who can manage high-performance, scalable NoSQL databases from day one.

MongoDB Interview Questions for Beginners
What is MongoDB, and how does it differ from relational databases?
What is a document in MongoDB?
What is a collection in MongoDB?
What is a database in MongoDB?
What data formats can MongoDB store?
How do you insert a document into a MongoDB collection?
What is the MongoDB shell, and how is it used?
How do you query data in MongoDB?
What is the MongoDB query language (MQL)?
How do you update a document in MongoDB?
How do you delete a document from a collection in MongoDB?
What is the difference between find() and findOne() in MongoDB?
What are indexes in MongoDB, and why are they important?
How do you create an index in MongoDB?
What is the ObjectId in MongoDB?
How do you filter data in MongoDB using comparison operators?
How do you perform sorting in MongoDB?
What is the purpose of the limit() method in MongoDB?
How do you count the number of documents in a collection?
What is the aggregation framework in MongoDB?
What are the basic aggregation operations in MongoDB?
What is the $match stage in MongoDB aggregation?
What is the $project stage in MongoDB aggregation?
What is the $group stage in MongoDB aggregation?
How do you connect to a MongoDB database from a Node.js application?
What is the difference between db.collection.find() and db.collection.findOne()?
How do you define a schema in Mongoose (MongoDB ODM for Node.js)?
How do you handle errors when working with MongoDB in Node.js?
How do you perform a full-text search in MongoDB?
What is the $or operator in MongoDB queries?
What is the $and operator in MongoDB queries?
What is the difference between update() and updateOne()?
What is the insertMany() method in MongoDB?
How do you perform a lookup or join in MongoDB using aggregation?
What is the difference between a field and an index in MongoDB?
What is a capped collection in MongoDB?
What are the advantages of using MongoDB over traditional SQL databases?
What is replication in MongoDB, and how does it work?
What is the role of the primary node in MongoDB replication?
How does MongoDB handle consistency and durability?
MongoDB Interview Questions for Intermediate
What is the difference between insertOne() and insertMany() in MongoDB?
What are the advantages of using MongoDB’s schema-less design?
What is sharding in MongoDB, and how does it work?
How do you perform a multi-field index in MongoDB?
What are some best practices for indexing in MongoDB?
What is the default write concern in MongoDB, and how can it be changed?
How does MongoDB handle consistency in a replica set?
What is a replica set, and how is it configured in MongoDB?
What is the write concern in MongoDB, and how do you configure it?
What are the different types of read concerns in MongoDB?
What is a transaction in MongoDB, and when would you use it?
How do you enable transactions in MongoDB?
What is the purpose of the $lookup operator in MongoDB aggregation?
How do you perform bulk write operations in MongoDB?
What is the difference between findAndModify() and update() in MongoDB?
What are MongoDB’s data types, and how do they differ from SQL data types?
How do you enable MongoDB authentication, and what types of authentication methods does it support?
What is the purpose of the aggregate() method in MongoDB?
How does MongoDB handle large datasets and performance optimization?
What are the advantages and disadvantages of MongoDB’s NoSQL model?
What is the difference between replica set and master-slave replication in MongoDB?
What is the role of mongos in MongoDB sharding?
What is a compound index, and when should it be used?
What are some strategies to handle large-scale data in MongoDB?
What is the purpose of the $unwind operator in MongoDB aggregation?
How do you perform a map-reduce operation in MongoDB?
How does the $text search work in MongoDB?
How can you prevent MongoDB from creating unnecessary indexes?
What is the difference between the wiredTiger storage engine and MMAPv1 in MongoDB?
How do you scale MongoDB horizontally?
How do you backup and restore a MongoDB database?
What are the different replication factors in MongoDB?
How does MongoDB handle data consistency during network partitions (CAP Theorem)?
How do you perform schema design and data modeling in MongoDB?
How do you handle large binary data (e.g., images or videos) in MongoDB?
How can you optimize query performance in MongoDB?
What are capped collections, and how do they differ from regular collections?
What is the purpose of write concern and read concern in MongoDB transactions?
How can you configure automatic failover in MongoDB?
How do you handle data migrations between MongoDB clusters?
MongoDB Interview Questions for Experienced
How would you design a data model for a large-scale application in MongoDB?
What are some challenges you’ve encountered when scaling MongoDB in production?
How would you design a MongoDB cluster to ensure high availability and fault tolerance?
How do you optimize MongoDB performance in a large-scale distributed environment?
What strategies would you use to monitor and troubleshoot MongoDB in production?
How do you handle schema evolution and migrations in MongoDB?
What are the advantages and limitations of MongoDB’s sharding architecture?
How do you handle data consistency in a multi-region MongoDB deployment?
How does MongoDB handle replication lag, and how do you minimize it?
How would you troubleshoot slow queries in MongoDB, and what tools would you use?
How do you handle write-heavy workloads in MongoDB without affecting performance?
How do you implement custom sharding strategies in MongoDB?
How would you design a hybrid cloud and on-premise MongoDB deployment?
What is the difference between oplog and write-ahead logs in MongoDB?
How would you implement a distributed lock in MongoDB?
How do you scale MongoDB to handle millions of requests per second?
How do you handle transactional consistency across multiple replica sets in MongoDB?
How do you ensure data privacy and security in MongoDB deployments?
What are the key trade-offs between MongoDB and relational databases for complex transactions?
What is the role of the mongod process in MongoDB architecture?
How do you manage backups and restore for sharded clusters in MongoDB?
What is the impact of write concern on performance in MongoDB?
How would you implement an efficient data retention strategy in MongoDB?
How does MongoDB handle network partitioning and its impact on availability?
How can you prevent duplicate data in MongoDB collections without enforcing schema?
How would you optimize a MongoDB cluster that has high read/write latency?
How would you manage and distribute workloads across MongoDB replica sets?
What is the purpose of read preference in MongoDB, and when should you use it?
How do you configure MongoDB for multi-tenant applications?
How would you perform data sharding in a time-series MongoDB database?
What is the best way to handle concurrency control in MongoDB?
How do you set up a MongoDB monitoring solution for large-scale production environments?
What are the key differences between write concern and read concern in MongoDB?
How do you implement backup and recovery strategies in MongoDB for a sharded cluster?
How would you implement data versioning in MongoDB?
How do you handle very large JSON-like documents in MongoDB without causing performance issues?
What is the impact of MongoDB’s eventual consistency model on your application?
How do you plan for capacity and resource allocation in a large MongoDB deployment?
How do you handle managing configuration changes in a MongoDB sharded cluster?
How would you implement automated failover and disaster recovery in MongoDB?
MongoDB Interview Questions and Answers for Beginners
1. What is MongoDB, and how does it differ from relational databases?
MongoDB is an open-source, document-oriented NoSQL database designed to store, manage, and retrieve large volumes of unstructured, semi-structured, or structured data. It uses BSON (Binary JSON) format to store data, which allows for flexibility in representing complex data structures, including arrays and embedded documents. Unlike traditional relational databases (RDBMS) such as MySQL, PostgreSQL, or Oracle, which store data in tables with predefined schemas and rows/columns, MongoDB organizes data in collections of documents, and it does not require a fixed schema, allowing documents within a collection to have different fields.

Key Differences:

Data Model:
MongoDB: Data is stored in documents (similar to JSON), and documents are grouped into collections. Each document can have a unique structure with various data types.
Relational Databases: Data is stored in tables, consisting of rows and columns. Each table has a predefined schema with strict data types and constraints on columns.
Schema Flexibility:
MongoDB: MongoDB is schema-less at the collection level, meaning that documents within a collection can have different structures. It’s particularly useful for handling dynamic or evolving data structures.
Relational Databases: Relational databases require a fixed schema, meaning every row in a table must adhere to the same structure. Changing the schema typically requires complex migrations.
Scalability:
MongoDB: MongoDB is designed for horizontal scaling through sharding. Sharding involves distributing data across multiple machines or clusters, which makes it easy to scale out as the data grows. This provides MongoDB with high availability and fault tolerance.
Relational Databases: Relational databases typically scale vertically, meaning adding more power (CPU, RAM, etc.) to a single server. Some relational databases support clustering, but this is often complex and expensive to manage.
Transactions:
MongoDB: MongoDB supports ACID transactions since version 4.0, but by default, it follows an eventual consistency model, which means data may not be immediately consistent across distributed nodes. It focuses on availability and partition tolerance (as per the CAP theorem).
Relational Databases: Relational databases have strong support for ACID (Atomicity, Consistency, Isolation, Durability) transactions, ensuring data integrity and consistency at all times.
Joins:some text
MongoDB: Does not natively support joins like relational databases. Instead, it encourages denormalization (embedding documents) to reduce the need for joins. You can use the $lookup operator to perform join-like operations, but it’s less efficient than traditional SQL joins.
Relational Databases: Joins are an integral part of relational databases, allowing you to link data from different tables using primary and foreign keys. Joins are efficient for queries involving multiple entities, but they can become slower with large data volumes.
Data Integrity and Constraints:some text
MongoDB: MongoDB does not enforce foreign key constraints, unique constraints (except on the _id field), or other relational integrity constraints unless explicitly configured using validation rules. This provides flexibility but places the responsibility of maintaining integrity on the developer.
Relational Databases: Relational databases are built around strict data integrity and referential integrity constraints, ensuring that relationships between tables are maintained through primary/foreign keys and other constraints (e.g., UNIQUE, NOT NULL).
MongoDB is an ideal choice for applications that need to handle large volumes of diverse or unstructured data, require rapid development cycles, and need to scale horizontally across distributed systems. On the other hand, relational databases are better suited for applications with complex queries, strict transactional requirements, and well-defined schemas.

2. What is a document in MongoDB?
A document in MongoDB is the primary unit of storage in a collection. It is represented in BSON (Binary JSON) format, which is a binary encoding of JSON that allows MongoDB to efficiently store and retrieve data. A document is a set of key-value pairs where the keys are field names and the values can be various data types such as strings, numbers, arrays, embedded documents, and even binary data.

Documents are schema-less, meaning that each document in a collection can have different fields, data types, and structures. This flexibility allows MongoDB to handle dynamic, evolving, or incomplete data more easily than relational databases, which require a fixed schema.

Each document in MongoDB has an automatic field called _id, which acts as a unique identifier for the document within the collection. If you don't explicitly set the _id field, MongoDB will generate an ObjectId, a 12-byte identifier that ensures the uniqueness of the document.

Example of a MongoDB document:

{
  "_id": ObjectId("62ac8f0a3aee4a1e14b0201b"),
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipcode": "10001"
  },
  "tags": ["developer", "mongodb"]
}
Fields: "name", "age", "email", "address", "tags", etc.
Values: Can be a variety of data types (string, number, array, embedded document).
Embedded Document: The "address" field contains another document as its value.
Array: The "tags" field is an array of strings.
This document can be inserted into a MongoDB collection and queried, updated, or deleted using MongoDB's query language.

3. What is a collection in MongoDB?
A collection in MongoDB is a group of MongoDB documents that are stored together. Collections are analogous to tables in relational databases but do not require a fixed schema, allowing different documents in the same collection to have different structures. Collections are created automatically when the first document is inserted.

No predefined schema: Unlike relational databases, MongoDB collections are schema-less, meaning documents within a collection can have fields and data types that differ from one another.
Automatic Creation: You do not need to explicitly define a collection before inserting data. MongoDB creates a collection automatically when a document is inserted into it.
Grouped Data: Collections group related documents, which makes it easier to manage and query data.
For example, you might have a collection called users that stores documents representing different users of an application, each with different fields depending on the user's data.

Example of collection usage:

Collection Name: users
Document: A document in this collection could represent a user, with fields like name, age, email, and address.
While collections do not enforce schema constraints, MongoDB allows you to set validation rules to enforce data integrity within a collection, ensuring certain fields or values conform to a specified format or type.

4. What is a database in MongoDB?
A database in MongoDB is a container for collections. A MongoDB instance can host multiple databases, and each database is independent from the others. You can think of a database as a logical container for storing your collections. When a MongoDB instance is started, it provides a default database called test, but you can create any number of databases based on your application’s requirements.

A MongoDB database consists of collections, and each collection consists of documents. The data inside a database is isolated from other databases, meaning that operations like queries, updates, or deletes are scoped to the selected database.

Multiple Databases: You can have different databases for different projects, environments (e.g., development, production), or logical separation of data (e.g., ecommerce, socialMedia).
Automatic Creation: Like collections, databases are also created automatically when you first insert data into them.
Database Operations: Common operations include creating new collections, switching between databases using the use <dbName> command, and performing CRUD operations on data within a database.
Example of database commands in the MongoDB shell:

use ecommerce;  // Switch to the 'ecommerce' database
db.products.insertOne({ name: "Laptop", price: 999.99 }); // Insert a product into the 'products' collection
‍
MongoDB Basics
What is MongoDB? Explain some key features of MongoDB.
MongoDB is a popular document-oriented NoSQL database that stores data in flexible, JSON-like documents with dynamic schemas. Key features include:

Document model – Stores data in documents similar to JSON objects allowing for dynamic and flexible schemas
High performance – Integrated caching layer for fast queries and indexes
High availability – Replica sets and automatic failover provide redundancy and high availability
Horizontal scalability – Automatic sharding partitions and distributes large datasets across machines
Rich queries – Supports flexible ad-hoc queries and indexing similar to SQL databases
Multi-document ACID transactions – Allows complex multi-document transactions with roll back capabilities
What are the advantages of using MongoDB over SQL databases?
Some key advantages include:

Schemaless – Documents can have varying sets of fields, format and content
Horizontal scalability through automatic sharding
Easy replication and high availability
Supports complex multi-document ACID transactions
Better performance due to native non-relational data model
Rich indexing and query capabilities including aggregation
What are the typical use cases where MongoDB works very well?
MongoDB works great for:

Content management and delivery
Mobile and social infrastructure
User data management and analytics
Data hub for microservices
It’s also used by a lot of internet and e-commerce companies due to its scalability.

What are some limitations of MongoDB?
Some limitations are:

Less mature than relational databases
No native multi-document joins or complex multi-collection transactions
Database level multi-document transactions only added recently
Limited and slower complex analytical queries compared to SQL databases and data warehouses
Core MongoDB Concepts
Explain MongoDB database components – database, collection, document.
The key components are:

Document – A record in a MongoDB collection and the basic unit of data in MongoDB. Similar to JSON objects but exist inside collections.
Collection – A group of MongoDB documents, equivalent to a table in relational databases. Documents in a collection can have varying sets of fields.
Database – A container for MongoDB collections. Organizes collections per functional area. Can have multiple databases per MongoDB server instance.
How are indexes different in MongoDB compared to SQL databases?
In MongoDB, indexes work similarly for faster queries by sorting documents in the collection. Some key differences are:

Automatically created on _id field for every collection
Operate on document fields instead of table columns
Support indexing on embedded document fields
Compound indexes can include multiple fields
Unique indexes enforced for document uniqueness
What data types does MongoDB support?
MongoDB supports:

String – UTF-8 valid strings
Integer – Numeric integers e.g. 32 bit, 64 bit
Boolean – True / False
Double – 64-bit IEEE floating point
Decimal128 – 128-bit decimal floating point
ObjectIds – Default value for _id field
Date – Stores date and time in Unix format
Timestamp – Special internal type
Arrays – Stores arrays and embedded documents including other arrays
When should I embed documents vs linking them?
Rules of thumb:

Embed when there is containment relationship between entities
Embed when embedded data is mostly read-only
Embed small documents for better performance
Link documents when relationships get complex with multiple parent entities
Link documents that grow rapidly or are updated often
How does MongoDB handle high availability and reliability?
MongoDB achieves high availability through replica sets where copies of data are hosted on multiple servers. If the primary node fails, an election process chooses a secondary node to become the new primary.

It ensures reliability through:

Replica sets with automatic failover
Configurable write concern to acknowledge writes
Journaling to recover damaged data files
Read preference modes to send reads to secondary nodes
What is sharding in MongoDB? When should you shard a database?
Sharding is the process of partitioning data across multiple MongoDB server instances called shards, allowing for horizontal scaling as data volume and read/write loads increase for a database.

Good cases for sharding are:

Database size approaching storage limits of a single MongoDB server
Write and read loads approaching IOPS limits of standalone replication
Before sharding, typically indexing and replication are used to optimize database performance.

Advanced Concepts
How does journaling work in MongoDB? What options can you configure?
Journaling writes all database operations sequentially to disk before changes are applied. This maintains a rollback position for unapplied changes in case recovery is needed.

Configurable options include:

Enabled (default) – Enables journal files to be created
Disabled – Disable journaling which improves write performance but lose ability to recover to a point in time state.
Durability can also be tuned via write concern options.

What is a storage engine in MongoDB? Name some storage engines.
The storage engine is the internal software component that determines how MongoDB stores data on disk, manages memory and caches query results. Storage engines interface with the MongoDB query engine.

Popular storage engines include:

WiredTiger (default) – Document level concurrency control and compression
In-Memory (ephemeral) – All data in RAM, meant for high perf testing environments
Encrypted – Encrypts data files with on disk encryption
How does data consistency work in MongoDB?
MongoDB preserves data consistency through transactions:

On write level using the default write concern “w:1” which waits for writes to apply fully before returning success.
Multi-document ACID transactions maintain document level consistency in a single statement across a replica set.
Read concern levels control visibility of document changes across a replica set during transactions.
Additional mechanisms like unique indexes and sharding balances also help prevent conflicts.

How can you achieve ACID transactions in MongoDB?
MongoDB 4.0+ provides multi-document ACID transaction support ensuring atomicity, consistency, isolation and durability across operations on multiple documents and collections. Steps involve:

Starting a transaction session using client session API
Executing transaction operations – insert, update, delete
Commiting using commitTransaction to apply changes
Transactions provide all-or-nothing execution, locks and isolation from other operations enabling complex workflows.

What are MongoDB aggregations? Why are they important?
Aggregations are complex analytical queries which process data and return computed results. They build analytical pipelines similar to the SELECT and GROUP BY concepts in SQL.

Key capabilities include:

Filtering row-level documents using $match
Transformation using $project, $addFields
Aggregate computations like counts, sums, averages
Analytic grouping and processing using $group, $sort, $limit
Aggregations are important for deriving business insights from large amounts of operational data.

Query Tuning and Optimization
How can you improve query performance in MongoDB? Mention some key methods.
Key ways include:

Adding indexes on fields used for filters, sorts and projections
Using covered queries so all required fields come from indexes
Pre-joining data via $lookup to avoid client-side logic
Avoiding non-selective queries that process huge resultsets
Batching reads and writes to reduce overheads
Analyzing slow queries using database profiler
When should you create indexes in MongoDB? What considerations should you keep in mind?
Indexes should be added for fields used extensively in:

Equality matches and filters like email, usernames
Sorting operations
Geospatial queries
Considerations:

Indexes impose overheads for writes so avoid over-indexing
Optimize indexes via indexing sorted schemas and selective ranges
Drop indexes not utilized by queries to minimize overhead
The database profiler helps analyze index usage.

How does MongoDB handle large datasets which don’t fit in RAM?
MongoDB can work with datasets larger than available RAM through:

Memory-mapped files representing data files for fast access
WiredTiger compression reducing file sizes
Indexes which fit in memory providing fast access without entire dataset in RAM
Streaming sequential scans of datasets on disk without pulling everything into memory
However, performance is optimal when indexes and the working dataset fits memory.

How can you optimize memory utilization in MongoDB?
Key ways include:

Use smaller indexes optimized for essential queries
Set cache size to fit important indexes/data in RAM
Configure wiredTigerCursorHint for long running queries
Enable compression to reduce database size on disk
Use sharding and replicas to spread memory load
How does concurrency work in MongoDB? How is it different from SQL databases?
MongoDB uses multi-granularity locking at the document level unlike SQL databases which have table level locking allowing for greater concurrency.

Other concurrency mechanisms include:

Reader-writer locks allowing parallel readers
Multi-document transactions isolate operations and lock affected documents
Snapshot isolation via readConcern option
No dirty reads of uncommitted data like SQL databases
Overall, MongoDB scales better with increased users and load compared to SQL databases.

What are dollar ($) prefixed operators in MongoDB? Provide some examples.
The dollar prefixed operators provide a variety of document processing capabilities including:

$lookup – Joins documents between collections
$match – Filters documents
$project, $addFields – Reshapes documents adding/removing fields
$group – Aggregate records by a key
$sort, $skip, $limit – Sorting and pagination
$graphLookup – Recursive document joins
These operators power the flexible aggregations framework.

Administration and Architecture
How can you achieve horizontal scalability in MongoDB?
MongoDB can horizontally scale databases across many commodity servers via:

Sharding – Automatic partitioning of data by key range across shards. Spread data across shards to utilize additional CPU and storage.

Replica Sets – Maintain redundant copies of data on different servers. Spread load across secondaries while enabling high availability.

Both sharding and replication provide horizontal scalability for databases as load increases.

What components make up a MongoDB replica set? Explain their roles.
A MongoDB replica set has following member components:

Primary – The main node receiving all write operations which then get replicated asynchronously to secondaries.
Secondary – Holds replicated copies of primary’s data. Used for reads and backup but no writes.
Arbiter – Does not hold data but participates in elections. Breaks ties when voting on primary.
Hidden – Holds replicated data but is invisible to client applications during failover.
You have a 3 member MongoDB replica set and the primary goes down. Explain the failover process.
When the primary goes down, an election will be initiated by the cluster. The secondaries will hold an election to pick a new primary:

Both secondaries increment their optime (operation time) and compare with each other.
The secondary with the latest optime wins and gets voted primary by the other secondary.
The arbiter breaks vote ties between secondaries, if any.
The elected secondary gets promoted to be primary and begins accepting writes.
The old primary, when restored, will resync data from new primary and join back as a secondary.
Your MongoDB deployment uses a cluster with replica set and shards. Draw a diagram depicting it.
How does connection pooling work in MongoDB? Should you use it?
Connection pooling maintains a cache pool of connections to the mongod database instead of creating new client connections every time. This improves performance and reduces latency by reusing connections from the pool instead of repeatedly connecting afresh.

Benefits include:

Faster queries due to reduced overhead of creating new TCP connections and handshakes
Reuse authentication, indexes and cached data associated with connections
Configurable max pool size limiting connections to avoid overloading DB
So connection pooling should generally be enabled.

How can you backup and restore MongoDB databases? What options do you have?
The main approaches for backup and restore are:

File system snapshots – Direct file system snapshots of MongoDB data files and metadata. Restores involve replacing original data files with the snapshotted files.

mongodump and mongorestore utilities – Simple single-node backup via mongodump producing BSON files from a database. Supports interactive restores via mongorestore.

Ops Manager backup – Full cluster, point-in-time recovery integrated with Ops Manager monitoring. Handles sharding and replication automatically.

There are also managed cloud services providing backup functionalities for MongoDB Atlas database as a service.

How can you secure your MongoDB databases against unauthorized access?
Primary ways to secure MongoDB databases include:

Authentication – via usernames and passwords at all layers
Network encryption – SSL/TLS, VPN for encrypting communication
Access control – Role based authorization controls resource access
Encryption at rest – Encrypt stored data files via encryption keys
Penetration testing – Regularly security audit MongoDB deployment
Additionally, follow security best practices for user roles, firewalls, OS hardening etc.

You have a huge collection called LogData over 1 TB in size. It is growing rapidly each month. How can you effectively manage this in MongoDB?
For optimal management of such huge and rapidly growing datasets:

Use archival for historical log data into lower grade storage
Introduce an intelligent partitioning strategy like by year or month
Shard collection horizontally across serve clusters
Compress data efficiently using sharding and storage engine compression
Restrict indexes to only necessary fields instead of entire documents
Sharding plus archiving older, less accessed partitions can effectively scale performance. Intelligent data lifecycle management is key.

Application Development and Tooling
Compare MongoDB with DynamoDB. What are the pros and cons of each?
MongoDB

Pros:

More controls and flexibility including indexing, data model
Tunable consistency, durability etc
Aggregation framework and complex querying
Sharding, access controls and operational tooling
Multi cloud and on-prem deployment options
Cons:

Requires server setup and management
No serverless or consumption based pricing
DynamoDB

Pros:

Fully managed, serverless database
Consumption based pricing, no servers to manage
Integrated with other AWS services
SSD backed storage with auto scaling capabilities
Cons:

Proprietary data store with restricted access controls
Limited query, index and data modeling capabilities
Vendor and technology lock-in
Your application uses MongoDB to store user profiles, games scores and analytics events. Design a document model keeping in mind ease of access.
Here is one approach for the document model:

User Profile

{
   _id: "user1",
   name: "John",
   email: "john@example.com",
   addresses: [
      {
         street: "123 Main St",
         city: "Anytown",
         state: "CA"   
      }
   ]
}
Game Scores

{
   _id: new ObjectId(),
   user_id: "user1", 
   game_id: "chess_553",
   score: 10,
   date: ISODate() 
}
Analytics Events

{
   _id: new ObjectId(),
   user_id: "user1",
   event: "login", 
   timestamp: ISODate(),
   context: {
      device: "Pixel 5"
   }
}
Keeping embedded related data improves lookup performance over references. Highly variable fields can go into sub-documents.

You need to migrate a relational database to MongoDB. What would be your strategy?
The migration approach would be:

Analyze the schema – table relationships, constraints, data types
Map entities to MongoDB collections and SQL joins to document embedding/linking
Model one-to-many relationships using document references
Implement validation rules for data integrity needs
Incrementally migrate individual tables data using MongoDB import tools
Optimize indexes, queries and validate migrated data statistics
Incrementally shift read/write traffic from old database to MongoDB
Doing the migration incrementally while keeping the old system as backup allows for gradual transition monitoring for issues.

Your application uses MongoDB to store product details, inventory status and orders. Design an efficient schema keeping in mind ease of access and storage needs.
Here is one approach for the schema:

Product Details

{
  _id: "prod_553",
  name: "Leather Boots",
  description: "Durable leather boots", 
  category_id: "footwear_123", 
  images: [ "http://image1.png", "http://image2.png"] 
}
Inventory Status

{
  _id: new ObjectId(),
  product_id: "prod_553",
  warehouse: "ABC",
  qty_available: 500 
}
What are some best practices when designing MongoDB schemas for applications?
Some key best practices include:

Structure related data together via embedding for better data locality
Use sub-documents to store arrays or variable attributes
Duplicate some data across documents if it avoids expensive joins
Split volatile attributes (like logs) and static attributes into separate collections
Use database references to link related data that may exceed 16MB document size limits
Your application needs to optimize storage usage in MongoDB for analytics collection. What options would you consider?
Some good options to optimize storage are:

Introduce TTL indexes to auto-delete old documents
Use MongoDB Charts for analyzing storage and growth
Compress data and indexes using compression libraries
Set relevant caching settings for better RAM usage
Shard collection across clusters to distribute storage needs
What are some alternatives to MongoDB as a document database?
Some popular alternatives are:

CouchDB – Open source JSON document store focused on web apps
Elasticsearch – Search and analytics engine with JSON documents
CosmosDB – Microsoft’s distributed and scalable document database
DynamoDB – Amazon’s key-value and document database with managed option
RethinkDB – Open source distributed JSON document database
What are some key drivers leading to adoption of MongoDB?
Drivers leading adoption include:

Ability to scale up via horizontal scalability
Flexible JSON-style data model fitting modern apps
Speed and performance gains compared to relational databases
Agile methodology friendly due to schema flexibility
Rich platform capabilities including indexing, aggregation, transactions etc.
As modern internet and mobile apps grow, MongoDB addresses their scaling and performance demands effectively.

Operations, Scalability and Reliability
As a DBA, how can you monitor performance and track issues in production MongoDB deployments?
Good ways to monitor MongoDB include:

Enabling the free MongoDB Cloud Manager to get overview charts
Setting up the database profiler to analyze slow queries
Tracking real-time stats using database commands like db.stats()
Enabling CloudWatch metrics for managed deployments
Getting alerts for replication lag, connection errors etc.
This helps diagnose root causes like bad indexes, slow disks, replica set issues etc.

How can you benchmark performance when migrating from a relational database like MySQL to MongoDB?
Approaches for benchmarking include:

Use consistent test datasets across both databases
Identify typical reads vs writes vs analytics queries
Script test queries covering various use cases
Parameterize complex queries for dynamic values
Ensure indexes, memory settings are well tuned
Measure metrics – throughput, response times, resource usage
This gives comparative insights on MongoDB gains for app queries.

As your cluster grows, how can you ensure optimal utilization of memory and storage resources in MongoDB?
Some ways to optimize resource utilization are:

Storage: Sharding and archiving older data into cheaper storage
Memory: Capping indexes to essential fields via partial and sparse indexes
Network: Segmenting analytics and OLTP queries to separate clusters
Cache: Setting memory limits for indexes, documents and on-disk cache
Replication: Tuning write concern durability vs performance
Continuous benchmarking and load testing helps gauge resource usage.

How can you manage costs for MongoDB clusters running in the cloud? What specific approaches would you take?
Good ways to optimize cloud costs include:

Right size instance types to utilize capacity without over-provisioning
Use auto-scaling rules to scale resource capacity based on utilization metrics
Build clusters across regions enabling policies to use cheaper regions
Analyze usage trends and optimize indexes, queries, compression to use lower resource clusters
Migrate to MongoDB Atlas to reduce ops overhead and leverage consumption plans
The key is continuous monitoring to optimize clusters for cost efficiency.

What key things can you do to ensure high availability and prevent downtime in MongoDB deployments?
Key things include:

Configuring replica sets with multiple secondary nodes
Enabling automated failover so new primary is quickly elected
Using sharding to prevent single server outages affecting entire system
Setting up monitoring to get early warnings of any degradation
Implementing backups via snapshotting or ops manager in case failover fails
Testing redundancy mechanisms regularly to uncover risks
How can you optimize network utilization and traffic while deploying MongoDB in a multi-region setup?
Some ways to optimize network performance are:

Enable compression on clients and servers to reduce traffic
Increase batch size for bulk inserts and reads to reduce round trips
Perform analytics queries on secondaries closest to users instead of primary
Use a read preference to route reads to lowest latency region
Use caching servers to reduce external traffic to database network
Implement rate limiting if network capacity is saturated
What are some key server-side performance optimization techniques in MongoDB?
Some key optimizations include:

Indexing fields used for filtering, sorting and joins
Using covered queries retrieving data solely from indexes
Adding RAM to fit working set and indexes in memory
Tuning write concern durability vs speed tradeoffs
Sharding data across more machines parallelizing operations
Setting caching policies to reduce disk access
Profiling queries helps identify expensive operations to optimize.

Trends and Future
What are some emerging trends you see regarding MongoDB usage?
Some emerging trends include:

Shift towards multi-cloud and hybrid cloud deployments using MongoDB Atlas
Use as operational data hub and streaming data platform integrated with other data systems
Increased adoption of serverless offerings like MongoDB Realm and Atlas functions
Leveraging graph-like capabilities via aggregations and Atlas Search
Increased real-time analytics for mobile and IoT applications
As data volumes and workloads increase, MongoDB’s distributed capabilities provide scalability across diverse use cases.

Can you compare and contrast MongoDB with other NoSQL databases like Cassandra and Couchbase?
Cassandra: Wide column store optimized for high write throughput and scalability across data centers. Limited ad-hoc querying and transactions.

MongoDB: More flexible JSON documents with indexing, expressive queries and transactions. Horizontally scalable via auto-sharding.

Couchbase: Multi-model supporting key-value lookups, SQL-like queries and JSON documents. Focuses on sub-millisecond latencies.

So MongoDB differs in being document oriented, less query limited and supporting richer durability guarantees relative to the other NoSQL stores.

How does MongoDB provide distributed transaction capabilities ?
MongoDB 4.0+ provides:

Multi-document ACID transactions ensuring atomic, consistent and isolated operations across documents and sharding zones
Snapshot isolation using readConcern to do repeatable reads isolated from other transactions
Writes with tunable durability guarantees via write concern settings
Multi-document statements enforce all-or-nothing execution
So MongoDB now has key transaction mechanisms comparable to relational databases.

Do you foresee graph capabilities being added to MongoDB? Could it evolve as a graph database?
Possibly yes. Recent enhancements include:

$graphLookup stage allowing graph-like traversals between documents
Native realm capabilities making MongoDB a lower latency data hub
MongoDB Charts providing visual graph representations
As adoption grows for real-time recommendations and social graphs, MongoDB could evolve graph-like database capabilities. Native graph processing features may get added.

Can MongoDB be used as a time-series database for IoT data?
Yes, MongoDB provides good capabilities to handle high velocity time-series IoT data including:

High ingestion write throughput capacity
Flexible dynamic schemas fitting IoT data model
Compression reducing storage needs
Indexing optimizing time-range queries by timestamp
Analytic capabilities like aggregations
Atlas cloud scale out as data volumes increase
So MongoDB provides scalable ingestion and analytics foundation for IoT use cases.

Do you think MongoDB is a future proof database technology? Why or why not?
Yes, MongoDB seems future proof based on its sustained growth and adoption over the past decade across industries and use cases.

Reasons it is future proof:

Document model fitting modern application data formats
Distributed architecture built ground up for cloud scale
Rich ecosystem of tools for varied workloads – analytics, transactions, search etc.
Ability to innovate rapidly across query execution, indexing, performance etc.
Multi-cloud via Atlas boosting productivity and scale
As long as data volumes and workload complexity increases, MongoDB’s core strengths will sustain its prominence.

All The Useful MongoDB Interview Questions & Answers
By Fatskills Exam Guides Team — the exam nerds behind 28,500+ quizzes and 2.1M practice questions across 500+ global exams.

⏱️ ~15 min read
🖨️ Print / Save this study guide as PDF
Q 1. Explain what is MongoDB.
MongoDB is an open-source NoSQL database management program that supports various forms of data. MongoDB is basically used as a tool that can manage document-oriented information, store or retrieve information.

Q 2. What do you know about MongoDB?
MongoDB is a cross-platform document-oriented database program that is open source and free in nature. It can also be classified as the NoSQL database program. It was developed by MongoDB Inc. JSON-like documents with schema are used by MongoDB. Field, range queries, and regular expressions are also supported by MongoDB. The queries used by this contain user-defined JavaScript functions. It provides high availability with the replica sets. Fields can be indexed with primary and secondary indices. Sharding is used by MongoDB for scaling horizontally which determines how the data will be distributed. It can also be used as a file system with load balancing. It can also be used for batch processing of data.

Q 3. What is use of capped collection in MongoDB?
Capped collections are fixed-size collections that restrict updates to the documents if the update results in increased document size and it ensures that the document size does not increase the size allocated on the disk.

Q 4. What are Primary and Secondary Replica sets?
A replica set is a group of MongoDB instances that host the same data set. The primary is the only member in the replica set that receives write operations. Whereas Secondary members replicate this log and apply the operations to their data sets.

Q 5. What is splitting in mongodb?
In MongoDb, Splitting is a process that keeps chunks from growing too large with the help of split command(). MongoDB splits the chunk, when a chunk grows beyond a specified chunk size, on the basis of shard key values the chunk represents.

Q 6. List some important features of MongoDB.
Some of the important features of MongoDB ares:

Support ad hoc queries. 
Indexing and Replication.
Duplication of data. 
Load balancing. 
Supports map reduction and aggregation tools.
Uses JavaScript instead of Procedures.
It is a schema-less database written in C++.

Q 7. What is namespace in MongoDB?
A namespace is a canonical name for a collection or index in MongoDB. The namespace is basically a combination of the database name and the name of the collection or index, like so: [database-name]. [collection-or-index-name] .

Q 8. What is BSON in MongoDB?
BSON stands for Binary JSON which is a binary serialization of JSON-like documents that is used by MongoDB to store the documents in a BSON format. BSON implementation is used for supporting embedding objects and arrays within other objects.

Q 9. What type of DBMS is MongoDB?
MongoDB is an open-source NoSQL type DBMS or database management program that supports various forms of data.

Q 10. What is the document structure of MongoDB?
MongoDB uses JSON format as the structure of the document. JSON documents support embedded fields, so related data and lists of data can be stored with the document instead of an external table.

Q 11. What is replica set in MongoDB?
In MongoDB, a Replica Set is used to carry out MongoDB replication, which is a process of creating a copy of the same data set in more than one MongoDB server. A replica set is basically a group of MongoDB instances that maintain the same data set and pertain to any MongoDB process.

Q 12. What is profiler in MongoDB?
In MongoDB, the database profiler collects detailed information about Database Commands executed against a running MongoDB instance. It writes all the data it collects to a system and captures and records data on the performance of write operations, cursors, and database commands on a running MongoDB instance.

Q 13. Write the syntax for creating and droping a collection in MongoDB.
The syntax for creating and droping a collection in MongoDB are as follows:

Creating a Collection: collection_name. insert({key:value, key:valueâ€¦})
Droping a Collection: db.collection.drop( { writeConcern: } )

Q 14. What is the size limit of a document?
The maximum Document Size Limit in MongoDb is 16 megabytes or 16777216 bytes. The maximum document size helps ensure that a single document cannot use an excessive amount of RAM or, during transmission, an excessive amount of bandwidth.

Q 15. What is _id Field in MongoDB?
In MongoDB, _id field is always the first field in the documents therefore each document stored in a collection requires a unique _id field that acts as a primary key.

Q 16. Explain what is ObjectId in MongoDB.
An ObjectId in MongoDB is a 12-byte BSON type in which the first 4 bytes of the ObjectId represent the time in seconds then the next 3 bytes of the ObjectId represent the machine identifier then again the next 2 bytes are of process id and the last Field is 3 bytes used for increment the objectid.

Q 17. Write syntax to create or select a database in MongoDB.
MongoDB uses DATABASE_NAME is used to create a database. The syntax of use DATABASE statement is as follows: use DATABASE_NAME

Q 18. What is a collection in MongoDB?
In MongoDB, a collection is a grouping of documents such that documents within a collection can have different fields. A collection is the equivalent of a table in a relational database system and exists within a single database.

Q 19. What is use of insertOne and insertMany in MongoDB?
In MongoDB, insertOne() is a method that is used whenever you want to insert a single document into your collection. It is basically used to insert a single document or record into the database. Whereas The insertMany() method inserts one or more documents in the collection. It takes an array of documents to insert into the collection.

Q 20. What is sharding in MongoDB?
In MongoDB, Sharding is the process of distributing data across multiple hosts that is achieved by splitting large data sets into small data sets across multiple MongoDB instances. Basically, Sharding is used to store data across multiple machines.

Q 21. What is writeConcern in MongoDB?
In MongoDB, write concern describes the level of acknowledgment requested from MongoDB for write operations to a standalone MongoDB or to replica sets or to sharded clusters, such that in sharded clusters, mongoose instances will pass the write concern on to the shards.

Q 22. What is use of upsert in MongoDB?
MongoDB supports a feature known as upsert that mixes the functionality of an update with an insert. Upsert is an option that is used for update operation e.g. update(), findAndModify(), etc.

Q 23. Explain what is Mongoose?
Mongoose is an Object Data Modeling or ODM library for MongoDB and Node. js. that manages relationships between data, provides schema validation and is used to translate between objects in code and the representation of those objects in MongoDB.

Q 24. List some alternatives of MongoDB?
Some of the alternatives of MongoDB are:

JAM Stack - Fast, secure, and dynamic websites served without web servers.
PostgreSQL - SQL database is known for its reliability, features, and performance.
DynamoDB - NoSQL database created by Amazon Web Services (AWS)

Q 25. What is 32-bit nuances?
In computer 32-bit nuances refer to the following:

There is extra memory-mapped file activity with journaling.
This will further constrain the limited db size of 32 bit builds.
Thus, for now, journaling by default is disabled on 32 bit systems.

Q 26. What is __v field in Mongoose?
In Mongoose the '_v' field is the versionKey is a property set on each document when first created by Mongoose. This is a document inserted through the mongo shell in a collection and this key-value contains the internal revision of the document.

Q 27. What is Projection Operators? List some Projection Operators available in MongoDB?
In MongoDB, projection operators are used for selecting only the necessary data rather than selecting the whole of the data of a document. Some of the Projection Operators available in MongoDB are:

$ - Projects the first element in an array that matches the query condition.
$elemMatch - Projects the first element in an array that matches the specified $elemMatch condition. 
$meta - Projects the available per-document metadata.
$slice - Limits the number of elements projected from an array. 

Q 28. What is Bitwise Query Operator in MongoDB?
In MongoDb, Bitwise Query Operators are used to match numeric or binary values in which any bit from a set of bit positions has a value of 0 and 1.

Q 29. Explain the structure of ObjectID in MongoDB.
In MongoDB, the structure of an ObjectId is consists of a 12-byte BSON type. This 12-byte structure can be distinguished as the first 4 bytes of the ObjectId represent the time in seconds since the UNIX epoch. Then the next 3 bytes of the ObjectId represent the machine identifier which is then followed by the next 2 bytes of the ObjectId represent the process ID.

Q 30. What are Indexes in MongoDB?
In MongoDB, Indexes are a special data structure that supports the efficient execution of queries. It is used to store a small portion of the collection's data set in an easy way in order to traverse it. Indexes improve the speed of search operations in the database because instead of searching the whole document, the search is performed on the indexes that hold only a few fields.

Q 31. What is a covered query in MongoDB?
In MongoDB, a covered query is a query that can be satisfied entirely using an index and does not have to examine any documents. Covered queries help us in querying data faster by ensuring the index created contains all the fields required by the query and it doesn't require examining any documents apart from the indexed ones.

Q 32. What is Aggregation in MongoDB?
In MongoDb, the Aggregation operator is used to group the values from multiple documents together, such that it can perform a variety of operations on the grouped data to return a single result for example sum, average, minimum, maximum, etc are some of the operations performed on the grouped data to return a computed result. MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single-purpose aggregation methods.

Q 33. What is oplog?
The oplog stands for operations log which is a special capped collection that keeps a rolling record of all operations that modify the data stored in your databases. Oplog is a log of every internal operation used for replication in a MongoDB cluster.

Q 34. What is Replication in MongoDB?
In MongoDB, replication is the process of creating a copy of the same data set in more than one MongoDB server that can be achieved by using a Replica Set. Where a replica set is a group of mongodb processes that maintain the same data set.

Q 35. What is a Storage Engine in MongoDB?
In MongoDB, the storage engine is the component of the database that is responsible for managing how data is stored, both in memory and on disk. It is based on memory-mapped files and manages BSON data in memory and on disk to support read and write operations.

Q 36. Explain what is GridFS.
In MongoDb, GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16 MB. It is used to store and retrieve large files such as images, audio files, video files, etc.

Q 37. List the important features of MongoDB.
The important features of MongoDB are:

Aggregation framework-  it uses aggregation framework for the batch processing of data and aggregation operations. It should be used in an effective manner.
The usage of BSON format in MongoDB-  it uses the binary-encoded serialization of JSON-like documents. The data-types like- date and binary are supported in the format.
The sharing feature of MongoDB-  using this feature, MongoDB supports the distribution of data across multiple machines. It supports deployment with large sets of data.
The Ad hoc queries in MongoDB-  it supports field, range queries, and regular expressions.
Collections-  MongoDB supports fixed size collection which can also be termed as capped collections.

Q 38. Which all languages can be used with MongoDB?
Here goes a list of the languages which can be used with MongoDB: - 

C
C++
C#
Java
Node.js
Perl
PHP
Python
Ruby
Scala
Go
Erlang.

Currently, MongoDB provides driver support for the languages listed above. It can be used easily with any of these languages.

Q 39. What is the use of a namespace in MongoDB?
In MongoDB, a namespace is a combination of the database name and collection or index name. It is a canonical name for an index or a collection in MongoDB. A namespace consists of all the documents in MongoDB. The maximum length of a collection of namespaces is called the namespace length. It consists of the database name, a dot operator (.), and the name of the collection.

Syntax- <database>.<collection>

The namespace contains all the helper classes which can be used to construct various options which are to be used in the drivers. A namespace can also be termed as the concatenation of the collection name and the database name.

Q 40. What do you mean by a replica set in MongoDB?
A group of mongo instances which is able to host the same data set is known as a replica set in MongoDB. A replica set consists of a primary node and a secondary node too. With the help of a replica set, all the data from primary node to the secondary node replicates. Replication is a process of synchronizing the data. Replication provides redundancy and it also increases the availability of data with the help of multiple copies of data on the different database server. It also protects the database from the loss of a single server.

Q 41. What should all points be taken into consideration while creating a schema in MongoDB?
Following are the points which should be taken into consideration when you create a schema in MongoDB: - 
Your schema should be designed according to your requirements.
If the objects are to be used together, you should combine them into one document. Otherwise, you should use them separately.
Joins should be performed while writing and not while reading.
If use cases are used more frequently, then you should optimize your schema.
Complex aggregation should be done in the schema.

Q 42. What do you understand by a profiler with reference to MongoDB?
A database profiler is something which collects fine-grained data about write operations of MongoDB, the cursors, and the database commands. Profiling can be enabled on a per database or pre instance basis. When profiling is enabled, the profiling level also gets configurable. By default, the profiler will be off. All the data collected by the system.profiler collection is written by the database profiler to it. This collection is a capped collection. 0, 1, and 2, these are the three levels available in the database profiler. Profiling in a database can be enabled from the mongo shell or using a profile command through the driver. While enabling profiling, profiling level is also set. The profiler is used to record data in the system.profile collection.

Q 43. Write the syntax for creating a collection and dropping a collection in MongoDB.
The creation of the collection is the basic step in MongoDB. Here is the syntax for creating a collection in MongoDB-

Db.createCollection (name, options)
Dropping a collection basically means deleting a collection. Following is the syntax for dropping a collection in MongoDB-

Db.collection.drop()

Q 44. What are the different types of NoSQL databases? Give some examples.
There are 4 basic types of NoSQL database. They are as follows: - 
Key value store NoSQL database
Document store NoSQL database
Column store NoSQL database
Graph-based NoSQL database

The various examples of NoSQL database are- MongoDB, Cassandra, CouchDB, Hypertable, Redis, Riak, Neo4j, HBase, Couchbase, MemcacheDB, Voldemort, RevenDB, etc.

Q 45. What are the differences between MongoDB and MySQL?
The various differences between MongoDB and MySQL are:

In terms of data representation-  in MySQL, we represent data in the form of tables and rows. Whereas, in MongoDB data is represented as collections of JSON documents.

Querying-  in SQL, we put together a string in the query language which is then parsed by the database system. Whereas, in MongoDB, object querying is used.
Relationships-  in MySQL, the relational database is only the Join operation which allows us to perform queries across multiple tables. Whereas MongoDB does not support join operation but can support multi-dimensional data types such as arrays, etc. in this, embedding is a process in which we place one document inside the other.
Transactions-  MySQL supports atomic transactions which are the ability to contain multiple operations within a transaction. Whereas, MongoDB does not support transactions.
Schema definition-  in MySQL, you need to define your tables and columns before storing anything. Whereas, in MongoDB, you don't need to define a schema.

Q 46. Explain sharding in MongoDB.
Sharding is a method for distributing data across multiple machines, enabling horizontal scaling (as opposed to vertical scaling).

Vertical scaling refers to increasing the power of a single machine or single server through a more powerful CPU, increased RAM, or increased storage capacity. If physical limitations were not an issue, vertical scaling would be the method of choice due to its simplicity. In real life, no single machine can handle large modern-day workloads.

The solution is horizontal scaling. Also known as scale-out, it refers to adding nodes to share the data set and load. Horizontal scaling allows for near-limitless scaling to handle big data and intense workloads.

In MongoDB, a sharded cluster consists of several:

shards
routers
config server replica sets

A shard is a replica set that contains a subset of a sharded collection (also known as chunks). A replica set consists of one or more mongod nodes that all maintain the same data set.

Q 47. List some alternatives to MongoDB.

Following are the best alternatives to MongoDB:
RethinkDB.
JaguarDB.
OrientDB.
CouchDB.
PostgreSQL.
Apache Cassandra.
IBM Cloudant.

Q 48. I am getting error cannot overwrite model once compiled Mongoose, How to fix it?
If you call the model creation function with the same key more than once, mongoose won't let you overwrite the existing model. This will throw an error if the model does not exist, so you can wrap it in a try/catch in order to either get the model, or create it: let users try { users = mongoose.

Q 49. What is the '__v' field in Mongoose?
When the mongoose is created at the first time the version key is a property set on every document. The value of this key comprises of the internal revision of the document. It is understood that the name of this document is configurable. The default key is __v
 
Interview Questions MongoDB
Interview Questions MongoDB
Posted On
November 14, 2023
by
Codex
129 Views
What is MongoDB?
MongoDB is a cross-platform, document-oriented database program that provides high performance, high availability, and easy scalability. It is a leading NoSQL database, which is designed for ease of development and scaling​​.

What are the features of MongoDB?
Key features of MongoDB include its document-oriented storage with JSON-like documents with dynamic schemas, full index support, replication & high availability, auto-sharding for horizontal scalability, built-in aggregation, and a rich query language​​.

What type of NoSQL database is MongoDB?

MongoDB is a document-based NoSQL database. This means that it stores data in Binary JSON (BSON) format, which allows the integration of data in certain types of applications more easily and quickly​​.
Explain the importance and benefits of using a document-based database like MongoDB.
Document databases like MongoDB are collection-oriented, and schema-free, and allow for a more flexible representation of relationships between data items. They are ideal for scenarios with large amounts of data and where the structure of the data may change over time. The benefits include faster development cycles, performance efficiency, and the ability to handle diverse and large amounts of data​​.

What is Mongo shell?

Mongo shell is a JavaScript interface to MongoDB, which allows you to perform tasks such as querying and updating data, managing the database’s structure, and setting up replication and sharding​​.
How does indexing work in MongoDB?
Indexing in MongoDB works by creating a data structure that improves the speed of data retrieval operations on a database collection. Just like indexes in other database systems, MongoDB indexes use a small portion of RAM to store a reference to the data, which can significantly improve the performance of queries​​.

What is sharding in MongoDB?
Sharding in MongoDB is the process of storing data records across multiple machines. It is MongoDB’s approach to meeting the demands of data growth. By splitting the data across multiple servers, sharding can provide a way to scale horizontally and facilitate high throughput operations with large sets of data​​.

What are some common use cases for MongoDB?
MongoDB is often used for mobile apps, content management, real-time analytics, and applications involving the Internet of Things. Its flexible schema, scalability, and performance make it suitable for a wide range of applications, especially where rapid development and iteration are required​​.

Differentiate MongoDB and MySQL.
The main difference between MongoDB and MySQL is that MongoDB is a NoSQL database that stores data in documents and does not require a predefined schema, allowing the fields to vary from document to document. MySQL, on the other hand, is a relational database management system that stores data in tables and requires a predefined schema for the data​​.

How do you create a database in MongoDB?
To create a database in MongoDB, you use the use command followed by the database name. If the database does not exist, MongoDB creates it when you first store data in that database.

How does MongoDB provide concurrency?
MongoDB uses a locking system to ensure that multiple clients can’t write to the same data at the same time. It uses reader-writer locks that allow concurrent readers shared access to a resource but give exclusive access to a single writer.

What is replication in MongoDB?
Replication in MongoDB is the process of synchronizing data across multiple servers. It increases data availability and ensures redundancy and high availability. This is achieved by using replica sets, which are a group of MongoDB instances that maintain the same data set.

What is a replica set?
A replica set in MongoDB is a group of mongod instances that host the same data set. In a replica, one node is the primary node that receives all write operations. The other, secondary nodes replicate the primary’s oplog and apply the operations to their data sets.

What are the different types of collections in MongoDB?
MongoDB has several types of collections, including capped collections, which are fixed-size collections that automatically overwrite their oldest entries when they reach their maximum size.

What is a document in MongoDB?
In MongoDB, a document is a basic unit of data that contains BSON (Binary JSON) key-value pairs. It is the MongoDB equivalent of a row in a relational database table.

How do you perform transactions in MongoDB?
MongoDB supports multi-document transactions, which are used to perform operations that require atomicity across multiple documents in one or more collections. Transactions in MongoDB feel similar to transactions in relational databases and are started with a startTransaction command.

How do you back up a MongoDB database?
Backing up a MongoDB database can be done using tools like Mongodump, which creates a binary export of the contents of a database. Another method is filesystem snapshots or using MongoDB Atlas’ backup solutions if you use MongoDB’s cloud service.

Can you explain sharding and its components?
Sharding is MongoDB’s strategy for meeting the demands of data growth. It involves splitting data across multiple MongoDB instances or shards. Components include shard key, query router (mongos), and config servers.

What are aggregations in MongoDB?
Aggregations in MongoDB are operations that process data records and return computed results. Aggregation operations group values from multiple documents together and can perform a variety of operations on the grouped data to return a single result.

What is the purpose of the skip() and limit() methods in MongoDB?
The skip() method is used to skip a specified number of documents in a query and is often used with limit() to paginate through documents. The limit() method is used to limit the number of documents returned by a query, which is useful for controlling the amount of data sent to a client.

What is MongoDB Atlas?
MongoDB Atlas is a fully-managed cloud database service provided by MongoDB. It offers a hosted MongoDB service that takes care of setup, infrastructure management, scaling, and backups in the cloud platform of your choice (AWS, Azure, or Google Cloud Platform).

How do you ensure that an index fits into RAM in MongoDB?
To ensure an index fits into RAM, you should create indexes that only cover the fields you frequently query and avoid adding unnecessary fields to the index. Monitoring performance and using MongoDB’s index size statistics can also help in managing index RAM fit.

What is a GridFS in MongoDB?
GridFS is a specification for storing and retrieving large files such as images, audio files, video files, etc. It allows storing files larger than the BSON-document size limit of 16MB by dividing them into chunks and storing them as separate documents.

What are the limitations when sharding a MongoDB collection?
When sharding a collection, you cannot shard on a hashed index that includes an array field, and you cannot change the shard key after sharding. Additionally, all queries that do not include the shard key must be broadcast to all shards.

Explain the role of a query router in MongoDB.
The query router, or mongos, is the component of a sharded MongoDB cluster that interfaces with client applications and directs operations to the appropriate shard(s). The mongos process queries the config servers to determine the metadata about the cluster and routes operations accordingly.

What is journaling in MongoDB and why is it important?
Journaling is a feature that provides durability in MongoDB. It ensures that write operations are written to a journal file first, so in the event of a crash, MongoDB can recover the writes from this journal. This is crucial for preventing data loss.

How do you update a document in MongoDB?
To update a document in MongoDB, you use the updateOne(), updateMany(), or replaceOne() operations, specifying the criteria for selecting the document and the updated values or document.

What is the oplog in MongoDB?
The oplog (operations log) is a special capped collection that keeps a rolling record of all operations that modify the data stored in your databases. It’s used as part of replication to keep secondary members consistent with the primary.

How can you achieve transaction-like functionality in MongoDB?
MongoDB provides multi-document transactions which allow performing multiple write operations across different documents in a single atomic operation, similar to transactions in relational databases.

What are the best practices for securing a MongoDB instance?
Best practices for securing a MongoDB instance include enabling authentication, using role-based access control, encrypting communication with TLS/SSL, encrypting sensitive data at rest, and keeping MongoDB and its underlying operating system up to date with security patches.

What is the difference between deleteOne() and deleteMany() in MongoDB?
deleteOne() deletes the first document that matches the query criteria, whereas deleteMany() deletes all documents that match the query criteria.

How does MongoDB handle transactions in a sharded environment?
MongoDB uses a two-phase commit process to handle transactions across sharded environments to maintain ACID (Atomicity, Consistency, Isolation, Durability) properties. It manages distributed transactions that can span multiple shards and ensures that the changes are committed only if all shards report success.

What is the significance of the _id field in MongoDB documents?
The _id field is a unique identifier for a document in a MongoDB collection. It is automatically added by MongoDB to every document if not provided and is used to ensure that every document can be uniquely identified.

How do you monitor the performance of a MongoDB database?
MongoDB provides various tools for monitoring performance, including the MongoDB Atlas platform, which offers monitoring and alerting features. Locally, you can use the mongostat and mongotop utilities to monitor database statistics and collection-level performance, respectively.

What is a compound index in MongoDB?
A compound index is an index on multiple fields within a MongoDB collection. Documents are sorted first by the value of the first field, then by the value of the second field within each group of documents with the same first field value, and so on.

What are the advantages of using MongoDB over traditional databases?
MongoDB offers a flexible schema, allowing developers to store data in a format that is more natural to their application logic. It also provides scalability through sharding, good performance for read and write operations, and a rich set of features like full-text search and geospatial queries.

Can you explain the explain() method in MongoDB?
The explain() method is used to provide information about how MongoDB executes a query. It can be used to diagnose performance issues by showing details such as which indexes have been used and how many documents were scanned.

What is a covered query in MongoDB?
A covered query is a query in which all the fields used in the query are part of an index and all the fields returned in the results are in the same index. Covered queries can be executed by MongoDB entirely using the index without having to look up the actual documents, resulting in improved query performance.

What is the role of mongod and mongos in MongoDB?
MongoDB is the primary daemon process for the MongoDB system—it handles data requests, manages data access, and performs background management operations. mongos acts as a query router, providing an interface between client applications and the sharded cluster.

How does MongoDB ensure data redundancy and high availability?
MongoDB ensures data redundancy and high availability through the use of replica sets, which are groups of two or more copies of a MongoDB database. The replica set includes a primary node and secondary nodes that replicate the data of the primary node. If the primary fails, an election process designates a new primary from the secondaries to maintain service continuity.


MongoDB Interview Questions
Introduction to MongoDB
When dealing with data, there are two types of data as we know – (i) structured data and (ii) unstructured data. Structured data is usually stored in a tabular form whereas unstructured data is not. To manage huge sets of unstructured data like log or IoT data, a NoSQL database is used.

Now, what is MongoDB?

MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas.
It provides easy scalability and is a cross-platform, document-oriented database.
MongoDB works on the concept of Collection and Document.
It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.
MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).
Crack your next tech interview with confidence!

Take a free mock interview, get instant⚡️ feedback and recommendation💡

Take Free Mock Interview

MongoDB Basic Interview Questions
1. What are some of the advantages of MongoDB?
Some advantages of MongoDB are as follows:

MongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database
MongoDB support primary and secondary index on any fields
MongoDB basically uses JavaScript objects in place of procedures
MongoDB uses a dynamic database schema
MongoDB is very easy to scale up or down
MongoDB has inbuilt support for data partitioning (Sharding).
2. What is a Document in MongoDB?
A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:
{"greeting" : "Hello world!"}

Complex documents will contain multiple key/value pairs:
{"greeting" : "Hello world!", "views" : 3}

3. What is a Collection in MongoDB?
A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.
Documents within a single collection can have any number of different “shapes.”, i.e. collections have dynamic schemas.
For example, both of the following documents could be stored in a single collection:

{"greeting" : "Hello world!", "views": 3}
{"signoff": "Good bye"}
You can download a PDF version of Mongodb Interview Questions.

Download PDF

4. What are Databases in MongoDB?
MongoDB groups collections into databases. MongoDB can host several databases, each grouping together collections.
Some reserved database names are as follows:
admin
local
config

5. What is the Mongo Shell?
It is a JavaScript shell that allows interaction with a MongoDB instance from the command line. With that one can perform administrative functions, inspecting an instance, or exploring MongoDB.

To start the shell, run the mongo executable:

$ mongod
$ mongo
MongoDB shell version: 4.2.0
connecting to: test
>
The shell is a full-featured JavaScript interpreter, capable of running arbitrary JavaScript programs. Let’s see how basic math works on this:

> x = 100;
200
> x / 5;
20
6. How does Scale-Out occur in MongoDB?
The document-oriented data model of MongoDB makes it easier to split data across multiple servers. Balancing and loading data across a cluster is done by MongoDB. It then redistributes documents automatically.

The mongos acts as a query router, providing an interface between client applications and the sharded cluster.

Config servers store metadata and configuration settings for the cluster. MongoDB uses the config servers to manage distributed locks. Each sharded cluster must have its own config servers.



7. What are some features of MongoDB?
Indexing: It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.
Aggregation: It provides an aggregation framework based on the concept of data processing pipelines.
Special collection and index types: It supports time-to-live (TTL) collections for data that should expire at a certain time
File storage: It supports an easy-to-use protocol for storing large files and file metadata.
Sharding: Sharding is the process of splitting data up across machines.
8. How to add data in MongoDB?
The basic method for adding data to MongoDB is “inserts”. To insert a single document, use the collection’s insertOne method:

> db.books.insertOne({"title" : "Start With Why"})
For inserting multiple documents into a collection, we use insertMany. This method enables passing an array of documents to the database.

9. How do you Update a Document?
Once a document is stored in the database, it can be changed using one of several update methods: updateOne, updateMany, and replaceOne. updateOne and updateMany each takes a filter document as their first parameter and a modifier document, which describes changes to make, as the second parameter. replaceOne also takes a filter as the first parameter, but as the second parameter replaceOne expects a document with which it will replace the document matching the filter.

For example, in order to replace a document:

{
   "_id" : ObjectId("4b2b9f67a1f631733d917a7a"),
   "name" : "alice",
   "friends" : 24,
   "enemies" : 2
}
10. How do you Delete a Document?
The CRUD API in MongoDB provides deleteOne and deleteMany for this purpose. Both of these methods take a filter document as their first parameter. The filter specifies a set of criteria to match against in removing documents.

For example:
> db.books.deleteOne({"_id" : 3})

11. How to perform queries in MongoDB?
The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.

Example:
> db.users.find({"age" : 24})

12. What are the data types in MongoDB?
MongoDB supports a wide range of data types as values in documents. Documents in MongoDB are similar to objects in JavaScript. Along with JSON’s essential key/value–pair nature, MongoDB adds support for a number of additional data types. The common data types in MongoDB are:

Null
{"x" : null}
Boolean
{"x" : true}
Number
{"x" : 4}
String
{"x" : "foobar"}
Date
{"x" : new Date()}
Regular expression
{"x" : /foobar/i}
Array
{"x" : ["a", "b", "c"]}
Embedded document
{"x" : {"foo" : "bar"}}
Object ID
{"x" : ObjectId()}
Binary Data
Binary data is a string of arbitrary bytes.
Code
{"x" : function() { /* ... */ }}
13. When to use MongoDB?
You should use MongoDB when you are building internet and business applications that need to evolve quickly and scale elegantly. MongoDB is popular with developers of all kinds who are building scalable applications using agile methodologies.
MongoDB is a great choice if one needs to:

Support a rapid iterative development.
Scale to high levels of read and write traffic - MongoDB supports horizontal scaling through Sharding, distributing data across several machines, and facilitating high throughput operations with large sets of data.
Scale your data repository to a massive size.
Evolve the type of deployment as the business changes.
Store, manage and search data with text, geospatial, or time-series dimensions.
MongoDB Intermediate Interview Questions
14. How is Querying done in MongoDB?
The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.

For example: If we have a string we want to match, such as a “username” key with the value “alice”, we use that key/value pair instead:

> db.users.find({"username" : "alice"})

15. Explain the term “Indexing” in MongoDB.
In MongoDB, indexes help in efficiently resolving queries. What an Index does is that it stores a small part of the data set in a form that is easy to traverse. The index stores the value of the specific field or set of fields, ordered by the value of the field as specified in the index.
MongoDB’s indexes work almost identically to typical relational database indexes.

Indexes look at an ordered list with references to the content. These in turn allow MongoDB to query orders of magnitude faster. To create an index, use the createIndex collection method.

For example:

> db.users.find({"username": "user101"}).explain("executionStats")

Here, executionStats mode helps us understand the effect of using an index to satisfy queries.

16. What are Geospatial Indexes in MongoDB?
MongoDB has two types of geospatial indexes: 2dsphere and 2d. 2dsphere indexes work with spherical geometries that model the surface of the earth based on the WGS84 datum. This datum model the surface of the earth as an oblate spheroid, meaning that there is some flattening at the poles. Distance calculations using 2sphere indexes, therefore, take the shape of the earth into account and provide a more accurate treatment of distance between, for example, two cities, than do 2d indexes. Use 2d indexes for points stored on a two-dimensional plane.

2dsphere allows you to specify geometries for points, lines, and polygons in the GeoJSON format. A point is given by a two-element array, representing [longitude, latitude]:

{
   "name" : "New York City",
   "loc" : {
       "type" : "Point",
       "coordinates" : [50, 2]
   }
}
A line is given by an array of points:

{
   "name" : "Hudson River",
   "loc" : {
       "type" : "LineString",
       "coordinates" : [[0,1], [0,2], [1,2]]
   }
}
17. Explain the process of Sharding.
Sharding is the process of splitting data up across machines. We also use the term “partitioning” sometimes to describe this concept. We can store more data and handle more load without requiring larger or more powerful machines, by putting a subset of data on each machine.
In the figure below, RS0 and RS1 are shards. MongoDB’s sharding allows you to create a cluster of many machines (shards) and break up a collection across them, putting a subset of data on each shard. This allows your application to grow beyond the resource limits of a standalone server or replica set.



Sharded Client Connection



Non Sharded Client Connection

18. Explain the SET Modifier in MongoDB?
If the value of a field does not yet exist, the “$set” sets the value. This can be useful for updating schemas or adding user-defined keys.

Example:

> db.users.findOne()
{
   "_id" : ObjectId("4b253b067525f35f94b60a31"),
   "name" : "alice",
   "age" : 23,
   "sex" : "female",
   "location" : "India"
}
To add a field to this, we use “$set”:

> db.users.updateOne({"_id" :
ObjectId("4b253b067525f35f94b60a31")},
... {"$set" : {"favorite book" : "Start with Why"}})
MongoDB Advanced Interview Questions
19. What do you mean by Transactions?
A transaction is a logical unit of processing in a database that includes one or more database operations, which can be read or write operations. Transactions provide a useful feature in MongoDB to ensure consistency.

MongoDB provides two APIs to use transactions.

Core API: It is a similar syntax to relational databases (e.g., start_transaction and commit_transaction)
Call-back API: This is the recommended approach to using transactions. It starts a transaction, executes the specified operations, and commits (or aborts on the error). It also automatically incorporates error handling logic for “TransientTransactionError” and”UnknownTransactionCommitResult”.
20. What are MongoDB Charts?
MongoDB Charts is a new, integrated tool in MongoDB for data visualization.

MongoDB Charts offers the best way to create visualizations using data from a MongoDB database.
It allows users to perform quick data representation from a database without writing code in a programming language such as Java or Python.

The two different implementations of MongoDB Charts are:

MongoDB Charts PaaS (Platform as a Service)
MongoDB Charts Server
21. What is the Aggregation Framework in MongoDB?
The aggregation framework is a set of analytics tools within MongoDB that allow you to do analytics on documents in one or more collections.
The aggregation framework is based on the concept of a pipeline. With an aggregation pipeline, we take input from a MongoDB collection and pass the documents from that collection through one or more stages, each of which performs a different operation on its inputs (See figure below). Each stage takes as input whatever the stage before it produced as output. The inputs and outputs for all stages are documents—a stream of documents.


22. Explain the concept of pipeline in the MongoDB aggregation framework.
An individual stage of an aggregation pipeline is a data processing unit. It takes in a stream of input documents one at a time, processes each document one at a time, and produces an output stream of documents one at a time (see figure below).



23. What is a Replica Set in MongoDB?
To keep identical copies of your data on multiple servers, we use replication. It is recommended for all production deployments. Use replication to keep your application running and your data safe, even if something happens to one or more of your servers.

Such replication can be created by a replica set with MongoDB. A replica set is a group of servers with one primary, the server taking writes, and multiple secondaries, servers that keep copies of the primary’s data. If the primary crashes, the secondaries can elect a new primary from amongst themselves.

24. Explain the Replication Architecture in MongoDB.
The following diagram depicts the architecture diagram of a simple replica set cluster with only three server nodes – one primary node and two secondary nodes:



In the preceding model, the PRIMARY database is the only active replica set member that receives write operations from database clients. The PRIMARY database saves data changes in the Oplog. Changes saved in the Oplog are sequential—that is, saved in the order that they are received and executed.
The SECONDARY database is querying the PRIMARY database for new changes in the Oplog. If there are any changes, then Oplog entries are copied from PRIMARY to SECONDARY as soon as they are created on the PRIMARY node.
Then, the SECONDARY database applies changes from the Oplog to its own datafiles. Oplog entries are applied in the same order they were inserted in the log. As a result, datafiles on SECONDARY are kept in sync with changes on PRIMARY.
Usually, SECONDARY databases copy data changes directly from PRIMARY. Sometimes a SECONDARY database can replicate data from another SECONDARY. This type of replication is called Chained Replication because it is a two-step replication process. Chained replication is useful in certain replication topologies, and it is enabled by default in MongoDB.
25. What are some utilities for backup and restore in MongoDB?
The mongo shell does not include functions for exporting, importing, backup, or restore. However, MongoDB has created methods for accomplishing this, so that no scripting work or complex GUIs are needed. For this, several utility scripts are provided that can be used to get data in or out of the database in bulk. These utility scripts are:

mongoimport
mongoexport
mongodump
mongorestore
Conclusion
26. Conclusion
MongoDB is a powerful, flexible, and scalable general-purpose database. It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.
Thus, in conclusion, MongoDB is:

Supports Indexing
Designed to scale
Rich with Features
High Performance
Load Balancing
Supports sharding
Although MongoDB is powerful, incorporating many features from relational systems, it is not intended to do everything that a relational database does. For some functionality, the database server offloads processing and logic to the client-side (handled either by the drivers or by a user’s application code). Its maintenance of this streamlined design is one of the reasons MongoDB can achieve such high performance.

Here are few References to understand MongoDB in-depth:
https://www.mongodb.com/2
https://docs.mongodb.com
