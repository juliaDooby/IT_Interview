CI/CD Interview Questions for Freshers
1. State differences between a docker image and a container.
The following are the differences between Docker images and containers:


Docker Container	Docker Image 
Docker Containers are actually Docker Virtual Machines. Essentially, a Docker image is a map of the house, while a Docker container is the actual house itself, so we can call it an instance of an image. 	Images are templates containing instructions for creating containers. With Docker images, containers can be created to run on the Docker platform.
It is a real-world entity.	It is a logical entity.
Using images, containers can be created as many times as necessary.	An image is only created once.
In order for containers to change, the old image must be deleted and a new one must be used to build the containers.	There is no change to the image. It is immutable.
A container requires computing resources to run since it runs as a Docker Virtual Machine.	Computing resources aren't required to work with images.
Run the "docker build." command to build a container from an image.	Creating a Docker image requires writing a script in a Dockerfile.
In order to function, containers utilize server information and file systems provided by docker images.	You can use Docker images to package up applications and pre-configured server environments.

Create a free personalised study plan
Get into your dream companies with expert guidance
Real-Life Problems
Prep for Target Roles
Custom Plan Duration
Create My Plan
2. What is CI/CD pipeline?
CI/CD is a combination of continuous integration (CI) and continuous delivery (usually) or continuous deployment (rarely) in software engineering. Modern DevOps operations are built on the foundation of continuous integration and continuous delivery, or the CI/CD pipeline. You can automate your software delivery process with a CI/CD pipeline. As part of the pipeline, code is built, tests are run (CI), and a new version of the application is safely deployed (CD). By automating pipelines, manual errors are eliminated, developers are provided with standardized feedback loops, and iterating on products is made more efficient. In DevOps, continuous integration and continuous delivery (CI/CD) are best practices that ensure that code changes are delivered regularly and reliably.

3. Explain Docker.
As its name implies, Docker is a containerization platform that packages applications and their dependencies together in containers to ensure that the applications run seamlessly across multiple environments. Docker containers are entire file systems that contain all the components for running a piece of software: code, system tools, runtime, system libraries, etc. Any software that can be installed on a server can be packaged in a Docker container. It ensures that the software always runs the same in any environment.

You can download a PDF version of Ci Cd Interview Questions.

4. What does containerization mean?
As the term implies, containerization entails packaging together software code along with all the necessary components, such as frameworks, libraries, and other dependencies, in their own container. Among the advantages of containerization is that a container can be viewed as a fully packaged computing environment that can be transported in one piece.

5. Describe the build stage.
The build stage is the first phase of the CI/CD pipeline, and it automates a lot of the steps that a typical developer goes through, such as installing tools, downloading dependencies, and compiling a project. Aside from building code, build automation involves the use of tools to verify that the code is safe and compliant with best practices. In this stage, the buildability and testability of the application are validated.

Explore InterviewBit’s Exclusive Live Events
By
6. What is the importance of DevOps?
A robust and flexible product deployment system is essential for organizations to remain competitive in today's digitized world. It is here that the DevOps concept comes into play. 

The DevOps approach plays a crucial role in generating agility and mobility across all aspects of software development, from conception to deployment.
Continuously updating and improving products is more streamlined and efficient with DevOps.
By implementing DevOps, developers increase their focus on building only code, while automating and consolidating the remaining tasks.
In addition to creating better communication and collaboration, combining the engineering and operations teams increase transparency and accessibility.
Increasing efficiency speeds up development and reduces coding errors.
Programming defects are the most common cause of development failures. DevOps teams will facilitate more releases in a shorter time frame.
7. Can you explain the Git branch?
The Git branch is essentially a separate line of development that can be used for working on a particular feature, usually during development. The use of branches allows developers to code without interfering with the work of other team members.


Start Your Coding Journey With Tracks
Master Data Structures and Algorithms with our Learning Tracks
Topic Buckets
Mock Assessments
Reading Material
View Tracks
8. What do you mean by Git Repository?
As part of the software development process, software projects are organized through Git repositories. In the repository, developers can keep track of all the files and changes in the project, so that they can navigate to any point in its history at any time.

9. Explain Git.
It is a distributed version control system that keeps track of changes to code repositories. As projects progress, Git uses a branch-based workflow to streamline team collaboration. Learn More.

10. What is Version Control?
Version control involves the use of a central repository where teammates can commit changes to files and sets of files. The purpose of version control is to track every line of code, and to share, review, and synchronize changes between team members. The following are some of the most popular version control tools:

Mercurial
Subversion (SVN)
Concurrent Version Systems (CVS)
Perforce
Bazaar
Bitkeeper
Fossil
11. Does CI/CD require any programming knowledge?
As far as CI/CD goes, it does not require any programming language or scripting language to be used. It is not necessary to use any programming or scripting language when you use a GUI-based tool like Azure DevOps (ADO). The use of ARM templates in Azure DevOps requires scripting knowledge. Therefore, it depends on the tools and different ways of setting up CI/CD.

12. What are some popular CI/CD tools?
Some popular CI/CD tools are as follows:

Jenkins
CircleCI
Bamboo
Team City
Codefresh

Discover your path to a  
Successful Tech Career for FREE!
Answer 4 simple questions & get a career plan tailored for you
Interview Process
CTC & Designation
Projects on the Job
Try It Out
2 Lakh+ Roadmaps Created
13. State difference between CI/CD vs DevOps.
DevOps and CI/CD differ in the following ways:

CI/CD	DevOps
An important feature of CI/CD is its ability to automate and deliver code changes quickly and reliably. 	The DevOps methodology is an approach to streamlining the development of products by integrating ideas, practices, processes, and technology.
CI/CD involves continuous automation and monitoring of the entire application lifecycle, starting with integration and testing and ending with delivery and deployment. As a result of CI/CD pipelines, organizations are able to minimize bottlenecks during software development and deployment.	Organizations can implement DevOps methodologies to encourage rapid, continuous deployment of software by setting up their production teams and processes.
A continuous integration process optimizes the process of building, integrating, and testing code in a development environment. Continuous delivery is concerned with deploying code effectively in production.	DevOps promotes minimizing waste and creating scalable, enduring systems.
14. What is a CI/CD Engineer?
CI/CD engineers can improve the integration and operation of CI/CD tools as well as ensure quality end-to-end integration systems. CI/CD Engineers would keep teams motivated and lead the charge on CI/CD. It is the CI/CD engineer's responsibility to ensure that CI/CD tools and platforms are functioning correctly within an organization. CI/CD engineers understand how to optimize their teams' development and release processes.

15. Explain the benefit of the CI/CD Pipeline.
CI/CD brings certain benefits to your organization that will help you decide whether to go ahead with it. Below are some of these benefits:

CI/CD makes it possible to quickly integrate small code changes and test the changes easily.
With CI/CD setup, fault isolation is easier and faster. In fault isolation, the system is monitored, the fault occurrence time is determined, and the fault location is determined.
With CI/CD, MTTR (mean time to resolution) is reduced since changes are smaller and easier to implement. CI/CD setup increases the reliability of the unit and integration testing.
When CI/CD is set up, small code changes are merged very quickly and the code is ready for production very soon.
CI improves transparency by detecting early-stage failures like build failures, merge issues, integration test failures, etc.
CD facilitates the release of code to end-users.
16. Explain Continuous Integration, Continuous Delivery, and Continuous Deployment.
Continuous Integration (CI): Continuous integration (CI) is the practice of developers regularly integrating their code changes into a repository. Integration may take place several times a day and is verified by automated tests and a build process. As a result, integration challenges can be avoided, bugs can be found early in the development cycle, fixed, and tested iteratively. Every time new commits are integrated into the main branch, continuous integration emphasizes testing automation to make sure the application is not broken.
Continuous Delivery (CD): In continuous delivery, all code changes are automatically deployed to the test and/or production environments after the build is complete. Feature additions, configuration changes, and error fixes are some examples of changes. By automating the delivery of new code to users, CD ensures a safe, quick, sustainable process. The CD process also involves some additional checks, like performance tests in production. With Continuous Delivery, deployments are predictable and scheduled regularly.
Continuous Deployment (CD): The most critical stage of the pipeline is continuous deployment. By following this practice, you will be able to release all changes that have passed all stages of the production pipeline to your customers on time. Code changes can be made live much more quickly at this stage because there is little human interaction. In addition, continuous deployment allows you to accelerate your feedback loop with your customers and relieve pressure on your team since "release days" are no longer needed. Minutes after finishing their work, developers see their work go live.
CI/CD Interview Questions for Experienced
1. Describe Chef?
Chef is essentially an automation platform for turning infrastructure into code. A chef is a tool used to automate processes with scripts. There are three main components of Chef that can be categorized as follows:

Chef Workstation: The workstation is the computer system on which the administrator sits. This system generates code for configuring and managing infrastructure, known as recipes (written in Ruby). A cookbook consists of multiple recipes. In order to upload cookbooks to the server, the Knife command line tool is used.
Chef Server: Second, a server resides between a workstation and its nodes, which stores the cookbooks. Servers provide the tools necessary to enable node configurations, and they may be locally or remotely hosted.
Chef Node: The final component is the node, which requires configuration. You can have a number of Chef nodes that collect information about the current state of a node. The server then compares this information with the configuration files to determine if any new configuration is needed.
Conclusion
It is undeniable that interviews are stressful. Nevertheless, knowing what to expect and doing your research will significantly increase your chances of landing your dream position. Experience, however, cannot be replaced by knowledge. It would be helpful if you tested a few CI/CD platforms as part of your preparation. Semaphore CI/CD, for example, is simple to use; just browse the getting started the tour, which includes ready-to-use demo projects in the most popular languages.

If you aren't adequately prepared, you may find it difficult to answer simple interview questions. We have put together a comprehensive list of frequently asked CI/CD interview questions to make the process of interviewing for a manager or engineer position easier. Microsoft, Google, IBM, Apple, and other tech companies typically ask these questions. You can also gain an edge over your competitors if you conduct thorough research. Prior to your interview, learn about the history and culture of the company. The interview should be a reflection of your honesty.

Important Interview Resources
DevOps Interview Questions
Jenkins Interview Questions
Top DevOps Principles
Top DevOps Projects
2. What do you mean by Rolling Strategy?
Rolling deployments update running instances of an application with new releases as they are released. The process involves replacing old versions of an application over time with new versions of the application by replacing the entire infrastructure on which the application is run.

3. Explain OpenShift Container Platform.
OpenShift Container Platform is a PAAS service offered by RedHat, formerly called OpenShift Enterprises. Additionally, Open Shift offers auto-scaling, self-healing, and highly available applications without the need to manually set them up in a traditional environment, even if they're on-premises or in the cloud. The OpenShift platform supports a wide variety of open-source programming languages, giving developers a polyglot choice.

4. Can you tell me about the serverless model?
There is a cloud-native approach to development known as serverless development, which allows developers to develop and run applications without requiring the management of servers. The server still exists serverless, but it is abstracted from application development.

5. What are some of the deployment strategies?
Regular release/deployment: Through a single release, the software is made available to the public.
Canary releases: These releases are intended to reduce the risk of failure by exposing a small fraction of the user base (around 1%) to the release. As part of a canary release, developers gradually transition users to the new release in a controlled manner.
Blue-green releases: Essentially, it involves running two instances of an application simultaneously; one is the current stable version, and the other is the most recent version. An immediate switch is made from the old version to the new one. If there is a problem, users can immediately revert to the previous version, which is safer than regular or big-bang releases.
6. How do DevOps tools work together?
A generic logical flow is shown below that automates it to ensure smooth delivery. Organizations may follow different flows depending on their needs.

Developers create code, and a version control system, such as Git, manages the source code.
Any modifications made to this code are committed to the Git repository by developers.
Jenkins extracts the code from the repository and builds it using software such as Ant or Maven using the Git plugin.
Puppet is used to deploy and configure test environments, and Jenkins releases this code to the test environment so that testing can be conducted using Selenium tools.
Jenkins deploys the code once it has been tested on the production server (even the production servers are managed by resources like a puppet).
Nagios, for example, continuously monitors it after deployment.
Using Docker containers, we can test the build features in a controlled environment. Learn More.
7. What are the top testing tools in continuous testing?
An essential part of the CI/CD pipeline is continuous testing (CT). The developers are buffered by it, as it squashes bugs in a timely manner. This ensures that no matter how many releases take place, the end-user experience remains uncompromised. Despite accelerated processes, CT serves as a safety net that preserves the end-user experience. It must be seamlessly integrated into the software delivery pipeline since it is a continuous process. The following are the top testing tools used in continuous testing:

Testsigma
Selenium
IBM Rational Functional Tester
Tricentis Tosca
UFT (Unified Functional Testing)
8. Why is Automated Testing essential for CI/CD?
In order to ensure code quality, automation is an important characteristic of the CI/CD pipeline. The test automation process is used throughout the software development pipeline to identify dependencies and other issues, push changes to the different environments, and deploy applications into production. As part of its quality control role, the automation will assess everything from API usage and performance to security. In this manner, all changes made by team members are integrated comprehensively and implemented correctly.

With automated testing, we can run tests simultaneously across multiple servers/containers, resulting in a faster testing process.
Automated testing provides more consistency. Software automation eliminates human errors, and bias, and assures that it behaves as expected.
To meet changing demands, tools and frameworks in a CI/CD pipeline need to be adjusted quickly. Keeping up with updates and being agile is difficult with manual testing. However, most configurations are done automatically when you have automated tests. This allows you to migrate quickly to new environments.
Maximizing the workforce is crucial to a successful development project. Test automation frees engineers to work on other high-value tasks.
CI/CD pipelines require all the testing effort when small changes are made. Validating minor changes continuously is easier with automated testing.
9. In what way does testing fit into continuous integration? Is automated testing always a good idea?
The testing process is inextricably linked to continuous integration. Continuous feedback is the main benefit of CI for teams. Code developers test their code in the CI to ensure that it behaves as expected. Without testing, there would be no feedback loop to determine whether the application is release-ready.

10. Explain some common practices of CI/CD.
To help you establish an efficient pipeline for CI/CD, here are some best practices:

Embrace the DevOps culture.
Ensure continuous integration is implemented and utilized.
Ensure the same deployment process is followed for every environment.
In the event that your pipeline fails, restart it.
Version control should be applied.
Incorporate the database into the pipeline.
Keep an eye on your continuous delivery pipeline.
Get your CD pipeline up and running.
11. In CI/CD, does security play an important role? How does it get secured?
There are many factors that affect the security of CI/CD pipelines. These include:

The importance of unit testing cannot be overstated when it comes to the testing of multiple unit-testable distributed components. It is therefore important to unit test your code properly.
Static analysis security testing (SAST) scans your code for security vulnerabilities and the libraries you use. To ensure SAST scanning, all modern tools integrate well with the CD pipeline.
DAST (dynamic analysis security testing) is a tool for securing your application by dynamically scanning for security vulnerabilities. It simulates the actions of an attacker by performing the tests outside the application.
12. What is the difference between a hosted and a cloud-based CI/CD platform?
Hosted and Cloud-based CI/CD platforms differ in the following ways:

Hosted CI/CD platform	Cloud-based CI/CD platform
It is necessary to manage a hosted CI server in the same way as any other server. Installation, configuration, and maintenance are all required before they can be used.	Cloud-based CI platforms, however, do not require maintenance. An organization can immediately start using CI/CD platforms in the cloud without installing or configuring anything. 
Keeping the server secure requires updates and patches. 	As the cloud is capable of providing all the machine power necessary, scalability is not an issue.
Additionally, failures in the CI server can halt development and deployment.	The cloud SLA (service-level agreement) guarantees the reliability of the platform.
13. Can a branch live for a long time?
Continuous integration follows trunk-based development practices, which means branches should be short-lived. Branch durations should be kept to a minimum of a few hours and a maximum of a day.

