Top 30 System Design Interview Questions in 2026
56 mins read
Jun 09, 2026
editor-page-cover
Video thumbnail
System Design interview questions
Over my 10+ years as a systems engineer and hiring manager at Microsoft and Facebook, I led hundreds of software engineer candidates through System Design interviews (SDI). I became deeply familiar with the kinds of software engineer system design interview questions that consistently distinguish top-tier engineers

Surprisingly, even the best developers often struggle with System Design problems. Why? I think it’s because System Design questions can be open-ended, requiring creativity and problem-solving skills not practiced in other coding interview challenges.

While SDI questions tend to evolve, many have remained popular over time. These questions are well-suited to evaluate candidates on two important levels:

Test the candidate’s understanding of System Design fundamentals.

Evaluate the candidate’s ability to apply those fundamentals in real-world applications.

Today, we’ll break down the top 30 System Design interview questions for 2026. These are essential questions asked at top companies like Google, Amazon, Meta, and more. Mastering these problems and their solutions will give you a huge leg up in your System Design interview prep.

Finally, I will leave you with a few battle-tested strategies that you can use to confidently take on any System Design question you encounter.

Cover
Grokking Modern System Design Interview
For a decade, when developers talked about how to prepare for System Design Interviews, the answer was always Grokking System Design. This is that course — updated for the current tech landscape. As AI handles more of the routine work, engineers at every level are expected to operate with the architectural fluency that used to belong to Staff engineers. That's why System Design Interviews still determine starting level and compensation, and the bar keeps rising.

I built this course from my experience building global-scale distributed systems at Microsoft and Meta — and from interviewing hundreds of candidates at both companies. The failure pattern I kept seeing wasn't a lack of technical knowledge. Even strong coders would hit a wall, because System Design Interviews don't test what you can build; they test whether you can reason through an ambiguous problem, communicate ideas clearly, and defend trade-offs in real time (all skills that matter ore than never now in the AI era). RESHADED is the framework I developed to fix that: a repeatable 45-minute roadmap through any open-ended System Design problem.

The course covers the distributed systems fundamentals that appear in every interview – databases, caches, load balancers, CDNs, messaging queues, and more – then applies them across 13+ real-world case studies: YouTube, WhatsApp, Uber, Twitter, Google Maps, and modern systems like ChatGPT and AI/ML infrastructure. Then put your knowledge to the test with AI Mock Interviews designed to simulate the real interview experience.

Hundreds of thousands of candidates have already used this course to land SWE, TPM, and EM roles at top companies. If you're serious about acing your next System Design Interview, this is the best place to start.

26hrs
Intermediate
4 Playgrounds
28 Quizzes

Start Learning
How to answer any System Design interview question
System Design interviews can feel intimidating because they're intentionally open-ended. Unlike coding interviews, there is rarely a single "correct" answer. Whether you're asked to design YouTube, Uber, Netflix, WhatsApp, ChatGPT, or a completely unfamiliar system, the interviewer is evaluating how you think through ambiguity, communicate trade-offs, and make engineering decisions.

This is why strong candidates don't memorize architectures. Instead, they follow a repeatable framework that helps them break large problems into smaller pieces and systematically build a solution.

One framework we recommend is RESHADED, a step-by-step approach that helps you structure your thinking and cover the areas interviewers care about most.

The RESHADED framework
Step

Goal

Requirements

Understand the problem

Estimation

Quantify scale

System interface

Define interactions

High-level design

Build architecture

API and data model

Define data flow

Deep dive

Solve hard problems

Evaluate trade-offs

Show engineering judgment

Discuss improvements

Demonstrate senior thinking

R → Requirements
Start by clarifying the problem before drawing any architecture diagrams.

Gather both functional and nonfunctional requirements and establish the scope of the system. Strong candidates ask questions early instead of making assumptions.

Useful questions include:

What features are in scope?

How many users should the system support?

What latency requirements exist?

Is availability more important than consistency?

Are we designing for a global audience?

The goal is to leave this phase with a clear list of requirements that will guide the rest of the design.

E → Estimation
Next, estimate the scale of the system.

Perform quick back-of-the-envelope calculations for:

Total users

Daily active users

Requests per second

Storage requirements

Bandwidth requirements

For example:

100 million registered users

10 million daily active users

1,000 requests per second on average

50 TB of stored data

These estimates help justify architecture decisions later. There's no need for perfect numbers—reasonable assumptions are enough.

S → System interface
Define how users and external systems interact with your service.

This usually means identifying major APIs and system boundaries.

Examples:

Ace Editor
At this stage, focus on high-level interactions rather than implementation details.

H → High-level design
Now design the overall architecture.

Identify major components such as:

Load balancers

Application servers

Databases

Caches

Message queues

CDNs

Object storage

A typical discussion might sound like:

User requests first reach a load balancer, which distributes traffic to application servers. Frequently accessed data is served from Redis, while persistent data is stored in a database. Background tasks are handled through a message queue.

This creates the foundation for deeper discussion later.

A → API and data model
Once the architecture is established, define the system's core entities and storage model.

Examples:

User

user_id, name, email

Post

post_id, author_id, content

Message

sender_id, receiver_id, timestamp

Video

video_id, owner_id, storage_url

Discuss:

Database schema

SQL vs NoSQL choices

Indexing strategies

Storage requirements

This demonstrates your ability to connect application behavior to data design.

D → Deep dive
This is the most important part of the interview.

Many candidates spend too much time drawing boxes and not enough time discussing difficult engineering problems.

Possible deep-dive topics include:

Scaling bottlenecks

Replication

Sharding

Caching strategies

Consistency models

Availability requirements

Rate limiting

Fault tolerance

For example, in a messaging system, you might discuss:

How messages are delivered reliably

How offline users receive messages

How conversations are partitioned across servers

This is where strong candidates differentiate themselves.

E → Evaluate trade-offs
Every architecture decision comes with trade-offs.

Interviewers want to see that you understand them.

Examples include:

SQL vs NoSQL

Consistency vs scalability

Push vs Pull

Real-time updates vs simplicity

Cache-heavy design

Performance vs complexity

Strong consistency

Correctness vs latency

Avoid presenting decisions as universally correct. Instead, explain why a particular choice makes sense for the requirements.

D → Discuss improvements
Finish by discussing how the system could evolve.

Topics may include:

Global scaling

Multi-region deployment

Observability and monitoring

Security enhancements

Disaster recovery

AI-powered features

Cost optimization

This demonstrates senior-level thinking and shows that you're considering long-term growth rather than only the initial implementation.

Mini example: Design a URL shortener
Let's apply RESHADED to a simple System Design question.

Requirements
Functional requirements:

Generate short URLs

Redirect users to original URLs

Nonfunctional requirements:

High availability

Low redirect latency

Estimation
Assume:

100 million URLs stored

10 million redirects per day

Thousands of requests per second

System interface
Ace Editor
High-level design
Ace Editor
API and data model
Ace Editor
Deep dive
Focus on:

Short code generation

Database indexing

Cache hit rates

Hot URL handling

Trade-offs
Random IDs vs sequential IDs

SQL vs NoSQL storage

Cache size vs infrastructure cost

Even in a short interview answer, this structure ensures you cover all critical areas.

Common System Design interview mistakes
Many candidates struggle not because they lack technical knowledge, but because they skip important steps.

Common mistakes include:

Jumping directly into databases

Not asking clarifying questions

Ignoring scale assumptions

Skipping estimations

Failing to discuss trade-offs

Spending too much time on diagrams

Not thinking out loud

Remember: interviewers evaluate your reasoning process, not just your final architecture.

Time allocation for a 45-minute interview
A good pacing strategy looks like this:

Requirements

5 minutes

Estimation

5 minutes

High-level design

10 minutes

Deep dive

15 minutes

Trade-offs and improvements

10 minutes

Notice that the largest portion of the interview is spent on the deep dive. This is where most engineering judgment is demonstrated.

The best System Design candidates don't memorize architectures—they follow a repeatable framework for reasoning through unfamiliar problems.

Whether you're designing YouTube, Uber, WhatsApp, Netflix, ChatGPT, or a system you've never seen before, the RESHADED framework helps you structure your thoughts, communicate clearly, and demonstrate the engineering judgment interviewers are looking for.

Top 30 System Design interview questions
To help meet you at your current preparation level, I have divided these 30 essential System Design problems into three difficulty levels:

Easy System Design interview questions
Design an API rate limiter for sites like Firebase or GitHub

Design a pub/sub system like Kafka

Design a URL-shortening service like TinyURL or bit.ly

Design a scalable content delivery network (CDN)

Design a web crawler

Design a distributed cache

Design an authentication and SSO platform like Auth0

Medium System Design interview questions
Design a video-first social platform like TikTok

Design an AI-powered customer support platform

Design a chat service like Facebook Messenger or WhatsApp

Design a mass social media service like Facebook or Instagram

Design a proximity service like Yelp or nearby places/friends

Design a search engine-related service like Typeahead

Design a video streaming service like YouTube or Netflix

Design a ride sharing service like Uber or Lyft

Design a recommendation service

Design a file sharing service like Google Drive

Design a social network and message board like Reddit or Quora

Hard System Design interview questions
Design a ChatGPT-style service

Design a code deployment system

Design a social media newsfeed service

Design a collaborative editing service like Google Docs

Design Google Maps

Design a payment gateway like Stripe

Design a food delivery service like Uber Eats or DoorDash

Design a distributed locking service like Google Chubby locking

Design a coordination system like ZooKeeper

Design a scalable distributed storage system like Bigtable

Design an online multiplayer game system

Design a Zoom-like video conference service

Before we start breaking down specific questions, I want to give you some high-level System Design tips that will enable you to confidently approach any problem.

Tips for any SDI question
Start each problem by stating what you know: List all required features of the system, common problems you expect to encounter with this sort of system, and the traffic you expect the system to handle. The listing process lets the interviewer see your planning skills and correct misunderstandings before you begin the solution.

Narrate any trade-offs: Every System Design choice matters. At each decision point, list at least one positive and one negative effect of that choice.

Ask your interviewer to clarify: Most System Design questions are purposefully vague. Ask clarifying questions to show the interviewer how you view the question and your knowledge of the system’s needs. Also, be sure to state your assumptions before diving into the components.

Know your architectures: Most modern services are built upon a flexible microservice architecture. Unlike the past’s monolithic architectures of tech companies, microservices allow smaller, agile teams to build independently from the larger system. Some older companies will have legacy systems, but microservices can function in parallel to legacy code and help refresh the company’s architecture.

Discuss emerging technologies: Conclude each question with an overview of how and where the system could benefit from generative AI (GenAI) and machine learning (ML). This will demonstrate that you’re prepared for not only current solutions but also future solutions.

Grokking the Generative AI System Design

Cover
Grokking the Generative AI System Design
GenAI System Design is emerging as its own interview category at top tech companies, distinct from traditional ML System Design. The questions are different, the architectures are different, and the scale considerations (GPU compute, parallelism, inference optimization) require their own mental models. 
Having spent years researching adaptive AI systems and neural networks, and now leading the creation of learning content at Educative, I designed this course to bridge that gap between understanding generative AI conceptually and being able to architect these gen AI systems end-to-end. 
You'll learn the SCALED framework, which is a 6-step methodology for breaking down any GenAI System Design problem, then apply it across five real-world systems spanning text, image, speech, and video generation. Each case study walks through training architecture, deployment design, and the specific tradeoffs involved in that modality. Before diving into the case studies, the course covers the foundational concepts you'll need: neural networks, transformers, tokenization, embeddings, parallelism strategies, inference optimization, RAG, and fine-tuning. You'll also learn how to do back-of-the-envelope calculations for LLM training and deployment. 
A bonus: if you have a GenAI or ML System Design interview coming up, this will give you both the framework and the depth to handle whatever systems are asked to design.

4hrs
Intermediate
8 Exercises
8 Quizzes

Get Started
Note: For information on how ML can boost your SDI performance, check out my blog How machine learning gives you an edge in System Design

System Design interview cheat sheet
As an added bonus, I highly encourage you to download this interview cheatsheet and internalize its contents. (Pro tip: You may even want to set it as the background for your desktop!)


System Design interview cheat sheet

System Design interview cheat sheet
Now, let’s examine the specifics of the top System Design interview questions, starting with the easy problems.

Easy System Design interview questions
I provide a problem statement, requirements, and workflow for each question with a high-level design.

1. Design an API rate limiter for sites like Firebase or GitHub
Problem statement: Design an API rate limiter that caps the number of API calls the service can receive in a given period to avoid an overload.

Sample clarifying questions!

Which entity is rate-limited: user, IP, token, or API key?

Are the rate-limiting rules configurable at runtime?

What is the expected scale in requests per second?

Requirements
Follow these requirements for a rate limiter system:

Functional requirements

Limit requests
Configurable
Error or notification if the limit is reached
Nonfunctional requirements

Availability
Low latency
Scalability
System Design and workflow
According to the following high-level rate limiter, the client’s requests are passed through an ID builder, which assigns unique IDs to the incoming requests. The ID could be a remote IP address, login ID, or other attributes. The decision maker fetches the throttling rules from the database and decides according to them. It either forwards the requests to application servers via the requests processor or discards them and provides the client an error message (429 Too many requests). If some requests are throttled due to a system overload, the system keeps those requests in a queue to be processed later.


A high-level design of a rate limiter

A high-level design of a rate limiter
Knowledge test!

How does your system measure requests per minute? If a user makes 10 requests at 00:01:20 and then another 10 at 00:02:10, they’ve made 20 in the same one-minute window despite the minute change.

In the event of a failure, a rate limiter would be unable to perform the task of throttling. Should the request be accepted or rejected in such a scenario?

What changes would you make to the design while considering the rate limiter design for a distributed system rather than a local one?

Note: Look at the detailed design of the rate limiter to find the answers to the questions above.

2. Design a pub/sub system like Kafka
Problem statement: Design a scalable and distributed pub/sub system like Kafka that can handle massive message throughput. It should also ensure reliable message delivery and support various messaging semantics (at most once, at least once, exactly once).

Sample clarifying questions!

What message delivery guarantee is required: at-most-once, at-least-once, or exactly-once?

Is message ordering important within topics or partitions?

How long should messages be retained in the system?

Requirements
Follow these requirements for the pub/sub design:

Functional requirements

Create a topic
Write messages
Subscription
Read messages
Specify retention time
Delete messages
Nonfunctional requirements

Availability
Scalability
Durability
Fault-tolerant
Concurrency management for simultaneous reads and writes
System Design and workflow
The brokers are responsible for storing the messages sent from the producers and allowing the consumers to read them. Similarly, the cluster manager is to keep an eye on the broker’s health and spin up another broker in case one goes down. The consumer’s details include subscription information, retention period, etc. The consumer manager manages the consumers, who manage consumers’ access to messages in the existing topics.


A high-level design of a pub/sub system

A high-level design of a pub/sub system
Knowledge test!

How can message delivery be ensured and semantics guaranteed at least once or at most once in the pub/sub design?

How can you guarantee message orders for specific consumers?

Note: To answer the above technical questions, you can examine the detailed design of pub/sub.

3. Design a URL-shortening service like TinyURL or bit.ly
Problem statement: Design a scalable and distributed system that shortens long URLs like TinyURL or bit.ly. The system takes a long URL and generates a new, unique short URL. It should also take a shortened URL and return the original full-length URL.

Sample clarifying questions!

Should shortened URLs be globally unique or user-specific?

Are custom aliases supported, and how are collisions handled?

Do URLs expire, or are they stored permanently?

Requirements
Follow these requirements for the URL-shortening system:

Functional requirements

URL generation
URL storage
Redirection to the original URL
Customization of URLs
Update and delete URLs
Nonfunctional requirements

Scalability
Availability
Unpredictability in URL generation
Readability
Low latency
System Design and workflow
A load balancer is the first intermediary between the clients and the server, ensuring even distribution of incoming requests to maintain availability and reliability. When a new URL-shortening request comes in, the load balancer forwards it to a server where the rate limiter checks if the client is within the allowed request rate.

The server leverages a sequencer to generate a unique numeric ID for the URL requests. This ID is passed to an encoder, which converts it into a more readable alphanumeric string. The original URL and its corresponding shortened version are stored in a database. To enhance performance, recently accessed URLs are kept in a cache, allowing quick retrieval without repeatedly querying the database.


A high-level design of a URL-shortening service

A high-level design of a URL-shortening service
Knowledge test!

What if two users input the same custom URL?

What if there are more users than expected?

How does the database regulate storage space?

Note: To explore in depth to get the answer to the above questions, check out the detailed chapters on the TinyURL System Design.

4. Design a scalable content delivery network (CDN)
Problem statement: Design a scalable content delivery network (CDN) system to efficiently distribute and cache content across globally distributed servers, minimizing latency and ensuring reliable end user content delivery.

Sample clarifying questions!

What types of content will the CDN serve: static, dynamic, or both?

What is the regional traffic distribution and expected scale?

Requirements
Follow these requirements for a CDN system:

Functional requirements

Retrieve content from the origin server
Respond to user requests
Auto content delivery from the origin server
Search
Update content from the origin or peer CDNs
Nonfunctional requirements

Scalability
Availability
Reliability
Security
Low latency
System Design and workflow
When a client requests content, a request routing system kicks in to find the address of the nearest or fastest server, ensuring minimal wait time. A load balancer then routes the request to the optimal server. If the requested content is cached on that server, it is immediately delivered to the client. If not, the server fetches the content from the origin server, caches it locally for more such requests, and then serves it to the user.

The CDN system ensures that frequently accessed content remains readily available while less popular content is periodically purged. The system also includes monitoring and analytics to track performance, optimize routing, and ensure high availability and reliability.


A high-level design of a CDN

A high-level design of a CDN
Knowledge test!

How would you determine which content to cache on edge servers?

How would you distribute traffic evenly across multiple edge servers?

How would you ensure the CDN infrastructure’s scalability, availability, and fault tolerance?

How would you optimize the delivery and reduce the latency while streaming?

Note: Check out the chapter on the design of a content delivery network to help you understand and get answers to the above questions.

5. Design a web crawler
Problem statement: Design a web crawler that systematically browses the internet to discover and index web pages. The crawler should efficiently navigate websites, retrieve content, and follow links to discover new pages.

Sample clarifying questions!

Should the crawler extract media content like images and videos or only HTML?

Should the crawler obey robots.txt and crawl-delay rules?

What is the depth and frequency of crawl required per domain?

Requirements
Follow these requirements for the web crawler system:

Functional requirements

Crawling
Storing crawled content
Scheduling for periodic crawling
Nonfunctional requirements

Scalability
Consistency
Reliability
Extensibility to network protocols
System Design and workflow
A web crawler begins by assigning a worker to a URL. Once the DNS is resolved, the worker sends the URL and IP address to an HTML fetcher to establish the connection. The URL and HTML content are extracted from the page and stored in the cache for processing. The duplicate eliminator service then tests this content to ensure no duplicate content is transferred to blob storage. Once this cycle is complete for a single URL, it moves on to the next address in the queue.


A high-level design of a web crawler

A high-level design of a web crawler
Knowledge test!

What functionalities must be added to extract all formats (images and video)?

Real web crawlers have multiple workers handling separate URLs simultaneously. How does this change the queuing process?

How can you account for crawler traps?

Note: To get the answers to the above questions, check out the detailed chapters on the web crawler System Design.

6. Design a distributed cache
Problem statement: Design a distributed caching system that provides fast, scalable, and reliable data retrieval across multiple servers. The system should efficiently manage cache consistency, handle high volumes of read and write requests, ensure data availability, and provide mechanisms for cache eviction and expiration.

Sample clarifying questions!

What should be the typical read-to-write ratio in expected workloads?

Should the cache support write-through or write-back strategies?

Will the cache operate across regions or within a single data center?

Requirements
Follow these requirements for the distributed cache system:

Functional requirements

Insert or write data
Retrieve data
Data partitioning
Cache eviction
Nonfunctional requirements

Scalability
Consistency
Low latency
High availability
System Design and workflow
A distributed caching system begins by partitioning the data across multiple cache nodes to balance the load and improve access speed. When a client requests data, an application server determines the appropriate cache node based on a consistent hashing algorithm, ensuring an even distribution of requests and quick lookups.

If the data is found in the cache (a cache hit), it is returned to the client immediately, significantly reducing latency. If the data is not found (a cache miss), the system retrieves it from the primary data store, caches it, and then serves it to the client. Cache eviction policies, such as least recently used (LRU) or time-to-live (TTL), manage the removal of stale data to free up space.


A high-level design of a distributed cache

A high-level design of a distributed cache
Knowledge test!

How do you ensure data consistency across multiple cache nodes, especially during updates and deletions?

What strategies can be implemented to handle cache misses efficiently without overloading the primary data store?

What methods can maintain low latency and high throughput under heavy load conditions?

How do you secure the cache data against unauthorized access and ensure privacy?

Note: To answer such conceptual questions, check out the detailed design of the distributed cache.

7. Design an authentication and SSO platform like Auth0
Problem statement: Design a secure, scalable, multi-tenant authentication platform that provides identity and access management as a service, similar to Auth0. The system must support user registration, multiple authentication methods, and seamless single sign-on (SSO) across various client applications.

Sample clarifying questions!

Is single sign-on required across domains or only within one?

Should the platform support both B2C and B2B (multi-tenant) models?

Requirements
Follow these requirements for the authentication and SSO platform:

Functional requirements

User sign-up and login
Third-party provider login
Token-based authentication
Single sign-on (SSO)
Multi-factor authentication (MFA)
Password reset and recovery
Nonfunctional requirements

Scalability
Security
High availability
Low latency
Fault tolerance
System Design and workflow
When users want to log in, their request is routed through a load balancer and then sent to an authentication server. The system checks whether the user is signing in with a regular email and password or using a third-party login provider. If it’s a third-party login, the system redirects the user to the external provider for verification. Once the login is successful, the authentication service creates a secure token and returns it to the client.

This token acts like a digital badge and is used to identify the user on future requests. It can also be used across multiple applications owned by the same company, enabling single sign-on (SSO). Each token has a built-in expiration time, ensuring that user sessions do not remain active indefinitely.

The authentication system includes important safeguards, such as limiting failed login attempts, detecting suspicious activity, and securely encrypting all stored passwords. It also supports multi-tenancy, meaning user data is kept separate for each business using the platform, so each company only sees its users.


A high-level design of an authentication and SSO platform

A high-level design of an authentication and SSO platform
Knowledge test!

How do we safely store user passwords in the system?

How does the system recognize users across multiple apps (SSO)?

What happens if a third-party login service like Google is temporarily down?

How do we prevent too many failed login attempts from the same user or IP address?

How would the system handle logout and session expiration?

Note: The lesson on authentication and authorization explores the core concepts behind this system, including tokens, login protocols, and user permissions.

Medium System Design interview questions
I provide each medium system design question’s problem statement, requirements, workflow, and system architecture.

8. Design a video-first social platform like TikTok
Problem statement: Design a video-first social platform where users can create, upload, watch, and interact with short-form videos (reels). The system should support millions of users, deliver low-latency content, and personalize each user’s video feed based on engagement history.

Sample clarifying questions!

What is the maximum video size and length supported?

Should the video feed be globally personalized or regionally segmented?

Requirements
Follow these requirements for a video-first social platform:

Functional requirements

Upload or create short videos

Stream short videos

Like, comment, and share videos

Personalized video feed

Follow and unfollow users

View creator profiles

Search by tags, music, or username

Nonfunctional requirements

High availability

Low latency streaming

Scalability (both storage and delivery)

Video processing and compression

System Design and workflow
When users open the app, their request is routed to the feed generation service through a load balancer. This service works with a recommendation service to generate a personalized list of videos based on the user’s watch history, likes, and other interactions.

Once the feed is generated, the app streams video content directly from a content delivery network (CDN) to ensure fast loading times, especially for users in different parts of the world. The videos are stored in a media storage system and processed by a video processing service, which handles compression, format conversion, thumbnail generation, and basic moderation.

When a user uploads a video, it’s routed to the video processing service. After processing, the video is saved to media storage, which can become part of the personalized list for users via the recommendation service.

The following high-level design represents a simple workflow of a video-first social platform like TikTok:


A high-level design of a video-first social platform

A high-level design of a video-first social platform
Knowledge test!

How would you handle millions of concurrent users uploading and watching videos?

What strategies would you use to keep the feed relevant and personalized in real time?

How would you moderate inappropriate video content before it reaches viewers?

Note: The chapter on the content delivery network explores how content is delivered quickly and efficiently to users worldwide.

9. Design an AI-powered customer support platform
Problem statement: Design a scalable customer support platform for a large e-commerce business. The system should use a collection of specialized AI agents to automatically understand, route, and resolve customer queries in real time. If the issue isn’t resolved automatically, the system should escalate it to a human agent with full context preserved.

Sample clarifying questions!

Which channels should be supported (chat, voice, email)?

Should the system support multilingual AI interactions?

Should users be authenticated before submitting a query?

Requirements
Follow these requirements for the AI-powered customer support platform:

Functional requirements

Query intake
Automated routing
AI-based resolution
Human escalation
Knowledge base integration
Nonfunctional requirements

Scalability
Accuracy
High availability
Low latency
System Design and workflow
When a customer submits a query, it is first received by a query router. This component classifies the query type, such as billing, FAQ, or technical issue, based on message content and customer context. The query is then forwarded to the appropriate specialized AI agent.

The FAQ agent retrieves standard responses from the knowledge base to answer common customer questions. For issues related to payments or orders, the billing agent securely accesses account details to provide accurate, account-specific resolutions. Meanwhile, the technical agent helps customers troubleshoot app or product-related problems by walking them through guided solutions.

If the assigned AI agent resolves the query, a response is sent back to the user. If not, the human escalation manager transfers the case to a human support agent with the full interaction history attached. Similarly, a monitoring and logging service records all activity to track performance, generate insights, and help improve future responses, as shown in the following illustration:


A high-level design of an AI-powered customer support platform

A high-level design of an AI-powered customer support platform
Knowledge test!

Why might using multiple specialized AI agents be better than one large general-purpose model?

How should the system decide when to escalate a query to a human agent?

How can the query router be made fault-tolerant in case of misclassification?

What steps are needed to add a new agent, and how would you ensure it doesn’t interfere with others?

10. Design a chat service like Facebook Messenger or WhatsApp
Problem statement: Design a scalable, reliable, and secure real-time chat service like Facebook Messenger or WhatsApp to support instant messaging, group chats, notifications, and multimedia sharing.

Sample clarifying questions!

Should the system support both one-to-one and group chats?

Are messages required to be end-to-end encrypted?

Should messages be stored indefinitely or have a retention policy?

Requirements
Follow these requirements for the WhatsApp System Design:

Functional requirements

Real-time communication (individual/group)
Message delivery acknowledgment
Sharing of media content
Chat storage
Notifications
Nonfunctional requirements

Availability
Low latency
Scalability
Consistency
Security
System Design and workflow
In a real-time communication system, senders and receivers are connected to chat servers. Chat servers deliver messages from sender to receiver via a messaging queue. Various protocols, such as WebSocket, XMPP, MQTT, and real-time transport protocol, can be utilized for real-time communication. For this purpose, a manager establishes real-time connections between clients and chat servers; for instance, assume the WebSocket manager establishes WebSocket connections between users and different chat servers. Similarly, the messages can be persistently stored in the database.


A high-level design of a real-time chat system

A high-level design of a real-time chat system
Knowledge test!

What happens if a message is sent when the user isn’t connected to the internet? Is it sent when the connection is restored?

How will you encrypt and decrypt the message without increasing latency?

How do users receive notifications?

Are messages pulled from the device (the server periodically prompts the devices if they’re waiting to send a message), or are pushed to the server (the device prompts the server that it has a message to send)?

Note: Look at the detailed design of the real-time chat service to get answers to such questions.

11. Design a mass social media service like Facebook or Instagram
Problem statement: Design a social media service used by several million users like Instagram. Users should be able to view a newsfeed with posts by following users and suggesting new content that the user may like.

Sample clarifying questions!

Should feed generation be on write, on read, or hybrid?

Should the system support images, video, or only text content?

How personalized should the user feed be?

Requirements
Follow these requirements for the Instagram system:

Functional requirements

Create a post
Delete a post
Edit a post
Share a post
Follow and unfollow users
Search for content
View the system’s generated feed
Like and dislike posts
Nonfunctional requirements

Scalability
Availability
Low latency
Reliability
Security
Based on the above requirements, let’s create a high-level design of a feed-based social system like Instagram.

System Design and workflow
The high-level design of a feed-based social network includes posts, timeline generation, feed publishing service, and feed ranking and recommendation engine. The post-service handles the clients’ posts, and the post is published on the client’s wall (page). Similarly, the timeline generation service generates feeds for friends and followers by the timeline generation service. The timeline generation service utilizes the feed ranking and recommendation engine, which ranks and recommends the top N posts to followers based on their interests, searches, and watch history. The generated feed is stored in the database, and the feed publishing service is responsible for publishing and showing the generated feeds to followers. As the feed could contain videos, the CDN is responsible for delivering the videos to followers with low latency.


A high-level design of a mass social media service

A high-level design of a mass social media service
Knowledge test!

Influencers or celebrities will have millions of followers; how are they handled vs. standard users?

How does the system weigh posts by age? Old posts are less likely to be viewed than new posts.

What’s the ratio of read and write focused nodes? Are there likely to be more read requests (users viewing posts) or write requests (users creating posts)?

How can you increase availability? How does the system update? What happens if a node fails?

How do you efficiently store posts and images?

Note: Look at the detailed design of Instagram for a better understanding.

12. Design a proximity service like Yelp or nearby places/friends
Problem statement: Design a proximity server that stores and reports the distance to places like restaurants. Users can search nearby places by distance or popularity. The database must store data for hundreds of millions of businesses across the globe.

Sample clarifying questions!

How should results be sorted: by distance, rating, or popularity?

Is real-time tracking needed for friends or businesses?

Requirements
Follow these requirements for a System Design like Yelp:

Functional requirements

User accounts
Search
Feedback
Nonfunctional requirements

Scalability
High availability
Consistency
Performance
System Design and workflow
The system handles search requests by using load balancers to distribute read requests to the read service, which then queries the quadtree service to identify relevant places within a specified radius. The quadtree service also refines the result before being sent to the clients. For adding places or feedback, write requests are similarly routed through load balancers to the writing service, which updates a relational database and stores images in blob storage. The system also involves segmenting the world map into smaller parts, storing places in a key-value store, and periodically updating these segments to include new places, although this update happens monthly due to the low probability of new additions.


A high-level design of a proximity service like Yelp

A high-level design of a proximity service like Yelp
Knowledge test!

How do you store lots of data and retrieve search results quickly?

How should the system handle different population densities? Rigid latitude/longitude grids will cause varied responsiveness based on density.

Can we optimize commonly searched locations?

Note:  Look at the detailed design of Yelp to get answers to the above questions.

