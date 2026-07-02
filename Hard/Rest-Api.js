REST API Basic Interview Questions
1. What do you understand by RESTful Web Services?
RESTful web services are services that follow REST architecture. REST stands for Representational State Transfer and uses HTTP protocol (web protocol) for implementation. These services are lightweight, provide maintainability, scalability, support communication among multiple applications that are developed using different programming languages. They provide means of accessing resources present at server required for the client via the web browser by means of request headers, request body, response body, status codes, etc.


Create a free personalised study plan
Get into your dream companies with expert guidance
Real-Life Problems
Prep for Target Roles
Custom Plan Duration
Create My Plan
2. Define Messaging in terms of RESTful web services.
The technique of sending a message from the REST client to the REST server in the form of an HTTP request and the server responding back with the response as HTTP Response is called Messaging. The messages contained constitute the data and the metadata about the message.


3. Can you tell the disadvantages of RESTful web services?
The disadvantages are:

As the services follow the idea of statelessness, it is not possible to maintain sessions. (Session simulation responsibility lies on the client-side to pass the session id)
REST does not impose security restrictions inherently. It inherits the security measures of the protocols implementing it. Hence, care must be chosen to implement security measures like integrating SSL/TLS based authentications, etc.
You can download a PDF version of Rest Api Interview Questions.

Download PDF

4. What are the HTTP Methods?
HTTP Methods are also known as HTTP Verbs. They form a major portion of uniform interface restriction followed by the REST that specifies what action has to be followed to get the requested resource. Below are some examples of HTTP Methods:

GET: This is used for fetching details from the server and is basically a read-only operation.
POST: This method is used for the creation of new resources on the server.
PUT: This method is used to update the old/existing resource on the server or to replace the resource.
DELETE: This method is used to delete the resource on the server.
PATCH: This is used for modifying the resource on the server.
OPTIONS: This fetches the list of supported options of resources present on the server.
The POST, GET, PUT, DELETE corresponds to the create, read, update, delete operations which are most commonly called CRUD Operations.


GET, HEAD, OPTIONS are safe and idempotent methods whereas PUT and DELETE methods are only idempotent. POST and PATCH methods are neither safe nor idempotent.

5. What are HTTP Status codes?
These are the standard codes that refer to the predefined status of the task at the server. Following are the status codes formats available:

1xx - represents informational responses
2xx - represents successful responses
3xx - represents redirects
4xx - represents client errors
5xx - represents server errors
Most commonly used status codes are:

200 - success/OK
201 - CREATED - used in POST or PUT methods.
304 - NOT MODIFIED - used in conditional GET requests to reduce the bandwidth use of the network. Here, the body of the response sent should be empty.
400 - BAD REQUEST - This can be due to validation errors or missing input data.
401- UNAUTHORIZED - This is returned when there is no valid authentication credentials sent along with the request.
403 - FORBIDDEN - sent when the user does not have access (or is forbidden) to the resource.
404 - NOT FOUND - Resource method is not available.
500 - INTERNAL SERVER ERROR - server threw some exceptions while running the method.
502 - BAD GATEWAY - Server was not able to get the response from another upstream server.
Learn via our Video Courses
courseRahul Janghu
Python Course for Beginners With Certification: Mastering the Essentials
star4.90
enrollemntsEnrolled: 268411
rupeeFree
coursePrateek Narang
SQL for Beginners: Learn SQL using MySQL and Database Design Course
star5
enrollemntsEnrolled: 58935
rupeeFree
courseMrinal Bhattacharya
JavaScript Course With Certification: Unlocking the Power of JavaScript
star4.8
enrollemntsEnrolled: 97671
rupeeFree
courseSrikanth Varma
Computer Networking Course: Master Computer Networking
star5
enrollemntsEnrolled: 39420
rupeeFree
courseSumeet malik
NSET Course: Mathematics
star4.7
enrollemntsEnrolled: 13433
rupeeFree
courseSumeet malik
NSET Course: Logical reasoning
star4.7
enrollemntsEnrolled: 12542
rupeeFree
courseSrikanth Varma
Operating System Course: Learn Fundamentals of Operating System
star5
enrollemntsEnrolled: 38833
rupeeFree
courseSrikanth Varma
Microsoft Malware Detection using Machine Learning
star5
enrollemntsEnrolled: 1551
rupeeFree
courseSrikanth Varma
Netflix Movie Recommendation System using Machine Learning
star5
enrollemntsEnrolled: 2918
rupeeFree
courseSrikanth Varma
Amazon Fashion Discovery Engine using Machine Learning
star5
enrollemntsEnrolled: 978
rupeeFree
courseSrikanth Varma
Personalized Cancer Diagnosis using Machine Learning
star5
enrollemntsEnrolled: 932
rupeeFree
courseSrikanth Varma
Facebook Friend Recommendation using Graph Mining
star5
enrollemntsEnrolled: 698
rupeeFree
courseSrikanth Varma
Predicting tags for Stackoverflow using Machine Learning
star5
enrollemntsEnrolled: 556
rupeeFree
courseSrikanth Varma
Quora Question Pair Similarity Problem using Machine Learning
star5
enrollemntsEnrolled: 625
rupeeFree
courseSrikanth Varma
Taxi demand prediction in New York City using Machine Learning
star5
enrollemntsEnrolled: 665
rupeeFree
courseYash Raj
AWS Free Course
star4.7
enrollemntsEnrolled: 17060
rupeeFree
courseMrinal Bhattacharya
React JS Free Course
star4.8
enrollemntsEnrolled: 28649
rupeeFree
courseSubhesh Kumar
Object Oriented Programming in Java Course Online
star4.95
enrollemntsEnrolled: 14488
rupeeFree
courseSrikanth Varma
Deep Learning Course: Deep Dive into Deep Learning
star5
enrollemntsEnrolled: 10453
rupeeFree
courseSrikanth Varma
Free Maths for Machine Learning Course
star5
enrollemntsEnrolled: 11453
rupeeFree
courseSrikanth Varma
Supervised Machine Learning Course
star5
enrollemntsEnrolled: 17167
rupeeFree
courseJamshaid Sohail
PyTorch for Deep Learning Course
star4.8
enrollemntsEnrolled: 4249
rupeeFree
courseSrikanth Varma
Unsupervised Machine Learning Course
star5
enrollemntsEnrolled: 5156
rupeeFree
coursePrateek Narang
Maths for Programmers
star5
enrollemntsEnrolled: 7817
rupeeFree
courseArnav Gupta
Spring Boot Course: Certified Course for Essential Skills
star5
enrollemntsEnrolled: 23814
rupeeFree
courseGaurav Sisodia
Keras & TensorFlow for Deep Learning
star4.8
enrollemntsEnrolled: 4160
rupeeFree
courseYash Sinha
Data Science Course - Mastering the Fundamentals
star4.7
enrollemntsEnrolled: 39607
rupeeFree
coursePrateek Narang
Coding Essentials: Learn Logic Building for Beginners Free Course
star5
enrollemntsEnrolled: 18225
rupeeFree
courseArnav Gupta
Machine Coding Tic Tac Toe - LLD Case Study
star5
enrollemntsEnrolled: 3242
rupeeFree
courseMrinal Bhattacharya
Node JS Certification Course - Master the Fundamentals
star4.8
enrollemntsEnrolled: 26948
rupeeFree
6. What do you understand by JAX-RS?
As the name itself stands (JAX-RS= Java API for RESTful Web Services) is a Java-based specification defined by JEE for the implementation of RESTful services. The JAX-RS library makes usage of annotations from Java 5 onwards to simplify the process of web services development. The latest version is 3.0 which was released in June 2020. This specification also provides necessary support to create REST clients.

7. What is the concept of statelessness in REST?
The REST architecture is designed in such a way that the client state is not maintained on the server. This is known as statelessness. The context is provided by the client to the server using which the server processes the client’s request. The session on the server is identified by the session identifier sent by the client.



Advance your career with  
Mock Assessments
Real-world coding challenges for top company interviews
Real-Life Problems
Detailed reports
8. What are the features of RESTful Web Services?
Every RESTful web service has the following features:

The service is based on the Client-Server model.
The service uses HTTP Protocol for fetching data/resources, query execution, or any other functions.
The medium of communication between the client and server is called “Messaging”.
Resources are accessible to the service by means of URIs.
It follows the statelessness concept where the client request and response are not dependent on others and thereby provides total assurance of getting the required data.
These services also use the concept of caching to minimize the server calls for the same type of repeated requests.
These services can also use SOAP services as implementation protocol to REST architectural pattern.
9. What is URI?
Uniform Resource Identifier is the full form of URI which is used for identifying each resource of the REST architecture. URI is of the format:

<protocol>://<service-name>/<ResourceType>/<ResourceID>
There are 2 types of URI:


URN: Uniform Resource Name identifies the resource by means of a name that is both unique and persistent.
URN doesn’t always specify where to locate the resource on the internet. They are used as templates that are used by other parsers to identify the resource.
These follow the urn scheme and usually prefixed with urn:. Examples include
urn:isbn:1234567890 is used for identification of book based on the ISBN number in a library application.
urn:mpeg:mpeg7:schema:2001 is the default namespace rules for metadata of MPEG-7 video.
Whenever a URN identifies a document, they are easily translated into a URL by using “resolver” after which the document can be downloaded.
URL: Uniform Resource Locator has the information regarding fetching of a resource from its location.
Examples include:
http://abc.com/samplePage.html
ftp://sampleServer.com/sampleFile.zip
file:///home/interviewbit/sampleFile.txt
URLs start with a protocol (like ftp, http etc) and they have the information of the network hostname (sampleServer.com) and the path to the document(/samplePage.html). It can also have query parameters.

10. What is a REST Resource?
Every content in the REST architecture is considered a resource. The resource is analogous to the object in the object-oriented programming world. They can either be represented as text files, HTML pages, images, or any other dynamic data.

The REST Server provides access to these resources whereas the REST client consumes (accesses and modifies) these resources. Every resource is identified globally by means of a URI.
REST API Experienced Interview Questions
1. Differentiate between SOAP and REST?
SOAP 	REST
SOAP - Simple Object Access Protocol 	REST - Representational State Transfer
SOAP is a protocol used to implement web services.	REST is an architectural design pattern for developing web services
SOAP cannot use REST as it is a protocol.	REST architecture can have SOAP protocol as part of the implementation.
SOAP specifies standards that are meant to be followed strictly.	REST defines standards but they need not be strictly followed.
SOAP client is more tightly coupled to the server which is similar to desktop applications having strict contracts.	The REST client is more flexible like a browser and does not depend on how the server is developed unless it follows the protocols required for establishing communication.
SOAP supports only XML transmission between the client and the server.	REST supports data of multiple formats like XML, JSON, MIME, Text, etc.
SOAP reads are not cacheable.	REST read requests can be cached.
SOAP uses service interfaces for exposing the resource logic.	REST uses URI to expose the resource logic.
SOAP is slower.	REST is faster.
Since SOAP is a protocol, it defines its own security measures.	REST only inherits the security measures based on what protocol it uses for the implementation.
SOAP is not commonly preferred, but they are used in cases which require stateful data transfer and more reliability.	REST is commonly preferred by developers these days as it provides more scalability and maintainability.
2. While creating URI for web services, what are the best practices that needs to be followed?
Below is the list of best practices that need to be considered with designing URI for web services:

While defining resources, use plural nouns. Example: To identify user resource, use the name “users” for that resource.
While using the long name for resources, use underscore or hyphen. Avoid using spaces between words. For example, to define authorized users resource, the name can be “authorized_users” or “authorized-users”.
The URI is case-insensitive, but as part of best practice, it is recommended to use lower case only.
While developing URI, the backward compatibility must be maintained once it gets published. When the URI is updated, the older URI must be redirected to the new one using the HTTP status code 300.
Use appropriate HTTP methods like GET, PUT, DELETE, PATCH, etc. It is not needed or recommended to use these method names in the URI. Example: To get user details of a particular ID, use /users/{id} instead of /getUser
Use the technique of forward slashing to indicate the hierarchy between the resources and the collections. Example: To get the address of the user of a particular id, we can use: /users/{id}/address
logo
Get Access to 250+ Guides with Scaler Mobile App!
Experience free learning content on the Scaler Mobile App
logo
4.5
100K+
Play Store
3. What are the best practices to develop RESTful web services?
RESTful web services use REST API as means of implementation using the HTTP protocol. REST API is nothing but an application programming interface that follows REST architectural constraints such as statelessness, cacheability, maintainability, and scalability. It has become very popular among the developer community due to its simplicity. Hence, it is very important to develop safe and secure REST APIs that follow good conventions. Below are some best practices for developing REST APIs:

Since REST supports multiple data formats, it is however good practice to develop REST APIs that accept and responds with JSON data format whenever possible. This is because a majority of the client and server technologies have inbuilt support to read and parse JSON objects with ease, thereby making JSON the standard object notation.
To ensure that the application responds using JSON data format, the response header should have Content-Type set to as application/JSON, this is because certain HTTP clients look at the value of this response header to parse the objects appropriately.
To ensure that the request sends the data in JSON format, again the Content-Type must be set to application/JSON on the request header.
While naming the resource endpoints, ensure to use plural nouns and not verbs. The API endpoints should be clear, brief, easy to understand, and informative. Using verbs in the resource name doesn’t contribute much information because an HTTP request already has what the request is doing in its HTTP method/verb. An appropriate HTTP verb should be used to represent the task of the API endpoint.
Below are the most commonly used HTTP methods to define the verb:
GET - indicates get/retrieve the resource data
POST - indicates create new resource data
PUT - indicates update the existing resource data
DELETE - indicates remove the resource data
To represent the hierarchy of resources, use the nesting in the naming convention of the endpoints. In case, you want to retrieve data of one object residing in another object, the endpoint should reflect this to communicate what is happening. For example, to get the address of an author, we can use the GET method for the URI /authors/:id/address'
Please ensure there are no more than 2 or 3 levels of nesting as the name of the URI can become too long and unwieldy.
Error Handling should be done gracefully by returning appropriate error codes the application has encountered. REST has defined standard HTTP Status codes that can be sent along with the response based on the scenario.
Error codes should also be accompanied by appropriate error messages that can help the developers to take corrective actions. However, the message should not be too elaborate as well which can help the hacker to hack your application.
Common status codes are:
400 - Bad Request – client-side error - failed input validation.
401 - Unauthorized – The user is not authenticated and hence does not have authority to access the resource.
403 - Forbidden – User is authenticated but is not authorized to access the resource.
404 - Not Found – The resource is not found.
500 - Internal server error – This is a very generic server-side error that is thrown when the server goes down. This shouldn’t be returned by the programmer explicitly.
502 - Bad Gateway – Server did not receive a valid response from the upstream server.
503 - Service Unavailable – Some unexpected things happened on the server such as system failure, overload, etc.
While retrieving huge resource data, it is advisable to include filtering and pagination of the resources. This is because returning huge data all at once can slow down the system and reduce the application performance. Hence, filter some items reduces the data to some extent. Pagination of data is done to ensure only some results are sent at a time. Doing this can increase the server performance and reduce the burden of the server resources.
Good security practices are a must while developing REST APIs. The client-server communication must be private due to the nature of data sensitivity. Hence, incorporating SSL/TLS becomes the most important step while developing APIs as they facilitate establishing secure communication. SSL certificates are easier to get and load on the server.
Apart from the secure channels, we need to ensure that not everyone should be able to access the resource. For example, normal users should not access the data of admins or another user. Hence, role-based access controls should be in place to make sure only the right set of users can access the right set of data.
Since REST supports the feature of caching, we can use this feature to cache the data in order to improve the application performance. Caching is done to avoid querying the database for a request repeated times. Caching makes data retrieval fast. However, care must be taken to ensure that the cache has updated data and not outdated ones. Frequent cache update measures need to be incorporated. There are many cache providers like Redis that can assist in caching.
API Versioning: Versioning needs to be done in case we are planning to make any changes with the existing endpoints. We do not want to break communication between our application and the apps that consume our application while we are working on the API release. The transition has to be seamless. Semantic versioning can be followed. For example, 3.0.1 represents 3rd major version with the first patch. Usually, in the API endpoints, we define /v1,/v2, etc at the beginning of the API path.
4. What are Idempotent methods? How is it relevant in RESTful web services domain?
The meaning of idempotent is that even after calling a single request multiple times, the outcome of the request should be the same. While designing REST APIs, we need to keep in mind to develop idempotent APIs. This is because the consumers can write client-side code which can result in duplicate requests intentionally or not. Hence, fault-tolerant APIs need to be designed so that they do not result in erroneous responses.

Idempotent methods ensure that the responses to a request if called once or ten times or more than that remain the same. This is equivalent to adding any number with 0.
REST provides idempotent methods automatically. GET, PUT, DELETE, HEAD, OPTIONS, and TRACE are the idempotent HTTP methods. POST is not idempotent.
POST is not idempotent because POST APIs are usually used for creating a new resource on the server. While calling POST methods N times, there will be N new resources. This does not result in the same outcome at a time.
Methods like GET, OPTIONS, TRACE, and HEAD are idempotent because they do not change the state of resources on the server. They are meant for resource retrieval whenever called. They do not result in write operations on the server thereby making it idempotent.
PUT methods are generally used for updating the state of resources. If you call PUT methods N times, the first request updates the resource and the subsequent requests will be overwriting the same resource again and again without changing anything. Hence, PUT methods are idempotent.
DELETE methods are said to be idempotent because when calling them for N times, the first request results in successful deletion (Status Code 200), and the next subsequent requests result in nothing - Status Code 204. The response is different, but there is no change of resources on the server-side.
However, if you are attempting to delete the resource present, at last, every time you hit the API, such as the request DELETE /user/last which deletes the last user record, then calling the request N times would delete N resources on the server. This does not make DELETE idempotent. In such cases, as part of good practices, it is advisable to use POST requests.
5. What are the differences between REST and AJAX?
REST	AJAX
REST- Representational State Transfer 	AJAX - Asynchronous javascript and XML
REST has a URI for accessing resources by means of a request-response pattern.	AJAX uses XMLHttpRequest object to send requests to the server and the response is interpreted by the Javascript code dynamically.
REST is an architectural pattern for developing client-server communication systems.	AJAX is used for dynamic updation of UI without the need to reload the page.
REST requires the interaction between client and server.	AJAX supports asynchronous requests thereby eliminating the necessity of constant client-server interaction.
6. Can you tell what constitutes the core components of HTTP Request?
In REST, any HTTP Request has 5 main components, they are:

Method/Verb − This part tells what methods the request operation represents. Methods like GET, PUT, POST, DELETE, etc are some examples.
URI − This part is used for uniquely identifying the resources on the server.
HTTP Version − This part indicates what version of HTTP protocol you are using. An example can be HTTP v1.1.
Request Header − This part has the details of the request metadata such as client type, the content format supported, message format, cache settings, etc.
Request Body − This part represents the actual message content to be sent to the server.

7. What constitutes the core components of HTTP Response?
HTTP Response has 4 components:

Response Status Code − This represents the server response status code for the requested resource. Example- 400 represents a client-side error, 200 represents a successful response.
HTTP Version − Indicates the HTTP protocol version.
Response Header − This part has the metadata of the response message. Data can describe what is the content length, content type, response date, what is server type, etc.
Response Body − This part contains what is the actual resource/message returned from the server.

8. Define Addressing in terms of RESTful Web Services.
Addressing is the process of locating a single/multiple resources that are present on the server. This task is accomplished by making use of URI (Uniform Resource Identifier). The general format of URI is 

<protocol>://<application-name>/<type-of-resource>/<id-of-resource>
9. What are the differences between PUT and POST in REST?
PUT	POST
PUT methods are used to request the server to store the enclosed entity in request. In case, the request does not exist, then new resource has to be created. If the resource exists, then the resource should get updated.	POST method is used to request the server to store the enclosed entity in the request as a new resource.
The URI should have a resource identifier. Example: PUT /users/{user-id}	The POST URI should indicate the collection of the resource. Example: POST /users
PUT methods are idempotent.	POST methods are not idempotent.
PUT is used when the client wants to modify a single resource that is part of the collection. If a part of the resource has to be updated, then PATCH needs to be used.	POST methods are used to add a new resource to the collection.
The responses are not cached here despite the idempotency.	Responses are not cacheable unless the response explicitly specifies Cache-Control fields in the header.
In general, PUT is used for UPDATE operations.	POST is used for CREATE operations.
10. What makes REST services to be easily scalable?
REST services follow the concept of statelessness which essentially means no storing of any data across the requests on the server. This makes it easier to scale horizontally because the servers need not communicate much with each other while serving requests.

11. Based on what factors, you can decide which type of web services you need to use - SOAP or REST?
REST services have gained popularity due to the nature of simplicity, scalability, faster speed, improved performance, and multiple data format support. But, SOAP has its own advantages too. Developers use SOAP where the services require advanced security and reliability.

Following are the questions you need to ask to help you decide which service can be used:

Do you want to expose resource data or business logic?
SOAP is commonly used for exposing business logic and REST for exposing data.
Does the client require a formal strict contract?
If yes, SOAP provides strict contracts by using WSDL. Hence, SOAP is preferred here.
Does your service require support for multiple formats of data?
If yes, REST supports multiple data formats which is why it is preferred in this case.
Does your service require AJAX call support?
If yes, REST can be used as it provides the XMLHttpRequest.
Does your service require both synchronous and asynchronous requests?
SOAP has support for both sync/async operations.
REST only supports synchronous calls.
Does your service require statelessness?
If yes, REST is suitable. If no, SOAP is preferred.
Does your service require a high-security level?
If yes, SOAP is preferred. REST inherits the security property based on the underlying implementation of the protocol. Hence, it can’t be preferred at all times.
Does your service require support for transactions?
If yes, SOAP is preferred as it is good in providing advanced support for transaction management.
What is the bandwidth/resource required?
SOAP involves a lot of overhead while sending and receiving XML data, hence it consumes a lot of bandwidth.
REST makes use of less bandwidth for data transmission.
Do you want services that are easy to develop, test, and maintain frequently?
REST is known for simplicity, hence it is preferred.
12. We can develop webservices using web sockets as well as REST. What are the differences between these two?
REST	Web Socket
REST follows stateless architecture, meaning it won’t store any session-based data.	Web Socket APIs follow the stateful protocol as it necessitates session-based data storage.
The mode of communication is uni-directional. At a time, only the server or the client will communicate.	The communication is bi-directional, communication can be done by both client or server at a time.
REST is based on the Request-Response Model.	Web Socket follows the full-duplex model.
Every request will have sections like header, title, body, URL, etc.	Web sockets do not have any overhead and hence suited for real-time communication.
For every HTTP request, a new TCP connection is set up.	There will be only one TCP connection and then the client and server can start communicating.
REST web services support both vertical and horizontal scaling.	Web socket-based services only support vertical scaling.
REST depends on HTTP methods to get the response.	Web Sockets depend on the IP address and port number of the system to get a response.
Communication is slower here.	Message transmission happens very faster than REST API.
Memory/Buffers are not needed to store data here.	Memory is required to store data.
The request flow difference between the REST and Web Socket is shown below:


13. Can we implement transport layer security (TLS) in REST?
Yes, we can. TLS does the task of encrypting the communication between the REST client and the server and provides the means to authenticate the server to the client. It is used for secure communication as it is the successor of the Secure Socket Layer (SSL). HTTPS works well with both TLS and SSL thereby making it effective while implementing RESTful web services. One point to mention here is, the REST inherits the property of the protocol it implements. So security measures are dependent on the protocol REST implements.

14. Should we make the resources thread safe explicitly if they are made to share across multiple clients?
There is no need to explicitly making the resources thread-safe because, upon every request, new resource instances are created which makes them thread-safe by default.

15. What is Payload in terms of RESTful web services?
Payload refers to the data passes in the request body. It is not the same as the request parameters. The payload can be sent only in POST methods as part of the request body.

16. Is it possible to send payload in the GET and DELETE methods?
No, the payload is not the same as the request parameters. Hence, it is not possible to send payload data in these methods.

17. How can you test RESTful Web Services?
RESTful web services can be tested using various tools like Postman, Swagger, etc. Postman provides a lot of features like sending requests to endpoints and show the response which can be converted to JSON or XML and also provides features to inspect request parameters like headers, query parameters, and also the response headers. Swagger also provides similar features like Postman and it provides the facility of documentation of the endpoints too. We can also use tools like Jmeter for performance and load testing of APIs.

18. What is the maximum payload size that can be sent in POST methods?
Theoretically, there is no restriction on the size of the payload that can be sent. But one must remember that the greater the size of the payload, the larger would be the bandwidth consumption and time taken to process the request that can impact the server performance.

19. How does HTTP Basic Authentication work?
While implementing Basic Authentication as part of APIs, the user must provide the username and password which is then concatenated by the browser in the form of “username: password” and then perform base64 encoding on it. The encoded value is then sent as the value for the “Authorization” header on every HTTP request from the browser. Since the credentials are only encoded, it is advised to use this form when requests are sent over HTTPS as they are not secure and can be intercepted by anyone if secure protocols are not used.

20. What is the difference between idempotent and safe HTTP methods?
Safe methods are those that do not change any resources internally. These methods can be cached and can be retrieved without any effects on the resource.
Idempotent methods are those methods that do not change the responses to the resources externally. They can be called multiple times without any change in the responses.
According to restcookbook.com, the following is the table that describes what methods are idempotent and what is safe.

HTTP Methods	Idempotent 	Safe
OPTIONS	yes	yes
GET	yes	yes
HEAD	yes	yes
PUT	yes	no
POST	no	no
DELETE	yes	no
PATCH	no	no
JAX-RS Interview Questions
1. How can the JAX-RS applications be configured?
JAX-RS applications have the root resource classes packaged in a war file. There are 2 means of configuring JAX-RS applications.

Use @ApplicationPath annotation in a subclass of javax.ws.rs.core.Application that is packaged in the WAR file.
Use the <servlet-mapping> tag inside the web.xml of the WAR. web.xml is the deployment descriptor of the application where the mappings to the servlets can be defined.
2. What do you understand by request method designator annotations?
They are the runtime annotations in the JAX-RS library that are applied to Java methods. They correspond to the HTTP request methods that the clients want to make. They are @GET, @POST, @PUT, @DELETE, @HEAD.

Usage Example:

import javax.ws.rs.Path;
/**
* InterviewBitService is a root resource class that is exposed at 'resource_service' path
*/
@Path('resource_service')
public class InterviewBitService {
    @GET
    public String getRESTQuestions() {
        // some operations
    } 
}
3. Is it possible to make asynchronous requests in JAX-RS?
Yes. the JAX-RS Client API provides a method called Invocation.Builder.async() that is used for constructing client requests that need to be executed asynchronously. Invoking a request asynchronously does the task of returning the control to the caller by returning with datatype java.util.concurrent.Future whose type is set to return the service call type. Future objects are used because they have the required methods to check whether the asynchronous calls have been completed and if yes, then retrieve the responses. They also provide the flexibility to cancel the request invocations and also check if the cancellation has been successful.

