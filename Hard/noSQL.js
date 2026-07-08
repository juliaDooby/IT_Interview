The Top 5 NoSQL Database Interview Questions and Their Answers
November 14, 2025
Interview Preparation
 No Comments5 Mins ReadPranav ShahBy Pranav Shah
Share
The Top 5 NoSQL Database Interview Questions and Their Answers
NoSQL databases have become an essential part of modern application development. Their ability to handle large volumes of unstructured data, horizontal scalability, and flexibility makes them the go-to option for many developers. Whether you are preparing for an interview or seeking to deepen your knowledge about NoSQL databases, understanding the key interview questions can make all the difference. In this article, we’ll explore the top five NoSQL database interview questions and their detailed answers.

1. What is NoSQL, and how does it differ from traditional relational databases?
NoSQL stands for “Not Only SQL,” and it refers to a category of databases that provide a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. Here are the key differences:

Data Model: NoSQL databases often use a flexible schema, allowing you to store data in formats like key-value, document, column-family, or graph. In contrast, relational databases use a fixed schema and store data in tables.
Scalability: NoSQL databases can scale horizontally, which means you can add more servers to handle increased load. Traditional relational databases generally require vertical scaling, which can be expensive.
Transactions: While relational databases support ACID (Atomicity, Consistency, Isolation, Durability) transactions, many NoSQL databases adopt BASE (Basically Available, Soft state, Eventually consistent) principles for better performance in distributed systems.
Example:
A good example of NoSQL is MongoDB, which enables developers to store data in a JSON-like format, making it easy to work with dynamic and semi-structured data.

2. What are the different types of NoSQL databases, and when should you use each one?
NoSQL databases can mainly be categorized into four types. Understanding these types helps in selecting the right database for specific use cases:

Document Stores: These databases, like MongoDB and CouchDB, store data in document formats (JSON, XML). They are ideal for applications requiring a flexible schema and fast read/write operations.
Key-Value Stores: Databases such as Redis and DynamoDB store data as a collection of key-value pairs. They are best suited for caching applications and real-time analytics.
Column Family Stores: These include databases like Cassandra and HBase, which store data in columns rather than rows. They are optimized for queries over large datasets and are useful in scenarios where data is frequently read in aggregated form.
Graph Databases: Databases like Neo4j and ArangoDB store data in graph structures, making them ideal for applications that require complex relationships and connections, such as social networks.
When to Use Each Type:
Use Document Stores for content management systems.
Use Key-Value Stores for session management and caching.
Use Column Family Stores for big data analytics.
Use Graph Databases for recommendation engines.
3. What is the CAP theorem, and why is it significant in the NoSQL context?
The CAP theorem, also known as Brewer’s theorem, states that it is impossible for a distributed system to simultaneously provide all three of the following guarantees:

Consistency: Every read receives the most recent write or an error.
Availability: Every request receives a non-error response, regardless of the state of the system.
Partition Tolerance: The system continues to operate despite arbitrary partitioning due to network failures.
In the context of NoSQL databases, the CAP theorem is significant because it helps developers understand the trade-offs between these guarantees when designing distributed databases. For example, some databases may prioritize availability and partition tolerance over consistency, leading to eventual consistency rather than strict consistency.

Example:
Cassandra is a good illustration of a NoSQL database that favors availability and partition tolerance over consistency. In scenarios where quick responses are crucial, this approach can be beneficial.

4. What are the advantages and disadvantages of using NoSQL databases?
NoSQL databases offer several advantages and disadvantages that developers must consider:

Advantages:
Scalability: Capable of efficiently handling large amounts of data.
Flexibility: Dynamic schema allows for easy data modification.
High Performance: Faster read/write operations due to optimized data storage structures.
No Joins Needed: Simplified queries without requiring complex joins.
Disadvantages:
Eventual Consistency: Data may not be immediately consistent across nodes.
Lack of Standardization: Different NoSQL databases have diverse data models and query languages.
Less Mature: Compared to relational databases, many NoSQL technologies are relatively new and may lack advanced features.
5. Can you provide an example of how to write a simple query in a NoSQL database?
Let’s look at a simple example using MongoDB, a popular document store. Suppose we have a collection named “students” with documents structured as follows:

{
    "name": "Alice",
    "age": 23,
    "courses": ["Math", "English", "CS101"]
}
Query to Find a Student’s Courses:
To retrieve the courses for a student named Alice, you would use the following query:

db.students.find(
    { "name": "Alice" },
    { "courses": 1, "_id": 0 }
)
This query is searching the “students” collection for documents where the name is “Alice” and returns only the “courses” field while excluding the “_id” field from the results.

Top 10 NoSQL Interview Questions
April 06, 2015

Here are the top 10 questions that are being asked in interviews at different level.

1. What do you mean by NoSQL?

NoSQL is an approach that allows the simplicity of design and finer control over availability with a focus on performance, reliability, and agility. They differ from RDBMS in terms of underlying data structures. NoSQL systems are also called “Not only SQL” to emphasize that it may also support SQL like query language.

2. How does NoSQL relates to Big data?

Big data applications are generally looked from 4 perspectives: Volume, Velocity, Variety and Veracity. Whereas, NoSQL applications are driven by the inability of a current application to efficiently scale. Though volume and velocity are important, NoSQL also focuses on variability and agility.

NoSQL is often used to store big data. NoSQL stores provide simpler scalability and improved performance relative to traditional RDMS. They help big data moment in a big way by storing unstructured data and providing a means to query them as per requirements. There are different kinds of NoSQL data stores, which are useful for different kind of applications. While evaluating a particular NoSQL solution, one should looks for their requirements in terms of automatic scalability, data loss, payment model etc.

3. What are the different kinds of NoSQL data stores?

There are varieties of NoSQL data stores available which can be widely distributed among four categories:
Key-value store: A simple data storage system that uses a key to access a value. Examples- Redis, Riak, DynamoDB, Memcache
Column family store: A sparse matrix system that uses a row and a column as keys. Example- HBase, Cassandra, Big Table
Graph store: For relationship-intensive problems. Example- Neo4j, InfiniteGraph
Document store: Storing hierarchical data structures directly in the database. Example- MongoDB, CouchDB, Marklogic
For a more comprehensive list of NoSQL databases, please check Wikipedia page.

4. What is the impact of Google's MapReduce in the NoSQL movement?

Google published a paper on MapReduce in 2004, which talked about simplified data processing on large clusters. In this paper, Google shared their process for transforming large volumes of web data content into search indexes using low-cost commodity CPUs. It was Google’s use of MapReduce that encouraged the use of low-cost commodity hardware for such huge applications. Google extended the map-reduce concept to reliably execute on billions of web pages on hundreds or thousands of low-cost commodity CPUs.

This resulted into building a system that would easily scale as their data increased without forcing them to purchase expensive hardware. That’s where Google invented BigTable to boost their search capabilities. That was first real use of NoSQL columnar data store running on commodity hardware which made a big impact in NoSQL drive.

5. What is database sharding? How does it help in minimizing the downtime?

Sharding is a type of database partitioning, which divides the large databases into smaller and easily available chunks called shards. In RDBMS, it is widely known as horizontal partitioning. It’s basically splitting and maintaining the database by rows rather than columns.

As the amount of data an organization stores increases and when the amount of data needed to run the business exceeds the current capacity of the environment, some mechanism for breaking the information into manageable chunks is required. With NoSQL solutions, organizations have started practicing automatic sharding techniques as a mean to continue to store data while minimizing downtime.

The loads of the required system can be elastically managed using automatic sharding. With smart technologies around, it is possible to configure the system proactively, which can automatically create shards based on demand. The strategy may vary depending upon the type of data, users information and users distribution across regions. For example, if you have a site with large user base having maximum active users from US region than Asia, then it make sense to shard your database from regional perspective.

There are number of challenges while choosing a particular strategy. Some of the important questions needs to be answered before final any one strategy e.g. What if US users tend to be active at the same time in the evening? Would all the databases being used at its potential? What is the maintenance time for each shard? What are the backup strategies for sensitive data?

6. What is the architectural difference between applications supporting RDMS and NoSQL systems?

RDBMS systems traditionally support ACID transactions at the database level, which results in easier application development. On the other side, in a NoSQL system, most of the transactions are being handled at the application level. The application developer can easily abuse the implementation by making wrong choices. Fundamentally, it requires more stringent processes to create NoSQL application.

On the contrary side, NoSQL system scale well in high load environments. You can apply automatic sharding to minimize down time and the nodes can be prepared in real time, which results in lower operational costs. With RDBMS system, it requires a lot of proactive strategy to maintain and meet the scalability demands. At times, it becomes operationally inefficient to meet the sudden high demands.

7. Could you please explain the transaction support by using BASE in NoSQL systems?

ACID properties of RDMS seem crucial but these seem to pose some roadblocks for larger systems in terms of availability and performance. NoSQL provides an alternative to ACID called BASE.

BASE means:
- Basic Availability
- Soft state
- Eventual consistency

Most NoSQL databases do not provide transaction support by default, which means the developers have to think how to implement transactions. Many NoSQL stores offers transactions at the single document (or row etc.) level. For example, In MongoDB, a write operation is atomic on the level of a single document, even if the operation modifies multiple embedded documents within a single document.

Since a single document can contain multiple embedded documents, single-document atomicity is sufficient for many practical use cases. For cases where a sequence of write operations must operate as if in a single transaction, you can implement a two-phase commit in your application. It’s harder to develop software in the fault-tolerant BASE compared to the ACID, but Brewer’s CAP theorem says you have no choice if you want to scale up.

8. What is CAP theorem? How is it applicable to NoSQL systems?

Eric Brewer posted the CAP theorem in early 2000. In it he discusses three system attributes within the context of distributed databases as follows:
Consistency: The notion that all nodes see the same data at the same time.
Availability: A guarantee that every request to the system receives a response about whether it was successful or not.
Partition Tolerance: A quality stating that the system continues to operate despite failure of part of the system.
The common understanding around the CAP theorem is that a distributed database system may only provide at most 2 of the above 3 capabilities. As such, most NoSQL databases cite it as a basis for employing an eventual consistency model with respect to how database updates are handled.

9. What is eventual consistency in NoSQL stores?

Eventual consistency means eventually, when all service logic is executed, the system is left in a consistent state. This concept is widely used in distributed systems to achieve high availability. It informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.

In NoSQL systems, the eventual consistent services are often classified as providing BASE (Basically Available, Soft state, Eventual consistency) and in RDMS, it is classified as ACID (Availability, Consistency, Isolation and Durability). Leading NoSQL databases like Riak, Couchbase, and DynamoDB provide client applications with a guarantee of “eventual consistency”. Others, like MongoDB and Cassandra are eventually consistent in some configurations.

10. What are the cons of a traditional RDBS over NoSQL systems?
The object-relational mapping layer can be complex.
Entity-relationship modeling must be completed before testing begins, which slows development.
RDBMSs don’t scale out when joins are required.
Sharding over many servers can be done but requires application code and will be operationally inefficient.
Full-text search requires third-party tools.
It can be difficult to store high-variability data in tables.

 
NoSQL Interview Questions and Answers [BEST & NEW]
Last updated on 03rd Aug 2022, Blog, Database, Interview Question


About author
Sanjay (Sr Big Data DevOps Engineer )
Highly Expertise in Respective Industry Domain with 7+ Years of Experience Also, He is a Technical Blog Writer for Past 4 Years to Renders A Kind Of Informative Knowledge for JOB Seeker

 E-mail this post

(5.0) | 13265 Ratings
 2622
Share:
1. What’s NoSQL?
Ans:

NoSQL encompasses a good kind of completely different info technologies that were developed in response to an increase within the volume of knowledge kept regarding users, objects, and merchandise. The frequency during which this information is accessed, and performance and process desires. relative databases, on the other hand, weren’t designed to address the dimensions and legality challenges that face fashionable applications, nor were they engineered to require advantage of a budget storage and process power on the market nowadays.

2.Comparison Between NoSQL & RDBMS ?
Ans:

NoSQL is completely different from RDBMS within the following manner:

Criteria NoSQL RDBMSScalability Very Good AverageQuerying Limited as no be a part of Clause Using SQLStorage mechanism Key-Value try, document, column storage, etc. information & relationship keep in numerous tables
3. What are the options of NoSQL?
Ans:

When compared to relative databases, NoSQL databases ar additional ascendable and supply superior performance, and their information model addresses many problems that the relative model isn’t designed to handle :

Large volumes of structured, semi-structured, and unstructured information.Agile sprints, fast iteration, and frequent code pushes.Object-oriented programming that’s straightforward to use and versatile.Efficient, scale-out design rather than expensive , monolithic design.
4.Make a case for the distinction between NoSQL v/s relative database?
Ans:

The history looks to seem like this :

Google desires a storage layer for its inverted search index. They figure a standard RDBMS isn’t planning to cut it. so that they implement a NoSQL information store, BigTable, on prime of their GFS classification system. The key half is that thousands of low-cost artifact hardware machines give speed and redundancy. everybody else realizes what Google simply did. Brewer’s CAP theorem is proved . All RDBMS systems of use are CA systems. individuals begin wiggling with CP and AP systems yet. K/V stores are immensely less complicated, so that they are the first vehicle for the analysis.

Software-as-a-service systems, in general, don’t give associate degree SQL-like stores. Hence, individuals get additionally fascinated by the NoSQL kind stores. I feel a lot of the take-offs are often associated with this history. Scaling Google took some new ideas at Google and everybody else follows suit as a result of this is often the sole resolution they grasp to the scaling downside right away. Hence, you’re willing to transform everything around the distributed info plan of Google as a result of its sole thanks to scale on the far side of a particular size. Get to grasp additional information regarding this NoSQL vs. SQL – what’s Better? that may assist you grow in your career.

5.A way to script NoSQL sound unit configuration?
Ans:

These are as amenable to scripting as the other UNIX operating system commands and can not be mentioned additional here.The interactive commands on the market in java -jar kvstore.jar runadmin, among those accustomed to produce and execute plans, are often written in 2 ways in which. you’ll produce a file containing the sequence of commands that you just need to run, and run them in a very batch mistreatment java -jar kvstore.jar runadmin load -file .For example, a script file named deploy.kvs might contain commands like the subsequent :

