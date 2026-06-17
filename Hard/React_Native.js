Top 10 React Native Interview Questions for 2023
What is the purpose of a Native module in React Native, and how do you create one?
How does React Native handle layout and styling compared to CSS?
How do you debug a React Native application?
What is the difference between AsyncStorage and LocalStorage in React Native?
How do you handle navigation between screens in a React Native application?
Can you explain the concept of React Native bridge and how it works?
What is the purpose of React Native's "Flexbox" layout, and how does it work?
How do you handle errors in a React Native application, and what are some best practices?
Can you explain the "Props drilling" concept in React Native and how you avoid it?
How do you handle user authentication and authorization in a React Native application?
Can you explain the concept of Redux-saga and how it works with Redux in React Native?
How do you test a React Native application, and what are some best practices?
Quick Facts About React Native
When did React Native Initial release?	26th March 2015
What is the latest version of React Native?	React Native 0.70 was released on Sep 5, 2022
React Native is Created By	Facebook
What language does React Native use?	It is based on React js, which is written in JavaScript.
Most Frequently Asked React Native Interview Questions
Here in this article, we will be listing frequently asked React Native Interview Questions and Answers with the belief that they will be helpful for you to gain higher marks. Also, to let you know that this article has been written under the guidance of industry professionals and covered all the current competencies.

Q1. How Different is React-native from ReactJS?
Answer
React	React Native
It is a JavaScript library, supporting front-end web and being run on a server, for web applications and building user interfaces.	It is a framework that compiles to native app components, allowing you to build native mobile applications for different platforms.
React Js is a Javascript Library where you can develop and run faster web applications.	React-Native is a framework where you can develop mobile applications.
React is for websites.	React Native is for mobile applications.
The ReactJs is a JavaScript library to develop apps in HTML5 while using JavaScript as the developing language. Whereas, React Native is a JavaScript framework used to create native mobile applications while using JavaScript as the development language.

Also Read: Difference between React and React Native
Q2. What is props and state in react native?
Answer
props
In Native React, props are utilized to customize the components by giving them different parameters. Each element here has its rare ability to customize the item.

state
In English, the 'state of a being' refers to the physical circumstance of a person, and it is a mere state, which changes over time. Well, in a similar fashion state in React/React Native is used inside factors to maintain music of information. Keep in idea now not to replace the country without delay the use of this.state.

Q3. What is HOC in React Native?
Answer
Higher-Order-Component, shortly known as HOC is an advanced React Native technique to reuse the component logic. The function obtains a component and returns a new element.

NOTE: If you are a react native developer then these questions & answers will help you to crack your interview easily.

function HOC(Comp) {

     return class NewComp extends Component {

         render() {

            return <comp>

         }

    }

}

Q4. Why animations very clear and important in React Native?
Answer
The animated API of Native React is designed to be serialized. That means users can send animation to native without having to go through the bridge on every frame. Once the animation gets started, the JS thread will be blocked, and the animation will run smooth. Due to the code is converted to native views before rendering, the animation will run smoothly in React native

Also Read: IOS Interview Questions
Q5. What are the difference between a component and an element in React.
Answer
React Component: A class or function which optionally accepts inputs and returns a React element via JSX.

React Element: It describes what the user wants to be displayed on the screen, Simplifying it, the react element is an object representation for some UI.

Q6. Is it possible to use the same code base for both Android and iOS in React Native?
Answer
Yes, it’s entirely possible. App developers use the same code base for iOS and Android as Reacts entirely takes care of the native components translations part. For example, a React Native ScrollView uses ScrollView on Android and native UiScrollView on IOS.

Q7. What is react native and why it is used?
Answer
React Native is a next-generation JavaScript code library developed by Facebook for native app creation. The feature of reusable code across the web and mobile devices makes React Native highly demanding among developers. With the reusable codes, app developers don’t have to build the same app for different platforms from scratch.

This also helps businesses especially startups and medium enterprises to better sustain their workforce as now they can hire fewer individuals to perform the same task but in different operating systems.

Also Read: React js interview questions
Q8. How to install react native?
Answer
To install React Native, we will have to follow these steps:

Start with installing node and watchman
Then, install React native CLI with npm
Install Xcode and its Command line tools
Create a React Native project by using the following command
react-native init MyNewProject

cd MyNewProject

react-native run-ios