Let us understand this with the help of a random example. We know that the Future interface from the java.util.concurrent has the below functions available:

package java.util.concurrent;
public interface Future<V> {
   // informs the executor to stop the thread execution
   boolean cancel(boolean mayInterruptIfRunning);
   
   // indicates whether the Future was cancelled or not
   boolean isCancelled();
   
   // indicates if the executor has completed the task
   boolean isDone();
   
   // gets the actual result from the process. 
   // This blocks the program execution until the result is ready.
   V get() throws InterruptedException, ExecutionException;
   
   // also gets actual result from the process but it throws 
   // the TimeoutException in case the result is not obtained before specified timeout
   V get(long timeout, TimeUnit unit)
       throws InterruptedException, ExecutionException, TimeoutException;
}
Let us consider we have this function below which is used for processing 2 Ids parallelly.

public void processIds(String userId1, String questionId){
   Client client = ClientBuilder.newClient();
   Future<Response> futureResponse1 = client.target("http://interviewbitserver.com/users/"+userId).request().async().get();
   Future<Order> futureResponse2 = client.target("http://interviewbitserver.com/questions/"+questionId).request().async().get(Question.class);
   
   // block the process until complete
   Response response1 = futureResponse1.get();
   User userObject = response1.readEntity(User.class);
   //Do processing of userObject
   
   // Wait for 2 seconds before fetching record
   try {
      Question question = futureResponse2.get(2, TimeUnit.SECONDS);
      //Do Processing of question
   } catch (TimeoutException timeoutException ) {
       //handle exceptions
   }
   return;
}
In the above example, we see that there are 2 separate requests getting executed parallelly. For the first future object, we await the javax.ws.rs.core.Response indefinitely using the get() method until we get the response. For the second future object, we wait for the response only for 2 seconds and if we do not get within 2 seconds, then the get() method throws TimeoutException. We can also use the isDone() method or isCancelled() method to find out whether the executors have completed or cancelled.

4. List the key annotations that are present in the JAX-RS API?
@Path - This specifies the relative URI path to the REST resource.
@GET - This is a request method designator which is corresponding to the HTTP GET requests. They process GET requests.
@POST - This is a request method designator which is corresponding to the HTTP POST requests. They process POST requests.
@PUT - This is a request method designator which is corresponding to the HTTP PUT requests. They process PUT requests.
@DELETE - This is a request method designator which is corresponding to the HTTP DELETE requests. They process DELETE requests.
@HEAD - This is a request method designator which is corresponding to the HTTP HEAD requests. They process HEAD requests.
@PathParam - This is the URI path parameter that helps developers to extract the parameters from the URI and use them in the resource class/methods.
@QueryParam - This is the URI query parameter that helps developers extract the query parameters from the URI and use them in the resource class/methods.
@Produces - This specifies what MIME media types of the resource representations are produced and sent to the client as a response.
@Consumes - This specifies which MIME media types of the resource representations are accepted or consumed by the server from the client.
5. Define RESTful Root Resource Classes in the JAX-RS API?
A resource class is nothing but a Java class that uses JAX-RS provided annotations for implementing web resources.
They are the POJOs that are annotated either with @Path or have at least one method annotated with @Path, @GET, @POST, @DELETE, @PUT, etc.
Example:

import javax.ws.rs.Path;
/**
* InterviewBitService is a root resource class that is exposed at 'resource_service' path
*/
@Path('resource_service')
public class InterviewBitService {
   // Defined methods
}
6. What are the key features provided by JAX-RS API in Java EE?
JAX-RS stands for Java API for RESTful Web services. They are nothing but a set of Java-based APIs that are provided in the Java EE which is useful in the implementation and development of RESTful web services.

Features of JAX-RS are:

POJO-based: The APIs in the JAX-RS is based on a certain set of annotations, classes, and interfaces that are used with POJO (Plain Old Java Object) to expose the services as web services.
HTTP-based: The JAX-RS APIs are designed using HTTP as their base protocol. They support the HTTP usage patterns and they provide the corresponding mapping between the HTTP actions and the API classes.
Format Independent: They can be used to work with a wide range of data types that are supported by the HTTP body content.
Container Independent: The APIs can be deployed in the Java EE container or a servlet container such as Tomcat or they can also be plugged into JAX-WS (Java API for XML-based web services) providers.
Spring RESTful Web Services Interview Questions
1. Define RestTemplate in Spring.
The RestTemplate is the main class meant for the client-side access for Spring-based RESTful services. The communication to the server is accomplished using the REST constraints. This is similar to other template classes such as JdbcTemplate, HibernateTemplate, etc provided by Spring. The RestTemplate provides high-level implementation details for the HTTP Methods like GET, POST, PUT, etc, and gives the methods to communicate using the URI template, URI path params, request/response types, request object, etc as part of arguments.

Commonly used annotations like @GetMapping, @PostMapping, @PutMapping, etc are provided by this class from Spring 4.3. Prior to that, Spring provided (and still provides) @RequestMapping annotation to indicate what methods were being used.
2. What is the use of @RequestMapping?
The annotation is used for mapping requests to specific handler classes or methods.
In spring, all the incoming web request routing is handled by Dispatcher Servlet. When it gets the request, it determines which controller is meant for processing the request by means of request handlers. The Dispatcher Servlet scans all the classes annotated with @Controller. The process of routing requests depends on @RequestMapping annotations that are declared inside the controller classes and their methods.
3. What are the differences between the annotations @Controller and @RestController?
@Controller 	@RestController
Mostly used traditional Spring MVC service. 	Represents RESTful web service in Spring.
It is mostly used in Spring MVC service where model data needs to rendered using view.	It is used in case of RESTful web service that returns object values bound to response body.
If response values need to be converted through HttpMessageConverters and sent via response object, extra annotation @ResponseBody needs to be used on the class or the method handlers.	The default behavior of the @RestController needs to be written on the response body because it is the combination of @Controller and @ResponseBody.
@Controller provides control and flexibility over how the response needs to be sent.	@RestController annotation has no such flexibility and writes all the results to the response body.
4. What does the annotation @PathVariable do?
@PathVariable annotation is used for passing the parameter with the URL that is required to get the data. Spring MVC provides support for URL customization for data retrieval using @PathVariable annotation.

5. Is it necessary to keep Spring MVC in the classpath for developing RESTful web services?
Yes. Spring MVC needs to be on the classpath of the application while developing RESTful web services using Spring. This is because, the Spring MVC provides the necessary annotations like @RestController, @RequestBody, @PathVariable, etc. Hence the spring-mvc.jar needs to be on the classpath or the corresponding Maven entry in the pom.xml.

6. Define HttpMessageConverter in terms of Spring REST?
HttpMessageConverter is a strategic interface that specified a converter for conversion between HTTP Requests and responses. Spring REST uses the HttpMessageConverter for converting responses to various data formats like JSON, XML, etc. Spring makes use of the “Accept” header for determining the type of content the client expects. Based on this, Spring would find the registered message converter interface that is capable of this conversion.

Conclusion
1. Conclusion
We have seen what are the most commonly asked questions on RESTful web services during an interview. REST APIs have become a very important tool in the software industry. Developing RESTful web services that are scalable and easily maintainable is considered an art. As the industry trends increase, the REST architecture would become more concrete and the demand for developers who know the development of RESTful web services would increase steadily.

References:

To learn more about REST, you can refer to the below 2 links:
https://restcookbook.com/
https://www.restapitutorial.com/

Beginner Interview Questions with Answers
Beginner REST interview questions

1. What is REST?
Answer: REST stands for Representational State Transfer, and is an architectural style based on the Hypertext Transfer Protocol (HTTP) for developing web-based applications.

REST outlines several guidelines that web services must follow to be considered RESTful. These guidelines ensure that requests and resources are sent easily and efficiently between client and server using standardized HTTP methods.

2. What is a REST API?
Answer: An application programming interface (API) is a software-to-software interface that allows otherwise separate applications to interact and share data. For example, a news website could leverage the X (Twitter) API to automatically find relevant tweets and include them in news articles.

A REST API, also called a RESTful API, is an API that follows REST principles. In a REST API, all data is treated as resources, each one represented by a unique uniform resource identifier (URI). For example, the X API makes each tweet an available resource that can be retrieved by clients. Clients can also use X’s API to post tweets and perform other actions on the site.

For a more detailed explanation, check out this video from IBM:


3. What’s a real-world example of a REST API?
Answer: Here are some examples of REST APIs in use:

X allows publishing sites to pull information like tweets, users, tweet streams, and so on. Developers can also write programs to post tweets through the API instead of the website interface.
Airlines expose their flight times and prices through APIs so travel and ticketing sites can use them.
To display weather information, weather apps harness public APIs that share weather data.
Public transportation services usually make their data public in real-time via APIs so that mapping and navigation apps (like Google Maps) can use them.
In turn, Google Maps hosts several APIs that make its mapping data available to developers. Developers leverage these APIs to place dynamic maps on their websites or in their apps.
4. Which protocol do REST APIs use?
Answer: REST APIs use the HTTP protocol to communicate with clients. This allows REST APIs to be easily deployed over the internet, since HTTP is the same protocol that is used to deliver web pages to client browsers.

5. What is a resource?
Answer: In REST, every accessible piece of content on the server is labeled as a resource. A resource is an object with a type, associated data, a relationship with other resources on the server, and a list of methods that can be used with it. For example, a resource could be an HTML or text file, a data file, an image or video, or an executable code file.

A resource is identified with a URI. Clients access resources by including their URIs in HTTP requests.

6. What is a URI?
Answer: URI stands for uniform resource identifier. In REST, a URI is a string that identifies a resource on a web server. Each resource has its own unique URI, which, when included in an HTTP request, allows clients to target that resource and perform actions on it. The process of targeting a resource with its URI is called “addressing.”

The format of a URI is as follows:

<protocol>://<service-name>/<ResourceType>/<ResourceID>
Intermediate Interview Questions with Answers
7. What is messaging in the context of REST?
Answer: In REST, messaging refers to the back-and-forth communication between the client and API. An interaction always starts with the client messaging the API with an HTTP request. The API processes this request. It then sends back an HTTP response that gives the status of the request and any resources the client asked for.

8. Which HTTP request methods are supported by REST?
Answer: An HTTP request method indicates which action the client wants the API to perform on a resource. The four primary HTTP request methods in REST are:

GET. Requests a resource from the server. (Note that GET cannot modify server resources, as it is a read-only method.)
POST. Creates a new resource on the server.
PUT. Updates an existing resource on the server.
DELETE. Removes a resource from the server.
Additionally, two less common HTTP requests you should also know are:

HEAD. Requests meta-information about a resource. This request is similar to GET, but the response does not include a response body.
OPTIONS. Retrieves a list of possible methods for a resource.
9. What is the difference between the POST method and the PUT method?
Answer: POST and PUT are similar but not exactly the same. POST is for creating a resource on the server, whereas PUT is for replacing a resource at a specific URI with another resource. If you use PUT at a URI that already has an associated resource, PUT will replace that resource. If there is no resource at the specified URI, PUT creates one.

Additionally, PUT is idempotent, which means that calling it multiple times will only result in one resource. This is because each call replaces the existing resource (or creates a new one if there is nothing to replace).

POST is not idempotent. If you call POST 10 times, you’ll end up with 10 different resources on the server, each with its own URI. This also means that POST responses are cacheable, whereas PUT responses are not.

10. What is CRUD?
Answer: CRUD stands for “Create, Read, Update, Delete.” These are the four basic actions that can be performed on databases through a REST API. Each action corresponds to an HTTP request method:

Create = POST
Read = GET
Update = PUT
Delete = DELETE
It’s not the most elegant of acronyms, but it works.

11. What are the main parts of an HTTP request?
Answer: HTTP requests are sent by the client to the API. They request data or perform some action on the server. There are five main components of an HTTP request in REST:

Start line: Indicates the intended action of the request and includes:
A request method that indicates the HTTP request method to be performed on the resource (i.e., GET, POST, PUT, DELETE).
A URI that identifies the requested resource on the server.
The HTTP version being used, which signals which version the API should respond with.
HTTP request header. Lists metadata about the request, such as the user agent, file formats the client will accept, the format of the request body, language, caching preferences, etc.
HTTP request body. Contains any data associated with the request. This is only necessary if the request is to modify data on the server with the POST or PUT methods.
12. What are the main parts of an HTTP response?
Answer: HTTP responses are sent by the API to the client. They inform the client that the requested action was (or was not) completed and to deliver any requested resources. There are four main components of an HTTP response:

HTTP version. The version of HTTP used.
Status line. Indicates the status of the request with an HTTP response status code.
HTTP response header. Lists metadata about the response, such as the date, server, user agent, file formats of the returned resources, caching information, etc.
HTTP response body. Contains the resource data that was requested by the client and is also called the payload.
13. What are some common HTTP response status codes you might see when working with a REST API?
Answer: HTTP response status codes tell the client the result of the requested action (GET, POST, etc.). Some common codes you’ll see in HTTP responses are:

200 OK. The request succeeded.
201 Created. The request succeeded, and a resource was created.
400 Bad Request. The request was not fulfilled due to an error in the request, such as a typo or missing data.
401 Unauthorized. The request was not fulfilled because the client is not authenticated or authorized to access the requested resource.
403 Forbidden. The request was not fulfilled because the client is authenticated but not authorized to access the requested resource.
404 Not Found. The request was not fulfilled because the server could not locate the requested resource.
500 Internal Server Error. The request was not fulfilled due to an unexpected problem with the server. (See also: 500 Internal Server Errors: What They Are & How to Fix Them)
502 Bad Gateway. The request was not fulfilled due to an invalid response from an upstream server.
503 Service Unavailable. The server was unable to process the request due to maintenance, overloading, or another temporary interference.
14. Which markup languages are primarily used to represent resources in REST APIs?
Answer: In REST APIs, XML (extensible markup language) and JSON (JavaScript Object Notation) are the two most common languages for representing resources.

15. What are the principles of REST?
Answer: REST APIs must adhere to five requirements:

Client-server decoupling. The client and server can only interact in a series of requests and responses. Only clients can make requests, and only servers can send responses. This simple principle allows both parties to operate independently of each other.
Uniform interface. All communications between the client and server must follow the same protocol. For REST, this protocol is HTTP. A uniform interface simplifies integrations because every application uses the same language to request and send data.
Stateless. In stateless communication, the server does not store any information about past requests/responses. Each request and response contains all the information needed to complete the interaction. Stateless communication reduces server load, saves memory, and improves performance. It also eliminates the possibility of a failed request caused by missing data.
Layered system. Layers are servers that sit between the client and the API server. These additional servers perform various functions, like identifying spam and improving performance (See also: What Is a CDN?). In REST, layers are modular and can be added and removed without affecting the messages between the client and the API server.
Cacheable. Server responses indicate whether or not the resource is cacheable, so that clients can cache any resources to improve performance.
Additionally, REST includes one optional condition:

Code on demand. An API can send executable computer code to clients in its response. This lets the client application run the code in its own back end.
16. What does it mean for an API to be stateless?
Answer: Statelessness is one of the key principles of REST architecture. In stateless communication, the server does not store any information about previous communications. In other words, the client and server do not know each other’s state.

Every request and response is a new interaction, and each request includes everything the server needs to give a successful response.

17. What is caching?
Answer: Caching is the method of temporarily storing a copy of a server response in a location (like computer memory) in order to retrieve it more quickly in the future.

When working with REST APIs, Caching improves server performance by reducing the work the server has to do to fulfill the request. Caching also makes applications that use the API run faster since they don’t need to send a new request every time they need a resource.

The cache duration of a resource (i.e., how long the resource can be cached by the client before the resource is retrieved again) is specified in the HTTP response header with the Cache-Control field.

18. What is payload?
Answer: “Payload” refers to the data in the body of the HTTP request and/or response messages in GET or POST requests.

For example, if you request a specific tweet from the X API, the payload comprises the document containing the tweet text and any associated files for rendering the tweet on a page.

Payload can also be included in the HTTP request with the POST method. If you want to post a tweet through X’s API, the tweet text that you send in your POST request is the payload.

Statelessness simplifies client-server interactions because the server does not rely on past requests to process future requests and, thus, does not need to consume space and resources storing data from these requests.

19. What are some benefits of REST?
Answer: REST is by far the most common method for building web APIs. Here are some reasons why:

REST is based around HTTP and fits within the existing infrastructure of the web, making it easy to implement by web applications.
REST uses simple web technologies like XML and JSON, making it easy to learn.
Because REST communications are stateless, the client and server are decoupled. This means that integrations are scalable and easy to build and manage over time.
The REST architecture is flexible enough to adapt to a huge variety of use cases.
REST is a lightweight architecture. Applications built with REST are generally faster than those built with other types of APIs.
REST is easy to test in the browser with an API testing tool.
20. What is the difference between REST and AJAX?
Answer: Asynchronous JavaScript, or AJAX, is a set of web development techniques used in web applications. At its core, AJAX allows a web page to make requests to a server and update the page interface without needing to refresh.

An AJAX client might use REST APIs with its requests, but AJAX doesn’t have to work with REST APIs exclusively. REST APIs can communicate with any client, whether the client uses AJAX or not.

Unlike REST, which uses HTTP requests and responses for messaging, AJAX sends its requests to the server with the XMLHttpRequest object that is built into JavaScript. Server responses are executed by the page’s JavaScript code to alter the page content.

Expert Interview Questions with Answers
Expert REST Interview Questions What are some main characteristics of REST? What are some drawbacks of REST? How do you test APIs? What is the difference between REST and SOAP? How do you keep REST APIs secure?

21. What are some main characteristics of REST?
Answer: If you’re asked to point out the main features that distinguish REST APIs from others, here are some points to touch on:

REST uses the HTTP protocol for communication.
REST makes server resources available via URIs. Each resource has a unique URI.
REST is stateless, meaning the server does not store information about past communications with clients.
REST uses GET to retrieve resources from a server, whereas other web service methods use POST.
22. What are some drawbacks of REST?
Answer: While statelessness is a benefit of REST, it can sometimes be a disadvantage. REST does not preserve state. In other words, the server does not keep records of past interactions. If preserving state is necessary, that responsibility falls on the client.

Additionally, REST is less strict with its security measures than SOAP, so developers need to be cautious and only work with APIs from legitimate, reputable providers. It also makes REST a poor choice for sending confidential information between servers and clients.

23. How do you test APIs?
Answer: There are many software tools designed for testing RESTful APIs — Postman, JMeter, and Katalon Studio are a few. The testing process usually involves sending various requests from your testing tool and monitoring how your API responds. Many testing tools also support automated testing, allowing you to run many different scenarios quickly.

To learn more about how API testing works and what kinds of tests you can run, see our guide to API testing.

And, check out this post to brush up on some API testing interview questions.

24. What is the difference between REST and SOAP?
Answer: REST and SOAP (Simple Object Access Protocol) are two different approaches to building APIs. Here are the key differences between them:

SOAP is a strict protocol for building secure APIs. REST is not a protocol — it is an architectural style dictated by a set of guidelines (see question 15).
REST APIs are simpler to build, more lightweight, and generally faster than SOAP APIs.
SOAP APIs are considered more secure than REST APIs, though REST APIs can still implement safety features to make them reasonably secure.
REST allows caching of responses, whereas SOAP does not.
SOAP encodes data in XML format. REST allows you to encode data in any format, though XML and JSON are the most popular.
25. How do you keep REST APIs secure?
Answer: REST APIs do not employ as strict security measures as SOAP APIs and, therefore, should not be used to send or retrieve sensitive information. However, good REST APIs still implement safety measures for secure and reliable data transfers.

Authentication and authorization. All requests to the API should be authenticated and authorized. Authentication is the process of verifying the identity of the client, and authorization is confirming that the client has permission to access the requested resources.
Validation. After authentication and authorization, requests still need to be scanned for potentially malicious code before the API gives access to its resources. Otherwise, a server will be vulnerable to an injection attack.
Encryption. TLS/SSL encryption secures the connection between client and server and prevents attackers from intercepting requests and responses.
Rate-limiting. Rate-limiting methods like quotas and throttling prevent brute-force attacks like DDoS that attempt to slow or crash the server.
No sensitive information in URIs. Protected information (e.g., username, password, or authentication token) should not be visible in the URI of a resource.
For more in-depth explanations, see our post on API security.

21 REST API interview questions you need to know in 2026
Master the REST API interview questions that hiring managers actually ask. Learn REST architecture, HTTP methods, security, versioning, caching, pagination, and real-world API design principles to confidently tackle backend interviews.
12 mins read
Jun 05, 2026
editor-page-cover
book
A REST API (Representational State Transfer) is a web API that conforms to the REST architectural style, defining how clients and servers exchange resource representations over HTTP. Interview questions on this topic typically cover the five core constraints (uniform interface, client-server, stateless, cacheable, and layered system), HTTP methods and status codes, security practices, and API design patterns like versioning, pagination, and caching.

Key takeaways

Five REST constraints: Uniform interface, client-server separation, statelessness, cacheability, and a layered system work together to enable scalable and independently evolvable services.

HTTP methods and CRUD mapping: GET reads, POST creates, PUT updates or replaces, DELETE removes, and understanding idempotency (PUT is idempotent, POST is not) is a common interview differentiator.

Versioning and pagination: APIs are versioned through URI paths, headers, or query parameters to avoid breaking clients, while cursor-based pagination tends to outperform limit/offset at scale.

Security best practices: Enforce HTTPS on every request, use OAuth 2.0 or JWT for authentication, validate all input, apply rate limiting, and never expose tokens or stack traces in responses.

Documentation and testing: Define endpoints with OpenAPI (Swagger), host interactive docs, and automate tests in CI/CD using tools like Postman, Newman, or pytest to ensure reliability across microservices.

No matter which programming language or technology you’re working with, you’ve probably encountered a REST application programming interface (API). REST stands for Representational State Transfer, which is the one of the most widely-used architectural styles for web services, microservices, and APIs today. APIs that follow the REST architectural style are considered REST APIs.

Whether you’re a junior or senior developer, you may be asked questions about REST API in an interview.
To help you ace your next interview, we’ll discuss some common REST API interview questions and answers.

We’ll cover:

21 REST API interview questions you need to know

1. What is REST?

2. What is a REST API?

3. Describe the 5 constraints of the REST architectural style, and their benefits.

4. What is the optional architectural constraint of REST?

5. Explain the constraints of a uniform interface.

6. What is CRUD?

7. Explain the HTTP request methods supported by REST, and when they are used.

8. What’s the difference between PUT and POST methods?

9. Explain what statelessness means in REST.

10. What are the advantages and disadvantages of a REST API?

11. What’s the difference between AJAX and REST?

12. What’s the difference between SOAP and REST?

13. Explain HTTP response status codes.

14. How do you version a REST API, and why?

15. How do you design pagination, filtering, and sorting in REST APIs?

16. How does HTTP caching work for REST APIs (ETag, Cache-Control, etc.)?

17. How do authentication and authorization typically work in REST APIs?

18. How do you implement rate limiting and idempotency for reliability?

19. How do you handle errors in REST APIs effectively?

20. What are some common REST API security best practices?

21. How do you document and test REST APIs?

What are some REST API design best practices and common mistakes

Wrapping up and next steps


  

Answer any interview problem by learning the patterns behind common questions.

  Grokking Coding Interview Patterns in PythonGrokking Coding Interview Patterns in JavaScriptGrokking Coding Interview Patterns in JavaGrokking Coding Interview Patterns in GoGrokking Coding Interview Patterns in C++



13 REST API interview questions you need to know


1. What is REST?
REST stands for Representational State Transfer. REST is an architectural style for web development. REST architecture lays out guidelines for the transfer of resource representations between clients and servers on the web.



2. What is a REST API?
A REST API or RESTful API is a web API that conforms to the REST architecture style.


3. Describe the 5 constraints of the REST architectural style, and their benefits.
A truly RESTful API must conform to the five REST architectural constraints:

Uniform interface:

Interface between client and server that allows for standardized client-server communication in a single language

Necessary for the decoupling of client and server

Client-server:

Client-server model, for separation of concerns between client and server

Permits client and server to operate and evolve independently

Supports portability and scalability

Stateless:

Refers to stateless communication protocol, wherein the server stores no information about session states

Improves performance by reducing server load

Cacheable:

Servers mark their responses as cacheable or non-cacheable

Clients and intermediaries are able to cache server responses

Reduces client-server interaction, supports scalability and performance

Layered system:

Layers between client and server, can consist of intermediaries such as proxy servers or load balancers

Layers have separate responsibilities but are able to interact with each other

Supports system scalability and security


4. What is the optional architectural constraint of REST?
Code on demand is the optional constraint of RESTful architecture. Code on demand allows the server to send executable code (scripts or applets) to a client upon client request.

5. Explain the constraints of a uniform interface.
A uniform interface is needed to decouple the client from the server.

There are four necessary constraints to achieving uniform interface:

Identification of resources: Client requests must identify resources using uniform resource identifiers (URIs)

Manipulation of resources through these representations: When clients receive a resource representation from the server, they have all information necessary to be able to modify resource state

Self-descriptive messages: Messages contain all information necessary for recipient to interpret it, including metadata

Hypermedia as the engine of application state: Hypermedia (such as HTML) is the medium for client-server interaction, and the client requires no API-specific documentation to understand server responses


6. What is CRUD?
CRUD is an acronym for the four basic operations used in relational database management system (RDBMS).

Each operation in CRUD relates to an HTTP method that REST supports.

Create: POST

Read: GET

Update: PUT

Delete: DELETE


  

Answer any interview problem by learning the patterns behind common questions.

  Grokking Coding Interview Patterns in PythonGrokking Coding Interview Patterns in JavaScriptGrokking Coding Interview Patterns in JavaGrokking Coding Interview Patterns in GoGrokking Coding Interview Patterns in C++

7. Explain the HTTP request methods supported by REST, and when they are used.
REST APIs are based on HTTP requests or verbs, which each perform a different task.

REST supports the following HTTP requests:

GET method: Request data from server

POST method: Submit data to create new resource on server-defined URL

PUT method: Submit data to update a resource at client-defined URL

DELETE method: Remove resource from server

OPTIONS method: Return request methods supported by a service

HEAD method: Return meta information such as response headers

PATCH method: Modify part of the resource on the server

8. What’s the difference between PUT and POST methods?
Here are the differences between PUT and POST:

PUT:

Idempotent (i.e. multiple requests will yield same result)
PUT responses aren’t cacheable
Updates or replaces target resource with request’s payload
POST:

Not idempotent (i.e. multiple requests will yield multiples of the same resource)
POST responses can be cacheable, provided proper cache-control header
Request’s payload is processed by the web server based on target resource
9. Explain what statelessness means in REST.
Statelessness means that the client and server don’t store information about each other’s state. Since the server stores no information, it treats each client request as a new request.

As a consequence, the following conditions would apply:

The client request contains all information required for the server to process the request

Client application is responsible for storing session state


10. What are the advantages and disadvantages of a REST API?
Advantages include:

Designed for high performance, portability, reliability, and scalability

Client-server separation allows each to individually operate and scale

