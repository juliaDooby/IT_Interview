Postman Interview Questions and Answers
Question - 101 : - What is the significance of 301 status code?
Answer - 101 : -

301 status code represents permanent redirect from one website page to another. It tells the search engine that the old page is outdated and the engine has to index the new page URL.

Question - 102 : - Why is Base64 encoding primarily used in Postman?
Answer - 102 : -

Base64 encoding is primarily used because it does the task of data transmission in a textual format that is easier to be sent in the requests in HTML form statistics format. Another reason why we use this is that using identical 64 characters for encoding is heavily reliable in any language we use.

Question - 103 : - What is the purpose of the 304 status code?
Answer - 103 : -

304 status code stands for NOT MODIFIED. This is used for diminishing the bandwidth of the network in cases of restricted GET requests. In such cases, the response body should be empty or blank and the headers should have a date, location, signature etc.

Question - 104 : - Is it preferable to save our work on Postman Cloud?
Answer - 104 : -

When working on enterprise-level applications for organizations, it is not preferred to store our work on the Postman cloud because of the required privacy and security. In the Postman cloud, there are chances of security breaches by a skilled hacker.

Question - 105 : - What do you understand by the pre-request script?
Answer - 105 : -

Pre-request scripts are those scripts that are used for executing Javascript code before a request is run. It is used for performing pre-processing tasks like setting variables, parameters, headers, body data, etc.

Question - 106 : - If we have a global and a local variable of the same name, which one will be given the most preference in Postman?
Answer - 106 : -

In such cases, the higher precedence is given to the local variable by overwriting the value of the global variable.

Question - 107 : - Does Postman allow flexibility to make use of the command-line?
Answer - 107 : -

Postman provides a command-line tool called Newman using which we can run any Postman collection. It is a NodeJS based package that requires a node environment for executing collections using Newman Collection Runner. It has full parity with Postman’s Collection Runner i.e it provides support for running assertions, pre-request scripts, or other request scripts linked with the requests that belong to the collection.

We can use Newman by following the below steps:

Install Node
Install Newman package using npm command as: npm install -g newman
To run the collection, first export the environment to JSON format in Postman. Then run the below command for running the collection in Newman:
newman run {{path to collection json}} -e {{path to environment json}}

Question - 108 : - How will you generate random numbers of a given range in Postman?
Answer - 108 : -

Suppose you want to generate numbers between the range 1 to N, then it can be done in the pre-request script as follows:

pm.globals.set('randomNumber', Math.floor(Math.random() * N));
We can then use this variable in the URL as:{{randomNumber}}

Question - 109 : - What do you understand by Scratch Pad?
Answer - 109 : -

Scratch Pad is a space provided by Postman that helps us to work without being connected to Postman servers. It provides the flexibility of utilizing some of the features of postman offline. The features include- collection creation, creating requests and the ability to send requests. These are stored locally and once logged in, the work is saved into the workspace.

Postman Interview Questions and Answers
Question - 91 : - Why isn't it better to save your work in the Postman cloud?
Answer - 91 : -

It is not recommended that you save your work in the Postman cloud since company work cannot be leaked and must remain confidential. If Postman cloud is used, security breaches may occur since Postman cloud requires sign-in. As a result, saving work on Postman Cloud is discouraged, while team workspace is highly encouraged.

Question - 92 : - In a Collection Run, what will execute first?
Answer - 92 : -

In a Collection run, pre-request scripts at the Collection level are executed first.

Question - 93 : - What are some of Postman's JS libraries to offer?
Answer - 93 : -

GUID, Lodash, Moment

Question - 94 : - What exactly is a GUID?
Answer - 94 : -

The term GUID refers to a globally unique identifier. Hyphens separate hexadecimal digits in this format. GUID satisfies the requirement for uniqueness.

Question - 95 : - What encoding is accepted by Postman in authorization credentials?
Answer - 95 : -

Postman accepts authorization credentials in Base64 encoding format only. It is provided in Postman by default. If we do not want to use an inbuilt encoding system, we can refer to third-party websites for converting the credentials in base64 format.

Question - 96 : - Can we have the same names for global variables in postman?
Answer - 96 : -

The scope of global variables is limited to the workspace and is global. Due to this, variables having global scope cannot have the same names. We can have the same names for local variables but they need to be part of different variables.

Question - 97 : - What do you know about postman monitor?
Answer - 97 : -

Monitoring is a method of staying in sync with the health and performance of the APIs. Postman provides inbuilt monitoring services that help us be in sync with the API development and performance. The monitors provided by Postman are mainly based on the working of collection runners. They run every request in the collection and analyze the values mentioned in the test scripts. Monitors use the test scripts for validating and monitoring the responses. The reports generated are shared with the developers over emails or alerts in slack, hipchat, etc based on our configuration settings.

Question - 98 : - What is a binary form in POST methods?
Answer - 98 : -

The binary form is designed to help send data in a format that is not possible to be entered manually. These options are used while sending large files like images, CSV files, etc in the POST request. Binary representation is the easiest representation for sending complex data with the request.

Question - 99 : - What are the limitations of Postman?
Answer - 99 : -

Postman is not suitable for processing 1000+ API requests.
If the project is very large, managing the collections and requests become cumbersome.
It is not suitable if we want to manage the workspace in the form of code as there would be a lot of code duplication for dynamic API requests.

Question - 100 : - How can you save the responses of API to a file in Postman?
Answer - 100 : -

We can do this in two ways:

Click on the Download button in the response section.
Click on the arrow beside send button - There will be an option to send and download. Clicking on it will prompt Postman to ask the location of saving the response post successful execution of the request.

Postman Interview Questions and Answers
Question - 81 : - In Postman, how will you create random integers in a particular range?
Answer - 81 : -

If you want to create numbers in the range of 1 to N, you can do so as follows in the pre-request script:

pm.globals.set('randomnumber, Math.floor (Math.random() N));
We can then utilise this variable in the URL as

{{randomNumber}}

Question - 82 : - In Postman, what is digest auth?
Answer - 82 : -

Postman provides the Digest Authorisation method as one of its authorization options. The client sends the request to the API first, and the server responds with a number that can only be used once a realm value and a 401 unauthorised response code. After that, we'll receive an encrypted data array including both the username and password and the previously obtained data from the server. The server generates an encrypted data string from this information and compares it to what was sent to authenticate the request.

This can be done by going to the Authorization tab and selecting "Digest Auth" from the drop-down menu. The fields for both stages of the authentication request are displayed in the Postman window. Based on the data received from the server, the fields required for the second step of the request are auto-filled.

Question - 83 : - What is an application programming interface (API)?
Answer - 83 : -

Application Programming Interface is an abbreviation that stands for Application Programming Interface. API stands for Application Programming Interface, and it is a set of routines, protocols, and tools for creating software applications. APIs define how one piece of software should communicate with another.

API stands for Application Programming Interface in basic terms. API serves as a connection point between two software applications, allowing them to communicate. A programming interface (API) is a set of software capabilities that another application can use.

Question - 84 : - What constitutes an HTTP request's fundamental components?
Answer - 84 : -

An HTTP request consists of five main components:

HTTP methods: A set of request methods used to accomplish a specific action on a resource (GET, PUT, POST, DELETE)
URI (Uniform Resource Identifier): Identifies a resource.
Version of HTTP (example- HTTP v1.1)
Content-type: application/json, Content-Length: 511) Request Headers
Payload: This is a Request Body that contains the message content.

Question - 85 : - What is Postman's Basic Auth?
Answer - 85 : -

In Postman, Basic Auth is an authentication method that allows HTTP user agents such as web browsers to enter a username and password. Once you enter the login and password, it is paired with the request.

Question - 86 : - Postman accepts authorisation credentials in which types of encoding?
Answer - 86 : -

The only codec supported by Postman is Base64. This is built-in to Postman, or you can use third-party websites to convert your credentials to base64.

Question - 87 : - Why does Postman only allow Base64 encoding?
Answer - 87 : -

We utilise base64 because it converts data into text and sends it more straightforwardly, such as HTML form data. We can also rely on the same 64 characters in any encoding language.

Question - 88 : - In Postman, may global scope variables have duplicate names?
Answer - 88 : -

Global variables cannot have duplicate names because they are global; they exist outside of any environment. The names of local variables can be the same in multiple settings.

Question - 89 : - What is a Postman Collection, and how does it work?
Answer - 89 : -

Individual requests can be grouped in a Postman Collection. Simply put, it enables us to categorise requests into folders.

Question - 90 : - What is the purpose of the Postman cloud?
Answer - 90 : -

A Postman cloud is a centralised location where businesses can access Postman collections. Work can be stored instantaneously in the Postman cloud after logging in. Anyone on the team has access to data and collections from any location.


Postman Interview Questions and Answers
Question - 71 : - Is it possible to reuse the authentication token for multiple requests?
Answer - 71 : -

Yes, it is possible to reuse the authentication token for multiple requests. We can achieve it by creating a collection and adding all the requests having the same authentication token to that collection and then assigning the auth token to the same collection. We can apply it to the individual requests by selecting the "Inherit auth from parent" option in the Authorization tab.

Question - 72 : - In POST methods, what is a binary form?
Answer - 72 : -

The binary form is intended to assist in transmitting data in a format that cannot be entered manually. These options are used for submitting large files in a POST request, such as photos, CSV files, etc. The most straightforward encoding for sending complex data with the request is binary.

Question - 73 : - Why does Postman mostly use Base64 encoding?
Answer - 73 : -

Base64 encoding is widely used because it allows data to be transmitted in a textual format that is easier to send in HTML form statistics requests. Another reason we utilise this is that encoding with identical 64 characters is quite reliable in any language.

Question - 74 : - Why is the 304 status code used?
Answer - 74 : -

NOT MODIFIED is the 304 status code. In the case of limited GET queries, this is used to reduce the network's bandwidth. In such circumstances, the response body should be empty or blank, and the headers should include information such as the date, location, and signature, among other things.

Question - 75 : - Why isn't it preferable to save work on the Postman cloud?
Answer - 75 : -

Because of the required privacy and security, it is not recommended that we store our work on the Postman cloud when working on enterprise-level applications for enterprises. A skilled hacker has the potential to compromise the security of the Postman cloud.

Question - 76 : - What are the different variable scopes that Postman offers?
Answer - 76 : -

The following variable scopes are available in Postman:

Global Variables: Global variables allow data to be shared between many collections, requests, and scripts. They can be found all over the office.
Environment Variables: These allow us to customise requests for various development settings, such as local testing, stage testing, and production testing.
Local Variables: These are temporary variables that request scripts can only access. Depending on the needs, they are either limited to a single request or a single collection. These variables are no longer available after the script has finished running.
Variables in a Collection: These variables are set to be available for all requests in the collection. They are unaffected by their surroundings.
Data Variables: These variables come from external JSON or CSV files that define the datasets that Collection Runner or Newman needs to conduct the collection.

Question - 77 : - Can the authentication token be reused for many requests?
Answer - 77 : -

Yes, it's conceivable. It is possible to create a collection, add all requests with the same authentication token, and then assign the authentication token to the collection. Select the "Inherit auth from parent" option on the Authorization tab to apply this to individual requests.

Question - 78 : - What are Postman workspaces? And what purpose do they serve?
Answer - 78 : -

Workspaces are Postman-provided areas/spaces for teams to collaborate on a specific set of collections. It allows you to logically divide requests or collections exclusive to a developer or team, making request administration accessible.

In Postman, there are two sorts of workspaces:

Personal Workspace: These workspaces are essential when working on many projects simultaneously and need logical separation between requests to handle them better.
Team Workspace: These are designed for group collaboration so that multiple people can participate in testing requests.
By publishing the users' email addresses, we can encourage new users to collaborate on our collections. After accepting the invitation, new users can begin contributing to the workspace by adding or changing requests.

Question - 79 : - What is ScratchPad?
Answer - 79 : -

Scratch Pad is a Postman-provided workspace that allows us to operate without relying on Postman servers. It allows you to use some of Postman's capabilities when you're not connected to the internet. The features include creating collections, creating requests, and submitting requests. These are saved locally, and the work is saved into the workspace once you log in.

Question - 80 : - Does Postman give you the option of using the command line?
Answer - 80 : -

Postman supplies the Newman command-line tool, which can be used to run any Postman collection. It's a NodeJS-based package that uses Newman Collection Runner to execute collections. It is fully compatible with Postman's Collection Runner, which means it may run assertions, pre-request scripts, and other request scripts tied to the collection's requests.

Newman can be used by following the procedures below:

Setup Node
Using the npm command, install the Newman package as follows: npm install -g newman
Open Postman and export the environment to JSON format to run the collection. Then use the following command in Newman to run the collection:
newman run {{path to collection json}} -e {{path to environment json}}

Postman Interview Questions and Answers
Question - 61 : - How can you generate random numbers of a given range in Postman?
Answer - 61 : -

In Postman, we can generate random numbers of a given range using some script. Suppose you want to generate numbers between the range of 1 to N, then use the following pre-request script:

pm.globals.set('randomNumber', Math.floor(Math.random()* N));  
Now, use this variable in the URL as {{randomNumber}}

Question - 62 : - What is the full form of GUID? Where is it used?
Answer - 62 : -

GUID is an acronym that stands for Global Unique Identifier. It is a set of hexadecimal digits separated by hyphens and solves the purpose of uniqueness.

In Postman, it is used to generate and send a random value to APIs.

Example:

{  
"id": "{{$guid}}",  
}  

Question - 63 : - What are some examples of the JS libraries available in Postman?
Answer - 63 : -

Some examples of the JS libraries available in Postman are Lodash, Moment, GUID, etc.

Question - 64 : - How can you iterate a request 100 times in Postman?
Answer - 64 : -

We can iterate a request 100 times in Postman using Collection Runner.

Question - 65 : - What are the different Request Method types in Postman?
Answer - 65 : -

The different Request Method types in Postman are as follows:

Get
Post
Put
Delete
Patch
Head
Delete
Question - 66 : -
What is Scratch Pad?

Answer - 66 : -

Postman provides a space known as Scratch Pad. The Scratch Pad facilitates us to work without being connected to Postman servers and also provides the flexibility to utilize some of the features of Postman offline. These features include collection creation, creating requests, and the ability to send requests. The Scratch Pads are stored locally, and once logged in; the work is saved into the workspace.

