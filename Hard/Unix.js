Skip to content
 
Software Testing Help

Home
Resources
FREE eBooks
QA Testing
Automation
Types Of Testing
Tutorials
Data Tools
More Tutorials
Top 15+ Important Unix Commands Interview Questions For Beginners
By Sruthy  Updated January 20, 2026
 
 Edited by Kamila
List of the most popular Unix Commands Interview questions with answers. Learn the basics of Unix commands in this Informative tutorial using examples:

Before starting with Unix commands, let us look at what Unix is and its basics.

Unix is an Operating system similar to the Windows operating system. Windows is more popular than Unix because of the Graphical User Interface provided by Microsoft Windows. However, once you work on Unix, you will understand its real power.

=> Check Out The Easy Unix Training Series

Table of Contents: [Show]

Ultimate Quiz on Unix Commands Interview Questions
Take this quick challenge on Unix command interview questions to excel in your upcoming interview. This quiz on Unix commands covers questions on Pipes, Redirection, Directory management, Shells, File systems, Process Management, and much more.

Unix Commands Interview Prep Quiz
Master command-line skills and excel in your Unix/Linux interviews
Question 1 of 20
Which command is used to list files and directories in the current directory?
show files
dir command for displaying directory contents
list all files and directories with detailed information
ls

Unix Interview Questions
Beginner Level Questions for Unix Command Interview
Enlisted below are the most popular and frequently asked Unix interview questions with examples.

Let’s start!!

Q #1) What is a Process?

Answer: As per the definition, a process is an instance of a computer program that is being executed. We have a Unique Process ID for each process.

Example: Even when a user opens a calculator application, a process is created.

Command to list a Process: %ps

This command will provide a list of the current processes along with the process ID. If we add the option “ef”, with the ps command, then it displays the full list of processes.

Syntax: %ps -ef

This command, when combined with the Grep(command for search), serves as a powerful means to find the particular details about a process.

Command to kill a Process: %kill pid

This command will kill the process whose process ID is passed as an argument. At times, using the above kill command, we won’t be able to kill the process; in such a case, we will terminate the Process.

Command to forcefully terminate a Process: %kill -9 pid

Where pid is the process ID.

Another important command for listing processes is the Top

Syntax: %top

Q #2) How to view your username in Unix?

Answer:  You can view the details about a currently logged-in user by using the whoami command.

Syntax: %whoami

O/P – test1 [Assuming test1 is your username]. It gives the user name by which you have logged in.

Q #3) How to view a list of all the users who are currently logged in?

Answer: The command used is: %who.

This command will list the names of all the users who are currently logged in.

Q #4) What is a File?

Answer: A file in Unix doesn’t merely apply to a collection of data. There are different types of files, like ordinary files, special files, directories (folders/subfolders where ordinary/special files are kept), etc.

Command to list files: %ls

This command can be used with different sets of options like -l,r, a, etc.

Example: %ls -lrt

This combination will give size, a long list, and sort files from the time of creation/modification.

Another Example: %ls -a

This command will give you a list of all the files, including the hidden files.

Command to create a file of zero size: %touch filename
Command to create a directory: %mkdir directoryname
Command to delete the directory: %rmdir directoryname
Command to delete File: %rm filename
Command to forcefully delete a file: %rm -f filename
At times, a user will not be able to delete a File/Directory due to its permissions.

Q #5) How to check the Path of the Current directory and traverse it to different paths in Unix?

Answer: We can check the path in which a user is present in Unix by using the command: %pwd

This command will represent your present working directory.

Example: If you are currently working on a file that is a part of the directory bin, then you can verify this by simply running pwd on the command line -%pwd.

The output will be – /bin, where “/” is the root directory and bin is the directory present inside the root.

Command to traverse in Unix paths – Assuming you are traversing from the root directory.

%cd: Change directory,

usage – cd dir1/dir2

Run %pwd – To verify the location

O/P – /dir1/dir2

This will change your path to dir2. You can verify your current working location at any point in time by using the pwd command and navigating accordingly.

%cd.. will take you to the Parent directory. Suppose you are in dir2 from the above example, and you want to go back to the parent directory, then run cd.. on the command prompt. Your current directory will become dir1.