14. Explain trunk-based development.
The trunk-based development approach ensures software remains up-to-date by integrating small, frequent updates into the main branch or a core "trunk". As a result of its ability to streamline merging and integration phases, it can be used to achieve CI/CD and to increase the speed and efficiency of the delivery of software and the efficiency of organizations. It is a branching model that consists of most of the work happening in a single trunk (also known as the trunk, master, or main). Each developer in the team merges their changes into the trunk on a daily basis. The reason why trunk-based development is popular is that it simplifies version control. This model minimizes merge conflicts due to the trunk's single source of truth.

30 Common CI/CD Interview Questions (with Answers)
11 May 2022
Updated: 3 Apr 2024
mm
Written by:
Tomas Fernandez
Avatar for Dan Ackerson
Reviewed by:
Dan Ackerson
📥 This article is long. Download a PDF to read it later.
Download
Acing a CI/CD interview is all about preparation. Preparation starts with collecting as much information as you can about the prospective company, and their history, product, and interviewing process.

Next in the list is to brush up your technical skills because knowing your technical stuff will make you stand out. Questions (like the ones in this article) are a great way of testing your knowledge. To help you, we’ve collected and answered 30 common CI/CD interview questions. How many can you answer?


To get all the answers, you can watch the video or listen to our podcast episode. Enjoy!

How many of these questions can you answer?
What is version control?
What is Git?
What is a Git repository?
Which other version control tools do you know of?
What is a Git branch?
What is merging?
What is trunk-based development?
What is Gitflow, and how does it compare to trunk-based development?
How long should a branch live?
What is continuous integration?
How do CI and version control relate to one another?
What’s the difference between continuous integration, continuous delivery, and continuous deployment?
Name some benefits of CI/CD
What are the most important characteristics in a CI/CD platform?
What is the build stage?
What’s the difference between a hosted and a cloud-based CI/CD platform?
How long should a build take?
Is security important in CI/CD? What mechanisms are there to secure it?
Can you name some deployment strategies?
How does testing fit into CI?
Should testing always be automated?
Name a few types of tests used in software development
How many tests should a project have?
What is a flaky test?
What is TDD?
What is the main difference between BDD and TDD?
What is test coverage?
Does test coverage need to be 100%?
How can you optimize tests in CI?
What’s the difference between end-to-end testing and acceptance testing?
Version control
CI/CD interview questions may include version control and Git as a topic.

1. What is version control?
Version control is a set of practices and tools for managing codebases. Developers use version control to keep track of every line of code, and share, review, and synchronize changes among a team.

2. What is Git?
Created by Linus Torvalds to support the open-source development of Linux, Git is the most popular version control tool. It uses a distributed repository model that can efficiently handle projects of any size.

3. What is a Git repository?
A Git repository keeps track of every file in a software project. The repository serves as an index for all files and changes in the project, allowing developers to navigate to any point in the project’s history.

4. Which other version control tools do you know of?
Mercurial
Subversion (SVN)
Concurrent Version Systems (CVS)
Perforce
Bazaar
Bitkeeper
Fossil
5. What is a Git branch?
A Git branch is an independent line of development, usually created for working on a feature. Branches let developers code without affecting the work of other team members.

6. What is merging?
Merging consists of joining branches. For example, when developers incorporate their peer-reviewed changes from a feature branch into the main branch.

7. What is trunk-based development?
Trunk-based development is a branching model where most of the work takes place in a single trunk, usually called trunk, master, or main. The trunk receives daily merges from all developers in the team.

Trunk-based development is a popular development model because it simplifies version control. Since the trunk is a single source of truth, this model minimizes the chances of merge conflict.

8. What is Gitflow, and how does it compare to trunk-based development?
Gitflow is a workflow for Git that makes heavy use of branches. In Gitflow, all the code is merged into the develop branch instead of the main branch, which serves as an abridged version of the project’s history.

Features are worked on specific “feature branches” (typically prefixed with feature/). In the same fashion, releases also create a dedicated release/ branch.

Compared with trunk-based development, Gitflow is more complex and has a higher chance of inducing merge conflicts, which is why it has fallen out of favor among the development community.

9. How long should a branch live?
In the context of continuous integration, branches should follow trunk-based development practices and thus be short-lived. Ideally, a branch should last for a few hours or, at most, a day.

CI/CD
Your CI/CD interview questions will, at the minimum, cover some basic concepts such as what is CI and how it works.

10. What is continuous integration?
Continuous Integration (CI) is a software development methodology where developers — following the trunk-based model — merge their changes to the main branch many times per day.

CI is supported by automated tests and a build server that runs them on every change. As a result, failures are made visible as soon as they are introduced and can be fixed within minutes.

11. How do CI and version control relate to one another?
Every change in the code must trigger a continuous integration process. This means that a CI system must be connected with a Git repository to detect when changes are pushed, so tests can be run on the latest revision.

12. What’s the difference between continuous integration, continuous delivery, and continuous deployment?
Continuous integration (CI) executes the sequence of steps required to build and test the project. CI runs automatically on every change committed to a shared repository, offering developers quick feedback about the project’s state.

Continuous delivery is an extension of CI. Its goal is to automate every step required to package and release a piece of software. The output of a continuous delivery pipeline takes the form of a deployable binary, package, or container.

Continuous deployment is an optional step-up from continuous delivery. It is a process that takes the output from the delivery pipeline and deploys it to the production system in a safe and automated way.

A CI/CD workflow
A complete CI/CD workflow
13. Name some benefits of CI/CD
Less risk: automated tests reduce the chance of introducing bugs, creating a safety net that increases the developer’s confidence in their code.
More frequent releases: the automation provided by continuous delivery and continuous deployment allows developers to release and deploy software safely many times per day.
Improved productivity: freed from the manual labor of building and testing the code, developers can focus on the creative aspects of coding.
Elevated quality: CI acts as a quality gate, preventing code that is not up to standards from getting released.
Better design: the iterative nature of continuous integration lets developers work in small increments, allowing a higher degree of experimentation, which leads to more innovative ideas.
14. What are the most important characteristics in a CI/CD platform?
Reliability: the team depends on the CI server for testing and deployment, so it must be reliable. An unreliable CI/CD platform can block all development work.
Speed: the platform should be fast and scalable to obtain results in a few minutes.
Reproducibility: the same code should always yield the same results.
Ease of use: easy to configure, operate, and troubleshoot.
15. What is the build stage?
The build stage is responsible for building the binary, container, or executable program for the project. This stage validates that the application is buildable and provides a testable artifact.

16. What’s the difference between a hosted and a cloud-based CI/CD platform?
A hosted CI server must be managed like any other server. It must be first installed, configured, and maintained. Upgrades and patches must be applied to keep the server secure. Finally, failures in the CI server can block development and stop deployments.

On the other hand, a cloud-based CI platform does not need maintenance. There’s nothing to install or configure, so organizations can immediately start using them. The cloud provides all the machine power needed, so scalability is not a problem. Finally, the reliability of the platform is guaranteed by SLA.

17. How long should a build take?
Developers should get results from their CI pipeline in less than 10 minutes. That’s the longest time that’s practical to wait for results.

18. Is security important in CI/CD? What mechanisms are there to secure it?
Yes. CI/CD platforms have access to all kinds of sensitive data such as API keys, private repositories, databases, and server passwords. An improperly secured CI/CD system is a prime target for attacks and can be exploited to release compromised software or to get unauthorized access. A CI/CD platform must support mechanisms to securely manage secrets, and control access to logs and private repositories.

19. Can you name some deployment strategies?
Regular release/deployment: releases software to everyone at once, making it available to the general public.
Canary releases: this is a method that reduces the chance of failure by exposing a small portion of the userbase (around 1%) to the release. With a canary release, developers gradually switch users to the latest release in a controlled way.
Blue-green releases: consists of running two simultaneous instances of an application; one is the stable version currently serving users and the other the latest release. Users are switched from the former to the latter all at once. This method is safer than the regular or big bang releases because users can instantly be routed back to the previous version if there is a problem.
Dark launches: are deployments where new features are released without being announced. Features can be enabled in a very fine-grained way with feature flags.
Testing
Testins is inseparable from CI, so your CI/CD interview questions will include this topic.

