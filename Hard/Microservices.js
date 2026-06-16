Q #1) What are microservices?

Answer: Think of it as an approach toward software development. What this approach does is aim at having small autonomous services that focus on a common business goal. The image above has several business domains and surroundings that are certain microservices. Each one focuses only on a particular business functionality.

If a particular business domain has a set of 20 functionalities, each of the microservices will focus on only one functionality. 20 microservices means 20 corresponding functionalities, which is a far more simplified architecture. This approach explains the architecture.

Q #2) What are the advantages of microservices architecture?

Answer: Advantages include:

a) Independent development: When you talk about microservices, you’ll have to relate it to this point because we are talking about having an individual microservice for individual functionality. That means for each functionality, you can develop a separate service, and you can manage and control it totally independently.

Apart from that, it also ensures independent deployment. This means that if you have developed a single service, you can deploy that service. You do not have to wait for the complete architecture or other services to be ready and up for deployment, even if there is a certain amount of change in a particular service.

b) Fault isolation: If a particular microservice goes down, it does not affect the functioning of other services. If one service fails, it does not affect the functioning of other services in any way.

For example, think of an architecture comprising 20 applications or 20 services working in parallel. Since these applications are interdependent, as with a monolithic architecture, it takes the whole system down. This is not the case with microservices.

c) Mixed acknowledges stack: Since you have different microservices and you have an independent approach towards development, you can pick the technology that suits the needs of that service. And you can have a mixed technology stack for a complete architecture.

d) Granular scaling: This is an important point. Scaling can be a huge problem since you have to take into consideration the complete architecture. But since you’re having small services, you can actually scale those independently.

Q #3) What are the features of microservices?

Answer: Features are:

Decoupling: Applications can be easily decoupled or rather separated to have individual functionality, which implies that it assures easy development, maintenance, and deployment.
Componentization: In componentization, every microservice is treated as an individual component, and it handles or manages all the intricacies as far as a particular service is concerned. It focuses only on that. It is loosely coupled with other services. That is why each of them can be thought of as a single component or a container.
Business capabilities: We can focus on business capabilities much better way since you are setting up smaller goals and you focus on individual functionalities. It becomes easier to develop applications to meet these requirements as far as your business is concerned.
Autonomy: The developers are now free because, due to small team clusters, they’re free to develop the applications. This implies that the other teams and developers are not interdependent. This assures speedy allotment of software.
Continuous delivery: Since you have so many features that we just discussed, this ensures that you have constant and frequent releases of software, and a system can be continuously updated and modified in alignment with the needs of a particular company or a particular business domain.
Responsibility: In this approach, every domain or every project is treated as a product. This means that a team will take responsibility for the so-called product and they will bring it to life, and it is that responsibility, i.e., build it, test it, and carry on with the whole lifecycle.
Agility: Since you have a decentralized architecture, you can easily build applications and discard them if they’re no longer needed.
Q #4) What are the characteristics of microservices?

Answer:

a) Organized business capabilities: Since you have individual microservices, it means that you have an application that works on its own. You also have a database that corresponds to individual microservices, which means if you have 10 microservices, you will have 10 individual databases that correspond to or answer only to that microservice.

This gives you a complete decentralized structure, and this also means better organization because every microservice is very clear about what it is supposed to do. It has all the resources in that single container, i.e., this is to be done, and this is what we are focused on. That is how this organization, or better management, comes into the picture.

b) Products and not projects: Suppose you have 10 microservices, you’ll have small clusters of teams that would build up this application and also maintain it. What Amazon thinks is that you should have a two-pizza team. This means you should have a small team can survive on two pizzas, and you should also be able to maintain the software.

Every responsibility, as far as software and applications are concerned, is given to that size of a team that can survive on two pizzas. This ensures modularity. When you talk about microservices, basically, you’re talking about a product.

When you talk about a team focused on a particular functionality, that functionality is not a project for them; it is more of a product for them.

c) Smart endpoints and dumb pipes: This means that you have different applications and they’re quite decentralized, and there has to be a way of communication. You should have smart endpoints and good ways to integrate your applications.

d) Decentralized governance: Discussed earlier.