Easy to test and adapt to various environments

Easy to learn as it uses HTTP protocol

Supports various data transfer technologies including JSON, XML, YAML, images, and more

Uses less bandwidth than other methods, such as Simple Object Access Protocol (SOAP) technology

Disadvantages include:

Doesn’t enforce security practices

HTTP method limits you to synchronous requests

Due to statelessness, you might be unable to maintain state (e.g. in sessions)


11. What’s the difference between AJAX and REST?
An AJAX client can make a RESTful request to a REST API (e.g. a get request), but AJAX isn’t an architectural style. It’s a web development technique for client-side applications. REST APIs can be accessed by AJAX clients, but they aren’t inherently implemented with AJAX.


12. What’s the difference between SOAP and REST?
Here are some of the differences between SOAP and REST.

SOAP:

Protocol
Data format is limited to XML
Heavyweight and requires more bandwidth
Calls can’t be cached
REST:

Architectural style
Allows various data formats including plain text, HTML, XML, JSON, and YAML
Lightweight and requires less bandwidth
Calls can be cached
13. Explain HTTP response status codes.
HTTP response codes indicate the result of client requests.

Common HTTP status codes include:

200: Successful request

201: Entity or entities created from successful request

400: Bad request. Invalid client request.

401: Unauthorized. User isn’t authorized to access a resource and may be unauthenticated

403: Forbidden. User isn’t authorized to access a resource, user is authenticated

404: Not found. Resource not found

500: Internal server error. Generic server error

502: Bad gateway. Response from upstream server is not valid

503: Service unavailable. Result of server-side issue, including overload or system failure


14. How do you version a REST API, and why? 
Why: Avoid breaking clients as your API evolves.

Common strategies:

URI versioning: /v1/resources (simple, cache-friendly; leaks version into URLs).

Header-based: Accept: application/vnd.myapi+json; version=2 (clean URLs; harder to test in browser).

Query param: /resources?version=2 (easy; can be overused). Good practices: Semantic versions, deprecation headers/notices, sunset timelines, and clear changelogs.

15. How do you design pagination, filtering, and sorting in REST APIs?
Pagination patterns:

Limit/Offset: /items?limit=20&offset=40 (simple; can be slow for large offsets).

Cursor-based: /items?cursor=abc123&limit=20 (stable ordering, better performance at scale).

Filtering/Sorting: /items?status=active&created_after=2025-01-01&sort=-created_at,name

Metadata & links: Include total, has_next, and HATEOAS-style links: first, prev, next, last.

Consistency: Define allowed fields and operators; document defaults and max page size to prevent abuse.

16. How does HTTP caching work for REST APIs (ETag, Cache-Control, etc.)?
Cache-Control: max-age, s-maxage, no-store, no-cache, stale-while-revalidate.

Validators:

ETag + If-None-Match → conditional GET/PUT; enables 304 Not Modified.

Last-Modified + If-Modified-Since.

Vary: Indicates which request headers affect the response (e.g., Vary: Accept-Encoding).

Design tips: Make GET responses cacheable by default, use strong ETags for exact byte equality, and invalidate on writes.

17. How do authentication and authorization typically work in REST APIs?
Transport: Always use HTTPS.

AuthN:

OAuth 2.0 (access tokens), OpenID Connect (identity), JWT bearer tokens, or simple API keys (lower security).

AuthZ: Scopes/roles/claims; enforce least privilege per endpoint.

Token handling: Short-lived access tokens, refresh tokens, rotation; store server-side secrets securely (KMS).

Security extras: CORS policies, CSRF protection for browser-based flows, rate limits, and audit logs.

18. How do you implement rate limiting and idempotency for reliability?
Rate limiting: Fixed window, sliding window, token bucket, or leaky bucket; return headers like RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset, and use 429 Too Many Requests with Retry-After.

Idempotency:

Methods: GET/PUT/DELETE are idempotent by spec; POST is not.

For POST where duplicates are harmful (e.g., payments), use Idempotency-Key header keyed by client-generated UUID; the server stores and replays the first result.

Backoff & retries: Recommend exponential backoff + jitter; document retry semantics per endpoint.

19. How do you handle errors in REST APIs effectively? 
A consistent error-handling strategy makes your REST API more predictable and user-friendly.

Best practices:

Use proper HTTP status codes (e.g., 400 Bad Request, 404 Not Found, 500 Internal Server Error).

Return an error response body with helpful details:

Ace Editor
Include a unique error code for debugging.

Avoid exposing internal stack traces or database errors to clients.

Optionally, provide links to documentation in the error response (type or docs_url).

20. What are some common REST API security best practices? 
Security is one of the most important areas of REST API design. Interviewers may test your awareness of common threats.

Core best practices:

Enforce HTTPS for all requests.

Use authentication and authorization (e.g., OAuth 2.0, JWT).

Apply rate limiting and throttling to prevent abuse.

Validate and sanitize input parameters to avoid injection attacks.

Implement CORS correctly for browser-based clients.

Use API gateways or WAFs for additional protection.

Never expose sensitive details (tokens, keys, stack traces) in responses or logs.

21. How do you document and test REST APIs? 
Interviewers often look for how well you think about maintainability and collaboration.

Documentation:

Use OpenAPI (Swagger) to define endpoints, methods, parameters, and responses.

Host interactive documentation (e.g., Swagger UI, Redoc).

Keep docs versioned alongside your codebase.

Testing:

Write unit tests for individual endpoints and integration tests for workflows.

Use tools like Postman, cURL, or Insomnia for manual testing.

Automate API tests in CI/CD using frameworks like pytest, JUnit, or Newman.

Include contract tests to ensure compatibility across microservices.

What are some REST API design best practices and common mistakes?
Many REST API interview questions focus on architecture and HTTP concepts, but experienced interviewers often want to understand how you would design an API that other developers can easily use and maintain.

A well-designed REST API should use clear and predictable resource names, consistent response formats, and meaningful HTTP status codes. Endpoints should represent resources rather than actions. For example, /users/123/orders is generally preferred over endpoints such as /getUserOrders. Consistency across endpoints helps consumers understand the API without constantly referring to documentation.

Interviewers also expect candidates to recognize common mistakes. One of the most frequent issues is misusing HTTP methods, such as using GET requests to modify data. Another is returning generic 200 OK responses for every scenario instead of using specific status codes like 201 Created, 400 Bad Request, or 404 Not Found. Poor error messages, inconsistent naming conventions, and breaking changes without proper versioning can also make APIs difficult to maintain as they grow.

Strong API design is ultimately about creating interfaces that remain intuitive, scalable, and predictable for both current and future consumers.

API Design Decision

Recommended Approach

Common Mistake

Resource Naming

/users/123/orders

/getUserOrders

Status Codes

Return specific HTTP codes

Always returning 200 OK

Versioning

/v1/users

or header versioning

Breaking clients without versioning

Error Responses

Structured error payloads

Generic error messages

HTTP Methods

GET, POST, PUT, DELETE used appropriately

Using GET to update data

Pagination

Cursor or limit/offset pagination

Returning massive datasets

Wrapping up and next steps
Congratulations! You’re now prepared with some common REST API interview questions and answers. Where you go from here depends on your goals.

For interview prep, check out Interview Prep with Educative. Here, you’ll find all our resources for interview prep in one place, from tutorials and practice problems, to tips from industry experts.

BI
FineBI
FineReport
FineDataLink
FineChatBI (FineAI)
Коннекторы данных из 1С в BI
Airflow / Nifi
Visiology
PIX BI
Modus BI
Yandex.DataLens
Open-source BI: Superset/Metabase
Luxms BI
AW BI + Alpha BI
FlyBI + Форсайт. Аналитическая Платформа
Loginom
Триафлай
AI / Исскуственный интеллект
AI-ассистенты
AI-агенты под ключ
Цифровая база знаний на основе искусственного интеллекта
Консалтинг в области Generative AI
Безопасность и инфраструктура AI-решений
Развёртывание AI-решений в облаке
Технологии и архитектура AI-решений
ChatGPT
Qlik & ChatGPT API – как начать работу?
Foundation-модели
Optimacros
Навигатор BI
СУБД
Arenadata
ClickHouse
Greenplum
Postgres Professional
TData
Другое
Построение Data Platform
Аналитическое хранилище данных
Data Lake и Data Engineering
Подробнее про Data Lake
Внедрение Lakehouse
Apache Doris
StarRocks
Trino
Миграция витрин из пропиетарных DWH на новый стек
Учебный курс "Современная архитектура хранилища данных"
Главная » Курсы по системам бизнес-анализа и методологии » Учебный курс Современная архитектура хранилища данных » 25 вопросов и ответов по терминам REST API на собеседовании по вакансии системного аналитика
25 вопросов и ответов по терминам REST API на собеседовании по вакансии системного аналитика
Статья представлена для ознакомления и удобства пользователей, оригинал опубликован на Хабре, автор: Редактор аккаунта SSP SOFT @SSP_blog

 

В индустрии разработки ПО системный аналитик играет ключевую роль в проектировании приложений и построении интеграций. Одним из основных инструментов для этого является REST API. Знание REST API — важный навык для системного аналитика, наряду с диаграммами BPMN и UML Sequence, и умением составлять SQL-запросы. В этой статье мы представим 25 вопросов по REST API, которые помогут вам подготовиться к интервью на вакансию системного аналитика (СА) и прокачать свои навыки. Полезного чтения!

Сейчас мы подробнее рассмотрим тот этап технического интервью, в котором проверяются знания кандидата по теории REST API.

И вот, что еще хочется добавить, прежде чем перейти к списку вопросов и ответов:

Во-первых, вопросы по REST API интервьюер обычно делит на теоретические и практические. Вначале задает 2-3 теоретических вопроса по терминологии, по методам HTTP-запросов, а потом вы получаете практическое задание по составлению какого-либо запроса.
Во-вторых, в этой статье собраны часто задаваемые теоретические вопросы, а примеры практических заданий по REST API мы планируем выложить в следующей статье нашего блога. Более того, будет еще и бонусная статья, в которой собраны особо сложные задания по REST API, когда от кандидата (СА с навыками разработчика) потребуется уже начальное знание Python, Java или JavaScript.
И, в-третьих, мы не знаем заранее, какие вопросы вам достанутся на интервью в SSP SOFT, и тем более, — о чем спрашивают СА по этой теме в других компаниях. Но уверены, что в процессе проработки нашего списка типовых вопросов, вы наверняка углубитесь в тему, и тем самым прокачаете свои знания по REST API.
 

Пойдем от простого к сложному, начнем с базовой терминологии и продолжим разделом с более сложными вопросами.

 

Блок вопросов по терминологии REST API
Начните подготовку к интервью с этого раздел по терминологии и принципам REST API. Для наглядного объяснения принципов REST API можно также посмотреть вот это видео от IBM (есть русские субтитры).



 

1. Что такое REST?
Ответ: Используется три термина REST, которые часто считают одним и тем же, но это не совсем верно. Эти термины: REST, REST API и RESTful API.

Сейчас будет ответ про REST, термин расшифровывается как Representational State Transfer и представляет собой архитектурный стиль, основанный на HTTP-протоколе (Hypertext Transfer Protocol) для разработки приложений, имеющих фронтенд и/или интеграцию с внешними системами.

REST описывает рекомендации, которым должны следовать проектируемые сервисы API. Эти принципы обеспечивают передачу запросов между клиентом и сервером с использованием HTTP.

 

2. Что такое REST API?
Ответ: API — это программный интерфейс, позволяющий отдельным приложениям взаимодействовать и обмениваться данными. Например, приложение доставки еды может использовать Google Maps API для отслеживания местоположения курьера и выводить его на карту.

REST API — это API, соответствующий принципам REST, когда все данные рассматриваются как ресурсы, каждый из которых представлен уникальным унифицированным идентификатором ресурса (URI).

 

3. Что такое RESTful API?
Ответ: RESTful API — это API, разработанный согласно правилам (или, еще можно сказать, «принципам») REST.

Иными словами, разница между REST API и RESTful API носит терминологический характер. В первом случае подразумевается свод правил REST, а во втором — реализация конкретного API в соответствии с правилами REST.

Термин RESTful API часто заменяют на REST API или даже REST исключительно ради краткости. Когда системные аналитики на диаграмме работы приложения рисуют стрелки с надписями REST, то подразумевается RESTful API.

 

4. Каковы два основных принципа работы REST?
Ответ: Запросы REST API должны соответствовать двум основным принципам:

Разделение на клиента и сервер: Взаимодействие клиента и сервера осуществляется в виде запросов и ответов. Только клиенты могут делать запросы, и только серверы могут посылать ответы, чтобы работать независимо друг от друга.
Единый протокол: Взаимодействие между клиентом и сервером должны осуществляться по единому протоколу. Для REST таким протоколом является HTTP.
 

5. Какие еще принципы работы REST вы знаете?
Ответ: Можно назвать еще как минимум 4 принципа. Запросы REST API не сохраняют статуса на сервере, могут проходить через слои серверов и кэшироваться. Также можно отправлять клиентам исполняемый код в ответе сервера.

Бесстатусное состояние (Stateless) сервера: Сервер не хранит никакой информации о прошлых запросах/ответах. Каждый запрос и ответ содержат всю информацию, необходимую для завершения взаимодействия. Бесстатусное взаимодействие снижает нагрузку на сервер, экономит память и повышает производительность.
Многоуровневая система: Возможны дополнительные серверы между клиентом и сервером API в виде слоев для выполнения различных функций. В системе, построенной по принципам REST, слои являются модульными и могут добавляться и удаляться, не влияя на сообщения между клиентом и сервером.
Кэшируемость: В ответах сервера указывается, является ли его ресурс кэшируемым, чтобы клиенты могли кэшировать любые ресурсы для повышения производительности.
Код по запросу (Code on demand): Сервер может отправлять исполняемый код клиентам в своем ответе для исполнения внутри клиентского приложения.
 

6. Что такое ресурс?
Ответ: В концепции REST каждый доступный объект на стороне сервера обозначается как ресурс. Ресурс — это объект, имеющий тип, связанные с ним данные, связь с другими ресурсами на сервере и список методов, которые могут быть использованы для работы с ним. Например, ресурсом может быть HTML или текстовый файл, файл данных, изображение или видео, файл исполняемого кода.

Ресурс идентифицируется с помощью унифицированного идентификатора ресурса, или URI. Клиенты получают доступ к ресурсам, используя их URI в HTTP-запросах.

 

7. Что такое URI?
Ответ: URI означает унифицированный идентификатор ресурса. Это строка, которая идентифицирует ресурс на сервере. Каждый ресурс имеет свой уникальный URI-идентификатор, который, будучи включенным в HTTP-запрос, позволяет клиентам обращаться к этому ресурсу и выполнять над ним действия. Процесс обращения к ресурсу с помощью его URI называется "адресацией".

 

8. Что такое CRUD?
Ответ: CRUD расшифровывается как "Create, Read, Update, Delete". Это четыре основных действия, которые можно выполнять с базами данных через REST API. Каждому действию соответствует свой метод HTTP-запроса:

Создать = POST

Прочесть = GET

Обновить = PUT

Удалить = DELETE

 

9. Что в ответе сервера подразумевается под полезной нагрузкой?
Ответ: Под полезной нагрузкой HTTP-ответа подразумеваются данные ресурса, которые были запрошены клиентом. Это кратко также называют "HTTP response payload".

Эти данные могут быть в формате JSON, XML, HTML, изображений, файлов и так далее, в зависимости от того, что конкретно предоставляет сервер.

 

10. Что такое обмен сообщениями в REST?
Ответ: Под обменом сообщениями в REST понимается обмен сообщениями между клиентом и сервером. Взаимодействие всегда начинается с того, что клиент обращается к серверу с HTTP-запросом. Сервер обрабатывает этот запрос, а затем отправляет обратно HTTP-ответ, в котором указывается статус запроса и все ресурсы, которые запрашивал клиент.

 

11. Что такое брокер сообщений в REST?
Ответ: В контексте REST, термин "брокер сообщений" — это промежуточное программное обеспечение (middleware), которое служит для передачи сообщений между различными компонентами или системами в распределенном приложении. Брокер может обеспечивать асинхронный обмен данными, очередь сообщений и обработку сообщений между различными модулями системы.

Брокеры сообщений могут использоваться для управления асинхронными операциями или отправки уведомлений. Брокер сообщений не является нативным элементом REST, т.к. REST ориентирован на синхронное взаимодействие между клиентом и сервером с использованием HTTP-запросов.

 

Блок вопросов по функционированию RESTful API
В этом разделе речь пойдет о проверке знаний RESTful API, т.е. реализации принципов REST для API приложений. Если вы любите смотреть и слушать, вот это видео на YouTube будет полезно (видео на англ. яз., включите субтитры и нажмите "Перевести", чтобы читать русские субтитры для лучшего понимания материала).

Вопросы и ответы в видео частично совпадают с нашим списком.



 

12 Какие методы HTTP-запросов поддерживаются REST?
Ответ: Метод HTTP-запроса указывает желаемое действие, которое сервер выполнит над ресурсом. В REST существует четыре основных метода HTTP-запросов клиента к серверу:

GET: Запрашивает ресурс у сервера, этот метод только для чтения.
POST: Создает новый ресурс на сервере.
PUT: Обновляет существующий ресурса на сервере.
DELETE: Удаляет ресурс с сервера.
 

13. В чем разница между методом POST и методом PUT?
Ответ: POST предназначен для создания ресурса на сервере, в то время как PUT — для замены ресурса на определенном URI другим ресурсом. Если использовать PUT на URI, который уже имеет связанный с ним ресурс, PUT заменит его. Если ресурс на указанном URI отсутствует, PUT создает его.

PUT является идемпотентным, то есть его многократный вызов приведет к созданию только одного ресурса. Это происходит потому, что каждый вызов заменяет существующий ресурс (или создает новый, если заменять нечего).

POST не является идемпотентным. Если, к примеру вызвать POST 10 раз, то на сервере будут созданы 10 различных ресурсов, каждый со своим URI. 

Хотя это редко применяется, ответы POST можно кэшировать, а ответы PUT нельзя. Запросы POST обычно считаются некешируемыми, но их можно кешировать, когда они содержат ясную информацию о “свежести” данных. Подробнее можно ответить так, что ответ для запроса POST (или PATCH) может быть закеширован, если указан признак "свежести" данных и установлен заголовок Content-Location (en-US), но это редко реализуется. Поэтому кэширование POST стоит избегать, если это возможно.

 

14. Из каких основных частей состоит HTTP-запрос?
Ответ: В REST существуют следующие основные компоненты HTTP-запроса:

Метод запроса, который будет выполняться к ресурсу (т.е. GET, POST, PUT, DELETE).
URI, идентифицирующий запрашиваемый ресурс на сервере.
Версия HTTP, – т.е. какая версия должна быть в ответе сервера.
Заголовок HTTP-запроса содержит метаданные о запросе, такие как агент пользователя, форматы файлов, принимаемые клиентом, формат тела запроса, язык, предпочтения по кэшированию и т.д.
Тело HTTP-запроса, оно содержит все данные, связанные с запросом. Это необходимо только в том случае, если запрос направлен на изменение данных на сервере с помощью методов POST или PUT.
 

15. Каковы основные части HTTP-ответа?
Ответ: Ответы HTTP отправляются от сервера клиенту. Они информируют клиента о том, что запрошенное действие было (или не было) выполнено, и о доставке любых запрошенных ресурсов. Существует четыре основных компонента HTTP-ответа:

Используемая версия HTTP.
Строка состояния со статусом запроса и кода состояния HTTP-ответа.
Заголовок HTTP-ответа с метаданными об ответе, включая время, имя сервера, агент пользователя, форматы файлов возвращаемых ресурсов, информацию о кэшировании.
Тело HTTP-ответа с данными о ресурсе, который был запрошен клиентом
 

16. Назовите как минимум 3 кода успешных HTTP-ответов сервера
Ответ: сервер возвращает следующие коды статуса операции при успешной обработке запроса:

200 OK: Запрос выполнен успешно.
201 Created: Запрос прошел успешно, и ресурс был создан.
202 Accepted: Этот статус означает, что сервер принял запрос клиента, но не завершил его обработку. Обработка может быть асинхронной.
 

17. Назовите как минимум 4 кода HTTP-ответа сервера при перенаправлении запроса
Ответ: сервер возвращает следующие коды статуса при перенаправлении запроса:

301 Moved Permanently: Этот статус говорит клиенту, что запрошенный ресурс был постоянно перемещен на другой URL, и клиент должен обращаться к новому URL для доступа к ресурсу.
302 Found: Этот статус указывает на то, что ресурс временно перемещен на другой URL, и клиент должен временно использовать новый URL.
307 Temporary Redirect: Аналогично коду 302, но клиент должен использовать тот же метод запроса при обращении к новому URL.
308 Permanent Redirect: Аналогично 301, но клиент должен использовать тот же метод запроса при обращении к новому URL
 

18. Назовите как минимум 4 кода неуспешных HTTP-ответов сервера.
Ответ: сервер возвращает следующие коды при неуспешной обработке запроса:

400 Bad Request: Запрос не был выполнен из-за ошибки в запросе, например, опечатки или отсутствия данных.
401 Unauthorized: Запрос не был выполнен, поскольку клиент не прошел аутентификацию или не имеет права доступа к запрашиваемому ресурсу.
403 Forbidden: Запрос не был выполнен, поскольку клиент аутентифицирован, но не авторизован для доступа к запрашиваемому ресурсу.
404 Not Found: Запрос не был выполнен, поскольку сервер не смог найти запрашиваемый ресурс.
 

19. Назовите как минимум 3 кода ошибки сервера.
Ответ: сервер возвращает следующие коды при ошибке на сервере:

500 Internal Server Error: Запрос не был выполнен из-за непредвиденной проблемы с сервером.
502 Bad Gateway: Запрос не был выполнен из-за некорректного ответа от вышестоящего сервера.
503 Service Unavailable: Сервер не смог обработать запрос из-за технического обслуживания, перегрузки или других временных помех.
 

Блок вопросов о подходах к разработке и отличиях REST от других технологий
Кроме REST, сузествуют и другие подходы к построению API и взаимодействию клиента и сервера. СА должен как минимум знать о существовании таких технологий. Еще одно видео от IBM поможет вам в ответе на частый вопрос об отличии REST и GraphQL (включите субтитрыи и нажмите "Перевести", чтобы читать русские субтитры).



 

20. Назовите разницу между REST и GraphQL
Ответ: GraphQL — это язык запросов, который позволяет клиентам запрашивать только те данные, которые им нужны. В GraphQL клиент определяет структуру и формат данных, которые он хочет получить, и сервер возвращает их в соответствии с этим запросом.

Ключевая разница заключается в том, что REST имеет фиксированный формат запроса и ответа для каждого ресурса, в то время как GraphQL позволяет клиентам определять свой запрос и получать только необходимую информацию, что делает его более эффективным и гибким в использовании.

 

21. В чем разница между REST и SOAP?
Ответ: REST и SOAP (Simple Object Access Protocol) — это два разных подхода к построению API. Вот 3 основные различия между ними:

SOAP — это строгий протокол для построения безопасных API. REST — это не протокол, а архитектурный стиль, продиктованный набором рекомендаций, еще называемых принципами REST.
- REST API проще в построении, легче и, как правило, быстрее, чем SOAP API.

SOAP API считаются более безопасными, чем REST API, хотя в REST API все же могут быть реализованы средства защиты, делающие их достаточно надежными.
- REST позволяет кэшировать ответы, в то время как SOAP этого не делает.

SOAP кодирует данные в формате XML.
- REST позволяет кодировать данные в любом формате, хотя наиболее популярны XML и JSON.

 

22. В чем разница между REST и AJAX?
Ответ: Асинхронный JavaScript, или AJAX — это набор технологий веб-разработки, используемых в веб-приложениях. По своей сути AJAX позволяет веб-странице выполнять запросы к серверу и обновлять интерфейс страницы без необходимости обновления всей страницы.

AJAX-клиент может использовать в своих запросах REST API, но AJAX не обязательно должен работать только с REST API. REST API могут взаимодействовать с любым клиентом, независимо от того, использует он AJAX или нет.

Кроме того, в отличие от REST, где для обмена сообщениями используются HTTP-запросы и ответы, AJAX посылает свои запросы на сервер с помощью объекта XMLHttpRequest, встроенного в JavaScript. Ответы сервера выполняются JavaScript-кодом страницы для изменения ее содержимого.

 

23. Что такое подход "Contract First" к разработке REST API?
Ответ: подход Contract First в разработке REST API — это методология, при которой спецификация и контракт API создаются и определяются до начала фактической разработки. Этот контракт служит важным документом, который определяет, как клиенты могут взаимодействовать с API и какие ожидаемые результаты будут получены от различных запросов.

 

24. В чем состоят преимущества Contract First?
Ответ: Можно назвать следующие преимущества подхода Contract First:

Четкое определение API: Спецификация и контракт API определяют, как API должно взаимодействовать с клиентами.
Уменьшение рисков: Предварительное согласование контракта с заказчиками помогает уменьшить риски недопонимания и несоответствия ожиданиям от разработки API.
Улучшенная документация: Текст контракта часто служит документацией для API, что упрощает его использование и интеграцию.
 

25. Что такое Code First подход к разработке REST API?
Ответ: Подход Code First в разработке REST API — это методология, при которой сначала разрабатывается функциональность API, а затем на основе этой функциональности автоматически генерируется спецификация PI. Отличительной чертой Code First подхода является то, что разработчики фокусируются на написании логики API и используют инструменты, которые позволяют автоматически создавать документацию и спецификацию на основе этой логики.

В принципе, оба подхода, Code First и Contract First, можно сочетать в рамках одного проекта разработки API. В этом случае, Code First используется для быстрого прототипирования, а затем Contract First для формализации контракта.

 

Заключение
В этой статье мы рассмотрели 25 вопросов, которые могут быть заданы по теме REST API на техническом интервью на вакансию системного аналитика. Эти вопросы охватывают основные принципы REST и HTTP, и также более глубокие аспекты проектирования и разработки RESTful API.

Подготовка к интервью по REST API требует хорошего понимания принципов архитектуры REST, HTTP-методов и статус-кодов, а также навыков работы с запросами и ответами. 

Вам также могут быть заданы вопросы о тестировании, безопасности и лучших практиках REST API, которые мы здесь не рассматривали. Но к этим вопросам также надо быть готовыми. 

Для успешного прохождения важно не только знать ответы на вопросы, но и быть готовыми объяснить свои решения и подходы к разработке RESTful API. Практический опыт и умение применять знания в реальных проектах — ваши козыри перед другими кандидатами.

Статья представлена для ознакомления и удобства пользователей, оригинал опубликован на Хабре, автор: Редактор аккаунта SSP SOFT @SSP_blog

61 REST API interview questions to ask developers of all levels

Siddhartha Gunti
Siddhartha Gunti
September 09, 2024


REST APIs are the backbone of modern web applications, making it crucial for developers to have a strong grasp of this technology. As an interviewer, asking the right REST API questions can help you identify candidates who truly understand the concepts and can apply them effectively in real-world scenarios.