Question - 67 : - What are the most commonly seen status codes in Postman?
Answer - 67 : -

Following is the list of most commonly seen status codes in Postman:

200 (OK): Status code 200 specifies that the request was correct.
201 (Created): Status code 201 specifies that the value wrapped with the request has been created in the database. Here, it is obvious that the request was correct.
204 (No Content): Status code 204 specifies that the request was correct and received, but there is no content to send. It means there is no response to send to the client by the server.
400 (Bad Request): Status code 400 specifies a bad request. A bad request means that the syntax of the request was incorrect. It appears when we have sent the wrong parameters along with the request URL or in the request's body.
401 (Unauthorized request): Status code 401 specifies an unauthorized request. An unauthorized request is a request for which you are not authorized. This status code appears when we are not authorized to access the server or enter the wrong credentials.
404 (Not Found): Status code 404 specifies that the server was connected, but it could not find what was requested. It simply means "request not found". This status code normally appears when we request a web page not available on the server.

Question - 68 : - How can we access a Postman variable?
Answer - 68 : -

We can access a Postman variable by entering the variable name as {{var}}.

Question - 69 : - What is executed first in a collection run?
Answer - 69 : -

The pre-request scripts at the compilation level are executed first in a collection run.

Question - 70 : - Where are the query parameters stored in a GET request in Postman?
Answer - 70 : -

In the GET request, the query parameters are stored in the URL in Postman.

Postman Interview Questions and Answers
Question - 51 : - What is the use of the 301 status code in Postman?
Answer - 51 : -

In Postman, the 301 status code is used to specify that the page has been permanently redirected from one website page to another. It tells the search engine that the old page is outdated, and the search engine has to index the new page URL.

Question - 52 : - What is the method to organize requests in Postman?
Answer - 52 : -

We can organize requests in Postman with the Collections.

Question - 53 : - What are the various variable scopes provided by Postman?
Answer - 53 : -

Following is a list of several variable scopes provided by Postman:

Global Variables: Global variables allow data access between different collections, requests, and scripts. They are available throughout the workspace.
Local Variables: Local variables are the temporary variables that can be accessed only within the scope of requests scripts. Depending on the requirements, these variables are either scoped to a single request or single collection. These variables are not available once the script execution is completed.
Environment Variables: The Environment variables allow us to tailor the requests about different development environments such as local testing, stage testing, or prod testing.
Collection Variables: The Collection variables are independent of the environment and scoped to be available for all the requests present within the collection.
Data Variables: The Data variables come from external JSON or CSV files and define the datasets required to run the collection in Collection Runner or Newman.

Question - 54 : - What is the difference between the form data and x-www-form-urlencoded?
Answer - 54 : -

The key difference between the form data and x-www-form-urlencoded is that the URL will be prearranged when sent through x-www-form-urlencoded.

Question - 55 : - In which conditions should we use global, collection, and local variables?
Answer - 55 : -

Global variables are the general-purpose variables. They are used while passing data to other requests and are ideal for quick results and prototyping.

Collection variables are generally used for storing some constants that do not change during the execution of the collection. These variables are used for constants that do not change during the execution and URLs / authentication credentials if only one environment exists.

Local variables are the temporary variables and are only available within the request that has set them or when using Newman/Collection runner during the script execution. These variables are used whenever we have to override all other variable scopes.

Question - 56 : - How can we access the history of requests in Postman?
Answer - 56 : -

In Postman, we can access the history of requests in the History tab provided on the Postman application. When we sign into the Postman account, the history will be synced across the devices where you are logged in. After clicking on any of the requests present in the History tab, the view will open the request that we saved while working on it earlier. History also contains the collection runs that were executed as summarized versions.

When you click on the "View More option" on the request, you will see options to save, document, monitor, delete or mock the request. You can also select multiple requests by using Command or Control button and then clicking on the request.

Question - 57 : - Which method is preferred to write the tests?/ JavaScript or Functional?
Answer - 57 : -

The functional method is advised and recommended while writing tests in Postman. Although we can use JavaScript methods, there has been no notice of ending the support for the JavaScript method.

Question - 58 : - How can you organize requests in Postman?
Answer - 58 : -

In Postman, we can use Collections to organize requests.

Question - 59 : - What is the binary form in the Post method in Postman?
Answer - 59 : -

In Postman, the binary form is designed to send the information in a specific format that cannot be entered manually. For example, images, files, etc. Everything in a computer is converted to binary.

Question - 60 : - How can we view request logs and response logs in Postman?
Answer - 60 : -

We can view request logs and response logs in Postman through the Postman Console window.

Postman Interview Questions and Answers
Question - 41 : - What is a binary form in POST methods? What is its usage?
Answer - 41 : -

In POST methods, the binary form is designed to send data easily in a format it is impossible to enter data manually. This is mainly used when sending large files like images, CSV files, etc., in the POST request. The binary representation is one of the easiest representations used for sending complex data with the request.

Question - 42 : - What are the main limitations of Postman?
Answer - 42 : -

Following is the list of key limitations of Postman:

Postman cannot process 1000+ API requests.
In the case of huge projects, it isn't easy to manage the collections and requests.
Postman is not suitable for managing the workspace in the form of code. This is because there would be a lot of code duplication for dynamic API requests.

Question - 43 : - Can we import local variables in Postman Monitors?
Answer - 43 : -

Yes, we can import local variables in Postman Monitors, but it is not allowed to import global variables in Postman Monitors.

Question - 44 : - What is Basic Auth in Postman?
Answer - 44 : -

In Postman, Basic Auth is an authorization technique provided for HTTP user agents like web browsers to enter username and password. After entering the username and password, it gets associated with the request.

Question - 45 : - What is the use of Postman Collection runners?
Answer - 45 : -

The Postman Collection runner is used to perform Data-driven testing. It runs a group of API requests for multiple iterations with different data sets.

Question - 46 : - How can we log requests and responses in Postman?
Answer - 46 : -

We can view requests logs and response logs through the Postman Console window.

Question - 47 : - Which tool can be used to run Postman Collections in Jenkins?
Answer - 47 : -

Newman can be used.

Question - 48 : - What are some of the JS libraries available in Postman?
Answer - 48 : -

Lodash, Moment, GUID

Question - 49 : - What is the procedure to save the responses of API to a file in Postman?
Answer - 49 : -

In Postman, there are two ways to save the responses of an API to a file:

First, click on the download button in the response section.
Second, click on the arrow next to the send button. Here, you will see an option to send and download. After clicking on it, you will get a prompt Postman asking for the location of saving the response post successful request execution.

Question - 50 : - What is the meaning of the status code 304?
Answer - 50 : -

The status code 304 means NOT MODIFIED. It is used to minimize the network bandwidth usage in conditional GET requests. The response body should be empty. Headers should have a date, and location, etc.


Postman Interview Questions and Answers
Question - 31 : - What is the purpose of status code 304?
Answer - 31 : -

It means NOT MODIFIED. It is used to reduce network bandwidth usage in case of conditional GET requests. Response body should be empty. Headers should have date, location etc.

Question - 32 : - Define status code 201?
Answer - 32 : -

It means created, when a resource is successfully created using POST or PUT request. It returns a link to a newly created resource using the location header.

Question - 33 : - When do we use global variables, collection variables, and local variables?
Answer - 33 : -

Global variables are general purpose variables, ideal for quick results, and prototyping. They are used while passing data to other requests.

Collection variables can be mostly used for storing some constants that do not change during the execution of the collection. They are used for constants that do not change during the execution and also for URLs / authentication credentials if only one environment exists.

Local variables are only available within the request that has set them or when using Newman/Collection runner during the entire execution. They are used whenever you would like to override all other variable scopes.

Question - 34 : - How do you remove local variables?
Answer - 34 : -

Local variables are automatically removed once the tests have been executed.

Question - 35 : - How can we stop executing requests or stop the collection run?
Answer - 35 : -

postman.setNextRequest(null);

Question - 36 : - What is the difference between form data and x-www-form-urlencoded ?
Answer - 36 : -

The difference between the form data and x-www-form-urlencoded is that the url will be encoded when sent through x-www-form-urlencoded.

Question - 37 : - What do you understand by status code 201?
Answer - 37 : -

The status code 201 means created when you have successfully created a resource using POST or PUT request. It returns a link to a newly created resource using the location header.

Question - 38 : - Why is it not suggested to save work in Postman cloud?
Answer - 38 : -

It is not suggested and is not preferred to save your work in the Postman cloud as the company's work is not allowed to be leaked and remain confidential. While saving your work on Postman cloud, it may cause a security breach as it requires sign-in. That's why the Postman Cloud is not suggested for saving work, and team workspace is highly preferred.

Question - 39 : - What is digest auth in Postman?
Answer - 39 : -

The digest auth or digest authorization is one of the authorization techniques provided by Postman. This technique lets the clients send the request first to the API and get responses from the server, including a number that can be used only once a real value and 401 unauthorized responses. After that, the client can send back an encrypted data array with both username and password and the data received from the server earlier. Now, the server uses this data to generate an encrypted data string and compares this with what was sent for authenticating the request.

Question - 40 : - What is the use of Postman cloud when we are working in a company?
Answer - 40 : -

The Postman cloud is a common repository of companies to access Postman collections. That is why we use it when we are working in a company. We can save the work instantly in the Postman cloud after logging in. It facilitates the team members to access data/collections from anywhere.

Postman Interview Questions and Answers
Question - 21 : - What are the core components of an HTTP Response?
Answer - 21 : -

Following are the four core components of an HTTP Response:

Status/Response Code: The server generates the status or response codes when the client makes a request. For example, 404 means Page Not Found, and 200 means Response is OK.
HTTP Version: It describes the HTTP version. For example: HTTP v1.1, HTTP v1.3 etc.
Response Header: The Response Header includes the information for the HTTP response message. For example, Content-type, Content-length, date, status, and server type.
Response Body: The Response Body contains the client's data requested from the server.

Question - 22 : - Which type of encoding does Postman accept authorization credentials and why?
Answer - 22 : -

Postman accepts authorization credentials in Base64 encoding only. This is inbuilt in Postman, or else you can refer to a third-party website to convert the credentials in base64. The Base64 authorization credentials are generally used because they transmit the data into a textual form and send it in an easier form, such as HTML form data.

Question - 23 : - Why does Postman accept Base64 encoding only?
Answer - 23 : -

Postman accepts Base64 encoding only because it transmits the data into the textual form and sends it in an easier form, such as HTML form data. This is also preferred because we can rely on the same 64 characters in any encoding language we want to use.

Question - 24 : - What are the core components of an HTTP request?
Answer - 24 : -

Following are the five core components of an HTTP request:

HTTP methods: It is a set of request methods used to perform needed action for a given resource (GET, PUT, POST, and DELETE).
Uniform Resource Identifier (URI): It is a kind of address that describes the resource.
HTTP Version: It specifies the version of the HTTP. For example HTTP v1.1
Request Headers: It specifies the content type and content length of the request. For example: Content-type: application/ JSON, Content-Length: 511
Payload: It is used to specify the Request Body that includes message content.

Question - 25 : - What is the difference between Query Params and Path Variables?
Answer - 25 : -

Query Params or Query Parameters are used for sorting or filtering the resources. On the other hand, Path Variables are used for identifying specific resources.

Question - 26 : - What do you mean by postman monitors?
Answer - 26 : -

The postman monitor is used for running collections. Collections are run till specified time defined by the user. Postman Monitor requires the user to be logged in. Monitor reports are shared by users over email on a daily/monthly basis.

Question - 27 : - What do you understand by the term Postman Collection runners?
Answer - 27 : -

A postman collection runner is used to perform Data-driven testing. The group of API requests are run in a collection for the multiple iterations with different sets of data.

Question - 28 : - Can local variables be imported in Postman Monitors?
Answer - 28 : -

Yes. Postman monitors allow to import local variables but it does not allow to import global variables.

Question - 29 : - What is the purpose of Postman cloud if we are working in a company? Why?
Answer - 29 : -

A Postman cloud is a common repository of companies to access Postman collections. In Postman cloud, work can be saved instantly after logging in. Anyone from the team can access data/collections from anywhere.

Question - 30 : - Why is it not preferred to save work in Postman cloud?
Answer - 30 : -

It is not preferred to save your work in Postman cloud as company’s work is not allowed to be leaked and remain confidential. Security breaches can be experienced if Postman cloud is used as Postman cloud requires sign in. Therefore Postman Cloud is discouraged for saving work and team workspace is highly encouraged.


Postman Interview Questions and Answers
Question - 11 : -
What are the various tools used for API Testing?

Answer - 11 : -

Following is a list of some tools that are used for API Testing:

Postman
SoapUI
Katalon Studio
Tricentis Tosca
Apigee
Jmeter etc.

Question - 12 : - How can you access the Postman variables?
Answer - 12 : -

We can access the Postman variables by using the variable name as:{{variable_name}}

Question - 13 : - What are the different types of API requests supported in Postman?
Answer - 13 : -

Following is a list of the different types of API requests supported in Postman:

GET
POST
PUT
PATCH
COPY
DELETE
HEAD
OPTIONS
LINK
UNLINK
PURGE
LOCK
UNLOCK
PROPFIND
VIEW

Question - 14 : - What is an HTTP request? Give an example of an HTTP request.
Answer - 14 : -

An HTTP request is a programming request made by the client to a named host located on a server. HTTP works as a communication interface or a request-response protocol between a client and server. The main aim of the HTTP request is to access a resource on the server. To make the HTTP request, the client uses components of a URL (Uniform Resource Locator), which includes the information needed to access the resource.
An example of the HTTP request:

A client (browser) sends an HTTP request to the server; then, the server responds to the client. The response sent by the server contains the status information about the request, and it can also contain the requested content.

Question - 15 : - What do you understand by team workspace in Postman?
Answer - 15 : -

As we know, a workspace is a collaborative environment for users to develop and test APIs. In the same way, a team workspace is a workspace that is shared by the whole team working on the same collections of requests. Usually, it is time-consuming and hard to share the collections through external drives or other sharing; the team workspace synchronizes and collaborates all the team's work in one place.

Question - 16 : - What is the use of Postman monitor?
Answer - 16 : -