e) Decentralized data management: This means you are free to have an individual approach where you have your own database, and your single database in your microservices is treated as an individual entity or a container.

f) Infrastructure automation: Since we already have so many microservices, there must be proper automation. This ensures speedy development and maintenance.

g) Design for failure: Applications are built such that they do not hamper the progress of any applications, even when they fail. Despite that, you need to have a mechanism that takes care of failure as well.

There is a need to have real-time monitoring and analysis, which ensures that if an application goes down, the fastest possible action is taken so that the application runs again and does not hamper the working of any other applications.

Q #5) What are the best practices for designing microservices?

Answer:

Separate data store for each microservice because we have a database that corresponds to a particular microservice.
Keep code at a similar level of maturity: This gives developers the freedom to build applications the way they want to.
A similar level of understanding means a similar level from a business domain perspective. All the teams are on a similar page, even though they’re working on different things.
Separate build for each microservice: All teams are on the same level when they’re working separately on each microservice. These get deployed in containers.
Treat servers as stateless: Containers read servers as stateless, which helps in better communication.
Deploy into containers: Microservices should be deployed into containers.
Q #6) What is DDD (Domain Driven Design)?

Answer: This is an approach that actually helps you collaborate with all the teams together, and to a great extent, makes the development of complex applications easier.

The three main pillars of DDD principles are:

Focus on the core domain and domain logic.
Trace the complex design of the business domain’s models.
Resolve business domain problems and make the application domain better by having regular consultations with the business domain experts.
At times, you let go of what is right for you. Rather, you focus only on the business domain. This means that the focus should be on what the business domain needs, and this is what we would include in this architecture. This kind of approach is called domain-driven design.

DDD tries to bring everything back onto the same page through the use of a ubiquitous language, which helps you achieve this domain-driven design approach.

Design a ubiquitous language to focus on a particular domain, and refer to the architecture developed from it as domain-driven architecture.

Q #7) What is a ubiquitous language?

Answer: Suppose we have a ticket reservation system for a flight. The ubiquitous language will be all the terminologies that would be related to airplanes, flight attendants, customers, etc. The manager should be able to comprehend the architecture.

He should be able to understand the terminology that is being used, and the same applies to the developers, too. This means that we are bringing every team on the same page, and they refer to a language that does that as a ubiquitous language.

Q #8) Why is there a need for Domain-Driven Design (DDD)?

Answer:

Mapping to a domain: We are mapping our architecture to a particular domain.
Testability: Testing the application becomes easier.
Maintainability: Maintaining the application also becomes easier because everyone is on the same page.
Knowledge-rich design: These applications are very heavy on knowledge.
It brings business and services together.
Context-focused: Very much focused on a particular domain.
Uses ubiquitous focus.
Reduced complexity.
Q #9) How does microservices architecture work?

architecture
[Via DZone]

There is no particular pattern for this kind of architecture because it can be very complex at times. If you have several microservices, all of those will have different architectures, but the base remains the same. That means no matter how complex or how big the project is, the architecture will never become complex.

But yes, it might become big because we might think of having numerous microservices, maybe thousands. But let’s assume you have a huge application, no matter how big it becomes.

It would never get complicated because we are developing small applications. Each of these small applications will have an architecture that is more or less like the one in the image above.

The architecture comprises:

Client and identity provider
API Gateway
Static content
SDN – content delivery networks
Microservices
Management
Service discovery portal or a model
User
Remote service
Identity provider, remote service, and microservices.
Steps of understanding working:

If a client wants to use a particular service, the client sends in a request. It is the job of an identity provider to verify whether or not the user is valid.
Once the identity provider authenticates a user, the request is then forwarded to the API Gateway. Since a client cannot directly communicate with a service, there has to be an intermediary or some intermediate approach that lets the client communicate.
That’s where API Gateway comes in. It finds directories that a client is looking for, and the request is forwarded to that service.
The service communicates with other services and sees how a solution is generated for the client.
Once the solution is generated, it is sent back to the client using CDN, i.e., Content Delivery Network.
The static content is whatever content that is entered and is static, and is held by static content.
The management and the service discovery portals have a particular task as well. For example, I have several services. The management portal places those services on respective nodes.
The service discovery keeps track of all these services and makes note of services that have failed and all those things.
This record is communicated back to the management portal, and it is the job of this management portal to resolve if there is any failure in the corresponding architecture or any of the services.
These components all work in tandem, and this is how they bring the architecture together. In addition to that, the architecture in the image above lacks certain concepts, such as the messaging model.