This blog post provides a comprehensive list of REST API interview questions, categorized by difficulty level and topic. From basic concepts to advanced implementations, we cover questions suitable for junior, mid-tier, and senior developers, as well as technical definitions and process-related inquiries.

By using these questions, you can effectively assess a candidate's REST API knowledge and problem-solving skills. Consider combining these interview questions with a REST API skills test to get a more complete picture of a candidate's abilities before making your hiring decision.

Table of contents
10 basic REST API interview questions and answers to assess candidates
20 REST API interview questions to ask junior developers
10 intermediate REST API interview questions and answers to ask mid-tier developers
10 advanced REST API interview questions to ask senior developers
6 REST API interview questions and answers related to technical definitions
5 REST API interview questions and answers related to processes
Which REST API skills should you evaluate during the interview phase?
Hire top talent with REST API skills tests and the right interview questions
Download REST API interview questions template in multiple formats
10 basic REST API interview questions and answers to assess candidates
10 basic REST API interview questions and answers to assess candidates
To evaluate whether your candidates have a solid grasp of REST API fundamentals, use these essential interview questions. They’ll help you gauge their understanding of core concepts and practical applications, ensuring you find the right fit for your team.

1. What is a REST API and why is it important?
A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building and interacting with web services. It relies on stateless, client-server communication and uses HTTP methods such as GET, POST, PUT, and DELETE for operations.

REST APIs are important because they promote scalability, simplicity, and flexibility in web services development. They enable different systems to communicate and exchange data seamlessly, regardless of the underlying architecture.

Look for candidates who can explain the basic principles of REST and why it’s widely adopted. An ideal response should mention scalability, simplicity, and flexibility.

2. Can you explain the difference between PUT and POST methods in REST API?
The PUT method is used to update a resource or create a resource if it doesn’t exist. It’s idempotent, meaning multiple identical requests should have the same effect as a single request. Essentially, PUT replaces the resource at the given URL with the payload provided in the request.

On the other hand, the POST method is used to create a new resource. It’s not idempotent, meaning multiple identical requests may result in multiple new resources. POST typically adds a new item to a collection of resources.

Candidates should highlight the idempotent nature of PUT and the non-idempotent behavior of POST. This shows their understanding of how these methods are used effectively in RESTful services.

3. What are the key components of a RESTful web service?
The key components of a RESTful web service include:

Resources: Entities or objects that the service manages, represented by URIs (Uniform Resource Identifiers).
HTTP Methods: The actions that can be performed on resources, such as GET, POST, PUT, and DELETE.
Representation: The format in which resources are represented, often using JSON or XML.
Statelessness: Each request from a client contains all the information needed to process the request, with no reliance on previous interactions.
Hypermedia: Links to related resources, allowing clients to navigate the API.
Look for candidates who can clearly identify and explain these components, demonstrating a comprehensive understanding of RESTful web services.

4. What is statelessness in REST APIs and why is it important?
Statelessness means that each request from a client to a server must contain all the information needed to understand and process the request. The server does not store any context or state information between requests.

Statelessness is important because it simplifies the server design, improves scalability, and makes it easier to handle and route requests. Each request is independent, which means that servers can be added or removed without affecting the overall system.

Candidates should emphasize the benefits of statelessness, such as simplification of server design and improved scalability. This shows their understanding of why REST APIs are built this way.

5. How do you handle errors in a RESTful web service?
Error handling in a RESTful web service typically involves using standard HTTP status codes to indicate the result of a request. Common status codes include 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), and 500 (Internal Server Error).

In addition to status codes, the response body can include more detailed error messages or codes to provide additional context to the client. This helps clients understand what went wrong and how to address the issue.

Look for candidates who can explain the use of HTTP status codes and detailed error messages in response bodies. This indicates their ability to design robust and user-friendly APIs.

6. Can you explain the concept of resource representation in REST?
Resource representation in REST refers to the format in which resources are presented to clients. This is typically done using standard data formats like JSON or XML. The representation includes the data of the resource as well as metadata about the resource.

The representation allows clients to understand the structure and properties of the resource. Clients can request specific representations through content negotiation by specifying the desired format in the Accept header of the HTTP request.

Candidates should be able to explain the importance of resource representation and how content negotiation works. This shows their understanding of delivering data in a flexible and client-friendly manner.

7. What is HATEOAS, and why is it significant in RESTful APIs?
HATEOAS (Hypermedia As The Engine Of Application State) is a constraint of RESTful APIs that allows clients to interact with the application entirely through hypermedia provided dynamically by the server. This means that the server includes links in its responses to guide clients through the available actions.

HATEOAS is significant because it decouples clients from server implementation details, allowing for more flexible and maintainable client-server interactions. Clients do not need to know the URI structure upfront; they can discover available actions via the links provided.

Look for candidates who understand HATEOAS and can explain how it enhances the flexibility and maintainability of RESTful APIs. This indicates their knowledge of advanced REST concepts.

8. Describe the role of HTTP headers in RESTful web services.
HTTP headers play a crucial role in RESTful web services by providing meta-information about the request or response. They can include details such as content type, content length, authentication credentials, caching directives, and more.

For example, the Content-Type header indicates the media type of the resource (e.g., JSON, XML), while the Authorization header is used to pass authentication credentials. Headers like Cache-Control and ETag help manage caching and resource versioning.

Candidates should highlight the importance of HTTP headers in conveying essential information and controlling aspects of communication. This shows their understanding of how to effectively use headers in RESTful APIs.

9. What are some common security considerations for REST APIs?
Common security considerations for REST APIs include:

Authentication and Authorization: Ensuring that only authenticated users can access the API and that they have the appropriate permissions.
Encryption: Using HTTPS to encrypt data in transit, protecting it from eavesdropping and tampering.
Rate Limiting: Preventing abuse by limiting the number of requests a client can make within a certain period.
Input Validation: Validating and sanitizing input to prevent injection attacks and other malicious activities.
Error Handling: Avoiding the exposure of sensitive information in error messages.
Look for candidates who can discuss these considerations and understand the importance of securing RESTful APIs. This indicates their awareness of potential vulnerabilities and their ability to implement best practices.

10. How do you version a REST API, and why is it necessary?
Versioning a REST API involves assigning version numbers to different iterations of the API to manage changes and ensure backward compatibility. Common methods include:

URI Versioning: Including the version number in the URI (e.g., /api/v1/resource).
Header Versioning: Specifying the version number in a custom HTTP header (e.g., X-API-Version: 1).
Query Parameter Versioning: Adding the version number as a query parameter (e.g., /api/resource?version=1).
Versioning is necessary to manage changes without disrupting existing clients. It allows developers to introduce new features and improvements while maintaining support for older versions.

Candidates should explain the different versioning strategies and the importance of backward compatibility. This shows their understanding of how to evolve an API without breaking existing integrations.

20 REST API interview questions to ask junior developers
20 REST API interview questions to ask junior developers
When interviewing junior software developers, it's crucial to assess their understanding of REST APIs. These questions will help you gauge their basic knowledge and practical skills. Use them to identify candidates who can contribute effectively to your API development projects.

Can you explain the concept of idempotency in REST APIs?
How would you design a RESTful API endpoint for creating a new user account?
What's the difference between authentication and authorization in REST APIs?
How do you handle pagination in a RESTful API?
Can you describe the purpose of the OPTIONS HTTP method in REST?
What are the benefits of using JSON Web Tokens (JWT) in REST APIs?
How would you implement rate limiting in a REST API?
Can you explain what CORS is and why it's important for REST APIs?
What's the significance of the Accept and Content-Type headers in REST API requests?
How would you design a RESTful API endpoint for updating a user's profile information?
Can you describe the difference between synchronous and asynchronous API calls?
What are some best practices for naming REST API endpoints?
How would you handle file uploads in a RESTful API?
Can you explain the concept of idempotency in REST APIs?
What's the purpose of using status codes in REST API responses?
How would you implement search functionality in a RESTful API?
Can you describe the difference between REST and GraphQL?
What are some common tools or libraries you've used for testing REST APIs?
How would you handle long-running operations in a RESTful API?
Can you explain the concept of API throttling and when it's useful?
10 intermediate REST API interview questions and answers to ask mid-tier developers
10 intermediate REST API interview questions and answers to ask mid-tier developers
Ready to level up your REST API interviews? These 10 intermediate questions are perfect for assessing mid-tier developers. They'll help you gauge candidates' understanding of REST principles and their ability to apply them in real-world scenarios. Use these questions to spark discussions and uncover valuable insights about your potential hires.

1. How would you handle caching in a REST API to improve performance?
A strong candidate should discuss various caching strategies for REST APIs:

Client-side caching: Using HTTP headers like Cache-Control and ETag to allow clients to cache responses locally
Server-side caching: Implementing caching layers on the server to store frequently accessed data
Content Delivery Networks (CDNs): Utilizing CDNs to cache and serve static resources closer to the client
Look for candidates who can explain the pros and cons of each approach and discuss how to implement cache invalidation to ensure data consistency.

2. Can you explain the concept of hypermedia-driven REST APIs?
Hypermedia-driven REST APIs, also known as HATEOAS (Hypertext As The Engine Of Application State), is an approach where the API provides links to related resources in its responses. This allows clients to navigate the API dynamically without prior knowledge of the entire API structure.

Candidates should be able to explain:

How hypermedia links are included in API responses
The benefits of this approach, such as improved discoverability and flexibility
Potential challenges in implementing HATEOAS, like increased response size and client complexity
Look for answers that demonstrate an understanding of how HATEOAS can make APIs more self-descriptive and easier to evolve over time.

3. How would you implement API versioning, and what are the trade-offs of different approaches?
Candidates should discuss common API versioning strategies:

URL versioning: Including the version in the URL (e.g., /api/v1/users)
Header versioning: Using custom headers to specify the version
Query parameter versioning: Adding a version parameter to the query string
Content negotiation: Using Accept headers to request specific versions
Strong answers will include pros and cons of each approach. For example, URL versioning is simple but can lead to duplication, while header versioning is cleaner but may be less visible.

Look for candidates who can explain how versioning impacts API maintenance and backward compatibility, and who can recommend an approach based on specific project needs.

4. Explain the concept of idempotency in REST APIs and why it's important.
Idempotency in REST APIs means that making multiple identical requests should have the same effect as making a single request. This property is crucial for ensuring the reliability and consistency of API operations, especially in distributed systems where network issues may cause retries.

Candidates should explain:

Which HTTP methods are typically idempotent (GET, PUT, DELETE) and which are not (POST)
How idempotency helps in handling network failures and retries
Strategies for implementing idempotency, such as using unique request identifiers
Look for answers that demonstrate an understanding of how idempotency impacts API design and error handling, and how it contributes to building robust and fault-tolerant systems.

5. How would you design a RESTful API for a social media platform's newsfeed feature?
This question tests a candidate's ability to apply REST principles to a real-world scenario. A good answer might include:

Endpoint design: /api/v1/users/{userId}/feed for fetching a user's newsfeed
Query parameters for pagination, filtering, and sorting
Resource representations: JSON structure for newsfeed items, including content, author, timestamp, etc.
Proper use of HTTP methods: GET for fetching, POST for creating new posts, etc.
Considerations for performance, such as pagination and caching strategies
Look for candidates who can explain their design choices, discuss potential scalability challenges, and consider features like real-time updates or personalization in their API design.

6. What are the key considerations when designing a RESTful API for mobile applications?
When designing APIs for mobile apps, candidates should consider:

Bandwidth efficiency: Minimizing data transfer to conserve mobile data
Battery impact: Optimizing requests to reduce battery drain
Offline support: Designing the API to support offline-first architectures
Versioning: Ensuring backward compatibility for users who haven't updated their apps
Security: Implementing proper authentication and encryption for sensitive data
Strong answers will also discuss strategies like response compression, efficient pagination, and optimizing payload size. Look for candidates who understand the unique challenges of mobile environments and can propose solutions to address them.

7. How would you implement rate limiting in a REST API, and why is it important?
Rate limiting is crucial for protecting APIs from abuse and ensuring fair usage. Candidates should explain:

Implementation strategies: Token bucket, fixed window, or sliding window algorithms
Where to apply rate limits: By IP address, API key, or user account
How to communicate limits to clients: Using HTTP headers like X-RateLimit-Limit and X-RateLimit-Remaining
Handling limit exceedance: Returning 429 Too Many Requests status code with retry-after information
Look for answers that discuss the balance between protecting the API and providing a good user experience. Candidates should also mention considerations like distributed rate limiting for scalable systems and how to handle rate limiting in microservices architectures.

8. Explain the concept of content negotiation in REST APIs and how it's implemented.
Content negotiation allows clients to request specific data formats from the API. Candidates should explain:

The use of Accept and Content-Type headers for negotiation
Common formats like JSON, XML, and how to support multiple formats
Server-driven vs. agent-driven negotiation
How content negotiation affects API versioning and backward compatibility
Strong answers will include examples of how to implement content negotiation in popular frameworks and discuss best practices for handling unsupported formats. Look for candidates who understand how content negotiation enhances API flexibility and interoperability.

9. How would you design a RESTful API to handle long-running operations?
Handling long-running operations in REST APIs requires careful design. Candidates should discuss:

Asynchronous processing: Accepting the request and returning a 202 Accepted status
Job resources: Creating a separate endpoint to check the status of long-running jobs
Webhooks: Allowing clients to register callbacks for job completion notifications
Polling: Providing an endpoint for clients to periodically check job status
Look for answers that consider the trade-offs between different approaches, such as the simplicity of polling vs. the efficiency of webhooks. Candidates should also mention error handling, timeout considerations, and how to design the API to be resilient to client or server failures during long-running operations.

10. What are the best practices for error handling and communicating errors in REST APIs?
Effective error handling is crucial for API usability. Candidates should discuss:

Using appropriate HTTP status codes (e.g., 400 for client errors, 500 for server errors)
Providing detailed error messages in the response body
Consistent error response format across the API
Including error codes or identifiers for easier troubleshooting
Logging errors on the server side for debugging
Strong answers will also mention the importance of not exposing sensitive information in error messages and how to handle unexpected errors gracefully. Look for candidates who understand the balance between providing helpful information to API consumers and maintaining security and simplicity in the API design.

10 advanced REST API interview questions to ask senior developers
10 advanced REST API interview questions to ask senior developers
To assess if senior candidates possess the necessary expertise in REST API design and implementation, utilize these advanced questions during interviews. Tailor your approach based on the specific role, like a software developer, to gauge their technical understanding effectively.

How would you ensure backward compatibility when making changes to an existing REST API?
Can you explain how you would implement OAuth 2.0 in a REST API and why it's used?
What strategies do you use to document REST APIs effectively for other developers?
How do you approach the design of a RESTful API to support multiple client types, such as web and mobile?
Can you discuss the trade-offs between REST and other API architectural styles, like gRPC or SOAP?
How do you handle API deprecation, and what communication strategies do you use to inform your users?
What are some techniques you can implement to enhance the performance of a REST API?
Can you explain how you would implement a search filter in a RESTful service?
What is the role of API gateways in a microservices architecture, particularly for REST APIs?
How would you manage database transactions in a RESTful API to ensure data integrity?
6 REST API interview questions and answers related to technical definitions
6 REST API interview questions and answers related to technical definitions
When interviewing for REST API developers, it's crucial to assess their understanding of technical definitions. These questions will help you gauge candidates' knowledge of key REST API concepts, allowing you to identify those who can effectively design and implement robust APIs. Use this list to delve into the technical aspects of REST without getting bogged down in code specifics.

1. Can you explain what URI templating is in the context of REST APIs?
URI templating is a technique used in REST APIs to define variable parts within a URI. It allows for the creation of flexible and dynamic URLs by using placeholders or variables within the URI structure.

For example, instead of having a fixed URL like '/users/123', you might have a template like '/users/{id}'. This allows the API to handle requests for different user IDs without needing separate endpoint definitions for each user.

Look for candidates who can explain how URI templating enhances API flexibility and scalability. They should also be able to provide examples of how it's used in real-world scenarios.

2. What is the difference between URI and URL in the context of REST APIs?
URI (Uniform Resource Identifier) is a broader term that includes both URLs and URNs. It's used to identify a resource, whether by location, name, or both. URL (Uniform Resource Locator), on the other hand, is a specific type of URI that provides the means to locate and retrieve a resource on a network.

In the context of REST APIs, URIs are often used to identify resources, while URLs are used to locate and access those resources. For example, 'http://api.example.com/users/123' is both a URI and a URL, as it identifies a specific user resource and provides the location to access it.

Strong candidates should be able to explain this distinction clearly and provide examples of how URIs and URLs are used in API design. They might also mention that in modern web development, the terms are often used interchangeably, though technically they have different meanings.

3. Can you explain the concept of idempotency in REST APIs and provide an example?
Idempotency in REST APIs refers to the property where making multiple identical requests has the same effect as making a single request. This means that repeating an operation multiple times will not change the result beyond the initial application.

