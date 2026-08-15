

Search

Get app
Write
Sign up

Sign in


Unknown user
DevOps.dev

DevOps.dev
Devops.dev is a community of DevOps enthusiasts sharing insight, stories, and the latest development in the field.

Follow publication

Java
Programming Languages
Spring
Spring Boot
Interview
Java Full Stack Developer Interview Questions and Answers
2024 Java Full Stack Developer Interview Questions and Answers
Java Codeex
Java Codeex

Follow
9 min read
·
Jun 7, 2024
18


1




One of my friend recently attended an interview at a top product-based organization. These are the questions they were asked. If you are planning to attend any interviews, just go through these questions once; it will help you.

Java

Write a Java program to print how many times each character is repeated in a given string.

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Sample {

    public static Map<Character, Long> countOccurrences(String str) {
        return str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }

    public static void main(String[] args) {
        String str = "Hello How Are You";

        Map<Character, Long> charCountMap = countOccurrences(str);

        charCountMap.forEach((character, count) ->
                System.out.println("The character '" + character + "' occurs " + count + " times in the string."));
    }
}
What is `ClassNotFoundException` in Java and when does it occur?
`ClassNotFoundException` is a checked exception that occurs when an application tries to load a class through its name using methods like `Class.forName()`, `ClassLoader.loadClass()`, or `ClassLoader.findSystemClass()`, but the class with the specified name cannot be found in the classpath.
Explain `NoClassDefFoundError` and how it differs from `ClassNotFoundException`.
`NoClassDefFoundError` is an unchecked error that occurs when the Java Virtual Machine (JVM) or a ClassLoader tries to load a class that was available at compile-time but is not available at runtime. It usually happens if the class was successfully compiled but cannot be found or loaded at runtime due to missing dependencies or other issues. Unlike `ClassNotFoundException`, which is thrown when an application tries to load a class explicitly, `NoClassDefFoundError` can occur when the JVM needs the class to be present as part of the normal execution of the program.
3. What is an immutable class in Java?
An immutable class is a class whose instances cannot be modified after creation. Any modification results in a new instance of the class. Examples of immutable classes in Java include `String`, `Integer`, and `LocalDate`.

4. How do you create an immutable class in Java?
To create an immutable class in Java:
1. Declare the class as `final` to prevent subclassing.
2. Make all fields private and final.
3. Do not provide setters for the fields.
4. Initialize all fields via a constructor.
5. Ensure that any mutable fields are not directly accessible and return copies of them if necessary.

public final class ImmutableClass {
 private final int value;
 private final String text;
public ImmutableClass(int value, String text) {
 this.value = value;
 this.text = text;
 }
public int getValue() {
 return value;
 }
public String getText() {
 return text;
 }
 }
5. Why is immutability important in Java?
Immutability is important because it:
Simplifies reasoning about code since immutable objects cannot change state.
Enhances thread safety as immutable objects can be shared between threads without synchronization.
Provides security since the internal state of immutable objects cannot be altered.

6. What is a `ConcurrentHashMap` and how does it differ from `HashMap`?
`ConcurrentHashMap` is a thread-safe variant of `HashMap` that allows concurrent read and write operations without locking the entire map. It is part of the `java.util.concurrent` package. Unlike `HashMap`, which is not thread-safe and requires external synchronization, `ConcurrentHashMap` uses a combination of segment-level locking and non-blocking techniques to achieve concurrency.

7. Explain how `ConcurrentHashMap` handles concurrency.
`ConcurrentHashMap` handles concurrency by dividing the map into segments, each of which can be locked independently. This reduces contention and allows multiple threads to read and write to different segments concurrently. Additionally, it uses non-blocking algorithms for certain operations like `get`, ensuring high performance in multi-threaded environments.

8. How can you make a Java collection read-only?
You can make a Java collection read-only by using the `Collections.unmodifiableCollection` method. This method returns an unmodifiable view of the specified collection. Any attempt to modify the returned collection will result in an `UnsupportedOperationException`.

List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
List<String> readOnlyList = Collections.unmodifiableList(list);
9. What is the `transient` keyword in Java?
The `transient` keyword in Java is used to indicate that a field should not be serialized. When an object is serialized, the value of a `transient` field is not included in the serialized representation of the object.

10. How is `transient` used in serialization?
When a field is marked as `transient`, it is ignored by the serialization mechanism. For example, if an object’s state includes sensitive information or context-specific data that should not be persisted, you can mark those fields as `transient`.

public class Example implements Serializable {
 private transient String sensitiveData;
 private String regularData;
// getters and setters
}
11. Explain the difference between PermGen and Metaspace in the JVM.
PermGen (Permanent Generation) was a memory area in the Java heap used to store metadata about classes, methods, and other reflection data. It was part of the heap memory and had a fixed size.
Metaspace replaced PermGen starting with Java 8. It is not part of the heap and has no fixed size limit, growing dynamically as needed. This change reduces the risk of `OutOfMemoryError` related to metadata storage.

12. Why was Metaspace introduced to replace PermGen?
Metaspace was introduced to address the limitations and problems associated with PermGen, such as its fixed size leading to `OutOfMemoryError` when the metadata requirements exceed its capacity. Metaspace, being dynamically sized, improves flexibility and reduces memory management issues related to class metadata.

13. What is serialization in Java?
Serialization in Java is the process of converting an object’s state into a byte stream, which can be persisted to a file, sent over a network, or saved to a database. The reverse process is called deserialization, where the byte stream is converted back into a copy of the object.

14. How do you serialize and deserialize an object in Java?
To serialize an object, you use an `ObjectOutputStream` to write the object to an output stream. To deserialize, you use an `ObjectInputStream` to read the object from an input stream.

// Serialization
 try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("object.ser"))) {
 oos.writeObject(object);
 } catch (IOException e) {
 e.printStackTrace();
 }
// Deserialization
 try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("object.ser"))) {
 MyClass object = (MyClass) ois.readObject();
 } catch (IOException | ClassNotFoundException e) {
 e.printStackTrace();
 }
15. When should you use the `volatile` keyword?
The `volatile` keyword should be used when you need to ensure that a variable’s value is always read from and written to main memory, making it visible to all threads immediately. It is typically used for flags and counters that are accessed by multiple threads without using synchronized blocks or methods.

