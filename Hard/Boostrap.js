Bootstrap Interview Questions and Answers
Bootstrap is the most popular CSS framework option when it comes to dealing with responsive, mobile-first front-end web development. Moreover, it is free and open-source.

Launched in 2011, Bootstrap has all the CSS and JS-based design templates that one requires for building buttons, forms, navigation, typography, and other interface components.

Top Bootstrap Interview Questions and Answers
There is a pretty good chance of a web development job interview to feature Bootstrap-based questions. So, you need to keep up your Bootstrap preparation to grab the role. To help you with the cause, here are top Bootstrap interview questions with answers:

Question: What do you mean by the Bootstrap Grid System?
Answer: The Bootstrap Grid System is a responsive, mobile-first system that scales up to 12 columns as per the increase in the device or viewport size. The system features predefined classes for easy layout options and powerful mix-ins for generating effectively semantic layouts.

Question: Please explain Normalize in Bootstrap.
Answer: For establishing cross-browser consistency, Bootstrap makes use of Normalize. It is a small CSS file capable of offering better cross-browser consistency in the default styling of HTML elements. Also, Normalize.css is an HTML5-ready and modern alternative to CSS resets.

Question: Can you enumerate the various lists supported by Bootstrap?
Answer: Following are the three types of lists supported by Bootstrap:

Definition Lists – This type of list allows each list item to have both the <dt> and the <dd> elements. The <dt> denotes definition term, which is the term or phrase being defined. The <dd> element contains the definition for the <dt> element.
Ordered Lists – This type of list follows some kind of sequential order. Also, it is prefaced by numbers.
Unordered Lists – Traditionally styled with bullets, an unordered list doesn’t follow any particular order. Using the .list-unstyled class allows removing the bullets styling from the unordered list. For placing all list items on a single line, the .list-inline class can be used.
Question: What do you mean by Glyphicons? How do you use them?
Answer: Glyphicons are icon fonts that are used in web projects. Although Glyphicons Halflings aren’t free and require licensing in general, they are available free of cost for Bootstrap projects. Add the following code anywhere you wish to use the Glyphicons:

<span class = “glyphicon glyphicon-search”></span>
Note: - For proper padding, it is advised to leave a space between the icon and the text.

Question: Could you explain how to use the Dropdown plugin in Bootstrap?
Answer: There are three ways of toggling the dropdown plugin’s hidden content in Bootstrap:

With data attributes – Add data-toggle = “dropdown” to some button or link to toggle a dropdown. For example,
<div class = "dropdown">
<a data-toggle = "dropdown" href = "#">Dropdown trigger</a>
<ul class = "dropdown-menu" role = "menu" aria-labelledby = "dLabel">
...
</ul>
</div>
With JavaScript – Following method is used for calling the dropdown toggle via JS:
$('.dropdown-toggle').dropdown()
Using data-target attribute in place of href=“#” – If the web browser isn’t enabling JavaScript, then it is better to keep links intact. For this, the data-target attribute is preferred over href=“#”. For example,
<div class = "dropdown">
<a id = "dLabel" role = "button" data-toggle = "dropdown" data-target = "#" href = "/somepage.html">
Dropdown
<span class = "caret"></span>
</a>
<ul class = "dropdown-menu" role = "menu" aria-labelledby = "dLabel">
...
</ul>
</div>
Question: Please provide an explanation of input groups in Bootstrap.
Answer: Input groups are simply extended Form Controls in Bootstrap. One can easily append and prepend buttons or text to the text-based inputs using the input groups. Appending and prepending content to an input field allows adding common elements to the user input.

You can append or prepend elements to a .form-control by:

Wrapping it in a <div> element with the class .input-group
With the same <div> element, put the extra content inside a <span> element with the .input-group-addon class
Finally, place the <span> element before or after the <input> element as required
Question: How will you create a tabbed, pills, and vertical pills navigation menu in Bootstrap?
Answer:

For creating a tabbed navigation menu
Start with a basic unordered list with the .nav base class
Now, add the .nav-tabs class
For creating a pills navigation menu
Start with a basic unordered list with the .nav base class
Now, add the .nav-pills class
For creating a vertical pills navigation menu
Stack the pills vertically using the .nav-stacked class
Now, add the .nav and .nav-pills classes
Question: What do you understand by the Bootstrap navbar? How will you create one?
Answer: One of the most prominent features of Bootstrap, a navbar is a responsive ‘meta’ component that serves as a navigation header for an application or website. There can be several navbars in an application or website.