For example, a DELETE request to remove a specific resource should be idempotent. If you send a DELETE request to '/users/123' multiple times, the first request will delete the user, and subsequent requests will have no additional effect (assuming the user isn't recreated between requests).

Look for candidates who can explain why idempotency is important for API reliability and error handling. They should be able to differentiate between idempotent methods (like GET, PUT, DELETE) and non-idempotent methods (like POST). Ask for additional examples to gauge their understanding of how idempotency applies in various API operations.

4. What is content negotiation in REST APIs and why is it important?
Content negotiation is a mechanism in REST APIs that allows clients and servers to agree on the most appropriate format for exchanging data. It enables the same resource to be represented in different formats (such as JSON, XML, or HTML) based on the client's preferences or capabilities.

This process typically involves the client sending headers like 'Accept' to specify preferred formats, and the server responding with the 'Content-Type' header to indicate the format of the returned data. For example, a client might send 'Accept: application/json' to request JSON data, and the server would respond with 'Content-Type: application/json' along with the JSON-formatted data.

Strong candidates should emphasize the importance of content negotiation in creating flexible and client-friendly APIs. They might discuss how it enhances interoperability, allows for backward compatibility, and improves the overall user experience. Ask them about potential challenges in implementing content negotiation and how they would address them.

5. Explain the concept of resource expansion in REST APIs.
Resource expansion, also known as embedded resources or compound documents, is a technique used in REST APIs to include related resources in the response of a single API call. This approach can reduce the number of requests a client needs to make to gather related data.

For example, when requesting information about a user, the API might allow you to expand the response to include details about the user's orders. Instead of making separate calls for '/users/123' and '/users/123/orders', you might use a query parameter like '/users/123?expand=orders' to get all the information in one request.

Look for candidates who can discuss the benefits of resource expansion, such as improved performance and reduced network overhead. They should also be aware of potential drawbacks, like increased response size and complexity in API design. Ask how they would implement this feature while maintaining API simplicity and flexibility.

6. What is the difference between statelessness and statefulness in the context of REST APIs?
Statelessness is a key principle of REST APIs, meaning that each request from a client to a server must contain all the information needed to understand and process the request. The server doesn't store any client context between requests. Each request is treated as an independent transaction, unrelated to any previous requests.

Statefulness, on the other hand, involves the server keeping track of the client's state across multiple requests. This might involve storing session information or remembering the client's previous actions.

Candidates should explain that REST APIs are designed to be stateless for scalability and reliability. They might discuss how statelessness simplifies server-side architecture, enables better load balancing, and improves fault tolerance. Ask them to provide examples of how to handle scenarios that seem to require state (like authentication) in a stateless manner, such as using tokens or client-side storage.

5 REST API interview questions and answers related to processes
5 REST API interview questions and answers related to processes
To assess whether your candidates truly understand the intricacies of REST API processes, consider using these carefully crafted interview questions. These questions will help you gauge a candidate's practical knowledge and problem-solving skills related to REST API implementation and management. Remember, the goal is to spark meaningful discussions and gain insights into the candidate's thought process.

1. How would you handle a scenario where a REST API needs to process a large amount of data that takes several minutes to complete?
When dealing with long-running processes in REST APIs, there are several approaches a candidate might suggest:

Asynchronous processing: Implement a job queue system where the API immediately returns a job ID or status URL. The client can then poll this endpoint to check the progress.
Webhooks: Once the process is complete, the server can send a callback to a pre-defined URL provided by the client.
Streaming: For data that can be processed in chunks, consider implementing a streaming API to send partial results as they become available.
Look for candidates who can explain the trade-offs between these approaches and discuss factors like scalability, client experience, and error handling. A strong candidate might also mention the importance of clear documentation for these long-running operations to ensure proper client implementation.

2. Can you explain how you would implement rate limiting in a REST API?
Implementing rate limiting in a REST API involves several key steps:

Define limits: Determine the number of requests allowed per time period (e.g., 100 requests per minute).
Track requests: Use a database or in-memory store to keep track of client requests.
Implement limiting logic: Check the request count against the defined limit before processing each request.
Return appropriate headers: Include headers like 'X-RateLimit-Limit', 'X-RateLimit-Remaining', and 'X-RateLimit-Reset' in API responses.
Handle limit exceeded: Return a 429 (Too Many Requests) status code when the limit is exceeded, along with information on when the limit will reset.
A strong candidate should be able to discuss different rate limiting strategies (e.g., fixed window, sliding window, token bucket) and their pros and cons. They might also mention considerations for distributed systems and how to handle rate limiting across multiple API servers.

3. How would you design a REST API endpoint for a social media platform's newsfeed feature?
When designing a REST API endpoint for a social media platform's newsfeed, candidates should consider the following aspects:

Endpoint structure: /api/v1/newsfeed or /api/v1/users/{userId}/feed
Query parameters: Include options for pagination, filtering (e.g., by date, post type), and sorting.
Response format: Return a JSON object containing an array of feed items, each with properties like post content, author, timestamp, and engagement metrics.
Pagination: Implement cursor-based pagination for efficient scrolling through large datasets.
Caching: Utilize appropriate caching strategies to improve performance and reduce server load.
Look for candidates who discuss scalability concerns, such as handling high request volumes and optimizing database queries. They should also mention considerations for real-time updates, perhaps suggesting WebSocket integration for live feed updates. A strong candidate might also bring up privacy controls and how to efficiently filter content based on user relationships and preferences.

4. Explain how you would implement content negotiation in a REST API.
Content negotiation in REST APIs allows clients to request specific data formats. Here's how it can be implemented:

Accept header: Use the 'Accept' header in client requests to specify desired content types (e.g., 'application/json', 'application/xml').
Server-side logic: Implement logic to check the 'Accept' header and format the response accordingly.
Content-Type header: Set the 'Content-Type' header in the response to indicate the format of the returned data.
Default format: Provide a default format (usually JSON) if no 'Accept' header is specified or if the requested format is not supported.
Error handling: Return a 406 (Not Acceptable) status code if the requested format cannot be provided.
A strong candidate should discuss the benefits of content negotiation, such as improved API flexibility and client satisfaction. They might also mention versioning considerations and how content negotiation can be used alongside or as an alternative to URL-based versioning. Look for candidates who understand the importance of clear documentation for supported content types and how to handle edge cases in content negotiation.

5. How would you approach designing a REST API to support multiple client types, such as web and mobile applications?
Designing a REST API for multiple client types requires careful consideration of various factors:

Consistent data model: Create a unified data model that works across all client types.
Flexible endpoints: Design endpoints that can serve both web and mobile needs, possibly using query parameters to customize responses.
Versioning: Implement API versioning to support different client versions and allow for future changes.
Performance optimization: Consider implementing techniques like response compression and partial responses to accommodate mobile network limitations.
Authentication: Use a flexible authentication system (e.g., OAuth 2.0) that works well for both web and mobile clients.
Look for candidates who discuss the importance of thorough documentation and providing SDKs or client libraries for different platforms. They should also mention considerations for offline functionality in mobile apps and how to handle data synchronization. A strong candidate might bring up the concept of API-first design and how it can help create a more robust and flexible API that serves multiple client types effectively.

Which REST API skills should you evaluate during the interview phase?
It's impossible to gauge every aspect of a candidate’s skill set in a single interview, but for assessing REST API skills, focusing on core competencies can provide a clear picture of their abilities. These key skills are essential for understanding how well a candidate can design, develop, and maintain robust RESTful services.

Which REST API skills should you evaluate during the interview phase?
HTTP Protocols
Understanding HTTP protocols is essential for designing efficient REST APIs. HTTP methods such as GET, POST, PUT, and DELETE are the building blocks of RESTful services.

You can use an assessment test that asks relevant MCQs to filter out this skill. For instance, our REST API test covers various questions on HTTP methods.

Additionally, you can ask targeted interview questions to gauge their understanding of HTTP protocols.

Can you explain the difference between PUT and POST HTTP methods?

Look for a candidate who can explain the idempotent nature of PUT versus the non-idempotent nature of POST, highlighting their nuanced understanding.

API Authentication
API Authentication is crucial for securing REST APIs. Methods like OAuth, JWT, and API keys ensure that only authorized users can access the services.

You can use an assessment test that includes MCQs about different authentication methods. Our backend engineer test features questions on API security mechanisms.

Consider asking questions specifically about authentication to assess their grasp on securing APIs.

What are the differences between OAuth and JWT for API authentication, and when would you use each?

A strong candidate will discuss the use cases for both OAuth (for delegated access) and JWT (for stateless authentication), indicating their practical knowledge.

Data Serialization
Data serialization formats like JSON and XML play a critical role in data interchange in REST APIs. Proficiency in these formats ensures smooth communication between client and server.

You can use an assessment test that evaluates their knowledge of serialization. Our REST API test includes questions on JSON and XML.

Interview questions can also help evaluate their understanding of data serialization.

Why is JSON preferred over XML in RESTful APIs?

Expect the candidate to mention JSON's lightweight nature, ease of parsing, and compatibility with JavaScript, demonstrating their familiarity with current practices.

Hire top talent with REST API skills tests and the right interview questions
When hiring for REST API skills, it's important to ensure candidates possess the necessary expertise. A thorough assessment can help you determine if they truly have the skills required for your team.

The most accurate way to evaluate these skills is by using skill tests. Consider utilizing our REST API Test to effectively gauge candidates' knowledge and capabilities.

After conducting the test, you can shortlist the best applicants based on their performance and invite them for interviews. This process streamlines your hiring efforts and helps identify top candidates.

To get started, visit our test library to explore various assessments and sign up today. This will set you on the right path to hiring the best REST API talent.


Top REST API Interview Questions and Answers (2026)
By Haroon Ahamed Kitthu
Share This Article:
Last updated on Jun 10, 2026106428
Top REST API Interview Questions and Answers for 2026
TL;DR: REST APIs are a core part of modern software development. Interviewers usually test five areas: HTTP basics, resource design, authentication, scalability, and production troubleshooting. This guide provides concise answers, examples, tables, and scenario-based responses for API interviews.
REST APIs are the backbone of most modern web and mobile applications. They help frontends communicate with backends, databases, payment systems, identity platforms, and third-party services in a structured way. For developers, REST is not just about knowing endpoints. It is about understanding how data moves, how requests are handled, and how APIs stay reliable at scale.

REST API interview questions usually begin with methods, status codes, CRUD, and statelessness. As the role becomes more advanced, interviewers also test caching, pagination, idempotency, authentication, rate limits, versioning, monitoring, and system design trade-offs. This guide covers the most important REST API interview questions and answers for beginners, mid-level developers, and experienced professionals, with a focus on clear concepts, practical examples, and production-ready thinking.


Beginner Questions on REST APIs
1. What is a REST API?
A REST API follows REST principles. It exposes resources through URLs and uses HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

Example: GET /users/101 fetches the user with ID 101.

2. What are resources in REST?
A resource is any object or data entity that can be accessed through an API. Examples include users, orders, invoices, products, or comments.

Good resource names use nouns.

Good

Bad

/users

/getUsers

/orders/15

/fetchOrderById

3. What are common HTTP methods in REST?
Method

Use

Example

GET

Read data

GET /products

POST

Create data

POST /products

PUT

Replace data

PUT /products/10

PATCH

Update part of data

PATCH /products/10

DELETE

Remove data

DELETE /products/10

4. What is CRUD in REST?
CRUD means Create, Read, Update, and Delete. These operations map to HTTP methods.

Create maps to POST. Read maps to GET. Update maps to PUT or PATCH. Delete maps to DELETE.

5. What does statelessness mean in REST?
Statelessness means the server does not store client session data between requests. Every request must contain all information needed to process it.

For example, a request should carry an access token. The server should not depend on a previous request to identify the user.

6. What is the difference between PUT and PATCH?
PUT replaces the complete resource. PATCH updates only selected fields.

Example:

PUT /users/7 may replace the full user object.

PATCH /users/7 may update only the user’s phone number.

7. What are common REST status codes?
Code

Meaning

200

Request successful

201

Resource created

204

Successful request with no response body

400

Bad request

401

Not authenticated

403

Not allowed

404

Resource not found

409

Conflict

500

Server error

8. What is the difference between 401 and 403?
401 means the client is not authenticated. 403 means the client is authenticated but does not have permission.

Example: A logged-out user gets 401. A logged-in user trying to access admin data gets 403.

9. What is JSON in REST APIs?
JSON is a lightweight data format used to send and receive data. It is easy for humans to read and easy for applications to parse.

Example:

{

  "id": 101,

  "name": "Riya",

  "role": "developer"

}

10. What makes an API RESTful?
An API is RESTful when it uses resources, standard HTTP methods, stateless requests, proper status codes, and consistent URL design. It should also separate client and server concerns.

Explore the AI-Powered Full Stack Developer Program to learn modern web development, APIs, databases, cloud deployment, and AI-powered application development.
Intermediate Questions on REST APIs
1. What is authentication in REST APIs?
Authentication verifies who the user or client is. Common methods include API keys, basic authentication, OAuth 2.0, and JSON Web Tokens.

A production API should use HTTPS and avoid sending credentials in plain text.

2. What is authorization?
Authorization checks what an authenticated user can access. It answers the question: “Is this user allowed to perform this action?”

Example: A user may view their own order but not another user’s order.

3. What is API pagination?
Pagination breaks large results into smaller pages. It improves response time and reduces server load.

Example:

GET /products?page=2&limit=20

For large datasets, cursor-based pagination is often better.

GET /products?cursor=eyJpZCI6MTAw&limit=20

4. Offset vs cursor pagination: Which is better?
Type

Best For

Limitation

Offset pagination

Small datasets and admin lists

Can become slow on large tables

Cursor pagination

Feeds, logs, high-volume APIs

More complex to implement

5. What is caching in REST APIs?
Caching stores responses so future requests can be served faster. It reduces latency and backend load.

Common headers include Cache-Control, ETag, and Last-Modified.

Example: Product categories can be cached because they do not change often. Cart totals should not be cached without strict rules in place.

6. What is idempotency?
An operation is idempotent if repeating it gives the same final result.

GET, PUT, and DELETE are usually idempotent. POST is usually not idempotent because it may create a new resource each time.

Example: Retrying PUT /users/5 with the same body should still leave the user in the same state.

7. How do you handle duplicate POST requests?
Use an idempotency key. The client sends a unique key with the request. The server stores the result for that key and returns the same result on subsequent requests.

This is common in payment APIs.

8. What is content negotiation?
Content negotiation allows the client and server to agree on the response format. Clients use headers such as Accept: application/json.

The server can return JSON, XML, or another supported format.

9. What are query parameters used for?
Query parameters help filter, sort, search, and paginate data.

Examples:

GET /products?category=shoes

GET /orders?status=paid&sort=created_at

They should not be used for sensitive data such as passwords or tokens.

10. How should errors be returned in REST APIs?
Errors should be clear, consistent, and machine-readable.

Example:

{

  "error": {

    "code": "INVALID_EMAIL",

    "message": "Please enter a valid email address."

  }

}

A good API should not expose stack traces or internal database details.

Advanced Questions on REST APIs
1. What is an API gateway?
An API gateway is a layer between clients and backend services. It handles routing, authentication, rate limiting, logging, request transformation, and sometimes caching.

What the interviewer checks: They want to know if you understand gateway-level control in microservices.

2. Why is rate limiting important?
Rate limiting controls how many requests a client can make in a time window. It protects APIs from abuse, accidental traffic spikes, scraping, and denial-of-service patterns.

Example: Allow 100 requests per user per minute.

Return 429 Too Many Requests when the limit is crossed.

3. How would you design rate limiting?
Use a token bucket, a leaky bucket, or a fixed-window algorithm. Store counters in a fast system such as Redis. Apply limits by user ID, IP address, API key, or tenant.

What the interviewer checks: They want to see whether you consider distributed counters, fairness, and burst traffic.

4. What is API versioning?
API versioning manages changes without breaking existing clients.

Common approaches:

Approach

Example

URL versioning

/v1/users

Header versioning

Accept: application/vnd.company.v2+json

Query versioning

/users?version=2

URL versioning is simple. Header versioning is cleaner but harder to test manually.

5. How do you scale a high-traffic REST API?
Use horizontal scaling, load balancing, caching, database indexing, asynchronous processing, and CDN support where applicable. Keep APIs stateless so requests can be handled by any server instance.

What the interviewer checks: They look for system thinking, not just “add more servers.”

6. How do REST APIs work in distributed systems?
In distributed systems, REST APIs often connect multiple services. Each service owns a specific business capability. APIs must handle latency, partial failures, retries, timeouts, and data consistency.

A strong answer should mention circuit breakers, correlation IDs, retries with backoff, and eventual consistency.

7. How do you secure REST APIs?
Use HTTPS, strong authentication, short-lived tokens, authorization checks, input validation, rate limits, audit logs, and secure headers. Sensitive secrets should be stored in a vault, not in code.

OWASP ranks broken object-level authorization as a leading API security risk. So every endpoint that accesses an object by ID must verify ownership and permission.

8. What is observability in REST APIs?
Observability helps teams understand what is happening inside the API. It includes logs, metrics, and traces.

Important signals include request count, latency, error rate, saturation, p95 latency, p99 latency, and dependency failures.

Scenario-Based Questions on REST APIs
1. REST API becomes slow during peak traffic. What will you check?
Start with metrics. Check latency, error rate, CPU, memory, database queries, cache hit ratio, thread pools, and downstream service latency.

Then isolate the bottleneck. If the database is slow, add indexes or optimize queries. If traffic is high, add caching and scale horizontally. If one endpoint is heavy, move long-running work to a queue.

2. How would you handle retries safely?
Use retries only for transient failures such as network timeouts or 503 errors. Add exponential backoff and jitter. Avoid retrying non-idempotent POST requests unless the API supports idempotency keys.

Production example: A payment request should not charge the customer twice because the client retried after a timeout.

3. How would you design a secure public API?
Use OAuth 2.0 or signed API keys, HTTPS, rate limits, request validation, schema validation, audit logs, and clear error responses. Add scopes for permissions.

For example, a partner API may use scopes such as orders:read and orders:write.

4. What is the difference between public and private APIs?
Type

Audience

Security Need

Public API

External developers or partners

Strong governance, documentation, throttling

Private API

Internal teams or services

Service identity, network controls, access policies

A private API still needs security. Internal does not mean trusted by default.

5. How would you design an API for millions of users?
Use stateless services behind a load balancer. Add CDN caching for public content. Use read replicas for heavy reads. Use queues for asynchronous tasks. Apply rate limiting at the gateway. Use distributed tracing to debug issues across services.

This is where RESTful API interview questions often move from syntax to architecture.

6. How do you handle backward compatibility?
Do not remove fields suddenly. Add new optional fields first. Keep old versions active for a defined period. Announce deprecations clearly. Track client usage before removing old endpoints.

Interview questions test your fundamentals. Employers value candidates who can also build complete applications. Learn how full-stack developers combine frontend, backend, databases, cloud services, and AI tools to create production-ready software with out AI-Powered Full Stack Developer Program.
REST API Design Questions
1. What are good REST resource naming practices?
Use nouns, plural names, lowercase letters, and hyphens where needed.

Good examples:

/users

/orders/45/items

Avoid verbs:

/getAllUsers

/createNewOrder

2. How should nested resources be designed?
Use nesting when the child resource clearly belongs to the parent.

Good:

GET /users/10/orders

Avoid deep nesting:

/companies/1/departments/2/teams/3/users/4/tasks/5

Deep nesting makes APIs hard to maintain. Use filters instead.

3. How do filtering and sorting work?
Use query parameters.

Examples:

GET /products?category=books

GET /products?sort=price_desc

GET /employees?department=engineering&status=active

Keep parameter names consistent across APIs.

4. What are examples of good and bad API design?
Purpose

Good API

Bad API

Get users

GET /users

GET /getUsers

Create user

POST /users

GET /createUser

Delete user

DELETE /users/12

POST /deleteUser

Filter orders

GET /orders?status=paid

GET /paidOrdersOnly

Good design is predictable. Developers should guess the next endpoint correctly after seeing a few examples.

5. How should APIs handle partial responses?
Allow clients to request only the required fields.

Example:

GET /users/10?fields=id,name,email

This reduces payload size and improves performance, especially for mobile clients.

6. What should API documentation include?
API documentation should include endpoint URLs, methods, request parameters, headers, authentication rules, status codes, error examples, sample responses, rate limits, and versioning notes.

Good documentation reduces support tickets and helps developers integrate faster.

Become a Software Development Professional
$621.31 Billion
Expected Global Application Development Software Market Size by 2032.
2x Productivity Increase
AmongDevelopers Who Used Generative AI Tools to Complete Tasks.
56% Faster Task Completion
Reported by Developers Using Github Copilot.
Microsoft 
AI-Powered Full Stack Developer Program
Learn through 100+ hours of core curriculum delivered in live online classes by industry experts
Enhance your coding skills using AI-driven tools like ChatGPT, CodeWhisperer, Copilot, and Hugging Face
9 months
View Program
Java Certification Training
Java Certification Training
24x7 learner assistance and support
View Program
Here's what learners are saying regarding our programs:
Wayne RyanWayne RyanWeb Developer, Smith Drug Company
The program helped me bridge the gap between traditional software development knowledge and modern industry practices. I gained hands-on exposure to technologies like Docker, DevOps, and application architecture, which improved my problem-solving skills and helped me contribute more effectively to real-world development challenges at work.

Himanshu SukhijaHimanshu SukhijaSoftware Engineer at Tata Consultancy Services, Tata Consultancy Services
I have enrolled in Simplilearn's Java Certification Course. The content in the Java course is highly informative, and the trainer is exceptionally knowledgeable with outstanding skills in explaining the concepts.

Not sure what you’re looking for?View all Related Programs
Questions on REST APIs for Experienced Developers
For senior roles, interviewers expect more than definitions. They want proof that you can design, operate, secure, and debug APIs in production. This section is useful for REST API interview questions for 10 years of experience, where answers must include trade-offs.

1. How do you design REST APIs for scalability?
Start with stateless services. Add load balancing, caching, pagination, asynchronous processing, and database optimization. Separate read-heavy and write-heavy paths where needed.

For example, order creation can be synchronous until payment confirmation, but invoice generation can be asynchronous.

2. How do you protect APIs from broken object-level authorization?
Never trust object IDs from the client. Always check whether the authenticated user has access to that object.

Bad flow: GET /orders/123 returns the order because the ID exists.

Good flow: The API checks that order 123 belongs to the logged-in user before returning it.

3. How do you monitor API health?
Track RED metrics: rate, errors, and duration. Also track saturation, dependency latency, queue depth, database connection usage, and cache hit ratio.

Use structured logs and correlation IDs. This helps trace one request across multiple services.

4. How would you manage API contracts across teams?
Use OpenAPI specifications, contract testing, API linting, and review workflows. Each change should be backward compatible unless a new version is released.

For microservices, consumer-driven contract testing helps detect breaking changes before deployment.

5. How do you choose between REST and GraphQL?
Use REST when resources are clear, caching is important, and the API needs simple integration. Use GraphQL when clients need flexible data selection from multiple related resources.

REST is easier to cache and monitor. GraphQL can reduce over-fetching, but needs stronger query complexity controls.

Also Read: GraphQL vs REST API

6. How do you handle long-running operations?
Do not keep the HTTP request open for too long. Return 202 Accepted with a job ID.

Example:

POST /reports

Response:

{

  "jobId": "rep_123",

  "statusUrl": "/reports/jobs/rep_123"

}

The client can poll the status endpoint or receive a webhook when the job is complete.

7. What mistakes should experienced developers avoid?
Common mistakes include weak authorization, unclear error responses, no rate limiting, poor pagination, leaking internal errors, inconsistent naming, and a lack of observability.

Senior developers should also avoid designing APIs only for today’s use case. Good APIs remain stable as products grow.

Wondering how Software Engineers reach senior and leadership roles? Explore the skills, technologies, salary growth, and career progression behind one of the world's most in-demand jobs with this software engineer roadmap.
Key Takeaways
REST API interviews test both fundamentals and real-world judgment. Beginners should know HTTP methods, status codes, CRUD, statelessness, and JSON. 
Intermediate candidates should explain authentication, pagination, caching, idempotency, and error handling with examples. 
Advanced candidates should connect API design with gateways, distributed systems, rate limiting, observability, and security.
These rest interview questions are best answered with short, practical, and example-led responses.
Do not only define the term. Explain where it is used, what can go wrong, and how you would handle it in production.

Top 50+ Rest Api Interview Questions and Answers | 2023
Interview Q&A / By Deependra kushwah / May 5, 2023
HomeInterview Q&ATop 50+ Rest Api Interview Questions and Answers | 2023
Rest API is widely used architecture style in the IT industry. So if you are preparing for an interview and planning to change the job. Be prepared with this list of 50+ rest api interview questions and answers which we have compiled.

What is REST?
REST stands for Representational State Transfer. It is an architectural style for creating web services that are scalable, simple, and interoperable with other systems on the web.

RESTful web services use HTTP methods such as GET, POST, PUT, and DELETE to perform operations on resources identified by URIs. The key characteristics of a RESTful web service include statelessness, client-server architecture, cacheability , and a uniform interface.

RESTful web services are widely used in building modern applications, especially those that need to be consumed by a variety of clients, including web browsers, mobile devices, and other web services.

What are the key characteristics of a RESTful web service?
The key characteristics of a RESTful web service are:

Stateless: Each request from the client contains all the necessary information to complete the request. There is no need for the server to maintain any state between requests.
Client-server architecture: The client and server are separate entities that communicate through a well-defined interface using HTTP methods like GET, POST, PUT, DELETE, etc.
Cacheability: Responses from the server must explicitly indicate whether they are cacheable or not. This allows clients to cache responses and reduces the number of requests made to the server.
Layered system: A client cannot tell whether it is communicating directly with the server or with an intermediary such as a load balancer or a proxy. This allows for a layered architecture where different parts of the system can be developed and maintained separately.
Uniform interface: The interface between the client and server should be uniform and consistent across different resources. This includes using HTTP methods consistently, identifying resources using URIs, and using media types to specify the format of data.
By following these key characteristics, RESTful web services can be designed to be simple, scalable, and interoperable with other systems on the web.

What is an API?
An API, or Application Programming Interface, is a set of rules, protocols, and tools that allows different software applications to communicate with each other. APIs define how software components should interact and exchange data with each other.

In the context of web development, an API is a set of endpoints or URLs exposed by a web server that can be used to access and manipulate data or functionality provided by that server. The endpoints typically use HTTP methods such as GET, POST, PUT, and DELETE to perform operations on the data or functionality exposed by the server.

What is the difference between a REST API and a SOAP API?
REST (Representational State Transfer) and SOAP (Simple Object Access Protocol) are two different types of web service architectures that are commonly used in web development. The key differences between a REST API and a SOAP API are as follows:

Architecture: REST APIs are built using the HTTP protocol and are based on a client-server architecture, whereas SOAP APIs use XML and are based on a distributed computing model.
Messaging: REST APIs use plain text formats such as JSON or XML to send and receive messages, while SOAP APIs use XML exclusively for message exchange.
Operations: REST APIs support a limited number of operations such as GET, POST, PUT, and DELETE, while SOAP APIs support a wider range of operations such as create, read, update, and delete (CRUD).
Scalability: REST APIs are highly scalable and can handle a large number of concurrent requests, while SOAP APIs are less scalable due to their complex messaging structure.
Performance: REST APIs are generally faster and more efficient than SOAP APIs due to their lightweight messaging structure and simpler architecture.
In summary, REST APIs are simpler, more scalable, and faster than SOAP APIs, making them a popular choice for modern web development. However, SOAP APIs may still be preferred in certain situations where a wider range of operations is required or where compatibility with legacy systems is necessary.

What HTTP methods are commonly used in RESTful web services?
HTTP methods, also known as verbs, are used in RESTful web services to perform CRUD (Create, Read, Update, Delete) operations on resources. The most commonly used HTTP methods in RESTful web services are:

HTTP methods
HTTP methods
GET: Retrieves a resource from the server. The resource is identified by a URL.
POST: Creates a new resource on the server. The resource is identified by a URL that is generated by the server.
PUT: Updates an existing resource on the server. The resource is identified by a URL.
DELETE: Deletes a resource from the server. The resource is identified by a URL.
In addition to these four basic HTTP methods, there are also other HTTP methods that can be used in RESTful web services, such as HEAD, OPTIONS, and PATCH. These methods allow clients to retrieve metadata about a resource, determine the available methods for a resource, and partially update a resource, respectively.

What is the difference between a POST request and a PUT request?
In RESTful web services, both POST and PUT requests are used to create or update resources on the server. However, there are some key differences between the two:

Purpose: The purpose of a POST request is to create a new resource on the server, while the purpose of a PUT request is to update an existing resource or create a new resource if it doesn’t already exist.
Idempotency: A POST request is not idempotent, which means that if the same request is sent multiple times, it will create multiple resources on the server. On the other hand, a PUT request is idempotent, which means that if the same request is sent multiple times, it will update the same resource on the server each time.
Payload: In a POST request, the payload contains the data that will be used to create the new resource on the server. In a PUT request, the payload contains the updated data for the existing resource or the data for the new resource that will be created if it doesn’t already exist.
Idempotent operations: In addition to updating resources, PUT requests can also be used for other idempotent operations, such as deleting a resource or creating a resource with a specific ID.
In summary, POST requests are used to create new resources on the server, while PUT requests are used to update or create resources on the server. PUT requests are idempotent, meaning that they can be sent multiple times without causing unintended side effects.

What is a resource in REST?
In REST (Representational State Transfer) architecture, a resource is a data entity that can be accessed and manipulated using HTTP methods such as GET, POST, PUT, and DELETE. A resource is typically represented by a URI (Uniform Resource Identifier), which is used to uniquely identify the resource.

A resource can be any type of data entity that can be represented in a structured format, such as a document, an image, a video, a user profile, or a collection of data. The representation of a resource is typically in a standardized format such as XML or JSON, and the representation can be modified or updated using the HTTP methods.

What is the difference between a URI and a URL?
URI (Uniform Resource Identifier) and URL (Uniform Resource Locator) are related terms that are often used interchangeably, but they have different meanings.

A URI is a string of characters that identifies a resource, while a URL is a type of URI that specifies the network location of a resource and how to access it. In other words, a URL is a type of URI that provides the complete address of a resource, including the protocol to be used to access it.

For example, “https://www.example.com/index.html” is a URL, but “https://www.example.com” is a URI that doesn’t specify a specific resource.

Another difference is that a URI can be used to identify any type of resource, not just those that are accessed over the web. For example, a URI can be used to identify a file on a local file system, while a URL can only identify resources that are accessible over a network.

What is the difference between a query parameter and a path parameter?
In RESTful web services, both query parameters and path parameters are used to pass information to the server. However, they are used in different ways and for different purposes.

A path parameter is a parameter that is included as part of the path in a URI. It is used to identify a specific resource or sub-resource. For example, in the URI “/users/{id}”, the “id” parameter is a path parameter that identifies a specific user resource. Path parameters are typically used to retrieve or modify specific resources.

A query parameter is a parameter that is included as part of the query string in a URI. It is used to filter, sort, or search for resources. For example, in the URI “/users?gender=female&sort_by=name”, the “gender” and “sort_by” parameters are query parameters that filter the results by gender and sort the results by name, respectively. Query parameters are typically used to retrieve a set of resources that meet certain criteria.

What is JSON?
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, Java, JavaScript, Perl, Python, and many others. JSON is often used to transmit data between a server and a web application, as an alternative to XML. It is a key format used in web services and APIs, particularly RESTful APIs.

What is XML?
XML (Extensible Markup Language) is a markup language used for representing structured data in a human-readable and machine-readable format. It is a flexible and extensible language that allows developers to define their own tags and attributes, making it suitable for a wide range of applications.

XML consists of a set of rules for encoding documents in a format that is both human-readable and machine-readable. It is designed to be self-describing, meaning that the structure of the document is defined within the document itself.

How can you authenticate a client in a RESTful web service?
Authentication in a RESTful web service can be achieved using various methods, such as:

Basic Authentication: This method involves sending the username and password in the HTTP request headers. The server checks the validity of the credentials and sends a response indicating success or failure.
Token-Based Authentication: In this method, the client sends a token, usually a JSON Web Token (JWT), in the HTTP headers or request body. The server verifies the token and sends a response indicating success or failure.
OAuth2 Authentication: This is a widely-used standard for authentication and authorization. It involves obtaining an access token from a third-party service, which is then used to authenticate the client with the RESTful service.
API Keys: This method involves generating a unique API key for each client, which is then used to authenticate requests. The server checks the validity of the API key and sends a response indicating success or failure.
The choice of authentication method depends on the specific requirements of the application and the level of security needed.

What is CORS and why is it important for RESTful web services?
CORS (Cross-Origin Resource Sharing) is a mechanism that allows web applications to make cross-origin requests, that is, requests to a different domain than the one from which the application is served. In the context of RESTful web services, CORS is important because it enables clients to access resources from a different domain than the one hosting the RESTful API.

By default, web browsers enforce the same-origin policy, which restricts web pages from making requests to a different domain than the one hosting the page. This policy prevents malicious scripts from accessing sensitive information across domains, but it also limits the ability of legitimate applications to access resources from different domains.

What is HATEOAS and why is it important for RESTful web services?
HATEOAS (Hypermedia as the Engine of Application State) is a constraint of the REST architectural style that requires that a client of a RESTful web service be able to navigate the available resources dynamically by following links provided in the responses.

In other words, a HATEOAS-compliant API provides hypermedia links (such as URLs) within its responses, which allow the client to discover and interact with available resources in a flexible and adaptable way. The client does not need to have prior knowledge of the API’s structure or the endpoints to access its functionality.

HATEOAS is important for RESTful web services because it makes the API more flexible, resilient, and evolvable. With HATEOAS, the API can evolve over time without breaking the clients that rely on it, as clients can dynamically discover the available resources and adapt to any changes made to the API. Additionally, HATEOAS promotes loose coupling between the client and server, allowing the server to evolve independently of the client.

What is the difference between versioning a REST API through the URL and through headers?
Versioning a REST API through the URL and through headers are two common methods used to manage changes to an API.

URL-based versioning involves incorporating the version number into the API endpoint URL, for example, https://api.example.com/v1/resource. In this approach, the version number is explicitly part of the URL and is visible to both clients and servers. Clients can use different URL versions to access different versions of the API, and servers can handle each version separately.

Header-based versioning, on the other hand, involves using a custom header to indicate the API version in the HTTP request or response, for example, X-API-Version: 1. This approach allows for a more clean and more concise URL without the version number. However, clients and servers must agree on the header to use, and it may be less visible to developers who are unfamiliar with the API.

In general, URL-based versioning is more commonly used, as it is more explicit and easier to understand. It also allows for better caching of responses, as different versions of the API can be cached separately. Header-based versioning is more useful for cases where the URL structure must be preserved or where the API may be accessed through multiple channels (such as a mobile app and a web app) that require different versions. Ultimately, the choice of versioning method depends on the specific requirements of the API and the preferences of the developers implementing it.

What is content negotiation in RESTful web services?
Content negotiation is the process by which a client and server determine the best representation of a resource to be sent in a response, based on the capabilities of both parties. In RESTful web services, content negotiation is typically used to determine the format of the response, such as JSON or XML.

There are two main types of content negotiation:

Server-driven negotiation: In this approach, the server includes information in the response headers about the available representations of the resource, such as the content type and encoding. The client then selects the appropriate representation based on the information provided by the server.
Client-driven negotiation: In this approach, the client sends a request indicating the preferred representation of the resource, such as the Accept header in an HTTP request. The server then selects the appropriate representation based on the client’s preferences.
What are some common tools for testing REST APIs?
There are several tools available for testing REST APIs, including:

API testing using Postman
API testing using Postman
Postman: Postman is a popular tool used for testing REST APIs. It allows you to create and send HTTP requests, inspect the response, and test different scenarios.
SoapUI: SoapUI is a testing tool that can be used for testing both SOAP and REST APIs. It supports different authentication methods, custom headers, and complex scenarios.
Swagger UI: Swagger UI is an open-source tool that provides a visual interface for testing REST APIs. It allows you to explore the API’s endpoints, test different parameters and request bodies, and view the responses.
JMeter: JMeter is a load-testing tool that can also be used for testing REST APIs. It can simulate multiple users making requests to the API and measure the performance and response times.
Rest-Assured: Rest-Assured is a Java library that provides a simple and fluent API for testing REST APIs. It allows you to easily create and execute HTTP requests and validate the response.
Newman: Newman is a command-line tool that allows you to run Postman collections as part of your continuous integration and delivery pipeline.
These are just a few of the many tools available for testing REST APIs. The choice of tool depends on the specific requirements of the project and the preferences of the development team.

What is Swagger and how can it be used to document a REST API?
Swagger is an open-source framework for designing, building, and documenting REST APIs. It provides a set of tools and libraries that enable developers to create and publish interactive documentation for their APIs.

What is Swagger and how can it be used to document a REST API?
Swagger UI
Swagger can be used to document a REST API by following these steps:

Define the API endpoints and data models using the Swagger Specification, which is a JSON or YAML file that describes the API’s structure and behavior.
Use a Swagger tool or library to generate documentation from the Swagger Specification. This documentation typically includes information about the API endpoints, parameters, request and response formats, and authentication methods.
Publish the generated documentation on a web page or other platform, so that users can easily discover and understand the API’s capabilities.
What is the difference between a mock and a stub in testing a REST API?
In testing a REST API, a mock and a stub are two types of test doubles used to simulate parts of the system that the API depends on.

A mock is an object that mimics the behavior of a real object but does not have the same functionality. It can be used to test the interactions between the API and external services, databases, or other dependencies. A mock is typically used when the behavior of the external service is complex, unreliable, or difficult to reproduce in a test environment.

A stub, on the other hand, is an object that provides a simplified version of a real object, with a predefined set of responses to specific input values. It can be used to test the API’s handling of different responses from an external service or data source. A stub is typically used when the behavior of the external service is simple and predictable.

What is the difference between a unit test and an integration test for a REST API?
The main difference between unit tests and integration tests for a REST API is their scope and level of abstraction. Unit tests focus on testing individual units of code in isolation, while integration tests focus on testing the interactions between different components of the system. Both types of tests are important for ensuring the quality and reliability of a REST API and should be used together as part of a comprehensive testing strategy.

What is the difference between JSON and XML in RESTful web services?
JSON (JavaScript Object Notation) and XML (Extensible Markup Language) are two commonly used data formats in RESTful web services for representing and transmitting data between the client and the server.

The main differences between JSON and XML in RESTful web services are:

Syntax: JSON is based on a syntax that is derived from the JavaScript programming language, while XML uses a tag-based syntax that is similar to HTML.
Readability: JSON is considered to be more readable and compact than XML, as it uses less verbose syntax and has a simpler structure.
Parsing: JSON can be parsed more quickly and efficiently than XML, as it requires less code and processing power to read and parse.
Support: JSON is widely supported by modern web browsers and programming languages, while XML is still used in some legacy systems and industries.
Tooling: JSON has a larger and more mature ecosystem of tools and libraries for working with data, while XML has a more limited set of tools and is often considered more difficult to work with.
What is the difference between stateless and stateful RESTful web services?
Stateless and stateful are two different types of RESTful web services based on how they handle client-server interactions.

In a stateless RESTful web service, the server does not store any client context between requests. Each request from the client contains all the information needed to complete the request, and the server responds with a complete representation of the requested resource. The server does not retain any information about the previous requests made by the client. As a result, stateless services are highly scalable and can handle a large number of requests, as there is no need to maintain any state information between requests.

In contrast, a stateful RESTful web service maintains client context between requests. This means that the server retains information about the client’s previous requests and uses that information to respond to subsequent requests. Stateful services typically require the use of session tokens or cookies to maintain the client context. While stateful services can offer more personalized and customized interactions with the client, they can also be less scalable and require more resources to maintain the client’s state information.

In summary, the main difference between stateless and stateful RESTful web services is in how they handle client context between requests. Stateless services are highly scalable but offer limited personalization, while stateful services can offer more personalization but may be less scalable and require more resources to maintain the client context. The choice between stateless and stateful services will depend on the specific requirements of the application and the trade-offs between scalability, personalization, and resource usage.

Read the Complete Article on stateless and stateful RESTful

What is a cache in RESTful web services?
A cache in RESTful web services is a temporary storage mechanism used to improve the performance and efficiency of client-server interactions. A cache stores copies of frequently accessed or recently accessed data on the client or on intermediate servers, such as proxy servers or content delivery networks (CDNs). When a client requests a resource that is already in the cache, the server can return the cached copy instead of generating a new response, which can significantly reduce the response time and network bandwidth usage.

Caching in RESTful web services can be implemented using various mechanisms, including:

Browser caching: Web browsers can cache responses from the server, such as images, CSS, and JavaScript files, to reduce the need for repeated requests.
Server-side caching: The server can cache frequently accessed resources in memory or on disk to reduce the response time for subsequent requests.
Proxy caching: Proxy servers can cache responses from the server and serve them to clients on subsequent requests, reducing the number of requests that need to be sent to the server.
CDN caching: Content delivery networks can cache responses from the server across multiple geographically distributed servers, reducing the latency and network bandwidth usage for clients in different regions.
Caching in RESTful web services can greatly improve the performance and scalability of the system by reducing the load on the server and the network. However, caching must be carefully designed and configured to ensure that cached responses are always up-to-date and consistent with the current state of the resource and that sensitive or private data is not cached.

What is the difference between an ETag and a Last-Modified header?
The main difference between the Last-Modified header and the ETag is that Last-Modified uses the modification timestamp of the resource, while ETag uses a unique identifier assigned by the server. ETag is more flexible than Last-Modified because it can be based on multiple factors and does not depend on the accuracy of the modification timestamp. However, ETag can be more resource-intensive to compute than Last-Modified. Additionally, Last-Modified is supported by all web servers, while ETag is optional and may not be supported by some servers.

What is the difference between a synchronous and asynchronous REST API call?
A synchronous REST API call is one where the client waits for the server to process the request and return a response before continuing with its processing. In a synchronous call, the client sends a request to the server, waits for the server to process the request, and then receives the response. During this time, the client is blocked and cannot perform other tasks. Synchronous calls are simpler to implement and understand, but they can result in long wait times for the client if the server is slow or the response is large.

An asynchronous REST API call is one where the client sends a request to the server and continues with its processing without waiting for the response. The server processes the request and sends a response to the client at a later time, typically through a callback or a notification mechanism. In an asynchronous call, the client can perform other tasks while waiting for the server to respond. Asynchronous calls are more complex to implement and understand, but they can provide better performance and scalability for long-running or resource-intensive requests.

What is a callback in RESTful web services?
In RESTful web services, a callback is a function or method that is called by the server in response to a client request. The callback is typically used in asynchronous or long-polling requests where the client needs to wait for the server to respond with updated information.

For example, consider a web application that displays real-time stock prices. The client may send a request to the server to retrieve the latest stock prices and then wait for the server to respond with updated prices when they become available. The server can use a callback mechanism to notify the client when the prices have changed, allowing the client to update its display.

What is a Promise in RESTful Web services?
In RESTful web services, a Promise is a programming concept used to handle asynchronous requests and responses. A Promise represents a future value that may or may not be available at some point in the future.

In the context of RESTful web services, a Promise can be used to manage asynchronous API calls. When a client sends a request to a server, the server may not immediately respond with the requested data. The server may need to perform some processing or fetch the data from a remote source. In this case, the server can return a Promise to the client, which represents the future availability of the requested data.

The client can then use Promise to handle the asynchronous response. The client can attach handlers to the Promise to be executed when the data is available or when an error occurs. When the data is available, the Promise is resolved, and the client can access the data. If an error occurs, the Promise is rejected, and the client can handle the error.

Promises are often used in combination with other asynchronous techniques, such as callbacks or async/await functions. Promises can provide a simpler and more consistent way of handling asynchronous operations in RESTful web services, allowing developers to write cleaner and more maintainable code.

What is pagination in RESTful web services?
Pagination is a technique used in RESTful web services to manage large amounts of data returned by an API. When an API returns a large number of resources, it can be difficult and inefficient to return all the resources in a single response. Pagination breaks the results into smaller, more manageable pieces, or pages, which can be retrieved by the client as needed.

Pagination typically involves two parameters: limit and offset. The limit parameter specifies the maximum number of resources to return in a single response, while the offset parameter specifies the starting index of the resources to return. For example, a request with limit=10 and offset=20 would return the 10 resources starting from the 21st resource in the list.

What is a filter in RESTful web services?
In RESTful web services, a filter is a parameter used to refine the results returned by an API. Filters allow clients to specify criteria for selecting a subset of the resources available from the API. This can be useful when working with large datasets or when the client is only interested in a specific subset of the data.

Filters are typically specified using query parameters, which are appended to the end of the API endpoint URL. For example, a request to retrieve a list of products from an e-commerce API might include a filter to only return products with a price less than $50, as follows:

GET /api/products?price_max=50
The price_max parameter is a filter that tells the API to only return products with a price less than or equal to 50.

What is the difference between a 200 and 201 HTTP status code?
A 200 status code indicates that the request has succeeded and that the server has returned the requested data in the response body. This is typically used for GET, PUT, and DELETE requests, where the server is returning data to the client.

On the other hand, a 201 status code indicates that the request has been successfully fulfilled and that a new resource has been created as a result. This is typically used for POST requests, where the server is creating a new resource based on the data provided by the client.

What is the difference between 401 and 403 HTTP status codes?
A 401 status code indicates that the client is not authorized to access the resource, typically because the client has not provided valid authentication credentials. This is used when the server requires authentication but the client has not provided the necessary credentials or the provided credentials are invalid.

On the other hand, a 403 status code indicates that the client is authenticated, but does not have permission to access the resource. This is typically used when the server has determined that the client does not have the necessary permissions to access the requested resource, even though the client is authenticated.

What is the difference between a 404 and 410 HTTP status codes?
A 404 status code indicates that the requested resource is not found and that the server was unable to locate it. This is typically used when the server is unable to locate the resource and is not sure if it has been permanently removed or if it is temporarily unavailable.

On the other hand, a 410 status code indicates that the requested resource is gone and that the server knows that it has been permanently removed. This is typically used when the server has determined that the requested resource no longer exists and has been removed permanently.

What is the difference between a 500 and 503 HTTP status code?
A 500 status code indicates that there was an internal server error and that the server was unable to process the request. This is typically used when an unexpected condition occurs on the server, such as a programming error or a database error.

On the other hand, a 503 status code indicates that the server is temporarily unavailable and cannot process the request. This is typically used when the server is overloaded, undergoing maintenance, or experiencing a temporary outage.

What is the difference between a GET and a POST request?
A GET request is used to retrieve data from a server. When a client sends a GET request to a server, the server retrieves the data specified in the request and sends it back to the client in response. GET requests are typically used for retrieving information and are considered safe, meaning that they do not modify any data on the server.

A POST request is used to submit data to a server. When a client sends a POST request to a server, the server processes the data specified in the request and either store it or sends a response indicating that the data was successfully processed. POST requests are typically used for creating or updating data on the server.

What is the difference between a PUT and a PATCH request?
A PUT request is used to update an entire resource on the server. When a client sends a PUT request to a server, the server replaces the entire resource specified in the request with the new resource provided by the client. PUT requests are idempotent, meaning that sending the same request multiple times will have the same effect as sending it once.

A PATCH request, on the other hand, is used to update a part of a resource on the server. When a client sends a PATCH request to a server, the server applies the changes specified in the request to the resource and updates it accordingly. PATCH requests are not idempotent, meaning that sending the same request multiple times can have different effects each time.

What is the difference between a HEAD and an OPTIONS request?
A HEAD request is used to retrieve the header information for a resource, without actually retrieving the resource itself. When a client sends a HEAD request to a server, the server sends back only the header information for the requested resource, without sending the actual content of the resource. HEAD requests are useful for checking the status of a resource, without actually downloading it.

An OPTIONS request, on the other hand, is used to retrieve information about the available methods that can be used to access a resource on the server. When a client sends an OPTIONS request to a server, the server sends back a list of the available HTTP methods that can be used to access the requested resource. This is useful when the client needs to know which methods are supported by the server.

What is the difference between a 301 and 302 HTTP status code?
A 301 status code is used to indicate that the requested resource has permanently moved to a new URL. When a client sends a request to a URL that returns a 301 status code, the client is automatically redirected to the new URL specified in the response. This is useful when a resource has moved to a new location permanently.

A 302 status code, on the other hand, is used to indicate that the requested resource has temporarily moved to a new URL. When a client sends a request to a URL that returns a 302 status code, the client is automatically redirected to the new URL specified in the response, but the original URL is expected to be available again in the future. This is useful when a resource is temporarily unavailable at its original location.

What is the difference between a 304 and 307 HTTP status code?
A 304 status code is used to indicate that the requested resource has not been modified since the last time it was requested by the client, and that the client should use the cached version of the resource instead of requesting it again from the server. This is useful for improving performance and reducing network traffic, especially for frequently accessed resources.

A 307 status code, on the other hand, is similar to a 302 status code in that it indicates a temporary redirect to a new URL. However, unlike a 302 status code, a 307 status code requires the client to repeat the request using the new URL specified in the response, without changing the HTTP method. This is useful when a resource is temporarily unavailable at its original location and the client should continue to use the original HTTP method for the redirected request.

What is the difference between a 405 and 406 HTTP status code?
A 405 status code is used to indicate that the requested method (such as GET, POST, PUT, or DELETE) is not allowed for the requested resource. For example, if a client tries to modify a read-only resource using a PUT request, the server may respond with a 405 status code to indicate that the PUT method is not allowed for that resource.

A 406 status code, on the other hand, is used to indicate that the requested response format (such as JSON, XML, HTML) is not available or not acceptable to the server. This occurs when the client requests a certain response format through the Accept header, but the server cannot provide that format, or the server does not support the requested format.

What is the difference between 422 and 429 HTTP status codes?
A 422 status code is used to indicate that the server understands the request made by the client, but the request was unable to be processed due to semantic errors in the request data. For example, if a client sends a request to create a new resource but omits a required field, the server may respond with a 422 status code to indicate that the request is invalid due to missing required data.

A 429 status code, on the other hand, is used to indicate that the server has received too many requests from the client in a given amount of time. This is also known as rate limiting, and it is used to prevent clients from overwhelming the server with too many requests. When a server responds with a 429 status code, it typically includes a Retry-After header that indicates how long the client should wait before sending additional requests.

What is the difference between a 500 and 502 HTTP status code?
A 500 status code is a generic server error response, indicating that something has gone wrong on the server side and the server was unable to complete the request made by the client. It is a catch-all status code that can be returned in a variety of situations, including if there is an error in the server-side application code, database connection errors, or other internal server errors.

A 502 status code, on the other hand, specifically indicates that the server acting as a gateway or proxy received an invalid response from an upstream server. This usually means that the server acting as a gateway or proxy received a response from an upstream server that it was unable to process, or the upstream server was unavailable. A 502 status code is often seen in situations where a client is trying to access a website that is hosted on a load-

What is the difference between a microservice and a monolithic architecture?
Microservices and monolithic architectures are two different ways of designing and building software systems. In a monolithic architecture, the entire system is built as a single, self-contained unit, while in a microservices architecture, the system is divided into smaller, independent services that communicate with each other.

In a monolithic architecture, all the components of the system are tightly coupled, meaning that they are all part of the same codebase and deployed together. Changes to one component often require rebuilding and redeploying the entire system, which can be time-consuming and error-prone. Monolithic architectures are often associated with traditional enterprise software systems, where the focus is on stability and reliability rather than agility and scalability.

On the other hand, microservices architectures are designed to be more flexible and scalable. The system is divided into smaller, independent services that communicate with each other using lightweight protocols such as RESTful APIs or message queues. Each microservice can be developed, tested, and deployed independently, which allows for greater agility and faster time-to-market. Additionally, the use of smaller, more focused services can lead to better fault isolation, easier scaling, and improved overall system resilience.

What is the difference between a RESTful web service and a GraphQL API?
RESTful web services are built around the idea of resources and their representation through HTTP verbs. A RESTful API defines a set of URLs that represent resources, and clients can interact with these resources by sending HTTP requests, such as GET, POST, PUT, and DELETE. The server returns responses in a predefined format, usually JSON or XML, that includes the requested data and metadata such as status codes, headers, and links.

GraphQL, on the other hand, is a query language for APIs that allows clients to specify the data they need and the shape of the response. With GraphQL, clients send a single query that specifies the data they want, and the server responds with a JSON object that matches the shape of the query. This means that clients can get exactly the data they need with a single request, without over-fetching or under-fetching data.

One of the main advantages of GraphQL is that it provides a flexible and efficient way to query complex data structures with nested relationships. Instead of making multiple requests to different endpoints, clients can retrieve all the necessary data with a single GraphQL query. Additionally, GraphQL enables clients to introspect the schema and discover available data and relationships, which can simplify API development and documentation.

What is OAuth and how can it be used in a RESTful web service?
OAuth (Open Authorization) is a standard protocol used for secure authorization and authentication of user access to web and mobile applications. It allows a user to grant a third-party application access to their resources, without the need for sharing their login credentials.

In a RESTful web service, OAuth can be used to provide secure access to protected resources. The basic flow of OAuth involves the following steps:

The user requests access to a protected resource from the client application.
The client application redirects the user to the authorization server to authenticate.
The authorization server authenticates the user and provides an access token to the client application.
The client application uses the access token to request the protected resource from the resource server.
The resource server validates the access token and provides the protected resource to the client application.
What is JWT and how can it be used for authentication in a RESTful web service?
JWT stands for JSON Web Token, which is a type of token-based authentication that can be used in RESTful web services. It is a compact, URL-safe means of representing claims to be transferred between two parties, and is designed to be self-contained and verifiable.

When a user logs in to a RESTful web service, the server generates a JWT containing some user information, such as the user ID and an expiration time. This JWT is then returned to the client, which can store it in local storage or a cookie. Subsequent requests from the client can include the JWT in the Authorization header of the request, and the server can then verify the JWT to authenticate the user.

The advantage of using JWT for authentication in a RESTful web service is that it allows for stateless authentication, which means that the server does not need to keep track of the user’s session. This can be particularly useful in a distributed system where multiple servers may be involved in handling requests from a client. Additionally, JWTs can be signed and encrypted, which provides an additional layer of security.

What is OpenAPI and how can it be used to document a REST API?
OpenAPI, formerly known as Swagger, is an open-source toolset for building and documenting RESTful APIs. It provides a specification for describing the structure and functionality of APIs in a machine-readable format. This specification can be used to generate documentation, client SDKs, and server stubs in various programming languages.

OpenAPI is based on a JSON or YAML document that describes the API’s endpoints, operations, parameters, responses, and other details. The specification supports a wide range of features, including security schemes, data models, and API versioning.

To use OpenAPI to document a REST API, developers can write an OpenAPI specification file that describes the API’s endpoints and other details. They can then use tools like Swagger UI or Redoc to generate interactive API documentation based on the specification.

What is Postman and how can it be used to test a REST API?
Postman is a popular collaboration platform for API development that provides tools for designing, testing, and documenting APIs. It is also a tool for testing RESTful web services by sending HTTP requests to the server and displaying the response.

With Postman, you can create and send HTTP requests for various RESTful web services, including GET, POST, PUT, DELETE, and more. You can also add headers, query parameters, and body content to the request. Postman also provides a testing framework to validate the response.

Some of the features of Postman include:

Collection: A collection is a group of requests that can be saved and shared with others.
Environment: An environment is a set of variables that can be used to store values like URLs, API keys, and other settings.
Mock Server: Postman also allows you to create mock servers that simulate the behavior of a real server.
Automated Testing: Postman also provides the ability to create automated tests that can be run on a regular basis to ensure that the API is working correctly.
Postman can be used to test both RESTful and SOAP web services. It provides an easy-to-use interface that allows you to quickly test and validate your APIs, making it a popular tool among developers and testers.

Can I create REST API with XML as a Response?
Yes, you can create a REST API that returns XML as a response. REST is an architectural style that uses HTTP as the application protocol for data communication between the client and server. It is protocol-agnostic, meaning it can use any protocol to transfer data, including XML.

To create a REST API that returns XML, you would need to design the API endpoints and their respective HTTP methods (GET, POST, PUT, DELETE, etc.). You would also need to define the structure of the XML response that your API would return for each endpoint.

here is an example of how to create a simple REST API using Node.js and return an XML response using the built-in xml2js module:

const express = require('express');
const xml2js = require('xml2js');
const app = express();
const parser = new xml2js.Parser();
// Define API endpoint
app.get('/example', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
  };
  // Convert data to XML
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(data);
  // Set response headers
  res.set('Content-Type', 'application/xml');
  res.set('Cache-Control', 'no-cache');
  // Send XML response
  res.send(xml);
});
// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
Can we make the Restful web service stateful?
It is possible to create a RESTful web service that is stateful, but it goes against the principles of REST and is not recommended.