Q9. What are the advantages of using React Native?
Answer
Advantages of using React native
Conveniently uses the client as well as server side
Superbly cost effective and code reuse
Better code readability because of JSX use
Easy to integrate with other significant frameworks
Easy to write UI test cases because of React
Q10. How to handle multiple platforms in React native?
Answer
React Native easily handles multiple platforms. As the majority of React Native APIs are cross-platform, app developers have to write one React Native component, and it will work on both iOS and Android seamlessly. Facebook, the creator of React native, claims that the Ad Manager application has 87% code reuse across these two platforms. React Native also allows users to specify platform-specific versions of each component which they can then integrate into the rest of the React Native application.

Q11. What do you mean by interactionManager and why is it important?
Answer
The interaction Manager works on a long-running schedule after any interactions/animations have been completed. In particular, to run smoothly this allows Javascript animations.

It is important because it creates an interaction 'handle' on animation start, and clearing it upon completion in applications to register animations.

Q12. What is the point of StyleSheet.create in react native?
Answer
The stylesheet is a React native module that allows developers to create immutable stylesheet references. App developers can pass natural style object into the create() method, which will freeze the objects and assign each with an ID. It will allow developers to avoid creating a new style object every render pass and only once send the purpose across the asynchronous bridge.

Q13. What are the disadvantages of React Native?
Answer
The React Native has following limitations or cons
Security risks
Single threaded interface
Poor memory management
Doesn’t support all native APIs
Dependable on third-party libraries
Not equivalent to true native apps written entirely on Java or Swift/Obj-C.
Q14. Which companies are using react native?
Answer
Today hundreds and thousands of mobile applications are using React native as their base. Many multi-billion companies are also using this framework for their business apps, such as and more.

Facebook
Uber
Instagram
Wal-Mart
Skype
Pinterest
Tencent QQ
wix.com
delivery.com
Adidas GLITCH
JD
Baidu Mobile
Q15. What are the key difference between ReactNative and NativeScript?
Answer
React Native uses the virtual DOM for UI update. It will calculate the changes in the background thread while not changing the UI threads. So, the UI will be highly responsive. Compare to this, NativeScript runs JavaScript on the UI thread which results in high-performance access to 100% of native platform APIs via JavaScript.

Q16. Is React Native a Mobile App?
Answer
Yes, React Native is a mobile app development framework that allows developers to build mobile applications for both iOS and Android platforms using JavaScript and React. React Native is based on React, a popular JavaScript library for building user interfaces on the web, and uses a similar approach to building mobile apps.

React Native allows developers to write code once and reuse it across multiple platforms, which can save time and resources compared to developing separate apps for each platform. The resulting apps are considered "native" because they use the same building blocks as traditional mobile apps, such as buttons, text fields, and other UI elements.

So, in summary, React Native is a mobile app development framework that enables developers to create cross-platform mobile applications using JavaScript and React.

Q17. How to run react native app on Android?
Answer
To run React Native in Android, we have to follow these:
First, enable the USB Debugging option inside the Developer Options.
Plug the device via USB to the development machine.
Run adb devices command to check that the device is correctly connected to ADB
Now install and launch your app by using the below-given command.
$ react-native run-android

Q18. Write a program to display "Hello World" in react native?
Answer
Create a simple "Hello World" app by using modifying App.js file of FirstApp. Save the utility and reload by way of in reality pressing twice "R" or Ctrl+M (Reload).

import React, {Component} from 'react';  



import {Platform, StyleSheet, Text, View} from 'react-native';  



type Props = {};  



export default class App extends Component<Props> {  



render() {  



return (  



      <View>  



        <Text>Hello WorldText>  



     View>  



    );  



  }  



}  

Q19. What is the use of Redux in React Native?
Answer
Redux is a standalone state management library present in React Native and can be used combined with any framework or library. With the use of Redux, app developers can use one application state as a global state and interact with the state from any react component will be easy.

NOTE: If you are looking Redux Interview Questions then you can visit here.

Q20. What do you mean by Dispatch in react native?
Answer
Dispatch is a feature of the Redux store. You call store.dispatch to dispatch an action. This is the only way to set off a kingdom change. With React Redux, your factors never get admission to the keep without delay - connect does it for you.