In mobile views, a navbar collapses and becomes horizontal when the available viewport width increases. The navbar includes styling for basic navigation and site names. Here is how to create a navbar in Bootstrap:

Add the .navbar and .navbar-default classes to the <nav> tag
Next, add role = “navigation” to the <nav> element
Now, add .navbar-header, a header class, to the <div> element. For making the text slightly larger, include an <a> element with the navbar-brand class
Add an unordered list with .nav and .navbar-nav classes for adding links to the Bootstrap navbar
Question: Can you explain Bootstrap breadcrumb?
Answer: A Bootstrap breadcrumb is a great way to display hierarchy-based information for a website. Simply, it is an unordered list with a .breadcrumb class. CSS automatically adds the separator for a Bootstrap breadcrumb.

In blogs, the breadcrumb can display categories, publishing dates, or tags. It indicates the present page’s location within a navigational hierarchy.

Question: How do you create and customize thumbnails in Bootstrap?
Answer: For creating thumbnails using Bootstrap, add a <a> tag with .thumbnail class around an image. It will add four pixels of padding as well as a gray border. When hovered, an animated glow outlines the image.

You can add any type of HTML content, such as buttons, headings, or paragraphs, into thumbnails. This is how to customize thumbnails using Bootstrap:

Change the <a> tag with .thumbnail class to a <div> tag
Add anything that you need inside the <div> tag. You can use the default span-based naming convention for sizing
Note: - If you wish to group multiple images then place them in an unordered list. Each list item will be floated to the left.

Question: Please explain Bootstrap alerts. Also, tell how you will create a Bootstrap Dismissal Alert.
Answer: Used for styling messages to the user, Bootstrap Alerts provide contextual feedback messages for typical user actions. To create a Bootstrap Dismissal Alert:

Create a wrapper <div> and add a .alert class and one of the 4 contextual classes, namely .alert-danger, .alert-info, .alert-success, and .alert-warning, for adding a basic alert
Add the optional .alert-dismissable class to the <div>
Next, add a close button
Finally, use the <button> element with the data-dismiss = “alert” data attribute
Question: Can you explain how to create an alternate and a striped progress bar using Bootstrap?
Answer: For creating a progress bar with various styles:

Add a <div> with a .progress class
Inside the <div>, add an empty <div> with a .progress-bar class and a progress-bar-* class (* can be danger, info, success, or warning)
Lastly, add a style attribute with the width expressed as a percentage. E.g., style = “80%”
For creating a striped progress bar:

Add a <div> with .progress and .progress-striped classes
Inside the <div>, add an empty <div> with a .progress-bar class and progress-bar-* class, where * can be any of the danger, info, success, or warning
Now, add a style attribute with the width being expressed as a percentage, E.g., style = “70%”
Question: What do you understand by Bootstrap media objects?
Answer: Bootstrap media objects are abstract object styles for building different types of components, such as blog comments and Tweets, which feature either a left-aligned or right-aligned image and textual content.

The main aim of a Bootstrap media object is to make code required for developing blocks of information incredibly smaller. In order to achieve easy extensibility, lightweight markup, and other desirable aspects, classes are applied to some of the simple markups.

Question: What purposes do the .media and .useful classes serve in Bootstrap?
Answer: The .media class allows a media object, such as audio, images, or video, to float to the left or right of a content block. For adding article lists or comment threads to an unordered list, we use the .useful class.

Question: Do you know what Bootstrap panels are? Also, explain how to create a Bootstrap panel with a heading.
Answer: Bootstrap panel components are used for putting your DOM component in a box. To get a basic panel, simply add .panel and .panel-default classes to the <div> element. There are two ways of adding panel heading to a Bootstrap panel:

Use any of the <h1>, <h2>, <h3>, <h4>, <h5>, or <h6> tags with a .panel-title class (Adds a pre-styled heading)
Use the .panel-heading class (Adds a heading container to the panel)
Question: Can you explain the purpose of the Scrollspy plugin?
Answer: Using the Scrollspy plugin in Bootstrap allows you to target certain sections of the page based on the scroll position. Thereafter, you can add .active classes, based on the scroll position, to the Bootstrap navbar.