The Postman monitor is used for running collections. Collections run till the specified time defined by the users. It requires the users to be logged in, and the users share the Monitor reports over an email on a daily or monthly basis.

Question - 17 : - How can you log variable values in Postman?
Answer - 17 : -

In Postman, we can log the variable values in the console by using the following command:

console.log(pm.variables.get("variable_name"));  

Question - 18 : - Which one is preferred in Postman, a global or local variable?
Answer - 18 : -

In Postman, if 2 variables have the same name (one being local, the other global), then the higher priority is of the local variable. The local variable will overwrite the global variable.

Question - 19 : - Can we have two global scope variables with the same name in Postman?
Answer - 19 : -

The global variables are global, so we cannot set duplicate names for them without any environment as it creates confusion for the software. On the other hand, local variables can have the same name but in different environments.

Question - 20 : - What is the meaning of the term environment in Postman?
Answer - 20 : -

In Postman, the term environment is a set of key-value pairs. You can create multiple environments in Postman and switch among them quickly by pressing a button. There are 2 types of environment, global and local.

Postman Interview Questions and Answers
Question - 1 : - What is Postman?
Answer - 1 : -

Postman is an API platform that is used to develop, share, test APIs. It is also used for creating documentation for APIs. Test suites can be quickly designed using Postman, and also it can store test information to be used in other tests.

Question - 2 : - What is a collection in Postman?
Answer - 2 : -

A collection is equivalent to a folder on your computer. It is a set of requests that are grouped together, preferably of the same type. It is one of Postman's most important features, and it also provides nice features such as running a whole group of request together with just one click.

Question - 3 : - What are all the environment variables in Postman?
Answer - 3 : -

A collection of key-value pairs is called an environment. Each name of the variable represents its keys. And referencing the name of the variable allows you to access its value.
It is a set of variables that differentiate among the requests. Such as, we can have an environment for testing, one for development and another for production. We can change the value of the variables to pass the data between requests and tests

Question - 4 : - What is payload in Postman?
Answer - 4 : -

The Payload of an API Module is the body of your request and response message. It contains the data that you send to the server when you make an API request. You can send and receive Payload in different formats, for instance JSON.

Question - 5 : - What is a Pre-request script in Postman?
Answer - 5 : -

Pre-request scripts in Postman to execute JavaScript before a request runs

Scripts in the Pre-request Script tab for a request, collection, or folder, you can carry out pre-processing such as setting variable values, parameters, headers, and body data

Question - 6 : - What was the Postman originally developed?
Answer - 6 : -

When the Postman was developed, it was originally a Chrome browser plugin. It extends its solution with the native version for both Mac and Windows.

Question - 7 : - Why do we use Postman?
Answer - 7 : -

The Postman tool has become a choice of more than 8 million users. Following are the main reasons for using Postman:
It is free: Postman is free software that we can use for API testing. It is free to download and use for teams of any size.
It is easy to use: Postman is an easy-to-use software tool. We can send HTTP requests of various types (such as GET, POST, PUT, PATCH, etc.). We have to download it, and we can send our first request in minutes. It also gives us the ability to save environments for future use.
Community & Support: It has a huge community forum for customer support and extensive documentation.
It is extensible: Postman facilitates us customizing it according to our needs with the Postman API.
APIs Support: It facilitates us to make any API call (REST, SOAP, or plain HTTP) and easily inspect even the largest responses. It also helps manage the end-to-end lifecycle of the API - starting from design to mocking to testing and finally maintaining the APIs.
Runtime Services: Postman provides Runtime Services that help us manage API collections, environments, work-spaces, and different examples.
Integration: Postman facilitates us to easily integrate test suites into our preferred CI/CD tools and services, such as Jenkins with Newman (command-line collection runner).

Question - 8 : - What is an API?
Answer - 8 : -

API is an acronym that stands for "Application Programming Interface". It is a set of routines, protocols, and tools used for building Software applications. API is an interface, so it specifies how one software program should interact with other software programs.

In other words, we can say that API is an Application Programming Interface that acts as an interface between two software applications and allows these two software applications to communicate with each other. API is a collection of software functions that another software program can execute.

Question - 9 : - What are the various authorization methods provided by Postman?
Answer - 9 : -

Postman provides the following API request authorization options:

API Key
Oauth 1.0
Oauth 2.0
Bearer Token
Basic auth
Digest auth
Hawk Authentication
AWS Signature
NTLM Authentication

Question - 10 : - What is the use of the collection in Postman?
Answer - 10 : -

In Postman, a collection is used to group similar requests. It systematically arranges the requests into folders.

41+ Postman Interview Questions & Answers (with Notes) | PART 1
#
testing
#
postman
#
beginners
#
general
In this video, we are going to cover the 41+ Postman interview questions and answers.

✅ Download the Mind map - https://sdet.live/notes
✅ API Testing Postman Playlist - https://sdet.live/4keR



✅ 41+ Postman Interview Questions & Answers
➡️ 1. What is Postman?
It is not an API Testing Tool
Postman is collaboration platform for API development
Help you to Design, Share, build , test, Document APIs
Postman supports Protocols - REST, SOAP, and GraphQL
Where as CURL
Source curl.se
Website
https://www.postman.com/
Can use as

➡️ 2. Why use Postman?
Clean and Easy to use UI
You can perform Exploratory Testing of APIs
Dynamic request, data and Collections support
Team workspace, sharing, mocking, monitoring of APIs
Write test case, put them in CI/CD with newman
Import from curl and different ways, sharing as link, explore feature
➡️ 3. When to use Postman?
Context as Software Tester
You have few API request
You don’t want to manage as code
Team is little not well versed with code
You want to cover API test(small collection)
➡️ 4. What are drawbacks of Postman?
Not suitable for the larger or 1000+ API request
For Large project its very clumsy to manage postman requests or collections
Not suitable if you want to manage as Code, lots of duplicate code if multiple API or dynamic request are required.
➡️ 5. What is an API?
API stands for the Application Programming Interface,
They are basically a collection of functions and procedures which allows us to communicate two applications or libraries.

Read more at
https://sdet.live/4Euj
➡️ 6. Can you tell alternates of Postman?
Katalon Studio
SoapUI
Apigee
Jmeter
Tricentis Tosca
hoppscotch.io
➡️ 7. What are different HTTP Methods?
GET
POST
PATCH
PUT
DELETE
OPTIONS
HEAD
➡️ 8. Can you test SOAP request with POSTMAN?
Yes
Demo
https://sdet.live/4Eus
➡️ 9. What is GET request?
Retrieve information from the given server using a given URI.
Requests using GET should only retrieve data and should have no other effect on the data.
➡️ 10. What is POST request?
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
With or without Auth
➡️ 11. What is Patch Request?
Partial Update to the target resource
➡️ 12. What is Put request?
Replaces all current representations of the target resource with the uploaded content.
➡️ 13. What is Delete request?
Removes all current representations of the target resource given by a URI.
➡️ 14. What is HEAD http method?
Same as GET, but transfers the status line and header section only.
➡️ 15. What you validate in API Response?
Status Code
Response Body
Further Testing
Headers

How do import request from dev tools to Postman?

What type of Authentication supports Postman?
No auth
Basic
Digest
Bearer Token
AWS Signature
NTLM
OAuth1,2
API key

What is Basic Auth, How to perform in Postman ?
https://scrolltest.com/2018/11/22/how-to-handle-authentications-with-postman/
Basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a username and password when making a request. In the example,
https://learning.postman.com/docs/sending-requests/authorization/#basic-auth

What is digest auth?, How to perform in POSTMAN?
In the Digest Auth. method username and password are sent over the web after applying some hash functions, Therefore which makes it more secure over network.
https://learning.postman.com/docs/sending-requests/authorization/#digest-auth

What is bearer token? And How to use it with POSTMAN?
Bearer tokens allow requests to authenticate using an access key, such as a JSON Web Token (JWT).

What is OAuth 1.0 & 2.0:-
and How to do it with POSTMAN?
They are the way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
https://learning.postman.com/docs/sending-requests/authorization/#oauth-10
https://learning.postman.com/docs/sending-requests/authorization/#oauth-20

37 вопросов по платформе Postman (с 9 образцами ответов)

practicum.yandex.ru
Реклама
•
16+
Короткие курсы для смены профессии
Курсы Практикума, которые идут от 3 до 8 месяцев. Попробуйте бесплатно

Узнать больше
Опубликовано 2022-04-07 18:50 пользователем Журнал HR-Portal

Инженеры-программисты могут использовать интерфейсы прикладного программирования (API) и инструменты для тестирования работы программных продуктов. Одним из таких инструментов является Postman, платформа для совместной работы, используемая для проектирования, разработки и тестирования API. Менеджеры по подбору персонала могут задавать отраслевые или ролевые вопросы о Postman, чтобы проверить ваши знания инструментов API при приеме на должность тестировщика. Знание общих вопросов, которые они могут задать, поможет вам подготовить прямые и краткие ответы и укрепить уверенность в себе.

В этой статье мы рассмотрим девять распространенных вопросов для собеседования с Postman, а также примеры ответов и советы, которые вы можете использовать во время собеседования.

9 вопросов для собеседования по Postman с примерами ответов
Изучите эти вопросы для собеседования с Postman и примеры ответов, чтобы подготовить стратегические ответы для собеседования:

1. Что такое API?
Интервьюер может задать этот вопрос, чтобы проверить ваши общие знания об API и их классе применения. При тестировании приложений вы можете использовать API для выполнения запросов к уникальным функциям программы. Вы можете дать краткий ответ, который отражает основное определение API и его функции.

Пример: API - это набор инструментов, процедур и протоколов для создания программного обеспечения. Она действует как мост между двумя программными приложениями, позволяя им взаимодействовать. Разработчики программного обеспечения могут создавать API как интерфейсы, предоставляющие услуги другим программам. Например, вы можете создать погодный API, с помощью которого приложения смогут получать информацию о погоде.

2. Каковы некоторые преимущества Postman?
Интервьюеры могут задать этот вопрос, чтобы оценить ваше общее знание Postman и вклад, который он может внести в ваш рабочий процесс. Вы можете назвать несколько особенностей Postman, которые дают программистам значительные преимущества.

Пример: Postman имеет простой интерфейс, который позволяет вам легко отправить запрос и получить ответ, просто нажав на кнопку. Тестировщики могут настроить пользовательскую среду для тестирования различных приложений. Такая конфигурация может ускорить процесс тестирования за счет хранения переменных, необходимых приложениям для работы. Разработчики, знакомые с JavaScript, также могут автоматизировать тесты в Postman для пользовательской функциональности, например, строить тесты с динамическими параметрами и передавать данные между запросами.

3. Объясните, как использовать глобальные, коллекционные и локальные переменные
Переменные позволяют хранить и повторно использовать значения в Postman. Менеджеры по найму могут задать этот вопрос, чтобы оценить ваш опыт создания пользовательских сред тестирования для клиентов API. В своем ответе вы можете определить области применения каждой переменной.

Пример: Глобальные переменные являются переменными общего назначения и могут быть пригодны для создания прототипов. Вы можете использовать эти переменные для передачи данных другим запросам. Тестировщики программного обеспечения могут использовать переменные коллекции для определения значений внутри группы или хранения элементов, которые остаются неизменными во время выполнения коллекции. При выполнении вызовов запросов в Postman локальные переменные могут передавать данные внутри запросов. Вы можете использовать локальные переменные для переопределения глобальных переменных и переменных коллекции.

4. Объясните, как добавить заголовок к каждому запросу Postman с помощью скрипта pre-request.
Использование скрипта для автоматического добавления заголовков может ускорить тестирование программного обеспечения. Менеджер по найму может задать этот вопрос, чтобы проверить ваш опыт в автоматизации тестов. Вы можете ответить, объяснив свои действия при использовании скрипта для создания заголовков.

Пример: Добавление заголовка с помощью скрипта может гарантировать, что все запросы используют один и тот же заголовок. Вы можете сделать это, открыв консоль почтальона, нажав Вид на заголовке и выбрав Показать консоль почтальона .

Вы также можете выбрать коллекцию, щелкнув по ее названию и добавив заголовок . Чтобы включить заголовок в коллекцию, щелкните коллекцию правой кнопкой мыши, выберите Редактировать и перейдите к скриптам предварительных запросов. Затем вы можете добавить сценарий в зависимости от вашей цели.

5. Что такое коллекция в Postman?
При подаче нескольких запросов вы можете объединить похожие запросы в общую группу. Коллекции могут позволить вам достичь этого. Интервьюер может задать этот вопрос, чтобы определить, как вы организуете множество тестовых примеров. Вы можете ответить, определив коллекцию и объяснив, почему она важна.

Пример: Коллекция Postman - это функция для группировки похожих запросов. Он помогает разработчикам организовывать запросы на тестирование в отдельные папки. Этот порядок может быть полезен, когда несколько тестировщиков работают над одним и тем же приложением, поскольку они могут определить, какие функции приложения требуют более комплексного тестирования.

6. Что такое digest auth?
Postman поддерживает различные методы авторизации запросов приложений. Ведущий специалист по найму может использовать этот вопрос для анализа вашего опыта применения нескольких типов аутентификации для тестовых запросов. Вы можете сосредоточиться на определении digest auth и показать, как разработчики используют его.

Пример: Дайджест-авторизация - это метод, который сервер может использовать для получения учетных данных от веб-клиента. Его отличительной особенностью является то, что он использует одноразовый номер (once), который объединяет имя пользователя, пароль и URI сервера. Клиент Postman создает хэш MD5, используя эти поля, и отправляет запрос на сервер приложений. Чтобы использовать digest auth в Postman, вы можете открыть вкладку 'Authorization tab' и выбрать 'Digest Auth' из выпадающего списка.

7. Что такое облако Postman?
Компании могут использовать облачную среду для хранения своих коллекций Postman. Интервьюер может использовать этот вопрос, чтобы проверить ваше знакомство с инструментами совместной работы в Postman. Вы можете ответить, определив, что такое облако Postman и как его можно использовать.

Пример: Облако Postman - это хранилище, которое компании могут использовать для хранения и обмена коллекциями. Тестировщики могут сохранять свои запросы в облаке после входа в учетную запись Postman своей организации. Любой член команды может получить доступ к облачным коллекциям из любого места. Использование облака может быть удобным, когда несколько групп тестировщиков обмениваются запросами приложений.