13. Design a search engine-related service like Typeahead
Problem statement: Design a typeahead suggestion system that provides real-time, relevant autocomplete and autocorrect suggestions as users type, ensuring low latency and scalability to efficiently handle a large volume of queries.

Sample clarifying questions!

What is the maximum allowed latency for suggestions?

Should the system adapt to user search history and preferences?

How often should the autocomplete dataset be refreshed?

Requirements
Follow these requirements for the system:

Functional requirements

Autocomplete
Autocorrect
Nonfunctional requirements

Scalability
Fault tolerance
Performance
System Design and workflow
When a user starts typing a query, each character is sent to an application server. A suggestion service gathers the top N suggestions from a distributed cache, or Redis, and returns the list to the user. An alternate service, the data collector and aggregator, takes the query, analytically ranks it, and stores it in a NoSQL database. The trie builder is a service that takes the aggregated data from the NoSQL database, builds tries, and stores them in the trie database.


A high-level design of Typeahead

A high-level design of Typeahead
Knowledge test!

How strongly do you weigh spelling mistake corrections?

How do you update selections without causing latency?

How do you determine the most likely completed query? Does it adapt to the user’s searches?

What happens if the user types very quickly? Do suggestions only appear after they’re done?

Note: Look at the detailed design of the Typeahead system for a better understanding of the system.

14. Design a video streaming service like YouTube or Netflix
Problem statement: Design a video streaming service like YouTube or Netflix that allows users to upload and stream videos. The service should efficiently store many videos and their metadata and return accurate and quick results for user search queries.

Sample clarifying questions!

What is the expected volume of uploads and concurrent streams?

Are live streaming features needed, or only on-demand?

Requirements
Follow these requirements for a streaming service System Design:

Functional requirements

Search videos
Upload videos
Stream videos
Rate videos
Nonfunctional requirements

Availability
Scalability
Low latency (to stream a video)
Support multiple formats
System Design and workflow
A load balancer first handles video upload requests by sending them to the application servers. The applications server interacts with the video service, which triggers transcoders to convert the video to different formats. These typically range from 140p to 1440p but can reach 4K resolutions. The formatted video is then saved to the blob store, and its metadata is stored on the metadata database. The video service sends the transformed video to CDNs for quick content delivery to end users. Popular and recent uploads are held in a CDN. A content delivery network, or CDN, reduces latency when delivering video to users. The CDN stores and delivers requested data to users in conjunction with colocation sites.


A high-level design of a video streaming system

A high-level design of a video streaming system
Knowledge test!

How will your service ensure smooth video streaming on various internet qualities?

How are the videos stored?

How will the system provide a personalized experience to each user with recommendations?

How does the system react to a sudden drop in the network, shifting to low-quality, buffering content, etc.?

Note: Check out the detailed chapter on YouTube System Design that answers the above concerns during the design.

15. Design a ride sharing service like Uber or Lyft
Problem statement: Design a system for a ride sharing service similar to Uber, where users can request rides and drivers can accept these requests. The system should efficiently match drivers to riders based on location and availability, handle real-time updates on ride statuses, manage payments securely, and ensure a smooth user experience from booking to completion of the ride.

Sample clarifying questions!

Should the system support different ride types (economy, premium, carpool)?

How frequently are driver and rider locations updated?

Are wallet systems, promotions, or refunds part of the payment system?

Requirements
Follow these requirements for the System Design:

Functional requirements

Location tracking
Request a ride
Show nearby drivers
Calculate and notify ETA
Trip process (confirmation and updates)
Payment
Nonfunctional requirements

Scalability
Availability
Reliability
Low latency
Consistency
Security
System Design and workflow
A user’s request is sent to the application server via a load balancer and API gateway. The system accepts the rider’s request, and the trip service or manager provides an estimated time of arrival (ETA) based on different vehicle types. The drivers and location manager use a matching algorithm to find the nearest available drivers and send the request to those drivers by notifying them via a notification service. When a driver matches with a rider, the application should return the trip and rider information. The driver’s location is regularly recorded and communicated to relevant users through a pub/sub service.

Once the ride is complete, the trip manager ensures payment is securely processed through a payment gateway. We leverage a database that stores user and driver profiles, ride history, and payment information. We also use caching mechanisms to speed up access to frequently requested data, and constant monitoring ensures the service runs smoothly.


A high-level design of a ride sharing service

A high-level design of a ride sharing service
Knowledge test!

How can you keep latency low during busy periods?

How is the driver paired with the user? Iterating over all drivers to find Euclidean distance would be inefficient.

What happens if the driver or user loses connection?

How would you update the ETA during a ride in peak hours?

Note: Check out our guide to designing Uber’s backend for more information on the interview process.

16. Design a recommendation service
Problem statement: Design a recommendation engine that suggests personalized content or products to users based on their preferences and behavior. The system should efficiently analyze user data, such as past interactions and ratings, to provide accurate and relevant recommendations.

Sample clarifying questions!

What types of content are being recommended (products, videos, etc.)?

Should recommendations be personalized or globally ranked?

Should updates happen in real time or batch processing?

Requirements
Follow these requirements for a recommendation service:

Functional requirements

Search and browse
Personalized recommendations
Real-time update of recommendations
Offline processing
Nonfunctional requirements

Scalability
Low latency
Privacy
Security
System Design and workflow
The recommendation engine’s System Design comprises data collection, processing, and recommendation. When users interact with the application, the data collector service collects data from application servers, such as search, viewing history, ratings, watch times, etc. This data is logged into Kafka for immediate processing.

We use real-time processors to process data and recommend content accordingly. We also use batch processors for periodic offline processing to perform detailed analyses and improve accuracy. Once the data is processed, the ML/AI engine uses different algorithms, such as collaborative filtering, content-based filtering, hybrid approaches, and advanced techniques to recommend personalized suggestions.

Integrating AI to enhance the user experience is crucial to modern applications. Learn how to build generative AI applications in our course: Grokking the Generative AI System Design.


A high-level design of a recommendation system

A high-level design of a recommendation system
Knowledge test!

How will you handle the cold start problem for new users and content?

How would you update recommendations in real time?

How would you ensure the recommendation system scales to ever-increasing users?

What strategies would you employ to adjust recommendations dynamically based on real-time user behavior or preference changes?

How can you optimize recommendation accuracy without compromising on scalability and performance?

17. Design a file sharing service like Google Drive
Problem statement: Design a scalable, synchronous, cross-platform storage system like Dropbox. Users can store files and photos and access them from other devices.

Sample clarifying questions!

What is the maximum file size supported for upload/download?

Should real-time collaboration be supported or only file syncing?

Are user storage quotas or expiration policies needed?

Requirements
Follow these requirements for the system:

Functional requirements

Upload and download files
Share files
Synchronize across devices
Nonfunctional requirements

Scalability and consistency
Low latency
System Design and workflow
In a high-level design of a file sharing service like Google Drive, the user’s request to upload or download a file passes through a load balancer to the application servers. The application server sends the upload request to a chunk service for splitting large files into smaller, more easily manageable chunks. These files are then sent to a processing queue that sends and receives requests to store metadata and ensure that files are synchronized between users and accounts. Files are stored in a cloud-based block storage platform, like Amazon S3 (or in-premises blob storage). Users who want to upload or download files contact this storage service through a web server.


A high-level design of a file sharing service

A high-level design of a file sharing service
Knowledge test!

Where are the files stored?

How do you handle updates? Do you re-upload the entire file again?

Do small updates require a full file update?

How does the system handle two users updating a document simultaneously?

Note: To further your learning, explore the detailed design of distributed file systems of tech giants like Google and Facebook (Meta).

18. Design a social network service like Reddit or Quora
Problem statement: These social network sites operate on a forum-based system that allows users to post questions and links. For simplicity’s sake, focus more on designing Quora. You’ll unlikely need to walk through the design of something like Reddit’s subreddit or karma system in an interview.

Sample clarifying questions!

What types of content are supported: text, images, videos, links?

Should voting affect visibility globally or per user?

Are real-time notifications required for interactions?

Requirements
Follow these requirements for a System Design like Quora:

Functional requirements

Post questions and answers
Vote and comment
Search
Answer ranking
Recommendation system
Nonfunctional requirements

Scalability and consistency
Availability
Performance
System Design and workflow
In Quora’s high-level design, users interact through a web server, which communicates with an application server to handle actions such as posting questions, answers, and comments. Content like images and videos is stored in blob storage, and question-and-answer data, along with user profiles and interactions, are stored in a MySQL database.

A machine learning engine analyzes user interactions and content to rank answers based on relevance and quality. This engine continuously learns from user feedback to improve its ranking algorithms. For personalized user experiences, a recommendation system utilizes machine learning models to tailor content based on individual interests and behaviors.


A high-level design of Quora

A high-level design of Quora
Knowledge test!

How can you ensure the system’s scalability to handle millions of simultaneous users posting questions and answers?

What strategies can efficiently store and retrieve large multimedia content in blob storage?

How would you design the database schema to manage the relationships between users, questions, answers, and comments in a scalable way?

What techniques can be used to rank answers effectively, ensuring that high-quality content is prioritized for users?

How can you optimize the performance of the machine learning engine to rank answers quickly and accurately?

Note: Check out the detailed chapter on Quora System Design to help you understand the system.

Hard System Design interview questions
Hard System Design interview questions refer to complex, open-ended problems that require deep technical knowledge, critical thinking, and the ability to design scalable, efficient systems under constraints. Let’s start with the System Design of a ChatGPT-style service.

19. Design a ChatGPT-style service
Problem statement: Design a scalable and interactive conversational AI platform, similar to ChatGPT, that allows users to submit prompts and receive real-time, coherent responses from a large language model (LLM). The system should support millions of users, maintain conversation history, and deliver a fast and responsive experience.

Sample clarifying questions!

Should conversation history persist across sessions?

How important is streaming speed vs. final accuracy?

Is personalization (tone, memory) required in responses?

Requirements
Follow these requirements for the ChatGPT-style service:

Functional requirements

Prompt intake

Context management

LLM querying

Response streaming

Session storage

User authentication

Nonfunctional requirements

Low latency

High availability

Scalability

Security and privacy

Responsible AI usage

System Design and workflow
When a user submits a prompt, the request is initially routed to the API gateway, which verifies authentication and applies rate limiting. The authorized request is then forwarded to the conversation manager. The conversation manager retrieves recent conversations from the user’s chat history, if available, and combines them with the new prompt to create the full input for the LLM. This input is sent to the LLM inference service, which may use distributed replicas or sharded models to manage high traffic.

The LLM inference service generates a response. To improve the user experience, the response is streamed back to the client as it is being generated. This makes the interaction feel fast and natural, especially for longer responses. Once the full response is ready, it is saved to the session store alongside the user’s prompt. All interactions are logged for monitoring and future improvements.

To handle peak traffic smoothly, a queue can be introduced before the inference step to buffer requests. Optionally, depending on the use case, the system may include user profile data for personalization, such as adapting tone, language, or preferred length of answers.

The following illustrations show a high-level design of a ChatGPT-style service:


A high-level design of a ChatGPT-style service

A high-level design of a ChatGPT-style service
Knowledge test!

Why is response streaming important in a conversational AI platform, and how does it affect perceived latency?

What are the trade-offs between stateless vs. stateful architecture for managing conversation history?

What mechanisms would you implement to ensure the system filters harmful or inappropriate content in real time?

To answer more such interesting and thought-provoking questions, you can check out the following course:

Cover
Grokking the Generative AI System Design
GenAI System Design is emerging as its own interview category at top tech companies, distinct from traditional ML System Design. The questions are different, the architectures are different, and the scale considerations (GPU compute, parallelism, inference optimization) require their own mental models. 
Having spent years researching adaptive AI systems and neural networks, and now leading the creation of learning content at Educative, I designed this course to bridge that gap between understanding generative AI conceptually and being able to architect these gen AI systems end-to-end. 
You'll learn the SCALED framework, which is a 6-step methodology for breaking down any GenAI System Design problem, then apply it across five real-world systems spanning text, image, speech, and video generation. Each case study walks through training architecture, deployment design, and the specific tradeoffs involved in that modality. Before diving into the case studies, the course covers the foundational concepts you'll need: neural networks, transformers, tokenization, embeddings, parallelism strategies, inference optimization, RAG, and fine-tuning. You'll also learn how to do back-of-the-envelope calculations for LLM training and deployment. 
A bonus: if you have a GenAI or ML System Design interview coming up, this will give you both the framework and the depth to handle whatever systems are asked to design.

4hrs
Intermediate
8 Exercises
8 Quizzes

Preview
20. Design a code deployment system
Problem statement: Design a reliable and scalable code deployment system for a large-scale distributed application. The system should automate building, testing, and rolling out code changes across environments with minimal disruption and the ability to monitor and roll back changes when necessary.

Sample clarifying questions!

What rollback strategy is required: full, partial, or per environment?

Is deployment approval manual, automated, or both?

Requirements
Follow these requirements for a code deployment system:

Functional requirements

Version control integration
Automated code building
Multi-environment deployment
Environment configuration
Automated rollbacks
Deployment monitoring
Support for deployment strategies
Nonfunctional requirements

Availability
Fault tolerance
Performance
Scalability
Security
System Design and workflow
The high-level design of the code deployment system includes all the major components needed to meet the outlined requirements. The process begins when developers submit code to a version control system (VCS). Any new code changes trigger a continuous integration (CI) service, which automatically integrates updates, runs preliminary tests, and prepares the code for deployment. Once validated, the code is published to a queue, which decouples build triggers from execution.

A dedicated build service listens to this queue and retrieves jobs to compile the code. It then generates binary artifacts and stores them in a versioned blob storage system. These artifacts represent the system’s deployable output. When it’s time to deploy, the deployment service pulls the necessary artifacts from blob storage and installs them on machines across different regions. This ensures consistent deployments in multiple environments, such as staging and production.

The architecture supports gradual rollouts, rollback mechanisms, and monitoring at each step, helping to reduce risks and improve reliability in production.

A high-level design of a code deployment system is depicted in the following illustration:


A high-level design of a code-deployment system

A high-level design of a code-deployment system
Knowledge test!

How would you ensure zero-downtime deployments in this system?

What are the key considerations when designing for rollback capability?

If deployments fail in only one region, how would you isolate and debug the issue without affecting global deployments?

As your engineering team grows and deploys more frequently, what changes would you make to maintain fast and stable builds?

You can check out the following course for more details on System Design:

Cover
Grokking Modern System Design Interview
For a decade, when developers talked about how to prepare for System Design Interviews, the answer was always Grokking System Design. This is that course — updated for the current tech landscape. As AI handles more of the routine work, engineers at every level are expected to operate with the architectural fluency that used to belong to Staff engineers. That's why System Design Interviews still determine starting level and compensation, and the bar keeps rising.

I built this course from my experience building global-scale distributed systems at Microsoft and Meta — and from interviewing hundreds of candidates at both companies. The failure pattern I kept seeing wasn't a lack of technical knowledge. Even strong coders would hit a wall, because System Design Interviews don't test what you can build; they test whether you can reason through an ambiguous problem, communicate ideas clearly, and defend trade-offs in real time (all skills that matter ore than never now in the AI era). RESHADED is the framework I developed to fix that: a repeatable 45-minute roadmap through any open-ended System Design problem.

The course covers the distributed systems fundamentals that appear in every interview – databases, caches, load balancers, CDNs, messaging queues, and more – then applies them across 13+ real-world case studies: YouTube, WhatsApp, Uber, Twitter, Google Maps, and modern systems like ChatGPT and AI/ML infrastructure. Then put your knowledge to the test with AI Mock Interviews designed to simulate the real interview experience.

Hundreds of thousands of candidates have already used this course to land SWE, TPM, and EM roles at top companies. If you're serious about acing your next System Design Interview, this is the best place to start.

26hrs
Intermediate
4 Playgrounds
28 Quizzes

Preview
21. Design a social media newsfeed service
Problem statement: Design a scalable and efficient social media newsfeed system that delivers personalized, real-time content updates to users, ensuring low latency, high availability, and scalability.

Sample clarifying questions!

Should the feed be push-based, pull-based, or hybrid?

What level of personalization is required?

Does the feed support multimedia content like images and videos?

Requirements
Follow these requirements for the design:

Functional requirements

Newsfeed generation
Newsfeed contents
Newsfeed display
Nonfunctional requirements

Scalability
Fault tolerance
Availability
Low latency
System Design and workflow
In the following high-level design of a newsfeed system, clients post or request their newsfeed through the app, which the load balancer redirects to a web server for authentication and routing. Whenever a post is created via the post service and available from a user’s friends (or followers), the notification service informs the newsfeed generation service, which generates newsfeeds from the posts of the user’s friends (followers) and keeps them in the newsfeed cache. Similarly, the generated feeds are published by the newsfeed publishing service to the user’s timeline from the news feed cache. It also appends multimedia content from the blob storage with a news feed if required.


A high-level design of the newsfeed service

A high-level design of the newsfeed service
Knowledge test!

Creating and storing newsfeeds for each user in the cache requires enormous memory. Is there any way to reduce this memory consumption?

What mechanisms would you implement to prioritize and filter content in the newsfeed to prevent information overload for users?

How can the system ensure consistency and order of posts in the newsfeed, especially in a distributed environment with multiple data centers?

Note: If you need answers to such questions, look at the detailed design of a newsfeed service.

22. Design a collaborative editing service like Google Docs 
Problem statement: Design a collaborative editing service that lets users remotely and simultaneously make changes to text documents. The changes should be displayed in real time. Like other cloud-based services, documents should be consistently available to any logged-in user on any machine. Your solution must be scalable to support thousands of concurrent users.

Sample clarifying questions!

What collaboration model is used: character-level or paragraph-level?

Should the system support offline editing and later sync?

How will conflicts between concurrent edits be resolved?

Requirements
Follow these requirements for the Google Docs system:

Functional requirements

Collaboration
Edit overlap
Autocomplete and grammatical suggestions
History and view count
Manage documents
Nonfunctional requirements

Consistency
Availability
Low latency
System Design and workflow
Clients’ requests are forwarded to the operations queue, where conflicts are resolved between different collaborators, and the data is stored in the time series database and blob storage (responsible for storing media files). Autocomplete suggestions are made via the typeahead service. This service resides on the Redis cache to enable low latency suggestions and enhance the speed of the regular updates process. The application servers perform several important tasks, including importing and exporting documents. Application servers also convert documents from one format to another. For example, a .doc or .docx document can be converted into .pdf or vice versa.


A high-level design of the Google Docs service

A high-level design of the Google Docs service
Knowledge test!

How do you minimize latency when multiple users are distant from the server?

What techniques for conflict resolution are best for ensuring consistency?

Note: If you need answers to such questions, look at the detailed design of Google Docs.

23. Design Google Maps
Problem statement: Design a service that can map the route between two locations. The system should map several optimal paths to a destination based on the mode of travel. Each route should display the total mileage and an estimated time of arrival.

Sample clarifying questions!

What travel modes should be supported: driving, cycling, walking, public transport?

How frequently should traffic data be updated?

Is offline route planning and navigation required?

Requirements
Follow these requirements for the Google Maps system:

Functional requirements

Real-time navigation
Location/Area search
Route search/finder
Route planning
Real-time notification
Nonfunctional requirements

Scalability
Reliability
Low latency
Accuracy
System Design and workflow
In the Google Maps system, clients request location-based services, such as finding a route or searching for nearby points of interest. The load balancer directs requests to various services based on the nature of the query.
For routing requests, the route finder service calculates optimal paths between two or more points using real-time and historical data. It relies on the graph processing service to perform complex calculations on the road network graph stored in the graph database. The location finder service provides the user’s current location or identifies the location of a specified point of interest. The area search system lets users find nearby places, such as restaurants or gas stations, by querying the graph database and third-party road data sources.


A high-level design of the Google Maps system

A high-level design of the Google Maps system
Knowledge test!

How do you collect the world map data? What third-party source will you use?

How do you segment the map to avoid long loading times?

How do you ensure the accuracy of ETA calculations for high-traffic times of day?

Note: Look at the detailed design of Google Maps to get answers to the questions above.

24. Design a payment gateway like Stripe
Problem statement: Design a payment gateway like Stripe capable of securely performing online or card transactions and handling millions of users simultaneously.

Sample clarifying questions!

What payment types must be supported: cards, wallets, bank transfers?

Is fraud detection and risk analysis built into the platform?

Should the system support multi-currency international transactions?

Requirements
Follow these requirements for the system:

Functional requirements

User registration and authentication
Payment processing
Transaction history
Balance management
Mobile accessibility
Nonfunctional requirements

Performance
Availability
Reliability
Data integrity and security
Scalability
System Design and workflow
Initially, a customer selects a product or service via the merchant’s online store and proceeds to the checkout page to provide payment details, including card number, cardholder name, CVV or CVC, and expiration date. Upon clicking the pay button, an event that hits the payment service stores the event, performs initial security checks, and forwards the payment details to the payment service provider for further operations is generated. The payment gateway performs extensive security checks, moves money from the customer’s account to the merchant’s, and provides secondary services like handling refunds and generating invoices. The card network verifies the card information via APIs provided by the card network. Once the payment is processed, the wallet and ledger service updates the merchant’s wallet in the database to track total revenue and processes each order separately in case of multiple sellers. The reconciliation system matches and verifies financial records to ensure accurate transaction accounting, identifying and resolving discrepancies.


A high-level design of a payment gateway

A high-level design of a payment gateway
Knowledge test!

Where are the customer’s payment details encrypted during a purchase?

How does the card network authorize a debit/credit card?

You can check out the following course for more details on System Design:

Cover
Grokking Modern System Design Interview
For a decade, when developers talked about how to prepare for System Design Interviews, the answer was always Grokking System Design. This is that course — updated for the current tech landscape. As AI handles more of the routine work, engineers at every level are expected to operate with the architectural fluency that used to belong to Staff engineers. That's why System Design Interviews still determine starting level and compensation, and the bar keeps rising.

I built this course from my experience building global-scale distributed systems at Microsoft and Meta — and from interviewing hundreds of candidates at both companies. The failure pattern I kept seeing wasn't a lack of technical knowledge. Even strong coders would hit a wall, because System Design Interviews don't test what you can build; they test whether you can reason through an ambiguous problem, communicate ideas clearly, and defend trade-offs in real time (all skills that matter ore than never now in the AI era). RESHADED is the framework I developed to fix that: a repeatable 45-minute roadmap through any open-ended System Design problem.

The course covers the distributed systems fundamentals that appear in every interview – databases, caches, load balancers, CDNs, messaging queues, and more – then applies them across 13+ real-world case studies: YouTube, WhatsApp, Uber, Twitter, Google Maps, and modern systems like ChatGPT and AI/ML infrastructure. Then put your knowledge to the test with AI Mock Interviews designed to simulate the real interview experience.

Hundreds of thousands of candidates have already used this course to land SWE, TPM, and EM roles at top companies. If you're serious about acing your next System Design Interview, this is the best place to start.

26hrs
Intermediate
4 Playgrounds
28 Quizzes

Preview
25. Design a food delivery service like Uber Eats or DoorDash
Problem statement: Design a food delivery service like Uber Eats or DoorDash that efficiently connects hungry customers with diverse restaurants, ensuring timely and accurate order fulfillment while optimizing delivery routes and driver earnings.

Sample clarifying questions!

Should the system prioritize delivery speed, cost, or driver fairness?

Is real-time order tracking with driver location required?

Are ratings and reviews needed for restaurants and delivery agents?

Requirements
Follow these requirements for the DoorDash system:

Functional requirements

Search menu items, cuisines, or restaurants
Add items to the cart
Notifications about the order status
Track the order
Cancel the order
Pay for the order
Create and update the account
Restaurant profile creation
Offboarding option (If the restaurant decides to discontinue service)
Nonfunctional requirements

Latency
Consistency
Availability
High throughput
System Design and workflow
The following is a level design of DoorDash, consisting of several services for different purposes. Let’s describe the workflow and the interaction of the different services involved in the design.

Customers’ requests are routed through the API gateway and directed to different services via the load balancer. The search service searches for menu items, cuisines, restaurants, etc. It is one of the customers’ busiest services when searching the website or application. The ordering service handles menu selection, managing the shopping cart, and placing food orders. Additionally, it facilitates payment processing through an external payment gateway and stores the outcomes in the relevant database. The order fulfillment service is used to manage the orders that the restaurants have accepted. It also keeps track of orders being prepared.

Customers and restaurant staff use the user management service to create and manage their profiles. The dispatch service displays the orders ready to be picked. It is also used to view delivery information and facilitate communication between customers and restaurant staff.


A high-level design of the DoorDash system

A high-level design of the DoorDash system
Knowledge test!

How would you handle a sudden surge in orders during peak hours, like on Super Bowl Sunday?

How would you leverage customer and delivery data to personalize recommendations, improve order accuracy, and optimize pricing?

How would you protect sensitive customer and payment information from breaches?

26. Design a distributed locking service like Google Chubby locking
Problem statement: Design a highly available, fault-tolerant distributed locking service like Google Chubby to coordinate access to shared resources in a large-scale distributed system.

Sample clarifying questions!

Should the system support both read and write locks?

What happens if a client holding a lock crashes or disconnects?

Is lock expiration or lease renewal required?

Requirements
Follow these requirements for the Google Chubby locking system:

Functional requirements

Coarse-grained locking service
Reliable low-volume storage
Nonfunctional requirements

Availability
Reliability
Easy-to-understand semantics
High throughput
System Design and workflow
The Chubby cell is composed of multiple servers (usually five), all replicas of each other. One of these servers is a leader with whom the clients must communicate. Each server has a namespace that is composed of directories and files that contain data that is relevant to different applications. In addition to this namespace, the server contains an ACL files directory to have access control lists of all the files and directories within the namespace. The Chubby library mediates communication between clients and servers in a Chubby cell. It takes a request from a client who wants to use the Chubby service and then finds the relevant cell, directs the request to that cell via remote procedure calls (RPCs), and then reports any changes made in the namespace, data, or metadata (also known as events) back to the client.


A high-level design of the Google Chubby locking system

A high-level design of the Google Chubby locking system
Knowledge test!

How does Chubby recover from server failures and network partitions while maintaining data consistency?

How does Chubby handle client failures and session timeouts?

Note: Look at the detailed design of Google Chubby locking to get answers to the above questions.

27. Design a coordination system like ZooKeeper
Problem statement: Design a highly available, fault-tolerant, and scalable coordination system like ZooKeeper to manage configuration, naming, synchronization, and group services in a distributed system.

Sample clarifying questions!

What coordination features are needed: leader election, locking, or configuration?

What consistency level is required during network partitions?

Should clients be notified of changes (watch mechanism)?

Requirements
Follow these requirements for the ZooKeeper system:

Functional requirements

Coordination and synchronization of processes
Leader election
Ephemeral node creation and deletion
Session management
Efficient reads and writes
Session management
Nonfunctional requirements

Good performance
Simple design
Availability
Reliability
System Design and workflow
The clients are the applications that use ZooKeeper as a coordination service for their application processes. ZooKeeper client library (API) provides functions such as create(), delete(), exists(), and many more to manage and use the coordination data. Through this API, the client request is forwarded to the ZooKeeper server. The ZooKeeper server represents a process that provides the ZooKeeper coordination service. It stores all the coordination data from different applications and their processes in memory. The namespace for applications/clients and their coordination data are organized in a hierarchy (in the form of a tree). The client application processes store their coordination data on znodes. These processes can perform all the operations provided in the ZooKeeper client API. Each znode can be accessed through its path in the standard UNIX notation (like having / for the root directory). There is a set of ZooKeeper servers called ZooKeeper Ensemble. All are replicas. One is elected as the leader, while others become the followers.


A high-level design of the ZooKeeper system

A high-level design of the ZooKeeper system
Knowledge test!

We have a collection of servers in the ZooKeeper ensemble. What should be the minimum number of servers, and why?

Note: If you need answers to such questions, look at the detailed design of ZooKeeper.

28. Design a scalable distributed storage system like Bigtable
Problem statement: Design a massively scalable distributed storage system like Bigtable capable of handling petabytes of structured and unstructured data with low latency reads and writes, supporting flexible schema, efficient query patterns, and high availability while ensuring data consistency and durability.

Sample clarifying questions!

What is the expected workload pattern: read-heavy, write-heavy, or balanced?

Should the system offer strong consistency on read-after-write?

Is the schema flexible or strictly enforced?

Requirements
Follow these requirements for the Bigtable system:

Functional requirements

Wide applicability
High performance
User-guided locality
Continuous updates
Atomic rows
Nonfunctional requirements

Durability
Availability
Scalability
High number of read/write operations (throughput)
System Design and workflow
The following illustration shows that the Bigtable implementation consists of three main parts: a library linked to each client, one Bigtable manager server, and several tablet servers. A library is a component that all clients share. This library enables clients to communicate with Bigtable. The manager server allocates tablets to table servers, identifies tablet server additions and expiration, regulates tablet-server traffic, and garbage collection of files in GFS (a distributed file system). It also supports schema changes like table and column family formation. All tablet servers are in charge of a certain group of tablets, generally around 10 to 1000 tablets. Each tablet server provides reads and writes of the data to the tablets to which it is allocated. Servers can be added or removed in a Bigtable cluster as needed. New tablets can be made and assigned, old ones can be merged, and they can be reassigned from one server to the other to accommodate changes in demand.


A high-level design of the Bigtable system

A high-level design of the Bigtable system
Knowledge test!

How does Bigtable efficiently support schema changes without impacting performance?

How does Bigtable ensure data distribution and replication across multiple servers?

Note: If you need answers to such questions, look at the detailed design of BigTable.

29. Design an online multiplayer game system
Problem statement: Design an online multiplayer game system that allows players to connect and play in real time. The system should handle player matchmaking, maintain low latency communication, ensure player synchronization, and consistently manage game state.

Sample clarifying questions!

What game type is being built: real-time, turn-based, or battle royale?

What is the maximum number of concurrent players per session?

Should cross-platform play (mobile, console, desktop) be supported?

Requirements
Follow these requirements for such a system:

Functional requirements

Gameplay (connect and play)
Chat service
Audio communication
Events notification
Payment for in-app purchases
Nonfunctional requirements

Scalability
Availability
Security
Latency
System Design and workflow
In an online multiplayer game system, players connect to the game server, which handles matchmaking by pairing players based on skill levels and preferences. Once matched, the server maintains low latency communication between players, ensuring smooth and real-time interactions using a pub/sub service. The game state, including player positions and actions, is synchronized across all players’ devices through a central game state manager. The session service manages sessions and synchronizes the players. The play service will handle all the game-related tasks like updating stats, checking players’ availability, etc. The payment service facilitates in-app purchases of assets.

For a better user experience, we can separate real-time operations, such as gameplay, from non-real-time operations, such as invites and in-app purchases.


A high-level design of a gaming service

A high-level design of a gaming service
Knowledge test!