private volatile boolean flag;
16. What is externalization in Java?
Externalization is an alternative to serialization in Java that allows you to customize the serialization process. It requires implementing the `Externalizable` interface, which has two methods: `writeExternal` and `readExternal`. You manually define how the object’s state is written to and read from a stream.

17. How does externalization differ from serialization?
The main differences are:
Serialization is automatic and uses the `Serializable` interface, whereas externalization is manual and uses the `Externalizable` interface.
In serialization, all non-transient fields are serialized by default. In externalization, you explicitly specify which fields to serialize.
Externalization can provide better control over the serialization process and can result in smaller serialized forms by excluding unnecessary fields.

18. When would you use externalization over serialization?
You would use externalization over serialization when:
You need to have precise control over the serialization process.
You want to exclude certain fields or include only specific fields.
You need to serialize objects in a more efficient format, potentially reducing the size of the serialized data.

19. PermGen vs MetaSpace

20. How to make data consistency if multiple threads are processing same time

21. parallelStream

We can achieve this by adding the parallel method to a sequential stream or by creating a stream using the parallelStream method of a collection:

List<Integer> listOfNumbers = Arrays.asList(1, 2, 3, 4);
listOfNumbers.parallelStream().forEach(number ->
    System.out.println(number + " " + Thread.currentThread().getName())
);
22. Java 8 features

Spring Boot
Explain the concept of AspectOriented Programming (AOP)?
AspectOriented Programming (AOP) is a programming paradigm that aims to increase modularity by allowing the separation of crosscutting concerns (such as logging, security, and transaction management) from the business logic. In Java, AOP is implemented through aspects, which are modular units that encapsulate behaviors affecting multiple classes. AOP concepts include:
Aspect: A module that encapsulates crosscutting concerns.
Join Point: A point in the program execution (e.g., method execution).
Advice: Action taken at a particular join point (e.g., before, after, or around method execution).
Pointcut: A set of join points where an advice should be applied.
Use cases: Logging, transaction management, security checks, performance monitoring, and error handling.
2. Difference between @AspectJ and AOP
@AspectJ: It is an annotation based syntax for defining aspects in Spring AOP. It uses annotations like @Aspect, @Before, @After, @Around, etc., to declare aspects and advice in Java classes.
Traditional AOP: Involves configuring aspects in XML files. It requires defining pointcuts and advice in an XML configuration, which can be less intuitive and harder to maintain than annotationbased approaches.
Differences: @AspectJ provides a more concise and readable way to define aspects within the code, while traditional AOP separates the aspect configuration from the business logic, which can be beneficial for clear separation of concerns.

Get Java Codeex’s stories in your inbox
Join Medium for free to get updates from this writer.

Enter your email
Subscribe

Remember me for faster sign in

3. Instantiating Multiple Beans of the Same Class with Spring Annotations
The @Primary annotation in Spring is used to indicate which bean should be given preference when multiple beans of the same type exist. It helps resolve ambiguity during autowiring by specifying a primary candidate

@Bean
 @Primary
 public MyService primaryService() {
 return new MyServiceImpl1();
 }
@Bean
 public MyService secondaryService() {
 return new MyServiceImpl2();
 }
4. Use of @Qualifier
The @Qualifier annotation is used to specify which bean should be injected when multiple beans of the same type exist. It helps resolve conflicts by providing an explicit reference to the desired bean.

@Autowired
 @Qualifier("secondaryService")
 private MyService myService;
5. How do you configure Spring Security in a Spring Boot application?
Basic Configuration: Include the Spring Security starter in your pom.xml
Security Configuration Class.java : Create a class extending WebSecurityConfigurerAdapter and override the necessary methods.

@EnableWebSecurity
 public class SecurityConfig extends WebSecurityConfigurerAdapter {
 @Override
 protected void configure(HttpSecurity http) throws Exception {
 http
 .authorizeRequests()
 .antMatchers("/public/").permitAll()
 .anyRequest().authenticated()
 .and()
 .formLogin()
 .loginPage("/login")
 .permitAll()
 .and()
 .logout()
 .permitAll();
 }
 }
 
 Application Properties: Configure securityrelated properties in application.properties if needed.
6. Explain the process of securing a Spring Boot application with JWT (JSON Web Token).
Steps:
1. Add Dependencies: Include the necessary dependencies for JWT and Spring Security.
2. Create a JWT Utility Class: Implement methods to generate and validate JWT tokens.
3. Create a Filter: Implement a filter to intercept requests and validate the JWT token.
4. Configure Security: Extend WebSecurityConfigurerAdapter and configure the security to use the JWT filter.

7. How does OAuth2 work with Spring Security to provide secure authentication?
OAuth2 is a protocol for authorization that allows thirdparty applications to access user data without exposing credentials. In Spring Security:
Authorization Server: Issues tokens after validating user credentials.
Resource Server: Validates the token and provides access to protected resources.
Flow: The client requests authorization, receives an authorization code, exchanges it for an access token, and uses the token to access protected resources.
Spring Configuration: Spring Security provides annotations and configurations to integrate OAuth2 easily, using @EnableAuthorizationServer and @EnableResourceServer.

8. What is the purpose of a load balancer in a Spring Boot microservices architecture?
A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, thereby improving responsiveness and availability. It helps in:
Distributing workload evenly.
Increasing fault tolerance.
Enhancing scalability by adding more instances.

9. How can you implement load balancing in a Spring Boot application?
 Spring Cloud LoadBalancer: Use springcloudstarterloadbalancer to enable clientside load balancing.
 Ribbon: Although deprecated in favor of Spring Cloud LoadBalancer, Ribbon was used to provide clientside load balancing.
 Example:

 @SpringBootApplication
 @EnableEurekaClient
 public class Application {
 public static void main(String[] args) {
 SpringApplication.run(Application.class, args);
 }
 }
10. List of Annotations in Spring Boot You Have Worked With?

@SpringBootApplication
 @RestController
 @RequestMapping
 @GetMapping
 @PostMapping
 @Autowired
 @Component
 @Service
 @Repository
 @Configuration
 @Bean
 @Primary
 @Qualifier
 @Value
 @Profile
 @EnableScheduling
 @EnableAsync