8. Рекомендуется ли сохранять информацию в облаке Postman??
Хранение информации в облачных средах может быть сопряжено с рисками безопасности. Менеджер по найму может использовать этот вопрос для оценки мер, которые вы принимаете при выполнении задач, которые могут представлять риск. Вы можете ответить, объяснив, можно ли хранить данные в облаке Postman, и какие факторы влияют на ваш ответ.

Пример: Корпоративные приложения в компании могут предполагать высокий уровень безопасности и конфиденциальности. При работе с конфиденциальными приложениями может быть нежелательно сохранять информацию в облаке Postman. Причина в том, что в облаке могут произойти нарушения безопасности, что приведет к раскрытию конфиденциальной информации компании.

9. Что такое двоичная форма в POST-запросах?
POST-запросы позволяют клиентскому приложению отправлять данные на сервер. Например, при входе в систему браузер ПОСТЫ ваше имя пользователя и пароль для входа на сервер. Интервьюер может попросить изучить ваш опыт тестирования запросов приложений, которые отправляют данные на удаленные серверы. Вы можете сосредоточиться на объяснении бинарной формы в заявках и того, чего она достигает.

Пример: Двоичная форма позволяет клиентским приложениям отправлять двоичные данные. Данные могут включать файлы изображений, видео, аудио и документов. Приложение конвертирует файл в двоичный формат и добавляет его в тело HTTP-запроса. Когда получатель получает запрос, он может извлечь файл из тела запроса и обработать его. Включение файлов в запросы может потреблять больше пропускной способности и иметь большее время отклика, чем обычные запросы.

Дополнительные вопросы для собеседования по Postman
Вот некоторые дополнительные вопросы на собеседовании в Postman, с которыми вы можете столкнуться во время собеседования:

Как вы извлекаете cURL-эквивалент запроса Postman?

Чем полезны рабочие пространства в Postman?

Можно ли повторно использовать токен авторизации для нескольких запросов?

Есть ли ограничения в использовании Postman?

Как много у вас опыта работы с локальными переменными в Postman?

Почему Postman принимает только кодировку Base64?

Глобальная или локальная переменная предпочтительнее в Postman?

Объясните, что такое коллекция почтальонов.

Что такое мониторы Postman?

Расскажите, как бы вы удалили локальные переменные.

Как сохранить ответы Postman в файл?

Объясните, как выполнить итерацию нескольких запросов в Postman.

Перечислите некоторые из библиотек JavaScript, доступных в Postman.

Объясните разницу между данными и x-www-form-url encoded.

Расскажите о назначении кода состояния 304.

Как вы можете получить доступ к переменной Postman?

Дайте определение GUID.

Объясните, как регистрировать запросы и ответы в Postman.

Как написать тестовые примеры в Postman для базовой аутентификации?

Как вы поддерживаете свои знания о Postman в актуальном состоянии??

Как бы ваш предыдущий руководитель или менеджер описал вашу трудовую этику?

Как долго вы используете Postman?

Объясните свой уровень опыта работы с Postman.

Что вы знаете о компании Postman?

Что вам больше всего нравится в Postman?

Каковы были ваши обязанности на предыдущих должностях, где использовался Postman?

Где вы получили образование или подготовку?

Расскажите о вашем опыте использования JavaScript и библиотек JavaScript в Postman.

Советы по проведению собеседования с Postman
Примите во внимание эти советы, которые помогут вам во время следующего собеседования в Postman:

Изучите вакансию. Прежде чем отправиться на собеседование, прочитайте объявление о вакансии, чтобы лучше понять, что работодатель ищет в кандидате. Понимание необходимого уровня опыта работы с Postman может помочь вам подчеркнуть свою квалификацию во время собеседования.

Проведите имитационное собеседование. Проведите шуточное собеседование с членом семьи или другом, чтобы помочь вам подготовить утонченные ответы и соответствующий язык тела. Вы также можете попросить их дать вам обратную связь о результатах вашего собеседования, чтобы вы знали, что нужно улучшить.

Изучите компанию. Посетите веб-сайт компании, чтобы узнать о ней больше, понять ее программное заявление и оценить ее цели. Узнав эту информацию, вы сможете сослаться на нее во время собеседования, чтобы произвести впечатление на менеджеров по найму.

25 вопросов по Postman
Оставьте комментарий / Postman, Собеседование / От Diliara Gromche
🔥 Важное для QA-специалистов! 🔥
В QaRocks ты найдешь туториалы, задачи и полезные книги, которых нет в открытом доступе. Уже более 14.000 подписчиков – будь среди нас! Заходи к нам в телеграм канал QaRocks 
Подготовка к собеседованию может оказаться непростой задачей, но знание возможных вопросов и ответов на них может сыграть решающую роль. В этой статье мы собрали 25 основных вопросов и ответов по Postman , которые помогут вам уверенно пройти следующее собеседование.

Почему интервьюеры задают вопросы о Postman?
Основная цель вопросов о Postman – оценить опыт кандидата в использовании платформы Postman API для создания, тестирования и управления API. Интервьюеры хотят убедиться, что кандидат обладает необходимыми техническими навыками и умением решать проблемы для эффективной работы с API в реальной среде. Вопросы часто затрагивают такие темы, как запросы к API, обработка ответов, создание сценариев и автоматизация в среде Postman.

25 вопросов по Postman
Что такое Postman и как он используется при разработке API?
Объясните разницу между методами HTTP GET, POST, PUT и DELETE.
Как создать новый запрос в Postman?
Что такое переменные окружения в Postman и как их использовать?
Опишите, как использовать Postman для тестирования API эндпойта (endpoint).
Как можно сгруппировать свои запросы в Postman?
Что такое коллекция Postman и как ее создать?
Объясните, как использовать Postman для отправки JSON payload (полезных данных) в запросе POST.
Как осуществляется аутентификация в Postman?
Какова цель Pre-request скрипта в Postman?
Напишите тестовый скрипт в Postman, чтобы проверить, равен ли код статуса ответа 200.
Как можно использовать Postman для проверки конкретных данных ответов?
Объясните, как использовать Postman для объединения запросов с использованием переменных.
Что такое мониторинг коллекций (Postman monitors) и как его настроить?
Как можно экспортировать и импортировать коллекции в Postman?
Напишите тестовый сценарий в Postman для проверки времени отклика API.
Как использовать Postman для тестирования API с различными форматами контента (например, XML, JSON)?
Объясните, как использовать консоль Postman для отладки запросов.
Напишите тестовый скрипт в Postman, чтобы проверить наличие определенного заголовка в ответе.
Как можно использовать Postman для моделирования различных ролей пользователей при тестировании API?
Опишите, как использовать Newman с коллекциями Postman для автоматизированного тестирования.
Напишите тестовый скрипт в Postman, чтобы проверить, что тело ответа содержит определенный ключ.
Как настроить mock-сервер (фиктивный сервер) в Postman?
Объясните, как использовать Postman для тестирования ограничения частоты запросов (rate limiting) на API.
Напишите тестовый скрипт Postman, чтобы проверить, соответствует ли ответ ожидаемому формату (например, проверка схемы JSON).
1. Что такое Postman и как он используется при разработке API?
Как ответить:

Дайте определение Postman как популярного инструмента разработки API.
Объясните, зачем он используется.
Упомяните его основные функции, такие как создание запросов, автоматизированное тестирование и совместная работа.
Пример ответа:

«Postman — это широко используемый инструмент разработки API, который упрощает процесс создания, тестирования и управления API. Он предлагает такие функции, как создание запросов, автоматизированное тестирование и совместная работа в команде, что делает его незаменимым инструментом для разработчиков и инженеров по контролю качества».

2. Объясните разницу между методами HTTP GET, POST, PUT и DELETE.
Как ответить:

Перечислите основные HTTP методы и варианты их использования.
Подчеркните идемпотентность методов GET и PUT.
Пример ответа:

«GET используется для извлечения данных с сервера, а POST — для отправки данных на сервер с целью создания ресурса. PUT обновляет существующий ресурс, а DELETE удаляет его с сервера.

Методы GET и PUT — идемпотентные. Идемпотентность — это свойство HTTP-метода, при котором повторное выполнение одного и того же запроса не приводит к изменению состояния ресурса или к побочным эффектам, отличным от первоначального.

GET — повторный вызов одного и того же GET-запроса всегда возвращает одинаковый результат и не изменяет состояние сервера. PUT — повторное выполнение одного и того же PUT-запроса с одинаковыми данными приведет к тому же состоянию ресурса, что и первый раз, без дополнительных изменений».

3. Как создать новый запрос в Postman?
Как ответить:

Расскажите, как через Postman создать новый запрос.
Пример ответа:

«Чтобы создать новый запрос в Postman, необходимо нажать кнопку «New» и выбрать «HTTP». Задать нужный метод HTTP, ввести URL-адрес запроса и нажать «Send», чтобы выполнить запрос».

4. Что такое переменные окружения в Postman и как их использовать?
Как ответить:

Дайте определение переменным окружения.
Объясните, что они помогают управлять различными средами.
Расскажите, как создавать и использовать их в Postman.
Пример ответа:

«Переменные окружения в Postman — это именованные пары ключ-значение, используемые для хранения динамических данных, которые могут быть вставлены в запросы и скрипты. Они позволяют централизованно управлять параметрами, такими как базовые URL, токены авторизации или другие конфигурационные значения, и автоматически подставлять их в запросы через синтаксис {{имя_переменной}}.

Создание и настройка переменных осуществляется в разделе «Manage Environments», где можно определить набор переменных для каждой среды (например, разработка, тестирование, продакшн)».

5. Опишите, как использовать Postman для тестирования API эндпойта (endpoint).
Как ответить:

Расскажите, как через Postman тестировать API эндпойнт.
Пример ответа:

«Чтобы протестировать эндпойнт API в Postman, необходимо открыть приложение и создать новый запрос, выбрав метод HTTP и введя эндпойнт URL-адреса. Настроить все необходимые заголовки, параметры или данные аутентификации, затем нажать «Send», чтобы выполнить запрос и оценить ответ».

6. Как можно сгруппировать свои запросы в Postman?
Как ответить:

Объясните, что можно использовать коллекции для группировки связанных запросов.
Упомяните возможность использования папок внутри коллекций для лучшей организации.
Подчеркните важность использования понятных наименовании и описаний.
Пример ответа:

«Чтобы организовать свои запросы в Postman, можно использовать коллекции для группировки связанных запросов и папки внутри этих коллекций для лучшей структуры. Кроме того, выбирая понятные наименования и четкие описания для каждого запроса, можно обеспечить ясность и простоту использования».

7. Что такое коллекция Postman и как ее создать?
Как ответить:

Дайте определение коллекции в Postman.
Объясните, что коллекции помогают эффективно организовывать и управлять запросами.
Расскажите, как создать коллекцию.
Пример ответа:

«Коллекция Postman — это группа сохраненных запросов API, которые можно организовать в папки для лучшего управления.

Чтобы создать ее, нужно нажать кнопку «New» и выбрать «Collection». Так можно начать группировать свои запросы».

8. Объясните, как использовать Postman для отправки JSON payload (полезных данных) в запросе POST.
Как ответить:

Дайте определение JSON payload.
Расскажите как его сформировать в Postman.
Пример ответа:

«JSON payload — это тело (данные), отправляемое в HTTP-запросе или получаемое в ответе, закодированное в формате JSON. Он содержит структурированные данные, такие как объекты, массивы, ключи и значения, которые передаются между клиентом и сервером для выполнения операций, например, создания или обновления ресурсов.

Чтобы отправить JSON данные в запросе POST с помощью Postman, нужно открыть приложение и создать новый запрос, выбрав метод POST и введя URL-адрес запроса. Затем перейти на вкладку «Body», выбрать «raw», выбрать «JSON» в раскрывающемся меню, ввести данные JSON в текстовом поле и нажать «Send», чтобы выполнить запрос».

9. Как осуществляется аутентификация в Postman?
Как ответить:

Дайте определение различным типам методов аутентификации, поддерживаемым Postman (Basic Auth, OAuth и API Key).
Укажите, как настроить выбранный метод аутентификации, на вкладке «Authorization» запроса.
Подчеркните важность безопасного хранения и управления учетными данными аутентификации с использованием переменных окружения.
Пример ответа:

«Для аутентификации в Postman можно использовать различные методы:

Basic Auth: Передает логин и пароль в виде закодированной строки в заголовке Authorization.
OAuth: Стандартизированный протокол для авторизации через сторонние сервисы (например, OAuth 2.0), использующий токены доступа.
API Key: Передает ключ API через заголовки, параметры URL или в теле запроса для идентификации клиента.
Для настройки методов аутентификации нужно:

Перейти на вкладку Authorization в запросе.
Выбрать нужный тип аутентификации из списка.
Ввести необходимые данные (логин, пароль, токен, ключ API).
Для удобства лучше использовать переменные окружения для хранения учетных данных.
Важно не забывать о безопасности хранения учетных данных:

Нужно использовать переменные окружения для хранения чувствительных данных (например, {{apiKey}}, {{accessToken}}).
Не вставлять учетные данные напрямую в запросы или коллекции.
Ограничить доступ к переменным и следить за их безопасностью, особенно при совместной работе».
10. Какова цель Pre-request скрипта в Postman?
Как ответить:

Дайте определение Pre-request скрипта в Postman.
Объясните, зачем он нужен.
Пример ответа:

«Pre-request скрипт в Postman — это JavaScript-код, который выполняется перед отправкой HTTP-запроса. Он используется для автоматической подготовки данных, установки переменных, вычислений или выполнения других действий, необходимых перед выполнением основного запроса.

Он нужен:

Для динамического генерации значений (например, токенов, временных меток).
Для установки или обновления переменных окружения или коллекции.
Для выполнения предварительных вычислений или условий, влияющих на запрос.
Для автоматизации повторяющихся задач и повышения гибкости тестирования API».
11. Напишите тестовый скрипт в Postman, чтобы проверить, равен ли код статуса ответа 200.
Как ответить:

Напишите скрип в Postman, используя pm.response.code функцию для получения кода статуса.
Подтвердите, что код состояния равен 200, используя pm.expect.
Пример ответа:

«Чтобы написать тестовый сценарий в Postman для проверки того, равен ли код статуса ответа 200, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

pm.test("Статус-код равен 200", function () {

pm.expect(pm.response.code).to.equal(200); });

После этого отправить запрос. В разделе Test Results можно будет увидеть результат проверки — успешна или нет».

12. Как можно использовать Postman для проверки конкретных данных ответов?
Как ответить:

Напишите скрип в Postman, используя pm.response.json() функцию для анализа данных ответа и pm.expect для проверки определенных значений или ключей в ответе.
Пример ответа:

«Чтобы проверить наличие определенных данных ответа в Postman, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт для получения JSON-ответа:

const responseData = pm.response.json();

Для проверки, что ключ ‘status’ равен ‘success’

pm.test("Проверка значения ключа 'status'", function () {

    pm.expect(responseData.status).to.eql('success');

});

Для проверки, что в ответе есть ключ ‘data’ и он не пустой

pm.test("Проверка наличия и непустоты ключа 'data'", function () {

    pm.expect(responseData).to.have.property('data');

    pm.expect(responseData.data).to.not.be.empty;

}); ».

13. Объясните, как использовать Postman для объединения запросов с использованием переменных.
Как ответить:

Дайте определение цепочки запросов в Postman.
Объясните, как устанавливать и получать переменные с помощью функций pm.environment.set и pm.environment.get.
Пример ответа:

«Цепочка запросов — это последовательность запросов, в которых данные, полученные в одном запросе (например, токен или ID), передаются в следующий с помощью переменных. Это позволяет автоматизировать и динамически управлять тестированием API.

Для установки переменной нужно использовать функцию:

pm.environment.set("имя_переменной", значение);

Для получения значения переменной нужно использовать:

const value = pm.environment.get("имя_переменной");

Вкладка «Pre-request Script» в Postman используется для установки или обновления переменных перед выполнением запроса.

Вкладка «Tests» — для извлечения данных из ответа и сохранения их в переменные для использования в следующих запросах.

Это обеспечивает автоматическую передачу данных между запросами и гибкое управление тестированием API».

14. Что такое мониторинг коллекций (Postman monitors) и как его настроить?
Как ответить:

Дайте определение мониторинга коллекций Postman как инструмента для планирования и автоматизации тестов API.
Объясните, что он помогает обеспечить производительность и надежность API с течением времени.
Упомяните, что вы можете настроить его, выбрав коллекцию, настроив расписание и указав окружение.
Пример ответа:

«Мониторинг коллекций Postman — это инструмент для планирования и автоматического выполнения тестов API по расписанию. Он позволяет регулярно запускать коллекции, проверяя их работоспособность и соответствие ожидаемым результатам.

Как он помогает:

Обеспечивает постоянный контроль за производительностью и надежностью API.
Позволяет выявлять проблемы и сбои на ранних этапах, поддерживая качество сервиса с течением времени.
Настройка:

Нужно выбрать нужную коллекцию для мониторинга.
Настроить расписание запусков (например, ежедневно или каждые несколько часов).
Указать окружение (environment), чтобы тесты выполнялись с нужными переменными и настройками».
15. Как можно экспортировать и импортировать коллекции в Postman?
Как ответить:

Объясните, как экспортировать и импортировать коллекции в Postman.
Подчеркните важность использования экспортированного файла для обмена коллекциями с членами команды или в целях резервного копирования.
Пример ответа:

«Чтобы экспортировать коллекцию в Postman, нужно выбрать коллекцию, нажать кнопку «Export» и сохранить файл. 

Чтобы импортировать коллекцию, необходимо нажать кнопку «Import» и выбрать сохраненный файл.

Использование экспортированного файла коллекции в Postman является важным инструментом для обмена коллекциями с членами команды и для резервного копирования. Можно также сохранять разные версии коллекций и отслеживать изменения, что повышает управляемость проектом».

16. Напишите тестовый сценарий Postman для проверки времени отклика API.
Как ответить:

Напишите скрип в Postman, используя pm.response.responseTime функцию для получения времени отклика.
Напишите утверждение, которое будет использоваться pm.expect для проверки времени отклика относительно контрольного показателя.
Пример ответа:

«Чтобы проверить время отклика API в Postman в миллисекундах, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

const responseTime = pm.response.responseTime;

Проверка, что время отклика менее 200 миллисекунд

pm.test("Время отклика соответствует эталонному показателю", function () {

    pm.expect(pm.response.responseTime).to.be.below(200);

}); ».

17. Как использовать Postman для тестирования API с различными форматами контента (например, XML, JSON)?
Как ответить:

Объясните, что Postman поддерживает различные форматы контента, такие как XML и JSON.
Укажите, как задать заголовок «Content-Type» в желаемом формате.
Опишите, как использовать вкладку «Body» для ввода данных в указанном формате.
Пример ответа:

«Postman поддерживает работу с различными форматами контента, такими как JSON, XML, текст и другие. Это позволяет удобно отправлять данные в нужном формате для тестирования API.

Чтобы задать заголовок «Content-Type» нужно:

В разделе Headers добавить или выбрать заголовок Content-Type.
Установить его значение в нужный формат, например: application/json для JSON или application/xml для XML
или использовать вкладку Body, чтобы автоматически установить правильный заголовок при выборе формата.

Как использовать вкладку «Body»:

Перейти во вкладку Body.
Выбрать опцию raw (сырые данные).
В выпадающем списке справа выбрать нужный формат: JSON, XML, Text, и т.д.
Ввести данные в выбранном формате».
18. Объясните, как использовать консоль Postman для отладки запросов.
Как ответить:

Объясните как открыть консоль Postman и для чего ее нужно использовать.
Пример ответа:

«Чтобы открыть консоль Postman, нужно щелкнуть значок консоли в нижней части приложения (обычно это иконка в виде терминала или командной строки).

Консоль предназначена для просмотра подробных журналов всех отправленных запросов и полученных ответов. В ней отображаются:

Заголовки запросов и ответов
Тела запросов и ответов
Скрипты, выполняемые до и после запроса
Вся техническая информация, необходимая для диагностики
Консоль помогает выявлять причины проблем с API, устранять ошибки и оптимизировать работу запросов».

19. Напишите тестовый скрипт в Postman, чтобы проверить наличие определенного заголовка в ответе.
Как ответить:

Напишите скрип в Postman, используя pm.response.headers.has функцию для проверки конкретного заголовка.
Напишите утверждение, использующее pm.expect для проверки наличия заголовка.
Пример ответа:

«Чтобы написать тестовый сценарий в Postman для проверки наличия определенного заголовка в ответе, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

pm.test("Ответ содержит заголовок Content-Type", function () {

    pm.expect(pm.response.headers.has('Content-Type')).to.be.true;

}); ».

20. Как можно использовать Postman для моделирования различных ролей пользователей при тестировании API?
Как ответить:

Расскажите, что можно использовать переменные окружения для хранения различных учетных данных пользователей.
Упомяните, как переключаться между окружениями для имитации разных ролей.
Подчеркните важность использования вкладки «Авторизация» для настройки доступа на основе ролей.
Пример ответа:

«Переменные окружения в Postman позволяют хранить различные учетные данные пользователей, такие как токены, логины, пароли или другие параметры, необходимые для тестирования API. 

Можно создавать отдельные окружения для разных ролей или сценариев (например, администратор, пользователь, гость) и сохранять в них соответствующие переменные. При выполнении тестов достаточно выбрать нужное окружение — и все переменные автоматически подставятся в запросы.

Вкладка «Авторизация» играет ключевую роль в настройке доступа. Здесь можно задать тип авторизации (например, Bearer Token, Basic Auth или OAuth 2.0) и использовать переменные окружения для автоматической подстановки учетных данных. Это обеспечивает централизованное управление доступом и упрощает тестирование сценариев с разными уровнями прав».

21. Опишите, как использовать Newman с коллекциями Postman для автоматизированного тестирования.
Как ответить:

Объясните, что такое Newman.
Расскажите, как установить Newman с помощью npm и запустить коллекцию с помощью простой команды.
Подчеркните возможность интеграции Newman с конвейерами CI/CD для автоматизированного тестирования.
Пример ответа:

«Newman — это командная строка для выполнения коллекций Postman. Он позволяет запускать API-тесты, созданные в Postman, прямо из терминала или скриптов, что делает его мощным инструментом для автоматизации тестирования и интеграции в процессы CI/CD. Например, можно автоматически запускать проверки API при каждом коммите или релизе.

Для установки Newman глобально нужно в терминале выполнить команду:

npm install -g newman .

Чтобы запустить коллекцию нужно указать путь к файлу коллекции (например, collection.json) с помощью:

newman run collection.json».

22. Напишите тестовый сценарий Postman, чтобы проверить, что тело ответа содержит определенный ключ.
Как ответить:

Напишите скрип в Postman, используя pm.response.json() функцию для анализа тела ответа.
Напишите утверждение, использующее pm.expect для проверки наличия определенного ключа.
Пример ответа:

«Чтобы проверить, что тело ответа содержит определенный ключ в Postman, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

Анализируем тело ответа как JSON

const responseBody = pm.response.json();

Проверяем, что в ответе есть ключ ‘yourKey’

pm.test("Ответ содержит ключ 'yourKey'", function () {

    pm.expect(responseBody).to.have.property('yourKey');

}); ».

23. Как настроить mock-сервер (фиктивный сервер) в Postman?
Как ответить:

Объясните, зачем использовать фиктивный сервер и как его настроить в Postman.
Подчеркните важность настройки mock-сервера.
Пример ответа:

«Mock-сервер в Postman позволяет имитировать ответы API без необходимости обращения к реальному серверу. Это особенно полезно для разработки и тестирования, когда реальный API еще недоступен или его использование нежелательно по причинам безопасности или стоимости.

Чтобы создать mock-сервер, в Postman нужно выбрать «New» → «Mock Server». После этого можно настроить его, добавляя коллекции запросов и определяя для них примерные ответы (ответы-заглушки). Эти примеры можно использовать для тестирования различных сценариев, например, успешных ответов, ошибок или особых условий. Это ускоряет разработку, повышает надежность тестирования и помогает выявлять проблемы на ранних этапах».

24. Объясните, как использовать Postman для тестирования ограничения частоты запросов (rate limiting) на API.
Как ответить:

Дайте определение для ограничения частоты запросов (rate limiting).
Объясните, как использовать Postman для быстрой последовательной отправки нескольких запросов с целью проверки ограничения скорости.
Упомяните о важности проверки заголовков ответов на предмет статуса ограничения скорости и информации о повторных попытках.
Пример ответа:

«Ограничение частоты запросов — это механизм, используемый API для ограничения количества запросов, которые клиент может отправить за определённый промежуток времени. Это помогает предотвратить перегрузку сервера, обеспечить равномерное распределение ресурсов и защитить систему от злоупотреблений.

Чтобы проверить, как API реагирует при превышении лимита, можно использовать Postman для последовательной отправки нескольких запросов подряд. Например, создать коллекцию или использовать Runner, чтобы быстро отправлять серию запросов. Если лимит достигнут, сервер обычно возвращает статус-код 429 (Too Many Requests).
Важно также анализировать заголовки ответа, такие как X-RateLimit-Limit, X-RateLimit-Remaining и Retry-After. Они предоставляют информацию о текущем лимите, оставшихся запросах и времени до сброса лимита. Это помогает понять, когда можно снова отправлять запросы и избегать ошибок из-за превышения лимита».

25. Напишите тестовый скрипт Postman, чтобы проверить, соответствует ли ответ ожидаемому формату (например, проверка схемы JSON).
Как ответить:

Напишите скрип в Postman, используя pm.response.json() функцию для анализа тела ответа.
Напишите утверждение, использующееся tv4.validate для проверки ответа на соответствие ожидаемой JSON схеме.
Пример ответа:

«Чтобы проверить, соответствует ли ответ ожидаемому формату с помощью проверки схемы JSON, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

Анализируем тело ответа как JSON

const responseBody = pm.response.json();

Определяем ожидаемую JSON-схему

const schema = {

  "type": "object",

  "properties": {

    "id": { "type": "integer" },

    "name": { "type": "string" },

    // добавьте другие свойства по необходимости

  },

  "required": ["id", "name"]

};

Проверяем соответствие тела схемы

pm.test("Ответ соответствует ожидаемой схеме", function () {

  pm.expect(tv4.validate(responseBody, schema)).to.be.true;

}); ».

Советы по подготовке
Ознакомьтесь с функциями Postman: убедитесь, что вы понимаете ключевые функции, такие как коллекции, окружения и консоль Postman. Знание того, как эффективно их использовать, может выделить вас.
Практика написания тестовых скриптов: освойтесь с написанием тестовых скриптов JavaScript в Postman. Сосредоточьтесь на общих задачах, таких как проверка кодов статуса ответа, проверка времени ответа и проверка данных ответа.
Понимание методов аутентификации: разберитесь в различных методах аутентификации, поддерживаемых Postman, таких как Basic Auth, OAuth и API Key. Научитесь их настраивать во вкладке «Авторизация».
Научитесь использовать переменные окружения: освойте использование переменных окружения для управления различными средами и передачи данных между запросами.
Исследуйте автоматизацию с Newman: ознакомьтесь с Newman, инструментом командной строки для запуска коллекций Postman. Узнайте, как интегрировать его с конвейерами CI/CD (CI/CD pipelines) для автоматизированного тестирования.

Примеры тестовых сценариев Postman
 08.11.21
Интеграция - WEB-интеграция

 
Перевод статьи https://learning.postman.com/docs/writing-scripts/script-references/test-examples/
От переводчика: перевожу как основу для статьи по полноценному описанию и тестированию API сервиса. До этого были связанные с этой темой статьи по OpenAPI и Использование скриптов . Ссылка на Postman.

---

Postman предоставляет API-интерфейсы JavaScript, которые вы можете использовать в своих сценариях запросов. Объект pm предоставляет большую часть функциональных возможностей для тестирования данных запроса и ответа, а объект postman обеспечивает некоторый дополнительный контроль рабочего процесса.