How can you ensure system stability and prevent crashes when millions of users play simultaneously?

How would you implement lag compression and data buffering to handle network delays and ensure smooth gameplay?

What are the benefits of using a virtual private cloud (VPC)?

How can you maintain low latency for real-time communication, especially during peak usage?

How would you limit the number of requests to the server without compromising the real-time gaming experience?

Note: To learn more about gaming service design details, explore the gaming API design chapter.

30. Design a Zoom-like video conferencing system
Problem statement: Design a real-time video conferencing system that supports high-quality meetings with hundreds of participants. The platform should offer interactive features like breakout rooms and polls, work reliably across different network conditions, and scale globally with low latency.

Sample clarifying questions!

What is the maximum number of participants per session?

Should video quality adapt based on bandwidth conditions?

Is end-to-end encryption required for audio, video, and chat?

Requirements
Follow these requirements to design the system:

Functional requirements

Meeting management
Real-time data streaming
Advanced participant controls
Rich interactive features (Screen sharing, Interactive polls)
Cloud recording and transcription
Client-side features
Nonfunctional requirements

Low latency
High availability
Reliability
Scalability
Security
System Design and workflow
This high-level design represents a video conferencing service that incorporates several components to provide a seamless experience for users. The system starts with the client, communicating with the API gateway to initiate requests. The API gateway handles authentication and directs the request to the load balancer, efficiently distributing traffic to the appropriate services, such as the user service, scheduling service, meeting service, and messaging service. These services manage user data, scheduling of meetings, real-time communication during meetings, and messaging functionalities. Additionally, the CDN ensures that video and media content is delivered with low latency to users across different geographical regions.

The media router (SFU) plays a critical role in managing media streams in real-time. It handles video and audio streams from multiple participants and forwards them to other participants without modifying the content, ensuring efficient bandwidth usage. The system also integrates a cloud processing service to handle more complex tasks like video processing or analytics. Data is stored in a blob store and a database to keep records of meetings, messages, and user information.

The following illustration shows a high-level design of a video conference service:


A high-level design of a video conference service

A high-level design of a video conference service
Knowledge test!

How does end-to-end encryption affect server-side features like recording or transcription?

How would you implement adaptive bitrate streaming to ensure smooth performance on weak networks?

What parts of the system will most likely break if a popular meeting gets thousands of participants simultaneously? How can you design to prevent that?

Note: Explore the Zoom API design to learn more about designing a video conference service and determine the answers to the above questions.

The final step of your interview prep
Mastering these 30 questions is a fantastic first step toward comprehensive System Design interview preparation.

However, there are plenty more System Design concepts you’ll need to know for a real-world System Design interview. Educative has created an exhaustive course: Grokking Modern System Design Interview, which includes more detailed questions and answers and the opportunity to get hands-on practice.

This interactive course covers the building blocks of the modern System Design concept, coupled with more than a dozen real-world questions currently used in the industry. By the end of the course, you will understand what clarifying questions to ask and tradeoffs to make for each question. Ultimately, you will learn exactly what it takes to stand out to interviewers in the current hiring market.

That’s why if I had to pick just one System Design prep resource to give you, this would be it.

Quick tips to tackle System Design interview questions
We all dream of passing the System Design interview with flying colors!

So why not make this dream a reality with some quick tips:

Practice structured thinking: Always start with a clear outline of your approach. Break problems down systematically, such as: 

Requirements ➔ Components ➔ APIs ➔ Data models ➔ Bottlenecks ➔ Trade-offs

Clarify early, clarify often: Never rush into a design. Spend the first 5-10 minutes asking questions and defining system constraints and assumptions.

Prioritize communication: Think out loud. Walk your interviewer through your decisions, trade-offs, and reasoning, even if unsure.

Use diagrams: Visual aids like high-level architecture diagrams make your solution much easier to understand and show that you think like a true architect.

Review actual systems: Study the architectures of popular platforms like Instagram, Uber, Netflix, and Dropbox to understand real-world trade-offs.

Stay calm under pressure: Keep moving forward even if you get stuck. Composure, problem-solving attitude, and logical thought are often more important than reaching a “complete” design.

I wish you the best of luck with your interviews. I am confident that with a little hard work and strategic preparation, you will be successful.

Top 30 System Design Interview Questions in 2026
56 mins read
Jun 09, 2026
editor-page-cover
Video thumbnail
System Design interview questions
Over my 10+ years as a systems engineer and hiring manager at Microsoft and Facebook, I led hundreds of software engineer candidates through System Design interviews (SDI). I became deeply familiar with the kinds of software engineer system design interview questions that consistently distinguish top-tier engineers

Surprisingly, even the best developers often struggle with System Design problems. Why? I think it’s because System Design questions can be open-ended, requiring creativity and problem-solving skills not practiced in other coding interview challenges.

While SDI questions tend to evolve, many have remained popular over time. These questions are well-suited to evaluate candidates on two important levels:

Test the candidate’s understanding of System Design fundamentals.

Evaluate the candidate’s ability to apply those fundamentals in real-world applications.

Today, we’ll break down the top 30 System Design interview questions for 2026. These are essential questions asked at top companies like Google, Amazon, Meta, and more. Mastering these problems and their solutions will give you a huge leg up in your System Design interview prep.

Finally, I will leave you with a few battle-tested strategies that you can use to confidently take on any System Design question you encounter.

Cover
Grokking Modern System Design Interview
For a decade, when developers talked about how to prepare for System Design Interviews, the answer was always Grokking System Design. This is that course — updated for the current tech landscape. As AI handles more of the routine work, engineers at every level are expected to operate with the architectural fluency that used to belong to Staff engineers. That's why System Design Interviews still determine starting level and compensation, and the bar keeps rising.

I built this course from my experience building global-scale distributed systems at Microsoft and Meta — and from interviewing hundreds of candidates at both companies. The failure pattern I kept seeing wasn't a lack of technical knowledge. Even strong coders would hit a wall, because System Design Interviews don't test what you can build; they test whether you can reason through an ambiguous problem, communicate ideas clearly, and defend trade-offs in real time (all skills that matter ore than never now in the AI era). RESHADED is the framework I developed to fix that: a repeatable 45-minute roadmap through any open-ended System Design problem.

The course covers the distributed systems fundamentals that appear in every interview – databases, caches, load balancers, CDNs, messaging queues, and more – then applies them across 13+ real-world case studies: YouTube, WhatsApp, Uber, Twitter, Google Maps, and modern systems like ChatGPT and AI/ML infrastructure. Then put your knowledge to the test with AI Mock Interviews designed to simulate the real interview experience.

Hundreds of thousands of candidates have already used this course to land SWE, TPM, and EM roles at top companies. If you're serious about acing your next System Design Interview, this is the best place to start.

26hrs
Intermediate
4 Playgrounds
28 Quizzes

Start Learning
How to answer any System Design interview question
System Design interviews can feel intimidating because they're intentionally open-ended. Unlike coding interviews, there is rarely a single "correct" answer. Whether you're asked to design YouTube, Uber, Netflix, WhatsApp, ChatGPT, or a completely unfamiliar system, the interviewer is evaluating how you think through ambiguity, communicate trade-offs, and make engineering decisions.

This is why strong candidates don't memorize architectures. Instead, they follow a repeatable framework that helps them break large problems into smaller pieces and systematically build a solution.

One framework we recommend is RESHADED, a step-by-step approach that helps you structure your thinking and cover the areas interviewers care about most.

The RESHADED framework
Step

Goal

Requirements

Understand the problem

Estimation

Quantify scale

System interface

Define interactions

High-level design

Build architecture

API and data model

Define data flow

Deep dive

Solve hard problems

Evaluate trade-offs

Show engineering judgment

Discuss improvements

Demonstrate senior thinking

R → Requirements
Start by clarifying the problem before drawing any architecture diagrams.

Gather both functional and nonfunctional requirements and establish the scope of the system. Strong candidates ask questions early instead of making assumptions.

Useful questions include:

What features are in scope?

How many users should the system support?

What latency requirements exist?

Is availability more important than consistency?

Are we designing for a global audience?

The goal is to leave this phase with a clear list of requirements that will guide the rest of the design.

E → Estimation
Next, estimate the scale of the system.

Perform quick back-of-the-envelope calculations for:

Total users

Daily active users

Requests per second

Storage requirements

Bandwidth requirements

For example:

100 million registered users

10 million daily active users

1,000 requests per second on average

50 TB of stored data

These estimates help justify architecture decisions later. There's no need for perfect numbers—reasonable assumptions are enough.

S → System interface
Define how users and external systems interact with your service.

This usually means identifying major APIs and system boundaries.

Examples:

Ace Editor
At this stage, focus on high-level interactions rather than implementation details.

H → High-level design
Now design the overall architecture.

Identify major components such as:

Load balancers

Application servers

Databases

Caches

Message queues

CDNs

Object storage

A typical discussion might sound like:

User requests first reach a load balancer, which distributes traffic to application servers. Frequently accessed data is served from Redis, while persistent data is stored in a database. Background tasks are handled through a message queue.

This creates the foundation for deeper discussion later.

A → API and data model
Once the architecture is established, define the system's core entities and storage model.

Examples:

User

user_id, name, email

Post

post_id, author_id, content

Message

sender_id, receiver_id, timestamp

Video

video_id, owner_id, storage_url

Discuss:

Database schema

SQL vs NoSQL choices

Indexing strategies

Storage requirements

This demonstrates your ability to connect application behavior to data design.

D → Deep dive
This is the most important part of the interview.

Many candidates spend too much time drawing boxes and not enough time discussing difficult engineering problems.

Possible deep-dive topics include:

Scaling bottlenecks

Replication

Sharding

Caching strategies

Consistency models

Availability requirements

Rate limiting

Fault tolerance

For example, in a messaging system, you might discuss:

How messages are delivered reliably

How offline users receive messages

How conversations are partitioned across servers

This is where strong candidates differentiate themselves.

E → Evaluate trade-offs
Every architecture decision comes with trade-offs.

Interviewers want to see that you understand them.

Examples include:

SQL vs NoSQL

Consistency vs scalability

Push vs Pull

Real-time updates vs simplicity

Cache-heavy design

Performance vs complexity

Strong consistency

Correctness vs latency

Avoid presenting decisions as universally correct. Instead, explain why a particular choice makes sense for the requirements.

D → Discuss improvements
Finish by discussing how the system could evolve.

Topics may include:

Global scaling

Multi-region deployment

Observability and monitoring

Security enhancements

Disaster recovery

AI-powered features

Cost optimization

This demonstrates senior-level thinking and shows that you're considering long-term growth rather than only the initial implementation.

Mini example: Design a URL shortener
Let's apply RESHADED to a simple System Design question.

Requirements
Functional requirements:

Generate short URLs

Redirect users to original URLs

Nonfunctional requirements:

High availability

Low redirect latency

Estimation
Assume:

100 million URLs stored

10 million redirects per day

Thousands of requests per second

System interface
Ace Editor
High-level design
Ace Editor
API and data model
Ace Editor
Deep dive
Focus on:

Short code generation

Database indexing

Cache hit rates

Hot URL handling

Trade-offs
Random IDs vs sequential IDs

SQL vs NoSQL storage

Cache size vs infrastructure cost

Even in a short interview answer, this structure ensures you cover all critical areas.

Common System Design interview mistakes
Many candidates struggle not because they lack technical knowledge, but because they skip important steps.

Common mistakes include:

Jumping directly into databases

Not asking clarifying questions

Ignoring scale assumptions

Skipping estimations

Failing to discuss trade-offs

Spending too much time on diagrams

Not thinking out loud

Remember: interviewers evaluate your reasoning process, not just your final architecture.

Time allocation for a 45-minute interview
A good pacing strategy looks like this:

Requirements

5 minutes

Estimation

5 minutes

High-level design

10 minutes

Deep dive

15 minutes

Trade-offs and improvements

10 minutes

Notice that the largest portion of the interview is spent on the deep dive. This is where most engineering judgment is demonstrated.

The best System Design candidates don't memorize architectures—they follow a repeatable framework for reasoning through unfamiliar problems.

Whether you're designing YouTube, Uber, WhatsApp, Netflix, ChatGPT, or a system you've never seen before, the RESHADED framework helps you structure your thoughts, communicate clearly, and demonstrate the engineering judgment interviewers are looking for.

Top 30 System Design interview questions
To help meet you at your current preparation level, I have divided these 30 essential System Design problems into three difficulty levels:

Easy System Design interview questions
Design an API rate limiter for sites like Firebase or GitHub

Design a pub/sub system like Kafka

Design a URL-shortening service like TinyURL or bit.ly

Design a scalable content delivery network (CDN)

Design a web crawler

Design a distributed cache

Design an authentication and SSO platform like Auth0

Medium System Design interview questions
Design a video-first social platform like TikTok

Design an AI-powered customer support platform

Design a chat service like Facebook Messenger or WhatsApp

Design a mass social media service like Facebook or Instagram

Design a proximity service like Yelp or nearby places/friends

Design a search engine-related service like Typeahead

Design a video streaming service like YouTube or Netflix

Design a ride sharing service like Uber or Lyft

Design a recommendation service

Design a file sharing service like Google Drive

Design a social network and message board like Reddit or Quora

Hard System Design interview questions
Design a ChatGPT-style service

Design a code deployment system

Design a social media newsfeed service

Design a collaborative editing service like Google Docs

Design Google Maps

Design a payment gateway like Stripe

Design a food delivery service like Uber Eats or DoorDash

Design a distributed locking service like Google Chubby locking

Design a coordination system like ZooKeeper

Design a scalable distributed storage system like Bigtable

Design an online multiplayer game system

Design a Zoom-like video conference service

Before we start breaking down specific questions, I want to give you some high-level System Design tips that will enable you to confidently approach any problem.

Tips for any SDI question
Start each problem by stating what you know: List all required features of the system, common problems you expect to encounter with this sort of system, and the traffic you expect the system to handle. The listing process lets the interviewer see your planning skills and correct misunderstandings before you begin the solution.

Narrate any trade-offs: Every System Design choice matters. At each decision point, list at least one positive and one negative effect of that choice.

Ask your interviewer to clarify: Most System Design questions are purposefully vague. Ask clarifying questions to show the interviewer how you view the question and your knowledge of the system’s needs. Also, be sure to state your assumptions before diving into the components.

Know your architectures: Most modern services are built upon a flexible microservice architecture. Unlike the past’s monolithic architectures of tech companies, microservices allow smaller, agile teams to build independently from the larger system. Some older companies will have legacy systems, but microservices can function in parallel to legacy code and help refresh the company’s architecture.

Discuss emerging technologies: Conclude each question with an overview of how and where the system could benefit from generative AI (GenAI) and machine learning (ML). This will demonstrate that you’re prepared for not only current solutions but also future solutions.

Grokking the Generative AI System Design

Cover
Grokking the Generative AI System Design
GenAI System Design is emerging as its own interview category at top tech companies, distinct from traditional ML System Design. The questions are different, the architectures are different, and the scale considerations (GPU compute, parallelism, inference optimization) require their own mental models. 
Having spent years researching adaptive AI systems and neural networks, and now leading the creation of learning content at Educative, I designed this course to bridge that gap between understanding generative AI conceptually and being able to architect these gen AI systems end-to-end. 
You'll learn the SCALED framework, which is a 6-step methodology for breaking down any GenAI System Design problem, then apply it across five real-world systems spanning text, image, speech, and video generation. Each case study walks through training architecture, deployment design, and the specific tradeoffs involved in that modality. Before diving into the case studies, the course covers the foundational concepts you'll need: neural networks, transformers, tokenization, embeddings, parallelism strategies, inference optimization, RAG, and fine-tuning. You'll also learn how to do back-of-the-envelope calculations for LLM training and deployment. 
A bonus: if you have a GenAI or ML System Design interview coming up, this will give you both the framework and the depth to handle whatever systems are asked to design.

4hrs
Intermediate
8 Exercises
8 Quizzes

Get Started
Note: For information on how ML can boost your SDI performance, check out my blog How machine learning gives you an edge in System Design

System Design interview cheat sheet
As an added bonus, I highly encourage you to download this interview cheatsheet and internalize its contents. (Pro tip: You may even want to set it as the background for your desktop!)


System Design interview cheat sheet

System Design interview cheat sheet
Now, let’s examine the specifics of the top System Design interview questions, starting with the easy problems.

Easy System Design interview questions
I provide a problem statement, requirements, and workflow for each question with a high-level design.

1. Design an API rate limiter for sites like Firebase or GitHub
Problem statement: Design an API rate limiter that caps the number of API calls the service can receive in a given period to avoid an overload.

Sample clarifying questions!

Which entity is rate-limited: user, IP, token, or API key?

Are the rate-limiting rules configurable at runtime?

What is the expected scale in requests per second?

Requirements
Follow these requirements for a rate limiter system:

Functional requirements

Limit requests
Configurable
Error or notification if the limit is reached
Nonfunctional requirements

Availability
Low latency
Scalability
System Design and workflow
According to the following high-level rate limiter, the client’s requests are passed through an ID builder, which assigns unique IDs to the incoming requests. The ID could be a remote IP address, login ID, or other attributes. The decision maker fetches the throttling rules from the database and decides according to them. It either forwards the requests to application servers via the requests processor or discards them and provides the client an error message (429 Too many requests). If some requests are throttled due to a system overload, the system keeps those requests in a queue to be processed later.


A high-level design of a rate limiter

A high-level design of a rate limiter
Knowledge test!

How does your system measure requests per minute? If a user makes 10 requests at 00:01:20 and then another 10 at 00:02:10, they’ve made 20 in the same one-minute window despite the minute change.

In the event of a failure, a rate limiter would be unable to perform the task of throttling. Should the request be accepted or rejected in such a scenario?

What changes would you make to the design while considering the rate limiter design for a distributed system rather than a local one?

Note: Look at the detailed design of the rate limiter to find the answers to the questions above.

2. Design a pub/sub system like Kafka
Problem statement: Design a scalable and distributed pub/sub system like Kafka that can handle massive message throughput. It should also ensure reliable message delivery and support various messaging semantics (at most once, at least once, exactly once).

Sample clarifying questions!

What message delivery guarantee is required: at-most-once, at-least-once, or exactly-once?

Is message ordering important within topics or partitions?

How long should messages be retained in the system?

Requirements
Follow these requirements for the pub/sub design:

Functional requirements

Create a topic
Write messages
Subscription
Read messages
Specify retention time
Delete messages
Nonfunctional requirements

Availability
Scalability
Durability
Fault-tolerant
Concurrency management for simultaneous reads and writes
System Design and workflow
The brokers are responsible for storing the messages sent from the producers and allowing the consumers to read them. Similarly, the cluster manager is to keep an eye on the broker’s health and spin up another broker in case one goes down. The consumer’s details include subscription information, retention period, etc. The consumer manager manages the consumers, who manage consumers’ access to messages in the existing topics.


A high-level design of a pub/sub system

A high-level design of a pub/sub system
Knowledge test!

How can message delivery be ensured and semantics guaranteed at least once or at most once in the pub/sub design?

How can you guarantee message orders for specific consumers?

Note: To answer the above technical questions, you can examine the detailed design of pub/sub.

3. Design a URL-shortening service like TinyURL or bit.ly
Problem statement: Design a scalable and distributed system that shortens long URLs like TinyURL or bit.ly. The system takes a long URL and generates a new, unique short URL. It should also take a shortened URL and return the original full-length URL.

Sample clarifying questions!

Should shortened URLs be globally unique or user-specific?

Are custom aliases supported, and how are collisions handled?

Do URLs expire, or are they stored permanently?

Requirements
Follow these requirements for the URL-shortening system:

Functional requirements

URL generation
URL storage
Redirection to the original URL
Customization of URLs
Update and delete URLs
Nonfunctional requirements

Scalability
Availability
Unpredictability in URL generation
Readability
Low latency
System Design and workflow
A load balancer is the first intermediary between the clients and the server, ensuring even distribution of incoming requests to maintain availability and reliability. When a new URL-shortening request comes in, the load balancer forwards it to a server where the rate limiter checks if the client is within the allowed request rate.

The server leverages a sequencer to generate a unique numeric ID for the URL requests. This ID is passed to an encoder, which converts it into a more readable alphanumeric string. The original URL and its corresponding shortened version are stored in a database. To enhance performance, recently accessed URLs are kept in a cache, allowing quick retrieval without repeatedly querying the database.


A high-level design of a URL-shortening service

A high-level design of a URL-shortening service
Knowledge test!

What if two users input the same custom URL?

What if there are more users than expected?

How does the database regulate storage space?

Note: To explore in depth to get the answer to the above questions, check out the detailed chapters on the TinyURL System Design.

4. Design a scalable content delivery network (CDN)
Problem statement: Design a scalable content delivery network (CDN) system to efficiently distribute and cache content across globally distributed servers, minimizing latency and ensuring reliable end user content delivery.

Sample clarifying questions!

What types of content will the CDN serve: static, dynamic, or both?

What is the regional traffic distribution and expected scale?

Requirements
Follow these requirements for a CDN system:

Functional requirements

Retrieve content from the origin server
Respond to user requests
Auto content delivery from the origin server
Search
Update content from the origin or peer CDNs
Nonfunctional requirements

Scalability
Availability
Reliability
Security
Low latency
System Design and workflow
When a client requests content, a request routing system kicks in to find the address of the nearest or fastest server, ensuring minimal wait time. A load balancer then routes the request to the optimal server. If the requested content is cached on that server, it is immediately delivered to the client. If not, the server fetches the content from the origin server, caches it locally for more such requests, and then serves it to the user.

The CDN system ensures that frequently accessed content remains readily available while less popular content is periodically purged. The system also includes monitoring and analytics to track performance, optimize routing, and ensure high availability and reliability.


A high-level design of a CDN

A high-level design of a CDN
Knowledge test!

How would you determine which content to cache on edge servers?

How would you distribute traffic evenly across multiple edge servers?

How would you ensure the CDN infrastructure’s scalability, availability, and fault tolerance?

How would you optimize the delivery and reduce the latency while streaming?

Note: Check out the chapter on the design of a content delivery network to help you understand and get answers to the above questions.

5. Design a web crawler
Problem statement: Design a web crawler that systematically browses the internet to discover and index web pages. The crawler should efficiently navigate websites, retrieve content, and follow links to discover new pages.

Sample clarifying questions!

Should the crawler extract media content like images and videos or only HTML?

Should the crawler obey robots.txt and crawl-delay rules?

What is the depth and frequency of crawl required per domain?

Requirements
Follow these requirements for the web crawler system:

Functional requirements

Crawling
Storing crawled content
Scheduling for periodic crawling
Nonfunctional requirements

Scalability
Consistency
Reliability
Extensibility to network protocols
System Design and workflow
A web crawler begins by assigning a worker to a URL. Once the DNS is resolved, the worker sends the URL and IP address to an HTML fetcher to establish the connection. The URL and HTML content are extracted from the page and stored in the cache for processing. The duplicate eliminator service then tests this content to ensure no duplicate content is transferred to blob storage. Once this cycle is complete for a single URL, it moves on to the next address in the queue.


A high-level design of a web crawler

A high-level design of a web crawler
Knowledge test!

What functionalities must be added to extract all formats (images and video)?

Real web crawlers have multiple workers handling separate URLs simultaneously. How does this change the queuing process?

How can you account for crawler traps?

Note: To get the answers to the above questions, check out the detailed chapters on the web crawler System Design.

6. Design a distributed cache
Problem statement: Design a distributed caching system that provides fast, scalable, and reliable data retrieval across multiple servers. The system should efficiently manage cache consistency, handle high volumes of read and write requests, ensure data availability, and provide mechanisms for cache eviction and expiration.

Sample clarifying questions!

What should be the typical read-to-write ratio in expected workloads?

Should the cache support write-through or write-back strategies?

Will the cache operate across regions or within a single data center?

Requirements
Follow these requirements for the distributed cache system:

Functional requirements

Insert or write data
Retrieve data
Data partitioning
Cache eviction
Nonfunctional requirements

Scalability
Consistency
Low latency
High availability
System Design and workflow
A distributed caching system begins by partitioning the data across multiple cache nodes to balance the load and improve access speed. When a client requests data, an application server determines the appropriate cache node based on a consistent hashing algorithm, ensuring an even distribution of requests and quick lookups.

If the data is found in the cache (a cache hit), it is returned to the client immediately, significantly reducing latency. If the data is not found (a cache miss), the system retrieves it from the primary data store, caches it, and then serves it to the client. Cache eviction policies, such as least recently used (LRU) or time-to-live (TTL), manage the removal of stale data to free up space.


A high-level design of a distributed cache

A high-level design of a distributed cache
Knowledge test!

How do you ensure data consistency across multiple cache nodes, especially during updates and deletions?

What strategies can be implemented to handle cache misses efficiently without overloading the primary data store?

What methods can maintain low latency and high throughput under heavy load conditions?

How do you secure the cache data against unauthorized access and ensure privacy?

Note: To answer such conceptual questions, check out the detailed design of the distributed cache.

7. Design an authentication and SSO platform like Auth0
Problem statement: Design a secure, scalable, multi-tenant authentication platform that provides identity and access management as a service, similar to Auth0. The system must support user registration, multiple authentication methods, and seamless single sign-on (SSO) across various client applications.

Sample clarifying questions!

Is single sign-on required across domains or only within one?

Should the platform support both B2C and B2B (multi-tenant) models?

Requirements
Follow these requirements for the authentication and SSO platform:

Functional requirements

User sign-up and login
Third-party provider login
Token-based authentication
Single sign-on (SSO)
Multi-factor authentication (MFA)
Password reset and recovery
Nonfunctional requirements

Scalability
Security
High availability
Low latency
Fault tolerance
System Design and workflow
When users want to log in, their request is routed through a load balancer and then sent to an authentication server. The system checks whether the user is signing in with a regular email and password or using a third-party login provider. If it’s a third-party login, the system redirects the user to the external provider for verification. Once the login is successful, the authentication service creates a secure token and returns it to the client.

This token acts like a digital badge and is used to identify the user on future requests. It can also be used across multiple applications owned by the same company, enabling single sign-on (SSO). Each token has a built-in expiration time, ensuring that user sessions do not remain active indefinitely.

The authentication system includes important safeguards, such as limiting failed login attempts, detecting suspicious activity, and securely encrypting all stored passwords. It also supports multi-tenancy, meaning user data is kept separate for each business using the platform, so each company only sees its users.


A high-level design of an authentication and SSO platform

A high-level design of an authentication and SSO platform
Knowledge test!

How do we safely store user passwords in the system?

How does the system recognize users across multiple apps (SSO)?

What happens if a third-party login service like Google is temporarily down?

How do we prevent too many failed login attempts from the same user or IP address?

How would the system handle logout and session expiration?

Note: The lesson on authentication and authorization explores the core concepts behind this system, including tokens, login protocols, and user permissions.

Medium System Design interview questions
I provide each medium system design question’s problem statement, requirements, workflow, and system architecture.

8. Design a video-first social platform like TikTok
Problem statement: Design a video-first social platform where users can create, upload, watch, and interact with short-form videos (reels). The system should support millions of users, deliver low-latency content, and personalize each user’s video feed based on engagement history.

Sample clarifying questions!

What is the maximum video size and length supported?

Should the video feed be globally personalized or regionally segmented?

Requirements
Follow these requirements for a video-first social platform:

Functional requirements

Upload or create short videos

Stream short videos

Like, comment, and share videos

Personalized video feed

Follow and unfollow users

View creator profiles

Search by tags, music, or username

Nonfunctional requirements

High availability

Low latency streaming

Scalability (both storage and delivery)

Video processing and compression

System Design and workflow
When users open the app, their request is routed to the feed generation service through a load balancer. This service works with a recommendation service to generate a personalized list of videos based on the user’s watch history, likes, and other interactions.

Once the feed is generated, the app streams video content directly from a content delivery network (CDN) to ensure fast loading times, especially for users in different parts of the world. The videos are stored in a media storage system and processed by a video processing service, which handles compression, format conversion, thumbnail generation, and basic moderation.

When a user uploads a video, it’s routed to the video processing service. After processing, the video is saved to media storage, which can become part of the personalized list for users via the recommendation service.

The following high-level design represents a simple workflow of a video-first social platform like TikTok:


A high-level design of a video-first social platform

A high-level design of a video-first social platform
Knowledge test!

How would you handle millions of concurrent users uploading and watching videos?

What strategies would you use to keep the feed relevant and personalized in real time?

How would you moderate inappropriate video content before it reaches viewers?

Note: The chapter on the content delivery network explores how content is delivered quickly and efficiently to users worldwide.

9. Design an AI-powered customer support platform
Problem statement: Design a scalable customer support platform for a large e-commerce business. The system should use a collection of specialized AI agents to automatically understand, route, and resolve customer queries in real time. If the issue isn’t resolved automatically, the system should escalate it to a human agent with full context preserved.

Sample clarifying questions!

Which channels should be supported (chat, voice, email)?

Should the system support multilingual AI interactions?

Should users be authenticated before submitting a query?

Requirements
Follow these requirements for the AI-powered customer support platform:

Functional requirements

Query intake
Automated routing
AI-based resolution
Human escalation
Knowledge base integration
Nonfunctional requirements

Scalability
Accuracy
High availability
Low latency
System Design and workflow
When a customer submits a query, it is first received by a query router. This component classifies the query type, such as billing, FAQ, or technical issue, based on message content and customer context. The query is then forwarded to the appropriate specialized AI agent.

The FAQ agent retrieves standard responses from the knowledge base to answer common customer questions. For issues related to payments or orders, the billing agent securely accesses account details to provide accurate, account-specific resolutions. Meanwhile, the technical agent helps customers troubleshoot app or product-related problems by walking them through guided solutions.

If the assigned AI agent resolves the query, a response is sent back to the user. If not, the human escalation manager transfers the case to a human support agent with the full interaction history attached. Similarly, a monitoring and logging service records all activity to track performance, generate insights, and help improve future responses, as shown in the following illustration:


A high-level design of an AI-powered customer support platform

A high-level design of an AI-powered customer support platform
Knowledge test!

Why might using multiple specialized AI agents be better than one large general-purpose model?

How should the system decide when to escalate a query to a human agent?

How can the query router be made fault-tolerant in case of misclassification?

What steps are needed to add a new agent, and how would you ensure it doesn’t interfere with others?

10. Design a chat service like Facebook Messenger or WhatsApp
Problem statement: Design a scalable, reliable, and secure real-time chat service like Facebook Messenger or WhatsApp to support instant messaging, group chats, notifications, and multimedia sharing.

Sample clarifying questions!

Should the system support both one-to-one and group chats?

Are messages required to be end-to-end encrypted?

Should messages be stored indefinitely or have a retention policy?

Requirements
Follow these requirements for the WhatsApp System Design:

Functional requirements

Real-time communication (individual/group)
Message delivery acknowledgment
Sharing of media content
Chat storage
Notifications
Nonfunctional requirements

