Top Web Services Interview Questions and Answers (RESTful, SOAP, Security questions)

In today’s scenario, when discussing the basic necessities of living a technically advanced life, the “World Wide Web, i.e., www” acts as an essential factor.

In the market, there are a variety of web applications developed on different programming platforms. It becomes very difficult to ensure complete and accurate associations between these heterogeneous applications.

The solution to such a problem is ‘Web services’, which act as a means of communication between these multiple web applications developed with different programming languages. Web services use a standardized XML messaging system that is easily available over the Internet or private networks.

Table of Contents: [Show]

Ultimate Quiz on Web Services Interview Questions to Prove Your API Knowledge
Take this simple quiz to prove your expertise in Web Services. This quiz on Web Services Interview Questions covers SOAP protocols, REST APIs, and other essential security questions to ace your next interview.

Web Services Interview Questions QUIZ
Test your knowledge and boost your confidence!
Question 1 of 15
Basic Questions
What is a web service endpoint?
A URL where the web service can be accessed
A data format
A security token
A database connection

Web Services Interview Questions and Answers
Web services are a very vast topic. This includes its architecture, components like Simple Object Access Protocol (SOAP), Web Services Description Language (WSDL), RESTful web services, Web services security, etc.

This article covers all the necessary Web services topics with which you must be well acquainted to answer any level questions. You will also see the best web services interview questions and answers in categories, so that if required, you can get through a particular section only.

General Interview Questions on Web Services
The following questions cover Web services testing questions, RESTful web services, SOAP web services, and Web services security interview questions.

Q #1) Explain Web Services?

Answer: A Web Service can be defined as an application component for communication or exchanging information between two applications over the network. Web services basically work on a client-server model, where web services are easily accessible to client applications over the network.

To enable communication between various applications, web services take the help of open standards like XML (for data tagging), SOAP (for message transferring), and WSDL (to denote service availability).

Q #2) What are the components of a web service?

Answer: The different components of web services are as follows:

SOAP- Simple Object Access Protocol
UDDI- Universal Description, Discovery, and Integration
WSDL- Web Service Description Language
RDF- Resource Description Framework
XML- Extensible Markup Language
Q #3) Explain the term Interoperability concerning Web services.

Answer: The term ‘Interoperability’ is widely used in product marketing descriptions, which defines the ability of different products or systems to work together without any special effort on the customer’s part.

This applies in the same way when we talk about ‘Interoperability’ in terms of web services. Here, it determines the communication between various applications and the sharing of data and services among them. There are no restrictions on the type of application to be in communication.

If any code is written, it will be treated as generic code that all applications will understand. Thus, the cost of writing specific code for each application is reduced.

There are no restrictions on the type of application to be in communication with. If any code is written, it will be treated as generic code that all applications will understand. Thus, the cost of writing specific code for each application is reduced.

Q #4) Define the web service protocol stack and its layers.

Answer: The web service protocol stack comprises 4 layers. This can be described:

a) Service transport: This is the first layer that helps in transporting XML messages between various client applications. This layer commonly uses the following protocols:

HTTP (Hypertext Transport Protocol)
SMTP (Simple Mail Transport Protocol)
FTP (File Transfer Protocol)
BEEP (Block Extensible Exchange Protocol)
b) XML messaging: This layer is based on the XML model, where messages are encoded in a common XML format that is easily understood by others. This layer includes

XML-RPC
SOAP(Simple Object Access Protocol)
c) Service description: This layer contains descriptions like location, available functions, and data types for XML messaging, which describes the public interface to a specific web service. This layer includes:

WSDL(Web Service Description Language)
d) Service discovery: This layer provides a way to publish and find web services over the web. This layer includes:

UDDI(Universal Description, Discovery, and Integration)
Q #5) Explain web service architecture.

Answer: Web service framework architecture comprises three different layers. The roles of these layers are defined as below:

Service Provider: As the name denotes, the service provider’s role is to create the web service and make it accessible to the client applications over the internet for their usage.
Service Requestor: A service Requestor is any consumer of a web service, like any client application. Client applications are written in any language. They contact the web service for any type of functionality by sending XML requests over the available network connection.
Service Registry: The service Registry is the centralized directory that helps locate web services for client applications. Here we can find the existing web services, as well as developers can also create new ones.
The Service Provider uses the ‘Publish’ interface of the Service Registry to make the existing web services available to client applications. With all the information provided by the Service Registry, the Service Requestor can bind or invoke services.

Q #6) What do you understand by XML-RPC?

Answer: RPC is a Remote Procedure Call, and as the name suggests, it is the method of calling a procedure or function available on any remote computer.

XML stands for Extensible Markup Language. Thus, XML-RPC represents a simple protocol that performs RPCs by using XML messaging. This has been considered an excellent tool for connecting different environments and also for establishing connections between a wide variety of computers.

Q #7) Explain the features of XML-RPC.

Answer: The major features of XML-RPC are listed below:

RPCs are performed using a simple XML language.
XML-encoded requests are sent via HTTP POST.
XML response is embedded in the HTTP response.
It is considered platform-independent.
It allows communication between diverse applications.
It uses the HTTP protocol for passing information between client and server computers.
It has a small XML vocabulary for describing requests and responses.
Q #8) Enlist a few advantages of web services.

Answer: We have already discussed web services, their architecture, and components. Now, let us see some of its advantages:

Every application is now on the internet, and it is the web service that provides some sort of required functionality to the client applications.
Web services help in exposing the existing functionalities over the network to help other applications use them in their programs.
It has features like ‘Interoperability’, which determines the communication between various applications, sharing of data and services among themselves.
Web services use the standardized web service protocol stack for communication, which comprises 4 layers, namely, Service Transport, XML messaging, Service Description, and Service Discovery.
It has the feature of a low cost of communication because of the usage of SOAP (Simple Object Access Protocol) over the HTTP protocol.
Easy to deploy and integrate, and is reusable.
Allows simple integration between different features as a part of the loose coupling feature.
Q #9) Explain the term UDDI with its features.

Answer: UDDI is an XML-based standard in the service discovery layer of the web service protocol stack. It is used for publishing and finding web services over the web, as it acts like a directory.

Some features of UDDI are explained below:

It is an open framework and is platform-independent.
SOAP, COBRA, and Java RMI protocols are used for communication.
It helps businesses to discover each other and enables interaction between them over the Internet.
It acts as a database containing all WSDL files.
Q #10) Which language is used by UDDI?

Answer: UDDI uses the language known as WSDL (Web Service Description Language)

Q #11) Explain BEEP?

Answer: BEEP stands for Blocks Extensible Exchange Protocol. BEEP is determined as building new protocols for a variety of applications, such as instant messaging, network management, file transfer, etc. It is termed the new Internet Engineering Task Force (IETF), which is layered directly over TCP.

It has some built-in features, such as

Authentication
Security
Error handling
Handshake Protocol
Q #12) Enlist a few tools used to test web services.

Answer: To test Web services, the following tools are used:

SoapUI
REST client
JMeter
Q #13) Do we require any special application to access the web service?

Answer: The only requirement for accessing web services from any application is that it must support the XML-based request and response. There is no need or requirement to install any application to access web services.

Interview Questions on RESTful Web Services
Q #14) What do you know about RESTful Web Services?

Answer: REST stands for Representational State Transfer. REST is defined as a stateless client-server architectural style for developing applications accessed over the web.

When web services use HTTP methods to implement the concept of REST architecture, then it is known as RESTful Web services. In this architectural style, data and functionality are served as resources and are accessed by URI (Uniform Resource Identifiers).

RESTful web services enable web services to work best by inducing properties like

Performance
Scalability
Modifiability
Q #15) Explain the advantages of RESTful web services.

Answer: Enlisted below are the advantages of RESTful web services:

They are considered language and platform-independent, as these can be written in any programming language and can be executed on any platform.
REST is a lightweight protocol and is considered fast because of less consumption of bandwidth and resources.
It supports multiple technologies and different data formats, such as plain text, XML, JSON, etc.
It has a loosely coupled implementation and can be tested easily over browsers.
Q #16) Differentiate SOAP and REST?

Answer: You can easily understand the difference between SOAP and REST from the table below.