Question: Please enumerate the various contextual classes available for styling the panels in Bootstrap.
Answer: Various contextual classes used in Bootstrap for styling the panels, i.e. making them more meaningful, are:

.panel-danger
.panel-info
.panel-primary
.panel-success
.panel-warning
Question: Is it possible to put a table within the Bootstrap panel?
Answer: Yes, it is possible to put a table within a Bootstrap panel. Use the .table class within a panel to get a non-bordered table within the same.

Note: - If there is an <div> element containing .panel-body class then we need to add an extra border to the top of the table for clearly defined separation. In case there is no <div> element containing the aforementioned class then the component moves from the panel header to the table without any issues.

Question: What do you mean by Bootstrap well?
Answer: In order to make the content appear sunken or adding an inset effect to a webpage, we use the Bootstrap well. In actuality, it is a container in <div>.

In order to create a Bootstrap well, simply wrap the entire content that you want to appear in the Bootstrap well with a <div> containing the .well class.

Question: Why do we use the affix plugin in Bootstrap?
Answer: We use the affix plugin in Bootstrap for affixing a <div> to some certain location on a webpage. The plugin also allows toggling pinning on and off for the affixed <div>. Social icons are the most popular example of using the affix plugin in Bootstrap.

Note: - The affixed <div> starts from a particular location on the webpage and scrolls with it. However, after a certain mark, it will be locked in place, thus stopping scrolling with the rest of the webpage.

Question: What is the need of Bootstrap?
Answer: Bootstrap acts as a front-end framework that supports the development of various kinds of web applications such as HTML, JS, and CSS.

Question: What is the benefit of Bootstrap?
Answer: It helps in developing highly responsive, quick, and easy to use layout. The main advantage of Bootstrap is observed while developing mobile applications that have design templates. These templates help in creating UI, including alert tab, dropdown, forms, etc.

Question: What are the key components of Bootstrap? Explain?
Answer: The key components of Bootstrap include the following:

Scaffolding: It supports the grid system, styles, and backgrounds of various kinds.
CSS: It offers CSS files for developing web applications.
Customize: It supports the development of customizing the framework.
JS Plugins: It consists of JS and JQuery plugins required in the web designing and application process.
Question: What is a Bootstrap container?
Answer: A Bootstrap container consists of HTML code that can be placed for making them a highly responsive and fast web application.

Question: Define types of layout in Bootstrap? Explain?
Answer: There are two types of layout in Bootstrap include fixed design and fluid layout. The fluid layout helps in creating a full-width screen that adjusts with the browser size. The fixed layout, on the other hand, cannot adjust itself as per the browser screen and has a fixed layout of 940 px.

Question: Can we display code in Bootstrap? How?
Answer: Yes, we can display code in Bootstrap. It can be displayed using tags such as <code> tag and <pre> tag. The <code> tag can help in displaying the code inline while the <pre> tag can help in displaying code with different lines.

Question: Define Bootstrap alerts?
Answer: Bootstrap alerts are meant to create alert messages by adding styles and making them look attractive enough to grab the attention of the viewer.

Question: Define Bootstrap thumbnails?
Answer: Bootstrap thumbnails help using the layout images, text, videos, and other features in a grid system. This way, we can add several thumbnails through tags around the image.

Question: What will happen if we add many tags with the class of thumbnails around the image?
Answer: This will result in creating four pixels of padding and also develop a grey border.

Question: What are the labels in Bootstrap?
Answer: The Labels in Bootstrap are used for offering tips, counts, and other information that could help in marking up the web page.

Question: What is the benefit of Jumbotron in Bootstrap?
Answer: Jumbotron in Bootstrap can be used for increasing the size of heading and increase margins on the landing page.

Question: What is normalized in Bootstrap?
Answer: Normalized in Bootstrap is a small CSS file. It is used to create cross-browser consistency.

Question: Define panels in Bootstrap?
Answer: Panels in Bootstrap are different components that can be put into the DOM component in a box with the purpose of retrieving basic panel using the class.panel as the <div> element.

Question: What is a grid system in Bootstrap?
Answer: A grid system in Bootstrap helps in making up to 12 columns across a webpage. This way, it helps in placing the contents of the webpage in different columns, which can be used as headings or subheadings.

