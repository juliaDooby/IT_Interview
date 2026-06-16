Introduction to Ajax
Ajax is a technique to exchange data without page reload, which is a mix of tools like JavaScript, HTML, DHTML, XML, CSS, DOM, and Microsoft object – ActiveX. It uses the XMLHttpRequest object for asynchronous data transfer, reducing bandwidth usage.

Various social media websites like Facebook, Instagram, and Twitter use the Ajax technique to increase the count value when the user clicks the ‘Like’ button without refreshing the page.

Autosuggest is another feature that search engines like Google, Yahoo, and e-commerce sites like Amazon, BookMyShow, and Uber use. It is because of Ajax that it fetches relevant data, offering excellent options for users to choose from.

Most Popular Interview Questions on Ajax
We have listed the most frequently asked Ajax interview questions with answers and explained the concept with examples below:

Q #1) How do Synchronous and Asynchronous Requests differ?

Answer: In a Synchronous request, the request sent from the client receives the response in the same HTTP connection. Examples are responses from the internet gateway, phone calls, and video meetings.

Whereas for Asynchronous requests, multiple requests can be sent from clients and their responses can be received in subsequent connections. Examples are collaborative documents like assessments, online queries, emails, and online forums.

Q #2) List the differences between JavaScript and Ajax

Answer: Ajax is an extension of JavaScript functionality.

The table below explains the differences between the two:

JavaScript
Ajax
It is open source scripting language for client side web development, even at server side (Node.js)	It is technology used for standalone and web based development, with libraries and framework that extends JS functionality
JavaScript does not communicate/translate between programs developed in different languages.	It acts as translator that communicates among programs developed in different languages.
JavaScript is client side scripting that are used in input validation, DOM handling, to add animated 2D/3D graphics on webpage and developing interactive Games	Ajax retrieves data from the server using XMLHttpRequest object.
It is an add-on to HTML for functionalities like client side validations, DOM handling and event handling	Ajax send and receive data from server thereby updates portion of web page, without page reload
Q #3) Describe Ajax.

Answer: Asynchronous JavaScript and XML (AJAX) is a technique that uses XMLHttpRequest objects to update web pages asynchronously by exchanging a small amount of data with the server, updating the page without page reload. It is a front-end tool that communicates with the back-end server from the browser.

Q #4) List Ajax features.

Answer: The following are some of the important Ajax features:

High-performing web pages and user-friendly features like autocomplete suggestions
Help in Template rendering on the client side
Client component declarative instantiation
Use of the Observer pattern on JavaScript arrays and objects
Invoke ADO.Net data contexts and services
Assists in Data View control and binding live data
Q #5) List the advantages of using Ajax in web development

Answer: Following are a few advantages of using Ajax in web development:

Ajax reduces latency-response time in both Request/Response.
XMLHttpRequest object in Ajax is highly responsive in data transfer in specific areas without page reload.
Asynchronous calls to the server prevent the client from waiting for data before rendering.
Form validation is instant using Ajax.
Bandwidth use is reduced when Ajax is used in fetching and storing data from the database in the background without a page reload.
Q #6) What are the limitations of Ajax?

Answer: The following list shows the limitations of Ajax:

Ajax is not advisable for developing web applications, but is great for websites.
View the page source display code is written in Ajax, exposing the functionality.
It is complex, less secure, and needs more time to develop web pages.
Search engines cannot index pages developed using Ajax, as Crawlers cannot identify web applications developed in JavaScript and Ajax.
XMLHttpRequest object can only fetch information from the server where the pages are hosted, but cannot fetch information from another server.
It is not possible to bookmark pages developed in Ajax.
Ajax cannot function with JavaScript disabled in the browser.
It has a slow response time because different page controls load at different times.
Dynamic page registration on the browser history engine is not possible; the code-behind file function does not work.
Q #7) List Ajax frameworks.

Answer: There are several Ajax frameworks developed in various languages.

These are:

JavaScript frameworks like jQuery, MooTools, Prototype, YUI library, Dojo, AngularJS, Webix, GWT (Google Web Toolkit)
Java frameworks like Apache Wicket, JSF (Java Server Faces), RichFaces, ICEfaces, PrimeFaces
Windows .NET platform offers ASP.NET AJAX
Python frameworks such as Pyjs.
Ruby frameworks like Ruby on Rails
Q #8) Explain the working of Ajax.

Answer: Ajax with the XMLHttpRequest object communicates with a server and renders data on a portion of a webpage without page reload.

A list of steps that take place while working at Ajax is:

The user request is sent to the server from the browser.
JavaScript calls the XMLHttpRequest object.
The server interacts with the database using ASP.Net, JSP, or PHP.
Data is fetched.
XMLHttpRequest callback receives XML or JSON data from the server.
The browser displays HTML and CSS data on a particular portion of the page without page reload.
Q #9) What are the security threats that prevail with Ajax code?

Answer: The list of security threats when Ajax code is used in the webpage is listed below:

Ajax request calls are in plain text format, resulting in insecure access to the database.
Data retrieved gets stored on the client’s browser, so anyone can view it.
It makes monitoring browser sessions with the help of a script.
The entire Ajax code can be seen using the view page source; hackers can misuse this code in a cyber attack.
Q #10) What is XMLHttpRequest?

Answer: XMLHttpRequest is an API that has methods and properties used by various scripting languages, such as JavaScript and VBScript, for manipulating and transferring XML data using the HTTP protocol connecting client and server.

Various formats supported by XMLHttpRequest for data transfer are XML, JSON, plain text, and even binary content. The XMLHttpRequest object helps update parts of the webpage without reloading the page. It recognizes events that occur during the processing of the request.

Ajax Scenario-Based Interview Questions
Q #11) List various properties of XMLHttpRequest.

Answer: The following are lists of XMLHttpRequest properties:

onreadystatechange – For every state change, an event gets fired by the event handler.
readyState – Defines the current state of XMLHttpRequest
responseText – Response is returned as a string.
responseXML – Response is returned as XML in XML document object and parsed using DOM tree properties and methods.
status – status is returned as a number. Example: 404 for “Not Found” 200 for “OK”
statusText – status is returned as text. Example: “Not Found” or “OK”
Q #12) Describe various methods used in XMLHttpRequest

Answer: The XMLHttpRequest methods are explained below:

abort() – Used to cancel the current request.
getAllResponseHeaders() – Set of all the HTTP headers are returned as a string.
getResponseHeader(header_name) – Returns specific HTTP header value.
open(method,URL) – Various HTTP parameters, such as GET, POST, HEAD, PUT, and DELETE, can be used as method. URL is the location of the page on the server where the request should be sent.
send(content) – Used to send the request to the server.
setRequestHeader(label, value) – a label-value pair is added to the HTTP header to be sent.
Q #13) Explain various ways the open() method can be used for XMLHttpRequest.

Answer: Open() method of XMLHttpRequest object helps to initialize a new request or an existing request. The parameters it uses contains request method, URL, and other optional attributes.

open ( method, URL )
The value for the method parameter can be “GET”, “POST”, or “HEAD”. “PUT” and “DELETE” are some methods used in RESTful requests.
URL is the string that has the path of the HTTP server for sending a request.
open (method, URL, async)
async – specifies if the request sent should be handled asynchronously or not at the server. If the value of async is true, it means that after the send() method, the script processing should not wait for a response; false will mean the script will wait for a response before continuing the script process.
open (method, URL, async, userName)
Username is optional for authentication. Its default value is null.
open (method, URL, async, userName, password)
Password is optional for authentication. Its default value is null.
Q #14) Explain Ajax callback function.

Answer: During an Ajax callback, these steps are performed:

The client browser sends a request message to the server.
The user is free to do anything other than wait for the response, as the request call is asynchronous in nature.
The server receives the message and processes the page for which the Ajax callback is called.
The response is sent to the browser as a JavaScript code string that gets executed in the browser.
Q #15) List the steps to improve Ajax performance

Answer: To improve the performance of Ajax calls, we can consider the following steps:

Limiting Ajax requests to a minimum
A wise selection of events that triggers Ajax request
Optimum use of the GET request
Minimize data amount transmission
Use Caching to secure data
Q #16) What is the ready state of requests used with Ajax requests?

Answer: The readyState is XMLHttpRequest property that describes the current state of XMLHttpRequest object.

State value
Explanation
State of XMLHttpRequest object
readyState = 0	Request not initialized	XMLHttpRequest object is created but open() method not called
readyState = 1	Request is set	Open() method has been called, but before send() method is called
readyState = 2	Request is sent	After send() method is called
readyState = 3	Request is under process	Browser has connection established with Server, but Server has not yet completed with Response
readyState = 4	Request is complete	Request is completed, response data received at browser from the Server
Q # 17) Describe events and their types in Ajax

Answer: When the user or browser interacts with HTML elements, it is termed an event.

Some examples of events are:

onchange – When elements are changed, like when the text is changed or inserted into the text field.
onclick – HTML elements like buttons, images, and links are clicked.
onload – Loading a page is completed by the browser.
onmouseover – When a user moves the mouse over HTML elements like images or text.
Ajax events are of two types: Local events and Global events

Local events – Acts as callbacks inside the Ajax request object
Examples: beforeSend, error, complete, success
Global events – triggered on the document and calls listening event handlers
Examples: ajaxSend, ajaxSuccess, ajaxError, ajaxComplete
Q #18) List Ajax controls in ASP.NET

Answer: The following are the list of Ajax controls known as extensions found in the Visual Studio IDE:

Timer
UpdatePanel
UpdateProgress
ScriptManager
ScriptManagerProxy
Q #19) Explain UpdatePanel Control of ASP.Net

Answer: Update Panel is an Ajax control in ASP.Net that refreshes a selected portion of a web page.

It is made up of two child tags:

ContentTemplate
Triggers
User control is placed in the ContentTemplate tag, whereas certain triggers are defined in the Triggers tag that makes UpdatePanel control.update web page content.

The code in ASP that uses the UpdatePanel control is below:

1
&lt;asp:UpdatePanel ID="myupdatepane" runat="server">
The request is sent, or data is posted to the server asynchronously without submitting the whole page.

Following is the ASPX page:

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
16
17
18
19
20
21
22
23
24
25
26
27
28
29
<%@ Page Language="C#" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">    
  
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Example to display UpdatePanel</title>
<style type="text/css">
#updtpnl { 
width:450px; height:150px;
}
</style>
  
</head>
<body><form id="myform" runat="server">
    <div style="padding-top: 10px">
        <asp:ScriptManager ID="scrmnr" runat="server">
    </asp:ScriptManager>
  
<asp:UpdatePanel ID="updtpnl" runat="server">
            <ContentTemplate>
                    <fieldset>
                    <legend>UpdatePanel</legend>
                        <asp:Label ID="lbl" runat="server" Text="Panel created."></asp:Label><br />
                        <asp:Button ID="btn1" runat="server" OnClick="Button1_Click" Text="Button" />
                    </fieldset>
            </ContentTemplate>
 </asp:UpdatePanel><br /></div>
 </form></body></html>
Add the following code in the C# page:

1
2
3
4
protected void Button1_Click(object sender, EventArgs e)
{
    lbl.Text = "Refreshed at " + DateTime.Now.ToString();
}
The panel content should change every time the button is clicked without a page refresh.

Q #20) Describe ScriptManager in ASP.NET

Answer: ScriptManager in ASP.NET is central for Ajax functionality. It manages various Ajax resources on the page, such as downloading the Microsoft Ajax Library and the coordination of partial page upload with the help of UpdatePanel controls.

ASP code for Script Manager control:

1
&lt;asp:ScriptManager ID=”scrm” runat=”server” >&lt;/asp:ScriptManager>
Advanced-Level Ajax Interview Questions
Q #21) What is the difference between ScriptManager and ScriptManagerProxy?

Answer: The difference between ScriptManager and ScriptManagerProxy is:

If the page contains ScriptManager control, then ScriptManagerProxy enables nested components to add service references and scripts.
ScriptManager includes functionality that enables partial page rendering and the Microsoft Ajax library.
Q #22) How to call Ajax from JavaScript?

Answer: There are many ways to call Ajax in JavaScript for submitting data to the server, checking usernames, creating a chat room, an autocomplete form, voting or rating the product.

XMLHttpRequest object
Code example:

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
16
17
18
19
20
21
22
<script type="text/javascript">
function loadXMLDoc() {
     var myxmlhttp = new XMLHttpRequest();
  
     myxmlhttp.onreadystatechange = function() {
         if (myxmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
            if (myxmlhttp.status == 200) {
               document.getElementById("myDiv").innerHTML = myxmlhttp.responseText;
            }
            else if (myxmlhttp.status == 400) {
                alert('There was an error 400');
             }
             else {
                   alert('something else other than 200 was returned');
              }
        }
};
  
   myxmlhttp.open("GET", "ajax_info.txt", true);
   myxmlhttp.send();
}
</script>
Fetch API

It is easy and flexible, supports modern browsers, and follows a request-response model.

Code example:

1
2
3
fetch("myData/user_repo.json").then(function(response){
console.log(response);
});
jQuery – It is a client-side JavaScript library

Code example:

1
2
3
4
$.ajax({ url: "test.html", context: document.body, success: function(){
$(this).addClass("done");
}
});
Q #23) List the tools to debug Ajax applications.

Answer: The list of tools used in debugging are:

MyEclipse Ajax Tools
Script Debugger
JavaScript HTML Debugger
Fiddler for IE (Internet Explorer)
Firebug for Mozilla Firefox
Q #24) Describe the use of Cache false in an Ajax call.

Answer: Ajax requests are always issued by default, but browsers may send responses from their cache. In order to prevent this, the cache is set to false. Cache: false can prevent caching of all future Ajax requests, irrespective of jQuery method used.

The code used for all Ajax functions is as below:

1
$.ajaxSetup({cache:false});
Q #25) How would you identify the completion of Ajax’s request?

Answer: In order to complete the Ajax request, the condition should be as below:

ReadyState property that defines current state of XMLHttpRequest if equal to four (xmlhttp.readyState == 4 && xmlhttp.status ==200) then data is available and Ajax request will be complete.

Code snippet:

1
2
3
4
5
6
xmlhttp.onreadystatechange = function()
{ if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
{ 
//Ajax request will be complete if above conditions are satisfied 
}
}
Q #26) Explain the importance of client-side libraries

Answer: Client side libraries are similar to ASP.Net programming model,

Handles browser compatibility issues by themselves.
Make asynchronous request calls over XMLHTTP.
Q #27) What are the methods for cross domain Ajax calls?

Answer: There are two methods to transfer data between multiple security domains.

These are:

CORS: Cross Origin Resource Sharing that works with HTTP web browsers
JSONP: JSON with padding that works with legacy browsers and HTTP GET method.
Q #28) Describe Ajax Control Toolkit

Answer: Ajax Control Toolkit extends ASP.Net control functionalities. JavaScript code is used by Ajax Control Toolkit to enhance the capabilities for ASP.Net controls. ASP.Net Ajax control toolkit offers an infrastructure to write customizable, reusable, and extensible extenders and controls used to create an interactive web experience.

Ajax enabled ASP.Net tool kit can be added to your Visual Studio or Web Developer toolbox by drag-and-drop functionality.

Q #29) List the protocols used by Ajax

Answer: The following are the protocols that Ajax uses:

JSON – For communication between client and server
UED or URL-encoded data
HTTP’s GET or POST methods
XMLHttpRequest that place a request with webserver
Q #30) When should we use Ajax GET request and Ajax POST request?

Answer: The use of HTTP GET or POST methods by Ajax depends on particular scenarios.

These are:

When data for the given URL requested does not change, the HTTP GET request should be used by Ajax.
HTTP POST is used for consistent web application architecture and for the updated state on the server.