20. How does testing fit into CI?
Testing is integral to and inseparable from CI. The main benefit teams get from CI is continuous feedback. Developers set up tests in the CI to check that their code behaves according to expectations. There would be no feedback loop to determine if the application is in a releasable state without testing.

21. Should testing always be automated?
Yes, CI requires that all tests are automated. They must work without human intervention.

That is not to say that manual or exploratory testing don’t have their places. They are very useful for discovering potential features and finding further test cases to automate.

22. Name a few types of tests used in software development
There are more types of tests than we can count with both hands, but the most common ones are:

Unit tests: validate that functions or classes behave as expected.
Integration tests: are used to verify that the different components of an application work well together.
End-to-end tests: check an application by simulating user interaction.
Static tests: finds defects in code without actually executing it.
Security tests: scans the application’s dependencies for known security issues.
Smoke tests: fast tests that check if the application can start and that the infrastructure is ready to accept deployments.
23. How many tests should a project have?
There is no single answer as it depends on the size and nature of the project. That being said, for various reasons, test suites tend to follow in distribution the testing pyramid.

The testing pyramid may be part of your CI/CD interview questions.
The testing pyramid
24. What is a flaky test?
A test that intermittently fails for no apparent reason is called a flaky test. Flaky tests usually work correctly on the developer’s machine but fail on the CI server. Flaky tests are difficult to debug and are a major source of frustration.

Common sources of flakiness are:

Improperly handled concurrency.
Dependency on test order within the test suite.
Side effects in tests.
Use of non-deterministic code.
Non-identical test environments.
25. What is TDD?
Test-Driven Development (TDD) is a software design practice in which a developer writes tests before code. By inverting the usual order in which software is written, a developer can think of a problem in terms of inputs and outputs and write more testable (and thus more modular) code.

The TDD cycle consists of three steps:

Red: write a test that fails.
Green: write the minimal code that passes the test.
Refactor: improve the code, and make it more abstract, readable, and optimized.
TDD Cycle
TDD Cycle
26. What is the main difference between BDD and TDD?
If TDD is about designing a thing right, Behavior-Driven Development (BDD) is about designing the right thing. Like TDD, BDD starts with a test, but the key difference is that tests in BDD are scenarios describing how a system responds to user interaction.

While writing a BDD test, developers and testers are not interested in the technical details (how a feature works), rather in behavior (what the feature does). BDD tests are used to test and discover the features that bring the most value to users.

27. What is test coverage?
Test coverage is a metric that measures how much of the codebase is covered by tests. A 100% coverage means that every line of the code is tested at least by one test case.

28. Does test coverage need to be 100%?
No. There’s a myth that 100% coverage means that the code is bug-free. This is false; no amount of testing can guarantee that. Attempting to reach full test coverage is considered bad practice because it leads to a false sense of security and extra work when code needs to be refactored.

29. How can you optimize tests in CI?
First, we need to identify which tests are the slowest and prioritize accordingly. Once we have a plan, there are several methods for making tests faster. Some of them are:

Breaking large tests into smaller units.
Removing obsolete tests.
Refactoring tests to have fewer dependencies.
Parallelizing tests.
30. What’s the difference between end-to-end testing and acceptance testing?
End-to-end usually involves testing the application by using the UI to simulate user interaction. Since this requires the application to run in a complete production-like environment, end-to-end testing provides the most confidence to developers that the system is working correctly.

Acceptance testing is the practice of verifying acceptance criteria. Acceptance criteria is a document with the rules and behaviors that the application must follow to fulfill the users’ needs. An application that fulfills all acceptance criteria meets the users’ business needs by definition.

The confusion stems from the fact that acceptance testing implements the acceptance criteria verification with end-to-end testing. That is, an acceptance test consists of a series of end-to-end testing scenarios that replicate the conditions and behaviors expressed in the acceptance criteria.


10 лучших вопросов и ответов для собеседования Инженера CI/CD
April 29, 2026
Исследовать другие роли
Копилот собеседования
1. Как бы вы объяснили CI/CD и почему это важно?
CI/CD, по сути, это набор практик, которые помогают командам разработчиков быстрее и надежнее доставлять изменения в код. CI, или непрерывная интеграция, означает, что разработчики часто интегрируют свой код в общую репозиторию, обычно несколько раз в день. Каждый раз, когда происходит интеграция, я запускаю автоматизированные тесты, чтобы быстро обнаружить и исправить проблемы. Это значительно уменьшает количество конфликтов слияния и позволяет нам выявлять ошибки на ранних стадиях, до того как они станут серьезными. Например, в моей прошлой компании мы использовали GitLab CI/CD, и я настроил пайплайн так, чтобы каждый коммит в ветку разработки запускал юнит-тесты, интеграционные тесты и статический анализ кода. Если что-то не так, сборка проваливалась, и команда немедленно получала уведомление. Это помогло нам поддерживать высокое качество кода и сократить время на отладку.

CD, или непрерывная доставка, расширяет CI, гарантируя, что код, успешно прошедший тесты, всегда готов к развертыванию. Это означает, что после прохождения всех автоматизированных проверок, включая более глубокие тесты, артефакт сборки автоматически помещается в репозиторий артефактов, например, Nexus или Artifactory, и может быть развернут в любой момент. Непрерывное развертывание идет еще дальше, автоматически развертывая каждый успешно протестированный код в производственную среду без ручного вмешательства. Я считаю, что непрерывная доставка — это идеальный баланс: мы готовы развернуть, но сохраняем человеческий контроль над фактическим выпуском. В одном из моих проектов, для веб-приложения на микросервисах, я настроил пайплайн, который автоматически собирал Docker-образы для каждого микросервиса, прогонял их через серию интеграционных и сквозных тестов, а затем отправлял готовые образы в наш приватный Docker-реестр. Оттуда команды могли развернуть их в стейджинг или продакшн одним нажатием кнопки.

Важность CI/CD трудно переоценить. Во-первых, он значительно ускоряет цикл выпуска. Вместо того чтобы ждать месяцы для выпуска новой версии, мы можем выпускать изменения несколько раз в день или неделю, что позволяет быстрее реагировать на обратную связь пользователей и изменения рынка. Например, когда мы внедрили полноценный CI/CD для нашего основного продукта, время от коммита до развертывания в продакшн сократилось с нескольких недель до нескольких часов, а иногда и минут. Во-вторых, CI/CD повышает качество и надежность программного обеспечения. Автоматизация тестов выявляет ошибки раньше, когда их исправление обходится дешевле и проще. Это означает меньше багов в продакшене и более стабильное приложение. В-третьих, он снижает риск развертывания. Небольшие, частые развертывания легче отслеживать и откатывать в случае проблем, чем крупные, редкие выпуски, которые могут содержать множество изменений. Мне всегда спокойнее знать, что мы выпускаем проверенный код, и если что-то пойдет не так, у нас есть отлаженный механизм отката. Наконец, CI/CD улучшает сотрудничество в команде. Разработчики получают быструю обратную связь о своем коде, что способствует культуре ответственности и постоянного улучшения. Это также уменьшает "трение" между разработкой и операциями, так как процессы автоматизированы и стандартизированы. Мы все работаем над общей целью — надежно и быстро доставлять ценность пользователям. Это мощный инструмент для любой современной команды разработки.

2. Опишите конвейер CI/CD, который вы've built или worked on.
Я работал над множеством конвейеров, но один из самых интересных проектов, которым я занимался, включал создание CI/CD для комплексного решения, состоящего из нескольких микросервисов на Java, фронтенд-приложения на React и базы данных PostgreSQL. Весь процесс был автоматизирован с использованием Jenkins для оркестрации, Docker для контейнеризации и Kubernetes для развертывания. Моя роль заключалась в проектировании, реализации и поддержке всей инфраструктуры конвейера.