11. What is Spring Profiles?
Spring Profiles provide a way to segregate parts of your application configuration and make it only available in certain environments. This allows you to have different configurations for development, testing, and production environments.
Example: Define profiles in application.properties or application{profile}.properties and activate them via the spring.profiles.active property.

12. How to Send API Metrics Every Specific Time Frame

13. What is Docker and how does it benefit application development and deployment?
Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and selfsufficient units that include the application and its dependencies.
Benefits:
Consistency across development, testing, and production environments.
Simplifies dependency management.
Enables microservices architecture.
Enhances scalability and resource utilization.

14. Explain the role of Kubernetes in container orchestration and management.
Kubernetes is an opensource platform for automating the deployment, scaling, and management of containerized applications. It provides:
Orchestration: Manages container lifecycles, networking, and storage.
Scaling: Automatically scales applications based on resource usage.
Load Balancing: Distributes network traffic to ensure high availability.
Selfhealing: Restarts failed containers and replaces them as needed.
Declarative Configuration: Manages applications using declarative YAML or JSON configurations.

15. How can you exclude specific dependencies or configurations in a Spring Boot application?
 Maven Exclusions: Use the <exclusions> tag in the pom.xml file to exclude specific dependencies.
 xml

 <exclusion>
 <groupId>org.springframework.boot</groupId>
 <artifactId>springbootstartertomcat</artifactId>
 </exclusion>
16. Spring Boot Transaction Management

DataBase

Database Optimization techniques
What is Union and UninonALL
Second highest employee salary
tell me about Aggregate Functions
Angular 12

Life cycle hooks
diff between promises and Observables
How to pass data between components (Parent -> Child and Child -> Parent)
What is Pipe how to create Custom pipes
diff between directive and components
How to configure routers in angular
Diff between AOT and JIT compiler
diff between angular vs react
Thank you, keep learning!

ajtech
Thank you for reading until the end. Before you go:

Please consider clapping and following the writer! 👏
Follow us on LinkedIn | YouTube
Follow me for more exciting content

