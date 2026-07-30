Home
Java 
Spring
Angular 
React 
Full Stack 
Apache Camel 
Cloud Frameworks 
Messaging
Drools 
Search Engine
MCQ's
DevOps
Webseries
Crypto Tools
Online Certifications
Privacy Policy




Search Tutorials


Spring Boot Interview Questions(2026)

In this post we will look at Spring Boot Interview questions. Examples are provided with explanation.
What is Spring Boot?
What are advantages of Spring Boot?
Which build tool have you used to develop Spring Boot Application?
What is JavaConfig?
How to reload my changes on Spring Boot without having to restart server?
What is Actuator in Spring Boot?
How to implement JWT authentication for Spring Boot Application?
How to deploy Spring Boot application as a WAR?
What is Docker? How to deploy Spring Boot Applications to Docker?
How to disable Actuator endpoint security in Spring Boot?
How to run Spring boot application to custom port?
What is ELK stack?How to use it with Spring Boot?
Have you written Test cases using Spring Boot?
What is YAML?
How to implement security for Spring boot application?
Have you integrated Spring Boot and ActiveMQ?
Have you integrated Spring Boot and Apache Kafka?
How to implement Pagination and Sorting with Spring Boot?
What is Swagger? Have you implemented it using Spring Boot?
What is Spring Profiles? How do you implement it using Spring Boot?
What is Spring Batch? How do you implement it using Spring Boot?
What is FreeMarker Template? How do you implement it using Spring Boot?
How to implement Exception Handling using Spring Boot?
What is caching? Have you used any caching framework with Spring Boot?
Have you exposed a SOAP webservice endpoint using Spring Boot?
How did you perform database operations using Spring Boot?
How to develop a full stack application using Spring Boot and Angular?
How to upload a file using Spring?
How to implement interceptors with Spring Boot?
Which all starter maven dependencies have you used?
What is CSRF attack? How to enable CSRF protection against it?
How to use Form Login Authentication using Spring Boot?
When will you use WebSockets? How to implement it using Spring Boot?
What is AOP? How to use it with Spring Boot?
What is Apache Kafka? How to integrate it with Spring Boot?
How can we monitor all the Spring Boot Microservices?
Have you used any Spring Cloud Components with Spring Boot?
How to deploy Spring Boot Application to Pivotal Cloud Foundry(PCF)?
How to deploy Spring Boot + MySQL Application to Pivotal Cloud Foundry(PCF)?
How to deploy Spring Boot + RabbitMQ Application to Pivotal Cloud Foundry(PCF)?
What is JWT ? How to implement it using Spring Boot Security?
How to implement distributed logging for microservices?
What is Hashicorp Valut? How to use it with microservices?
What is Spring Boot?
Over the years spring has become more and more complex as new functionalities have been added. Just visit the page-https://spring.io/projects and we will see all the spring projects we can use in our application for different functionalities. If one has to start a new spring project we have to add build path or add maven dependencies, configure application server, add spring configuration . So a lot of effort is required to start a new spring project as we have to currently do everything from scratch. Spring Boot is the solution to this problem. Spring boot has been built on top of existing spring framework. Using spring boot we avoid all the boilerplate code and configurations that we had to do previously. Spring boot thus helps us use the existing Spring functionalities more robustly and with minimum efforts.
More details and miscellaneous examples

What are advantages of Spring Boot?
The advantages of Spring Boot are
Reduce Developement, Testing time and efforts.
Use of JavaConfig helps avoid usage of XML.
Avoid lots of maven imports and the various version conflicts.
Provide Opinionated Development approach.
Quick start to development by providing defaults.
No Separate Web Server Needed.Which means that you no longer have to boot up Tomcat, Glassfish, or anything else.
Requires less configuration-Since there is no web.xml file. Simply add classes annotated with@Configuration and then you can add methods annotated with@Bean, and Spring will automagically load up the object and manage it like it always has. You can even add @Autowired to the bean method to have Spring autowire in dependencies needed for the bean.
Environment Based Configuration-Using these properties, you can pass into the application which environment you are using with:-Dspring.profiles.active={enviornment}. Spring will then load up the subsequent application properties file at (application-{environment}.properties) after loading up the main application properties file.


Which build tool have you used to develop Spring Boot Application?
Spring Boot application can be developed using Maven as well as Gradle.
Spring Boot application using Maven
Spring Boot application using Gradle

What is JavaConfig?
Spring JavaConfig is a product of the Spring community that provides a pure-Java approach to configuring the Spring IoC Container. It thus helps avoid using XML configurations. The advantages of using JavaConfig are
The advantages of JavaConfig are
Object-oriented configuration. Because configurations are defined as classes in JavaConfig, users can take full advantage of object-oriented features in Java. One configuration class may subclass another, overriding its @Bean methods, etc.
Reduced or eliminated XML configuration. The benefits of externalized configuration based on the principles of dependency injection have been proven. However, many developers would prefer not to switch back and forth between XML and Java. JavaConfig provides developers with a pure-Java approach to configuring the Spring container that is conceptually similar to XML configuration. It is technically possible to configure the container using only JavaConfig configuration classes, however in practice many have found it ideal to mix-and-match JavaConfig with XML.
Type-safe and refactoring-friendly. JavaConfig provides a type-safe approach to configuring the Spring container. Thanks to Java 5.0's support for generics, it is now possible to retrieve beans by type rather than by name, free of any casting or string-based lookups.
Added security configuration without xml using java config.
How to reload my changes on Spring Boot without having to restart server?
This can be achieved using DEV Tools. With this dependency any changes you save, the embedded tomcat will restart. Spring Boot has a Developer tools (DevTools) module which helps to improve the productivity of developers. One of the key challenge for the Java developers is to auto deploy the file changes to server and auto restart the server. Developers can reload changes on Spring Boot without having to restart my server. This will eliminates the need for manually deploying the changes every time. Spring Boot doesn’t have this feature when it has released it’s first version. This was a most requested features for the developers. The module DevTools does exactly what is needed for the developers. This module will be disabled in the production environment. It also provides H2-database console for better testing the application. The following dependency is used
			<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<optional>true</optional>
			</dependency> 
			
The DevTool dependency usage for autorestart and H2 DB console is illustrated in this example

What is Actuator in Spring Boot?
Spring boot actuator is one of the important feature in spring boot framework. Spring boot actuator helps you to access the current state of the running application in production environment. There are several metrics that has to be checked and monitored in the production environment. Even some external applications may be using those services to trigger the alert message to concerned person. Actuator module exposes set of REST endpoints that can be directly accessed as a HTTP URL to check the status.

How to implement JWT authentication for Spring Boot Application?
We will be implementing Spring Boot +JWT + MYSQL Hello World Example
JWT stands for JSON Web Token. JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. The client will need to authenticate with the server using the credentials only once. During this time the server validates the credentials and returns the client a JSON Web Token(JWT). For all future requests the client can authenticate itself to the server using this JSON Web Token(JWT) and so does not need to send the credentials like username and password.

How to deploy Spring Boot application as a WAR?
Spring Boot WAR Deployment

What is Docker? How to deploy Spring Boot Applications to Docker?
What is Docker
Deploying Spring Based WAR Application to Docker
Deploying Spring Based JAR Application to Docker

How to disable Actuator endpoint security in Spring Boot?
By default all sensitive HTTP endpoints are secured such that only users that have an ACTUATOR role may access them. Security is enforced using the standard HttpServletRequest.isUserInRole method.
We can disable security using -
management.security.enabled=false
It is suggested to disable security only if the actuator endpoints are accessed behind firewall.

How to run Spring boot application to custom port?
In order to run a spring boot application on a custom port you can specify the port in application.properties.
server.port=8090

What is ELK stack?How to use it with Spring Boot?
The ELK Stack consists of three open-source products - Elasticsearch, Logstash, and Kibana from Elastic.
Spring Boot microservice elk stack example
Elasticsearch is a NoSQL database that is based on the Lucene search engine.


Logstash is a log pipeline tool that accepts inputs from various sources, executes different transformations, and exports the data to various targets. It is a dynamic data collection pipeline with an extensible plugin ecosystem and strong Elasticsearch synergy
Kibana is a visualization UI layer that works on top of Elasticsearch.
These three projects are used together for log analysis in various environments. So Logstash collects and parses logs, Elastic search indexes and store this information while Kibana provides a UI layer that provide actionable insights.
Spring Boot + ELK stack

Have you written Test cases using Spring Boot?
Spring Boot provides the @SpringBootTest for writing Unit Test Cases
Spring Boot Unit Test Simple Example

What is YAML?
YAML is a human-readable data serialization language. It is commonly used for configuration files.
Compared to properties file, YAML file is much more structured and less confusing in case we want to add complex properties in the configuration file. As can be seen YAML has hierarchical configuration data.
Use YAML properties in Spring Boot
How to implement security for Spring boot application?
For Implementing security for Spring Boot we use the spring-boot-starter-security dependency and have to add the Security config. It requires very little code. Config class will have to extend WebSecurityConfigurerAdapter and override its methods.
Spring Boot Security example and explanation

Have you integrated Spring Boot and ActiveMQ?
For integrating Spring Boot and ActiveMQ we use the spring-boot-starter-activemq dependency
It requires very little configuration and no boilerplate code.
Spring Boot ActiveMQ explanation

Have you integrated Spring Boot and Apache Kafka?
For integrating Spring Boot and Apache Kafka we use the spring-kafka dependency.
Spring Boot + Apache Kafka Example

How to implement Pagination and Sorting with Spring Boot?
Using Spring Boot achieving pagination is very simple. Using the Spring Data-JPA this is achieved passing pageable org.springframework.data.domain.Pageable to the repository methods.
Spring Boot pagination explanation

What is Swagger? Have you implemented it using Spring Boot?
Swagger is widely used for visualizing APIs, and with Swagger UI it provides online sandbox for frontend developers. For the tutorial, we will use the Springfox implementation of the Swagger 2 specification. Swagger is a tool, a specification and a complete framework implementation for producing the visual representation of RESTful Web Services. It enables documentation to be updated at the same pace as the server. When properly defined via Swagger, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Thus Swagger removes the guesswork in calling the service.
Spring Boot + Swagger2

What is Spring Profiles? How do you implement it using Spring Boot?
Spring Profiles allows users to register beans depending on the profile(dev, test, prod etc). So when the application is running in DEVELOPMENT only certain beans can be loaded and when in PRODUCTION certain other beans can be loaded. Suppose our requirement is that the Swagger documentation be enabled only for the QA environment and disabled for all others. This can be done using Profiles. Spring Boot makes using Profiles very easy.
Spring Boot + profiles

What is Spring Batch? How do you implement it using Spring Boot?
Spring Boot Batch provides reusable functions that are essential in processing large volumes of records, including logging/tracing, transaction management, job processing statistics, job restart, skip, and resource management. It also provides more advanced technical services and features that will enable extremely high-volume and high performance batch jobs though optimization and partitioning techniques.Simple as well as complex, high-volume batch jobs can leverage the framework in a highly scalable manner to process significant volumes of information.
Spring Boot + Batch

What is FreeMarker Template? How do you implement it using Spring Boot?
FreeMarker is a Java-based Template Engine, originally focusing on dynamic web page generation with MVC software architecture. The major advantage of using Freemarker is the complete separation of the Presentation layer and the Business Layer. The Programmers can work on the application code while the designers can work on the html page design. Finally using freemarker these can then be combined to give the final output page.
Spring Boot + FreeMarker Example

How to implement Exception Handling using Spring Boot?
Spring provides a very useful way to handle exceptions using ControllerAdvice.
We will be implementing a ControlerAdvice class which will handle all exceptions thrown by the controller class.
Spring Boot Exception Handling

What is caching? Have you used any caching framework with Spring Boot?
A cache is an area of local memory that holds a copy of frequently accessed data that is otherwise expensive to get or compute. Have used Hazelcast for caching.
Spring Boot + Hazelcast Example

Have you exposed a SOAP webservice endpoint using Spring Boot?
Yes. Using Spring Boot exposed a web service to be consumed. Used Contract first approach to generate the classes from wsdl.
Spring Boot + SOAP Web Service Example

How did you perform database operations using Spring Boot?
Spring Boot Tutorial-Spring Data JPA
Spring Boot JDBC Example

How to develop a full stack application using Spring Boot and Angular?
In full stack application we expose the back end point to get the data. This data can then be used by any application or device as per the need. In future even if another front end device is to be used, there will not be much change and the new device will need to consume these end points.
Full Stack Application Example
The project architecture we will be developing is as follows-
Angular 7 and Spring Boot Application
Angular 7 + Spring Boot Tutorials
How to upload a file using Spring?
Spring Boot + File Upload Example
How to implement interceptors with Spring Boot?
Using Spring MVC HandlerInterceptor with Spring Boot

How to use schedulers with Spring Boot?
Spring Boot Task Scheduler Example

Which all starter maven dependencies have you used?
Have used different starter dependencies like spring-boot-starter-activemq dependency, spring-boot-starter-security dependency, spring-boot-starter-web dependency.
This helps in adding less number of dependencies and also in reducing version conficts.
Spring Boot Security example and explanation

What is CSRF attack? How to enable CSRF protection against it?
CSRF stands for Cross-Site Request Forgery. It is an attack that forces an end user to execute unwanted actions on a web application in which they are currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request.
Spring Boot Security - Enabling CSRF Protection

How to use Form Login Authentication using Spring Boot?
Spring Boot Form Security Login Hello World Example

What is OAuth2? How to implement it using Spring Boot?
Spring Boot + OAuth2 implementation

What is GZIP?How to implement it using Spring Boot?
gzip is a file format and a software application used for file compression and decompression.
Spring Boot + GZIP Compression

Have you used any integration framework with Spring Boot?
Have integrated Apache Camel with Spring Boot. Made use of Apache Camel Spring Boot starter dependency. Spring Boot +Apache Camel

What is Apache Freemarker? When to use it instead of JSP? How to integrate it with Spring Boot?
JSP is tailor made for Web pages, Freemarker template is a more generic templating language - it can be used to generate html, plain text, emails, etc.
Spring Boot + FreeMarker Example

When will you use WebSockets? How to implement it using Spring Boot?
WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.
Spring Boot Interview Questions
WebSocket are bi-directional - Using WebSocket either client or server can initiate sending a message.
WebSocket are Full Duplex - The client and server communication is independent of each other.
Single TCP connection - The initial connection is using HTTP, then this connection gets upgraded to a socket based connection. This single connection is then used for all the future communication
Light - The WebSocket message data exchange is much lighter compared to http.
Spring Boot + WebSockets Example

What is AOP? How to use it with Spring Boot?
During software development, functions that span multiple points of an application are called cross-cutting concerns. These cross-cutting concerns differ from the application’s main business logic. Hence ,separating these cross-cutting concerns from the business logic is where aspect-oriented programming (AOP) comes into picture.
Spring Boot + AOP Example

What is Apache Kafka? How to integrate it with Spring Boot?
Apache Kafka is a distributed publish-subscribe messaging system. It is a scalable, fault-tolerant, publish-subscribe messaging system which enables us to build distributed applications. It is an Apache Top Level project. Kafka is suitable for both offline and online message consumption.
Spring Boot + Apache Kafka Example

How can we monitor all the Spring Boot Microservices?
Spring Boot provides actuator endpoints to monitor metrics of individual microservices. These endpoints are very helpful for getting information about applications like if they are up, if their components like database etc are working good. But a major drawback or difficulty about using actuator enpoints is that we have to individually hit the enpoints for applications to know their status or health. Imagine microservices involving 50 applications, the admin will have to hit the actuator endpoints of all 50 applications. To help us deal with this situation, we will be using open source project located at https://github.com/codecentric/spring-boot-admin.
Built on top of Spring Boot Actuator, it provides a web UI to enable us visualize the metrics of multiple applications.
Spring Boot Admin

Have you used any Spring Cloud Components with Spring Boot?
Have used Spring Cloud components like Netflix Eureka for Service Registration,Ribbon for Load Balancing.
Spring Boot + Cloud Components
Spring Cloud interview Questions

How to deploy Spring Boot Application to Pivotal Cloud Foundry(PCF)?
Deploying Spring Boot Application to PCF

How to deploy Spring Boot + MySQL Application to Pivotal Cloud Foundry(PCF)?
Pivotal Cloud Foundry Tutorial - Deploying Spring Boot + MySQL Application to PCF

How to deploy Spring Boot + RabbitMQ Application to Pivotal Cloud Foundry(PCF)?
Pivotal Cloud Foundry Tutorial - Deploying Spring Boot + RabbitMQ Application to PCF

What is JWT ? How to implement it using Spring Boot Security?
For better understanding we will be developing the project in stages
Develop a Spring Boot Application to expose a Simple REST GET API with mapping /hello.
Configure Spring Security for JWT. Expose REST POST API with mapping /authenticate using which User will get a valid JSON Web Token. And then allow the user access to the api /hello only if it has a valid token
Spring Boot JWT Workflow
What is JWT(JSON Web Token)
Understanding JWT Structure
Spring Boot +JSON Web Token(JWT) Hello World Example

How to implement distributed logging for microservices?
Microservices architecture involve multiple services which interact with each other. So a functionality may involve call to multiple microservices. Usually for systems developed using Microservices architecture, there are many microservices involved. These microservices collaborate with each other.
Consider the following microservices-
sprcloud_6-1
If suppose during such calls there are some issues like exception has occurred. Or may be there are latency issues due to a particular service taking more than expected time. How do we identify where the issue is occurring. In regular project we would have used logging to analyze the logs to know more about occurred exceptions and also performance timing. But since microservices involves multiple services we cannot use regular logging. Each Service will be having its own separate logs. So we will need to go through the logs of each service. Also how do we correlate the logs to a request call chain i.e which logs of microservices are related to Request1, which are related to Request2. To resolve these issues we make use of Spring Cloud Sleuth and Zipkin
Spring Cloud Sleuth is used to generate and attach the trace id, span id to the logs so that these can then be used by tools like Zipkin and ELK for storage and analysis
Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in service architectures. Features include both the collection and lookup of this data.
Spring Cloud Tutorial - Distributed Log Tracing using Sleuth and Zipkin Example

What is Hashicorp Valut? How to use it with microservices?
Microservices architecture have multiple services which interact with each other and external resources like databases. They also need access to usernames and passwords to access these resources. Usually these credentials are stored in config properties. So each microservice will have its own copy of credentials. If any credentials change we will need to update the configurations in all microservices. We have previously discussed one solution to this problem is using Spring Cloud Config Native Server or Spring Cloud Config Git Server where common global properties which are repeated in all the microservices are usually stored.  But still storing the secrets in configuration file is a security concern. Above approach as 2 drawbacks-
No single point of Truth
Security risk of exposing the credentials
In this tutorial will be using Spring Cloud Config and Hashicorp Vault to manage secrets and protect sensitive data.
Spring Cloud Hashicorp Vault Tutorial
Hashicorp Vault is a platform to secure, store, and tightly control access to tokens, passwords, certificates, encryption keys for protecting sensitive data and other secrets in a dynamic infrastructure.
Using vault we will be retrieving the credentials from the vault key/value store.
Spring Cloud Tutorial - Secure Secrets using Spring Cloud Config + Vault Example


Top Spring Interview Questions for Freshers

Table of Contents

Practice Spring Interview Questions
1. Dependency injection mechanism
2. Creating custom annotations
3. Spring profiles usage
4. Transaction management example
5. Global exception handling
6. Pagination and sorting
7. Spring Boot starters
8. Spring Security role
9. Task scheduling example
10. RestController vs Controller
11. File upload handling
12. Aspect-Oriented Programming
13. Auto-configuration in Spring
14. MySQL integration steps
15. Properties file benefits
16. OAuth2 security configuration
17. Environment management
18. Spring Data JPA
19. Caching implementation
20. RESTful services creation
21. Bean scopes types
22. Custom filter usage
23. Internationalization implementation
24. Autowired functionality
25. Custom starter creation
26. REST method handling
27. Component and Scan
28. Custom exception handling
29. Prototype in Singleton
30. File download handling
31. Custom validator creation
32. Scheduled tasks
33. Transactional use example
34. JSON response handling
35. One-to-many relationship
36. Actuator endpoint
37. Async processing
38. RestTemplate configuration
39. Content negotiation
40. H2 database configuration
41. CriteriaBuilder query
42. Event handling
43. SQL statement logging
44. Multiple data sources
45. Validation handling
46. Interceptor implementation
47. Custom authentication provider
48. RestControllerAdvice usage
49. WebClient configuration
50. Custom Jackson serializer
27 February, 2025 (Last Updated)
Top Spring Interview Questions for Freshers
Top Spring Interview Questions for Freshers Are you preparing for your first Spring interview and wondering what questions you might face?Understanding the key Spring interview questions for freshers can give you more clarity.With this guide, you’ll be well-prepared to tackle these Spring interview questions and answers for freshers and make a strong impression in your interview.fsd student program banner horizontal
Practice Spring Interview Questions and Answers
Below are the top 50 Spring interview questions for freshers with answers:
1. How does Spring’s Dependency Injection work, and how would you use it to decouple your application?
Answer:Dependency Injection (DI) in Spring is a design pattern that removes the need for hard-coded dependencies, allowing objects to be injected at runtime. You can use constructor injection, setter injection, or field injection. For example, to decouple a service from its data access layer, you can inject a repository interface into the service rather than creating an instance of the repository class.
2. Explain how to create a custom annotation in Spring and its practical use case.
Answer:A custom annotation in Spring can be created using @Target, @Retention, and @Documented annotations. For instance, you might create an annotation @LogExecutionTime to measure and log the execution time of methods. This can be applied to methods in a service class, and an Aspect can be written to handle the logging.
3. What is the significance of Spring Profiles, and how would you implement them in a multi-environment application?
Answer:Spring Profiles allow you to segregate parts of your application configuration and make it available only in certain environments. For example, you might have separate profiles for dev, test, and prod. You can activate a profile using @Profile annotation or through configuration files like application-dev.properties.
4. How would you implement transaction management in Spring? Provide an example.
Answer:Spring provides declarative transaction management through the @Transactional annotation. You can annotate your service methods with @Transactional, and Spring will handle the transaction boundaries. For example, @Transactional on a method ensures that the method’s operations are executed within a transaction.
5. Describe how to handle exceptions globally in a Spring Boot application.
Answer:You can handle exceptions globally in Spring Boot using @ControllerAdvice and @ExceptionHandler. Create a class annotated with @ControllerAdvice and define methods annotated with @ExceptionHandler to catch and handle specific exceptions globally across the application.
6. How would you implement pagination and sorting in a Spring Boot REST API?
Answer:You can implement pagination and sorting using Spring Data JPA’s Pageable interface. By passing a Pageable object to a repository method, you can easily paginate and sort the results. The client can control the page size and sorting order via query parameters.
7. What are Spring Boot Starters, and how do they simplify the development process?
Answer:Spring Boot Starters are a set of convenient dependency descriptors you can include in your application. They provide a ready-to-use set of dependencies for specific functionalities like web, data access, security, etc. For example, adding spring-boot-starter-web brings in all necessary dependencies to build a web application.
8. Explain the role of Spring Security in a web application and how to implement JWT-based authentication.
Answer:Spring Security is a powerful authentication and access-control framework. To implement JWT-based authentication, you can configure Spring Security to intercept and validate JWT tokens in the Authorization header. You would typically use a filter to extract and validate the token and set the authentication context accordingly.
9. How can you schedule tasks in Spring? Provide a practical example.
Answer:Tasks can be scheduled in Spring using the @Scheduled annotation. You can define methods to run at fixed intervals or cron expressions. For example, you might have a method annotated with @Scheduled(fixedRate = 5000) to execute every 5 seconds.
10. Describe how to use Spring’s @RestController and @Controller annotations.
Answer:@RestController is a specialized version of @Controller, which combines @Controller and @ResponseBody. It is used to create RESTful web services. @Controller is used in MVC applications to return views. For RESTful APIs, @RestController is preferred as it directly returns the response body in JSON or XML format.
11. How would you handle file uploads in a Spring Boot application?
Answer:File uploads can be handled using the MultipartFile interface. In a Spring Boot REST controller, you can define a method that accepts a MultipartFile parameter and saves the file to a server location.
12. Explain the concept of Aspect-Oriented Programming (AOP) in Spring and provide an example use case.
Answer:AOP in Spring allows you to define cross-cutting concerns like logging, security, and transaction management separately from the business logic. For example, you can create an aspect for logging method execution time using @Around advice.
13. What is Spring Boot Auto-Configuration and how does it work?
Answer:Spring Boot Auto-Configuration attempts to automatically configure your Spring application based on the dependencies present in the classpath. It uses conditional annotations like @ConditionalOnClass and @ConditionalOnMissingBean to apply configurations only when necessary.
14. How do you integrate a Spring Boot application with a MySQL database?
Answer:To integrate with MySQL, include the MySQL JDBC driver dependency and configure the database connection details in application.properties. Use Spring Data JPA to interact with the database using repositories, and Spring Boot will handle the setup.
15. What are the benefits of using Spring Boot’s application.properties or application.yml for configuration?
Answer:application.properties and application.yml provide a centralized way to manage application configurations. This allows for easy management of environment-specific settings, externalizing configuration from the codebase, and ensuring consistency across different environments.
16. Explain how to secure a Spring Boot application with OAuth2.
Answer:Securing a Spring Boot application with OAuth2 involves configuring Spring Security to use OAuth2 as the authentication protocol. You can use the spring-boot-starter-oauth2-client dependency and configure OAuth2 providers like Google or GitHub in your application.
17. How do you manage different environments in a Spring Boot application?
Answer:Managing different environments can be done using Spring Profiles. You can create separate configuration files for each environment, such as application-dev.properties and application-prod.properties, and activate them using the spring.profiles.active property.
18. What is Spring Data JPA, and how does it simplify database interactions?
Answer:Spring Data JPA is a part of the larger Spring Data family, making it easier to work with JPA-based data access layers. It abstracts boilerplate code for data access, provides CRUD operations, and allows you to create custom queries using method names.
19. How would you implement a caching mechanism in a Spring application?
Answer:Caching in Spring can be implemented using @EnableCaching and @Cacheable. You can annotate methods with @Cacheable to store their results in a cache. When the method is called again with the same parameters, the cached result is returned instead of executing the method.
20. Explain the concept of RESTful web services and how Spring facilitates their creation.
Answer:RESTful web services follow the principles of REST architecture, focusing on stateless communication and using standard HTTP methods. Spring facilitates the creation of RESTful services using @RestController and @RequestMapping, allowing easy mapping of HTTP requests to handler methods.
21. What are the different types of bean scopes in Spring, and how would you use them?
Answer:Spring supports several bean scopes, including singleton, prototype, request, session, and globalSession. singleton is the default, where a single instance is created. prototype creates a new instance every time. Scopes like request and session are used in web applications for request and session-specific beans.
22. How would you implement a custom filter in Spring Boot?
Answer:A custom filter can be implemented by creating a class that implements the Filter interface and overriding the doFilter method. You can then register this filter using the @Component annotation or by defining a FilterRegistrationBean in a configuration class.
23. Explain how to implement internationalization (i18n) in a Spring Boot application.
Answer:Internationalization in Spring Boot can be achieved by configuring message sources and using the @MessageSource annotation. You create separate property files for each language (e.g., messages_en.properties, messages_fr.properties) and inject messages using the MessageSource bean.
24. What is the use of @Autowired and how does it work in Spring?
Answer:@Autowired is used for automatic dependency injection in Spring. It can be applied to constructors, setters, or fields. Spring’s IoC container automatically injects the required beans into the annotated field or method based on the type.
25. How do you create a custom Spring Boot starter?
Answer:A custom Spring Boot starter can be created by setting up a new Maven or Gradle project, adding necessary dependencies, and creating an @Configuration class that auto-configures beans.
26. How would you implement a REST controller that handles both GET and POST requests in Spring Boot? Provide an example.
Answer:You can implement a REST controller using the @RestController annotation. For handling GET and POST requests, you can use @GetMapping and @PostMapping.
@RestController
@RequestMapping(“/api”)
public class MyController { @GetMapping(“/greet”)
public String greet() {
return “Hello, World!”;
} @PostMapping(“/create”)
public ResponseEntity<String> create(@RequestBody MyEntity entity) {
// logic to save entity
return ResponseEntity.ok(“Entity created successfully”);
}
}
27. How do you use @Component and @ComponentScan annotations in Spring? Provide an example.
Answer:@Component is used to mark a class as a Spring-managed bean, and @ComponentScan is used to specify the packages to scan for components.
@Component
public class MyService {
public void performTask() {
System.out.println(“Task performed”);
}
} @SpringBootApplication
@ComponentScan(basePackages = “com.example.myapp”)
public class MyApplication {
public static void main(String[] args) {
SpringApplication.run(MyApplication.class, args);
}
}
28. How would you implement a custom exception and exception handler in Spring Boot? Provide a code example.
Answer:You can create a custom exception class and use @ControllerAdvice to handle exceptions globally.
public class CustomException extends RuntimeException {
public CustomException(String message) {
super(message);
}
} @ControllerAdvice
public class GlobalExceptionHandler { @ExceptionHandler(CustomException.class)
public ResponseEntity<String> handleCustomException(CustomException ex) {
return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
}
}
29. How do you inject a prototype bean into a singleton bean in Spring? Show with code.
Answer:You can inject a prototype bean into a singleton bean using the @Scope(“prototype”) annotation and ObjectFactory or Provider.
@Component
@Scope(“prototype”)
public class PrototypeBean {
public void showMessage() {
System.out.println(“Prototype Bean”);
}
} @Component
public class SingletonBean { private final ObjectFactory<PrototypeBean> prototypeBeanFactory; @Autowired
public SingletonBean(ObjectFactory<PrototypeBean> prototypeBeanFactory) {
this.prototypeBeanFactory = prototypeBeanFactory;
} public void execute() {
PrototypeBean prototypeBean = prototypeBeanFactory.getObject();
prototypeBean.showMessage();
}
}
30. How would you handle file downloads in a Spring Boot application? Provide an example.
Answer:File downloads can be handled by returning a ResponseEntity with the file’s content as a ByteArrayResource.
@RestController
@RequestMapping(“/files”)
public class FileController { @GetMapping(“/download/{filename}”)
public ResponseEntity<Resource> downloadFile(@PathVariable String filename) {
File file = new File(“/path/to/files/” + filename);
ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(file.toPath())); return ResponseEntity.ok()
.header(HttpHeaders.CONTENT_DISPOSITION, “attachment;filename=” + file.getName())
.contentLength(file.length())
.body(resource);
}
}
31. How do you create and use a custom Spring Boot validator? Provide a code snippet.
Answer:You can create a custom validator by implementing the ConstraintValidator interface and use @Valid in your controller.
@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = MyValidator.class)
public @interface ValidName {
String message() default “Invalid name”;
Class<?>[] groups() default {};
Class<? extends Payload>[] payload() default {};
} public class MyValidator implements ConstraintValidator<ValidName, String> {
@Override
public boolean isValid(String value, ConstraintValidatorContext context) {
return value != null && value.matches(“[A-Za-z]+”);
}
} public class User {
@ValidName
private String name; // getters and setters
} @RestController
@RequestMapping(“/users”)
public class UserController { @PostMapping(“/create”)
public ResponseEntity<String> createUser(@Valid @RequestBody User user) {
return ResponseEntity.ok(“User is valid”);
}
}
32. How would you use Spring’s @Scheduled to run a task at a fixed rate? Include a code example.
Answer:Use the @Scheduled annotation with the fixedRate attribute.
@Component
public class ScheduledTask { @Scheduled(fixedRate = 5000)
public void performTask() {
System.out.println(“Task executed at fixed rate”);
}
}
33. Explain how to use @Transactional in Spring with an example.
Answer:@Transactional is used to manage transactions at the method level.
@Service
public class MyService { @Autowired
private MyRepository repository; @Transactional
public void saveData(MyEntity entity) {
repository.save(entity);
// Additional operations
}
}
34. How do you handle JSON responses in a Spring Boot REST controller? Provide a code snippet.
Answer:JSON responses are handled automatically by Spring Boot with @RestController, which converts the return object to JSON.
@RestController
@RequestMapping(“/api”)
public class JsonController { @GetMapping(“/data”)
public MyData getData() {
MyData data = new MyData();
data.setId(1);
data.setName(“Sample Data”);
return data;
}
} public class MyData {
private int id;
private String name;
// getters and setters
}
35. How would you implement a one-to-many relationship in Spring Data JPA? Include a code example.
Answer:You can implement a one-to-many relationship using @OneToMany and @ManyToOne annotations.
@Entity
public class ParentEntity { @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id; @OneToMany(mappedBy = “parent”)
private List<ChildEntity> children; // getters and setters
} @Entity
public class ChildEntity { @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id; @ManyToOne
@JoinColumn(name = “parent_id”)
private ParentEntity parent; // getters and setters
}
36. How do you implement and configure a Spring Boot actuator endpoint? Provide an example.
Answer:You can create a custom actuator endpoint by implementing the Endpoint interface.
@Component
@Endpoint(id = “custom”)
public class CustomEndpoint { @ReadOperation
public String customEndpoint() {
return “Custom actuator endpoint”;
}
}
37. Explain how to use Spring’s @Async for asynchronous processing with an example.
Answer:@Async can be used to run methods asynchronously.
@Service
public class AsyncService { @Async
public void performAsyncTask() {
System.out.println(“Task running asynchronously”);
}
} @SpringBootApplication
@EnableAsync
public class MyApplication {
public static void main(String[] args) {
SpringApplication.run(MyApplication.class, args);
}
}
38. How would you configure and use a RestTemplate in Spring Boot? Provide a code example.
Answer:RestTemplate is used to make HTTP requests.
@Bean
public RestTemplate restTemplate() {
return new RestTemplate();
} @Service
public class MyService { @Autowired
private RestTemplate restTemplate; public String getDataFromExternalApi() {
return restTemplate.getForObject(“https://api.example.com/data”, String.class);
}
}
39. How do you implement content negotiation in Spring Boot? Show with code.
Answer:Content negotiation is implemented using @RequestMapping and setting produces.
@RestController
@RequestMapping(“/api”)
public class ContentNegotiationController { @GetMapping(value = “/data”, produces = MediaType.APPLICATION_JSON_VALUE)
public MyData getDataAsJson() {
return new MyData(1, “JSON Data”);
} @GetMapping(value = “/data”, produces = MediaType.APPLICATION_XML_VALUE)
public MyData getDataAsXml() {
return new MyData(1, “XML Data”);
}
}
40. How would you configure a Spring Boot application to use a H2 in-memory database? Provide an example.
Answer:Add the H2 dependency and configure it in application.properties.
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.h2.console.enabled=true
@Entity
public class MyEntity { @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String name; // getters and setters
} @Repository
public interface MyRepository extends JpaRepository<MyEntity, Long> {
}
41. How do you create a dynamic query using CriteriaBuilder in Spring Data JPA? Provide a code example.
Answer:CriteriaBuilder is used to create dynamic queries.
@Repository
public class MyRepositoryCustomImpl implements MyRepositoryCustom { @PersistenceContext
private EntityManager entityManager; @Override
public List<MyEntity> findByCriteria(String name) {
CriteriaBuilder cb = entityManager.getCriteriaBuilder();
CriteriaQuery<MyEntity> query = cb.createQuery(MyEntity.class);
Root<MyEntity> root = query.from(MyEntity.class);
query.select(root).where(cb.equal(root.get(“name”), name)); return entityManager.createQuery(query).getResultList();
}
}
42. How would you implement event handling in Spring? Include a code example.
Answer:Event handling in Spring can be done using ApplicationEventPublisher.
@Component
public class MyEventListener { @EventListener
public void handleCustomEvent(CustomEvent event) {
System.out.println(“Received event: ” + event.getMessage());
}
} public class CustomEvent extends ApplicationEvent {
private String message; public CustomEvent(Object source, String message) {
super(source);
this.message = message;
} public String getMessage() {
return message;
}
} @Service
public class MyService { @Autowired
private ApplicationEventPublisher eventPublisher; public void publishEvent(String message) {
eventPublisher.publishEvent(new CustomEvent(this, message));
}
}
43. How would you configure a Spring Boot application to log SQL statements? Provide a code example.
Answer:SQL logging can be enabled by setting properties in application.properties.
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
44. How do you configure multiple data sources in a Spring Boot application? Provide an example.
Answer:You can configure multiple data sources by defining multiple DataSource beans and marking one as @Primary.
@Bean(name = “primaryDataSource”)
@ConfigurationProperties(prefix = “spring.datasource.primary”)
@Primary
public DataSource primaryDataSource() {
return DataSourceBuilder.create().build();
} @Bean(name = “secondaryDataSource”)
@ConfigurationProperties(prefix = “spring.datasource.secondary”)
public DataSource secondaryDataSource() {
return DataSourceBuilder.create().build();
}
45. How do you handle validation in a Spring Boot application? Show with code.
Answer:Validation can be handled using @Valid and @NotNull, @Size, etc.
public class User { @NotNull
@Size(min = 2, max = 30)
private String name; @Email
private String email; // getters and setters
} @RestController
@RequestMapping(“/users”)
public class UserController { @PostMapping(“/create”)
public ResponseEntity<String> createUser(@Valid @RequestBody User user) {
return ResponseEntity.ok(“User is valid”);
}
}
46. How would you implement and use an Interceptor in Spring Boot? Provide a code example.
Answer:An Interceptor can be implemented by extending HandlerInterceptorAdapter.
@Component
public class MyInterceptor extends HandlerInterceptorAdapter { @Override
public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
throws Exception {
System.out.println(“Request URL: ” + request.getRequestURL());
return true;
}
} @Configuration
public class WebConfig implements WebMvcConfigurer { @Autowired
private MyInterceptor myInterceptor; @Override
public void addInterceptors(InterceptorRegistry registry) {
registry.addInterceptor(myInterceptor);
}
}
47. How do you implement a custom authentication provider in Spring Security? Provide a code example.
Answer:Implement AuthenticationProvider and override authenticate and supports.
@Component
public class MyAuthenticationProvider implements AuthenticationProvider { @Override
public Authentication authenticate(Authentication authentication) throws AuthenticationException {
String username = authentication.getName();
String password = authentication.getCredentials().toString(); // Custom authentication logic
if (“user”.equals(username) && “password”.equals(password)) {
return new UsernamePasswordAuthenticationToken(username, password, new ArrayList<>());
} else {
throw new BadCredentialsException(“Invalid credentials”);
}
} @Override
public boolean supports(Class<?> authentication) {
return authentication.equals(UsernamePasswordAuthenticationToken.class);
}
} @Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter { @Autowired
private MyAuthenticationProvider authProvider; @Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
auth.authenticationProvider(authProvider);
}
}
48. How would you implement @RestControllerAdvice in a Spring Boot application? Include an example.
Answer:@RestControllerAdvice can be used to handle exceptions globally across all @RestControllers.
@RestControllerAdvice
public class GlobalExceptionHandler { @ExceptionHandler(Exception.class)
public ResponseEntity<String> handleException(Exception ex) {
return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
}
}
49. How do you configure and use Spring Boot’s WebClient? Provide a code example.
Answer:WebClient is a non-blocking, reactive HTTP client.
@Bean
public WebClient.Builder webClientBuilder() {
return WebClient.builder();
} @Service
public class MyService { @Autowired
private WebClient.Builder webClientBuilder; public String getDataFromApi() {
return webClientBuilder.build()
.get()
.uri(“https://api.example.com/data”)
.retrieve()
.bodyToMono(String.class)
.block();
}
}
50. How would you implement a custom Jackson serializer in a Spring Boot application? Provide an example.
Answer:Implement JsonSerializer and register it with SimpleModule.
public class CustomDateSerializer extends JsonSerializer<Date> { @Override
public void serialize(Date date, JsonGenerator gen, SerializerProvider serializers) throws IOException {
SimpleDateFormat formatter = new SimpleDateFormat(“yyyy-MM-dd”);
String formattedDate = formatter.format(date);
gen.writeString(formattedDate);
}
} @Configuration
public class JacksonConfig { @Bean
public Jackson2ObjectMapperBuilderCustomizer customizer() {
return builder -> {
SimpleModule module = new SimpleModule();
module.addSerializer(Date.class, new CustomDateSerializer());
builder.modules(module);
};
}
}
Final Words
Getting ready for an interview can feel overwhelming, but going through these Spring fresher interview questions can help you feel more confident.
With the right preparation, you’ll ace your Spring interview but don’t forget to practice the Spring core concepts, dependency injection, and Spring Boot-related interview questions too.
Explore More Interview Questions
Python
Java
SQL
React
JavaScript
C Programming
HTML
CSS
Angular
C++
Spring Boot
Node JS
Excel
C#
DBMS
PHP
Linux
Operating System
MySQL
FAQs
The most common interview questions for Spring often cover topics like dependency injection, Spring MVC, Spring Boot, and transaction management.
add-one add-two
Author
Aarthy R

Aarthy is a passionate technical writer with diverse experience in web development, Web 3.0, AI, ML, and technical documentation. She has won over six national-level hackathons and blogathons. Additionally, she mentors students across communities, simplifying complex tech concepts for learners.

instagram-icon
linkedin-icon
Subscribe
Related Posts
Top Spring Interview Questions for Freshers
July 3, 2026
Interview Questions
Top Prompt Engineering Interview Questions for Freshers
Prompt engineering is now a practical AI skill for freshers entering software, data, content, product, marketing, and automation roles. Reports show …

Top Spring Interview Questions for Freshers
July 3, 2026
Interview Questions
AI Engineer Interview Questions and Answers
AI engineering has become one of the most in-demand career paths for freshers and professionals entering software, data, automation, and …

Top Spring Interview Questions for Freshers
July 3, 2026
Interview Questions
Top Jenkins Interview Questions for Freshers
Jenkins is an important CI/CD tool for freshers preparing for DevOps, software testing, automation, cloud, and backend development roles. It …


Placement Preparation Logo
an HCL GUVI product

Every student has their own story. Find the guidance and resources you need to make learning fun and smart. Let's shape a future that feels right for you


Что такое Spring Framework? 
 
Spring Framework – это платформа приложений с открытым исходным кодом, написанная на Java. Он предназначен для упрощения проектирования приложений за счет автоматической обработки низкоуровневых функций. Это позволяет разработчикам сосредоточиться на бизнес-логике. Spring также очень легко адаптируется со многими модулями, которые расширяют возможности фреймворка.
 

Хотя Spring не навязывает конкретную модель программирования, она приобрела широкую популярность в сообществе Java в качестве дополнения к корпоративной модели JavaBeans (EJB). Отчасти это связано с уникальным набором функций Spring, таких как инверсия управления и аспектно-ориентированное программирование (AOП), которые отлично подходят для работы с компонентами.

 

Платформа особенно подходит для корпоративных и финансовых приложений благодаря своей скорости, безопасности и простоте построения транзакционных систем. Фреймворк Spring обладает многими преимуществами по сравнению с Java EE или другими фреймворками на основе Java, такими как:

 

• Spring позволяет разрабатывать приложения корпоративного уровня с помощью POJOs, поэтому вам не нужен другой продукт-контейнер EJB.

• Spring предлагает согласованный, масштабируемый интерфейс управления транзакциями как для локальных транзакций, так и для глобальных транзакций.

• Spring организована по модульной схеме. Его веб-фреймворк представляет собой легкий веб-фреймворк MVC.

• Spring инновационно использует уже существующие технологии, такие как фреймворки ORM, таймеры JEE и JDK.

• С помощью Spring легко протестировать приложение.

• Spring предоставляет отличный API, поэтому легко работать с технологическими исключениями.

 

Большинство компаний, которым нужна экспертиза Spring Framework, - это финансовые компании, такие как банки и инвестиционные фирмы. Эти компании заинтересованы в использовании Spring для обеспечения безопасности и оптимизации своего бухгалтерского учета и продаж. Поэтому большинство вопросов для интервью будут проверять ваши знания об этих функциях, таких как внедрение зависимостей, аспектно-ориентированное программирование и MVC.

 

При устройстве на должность разработчика Spring, вам, безусловно, будут заданы всеобъемлющие вопросы о том, почему используется Spring и какие преимущества он предлагает. Чтобы помочь вам подготовиться, мы собрали 33 лучших вопросов для собеседования, чтобы освежить ваши знания по каждой из этих категорий.

 

Давайте начнем

 
Топ вопросов для собеседования по Spring Framework:
 
1. В чем преимущества Spring?
• Spring является легким в использовании ресурсов, при этом базовая структура Spring весит всего 2 МБ памяти.

• Масштабируемость: интерфейс управления транзакциями Spring может масштабироваться как до локальной транзакции в одной базе данных, так и до глобальных транзакций с помощью модуля JTA

• Обработка исключений: Обработка исключений проста благодаря многочисленным ресурсам API для обработки исключений в каждом модуле.

• Многоуровневая архитектура: Позволяет использовать нужные части программы и отказаться от остальных.

• Включено POJO: Простое старое объектное программирование на Java обеспечивает непрерывную тестируемость и интеграцию.

• С открытым исходным кодом: Бесплатно для всех и без блокировки поставщика.

• Инверсия управления (IOC): Достигается свободная связь через IOC, позволяя объектам передавать свои зависимости другим объектам, а не зависимым объектам.

• Аспектно-ориентированный (AOP): Spring поддерживает аспектно-ориентированное программирование, парадигму, которая отделяет бизнес-логику приложений от системных служб.

 

2. Что такое файл конфигурации для Spring?
Файл конфигурации для Spring представляет собой XML-файл, содержащий информацию о классе для проекта. Они описывают конфигурацию каждого класса, то, как они представлены другим классам, и зависимости во всей программе.

 

3. Каковы различные модули Spring Framework?
Всего существует около 20 модулей, которые разделены на уровни Основного контейнера, Доступа к данным/интеграции, интернета, AOP (Аспектно-ориентированное программирование), Инструментария и тестирования.

 

Контейнер для Core: Ядро Spring Framework содержит четыре модуля.

• Spring Core

• Spring Bean

• SpEL (Spring Expression Language)

• Spring Context

Доступ к данным/интеграция: Поддерживает взаимодействие с базой данных с помощью пяти модулей.

• JDBC (Подключение к базе данных Java)

• ORM (Объектно-реляционное сопоставление)

• OXM (Объектные XML-картографы)

• JMS (Служба обмена сообщениями Java)

• Транзакия

Веб: Добавлена поддержка создания веб-приложения с использованием 4 модулей.

Web

• Web — MVC

• Web — MVC

• Web — Socket

• Web — Portlet

Аспектно-ориентированное программирование: Этот уровень позволяет отделять код с помощью функций рекомендаций и точечных вырезов.

Инструментирование: Этот уровень добавляет поддержку инструментирования классов и реализаций загрузчика классов.

Тест: Добавлена поддержка тестирования с использованием Junit и TestNG.

Разное: За пределами этих категорий слоев существуют два модуля.

• Аспекты: Позволяет Spring интегрироваться с аспектом.

• Обмен сообщениями: Добавлена поддержка STOMP, модели программирования аннотаций, и позволяет направлять сообщения STOMP от клиентов WebSocket.

 

4. Каковы различные компоненты приложения Spring?
Приложения Spring содержат пять компонентов:

1. Интерфейс: Определяет функции программы.

2. Класс компонента: Содержит свойства, методы настройки и получения для доступа к компоненту, а также определенные функции и т.д.

3. Spring Аспектно-ориентированное программирование (AOP): Включает в себя сквозные функциональные возможности, которые не поддерживаются в объектно-ориентированном программировании.

4. Файл конфигурации компонента: Содержит информацию о классах, способах их настройки и определяет их взаимосвязи.

5. Пользовательская программа: Вызывает функции по всей программе

 

5. Что такое внедрение зависимостей?
Внедрение зависимостей (DI) - это концепция, которая определяет, как должно быть связано несколько классов. Это один из примеров Инверсии контроля. Вам не нужно явно подключать службы и компоненты в коде при использовании внедрения зависимостей. Вместо этого вы описываете службы, необходимые каждому компоненту, в файле конфигурации XML и разрешаете контейнеру IOC автоматически подключать их.




 

6. Что такое Spring IoK контейнер?
Контейнер IoC создает, настраивает и соединяет объекты, одновременно управляя их жизненным циклом. Контейнер получает инструкции по этим областям из метаданных конфигурации, предоставленных пользователем.

 

7. Каковы типы IoK?
• Контейнер BeanFactory: Этот заводской класс содержит предварительно упакованную коллекцию компонентов, которые создаются при вызове клиентами. Это самый простой контейнер для поддержки DI.

• Контейнер ApplicationContext: Построенный поверх контейнера BeanFactory, этот контейнер обеспечивает дополнительные функциональные возможности, ориентированные на предприятие. Например, контейнеры ApplicationContext предоставляют возможность разрешать текстовые сообщения и публиковать события приложения.

 

8. Что такое Аспектно-ориентированное программирование (AOП)?
AOП-это метод программирования, который позволяет программистам модулировать поведение, используемое в типичных подразделениях ответственности, используемых в объектно-ориентированном программировании. Основная конструкция аспектов AOП – это поведение, применимое к разным классам. Извлечение этих моделей поведения из отдельных компонентов в аспекты позволяет легко использовать их повторно.

 

9. Что такое Spring Bean?
Это объекты, созданные из метаданных конфигурации при их передаче в контейнер IOC. Они составляют основу всех Spring. Контейнер IOC создает экземпляры, настраивает, подключает и управляет каждым компонентом.

 

10. Каковы общие реализации ApplicationContext?
Тремя наиболее популярными контейнерами являются:

1. Файловая система xmlapplicationcontext: Заставляет конструктор загружать определения компонентов из файла конфигурации XML. На него должен быть указан полный путь к файлу.

2. ClassPathXmlApplicationContext: Этот контейнер выполняет то же самое, что и выше, но не требует полного пути к файлу. Вместо этого вы устанавливаете свойство CLASSPATH и позволяете контейнеру находить XML по этому CLASSPATH.

3. WebXmlApplicationContext: Загружает все определения компонентов в веб-приложение из XML-файла.

 

11. В чем разница между BeanFactory и ApplicationContext?
BeanFactory – это базовый, компактный контейнер с ограниченной функциональностью. Его лучше всего использовать для простых задач или при использовании машин с низким ресурсом.

 

ApplicationContext – это расширенный, более интенсивный контейнер с расширенным интерфейсом и дополнительными возможностями, такими как AOP. Этот контейнер лучше всего использовать, когда вам требуется больше функциональности, чем на заводе Bean, и у вас достаточно ресурсов, доступных на машине.

 

12. Как вы добавляете компонент в Spring?
Мы должны аннотировать метод: @Bean аннотация. Когда JavaConfig встретит этот метод, он выполнит этот метод и зарегистрирует возвращаемое значение в качестве компонента в BeanFactory.

package io.educative; 

public class User { 

private String name; 
private String address; 

public String getName() { 
return name; 
} 
public void setName(String name) { 
this.name = name; 
} 
public String getAddress() { 
return address; 
} 
public void setAddress(String address) { 
this.address = address; 
} 
}

 

 

13. Какие области Beans поддерживает Spring?
Spring поддерживает пять областей bean

1. Синглтон: ограничивает определение компонента одним экземпляром для каждого контейнера Spring IoC.

2. Прототип: Охватывает один компонент для включения любого количества экземпляров.

3. Запрос: Ограничивает определение компонента одним HTTP-запросом в контексте приложения.

4. Сессия: Область определения компонента для сеанса HTTP в контексте приложения.

5. Глобальная сессия: Расширяет определение компонента до глобального HTTP

 

14. Каковы этапы жизненного цикла компонента?
Жизненный цикл компонента состоит из семи этапов:

1.       Создать экземпляр: Компонент создается контейнером Spring с использованием определения компонента, найденного в файле конфигурации XML.

2.       Заполнение свойств: Spring заполняет все определенные свойства из XML-файла с помощью внедрения зависимостей.

3.       Установить имя компонента: Spring передает идентификатор компонента методу setBeanName (), если компонент использует интерфейс BeanNameAware.

4.       Установить baen factory: Spring передает beanfactory методу setBeanFactory (), если компонент настроен на использование интерфейса BeanFactoryAware.

5.       Предварительная инициализация: Spring вызывает любые BeanPostProcessors, связанные с компонентом, с помощью метода postProcessorBeforeInitialization ().

6.       Инициализация: Затем инициализируется компонент. Выполняется любой специальный процесс инициализации, указанный в методе инициализации.

7.       Постинициализация: Вызываются все определенные методы postProcessAfterInitialization (). Теперь bean завершен. Компоненты, реализующие DisposableBean, будут удалены с помощью функции destroy() после завершения их работы.






 15. Объясните внутреннюю часть bean в Spring
Внутренний компонент используется как свойство другого компонента. Внутренние компоненты могут быть определены в XML-файле конфигурации либо в элементах <property>, либо <constructor-arg> Все внутренние компоненты всегда имеют область действия как prototype и не имеют идентификаторов.

 

16. Что такое автоматическая проводка bean?
Это функция Spring, которая позволяет контейнеру Spring автоматически устанавливать отношения зависимостей между сотрудничающими компонентами, просматривая BeanFactory. Автоматическая проводка может быть настроена для определения этих отношений с использованием имен компонентов, типов или даже конструкторов классов.

 

17. Как вы можете внедрить коллекции Java в Spring?
Коллекции Java могут быть введены четырьмя различными способами:

<list>: Помогает вам передавать наборы значений, такие как списки, разрешая при этом дубликаты.

<set>: Помогает связать набор значений, избегая при этом дублирования.

<map>: Позволяет вводить коллекцию пар ключ-значение любого типа данных.

<props>: Позволяет вводить коллекцию пар ключ-значение как с ключами, так и со значениями типа String.

 

18. Что такое Joinpoint?
Joinpoint представляют собой любую точку в программе, в которой выполняется действие. Примеры Joinpoint включают в себя обработку исключения или выполнение метода. При использовании AOП только выполнение метода является точками соединения.

 

19. Что такое Advice в Spring?
Advice – это действие, предпринятое в данной точке соединения. AOП использует Advice в качестве перехватчика до завершения выполнения метода.

 

20. Каковы типы рекомендаций для структуры Spring?
До: Это советы, которые выполняются до методов joinpoint. Они помечены знаком @before.

После возврата: они выполняются после того, как метод joinpoint завершит выполнение без проблем. Они помечены знаком аннотации @AfterReturning.

После выполнения: Они выполняются только в том случае, если метод joinnpoint заканчивается созданием исключения. Они помечены с помощью метки аннотации @AfterThrowing.

После: Они выполняются после метода joinpoint, независимо от того, как он завершается. Они помечены знаком @After.

Вокруг: Они выполняются до и после точки соединения и помечаются с помощью метки @Around аннотации.

 

21. Что такое Weaving?
Weaving Spring – это процесс связывания элементов с другими типами приложений или объектами для создания рекомендуемых объектов.

 

22. Опишите поддержку Spring DAO
Поддержка объектов доступа к данным (DAO) - это набор инструментов, которые упрощают работу с технологиями доступа к данным, такими как Hibernate и JDO, с улучшенной согласованностью. Он также автоматически улавливает технологические ошибки. Вместе они облегчают работу с DAOS и позволяют без ошибок переключаться между технологиями сохранения.

 
23. Что такое JDBC? Какие классы присутствуют в API Spring JDBC?
JDBC означает подключение к базе данных Java. Это интерфейс прикладного программирования на Java, используемый для определения способа доступа программы к базе данных. API JDBC содержит:

• JdbcTemplate

• NamedParameterJdbcTemplate

• SimpleJdbcCall

• SimpleJdbcInsert

• SimpleJdbcTemplate

 

24. Что такое платформа Spring Model-View-Controller (MVC)?
Платформа Spring MVC предоставляет архитектуру контроллера представления модели и готовые компоненты, используемые для разработки слабо связанных веб-приложений. Используя MVC, вы можете разделить различные аспекты программы, такие как бизнес, логика ввода и пользовательский интерфейс, сохраняя при этом слабую связь между ними. Это обеспечивает большую гибкость в ваших веб-приложениях.






25. Каковы части фреймворка Spring MVC?
Тремя основными частями MVC являются:

• DispatcherServlet: Эта часть MVC управляет всеми HTTP-запросами и ответами, которые взаимодействуют с программой. DispatcherServlet сначала получает соответствующее сопоставление обработчика из файла конфигурации, а затем передает запрос контроллеру. DispatcherServlet является наиболее важной частью платформы Spring Web MVC.

• WebApplicationContext: Это действует как расширение обычного ApplicationContext с дополнительными функциями, необходимыми для веб-приложений. Он может однозначно разрешать темы и автоматически определять, с каким сервлетом он связан.

• Контроллеры: Это компоненты в DispatcherServlet, которые действуют как фильтры между вводом данных пользователем и ответом приложения. Контроллеры принимают ввод пользователя, решают, следует ли преобразовать его в Представление или Модель, и, наконец, возвращают преобразованный ввод в Распознаватель представлений для просмотра.

 

26. Каковы различные части DispatcherServlet?
Сопоставление обработчика: интерфейс, определяющий сопоставление между обработчиком и объектами запроса. Может использоваться для создания пользовательской стратегии сопоставления.

 

Контроллер: Определяет реакцию приложения на ввод данных пользователем путем сортировки запросов на ввод по желаемому результату. Входные данные либо немедленно возвращаются с представлением, либо преобразуются в Модель перед передачей в распознаватель представлений.

Распознаватель представлений: Принимает и отображает модели с контроллера путем сопоставления имен представлений и фактических представлений.

 

27. Как можно включить проводку аннотаций в Spring?
Чтобы разрешить подключение аннотаций, включите <context:annotation-config/> в свой файл конфигурации XML:

 

<beans 
//... 
xmlns:context="http://www.springframework.org/schema/context" 
//... 
http://www.springframework.org/schema/context 
http://www.springframework.org/schema/context/spring-context-2.5.xsd"> 
//... 

<context:annotation-config /> //annotation wiring enabled here 
//... 
</beans>

 

28. Что такое Spring Boot?
Spring Boot – это Java-фреймворк с открытым исходным кодом, используемый для создания микросервисов. Это проект, построенный на основе Spring, чтобы упростить задачу развертывания приложений Java. Его двумя основными компонентами являются Spring Framework и встроенные HTTP-серверы. 

 

Spring Boot используется для:

• Упрощение процесса разработки готовых к производству пружинных приложений

• Избегания конфигурации XML Spring

• Сокращения времени разработки за счет уменьшения количества необходимых инструкций по импорту

• Обеспечения взвешенного подхода к развитию

 

Часто используются для быстрого запуска приложений Spring.




29. Что такое Реактивное программирование?
Реактивное программирование – это парадигма программирования, которая основывается на запрограммированных действиях, запускаемых в связи с событиями, а не на хронологическом порядке кода. Реактивные программы эффективно используют компьютерные ресурсы и хорошо масштабируются всего несколькими потоками. Его непоследовательная форма позволяет избежать блокировки стека и поддерживать оперативность реагирования.




 

30. Что такое Spring webflux?
Webflux – это реактивный веб-фреймворк, который служит альтернативой MVC. Webflux обеспечивает лучшую масштабируемость и предотвращает блокировку стека.




 

31. В чем разница между веб-клиентом и клиентом веб-тестирования?
WebClient – это компонент платформы Web Reactive, который упрощает создание реактивных и неблокирующих веб-приложений.

 

Webtestclient является версией этого клиента со всеми теми же функциями, но отключен от реальных сред. Тестовому клиенту для работы не требуется живая среда HTTP-сервера, что делает его хорошей средой тестирования для новых приложений. Он может подключаться к любому серверу по HTTP-соединению или напрямую синхронизироваться с WebFlux для применения фиктивных HTTP-запросов и создания объектов ответа.

 

32. Может ли Spring Boot разрешить Spring MVC или Spring Web Flux в одном и том же приложении?
Загрузка позволяет использовать и то, и другое в одном приложении, но может применяться только по одному за раз. Web Flux-это неблокирующая структура, в то время как MVC-это блокирующая структура, что делает их несовместимыми друг с другом.

 

33. Может ли Spring 5 интегрироваться с модульностью Jdk9?
Да, Spring 5 может интегрироваться с Jdk9. Вот как вы можете это сделать:

Создайте новый класс

package com.hello; 
public class HelloWorld { 
public String sayHello(){ 
return "HelloWorld"; 
} 
}

 

Создайте новый модуль

module com.hello { 
export com.hello; 
}

 

Создайте новый Java проект

module com.hello.client { 
requires com.hello; 
}

 

Протестируйте новый модуль

public class HelloWorldClient { 
public static void main(String[] args){ 
HelloWorld helloWorld = new HelloWorld(); 
log.info(helloWorld.sayHello()); 
} 
}


70 вопросов и ответов на собеседовании по Spring Boot (2026)
Автор:
Джеймс ХартманДжеймс Хартман
обновлено
9 октября 2024

Добавить Guru99 на Google
вопросы для интервью по весенней загрузке

Когда я готовился к собеседованиям по Spring Boot, я понял, насколько важно иметь под рукой правильный набор вопросов и ответов. Это руководство предлагает именно это. Полный список распространенных вопросов для собеседований по Spring Boot, который поможет вам чувствовать себя уверенно и подготовленным. Независимо от того, новичок вы или опытный разработчик, погружение в эти Вопросы и ответы на интервью Spring Boot повысит вашу готовность и даст вам необходимое преимущество.
Содержание:

Вопросы для собеседования по Spring Boot для первокурсников
1) Объясните термин «Spring Boot».
Это модуль Spring, который предлагает быструю разработку приложений для среды Spring. Модуль Spring используется для создания приложения на основе среды Spring, для которого требуется настроить несколько файлов Spring.

👉 Скачать бесплатно PDF-файл: Вопросы и ответы для интервью Spring Boot >>

2) Упомяните некоторые преимущества Spring Boot.
Вот некоторые основные преимущества использования Spring-Boot:

Помогает вам создать автономное приложение, которое можно запустить с помощью java.jar.
Он предлагает точно определенные «запущенные» POM для конфигурации Maven.
Позволяет напрямую встраивать Undertow, Tomcat или Jetty.
Помогает вам настроить Spring, когда это возможно, автоматически.
Вопросы на собеседовании Spring Boot

3) Как создать приложение Spring Boot с помощью Spring Initializer?
Это веб-инструмент, предоставленный Spring на его официальном сайте. Однако вы также можете создать проект Spring Boot, введя сведения о проекте.

4) Назовите особенности использования Spring Boot
Особенности использования Spring Boot:

Стартовая зависимость
Автоконфигурация
Инициализатор Spring
5) Объясните различные этапы модели RAD.
Это часто задаваемое собеседование. Различные фазы режима RAD:

Бизнес-моделирование: На основе потока информации и ее распределения между различными бизнес-каналами создается продукт.
Моделирование данных: Информация, собранная в результате бизнес-моделирования, преобразуется в набор объектов данных, значимых для бизнеса.
Генерация приложения: Для создания программного обеспечения используются автоматизированные инструменты для преобразования моделей процессов и данных в прототипы.
6) Что такое модель RAD?
RAD Процесс быстрой разработки приложений (Rapid Application Development) — это адаптация каскадной модели; он ориентирован на разработку...ping Разработка программного обеспечения в короткие сроки. RAD использует итеративный подход.

Модель SDLC RAD состоит из следующих этапов:

Бизнес-моделирование
Моделирование данных
Моделирование процессов
Генерация приложений
Тестирование и оборот
Схема модели RAD

7) Каковы команды для запуска и остановки исполняемого файла jar Spring Boot?
Вам нужно открыть команду cmd или оболочки окна и использовать

java -jar
Пример

$ java -jar myproject-0.0.1-SNAPSHOT.jar
Чтобы остановить, используйте Ctrl+C

СТАТЬИ ПО ТЕМЕ
Язык выражений в JSP
Загрузка и выгрузка файла JSP
Что такое Maven Java (Archiтекстура)
20 лучших вопросов и ответов на собеседовании Maven (2026 г.)
8) Как изменить версию JDK в Spring Boot?
Чтобы изменить версию JDK в Spring Boot, вы можете перезаписать ее, добавив файл java. Тег свойства версии, как указано:

1.8
9) Каков процесс, который необходимо выполнить для запуска приложения Spring Boot на специальном порту?
Чтобы запустить приложение Spring Boot, вам необходимо поместить свойства server.port в application.properties. Например, server.port=8050.

10) Что такое стартер Spring Boot? Насколько это полезно?
Spring Boot имеет много стартов. Они представляют собой набор удобных дескрипторов зависимостей. Starter позволяет вам включать эти дескрипторы в ваш pom.xml.

Например, если вы хотите работать с Spring MVC, вы можете включить «spring-boot-starter-web» в качестве зависимости в pom.xml.

11) Можете ли вы использовать Spring Boot с приложениями, которые не используют Spring?
Нет, это невозможно, поскольку Spring Boot ограничен только приложением Spring.

12) Как называется файл конфигурации, который можно использовать в Spring Boot?
Файл конфигурации, используемый в проектах Spring Boot, называется application.properties. Это важный файл, который позволяет вам переопределить настройки по умолчанию.

13) Что такое DevTools в Spring Boot?
Spring Boot DevTools помогает повысить производительность разработчика. Таким образом, вам не потребуется повторно развертывать приложение каждый раз, когда вы вносите изменения. Это позволяет разработчику перезагрузить изменения без необходимости перезапуска сервера.

14) Каковы важные особенности Spring Boot?
Важными особенностями Spring Boot являются:

Разработка сайтов
Весеннее приложение
Случаи применения и слушатели
Основные моменты администратора
Поддержка YAML
Типобезопасная конфигурация
Внешняя конфигурация
Файлы свойств
Логирование и безопасность
15) Каковы основные компоненты Spring Boot?
Важными компонентами Spring Boot являются:

Стартер весенней загрузки
Автоконфигурация Spring Boot
Привод пружинной загрузки
Интерфейс командной строки Spring Boot
16) Как определяются свойства? Где?
Вы можете определить свойства в файле application.properties, который находится в пути к классам.

Пример: настроить bean-компонент DataSource по умолчанию

база данных.хост = локальный хост

17) Что такое весна-загрузка-стартер-родитель?
Это специальная закваска, которая делает Gradle or Специалист Легко управлять зависимостями, добавляя jar-файлы в путь к классам.

18) Как включить поддержку HTTP/2 в Spring Boot?
Пользователь может включить поддержку HTTP/2, используя

server.http2.enabled configuration property.
19) Что такое пружинный привод?
Spring Boot Actuator позволяет вам отслеживать и управлять вашим приложением, когда вы хотите запустить его в производство. Это помогает вам контролировать ваше приложение с помощью конечных точек HTTP.

20) Какова команда для запуска приложения Spring Boot на специальном порту?
В application.properties добавьте следующее свойство.

server.port = 8181
21) Как получить доступ к значению, определенному в приложении? Что такое файл свойств в Spring Boot?
Используйте аннотацию @Value для доступа к свойствам, определенным в файле свойств приложения.

@Value("${custom.value}")

private String customVal;
22) В чем основная разница между Spring и Spring Boot?
Spring — это среда разработки веб-приложений, основанная на Java. С другой стороны, Spring Boot — это расширение платформы Spring, которое устранило стандартную конфигурацию, необходимую для установки приложения Spring.

23) Объясните администратора Spring Boot
Spring Boot admin — это проект сообщества, который помогает вам управлять и контролировать ваши приложения Spring Boot.

24) Как подключить Spring Boot к базе данных с помощью JPA?
Spring Boot поддерживает запуск Spring-boot-data-JPA, который помогает вам подключить приложение Spring к реляционной базе данных.

25) Объясните аннотацию @RestController в Spring Boot?
Аннотация @RestController помогает добавить в класс аннотации @ResponseBody и @Controller.

Вы также можете импортировать пакет org.springframework.web.bind.annotation в свой файл.

26) Определите термин Spring Initializer.
Spring инициализатор — это веб-приложение, которое может создать для вас исходную структуру проекта.

27) Объясните Spring CLI
Spring CLI используется для записи в Groovy Приложение Spring Boot, которое помогает упростить код.

28) Где вы можете определить свойства в приложении Spring Boot?
Вы можете определить свойства Spring Boot в файле application.properties. Это поможет вам создать этот файл вручную или вы можете использовать Spring Initializer для создания этого файла.

29) Что такое поддержка встроенных контейнеров в Spring?
Spring Boot поддерживает три основных встроенных контейнера:

1) Кот

2) Пристань

3) Подводное течение.

По умолчанию он использует Tomcat в качестве встроенного контейнера.

30) Объясните тимелеаф в Spring Boot
Тимелаф — серверная часть Java шаблонизатор для веб-приложения. Это поможет вам добавить в ваше веб-приложение элегантные естественные шаблоны.

31) Каковы свойства Spring Boot?
Spring Boot предлагает различные свойства, которые можно указать внутри файла application.properties нашего проекта. Это поможет вам установить такие значения, как номер порта сервера, конфигурацию подключения к базе данных и т. д.

Вопросы для собеседования по Spring Boot для опытных
32) В чем основная разница между JPA и Hibernate?
Основное различие между ними заключается в том, что JPA — это спецификация/интерфейс, тогда как Hibernate — это только реализации JPA.

33) Что такое отключение в электроприводе?
Завершение работы — это конечная точка, которая помогает корректному завершению работы приложения. Эта функция не включена по умолчанию.

Однако вы можете использовать его, установив команду: Management.endpoint.shutdown.enabled=true в файле application.properties.

34) Можно ли заменить или переопределить встроенный сервер Tomcat в Spring Boot?
Да, встроенный Tomcat можно заменить любыми другими серверами, используя стартовые зависимости. Для этого вы можете использовать Spring-Boot-Starter-Jetty или в качестве зависимости в соответствии с вашими потребностями.

35) Можете ли вы отключить веб-сервер по умолчанию в приложении Spring Boot?
Да, мы можем отключить веб-сервер по умолчанию, используя application.properties для настройки типа веб-приложения.

36) Как добавить фильтр в приложение?
Существует три способа добавить фильтр в приложение Spring Boot:

Путем реализации интерфейса фильтра.
Использование FilterRegistrationBean.
Использование контроллера MVC.
37) Что такое стартовые проекты Spring Boot?
Стартеры в Spring Boot — это набор удобных дескрипторов, которые включены в приложения Spring Boot. Он поставляется с различными технологиями, связанными с Spring, которые значительно облегчают весь процесс разработки приложений.

38) Что такое @pathVariable?
Аннотация `@PathVariable` помогает вам, например,tract информация непосредственно из URI.

39) Что такое Swagger2?
Swagger используется для описания структуры API. Swagger 2 — это служба с открытым исходным кодом, предоставляемая в Spring Boot, которая облегчает машинам определение структуры API-интерфейсов, таких как веб-службы RESTful.

40) Какие существуют среды для разработки корпоративных приложений?
Дев
QA
Этап
Постановка
41) В чем основные различия между RequestMap?ping и GetMapping?
RequestMapping Его можно использовать с методами запросов GET, POST, PUT и многими другими, используя атрибут method в аннотации. В то время как GetMapping является лишь расширением RequestMap.pingчто помогает повысить ясность запросов.

42) Как определить свойства в Spring Boot?
Вы можете определить свойства в Spring Boot с помощью файла application.properties, который существует в пути к классам приложения, следующим образом.

43) Как создать проект Spring Boot с помощью Maven?
Для создания проекта используйте любой из следующих методов.

Весенний инициализр
Интерфейс командной строки Spring Boot
Мастер стартового проекта Spring
44) Какая польза от профилей в Spring Boot?
Профили используются для разделения различных частей конфигурации вашего приложения Spring и делают его доступным только в определенных средах.

45) Как изменить HTTP-порт Tomcat?
Чтобы изменить HTTP-порт tomcat, вам необходимо изменить свойство HTTP по умолчанию в файле application.properties.

46) Что такое LiveReload в Spring Boot?
LiveReload — это модуль Spring-Boot-devtools, который включает сервер LiveReload для запуска обновления браузера при изменении ресурса. Серверные расширения LiveReload доступны бесплатно для Firefox, Chrome и Safari.

47) Каковы основные преимущества внешней конфигурации Spring?
Внешняя конфигурация помогает работать с одним и тем же кодом в разных средах. Разработчики могут использовать файлы YAML, файлы свойств, аргументы командной строки и переменные среды для внешнего представления конфигурации.

48) Что вы подразумеваете под "горячей заменой"?ping в Spring Boot?
Это способ перезагрузить изменения без перезапуска сервера Tomcat или Jetty. Eclipse Многие другие IDE поддерживают горячую замену байт-кода.pingЕсли вы внесете какие-либо изменения, не затрагивающие сигнатуру метода, он должен перезагрузиться без побочных эффектов.

49) Объясните автоматическую настройку в Spring Boot.
Автоконфигурация используется для автоматической настройки приложения Spring на основе зависимостей параметра classpath. Это делает разработку быстрее и проще.

50) В чем смысл аспектно-ориентированного программирования (АОП)?
Аспектно-ориентированное программирование дополняет объектно-ориентированное программирование, целью которого является повышение модульности. АОП разбивает логику программы на различные части, которые называются проблемами.

51) Как включить ведение журнала в Spring Boot?
Чтобы включить ведение журнала отладки, вы можете указать –debug при запуске приложения из командной строки.

52) Объясните переопределение свойств по умолчанию в приложении Spring Boot.
Spring Boot имеет множество свойств, которые можно легко переопределить, указав их в application.properties.

Вопросы для собеседования по Spring Boot за 5 лет опыта
53) Объясните Docker в Spring Boot.
Это инструмент, предназначенный для создания, развертывания и запуска проекта с использованием контейнеров.

54) Определите стек ELK.
Стек ELK состоит из трех продуктов с открытым исходным кодом: 1) Elasticsearch, 2) Logstashи 3) Кибана.

Эластичный поиск: Кокаин проходит NoSQL База данных, основанная на поисковой системе с открытым исходным кодом Lucene.
Logstash: Это инструмент конвейерной обработки данных, который принимает входные данные из источников, выполняет различные преобразования и экспортирует данные в целевые объекты.
Кибана: Kibana помогает пользователям визуализировать данные с помощью графиков и диаграмм в Elasticsearch.
55) Как обрабатывать исключения в Spring Boot.
Spring Boot предоставляет очень полезный способ обработки исключений с помощью аннотации @ControllerAdvice.

56) Объясните кэширование.
Кэширование — это память, в которой временно хранятся часто используемые данные, получение или вычисление которых в противном случае было бы дорогостоящим.

57) Что такое атака с подделкой межсайтовых запросов?
Атака межсайтовой подделки запросов или атака одним щелчком мыши — это атака, которая заставляет других пользователей выполнять вредоносные команды в приложении. Атака CSRF специально нацелена на запросы изменения состояния.

58) Определите apache freemarker.
Фримаркер – это Java-шаблон, используемый для генерации простого текста, электронных писем, HTML-файлов и т. д.

59) Что подразумевается под весенней партией?
Spring Boot Batch обеспечивает повторное использование кода, что важно при работе с большим количеством записей, включая управление транзакциями, логирование и пропуск записей.pingстатистика обработки заданий и перезапуск заданий.

60) Объясните Apache Kafka.
Apache Kafka — это платформа обмена сообщениями с открытым исходным кодом. LinkedIn его разрабатывает. Apache Kafka позволяет пользователю создавать распределенные приложения и обрабатывать потоки данных в реальном времени. Kafka подходит как для оффлайн, так и для онлайн-обмена сообщениями.

61) Объясните CORS в Spring Boot?
CORS означает совместное использование ресурсов между источниками — это механизм, реализованный браузерами и помогающий пользователям авторизовать междоменные запросы. Этот механизм служит альтернативой менее безопасным и менее мощным хакам типа IFrame или JSONP.

Вопросы для собеседования по Spring Boot для 10-летнего опыта
62) Объясните различные типы внедрения зависимостей.
В Spring Boot существует два типа внедрения зависимостей. Они заключаются в следующем:

Внедрение зависимостей на основе конструктора: Это метод, при котором один объект класса предоставляет зависимость другому объекту.
Внедрение зависимостей на основе сеттера: Это внедрение зависимостей, при котором платформа внедряет примитивные и строковые значения с помощью метода установки.
63) Каковы преимущества микросервиса?
Ниже приведены основные преимущества микросервиса:

Это делает разработку быстрой и легкой.
Совместим со всеми контейнерами.
Сократить время производства.
Это облегченная модель, поддерживающая основные бизнес-приложения.
64) Какой пакет по умолчанию используется в Spring Boot?
Класс без объявления пакета считается пакетом по умолчанию.

65) Объясните разницу между встроенным контейнером и WAR.
Основное различие между этими двумя заключается в следующем:

Встроенные контейнеры помогают запускать приложение Spring Boot в виде JAR-файла из командной строки без настройки веб-сервера, а для запуска WAR необходимо сначала настроить Tomcat.

66) Объясните Spring MVC.
Это традиционная среда веб-приложений, которая помогает вам создавать веб-приложения. Этот фреймворк похож на фреймворк Struts.

67) Какая польза от ярлык?
Этот тег используется для записи и внедрения набора Java с использованием XML.

68) Что вы подразумеваете под аспектом?
Это набор API, который обеспечивает сквозные требования.

69) Что такое точка соединения в Spring Boot?
Это точка выполнения программы, такая как обработка исключения или выполнение метода. В АОП точка соединения называется выполнением метода.

70) Как установить активный профиль в Spring Boot?
Следуйте следующим методам, чтобы установить активный профиль в Spring Boot.

Передайте этот профиль в качестве аргумента при запуске приложения Spring Boot.
Установите активный активный профиль в файле application.properties.
71) Возможно ли исключение пакета без использования фильтра basePackages? Как?
Да. Можно исключить пакет без использования фильтра basePackages, просто используя атрибут исключения при использовании аннотации @SpringBootApplication.

72) Перечислите преимущества использования JavaМетод конфигурации.
Ниже приведены преимущества JavaМетод конфигурации.

Пользователь может воспользоваться объектно-ориентированной конфигурацией.
Конфигурация Spring Boot повышает эффективность веб-приложений за счет устранения сложной конфигурации XML.
Java Вопросы на собеседовании Spring Boot
73) Объясните шаги по развертыванию приложения на виртуальной машине.
Ниже приведены шаги по развертыванию приложения на виртуальной машине.

Установите Java.
Установите сервер приложений.
Разверните файл войны приложения.
74) Перечислите некоторые стартеры Spring Boot.
Различные стартеры Spring Boot следующие:


Table of Contents
A.Spring overview
B.Dependency Injection
C.Spring Beans
D.Spring Annotations
E.Spring Data Access
F.Spring Aspect Oriented Programming (AOP)
G.Spring Model View Controller (MVC)
H.Authentication and authorization

A.Spring overview
1. What is Spring?
Spring is an open source development framework for Enterprise Java. The core features of the Spring Framework can be used in developing any Java application, but there are extensions for building web applications on top of the Java EE platform. Spring framework targets to make Java EE development easier to use and promote good programming practice by enabling a POJO-based programming model.

2. What are benefits of Spring Framework?
Lightweight: Spring is lightweight when it comes to size and transparency. The basic version of spring framework is around 2MB.
Inversion of control (IOC): Loose coupling is achieved in Spring, with the Inversion of Control technique. The objects give their dependencies instead of creating or looking for dependent objects.
Aspect oriented (AOP): Spring supports Aspect oriented programming and separates application business logic from system services.
Container: Spring contains and manages the life cycle and configuration of application objects.
MVC Framework: Spring’s web framework is a well-designed web MVC framework, which provides a great alternative to web frameworks.
Transaction Management: Spring provides a consistent transaction management interface that can scale down to a local transaction and scale up to global transactions (JTA).
Exception Handling: Spring provides a convenient API to translate technology-specific exceptions (thrown by JDBC, Hibernate, or JDO) into consistent, unchecked exceptions.
3. Which are the Spring framework modules?
There are around 20 modules which are generalized into Core Container, Data Access/Integration, Web, AOP (Aspect Oriented Programming), Instrumentation and Test. The basic modules of the Spring framework are :

Spring Core Container

This layer is basically the core of Spring Framework. It contains the following modules:

Core module
Bean module
Context module
Expression Language module
Data Access/Integration

This layer provides support to interact with the database. It contains the following modules:

JDBC module
Object-Relational Mapping (ORM) module
Java Messaging Service (JMS) module
Object XML Mappers (OXM) module
Transaction Management module
Web

This layer provides support to create web application. It contains the following modules:

Web module
Web-MVC module
Web-Socket module
Web-Portlet module
Aspect Oriented Programming (AOP)

In this layer you can use Advices, Pointcuts etc., to decouple the code.
Instrumentation – This layer provides support to class instrumentation and classloader implementations.

Test

This layer provides support to testing with JUnit and TestNG.

Messaging

This module provides support for STOMP. It also supports an annotation programming model that is used for routing and processing STOMP messages from WebSocket clients.

Aspects

This module provides support to integration with AspectJ.

4. Explain the Core Container (Application context) module
This is the basic Spring module, which provides the fundamental functionality of the Spring framework. BeanFactory is the heart of any spring-based application. Spring framework was built on the top of this module, which makes the Spring container.

5. BeanFactory implementation example
A BeanFactory is an implementation of the factory pattern that applies Inversion of Control to separate the application’s configuration and dependencies from the actual application code.

The most commonly used BeanFactory implementation is the XmlBeanFactory class.

6. XMLBeanFactory
The most useful one is org.springframework.beans.factory.xml.XmlBeanFactory, which loads its beans based on the definitions contained in an XML file. This container reads the configuration metadata from an XML file and uses it to create a fully configured system or application.

7. Explain the AOP module
The AOP module is used for developing aspects for our Spring-enabled application. Much of the support has been provided by the AOP Alliance in order to ensure the interoperability between Spring and other AOP frameworks. This module also introduces metadata programming to Spring.

8. Explain the JDBC abstraction and DAO module
With the JDBC abstraction and DAO module we can be sure that we keep up the database code clean and simple, and prevent problems that result from a failure to close database resources. It provides a layer of meaningful exceptions on top of the error messages given by several database servers. It also makes use of Spring’s AOP module to provide transaction management services for objects in a Spring application.

9. Explain the object/relational mapping integration module
Spring also supports for using of an object/relational mapping (ORM) tool over straight JDBC by providing the ORM module. Spring provides support to tie into several popular ORM frameworks, including Hibernate, JDO, and iBATIS SQL Maps. Spring’s transaction management supports each of these ORM frameworks as well as JDBC.

10. Explain the web module
The Spring web module is built on the application context module, providing a context that is appropriate for web-based applications. This module also contains support for several web-oriented tasks such as transparently handling multipart requests for file uploads and programmatic binding of request parameters to your business objects. It also contains integration support with Jakarta Struts.

11. Explain the Spring MVC module
MVC framework is provided by Spring for building web applications. Spring can easily be integrated with other MVC frameworks, but Spring’s MVC framework is a better choice, since it uses IoC to provide for a clean separation of controller logic from business objects. With Spring MVC you can declaratively bind request parameters to your business objects.

12. Spring configuration file
Spring configuration file is an XML file. This file contains the classes information and describes how these classes are configured and introduced to each other.

13. How can we have multiple Spring configuration files?
web.xml contextConfigLocation: you can load them all into your Web application context via the ContextConfigLocation element. You’re already going to have your primary applicationContext here, assuming you’re writing a web application. All you need to do is put some white space between the declaration of the next context.
applicationContext.xml import resource: you can add your primary applicationContext.xml to the web.xml and then use import statements in that primary context.
14. What are the common implementations of the ApplicationContext?
The FileSystemXmlApplicationContext container loads the definitions of the beans from an XML file. The full path of the XML bean configuration file must be provided to the constructor.
The ClassPathXmlApplicationContext container also loads the definitions of the beans from an XML file. Here, you need to set CLASSPATH properly because this container will look bean configuration XML file in CLASSPATH.
The WebXmlApplicationContext: container loads the XML file with definitions of all beans from within a web application.
15. What is the difference between Bean Factory and ApplicationContext?
Application contexts provide a means for resolving text messages, a generic way to load file resources (such as images), they can publish events to beans that are registered as listeners. In addition, operations on the container or beans in the container, which have to be handled in a programmatic fashion with a bean factory, can be handled declaratively in an application context. The application context implements MessageSource, an interface used to obtain localized messages, with the actual implementation being pluggable.

16. What are some of the best practices for Spring Framework?
Some of the best practices for Spring Framework are:

Define singleton beans with names same as their class or interface names
Place Spring bean configuration files under a folder instead of root folder
Give common prefixes or suffixes to Spring bean configuration files
Avoid using import elements within Spring XML configuration files as much as possible
Stay away from auto wiring in XML based bean configurations
Always externalize bean property values with property placeholders
Select default version-less XSD when importing namespace definitions
Always place classpath prefix in resource paths
Create a setter method even though you use field level auto wiring
Create a separate service layer even though service methods barely delegate their responsibilities to corresponding DAO methods
17. What are the various ways of using Spring Framework?
You can use Spring Framework:

for writing web applications
for exposing RESTful services
to secure your web applications
for communicating with databases
for handling long running jobs
to handle external resources or systems you have to work with
for testing purposes
for standalone java projects
to convert your application into an executable
to integrate Social Media into your applications
18. How can we use Spring to create Restful Web Service returning JSON response?
Any Spring @RestController in a Spring Boot application should render JSON response by default as long as Jackson2 is on the classpath.

19. Spring vs Spring MVC vs Spring Boot?
Spring: the most important feature of Spring is Dependency Injection or Inversion of Control.
Spring MVC: is a complete HTTP oriented MVC framework managed by the Spring Framework and based in Servlets. It would be equivalent to JSF in the JavaEE stack.
Spring Boot: is a utility for setting up applications quickly, offering an out of the box configuration in order to build Spring powered applications.
20. What does a Spring application look like?
Interface: An interface that defines the functions.
Bean class: It contains properties, its setter and getter methods, functions etc.
Spring AOP: Provides the functionality of cross-cutting concerns.
The configuration XML file: Contains the information of classes and how to configure them.
The Client program: uses the function.

B.Dependency Injection
21. What is Spring IoC container?
The Spring IoC is responsible for creating the objects,managing them with dependency injection (DI), wiring them together, configuring them, as also managing their complete lifecycle.

22. What are the benefits of IOC?
IOC or dependency injection minimizes the amount of code in an application.
It makes easy to test applications, since no singletons or JNDI lookup mechanisms are required in unit tests.
Loose coupling is promoted with minimal effort and least intrusive mechanism.
IOC containers support eager instantiation and lazy loading of services.
23. How many types of IOC containers are there in spring?
BeanFactory: A BeanFactory is essentially nothing more than the interface for an advanced factory capable of maintaining a registry of different beans and their dependencies. The BeanFactory enables you to read bean definitions and access them using the bean factory.
ApplicationContext: The ApplicationContext is the central interface within a Spring application for providing configuration information to the application. It is read-only at run time, but can be reloaded if necessary and supported by the application. A number of classes implement the ApplicationContext interface, allowing for a variety of configuration options and types of applications.
24. BeanFactory vs ApplicationContext
Application Context:

Bean instantiation/wiring
Automatic BeanPostProcessor registration
Automatic BeanFactoryPostProcessor registration
Convenient MessageSource access (for i18n)
ApplicationEvent publication
BeanFactor:

Bean instantiation/wiring
25. What is Dependency Injection in Spring?
Dependency Injection, an aspect of Inversion of Control (IoC), is a general concept, and it can be expressed in many different ways.This concept says that you do not create your objects but describe how they should be created. You don’t directly connect your components and services together in code but describe which services are needed by which components in a configuration file. A container (the IOC container) is then responsible for hooking it all up.

26. What is the difference between Tight Coupling and Loose Coupling?
Tight Coupling:

Tight coupling is when a group of classes are highly dependent on one another.
Loose Coupling:

Loose coupling is achieved by means of a design that promotes single-responsibility and separation of concerns.
27. What are the different types of IoC (dependency injection)?
Constructor-based dependency injection: Constructor-based DI is accomplished when the container invokes a class constructor with a number of arguments, each representing a dependency on other class.
Setter-based dependency injection: Setter-based DI is accomplished by the container calling setter methods on your beans after invoking a no-argument constructor or no-argument static factory method to instantiate your bean.
28. Which DI would you suggest Constructor-based or setter-based DI?
You can use both Constructor-based and Setter-based Dependency Injection. The best solution is using constructor arguments for mandatory dependencies and setters for optional dependencies.


C.Spring Beans
29. What are Spring beans?
The Spring Beans are Java Objects that form the backbone of a Spring application. They are instantiated, assembled, and managed by the Spring IoC container. These beans are created with the configuration metadata that is supplied to the container, for example, in the form of XML <bean/> definitions.

Beans defined in spring framework are singleton beans. There is an attribute in bean tag named "singleton" if specified true then bean becomes singleton and if set to false then the bean becomes a prototype bean. By default it is set to true. So, all the beans in spring framework are by default singleton beans.

30. What does a Spring Bean definition contain?
A Spring Bean definition contains all configuration metadata which is needed for the container to know how to create a bean, its lifecycle details and its dependencies.

31. How do you provide configuration metadata to the Spring Container?
There are three important methods to provide configuration metadata to the Spring Container:

XML based configuration file.
Annotation-based configuration
Java-based configuration
32. How do you define the scope of a bean?
When defining a <bean> in Spring, we can also declare a scope for the bean. It can be defined through the scope attribute in the bean definition. For example, when Spring has to produce a new bean instance each time one is needed, the bean’s scope attribute to be prototype. On the other hand, when the same instance of a bean must be returned by Spring every time it is needed, the the bean scope attribute must be set to singleton.

33. Explain the bean scopes supported by Spring
There are five scoped provided by the Spring Framework supports following five scopes:

In singleton scope, Spring scopes the bean definition to a single instance per Spring IoC container.
In prototype scope, a single bean definition has any number of object instances.
In request scope, a bean is defined to an HTTP request. This scope is valid only in a web-aware Spring ApplicationContext.
In session scope, a bean definition is scoped to an HTTP session. This scope is also valid only in a web-aware Spring ApplicationContext.
In global-session scope, a bean definition is scoped to a global HTTP session. This is also a case used in a web-aware Spring ApplicationContext.
The default scope of a Spring Bean is Singleton.

34. Are Singleton beans thread safe in Spring Framework?
No, singleton beans are not thread-safe in Spring framework.

35. Explain Bean lifecycle in Spring framework
The spring container finds the bean’s definition from the XML file and instantiates the bean.
Spring populates all of the properties as specified in the bean definition (DI).
If the bean implements BeanNameAware interface, spring passes the bean’s id to setBeanName() method.
If Bean implements BeanFactoryAware interface, spring passes the beanfactory to setBeanFactory() method.
If there are any bean BeanPostProcessors associated with the bean, Spring calls postProcesserBeforeInitialization() method.
If the bean implements IntializingBean, its afterPropertySet() method is called. If the bean has init method declaration, the specified initialization method is called.
If there are any BeanPostProcessors associated with the bean, their postProcessAfterInitialization() methods will be called.
If the bean implements DisposableBean, it will call the destroy() method.
36. Which are the important beans lifecycle methods? Can you override them?
There are two important bean lifecycle methods. The first one is setup which is called when the bean is loaded in to the container. The second method is the teardown method which is called when the bean is unloaded from the container.
The bean tag has two important attributes (init-method and destroy-method) with which you can define your own custom initialization and destroy methods. There are also the correspondive annotations(@PostConstruct and @PreDestroy).

37. What are inner beans in Spring?
When a bean is only used as a property of another bean it can be declared as an inner bean. Spring’s XML-based configuration metadata provides the use of <bean/> element inside the <property/> or <constructor-arg/> elements of a bean definition, in order to define the so-called inner bean. Inner beans are always anonymous and they are always scoped as prototypes.

38. How can you inject a Java Collection in Spring?
Spring offers the following types of collection configuration elements:

The <list> type is used for injecting a list of values, in the case that duplicates are allowed.
The <set> type is used for wiring a set of values but without any duplicates.
The <map> type is used to inject a collection of name-value pairs where name and value can be of any type.
The <props> type can be used to inject a collection of name-value pairs where the name and value are both Strings.
39. What is bean wiring?
Wiring, or else bean wiring is the case when beans are combined together within the Spring container. When wiring beans, the Spring container needs to know what beans are needed and how the container should use dependency injection to tie them together.

40. What is bean autowiring?
The Spring container is able to autowire relationships between collaborating beans. This means that it is possible to automatically let Spring resolve collaborators (other beans) for a bean by inspecting the contents of the BeanFactory without using <constructor-arg> and <property> elements.

41. Explain different modes of autowiring?
The autowiring functionality has five modes which can be used to instruct Spring container to use autowiring for dependency injection:

no: This is default setting. Explicit bean reference should be used for wiring.
byName: When autowiring byName, the Spring container looks at the properties of the beans on which autowire attribute is set to byName in the XML configuration file. It then tries to match and wire its properties with the beans defined by the same names in the configuration file.
byType: When autowiring by datatype, the Spring container looks at the properties of the beans on which autowire attribute is set to byType in the XML configuration file. It then tries to match and wire a property if its type matches with exactly one of the beans name in configuration file. If more than one such beans exist, a fatal exception is thrown.
constructor: This mode is similar to byType, but type applies to constructor arguments. If there is not exactly one bean of the constructor argument type in the container, a fatal error is raised.
autodetect: Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.
42. Are there limitations with autowiring?
Limitations of autowiring are:

Overriding: You can still specify dependencies using <constructor-arg> and <property> settings which will always override autowiring.
Primitive data types: You cannot autowire simple properties such as primitives, Strings, and Classes.
Confusing nature: Autowiring is less exact than explicit wiring, so if possible prefer using explicit wiring.
43. Can you inject null and empty string values in Spring?
Yes, you can.

D.Spring Annotations
44. What are some of the important Spring annotations?
Some of the Spring annotations that I have used in my project are:

@Component is used to indicate that a class is a component. These classes are used for auto-detection and configured as bean when annotation based configurations are used.
@Controller is a specific type of component, used in MVC applications and mostly used with @RequestMapping annotation.
@Repository annotation is used to indicate that a component is used as repository and a mechanism to store/retrieve/search data. We can apply this annotation with DAO pattern implementation classes.
@Service is used to indicate that a class is a Service. Usually, the business facade classes that provide some services are annotated with this.
@Required – This annotation simply indicates that the affected bean property must be populated at configuration time, through an explicit property value in a bean definition or through autowiring. The container throws BeanInitializationException if the affected bean property has not been populated.
@ResponseBody – for sending Object as response, usually for sending XML or JSON data as response.
@PathVariable – for mapping dynamic values from the URI to handler method arguments.
@Autowired – provides more fine-grained control over where and how autowiring should be accomplished. It can be used to autowire bean on the setter method just like @Required annotation, on the constructor, on a property or pn methods with arbitrary names and/or multiple arguments.
@Qualifier – When there are more than one beans of the same type and only one is needed to be wired with a property, the @Qualifier annotation is used along with @Autowired annotation to remove the confusion by specifying which exact bean will be wired.
@Scope – for configuring scope of the spring bean.
@Configuration – indicates that the class can be used by the Spring IoC container as a source of bean definitions.
@ComponentScan – all the classes available under a package will be scanned when this annotation is applied.
@Bean – for java based configurations, tells spring that a method annotated with @Bean will return an object that should be registered as a bean in the spring application context.
AspectJ annotations for configuring aspects and advices, @Aspect, @Before, @After, @Around, @Pointcut etc.
45. What does the @RequestParam annotation do?
The @RequestParam annotation in spring binds the parameter values of a query string to the method argument of a controller.

46. What is the importance of the annotation @Primary

When there are multiple beans of the same data-type, developers use the Spring-specific @Primary annotation that automatically gives the higher preference to a particular bean. This annotation can be used on any class directly or indirectly annotated with the @Component annotation or on methods annotated with the @Bean annotation.

47. What is the difference between the Configuration types XML and Annotation?
Advantages of the annotation:

All the information is in a single file
When the class changes, no need to modify the xml file
Advantages of XML file:

Clear separation between the POJO and its behavior
When you do not know which POJO is responsible for the behavior, it is easier to find that POJO
48. What is the role of @SpringBootApplication?
The @SpringBootApplication annotation was introduced in Spring Boot 1.2.0 and it enables the auto-configuration feature.

This annotation encapsulates the working of three different annotations:

@Configuration: Allows the developers to explicitly register the beans
@ComponentScan: Enables the component-scanning so that the controller class and other components will be automatically discovered and registered as beans in spring’s application context
@EnableAutoConfiguration: Enables the auto-configuration feature of spring boot
This annotation takes up the following optional parameters:

exclude: Excludes the list of classes from the auto-configuration
excludeNames: Excludes the list of fully qualified class names from the auto configuration
scanBasePackage: Provides the list of packages which must be applied for scanning
scanBasePackageClasses: Provides the list of classes in the other package which must be applied for scanning
49. Explain the @InitBinder?
This annotation is decorated on a method in which a date format is declared, and throughout the class, the defined date format is used. Whenever the binding happens with a date field @InitBinder; annotation says to use the CustomDateEditor, which in return uses the date format mentioned in @InitBinder.

50. Define @ControllerAdvice?
Classes with @ControllerAdvice can be declared explicitly as Spring beans or auto-detected via classpath scanning. All such beans are sorted via AnnotationAwareOrderComparator, i.e. based on @Order and Ordered, and applied in that order at runtime. For handling exceptions, an @ExceptionHandler will be picked on the first advice with a matching exception handler method. For model attributes and InitBinder initialization, @ModelAttribute and @InitBinder methods will also follow @ControllerAdvice order.

51. Can we send an Object as the response of Controller handler method?
Yes we can send JSON or XML based response in restful web services, using the @ResponseBody annotation.

52. Explain @ModelAttribute?
The @ModelAttribute annotation refers to the property of the Model object and is used to prepare the model data. This annotation binds a method variable or the model object to a named model attribute. The annotation accepts an optional value which indicates the name of the model attribute. The @ModelAttribute annotation can be used at the parameter level or the method level. The use of this annotation at the parameter level is to accept the request form values while at the method level is to assign the default values to a model. Let me explain you further with the help of some examples.

53. @RequestMapping annotation
The @RequestMapping annotation is used to map the web request onto a handler class (i.e. Controller) or a handler method and it can be used at the Method Level or the Class Level. If developers use the @RequestMapping annotation at a class level, it will be as a relative path for the method level path.

54. What is Spring Java-Based Configuration? Give some annotation example.
Java based configuration option enables you to write most of your Spring configuration without XML but with the help of few Java-based annotations.
An example is the @Configuration annotation, that indicates that the class can be used by the Spring IoC container as a source of bean definitions. Another example is the@Bean annotated method that will return an object that should be registered as a bean in the Spring application context.

55. What is Annotation-based container configuration?
An alternative to XML setups is provided by annotation-based configuration which relies on the bytecode metadata for wiring up components instead of angle-bracket declarations. Instead of using XML to describe a bean wiring, the developer moves the configuration into the component class itself by using annotations on the relevant class, method, or field declaration.

56. How do you turn on annotation wiring?
Annotation wiring is not turned on in the Spring container by default. In order to use annotation based wiring we must enable it in our Spring configuration file by configuring <context:annotation-config/> element.


E.Spring Data Access
57. Which classes are present in spring JDBC API?
Spring framework provides the following approaches for Jdbc database access:

JdbcTemplate
SimpleJdbcTemplate
NamedParameterJdbcTemplate
SimpleJdbcInsert
SimpleJdbcCall
58. How can JDBC be used more efficiently in the Spring framework?
When using the Spring JDBC framework the burden of resource management and error handling is reduced. So developers only need to write the statements and queries to get the data to and from the database. JDBC can be used more efficiently with the help of a template class provided by Spring framework, which is the JdbcTemplate (example here).

59. JdbcTemplate
JdbcTemplate class provides many convenience methods for doing things such as converting database data into primitives or objects, executing prepared and callable statements, and providing custom database error handling.

60. How can you fetch records by spring JdbcTemplate?
There are two interfaces that can be used to fetch records from the database:

ResultSetExtractor
RowMapper
61. What is the advantage of NamedParameterJdbcTemplate?
NamedParameterJdbcTemplate is built upon JDBCTemplate which is provided by spring and used for lower level communication with databases. It makes possible to pass SQL query arguments as key value pairs. As a result the program code is much more readable and therefore serves as better documentation compared to the indexed or the “?” placeholder approach. The latter is harder to follow specially if the number of parameters is huge.

62. What is Spring JDBCTemplate class and how to use it?
The JdbcTemplate class executes SQL queries, update statements and stored procedure calls, performs iteration over ResultSets and extraction of returned parameter values. It handles the creation and release of resources, thus avoiding errors such as forgetting to close the connection. It also catches JDBC exceptions and translates them to the generic, more informative, exception hierarchy defined in the org.springframework.dao package.

63. What is the difference between JDBC and Spring JDBC?
Spring JDBC value-add provided by the Spring Framework’s on top JDBC layer

Define connection parameters
Open the connection
Specify the statement
Prepare and execute the statement
Set up the loop to iterate through the results (if any)
Do the work for each iteration
Process any exception
Handle transactions
Close the connection
64. Spring DAO support
The Data Access Object (DAO) support in Spring is aimed at making it easy to work with data access technologies like JDBC, Hibernate or JDO in a consistent way. This allows us to switch between the persistence technologies fairly easily and to code without worrying about catching exceptions that are specific to each technology.

65. What are the ways to access Hibernate by using Spring?
There are two ways to access Hibernate with Spring:

Inversion of Control with a Hibernate Template and Callback.
Extending HibernateDAOSupport and Applying an AOP Interceptor node.
66. ORM’s Spring support
Spring supports the following ORM’s:

Hibernate
iBatis
JPA (Java Persistence API)
TopLink
JDO (Java Data Objects)
OJB
67. How can we integrate Spring and Hibernate using HibernateDaoSupport?
Use Spring’s SessionFactory called LocalSessionFactory. The integration process is of 3 steps:

Configure the Hibernate SessionFactory
Extend a DAO Implementation from HibernateDaoSupport
Wire in Transaction Support with AOP
68. Types of the transaction management Spring support
Spring supports two types of transaction management:

Programmatic transaction management: This means that you have managed the transaction with the help of programming. That gives you extreme flexibility, but it is difficult to maintain.
Declarative transaction management: This means you separate transaction management from the business code. You only use annotations or XML based configuration to manage the transactions.
69. What are the benefits of the Spring Framework’s transaction management?
It provides a consistent programming model across different transaction APIs such as JTA, JDBC, Hibernate, JPA, and JDO.
It provides a simpler API for programmatic transaction management than a number of complex transaction APIs such as JTA.
It supports declarative transaction management.
It integrates very well with Spring’s various data access abstractions.
70. Which Transaction management type is more preferable?
Most users of the Spring Framework choose declarative transaction management because it is the option with the least impact on application code, and hence is most consistent with the ideals of a non-invasive lightweight container. Declarative transaction management is preferable over programmatic transaction management though it is less flexible than programmatic transaction management, which allows you to control transactions through your code.

F.Spring Aspect Oriented Programming (AOP)
71. Explain AOP
Aspect-oriented programming, or AOP, is a programming technique that allows programmers to modularize crosscutting concerns, or behavior that cuts across the typical divisions of responsibility, such as logging and transaction management.

72. What are the advantages of spring AOP?
a. It is non-invasive

Your service/domain classes get advised by the aspects (cross cutting concerns) without adding any Spring AOP related classes or interfaces into the service/domain classes.
Allows the developer to concentrate on the business code, instead the cross cutting concerns.
b. Its implemented in pure Java

No need for a special compilation unit, or a special class loader
c. It uses Spring’s IOC for dependency injection

Aspects can be configured as normal spring beans.
d. As any other AOP framework, it weaves cross cutting concerns into the classes, without making a call to the cross cutting concerns from those classes.

e. Centralize or modularize the cross cutting concerns

Easy to maintain and make changes to the aspects
Changes need to be made in one place.
In one of your classes you don’t want to have logging, it can easily be achieved by modifying the point cut in the respective aspect (logging aspect). So you need to make changes in only one place.
f. Provision to create aspects using schema based (XML configuration) or @AspectJ annotation based style.

g. Easy to configure

73. What are the AOP implementation?
AOP implementations:

Spring AOP:
Runtime weaving through proxy is done
It supports only method level PointCut
It is DTD based
Apache AspectJ
Compile time weaving through AspectJ Java tools is done
It suports field level Pointcuts
It is schema based and Annotation configuration
JBoss AOP
JBoss AOP is not only a framework, but also a prepackaged set of aspects that are applied via annotations, pointcut expressions, or dynamically at runtime. Some of these include caching, asynchronous communication, transactions, security, remoting, and many many more.
74. What are the AOP terminology?
Aspect
Advice
Pointcut
JoinPoint
Introduction
Target Object
AOP Proxy
Weaving
75. Aspect
The core construct of AOP is the aspect, which encapsulates behaviors affecting multiple classes into reusable modules. It ia a module which has a set of APIs providing cross-cutting requirements. For example, a logging module would be called AOP aspect for logging. An application can have any number of aspects depending on the requirement. In Spring AOP, aspects are implemented using regular classes annotated with the @Aspect annotation (@AspectJ style).

76. Join point
The join point represents a point in an application where we can plug-in an AOP aspect. It is the actual place in the application where an action will be taken using Spring AOP framework.

77. Advice
The advice is the actual action that will be taken either before or after the method execution. This is actual piece of code that is invoked during the program execution by the Spring AOP framework.

Spring aspects can work with five kinds of advice:

before: Run advice before the a method execution.
after: Run advice after the a method execution regardless of its outcome.
after-returning: Run advice after the a method execution only if method completes successfully.
after-throwing: Run advice after the a method execution only if method exits by throwing an exception.
around: Run advice before and after the advised method is invoked.
78. Pointcut
The pointcut is a set of one or more joinpoints where an advice should be executed. You can specify pointcuts using expressions or patterns.

79. What is Introduction?
An Introduction allows us to add new methods or attributes to existing classes.

80. What is Target object?
The target object is an object being advised by one or more aspects. It will always be a proxy object. It is also referred to as the advised object.

81. What is a Proxy?
A proxy is an object that is created after applying advice to a target object. When you think of client objects the target object and the proxy object are the same.

82. What are the different types of AutoProxying?
BeanNameAutoProxyCreator
DefaultAdvisorAutoProxyCreator
Metadata autoproxying

Spring Interview Coming Up?
Subscribe to our newsletter and download the Ultimate Spring interview questions and answers collection right now!
In order to get you prepared for your next Spring Interview, we have compiled a huge list of relevant Questions and their respective Answers. Besides studying them online you may download the eBook in PDF format!


 
83. What is Weaving? What are the different points where weaving can be applied?
Weaving is the process of linking aspects with other application types or objects to create an advised object.
Weaving can be done at compile time, at load time, or at runtime.

84. What is the difference between concern and cross-cutting concern in Spring AOP
The Concern is behavior we want to have in a module of an application. A Concern may be defined as a functionality we want to implement.
The cross-cutting concern is a concern which is applicable throughout the application and it affects the entire application. For example, logging, security and data transfer are the concerns which are needed in almost every module of an application, hence they are cross-cutting concerns.

85. Explain XML Schema-based aspect implementation?
In this implementation case, aspects are implemented using regular classes along with XML based configuration.

86. Explain annotation-based (@AspectJ based) aspect implementation
This implementation case (@AspectJ based implementation) refers to a style of declaring aspects as regular Java classes annotated with Java 5 annotations.

G.Spring Model View Controller (MVC)
87. What is Spring MVC framework?
Spring comes with a full-featured MVC framework for building web applications. Although Spring can easily be integrated with other MVC frameworks, such as Struts, Spring’s MVC framework uses IoC to provide a clean separation of controller logic from business objects. It also allows to declaratively bind request parameters to business objects.

88. What are the minimum configurations needed to create Spring MVC application?
For creating a simple Spring MVC application, we would need to do the following tasks:

Add spring-context and spring-webmvc dependencies in the project.
Configure DispatcherServlet in the web.xml file to handle requests through spring container.
Spring bean configuration file to define beans, if using annotations then it has to be configured here. Also we need to configure view resolver for view pages.
Controller class with request mappings defined to handle the client requests.
89. List out all the concepts that are available in the MVC Architecture?
The browser sends a request to DispatcherServlet
DispatcherServlet knows the HanderMapping and can find the appropriate controllers
Controllers execute the request and put the data in the model and return back the view name to the DispatcherServlet.
DispatcherServlet uses the view name and ViewResolver to map to the view.
90. DispatcherServlet
The Spring Web MVC framework is designed around a DispatcherServlet that handles all the HTTP requests and responses.

91. WebApplicationContext
The WebApplicationContext is an extension of the plain ApplicationContext that has some extra features necessary for web applications. It differs from a normal ApplicationContext in that it is capable of resolving themes, and that it knows which servlet it is associated with.

92. What is Controller in Spring MVC framework?
Controllers provide access to the application behavior that you typically define through a service interface. Controllers interpret user input and transform it into a model that is represented to the user by the view. Spring implements a controller in a very abstract way, which enables you to create a wide variety of controllers.

93. How would you relate Spring MVC Framework to MVC architecture?
Spring MVC framework:

The Spring Framework is an open source application framework and inversion of control container for the Java platform.

MVC architecture:

Model View Controller (MVC) as it is popularly called, is a software design pattern for developing web applications

94. What is ViewResolver in Spring MVC?
Spring provides ViewResolver, which enable you to render models in a browser without tying you to a specific view technology. Out of the box, Spring enables you to use JSPs, Velocity templates and XSLT views, for example. The two interfaces which are important to the way Spring handles views are ViewResolver and View. The ViewResolver provides a mapping between view names and actual views. The View interface addresses the preparation of the request and hands the request over to one of the view technologies.

95. What is a MultipartResolver and when its used?
Spring MVC provide multipart support with MultipartResolver. The MultipartResolver parses inbound multipart requests. You can enable multipart support by registering a MultipartResolver bean in the DispatcherServlet application context.

96. How to upload file in Spring MVC Application?
Spring provides built-in support for uploading files through MultipartResolver interface implementations. There is also a validator for the field, which will be used to check if the file uploaded is of size greater than zero. There is finally a simple view that contains a form with the option to upload a file.

97. How to validate form data in Spring Web MVC Framework?
There are 3 different ways to perform validation : using annotation, manually, or a mix of both.

98. What is Spring MVC Interceptor and how to use it?
Spring’s handler mapping mechanism includes handler interceptors, which are useful when you want to apply specific functionality to certain requests, for example, checking for a principal. Interceptors must implement HandlerInterceptor from the org.springframework.web.servlet package. This interface defines three methods:

preHandle is called before the actual handler is executed.
postHandle is called after the handler is executed.
afterCompletion is called after the complete request has finished.

H.Authentication and authorization
99. What is Spring Security?
Spring security is one of the most important modules of the Spring framework. It enables the developers to integrate the security features easily and in a managed way. In the following example, we will show how to implement Spring Security in a Spring MVC application.

100. Why Spring Boot?
Here are some useful benefits of using Spring Boot:

Automatic configuration of an application uses intelligent defaults based on the classpath and the application context, but they can be overridden to suit the developer’s requirements as needed.
When creating a Spring Boot Starter project, you select the features that your application needs and Spring Boot will manage the dependencies for you.
A Spring Boot application can be packaged as a JAR file. The application can be run as a standalone Java application from the command line using the java -jar command.
When developing a web application, Spring Boot configures an embedded Tomcat server so that it can be run as a standalone application. (Tomcat is the default, but you can configure Jetty or Undertow instead.) You can package the application as a WAR file and deploy it to an external servlet container if you prefer
Spring Boot includes many useful non-functional features (such as security and health checks) right out of the box.
Ok, so now you are ready for your interview! Don’t forget to check our dedicated page full of Spring Tutorials, and our Examples dedicated subsection!

If you enjoyed this, then subscribe to our newsletter to enjoy weekly updates and complimentary whitepapers! Also, check out our courses for more advanced training!

You are welcome to contribute with your comments and we will include them in the article!

Last updated on Nov. 9th, 2020

Do you want to know how to develop your skillset to become a Java Rockstar?
Subscribe to our newsletter to start Rocking right now!
To get you started we give you our best selling eBooks for FREE!
1. JPA Mini Book
2. JVM Troubleshooting Guide
3. JUnit Tutorial for Unit Testing
4. Java Annotations Tutorial
5. Java Interview Questions
6. Spring Interview Questions
7. Android UI Design
and many more ....
Enter your e-mail...
I agree to the Terms and Privacy Policy

 TagsInterviewInterview questionsSpringUltimate
Photo of Theodora Fragkouli
Theodora Fragkouli
Theodora has graduated from Computer Engineering and Informatics Department in the University of Patras. She also holds a Master degree in Economics from the National and Technical University of Athens. During her studies she has been involved with a large number of projects ranging from programming and software engineering to telecommunications, hardware design and analysis. She works as a junior Software Engineer in the telecommunications sector where she is mainly involved with projects based on Java and Big Data technologies.
Website
Related Articles
java-interview-questions-answers
Simple REST client in Java
September 11th, 2012

How to fix Exception in thread “main” java.lang.NoClassDefFoundError: org/slf4j/LoggerFactory in Java
February 22nd, 2018
spring-interview-questions-answers
Spring Boot Error – Error creating a bean with name ‘dataSource’ defined in class path resource DataSourceAutoConfiguration
May 1st, 2019

Mockito: Cannot instantiate @InjectMocks field: the type is an interface
July 7th, 2020
spring-interview-questions-answers
Spring Boot Remove Embedded Tomcat Server, Enable Jetty Server
April 28th, 2020
spring-interview-questions-answers
What is SecurityContext and SecurityContextHolder in Spring Security?
February 21st, 2018
java-interview-questions-answers
How to install Apache Web Server on EC2 Instance using User data script
May 7th, 2020

Mockito when-then vs do-when
November 26th, 2021
 Subscribe 
guest


{}[+]
24 Comments
Oldest 
Nachiketa sahoo
Nachiketa sahoo
 11 years ago
how to get these two book free

1
 Reply
Biswaranjan Sahoo
Biswaranjan Sahoo
 11 years ago
 Reply to  Nachiketa sahoo
nothing is free.

0
 Reply
Biswaranjan Sahoo
Biswaranjan Sahoo
 11 years ago
good follow up. Better You add more question and answer here.

0
 Reply
Rance Moest
Rance Moest
 11 years ago
If any interviewer starts in with lists like this, I get up and leave. And then send them a bill for wasting my time.

3
 Reply
Peter K.
Peter K.
 11 years ago
I should send you a bill for reading your email, realizing that it is irrelevant

0
 Reply
Peter K.
Peter K.
 11 years ago
Great cheat sheet btw …

0
 Reply
Ram
Ram
 11 years ago
Nice one. Good for preparation.And beginners can understand what it is.

1
 Reply
ga mai
ga mai
 11 years ago
Please include information about the version of Spring these answers are for: XmlBeanFactory is deprecated since v. 3.1, there is now a third DI method ie. using property, etc.

0
 Reply
Veer
Veer
 11 years ago
i think question so basic so provide more deply question and answer..

1
 Reply
quo vadis
quo vadis
 11 years ago
like ga mai said, this article contains lot of deprecated or old-fashioned material.

Overall it is useful no doubt, but please clarify when saying ‘dont use autowiring as it is confusing’ that you meant XML Autowiring, not @Autowiring, and also the different types of autowiring apply again only to XMLbased..confused the heck out of me.

1
 Reply
cousin
cousin
 5 years ago
 Reply to  quo vadis
Totally agree.

0
 Reply
Vivan
Vivan
 11 years ago
Good knowledge of beginner………..so post more and more question and answers….!! And improve your knowledge..!!

0
 Reply
Mudassir
Mudassir
 11 years ago
Amazing article.
Though I have used and know all of the things mentioned but you have collected them in this article very beautifully.
Its definitely a must read.
Would be nice if you can add some architectural diagrams for newbies.
Thank you

0
 Reply
Amit
Amit
 10 years ago
Nice article.
Found some examples on
http://modernpathshala.com/Article/1024/top-spring-interview-questions-and-answers-part-1
Please add some more examples.

0
 Reply
Sandy
Sandy
 10 years ago
Good stuff. These are not basic questions, but the fundamental ones that are very important to know especially for experienced professionals, and not only for beginners. I am sure people find it a hard time when it comes to define something they are already working :).

0
 Reply
Chandan
Chandan
 10 years ago
If I know all answers means I can get job easily. This questions and answers enough to get a job

0
 Reply
naresh
naresh
 9 years ago
this is basic level expected advanced and depth answers

0
 Reply
Bala Challa
Bala Challa
 9 years ago
@Service
public class SampleClass implements SampleInterface{

@Transactional
public void methodA(){
SampleClass bean = ApplicationContext.getBean(SampleClass.class);
bean.methodB();
}

@Transactional
public void methodB(){
//statements.
}
}

is there any problem calling methodB() like that in the same class? I see lot of code like that. I don’t feel it is the right way. But I don’t know what are the consequences. Could anyone please let me know?

0
 Reply
z
z
 9 years ago
@Service
public class SampleClass implements SampleInterface{

@Transactional
public void methodA(){
SampleClass bean = ApplicationContext.getBean(SampleClass.class);
bean.methodB();
}

@Transactional
public void methodB(){
//statements.
}
}

is there any problem calling methodB() like that in the same class? I see lot of code like that. I don’t feel it is the right way. But I don’t know what are the consequences. Could anyone please let me know?

0
 Reply
Ritesh Sharma
Ritesh Sharma
 8 years ago
Wonderful Article !! i have been searching for this kind of information because in next week my interview is scheduled so looking for technical interview questions and this article has been provided me a great help so thanks a lot for this informative article.

0
 Reply
Serhiy Brytskyy
Serhiy Brytskyy
 7 years ago
Sorry, but I don’t understand how can I download pdf.

0
 Reply
Eleftheria Drosopoulou
Eleftheria Drosopoulou
 7 years ago
 Reply to  Serhiy Brytskyy
Hello Serhiy,

You can find the pdf version of this here: https://www.javacodegeeks.com/minibook/spring-interview-questions but first you have to login. If you don’t have an account you should first create one.

1
 Reply
Peter
Peter
 6 years ago
Very good questions, but no practical questions? Most technical interviews will require coding to solve practical problems. For example like some of these Spring interview questions: https://www.testdome.com/d/java-spring-interview-questions/263

I recommend adding some programming questions like these as well, as they’re important to practice too.

0
 Reply
Load More Comments
Join Us
Join UsWith 1,240,600 monthly unique visitors and over 500 authors we are placed among the top Java related sites around. Constantly being on the lookout for partners; we encourage you to join us. So If you have a blog with unique and interesting content then you should check out our JCG partners program. You can also be a guest writer for Java Code Geeks and hone your writing skills!
Newsletter

Insiders are already enjoying weekly updates and complimentary whitepapers!
Join them now to gain exclusive access to the latest news in the Java world, as well as insights about Android, JVM languages, cloud computing, Web development, DevOps, big data, Web3, blockchain programming and other related technologies.
Email address:
Enter your e-mail...
I agree to the Terms and Privacy Policy
Knowledge Base
Courses
Examples
Minibooks
Resources
Tutorials
The Code Geeks Network
.NET Code Geeks
Java Code Geeks
System Code Geeks
Web Code Geeks
Hall Of Fame
“Android Full Application Tutorial” series
11 Online Learning websites that you should check out
Advantages and Disadvantages of Cloud Computing – Cloud computing pros and cons
Android Google Maps Tutorial
Android JSON Parsing with Gson Tutorial
Android Location Based Services Application – GPS location
Android Quick Preferences Tutorial
Difference between Comparator and Comparable in Java
GWT 2 Spring 3 JPA 2 Hibernate 3.5 Tutorial
Java Best Practices – Vector vs ArrayList vs HashSet
About Java Code Geeks
JCGs (Java Code Geeks) is an independent online community focused on creating the ultimate Java to Java developers resource center; targeted at the technical architect, technical team lead (senior developer), project manager and junior developers alike. JCGs serve the Java, SOA, Agile and Telecom communities with daily news written by domain experts, articles, tutorials, reviews, announcements, code snippets and open source projects.
Disclaimer
All trademarks and registered trademarks appearing on Java Code Geeks are the property of their respective owners. Java is a trademark or registered trademark of Oracle Corporation in the United States and other countries. Examples Java Code Geeks is not connected to Oracle Corporation and is not sponsored by Oracle Corporation.
Java Code Geeks and all content copyright © 2010-2026, Exelixis Media P.C. | Terms of Use | Privacy Policy | Contact | Cookie Settings

	
Spring
Spring is a Java-based back-end framework popular for its modular architecture, feature-rich dependency injection, and comprehensive ecosystem with projects like Spring Boot, Spring Security, and Spring Data.

According to the CoderPad 2024 Developer survey, Spring is the 2nd most in-demand back-end framework among technical recruiters and hiring managers.

To evaluate the Spring expertise of developers during coding interviews, below you’ll find hands-on coding challenges and interview questions.

Additionally, we have outlined a set of suggested practices to ensure that your interview questions accurately measure the candidates’ Spring skillset.

Table of Contents
Spring example question
Junior Spring interview questions
Intermediate Spring interview questions
Senior Spring interview questions
Interview best practices for Spring roles
Spring example question
Create a Spring CRUD API
The goal of this exercise is to retrieve data from an external source, store it in an appropriate database structure, and create a CRUD RESTful API to interface with the database

Goals
1. Read the data from this graphql endpoint: https://swapi-graphql.netlify.app/.netlify/functions/index with the following query:

query Query {allPlanets{planets{name population terrains climates}}}

(You can view the shape of the data here.)

2. Store the data from the graphql endpoint into the database and create appropriate models

3. Write RESTful Create, Read, Update, and Delete endpoints to interact with the database


Spring skills to assess
Java fundamentals
Web development knowledge
Databases and ORMs
Jobs using Spring
Spring engineer
Java developer
Full-stack developer
Back-end engineer
Junior Spring interview questions
Question:
Explain the concept of Inversion of Control (IoC) and Dependency Injection (DI) in the context of the Spring framework.

Answer:
Inversion of Control (IoC) and Dependency Injection (DI) are fundamental concepts in the Spring framework.

IoC is a design principle that shifts the responsibility of object creation and management from the application to a container or framework. In traditional programming, objects are responsible for creating and managing their dependencies. In contrast, with IoC, the framework takes charge of creating and managing objects (beans) and their dependencies.

Dependency Injection is an implementation of IoC, where the dependencies of a class (e.g., other classes or services it relies on) are “injected” into the class instead of being created by the class itself. Spring provides various ways of performing DI, such as constructor injection, setter injection, and field injection.

With DI, classes become more loosely coupled, as they don’t need to know how their dependencies are created. This promotes better separation of concerns and makes testing and maintenance easier.

Question:
Provide an example of how to configure a simple bean in Spring using XML configuration.

Answer:
Here’s an example of configuring a simple bean named “userService” in Spring using XML configuration:

<!-- applicationContext.xml -->
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- Define the userService bean -->
    <bean id="userService" class="com.example.UserService">
        <!-- Setter injection for dependency -->
        <property name="userRepository" ref="userRepository"/>
    </bean>

    <!-- Define the userRepository bean -->
    <bean id="userRepository" class="com.example.UserRepository"/>
</beans>
Code language: HTML, XML (xml)
In this example, we define two beans: “userService” and “userRepository”. The “userService” bean depends on the “userRepository” bean, which is injected using setter injection.

Question:
Explain the purpose of the Spring MVC framework and its components.

Answer:
Spring MVC (Model-View-Controller) is a framework provided by Spring for building web applications in Java. Its purpose is to separate the concerns of web application development by using the MVC architectural pattern.

The components of Spring MVC are as follows:

Model: Represents the application data and business logic. It holds the state of the application and provides data to the View for rendering.
View: Represents the presentation layer of the application. It is responsible for rendering data from the Model to the user. In Spring MVC, the View is often implemented using JSP (JavaServer Pages), Thymeleaf, or other templating engines.
Controller: Handles user requests and orchestrates the interaction between the Model and the View. It receives requests from the user, processes them, and updates the Model accordingly. Then, it selects the appropriate View to render the updated Model data to the user.
By separating concerns in this way, Spring MVC promotes a clean and modular design, making it easier to maintain and extend web applications.

Question:
Provide an example of a Spring MVC Controller that handles an HTTP GET request to fetch user details.

Answer:
Here’s an example of a Spring MVC Controller that handles an HTTP GET request to fetch user details:

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public String getUserDetails(@PathVariable Long id, Model model) {
        User user = userService.getUserById(id);
        model.addAttribute("user", user);
        return "user-details";
    }
}
Code language: PHP (php)
In this example, we define a UserController class as a Spring @Controller, which handles requests mapped to the “/user” path. The getUserDetails() method handles the HTTP GET requests with an ID path variable.

The UserService is autowired to fetch user details from the database. The user details are then added to the Model using model.addAttribute() and passed to the “user-details” view template for rendering.

Question:
Explain the purpose of Spring Data JPA and its advantages.

Answer:
Spring Data JPA is a subproject of Spring that simplifies the interaction with the database using the Java Persistence API (JPA). It aims to reduce boilerplate code and provide a higher-level abstraction for working with databases.

Advantages of Spring Data JPA include:

Reduces boilerplate code: Spring Data JPA eliminates the need to write repetitive data access code, such as creating queries and managing transactions.
Automatic query generation: Spring Data JPA can automatically generate queries based on method names defined in the repository interface. This reduces the need to write explicit SQL queries.
Abstraction over different data sources: Spring Data JPA abstracts away the underlying data source, allowing developers to switch between different databases (e.g., MySQL, PostgreSQL) easily.
Pagination and sorting: Spring Data JPA provides built-in support for pagination and sorting of query results.
Improved testability: By using interfaces for repositories, it becomes easier to mock data access during testing.
Overall, Spring Data JPA simplifies database access and improves developer productivity.

Question:
Provide an example of a Spring Data JPA repository interface that performs a custom query.

Answer:
Here’s an example of a Spring Data JPA repository interface that performs a custom query:

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findUsersByAgeGreaterThan(@Param("age") int age);
}
Code language: PHP (php)
In this example, we define a custom query using the @Query annotation within the UserRepository interface. The query retrieves users whose age is greater than a specified value. The method name findUsersByAgeGreaterThan is used to generate the method implementation for this query.

Question:
Explain the concept of AOP (Aspect-Oriented Programming) in the context of Spring and its use cases.

Answer:
Aspect-Oriented Programming (AOP) is a programming paradigm that allows developers to modularize cross-cutting concerns, which are concerns that span multiple parts of an application. In the context of Spring, AOP enables the separation of core business logic from cross-cutting concerns, such as logging, security, and transaction management.

AOP achieves this separation by defining aspects, which are modules that encapsulate cross-cutting concerns. Aspects are then applied to target objects or methods using a technique called weaving. Spring provides various ways to define aspects, including using XML configuration, annotations, or Java configuration.

Use cases for AOP in Spring include:

Logging: AOP can be used to add logging functionality to methods without modifying their source code.
Security: AOP can enforce security checks (e.g., authentication, authorization) across multiple methods in a consistent manner.
Transaction management: AOP can manage transactions by automatically starting, committing, or rolling back transactions based on method execution.
Caching: AOP can be used to cache method results to improve performance.
Error handling: AOP can handle exceptions in a central location, providing a consistent error handling mechanism.
Question:
Provide an example of how to use Spring’s @Transactional annotation to manage transactions in a service class.

Answer:
Here’s an example of how to use Spring’s @Transactional annotation to manage transactions in a service class:

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
Code language: CSS (css)
In this example, the UserService class is annotated with @Service to indicate that it is a Spring service bean.

The createUser() and deleteUser() methods are annotated with @Transactional to indicate that they are transactional methods. The createUser() method inserts a new user into the database using the userRepository.save() method. The deleteUser() method deletes a user from the database using the userRepository.deleteById() method.

The getUserById() method is annotated with @Transactional(readOnly = true) to indicate that it is a read-only transactional method. It retrieves a user from the database using the userRepository.findById() method.

Spring will manage transactions for these methods automatically. If an exception occurs during the transaction, Spring will automatically rollback the transaction, ensuring data consistency.

Question:
Explain the purpose of Spring Security and its core features.

Answer:
Spring Security is a powerful security framework that provides authentication, authorization, and other security features for Spring-based applications. Its purpose is to secure web applications and APIs by protecting against various security threats.

Core features of Spring Security include:

Authentication: Spring Security provides various authentication mechanisms, such as form-based authentication, HTTP Basic authentication, and OAuth. It enables users to log in and prove their identity to access protected resources.
Authorization: Spring Security manages user roles and permissions to control access to different parts of the application. It ensures that only authorized users can perform specific actions or view certain pages.
Cross-Site Request Forgery (CSRF) protection: Spring Security automatically protects against CSRF attacks by adding CSRF tokens to forms.
Session management: Spring Security handles user session management, including session fixation protection and session concurrency control.
Remember-me functionality: Spring Security allows users to be remembered after a successful login using cookies or tokens.
Method-level security: Spring Security can secure individual methods based on user roles, providing fine-grained access control.
By integrating Spring Security into a Spring application, developers can add robust security features without reinventing the wheel.

Question:
Provide an example of configuring Spring Security to secure a RESTful API with JWT (JSON Web Tokens) authentication.

Answer:
Here’s an example of how to configure Spring Security to secure a RESTful API with JWT authentication:

Add the necessary dependencies to your project:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
Code language: HTML, XML (xml)
Create a JWTUtil class to generate and parse JWT tokens:
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    private final String secret = "your-secret-key";
    private final long expirationTime = 3600000; // 1 hour

    public String generateToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationTime);

        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", username);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
}
Code language: JavaScript (javascript)
Configure Spring Security to use JWT authentication:
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()
                .authorizeRequests().antMatchers("/authenticate").permitAll()
                .anyRequest().authenticated()
                .and().exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
Code language: JavaScript (javascript)
In this example, we disable CSRF protection since it’s not needed for stateless JWT authentication. We permit all requests to “/authenticate”, where the client can request a JWT token by providing valid credentials.

The JwtAuthenticationEntryPoint is a custom class that handles authentication errors and sends appropriate responses.

The JwtRequestFilter is a custom filter that intercepts incoming requests and validates the JWT token. It sets the authenticated user in the security context if the token is valid.

The CustomUserDetailsService is a custom implementation of Spring’s UserDetailsService interface, which loads user details from the database.

With this configuration, your RESTful API is secured using JWT authentication. Clients must include a valid JWT token in the Authorization header to access protected endpoints.

Intermediate Spring interview questions
Question:
Explain the concept of inversion of control (IoC) and dependency injection in the context of the Spring framework.

Answer:
Inversion of Control (IoC) and Dependency Injection (DI) are fundamental concepts in the Spring framework.

IoC is a design pattern where the control over the flow of the application is shifted from the application code to a container. In traditional programming, the application code is responsible for creating and managing the objects it depends on. However, with IoC, the responsibility of object creation and dependency management is delegated to a container, which manages the lifecycle of objects and their dependencies.

Dependency Injection is a specific implementation of IoC. It is the process of providing the dependent objects (dependencies) to a class instead of the class creating them itself. Instead of hard-coding the dependencies, the container injects them at runtime, allowing for loose coupling between classes.

In the Spring framework, DI is achieved through constructor injection or setter injection. Constructor injection involves passing the dependencies as parameters to a class’s constructor, while setter injection involves setting the dependencies using setter methods.

Question:
The following Spring bean configuration is intended to define a bean of the UserService class and inject a dependency of the UserRepository class. However, the configuration contains a syntax error and doesn’t work correctly. Identify the error and fix the configuration.

<bean id="userService" class="com.example.UserService">
  <property name="userRepository" ref="userRepo" />
</bean>

<bean id="userRepo" class="com.example.UserRepository" />
Code language: HTML, XML (xml)
Answer:
The error in the configuration is that the <property> element is used to inject the dependency, but the UserService class doesn’t have a corresponding setter method for the userRepository property.

To fix the code, we need to use constructor injection instead. Here’s the corrected configuration:

<bean id="userService" class="com.example.UserService">
  <constructor-arg ref="userRepo" />
</bean>

<bean id="userRepo" class="com.example.UserRepository" />
Code language: HTML, XML (xml)
In this corrected configuration, we use <constructor-arg> to inject the dependency into the UserService constructor.

Question:
Explain the concept of Spring AOP (Aspect-Oriented Programming) and provide an example scenario where AOP can be beneficial.

Answer:
Spring AOP is a programming paradigm that allows cross-cutting concerns (such as logging, security, and transaction management) to be modularized and separated from the core business logic of an application. It achieves this by dynamically applying aspects (modules) to specific join points (points in the application’s execution flow) using proxy-based or bytecode weaving techniques.

An example scenario where AOP can be beneficial is logging. Instead of adding logging code manually to each method in multiple classes, you can use AOP to apply a logging aspect to all methods or specific methods across multiple classes. This way, logging concerns are centralized and kept separate from the core functionality, leading to cleaner and more maintainable code.

Question:
The following Spring Boot application class is intended to define the main application class. However, it contains a logical error, and the application doesn’t run correctly. Identify the error and fix the code.

@SpringBootApplication
public class MyApplication {
  public static void main() {
    SpringApplication.run(MyApplication.class);
  }
}
Code language: PHP (php)
Answer:
The logical error in the code is that the main method signature is incorrect. The main method should accept a String[] argument, which represents the command-line arguments. Also, the run method should have the MyApplication.class as the first argument.

Here’s the corrected code:

@SpringBootApplication
public class MyApplication {
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}
Code language: PHP (php)
In this corrected code, the main method accepts the String[] args argument, and the run method is called with MyApplication.class and the args argument.

Question:
Explain the purpose of Spring Bean Scopes and provide an example of each scope.

Answer:
Spring Bean Scopes define the lifecycle and visibility of Spring beans managed by the Spring IoC container. Different bean scopes determine when and how many instances of a bean are created and used within the application context.

The following are the common Spring bean scopes:

Singleton Scope: It creates a single instance of the bean and shares that instance across the application context. It is the default scope.
@Component // Equivalent to @Scope("singleton")
public class SingletonBean {
  // Bean implementation
}
Code language: PHP (php)
Prototype Scope: It creates a new instance of the bean whenever requested. Each time a bean is injected or retrieved from the container, a new instance is provided.
@Component
@Scope("prototype")
public class PrototypeBean {
  // Bean implementation
}
Code language: PHP (php)
Request Scope: It creates a new instance of the bean for each HTTP request in a web application.
@Component
@Scope("request")
public class RequestBean {
  // Bean implementation
}
Code language: PHP (php)
Session Scope: It creates a single instance of the bean per user session in a web application.
@Component
@Scope("session")
public class SessionBean {
  // Bean implementation
}
Code language: PHP (php)
Application Scope: It creates a single instance of the bean for the entire web application context.
@Component
@Scope("application")
public class ApplicationBean {
  // Bean implementation
}
Code language: PHP (php)
Question:
The following Spring Data JPA repository is intended to define a custom query method to retrieve users by their email address. However, it contains a logical error, and the method doesn’t work correctly. Identify the error and fix the code.

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  User findByEmail(String email);
}
Code language: PHP (php)
Answer:
The logical error in the code is that the method name doesn’t follow the correct naming convention for a custom query method.

To fix the code, we need to use the correct naming convention for the custom query method. The method name should start with “find” followed by the property name, and “By” followed by the property name for the criteria.

Here’s the corrected code:

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  User findByEmail(String email);
}
Code language: PHP (php)
In this corrected code, the findByEmail method follows the correct naming convention and correctly retrieves users by their email address.

Question:
Explain the purpose of the @Transactional annotation in Spring and its significance in managing database transactions.

Answer:
The @Transactional annotation in Spring is used to mark a method or class as transactional. It indicates that the annotated method (or all methods within the annotated class) should be executed within a database transaction.

Transactional management ensures that all database operations within a transaction are treated as a single unit of work. If any operation within the transaction fails, the entire transaction is rolled back, and the database returns to its original state, preventing data inconsistency.

When a method is annotated with @Transactional, Spring dynamically creates a proxy around the method. The proxy intercepts the method calls and handles the transactional behavior, such as beginning a new transaction before the method is invoked

and committing or rolling back the transaction after the method completes.

For example:

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  @Transactional
  public void updateUser(User user) {
    // Some business logic
    userRepository.save(user);
    // Other operations
  }
}
Code language: PHP (php)
In this example, the updateUser method is marked as @Transactional, so all the operations within this method will be executed within a single transaction.

Question:
The following Spring REST Controller is intended to handle HTTP POST requests to create a new user. However, it contains a logical error, and the request doesn’t work correctly. Identify the error and fix the code.

@RestController
public class UserController {
  @Autowired
  private UserService userService;

  @PostMapping("/users")
  public ResponseEntity<String> createUser(@RequestBody User user) {
    userService.createUser(user);
    return ResponseEntity.ok("User created successfully.");
  }
}
Code language: CSS (css)
Answer:
The logical error in the code is that the createUser method of the userService is not handling any potential exceptions that might occur during the user creation process.

To fix the code, we need to handle exceptions appropriately and return an appropriate response in case of errors. We can use Spring’s try-catch mechanism or let Spring handle the exceptions and return an error response automatically.

Here’s a possible way to handle exceptions:

@RestController
public class UserController {
  @Autowired
  private UserService userService;

  @PostMapping("/users")
  public ResponseEntity<String> createUser(@RequestBody User user) {
    try {
      userService.createUser(user);
      return ResponseEntity.ok("User created successfully.");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create user.");
    }
  }
}
Code language: PHP (php)
In this corrected code, we added a try-catch block to handle any exceptions that may occur during user creation. If an exception occurs, we return an internal server error response with an appropriate message.

Question:
Explain the purpose of Spring Security and its significance in securing web applications.

Answer:
Spring Security is a powerful and customizable framework provided by Spring for securing Java-based applications, including web applications. It is designed to handle various aspects of application security, such as authentication, authorization, and protection against common security vulnerabilities.

The key features and benefits of Spring Security include:

Authentication: Spring Security provides authentication mechanisms to verify the identity of users. It supports various authentication methods, such as form-based login, HTTP basic authentication, and OAuth.
Authorization: Spring Security enables fine-grained control over what resources a user can access within the application. It supports role-based and permission-based access control.
Protection against Security Threats: Spring Security helps protect web applications against common security threats, such as Cross-Site Request Forgery (CSRF), Cross-Site Scripting (XSS), and Clickjacking, by providing built-in countermeasures.
Integration with Spring Framework: Spring Security seamlessly integrates with the Spring ecosystem, making it easier to secure applications that use other Spring modules, such as Spring Boot and Spring Data.
Customizability: Spring Security is highly customizable and extensible. It allows developers to implement their own authentication and authorization logic and integrate with existing security infrastructures.
By using Spring Security, developers can focus on building application features, knowing that the security concerns are well-handled by the framework.

Question:

The following Spring Boot application.properties file is intended to configure the database connection and JPA settings for a MySQL database. However, it contains a logical error, and the application fails to establish a database connection. Identify the error and fix the code.

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=myuser
spring.datasource.password=mypassword
spring.datasource.driver-class-name=com.mysql.jdbc.Driver

# JPA Configuration
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
Code language: PHP (php)
Answer:
The logical error in the code is that the spring.datasource.driver-class-name property is using the incorrect class name for the MySQL driver. The com.mysql.jdbc.Driver driver class is used for older versions of MySQL Connector/J. For newer versions, the driver class should be com.mysql.cj.jdbc.Driver.

To fix the code, we need to update the spring.datasource.driver-class-name property with the correct driver class name.

Here’s the corrected application.properties:

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=myuser
spring.datasource.password=mypassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
Code language: PHP (php)
In this corrected code, the spring.datasource.driver-class-name property uses the correct driver class name, com.mysql.cj.jdbc.Driver, ensuring that the application can establish a database connection.

Senior Spring interview questions
Question:
Explain the concept of dependency injection in the context of Spring framework and discuss its benefits in software development.

Answer:
Dependency injection (DI) is a design pattern used in the Spring framework to achieve loose coupling between classes. In DI, the dependencies of a class are injected into it from the outside rather than the class creating its dependencies internally. This allows for more flexibility, maintainability, and testability of the code.

In Spring, DI is achieved through inversion of control (IoC) containers, which manage the creation and lifecycle of beans (objects) and their dependencies. Spring provides different ways to perform DI, such as constructor injection, setter injection, and autowiring.

Benefits of Dependency Injection in software development:

Decoupling: DI promotes loose coupling between classes, as classes are not responsible for creating their dependencies. This allows components to be easily replaced or modified without affecting the entire system.
Testability: By injecting dependencies, it becomes easier to mock or stub them during unit testing. This enables isolated testing of components, leading to more reliable and comprehensive test suites.
Reusability: With DI, components become more independent and can be reused in different contexts or applications.
Maintainability: DI improves code maintainability by reducing the entanglement between classes. Changes to dependencies can be managed in a centralized manner through the IoC container.
Configurability: DI allows for external configuration of dependencies, making it easier to adapt the application to different environments or use cases.
Modularization: DI encourages a modular design, where each component focuses on its specific functionality, promoting better code organization.
Question:
Provide an example of how to define a bean (component) in Spring using annotations.

Answer:
In Spring, you can define a bean (component) using annotations such as @Component, @Service, @Repository, or @Controller. These annotations are used to indicate that a class should be managed as a Spring bean.

Example of defining a bean using @Component:

import org.springframework.stereotype.Component;

@Component
public class MyService {
    // Class implementation here
}
Code language: JavaScript (javascript)
In this example, the MyService class is annotated with @Component, indicating that it should be managed as a Spring bean. The bean will be automatically detected and registered by the Spring IoC container.

Question:
Explain the purpose of the @Autowired annotation in Spring and provide an example of its usage.

Answer:
The @Autowired annotation in Spring is used to automatically inject dependencies into a Spring bean. It allows Spring to resolve and inject the required dependencies at runtime, without the need for explicit configuration.

Example of using @Autowired:

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    private final MyRepository repository;

    @Autowired
    public MyService(MyRepository repository) {
        this.repository = repository;
    }

    // Class implementation here
}
Code language: PHP (php)
In this example, the MyService class is annotated with @Service, indicating that it is a Spring bean. The constructor of MyService is annotated with @Autowired, specifying that an instance of MyRepository should be injected into the constructor. Spring will automatically resolve the dependency and inject the appropriate MyRepository bean when creating the MyService bean.

Question:
Explain the concept of aspect-oriented programming (AOP) in the context of Spring and discuss its benefits.

Answer:
Aspect-Oriented Programming (AOP) is a programming paradigm used in Spring to address cross-cutting concerns, such as logging, security, and transaction management, which often span multiple modules or layers of an application. AOP allows you to modularize these concerns, making the codebase cleaner and more maintainable.

In Spring, AOP is achieved through aspects, which are separate modules that encapsulate behavior. Aspects are woven into the application’s core business logic at runtime, allowing for the separation of concerns without modifying the original code.

Benefits of Aspect-Oriented Programming in Spring:

Modularity: AOP promotes a modular design, where cross-cutting concerns are isolated from the core business logic. This results in more maintainable and scalable code.
Reusability: Aspects can be reused across different components, enabling consistent behavior across the application.
Decoupling: AOP helps in decoupling cross-cutting concerns from the application logic. Changes to aspects do not require modifications to the core business logic.
Readability: By removing cross-cutting concerns from the main code, the core business logic becomes more focused and easier to read.
Debugging: AOP allows developers to focus on the core business logic during debugging, as cross-cutting concerns are separated.
Question:
Provide an example of using Spring’s @Transactional annotation to manage transactions in a service layer.

Answer:
The @Transactional annotation in Spring is used to manage transactions for methods in the service layer. It ensures that the annotated method runs within a transactional context, and if any exception occurs, the transaction is rolled back.

Example of using @Transactional:

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MyService {
    private final MyRepository repository;

    public MyService(MyRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public void updateData(Data data) {
        // Perform data update operations using repository methods
        repository.save(data);
    }
}
Code language: PHP (php)
In this example, the updateData() method in the MyService class is annotated with @Transactional. This means that all database operations performed within this method will be executed within a single transaction. If the method completes successfully, the transaction will be committed. If an exception occurs, the transaction will be rolled back, ensuring data consistency.

Question:
Explain the difference between singleton and prototype bean scopes in Spring.

Answer:
In Spring, beans can have different scopes that define the lifecycle and visibility of the bean instance. The two most commonly used scopes are singleton and prototype.

Singleton Scope:
Singleton is the default scope in Spring.
In singleton scope, Spring creates and maintains a single instance of the bean throughout the application context.
Every time the bean is requested, Spring returns the same instance.
This can lead to potential thread safety issues if the bean is mutable and shared across multiple threads.
Example: @Scope("singleton")
Prototype Scope:
In prototype scope, Spring creates a new instance of the bean every time it is requested.
The lifecycle of the prototype bean is managed by the client, and Spring does not manage its destruction.
This scope is useful for stateful or heavy-weight beans that need to be independent of each other.
Example: @Scope("prototype")
Example of defining bean scopes in Spring:

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class SingletonBean {
    // Singleton bean implementation
}

@Component
@Scope("prototype")
public class PrototypeBean {
    // Prototype bean implementation
}
Code language: JavaScript (javascript)
In this example, SingletonBean is defined with the @Scope("singleton") annotation, while PrototypeBean is defined with the @Scope("prototype") annotation.

Question:
Explain the purpose of Spring’s @Qualifier annotation and provide an example of its usage.

Answer:
The @Qualifier annotation in Spring is used to resolve ambiguities when multiple beans of the same type are defined in the application context. When autowiring dependencies using @Autowired, Spring needs to know which bean to inject when there are multiple candidates.

Example of using @Qualifier:

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    private final MyRepository repository;

    @Autowired
    public MyService(@Qualifier("myRepositoryImpl") MyRepository repository) {
        this.repository = repository;
    }

    // Class implementation here
}
Code language: JavaScript (javascript)
In this example, suppose there are multiple implementations of the MyRepository interface in the application context. By using @Qualifier("myRepositoryImpl"), we specify that the MyService should be injected with the bean named “myRepositoryImpl.” This resolves the ambiguity and ensures that the correct bean is injected.

Question:
Explain the concept of Spring profiles and provide an example of how to use them in a Spring Boot application.

Answer:
Spring profiles are used to define different configurations for the same application based on specific environments or scenarios. Profiles allow you to segregate bean definitions, properties, and other configuration elements based on the active profile.

Example of using Spring profiles in a Spring Boot application:

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
public class MyConfiguration {

    @Bean
    @Profile("dev")
    public MyService devService() {
        return new MyDevService();
    }

    @Bean
    @Profile("prod")
    public MyService prodService() {
        return new MyProdService();
    }
}
Code language: CSS (css)
In this example, two different implementations of MyService are defined, one for the “dev” profile and another for the “prod” profile. The @Profile annotation is used to associate each bean with a specific profile. When the application is started with a specific profile (e.g., using -Dspring.profiles.active=dev as a command-line argument), only the beans associated with that profile will be created and used.

Question:
Explain the purpose of Spring Boot Actuator and provide an example of how to enable and use it in a Spring Boot application.

Answer:
Spring Boot Actuator is a subproject of Spring Boot that provides several production-ready features to help monitor and manage Spring Boot applications. It exposes various endpoints that provide useful information and insights into the application’s internals, such as health status, metrics, environment properties, and more.

To enable Spring Boot Actuator, you need to include the spring-boot-starter-actuator dependency in your application’s pom.xml or build.gradle.

Example of enabling Spring Boot Actuator in a Spring Boot application:

Add the spring-boot-starter-actuator dependency to your pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
Code language: HTML, XML (xml)
By default, all Actuator endpoints are secured. To allow access to the Actuator endpoints without authentication, add the following to your application.properties:
management.endpoints.web.exposure.include=*
Code language: PHP (php)
After enabling Actuator, you can access various endpoints, for example:

/actuator/health: Provides information about the health of the application.
/actuator/metrics: Provides various metrics about the application, such as memory usage and request counts.
/actuator/env: Provides information about the environment properties.
/actuator/info: Provides custom application information defined in application.properties.
For example, to access the health endpoint, you can make a GET request to http://localhost:8080/actuator/health.

Question:
Explain the concept of Spring Security and its role in securing a Spring Boot application.

Answer:
Spring Security is a powerful framework provided by Spring to handle security aspects of a Spring-based application. It offers comprehensive security features, such as authentication, authorization, and protection against common security vulnerabilities like Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS).

Role of Spring Security in securing a Spring Boot application:

Authentication: Spring Security provides authentication mechanisms to verify the identity of users. It supports various authentication methods, such as form-based login, HTTP Basic authentication, and OAuth.
Authorization: Once authenticated, Spring Security enables you to define access control rules based on roles and permissions. It ensures that only authorized users can access specific resources.
Protection against common attacks: Spring Security helps protect the application against security vulnerabilities like CSRF attacks, XSS attacks, and Clickjacking.
User session management: Spring Security manages user sessions and provides options for session fixation protection and session invalidation.
Secure password handling: Spring Security provides utilities for securely storing and handling user passwords, such as password hashing and salting.
Example of configuring Spring Security in a Spring Boot application:

To enable Spring Security in a Spring Boot application, you need to include the spring-boot-starter-security dependency in your pom.xml or build.gradle. After enabling Spring Security, it automatically secures your application with basic authentication, and you will need to provide a username and password to access your application.

By default, Spring Security will generate a random password during startup and log it. You can find the generated password in the application logs and use it to log in. For production applications, it is essential to set a secure password explicitly.

Additional configuration for customizing authentication and authorization can be done through Java-based configuration or using Spring Security’s configuration properties in application.properties or application.yml.

1,000 Companies use CoderPad to Screen and Interview Developers


Interview best practices for Spring roles
For successful Spring interviews, it’s important to consider various factors, such as the candidate’s experience level and the engineering role. To ensure that your Spring interview questions yield the best results, we recommend following these best practices when working with candidates:

Create technical questions that align with actual business cases within your organization. This will not only be more engaging for the candidate but also enable you to better assess the candidate’s suitability for your team.
Encourage the candidate to ask questions during the interview and foster a collaborative environment.
Make sure your Spring candidates are familiar with using application servers like Apache Tomcat, JBoss, or WebLogic.
Verify that the candidate has a minimal knowledge of all the different Spring layers (Core Container, Data Access/Integration, Web, AOP and Instrumentation, …).
Additionally, adhering to standard interview etiquette when conducting Spring interviews is essential. This includes adjusting the question complexity to the candidate’s level of development skills, providing timely feedback to candidates about their application status, and allowing candidates to ask questions about the assessment or working with you and your team.



11 вопросов на собеседовании по Spring Boot, которые заставляют задуматься
Новости 1С-Битрикс
Полезные статьи
Моя цель - предложение широкого ассортимента товаров и услуг на постоянно высоком качестве обслуживания по самым выгодным ценам.


angiopharm.promo.page
Реклама
Набор ANGIOPHARM для сияния кожи — разбираем по составу
В статье — от причин тусклости до готового протокола
Причины тусклости кожи
Компоненты против пигментации
Антиоксиданты в уходе
Готовый протокол

Узнать больше

Большинство списков вопросов интервью по Boot заставляют вас запоминать случайные детали из документации Spring Boot. Но запоминание — плохая замена истинному пониманию и уверенности в знании Spring Boot.

Поэтому сегодня мы собираемся применить другой подход. Вместо того, чтобы перечислять 50 вопросов по мелочам Spring Boot, мы сосредоточимся на 11, которые заставят вас задуматься и, таким образом, многому научиться на этом пути.

Вот эти вопросы в произвольном порядке.

Примечание: если вы сами проводите интервью по Spring Boot, возможно, вы захотите задать эти вопросы в открытом формате, ведущем к обсуждениям, вместо того, чтобы ожидать ответов из учебников

1. Верно или ложно следующее утверждение: «Каждое приложение Spring Boot - это веб-приложение, работающее во встроенном Apache Tomcat». Обоснуйте свой ответ.
Ответ
2. В чем разница между Spring Boot и Spring MVC? Или между Spring Boot и Spring Framework? Можете ли вы использовать их вместе в одном проекте?
Ответ
3. Назовите два способа создать новый проект Spring Boot с нуля? Кроме того, как узнать, какие Spring Boot стартеры нужны вашему проекту?
Ответ
4. Почему вам не нужно указывать версии зависимостей в файле pom.xml при включении сторонних библиотек? Верно ли это для всех сторонних библиотек или только для некоторых? Как узнать, какие библиотеки поддерживает Spring Boot?
Ответ
5. Вы хотите сделать свое приложение настраиваемым, скажем, указать разное соединение с базой данных для среды разработки и рабочей среды. Какие у вас есть варианты?
Ответ
6. Верно или неверно следующее утверждение: «Каждый проект Spring Boot должен использовать Thymeleaf в качестве механизма создания шаблонов HTML». Какие у вас есть возможности для рендеринга HTML?
Ответ
7. Как можно реализовать доступ к реляционной базе данных с помощью Spring Boot? Какие у вас есть варианты?
Ответ
8. Вам необходимо настроить ведение журнала в своем приложении, но вы хотите различать уровни журнала на вашем компьютере и уровни журнала в разных средах (qa, test, prod). Какие у вас есть варианты?
Ответ
9. Как проще всего развернуть приложение Spring Boot в рабочей среде? Какие еще есть варианты?
Ответ
10. Вам сказали включить «Spring Security» в вашем приложении. Что происходит, когда вы добавляете стартер Spring Security в свое приложение?
Ответ
11. Как узнать, какие автоконфигурации Spring Boot применяются при запуске и какие условия оцениваются?
Ответ
Заключение
Очевидно, нет никакой гарантии, что вы ответите на эти вопросы на собственном собеседовании по Spring Boot, хотя знание (и понимание) ответов на них должно стать прочной основой для любого интервью.

Если вы хотите получить более глубокое представление обо всей экосистеме Spring, вы также можете ознакомиться с другими статьями о Spring в блоге автора.

Примечание переводчика. Переводы 2 статей из блога  автора о Spring есть на Хабр:

Что такое Spring Framework? От внедрения зависимостей до Web MVC

Spring MVC: создание веб-сайтов и RESTful сервисов

Из комментариев читателей. Одно замечание по вопросу № 3., я думаю, что рядом с Initializr также Bootify.io - хороший вариант.


Источник: https://habr.com/ru/post/544472/

Поделиться ссылкой: 
Вернуться к списку

kotofey.ru
Реклама

angiopharm.promo.page
Реклама
•
16+
Дельфинья кожа: как добиться сияния без инъекций

art-fresco.ru
Реклама

Дизайнерские фотообои
от 2 300 ₽

torg-oboi.ru
Реклама

Магазин обоев в 5 мин. от м. Семёновская
от 300 ₽

dollgallery.ru
Реклама
Клуб коллекционеров кукол — dollgallery.ru

wolly.ru
Реклама

Магнитная плёнка (подложка) Wolly® Ferro WLY-F62
890 ₽

notebook.effectpress.ru
Реклама

Стильные ежедневники на 2026! Удивите сотрудников!

kuchenland.ru
Реклама

Интересные статьи
11 команд PowerShell для Office 365, которые полезно знать
11 команд PowerShell для Office 365, которые полезно знать
Использование PowerShell для управления Office 365 может сделать вашу работу быстрее, эффективнее и проще. PowerShell предоставляет доступ к информации о среде Office 365, к которой н...
5 наивных вопросов о беспроводной зарядке, которые продолжают задавать
5 наивных вопросов о беспроводной зарядке, которые продолжают задавать
На Хабре есть немало статей о беспроводной зарядке смартфонов, и в комментариях к каждой из них, нет-нет, да и проскользнет наивный вопрос, который местные старожилы мгновенно заминусуют,...
Обеспечение границ компонент чистой архитектуры с помощью Spring Boot и ArchUnit
Когда мы создаем программное обеспечение, мы хотим создавать «-способности»: понятность, ремонтопригодность, расширяемость и - в тренде сейчас - декомпозицию (чтобы мы могли разложить мон...
Почему об этом стоит задуматься всем: ответы на самые актуальные вопросы о коронавирусе Covid-19
Автор статьи Dave Troy — исследователь онлайн-дезинформации и лжи, а также эксперт в области расчётов, связанных со статистикой болезней. В последнее время он отвечал на многие вопросы о Covid-19...
Бизнес без технологий. Деньги, которые вас потеряли
Бизнес без технологий. Деньги, которые вас потеряли
Может показаться, что довольно опрометчиво писать на Хабр статью о компаниях, которые относятся к технологиям с недоверием, сильно на них экономят или не используют вовсе. На самом деле, такие ре...


Spring Interview Questions
Ever since its release back in October of 2002, Spring Framework has succeeded in becoming a top application framework for Java developers. In fact, it secures a place among the leading backend web development frameworks. Hence, opting for a career in Spring Framework is very lucrative.

Top Spring Interview Questions and Answers
Spring Framework has a wide array of concepts that one needs to have a working understanding in order to stay ahead in the game. If you’re preparing for a Spring job interview, then here are top Spring interview questions that you must know the answers to:

Question: Please list down the various features of Spring Framework and the advantages of using the same.
Answer:

Features of Spring Framework:

Allows creating and managing the configuration and lifecycle of application objects
AOP (Aspect Oriented Programming) provides support for unified development by separating application business logic from system services
Highly configurable MVC web application framework with the ability to easily switch to other frameworks
Instead of looking for or creating dependent objects, the objects give their dependencies. This design principle is known as IoC (Inversion of Control)
Lightweight
Offers a generic abstraction layer for transaction management that can also be used in container-less environments
The JDBC abstraction layer offers an exception hierarchy that simplifies error handling
Advantages:

Enables POJO (Plain Old Java Object) Programming that further enables continuous integration and testability
Open-source with no vendor lock-in
Simplified JDBC because of DI (Dependency Injection) and Inversion of Control
Thanks to the layered architecture, it’s easy to keep what you want and discard what you don’t
Question: How many modules does the Spring Framework have?
Answer: Spring Framework has about 20 modules. Each of them is classified into one of the following layers:

Spring Core Container – The basic core layer of the Spring Framework. It has the following modules:
SpEL (Spring Expression Language)
Spring Bean
Spring Core
Spring Context
Data Access/Integration – This is the layer responsible for providing support for interacting with the database. It contains the following modules:
JDBC (Java DataBase Connectivity)
JMS (Java Messaging Service)
ORM (Object Relational Mapping)
OXM (Object XML Mappers)
Transaction
Web – Providing support for creating web applications is the responsibility of this layer. It has these modules:
Web
Web – MVC
Web – Portlet
Web – Socket
Aspect-Oriented Programming – Allows using Advice, Pointcuts, and others to decouple the code
Instrumentation – Provides support for class instrumentation and classloader implementations
Test – Responsible for providing support for accomplishing testing using JUnit and TestNG
Some additional Spring Framework modules are:

Aspects – Offers support for integrating with AspectJ
Messaging – Provides support for STOMP and an annotation programming model used for processing as well as routing STOMP messages from WebSocket clients
Spring Framework

Question: What components does a Spring application have?
Answer: A typical Spring application can be subdivided into the following components:

Bean Class – Contains properties, functions, setter and getter methods, et cetera
Bean Configuration File – Contains information on classes as well as how to configure the same
Interface – Defines the functions
Spring Aspect Oriented Programming – Provides the functionality of cross-cutting concerns
User Program – Uses the function
Question: What do you understand by the Spring IoC Container? Explain their types.
Answer: The Spring IoC container lies at the core of the Spring Framework. The container uses Dependency Injection for managing various Spring application components.

The IoC container is responsible for creating the objects, configuring them, wiring them together, and managing their lifecycle. The container receives instructions about the same from the provided configuration metadata.

Means for providing the configuration metadata can include Java annotations, Java code, or XML. There are two types of IoC containers in Spring:

ApplicationContext – Provides additional functionality. It is built on top of the BeanFactory interface.
BeanFactory – A prepackaged class containing a collection of beans. Instantiates the bean whenever as required by the clients
Question: Please explain the Dependency Injection in Spring. In how many ways can the same be used?
Answer: Instead of creating objects directly, Dependency Injection allows defining how objects should be created. As such, the code doesn’t directly contain connecting components and services together.

The configuration file has the information on which services are needed by which components. The IoC container is responsible for connecting components with the appropriate services. Dependency Injection can be used in the following forms:

Construction Injection
Setter Injection
Question: Can you differentiate between ApplicationContext and BeanFactory in Spring?
Answer:

Annotation Based Dependency – BeanFactory doesn’t support annotation-based dependency while ApplicationContext does
Interface Definition – BeanFactory interface is defined in org.springframework.beans.factory.BeanFactory while the ApplicationContext interface is defined in org.springframework.context.ApplicationContext
Internationalization Support – While ApplicationContext supports internationalization, BeanFactory doesn’t
Object Management – BeanFactory uses syntax for providing a resource object. Contrarily, ApplicationContext creates as well as manages resource objects on its own
Type of Initialization – ApplicationContext makes use of eager or aggressive initialization. On the other hand, BeanFactory uses lazy initialization
Question: How is the configuration metadata provided to the Spring container?
Answer: There are three ways in which the configuration metadata is provided to the Spring container, enumerated as follows:

Annotation-based Configuration – By default, annotation wiring is turned off in the Spring container. Using annotations on the applicable class, field, or method declaration allows it to be used as a replacement of using XML for describing a bean wiring.
Java-based Configuration – This is the newest form of configuration metadata in Spring Framework. It has two important components:
@Bean annotation – Same as that of the <bean/> element
@Configuration annotation – Allows defining inter-bean dependencies by simply calling other @Bean methods in the same @Configuration class
XML-based Configuration – The dependencies, as well as the services required by beans, are specified in configuration files that follow the XML format. Typically, these configuration files contain several application-specific configuration options and bean definitions.
Question: What do you understand by Spring Beans? How many bean scopes are supported by Spring Framework?
Answer: Configured, instantiated, managed, and wired by the Spring IoC container, Spring Beans are the objects that form the core of a Spring application. Spring Beans are created with the configuration metadata supplied to the Spring IoC container.

Spring Framework provides support for a total of 5 scopes:

Global-session* – Provides scope for a bean definition to a Global HTTP-session
Prototype – Provides scope for a single bean definition for having any number of object instances
Request* – Provides scope for a bean definition to an HTTP-request
Session* – Provides scope for the bean definition to a single instance per Spring IoC container
Singleton – Provides scope for the bean definition to a single instance per Spring IoC container * ? Available only when using a web-aware ApplicationContext.
Question: Please explain the Bean lifecycle in Spring Bean Factory Container?
Answer:

The bean lifecycle starts with the Spring IoC container instantiating the bean from the bean’s definition present in the XML file
As specified in the bean definition, Spring then populates all properties using DI
If the bean implements the BeanNameAware interface then the setBeanName() method is called by passing the bean ID
If the bean implements the BeanFactoryAware interface, the setBeanFactory() method is called by passing an instance of the bean
If there are any BeanPostProcessors associated with the bean then the preProcessBeforeInitialization() methods are called
The init method is called if it is specified for the bean
At last, the postProcessAfterInitialization() methods are called if there are any BeanPostProcessors associated with the bean.
Question: What is a Spring Configuration File?

Answer: Since Spring is based on the concept of Dependency Injection, all the classes, interfaces, and their dependencies are stored in a file termed as the spring configuration file. It is a .xml file. The spring container uses this file to control the lifecycle of spring beans. A bean is configured as:

<bean id = "..." class = "..." init-method = "..." lazy-init="true" destroy-method="....">
      <!-- bean dependencies and configurations -->
</bean>
Question: What are the benefits of IoC (Inversion of Control)?
Answer: The advantages are:

No need to write extensive code on how services are created and getting object references. Everything can be achieved through simple configurations. New dependencies and services can be added just by adding a constructor or setter method.
Code is more accessible to unit test as it is designed as several components, and developers can inject their objects and switch implementations.
Loose coupling of components.
Allows for lazy loading of objects and dependencies.
Question: What is the Bean life cycle in Spring Bean Factory Container?
Answer: The bean lifecycle is as follows:

The bean is instantiated by the Spring container from the bean definition found in the spring configuration file.
Using dependency injection, all the properties specified in the bean definition are populated.
If the bean implements the BeanNameAware interface, setBeanName() is called by the bean factory bypassing the bean's ID.
If the bean implements the BeanNameAware interface, setBeanFactory() is called by passing the bean's instance. 
If any BeanPreProcessors are associated with the bean, preProcessBeforeInitialization(), methods are called.
Init-method, if defined for the bean, will be called.
Lastly, postProcessAfterInitialization() methods are called, if required.
Question: Explain inner beans in Spring.
Answer: Inner beans are the beans that exist within the scope of another bean. The concept is similar to inner classes in Java. The inner bean is defined as the target inside the outer bean id tag.

<bean id = "outerBean" class = "...">
      <property name = "target">
         <bean id = "innerBean" class = "..."/>
      </property>
</bean>
Question: What is Annotation-based container configuration? Also, explain how to turn on annotation wiring in Spring Framework.
Answer: Annotation-based container configuration is an alternative to XML setups. Rather than using XML for describing a bean wiring, the developer moves the configuration to the component class by using annotations on the appropriate class, field, or method declaration.

Because annotation wiring is turned off by default, it needs to be turned on before it can be used. It is done by configuring the <context:annotation-config/> element in the Spring configuration file.

Question: Please explain the various annotations supported by Spring.
Answer:

@Autowired – Used for autowiring bean on the setter methods, a property, constructor or methods with arbitrary names or several arguments. It provides precise control over how and where the autowiring needs to be done.
@Component – A generic stereotype for a Spring-managed component, it marks a Java class as a bean that can be picked up by a component-scanning mechanism and pull it into the application context.
@Controller – Marks a class as a Spring Web MVC controller. Beans marked with this annotation are automatically imported into the Dependency Injection container.
@Qualifier – Used along with @Autowired annotation for specifying that only one of the several yet alike beans, needs to be wired.
@Repository – A specialization of the component annotation with almost identical use and functionality. Specifically, it provides additional benefits for DAOs (Data Access Objects).
@RequestMapping – Maps a particular HTTP request method to a specific class or method in controller responsible for handling the respective request.
@Required – Applied to bean property setter methods, it indicates that the bean property needs to be populated at the configuration time with the use of an explicit property value present in a bean definition or via autowiring. In case the bean property is not populated, the container throws the BeanInitializationException message.
@Service – Another specialization of the component annotation. Although it doesn’t offer any additional behavior over the component annotation, it can be used over the @component annotation in service-layer classes for specifying the intent in a better way.
Question: What do you mean by Spring DAO support?
Answer: The Spring DAO support eases working with data access technologies, such as JDBC, JDO, and Hibernate, in a reliable way. Also, it allows coding without worrying about catching specific-technology exceptions and easily makes a switch amongst persistence technologies.

Question: What classes does the JDBC API contain?
Answer:

JdbcTemplate
NamedParameterJdbcTemplate
SimpleJdbcCall
SimpleJdbcInsert
SimpleJdbcTemplate
Question: How will you access Hibernate using Spring Framework?
Answer: Hibernate can be accessed using Spring Framework in the following two ways:

Extending HibernateDAOSupport and then applying an AOP Interceptor node
Inversion of Control with a Hibernate Template and Callback
Question: Enumerate the types of transaction management supported by Spring.
Answer: Spring Framework provides support for two types of transaction management:

Declarative transaction management – While the transaction management is separated from the business code, only annotations or XML-based configurations are used for managing transactions.
Programmatic transaction management – The transaction is managed with programming. Although extremely flexible, it is very difficult to maintain.
Question: Please explain the AOP technique.
Answer: AOP or Aspect-Oriented Programming is a programming technique that allows programmers to modularize behavior that cuts across the typical division of responsibility or cross-cutting concerns. Logging and transaction management are examples of cross-cutting concerns.

Question: What is Advice in Spring? Explain its various types.
Answer: Any action taken by an aspect at some particular joinpoint in Spring Framework is called an Advice. Spring AOP makes use of advice for maintaining a chain of interceptors “around” the joinpoint i.e. as an interceptor. Advice can be of the following types:

After (finally) – Configured using the @After annotation mark, it is executed after a joinpoint method, whether exiting normally or throwing an exception
After returning – Configured using the @AfterReturning annotation mark, it is executed right after the joinpoint method completes normal execution
After throwing – Configured using the @AfterThrowing annotation mark, it is executed if and only if the jointpoint method exits by throwing an exception
Around – Configured using the @Around annotation mark, it is executed before as well as after a joinpoint method
Before – Configured using the @Before annotation mark, it is executed before the joinpoint method
Question: Could you draw a comparison between concern and crosscutting concerns in Spring AOP?
Answer: While the concern is a behavior that the developer wants to have in a particular module of a Spring application, the cross-cutting concern is a concern that is applicable throughout the entire Spring application.

Question: What do you understand by the Spring MVC framework?
Answer: The Spring MVC framework is responsible for providing model-view-controller architecture as well as ready-to-use components, used for developing flexible and loosely coupled web apps.

The MVC pattern helps in separating out the various aspects of the application, such as business logic, input logic, and UI logic, in addition to providing a loose coupling amongst these separated elements.

Question: Please explain DispatcherServlet.
Answer: The DispatcherServlet is the essence of Spring Web MVC framework and handles all the HTTP requests as well as responses. Upon receiving the entry of handler mapping from the configuration file, the DispatcherServlet forwards the request to the controller.

Thereafter, the controller returns an object of Model and View. Afterward, the Dispatcher Servlet checks the configuration file for the entry of view resolver and calls the specified view component.

Question: What is Spring?
Answer: Spring is an integrated framework that is used for developing enterprise applications in Java language.

Question: Are there any differences between the Bean Factory and Application Context?
Answer: Yes, there are many differences between the Bean Factory and Application Context. These are stated as under:

Bean Factory	Application Context
It is a basic container	It is an advanced container
It has a limited interface.	It extends the Bean Factory interface
It offers various fundamental facilities.	It offers additional facilities than Bean Factory, including integration with Spring AOP, Message Resource Handling for i18n, and various others.
Question: What are the differences between the Constructor Injection and Setter Injection?
Answer: The differences between the Constructor Injection and Setter Injection can be stated as under

Constructor Injection	Setter Injection
It has a complete injection	It has a partial injection
It does not override the setter property	It overrides the constructor property when they both are defined.
It creates new Instances when modifications are required.	It does not create a new Instance when the property value is changed.
It is better for many more properties than Setter Injection	It is good for a few properties.
Question: Define Autowriting in Spring?
Answer: Autowiring in Spring helps the computer programmers to apply bean automatically without writing explicit injection logic. The various auto writing modes include the following.

No.
byname.
byType.
Constructor.
Question: What are the different types of Bean scopes in Spring framework?
Answer: There are mainly five types of Bean scopes in the Spring framework. These include the following.

Singleton.
Prototype.
Request.
Session.
Global session.
Question: What is a Pointcut in Spring?
Answer: Pointcut is an expression language of Spring AOP.

What are the different latest versions of Spring framework?

The latest versions of the Spring framework are as follows.

Spring 2.5
Spring 3.0
Spring 4.0
Question: What is a JoinPoint?
Answer: A JoinPoint is a point during the execution of a program and represents the method execution. It includes the execution of a method or even handling of an exception.

Question: What are the differences between Spring AOP and AspectJ AOP?
Answer: There are several differences between Spring AOP and AspectJ AOP, which are stated as under:

Spring AOP	AspectJ AOP
The proxy is done through Runtime weaving.	Compile-time weaving is done through AspectJ Java tools
Method level PointCut is applied	Field level PointCut is applied
It is based on DTD	It is based on schema and annotation configuration
Question: What is a proxy in Spring Framework?
Answer: A proxy in the Spring framework is referred to as the creation of an object after applying advice to a particular target object. 

Question: When are the target object and proxy objects the same?
Answer: The target object and proxy object are the same in the case of client objects.

Question: What is weaving in the Spring framework?
Answer: Weaving in Spring framework is the process of linking a particular aspect with other application types or objects so that an advised object is created. It is performed mostly during Runtime.

Question: What is Spring Security?
Answer: Spring Security is a separate module in the Spring framework that focuses on offering authentication and authorization methods that can be used in Java Applications.

Question: What is the Spring Boot?
Answer: Spring Boot is the name given to a project which offers a pre-configured set of the framework, which is meant to reduce the boilerplate configuration. It helps in getting spring applications up and running with lesser codes.

Question: What is Reactive Programming?
Answer: Reactive programming is a non-blocking and event-driven application. It scales with a small number of threads. The backpressure is on the key ingredient, which ascertains that the producers do not overwhelm consumers.

Question: What are the benefits of Reactive Programming?
Answer: There are various benefits of Reactive Programming, which include the following.

It helps in increasing the utilization of computing resources, including multicore and multi-CPU hardware.
It helps in increasing performance by a reduction in the serialization process.
Question: What are the important characteristics of the Reactive system?
Answer: The important characteristics of the Reactive system includes the following.

Message-driven.
Resilient.
Responsive.
Elastic.
Question: Define Spring Webflux?
Answer: Spring Web flux is a highly reactive web framework of Spring. It acts as an alternative to Spring MVC and offers a highly scalable and non-blocking stack.

Question: Define Mono and Flux types?
Answer: Mono and Flux types, are both the reactor of the Spring Framework 5. The Mono represents the single async value, while the Flux represents the stream of async value. Together they help to implement the publisher interface, which is defined clearly in the reactive streams specifications.

Question: What is the basic difference between Mono and Flux in Spring?
Answer: Mono implements the publisher and returns 0 or even one element while the Flux implements the publisher and return N elements.

Question: What are the common features of Mono and Flux?
Answer: The common features of Mono and Flux include the following.

They represent streams.
They can’t be executed without consuming the stream using the subscribe method.
They are immutable and can be called again and again to create a new instance of Flux or Mono.
Question: Difference between the Web client and Webtestclient?
Answer: The difference between the Web client and Webtestclient can be stated as follows.

Web client	Webtestclient
Web client acts as a reactive client who performs non-blocking HTTP requests. 	Webtestclient also acts as a reactive client that can be used in tests.
It can handle reactive streams with backpressure.	It can bind directly to WebFlux application by applying mock request and response objects.
It can take advantage of JAVA 8 Lambdas.	It can connect to any server over an HTTP connection.
Question: Do you think that Spring 5 compatible with older versions of JAVA?
Answer: No, Spring 5 is not compatible with the older versions of JAVA. It requires at least JAVA 8 for attaining compatibility.

Question: Can Spring Boot allow Spring MVC or Spring WebFlux in the same application?
Answer: Yes, Spring Boot can allow either Spring MVC or Spring WebFlux in the same application but with the condition to apply only one at a time. This is because MVC is a blocking paradigm, and WebFlux is a non-blocking paradigm and hence cannot be used together.

Question: Can Spring MVC run on Netty?
Answer: No, Spring MVC cannot run on Netty. 

Question: Can Spring 5 Integrate with the Jdk9 Modularity?
Answer: Yes, Spring 5 could integrate with the Jdk9 Modularity. This can be stated as follows.

Step 1: Creating a new class:

package com.hello;
public class HelloWorld {
    public String sayHello(){
        return "HelloWorld";
    }
}
Step 2: Creating a new module:

module com.hello {
    export com.hello;
}
Step 3: Creating a new Java Project:

module com.hello.client {
    requires com.hello;
}
Step 4: Testing the new module:

public class HelloWorldClient {
    public static void main(String[] args){
        HelloWorld helloWorld = new HelloWorld();
        log.info(helloWorld.sayHello());
    }
}
Conclusion
So, that completes the list of the top Spring interview questions. These questions will surely help you buckle up for your Spring interview.

Looking for more Spring interview questions? Here is a great udemy course for the same: Spring Interview Questions Preparation Course.

Here is a great book that helps you to prepare well for any programming interview: Cracking the Coding Interview: 189 Programming Questions and Solutions.


The spring boot interview questions are divided into different categories. Let's get started!

Spring boot Interview Questions for Freshers
Spring Boot Interview Questions for Experienced
Spring Boot Microservices Interview Questions
Java Spring boot interview questions
Spring Boot Interview Questions FAQs
Yes, you are in the right place. In this article, we have listed all the latest and most frequently asked spring boot interview questions with proper explanations and examples that help you understand the overall concept from the scratch. You can also use the code provided for some of the questions and run it on your machines to get better clarity on the concepts.

This article helps you to go through all the major spring boot interview questions and attend the interview confidently. This article also covers a lot of spring boot interview questions for freshers and experienced.

Spring Boot Interview Questions for Freshers
With the help of Spring boot interview questions for freshers, candidates can prepare for their interviews and increase their chances of getting hired. This guide covers some of the most commonly asked Spring boot interview questions that freshers are likely to encounter during their interviews.

1.  What is Spring Boot?
Spring Boot is called a microservice framework that is built on top of the spring framework. This can help developers to focus more on convention rather than configuration.

The main aim of Spring boot is to give you a production-ready application. So, the moment you create a spring-boot project, it is runnable and can be executed/deployed on the server. 
It comes with features like autoconfiguration, auto dependency resolution, embedded servers, security, health checks which enhances the productivity of a developer.
2. How to create Spring Boot project in eclipse?
One of the ways to create a spring boot project in eclipse is by using Spring Initializer.

You can go to the official website of spring and add details such as version, select maven or Gradle project, add your groupId, artifactId, select your required dependencies and then click on CREATE PROJECT. 

Once the project is created, you can download it and extract and import it in your eclipse or STS.

And see your project is ready! To Install Spring Boot in Eclipse - Go to Eclipse IDE, click on "Help"->then go to Eclipse marketplace->and type Spring IDE and click on the finish button.

3. How to deploy spring boot application in tomcat?
Whenever you will create your spring boot application and run it, Spring boot will automatically detect the embedded tomcat server and deploy your application on tomcat.
After successful execution of your application, you will be able to launch your rest endpoints and get a response.

4. What is the difference between Spring and Spring Boot?
Difference between Spring and Spring boot are as follows:

Spring –

Is a dependency injection framework.
It is basically used to manage the life cycle of java classes (beans). It consists of a lot of boilerplate configuration.
Uses XML based configuration.
It takes time to have a spring application up and running and it's mainly because of boilerplate code.
Spring boot- 

It is a suite of pre- configured frameworks and technologies which helps to remove boilerplate configuration.
Uses annotations.
It is used to create a production-ready code.
5. What is actuator in spring boot?
An actuator is one of the best parts of spring boot which consists of production-ready features to help you monitor and manage your application. 

With the help of an actuator, you can monitor what is happening inside the running application.
Actuator dependency figures out the metrics and makes them available as a new endpoint in your application and retrieves all required information from the web. You can identify beans, the health status of your application, CPU usage, and many more with the actuator. By using @Endpoint annotation, you can create a custom endpoint.

6. How to change port in spring boot?
The default port number to start your SpringBoot application is 8080.

Just to change the port number, you need to add server.port=8084c(your port number) property in your application.properties file and start your application.

7. How to create war file in spring boot?
To create a war file in spring boot you need to define your packaging file as war in your pom.xml(if it is maven project).

Then just do maven clean and install so that your application will start building. Once the build is successful, just go into your Target folder and you can see .war file generated for your application.                   

8. What is JPA in spring boot?
JPA is basically Java Persistence API. It’s a specification that lets you do ORM when you are connecting to a relational database which is Object-Relational Mapping. 

So, when you need to connect from your java application to relational database, you need to be able to use something like JDBC and run SQL queries and then you get the results and convert them into Object instances. 

ORM lets you map your entity classes in your SQL tables so that when you connect to the database , you don’t need to do query yourself, it’s the framework that handles it for you.

And JPA is a way to use ORM, it’s an API which lets you configure your entity classes and give it to a framework so that the framework does the rest.

9. How to save image in database using spring boot?
First configure mysql in your spring boot application.
Then you can map your entities with your db tables using JPA.
And with the help of save() method in JPA you can directly insert your data into your database
@RestController
@RequestMapping("/greatleasrning")
public class Controller {
@Autowired
private final GreatLearningRepository greatLearningRepository;
public Controller(GreatLearningRepository greatLearningRepository) {
}
In above case, your data which may be in JSON format can be inserted successfully into database.

@RequestMapping(method = RequestMethod.POST)
ResponseEntity<?> insert(@RequestBody Course course) {
greatLearningRepository.save(course);
 return ResponseEntity.accepted().build();
}
}
10. What is auto configuration in spring boot?
AutoConfiguration is a process by which Spring Boot automatically configures all the infrastructural beans. It declares the built-in beans/objects of the spring specific module such as JPA, spring security and so on based on the dependencies present in your applications class path.

For example: If we make use of Spring JDBC, the spring boot autoconfiguration feature automatically registers the DataSource and JDBCTemplete bean.
This entire process of automatically declaring the framework specific bean without the need of writing the xml code or java config code explicity  is called Autoconfiguration which is done by springBoot with the help of an annotation called @EnableAutoconfiguration alternatively @SpringBootApplication.

11. How to resolve whitelabel error page in spring boot application?
This is quite common error in spring boot application which says 404(page not found).

We can mostly resolve this in 3 ways:

Custom Error Controller- where you will be implementing ErrorController  interface which is provided by SpringFramework and then overriding its getErrorPath() so that you can return a custom path whenever such type of error is occurred.
By Displaying Custom error page- All you have to do is create an error.html page and place it into the src/main/resources/templates path. The BasicErrorController of of springboot will automatically pick this file by default.
By disabling the whitelabel error page- this is the easiest way where all you need to do is server.error.whitelabel.enabled property to false in the application.properties file to disable the whitelabel error page.
12. How to fetch data from database in spring boot?
You can use the following steps to connect your application with MySQL database.
1. First create a database in MySQL with create DATABASE student;
2. Now, create a table inside this DB:
CREATE TABLE student(studentid INT PRIMARY KEY NOT NULL AUTO_INCREMENT, studentname VARCHAR(255)); 
3. Create a SpringBoot application and add JDBC, MySQL and web dependencies.
4. In application.properties, you need to configure the database.

spring.datasource.url=jdbc:mysql://localhost:3306/studentDetails
spring.datasource.username=system123 
spring.datasource.password=system123 
spring.jpa.hibernate.ddl-auto=create-drop 
5. In your controller class, you need to handle the requests.

package com.student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class JdbcController {
@Autowired
JdbcTemplate jdbc;
@RequestMapping("/save")
public String index(){
jdbc.execute("insert into student (name)values(GreatLearnings)");
return "Data Entry Successful";
}
}
6. Run the application and check the entry in your Database.

13. How to use logger in spring boot?
There are many logging options available in SpringBoot. Some of them are mentioned below:

Using log4j2:
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
// [...]
Logger logger = LogManager.getLogger(LoggingController.class);
Using Lombok:
All you need to do is add a dependency called org.projectlombok in your pom.xml as shown below:

<dependency>
 <groupId>org.projectlombok</groupId>
<artifactId>lombok</artifactId>
<version>1.18.4</version>
<scope>provided</scope>
</dependency>
Now you can create a loggingController and add the @Slf4j annotation to it. Here we would not create any logger instances.

@RestController
@Slf4j
public class LoggingController {

@RequestMapping("/logging")
public String index() {
log.trace("A TRACE Message");
log.debug("A DEBUG Message");
log.info("An INFO Message");
log.warn("A WARN Message");
log.error("An ERROR Message");
 
return "Here are your logs!”;
}
}
So, there are many such ways in spring boot to use logger.

14. What is bootstrapping in spring boot?
One of the way to bootstrap your spring boot application is using Spring Initializer.
you can go to the official website of spring  and select your version, and add you groupID, artifactId and all the required dependencies. 

And then you can create your restEndpoints and build and run your project.
There you go, you have bootstrapped your spring boot application.

15. How to create jar file in spring boot?
To create a jar file in spring boot you need to define your packaging file as jar in your pom.xml(if it is maven project).

Then just do maven build with specifying goals as package so that your application will start building. 

Once the build is successful, just go into your Target folder and you can see .jar file generated for you application.

16. What is dependency injection in spring boot?
Dependency injection is a way through which the Spring container injects one object into another. This helps for loose coupling of components.

For example: if class student uses functionality of department class, then we say student class has dependency of Department class. Now we need to create object of class Department in your student class so that it can directly use functionalities of department class is called dependency injection.

17. How to store image in MongoDB using spring boot?
One of the way for storing image in MongoDB is by using Spring Content. And also you should have the below dependency in your pom.xml.

<dependency>
<groupId>com.github.paulcwarren</groupId>
<artifactId>spring-content-mongo-boot-starter</artifactId>
<version>0.0.10</version>
</dependency>
You should have a GridFsTemplate bean in your applicationContext.

@Configuration
public class Config

@Bean
public GridFsTemplate gridFsTemplate() throws Exception {
return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
}
...
Now add attributes so that your content will be associated to your entity.

@ContentId
private String contentId;

@ContentLength 
private long contentLength = 0L;

@MimeType
private String mimeType = "text/plain";
And last but not the least, add a store interface.
@StoreRestResource(path="greatlearningImages")
public interface GreatLearningImageStore extends ContentStore<Candidate, String> {
}
That’s all you have to do to store your images in mongoDb using Springboot.

18. How to configure hibernate in spring boot?
The important and required dependency to configure hibernate is:

spring-boot-starter-data-jpa
h2 (you can also use any other database)
Now, provide all the database connection properties in application.properties file of your application in order to connect your JPA code with the database.

Here we will configure H2 database in application.properties file:

spring.datasource.url=jdbc:h2:file:~/test
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=test
spring.datasource.password=test
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
Adding the above properties in your application.properties file will help you to interact with your database using JPA repository interface.

19. Mention the advantages of Spring Boot.
Advantages of Spring Boot -

It allows convention over configuration hence you can fully avoid XML configuration.
SpringBoot reduces lots of development time and helps to increase productivity.
Helps to reduce a lot of boilerplate code in your application.
It comes with embedded HTTP servers like tomcat, Jetty, etc to develop and test your applications.
It also provides CLI (Command Line Interface) tool which helps you  to develop and test your application from CMD.
20. Explain what is thyme leaf and how to use thymeleaf?
Thymeleaf is a server-side java template engine which helps processing and creating HTML, XML, JavaScript , CSS, and text. Whenever the dependency in pom.xml (in case of  maven project) is find, springboot automatically configures Thymeleaf to serve dynamic web content.

Dependency: spring-boot-starter-thymeleaf

We can place the thyme leaf templates which are just the HTML files in src/main/resources/templates/ folder so that spring boot can pick those files and renders whenever required.

Thymeleaf will parse the index.html and will replace the dynamic values with its actual value that is been passed from the controller class.
That’s it, once you run your Spring Boot application and your message will be rendered in web browsers.

21. What is the need for Spring Boot DevTools?
This is one of the amazing features provided by Spring Boot, where it restarts the spring boot application whenever any changes are being made in the code. 

 Here, you don’t need to right-click on the project and run your application again and again. Spring Boot dev tools does this for you with every code change.
Dependency to be added is: spring-boot-devtools

The main focus of this module is to improve the development time while working on Spring Boot applications.

22. Can we change the port of the embedded Tomcat server in Spring boot?
Yes, you can change the port of embedded Tomcat server in Spring boot by adding the following property in your application.properties file.

server.port=8084

The default port number of the tomcat server to run the spring boot application is 8080, which is further possible to change it.

So we can change the port of tomcat following ways given below:-

Using application.properties
Using application.yml
Using EmbeddedServletContainerCustomizer interface.
Using WebServerFactoryCustomizer interface.
Using Command-Line Parameter.
23. Mention the steps to connect Spring Boot application to a database using JDBC
Below are the steps to connect your Spring Boot application to a database using JDBC:

Before that, you need to add required dependencies that are provided by spring-boot to connect your application with JDBC.

Step 1: First create a database in MySQL with create DATABASE student;

Step 2:  Now, create a table inside this DB:
CREATE TABLE student(studentid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,     

studentname VARCHAR(255)); 

Step 3: Create a springBoot and add JDBC,mysql and web dependencies.
Step 4: In application.properties, you need to configure the database.

spring.datasource.url=jdbc:mysql://localhost:3306/studentDetails
spring.datasource.username=system123 
spring.datasource.password=system123 
spring.jpa.hibernate.ddl-auto=create-drop 
Step 5: In your controller class, you need to handle the requests.

package com.student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;
@RestController
  public class JdbcController {
@Autowired
JdbcTemplate jdbc;
   @RequestMapping("/save")
public String index(){
jdbc.execute("insert into student 
(name)values(GreatLearnings)");
	return "Data Entry Successful";
}
}
Step 6: Run the application and check the entry in your Database.

Step 7: You can also go ahead and open the URL and you will see “Data Entry Successful” as your output.

24. What are the @RequestMapping and @RestController annotation in Spring Boot used for?
The @RequestMapping annotation can be used at class-level or method level in your controller class.

The global request path that needs to be mapped on a controller class can be done by using @RequestMapping at class-level. If you need to map a particular request specifically to some method level.

Below is a simple example to refer to:

@RestController
@RequestMapping("/greatLearning")
public class GreatLearningController {
@RequestMapping("/")
String greatLearning(){
return "Hello from greatLearning ";
}
@RequestMapping("/welcome")
String welcome(){
return "Welcome from GreatLearning";
}
}
The @RestController annotation is used at the class level.

You can use @RestController when you need to use that class as a request handler class.All the requests can be mapped and handled in this class.

@RestController itself consists @Controller and @ResponseBody which helps us to remove the need of annotating every method with @ResponseBody annotation.

Below is a simple example to refer to for use of @RestController annotation:

@RestController
@RequestMapping(“bank-details”)
public class DemoRestController{
@GetMapping(“/{id}”,produces =”application/json”)
public Bank getBankDetails(@PathVariable int id){
return findBankDetailsById();
}
}
Here, @ResponseBody is not required as the class is annotated with @RestController.

25. What do you understand  by auto-configuration in Spring Boot and how to disable the auto-configuration?
AutoConfiguration is a process by which Spring Boot automatically configures all the infrastructural beans. It declares the built-in beans/objects of the spring-specific module such as JPA, spring-security, and so on based on the dependencies present in your application's classpath.
For example: If we make use of Spring JDBC, the spring boot autoconfiguration feature automatically registers the DataSource and JDBCTemplete bean.
This entire process of automatically declaring the framework-specific bean without the need of writing the XML code or java-config code explicitly  is called Autoconfiguration which is done by spring-boot with the help of an annotation called @EnableAutoconfiguration alternatively @SpringBootApplication.

1. You can exclude the attribute of @EnableAutoConfiguration where you don’t want it to be configured implicity in order to disable the spring boot's auto-configuration feature.

2. Another way of disabling auto-configuration is by using the property file:

For example: 

spring.autoconfigure.exclude= 
org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration,
org.springframework.boot.autoconfigure.data.MongoDataConfiguration,
In the above example, we have disabled the autoconfiguration of MongoDB.

26. Can you give an example for ReadOnly as true in Transaction management?
Yes, example for ReadOnly as true in Transaction Management is:

Suppose you have a scenario where you have to read data from your database like if you have a STUDENT database and you have to read the student details such as studentID, and studentName.

 So in such scenarios, you will have to set read-only on the transaction.

27. Mention the advantages of the YAML file than Properties file and the different ways to load  
YAML file in Spring boot.

YAML gives you more clarity and is very friendly to humans. It also supports maps, lists, and other scalar types.

YAML comes with hierarchical nature which helps in avoiding repetition as well as indentations.

If we have different deployment profiles such as  development, testing, or production and we may have different configurations for each environment, so instead of creating new files for each environment we can place them in a single YAML file.
But in the case of the properties file, you cannot do that.

For example: 

spring:
profiles:
active:
-test
---
spring:
profiles:
active:
-prod
---
spring:
profiles:
active:
-development
28. What do you understand by Spring Data REST?
By using Spring Data Rest, you have access to all the RESTful resources that revolves around Spring Data repositories.

Refer the below example:

@RepositoryRestResource(collectionResourceRel = "greatlearning", path = "sample")
public interface GreatLearningRepo extends CustomerRepository< greatlearning, Long> {
}
Now you can use the POST method in the below manner:

{
“Name”:”GreatLearning”
}
And you will get response as follow:

{
“Name”:”GreatLearning”
}
__________
{
"name": "Hello greatlearning "
"_links": {
"self": {
"href": "<a href="http://localhost:8080/sample/1">http://localhost:8080/ greatlearning /1</a>"
},
" greatlearning ": {
“href": "<a href="http://localhost:8080/sample/1">http://localhost:8080/ greatlearning /1</a>"
}
}
In the above, you can see the response of the newly created resource.

29. What do you think is the need for Profiles?
The application has different stages-such as the development stage, testing stage, production stage and may have different configurations based on the environments.

With the help of spring boot, you can place profile-specific properties in different files such as

application-{profile}.properties

In the above, you can replace the profile with whatever environment you need, for example, if it is a development profile, then application-development.properties file will have development specific configurations in it.

So, in order to have profile-specific configurations/properties, you need to specify an active profile.

30. How to insert data in mysql using spring boot?
First configure mysql in your spring boot application.

Then you can map your entities with your db tables using JPA.

And with the help of save() method in JPA, you can directly insert your data into your database.

@RestController
@RequestMapping("/greatleasrning")
public class Controller {
@Autowired
private final GreatLearningRepository greatLearningRepository;
public Controller(GreatLearningRepository greatLearningRepository) {
this. greatLearningRepository = greatLearningRepository;
}
In the above case, your data which may be in JSON format can be inserted successfully into the database.

@RequestMapping(method = RequestMethod.POST)
ResponseEntity<?> insert(@RequestBody Course course) {
greatLearningRepository.save(course);
return ResponseEntity.accepted().build();
}
}
31. How to create a login page in spring boot?
You can create a simple and default login page in spring boot, you can make use of Spring security. Spring security secures all HTTP endpoints where the user has to login into the default HTTP form provided by spring.

We need to add spring-boot-starter-security dependency in your pom.xml or build.gradle and a default username and password can be generated with which you can log in.

32. What is the main class in spring boot?
Usually in java applications, a class that has a main method in it is considered as a main class. Similarly, in spring boot applications main class is the class which has a public static void main() method and which starts up the SpringApplicationContext.

33. How to use crud repository in spring boot?
In order to use crud repository in spring boot, all you have to do is extend the crud repository which in turn extends the Repository interface as a result you will not need to implement your own methods.

Create a simple spring boot application which includes below dependency:
spring-boot-starter-data-jpa, spring-boot-starter-data-rest

And extend your repository interface as shown below:

package com.greatlearning;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface GreatLearning extends CrudRepository<Candidate, Long> 
{
public List<Candidate> findById(long id);

//@Query("select s from Candidate s where s.age <= ?")
public List<Candidate> findByAgeLessThanEqual (long age);
}
34. How to run spring-boot jar from the command line?
In order to run spring boot jar from the command line, you need to update you pom.xml(or build.gradle) of your project with the maven plugin.

<build>
<plugins>
<plugin>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-maven-plugin</artifactId>
</plugin>
</plugins>
</build>
Now, Build your application and package it into the single executable jar. Once the jar is built you can run it through the command prompt  using the below query:

java -jar target/myDemoService-0.0.1-SNAPSHOT.jar

And you have your application running.

35. What is Spring Boot CLI and how to execute the Spring Boot project using boot CLI?
Spring Boot CLI is nothing but a command-line tool which is provided by Spring so that you can develop your applications quicker and faster.

To execute your spring boot project using CLI, you need first to download CLI from Spring’s official website and extract those files. You may see a bin folder present in the Spring setup which is used to execute your spring boot application.

As Spring boot CLI allows you to execute groovy files, you can create one and open it in the terminal.
And then execute  ./spring run filename.groovy;

36. what is the rest controller in spring boot?
The @RestController annotation is used at the class level.

You can use @RestController when you need to use that class as a request handler class.All the requests can be mapped and handled in this class.

@RestController itself consists @Controller and @ResponseBody which helps us to remove the need of annotating every method with @ResponseBody annotation.

Below is a simple example to refer to for use of @RestController annotation:

@RestController
@RequestMapping(“bank-details”)
public class DemoRestController{
@GetMapping(“/{id}”,produces =”application/json”)
public Bank getBankDetails(@PathVariable int id){
return findBankDetailsById();
}
}
Here, @ResponseBody is not required as the class is annotated with @RestController.

37. How to handle 404 error in spring boot?
Consider a scenario, where there are no stockDetails in the DB and still, whenever you hit the GET method you get 200(OK) even though the resource is not found which is not expected. Instead of 200, you should get 404 error.
So to handle this, you need to create an exception, in the above scenario “StockNotFoundException”.

GetMapping("/stocks/{number}")  
public Stock retriveStock(@PathVariable int number)  
{  
Stock  stock  = service.findOne(number);  
if(Stock  ==null)  
//runtime exception  
throw new StockNotFoundException("number: "+ number);  
return stock;  
}  
Now, create a Constructor from Superclass.

Right-click on the file -> Go to Source ->And generate constuctors from superclass-> and check the RuntimeException(String)-> and generate.

And add an annotation called @ResponseStatus which will give you 404 (not found) error.

package com.greatlearning;  
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;  
 
@ResponseStatus(HttpStatus.NOT_FOUND)
public class StockNotFoundException extends RuntimeException   
{  
public StockNotFoundException(String message)   
{  
super(message);  
}  
}  
Now, you can hit the same URL again and there you go, you get a 404 error when a resource is not found.

38. Which is the spring boot latest version?
The latest version of spring boot is 2.6.0. It came out with a lot of dependency upgrades, java 15 support and much more.

Yes, now as you are brushed up with spring boot interview questions and answers. We have also tried to cover all the springboot interview questions for experienced professionals. Hope you can easily crack the spring boot interview now!

Please feel free to comment below if you have any queries related to the above questions or answers. Also, do comment if you find any other questions that you think must be included in the above list of questions.

Spring Boot Interview Questions for Experienced
As an experienced professional, you should be prepared to answer questions about your experience with Spring Boot. In this section, we will share some of the most common Spring Boot interview questions for experienced professionals.

39. How to check the environment properties in your Spring boot application?
If we need to set the different target environments, Spring Boot has a built-in mechanism.

One can simply define an application environment.properties file in the src/main/resources directory and then set a Spring profile with the same environment name.

For example, if we define a “production” environment, that means we'll have to define a production profile and then application-production.properties.

This environment file will be loaded and will take precedence over the default property file. You should note that the default file will still be loaded. It’s just that when there is a property collision, the environment-specific property file takes precedence.

40. Where do we define properties in the Spring Boot application?
Command Line Properties

Command-line properties are converted into Spring Boot Environment properties by the spring boot application. 

Command-line properties have more precedence over the other property sources. 

Spring Boot uses the 8080 port number, by default, to start the Tomcat. Let us see how one can change the port number by using command-line properties.

c:demotarget>java -jar demo-0.0.1-SNAPSHOT.jar --server.port=9090
Properties File

Properties files are used to keep one or more properties in a single file to run the application in a different environment. Properties are kept in the application.properties file under the classpath in a typical spring boot application. The location of the application.properties file is at src/main/resources directory. The code of application.properties file is as below:

sever.port=9090
spring.application.name = demoservice 
YAML File

Spring Boot also supports YAML-based properties configurations to run the application. The user can use,  application.yml file instead of the application.properties file. The YAML file is kept inside the classpath. The sample application.yml file is given below −

spring:
    application:
       name: demoservice
  server:
port: 9090
Externalized Properties

The user can keep properties in different locations or paths instead of keeping the properties file under classpath. While running the JAR file, the user can specify the properties file path. The application developer can use the following command to specify the location of the properties file while running the JAR −

-Dspring.config.location = C:application.properties
-C:demotarget>java -jar -Dspring.config.location=C:application.properties demo-0.0.1-SNAPSHOT.jar
41. What is an IOC container?
IoC Container is a framework that is used for implementing automatic dependency injection. It manages object creation and its lifetime. It, it also injects dependencies into the class.

The IoC container is used to create an object of the specified class. It also injects all the dependency objects through a constructor, a property, or a method at run time and disposes it at the appropriate time. With this, one doesn’t have to create and manage objects manually.

All the containers provide easy support for the Dependency Injection lifecycle as below.

Register: The container should know which dependency to instantiate when it encounters a particular type. This process is called registration. 

Resolve: When using the IoC container, the objects need to be created manually. This is done by the container and is called resolution. The container should include some methods to resolve the specified type; the container creates an object of the specified type. It then injects the required dependencies if any and returns the object.

Dispose: The container should manage the lifetime of the dependent objects. IoC containers include different lifetime managers to manage an object's lifecycle and dispose it.

42. What are the basic Annotations that spring boot offers?
First of all, we have to know about the annotations. Annotations are used to instruct the intention of the programmers.

As the name suggests, spring boot annotations is a form of Metadata that provides the whole data about the program. In other ways, we can define it as annotations are used to provide supplemental information about the program. It is not part of the program.

It does not change the programs which are already compiled.

Core Spring Framework Annotation:-
@Required:-
@Required applies to the bean setter method.

This indicates that the annotated bean must be populated at the configuration time with the required property; if the following case is not satisfied, it throws an exception BeanInitializationException.

@Autowired:-
 In the spring framework, spring provides annotation-based auto–wiring by providing @Autowired annotation.

It is used to auto-wire spring bean on setter methods, instance variables and constructors., When we use the annotation @Autowired, the spring container auto-wires the bean factory by matching the data type.

 Other Annotations which are provided by Spring Boot, Spring Framework, and In Spring MVC are:-

@configuartion.
@Componentscan
@Bean
@component.
@Controller.
@service.
@Repository
@EnableAutoConfiguaration
@SpringBootApplication.
@RequestMapping
@GetMapping
@PostMapping.
43. What is spring Boot dependency Management?
Spring Boot manages dependencies and configuration automatically. Each release of spring boot provides a list of dependencies that it supports. The list of dependencies available as a part of Spring-boot dependencies can be used in maven, so we need to specify the version of the dependencies or add the dependencies version in our config file in our configuration.

Spring boot automatically manages and spring boot upgrades all dependencies automatically respectively or consistently at the time when we update the spring boot version.

Advantage of Dependency Management:-
Spring dependency management provides us the centralized dependency information by adding or specifying the dependencies version in a required place in the spring boot version. It also helps us to switch from one version to another version with ease.
This management helps us to avoid the mismatch of different versions of the Spring Boot library.
Here we simply have to write a library name specifying the version.
44. Can we create a non-web application in spring boot?
Yes, but the application could also be called as spring boot standalone application.

To create a non-web application, your application needs to implement CommandLineRunner interface and its Run method for the running of our application. So this run method always acts like the main of our non-web application.

45. What is the default port of the tomcat server in Spring Boot?
As we had already discussed about the default port, the tomcat server in spring boot is port 8080. Which is changeable based on the user or the programmer’s requirement.

46. Can we override or replace the embedded tomcat server in spring boot?
If we consider the fact, spring boot by default comes up with the embedded server once we add the “Spring –boot-starter” dependency. But the spring boot gives us the flexibility to use the tomcat.

If we don’t want to use the tomcat, then tomcat comes with three types of embed servers: Tomcat, jetty, and undertow.

47. Can we disable the default web server in the spring boot application?
Yes, as discussed above, there are 3 web servers available we can choose between them. Spring boot gives more priority for using the tomcat server. 

48. Explain @Restcontroller annotation in spring boot?
Spring restcontroller annotation is an annotation that is itself annotated within two annotations.

@Restcontroller is annotated within @controller and @Responsebody. This annotation is applied to mark the respective class as a request handler in your application.

Spring Rest controller annotation is used to create restful web services using Spring MVC. 

49. What is the difference between @RestController and @Controller in Spring Boot?
@controller	@RestController
Controller is a common annotation that is used to mark a class as a spring MVC controller.	Rest controller is a Springspecial controller used in Restful web services and the wrapped within the @controller and @Responsebody
50. Describe the flow of HTTPS request through the spring boot app?
We all can see the above image of the spring boot flow architecture to understand the basic concept of the HTTPS request flow in the spring boot app.

We have the validator classes, view classes, and utility classes.

As we all know, spring boot uses the modules of spring-like MVC, spring data, etc.

So the concept also the same for several things, and also the architecture of spring boot is the same as the architecture of spring MVC; instead of one concept, there is no need for the DAO and DAOimpl classes in spring boot. 

It creates a data access layer and started performing CRUD operations.

CRUD operation is nothing but Create Read Update and Delete operation, which is done by all of the programmers in their website.

The client makes the HTTP request in PUT or GET.

After this, the request goes to the controller, and the controller maps that respective request and handles it; if there is the requirement for calling some logic, it calls the service logic after handling the request.

All the business logic performs in the service layer.

Service layer performs the logic on the data that is mapped to JPA with model classes.

A JSP page is returned to the user if no error has occurred.

51. What is the difference between RequestMapping and GetMapping?
The @GetMapping is a composed annotation which is the short notation of @RequestMapping(method=RequestMethod.GET).

These both methods support the “Consumes.”

The consumes options are,

Consumes=”text/plain”

Consumes={“text/plain”,”application”}; 

52. How to get the list of all the beans in your spring boot application?
 In the case of spring boot, you can use appContext.getBeanDefinitionNames() to get all the beans loaded by the spring container.

By calling this method, we can show all of our beans present in our spring boot applications.

Spring Boot Microservices Interview Questions

If you're looking for Spring Boot interview questions regarding microservices, you've come to the right place. In this article, we'll share with you some of the most popular and insightful questions that will help you prepare for your next interview.

53. What are Microservices?
Microservices is a style of architecture wherein the key business capabilities of an application are exposed as loosely coupled services that can be independently deployed. Each service exposed is referred to as Microservice. For example, let us take the example of an eCommerce application. We can design and build separate microservices for key business functionalities of the eCommerce application like Authentication, Customer Account, Product Catalog, Product Ordering, Product Offering Qualification, Shopping Cart, Recommendation, Payment, Payment Method, Shipment Tracking, etc.

54. What are microservices in spring boot?
Microservices is an architectural style wherein the key business capabilities of an application are exposed as loosely coupled services.

Sprint boot is a framework that has evolved to be formidable for Java microservice development.

Spring Boot enables building production-ready applications faster and provides embedded servers that are easy to deploy with containers.

Spring Cloud which builds on top of Spring Boot, provides features to quickly build production-ready microservices. It's possible to quickly set up services with minimal configurations Eg. Service Registration and discovery, circuit breakers, proxies, logging, log tracking, monitoring, etc.

55. What are Microservices in Java?
Microservices in Java are nothing but microservices with microservices architecture using Java programming language. The speciality of Microservices is that polyglot architecture is supported.  

For example, if a team is working on one of the microservice using Java, Spring Boot, and MySQL, another team can work on another microservice using Python, Node JS, and NoSQL. 

56. What is Microservices Architecture?
Microservice architecture is an architectural pattern of software development wherein an application's core business capabilities are exposed as loosely coupled services that can be developed, deployed, and maintained independently of each other. 

Each service performs a unique function.
Services are distributed across systems.
Services are organized around business capabilities.
Data management is decentralized
Governance is decentralized
Polyglot architecture where different microservices can use a different version of the same programming language and/or different programming language and/or different architectures as well.

57. Why Microservices?
In the case of monolith applications, there are several problems like

a. Same code base for presentation, business layer, and data access layer. Application is deployed as a single unit.

b. Complex to maintain and scalability is an issue.

Microservice solves the above problems. 

Microservices are ideal when a monolith or a legacy application needs to be modernized. 

For new software development, if the key business drivers are to reduce time to market, scalable better software, lower costs, faster development, or cloud-native development, microservices are ideal.

Each service is independent and gives the flexibility to choose the programming language, database, and/or architecture.

Distinct services can be developed, deployed, and maintained independently.

58. What is an API gateway in microservices?
API Gateway in Microservices is a Microservices Architecture pattern.

API Gateway is a server and is a single-entry point into the system. API Gateway is responsible for routing the request, composition, and translation of the protocol. All the requests from the clients first come to the API Gateway and the API Gateway routes the request to the correct microservice.

API Gateway can also aggregate the results from the microservices back to the client. API Gateway can also translate between web protocols like HTTP, web socket, etc.

API Gateway can provide every client with a custom API as well. 

An example of an API Gateway is Netflix API Gateway.

59. How to deploy microservices?
Microservices are developed and deployed quickly and in most cases automatically as part of the CI/CD pipeline. Microservices could be deployed in Virtual Machines or Containers. The virtual machines or containers can be On-premise or in the cloud as well.

There are different deployment approaches available for Microservices. Some of the possible deployment approaches for microservices are mentioned below.

Multiple service instances per host
Service instance per host
Service instance per VM
Service instance per Container
Serverless deployment
Service deployment platform
60. How to handle exceptions in microservices?
In the case of microservices, exception handling is important. If any exception/error is not handled, it will be propagated to all the downstream services creating an impact on the user experience. To make the services more resilient, handling exceptions becomes very important.

In the case of '500 - Internal Service Error', Sprint Boot will respond like below.

(    
"timestamp": "2020-04-02T01:31:08.501+00:00",
"path": "/shop/action",
"status": 500,
"error": "Internal Server Error",
"message": "",    
"requestId": "a8c4c6d4-3"
}
Spring provides ControllerAdvice for exception handling in Spring Boot Microservices. @ControllerAdivce informs Spring Boot that a class will act like an Interceptor in case of any exceptions.

We can have any number of exception handlers to handle each exception.

Eg. For handling generic Exception and RunTimeException, we can have 2 exception handlers.

@ControllerAdvice public class ApplicationExceptionHandler { @ExceptionHandler(Exception.class) public ResponseEntity handleGenericException(Exception e){ ShopException shopException = new ShopException(100, "Items are not found"); return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR) .body(shopException); } @ExceptionHandler(RuntimeException.class) public ResponseEntity handleRunTimeException(RuntimeException e){ ShopException shopException = new ShopException(101, "Item is not found"); return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR) .body(shopException); } }
61. What is Spring Cloud?
Spring Cloud is an open-source library that provides tools for quickly deploying the JVM based application on the clouds. It provides a better user experience and an extensible mechanism due to various features like Distributed configuration, Circuit breakers, Global locks, Service registrations, Load balancing, Cluster state, Routing, Load Balancing, etc. It is capable of working with spring and different applications in various languages

61. Features of Spring Cloud
Major features are as below:

Distributed configuration
Distributed messaging
service-to-service calls
Circuit breakers
Global locks
Service registration
Service Discovery
Load balancing
Cluster state
Routing
62. How Do You Override A Spring Boot Project’s Default Properties?
Spring Application loads properties from the application.properties files in the following locations and add them to the Spring Environment:

A /config subdirectory of the current directory.
The current directory
A classpath /config package
The classpath root
The list is ordered by precedence means that the properties that are defined in locations higher in the list override those defined in lower locations.

If the user does not want application.properties as the configuration file name, they can switch to another by specifying a spring.config.name environment property. The user can also refer to an explicit location using the spring.config.location environment property (comma-separated list of directory locations, or file paths).

$ java -jar myproject.jar --spring.config.name=myproject
or

$ java -jar myproject.jar --spring.config.location=classpath:/default.properties,classpath:/override.properties
63. How Is Spring Security Implemented In A Spring Boot Application?
Spring Security is a framework that majorly focuses on providing both authentication and authorization to Java EE-based enterprise software applications.

Adding Spring security:

Maven:

To include spring security, include the below dependency:

<dependencies> 
<dependency>
<groupID>org.springframework.security</groupID>
<artifactId>spring-security-config</artifactID>
<version>5.5.0</version>
</dependeny>
<dependency>
<groupId>org.springframework.security</groupId>
<artifactId>spring-security-web</artifactId>
<version>5.5.0</version>
</dependency>
</dependencies>
Gradle:

To include spring security in Gradle based project use:

repositories {
mavenCentral()
}
dependencies {
compile 'org.springframework.security:spring-security-web:5.5.0'
compile 'org.springframework.security:spring-security-config:5.5.0'
}
64. Which Embedded Containers Are Supported By Spring Boot?
The embedded containers supported by spring boot are Tomcat (default), Jetty, and undertow servers

65. Where Do We Use WebMVC Test Annotation?
@Target(value=TYPE)
@Retention(value=RUNTIME)
@Documented
@Inherited
@BootstrapWith(value=org.springframe.boot.test.autoconfigure.web.servlet.WebMvcTestContextBootsrapper.class)
@ExtendWidth(value=org.springframework.test.contect.junit.jupiter.SpringExtension.class)
@AutoConfigureCache
@AutoConfigureWebMvc
@AutoConfigureMockMvc
@ImportAutoConfiguration
public @interface WebMvcTest
Annotation can be used for a Spring MVC test that focuses only on Spring MVC components.

Using this annotation disables full auto-configuration and instead apply only configuration relevant to MVC tests (i.e., @Controller, @ControllerAdvice, @JsonComponent, Converter/GenericConverter, Filter, WebMvcConfigurer, and HandlerMethodArgumentResolver beans but not @Component, @Service, or @Repository beans).

By default, annotated tests with @WebMvcTest will also auto-configure Spring Security and MockMvc (including support for HtmlUnit WebClient and Selenium WebDriver). For more fine-grained control of MockMVC, the @AutoConfigureMockMvc annotation is used.

Usually @WebMvcTest is used in combination with @MockBean or @Import to create any collaborators required by your @Controller beans.

66. How to Configure Spring Boot Application Logging?
Spring Boot provides a LoggingSystem abstraction that configures logging based on the content of the classpath. If Logback is available, it is definitely the first choice.

Suppose the only change the user needs to make to logging is to set the levels of various loggers. In that case, they can do so in application.properties by using the "logging.level" prefix, as shown in the following example:

logging.level.org.springframework.web=DEBUG
logging.level.org.hibernate=ERROR
Java Spring boot interview questions
This section provides an overview of some of the most common Java Spring boot interview questions.

67. What is the Minimum Java version needed for Spring Boot?
Java 8 is the minimum version required.

68. How to use thymeleaf?
Steps are as follows:

First, create a Spring Boot Project using STS or Spring Initializer. Add dependency for Thymeleaf and Spring Web.
For Gradle:

implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
implementation 'org.springframework.boot:spring-boot-starter-web'
For Maven:

<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-web</artifactId>
</dependency>
Create a Controller Class in package by either adding a new package or use the default package containing the main application class.
DemoController.java:

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DemoController {

@GetMapping(value = "/thymeleafTemplate")
public String getTemplate(@RequestParam(name="name" , required=false, defaultValue="World") String name, Model model) {
model.addAttribute("name",name);
return "thymeleafTemplate";
}
}
Add template in the resources folder. src/main/resources/templates/thymeleafTemplate.html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title> Thymeleaf Spring Boot Demo </title>
</head>
<body>
<p th:text=" 'Hello, ' + ${name} + '!'"/>
<h4> Welcome to Thymeleaf Demo in Spring Boot</h4>
</body>
</html>
Build code.
Run the application using Integrated Development Environment: Run as -> Spring Boot App.

69. How to Use Spring Boot for Command-Line Applications?
To run Spring Boot for Command-Line Applications, Open the terminal window and change the directory to the root folder of your Spring Boot application. 

If the user list files in this directory, they should see a pom.xml file. One can also run your Spring Boot application as an executable Java jar file

70. How Can You Change the Default Port in Spring Boot?
Default port is 8080; The user can change the default port by:

Command-line:
java -jar spring-5.jar --server.port=8083
By changing in application.properties file
server.port=8081
Programmatic Configuration:
@SpringBootApplication
public class CustomApplication {
public static void main(String[] args {
SpringApplication app = new SpringApplication(CustomApplication.class);
app.setDefaultProperties(Collection.singletonMap("server.port", "8083"));
app.run(args);
}
71. Explain what happens in the background when a Spring Boot Application is “Run as Java Application”?
If you are using Eclipse IDE or an Eclipse maven plugin, make sure that as soon as you add a dependency or change the class file, it is compiled and available in the target folder. After that, it is just like any other Java application.

When you launch the java application, then the spring boot auto configuration kicks in.

It starts up tomcat when it sees that you are developing a web application!

72. What are the differences between JPA and Hibernate?
JPA is a standard, while Hibernate is not a standard. 

The. session is used to handle data’s persistence in hibernate, while in JPA,  Entity Manager is used. The query language in Hibernate is Hibernate Query language, while in JPA, the query language is Java Persistence query language. Hibernate is one of the most JPA providers.

73. What are the Spring Boot key components?
The four key components of Spring Boot are -

Spring Boot Starter: It is a key component of Spring Boot Framework and is primarily used to aggregate a group of dependencies into a single one. This helps in simplifying project dependencies.
Spring Boot CLI: It is an acronym for Spring Boot Command Line Interface. It is essentially software that helps in testing Spring Boot Applications from Command Prompt. 
Spring Boot AutoConfigurator: Another major component of Spring Boot Framework, it is used for the development of Spring-based applications that often require a lot of configuration. 
Spring Boot Actuator: Spring Boot Actuator assists in managing endpoints to Spring Boot applications. It is also used to provide Spring Boot Application metrics. 
74. What is the purpose of using @ComponentScan in the class files?
The @ComponentScan annotation is used to scan the components added to the project for the class file. It is also used to specify base packages and their classes using the basePackages attributes. As you specify the basePackages attribute, this will prompt Spring Boot to scan all the packages as well as subpackages of the classes that have been specified. 

75. What is Spring Initializr?
Spring initializr is a web-based application that helps in generating spring boot projects for developers. It will provide the basic structure code without any application code. Using the Maven or a Gradle build specification, you can build the code. It is very helpful when you are starting a project from scratch as it eliminates the need for setting up a framework. 

76. How do you Configure Log4j for logging?
Here is a simple example of the configuration of Log4j for logging -

Start by creating a Java project. You can do so by navigating to MyEclipse and then File->New-> Java Project.
Enter the project name and click Finish.
Now, to add the log4j file, right-click on the created java project name. Then select Build Path -> Configure Build Path.
Go to the library and click Add External JARs button.
Now from the drop down menu, select the log4j file and click OK.
Next, create a new Java file. 
Create a log4j,properties file. Now, create a new file on that folder with name log4j.properties and click Finish.
Add the log4j.properties file to the Classpath.
In Classpath, click on Advanced. Select the Add Folders option and click OK.
Now browse the folder for log4j.properties file. Click OK and apply Run.
Run the project. 
This will give the output on the console 
[main] DEBUG Example  - Hello this is a debug message

[main] INFO  Example  -   Hello this is an info message

77. What are the HTTP methods that can be implemented in spring boot rest service?
Here are the essential HTTP methods that can be implemented in the spring boot rest service -

GET: A key HTTP method, GET is used to know the representational view of the data. When used in read-only mode, it helps in keeping the data safe and secure. Also, the results are idempotent which means that you will get the same results no matter how many times it is used. 
POST: The POST restful API HTTP method works on resource collections. Using POST on the parent resource creates new resources associated with a proper hierarchy. It is highly useful for developers to prevent polluting the code and define resources in an explicit manner.
PUT: The PUT restful API helps in updating a resource. It does so by replacing the content of that resource entirely. It is the most common way of updating information.
PATCH: PATCH is also used to update resources. Unlike the PUT method, it only modifies resource content and does not replace it entirely. Unless you want to update every resource of your content, it is poor practice to apply PATCH. 
DELETE: This HTTP method is used to target and delete a single resource. However, its implementation can be inconsistent sometimes. 
78. What are the steps to add a custom JS code with Spring Boot?
You can add a custom JS code with Spring Boot in these steps -

Under the Resources folder, create a folder named Static. 
Put your static content in that folder. 
/src/main/resources/static is the suggested folder. 
Refer to the path to myStatic.js as - <script src="https://d3w1kvgvzbz2b5.cloudfront.net/js/myStatic.js"></script>
79. How to debug spring boot applications in eclipse? 
Start by opening an SSH port-forwarding tunnel to the server. 
Now, keep the SSH session running. Go to Eclipse> Toolbar> Run> Debug Configurations.
Select Remote Java Application and click on NEW. 
Select the Socket Attach as Connection Type Standard.
Select Host as LocalHost and Port as whatever you have configured. 
Click Apply and Debug. 
Also Read: Top 25 Common Interview Questions

This brings us to the end of the Spring Boot interview questions. We hope these questions help you prepare effectively for your upcoming interview and boost your confidence. To further enhance your understanding and gain more in-depth knowledge, explore free certification courses on Spring Boot and related technologies to give you an extra edge in your interview preparation.


Spring Boot Interview Questions FAQs
This FAQ section on Spring Boot interview questions covers some of the most commonly asked questions about Spring Boot, including questions about its features, working, etc.

1. What is a spring boot? Why should you use it?
Spring Boot provides a good platform for Java developers to reduce overall development time and increase efficiency by integrating tests. One can choose Spring Boot because it provides powerful batch processing, eases dependency management, and no manual configurations are needed.

2. What is the main class in spring boot?
The main class in spring boot is configured automatically by the “public static void main()”  method that starts up the Spring ApplicationContext. 

3. What are the spring boot features?
Some of the important spring boot features are mentioned below: 
Admin support: Springboot’s admin support feature is used to manage application remotely and also provides the facility to enable admin-related features for the application.
Externalized Configuration: Spring Boot’s externalized configuration helps the developers to work with the same application code in a different environment. 
Profiles: Springboot’s profile feature provides a way to segregate parts of your application and make it be available only in certain environments.
Logging: Springboot’s logging feature uses “Commons Logging” for all internal logging.
Internationalization: Springboot’s internationalization feature supports localized messages i.e your application can cater to different language preferences.
JSON: Spring Boot provides integration of three JSON libraries like Gson, Jackson, JSON-B.
Web applications: Spring Boot is one of the platforms that is well suited for web applications.
Security: Spring boot is by default secure with basic authentication on all HTTP endpoints.

4. How does spring boot handle exc
Springboot’s exception handler is an annotation that is used to handle the specific exceptions with the help of @ExceptionHandler annotation.

5. How does spring boot Microservice discover dependent Microservices?
Eureka service can discover dependent microservices in spring boot to get the job done. This service will register all the client microservices through the eureka server to get the dependent microservice.

6. What is a bean in spring? 
In Spring, the bean is defined as an object that is like a backbone of your application, managed by a Spring IoC container.

7. What is spring boot Microservices?
Spring Boot microservices enables production-ready applications to iterate fast and provide non-functional features. This is the reason why spring boot microservices has become the de facto standard for Java™. In microservices, you can write code for your single functionality. You can use different technology stacks for different microservices as per the skill set. You can develop this type of microservices with the help of Spring boot very quickly as spring boot gives priority to convention over configuration which increases the productivity of your developers.

8. What is the classpath in spring boot?
Classpath in spring boot is defined as a path where you place resources. During the development, stage maven will take files and place them in the appropriate place for you to use them.

9. How does spring boot application work?
Springboot can configure your application automatically based on the dependencies of the project by using @EnableAutoConfiguration annotation.

Avatar photo
Great Learning Editorial Team
The Great Learning Editorial Staff includes a dynamic team of subject matter experts, instructors, and education professionals who combine their deep industry knowledge with innovative teaching methods. Their mission is to provide learners with the skills and insights needed to excel in their careers, whether through upskilling, reskilling, or transitioning into new fields.
Recommended for you
armstrong in python
Armstrong Number in Python
C++ IDEs 
C++ Projects To Work On In 2025
web scraping projects
Top 10 Web Scraping Projects
Javascript Interview Questions
Top 100+ JavaScript Interview Questions and Answers

Latest Technologies in Computer Science in 2025
Salesforce interview questions
Top 100 Salesforce Interview Questions and Answers
Free Courses
Free Artificial Intelligence Course With Certificate
Free Prompt Engineering Course With Certificate
Python for Machine Learning Free Course
Data Science Foundations Free Course
Deep Learning with Python Free Course
Introduction to Cyber Security Free Course
Free Digital Marketing Course
Java Programming Free Course
View More →
PG & Professional Certificate Courses
AI Courses
Agentic AI Courses
Generative AI Courses
Data Science Courses
MBA Courses
Master's Degree
Cybersecurity Courses
Management Courses
Software Engineering Courses
Cloud Computing Courses
PG Courses
Professional Courses
Degree Programs
SRM Sikkim Online MBA
SRM Sikkim Online MCA
SRM Sikkim Online BBA
SRM Sikkim Online BCA
SRMIST Online MBA
SRMIST Online MCA
SRMIST Online BBA
SRMIST Online BCA
SRMIST Online M.Com
    
About Us
Transparency Hub
Contact Us
Privacy Policy
Terms of Use
Great Learning Careers
© 2013 - 2026 Great Learning Education Services Private Limited. All rights reserved

Get our android app
Get our ios app
Scroll to Top


Training in Top Technologies 
Career Related Programs 
Webinars
EbookNEW
Explore Online Courses
Home
Blog
Programming & Frameworks
Top 80 Spring Interview Questi...
Spring Framework (11 Blogs)
Top 80 Spring Interview Questions You Must Prepare In 2025
Programming & Frameworks
Topics Covered
C Programming and Data Structures (16 Blogs)
Comprehensive Java Course (5 Blogs)
Java/J2EE and SOA (341 Blogs)
Spring Framework (9 Blogs)
SEE MORE Programming & Frameworks blog posts
Banner image
Top 80 Spring Interview Questions You Must Prepare In 2025
Last updated on Jan 09,2025626.5K Views
Share
image not found!
image not found!
image not found!
image not found!
image not found!
image not found!

Swatee ChandSwatee Chand 
Sr Research Analyst at Edureka. A techno freak who likes to explore different technologies. Likes to follow the technology trends in market and write...
image not found!
image not found!
image not found!
image not found!
image not found!
image not found!
1 / 1 Blog from Spring Interview Questions 
myMock-desk-banner-bg
Are you thinking of pursuing your career in Spring Framework? Are you searching for an appropriate QnA set to prepare for your interviews? Here is a blog on Spring Interview Questions which discusses on top 80 questions with proper explanation and examples. It will definitely help you to ace the interviews. But before starting with the Spring Interview Questions, let’s take a quick look on Spring Framework’s demand and status in the market.

Since it’s release, the Spring Framework has continued to bloom in the market. Spring community is continuously coming up with new things and have spread into a vast ecosystem. Today, it holds the top position in the framework market. Check out the below graph which shows the frameworks most frequently used in the market as on January 2018.

Want to Upskill yourself to get ahead in Career? Check out the Top Trending Technologies Article.
spring vs other frameworks - Spring Interview Questions - Edureka!

You might ask why is Spring certification so much in demand? Well, the answer is, because it provides a comprehensive programming and configuration model for modern Java-based enterprise applications. It is not concerned with the deployment platform used. A key element of Spring Framework is infrastructural support at the application level. It’s very much unlikely to go out of the market in the near future with more major releases announced.

Before we move any further let us take a look some of the most frequently asked Spring Interview Questions,

Q1. What are the major features in different versions of Spring Framework?
Q2. What is a Spring Framework?
Q3. List the advantages of Spring Framework
Q4. What are the different features of Spring Framework?
Q5. How many modules are there in Spring Framework and what are they?
Q6. What is a Spring configuration file?
Q7. What are the different components of a Spring application?
Q8. What are the various ways of using Spring Framework?
Q9. What is Spring IOC Container?
Q10. What do you mean by Dependency Injection?

So, here are the Top 80 Spring Interview Questions which are most likely to be asked by the interviewer. If you are seeking a future in this field, these questions will surely help you to ace the interview. For your ease of access, I have categorized the questions under a few topics, namely:

General Questions
Dependency Injection/ IoC
Spring Beans
Spring Annotations
Spring Data Access
Spring AOP
Spring MVC
You may watch the webinar recording of Spring Interview Questions where our instructor has shared his experience and expertise that will help you to crack any Spring Interview.

Spring Interview Questions and Answers for 2025 | Edureka

 

Let’s begin with the first section of Spring interview questions, which is the General Questions.

General Spring Interview Questions
1. What are the major features in different versions of Spring Framework?
Features of Spring Framework
Version	Logo	Feature
Spring 2.5	spring 2.5 logo - Spring Interview Questions - Edureka!	This version was released in 2007. It was the first version which supported annotations.
Spring 3.0	spring 3.0 logo - Spring Interview Questions - Edureka!	This version was released in 2009. It made full-fledged use of improvements in Java5 and also provided support to JEE6.
Spring 4.0	Spring 4.0 logo - Spring Interview Questions - Edureka!	 This version was released in 2013. This was the first version to provide full support to Java 8.
2. What is a Spring Framework?
Spring logo - Spring Interview Questions - Edureka!Spring is a powerful open source, application framework created to reduce the complexity of enterprise application development.
It is light-weighted and loosely coupled.
It has layered architecture, which allows you to select the components to use, while also providing a cohesive framework for J2EE application development.
Spring framework is also called the framework of frameworks as it provides support to various other frameworks such as Struts, Hibernate, Tapestry, EJB, JSF etc.
3. List the advantages of Spring Framework.
Because of Spring Frameworks layered architecture, you can use what you need and leave which you don’t.
Spring Framework enables POJO (Plain Old Java Object) Programming which in turn enables continuous integration and testability.
JDBC is simplified due to Dependency Injection and Inversion of Control.
It is open-source and has no vendor lock-in.
4. What are the different features of Spring Framework?
Following are some of the major features of Spring Framework :

Lightweight: Spring is lightweight when it comes to size and transparency. 
Inversion of control (IOC): The objects give their dependencies instead of creating or looking for dependent objects. This is called Inversion Of Control.
Aspect oriented Programming (AOP): Aspect oriented programming in Spring supports cohesive development by separating application business logic from system services.
Container: Spring Framework creates and manages the life cycle and configuration of the application objects.
MVC Framework: Spring Framework’s MVC web application framework is highly configurable. Other frameworks can also be used easily instead of Spring MVC Framework.
Transaction Management: Generic abstraction layer for transaction management is provided by the Spring Framework. Spring’s transaction support can be also used in container less environments.
JDBC Exception Handling: The JDBC abstraction layer of the Spring offers an exception hierarchy, which simplifies the error handling strategy.
5. How many modules are there in Spring Framework and what are they?
There are around 20 modules which are generalized into Core Container, Data Access/Integration, Web, AOP (Aspect Oriented Programming), Instrumentation and Test.Spring Framework Architecture - Spring Interview Questions - Edureka!

Spring Core Container – This layer is basically the core of Spring Framework. It contains the following modules :
Spring Core
Spring Bean
SpEL (Spring Expression Language)
Spring Context 
Data Access/Integration – This layer provides support to interact with the database. It contains the following modules :
JDBC (Java DataBase Connectivity)
ORM (Object Relational Mapping)
OXM (Object XML Mappers)
JMS (Java Messaging Service)
Transaction
Web – This layer provides support to create web application. It contains the following modules :
Web
Web – MVC
Web – Socket
Web – Portlet
Aspect Oriented Programming (AOP) – In this layer you can use Advices, Pointcuts etc., to decouple the code.
Instrumentation – This layer provides support to class instrumentation and classloader implementations.
Test – This layer provides support to testing with JUnit and TestNG.
Few Miscellaneous modules are given below:

Messaging – This module provides support for STOMP. It also supports an annotation programming model that is used for routing and processing STOMP messages from WebSocket clients.
Aspects – This module provides support to integration with AspectJ.
Top 5 Backend Frameworks to Learn in 2025


6. What is a Spring configuration file?
xml file - Spring Interview Questions - Edureka!
A Spring configuration file is an XML file. This file mainly contains the classes information. It describes how those classes are configured as well as introduced to each other. The XML configuration files, however, are verbose and more clean. If it’s not planned and written correctly, it becomes very difficult to manage in big projects.

7. What are the different components of a Spring application?
A Spring application, generally consists of following components:

Interface: It defines the functions.
Bean class: It contains properties, its setter and getter methods, functions etc.
Spring Aspect Oriented Programming (AOP): Provides the functionality of cross-cutting concerns.
Bean Configuration File: Contains the information of classes and how to configure them.
User program: It uses the function.
8. What are the various ways of using Spring Framework?spring app - Spring Interview Questions - Edureka!
Spring Framework can be used in various ways. They are listed as follows:

 As a Full-fledged Spring web application.
As a third-party web framework, using Spring Frameworks middle-tier.
 For remote usage. 
As Enterprise Java Bean which can wrap existing POJOs (Plain Old Java Objects).
 

Spring Dependency Injection/ IoC Container Interview Questions
9. What is Spring IOC Container?
ioc - Spring Interview Questions - Edureka!
At the core of the Spring Framework, lies the Spring container. The container creates the object, wires them together, configures them and manages their complete life cycle. The Spring container makes use of Dependency Injection to manage the components that make up an application. The container receives instructions for which objects to instantiate, configure, and assemble by reading the configuration metadata provided. This metadata can be provided either by XML, Java annotations or Java code.

10. What do you mean by Dependency Injection? 
In Dependency Injection, you do not have to create your objects but have to describe how they should be created. You don’t connect your components and services together in the code directly, but describe which services are needed by which components in the configuration file. The IoC container will wire them up together.

11. In how many ways can Dependency Injection be done?
In general, dependency injection can be done in three ways, namely :

Constructor Injection
Setter Injection
Interface Injection
In Spring Framework, only constructor and setter injections are used.


12. Differentiate between constructor injection and setter injection.
Constructor Injection vs Setter Injection
Constructor Injection	Setter Injection
There is no partial injection.	There can be partial injection.
It doesn’t override the setter property.	It overrides the constructor property.
It will create a new instance if any modification is done.	It will not create new instance if any modification is done.
It works better for many properties.	It works better for few properties.
13. How many types of IOC containers are there in spring?
BeanFactory: BeanFactory is like a factory class that contains a collection of beans. It instantiates the bean whenever asked for by clients.
ApplicationContext: The ApplicationContext interface is built on top of the BeanFactory interface. It provides some extra functionality on top BeanFactory.
14. Differentiate between BeanFactory and ApplicationContext.
BeanFactory vs ApplicationContext
BeanFactory	ApplicationContext
It is an interface defined in org.springframework.beans.factory.BeanFactory	It is an interface defined in org.springframework.context.ApplicationContext
It uses Lazy initialization	It uses Eager/ Aggressive initialization
It explicitly provides a resource object using the syntax	It creates and manages resource objects on its own
It doesn’t supports internationalization	It supports internationalization 
It doesn’t supports annotation based dependency    	It supports annotation based dependency  
15.  List some of the benefits of IoC.
Some of the benefits of IoC are:

It will minimize the amount of code in your application.
It will make your application easy to test because it doesn’t require any singletons or JNDI lookup mechanisms in your unit test cases.
It promotes loose coupling with minimal effort and least intrusive mechanism.
It supports eager instantiation and lazy loading of the services.
16. In which scenario, you will use singleton and prototype scope?
Use Singleton Scope when you want to have only one instance shared across the entire application.
Use Prototype Scope when you want a new instance created every time it’s requested, providing independence for each part of the application.
17. What is the @Controller annotation used for?

The @Controller annotation is used in the Spring Framework for Java to mark a class as a controller component. It is part of the Spring MVC (Model-View-Controller) architecture, which is used to build web applications in a structured and organized way.

When you annotate a class with @Controller, Spring recognizes it as a controller and allows it to handle HTTP requests and generate HTTP responses. Controllers are responsible for processing user requests, interacting with the application’s business logic (services), and returning the appropriate view to render the response.

18. Can you create a controller without using @Controller or @RestController annotations?

Yes, you can create a controller in Spring without using the @Controller or @RestController annotations. The @Controller and @RestController annotations are just convenience annotations that provide specific functionalities, but you can achieve the same functionality by using other annotations or configuration.

To create a controller without using @Controller or @RestController, you can use the following approach:

Implement the Controller Logic: Create a regular Java class that contains the logic for handling HTTP requests and generating responses.
Use Appropriate Annotations: Instead of @Controller or @RestController, you can use other annotations to specify the request mappings and the response type.
Top 5 Backend Frameworks to Learn in 2025


19. What is ContextLoaderListener and what does it do?

The ContextLoaderListener is a Spring Framework component used in Java web applications to load the Spring application context when the web application starts. It initializes the IoC container, manages beans, and allows components to access Spring beans for their processing.

 

20. What are the differences between @RequestParam and @PathVariable annotations?

@requestParam	@pathVariable
Purpose	Extracts query parameters from the URL’s query string.	Extracts values from the URI path itself (URL template).
Syntax	Followed by the parameter name in the controller method’s parameter list.	Followed by the variable name in curly braces {} within the URL mapping.
ExampleURL	/example?name=John	/example/{id}
Example Usage	@RequestParam(“name”) String name	@PathVariable(“id”) String id
Use Case	Suitable for optional parameters or data in the query string.	Useful for extracting dynamic values from the URL path.
21. What is the use of @Autowired annotation?

The @Autowired annotation in Spring is used to automatically wire (inject) dependencies into a Spring bean. It enables automatic dependency injection, meaning that Spring will automatically find and inject the required dependencies into the bean without the need for manual configuration.

22. What is the role of @ModelAttribute annotation?

The @ModelAttribute annotation in Spring MVC is used to bind method parameters or method return values to model attributes. It plays a crucial role in the Model-View-Controller (MVC) architecture, where it helps transfer data between the Controller and the View.

The key role of @ModelAttribute is to facilitate data transfer between the Controller and the View. It allows you to pre-populate form data when displaying forms to users and automatically bind user inputs to model attributes when processing form submissions. Additionally, it helps in adding common attributes (like reference data) to the model across multiple controller methods.

23. What is the importance of the web.xml in Spring MVC?

The web.xml file in Spring MVC is used for configuring the DispatcherServlet, defining context parameters, filters, and listeners, as well as handling error pages. While newer Spring applications rely more on annotation-based configuration, web.xml remains essential for certain settings and legacy support.

 

24. What are the types of Spring MVC Dependency Injection?

The three types of Dependency Injection in Spring MVC are:

Constructor Injection: In constructor injection, the dependencies are injected through the constructor of a class.It is considered the preferred method of dependency injection as it ensures that all required dependencies are available when the object is created.
Setter Injection: In setter injection, the dependencies are injected using setter methods.Setter injection allows for optional dependencies, as not all setters need to be called during object creation.It can lead to mutable objects, as the dependencies can be changed after the object is created.
Field Injection: In field injection, the dependencies are injected directly into the class fields.
It is the least preferred method because it bypasses constructor-based or setter-based DI, making it harder to enforce required dependencies and testability.
25. What is the importance of session scope?

The session scope in Spring is an important mechanism for managing beans in web applications. It allows you to create and maintain a separate instance of a bean for each user session, ensuring that data associated with a specific user is preserved throughout their interactions with the application.

26. What is the importance of @Required annotation?

The @Required annotation was used in earlier versions of Spring to indicate that a property of a bean must be set (or wired) with a value before the bean can be fully initialized. However, starting from Spring 3.0, the @Required annotation has been deprecated and is no longer recommended for use.

 

27. Differentiate between the @Autowired and the @Inject annotations.

 

@autowired	@inject
Framework	Part of the Spring Framework	Part of the JSR-330 standard (Java Dependency Injection)
Configuration	Requires enabling component scanning in Spring	Requires a JSR-330 compliant DI framework
Qualification	Supports qualifiers like @Qualifier and @Primary	Does not have built-in qualifier support
Optional Dependency	By default, the dependency is required	By default, the dependency is not required
Optional Configuration	Can use @Autowired(required = false)	Can use @Inject without changing its default behavior
28. Are singleton beans thread-safe?

Yes, singleton beans in Spring are thread-safe by default. When you define a bean with singleton scope in Spring, the container ensures that only one instance of that bean is created and shared across all requests within the container’s context.

29. How can you achieve thread-safety in beans?

Yes, singleton beans in Spring are thread-safe by default. When you define a bean with singleton scope in Spring, the container ensures that only one instance of that bean is created and shared across all requests within the container’s context.

singleton beans in Spring are thread-safe as long as they are stateless or properly synchronized when dealing with mutable state. The Spring container manages singleton bean instantiation and synchronization to ensure their thread safety within the context.

 

30. What is the significance of @Repository annotation?

The @Repository annotation in Spring is a specialized stereotype annotation that serves as a marker for classes that fulfill the role of a data repository or DAO (Data Access Object). It is primarily used to indicate that the class is responsible for data access operations, such as reading from and writing to a database or any other external data source

31. How is the dispatcher servlet instantiated?

 The DispatcherServlet is automatically instantiated and initialized by the Servlet container during web application startup. It acts as the front controller for Spring MVC applications, managing the entire request-response lifecycle and delegating the processing to the appropriate components in the Spring application context.

32. How is the root application context in Spring MVC loaded?

The root application context in Spring MVC is loaded automatically during web application startup by the ContextLoaderListener. It handles overall configuration and bean management for the application, while the DispatcherServlet handles web-specific components and request handling.

 

33. How does the Spring MVC flow look like? In other words, How does a DispatcherServlet know what Controller needs to be called when there is an incoming request to the Spring MVC?

 

The Spring MVC flow involves several components working together to handle incoming requests and route them to the appropriate controllers for processing.

The DispatcherServlet plays a central role in the Spring MVC flow. It receives incoming requests, selects the appropriate controller based on the URL mapping, invokes the controller method to handle the request, prepares the model data and view, resolves the view, and finally sends the response back to the client. The flow is orchestrated through a combination of handler mappings, controllers, view resolvers, and views, allowing Spring MVC to handle various types of requests and produce dynamic responses.

 

34. Where does the access to the model from the view come from?

In Spring MVC, the Model object acts as a container to pass data from the Controller to the View for rendering. The Model is automatically made available to the View by the DispatcherServlet, and the View can access the data using expression language or template-specific syntax. This allows for separation of data handling and presentation concerns in the application.

35. Why do we need BindingResults?

BindingResult is used in Spring MVC for data binding and validation. It captures errors during form submission, helps prevent exceptions, and allows you to handle errors gracefully by displaying error messages to the user.

36. What are Spring Interceptors?

Spring Interceptors are components in the Spring MVC framework that allow you to intercept and process HTTP requests and responses. They provide a way to perform pre-processing and post-processing tasks before and after the actual request is handled by a controller or after the response is generated.

37. Is there any need to keepspring-mvc.jar on the classpath or is it already present as part of Spring-core

The spring-mvc.jar file is not part of the spring-core library, and they serve different purposes.

spring-core: This is the core Spring framework, which provides fundamental parts of the framework such as dependency injection and inversion of control.
spring-webmvc: This is the Spring MVC framework (typically named as spring-webmvc.jar not spring-mvc.jar), which is built on top of the core Spring framework and provides Model-View-Controller (MVC) architecture for building web applications.
So, if you’re building an application using the Spring MVC framework, you would need both spring-core and spring-webmvc on your classpath. These libraries are usually managed by a build tool like Maven or Gradle, and are automatically included when you specify them as dependencies in your build file.

38. What is the Model in Spring MVC?

In the context of Spring MVC, the term “Model” represents the data layer. It is a map (similar to a java.util.Map) that contains data to be rendered by the View. This data is typically the outcome of executing your business logic, which you want to show to the user.

39. What are the differences between the <context:annotation-config> vs <context:component-scan> tags?

 

<context:annotation-config>: This is used to activate various annotations within Spring-managed beans. For example, if you have beans that are manually defined in your XML file and these beans have annotations like @Autowired, @PostConstruct, @PreDestroy, @Resource, etc., you need <context:annotation-config> to activate these annotations. However, it does not automatically detect and instantiate beans from the classpath.

 

<context:component-scan>: This tag does everything that <context:annotation-config> does, but it goes one step further. It scans the classpath for classes annotated with @Component, @Service, @Repository, @Controller, etc., and automatically registers them as beans in the Spring application context. In other words, it automatically detects and instantiates your beans. So, when you use <context:component-scan>, you don’t need to explicitly define each bean in your XML configuration file, as long as they are annotated correctly and exist within the base-package specified by <context:component-scan>.

40. How is the form data validation done in Spring Web MVC Framework?

Form data validation in Spring Web MVC Framework is done by:

 

Defining Validation Rules: Use Bean Validation API (JSR-303) annotations like @NotNull, @Size, @Min, @Max, etc., on your model fields to set the validation rules.
 

Activating Validation: In your controller, annotate the model attribute with @Valid when handling the form submission. This triggers the validation process.
 

Handling Validation Errors: Spring MVC validates the form data and any errors are put into a BindingResult object. You can check this object for errors and handle them accordingly, typically by sending the user back to the form with error messages.
 

Displaying Errors: In your view (e.g., Thymeleaf or JSP), display any validation error messages from the BindingResult to the user.
 

41. How to get ServletConfig and ServletContext objects in spring bean?

 

In a Spring application, you can access ServletConfig and ServletContext objects by implementing the ServletContextAware and ServletConfigAware interfaces. These interfaces provide setter methods that Spring will use to inject the necessary objects.

42. Differentiate between a Bean Factory and an Application Context.

BeanFactory

BeanFactory is the root interface for accessing a Spring bean container. It provides basic Inversion of Control (IoC) and Dependency Injection (DI) features.
BeanFactory is lazy-initiated, which means it only creates a bean when you call getBean() method.
It supports bean instantiation/wiring and allows you to read bean definitions and access them using the getBean() method.
BeanFactory is lighter and has less functionality compared to ApplicationContext.
ApplicationContext

ApplicationContext extends the BeanFactory interface and has all features of BeanFactory. It adds more enterprise-specific functionality.
It provides additional features such as easier integration with Spring’s AOP features, message resource handling (for use in internationalization), event propagation, and application-layer specific contexts such as WebApplicationContext for web applications.
The beans in ApplicationContext are singleton and are initiated at the time of loading the context, not when getBean() is called.
It supports internationalization for text messages, event propagation, and various contexts.
ApplicationContext also provides a way to resolve text messages, which is a useful feature for internationalization.
43. How are i18n and localization supported in Spring MVC?

Internationalization (i18n) and localization (L10n) are important features for applications that need to support multiple languages or locales. In Spring MVC, these are supported using a combination of LocaleResolver, LocaleChangeInterceptor, and message source properties files.

 

44. What do you understand by MultipartResolver?

MultipartResolver is an interface defined in Spring MVC framework that is used for uploading files. When a form in a Spring web application is submitted and it has enctype=”multipart/form-data”, the MultipartResolver implementation handles the file upload part of the request.

The MultipartResolver is part of the Spring DispatcherServlet’s configuration, so you’ll define it in your Spring configuration. 

 

45. How is it possible to use the Tomcat JNDI DataSource in the Spring applications?

 

To use a Tomcat JNDI DataSource in a Spring application:

 

Setup DataSource in Tomcat: Configure the DataSource in Tomcat’s context.xml file with the necessary parameters (username, password, driverClassName, etc).
 

Configure DataSource in Spring: Use <jee:jndi-lookup> in XML configuration or JndiDataSourceLookup in Java configuration to tell Spring to look up the DataSource from JNDI.
 

The DataSource can then be injected into your Spring beans where it is needed
 

Spring Beans Interview Questions
46. Explain Spring Beans?
They are the objects that form the backbone of the user’s application.
Beans are managed by the Spring IoC container.
They are instantiated, configured, wired and managed by a Spring IoC container
Beans are created with the configuration metadata that the users supply to the container.Bean generation - Spring Interview Questions - Edureka!
47. How configuration metadata is provided to the Spring container?
Configuration metadata can be provided to Spring container in following ways:

XML-Based configuration: In Spring Framework, the dependencies and the services needed by beans are specified in configuration files which are in XML format. These configuration files usually contain a lot of bean definitions and application specific configuration options. They generally start with a bean tag. For example:
1
2
3
<bean id="studentbean" class="org.edureka.firstSpring.StudentBean">
 <property name="name" value="Edureka"></property>
</bean>
Annotation-Based configuration: Instead of using XML to describe a bean wiring, you can configure the bean into the component class itself by using annotations on the relevant class, method, or field declaration. By default, annotation wiring is not turned on in the Spring container. So, you need to enable it in your Spring configuration file before using it. For example:
1
2
3
4
<beans>
<context:annotation-config/>
<!-- bean definitions go here -->
</beans>
Java-based configuration: The key features in Spring Framework’s new Java-configuration support are @Configuration annotated classes and @Bean annotated methods. 
1. @Bean annotation plays the same role as the <bean/> element. 

2.@Configuration classes allows to define inter-bean dependencies by simply calling other @Bean methods in the same class. 

For example:
1
2
3
4
5
6
7
@Configuration
public class StudentConfig 
{ 
@Bean
public StudentBean myStudent() 
{ return new StudentBean(); }
}
48. How many bean scopes are supported by Spring?
The Spring Framework supports five scopes. They are:

Singleton: This provides scope for the bean definition to single instance per Spring IoC container.
Prototype: This provides scope for a single bean definition to have any number of object instances.
Request: This provides scope for a bean definition to an HTTP-request. 
Session: This provides scope for a bean definition to an HTTP-session. 
Global-session: This provides scope for a bean definition to an Global HTTP-session. 
The last three are available only if the users use a web-aware ApplicationContext.

49. What is the Bean life cycle in Spring Bean Factory Container?
Bean life cycle in Spring Bean Factory Container is as follows:

The Spring container instantiates the bean from the bean’s definition in the XML file.
Spring populates all of the properties using the dependency injection, as specified in the bean definition.
The factory calls setBeanName() by passing the bean’s ID, if the bean implements the BeanNameAware interface.
The factory calls setBeanFactory() by passing an instance of itself, if the bean implements the BeanFactoryAware interface.
preProcessBeforeInitialization() methods are called if there are any BeanPostProcessors associated with the bean.
If an init-method is specified for the bean, then it will be called.
Finally, postProcessAfterInitialization() methods will be called if there are any BeanPostProcessors associated with the bean.
To understand it in better way check the below diagram:

beanLifeCycle - Spring Interview Questions - Edureka!

50. Explain inner beans in Spring.
A bean can be declared as an inner bean only when it is used as a property of another bean. For defining a bean, the Spring’s XML based configuration metadata provides the use of <bean> element inside the <property> or <constructor-arg>. Inner beans are always anonymous and they are always scoped as prototypes. For example, let’s say we have one Student class having reference of Person class. Here we will be creating only one instance of Person class and use it inside Student.

Here’s a Student class followed by bean configuration file:

Student.java

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
public class Student
{
private Person person;
//Setters and Getters
}
public class Person
{
private String name;
private String address;
//Setters and Getters
}
studentbean.xml

1
2
3
4
5
6
7
8
9
<bean id=“StudentBean" class="com.edureka.Student">
<property name="person">
<!--This is inner bean -->
<bean class="com.edureka.Person">
<property name="name" value=“Scott"></property>
<property name="address" value=“Bangalore"></property>
</bean>
</property>
</bean>
51. Define Bean Wiring.
When beans are combined together within the Spring container, it’s called wiring or bean wiring. The Spring container needs to know what beans are needed and how the container should use dependency injection to tie the beans together, while wiring beans.

bean wiring - Spring Framework Interview Questions - Edureka!

52. What do you understand by auto wiring and name the different modes of it?
The Spring container is able to autowire relationships between the collaborating beans. That is, it is possible to let Spring resolve collaborators for your bean automatically by inspecting the contents of the BeanFactory.
Different modes of bean auto-wiring are:

no: This is default setting which means no autowiring. Explicit bean reference should be used for wiring.
byName: It injects the object dependency according to name of the bean. It matches and wires its properties with the beans defined by the same names in the XML file.
byType: It injects the object dependency according to type. It matches and wires a property if its type matches with exactly one of the beans name in XML file.
constructor: It injects the dependency by calling the constructor of the class. It has a large number of parameters.
autodetect: First the container tries to wire using autowire by constructor, if it can’t then it tries to autowire by byType.
53. What are the limitations with auto wiring?
Following are some of the limitations you might face with auto wiring:

Overriding possibility: You can always specify dependencies using <constructor-arg> and <property> settings which will override autowiring.
 Primitive data type: Simple properties such as primitives, Strings and Classes can’t be autowired.
Confusing nature: Always prefer using explicit wiring because autowiring is less precise.
 

Spring Annotations Interview Questions
54. What do you mean by  Annotation-based container configuration?
Instead of using XML to describe a bean wiring, the developer moves the configuration into the component class itself by using annotations on the relevant class, method, or field declaration. It acts as an alternative to XML setups. For example:

1
2
3
4
5
6
7
@Configuration
public class AnnotationConfig
{
@Bean
public MyDemo myDemo()
 { return new MyDemoImpll(); }
}
55. How annotation wiring can be turned on in Spring?
By default, Annotation wiring is not turned on in the Spring container. Thus, to use annotation based wiring we must enable it in our Spring configuration file by configuring <context:annotation-config/> element. For example:

1
2
3
4
<beans xmlns="<a href="http://www.springframework.org/schema/beans">http://www.springframework.org/schema/beans</a>" xmlns:xsi="<a href="http://www.w3.org/2001/XMLSchema-instance">http://www.w3.org/2001/XMLSchema-instance</a>" xmlns:context="<a href="http://www.springframework.org/schema/context">http://www.springframework.org/schema/context</a>">
<context:annotation-config/>
<beans ………… />
</beans>
56. What’s the difference between @Component, @Controller, @Repository & @Service annotations in Spring?annotations - Spring Framework Tutorial - Edureka!
@Component: This marks a java class as a bean. It is a generic stereotype for any Spring-managed component. The component-scanning mechanism of spring now can pick it up and pull it into the application context.

@Controller: This marks a class as a Spring Web MVC controller. Beans marked with it are automatically imported into the Dependency Injection container.

@Service: This annotation is a specialization of the component annotation. It doesn’t provide any additional behavior over the @Component annotation. You can use @Service over @Component in service-layer classes as it specifies intent in a better way.

@Repository: This annotation is a specialization of the @Component annotation with similar use and functionality. It provides additional benefits specifically for DAOs. It imports the DAOs into the DI container and makes the unchecked exceptions eligible for translation into Spring DataAccessException.

57. What do you understand by @Required annotation?
@Required is applied to bean property setter methods. This annotation simply indicates that the affected bean property must be populated at the configuration time with the help of an explicit property value in a bean definition or with autowiring. If the affected bean property has not been populated, the container will throw BeanInitializationException.

For example:

1
2
3
4
5
6
7
8
9
public class Employee
{
private String name;
@Required
public void setName(String name)
{this.name=name; }
public string getName()
{ return name; }
}
58. What do you understand by @Autowired annotation?
The @Autowired annotation provides more accurate control over where and how autowiring should be done. This annotation is used to autowire bean on the setter methods, constructor, a property or methods with arbitrary names or multiple arguments. By default, it is a type driven injection.

For Example:

1
2
3
4
5
6
7
8
9
public class Employee
{
private String name;
@Autowired
public void setName(String name)
{this.name=name; }
public string getName()
{ return name; }
}
59. What do you understand by @Qualifier annotation?
When you create more than one bean of the same type and want to wire only one of them with a property  you can use the @Qualifier annotation along with @Autowired to remove the ambiguity by specifying which exact bean should be wired.

For example, here we have two classes, Employee and EmpAccount respectively. In EmpAccount, using @Qualifier its specified that bean with id emp1 must be wired.

Employee.java

1
2
3
4
5
6
7
8
9
public class Employee
{
private String name;
@Autowired
public void setName(String name)
{ this.name=name; }
public string getName()
{ return name; }
}
EmpAccount.java

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
public class EmpAccount
{
private Employee emp;
@Autowired
@Qualifier(emp1)
public void showName()
{
System.out.println(“Employee name : ”+emp.getName);
}
}
60.  What do you understand by @RequestMapping annotation?
@RequestMapping annotation is used for mapping a particular HTTP request method to a specific class/ method in controller that will be handling the respective request. This annotation can be applied at both levels:

Class level : Maps the URL of the request
Method level: Maps the URL as well as HTTP request method
 

Spring Data Access Interview Questions
61. Describe Spring DAO support?
The Data Access Object (DAO) support in Spring makes it easy to work with data access technologies like JDBC, Hibernate or JDO in a consistent way. This allows one to switch between the persistence technologies easily. It also allows you to code without worrying about catching exceptions that are specific to each of these technology.

62. Name the exceptions thrown by the Spring DAO classes.
See the below diagram, it depicts all the Spring DAO classes in the hierarchical order.

DAO classes - dao - Spring Framework Interview Questions - Edureka! 

63.  Which classes are present in spring JDBC API?
Classes present in JDBC API are as follows:

JdbcTemplate
SimpleJdbcTemplate
NamedParameterJdbcTemplate
SimpleJdbcInsert
SimpleJdbcCall
64. What are the ways by which Hibernate can be accessed using Spring?
There are two ways by which we can access Hibernate using Spring:

Inversion of Control with a Hibernate Template and Callback
Extending HibernateDAOSupport and Applying an AOP Interceptor node
65. Name the types of transaction management that Spring supports.
Two types of transaction management are supported by Spring. They are:

Programmatic transaction management: In this, the transaction is managed with the help of programming. It provides you extreme flexibility, but it is very difficult to maintain.
Declarative transaction management: In this, the transaction management is separated from the business code. Only annotations or XML based configurations are used to manage the transactions.
66. What are the different ORM’s supported by Spring?
Different ORM’s supported by Spring are depicted via the below diagram:

orms - Spring Framework Interview Questions - Edureka!


Spring AOP Interview Questions
67. Describe AOP.
Aspect-oriented programming or AOP is a programming technique which allows programmers to modularize crosscutting concerns or behavior that cuts across the typical divisions of responsibility. Examples of cross-cutting concerns can be logging and transaction management. The core of AOP is an aspect. It encapsulates behaviors that can affect multiple classes into reusable modules.

AOP - Spring Framework Interview Questions - Edureka!

68. What do you mean by Aspect?
Aspect is a modularization of concern which cuts across multiple objects. Transaction management is a good example of a crosscutting concern in J2EE applications. Aspects are implemented using regular classes or regular classes annotated with the @Aspect annotation in Spring Framework.

69. Explain JoinPoint.
A point during the execution of a program is called JoinPoint, such as the execution of a method or the handling of an exception. In Spring AOP, a joinpoint always represents a method execution.

70. What is an Advice?
An Action taken by an aspect at a particular joinpoint is known as an Advice. Spring AOP uses an advice as an interceptor, maintaining a chain of interceptors “around” the join point.

advice - Spring Framework Interview Questions - Edureka!

71. What are the different types of Advices?
Different types of Advices in Spring AOP are:

Before: These types of advices execute before the joinpoint methods and are configured using @Before annotation mark.
After returning: These types of advices execute after the joinpoint methods completes executing normally and are configured using @AfterReturning annotation mark.
After throwing:  These types of advices execute only if joinpoint method exits by throwing an exception and are configured using @AfterThrowing annotation mark.
After (finally): These types of advices execute after a joinpoint method, regardless of the method’s exit whether normally or exceptional return and are configured using @After annotation mark.
Around: These types of advices execute before and after a joinpoint and are configured using @Around annotation mark.
72. Point out the difference between concern and cross-cutting concern in Spring AOP?
The concern is the behavior we want to have in a particular module of an application. It can be defined as a functionality we want to implement. 

The cross-cutting concern is a concern which is applicable throughout the application. This affects the entire application. For example, logging, security and data transfer are the concerns needed in almost every module of an application, thus they are the cross-cutting concerns.

cross cutting concern vs concern - Spring Framework Interview Questions - Edureka!

73. What are the different AOP implementations?
Different AOP implementations are depicted by the below diagram:

AOP Implementations - Spring Framework Interview Questions - Edureka!

74. What are the difference between Spring AOP and AspectJ AOP?
Spring AOP vs AspectJ AOP
Spring AOP	AspectJ AOP
Runtime weaving through proxy is done	Compile time weaving through AspectJ Java tools is done 
It supports only method level PointCut	It suports field level Pointcuts
It is DTD based 	It is schema based and Annotation configuration
75. What do you mean by Proxy in Spring Framework?
An object which is created after applying advice to a target object is known as a Proxy. In case of client objects the target object and the proxy object are the same.

proxy - Spring Framework Interview Questions - Edureka!

76. In Spring, what is Weaving?
The process of linking an aspect with other application types or objects to create an advised object is called Weaving. In Spring AOP, weaving is performed at runtime. Refer the below diagram:

Weaving - Spring Framework Interview Question - Edureka!The last section of Spring interview questions is on Spring MVC Interview Questions.

Spring MVC Interview Questions
77. What do you mean by Spring MVC framework?
The Spring web MVC framework provides model-view-controller architecture and ready to use components that are used to develop flexible and loosely coupled web applications. The MVC pattern helps in separating the different aspects of the application like input logic, business logic and UI logic, while providing a loose coupling between all these elements. Get Started with Spring MVC

78. Describe DispatcherServlet.
The DispatcherServlet is the core of Spring Web MVC framework. It handles all the HTTP requests and responses. The DispatcherServlet receives the entry of handler mapping from the configuration file and forwards the request to the controller. The controller then returns an object of Model And View. The DispatcherServlet checks the entry of view resolver in the configuration file and calls the specified view component.

dispatcherServlet - Spring Framework Interview Questions - Edureka!

79. Explain WebApplicationContext.
The WebApplicationContext is an extension of the plain ApplicationContext. It has some extra features that are necessary for web applications. It differs from a normal ApplicationContext in terms of its capability of resolving themes and in deciding which servlet it is associated with.

80. In Spring MVC framework, what is controller?
Controllers provide access to the application behavior. These behaviors are generally defined through a service interface. Controllers interpret the user input and transform it into a model which is represented to the user by the view. In Spring, controller is implemented in a very abstract way. It also enables you to create a wide variety of controllers.

controller - Spring Framework Interview Questions - Edureka!

  

I hope this set of Spring Interview Questions and Answers will help you in preparing for your interviews. All the best!


If you want to learn Spring and wish to use it while developing Java applications, then check out the Spring Certification Training by Edureka, a trusted online learning company with a network of more than 250,000 satisfied learners spread across the globe.

 

Got a question for us? Please mention it in the comments section and we will get back to you.

 

 

Recommended videos for you
hibernate-mapping-on-the-fly.jpg
Hibernate Mapping on the Fly
implementing-web-services-in-java.jpg
Implementing Web Services In Java
node-js-steps-to-create-restful-web-app.jpg
Node JS : Steps to Create Restful Web App
a-day-in-the-life-of-a-node-js-developer.jpg
A Day In The Life Of A Node.js Developer
microsoft-sharepoint-the-ultimate-enterprise-collaboration-platform.jpg
Microsoft SharePoint-The Ultimate Enterprise Collaboration Platform
JAVA-J2EE-WEBINAR-600x3501_-300x175.png
Introduction to JAVA/J2EE & SOA
create-restful-web-application-with-node-js-express.jpg
Create Restful Web Application With Node.js Express
spring-framework-introduction-to-spring-web-mvc-spring-with-bigdata.jpg
Spring Framework : Introduction to Spring Web MVC & Spring with BigData
node-js-express-steps-to-create-restful-web-app.jpg
Node JS Express: Steps to Create Restful Web App
mastering-regex-in-perl.jpg
Mastering Regex in Perl
building-web-application-using-spring-framework.jpg
Building Web Application Using Spring Framework
php-and-mysql-server-side-scripting-for-web-development.jpg
PHP and MySQL : Server Side Scripting For Web Development
rapid-development-with-cakephp.jpg
Rapid Development With CakePHP
effective-persistence-using-orm-with-hibernate.jpg
Effective Persistence Using ORM With Hibernate
building-application-with-ruby-on-rails-framework.jpg
Building Application With Ruby On Rails Framework
microsoft-sharepoint-2013-the-ultimate-enterprise-collaboration-platform.jpg
Microsoft SharePoint 2013 : The Ultimate Enterprise Collaboration Platform
microsoft-net-framework-an-intellisense-way-of-web-development.jpg
Microsoft .NET Framework : An IntelliSense Way of Web Development
introduction-to-javaj2ee-soa.jpg
Introduction to JAVA/J2EE & SOA
learn-perl-the-jewel-of-scripting-languages.jpg
Learn Perl-the Jewel of Scripting Languages
service-oriented-architecture-with-java.jpg
Service-Oriented Architecture With Java
Recommended blogs for you
Machine-learning-in-Java-300x175.jpg
What is Machine Learning in Java and how to implement it?
Storage-Classes-in-C-300x175.jpg
What is a Storage Class in C++ and its types?
Node.js-Request-300x175.jpg
Learn How to Make Node.js Requests – Best 3 Ways to Make HTTP Request
How-to-decrypt-md5-password-in-PHP-300x175.jpg
How to Decrypt MD5 Password in PHP?
Alert-in-JavaScript-300x175.jpg
How to Create an Alert in JavaScript?
Front-End-Developer-Skills-300x175.jpg
Top 10 Front End Developer Skills You Need to Know
Coupling-in-Java-300x175.jpg
What is Coupling in Java and its different types?
Pascal-Triangle-in-Java-300x175.jpg
Everything you need to know About Pascal Triangle in Java
Bootstrap-Button-300x175.jpg
How to Create a Bootstrap Button?
Bootstrap-Datatable-300x175.jpg
what are the Bootstrap Datatables and how to create it?
HTML-interview-question-300x175.png
Top 80 HTML Interview Questions and Answers in 2025
no-image-1.png
Top 10 Full Stack Development Tools in 2026
Java_bloge-image_011-300x175.png
Serialization of Java Objects to XML Using XMLEncoder/Decoder
JavaScript-Data-Types-300x175.jpg
What are the Different Data Types in JavaScript
no-image-1.png
Introduction to Input in Python
extends-vs-implementation-300x175.png
What is the Difference Between Extends and Implements in Java?
Structure-Of-A-Java-Program-1-300x175.jpg
What is the basic Structure of a Java Program?
Array-Sort-in-Javascript-300x175.jpg
Array Sort In JavaScript : Everything About Sorting Arrays In JavaScript
Encapsulation-in-Java-300x175.jpg
Encapsulation in Java – How to master OOPs with Encapsulation?
learn-node-300x175.jpg
How to Learn Node.js – A Complete Roadmap for Beginners
Comments
9 Comments
 CourseDrill says:
Apr 5, 2021 at 2:29 am GMT
Thanks for the info. Its really helpful for clearing the interview.

Reply
 Mani Kumari says:
Sep 6, 2020 at 2:08 am GMT
i love to read edureka interview questions, covered all the topics of spring

Reply
 Michael Smith says:
Aug 11, 2020 at 7:31 am GMT
Thanks for nice article on spring interview questions

Reply
 Kavananaveen says:
Jul 3, 2020 at 7:35 am GMT
First ever seen the detailed covered topics. Thanks for supporting.

Reply
 Kavananaveen says:
Jul 3, 2020 at 7:32 am GMT
First ever seen such detailed topics covered. Thanks for supporting.

Reply
 Hema Malini says:
Mar 29, 2019 at 5:40 am GMT
Great Blog. You shared great topics with excellent content very clearly.

Reply
 Kallol Das says:
Mar 29, 2019 at 5:38 am GMT
Good collection of all technical topics at one place !!

Reply
 Aman Abhishek says:
Nov 5, 2018 at 12:42 pm GMT
Awesome covered each and every topic

Reply
 EdurekaSupport says:
Mar 29, 2019 at 5:41 am GMT
Hey Aman, thanks for the compliment. We are glad you loved the blog. Cheers!

Reply
Join the discussion

Trending Courses in Programming & Frameworks
Python Scripting Certification Training
Python Scripting Certification Training
15k Enrolled Learners
Weekend
Self Paced
Reviews
 5 (5900)
Browse Categories
Artificial IntelligenceAWSBI and VisualizationBig DataBlockchainBusiness ManagementCloud ComputingCyber SecurityData ScienceData Warehousing and ETLDatabasesDevOpsDigital MarketingEnterpriseFront End Web DevelopmentHuman Resource ManagementInterview QuestionsMobile DevelopmentOperating SystemsOperations ManagementProduct ManagementProject Management and MethodologiesRobotic Process Automationseo interview questionSoftware TestingStrategy and LeadershipSupply Chain ManagementSystems & Architecture
Subscribe to our Newsletter, and get personalized recommendations.
 Already have an account? Sign in.×
edureka logo
TRENDING CERTIFICATION COURSES
Advanced DevOps Certification Training with GenAI
Agentic AI Certification Training Course
LLM Prompt Engineering Certification Course
Data Science with Python Certification Course
Power BI Certification Training with Gen AI
MLOps Certification Course
Artificial Intelligence Certification Course
TRENDING MASTERS COURSES
Generative AI(Gen AI ) Masters Program
Post Graduate Program in Gen AI and ML
Doctor of Business Administration by Birchwood
Integrated MS+PGP Program in Data Science & AI
MS in Data Science by Birchwood
European Global Doctorate of Business Administration (DBA)
European Global MS in Data Science and AI
EIMT Doctorate in Computer Science (DCS)
COMPANY
About us
News & Media
Reviews
Contact us
Blog
Community
Sitemap
Blog Sitemap
Community Sitemap
Webinars
WORK WITH US
Careers
Become an Instructor
Become an Affiliate
Become a Partner
Hire from Edureka
DOWNLOAD APP
apple_store google_playstore
CATEGORIES
Cloud Computing DevOps Big Data Data Science BI and Visualization Programming & Frameworks Software Testing Project Management and Methodologies Robotic Process Automation Frontend Development Data Warehousing and ETL Artificial Intelligence Blockchain Databases Cyber Security Mobile Development Operating Systems Architecture & Design Patterns Digital Marketing
TRENDING BLOG ARTICLES
Selenium tutorial Selenium interview questions Java tutorial What is HTML Java interview questions PHP tutorial JavaScript interview questions Spring tutorial PHP interview questions Inheritance in Java Polymorphism in Java Spring interview questions Pointers in C Linux commands Android tutorial JavaScript tutorial jQuery tutorial SQL interview questions MySQL tutorial Machine learning tutorial Python tutorial What is machine learning Ethical hacking tutorial SQL injection AWS certification career opportunities AWS tutorial What Is cloud computing What is blockchain Hadoop tutorial What is artificial intelligence Node Tutorial Collections in Java Exception handling in java Python Programming Language Python interview questions Multithreading in Java ReactJS Tutorial Data Science vs Big Data vs Data Analytics Software Testing Interview Questions R Tutorial Java Programs JavaScript Reserved Words and Keywords Implement thread.yield() in Java: Examples Implement Optical Character Recognition in Python All you Need to Know About Implements In Java
Address:
4th Floor, No. 38/4, Outer Ring Rd, adjacent to Dell EMC2, Doddanekkundi, Mahadevapura, Bengaluru, Karnataka 560048
© 2026 Brain4ce Education Solutions Pvt. Ltd. All rights Reserved. Terms & Conditions Legal & Privacy
   
"PMP®","PMI®", "PMI-ACP®" and "PMBOK®" are registered marks of the Project Management Institute, Inc. MongoDB®, Mongo and the leaf logo are the registered trademarks of MongoDB, Inc.
image not found!
Top 80 Spring Interview Questions You Must Prepare In 2025
edureka.co


<h2 class="toc_1" style="text-align: justify;">Top Spring Boot Interview Questions and Answers</h2>
<h3 style="text-align: justify;">Q1. Explain Spring Boot and also tell the features of Spring Boot.</h3>
<p style="text-align: justify;">Spring Boot is a Java-based open-source rapid application development framework that is used to build microservices and web applications. With the help of the prebuilt code found in its codebase, Spring Boot offers an entirely flexible environment that does not need a manual configuration and provides powerful batch processing.</p>
<p style="text-align: justify;">Some key features of Sprint Boot are:</p>
<ul style="text-align: justify;">
<li>It is a combination of Spring Framework and Embedded Servers</li>
<li>An important feature of Spring Boot is that there is no requirement for XML configuration.</li>
<li>It provides an opinionated "starter" dependencies version to simplify build configuration</li>
<li>It automatically configures Spring and third-party libraries</li>
<li>Spring Boot Supports microservice architecture and powerful batch processing.</li>
<li>It offers a versatile approach to setting up XML configurations, database transactions, and Java Beans.</li>
</ul>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c71ce93247_spring_boot_interview_questions_01.jpg" alt="Spring Boot Features" width="1000" height="530" /></p>
<p style="text-align: justify;">&nbsp;</p>
<h3 style="text-align: justify;">Q2. Tell the steps involved in the creation of the spring boot project in Eclipse.</h3>
<p style="text-align: justify;"><span role="tooltip" aria-label="similar text found on mygreatlearning.com" data-microtip-position="bottom">We can create the Spring Boot project in Eclipse by using the spring Initializer, the steps involved are:</span></p>
<ul style="text-align: justify;">
<li>Go to https://start.spring.io</li>
<li>Choose the project's details, such as group ID, artifact ID, dependencies, and packaging type.</li>
<li>Click on the 'Generate' button to download the Spring Boot project.</li>
<li>Import the project into Eclipse using the 'Existing Maven Projects' option in the 'Import' menu.</li>
</ul>
<h3 style="text-align: justify;">Q3. If you want to deploy the Spring Boot application in Tomcat, how will you do that?</h3>
<p style="text-align: justify;">To deploy the Spring Boot application in Tomcat, we can follow these steps:</p>
<ul style="text-align: justify;">
<li>Firstly,&nbsp; we will modify the Spring Boot application to create a WAR file instead of a JAVA-Jar file:</li>
<li>Add the Spring Boot Maven plugin to the pom.xml file.</li>
<li>We will then set the packaging type to 'war' and exclude the embedded application server Tomcat dependency from the pom.xml file.</li>
<li>Then we add the Tomcat dependency with the provided scope to the pom.xml file.</li>
<li>We execute the 'mvn clean package', and the WAR file will be built and copied to the Tomcat web apps resources folder.</li>
<li>To launch the Tomcat server, we will run the 'startup.bat' or 'startup.sh' script in the bin folder</li>
<li>Then, at last, we can access the application by going to http://localhost:8080/application-name, where application-name is the name of the WAR file without the ".war" extension.</li>
</ul>
<h3 style="text-align: justify;">Q4. Can you distinguish between a spring and a spring boot?</h3>
<p style="text-align: justify;">Spring and Spring Boot are both Java frameworks that are used in web applications. The points of dissimilarities are:</p>
<p style="text-align: justify;"><strong>SPRING:</strong></p>
<ul style="text-align: justify;">
<li>Spring is a popular Java EE framework used for creating apps, and it consists of boilerplate code.</li>
<li>Struts, JSP, Hibernate, and other frameworks are supported by Spring.</li>
<li>Java EE 7 developers may create straightforward, dependable, and scalable enterprise apps using Spring.</li>
</ul>
<p style="text-align: justify;"><strong>SPRING BOOT:</strong></p>
<ul style="text-align: justify;">
<li>The extension of the Spring framework is called Spring Boot which helps in removing the boilerplate configuration.</li>
<li>Spring Boot is a microservices-based framework that is primarily used to quickly create production-ready features.</li>
<li>Everything in Spring Boot is pre-configured, so we only need to utilize the appropriate settings when using a specific functionality, which helps in removing boilerplate code.</li>
</ul>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c71f8f38d0_spring_boot_interview_questions_02.jpg" alt="Difference between Spring and Spring Boot - Unstop" width="1000" height="338" /></p>
<h3 style="text-align: justify;">Q5. What is a spring boot actuator?</h3>
<p style="text-align: justify;">Spring Boot Actuator is a sub-project of the Spring Boot framework that provides additional features for monitoring and managing Spring Boot applications. The Spring Actuator exposes operational information about any running application using HTTP endpoints, allowing developers to easily monitor and manage their applications. It is important to secure the Spring Actuator because it contains a lot of confidential information.</p>
<p style="text-align: justify;"><strong>Some key features of the Spring Boot Actuator are:</strong></p>
<ul style="text-align: justify;">
<li>Spring Boot Actuator enables developers to monitor the health of their application and CPU usage using the /actuator/health endpoint.</li>
<li>Spring Boot Actuator provides secured endpoints for monitoring and managing Spring Boot applications.</li>
<li>With the help of the Spring Boot Actuator, developers can audit their applications using the /actuator/audit events endpoint.</li>
</ul>
<h3 style="text-align: justify;">Q6. Explain how you can modify a port in a Spring Boot.</h3>
<p style="text-align: justify;">The steps to change the port number in a Spring Boot application using application.properties file are:</p>
<ul style="text-align: justify;">
<li>Open the application.properties file.</li>
<li>Add the following line to the file: server.port={port-number}.</li>
<li>Replace {port-number} with the desired port number.</li>
<li>Save the changes.</li>
<li>The application will now be running on the new port number.</li>
</ul>
<h3 style="text-align: justify;">Q7. What is the process to build a war file in Spring Boot?</h3>
<p style="text-align: justify;">To create a war file in Spring Boot, we can follow these steps:</p>
<p style="text-align: justify;"><strong>Updating the pom.xml file:</strong></p>
<p style="text-align: justify;">Add the spring-boot-starter-tomcat dependency.</p>
<p style="text-align: justify;">Set the packaging type to "war".</p>
<p style="text-align: justify;"><strong>Modifying the main class:</strong></p>
<p style="text-align: justify;">We will extend the main class to SpringBootServletInitializer.</p>
<p style="text-align: justify;">Override the configure() method.</p>
<p style="text-align: justify;"><strong>Building the WAR file:</strong></p>
<p style="text-align: justify;">Run the "mvn clean package" command.</p>
<p style="text-align: justify;">The WAR file that is created will be in the "target" resources folder.</p>
<h3 style="text-align: justify;">Q8. Explain JPA in Spring Boot.</h3>
<p style="text-align: justify;">The specification for managing relational data in Java programming language application code is called JPA (Java Persistence API). Using Object-Relation Mapping (ORM), JPA enables us to access and persist data between Java objects or classes and relational databases. JPA is a collection of interfaces that gives Java applications access to a runtime EntityManager API for managing relational data.</p>
<h3 style="text-align: justify;">Q9. Is it possible to save images in the database using Spring Boot, how will you do that?</h3>
<p style="text-align: justify;">Yes, it is possible to save an image in the database using Spring Boot. For that, we can follow these steps:</p>
<ul style="text-align: justify;">
<li>Create an entity class to store the image data in the database.</li>
<li>Define a RestController class with a POST method to upload the image.</li>
<li>Handle the image upload using MultipartFile[] file as a parameter.</li>
<li>Compress the image and store it in the database or store the direct image in the database.</li>
<li>Update the handler method, which is responsible for handling the form submission to store the image in the database.</li>
<li>Display the uploaded image in the browser.</li>
</ul>
<h3 style="text-align: justify;">Q10. Explain the auto-configuration class in Spring Boot?</h3>
<p style="text-align: justify;">The Spring Boot Auto-Configuration class feature helps the Spring-based application code to set up automatically, which is based on the Java -jar package phase or Jar dependencies version that has been added to the classpath. Spring Boot Auto-Configuration feature eliminates the need for developers to define certain beans included in the auto-configuration classes. This feature makes development faster and easier by providing fundamental settings required to configure the application with various spring framework.</p>
<h3 style="text-align: justify;">Q11. I am getting a whitelabel error page in the Spring Boot application code, what should I do?</h3>
<p style="text-align: justify;">To solve the Whitelabel error page in the Spring Boot application, we can use these methods:</p>
<p style="text-align: justify;"><strong>1. Customizing the Whitelabel Error Page:</strong></p>
<p style="text-align: justify;">Developers can create a custom error page to align with the UI of their Spring Boot application. So to customize the error page, developers can create a Custom Error Controller and define the error handling logic in that controller class. This controller will map any errors to the customized error page.</p>
<p style="text-align: justify;"><strong>2. Excluding the ErrorMvcAutoConfiguration Bean:</strong></p>
<p style="text-align: justify;">Another way to disable the Whitelabel error page is by excluding the ErrorMvcAutoConfiguration bean.</p>
<p style="text-align: justify;">This may be done by adding:</p>
<p style="text-align: justify;"><strong> spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration section to the properties file.</strong></p>
<p style="text-align: justify;"><strong>3. Creating a Custom Auto-Configuration:</strong></p>
<p style="text-align: justify;">In order to manage problems in a Spring Boot application code, developers can also define a custom auto-configuration. If there is a problem, the user will receive more detailed t information due to customized auto-configuration.</p>
<h3 style="text-align: justify;">Q12. How will you fetch data from the database in Spring Boot?</h3>
<p style="text-align: justify;">To fetch data from the database in spring boor, we can follow these steps:</p>
<ul style="text-align: justify;">
<li>Define an entity class to map to the table in the database.</li>
<li>Define a repository interface that extends JpaRepository to perform CRUD operations on the entity.</li>
<li>Define a service class that uses the repository to fetch data from the database.</li>
<li>Define a controller class that uses the service to return the fetched data as an HTTP response.</li>
</ul>
<h3 style="text-align: justify;">Q13. Describe the meaning of bootstrapping in Spring Boot?</h3>
<p style="text-align: justify;">In Spring Boot, the term "bootstrapping" refers to the setup or initialization of a Spring Boot application. The initial project structure, application context, and essential dependencies version must all be configured throughout this procedure.</p>
<h3 style="text-align: justify;">Q14. Tell me the steps to create Java -jar file in Spring Boot?</h3>
<p style="text-align: justify;">The steps to create Java -jar file in Spring Boot are:</p>
<ul style="text-align: justify;">
<li>Add the Spring Boot Maven plugin to the pom.xml file.</li>
<li>After that, we will use the Maven plugin package command to build the project and produce a Java -JAR file.</li>
<li>Java -JAR file will be created in the target folder of the project.</li>
<li>Run the Java -JAR file by the command "java -jar jar-file-name.jar".</li>
</ul>
<h3 style="text-align: justify;">Q15. Have you heard about dependency injection in the Spring Boot?</h3>
<p style="text-align: justify;">Dependency injection is a design approach that removes dependencies from computer code, which makes the code easier to manage and test the application. Dependency Injection is implemented in Spring Boot by using the Inversion of Control (IoC) architectural paradigm.</p>
<p style="text-align: justify;">There are three kinds of dependency injections, that is - constructor dependency injection, property dependency injection, and method dependency injection.</p>
<h3 style="text-align: justify;">Q16. If I want to save images in MongoDB using Spring Boot, what should be done?</h3>
<p style="text-align: justify;">In order to use Spring Boot to save an image in MongoDB, we must configure the required Spring Boot properties and add the spring-boot-starter-data-mongodb dependency to the pom.xml file. We may also utilise GridFS for bigger files and MongoDB BSON for smaller ones.</p>
<p style="text-align: justify;">Here is a basic structure code for storing an image in MongoDB using GridFS:</p>
<pre>@Autowired<br /><br />private GridFsTemplate gridFsTemplate;<br /><br />public String store(MultipartFile file) throws IOException {<br /><br />DBObject metaData = new BasicDBObject();<br /><br />metaData.put("type", file.getContentType());<br /><br />ObjectId objectId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), metaData);<br /><br />return objectId.toString();<br /><br />}</pre>
<h3 style="text-align: justify;">Q17. Discuss or mention the steps involved to configure hibernate in Spring Boot?</h3>
<p style="text-align: justify;">To configure Hibernate in Spring Boot, we should add the spring-boot-starter-data-jpa dependency to the pom.xml file. The step to configure Hibernate are:</p>
<p style="text-align: justify;"><strong>STEP1-</strong> We will Add the spring-boot-starter-data-jpa dependency to the pom.xml file.</p>
<p style="text-align: justify;"><strong>STEP2- </strong>Then we will Create JPA entities.</p>
<p style="text-align: justify;"><strong>STEP3-</strong> After creating the entities we will Create a JPA repository.</p>
<p style="text-align: justify;"><strong>STEP4-</strong> We will Configure the database properties in the application.properties file.</p>
<p style="text-align: justify;"><strong>STEP5-</strong> In the last step we need to Configure the Hibernate properties in the application.properties file.</p>
<p style="text-align: justify;">Here is a basic structure code for configuring Hibernate in the Spring Boot framework:</p>
<pre>&lt;dependency&gt;<br /><br />&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;<br /><br />&lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;<br /><br />&lt;/dependency&gt;</pre>
<h3 style="text-align: justify;">Q18. Discuss the benefits of Spring Boot.</h3>
<p style="text-align: justify;">The benefits of Spring Boot are:</p>
<ul style="text-align: justify;">
<li>Spring Boot is quick and have a safe environment property configuration.</li>
<li>It reduces code length and simplifies the development process.</li>
<li>With the help of Spring Boot one can avoid writing boilerplate code and XML configuration.</li>
<li>Spring Boot creates stand-alone programs with a variety of non-functional features that are common to large classes of projects.</li>
<li>It provides a toolbox that is effective and scalable for creating Spring apps using microservices in spring boot.</li>
<li>Spring Boot combines well with the various components of the Spring Ecosystem, including Spring JDBC, Spring ORM, Spring Data, and Spring Security.</li>
</ul>
<h3 style="text-align: justify;">Q19. Describe the term thyme leaf.</h3>
<p style="text-align: justify;">Thymeleaf is an advanced server-side Java EE template engine for both web and standalone contexts that can interpret HTML, XML, JavaScript, CSS, and plain text. It is a powerful engine that is more flexible than JSP and is responsible for dynamic content rendering on UI.</p>
<p style="text-align: justify;">To use Thymeleaf in a Spring Boot project, we first have to add the spring-boot-starter-thymeleaf dependency to the pom.xml file, configure the ViewResolver, and create templates in HTML format with Thymeleaf syntax. There are many use cases of Thymeleaf in the view layer of the Spring MVC application class.</p>
<h3 style="text-align: justify;">Q20. Explain what is the need for Spring-Boot-DevTools Module is.</h3>
<p style="text-align: justify;">The DevTools module provides several features to improve the development experience, such as caching static content resources, automatic restarts, live reload, global settings, and running remote applications.</p>
<p style="text-align: justify;">Here are some reasons why we need Spring-Boot-Devtools module:</p>
<ul style="text-align: justify;">
<li>It provides additional development-time features that make the application development experience more pleasant.</li>
<li>It avoids the need to manually set the configuration of the Spring-based application.</li>
<li>It improves the performance of the application by caching static content/template files to serve them faster to the browser/client.</li>
</ul>
<p style="text-align: justify;">To use Spring Boot DevTools, we need to add the spring-boot-devtools dependency to the pom.xml or build.gradle file and DevTools is included in the repackaged archive, and the spring-boot-devtools module automatically applies the sensible development-time configuration.</p>
<h3 style="text-align: justify;">Q21. How will you change the port of the embedded Tomcat server in Spring Boot?</h3>
<p style="text-align: justify;">To change the port of the embedded Tomcat server, we can use any of the following ways:</p>
<ul style="text-align: justify;">
<li>By setting the resource file's server.port property.</li>
<li>By updating the server.port properties.</li>
<li>By using the EmbeddedServletContainerCustomizer interface to change the default port in Spring Boot 1.x version.</li>
<li>By using the WebServerFactoryCustomizer interface to change the default port in Spring Boot 2.x version.</li>
</ul>
<h3 style="text-align: justify;">Q22. List the steps which you will need to connect a Spring Boot application to a database using JDBC.</h3>
<p style="text-align: justify;">The steps to connect a spring boot application to a database using JDBC are:</p>
<ul style="text-align: justify;">
<li>Add the Spring Boot Starter JDBC dependency to the build configuration file.</li>
<li>Configure the database connection properties in the application.properties or application.yml file.</li>
<li>Create a database bean using XML or Java config. programming language.</li>
<li>Then Autowire the JdbcTemplate class to access the relational database.</li>
<li>Utilize JdbcTemplate in a Spring Boot application to access a relational database; the Spring Boot Starter JDBC dependency must be included in the build configuration file.</li>
</ul>
<p style="text-align: justify;"><strong>The following dependencies can be added by Maven plugin users in the pom.xml file:</strong></p>
<pre>&lt;dependency&gt;<br /><br />&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;<br /><br />&lt;artifactId&gt;spring-boot-starter-jdbc&lt;/artifactId&gt;<br /><br />&lt;/dependency&gt;<br /><br />&lt;dependency&gt;<br /><br />&lt;groupId&gt;mysql&lt;/groupId&gt;<br /><br />&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;<br /><br />&lt;/dependency&gt;</pre>
<p style="text-align: justify;"><strong>The database connection settings can then be configured in the application.properties or application.yml file.</strong></p>
<p style="text-align: justify;">For example, the basic structure code is:</p>
<pre>spring.datasource.driverClassName=com.mysql.jdbc.Driver<br /><br />spring.datasource.url=jdbc:mysql://localhost:3306/mydb<br /><br />spring.datasource.username=root<br /><br />spring.datasource.password=password</pre>
<p style="text-align: justify;"><strong>Next, we can create a database bean using XML or Java config. For example the basic structure code is:</strong></p>
<pre>&lt;bean&gt;<br /><br />&lt;property name="driverClassName" value="${spring.datasource.driverClassName}" /&gt;<br /><br />&lt;property name="url" value="${spring.datasource.url}" /&gt;<br /><br />&lt;property name="username" value="${spring.datasource.username}" /&gt;<br /><br />&lt;property name="password" value="${spring.datasource.password}" /&gt;<br /><br />&lt;/bean&gt;</pre>
<p style="text-align: justify;"><strong>The JdbcTemplate class can now be autowired to access the relational database. For example the basic code snippet is:</strong></p>
<pre>@Autowired<br /><br />JdbcTemplate jdbcTemplate;<br /><br />public List&lt;Customer&gt; findAll() {<br /><br />return jdbcTemplate.query(<br /><br />"SELECT id, first_name, last_name FROM customers",<br /><br />(rs, rowNum) -&gt; new Customer(rs.getLong("id"), rs.getString("first_name"), rs.getString("last_name"))<br /><br />);<br /><br />}</pre>
<h3 style="text-align: justify;">Q23. Explain @RequestMapping and @RestController annotation use in Sprint Boot.</h3>
<p style="text-align: justify;">We make use of the @RequestMapping annotation to map HTTP requests to handler methods of MVC and REST controller class in Spring Boot. It is one of the most common annotations used in Spring Web applications.</p>
<p style="text-align: justify;">The @Controller and @ResponseBody annotations are combined into the @RestController annotation for simplicity. As a result, there is no need for the @ResponseBody annotation to be present in each request-handling function of the controller class level. RESTful API web services are developed using the @RestController annotation.</p>
<h3 style="text-align: justify;">Q24. How will you disable the auto-configuration in sprint boot?</h3>
<p style="text-align: justify;">To disable the auto-configuration, we can use any of the following ways:</p>
<p style="text-align: justify;">By utilizing @EnableAutoConfiguration annotation of the exclude attribute . We can specify the classes that we want to exclude from auto-configuration.</p>
<p style="text-align: justify;">By utilizing the @EnableAutoConfiguration annotation's of excludeName attribute. The fully qualified names of the classes that we want to keep out of auto-configuration can be specified.</p>
<p style="text-align: justify;"><strong>For example, the basic code snippet is:</strong></p>
<pre>@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class })<br /><br />public class MyApp {<br /><br />public static void main(String[] args) {<br /><br />SpringApplication.run(MyApp.class, args);<br /><br />}<br /><br />}</pre>
<h3 style="text-align: justify;">Q25. Give an example of ReadOnly as true in Transaction management?</h3>
<p style="text-align: justify;">An illustration of a Spring Boot application that uses @Transactional with readOnly=true is:</p>
<p style="text-align: justify;">If we have a UserService class that gets user data from a database, so we can declare the method @Transactional(readOnly=true) to enhance the performance of database transactions as we are only reading the data.</p>
<p style="text-align: justify;"><strong>Basic structure code example:</strong></p>
<pre>@Service<br /><br />public class UserService {<br /><br />@Autowired<br /><br />private UserRepository userRepository;<br /><br />@Transactional(readOnly=true)<br /><br />public User getUserById(Long id) {<br /><br />return userRepository.findById(id).orElse(null);<br /><br />}<br /><br />// other methods<br /><br />}</pre>
<h3 style="text-align: justify;">Q26. What are the advantages of the YAML file?</h3>
<p style="text-align: justify;">The advantages of the YAML file are:</p>
<ul style="text-align: justify;">
<li>YAML files have a hierarchical structure that makes them easier to read and write.</li>
<li>YAML files support maps, lists, and scalar types, which makes them more versatile than properties files.</li>
<li>YAML files have more clear and human-readable syntax than properties files.</li>
<li>YAML files provide unique and useful features like anchors, aliases, and references that are not available in properties files.</li>
</ul>
<h3 style="text-align: justify;">Q27. Explain Spring Data REST.</h3>
<p style="text-align: justify;">A framework called Spring Data REST expands on Spring Data repositories and automatically exports them as REST resources. It makes use of hypermedia to enable clients to swiftly discover functionality made available by the repositories and incorporate these resources into associated hypermedia-based functionality and business logic.</p>
<p style="text-align: justify;"><strong>Some advantages of Spring Data Rest are:</strong></p>
<ul style="text-align: justify;">
<li>Spring Data REST is designed to create RESTful API easily and quickly.</li>
<li>Spring Data REST automatically exposes Spring Data repositories as REST endpoints, which reduces the amount of boilerplate code needed to create RESTful API.</li>
<li>Spring Data REST leverages hypermedia to make the APIs discoverable, self-documenting, and easy to navigate.</li>
</ul>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c727adb8ef_spring_boot_interview_questions_04.jpg" alt="Spring Data Rest - Unstop" width="1000" height="222" /></p>
<h3 style="text-align: justify;">Q28. What are Spring profiles?</h3>
<p style="text-align: justify;">An approach to separate the configuration of an application and make them only available in specific situations is through the use of profiles in Spring and the Spring Profiles allow developers to map beans to different environments like dev, test, and prod. It provides a way to activate a bunch of configurations with a single profile parameter.</p>
<h3 style="text-align: justify;">Q29. What are the steps needed to insert data in MySQL using Spring Boot?</h3>
<p style="text-align: justify;">The steps needed to insert data into a MySQL database using Spring Boot are:</p>
<ul style="text-align: justify;">
<li>Add MySQL dependency to the pom.xml file.</li>
<li>Configure the database connection in the application.properties file.</li>
<li>Create an entity class level that represents the table in the memory database.</li>
<li>Create a repository interface that extends the CrudRepository interface.</li>
<li>Inject the repository interface into the service or controller class.</li>
<li>Use the repository's save() method to insert data into the table.</li>
</ul>
<p style="text-align: justify;"><strong>For example:</strong></p>
<p style="text-align: justify;"><strong>// Step 1:</strong> Add MySQL dependency to pom.xml file</p>
<pre>&lt;dependency&gt;<br /><br />&lt;groupId&gt;mysql&lt;/groupId&gt;<br /><br />&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;<br /><br />&lt;/dependency&gt;</pre>
<p style="text-align: justify;"><strong>// Step 2:</strong> Configure the database connection in the application.properties file</p>
<pre>spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase<br /><br />spring.datasource.username=root<br /><br />spring.datasource.password=mypassword</pre>
<p style="text-align: justify;"><strong>// Step 3: </strong>Create an entity class level that represents the table in the database</p>
<pre>@Entity<br /><br />@Table(name = "users")<br /><br />public class User {<br /><br />@Id<br /><br />@GeneratedValue(strategy = GenerationType.IDENTITY)<br /><br />private Long id;<br /><br />private String name;<br /><br />private String email;<br /><br />// getters and setters<br /><br />}<br /><br /><strong>// Step 4:</strong> Create a repository interface that extends the CrudRepository public interface<br /><br />public interface UserRepository extends CrudRepository&lt;User, Long&gt; {<br /><br />}</pre>
<p style="text-align: justify;"><strong>// Step 5:</strong> Inject the repository into the service or controller class level.</p>
<pre>@Service<br /><br />public class UserService {<br /><br />@Autowired<br /><br />private UserRepository userRepository;</pre>
<p style="text-align: justify;"><strong>// Step 6:</strong> Use the repository's save() method to insert data into the table</p>
<pre>public void addUser(User user) {<br /><br />userRepository.save(user);<br /><br />}<br /><br />}</pre>
<h3 style="text-align: justify;">Q30. Tell me the steps involved in the creation of a login page in spring boot.</h3>
<p style="text-align: justify;">The steps needed in the creation of a login page in spring boot are:</p>
<p style="text-align: justify;"><strong>STEP1-</strong> Add Spring Security dependency to the pom.xml file.</p>
<p style="text-align: justify;"><strong>STEP2-</strong> Create a security configuration class that extends WebSecurityConfigurerAdapter.</p>
<p style="text-align: justify;"><strong>STEP3-</strong> Override the configure(HttpSecurity http) method to configure the environment property security settings.</p>
<p style="text-align: justify;"><strong>STEP4-</strong> Create a login page with a form that collects the username and password.</p>
<p style="text-align: justify;"><strong>STEP5-</strong> Configure the login page in the configure(HttpSecurity http) method.</p>
<p style="text-align: justify;"><strong>STEP6-</strong> Create a controller class level that handles the login form submission.</p>
<p style="text-align: justify;"><strong>STEP7-</strong> Configure the logout URL and redirect in the configure(HttpSecurity http) method.</p>
<p style="text-align: justify;"><strong>For example:</strong></p>
<p style="text-align: justify;">// <strong>Step 1: </strong>Add Spring Security dependency to the pom.xml file</p>
<pre>&lt;dependency&gt;<br /><br />&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;<br /><br />&lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;<br /><br />&lt;/dependency&gt;</pre>
<p style="text-align: justify;">// <strong>Step 2: </strong>Create a security configuration class that extends WebSecurityConfigurerAdapter</p>
<pre>@Configuration<br /><br />@EnableWebSecurity<br /><br />public class SecurityConfig extends WebSecurityConfigurerAdapter {</pre>
<p style="text-align: justify;">// <strong>Step 3: </strong>Override the configure(HttpSecurity http) method to configure the security settings</p>
<pre>@Override<br /><br />protected void configure(HttpSecurity http) throws Exception {<br /><br />http.authorizeRequests()<br /><br />.antMatchers("", "/home").permitAll()<br /><br />.anyRequest().authenticated()<br /><br />.and()<br /><br />.formLogin()<br /><br />.loginPage("/login")<br /><br />.permitAll()<br /><br />.and()<br /><br />.logout()<br /><br />.logoutUrl("/logout")<br /><br />.logoutSuccessUrl("/login?logout")<br /><br />.permitAll();<br /><br />}<br /><br />@Autowired<br /><br />public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {<br /><br />auth.inMemoryAuthentication()<br /><br />.withUser("user").password("{noop}password").roles("USER");<br /><br />}<br /><br />}</pre>
<p style="text-align: justify;">// <strong>Step 4:</strong> Create a login page with a form that collects the username and password</p>
<pre>&lt;!DOCTYPE html&gt;<br /><br />&lt;html&gt;<br /><br />&lt;head&gt;<br /><br />&lt;title&gt;Login Page&lt;/title&gt;<br /><br />&lt;/head&gt;<br /><br />&lt;body&gt;<br /><br />&lt;h1&gt;Login Page&lt;/h1&gt;<br /><br />&lt;form action="/login" method="post"&gt;<br /><br />&lt;label for="username"&gt;Username:&lt;/label&gt;<br /><br />&lt;input type="text" name="username" /&gt;&lt;br /&gt;<br /><br />&lt;label for="password"&gt;Password:&lt;/label&gt;<br /><br />&lt;input type="password" name="password" /&gt;&lt;br /&gt;<br /><br />&lt;input type="submit" value="Login" /&gt;<br /><br />&lt;/form&gt;<br /><br />&lt;/body&gt;<br /><br />&lt;/html&gt;</pre>
<p style="text-align: justify;">// <strong>Step 5:</strong> Create a controller that handles the login form submission</p>
<pre>@Controller<br /><br />public class LoginController {<br /><br />@GetMapping("/login")<br /><br />public String login() {<br /><br />return "login";<br /><br />}<br /><br />}</pre>
<p style="text-align: justify;">//<strong> Step 6:</strong> Configure the logout URL and redirect in the configure (HttpSecurity http) method</p>
<h3 style="text-align: justify;">Q31. What do you understand by the main class in spring boot?</h3>
<p style="text-align: justify;">A public static void main() method that launches the Spring ApplicationContext , is the main class in Spring Boot and this is the entry point of a Spring Boot application. The main class is typically annotated with @SpringBootApplication, which is a combination of @Configuration, @EnableAutoConfiguration, and @ComponentScan, which needs to be added to the application class.</p>
<p style="text-align: justify;"><strong>Example code for a main application class in Spring Boot:</strong></p>
<pre>@SpringBootApplication<br /><br />public class MyApplication {<br /><br />public static void main(String[] args) {<br /><br />SpringApplication.run(MyApplication.class, args);<br /><br />}<br /><br />}</pre>
<h3 style="text-align: justify;">Q32. What is the use of the crud repository in spring boot?</h3>
<p style="text-align: justify;">To use the crud repository in Spring Boot we can follow these steps:</p>
<ul style="text-align: justify;">
<li>Create an entity class that represents the data to be stored in the memory database.</li>
<li>Create a repository interface that extends CrudRepository.</li>
<li>Inject the repository into the service or controller class file.</li>
<li>At last, we will use the repository's methods to perform CRUD operations on the entity.</li>
</ul>
<p style="text-align: justify;"><strong>For Example:</strong></p>
<p style="text-align: justify;">//<strong> Step 1:</strong> Create an entity class that represents the data to be stored in the memory database</p>
<pre>@Entity<br /><br />public class Employee {<br /><br />@Id<br /><br />@GeneratedValue(strategy = GenerationType.IDENTITY)<br /><br />private Long id;<br /><br />private String name;<br /><br />private String email;<br /><br />// getters and setters<br /><br />}</pre>
<p style="text-align: justify;">// <strong>Step 2:</strong> Create a repository interface that extends CrudRepository public list.</p>
<pre>public interface EmployeeRepository extends CrudRepository&lt;Employee, Long&gt; {<br /><br />}</pre>
<p style="text-align: justify;">// <strong>Step 3:</strong> Inject the repository into the service or controller class file.</p>
<pre>@Service<br /><br />public class EmployeeService {<br /><br />@Autowired<br /><br />private EmployeeRepository employeeRepository;<br /><br />// Step 4: Use the repository's methods to perform CRUD operations on the entity<br /><br />public Employee save(Employee employee) {<br /><br />return employeeRepository.save(employee);<br /><br />}<br /><br />public Employee findById(Long id) {<br /><br />return employeeRepository.findById(id).orElse(null);<br /><br />}<br /><br />public List&lt;Employee&gt; findAll() {<br /><br />return (List&lt;Employee&gt;) employeeRepository.findAll();<br /><br />}<br /><br />public void deleteById(Long id) {<br /><br />employeeRepository.deleteById(id);<br /><br />}<br /><br />}</pre>
<h3 style="text-align: justify;">Q33. Explain Spring Boot CLI(command line interface).</h3>
<p style="text-align: justify;">A command-line interface or command prompt tool, which is called Spring Boot CLI enables programmers to create Spring applications that are expressed as Groovy files. The CLI also makes it simple to quickly create Spring projects and run Groovy files.</p>
<p style="text-align: justify;">For developers who wish to quickly design, test, and run their Spring applications from the command line interface or the command prompt, the Spring Boot CLI(command line interface) is a powerful tool.</p>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c73a4e8b3b_spring_boot_interview_questions_05.jpg" alt="Spring Boot CLI - Unstop" width="1000" height="286" /></p>
<h3 style="text-align: justify;">Q34. What should be the approach or method to handle the 404 error in spring boot?</h3>
<p style="text-align: justify;">To handle the 404 error in Spring Boot we can Create a custom error page for the 404 error and Configure Spring Boot to use the custom error page.</p>
<p style="text-align: justify;"><strong>For example:</strong></p>
<p style="text-align: justify;">// <strong>Step 1</strong>: Create a custom error page for the 404 error</p>
<p style="text-align: justify;">@ControllerAdvice<br /><br />public class CustomErrorController {<br /><br />@RequestMapping("/error")<br />public String handleError(HttpServletRequest request) {<br />Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);<br /><br /><br />if (status != null) {<br />int statusCode = Integer.parseInt(status.toString());<br /><br /><br />if (statusCode == HttpStatus.NOT_FOUND.value()) {<br />return "error-404";<br />}<br />}<br /><br /><br />return "error";<br />}<br /><br /><br />}<br /><br />// <strong>Step 2: </strong>Configure Spring Boot to use the custom error page</p>
<p style="text-align: justify;">server.error.path=/error</p>
<h3 style="text-align: justify;">Q35. Tell me the latest version of the Spring Boot.</h3>
<p style="text-align: justify;">The latest stable version of Spring Boot is 3.0.0.</p>
<h3 style="text-align: justify;">Q36. Can you check the environment variable properties in your Spring boot application?</h3>
<p style="text-align: justify;">Yes, we can check the environment properties in our spring boot application.</p>
<h3 style="text-align: justify;">Q37. In what part of the Spring Boot application do we define properties?</h3>
<p style="text-align: justify;">In a Spring Boot application, properties can be defined in various ways, including command-line properties, properties files, YAML files, and externalized properties.</p>
<h3 style="text-align: justify;">Q38. Can you tell me the tasks performed by an IOC container?</h3>
<p style="text-align: justify;">The tasks that are performed by the IoC container are:</p>
<ol style="text-align: justify;">
<li>Instantiating the objects</li>
<li>Configuring the objects</li>
<li>Assembling the objects</li>
</ol>
<h3 style="text-align: justify;">Q39. Tell me the basic Annotations that are offered by spring boot?</h3>
<p style="text-align: justify;">The basic annotations offered by Spring Boot are:</p>
<ul style="text-align: justify;">
<li>@SpringBootApplication</li>
<li>@EnableAutoConfiguration</li>
<li>@ComponentScan</li>
<li>@Configuration</li>
<li>@Bean</li>
<li>@Controller</li>
<li>@Service</li>
<li>@Repository repository</li>
<li>@Autowired</li>
</ul>
<h3 style="text-align: justify;">Q40. Explain Spring Boot Dependency Management.</h3>
<p style="text-align: justify;">Spring Boot Dependency Management is a feature that manages dependencies and configurations automatically. A list of dependencies that Spring Boot supports is provided with each release.</p>
<p style="text-align: justify;">The Bills of Materials (spring-boot-dependencies) that can be used with the Maven project contain a list of the dependencies. Therefore, in our configuration, we do not need to provide the version of the dependencies because Spring Boot manages itself, so When we update the Spring Boot version, Spring Boot automatically and consistently upgrades all dependencies.</p>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c73e92f2c8_spring_boot_interview_questions_06.jpg" alt="Spring Boot Dependency Management" width="1000" height="386" /></p>
<h3 style="text-align: justify;">Q41. Is it possible for us to create a non-web application in Spring Boot?</h3>
<p style="text-align: justify;">Yes, It is true that Spring Boot allows us to build non-web applications. Beyond only creating web applications, Spring Boot has many more uses.</p>
<p style="text-align: justify;">Additionally, it may be used to create console applications, task scheduling programs, serverless apps, batch or stream processing programs, and more.</p>
<h3 style="text-align: justify;">Q42. Tell me the default port in the spring boot of the Tomcat server.</h3>
<p style="text-align: justify;">The default port of the Tomcat server in spring boot is port 8080.</p>
<h3 style="text-align: justify;">Q43. Will you be able to override or replace the embedded Tomcat server in spring boot?</h3>
<p style="text-align: justify;">Yes, we can override or replace the embedded Tomcat server in Spring Boot. Spring Boot provides flexibility to use different embedded servers like Jetty, Undertow, and Netty. We can also replace the Tomcat server by utilizing starter dependency. We can exclude the default Tomcat dependency and add the desired server dependency in the pom.xml file.</p>
<h3 style="text-align: justify;">Q44. Is it feasible to disable the spring boot application's default web server?</h3>
<p style="text-align: justify;">Yes, it is possible to disable the default web server in the spring boot because there are other web servers available.</p>
<h3 style="text-align: justify;">Q45. Differentiate between Restful web service @RestController and @Controller in Spring Boot?</h3>
<p style="text-align: justify;"><strong>The @RestController Annotation:</strong></p>
<ul style="text-align: justify;">
<li>@RestController is used for creating RESTful API web services.</li>
<li>When used at the class level, @RestController enables the class file to respond to client requests.</li>
</ul>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c743d0f8b2_spring_boot_interview_questions_07.jpg" alt="@RestController and @Controller in Spring Boot" width="1000" height="345" /></p>
<p style="text-align: justify;"><strong>The @Controller Annotation:</strong></p>
<ul style="text-align: justify;">
<li>@Controller is used for traditional Spring controllers.</li>
<li>Also, the @Controller annotation is typically used in combination with a @RequestMapping annotation for request-handling methods</li>
</ul>
<h3 style="text-align: justify;">Q46. Can you tell the flow of HTTPS requests through the Spring boot app?</h3>
<p style="text-align: justify;">The flow of HTTP request through the spring boot are:</p>
<ul style="text-align: justify;">
<li>The client will send the server an HTTPS request.</li>
<li>The embedded web server in the Spring Boot application will take in the request.</li>
<li>The request is then forwarded to the DispatcherServlet, which is auto-configured by Spring Boot.</li>
<li>Based on the request URL and HTTP method, the DispatcherServlet transfers the request to the appropriate controller method.</li>
<li>Once the request has been processed, the controller method will return a response.</li>
<li>The response will be sent back to the DispatcherServlet.</li>
<li>The DispatcherServlet will convert the response into an appropriate format based on the request's Accept header.</li>
<li>At last, The response is sent back to the client over HTTPS.</li>
</ul>
<p style="text-align: justify;"> <img lazing="true"src="https://d8it4huxumps7.cloudfront.net/uploads/images/647c747e2b938_spring_boot_interview_questions_08.jpg" alt="Spring Boot Flow Architecture" width="1000" height="450" /></p>
<h3 style="text-align: justify;">Q47. Do you know about the points of disimilarities between RequestMapping and GetMapping?</h3>
<p style="text-align: justify;"><strong>1. RequestMapping</strong></p>
<p style="text-align: justify;">It is used at the class level and method level.</p>
<p style="text-align: justify;">It Can be used to map any HTTP request method (GET, POST, PUT, DELETE, etc.).</p>
<p style="text-align: justify;">It supports the consumes attribute to specify the media type of the request body.</p>
<p style="text-align: justify;"><strong>2. GetMapping</strong></p>
<p style="text-align: justify;">It is used only at the method level.</p>
<p style="text-align: justify;">It is used specifically for HTTP GET requests.</p>
<p style="text-align: justify;">It Does not support the consumes attribute.</p>
<h3 style="text-align: justify;">Q48. What are the methods available to get the list of all the beans which is in the Spring Boot application?</h3>
<p style="text-align: justify;">There are several ways to obtain a list of every bean in our spring boot application, some of them are:</p>
<p style="text-align: justify;"><strong>1. By using the ListableBeanFactory interface</strong>.</p>
<p style="text-align: justify;">Example:</p>
<pre>@Autowired<br /><br />private ListableBeanFactory beanFactory;<br /><br />public void displayAllBeans() {<br /><br />String[] allBeanNames = beanFactory.getBeanDefinitionNames();<br /><br />for (String beanName : allBeanNames) {<br /><br />System.out.println(beanName);<br /><br />}<br /><br />}</pre>
<p style="text-align: justify;"><strong>2. By using a spring actuator</strong></p>
<p style="text-align: justify;">Example: http://localhost:8080/actuator/beans</p>
<p style="text-align: justify;"><strong>3. By using appContext.getBeanDefinitionNames()</strong></p>
<h3 style="text-align: justify;">Q49. Name the spring actuator endpoints in the spring boot.</h3>
<p style="text-align: justify;">Some of the spring Actuator endpoints in the spring boot are:</p>
<ul style="text-align: justify;">
<li>Shutdown</li>
<li>Sessions</li>
<li>Threaddump</li>
<li>Metrics</li>
<li>Loggers</li>
<li>Health</li>
<li>Flyway</li>
<li>Caches</li>
</ul>
<h3 style="text-align: justify;">Q50. Explain Spring Initializr.</h3>
<p style="text-align: justify;">Spring Initializr is a powerful web-based application tool that simplifies the process of setting up Spring Boot projects by generating a project with just what you need to start quickly and offering an extensible API for creating JVM-based projects. It is helpful when we are starting to build a project from scratch. Spring Initializr offers web-based application endpoints for third-party clients.</p>
<h3 style="text-align: justify;">Q51. Explain the default package.</h3>
<p style="text-align: justify;">In Spring Boot, a class file that does not have any package declaration is considered to be a default package.</p>
<h3 style="text-align: justify;">Q52. What do you mean by Spring security?</h3>
<p style="text-align: justify;">Spring Security is a powerful and customizable authentication and access-control framework that provides comprehensive support for both authentication and authorization. Spring Security provides comprehensive protection against attacks, which makes it an ideal choice for securing Spring-based applications.</p>
<h3 style="text-align: justify;">Q53. Describe an IOC container.</h3>
<p style="text-align: justify;">The Spring IoC container is a Spring implementation using the IoC pattern paired with DI (Dependency Injection). It is a software container that offers an application environment that may be customised for the creation, initialization, caching, and management of pluggable objects, also known as beans. The application's components are managed by the container using Dependency Injection (DI). There are two types of IoC containers in Spring: <strong>BeanFactory and ApplicationContext.</strong></p>
<h3 style="text-align: justify;">Q54. Do you know about microservices in Spring Boot?</h3>
<p style="text-align: justify;">A modern approach to software development is known as "microservices" in spring boot that entails the delivery of application code in manageable chunks, each free of other components with non-functional features. Microservices are made up of a number of tiny, autonomous services that communicate with one another with minimal configuration. A well-liked framework for creating microservices applications is Spring Boot with minimal configuration.</p>
<h3 style="text-align: justify;">Q55. Give an example for the @PUT rest endpoint and @DELETE rest endpoint.</h3>
<p style="text-align: justify;"><strong>@PUT rest endpoint</strong></p>
<pre>@PutMapping("/users/{id}")<br />public ResponseEntity&lt;User&gt; updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) throws ResourceNotFoundException {<br />User user = userRepository.findById(userId)<br />.orElseThrow(() -&gt; new ResourceNotFoundException("User not found on :: " + userId));<br />user.setEmail(userDetails.getEmail());<br />user.setLastName(userDetails.getLastName());<br />user.setFirstName(userDetails.getFirstName());<br />final User updatedUser = userRepository.save(user);<br />return ResponseEntity.ok(updatedUser);<br />}</pre>
<p style="text-align: justify;"><strong>@DELETE rest endpoint</strong></p>
<pre>@DeleteMapping("/users/{id}")<br />public Map&lt;String, Boolean&gt; deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {<br />User user = userRepository.findById(userId)<br />.orElseThrow(() -&gt; new ResourceNotFoundException("User not found on :: " + userId));<br />userRepository.delete(user);<br />Map&lt;String, Boolean&gt; response = new HashMap&lt;&gt;();<br />response.put("deleted", Boolean.TRUE);<br />return response;<br />}</pre>
<h3 style="text-align: justify;">Q56. How can logging levels be used with Spring Boot?</h3>
<p style="text-align: justify;">Some ways to use log level in spring boot are:</p>
<p style="text-align: justify;"><strong>1. By using Spring Boot Apache Commons Logging for all internal logging:</strong></p>
<p style="text-align: justify;">Spring Boot's default configurations provide support for the use of the programming language Java Util Logging, Log4j2, and Logback, and using these, we can configure the console logging as well as file logging. We can specify the log file path and name using the logging.path and logging.file properties, respectively.</p>
<p style="text-align: justify;"><strong>2. By using Spring Boot to define logging groups or log level or internal logging in our Spring Environment:</strong></p>
<p style="text-align: justify;">For example, adding logging.group.tomcat=org.apache.catalina, org.apache.coyote, org.apache.tomcat in the tomcat group.</p>
<h3 style="text-align: justify;">Q57. Explain the term Spring Cloud.</h3>
<p style="text-align: justify;">Spring Cloud framework offers tools and services in order to make it simple for developers to create and deploy distributed systems that implement common patterns. The base of Spring Cloud is Spring Boot, which offers a wide range of functionality to assist you in managing and monitoring your application.</p>
<h3 style="text-align: justify;">Q58. Explain @componentScan in the class file.</h3>
<p style="text-align: justify;">We use the @ComponentScan annotation to specify the base packages that Spring should scan for components or beans that are annotated with stereotype annotations. By default, Spring scans the current package and all of its sub-base packages. We can specify the packages to be scanned by using the <strong>@ComponentScan annotation</strong> along with the <strong>@Configuration annotation</strong> and providing the <strong>basePackages</strong> argument. It specifies base packages by using the <strong>basePackages </strong>attributes.</p>
<h3 style="text-align: justify;">Q59. Name the key components of the spring boot.</h3>
<p style="text-align: justify;">Spring boot has the following key components:</p>
<ul style="text-align: justify;">
<li>Spring Boot Starters</li>
<li>Spring Boot AutoConfigurator</li>
<li>Spring Boot CLI</li>
<li>Spring Boot Actuator</li>
</ul>
<p style="text-align: justify;">These key components help to simplify the development of Spring applications by reducing the number of manual configurations required and providing production-grade features to monitor and manage the application.</p>
<h3 style="text-align: justify;">Q60. Can you explain command-line properties?</h3>
<p style="text-align: justify;">Command-line properties are a way to pass configuration values to a Spring Boot application when it starts up. Command-line arguments are transformed into properties by Spring Boot and added as environment variables. Command-line properties are given priority over all other sources of property information.</p>
<h3 style="text-align: justify;">Q61. Will you be able to run a Spring boot project by using spring boot CLI?</h3>
<p style="text-align: justify;">To execute the Spring Boot project using Spring Boot CLI, we can follow these steps:</p>
<ol style="text-align: justify;">
<li>Install the Spring Boot CLI.</li>
<li>Run the CLI.</li>
<li>Initialize a new project.</li>
<li>After initializing the new project, run the Spring Boot application by using any of the following commands:<strong> java -jar command: "java -jar target/myapplication-0.0.1-SNAPSHOT.jar",</strong></li>
</ol>
<ul style="text-align: justify;">
<li><strong>Using Maven command: "mvn spring-boot:run"</strong>.</li>
<li><strong>Using Gradle command: "gradle bootRun".</strong></li>
</ul>
<h3 style="text-align: justify;">Q62. What is the minimum version of JAVA that you will need to run the Spring Boot?</h3>
<p style="text-align: justify;">The minimum version of JAVA needed to run the Spring Boot is JAVA 8.</p>
<h3 style="text-align: justify;">Q63. Tell me how JPA and Hibernate vary from one another.</h3>
<p style="text-align: justify;"><strong>JPA</strong></p>
<ul style="text-align: justify;">
<li>JPA stands for Java Persistence API.</li>
<li>JPA is only a specification, which means that there is no implementation.</li>
<li>JPA is just an interface that must be followed.</li>
<li>The query language of JPA is Java Persistence query language.</li>
</ul>
<p style="text-align: justify;"><strong>Hibernate</strong></p>
<ul style="text-align: justify;">
<li>Hibernate is an ORM tool used for saving the state of the Java object in the database.</li>
<li>It is an implementation of the JPA specification.</li>
<li>Hibernate is a framework that supports JPA.</li>
<li>Hibernate supports a Java Virtual Machine (JVM).</li>
<li>The query language of Hibernate is Hibernate Query language.</li>
</ul>
<h3 style="text-align: justify;"><strong>Q64. Name the key HTTP method that can be used in Spring Boot rest services.</strong></h3>
<p style="text-align: justify;">The key HTTP method that can be used in spring boot services are:</p>
<ul style="text-align: justify;">
<li><strong>GET:</strong> With this key HTTP method, it reads a resource.</li>
<li><strong>PUT:</strong> We can update an existing resource with PUT key HTTP method.</li>
<li><strong>POST:</strong> With this key HTTP method, it helps in the creation of a new resource.</li>
<li><strong>DELETE:</strong> The DELETE method deletes the resource.</li>
<li><strong>PATCH:</strong> It updates a part of an existing resource.</li>
</ul>
<h3 style="text-align: justify;">Q65. What should be the way to implement command-line applications in Spring Boot?</h3>
<p style="text-align: justify;">To use Spring Boot for command-line applications, we need to create a new Spring Boot project or use an existing one and then update the pom.xml file of the project and build the Spring Boot app into a single executable Jar dependencies file with Maven, and run the Spring Boot app from the command line application.</p>
<h3 style="text-align: justify;">Q66. What do you mean by debug logging?</h3>
<p style="text-align: justify;">Debug logging is a feature that stores thorough details about each stage of a process in a log file which allows for further analysis and problem-solving. Debug logging can be enabled by adjusting an application's logging preferences or by specifying particular environment variables.</p>
<p style="text-align: justify;">Due to the advent and popularity of cloud computing, the focus is on the core business, where a delegation of logistics is handled by expert service providers. Several service tools enable the developer to save cost and time. Hence, the microservices have been developed in an Agile manner. These microservices need to be lightweight and converging. This is where Spring Boot is useful. It allows applications to focus entirely on the business while Spring Boot handles the rest of the operations. Spring Boot includes default files for every operation and allows you to choose what you want to configure for the application.&nbsp;</p>
60+ Spring Boot Interview Questions With Answers (2026)
Table of content: 
Top Spring Boot Interview Questions and Answers
60+ Spring Boot Interview Questions With Answers (2026)
Amp up your technical round interview preparation. This article will help you grasp the fundamentals of Spring Boot with 60+ questions.
Schedule Icon
28 mins read
60+ Spring Boot Interview Questions With Answers (2026)
Spring Boot helps us in the construction of web apps and microservices by using the Java-based open-source framework. The Spring Boot framework is developed and maintained by Pivotal Team. It provides us with pre-configured libraries and tools that enable developers to create standalone, production-grade Spring-based applications that can be run directly without the need for deploying WAR files and manual configuration.

The framework is opinionated, meaning it provides a specific view of the Spring platform and third-party libraries, so developers can get started with minimum fuss.

This blog will take you through important Spring Boot interview questions to excel in your technical interview.

Looking for guidance to boost up your career? Explore Here

Top Spring Boot Interview Questions and Answers
Q1. Explain Spring Boot and also tell the features of Spring Boot.
Spring Boot is a Java-based open-source rapid application development framework that is used to build microservices and web applications. With the help of the prebuilt code found in its codebase, Spring Boot offers an entirely flexible environment that does not need a manual configuration and provides powerful batch processing.

Some key features of Sprint Boot are:

It is a combination of Spring Framework and Embedded Servers
An important feature of Spring Boot is that there is no requirement for XML configuration.
It provides an opinionated "starter" dependencies version to simplify build configuration
It automatically configures Spring and third-party libraries
Spring Boot Supports microservice architecture and powerful batch processing.
It offers a versatile approach to setting up XML configurations, database transactions, and Java Beans.
Spring Boot Features

 

Q2. Tell the steps involved in the creation of the spring boot project in Eclipse.
We can create the Spring Boot project in Eclipse by using the spring Initializer, the steps involved are:

Go to https://start.spring.io
Choose the project's details, such as group ID, artifact ID, dependencies, and packaging type.
Click on the 'Generate' button to download the Spring Boot project.
Import the project into Eclipse using the 'Existing Maven Projects' option in the 'Import' menu.
Q3. If you want to deploy the Spring Boot application in Tomcat, how will you do that?
To deploy the Spring Boot application in Tomcat, we can follow these steps:

Firstly,  we will modify the Spring Boot application to create a WAR file instead of a JAVA-Jar file:
Add the Spring Boot Maven plugin to the pom.xml file.
We will then set the packaging type to 'war' and exclude the embedded application server Tomcat dependency from the pom.xml file.
Then we add the Tomcat dependency with the provided scope to the pom.xml file.
We execute the 'mvn clean package', and the WAR file will be built and copied to the Tomcat web apps resources folder.
To launch the Tomcat server, we will run the 'startup.bat' or 'startup.sh' script in the bin folder
Then, at last, we can access the application by going to http://localhost:8080/application-name, where application-name is the name of the WAR file without the ".war" extension.
Q4. Can you distinguish between a spring and a spring boot?
Spring and Spring Boot are both Java frameworks that are used in web applications. The points of dissimilarities are:

SPRING:

Spring is a popular Java EE framework used for creating apps, and it consists of boilerplate code.
Struts, JSP, Hibernate, and other frameworks are supported by Spring.
Java EE 7 developers may create straightforward, dependable, and scalable enterprise apps using Spring.
SPRING BOOT:

The extension of the Spring framework is called Spring Boot which helps in removing the boilerplate configuration.
Spring Boot is a microservices-based framework that is primarily used to quickly create production-ready features.
Everything in Spring Boot is pre-configured, so we only need to utilize the appropriate settings when using a specific functionality, which helps in removing boilerplate code.
Difference between Spring and Spring Boot - Unstop

Q5. What is a spring boot actuator?
Spring Boot Actuator is a sub-project of the Spring Boot framework that provides additional features for monitoring and managing Spring Boot applications. The Spring Actuator exposes operational information about any running application using HTTP endpoints, allowing developers to easily monitor and manage their applications. It is important to secure the Spring Actuator because it contains a lot of confidential information.

Some key features of the Spring Boot Actuator are:

Spring Boot Actuator enables developers to monitor the health of their application and CPU usage using the /actuator/health endpoint.
Spring Boot Actuator provides secured endpoints for monitoring and managing Spring Boot applications.
With the help of the Spring Boot Actuator, developers can audit their applications using the /actuator/audit events endpoint.
Q6. Explain how you can modify a port in a Spring Boot.
The steps to change the port number in a Spring Boot application using application.properties file are:

Open the application.properties file.
Add the following line to the file: server.port={port-number}.
Replace {port-number} with the desired port number.
Save the changes.
The application will now be running on the new port number.
Q7. What is the process to build a war file in Spring Boot?
To create a war file in Spring Boot, we can follow these steps:

Updating the pom.xml file:

Add the spring-boot-starter-tomcat dependency.

Set the packaging type to "war".

Modifying the main class:

We will extend the main class to SpringBootServletInitializer.

Override the configure() method.

Building the WAR file:

Run the "mvn clean package" command.

The WAR file that is created will be in the "target" resources folder.

Q8. Explain JPA in Spring Boot.
The specification for managing relational data in Java programming language application code is called JPA (Java Persistence API). Using Object-Relation Mapping (ORM), JPA enables us to access and persist data between Java objects or classes and relational databases. JPA is a collection of interfaces that gives Java applications access to a runtime EntityManager API for managing relational data.

Q9. Is it possible to save images in the database using Spring Boot, how will you do that?
Yes, it is possible to save an image in the database using Spring Boot. For that, we can follow these steps:

Create an entity class to store the image data in the database.
Define a RestController class with a POST method to upload the image.
Handle the image upload using MultipartFile[] file as a parameter.
Compress the image and store it in the database or store the direct image in the database.
Update the handler method, which is responsible for handling the form submission to store the image in the database.
Display the uploaded image in the browser.
Q10. Explain the auto-configuration class in Spring Boot?
The Spring Boot Auto-Configuration class feature helps the Spring-based application code to set up automatically, which is based on the Java -jar package phase or Jar dependencies version that has been added to the classpath. Spring Boot Auto-Configuration feature eliminates the need for developers to define certain beans included in the auto-configuration classes. This feature makes development faster and easier by providing fundamental settings required to configure the application with various spring framework.

Q11. I am getting a whitelabel error page in the Spring Boot application code, what should I do?
To solve the Whitelabel error page in the Spring Boot application, we can use these methods:

1. Customizing the Whitelabel Error Page:

Developers can create a custom error page to align with the UI of their Spring Boot application. So to customize the error page, developers can create a Custom Error Controller and define the error handling logic in that controller class. This controller will map any errors to the customized error page.

2. Excluding the ErrorMvcAutoConfiguration Bean:

Another way to disable the Whitelabel error page is by excluding the ErrorMvcAutoConfiguration bean.

This may be done by adding:

spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration section to the properties file.

3. Creating a Custom Auto-Configuration:

In order to manage problems in a Spring Boot application code, developers can also define a custom auto-configuration. If there is a problem, the user will receive more detailed t information due to customized auto-configuration.

Q12. How will you fetch data from the database in Spring Boot?
To fetch data from the database in spring boor, we can follow these steps:

Define an entity class to map to the table in the database.
Define a repository interface that extends JpaRepository to perform CRUD operations on the entity.
Define a service class that uses the repository to fetch data from the database.
Define a controller class that uses the service to return the fetched data as an HTTP response.
Q13. Describe the meaning of bootstrapping in Spring Boot?
In Spring Boot, the term "bootstrapping" refers to the setup or initialization of a Spring Boot application. The initial project structure, application context, and essential dependencies version must all be configured throughout this procedure.

Q14. Tell me the steps to create Java -jar file in Spring Boot?
The steps to create Java -jar file in Spring Boot are:

Add the Spring Boot Maven plugin to the pom.xml file.
After that, we will use the Maven plugin package command to build the project and produce a Java -JAR file.
Java -JAR file will be created in the target folder of the project.
Run the Java -JAR file by the command "java -jar jar-file-name.jar".
Q15. Have you heard about dependency injection in the Spring Boot?
Dependency injection is a design approach that removes dependencies from computer code, which makes the code easier to manage and test the application. Dependency Injection is implemented in Spring Boot by using the Inversion of Control (IoC) architectural paradigm.

There are three kinds of dependency injections, that is - constructor dependency injection, property dependency injection, and method dependency injection.

Q16. If I want to save images in MongoDB using Spring Boot, what should be done?
In order to use Spring Boot to save an image in MongoDB, we must configure the required Spring Boot properties and add the spring-boot-starter-data-mongodb dependency to the pom.xml file. We may also utilise GridFS for bigger files and MongoDB BSON for smaller ones.

Here is a basic structure code for storing an image in MongoDB using GridFS:

@Autowiredprivate GridFsTemplate gridFsTemplate;public String store(MultipartFile file) throws IOException {DBObject metaData = new BasicDBObject();metaData.put("type", file.getContentType());ObjectId objectId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), metaData);return objectId.toString();}
Q17. Discuss or mention the steps involved to configure hibernate in Spring Boot?
To configure Hibernate in Spring Boot, we should add the spring-boot-starter-data-jpa dependency to the pom.xml file. The step to configure Hibernate are:

STEP1- We will Add the spring-boot-starter-data-jpa dependency to the pom.xml file.

STEP2- Then we will Create JPA entities.

STEP3- After creating the entities we will Create a JPA repository.

STEP4- We will Configure the database properties in the application.properties file.

STEP5- In the last step we need to Configure the Hibernate properties in the application.properties file.

Here is a basic structure code for configuring Hibernate in the Spring Boot framework:

<dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-data-jpa</artifactId></dependency>
Q18. Discuss the benefits of Spring Boot.
The benefits of Spring Boot are:

Spring Boot is quick and have a safe environment property configuration.
It reduces code length and simplifies the development process.
With the help of Spring Boot one can avoid writing boilerplate code and XML configuration.
Spring Boot creates stand-alone programs with a variety of non-functional features that are common to large classes of projects.
It provides a toolbox that is effective and scalable for creating Spring apps using microservices in spring boot.
Spring Boot combines well with the various components of the Spring Ecosystem, including Spring JDBC, Spring ORM, Spring Data, and Spring Security.
Q19. Describe the term thyme leaf.
Thymeleaf is an advanced server-side Java EE template engine for both web and standalone contexts that can interpret HTML, XML, JavaScript, CSS, and plain text. It is a powerful engine that is more flexible than JSP and is responsible for dynamic content rendering on UI.

To use Thymeleaf in a Spring Boot project, we first have to add the spring-boot-starter-thymeleaf dependency to the pom.xml file, configure the ViewResolver, and create templates in HTML format with Thymeleaf syntax. There are many use cases of Thymeleaf in the view layer of the Spring MVC application class.

Q20. Explain what is the need for Spring-Boot-DevTools Module is.
The DevTools module provides several features to improve the development experience, such as caching static content resources, automatic restarts, live reload, global settings, and running remote applications.

Here are some reasons why we need Spring-Boot-Devtools module:

It provides additional development-time features that make the application development experience more pleasant.
It avoids the need to manually set the configuration of the Spring-based application.
It improves the performance of the application by caching static content/template files to serve them faster to the browser/client.
To use Spring Boot DevTools, we need to add the spring-boot-devtools dependency to the pom.xml or build.gradle file and DevTools is included in the repackaged archive, and the spring-boot-devtools module automatically applies the sensible development-time configuration.

Q21. How will you change the port of the embedded Tomcat server in Spring Boot?
To change the port of the embedded Tomcat server, we can use any of the following ways:

By setting the resource file's server.port property.
By updating the server.port properties.
By using the EmbeddedServletContainerCustomizer interface to change the default port in Spring Boot 1.x version.
By using the WebServerFactoryCustomizer interface to change the default port in Spring Boot 2.x version.
Q22. List the steps which you will need to connect a Spring Boot application to a database using JDBC.
The steps to connect a spring boot application to a database using JDBC are:

Add the Spring Boot Starter JDBC dependency to the build configuration file.
Configure the database connection properties in the application.properties or application.yml file.
Create a database bean using XML or Java config. programming language.
Then Autowire the JdbcTemplate class to access the relational database.
Utilize JdbcTemplate in a Spring Boot application to access a relational database; the Spring Boot Starter JDBC dependency must be included in the build configuration file.
The following dependencies can be added by Maven plugin users in the pom.xml file:

<dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-jdbc</artifactId></dependency><dependency><groupId>mysql</groupId><artifactId>mysql-connector-java</artifactId></dependency>
The database connection settings can then be configured in the application.properties or application.yml file.

For example, the basic structure code is:

spring.datasource.driverClassName=com.mysql.jdbc.Driverspring.datasource.url=jdbc:mysql://localhost:3306/mydbspring.datasource.username=rootspring.datasource.password=password
Next, we can create a database bean using XML or Java config. For example the basic structure code is:

<bean><property name="driverClassName" value="${spring.datasource.driverClassName}" /><property name="url" value="${spring.datasource.url}" /><property name="username" value="${spring.datasource.username}" /><property name="password" value="${spring.datasource.password}" /></bean>
The JdbcTemplate class can now be autowired to access the relational database. For example the basic code snippet is:

@AutowiredJdbcTemplate jdbcTemplate;public List<Customer> findAll() {return jdbcTemplate.query("SELECT id, first_name, last_name FROM customers",(rs, rowNum) -> new Customer(rs.getLong("id"), rs.getString("first_name"), rs.getString("last_name")));}
Q23. Explain @RequestMapping and @RestController annotation use in Sprint Boot.
We make use of the @RequestMapping annotation to map HTTP requests to handler methods of MVC and REST controller class in Spring Boot. It is one of the most common annotations used in Spring Web applications.

The @Controller and @ResponseBody annotations are combined into the @RestController annotation for simplicity. As a result, there is no need for the @ResponseBody annotation to be present in each request-handling function of the controller class level. RESTful API web services are developed using the @RestController annotation.

Q24. How will you disable the auto-configuration in sprint boot?
To disable the auto-configuration, we can use any of the following ways:

By utilizing @EnableAutoConfiguration annotation of the exclude attribute . We can specify the classes that we want to exclude from auto-configuration.

By utilizing the @EnableAutoConfiguration annotation's of excludeName attribute. The fully qualified names of the classes that we want to keep out of auto-configuration can be specified.

For example, the basic code snippet is:

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class })public class MyApp {public static void main(String[] args) {SpringApplication.run(MyApp.class, args);}}
Q25. Give an example of ReadOnly as true in Transaction management?
An illustration of a Spring Boot application that uses @Transactional with readOnly=true is:

If we have a UserService class that gets user data from a database, so we can declare the method @Transactional(readOnly=true) to enhance the performance of database transactions as we are only reading the data.

Basic structure code example:

@Servicepublic class UserService {@Autowiredprivate UserRepository userRepository;@Transactional(readOnly=true)public User getUserById(Long id) {return userRepository.findById(id).orElse(null);}// other methods}
Q26. What are the advantages of the YAML file?
The advantages of the YAML file are:

YAML files have a hierarchical structure that makes them easier to read and write.
YAML files support maps, lists, and scalar types, which makes them more versatile than properties files.
YAML files have more clear and human-readable syntax than properties files.
YAML files provide unique and useful features like anchors, aliases, and references that are not available in properties files.
Q27. Explain Spring Data REST.
A framework called Spring Data REST expands on Spring Data repositories and automatically exports them as REST resources. It makes use of hypermedia to enable clients to swiftly discover functionality made available by the repositories and incorporate these resources into associated hypermedia-based functionality and business logic.

Some advantages of Spring Data Rest are:

Spring Data REST is designed to create RESTful API easily and quickly.
Spring Data REST automatically exposes Spring Data repositories as REST endpoints, which reduces the amount of boilerplate code needed to create RESTful API.
Spring Data REST leverages hypermedia to make the APIs discoverable, self-documenting, and easy to navigate.
Spring Data Rest - Unstop

Q28. What are Spring profiles?
An approach to separate the configuration of an application and make them only available in specific situations is through the use of profiles in Spring and the Spring Profiles allow developers to map beans to different environments like dev, test, and prod. It provides a way to activate a bunch of configurations with a single profile parameter.

Q29. What are the steps needed to insert data in MySQL using Spring Boot?
The steps needed to insert data into a MySQL database using Spring Boot are:

Add MySQL dependency to the pom.xml file.
Configure the database connection in the application.properties file.
Create an entity class level that represents the table in the memory database.
Create a repository interface that extends the CrudRepository interface.
Inject the repository interface into the service or controller class.
Use the repository's save() method to insert data into the table.
For example:

// Step 1: Add MySQL dependency to pom.xml file

<dependency><groupId>mysql</groupId><artifactId>mysql-connector-java</artifactId></dependency>
// Step 2: Configure the database connection in the application.properties file

spring.datasource.url=jdbc:mysql://localhost:3306/mydatabasespring.datasource.username=rootspring.datasource.password=mypassword
// Step 3: Create an entity class level that represents the table in the database

@Entity@Table(name = "users")public class User {@Id@GeneratedValue(strategy = GenerationType.IDENTITY)private Long id;private String name;private String email;// getters and setters}// Step 4: Create a repository interface that extends the CrudRepository public interfacepublic interface UserRepository extends CrudRepository<User, Long> {}
// Step 5: Inject the repository into the service or controller class level.

@Servicepublic class UserService {@Autowiredprivate UserRepository userRepository;
// Step 6: Use the repository's save() method to insert data into the table

public void addUser(User user) {userRepository.save(user);}}
Q30. Tell me the steps involved in the creation of a login page in spring boot.
The steps needed in the creation of a login page in spring boot are:

STEP1- Add Spring Security dependency to the pom.xml file.

STEP2- Create a security configuration class that extends WebSecurityConfigurerAdapter.

STEP3- Override the configure(HttpSecurity http) method to configure the environment property security settings.

STEP4- Create a login page with a form that collects the username and password.

STEP5- Configure the login page in the configure(HttpSecurity http) method.

STEP6- Create a controller class level that handles the login form submission.

STEP7- Configure the logout URL and redirect in the configure(HttpSecurity http) method.

For example:

// Step 1: Add Spring Security dependency to the pom.xml file

<dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-security</artifactId></dependency>
// Step 2: Create a security configuration class that extends WebSecurityConfigurerAdapter

@Configuration@EnableWebSecuritypublic class SecurityConfig extends WebSecurityConfigurerAdapter {
// Step 3: Override the configure(HttpSecurity http) method to configure the security settings

@Overrideprotected void configure(HttpSecurity http) throws Exception {http.authorizeRequests().antMatchers("", "/home").permitAll().anyRequest().authenticated().and().formLogin().loginPage("/login").permitAll().and().logout().logoutUrl("/logout").logoutSuccessUrl("/login?logout").permitAll();}@Autowiredpublic void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {auth.inMemoryAuthentication().withUser("user").password("{noop}password").roles("USER");}}
// Step 4: Create a login page with a form that collects the username and password

<!DOCTYPE html><html><head><title>Login Page</title></head><body><h1>Login Page</h1><form action="/login" method="post"><label for="username">Username:</label><input type="text" name="username" /><br /><label for="password">Password:</label><input type="password" name="password" /><br /><input type="submit" value="Login" /></form></body></html>
// Step 5: Create a controller that handles the login form submission

@Controllerpublic class LoginController {@GetMapping("/login")public String login() {return "login";}}
// Step 6: Configure the logout URL and redirect in the configure (HttpSecurity http) method

Q31. What do you understand by the main class in spring boot?
A public static void main() method that launches the Spring ApplicationContext , is the main class in Spring Boot and this is the entry point of a Spring Boot application. The main class is typically annotated with @SpringBootApplication, which is a combination of @Configuration, @EnableAutoConfiguration, and @ComponentScan, which needs to be added to the application class.

Example code for a main application class in Spring Boot:

@SpringBootApplicationpublic class MyApplication {public static void main(String[] args) {SpringApplication.run(MyApplication.class, args);}}
Q32. What is the use of the crud repository in spring boot?
To use the crud repository in Spring Boot we can follow these steps:

Create an entity class that represents the data to be stored in the memory database.
Create a repository interface that extends CrudRepository.
Inject the repository into the service or controller class file.
At last, we will use the repository's methods to perform CRUD operations on the entity.
For Example:

// Step 1: Create an entity class that represents the data to be stored in the memory database

@Entitypublic class Employee {@Id@GeneratedValue(strategy = GenerationType.IDENTITY)private Long id;private String name;private String email;// getters and setters}
// Step 2: Create a repository interface that extends CrudRepository public list.

public interface EmployeeRepository extends CrudRepository<Employee, Long> {}
// Step 3: Inject the repository into the service or controller class file.

@Servicepublic class EmployeeService {@Autowiredprivate EmployeeRepository employeeRepository;// Step 4: Use the repository's methods to perform CRUD operations on the entitypublic Employee save(Employee employee) {return employeeRepository.save(employee);}public Employee findById(Long id) {return employeeRepository.findById(id).orElse(null);}public List<Employee> findAll() {return (List<Employee>) employeeRepository.findAll();}public void deleteById(Long id) {employeeRepository.deleteById(id);}}
Q33. Explain Spring Boot CLI(command line interface).
A command-line interface or command prompt tool, which is called Spring Boot CLI enables programmers to create Spring applications that are expressed as Groovy files. The CLI also makes it simple to quickly create Spring projects and run Groovy files.

For developers who wish to quickly design, test, and run their Spring applications from the command line interface or the command prompt, the Spring Boot CLI(command line interface) is a powerful tool.

Spring Boot CLI - Unstop

Q34. What should be the approach or method to handle the 404 error in spring boot?
To handle the 404 error in Spring Boot we can Create a custom error page for the 404 error and Configure Spring Boot to use the custom error page.

For example:

// Step 1: Create a custom error page for the 404 error

@ControllerAdvice

public class CustomErrorController {

@RequestMapping("/error")
public String handleError(HttpServletRequest request) {
Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);


if (status != null) {
int statusCode = Integer.parseInt(status.toString());


if (statusCode == HttpStatus.NOT_FOUND.value()) {
return "error-404";
}
}


return "error";
}


}

// Step 2: Configure Spring Boot to use the custom error page

server.error.path=/error

Q35. Tell me the latest version of the Spring Boot.
The latest stable version of Spring Boot is 3.0.0.

Q36. Can you check the environment variable properties in your Spring boot application?
Yes, we can check the environment properties in our spring boot application.

Q37. In what part of the Spring Boot application do we define properties?
In a Spring Boot application, properties can be defined in various ways, including command-line properties, properties files, YAML files, and externalized properties.

Q38. Can you tell me the tasks performed by an IOC container?
The tasks that are performed by the IoC container are:

Instantiating the objects
Configuring the objects
Assembling the objects
Q39. Tell me the basic Annotations that are offered by spring boot?
The basic annotations offered by Spring Boot are:

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
@Configuration
@Bean
@Controller
@Service
@Repository repository
@Autowired
Q40. Explain Spring Boot Dependency Management.
Spring Boot Dependency Management is a feature that manages dependencies and configurations automatically. A list of dependencies that Spring Boot supports is provided with each release.

The Bills of Materials (spring-boot-dependencies) that can be used with the Maven project contain a list of the dependencies. Therefore, in our configuration, we do not need to provide the version of the dependencies because Spring Boot manages itself, so When we update the Spring Boot version, Spring Boot automatically and consistently upgrades all dependencies.

Spring Boot Dependency Management

Q41. Is it possible for us to create a non-web application in Spring Boot?
Yes, It is true that Spring Boot allows us to build non-web applications. Beyond only creating web applications, Spring Boot has many more uses.

Additionally, it may be used to create console applications, task scheduling programs, serverless apps, batch or stream processing programs, and more.

Q42. Tell me the default port in the spring boot of the Tomcat server.
The default port of the Tomcat server in spring boot is port 8080.

Q43. Will you be able to override or replace the embedded Tomcat server in spring boot?
Yes, we can override or replace the embedded Tomcat server in Spring Boot. Spring Boot provides flexibility to use different embedded servers like Jetty, Undertow, and Netty. We can also replace the Tomcat server by utilizing starter dependency. We can exclude the default Tomcat dependency and add the desired server dependency in the pom.xml file.

Q44. Is it feasible to disable the spring boot application's default web server?
Yes, it is possible to disable the default web server in the spring boot because there are other web servers available.

Q45. Differentiate between Restful web service @RestController and @Controller in Spring Boot?
The @RestController Annotation:

@RestController is used for creating RESTful API web services.
When used at the class level, @RestController enables the class file to respond to client requests.
@RestController and @Controller in Spring Boot

The @Controller Annotation:

@Controller is used for traditional Spring controllers.
Also, the @Controller annotation is typically used in combination with a @RequestMapping annotation for request-handling methods
Q46. Can you tell the flow of HTTPS requests through the Spring boot app?
The flow of HTTP request through the spring boot are:

The client will send the server an HTTPS request.
The embedded web server in the Spring Boot application will take in the request.
The request is then forwarded to the DispatcherServlet, which is auto-configured by Spring Boot.
Based on the request URL and HTTP method, the DispatcherServlet transfers the request to the appropriate controller method.
Once the request has been processed, the controller method will return a response.
The response will be sent back to the DispatcherServlet.
The DispatcherServlet will convert the response into an appropriate format based on the request's Accept header.
At last, The response is sent back to the client over HTTPS.
Spring Boot Flow Architecture

Q47. Do you know about the points of disimilarities between RequestMapping and GetMapping?
1. RequestMapping

It is used at the class level and method level.

It Can be used to map any HTTP request method (GET, POST, PUT, DELETE, etc.).

It supports the consumes attribute to specify the media type of the request body.

2. GetMapping

It is used only at the method level.

It is used specifically for HTTP GET requests.

It Does not support the consumes attribute.

Q48. What are the methods available to get the list of all the beans which is in the Spring Boot application?
There are several ways to obtain a list of every bean in our spring boot application, some of them are:

1. By using the ListableBeanFactory interface.

Example:

@Autowiredprivate ListableBeanFactory beanFactory;public void displayAllBeans() {String[] allBeanNames = beanFactory.getBeanDefinitionNames();for (String beanName : allBeanNames) {System.out.println(beanName);}}
2. By using a spring actuator

Example: http://localhost:8080/actuator/beans

3. By using appContext.getBeanDefinitionNames()

Q49. Name the spring actuator endpoints in the spring boot.
Some of the spring Actuator endpoints in the spring boot are:

Shutdown
Sessions
Threaddump
Metrics
Loggers
Health
Flyway
Caches
Q50. Explain Spring Initializr.
Spring Initializr is a powerful web-based application tool that simplifies the process of setting up Spring Boot projects by generating a project with just what you need to start quickly and offering an extensible API for creating JVM-based projects. It is helpful when we are starting to build a project from scratch. Spring Initializr offers web-based application endpoints for third-party clients.

Q51. Explain the default package.
In Spring Boot, a class file that does not have any package declaration is considered to be a default package.

Q52. What do you mean by Spring security?
Spring Security is a powerful and customizable authentication and access-control framework that provides comprehensive support for both authentication and authorization. Spring Security provides comprehensive protection against attacks, which makes it an ideal choice for securing Spring-based applications.

Q53. Describe an IOC container.
The Spring IoC container is a Spring implementation using the IoC pattern paired with DI (Dependency Injection). It is a software container that offers an application environment that may be customised for the creation, initialization, caching, and management of pluggable objects, also known as beans. The application's components are managed by the container using Dependency Injection (DI). There are two types of IoC containers in Spring: BeanFactory and ApplicationContext.

Q54. Do you know about microservices in Spring Boot?
A modern approach to software development is known as "microservices" in spring boot that entails the delivery of application code in manageable chunks, each free of other components with non-functional features. Microservices are made up of a number of tiny, autonomous services that communicate with one another with minimal configuration. A well-liked framework for creating microservices applications is Spring Boot with minimal configuration.

Q55. Give an example for the @PUT rest endpoint and @DELETE rest endpoint.
@PUT rest endpoint

@PutMapping("/users/{id}")public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) throws ResourceNotFoundException {User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + userId));user.setEmail(userDetails.getEmail());user.setLastName(userDetails.getLastName());user.setFirstName(userDetails.getFirstName());final User updatedUser = userRepository.save(user);return ResponseEntity.ok(updatedUser);}
@DELETE rest endpoint

@DeleteMapping("/users/{id}")public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + userId));userRepository.delete(user);Map<String, Boolean> response = new HashMap<>();response.put("deleted", Boolean.TRUE);return response;}
Q56. How can logging levels be used with Spring Boot?
Some ways to use log level in spring boot are:

1. By using Spring Boot Apache Commons Logging for all internal logging:

Spring Boot's default configurations provide support for the use of the programming language Java Util Logging, Log4j2, and Logback, and using these, we can configure the console logging as well as file logging. We can specify the log file path and name using the logging.path and logging.file properties, respectively.

2. By using Spring Boot to define logging groups or log level or internal logging in our Spring Environment:

For example, adding logging.group.tomcat=org.apache.catalina, org.apache.coyote, org.apache.tomcat in the tomcat group.

Q57. Explain the term Spring Cloud.
Spring Cloud framework offers tools and services in order to make it simple for developers to create and deploy distributed systems that implement common patterns. The base of Spring Cloud is Spring Boot, which offers a wide range of functionality to assist you in managing and monitoring your application.

Q58. Explain @componentScan in the class file.
We use the @ComponentScan annotation to specify the base packages that Spring should scan for components or beans that are annotated with stereotype annotations. By default, Spring scans the current package and all of its sub-base packages. We can specify the packages to be scanned by using the @ComponentScan annotation along with the @Configuration annotation and providing the basePackages argument. It specifies base packages by using the basePackages attributes.

Q59. Name the key components of the spring boot.
Spring boot has the following key components:

Spring Boot Starters
Spring Boot AutoConfigurator
Spring Boot CLI
Spring Boot Actuator
These key components help to simplify the development of Spring applications by reducing the number of manual configurations required and providing production-grade features to monitor and manage the application.

Q60. Can you explain command-line properties?
Command-line properties are a way to pass configuration values to a Spring Boot application when it starts up. Command-line arguments are transformed into properties by Spring Boot and added as environment variables. Command-line properties are given priority over all other sources of property information.

Q61. Will you be able to run a Spring boot project by using spring boot CLI?
To execute the Spring Boot project using Spring Boot CLI, we can follow these steps:

Install the Spring Boot CLI.
Run the CLI.
Initialize a new project.
After initializing the new project, run the Spring Boot application by using any of the following commands: java -jar command: "java -jar target/myapplication-0.0.1-SNAPSHOT.jar",
Using Maven command: "mvn spring-boot:run".
Using Gradle command: "gradle bootRun".
Q62. What is the minimum version of JAVA that you will need to run the Spring Boot?
The minimum version of JAVA needed to run the Spring Boot is JAVA 8.

Q63. Tell me how JPA and Hibernate vary from one another.
JPA

JPA stands for Java Persistence API.
JPA is only a specification, which means that there is no implementation.
JPA is just an interface that must be followed.
The query language of JPA is Java Persistence query language.
Hibernate

Hibernate is an ORM tool used for saving the state of the Java object in the database.
It is an implementation of the JPA specification.
Hibernate is a framework that supports JPA.
Hibernate supports a Java Virtual Machine (JVM).
The query language of Hibernate is Hibernate Query language.
Q64. Name the key HTTP method that can be used in Spring Boot rest services.
The key HTTP method that can be used in spring boot services are:

GET: With this key HTTP method, it reads a resource.
PUT: We can update an existing resource with PUT key HTTP method.
POST: With this key HTTP method, it helps in the creation of a new resource.
DELETE: The DELETE method deletes the resource.
PATCH: It updates a part of an existing resource.
Q65. What should be the way to implement command-line applications in Spring Boot?
To use Spring Boot for command-line applications, we need to create a new Spring Boot project or use an existing one and then update the pom.xml file of the project and build the Spring Boot app into a single executable Jar dependencies file with Maven, and run the Spring Boot app from the command line application.

Q66. What do you mean by debug logging?
Debug logging is a feature that stores thorough details about each stage of a process in a log file which allows for further analysis and problem-solving. Debug logging can be enabled by adjusting an application's logging preferences or by specifying particular environment variables.

Due to the advent and popularity of cloud computing, the focus is on the core business, where a delegation of logistics is handled by expert service providers. Several service tools enable the developer to save cost and time. Hence, the microservices have been developed in an Agile manner. These microservices need to be lightweight and converging. This is where Spring Boot is useful. It allows applications to focus entirely on the business while Spring Boot handles the rest of the operations. Spring Boot includes default files for every operation and allows you to choose what you want to configure for the application. 

We hope the above article helped you grasp the essential concepts of Spring Boot. For more interview questions on the same topics or other topics, stay tuned to Unstop.

Suggested Reads:

Trending AWS Interview Questions That You Must Prepare!
Best Collection Of CSS Interview Questions With Answers (2022)
50 Software Testing Interview Questions And Answers You Should Know!
List Of 50 Core Java Interview Questions With Answers (2022)
Edited by
Shreeya Thakur
As a biotechnologist-turned-writer, I love turning complex ideas into meaningful stories that inform and inspire. Outside of writing, I enjoy cooking, reading, and travelling, each giving me fresh perspectives and inspiration for my work.

Tags:
Interview Preparation
Interview Questions
Comments
Add comment
Login to continue reading
And access exclusive content, personalized recommendations, and career-boosting opportunities.

Email Icon
Login with Email
Don't have an account? Sign up
Google news icon
Never miss an
UpdateArrows Icon
Featured Opportunities
Asian Paints Alchemy 2026
Asian Paints Alchemy 2026
Unstop Campus Champions
Unstop Campus Champions
Top-Rated Practice by Students
prep-for-placement
30-days-dsa
interview-toolkit
Weekly Coding Challenge
Weekly Case Challenge
back
back
Subscribe Icon
Subscribe
to our newsletter

email id
Subscribe

Like

Bookmark Icon
ShareShare Icon
twitter icon
WhatsApp icon
LinkedIn Icon
Mail Icon
Copy url
Blogs you need to hog!
This Is My First Hackathon, How Should I Prepare? (Tips & Hackathon Questions Inside)
This Is My First Hackathon, How Should I Prepare? (Tips & Hackathon Questions Inside)
D2C Admin
Arrows right Icon
10 Best C++ IDEs That Developers Mention The Most!
10 Best C++ IDEs That Developers Mention The Most!
D2C Admin
Arrows right Icon
Advantages and Disadvantages of Cloud Computing That You Should Know!
Advantages and Disadvantages of Cloud Computing That You Should Know!
D2C Admin
Arrows right Icon
Is IoT Valuable? Advantages And Disadvantages Of IoT Explained
Is IoT Valuable? Advantages And Disadvantages Of IoT Explained
Shivangi Vatsal
Arrows right Icon
Powered ByUnstop Logo
Best Viewed in Chrome, Opera, Mozilla, EDGE & Safari. Copyright © 2026 FLIVE Consulting Pvt Ltd - All rights reserved.


1 Для чего нужен Component Scan?
Если вы понимаете как работает Component Scan, то вы понимаете Spring

Первый шаг для описания Spring Beans это добавление аннотации — @Component, или @Service, или @Repository.

Однако, Spring ничего не знает об этих бинах, если он не знает где искать их. То, что скажет Spring где искать эти бины и называется Component Scan. В @ComponentScan вы указываете пакеты, которые должны сканироваться.


Spring будет искать бины не только в пакетах для сканирования, но и в их подпакетах.

2 Как вы добавите Component Scan в Spring Boot?
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
@SpringBootApplication определяет автоматическое сканирование пакета, где находится класс Application


Всё будет в порядке, ваш код целиком находится в указанном пакете или его подпакетах.

Однако, если необходимый вам компонент находится в другом пакете, вы должны использовать дополнительно аннотацию @ComponentScan, где перечислите все дополнительные пакеты для сканирования

3 В чём отличие между @Component и @ComponentScan?
@Component и @ComponentScan предназначены для разных целей

@Component помечает класс в качестве кандидата для создания Spring бина.
@ComponentScan указывает где Spring искать классы, помеченные аннотацией @Component или его производной

4 Для чего используется аннотация @Bean?
В классах конфигурации Spring, @Bean используется для определения компонентов с кастомной логикой.

5 В чём разница между @Bean и @Component?
@Bean используется в конфигурационных классах Spring. Он используется для непосредственного создания бина.

@Component используется со всеми классами, которыми должен управлять Spring. Когда Spring видит класс с @Component, Spring определяет этот класс как кандидата для создания bean.

6 В чём разница между @Component, @Service и @Repository аннотациями?
Все они определяют бины Spring. Однако между ними всё же есть разница.

@Component — универсальный компонент
@Repository — компонент, который предназначен для хранения, извлечения и поиска. Как правило, используется для работы с базами данных.
@Service — фасад для некоторой бизнес логики

Пользовательские аннотации, производные от @Component, могут добавлять специальную логику в бинах.

Например, бины, получившиеся при помощи @Repository, дополнительно имеют обработку для JDBC Exception

7 Можем ли мы использовать @Component вместо @Service для бизнес логики?
Да. конечно.

Если @Component является универсальным стереотипом для любого Spring компонента, то @Service в настоящее время является его псевдонимом. Однако, в официальной документации Spring рекомендуется использовать именно @Service для бизнес логики. Вполне возможно, что в будущих версиях фреймворка, для данного стереотипа добавится дополнительная семантика, и его бины станут обладать дополнительной логикой.

8 В чем различие между web.xml и the Spring Context - servlet.xml?
web.xml — Метаданные и конфигурация любого веб-приложения, совместимого с Java EE. Java EE стандарт для веб-приложений.
servlet.xml — файл конфигурации, специфичный для Spring Framework.

9 Что предпочитаете использовать для конфигурации Spring - xml или аннотирование?
Предпочитаю аннотации, если кодовая база хорошо описывается такими элементами, как @Service, @Component, @Autowired

Однако когда дело доходит до конфигурации, у меня нет каких-либо предпочтений. Я бы оставил этот вопрос команде.

10 Можем ли мы применить @Autowired с не сеттерами и не конструкторами методами?
Да, конечно.

@Autowired может использоваться вместе с конструкторами, сеттерами или любым другими методами. Когда Spring находит @Autowired на методе, Spring автоматически вызовет этот метод, после создания экземпляра бина. В качестве аргументов, будут подобраны подходящие объекты из контекста Spring.

11 В чем разница между Сквозной Функциональностью
(Cross Cutting Concerns) и АОП (аспектно оринтированное программирование)?
Сквозная Функциональность — функциональность, которая может потребоваться вам на нескольких различных уровнях — логирование, управление производительностью, безопасность и т.д.
АОП — один из подходов к реализации данной проблемы

12 В чем разница между IOC (Inversion of Control) и Application Context?
IOC — инверсия управления. Вместо ручного внедрения зависимостей, фреймворк забирает ответственность за это.
ApplicationContext — реализация IOC спрингом.

Bean Factory — это базовая версия IOC контейнера

Application Context также включает дополнительные функции, которые обычно нужны для разработки корпоративных приложений

13 В чем разница между classPathXmlApplicationContext и annotationConfigApplicationContext?
classPathXmlApplicationContext — если вы хотите инициализировать контекст Spring при помощи xml
annotationConfigApplicationContext — если вы хотите инициализировать контекст Spring при помощи конфигурационного класса java

14 Почему возвращаемое значение при применении аспекта @Around может потеряться? Назовите причины.
Метод, помеченный аннотацией @Around, должен возвращать значение, которое он (метод) получил из joinpoint.proceed()

@Around("trackTimeAnnotation()")
public Object around(ProceedingJoinPoint joinPoint) throws Throwable{
    long startTime = System.currentTimeMillis();
    Object retVal = joinPoint.proceed();
    long timeTaken = System.currentTimeMillis() - startTime;
    logger.info("Time taken by {} is equal to {}",joinPoint, timeTaken);
    return retVal;
}
15 Как вы решаете какой бин инжектить, если у вас несколько подходящих бинов. Расскажите о @Primary и @Qualifier?
Если есть бин, который вы предпочитаете большую часть времени по сравнению с другими, то используйте @Primary, и используйте @Qualifier для нестандартных сценариев.

Если все бины имеют одинаковый приоритет, мы всегда будем использовать @Qualifier

Если бин надо выбрать во время исполнения программы, то эти аннотации вам не подойдут. Вам надо в конфигурационном классе создать метод, пометить его аннотацией @Bean, и вернуть им требуемый бин.

16 Что нового в Spring Framework 5.0?
На мой взгляд это Functional Web Framework, Kotlin и и поддержка реактивного программирования.

17 Сравните Application Context, IOC Container, vs Web Container и EJB Container. Нужен ли Web Container для запуска Spring Boot приложения?
Web Container и EJB Containers являются частью приложения/веб-сервера, таких как Tomcat, Websphere, Weblogic. Они добавляют свою дополнительную функциональность к ним. Java EE определяет контракт для веб-приложений, эти контейнеры являются реализацией этих контрактов.

Spring контейнер может являться частью любого приложения, которое вы делаете на java. Spring может работать внутри веб-контейнера, ejb контейнера или даже без них.

18 Как мы можем выбрать подходящий бин при помощи application.properties?
Рассмотрим пример:

interface GreetingService {
    public String sayHello();
}
И два компонента

@Component(value="real")
class RealGreetingService implements GreetingService {
    public String sayHello() {
        return "I'm real";
    }
}

@Component(value="mock")
class MockGreetingService implements GreetingService {
    public String sayHello() {
        return "I'm mock";
    }
}
Тогда в application.properties добавим свойство
application.greeting: real

Воспользуемся данным решением:

@RestController
public class WelcomeController {
    @Resource(name="${application.greeting}")
    private GreeterService service1;
}
19 Какая минимальная версия Java поддерживается в Spring Boot 2 и Spring 5?
Spring 5.0 и Spring Boot 2.0 поддерживают Java 8 и более поздней версии.

20 В чём разница между @Controller и @RestController?
@RestController = @Controller + @ResponseBody

@RestController превращает помеченный класс в Spring-бин. Этот бин для конвертации входящих/исходящих данных использует Jackson message converter. Как правило целевые данные представлены в json или xml.

21 Почему иногда мы используем @ResponseBody, а иногда ResponseEntity?
ResponseEntity необходим, только если мы хотим кастомизировать ответ, добавив к нему статус ответа. Во всех остальных случаях будем использовать @ResponseBody.

@GetMapping(value=”/resource”) 
@ResponseBody 
public Resource sayHello() { return resource; }

@PostMapping(value=”/resource”) 
public ResponseEntity createResource() { 
    ….
return ResponseEntity.created(resource).build(); 
}
Стандартные HTTP коды статусов ответов, которые можно использовать.
200 — SUCCESS
201 — CREATED
404 — RESOURCE NOT FOUND
400 — BAD REQUEST
401 — UNAUTHORIZED
500 — SERVER ERROR

Для @ResponseBody единственные состояния статуса это SUCCESS(500), если всё ок и SERVER ERROR(500), если произошла какая-либо ошибка.

Допустим мы что-то создали и хотим отправить статус CREATED(201). В этом случае мы используем ResponseEntity.

22 В чем разница между Filters, Listeners and Interceptors?
Концептуально всё просто, фильтры сервлетов могут перехватывать только HTTPServlets. Listeners могут перехватывать специфические события. Как перехватить события которые относятся ни к тем не другим?

Фильтры и перехватчики делают по сути одно и тоже: они перехватывают какое-то событие, и делают что-то до или после.

Java EE использует термин Filter, Spring называет их Interceptors.

Именно здесь AOP используется в полную силу, благодаря чему возможно перехватывание вызовов любых объектов

23 В чем разница между ModelMap и ModelAndView?
Model — интерфейс, ModelMap его реализация..

ModelAndView является контейнером для пары, как ModelMap и View.

Обычно я люблю использовать ModelAndView. Однако есть так же способ когда мы задаем необходимые атрибуты в ModelMap, и возвращаем название View обычной строкой из метода контроллера.

24 В чем разница между model.put() и model.addAttribute()?
Метод addAttribute отделяет нас от работы с базовой структурой hashmap. По сути addAttribute это обертка над put, где делается дополнительная проверка на null. Метод addAttribute в отличии от put возвращает modelmap.
model.addAttribute(“attribute1”,”value1”).addAttribute(“attribute2”,”value2”);

25 Что можете рассказать про Form Binding?
Нам это может понадобиться, если мы, например, захотим взять некоторое значение с HTML страницы и сохранить его в БД. Для этого нам надо это значение переместить в контроллер Спринга.

Если мы будем использовать Spring MVC form tags, Spring автоматически свяжет переменные на HTML странице с Бином Спринга.

Если мне придется с этим работать, я обязательно буду смотреть официальную документацию Spring MVC Form Tags.

26 Почему мы используем Hibernate Validator?
Hibernate Validator никак не связан с БД. Это просто библиотека для валидации.

Hibernate Validator версии 5.x является эталонной реализацией Bean Validation 1.1

Так же если взглянуть по адресу http://beanvalidation.org/2.0, то Hibernate Validator является единственным, который сертифицирован.

27 Где должны располагаться статические (css, js, html) ресурсы в Spring MVC приложении?
Расположение статических ресурсов можно настроить. В документации Spring Boot рекомендуется использовать /static, или /public, или /resources, или /META-INF/resources

28 Почему для конфиденциальных данных рекомендуется использовать POST, а не GET запросы?
В случае GET запроса передаваемые параметры являются частью url, и все маршрутизаторы, через которые пройдет наш GET запрос, смогут их прочитать.

В случае POST запроса передаваемые параметры являются частью тела запроса. При использовании HTTPs, тело запроса шифруется. Следовательно, использование POST запросов является более безопасным

29 Можно ли передать в запросе один и тот же параметр несколько раз?
Пример:
http://localhost:8080/login?name=Ranga&name=Ravi&name=Sathish
Да, можно принять все значения, используя массив в методе контроллера

public String method(@RequestParam(value="name") String[] names){   
}
Хочу поблагодарить пользователя хабра jd2050, за помощь с переводом.

Автор: PqDnИсточник
Версия для печати Версия для печати
Поделиться…
 * Ваше имя*

 Ваш e-mail (не отображается в списке сообщений)

* - обязательные к заполнению поля


Главная   |  Архив новостей  |   Android  |   Google  |   Apple  |   Microsoft  |   Информационная безопасность  |   Веб – разработка
Публикации RSS  |  Комментарии RSS
© 2010-2026 PVSM.RU
Все права на материалы принадлежат их авторам.
Основными материалами сайта являются архивные копии материалов по ИТ тематике Рунета, взятые из открытых и общедоступных источников.
https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
Поделитесь с друзьями
ВКонтакте
Одноклассники
Twitter
Мой Мир
LiveJournal
Google Plus
Яндекс

Find Java Spring Boot experts easily with TestGorilla
Try TestGorilla for free

Finding a skilled developer with Java Spring Boot expertise can be hard – and before you hire them, you need to ensure they possess all the other skills required for the role.

A handy method to evaluate your applicants’ Java Spring Boot skills, including soft skills, is to use skills tests – and conduct interviews with the right Java Spring Boot interview questions.

At TestGorilla, we’re aware that coming up with the right interview questions for developers can be difficult, especially if you have no coding skills yourself. 

So, if you need some fresh ideas to put your list together, this article is for you: In it, you’ll find a comprehensive list of 53 Java Spring Boot interview questions – along with sample answers to some of them to help you evaluate candidates’ skills and knowledge.

Let’s get to the list.

Table of contents
21 Java Spring Boot interview questions to ask junior developers
5 Java Spring Boot interview questions and answers to assess junior developers
21 Java Spring Boot interview questions to ask senior developers
5 Java Spring Boot interview questions and answers to assess senior developers
11 situational Java Spring Boot interview questions to ask applicants
5 situational Java Spring Boot interview questions and answers
For what kind of roles can you use Java Spring Boot interview questions?
During which stage of the recruitment process should you use these Java Spring Boot interview questions?
Why use skill testing to assess developers’ skills?
Hire top developers using skill tests and Java Spring Boot interview questions
21 Java Spring Boot interview questions to ask junior developers
Ask junior developers these 21 Java Spring Boot interview questions to determine if their knowledge matches the requirements of your role.

21 Java Spring Boot interview questions to ask junior developers
Explain what Java Spring Boot is.

Name five Java Spring Boot features.

Name four advantages of using Java Spring Boot.

Outline four critical Java Spring Boot components.

Which skills do you need to use Java Spring Boot?

Which soft skills do you think are needed to use Java Spring Boot?

What are you doing to improve your skills?

Explain what makes Java Spring Boot different from Spring.

Explain how Java Spring Boot works.

Explain what the annotation @SpringBootApplication does.

Explain what the @ComponentScan annotation does and how to use it.

Explain how to start a Java Spring Boot application.

Explain what starter dependencies are.

Explain what the Spring initializer is.

Explain what the Java Spring Boot CLI is.

Name one key advantage of using the Java Spring Boot CLI.

Name seven frequently-used Java Spring Boot CLI commands.

What are the various phases of the RAD model?

Explain what the RAD model is.

Explain what DevTools does in Spring Boot.

Explain what spring-boot-starter-parent is.

5 Java Spring Boot interview questions and answers to assess junior developers
Here are the answers to five of the Java Spring Boot interview questions for junior developers. Use to assess your applicants’ skills. 

1. Which skills do you need to use Java Spring Boot?
Java, object-oriented programming, and Java Spring Boot skills are essential for using this framework – but are your applicants able to explain why they’re so important? How have they honed these skills? Can they show that their skills are at the required level?

2. Which soft skills do you think are needed to use Java Spring Boot?
Applicants should be aware of the many soft skills Java Spring Boot developers need, including critical-thinking, problem-solving, and teamwork skills.

Have your candidates perfected these skills, and can they explain why these skills are vital when working with Java Spring Boot? 

3. What are you doing to improve your skills?
Your candidates may be trying to develop technical abilities, like Java, or soft skills, like their problem-solving abilities, by getting exposure to new challenges. 

Whichever skill they lack, make sure they are putting in the effort to develop it.

4. Explain what the Java Spring Boot CLI is.
Do your applicants know that the Java Spring Boot CLI is a command-line tool? Are they aware that developers can use the Java Spring Boot CLI to develop Spring applications with syntaxes that are similar to Java and reduce the amount of boilerplate code?

5. Explain what the @ComponentScan annotation does and how to use it.
Applicants should know that developers scan all beans and declarations of packages with the @ComponentScan annotation. Your candidates should be aware that to use the @ComponentScan annotation, they must add it to a class file. It will then scan the components. 

The best insights on HR and recruitment, delivered to your inbox.
Biweekly updates. No spam. Unsubscribe any time.

Email*
21 Java Spring Boot interview questions to ask senior developers
Ask senior developers some of these 21 Java Spring Boot interview questions to determine if their knowledge is sufficient for your open role.

21 Java Spring Boot interview questions to ask senior developers
Explain what @EnableAutoConfiguration does.

Explain what Java Spring Boot dependency management means.

Explain what the server.port does in application.properties.

Explain what developers use @RestController for.

Describe the differences between @Controller and @RestController in Java Spring Boot.

Explain what RequestMapping does.

Explain what GetMapping does.

Explain the key differences between RequestMapping and GetMapping.

Explain what Profiles does in Java Spring Boot.

Explain what the Java Spring actuator is.

Name two advantages of the Spring actuator.

Outline actuator-provided endpoints for Spring Boot application monitoring.

Explain what dependency injection is.

Explain what IOC containers are in Java Spring Boot.

Explain what the tag does in Java Spring Boot.

Explain what an aspect is.

Explain what a join point is in Java Spring Boot.

Explain what Spring MVC is.

Name three advantages of using microservices.

What is constructor-based dependency injection?

What is setter-based dependency injection?

5 Java Spring Boot interview questions and answers to assess senior developers
Here are the answers to five of the Java Spring Boot interview questions for senior developers. Use them to assess your applicants’ knowledge.

1. Explain the key differences between RequestMapping and GetMapping.
Can your interviewees explain that developers can use RequestMapping with particular request methods such as GET, PUT, and POST with a method attribute?

On the other hand, GetMapping is a type of RequestMapping extension that developers use to enhance the clarity of the request.

2. Explain what the Java Spring actuator is.
Are your developers aware that the Java Spring actuator helps developers to manage applications and monitor them when pushing them to production? Can they explain the various features of the Java Spring actuator, including the amount of CUP usage and auditing methods?

3. Name two advantages of the Spring actuator.
Advanced applicants should recognize that the features of the Java Spring Boot actuator, such as the auditing and metric gathering features, are useful for monitoring an application. They should also know that these features are applied automatically, giving developers less work.

4. Explain what IOC containers are in Java Spring Boot.
Senior-level developers should know that IOC containers enable them to implement a dependency injection into a class automatically. IOC containers are frameworks that manage object creation.

5. Explain what Profiles does in Java Spring Boot.
Can your candidates explain that they can use Profiles to separate different configuration parts of the Java Spring Boot application’s environments? Do they know that using Profiles means developers can find the separate parts, in particular, separated environments?

11 situational Java Spring Boot interview questions to ask applicants
Ask your applicants some of these 11 situational Java Spring Boot interview questions to determine whether they can tackle challenging situations correctly. 

11 situational Java Spring Boot interview questions to ask applicants
How would you override an embedded tomcat server in Java Spring Boot?

Explain how you would disable a default web server in Java Spring Boot.

Explain how you would disable the auto-configuration class. 

Which method would you use to enable the actuator in a Spring Boot application?

Which method would you use to retrieve a list of all beans in a Spring Boot application?

Which method would you use to check the environment properties in Spring Boot apps?

Which method would you use to enable the debugging log?

Which method would you use to define the properties of a Spring Boot application?

Which command would you use to run an executable jar file in Spring Boot?

Which method would you use to run an application on a custom port in Spring Boot?

How would you set active profiles in Java Spring Boot?

5 situational Java Spring Boot interview questions and answers
Here are the sample answers to five of the situational Java Spring Boot interview questions to help you determine if your candidates are proficient with Java Spring Boot.

1. Which method would you use to enable the debugging log?
Applicants may explain that there are three methods developers can use to enable the debugging log in Java Spring Boot. They may: 

Set the root logger’s logging level to debug in the configuration file’s supplied logging

Set the property to logging.level.root=debug in the application.property file

Use –debug switch when they start the application

2. Which method would you use to retrieve a list of all beans in a Spring Boot application?
Do your applicants understand that retrieving a list of all beans in a Spring Boot application is as simple as using the “/Beans” actuator? Applicants may distinguish this actuator from the @ComponentScan annotation, which, instead of retrieving the list of beans, scans them.

3. Which method would you use to enable the actuator in a Spring Boot application?
Can your applicants explain that to enable the actuator in a Spring Boot application, they must use a certain dependency in pom.xml? Applicants should know that the required dependency is spring-boot-starter-actuator, which developers can use in the following code:

org.projectXYZ.boot

<>artifactID>spring-boot-starter-actuator

4. Which method would you use to define the properties of a Spring Boot application?
Applicants should know that they can define the properties of a Spring Boot application by creating an application.properties file. Can they explain that they could manually create the file or create it with Spring Initializer?

Your candidates should also know that they don’t need to follow a particular special configuration when instructing Java Spring Boot to load the file.

5. How would you set active profiles in Java Spring Boot?
Can your developers explain that to set active profiles, there are two options to choose from?

Candidates should know that these two options are:

-Dspring.profiles.active=prod

Spring.profiles.active=prod

Your applicants should know that developers must use the first syntax in arguments and the second syntax in the application.properties file.

For what kind of roles can you use Java Spring Boot interview questions?
You can use the Java Spring Boot interview questions in this article to evaluate developers for any role requiring Java Spring Boot knowledge and skill.

For example, you can use these Java Spring Boot interview questions to hire senior full-stack developers, Java software engineers, backend Java developers, senior backend developers, technical team leads, and microservice professionals who use Java Spring Boot.

During which stage of the recruitment process should you use these Java Spring Boot interview questions?
If you’re wondering at what stage to use the Java Spring Boot interview questions above, remember that skill assessments should come first.

You should use Java Spring Boot interview questions after applicants complete an assessment featuring a Spring test.

Why administer skills tests first and then conduct interviews, you might wonder? 

This approach will reduce your hiring time and help you identify the most skilled developers in your talent pool. 

If you’re looking for a reliable, objective method to shortlist your best applicants for an interview, skill testing is the answer: It enables you to evaluate applicants’ skills accurately and with no bias, helps you save lots of time, and reduces the effort and stress of hiring. 

That’s why we recommend using skills assessments right after sourcing your candidates.


Home » Вопросы и ответы для собеседования по Spring
Вопросы и ответы для собеседования по SpringВопросы и ответы для собеседования по Spring 
Если ты когда-нибудь сталкивался с собеседованиями по Java и Spring, то знаешь, что вопросы там могут быть как из разряда “а что такое Dependency Injection?”, так и “почему твой биновый синглтон вдруг стал прототипом?”. Эта статья — не очередная подборка банальных вопросов, а твой гайд по тому, как реально разобраться в Spring, чтобы не только пройти собеседование, но и не облажаться на проде. Разберём, как работает Spring под капотом, как быстро и без боли всё развернуть, и какие грабли тебя поджидают. Плюс — реальные кейсы, схемы, команды, лайфхаки и даже немного статистики. В конце — рекомендации, как это всё автоматизировать и зачем оно тебе, если ты не просто кодер, а ещё и серверочиститель, девопс и вообще человек, который любит, чтобы всё было под контролем.

Как это работает? — Spring без магии
Spring — это не просто “фреймворк для Java”, а целая экосистема, которая позволяет писать масштабируемые, поддерживаемые и (по возможности) не слишком больные приложения. Основная фишка — Inversion of Control (IoC) и Dependency Injection (DI). То есть ты не создаёшь объекты руками, а отдаёшь это на откуп контейнеру Spring. Он сам решает, когда и что инстанцировать, как связывать компоненты, и как их потом убивать.

IoC Container — сердце Spring. Это то место, где живут все твои бины (объекты, управляемые Spring).
DI (Dependency Injection) — внедрение зависимостей. Ты просто говоришь “мне нужен такой-то сервис”, а Spring сам его подсовывает.
Aspect-Oriented Programming (AOP) — если хочется логировать, кэшировать или делать что-то ещё без копипасты по всему коду.
Spring Boot — магия автоконфигурации. Позволяет стартовать приложение одной командой, без танцев с бубном.
Всё это работает благодаря рефлексии, прокси, и куче аннотаций. Например, чтобы создать бин, достаточно повесить @Component или @Service на класс. А чтобы внедрить зависимость — @Autowired или @Inject на поле/конструктор/сеттер.

Как быстро и просто всё настроить?
Если ты не хочешь тратить вечность на конфиги и XML, Spring Boot — твой друг. Он позволяет стартовать приложение буквально за пару минут. Вот минимальный набор шагов:

Сгенерируй проект на start.spring.io (Spring Initializr).
Добавь нужные зависимости (например, Web, JPA, Security, Actuator).
Собери проект (Maven или Gradle).
Запусти java -jar myapp.jar — и всё, приложение работает!
Для тех, кто любит руками:


# Maven
mvn spring-boot:run

# Gradle
./gradlew bootRun

# Или собрать jar и запустить
mvn package
java -jar target/myapp.jar

Конфиги можно держать в application.properties или application.yml. Всё, что не нравится — можно переопределить через переменные окружения или параметры запуска.

Примеры, схемы, практические советы
Давай разберём пару кейсов — как делать надо и как не надо.

Кейс	Плохой пример	Хороший пример	Комментарий
Внедрение зависимостей	
@Service
public class UserService {
private UserRepository repo = new UserRepository();
}

@Service
public class UserService {
private final UserRepository repo;
@Autowired
public UserService(UserRepository repo) {
this.repo = repo;
}
}
Не создавай объекты руками — пусть Spring сам их внедряет.
Конфигурация	
@Bean
public DataSource ds() {
return new DataSource("localhost", "root", "123");
}

@Bean
@ConfigurationProperties("app.datasource")
public DataSource ds() {
return new DataSource();
}
Не хардкодь параметры — используй конфиги и переменные окружения.
Логирование	
System.out.println("User created");

private static final Logger log = LoggerFactory.getLogger(UserService.class);
log.info("User created");
Используй нормальные логгеры, а не println.
Практические советы:

Используй @ConfigurationProperties для конфигов — это удобно и безопасно.
Включи Spring Actuator — получишь метрики, health-check и кучу инфы о приложении.
Для тестов — @SpringBootTest и @MockBean — must have.
Не забывай про профили (@Profile) — удобно для dev/prod/staging.
Если нужно быстро поднять БД — используй Testcontainers или H2.
Команды и утилиты
Вот список команд и тулзов, которые реально ускоряют работу:


# Генерация проекта
curl https://start.spring.io/starter.zip -d dependencies=web,data-jpa -o demo.zip

# Запуск приложения
mvn spring-boot:run
./gradlew bootRun

# Сборка jar
mvn package
java -jar target/app.jar

# Просмотр метрик (если включён actuator)
curl http://localhost:8080/actuator/health
curl http://localhost:8080/actuator/metrics

# Переменные окружения для конфигов
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/mydb
export SPRING_PROFILES_ACTIVE=prod

Похожие решения и утилиты:

Micronaut — альтернатива Spring Boot, быстрее стартует, но экосистема меньше.
Quarkus — для микросервисов и GraalVM.
IntelliJ IDEA — лучший IDE для Spring, автогенерация кода, дебаг, профилирование.
Статистика и сравнение
Фреймворк	Время старта (ms)	Потребление памяти	Экосистема	Документация
Spring Boot	~1500-3000	Среднее	Огромная	Отличная
Micronaut	~500-800	Меньше	Меньше	Хорошая
Quarkus	~400-700	Меньше	Средняя	Хорошая
Spring выигрывает за счёт зрелости и количества готовых решений. Если тебе нужно что-то нестандартное — почти наверняка найдёшь библиотеку или пример на StackOverflow. Но если важна скорость старта (например, для serverless), смотри в сторону Micronaut или Quarkus.

Интересные факты и нестандартные способы использования
Spring можно запускать не только как веб-приложение, но и как CLI-утилиту, batch-процесс или даже в embedded-режиме для тестов.
С помощью Spring Cloud можно строить целые облачные платформы — с балансировкой, конфигами, сервис-дискавери.
Spring Boot Actuator позволяет не только мониторить приложение, но и управлять им на лету (например, менять уровень логирования через HTTP).
Можно писать свои стартеры — чтобы быстро подключать свои библиотеки и автоконфигурировать их.
Spring поддерживает Kotlin и даже Groovy — если хочется писать лаконично.
Автоматизация, скрипты и новые возможности
Spring отлично ложится на автоматизацию. Например:

Можно деплоить приложения через CI/CD (Jenkins, GitLab CI, GitHub Actions) — просто собираешь jar и выкатываешь на сервер.
С помощью Docker можно упаковать Spring Boot в контейнер и запускать где угодно.
Spring поддерживает Kubernetes — можно делать rolling update, автоскейлинг, health-check прямо из коробки.
Для мониторинга — интеграция с Prometheus и Grafana.
Можно писать скрипты для миграций (например, с Flyway или Liquibase), чтобы не держать всё в голове.
Пример автоматизации деплоя:


# Dockerfile для Spring Boot
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]


# Пример скрипта деплоя
scp target/app.jar user@server:/opt/app/
ssh user@server 'systemctl restart myapp'

Вывод — где и зачем использовать Spring
Spring — это не просто “ещё один фреймворк”, а реально мощный инструмент для тех, кто хочет быстро поднимать надёжные сервисы, не тратить время на велосипедостроение и быть уверенным, что всё будет работать и через год, и через пять. Если ты занимаешься настройкой серверов, автоматизацией, деплоем, мониторингом — Spring даст тебе всё, чтобы не только писать код, но и управлять инфраструктурой. Плюс — огромное комьюнити, куча готовых решений и документации.

Для быстрого старта — используй Spring Boot и Initializr.
Для автоматизации — Docker, CI/CD, Kubernetes, Actuator.
Для мониторинга — Prometheus, Grafana, Spring Actuator.
Для гибкости — профили, переменные окружения, кастомные стартеры.
Если нужен VPS или выделенный сервер для своих экспериментов и продакшена — VPS или выделенный сервер — бери, настраивай, тестируй Spring сколько влезет. А если что-то не работает — гугли, спрашивай на StackOverflow или в чатах, комьюнити реально помогает.

Spring — это про скорость, надёжность и автоматизацию. Освой его — и ты забудешь, что такое “руками настраивать всё каждый раз заново”. Удачи на собеседованиях и в проде!

В этой статье собрана информация и материалы из различных интернет-источников. Мы признаем и ценим работу всех оригинальных авторов, издателей и веб-сайтов. Несмотря на то, что были приложены все усилия для надлежащего указания исходного материала, любая непреднамеренная оплошность или упущение не являются нарушением авторских прав. Все упомянутые товарные знаки, логотипы и изображения являются собственностью соответствующих владельцев. Если вы считаете, что какой-либо контент, использованный в этой статье, нарушает ваши авторские права, немедленно свяжитесь с нами для рассмотрения и принятия оперативных мер.

Данная статья предназначена исключительно для ознакомительных и образовательных целей и не ущемляет права правообладателей. Если какой-либо материал, защищенный авторским правом, был использован без должного упоминания или с нарушением законов об авторском праве, это непреднамеренно, и мы исправим это незамедлительно после уведомления. Обратите внимание, что переиздание, распространение или воспроизведение части или всего содержимого в любой форме запрещено без письменного разрешения автора и владельца веб-сайта. Для получения разрешений или дополнительных запросов, пожалуйста, свяжитесь с нами.

More stories
Приватный VPN для России: Связка MangoHost + Amnezia
admin, 27 апреля, 2026
Приватный VPN для России: Связка MangoHost + Amnezia
Debian 13 “Trixie” вышел! Что нового для сисадминов и девопсов?
💻 операционные системы
admin, 13 августа, 2025
Debian 13 “Trixie” вышел! Что нового для си...
Proxmox VE 9.0: Большое обновление
📦 контейнеры
🖥️ виртуализация
admin, 8 августа, 2025
Proxmox VE 9.0: Большое обновление
Leave a reply
Your email address will not be published. Required fields are marked

Comment*
Name*
Email*
Website
 Сохранить моё имя, email и адрес сайта в этом браузере для последующих моих комментариев.

обсуждают
Серьга к записи
top в Linux: мониторинг процессов в реальном времени
Mikhail к записи
Nginx против Caddy в 2025: кто быстрее и лучше автоматизирует TLS
hup к записи
Запуск скриптов в фоне: nohup, wait, sleep
себастьян к записи
VPS как VPN-шлюз для команд: Как быстро и просто объединить офис и удалённых сотрудников
cyou к записи
Как быстро поднять свой VPN на VPS и стать анонимнее: Практический гайд для тех, кто не любит ждать


☁︎ облако
⚛ cms
✉️ почта
✊ права
🌐 ДНС
🏬 e-commerce и маркетинг
🐳 докер
👀 тренды
👤 whois
👤 пользователи
👥 работа в офисе
👨‍💻 devops
👨‍💻 разработка и DevOps
💰 трейдинг и крипта
💻 операционные системы
💾 бэкапы
💾 диски
💾 хранилище
📂 хранилище и бэкапы
📊 бенчмарки
📊 производительность
📊 производительность
📋 руководство
📜 скрипты
📜 текст
📤 вывод
📦 контейнеры
🔍 seo
🔍 парсинг
🔐 анонимность
🖥️ виртуализация
🖥️ система
🖧 сети
🖧 сеть
🗂️ файлы
🚀 дорвеи
🛠️ администрирование
🛡️ безопасность
🤖 ai
🤷🏽 новичкам
🧏🏻 поддержка
🧐 мониторинг
🧐 проверка
🧩 процессы
🧳 миграция
Мы принимаем
ВПС Серверы
ВПС Линукс
ВПС Виндовс
ВПС KVM
ВПС XEN
ВПС Хранилище
ВПС Форекс
ВПС Бинанс
ВПС Кракен
ВПС Кукойн
ВПС Байбит
ВПС для Zennoposter
ВПС для Прокси
Выделенные Cерверы
Сервер с 32 ГБ РАМ
Сервер с 64 ГБ РАМ
Сервер с 128 ГБ РАМ
Сервер с 256 ГБ РАМ
Сервер с 512 ГБ РАМ
Сервер с 1 ТБ РАМ
Игровой Сервер
Супермикро Сервер
Серверы Intel Xeon
DMCA игнорируемый Сервер
Серверы в Украине
Серверы в Молдове
О компании
Контакты
Партнерская программа
Локации
Способы оплаты
ЧЗВО
Связь
facebookНаша страничка в ФБ
twitterПодпишитесь на Твиттере
telegramПодпишитесь на Телеграм
emailsupport [@] arenda-server.cloud
networkLooking Glass
phone+373 78 232141
logo
©2024 arenda-server.cloud
Условия предоставления услуг
/
Политика конфиденциальности




Top Spring Interview Questions Coding N Concepts
Ashish Lahoti's Technical Blog
Home
Certifications ▾
Java ▾
JavaScript ▾
Spring Boot ▾
Puzzles ▾
Interview Q&A ▾
Others ▾
About ▾
Top Spring Interview QuestionsTop Spring Interview Questions
 Ashish Lahoti  Last Modified: October 01, 2020  Interview Questions
Q1. What is Spring Framework?
Q2. What are the Benefits of using Spring Framework?
Q3. What are the Modules available in Spring Framework?
Q4. Name Some of the Design Patterns used in the Spring Framework?
Q5. What is Inversion of Control?
Q6. What is Dependency Injection?
Q7. What are different ways of Dependency Injection in Spring Framework?
Q8. Differentiate between Constructor and Setter Based Dependency Injection?
Q9. How many types of IOC Containers are there in Spring Framework?
Q10. Differentiate between BeanFactory and ApplicationContext?
Q11. What is a Spring Bean?
Q12. Explain the Spring Bean Life Cycle?
Q13. What are different ways to configure Spring Beans?
Q14. What is XML-based Spring Configuration?
Q15. What is Java-based Spring Configuration?
Q16. What is Annotation-based Spring Configuration?
Q17. Can We Have Multiple Spring Configuration Files in One Project?
Q18. How to define Scope of a Spring Bean?
Q19. What are inner beans in Spring?
Q20. Are Singleton beans thread safe in Spring Framework?
Q21. How can you inject a Java Collection in Spring? Give example?
Q22. How to inject a java.util.Properties into a Spring Bean?
Q23. Explain Spring Bean Autowiring?
Q24. Explain different Modes of Spring Bean Autowiring?
Q25. Explain @Required annotation with example?
Q26. Explain @Autowired annotation with example?
Q27. Explain @Qualifier annotation with example?
Q28. What are Spring stereotype annotations?
Q29. What are JSR-250 annotations?
Q30. What happens when you define two beans with same id or same name ?
Q31. Explain Spring MVC Workflow?
Q32. Differentiate between @Controller and @RestController?
Q33. What Is Spring Security?
Q34. What Is Aspect-Oriented Programming?
Q35. What Are Aspect, Advice, Pointcut, and Joinpoint in Aop?
Q36. What are the different types of Advices?
Q37. What is cross-cutting concerns in Spring AOP?
Q38. What is Weaving?
Q39. What is Spring Dao?
Q40. What is Spring Jdbctemplate Class and How to Use it?
Q41. How Would You Enable Transactions in Spring and What Are Their Benefits?
Q42. What is Spring Boot?
Spring Framework is widely used by Java developers for enterprise application development and most frequent topic to be asked in interviews from Java backend developers in 2026.

I have spent quite some time to prepare a very comprehensive list of questions and answers being asked in spring framework interview. I hope, this will benefit both freshers as well as experienced developers in their interview preparation.


Q1. What is Spring Framework?
The Spring Framework is a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application.

The Spring Framework is most widely used framework across the globe which provides the best practices to use design patterns such as Singleton, Prototype, Factory, Abstract Factory, Builder, Decorator, Service Locator, and many more out of the box.


Q2. What are the Benefits of using Spring Framework?
Spring framework targets to make Java EE development easier. Here are the advantages of using it:

Lightweight: there is a slight overhead of using the framework in development
Inversion of Control (IoC): Spring container takes care of wiring dependencies of various objects, instead of creating or looking for dependent objects
Aspect Oriented Programming (AOP): Spring supports AOP to separate business logic from system services
IoC container: it manages Spring Bean life cycle and project specific configurations
MVC framework: that is used to create web applications or RESTful web services, capable of returning XML/JSON responses
Transaction management: reduces the amount of boiler-plate code in JDBC operations, file uploading, etc., either by using Java annotations or by Spring Bean XML configuration file
Exception Handling: Spring provides a convenient API for translating technology-specific exceptions into unchecked exceptions

Q3. What are the Modules available in Spring Framework?
Spring Framework Overview
Spring Framework Overview

1. Core Container
spring-bean and spring-core modules provide the fundamental parts of the framework, including the IoC and Dependency Injection features.
spring-context module builds on the solid base provided by the Core and Beans modules. It provides a way to access java object as beans and manage their life-cycle. It also supports internationalization and Java EE features such as EJB, JMX, and basic remoting.
spring-expression module provides a powerful Expression Language for querying and manipulating an object graph at runtime. It is an extension of the unified expression language (unified EL) as specified in the JSP 2.1 specification. The language supports setting and getting property values, property assignment, method invocation, accessing the content of arrays, collections and indexers, logical and arithmetic operators, named variables, and retrieval of objects by name from Spring’s IoC container.
2. AOP and Instrumentation
spring-aop module is used to decouple code for cross-cutting concerns such as logging by using method-interceptors and pointcuts.
spring-aspect module provide integration with AspectJ
spring-instrument module provides class instrumentation support and classloader implementations to be used in certain application servers.
spring-instrument-tomcat module contains Spring’s instrumentation agent for Tomcat.
3. Data Access/Integration
spring-jdbc module provides a JDBC-abstraction layer that removes the need to do tedious JDBC coding and parsing of database-vendor specific error codes.
spring-tx module supports programmatic and declarative transaction management for classes that implement special interfaces and for all your POJOs (Plain Old Java Objects).
spring-orm module provides integration layers for popular object-relational mapping APIs, including JPA and Hibernate. Using the spring-orm module you can use these O/R-mapping frameworks in combination with all of the other features Spring offers, such as the simple declarative transaction management feature mentioned previously.
spring-oxm module provides an abstraction layer that supports Object/XML mapping implementations such as JAXB, Castor, JiBX and XStream.
spring-jms module (Java Messaging Service) contains features for producing and consuming messages.
4. Web
spring-web module provides basic web-oriented integration features such as multipart file upload functionality and the initialization of the IoC container using Servlet listeners and a web-oriented application context. It also contains an HTTP client and the web-related parts of Spring’s remoting support.
spring-webmvc module (also known as the Web-Servlet module) contains Spring’s model-view-controller (MVC) and REST Web Services implementation for web applications. Spring’s MVC framework provides a clean separation between domain model code and web forms and integrates with all of the other features of the Spring Framework.
spring-websocket module provides WebSocket and SockJS infrastructure, including STOMP messaging support
5. Test
spring-test module supports the unit testing and integration testing of Spring components with JUnit or TestNG. It provides consistent loading of Spring ApplicationContexts and caching of those contexts. It also provides mock objects that you can use to test your code in isolation.

Q4. Name Some of the Design Patterns used in the Spring Framework?
Singleton Pattern: Singleton-scoped beans (default scope of spring beans)
Prototype Pattern: Prototype-scoped beans
Factory Pattern: BeanFactory, ApplicationContext
Adapter Pattern: Spring Web and Spring MVC
Proxy Pattern: Spring Aspect Oriented Programming support
Template Method Pattern: RestTemplate, JmsTemplate, JdbcTemplate, JpaTemplate, HibernateTemplate
Front Controller: Spring MVC DispatcherServlet
Data Access Object: Spring DAO support
Model View Controller: Spring MVC

Q5. What is Inversion of Control?
Inversion of Control (IoC) is a programming principle which inverts the flow of control compare to traditional control flow.

A Java application consists of objects which are dependent on each other and work together to run the application. In a traditional java application, JRE instantiate classes and dependent objects at compile time hance objects are tightly coupled with each other.

How we can use IoC in Java application context?
We can use various patterns such as Factory, Abstract Factory, Builder … to instantiate classes and dependent objects at runtime instead of compile time. You see that we have inverted the control from compile time to runtime, which is IoC.

How Spring Framework IoC works?
The Spring Framework IoC container provides the implementation of Factory, Abstract Factory, Builder, and many more patterns out of the box with best design practices used which you can integrate into your own application(s).


Q6. What is Dependency Injection?
Dependency injection is a technique in which an object receives other objects that it depends on.

Dependency Injection, is a form of IoC, is a general concept stating that you do not create your objects manually but instead describe how they should be created. An IoC container will instantiate required classes if needed.

How Spring Framework DI works?
The Spring Framework DI provides us the way to describe the object and its dependencies in the the form of XML or Java annotations. Spring IoC container takes care of wire them up together.


Q7. What are different ways of Dependency Injection in Spring Framework?
Spring framework provides three ways for dependency injection:-

1. Constructor-Based Dependency Injection
Spring use constructor to inject dependency. It is recommended to use for mandatory dependencies.

@Configuration
public class AppConfig {
    @Bean
    public Item item1() {
        return new ItemImpl1();
    }
    @Bean
    public Store store() {
        return new Store(item1());
    }
}
<bean id="item1" class="com.abc.ItemImpl1" /> 
<bean id="store" class="com.abc.Store"> 
    <constructor-arg type="ItemImpl1" index="0" name="item" ref="item1" /> 
</bean>
2. Setter-Based Dependency Injection
Spring use setter method to inject dependency. It is recommended to use for optional dependencies.

@Bean
public Store store() {
    Store store = new Store();
    store.setItem(item1());
    return store;
}
<bean id="store" class="com.abc.Store">
    <property name="item" ref="item1" />
</bean>
3. Field-Based Dependency Injection
Spring looks for fields annotated with @Autowired and inject them using reflection.

public class Store {
    @Autowired
    private Item item; 
}

Q8. Differentiate between Constructor and Setter Based Dependency Injection?
Constructor vs Setter Based Dependency Injection
Partial dependency injection is possible in setter-based, say we have 3 dependencies int, string, boolean, if we inject first two, then third boolean will be initialized with default value. Since constructor-based injection call the constructor, we need to pass all the arguments, and so partial injection is not possible.
In case of injecting the same dependency using both setter-based and constructor-based then setter-based injection override the constructor-based dependency injection. It’s obvious because constructor is called first before setter methods in bean life cycle.
It is recommended to user constructor-based injection for mandatory dependencies as it fails if you do not pass all the required dependency, whereas, setter-based injection is recommended for optional dependencies as you can inject partial dependencies.
If Object A and B are dependent on each other and you are trying constructor-based injection then Spring throws ObjectCurrentlyInCreationException while instantiating Objects because A object cannot be initialized until B is ready and vice-versa. This circular dependency issue can be solved using setter-based injection.

Q9. How many types of IOC Containers are there in Spring Framework?
BeanFactory is an interface representing a container that provides and manages bean instances. The default implementation instantiates beans lazily when getBean() is called.

ApplicationContext is an interface representing a container holding all information, metadata, and beans in the application. It is built on top of BeanFactory interface but the default implementation instantiates beans eagerly when the application starts. This behavior can be overridden for individual beans.

Three most commonly used implementation of ApplicationContext are:-

ClassPathXmlApplicationContext loads the XML configuration file from the classpath
ApplicationContext context = new ClassPathXmlApplicationContext(“bean.xml”);
FileSystemXmlApplicationContext loads the XML configuration file from the file system
ApplicationContext context = new FileSystemXmlApplicationContext(“bean.xml”);
XmlWebApplicationContext loads the XML configuration file from the /WEB-INF/applicationContext.xml location by default

Q10. Differentiate between BeanFactory and ApplicationContext?
BeanFactory vs ApplicationContext
BeanFactory	ApplicationContext
It is an interface defined in org.springframework .beans.factory package	It is an interface defined in org.springframework .context package
It uses Lazy initialization	It uses Eager initialization by default
It explicitly provides a resource object using the syntax	It creates and manages resource objects on its own
It doesn’t supports internationalization	It supports internationalization
It doesn’t supports annotation based dependency	It supports annotation based dependency

Q11. What is a Spring Bean?
The Spring Beans are Java Objects that are instantiated, configured, wired, and managed by the Spring IoC container. Spring Bean definition and metadata is provided by XML configuration or Java annotations, which is used by Spring IoC container.


Q12. Explain the Spring Bean Life Cycle?
Spring Bean Life Cycle
Spring Bean Life Cycle

Spring bean follow the following sequence in its life cycle:-

Default constructor will be called.
All properties setter methods will be called.
If class implements BeanNameAware then setBeanName method will be called.
If class implements BeanFactoryAware then setBeanFactory method will be called.
If class implements ApplicationContextAware then setApplicationContext method will be called.
If class implements BeanPostProcessor then its postProcessBeforeInitialization will be called.
If class implements InitializingBean then afterPropertiesSet method will be called.
If class has custom init method defined then it will be called.
If class implements BeanPostProcessor then its postProcessAfterInitialization will be called.
If class implements DisposableBean then destroy method will be called.
If class has custom destroy method defined then it will be called.
custom-init and custom-destroy example
  <bean id="store" class="com.abc.Store" init-method="myCustomInit" destroy-method="myCustomDestroy">

Q13. What are different ways to configure Spring Beans?
There are three ways to define Beans configuration in Spring Framework:-

XML-based Configuration
Java-based configuration
Annotation-based configuration

Q14. What is XML-based Spring Configuration?
In XML-Based configuration, all the bean definitions and application specific configurations are defined in an XML file in a specific format. Parent XML element is </beans> and individual bean is defined using </bean> element.

<!-- Spring Configurations -->
<bean name="viewResolver" class="org.springframework.web.servlet.view.BeanNameViewResolver"/>
<bean name="jsonTemplate" class="org.springframework.web.servlet.view.json.MappingJackson2JsonView"/>
<bean id="restTemplate" class="org.springframework.web.client.RestTemplate"/>
<!-- Bean Definition -->
<bean id="tutorial" class="com.abc.TutorialBean">
 <property name="name" value="CodingNConcepts"></property>
</bean>

Q15. What is Java-based Spring Configuration?
Spring configuration can also be defined using @Configuration annotated classes and @Bean annotated methods where,

@Configuration annotated class represents an XML configuration file
@Bean annotated methods represent the element and responsible to provide a bean definition.
@Configuration
public class AppConfig 
{
    @Bean
    public MyService myService() {
        return new MyServiceImpl();
    }
}
is equivalent of following XML configuration

<beans>
    <bean id="myService" class="com.abc.services.MyServiceImpl"/>
</beans>
To instantiate such config, you will need the help of AnnotationConfigApplicationContext class.

public static void main(String[] args) {
    ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
    MyService myService = ctx.getBean(MyService.class);
    myService.doStuff();
}
or alternatively you can enable component scanning, to instantiate config automatically.

@Configuration
@ComponentScan(basePackages = "com.abc")
public class AppConfig  {
    ...
}
In the example above, the com.abc package will be scanned and look for @Component or other stereotypes annotated classes, and those classes will be instantiated and managed by as Spring container automatically.


Q16. What is Annotation-based Spring Configuration?
Annotation-based container configuration is an alternative of XML-based configuration and is mostly used by developers. Rather than using XML for describing a bean wiring, the developer moves the configuration to the classes by using annotations on the class, field, or method declaration.

By default, annotation config is turned off. It needs to be turned on explicitly by adding <context:annotation-config/> element in Spring Configuration XML file.

<beans>
  <context:annotation-config/>
  <!-- bean definitions go here -->
</beans>
Alternatively, you can include AutowiredAnnotationBeanPostProcessor in bean configuration file.

<beans>
    <bean class="org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor"/>
</beans>

Q17. Can We Have Multiple Spring Configuration Files in One Project?
Yes, in large projects, having multiple Spring configurations is recommended to increase maintainability and modularity.

You can load multiple Java-based configuration files:

@Configuration
@Import({MainConfig.class, SchedulerConfig.class})
public class AppConfig {
Or load one XML file that will contain all other configs:

ApplicationContext context = new ClassPathXmlApplicationContext("spring-all.xml");
And inside this XML file you’ll have:

<import resource="main.xml"/>
<import resource="other.xml"/>

Q18. How to define Scope of a Spring Bean?
Spring Bean’s scope can be defined either using @Scope annotation or scope attribute in XML configuration files. There are five supported scopes:

<bean id="mySingleton" class="com.abc.MySingleton" scope="singleton"/>
singleton: bean scope provides single instance per Spring IoC container. This means everytime spring application context returns same instance when we ask.

Points to remember about Singleton bean:-
Singleton is the default bean scope
Singleton beans are not thread safe

prototype: bean scope creates a new instance each and every time a bean is requested from spring container

request: bean scope creates a new instance on every incoming HTTP-request.

session: bean scope creates a new instance per HTTP-session.

global-session: bean scope creates a new instance per Global HTTP-session. It is useful for Portlet based applications where bean is used to store global info used by all portlets. This scope works same as session scope in Servlet based applications.

The last three are available only if the users use a web-aware ApplicationContext.


Q19. What are inner beans in Spring?
In Spring framework, whenever a bean is used for only one particular property, it is advised to declare it as an inner bean. The inner bean is supported both in setter injection property and constructor injection constructor-arg.

For example, let’s say we have Store class having reference of Item class. In our application, we will be creating only one instance of Item class, and use it inside Store.

public class Store {

    private Item item;
     
    //Setters and Getters
}
public class Item {

    private String name;
    private long quantity;
     
    //Setters and Getters
}
Now inner bean declaration will look like this:

<bean id="StoreBean" class="com.abc.Store">
    <property name="item">
        <!-- This is inner bean -->
        <bean class="com.abc.Item">
            <property name="name" value="Fruits"></property>
            <property name="quantity" value="100"></property>
        </bean>
    </property>
</bean>

Q20. Are Singleton beans thread safe in Spring Framework?
Spring framework does not do anything under the hood concerning the multi-threaded behavior of a singleton bean. It is the developer’s responsibility to deal with concurrency issue and thread safety of the singleton bean.

While practically, most spring beans have no mutable state (e.g. Service and DAO clases), and as such are trivially thread safe. But if your bean has mutable state (e.g. View Model Objects), so you need to ensure thread safety. The most easy and obvious solution for this problem is to change bean scope of mutable beans from singleton to prototype.


Q21. How can you inject a Java Collection in Spring? Give example?
Spring offers four types of collection configuration elements which are as follows:

<list> : This helps in wiring ie injecting a list of values, allowing duplicates.
<set> : This helps in wiring a set of values but without any duplicates.
<map> : This can be used to inject a collection of name-value pairs where name and value can be of any type.
<props> : This can be used to inject a collection of name-value pairs where the name and value are both Strings.
Let’s see example of each type.

<beans> 

   <!-- Definition for javaCollection -->
   <bean id="javaCollection" class="com.abc.JavaCollection">
 
      <!-- java.util.List -->
      <property name="customList">
        <list>
           <value>India</value>
           <value>Singapore</value>
           <value>USA</value>
           <value>UK</value>
        </list>
      </property>
 
     <!-- java.util.Set -->
     <property name="customSet">
        <set>
           <value>India</value>
           <value>Singapore</value>
           <value>USA</value>
           <value>UK</value>
        </set>
      </property>
 
     <!-- java.util.Map -->
     <property name="customMap">         
        <map>
           <entry key="1" value="India"/>
           <entry key="2" value="Singapore"/>
           <entry key="3" value="USA"/>
           <entry key="4" value="UK"/>
        </map>
      </property>
       
      <!-- java.util.Properties -->
    <property name="customProperies">
        <props>
            <prop key="admin">admin@myorg.com</prop>
            <prop key="support">support@myorg.com</prop>
        </props>
    </property>
 
   </bean>
</beans>

Q22. How to inject a java.util.Properties into a Spring Bean?
You can initialize properties using <props> as below.

<bean id="adminUser" class="com.abc.common.Customer">
  
    <!-- java.util.Properties -->
    <property name="emails">
        <props>
            <prop key="admin">admin@myorg.com</prop>
            <prop key="support">support@myorg.com</prop>
        </props>
    </property>
 
</bean>
Alternatively you can use <util:properties> to define properties from a properties file, and use bean reference for setter injection.

<util:properties id="emails" location="classpath:com/foo/emails.properties" />

Q23. Explain Spring Bean Autowiring?
Autowiring allows the Spring container to automatically resolve dependencies between collaborating beans by inspecting the beans that have been defined. Spring Bean Autowiring can be done in three ways:-

XML-based configuration using </bean>
<bean id="store" class="com.abc.Store" autowire="byType" />
Annotation-based configuration using @Autowired on properties, setter-methods or constructor
public class Store {

  @Autowired
  private Item item;
}
Java-based configuration using @Bean
@Bean(autowire = Autowire.BY_TYPE)
public class Store {

  private Item item;

  public setItem(Item item){
      this.item = item;    
  }
}

Q24. Explain different Modes of Spring Bean Autowiring?
There are five autowiring modes in spring framework. Lets discuss them one by one.

no: This option is default for spring framework and it means that autowiring is OFF. You have to explicitly set the dependencies using tags in bean definitions.
byName: This option enables the dependency injection based on bean names. When autowiring a property in bean, property name is used for searching a matching bean definition in configuration file. If such bean is found, it is injected in property. If no such bean is found, a error is raised.
byType: This option enables the dependency injection based on bean types. When autowiring a property in bean, property’s class type is used for searching a matching bean definition in configuration file. If such bean is found, it is injected in property. If no such bean is found, a error is raised.
constructor: Autowiring by constructor is similar to byType, but applies to constructor arguments. In autowire enabled bean, it will look for class type of constructor arguments, and then do a autowire by type on all constructor arguments. Please note that if there isn’t exactly one bean of the constructor argument type in the container, a fatal error is raised.
autodetect: Autowiring by autodetect uses either of two modes i.e. constructor or byType modes. First it will try to look for valid constructor with arguments, If found the constructor mode is chosen. If there is no constructor defined in bean, or explicit default no-args constructor is present, the autowire byType mode is chosen.

Q25. Explain @Required annotation with example?
This annotation simply indicates that the affected bean property must be populated at configuration time, through an explicit property value in a bean definition or through autowiring. The container throws BeanInitializationException if the affected bean property has not been populated.

This annotation is used to overcome the problem arise with setter-based injection where spring container doesn’t warn or throw any exception if all the required properties are not populated.

We can use @Required annotation over setter-method of bean property in class file to indicate it is a mandatory property,

public class Store {
    private Item item;
      
    public Item getItem() {
        return item;
    }
  
    @Required
    public void setItem(Item item) {
        this.item = item;
    }
}

Q26. Explain @Autowired annotation with example?
This annotation provides more fine-grained control over where and how autowiring should be accomplished. The @Autowired annotation can be used to autowire bean on the setter method just like @Required annotation, constructor, a property or methods with arbitrary names and/or multiple arguments.

E.g. You can use @Autowired annotation on setter methods to get rid of the <property> element in XML configuration file. When Spring finds an @Autowired annotation used with setter methods, it tries to perform byType autowiring on the method.

You can apply @Autowired to constructors as well. A constructor @Autowired annotation indicates that the constructor should be autowired when creating the bean, even if no <constructor-arg> elements are used while configuring the bean in XML file.

public class TextEditor {
   private SpellChecker spellChecker;
 
   @Autowired
   public TextEditor(SpellChecker spellChecker){
      System.out.println("Inside TextEditor constructor." );
      this.spellChecker = spellChecker;
   }
 
   public void spellCheck(){
      spellChecker.checkSpelling();
   }
}
And it’s configuration without constructor arguments.

<beans>
 
   <context:annotation-config/>
 
   <!-- Definition for textEditor bean without constructor-arg -->
   <bean id="textEditor" class="com.howtodoinjava.TextEditor">
   </bean>
 
   <!-- Definition for spellChecker bean -->
   <bean id="spellChecker" class="com.howtodoinjava.SpellChecker">
   </bean>
 
</beans>

Q27. Explain @Qualifier annotation with example?
There may be a situation when you create two or more beans of the same type and want to wire only one of them with a property, in such case you can use @Qualifier annotation along with @Autowired to remove the confusion by specifying which exact bean will be wired.

See below example, it will autowire a item bean into Store class,

public class Store {

    @Autowired
    private Item item;
}
And we have two bean definitions for Item class.

<bean id="store" class="com.abc.Store" />
 
<bean id="itemA" class="com.abc.Item" >
    <property name="name" value="Fruit" />
</bean>
 
<bean id="itemB" class="com.abc.Item" >
    <property name="name" value="Biscuits" />
</bean>
If you run the above example spring will throw an exception because it doesn’t know which bean to autowire in Store class, itemA or itemB?

Caused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: 
    No unique bean of type [com.abc.Item] is defined: 
        expected single matching bean but found 2: [itemA, itemB]
We can use @Qualifier annotation to wire specific itemA bean like this:-

public class Store {

    @Autowired
    @Qualifier("itemA")
    private Item item;
}

Q28. What are Spring stereotype annotations?
@component vs @service vs @repository vs @controller
All the stereotype annotations are used at annotate classes auto-detection and bean configuration. There are mainly 4 types of stereotypes:-

@Component is a generic stereotype to annotate classes at any layer
@Controller is used to annotate classes at API layer, mainly used in Spring MVC applications to define API endpoint and used in conjunction with @RequestMapping annotation which is used to annotate method to maps the request URL.
@Service is used to annotate classes at the service layer
@Repository is used to annotate classes at the persistence layer, which will act as a database repository

Q29. What are JSR-250 annotations?
@PostConstruct − This annotation can be used as an alternate of initialization callback.
@PreDestroy − This annotation can be used as an alternate of destruction callback.
@Resource − This annotation can be used on fields or setter methods. The @Resource annotation takes a ’name’ attribute which will be interpreted as the bean name to be injected. You can say, it follows by-name autowiring semantics.

Q30. What happens when you define two beans with same id or same name ?
beans.xml
<bean id="foo" name="sameName" class="com.abc.Foo" />
<bean id="bar" name="sameName" class="com.abc.Bar" />
When you use two bean with same name (or same id) in single configuration file then “BeanDefinitionParsingException – Bean name ‘sameName’ is already used in this file” is thrown by the spring container at the time of loading.

Where things get a little interesting is when bean definitions are spread out across many configuration files. Say, for example, the foo bean is defined in beans1.xml while the bar bean is defined in beans2.xml.

beans1.xml
<bean id="foo" name="sameName" class="com.abc.Foo" />
beans2.xml
<bean id="bar" name="sameName" class="com.abc.Bar" />
Now, if the two beans have the same name (or id), surprisingly no exception is thrown by the container!!!

FileSystemXmlApplicationContext context = new FileSystemXmlApplicationContext(
    new String[] { "beans1.xml", "beans2.xml" });

Bar f = (Bar) context.getBean("sameName"); // works fine
The documentation says “the last bean definition with the same name (or id) wins, respectively to the order of the xml files.” In the example Java code above, beans2.xml is loaded in the last. Therefore, bean class com.abc.Bar will be loaded.

you can always turn off this default behavior and make cause bean ids/names to be unique across all configurations of the container. Look into the DefaultListableBeanFactory setAllowBeanDefinitionOverriding() method.


Q31. Explain Spring MVC Workflow?
Spring MVC Workflow
Spring MVC Workflow

When you request from spring MVC application then it follow the following sequence:-

1. Dispatcher Servlet
Dispatcher Servlet which is also know as front controller is the core of Spring MVC Workflow and responsible for handling all HTTP request and response. If you are using tomcat as web application server then Dispatcher Servlet need to define in web.xml

The DispatcherServlet receives the entry of handler mapping from the configuration file and forwards the request to the controller. The controller then returns an object of Model And View. The DispatcherServlet checks the entry of view resolver in the configuration file and calls the specified view component.

2. Handler Mapping
Handler Mapping is a configuration for url and controller mapping.

Following are the different implementation of HandlerMapping:-

1) BeanNameUrlHandlerMapping
This is a default spring handler mapping. Name of bean considered as URL.

<bean name="/welcome.htm" class="com.abc.controller.WelcomeController"/>
2) SimpleUrlHandlerMapping
Map with key value pair of URL and controller bean name.

<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
  <property name="mappings">
    <props>
      <prop key="/welcome.htm">welcomeController</prop>
    </props>
  </property>
</bean>
<bean id="welcomeController" class="com.abc.controller.WelcomeController" />
3) DefaultAnnotationHandlerMapping
This is the most popular implementation of HandlerMapping where each class annotated with @Controller maps one or more request to methods that process and execute the request with provided inputs.

@RequestMapping annotation is used at both class and method level to map the URL. In addition to simple use cases, we can use it for mapping of HTTP headers, binding parts of the URI with @PathVariable, and working with URI parameters and the @RequestParam annotation.

package com.abc.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/welcome")
public class WelcomeController{

  @RequestMapping(method = RequestMethod.GET)
  public ModelAndView helloWorld(){
    ModelAndView model = new ModelAndView("WelcomePage");
    model.addObject("msg", "hello world");
    return model;
  }
}
3. Controller
Controller calls service layer to execute business logic and return ModelAndView, which is wrapper for model object and view name.

Popular Controller Types:
AbstractController
AbstractCommandController
SimpleFormController

4. View Resolver
View Resolver look for appropriate view JSP/HTML based on view name.

Popular Implementations of ViewResolver:
InternalResourceViewResolver

5. View
Dispatcher Servlet return the view JPS/HTML component to user


Q32. Differentiate between @Controller and @RestController?
@Controller vs @RestController
Even though both are used to indicate that a Spring bean is a Controller in Spring MVC setup, @RestController is better when you are developing RESTful web services using Spring MVC framework. It’s a combination of @Controller + @ResponseBody annotation which allows the controller to directly write the response and bypassing the view resolution process, which is not required for RESTful web service.

It also instructs DispatcherServlet to use different HttpMessageConverters to represent the response in the format client is expecting e.g. HttpMessageJackson2Convert to represent response in JSON format and JAXB based message converts to generate XML response.


Q33. What Is Spring Security?
Spring Security is a separate module of the Spring framework that focuses on providing authentication and authorization methods in Java applications. It also takes care of most of the common security vulnerabilities such as CSRF attacks.

To use Spring Security in web applications, you can get started with a simple annotation: @EnableWebSecurity.


Q34. What Is Aspect-Oriented Programming?
Aspect-oriented programming or AOP is a programming technique which allows programmers to modularize crosscutting concerns or behavior that cuts across the typical divisions of responsibility. Examples of cross-cutting concerns can be logging and transaction management. The core of AOP is an aspect. It encapsulates behaviors that can affect multiple classes into reusable modules.


Q35. What Are Aspect, Advice, Pointcut, and Joinpoint in Aop?
Aspect: a class that implements cross-cutting concerns, such as transaction management
Advice: the methods that get executed when a specific JoinPoint with matching Pointcut is reached in the application
Pointcut: a set of regular expressions that are matched with JoinPoint to determine whether Advice needs to be executed or not
JoinPoint: a point during the execution of a program, such as the execution of a method or the handling of an exception

Q36. What are the different types of Advices?
Different types of Advices in Spring AOP are:

Before: These types of advices execute before the joinpoint methods and are configured using @Before annotation mark.
After returning: These types of advices execute after the joinpoint methods completes executing normally and are configured using @AfterReturning annotation mark.
After throwing: These types of advices execute only if joinpoint method exits by throwing an exception and are configured using @AfterThrowing annotation mark.
After (finally): These types of advices execute after a joinpoint method, regardless of the method’s exit whether normally or exceptional return and are configured using @After annotation mark.
Around: These types of advices execute before and after a joinpoint and are configured using @Around annotation mark.

Q37. What is cross-cutting concerns in Spring AOP?
The concern is the behavior we want to have in a particular module of an application. It can be defined as a functionality we want to implement.

The cross-cutting concern is a concern which is applicable throughout the application. This affects the entire application. For example, logging, security and data transfer are the concerns needed in almost every module of an application, thus they are the cross-cutting concerns.

Spring AOP - Cross Cutting Concerns
Spring AOP - Cross Cutting Concerns


Q38. What is Weaving?
According to the official docs, weaving is a process that links aspects with other application types or objects to create an advised object. This can be done at compile time, load time, or at runtime. Spring AOP, like other pure Java AOP frameworks, performs weaving at runtime.


Q39. What is Spring Dao?
Spring Data Access Object is Spring’s support provided to work with data access technologies like JDBC, Hibernate, and JPA in a consistent and easy way.

This also allows to switch between the persistence technologies easily. It also allows you to code without worrying about catching exceptions that are specific to each of these technology.


Q40. What is Spring Jdbctemplate Class and How to Use it?
The Spring JDBC template is the primary API through which we can access database operations logic that we’re interested in:

creation and closing of connections
executing statements and stored procedure calls
iterating over the ResultSet and returning results
To use it, we’ll need to define the simple configuration of DataSource:

@Configuration
@ComponentScan("com.abc.jdbc")
public class SpringJdbcConfig {

    @Bean
    public DataSource mysqlDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/springjdbc");
        dataSource.setUsername("guest_user");
        dataSource.setPassword("guest_password");
  
        return dataSource;
    }
}

Q41. How Would You Enable Transactions in Spring and What Are Their Benefits?
There are two distinct ways to configure Transactions – with annotations or by using Aspect Oriented Programming (AOP) – each with their advantages.

The benefits of using Spring Transactions, according to the official docs, are:

Provide a consistent programming model across different transaction APIs such as JTA, JDBC, Hibernate, JPA, and JDO
Support declarative transaction management
Provide a simpler API for programmatic transaction management than some complex transaction APIs such as JTA
Integrate very well with Spring’s various data access abstractions

Q42. What is Spring Boot?
Spring boot solves all this problems that comes with Spring Framework and help to create stand-alone, production-grade Spring based applications that you can just run.

Follow the post for Top Spring Boot Interview Questions


Source
Spring 5.0.0.RC3 Official Documentation
Baeldung Spring Interview Questions
Edureka Spring Interview Questions
HowToDoInJava Spring Interview Questions
Interview Q&A
Spring Q&A
     
See Also
Top Spring Boot Interview Questions
Core Java Interview Questions
Top CSS Interview Questions
Top Javascript Interview Questions
Hibernate Interview Questions
Ashish Lahoti avatar
About Ashish Lahoti
Ashish Lahoti is a Software Engineer with 12+ years of experience in designing and developing distributed and scalable enterprise applications using modern practices. He is a technology enthusiast and has a passion for coding & blogging.
« Previous
Core Java Interview Questions

Next »
Top Spring Boot Interview Questions

© 2026 CodingNConcepts. Generated with Hugo and Mainroad theme.


1. Overview
2. Spring Core
Q1. What Is Spring Framework?
Q2. What Are the Benefits of Using Spring?
Q3.What Spring Sub-Projects Do You Know? Describe Them Briefly.
Q4. What Is Dependency Injection?
Q5. How Can We Inject Beans in Spring?
Q6. Which Is the Best Way of Injecting Beans and Why?
Q7. What Is the Difference Between BeanFactory and ApplicationContext?
Q8.What Is a Spring Bean?
Q9. What Is the Default Bean Scope in Spring Framework?
Q10. How to Define the Scope of a Bean?
Q11. Are Singleton Beans Thread-Safe?
Q12. What Does the Spring Bean Life Cycle Look Like?
Q13. What Is the Spring Java-Based Configuration?
Q14. Can We Have Multiple Spring Configuration Files in One Project?
Q15. What Is Spring Security?
Q16. What Is Spring Boot?
Q17. Name Some of the Design Patterns Used in the Spring Framework?
Q18. How Does the Scope Prototype Work?
 

3. Spring Web MVC
Q19. How to Get ServletContext and ServletConfig Objects in a Spring Bean?
Q20. What Is a Controller in Spring MVC?
Q21. How Does the @RequestMapping Annotation Work?
 

4. Spring Data Access
Q22. What Is Spring Jdbctemplate Class and How to Use It?
Q23. How to Enable Transactions in Spring and What Are Their Benefits?
Q24. What Is Spring DAO?
 

5. Spring Aspect-Oriented Programming (AOP)
Q25. What Is Aspect-Oriented Programming?
Q26. What Are Aspect, Advice, Pointcut, and JoinPoint in AOP?
Q27. What Is Weaving?
 

6. Spring 5
Q28. What Is Reactive Programming?
Q29. What Is Spring WebFlux?
Q30. What Are the Mono and Flux Types?
Q31. What Is the Use of WebClient and WebTestClient?
Q32. What Are the Disadvantages of Using Reactive Streams?
Q33. Is Spring 5 Compatible With Older Versions of Java?
Q34. How Ow Spring 5 Integrates With JDK 9 Modularity?
Q35. Can We Use Both Web MVC and WebFlux in the Same Application?
 

7. Conclusion
1. Overview
In this tutorial, we’re going to look at some of the most common Spring-related questions that might pop up during a job interview.

Further reading:
Java Interview Questions
Learn the answers to common Java interview questions
Read more →
Java 8 Interview Questions(+ Answers)
A set of popular Java8-related interview questions and of course answers.
Read more →
Java Collections Interview Questions
A set of practical Collections-related Java interview questions
Read more →
2. Spring Core
Q1. What Is Spring Framework?
Spring is the most broadly used framework for the development of Java Enterprise Edition applications. Further, the core features of Spring can be used in developing any Java application.

We use its extensions for building various web applications on top of the Jakarta EE platform. We can also just use its dependency injection provisions in simple standalone applications.

Q2. What Are the Benefits of Using Spring?
Spring targets to make Jakarta EE development easier, so let’s look at the advantages:

Lightweight – There is a slight overhead of using the framework in development.
Inversion of Control (IoC) – Spring container takes care of wiring dependencies of various objects instead of creating or looking for dependent objects.
Aspect-Oriented Programming (AOP) – Spring supports AOP to separate business logic from system services.
IoC container – manages Spring Bean life cycle and project-specific configurations
MVC framework – used to create web applications or RESTful web services, capable of returning XML/JSON responses
Transaction management – reduces the amount of boilerplate code in JDBC operations, file uploading, etc., either by using Java annotations or by Spring Bean XML configuration file
Exception Handling – Spring provides a convenient API for translating technology-specific exceptions into unchecked exceptions.
Q3. What Spring Sub-Projects Do You Know? Describe Them Briefly.
Core – a key module that provides fundamental parts of the framework, such as IoC or DI
JDBC – enables a JDBC-abstraction layer that removes the need to do JDBC coding for specific vendor databases
ORM integration – provides integration layers for popular object-relational mapping APIs, such as JPA, JDO and Hibernate
Web – a web-oriented integration module that provides multipart file upload, Servlet listeners and web-oriented application context functionalities
MVC framework – a web module implementing the Model View Controller design pattern
AOP module – aspect-oriented programming implementation allowing the definition of clean method-interceptors and pointcuts
Q4. What Is Dependency Injection?
Dependency injection, an aspect of Inversion of Control (IoC), is a general concept stating that we do not create our objects manually but instead describe how they should be created. Then an IoC container will instantiate required classes if needed.

For more details, please look here.

Q5. How Can We Inject Beans in Spring?
A few different options exist in order to inject Spring beans:

Setter injection
Constructor injection
Field injection
The configuration can be done using XML files or annotations.

For more details, check this article.

Q6. Which Is the Best Way of Injecting Beans and Why?
The recommended approach is to use constructor arguments for mandatory dependencies and setters for optional ones. This is because constructor injection allows injecting values to immutable fields and makes testing easier.

Q7. What Is the Difference Between BeanFactory and ApplicationContext?
BeanFactory is an interface representing a container that provides and manages bean instances. The default implementation instantiates beans lazily when getBean() is called.

In contrast, ApplicationContext is an interface representing a container holding all information, metadata and beans in the application. It also extends the BeanFactory interface, but the default implementation instantiates beans eagerly when the application starts. However, this behavior can be overridden for individual beans.

For all differences, please refer to the documentation.

Q8. What Is a Spring Bean?
The Spring Beans are Java Objects that are initialized by the Spring IoC container.

Q9. What Is the Default Bean Scope in Spring Framework?
By default, a Spring Bean is initialized as a singleton.

Q10. How to Define the Scope of a Bean?
In order to set Spring Bean’s scope, we can use @Scope annotation or “scope” attribute in XML configuration files. Note that there are five supported scopes:

Singleton
Prototype
Request
Session
Global-session
For differences, please look here.

Q11. Are Singleton Beans Thread-Safe?
No, singleton beans are not thread-safe, as thread safety is about execution, whereas the singleton is a design pattern focusing on creation. Thread safety depends only on the bean implementation itself.

Q12. What Does the Spring Bean Life Cycle Look Like?
First, a Spring bean needs to be instantiated based on Java or XML bean definition. It may also be required to perform some initialization to get it into a usable state. After that, when the bean is no longer required, it will be removed from the IoC container.

The whole cycle with all initialization methods is shown in the image (source):

Spring Bean Life Cycle
Q13. What Is the Spring Java-Based Configuration?
It’s one of the ways of configuring Spring-based applications in a type-safe manner. It’s an alternative to the XML-based configuration.

Also, to migrate a project from XML to Java config, please refer to this article.

Q14. Can We Have Multiple Spring Configuration Files in One Project?
Yes, in large projects, having multiple Spring configurations is recommended to increase maintainability and modularity.

We can load multiple Java-based configuration files:

@Configuration
@Import({MainConfig.class, SchedulerConfig.class})
public class AppConfig {
Copy
Or we can load one XML file that will contain all other configs:

ApplicationContext context = new ClassPathXmlApplicationContext("spring-all.xml");
Copy
And inside this XML file we’ll have the following:

<import resource="main.xml"/>
<import resource="scheduler.xml"/>
Copy
Q15. What Is Spring Security?
Spring Security is a separate module of the Spring framework that focuses on providing authentication and authorization methods in Java applications. It also takes care of most of the common security vulnerabilities such as CSRF attacks.

To use Spring Security in web applications, we can get started with the simple annotation @EnableWebSecurity.

For more information, we have a whole series of articles related to security.

Q16. What Is Spring Boot?
Spring Boot is a project that provides a pre-configured set of frameworks to reduce boilerplate configuration. This way, we can have a Spring application up and running with the smallest amount of code.

Q17. Name Some of the Design Patterns Used in the Spring Framework?
Singleton Pattern – singleton-scoped beans
Factory Pattern – Bean Factory classes
Prototype Pattern – prototype-scoped beans
Adapter Pattern – Spring Web and Spring MVC
Proxy Pattern – Spring Aspect-Oriented Programming support
Template Method Pattern – JdbcTemplate, HibernateTemplate, etc.
Front Controller – Spring MVC DispatcherServlet
Data Access Object – Spring DAO support
Model View Controller – Spring MVC
Q18. How Does the Scope Prototype Work?
Scope prototype means that every time we call for an instance of the Bean, Spring will create a new instance and return it. This differs from the default singleton scope, where a single object instance is instantiated once per Spring IoC container.

3. Spring Web MVC
Q19. How to Get ServletContext and ServletConfig Objects in a Spring Bean?
We can do either by implementing Spring-aware interfaces. The complete list is available here.

We could also use @Autowired annotation on those beans:

@Autowired
ServletContext servletContext;

@Autowired
ServletConfig servletConfig;
Copy
Q20. What Is a Controller in Spring MVC?
Simply put, all the requests processed by the DispatcherServlet are directed to classes annotated with @Controller. Each controller class maps one or more requests to methods that process and execute the requests with provided inputs.

To take a step back, we recommend having a look at the concept of the Front Controller in the typical Spring MVC architecture.

Q21. How Does the @RequestMapping Annotation Work?
The @RequestMapping annotation is used to map web requests to Spring Controller methods. In addition to simple use cases, we can use it for mapping of HTTP headers, binding parts of the URI with @PathVariable, and working with URI parameters and the @RequestParam annotation.

More details on @RequestMapping are available here.

For more Spring MVC questions, please check out our article on Spring MVC interview questions.

4. Spring Data Access
Q22. What Is Spring JdbcTemplate Class and How to Use It?
The Spring JDBC template is the primary API through which we can access database operations logic that we’re interested in:

Creation and closing of connections
Executing statements and stored procedure calls
Iterating over the ResultSet and returning results
In order to use it, we’ll need to define the simple configuration of DataSource:

@Configuration
@ComponentScan("org.baeldung.jdbc")
public class SpringJdbcConfig {
    @Bean
    public DataSource mysqlDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/springjdbc");
        dataSource.setUsername("guest_user");
        dataSource.setPassword("guest_password");
 
        return dataSource;
    }
}
Copy
For further explanation, check out this quick article.

Q23. How to Enable Transactions in Spring and What Are Their Benefits?
There are two distinct ways to configure Transactions — with annotations or by using Aspect-Oriented Programming (AOP) — each with their advantages.

Here are the benefits of using Spring Transactions, according to the official docs:

Provide a consistent programming model across different transaction APIs such as JTA, JDBC, Hibernate, JPA and JDO
Support declarative transaction management
Provide a simpler API for programmatic transaction management than some complex transaction APIs such as JTA
Integrate very well with Spring’s various data access abstractions
Q24. What Is Spring DAO?
Spring Data Access Object (DAO) is Spring’s support provided to work with data access technologies like JDBC, Hibernate and JPA in a consistent and easy way.

There is an entire series discussing persistence in Spring that provides a more in-depth look.

5. Spring Aspect-Oriented Programming
Q25. What Is Aspect-Oriented Programming (AOP)?
Aspects enable the modularization of cross-cutting concerns such as transaction management that span multiple types and objects by adding extra behavior to already existing code without modifying affected classes.

Here is the example of aspect-based execution time logging.

Q26. What Are Aspect, Advice, Pointcut and JoinPoint in AOP?
Aspect – a class that implements cross-cutting concerns, such as transaction management
Advice – the methods that get executed when a specific JoinPoint with matching Pointcut is reached in the application
Pointcut – a set of regular expressions that are matched with JoinPoint to determine whether Advice needs to be executed or not
JoinPoint – a point during the execution of a program, such as the execution of a method or the handling of an exception
Q27. What Is Weaving?
According to the official docs, weaving is a process that links aspects with other application types or objects to create an advised object. This can be done at compile time, load time, or runtime. Spring AOP, like other pure Java AOP frameworks, performs weaving at runtime.

6. Spring 5
Q28. What Is Reactive Programming?
Reactive programming is about non-blocking, event-driven applications that scale with a small number of threads, with back pressure being a key ingredient that aims to ensure producers don’t overwhelm consumers.

These are the primary benefits of reactive programming:

Increased utilization of computing resources on multicore and multi-CPU hardware
Increased performance by reducing serialization
Reactive programming is generally event-driven, in contrast to reactive systems, which are message-driven. So, using reactive programming does not mean we’re building a reactive system, which is an architectural style.

However, reactive programming may be used as a means to implement reactive systems if we follow the Reactive Manifesto, which is quite vital to understand.

Based on this, reactive systems have four important characteristics:

Responsive – The system should respond in a timely manner.
Resilient – In case the system faces any failure, it should stay responsive.
Elastic – Reactive systems can react to changes and stay responsive under varying workload.
Message-driven – Reactive systems need to establish a boundary between components by relying on asynchronous message passing.
Q29. What Is Spring WebFlux?
Spring WebFlux is Spring’s reactive-stack web framework, and it’s an alternative to Spring MVC.

In order to achieve this reactive model and be highly scalable, the entire stack is non-blocking. Check out our tutorial on Spring 5 WebFlux for additional details.

Q30. What Are the Mono and Flux Types?
The WebFlux framework in Spring Framework 5 uses Reactor as its async foundation.

This project provides two core types: Mono to represent a single async value and Flux to represent a stream of async values. They both also implement the Publisher interface defined in the Reactive Streams specification.

Mono implements Publisher and returns 0 or 1 elements:

public abstract class Mono<T> implements Publisher<T> {...}
Copy
And Flux implements Publisher and returns N elements:

public abstract class Flux<T> implements Publisher<T> {...}
Copy
By definition, the two types represent streams, and so they’re both lazy. This means nothing is executed until we consume the stream using the subscribe() method. Both types are also immutable, so calling any method will return a new instance of Flux or Mono.

Q31. What Is the Use of WebClient and WebTestClient?
WebClient is a component in the new Web Reactive framework that can act as a reactive client for performing non-blocking HTTP requests. Since it’s reactive client, it can handle reactive streams with back pressure, and it can take full advantage of Java 8 lambdas. It can also handle both sync and async scenarios.

On the other hand, the WebTestClient is a similar class that we can use in tests. Basically, it’s a thin shell around the WebClient. It can connect to any server over an HTTP connection. It can also bind directly to WebFlux applications using mock request and response objects, without the need for an HTTP server.

Q32. What Are the Disadvantages of Using Reactive Streams?
There are some major disadvantages to using reactive streams:

Troubleshooting a Reactive application is a bit difficult, so be sure to check out our tutorial on debugging reactive streams for some handy debugging tips.
There is limited support for reactive data stores since traditional relational data stores have yet to embrace the reactive paradigm.
There’s an extra learning curve when implementing.
Q33. Is Spring 5 Compatible With Older Versions of Java?
In order to take advantage of Java 8 features, the Spring codebase has been revamped. This means older versions of Java cannot be used. So, the framework requires a minimum of Java 8.

Q34. How Does Spring 5 Integrate With JDK 9 Modularity?
In Spring 5, everything has been modularized. This way, we won’t be forced to import jars that may not have the functionalities we’re looking for.

Please have a look at our guide to Java 9 modularity for an in-depth understanding of how this technology works.

Let’s see an example to understand the new module functionality in Java 9 and how to organize a Spring 5 project based on this concept.

We’ll first create a new class that contains a single method to return a String “HelloWorld”. We’ll place this within a new Java project — HelloWorldModule:

package com.hello;
public class HelloWorld {
    public String sayHello(){
        return "HelloWorld";
    }
}
Copy
Then we create a new module:

module com.hello {
    export com.hello;
}
Copy
Now let’s create a new Java Project, HelloWorldClient, to consume the above module by defining a module:

module com.hello.client {
    requires com.hello;
}
Copy
The above module will be available for testing now:

public class HelloWorldClient {
    public static void main(String[] args){
        HelloWorld helloWorld = new HelloWorld();
        log.info(helloWorld.sayHello());
    }
}
Copy
Q35. Can We Use Both Web MVC and WebFlux in the Same Application?
As of now, Spring Boot will only allow either Spring MVC or Spring WebFlux, as Spring Boot tries to auto-configure the context depending on the dependencies that exist in its classpath.

Also, Spring MVC cannot run on Netty. Moreover, MVC is a blocking paradigm and WebFlux is a non-blocking style. So, we shouldn’t be mixing both together because they serve different purposes.

7. Conclusion
In this extensive article, we’ve explored some of the most important questions for a technical interview all about Spring.

We hope that this article will help in upcoming Spring interviews. Good luck!

« Previous
Java Annotations Interview Questions (+ Answers)
announcement - icon
Get started with Spring Boot and with core Spring, through the Learn Spring course:

>> CHECK OUT THE COURSE

The Baeldung logo
Courses
All Courses
Baeldung All Access
Baeldung All Team Access
Login Course Platform
Series
Java “Back to Basics” Tutorial
Spring Tutorial
Spring Framework Introduction
Learn Spring Boot Series
Get Started with Java
All About String in Java
Java IO Series
About
About Baeldung
The Full Archive
Editors
Our Partners
Partner with Baeldung
eBooks
FAQ
Baeldung Pro
Terms of Service Privacy Policy Company Info Contact
Privacy Manager



https://www.edureka.co/ 

Career Related Programs 
Webinars
EbookNEW
Explore Online Courses
Home
Blog
Programming & Frameworks
Top 60+ Spring Boot Interview ...
Spring Framework (11 Blogs)
Programming & Frameworks
Topics Covered
C Programming and Data Structures (16 Blogs)
Comprehensive Java Course (5 Blogs)
Java/J2EE and SOA (341 Blogs)
Spring Framework (9 Blogs)
SEE MORE Programming & Frameworks blog posts
Banner image
Top 60+ Spring Boot Interview Questions That Are A Must in 2025
Last updated on May 22,2025677.9K Views
Share
image not found!
image not found!
image not found!
image not found!
image not found!
image not found!

Sahiti KappagantulaSahiti Kappagantula
image not found!
image not found!
image not found!
image not found!
image not found!
image not found!
myMock-desk-banner-bg
Spring Boot is continuously coming with new ways to make the process of building applications easier. Today, it’s one of the most used technology with Java to create web applications. In this Spring Boot interview questions’ article, I have discussed the top 60 questions with proper explanation and examples. These questions are collected after consulting with experts and will definitely help you to ace the interviews. 

So, let us get started!

Top Spring Boot Interview Questions and Answers
Spring Boot Interview Questions for Freshers
Spring Boot Interview Questions for Experienced
 

Spring Boot Interview Questions and Answers for Freshers
Q1. Spring vs Spring Boot
Spring	Spring Boot
A web application framework based on Java	A module of Spring
Provides tools and libraries to create customized web applications	Used to create a Spring application project which can just run/ execute
Spring is more complex than Spring Boot	Spring Boot is less complex than the Spring framework
Takes an unopinionated view	Takes an opinionated view of a platform
Q2. What is Spring Boot and mention the need for it?
Spring Boot is a Spring module that aims to simplify the use of the Spring framework for Java development. It is used to create stand-alone Spring-based applications that you can just run. So, it basically removes a lot of configurations and dependencies. Aiming at the Rapid Application Development, Spring Boot framework comes with the auto-dependency resolution, embedded HTTP servers, auto-configuration, management endpoints, and Spring Boot CLI.

So, if you ask me why should anybody use Spring Boot, then I would say, Spring Boot not only improves productivity but also provides a lot of conveniences to write your own business logic.

Q3. Mention the advantages of Spring Boot
The advantages of Spring Boot are as follows:

Provides auto-configuration to load a set of default configuration for a quick start of the application
Creates stand-alone applications with a range of non-functional features that are common to large classes of projects
It comes with embedded tomcat, servlet containers jetty to avoid the usage of WAR files
Spring Boot provides an opinionated view to reduce the developer effort and simplify maven configurations
Provides CLI tool to develop and test applications
Comes with Spring Boot starters to ensure dependency management and also provides various security metrics
Consists of a wide range of APIs for monitoring and managing applications in dev and prod.
Integrates with Spring Ecosystem like Spring JDBC, Spring ORM, Spring Data, Spring Security easily by avoiding boilerplate code.
Q4. Mention a few features of Spring Boot.
Few important features of Spring Boot are as follows:

Spring CLI – Spring Boot CLI allows you to Groovy for writing Spring boot application and avoids boilerplate code.
Starter Dependency – With the help of this feature, Spring Boot aggregates common dependencies together and eventually improves productivity
Auto-Configuration – The auto-configuration feature of Spring Boot helps in loading the default configurations according to the project you are working on. In this way, you can avoid any unnecessary WAR files.
Spring Initializer – This is basically a web application, which can create an internal project structure for you. So, you do not have to manually set up the structure of the project, instead, you can use this feature.
Spring Actuator –  This feature provides help while running Spring Boot applications.
Logging and Security – The logging and security feature of Spring Boot, ensures that all the applications made using Spring Boot are properly secured without any hassle.
Q5. Explain how to create a Spring Boot application using Maven.
Well, there are various approaches to create a Spring Boot application using maven, but if I have to name a few, then following are the ways to create a Spring Boot project/ application using maven:

Spring Boot CLI
Spring Starter Project Wizard
Spring Initializr
Spring Maven Project
Q6. Mention the possible sources of external configuration.
There is no doubt in the fact that Spring Boot allows the developers to run the same application in different environments. Well, this is done with the support it provides for external configuration. It uses environment variables, properties files, command-line arguments, YAML files, and system properties to mention the required configuration properties. Also, the @value annotation is used to gain access to the properties. So, the most possible sources of external configuration are as follows:

Application Properties – By default, Spring Boot searches for the application properties file or its YAML file in the current directory, classpath root or config directory to load the properties.

Command-line properties – Spring Boot provides command-line arguments and converts these arguments to properties. Then it adds them to the set of environment properties.

Profile-specific properties –  These properties are loaded from the application-{profile}.properties file or its YAML file. This file resides in the same location as that of the non-specific property files and the{profile} placeholder refers to an active profile.

Q7. Can you explain what happens in the background when a Spring Boot Application is “Run as Java Application”?
When a Spring Boot application is executed as “Run as Java application”, then it automatically launches up the tomcat server as soon as it sees, that you are developing a web application. To learn more about Java, it’s recommended to join Java training course today at Edureka.

Top 5 Backend Frameworks to Learn in 2025



In this video on Top 5 Backend Frameworks to Learn in 2025 We’ll look at the most popular frameworks shaping web development. We’ll start by giving a brief introduction to backend frameworks and their importance in creating scalable and reliable online applications. We’ll then cover the top choices for 2025, going over their characteristics and applications.

Spring Boot starters are a set of convenient dependency management providers that can be used in the application to enable dependencies. These starters, make development easy and rapid. All the available starters come under the org.springframework.boot group. Few of the popular starters are as follows:

spring-boot-starter: – This is the core starter and includes logging, auto-configuration support, and YAML.
spring-boot-starter-jdbc – This starter is used for HikariCP connection pool with JDBC
spring-boot-starter-web – Is the starter for building web applications, including RESTful, applications using Spring MVC
spring-boot-starter-data-jpa – Is the starter to use Spring Data JPA with Hibernate
spring-boot-starter-security – Is the starter used for Spring Security
spring-boot-starter-aop: This starter is used for aspect-oriented programming with AspectJ and  Spring AOP
spring-boot-starter-test: Is the starter for testing Spring Boot applications
Q9. Explain Spring Actuator and its advantages.
Spring Actuator is a cool feature of Spring Boot with the help of which you can see what is happening inside a running application. So, whenever you want to debug your application, and need to analyze the logs you need to understand what is happening in the application right? In such a scenario, the Spring Actuator provides easy access to features such as identifying beans, CPU usage, etc. The Spring Actuator provides a very easy way to access the production-ready REST points and fetch all kinds of information from the web. These points are secured using Spring Security’s content negotiation strategy.

Q10. What is Spring Boot dependency management?
Spring Boot dependency management is basically used to manage dependencies and configuration automatically without you specifying the version for any of that dependencies.

Q11. Mention the minimum requirements for a Spring boot System.
Spring Boot Logo - Spring Boot Interview Questions - EdurekaSpring Boot 2.1.7.RELEASE requires

Java 8 +
Spring Framework 5.1.9 +
Explicit build support

Maven 3.3+
Gradle 4.4+
Servlet Container Support

Tomcat 9.0 – Servlet Version 4.0
Jetty 9.4 –  Servlet Version 3.1
Undertow 2.0 – Servlet Version 4.0
Q12. Explain what is thymeleaf and how to use thymeleaf?
Thymeleaf is a server-side Java template engine used for web applications. It aims to bring natural template for your web application and can integrate well with Spring Framework and HTML5 Java web applications. To use Thymeleaf, you need to add the following code in the pom.xml file:

1
2
3
4
&amp;lt;dependency&amp;gt;    
&amp;lt;groupId&amp;gt;org.springframework.boot&amp;lt;/groupId&amp;gt;    
&amp;lt;artifactId&amp;gt;spring-boot-starter-thymeleaf&amp;lt;/artifactId&amp;gt;    
&amp;lt;/dependency&amp;gt;    
Q13. Can we change the port of the embedded Tomcat server in Spring boot?
Yes, we can change the port of the embedded tomcat server by using the application properties file. In this file, you have to add a property of “server.port” and assign it to any port you wish to. For example, if you want to assign it to 8081, then you have to mention server.port=8081. Once you mention the port number, the application properties file will be automatically loaded by Spring Boot and the required configurations will be applied on to the application.

Q14. What is the need for Spring Boot DevTools?
Spring Boot Dev Tools are an elaborated set of tools and aims to make the process of developing an application easier. If the application runs in the production, then this module is automatically disabled, repackaging of archives are also excluded by default. So, the Spring Boot Developer Tools applies properties to the respective development environments.  To include the DevTools, you just have to add the following dependency into the pom.xml file:

1
2
3
4
&amp;lt;dependency&amp;gt;
    &amp;lt;groupId&amp;gt;org.springframework.boot&amp;lt;/groupId&amp;gt;
    &amp;lt;artifactId&amp;gt;spring-boot-devtools&amp;lt;/artifactId&amp;gt;
&amp;lt;/dependency&amp;gt;
Q15. Mention the steps to create a Spring Boot project using Spring  Initializer.
Spring Initializr is a web tool provided by Spring. With the help of this tool, you can create Spring Boot projects by just providing project details. The following steps need to be followed to create a Spring Boot project using Spring Initializer:

Choose the maven project and the required dependencies. Then, fill in the other required details like Group, Artifact, and then click on Generate Project.
Once the project is downloaded, extract the project onto your system
Next, you have to import this project using the import option on the Spring Tool Suite IDE
While importing the project, remember that you have to choose the project type to be Maven and the source project should contain the pom.xml file.
Once, all the above steps are followed you will see that the Spring Boot project is created with all the required dependencies.

Q16. Mention the steps to connect Spring Boot application to a database using JDBC.
Spring Boot starter projects provide the required libraries to connect the application with JDBC. So, for example, if you just have to create an application  and connect it with MySQL database, you can follow the below steps:

Step 1: Create a database in MySQL

1
CREATE DATABASE example;
Step 2: Then you have to create a table inside this database.

1
CREATE TABLE customers(customerid INT PRIMARY KEY NOT NULL AUTO_INCREMENT, customername VARCHAR(255));  
Step 3: Now, create a Spring Boot project and provide the required details

Step 4: Add the JDBC, MySQL and web dependencies.

Step 5: Once the project is created, you have to configure the database into application properties

1
2
3
4
spring.datasource.url=jdbc:mysql://localhost:3306/example
spring.datasource.username=root  
spring.datasource.password=edureka  
spring.jpa.hibernate.ddl-auto=create-drop  
Step 6: The main application.java class should have the following code:

1
2
3
4
5
6
7
8
9
package com.edureka;  
import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;  
@SpringBootApplication  
public class SampleApplication {  
    public static void main(String[] args) {  
        SpringApplication.run(SampleApplication.class, args);  
    }  
} 
Step 7: Next, you have to create a controller to handle the HTTP requests, by mentioning the following code:

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
package com.edureka;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class JdbcController {
@Autowired
JdbcTemplate jdbc;
@RequestMapping("/insert")
public String index(){
jdbc.execute("insert into customers(name)values('Aryya')");
return "Data Entry Successful";
}
}
Step 8: Finally, execute this project as a Java application.
Step 9: Next, open the URL (localhost:8080/insert), and you will see the output as Data Entry Successful. You can also go forward and check if the data is entered into the table.

Q17. How to enable HTTP/2 support in Spring Boot?
You can enable the HTTP/2 support in Spring Boot by: server.http2.enabled=true

Q18.  What are the @RequestMapping  and @RestController annotation in Spring Boot used for?
@RequestMapping	@RestController
This annotation is used to provide the routing information and tells to Spring that any HTTP request must be mapped to the respective method.	This annotation is used to add the @ResponseBody and @Controller annotation to the class
To use this annotation, you have to import org.springframework.web.
bind.annotation.RequestMapping;

To use this annotation, you have to import org.springframework.web.
bind.annotation.RestController;

Example: Consider you have a method example() which should map with /example URL.

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
package com.edureka; 
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController; 
@RestController 
public class SampleController { 
@RequestMapping("/example") 
public String example(){ 
return"Welcome To Edureka"; 
} 
} 
Q19. What is Spring Boot CLI and how to execute the Spring Boot project using boot CLI?
Spring Boot CLI is a tool supported by the official Spring Framework. The steps to execute a Spring Boot project are as follows:

Download the CLI tool from the official site and extract the zip file. The bin folder present in the Spring setup is used to execute the Spring Boot application.
Since Spring Boot CLI executes groovy files, you need to create a groovy file for Spring Boot application. So, to do that, open terminal and change the current directory to the bin folder. Now, open a groovy file (for example Sample.groovy)
In this file create a controller as follows:
@RestController   public class Sample {   
 @RequestMapping("/example")   
 String index(){   
<h1>"Welcome To Edureka"</h1>;  
}   }
Then execute the groovy file by mentioning:

1
./spring run Sample.groovy;
Once, the project is executed go to the URL(localhost:8080:/example) and you will see the output as Welcome To Edureka

In case you are facing any challenges with these Spring Boot interview questions, please comment on your problems in the comment section below.

Q20. Mention the differences between JPA and Hibernate.
JPA	Hibernate
JPA is a Data Access Abstraction used to reduce the amount of boilerplate code	Hibernate is an implementation of Java Persistence API and offers benefits of loose coupling
Q21. How can we create a custom endpoint in Spring Boot Actuator?
To create a custom endpoint in Spring Boot 2.x, you can use the @Endpoint annotation. Spring Boot also exposes endpoints using @WebEndpointor, @WebEndpointExtension over HTTP with the help of Spring MVC, Jersey, etc.

Q22. Explain Spring Data.
Spring Data aims to make it easy for the developers to use relational and non-relational databases, cloud-based data services, and other data access technologies. So, basically, it makes it easy for data access and still retains the underlying data.

Q23. What do you understand by auto-configuration in Spring Boot and how to disable the auto-configuration?
Auto-configuration is used to automatically configure the required configuration for the application. For example, if you have a data source bean present in the classpath of the application, then it automatically configures the JDBC template. With the help of auto-configuration, you can create a Java application in an easy way, as it automatically configures the required beans, controllers, etc. 

To disable the auto-configuration property, you have to exclude attribute of @EnableAutoConfiguration, in the scenario where you do not want it to be applied.

1
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
If the class is not on the classpath, then to exclude the auto-configuration, you have to mention the following code:

1
@EnableAutoConfiguration(excludeName={Sample.class})
Apart from this, Spring Boot also provides the facility to exclude list of auto-configuration classes by using the spring.autoconfigure.exclude property. You can go forward, and add it either in the application.properties or add multiple classes with comma-separated.

Q24. What are the differences between @SpringBootApplication and @EnableAutoConfiguration annotation?
@SpringBootApplication	@EnableAutoConfiguration
Used in the main class or bootstrap class	Used to enable auto-configuration  and component scanning in your project
It is a combination of @Configuration, @ComponentScan and @EnableAutoConfiguration annotations.	It is a combination of @Configuration and @ComponentScan annotations
Q25. What are the steps to deploy Spring Boot web applications as JAR and WAR files?
To deploy a Spring Boot web application, you just have to add the following plugin in the pom.xml file:

1
2
3
4
&amp;lt;plugin&amp;gt;
    &amp;lt;groupId&amp;gt;org.springframework.boot&amp;lt;/groupId&amp;gt;
    &amp;lt;artifactId&amp;gt;spring-boot-maven-plugin&amp;lt;/artifactId&amp;gt;
&amp;lt;/plugin&amp;gt;
By using the above plugin, you will get a JAR executing the package phase. This JAR will contain all the necessary libraries and dependencies required. It will also contain an embedded server. So, you can basically run the application like an ordinary JAR file.
Note: The packaging element in the pom.xml file must be set to jar to build a JAR file as below:

1
&amp;lt;packaging&amp;gt;jar&amp;lt;/packaging&amp;gt;
Similarly, if you want to build a WAR file, then you will mention

1
&amp;lt;packaging&amp;gt;war&amp;lt;/packaging&amp;gt;
Q.26 Can you give an example for ReadOnly as true in Transaction management?
Example for ReadOnly as TRUE in transaction management could be as follows:

Consider a scenario, where you have to read data from the database. For example, let us say you have a customer database, and you want to read the customer details such as customerID, and customername. To do that, you will set read-only on the transaction as we do not want to check for the changes in the entities.

Q27. Can you explain how to deploy to a different server with Spring Boot?
To deploy a different server with Spring Boot, follow the below steps:

Generate a WAR from the project
Then, deploy the WAR file onto your favorite server
Note: The steps to deploy the WAR file on the server is dependent on the server you choose.

Want to upskill yourself to get ahead in your career? Check out this video
Top 10 Technologies To Learn In 2025


Q28: What is the best way to expose custom application configuration with Spring Boot?
One way to expose the custom application configuration in Spring Boot is by using the @Value annotation. But, the only problem with this annotation is that all the configuration values will be distributed throughout the application. Instead, you can use a centralized approach.

By centralized approach, I mean that you can define a configuration component using the @ConfigurationProperties as follows:

1
2
3
4
5
6
@Component
@ConfigurationProperties("example")
public class SampleConfiguration {
private int number;
private boolean value;
private String message;
According to the above snippet, the values configured in application.properties will be as follows:

1
2
3
example.number: 100
example.value: true
example.message: Dynamic Message
Q29. Can we create a non-web application in Spring Boot?
Yes, we can create a non-web application by removing the web dependencies from the classpath along with changing the way Spring Boot creates the application context.

Q 30. What are the steps to connect an external database like MySQL or Oracle?
To connect an external database, you have to follow the below steps:

Start by adding the dependency for MySQL Connector to pom.xml
Then remove H2 Dependency from pom.xml
Now, set up your MySQL database and configure your connection to the MySQL database
Restart your project
Spring Boot Interview Questions and Answers for Experienced
Q31. Mention the advantages of the YAML file than Properties file and the different ways to load YAML file in Spring boot.
The advantages of the YAML file than a properties file is that the data is stored in a hierarchical format. So, it becomes very easy for the developers to debug if there is an issue. The SpringApplication class supports the YAML file as an alternative to properties whenever you use the SnakeYAML library on your classpath. The different ways to load a YAML file in Spring Boot is as follows:

Use YamlMapFactoryBean to load YAML as a Map
Use YamlPropertiesFactoryBean to load YAML as Properties
Q32. How is Hibernate chosen as the default implementation for JPA without any configuration?
When we use the Spring Boot Auto Configuration, automatically the spring-boot-starter-data-jpa dependency gets added to the pom.xml file. Now, since this dependency has a transitive dependency on JPA and Hibernate, Spring Boot automatically auto-configures Hibernate as the default implementation for JPA, whenever it sees Hibernate in the classpath. 

Q33. What do you understand by Spring Data REST?
Spring Data REST is used to expose the RESTful resources around Spring Data repositories. Consider the following example:

1
2
3
@RepositoryRestResource(collectionResourceRel = "sample", path = "sample")
public interface SampleRepository
        extends CustomerRepository&amp;lt;sample, Long&amp;gt; {
Now, to expose the REST services, you can use the POST method in the following way:

1
2
3
{
"customername": "Rohit"
}
Response Content

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
{
"customername": "Rohit"
"_links": {
"self": {
"href": "http://localhost:8080/sample/1"
},
"sample": {
"href": "http://localhost:8080/sample/1"
}
}
Observe that the response content contains the href of the newly created resource.

Q34. What is the difference between RequestMapping and GetMapping?
The @GetMapping is a composed annotation that acts as a shortcut for @RequestMapping(method = RequestMethod.GET). Both these methods support the consumes. The consume options are :

consumes = “text/plain”
consumes = {“text/plain”, “application/*”}

Q35. In which layer, should the boundary of a transaction start?
The boundary of the transaction should start from the Service Layer since the logic for the business transaction is present in this layer itself.

Q36. How does path=”sample”, collectionResourceRel=”sample” work with Spring Data Rest?
1
2
3
@RepositoryRestResource(collectionResourceRel = "sample", path = "sample")
public interface SampleRepository extends
PagingAndSortingRepository&amp;lt;Sample, Long&amp;gt;
path – This section is used to mention the segment under which the resource is to be exported.
collectionResourceRel – This value is used to generate links to the collection resource.
Q37. Explain how to register a custom auto-configuration.
In order to register an auto-configuration class, you have to mention the fully-qualified name under the @EnableAutoConfiguration key META-INF/spring. factories file. Also, if we build the with maven, then this file should be placed in the resources/META-INT directory. 

Q38. How do you Configure Log4j for logging?
Since Spring Boot supports Log4j2 for logging a configuration, you have to exclude Logback and include Log4j2 for logging. This can be only done if you are using the starters project.

Q39. Mention the differences between WAR and embedded containers
WAR	Embedded Containers
WAR benefits a considerable measure from Spring Boot	Only one component of Spring Boot and is utilized during improvements
Q40. What do you think is the need for Profiles?
Profiles are used to provide a way to segregate the different parts of the application configuration and make it available for various environments. So, basically, any @Component or a @Configuration can be marked with a @Profile to limit as it is loaded. Consider you have multiple environments,

Dev
QA
Stage
Production
Now, let’s say, you want to have different application configuration in each of the environments, you can use profiles to have different application configurations for different environments. So, basically, Spring and Spring Boot provide features through which you can specify:

The active profile for a specific environment
The configuration of various environments for various profiles.
Q41. What are the steps to add a custom JS code with Spring Boot?
The steps to add a custom JS code with Spring Boot are as follows:

Now, create a folder and name it static under the resources folder
In this folder, you can put the static content in that folder
Note: Just in case, the browser throws an unauthorized error, you either disable the security or search for the password in the log file, and eventually pass it in the request header.

Q42. How to instruct an auto-configuration to back off when a bean exists?
To instruct an auto-configuration class to back off when a bean exists, you have to use the @ConditionalOnMissingBean annotation. The attributes of this annotation are as follows:

value: This attribute stores the type of beans to be checked
name: This attribute stores the name of beans to be checked
Q43. Why is Spring Data REST not recommended in real-world applications?
Spring Data REST is not recommended in real-world applications as you are exposing your database entities directly as REST Services. While designing RESTful services, the two most important things that we consider is the domain model and the consumers. But, while using Spring Data REST, none of these parameters are considered. The entities are directly exposed. So, I would just say, you can use Spring Data REST, for the initial evolution of the project.

Q44. What is the error you see if  H2 is not in the classpath?
If H2 is not present in the classpath, then you see the following error:

Cannot determine embedded database driver class for database type NONE

To resolve this error, add H2 to the pom.xml file, and restart your server.
The following code snippet can be added to add the dependency:

1
2
3
4
5
&amp;lt;dependency&amp;gt;
    &amp;lt;groupId&amp;gt;com.h2database&amp;lt;/groupId&amp;gt;
    &amp;lt;artifactId&amp;gt;h2&amp;lt;/artifactId&amp;gt;
    &amp;lt;scope&amp;gt;runtime&amp;lt;/scope&amp;gt;
&amp;lt;/dependency&amp;gt;
Q45. What is the way to use profiles to configure the environment-specific configuration with Spring Boot?
Since it is a known fact that a Profile is nothing but a key to identify an environment lets consider the following two profiles in the example:

dev
prod
Consider the following properties present in the application properties file:
example.number: 100
example.value: true
example.message: Dynamic Message

Now, say you want to customize the application.properties for dev profile, then you need to create a file with name application-dev.properties and override the properties that you want to customize. You can mention the following code:

example.message: Dynamic Message in Dev
Similarly, if you want to customize the application.properties for prod profile, then you can mention the following code snippet:

example.message: Dynamic Message in Prod
Once you are done with the profile-specific configuration, you have to set the active profile in an environment. To do that, either you can

Use -Dspring.profiles.active=prod in  arguments
Use spring.profiles.active=prod in application.properties file
Q46. Mention the dependencies needed to start up a JPA Application and connect to in-memory database H2 with Spring Boot?
The dependencies are needed to start up a JPA Application and connect to in-memory database H2 with Spring Boot

web starter
h2
data JPA starter
To include the dependencies refer to the following code:
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
&amp;lt;dependency&amp;gt;
    &amp;lt;groupId&amp;gt;org.springframework.boot&amp;lt;/groupId&amp;gt;
    &amp;lt;artifactId&amp;gt;spring-boot-starter-web&amp;lt;/artifactId&amp;gt;
&amp;lt;/dependency&amp;gt;
&amp;lt;dependency&amp;gt;
    &amp;lt;groupId&amp;gt;com.h2database&amp;lt;/groupId&amp;gt;
    &amp;lt;artifactId&amp;gt;h2&amp;lt;/artifactId&amp;gt;
    &amp;lt;scope&amp;gt;runtime&amp;lt;/scope&amp;gt;
&amp;lt;/dependency&amp;gt;
&amp;lt;dependency&amp;gt;
    &amp;lt;groupId&amp;gt;org.springframework.boot&amp;lt;/groupId&amp;gt;
    &amp;lt;artifactId&amp;gt;spring-boot-starter-data-jpa&amp;lt;/artifactId&amp;gt;
&amp;lt;/dependency&amp;gt;
Q47. What do you understand by Spring Boot supports relaxed binding?
Relaxed binding, is a way in which, the property name does not need to match the key of the environment property. In Spring Boot, relaxed binding is applicable to the type-safe binding of the configuration properties. For example, if a property in a bean class with the @ConfigurationPropertie annotation is used sampleProp, then it can be bounded to any of the following environment properties:

sampleProp
sample-Prop
sample_Prop
SAMPLE_PROP
Q48.  Where is the database connection information specified and how does it automatically connect to H2?
Well, the answer to this question is very simple. It is because of the Spring Boot auto-configuration that, configures the dependencies of the application. So, the database connection information, and automatically connecting the database to H2 is done by the auto-configuration property.

Q49. What is the name of the default H2 database configured by Spring Boot?
The name of the default H2 database is testdb.  Refer below:

spring.datasource.name=testdb # Name of the datasource.
Note: Just incase if you are using H2 in-memory database, then exactly that is the name of Spring Boot which is used to setup your H2 database.

Q50. Do you think, you can use jetty instead of tomcat in spring-boot-starter-web?
Yes, we can use jetty instead of tomcat in spring-boot-starter-web, by removing the existing dependency and including the following:

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
&amp;amp;lt;dependency&amp;amp;gt;
    &amp;amp;lt;groupId&amp;amp;gt;org.springframework.boot&amp;amp;lt;/groupId&amp;amp;gt;
    &amp;amp;lt;artifactId&amp;amp;gt;spring-boot-starter-web&amp;amp;lt;/artifactId&amp;amp;gt;
    &amp;amp;lt;exclusions&amp;amp;gt;
        &amp;amp;lt;exclusion&amp;amp;gt;
            &amp;amp;lt;groupId&amp;amp;gt;org.springframework.boot&amp;amp;lt;/groupId&amp;amp;gt;
            &amp;amp;lt;artifactId&amp;amp;gt;spring-boot-starter-tomcat&amp;amp;lt;/artifactId&amp;amp;gt;
        &amp;amp;lt;/exclusion&amp;amp;gt;
    &amp;amp;lt;/exclusions&amp;amp;gt;
&amp;amp;lt;/dependency&amp;amp;gt;
&amp;amp;lt;dependency&amp;amp;gt;
    &amp;amp;lt;groupId&amp;amp;gt;org.springframework.boot&amp;amp;lt;/groupId&amp;amp;gt;
    &amp;amp;lt;artifactId&amp;amp;gt;spring-boot-starter-jetty&amp;amp;lt;/artifactId&amp;amp;gt;
&amp;amp;lt;/dependency&amp;amp;gt;
Q51. What are the Spring Boot key components?
Here are the key components of Spring Boot:

Auto-configuration: One of the most attractive features of Spring Boot is its ability to automatically configure your application based on the dependencies you’ve added to your project. For example, if you have a MySQL database driver on your classpath, Spring Boot auto-configures a DataSource.
Starter Dependencies: Spring Boot provides a set of starter projects to simplify your build configuration. These starters bring in all the dependencies you’ll need for a specific type of application. For instance, if you are developing a web application, you can add the spring-boot-starter-web dependency to your project, and it will include all necessary dependencies.
Embedded Servers: Spring Boot has embedded Tomcat, Jetty, and Undertow servers, meaning you don’t need to deploy WAR files. Your Spring Boot application can be a standalone application with an embedded server.
Actuator: The Spring Boot Actuator module provides production-ready features to help you monitor and manage your application. It includes features like health checks, metrics gathering, HTTP tracing, etc.
CLI (Command Line Interface): This is another key component of Spring Boot, which is optional. The CLI allows you to develop Spring Boot applications using Groovy. It simplifies the code structure by automatically adding all the necessary annotations and imports.
Q52. Why Spring Boot over Spring?
Due to the following reasons:

Simplicity & Speed: Spring Boot simplifies the bootstrapping and development process of Spring applications. It’s easier and quicker to set up a new Spring application with Spring Boot, which makes it ideal for beginners and for situations where speed of development is important.
Auto-configuration: Spring Boot offers ‘auto-configuration’ which takes the guesswork out of configuring Spring applications. It can automatically provide configuration properties based on what it sees on your application’s classpath. For example, if Spring Boot detects HSQLDB on your classpath, it will automatically configure an in-memory database for you.
Embedded Servers: Spring Boot applications can include an embedded servlet container (like Tomcat, Jetty, or Undertow), allowing them to be packaged as standalone executable JARs. This is very convenient for microservice architectures and for cloud-based deployment, as there is no need for external servlet containers.
Q53. What is the starter dependency of the Spring boot module?
Here are some of the commonly used Spring Boot Starter dependencies:

spring-boot-starter-web: It is used for building web, including RESTful, applications using Spring MVC. It uses Tomcat as the default embedded container.
spring-boot-starter-data-jpa: It simplifies the development of Spring applications that use data access technologies, relational databases, and distributed databases providing powerful capabilities such as Spring Data JPA, Hibernate, DataSource setup, and others.
spring-boot-starter-security: It is used for Spring Security. It is a powerful and customizable authentication and access-control framework.
spring-boot-starter-test: It is used for testing Spring Boot applications with libraries including JUnit, Hamcrest and Mockito.
spring-boot-starter-data-rest: It is used to expose simple RESTful services using Spring Data REST.
Q54. What does the @SpringBootApplication annotation do internally?
The @SpringBootApplication annotation is a convenience annotation in Spring Boot that adds all of the following:

@Configuration: Designates this class as a configuration class. Configuration classes are the heart of Java-based application configuration in Spring. They can use @Bean annotated methods to specify bean definitions.
@EnableAutoConfiguration: Enables Spring Boot’s auto-configuration feature, which attempts to automatically configure your application based on the dependencies in its classpath. For example, if Spring MVC is on the classpath, this annotation flags the application to be web-applicable and activates key behaviors like setting up a DispatcherServlet.
@ComponentScan: Enables component scanning. This allows Spring to automatically discover other components, configurations and services in the same package as the one where the @SpringBootApplication is placed, allowing it to automatically manage them (i.e., create bean instances for your classes at application startup).
Q55. What is the purpose of using @ComponentScan in the class files?
@ComponentScan is an annotation that is used with @Configuration to tell Spring the packages to scan for annotated components. Annotated components include other @Configuration classes, as well as @Component, @Service, @Repository, @Controller, and @RestController, among others.When Spring finds these components, it automatically registers the beans in the application context. 

Q56. What is Spring Initializer?

Spring Initializr is a web-based tool provided by the Spring team, which allows users to quickly bootstrap a Spring Boot application. It’s designed to help you start a new Spring Boot project within seconds.

You can access Spring Initializr through the following URL: https://start.spring.io/. Some IDEs, like IntelliJ IDEA and Spring Tools Suite (STS), have integrated support for Spring Initializr, which means you can create a new project via Initializr right from within the IDE.

Q57 . How are the @RestController and @Controller Annotations different?
The key differences between  @RestController and @Controller Annotation are ;

Aspect	Controller	RestController
Use purpose	@Contoller is primarily used for traditional web application	@RestContolller is primarily used to build RESTful services.
Return value	The return value of @Controllre is a view name, i.e., string or object	The return value of @RestController is a domain object which is further automatically converted to JSON or XML
Response body	For methods returning data directly, @Controller requires @ResponseBody annotation.	It does not require @ResponseBody annotation. It automatically serializes  return values to the HTTP response body
View Resolution	Supports a view resolution	It does not support view resolution
Q58.  What differentiates Spring Data JPA and Hibernate?
The difference between Spring Data JPA and hibernate is ;

Spring Data JPA and Hibernate are two important tools in the Java ecosystem that handle data persistence; however, they both have different purposes.

Hibernate is a framework for object-relational mapping through which a database interacts natively. It allows Creating Java objects from database records and vice versa. It will enable very granular control over database operations, making it possible to write complex SQL queries for performance optimization.

Spring Data JPA provides support for JPA, and hence, Hibernate is one of the JPA providers. It further eases data access to a very large extent by putting one more level of abstraction on top of JPA called ‘repository abstraction.’ This allows for the declaration of data access methods in an intuitive naming convention. Spring Data JPA then auto-generates the underlying implementation, hence minimizing boilerplate code and increasing development speed.

While Hibernate provides a high degree of low-level control, Spring Data JPA is focused more on ease of use and adhering to all the conventions in Spring. These factors often turn out to be a question of project needs. In most cases, Spring Data JPA will be preferred for ease and simplicity, while Hibernate will be preferred in complex scenarios where fine-grained database control is needed.

Q59. What is a Swagger in Spring Boot?
Swagger is a way of designing, documenting, and visualizing your API. Another view is a blueprint that developers and consumers can use to see and understand what the API builds.

Combined with Spring Boot, interactive documentation is automatically created out of the code, saving time and effort in writing documentation.

The resulting documentation gives a bird’ s-eye view of your API’s endpoints, request and response formats, and related features. API calls can be directly tested from within the documentation, which makes it invaluable for development and testing purposes.

Swagger on Spring Boot ensures you have a living, breathing guide to your API, ensuring everyone is on the same page.

Q60. What annotations are used to create an Interceptor?
There is no direct annotation used to create an interceptor in the spring boot, but you need to implement

HandlerInterceptor interface. While there’s no specific annotation, you can use annotations like @Component to register the interceptor as a Spring bean.

Q61. Creating a Project Using Spring Initializr Through Browser
Open Spring Initializr in your browser.

Select Project Metadata:

Project: Either Maven Project or Gradle Project can be chosen according to preference.

Language: Java, Kotlin or Groovy

Spring Boot: Here, select the version of Spring Boot you want to use

Project metadata: details shall have to be filled in as illustrated below:

Group- your company/organization name, e.g., com. example

Artifact: the project name, e.g. demo

Name: project name.

Description: A short description of your project.

Package Name: The root package for your project. For example, com. example.demo

Packaging: Jar or War.

Java Version: Which version of Java do you want to use?

Add Dependencies:

Click the Add Dependencies button to add any libraries that you may need in your project. Some other common dependencies are the following:

Spring Web: This adds the dependencies required for building web applications.

Spring Data JPA: Used for database operations.

Thymeleaf: A library used for template rendering.

Spring Security: Used for authentication and authorization.

H2 Database: This is an in-memory database for testing purposes.

You can look up specific dependencies and add those that are relevant to your project.

Generate the Project:

Click the Generate button. You will download a .zip file containing your Spring Boot project.

Extract and Import the Project:

Extract the .zip file to your preferred directory.

Now, import the project into your IDE – this could be IntelliJ IDEA, Eclipse, or VS Code:

For IntelliJ IDEA: Open the folder extracted in File -> Open. For Eclipse: Open the folder extracted in File -> Import -> Existing Maven Projects or Gradle Projects. For VS Code: Open the folder using Java Extension Pack. Spring Boot in IDEs with built-in Wizards IntelliJ IDEA Open IntelliJ IDEA: Go to File -> New -> Project. Now, select Spring Initializr: Now, choose Initializr Spring and click Next. Configure Project:

Install the project metadata in the same way you use the Spring Initializr web interface.

Select the Dependencies you require.

Generate Project:

Next, Finish. IntelliJ IDEA creates the project and automatically imports it.

Eclipse

Open Eclipse:

File -> New -> Other

Spring Project:

Select Spring Starter Project and press Next.

Configure Project:

Now fill in your project’s metadata and select dependencies

Finish:

Press Finish. Eclipse creates the project and imports it automatically.

Run the Application

Go to the Project:

Open your project in your IDE or Command-Line. Run the Application:

Using an IDE: Search for a file called DemoApplication.java—or your main application class—and run it as a Java application.

Using the command line: Navigate to the root of your project directory and type the following commands in the terminal: bashCopy code./mvnw spring-boot: run  # For Maven projects./gradlew boot run       # For Gradle project success, the Application:

By default, Spring Boot runs on port 8080. Now, you can access your application through http://localhost:8080.

With this, we come to an end to this article on Spring Boot Interview Questions. I hope this set of Spring Boot Interview Questions and Answers will help you in preparing for your interviews. All the best! If you want to learn Spring and wish to use it while developing Java applications, then check out the Spring Certification Training by Edureka, a trusted online learning company with a network of more than 250,000 satisfied learners spread across the globe.

 

FAQS
What will the Spring Boot Interview Questions be for 5 Years Experience?
The key topics that you can practice if you have five years or more experience in the same field ;

Spring boot framework
Microservices architecture with spring boot
Debugging
Database optimization
Asynchronous processing
Architechture and design
Testing strategies

What are the most common Spring Boot interview questions?
Q1. Spring vs. Spring Boot
Q2. What is Spring Boot, and mention the need for it?
Q3. Mention the advantages of Spring Boot
Q4. Mention a few features of Spring Boot.
Q5. Explain how to create a Spring Boot application using Maven
Q6. Mention the possible sources of external configuration.
Q7. Can you explain what happens in the background when a Spring Boot Application is “Run as Java Application”?
Q8. What are the Spring Boot starters, and what are available the starters
Q9. Explain the Spring Actuator and its advantages.
Q10. What is Spring Boot dependency management?

For more questions, you can refer to the blog.

How can I prepare for Spring Boot interview questions?
To prepare for spring boot interview questions, you first have to start with the basics. After you cover the basics, try to master the intermediate and advanced-level questions. For spring boot interview questions, refer to the blog.

What will the Spring Boot Interview Questions be for 2-3 Years of Experience?
Q1. Spring vs. Spring Boot
Q2. What is Spring Boot, and mention the need for it?
Q3. Mention the advantages of Spring Boot
Q4. Mention a few features of Spring Boot.
Q5. Explain how to create a Spring Boot application using Maven
Q6. Mention the possible sources of external configuration.
Q7. Can you explain what happens in the background when a Spring Boot Application is “Run as Java Application”?
Q8. What are the Spring Boot starters, and what are available the starters
Q9. Explain the Spring Actuator and its advantages.
Q10. What is Spring Boot dependency management?

For more spring boot interview questions from beginners to advanced, you can refer to the blog.

Got a question for us? Please mention it in the comments section of “Spring Boot Interview Questions” and we will get back to you.

Recommended videos for you
building-application-with-ruby-on-rails-framework.jpg
Building Application With Ruby On Rails Framework
microsoft-sharepoint-2013-the-ultimate-enterprise-collaboration-platform.jpg
Microsoft Sharepoint 2013 : The Ultimate Enterprise Collaboration Platform
php-and-mysql-server-side-scripting-for-web-development.jpg
PHP and MySQL : Server Side Scripting For Web Development
hibernate-the-ultimate-orm-framework.jpg
Hibernate-the ultimate ORM framework
create-restful-web-application-with-node-js-express.jpg
Create Restful Web Application With Node.js Express
responsive-web-app-using-cakephp.jpg
Responsive WEB APP using cakePHP
node-js-steps-to-create-restful-web-app.jpg
Node JS : Steps to Create Restful Web App
a-day-in-the-life-of-a-node-js-developer.jpg
A Day In The Life Of A Node.js Developer
rapid-development-with-cakephp.jpg
Rapid Development With CakePHP
node-js-express-steps-to-create-restful-web-app.jpg
Node JS Express: Steps to Create Restful Web App
service-oriented-architecture-with-java.jpg
Service-Oriented Architecture With Java
spring-framework-introduction-to-spring-web-mvc-spring-with-bigdata.jpg
Spring Framework : Introduction to Spring Web MVC & Spring with BigData
JAVA-J2EE-WEBINAR-600x3501_-300x175.png
Introduction to JAVA/J2EE & SOA
nodejs-communication-and-round-robin-way.jpg
NodeJS – Communication and Round Robin Way
ms-net-an-intellisense-way-of-web-development.jpg
MS .Net – An IntelliSense Way of Web Development
mastering-regex-in-perl.jpg
Mastering Regex in Perl
introduction-to-javaj2ee-soa.jpg
Introduction to JAVA/J2EE & SOA
portal-development-and-text-searching-with-hibernate.jpg
Portal Development and Text Searching with Hibernate
effective-persistence-using-orm-with-hibernate.jpg
Effective Persistence Using ORM With Hibernate
implementing-web-services-in-java.jpg
Implementing Web Services In Java
Recommended blogs for you
array-search-in-PHP-300x175.jpg
All you need to know about Array Search in PHP
Synchronization-in-Java_-300x175.jpg
Synchronization in Java: What, How and Why?
Bootstarp-Gallery--300x175.png
All You Need to Know About Bootstrap Gallery
mqdefault-1-300x169.jpg
Introduction to Errors in Java
Full-Stack-Developer-Skills-Edureka-300x152.jpg
Full Stack Developer Skills, Salary and Jobs
servlet-interview-question-300x175.png
Top 55 Servlets Interview Question You Need to Know in 2025
DependencyInjection_BlogFeature-1-300x175.png
What Is Dependency Injection? – Know How To Implement Dependency Injection
Dynamic-Web-Pages-in-Java-300x175.jpg
Dynamic Web Pages In Java: How To Create Web Pages In Java?
JavaScript-interview-questions-300x175.jpg
Top 90+ JavaScript Interview Questions and Answers for 2025
Bootstrap-Testimonial-Slider-300x175.jpg
What is Bootstrap Testimonial Slider and how to design it?
Conditional-Operator-in-Java-300x175.jpg
What is Conditional Operator in Java and how to write it?
JavaScript-Tutorial-300x175.jpg
JavaScript Tutorial for Beginners : A Complete Guide
Assertions-in-Java--300x175.png
How To Best Utilize Assertions in Java?
Java-Math-abs-300x175.jpg
Everything You Need To Know About Java Math abs()
Brief-Introduction-to-Java-Thread.yield_-300x175.jpg
How to Implement thread.yield() in Java: Examples
split-in-php-300x175.jpg
Split in PHP: What is str_split() function
Exit-function-in-Java-300x175.jpg
How do you exit a function in Java?
Why-String-is-Immutable-in-Java-300x175.jpg
Immutable String in Java: All you Need to Know
file1-300x210.png
File Operations in C
Django-Tutorial-300x175.png
Django Tutorial – Web Development with Python Django Framework
Comments
0 Comments
Join the discussion

Trending Courses in Programming & Frameworks
Python Scripting Certification Training
Python Scripting Certification Training
15k Enrolled Learners
Weekend
Self Paced
Reviews
 5 (5900)
Browse Categories
Artificial IntelligenceAWSBI and VisualizationBig DataBlockchainBusiness ManagementCloud ComputingCyber SecurityData ScienceData Warehousing and ETLDatabasesDevOpsDigital MarketingEnterpriseFront End Web DevelopmentHuman Resource ManagementInterview QuestionsMobile DevelopmentOperating SystemsOperations ManagementProduct ManagementProject Management and MethodologiesRobotic Process Automationseo interview questionSoftware TestingStrategy and LeadershipSupply Chain ManagementSystems & Architecture
Subscribe to our Newsletter, and get personalized recommendations.
 Already have an account? Sign in.×
edureka logo
TRENDING CERTIFICATION COURSES
Advanced DevOps Certification Training with GenAI
Agentic AI Certification Training Course
LLM Prompt Engineering Certification Course
Data Science with Python Certification Course
Power BI Certification Training with Gen AI
MLOps Certification Course
Artificial Intelligence Certification Course
TRENDING MASTERS COURSES
Generative AI(Gen AI ) Masters Program
Post Graduate Program in Gen AI and ML
Doctor of Business Administration by Birchwood
Integrated MS+PGP Program in Data Science & AI
MS in Data Science by Birchwood
European Global Doctorate of Business Administration (DBA)
European Global MS in Data Science and AI
EIMT Doctorate in Computer Science (DCS)
COMPANY
About us
News & Media
Reviews
Contact us
Blog
Community
Sitemap
Blog Sitemap
Community Sitemap
Webinars
WORK WITH US
Careers
Become an Instructor
Become an Affiliate
Become a Partner
Hire from Edureka
DOWNLOAD APP
apple_store google_playstore
CATEGORIES
Cloud Computing DevOps Big Data Data Science BI and Visualization Programming & Frameworks Software Testing Project Management and Methodologies Robotic Process Automation Frontend Development Data Warehousing and ETL Artificial Intelligence Blockchain Databases Cyber Security Mobile Development Operating Systems Architecture & Design Patterns Digital Marketing
TRENDING BLOG ARTICLES
Selenium tutorial Selenium interview questions Java tutorial What is HTML Java interview questions PHP tutorial JavaScript interview questions Spring tutorial PHP interview questions Inheritance in Java Polymorphism in Java Spring interview questions Pointers in C Linux commands Android tutorial JavaScript tutorial jQuery tutorial SQL interview questions MySQL tutorial Machine learning tutorial Python tutorial What is machine learning Ethical hacking tutorial SQL injection AWS certification career opportunities AWS tutorial What Is cloud computing What is blockchain Hadoop tutorial What is artificial intelligence Node Tutorial Collections in Java Exception handling in java Python Programming Language Python interview questions Multithreading in Java ReactJS Tutorial Data Science vs Big Data vs Data Analytics Software Testing Interview Questions R Tutorial Java Programs JavaScript Reserved Words and Keywords Implement thread.yield() in Java: Examples Implement Optical Character Recognition in Python All you Need to Know About Implements In Java
Address:
4th Floor, No. 38/4, Outer Ring Rd, adjacent to Dell EMC2, Doddanekkundi, Mahadevapura, Bengaluru, Karnataka 560048
© 2026 Brain4ce Education Solutions Pvt. Ltd. All rights Reserved. Terms & Conditions Legal & Privacy
   
"PMP®","PMI®", "PMI-ACP®" and "PMBOK®" are registered marks of the Project Management Institute, Inc. MongoDB®, Mongo and the leaf logo are the registered trademarks of MongoDB, Inc.
image not found!
Top 60+ Spring Boot Interview Questions That Are A Must in 2025
edureka.co


image not found!
Whatsapp
image not found!
Linkedin
image not found!
Twitter
image not found!
Facebook
image not found!
Reddit

Copy Link
image not found!


Spring Framework предоставляет многочисленные модули и функциональности, и владение ими является ключевым для успешной работы с этим фреймворком. На собеседовании могут быть заданы вопросы, которые помогут оценить ваше знание основных принципов и возможностей Spring Framework. Проверьте свои навыки и подготовьтесь к собеседованию с помощью этой статьи.

10 вопросов для java-специалиста по Spring Framework на собеседовании: проверьте свои навыки
Spring Framework является одним из наиболее популярных фреймворков для разработки приложений на языке программирования Java. Он предоставляет мощный инструментарий для создания масштабируемых и гибких приложений, основанных на принципах инверсии управления (IoC) и аспектно-ориентированного программирования (AOP). Если вы являетесь java-специалистом и имеете опыт работы с Spring Framework, то вас могут попросить пройти собеседование, где проверят ваши навыки и знания.

В этой статье мы рассмотрим 10 вопросов, которые могут быть заданы вам на собеседовании и помогут вам проверить свои навыки в работе с Spring Framework.

1. Что такое Spring Framework?

Spring Framework - это фреймворк для разработки приложений на языке программирования Java. Он предоставляет набор инструментов и API для упрощения процесса разработки, включая управление зависимостями, обработку транзакций, аспектно-ориентированное программирование и многое другое.

2. Каковы основные преимущества Spring Framework?

Spring Framework предлагает ряд преимуществ, включая:

- Легкость интеграции с другими фреймворками и технологиями

- Упрощение разработки и тестирования приложений

#
Читайте также

Разработка анимационных проектов для книг и публикаций

12 августа 2024

- Поддержка инверсии управления и внедрения зависимостей

- Реализация аспектно-ориентированного программирования

- Поддержка транзакционности и безопасности

- Масштабируемость и гибкость при работе с различными типами приложений

3. Что такое IoC (Inversion of Control) в Spring Framework?

IoC - это принцип программирования, при котором объекты не создают и не управляют своими зависимостями самостоятельно, а получают их из внешнего источника. В Spring Framework IoC реализуется с помощью контейнера, который берет на себя ответственность за создание и управление объектами, а также их зависимостями.

4. Какова роль ApplicationContext в Spring Framework?

ApplicationContext - это основной интерфейс в Spring Framework, который предоставляет контейнер для управления объектами. Он обеспечивает функциональность IoC, включая инстанцирование бинов, внедрение зависимостей, обработку событий и т.д. ApplicationContext также обеспечивает поддержку различных функций, таких как межпоточная безопасность, кеширование и локализация.

5. Что такое бин в Spring Framework?

Бин - это объект, управляемый контейнером ApplicationContext в Spring Framework. Бины определяются и конфигурируются с помощью XML-файлов, аннотаций или Java-кода. Каждый бин имеет уникальный идентификатор и может иметь свойства, зависимости и методы, которые контейнер Spring будет управлять.

6. Какова роль аннотации @Autowired в Spring Framework?

Аннотация @Autowired используется в Spring Framework для внедрения зависимостей автоматически. Когда Spring обнаруживает аннотацию @Autowired над полем, методом или конструктором, он будет автоматически внедрять соответствующий бин или компонент в это место. Это позволяет сделать код более читаемым и уменьшить необходимость в явном создании и связывании объектов.

7. Что такое AOP (Aspect-Oriented Programming) в Spring Framework?

AOP - это парадигма программирования, которая позволяет разделить функциональность на модули, называемые аспектами, и изолировать их от основной логики приложения. В Spring Framework AOP позволяет внедрять такие аспекты в приложение, обеспечивая высокую степень модульности и переиспользуемости кода. Аспекты могут быть применены к методам, конструкторам или советам, что позволяет разделять логику, такую как логирование, транзакционность и безопасность, от основного кода.

8. Каковы способы конфигурации Spring Framework?

Spring Framework поддерживает несколько способов конфигурации, включая:

- XML-конфигурация: бины и их зависимости описываются в XML-файле

- Аннотации: аннотации встроены непосредственно в код Java и позволяют указывать настройки и зависимости

- JavaConfig: конфигурация производится с использованием Java-кода, где бины создаются и связываются в явном виде

9. Что такое Spring Boot?

Spring Boot - это подпроект Spring Framework, предназначенный для упрощения процесса конфигурации и развертывания приложений на основе Spring. Он предоставляет множество автоматических конфигураций и включает в себя встроенный сервер приложений, что позволяет создавать self-contained (все в одном) исполняемые JAR-файлы. Spring Boot также поддерживает монолитные и микросервисные архитектуры, предоставляя мощный инструментарий для разработки и управления приложениями.

10. Каковы лучшие практики использования Spring Framework?

При использовании Spring Framework существуют несколько лучших практик, которые могут помочь вам создавать качественные и эффективные приложения:

- Использование интерфейсов при определении бинов и зависимостей

- Применение аннотаций для упрощения конфигурации и внедрения зависимостей

А ты уже нашел работу?

Найти работу
- Избегание использования слишком многословного кода и избыточной конфигурации

- Тестирование кода с использованием инструментов, предоставляемых Spring Framework, таких как Mockito и JUnit

- Следование принципам SOLID и учет основных принципов объектно-ориентированного программирования

Теперь, когда вы получили обзор некоторых вопросов по Spring Framework, вы можете легко проверить свои знания и навыки на собеседовании. Удачи!

10 вопросов для java-специалиста по spring framework на собеседовании: проверьте свои навыки
Если вы думаете, что вам все известно о Spring Framework, значит, вы ничего не знаете.
Род Джонсон
Вопрос	Ответ
1. Что такое Spring Framework?	Spring Framework - это платформа, которая предоставляет обширный набор инструментов и функциональности для разработки приложений на языке Java. Он облегчает создание сложных приложений, основанных на Java, путем предоставления готовых компонентов и абстракций, упрощающих работу с различными аспектами приложения.
2. Что такое Dependency Injection (DI) в Spring Framework?	Dependency Injection (DI) - это паттерн проектирования, который используется в Spring Framework для управления зависимостями между классами. Вместо того, чтобы класс самостоятельно создавать зависимые объекты, DI позволяет передавать объекты-зависимости в класс через конструкторы, сеттеры или поля. Это упрощает тестирование, повторное использование кода и создание слабосвязанных компонентов.
3. Какие основные модули входят в Spring Framework?	Spring Framework состоит из нескольких модулей, включая Core Container, Data Access/Integration, Web, AOP (Aspect-Oriented Programming), и Test. Core Container предоставляет основные функциональные возможности, включая DI и IoC (Inversion of Control). Data Access/Integration модуль упрощает работу с базами данных и другими источниками данных. Web модуль позволяет разрабатывать веб-приложения. AOP модуль предоставляет поддержку аспектно-ориентированного программирования. Test модуль предоставляет инструменты для тестирования приложений.
4. Что такое Spring MVC?	Spring MVC (Model-View-Controller) - это модуль Spring Framework, который обеспечивает разработку веб-приложений, используя паттерн MVC. MVC разделяет приложение на три основных компонента: модель, представление и контроллер. Модель представляет данные, представление отвечает за отображение данных пользователю, а контроллер обрабатывает запросы от пользователя и определяет, какие данные предоставить представлению.
5. Что такое инверсия управления (IoC) в Spring?	Инверсия управления (IoC) в Spring означает, что объекты не создают или не управляют своими зависимостями напрямую, а получают их из внешнего источника, такого как контейнер Spring. В IoC контейнер Spring управляет жизненным циклом объектов и внедряет их зависимости, что упрощает создание и поддержку приложений.
6. Что такое Spring Boot?	Spring Boot - это проект, основанный на Spring Framework, который упрощает разработку микросервисных приложений и приложений в облаке. Он предоставляет автоматическую конфигурацию и готовые начальные настройки, что упрощает создание приложений без необходимости вручную настраивать множество параметров. Spring Boot также обеспечивает удобство в установке, развертывании и масштабировании приложений.
7. Что такое AOP в Spring?	AOP (Aspect-Oriented Programming) в Spring - это парадигма программирования, которая позволяет разделять логику приложения на модули, называемые аспектами. Аспекты могут охватывать несколько классов и перекрываться существующую функциональность, позволяя внедрять совместное поведение в различные части приложения. В Spring AOP это достигается с помощью средств, таких как советы (advices), перехватчики (interceptors) и точки среза (join points).
8. Какие подходы к тестированию приложений предоставляет Spring Framework?	Spring Framework предоставляет несколько подходов к тестированию приложений, включая модульное тестирование (unit testing), интеграционное тестирование (integration testing) и тестирование с использованием моков (mock testing). Модульное тестирование позволяет тестировать отдельные классы или методы в изоляции от других зависимостей. Интеграционное тестирование проверяет взаимодействие между различными компонентами приложения. Тестирование с использованием моков позволяет имитировать внешние зависимости и тестирует реакцию приложения на определенные события.
9. Какие преимущества предоставляет использование Spring Framework?	Использование Spring Framework предоставляет несколько преимуществ, включая повышение производительности и безопасности приложений, улучшенную масштабируемость и удобство в разработке. Spring Framework облегчает создание сложных приложений благодаря своему модульному подходу и готовым компонентам. Он также упрощает тестирование и поддержку приложений. Spring Framework имеет развитую сообщество и обширную документацию, что делает его популярным выбором для разработчиков Java.
10. Какая роль у Spring Security?	Spring Security - это модуль Spring Framework, который обеспечивает аутентификацию, авторизацию и управление доступом в веб-приложениях. Он предоставляет интегрированные механизмы для защиты приложений от несанкционированного доступа и атак. Spring Security позволяет определять права доступа для различных пользователей и ролей, а также обеспечивает безопасность передачи данных между клиентом и сервером.
Основные проблемы по теме "10 вопросов для java-специалиста по spring framework на собеседовании: проверьте свои навыки"
1. Вопросы по IoC и DI
На собеседованиях по Spring Framework часто задают вопросы, связанные с пониманием и применением принципов Inversion of Control (IoC) и Dependency Injection (DI). Кандидату требуется дать объяснение этих концепций, а также продемонстрировать практические навыки использования Spring для решения задач DI.

Одной из проблем, с которой сталкиваются специалисты, является недостаточное понимание основных принципов IoC и DI. В связи с этим, кандидаты могут испытывать сложности при объяснении, как работает Spring Framework и каким образом внедряются зависимости.

Еще одной распространенной проблемой является неумение применять DI-контейнер Spring для внедрения зависимостей в различные компоненты приложения. Специалисты могут испытывать затруднения в настройке и конфигурации контекста Spring и определении бинов с помощью аннотаций.

2. Проблемы с конфигурацией и настройкой Spring
На собеседовании часто задают вопросы о конфигурации и настройке Spring Framework для работы с различными компонентами приложения. Кандидат должен продемонстрировать знание различных способов конфигурации Spring контекста, включая XML-конфигурации, аннотации и Java-конфигурации.

Одной из проблем, с которыми могут столкнуться java-специалисты, является незнание синтаксиса и правил конфигурации в XML-файлах Spring. К сожалению, некорректная конфигурация может привести к ошибкам в работе приложения или его неожиданному поведению.

Кроме того, некоторые специалисты могут иметь проблемы с пониманием и использованием аннотаций для конфигурации Spring контекста. Они могут не знать, как правильно указать аннотации на классах, методах или полях, а также какие аннотации использовать для различных компонентов и зависимостей.

3. Проблемы с использованием Spring MVC
Spring MVC – это модуль Spring Framework, отвечающий за построение веб-приложений и реализацию шаблона проектирования MVC (Model-View-Controller). На собеседованиях по Spring часто задают вопросы о работе с Spring MVC, включая конфигурацию контроллеров, обработку запросов и передачу данных между компонентами MVC.

Одной из проблем, с которыми сталкиваются специалисты, является недостаточное понимание аннотаций и правил конфигурации в Spring MVC. Кандидаты могут испытывать затруднения в настройке маппинга URL-адресов на методы контроллеров или передаче данных из модели в представление и обратно.

Еще одной распространенной проблемой является неумение обрабатывать исключения в Spring MVC. Специалисты могут испытывать сложности при настройке глобального обработчика исключений или обработке конкретных исключений в методах контроллеров.

Существует множество основных технологических платформ, включая веб-платформы (например, HTML, CSS, JavaScript), мобильные платформы (например, iOS, Android), десктопные платформы (например, Windows, macOS) и серверные платформы (например, Java, Python).

Выбор технологической платформы зависит от конкретных требований проекта. Определите, какая платформа лучше всего соответствует задачам и целям проекта, а также учитывайте доступные ресурсы (например, опыт команды разработчиков, бюджет). Используйте также обратную связь от пользователей и рыночные тренды в выборе платформы.

При разработке приложения необходимо учесть такие технологические аспекты, как выбор языка программирования, фреймворка или библиотеки, архитектура приложения, взаимодействие с базой данных, оптимизация производительности, безопасность и тестирование. Также стоит учесть масштабируемость и поддержку приложения в долгосрочной перспективе.

Материал подготовлен командой it-vacancies.ru

Подписывайся

Читайте также

#
Разработка и реализация социальных проектов на заказ
20 марта 2025

#
Разработка файтингов
7 июня 2024

#
Настоящие правила трудоустройства для студентов
11 июля 2023


info@it-vacancies.ru
Клиентам

Контакты
Рейтинг работодателей

Скоро
Мы в СМИ

Скоро
Работодателям

Разместить вакансии
Найти сотрудников
Резюме по профессиям
Цены и услуги
Соискателям

Добавить резюме
Поиск вакансий
Каталог компаний
Вакансии по профессиям
Работа рядом с метро
FAQ

Скоро
Уровень зарплат

Скоро
Полезное

Работа у нас
Блог
Поддержка
База знаний
Документы

Скоро
Исследования

Скоро
Вакансии по категориям

Менеджер
Аналитик
Бухгалтер
Инженер
Администратор
Дизайнер
Маркетолог
Программист
Геймдизайнер
Консультант
Копирайтер
Разработчик игр
Тестировщик
Архитектор сети
Редактор
Сценарист игр
Руководитель проектов
Иллюстратор
Верстальщик
Публичная оферта
Карта сайта
Политика конфиденциальности
Это ваш город?

Москва



Веб-разработчики часто используют микросервисы для создания небольших, независимых и легко обслуживаемых приложений. Ресурсы с открытым исходным кодом, такие как Spring Boot, помогают им оптимизировать внедрение архитектуры микросервисов. Если вы являетесь веб-разработчиком, от вас может потребоваться понимание Spring Boot и некоторых технических основ.

В этой статье мы приводим 55 вопросов для собеседования по Spring Boot и даем несколько примеров ответов, которые помогут вам подготовиться к собеседованию.

Что такое Spring Boot?
Spring Boot - это ресурс с открытым исходным кодом для создания микросервисов и архитектуры, которая делает бизнес более эффективным. Микросервисы, разработанные в Spring Boot, называются весенними приложениями.

Микросервисы необходимы для предприятий, нуждающихся в индивидуальной настройке для наилучшего обслуживания клиентов. Многие крупные розничные компании и сервисы цифровых потоков используют микросервисы для решения проблем с пропускной способностью. Вместо того чтобы миллионы людей пытались использовать одну точку доступа в Интернете, архитектура микросервисов помогает крупным компаниям разделить трафик на более управляемые сегменты.

Spring Boot помогает некоторым корпоративным предприятиям достичь этой и других целей. Это фреймворк на базе Java, что делает его предсказуемым и последовательным для любого разработчика, специализирующегося на Java.

Предварительная подготовка к собеседованию по Spring Boot
Независимо от того, начинающий вы или опытный разработчик, вот несколько шагов, которые помогут вам подготовиться к собеседованию по Spring Boot:

Вспомните свой предыдущий опыт работы с Spring Boot.

Обзор распространенных вопросов на собеседовании и примеры ответов.

Составьте список вопросов о компании, культуре и рабочей среде.

Перечислите вопросы, которые интервьюер может задать о конкретной роли, на которую вы претендуете.

Подумайте, как вы можете лучше всего ответить на эти вопросы.

Используйте стратегию STAR для ответов на вопросы
Стратегия STAR предлагает вам рассказать о своем опыте, предложив сложную ситуацию, объяснив свою роль в задачах по ее разрешению, подробно описав, какие действия вы предприняли, и отметив решение. STAR расшифровывается как ситуация, задача, действие и результат. Этот метод поможет вам подготовить четкие и лаконичные ответы, используя реальные примеры из жизни.

Используя стратегию STAR, вы полностью отвечаете на вопрос интервьюера, демонстрируя при этом, как вы преодолели предыдущие трудности.

Общие вопросы
Ниже приведен список общих вопросов для собеседования, с которыми вы можете столкнуться, когда начнете проходить собеседование в качестве программиста. Будьте готовы ответить на подобные вопросы, а также на специализированные вопросы о Spring Boot:

Какими навыками должен обладать программист?

Расскажите, когда вы взяли на себя ответственность за новый проект, и опишите результат.

Опишите, как бы вы рассказали человеку о сложной технической теме простыми словами.

Какие ваши любимые языки программирования и почему?

Расскажите о случае, когда вы чувствовали, что не очень хорошо общаетесь с командой, и как вы решили эту проблему.

Как вы справлялись с крупными изменениями в проекте в прошлом? Как вы адаптируете?

Написать или исправить строку кода.

Почему вы ищете новую работу?

Каковы ваши ожидания по зарплате?

Что вы ищете в рабочей среде?

Вопросы для собеседования по Spring Boot
Просмотрите эти вопросы для собеседования, чтобы получить вводные вопросы о Spring Boot:

Что такое Spring Boot?

Что такое Spring по сравнению с Spring Boot?

Обсудите преимущества использования Spring Boot.

Как работает Spring Boot?

Как настроить проект Spring Boot?

Что такое автоконфигурация?

Как отключить автоконфигурацию в Spring Boot?

Каков процесс регистрации пользовательской автоконфигурации в Spring Boot?

Можете ли вы перечислить доступные стартеры Spring Boot?

Что такое стартовые зависимости?

Объясните свой опыт работы с Spring Boot.

Какими наиболее важными навыками должен обладать программист Spring Boot?

Каковы преимущества использования Spring Boot?

Что такое инициализатор Spring?

Что такое Spring Boot CLI и в чем его преимущества?

Каковы ключевые компоненты Spring Boot?

Что делает аннотация @ SpringBoot Application внутри приложения?

Какова цель использования @ Component Scan в файлах классов?

Каковы наиболее распространенные команды Spring Boot CLI?

Какой аспект Spring Boot является вашей самой сильной стороной? Ваши самые слабые зависимости?

Расширенные вопросы для собеседования по Spring Boot
Эти вопросы могут задать менеджеры по найму, чтобы определить ваш уровень знаний о Spring Boot?

Какие основные аннотации предлагает Spring Boot?

Что такое управление зависимостями в Spring Boot?

Можно ли создать не веб-приложение в Spring Boot?

Можно ли изменить порт встроенного сервера Tomcat в Spring Boot?

Какой порт по умолчанию используется для Tomcat в Spring Boot?

Можете ли вы переопределить или заменить встроенную службу Tomcat в Spring Boot?

Можно ли отключить веб-сервер по умолчанию в приложении Spring Boot?

Как отключить определенный класс автоконфигурации?

Объясните аннотацию @ RestController в Spring Boot.

В чем разница между @ RestControll и @ Controller в Spring Boot?

Опишите поток HTTPS-запросов через приложение Spring Boot?

В чем разница между RequestMapping и GetMapping?

Для чего используются профили в Spring Boot?

Что такое Spring Actuator? Каковы его преимущества?

Как включить Actuator в приложении Spring Boot?

Какие конечные точки, предоставляемые приводом, используются для мониторинга приложения Spring Boot?

Как получить список всех бобов в приложении Spring Boot??

Как проверить свойства среды в приложении Spring Boot?

Как включить отладочный журнал в приложении Spring Boot?

Что такое контейнер IoC?

Вопросы для собеседования с образцами ответов
Вот несколько вопросов для собеседования по Spring Boot с примерами ответов:

1. Каков ваш опыт работы с Spring Boot?
Если вы идете на собеседование по Spring Boot, то общим вопросом может быть описание вашего опыта работы с Spring Boot и микросервисами. Успешный ответ на этот вопрос означает готовность рассказать о том, как вы разрабатывали и внедряли микросервисы, особенно если вы использовали Spring Boot.

Пример: Я использовал Spring Boot для создания инфраструктуры микросервисов в моей текущей роли. Это помогло нам решить проблемы с пропускной способностью при увеличении числа пользователей на нашей собственной программной платформе.

2. Какими навыками должен обладать программист Spring Boot?
Если вы собираетесь сделать карьеру в области микросервисной архитектуры, вы должны обладать определенными навыками. К ним относятся:

Знание архитектуры

Навыки DevOps и контейнеризации

Моделирование домена

Безопасность

Тестирование

При выборе навыков, которые вы должны обсудить, вы можете обратиться к описанию вакансии работодателя до собеседования, а затем выбрать два или три навыка из описания вакансии для обсуждения.

Пример: Я горжусь глубоким знанием архитектуры и имею сертификат CompTIA Security+. Моя способность безопасно создавать архитектуру микросервисов является преимуществом для компаний, в которых я могу работать.

3. Объясните, что такое микросервис в простой форме
Когда вас просят просто описать что-то, важно убедиться, что вы говорите четко и кратко, так, чтобы другие люди могли понять, даже если они не являются технически подкованными.

Пример: Микросервисы - это небольшие, содержащие архитектуру, которые составляют часть более крупного сервиса . Используя микросервисы, предприятия могут перераспределять трафик с одного сервиса на множество более мелких, что позволяет более эффективно использовать ресурсы и повышает удобство работы конечного пользователя.

4. Что вы понимаете под инъекцией зависимостей и контейнером Spring IoC?
Spring использует специальный принцип проектирования, называемый инверсией управления (IoC), который управляет зависимостями проводки, и инъекция зависимостей является одним из его аспектов. Вы должны хорошо понимать оба этих термина, чтобы четко объяснить их.

Пример: IoC дает объектам зависимости вместо того, чтобы создавать или искать зависимые объекты . В ИР говорится, что мы не создаем объекты вручную, а вместо этого описываем процесс их создания. Когда приложение будет запущено, описанные компоненты и сервисы будут свободно связаны между собой необходимыми классами в IoC-контейнере.

5. Что такое бобы Spring?
Spring beans - основа фреймворка Spring. Вы можете объяснить их и управление ими с помощью IoC-контейнера.

Пример: Spring beans - это объекты Java, которые составляют основу приложения. Они инициализируются IoC-контейнером Spring и создаются с помощью предоставленных пользователем метаданных конфигурации.

Рубрика: Карьера и Саморазвитие
Ключевые слова: Вопросы на собеседовании
Источник: indeed.com
Перевод: Дмитрий Л
Поделиться

Популярное сегодня

Когда pet-friendly офис становится причиной конфликта. Как сохранить комфорт сотрудников с аллергией

Контент для привлечения кандидатов: форматы и идеи

10 слов, которые слишком часто используются и которых следует избегать при составлении резюме

Почему кандидаты не доходят до оффера: 7 шагов, чтобы «дожать» воронку подбора

13 вещей, которые никогда не следует говорить на собеседовании
Методики и шаблоны в рубрике
Резюме маркетолога. Образец
Резюме на английском (функциональное)
Пример резюме
Резюме на английском (комбинированное)
Резюме учителя
Добавить на сайт
Возможность добавления публикаций имеют только авторизованные зарегистрированные пользователи.

Зарегистрироваться
Войти
Рассылки
Выберите рассылки, на которые вы хотите или не хотите быть подписанным.

 Новости HR-Portal
 Рассылка HR-Portal (Недельный дайджест)
Электронная почта *
Читайте также
Системы оценки работы
Системы оценки работы

Краткое руководство по нематериальному поощрению сотрудников. Как выразить признательность команде

9 способов мотивировать сотрудников, помимо финансового стимулирования

7 типов сотрудников, которых следует незамедлительно уволить

А сколько времени у Вас уходит на закрытие вакансий?
Подписка на обновления
Информация
О сайте
Контакты
Реклама
Правила
Публикации
Новости
Статьи
Образцы документов
Методики
Файлы
Словарь терминов
Идеи	Есть идея, предложение?
Напишите нам | Все идеи
© 2004-Н.В. HR-Portal: Сообщество HR-Менеджеров




11 вопросов на собеседовании по Spring Boot, которые заставляют задуматься
Мар 5, 2021
—

от автора

admin

Большинство списков вопросов интервью по Boot заставляют вас запоминать случайные детали из документации Spring Boot. Но запоминание — плохая замена истинному пониманию и уверенности в знании Spring Boot.

Поэтому сегодня мы собираемся применить другой подход. Вместо того, чтобы перечислять 50 вопросов по мелочам Spring Boot, мы сосредоточимся на 11, которые заставят вас задуматься и, таким образом, многому научиться на этом пути.

Вот эти вопросы в произвольном порядке.

Примечание: если вы сами проводите интервью по Spring Boot, возможно, вы захотите задать эти вопросы в открытом формате, ведущем к обсуждениям, вместо того, чтобы ожидать ответов из учебников

1. Верно или ложно следующее утверждение: «Каждое приложение Spring Boot — это веб-приложение, работающее во встроенном Apache Tomcat». Обоснуйте свой ответ.
Ответ
2. В чем разница между Spring Boot и Spring MVC? Или между Spring Boot и Spring Framework? Можете ли вы использовать их вместе в одном проекте?
Ответ
3. Назовите два способа создать новый проект Spring Boot с нуля? Кроме того, как узнать, какие Spring Boot стартеры нужны вашему проекту?
Ответ
4. Почему вам не нужно указывать версии зависимостей в файле pom.xml при включении сторонних библиотек? Верно ли это для всех сторонних библиотек или только для некоторых? Как узнать, какие библиотеки поддерживает Spring Boot?
Ответ
5. Вы хотите сделать свое приложение настраиваемым, скажем, указать разное соединение с базой данных для среды разработки и рабочей среды. Какие у вас есть варианты?
Ответ
6. Верно или неверно следующее утверждение: «Каждый проект Spring Boot должен использовать Thymeleaf в качестве механизма создания шаблонов HTML». Какие у вас есть возможности для рендеринга HTML?
Ответ
7. Как можно реализовать доступ к реляционной базе данных с помощью Spring Boot? Какие у вас есть варианты?
Ответ
8. Вам необходимо настроить ведение журнала в своем приложении, но вы хотите различать уровни журнала на вашем компьютере и уровни журнала в разных средах (qa, test, prod). Какие у вас есть варианты?
Ответ
9. Как проще всего развернуть приложение Spring Boot в рабочей среде? Какие еще есть варианты?
Ответ
10. Вам сказали включить «Spring Security» в вашем приложении. Что происходит, когда вы добавляете стартер Spring Security в свое приложение?
Ответ
11. Как узнать, какие автоконфигурации Spring Boot применяются при запуске и какие условия оцениваются?
Ответ
Заключение
Очевидно, нет никакой гарантии, что вы ответите на эти вопросы на собственном собеседовании по Spring Boot, хотя знание (и понимание) ответов на них должно стать прочной основой для любого интервью.

Если вы хотите получить более глубокое представление обо всей экосистеме Spring, вы также можете ознакомиться с другими статьями о Spring в блоге автора.

Примечание переводчика. Переводы 2 статей из блога  автора о Spring есть на Хабр:

Что такое Spring Framework? От внедрения зависимостей до Web MVC

Spring MVC: создание веб-сайтов и RESTful сервисов

Из комментариев читателей. Одно замечание по вопросу № 3., я думаю, что рядом с Initializr также Bootify.io — хороший вариант.


20 Spring Interview Questions and Answers to Know (With MVC & Boot)
2024-11-28
15 min read
Written by Arc Team
how to answer Spring Interview Questions
Written by
Arc Team

Summary:
Want top Spring interview questions and answers to practice? Land the job you want with this technical interview preparation guide.

Spring has just celebrated its 20th anniversary in late 2022, and the Java framework isn’t showing signs of waning popularity. In fact, on our job board, we have hundreds of Spring jobs available for remote developers at any given time.

Anyway, if you made it here, you probably have a Spring interview coming up —

As a hiring manager, what are some of the common and most up-to-date Spring Framework interview questions to ask?

In the guide below, we’ll walk you through Spring interview questions and answers, from basic ones on the fundamentals to tougher questions on aspect-oriented programming, model-view-controller, JDBC, and more. After each of these popular interview questions on Spring, we’ll explain what you should look for in your candidate’s answers.

Let’s get started, shall we?

Looking to hire the best remote developers? Arc can help you:

⚡️ Get instant candidate matches without searching
⚡️ Identify top applicants from our network of 350,000+
⚡️ Hire 4x faster with vetted candidates (qualified and interview-ready)

Try Arc to hire top developers now →

Spring, Spring Core, and Spring IoC Interview Questions
What is a Spring configuration file?
A Spring configuration file defines the relationship between different classes in the Spring application.

As an interviewer asking this question about the Spring configuration file, you should know that it can be defined differently. Essentially, it defines application behavior by allowing you to declare configurations such as Beans and Bean life cycles.

While the file is traditionally defined as an XML file, these can also be defined as @Configuration annotations through Spring Core. The annotation method is a modern way of defining Spring configurations and is becoming more commonplace than the XML file. Therefore, it’s important to recognize that questions about the @Configuration annotation are very similar to questions about the Spring configuration file.

What is the Spring IoC (Inversion of Control) Container?
The Spring IoC Container enables dependency injection by managing bean instantiation and configuration. These are commonly defined with ApplicationContext or BeanFactory. Since these serve as a centralized interface for application configuration, every project typically begins with a boilerplate setup of the ApplicationContext.

IoC is a software principle that enables us to have a loose coupling between objects. In the Spring ecosystem, IoC is displayed when Spring creates an object and provides that object additional metadata and dependencies on its behalf. This is essentially a dependency injection. When you ask your candidate about Spring IoC, they should know that it is essentially a dependency injection in action.

How do you use dependency injection with Spring?
Dependency injection can be achieved in Spring through XML configurations, Spring annotations such as @Autowire, and configuring the IoC container through ApplicationContext. By using dependency injection, you can make one service available in another without having to explicitly initialize one since Spring will manage its life cycle.

While @Autowire is commonly used for setting up dependency injection, Spring 4.3+ will actually scan your classes to manage them on your behalf. This question is perfect if you want to gauge whether your candidate’s familiar with newer versions of Spring!

What is the difference between constructor injection and setter injection?
You may ask your candidates about these types of injections to gauge their depth of understanding regarding Spring dependency injection.

Setter injection defines dependencies after an object is instantiated. Constructor injection defines dependencies when an object is created. In practice, setter injection is typically used for optional dependencies, and constructor injection is used for mandatory dependencies that are required for expected behavior.

To follow up, you may ask your candidate to provide an example of how they may have used setter or constructor injection in object definitions. This helps you better understand whether their understanding of Spring dependency injections is mostly theoretical or backed by hands-on experience.

How does Spring manage Beans differently from other Java objects?
Understanding the difference between Spring Beans and Java Beans is crucial for your candidate to be able to explain the abstractions that Spring builds on top of Java. To hire a great Spring developer, you want a strong Java engineer who understands the Spring Framework instead of engineers who can only write applications with Spring Framework.

Spring manages the lifecycle (instantiation, invocation, destructor) of Spring Beans through the IoC container.

It’s important that your candidate doesn’t get Spring Beans mixed up with Java Beans. Java Beans are a concept outside of the scope of Spring and simply define some interfaces that a Java class must-have. A Spring Bean could be a Java Bean if its lifecycle is managed by Spring.

Struggling with interview prep? Meet senior developers from Amazon, Microsoft, and Google now on Codementor. They’ll help you tackle coding challenges, practice interviews, and sharpen your skills in live 1:1 sessions.

Book a session with our interview prep tutors today! Your first 15 minutes are free.

Explore our other software development interview questions and answers to prep for your next remote job.

JavaScript Interview Questions
Machine Learning Interview Questions
MongoDB Interview Questions
TypeScript Interview Questions
Selenium Interview Questions
Spring Interview Questions
Data Engineer Interview Questions
React Interview Questions
Data Analyst Interview Questions
Vue Interview Questions
SQL Interview Questions
DevOps Interview Questions
Engineering Manager Interview Questions
Java Interview Questions
PHP Interview Questions
Ruby on Rails Interview Questions
Angular Interview Questions
Android Interview Questions
Data Warehouse Interview Questions
What are the Bean scopes available in Spring?
As of Spring 5, Spring provides the following Bean scopes: singleton, prototype, request, session, application, and websocket.

If you have created Spring Beans before but did not specify their Bean scopes, then you have been using the singleton scope. Spring will default to using the singleton scope, meaning that one instance of the object will be instantiated during the application’s lifecycle.

Being able to communicate why different Bean scopes should be used can help convey your candidate’s understanding of object lifecycles. Explaining why they chose a specific Bean scope proves that they understand Spring Beans and can make design considerations while producing code. Look for concrete examples of Beans that they have created in the past and why a specific Bean scope was used.

What is the difference between BeanFactory and ApplicationContext?
Both BeanFactory and ApplicationContext are IoC containers used to manage bean life cycles. The difference is that a BeanFactory enables a Bean to be lazy-loaded while ApplicationContext loads beans at application startup.

Spring recommends that you use ApplicationContext instead of BeanFactory unless your application requires memory optimization.

Less-experienced developers would potentially be more eager to use BeanFactory, as it is more performant. A high-quality, experienced developer should be able to explain the design tradeoffs and rationale for why they might choose one over the other.

What is the Bean life cycle in Spring Bean Factory Container?
A Spring Bean is instantiated, its properties are populated, its custom init() method is called, and then ready to be used. Once it’s to be shut down, it calls its destroy() method for cleanup.

You may ask about this to gauge your candidate’s understanding of how Spring manages the overhead of Bean instantiation and destruction and when their custom code is invoked during this process.

When is autowiring used?
Autowiring is used to reduce the amount of user-defined configurations by allowing Spring to make implicit decisions on how to manage dependency injection.

There are several ways to achieve the autowiring, but it’s often used with the @Autowired annotation for field, setter, and constructor injection.

@Autowired is commonly used, and many Spring tutorials have developers follow along to set the annotations in their code without a good understanding of what it’s doing. Explaining how @Autowired is used and how Spring uses this to achieve dependency injection allows your candidates to show their depth of Spring knowledge.

What is autowiring? Can you name the different modes of autowiring?
Autowiring is a way to set up dependency injection by relying on Spring to make injections and thereby reducing configurations defined in the application. Five types of autowiring are supported as of Spring 5: no, byName, byType, constructor, and autodetect. Autowiring with autodetect provides too much implicit setup so is being deprecated by Spring.

If you use the @Autowired annotation and aren’t familiar with the types of autowiring, it’s because @Autowired automatically chooses the corresponding type depending on where it is defined. If you annotate a property or property setter, the byType mode is used.

If you annotate a constructor, the constructor type is mode. Therefore, this question is often used by interviewers to gauge whether an interviewee understands the underlying configurations that Spring annotations can manage on your behalf.

Read More: How to Be More Productive Working at Home

Spring Boot Interview Questions
What is the distinction between Spring Boot and Spring?
Spring Boot is a framework that is an abstraction on top of Spring. It enables developers to efficiently build applications through an opinionated approach. It provides tooling and greatly reduces boilerplate configurations that a developer would typically need in order to build a web application.

Since Spring Boot has reduced a lot of the overhead of setting up configurations, many developers choose it to create backend webservices for RESTful APIs.

Since Spring Boot is very popular, there are many developers who have built projects with Spring Boot but not with Spring. An inexperienced engineer who has only used Spring Boot may force Spring Boot’s abstractions onto a problem when Spring is a better solution. As the interviewer, you’d want to hire an engineer who can explain when it may be appropriate to use Spring over Spring Boot.


Spring MVC Interview Questions
What is the distinction between Spring MVC and Spring?
Spring MVC (Model-View-Controller) is a library in the Spring Framework that is often used to build Java web applications through the Model-View-Controller approach. In short, Spring brings the ability to set up IoC with dependency injection, and Spring MVC uses that functionality to provide a framework for building web applications.

It’s important that your candidate doesn’t get Spring MVC confused with Spring Boot. Spring MVC is configuration-heavy but allows you feature-rich customizations, whereas Spring Boot is very opinionated with the goal of reducing the overhead of having a developer create a productive web application. They can achieve the same results but with varying time spent on development and configuration.

Since Spring MVC and Spring Boot can achieve the same functionality, it’s important that your candidate can distinguish why they may choose to use one over the other.

What is DispatcherServlet in Spring MVC?
The DispatcherServlet streamlines and handles all of the HTTP requests and responses in Spring MVC. It serves as a front controller and delegates all web requests to corresponding controllers for downstream processing.

Instead of specifically asking about the DispatcherServlet, you may ask your candidate to describe the workflow for how an HTTP request goes through Spring. When asked this, it is important that your candidate indicates that all the requests and responses are funneled through the DispatcherServlet.

What is the ViewResolver pattern? Can you explain its significance in Spring MVC?
The ViewResolver pattern manages the different types of view technologies that can be used to render the view. This abstraction makes view technologies configuration-based, enabling decoupling from view technologies such as JSP and XSLT.

This aligns with a common software pattern known as the separation of concerns. A developer can be focused on writing view content. The view resolver will handle the details of how the view content gets processed into different view technologies.

Since view resolvers are for rendering views, it’s important to note that RESTful applications typically do not need them. RESTful applications simply return HTTP responses. Therefore, when you ask your candidate to design a RESTful API using Spring MVC, they should remember to forgo including the view resolver in the design details.

What is a Controller in Spring MVC?
A Spring MVC Controller is a class that’s used to handle web requests. It typically contains the business logic of an application.

Controllers in MVC patterns often manage the “how” of your application code. Usually, your controller logic will involve how you handle the various fields in an inbound HTTP request and how it’s processed into an HTTP response.

You may ask your candidate to use Spring MVC to set up a RESTful application. In these scenarios, you want to see if they choose to use a RestController in lieu of a Spring Controller. A RestController will send raw data as an HTTP response and help simplify their RESTful application.

How does the @Requestmapping annotation Work?
The @RequestMapping annotation defines the method that handles the specified HTTP request. @RequestMapping can generally be configured with values, headers, and request types.

For example, if we have the following request mapping annotating a method:

@RequestMapping(value = "/transactions", method = GET)

This specifies that the method will handle the HTTP GET requests that are made to the /transactions endpoint.

You may ask your candidate to work on a design exercise to map out the requests and responses that an API will handle. This will involve deciding what type of endpoints to create and their corresponding HTTP methods. They may be able to use the @RequestMapping syntax to convey their API design choices.

Spring AOP, Spring JDBC & Spring Hibernate
What is Spring Aspect-Oriented Programming (AOP)?
Spring Aspect-oriented programming (AOP) enables an application to be designed with cross-cutting logic between modules. Spring provides interfaces such as annotations to implement AOP functionality. Spring AOP is configured with an aspect that defines a concern, a joinpoint for when to execute the logic, and a pointcut that applies a specific action known as an advice.

One common example is how an application handles logging. Logging should affect the entire system and be specific to one module in the application. Spring AOP defines a pattern for how logging logic can be defined and integrated into the rest of the application.

You may not explicitly ask your candidate what Spring AOP is for. Instead, you may ask them to explain how they’d design or architect different business requirements into a Spring application. By identifying business functionality that affects other modules, they may be able to propose using Spring AOP to organize their application architecture.

What is an advice? Explain its types in Spring.
An advice is an action that is applied at a specific point of a program’s execution. It can be configured as a before type to run prior to method execution, an after type to run after method execution, and an around type to run before and after method execution.

This provides a powerful pattern for modifying a method’s behavior. For example, imagine that you wanted to understand the execution time for all of your methods. If you were to implement this functionality yourself, you could use the before and after types to cleanly track when the method is about to be invoked and when it finishes.

Knowing how and when to use an advice is a strong signal to the interviewer of your understanding of design principles with Spring. Even if you don’t explicitly ask about advice, you may want to look for developers who are able to offer it as a solution for modeling cross-functional business logic.

What are some of the classes for Spring JDBC API?
One of the core classes in Spring JDBC is the JdbcTemplate class. It handles the overhead of the database connection and exposes an interface to query a relational database. RowMapper and ResultSetExtractor are two classes that are commonly used to handle the data that is returned from a database query.

You may ask this question to gauge your candidate’s familiarity with the Spring JDBC API. The goal isn’t to see if they have memorized every class of the Spring JDBC API. Instead, your goal is to set the stage for your candidate to recall a class and explain the context of when they used it.

What are the tradeoffs for using JdbcTemplate versus Jdbc?
JdbcTemplate is a thin wrapper built on top of Jdbc that removes boilerplate configuration and management of the database connection to make development simpler in Spring. While often unnecessary, one could possibly explore profiling the performance penalty of using JdbcTemplate versus Jdbc when processing large volumes of data due to JdbcTemplate’s overhead.

You may ask this question to gauge whether your candidate follows best practices and uses JdbcTemplate. If they have claimed to have used Jdbc, you may follow up and ask them about their decision to opt out of using JdbcTemplate to validate their design decisions in doing so.

Wrapping Up
Technical interviews aren’t easy, that’s for sure.

Technical interviews aren’t easy, that’s for sure. Keep in mind, while your technical interview’s main purpose is to assess your candidate’s expertise in the framework, how they frame their answers is just as important as what they say. 

When interviewing a Spring developer, make sure to help them draw out their thought process. By setting the stage for your candidate, you can better understand their problem-solving skills and communication skills. Remember, soft skills are just as important as technical skills, so make sure to gauge your candidate’s skills holistically.


55 Spring Boot Interview Questions (With 5 Sample Answers)
Written by
Updated December 15, 2025


On this page
What is Spring Boot?
Preliminary preparations for a Spring Boot interview
General questions
Spring Boot interview questions

Video: Top Common Interview Questions and Answers
Jenn, an Indeed Career Coach, breaks down the intentions behind employer's questions and shares strategies for crafting strong responses.
Web developers often use microservices to build small, independent and easily maintainable applications. Open-source resources like Spring Boot help them streamline the implementation of microservices architecture. If you are a web developer, you may be required to understand Spring Boot and some of the technical basics.
In this article, we outline 55 Spring Boot interview questions and provide some example answers to help you prepare for your interview.
Build confidence interviewing
Practice interviewing and get personalized feedback with Career Scout – only in the app
What is Spring Boot?
Spring Boot is an open-source resource for creating microservices and architecture that makes businesses more efficient. Microservices developed in Spring Boot are called “spring applications.”
Microservices are essential for businesses requiring customization to best serve customers. Many large retailers and digital stream services use microservices to assist with bandwidth issues. Instead of having millions of people trying to use one access point on the web, a microservices architecture helps large companies divide traffic into more manageable segments.
Spring Boot helps some enterprise businesses accomplish this goal and others. It is a Java-based framework, making it predictable and consistent for any developer specializing in Java.
Related: Web Developer Cover Letter
Related jobs on Indeed
Software & web architects jobs
Part-time jobs
Full-time jobs
Remote jobs
View more jobs on Indeed
Preliminary preparations for a Spring Boot interview
Whether you are a beginning or an experienced developer, here are some steps to help you prepare for a Spring Boot interview:
Recall your previous experiences regarding Spring Boot.
Review common interview questions and example answers.
Draw up a list of questions to ask about the company, culture and work environment.
List questions your interviewer might ask about the specific role you’re seeking.
Consider how you can best answers those questions.
Use the STAR strategy to answer questions
The STAR strategy suggests you talk about your experience by offering a challenging situation, explaining your role in the tasks to resolve it, detailing what actions you took and noting the resolution. STAR stands for situation, task, action and result. This method will help you prepare clear and concise responses using real-life examples.
By using the STAR strategy, you fully address the interviewer’s question while demonstrating how you overcame previous challenges.
Related: How To Use the STAR Interview Technique
General questions
Below is a list of general interview questions you might encounter as you begin your interview journey as a programmer. Be prepared to answer questions like these as well as specialized questions about Spring Boot:
What skills does a programmer need to have?
Tell me about when you took ownership of a new project and describe the outcome.
Describe how you would tell a person about a complex technical topic in simple terms.
What are your favorite programming languages and why?
Explain a time when you felt like you didn’t communicate well with your team and how you resolved it.
How have you handled major project changes in the past? How do you adapt?
Write or correct a string of code.
Why are you looking for a new job?
What are your salary expectations?
What are you looking for in a work environment?
Spring Boot interview questions
Review these interview questions for introductory questions about Spring Boot:
What is Spring Boot?
What is Spring vs Spring Boot?
Discuss the advantages of using Spring Boot.
How does Spring Boot work?
How do you set up a Spring Boot project?
What is autoconfiguration?
How do you disable autoconfiguration in Spring Boot?
What is the process of registering a custom autoconfiguration with Spring Boot?
Can you list the available Spring Boot starters?
What are starter dependencies?
Explain your experience with Spring Boot.
What are the most important skills for a Spring Boot programmer to have?
What are the advantages of using Spring Boot?
What is Spring initializer?
What is Spring Boot CLI and what are its benefits?
What are the Spring Boot key components?
What does the @ SpringBoot Application annotation do internally?
What is the purpose of using @ Component Scan in the class files?
What are the most common Spring Boot CLI commands?
What Spring Boot aspect is your strongest area? Your weakest?
Advanced Spring Boot interview questions
These are questions that hiring managers may ask to determine your level of expertise with Spring Boot?
What are the basic annotations that Spring Boot offers?
What is Spring Boot dependency management?
Can a non-web application be created in Spring Boot?
Is it possible to change the port of the embedded Tomcat server in Spring Boot?
What is the default port of Tomcat in Spring Boot?
Can you override or replace the embedded Tomcat service in Spring Boot?
Can you disable the default web server in the Spring Boot application?
How do you disable a specific auto-configuration class?
Explain @ RestController annotation in Spring Boot.
What is the difference between @ RestControll and @ Controller in Spring Boot?
Describe the flow of HTTPS requests through the Spring Boot application?
What is the difference between RequestMapping and GetMapping?
What is the use of Profiles in Spring Boot?
What is Spring Actuator? What are its advantages?
How do you enable Actuator in Spring Boot application?
What are the actuator-provided endpoints used for monitoring the Spring Boot application?
How do you get the list of all the beans in your Spring Boot application?
How do you check the environment properties in your Spring Boot application?
How do you enable debugging log in the Spring Boot application?
What is an IoC container?
Search jobs and companies hiring now
Job title, keywords or company
Location
Interview questions with sample answers
Here are some Spring Boot interview questions with example answers:
1. What’s your experience with Spring Boot?
If you’re going on a Spring Boot interview, a general question might be to describe your experience with Spring Boot and microservices. Successfully answering this question means coming prepared to discuss a time you developed and implemented microservices, especially if you used Spring Boot.
Example: “I used Spring Boot to create a microservices infrastructure in my current role. It helped us resolve bandwidth issues as we scaled to more users on our proprietary software platform.”
2. What skills should a Spring Boot programmer have?
If you’re going into microservice architecture as a career, you should have certain skills. These include:
Architecture knowledge
DevOps and containerization skills
Domain modeling
Security
Testing
When selecting which skills you should discuss, you can reference the employer’s job description before the interview, then select two or three skills from the job description to discuss.
Example: “I pride myself on a deep knowledge of architecture and am CompTIA Security+ certified. My ability to create microservices architecture securely is an asset to the companies where I may work.”
3. Explain what a microservice is in a simple way
When you’re asked to simply describe something, it’s important to make sure you are speaking clearly and concisely in a way that other people can understand, even if they aren’t technically savvy.
Example: “Microservices are small, contained architecture that makes up part of a larger service. By using microservices, businesses can defer traffic off from one service to many smaller ones, making for more efficient use of resources and end-user experience.”
4. What do you understand by dependency injection and Spring IoC container?
Spring uses a special design principle called the inversion of control (IoC), which manages wiring dependencies and the dependency injection is one of its aspects. You must thoroughly understand both these terms to explain them clearly.
Example: “IoC gives objects dependencies rather than creating or looking for dependent objects. The DI states that we do not create objects manually, but describe the process of their creation instead. When the application is run, the components and services described will be loosely coupled by required classes in the IoC container.”
5. What are Spring beans?
Spring beans are the basis of the Spring framework. You can explain them and their management by the IoC container.
Example: “Spring beans are Java objects that form the foundation of the application. They are initialized by the Spring IoC container and created with the user-supplied configuration metadata.”