There is an approach where messaging also occurs, for instance, if the client is waiting for a particular reply from a service. In that case, we have a means of communication, and that’s through synchronous message passing. However, if the client won’t be waiting for a response from the service, we have an asynchronous means of communication.

Q #10) What are the advantages and disadvantages of microservice architecture?

Answer: The table below explains.

Advantages
Disadvantages
The liberty to use various technologies	Chances of troubleshooting is increased
Each microservice focuses on a specific business domain	Delay increased due to remote calls
Units that can be deployed individually are supported	Efforts of configurations including other efforts are increased
Software are released more frequently	Transaction safety isn’t easy to maintain
Each service security is ensured	It isn’t easy to track data from various service boundaries
Supports the development and deployment of many services parallelly	Coding between services is a challenge
Q #11) What are the distinguishing factors between Monolithic, Microservices Architecture, and SOA?

Answer:

monolithic
[Via RubyGarage]

Monolithic architecture

This is where a single container holds the complete architecture of all your services or databases.

There was a single database that corresponded to all these services, and all the interdependencies of those were inside one single container. All the advantages that we discussed became a disadvantage because, since you had a single container or a single architecture, deploying was a huge issue.

A single failure would mean that you would have to work on the application and then deploy the complete architecture. There was no fault isolation because if something failed, everything depended on it, and there was a need to repair that part, and that decision had to wait for that issue to be rectified to resume work again.

Monolithic architecture had quite a few other problems:

Scaling was a problem.
Isolation was a problem.
Then there was no individual development.
Deployment was a big issue.
Hard to develop since it was one complex block.
There is too much dependency on each other, making it poor for software development.
S.O.A

It is similar to microservices, but the difference is that the monolithic architecture is divided into smaller units, and these smaller units also have subunits. This means that you do not have complete modularity. The modularity is there, but to a smaller extent.

When complete modularity is needed, the option is to choose microservices. SOA has full features, and each of these features has individual modules.

Microservices

This is not the case with microservices, which have individual modules or complete modularity.

Scenario-Based Questions for Microservices Interview
Q #12) What are the main distinguishing factors between microservices architecture and SOA?

Answer:

There are a few differences stated below:

SOA focuses on sharing almost everything with other modules. But when you talk about microservices, the aim is to share as little as possible.
The approach is completely different. Apart from that, you have modular applications in SOA, but there are still a lot of interdependencies. That is not the case with microservices.
When talking about intercommunication between services in SOA, you need middleware for communication. But in microservices, which are completely independent and you do not need middleware for that, they address the rest of the APIs.
Q #13) What are the challenges with microservices architecture?

Answer:

Automating the components: We can automate all the components, but maintaining these components is a huge task, and automation to work smoothly means constant attention.
Configuration management: In regard to versatility and configuration management, you need to understand that this is nothing but an approach that deals with the complete design that you are talking about. And configuring these microservices and having a clear architecture can pose a problem.
Perceptibility
Debugging: Debugging is another issue because we have fault isolation, and if some application fails, it does not affect the working of any other application. But that also means that you have to be continuously monitoring.
These applications need individual monitoring, and that is why when you talk about system failures, dealing with such failures can be a problem in the overall architecture. Even if it does not affect the functioning of other applications, that application has gone down and needs to be up and running.

Q #14) What is cohesion?

Answer: Microservices architecture is a design pattern. Cohesion and coupling are important because a good design will always have high cohesion and low coupling. To understand this, we need to understand what cohesion and coupling are.

Cohesion is nothing but the bond between an application or an intra-bond within an application. For example, inside a molecule, we have atoms. These atoms, how closely are they bonded to each other?

This bond is what is referred to as cohesion. Cohesion should be high when you talk about a microservice. That means we are referring to the fact that the interdependency inside a container, the database, and the service that is running, how close or how bonded are they with each other?