Question: Are there grid classes in Bootstrap?
Answer: Yes, there are four grid classes in the Bootstrap. These include xs, sm, md, and lg.

Question: What is the function of the xs grid class?
Answer: The xs grid class is used for screens of mobile phones, which are lesser than 786 px wide.

Question: What is the function of the sm grid class?
Answer: The sm grid class is used for the wide tablet screens, which are more than 786 px wide.

Question: What is the function of the md grid class?
Answer: The md grid class is used for small laptops screen, which is either equal or greater than 992 px wide.

Question: What is the function of the lg grid class?
Answer: The lg grid class is used for larger screens of laptops and desktops, which are equal or even greater than 1200 px wide.

Question: What is a global style? Are they used in Bootstrap?
Answer: Global style stands for the standardized version of font size, line height, and other features that are used and acceptable on the international platform. They are used in Bootstrap for Bootstrap Default Typography.

Question: What is the global style for Bootstrap Default Typography?
Answer: The global style for Bootstrap Default Typography includes the following default:

The font size of 14 px
The line-height of 1.428.
The font style of Helvetica and Arial with sans-serif fallback
All the above-stated styles, size, and height are required to be used in the body as well as in paragraphs.

Question: Is there any pre-requisite for run Bootstrap properly?
Answer: Yes, there is a pre-requisite of JQuery, which is required to run the Bootstrap properly. It acts as the only JavaScript plugins in Bootstrap.

Question: Is there are a difference between Foundation and Bootstrap?
Answer: Yes, there is a difference between Foundation and Bootstrap. The Foundation supports the SASS processors and is mostly used for mobile UI designing purposes. On the other hand, Bootstrap supports the designing of both mobiles as well as desktop web portals using lesser preprocessors.

Question: Are you aware of the transition plugin in Bootstrap? Why is it used?
Answer: Yes, I am aware of the transition plugin in Boostrap. This is used to provide simple transition effects. These include fading or even sliding in modals.

Question: What is an Affix plugin, and how it helps Bootstrap?
Answer: Affix plugin is used as a social icon on a web page. It allows the <div> to get attached to a particular location of the page. It will start at a location, but when the page hits, it moves away and get a block with the <div> in place. This way, it helps in scrolling the rest of the webpage.

Question: What is the scrollspy plugin in Bootstrap?
Answer: Scrollspy plugin in Bootstrap supports auto-updating nav plugin options to apply. This helps the fetching section of the web page using a scroll position. It can be done using the .active class, which can be added in the navbar based scroll position.

Question: Can we create a Bootstrap panel using heading?
Answer: Yes, we can create a Bootstrap panel using a heading. It can be done in two ways.

First way: We can make use of .panel-heading class with the purpose of adding heading containers in the panel.
Second way: We can use heading tag for instance <h1>,<h2>,<h3>,<h4>,<h5> and <h6>with the .panel-title class. This will help in giving more styles to the headings as per our choice.
Question: What is a Jumbotron in Bootstrap?
Answer: A Jumbotron in Bootstrap is used for increasing the size of the heading and applying margins for the landing page contents. It can be created using the container in the <div> with the class of .jumbotron.

Question: Define lead body copy in Bootstrap?
Answer: A lead body copy in Bootstrap is used for the addition of various ascents to the paragraph. It can be applied using the class="lead" and will help in enlarging the font size as well as increasing height.

Question: Do you know how a navbar works in the Bootstrap?
Answer: Yes, Navbar works with a navigation header for the application or the website. It acts as a vital feature that helps in creating a highly responsive meta component in web applications. In addition to that, Navbar never collapses in the mobile view and could become horizontal as well as vertical as the available viewport width increases due to the tilting of the mobile phones.

Conclusion
So, that completes the list of top Bootstrap Interview Questions and answers list. I hope you find them useful in preparing for your upcoming Bootstrap interview.

When looking for more interview questions check this great udemy course: Bootstrap 4 From Scratch With 5 Projects.

In interviews, you could be asked some general programming interview questions as well. Here is a great book for the purpose: Coding Interview: 189 Programming Questions and Solutions.

Looking to further your Bootstrap knowledge? Try these best Bootstrap tutorials recommended by the community today!

All the best!