Availability
Low latency
Scalability
Consistency
Security
System Design and workflow
In a real-time communication system, senders and receivers are connected to chat servers. Chat servers deliver messages from sender to receiver via a messaging queue. Various protocols, such as WebSocket, XMPP, MQTT, and real-time transport protocol, can be utilized for real-time communication. For this purpose, a manager establishes real-time connections between clients and chat servers; for instance, assume the WebSocket manager establishes WebSocket connections between users and different chat servers. Similarly, the messages can be persistently stored in the database.


A high-level design of a real-time chat system

A high-level design of a real-time chat system
Knowledge test!

What happens if a message is sent when the user isn’t connected to the internet? Is it sent when the connection is restored?

How will you encrypt and decrypt the message without increasing latency?

How do users receive notifications?

Are messages pulled from the device (the server periodically prompts the devices if they’re waiting to send a message), or are pushed to the server (the device prompts the server that it has a message to send)?

Note: Look at the detailed design of the real-time chat service to get answers to such questions.

11. Design a mass social media service like Facebook or Instagram
Problem statement: Design a social media service used by several million users like Instagram. Users should be able to view a newsfeed with posts by following users and suggesting new content that the user may like.

Sample clarifying questions!

Should feed generation be on write, on read, or hybrid?

Should the system support images, video, or only text content?

How personalized should the user feed be?

Requirements
Follow these requirements for the Instagram system:

Functional requirements

Create a post
Delete a post
Edit a post
Share a post
Follow and unfollow users
Search for content
View the system’s generated feed
Like and dislike posts
Nonfunctional requirements

Scalability
Availability
Low latency
Reliability
Security
Based on the above requirements, let’s create a high-level design of a feed-based social system like Instagram.

System Design and workflow
The high-level design of a feed-based social network includes posts, timeline generation, feed publishing service, and feed ranking and recommendation engine. The post-service handles the clients’ posts, and the post is published on the client’s wall (page). Similarly, the timeline generation service generates feeds for friends and followers by the timeline generation service. The timeline generation service utilizes the feed ranking and recommendation engine, which ranks and recommends the top N posts to followers based on their interests, searches, and watch history. The generated feed is stored in the database, and the feed publishing service is responsible for publishing and showing the generated feeds to followers. As the feed could contain videos, the CDN is responsible for delivering the videos to followers with low latency.


A high-level design of a mass social media service

A high-level design of a mass social media service
Knowledge test!

Influencers or celebrities will have millions of followers; how are they handled vs. standard users?

How does the system weigh posts by age? Old posts are less likely to be viewed than new posts.

What’s the ratio of read and write focused nodes? Are there likely to be more read requests (users viewing posts) or write requests (users creating posts)?

How can you increase availability? How does the system update? What happens if a node fails?

How do you efficiently store posts and images?

Note: Look at the detailed design of Instagram for a better understanding.

12. Design a proximity service like Yelp or nearby places/friends
Problem statement: Design a proximity server that stores and reports the distance to places like restaurants. Users can search nearby places by distance or popularity. The database must store data for hundreds of millions of businesses across the globe.

Sample clarifying questions!

How should results be sorted: by distance, rating, or popularity?

Is real-time tracking needed for friends or businesses?

Requirements
Follow these requirements for a System Design like Yelp:

Functional requirements

User accounts
Search
Feedback
Nonfunctional requirements

Scalability
High availability
Consistency
Performance
System Design and workflow
The system handles search requests by using load balancers to distribute read requests to the read service, which then queries the quadtree service to identify relevant places within a specified radius. The quadtree service also refines the result before being sent to the clients. For adding places or feedback, write requests are similarly routed through load balancers to the writing service, which updates a relational database and stores images in blob storage. The system also involves segmenting the world map into smaller parts, storing places in a key-value store, and periodically updating these segments to include new places, although this update happens monthly due to the low probability of new additions.


A high-level design of a proximity service like Yelp

A high-level design of a proximity service like Yelp
Knowledge test!

How do you store lots of data and retrieve search results quickly?

How should the system handle different population densities? Rigid latitude/longitude grids will cause varied responsiveness based on density.

Can we optimize commonly searched locations?

Note:  Look at the detailed design of Yelp to get answers to the above questions.

13. Design a search engine-related service like Typeahead
Problem statement: Design a typeahead suggestion system that provides real-time, relevant autocomplete and autocorrect suggestions as users type, ensuring low latency and scalability to efficiently handle a large volume of queries.

Sample clarifying questions!

What is the maximum allowed latency for suggestions?

Should the system adapt to user search history and preferences?

How often should the autocomplete dataset be refreshed?

Requirements
Follow these requirements for the system:

Functional requirements

Autocomplete
Autocorrect
Nonfunctional requirements

Scalability
Fault tolerance
Performance
System Design and workflow
When a user starts typing a query, each character is sent to an application server. A suggestion service gathers the top N suggestions from a distributed cache, or Redis, and returns the list to the user. An alternate service, the data collector and aggregator, takes the query, analytically ranks it, and stores it in a NoSQL database. The trie builder is a service that takes the aggregated data from the NoSQL database, builds tries, and stores them in the trie database.


A high-level design of Typeahead

A high-level design of Typeahead
Knowledge test!

How strongly do you weigh spelling mistake corrections?

How do you update selections without causing latency?

How do you determine the most likely completed query? Does it adapt to the user’s searches?

What happens if the user types very quickly? Do suggestions only appear after they’re done?

Note: Look at the detailed design of the Typeahead system for a better understanding of the system.

14. Design a video streaming service like YouTube or Netflix
Problem statement: Design a video streaming service like YouTube or Netflix that allows users to upload and stream videos. The service should efficiently store many videos and their metadata and return accurate and quick results for user search queries.

Sample clarifying questions!

What is the expected volume of uploads and concurrent streams?

Are live streaming features needed, or only on-demand?

Requirements
Follow these requirements for a streaming service System Design:

Functional requirements

Search videos
Upload videos
Stream videos
Rate videos
Nonfunctional requirements

Availability
Scalability
Low latency (to stream a video)
Support multiple formats
System Design and workflow
A load balancer first handles video upload requests by sending them to the application servers. The applications server interacts with the video service, which triggers transcoders to convert the video to different formats. These typically range from 140p to 1440p but can reach 4K resolutions. The formatted video is then saved to the blob store, and its metadata is stored on the metadata database. The video service sends the transformed video to CDNs for quick content delivery to end users. Popular and recent uploads are held in a CDN. A content delivery network, or CDN, reduces latency when delivering video to users. The CDN stores and delivers requested data to users in conjunction with colocation sites.


A high-level design of a video streaming system

A high-level design of a video streaming system
Knowledge test!

How will your service ensure smooth video streaming on various internet qualities?

How are the videos stored?

How will the system provide a personalized experience to each user with recommendations?

How does the system react to a sudden drop in the network, shifting to low-quality, buffering content, etc.?

Note: Check out the detailed chapter on YouTube System Design that answers the above concerns during the design.

15. Design a ride sharing service like Uber or Lyft
Problem statement: Design a system for a ride sharing service similar to Uber, where users can request rides and drivers can accept these requests. The system should efficiently match drivers to riders based on location and availability, handle real-time updates on ride statuses, manage payments securely, and ensure a smooth user experience from booking to completion of the ride.

Sample clarifying questions!

Should the system support different ride types (economy, premium, carpool)?

How frequently are driver and rider locations updated?

Are wallet systems, promotions, or refunds part of the payment system?

Requirements
Follow these requirements for the System Design:

Functional requirements

Location tracking
Request a ride
Show nearby drivers
Calculate and notify ETA
Trip process (confirmation and updates)
Payment
Nonfunctional requirements

Scalability
Availability
Reliability
Low latency
Consistency
Security
System Design and workflow
A user’s request is sent to the application server via a load balancer and API gateway. The system accepts the rider’s request, and the trip service or manager provides an estimated time of arrival (ETA) based on different vehicle types. The drivers and location manager use a matching algorithm to find the nearest available drivers and send the request to those drivers by notifying them via a notification service. When a driver matches with a rider, the application should return the trip and rider information. The driver’s location is regularly recorded and communicated to relevant users through a pub/sub service.

Once the ride is complete, the trip manager ensures payment is securely processed through a payment gateway. We leverage a database that stores user and driver profiles, ride history, and payment information. We also use caching mechanisms to speed up access to frequently requested data, and constant monitoring ensures the service runs smoothly.


A high-level design of a ride sharing service

A high-level design of a ride sharing service
Knowledge test!

How can you keep latency low during busy periods?

How is the driver paired with the user? Iterating over all drivers to find Euclidean distance would be inefficient.

What happens if the driver or user loses connection?

How would you update the ETA during a ride in peak hours?

Note: Check out our guide to designing Uber’s backend for more information on the interview process.

16. Design a recommendation service
Problem statement: Design a recommendation engine that suggests personalized content or products to users based on their preferences and behavior. The system should efficiently analyze user data, such as past interactions and ratings, to provide accurate and relevant recommendations.

Sample clarifying questions!

What types of content are being recommended (products, videos, etc.)?

Should recommendations be personalized or globally ranked?

Should updates happen in real time or batch processing?

Requirements
Follow these requirements for a recommendation service:

Functional requirements

Search and browse
Personalized recommendations
Real-time update of recommendations
Offline processing
Nonfunctional requirements

Scalability
Low latency
Privacy
Security
System Design and workflow
The recommendation engine’s System Design comprises data collection, processing, and recommendation. When users interact with the application, the data collector service collects data from application servers, such as search, viewing history, ratings, watch times, etc. This data is logged into Kafka for immediate processing.

We use real-time processors to process data and recommend content accordingly. We also use batch processors for periodic offline processing to perform detailed analyses and improve accuracy. Once the data is processed, the ML/AI engine uses different algorithms, such as collaborative filtering, content-based filtering, hybrid approaches, and advanced techniques to recommend personalized suggestions.

Integrating AI to enhance the user experience is crucial to modern applications. Learn how to build generative AI applications in our course: Grokking the Generative AI System Design.


A high-level design of a recommendation system

A high-level design of a recommendation system
Knowledge test!

How will you handle the cold start problem for new users and content?

How would you update recommendations in real time?

How would you ensure the recommendation system scales to ever-increasing users?

What strategies would you employ to adjust recommendations dynamically based on real-time user behavior or preference changes?

How can you optimize recommendation accuracy without compromising on scalability and performance?

17. Design a file sharing service like Google Drive
Problem statement: Design a scalable, synchronous, cross-platform storage system like Dropbox. Users can store files and photos and access them from other devices.

Sample clarifying questions!

What is the maximum file size supported for upload/download?

Should real-time collaboration be supported or only file syncing?

Are user storage quotas or expiration policies needed?

Requirements
Follow these requirements for the system:

Functional requirements

Upload and download files
Share files
Synchronize across devices
Nonfunctional requirements

Scalability and consistency
Low latency
System Design and workflow
In a high-level design of a file sharing service like Google Drive, the user’s request to upload or download a file passes through a load balancer to the application servers. The application server sends the upload request to a chunk service for splitting large files into smaller, more easily manageable chunks. These files are then sent to a processing queue that sends and receives requests to store metadata and ensure that files are synchronized between users and accounts. Files are stored in a cloud-based block storage platform, like Amazon S3 (or in-premises blob storage). Users who want to upload or download files contact this storage service through a web server.


A high-level design of a file sharing service

A high-level design of a file sharing service
Knowledge test!

Where are the files stored?

How do you handle updates? Do you re-upload the entire file again?

Do small updates require a full file update?

How does the system handle two users updating a document simultaneously?

Note: To further your learning, explore the detailed design of distributed file systems of tech giants like Google and Facebook (Meta).

18. Design a social network service like Reddit or Quora
Problem statement: These social network sites operate on a forum-based system that allows users to post questions and links. For simplicity’s sake, focus more on designing Quora. You’ll unlikely need to walk through the design of something like Reddit’s subreddit or karma system in an interview.

Sample clarifying questions!

What types of content are supported: text, images, videos, links?

Should voting affect visibility globally or per user?

Are real-time notifications required for interactions?

Requirements
Follow these requirements for a System Design like Quora:

Functional requirements

Post questions and answers
Vote and comment
Search
Answer ranking
Recommendation system
Nonfunctional requirements

Scalability and consistency
Availability
Performance
System Design and workflow
In Quora’s high-level design, users interact through a web server, which communicates with an application server to handle actions such as posting questions, answers, and comments. Content like images and videos is stored in blob storage, and question-and-answer data, along with user profiles and interactions, are stored in a MySQL database.

A machine learning engine analyzes user interactions and content to rank answers based on relevance and quality. This engine continuously learns from user feedback to improve its ranking algorithms. For personalized user experiences, a recommendation system utilizes machine learning models to tailor content based on individual interests and behaviors.


A high-level design of Quora

A high-level design of Quora
Knowledge test!

How can you ensure the system’s scalability to handle millions of simultaneous users posting questions and answers?

What strategies can efficiently store and retrieve large multimedia content in blob storage?

How would you design the database schema to manage the relationships between users, questions, answers, and comments in a scalable way?

What techniques can be used to rank answers effectively, ensuring that high-quality content is prioritized for users?

How can you optimize the performance of the machine learning engine to rank answers quickly and accurately?

Note: Check out the detailed chapter on Quora System Design to help you understand the system.

Hard System Design interview questions
Hard System Design interview questions refer to complex, open-ended problems that require deep technical knowledge, critical thinking, and the ability to design scalable, efficient systems under constraints. Let’s start with the System Design of a ChatGPT-style service.

19. Design a ChatGPT-style service
Problem statement: Design a scalable and interactive conversational AI platform, similar to ChatGPT, that allows users to submit prompts and receive real-time, coherent responses from a large language model (LLM). The system should support millions of users, maintain conversation history, and deliver a fast and responsive experience.

Sample clarifying questions!

Should conversation history persist across sessions?

How important is streaming speed vs. final accuracy?

Is personalization (tone, memory) required in responses?

Requirements
Follow these requirements for the ChatGPT-style service:

Functional requirements

Prompt intake

Context management

LLM querying

Response streaming

Session storage

User authentication

Nonfunctional requirements

Low latency

High availability

Scalability

Security and privacy

Responsible AI usage

System Design and workflow
When a user submits a prompt, the request is initially routed to the API gateway, which verifies authentication and applies rate limiting. The authorized request is then forwarded to the conversation manager. The conversation manager retrieves recent conversations from the user’s chat history, if available, and combines them with the new prompt to create the full input for the LLM. This input is sent to the LLM inference service, which may use distributed replicas or sharded models to manage high traffic.

The LLM inference service generates a response. To improve the user experience, the response is streamed back to the client as it is being generated. This makes the interaction feel fast and natural, especially for longer responses. Once the full response is ready, it is saved to the session store alongside the user’s prompt. All interactions are logged for monitoring and future improvements.

To handle peak traffic smoothly, a queue can be introduced before the inference step to buffer requests. Optionally, depending on the use case, the system may include user profile data for personalization, such as adapting tone, language, or preferred length of answers.

The following illustrations show a high-level design of a ChatGPT-style service:


A high-level design of a ChatGPT-style service

A high-level design of a ChatGPT-style service
Knowledge test!

Why is response streaming important in a conversational AI platform, and how does it affect perceived latency?

What are the trade-offs between stateless vs. stateful architecture for managing conversation history?

What mechanisms would you implement to ensure the system filters harmful or inappropriate content in real time?

To answer more such interesting and thought-provoking questions, you can check out the following course:

Cover
Grokking the Generative AI System Design
GenAI System Design is emerging as its own interview category at top tech companies, distinct from traditional ML System Design. The questions are different, the architectures are different, and the scale considerations (GPU compute, parallelism, inference optimization) require their own mental models. 
Having spent years researching adaptive AI systems and neural networks, and now leading the creation of learning content at Educative, I designed this course to bridge that gap between understanding generative AI conceptually and being able to architect these gen AI systems end-to-end. 
You'll learn the SCALED framework, which is a 6-step methodology for breaking down any GenAI System Design problem, then apply it across five real-world systems spanning text, image, speech, and video generation. Each case study walks through training architecture, deployment design, and the specific tradeoffs involved in that modality. Before diving into the case studies, the course covers the foundational concepts you'll need: neural networks, transformers, tokenization, embeddings, parallelism strategies, inference optimization, RAG, and fine-tuning. You'll also learn how to do back-of-the-envelope calculations for LLM training and deployment. 
A bonus: if you have a GenAI or ML System Design interview coming up, this will give you both the framework and the depth to handle whatever systems are asked to design.

4hrs
Intermediate
8 Exercises
8 Quizzes

Preview
20. Design a code deployment system
Problem statement: Design a reliable and scalable code deployment system for a large-scale distributed application. The system should automate building, testing, and rolling out code changes across environments with minimal disruption and the ability to monitor and roll back changes when necessary.

Sample clarifying questions!

What rollback strategy is required: full, partial, or per environment?

Is deployment approval manual, automated, or both?

Requirements
Follow these requirements for a code deployment system:

Functional requirements

Version control integration
Automated code building
Multi-environment deployment
Environment configuration
Automated rollbacks
Deployment monitoring
Support for deployment strategies
Nonfunctional requirements

Availability
Fault tolerance
Performance
Scalability
Security
System Design and workflow
The high-level design of the code deployment system includes all the major components needed to meet the outlined requirements. The process begins when developers submit code to a version control system (VCS). Any new code changes trigger a continuous integration (CI) service, which automatically integrates updates, runs preliminary tests, and prepares the code for deployment. Once validated, the code is published to a queue, which decouples build triggers from execution.

A dedicated build service listens to this queue and retrieves jobs to compile the code. It then generates binary artifacts and stores them in a versioned blob storage system. These artifacts represent the system’s deployable output. When it’s time to deploy, the deployment service pulls the necessary artifacts from blob storage and installs them on machines across different regions. This ensures consistent deployments in multiple environments, such as staging and production.

The architecture supports gradual rollouts, rollback mechanisms, and monitoring at each step, helping to reduce risks and improve reliability in production.

A high-level design of a code deployment system is depicted in the following illustration:


A high-level design of a code-deployment system

A high-level design of a code-deployment system
Knowledge test!

How would you ensure zero-downtime deployments in this system?

What are the key considerations when designing for rollback capability?

If deployments fail in only one region, how would you isolate and debug the issue without affecting global deployments?

As your engineering team grows and deploys more frequently, what changes would you make to maintain fast and stable builds?

You can check out the following course for more details on System Design:

Cover
Grokking Modern System Design Interview
For a decade, when developers talked about how to prepare for System Design Interviews, the answer was always Grokking System Design. This is that course — updated for the current tech landscape. As AI handles more of the routine work, engineers at every level are expected to operate with the architectural fluency that used to belong to Staff engineers. That's why System Design Interviews still determine starting level and compensation, and the bar keeps rising.

I built this course from my experience building global-scale distributed systems at Microsoft and Meta — and from interviewing hundreds of candidates at both companies. The failure pattern I kept seeing wasn't a lack of technical knowledge. Even strong coders would hit a wall, because System Design Interviews don't test what you can build; they test whether you can reason through an ambiguous problem, communicate ideas clearly, and defend trade-offs in real time (all skills that matter ore than never now in the AI era). RESHADED is the framework I developed to fix that: a repeatable 45-minute roadmap through any open-ended System Design problem.

The course covers the distributed systems fundamentals that appear in every interview – databases, caches, load balancers, CDNs, messaging queues, and more – then applies them across 13+ real-world case studies: YouTube, WhatsApp, Uber, Twitter, Google Maps, and modern systems like ChatGPT and AI/ML infrastructure. Then put your knowledge to the test with AI Mock Interviews designed to simulate the real interview experience.

Hundreds of thousands of candidates have already used this course to land SWE, TPM, and EM roles at top companies. If you're serious about acing your next System Design Interview, this is the best place to start.

26hrs
Intermediate
4 Playgrounds
28 Quizzes

Preview
21. Design a social media newsfeed service
Problem statement: Design a scalable and efficient social media newsfeed system that delivers personalized, real-time content updates to users, ensuring low latency, high availability, and scalability.

Sample clarifying questions!

Should the feed be push-based, pull-based, or hybrid?

What level of personalization is required?

Does the feed support multimedia content like images and videos?

Requirements
Follow these requirements for the design:

Functional requirements

Newsfeed generation
Newsfeed contents
Newsfeed display
Nonfunctional requirements

Scalability
Fault tolerance
Availability
Low latency
System Design and workflow
In the following high-level design of a newsfeed system, clients post or request their newsfeed through the app, which the load balancer redirects to a web server for authentication and routing. Whenever a post is created via the post service and available from a user’s friends (or followers), the notification service informs the newsfeed generation service, which generates newsfeeds from the posts of the user’s friends (followers) and keeps them in the newsfeed cache. Similarly, the generated feeds are published by the newsfeed publishing service to the user’s timeline from the news feed cache. It also appends multimedia content from the blob storage with a news feed if required.


A high-level design of the newsfeed service

A high-level design of the newsfeed service
Knowledge test!

Creating and storing newsfeeds for each user in the cache requires enormous memory. Is there any way to reduce this memory consumption?

What mechanisms would you implement to prioritize and filter content in the newsfeed to prevent information overload for users?

How can the system ensure consistency and order of posts in the newsfeed, especially in a distributed environment with multiple data centers?

Note: If you need answers to such questions, look at the detailed design of a newsfeed service.

22. Design a collaborative editing service like Google Docs 
Problem statement: Design a collaborative editing service that lets users remotely and simultaneously make changes to text documents. The changes should be displayed in real time. Like other cloud-based services, documents should be consistently available to any logged-in user on any machine. Your solution must be scalable to support thousands of concurrent users.

Sample clarifying questions!

What collaboration model is used: character-level or paragraph-level?

Should the system support offline editing and later sync?

How will conflicts between concurrent edits be resolved?

Requirements
Follow these requirements for the Google Docs system:

Functional requirements

Collaboration
Edit overlap
Autocomplete and grammatical suggestions
History and view count
Manage documents
Nonfunctional requirements

Consistency
Availability
Low latency
System Design and workflow
Clients’ requests are forwarded to the operations queue, where conflicts are resolved between different collaborators, and the data is stored in the time series database and blob storage (responsible for storing media files). Autocomplete suggestions are made via the typeahead service. This service resides on the Redis cache to enable low latency suggestions and enhance the speed of the regular updates process. The application servers perform several important tasks, including importing and exporting documents. Application servers also convert documents from one format to another. For example, a .doc or .docx document can be converted into .pdf or vice versa.


A high-level design of the Google Docs service

A high-level design of the Google Docs service
Knowledge test!

How do you minimize latency when multiple users are distant from the server?

What techniques for conflict resolution are best for ensuring consistency?

Note: If you need answers to such questions, look at the detailed design of Google Docs.

23. Design Google Maps
Problem statement: Design a service that can map the route between two locations. The system should map several optimal paths to a destination based on the mode of travel. Each route should display the total mileage and an estimated time of arrival.

Sample clarifying questions!

What travel modes should be supported: driving, cycling, walking, public transport?

How frequently should traffic data be updated?

Is offline route planning and navigation required?

Requirements
Follow these requirements for the Google Maps system:

Functional requirements

Real-time navigation
Location/Area search
Route search/finder
Route planning
Real-time notification
Nonfunctional requirements

Scalability
Reliability
Low latency
Accuracy
System Design and workflow
In the Google Maps system, clients request location-based services, such as finding a route or searching for nearby points of interest. The load balancer directs requests to various services based on the nature of the query.
For routing requests, the route finder service calculates optimal paths between two or more points using real-time and historical data. It relies on the graph processing service to perform complex calculations on the road network graph stored in the graph database. The location finder service provides the user’s current location or identifies the location of a specified point of interest. The area search system lets users find nearby places, such as restaurants or gas stations, by querying the graph database and third-party road data sources.


A high-level design of the Google Maps system

A high-level design of the Google Maps system
Knowledge test!

How do you collect the world map data? What third-party source will you use?

How do you segment the map to avoid long loading times?

How do you ensure the accuracy of ETA calculations for high-traffic times of day?

Note: Look at the detailed design of Google Maps to get answers to the questions above.

24. Design a payment gateway like Stripe
Problem statement: Design a payment gateway like Stripe capable of securely performing online or card transactions and handling millions of users simultaneously.

Sample clarifying questions!

What payment types must be supported: cards, wallets, bank transfers?

Is fraud detection and risk analysis built into the platform?

Should the system support multi-currency international transactions?

Requirements
Follow these requirements for the system:

Functional requirements

User registration and authentication
Payment processing
Transaction history
Balance management
Mobile accessibility
Nonfunctional requirements

Performance
Availability
Reliability
Data integrity and security
Scalability
System Design and workflow
Initially, a customer selects a product or service via the merchant’s online store and proceeds to the checkout page to provide payment details, including card number, cardholder name, CVV or CVC, and expiration date. Upon clicking the pay button, an event that hits the payment service stores the event, performs initial security checks, and forwards the payment details to the payment service provider for further operations is generated. The payment gateway performs extensive security checks, moves money from the customer’s account to the merchant’s, and provides secondary services like handling refunds and generating invoices. The card network verifies the card information via APIs provided by the card network. Once the payment is processed, the wallet and ledger service updates the merchant’s wallet in the database to track total revenue and processes each order separately in case of multiple sellers. The reconciliation system matches and verifies financial records to ensure accurate transaction accounting, identifying and resolving discrepancies.


A high-level design of a payment gateway

A high-level design of a payment gateway
Knowledge test!

Where are the customer’s payment details encrypted during a purchase?

How does the card network authorize a debit/credit card?

You can check out the following course for more details on System Design:

Cover
Grokking Modern System Design Interview
For a decade, when developers talked about how to prepare for System Design Interviews, the answer was always Grokking System Design. This is that course — updated for the current tech landscape. As AI handles more of the routine work, engineers at every level are expected to operate with the architectural fluency that used to belong to Staff engineers. That's why System Design Interviews still determine starting level and compensation, and the bar keeps rising.

I built this course from my experience building global-scale distributed systems at Microsoft and Meta — and from interviewing hundreds of candidates at both companies. The failure pattern I kept seeing wasn't a lack of technical knowledge. Even strong coders would hit a wall, because System Design Interviews don't test what you can build; they test whether you can reason through an ambiguous problem, communicate ideas clearly, and defend trade-offs in real time (all skills that matter ore than never now in the AI era). RESHADED is the framework I developed to fix that: a repeatable 45-minute roadmap through any open-ended System Design problem.

The course covers the distributed systems fundamentals that appear in every interview – databases, caches, load balancers, CDNs, messaging queues, and more – then applies them across 13+ real-world case studies: YouTube, WhatsApp, Uber, Twitter, Google Maps, and modern systems like ChatGPT and AI/ML infrastructure. Then put your knowledge to the test with AI Mock Interviews designed to simulate the real interview experience.

Hundreds of thousands of candidates have already used this course to land SWE, TPM, and EM roles at top companies. If you're serious about acing your next System Design Interview, this is the best place to start.

26hrs
Intermediate
4 Playgrounds
28 Quizzes

Preview
25. Design a food delivery service like Uber Eats or DoorDash
Problem statement: Design a food delivery service like Uber Eats or DoorDash that efficiently connects hungry customers with diverse restaurants, ensuring timely and accurate order fulfillment while optimizing delivery routes and driver earnings.

Sample clarifying questions!

Should the system prioritize delivery speed, cost, or driver fairness?

Is real-time order tracking with driver location required?

Are ratings and reviews needed for restaurants and delivery agents?

Requirements
Follow these requirements for the DoorDash system:

Functional requirements

Search menu items, cuisines, or restaurants
Add items to the cart
Notifications about the order status
Track the order
Cancel the order
Pay for the order
Create and update the account
Restaurant profile creation
Offboarding option (If the restaurant decides to discontinue service)
Nonfunctional requirements

Latency
Consistency
Availability
High throughput
System Design and workflow
The following is a level design of DoorDash, consisting of several services for different purposes. Let’s describe the workflow and the interaction of the different services involved in the design.

Customers’ requests are routed through the API gateway and directed to different services via the load balancer. The search service searches for menu items, cuisines, restaurants, etc. It is one of the customers’ busiest services when searching the website or application. The ordering service handles menu selection, managing the shopping cart, and placing food orders. Additionally, it facilitates payment processing through an external payment gateway and stores the outcomes in the relevant database. The order fulfillment service is used to manage the orders that the restaurants have accepted. It also keeps track of orders being prepared.

Customers and restaurant staff use the user management service to create and manage their profiles. The dispatch service displays the orders ready to be picked. It is also used to view delivery information and facilitate communication between customers and restaurant staff.


A high-level design of the DoorDash system

A high-level design of the DoorDash system
Knowledge test!

How would you handle a sudden surge in orders during peak hours, like on Super Bowl Sunday?

How would you leverage customer and delivery data to personalize recommendations, improve order accuracy, and optimize pricing?

How would you protect sensitive customer and payment information from breaches?

26. Design a distributed locking service like Google Chubby locking
Problem statement: Design a highly available, fault-tolerant distributed locking service like Google Chubby to coordinate access to shared resources in a large-scale distributed system.

Sample clarifying questions!

Should the system support both read and write locks?

What happens if a client holding a lock crashes or disconnects?

Is lock expiration or lease renewal required?

Requirements
Follow these requirements for the Google Chubby locking system:

Functional requirements

Coarse-grained locking service
Reliable low-volume storage
Nonfunctional requirements

Availability
Reliability
Easy-to-understand semantics
High throughput
System Design and workflow
The Chubby cell is composed of multiple servers (usually five), all replicas of each other. One of these servers is a leader with whom the clients must communicate. Each server has a namespace that is composed of directories and files that contain data that is relevant to different applications. In addition to this namespace, the server contains an ACL files directory to have access control lists of all the files and directories within the namespace. The Chubby library mediates communication between clients and servers in a Chubby cell. It takes a request from a client who wants to use the Chubby service and then finds the relevant cell, directs the request to that cell via remote procedure calls (RPCs), and then reports any changes made in the namespace, data, or metadata (also known as events) back to the client.


A high-level design of the Google Chubby locking system

A high-level design of the Google Chubby locking system
Knowledge test!

How does Chubby recover from server failures and network partitions while maintaining data consistency?

How does Chubby handle client failures and session timeouts?

Note: Look at the detailed design of Google Chubby locking to get answers to the above questions.

27. Design a coordination system like ZooKeeper
Problem statement: Design a highly available, fault-tolerant, and scalable coordination system like ZooKeeper to manage configuration, naming, synchronization, and group services in a distributed system.

Sample clarifying questions!

What coordination features are needed: leader election, locking, or configuration?

What consistency level is required during network partitions?

Should clients be notified of changes (watch mechanism)?

Requirements
Follow these requirements for the ZooKeeper system:

Functional requirements

Coordination and synchronization of processes
Leader election
Ephemeral node creation and deletion
Session management
Efficient reads and writes
Session management
Nonfunctional requirements