Q21. How Virtual Dom works in React Native?
Answer
Virtual DOM is a copy of the real DOM. This node tree lists the elements, their attributions, contents, and properties also. Whenever any underlying data changes in React Native, the entire UI will be re-rendered in Virtual DOM representation. Then, the difference between previous DOM representation and virtual DOM will be counted. After that, the real DOM will be updated.

Q22. How to update react native with latest version?
Answer
It is important to upgrade the existing react-native to the latest version in order to access more featural aspects that involve views, APIs, classes, arrow functions, template string, import and export modules, array destructing and development tools.

Following steps should need to be performed to update the react-native to the latest version:

Update react native, react and Expo package versions for upgrading the expo projects in package.json
Install the latest SDK version which is compatible with the latest version of react-native in the app.json file.
Upgrade React Native CLI using the command: react-native upgrade
Install upgrade helper web tool for upgrading the applications
Upgrade existing file using the command react-native init
Perform troubleshoot activity to upgrade with react native CLI
Q23. What are the new features in React Native 0.61?
Answer
React Native 0.61 is the latest version of react native which is proficiently able to optimize the features of react-native version 0.60. the latest version of react-native comes with the latest and improved features.

The react native version 0.61 is incorporated with four advanced level features such as:

React native 0.61 is provided with improved CocoaPods Support
For dimension updates, new useWindowDimensions Hook feature is provided
Fest processing and refreshing of the application
React native is upgraded to 16.9 as it opposes old names for unsafe methods
Also Read: How to crack the interview in the first attempt
Q24. What is API in react native?
Answer
API is the acronym for Application Programming Interface, which is a software intermediary that lets in two applications to talk to every other. Each time you use an app like Facebook, send an on the spot message or take a look at the weather on your phone, you’re the usage of an API.

In React Native, we can use the Fetch to swimsuit our needs. You can absolutely name the URL thru Fetch, and make requests to the server as needed.

Lifecycle approach in React Native
There are several lifecycle methods to React Native. We’ll use three of these lifecycle strategies in this article; constructor, componentDidMount and Render.

Q25. How Axios works in React Native?
Answer
With the help of Axios, the user can send GET, POST, PUT, and DELETE requests to the REST API and render a response to the application. With the help of Axios, users can interact with the REST API. In general, Axios is a promise-based HTTP client which used by the react-native.

Axios is associated with a number of features which are enlisted below:

It makes XMLHttpRequests from the browser
From react native framework, it makes Http requests
It supports react-native API’s
It provides a client-side feature that protects the application from XSRF.
It automatically transforms response and request data.
How to use Axios
You have to install Axios using npm
npm install axios
After that you have to import this module.
import axios from 'axios';
Using POST method.



axios.post('/login', {

       username: 'bestinterviewquestion',

       password: 'admin@123'

  })

  .then(function (response) {

        console.log(response);

  })

  .catch(function (error) {

       console.log(error);

  });

Q26. What are components in react native?
Answer
The main components of react-native are-

OS-dependent components
React Native CLI
Android studio
Android SDK
Xcode
Q27. How to use firebase in react native?
Answer
Firebase is a mobile platform that helps you quickly develop high-quality apps, grow your user base and earn more money. This is a tool and infrastructure that users need to build better apps and grow a successful business. In addition, firebase is made up of a complementary feature that users can mix-and-match to fit your needs. There are total give key features of firebase namely authentication, Realtime database, cloud messaging, crash reporting and analytics.

Getting started with firebase by using following steps-

Create a firebase project in the Firebase console
Retrieve apikey, authDomian, DatabaseURL and storage bucket from firebase console
Create a new react-native project
Install firebase from npm
Add it into the react-native project
Q28. Which command is used to run for installing react native?
Answer
npm install -g react-native-cli

Q29. How to use typescript in react native?
Answer
When a developer is working on a project and wants to maintain the project for a long period of time then the user should need TypeScript. In order to use the TypeScript user should need to configure the TypeScript because it gives an option to configure the compiler. Moreover, users can configure the TypeScript as per their requirements and can effectively prioritize the type of errors. Given below are the steps that will enable the developer to use TypeScript in react native-

