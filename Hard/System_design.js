System Design Interview Tutorial – The Beginner's Guide to System Design
System Design Interview Tutorial – The Beginner's Guide to System Design
By Charles M.

System Design is an important topic to understand if you want to advance further in your career as a software engineer. Even if you are just beginning your coding journey, it's a good idea to get a head start on learning about system design.

Early in your career you will mostly just be tested on your coding ability. In higher level interviews, however, there will often be a greater focus on testing your ability and experience at designing applications.

The biggest struggle engineers have with system design interviews is that they are more open-ended and there isn't any single correct answer. This lack of structure can be intimidating, so my goal with this article is to give you a roadmap for navigating these types of interviews with confidence.

What this article will cover:

What is a system design interview and why they are used
The main stages of a system design interview
Example interview problem – Design YouTube
Video Tutorial
You can also watch this tutorial on YouTube if you like:


And I've created a playlist of videos on specific topics related to system design and web architecture:


System Design Interview Overview
At first glance it seems silly to ask somebody to design a huge app like Twitter or YouTube in 45-60 minutes. These apps were designed over a period of years by hundreds of engineers working together, so it's clearly an impossible task to do in a short interview.

There are two main reasons why companies use these types of interviews. The first is, of course, to test your knowledge about the technologies being discussed. They want you to go deep enough to make sure you aren't just throwing buzzwords around without understanding how things actually work.

The second reason might be more important, though. The system design interview is a way to simulate a realistic scenario where you are working together with the interviewer to determine the best design decision.

Getting the perfect answer isn't necessarily the most important thing here – it's some of the other things you can show, like:

How do you handle being challenged? Do you get defensive or take feedback with a positive attitude? Are you stubborn or narrow-minded?
Do you show knowledge of the various tradeoffs certain design decisions involve? There's a big difference between blindly making a decision and not realizing the consequences, and knowing the pros/cons and accepting the tradeoffs.
Are you able to effectively communicate and if necessary explain complex technical concepts in an easy to understand way?
Are you candidate somebody the interviewer would want to work with long term? Even if somebody is a genius, if they are miserable to work with they might not be a good hire.
Stages of a System Design Interview
In this section you'll learn a general framework for structuring how to handle a problem during a system design interview.

Clarify the problem and establish design scope
Image

The first thing you'll want to do after your interviewer gives you the problem is to take a few minutes to ask some clarifying questions and figure out what exactly they are looking for.

The worst thing you could do here is just start off in the completely wrong direction because you didn't take the time to ask a few questions. You have a limited amount of time during the interview, so you want to make sure you focus on what's important.

Here are some examples of questions you might ask:

What are the use cases / features of the app?
In this article we will be using YouTube as an example. There are hundreds of different features you could design like ad delivery, authentication, recommendation algorithms, comments, video upload, video processing, and many others.

During an interview you only have time to cover a few of those, so make sure to ask the interviewer questions to figure out what they want you to focus on designing.

How many users are expected / what is the likely traffic volume?
The complexity of the system will depend on the amount of traffic it needs to handle, so make sure to gather this information.

You don't want to over-engineer things if the traffic is relatively low and you also don't want to get stuck with an app that can't scale because you didn't design it properly.

Ask questions like how many users the app will have, the average amount of data per request, how long data needs to be stored, and how reliable and available does the system need to be?

This step is going to help you beyond just getting more information to work with. You're also showing the interviewer that you understand how to gather information about a vague problem.

Determine Rough Capacity Estimates
Image

Using the information you gathered during the first step, you can begin to make some rough estimates and generalizations for things like storage and bandwidth requirements.

This process will involve some basic math like multiplying the number of users by the average request size and the amount of requests each user is expected to make daily.

Create a High Level Design
Image

Here you want to create a rough architecture for the system. Draw out things like load balancers, web servers, app servers, task queues, database, caching, file storage, and so on. You should include all the core components you need to create the system.