Stateful web services maintain state information between requests, which can include session data or other forms of data that persists across multiple requests. This approach is common in traditional client-server architectures where the server maintains the session state information for each client.

If you need to maintain state information in a RESTful web service, you can consider using tokens or cookies to identify the client session and store the session data on the client side. However, this approach still violates the statelessness constraint of RESTful web services.

const express = require('express');
const session = require('express-session');
const app = express();
// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Change to true in production
}));
// Define API endpoint for login
app.post('/login', (req, res) => {
  // Check if username and password are valid
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'user' && password === 'password') {
    // Store user session data in the session object
    req.session.user = { username: 'user', isLoggedIn: true };
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});
// Define API endpoint for authenticated requests
app.get('/data', (req, res) => {
  // Check if user is logged in
  if (!req.session.user || !req.session.user.isLoggedIn) {
    return res.status(401).send('Access denied. Please login.');
  }
  // Retrieve data for the user from the database
  const data = { name: 'John Doe', age: 30, occupation: 'Software Engineer' };
  res.send(data);
});
// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
Is it fine to return HTML as a response from Rest API?
While it is technically possible to return HTML as a response from a REST API, it is generally not recommended.

REST APIs are typically designed to be consumed by client applications, such as web or mobile applications, that expect data to be returned in a structured format, such as JSON or XML. By returning HTML as a response, you are breaking the separation of concerns between the client and server, as the server is now responsible for generating HTML markup instead of just returning data.

In addition, returning HTML as a response can make it difficult to maintain and version the API, as changes to the HTML markup may break client applications that are consuming the API. This can make it challenging to evolve the API over time without causing disruptions to existing clients.

Can delete rest api have a body?
Yes, a DELETE request in a REST API can have a body, but it’s not common practice and it’s not recommended. According to the HTTP/1.1 specification, the body of a DELETE request has no defined semantics, which means that servers are not required to process it.

In general, a DELETE request is used to delete a resource identified by a URL, so the URL itself should provide all the necessary information to perform the deletion. Including a body in a DELETE request can make the request unnecessarily complex and may cause issues with proxies or firewalls that are not expecting a body in a DELETE request.

If you need to pass additional information to the server when performing a DELETE operation, it’s better to use query parameters or headers instead of including a body in the request.

const axios = require('axios');
axios.delete('http://example.com/api/resource', {
  data: {
    id: 1234,
    reason: 'no longer needed'
  }
})
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    console.error(error);
  });
Can Rest API return redirect?
Yes, a REST API can return a redirect response, but it’s not common practice and it’s not recommended. REST APIs are typically designed to be stateless, meaning that each request from the client should contain all the necessary information to complete the request.

A redirect response, on the other hand, indicates that the requested resource has moved to a new location, and the client should make a new request to that location. This can introduce unnecessary statefulness and complexity to the API and may make it difficult to maintain a clear separation of concerns between the client and server.