Creating a project in react native using-
react-native init myapp --template typescript && node myapp/setup.js && cd myapp
Set up and configure TSlint
npm install --save-dev tslint tslint-eslint-rules tslint-react tslint-config-prettier
Setting up Jest
npm install --save-dev ts-jest
Setting up an enzyme
npm install --save-dev enzyme enzyme-adapter-react-16 react-dom @types/enzyme @types/enzyme-adapter-react-16
Setting up a test library of react-native
npm install --save-dev react-native-testing-library
Q30. List the most common commands used in React Native?
Answer
Here you will discover a list of fundamental instructions to start creating iOS and Android apps the use of React Native.

react-native init PROJECTNAME

react-native run-android

react-native run-ios

watchman watch-del-all

react-native link LIBRARYNAME

Q31. Can we combine Android or iOS code in react native?
Answer
Yes, we can combine Android or iOS code in react native. React Native helps to smoothly combines the components written in Java, Objective-C or Swift.

Q32. Why react native is better than native?
Answer
React Native is better than native because of React native as it is a faster framework and allows the developers to create mobile applications that further support iOS and Android. The react native increases the speed of mobile development effectively and it is quite easier for the developers to maintain the mobile applications which are developed to react-native. It is easier for the developer to identify the bug in the applications which are developed in react native.

Q33. Can we use react native for web?
Answer
Yes, we can use react native for the web as it makes possible to run react-native APIs and component on the web platform.

For example-
Web interfaces with high quality: It is easier to create web applications and user interfaces in JavaScript. It provides native quality of interactions and it supports multiple input modes also.

Write once, render anywhere: It interoperates with a number of React- Native DOM components. Moreover, it is compatible with all of the React Native API.

Also Read: How to negotiate a higher salary after a job offer
Q34. What is Gesture Responder System in React Native?
Answer
Gesture Responder System is a system that manages the lifecycle of the applications which are built in React- Native framework. The applications automatically determine the intention of the users through touch. For example, the application determines slide on the widget, touch is scrolling or tapping. The Gesture Responder System allows the components to negotiate these touch interactions without integrating any sought of knowledge regarding their parent component and child component. React Native gesture responder system is the most powerful system, as it uses standard library to detect gestures such as scroll distance, single tap, double-tap, single tap confirmed and pinch distance.

Q35. How to store data in AsyncStorage in react native?
Answer
When developers develop applications, they need to store information permanently for an application. The react native applications use the database to remember all the information which is related to the applications and their respective users. React Native uses AsyncStorage for data storing purpose. AsyncStorage is a simple, unencrypted synchronous, persistent, key-value storage system that is global to the application. On iOS, AsyncStorage is backed by native code that stores small values in the serialized dictionary and large values in separate files. On Android, AsyncStorage will use either RocksDB or SQLite based on which is available.

Four steps are needed to understand how to use AsyncStorage to React Native-
Don’t need to install any extra library. By default, it comes with React Native. Import {AsyncStorage} from 'react-native';
AsyncStorage uses key-value pairs for saving the data for example- AsyncStorage.setItem ('myKey', myValue);
To load the saved data run given the command- AsyncStorage.getItem('myKey'). then((myValue)=> {this.setState ({'myKey': myValue});});
Since loading data is a time-consuming task, it is designed to be an asynchronous operation. So getItem returned the promise, which will invoke the call back function when the read operation is completed.
Q36. Which database is best for react native?
Answer
SQLite database is best for react native.

Q37. How to create a SQLite database in react native?
Answer
Given steps are used to create SQLite database in react native-
create a folder which is called as “www’ through the finder in the project folder
create a database file
add the created file to the project
Choose a file to add
Verify the structure of the project
Q38. How to load data from server in React Native?
Answer
React Native gives the Fetch API which offers networking needs. React Native makes use of componentDidMount lifecycle method to load the records from server.
fetch('https://bestinterviewquestion.com/menu.json')

Q39. How to use routes in react native?
Answer
In React native we use react navigation instead of routes.
In React we use React Router and In React Native we use React Navigation.
Q40. How do you add react navigation to react native?
Answer
You can install react navigation by the following command:

yarn add react-navigation
or npm install react-navigation

Q41. What are the other modules need for react native navigation?
Answer
You have to install following modules in addition to react-navigation:
react-native-gesture-handler
react-native-reanimated
react-native-screens
react-native-safe-area-context
react-navigation-stack
Q42. How to create stackNavigator in react native?
Answer
const AppNavigator = createStackNavigator({
      Home: {
          screen: HomeScreen,
      },
});