Make sure to communicate with the interviewer during this stage and check to ensure that you aren't missing anything. While they probably won't tell you directly, they will give you a nudge in the right direction if you forgot about some crucial feature.

API Design
Image

This part is almost cheating because you are using the structure of the interview to your advantage to confirm that you are on the right path.

The interviewer is never going to deliberately lead you down the wrong path, so once you've created your high level design you can start sketching out some rough API endpoints for each component.

For the YouTube example they might look something like this, depending on which features you are building:

uploadVideo (userID, video, description, title)
comment (userID, videoID, comment)
viewVideo (videoID)
videoSearch (query)
In some cases you might not need to drill down to this level. If the interview question is very high level like "design Youtube", you can probably skip this part. On the other hand if you get a more focused question like "design YouTube's comment system", it would make sense to go more in depth.

Create a Data Schema
Image

At this point you should have a good idea of all the requirements and data needed for the application to work, so now you can plan out how your data is structured.

Depending on what you are building and the requirements, you'll need to weigh the costs and benefits of things like using a relational vs non-relational database. When modeling your data you'll also want to account for things like potential data partitioning and replication.

Take a Detailed Look at the Components
Image

What happens during this section will mainly depend on the feedback of the interviewer. They will probably pick out a few specific components to focus on and ask why you made certain decisions.

The most important part here isn't necessarily being 100% right. Instead, it's to show that you didn't just blindly make decisions and understand exactly what tradeoffs you were making.

You should be able to propose alternate design decisions that could have been used and explain why you didn't use them.

How to Design YouTube
Now that you have a general idea of how a system design interview works and a framework for handling a system design problem, I'm going to show you how to put it all into practice using YouTube as an example.

Step 1 – Define Problem Scope and Requirements
This will be a high level problem where we implement a few of YouTube's major features without diving too in-depth on any of them. The features to focus on will be:

Users can upload videos
Users can view videos
Users can comment on videos
Step 2 – Determine Capacity estimates
The two biggest capacity factors in an app handling large amounts of video like YouTube will be storing all that content and bandwidth requirements to deliver the content to users. In this section you'll learn how to make rough estimates for capacity requirements.

The main focus here is not on being highly accurate, but showing a logical thought process for calculating these numbers based on the information available to you.

In an interview you would be given the data, but in this case I'm using two key pieces of data that YouTube has made public:

YouTube creators upload 500 hours of video every minute
YouTube users watch 1 billion hours of video per day
You can use these numbers to calculate storage and bandwidth requirements with a few assumptions.

Bandwidth Calculation
ImageDaily bandwidth calculation

To calculate an estimate for bandwidth, we start with the amount of video watched daily. The key assumption here is how much bandwidth is used per hour watched, as this would depend on the quality of video most users choose to watch.

The 3 Gigabyte estimate is based on a rough percentage of users watching in standard definition and others choosing HD or 4K, which consume much more bandwidth per hour watched.

The math here is fairly simple: multiply 1 billion hours by the average bandwidth of an hour of video, then divide that by 1000 to convert to terabytes, then divide by 1000 again to get to Petabytes. The final bandwidth estimate is 3,000 PB used daily.

Storage Calculation
ImageStep by step calculations for storage

Based on a few assumptions we can calculate that YouTube will need to store around 2.16 Petabytes of new video every day. Here's how we get that number:

Convert 500 hours to 30,000 minutes of video uploaded per minute
Each minute of HD video is roughly 50 Megabytes due to having copies of each video in multiple formats. We multiply that by 30,000 minutes and then divide by 1000 to convert to Gigabytes.
We then take the 1,500GB uploaded per minute and multiply by 60 then 24 to calculate the daily amount of video uploaded. We divide by 1000 again to convert Gigabytes to Terabytes
Our final total is 2,160 Terabytes uploaded daily or 2.16 Petabytes
Step 3 – Database Design
For our database we will use a standard relational database like MySQL. The schema will look something like this:

Image

This design is very simple but has the essentials that you'd need for a basic implementation. It would be a good idea to do some research into the differences between relational and non-relational databases so you understand what kind of situations each excel at and when to use them.