Когда разработчик фиксировал изменения в GitLab, я настроил вебхук, который запускал соответствующий Jenkins-пайплайн. Этот пайплайн состоял из нескольких стадий. Первая стадия, "Сборка", начиналась с проверки нового кода из GitLab. Для каждого микросервиса и фронтенда я запускал Maven или npm сборку соответственно. Например, для Java-сервисов команда mvn clean install собирала JAR-файлы, а для фронтенда npm build генерировал статические файлы. Затем, эти артефакты использовались для создания Docker-образов. Я написал Dockerfile для каждого компонента, который брал скомпилированные артефакты и помещал их в легкий базовый образ, например, openjdk для Java или nginx:alpine для фронтенда. Эти образы затем маркировались хешем коммита и версией, а затем отправлялись в наш приватный Docker-реестр Artifactory. Этот подход гарантировал, что каждый образ был уникально идентифицируем и версионирован.

Следующая стадия называлась "Тестирование". Она была разделена на несколько подэтапов. Сначала, для каждого микросервиса я запускал юнит-тесты и интеграционные тесты внутри Docker-контейнеров, используя Surefire и Failsafe плагины Maven. Результаты тестов парсились и отображались в Jenkins. Если все тесты проходили, пайплайн переходил к сквозному тестированию. Я использовал Selenium Grid для запуска автоматизированных браузерных тестов против фронтенда и Postman коллекции для API-тестов, которые проверяли взаимодействие между микросервисами. Все это происходило в изолированной тестовой среде, которую я динамически разворачивал в Kubernetes с помощью Helm charts. После завершения всех тестов, результаты агрегировались, и если обнаруживались критические ошибки, пайплайн прерывался, а разработчики получали уведомление через Slack с подробным отчетом о сбое.

Если все тесты успешно проходили, пайплайн переходил к "Развертыванию в Стейджинг". На этой стадии я использовал Helm для развертывания новой версии всех компонентов в стейджинг-среду Kubernetes. Я управлял конфигурацией для каждой среды с помощью шаблонов Helm, что позволяло легко переключаться между различными базами данных, внешними сервисами и переменными окружения. После успешного развертывания, пайплайн запускал smoke-тесты, чтобы убедиться, что приложение доступно и основные функции работают. Команда тестирования затем проводила ручное тестирование и проверку на стейджинге. Только после их одобрения, пайплайн переходил к финальной стадии. Эта стадия "Развертывание в Продакшн" запускалась вручную. После утверждения, те же Helm charts, но с продакшн-конфигурацией, применялись к продакшн-кластеру Kubernetes. Для минимизации простоя я внедрил стратегию "сине-зеленого" развертывания, что позволяло переключать трафик на новую версию только после того, как она была полностью развернута и проверена. Я также настроил мониторинг с Prometheus и Grafana, чтобы отслеживать работоспособность приложения после каждого развертывания и автоматически откатываться при обнаружении серьезных проблем. Это был довольно сложный, но очень эффективный конвейер, который позволил нам сократить время доставки новых функций до продакшена с нескольких недель до нескольких дней, при этом значительно повысив надежность.

3. Какие инструменты вы предпочитаете для CI/CD и почему?
Мой выбор инструментов обычно зависит от конкретных требований проекта, размера команды и имеющейся инфраструктуры, но у меня есть несколько предпочтений, основанных на моем опыте. Для оркестрации конвейеров я часто использую Jenkins, GitLab CI/CD или GitHub Actions. Jenkins — это мощный и гибкий инструмент, особенно для сложных и настраиваемых рабочих процессов. Мне нравится его плагин-архитектура, которая позволяет интегрировать практически все, что угодно. Например, в одном проекте я использовал Jenkins для создания сложных пайплайнов, которые включали сборку микросервисов, создание Docker-образов, сканирование безопасности с SonarQube, развертывание в Kubernetes через Helm и уведомления в Slack. Гибкость Jenkinsfile, написанных на Groovy, дала мне полный контроль над каждым шагом. Я могу тонко настроить логику, обработку ошибок и параллельное выполнение задач, что очень важно для больших, многокомпонентных систем.

Однако для более простых проектов или когда команда уже использует GitLab или GitHub для контроля версий, я предпочитаю GitLab CI/CD или GitHub Actions. Они интегрированы прямо в систему контроля версий, что значительно упрощает настройку и управление. Мне нравится, как GitLab CI/CD позволяет определить пайплайн прямо в .gitlab-ci.yml файле рядом с кодом, обеспечивая "пайплайн как код". Это значит, что конфигурация пайплайна версионируется вместе с приложением, облегчая отслеживание изменений и откаты. Для проектов с открытым исходным кодом или небольших команд, GitHub Actions также очень удобен благодаря его интеграции с экосистемой GitHub и обширному маркетплейсу готовых экшенов. В одном стартапе я настроил GitHub Actions для автоматической сборки фронтенда, запуска тестов и развертывания статического сайта на AWS S3 и CloudFront при каждом пуше в ветку main. Это было невероятно быстро и эффективно.

Для контейнеризации мой выбор всегда падает на Docker. Его стандартизация и простота использования делают его незаменимым для создания переносимых и изолированных сред. Я активно использую Dockerfile для определения сред сборки и выполнения, а также Docker Compose для локальной разработки и тестирования многокомпонентных приложений. В одном проекте я столкнулся с проблемой "работает на моей машине", и Docker полностью решил ее, гарантируя, что все зависимости и окружение одинаковы на всех этапах CI/CD.

Для управления инфраструктурой как кодом (IaC) я в основном использую Terraform. Он позволяет мне декларативно описывать и управлять облачными ресурсами, такими как виртуальные машины, сети, базы данных и балансировщики нагрузки, независимо от поставщика облачных услуг. Мне нравится его идемпотентность и возможность предварительного просмотра изменений с помощью terraform plan перед их применением. Это дает уверенность в том, что я не сломаю существующую инфраструктуру. Например, я использовал Terraform для автоматического создания всей инфраструктуры для нового микросервиса в AWS, включая VPC, EC2 инстансы, RDS базы данных и ALB, что значительно сократило время на подготовку среды.

Наконец, для развертывания в кластеры Kubernetes, Helm является моим инструментом выбора. Он упрощает упаковку и развертывание сложных приложений Kubernetes. Я создаю Helm charts для каждого приложения, что позволяет мне версионировать конфигурацию, управлять зависимостями и легко развертывать приложения в различных средах с минимальными изменениями. В моем прошлом проекте Helm помог мне стандартизировать развертывание 15+ микросервисов, каждый со своими зависимостями и конфигурацией, что без него было бы крайне трудоемкой задачей. Эти инструменты в сочетании дают мне мощный и гибкий стек для построения надежных и эффективных CI/CD конвейеров.

4. Как вы организуете тестирование в ваших конвейерах CI/CD?
Организация тестирования в конвейере CI/CD — это краеугольный камень для обеспечения качества и надежности программного обеспечения. Мой подход всегда направлен на автоматизацию максимального количества тестов на как можно более ранних этапах, следуя принципу "сдвига влево". Это помогает быстро выявлять и исправлять дефекты, когда они еще недороги и просты в устранении.

На самом первом этапе, сразу после компиляции кода, я интегрирую статический анализ кода и юнит-тестирование. Для статического анализа я часто использую SonarQube. Он анализирует код на наличие потенциальных ошибок, уязвимостей, нарушений стилей кодирования и технического долга. Я настраиваю пайплайн так, чтобы сборка проваливалась, если SonarQube обнаруживает критические проблемы или если покрытие кода юнит-тестами падает ниже определенного порога, например, 80%. Юнит-тесты — это самая быстрая форма тестирования. Я гарантирую, что они запускаются при каждом коммите. Например, для Java-приложений я использую JUnit и Mockito, а для JavaScript – Jest. Важно, чтобы юнит-тесты были быстрыми и изолированными, чтобы не замедлять пайплайн. Я настаиваю на том, чтобы разработчики писали хорошие юнит-тесты, потому что они дают самую быструю обратную связь.