[**Follow me on Medium**](https://medium.com/@saijanand)


Главная → Блог → ТОП-21 вопрос Java-разработчику Junior, Middle, Senior на собеседовании
ТОП-21 вопрос Java-разработчику Junior, Middle, Senior на собеседовании
BGStaff рассказывает, что спрашивают на собеседовании Java-разработчика. Хотите правильно оценить хард скилзы кандидатов? Читайте!

Поделиться:
В статье мы расскажем о том, что спрашивают на собеседовании Java-разработчиков уровней Junior, Middle, Senior. А также приведем список вопросов для каждой из категорий. Это поможет вам понять, от чего следует отталкиваться при интервьюировании IT-специалистов этого направления.

Вопросы на собеседовании для Java-разработчика Junior
Это программист, который начинает свою карьеру в IT-сфере. Он работает под руководством более опытных коллег или руководителя проекта. Занимается выполнением простых задач: написанием кода, тестированием программного обеспечения и т. д. Параллельно он обучается и развивается, получая опыт и навыки, которые позволяют ему стать более опытным IT-специалистом со временем, получив уровень Middle и Senior.

ТОП-7 вопросов для Java-разработчика уровня Junior:
Можно ли в Джава переопределить статический метод?
Что такое полиморфизм и как он реализуется в Java?
Какие основные принципы объектно-ориентированного программирования вы знаете?
Что такое аннотации (annotations) и для чего они применяются?
Можно ли выполнить перегрузку метода main()?
В чем отличия в Java между HashMap и HashSet?
Как Джава достигает независимости от платформы?
HR-менеджеры с большой осторожностью относятся к найму разработчиков уровня Junior, так как опасаются, что на их обучение потребуется слишком много времени и других ресурсов. Однако среди начинающих Java-developer могут скрываться ценные кадры с новыми идеями, которые принесут пользу компании.

Вопросы на собеседовании для Java-разработчика Middle
Это программист с опытом работы и знаниями среднего уровня. Он уже обладает знаниями, чтобы самостоятельно заниматься несложными проектами, но еще не имеет достаточных навыков и опыта, чтобы решать сложные задачи или распределять работу между другими IT-специалистами.

Middle-разработчик, который проходит собеседование, должен хорошо знать язык программирования, понимать основы архитектуры программного обеспечения. Он также должен быть знаком с инструментами и технологиями, используемыми в разработке, уметь самостоятельно решать типичные задачи и проблемы, возникающие в процессе работы.



Вопросы на собеседовании для Java-developer уровня Middle:
Откуда вы узнавали постановку задач, как понимали что делаете свою работу правильно?
В чем заключаются плюсы и минусы объектно-ориентированного программирования, если сравнивать с процедурным/функциональным видом?
Какие паттерны GoF вы применяли в работе?
Какие коллекции вы знаете в Java, в каких случаях вы бы использовали каждую из них?
Каким образом вы можете обеспечить безопасность веб-приложения?
Есть однопоточный сервис для перевода денег между пользователями, можно уйти в минус, но нужно следить чтобы деньги не потерялись (сумма на всех счетах является инвариантом). Что необходимо учесть, чтобы сделать сервис многопоточным?
Что такое PECS, как используется?
Developer уровня Middle должен иметь достаточный уровень подготовки, чтобы работать над проектами самостоятельно. Знание теории является обязательным.



Вопросы на собеседовании для Java-разработчика Senior
Разработчик Senior – опытный IT-специалист с высоким уровнем квалификации, опытом работы в данной области. Он имеет глубокие знания языка программирования Java, а также опыт работы с различными фреймворками и инструментами разработки. Он способен разрабатывать сложные программные системы, управлять проектами и командами разработчиков, а также налаживать процессы разработки и обеспечивать высокую производительность и качество кода.

Какие вопросы можно задать на интервью кандидату, который претендует на позицию разработчика уровня Senior:
Расскажите о проектах, в которых вы принимали участие, и какие роли выполняли в них.
Как вы управляете разработкой больших проектов с использованием Java?
Какие инструменты для управления версиями вы использовали в своей работе?
Как бы вы оценили свой уровень знания языка и его основных особенностей?
Каким образом вы оптимизируете производительность приложений?
Расскажите о своем опыте тестирования и отладки кода.
Как вы обновляете свои знания и следите за последними трендами в разработке?
На интервью с разработчиками различных уровней часто задают технические вопросы. Соответственно, нужно обладать достаточной компетенцией, чтобы правильно оценить ответы на них. Если HR-менеджер не имеет соответствующего технического образования, подготовиться к собеседованию ему будет сложно. Поэтому экспертную оценку hard skills кандидатов могут провести специалисты кадрового агентства BGStaff. Также мы можем подобрать для вас разработчика любого уровня без предоплаты. Первый кандидат – через 3 дня.


Interview Questions
Getting Started as a Java Full Stack Engineer
Common Java Full Stack Engineer Interview Questions
Behavioral Interview Questions for Java Full Stack Engineers
Technical Interview Questions for Java Full Stack Engineers
What is a Java Full Stack Engineer
Certifications
Java Full Stack Engineer Jobs
Build the Resume That Got You the Interview

Sign Up for Free
Preparing for a Java Full Stack Engineer interview can feel overwhelming—you’re expected to speak fluently about everything from Spring Boot to React, from SQL optimization to Docker containerization. But the good news? Most interviewers ask predictable questions that follow clear patterns. With the right preparation strategy and concrete examples, you can walk into your interview confident and ready to showcase both your technical depth and your ability to solve real-world problems.

This guide walks you through the most common Java Full Stack Engineer interview questions you’ll encounter, provides realistic sample answers you can adapt, and gives you frameworks for thinking through technical challenges on the spot. Whether this is your first full stack role or you’re transitioning to a new company, you’ll find practical, actionable advice here.

Common Java Full Stack Engineer Interview Questions
Tell me about your experience with Spring Boot and how you’ve used it in production.
Why they ask: Spring Boot is foundational for Java backend development. This question assesses your hands-on experience, your understanding of its benefits, and your ability to explain architectural decisions.

Sample answer:

“In my last role, I built a microservice for an e-commerce platform using Spring Boot. We chose it specifically because we needed to reduce boilerplate code and get to market quickly. I set up the application with Spring Data JPA for database access, Spring Security for authentication, and Spring MVC for REST endpoints.

One challenge we faced was N+1 query problems when loading related entities. I debugged this using Hibernate’s query logging and optimized it with eager loading and projection queries. We also integrated Spring Boot Actuator for monitoring and health checks, which helped us catch issues before they reached production.

The biggest win was how easily we scaled from monolith to microservices—Spring Boot’s embedded Tomcat and auto-configuration made deployment incredibly straightforward.”

Personalization tip: Replace the specific project details with your own, but keep the structure: what you built, why you chose Spring Boot, one technical challenge you solved, and one measurable outcome.

How do you approach testing in a full stack application?
Why they ask: Testing strategy reveals your commitment to code quality and your understanding of the full development lifecycle. They want to know if you write tests proactively or reactively.

Sample answer:

“I follow a testing pyramid approach—lots of unit tests, fewer integration tests, and a focused set of end-to-end tests. On the backend, I write unit tests for business logic using JUnit and Mockito. For example, I’ll mock external API calls and database interactions so I’m testing just the service logic in isolation.

For integration tests, I use Spring’s @SpringBootTest annotation to load the application context and test how Spring beans actually interact. I write these for critical paths like user registration or payment processing.

On the frontend, I use Jest for React component tests, focusing on user interactions rather than implementation details. For end-to-end testing, I use Cypress—it’s much more reliable than Selenium for SPAs because it handles async operations better.

I integrate all these into our CI/CD pipeline so tests run automatically on every pull request. This catches issues early and gives me confidence to refactor without fear.”

Personalization tip: Swap out the specific tools if you’ve used different ones (TestNG instead of JUnit, Playwright instead of Cypress), but keep the pyramid concept—it shows sophisticated testing thinking.

Walk me through how you’d design a REST API for a real-world application.
Why they ask: This assesses your understanding of API design principles, HTTP semantics, and how to structure an API that scales and is easy for other teams to consume.

Sample answer:

“Let’s say I’m designing an API for a task management application. I’d start by identifying resources: tasks, users, projects. Each gets its own endpoint—/api/tasks, /api/users, /api/projects.

For HTTP methods, I’d use GET for retrieval, POST for creation, PUT for full updates, PATCH for partial updates, and DELETE for removal. So creating a task is POST /api/tasks, fetching all tasks is GET /api/tasks, and updating a specific task is PUT /api/tasks/{id}.

I’d implement pagination for list endpoints—GET /api/tasks?page=1&size=20—because returning thousands of records at once is a performance nightmare. I’d also add filtering—GET /api/tasks?status=pending&assignee=user123.

For versioning, I’d use URL versioning like /api/v1/tasks rather than header versioning. It’s clearer and easier to test.

Response format matters too. I’d return consistent JSON with appropriate HTTP status codes—200 for success, 400 for bad requests, 401 for auth failures, 500 for server errors. And I’d use DTOs (Data Transfer Objects) to avoid exposing database entities directly.

Spring Boot makes this straightforward with @RestController, @RequestMapping, and ResponseEntity.”

Personalization tip: Use an application domain you’ve actually worked with. The specific example matters less than demonstrating you’ve thought through these considerations.

Describe your experience with front-end frameworks. Which do you prefer and why?
Why they ask: Full stack engineers need strong frontend skills. This reveals your depth in frontend architecture, state management, and component design.

Sample answer:

“I’ve worked with both Angular and React, and I currently prefer React for most projects. With React, the component model is cleaner—it’s just JavaScript, so the learning curve is shallower than Angular’s dependency injection and decorators.

In my last project, we built a React SPA with Redux for state management. We had complex data flow around user permissions and notifications, and Redux’s unidirectional data flow made it predictable and easy to debug. I structured our actions and reducers clearly so any team member could trace how data flowed through the application.

That said, Angular shines in large enterprise applications where you need strong conventions. On a previous project with a team of 15 developers, Angular’s opinionated structure prevented chaos. It’s also stronger out-of-the-box for dependency injection and reactive programming with RxJS.

I’d choose based on team preference and project requirements. React for flexibility and rapid iteration, Angular for large, structured teams. Both have their place.”

Personalization tip: Be honest about your experience level. If you’re stronger in one, say so, but show you understand the tradeoffs of each approach. Avoid sounding like you’re reading marketing material.

How do you handle database schema migrations in a production environment?
Why they ask: This tests your practical operations knowledge and risk awareness. Production data is critical; they want to know you won’t break things.

Sample answer:

“I use Flyway for schema versioning. Every migration is a numbered SQL file—V1__initial_schema.sql, V2__add_users_table.sql, etc. Flyway tracks which migrations have run and applies new ones automatically during deployment.

The key is making migrations backward-compatible and reversible. For example, if I’m renaming a column, I don’t just rename it—I create the new column, copy data over, update application code to use the new column, then drop the old one in a subsequent release. This lets me roll back if something breaks.

For larger changes, I’ll often add a column first, deploy that change with the app reading and writing to both old and new columns, then in a follow-up deployment drop the old column. This reduces downtime and lets us roll back safely.

We also run migration tests locally and in staging before production. I’ll sometimes generate a migration script, run it against a copy of production data, and verify row counts and data integrity before the real deployment.”

Personalization tip: Reference the specific tool you’ve actually used (Liquibase, Alembic, etc.), but the principle is the same—versions, testing, backward compatibility.

Tell me about a time you optimized performance in a full stack application. What was slow, and how did you fix it?
Why they asks: Performance optimization is a practical, highly valued skill. This tells them if you profile before optimizing (good) or guess (bad), and if you think holistically across the stack.

Sample answer:

“We had a user dashboard that was loading in 4-5 seconds, which was unacceptable. I started by profiling. On the backend, I used Spring’s StopWatch and database query logging to identify bottlenecks. Turned out we were running 20+ database queries for a single page load—classic N+1 problem.

I fixed it using Hibernate’s @EntityGraph annotation to eager-load relationships, and we built a specialized query using projections that returned exactly what the UI needed, not entire objects. That cut database queries from 20 to 2.

On the frontend, I used React DevTools Profiler to see which components were re-rendering unnecessarily. We were creating new objects in render functions, which killed memoization. Fixed it with useMemo and useCallback.

Finally, I enabled gzip compression in Spring and minified JavaScript with Webpack. Total result? Dashboard loaded in 800ms. We also set up monitoring with New Relic so we’d catch performance regressions early.”

Personalization tip: Be specific about tools and measurements. “We made it faster” is vague. “4 seconds to 800ms” proves you actually solved it. Include one backend optimization and one frontend optimization.

How do you ensure security in both frontend and backend code?
Why they ask: Security is non-negotiable in production. They’re checking if you think about it proactively or if it’s an afterthought.

Sample answer:

“Security needs to be layered across the stack. On the backend, I validate all input—never trust the client. I use Spring Security for authentication and authorization, implementing JWT tokens for stateless API calls. Passwords are hashed with bcrypt, never stored plain text.

I’m careful about SQL injection. Even with ORM tools like Hibernate, I avoid string concatenation in queries. I use parameterized queries or JPA’s query methods.

For sensitive data, I use HTTPS everywhere. Credentials go in environment variables or a secrets manager like AWS Secrets Manager, not hardcoded or in version control.

On the frontend, I sanitize user input before rendering to prevent XSS attacks. React actually escapes content by default, which is great. For API calls, I include CSRF tokens for state-changing operations.

I also keep dependencies updated. I run npm audit and Maven’s dependency-check plugin regularly to catch known vulnerabilities. On one project, we found a vulnerability in a logging library—updated it immediately before it could be exploited.

The biggest thing though? I think about security from the start, not as an afterthought. Code reviews with security in mind, threat modeling for critical features, and staying aware of OWASP’s top vulnerabilities.”

Personalization tip: Show real examples from your code. “We implemented JWT tokens” is better than listing theoretical concepts.

Describe a complex bug you debugged across the full stack. What was your approach?
Why they ask: This tests your systematic debugging approach and comfort troubleshooting across layers. It shows problem-solving under pressure.

Sample answer:

“We had a payment processing issue where transactions were succeeding on the backend but users weren’t seeing confirmation on the frontend. Intermittent bug, which is always annoying.

I started by checking logs. Backend logs showed successful payment processing, but frontend logs showed the AJAX call hanging. The network tab in DevTools revealed the API request was taking 30+ seconds before timing out.

I realized the backend wasn’t sending a response—it was hanging after processing. Using Spring’s debug mode, I stepped through and found the issue: we were calling an external analytics service synchronously after processing payment, and that service was occasionally slow or timing out. The payment succeeded but the response never got back to the client.

Fix was straightforward—make that analytics call asynchronous using CompletableFuture. We send the response immediately, fire the analytics call in the background, and even if it fails, the user still sees their confirmation.

But that’s not the full story. I added better error handling and timeouts for that external call, and implemented a retry mechanism with exponential backoff. Then I wrote a test that simulates slow external services to catch this earlier next time.”

Personalization tip: Walk them through your debugging process, not just the solution. This shows thinking, not luck.

What’s your experience with containerization and deployment?
Why they ask: DevOps skills are increasingly expected. They want to know if you can own applications from development through production deployment.

Sample answer:

“I’ve containerized applications with Docker and deployed them with Kubernetes. Docker’s been a game-changer for consistency—I build an image once, and it runs identically on my laptop, in staging, and production.

For a recent project, I created a Dockerfile for our Spring Boot app: multi-stage build to keep the image small, non-root user for security, and health check endpoints. We built it in CI/CD so every commit automatically creates an image.

On Kubernetes, we deployed this using YAML manifests. We defined deployment specs, services for networking, and ingress for external access. For scaling, Kubernetes handles it automatically based on CPU and memory metrics we define.

We also used ConfigMaps for configuration and Secrets for sensitive data like database passwords—never hardcoding credentials in images.

The CI/CD pipeline was GitHub Actions. On every push, it runs tests, builds the Docker image, pushes it to our registry, and triggers a Kubernetes deployment. This automation reduced deployment time from hours to minutes and made rollbacks trivial.”

Personalization tip: If you haven’t used Kubernetes, that’s fine—just focus on Docker and your CI/CD experience. Honesty is better than pretending expertise you don’t have.

How do you keep your technical skills current given the fast pace of technology?
Why they ask: This reveals your commitment to growth and your realistic approach to staying relevant. Tech changes constantly—they want people who embrace that.

Sample answer:

“I set aside time intentionally. I read technical blogs—Baeldung for Spring tutorials, Dan Abramov’s blog for React insights. I follow a few key newsletters without getting overwhelmed.

But I learn best by doing. When I hear about a new library or pattern, I build a small side project using it. Not something I’ll ever use professionally necessarily—just enough to evaluate whether it’s worth learning deeper or if it’s hype. That hands-on experience sticks better than tutorial videos.

I also learn from code reviews and other people’s projects. Reading well-written code teaches you more than many blog posts. And I’m not too proud to ask colleagues about approaches I haven’t used.

For specific technologies critical to my role—like keeping up with Spring Boot’s new versions—I dedicate real time. I’ll spend a Saturday morning going through release notes and trying new features in a test project.

The key for me is staying curious without burning out. I don’t try to learn everything—I focus on technologies that matter for my current role or next role I’m targeting.”

Personalization tip: Share what actually works for you. If you hate reading blogs, don’t pretend you love them. Mention specific resources or projects you’ve worked on.

Describe your experience with version control and collaboration workflows.
Why they ask: Full stack engineers rarely work alone. This assesses your professionalism in code review, branching strategy, and working within a team.

Sample answer:

“I use Git daily and follow a consistent workflow. We use feature branches off main—something like feature/user-authentication or bugfix/payment-validation. Every branch is small and focused so code reviews stay manageable.

Before pushing, I make sure my branch is up-to-date with main to avoid messy merge conflicts. I write clear, descriptive commit messages—“Add password reset endpoint” instead of “fix stuff”. These messages matter when you’re debugging three months later.

Code review is important to me. I never merge my own PR. Teammates review it, catch issues I missed, and suggest improvements. I also review others’ code carefully. It’s not about finding problems—it’s about learning from how they solve things.

For branch protection, we require CI/CD checks to pass and at least one approval before merging. This catches broken code before it hits main.

On one project with a larger team, we added a linting check and automated formatting with Prettier and ESLint. Sounds tedious, but it eliminated style debates and made reviews faster—you’re only discussing logic and architecture, not tabs vs spaces.”

Personalization tip: Mention specific workflows your team uses. If you don’t have this level of structure experience yet, be honest and show you understand why it matters.

Tell me about a project where you wore multiple hats as a full stack engineer.
Why they ask: They want to understand your end-to-end ownership and how you balance backend and frontend responsibilities.

Sample answer:

“I led development on a internal metrics dashboard for a previous company. We were spending too much time in spreadsheets, so I proposed building a proper web app.

The backend was Spring Boot with PostgreSQL. I designed a schema to store daily metrics, built REST endpoints to query them, and integrated with our data pipeline to populate data nightly. I used Spring Batch for the ETL process.

The frontend was React with Redux. I built interactive charts using D3.js, implemented filters and date-range pickers so users could explore data flexibly, and added export functionality to CSV.

The tricky part was the data volume—we had years of historical data. I optimized the backend with database indexes and pagination so we weren’t loading everything at once. On the frontend, I virtualized the table so we could render thousands of rows without tanking performance.

I also deployed it—Docker container, automated tests in CI/CD, deployed to AWS using Elastic Beanstalk.

The best part? Users actually used it. Within a month, they’d eliminated most spreadsheet work. That’s the reward of full stack work—you own the whole experience.”

Personalization tip: Show that you understand tradeoffs. You probably spent more time on one layer than the other—acknowledge that while explaining your choices.

How do you approach learning a new technology or framework quickly?
Why they ask: You’ll encounter unknown tech on the job. They want to see your learning strategy and confidence in tackling unfamiliar territory.

Sample answer:

“First, I understand the problem it solves. Why does this technology exist? What problem did it solve better than alternatives? That context helps me learn faster because I’m not just memorizing syntax—I’m understanding the “why.”

Then I build something small. Not a hello-world tutorial—something slightly challenging that forces me to read docs and think through the concepts. For example, when I learned Redis, I didn’t just run through a tutorial. I built a caching layer for our API and optimized a feature I knew was slow.

I also look at real-world code. GitHub repositories, blog posts showing production usage. Toy examples teach you syntax, but production code teaches you patterns and gotchas.

Finally, I ask questions in code reviews and from more experienced teammates. “I noticed you’re using this pattern—why this approach?” Those conversations compress months of learning into hours.

The key is not being afraid to look dumb. Asking “What’s the difference between A and B?” immediately is faster than struggling for a day.”

Personalization tip: Give an actual example of a technology you learned recently and walk through your process.

What’s your experience with microservices architecture?
Why they ask: Microservices are common in larger organizations. This assesses if you understand the complexity and tradeoffs, or if you’d naively push for them everywhere.

Sample answer:

“I’ve worked in both monolithic and microservice architectures, and I understand the tradeoffs. Microservices aren’t inherently better—they’re a solution to specific problems.

In my last role, we started as a monolith using Spring Boot. It worked great initially, but as the team grew to 20+ engineers, coordination became painful. Teams step on each other, deployment is risky, and scaling means scaling everything.

We broke it into microservices: user service, product service, order service, payment service. Each had its own database and deployed independently. Suddenly teams could move faster without blocking each other.

But it added complexity. Inter-service communication, network latency, distributed tracing, handling partial failures—these are real problems. We invested in tools like Spring Cloud for service discovery and resilience patterns like circuit breakers.

One lesson: don’t start with microservices. Monoliths are easier to debug and refactor. Move to microservices when you actually need the benefits, not preemptively.

I’m comfortable operating in both worlds, but I’m skeptical of microservices for small teams. The operational overhead isn’t worth it until you hit real problems.”

Personalization tip: Show nuance. People who’ve only worked in one architecture often have dogmatic views. Demonstrating you’ve worked across contexts shows wisdom.

Behavioral Interview Questions for Java Full Stack Engineers
Behavioral questions explore how you work with others, handle pressure, and approach problems beyond just code. Structure your answers using the STAR method: Situation, Task, Action, Result. This keeps your answer focused, specific, and compelling.

Tell me about a time you had a disagreement with a teammate. How did you resolve it?
Why they ask: Collaboration is essential. They want to see if you’re defensive, collaborative, or can find middle ground.

STAR guidance:

Situation: Set the scene briefly. “I was working on a feature with a senior developer who wanted to implement a complex caching solution.”
Task: What was your responsibility? “I was responsible for the implementation timeline and code quality.”
Action: What did you actually do? “I listened to their approach, then shared performance data showing a simpler solution would meet our requirements. We discussed both approaches, looked at the tradeoffs together, and ultimately chose the simpler option with a plan to revisit if we hit scaling issues later.”
Result: What happened? “We shipped faster, the code was more maintainable, and the senior developer appreciated the data-driven discussion. We avoided both resentment and over-engineering.”
Personalization tip: Use a real example where you genuinely found common ground, not one where you “won” the argument.

Describe a time you failed at something. What did you learn?
Why they ask: Failure is inevitable. They want to see if you blame others, hide from it, or grow from it. Growth mindset is crucial.

STAR guidance:

Situation: “I deployed a database migration that I thought was thoroughly tested. Turns out I missed an edge case with NULL values.”
Task: “The production database started throwing errors, and users couldn’t access a critical feature.”
Action: “I immediately rolled back the migration, fixed the issue, and re-deployed. More importantly, I wrote comprehensive tests for edge cases and added a database backup step before future migrations. I also documented the mistake in our wiki so others could learn from it.”
Result: “We recovered in 20 minutes with zero data loss. More importantly, we prevented that mistake class from happening again. The team adopted my migration testing checklist.”
Personalization tip: Pick a real failure, not a tiny made-up one. Interviewers can smell those. The key is showing what you learned and changed.

Tell me about a project where you had to learn something new quickly under pressure.
Why they ask: Tech moves fast. This assesses your resilience and learning velocity when you don’t have time to be comfortable.

STAR guidance:

Situation: “We had a critical performance issue in production on a React component I’d inherited from another team. We were losing users because the page was too slow.”
Task: “I had 24 hours to solve it because we were losing revenue by the minute.”
Action: “I dug into React DevTools Profiler to understand why components were re-rendering. I’d never used it before, but the documentation was clear. I found unnecessary re-renders, fixed them with useMemo and component splitting. I also checked the network waterfall and found we could parallelize API calls instead of sequential loading.”
Result: “Page load dropped from 8 seconds to 2 seconds. The financial impact was immediate—we stopped the user drop-off. More importantly, I now understand React performance profiling deeply. That knowledge has helped me catch performance issues before they become problems.”
Personalization tip: Show the time pressure was real, not invented. Interviewers respect learning under constraints—it shows capability.

Tell me about a time you had to communicate something complex to a non-technical stakeholder.
Why they ask: Full stack engineers work with product managers, business teams, and leadership. They need to translate technical concepts into business language.

STAR guidance:

Situation: “Our product manager wanted to add a real-time notification feature. The engineers told her it would take 3 sprints. She couldn’t understand why—it seemed like just a new feature.”
Task: “I needed to explain the architecture and time required without losing her in technical details.”
Action: “I walked her through it like this: ‘We need to add WebSocket support, which changes our entire communication model from request-response to bidirectional streaming. We need to handle disconnections, reconnections, and message queuing. We also need to update our deployment infrastructure to support sticky sessions. Think of it like upgrading from a phone system where you call someone, to a walkie-talkie where you’re constantly connected. That’s a different system.’”
Result: “She immediately understood. She prioritized it differently knowing the scale, and we negotiated a simpler MVP—just notifications for the top 3 use cases instead of everything. This aligned engineering effort with business value.”
Personalization tip: Use an analogy that lands with non-technical people. “It’s like X but for web apps” works better than explaining protocols.

Describe a time you mentored someone or helped a teammate grow.
Why they ask: Leadership matters even without a formal title. They want to see if you lift people around you or just focus on yourself.

STAR guidance:

Situation: “A junior developer joined our team with strong Java fundamentals but no full stack experience. They were intimidated by the React codebase.”
Task: “I was asked to help them get productive on frontend features.”
Action: “Instead of just telling them how, I had them pair with me on a small feature. They did the coding while I asked guiding questions. ‘What would happen if we rendered this list inline instead of asynchronously?’ That pushed them to think about loading states and error handling. After a few sessions, they felt confident. I also sent them one blog post about React hooks—not five, just one good one—so they didn’t feel overwhelmed.”
Result: “Within a month, they were shipping features independently. A few months later, they mentored the next junior developer. That multiplier effect is what good teams are built on.”
Personalization tip: Show you adapted to their learning style. One-size-fits-all mentoring doesn’t work.

Tell me about a time you pushed back on a deadline or requirement.
Why they ask: They want to know if you’re realistic about engineering or if you’ll commit to impossible timelines and burn out. Healthy pushback shows maturity.

STAR guidance:

Situation: “Product wanted a complex reporting feature in 2 weeks. It was a big ask.”
Task: “I needed to give honest feedback without being the blocker.”
Action: “I didn’t just say ‘impossible.’ I broke down the work: data pipeline setup (4 days), report generation (5 days), UI and testing (3 days). That’s 12 days of work, but with dependencies, it was actually 10 work days. I showed we could do it in 2 weeks if we cut scope. I proposed a MVP: just the top 3 reports instead of 5. That saved us 4 days.”
Result: “We shipped the MVP on time. Product got value quickly, and we improved the feature over the next few months. If we’d tried to do everything, we’d have missed the deadline anyway, just with burned-out engineers.”
Personalization tip: Show you did the math. “Too hard” is vague. “Here’s the breakdown and what we can realistically achieve” is credible.

Describe a time you received critical feedback. How did you respond?
Why they ask: Nobody’s perfect. They want to see if you’re defensive or coachable.

STAR guidance:

Situation: “In a code review, a senior engineer rejected my PR for using a complex custom solution when a library existed that did it better.”
Task: “I had to accept the feedback and improve.”
Action: “Honestly, my first reaction was defensive—I thought my solution was clever. But I re-read their comment, checked out the library, and saw immediately that they were right. It was simpler, tested, and more maintainable. I rewrote my code using it and thanked them for the pushback. I also asked them to teach me how they knew about that library—was it just experience?”
Result: “I learned something valuable about knowing what exists before reinventing wheels. That engineer became an informal mentor. More importantly, I became better at recognizing when to use existing solutions versus building custom ones.”
Personalization tip: Admit your initial reaction was human, then show how you grew past it.

Technical Interview Questions for Java Full Stack Engineers
These questions require you to think out loud and demonstrate your technical reasoning. There’s rarely one perfect answer—interviewers care more about your process than the conclusion.

Design a URL shortener like bit.ly. Walk me through your approach.
Why they ask: This assesses your system design thinking—database choice, scalability, API design, and tradeoffs.

Framework for thinking through it:

Start by clarifying requirements: “So users paste a long URL, get back a short code, and when they visit that short code, they’re redirected to the original URL. We’re tracking clicks. Is this for millions of URLs, and do we need high availability?”

Assuming yes to both: Design the data model first. A simple schema: id, original_url, short_code, created_at, click_count. You might also track user who created it, expiration, etc.

API design:

POST /urls → takes original_url, returns short_code
GET /urls/{short_code} → returns original URL and click count
DELETE /urls/{short_code} → deletes the mapping
Data storage: Start with a relational database (MySQL/PostgreSQL). Index short_code for fast lookups. Think about sharding if you grow—hash the short code to distribute across databases.

Generating short codes: Don’t use incrementing IDs (guessable, scalability issues). Use a base-62 encoding of a unique ID, or generate random alphanumeric codes and check for collisions.

Caching: Use Redis. Store short_code → original_url mapping. Tens of millions of short codes can fit in memory. Significantly speeds up redirects.

Scaling considerations: If you’re handling millions of redirects per second, you need load balancing. Redis replication for high availability. Monitor hit ratios to ensure cache effectiveness.

Tradeoffs to mention: Strong consistency vs eventual consistency (do we need instant click counts?). In-memory vs persistent storage. Centralized vs distributed ID generation.

Personalization tip: This isn’t about memorizing a perfect answer. Show your thinking: start simple, identify bottlenecks, scale deliberately.

Given this Spring Boot controller, what’s wrong with it? How would you improve it?
@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }
    
    @PostMapping
    public Product create(@RequestBody Product product) {
        return productService.save(product);
    }
}
Framework for analyzing code:

Walk through this methodically:

Exception handling: No try-catch or exception handling. If findAll() throws an exception, the client gets a 500 with a stack trace. Better: use @ControllerAdvice for centralized exception handling that returns meaningful error messages.

Validation: The create method accepts raw Product objects with no validation. A user could submit negative prices or null names. Add @Valid and use annotations like @NotNull, @Min, @Max on the entity or DTO.

Security: No authentication/authorization checks. Anyone can see all products or create products. Add Spring Security with role-based access control.

Pagination: getAllProducts() returns everything. If there are 100,000 products, you’re loading them all into memory. Add pagination: Page<Product> getAllProducts(Pageable pageable).

DTOs: Exposing database entities directly is risky. Use Data Transfer Objects to control what fields clients see. A ProductDTO might exclude internal fields or include computed fields.

Logging: No logging for debugging. Add logger.info() calls at key points.

Improved version:

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public Page<ProductDTO> getAllProducts(Pageable pageable) {
        logger.info("Fetching products, page: {}", pageable.getPageNumber());
        return productService.findAll(pageable).map(ProductDTO::fromProduct);
    }
    
    @PostMapping
    public ResponseEntity<ProductDTO> create(@Valid @RequestBody CreateProductRequest request) {
        logger.info("Creating product: {}", request.getName());
        Product product = productService.save(request.toProduct());
        return ResponseEntity.status(HttpStatus.CREATED).body(ProductDTO.fromProduct(product));
    }
}
Personalization tip: Don’t memorize the perfect answer. Show you recognize issues: error handling, validation, security, pagination, DTOs. The specifics matter less than recognizing problems.