SOAP
REST
Simple Object Access Protocol (SOAP) serves as a standard protocol for web service creation.	Representational State Transfer (REST) is an architectural style for web service creation.
Web services and clients are tightly coupled and define some standards that are to be strictly followed.	It does not follow too many standards and is loosely coupled.
It requires more bandwidth and resource as well as uses service interfaces for exposing business logic.	It requires less bandwidth and resource as well as uses URI (Uniform Resource Identifiers) for exposing business logic.
It is usually less preferred and permits XML data format only.	It is usually more preferred and permits data formats like Plain text, HTML, JSON, etc.
Java API for SOAP web service is JAX-WS.	Java API for RESTFUL web service is JAX-RS.
SOAPUI can be used for testing SOAP web services.	Browsers and extensions such as Chrome postman are used for testing REST web services.
It defines its own security and uses WSDL contract for binding web services and client programs.	It does not have any defined contract as well as does not have its own security methods.
Q #17) Explain the different HTTP methods supported by RESTful web services.

Answer: Enlisted below are some common HTTP methods along with their functions that are supported by RESTful web services

GET: Read-only access to the resource.
PUT: Creation of new resources.
DELETE: Removal of a resource.
POST: Update of an existing resource.
OPTIONS: Get supported operations on the resource.
HEAD: Returns HTTP header only, nobody.
Q #18) What is a resource in a RESTful web service, and how is it represented?

Ans: Resource is said to be a fundamental concept having a type and a relationship with other resources. In REST architecture, each content is considered as the resource and they are identified by its URI.

Resources are represented with the help of XML, JSON, text, etc in a RESTful architecture.

Q #19) What are the core components of the HTTP request and HTTP response?

Answer: HTTP request has the following 5 major components:

HTTP Requests
Meaning/work
Verb	Indicate HTTP methods like GET, PUT, POST, etc
URI	Identifies the resource on server
HTTP Version	Indicates version.
Request Header	Contains metadata like client type, cache settings, message body format, etc for HTTP request message.
Request Body	Represents content of the message.
HTTP response has the following 4 major components:

HTTP Response
Meaning/work
Status/Response code	Indicates the status of the server for requested resource.
HTTP version	Represents HTTP version.
Response Header	Consists of metadata like content length, content type, server length, etc for HTTP response message.
Response Body	Represents response message content.
Q #20) What is the purpose and format of URI in REST architecture?

Answer: The purpose of a URI is to locate resources on the server that is hosting web services.

Format of URI:

<protocol>://<service-name>/<ResourceType>/<ResourceID>

Q #21) Explain the term statelessness in terms of RESTful web services.

Answer: In REST architecture, there is a restriction where a REST web service is not allowed to keep a client state on the server. Such a condition is known as ‘Statelessness’. In such a situation, the client passes its context to the server, and the server stores the context to process the client’s further requests.

Q #22) Enlist the advantages and disadvantages of statelessness.

Answer: The advantages of statelessness include

Every method requests are treated independently.
Application design is simplified as it does not maintain the client’s previous interaction.
Works with the HTTP protocol as it shares the feature of being stateless.
The disadvantages of statelessness include

Every time a client interaction takes place, web services are to be provided with extra information about each request so that they can interpret the client’s state.
Q #23) For designing a secure RESTful web service, what are the best factors that should be followed?

Answer: HTTP URL paths are used as part of the RESTful web service, so they need to be secured.

Some of the best practices are:

Perform validation of all inputs on the server to prevent SQL injection attacks.
Perform the user’s session-based authentication whenever a request is made.
Never use sensitive data like username, session token password, etc, through URL. These should be passed via the POST method.
Methods like GET, POST, PUT, DELETE, etc should be executed with proper restrictions.
HTTP generic error message should be invoked wherever required.
SOAPUI Web Services Interview Questions for Experienced
Q #24) Define SOAP web services?

Answer: Simple Object Access Protocol (SOAP) is defined as the XML-based protocol that is known for designing and developing web services and enabling communication between applications developed on different platforms with different programming languages over the Internet. It is both platform and language-independent.

Q #25) What are the various approaches available for developing SOAP-based web services?