For certain apps with different requirements a NoSQL database might make sense. Often large systems will have many different services that use different types of databases depending on their needs.

Step 4 – High Level Design
Image

That's a pretty complex diagram, so let me break down what's happening:

Client – This could be a user on a mobile app or their computer trying to upload a video, make a comment, or watch a video
CDN – A content distribution network is used to reduce latency and improve reliability when it comes to delivering static content like videos or images. A CDN works by storing content in data centers all around the world so that the content is closer to users. This results in reduced latency because requests travel a shorter distance. There's also an added benefit of content being stored in multiple locations so even if one location can't serve traffic for some reason, another location can.
Load Balancers – A load balancer accepts requests and routes them to servers depending on a number of factors. At YouTube's scale, a single server can't handle all the traffic and you want replication to prevent a single point of failure. The load balancer can check the status of servers and verify they can handle traffic or choose another server that can handle the request.
Services – You can think of this as the app layer of the system. Instead of using a single monolith to handle traffic, we'll use several microservices to handle specific tasks. The second box for each of these services in the diagram represents multiple servers running for each of them to increase reliability. If one replica of the service goes down, there's always another to step in and handle traffic.
Data Stores – When using microservices it is generally best practice for each microservice to own its own data. If one service needs data from another they can access it through an API.
Video Upload Process – Handling the video uploads will involve multiple steps, as trying to handle it synchronously with the app server would be fragile and reduce performance. I'll cover this more in depth in the next section
I don't want to go too in-depth on these individual components because I could write entire articles on any of them if I wanted to explain them fully.

If you are interested in a more detailed explanation you can check out the system design playlist I linked to above which has videos covering most of these concepts.

Step 5 – Go Over Specific Components and Details
At this stage you have a working design. Now let's look at some of the specific components in detail.

Video Upload
Video content is the lifeblood of YouTube, and it doesn't exist without it. This means that making it quick and easy for users to upload videos is probably the most important feature.

Imagine uploading a multi-gigabyte video to YouTube and then seeing the upload fail after 30 minutes when it's 95% done. To prevent this you'll want to support the ability for resuming uploads if the client's connection is lost temporarily. The uploaded video can then be stored with a distributed file system like HDFS.

Once the upload is complete there's still a lot more to do before the video is ready for users to access. The video needs to be encoded into multiple different quality formats, you need to generate thumbnails, and push copies of the video to the global CDN.

Again, at any stage one of these processes could fail. To prevent this you'll have a task queue to manage this process and retry the processing attempt if it fails at any stage.

Database Scaling
The database is often the bottleneck of an application. You will probably be tested on whether you understand some of the fundamental concepts around database scaling. This could include caching to handle read requests, sharding, and replication.

Top 50 System Design Interview Questions for 2026
#
programming
#
development
#
systemdesign
#
softwaredevelopment
Disclosure: This post includes affiliate links; I may receive compensation if you purchase products or services from the different links provided in this article.

10 Must Know System Design Concepts for Interviews

image_credit - Exponent

Hello friends, if you are preparing for Tech interviews, then you must prepare for System design questions because this is where most of the people struggle.

Even experienced programmers struggle to solve common questions like how to design WhatsApp or YouTube, or answer the difference between API Gateway vs Load Balancer and Horizontal vs Vertical Scaling, Forward proxy vs reverse proxy.

In today's increasingly distributed world, the ability to architect robust and scalable systems is a fundamental skill sought after by top-tier tech companies.

System design interviews have become a crucial component in evaluating a candidate's capacity to solve real-world challenges, assess trade-offs, and design systems that can handle complex requirements.

In the past, I have also shared about Database Sharding, System design topics, Microservice Architecture, and System design algorithms, and today, I am going to share system design questions for interviews.

In this article, I have carefully crafted 50+ system design interview questions to guide candidates from foundational concepts to intricate design scenarios.

Whether you're a beginner aiming to grasp the essentials or an experienced engineer seeking to refine your skills, these questions will not only prepare you for interviews but also improve your knowledge about system design and software architecture.