If they are closely bonded, that is good for the microservice. When you look at it from a bigger picture, you are talking about different microservices.

The bond between these microservices should be below. The interbond between two applications in microservices should be loose.

This is referred to as low coupling. The interbond inside a container is cohesion, while the interbond between two different applications or containers is coupling. That is why when you want a good design, you need high cohesion and low coupling.

Q #15) What is REST/RESTful, and what is it used for?

Answer: This is an API, that Application Protocol Interfaces.

REST stands for Representational State Transfer. These are more or less used for integrating with your applications much better.

When talking about a decentralized architecture and building such an architecture, you need to have a medium through which you can communicate with all these services efficiently, and the rest enables us to achieve that.

Q #16) What is an actuator in Spring Boot?

Answer: An actuator provides real-time analysis. It allows us to monitor an application when it is in its production state. It provides all the information about a particular application. That means you can monitor all of its metrics, i.e., it gives you information about an application and its running state.

Q #17) What is Spring Boot?

Answer: Spring is an approach to web services development. It gives you all the ingredients that are needed as far as a web application is concerned. Think of it as a shop where you get all the ingredients for web development. Spring Boot is a customized version of Spring. To get a clear picture, think of the process of cooking and eating food.

As long as you have spring, you have all the ingredients. You’ll have to prepare your food and eat it. Spring Boot is a customized approach where we have the food ready for us to eat in the fridge. Spring Boot means the food.

All the ingredients and spices are already well mixed together. All that is required of us is to place the food inside the oven to heat it for us to eat.

Q #18) What is Spring Cloud?

Answer: It is something that lets you get real-time analysis and perform a finite amount of data processing. It is nothing but an API that is provided by Spring, and it helps you get rid of various complexities as far as architecture is concerned.

Q #19) What problems are solved by Spring Cloud?

Answer:

Reduces the complexity associated with distributed systems, or the complexity that is associated with distributed systems.
Service Discovery becomes very easy.
Helps in load balancing.
It takes care of redundant code and application development.
Help in improving performance.
Q #20) What is the difference between REST and Microservices?

Answer: Differences include:

REST is a means to implement microservices.
It is an architectural style that can develop large-scale applications that can be scaled up quite easily.
It is used in API design and in web apps.
We need to follow particular patterns to make microservices loosely coupled.
Through REST, we can build Microservices.
Q #21) What are the different types of tests for Microservices?

Answer:

Unit testing – testing the individual functional modules/units
Performance testing
Acceptance test
Exploratory test – experimental testing aimed at learning how an application works
Acceptance tests and performance tests are for the stakeholders. People usually perform them when presenting or giving their end product. They just test the working of an application; thus, they occur less compared to the other two tests.

Q #22) What is a distributed transaction?

Answer: When you have several applications or services, these services will commit changes. Thus, the need to change a particular plan request. There is a need to make sure that all the applications agree.

There is a managing entity that ensures that there is a commitment to a particular service from all the applications and all the services. When that commitment arrives, it is then that a transaction is completed, and this kind of transaction is referred to as a distributed transaction.

Q #23) What is Idempotence, and where is it used?

Answer: There are certain results where you would want uniformity. That means if there were a particular application that would execute 10 times, that should not affect my result. This implies that no matter how many times the application executes, the result should be the same each time.

To guarantee this, we have something called an Idempotence law, which ensures uniformity.

Q #24) What is a bounded context?

Answer: We are talking about microservices and modularity.

To give you an example, on the organizational level, we have different teams working on different things, as the marketing team focuses on marketing the product, the sales team sells the product, the development team develops the product, and the maintenance team maintains the product, so you’ll have different teams.

The different teams would have different concerns and different interdependencies. Each of these teams should exist in a single module. The same applies to application development as well. Each module should have its own independence. This approach is a bounded context. Your application remains bound within these limits.

Q #25) What is two-factor authentication?

Answer: An example would be ATM transactions. When you give in your credit card details, you are issuing your credentials: your card number, your name, and your CVS.

After entering those details, you are also expected to enter the OTP that the ATM application uses to verify that the details that you’ve given are correct. You are the owner of the card, and the number entered is registered with your service. This is where the second step of the authentication happens.

This type of authentication is called two-factor authentication.