Следующий уровень — интеграционные тесты. Они проверяют взаимодействие между различными модулями или сервисами. В моем прошлом проекте с микросервисами на Java и Spring Boot я настраивал интеграционные тесты, которые использовали Testcontainers для создания временных Docker-контейнеров с базами данных PostgreSQL, внешними API-сервисами или очередями сообщений, такими как Kafka. Это позволило нам запускать реалистичные тесты интеграции без необходимости разворачивать полную среду. Эти тесты запускаются после юнит-тестов и статического анализа, если предыдущие этапы прошли успешно. Они, конечно, медленнее, чем юнит-тесты, но дают нам уверенность в правильном взаимодействии компонентов.

После успешного прохождения интеграционных тестов, я перехожу к сквозному (E2E) тестированию. Для фронтенд-приложений я часто использую Selenium с такими фреймворками, как Cypress или Playwright. Эти тесты имитируют поведение пользователя в браузере, проверяя весь пользовательский путь от начала до конца. Они разворачиваются в изолированной тестовой среде, которую я обычно создаю в Kubernetes с помощью Helm, используя те же артефакты, что будут развернуты в продакшене. Для бэкенд-API я использую Postman Collection или Rest-Assured для автоматизации API-тестов. Я стараюсь сделать E2E-тесты максимально стабильными и уменьшить их количество до самого необходимого, поскольку они самые медленные и склонны к "мерцанию".

Важным аспектом является тестирование безопасности и производительности. Я интегрирую сканирование уязвимостей в Docker-образах с помощью Trivy или Clair после их сборки, чтобы обнаружить известные CVE в базовых образах и зависимостях. Для тестирования производительности я использую такие инструменты, как JMeter или K6, чтобы нагружать приложение в тестовой среде и убедиться, что оно выдерживает ожидаемые нагрузки. Эти тесты обычно запускаются по расписанию или перед крупными релизами.

Наконец, отчетность. Я настраиваю агрегацию всех результатов тестов в Jenkins или GitLab CI/CD, чтобы команда имела централизованный обзор. Также, я интегрирую отчеты в SonarQube для отслеживания качества кода. Если какой-либо этап тестирования завершается неудачно, пайплайн прерывается, и команда получает немедленное уведомление с подробностями сбоя. Вся эта структура позволяет нам поддерживать высокую степень уверенности в качестве кода и быстро реагировать на любые проблемы, минимизируя риски в продакшене.

5. Как вы обеспечиваете безопасность в вашем процессе CI/CD?
Обеспечение безопасности в процессе CI/CD — это критически важная задача, и я подхожу к ней многоуровнево, встраивая проверки безопасности на каждом этапе конвейера, а не просто добавляя их в конце. Это называется "Security Shift Left".

На этапе разработки и коммита я поощряю использование линтеров и пре-коммит хуков, которые могут проверять код на базовые уязвимости или утечки конфиденциальной информации, такой как пароли или API-ключи, до того как они попадут в репозиторий. Например, я настроил pre-commit хуки с помощью git-secrets для сканирования репозитория на наличие конфиденциальных данных. Это первая линия обороны.

Далее, на стадии сборки и тестирования, я интегрирую статический анализ безопасности приложений (SAST) и динамический анализ безопасности приложений (DAST). SAST-инструменты, такие как SonarQube или Checkmarx, сканируют исходный код на известные уязвимости, такие как SQL-инъекции, межсайтовый скриптинг (XSS) или небезопасная десериализация. Я настраиваю пайплайн так, чтобы он прерывался, если обнаруживаются критические или высокоприоритетные уязвимости. Я также использую сканеры зависимостей, такие как OWASP Dependency-Check или Trivy, для обнаружения известных уязвимостей (CVE) в сторонних библиотеках и зависимостях, используемых в проекте. Это очень важно, поскольку большинство уязвимостей часто приходят из внешних компонентов. Если сборка Docker-образа, я обязательно запускаю сканирование образов с помощью Trivy или Clair, чтобы проверить базовый образ и все его слои на известные уязвимости.

После развертывания в тестовую или стейджинг-среду, я запускаю DAST-инструменты, такие как OWASP ZAP или Burp Suite Pro, для сканирования работающего приложения. DAST-инструменты имитируют атаки, обнаруживая уязвимости, которые могут быть неочевидны при статическом анализе, например, проблемы с конфигурацией сервера или ошибки во время выполнения. Я также интегрирую тесты безопасности в наши сквозные тесты, чтобы убедиться, что конкретные функции безопасности, такие как аутентификация и авторизация, работают правильно.

Управление секретами — это еще один критически важный аспект. Я никогда не храню конфиденциальную информацию (пароли, API-ключи, токены) непосредственно в коде или в файлах конфигурации, которые попадают в репозиторий. Вместо этого я использую специализированные хранилища секретов, такие как HashiCorp Vault, AWS Secrets Manager или Kubernetes Secrets (с шифрованием etcd и RBAC). Я настраиваю пайплайн так, чтобы он получал необходимые секреты из этих хранилищ непосредственно перед использованием, а затем немедленно удалял их из среды выполнения после завершения задачи. Это гарантирует, что секреты не утекут в логи или временные файлы.

Я также уделяю большое внимание безопасности самой инфраструктуры CI/CD. Я применяю принцип наименьших привилегий к учетным записям, используемым агентами сборки. Например, Jenkins-агенты или раннеры GitLab CI/CD имеют только те разрешения, которые абсолютно необходимы для выполнения их задач, и не более того. Я также сегментирую сеть для агентов CI/CD и регулярно обновляю их операционные системы и программное обеспечение для исправления уязвимостей. Все доступы к инструментам CI/CD защищены строгой аутентификацией и авторизацией, часто с использованием MFA. Регулярно провожу аудиты логов CI/CD для выявления подозрительной активности.

Наконец, для продакшн-развертываний, я использую такие техники, как "сине-зеленое" развертывание или канареечные релизы, чтобы минимизировать риск, связанный с выпуском нового кода. Это позволяет мне быстро откатиться, если после развертывания обнаруживаются проблемы безопасности или стабильности. Вся эта стратегия позволяет мне создавать CI/CD конвейеры, которые не только быстры и эффективны, но и безопасны на протяжении всего жизненного цикла разработки.

6. Как вы управляете инфраструктурой как кодом (IaC) в контексте CI/CD?
Управление инфраструктурой как кодом (IaC) в контексте CI/CD — это ключевой элемент для обеспечения повторяемости, надежности и эффективности развертываний. Я полностью сторонник IaC, потому что оно позволяет мне применять те же принципы, что и к коду приложения: версионирование, тестирование, ревью и автоматическое развертывание.

Мой основной инструмент для IaC — это Terraform. Я использую его для описания и управления всеми облачными ресурсами: виртуальными машинами, базами данных, сетями, балансировщиками нагрузки, кластерами Kubernetes и многими другими. Я храню все Terraform-файлы в системе контроля версий, обычно в отдельном GitLab или GitHub репозитории, от которого зависят репозитории приложений. Это позволяет нам отслеживать каждое изменение в инфраструктуре, видеть, кто и когда его сделал, и при необходимости откатиться к предыдущей версии.

Конвейер CI/CD для IaC выглядит немного иначе, чем для кода приложения, но основан на тех же принципах. Когда кто-то из команды вносит изменения в Terraform-код и делает коммит, запускается автоматический пайплайн. Первая стадия — это terraform fmt и terraform validate. Это гарантирует, что код соответствует стандартам форматирования и синтаксически корректен. Затем следует terraform plan. Эта команда очень важна, поскольку она генерирует план выполнения, показывая, какие изменения Terraform собирается внести в реальную инфраструктуру. Я настраиваю пайплайн так, чтобы вывод terraform plan публиковался в запросе на слияние (Merge Request/Pull Request), что позволяет членам команды просматривать предлагаемые изменения инфраструктуры и одобрять их, прежде чем они будут применены. Это своего рода "ревью инфраструктуры", аналогичное ревью кода.