How would you debug a React component that’s not rendering data you expect?
Why they ask: Debugging is a practical, daily skill. This assesses your systematic approach.

Framework for debugging:

“First, I’d check the browser console for JavaScript errors. That catches syntax issues immediately.

Then I’d verify the data is actually being fetched. I’d check the Network tab to see if the API call is happening and what response it’s returning. Is the status 200? Is the response what I expect?

If the API call looks good, I’d check React DevTools. In the Components tab, I’d find the component and look at its props and state. Are they what I expect? If not, I’d trace backward to where they come from.

If the data looks correct in DevTools but still not rendering, I’d add a console.log() right before the render to see what’s being rendered.

A common issue: the data arrives asynchronously

Build your Java Full Stack Engineer resume
Teal's Resume Builder tailors your resume to Java Full Stack Engineer job descriptions — highlighting the right skills, keywords, and experience.

Try the Resume Builder — Free
Find Java Full Stack Engineer Jobs
Explore the newest Java Full Stack Engineer roles across industries, career levels, salary ranges, and more.

See Java Full Stack Engineer Jobs
Start Your Java Full Stack Engineer Career with Teal

Join Teal for Free
Join our community of 4 million+ members and get tailored career guidance and support from us at every step.

Get Started for Free
AI Resume Builder
Get started for free
No credit card required, ever.
Tools
AI Resume Builder
Job Application Tracker
ATS Resume Checker
Resume Summary Generator
Resume Job Description Match
Resume Bullet Point Generator
Free AI Resume Builder
Templates & Examples
Resume Examples
Best Resume Format
Resume Templates
Cover Letter Examples
Cover Letter Templates
CV Examples
Resources
Resume Hub
Career Hub
Resume Synonyms
Job Search
Browse Jobs
Career Paths
Comparisons
Teal vs Jobscan
Teal vs Rezi
Teal vs Novoresume
Teal vs Zety
Teal vs Kickresume
Teal vs Resumenerd
Teal vs Resume Genius
Company
Sign Up
Log In
Teal+ Pricing
About Us
Open Positions
Affiliate Program
Over 4 Million Users
Free AI tools and resources to help you land your next job, faster

Trustpilot
© 2026 Teal Labs, Inc

Privacy Policy
Terms of Service
