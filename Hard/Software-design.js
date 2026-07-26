


25 Software Design Interview Questions to Crack Any Programming and Technical Interviews
Frequently asked System Design Questions and links to useful resources
javinpaul
javinpaul
14 min read
·
Apr 27, 2020
--


7



25 System Design Interview Questions with Answers
Hello guys, If you have given any coding interview then you know that System design or Software design problems are an important part of programming job interviews, and if you want to do well, you must prepare this topic.

In the past, when I shared my list of programming interview questions, I have shared a couple of System design questions but my readers kept asking me for more questions, as it is a hard topic to master, and more and more practice is needed.

I had my own list of questions that I have collected from various interviews with friends and colleagues but I needed more questions for this article when I stumbled upon the Grokking the System Design Interview course on Designguru.io.

Grokking the System Design Interview | The #1 Online Course
Grokking the System Design Interview is a comprehensive course for system design interview. It provides a step-by-step…
designgurus.org

It’s like a godsend resource because it not only gives you a lot of System design question but also provide all the knowledge and tools you need to solve those questions.

In other words, this course teaches you step by step how to proceed with designing a real-world system like Facebook, Twitter, Uber, etc.

Also, there are not too many system design interview courses and resources you can look to prepare this topic.

When I was searching I only find Grokking The System Design course by Designguru.io and Mastering the System Design Interview course on Udemy by Frank Kane, an Ex Amazon Hiring Manager.

Other than that I didn’t find any online course which is completely focused on solving system design problems from top companies like Amazon, Google, Microsoft, Apple, SalesForce, FlipKart, etc.

But now things have changed, you have sites like ByteByteGo, where you can learn System design by going through explanatory diagrams, sites like Codemia.io which contains 120+ popular System Design Questions for interviews

Then you have sites like tryExponent.com where you can give mock interviews and then you have Educative.io where you can join interactive System design courses.

Grokking Modern System Design Interview for Engineers & Managers - AI-Powered Learning for…
System Design interviews are now part of every Engineering and Product Management Interview. Interviewers want…
bit.ly

When you combine this course with this list of questions you will have the best material to prepare for your System design interview. You can also first try all these questions by yourself before joining the course or looking it my solution for some of the questions.

This works best only if you have some Coding experience and fundamental knowledge of Computer Science and Software Design.

If you are a complete beginner in this area then I would suggest you first start with a fundamental course to learn basics like Java Programming: Principles of Software Design on Coursera or the Web Application & Software Architecture 101 on The Educative Team itself.

Web Application & Software Architecture 101 - Learn Interactively
This course is a 101 on web application & software architecture. It walks you step by step through different components…
www.educative.io

This course will not only teach you how to solve a real-world problem using Java with multiple classes but also software design which is not just coding but also involves logical thinking and design, which is very important for becoming a successful Software Developer.

Top 25 System Design Interview Questions for Programmers
Without any further ado, here is the list of some of the most popular System design or Object-oriented analysis and design questions to crack any programming job interview.

1. How do you design the Vending Machine in Java? (solution)
You need to write code to implement a Vending machine that has a bunch of products like chocolates, candy, cold-drink, and accept some coins like Nickle, Dime, Quarter, Cent, etc.

Make sure you insert a coin, get a product back, and get your chance back. Also, write the Unit test to demonstrate that these common use cases work.

If you get stuck you can read my two-part articles (part1 and part 2) about solving these classical system design questions.

2. How do you design a URL Shortening service like goo.gl or bit.ly? (solution)
This one is another common System design question. You have given a (typically) long URL, how would you design a service that would generate a shorter and unique alias for it?

If you are not familiar with URL shortener service have a look at some of the popular ones like goo.gl from Google and bit.ly which is used by Twitter.

Make sure to provide database schema and rationale behind some design decisions like how long you keep the data, how to get stats and analytics etc.

If you get stuck, you can follow the solution given on Grokking the System Design Interview course on DesignGuru.io.

How to design a URL shortner like bit.ly
If you need an alternative solution the Codemia.io also have a free solution for URL Shortner System design problem, you can see it here.

Codemia | Master System Design Interviews Through Active Practice
Edit description
codemia.io