После одобрения запроса на слияние, пайплайн переходит к стадии terraform apply. Для этой стадии я часто использую ручное подтверждение или развертывание в отдельную "песочницу" для тестирования, прежде чем изменения будут применены в продакшн-среде. Это особенно важно для критических изменений. Когда terraform apply запускается, Terraform взаимодействует с API облачного провайдера (например, AWS, Azure, GCP) и создает или изменяет ресурсы в соответствии с декларативным описанием. Я также использую бэкенд для хранения состояния Terraform (например, S3 с блокировкой DynamoDB) для обеспечения совместной работы и защиты от одновременных изменений.

Я также применяю модульный подход к Terraform. Вместо того чтобы писать один большой файл для всей инфраструктуры, я разбиваю ее на переиспользуемые модули. Например, у меня есть модуль для создания VPC, модуль для кластера EKS, модуль для базы данных RDS. Это позволяет мне собирать инфраструктуру из проверенных "строительных блоков" и значительно упрощает управление сложными средами. Эти модули также версионируются и хранятся в отдельных репозиториях.

В одном из моих проектов, когда мы развертывали новую среду для тестирования производительности, я использовал Terraform для автоматического создания всего необходимого в AWS: кластера EKS, группы RDS PostgreSQL, SQS очередей и S3 бакетов. Я просто изменил переменную окружения в Terraform-файлах, запустил пайплайн, и через 20 минут у нас была полностью готовая среда, идентичная продакшну, но с другими параметрами масштабирования. Без IaC это заняло бы дни ручной настройки и было бы подвержено человеческим ошибкам. Этот подход гарантирует, что наша инфраструктура всегда находится в известном состоянии, ее легко масштабировать, и она полностью воспроизводима.

7. Расскажите о случае, когда вы столкнулись с серьезной проблемой с CI/CD конвейером и как вы ее решили.
Однажды я столкнулся с очень неприятной проблемой в пайплайне CI/CD, которая привела к периодическим, трудновоспроизводимым сбоям при развертывании одного из наших ключевых микросервисов в продакшн. Это был Java-сервис, упакованный в Docker-образ и развертываемый в Kubernetes через Helm. Сбой проявлялся так: примерно в 30% случаев развертывание завершалось ошибкой "ImagePullBackOff" в Kubernetes, хотя Docker-образ успешно собирался и отправлялся в Artifactory, а остальные 70% развертываний проходили нормально. Это было особенно frustrating, потому что ручное развертывание того же образа обычно работало без проблем.

Моя первая мысль была, что проблема где-то в Artifactory или в аутентификации Kubernetes к нему. Я проверил логи Artifactory на предмет ошибок при загрузке или скачивании образов, но там было чисто. Затем я убедился, что секреты Kubernetes для доступа к реестру Artifactory были корректны и не истекли. Они были в порядке. Я также проверил сетевое соединение между узлами Kubernetes и Artifactory, и там тоже не было никаких проблем. Это заставило меня искать глубже.

Я начал внимательно анализировать логи Kubernetes во время сбоя. Заметил, что ошибка "ImagePullBackOff" часто сопровождалась сообщением "Failed to pull image "registry.artifactory.com/my-service:commit-hash": rpc error: code = Unknown desc = error pulling image configuration: unknown blob". Это было странно, так как образ явно присутствовал в Artifactory. Я решил, что проблема не в отсутствии образа, а в его целостности или доступности отдельных слоев.

Далее я сфокусировался на этапе сборки Docker-образа в Jenkins. Я предположил, что проблема может быть связана с параллельной работой или кэшированием. В то время, Jenkins-агенты работали на общей VM, и несколько пайплайнов могли запускаться одновременно. Я обнаружил, что если другой пайплайн, который собирал тот же или очень похожий базовый образ, запускался одновременно, это могло привести к повреждению кэша Docker на агенте Jenkins. В результате, иногда, когда "my-service" пытался собрать свой образ, Docker на агенте мог получить поврежденный или неполный слой из своего локального кэша, пометить его как "готовый" и отправить такой поврежденный образ в Artifactory. При последующей попытке Kubernetes получить этот образ, он не мог скачать "неизвестный blob" (слой образа), так как Artifactory просто ретранслировал поврежденный образ. Поскольку это зависело от синхронизации одновременных сборок, проблема была периодической.

Чтобы решить эту проблему, я предпринял несколько шагов. Во-первых, я полностью отключил кэширование Docker на всех Jenkins-агентах для всех сборок, которые отправляли образы в Artifactory. Это гарантировало, что каждый раз образ собирался с нуля, и не использовались потенциально поврежденные слои из кэша. Хотя это немного увеличило время сборки, это значительно повысило надежность. Во-вторых, я начал использовать "чистые" Jenkins-агенты (ephemeral agents) на Kubernetes. Каждый раз, когда пайплайн запускался, новый агент создавался специально для этой сборки и уничтожался после завершения. Это полностью исключило проблемы с состоянием между сборками. В-третьих, я добавил дополнительный шаг верификации в пайплайн после отправки образа в Artifactory. Этот шаг включал попытку "docker pull" только что отправленного образа в другом, изолированном контейнере, чтобы убедиться, что он полностью загружается и целостен, прежде чем продолжать развертывание. Если "pull" завершался ошибкой, пайплайн прерывался.

После внедрения этих изменений, проблемы с "ImagePullBackOff" полностью исчезли. Это был хороший урок о том, как глубоко нужно копать в логи и как важно рассматривать все возможные точки отказа в сложной распределенной системе. Иногда проблема кроется не там, где ты ожидаешь ее увидеть.

8. Как вы подходите к мониторингу и логированию для CI/CD конвейеров?
Мониторинг и логирование CI/CD конвейеров абсолютно критичны для поддержания их стабильности, производительности и для быстрого выявления и устранения проблем. Я подхожу к этому комплексно, собирая как метрики, так и подробные логи.

Для мониторинга метрик я обычно использую Prometheus в сочетании с Grafana для визуализации. Я настраиваю сбор метрик со всех ключевых компонентов нашего CI/CD стека. Например, для Jenkins я использую плагин Prometheus, который экспортирует метрики о продолжительности сборок, статусе пайплайнов (успех/неудача), количестве запущенных задач и загрузке агентов. Для раннеров GitLab CI/CD или агентов GitHub Actions я собираю метрики, отражающие их рабочую нагрузку и состояние. Если мы используем Kubernetes для хостинга агентов CI/CD или развертывания приложений, я отслеживаю метрики использования ресурсов (CPU, память) подов, дисковую активность и сетевой трафик, чтобы гарантировать, что инфраструктура CI/CD не является узким местом. Я создаю дашборды в Grafana, которые показывают общую картину здоровья CI/CD: среднее время выполнения пайплайнов, процент успешных сборок по репозиториям или командам, количество активных агентов и их загрузка. Эти метрики позволяют мне быстро увидеть тенденции, например, замедление сборок или увеличение числа неудачных деплоев, и принять меры до того, как проблема станет критической.