Good performance
Simple design
Availability
Reliability
System Design and workflow
The clients are the applications that use ZooKeeper as a coordination service for their application processes. ZooKeeper client library (API) provides functions such as create(), delete(), exists(), and many more to manage and use the coordination data. Through this API, the client request is forwarded to the ZooKeeper server. The ZooKeeper server represents a process that provides the ZooKeeper coordination service. It stores all the coordination data from different applications and their processes in memory. The namespace for applications/clients and their coordination data are organized in a hierarchy (in the form of a tree). The client application processes store their coordination data on znodes. These processes can perform all the operations provided in the ZooKeeper client API. Each znode can be accessed through its path in the standard UNIX notation (like having / for the root directory). There is a set of ZooKeeper servers called ZooKeeper Ensemble. All are replicas. One is elected as the leader, while others become the followers.


A high-level design of the ZooKeeper system

A high-level design of the ZooKeeper system
Knowledge test!

We have a collection of servers in the ZooKeeper ensemble. What should be the minimum number of servers, and why?

Note: If you need answers to such questions, look at the detailed design of ZooKeeper.

28. Design a scalable distributed storage system like Bigtable
Problem statement: Design a massively scalable distributed storage system like Bigtable capable of handling petabytes of structured and unstructured data with low latency reads and writes, supporting flexible schema, efficient query patterns, and high availability while ensuring data consistency and durability.

Sample clarifying questions!

What is the expected workload pattern: read-heavy, write-heavy, or balanced?

Should the system offer strong consistency on read-after-write?

Is the schema flexible or strictly enforced?

Requirements
Follow these requirements for the Bigtable system:

Functional requirements

Wide applicability
High performance
User-guided locality
Continuous updates
Atomic rows
Nonfunctional requirements

Durability
Availability
Scalability
High number of read/write operations (throughput)
System Design and workflow
The following illustration shows that the Bigtable implementation consists of three main parts: a library linked to each client, one Bigtable manager server, and several tablet servers. A library is a component that all clients share. This library enables clients to communicate with Bigtable. The manager server allocates tablets to table servers, identifies tablet server additions and expiration, regulates tablet-server traffic, and garbage collection of files in GFS (a distributed file system). It also supports schema changes like table and column family formation. All tablet servers are in charge of a certain group of tablets, generally around 10 to 1000 tablets. Each tablet server provides reads and writes of the data to the tablets to which it is allocated. Servers can be added or removed in a Bigtable cluster as needed. New tablets can be made and assigned, old ones can be merged, and they can be reassigned from one server to the other to accommodate changes in demand.


A high-level design of the Bigtable system

A high-level design of the Bigtable system
Knowledge test!

How does Bigtable efficiently support schema changes without impacting performance?

How does Bigtable ensure data distribution and replication across multiple servers?

Note: If you need answers to such questions, look at the detailed design of BigTable.

29. Design an online multiplayer game system
Problem statement: Design an online multiplayer game system that allows players to connect and play in real time. The system should handle player matchmaking, maintain low latency communication, ensure player synchronization, and consistently manage game state.

Sample clarifying questions!

What game type is being built: real-time, turn-based, or battle royale?

What is the maximum number of concurrent players per session?

Should cross-platform play (mobile, console, desktop) be supported?

Requirements
Follow these requirements for such a system:

Functional requirements

Gameplay (connect and play)
Chat service
Audio communication
Events notification
Payment for in-app purchases
Nonfunctional requirements

Scalability
Availability
Security
Latency
System Design and workflow
In an online multiplayer game system, players connect to the game server, which handles matchmaking by pairing players based on skill levels and preferences. Once matched, the server maintains low latency communication between players, ensuring smooth and real-time interactions using a pub/sub service. The game state, including player positions and actions, is synchronized across all players’ devices through a central game state manager. The session service manages sessions and synchronizes the players. The play service will handle all the game-related tasks like updating stats, checking players’ availability, etc. The payment service facilitates in-app purchases of assets.

For a better user experience, we can separate real-time operations, such as gameplay, from non-real-time operations, such as invites and in-app purchases.


A high-level design of a gaming service

A high-level design of a gaming service
Knowledge test!

How can you ensure system stability and prevent crashes when millions of users play simultaneously?

How would you implement lag compression and data buffering to handle network delays and ensure smooth gameplay?

What are the benefits of using a virtual private cloud (VPC)?

How can you maintain low latency for real-time communication, especially during peak usage?

How would you limit the number of requests to the server without compromising the real-time gaming experience?

Note: To learn more about gaming service design details, explore the gaming API design chapter.

30. Design a Zoom-like video conferencing system
Problem statement: Design a real-time video conferencing system that supports high-quality meetings with hundreds of participants. The platform should offer interactive features like breakout rooms and polls, work reliably across different network conditions, and scale globally with low latency.

Sample clarifying questions!

What is the maximum number of participants per session?

Should video quality adapt based on bandwidth conditions?

Is end-to-end encryption required for audio, video, and chat?

Requirements
Follow these requirements to design the system:

Functional requirements

Meeting management
Real-time data streaming
Advanced participant controls
Rich interactive features (Screen sharing, Interactive polls)
Cloud recording and transcription
Client-side features
Nonfunctional requirements

Low latency
High availability
Reliability
Scalability
Security
System Design and workflow
This high-level design represents a video conferencing service that incorporates several components to provide a seamless experience for users. The system starts with the client, communicating with the API gateway to initiate requests. The API gateway handles authentication and directs the request to the load balancer, efficiently distributing traffic to the appropriate services, such as the user service, scheduling service, meeting service, and messaging service. These services manage user data, scheduling of meetings, real-time communication during meetings, and messaging functionalities. Additionally, the CDN ensures that video and media content is delivered with low latency to users across different geographical regions.

The media router (SFU) plays a critical role in managing media streams in real-time. It handles video and audio streams from multiple participants and forwards them to other participants without modifying the content, ensuring efficient bandwidth usage. The system also integrates a cloud processing service to handle more complex tasks like video processing or analytics. Data is stored in a blob store and a database to keep records of meetings, messages, and user information.

The following illustration shows a high-level design of a video conference service:


A high-level design of a video conference service

A high-level design of a video conference service
Knowledge test!

How does end-to-end encryption affect server-side features like recording or transcription?

How would you implement adaptive bitrate streaming to ensure smooth performance on weak networks?

What parts of the system will most likely break if a popular meeting gets thousands of participants simultaneously? How can you design to prevent that?

Note: Explore the Zoom API design to learn more about designing a video conference service and determine the answers to the above questions.

The final step of your interview prep
Mastering these 30 questions is a fantastic first step toward comprehensive System Design interview preparation.

However, there are plenty more System Design concepts you’ll need to know for a real-world System Design interview. Educative has created an exhaustive course: Grokking Modern System Design Interview, which includes more detailed questions and answers and the opportunity to get hands-on practice.

This interactive course covers the building blocks of the modern System Design concept, coupled with more than a dozen real-world questions currently used in the industry. By the end of the course, you will understand what clarifying questions to ask and tradeoffs to make for each question. Ultimately, you will learn exactly what it takes to stand out to interviewers in the current hiring market.

That’s why if I had to pick just one System Design prep resource to give you, this would be it.

Quick tips to tackle System Design interview questions
We all dream of passing the System Design interview with flying colors!

So why not make this dream a reality with some quick tips:

Practice structured thinking: Always start with a clear outline of your approach. Break problems down systematically, such as: 

Requirements ➔ Components ➔ APIs ➔ Data models ➔ Bottlenecks ➔ Trade-offs

Clarify early, clarify often: Never rush into a design. Spend the first 5-10 minutes asking questions and defining system constraints and assumptions.

Prioritize communication: Think out loud. Walk your interviewer through your decisions, trade-offs, and reasoning, even if unsure.

Use diagrams: Visual aids like high-level architecture diagrams make your solution much easier to understand and show that you think like a true architect.

Review actual systems: Study the architectures of popular platforms like Instagram, Uber, Netflix, and Dropbox to understand real-world trade-offs.

Stay calm under pressure: Keep moving forward even if you get stuck. Composure, problem-solving attitude, and logical thought are often more important than reaching a “complete” design.

I wish you the best of luck with your interviews. I am confident that with a little hard work and strategic preparation, you will be successful.

Introduction to System Design
You may be reading this guide because you recently failed a system design interview. Or you watched a YouTube video that made system design seem like an overwhelming topic you’ll never fully grasp. Or perhaps you have years of experience working in the field, yet you struggle to demonstrate your technical prowess in the brief span of a system design interview.

Do not panic laptop
Professional experience with distributed systems isn’t needed to pass system design interviews. And even if you do have that experience, keep in mind that many talented distributed systems engineers still struggle with the system design interview format. How you perform in an interview is not a measure of your worth as a software engineer—it is a measure of your ability to do system design interviews. The two are related but not equal; being a good programmer has a surprisingly small role in passing interviews.

Anecdote
One of our experts was asked: “As an experienced engineer without any scalable systems experience, how can I go into something like a FAANG system design interview when I have never designed those systems before?” Here’s the expert’s reply:

"I worked at Facebook for five and a half years. I learned more about system design from reading the internal interviewing wiki than I ever got from working at Facebook. They've got all kinds of distributed systems knowledge there, and it’s concentrated in a handful of infrastructure teams who build really great libraries and really great backend systems. That means that the rest of us never have to think about distributed systems. We get to say, 'I'm gonna make a new data type, and if I dump a billion records in it tomorrow, it doesn't matter. The systems folks have my back.' I worked at Facebook for a really long time, but I learned almost nothing about designing systems from experience."

Remember
You can pass system design interviews even if you’ve never designed distributed systems before. If you have copied files between machines with drag-and-drop, you are halfway there. If you implemented clients or servers or have opened network connections, you’ve got this. This guide will teach you the most important 20% of information that will appear 80% of the time in system design interviews. By the end of this guide you won’t be an expert, but you’ll be well on your way to being a better engineer and a much better interview candidate.

Want to know exactly what a FAANG System Design interviewer looks for? Get detailed feedback on your system design skills from our professional interviewers.

See available times

The difference between engineering problems and design problems
In this excerpt taken from Designing Your Life, written by two Stanford professors and engineers, you’ll get a better understanding of how different problems require different approaches. We bolded to emphasize the parts that are most important to note.

“There’s a difference between design problems and engineering problems... Engineering is a good approach to solving a problem when you can get a great deal of data and you’re sure there is one best solution. Bill [one of the authors] worked on the problem of engineering the hinges on Apple’s first laptops, and the solution he and his team came up with made those laptops some of the most reliable on the market. The solution required many prototypes and lots and lots of testing, similar to the design process, but the goal of creating hinges that would last five years (or opening and closing ten thousand times) was fixed, and his team tested many different mechanical solutions until they met their goal. Once this goal was met, the solution could be reproduced millions of times. It was a good engineering problem.

“Compare this with the problem of designing the first laptop that had a ‘built in mouse’. Because Apple’s computers relied on the mouse to do almost everything, building a laptop that required you to be wired up to a regular mouse was unacceptable. This was a design problem. There was no precedent to design toward, there was no fixed or predetermined outcome; there were plenty of ideas floating around the lab, and a number of different designs were tested, but nothing was working. Then along came an engineer named Jon Krakower. Jon had been tinkering around with miniaturized trackballs, and had the crazy idea to push the keyboard to the back of the unit, leaving just enough room to squeeze in this tiny pointing device. This turned out to be the big breakthrough everyone had been looking for, and has been part of the signature look of Apple laptops ever since.

“When you have a desired outcome (a truly portable laptop computer) but no clear solution in sight, that’s when you brainstorm, try crazy stuff, improvise, and keep ‘building your way forward’ until you come up with something that works. You know it when you see it. A great design comes together in a way that can’t be solved with equations and spreadsheets and data analysis. It has a look and feel all of its own - a beautiful aesthetic that speaks to you.”

Designing your life book image
This is one reason engineers new to system design can bomb their first couple of system design interviews spectacularly: They approach a design problem as if it’s an engineering problem. There is not a single “best” solution to a system design problem. There are no predetermined outcomes. The less code you write in a system design interview, the better.

To succeed in a system design interview, you want to collaborate with your interviewer, try crazy stuff, and try more crazy stuff until the design “feels right.”

How approaching a system design interview is different than a coding interview
The difference between coding and system design is the difference between retrieving and creating.

Instead of finding (or “retrieving”) a solution, you are creating a solution. In this way, coding is akin to a science, while system design is more like an art.

Depiction of analytical left brain and creative right brain
Here’s another way to think about it. You aren’t solving a problem—you’re creating a map to help someone else find the solution. Instead of coloring inside some lines, you’ll need to draw the lines for someone else to color in. In a system design interview, there are no correct answers—though there are certainly incorrect ones—so there is nothing to solve. Instead, you’ll ask questions, make stuff, and explain how and why the stuff you made was reasonable.

Don’t think like a coder. Think like a Tech Lead.
During the interview, you’ll spend an hour playing the role of a Tech Lead, so just pretend that the interviewer is a junior engineer who will be implementing your design. Juniors will have lots of questions, and since you’re the Tech Lead, you want to welcome these questions.

Anecdote
“Pretend it’s 1999, so a lot of the stuff we have access to today simply doesn’t exist. You and a group of your schoolmates are in your garage, hoping to make something. You're the most senior one there. You will design it and your friends will code it up, and the thing is: the Minimum Viable Product has to be completed by tomorrow. So, there’s no time to prep and no need to worry about the intricacies of system architecture that you don’t know. Just answer this: How would you design this system so your friends could code it up today, right now? It doesn’t have to be pretty. It doesn’t have to be complicated. It doesn’t have to impress anyone. It just has to get done.”

What you do is important, but how you communicate is even more important.
The value of communication in coding interviews is controversial (source). But without communication in a system design interview, nothing happens. By necessity, it’s more conversational in nature than a coding interview and will have more back and forth between interviewer and candidate.

With that said, sometimes you’ll have an interviewer who is cold or not very collaborative. Dealing with these interviewers requires practice. The more senior you become, the more important it is to learn how to adjust your communication style to match your audience. We recommend completing mock interviews with a variety of interviewers to help you become a seasoned, fearless veteran of system design interviews.

There are no optimal solutions in system design interviews.
There’s no “right” way to design a system. If two experts designed the same system, you would see two different designs, beautiful and aesthetic in their own way and both as “correct” as the other (and with the accompanying justifications to support them).

Tip
In part 2, two experts will show you how they would each design the same system, providing you with a practical lesson on this topic.

Lean towards your strengths.
Anecdote
“If you want to be a great interview candidate you’ve gotta know… It’s your responsibility to leave breadcrumbs for the interviewer to go where you want them to go. That way you have them walk you down the road where you are at your best. And then the Jedi mind trick is to get them to think it was their idea to get you there.”

What if your measurement of success in an interview isn’t what you say, but instead it’s what you get the interviewer to say? Imagine you say something that engages the interviewer’s curiosity so much that they have no choice but to follow up with a “tell me more about that.” If the areas you get them to dig into the deepest, are things you’re good at: congratulations you are doing the Jedi mind trick.

A candidate doing a system design interview will usually experience confusion. The interview format is so open-ended, you cannot know about everything they'll ask you. However, there will be opportunities to strut your stuff. There will be moments when they ask you about something you know very well, and when this happens put your shoulders back and flex your muscles on this topic.

What it’s like to walk into a system design interview
When beginning an interview, try to imagine what the interviewer is looking for. What are their goals for the session? How can you help them achieve those goals in a way that persuades them that you’ll be a strong hire?

Put simply, the interviewer's goal is to find enough data to hire you. Given the limited time available to them, an interviewer has to try to get enough positive signal about your ability so they can justify giving you a “hire” rating. In one hour you have to show your interviewer that you understand the fundamentals of a system (end to end). You also should be able to name and explain (at least at a high level) each part of the system, describe the tradeoffs you make, and find a solution.

Remember
The best way to accomplish this is to imagine that you’re explaining a design doc to a group of more junior engineers. They will ask you questions about your decisions and want to know what you’re trying to solve. Anticipating these questions and your responses will set you up for success in the interview.

Woman helping man code
Want to know exactly what a FAANG System Design interviewer looks for? Get detailed feedback on your system design skills from our professional interviewers.

See available times

What your interviewer looks for, and what they don't
With this basic model in mind, let's consider the main elements that system design interviewers look for, and the elements that don’t matter.

What your interviewer wants to see
a broad, base-level understanding of system design fundamentals.
back-and-forth about problem constraints and parameters.
well-reasoned, qualified decisions based on engineering trade-offs.
the unique direction your experience and decisions take them.
a holistic view of a system and its users.
What your interviewer is not looking for
deep expertise in the given problem domain.
assumptions about the prompt.
specific answers with ironclad certainty.
a predefined path from the beginning to end of the problem.
strictly technical considerations.
You do not need to display deep expertise in the given problem domain. Interviewers want to see that you have a broad, base-level understanding of system design fundamentals.
Your interviewer will expect you to have knowledge of a wide range of basic topics, but they won't expect you to be an expert in any of them. For instance, you should understand the difference between SQL and NoSQL databases, their broad performance characteristics, and the types of applications each might be useful for (which we’ll teach you later in this guide). But you would not need to know how the internals of either type of database work at any kind of detailed level.

In spite of this, you still might be asked to design those internals! Keep in mind, though, that your answer doesn't need to be optimal or reflect real-world implementations. For example, if an interviewer asks you to design a database/SQL query engine, they're not trying to discern if you're familiar with the academic literature on query engines or discover how much time you've spent working on database internals.

Instead, they want to see how you would approach the problem based on what you do know, starting from first principles and collaborating with them. Your answer will probably not be anywhere near optimal, and that's OK! The interviewer will focus on the process, not the result.

Interviewers want to engage you in a back-and-forth conversation about problem constraints and parameters, so avoid making assumptions about the prompt.
Initial prompts to system design problems tend to be intentionally light on detail. Many candidates make a mistake by extrapolating details from the initial prompt and crafting a solution based on those assumptions.

For example, imagine that the interviewer instructs you to design a "photo sharing service" with some minimally defined capabilities. This may cause some candidates to imagine that they're rebuilding Instagram and start designing around the assumption that all images will be relatively small, not examined closely, and that extensive compression to save storage and bandwidth is acceptable.

But the interviewer didn’t tell you to rebuild Instagram, so you’ll need to keep in mind that there are many different types of photo sharing services. The interviewer may have had in mind something like Imgur or Photobucket, sites that cater more to basic image hosting for the web. Or they could be thinking about something like Flickr or 500px, services built for photographers to show off their work in high resolution.

So how do you figure out what type of service the interviewer wants you to build? Ask them! A basic prompt leaves room for you to start a conversation with your interviewer about the system you're designing—what type of users does it serve, what type of traffic can it expect, what limits will it have? Demonstrating that you can think critically about the parameters of your service is the first step in any system design interview.

Interviewers are not looking for specific answers with ironclad certainty. They want to see well-reasoned, qualified decisions based on engineering trade-offs.
Be very careful any time you find yourself responding immediately to a prompt in a system design interview. Even aspects of your design that seem insignificant need at least cursory consideration. Let’s use IDs as an example.

A candidate will often start a discussion of a data model with a statement like, "I'll use auto incrementing IDs," or "I'll use GUID here" as kind of a default approach to assigning IDs to data. In many applications, however, the type of ID you assign to your data has practical consequences.

Is this ID going to be exposed to users? If so, how long does it need to be to avoid collisions? If we auto-increment it, are we worried about the visibility that will give third parties into our traffic patterns or the possibilities of users guessing the IDs to each others' data? If it's intended to be shared, is it convenient to type? If you print it on a business card or a flier, does it contain characters that you could confuse for each other (e.g., “1” and “I”, “0” and “O”)?

You don't need to hold an inquiry for every minor detail, but always be sure to give some justification for the decisions you make and let your interviewer know how your decisions would change in different circumstances. System design problems don't have a single definitive answer, so interviewers just want to see that you can justify your answers.

Interviewers are not looking for a predefined path from the beginning to end of the problem. They want to see the unique direction your experience and decisions take them.
Coding problems usually have an expected path. Typically you'll begin with an obvious but inefficient solution, and then the interviewer will prompt you for a series of improvements. Those improvements lead you to increasingly efficient solutions until you finally arrive at the optimal implementation.

Choose your own adventure books
System design problems, on the other hand, resemble a Choose Your Own Adventure book rather than a linear novel. A complex system contains a multitude of sub-components, each one of which could serve as a design problem on its own. After you've sketched the overall layout of your system, an interviewer may decide to keep your focus on the big picture or dive into a deeper examination of one particular component.

The path your interview takes will be steered by your interviewer, but they're likely to take cues from the sub-problems in which you display interest or aptitude. In some cases they may explicitly ask you which part of the problem you'd prefer to focus on.

Even if you're not choosing directly, you can still influence an interview's direction. As you talk your way through a solution, it’s OK to specifically note the parts that you have experience in and explain when you're making educated guesses. Your interviewer won't expect you to know everything, but giving them a better idea of what you do know will help them steer the interview in ways that reveal your strengths and problem-solving ability.

Interviewers seek a holistic view of a system and its users.
When faced with a choice in a design interview, it's easy to focus on the technical details, but remember that computer systems serve human users, so you’ll want to anchor your technical decisions to the user experience they enable.

Suppose, for instance, that the image sharing service you're designing will require users to log in before uploading an image. In technical terms, you might want to avoid login to keep the database schema simpler, or you could introduce login to gather better metrics. An anonymous experience may be best for a public image-hosting site intended for quick turnaround and low interaction, while a logged-in experience offers the possibility of community features like commenting and sharing, personalized metrics, and the ability to restrict an upload to authorized viewers. You may want to take either approach or even both, allowing a limited anonymous experience with extra features for logged-in users.

The important thing is to discuss the possible approaches and their consequences for the user experience with your interviewer before making a decision. You can never go wrong by making the end user the driving force in your design.

Red flag and green flag
Green Flags, Red Flags, and other signposts
Think of red and green flags as signposts you can use to orient yourself in the interview. Green flags indicate that things are going well, that you're engaging with the interviewer and making a positive impression. Red flags warn you that you may be going astray and should try to get the interview back on track.

Red Flag #1: You believe that to pass a system design interview, you should just “play the game, keep talking, and make sure nobody explodes.”
Following this quote’s advice has steered many interviewees in the wrong direction. There is no game, and talking for the sake of talking is one way to hang yourself with the rope the interviewer gives you. Also, if the goal is to not explode, well, you’re wasting your and your interviewer’s time.

Green Flag #1: You communicate honestly about what you know and what you don’t.
As we mentioned earlier, this guide will teach you the basic information that you’ll be asked about in 80% of system design interviews. Although these are great odds, you still may encounter a scenario that’s beyond your level of understanding. If this happens to you, don’t worry! Just engage in an honest dialogue with your interviewer, explaining when you lack certain knowledge or have gaps in your understanding. When you do have a sense of how to proceed, but you’re uncertain, you should communicate from first principles. Later in this guide, we will explain how to overcome that uncertainty and still score points with your interviewer.

Red Flag #2: You find yourself pushing against interviewer feedback.
Keep in mind that your interviewers use the same problems over and over again, and they frequently see candidates make the same mistakes. If they try to divert you from a course of action, it's likely because they've seen others flounder when using the same approach. You may be the one candidate in a hundred who finds a unique and better solution—we've had this happen before!—but carefully consider the odds before proceeding with a solution against the interviewer's advice.

With that said, there is an art to pushing back against your interviewer when the situation calls for it, and later in this guide we’ll teach you how and when to employ this strategy .

Green Flag #2: The interview feels like a collaboration between you and the interviewer.
When the interviewer offers feedback, you integrate it into your design. You ask probing questions and receive useful answers about the system you're designing, its users, and its traffic. Try to establish a tone as if you were working through a problem with a coworker rather than proving yourself to an interviewer. In the real world, when you’re assigned a project, you’ll have to ask a variety of people several questions to ensure that you fully understand the problem before making decisions. That’s what interviewers want to see.

Red Flag #3: You skip over questions and ignore interviewer prompts, trying to move the interview ahead without addressing their concerns.
It's OK to not know things—no one will have every answer—but it's better to admit that to your interviewer than to avoid the questions altogether. Your interviewer may be able to offer you a hint or help you reason about alternatives if they know you're struggling, but if you skip right ahead you'll miss the opportunity to provide them with any positive signal from that portion.

Green Flag #3: Your role determines who should drive the focus and pace of the interview.
If you’re looking for a mid-level position or below, your interviewer should determine the direction and speed of the interview. Given an initial overview of your design, they may ask you for clarification on some aspects of it. They may ask you to produce a more detailed design for one or more components. And they may also change the requirements and ask how you could adapt your solution to accommodate this new view of the world. Wherever they take the interview, follow along and focus on the areas they direct you to.

If you’re applying for a senior role (or above), it’s a good sign if you direct more of the interview. In junior system design interviews, the interviewer expects to drive the interview, but as you reach senior levels the expectation shifts to the interviewee.

Anecdote from a seasoned interviewer
​​Being overly confident and talking too much might count against a mid-level candidate. Some interviewers (especially off-script ones) love giving candidates more rope to hang themselves with, and then they ask specific questions that focus on what the candidate struggles with.

If your goal is to maximize a mid-level offer, not improve your "average passing rate" (i.e., if you are comfortable sacrificing some senior-plus chances to increase your mid-level chances), then you might be better off consciously "giving control away" to your interviewer.

Simply put, at the above-senior level an awkward pause will be held against you—that’s basically guaranteed. But at mid-level, most of your attempts to fill in an awkward pause may hurt you more than keeping silent.

Another way to think of it: when you are not leading the conversation, you signal that you’re not really far above mid-level. (But if you are comfortable at mid-level, this is not a downside!)

The saying, ‘Better to remain silent and be thought a fool than to speak out and remove all doubt’ can be true for mid-level interviews but not for seniors or above-senior.”

Red Flag #4: You leave long stretches (several minutes) of silence multiple times throughout the interview.
If you're struggling to provide an answer, give yourself a little bit of time to come up with something. If you're truly stuck, however, you should ask your interviewer for help. They can't tell that you're at an impasse unless you tell them, and you may waste valuable interview time while they debate whether it's been long enough to interrupt you.

Green Flag #4: You take time to collect your thoughts and refine solutions before offering them up out loud/on the board.
An interview doesn't need to be a continuous stream of consciousness, and it never hurts to sanity check your ideas before verbalizing them.

Tip
In Part 4 of this guide, we’ll teach you how to get unstuck and exactly what to say when you’re stuck.

Several road signs
A few more signposts
A common failure point occurs when candidates don’t make decisions
Often, candidates will say things like: “we could use this type of DB, or this other, or that other, and these are some pros and cons…” and then they move on to another component. It’s a good practice to talk about benefits and tradeoffs, but then you have to make a decision. In the real world you have to make decisions—the same thing applies to the interview. If the interviewer challenges you with some questions, it’s totally fine to change your mind and alter the component (if you think there are better choices).

Don’t say
Thumbs down icon
We could use this type of DB, or this other, or that other, and these are some pros and cons…

Do say
Thumbs up icon
"We could use this type of DB, or this other, or that other, and these are some pros and cons… And based on all these tradeoffs, I’ll use THAT type of DB."

Interviewers want to identify “impostors”: people who just learned a few words and try to pass the interview.
Don’t say things because you think you’re supposed to say them. This often occurs when candidates name specific brands of technologies (e.g., “Kafka” or “Cassandra”). Not being familiar with specific databases or other components is fine. Be smart and don’t say brand names just for the sake of saying them.

Don’t say
Thumbs down icon
I’m going to use Cassandra...” unless you are VERY familiar with that, because the next question will be: “Why Cassandra and not some_other_db?

Do say
Thumbs up icon
I’m going to use a NoSQL db because of [insert brief rationale].

Don’t say
Thumbs down icon
I will use Kafka…” unless you’re prepared to explain how Kafka works. Don’t say “I will use Kafka” unless you are prepared to talk about other types of queues, because they may ask you: “Oh, Kafka, interesting choice. Why that instead of [some other queue]?

Do say
Thumbs up icon
I will use a queue because of [insert brief rationale].

Remember
Say the generic name of the component, not the brand name unless you are very familiar with it. Don’t say Kafka. Instead, say “a queue.

You finished Part 1! We hope you gained a basic understanding of the system design interview and learned some tips and tricks you can use to excel in it. As you continue reading Parts 2-4, these “glimmers” of understanding will become more and more the default system of your interviewing skills.

In Part 2 we’ll teach you the 15 fundamental system design concepts. You’ll also get to watch our long form video of two system design experts designing the same system. They’re tasked with designing interviewing.io, which in this challenge is actually three systems in one: “Design google docs, a remote compiler, and a recording service… in 30 minutes or less.”


System Design Interviews#
What are system design interviews?#
System design interviews generally give you a set of requirements for a relatively complex system and ask you to come up with a design. Often, these requirements start off somewhat vague to test whether you know what types of questions to ask to gain clarity about the system. These interviews are generally aimed at more senior candidates since juniors can't be expected to have performed too much system design work in their careers.

These interviews can be some of the best barometers of a senior engineer's knowledge, but I personally find them to be the trickiest due to their open-ended nature.

Types of system design interviews#
I have seen two types of system design interviews:

Pure design. You just focus entirely on specifying the system and talking through how you would design it. You may draw up some diagrams to help convey architecture to the interviewer.
Design + coding. The problem is slightly smaller in breadth. You talk through the design of the system and then you write some code to start implementing it.
System design interviews look a lot different depending on your specialty. I have interviewed for both front-end and full stack web application engineer positions. For front-end positions, system design interviews tend to focus on designing a UI component and then implementing the HTML, CSS, and JavaScript for that component. For full stack positions, I have seen more pure design problems where you talk through various topics like how you'd make the application scale, database schema, and API design.

How to prep for system design interviews#
The way I practice system design interviews is to do the following:

Create a list of the considerations that applies to the domain for which I'm interviewing. For example, if I'm interviewing for a front-end position then my interview will likely involve topics like accessibility and internationalization.
Find relevant system design questions online. There are a lot of good examples online. Also, it's not too difficult to come up with your own examples.
Design the systems. Take 45 minutes to an hour to design one of the systems you've identified. Make sure you draw out/sketch architectural pieces, which will be helpful during the interview. When you're done, review your work and make sure you've addresseed all the topics that came up in the list you made. If there are any deficiencies, do some studying of those areas.
Creating a list of topics#
Here are a couple lists of topics for front-end and backend positions. If you have a different specialty, do so googling to find out the relevant topics for your domain.