3. How do you design a traffic control system?
A classical system design question from old age which is still popular. Make sure you know how to transition from one state to another like RED to GREEN and from GREEN to ORANGE to RED etc.

How to design traffic control system
Photo by Harshal Desai on Unsplash
4. How to design a limit order book for trading systems? (solution)
A limit order book is used in stock exchanges to match a buy order with a sell order based on price and time priority.

How would you go about that? Which data structure you will use? Remember, the speed of matching is key and also the reliability.

If you need a refresher on Data Structure then you can check out Data Structure and Algorithm in Java course and If you feel stuck you can check out my solution here.

5. How do you design a website like Pastebin?(solution)
Pastebin allows you to paste text or code and then share a link to that code anywhere you want. It’s not an online code editor but you can use this to store any kind of text.

Codemia.io also have a solution for this problem but you would need a subscription to unlock it which cost around $99 but you can get it now for just $69 now.

It will give you access to not just this but 72+ other high quality solution of common system design problems.

Codemia | Master System Design Interviews Through Active Practice
Edit description
codemia.io

6. How would you create your own Instagram? (solution)
Instagram is a photo-sharing application that provides some custom filters to enhance your photo quality. Your application should have photo upload functionality, tagging photos for search, and some basic filters.

If you could add share or social network that could be great.

Btw, if you stuck, you can see the free solution provided on the Educative Grokking System design course as well.

How to design Instagram for System Design Interview
7. How do you design global file sharing and storage apps like Google Drive or Dropbox?
These are used to store and share files, photos, and other media. How do you go about designing things like allowing users to upload/view/search/share files or photos? track permissions for file sharing, and allow multiple users to edit the same document?

If you like YouTube video, here is a nice one which will teach you how to design a Dropbox or Google Drive or any other document hosting solution:

8. How do you design a chat application like WhatsApp or Facebook Messenger? [Solution]
You have surely used WhatsApp and Facebook, right? No? If not let me tell you that a chat application allows you to send messages to your friend. It’s a point to point connection.

You keep a friend list and see their status and chat with them. In WhatsApp, you can also connect groups but that is for advanced and experienced developers.

At a minimum, you should provide a design to keep a friend list and send and receive messages from them.

If you need some tips then I suggest you check out Rocking System Design Course on Udemy, where you will find a whole case study to solve this problem.

9. How do you design a Twitter Clone?
Twitter is a popular messaging service that lets you broadcast your messages to all your followers. You tweet and your followers see those messages, they can like or retweet.

Make sure you implement common features like followers, hashtag, tweet, delete, etc. If you going nowhere and stuck, you can follow the solution on System Design Interviews: Grokking the System Design Interview.

How to design Twitter Clone
10. How to design a global video streaming service like YouTube or Netflix? [Solution]
While designing a video streaming service like Netflix or YouTube key thing is smooth streaming and buffering and functioning over low bandwidth connection, how do you manage those challenges.

You can check out this system design course to learn how to deal with such problems. Alex Xu has explained how to design YouTube as part of his System design Interview Course and you can access this lesson for free.

ByteByteGo | Ace Your Next System Design Interview
Everything you need to take your system design skill to the next level
bytebytego.com

11. How to design an ATM machine?
An ATM machine allows a user to deposit and withdraw cash. It also allows a user to see his balance. How do you design such a system? What are your main challenges?

12. How do you design an API Rate Limiter?

13. How do you design Twitter Search? (solution)
You can start with the functional and non-functional requirements

Functional:

User can tweet (send) up to 140 character message.
2. User can follow other users.

3. User can like other users’ tweets.

4. User’s home feed will show tweets from the users they are following.

The home feed will show top K popular tweets, based on the number of likes they receive, and the number of the followers the author has.

If I have time, I will add retweeting.

Non-Functional:

Scalability. It will have to serve a very large population, e.g., 500M DAU.
2. Response time. User has to see tweets quickly. When user opens home feed, the first 10 tweets should show up within 500ms.

3. Availability.

Consistency requirement can be a little bit relaxed. It does not require strong consistency like banking transactions. Eventual consistency would suffice.

For example, if a user tweets something. If a user in the same geographic region sees the tweet in 1 second, and another user on the other side of the earth sees it after 30 seconds, that would be acceptable.