Для логирования, моя цель — агрегировать все логи в централизованной системе, чтобы их было легко искать, анализировать и отслеживать. Я часто использую стек ELK (Elasticsearch, Logstash, Kibana) или Loki/Grafana. Все компоненты CI/CD — Jenkins, раннеры, Docker-демоны на агентах, скрипты сборки, логи развертывания Kubernetes — настроены на отправку своих логов в центральный коллектор. Например, я настраиваю Logstash для парсинга логов Jenkins-сборок, извлекая важную информацию, такую как ID сборки, статус, название проекта и конкретные сообщения об ошибках. Я использую файлбиты (Filebeat) или прометеус-экспортеры логов (Loki's Promtail) для сбора логов с файловой системы агентов. Это позволяет мне, например, легко найти все сбои сборки за последний час, связанные с конкретным репозиторием, или отследить всю цепочку событий, предшествующих ошибке развертывания в Kubernetes. Централизованное логирование также помогает при аудите и соблюдении требований, поскольку у меня есть полный, неизменяемый журнал всех действий, происходящих в конвейере.

Кроме этого, я настраиваю оповещения (alerting) на основе как метрик, так и логов. В Prometheus я конфигурирую правила оповещений, которые уведомляют меня через Slack или PagerDuty, если, например, процент неудачных сборок превышает 10% за 15 минут, или если у агентов CI/CD заканчивается дисковое пространство. На стороне логирования, я могу настроить оповещения в Kibana или Grafana, которые срабатывают, если в логах появляется определенный шаблон ошибки или если количество ошибок определенного типа резко возрастает. Это позволяет моей команде немедленно узнавать о проблемах и реагировать на них, минимизируя время простоя и влияние на разработку. Вся эта система мониторинга и логирования дает мне прозрачность и контроль над всеми аспектами процесса CI/CD.

9. Как вы управляете откатами или прямыми обновлениями в вашей стратегии развертывания?
Управление откатами (rollbacks) и прямыми обновлениями (rollforwards) — это неотъемлемая часть любой надежной стратегии развертывания. Моя цель — обеспечить, чтобы мы могли быстро и безопасно восстановиться после любого сбоя в продакшене, минимизируя время простоя и влияние на пользователей.

Для откатов, я всегда отдаю предпочтение быстрым и автоматизированным механизмам. В среде Kubernetes я использую возможности контроллеров развертывания. Когда мы разворачиваем новое приложение или обновляем существующее с помощью Helm, Kubernetes сохраняет историю версий. Если развертывание новой версии приводит к проблемам — например, поды не запускаются, или мониторинг обнаруживает резкое увеличение ошибок, — я могу инициировать откат к предыдущей стабильной версии с помощью команды helm rollback <release_name> <revision_number>. Это мгновенно переключает трафик на предыдущие поды или развертывает их заново, используя старый, проверенный образ. Например, я всегда настраиваю автоматические проверки работоспособности (readiness и liveness probes) в Kubernetes для каждого пода. Если новый под не проходит readiness probe в течение заданного времени, Kubernetes сам не будет направлять на него трафик, и я могу автоматически инициировать откат.

Для стратегии развертывания, которая позволяет откатываться, я часто использую "сине-зеленое" развертывание или канареечные релизы. При "сине-зеленом" развертывании я поддерживаю две идентичные среды: "синюю" (старую версию) и "зеленую" (новую версию). Новая версия развертывается в "зеленую" среду, проходит все проверки и тесты. Только после подтверждения стабильности я переключаю трафик с "синей" на "зеленую" среду, обычно меняя целевой объект для балансировщика нагрузки. Если что-то идет не так, я просто переключаю трафик обратно на "синюю" среду, и пользователи даже не замечают проблемы. Этот метод обеспечивает нулевое время простоя и практически мгновенный откат. Я реализовал его для нашего основного веб-приложения, используя Nginx Ingress в Kubernetes для управления переключением трафика между двумя развертываниями.

Канареечные релизы — это еще один мощный подход. Вместо того чтобы сразу развертывать новую версию для всех пользователей, я сначала выпускаю ее для небольшой части пользователей, так называемой "канарейки". Например, 5% трафика направляется на новую версию, а остальные 95% продолжают использовать старую. Я внимательно отслеживаю метрики (ошибки, производительность, поведенческие метрики) для этой "канареечной" группы. Если все в порядке, я постепенно увеличиваю процент трафика на новую версию. Если же возникают проблемы, я могу мгновенно прекратить развертывание "канарейки" и отменить его, не затронув большинство пользователей. Я использовал Service Mesh, такой как Istio, в Kubernetes для управления маршрутизацией трафика на основе весов и заголовков, что делало канареечные релизы очень гибкими и управляемыми.

Когда речь идет о прямых обновлениях (rollforwards), это, по сути, быстрое развертывание новой, исправленной версии. Если я обнаруживаю критический баг в продакшене после развертывания, вместо того чтобы откатываться к предыдущей версии, которая могла быть устаревшей или не содержать других важных исправлений, я предпочитаю как можно быстрее выпустить новую версию с фиксом. Для этого я использую ускоренные CI/CD пайплайны, которые могут быстро собрать, протестировать и развернуть патч. Важно иметь возможность легко отменить незавершенное развертывание и начать новое с исправленным кодом. Все эти стратегии требуют тщательной автоматизации и надежного мониторинга, чтобы я мог принимать обоснованные решения и действовать быстро в случае непредвиденных обстоятельств.

10. Как вы остаетесь в курсе новых технологий и лучших практик CI/CD?
Оставаться в курсе новых технологий и лучших практик в области CI/CD — это постоянная задача, учитывая, как быстро развивается эта сфера. Я использую несколько подходов, чтобы быть на переднем крае.

Во-первых, я регулярно читаю профессиональные блоги и новостные ресурсы. Я подписан на рассылки от таких компаний, как HashiCorp, Red Hat, Docker и различных облачных провайдеров (AWS, Google Cloud, Azure), которые часто публикуют анонсы новых функций и лучшие практики. Также я слежу за независимыми блогами и техническими изданиями, посвященными DevOps и SRE, такими как Martin Fowler's blog, InfoQ и The New Stack. Они часто публикуют глубокие статьи и анализы новых инструментов и подходов, которые помогают мне понять концепции и их практическое применение. Это помогает мне быть в курсе последних тенденций и того, что другие инженеры делают в этой области.

Во-вторых, я активно участвую в онлайн-сообществах и форумах. Такие платформы, как Reddit (например, r/devops, r/kubernetes), Stack Overflow и различные Slack-сообщества (например, Cloud Native Computing Foundation Slack) предоставляют отличную возможность задавать вопросы, делиться опытом и учиться у коллег по всему миру. Я часто нахожу там решения проблем, с которыми сталкиваюсь, и узнаю о новых инструментах, о которых еще не читал в официальных источниках. Это также дает мне возможность внести свой вклад, помогая другим, что, в свою очередь, укрепляет мои собственные знания.

В-третьих, я посещаю конференции и вебинары, когда это возможно. Конференции, такие как KubeCon + CloudNativeCon, DevOpsDays или специализированные мероприятия облачных провайдеров, дают мне возможность увидеть демонстрации новых продуктов, послушать доклады от лидеров отрасли и пообщаться с другими инженерами. Даже если я не могу посетить их лично, я стараюсь просматривать записи выступлений и докладов онлайн. Вебинары — отличный способ получить быстрый обзор конкретной технологии или инструмента. Например, я регулярно участвую в вебинарах по Terraform, Jenkins X или GitLab, чтобы узнать о новых функциях и возможностях.

В-четвертых, и, возможно, это самое важное, я постоянно экспериментирую и создаю "домашние" проекты. Чтение о технологии — это одно, а ее практическое применение — совсем другое. Я поддерживаю небольшую тестовую среду у себя дома (или в личном облачном аккаунте), где я могу развернуть новые инструменты CI/CD, такие как Tekton, Argo CD или Spinnaker, и поработать с ними, чтобы понять их сильные и слабые стороны. Например, когда я услышал о GitLab CI/CD, я не просто прочитал документацию, я создал небольшой проект, настроил пайплайн с Docker-образами и Kubernetes-развертыванием, чтобы полностью понять его возможности и ограничения. Это практический опыт, который по-настоящему закрепляет знания и позволяет мне сформировать собственное мнение об инструментах.

Наконец, я всегда стараюсь делиться знаниями внутри своей команды. Когда я узнаю что-то новое, я делюсь этим на внутренних встречах или пишу небольшие статьи. Объяснение концепций другим помогает мне лучше их понять и часто выявляет пробелы в моих собственных знаниях. Этот цикл обучения, практики и обмена знаниями позволяет мне оставаться актуальным и эффективным инженером CI/CD.