By the way, if you are preparing for System design interviews and want to learn System Design in depth then you can also checkout sites like ByteByteGo, InterviewKickStart, Design Guru, Exponent, Educative, Codemia.io, Bugfree.ai and Udemy which have many great System design courses

how to answer system design question

P.S. Keep reading until the end. I have a free bonus for you.

50 System Design Interview Questions for 2026
Here is a list of 50 popular System design interview questions for beginners and experienced developers, which you can solve to start your preparation.

In this list, I have not only shared easy, medium, and hard system design problems but also concept-based questions like API Gateway vs Load Balancer or Microservice vs Monolithic. You can practice these system design problems and questions for interviews.

System Design Concept-based Questions
1. What is the difference between API Gateway and Load Balancer? [solution]
2. What is the difference between Reverse Proxy and Forward Proxy? (answer)
3. What is the difference between Horizontal scaling and vertical scaling? (answer)
4. What is difference between Microservices and Monolithic architecture? (Answer)
5. What is difference between vertical and horizontal partitioning ?
6. What is Rate Limiter? How does it work? (answer)
7. How does Single Sign On (SSO) works? (answer)
8. How does Apache Kafka works? why it so fast? (answer)
9. Differnece between Kafka, ActiveMQ, and RabbitMQ? (answer)
10. Difference between JWT, OAuth, and SAML? (answer)

Here is a nice diagram from DesignGuru.io which explains difference between vertical and horizontal database partition
difference between horizontal and vertical partitioning

𝐄𝐚𝐬𝐲 System Design Problems
Now, let's jump into easy system design problems. These are common question where you need to design small utility which is used everywhere like URL shortner:

1. How to Design URL Shortener like TinyURL [solution]
2. How to Design Text Storage Service like Pastebin? [solution]
3. Design Content Delivery Network (CDN) ? [solution]
4. Design Parking Garage [solution]
5. Design Vending Machine [solution]
6. How to Design Distributed Key-Value Store
7. Design Distributed Cache
8. Design Distributed Job Scheduler
9. How to Design Authentication System
10. How to Design Unified Payments Interface (UPI)

And, here is a high level design of YouTube from Educative.io for your reference:

high level design of YouTube

𝐌𝐞𝐝𝐢𝐮𝐦 System Design Problems
Now, is the time to see medium difficulty of System design problems. These questions are neither easy nor very tough but you need good knowledge of various software architecture component and system design concepts to answer them.

11. Design Instagram [solution]
12. How to Design Tinder
13. Design WhatsApp (solution)
14. How to Design Facebook
15. Design Twitter
16. Design Reddit
17. Design Netflix [solution]
18. Design Youtube [solution]
19. Design Google Search
20. Design E-commerce Store like Amazon
21. Design Spotify
22. Design TikTok
23. Design Shopify
24. Design Airbnb
25. Design Autocomplete for Search Engines
26. Design Rate Limiter
27. Design Distributed Message Queue like Kafka
28. Design Flight Booking System
29. Design Online Code Editor
30. Design Stock Exchange System
31. Design an Analytics Platform (Metrics & Logging)
32. Design Notification Service
33. Design Payment System

And, here is a high level system design of NetFlix from DesignGuru, one of my favorite place for learning system design

Netflix architecture for system design 

𝐇𝐚𝐫𝐝 System Design Problems
Now, let's see some hard questions which demand more effort from you. You may feel uncomfortable solving these questions but by doing this you become better.

34. How to Design Location Based Service like Yelp
35. Design Uber
36. Design Food Delivery App like Doordash
37. Design Google Docs
38. How to Design Google Maps
39. Design Zoom
40. How to Design File Sharing System like Dropbox
41. How to Design Ticket Booking System like BookMyShow
42. Design Distributed Web Crawler
43. How to Design Code Deployment System
44. Design Distributed Cloud Storage like S3
45. How to Design Distributed Locking Service