Q43. How to create stack of screens in react native?
Answer
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class HomePage extends React.Component {
render() {
    return (
       <view>
         <text>Home Page</text></view>
    );
}
}
class DetailPage extends React.Component{
    render(){
        return (
           <view>
              <text>Detail Page</text></view>

        )
    }
}
const AppNavigator = createStackNavigator({
   Home: HomePage,
   Details: DetailPage,
},
{
    initialRouteName: 'Home',
});
export default createAppContainer(AppNavigator);

Q44. How to navigate from one page to another in react native?
Answer
Navigation is done in react native by this.props.navigation.navigate('Page Name on which you want to navigate where')

import React from 'react';

import { View,Text,Button } from 'react-native';



class HomePage extends React.Component{

     render(){

         return (

             <view>

                 <text>Home Page</text>

                 <button onpress="{()=" title="Go to Detail page">this.props.navigation.navigate('Details')} ></button>



           </view>

        )

    }

}

Q45. What is the difference between state and props?
Answer
State	Props
States are mutual	Props are immutable
The state is set and updated by the object.	In props, you can pass properties from parent components.
The state can be modified	Props can’t be modified.
Q46. What is JSX?
Answer
JSX stands for JavaScript XML

It allows us to write HTML elements in React and place them in the DOM without any createElement() and/orappendChild() methods.JSX also converts HTML tags into react elements and makes it easier to write.

const myelement = <h1>React Interview Questions</h1>;

ReactDOM.render(myelement, document).

Q47. What is AppRegistry react native?
Answer
It is an entry point of JavaScript which is used to run all the apps to React Native. All the components of the App root must register themselves with AppRegistry.registerComponent(), after that the native system will be able to load the bundle regarding the app. After that, they can run the app simply by invoking AppRegistry.runApplication().

Q48. What are pure components in React Native?
Answer
A React component can be viewed as pure on the chance that it renders a similar output for a similar state and props. Class components that extend the React are PureComponent class that is treated as pure components.

Q49. What type of data does a ListView take in react native?
Answer
To create a ListView in native we create DataSource type of data because React Native ListView is a view component that contains the list of items and displays in a vertically scrollable list.

Q50. How do you call a Web API in React Native?
Answer
Here’s an example to call a web service to React Native.

fetch('http://**someurl**', {
method: 'POST',
headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
},
body: JSON.stringify({
   username : "admin1",
   password: "admin13",
})
})

Q51. How to pass the state from one component to another React Native?
Answer
To pass the state from one component to another, you need to call an API, and then you would need to setup redux. After this, you can call an action where you will call an API and set its response in your reducer. The response can then be accessed in the component through the props.

//component

handleSubmit=()=>{

   const {data}=this.state;

   this.props.callAPI(data)

}



Action.js

   export function callAPI(data){

   return (dispatch)=>{

      dispatch(getData(data))

   }

}



function getData(data){

   //use fetch/axios to call the api

}

//in your component, use connect({mapStateToProps},{mapDispatchToProps})

(nameofYourComponent) and you can use your data as props.



 

Q52. What does StyleSheet.create do?What are refs in React Native?
Answer
The Stylesheet.create function in React Native is used for the following:

It validates the keys and registers them to React
It creates a StyleSheet style reference from the specified object.
It allows you to send the style only once through the bridge while referring to all subsequent users through ID.
Short form for “reference”, Refs are used to access underlying DOM nodes or React elements within a React component.

Q53. How to import components in React Native?
Answer
Add this code in the component.js file destination file
import Title from './src/components/importcomponentdemo';
Here’s the complete code:
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/importcomponentdemo';
const App = () => (
   <Title />
);
AppRegistry.registerComponent('ComponentDemo', () => App);
Q54. How to install a specific version of React Native?
Answer
To install a specific version of React Native, use this following command:

$ react-native init newproject --version react-native@VersionNumber

Note: In the above, replace VersionNumber with the version of React you want to install.

Q55. Which node_modules run in React Native?
Answer
Here are the node_modules running in React Native:

React-native-navigation-redux-integration
Aws-amplify-react-native
Rn-nodeify
React-Nativify
Q56. What is the use of the arrow function?
Answer
The use of Arrow functions in React Native is to help reduce your application's memory consumption. It is done by reducing the CPU time required to iterate the over loops to generate the components necessary for your lists.