Вы можете использовать вкладку Tests в своих запросах и коллекциях для написания тестов, которые будут выполняться, когда Postman получит ответ от API, которому вы отправили запрос. Вы можете добавить столько тестов, сколько вам нужно для каждого запроса. Когда вы добавляете тесты в Collections, они будут выполняться после каждого запроса внутри нее.

Postman отображает фрагменты кода справа от области сценария. Вы можете добавить их, чтобы опробовать распространенные сценарии, и настроить их в соответствии с вашими потребностями и деталями запроса / ответа.

 

Начало работы с тестами
Чтобы попробовать написать тестовый сценарий в первый раз, откройте запрос в приложении Postman и откройте вкладку Tests. Введите следующий код JavaScript:

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
Этот код использует библиотеку pm для запуска testметода. Текстовая строка появится в выводе теста. Функция внутри теста представляет собой утверждение. Тесты почтальона могут использовать синтаксис BDD библиотеки утверждений Chai, который предоставляет возможности для оптимизации того, насколько удобочитаемы ваши тесты для вас и ваших сотрудников. В этом случае код использует цепочки BDD to.haveдля выражения утверждения.

Этот тест проверяет код ответа, возвращаемый API. Если код ответа есть 200, тест пройдет, в противном случае он завершится неудачей. Нажмите Отправить и проверьте вывод результатов теста в области ответов.

Попробуйте изменить код состояния в коде утверждения и запустить его снова, чтобы увидеть, как результаты теста выглядят по-разному, когда они проходят или не проходят.



Вы можете структурировать свои тестовые утверждения различными способами в соответствии с вашей логикой и предпочтениями с точки зрения того, как вы хотите выводить результаты. Следующий код является альтернативным способом выполнения того же теста, что и приведенный выше, с использованием expectсинтаксиса:

pm.test("Status code is 200", () => {
  pm.expect(pm.response.code).to.eql(200);
});
 

Использование нескольких утверждений
Ваши тесты могут включать несколько утверждений как часть одного теста, вы можете использовать это для группировки связанных утверждений.

pm.test("The response has all properties", () => {
    // разобрать json ответ и проверить три свойства
    const responseJson = pm.response.json();
    pm.expect(responseJson.type).to.eql('vip');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.id).to.have.lengthOf(1);
});
Если какое-либо из содержащихся утверждений завершится неудачно, тест в целом завершится неудачно. Все утверждения должны быть успешными, чтобы тест прошел успешно.

Примечание переводчика: как прервать проверку если условие не выполнено нужно уточнить.

 

Анализ данных тела ответа
Чтобы выполнить утверждения в ваших ответах, вам сначала нужно будет проанализировать данные в объекте JavaScript, который могут использовать ваши утверждения.

Для разбора данных JSON используйте следующий синтаксис:

const responseJson = pm.response.json();
Для разбора XML используйте следующее:

const responseJson = xml2Json(pm.response.text());
Примечание: Если вы имеете дело со сложными XML-ответами, вам может пригодиться запись в журнал консоли.

Для анализа CSV используйте утилиту анализа CSV:

const parse = require('csv-parse/lib/sync');
const responseJson = parse(pm.response.text());
Для анализа HTML вы можете использовать cheerio:

const $ = cheerio.load(pm.response.text());
//вывод html-кода для тестирования
console.log($.html());
 

Обработка ответов, которые не парсятся
Если вы не можете проанализировать тело ответа на JavaScript, потому что оно не отформатировано как JSON, XML, HTML, CSV или любой другой формат данных, поддающийся анализу, вы все равно можете делать утверждения в отношении данных.

Вы можете проверить, содержит ли тело ответа строку:

pm.test("Body contains string",() => {
  pm.expect(pm.response.text()).to.include("customer_id");
});
Это не покажет вам, где была обнаружена строка, потому что она выполняет проверку всего тела ответа. 

Вы также можете проверить, соответствует ли ответ строке (что обычно эффективно только при коротких ответах):

pm.test("Body is string", function () {
  pm.response.to.have.body("whole-body-text");
});
Примечание переводчика: для формата например "x-form-urlencoded" и подобного думаю возможно найти библиотеки и подключить их в тесты.

 

Создание утверждений в HTTP-ответе
Ваши тесты могут проверять различные аспекты ответа на запрос, включая текст, коды состояния, заголовки, файлы cookie, время ответа и многое другое.

 

Тестирование тела ответа
Вы можете проверить наличие определенных значений в теле ответа:

pm.test("Person is Jane", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Jane");
  pm.expect(responseJson.age).to.eql(23);
});
 

Тестирование кодов состояния
Вы можете проверить код состояния ответа:

pm.test("Status code is 201", () => {
  pm.response.to.have.status(201);
});
Если вы хотите проверить, является ли код состояния одним из набора, вы можете включить их все в массив и использоватьoneOf:

pm.test("Successful POST request", () => {
  pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
 

Тестирование заголовков
Вы можете проверить наличие заголовка ответа:

pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});
Вы также можете проверить заголовок ответа, имеющий определенное значение:

pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});
 

Тестирование файлов cookie
Примечание переводчика: По сути это заголовок с в виде строки c данными разделенными ";".

Вы можете проверить, присутствует ли файл cookie в ответе:

pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.true;
});
Вы также можете проверить наличие определенного значения файла cookie:

pm.test("Cookie isLoggedIn has value 1", () => {
  pm.expect(pm.cookies.get('isLoggedIn')).to.eql('1');
});
 

Тестирование времени отклика
Вы можете проверить, чтобы время отклика находилось в заданном диапазоне:

pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
 

Общие примеры проверок (assertion)
Читайте дальше, чтобы найти некоторые примеры распространенных проверок, которые могут оказаться полезными в ваших сценариях, как они описаны ниже, или отредактировав детали в соответствии с вашими собственными потребностями.

 
Проверка значения ответа по переменной
Вы можете проверить, имеет ли свойство ответа то же значение, что и переменная (в данном случае переменная среды).

pm.test("Response property matches environment variable", function () {
  pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});
В разделе Использование переменных приведен обзор операций, которые можно использовать для управления переменными в ваших сценариях.

 

Проверка типа значения
Вы можете проверить тип любой части ответа.

/* ответ имеет такую структуру:
{
  "name": "Jane",
  "age": 29,
  "hobbies": [
    "skating",
    "painting"
  ],
  "email": null
}
*/
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.name).to.be.a("string");
  pm.expect(jsonData.age).to.be.a("number");
  pm.expect(jsonData.hobbies).to.be.an("array");
  pm.expect(jsonData.website).to.be.undefined;
  pm.expect(jsonData.email).to.be.null;
});
 

Проверка свойств массива
Вы можете проверить, является ли массив пустым или нет, и содержит ли он определенные элементы.

/*
ответ имеет такую структуру:
{
  "errors": [],
  "areas": [ "goods", "services" ],
  "settings": [
    {
      "type": "notification",
      "detail": [ "email", "sms" ]
    },
    {
      "type": "visual",
      "detail": [ "light", "large" ]
    }
  ]
}
*/

const jsonData = pm.response.json();
pm.test("Test array properties", () => {
    //массив ошибок пуст
  pm.expect(jsonData.errors).to.be.empty;
    //массив включает в себя "товары"
  pm.expect(jsonData.areas).to.include("goods");
    
  //получить объект настроек уведомлений
  const notificationSettings = jsonData.settings.find
      (m => m.type === "notification");
  pm.expect(notificationSettings)
    .to.be.an("object", "Could not find the setting");
    //массив "detail" должен включать "sms"
  pm.expect(notificationSettings.detail).to.include("sms");
    //массив "detail" должен включать все перечисленные элементы
  pm.expect(notificationSettings.detail)
    .to.have.members(["email", "sms"]);
});
 

Проверка свойств объекта
Вы можете проверить, что объект содержит ключи или свойства.

pm.expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
pm.expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
pm.expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
pm.expect({a: 1}).to.have.property('a');
pm.expect({a: 1, b: 2}).to.be.an('object')
  .that.has.all.keys('a', 'b');
Целью может быть object, set, arrayили map. Если .keysвыполняется без .allили .any, выражение по умолчанию равно .all. Поскольку .keysповедение зависит от type, рекомендуется проверить typeперед использованием .keysс помощью .a.

 

Проверка, что значение находится в наборе
Вы можете проверить значение ответа по списку допустимых параметров.

pm.test("Value is in valid list", () => {
  pm.expect(pm.response.json().type)
    .to.be.oneOf(["Subscriber", "Customer", "User"]);
});
 

Проверка, что объект содержится в ответе
Вы можете проверить, является ли объект частью родительского объекта.

/*
ответ имеет следующую структуру:
{
  "id": "d8893057-3e91-4cdd-a36f-a0af460b6373",
  "created": true,
  "errors": []
}
*/

pm.test("Object is contained", () => {
  const expectedObject = {
    "created": true,
    "errors": []
  };
  pm.expect(pm.response.json()).to.deep.include(expectedObject);
});
Использование .deepзаставляет все.equal.include,.members,.keys, и .propertyутверждения , которые следуют в цепочке, использовать глубокое равенство (свободное равенство) вместо строгого (===) равенства. В то время .eqlкак также сравнивается слабо, .deep.equalприводит к тому, что сравнения с глубоким равенством также используются для любых других утверждений, которые следуют в цепочке, в то время .eqlкак это не так.

 

Проверка текущего окружения
Вы можете проверить активную (выбранную в данный момент) среду в Postman.

pm.test("Check the active environment", () => {
  pm.expect(pm.environment.name).to.eql("Production");
});
 

Устранение распространенных ошибок тестирования
Когда вы сталкиваетесь с ошибками или неожиданным поведением в своих тестовых сценариях, консоль почтальона может помочь вам определить источник. Комбинируя console.logинструкции отладки с утверждениями теста, вы можете изучить содержимое HTTP-запросов и ответов, а также элементы данных почтальона, такие как переменные.

 

Вы можете записать значение переменной или свойства ответа:

console.log(pm.collectionVariables.get("name"));
console.log(pm.response.json().name);
Вы можете записать тип переменной или свойства ответа:

console.log(typeof pm.response.json().id);
Вы можете использовать журналы консоли для обозначения выполнения кода, иногда известного как "операторы трассировки":

if (pm.response.json().id) {
  console.log("id was found!");
  // do something
} else {
  console.log("no id ...");
  //do something else
}
 

Ошибка проверки равенства
Вы можете столкнуться с AssertionError: expected <value> to deeply equal '<value>'. Например, это может возникнуть при использовании следующего кода:

pm.expect(1).to.eql("1");
Это происходит потому, что тест сравнивает число со строковым значением. Тест вернет значение true только в том случае, если и тип, и значение равны.

 

Ошибка JSON не определен
Вы можете столкнуться с этой ReferenceError: jsonData is not definedпроблемой. Обычно это происходит, когда вы пытаетесь ссылаться на объект JSON, который не был объявлен или находится за пределами области действия вашего тестового кода.

pm.test("Test 1", () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData.name).to.eql("John");
});

pm.test("Test 2", () => {
  pm.expect(jsonData.age).to.eql(29); // jsonData не определен
});
Убедитесь, что любой код, устанавливающий данные вашего ответа в переменную, доступен для всего тестового кода, например, в этом случае вызовconst jsonData = pm.response.json();перед pm.testсделает его доступным для обеих тестовых функций.

 

Неопределенная ошибка проверки
Вы можете столкнуться с этой AssertionError: expected undefined to deeply equal..проблемой. Обычно это происходит, когда вы ссылаетесь на свойство, которое не существует или находится вне области действия.

pm.expect(jsonData.name).to.eql("John");
В приведенном выше примере, если вы видите AssertionError: expected undefined to deeply equal 'John', это указывает на то, что nameсвойство не определено в jsonDataобъекте.

 

Тест не провалился
Могут быть случаи, когда вы ожидаете, что тест провалится, но этого не происходит.

//тестовая функция не определена должным образом - отсутствует второй параметр
pm.test("Not failing", function () {
    pm.expect(true).to.eql(false);
});
Убедитесь, что ваш тестовый код синтаксически корректен, и повторите попытку отправки запроса.

 

Проверка структуры ответа
Вы можете выполнить проверку схемы JSON с помощью tv4

Примечание переводчика: Tiny Validator (for v4 JSON Schema), устарел, выдает общий статус проверки.

const schema = {
 "items": {
 "type": "boolean"
 }
};
const data1 = [true, false];
const data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
Вы также можете проверить схему JSON с помощью ajv по умолчанию.

Примечание переводчика: Ajv JSON schema validator, выдает развернутую ошибку AssertionError: expected data to satisfy schema but found following errors:...

const schema = {
  "properties": {
    "alpha": {
      "type": "boolean"
    }
  }
};
pm.test('Schema is valid', function() {
  pm.response.to.have.jsonSchema(schema);
});
Примечание переводчика: Использование Ajv для объекта

var Ajv = require('ajv'),
    ajv = new Ajv({logger: console});

pm.test("Response use a valid schema", function() {
    pm.expect(ajv.validate(cam, RECTILINEAR_SCHEMA)).to.be.true;
    });
 

Отправка асинхронного запроса
Вы можете отправить запрос из своего кода тестов и зарегистрировать ответ.

pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
 

Следующие шаги
Вы можете автоматизировать свои тестовые запуски с помощью программы сбора данных.

Postman Interview Questions and Answers
Изучите лучшие вопросы и ответы по Postman для новичков и опытных кандидатов, чтобы подготовиться к собеседованиям.

Всего вопросов: 30
Postman Interview Questions and Answers
Лучшее LIVE пробное интервью, которое стоит посмотреть перед собеседованием
Изучите лучшие вопросы и ответы по Postman для новичков и опытных кандидатов, чтобы подготовиться к собеседованиям.


Инструменты
Что вы можете делать здесь: готовиться к интервью, практиковаться с тестами, изучать учебные материалы, сравнивать связанные темы и использовать бесплатные онлайн-инструменты для валидации, кодирования, хеширования, работы с сетью, SEO и анализа сайтов.

Postman Interview Questions and Answers
Найдите вопрос, чтобы посмотреть ответ.

Найдите вопрос, чтобы посмотреть ответ.
Найти вопрос
Вопросы и ответы для новичков / начинающего уровня
Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для среднего уровня / опыта от 1 до 5 лет
Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

Postman Interview Questions and Answers
Найдите вопрос, чтобы посмотреть ответ.