usage – %cd..

Run %pwd – To verify the location

O/P – /dir1

Q #6) How to Copy files from one location to another location?

Answer: Command to copy files is %cp.

Syntax: %cp file1 file2 [if we have to copy in the same directory.]

For copying files in different directories.

Syntax: %cp source/filename destination (target location)

Example: Suppose you have to copy file test.txt from one subdirectory to another subdirectory that is present under the same Directory.

Syntax %cp dir1/dir2/test.txt dir1/dir3

This will copy the test.txt from dir2 to dir3.

Q #7) How to move a file from one location to another location?

Answer: Command to move a file is %mv.

Syntax: %mv file1 file2 [if we are moving a file under the directory, which is mainly used, and if we want to rename the file]

For moving files in different directories.

Syntax: %mv source/filename destination (target location)

Example: Suppose you want to move the file test.txt from one subdirectory to another subdirectory that is present under the same Directory.

Syntax %mv dir1/dir2/test.txt dir1/dir3

This will move test.txt from dir2 to dir3.

Q #8) How to Create and Write in a File?

Answer: We can create and write/append data in a file using Unix editors. For example, vi.

vi editor is the most commonly used editor for modifying/creating a file.

Usage: vi filename

Q #9) How to view the contents of a file?

Answer: There are many commands to view the file contents. For Example, cat, less, more, head, tail.

Usage: %cat filename

It will display all the contents of the file. Cat command is also used to concatenate and append data in a file.

Scenario-Based Unix Command Interview Questions
Q #10) What are Permissions and User grants in the case of the Unix File System/Users?

Answer:

From the access level, the users are divided into three types:

User: The person who has created the file.
Group: Group of other users who share similar privileges as the owner.
Others: Other members who have access to the path where you have kept the files.
From a File point of view, a user will have three access rights, i.e., Read, Write, and Execute.

Read: The user has permission to read the contents of the file. It is represented by r.
Write: The user has permission to modify the contents of the file. It is represented by w.
Execute: The user has permission only to execute the files. It is represented by x.
One can view these permission rights using the ls command.

-rwxrw—x – here the 1st ‘-‘ means it’s a regular file, the next ‘rwx’ combination means the Owner has all the permission to read, write, and execute, the next ‘rw-‘ means that the Group has permission to read and write and towards the end “–x” means that the other users have permission only to execute and they can’t read or write the contents of the File.

Q #11) How to change the Permissions of the file?

Answer: An easy way to change the permissions of a file is via the CHMOD command.

Syntax: %chmod 777 filename

In the above example, the User, Group, and Others have all the rights (read, write, and execute).

The user has the following rights:

4- Read Permission
2- Write Permission
1- Execute Permission
0- No permission
Suppose you have created a file abc.txt, and as a user, you want to give no permission to others and read and write permission to all the people in the Group. In such a case, the command for a user having all the permissions will be as

Example: %chmod 760 abc.txt

All the permission (read+write+execute) for user =4+2+1 =7
Read and Write permission for people in Group =4+2 =6
No permission for others =0

Q #12) What are the different Wild Cards in Unix?

Answer: Unix includes two wildcards as mentioned below.

a) * – Asterisk (*) wild card can be used as a replacement for n number of characters.

Example: Suppose we are searching for test files in a particular location, then we will use the ls command given below.
%ls test* – This command will list all the test files in that particular directory. Example: test.txt, test1.txt, testabc

b) ? – The question mark(?) wild card can be used as a replacement for a single character.

Example: Suppose we are searching for test files in a particular location, then we will use the ls command as follows.
%ls test? – This command will list all the test files that have different last characters in that particular directory. E.g. test1, testa ,test2.

Q #13) How to view the list of Commands executed?

Answer: The command to view the list of previously executed commands is %history

Q #14) How to Compress/Decompress files in Unix?

Answer: Users can compress the file by using the gzip command.

Syntax: %gzip filename
Example: %gzip test.txt
O/p. the file extension will now be text.txt.gz, and the size of the file will have reduced considerably.