Front-end#
Accessibility
Performance
Security
Caching
Device types / responsiveness
Languages / internationalization
Componentization
Component API
User experience
Multi-tenancy
Analytics / telemetry
Back-end#
Database design
Scalability
Security
API design
Caching
Availability
Reliability
Performance
Authentication / authorization
Telemetry
The part you can't practice too well: asking questions#
One tough aspect of system design interviews is you really don't know which items in the above lists the interviewer will be interested in, which is why you need to ask a lot of questions. For example, a good front-end clarification would be asking whether the system should support multiple languages. If the interviewer says "yes," you should spend some time explaining the achitecture for supporting different langauges. If the interviewer says "no," then you can skip this topic as you design your system.

Use the RADAD framework#
The Frontend Interview Handbook talks about the RADAD framework, which I found to be a really useful way to spend my time during the interview. The following is a copy/paste from the Frontend Interview Handbook to give you an idea of the framework, but I absolutely recommend you navigate to the handbook itself for more detail:

Requirements clarifications/alignment - Ask about the requirements of the system.
Architecture - Outline the architecture of the system (could be a UI component or an app, depending on the question). Draw diagrams where relevant.
Data model - How would the component store any data passed into it? What data structures are used?
API design - What's the API for using this component? What options will be allowed on the component?
Deep dive - User Experience (UX), Performance, Accessibility (a11y), Internationalization (i18n), Multi-device support, Security
This list is very front-end focused, but it applies equally as well to backend or full stack system design interviews.

Find out where to spend most of your time#
Once you've asked as many clarifying questions up front that you can think of, I recommend asking if there's a particular part of the system the interviewer is interested in. A lot of times the answer is "no," and you get to choose the focus. But in the event that the interviewer is particularly interested in one part of the design, that's a really good piece of information to have. Make sure to take notes as you're asking clarifying questions!

Here are some good clarifying questions, which may or may not be applicable depending on the system you're being asked to design:

If you're being asked to design a messaging service, you may ask:

How real-time the messaging needs to be
Whether there any special security requirements (e.g., end-to-end encryption)
Whether we have insight into anticipated usage numbers
How long messages should be retained
Whether messaging should support media (e.g., images and video)
If you're being asked to design an calendar component, you may ask:

Whether it needs to support multiple languages / internationalization
Whether it needs to support date ranges or just a single date
What browsers and devices it will be used on
What type of data should be stored in the calendar
Relevant system design questions#
The following is a non-exhaustive list of system design questions I have heard of. Feel free to practice these examples. Also, be sure to google around for other examples to practice.

Back-end#
Chat / messaging application
Twitter / micro-blogging platform
Link shortener (e.g., bit.ly)
Any create, read, update, delete (CRUD) API
Public library checkout system API
Video streaming service
Pinterest
Front-end#
The front-end for anything listed in the back-end section
Specific components:
Date-picker
Image carousel
Modal
Accordion
Here's an additional resource with system design interview questions and answers:

31 system design interview questions (and sample answers)
🎓 Frontend Interview Prep
One of the pioneers in the software interview prep space, Yangshun Tay, is now offering an extremely comprehensive frontend resource full of coding questions, knowledge challenges, system design problems, and more.

You can sign up for as low as $10/mo, which is an amazing deal if you consider the impact a new job can have on your compensation.

I'd strongly encourage any frontend engineers looking for new jobs to sign up! If you use the following link, I'll get a small referral bonus:

7 System Design Interview Questions Every Software Engineer Should Know
Written By HackerRank | April 28, 2022


System design interviews have been a critical component of technical hiring for decades. If you’re a software engineer on the job market, the ability to demonstrate your skills in a design interview is critical to landing your next role. 

The key to succeeding in these interviews is preparing for the styles of problems you might encounter. In this post, we’ll break down seven different system design interview questions you need to know to land the next job of your dreams.

What a System Design Interview Looks Like
A system design interview is a type of interview that challenges candidates to design a back-end system, often on a physical or virtual whiteboard. Candidates are asked to verbally explain their solution and thought process as they develop their answer.

System design questions grant candidates a look into an organization’s tech stack and operations and give hiring managers an understanding of the candidate’s approach to problem solving. These interviews should ideally proceed like discussions, with the candidate thinking aloud about scalability, storage, reliability, and other aspects of the system. System design interviews are more commonly found in hiring processes for senior-level roles, though developers of other experience levels may encounter this type of interview, as well.

System design interviews are considered one of the more difficult types of interviews. They require a fundamental understanding of systems and advanced preparation to succeed. By their nature, system design questions are broad, open-ended questions with a variety of possible answers.

7 System Design Questions
There are a number of different types of system design questions hiring managers can use to help showcase a developer’s skills and potential. The difficulty and composition of these tests usually varies based on the experience-level of the role. 

While answering this style of question, the main goal of a software engineer should be to demonstrate the ability to design and build integrated and scalable systems.

The following is a list of the types of system design questions an engineer might encounter during a design interview.

Design a Flash Sale System (eCommerce)
Your company has launched a hot new product. The marketing team has recommended promoting it through flash sales. The features of a flash product sale are as follows:

The sale starts at a particular time.
The requests to purchase the product may be greater than the stock count for the product.
Each user can purchase only one unit of the product.
There is no “Add to Cart” functionality.
Each order should be placed on a first-come-first-serve basis, and the product should go out of stock the moment the entire stock of the product is exhausted.
Using diagramming tools, design a system that implements these features in a robust, scalable way.

Components to consider:

As soon as the user clicks the add to cart button, trigger an API call and show a loader until the API returns a response.
The API at the backend needs to process the requests in the queue.
If the request count is greater than the stock available, return an error instantly with a ‘no stock’ error.
Otherwise, just return a response with success, the order id, and in the background, keep processing the queue .  
At the front: stop the loader upon receiving a response.
If there is an error, show the appropriate error and remove the product from the list.
If successful, show the success status.
Design a ride-sharing service
Design a ride-sharing service that enables users to request rides through an app. The system should account for workflows for both passengers and drivers.

Components to consider:

Payment processing
Encryption and storage of payment methods
Push notifications and in-app messaging
Databases to manage user and driver data (SQL, MySQL)
Data privacy and encryption
GPS and mapping technology
User reviews and score aggregation
Data tracking to identify patterns and spikes in activity
Image hosting system
Design a simple social media application
Designing a social media application is a common system design question that tests the candidate’s ability to plan out the structure of a wide range of technologies. Databases, media hosting, and algorithms are just a few of the topics you’ll need to cover to successfully answer this question.

And, because social media companies are among the largest employers of software engineers, there’s a good chance you might find yourself facing this question during an interview.

Components to consider:

Ranking algorithms
Databases to manage user data (SQL, MySQL)
Privacy controls
Engagement features (following, liking, commenting, sharing)
Hosting of user generated content (images, video, gifs)
Database schema
Design a video streaming service
Design a video streaming service that allows users to view and search videos. The service should also enable internal teams to upload content through the back end. The service needs to be highly scalable, supporting large numbers of users on the platform. The application should also be able to upload, store, edit, and transmit large data files.

Components to consider:

Databases to manage user data (SQL, MySQL)
Video and image hosting system
Privacy controls and age restrictions
Engagement features (following, liking, commenting, sharing)
Recording data about video performance
Ranking and recommendation algorithm
Push notifications and announcements
Video player functionality
Design a URL shortening service
Design a URL shortening service that returns a short and unique URL when a user enters a long URL. Applications such TinyURL and bit.ly are examples of this service. However, many other technology companies, such as YouTube, also have their own URL shortening services built into their functionalities.

Components to consider:

Generating a unique and short URL
Scalability to handle thousands of requests
Functionality to redirect from the short link to the original
Support for custom URLs
Analytics and tracking of clicks
High availability and uptime
Design a file-storing and sharing service
Design a file hosting service that enables users to upload, store, edit, download, share, and delete files. The service should provide synchronization across various devices. Examples of this service include Dropbox and Google Drive.

Components to consider:

​File management functionality (upload, view, download)
Automatic synchronization between devices
ACID properties on database transactions
File sharing and permission tracking
Search functionality to locate files
Storage of large files
Design a search engine
A search engine is a software system that conducts web searches and delivers an organized list of results. The algorithm should rank results based on a variety of factors, including: 

Expertise
Accessibility
Trustworthiness
Website performance
Mobile-first design
User experience
Components to consider:

Result ranking algorithm
Personalized search results
Voice, image, and video search
Machine learning and artificial intelligence
Recommendations for related and popular searches
Recording data on search volume and other statistics
Website crawling and indexing
System Design Interview Tips
One factor that can make system design interviews so difficult is that they involve explaining complex, technical concepts through verbal communication. To get around this, it’s helpful to use an answering method to structure your response. Here are a few tried-and-true methods to employ in your next system design interview.

Reference Examples and Experience
One way to ground the details of your answer is to frame the response around real-world experience. By sharing an example of a time you solved a similar problem, it adds detail and credibility to your answer. It also helps bolster your candidacy by demonstrating to the hiring manager that you’ve already performed the responsibilities of the position.

STAR Method
Situation, Task, Action, and Result is a great method that can be employed to answer a problem-solving or design interview question. Here’s a breakdown of these steps:

Situation: A good way to address almost any interview question is to lay out and define the situation and circumstances. 
Task: Define the problem or goal that needs to be addressed. System design questions are often multifaceted, so this step is particularly important when answering technical problem-solving questions.
Action: How would you go about solving the problem? How have you approached similar obstacles in the past? What technologies will you use? Try to be as specific as possible, and state your plan in steps if you can.
Result: Wrap it up by stating the outcome achieved. 
PREP Method
Traditionally used as a method to make effective presentations, the Point, Reason, Example, Point method can also be used to answer design questions.  

Point: State the solution in plain terms. 
Reasons: Follow up the solution by detailing your case — and include any data or insights that support your solution. 
Example: In addition to objective data and insights, drive your answer home by contextualizing the solution in a real-world example.
Point: Reiterate the solution to make it come full circle.

Design?
Top System Design Interview Questions and Answers
FAQs
Conclusion
Top System Design Interview Questions to Help You Crack Your Dream Job
By Simplilearn
Share This Article:
Last updated on Sep 7, 20255421
Top System Design Interview Questions to Help You Crack Your Dream Job
An interview can be a piece of cake or the toughest climb if you do not plan and prepare well. To prepare well in a tech interview or, per se any interview, all one needs is the right set of questions along with the perfect answers to shine. Apart from the confidence, you need the right answers that the interviewer will appreciate. 

What is System Design?
System design is the process of designing and defining the interface, modules, and data for a system to meet certain specified requirements. System design helps achieve organizational goals and objectives along with regular upskilling of the individual activities. 

People are nervous about changes as change disturbs the status quo, but you need not worry as the system design interview questions discussed in this article will help you easily crack your dream job related to system design.

Tech companies are obsessed with system design interview questions as it assists them in deciding the core potential of a candidate well-suited for the job. Basics should always be kept in mind; thus, preparing the basic design principles and planning answers might provide an edge to you during the interview. 

Top System Design Interview Questions and Answers
1. What is system design?
The process of defining the elements of a system, such as architecture, product designs, modules, interface, and the data for the system dependent on pre-defined observations. The application of systems theory to product development is one of the applications of systems design in real life. 

2. What is load balancing, and why is it important in system design?
The distribution of traffic across multiple servers simultaneously in a server farm as a core-networking solution is termed load balancing. Load balancers play a significant role in system design as they allow easy traffic flow without any server overload. They improve application availability by managing traffic efficiently, enabling quick response and less lag time.

3. How are performance and scalability related to each other?
The ability to handle a large amount of traffic in any application is referred to as scalability, whereas performance is about testing the speed with which the application is running. The increased performance is directly proportional to the number of resources added to the system. The ability to handle larger data sets in the event of growing work makes scalability directly related to the performance of any design. Performance problems might affect just one user, whereas the system might eventually become slow in case of scalability issues due to heavy data load.

4. How do you approach system design?
To perfectly design any system, the following things must be kept in mind-

The system should be robust, re-usable, and well-documented.
It should be user-friendly and helpful to people.
The system should be well-ranked and placed well based on the reviews of the users.
The system can store user data for further inquiry depending upon the area's population density.
The design process should be smooth and avoid any complications.
5. Which is the primary tool for structured design?
Structure chart is the primary tool for structured design as the chart helps in conceptualizing the problem into simple graphed charts containing various organized elements. A picture or a chart is easier to understand than written data; therefore, pictorial representation in the form of a chart is necessary. 

6. In the system design process, what is meant by requirements determination?
It is the basic review exercise that helps study the improvements required in the existing system by doing a detailed study of the existing process. Requirements determination helps the designer beware of any faults and provides remedies to resolve any deficiencies in the design process.

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
Here's what learners are saying regarding our programs:
Wayne RyanWayne RyanWeb Developer, Smith Drug Company
The program helped me bridge the gap between traditional software development knowledge and modern industry practices. I gained hands-on exposure to technologies like Docker, DevOps, and application architecture, which improved my problem-solving skills and helped me contribute more effectively to real-world development challenges at work.

John Carlo ApelacioJohn Carlo Apelacio
The program has boosted my confidence and made my goal of becoming a software engineer feel achievable. The structured learning and hands-on practice gave me clarity and direction. I’m now focused on building skills, gaining experience, and steadily working toward a long-term career in software engineering.

Not sure what you’re looking for?View all Related Programs
7. What are the types of documentation in system design?
The types of documentation required in system design are-

Requirements documentation
Source code documentation
System documentation
Program documentation
Quality Assurance documentation
Software architecture documentation
Operations documentation
Users documentation
8. Can you name some metrics for measuring system performance?
Some of the key application metrics to measure system performance are-

User satisfaction/ Apdex scores
Average response time
Throughput analysis
Availability of the system
Error rates
Request rate
Latency and Server CPU checking
Garbage collection by the system 
9. What are the various consistency patterns available in system design?
With the use of multi-servers, the demand for consistency increases rapidly due to increased system users. But it is difficult to write data to different servers. With multiple and repetitive tasks of writing data to multiple servers, consistency should be ensured while data is written to each server. 

The various consistency patterns in system design are-

Eventual Consistency- Under this pattern, after every data is written, the reads will be seen eventually within milliseconds. DNS and emails are a perfect example of such a consistent pattern in real life.
Strong Consistency- When data is written, readers will see it under this pattern. There is synchronous replication of data, often referred to as a strict consistency pattern. RDBMS and file systems run under this pattern.
Weak Consistency- Under this pattern, after every write, the reads may or may not see it. Different nodes can return different values, and weak consistency is not bound by rules, unlike strong and eventual consistency. Real-time uses like video chat, VoIP, real-time multiplayer games, etc., run on a weak consistency pattern, as the users might not receive the information for a while due to system failure or other connected factors that might affect the functioning. 
10. How do you design a recommendation system?
Recommendation systems are helpful to the users as they help them find the best alternatives and thereby increase efficiency by allowing more choices to the people. A recommendation system is majorly designed based on the popularity of the products amongst the users. 

Systems that contain the desired features and are free from common problems faced by the users are some major qualities to be kept in mind whilst designing a recommendation system.

11. What are the critical aspects of the system study?
System study is vital for developing any system. The three essential aspects of system study are as follows:

Identification of issues and defining new goals
Survey of the existing system
Document the existing system
12. What is the difference between Horizontal and vertical scaling?
Horizontal scaling adds more computers to the network, including memory workload and processing across a distributed network and devices. In layman's terms, additional servers are added to the existing count, and the workload is distributed across devices for efficient processing.

Vertical scaling is the process of upgrading the resource capacity by increasing RAM, adding processors, etc. It can help improve the capability of the server without a code change.

Category

Horizontal Scaling

Vertical Scaling

Load Balancing

Load balancing is required for distributing the traffic across multiple locations

Load balancing is not applicable 

Failure Resilience 

Application failure resistant, traffic is rerouted to other servers in case of a server failure.

It is prone to failure as the dependency is on one machine. Any loss here will fail the entire application.

Machine Communication

As this involves multiple machines, it's necessary to have network communication

It involves interprocess communication within the machine, making this faster

Data Consistency

The possibility of data inconsistency is higher because this involves different machines for handling other requests, which might result in data being out of sync.

As vertical scaling involves only one machine, there is no problem with data inconvenience

Limitations

As this scaling requires multiple servers, this has a direct impact on budget and space. You can scale the application as per the business need

If the resources are scaled up over the limit, then the application might crash and result in downtime

13. How will you design an application programming interface rate limiter?
A service to be designed or a tool developed to monitor the request per a window of time a service agrees to allow. If the bid exceeds the rate limit blocks all the additional calls. In addition to the above, the following points will have to be considered while implementing the API rate limiter (Github):

Consider limiting the request sent to API in a defined time, i.e., the number of requests per second
The APIs are available over a group of servers; hence rate limiter should work for a distributed setup
Handling of Soft and hard throttling also should be thought through
14. How do you design a web crawler like Google, and what points to be considered while designing the crawler?
In this case, a web crawler identifies a website and crawls indexes and page links so these can appear in the Google search result.

These crawlers should be designed to search a specific file in a set of directories, which involves time and research. You will have to consider finding a new web page to have a better crawler. You should prioritize the dynamic changing web page, and the crawlers shouldn't be boundlessly attached to the same domain.

15. Differentiate between sharding and partitioning.
Sharding is the practice of splitting a single dataset among many databases and storing these in multiple workstations. The system storage capacity can be increased by dividing the larger datasets into smaller parts and stored in many data nodes. Shared databases can accept more requests than a single system by dividing the data among multiple machines. 

Partitioning is the practice of separating sorted database objects into distinct portions. You can improve the performance, controllability, and availability by partitioning an extensive database. Partitioning can enhance performance when accessing a partitioned table in specific instances. 

Sharding
Partitioning
Sharding is otherwise called horizontal partitioning. 

A partition is a logical database split into separate, independent portions. The partitioning of databases is commonly used for load balancing, performance, manageability, and availability

Increased Read/Write throughput – Dataset distributed across several shards increases the capacity

Partitioning includes the benefit of vertical partitioning as well as involving dividing the scheme of the database

Increased storage capacity – Increasing the shards allows scalability, directly impacting high storage capacity

High availability – If the entire shards go down, the database remains partially functional.

«Netflix за 45 минут»: что ждать на system design-интервью + подборка полезных ссылок

Интервью по system design – это один из этапов собеседований известных технологических компаний, на котором отсеиваются многие кандидаты. Итак, что это такое и как пройти интервью такого типа?

Что это такое
В современном мире ИТ-системы стали крайне сложными. Каждая новая «фича» в продукте должна соответствовать множеству требований, всегда есть ограничения, между которыми приходится балансировать инженерам. То, что для обычного пользователя выглядит супер-просто – как например, отправка поискового запроса через Google или Яндекс – на самом деле несет в себе огромный уровень сложности.

Отличие интервью по проектированию систем от обычных технических собеседований в том, что здесь от кандидата ждут не четких ответов на вопросы по структурам данных и алгоритмам. Как правило задачи на этом этапе таковы, что для них не существует однозначно верного или неверного решения, они провоцируют мыслительный процесс – именно в нем и раскрывается кандидат.

Грубо говоря, интервью по system design – это что-то типа сессии мозгового штурма, где человек мыслит вслух, перебирает возможные решения и анализирует недостатки каждого из них в режиме реального времени. В этом трудность, но и главный плюс – мыслительный процесс здесь важнее результата. Как правило, такие интервью проводят крупные компании, разрабатывающие масштабные системы (FAANG и подобные).

Как же проходить интервью по проектированию систем? Ниже – несколько практических советов.

Самое важное – четко разобраться с задачей
Поскольку в интервью по system design самое важное – это то, как вы решаете задачу, крайне важно на самом первом этапе четко ее для себя уяснить. Бывший инженер Microsoft и Facebook в своей статье на практическом примере показывает важность этого факта.

Обычно задача звучит примерно как «Как бы вы спроектировали Netflix за 45 минут?» На первый взгляд, такие вопросы – полный бред. Подобные масштабные системы проектируют и реализуют сотни и тысячи инженеров на протяжение многих лет. Сорока пяти минут будет недостаточно даже чтобы начать обсуждать хоть один из компонентов такого продукта!

Как раз здесь очень важно понимание задачи. Нужно понять, чего хочет интервьюер. А он очевидно хочет, чтобы ему:

дали ответ формата «обзор с вертолета» всей системы,
затем разложили ее на компоненты
описали, зачем нужен каждый из них (вычислительный центр, хранение данных, фронтенд, бэкенд, кеширование, работа с очередями, нетворкинг и балансировка нагрузки и т.п.)
<a href="https://api.vc.ru/v2.8/redirect?to=http%3A%2F%2Fsystem-design-primer%2F&postId=226019" rel="nofollow noreferrer noopener" target="_blank">system-design-primer</a>
system-design-primer
На каких-то из этих компонентов можно остановиться чуть подробнее – вам укажут на это, или нужно будет спросить. Обычно на интервью по проектированию систем даже код писать не нужно, а если вы сразу углубитесь в технические дебри, без того, чтобы сначала обсудить всю систему в целом – это будет минусом.

Задавайте уточняющие вопросы
Главная цель интервью по проектированию систем – дать кандидату возможность продемонстрировать свои знания и опыт. Как уже было сказано выше, нет правильных и неправильных ответов. Гораздо важнее не решить задачу как таковую – тем более, что это может быть просто невозможно за отведенное время – а показать свой мыслительный процесс во всей красе.

Поэтому крайне важно задавать вопросы, даже если вдруг получилось так, что вы четко знаете ответ на поставленный вопрос. В такой ситуации не нужно просто писать решение задачи, это противоречит целям интервью. Нужно забыть известное решение, и начать искать новое, по ходу дела задавая вопросы.

Это позволит интервьюеру понять сразу несколько вещей:

как кандидат подходит к оценке задачи?
оценивает ли он сразу возможные ограничения и узкие места системы?
продумывает ли сразу оптимизацию решений и обход ограничений?
В этой статье инженер Twitter, поделился своим опытом прохождения интервью. В частности, он дал хорошее описание того, как надо задавать вопросы. Представим, что на интервью вам дали задание спроектировать коробку. Больше никакой информации сходу не дают.

Вопросы могут быть такими:

Что точно должна уметь делать система (сколько предметов влезает в коробку, каковы они по размерам)?
Кто целевая аудитория продукта?
Каковы ожидания пользователей продукта?
Ответы на них позволят понять, что нужно создать желтую коробку с нарисованным на ней смайликом, в которую поместится хотя бы один теннисный мяч. Однако, мяч не совсем обычный – его радиус составляет полметра, а вес около 1 кг. Коробку будут просто переносить, держа за дно, так что ручки на ней не нужны.

Информации стало заметно больше, теперь уже можно думать о решении такой уточненной задачи.

freecodecamp.com
freecodecamp.com
Не пытайтесь произвести впечатление
Частая ошибка на интервью по проектированию систем – многие кандидаты думают, что раз на этом этапе нужно работать на уровне абстракции, то достаточно будет накидать в ходе разговора крутых терминов и названий модных технологий, чтобы сойти за эксперта. Так это не работает.

Во-первых, на интервью по системному дизайну наверняка будет не просто рекрутер, а инженер, который ищет человека себе в команду. Такому человеку недостаточно просто услышать слова вроде No-SQL, Mongo DB и Hadoop. Он явно начнет задавать уточняющие вопросы, и если у вас на самом деле нет особого опыта в работе с упоминаемыми технологиями, это все очень быстро станет ясно.

Будьте честными
Интервью по проектированию систем – это как раз тот случай, когда не страшно чего-то не знать наверняка. Поэтому ответы вида «Я с этой конкретной технологией никогда не работал, но знаю, что ее часто используют для решения подобных задач» – это хороший вариант. Помимо честности, здесь кандидат показал определенные знания и дал интервьюеру понять, с чего он начнет решение задачи (попробует известное решение, если не получится, будет «копать» дальше).

Помимо этого, не стоит выдавать свое решение за идеальное и не содержащее никаких минусов. Ограничения есть всегда, и опытный инженер-интервьюер это понимает как никто другой. Поэтому в ходе интервью стоит честно говорить о том, что в решение есть такие и такие узкие места, но их можно попробовать обойти таким и таким способом, использовать дополнительные инструменты или провести еще больше исследований.

Так станет понятно, что кандидат не просто придумывает решение и затем жестко пытается его продавить, но может быть гибким, вносить корректировки, и вообще адекватен и понимает, что всегда можно сделать лучше.

Вот прекрасный вымышленный диалог на интервью по проектированию систем, который показывает, как НЕ надо делать:

Интервьюер: Давайте сделаем свой Twitter. Как вы будете хранить твиты?

Кандидат: Я использую NoSQL-базу MongoDB.

Интервьюер: Почему не MySQL?

Кандидат: СУБД не масштабируются. Для нашей задачи точно понадобится MongoDB или BigTable.

Интервьюер: Но мы тут в Twitter храним все твиты в MySQL, все нормально масштабируется.

Кандидат: Ну, тогда, возможно, у вас просто еще пока недостаточно большой объем. По-настоящему огромные системы типа Facebook используют NO-SQL.

Интервьюер: Но Facebook также использует MySQL.

Кандидат: Хм, не знаю, как они его масштабируют, надо разобраться. Возможно, у них MySQL только на фронтенде, а на бэке BigTable.

Интервьюер: Неважно. А где будем хранить аналитические данные?

Кандидат: Очевидно, что в MySQL.

Интервьюер: Но не слишком ли их много для MySQL? Сейчас у нас для этого HDFS.

Кандидат: Похоже, что вы начали разрабатывать Twitter еще до того, как MongoDB достаточно развился. MongoDB может легко вместить и твиты и аналитические данные.

Интервьюер: Супер, спасибо за ваше время. Было приятно пообщаться.

Как подготовиться к интервью: полезные ссылки
Несмотря на то, что проектирование систем – один из наиболее нечетких этапов интервью, к нему можно подготовиться. В помощь кандидатам мы собрали список полезных материалов:

Anatomy of a System Design Interview
How NOT to design Netflix in your 45-minute System Design Interview?
Crack the System Design interview: tips from a Twitter software engineer
Бесплатный курс по системному дизайну на английском
Подборка из 50+ источников по system design
Как успешно пройти интервью по проектированию ИТ-систем: Чего ожидать и как готовиться
Чтобы попасть на интервью в компании, где инженеры действительно проектируют масштабные системы, используйте бота @g-jobbot. Это сервис, который найдет и бесплатно пришлет вам прямо в Telegram вакансии, которые подходят вам лучше всего — в том числе удаленная работа, в том числе с релокацией.

Собеседование по System Design: как запроектировать и не потеряться
Новости 1С-Битрикс
Полезные статьи
Моя цель - предложение широкого ассортимента товаров и услуг на постоянно высоком качестве обслуживания по самым выгодным ценам.

alice.yandex.ru
Реклама
Летняя портативная колонка — Яндекс Станция Стрит
Виртуальный ассистент с вами в движении. Берите любимую музыку куда угодно
Колонки Яндекс
Бесплатная доставка
Оплата частями
AI-ассистент

Узнать больше
Привет! Меня зовут Дмитрий. Я архитектор решений в крупной российской компании, более 15 лет проектирую, пишу код и руковожу командами. Сотрудничаю с Практикумом как ревьюер курса по Java и как автор курса «Архитектура программного обеспечения».

Предположим, вы решили развлечься дизайном систем (System Design), пусть даже и не добровольно, на собеседовании. Если компания поленилась поделиться рабочим контекстом, то задача может быть в формате «запроектируй Твиттер». Более кандидатоориентированная компания N может попросить «спроектируй поиск на сервисе N».

Хотя статей типа «как запилить Твиттер» довольно много, не все помогут сориентироваться на реальном собеседовании. В этой статье предлагаю покопать вглубь и составить чек-лист, некий алгоритм. Он будет чуть шире, чем принято «для Твиттера», хотя универсальным его сделать не получится. Мне эта схема помогала и помогает и проводить собеседования, и самому их проходить, хотя у каждого свои фишки и предпочтения. 

Сразу скажу, всё, что будет ниже, — не идеальная архитектура, но на интервью она никому особо и не нужна. Обычно важнее понять, как мыслит человек и сможет ли он в будущем за разумное время и с наличием информации создать конфетку из… доступных ресурсов компании.

Начало интервью и вводные данные
Василий пришёл на собеседование. Скорее всего, у него есть час на всё. На сам дизайн минут 40, а остальное время — на вопросы по нему. Бывает, вопросы идут в процессе, тогда время отъедается и может даже не хватить. В идеале ему бы дойти до законченного варианта с картинкой и ответить на большинство вопросов, которые хотели у него спросить. Итак, отсчёт пошёл.

Задача: спроектировать сервис покупки подарков. Этот сервис должен помочь со знакомой многим ситуацией: перед днём рождения коллеги выбирается ответственный, ему скидывают деньги, он что-то покупает, а потом надо решать, что делать со сдачей. 

Условия: сервис будет находиться на большом маркетплейсе, где можно найти всё: от цветов до Теслы. Любые зарегистрированные пользователи могут положить деньги в копилку, она будет доступна всем, кто скинулся. После сбора необходимой суммы её потратят на выбранные товары. После покупок и закрытия копилки сдача должна вернуться кэшбеком маркетплейса на счета пользователей.


Всё это — бизнес-требования. Требования могут быть функциональными и нефункциональными, их нужно уточнять. Обычно тот, кто дает задачу, надевает «шапочку продакта» и готов отвечать на вопросы. 

Функциональные требования
Василию нужно уточнить функциональные требования: как бизнес видит работу системы и как работает текущая архитектура. Он должен зафиксировать, что есть сейчас, и, в идеале, накидать high-level архитектуру, то есть общий набросок будущей системы.

Бросаться сразу рисовать «как будет» — не очень хороший вариант. Скорее всего получится не то, что хотел получить «продакт», и часть требований будет потеряна.

Ему следует задать вопросы, а если на что-то ответить не могут, пофантазировать вслух. Очень важно при проектировании вести встречу и задавать вопросы, а не ждать, что это сделает интервьюер. Вопросы, которые можно задать:

Какие ещё сервисы есть?

Сколько DAU предполагается?

Какие планы по развитию?

Какие сроки на реализацию?

И любые другие, какие ещё придут в голову по бизнес-контексту.

Уточненные данные: у проекта есть биллинг, сервис пользователей, каталог товаров, поиск, сервис логистики, интеграции с партнерами, корзина, сервис кэшбека и промоакций, аналитики, сам сайт. 

Сейчас дневная аудитория в среднем 200 тысяч уникальных пользователей, и это количество будет только расти. Всего пользователей — 1 млн. Прогнозов, сколько будут покупать подарков, нет. Опросы пользователей показали, что фича будет востребована. Хочется в ближайший квартал выпустить её в прод на часть пользователей.

Теперь нужно сделать схему и отобразить в ней данные. Так Василию будет проще ориентироваться в ландшафте и дальше задавать вопросы. Очень красиво делать не надо: достаточно наброска, чтобы синхронизироваться и подтвердить, что они с «продактом» друг друга поняли. Бывают случаи, когда кандидат долго вырисовывает стрелочки, но не успевает закончить все остальное, — так делать не надо.