Answer: There are 2 different approaches available for developing SOAP-based web services. These are explained as follows.

Contract-first approach: In this approach, the contract is defined first by XML and WSDL, and then Java classes are derived from the contract.
Contract-last approach: In this approach, Java classes are defined first, and then the contract is generated, which is usually the WSDL file from the Java class.
“Contract-first” method is the most preferred approach.

Q #26) Explain the major obstacle faced by SOAP users.

Answer: One of the major hindrances observed by users of SOAP is the ‘Firewall security mechanism’. In this case, all the HTTP ports except those that bypass the firewall are locked. People also observe a technical issue of mixing the specification of message transport with message structure sometimes.

Q #27) What are the advantages and disadvantages of SOAP?

Answer: Listed below are the advantages of SOAP web services:

SOAP allows communication between various applications, and it is both language and platform-independent.
It is very simple, as well as uses the standard HTTP protocol and XML for sending and receiving messages.
It defines and uses its security, known as WS security.
It decouples the encoding and communication protocol from the runtime environment.
It eradicates firewall problems and is vendor-neutral.
It allows the circulation of messages in a distributed and decentralized environment.
Listed below are the disadvantages of SOAP web services:

Lightweight formats other than XML are not supported.
Not easily testable on browsers.
Security facilities are not present.
SOAP is slow and cannot be easily tested on a browser.
Web services and clients are tightly coupled and define some standards that are to be strictly followed.
Q #28) What are the elements of a SOAP message?

Answer: SOAP is just like other XML documents and has the following elements:

Envelope: This element is defined as the mandatory root element. It translates the XML document and determines the start and end of the SOAP message.
Header: This element contains the optional header attributes of the message that contain specific information on the application. This element can occur multiple times and is intended to add new features and functionalities.
Body: This element is mandatory and contains the call and response messages. It is also defined as the child element of the envelope containing all the application-derived XML data that has been exchanged as a part of the SOAP message.
Fault element: Errors that occur during the processing of the messages are handled by the fault element. If the error is present, then this element appears as a child element of the body. However, there can only be one fault block.
Q #29) What are the important characteristics of the SOAP envelope element?

Answer: We have seen the basic work of a SOAP envelope element in the previous answer; now, let us see some of its characteristics:

SOAP envelope is a packaging mechanism.
Every SOAP message has a mandatory root envelope message.
Only one body element is allowed for each envelope element.
As the SOAP version changes, the envelope changes.
If the header element is present, it should appear as the first child.
Prefix ENV and envelope elements are used for specification.
A namespace and an optional encoding style are used with optional SOAP encoding.
Q #30) Enlist a few syntax rules applicable to SOAP messages.

Answer: Enlisted below are some important syntax rules that apply to SOAP messages:

A SOAP message

Must be encoded using XML.
Must use the SOAP envelope namespace.
Must use the SOAP encoding namespace.
Must not contain the DTD reference.
Must not contain XML processing instructions.
Q #31) Define SOA?

Answer: A Service Oriented Architecture (SOA) is defined as an architectural pattern consisting of services. Here, application components provide services to the other components using a communication protocol over the network. This communication involves data exchange or some coordination activity between services.

Some of the key principles on which SOA is based are mentioned below:

The service contract should be standardized, containing all the descriptions of the services.
There is loose coupling, defining less dependency between the web services and the client.
It should follow the Service Abstraction rule, which says the service should not expose to the client application how it executes functionality.
Services should be reusable to work with various application types.
Services should be stateless and have the feature of discoverability.
Services break big problems into little problems and allow diverse subscribers to use the services.
Q #32) Explain the actions performed by SOAPUI?

Answer: SOAPUI is an open-source, free, and cross-platform functional testing solution. Mentioned below are some actions performed by SOAPUI:

It can help create functional, security, and load-testing test suites.
Data-driven testing and scenario-based testing are also performed.
It can impersonate web services as well as built-in reporting abilities.
Interview Questions on Web Services Security
Q #33) What are the primary security issues of web services?

Answer: To ensure reliable transactions and secure confidential information, web services require a very high level of security, which can only be achieved through the Entrust Secure Transaction Platform.