Here is high level design of Google Map by Educative.io

high level design of Google Map

And, if you need solutions then they are available in this GitHub repository by @ Ashish Pratap Singh: https://github.com/ashishps1/awesome-system-design-resources/blob/main/README.md#system-design-interview-problems

And, now see a few more resources for System design interview preparation

Best System Design Interview Resources
And, here are curated list of the best system design books, online courses, and practice websites which you can check to better prepare for System design interviews. Most of these courses also answer questions I have shared here.

ByteByteGo: A live book and course by Alex Xu for System design interview preparation. It contains all the content of the System Design Interview book volumes 1 and 2, and will be updated with volume 3, which is coming soon.

Codemia.io: This is another great platform to practice System design problems for interviews. It has more than 120+ System design problems, many of which are free, and also a proper structure to solve them.

Bugfree.ai: Thisi is another popular platform for technical interview preparation. It contains AI-based mock interviews as well as Interview experience and more than 3200+ real questions on System Design, Machine Learning, and other topics for practice =.

DesignGuru's Grokking System Design Course: An interactive learning platform with hands-on exercises and real-world scenarios to strengthen your system design skills.

"System Design Interview" by Alex Xu: This book provides an in-depth exploration of system design concepts, strategies, and interview preparation tips.

"System Design Primer" on GitHub: A curated list of resources, including articles, books, and videos, to help you prepare for system design interviews.

Educative's System Design Course: An interactive learning platform with hands-on exercises and real-world scenarios to strengthen your system design skills.

High Scalability Blog: A blog that features articles and case studies on the architecture of high-traffic websites and scalable systems.