При этом никто не ждёт, что он отобразит весь контекст верно и до последней детали. Например, «продакт» осознанно пропустил банк и склады как не особо важные для текущей задачи. А ещё добавил в контекст лишнюю информацию, вроде интеграций с партнерами  и поиска.

High-level архитектура сервиса
High-level архитектура сервиса
Нефункциональные требования
Теперь необходимо узнать подробности по нефункциональным требованиям к сервису. Интервьюер надевает «шапочку СТО/Архитектора/Начальника» и готов отвечать на вопросы. Василий может спросить: 

Есть ли данные по текущему RPS?

Какие требования ко времени ответа?

Какие требования к надежности?

Уточнённые данные: текущий RPS на сервис — 1000, время ответа нового сервиса не должно превышать 200 мс, а надежность должна быть 99.9. 

Всё это нужно зафиксировать. 

Время на знакомство, получение задачи и археологию по обоим видам требований — ≈15 минут.

API и интеграции
Кто-то начинает на этом этапе собирать уже схему архитектуры «как будет». Рано. Нарисовать недолго, но сначала лучше пройтись по интеграциям и API.

Исходя из задачи, у пользователя должна быть возможность производить с копилкой следующие действия: 

создать, 

закрыть, 

редактировать, 

получить ссылку, 

получить одну копилку или список.

Для создания копилки понадобятся: название, описание, крайняя дата, картинка. 

Для редактирования — те же данные, как при создании, плюс идентификатор. 

Для закрытия, получения ссылки и получения конкретной копилки или списка — идентификатор.

С данными для API Василий разобрался, вроде всего пока хватает и ничто не противоречит требованиям. 

Не менее важный момент — выбрать протокол взаимодействия (способ тут очевидно синхронный, который можно вызвать асинхронно из JS, например). Его выбирают из текстовых и бинарных. 

Тут Василий должен спросить раздвоенную личность «продакта-СТО», что сейчас в маркетплейсе применяется. Ну странно же тащить gRPC, если нет жёсткой потребности, и везде сейчас обычный стиль REST с JSON`ом. 

Когда он узнает все данные, он взвешивает плюсы и минусы, при этом вслух объясняет свой выбор. В 99% случаев вполне подойдет HTTP со стилем REST и  JSON`ом на сдачу, но лучше явно проговорить этот момент. Пример описания API:

/code
GET /giftmoneybox  — получить список согласно авторизации пользователя
GET /giftmoneybox/{giftmoneybox_id} — получить конкретную копилку
POST /giftmoneybox — создать копилку
application/json
{
      “title”,
      “description”,
      “edge_date”,
      “image_link”  
}
/code

Василий может пояснить, например, почему вместо base64 у него ссылка на картинку (скорее всего, его и так спросят, но лучше занять роль «ведущего»). Дело в том, что вряд ли сервис будет хранить много изображений в базе данных, да и вообще как-то не очень хранить их там. Скорее всего, всё равно будет внешнее хранилище, поэтому логичнее использовать ссылку. Ограничение на картинку можно поставить до 1 мб.

Будут ли ещё какие-то интеграции тут? Как будто пока не видно.

Время на API — 5—10 минут.

Жизненный цикл данных
Всё ещё рано рисовать, пока имеет смысл поговорить про данные. Начать лучше с фиксации списка данных сервиса. В контексте задачи нас не особо интересуют сервисы пользователей, корзины и подобные — они просто есть. Или их уже доработают в процессе запуска. Хотя хороший архитектор должен подумать и о них тоже, но пока что Василий на интервью :)

Данные сервиса:

  id — идентификатор, например числовой;

  title — название, просто текст, 150 символов;

  description — описание, 1024 символа;

  edge_date — крайняя дата, метка времени;

  image_link — ссылка на картинку, 256 символов;

  status — закрыто или открыто, bool.

Связи: так как пользователь может входить в разные копилки других пользователей или создать несколько своих, здесь подойдёт стандартная «многие-ко-многим». Что выбрать для хранения? Кажется, обычная реляционка и пара таблиц решат проблему. Тут опять наступает момент — ну, вы поняли — выбора. 

Василий выбрал PostgreSQL в качестве системы управления БД. Для этого он вспомнил разные продукты и оценил их по критериям:

как ведет себя под нагрузкой,

лицензия,

ресурсы,

масштабируемость,

техническая политика компании.

Он объяснил, что PostgreSQL поддается репликации достаточно легко, шардированию — уже чуть с бубном. Это продукт с открытой лицензией, а к ресурсам он не особо требователен (ну когда как), если не забивать один сервер терабайтами. 

Интервьюер сам скажет, насколько продукт подходит политике компании, если не сказал это ранее, и, возможно, попросит выбрать что-то другое. После этого он может задать несколько вопросов. Например:

Что будет с индексами для данных?

Какой алгоритм индексации будет?

Когда и по какому ключу будешь шардировать?

Тут все зависит от знаний Василия и глубины копания интервьюером. Например, если данных будет много, есть смысл шардировать по идентификатору. По названию — не уникально, по дате может быть перекос, остальное весьма специфично.

Таблицы в базе данных
Таблицы в базе данных
Время на данные с вопросами — ≈10 минут.

Схема архитектуры
Настал звёздный час — теперь уже можно рисовать схему архитектуры «как будет». Теперь Василий отрисовывает сервис, который создаёт и всю окружающую обвязку: хранилище для изображений, БД и всё, что ещё посчитает нужным. В процессе он рассказывает, что именно делает и почему.

Например, он рисует S3-подобное хранилище и говорит: «Отлично подходит для хранения изображений, есть API, …». И говорит, что выбрал MinIO, потому что у него открытая лицензия, его можно легко развернуть внутри и масштабировать. Очень хорошо, если прямо в процессе или сразу после он будет рассказывать и про отказоустойчивость. 

Показатели надёжности Василий узнал ещё в самом начале, поэтому он может смело размещать сервисы по ЦОДам, от трёх и больше. Попутно рассказывать, почему именно от трёх ЦОДов, как будет происходить переключение в случае аварии. Если данных много, он может тут же поговорить про геошардирование, если клиенты размазаны по географии, и как лучше выбрать CDN.

Постепенно собирается полная схема, по которой у интервьюера будут ещё вопросы. Сейчас на ней сервис (несколько экземпляров), кластер кэша для «горячих» копилок, кластер БД и кластер MinIO. 

Аутентификацию тоже можно смело добавить и как раз рассказать, что по id пользователя можно получить его копилки, по id копилок — всю информацию о них. И всё это передать корзине при выборе способа оплаты. А сервис разместится, конечно, в Kubernetes, если он есть :)

Схема архитектуры «как будет»
Схема архитектуры «как будет»
Время на приложение — ≈15 минут.

Расчёт ресурсов и финальные штрихи
В самом конце Василию стоит посчитать, сколько места потребуется с запасом на 3—5 лет. Если явно не обозначен потенциал роста и количество пользователей, есть повод пофантазировать: пусть аудитория будет расти на 20% в год, и 30% от неё будет пользоваться копилкой. 

Грубо считаем количество копилок:

1 год: 1 000 000 (пользователи) * 30% (сколько будут пользоваться)  = 300 000

2 год: 1 200 000 (пользователи) * 30% (сколько будут пользоваться)  = 360 000

3 год: 1 440 000 (пользователи) * 30% (сколько будут пользоваться)  =  432 000

Всего копилок за 3 года: 1 092 000

Всего изображений: 1 092 000 Мб (1 Мб на картинку, 1 картинка на копилку)

Чтобы посчитать данные, Василий сделает предположение, что на одну копилку приходится в среднем 10 пользователей. Объём данных в gitbox:

id — 8 байт,

title — 150 байт,

description — 1024 байта,

edge_date — 8 байт,

image_link — 256 байт,

status —1 байт.

Итого: 8 байт + 150 байт + 1024 байта + 8 байт + 256 байт + 1 байт = 1447 байт

В gitbox_users, с учетом средних 10 пользователей: 8 байт + 8 байт = 16 байт *10 = 160 байт


Итого одна копилка: 1447 байт + 160 байт = 1,57 Кб

Финальный расчёт на три года: 1 092 000 * 1.57 = 1,6343258321285248 Гб — именно столько места понадобится будущим копилкам. Не очень много, можно пока обойтись без шардов.

В виде экзотики Василий может подумать, сколько процессоров понадобится. Например, сделать о-о-очень грубое предположение, что сейчас из 1000 RPS основного сервиса на копилки придётся 300 RPS (30%). Каждый запрос к основному сервису — 200 мс, а тут пусть будет не более 30 мс.