Security issues for web services are broadly divided into three sections as described below:

Confidentiality: A single web service can have multiple applications, and its service path contains a potential weak link at its nodes. Whenever messages or XML requests are sent by the client along with the service path to the server, they must be encrypted. Thus, maintaining the confidentiality of communication is a must.
Authentication: Authentication is performed to verify the identity of the users as well as ensure that the user using the web service may use it or not. Authentication is also done to track the user’s activity. Several options can be considered for this purpose.
Application-level authentication
HTTP digest and HTTP basic authentication
Client certificates
Network Security: This is a serious issue that requires tools to filter web service traffic.
Q #34) What do you know about foundation security services?

Answer: Foundation security services comprise:

Integration
Authentication
Authorization
Digital Signatures
Encryption processes
Q #35) What is Entrust Identification Service?

Answer: Entrust Identification Service is categorized under Entrust Secure Transaction Platform, which provides essential security capabilities to ensure secure transactions. This usually allows companies to fully control the identities that are trusted to perform web service transactions.

Q #36) What is Entrust Entitlements Service?

Answer: Entrust Entitlement services are those whose task is to verify the services that are attempting to access the web services. It ensures security in business operations and some authentication services.

Q #37) What is Entrust Privacy Service?

Answer: As the name suggests, Entrust Privacy Service performs encryption of the data so that only concerned parties can access the data.

It deals with two factors:

Confidentiality
Security
WSDL Interview Questions
Q #38) Explain WSDL?

Answer: WSDL stands for Web Service Description Language. It is a simple XML document that comes under the Service Description layer of the Web Service Protocol Stock and describes the technical details or locates the user interface to the web service.

A few of the important information present in a WSDL document are

Method name
Port types
Service endpoint
Method parameters
Header information
Origin, etc
Q #39) What are the different elements of WSDL documents?

Answer: The different elements of the WSDL document, along with a brief description, are listed below:

Types: This defines the message data types, which are XML schemas, used by the web services.
Message: This defines the data elements for each operation, where messages could be the entire document or an argument that is to be mapped.
Port Type: There are multiple services present in the WSDL. Port type defines the collection of operations that can be performed for binding.
Binding: It determines and defines the protocol and data format for each port type.
Operations: This defines the operations performed for a message to process the message.
Q #40) Explain the message element in WSDL?

Answer: The message element describes the data that has been exchanged between the consumer and the web service providers. Every web service comprises two messages, and each message has zero or more <part> parameters.

The two messages are:

Input: Describes the parameters for the web service.
Output: Describes the return data from the web service.
Q #41) Enlist the operation types response used in WSDL?

Answer: WSDL defines 4 types of Operation-type responses.

These are listed below:

One-way: Receives a message but does not return a response.
Request-Response: Receives a request and returns a response.
Solicit-Response: Sends a request and waits for a response.
Notification: Sends a message but does not wait for a response.
Among these, Request-Response is the most common operation type.

Q #42) Is binding between SOAP and WSDL possible?

Answer: Yes, it is possible to bind WSDL to SOAP. The binding is possible through basically two attributes:

Name: Defines the name of the binding.
Type: Defines the port for the binding.
For SOAP binding, two attributes need to be declared

Transport: Defines the SOAP protocol to be used; i.e., HTTP.
Style: This attribute can be ‘rpc’ or ‘document’.
Q #43) Explain <definition> element?

Answer: The definition element is described as the root of WSDL document, which defines the name of the web service and acts as a container for all the other elements.

Q #44) What are the two attributes of <Port> element in WSDL?

Answer: Every port element is related to a specific binding by defining an individual endpoint. The port element has the following two attributes.

Name: This attribute provides the unique name within the WSDL document.
Binding: This attribute refers to the process of binding, which has to be performed as per the linking rules defined by WSDL.
Q #45) What are the points that ports should consider while binding?

Answer: WSDL allows extensibility elements that are used to specify binding information. Below are a few important points that should be kept in consideration while binding.

A port must not

Specify more than one address.
Specify any binding information other than address information.
Conclusion
This article contains all the commonly asked questions about web services. Although the topic is very vast, I have covered every section. This will help you in learning and answering web services-related topics.