YouTube Channels: Check out channels like "Gaurav Sen" (ex-Google engineer and founder of InterviewReddy.io and "Tech Dummies" for insightful videos on system design concepts and interview preparation.

"Designing Data-Intensive Applications" by Martin Kleppmann: A comprehensive guide that covers the principles and practices for designing scalable and reliable systems.

Exponent: A specialized site for interview prep, especially for FAANG companies like Amazon and Google. They also have a great system design course and many other materials that can help you crack FAANG interviews.

how to prepare for system design

image_credit - ByteByteGo

Remember to combine theoretical knowledge with practical application by working on real-world projects and participating in mock interviews. Continuous practice and learning will undoubtedly enhance your proficiency in system design interviews.

That's all about 50 System design interview questions for 2026. If you are preparing for technical interviews, then most likely you can solve these questions, but if you struggle, you can see the answer links, which go to free tutorials and YouTube videos, as well as the online courses and books I have shared.

Whether you're a candidate preparing for a technical interview or a seasoned professional looking to refine your skills, mastering system design is a pivotal step in advancing your career in the ever-evolving tech industry, and these questions will help you.

Bonus
As promised, here is the bonus for you, a free book. I just found a new free book to learn Distributed System Design, you can also read it here on Microsoft --- https://info.microsoft.com/rs/157-GQE-382/images/EN-CNTNT-eBook-DesigningDistributedSystems.pdf




How to Prepare for a System Design Interview Questions?
Familiarize Yourself with Common System Design Problems: Practice designing systems for common problems, such as a social media platform, a ride-sharing service, or a recommendation system. This will help you become more comfortable and confident in tackling new design problems in the interview.
Understand Key Design Concepts: Make sure you are familiar with key design concepts, such as scalability, performance, fault tolerance, and security. Understand how these concepts apply to different types of systems and how to incorporate them into your designs.
Practice Communicating your Designs: Being able to clearly and concisely explain your design is an important part of the system design interview. Practice explaining your designs to others and using examples and analogies to help illustrate your points.
Review Data Structures and Algorithms: Familiarize yourself with common data structures and algorithms and understand how they can be used to solve design problems.
Review System Design Principles: Familiarize yourself with principles of good system design, such as modularity, separation of concerns, and encapsulation. Understand how these principles can help you design more efficient and maintainable systems.
Prepare for Open-ended Questions: Be prepared for open-ended questions that ask you to design a system from scratch. Make sure you have a structured approach to tackling these types of problems, such as breaking the problem down into smaller pieces or identifying the key components of the system.
Practice with Real or Mock Interviews: Practice your system design skills with real or mock interviews. This will help you get a sense of what to expect in the actual interview and allow you to refine your approach and responses. The Full Stack Web Developer Bootcamp will advance your knowledge on both front and backend, which are essential for System Design.
System Design Job Roles
System Designer
Senior System Designer
Design Engineer
Lead Designer
Technical Product Manager
Project Engineer
Top Companies
Amazon
IBM
Facebook/Meta
Google
Microsoft
Apple
Top System Design Interview Questions Tips and Tricks
Understand the Problem: Make sure you fully understand the problem you are trying to solve and the constraints and requirements of the system you are designing.
Break Down the Problem: Divide the problem into smaller, more manageable pieces. This will make it easier to understand and design the system.
Identify the Key Components: Identify the key components of the system and how they will interact with each other.
Consider Scalability: Think about how the system will scale as the number of users or the amount of data increases.
Use Appropriate Abstractions: Use abstractions (such as diagrams or models) to represent the system and its components, but be mindful of the level of detail and complexity.
Communicate Clearly: Clearly and concisely explain your design to the interviewer. Use examples and analogies to help illustrate your points.
Be Prepared to Iterate: Expect to go back and forth with the interviewer to refine and improve your design.
Practice, Practice, Practice: Familiarize yourself with common system design problems and practice designing systems to become more comfortable and confident in the interview.
Ask Questions: Don't be afraid to ask the interviewer questions to clarify the problem or to get more information about the requirements of the system.
Stay Calm and Focused: Stay calm and focused during the interview and try not to get flustered if you encounter a particularly challenging problem.

Full Stack System Design Interview Questions With Real Examples
Last updated by Vartika Rai on Dec 17, 2025 at 04:54 PM
| Reading Time: 11 minutes
System design interview questions are a critical part of Full Stack interviews. Top tech companies, including FAANG, use system design interview questions to gauge your understanding of and proficiency in building highly scalable systems.

This article, written by an Interview Kickstart mentor, Ashish, outlines the best strategy to answer system design interview questions at a full stack engineering interview.

If you are preparing for a full stack interview, the insights from this article will help you in understanding the aspects of technical conversation that occur during the system design round. You will also know what interviewers expect from a senior engineer in interview settings, which will help you prepare for such challenges.

We’ll do this with the help of a sample interview. Here’s what we’ll cover:

Full Stack System Design Sample Interview Questions and Answers — Design an Events Website
Key Takeaways
Full Stack System Design Sample Interview Questions and Answers


Design an Events Website
Q. Imagine you are a founder of a website that wants to sell tickets for events online. Discuss a plan for releasing a minimum viable product (MVP) website for this startup and define an architecture to support the requirements.
The following is a representation of a real-life Full Stack System Design interview setting involving a technical architect/staff engineer. We’ve listed examples of follow-up questions to the question listed above and ideal answers for each.

This interview is purely fictitious, and any resemblance to a real-life setting is coincidental.

Interviewer:
Identify the high-level functionality of this system that you think is crucial in the MVP, given you have funding for the next 6 months of the project.

Candidate:
The application seems to be a consumer app that has two types of users:

The publishers who own and publish the events on the website
The customers who would like to purchase tickets to those events
The MVP scope can therefore include the following use cases for these users:

Publishers:

Authentication
Define an event (and modify existing ones)
Define tickets and pricing (or modify existing ones)
Map of venue
Date(s)/time(s)/other constraints (# of tickets)
Customers:

Authentication
Search for events
Event details
Ticket prices
Map of venue/ticket placement
Checkout flow
View purchased tickets
Interviewer:
Define the characteristics of the system; high-level system architecture.

Candidate:
Type of system:

Consumer-centric application.
The app is read-heavy as most operations are around searching and browsing events.
In some cases, we may have spikes in transactions/writes when there are high-velocity selloffs for popular events.
The checkout flow is similar to other reservation systems, e.g., airlines, but perhaps with less convergence. There are similar challenges of securing seats during reservation.
Clarifying question by the Candidate:

What are the scaling parameters, like the number of concurrent users, total users, and expected number of checkouts at any given time?

Interviewer:

Assume and estimate as the product is new and designed for horizontal scaling.

Candidate:
Start with N tier high-level architecture:

Web app (consumer): Consumer focus and hence the emphasis on user experience is a must.
Web app (publisher): Enterprise focus and prioritizes functional features over user experience.
Frontend API layer: Defines REST interface for frontend – backend communication.
Business application layer (cloud functions): Defines the business logic, workflows, and transactions.
Database: For storing all events, maps, transactions, and payments.
Architectural diagram:


Interviewer:
What kind of database should we use for this purpose?

Candidate:
We can consider two kinds of databases:

NoSQL: Works best for representing dynamic/nested schema for events and seating, etc.
SQL: Works best for transactions and payments.
Since we have both kinds of use cases, we shall employ both servers.

Interviewer:
How do we scale the database?

Candidate:
We can introduce a cache of events with reasonable TTL that is based on the LRU scheme and shard it geographically. Something like memcached or redis cache should work just fine.


Interviewer:
How do you implement the business application layer?

Candidate:
We can use step functions to represent workflows. They involve less integration code, have built-in fault tolerance and stateful workflows, and can scale reliability in the cloud.


Interviewer:
How would you implement the frontend API layer?

Candidate:
We can use lambdas with API gateway for a simple REST or GraphQL interface. GraphQL is great as it provides query, search, and aggregation capabilities out of the box and can optimize queries by reducing the number of requests/responses for entities.


Interviewer:
Can you provide some breakdown of APIs?

Candidate:
Let’s work backward and drive the API design based on UI requirements.

Interviewer:
Sure, let’s talk about the publisher website first?

Candidate:
Actually, because we are under time constraints and do not have many development resources, we can pick a metro as a startup MVP supported city, remove the requirement of a publisher website altogether, and use some back-office software (like Google Sheets, AppSheet) to ingest events, venue, date times, maps and ticket prices.

(These are examples of prudent and practical tradeoffs that Architects often make keeping business goals in mind!)


Interviewer:
Interesting, how do you ingest venue maps and associate them with ticket prices and quantity?

Candidate:
We can be creative. Squarish/Rectangular areas are easier to construct, even in spreadsheets. We can use them for MVP, and if this is too limiting, we can simply create pictures and use image maps in HTML to associate them with seating and pricing.

Even better, we can annotate them using tools and then provide seating numbers and decouple pricing by joining several pieces of metadata (venue, date, time, location) with the price.

Interviewer:
Ok. Let’s assume we have the data ingested. Define the pages for the customer website frontend.

Candidate:
A possible sitemap will include:

Homepage (location-aware using HTML5 APIs) with search option
Search for events (location, date, time, type of event)
Event detail page (links to purchase tickets)
Shopping cart page (displays in-basket tickets with checkout options)
Authentication (social authentication) (optional if purchasing as a guest)
Profile (name, age, location, etc.)
Checkout page (# of tickets, date, time, location, seating quantity, and placement)
Confirmation page/transaction summary/email purchased tickets (with QR codes)
Interviewer:
One issue you may face, particularly for popular events, is multiple customers attempting to purchase tickets for the conflicting seating range. How do you ensure seat selection does not involve conflicts when a customer is selecting or proceeding with a transaction?

Candidate:
We can try and minimize conflicts by:

Providing a limited-time hold on tickets in a cart and aborting the hold in case a transaction does not complete within the hold period.
Provide default selection for free seats at the time of request hoping customers will pick the default selection.
Sectioning the space beforehand for 2, 3, 4, 5, or more seats and only display specific sections based on quantity.
Continually update seats via real-time communication (WebSockets).
Chunk space into segments and provide a section of space to the user to reduce conflicts.
Some conflicts can still occur amidst parallel transactions, so we can reject requests.
Interviewer:
It’s hard to do unbounded transitions in parallel in a way that prevents conflicts from arising; what else can you do to minimize conflicts?

Candidate:
Database conflicts can degrade performance, owing to an increase in database locks and aborted transactions. We can follow the above ideas (or use WebSockets for near-real-time seating access) and have a queuing mechanism where each request can be worked upon by lambda triggers.

UI can use polling to query the status of the reservation. This also works under choppy network conditions. We can send an email when a reservation is confirmed or denied. Even better, in late conflict situations, we can select alternate seats for the customer and have an option to cancel (possibly?).


Interviewer:
Let’s now define entities and relationships.

Candidate:
The main entities in this app are:

Customer: Browse events, purchase tickets
Publisher: Publish events, tickets, venue, and prices for tickets
Event: Represent an event that has a venue, event instances at a geographical location
Event Instance: An instance of an event at a particular venue at a particular day/time
Tickets: A definition of a ticket at a location within a venue
Ticket Instance: An instance of ticket bound to a particular event instance and price
Venue Map: Map for an event instance defining several ticket locations
Geographic Location: Location for an event
Payment Instruments: Represents credit cards and other means of payment
Transaction: Represents a ticket purchase by a customer sold by a publisher
ER diagram:


Interviewer:
How would you handle payments in your system?

Candidate:
Payments require a domain specialization, and secure storage of payment information is a P0 requirement for any e-commerce application. For this reason, we shall rely on a credible payments provider, like Stripe, such that we can focus on the core business proposition and leave payment management to experts.

Stripe provides excellent APIs to handle interactive and passive payment options for both one-time and recurrent payments.

Interviewer:
How would you handle large parties (more than 10, let’s say)?

Candidate:
Since this is a special arrangement, we would allow customer service to book tickets for large parties, at least in the MVP.

Key Takeaways
The interaction above is the perfect example of a structured interview strategy. The candidate sends a great signal to the interviewer about their relative seniority.

Let’s break down the key components of the approach taken by the candidate:

1. Scope Fencing
The candidate begins by negotiating and clarifying requirements and correctly classifying the application to be a consumer application and then identifies use cases for the application to define the MVP scope.

This scope fencing is important before sketching any architecture for the system, as we are focussed on a specified set of requirements.

2. Start and Enhance
After that, the candidate proposes an architecture for the initial MVP requirements and progressively enhances the architecture according to evolving clarifications, ensuring simplicity and preventing over-engineering.

3. Trade-offs
The candidate also made appropriate tradeoffs to release the MVP product by using existing back-office tools (Excel) and focusing on the consumer website rather than building a publishing website.

The choice of one metro city further scopes down the MVP target to an achievable one. At senior levels making and proposing such tradeoffs is a typical thing for software developers.

Similarly, the candidate also assessed the conflicts in transactions owing to high-traffic selloffs and proposed several options to mitigate and lessen the possibility of such conflicts and suggested creative ways to achieve this objective.

Again, another example of tradeoffs and options expected from senior engineers. As we observed, this had an impact on the architecture, and the candidate also proposed the use of queues and lambdas to process transactions.

4. Demonstrate Relevant Skills
Finally, the candidate also demonstrated data modeling skills by identifying entities and relationships for the product along with the cardinality of the relationships.

The candidate also identified security aspects of payments and suggested the use of well-proven payment providers (Stripe) and not use contrived, homegrown payment systems that could lack security. This helps focus the team on MVP business objectives.

Crack Your Next Full Stack Engineer Interview
If you need help with your prep, join Interview Kickstart’s Full Stack Engineering Interview Course — the first-of-its-kind, domain-specific tech interview prep program designed and taught by FAANG+ instructors. Click here to learn more about the program.

IK is the gold standard in tech interview prep. Our programs include a comprehensive curriculum, unmatched teaching methods, FAANG+ instructors, and career coaching to help you nail your next tech interview.