Формула для расчёта: RPS=X∗(1/(TD/1000)

Где X — количество ядер, TD — время отработки запроса (ms), 1000 — количество миллисекунд в секунде.

300 = ? ядра * (1/(30мс/1000))

Финальный расчёт: X = 300/(1/(30мс/1000)) = 9 ядер

Остались финальные штрихи: мониторинг, логи и трейсы, чтобы было совсем всё красиво. Василий добавляет их на схему, называет технологии: например, Prometheus, Grahana для мониторинга и графиков, ELK Stack для логов и Jaeger для трейсинга.

Время — всё, что осталось.


Вот теперь схема выглядит законченной. Василий жмёт руку всем «шапочкам» и ждёт фидбэк.

Финальный чек-лист
▢ Получить задачу: смесь неполных функциональных и нефункциональных требований.

▢ Задать вопросы «по бизнесу», которые помогут понять функциональные требования.

▢ Создать high-level архитектуру, набросок текущего состояния.

▢ Уточнить нефункциональные требования.

▢ Проработать контракты и интеграции.

▢ Проработать данные.

▢ Проработать архитектуру приложений и отказоустойчивость.

▢ Продумать ресурсы инфраструктуры.

System Design Interview Questions and Answers
Last Updated : 27 May, 2026
System Design is a key part of technical interviews at top tech companies, testing a candidate’s ability to build scalable, reliable, and efficient systems. It includes both Low-Level Design (LLD) and High-Level Design (HLD), making it important for freshers and experienced professionals targeting backend or system design roles. This article provides 100 curated System Design interview questions, including 50 LLD and 50 HLD questions.

Covers frequently asked System Design interview questions, including both Low-Level Design (LLD) and High-Level Design (HLD).
Useful for both beginners and experienced developers to understand key concepts.
Helps in quick revision and effective interview preparation.
system_design_applications.webpsystem_design_applications.webp
Low Level Design(LLD) Interview Questions
Low-Level Design (LLD) is a crucial phase in software development that involves turning high-level architectural designs into implementable modules.

1. What is the purpose of Low-Level System Design in software development?
Low-Level System Design (LLD) is the process of converting a high-level system design into detailed and implementable components that define how the system will actually work at the code level.

It focuses on designing class structures, object relationships, APIs, and internal logic of the system before coding begins.

Removes ambiguity by clearly defining how each module behaves and interacts
Ensures the system is scalable, maintainable, and aligned with the overall architecture
Example: Designing a Parking Lot system where you define classes like Car, ParkingSpot, and ParkingLot, along with their relationships and responsibilities.

2. How does database indexing optimize query performance?
Database indexing is a technique used to speed up data retrieval by creating an additional data structure that allows the database to find rows efficiently without scanning the entire table.

It improves query performance by using structures like B-Trees, Hash Indexes, or Bitmap Indexes to quickly locate the required data.

Improves SELECT query performance by enabling fast lookups instead of full table scans
Reduces disk I/O and supports efficient filtering, joins, and range queries
Example: In a user table, creating an index on the user_id column allows the database to directly locate a specific user record without checking every row in the table.

structure_of_an_index_in_database
3. What are the four pillars of Object-Oriented Programming (OOP)?
The four pillars of OOP are the fundamental concepts used to design modular, reusable, and maintainable object-oriented systems.

These principles help developers organize code efficiently and model real-world entities in software applications.

The four pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism
They improve code reusability, flexibility, security, and maintainability in software systems
Example: In a banking application, inheritance allows different account types to share common features, while polymorphism enables different transaction behaviors using the same method interface.

4. Why is concurrency control important in multi-threaded systems?
Concurrency control ensures that multiple threads can safely access and modify shared resources without causing data inconsistency or unexpected behavior.

It prevents issues like race conditions, deadlocks, and corrupted states by managing how threads execute critical sections of code.

Maintains data integrity by controlling simultaneous access to shared resources
Ensures system reliability and correctness under parallel execution
Example: In a banking system, concurrency control ensures that when two users try to withdraw money from the same account at the same time, the balance is updated correctly without losing any transaction.

5. What are UML Behavioral Diagrams?
UML Behavioral Diagrams represent the dynamic behavior of a system by showing how objects interact and how the system changes over time in response to events.

They focus on system flow, interactions, and state changes rather than static structure.

Model how different components interact and respond during execution
Help visualize system behavior, workflows, and state transitions clearly
Example: A sequence diagram for a login system shows how the user request flows from UI -> authentication service -> database and back as a response.

uml_diagrams
6. How do you model a sequence diagram for a user login process in UML?
A sequence diagram for login shows how different components interact in a time-ordered flow when a user tries to authenticate into a system.

It captures the sequence of messages exchanged between the user interface, backend services, and database.

Represents interaction flow between User, Login Controller, Authentication Service, and Database
Shows step-by-step message passing for authentication and response generation
Example: User enters credentials -> Login Controller sends request to Authentication Service -> Service verifies data with Database -> Database returns result -> response is sent back to the User (success or failure).

7. How would you model the behavior of a system using a state diagram in UML?
A state diagram in UML is used to represent how an object changes its state over time based on different events or conditions.

It defines the lifecycle of an object by showing all possible states and the transitions between them.

Represents object states and transitions triggered by events
Helps model lifecycle behavior of entities like orders, payments, or sessions
Example: In a payment system, the transaction moves through states like Pending -> Processing -> Completed or Failed based on events like payment success or failure.

8. What factors influence the choice of appropriate data structures in Low-Level System Design?
The choice of data structures depends on the system requirements such as performance, memory usage, and access patterns.

It is important to select the right structure to ensure efficient operations and scalable system behavior.

Depends on access patterns, time complexity requirements, and memory constraints
Must consider concurrency, scalability, and specific use-case requirements
Example: A caching system typically uses a HashMap for O(1) lookups, while a messaging system uses a Queue to maintain order of message processing.

9. When designing a database schema, what are the benefits of normalization?
Normalization is the process of organizing database tables to reduce redundancy and improve data consistency.

It ensures that data is stored in a structured way, making the database more efficient and easier to maintain.

Eliminates data redundancy and avoids duplicate data storage.
Improves data integrity and makes updates, inserts, and deletes more reliable.
Example: Instead of storing customer details in every order record, normalization separates Customers and Orders into different tables, linking them through a customer ID to avoid duplication.

10. How do you design an efficient logging and monitoring system for a complex application?
An efficient logging and monitoring system ensures observability of the application by capturing logs, metrics, and alerts in a structured and centralized way.

It helps in debugging issues, tracking performance, and proactively detecting system failures.

Uses structured logging with log levels and centralized log aggregation for better traceability
Implements monitoring dashboards and alerting systems to track metrics like latency, CPU usage, and errors
Example: In a microservices-based system, each service logs events with a correlation ID, which is then used in tools like ELK Stack or Grafana to trace a request end-to-end and monitor performance issues.

11. What is tight coupling and why should it be avoided in Low-Level Design?
Tight coupling occurs when classes or modules are highly dependent on each other, making changes difficult and reducing system flexibility.

In LLD, loose coupling is preferred because it improves maintainability, scalability, and testability.

Tight coupling makes code harder to modify, reuse, and unit test
Loose coupling can be achieved using interfaces, abstraction, and dependency injection
Example: If a PaymentService directly creates a PayPal object internally, switching to another payment provider becomes difficult without modifying the service code.

12. What are Design Patterns? Explain their importance in software development.
Design patterns are standardized and reusable solutions to common software design problems that occur in object-oriented system design. They provide a proven way to structure code for better design and maintainability.

They are important because they help developers build systems that are cleaner, more flexible, and easier to scale and maintain.

Provide a common design language that improves consistency among developers
Improve maintainability, scalability, and flexibility of software systems
Example: Using the Factory Pattern in a payment system allows the application to create different payment methods (UPI, Card, Wallet) without changing the core business logic.

what_is_design_pattern_.webp
13. Can you explain the Singleton Design Pattern and its use cases?
The Singleton Pattern ensures:

A class has only one instance.
It provides a global access point to that instance.
client_1
Implementation (in Java-like pseudocode):


class Singleton {
    private static Singleton instance;
    private Singleton() {} // private constructor
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
Use Cases:

Database connection pools (only one shared instance).
Configuration managers (centralized global config).
Logging services (consistent, global logging mechanism).
Note: Overuse can introduce global state -> harder to test and maintain.

14. What is the Observer Design Pattern? How would you implement it in a real-world scenario?
The Observer Design Pattern is a behavioral design pattern where one object (subject) maintains a list of dependent objects (observers) and automatically notifies them whenever its state changes.

It is used to establish a one-to-many relationship so that multiple objects stay updated without tight coupling.

Defines a one-to-many relationship between a subject and multiple observers
Automatically notifies all observers when the subject’s state changes
Example: In a stock market system, when the stock price changes (subject), all registered traders or dashboard applications (observers) are automatically updated with the new price in real time.

observer-design-Pattern
Real-world Scenarios:

GUI frameworks: Button (subject) notifies listeners (observers) on click.
Messaging systems: Publisher sends updates -> multiple subscribers receive them.
Stock trading apps: Stock price change (subject) -> all trader dashboards update (observers).
Pseudocode Example:


interface Observer {
    void update(String msg);
}
class Subject {
    List<Observer> observers = new ArrayList<>();
    void addObserver(Observer o) { observers.add(o); }
    void notifyAll(String msg) {
        for (Observer o : observers) o.update(msg);
    }
}
15. Describe the Factory Design Pattern and when you would use it.
The Factory Design Pattern is a creational design pattern that provides a way to create objects without exposing the exact creation logic to the client. Instead, object creation is handled by a factory method or class.

It helps in centralizing object creation and promoting loose coupling between the client and concrete implementations.

Encapsulates object creation logic and hides the instantiation details from the client
Promotes loose coupling and makes the system easier to extend and maintain
Example: In a payment system, a Payment Factory can create different payment objects like UPI, Card, or Wallet based on user input at runtime without the client directly instantiating those classes.

notificationfactory
When to Use:

When the type of object isn’t known until runtime.
When working with a family of related objects.
To centralize complex creation logic.
Example (Shape Factory):


interface Shape { void draw(); }
class Circle implements Shape { public void draw() {...} }
class Square implements Shape { public void draw() {...} }

class ShapeFactory {
    public Shape getShape(String type) {
        if (type.equals("Circle")) return new Circle();
        if (type.equals("Square")) return new Square();
        return null;
    }
}
16. What is the Strategy Design Pattern?
The Strategy Design Pattern is a behavioral design pattern that allows selecting an algorithm or behavior at runtime. Instead of implementing multiple algorithms inside a single class, each algorithm is defined separately and can be swapped dynamically.

It helps in making the system flexible and avoids tightly coupled or hardcoded logic.

Encapsulates different algorithms into separate strategy classes
Allows switching behavior at runtime without modifying existing code
Example: In a payment system, different payment methods like UPI, Credit Card, or PayPal can be implemented as separate strategies, and the system can choose the appropriate one at runtime based on user selection.

Strategy-design-pattern
17. What is the role of interfaces in Low-Level Design?
Interfaces define a contract that classes must follow, helping different components communicate through abstraction instead of direct implementation dependency.

They are widely used in LLD to build flexible and loosely coupled systems.

Interfaces improve extensibility and allow multiple implementations of the same behavior
They support dependency inversion and make unit testing easier using mocks or stubs
Example: A Notification interface can have different implementations such as EmailNotification, SMSNotification, and PushNotification without changing the client code.

18. Describe the factors influencing the choice of appropriate algorithms in the design of a sorting system for large datasets.
The choice of sorting algorithm for large datasets depends on system constraints such as data size, memory availability, and performance requirements.

It is important to select an algorithm that balances time efficiency, memory usage, and scalability.

Depends on data size, distribution, memory constraints, and performance requirements
Must consider stability, parallel processing capability, and whether data is in-memory or disk-based
Example: For very large datasets that cannot fit into memory, external merge sort is used, while in-memory systems often prefer MergeSort or QuickSort depending on stability and performance needs.

19. In Low-Level System Design, how do you handle versioning and backward compatibility in evolving software systems?
Versioning and backward compatibility ensure that system updates do not break existing clients while allowing the system to evolve safely.

It involves structured API evolution, controlled database changes, and careful rollout strategies.

Uses API versioning and controlled database migrations to manage changes safely
Maintains backward compatibility through gradual deprecation, feature flags, and regression testing
Example: In a REST-based service, /api/v1/users is kept active while /api/v2/users introduces new fields, ensuring older clients continue working without disruption during migration.

20. How would you design a secure authentication and authorization system in a distributed application?
A secure authentication and authorization system ensures proper verification of user identity and controlled access to resources across distributed services.

It combines secure identity management, token-based authentication, and fine-grained access control.

Uses secure authentication mechanisms like OAuth 2.0, JWT, MFA, and password hashing for identity verification
Implements authorization using RBAC/ABAC with centralized identity providers and secure token validation across services
Example: In a microservices architecture, a user logs in via an identity provider, receives a JWT token, and each service validates the token before allowing access based on roles such as admin or user.

21. Why is modular design important in Low-Level Design?
Modular design divides a system into smaller independent modules, where each module handles a specific responsibility.

This approach improves system maintainability, scalability, and ease of development.

Makes the system easier to debug, test, and extend independently
Reduces code complexity by separating responsibilities into smaller components
Example: In an e-commerce application, separate modules for User Management, Inventory, Payments, and Orders allow teams to work independently without affecting other parts of the system.

22. Why is Low-Level Design (LLD) important in software development?
Low-Level Design (LLD) is important because it converts high-level architectural ideas into detailed, implementation-ready modules and components.

It provides a clear structure for developers, reducing confusion during development and improving code quality.

Helps create maintainable, reusable, and scalable code through proper class and module design
Reduces development errors by clearly defining object interactions, APIs, and workflows before coding begins
Example: In a ride-sharing application, LLD defines how modules like Driver, Rider, RideRequest, and Payment interact internally, making implementation easier and more organized for developers.

23. Which data structures are commonly used in Low-Level Design (LLD)?
In Low-Level Design, data structures are selected based on how efficiently data needs to be stored, accessed, updated, or processed within the system.

Choosing the right data structure improves application performance, memory usage, and overall code efficiency.

Commonly used data structures include arrays, linked lists, stacks, queues, hash maps, trees, graphs, and heaps
The choice depends on factors like lookup speed, insertion/deletion operations, ordering, and scalability requirements
Example: A messaging application may use queues for message processing, hash maps for quick user lookup, and graphs to represent social connections between users.

24. What are the important principles to consider while designing a database?
Database design focuses on organizing data efficiently so that it remains consistent, scalable, and easy to manage as the application grows.

A well-designed database improves query performance, reduces redundancy, and maintains data integrity.

Important principles include normalization, proper relationships, indexing, constraints, and choosing suitable data types
The design should also consider scalability, security, and efficient storage for long-term maintainability
Example: In an e-commerce system, separate tables for users, orders, and products with proper foreign key relationships help maintain organized and consistent data management.

25. Explain Object-Oriented Design (OOD) and its importance in software development.
Object-Oriented Design (OOD) is a design approach that models a system using objects, classes, and their interactions to solve real-world problems in a structured way.

It is important because it helps developers build software that is modular, reusable, scalable, and easier to maintain.

Organizes software into classes and objects with clear responsibilities and relationships
Encourages code reusability, flexibility, and easier maintenance through concepts like encapsulation and inheritance
Example: In a banking application, classes such as Account, Customer, and Transaction represent real-world entities and interact with each other to perform operations like deposits and withdrawals.

26. What is Dependency Injection and why is it useful in LLD?
Dependency Injection is a design technique where dependencies are provided to a class from outside instead of being created internally by the class itself.

It helps create loosely coupled and easily testable systems.

Improves flexibility by reducing direct dependency between classes
Makes unit testing easier by allowing mock implementations to be injected
Example: Instead of a UserService creating a Database object internally, the database dependency is injected through the constructor, allowing different database implementations to be used easily.

class_a
27. What are the commonly used UML diagrams in software design?
UML (Unified Modeling Language) diagrams are visual representations used to model the structure and behavior of a software system during the design phase.

They help developers understand system architecture, object interactions, workflows, and component relationships more clearly.

Common UML diagrams include Class Diagrams, Sequence Diagrams, Use Case Diagrams, Activity Diagrams, and State Diagrams
These diagrams help visualize system structure, data flow, object interactions, and user behavior within the application
Example: In a banking system, a Class Diagram may represent entities like Account and Customer, while a Sequence Diagram can illustrate the step-by-step flow of a money transfer process.

uml_diagrams
28. What are code smells and how can they be resolved?
Code smells are indicators of poor design or implementation practices in software code that may not cause immediate bugs but can make the system difficult to maintain, extend, or understand.

They highlight areas where refactoring is needed to improve code quality, readability, and maintainability.

Common code smells include long methods, duplicated code, large classes, tight coupling, and excessive conditional statements
Remedies include refactoring techniques such as modularization, applying design patterns, improving naming conventions, and following SOLID principles
Example: If a single class handles user authentication, payment processing, and notifications together, it becomes a “God Class.” This can be resolved by splitting responsibilities into separate classes following the Single Responsibility Principle.

29. What are the Types of Design Patterns?
Three main types of Design Patterns are as follows

Creational Patterns: Deal with object creation mechanisms (e.g., Singleton, Factory).
Structural Patterns: Deal with object composition and inheritance (e.g., Adapter, Facade).
Behavioral Patterns: Deal with object interactions and communication (e.g., Observer, Strategy).
30. What Are the SOLID Principles?
The SOLID Principles are five design principles developers use to write clean, maintainable, and scalable code:

Single Responsibility Principle (SRP): A class should have a single reason to change.
Open-Closed Principle (OCP): Software entities must be open for extension but closed for modification.
Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of its subclasses without changing the correctness of the program.
Interface Segregation Principle (ISP): Clients shouldn't be made to depend on interfaces they don't use.
Dependency Inversion Principle (DIP): High-level modules must not be dependent on low-level modules. Both of them must be dependent upon abstractions.
s_o_l_i_d
31. What is the DRY (Don’t Repeat Yourself) principle?
The DRY principle states that duplicate code or logic should be avoided by keeping a single reusable source of truth in the system.

It helps improve maintainability, readability, and consistency in software development.

Reduces code duplication and makes updates easier to manage
Encourages reusable methods, classes, and modular design practices
Example: Instead of writing the same validation logic in multiple classes, a common ValidationService can be created and reused throughout the application.

32. When should you avoid using design patterns, and how can you prevent over-engineering?
Design patterns should be avoided when they add unnecessary complexity to a problem that can be solved with a simpler approach. Overusing patterns can lead to rigid, hard-to-maintain code and reduced readability.

Avoid patterns when they introduce unnecessary abstraction or complexity
Use patterns only when there is a clear design problem to solve
Prefer simple solutions first; apply patterns only when needed
Example: Using the Strategy Pattern for tax calculation when there is only one fixed tax rule adds unnecessary classes and complexity. A simple method is sufficient, and the pattern should be introduced only if multiple tax algorithms are needed in the future.

33. How do design patterns help in managing dependencies in large-scale applications?
Design patterns help manage dependencies by structuring interactions through abstractions instead of direct class-to-class references.

Reduce tight coupling using interfaces and indirection
Make dependency changes localized and predictable
Example: In a large microservices-based system, Factory and Dependency Injection patterns manage object creation and wiring without spreading dependency logic across the codebase.

34. What is the KISS (Keep It Simple, Stupid) principle?
The KISS principle emphasizes designing systems and writing code in the simplest possible way without unnecessary complexity.

Simple designs are easier to understand, debug, maintain, and extend.

Avoids over-engineering and keeps code clean and readable
Improves maintainability by focusing only on required functionality
Example: Using a simple if-else condition for a small business rule is better than introducing multiple complex design patterns unnecessarily.

35. What is the YAGNI (You Aren’t Gonna Need It) principle?
The YAGNI principle states that developers should implement only the features currently required and avoid building unnecessary functionality in advance.

It helps reduce complexity, development time, and unused code in the system.

Prevents adding features or abstractions that are not immediately needed
Keeps the codebase lightweight, focused, and easier to maintain
Example: Building support for multiple payment gateways when the application currently needs only UPI payments is unnecessary and violates YAGNI.

36. When should the Abstract Factory Pattern be preferred over the Factory Method Pattern?
The Abstract Factory Pattern should be preferred when you need to create families of related or dependent objects without specifying their concrete classes.

When multiple related products must be created together and be compatible
When switching entire product families at runtime is required
Example: In a UI toolkit, Abstract Factory can create Windows buttons and menus or Mac buttons and menus together, while Factory Method would handle only one product at a time.

37. What are the disadvantages of using the Singleton Pattern?
The Singleton Pattern can introduce hidden design and testing problems despite ensuring a single instance.

Creates global state, making code harder to test and maintain
Introduces tight coupling and limits flexibility
Example: A Singleton database connection can make unit testing difficult because tests cannot easily replace it with a mock or create isolated instances.

38. How does the Proxy Pattern differ from the Decorator Pattern?
The Proxy Pattern controls access to an object, while the Decorator Pattern adds new behavior to an object dynamically.

Proxy focuses on access control, lazy loading, or security
Decorator focuses on extending functionality without changing the original class
Example: A Proxy may check user permissions before accessing a file, whereas a Decorator may add logging or compression to file access without restricting it.

39. What problem does the Chain of Responsibility Pattern solve?
The Chain of Responsibility Pattern solves the problem of coupling a request sender to a specific request handler by passing the request through a chain of handlers.

Allows multiple objects to handle a request without the sender knowing which one will process it
Promotes loose coupling and flexible request handling
Example: In an approval system, a request passes through manager, director, and CEO handlers until one of them approves it.

handler
40. What is the difference between Composition and Aggregation in OOP?
Composition and Aggregation both represent “has-a” relationships between objects, but they differ in ownership and lifecycle dependency.

Composition represents strong ownership, while Aggregation represents a weaker relationship where objects can exist independently.

In Composition, the child object’s lifecycle depends on the parent object
In Aggregation, child objects can exist independently even if the parent is destroyed
Example: A House and its Rooms represent Composition because rooms usually do not exist without the house, whereas a Department and Employees represent Aggregation because employees can exist independently of a department.

41. Explain how the Command Pattern supports undo and redo functionality.
The Command Pattern encapsulates a request as an object, allowing it to be stored, executed, and reversed later.

Each command stores the information needed to undo an action
Commands can be kept in a history stack for undo and redo
Example: In a text editor, typing or deleting text is stored as command objects, enabling undo and redo by reversing or re-executing those commands.

42. What is the difference between Association, Aggregation, and Composition in OOP?
Association, Aggregation, and Composition define relationships between objects in object-oriented design, differing mainly in ownership strength and dependency.

These relationships help model real-world object interactions more clearly in UML and LLD.

Association represents a general relationship, Aggregation shows weak ownership, and Composition shows strong ownership
Composition has the strongest lifecycle dependency, while Association has the loosest relationship
Example: A Teacher teaching Students is an Association, a Department having Employees is Aggregation, and a Car containing an Engine is Composition because the engine is tightly bound to the car’s lifecycle.

43. Can multiple design patterns be combined in a single solution? Provide examples.
Yes, multiple design patterns are often combined to solve complex design problems more effectively.

Patterns complement each other by addressing different concerns
Improves flexibility, scalability, and maintainability
Example: In an MVC architecture, Observer is used for view updates, Strategy for interchangeable business logic, and Factory for creating objects.

44. What factors should be considered before choosing a design pattern?
Choosing a design pattern requires understanding the problem context and long-term impact on the system.

Nature of the problem, complexity, and change frequency
Impact on flexibility, performance, and maintainability
Example: Using Singleton may seem simple for shared configuration, but considering testing and scalability needs might lead to choosing Dependency Injection instead.

45. How does the Null Object Pattern help eliminate null checks in code?
The Null Object Pattern replaces null references with a non-functional object that implements the same interface.

Avoids repetitive null checks and conditional logic
Makes code safer and easier to read
Example: Instead of checking if a Logger is null, a NullLogger is used that performs no operation when log() is called.

46. What is the difference between static factory methods and the Factory Pattern?
Static factory methods are simple methods that return objects, while the Factory Pattern is a structured design approach for object creation using abstraction.

Static factory methods are tied to a single class and lack polymorphism
Factory Pattern supports extensibility through interfaces and subclasses
Example: A static createUser() method returns a User object directly, whereas a Factory Pattern allows creating different User types without changing client code.

47. What is the difference between Abstraction and Encapsulation in OOP?
Abstraction focuses on hiding implementation details and showing only essential functionality, while Encapsulation focuses on restricting direct access to data by wrapping it inside a class.

Both concepts improve code security, maintainability, and modularity in object-oriented systems.

Abstraction hides internal complexity, whereas Encapsulation protects data using access modifiers
Abstraction is achieved using interfaces/abstract classes, while Encapsulation is implemented using private variables and getter-setter methods
Example: A user can drive a car without knowing how the engine works (Abstraction), while the car’s engine components remain protected from direct access (Encapsulation).

48. How is Inheritance different from Composition in OOP?
Inheritance allows one class to acquire properties and behavior from another class, while Composition builds classes using objects of other classes.

Composition is generally preferred because it provides better flexibility and loose coupling.

Inheritance represents an “is-a” relationship, whereas Composition represents a “has-a” relationship
Composition makes systems easier to modify and maintain compared to deep inheritance hierarchies
Example: A Car “has-an” Engine using Composition, while a Dog “is-an” Animal using Inheritance.

49. What is polymorphism in Object-Oriented Programming?
Polymorphism allows the same method or interface to behave differently based on the object or context in which it is used.

It improves flexibility and allows developers to write generic and reusable code.

Compile-time polymorphism is achieved using method overloading, while runtime polymorphism uses method overriding
Helps systems support multiple behaviors through a common interface
Example: A Payment method may behave differently for Credit Card, UPI, or PayPal payments even though all use the same payment() function.

50. What is the difference between an Interface and an Abstract Class?
An Interface defines a contract that classes must implement, while an Abstract Class can provide both abstract and partially implemented methods.

Both are used to achieve abstraction but serve different design purposes.

Interfaces support multiple inheritance and define behavior contracts only
Abstract classes are used when classes share common state or partial implementation
Example: A Vehicle interface may define methods like start() and stop(), while an abstract Vehicle class can additionally contain common properties such as speed and fuelType.

High Level Design(HLD) Interview Questions
High-Level Design (HLD) gives a big-picture view. It shows the main parts of a system and how they fit together. HLD acts as a map, focusing on modularity, scalability, and smooth integration. The aim is clear development direction while meeting business goals and technical limits.

1. What are the key components of a High-Level Design (HLD)?
High-Level Design (HLD) defines the overall architecture of a system and provides a high-level view of how different components interact with each other.

It focuses on system structure, major modules, scalability, security, and technology choices.

Defines major system components, architecture layers, and integration points
Includes scalability, security, database, and infrastructure considerations for the overall system
Example: In an e-commerce application, HLD defines components like User Service, Product Service, Payment Gateway, Database, Cache, and Load Balancer, along with how they communicate within the system.

2. How do you decide between a Monolithic and Microservices Architecture in HLD?
The choice between Monolithic and Microservices architecture depends on factors such as application size, scalability requirements, system complexity, and team structure.

A monolithic architecture is suitable for smaller and simpler applications, while microservices are preferred for large-scale and highly scalable systems.

Monolithic architecture is easier to develop and deploy but becomes difficult to scale and maintain as the system grows
Microservices provide independent scalability and flexibility but introduce higher operational and communication complexity
Example: A startup building an MVP may choose a monolithic architecture for faster development, whereas platforms like Netflix or Amazon use microservices to scale different services independently.

Rule of Thumb: Start monolithic (if small) -> refactor to microservices as the system grows.

3. What are the trade-offs between a Relational and Non-Relational(NoSQL) database in an HLD?
The choice between Relational and NoSQL databases depends on factors such as data structure, scalability requirements, consistency needs, and application workload.

Relational databases are ideal for structured data and strong consistency, while NoSQL databases are preferred for scalability and flexible data models.

Relational databases provide ACID transactions, strong consistency, and support complex SQL queries for structured data
NoSQL databases offer flexible schemas, horizontal scalability, and high performance for large-scale distributed systems
Example: A banking system typically uses a relational database like MySQL or PostgreSQL for transactional consistency, while social media platforms often use NoSQL databases like MongoDB or Cassandra to handle massive volumes of unstructured data and high traffic.

4. How do you ensure high availability in an HLD?
High availability ensures that a system remains operational and accessible even during failures or heavy traffic conditions.

It is achieved by eliminating single points of failure and designing the system with redundancy, failover, and distributed infrastructure.

Uses redundancy, replication, and load balancing to keep services available during failures
Implements failover mechanisms, monitoring, and disaster recovery strategies for reliability
Example: In a cloud-based application, traffic is distributed across multiple servers using a load balancer, and if one server fails, requests are automatically redirected to healthy instances without downtime.

5. Explain the concept of load balancing in the context of HLD.
Load balancing is the process of distributing incoming network or application traffic across multiple servers to ensure optimal resource utilization, high availability, and better system performance.

It helps prevent any single server from becoming overloaded while improving scalability and fault tolerance.

Distributes requests across multiple servers to improve performance and reliability
Prevents server overload and ensures high availability by eliminating single points of failure
Example: In a web application, a load balancer like Nginx or AWS ELB distributes user requests among multiple application servers so that traffic is handled efficiently even during peak load.

6. What are the key considerations for designing a scalable system in HLD?
Designing a scalable system involves ensuring that the application can efficiently handle increasing users, traffic, and data without performance degradation.

It requires distributing workloads, optimizing resource usage, and reducing bottlenecks across the system.

Uses techniques like horizontal scaling, caching, partitioning, and database replication to handle increased load
Improves performance and reliability through asynchronous processing and distributed infrastructure
Example: A video streaming platform uses CDNs for static content delivery, Redis for caching, and multiple application servers behind a load balancer to support millions of concurrent users.

7. How do you handle security concerns in HLD?
Security in High-Level Design is achieved by incorporating protection mechanisms at every layer of the system architecture rather than treating security as an afterthought.

It involves securing user access, data transmission, APIs, and infrastructure to protect the system from unauthorized access and attacks.

Implements authentication, authorization, encryption, and secure API practices to protect system resources
Uses monitoring, logging, input validation, and zero-trust principles to detect and prevent security threats
Example: In a banking application, users authenticate using OAuth 2.0 with MFA, all communication is encrypted using HTTPS/TLS, and role-based access control ensures users can only access authorized resources.

8. What is Database Indexing?
Database indexing is a technique used to improve the speed of data retrieval operations by creating a structured reference to data in a database table.
Indexes help databases locate records quickly without scanning the entire table.

Improves query performance and reduces data retrieval time significantly
Adds extra storage overhead and may slightly slow down insert or update operations
Example: In a banking application, an index on the account number field allows the system to quickly find customer accounts during transactions.

9. What are the steps involved in designing an API in HLD?
Designing an API in HLD involves defining how different systems or clients will communicate with the application in a secure, scalable, and standardized way.

It requires careful planning of endpoints, data formats, authentication, error handling, and versioning.

Defines resources, endpoints, request/response formats, and communication standards for the system
Includes authentication, rate limiting, versioning, and proper documentation for secure and maintainable APIs
Example: In an e-commerce application, APIs like /users, /products, and /orders are designed with JSON responses, JWT-based authentication, and versioning such as /api/v1/orders for backward compatibility.

10. How do you ensure data consistency across distributed systems in HLD?
Data consistency in distributed systems ensures that all nodes or services eventually maintain accurate and synchronized data even when multiple operations occur simultaneously.

The consistency approach depends on business requirements, system scalability, and availability needs.

Uses techniques like distributed transactions, idempotent operations, and conflict resolution to maintain consistent data
Chooses between strong consistency and eventual consistency based on system requirements and CAP theorem trade-offs
Example: In an online banking system, strong consistency is used to ensure account balances remain accurate during transactions, while a social media feed may use eventual consistency for better scalability and availability.

11. What role does fault tolerance play in HLD?
Fault tolerance ensures that a system continues to function properly even when some components fail or become unavailable.

It improves system reliability by minimizing downtime and preventing failures from affecting the entire application.

Uses redundancy, replication, and failure isolation to keep the system operational during failures
Improves reliability and user experience through graceful degradation and recovery mechanisms
Example: In a microservices-based application, if the recommendation service fails, the main application can still function by temporarily disabling recommendations instead of bringing down the entire system.

12. How do you design for disaster recovery in HLD?
Disaster recovery in HLD focuses on ensuring that the system can quickly recover and continue operating after major failures such as server crashes, data loss, or regional outages.

It involves backup strategies, data replication, failover mechanisms, and recovery planning to minimize downtime and data loss.

Uses backups, geo-replication, and automated failover systems to maintain business continuity
Defines recovery objectives like RPO and RTO to ensure fast and reliable system restoration
Example: A cloud application replicates its database across multiple regions, so if one data center fails, traffic is automatically redirected to another region with minimal downtime and data loss.

13. Explain the concept of Event-Driven Architecture in HLD.
Event-Driven Architecture (EDA) is a design approach where system components communicate through events instead of direct synchronous calls, enabling loosely coupled and asynchronous interactions.

In this architecture, producers generate events, which are processed by consumers through an event broker or message queue.

Enables asynchronous communication and improves scalability by decoupling system components
Increases system resilience and flexibility, allowing services to evolve independently
Example: In an e-commerce system, when an order is placed, an event is published to Kafka or RabbitMQ, and different services like payment, inventory, and notification systems consume the event independently to perform their tasks.

14. How does a cache know when it is full and decide what data to remove?
A cache continuously tracks its current memory usage whenever new data is added, updated, or removed.
Every cache entry has a size, and the cache manager maintains an internal counter of total memory consumption.

When new data is inserted, the cache first calculates the size of that data and adds it to the current memory usage
If the total memory exceeds the configured cache limit, the cache immediately triggers an eviction policy like LRU or LFU to free space
Example: Suppose Redis cache has a limit of 1 GB and is currently using 950 MB. If a new object of 100 MB is added, Redis detects that total usage becomes 1.05 GB, which exceeds the limit. The cache then automatically removes older or less-used entries until memory usage goes below 1 GB again.

15. How do you handle concurrency control in HLD?
Concurrency control in HLD ensures that multiple users or processes can safely access and modify shared data without causing inconsistencies or conflicts.

It uses techniques like locking, isolation levels, and MVCC to maintain data integrity during simultaneous operations.

Prevents issues like dirty reads, lost updates, and inconsistent data states during concurrent access
Uses locking mechanisms, isolation levels, or MVCC based on system requirements and workload patterns
Example: In a banking application, concurrency control ensures that two users cannot simultaneously update the same account balance incorrectly during fund transfers or withdrawals.

16. What are the principles of RESTful API design in HLD?
RESTful API design follows a set of architectural principles that enable scalable, standardized, and easy-to-maintain communication between clients and servers.

It focuses on resource-based communication, stateless interactions, and proper usage of HTTP standards.

Uses resource-oriented URIs, standard HTTP methods, and status codes for consistent API communication
Ensures scalability and maintainability through statelessness, versioning, and content negotiation
Example: In a user management system, APIs like GET /users/1, POST /users, and DELETE /users/1 follow REST principles by treating users as resources and using appropriate HTTP methods for operations.

17. Explain the role of a message broker in HLD and give examples.
A message broker is a middleware component that enables asynchronous communication between different services or applications by receiving, storing, and forwarding messages.

It helps decouple system components, improving scalability, reliability, and fault tolerance in distributed systems.

Enables asynchronous communication and loose coupling between services
Improves scalability, reliability, and fault isolation through message buffering and delivery management
Example: In an e-commerce application, when an order is placed, a message broker like Kafka or RabbitMQ sends events to inventory, payment, and notification services independently without direct service-to-service communication.

18. What is Database Replication?
Database replication is the process of copying and maintaining the same data across multiple database servers to improve availability, reliability, and performance.
It helps systems continue functioning even if one database server fails.

Improves fault tolerance and high availability by maintaining multiple copies of data
Enhances read scalability by distributing read requests across replica databases
Example: In an e-commerce platform, the primary database handles writes, while replica databases serve read requests like product searches and order history.

19. What are the considerations for designing a fault-tolerant network infrastructure in HLD?
A fault-tolerant network infrastructure is designed to keep the system operational even when network components, servers, or connections fail.

It focuses on redundancy, traffic management, isolation, and disaster recovery to ensure reliability and continuous service availability.

Uses redundant network paths, load balancing, and dynamic routing to avoid single points of failure
Implements isolation, security mechanisms, and disaster recovery strategies to maintain system stability during failures
Example: In a cloud-based application, if one data center or network route becomes unavailable, traffic is automatically redirected through backup routes and standby servers to ensure uninterrupted service.

20. What role does containerization play in HLD, and how does it benefit system architecture?
Containerization packages applications and their dependencies into isolated containers, ensuring consistent execution across different environments.

It improves scalability, deployment efficiency, and reliability, making it highly suitable for modern distributed and microservices-based architectures.

Provides environment consistency, resource efficiency, and easy scalability through container orchestration platforms like Kubernetes
Supports microservices architecture by isolating services and improving deployment, maintenance, and fault isolation
Example: In a microservices application, each service such as authentication, payment, and notification runs inside separate Docker containers, allowing independent deployment and scaling without affecting other services.

21. How do you design for data privacy and protection in HLD?
Designing for data privacy and protection involves securing sensitive information throughout its lifecycle and ensuring that only authorized users can access it.

It requires implementing encryption, access controls, compliance standards, and continuous monitoring to protect data from unauthorized access and breaches.

Uses encryption, access control mechanisms, and data masking techniques to secure sensitive information
Ensures compliance, auditing, and regular security assessments to maintain data privacy and system trust
Example: In a healthcare application, patient records are encrypted using AES, access is restricted through role-based permissions, and all data access activities are logged to comply with regulations like HIPAA.

22. Explain the concept of a distributed cache in HLD and its advantages.
A distributed cache is a caching system where cached data is stored across multiple servers or nodes instead of a single machine, allowing faster and scalable data access in distributed applications.

It helps reduce database load and improves application performance by serving frequently accessed data from memory.

Improves response time and scalability by distributing cached data across multiple nodes
Reduces database load and provides fault tolerance through cache replication and distribution
Example: In an e-commerce platform, frequently accessed product details are stored in a distributed cache like Redis Cluster, enabling faster responses even during high traffic periods.

23. How do you ensure data integrity in an HLD, and what techniques can be employed?
Data integrity in HLD ensures that data remains accurate, consistent, and reliable throughout its lifecycle, even during failures or concurrent operations.

It is maintained through validation, database constraints, transactions, and secure data handling practices.

Uses constraints, validation, and ACID transactions to maintain consistency and prevent invalid data operations
Employs checksums, encryption, logging, and error handling to detect and protect against data corruption or inconsistencies
Example: In a banking system, database transactions ensure that money is deducted from one account and credited to another atomically, preventing partial or inconsistent updates during fund transfers.

24. How does the CAP theorem affect the design of a distributed database?
The CAP theorem states that a distributed system can guarantee only two out of three properties: Consistency, Availability, and Partition Tolerance.

It helps architects decide the trade-offs a distributed database should make based on business and system requirements.

CP systems prioritize consistency and partition tolerance, while AP systems prioritize availability and partition tolerance
The database design choice depends on whether the application values strict consistency or continuous availability more
Example: A banking application typically prefers consistency to ensure accurate transactions, while a social media platform may prioritize availability so users can continue accessing the system even during network failures.

25. How is Horizontal Scaling different from Vertical Scaling?
Scaling is the process of increasing a system’s capacity to handle higher traffic, users, or workloads. Horizontal and Vertical scaling are two common approaches used in system design.

Horizontal scaling adds more machines to the system, while vertical scaling increases the power of an existing machine.

Horizontal scaling increases capacity by adding more servers, improving scalability and fault tolerance
Vertical scaling upgrades existing hardware resources like CPU, RAM, or storage, but has hardware limitations
Example: A social media platform may use horizontal scaling by adding multiple application servers behind a load balancer, while a small application may use vertical scaling by upgrading a single server’s RAM and CPU.

26. What is Rate Limiting?
Rate limiting is a technique used to control the number of requests a client can send to a server within a specific time period.
It protects systems from abuse, excessive traffic, and denial-of-service attacks.

Prevents server overload and ensures fair resource usage among users
Improves system stability and security by controlling API traffic
Example: A public API may allow only 100 requests per minute per user to prevent misuse and maintain performance.

27. Explain the concepts of latency, throughput, and availability in system design.
Latency, throughput, and availability are important metrics used to measure the performance and reliability of a system. These factors help determine how efficiently a system handles user requests and stays operational.

Latency measures response delay, throughput represents the amount of work handled, and availability defines how often the system remains accessible.

Latency refers to the time taken by the system to process and respond to a request
Throughput measures the number of requests handled in a given time, while availability indicates system uptime and reliability
Example: In a video streaming platform, low latency ensures videos start quickly, high throughput allows millions of users to stream simultaneously, and high availability keeps the service accessible without interruptions.

28. How does sharding differ from database partitioning?
Sharding and partitioning are techniques used to divide large datasets into smaller parts for better performance and manageability. Although both split data, they differ in how and where the data is distributed.

Partitioning usually divides data within the same database system, while sharding distributes data across multiple database servers.

Partitioning organizes data into smaller sections inside a single database instance
Sharding spreads data across multiple servers to improve scalability and handle massive workloads
Example: A company may partition customer records by region within one database, but a large social media platform may shard user data across multiple servers to support millions of active users worldwide.

29. Explain caching and the different cache update strategies used in system design.
Caching is a technique used to temporarily store frequently accessed data in fast memory so that future requests can be served quickly without repeatedly querying the main database or backend service.

It helps reduce response time, lowers server load, and improves the overall efficiency of the application.

Common cache update strategies include Write-Through, Write-Back, Cache-Aside, and Write-Around caching
The choice of strategy depends on factors like consistency requirements, read/write patterns, and performance needs
Example: In an e-commerce application, frequently viewed product details may be stored in Redis cache. When a product is updated, the cache can either be updated immediately (Write-Through) or refreshed only when needed (Cache-Aside).

30. Explain the concept of a Content Delivery Network (CDN) in system design.
A Content Delivery Network (CDN) is a distributed network of servers that stores and delivers cached content from locations closer to end users.

Its main goal is to reduce loading time, decrease server traffic, and provide faster content delivery across different geographic regions.

Delivers static content like images, videos, and files from nearby edge servers for quicker access
Reduces load on the main server and improves application performance during heavy traffic
Example: When a user watches videos on a streaming platform, the CDN serves the content from the nearest edge server instead of the origin server, resulting in faster playback and lower latency.

31. Explain the concept of leader election in distributed systems.
Leader election is a process in distributed systems where one node is selected as the coordinator or leader to manage specific tasks and make centralized decisions for the cluster.

The elected leader handles responsibilities like coordination, synchronization, task scheduling, and maintaining consistency among nodes.

Ensures that only one node performs critical coordination tasks at a given time
Helps maintain consistency and avoid conflicts in distributed environments
Example: In a distributed database cluster, one server may be elected as the leader to manage write operations, while other nodes act as followers and replicate the data.

32. How do message queues like Kafka and RabbitMQ improve system design?
Message queues like Kafka and RabbitMQ are communication mechanisms that allow different services or components to exchange data asynchronously without directly depending on each other.

They help systems process tasks more efficiently by decoupling services and managing high volumes of requests smoothly.

Enable asynchronous communication between services, reducing direct dependency and system bottlenecks
Improve scalability and reliability by buffering messages and handling traffic spikes efficiently
Example: In a food delivery application, once an order is placed, a message queue sends events separately to payment, notification, and delivery services so each task can be processed independently without slowing down the main application.

33. Differentiate between synchronous and asynchronous communication in distributed systems.
Synchronous and asynchronous communication are two ways services interact in distributed systems. The main difference lies in whether the sender waits for an immediate response or continues processing independently.

Synchronous communication waits for a reply before moving forward, while asynchronous communication allows tasks to continue without blocking.

In synchronous communication, the client waits for the server response, leading to tighter coupling and possible delays
In asynchronous communication, requests are processed independently, improving scalability and responsiveness
Example: A payment verification API is usually synchronous because the user waits for confirmation instantly, whereas email notifications are commonly asynchronous and processed later through message queues like Kafka or RabbitMQ.

34. Explain how you would design an API Gateway.
An API Gateway acts as a single entry point for client requests in a microservices architecture. It receives requests from clients and routes them to the appropriate backend services.

It also handles common functionalities like authentication, rate limiting, logging, and request aggregation.

Centralizes request routing, authentication, monitoring, and traffic management for multiple services
Reduces complexity for clients by providing a unified interface to backend microservices
Example: In an e-commerce platform, the API Gateway receives requests from mobile and web applications and forwards them to services like user management, product catalog, and payment processing while also validating JWT tokens and applying rate limits.

35. What is the Circuit Breaker Pattern?
The Circuit Breaker Pattern is a fault-tolerance design pattern used in distributed systems to prevent repeated requests to a failing service.
It improves system resilience by stopping cascading failures during outages.

Prevents unnecessary calls to failed services and allows systems to recover gracefully
Improves reliability and response time during partial system failures
Example: In a microservices application, if the payment service becomes unavailable, the circuit breaker temporarily blocks requests and returns fallback responses instead of repeatedly retrying failed calls.

36. Explain Consistent Hashing.
Consistent hashing is a distributed hashing technique used to evenly distribute data across multiple servers while minimizing data movement when servers are added or removed.
It is commonly used in distributed caching and database sharding systems.

Reduces data redistribution when scaling servers up or down
Improves scalability and load distribution in distributed systems
Example: Distributed caching systems like Redis Cluster use consistent hashing to distribute cached data across multiple cache nodes efficiently.

37. What is Service Discovery?
Service discovery is a mechanism in microservices architecture that allows services to dynamically find and communicate with each other without hardcoded network locations.
It helps systems manage changing service instances automatically.

Enables automatic detection and communication between distributed services
Improves scalability and flexibility in dynamic cloud environments
Example: In Kubernetes, services automatically discover other services using internal DNS and service registries.

38. What is a Reverse Proxy?
A reverse proxy is a server that receives client requests and forwards them to backend servers on behalf of the clients. it acts as an intermediary between users and application servers.

Improves security, load balancing, caching, and request routing
Hides backend server details and helps distribute incoming traffic efficiently
Example: Nginx works as a reverse proxy by forwarding user requests to multiple application servers behind it.

39. What is the difference between ACID and BASE?
ACID	BASE
Focuses on strong consistency and reliability	Focuses on high availability and scalability
Commonly used in relational databases	Commonly used in NoSQL databases
Follows strict transaction rules	Allows eventual consistency
Suitable for critical transactional systems	Suitable for large distributed systems
Prioritizes data accuracy over availability	Prioritizes availability over immediate consistency
Example: Banking systems use ACID databases like PostgreSQL for accurate transactions, while social media platforms use BASE databases like Cassandra for scalability and availability.

40. What is the difference between HLD and LLD?
HLD (High-Level Design)	LLD (Low-Level Design)
Focuses on overall system architecture	Focuses on detailed component implementation
Defines modules, databases, APIs, and scalability	Defines classes, methods, and object interactions
Used during system planning phase	Used before actual coding begins
Describes how major components communicate	Describes internal logic of each module
More architecture-oriented	More code-oriented
Example: In a food delivery app, HLD defines services like User Service and Payment Service, while LLD designs classes such as User, Order, and PaymentProcessor.

41. What is the difference between Stateful and Stateless Systems?
Stateful System	Stateless System
Stores session or client state on the server	Does not store client state on the server
Each request depends on previous requests	Every request is independent
Harder to scale in distributed systems	Easier to scale and load balance
Requires session management	No session storage required
Better for long user interactions	Better for scalable APIs and microservices
Example: Traditional web login sessions are stateful because the server stores session data, while REST APIs are stateless because each request contains complete authentication information like JWT tokens.

42. What is the OSI Model?
The OSI (Open Systems Interconnection) Model is a conceptual framework used to understand how different networking components communicate in a computer network.
It divides network communication into seven layers, where each layer performs a specific function.

Helps standardize network communication and simplifies troubleshooting between systems
Separates networking tasks into layers like Application, Transport, Network, and Physical for better modularity
Example: When a user opens a website, data passes through all OSI layers, from the Application Layer (HTTP request) to the Physical Layer (network transmission).

43. What is the TCP/IP Model?
The TCP/IP Model is a networking model used for communication over the internet and modern computer networks.
It defines how data is transmitted between devices using protocols such as TCP, IP, HTTP, and UDP.

Consists of four layers: Application, Transport, Internet, and Network Access Layer
Forms the foundation of internet communication and real-world networking systems
Example: When sending an email, protocols like SMTP use the TCP/IP model to transfer data reliably across networks.

44. What is the difference between HTTP and HTTPS?
HTTP	HTTPS
Stands for HyperText Transfer Protocol	Stands for HyperText Transfer Protocol Secure
Data is transferred in plain text	Data is encrypted using SSL/TLS
Less secure for sensitive information	Provides secure communication over the internet
Uses port 80 by default	Uses port 443 by default
Suitable for non-sensitive websites	Used for banking, payments, and secure applications
Example: An online banking website uses HTTPS to encrypt user credentials and payment information during transmission.

45. What is the difference between TCP and UDP?
TCP	UDP
Connection-oriented protocol	Connectionless protocol
Provides reliable data delivery	Does not guarantee delivery
Slower due to error checking and acknowledgments	Faster with lower overhead
Used where accuracy is important	Used where speed is more important
Suitable for file transfer and web applications	Suitable for gaming and video streaming
Example: Websites and banking systems use TCP for reliable communication, while online games and live video streaming often use UDP for faster data transfer.

46. What is DNS and why is it important?
DNS (Domain Name System) is a system that translates human-readable domain names into IP addresses so computers can locate and communicate with each other over the internet.
It acts like the phonebook of the internet.

Converts domain names like google.com into machine-readable IP addresses
Improves usability by allowing users to access websites using easy-to-remember names instead of numeric IPs
Example: When a user enters “youtube.com” in the browser, DNS converts the domain name into an IP address so the browser can connect to the correct server.

47. What happens during a cache miss?
A cache miss occurs when the requested data is not found in the cache memory, forcing the system to fetch the data from the main database or backend service.
After retrieving the data, the system usually stores it in the cache for faster future access.

Increases response time temporarily because the system must access slower backend storage
Frequently accessed data is cached after retrieval to improve future performance and reduce database load
Example: If a user searches for a product that is not available in Redis cache, the application fetches the product details from the database and then stores them in the cache for subsequent requests.

48. What is cache invalidation?
Cache invalidation is the process of removing or updating outdated data from the cache to ensure users receive the most recent and correct information.
It helps maintain consistency between cached data and the original data source.

Prevents stale or outdated data from being served to users
Can be performed using techniques like TTL (Time-To-Live), write-through updates, or manual invalidation
Example: In an e-commerce application, when a product price changes in the database, the old cached product information is invalidated or updated so users always see the latest price.

49. What happens if the leader node fails in a distributed system?
In a distributed system, if the leader node fails, the remaining nodes detect the failure and elect a new leader to continue coordination and system operations.
This process helps maintain system availability and consistency without manual intervention.

Failure detection is usually performed using heartbeat signals or timeout mechanisms between nodes
A leader election algorithm like Raft or Paxos selects a new leader automatically to restore normal operations
Example: In a distributed database cluster, if the primary server crashes, one of the replica nodes is automatically promoted as the new leader to continue handling write operations.

50. How does auto-scaling work in distributed systems?
Auto-scaling is a cloud computing feature that automatically increases or decreases system resources based on traffic, workload, or performance metrics.
It helps maintain application performance while optimizing infrastructure costs.

Automatically adds servers during high traffic and removes unused servers during low traffic periods
Uses monitoring metrics like CPU usage, memory usage, or request count to trigger scaling actions
Example: During a festival sale, an e-commerce platform automatically launches additional application servers to handle increased user traffic and removes extra servers once traffic decreases.

51. What is Sticky Session in Load Balancing?
Sticky Session, also known as Session Persistence, is a load balancing technique where requests from the same user are always routed to the same backend server during a session.
It helps maintain user session data without sharing session information across multiple servers.

Ensures user-specific session data remains available on the same server throughout the interaction
Commonly implemented using cookies, client IP addresses, or session identifiers
Example: In an online shopping website, if a user adds items to the cart, sticky sessions ensure subsequent requests from that user continue going to the same server so the cart data remains consistent during checkout.

52. How does a load balancer know whether a server is working or failed?
A load balancer regularly checks all servers by sending small test requests called health checks or heartbeat signals.
If a server responds correctly, the load balancer considers it healthy. If the server does not respond, it is marked as failed.

The load balancer keeps checking servers continuously at fixed time intervals.
If the server does not respond or returns errors multiple times, the load balancer marks it as failed and stops sending requests to it.
Example: Imagine a food delivery app running on 4 servers. If one server suddenly crashes, the load balancer detects that the server is not replying to heartbeat checks and immediately stops sending user requests to that server. Users continue using the app normally through the remaining healthy servers.

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