const express = require('express');
const app = express();
app.get('/old-resource', (req, res) => {
  res.redirect(301, '/new-resource');
});
app.get('/new-resource', (req, res) => {
  res.send('This is the new resource');
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
Why is REST web service always stateless?
REST (Representational State Transfer) is an architectural style for building web services that use a client-server model and relies on a set of standard HTTP methods (GET, POST, PUT, DELETE, etc.) to perform CRUD (Create, Read, Update, Delete) operations on resources.

One of the key principles of REST is statelessness, which means that each request from a client to the server must contain all the information necessary to complete the request, and the server should not store any client context between requests. This means that each request should be treated as an independent transaction, and the server should not rely on any information from previous requests to process the current request.

There are several reasons why REST web services are designed to be stateless:

Scalability: By not storing any client context on the server, REST services can easily scale horizontally by adding more servers to handle the increased load.
Simplicity: Stateless services are simpler to design, implement, and test, as they don’t have to manage and synchronize the state between multiple requests.
Cacheability: Stateless services are cacheable, which means that intermediate servers (such as proxies and gateways) can cache responses and serve them directly to clients, improving performance and reducing network traffic.
Reliability: Statelessness makes REST services more reliable, as there is no chance of the server state becoming corrupted due to unexpected errors or crashes.
Overall, statelessness is a fundamental principle of REST that enables the design of scalable, reliable, and cacheable web services that can be easily understood and implemented by developers.

API расшифровывается как интерфейс прикладного программирования. Он служит шлюзом для доступа приложений к некоторым ресурсам из других приложений. Преимущество использования API заключается в предоставлении доступа сторонним приложениям, чтобы они не могли получить доступ ко всем данным вашего приложения. Они могут получить доступ только к тем данным, которые вы раскрываете через свой API. Приложение или пользователь, который хочет получить доступ к данным, называется клиентом, а приложение, которое обслуживает данные, – сервером. Сегодня API широко используются в любой архитектуре программного обеспечения. Если вы претендуете на должность front-end-, back-end-, full-stack- или сетевого инженера, то вам будут задавать много вопросов, касающихся API. Учитывая это, давайте рассмотрим некоторые из наиболее часто задаваемых на собеседованиях вопросов о REST API.

Содержание  скрыть 
1 Что такое REST?
2 Каковы основные характеристики REST?
3 Что такое ресурсы в архитектуре REST?
4 Укажите некоторые преимущества и недостатки REST API.
5 Определите шаблон REST.
6 Что такое RESTful?
7 Что такое RESTful Web Services?
8 Как тестировать RESTful веб-сервисы?
9 Укажите некоторые особенности RESTful Web Services.
10 Определите классы корневых ресурсов RESTful.
11 Что такое URI?
12 Что такое безграмотность в REST?
13 Что такое JAX-RS?
14 Что такое ключевые аннотации в API JAX-RS?
15 Каковы некоторые ключевые особенности APIJAX-RS?
16 Как можно настроить приложения JAX-RS?
17 Что такое JAX-WS и JAX-RS?
18 Что такое коды состояния HTTP?
19 Что такое методы HTTP?
20 Как работает базовая аутентификация HTTP?
21 Каковы основные компоненты HTTP-запроса?
22 Каковы основные компоненты HTTP-ответов?
23 В чем разница между REST и AJAX?
24 В чем разница между SOAP и REST?
25 В чем разница между PUT и POST?
26 Что такое полезная нагрузка?
27 Какой максимальный размер полезной нагрузки может быть отправлен в почтовых методах?
28 Какие лучшие практики необходимо соблюдать при создании URI?
29 Что такое идемпотентные методы?
30 Что такое Postman?
31 Что такое заголовки Cache-Control?
32 Определение обмена сообщениями в RESTful Web Services.
33 В чем разница между монолитной, SOA и микросервисной архитектурой?
34 Как работает микросервисная архитектура?
35 Что такое CRUD?
36 Что такое кэширование?
37 В чем польза @RequestMapping?
38 Что делает @PathVariable?
39 Определите HttpMessageConverter.
40 Какие инструменты необходимы для тестирования веб-интерфейса?
40.1 Заключительные слова
Что такое REST?
Ответ: REST – это архитектурный дизайн, который определяет некоторые ограничения на работу API. API, которые следуют принципам REST, известны как RESTful API. REST расшифровывается как Representational State Transfer. Это не протокол или стандарт, а архитектура, которая может быть использована для реализации API различными способами. Она предоставляет разработчикам высокую гибкость и свободу, поэтому широко используется для разработки API. Вот некоторые принципы архитектуры REST:

Разделение клиента и сервера: В RESTful API клиент не должен влиять на сервер никаким другим образом, кроме как запрашивая данные через URI (Uniform Resource Identifier). Точно так же сервер не должен каким-либо образом изменять содержимое клиента.
Безгражданство: Когда выполняются два отдельных запроса, они не знают друг о друге. Другими словами, запросы не имеют состояния и не поддерживают его. Если запрос выполнен, он просто завершается. Каждый запрос изолирован от других запросов.
Многоуровневая архитектура: Клиент или сервер не знают, куда направляется запрос – непосредственно к источнику или к приложению-посреднику. Их интересует только ответ на запрос.
Кэширование: данные или ответы могут кэшироваться как на стороне клиента, так и на стороне сервера для повышения производительности и масштабируемости. Если к определенному ресурсу часто поступают запросы, то ответ на этот запрос можно кэшировать и использовать при необходимости.
Каковы основные характеристики REST?
Ответ: Ключевыми характеристиками или особенностями REST являются:

Гибкость: Вы можете переехать с одного сервера на другой, и это ничего не изменит, потому что API будет отправлять тот же ответ на конкретный запрос. Кроме того, вы можете добавить столько конечных точек, сколько захотите, для разных типов данных.
Масштабируемость: Кэширование повышает масштабируемость за счет сохранения ответов для последующего использования. Оно снижает нагрузку на сервер, а также уменьшает задержки.
Авторизация: С помощью заголовка авторизации вы можете указать учетные данные, которые сервер может использовать для авторизации запроса.
Нестационарность: Это самая важная особенность REST, поскольку она не позволяет запросам знать, что происходит с другими запросами. Запросы изолированы и завершаются, как только они выполнены.
Что такое ресурсы в архитектуре REST?
Ответ: Ресурсы – это сущности, над которыми выполняются различные операции, такие как получение, обновление или удаление. Они являются основными строительными блоками архитектуры REST. Например, если вы рассматриваете интернет-магазин электронной коммерции, то товары, пользователи, а также метаданные считаются ресурсами, поскольку с ними можно работать. Ресурсы могут быть переданы другому приложению через API.

Укажите некоторые преимущества и недостатки REST API.
Ответ: Преимущества REST API заключаются в следующем:

Это просто осуществить.
С ресурсами можно легко справиться.
Он масштабируется благодаря архитектуре клиент-сервер.
Поддерживает несколько типов носителей для передачи данных, таких как XML и JSON.
Недостатки:

Вы не можете поддерживать состояние между запросами.
Истинный источник происхождения ресурса не может быть известен из-за многоуровневой архитектуры.
Не подходит для сложных запросов или запросов.
Определите шаблон REST.
Ответ: REST-шаблон – это утилита или клиент, с помощью которого вы можете получить доступ к REST API во фреймворке Spring. По сути, он скрывает шаблонный код, который необходимо написать, чтобы запросить ресурс у REST API.

Что такое RESTful?
Ответ: RESTful API или сервисы – это интерфейсы, реализующие архитектурный стиль REST(Representational State Transfer) и работающие по таким протоколам, как HTTP.

Что такое RESTful Web Services?
Ответ: Веб-сервисы RESTful созданы для наилучшей работы в Сети. Representational State Transfer (REST) – это архитектурный стиль, который определяет ограничения, такие как унифицированный интерфейс, многоуровневая архитектура и отсутствие статичности, если они применяются к веб-сервису, то вызывают желаемые свойства, такие как производительность и масштабируемость, которые позволяют сервисам лучше всего работать в Сети.

Как тестировать RESTful веб-сервисы?
Ответ: Чтобы протестировать RESTful веб-сервис, вы можете использовать REST-клиент, например Postman или Thunder Client, и запросить веб-сервис, который вы хотите протестировать. Затем, когда вы получите ответ, поймите его; это ключевая часть. Если вы хотите протестировать сложный API с большим количеством конечных точек, вам придется разделить тестирование на модульное тестирование, интеграционное тестирование, тестирование производительности и сквозное тестирование.

Укажите некоторые особенности RESTful Web Services.
Ответ: Некоторые из ключевых особенностей RESTful веб-сервисов:

Поддержка нескольких типов медиафайлов, таких как JSON и XML.
Масштабируемость
Изоляция клиента и сервера
Гибкость
Определите классы корневых ресурсов RESTful.
Ответ: Корневые классы ресурсов – это “простые старые объекты Java” (POJO), которые либо аннотированы @Path, либо имеют хотя бы один метод, аннотированный @Path или обозначением метода запроса, таким как @GET, @POST, @PUT или @DELETE.

Что такое URI?
Ответ: URI расшифровывается как Uniform Resource Identifier. Это последовательность символов, используемая для определения местоположения или идентификации ресурсов API или сервиса. Он использует имя или местоположение ресурса для его идентификации, но не полагается на определенный метод или технику.

Что такое безграмотность в REST?
Ответ: Statelessness – это ограничение, применяемое к API, при котором любые два запроса не могут знать, что происходит друг с другом. Другими словами, состояние запросов не поддерживается. Если запрос выполнен, он просто завершается после получения ответа.

Что такое JAX-RS?
Ответ: JAX-RS – это Java API, который позволяет разрабатывать приложения на Java, использующие архитектуру REST. Этот API упрощает разработку REST-приложений на Java.

Что такое ключевые аннотации в API JAX-RS?
Ответ: Аннотации в JAX-RS используются разработчиками для украшения Java-классов с целью определения ресурсов и методов, которые могут быть выполнены над этими ресурсами. К ключевым аннотациям API JAX-RS относятся:

@GET: Используется для выполнения GET-запросов в HTTP.
@POST: Используется для выполнения POST-запросов в HTTP.
@Path: Ссылается на относительный путь к классу Java.
@QueryParam: относится к параметрам запроса URI или URL.
Каковы некоторые ключевые особенности APIJAX-RS?
Ответ: Особенностями JAX-RS являются:

Кэширование на стороне клиента
Кэширование на стороне сервера
Настройка строки запроса
Аннотации времени выполнения
Как можно настроить приложения JAX-RS?
Ответ: Приложение JAX-RS состоит как минимум из одного класса ресурсов, упакованного в WAR-файл. Базовый URI, с которого ресурсы приложения отвечают на запросы, может быть задан одним из двух способов:

Использование аннотации @ApplicationPath в подклассе javax.ws.rs.core.Application, упакованном в WAR
Использование тега servlet-mapping в дескрипторе развертывания web.xml WAR
Что такое JAX-WS и JAX-RS?
Ответ: JAX-WS – это Jakarta XML Web Services API, используемый для разработки API с помощью Simple Object Access Protocol (SOAP) – протокола обмена сообщениями на основе XML. С другой стороны, JAX-RS – это Java API, используемый для создания веб-сервисов с использованием архитектуры REST.

Что такое коды состояния HTTP?
Ответ: Коды состояния – это не что иное, как способ передачи статуса ответа, отправленного сервером клиенту. Они присутствуют в заголовках ответа, отправляемых сервером. С помощью кодов состояния клиент может определить, был ли запрос неудачным или выполненным, или что-то не так с ответом. Вот некоторые распространенные коды состояния HTTP: –

200 – обозначает ключевое слово “OK”. Оно означает, что запрос был выполнен, и ответ пришел в порядке.
404 – расшифровывается как “Не найдено”. Это означает, что ресурс отсутствует на сервере или конечная точка не существует.
500 – расшифровывается как “Внутренняя ошибка сервера”. Обычно это происходит, когда сервер не может сгенерировать правильный ответ, или возникает ошибка, которая не является явной.
503 – расшифровывается как “Сервис недоступен”. Это означает, что в данный момент сервер не может обрабатывать запросы, возможно, потому что он мертв или не работает из-за перегрузки запросами. Это также может происходить, когда сервер находится на техническом обслуживании.
Что такое методы HTTP?
Ответ: Методы HTTP используются для выполнения определенного типа действий над конкретным ресурсом API. Например, если вы хотите получить список фильмов из API коллекции фильмов, то вы можете использовать метод GET, предоставляемый HTTP. Если вы хотите обновить данные, вы можете использовать метод POST, предоставляемый HTTP. Часто используемые методы HTTP следующие:

GET: Запросы, использующие GET, должны получать только данные.
POST: Обновляет ресурс, отправляя на сервер только что обновленный ресурс.
DELETE: удаляет указанный ресурс.
PATCH: Частично изменяет ресурс.
Как работает базовая аутентификация HTTP?
Ответ: Аутентификация – это процесс проверки подлинности клиента для обеспечения безопасности данных. В HTTP аутентификация работает через заголовок авторизации, который отправляется клиентом. Заголовок авторизации состоит из имени пользователя/идентификатора и пароля клиента, которые затем проверяются сервером, и доступ предоставляется. Важно отметить, что при использовании HTTP-аутентификации канал, по которому передаются учетные данные, должен быть зашифрован и защищен. Вы можете защитить канал с помощью уровня SSL, который интегрирован в HTTPS. Поэтому при работе с учетными данными рекомендуется использовать HTTPS, а не простой HTTP.

Каковы основные компоненты HTTP-запроса?
Ответ: HTTP-запрос состоит из следующих компонентов:

Строка запроса: Это первая строка в любом запросе, которая состоит из метода HTTP, пути или конечной точки и номера версии HTTP.
Заголовки: HTTP-заголовки используются для предоставления метаданных о запросе.
Тело (необязательно): Этот компонент присутствует только для некоторых методов запроса. Он не требуется для GET-запросов, но необходим для POST-запросов. Это фактическое сообщение запроса.
Каковы основные компоненты HTTP-ответов?
Ответ: HTTP-ответ состоит из следующих компонентов:

Статус: Он обозначает код состояния HTTP, который отправляется сервером.
Заголовки: Как и запросы, ответы также имеют соответствующие заголовки, которые предоставляют полезную информацию об ответе.
Сообщение: Это фактические данные, которые сервер отправляет клиенту для запроса определенного ресурса.
В чем разница между REST и AJAX?
Ответ: AJAX – это клиент, с помощью которого вы можете получить доступ к RESTful API. Он используется для отправки асинхронных запросов с помощью JavaScript. REST, или Representational State Transfer, – это архитектура, которая может быть реализована для создания RESTful API. Короче говоря, для отправки HTTP-запросов можно использовать AJAX, который служит в качестве клиента, но если вы хотите реализовать RESTful API, то вам необходимо использовать архитектуру REST.

В чем разница между SOAP и REST?
Ответ: Representational State Transfer, или REST, – это архитектура с минимальными ограничениями для создания API. SOAP, или Simple Object Access Protocol, – это протокол с жесткими требованиями для реализации API. REST более гибкий и простой в использовании, чем SOAP. В SOAP используется обмен сообщениями на основе XML, в то время как в REST можно использовать множество типов передачи данных, таких как JSON, XML и т. д. По сравнению с SOAP, REST более легкий и быстрый. Веб-сервисы SOAP имеют встроенную защиту, что является одним из преимуществ использования SOAP перед REST, но дополнительные функции также делают их сложными и тяжелыми в использовании.

В чем разница между PUT и POST?
Ответ: POST – это метод HTTP-запроса, который отправляет некоторые данные на сервер. Если вы сделаете несколько POST-запросов для определенного ресурса, то это может привести к побочным эффектам для ваших данных. Например, если вы хотите добавить статью в коллекцию, то при выполнении нескольких POST-запросов в коллекцию будет добавлено несколько статей, что приведет к появлению лишних статей. PUT – это метод HTTP-запроса, который отправляет данные на сервер для определенного ресурса, но обновляет их только один раз. Если вы отправите несколько PUT-запросов для определенного ресурса, никаких побочных эффектов не возникнет, а данные будут добавлены только один раз. При PUT, если ресурс не существует, создается новый, а если он существует, то обновляется существующий. PUT является идемпотентным, а POST – нет.

Что такое полезная нагрузка?
Ответ: Полезная нагрузка в REST API – это просто тело запроса, отправленного клиентом на сервер. Это данные, которые вы хотите отправить на сервер и получить ответ.

Какой максимальный размер полезной нагрузки может быть отправлен в почтовых методах?
Ответ: В самом протоколе HTTP нет ограничения по умолчанию. Лимит может зависеть от максимального лимита клиента или сервера, в зависимости от того, какой из них является минимальным.

Какие лучшие практики необходимо соблюдать при создании URI?
Ответ: Некоторые из ключевых моментов, которые необходимо учитывать при разработке URI, таковы:

Избегайте использования расширений файлов
Будьте последовательны во всех URI
Разделите URI на домены и поддомены для различных наборов ресурсов
Для разделения слов в предложениях, встроенных в URI, следует использовать дефис или знак подчеркивания.
Вы должны использовать прямую косую черту для обозначения иерархии ресурсов
Кодируйте URI с помощью правильной кодировки
Постарайтесь сделать URI человекочитаемым
Что такое идемпотентные методы?
Ответ: Идемпотентные HTTP-методы оказывают одинаковое воздействие на сервер, несмотря на отправку нескольких одинаковых запросов. Например, если вы отправите несколько одинаковых запросов DELETE для определенного ресурса, ресурс не будет изменяться при каждом запросе; он будет обновляться так, как будто был отправлен только один запрос. Некоторые из идемпотентных методов включают в себя:

PUT
DELETE
GET
HEAD
OPTIONS
Что такое Postman?
Ответ: Postman – это инструмент для разработки, модификации и тестирования API. Он предоставляет множество возможностей для быстрого создания и тестирования API без необходимости установки клиента.

Что такое заголовки Cache-Control?
Ответ: Заголовок Cache-Control состоит из инструкций или директив для настройки кэширования в браузерах и на серверах. Он указывает браузеру или серверу, что кэшировать и как долго это должно кэшироваться, прежде чем будет запрошено через сетевой запрос. Заголовок Cache-Control включает в себя следующие директивы:-.

max-age
no-cache
private
public
no-store
immutable
Определение обмена сообщениями в RESTful Web Services.
Ответ: Обмен сообщениями в веб-сервисах RESTful означает, что клиент отправляет HTTP-запрос на сервер, на который сервер отвечает HTTP-ответом. Это взаимодействие между клиентом и сервером называется обменом сообщениями.

В чем разница между монолитной, SOA и микросервисной архитектурой?
Ответ: В монолитной архитектуре все управляется в одном месте. Клиентская часть, сервер, а также база данных управляются из одного места. Поэтому она и называется монолитной, ведь слово “монолит” означает единый блок или камень. SOA расшифровывается как Service-Oriented Architecture. В этой архитектуре различные аспекты приложения управляются различными сервисами, которые также являются программным обеспечением. Таким образом, это комбинация нескольких сервисных программных модулей. Интеграция является ключевой частью этой архитектуры. Архитектура микросервисов похожа на SOA, но, в отличие от SOA, в ней есть несколько автономных программ, которые общаются друг с другом с помощью API. В отличие от монолитной архитектуры, здесь все автономно и, в некоторой степени, независимо.

Как работает микросервисная архитектура?
Ответ: В микросервисной архитектуре приложения делятся на более мелкие подразделения, которые независимы друг от друга и работают сами по себе, но взаимодействуют друг с другом через четко определенный набор API. К преимуществам архитектуры микросервисов относятся гибкость, гибкость, масштабируемость, независимые технологии, многократно используемые сервисы и простота развертывания.

Что такое CRUD?
Ответ: CRUD расшифровывается как Create, Read, Update, Delete. Это операции, которые могут быть выполнены над определенным ресурсом. API, поддерживающий все эти операции, называется CRUD API. Это самые основные операции, которые могут быть выполнены API над ресурсом.

Что такое кэширование?
Ответ: Кэширование – это техника хранения ответа или запроса на клиенте или сервере для последующего использования. Ответы обычно кэшируются на клиенте, потому что если клиент делает один и тот же запрос несколько раз за короткий промежуток времени, то нет смысла снова запрашивать ответ по сети и тратить пропускную способность.

В чем польза @RequestMapping?
Ответ: Это аннотация во фреймворке Spring, которая используется для сопоставления веб-запросов с определенными классами обработчиков и/или методами обработчиков.

Что делает @PathVariable?
Ответ: Аннотация @PathVariable в spring framework используется для извлечения значения переменных шаблона и присвоения их значения переменной метода.

Определите HttpMessageConverter.
Ответ: Когда HTTP-запрос (или его часть) нужно преобразовать в тип, необходимый в качестве аргумента для метода-обработчика, или когда значение, возвращаемое методом-обработчиком, нужно каким-то образом преобразовать для создания HTTP-ответа, используются конвертеры HTTP-сообщений.

Какие инструменты необходимы для тестирования веб-интерфейса?
Ответ: Ниже перечислены некоторые инструменты, которые могут помочь вам в тестировании API:

Postman
Rest Assured
Rest Sharp
Katalon
ReadyAPI
Apigee

Top 50 Most Important Rest API Interview Questions and Answers
 27 Feb 2025
 Question
 14.4K Views
 19 min read

Learn with an interactive course and practical hands-on labs
ASP.NET MVC with Web API Online Course - Learn & Certify
Rest API Interview Questions and Answers
Are you aware of APIs? An Application Programming Interface (API) is a set of rules used by two software programs to communicate with each other and exchange data. Now what are REST APIs? Why is there so much hype about it in the market? REST is not a protocol or a standard, it is an architectural style. REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures. They are the reason for the rise of cloud computing.

Whether you see your career as an engineer, product manager, data analyst, or customer success manager, you must have theoretical and practical knowledge of REST APIs. While going for the interview be prepared with the Rest API Interview Questions and Answers of this Web API tutorial.

Rest API Interview Questions and Answers for Freshers
1. What is meant by REST API?
REST, or Representational State Transfer, is a web service architecture that uses HTTP requests to send and access data from various sources.In a REST API, all data is treated as resources. A unique uniform resource identifier (URI) is associated with each resource to identify it. RESTful API is an interface that two computer systems use to exchange information securely over the internet.

There are some instructions that the RESTful web services must follow. These guidelines are necessary for the web services to be considered RESTful. These guidelines ensure that requests and resources are sent easily and efficiently between client and server using standardized HTTP methods.

What is meant by REST API?

2. What Is a RESTful Web Service?
RESTful web services are created by following the REST architecture design pattern, i.e. they are implemented using the HTTP protocol and its various methods. They provide means of accessing resources present at the server required for the client via the web browser by means of request headers, request body, response body, status codes, etc.

What Is a RESTful Web Service?

3. What is a REST Resource?
In REST, every accessible content piece on the server is called a resource. A resource is an object with a type, associated data, a relationship with other resources on the server, and a list of methods that can be used with it. They can either be represented as text files, HTML pages, images, or any other dynamic data.

A resource is identified with a URI. REST clients can access resources using HTTP requests to interact with the resource’s URI (uniform resource identifier).

4. What are the features of RESTful web services?
RESTful web services have the following features:

It works on the Client-Server model.
The service uses HTTP Protocol to fetch data/resources, query execution, or any other functions.
The client and server communicate through “Messaging”.
Resources are accessible to the service through URIs.
It follows the statelessness concept where the client's request and response are not dependent on others and thereby provides total assurance of getting the required data.
These services also use the concept of caching to minimize the server calls for the same type of repeated requests.
These services can also use SOAP services as implementation protocols for REST architectural patterns.
5. What do you understand by messaging in RESTful web services?
What do you understand by messaging in RESTful web services?

In REST API web services, messaging is communication between client and server. An interaction always starts with the client messaging the API with an HTTP request. The API processes this request. It then sends back an HTTP response that gives the status of the request and any resources the client asked for. The message consists of data and metadata about the message.

6. What is a URI?
URIs are Uniform Resource Identifiers. They are strings used in REST APIs to identify an API resource on the API server. Each resource has its own unique URI, which, when included in an HTTP request, allows clients to target that resource and perform actions on it. Addressing is the process of targeting a resource with its URI.

The format of a URI is

<protocol>://<service-name>/<ResourceType>/<ResourceID>

7. Which protocol do REST APIs use?
REST APIs use the HTTP protocol to communicate with clients. HTTP protocol is used to deliver web pages to client browsers.

8. What does the RESTful API client request contain?
RESTful APIs require requests to contain the following main components:

What does the RESTful API client request contain?

Unique resource identifier(URI): The server identifies each resource with unique resource identifiers. For REST services, the server typically performs resource identification by using a Uniform Resource Locator (URL). The URL specifies the path to the resource.
Method: We implement RESTful API using the Hypertext Transfer Protocol (HTTP). An HTTP method tells the server what it needs to do to the resource. The common HTTP methods are GET, POST, PUT, DELETE, etc.
HTTP Version: This part shows the version of the HTTP protocol you are using.
HTTP headers: Request headers are the metadata exchanged between the client and server.
Request Body: This contains the actual message content to be sent to the server.
9. What are HTTP status codes? List the common HTTP Response Codes.
HTTP status codes are three-digit numbers included in the server’s response that indicate the result of a client’s request.

What are HTTP status codes? List the common HTTP Response Codes.

The first digit of the HTTP response codes analyzes the type of response given by the server.

1XX:informational response
2XX:successful response
3XX: redirect
4XX:client error
5XX: server error
The common HTTP responses are:

200 (OK): request successful
201 (Created): request successful & resource created
400 (Bad Request): request unsuccessful due to user error (typo or data missing)
401 (Unauthorized): request unsuccessful, client not authenticated/authorized
403 (Forbidden): request unsuccessful; client authenticated, but not authorized
404 (Not Found): request unsuccessful; the server cannot find the resource
500 (Internal Server Error): request unsuccessful due to an unexpected server error
502 (Bad Gateway): request unsuccessful due to invalid server response
503 (Service Unavailable): server undergoing maintenance/unavailable, cannot process request
10. What HTTP Methods are supported by Rest?
The four primary HTTP request methods in REST are:

GET:retrieves data from the API by specifying an endpoint URL, does not require the user to send a message body
POST: sends new data for API processing, usually creating a new resource that the API returns to the user. Requires a message body to submit the data
PUT: used to update the old/existing resource on the server or to replace the resource.
DELETE: removes an existing resource from the API server
There are also two less common HTTP methods supported by the REST API:

OPTIONS: retrieves a list of supported methods that can be used with REST API resource
HEAD: like GET, but retrieves metadata about the API resource
Read More: Top 50 ASP.NET Web API Interview Questions
11. What is caching in the REST API?
Caching is the ability to store copies of frequently accessed data in several places along the request-response path. When a client requests some resources, the request first goes through a cache and then to the server. If the cache contains the updated data, the request uses that data to satisfy the user request. If it does not, the data comes from the server.

12. Differentiate between REST and SOAP API.
Parameters	REST	SOAP
Stands for	Representational State Transfer	Simple Object Access Protocol
What is it?	REST is an architecture style for designing communication interfaces.	SOAP is a protocol for communication between applications
Design	REST API exposes the data	SOAP API exposes the operation
Transport Protocol	REST works only with HTTPS.	SOAP is independent and can work with any transport protocol.
Data format	REST supports XML, JSON, plain text, HTML	SOAP supports only XML data exchange
Performance	REST has faster performance due to smaller messages and caching support.	SOAP supports only XML data exchange.
Scalability	REST is easy to scale. It’s stateless, so every message is processed independently of previous messages.	SOAP is difficult to scale. The server maintains state by storing all previous messages exchanged with a client.
Security	REST supports encryption without affecting performance.	SOAP supports encryption with additional overheads.
Use case	REST is useful in modern applications and public APIs.	SOAP is useful in legacy applications and private APIs.
Read More: Difference between SOAP And REST APIs
13. What is CRUD in the context of a REST API?
CRUD is an acronym for Create, Read, Update, and Delete. These different actions are typically associated with databases. In the context of a REST API, we can perform each action type on a database via HTTP requests.

What is CRUD in the context of a REST API?

Create: requires the HTTP POST method
Read: requires the HTTP GET method
Update: requires the HTTP PUT method
Delete: requires the HTTP DELETE method
14. How is a REST API stateless?
Statelessness means that the REST API server doesn’t store any information about previous client communications. As a result, the server and client have no information about each other’s state, allowing the server to free up storage that would otherwise be needed to maintain records for each request.

Because of this, each request made to a REST API is seen as a brand-new interaction, meaning that on each occasion, a client needs to supply all of the necessary information to complete an API request successfully.

How is a REST API stateless?

15. What is payload?
“Payload” refers to the data in the body of the HTTP request or response messages in GET or POST requests. The data can be a JSON or XML object or sometimes binary data like images or videos. The payload is an essential part of a REST API as it contains the actual data being transferred between the client and the server. It is important to ensure that the payload is properly formatted and structured according to the API's specifications to ensure proper communication and handling of data.

16. In REST APIs, which markup languages are used to represent the resources?
The resources in REST APIs are represented using XML (extensible markup language) and JSON (JavaScript Object Notation).

17. What are the different application integration styles?
The different integration styles include

Shared database
Batch file transfer
Invoking remote procedure (RPC)
Swapping asynchronous messages over a message-oriented middleware (MOM)
18. What are “Options” in REST APIs?
In REST APIs, "options" refer to the OPTIONS HTTP method. The OPTIONS method describes the communication options for the target resource. It can be used to determine the capabilities and restrictions associated with the resource, including supported HTTP methods and required headers.

19. What are the principles of REST API?
Uniform interface: It is fundamental to the design of any RESTful web service. It indicates that the server transfers information in a standard format. The formatted resource is called a representation in REST.
Statelessness: It refers to a communication method in which the server completes every client request independently of all previous requests.
Layered system: You can design your RESTful web service to run on several servers with multiple layers such as security, application, and business logic, working together to fulfill client requests. These layers remain invisible to the client.
Cacheability: RESTful web services support caching i.e. the process of storing some responses on the client or on an intermediary to improve server response time.
Code on demand: In the REST architectural style, servers can temporarily extend or customize client functionality by transferring software programming code to the client.
20. What are Idempotent methods?
An idempotent HTTP method is a method that can be invoked many times without different outcomes. It should not matter if the method has been called only once, or ten times over. The result should always be the same.

What are Idempotent methods?

21. What is AJAX? How is REST different from AJAX?
AJAX stands for Asynchronous JavaScript And XML. It is a web development technique that allows data to be loaded in the background without reloading the entire page. This makes web applications more responsive, as users don’t have to wait for the whole page to reload every time they interact with it.

REST	AJAX
REST- Representational State Transfer	AJAX - Asynchronous javascript and XML
REST has a URI for accessing resources using a request-response pattern.	AJAX uses XMLHttpRequest object to send requests to the server and the response is interpreted by the Javascript code dynamically.
REST is an architectural pattern for developing client-server communication systems.	AJAX is used for dynamic updation of UI without the need to reload the page.
REST requires the interaction between client and server.	AJAX supports asynchronous requests thereby eliminating the necessity of constant client-server interaction.
22. What are the three types of API Testing?
API testing can be categorized into three types:

Unit Testing (Component Testing): It focuses on individual units or components of the code, typically at the function level. It verifies the correctness of specific functionalities or methods within an API in isolation.
Integration Testing: It involves testing the interactions and integration points between different components, modules, or systems within an API. The primary goal is to ensure that the integrated components work cohesively and as expected when combined together.
End-to-end Testing (Functional Testing): It evaluates the entire API system, including all components, databases, external services, and communication interfaces.
23. Can you send the payload in the GET and DELETE methods?
No, the payload is not the same as the request parameters. Hence, it is not possible to send payload data in these methods.

24. What is the maximum payload size that can be sent in POST methods?
There's no such restriction. The only thing is the greater the payload size, the larger the bandwidth consumption and time taken to process the request. Sending large payloads in POST requests requires effective strategies for efficient transmission.

25. What are JAX-WS and JAX-RS?
Java API for XML Web Services (JAX-WS) is a standardized API for creating and consuming SOAP (Simple Object Access Protocol) web services. JAX-WS allows developers to write message-oriented as well as Remote Procedure Call-oriented (RPC-oriented) web services.

JAX-RS stands for JAVA API for RESTful Web Services. It is a JAVA-based programming language API and specification to provide support for creating web services according to the Representational State Transfer (REST) architectural pattern.

26. Should we make the resources thread-safe explicitly if they are made to be shared across multiple clients?
No. it isn't required. This is because, upon every request, new resource instances are created which makes them thread-safe by default.

27. What are the ways to secure REST API?
Strong Authentication and Authorization
Implementing protocols like OAuth 2.0 and OpenID Connect can manage user authentication securely. Setting up clear policies with role-based access control (RBAC) or attribute-based access control (ABAC) is crucial for authorization. Adding multi-factor authentication (MFA) can significantly enhance security by reducing the chances of unauthorized access.

Encrypt Data in Transit and at Rest
For data in transit, use TLS with strong cipher suites. For data at rest, employ encryption algorithms like AES and securely manage encryption keys with cloud providers or hardware security modules (HSMs) services.

Error Handling and Logging
Error handling is critical to avoid leaking sensitive data through API errors. Logging API transactions is vital for tracking and analyzing activities. Ensure logs do not contain sensitive information.

Use Throttling and Rate Limiting
Throttling manages the API's throughput, while rate limiting imposes hard limits on requests. Implementing these measures through API gateways or middleware helps prevent overuse and protect against denial-of-service attacks.

28. Can you use TLS (Transport Layer Security) With a REST API?
Yes, TLS can encrypt communications between a client and the REST API server, providing a secure way to access API resources. To benefit from TLS encryption and security, requests must be made with HTTPS rather than standard HTTP. This is important because the REST API takes on the security properties of the protocol that it uses for communication.

29. How is JAXB related to RESTful web API?
JAXB (Java Architecture for XML Binding) is closely related to RESTful web APIs, particularly in the context of Java-based applications.

30. What are the best practices for creating URIs?
Use nouns to represent resources
Use consistent resource naming conventions and URI formatting for minimum ambiguity and maximum readability and maintainability.
Use a forward slash (/) to indicate hierarchical relationships
Don't use trailing forward slash (/) in URIs
Use hyphens (-)
Do not use underscores ( _ )
Use lowercase letters
Do not use file extensions
Never use CRUD function names in URIs
Do not Use Verbs in the URI

Download this PDF Now - Rest API Interview Questions PDF By ScholarHat
Summary
After going through these questions you might have got an idea regarding the type of questions that can be asked. REST APIs allow different software to communicate easily, efficiently, and securely. The demand for REST architecture will continuously rise as the software industry grows. Hence all the upcoming developers must be skilled with REST techniques.

FAQs

Q1. How do I prepare for Rest AP interview?
 Focus on understanding HTTP methods, status codes, and authentication mechanisms. Practice building and consuming APIs using frameworks like Express.js or Flask. 

Q2. How do I showcase my Rest API projects in an interview?
 During the interview, present your projects by explaining the problem they solve, the technologies used, key features implemented, and any challenges overcome. Demonstrate your API's functionality with examples and discuss any optimizations or improvements made. 

Q3. What are some tips for answering Rest API Interview Questions?
To answer REST API interview questions effectively, focus on explaining key concepts like CRUD operations, statelessness, and resource representation using JSON or XML. 

Лучшие вопросы и ответы на собеседовании по REST API
В этой статье обсуждаются наиболее часто задаваемые вопросы на собеседовании по REST API, чтобы подготовить разработчиков к победе на собеседовании в качестве разработчика.

Лучшие вопросы и ответы на собеседовании по REST API
Несколько разработок, включая облачные вычисления и архитектуру на основе микросервисов, стали возможными благодаря RESTful API . Они изображали онлайн-общение и компьютеры как нечто простое. Поэтому любой разработчик должен понимать, что такое REST , как он функционирует, его преимущества и как создавать безопасные сервисы, чтобы идти в ногу со временем. Поскольку они могут помочь им в создании решений, которые являются масштабируемыми, простыми в обслуживании и позволяют их продуктам охватить весь мир благодаря мощности Интернета, многие компании предпочитают разработчиков, понимающих REST.

Как подготовиться к вопросам интервью, связанным с RESTful API?
Наиболее частые вопросы на собеседованиях по REST API, касающиеся веб-служб RESTful во время собеседований по REST API, а также вопросы, касающиеся библиотеки JAX-RS и веб-служб RESTful, созданных с использованием среды Spring MVC, упомянуты в разделе ниже. Прежде чем сесть или назначить собеседование, крайне важно подготовиться ко всем упомянутым вопросам интервью REST API.

Что такое ОТДЫХ?
REST, описывающий передачу репрезентативного состояния, отвечает за разработку приложений для веб-сайтов, установленных по протоколу HTTP. REST определяет несколько правил, которым должна соответствовать полезность веб-сайта, чтобы в это поверить. Предложения обеспечивают стандартизированные методы HTTP между сервером и пользователем для виртуальной передачи материалов.



Что такое REST API?
RESTful API обеспечивает безопасный онлайн-обмен информацией между двумя компьютерными системами. Для выполнения различных действий большинство бизнес-приложений обмениваются данными с другими внутренними и внешними программами. Например, когда ваша внутренняя система счетов передает информацию о сотрудниках внешней банковской системе для создания платежных ведомостей. Это можно сделать с помощью REST API, поскольку эта информация является индивидуальной, а стандарты программного обеспечения REST API безопасны, эффективны и заслуживают доверия.

RESTful API известен как API, который каким-то образом связан с REST. Все данные считаются ресурсами в REST API и определяются точной стандартной постоянной единицей, называемой (URI). API Twitter создает твит как ресурс, к которому пользователь может получить доступ и получить его. Используя Twitter API, пользователи могут легко публиковать твиты.

Каковы принципы REST?
Клиент-сервер позволяет последовательность ответов, которые используются для передачи между потребителем и сервером. Оба могут отправлять и принимать ответы друг от друга. Это четкое видение метода клиент-сервер позволит обеим силам действовать без помощи друг друга.

Многоуровневая система

Между клиентом и сервером API слои являются серверами. Эти разные серверы выполняют несколько задач, таких как обнаружение спама и повышение производительности. На сообщения, отправляемые между клиентом и сервером интерфейса прикладного программирования (API), не влияет добавление или удаление уровней, поскольку REST (репрезентативное состояние) использует модульную архитектуру.

Единый интерфейс

Клиент и сервер всегда должны использовать одинаковый протокол для всех коммуникаций. Этот протокол HTTP REST. Поскольку каждое приложение использует один и тот же язык для запроса и предоставления данных, единый интерфейс облегчает интеграцию.

без гражданства

При обмене данными без сохранения состояния сервер не хранит записи об уже отправленных ответах. Каждый ответ содержит полную информацию, необходимую для заключения сделки. Это улучшает интерпретацию за счет снижения нагрузки на сервер и использования памяти. Это также устраняет вероятность того, что запрос может быть отклонен из-за неполной информации.

Кэшируемый

Клиенты могут кэшировать любые ресурсы для повышения производительности, используя ответы серверов, которые указывают, можно ли кэшировать ресурс. REST также содержит следующее необязательное условие.

Код по запросу

Ответ API может содержать исполняемый код, который могут запускать пользователи. Таким образом, клиентское приложение может выполнять код на своей собственной серверной части.

В чем разница между AJAX и REST?
Разница между AJAX и REST заключается в следующем:

АЯКС****ОТДЫХАТЬ Объекты XMLHttpRequest используются в Ajax для отправки запросов на сервер. Однако код из JavaScript предоставляет ответы для динамического изменения текущей страницы. Использование ресурсов важно для структуры URI и шаблона запроса/ответа. используется ОТДЫХОМ. Ajax — это группа технологий, которая позволяет динамически обновлять пользовательский интерфейс без перезагрузки страницы. Пользователи могут запрашивать данные или информацию с серверов, используя стиль архитектуры программного обеспечения REST. Ajax устраняет асинхронную связь между сервером и пользователем. REST требует связи между сервером и пользователем.

Как работает микросервисная архитектура?
Архитектурный метод разработки облачных приложений называется микросервисами. Каждое приложение состоит из ряда сервисов, каждый из которых выполняется в отдельном процессе и взаимодействует с другими через API. Метод создания приложений, известный как «микросервисная архитектура», со временем стал передовой практикой. Компоненты микросервисной архитектуры основаны на потребностях бизнеса.

Клиенты
Запросы отправляются многочисленными пользователями с различных устройств.

Поставщики удостоверений
Проверяйте личности пользователей или клиентов и предоставляйте токены безопасности.

Шлюз API
Запросы клиентов обрабатываются через API Gateway.

Статическое содержимое
Весь материал системы содержится в статическом контенте.

Управление
Определяет сбои и балансирует службы между узлами.

Обнаружение службы
Инструмент для определения пути связи между микросервисами.

Сеть доставки контента
Распределенная сеть прокси-серверов и связанных центров обработки данных.

Удаленное обслуживание
К информации, хранящейся в сети ИТ-устройств, можно получить удаленный доступ с помощью удаленного сервиса.



Какие методы HTTP поддерживаются REST?
Практикуйте REST, создавая API
Создайте полноценный REST‑бэкенд с моделями данных, эндпоинтами и логикой — без написания кода.
Попробовать AppMaster
Поддерживаемые методы REST HTTP:

GET — наиболее широко используемый метод на веб-сайтах и в API, GET получает ресурсы с определенного сервера данных.
POST — методом POST данные отправляются на сервер API для обновления ресурса. Когда сервер получает данные, он сохраняет их в теле запроса HTTP.
PUT — отправляет данные в API для создания и обновления ресурсов.
DELETE — как следует из названия, этот метод используется для удаления ресурсов по определенным URL-адресам.
ВАРИАНТЫ - здесь подробно описаны поддерживаемые методы.
HEAD — возвращаются метаданные об URL-адресе запроса. Рассмотрим ситуацию с точки зрения одной записи. Скажем, есть запись для работника с номером сотрудника 1. Каждое из следующих действий будет означать что-то свое.

POST — так как мы получаем информацию для сотрудника 1, который уже создан, это неприменимо.

GET — это будет использоваться для получения информации о сотруднике через веб-API RESTful, а номер сотрудника будет равен 1.

PUT — с помощью веб-API RESTful PUT будет использоваться для обновления информации о сотруднике, чтобы отразить сотрудника № 1.

УДАЛИТЬ - эта функция используется для удаления информации о сотруднике с номером сотрудника 1.

В чем разница между PUT и POST?
Разница между PUT и Post заключается в следующем:

PUT — точно и конкретно идентифицирует файл или ресурс по предоставленному (унифицированному идентификатору ресурса) URI. PUT изменяет существующий файл, если он существует с этим универсальным идентификатором ресурса — URI. PUT формирует файл, если он уже существует. Кроме того, PUT является идемпотентным, предполагая, что он не влияет на файлы, но на то, как часто он используется.
POST — он отправляет данные на отдельный унифицированный идентификатор ресурса — URI и ожидает, что файл ресурсов там будет управлять спросом. В этот момент сервер веб-сайта может решить, что можно сделать с данными в контексте выбранного файла. Кроме того, стратегия POST не является идемпотентной, а это означает, что если вы используете ее более одного раза, она возобновит создание новых файлов.
В чем разница между монолитной SOA и архитектурой микросервисов?
Монолитные приложения развиваются очень медленно и состоят из взаимосвязанных неделимых блоков. Меньшие по размеру сервисы с минимальным подключением составляют SOA, развитие которой также ограничено.

Микросервисы — это невероятно маленькие, слабо связанные автономные сервисы с быстрым итеративным циклом разработки.

Что такое УРИ?
Унифицированный идентификатор ресурса называется URI. URI в REST — это строка, обозначающая ресурс веб-сервера. Каждый ресурс имеет отдельный URI, который при использовании в HTTP-запросе позволяет клиентам ориентироваться на него и выполнять над ним действия. Адресация — это процесс направления трафика к ресурсу с использованием его URI.

Формат URI:

<протокол>://<имя-службы>//

Существует два типа URI

1. URL-адрес — информация о получении ресурса из его местоположения доступна в Едином указателе ресурсов.

URL-адреса содержат информацию об имени хоста в сети (sampleServer.com) и пути к содержимому (/samplePage.html) и начинаются с протокола (например, FTP, HTTP и т. д.). Он также может иметь критерии поиска.

2. URN — с помощью имени, которое является одновременно отличительным и долговечным, единообразное имя ресурса идентифицирует ресурс.

Местоположение ресурса в Интернете не обязательно определяется URN. Они служат моделями для использования другими парсерами при идентификации ресурсов.

Всякий раз, когда URN идентифицирует документ, его можно быстро преобразовать в URL-адрес с помощью «преобразователя», чтобы затем его можно было загрузить.

Каковы особенности веб-служб RESTful?
Свяжите API с веб‑приложением
Создайте простой веб‑интерфейс для тестирования REST‑потоков как реальное клиентское приложение.
Создать портал
Эти функции присутствуют в каждом веб-сервисе RESTful:

Модель связи клиент-сервер является основой службы.
Служба использует протокол HTTP для получения данных/ресурсов, выполнения запросов и выполнения других задач.
«Обмен сообщениями» — это метод, используемый для связи между клиентом и сервером.
Служба может получить доступ к ресурсам с помощью URI.
Он придерживается идеи безгражданства, при которой запрос и ответ клиента не зависят от других, и поэтому предлагает полную уверенность в том, что необходимые данные будут получены.
Чтобы уменьшить количество обращений к серверу для повторяющихся запросов одного типа, в этих службах также используется идея кэширования.
Эти службы также могут реализовывать архитектурный шаблон REST с использованием служб SOAP.
Что такое коды состояния HTTP?
Стандартные коды, используемые в статусе HTTP, соответствуют установленным статусам завершения задач сервера. Например, статус HTTP 404 указывает на то, что на сервере нет запрошенного ресурса.



Давайте посмотрим на коды состояния HTTP и поймем их значение:

200 - Хорошо, успех очевиден.
201 — когда запрос POST или PUT успешно создает ресурс, код ответа — 201 — CREATED. Используя заголовок местоположения, верните URL-адрес вновь созданному ресурсу.
304 — в случае условных запросов GET код состояния 304 NOT MODIFIED используется для экономии пропускной способности сети. Тела ответа должны быть недействительными. Даты, места и другая информация должны быть в заголовках.
400 — НЕПРАВИЛЬНЫЙ ЗАПРОС указывает, что был предоставлен неверный ввод, например, отсутствующие данные или ошибка проверки.
401 - ЗАПРЕЩЕНО указывает на то, что у пользователя нет доступа к используемому методу, например удаление доступа без прав администратора.
404 - ОШИБКА указывает, что запрошенный метод не может быть найден.
409 - КОНФЛИКТЫ Когда метод выполняется, это указывает на конфликтную проблему, такую как вставка повторяющихся записей.
500 — код ВНУТРЕННЕЙ ОШИБКИ СЕРВЕРА указывает на то, что сервер выдал исключение во время выполнения метода.
Можете ли вы рассказать мне о недостатках веб-сервисов RESTful?
Недостатки веб-сервисов RESTful:

Сеансы в веб-службах RESTful невозможно поддерживать, поскольку помощник придерживается концепции безгражданства.
Ограничения безопасности и защиты не являются существенными для REST. Некоторые протоколы используются для обеспечения безопасности. Это даст предупреждение, которое можно использовать при определении того, какие стандарты защиты и безопасности выбрать, например, аутентификацию SSL/TLS.
Различать SOAP и REST?
Разница между SOAP и REST заключается в следующем:

МЫЛО****ОТДЫХАТЬ Протокол под названием SOAP используется для реализации веб-сервисов. REST — это шаблон архитектурного проектирования для разработки веб-сервисов. Рекомендации, предоставляемые SOAP, предназначены для строгого соблюдения. REST описывает критерии, однако их не обязательно полностью соблюдать. Поскольку клиент SOAP и сервер более тесно связаны, его можно сравнить с настольными программами с строгими контрактами в этом отношении. Клиент REST лучше адаптируется, чем браузер, и не зависит от дизайна сервера, если он соответствует необходимым стандартам связи. SOAP поддерживает только передачу XML между клиентом и сервером. REST предоставляет несколько типов данных, включая XML, JSON, MIME, текст и т. д. Чтения SOAP не могут быть кэшированы Запросы REST Read можно кэшировать Сервисные интерфейсы используются SOAP для раскрытия логики ресурсов. Логика ресурса предоставляется с помощью REST с использованием URI. SOAP медленнее ОТДЫХ быстрее Будучи протоколом, SOAP устанавливает свои собственные протоколы безопасности. REST принимает меры предосторожности только на основе протокола реализации. Хотя SOAP не часто выбирается, он используется, когда требуется передача данных с отслеживанием состояния и большая надежность. В наши дни разработчики часто предпочитают REST, поскольку он предлагает большую масштабируемость и удобство обслуживания.

Что составляет основные компоненты ответа HTTP?
Владейте кодовой базой
Генерируйте реальный исходный код для самостоятельного хостинга, когда нужен полный контроль.
Экспортировать исходники
Ответ HTTP состоит из четырех основных компонентов:

Код состояния ответа — отображает код состояния сервера в ответ на запрос ресурса. Пример: ошибка на стороне клиента представлена числом 400, тогда как успешный ответ представлен числом 200.
Версия HTTP - версия протокола HTTP указывается версией HTTP.
Заголовок ответа — в этом разделе содержатся метаданные ответного сообщения. Данные могут использоваться для предоставления таких вещей, как длина контента, тип, дата ответа, тип сервера и т. д.
Тело ответа — ресурс или сообщение, которое фактически вернул сервер, содержится в теле ответа.
В чем разница между WebSockets и REST?
Вот некоторые различия между WebSockets и REST, упомянутые ниже:

REST основан на операциях CRUD, тогда как WebSocket — это низкоуровневый протокол, основанный на концепциях сокета и порта, которые являются основным транспортным механизмом.

В то время как приложения RESTful должны проектировать свои операции на основе глаголов и HTTP, WebSocket требует использования информации об IP-адресе и порте, которые являются деталями более низкого уровня для любого приложения. WebSocket — это протокол с отслеживанием состояния, в то время как REST построен на протоколе без сохранения состояния, что означает, что ни клиент, ни сервер не должны знать друг друга.

В отличие от REST, основанного на HTTP, который может масштабироваться горизонтально, соединения WebSocket могут масштабироваться вертикально на одном сервере. Связь на основе REST сравнительно дороже, но связь через WebSocket дешевле.

Можем ли мы реализовать безопасность транспортного уровня (TLS) в REST?
Можем, да! Связь клиент-сервер в REST шифруется с использованием TLS, что также дает пользователю возможность установить сервер. Поскольку он заменяет Secure Socket Layer (SSL), он представляет собой форму защищенной связи между пользователем и сервером. Поскольку HTTPS хорошо работает с Secure Socket Layer (SSL) и Transport Layer Security (TLS), он полезен при создании веб-сервисов RESTful. Здесь важно отметить, что REST касается аспектов используемого им протокола. Таким образом, средства защиты основаны на протоколе REST.

Каков максимальный размер полезной нагрузки, которую можно отправить методами POST?
Корректно обрабатывайте 400 и 409
Используйте drag-and-drop бизнес‑процессы для обработки валидации, конфликтов и граничных случаев.
Автоматизировать логику
Величина полезной нагрузки, которая может быть передана почтовым методом, теоретически не ограничена. Однако важно помнить, что большие полезные данные потребляют больше пропускной способности и требуют больше времени для обработки, что влияет на скорость отклика сервера.

Перечислите ключевые аннотации, присутствующие в JAX-RS API.
Путь — детализирует относительный путь универсального идентификатора ресурса (URI) ресурса REST.
GET — это обозначение метода запроса соответствует HTTP GET. Они обрабатывают запросы GET.
POST — это обозначение метода запроса соответствует HTTP POST. Они занимаются POST-запросами.
PUT — это обозначение метода запроса соответствует HTTP-запросам PUT. Они имеют дело с запросами PUT.
DELETE — определяется как обозначение метода запроса, используемого для HTTP DELETE. Они обрабатывают запросы DELETE.
HEAD — это обозначение метода запроса соответствует HTTP HEAD. Они имеют дело с запросами HEAD.
PathParam — разработчики могут использовать этот параметр пути универсального идентификатора ресурса (URI) для извлечения параметров из URI для классов/методов ресурсов.
QueryParam — класс/методы ресурсов могут использовать эти запросы, которые были извлечены из универсального идентификатора ресурса (URI) разработчиком с помощью этого параметра запроса универсального идентификатора ресурса (URI).
Производит — здесь указываются презентации ресурсов MIME, которые создаются и отправляются пользователю в качестве ответа.
Потребляет — здесь подробно описываются представления ресурсов MIME, которые сервер будет принимать или использовать при получении их обратно от пользователя.
Определите RestTemplate в Spring
Основной класс для доступа пользователей к службам RESTful называется RestTemplate. Используя ограничения REST, осуществляется связь с сервером. Это сопоставимо с различными разделами шаблонов, предлагаемыми Spring, такими как JdbcTemplate и HibernateTemplate. RestTemplate дает методам возможность взаимодействовать с использованием шаблона URI (Uniform Resource Identifier), параметров пути URI (Uniform Resource Identifier), типов запроса/ответа, объектов запроса и т. д. Он предоставляет высокоуровневые сведения о реализации для HTTP-методов, таких как GET. , POST, PUT и т. д.

Этот раздел из Spring 4.3 предлагает часто используемые аннотации, такие как @GetMapping, PutMapping, @PostMapping и т. д. До этого Spring предлагает интерпретацию @RequestMapping для указания используемых методов.

Какая польза от @RequestMapping?


Запросы сопоставляются с конкретными методами обработчика с помощью аннотации.

Диспетчерский сервлет управляет всей входящей маршрутизацией веб-приложений в Spring. Используя обработчики запросов, он решает, какой контроллер из всех предназначен для обработки запроса, когда он его получает. Все классы с аннотацией @Controller сканируются сервлетом Dispatcher.

Аннотации @RequestMapping, определенные внутри методов и классов контроллера, необходимы для процесса маршрутизации запросов.

Перечислите инструменты или API для разработки или тестирования веб-API.
Перейдите от локального к облаку
Разверните приложение в облаке: AppMaster Cloud, AWS, Azure или Google Cloud.
Развернуть сейчас
С помощью различных инструментов, таких как Postman, Swagger и т. д., можно протестировать веб-сервисы RESTful. Postman имеет множество функций, в том числе возможность отправлять запросы на конечные точки, отображать ответы, которые можно преобразовать в JSON или XML, и анализировать параметры запроса, такие как заголовки и параметры запроса, а также заголовки ответов. Как и Postman, Swagger предлагает ряд функций, а также возможность документировать конечные точки . Мы также можем протестировать производительность и загрузку API с помощью таких инструментов, как Jmeter.

Что такое кэширование?
Когда ответ сервера кэшируется, он сохраняется, чтобы при необходимости можно было использовать новую копию вместо того, чтобы снова генерировать тот же ответ. Этот метод не только снижает нагрузку на сервер, но и повышает его производительность и масштабируемость. Ответ может кэшироваться только клиентом и только на короткое время.

Заголовок ресурсов и краткое описание приведены ниже, чтобы процедура кэширования могла их идентифицировать:

Дата и время создания ресурса
Дата и время обновления ресурса, которое обычно содержит самую последнюю информацию.
Заголовок для управления кешем
Дата и время, когда кэшированный ресурс перестанет работать
Возраст, который устанавливает отправную точку для получения ресурса.
Каковы лучшие ресурсы для изучения REST API?
Существует множество доступных ресурсов для изучения REST API для разработки веб-сайтов и мобильных приложений . Топ-5 перечислены ниже:

RESTful веб-сервисы

Для того, чтобы начать разработку приложения с использованием API, это руководство Леонарда Ричардсона под названием «Веб-сервисы RESTful» будет отличным подспорьем в этом отношении. Особенно, если вы новичок и хотите понять основы услуг веб-сайта Representational State Transfer (REST). Ресурс показал, как работает Representational State Transfer (REST) и несколько других важных веб-сервисов с примерами. Он не основан на каком-то одном языке программирования, поэтому понимание RESTful API не будет привязано к какому-либо языку программирования.

Учебник по REST API

Учебное пособие по REST API — отличный онлайн-ресурс для изучения передачи репрезентативного состояния (REST), если вы не являетесь книголюбом или читателем. Этот ресурс поможет вам изучить REST от начала до конца, охватив все основные аспекты. Это руководство начинается с введения в Representational State Transfer (REST), затем следует путь примеров, касающихся стратегий и знаний, связанных с HTTP, и так далее.

Свод правил проектирования REST API

Это также отличный ресурс для руководства по передаче репрезентативного состояния (REST), поскольку автор книги Марк Массе передает свой опыт и стратегии, которые он использовал, которые помогли ему создать приложение с использованием REST API. В этом ресурсе он обсудил методы разработки URI приложений, подходы к передаче метаданных через заголовки HTTP и какие типы носителей можно использовать. Кроме того, как внедрить инновации в разработку методов отправки HTTP и кодов состояния ответа.

Еженедельный бюллетень для разработчиков API

Существует замечательный ресурс, который называется еженедельным информационным бюллетенем разработчиков API; это современный ресурс для изучения RESTful API, поскольку он в значительной степени сосредоточен на технике, структуре, расширении и архитектуре API для веб-приложений и мобильных приложений. Информационный бюллетень специально разработан для разработчиков, менеджеров проектов и архитекторов.

Будьте уверены

Это удачная среда тестирования REST с открытым исходным кодом для людей, имеющих опыт работы с одним языком программирования под названием Java. Этот ресурс упрощает процедуру тестирования и проверки процессов RESTful API. REST-Assured также устраняет необходимость создания шаблонного кода для тестирования сложных реакций и помогает синтаксису BDD.