Security, content moderation, and anti abuse protection are all important, but I will not focus on them in this exercise due to lack of time. I will come back to them if I have time.

You can see the full solution here on Codemia.io


14. How to design a Web Crawler like Google?
A Web Crawler goes to a website and crawl all link and index them e.g. Google so that they can later appear in a search result.

A Crawler can also use for searching a particular file in a set of directories, how do you design such things? What are the main challenges?

You can try this problem yourself first but if you stuck then you can also join this System Design Course by Exponent to see the solution for not just this question but also other popular System design questions like designing YouTube, TikTok, Facebook Messenger and more.

System Design Interview Course Track - Exponent
This track provides in-depth walkthroughs and videos of the most common system design questions that are asked in…
www.tryexponent.com

15. How to design Facebook’s Newsfeed? What kind of Algorithm will you use?
The newsfeed is an important part of Facebook which allows a user to see what’s happening around his world which includes friends and families, the pages he has liked, the group he has followed, and of-course the Facebook Ads.

The job of the Newsfeed algorithm is to show messages which are most important for the user and which can generate high engagement. Obviously, messages from friends and family should take priority.

If you feel not going anywhere and stuck, you can follow the solution on System Design Interviews: Grokking the System Design Interview.

how to prepare for System design
16. How to design Yelp or Nearby Friends?

This is another popular System design question which is asked during Coding interviews . If you don’t know Yelp is a rating service which also uses your location to recommend best shops and restaurant.

17. How to design a global ride-hailing service like Uber, Grab, or Ola backend?
Uber and Ola are two of the most popular ride-hailing services, it brings both drivers and passengers together. How do you go about designing to allow a passenger to see nearby taxis and book them?

18. How to design BookMyShow?
A website that allows you to book cinema and event tickets. This is actually an Indian startup that is doing well.

19. How to design a social network + message board service sites like Quora, Reddit, or HackerNews?
Reddit, Quora, and HackerNews are some of the most popular social network sites where users can post questions or share links. Other users can answer questions or comment on the shared links.

20. How do you design an application like Airbnb?
It allows some users to upload rooms for rent and other users to rent them. Some of the features are only available to admins, publishers, and subscribers.

21. How do you design an Elevator of the Lift system?
We All know about Elevators and Lift as most of us use it. You might have seen them in pairs and in some big office buildings you can see 3 to 4 lifts. You need to design software for that so that it can reach use quickly on different levels. You can assume you have two lifts and a 10-floor building.

Here is a nice YouTube video which explains the solution to this popular system design interview question, you can watch it right here.

22. How would you go about designing an e-commerce website like Amazon or Flipkart at scale?

23. How would you go about designing the e-commerce website using microservices, how will you handle transactions?

24. How would you design a Parking Lot system? (solved)
This is an interesting problem and asked for companies like Amazon, Google, Apple, and other FAANG companies.

You should cover the following use cases

Give a user ticket when he enters
Generate price when the user exits.
Here is a nice YouTube video that explains this problem and the solution. They also discuss APIs, Database models, and database choice. they also discuss on how to make it distributed. We also discuss concurrency.

You can also checkout this System Design Interview Course by Exponent to learn how to solve these kind of System design question during interview.

24. Create an autocomplete feature like word suggestions on search engines? Scale it to millions of users?

25. How would you go about creating a feed posting on a social network like Facebook, Instagram, Twitter, LinkedIn, etc?

If you need some guidance then I suggest you check out Preparing for the System Design Interview Course on Udemy, where Rajat Mehta has a whole case study to solve this problem. You will also learn about high-level design, low-level design, and Database design in this masterpiece.


That’s all about some of the frequently asked System Design Interview Questions for Java Programmers. Btw, these questions are not just useful for Java Programmers but also for Python, C++, Java, and Ruby Programmers. These questions are actually independent of programming language and test your software design and architecture skill.

8 Best Resources to Prepare System Design Interviews [Books, Tutorials, and Online Courses]
If you need some more resources like online courses and guides and a few more questions to practice then you can check out these online courses and book to further sharpen your knowledge and crack any System design interviews.