A user can decompress files by using the gunzip command.
Syntax: %gunzip filename
Example: %gunzip test.txt.gz
O/p. The file extension will now be text.txt, and the size of the file will be the original file size.

Q #15) How to find a File in Unix?

Answer: To find a File in the current directory and its sub-directories, we will use the Find Command.

Syntax: %find . -name “Filename” -print

Usage: %find. -name “ab*.txt” -print

O/p this command will search for the filenames abc.txt or abcd.txt in the current directory, and the print will print the path of the file as well.

PS: use * Wild character in case you are not sure of the full file name, along with its location.

Q #16) How to View Real-Time Data or Logs?

Answer: The best command that can be used in this case is the tail command. It is a powerful tool that is widely used. Suppose we have a log that is constantly getting updated, then we will use the tail command in that case.

This command, by default, will show the last 10 lines of a file.

Usage: %tail test.log

It will show the last ten lines of the log. Suppose a user wants to monitor and view the latest updates in the log file, then we will use the option -f to receive constant updates.

Usage: %tail -f test.log

It will show the last ten lines, and as your log will be updated, you will be constantly viewing its content. In short, it will follow test.log forever, to come out of it or to stop it. Press CTRL+C.

Q #17) How to view the Usage or space disk left for usage?

Answer: While working in Environments, the users face the issue of the space disk getting full. One should keep a check on it weekly and keep on cleaning the disk space at regular intervals.

Command to check left-out disk space: %quota -v

In case the user wants to check the size of various files present in their workspace, then the following command will be used:

%du -s * – It will recursively check all the directories and sub-directories in the home directory. Based on the size, the user can remove unwanted files, thereby freeing up space.

Ps – If you are not sure of which files to remove and if you are facing a space crunch, in that case, you can zip the files, and it will help for a little while.

Quick Tips

#1) Suppose you are stuck on the usage of a particular command or confused about its functionality, then you have lots of options that serve specific purposes, as Unix has lots of commands. Don’t worry, Unix always helps its users.

Below are the commands:

a) Unix has a set of manual pages for each command, and this will give in-depth knowledge about commands and their usage.
Example: %man find
O/P of this command is to know how to use the Find command.

b) If you want a simple description of a command, then use the whatis command.
Example: %whatis grep
It will provide you with a line description of the grep command.

#2) Command to clear terminal Screen – %cle

Final Thoughts on Unix Basic Commands Interview Questions
We hope you enjoyed this informative article on Unix Command Interview Questions. These questions would help any beginner easily understand the concepts and face the interview confidently.

 All the best for your interview!!

PREV Tutorial | FIRST Tutorial

Was this helpful?
Recommended Reading
Unix Commands: Basic and Advanced Unix Commands with Examples
Unix Commands
In this tutorial, you will learn different basic and advanced Unix Commands. Unix commands are inbuilt programs that can be invoked in multiple ways. Here, we will work with these commands interactively from a Unix terminal. A Unix terminal is a graphical program that provides a command-line interface using a…

Unix File System Commands Touch, Cat, Cp, Mv, Rm, Mkdir (Part B)
Unix File System Commands
Overview: In this tutorial, we will cover the basics of the Unix file system. We will also cover the commands that are used to work with the file system such as touch, cat, cp, mv, rm, mkdir, etc.  => Click here for the Complete Unix Tutorial series Unix Video #3:…

60 Top Unix Shell Scripting Interview Questions and Answers
Shell Scripting
Shell scripting or programming mostly consists of the features that today’s modern programming languages offer. Right from simple to complex scripts can be developed using Shell Scripting. It is nothing but a series of UNIX commands written in a plain text file to accomplish a specific task. And also with…

Grep Command in Unix with Simple Examples
grep command
Learn Grep Command in Unix with Practical Examples: Grep command in Unix/Linux is the short form of ‘global search for the regular expression’. The grep command is a filter that is used to search for lines matching a specified pattern and print the matching lines to standard output. Grep Command…

READ MORE FROM THIS SERIES:

Group Discussion Rules and Tips
Top 90 SQL Interview Questions and Answers for 2026
SQL Server Interview Questions and Answers (2026)
Interview Questions and Answers
30+ Top Scrum Master Interview Questions and Answers
Top 30 PL/SQL Interview Questions and Answers in 2026
Top 20 JIRA Interview Questions and Answers
Top 35 Linux Interview Questions and Answers
Top 20 Business Analyst Interview Questions and Answers
Top 45 Web Services Interview Questions and Answers (RESTful, SOAP, Security que…
Top 24 Data Modeling Interview Questions for Data Engineers
TOP 70+ UNIX Interview Questions with Answers
Top 40 C Programming Interview Questions for Developers
Top 40 Popular J2EE Interview Questions and Answers You Should Read
Top 60 Networking Interview Questions and Answers
Top 20 Leadership Interview Questions and Answers
Top 32 IBM DataStage Interview Questions And Answers
Top 31 Most Important SAP BO Interview Questions and Answers
Top 20 RESTful Web Services Interview Questions and Answers
Top 50+ Database Interview Questions and Answers
Top 30 SAS Interview Questions and Answers
Top JMeter Interview Questions and Answers for 2026
Top 35 Android Interview Questions and Answers
60 Top Unix Shell Scripting Interview Questions and Answers
Top 64 Scenario-Based Informatica Interview Questions with Answers
Top 31 Agile Interview Questions and Answers
50+ Top Core Java Interview Questions and Answers (2026)
Top JSON Interview Questions and Answers
60+ Top VBScript Interview Questions and Answers (2026 LIST)
Top 30 Eclipse Interview Questions and Answers
Top Teradata Interview Questions and Answers
25+ Most Popular ADO.NET Interview Questions and Answers
Top 50 C# Interview Questions with Answers
Top 30 DBMS Interview Questions and Answers
Top Oracle Interview Questions: Oracle Basic, SQL, PL/SQL Questions
Top Oracle DBA, RAC, and Performance Tuning Interview Questions
Top 50 Most Popular CCNA Interview Questions and Answers
Top 20+ .NET Interview Questions and Answers
Top Oracle Forms and Reports Interview Questions
Top Oracle Apps Technical and Oracle SOA Interview Questions
Top 30+ Popular Cucumber Interview Questions and Answers
Top 30+ JMS (Java Message Service) Interview Questions
TOP 45 JavaScript Interview Questions With Detailed Answers
Top 20 Latest DevOps Interview Questions and Answers for 2026
50+ Bootstrap Interview Questions and Answers
Top 20 TestNG Interview Questions and Answers
30+ TOP Servlet Interview Questions and Answers (2026 LIST)
35+ Top Apache Tomcat Interview Questions and Answers
48 Top AngularJS Interview Questions and Answers (2026 LIST)
Top 30+ Popular CSS Interview Questions and Answers
30 Top HTML Interview Questions and Answers (2026 LIST)
50 Top PHP Interview Questions and Answers (For ALL)
Top 20 Java Interview Programs for Coding with Answers
Top 12 Mockito Interview Questions (Mocking Framework Interview)
Top 40 MySQL Interview Questions And Answers
Top 61 Python Interview Questions And Answers
Top 48 Spring Interview Questions (Crack an Interview in 2026)
Top 25+ Azure Test Plan or TFS Interview Questions
TOP 35 HTML5 Interview Questions and Answers
Top 25 Perl Interview Questions You Should Prepare in 2026
TOP 70 C++ Interview Questions and Answers [Includes Advanced]
25+ Top Spring MVC Interview Questions and Answers
Top 36 Jenkins Interview Questions For 2026
Top 15 Popular Specflow Interview Questions
Spock Interview Questions with Answers (Most Popular)
Top 50 Swift Interview Questions (Swift iOS Interview)
Top 25 Software Engineering Interview Questions [LATEST 2026]
Top 38 Desktop Support Engineer Interview Questions and Answers
Graphic Design Resume Guide: Example And Templates For 2026
Top 45 XML Interview Questions And Answers for 2026 [LATEST]
50 Top Salesforce Interview Questions and Answers (Updated 2026)
Top 49 Salesforce Admin Interview Questions And Answers 2026
Top 84 Salesforce Developer Interview Questions And Answers 2026
Top 35 ASP.Net And Web API Interview Questions With Answers
Top 20 Most Common Help Desk Interview Questions & Answers (2026)
Top 18 Most Common Call Center Interview Questions & Answers 2026
Top 10 Most Popular Postman Interview Questions With Answers
Top 35 Frequently Asked Struts Interview Questions & Answers
Top 20 HR Interview Questions and Answers
Top 20+ Employee Exit Interview Questions To Ask
Top 15+ Important Unix Commands Interview Questions For Beginners
Top 40 GIT Interview Questions and Answers In 2026
Top 25 Technical Support Interview Questions With Answers
Top 25 Computer Architecture Interview Questions And Answers
50+ Most Common jQuery Interview Questions And Answers (Updated 2026)
Top 51 ElasticSearch Interview Questions & Answers in 2026
Top 30 Programming / Coding Interview Questions & Answers
Top 35 Management Interview Questions With Answers
Top 29 Data Engineer Interview Questions And Answers
Top 40 Java 8 Interview Questions & Answers [Most Important]
31 Most Frequently Asked Maven Interview Questions & Answers
30+ Top Java Collections Interview Questions With Answers (2026 LIST)
Top 25 Java Web Services Interview Questions & Answers
TOP 30 AWS Interview Questions and Answers in 2026
How To Write A Follow Up Email After Interview?
Top 40 SAP CRM Interview Questions and Answers
Top 36 Most Important Chef Interview Questions And Answers
Top 35 Puppet Interview Questions And Answers
Top 31 Popular Python Flask Interview Questions With Answers
JSP Interview Questions And Answers in 2026
Top 30+ OOPS Interview Questions And Answers With Examples
How To Write An Email To A Recruiter [Six Email Templates]
Top 25+ Web Developer Interview Questions and Answers
40+ PHP Laravel Interview Questions And Answers (2026 LIST)
Top 25+ JDBC Interview Questions And Answers
Top 30+ JSF Interview Questions And Answers
Salesforce Lightning Interview Questions And Answers
SAP Hybris Interview Questions And Answers
Top 30 Node.js Interview Questions and Answers
Top 25 Popular Appium Interview Questions And Answers
Top 30 Frequently Asked Ajax Interview Questions And Answers
35 Frequently Asked MongoDB Interview Questions And Answers
39 Salesforce Solution Architect Interview Questions And Answers
Top 30 Popular Scrum Master Interview Questions And Answers
Top 20 Machine Learning Interview Questions And Answers
Top 30+ Data Structure Interview Questions And Answers
Top 28 VMware Interview Questions And Answers
20 Reasons Why You are Not Getting Hired (with Solutions)
Top 25 Microservices Interview Questions And Answers
Top 26 Project Management Interview Questions for Managers
Top 27 Azure Interview Questions And Answers
42 Most Common TypeScript Interview Questions And Answers
Top 25 Interview Questions for Managers with Answers
50 Most Common React Interview Questions And Answers
A Perfect Thank You Email After an Interview (4 Samples)
Top 30+ Bulma Interview Questions and Answers With Examples
Top 40+ Hibernate Interview Questions & Answers in 2026
Top 30 Java Architect Interview Questions with Answers (2026)
Top 40 Spring Boot Interview Questions 2026 (MOST ASKED)
Top 40 Full Stack Developer Interview Questions & Answers
IBM Careers: A Complete IBM Jobs & Internships Guide 2026
Top 50 Behavioral Interview Questions and Sample Answers

Get the Premium eBook 
Download your copy now 👇
Our Bestselling eBook 'Software Testing Career package' Now Available FREE for Limited Period
Enter your email..

DOWNLOAD NOW!
Leave a Comment
Comment

Name
Name *
Email
Email *

About SoftwareTestingHelp
Helping our community since 2006! Most popular portal for Software professionals with 400 million+ visits and 500,000+ followers! You will absolutely love our creative content on QA, Dev, Software Tools & Services Reviews!

Learn In This Article:
Ultimate Quiz on Unix Commands Interview Questions
Beginner Level Questions for Unix Command Interview
Scenario-Based Unix Command Interview Questions
Final Thoughts on Unix Basic Commands Interview Questions
Software Testing Help

Communication Details

Main Office: A708, City Vista, Fountain Road, Kharadi, Pune, MH, 411014.

Email Us: info@softwaretestinghelp.com

Facebook Linkedin X-twitter Youtube
Software Testing Tools

Test Management Tools
Web Application Testing Software
Cross Browser Testing Tools
Best ETL Testing Tools
Mobile Testing Tools
Regression Testing Tools
Defect Tracking Tools
GUI Testing Tools
Requirements Management Tools
ALL Testing Tools
Performance Testing Tools

Performance Testing Tools
Performance Testing Services
Computer Stress Test Tools
Cloud- Load Testing Service
Performance Testing Guide
Database Performance Tools
Website Performance Testing Tools
Application Performance Monitoring
Automation Testing Tools

Unit Testing Tools
API Testing Tools
Best ETL Tools
Open Source Testing Tools
Functional Testing Tools
Selenium Alternatives
Accessibility Testing Tools
Mobile Automation Tools
Automation Testing Software
Automation Testing Services
Data Tools

Data Masking Tools
Data Modeling Tools
Data Analysis Tools
Data Migration Software
Data Integration Tools
Data Mapping Tools
Data Loss Prevention
Test Data Management Tools
Data Recovery Software
Data Analytics Companies
ALL Data Tools
Coding Software

Best Code Editors
Code Coverage Tools
Low-Code Development Tools
Static Code Analysis Tools
Source Code Management Tools
Version Control Software
Code Review Tools
Javascript Online Editors
Code Review Tools
Code Quality Tools
Security Testing Tools

Penetration Testing Tools
App Security Testing Tools
Web Security Scanners
Vulnerability Assessment
Mobile App Security
Malware Removal Tools
Anti-Ransomware Tools
Spyware Removal Tools
Mobile Pen Testing Tools
Pen Testing as a Service
DAST Software
Testing Service Providers

Managed Testing Services
Mobile Testing Services
Software Testing Services
Performance Testing Services
Penetration Testing Companies
Cyber Security Companies
QA Outsourcing Companies
USA Testing Companies
Website Testing Services
Regression Testing Services
Software Development

Custom Software Companies
App Development Tools
Software Development Tools
Game Development Companies
Software Companies USA
SaaS Development Companies
Android App Development
DevOps Tools
DevOps Service Providers
App Development Companies
Healthcare Dev Companies
Networking Tools

Network Management
Network Security Tools
Network Scanning Tools
Application Scanners
Network Testing Tools
Network Monitoring Tools
Network Security Tools
Server Monitoring Tools
Network Mapping Software
SIEM Tools
System Monitoring Tools
Infrastructure Monitoring Tools
Project Management Tools

Project Management Software
Project Management Apps
Agile Project Management Tools
Workflow Management Software
Task Management Software
Team Collaboration Tools
JIRA Alternatives
Project Planning Tools
Team Management Software
Cloud Tools

Cloud Monitoring Tools
Crowdsourcing Platforms
Cloud Management
Crowdsourced Testing Companies
Cloud Mobile Testing
Cloud Computing Companies
Cloud Managed Services
Cloud Testing Tools
Cloud Security Companies
ALL Categories
Security Software

Free Antivirus Software
Cybersecurity Software
Internet Security Tools
External Vulnerability Scanner
Website Malware Scanner
Web Security Scanners
Zero Trust Security
Vulnerability Assessment
ALL Security Tools
IT Management Tools

Remote Desktop Software
Configuration Management
Incident Management Software
Change Management Software
IT Asset Management
Managed IT Services
ITSM Tools
Remote Monitoring Software
Remote Access Software
Asset Discovery Tools
Workload Automation Tools
IT Automation Tools

About us | Contact us | Advertise
All articles are copyrighted and cannot be reproduced without permission. SoftwareTestingHelp® is a registered trademark.
©SoftwareTestingHelp 2025 — Read our Copyright Policy | Privacy Policy | Terms | Cookie Policy | Affiliate Disclaimer

Software Testing Help


AI Engine Chatbot