Найдите вопрос, чтобы посмотреть ответ.
Найти вопрос
Вопросы и ответы для новичков / начинающего уровня
Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для среднего уровня / опыта от 1 до 5 лет
Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

60+ Top Postman Interview Questions & Answers
By Haroon Ahamed Kitthu
Share This Article:
Last updated on Jun 16, 202682408
60+ Top Postman Interview Questions and Answers
Postman is a widely used API testing and development tool that simplifies working with APIs. As the demand for robust and efficient APIs grows, proficiency in using Postman has become a valuable skill for software developers, quality assurance engineers, and API enthusiasts.

To help you prepare for an interview focused on Postman, we have compiled a comprehensive list of common Postman interview questions. Whether you are a beginner or have some experience with Postman, these questions will cover various aspects of the tool, from basic concepts to advanced features.

Whether you are a beginner aiming to enter the world of API testing or an experienced professional looking to validate your skills, this collection of Postman interview questions will serve as a valuable resource to help you prepare effectively. 

Want a Top Software Development Job? Start Here!AI-Powered Full Stack Developer ProgramExplore ProgramWant a Top Software Development Job? Start Here!
Most Asked Postman Interview Questions
1. Explain the purpose and benefits of using Postman for API testing? 
Postman is a powerful tool for API testing that offers numerous benefits. Its purpose is to simplify and streamline the process of testing APIs. Some benefits of using Postman for API testing include:

Easy API Exploration: Postman provides a user-friendly interface for creating and sending requests to APIs, allowing you to explore and understand their functionalities.
Efficient Testing: With Postman, you can quickly test various scenarios by sending different types of requests (GET, POST, PUT, DELETE) and examining the responses.
Request and Response Validation: Postman allows you to validate API responses, ensuring they meet the expected criteria and identifying any errors or inconsistencies.
Environment Management: Postman lets you create and manage environments, making it convenient to switch between different setups, such as development, staging, and production.
Collaboration and Sharing: Postman facilitates teamwork by enabling the sharing of collections, requests, and test suites, fostering collaboration among developers, testers, and other stakeholders.
2. How do you create and send a request in Postman? 
To create and send a request in Postman, follow these steps:

Open Postman and create a new request by selecting the appropriate HTTP method (e.g., GET, POST) from the dropdown menu.
Enter the request URL in the address bar.
Add any required headers, query parameters, or request body data, depending on the API endpoint's requirements.
Click the "Send" button to send the request to the API server.
Postman will display the response, including the status code, headers, and body, allowing you to analyze the results of your request.

3. What are some key features of Postman that you find most useful in your testing workflow?
 Some key features of Postman that are often found useful in testing workflows include:

Collections: It allows you to organize and group related requests, making managing and executing test suites easier.
Variables and Environments: Postman allows you to define variables and environments, which help parameterize requests and manage different testing environments.
Test Scripts: Postman's test scripts, written in JavaScript, enable you to automate assertions, extract data from responses, and perform complex validations.
Pre-request Scripts: These scripts allow you to perform actions before sending a request, such as setting up dynamic data or configuring authentication.
Request History: Postman keeps a history of previously sent requests, allowing you to revisit and retest them without re-entering the details.
Collection Runner: The Collection Runner feature allows you to execute multiple requests in a collection as a test suite, enabling automation and bulk testing.
4. How do you handle authentication and authorization in Postman?
Postman provides multiple ways to handle authentication and authorization in API requests. Some commonly used methods include:

Basic Authentication: You can include the username and password in the request headers using the "Authorization" header.
Token-based Authentication: Postman allows you to include tokens (such as JWT or OAuth) in the request headers or as query parameters.
API Key: If an API requires an API key, you can pass it as a request header or query parameter.
OAuth 2.0: Postman has built-in OAuth 2.0 support, allowing you to configure and authenticate using various OAuth flows, such as Authorization Code or Client Credentials.
Custom Authentication: Postman's scripting capabilities enable you to implement custom authentication mechanisms by modifying request headers or using specialized libraries.
5. Can you describe the process of creating and running automated tests in Postman?
To create and run automated tests in Postman, follow these steps:

Create a new request in Postman or open an existing one.
Write test scripts using JavaScript to validate the API response, assert specific conditions, or extract data.
Save the request in a collection.
Go to the "Collections" tab and click on the three-dot menu next to the collection name.
Select "Edit" to open the collection, then click on the "Tests" tab.
Write and organize test scripts for the entire collection or individual requests within the collection.
Save the collection.
To run the automated tests, go back to the "Collections" tab and click on the arrow icon next to the collection name.
Choose the desired test environment, if applicable.
Click on "Run" to execute the tests in the collection.
Postman will run the requests and display the test results, highlighting any failures or errors encountered during the execution.
Postman Interview Questions for Freshers
6. What is Postman?
Postman is a collaboration platform for API development. It is a recognized API client that enables you to organize the creation, division, testing, and documentation of APIs. We can send HTTP/s requests to a repair and receive their responses using the Postman tool. It will enable us to approve the service's uptime and functionality.

7. What is a collection in Postman?
In Postman, a collection allows you to group related requests. You can also use it to organize the requests into folders systematically.

8. Why do we use Postman?
Following are some of the most important reasons for using Postman:

It is software that aids with API testing and is available for free use
It aids in managing the complete API lifecycle
It provides Runtime Service to assist with managing API collections, workspaces, environments, and many examples
Additionally, Postman may get integrated with CI/CD programs like Circle CI, Jenkins, etc
It offers a sizable community forum where you can quickly find solutions to any technical problems you run across while using the tool
9. What is an API?
Application Programming Interface is referred to as API. Technically speaking, an API is a collection of steps, functions, and other points of access that a program, an operating system, a library, etc. makes available to programmers so they can use it to communicate with other software programs.

10. Name some tools used for API Testing?
The following list includes some of the tools used for API testing:

Postman 
Tricentis Tosca 
Katalon Studio 
Apigee 
Jmeter
SoapUI
11. What API information is exposed in Web Developer tools?
API information for request headers, response body, and response cookies is exposed in web developer tools.

12. What can we use to get API information from web developer tools into Postman?
Copy as cURL allows Postman to receive API data from web developer tools.

13. Where are query parameters stored in a GET request?
The query parameters for the GET request are saved in Postman's URL.

14. What is meant by the term environment in Postman?
An environment in Postman is a group of key-value pairs. Postman allows you to create various environments that you can switch instantly with a button. There are two different sorts of environments: global and local. They define the variable's scope so you can use it in requests.

15. What are the core components of an HTTP request?
An HTTP request is made up of five major components:

HTTP methods: A collection of request techniques used to carry out particular actions on resources (GET, PUT, POST, DELETE)
URI (Uniform Resource Identifier): locates a resource.
Version of HTTP (example- HTTP v1.1)
Content-Type: application/JSON, Content-Length: 511) Request Headers
Payload: The message content is contained in the request body.
Prepare Yourself to Answer All Questions!AI-Powered Automation Test Engineer ProgramExplore ProgramPrepare Yourself to Answer All Questions!
16. State the Core Components of an HTTP Response?
Four essential components are present in each HTTP response:

According to the HTTP request's resource, the server's status is indicated by the Status/Response Code. Examples include 404 (resource not found) and 200 (response ok).
HTTP Version - Indicates the version of HTTP being used, such as HTTP v1.1.
The response header is where key-value pairs of metadata for the HTTP response message are stored—for instance, content length, content type, response date, and server type.
The response body indicates response message content or resource representation.
17. What is GUID?
Global Unique Identifier is referred to as GUID. It consists of hexadecimal digits separated by hyphens. This Postman identifier GUID fulfills the goal of uniqueness.

18. What is the HTTP response code for a POST request with incorrect parameters?
The correct response code for a request with incorrect parameters is 400 Bad Request.

19. Can local variables be imported in Postman Monitors?
Yes, you can import local variables into Postman Monitors. However, global variables cannot get imported into Postman Monitors.

20. How can you iterate a request 100 times in Postman?
With the help of Collection Runner, Postman allows us to iterate a request 100 times.

21. Which programming language is used for Postman tests?
Postman tests are run using JavaScript.

22. What is a Postman Collection?
We can group several needs using a Postman Collection. It merely enables us to organize the requests into folders.

23. What do you understand by the term Postman Collection runners?
Data-driven testing is carried out by using a Postman collection runner. API requests are collected for numerous iterations with various data sets.

24. What is Postman cloud’s purpose if we work in a company? Why?
A Postman cloud is a shared repository where businesses can access Postman collections. Work can be immediately saved in the Postman cloud after logging in. Data and collections are accessible to team members from any location.

25. Why is it not preferred to save work in Postman cloud?
Since company work cannot be disclosed and must be kept confidential, it is not advised or desired to save your work in the Postman cloud. Since Postman requires sign-in, saving your work there could lead to a security risk.

Learn 15+ In-Demand Tools and Skills!AI-Powered Automation Test Engineer ProgramExplore ProgramLearn 15+ In-Demand Tools and Skills!
26. How will you log variable values in Postman?
You may use the following command in Postman to log the variable values on the console:

console.log(pm.variables.get("variable_name"));

27. How do you access postman variables?
You may access a Postman variable using the variable name {{var}}.

28. What are the various authorization methods provided by Postman?
Postman provides the following API request authorization options:

API Key 
Basic auth 
Digest auth 
Hawk Authentication 
Oauth 1.0 
Oauth 2.0 
Bearer Token
NTLM Authentication
AWS Signature 
29. What are the different types of API requests supported in Postman?
The following is a list of the various API requests that Postman supports:

GET
POST
PUT
PATCH
COPY
DELETE
HEAD
OPTIONS
LINK
UNLINK
PURGE
LOCK
UNLOCK
PROPFIND
VIEW
30. How are Query Params different from Path Variables?
Query parameters are used to sort or filter the resources, and Path Variables gets used to identify specific resources.

31. What is Basic Auth in Postman?
Basic Auth is a method of authorization offered by Postman for HTTP user agents, such as web browsers, to enter login and password. It becomes connected with the request after the username and password are entered.

32. What is digest auth in Postman?
One of Postman's authorization techniques is digest auth or digest authorization. Through this method, clients can send requests to the API first and then receive responses from the server, such as 401 illegal responses and numbers that can only be used once as absolute values. 

33. What encoding is accepted by Postman in authorization credentials?
Postman only takes authorization credentials encoded in Base64. Postman already has this feature, or you can use a third-party service to convert the credentials to base64.

34. Can we have the same names for global variables in Postman?
Global variables cannot have identical names since doing so would confuse the software because they are devoid of any environment. The terms of local variables might be the same across various environments.

35. What do you know about the postman monitor?
For running collections, the postman monitor is employed. Collections are kept running for the duration of the user-defined time. The user must get logged in to utilize Postman Monitor. Users regularly send emails to one another to share the monitor reports.

36. What is a binary form in POST methods?
Postman's binary form is made to send data in a format that you cannot manually type. You use these options, which cannot be manually typed, such as an image, a file, etc., because everything in a computer is transformed into binary.

37. What are the limitations of Postman?
The following is a list of Postman's main drawbacks:

Postman cannot process 1000+ API requests.
It might be challenging to manage collections and requests for large projects.
For managing the workspace as code, Postman is not appropriate. It is because dynamic API requests would result in a lot of code duplication.
38. How can you save the responses of API to a file in Postman?
There are two ways to save an API response to a file in Postman:

First, in the response section, click the download button.
Then, press the arrow next to the send button. An option to send and download is available here. After clicking it, Postman will prompt you for the location to save the response after the request gets successfully executed.
39. What is the significance of 301 status code?
When a page has been permanently redirected from one website page to another, Postman's 301 status code gets used to indicate this. The search engine is informed that the old page is out-of-date and has to index the URL of the new page.

40. Define status code 201.
When you successfully create a resource using a POST or PUT request, the status code 201 denotes that the resource has been created. It uses the location header to return a link to a newly built resource.

41. When do we use global variables, collection variables, and local variables?
Global variables are all-purpose variables perfect for prototyping and quick results. They get utilized when transferring data to other requests.

You can most frequently use collection variables to store constants that don't change while the Collection is being executed. They are used for constants that remain the same throughout execution and for URLs and authentication credentials when just one environment is present.

Local variables are only accessible for the duration of the request that set them or while using the Newman/Collection runner. They get used whenever you want to override all other variable scopes.

42. How do you remove local variables?
Once you run and finish the tests, the local variables are automatically eliminated.

43. What is the difference between form data and x-www-form-urlencoded?
The primary distinction between form data and x-www-form-urlencoded is that the URL is pre-arranged when sent via x-www-form-urlencoded.

Want a Top Software Development Job? Start Here!AI-Powered Full Stack Developer ProgramExplore ProgramWant a Top Software Development Job? Start Here!
44. How do you access the history of requests in Postman?
The History tab in the Postman application allows us to access the history of requests. The record will be synced amongst all your logged-in devices when we login into the Postman account. The view will load the request we saved while working on it earlier after clicking on any of the requests shown in the History tab. 

Postman Interview Questions for Experienced
45. Why is Base64 encoding primarily used in Postman?
As a result of the data being transmitted in textual form and being sent in a more accessible format, like HTML form data, the Base64 authorization credentials are typically employed. Base64 is so popular because we can rely on the same 64 characters regardless of the encoding language we use.

46. What is the purpose of the 304 status code?
The meaning of the status code 304 is "Not Modified." It is utilized in conditional GET requests to reduce network bandwidth usage. The response's body must be empty. Dates, locations, and other information should be in the headers.

47. Is it preferable to save our work on Postman Cloud?
Saving your work in the Postman cloud is not recommended because business work cannot be disclosed and must be kept private. Since Postman cloud requires sign-in, security breaches could happen if it gets used. Therefore, using Postman Cloud to save work is discouraged, and team workspace is strongly recommended.

48. What are the various variable scopes provided by Postman?
Postman provides the following variable scopes:

Global Variables
Local Variables
Environment Variables 
Collection Variables
Data Variables
49. Is it possible to reuse the authentication token for multiple requests?
You can indeed use the authentication token more than once. To do this, create a collection, add all requests with the same authentication token, and then assign the Collection with the auth token to the Collection. By choosing "Inherit auth from parent" under the Authorization tab, we may apply it to each request separately.