Here’s an example of Arrow function in render:
class Foo extends Component {
   handleClick() {
   console.log('Click happened');
}
render() {
   return <button onClick={() => this.handleClick()}>Click Me</button>;
}
}

Q57. How to use map function in React Native?
Answer
The map function is used to show a list of elements in an array. It can be used in React Native like the following example:

import React, { Component } from "react";

import { Text, View } from "react-native";



export default class mapFunction extends Component {

constructor(props) {

super(props);

this.state = {

array: [

{

title: "example title 1",

subtitle: "example subtitle 1"

},

{

title: "example title 2",

subtitle: "example subtitle 2"

},

{

title: "example title 3",

subtitle: "example subtitle 3"

}

]

};

}



list = () => {

return this.state.array.map(element => {

return (

<View style={{ margin: 10 }}>

<Text>{element.title}</Text>

<Text>{element.subtitle}</Text>

</View>

);

});

};



render() {

return <View>{this.list()}</View>;

}

} 

Q58. What are controlled and uncontrolled components in react native?
Answer
Controlled Components	Uncontrolled Components
A controlled component is one that is bound to a value, and the changes inside it will be handled in code by using event-based callbacks.	This is similar to the traditional HTML form inputs, but, here, the form data is handled by the DOM itself.
It does not maintain its internal state.	It maintains its internal states.
Data is controlled by the parent component.	Here, the data is controlled by the DOM itself.
It accepts the current value as a prop.	A ref is used for their current values.
Has much efficient control over the form elements and data.	Has less control over the form elements and the data.
Q59. How to use the camera in React Native?
Answer
To use the camera to React Native, follow these steps carefully:

On Android, camera permission must be asked:
<uses-permission android:name="android.permission.CAMERA" />
Now, to enable video recording feature add the following code to the AndroidManifest.xml:
<uses-permission android:name="android.permission.RECORD_AUDIO"/> <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
For iOS, you must update the Info.plist with a usage description for camera
<key>NSCameraUsageDescription</key> <string>Your own description of the purpose</string>
Q60. How to call the function from another component in React Native?
Answer
Here’s an example to call a function from another component in React Native:

Create a function, sayHello and then use it as a named-function
const hellos = ['Hola', 'Salut', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa'];
const sayHello = function() {
return hellos[Math.floor((Math.random()*hellos.length))];
};

export { sayHello };

Now, you can import into whichever component you wish to share the functionality like this:
import { sayHello } from './hello';
class CompA extends React.Component {
    render() {
       return <span>{sayHello()}</span>;
    }
}
class CompB extends React.Component {
    render() {
       return <span>{sayHello()}</span>;
   }
}

render(<span>
<CompA />
<CompB />
</span>, document.querySelector('#app'));

Q61. How do you use props in react native?
Answer
Many of the components were customized post their development, by considering multiple parameters. These exclusive parameters are called Props.

Q62. How do you pass props from one screen to another in react native?
Answer
When we creating an app containing multiple screens, then sometimes it is required to pass value between one screen to another one. This can be achieved by using this.props.navigation.navigate() function and this function is used to navigate between the different screens.

Q63. What are states in React Native?
Answer
State in React Native is used within components to keep track of information and the most common way to set state in React Native is by using React's setState() method.

Q64. When would you use a class component over a functional component?
Answer
A class component can be used over functional components when implementing the State and Logic. In the case of using the React lifecycle methods, the class component is recommended.

Under the class components, props can be passed easily with this.props

Q65. How do you change the view height dynamically in react native?
Answer
Q66. What are the advantages of native apps over hybrid apps?
Answer
Here are some of the advantages of native apps over hybrid apps:
Native app development has fewer dependencies for bugs to occur.
In the native app, you are not relying on cross-platform tools.
The processing speed of the native app is faster than the hybrid app.
It provides great designs and user experience than a hybrid app.
Q67. What is the difference between ShadowDOM and VirtualDOM?
Answer
ShadowDOM	VirtualDOM
Shadow DOM creates small pieces of the DOM object which has its own, isolated scope as they represent.	Virtual DOM creates a copy of the whole DOM object
It is a tool that is used in building the apps and websites that are based on components.	It is a concept of DOM which is being used by Vue.js and React.js
It comes in small pieces and doesn’t represent the whole Document Object Model.	It's done to improve the performance of the UI libraries
Q68. What are hooks in react native?
Answer
Hooks are a new enhancement in React 16.8. They allow to utilize the state and other react features without involving the class. The major agenda behind using the hooks are to handle the side effects in the functional components of react.

Q69. What is the difference between Hot Reloading and Live Reloading in React Native?
Answer
Hot Reloading	Live Reloading
It only refreshes the files that were changed without losing the state of the app.	It reloads or refreshes the entire app when a file changes.
It displays the code changes according to new code changes without restarting the app from start.	It requires the restart of the app in case of any change in the code
Q70. What is fabric in react native?
Answer
Fabric is the latest architecture of React Native which has been proposed by the company to develop the close and better user experience of mobile apps than the native apps.

Q71. What is State and how is it used in React Native?
Answer
The state is used to control the components. State also allows the variable data to get stored in it. As states are mutable, they can change the values at any point in time.

In this example, we are creating the Text component with the help of state data. Content in the text component can be updated anytime by clicking on it. However, the state needs to be updated by the event “onPress”.

import React, {Component} from 'react';    

import { Text, View } from 'react-native';    

export default class App extends Component {    

      state = {

           myState: 'React Native Interview Questions'

      }

updateState = () => this.setState({myState: 'React Native Interview Questions and Answers'})

render() {

     return (

               

                {this.state.myState}     

           

     );

} }

Q72. What are Props and how is it used in React Native?
Answer
Props are means to the parameters that are used for customizing the component when the component is being created or re-rendered. They are more like the argument which is passed to the React component.

import React, {Component} from 'react';

import {View, Text} from 'react-native';

class DefaultPropComponent extends Component {

   render() {

       return (

           <View>

             <Text>

              {this.props.name}

            </Text>

          </View>

       )

   }

}

Demo.defaultProps = {

   name: 'BOB'

}



export default DefaultPropComponent;

Q73. What is the difference between FlatList and ScrollView?
Answer
FlatList	ScrollView
It renders all the child components at once without impacting the performance.	It renders all the child components at once. However, it decreases the performance.
It provides header and footer support.	It does not provide any support for the header and footer.
It provides multiple column support, infinite scroll loading, and nth number of features.	It provides limited features.
It gives horizontal mode as an optional feature.	It only allows vertical mode.
It allows configuring viewability callbacks.	You can’t configure callbacks in ScrollView.
Q74. What is the purpose of a Native module in React Native, and how do you create one?
Answer
A Native module in React Native is a way to add native code (i.e., code written in Java or Objective-C/Swift) to a React Native application. Native modules allow React Native apps to access functionality that isn't available in JavaScript, such as accessing the camera or making network requests.

To create a Native module in React Native, you typically need to perform the following steps:

Create a new module file in your native code (either Java or Objective-C/Swift, depending on your platform) that exports the functionality you want to use in your React Native app.
Add the React Native bridge code to your module file, which allows your JavaScript code to communicate with your native code.
Create a new JavaScript file that defines a wrapper around your native module. This file should define a JavaScript class that provides methods that correspond to the functionality in your native module.
Finally, add your new module to your app's package.json file, so that it can be installed and used by your app.
Here's an example of how to create a simple Native module in React Native for Android:

Create a new Java file called MyModule.java, and add the following code:
package com.myapp;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class MyModule extends ReactContextBaseJavaModule {
  public MyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  @Override
  public String getName() {
    return "MyModule";
  }
  @ReactMethod
  public void myMethod(String message) {
    // Do something with the message
  }
}
Add the following code to the MainApplication.java file in your Android app:
@Override
protected List getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new MyModulePackage() // <-- Add this line
    );
}
Create a new JavaScript file called MyModule.js, and add the following code:
import { NativeModules } from 'react-native';
const { MyModule } = NativeModules;
export default MyModule;
Finally, add your new module to your app's package.json file, like so:
{
  "name": "myapp",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "react": "16.13.1",
    "react-native": "0.63.2",
    ...
  },
  "rnpm": {
    "assets": [
      "assets/fonts/"
    ]
  },
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "test": "jest"
  },
  "devDependencies": {
    ...
  },
  "react-native": {
    "dependencies": {
      "MyModule": {
        "platforms": {
          "android": null
        }
      }
    }
  }
}
After completing these steps, you should be able to use your new Native module in your React Native app by importing it from your MyModule.js file and calling its methods. For example:
import MyModule from './MyModule';
MyModule.myMethod('Hello, Native module!');