configure – name mystoreplan deploy- datacenter -name Beantown -rf three -waitplan deploy-sn -dcname Beantown -host localhost -port 5000 -waitplan deploy-admin -sn sn1 -port 5001 -waitYou could execute this script by supplying the commanddeploy.kv
6. Will NoSQL information act With Oracle Database?
Ans:

NoSQL information supports retrieving records through the Oracle information External Table functions. This makes it potential to perform some queries from Oracle information and retrieve records from NoSQL information.

7. What’s a prophetess knowledge Model?
Ans:

Cassandra knowledge model consists of 4 main components:

Cluster : created of multiple nodes and keyspaces

Keyspace : A namespace to cluster multiple column families, particularly one per partition

8. What are the benefits and downsides of NoSQL?
Ans:

Advantages of NoSQL :

Using the new node ideas, the information of NoSQL is enlarged to the set limit. Low trade goods hardware takes now as an extra advantage.NoSQL databases are wont to store an enormous volume of knowledge. massive knowledge and recently announced user reviews utilize the thought of NoSQL.There is no expensive administration needed to observe the information of NoSQL.NoSQL is put in with a low cost economy rather than pin money on sophisticated systems.
Disadvantages of NoSQL :

Since NoSQL could be a new technology of information storage, there are several different systems within the market that are already leading within the market.The antecedently designed systems have the support offered around the clock, however the NoSQL network is a smaller amount relatively.Since NoSQL could be a new technology, it’s not supporting the recent commands that are employed in the system.
9. Enlist variations between SQL and NoSQL databases?
Ans:

Differences between SQL and NoSQL databases :

While NoSQL databases scale horizontally, SQL databases scale vertically. While NoSQL databases are document, key-value, graph, or wide-column stores, SQL databases are table-based. While NoSQL databases are better for unstructured data like documents or JSON, SQL databases are superior for multi-row transactions.

10. What’s the CAP theorem? However, is it applicable to NoSQL systems?
Ans:

The CAP theorem was planned by Eric Brewer in early 2000. In this, 3 system attributes are mentioned inside the distributed databases. That is :

Consistency – during this, all the nodes see identical knowledge at identical times.

Availability – It offers North American nations a guarantee that there’ll be a response for each request created to the system regarding whether or not it absolutely was roaring or not.

Partition tolerance – it’s the standard of the NoSQL management system that states that the system can work even though an area of the system has failed or isn’t operating.

11. What differing types of NoSQL Databases are you aware of?
Ans:

There are four most typical kinds of NoSQL databases as below :

Key-value databasesDocument databasesWide-column or Column-family databasesGraph databases stores
12. What’s DocumentDB?
Ans:

DocumentDB or Document information could be a fully NoSQL information service that stores the info as schema-free JSON (JavaScript Object Notation) documents.You also would like measurability, low price and quick readying for your knowledge. altogether these situations we have a tendency to think about DocumentDB. There are several DocumentDB services as below.

Microsoft Azure Cosmos decibelAmazon DocumentDBMongoDB
13. What are the foremost challenges with ancient RDBMS?
Ans:

Following ar a number of the foremost challenges with RDBMS systems :

Not optimized to scale out : RDBMS systems don’t seem to be optimized for horizontal scaling out.

Not ready to handle unstructured knowledge : RDBMS systems don’t seem to be able to handle schema-less knowledge (semi-structured or unstructured)

Costly : there’s a high licensing price for knowledge analysis with RDBMS systems.

Not able to handle the high speed {of knowledge|of knowledge|of information} bodily process :

RDBMS systems are designed for steady data retention.The NoSQL systems evolved to beat all the on top of challenges.
14.However will NoSQL relate to massive data?
Ans:

NoSQL databases are designed with “Big Data” in mind. Since a hard and fast schema model doesn’t bind them, this makes them appropriate for today’s business wants wherever there’s an oversized volume of non-uniform knowledge (Big Data).

15. What’s Document information in NoSQL?
Ans:

Collection

16. Once ought to I exploit NoSQL info rather than a relative database?
Ans:

Relational databases enforce ACID. So, you may have schema based mostly dealing orientated knowledge stores. It’s established and appropriate for ninety nine of the $64000 world applications. you’ll be able to do much with relative databases.

But, there are unit limitations on speed and scaling once it involves large high accessibility knowledge stores. as an example, Google and Amazon have terabytes {of knowledge|of knowledge|of information} kept in massive data centers. Querying and inserting isn’t performant in these situations thanks to the blocking/schema/transaction nature of the RDBMs. That’s the explanation they need to enforce their own databases (actually, key-value stores) for enormous performance gain and measurability.

If you wish a NoSQL decibel you always realize it, potential reasons are:

client needs ninety nine.999% accessibility on a high traffic website.your knowledge makes no sense in SQL, you discover yourself doing multiple be a part of queries for accessing some piece of knowledge.you are breaking the relative model, you have got CLOBs that store denormalized knowledge and you generate external indexes to look at that knowledge.
17. Make a case for distinction between scaling horizontally and vertically for databases?
Ans:

In a info world horizontal-scaling is commonly supported the partitioning of the info i.e. every node contains solely a part of the info, in vertical-scaling the info resides on one node and scaling is completed through multi-core i.e. spreading the load between the computer hardware and RAM resources of that machine.Good samples of horizontal scaling are unit prophetess, MongoDB, Google Cloud hand tool. and a decent example of vertical scaling is MySQL – Amazon RDS (The cloud version of MySQL).Horizontal scaling means you scale by adding additional machines into your pool of resources whereas.Vertical scaling means you scale by adding additional power (CPU, RAM) to associate existing machines.
18. Once ought to we have a tendency to enter one document among another in MongoDB?
Ans:

You should take into account embedding documents for:

contains relationships between entitiesOne-to-many relationshipsPerformance reasons
19. However, do I perform the SQL part equivalent in MongoDB?
Ans:

Mongo isn’t a on-line database, and therefore the devs area unit being careful to advocate specific use cases for $lookup, however a minimum of as of three.2 doing be a part of is currently potential with MongoDB. The new $lookup operator added to the aggregation pipeline is basically similar to a left outer be a part of it.

20. However will column-oriented NoSQL take issue from document-oriented?
Ans:

The main distinction is that document stores (e.g. MongoDB and CouchDB) enable every which way complicated documents, i.e. subdocuments among subdocuments, lists with documents, etc. whereas column stores (e.g. prophetess and HBase) solely enable a hard and fast format, e.g. strict one-level or two-level dictionaries.

For Example :

A document-oriented info (like MongoDB) inserts whole documents (typically JSON), whereas in prophetess (column-oriented db) you’ll be able to address individual columns or supercolumns, and update these one by one, i.e. they work on a special level of coarseness. every column has its own separate timestamp/version (used to reconcile updates across the distributed cluster).

21. What’s Sharding in MongoDB?
Ans:

Sharding could be a methodology for storing knowledge across multiple machines. MongoDB uses sharding to support deployments with terribly giant knowledge sets and high outturn operations.

22. Once ought to I exploit NoSQL info rather than a relative database?
Ans:

Relational databases enforce ACID. So, you’ll have schema based mostly dealing homeward-bound knowledge stores. It’s verified and appropriate for ninety nine of the important world applications. you’ll be able to do much with relative databases.But, there square measure limitations on speed and scaling once it involves large high convenience knowledge stores. for instance, Google and Amazon have terabytes {of knowledge|of knowledge|of information} hold on in huge data centers. Querying and inserting isn’t performant in these situations thanks to the blocking/schema/transaction nature of the RDBMs.If you would like a NoSQL sound unit you always realize it, attainable reasons square measure :Clients need ninety nine.999% convenience on a high traffic website.Your knowledge makes no sense in SQL, you discover yourself doing multiple be a part of queries for accessing some piece of knowledge.You are breaking the relative model, you have got CLOBs that store denormalized knowledge and you generate external indexes to look at that knowledge.
23. What square measures the varied classes On Nosql?
Ans:

The various classes on NOSQL :

KeyValue Store infoColumn Family infoDocument Store infoGraph infoMultivalue infoObject infoTriple Store infoTuple Store infoTabular info
24. The way to script NoSQL sound unit configuration?
Ans:

You may realize that you simply need to make a similar NoSQL sound unit configuration repeatedly for testing functions. The Admin command line interface commands will be written in many ways that.Many uses of the Admin command line interface square measure straightforward commands, like java -jar kvstore.jar makebootconfig to at the start piece a StorageNode, shown on top of.

These square measures are as amenable to scripting as the other UNIX commands and can not be mentioned more here.The interactive commands out there in java -jar kvstore.jar runadmin, among that square measure those wont to produce and execute plans, will be written in 2 ways that.

configure -name mystoreplan deploy-datacenter -name Hub of the Universe -rf three -waitplan deploy-sn -dcname Hub of the Universe -host localhost -port 5000 -waitplan deploy-admin -sn sn1 -port 5001 -waitYou could execute this script by provision the commanddeploy.kvs
25. List the various varieties of NoSQL knowledge stores?
Ans:

The four varieties of no SQL knowledge storage square measure normally accessible or divided into four classes. they’re as follows :

Key-value store – A key-value store could be a basic knowledge storage key system that uses a key to access numerous values.

Column family store – It’s a distributed system of weights and measures with column family storage. The keys square measure columns and rows.

Graph store – The graph store is employed for managing things that require plenty of relationships.

Document store – document stores square measure wont to store stratified knowledge structures within the info directly.

26. What precisely is that the goal of NoSQL?
Ans:

Non-structured knowledge will be kept in NoSQL databases. The NoSQL info could be novel thanks to storing massive datasets. Once it involves storing matter knowledge, NoSQL could be a viable difference to SQL databases.

27. What area unit The professionals And Cons Of Graph Database?
Ans:

Pros : Graph databases seem to be custom-made for networking applications. The archetypal example could be a social community, during which nodes represent users WHO have numerous sorts of relationships to each alternative. Modeling this kind of fact victimization of any of the opposite patterns is commonly a tricky match, however a graph of information would possibly take delivery of it with savor. they’re conjointly excellent suits for associate item-oriented machines.

Cons : Because of the high certification of interconnection among nodes, graph databases are sometimes not acceptable for community partitioning. Graph databases don’t scale out well.

28. What’s NoSQL information design ?
Ans:


29. Justify however Cassandra Writes?
Ans:

Cassandra writes 1st to a commit go online disk for durability then commits to associate in reminiscence form called a memtable. A write could be a success as long as every commit is complete. Writes are unit batched in memory associated with written to disk in an exceedingly table form remarked as an SSTable (looked when string desk). Memtables and SSTables area unit created in line with column family. With this layout Cassandra has minimum disk I/O and offers excessive pace write performance as a result of the commit log is appendbest and Cassandra doesn’t try to seek out on writes. within the occasion of a fault while writing to the SSTable Cassandra will truly replay the commit log.

30. What’s The Key Distinction Between Replication And Sharding?
Ans:

Replication takes the identical knowledge and copies it over multiple nodes. Sharding puts specific statistics on totally different nodes. Sharding is particularly precious for overall performance because of the actual fact it will enhance every examination and write overall performance. victimization replication, notably with caching, will greatly enhance examine performance but will do very little for packages that have an entire heap of writes.

31.Justify regarding Cassandra NoSQL?
Ans:

Cassandra is an open offer scalable and very accessible “NoSQL” distributed direction machine from Apache. Cassandra claims to supply fault-tolerant linear quantifiability and not use one issue of failure. Cassandra sits inside the ColumnFamily NoSQL camp.The Cassandra statistics version is meant for large-scale distributed statistics and trades ACID-compliant records practices for overall performance and accessibility. Cassandra is optimized for very speedy and notably hard writes. Cassandra is written in Java and will run on an intensive array of operating systems and platforms.

32. Justify Cassandra knowledge Model?
Ans:

The Cassandra facts version has the four most significant concepts which might be a cluster, keyspace, column, column family. Clusters embrace several nodes (machines) and will incorporate over one keyspace. A keyspace could be a namespace to establish a few column families, usually one to keep with the appliance. A column includes a decision, fee, and timestamp. A column’s family includes a few columns documented by employing a row key.


33.Justify however Cassandra Writes?
Ans:

Cassandra writes initially to a commit go online disk for durability then commits to associate degree in reminiscence form referred to as an unforgettable. A write may be a success as shortly as every commit is complete. Writes are batched in memory associate degreed written to disk in an exceedingly table form remarked as an SSTable (looked once string desk). Memtables and SSTables are created in line with the column’s family.With this layout, Cassandra has minimum disk I/O and offers excessive pace write performance as a result of the commit log is appendbest and Cassandra doesn’t attempt to search out on writes. within the occasion of a fault while writing to the SSTable Cassandra will really replay the commit log.

34.Understanding the distinction between Azure Cosmos decibel NoSQL and relational databases?
Ans:


35. What’s Flume?
Ans:

Flume is an associate degree ASCII text file code program developed with the help of the Cloud era that acts as a supplier for aggregating and moving massive quantities of records around a Hadoop cluster as a result of the records being made or shortly thenceforth. Its preferred use case is that the gathering of log documents from all of the machines in an exceedingly cluster to persist them in an exceedingly centralized keep beside HDFS.In Flume, we tend to produce record flows by means of increasing chains of logical nodes and connecting them to resources and sinks. As an example, say we tend to want to maneuver facts from associate degree Apache to get admission to log into HDFS. You produce a supply victimization queue, get admission to log associate degreed use a logical node to course this to an HDFS sink.

36. What’s Bigsql?
Ans:

Big knowledge is the fruit of various studies and development initiatives at IBM. IBM has taken the paintings from those various initiatives associate degreed discharged them as an era preview referred to as massive SQL.IBM claims that massive SQL offers durable SQL assist for the Hadoop atmosphere :

It has a scalable structureIt helps SQL and facts types to be had in SQL ’92, and it’s some additional capabilitiesIt supports JDBC and ODBC patron driversIt has economical handling of “factor queries”Big SQL is predicated entirely on a multithreaded design, thus it’s smart for performance and also the quantifiability in an exceedingly massive SQL surroundings primarily depends on the Hadoop cluster itself; this can be its size and programming policies.
37. However massive Sql Works?
Ans:

The Big SQL engine analyzes incoming queries. It separates parts to execute at the server versus the parts to be dispensed by victimization of the cluster. It rewrites queries if essential for progressing overall performance? determines the right garage lookout for data? produces the execution arrangement and executes and coordinates the question.

IBM architected massive SQL with the goal that existing queries have to be compelled to run with no or few modifications which queries ought to be performed as effectively because the chosen storage mechanisms allow. And in preference to constructing a separate question execution infrastructure, they created massive SQL believe a decent deal on Hive, loads of the facts manipulation language, the facts definition language syntax, and also the overall standards of huge SQL ar almost like Hive. and massive SQL shares catalogs with Hive through the Hive metastore. therefore everybody will question each different table.

38. What’s “polyglot Persistence” In Nosql?
Ans:

Neal Ford coined the period polyglot programming, to precise the construct that applications ought to be written in an exceedingly mixture of languages to require advantage of the fact that totally different languages are appropriate for confronting one in all form issues. advanced packages integrate specific sorts of troubles, thus selecting the correct language for every task could also be more effective than seeking to suit all elements into one language.

Similarly, once performing on associate degree etrade business trouble, the usage of a facts store for the buying cart that is exceptionally out there and should scale is crucial, however identical records keep can’t assist you notice product offered by means of the customers’ buddies—which may be a whole exceptional question. We tend to use the period polyglot persistence to outline this hybrid technique to endurance.

39. What’s the trigger?
Ans:

Triggers are held on programs that get mechanically dead once an occurrence like INSERT, DELETE, AND UPDATE(DML) statement happens. Triggers also can be elicited in response to knowledge definition statements(DDL) and info operations, as an example, SERVER ERROR, LOGON.


40. What are the subsets of SQL?
Ans:

The following are the subsets of SQL :

DDL(Data Definition Language): Includes SQL commands like produce, ALTER, and DELETE.

DML(Data Manipulation Language): Accesses and manipulates information Uses INSERT, UPDATE commands.

DCL(Data management Language): Controls access to the info. Uses commands like GRANT and REVOKE.

41. What’s a Cross Join?
Ans:

In a SQL cross be a part of, a mixture of each row from the 2 tables is enclosed within the result set. this can be conjointly known as vector be a part of. for instance, if table A has 10 rows and table B has twenty rows, the result set can have ten * twenty = two hundred rows provided there’s an obscurity clause within the SQL statement.

42. What are the scalar functions in NoSQL? offer an associate degree example?
Ans:

Scalar Functions are accustomed to come back one worth supporting the input values. Scalar Functions ar as follows :

UCASE(): Converts the required field in capital

LCASE(): Converts the required field in lower-case letter


43. What’s a set-based solution?
Ans:

Cursors operate individual rows, and within the case of a group, it works on a resultant set of information, that may well be a table/view or a be a part of each. The resultant set is associate degree output of a SQL question.

44. What’s denormalization, and once does one opt for it?
Ans:

De-normalization may be a technique typically accustomed to improve performance that the table style permits redundant information to avoid complicated joins. If the application involves significant browser operations, then denormalization is employed at the expense of the write operations performance.

45. What’s a dealings log?
Ans:

A log is an associate degree audit path file wherever the history of actions dead by the software package is held on.


46. What are Object Privileges?
Ans:

An object-level privilege may be a permission granted to an info user account or role to perform some action on an info object. These object privileges embody choose, INSERT, UPDATE, DELETE, ALTER, INDEX on tables, and so on.

The following examples are object privileges that may be granted to users :

cSELECT ON 60 minutes.employees TO myuserINSERT ON 60 minutes.employees TO myuser
47. What’s information integrity?
Ans:

Data integrity defines the accuracy, consistency, and responsibleness of information that’s held on within the info.There are four sorts of information integrity :

Row integrityColumn integrityReferential integrityUser-defined integrity
48. However is information in a very NoSQL info stored?
Ans:

It depends on the sort of NoSQL info is employed. every info stores the info victimization completely different strategies like some use column store, some graphs, and a few documents, etc. Below is the clarification of every info and the way they store the info.

Graph stores : It stores the info within the sort of graphs.

Key-value stores : during this, every item holds on with an associate degree attribute name at the side of its worth. for instance Riak, Berkeley, etc.

Wide Column stores : information is held within the columns rather than rows. samples of such information stores are prophetess and HBase.

49. NoSQL Developer Skills?
Ans:

Here are some options to observe out for once trying to find associate degree older NoSQL developer :

Should be able to install, configure, upgrade, and patch info package (MySQL cluster, Cassandra, MySQL, and Couchbase)Should be able to handle operations for each production and development databasesShould be able to troubleshoot NoSQL issues and performance delaysShould be able to build and put together monitors to line the health of servers and therefore the databasesShould be able to develop, enforce, manage, and automatise the backup and recovery design as per necessities
50. Make a case for algorithmic hold on procedure?
Ans:

Stored procedure line itself till it reaches some precondition may be an algorithmic hold on procedure. It permits the programmers to use a group of code n variety of times.

51. What’s the hold on procedure?
Ans:

It is an operation consisting of the many SQL statements to access the info system. many SQL statements square measure consolidated into a hold on procedure and square measure dead where and whenever needed.

52. What’s ALIAS command?
Ans:

It will be utilized in wherever clause of a SQL question victimization as keyword.

Example : SELECT S.StudentID, E.Result from student S, examination as E wherever S.StudentID = E.StudentID

53. What square measure STUFF and REPLACE functions?
Ans:

Syntax :

REPLACE : replaces the present characters of all the occurrences.


Syntax :


54. However will dynamic SQL be executed?
Ans:

It will be dead by the subsequent ways in which :

By capital punishment the question with parameters.By victimization EXECBy victimization sp_executesql
55. What’s the TRUNCATE command? However, is it totally different from the DELETE command?
Ans:

DELETE	TRUNCATE
DML command DDL command	We can use wherever clause we will not use WHERE clause
Deletes a row from the table. Deletes all rows from the table.	We can rollback. we tend to not roll back.
56. What square measures the various case manipulation functions in SQL?
Ans:

LOWER : Converts all the characters to minuscule.

UPPER : Converts all the characters to capital.

INITCAP : Converts initial character of every word to capital.

57. What square measures the character manipulation functions?
Ans:

Character manipulation functions alter, extract and alter the character string.

58. What square measures the various operators in SQL?
Ans:

ArithmeticComparisonLogical
59. What’s the MERGE statement?
Ans:

The statement permits conditional updates or inserts into the table. It updates the row if it exists or inserts the row if it doesn’t exist.

60.Distinguish between BETWEEN and IN conditional operators?
Ans:


61. Why is NoSQL’s document-oriented information model a gorgeous choice?
Ans:

As data-sensitive organizations have moon-faced several data-related issues, therefore a brand new resolution has been introduced and also the answer is NoSQL Document Databases. it’s enticing to the users as a result of it keeps information in documents instead of rows and columns. Some minimum normal format rules should be followed by these documents. The format decisions may well be JSOS, XML, YAML, etc. The priority is usually JSON for NoSQL databases thanks to its higher compatibility and readability.

62. What’s the first key?
Ans:

A primary key constraint unambiguously identifies every row/record in a very information table. Primary keys should contain distinctive values. Null price and duplicate values aren’t allowed to be entered within the primary key column. A table will have just one primary key. It will incorporate single or multiple fields.

63. What square measures the options of MySQL?
Ans:

Here square measure a number of the vital options of MySQL :

It is reliable and straightforward to useIt supports normal SQL (Structured question Language)MySQL is secure because it consists of {a information|a knowledge|and information} security layer that protects sensitive data from unauthorized usersMySQL incorporates a versatile structure and supports an oversized range of embedded applicationsIt is one in all the in no time information languages
64. Make a case for the various styles of indexes in SQL?
Ans:

There square measure 3 styles of indexes in SQL :

Unique Index – It doesn’t permit a field to possess duplicate values if the column is exclusively indexed.

Clustered Index – This index defines the order during which information is physically kept in a very table. It reorders the physical order of the table and searches supported key values. There is just one clustered index per table.

Non-Clustered Index – It doesn’t type the physical order of the table and maintains a logical order of the information. every table will have quite one non-clustered index.

65. What’s a subquery in SQL? What square measures the various styles of a subquery?
Ans:

A subquery could be a question at intervals another question. Once there’s a question at intervals a question , the outer question is termed the most question, whereas the inner question is termed a subquery. There square measure 2 styles of a subquery :

Correlated subquery : It obtains values from its outer question before it executes. Once the subquery returns, it passes its results to the outer question.

Non-Correlated subquery : It executes several of the outer questions. The subquery executes 1st and so passes its results to the outer question. each inner and outer queries will run severally.

66. What’s collation sensitivity?
Ans:

Collation sensitivity defines the principles to type and compare the strings of character information, supporting correct character sequence, case-sensitivity, character dimension, and accent marks, among others.

67. Are you able to name differing types of MySQL commands?
Ans:

SQL commands square measure divided into the subsequent

Data Definition Language (DDL)Data Manipulation Language (DML)Data management Language (DCL)Transaction management Language (TCL)

68. What’s info on relationships?
Ans:

An info Relationship is outlined because of the affiliation between 2 electronic database tables. The first table features a foreign key that references the first key of another table. There square measure 3 varieties of info Relationship :

One-to-oneOne-to-manyMany-to-many
69. Mention the command wont to revisit the privileges offered by the GRANT command?
Ans:

REVOKE command is employed to urge back the privileges offered by the GRANT command.

70. What square measures the variations between the ‘WHERE’ Clause and therefore the ‘HAVING’ Clause?
Ans:

Below square measure the most important variations between the ‘WHERE’ Clause and therefore the ‘HAVING’ Clause :

WHERE Clause	HAVING Clause
It performs filtration on individual rows supporting the required condition.	HAVING clause performs filtration on teams supporting the required condition.
It is often used while not clustered BY Clause.	it’s invariably used with the cluster BY Clause.
WHERE Clause is applied in row operations.	HAVING is applied in column operations.
We cannot use the wherever clause with combination functions.	This clause works with combination functions.
WHERE comes before cluster BY HAVING comes when cluster BY.	HAVING comes when cluster BY.
This clause acts as a pre-filter.	The HAVING clause acts as a post-filter.
WHERE Clauses are often used with choose, INSERT, UPDATE, and DELETE statements.	This Clause will solely be used with the choose statement.
71. A way to produce a table in SQL?
Ans:

CREATE TABLE table_name (
column1 datatype,
column2 datatype,
column3 datatype,
….
);
72. A way to delete a table in SQL?
Ans:

There square measures 2 ways in which to delete a table from sql: DROP and TRUNCATE. The DROP TABLE command is employed to fully delete the table from the info. this can be the command :

DROP TABLE table_name; The higher than command can fully delete all the information gifts within the table together with the table itself.

73. What’s social control in SQL?
Ans:

Normalization is employed to decompose a bigger, complicated table into easy and smaller ones. This helps the US in removing all the redundant information.

Generally, in a table, we are going to have a great deal of redundant info that isn’t needed, therefore it’s better to divide this complicated table into multiple smaller tables that contain solely distinctive info.

74. A way to amend a table name in SQL?
Ans:

We will kick off by giving the keywords ALTER TABLE, then we are going to follow it up by giving the first name of the table, after that, we are going to surrender the keywords RENAME TO and eventually, we are going to offer the new table name.

For example: if we would like to vary the “employee” table to “employee_information”, this may be the command :

ALTER TABLE workerRENAME TO employee_information;
75. A way to notice duplicate records in SQL?
Ans:

There square measures multiple ways in which to seek out duplicate records in SQL. Let’s see however will we discover duplicate records victimization groupby :

SELECT
x,
y,
COUNT(*) occurrences
FROM z1
GROUP BY
x,
y
HAVING
COUNT(*) > 1;
76. What square measures the advantages of TypeScript?
Ans:

Cursors in SQL square measure accustomed store information tables. There square measure 2 kinds of cursors :

1. Implicit pointer
2. specific pointer
Implicit pointer : These implicit cursors square measure default cursors that square measure mechanically created. A user cannot produce an associate degree implicit pointer.

Explicit pointer : Explicit cursors square measure user-defined cursors. this can be the syntax to make specific pointer :

DECLARE cursor_name pointer FOR choose * FROM table_name

We kick off by giving by keyword DECLARE, then we have a tendency to offer the name of the pointer, at the moment we have a tendency to offer the keywords pointer FOR choose * FROM, finally, we have a tendency to concede the name of the table.

77. A way to modify column data-type in SQL?
Ans:

We can modify the data-type of the column victimization of the alter table. this may be the command :

ALTER TABLE table_nameMODIFY COLUMN column_name datatype;We kick off by giving the keywords ALTER TABLE, then we are going to concede the name of the table. After that, we are going to concede the keywords MODIFY COLUMN. Going ahead, we are going to concede the name of the column {for that|that} we might need to vary information|the info|the information}type and at last we are going to concede the data kind to which we might need to vary.
78. However will dynamic SQL be executed?
Ans:

By capital punishment the question with parametersBy victimization executive departmentBy victimization sp_executesql
79. What square measure the most variations between #temp tables and @table variables and that one is most popular ?
Ans:

1. SQL server will produce column statistics on #temp tables.
2. Indexes will be created on #temp tables
3. @table variables square measure keep in memory up to a precise threshold
80. What square measures the cons of a standard RDBMS over NoSQL systems?
Ans:

The object-relational mapping layer will be complicated.Entity-relationship modeling should be completed before testing begins, that slows development.RDBMSs don’t scale out once joined square measure is needed.Sharding over several servers will be done however, needs application code and can be operationally inefficient.Full-text search needs third-party tools.function NoReturnType(): void
81.A way to produce a keep procedure in SQL Server?
Ans:

A keep Procedure is nothing however a ofttimes used SQL question. Queries like a pick question, which might usually be accustomed retrieve a collection of data repeatedly inside a information, will be saved as a leep Procedure. The keep Procedure, once referred to as, executes the SQL question save inside the keep Procedure.

Syntax to make a keep Proc :


82.A way to connect SQL Server management studio to the native information?
Ans:

Launch the SQL Server Management Studio from the beginning menu.In the panel shown below, choose the Server sort as information Engine and Server Name because the name of your laptop/ desktop system and click on on the Connect button.Select the Authentication as ‘Windows Authentication.A secure affiliation would be established, and also the list of the on the market Databases are loaded within the Object person window pane.
83. What’s the case once in SQL Server?
Ans:

Case once statements in SQL area unit accustomed run through several conditions and to come back a worth once one such condition is met. If none of the conditions is met within the once statements, then the worth mentioned within the Else statement is returned.

Syntax :


84. What’s thirty two bit nuances?
Ans:

There is further memory mapped file activity with journaling. This can further constrain the restricted dB size of thirty two bit builds. Thus, currently journaling by default is disabled on thirty two bit systems.

85. However long will the reproduction set failover take?
Ans:

It may take 10-30 seconds for the first to be declared down by the opposite members and a replacement primary non appointive. throughout this window of your time, the cluster is down for “primary” operations – that’s, writes and powerful consistent reads. However, you will execute eventually consistent queries to secondaries at any time (in slaveOk mode), as well as throughout this window.

86. A way to notice server name in SQL Server?
Ans:

Run the question choose @@version; to seek out the version and name of the SQL Server you’re exploiting.

87.A way to install SQL Server management studio ?
Ans:

Launch Google and within the Search toolbar, sort in SQL Server Management Studio’ transfer. move to the routed web site and click on the link to transfer. Once the transfer is complete, open the .exe file to put in the content of the file. Once the installation is complete, refresh or restart the system, as needed.

Alternatively, once SQL Server is put in and launched, it’ll prompt the user with an associate choice to launch SQL Server Management Studio.

88. A way to connect SQL Server management studio to the native information?
Ans:

Launch the SQL Server Management Studio from the beginning menu.In the panel shown below, choose the Server sort as information Engine and Server Name because the name of your laptop/ desktop system and click on on the Connect button.Select the Authentication as ‘Windows Authentication.A secure affiliation would be established, and also the list of the on the market Databases are loaded within the Object person window pane.

89. What’s cte in SQL Server?
Ans:

CTEs square measure Common Table Expressions that square measure accustomed produce temporary result tables from that knowledge are often retrieved/ used. the quality syntax for a CTE with a choose statement is :

WITH RESULT AS(SELECT COL1, COL2, COL3FROM EMPLOYEE)SELECT COL1, COL2 FROM RESULTCTEs are often used with Insert, Update or Delete statements furthermore.
90. Distinction between RDBMS and NoSQL databases?
Ans:

Let’s think about an associate degree example of storing info about a couple of users and their hobbies. We’d like to store a user’s name, last name, cellular phone variety, city, and hobbies.

In a computer database, we’d probably produce 2 tables: one for Users and one for Hobbies.


91. Justify NoSQL info misconceptions?
Ans:

Over the years, several misconceptions concerning NoSQL databases have unfolded throughout the developer community. during this section, we’ll discuss 2 of the foremost common misconceptions :

Relationship knowledge is best fitted to relative databases.NoSQL databases don’t support ACID transactions.
92. What’s the ultimate consistency?
Ans:

Eventual consistency may be a property of distributed databases. Ultimate consistency ensures that once an associate degree update is formed to the info, eventually all nodes within the distributed info can replicate that update.

93. What language is employed to question NoSQL?
Ans:

NoSQL databases span a spread of sorts and implementations. As a result, NoSQL databases may be queried employing a type of question languages and arthropod genus. MongoDB, the world’s preferred NoSQL info, may be queried for exploitation of the MongoDB search language (MQL).

94. Will NoSQL have a schema?
Ans:

NoSQL databases usually have versatile schemas. Note that some NoSQL databases like MongoDB even have support for schema validation, thus developers will lock down their schemas the maximum amount or as very little as they’d like once they are prepared.


95. What information model will NoSQL use?
Ans:

NoSQL databases comprise four main classes or sorts. One factor they need in common is that they do not use the rigid tabular row-and-column information model that ancient relative databases (sometimes referred to as SQL databases) use.

Instead, NoSQL databases have an information model that reflects their explicit class. Document databases will store a good deal of data in a very single document and may nest documents. Key-value stores have a straightforward information model, even as their name implies. Wide column stores feature a lot of variation in information sorts and therefore the range of columns in use than row-oriented relative databases. Graph information bases have data models supported graph theory, with information models created from nodes and edges that relate those nodes

96. Is it troublesome to alter tables and relationships?
Ans:

Alteration of the relationships between tables or addition of a replacement table may have an effect on the present relations. This implies dynamically the schema.

Change of the schema would be like eliminating the present one and fashioning a replacement schema.

Addition of a replacement practicality would wish all the weather to support the new structure. modification is inevitable.

Example : every further column wants all the previous rows to own values for that column. Whereas in Cassandra (a NoSQL database), you’ll add a column to specific row partitions.

97. Justify RDBMS ACID properties of the information ?
Ans:

The ACID properties of an information area unit Atomicity, Consistency, Isolation and sturdiness.

‌
Atomicity : associate “all or nothing” approach. If any statement within the dealings fails, the complete dealings is rolled back.

Consistency : The dealings should meet all protocols outlined by the system. No [*fr1] completed transactions.

Isolation : No dealings has access to the other dealings that’s in associate intermediate or unfinished state. Every deal is freelance.

Durability : Ensures that when a dealings commits to the information, it’s preserved through the utilization of backups and dealings logs.

98. However, will columnar information store data?
Ans:


99. Why not use a spreadsheet?
Ans:

It’s terribly convenient to use stand out for knowledge analysis if you merely ought to handle thousands of rows and tables. however once you get to concerning ten,000 rows, you’ll like an information system to trot out mammoth datasets. (Excel will quickly freeze up.If you’re operating for an organization that has tens of thousands of stand out spreadsheets – on completely different computers, say – and therefore the employees and customers ought to see knowledge over a period of time, it’s troublesome to harmonize your knowledge, particularly if many folks are in identical projects.Spreadsheets aren’t ideal for operating with multiple datasets in cycle.
100. What’s therefore special concerning NoSQL?
Ans:

NoSQL databases are a speedier different as a result of, for one, you don’t ought to be a part of tables in NoSQL. Each piece of knowledge is kept in an exceedingly JSON format. and therefore the limitation of relative databases is that every item will solely contain one attribute. for example this time, inspect the higher than Fruit table and spot however every column is devoted to simply one live or attribute. Because of javascript, NoSQL permits you to store knowledge in an exceedingly nested fashion.NoSQL is additionally straightforward to use. You don’t have to trot out the “mismatch” between rows and columns. as an example, storing all the reviewer’s info in one document as against having to affix innumerous tables. In this manner, you write less code that, hopefully, means fewer errors.


73 NoSQL Interview Questions and Answers (2026)
Blog / 73 NoSQL Interview Questions and Answers (2026)
NoSQL interview questions and answers
NoSQL isn't a niche skill anymore. As applications scale to huge volumes of users and data, non-relational stores have become the default backing store for high-throughput, horizontally-scaled systems, so more teams run them and more interviewers expect genuine fluency. Walk in shaky on CAP, sharding, or data modeling and you'll lose the offer to someone who isn't.

This is your fix: 73 questions with tight, interview-ready answers and code where it actually helps. They're worked Junior to Mid to Senior, so you build from the fundamentals straight into the deep distributed-systems stuff. Work through them and you'll speak about NoSQL like you've shipped it.

Q1.What are the four primary NoSQL data models (Key-Value, Document, Wide-Column, Graph), and can you give a use case where one is significantly better than the others?
Junior
The four models differ in how they structure values and what query patterns they optimize: Key-Value (simplest lookup), Document (self-contained nested records), Wide-Column (sparse columnar rows at scale), and Graph (relationship-first traversal).

Key-Value:

Opaque value retrieved by a single key; fastest possible lookups.

Best when: caching or session storage (e.g. Redis holding a user session), where you never query by value.

Document:

Stores JSON/BSON documents with nested fields you can index and query.

Best when: a product catalog where each item has different attributes; the whole object loads in one read.

Wide-Column:

Rows keyed by a partition key, with flexible sparse columns grouped into families.

Best when: massive write-heavy time-series or event logging (e.g. Cassandra ingesting IoT readings) needing linear write scaling.

Graph:

Nodes and edges as first-class citizens with stored relationships.

Best when: fraud detection or social networks; "friends-of-friends" traversals that would be many costly joins elsewhere.

Q2.What is the difference between 'Horizontal Scaling' and 'Vertical Scaling,' and why is NoSQL inherently better at the former?
Junior
Vertical scaling (scale up) means adding more power (CPU, RAM) to a single machine; horizontal scaling (scale out) means adding more machines and spreading data across them. NoSQL is built for the latter because it relaxes the rigid consistency and join requirements that make distributing a relational database hard.

Vertical scaling: Simple but hits a hardware ceiling and gets exponentially expensive; the single node remains a point of failure.

Horizontal scaling: Add commodity nodes; capacity grows near-linearly and the cluster tolerates node failures.

Why NoSQL fits horizontal scaling:

Data is partitioned (sharded) by key, so each node owns a slice independently.

Aggregate-oriented models avoid cross-node joins and multi-row ACID transactions, which are the things that make sharding a relational DB painful.

Many accept eventual consistency, easing replication across nodes.

Q3.What is the conceptual difference between a key-value store and a document store?
Junior
Both retrieve a value by a key, but a key-value store treats the value as opaque (it doesn't look inside), while a document store understands the structure of the value and can index and query its internal fields. A document store is essentially a key-value store with a transparent, queryable value.

Key-Value:

Value is a blob (string, JSON, binary); the DB only supports get/put by key.

Maximally fast and simple, but you can't query by anything except the key.

Document:

Value is a structured document the DB parses; you can filter, index, and partially update fields.

Supports secondary indexes and rich queries (e.g. db.users.find({age: {$gt: 30}})).

Net difference: transparency of the value drives query capability versus raw simplicity.

Q4.What is 'Sharding' and how does it enable horizontal scalability?
Junior
Sharding is horizontal partitioning: splitting a dataset across multiple nodes so each holds only a subset of the data. It enables horizontal scalability because you add capacity by adding cheap nodes rather than upgrading one machine, and load is divided among them.

What it does:

Each shard stores a distinct slice of rows/documents, decided by a shard key.

Total dataset and throughput exceed what any single node could hold or serve.

How keys map to shards:

Hash-based: hash the key for even distribution (loses range-query locality).

Range-based: contiguous key ranges per shard (good for ranges, risks hotspots).

Consistent hashing is common to minimize data movement when shards change.

Why it scales horizontally:

Reads/writes for different keys hit different nodes, so throughput grows roughly linearly with node count.

Combined with replication, shards also get fault tolerance.

Costs:

Cross-shard queries, joins, and transactions become expensive or unsupported.

A poor shard key causes uneven distribution (the same hot-partition problem).

Q5.What is object/blob storage, and how does it fit into the NoSQL/non-relational landscape?
Junior
Object (blob) storage stores data as discrete objects (a blob of bytes plus metadata and a unique key) in a flat namespace addressed by key, rather than as files in a tree or rows in a table. It is non-relational because it abandons schemas, joins, and query languages entirely in favor of massive, cheap, durable storage you fetch by key.

What an object is:

The data (any bytes: images, video, backups, logs), a unique key/path, and metadata; typically accessed over HTTP APIs (e.g., S3-style GET/PUT).

Examples: Amazon S3, Azure Blob Storage, Google Cloud Storage.

Where it fits in the NoSQL landscape:

Like key-value stores, access is by key, with no schema or relational querying; it scales horizontally to petabytes with high durability via replication.

Difference: objects are large, opaque, and immutable-ish (you replace, not edit in place), optimized for throughput, not low-latency record ops.

Typical use: Storing large binary assets while keeping a small reference (URL/key) in a database; backups, data lakes, static content.

Trade-off: No rich queries or transactions across objects; you must build indexing/search elsewhere if you need it.

Q6.How does TTL (time-to-live) / automatic data expiration work in NoSQL databases, and what are common use cases?
Junior
TTL is a per-record (or per-collection) setting that tells the database to automatically expire and delete data after a defined time, so you don't have to run manual cleanup. A background process periodically scans for expired entries and removes them, which keeps datasets bounded and ideal for transient data.

How it's expressed: Either a duration from write (e.g., Redis EXPIRE key 3600) or an absolute timestamp field with a TTL index (e.g., MongoDB expireAfterSeconds).

Lazy vs. background deletion:

Expiry is often eventual: a background reaper runs on an interval, so data may linger briefly past its TTL.

Some stores also delete lazily on access (the read finds it expired and removes it).

Common use cases:

Session tokens, caches, rate-limit counters, OTPs, and short-lived feature flags.

Compliance-driven data retention (auto-purge after N days) and rolling time-series/log data.

Caveat: Don't rely on exact-instant deletion; if precise expiry matters, check the timestamp on read rather than trusting the reaper's timing.

Q7.When would you choose a NoSQL database over a relational one, and what are the specific trade-offs you are accepting?
Junior
Choose NoSQL when your scale, data shape, or access pattern fights the relational model: huge horizontal scale, flexible/evolving schemas, or known query patterns that map to a denormalized model. In exchange you usually give up rich ad-hoc joins, strong multi-record transactions, and strong consistency by default.

Good fits:

Massive write/read volume needing horizontal scale across commodity nodes (Cassandra, DynamoDB).

Flexible or rapidly evolving schema and semi-structured data (document stores like MongoDB).

Well-known, denormalized access patterns: model the data to match the query.

Specialized shapes: graphs, time series, wide-column, key-value caches.

Trade-offs you accept:

Weaker transactional guarantees: often eventual consistency, limited multi-record ACID, pushing logic (Sagas, idempotency) into the app.

Limited ad-hoc querying and joins: data duplication and denormalization become your job, and new query patterns may force remodeling.

Operational/data integrity moves to the application (no foreign keys, fewer constraints).

Rule of thumb: pick NoSQL for scale + known access patterns; don't pick it just to avoid schema design.

Q8.What is a wide-column store, and how does its storage layout differ from a standard relational table?
Mid
A wide-column store organizes data by rows that can each hold a huge number of dynamic columns, grouped into column families, and it physically stores data column-family-wise rather than row-wise: this makes it sparse-friendly and built for write throughput at scale.

Schema is flexible per row:

Each row can have different columns; a relational table forces every row into the same fixed columns (with NULLs for missing values).

No storage cost for absent columns: ideal for sparse data with millions of possible attributes.

Storage layout:

Data is grouped by column family and keyed by a partition key, so related columns sit together on disk.

A relational engine typically stores entire rows contiguously, optimized for reading full records.

Designed for distribution: The partition key decides which node owns the data, enabling horizontal scaling and fast writes (e.g. Cassandra, HBase).

Query trade-off: you query along the partition/clustering keys, not arbitrary ad-hoc joins like SQL.

Q9.Explain the 'Impedance Mismatch' problem and how NoSQL databases attempt to solve it.
Mid
Impedance mismatch is the friction between an application's in-memory object model (nested objects, lists, references) and the flat, tabular relational model: objects must be shredded across many tables and reassembled, requiring an ORM and joins. Document NoSQL reduces this by storing data in the same shape the application uses.

The mismatch:

An object like an order with nested line items maps to several normalized tables.

Reads/writes need joins and an ORM to translate rows back into objects, adding complexity and overhead.

How document stores solve it:

The nested object is persisted as a single JSON/BSON document, matching the application structure directly.

One read returns the whole aggregate: no joins, less translation code.

Trade-off: Denormalization can duplicate data and complicate updates; you optimize for read patterns instead of normalization.

Q10.In what scenarios would a graph database be more efficient than a document or relational store?
Mid
A graph database wins when queries are about relationships and traversals of variable, often deep, depth: it stores edges as direct pointers between nodes, so following them is constant-time per hop rather than a join that scales with table size.

Deep, multi-hop traversals: "Friends of friends of friends" or shortest-path queries explode into many self-joins in SQL; a graph just walks edges.

Index-free adjacency: Each node physically references its neighbors, so traversal cost depends on the result size, not total dataset size.

Relationship-centric domains: Fraud rings, recommendation engines, social graphs, network/dependency mapping.

When NOT to use it: Simple key lookups or bulk aggregate scans: a key-value or document store is simpler and faster.

Q11.Explain the CAP theorem. If a network partition occurs, why must a NoSQL database choose between Consistency and Availability? Give a real-world scenario where you would prioritize one over the other.
Mid
The CAP theorem states that a distributed system can guarantee at most two of Consistency, Availability, and Partition tolerance simultaneously. Since network partitions are unavoidable in distributed systems, P is not optional: when one happens you must choose between staying Consistent (reject requests that can't be confirmed) or staying Available (serve possibly stale data).

The three properties:

Consistency: every read sees the latest write (or an error).

Availability: every request gets a non-error response.

Partition tolerance: the system keeps working despite dropped messages between nodes.

Why it's really a C-vs-A choice: During a partition, a node either refuses to answer until it can sync (chooses C) or answers from its local state (chooses A); it can't do both.

Prioritize Consistency (CP): A banking ledger: better to reject a withdrawal than risk a double-spend on stale data.

Prioritize Availability (AP): A shopping cart or social feed: showing slightly stale data beats showing an error; reconcile later.

Q12.Compare the ACID properties of relational databases with the BASE properties of NoSQL. What does 'Soft State' and 'Eventual Consistency' mean in practice?
Mid
ACID guarantees correctness with strict transactional guarantees, while BASE trades immediate consistency for availability and scale: it accepts that data converges over time rather than being correct on every read.

ACID (relational):

Atomicity: all-or-nothing transactions.

Consistency: every transaction moves the DB between valid states (constraints hold).

Isolation: concurrent transactions don't interfere.

Durability: committed data survives crashes.

BASE (NoSQL):

Basically Available: the system answers requests even if some nodes fail.

Soft State: replica state may keep changing over time without new input, as updates propagate in the background.

Eventual Consistency: if writes stop, all replicas eventually converge to the same value.

Soft State in practice: You can't assume the value you read is the final one: another replica may hold a newer copy still syncing.

Eventual Consistency in practice: A write to one node is visible immediately there but takes milliseconds to seconds to reach others (replication lag).

Trade-off: ACID favors correctness for transactional systems (banking); BASE favors availability and horizontal scale (large web/distributed systems).

Q13.What exactly is 'eventual consistency'? What are the potential risks for the end-user, and how can they be mitigated at the application level?
Mid
Eventual consistency means that, in the absence of new writes, all replicas will eventually converge to the same value, but for a window of time different replicas can return different (stale) results.

What it guarantees: Convergence over time, not instant agreement: no bound on when, just that it happens once propagation completes.

Risks for the end-user:

Stale reads: seeing an old value (e.g. a profile update not yet visible).

Lost-update / conflicting writes if two replicas accept concurrent writes.

Non-monotonic reads: reading a newer value, then an older one from a lagging replica.

Application-level mitigations:

Read-your-writes / session consistency: route a user to a replica that has their write or read from the primary after writing.

Quorum reads/writes (R + W > N) for keys that need freshness.

Conflict resolution: versioning, vector clocks, or CRDTs instead of blind last-write-wins.

UX tricks: optimistic UI that shows the user's own change locally while it propagates.

Q14.Explain the difference between Strong, Eventual, and Causal consistency — which would you choose for a social media feed vs. a bank balance?
Mid
Strong consistency guarantees every read sees the latest write; eventual consistency only promises convergence over time; causal consistency sits between, preserving the order of operations that are causally related while allowing unrelated ones to be seen in any order. A bank balance needs strong consistency; a social feed is fine with eventual (often causal) consistency.

Strong consistency: All clients see a single, up-to-date value; higher latency and lower availability during partitions.

Eventual consistency: Replicas converge eventually; reads may be stale, but availability and latency are excellent.

Causal consistency:

Preserves cause-and-effect ordering: if a reply depends on a post, no one sees the reply before the post.

Concurrent, unrelated updates can still appear in different orders.

Choosing:

Social feed: eventual/causal is ideal: stale-by-seconds is harmless, and causal ordering keeps comment threads coherent.

Bank balance: strong consistency: a stale or out-of-order read could allow overdrafts or double-spends.

Q15.In the context of CAP, how do 'CP' and 'AP' databases behave differently during a network partition?
Mid
CAP says during a network partition a distributed system must sacrifice either consistency or availability. A CP system rejects/blocks requests to stay consistent; an AP system keeps serving requests but may return stale or divergent data.

During a partition: The cluster splits into groups that can't communicate, so they can't synchronize writes.

CP behavior (consistency over availability):

Nodes that can't reach a quorum refuse reads/writes (errors or timeouts) rather than serve possibly-stale data.

Examples: MongoDB (majority writes), HBase.

AP behavior (availability over consistency):

Every reachable node keeps answering, accepting writes on both sides; divergent values are reconciled later.

Examples: Cassandra, DynamoDB (tunable).

Note: when there's no partition, both can offer strong consistency and availability; CAP only forces the choice during a partition (and PACELC adds the latency trade-off otherwise).

Q16.What is 'Read-Your-Writes' consistency, and how is it typically implemented in an eventually consistent system?
Mid
Read-your-writes consistency ensures a user always sees the result of their own writes on subsequent reads, even if other clients might still see stale data. In an eventually consistent system it's implemented by steering that user's reads toward data known to include their write.

What it guarantees: A per-session/per-user promise: your own updates never disappear from your view.

Common implementations:

Sticky sessions: route the user to the same replica (or primary) for both write and follow-up reads.

Version tracking: store the latest write version/timestamp in the session and only read from replicas that have caught up to it.

Read-from-primary window: serve reads from the leader for a short time after a write.

Quorum (R + W > N): force read/write set overlap so the latest write is always visible.

Why bother: It removes the most jarring symptom of eventual consistency (seeing your own change vanish) without the cost of full strong consistency.

Q17.Explain the difference between Strong Consistency and Eventual Consistency. Give a real-world example where Eventual Consistency is acceptable.
Mid
Strong consistency means every read returns the most recent committed write, so all clients always see one agreed-upon value. Eventual consistency only guarantees that replicas converge to the same value over time, so reads can temporarily be stale.

Strong consistency:

Reads reflect the latest write immediately, usually via synchronous replication or quorum.

Cost: higher latency and reduced availability during failures/partitions.

Eventual consistency:

Writes propagate asynchronously; a read may return an older value until replicas sync.

Benefit: low latency, high availability, easy horizontal scaling.

Acceptable example:

A like/view counter on a social post or YouTube video: showing 1,000 vs 1,003 for a few seconds harms nothing, and the count converges shortly after.

Contrast: a bank balance or inventory count needs strong consistency to avoid overdrafts/overselling.

Q18.What does 'partition tolerance' actually mean in the CAP theorem, and why is it considered non-negotiable in a distributed system?
Mid
Partition tolerance means the system keeps operating even when network failures split it into groups of nodes that cannot communicate. It is non-negotiable because partitions are not a design choice: they will happen in any real distributed system, so you must tolerate them.

What a partition is:

A break in communication between nodes (dropped packets, switch failure, datacenter link down) so messages between two subsets are lost or delayed.

Each side may still be alive and serving clients, just unable to coordinate with the other.

Why it is non-negotiable:

Networks are unreliable by nature: you cannot prevent partitions, only respond to them.

A single-node system can drop the P, but the moment data spans machines, partitions are inevitable.

How it reframes CAP:

Since P must be tolerated, the real choice during a partition is between C (consistency) and A (availability).

CP systems refuse requests they can't make consistent; AP systems answer anyway and reconcile later.

When there is no partition, a system can offer both C and A.

Q19.What is the difference between data durability and consistency, and how do NoSQL databases trade them off?
Mid
Durability is about not losing a write once it's acknowledged; consistency is about all readers seeing the same, correct value. They are independent guarantees, and NoSQL systems tune both through replication and write-acknowledgment settings.

Durability:

A confirmed write survives crashes (persisted to disk and/or replicated to enough nodes).

Controlled by write concern: e.g. acknowledged by the primary only, or by a majority of replicas.

Consistency:

Whether a subsequent read reflects the latest write across all replicas.

Ranges from strong (read your latest write everywhere) to eventual (replicas converge over time).

How NoSQL trades them off:

Quorum tuning: with N replicas, choosing read (R) and write (W) counts where W + R > N gives strong reads at the cost of latency.

Lower W (e.g. W=1) means faster, less durable writes; higher W means more durable but slower.

A write can be durable but not yet consistent: persisted on the primary while replicas still lag.

Q20.What is the difference between 'schema-on-read' and 'schema-on-write', and how does this affect the development lifecycle and query performance?
Mid
Schema-on-write enforces structure when data is inserted (like a relational table); schema-on-read stores data as-is and applies structure when you query it. The trade-off is upfront validation and fast typed reads versus ingestion flexibility and deferred interpretation cost.

Schema-on-write:

The database validates and rejects malformed data at insert time.

Lifecycle: changing the schema needs migrations, but data is guaranteed clean and uniform.

Query performance: reads are fast since structure and types are known and indexable.

Schema-on-read:

Any shape is accepted; the application interprets fields at read time.

Lifecycle: rapid iteration and no migrations, but the app must defensively handle missing/varied fields.

Query performance: parsing and coercion happen per read, and old/new shapes coexist, adding logic overhead.

Practical note: Most document stores are schema-on-read by default but offer optional validation to claw back guarantees where needed.

Q21.When designing a document store, how do you decide between embedding a child object versus referencing it by ID, and what are the impacts on read performance and write atomicity?
Mid
Embed when the child is read together with the parent and is owned by it; reference when the child is large, shared, unbounded, or updated independently. The decision balances single-read access against document size and atomic write boundaries.

Favor embedding when:

The child is accessed with its parent ("contains" / one-to-few relationship).

You want one read to fetch everything: no joins, faster reads.

Parent and child update together: a single document write is atomic.

Favor referencing when:

The child is large or the array is unbounded (risking hitting document size limits, e.g. 16MB in MongoDB).

The child is shared by many parents (avoid duplicating and re-updating it everywhere).

Child and parent change at different rates or independently.

Impacts to weigh:

Read: embedding = one lookup; referencing = multiple round trips or a client-side join.

Write atomicity: a single document write is atomic, so embedding keeps related changes consistent; references split writes across documents (no multi-doc atomicity without transactions).

Q22.Explain the concept of 'Query-Driven Design' in NoSQL. How does it differ from the relational approach of normalizing data first?
Mid
Query-driven design means you start from the access patterns (the exact queries your app will run) and model the data to serve them efficiently, rather than modeling "correct" entities first. It inverts the relational habit of normalizing into clean tables and figuring out queries later.

The relational approach:

Normalize entities into tables to remove redundancy, then use flexible joins and ad-hoc queries at runtime.

The schema is query-agnostic: the engine assembles answers via joins on demand.

The NoSQL query-driven approach:

List your access patterns first, then shape collections/items so each query is a single, cheap lookup.

Joins are expensive or unavailable, so data is pre-joined and denormalized into the shape the read needs.

Why the shift:

NoSQL trades flexible querying for scale and predictable latency: optimizing for known patterns is what makes that scale work.

Downside: a new, unanticipated access pattern may require remodeling or a new copy of the data.

Q23.Why is denormalization a first-class citizen in NoSQL, what are the risks of data duplication, and how do you handle updates to duplicated data?
Mid
Denormalization (storing redundant copies of data) is first-class in NoSQL because it eliminates expensive joins and lets each query hit one place, which is essential for scale and low latency. The cost is duplicated data that can drift out of sync, so updates must be deliberately propagated.

Why it's embraced:

No (or expensive) joins: pre-joining data into one item makes reads a single fast lookup.

It supports horizontal scaling, since reads stay on one partition instead of fanning out.

Risks of duplication:

Update anomalies: a value changes in one copy but not others, causing inconsistency.

More storage and more write work, since one logical change touches many records.

Handling updates to duplicated data:

Only duplicate fields that rarely change (e.g. a user's name alongside their orders).

Fan-out updates: write to all copies, often asynchronously via background jobs or change streams / CDC.

Accept eventual consistency: copies converge after a short delay, which is usually fine for read-optimized data.

Q24.How do you handle 'One-to-Many' and 'Many-to-Many' relationships in a database that doesn't support joins?
Mid
Without server-side joins, you model relationships by either embedding related data inside a document or by referencing it and resolving the link in the application: the choice depends on cardinality, data size, and access patterns.

One-to-Many:

Embed the "many" side when the children are bounded and read with the parent (e.g. an order with its line items).

Reference when the "many" side is large or unbounded: store a parent ID on each child, or an array of child IDs on the parent.

Rule of thumb: "one-to-few" embed, "one-to-many" reference, "one-to-squillions" always reference (parent ID on child).

Many-to-Many:

Store arrays of references on one or both sides, accepting that you read both and resolve in the app.

Or duplicate a small subset of the related entity's fields to avoid a second lookup (denormalization).

Application-side joins: You issue follow-up queries by ID and stitch results in code; some databases offer helpers ($lookup in MongoDB) but they don't scale like an RDBMS join.

Trade-off: Embedding favors read performance and atomic updates but risks large/duplicated documents; referencing keeps data normalized but costs extra round trips.

Q25.What does it mean to design 'aggregate-oriented' data, and how does that concept relate to NoSQL data modeling?
Mid
An aggregate is a cluster of related data treated as a single unit (a document, row, or key-value entry) with one entity as its root. Aggregate-oriented design means storing together what you read and write together, which is exactly how most NoSQL stores want data shaped.

What an aggregate is:

A self-contained boundary (e.g. an order plus its line items and shipping address) accessed and updated as a whole.

The term comes from Domain-Driven Design's "aggregate root."

Why NoSQL favors it:

Most NoSQL systems provide atomicity only within a single aggregate, so the boundary is also the consistency and transaction boundary.

An aggregate maps cleanly to one document/partition, so one read fetches everything and one write commits atomically.

It also distributes well: aggregates are the natural unit to shard across nodes.

Implication for modeling:

You design around access patterns: data used together lives in the same aggregate, even if that duplicates fields.

Relationships that span aggregates must be resolved by the application, not by joins.

Q26.How do you handle updating denormalized/duplicated data consistently across documents, and what patterns help keep it in sync?
Mid
Denormalization trades cheap reads for harder writes: when a duplicated field changes, you must fan the update out to every copy. Since most NoSQL stores lack multi-document transactions, you keep copies in sync with batched/async update jobs, careful schema choices, and tolerance for brief inconsistency.

Decide what to duplicate:

Duplicate fields that rarely change (a user's name) and avoid duplicating volatile ones.

Keep an authoritative "source of truth" copy so you always know which value is canonical.

Patterns to keep it in sync:

Multi-write / batch: update all copies in one logical operation (e.g. a batch write) where the database allows it.

Event-driven propagation: emit a change event and let a consumer (or change-data-capture stream) update the duplicates asynchronously.

Background reconciliation jobs sweep and repair drift periodically.

Accept eventual consistency: Copies may lag briefly; design so that's acceptable, and make updates idempotent so retries are safe.

Avoid duplication when you can't tolerate drift: If a value must always be consistent and changes often, reference it instead and pay the extra read.

Q27.What is a composite or sort key, and how does it enable richer access patterns within a partition?
Mid
A composite primary key splits into a partition key (which determines where the data lives) and a sort key (which orders items within that partition). The sort key turns a single partition into an ordered collection you can range-scan, enabling many access patterns from one key.

Two parts, two jobs:

Partition key: groups and locates related items on the same node.

Sort key (clustering key in Cassandra): orders items inside the partition and uniquely identifies each.

Access patterns it unlocks:

Range queries: "all orders for user X between two dates" by querying the partition and a sort-key range.

Top-N / latest: read in descending sort order with a limit.

Begins-with / prefix queries on string sort keys.

Single-table modeling: Encoding type into the sort key (e.g. ORDER#2024, PROFILE#) lets one partition hold several entity types, fetched together in one query.

Caveat: You can only range-scan within a single partition; spanning partitions still needs a scan or a secondary index.

Q28.Compare range-based partitioning and hash-based partitioning. Which is better for range queries, and what is the trade-off regarding data distribution?
Mid
Range partitioning assigns contiguous key ranges to nodes, while hash partitioning applies a hash function to the key and places it by hash value. Range partitioning is far better for range queries; hash partitioning gives more even data distribution.

Range-based:

Keys stay in sorted order, so a range query (e.g. dates A to B) hits one or few contiguous partitions efficiently.

Risk: sequential or skewed keys (timestamps, auto-increment IDs) pile writes onto one partition, creating hotspots.

Hash-based:

Hashing scatters keys uniformly, so load and storage spread evenly across nodes.

Cost: order is destroyed, so a range query must fan out to all partitions (a scatter-gather).

The core trade-off:

Range = query locality but risk of uneven/hot distribution.

Hash = even distribution but no efficient ordered scans.

Hybrid: Many systems hash the partition key but keep a sorted sort/clustering key within each partition, getting both even spread across partitions and ordered access inside one.

Q29.What makes a 'good' partition key, and what happens to your system if you choose a key with low cardinality or one that creates a 'hot partition'?
Mid
A good partition key spreads data and traffic evenly across all partitions while still letting common queries hit a single partition. Choose one with high cardinality and uniform access; a low-cardinality or skewed key concentrates load on one partition and bottlenecks the whole cluster.

Properties of a good key:

High cardinality: many distinct values so data distributes across many partitions.

Even access pattern: reads/writes spread across keys rather than hammering a few.

Query alignment: the values your queries filter on should map to a single partition.

Low cardinality: Few distinct values (e.g. a boolean or country) means data piles into a handful of partitions, defeating horizontal scaling.

Hot partition:

One partition receives a disproportionate share of traffic (e.g. partitioning by date and writing only today, or a celebrity user ID).

That node saturates CPU/IO and throttles while others sit idle, causing latency spikes and timeouts.

Mitigations:

Add a composite or compound key to increase cardinality.

Salt or bucket hot keys (append a random suffix) to fan writes across partitions.

Q30.What is a 'Quorum' in a distributed database, and what happens if a quorum cannot be reached during a write?
Mid
A quorum is the minimum number of replica nodes that must acknowledge a read or write for the operation to be considered successful. It is the tunable mechanism that trades consistency against availability; if a quorum can't be reached, the operation fails rather than risk diverging data.

The core formula:

With N replicas, a write needs W acks and a read needs R responses.

If W + R > N, reads and writes overlap on at least one node, guaranteeing strong (read-your-writes) consistency.

Tuning the trade-off:

Higher W/R gives stronger consistency but lower availability and higher latency.

Lower values favor availability and speed but risk stale reads.

When quorum can't be reached:

Too many replicas are down/partitioned to satisfy W, so the write is rejected and the client gets an error.

This is the CAP choice: a CP system sacrifices availability to avoid inconsistent writes.

Some systems allow hinted handoff or lower consistency levels (e.g. Cassandra's ANY) to keep accepting writes, trading durability/consistency for availability.

Q31.Explain the concept of polyglot persistence. Why might a modern microservices architecture use both a document store and a graph database simultaneously?
Mid
Polyglot persistence is using multiple, different data stores within one system, each chosen because it fits a specific data shape and access pattern, instead of forcing everything into one database. A microservices architecture naturally enables this since each service owns its data and can pick the best-fit store.

The core idea:

No single database is optimal for every workload, so match the tool to the data model and queries.

Microservices' decentralized, per-service databases make mixing engines practical.

Document store for entity data:

Stores self-contained, hierarchical records (a product, a user profile) read/written as a whole.

Flexible schema and fast key/document lookups for the catalog or profile service.

Graph database for relationships:

Excels at deep, multi-hop traversals (friends-of-friends, recommendations, fraud rings) that would be costly joins elsewhere.

Relationships are first-class, so connection-heavy queries stay fast.

Why both together: E-commerce: documents hold product/order details; the graph powers 'customers who bought this also bought' across the same entities.

Trade-offs: More operational complexity, plus the burden of keeping data consistent across stores (often via events).

Q32.What is MapReduce as a query paradigm, and how is it used to process large datasets in NoSQL systems?
Mid
MapReduce is a programming model for processing large datasets in parallel by splitting work into two functions: a map that transforms and emits key/value pairs, and a reduce that aggregates values sharing a key. NoSQL systems use it to run analytics across data distributed over many nodes by moving computation to where the data lives.

The two phases:

Map: runs on each shard locally, processing records and emitting intermediate (key, value) pairs.

Shuffle/sort: groups all values by key across nodes (the implicit middle step).

Reduce: combines the grouped values into a final result per key (sum, count, etc.).

Why it suits NoSQL:

Data is already partitioned across nodes, so maps run in parallel near the data, minimizing network movement.

Scales horizontally and tolerates node failures by re-running failed tasks.

Where it's used:

Batch aggregation/analytics in stores like MongoDB, CouchDB, and Hadoop-backed systems.

Largely superseded for ad-hoc queries by aggregation pipelines and SQL-on-NoSQL engines, which are easier and often faster.

javascript


Copy code

// MongoDB: count documents per status
map = function() { emit(this.status, 1); };
reduce = function(key, values) { return Array.sum(values); };

Q33.What is a time-series database, and what characteristics of NoSQL stores make them well-suited for time-series workloads?
Mid
A time-series database is optimized for data points indexed by time (metrics, sensor readings, events), where writes are overwhelmingly appends of recent timestamps and queries are time-range scans and aggregations. NoSQL stores fit this well because their write-optimized, horizontally scalable designs match the append-heavy, high-volume nature of time-series workloads.

Defining workload traits:

Extremely high, append-only ingest of timestamped points; data is rarely updated.

Queries are dominated by time ranges, downsampling, and rollups (avg/min/max over windows).

Old data is aged out via retention/TTL policies.

Why NoSQL stores fit:

LSM-tree storage (e.g. Cassandra) makes sequential writes cheap, matching constant ingest.

Partitioning by series + time bucket keeps a time range on one partition and spreads load across many.

Native TTL expires stale data automatically, no costly deletes.

Horizontal scaling absorbs growing data volume by adding nodes.

Columnar layout and compression of similar adjacent values cut storage dramatically.

Caveat: Choose the partition key carefully: bucketing by time avoids a single ever-growing hot partition for the current window.

Q34.What is a search-oriented NoSQL database (e.g., a full-text search engine), and when would you reach for one over a document store?
Mid
A search-oriented NoSQL database (e.g., Elasticsearch or OpenSearch) is built to index and rank text by relevance, not just store and fetch records: it analyzes text into tokens and uses an inverted index so queries like "find documents matching these words, ranked by relevance" run fast. You reach for one when querying is about relevance, fuzzy matching, and aggregation rather than primary-key lookups.

Core mechanism: the inverted index:

Text is run through analyzers (tokenizing, lowercasing, stemming, stop-word removal) and stored as a term-to-document map.

Queries are scored (e.g., BM25) so results come back ranked by relevance, not just matched.

What it does well: Full-text search, fuzzy/typo-tolerant matching, autocomplete, faceting, and analytics-style aggregations over large text corpora.

When to choose it over a document store:

Document stores (e.g., MongoDB) excel at fetching whole documents by key/field, but their text search is limited and unscored by comparison.

Use a search engine when relevance ranking, linguistic analysis, or rich aggregations dominate your read patterns.

Caveat: it is usually a secondary, eventually-consistent index, not your system of record: Common pattern: keep authoritative data in a primary store and sync it into the search engine for querying.

Q35.What is 'index-free adjacency' in a graph database, and why does it make relationship traversals fast?
Mid
Index-free adjacency means each node in a native graph database stores direct physical pointers to its adjacent nodes and relationships, so traversing an edge is a pointer hop rather than a global index lookup. This makes relationship traversals fast because the cost depends on how much of the graph you actually walk, not on the total size of the dataset.

How it works: A node holds references to its relationships, which reference neighbor nodes directly: "follow the pointer" instead of "search an index."

Why it's fast:

Traversal cost is local: O(neighbors visited), roughly constant per hop regardless of how many total nodes exist.

Contrast with relational/document approaches: a join or lookup typically scans/searches an index (e.g., O(log n)) for every hop, and multi-hop queries compound that cost.

Concrete impact: Deep queries ("friends of friends of friends", shortest path, recommendation paths) stay performant where repeated SQL joins degrade badly.

Caveat: You still need indexes to find the starting node(s); index-free adjacency speeds the traversal after that entry point.

Q36.How does the column-family / wide-column model handle sparse data, and why is that an advantage over fixed relational columns?
Mid
In a wide-column model (e.g., Cassandra, HBase), each row can have its own set of columns, and a column simply isn't stored if it has no value for that row. Sparse data costs essentially nothing because absent columns occupy no space, unlike a fixed relational schema where every row reserves a slot for every column.

Storage is per-cell, not per-row-schema:

Data is stored as (row key, column name, value) units, so only the columns that actually exist for a row are written.

Two rows in the same table can have completely different columns.

Why this beats fixed relational columns for sparse data:

In a relational table, a missing value is still a NULL placeholder occupying a defined column; thousands of optional attributes mean wide, mostly-NULL rows.

Wide-column avoids that waste and avoids schema migrations when new attributes appear: just write a new column name.

Practical fit: Great for data with many possible-but-rarely-present attributes (sensor readings, user feature flags, event metadata) and millions of rows.

Trade-off: Flexibility shifts the burden to the application/query design; you model around access patterns, not normalized relations.

Q37.What is 'Replication Lag', and how can it lead to 'Stale Reads' in a leader-follower architecture?
Mid
Replication lag is the delay between a write being committed on the leader and that write becoming visible on a follower replica. Because replication is asynchronous, a read served by a lagging follower can return outdated data, a stale read, even though the leader already has the newer value.

Why lag happens:

The leader acknowledges the write and applies it locally, then ships the change log to followers asynchronously over the network.

Followers fall behind under heavy write load, slow networks, or expensive apply operations.

How it causes stale reads:

To scale reads, applications route queries to followers; a follower that hasn't applied the latest write returns an old value.

Classic symptom: a user updates their profile, the write hits the leader, but their next read hits a stale follower and shows the old data ("read-your-writes" violation).

Mitigations:

Read-your-writes: route a user's reads to the leader (or a replica known to be caught up) for a short window after they write.

Monotonic reads: pin a user to one replica so they never see time go backwards.

Use synchronous/quorum reads when freshness matters, accepting higher latency.

Q38.Explain the difference between Leader-based (Master-Slave) and Leaderless (Dynamo-style) replication. What are the trade-offs regarding write availability?
Mid
In leader-based replication all writes go through a single leader that propagates them to followers; in leaderless replication any replica accepts writes and consistency is achieved by writing to/reading from a quorum. The core trade-off: leaderless keeps accepting writes even when nodes fail, at the cost of more conflicts and weaker ordering.

Leader-based (master-slave):

One node serializes all writes, giving a clean ordering and simple conflict-free replication to followers.

Write availability depends on the leader: if it fails, writes stall until failover (election) completes.

Examples: PostgreSQL replication, MongoDB replica sets.

Leaderless (Dynamo-style):

Client (or coordinator) writes to several replicas; a write succeeds once W replicas ack, reads query R replicas.

With W + R > N you get quorum overlap for strong-ish consistency.

No single point of write failure: as long as W replicas are up, writes proceed.

Examples: Cassandra, Riak, DynamoDB.

Trade-offs:

Leaderless maximizes write availability and is tolerant of node/network failures.

But concurrent writes to different replicas create conflicts needing resolution (vector clocks, LWW, CRDTs, read repair).

Leader-based simplifies consistency and conflict handling but trades availability during failover.

Q39.What is 'Idempotency' in the context of NoSQL writes, and why is it critical for maintaining data integrity during network retries?
Mid
Idempotency means applying the same write more than once produces the same final state as applying it once. It's critical because in distributed systems a client can't tell whether a timed-out request actually succeeded, so it retries: without idempotency that retry could double-charge, double-insert, or corrupt counters.

Why retries are unavoidable: A network failure may drop the response after the write committed; the client retries blindly to ensure delivery (at-least-once semantics).

Naturally idempotent vs not:

Idempotent: setting an absolute value, upsert by primary key, deleting a key.

Not idempotent: relative updates like increment counters or append to a list.

How to make writes idempotent:

Attach a client-generated idempotency key / request ID and dedupe on the server.

Use conditional writes (compare-and-set, "insert if not exists") so a repeat is a no-op.

Ties directly to Sagas: since each saga step may be retried, the steps and their compensations must be idempotent.

Q40.When would you choose a relational database over a NoSQL store, and what are the specific trade-offs regarding schema flexibility and vertical vs. horizontal scaling?
Mid
Choose a relational database when data is highly structured and relational, when you need strong ACID transactions, and when you want flexible ad-hoc queries via SQL. The trade-offs are a rigid (but enforced) schema and a model that scales primarily by vertical scaling, with horizontal scaling being harder than in most NoSQL systems.

When relational wins:

Complex relationships and joins across many entities.

Strong consistency and multi-record ACID transactions (financial, inventory, bookings).

Unpredictable, ad-hoc queries and reporting where SQL flexibility matters.

Data integrity enforced by the engine: constraints, foreign keys, unique indexes.

Schema flexibility trade-off: A fixed schema gives strong validation and integrity but requires migrations to evolve, which can be heavy at scale.

Vertical vs horizontal scaling trade-off:

Relational DBs scale up well (bigger machine) but distributing writes across nodes is hard: joins and transactions don't naturally shard.

NoSQL is built to scale out; with RDBMS you reach for read replicas, sharding, or partitioning, which add complexity.

Q41.What are some common anti-patterns or situations where NoSQL is the wrong choice?
Mid
NoSQL is the wrong choice when you need rich relational queries, strong transactional integrity, or when you adopt it without understanding your access patterns. The classic anti-pattern is treating a NoSQL store like a relational database: doing application-side joins, normalizing heavily, or expecting ACID where there is none.

Wrong-fit situations:

Highly relational data needing many joins: forcing this into documents or app-side joins is slow and error-prone.

Strong transactional needs (money, inventory) where eventual consistency causes real bugs.

Unknown or constantly changing query patterns: NoSQL rewards modeling around known queries, so ad-hoc analytics suffer.

Modeling anti-patterns:

Over-normalizing in a document store, then stitching data together in code.

Bad partition/shard key choice causing hot partitions and skew.

Unbounded documents/rows (ever-growing arrays) or mass deletes that create tombstone storms.

Process anti-pattern: Choosing NoSQL for hype or to "avoid schema design" rather than for a concrete scale or access-pattern reason.

Q42.How does the PACELC theorem extend CAP? Explain the trade-off between latency and consistency during normal operation when there is no partition.
Senior
PACELC extends CAP by addressing the normal case CAP ignores: if there is a Partition, you trade Availability vs Consistency (the CAP part); Else (no partition), you still trade Latency vs Consistency. It captures that even a healthy system pays a latency cost for strong consistency.

The formula:

PAC: during a partition, choose Availability or Consistency.

ELC: else (normal operation), choose Latency or Consistency.

Why latency vs consistency exists without a partition:

Strong consistency requires waiting for a quorum of replicas to acknowledge a write/read, which adds round-trip latency.

Relaxing to eventual consistency lets a single nearby replica answer immediately, reducing latency.

Examples:

Cassandra is PA/EL: favors availability and low latency, eventual consistency.

A fully consistent store is PC/EC: pays latency for correctness even when healthy.

Takeaway: consistency has a cost during normal operation too, not only during failures.

Q43.Explain the concept of a quorum (R + W > N). How do you tune the number of nodes involved in a read or write to achieve strong vs. eventual consistency?
Senior
A quorum is the minimum number of replicas that must acknowledge an operation. With N replicas, requiring R replicas for reads and W for writes, when R + W > N the read and write sets must overlap on at least one node, guaranteeing a read sees the latest write.

The variables:

N: total replicas holding a key.

W: replicas that must ack a write before it's considered successful.

R: replicas that must respond to a read.

Strong consistency: R + W > N:

Overlap guarantees at least one read replica has the newest write, so reads are current.

Example with N=3: W=2, R=2 (sum 4 > 3).

Eventual consistency: R + W <= N: No guaranteed overlap; reads may return stale data but latency/availability improve. e.g. W=1, R=1.

Tuning the balance:

High W = durable, slower writes; high R = fresher, slower reads.

Write-heavy systems often pick low W, high R; read-heavy do the reverse.

Caveat: quorum overlap ensures freshness only if conflicts are resolved correctly (versioning, last-write-wins, or vector clocks).

Q44.What is 'read-your-writes' consistency, and why is it challenging to achieve in a distributed NoSQL environment with multiple replicas?
Senior
Read-your-writes consistency guarantees that once a user has written a value, any subsequent read by that same user will reflect that write (never an older value). It's hard in a distributed system because a follow-up read may land on a replica that hasn't received the write yet.

The core problem:

Writes go to one replica and propagate asynchronously; reads may be load-balanced to a different, lagging replica.

So a user can save data and then immediately not see it: confusing and looks like data loss.

Why it's challenging:

Replication lag is variable and unbounded under load or partitions.

Stateless load balancers don't know which replica has the latest data for this user.

How it's typically achieved:

Sticky routing: pin a user's session to the replica/primary they wrote to.

Read-from-primary for a short window after a write.

Track a write timestamp/version per session and only read from replicas caught up to it.

Quorum reads (R + W > N) so the read set overlaps the write set.

Q45.What is 'monotonic read consistency', and what anomaly does it prevent?
Senior
Monotonic read consistency guarantees that once a client has seen a particular value, it will never subsequently see an older value: reads only move forward in time. It prevents the anomaly of "reading backwards".

The anomaly it prevents:

In an eventually consistent system, replicas lag at different rates.

A client reads an updated value from an up-to-date replica, then a later read hits a stale replica and shows the old value: data appears to go back in time.

What the guarantee provides:

Successive reads return that value or a newer one, never an earlier one.

It is a per-client (session) guarantee, not global consistency.

How it's implemented: Pin a client's reads to the same replica, or track a version/timestamp and only read from replicas at least that current.

Q46.Explain the concept of 'Single-Table Design'. Why would someone use this pattern in a NoSQL database?
Senior
Single-table design stores multiple entity types (and their relationships) in one table, distinguishing them through carefully constructed partition and sort keys. It's used in key-value/wide-column stores like DynamoDB to fetch related entities together in a single query, avoiding joins the database can't perform.

How it works:

Different entity types share the table, marked by a type attribute and key prefixes (e.g. USER#123, ORDER#456).

Related items share a partition key so one query returns them together (item collections).

Generic keys (PK/SK) and secondary indexes serve multiple access patterns on the same data.

Why use it:

Fetch a parent and its children in one round trip, with no joins.

Fewer round trips and predictable single-digit-ms latency at scale.

One set of capacity/throughput to manage instead of many tables.

Trade-offs:

Steep learning curve and opaque data: items look heterogeneous and hard to read raw.

Requires knowing access patterns up front; new patterns can be painful to add.

Q47.What is a materialized view in a NoSQL database, and how does it support query-driven design?
Senior
A materialized view is a precomputed, persisted copy of data reorganized to serve a specific query, kept up to date automatically or by your write logic. It lets you store the same data multiple ways so each query reads from a structure built for it.

What it is:

Unlike a relational view (computed on the fly), a NoSQL materialized view is stored on disk and read like a normal table.

It typically uses a different partition/primary key than the base table to support a different access path.

How it supports query-driven design:

NoSQL modeling starts from the queries; a view gives you a second (or third) physical layout so each query hits its own optimized structure.

Example: a base table keyed by user_id plus a materialized view keyed by email to look users up by email.

Mechanism:

Some databases maintain them automatically (Cassandra MATERIALIZED VIEW); otherwise you write to multiple tables yourself in the application.

Trade-off: faster reads at the cost of extra storage and write amplification (every base write updates the views too).

Q48.Explain 'Consistent Hashing.' How does it minimize data movement when adding or removing a node from a NoSQL cluster?
Senior
Consistent hashing maps both keys and nodes onto the same circular hash space (a "ring"), and each key is owned by the next node clockwise. Because adding or removing a node only reassigns the keys between it and its neighbor, you move roughly 1/N of the data instead of rehashing everything.

The ring:

Hash the key and walk clockwise to the first node; that node stores the key.

Contrast with hash(key) % N, where changing N remaps almost every key.

Why little data moves:

Adding a node: it takes over only the arc of keys between it and its predecessor; other nodes are untouched.

Removing a node: its keys shift to the next clockwise node only.

Virtual nodes: Each physical node is placed at many points on the ring (vnodes) to smooth out uneven distribution and spread a failed node's load across many peers.

Where it's used: Dynamo-style systems (Cassandra, DynamoDB, Riak) use it for partitioning and elastic scaling.

Q49.What is a 'hot partition' or 'hot key' problem, and how would you identify and resolve it through shard key selection?
Senior
A hot partition (or hot key) occurs when a disproportionate share of traffic or data lands on a single partition, overwhelming one node while others sit idle. It almost always traces back to a low-cardinality or skewed partition key, and you fix it by choosing a key that spreads load evenly.

What causes it:

Low-cardinality keys (e.g. status with few values) or monotonic keys (timestamps) that funnel writes to one place.

A naturally popular item (a celebrity user, a viral product) drawing outsized read traffic.

How to identify it:

Per-partition metrics show one partition's throughput, latency, or throttling far above the rest.

Symptoms: throttling/timeouts on some keys while overall cluster utilization looks low.

How to resolve it:

Pick a higher-cardinality partition key that distributes access evenly.

Write sharding (salting): append a suffix/bucket to the key (e.g. userId#3) to split a hot key across N partitions, then scatter-gather on read.

Use a composite key so traffic spreads across many partition values rather than one.

For hot reads, front the key with a cache.

Trade-off: Salting fixes write hotspots but complicates reads, since you must query all buckets and merge.

Q50.What are the challenges of adding or removing nodes in a distributed NoSQL cluster, and how does the database move data without downtime?
Senior
Adding or removing nodes requires rebalancing data ownership so each node holds its fair share, and the hard part is doing this while the cluster keeps serving traffic. Modern NoSQL systems handle it through consistent hashing and background streaming of data, so only a fraction of keys move and there's no downtime.

The core challenge:

Naive modulo hashing remaps almost all keys when node count changes, forcing a massive reshuffle.

You must keep reads/writes correct while ownership is in flux.

Consistent hashing minimizes movement:

Nodes and keys map onto a hash ring; adding a node only steals a slice from its neighbors, so only ~1/N of keys relocate.

Virtual nodes (vnodes) split each physical node into many ring tokens for smoother, faster rebalancing.

Moving data without downtime:

New ownership is computed, then data is streamed in the background while the old owner keeps serving.

During transfer, both source and target may receive writes; the coordinator routes accordingly until handoff completes.

On removal/decommission, the leaving node streams its ranges to successors before exiting.

Operational concerns:

Streaming adds network/IO load, so rebalancing is throttled to protect live latency.

Replication factor must still be satisfied throughout the transition.

Q51.How does a client or coordinator find which node holds a particular key in a distributed NoSQL cluster (request routing)?
Senior
The cluster maps every key to a node using a partitioning function (usually a hash ring), and the request is routed to a node that owns the key's token range. Depending on the system, either any node acts as a coordinator that forwards the request, or a smart client computes the target directly.

Key-to-node mapping:

Hash the partition key to a token; consistent hashing determines which node(s) own that token range.

Replicas are the next N nodes around the ring.

Coordinator (peer-to-peer) routing:

In masterless systems (Cassandra, Dynamo), any node can receive the request and becomes the coordinator.

It looks up the owning replicas, forwards the request, gathers quorum responses, and replies to the client.

Config/metadata server routing: Some systems use a routing tier or metadata service (e.g. MongoDB's mongos with config servers) that knows the shard map and proxies the request.

Token-aware / smart clients: The driver caches the cluster's token map (via gossip) and sends the request straight to a replica, avoiding an extra hop.

Membership awareness: Nodes share ring/topology state through a gossip protocol so routing stays correct as nodes join or leave.

Q52.What is a ledger database, and what problem does immutability and cryptographic verification solve?
Senior
A ledger database is an append-only store that maintains an immutable, cryptographically verifiable history of every change, so you can prove that data has not been tampered with. It solves the problem of trustworthy auditability: instead of bolting on audit tables you can secretly edit, the database itself guarantees the record is complete and unaltered.

Append-only and immutable: You never overwrite or delete in place; updates add a new version, so the full history is always preserved.

Cryptographic verification:

Entries are chained with hashes (each record's hash depends on the prior one), often into a Merkle tree, producing a digest that proves the chain hasn't been altered.

Any tampering changes downstream hashes, so verification fails: this is detectable without trusting an administrator.

Problem it solves:

Regulatory/audit needs (finance, supply chain, healthcare) where you must prove the integrity and complete history of records.

Examples: Amazon QLDB; conceptually related to blockchain but centrally owned, not decentralized.

When NOT to use it: If you don't need verifiable immutability, a regular database with audit logging is simpler and more flexible.

Q53.How does a NoSQL database handle write conflicts in a multi-leader setup? Explain 'Last-Write-Wins' vs. 'Vector Clocks'.
Senior
In a multi-leader (or leaderless) setup, the same data can be written concurrently on different nodes, producing conflicting versions that must be reconciled. Last-Write-Wins (LWW) resolves conflicts by picking the write with the latest timestamp, while Vector Clocks track causality so the system can detect which writes are concurrent and preserve both for resolution.

Last-Write-Wins (LWW):

Each write carries a timestamp; on conflict, the highest timestamp wins and the other is discarded.

Simple and cheap, but lossy: a concurrent write can be silently dropped, and clock skew across nodes can pick the "wrong" winner.

Vector Clocks:

Each replica maintains a per-node counter; a version's vector summarizes which updates it has seen.

Comparing vectors tells you if one write causally descends from another (safe to overwrite) or if they are concurrent (a true conflict).

Concurrent versions are kept as siblings and handed to the application (or a CRDT/merge function) to reconcile, so no write is silently lost.

Choosing between them:

LWW fits caches or last-value-wins data where losing a write is acceptable.

Vector clocks fit data where every update matters (e.g., a shopping cart) at the cost of complexity and storing multiple versions.

Q54.What are 'Vector Clocks' or 'Version Clocks', and how do they help detect causality in distributed writes?
Senior
Q55.What are CRDTs (Conflict-free Replicated Data Types) and how do they allow for automatic merging of data?
Senior
Q56.Explain 'Last-Write-Wins' (LWW). What are the dangers of relying on system clocks for conflict resolution?
Senior
Q57.What is 'read repair' and how does it help maintain consistency in a leaderless replication system?
Senior
Q58.What is 'anti-entropy', and how do background processes reconcile divergent replicas?
Senior
Q59.What is 'hinted handoff', and how does it improve write availability when a node is temporarily down?
Senior
Q60.What is a Merkle tree, and how is it used to efficiently detect and repair inconsistencies between replicas?
Senior
Q61.What is a 'sloppy quorum', and how does it differ from a strict quorum?
Senior
Q62.What is a gossip protocol, and how do nodes in a NoSQL cluster use it to share membership and state information?
Senior
Q63.Explain the difference between a Log-Structured Merge-Tree (LSM-Tree) and a B-Tree. Why are LSM-trees typically used in write-heavy NoSQL databases?
Senior
Q64.How do 'Secondary Indexes' work in a distributed NoSQL database, and why do they often come with a performance penalty?
Senior
Q65.What is the purpose of a Write-Ahead Log in a NoSQL storage engine, and how does it ensure durability if the system crashes before data is written to disk?
Senior
Q66.Explain the 'Compaction' process in LSM-tree-based databases. Why is it necessary for read performance?
Senior
Q67.Explain the difference between a 'Write-Optimized' and a 'Read-Optimized' storage engine.
Senior
Q68.What are 'SSTables' and 'Memtables' in the context of a NoSQL storage engine?
Senior
Q69.What is a 'Bloom Filter' and how does it improve read performance in NoSQL databases?
Senior
Q70.What is a 'tombstone' in an LSM-tree-based store, and why are deletes handled differently than in a B-tree database?
Senior
Q71.What are 'write amplification' and 'read amplification', and how do storage engine choices affect them?
Senior
Q72.Since most NoSQL databases don't support multi-record ACID transactions, how do you handle a business process that spans multiple records? Explain the Saga pattern.
Senior
Q73.What is Two-Phase Commit (2PC), and what are its drawbacks that make it unpopular in distributed NoSQL systems?

NoSQL Interview Questions and Answers
By Yash Vardhan Gupta
|
Last updated on May 30, 2025
|
88227 Views
 
PreviousNext 
Table of content
Compare NoSQL and RDBMS
What is NoSQL?
What are the features of NoSQL?
Explain the difference between NoSQL v/s Relational database?
Explain “Polyglot Persistence” in NoSQL?
Show More
Top Answers to No-SQL Interview Questions
NoSQL databases allow users to store and process raw data of all formats: Unstructured, semi-structured, and structured. Professionals who have advanced skills in NoSQL databases are in high demand today. In this NoSQL Interview Questions blog, we have compiled a list of the most frequently asked NoSQL interview questions that are usually asked in job interviews that require this skill. Below is a list of these popular NoSQL interview questions that you must prepare for before going for your interview:

This NoSQL Interview Questions blog is divided into the following parts:

Basic NoSQL Interview Questions
Advanced NoSQL Interview Questions
Basic NoSQL Interview Questions
1. Compare NoSQL & RDBMS
Criteria	NoSQL	RDBMS
Data format	Does not follow any order	Organized and structured
Scalability	Very Good	Average
Querying	Limited as no Join Clause	Using SQL
Storage mechanism	Key-Value Pair, document, column storage, etc.	Data & relationship stored in different tables
Also, check out the blog on NoSQL vs. SQL.

2. What is NoSQL?
NoSQL encompasses a wide variety of different database technologies that were developed in response to a rise in the volume of data stored about users, objects and products. The frequency in which this data is accessed, and performance and processing needs. Relational databases, on the other hand, were not designed to cope with the scale and agility challenges that face modern applications, nor were they built to take advantage of the cheap storage and processing power available today.

3. What are the features of NoSQL?
When compared to relational databases, NoSQL databases are more scalable and provide superior performance, and their data model addresses several issues that the relational model is not designed to address:

Large volumes of structured, semi-structured, and unstructured data
Agile sprints, quick iteration, and frequent code pushes
Object-oriented programming that is easy to use and flexible
Efficient, scale-out architecture instead of expensive, monolithic architecture
Get 100% Hike!

Master Most in Demand Skills Now!

Email Address

+91  IN          INDIA
Phone Number
By providing your contact details, you agree to our Terms of Use & Privacy Policy
4. Explain the difference between NoSQL v/s Relational database?
The history seem to look like this:
Google needs a storage layer for their inverted search index. They figure a traditional RDBMS is not going to cut it. So they implement a NoSQL data store, BigTable on top of their GFS file system. The major part is that thousands of cheap commodity hardware machines provides the speed and the redundancy.Everyone else realizes what Google just did.Brewers CAP theorem is proven. All RDBMS systems of use are CA systems. People begin playing with CP and AP systems as well. K/V stores are vastly simpler, so they are the primary vehicle for the research.

Software-as-a-service systems in general do not provide an SQL-like store. Hence, people get more interested in the NoSQL type stores.I think much of the take-off can be related to this history. Scaling Google took some new ideas at Google and everyone else follows suit because this is the only solution they know to the scaling problem right now. Hence, you are willing to rework everything around the distributed database idea of Google because it is the only way to scale beyond a certain size. Get to know more about this NoSQL vs. SQL – What is Better? that can help you grow in your career.

5. Explain “Polyglot Persistence” in NoSQL?
In 2006, Neal Ford coined the term polyglot programming, to express the idea that applications should be written in a mix of languages to take advantage of the fact that different languages are suitable for tackling different problems.

Complex applications combine different types of problems, so picking the right language for each job may be more productive than trying to fit all aspects into a single language.Similarly, when working on an e-commerce business problem, using a data store for the shopping cart which is highly available and can scale is important, but the same data store cannot help you find products bought by the customers’ friends—which is a totally different question. We use the term polyglot persistence to define this hybrid approach to persistence.

Advanced NoSQL Interview Questions
6. How does NoSQL DB budget memory?
The Replication Node manages the data in a NoSQL DB store and is the main consumer of memory. The Java heap and cache size used by the Replication Node can be important performance factors. By default, the Replication Node heap and cache are calculated by NoSQL DB based on the amount of memory available to the Storage Node.

We recommend that you specify the available memory for a Storage Node using the -memory_mb flag for makebootconfig, or the memory_mb Storage Node parameter. If you do not define memory_mb, it will default to the memory available on the node. NoSQL DB will then use 85% of memory_mb as the heap for the Replication Node processes hosted by that Storage Node. If the Storage Node hosts more than one Replication Node, the memory will be divided evenly between all RNs.

If the number of Replication Nodes on a Storage Node changes, the per-RN memory will be recalculated dynamically. The percentage used for heap is controlled by the rnHeapPercent Storage Node parameter. You can choose to override the default value of 85%.Each Replication Node uses a cache, and the size of that cache defaults to 70% of the Replication Node heap. You can override the 70% default by setting the rnCachePercent Replication Node parameter.

The Replication Node heap can also be specified directly by setting the -Xmx in the Replication Node javaMiscParams parameter. Likewise, the Replication Node cache can be set directly with the cache Size Replication Node parameter. While that’s possible, it’s advisable to use the Storage Node memory_mb setting.

As an example, suppose you specify that a Storage Node may use 3000 MB of memory, by setting memory_mb to 3000. If that Storage Node hosts two Replication Nodes, the heap for each RN will be (3000 * .85)/2 = 1275MB. Each RN cache will be (1275 * .70) = 892MB.

7. How to script NoSQL DB configuration?
You may find that you want to build the same NoSQL DB configuration repeatedly for testing purposes. The Admin CLI commands can be scripted in several ways.Many uses of the Admin CLI are simple commands, such as java -jar kvstore.jar makebootconfig to initially configure a StorageNode, shown above.

These are as amenable to scripting as any other UNIX commands and will not be discussed further here.The interactive commands available in java -jar kvstore.jar runadmin, among which are those used to create and execute plans, can be scripted in two ways. You can create a file containing the sequence of commands that you want to run, and run them in a batch using java -jar kvstore.jar runadmin load -file script.

For example, a script file named deploy.kvs could contain commands such as the following:

configure -name mystore
plan deploy-datacenter -name boston -rf 3 -wait
plan deploy-sn -dcname boston -host localhost -port 5000 -wait
plan deploy-admin -sn sn1 -port 5001 -wait
You could execute this script by issuing the command
java -jar kvstore.jar runadmin -host localhost -port 5000 load -file
deploy.kvs
Another way to script commands is to run individual CLI commands as separate shell command lines. Trailing arguments in this command line are considered to be a single CLI command.

This usage mode lets you use features of a more capable scripting language, such as a UNIX shell, and provides more flexibility for integrating NoSQL DB commands with other commands that are not available in the the interactive java -jar kvstore.jar runadmin environment.

The same sequence of commands as those from the example above could be couched in a shell script this way:

#!/bin/sh
HOST=localhost
PORT=5000
HTTPPORT=5001
KVADMIN=”java -jar lib/kvstore.jar runadmin -host $HOST -port $PORT”
# Each CLI command that follows “$KVADMIN” is executed in a new invocation of
runadmin
$KVADMIN configure -name mystore
$KVADMIN plan deploy-datacenter -name boston -rf 3 -wait
$KVADMIN plan deploy-sn -dcname boston -host localhost -port $PORT -wait
$KVADMIN plan deploy-admin -sn sn1 -port $HTTPPORT –wait
8. Does NoSQL Database Interact With Oracle Database?
NoSQL Database supports retrieving records through the Oracle Database External Table functions. This makes it possible to perform some queries from Oracle Database and retrieve records from NoSQL Database.

Elevate Your Knowledge: Master PostgreSQL with Confidence! Check out our PostgreSQL DBA Interview Questions.

Certification in Bigdata Analytics

9. What is the difference between NoSQL & Mysql DBs’?
NoSQL databases are becoming a major part of the database landscape today, and with their handful of advantages, they can be a real game changer in the enterprise arena. However, NoSQL isn’t ripe yet, and professionals in the industry need to approach it with caution.

This is because it lacks the maturity that SQL databases like MySQL offer. If your application doesn’t fall into the category of the likes of Google, Yahoo, Facebook or Wikipedia, you should reconsider your options for using NoSQL and stick with MySQL instead. Not only is there a major skills gap with finding NoSQL professionals, but issues like analytics, performance reporting and migration also need to be considered.

Learn more about NoSQL Database read this NoSQL Tutorial.

10. Explain Oracle NoSQL database?
The Oracle NoSQL Database is a distributed key-value database. It is designed to provide highly reliable, scalable and available data storage across a configurable set of systems that function as storage nodes.Data is stored as key-value pairs, which are written to particular storage node(s), based on the hashed value of the primary key. Storage nodes are replicated to ensure high availability, rapid failover in the event of  a node failure and optimal load balancing of queries. Customer applications are written using an easy-to-use Java/C API to read and write data.
Oracle NoSQL Driver links with the customer application, providing access to the data via appropriate storage node for the requested key.  A web based console as well as command line interface is available for easy administration of the cluster.

11. When should I use a NoSQL database instead of a relational database?
A relational database enforces ACID. So, you will have schema based transaction oriented data stores. It’s proven and suitable for 99% of the real world applications. You can practically do anything with relational databases.But, there are limitations on speed and scaling when it comes to massive high availability data stores.

For example, Google and Amazon have terabytes of data stored in big data centers. Querying and inserting is not per formant in these scenarios because of the blocking/schema/transaction nature of the RDBMs. That’s the reason they have implemented their own databases (actually, key-value stores) for massive performance gain and scalability.NoSQL databases have been around for a long time – just the term is new. Some examples are graph, object, column, XML and document databases.
 

Related Blogs	What’s Inside
What is a Self Join in SQL?	
Explores how to apply self joins to analyze hierarchical data in SQL.
Types of Data in SQL	
Learn different data types like INT, VARCHAR, and DATE used in SQL tables.
Oracle Setup Instructions	
Get Oracle installed on your system using this beginner-friendly guide.
Compare SQL and MongoDB	
Breaks down the major differences between SQL and MongoDB databases.
Installing SQL Server	
Guide to installing SQL Server and starting your database journey.
SQL Replace Function Explained	
Details how to substitute text values using the REPLACE function in SQL.