50. How do you write test cases for basic authentication in Postman?
One of the authentication methods offered by Postman, Basic Authentication, ensures we can specify the username and password along with the API calls. We can achieve this by first configuring the API's credentials by:

Going to the Authorization tab
From the drop-down option, choose Basic Auth
Enter the API's username and password in the corresponding fields
You can write the test cases like this:

pm.test("Is the Request Authenticated?", function () {

       var jsonData = pm.response.json();

       //if authenticated then assert to true

pm.expect(jsonData.authenticated).to.eql(true);

  });

pm.test("Is the Content-Type present?", function () {

pm.response.to.have.header("Content-Type");

  });

pm.test("Is it a successful POST Request?", function () {

pm.response.to.have.status(200);

  });

51. How do you set the same headers for all requests in a Postman Collection?
Pre-request scripts are supported at the collection level and for individual requests in Postman. Any script that applies to every request in the Collection may get included in the pre-request scripts. The steps are as follows:

To access the pre-request tab, right-click the Collection.

Add the script's lines of code below to add a request header for each request included in the Collection.

pm.request.headers.add({

    key: 'TestHeader',

    value: 'testValue'

});

To save the script, click Update.

Run the request in the Collection and check the Postman console to ensure that the headers have been added.

52. What are workspaces in Postman? What are their uses?
Postman workplaces are just areas or spaces where one or more people can collaborate on the same Collection or set of collections. It allows the collections or requests to get logically separated from one another. Postman supports two different types of workspaces: Team and Personal.

53. Does Postman provide a feature to log requests and responses?
The Postman software does allow users to view requests and response parameters. But after applying the pre-request scripts, it is essential to see how you sent the request. To inspect every request and response detail in such circumstances, Postman includes an additional tool called "Postman Console." By having console.log statements in the scripts, you can additionally log the information in the console.

54. How will you stop the execution of upcoming requests or the execution of the collections?
You can use the code below to stop processing the next request: pm.setNextRequest (null);

55. What do you understand by the pre-request script?
Pre-request scripts are those used to run Javascript code before a request is made. Pre-processing tasks, including setting variables, parameters, headers, body data, etc., are performed using it.

56. How can we use Custom Javascript libraries in our scripts with an example?
We may utilize the many built-in tools and libraries that Postman offers to include our pre- or post-request scripts or test cases. Consider the use of the moment.js library. It offers a variety of helpful methods for formatting data around time. Consider a POST request that must provide the generated date for the user, who anticipates the format "DD/MM/YYYY." You can use the moment library with just one line of code. To obtain the data with the proper formatting and then store it in an environment variable, we must add the following lines of code to our pre-request script:

var moment = require('moment');

pm.environment.set('createdDate',moment().format('DD/MM/YYYY'));

57. If we have a global and a local variable of the same name, which one will be given the most preference in Postman?
In certain circumstances, the global variable's value is overwritten to give the local variable higher precedence.

58. Does Postman allow flexibility to make use of the command-line?
Any Postman collection can get executed using the Newman command-line tool that Postman offers. This NodeJS-based package uses the Newman Collection Runner to execute collections and therefore needs a node environment. It supports running assertions, pre-request scripts, or other request scripts linked with the requests that are a part of the Collection, just like Postman's Collection Runner does.

59. How will you generate random numbers of a given range in Postman?
Assuming you want to create numbers between the ranges of 1 to N, the pre-request script can be written as follows:

pm.globals.set('randomNumber', Math.floor(Math.random() * N));

This variable can then be used in the URL as follows:{{randomNumber}}

60. What do you understand about ScratchPad?
Postman allows us to work without a connection to its servers by giving us access to Scratch Pad. It offers the freedom of using some of Postman's functionalities offline. The features include sending requests, creating requests, and adding requests to collections. 

61. How do you get the cURL command based on the details of the REST API obtained from Postman?
You can use the steps listed below to get the cURL command equivalent:

As indicated below, click the Code icon.

Postman_Interview_1

Step 1 - Click on Code 

In response to the REST API request, you will receive the cURL command:

Postman_Interview_2

Step 2 - REST API request 

By choosing the necessary choice from the drop-down, as shown in the image below, we can also obtain the command for the request in several languages, such as C#, Javascript, NodeJs, PHP, etc.

Postman_Interview_3.

Step 3 - Select Language 

Top 47 Postman Interview Questions and Answers (2026)
By :
Thomas HamiltonThomas Hamilton
Updated
February 13, 2026

Add Guru99 on Google
The Postman is a popular API testing tool that helps the development team create, share, and test documents of API. The Postman tool provides a GUI interface to test an API and a command-line utility for experienced testers. This API testing tool also helps you to create the request as per the need of API. The Postman team has also released a Chrome extension that can be used to test the API from your browser.

Postman Interview Questions for Freshers and Experienced
The list below covers all the Postman questions for freshers and professional-level candidates. This Postman interview questions guide will help you crack the interview and help you get your dream job for software testing.

1) What is Postman?
The Postman is a highly popular API testing tool that helps the development team create, share, and test an API. The Postman tool provides a GUI interface to the API and a command-line utility for experienced testers.

2) What is an HTTP request?
An HTTP request is a program that the client makes to a name host located on a server. It works as a communication interface or a request-response protocol between a client and server. The primary use of the HTTP request is to access a resource on the server. To initiate the HTTP request, the client uses components of a URL (Uniform Resource Locator) that also includes the information needed to access the resource.

Postman Interview Questions
Postman Interview Questions
3) State The Core Components of an HTTP Response?
In Postman, every HTTP response contains four key elements.

Response/Status Code- There are response code issues by a sever for client’s request, as 404 means Page Not Found.
HTTP Version- HTTP version name. For example, HTTP v2.2
Response Header- It included information for the HTTP response message. For example. The content length, date, status, server type, etc.
Response Body – It contains the data which a client requested from the server.
4) Why do we use Postman?
Here are some most prominent reasons for using Postman:

It is free to use software which is helpful for API testing
It helps you to manage the end-to-end lifecycle of API
It offers Runtime Service that helps manage API collections, workspaces, environments, and different examples.
You can also integrate Postman with CI/CD tools like Circle CI, Jenkins, etc.
It has a vast community forum that can easily address any technical issues you face while using the tool.
5) What is API?
Application Programming Interface (API) is a software interface that enables two applications to interact with each other without any user intervention. It is a collection of software functions and procedures. API is defined as a code that helps two different software communicate and exchange data with each other.

6) What are the important authorization methods supported by Postman?
Postman offers the following API request authorization options 1) API Key, 2) Oauth 1.0 and 2.0, 3) Basic auth, 4) Digest auth, 5) Bearer Token, 6) AWS Signature, 7) Hawk Authentication, 8) NTLM Authentication.

7) How do you log variable values in Postman?
Postman allows to log the variable values in Postman in the console by using the following command:

console.log(pm.variables.get("guru99"));
8) Postman is available as a native desktop app for?
Postman API testing tool is currently available for Mac, Windows (32-bit / 64-bit), and Linux (32-bit / 64-bit)

9) What is the History tab in Postman?
All the request you send in Postman appears under the History tab of the sidebar. It is very much similar to browser history, which you can clear whenever you want.

10) What is Basic Auth in Postman?
In Postman, Basic Auth is an authorization method provided for HTTP user agents like web browsers to enter username and password. After entering the username and password that you can associate with the request.

11) What is a binary form in POST methods?
Post binary firm is designed to send the information in a format that is impossible to enter manually. These options are used while sending larger files like CSV files, etc.

12) What is the main difference between Authorization and authentication?
Here are a few differences between authorization and Authentication:

Authorization is the act of allowing or permitting someone, whereas authentication is proving that something is genuine.
Authentication always comes first, while authorization comes after authentication.
Authorization is open to anyone with permission, whereas authentication requires you to have a password.
13) What is the Payload in Postman?
The Payload of an API Module is the body of your request and response message. When making an API request, it contains the data you send to the server. You can send and receive Payload in various formats, for example, JSON or XML.

14) What is a collection in Postman?
A collection in Postman enables you to group similar requests. It also allows you to systematically arrange the requests into folders.

15) What is a Pre-Request script?
Pre-request scripts help you to execute JavaScript before a request runs. It allows you to accomplish pre-processing tasks like setting variable values, parameters, headers, and body data.

16) How the Postman variables are accessed?
The Postman variables are always accessed by using the variable name:

{{variable name}}
17) What is the meaning of the term environment in Postman?
The environment in Postman is a set of key-value pairs. Postman allows you to build multiple environments and switch among them with a click of a button.

18) Why does Postman never accepts any other encoding apart from Base64?
You can use base64 as it helps us transmit the data into the textual form and send it as HTML form data. Moreover, we must rely upon the same 64 characters in any encoding language.

19) Which kind of encoding does Postman accepts for authorization credentials?
Postman only accepts Base64 encoding, which is provided inbuilt in Postman. Otherwise, it would benefit when you use 3rd party websites that help you to convert the credentials into base64.

20) What are the different scopes of an environment variable in Postman?
Scope of a variable in Postman is defined as the boundaries it can access.

Here are important scopes of an environment variable in Postman:

Local Scope: This type of variable can be accessed only in the environment in which it was created
Global Scope: This type of variable can be accessed globally in any environment or no environment.
21) Is it possible to import local variables in Postman Monitors?
Postman monitors allow you to import local variables but not global variables.

22) What is the Postman execution order for a collection?
For all the requests in a collection, the scripts will execute in the following given order:

Step 1) A pre-request script associated with a collection will run before every request.
Step 2) A pre-request script associated with a folder will run before every request in a specific folder.
Step 3) A test script associated with a collection will run after every request.
Step 4) A test script associated with a folder will run after the request in the specific folder.

23) Can you have two global scope variables with the same name in Postman?
No, the global scope never has duplicate/same names, while variables having local scope can have the same name in various environments.

24) How do you access postman variables?
You can log the variable values in the console by using the command:

console. Log (pm. Variables.
25) What is the use of the collection in Postman?
In Postman, a collection is used to group similar requests. It helps you to arrange requests systematically into folders.

26) How can you use POSTMAN to generate random numbers in a specific range?
In your Pre-request script define your variable with:

pm.globals.set('randomNum', Math.floor(Math.random() * 5));
Then in your URL call your variable in the URL like so:
Output:

{{randomNum}}
27) How do you remove local variables?
Local variables are automatically removed once the tests have been executed.

28) What is ‘Postman Collection runners?
Postman contains a collection runner that is useful for automating API testing. It helps visualize details of each iteration and test results. A postman collection runner is also used for Data-driven testing.

29) What do you mean by postman monitors?
The postman monitor feature is used for running collections until the user’s specified time. However, the user must be logged in to their account to use this feature.

30) Why saving your work in the Postman cloud is not advisable?
You should not save your work in Postman as your business details do not remain confidential. Moreover, saving your on-Postman cloud may cause a security breach as it requires sign-in. Therefore, saving your work in the Postman cloud is not advisable.

RELATED ARTICLES
Postman Tutorial
How to Download & Install Postman for Windows?
31) What are the standard rules of an API test design?
Here are the key principles of an API test design:

Setup: Create objects, start services, and initialize data.
Execution: Apply API or the scenario, including logging
Verification: It is use for evaluating the result of the execution
Reporting: Indicates Pass, failed, or blocked status
Clean up: Pre-test state
32) What is the Team workspace in Postman?
A Team workspace is a synergetic environment for users where many programmers may develop APIs, provides feedback, and collaborate on the same pools of requests. It also helps to synchronize and collaborates all the team’s work in one place.

33) What is the 301-status code?
301 status code represents a permanent redirect from one website page to another. It tells the search engines that the old page has become outdated, and the engine has to index the new page or URL.

34) What is status code 201?
Status code 201 is created only when a resource is successfully created using a PUT or POST request. It returns a link to a newly created one with the help of the location header.

35) What is the procedure to remove local variables?
The local variables can be automatically removed when you have executed and completed the tests.

36) What is Pre-Request Script in Postman?
In Postman, a pre-request script is a set of rules that runs before executing a request.

37) How are Query Parameters different from Path Variables?
In Postman, Path Variables are used to identify specific resources, and Query Parameters are used to sort or filter the resources.

38) What are the main drawbacks of Postman?
Here are some cons/ disadvantages of using Postman:

Postman cannot process more than 1000 API requests.
It is not easy to manage the collections and requests in a massive size project.
Postman is not an ideal API tool for workspace management in the form of code as there can be lots of code duplication while handing the dynamic API requests.
39) What are some of the JS libraries available in Postman?
Some JS libraries available in Postman are

1) Lodash
2) Moment
3) GUID

40) What is GUID?
GUID is short for Global Unique Identifier. It is hexadecimal digits that are separated by hyphens. This Postman identifier GUID solves the purpose of uniqueness.

41) How can you view log requests and responses in Postman?
You can use the Postman Console window to view request logs and response logs.

42) What is the importance of setNextRequest in Postman?
setNextRequest helps you to define the workflow. It is needed to change the order of the requests being executed.

43) What test code allows you to check whether the response status is 200 or not?
Following is a test code to check whether the response status is 200 or not:

tests[“Status Code is 200”] = responseCode.code === 200;
44) What do you understand by ScratchPad?
Scratch Pad is a place which is provided by Postman that helps you work without the need to connect with Postman servers.

45) How can you iterate a request 100 times in Postman?
You can iterate a request 100 times in Postman by using Collection Runner.

46) What would happen if {{$randomInt}} dynamic variable is added?
You need to add a random integer between 0 and 1000.

47) How do you access variable values from a file inside pre-request and test scripts?
data.var_name
data['var_name']
48) Can you read the Postman Chrome application to read and write cookies?
No, it is impossible to read and write cookies using the app.

49) Which programming language is used for Postman tests?
JavaScript is used for Postman tests.

50) Which tool can be used to run Postman Collections in Jenkins?
Newman can be used to run Postman Collection in Jenkins.

Postman Interview Questions and Answers
Найдите вопрос, чтобы посмотреть ответ.

Найдите вопрос, чтобы посмотреть ответ.
Найти вопрос
Вопросы и ответы для новичков / начинающего уровня
Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для среднего уровня / опыта от 1 до 5 лет
Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

