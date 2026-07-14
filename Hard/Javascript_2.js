37 Essential JavaScript Interview Questions *
Toptal sourced essential questions that the best JavaScript developers can answer. Driven from our community, we encourage experts to submit questions and offer feedback.

Hire a Top JavaScript Developer Now
Toptal logois an exclusive network of the top freelance software developers, designers, marketing experts, product managers, project managers, and management consultants in the world. Top companies hire Toptal freelancers for their most important projects.
1.
What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

Hide answer
Although typeof bar === "object" is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!

Therefore, the following code will, to the surprise of most developers, log true (not false) to the console:

var bar = null;
console.log(typeof bar === "object");  // logs true!
As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

console.log((bar !== null) && (typeof bar === "object"));  // logs false
To be entirely thorough in our answer, there are two other things worth noting:

First, the above solution will return false if bar is a function. In most cases, this is the desired behavior, but in situations where you want to also return true for functions, you could amend the above solution to be:

console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
Second, the above solution will return true if bar is an array (e.g., if var bar = [];). In most cases, this is the desired behavior, since arrays are indeed objects, but in situations where you want to also false for arrays, you could amend the above solution to be:

console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
However, there’s one other alternative that returns false for nulls, arrays, and functions, but true for objects:

console.log((bar !== null) && (bar.constructor === Object));
Or, if you’re using jQuery:

console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));
ES5 makes the array case quite simple, including its own null check:

console.log(Array.isArray(bar));
2.
What will the code below output to the console and why?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
Hide answer
Since both a and b are defined within the enclosing scope of the function, and since the line they are on begins with the var keyword, most JavaScript developers would expect typeof a and typeof b to both be undefined in the above example.

However, that is not the case. The issue here is that most developers incorrectly understand the statement var a = b = 3; to be shorthand for:

var b = 3;
var a = b;
But in fact, var a = b = 3; is actually shorthand for:

b = 3;
var a = b;
As a result (if you are not using strict mode), the output of the code snippet would be:

a defined? false
b defined? true
But how can b be defined outside of the scope of the enclosing function? Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.

Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; will generate a runtime error of ReferenceError: b is not defined, thereby avoiding any headfakes/bugs that might othewise result. (Yet another prime example of why you should use use strict as a matter of course in your code!)

3.
What will the code below output to the console and why?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
Hide answer
The above code will output the following to the console:

outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.

4.
What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

Hide answer
This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:

(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);
5.
What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

Hide answer
The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

Some of the key benefits of strict mode include:

Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.
6.
Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
Hide answer
Surprisingly, these two functions will not return the same thing. Rather:

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
will yield:

foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined 
Not only is this surprising, but what makes this particularly gnarly is that foo2() returns undefined without any error being thrown.

The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form). As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.

No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property bar which is equal to the string "hello").

This behavior also argues for following the convention of placing an opening curly brace at the end of a line in JavaScript, rather than on the beginning of a new line. As shown here, this becomes more than just a stylistic preference in JavaScript.

7.
What will the code below output? Explain your answer.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
Hide answer
An educated answer to this question would simply be: “You can’t be sure. it might print out 0.3 and true, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

0.30000000000000004
false
A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON:

function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
8.
In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
Hide answer
The values will be logged in the following order:

1
4
3
2
Let’s first explain the parts of this that are presumably more obvious:

1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay

2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.

OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being logged right away? And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later line of code?

The answer has to do with properly understanding JavaScript events and timing.

The browser has an event loop which checks the event queue and processes pending events. For example, if an event happens in the background (e.g., a script onload event) while the browser is busy (e.g., processing an onclick), the event gets appended to the queue. When the onclick handler is complete, the queue is checked and the event is then handled (e.g., the onload script is executed).

Similarly, setTimeout() also puts execution of its referenced function into the event queue if the browser is busy.

When a value of zero is passed as the second argument to setTimeout(), it attempts to execute the specified function “as soon as possible”. Specifically, execution of the function is placed on the event queue to occur on the next timer tick. Note, though, that this is not immediate; the function is not executed until the next tick. That’s why in the above example, the call to console.log(4) occurs before the call to console.log(3) (since the call to console.log(3) is invoked via setTimeout, so it is slightly delayed).

9.
Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

Hide answer
The following one line function will return true if str is a palindrome; otherwise, it returns false.

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
For example:

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
10.
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
Hide answer
There are (at least) two ways to do this:

METHOD 1

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
In JavaScript, functions provide access to an arguments object which provides access to the actual arguments passed to a function. This enables us to use the length property to determine at runtime the number of arguments passed to the function.

If two arguments are passed, we simply add them together and return.

Otherwise, we assume it was called in the form sum(2)(3), so we return an anonymous function that adds together the argument passed to sum() (in this case 2) and the argument passed to the anonymous function (in this case 3).

METHOD 2

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
When a function is invoked, JavaScript does not require the number of arguments to match the number of arguments in the function definition. If the number of arguments passed exceeds the number of arguments in the function definition, the excess arguments will simply be ignored. On the other hand, if the number of arguments passed is less than the number of arguments in the function definition, the missing arguments will have a value of undefined when referenced within the function. So, in the above example, by simply checking if the 2nd argument is undefined, we can determine which way the function was invoked and proceed accordingly.

11.
Consider the following code snippet:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
(a) What gets logged to the console when the user clicks on “Button 4” and why?

(b) Provide one or more alternate implementations that will work as expected.

Hide answer
(a) No matter what button the user clicks the number 5 will always be logged to the console. This is because, at the point that the onclick method is invoked (for any of the buttons), the for loop has already completed and the variable i already has a value of 5. (Bonus points for the interviewee if they know enough to talk about how execution contexts, variable objects, activation objects, and the internal “scope” property contribute to the closure behavior.)

(b) The key to making this work is to capture the value of i at each pass through the for loop by passing it into a newly created function object. Here are four possible ways to accomplish this:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  document.body.appendChild(btn);
}
Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}
Or, we could replace the for loop with a call to the array object’s native forEach method:

['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() { console.log(i); });
  document.body.appendChild(btn);
});
Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use let i instead of var i:

for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
12.
Assuming d is an “empty” object in scope, say:

var d = {};
…what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
Hide answer
The snippet of code shown above sets two properties on the object d. Ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. But running this code marks those properties as “own properties” of the object.

This is a useful strategy for ensuring that an object has a given set of properties. Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).

13.
What will the code below output to the console and why?

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
Hide answer
The logged output will be:

"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
arr1 and arr2 are the same (i.e. ['n','h','o','j', ['j','o','n','e','s'] ]) after the above code is executed for the following reasons:

Calling an array object’s reverse() method doesn’t only return the array in reverse order, it also reverses the order of the array itself (i.e., in this case, arr1).

The reverse() method returns a reference to the array itself (i.e., in this case, arr1). As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);), arr1 will be affected as well since arr1 and arr2 are simply references to the same object.

And a couple of side points here that can sometimes trip someone up in answering this question:

Passing an array to the push() method of another array pushes that entire array as a single element onto the end of the array. As a result, the statement arr2.push(arr3); adds arr3 in its entirety as a single element to the end of arr2 (i.e., it does not concatenate the two arrays, that’s what the concat() method is for).

Like Python, JavaScript honors negative subscripts in calls to array methods like slice() as a way of referencing elements at the end of the array; e.g., a subscript of -1 indicates the last element in the array, and so on.

14.
What will the code below output to the console and why ?

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
Hide answer
The above code will output the following to the console:

"122"
"32"
"02"
"112"
"NaN2"
NaN
Here’s why…

The fundamental issue here is that JavaScript (ECMAScript) is a loosely typed language and it performs automatic type conversion on values to accommodate the operation being performed. Let’s see how this plays out with each of the above examples.

Example 1: 1 + "2" + "2" Outputs: "122" Explanation: The first operation to be performed in 1 + "2". Since one of the operands ("2") is a string, JavaScript assumes it needs to perform string concatenation and therefore converts the type of 1 to "1", 1 + "2" yields "12". Then, "12" + "2" yields "122".

Example 2: 1 + +"2" + "2" Outputs: "32" Explanation: Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".

Example 3: 1 + -"1" + "2" Outputs: "02" Explanation: The explanation here is identical to the prior example, except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1 yielding 0, which is then converted to a string and concatenated with the final "2" operand, yielding "02".

Example 4: +"1" + "1" + "2" Outputs: "112" Explanation: Although the first "1" operand is typecast to a numeric value based on the unary + operator that precedes it, it is then immediately converted back to a string when it is concatenated with the second "1" operand, which is then concatenated with the final "2" operand, yielding the string "112".

Example 5: "A" - "B" + "2" Outputs: "NaN2" Explanation: Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.

Example 6: "A" - "B" + 2 Outputs: NaN Explanation: As exlained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.

15.
The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
Hide answer
The potential stack overflow can be avoided by modifying the nextListItem function as follows:

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
The stack overflow is eliminated because the event loop handles the recursion, not the call stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.

16.
What is a “closure” in JavaScript? Provide an example.

Hide answer
A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.

Here is an example:

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
In the above example, variables from innerFunc, outerFunc, and the global namespace are all in scope in the innerFunc. The above code will therefore produce the following output:

outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
17.
What would the following lines of code output to the console?

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
Explain your answer.

Hide answer
The code will output the following four lines:

0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.

The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied. If this boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.

The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

However, the interesting thing with the && operator is that when an expression is evaluated as “true”, then the expression itself is returned. This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so. This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1).

18.
What will be the output when the following code is executed? Explain.

console.log(false == '0')
console.log(false === '0')
Hide answer
The code will output:

true
false
In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

19.
What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
Hide answer
The output of this code will be 456 (not 123).

The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

20.
What will the following code output to the console:

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
Explain your answer.

Hide answer
The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).

Here’s why:

The named function f() calls itself recursively, until it gets down to calling f(1) which simply returns 1. Here, therefore, is what this does:

f(1): returns n, which is 1
f(2): returns 2 * f(1), which is 2
f(3): returns 3 * f(2), which is 6
f(4): returns 4 * f(3), which is 24
f(5): returns 5 * f(4), which is 120
f(6): returns 6 * f(5), which is 720
f(7): returns 7 * f(6), which is 5040
f(8): returns 8 * f(7), which is 40320
f(9): returns 9 * f(8), which is 362880
f(10): returns 10 * f(9), which is 3628800
21.
Consider the code snippet below. What will the console output be and why?

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
Hide answer
The output will be 1, even though the value of x is never set in the inner function. Here’s why:

As explained in our JavaScript Hiring Guide, a closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function. An important feature of closures is that an inner function still has access to the outer function’s variables.

Therefore, in this example, since x is not defined in the inner function, the scope of the outer function is searched for a defined variable x, which is found to have a value of 1.

22.
What will the following code output to the console and why:

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
What is the issue with this code and how can it be fixed.

Hide answer
The code will output:

undefined
John Doe
The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

One way to fix the stoleSecretIdentity() function is as follows:

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
23.
Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be:

a DOM element
a callback function (that takes a DOM element as its argument)
Hide answer
Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application. Here’s an example solution:

function Traverse(p_element,p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i],p_callback);  // recursive call
   }
}
24.
Testing your this knowledge in JavaScript: What is the output of the following code?

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
Hide answer
Output:

10
2
Why isn’t it 10 and 5?

In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window. var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

method is bound to Object obj, and obj.method is called with parameters fn and 1. Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.

Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.

Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.

Hence the output will be as above.

25.
Consider the following code. What will the output be, and why?

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
Hide answer
1
undefined
2
var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:

(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */);
    }
    console.log(x);
    console.log(y);
})();
26.
What will be the output of this code?

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
Hide answer
Neither 21, nor 20, the result is undefined

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

27.
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
What will this code print?

Hide answer
It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.

28.
What do the following lines output, and why?

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
Hide answer
The first statement returns true which is as expected.

The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

29.
How do you add an element at the begining of an array? How do you add one at the end?

Hide answer
var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
With ES6, one can use the spread operator:

myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];
Or, in short:

myArray = ['start', ...myArray, 'end'];
30.
Imagine you have this code:

var a = [1, 2, 3];
a) Will this result in a crash?

a[10] = 99;
b) What will this output?

console.log(a[6]);
Hide answer
a) It will not crash. The JavaScript engine will make array slots 3 through 9 be “empty slots.”

b) Here, a[6] will output undefined, but the slot still remains empty rather than filled with undefined. This may be an important nuance in some cases. For example, when using map(), empty slots will remain empty in map()’s output, but undefined slots will be remapped using the function passed to it:

var b = [undefined];
b[2] = 1;
console.log(b);             // (3) [undefined, empty × 1, 1]
console.log(b.map(e => 7)); // (3) [7,         empty × 1, 7]
31.
What is the value of typeof undefined == typeof NULL?

Hide answer
The expression will be evaluated to true, since NULL will be treated as any other undefined variable.

Note: JavaScript is case-sensitive and here we are using NULL instead of null.

32.
What would following code return?

console.log(typeof typeof 1);
Hide answer
string

typeof 1 will return "number" and typeof "number" will return string.

33.
What will be the output of the following code:

for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
Explain your answer. How could the use of closures help here?

Hide answer
The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; rather, it will display 5, 5, 5, 5, and 5.

The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5.

Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:

for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.

In an ES2015 context, you can simply use let instead of var in the original code:

for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
34.
What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

Hide answer
The NaN property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric.

While this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN that can result in hair-pulling bugs if one is not aware of them.

For one thing, although NaN means “not a number”, its type is, believe it or not, Number:

console.log(typeof NaN === "number");  // logs "true"
Additionally, NaN compared to anything – even itself! – is false:

console.log(NaN === NaN);  // logs "false"
A semi-reliable way to test whether a number is equal to NaN is with the built-in function isNaN(), but even using isNaN() is an imperfect solution.

A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN() function, which is a different and more reliable than the old global isNaN() function.

35.
What will the following code output and why?

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
Hide answer
Output to the console will be “3”.

There are three closures in the example, each with it’s own var b declaration. When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output.

Furthermore, due to hoisting the code in inner will be interpreted as follows:

function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}
36.
Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

Hide answer
This may sound trivial and, in fact, it is trivial with ECMAscript 6 which introduces a new Number.isInteger() function for precisely this purpose. However, prior to ECMAScript 6, this is a bit more complicated, since no equivalent of the Number.isInteger() method is provided.

The issue is that, in the ECMAScript specification, integers only exist conceptually; i.e., numeric values are always stored as floating point values.

With that in mind, the simplest and cleanest pre-ECMAScript-6 solution (which is also sufficiently robust to return false even if a non-numeric value such as a string or null is passed to the function) would be the following use of the bitwise XOR operator:

function isInteger(x) { return (x ^ 0) === x; } 
The following solution would also work, although not as elegant as the one above:

function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0); }
The following function (or with Math.ceil() or Math.floor() in place of Math.round()) might also seem useful, but the results are not exactly the same as with the above two functions:

function isInteger(x) { return Math.round(x) === x; }
The difference is, these Math-based solutions return true for Infinity and -Infinity, whereas the others (and notably ES6’s Number.isInteger()) return false.

Another fairly common incorrect solution is the following:

function isInteger(x) { return parseInt(x, 10) === x; }
While this parseInt-based approach will work well for many values of x, once x becomes quite large, it will fail to work properly. The problem is that parseInt() coerces its first parameter to a string before parsing digits. Therefore, once the number becomes sufficiently large, its string representation will be presented in exponential form (e.g., 1e+21). Accordingly, parseInt() will then try to parse 1e+21, but will stop parsing when it reaches the e character and will therefore return a value of 1. Observe:

> String(1000000000000000000000)
'1e+21'
> parseInt(1000000000000000000000, 10)
1
> parseInt(1000000000000000000000, 10) === 1000000000000000000000
false
37.
How do you clone an object?

Hide answer
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
Now the value of objclone is {a: 1 ,b: 2} but points to a different object than obj.

Note the potential pitfall, though: Object.assign() will just do a shallow copy, not a deep copy. This means that nested objects aren’t copied. They still refer to the same nested objects as the original:

let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},obj);
console.log('objclone: ', objclone);

obj.c.age = 45;
console.log('After Change - obj: ', obj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45

70 JavaScript Interview Questions
#
javascript
#
webdev
#
career
#
tutorial
Hi Guys Good Day and a Happy New Year 🎆🎆🎆!
This is a long one, so bear with me for a second or an hour. In every answer for every question there's an arrow up ↑ link that lets you go back to the List of Questions so that you don't waste time scrolling up and down.

The Questions
1. What's the difference between undefined and null?
2. What does the && operator do?
3. What does the || operator do?
4. Is using the + or unary plus operator the fastest way in converting a string to a number?
5. What is the DOM?
6. What is Event Propagation?
7. What's Event Bubbling?
8. What's Event Capturing?
9. What's the difference between event.preventDefault() and event.stopPropagation() methods?
10. How to know if the event.preventDefault() method was used in an element?
11. Why does this code obj.someprop.x throw an error?
12. What is event.target ?
13. What is event.currentTarget?
14. What's the difference between == and ===?
15. Why does it return false when comparing two similar objects in JavaScript?
16. What does the !! operator do?
17. How to evaluate multiple expressions in one line?
18. What is Hoisting?
19. What is Scope?
20. What are Closures?
21. What are the falsy values in JavaScript?
22. How to check if a value is falsy?
23. What does "use strict" do?
24. What's the value of this in JavaScript?
25. What is the prototype of an object?
26. What is an IIFE, what is the use of it?
27. What is the use Function.prototype.apply method?
28. What is the use Function.prototype.call method?
29. What's the difference between Function.prototype.apply and Function.prototype.call?
30. What is the usage of Function.prototype.bind?
31. What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?
32. What are Higher Order Functions?
33. Why are functions called First-class Objects?
34. Implement the Array.prototype.map method by hand.
35. Implement the Array.prototype.filter method by hand.
36. Implement the Array.prototype.reduce method by hand.
37. What is the arguments object?
38. How to create an object without a prototype?
39. Why does b in this code become a global variable when you call this function?
40. What is ECMAScript?
41. What are the new features in ES6 or ECMAScript 2015?
42. What's the difference between var, let and const keywords?
43. What are Arrow functions?
44. What are Classes?
45. What are Template Literals?
46. What is Object Destructuring?
47. What are ES6 Modules?
48. What is the Set object and how does it work?
49. What is a Callback function?
50. What are Promises?
51. What is async/await and How does it work?
52. What's the difference between Spread operator and Rest operator?
53. What are Default Parameters?
54. What are Wrapper Objects?
55. What is the difference between Implicit and Explicit Coercion?
56. What is NaN? and How to check if a value is NaN?
57. How to check if a value is an Array?
58. How to check if a number is even without using the % or modulo operator?
59. How to check if a certain property exists in an object?
60. What is AJAX?
61. What are the ways of making objects in JavaScript?
62. What's the difference between Object.seal and Object.freeze methods?
63. What's the difference between the in operator and the hasOwnProperty method in objects?
64. What are the ways to deal with Asynchronous Code in JavasScript?
65. What's the difference between a function expression and function declaration?
66. How many ways can a function be invoked?
67. What is memoization and what's the use it?
68. Implement a memoization helper function.
69. Why does typeof null return object? How to check if a value is null?
70. What does the new keyword do?
1. What's the difference between undefined and null?.
↑ Before understanding the differences between undefined and null we must understand the similarities between them.

They belong to JavaScript's 7 primitive types.
 let primitiveTypes = ['string','number','null','undefined','boolean','symbol', 'bigint'];
They are falsy values. Values that evaluated to false when converting it to boolean using Boolean(value) or !!value.
   console.log(!!null); //logs false
   console.log(!!undefined); //logs false

   console.log(Boolean(null)); //logs false
   console.log(Boolean(undefined)); //logs false
Ok, let's talk about the differences.

undefined is the default value of a variable that has not been assigned a specific value. Or a function that has no explicit return value ex. console.log(1). Or a property that does not exist in an object. The JavaScript engine does this for us the assigning of undefined value.
  let _thisIsUndefined;
  const doNothing = () => {};
  const someObj = {
    a : "ay",
    b : "bee",
    c : "si"
  };

  console.log(_thisIsUndefined); //logs undefined
  console.log(doNothing()); //logs undefined
  console.log(someObj["d"]); //logs undefined
null is "a value that represents no value". null is value that has been explicitly defined to a variable. In this example we get a value of null when the fs.readFile method does not throw an error.
  fs.readFile('path/to/file', (e,data) => {
     console.log(e); //it logs null when no error occurred
     if(e){
       console.log(e);
     }
     console.log(data);
   });
When comparing null and undefined we get true when using == and false when using ===. You can read the reason here.

   console.log(null == undefined); // logs true
   console.log(null === undefined); // logs false
2. What does the && operator do?
↑ The && or Logical AND operator finds the first falsy expression in its operands and returns it and if it does not find any falsy expression it returns the last expression. It employs short-circuiting to prevent unnecessary work. I've used this in the catch block when closing database connection in one of my projects.

   console.log(false && 1 && []); //logs false
   console.log(" " && true && 5); //logs 5
Using if statements.

  const router: Router = Router();

  router.get('/endpoint', (req: Request, res: Response) => {
     let conMobile: PoolConnection;
     try {
        //do some db operations
     } catch (e) {
     if (conMobile) {
      conMobile.release();
     }
  }
});
Using && operator.

const router: Router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
  let conMobile: PoolConnection;
  try {
     //do some db operations
  } catch (e) {
    conMobile && conMobile.release()
  }
});
3. What does the || operator do?
↑ The || or Logical OR operator finds the first truthy expression in its operands and returns it. This too employs short-circuiting to prevent unnecessary work. It was used before to initialize default parameter values IN functions before ES6 Default function parameters was supported.

console.log(null || 1 || undefined); //logs 1

function logName(name) {
  var n = name || "Mark";
  console.log(n);
}

logName(); //logs "Mark"
4. Is using the + or unary plus operator the fastest way in converting a string to a number?
↑ According to MDN Documentation the + is the fastest way of converting a string to a number because it does not perform any operations on the value if it is already a number.

5. What is the DOM?
↑ DOM stands for Document Object Model is an interface (API) for HTML and XML documents. When the browser first reads (parses) our HTML document it creates a big object, a really big object based on the HTML document this is the DOM. It is a tree-like structure that is modeled from the HTML document. The DOM is used for interacting and modifying the DOM structure or specific Elements or Nodes.

Imagine if we have an HTML structure like this.

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document Object Model</title>
</head>

<body>
   <div>
      <p>
         <span></span>
      </p>
      <label></label>
      <input>
   </div>
</body>

</html>

The DOM equivalent would be like this.
DOM equivalent

The document object in JavaScript represents the DOM. It provides us many methods that we can use to selecting elements to update element contents and many more.

6. What is Event Propagation?
↑ When an event occurs on a DOM element, that event does not entirely occur on that just one element. In the Bubbling Phase, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window while in the Capturing Phase the event starts from the window down to the element that triggered the event or the event.target.

Event Propagation has three phases.

Capturing Phase – the event starts from window then goes down to every element until it reaches the target element.
Target Phase – the event has reached the target element.
Bubbling Phase – the event bubbles up from the target element then goes up every element until it reaches the window.
Event Propagation

7. What's Event Bubbling?
↑ When an event occurs on a DOM element, that event does not entirely occur on that just one element. In the Bubbling Phase, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window.

If we have an example markup like this.

 <div class="grandparent">
    <div class="parent">
      <div class="child">1</div>
    </div>
  </div>
And our js code.

function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  });

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  });

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  });

  addEvent(document, 'click', function (e) {
    console.log('document');
  });

  addEvent('html', 'click', function (e) {
    console.log('html');
  })

  addEvent(window, 'click', function (e) {
    console.log('window');
  })

});
The addEventListener method has a third optional parameter useCapture with a default value of false the event will occur in the Bubbling phase if true the event will occur in the Capturing Phase. If we click on the child element it logs child,parent,grandparent, html, document and window respectively on the console. This is Event Bubbling.

8. What's Event Capturing?
↑ When an event occurs on a DOM element, that event does not entirely occur on that just one element. In Capturing Phase, the event starts from the window all the way down to the element that triggered the event.

If we have an example markup like this.

 <div class="grandparent">
    <div class="parent">
      <div class="child">1</div>
    </div>
  </div>
And our js code.

function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  }, true);

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  }, true);

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  }, true);

  addEvent(document, 'click', function (e) {
    console.log('document');
  }, true);

  addEvent('html', 'click', function (e) {
    console.log('html');
  }, true)

  addEvent(window, 'click', function (e) {
    console.log('window');
  }, true)

});
The addEventListener method has a third optional parameter useCapture with a default value of false the event will occur in the Bubbling phase if true the event will occur in the Capturing Phase. If we click on the child element it logs window,document,html, grandparent and parent and child respectively on the console. This is Event Capturing.

9. What's the difference between event.preventDefault() and event.stopPropagation() methods?
↑ The event.preventDefault() method prevents the default behavior of an element. If used in a form element it prevents it from submitting. If used in an anchor element it prevents it from navigating. If used in a contextmenu it prevents it from showing or displaying. While the event.stopPropagation() method stops the propogation of an event or it stops the event from occurring in the bubbling or capturing phase.

10. How to know if the event.preventDefault() method was used in an element?
↑ We can use the event.defaultPrevented property in the event object. It returns a boolean indicating if the event.preventDefault() was called in a particular element.

11. Why does this code obj.someprop.x throw an error?
const obj = {};
console.log(obj.someprop.x);
↑Obviously, this throws an error due to the reason we are trying to access a
x property in the someprop property which have an undefined value. Remember properties in an object which does not exist in itself and its prototype has a default value of undefined and undefined has no property x.

12. What is event.target ?
↑ In simplest terms, the event.target is the element on which the event occurred or the element that triggered the event.

Sample HTML Markup.

<div onclick="clickFunc(event)" style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;">
    <div style="margin: 25px; border:1px solid royalblue;border-radius:3px;">
        <div style="margin:25px;border:1px solid skyblue;border-radius:3px;">
          <button style="margin:10px">
             Button
          </button>
        </div>
    </div>
  </div>
Sample JavaScript.

 function clickFunc(event) {
  console.log(event.target);
}
If you click the button it will log the button markup even though we attach the event on the outermost div it will always log the button so we can conclude that the event.target is the element that triggered the event.

13. What is event.currentTarget?
↑ The event.currentTarget is the element on which we attach the event handler explicitly.

Copying the markup in Question 12.
Sample HTML Markup.

<div onclick="clickFunc(event)" style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;">
    <div style="margin: 25px; border:1px solid royalblue;border-radius:3px;">
        <div style="margin:25px;border:1px solid skyblue;border-radius:3px;">
          <button style="margin:10px">
             Button
          </button>
        </div>
    </div>
  </div>
And changing our the JS a little bit.

function clickFunc(event) {
  console.log(event.currentTarget);
}
If you click the button it will log the outermost div markup even though we click the button. In this example, we can conclude that the event.currentTarget is the element on which we attach the event handler.

14. What's the difference between == and === ?
↑ The difference between ==(abstract equality) and ===(strict equality) is that the == compares by value after coercion and === compares by value and type without coercion.

Let's dig deeper on the ==. So first let's talk about coercion.

coercion is the process of converting a value to another type. As in this case, the == does implicit coercion. The == has some conditions to perform before comparing the two values.

Suppose we have to compare x == y values.

If x and y have same type. Then compare them with the === operator.
If x is null and y is undefined then return true.
If x is undefined and y is null then return true.
If x is type number and y is type string Then return x == toNumber(y).
If x is type string and y is type number Then return toNumber(x) == y.
If x is type boolean Then return toNumber(x) == y.
If y is type boolean Then return x == toNumber(y).
If x is either string,symbol or number and y is type object Then return x == toPrimitive(y).
If x is either object and x is either string,symbol Then return toPrimitive(x) == y.
Return false.
Note: toPrimitive uses first the valueOf method then the toString method in objects to get the primitive value of that object.

Let's have examples.

x	y	x == y
5	5	true
1	'1'	true
null	undefined	true
0	false	true
'1,2'	[1,2]	true
'[object Object]'	{}	true
These examples all return true.

The first example goes to condition one because x and y have the same type and value.

The second example goes to condition four y is converted to a number before comparing.

The third example goes to condition two.

The fourth example goes to condition seven because y is boolean.

The fifth example goes to condition eight. The array is converted to a string using the toString() method which returns 1,2.

The last example goes to condition ten. The object is converted to a string using the toString() method which returns [object Object].

x	y	x === y
5	5	true
1	'1'	false
null	undefined	false
0	false	false
'1,2'	[1,2]	false
'[object Object]'	{}	false
If we use the === operator all the comparisons except for the first example will return false because they don't have the same type while the first example will return true because the two have the same type and value.

15. Why does it return false when comparing two similar objects in JavaScript?
↑ Suppose we have an example below.

let a = { a: 1 };
let b = { a: 1 };
let c = a;

console.log(a === b); // logs false even though they have the same property
console.log(a === c); // logs true hmm
JavaScript compares objects and primitives differently. In primitives it compares them by value while in objects it compares them by reference or the address in memory where the variable is stored. That's why the first console.log statement returns false and the second console.log statement returns true. a and c have the same reference and a and b are not.

16. What does the !! operator do?
↑ The Double NOT operator or !! coerces the value on the right side into a boolean. basically it's a fancy way of converting a value into a boolean.

console.log(!!null); //logs false
console.log(!!undefined); //logs false
console.log(!!''); //logs false
console.log(!!0); //logs false
console.log(!!NaN); //logs false
console.log(!!' '); //logs true
console.log(!!{}); //logs true
console.log(!![]); //logs true
console.log(!!1); //logs true
console.log(!![].length); //logs false
17. How to evaluate multiple expressions in one line?
↑We can use the , or comma operator to evaluate multiple expressions in one line. It evaluates from left-to-right and returns the value of the last item on the right or the last operand.

let x = 5;

x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);

function addFive(num) {
  return num + 5;
}
If you log the value of x it would be 27. First, we increment the value of x it would be 6, then we invoke the function addFive(6) and pass the 6 as a parameter and assign the result to x the new value of x would be 11. After that, we multiply the current value of x to 2 and assign it to x the updated value of x would be 22. Then, we subtract the current value of x to 5 and assign the result to x the updated value would be 17. And lastly, we increment the value of x by 10 and assign the updated value to x now the value of x would be 27.

18. What is Hoisting?
↑ Hoisting is the term used to describe the moving of variables and functions to the top of their (global or function) scope on where we define that variable or function.

Ok to understand Hoisting, I have to explain the execution context.
The Execution Context is the "environment of code" that is currently executing. The Execution Context has two phases compilation and execution.

Compilation - in this phase it gets all the function declarations and hoists them up to the top of their scope so we can reference them later and gets all variables declaration (declare with the var keyword) and also hoists them up and give them a default value of undefined.

Execution - in this phase it assigns values to the variables hoisted earlier and it executes or invokes functions (methods in objects).

Note: only function declarations and variables declared with the var keyword are hoisted not function expressions or arrow functions, let and const keywords.

Ok, suppose we have an example code in the global scope below.

console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));

function greet(name){
  return 'Hello ' + name + '!';
}

var y;
This code logs undefined,1, Hello Mark! respectively.

So the compilation phase would look like this.

function greet(name) {
  return 'Hello ' + name + '!';
}

var y; //implicit "undefined" assignment

//waiting for "compilation" phase to finish

//then start "execution" phase
/*
console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));
*/

for example purposes, I commented on the assignment of variable and function call.

After the compilation phase finishes it starts the execution phase invoking methods and assigns values to variables.

function greet(name) {
  return 'Hello ' + name + '!';
}

var y;

//start "execution" phase

console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));
19. What is Scope?
↑ Scope in JavaScript is the area where we have valid access to variables or functions. JavaScript has three types of Scopes. Global Scope, Function Scope, and Block Scope(ES6).

Global Scope - variables or functions declared in the global namespace are in the global scope and therefore is accessible everywhere in our code.
   //global namespace
   var g = "global";

   function globalFunc(){
     function innerFunc(){
          console.log(g); // can access "g" because "g" is a global variable
     }
     innerFunc();
   }  
Function Scope - variables,functions and parameters declared within a function are accessible inside that function but not outside of it.
    function myFavoriteFunc(a) {
       if (true) {
          var b = "Hello " + a;
       }
       return b;
   }
   myFavoriteFunc("World");

   console.log(a); // Throws a ReferenceError "a" is not defined
   console.log(b); // does not continue here 
Block Scope - variables (let,const) declared within a block {} can only be access within it.
 function testBlock(){
   if(true){
     let z = 5;
   }
   return z; 
 }

 testBlock(); // Throws a ReferenceError "z" is not defined
Scope is also a set of rules for finding variables. If a variable does not exist in the current scope it look ups and searches for a variable in the outer scope and if does not exist again it looks up again until it reaches the global scope if the variable exists then we can use it if not it throws an error. It searches for the nearest variable and it stops searching or looking up once it finds it. This is called Scope Chain.

   /* Scope Chain
   Inside inner function perspective

   inner's scope -> outer's scope -> global's scope
  */


  //Global Scope
  var variable1 = "Comrades";   
  var variable2 = "Sayonara";

  function outer(){
  //outer's scope
    var variable1 = "World";
    function inner(){
    //inner's scope
      var variable2 = "Hello";
      console.log(variable2 + " " + variable1);
    }
    inner();
  }  
  outer(); 
// logs Hello World 
// because (variable2 = "Hello") and (variable1 = "World") are the nearest 
// variables inside inner's scope.
Scope

20. What are Closures?
↑ This is probably the hardest question of all these questions because Closures is a controversial topic. So I'm gonna explain it from what I understand.

Closures is simply the ability of a function at the time of declaration to remember the references of variables and parameters on its current scope, on its parent function scope, on its parent's parent function scope until it reaches the global scope with the help of Scope Chain. Basically it is the Scope created when the function was declared.

Examples are a great way to explain closures.

   //Global's Scope
   var globalVar = "abc";

   function a(){
   //testClosures's Scope
     console.log(globalVar);
   }

   a(); //logs "abc" 
   /* Scope Chain
      Inside a function perspective

      a's scope -> global's scope  
   */ 
In this example, when we declare the a function the Global Scope is part of a's closure.

a's closure

The reason for the variable globalVar which does not have a value in the image because of the reason that the value of that variable can change based on where and when we invoke the a function.
But in our example above the globalVar variable will have the value of abc.

Ok, let's have a complex example.

var globalVar = "global";
var outerVar = "outer"

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam);
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess"
x("inner");
Complex
This will print "guess outer inner". The explanation for this is that when we invoke the outerFunc function and assigned the returned value the innerFunc function to the variable x, the outerParam will have a value of outer even though we assign a new value outer-2 to the outerVar variable because
the reassignment happened after the invocation of the outer function and in that time when we invoke the outerFunc function it's look up the value of outerVar in the Scope Chain, the outerVar will have a value of "outer". Now, when we invoke the x variable which have a reference to the innerFunc, the
innerParam will have a value of inner because thats the value we pass in the invocation and the globalVar variable will have a value of guess because before the invocation of the x variable we assign a new value to the globalVar and at the time of invocation x the value of globalVar in the Scope Chain is guess.

We have an example that demonstrates a problem of not understanding closure correctly.

const arrFuncs = [];
for(var i = 0; i < 5; i++){
  arrFuncs.push(function (){
    return i;
  });
}
console.log(i); // i is 5

for (let i = 0; i < arrFuncs.length; i++) {
  console.log(arrFuncs[i]()); // all logs "5"
}
This code is not working as we expected because of Closures.
The var keyword makes a global variable and when we push a function
we return the global variable i. So when we call one of those functions in that array after the loop it logs 5 because we get
the current value of i which is 5 and we can access it because it's a global variable. Because Closures keeps the references of that variable not its values at the time of it's creation. We can solve this using IIFES or changing the var keyword to let for block-scoping.

21. What are the falsy values in JavaScript?
↑

 const falsyValues = ['', 0, null, undefined, NaN, false];
falsy values are values that when converted to boolean becomes false.

22. How to check if a value is falsy?
↑ Use the Boolean function or the Double NOT operator !!

23. What does "use strict" do?
↑ "use strict" is a ES5 feature in JavaScript that makes our code in Strict Mode in functions or entire scripts. Strict Mode helps us avoid bugs early on in our code and adds restrictions to it.

Restrictions that Strict Mode gives us.

Assigning or Accessing a variable that is not declared.
 function returnY(){
    "use strict";
    y = 123;
    return y;
 }
Assigning a value to a read-only or non-writable global variable;
   "use strict";
   var NaN = NaN;
   var undefined = undefined;
   var Infinity = "and beyond";
Deleting an undeletable property.
   "use strict";
   const obj = {};

   Object.defineProperty(obj, 'x', {
      value : '1'
   });  

   delete obj.x;
Duplicate parameter names.
   "use strict";

   function someFunc(a, b, b, c){

   }
Creating variables with the use of the eval function.
 "use strict";

 eval("var x = 1;");

 console.log(x); //Throws a Reference Error x is not defined

The default value of this will be undefined.
  "use strict";

  function showMeThis(){
    return this;
  }

  showMeThis(); //returns undefined
There are many more restrictions in Strict Mode than these.

24. What's the value of this in JavaScript?
↑ Basically, this refers to the value of the object that is currently executing or invoking the function. I say currently due to the reason that the value of this changes depending on the context on which we use it and where we use it.

   const carDetails = {
     name: "Ford Mustang",
     yearBought: 2005,
     getName(){
        return this.name;
     },
     isRegistered: true
   };

   console.log(carDetails.getName()); // logs Ford Mustang
This is what we would normally expect because in the getName method we return this.name, this in this context refers to the object which is the carDetails object that is currently the "owner" object of the function executing.

Ok, Let's some add some code to make it weird. Below the console.log statement add this three lines of code

   var name = "Ford Ranger";
   var getCarName = carDetails.getName;

   console.log(getCarName()); // logs Ford Ranger
The second console.log statement prints the word Ford Ranger which is weird because in our first console.log statement it printed Ford Mustang. The reason to this is that the getCarName method has a different "owner" object that is the window object. Declaring variables with the var keyword in the global scope attaches properties in the window object with the same name as the variables. Remember this in the global scope refers to the window object when "use strict" is not used.

  console.log(getCarName === window.getCarName); //logs true
  console.log(getCarName === this.getCarName); // logs true
this and window in this example refer to the same object.

One way of solving this problem is by using the apply and call methods in functions.

   console.log(getCarName.apply(carDetails)); //logs Ford Mustang
   console.log(getCarName.call(carDetails));  //logs Ford Mustang
The apply and call methods expects the first parameter to be an object which would be value of this inside that function.

IIFE or Immediately Invoked Function Expression, Functions that are declared in the global scope, Anonymous Functions and Inner functions in methods inside an object has a default of this which points to the window object.

   (function (){
     console.log(this);
   })(); //logs the "window" object

   function iHateThis(){
      console.log(this);
   }

   iHateThis(); //logs the "window" object  

   const myFavoriteObj = {
     guessThis(){
        function getThis(){
          console.log(this);
        }
        getThis();
     },
     name: 'Marko Polo',
     thisIsAnnoying(callback){
       callback();
     }
   };


   myFavoriteObj.guessThis(); //logs the "window" object
   myFavoriteObj.thisIsAnnoying(function (){
     console.log(this); //logs the "window" object
   });
If we want to get the value of the name property which is Marko Polo in the myFavoriteObj object there are two ways to solve this.

First, we save the value of this in a variable.

   const myFavoriteObj = {
     guessThis(){
         const self = this; //saves the this value to the "self" variable
         function getName(){
           console.log(self.name);
         }
         getName();
     },
     name: 'Marko Polo',
     thisIsAnnoying(callback){
       callback();
     }
   };
In this image we save the value of this which would be the myFavoriteObj object. So we can access it inside the getName inner function.

Second, we use ES6 Arrow Functions.

   const myFavoriteObj = {
     guessThis(){
         const getName = () => { 
           //copies the value of "this" outside of this arrow function
           console.log(this.name);
         }
         getName();
     },
     name: 'Marko Polo',
     thisIsAnnoying(callback){
       callback();
     }
   };
Arrow Functions does not have its own this. It copies the value of this of the enclosing lexical scope or in this example the value of this outside the getName inner function which would be the myFavoriteObj object. We can also determine the value of this on how the function is invoked.

25. What is the prototype of an object?
↑ A prototype in simplest terms is a blueprint of an object. It is used as a fallback for properties and methods if it does exist in the current object. It's the way to share properties and functionality between objects. It's the core concept around JavaScript's Prototypal Inheritance.

  const o = {};
  console.log(o.toString()); // logs [object Object] 
Even though the o.toString method does not exist in the o object it does not throw an error instead returns a string [object Object]. When a property does not exist in the object it looks into its prototype and if it still does not exist it looks into the prototype's prototype and so on until it finds a property with the same in the Prototype Chain. The end of the Prototype Chain is null after the Object.prototype.

   console.log(o.toString === Object.prototype.toString); // logs true
   // which means we we're looking up the Prototype Chain and it reached 
   // the Object.prototype and used the "toString" method.
26. What is an IIFE, what is the use of it?
↑ An IIFE or Immediately Invoked Function Expression is a function that is gonna get invoked or executed after its creation or declaration. The syntax for creating IIFE is that we wrap the function (){} inside a parentheses () or the Grouping Operator to treat the function as an expression and after that we invoke it with another parentheses (). So an IIFE looks like this (function(){})().

(function () {

}());

(function () {

})();

(function named(params) {

})();

(() => {

})();

(function (global) {

})(window);

const utility = (function () {
   return {
      //utilities
   };
})();
These examples are all valid IIFE. The second to the last example shows we can pass arguments to an IIFE function. The last example shows that we can save the result of the IIFE to a variable so we can reference it later.

The best use of IIFE is making initialization setup functionalities and to avoid naming collisions with other variables in the global scope or polluting the global namespace. Let's have an example.

<script src="https://cdnurl.com/somelibrary.js"></script>
Suppose we have a link to a library somelibrary.js that exposes some global functions that we use can in our code but this library has two methods that we don't use createGraph and drawGraph because these methods have bugs in them. And we want to implement our own createGraph and drawGraph methods.

One way of solving this is by changing the structure of our scripts.
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
   function createGraph() {
      // createGraph logic here
   }
   function drawGraph() {
      // drawGraph logic here
   }
</script>
When we use this solution we are overriding those two methods that the library gives us.

Another way of solving this is by changing the name of our own helper functions.
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
   function myCreateGraph() {
      // createGraph logic here
   }
   function myDrawGraph() {
      // drawGraph logic here
   }
</script>
When we use this solution we will also change those function calls to the new function names.

Another way is using an IIFE.
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
   const graphUtility = (function () {
      function createGraph() {
         // createGraph logic here
      }
      function drawGraph() {
         // drawGraph logic here
      }
      return {
         createGraph,
         drawGraph
      }
   })();
</script>
In this solution, we are making a utility variable that is the result of IIFE which returns an object that contains two methods createGraph and drawGraph.

Another problem that IIFE solves is in this example.

var li = document.querySelectorAll('.list-group > li');
for (var i = 0, len = li.length; i < len; i++) {
   li[i].addEventListener('click', function (e) {
      console.log(i);
   })
}
Suppose we have a ul element with a class of list-group and it has 5 li child elements. And we want to console.log the value of i when we click an individual li element.
But the behavior we want in this code does not work. Instead, it logs 5 in any click on an li element. The problem we're having is due to how Closures work. Closures are simply the ability of functions to remember the references of variables on its current scope, on its parent function scope and in the global scope. When we declare variables using the var keyword in the global scope, obviously we are making a global variable i. So when we click an li element it logs 5 because that is the value of i when we reference it later in the callback function.

One solution to this is an IIFE.
var li = document.querySelectorAll('.list-group > li');
for (var i = 0, len = li.length; i < len; i++) {
   (function (currentIndex) {
      li[currentIndex].addEventListener('click', function (e) {
         console.log(currentIndex);
      })
   })(i);
}
This solution works because of the reason that the IIFE creates a new scope for every iteration and we capture the value of i and pass it into the currentIndex parameter so the value of currentIndex is different for every iteration when we invoke the IIFE.

27. What is the use Function.prototype.apply method?
↑ The apply invokes a function specifying the this or the "owner" object of that function on that time of invocation.

const details = {
  message: 'Hello World!'
};

function getMessage(){
  return this.message;
}

getMessage.apply(details); // returns 'Hello World!'
This method works like Function.prototype.call the only difference is how we pass arguments. In apply we pass arguments as an array.

const person = {
  name: "Marko Polo"
};

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`;
}

greeting.apply(person, ['Hello']); // returns "Hello Marko Polo!"
28. What is the use Function.prototype.call method?
↑ The call invokes a function specifying the this or the "owner" object of that function on that time of invocation.

const details = {
  message: 'Hello World!'
};

function getMessage(){
  return this.message;
}

getMessage.call(details); // returns 'Hello World!'
This method works like Function.prototype.apply the only difference is how we pass arguments. In call we pass directly the arguments separating them with a comma , for every argument.

const person = {
  name: "Marko Polo"
};

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`;
}

greeting.call(person, 'Hello'); // returns "Hello Marko Polo!"
29. What's the difference between Function.prototype.apply and Function.prototype.call?
↑ The only difference between apply and call is how we pass the arguments in the function being called. In apply we pass the arguments as an array and in call we pass the arguments directly in the argument list.

const obj1 = {
 result:0
};

const obj2 = {
 result:0
};

function reduceAdd(){
   let result = 0;
   for(let i = 0, len = arguments.length; i < len; i++){
     result += arguments[i];
   }
   this.result = result;
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); // returns 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15
30. What is the usage of Function.prototype.bind?
↑ The bind method returns a new function that is bound
to a specific this value or the "owner" object, So we can use it later in our code. The call,apply methods invokes the function immediately instead of returning a new function like the bind method.

import React from 'react';

class MyComponent extends React.Component {
     constructor(props){
          super(props); 
          this.state = {
             value : ""
          }  
          this.handleChange = this.handleChange.bind(this); 
          // Binds the "handleChange" method to the "MyComponent" component
     }

     handleChange(e){
       //do something amazing here
     }

     render(){
        return (
              <>
                <input type={this.props.type}
                        value={this.state.value}
                     onChange={this.handleChange}                      
                  />
              </>
        )
     }
}
31. What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?
↑ Functional Programming is a declarative programming paradigm or pattern on how we build our applications with functions using expressions that calculates a value without mutating or changing the arguments that are passed to it.

JavaScript Array has map, filter, reduce methods which are the most famous functions in the functional programming world because of their usefulness and because they don't mutate or change the array which makes these functions pure and JavaScript supports Closures and Higher Order Functions which are a characteristic of a Functional Programming Language.

The map method creates a new array with the results of calling a provided callback function on every element in the array.
const words = ["Functional", "Procedural", "Object-Oriented"];

const wordsLength = words.map(word => word.length);
The filter method creates a new array with all elements that pass the test in the callback function.
const data = [
  { name: 'Mark', isRegistered: true },
  { name: 'Mary', isRegistered: false },
  { name: 'Mae', isRegistered: true }
];

const registeredUsers = data.filter(user => user.isRegistered);
The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const strs = ["I", " ", "am", " ", "Iron", " ", "Man"];
const result = strs.reduce((acc, currentStr) => acc + currentStr, "");
32. What are Higher Order Functions?
↑ Higher-Order Function are functions that can return a function or receive argument or arguments which have a value of a function.

function higherOrderFunction(param,callback){
    return callback(param);
}
33. Why are functions called First-class Objects?
↑Functions in JavaScript are First-class Objects because they are treated as any other value in the language. They can be assigned to variables, they can be properties of an object which are called methods, they can be an item in array, they can be passed as arguments to a function, and they can be returned as values of a function. The only difference between a function and any other value in JavaScript is that functions can be invoked or called.

34. Implement the Array.prototype.map method by hand.
↑

function map(arr, mapCallback) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') { 
    return [];
  } else {
    let result = [];
    // We're making a results array every time we call this function
    // because we don't want to mutate the original array.
    for (let i = 0, len = arr.length; i < len; i++) {
      result.push(mapCallback(arr[i], i, arr)); 
      // push the result of the mapCallback in the 'result' array
    }
    return result; // return the result array
  }
}
As the MDN description of the Array.prototype.map method.

The map() method creates a new array with the results of calling a provided function on every element in the calling array.

35. Implement the Array.prototype.filter method by hand.
↑

function filter(arr, filterCallback) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') 
  {
    return [];
  } else {
    let result = [];
    // We're making a results array every time we call this function
    // because we don't want to mutate the original array.
    for (let i = 0, len = arr.length; i < len; i++) {
      // check if the return value of the filterCallback is true or "truthy"
      if (filterCallback(arr[i], i, arr)) { 
      // push the current item in the 'result' array if the condition is true
        result.push(arr[i]);
      }
    }
    return result; // return the result array
  }
}
As the MDN description of the Array.prototype.filter method.

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

36. Implement the Array.prototype.reduce method by hand.
↑

function reduce(arr, reduceCallback, initialValue) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') 
  {
    return [];
  } else {
    // If no initialValue has been passed to the function we're gonna use the 
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
    // first array item as the initialValue

    // Then we're gonna start looping at index 1 if there is no 
    // initialValue has been passed to the function else we start at 0 if 
    // there is an initialValue.
    for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
      // Then for every iteration we assign the result of the 
      // reduceCallback to the variable value.
      value = reduceCallback(value, arr[i], i, arr); 
    }
    return value;
  }
}
As the MDN description of the Array.prototype.reduce method.

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

37. What is the arguments object?
↑ The arguments object is a collection of parameter values pass in a function. It's an Array-like object because it has a length property and we can access individual values using array indexing notation arguments[1] but it does not have the built-in methods in an array forEach,reduce,filter and map.
It helps us know the number of arguments pass in a function.

We can convert the arguments object into an array using the Array.prototype.slice.

function one() {
  return Array.prototype.slice.call(arguments);
}
Note: the arguments object does not work on ES6 arrow functions.

function one() {
  return arguments;
}
const two = function () {
  return arguments;
}
const three = function three() {
  return arguments;
}

const four = () => arguments;

four(); // Throws an error  - arguments is not defined
When we invoke the function four it throws a ReferenceError: arguments is not defined error. We can solve this problem if your enviroment supports the rest syntax.

const four = (...args) => args;
This puts all parameter values in an array automatically.

38. How to create an object without a prototype?
↑ We can create an object without a prototype using the Object.create method.

   const o1 = {};
   console.log(o1.toString()); 
   // logs [object Object] get this method to the Object.prototype 

   const o2 = Object.create(null);
   // the first parameter is the prototype of the object "o2" which in this
   // case will be null specifying we don't want any prototype
   console.log(o2.toString());
   // throws an error o2.toString is not a function 
39. Why does b in this code become a global variable when you call this function?
↑

function myFunc() {
  let a = b = 0;
}

myFunc();
The reason for this is that assignment operator or = has right-to-left associativity or evaluation. What this means is that when multiple assignment operators appear in a single expression they evaluated from right to left. So our code becomes likes this.

function myFunc() {
  let a = (b = 0);
}

myFunc();
First, the expression b = 0 evaluated and in this example b is not declared. So, The JS Engine makes a global variable b outside this function after that the return value of the expression b = 0 would be 0 and it's assigned to the new local variable a with a let keyword.

We can solve this problem by declaring the variables first before assigning them with value.

function myFunc() {
  let a,b;
  a = b = 0;
}
myFunc();
40. What is ECMAScript?
↑ ECMAScript is a standard for making scripting languages which means that JavaScript follows the specification changes in ECMAScript standard because it is the blueprint of JavaScript.

41. What are the new features in ES6 or ECMAScript 2015?
↑

Arrow Functions

Classes

Template Strings

Enhanced Object literals

Object Destructuring

Promises

Generators

Modules

Symbol

Proxies

Sets

Default Function parameters

Rest and Spread

Block Scoping with let and const

42. What's the difference between var, let and const keywords?
↑ Variables declared with var keyword are function scoped.
What this means that variables can be accessed across that function even if we declare that variable inside a block.

function giveMeX(showX) {
  if (showX) {
    var x = 5;
  }
  return x;
}

console.log(giveMeX(false));
console.log(giveMeX(true));
The first console.log statement logs undefined
and the second 5. We can access the x variable due
to the reason that it gets hoisted at the top of the function scope. So our function code is intepreted like this.

function giveMeX(showX) {
  var x; // has a default value of undefined
  if (showX) {
    x = 5;
  }
  return x;
}
If you are wondering why it logs undefined in the first console.log statement remember variables declared without an initial value has a default value of undefined.

Variables declared with let and const keyword are block scoped. What this means that variable can only be accessed on that block {} on where we declare it.

function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}


function giveMeY(showY) {
  if (showY) {
    let y = 5;
  }
  return y;
}
If we call this functions with an argument of false it throws a Reference Error because we can't access the x and y variables outside that block and those variables are not hoisted.

There is also a difference between let and const we can assign new values using let but we can't in const but const are mutable meaning. What this means is if the value that we assign to a const is an object we can change the values of those properties but can't reassign a new value to that variable.

43. What are Arrow functions?
↑ Arrow Functions are a new way of making functions in JavaScript. Arrow Functions takes a little time in making functions and has a cleaner syntax than a function expression because we omit the function keyword in making them.

//ES5 Version
var getCurrentDate = function (){
  return new Date();
}

//ES6 Version
const getCurrentDate = () => new Date();
In this example, in the ES5 Version have function(){} declaration and return keyword needed to make a function and return a value respectively. In the Arrow Function version we only need the () parentheses and we don't need a return statement because Arrow Functions have a implicit return if we have only one expression or value to return.

//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!';
}

//ES6 Version
const greet = (name) => `Hello ${name}`;
const greet2 = name => `Hello ${name}`;

We can also parameters in Arrow functions the same as the function expressions and function declarations. If we have one parameter in an Arrow Function we can omit the parentheses it is also valid.

const getArgs = () => arguments

const getArgs2 = (...rest) => rest
Arrow functions don't have access to the arguments object. So calling the first getArgs func will throw an Error. Instead we can use the rest parameters to get all the arguments passed in an arrow function.

const data = {
  result: 0,
  nums: [1, 2, 3, 4, 5],
  computeResult() {
    // "this" here refers to the "data" object
    const addAll = () => {
      // arrow functions "copies" the "this" value of 
      // the lexical enclosing function
      return this.nums.reduce((total, cur) => total + cur, 0)
    };
    this.result = addAll();
  }
};
Arrow functions don't have their own this value. It captures or gets the this value of lexically enclosing function or in this example, the addAll function copies the this value of the computeResult method and if we declare an arrow function in the global scope the value of this would be the window object.

44. What are Classes?
↑ Classes is the new way of writing constructor functions in JavaScript. It is syntactic sugar for using constructor functions, it still uses prototypes and Prototype-Based Inheritance under the hood.

   //ES5 Version
   function Person(firstName, lastName, age, address){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
   }

   Person.self = function(){
     return this;
   }

   Person.prototype.toString = function(){
     return "[object Person]";
   }

   Person.prototype.getFullName = function (){
     return this.firstName + " " + this.lastName;
   }  

   //ES6 Version
   class Person {
        constructor(firstName, lastName, age, address){
            this.lastName = lastName;
            this.firstName = firstName;
            this.age = age;
            this.address = address;
        }

        static self() {
           return this;
        }

        toString(){
           return "[object Person]";
        }

        getFullName(){
           return `${this.firstName} ${this.lastName}`;
        }
   }
Overriding Methods and Inheriting from another class.

//ES5 Version
Employee.prototype = Object.create(Person.prototype);

function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {
  Person.call(this, firstName, lastName, age, address);
  this.jobTitle = jobTitle;
  this.yearStarted = yearStarted;
}

Employee.prototype.describe = function () {
  return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
}

Employee.prototype.toString = function () {
  return "[object Employee]";
}

//ES6 Version
class Employee extends Person { //Inherits from "Person" class
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address);
    this.jobTitle = jobTitle;
    this.yearStarted = yearStarted;
  }

  describe() {
    return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
  }

  toString() { // Overriding the "toString" method of "Person"
    return "[object Employee]";
  }
}

So how do we know that it uses prototypes under the hood?

   class Something {

   }

   function AnotherSomething(){

   }
   const as = new AnotherSomething();
   const s = new Something();

   console.log(typeof Something); // logs "function"
   console.log(typeof AnotherSomething); // logs "function"
   console.log(as.toString()); // logs "[object Object]"
   console.log(as.toString()); // logs "[object Object]"
   console.log(as.toString === Object.prototype.toString); 
   console.log(s.toString === Object.prototype.toString); 
   // both logs return true indicating that we are still using 
   // prototypes under the hoods because the Object.prototype is
   // the last part of the Prototype Chain and "Something"
   // and "AnotherSomething" both inherit from Object.prototype
45. What are Template Literals?
↑ Template Literals are a new way of making strings in JavaScript. We can make Template Literal by using the backtick or back-quote symbol.

//ES5 Version
var greet = 'Hi I\'m Mark';

//ES6 Version
let greet = `Hi I'm Mark`;
In the ES5 version, we need to escape the ' using the \ to escape the normal functionality of that symbol which in this case is to finish that string value. In Template Literals, we don't need to do that.

//ES5 Version
var lastWords = '\n'
  + '   I  \n'
  + '   Am  \n'
  + 'Iron Man \n';


//ES6 Version
let lastWords = `
    I
    Am
  Iron Man   
`;
In the ES5 version, we need to add this \n to have a new line in our string. In Template Literals, we don't need to do that.

//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!';
}


//ES6 Version
const greet = name => {
  return `Hello ${name} !`;
}
In the ES5 version, If we need to add an expression or value in a string we need to use the + or string concatenation operator. In Template Literals, we can embed an expression using ${expr} which makes it cleaner than the ES5 version.

46. What is Object Destructuring?
↑ Object Destructuring is a new and cleaner way of getting or extracting values from an object or an array.

Suppose we have an object that looks like this.

const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017
};

The old way of getting properties from an object is we make a variable that has the same name as the object property. This way is a hassle because we're making a new variable for every property. Imagine we have a big object with lots of properties and methods using this way in extracting properties will be irritating.

var firstName = employee.firstName;
var lastName = employee.lastName;
var position = employee.position;
var yearHired = employee.yearHired;
If we use object destructuring it looks cleaner and takes a little time than the old way. The syntax for object destructuring is that if we are getting properties in an object we use the {} and inside that, we specify the properties we want to extract and if we are getting data from an array we use the [].

let { firstName, lastName, position, yearHired } = employee;
If we want to change the variable name we want to extract we use the propertyName:newName syntax. In this example the value of fName variable will hold the value of the firstName property and lName variable will hold the value of the lastName property.

let { firstName: fName, lastName: lName, position, yearHired } = employee;
We can also have default values when destructuring. In this example, if the firstName property holds an undefined value in the object then when we destructure the firstName variable will hold a default of "Mark".

let { firstName = "Mark", lastName: lName, position, yearHired } = employee;
47. What are ES6 Modules?
↑ Modules lets us split our code base to multiple files for more maintainability and this lets us avoid putting all of our code in one big file (yucksss). Before ES6 has supported Modules there were two popular module systems that were used for Code Maintainability in JavaScript.

CommonJS - Nodejs
AMD (Asynchronous Module Definition) - Browsers
Basically, the sytanx for using modules are straightforward,
import is used for getting functionality from another file or several functionalities or values while
export is used for exposing functionality from a file or several functionalities or values.

Exporting functionalites in a File or Named Exports

Using ES5 (CommonJS)

// Using ES5 CommonJS - helpers.js
exports.isNull = function (val) {
  return val === null;
}

exports.isUndefined = function (val) {
  return val === undefined;
}

exports.isNullOrUndefined = function (val) {
  return exports.isNull(val) || exports.isUndefined(val);
}
Using ES6 Modules

// Using ES6 Modules - helpers.js
export function isNull(val){
  return val === null;
}

export function isUndefined(val) {
  return val === undefined;
}

export function isNullOrUndefined(val) {
  return isNull(val) || isUndefined(val);
}


Importing functionalites in another File

// Using ES5 (CommonJS) - index.js
const helpers = require('./helpers.js'); // helpers is an object
const isNull = helpers.isNull;
const isUndefined = helpers.isUndefined;
const isNullOrUndefined = helpers.isNullOrUndefined;

// or if your environment supports Destructuring
const { isNull, isUndefined, isNullOrUndefined } = require('./helpers.js');
// ES6 Modules - index.js
import * as helpers from './helpers.js'; // helpers is an object

// or 

import { isNull, isUndefined, isNullOrUndefined as isValid } from './helpers.js';

// using "as" for renaming named exports
Exporting a Single Functionality in a File or Default Exports

Using ES5 (CommonJS)

// Using ES5 (CommonJS) - index.js
class Helpers {
  static isNull(val) {
    return val === null;
  }

  static isUndefined(val) {
    return val === undefined;
  }

  static isNullOrUndefined(val) {
    return this.isNull(val) || this.isUndefined(val);
  }
}


module.exports = Helpers;
Using ES6 Modules

// Using ES6 Modules - helpers.js
class Helpers {
  static isNull(val) {
    return val === null;
  }

  static isUndefined(val) {
    return val === undefined;
  }

  static isNullOrUndefined(val) {
    return this.isNull(val) || this.isUndefined(val);
  }
}

export default Helpers
Importing a Single Functionality from another File

Using ES5 (CommonJS)

// Using ES5 (CommonJS) - index.js
const Helpers = require('./helpers.js'); 
console.log(Helpers.isNull(null));
Using ES6 Modules

import Helpers from '.helpers.js'
console.log(Helpers.isNull(null));
This is the basics of using ES6 Modules. I won't explain all about Modules because it's a broad topic and my Post is now really long.

48. What is the Set object and how does it work?
↑ The Set object is an ES6 feature that lets you store unique values, primitives or object references. A value in a Set can only occur once. It checks if a value exists in the set object using the SameValueZero algorithm.

We can make Set instance using Set constructor and we can optionally pass an Iterable as the initial value.


const set1 = new Set();
const set2 = new Set(["a","b","c","d","d","e"]);

We can add a new value into the Set instance using the add method and since the add returns the Set object we can chain add calls. If a value already exists in Set object it will not be added again.


set2.add("f");
set2.add("g").add("h").add("i").add("j").add("k").add("k");
// the last "k" will not be added to the set object because it already exists

We can remove a value from the Set instance using the delete method, this method returns a boolean indicating true if a value exists in the Set object and false indicating that value does not exist.


set2.delete("k") // returns true because "k" exists in the set object
set2.delete("z") // returns false because "z" does not exists in the set object

We can check if a specific value exists in the Set instance using the has method.


set2.has("a") // returns true because "a" exists in the set object
set2.has("z") // returns false because "z" does not exists in the set object

We can get the length of the Set instance using the size property.


set2.size // returns 10

We can delete or remove all the elements in the Set instance using the clear.


set2.clear(); // clears the set data

We can use the Set object for removing duplicate elements in an array.


const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)]; // has a value of [1,2,3,4,5,6,7,8]

49. What is a Callback function?
↑ A Callback function is a function that is gonna get called at a later point in time.

const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function clickCallback(e) {
    // do something useless
});
In this example, we wait for the click event in the element with an id of btnAdd, if it is clicked, the clickCallback function is executed. A Callback function adds some functionality to some data or event. The reduce, filter and map methods in Array expects a callback as a parameter. A good analogy for a callback is when you call someone and if they don't answer you leave a message and you expect them to callback. The act of calling someone or leaving a message is the event or data and the callback is the action that you expect to occur later.

50. What are Promises?
↑ Promises are one way in handling asynchronous operations in JavaScript. It represents the value of an asynchronous operation. Promises was made to solve the problem of doing and dealing with async code before promises we're using callbacks.

fs.readFile('somefile.txt', function (e, data) {
  if (e) {
    console.log(e);
  }
  console.log(data);
});
The problem with this approach if we have another async operation inside the callback and another. We will have a code that is messy and unreadable. This code is called Callback Hell.

//Callback Hell yucksss
fs.readFile('somefile.txt', function (e, data) {
  //your code here
  fs.readdir('directory', function (e, files) {
    //your code here
    fs.mkdir('directory', function (e) {
      //your code here
    })
  })
})
If we use promises in this code it will be more readable and easy to understand and easy to maintain.

promReadFile('file/path')
  .then(data => {
    return promReaddir('directory');
  })
  .then(data => {
    return promMkdir('directory');
  })
  .catch(e => {
    console.log(e);
  })
Promises have 3 different states.

Pending - The initial state of a promise. The promise's outcome has not yet been known because the operation has not been completed yet.

Fulfilled - The async operation is completed and successful with the resulting value.

Rejected - The async operation has failed and has a reason on why it failed.

Settled - If the promise has been either Fulfilled or Rejected.

The Promise constructor has two parameters which are functions resolve and reject respectively.
If the async operation has been completed without errors call the resolve function to resolve the promise or if an error occurred
call the reject function and pass the error or reason to it.
We can access the result of the fulfilled promise using the .then
method and we catch errors in the .catch method. We chain multiple async promise operations in the .then method because the .then method returns a Promise just like the example in the imag e above.

const myPromiseAsync = (...args) => {
  return new Promise((resolve, reject) => {
    doSomeAsync(...args, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
}

myPromiseAsync()
  .then(result => {
    console.log(result);
  })
  .catch(reason => {
    console.log(reason);
  })
We can make a helper func that converts an async operation with a callback to promise. It works like the promisify utility function from the node core module util.

const toPromise = (asyncFuncWithCallback) => {
  return (...args) => {
    return new Promise((res, rej) => {
      asyncFuncWithCallback(...args, (e, result) => {
        return e ? rej(e) : res(result);
      });
    });
  }
}

const promReadFile = toPromise(fs.readFile);

promReadFile('file/path')
  .then((data) => {
    console.log(data);
  })
  .catch(e => console.log(e));
51. What is async/await and How does it work?
↑ async/await is the new way of writing asynchronous or non-blocking code in JavaScript's. It is built on top of Promises. It makes writing asynchronous code more readable and cleaner than
Promises and Callbacks. But you must learn the basics of Promises before using this feature because as I said earlier it is built on top of Promises which means is still uses Promises under the hood.

Using Promises.

function callApi() {
  return fetch("url/to/api/endpoint")
    .then(resp => resp.json())
    .then(data => {
      //do something with "data"
    }).catch(err => {
      //do something with "err"
    });
}

Using Async/Await.

Note: We're using the old try/catch statement to catch any errors that happened in any of those async operations inside the try statement.

async function callApi() {
  try {
    const resp = await fetch("url/to/api/endpoint");
    const data = await resp.json();
    //do something with "data"
  } catch (e) {
    //do something with "err"
  }
}
Note: The async keyword before the function declaration makes the function return implicitly a Promise.

const giveMeOne = async () => 1;

giveMeOne()
  .then((num) => {
    console.log(num); // logs 1
  });
Note: The await keyword can only be used inside an async function. Using await keyword in any other function which is not an async function will throw an error. The await keyword awaits the right-hand side expression (presumably a Promise) to return before executing the next line of code.

const giveMeOne = async () => 1;

function getOne() {
  try {
    const num = await giveMeOne();
    console.log(num);
  } catch (e) {
    console.log(e);
  }
}

//Throws a Compile-Time Error = Uncaught SyntaxError: await is only valid in an async function

async function getTwo() {
  try {
    const num1 = await giveMeOne(); //finishes this async operation first before going to
    const num2 = await giveMeOne(); //this line
    return num1 + num2;
  } catch (e) {
    console.log(e);
  }
}

await getTwo(); // returns 2
52. What's the difference between Spread operator and Rest operator?
↑ The Spread operator and Rest paremeters have the same operator ... the difference between is that the Spread operator we give or spread individual data of an array to another data while the Rest parameters is used in a function or an array to get all the arguments or values and put them in an array or extract some pieces of them.

function add(a, b) {
  return a + b;
};

const nums = [5, 6];
const sum = add(...nums);
console.log(sum);

In this example, we're using the Spread Operator when we call the add function we are spreading the nums array. So the value of parameter a will be 5 and the value of b will be 6. So the sum will be 11.

function add(...rest) {
  return rest.reduce((total,current) => total + current);
};

console.log(add(1, 2)); // logs 3
console.log(add(1, 2, 3, 4, 5)); // logs 15
In this example, we have a function add that accepts any number of arguments and adds them all and return the total.

const [first, ...others] = [1, 2, 3, 4, 5];
console.log(first); //logs 1
console.log(others); //logs [2,3,4,5]
In this another example, we are using the Rest operator to extract all the remaining array values and put them in array others except the first item.

53. What are Default Parameters?
↑ Default Parameters is a new way of defining default variables in JavaScript it is available in the ES6 or ECMAScript 2015 Version.

//ES5 Version
function add(a,b){
  a = a || 0;
  b = b || 0;
  return a + b;
}

//ES6 Version
function add(a = 0, b = 0){
  return a + b;
}
//If we don't pass any argument for 'a' or 'b' then 
// it's gonna use the "default parameter" value which is 0
add(1); // returns 1 
We can also use Destructuring in Default Paremeters.

function getFirst([first, ...rest] = [0, 1]) {
  return first;
}

getFirst();  // returns 0
getFirst([10,20,30]);  // returns 10

function getArr({ nums } = { nums: [1, 2, 3, 4] }){
    return nums;
}

getArr(); // returns [1, 2, 3, 4]
getArr({nums:[5,4,3,2,1]}); // returns [5,4,3,2,1]
We can also use the parameters defined first to the parameters defined after them.

function doSomethingWithValue(value = "Hello World", callback = () => { console.log(value) }) {
  callback();
}
doSomethingWithValue(); //logs "Hello World"
54. What are Wrapper Objects?
↑ Primitive Values like string,number and boolean with the exception of null and undefined have properties and methods even though they are not objects.

let name = "marko";

console.log(typeof name); // logs  "string"
console.log(name.toUpperCase()); // logs  "MARKO"
name is a primitive string value that has no properties and methods but in this example we are calling a toUpperCase() method which does not throw an error but returns MARKO.

The reason for this is that the primitive value is temporarily converted or coerce to an object so the name variable behaves like an object. Every primitive except null and undefined have Wrapper Objects. The Wrapper Objects are String,Number,Boolean,Symbol and BigInt. In this case, the name.toUpperCase() invocation, behind the scenes it looks like this.


console.log(new String(name).toUpperCase()); // logs  "MARKO"

The newly created object is immediately discarded after we finished accessing a property or calling a method.

55. What is the difference between Implicit and Explicit Coercion?
↑ Implicit Coercion is a way of converting values to another type without us programmer doing it directly or by hand.

Suppose we have an example below.

console.log(1 + '6');
console.log(false + true);
console.log(6 * '2');

The first console.log statement logs 16. In other languages this would throw a compile time error but in JavaScript the 1 is converted to a string then concatenated with the + operator. We did not do anything, yet it was converted automatically by JavaScript for us.
The second console.log statement logs 1, it converts the false to a boolean which will result to a 0 and the true will be 1 hence the result is 1.
The third console.log statement logs 12, it converts the '2' to a number before multiplying 6 * 2 hence the result 12.
JavaScript Coercion Rules

While Explicit Coercion is the way of converting values to another type where we (programmers) explicitly do it.

console.log(1 + parseInt('6'));
In this example, we use the parseInt function to convert the '6' to a number then adding the 1 and 6 using the + operator.

56. What is NaN? and How to check if a value is NaN?
↑ NaN means "Not A Number" is a value in JavaScript that is a result in converting or performing an operation to a number to non-number value hence results to NaN.

let a;

console.log(parseInt('abc'));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(++a));
console.log(parseInt({} * 10));
console.log(parseInt('abc' - 2));
console.log(parseInt(0 / 0));
console.log(parseInt('10a' * 10));

JavaScript has a built-in method isNaN that tests if value is isNaN value. But this function has a weird behaviour.

console.log(isNaN()); //logs true
console.log(isNaN(undefined)); //logs true
console.log(isNaN({})); //logs true
console.log(isNaN(String('a'))); //logs true
console.log(isNaN(() => { })); //logs true
All these console.log statements return true even though those values we pass are not NaN.

In ES6 or ECMAScript 2015, it is recommended that we use Number.isNaN method because it really checks the value if it really is NaN or we can make our own helper function that check for this problem because in JavaScript NaN is the only value that is not equal to itself.

function checkIfNaN(value) {
  return value !== value;
}
57. How to check if a value is an Array?
↑ We can check if a value is an Array by using the Array.isArray method available from the Array global object. It returns true when the parameter pass to it is an Array otherwise false.

console.log(Array.isArray(5));  //logs false
console.log(Array.isArray("")); //logs false
console.log(Array.isArray()); //logs false
console.log(Array.isArray(null)); //logs false
console.log(Array.isArray({ length: 5 })); //logs false

console.log(Array.isArray([])); //logs true
If your environment does not support this method you can use the polyfill implementation.

   function isArray(value){
     return Object.prototype.toString.call(value) === "[object Array]"
   }
58. How to check if a number is even without using the % or modulo operator?
↑ We can use the bitwise AND& operator for this problem. The & operates on its operand and treats them as binary values and performs the AND operation.

function isEven(num) {
  if (num & 1) {
    return false;
  } else {
    return true;
  }
};
0 in binary is 000.
1 in binary is 001.
2 in binary is 010.
3 in binary is 011.
4 in binary is 100.
5 in binary is 101.
6 in binary is 110.
7 in binary is 111.
and so on...

a	b	a & b
0	0	0
0	1	0
1	0	0
1	1	1
So when we console.log this expression 5 & 1 it returns 1. Ok, first the & operator converts both numbers to binary so 5 turns to 101 and 1 turns to 001.
Then it compares every bit (0's and 1's) using the bitwise AND operator. 101 & 001. As we can see from the table the result can be only 1 if a AND b are 1.

101 & 001
101
001
001
So first we compare the left most bit 1&0 the result should be 0.
Then we compare the middle bit 0&0 the result should be 0.
Then we compare the last bit 1&1 the result should be 1.
Then the binary result 001 will be converted to a decimal number which will be 1.
If we console.log this expression 4 & 1 it will return 0. Knowing the last bit of 4 is 0 and 0 & 1 will be 0. If you have a hard time understand this we could use a recursive function to solve this problem.

function isEven(num) {
  if (num < 0 || num === 1) return false;
  if (num == 0) return true;
  return isEven(num - 2);
}
59. How to check if a certain property exists in an object?
↑ There are three possible ways to check if a property exists in an object.

First , using the in operator. The syntax for using the in operator is like this propertyname in object. It returns true if the property exists otherwise it returns false.

const o = { 
  "prop" : "bwahahah",
  "prop2" : "hweasa"
};

console.log("prop" in o); //This logs true indicating the property "prop" is in "o" object
console.log("prop1" in o); //This logs false indicating the property "prop" is not in  "o" object
Second, using the hasOwnProperty method in objects. This method is available on all objects in JavaScript. It returns true if the property exists otherwise it returns false.

//Still using the o object in the first example.
console.log(o.hasOwnProperty("prop2")); // This logs true
console.log(o.hasOwnProperty("prop1")); // This logs false
Third, using the bracket notation obj["prop"]. If the property exists it returns the value of that property otherwise this will return undefined.

//Still using the o object in the first example.
console.log(o["prop"]); // This logs "bwahahah"
console.log(o["prop1"]); // This logs undefined
60. What is AJAX?
↑ AJAX stands for Asynchronous JavaScript and XML. It is a group of related technologies used to display data asynchronously. What this means is that we can send data to the server and get data from the server without reloading the web page.

Technologies use for AJAX.

HTML - web page structure
CSS - the styling for the webpage
JavaScript - the behaviour of the webpage and updates to the DOM
XMLHttpRequest API - used to send and retrieve data from the server
PHP,Python,Nodejs - Some Server-Side language
61. What are the ways of making objects in JavaScript?
↑ Using Object Literal.

  const o = {
   name: "Mark",
   greeting() {
      return `Hi, I'm ${this.name}`;
   }
  };

  o.greeting(); //returns "Hi, I'm Mark"
Using Constructor Functions.

function Person(name) {
   this.name = name;
}

Person.prototype.greeting = function () {
   return `Hi, I'm ${this.name}`;
}

const mark = new Person("Mark");

mark.greeting(); //returns "Hi, I'm Mark"
Using Object.create method.

const n = {
   greeting() {
      return `Hi, I'm ${this.name}`;
   }
};

const o = Object.create(n); // sets the prototype of "o" to be "n"

o.name = "Mark";

console.log(o.greeting()); // logs "Hi, I'm Mark"


62. What's the difference between Object.seal and Object.freeze methods?
↑ The difference between these two methods is that when we use the Object.freeze method to an object, that object's properties are immutable meaning we can't change or edit the values of those properties. While in the Object.seal method we can change those existing properties but we cannot add new properties to the object.

63. What's the difference between the in operator and the hasOwnProperty method in objects?
↑ As you know both of these features check if a property exists in an object. It will return truefalse. The difference between them is that the in operator also checks the objects' Prototype Chain if the property was not found in the current object while the hasOwnProperty method just checks if the property exists in the current object ignoring the Prototype Chain.

// We'll still use the object in the previous question.
console.log("prop" in o); // This logs true;
console.log("toString" in o); // This logs true, the toString method is available in this object's prototype which is the Object.prototype


console.log(o.hasOwnProperty("prop")); // This logs true
console.log(o.hasOwnProperty("toString")); // This logs false, does not check the object's prototype
64. What are the ways to deal with Asynchronous Code in JavasScript?
↑

Callbacks
Promises
async/await
Libraries like async.js, bluebird, q, co
65. What's the difference between a function expression and function declaration?
↑ Suppose we have an example below.

hoistedFunc();
notHoistedFunc();

function hoistedFunc(){
  console.log("I am hoisted");
}

var notHoistedFunc = function(){
  console.log("I will not be hoisted!");
}
The notHoistedFunc call throws an error while the hoistedFunc call does not because the hoistedFunc is hoisted while the notHoistedFunc is not.
Read Hoisting here.

66. How many ways can a function be invoked?
↑ There are 4 ways that a function can be invoked in JavaScript. The invocation determines the value of this or the "owner" object of that function.

Invocation as a function - If a function isn't invoked as a method, as a constructor or with the apply, call methods then it is invoked as a function. The "owner" object of this function will be the window object.
  //Global Scope

  function add(a,b){
    console.log(this);
    return a + b;
  }  

  add(1,5); // logs the "window" object and returns 6

  const o = {
    method(callback){
      callback();
    }
  }

  o.method(function (){
      console.log(this); // logs the "window" object
  });
Invocation as a method - If a property of an object has a value of a function we call it a method. When that method is invoked the this value of that method will be that object.
   const details = {
     name : "Marko",
     getName(){
       return this.name;
     }
   }

   details.getName(); // returns Marko
   // the "this" value inside "getName" method will be the "details" object 
Invocation as a constructor - If a function was invoked with a new keyword before it then it's called a function constructor. An empty object will be created and this will point to that object.
function Employee(name, position, yearHired) {
  // creates an empty object {}
  // then assigns the empty object to the "this" keyword
  // this = {};
  this.name = name;
  this.position = position;
  this.yearHired = yearHired;
  // inherits from Employee.prototype
  // returns the "this" value implicitly if no 
  // explicit return statement is specified
};

const emp = new Employee("Marko Polo", "Software Developer", 2017);

Invocation with the apply and call methods - If we want to explicitly specify the this value or the "owner" object of a function we can use these methods. These methods are available for all functions.
const obj1 = {
 result:0
};

const obj2 = {
 result:0
};


function reduceAdd(){
   let result = 0;
   for(let i = 0, len = arguments.length; i < len; i++){
     result += arguments[i];
   }
   this.result = result;
}


reduceAdd.apply(obj1, [1, 2, 3, 4, 5]);  //the "this" object inside the "reduceAdd" function will be "obj1"
reduceAdd.call(obj2, 1, 2, 3, 4, 5); //the "this" object inside the "reduceAdd" function will be "obj2"
67. What is memoization and what's the use it?
↑ memoization is a process of building a function that is capable of remembering it's previously computed results or values.
The use of making a memoization function is that we avoid the computation of that function if it was already performed in the last calculations with the same arguments. This saves time but has a downside that we will consume more memory for saving the previous results.

68. Implement a memoization helper function.
↑

function memoize(fn) {
  const cache = {};
  return function (param) {
    if (cache[param]) {
      console.log('cached');
      return cache[param];
    } else {
      let result = fn(param);
      cache[param] = result;
      console.log(`not cached`);
      return result;
    }
  }
}

const toUpper = (str ="")=> str.toUpperCase();

const toUpperMemoized = memoize(toUpper);

toUpperMemoized("abcdef");
toUpperMemoized("abcdef");
This memoize helper function only works on a function that accepts one argument. We need to make a memoize helper function that accepts multiple arguments.

const slice = Array.prototype.slice;
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const params = slice.call(args);
    console.log(params);
    if (cache[params]) {
      console.log('cached');
      return cache[params];
    } else {
      let result = fn(...args);
      cache[params] = result;
      console.log(`not cached`);
      return result;
    }
  }
}
const makeFullName = (fName, lName) => `${fName} ${lName}`;
const reduceAdd = (numbers, startingValue = 0) => numbers.reduce((total, cur) => total + cur, startingValue);

const memoizedMakeFullName = memoize(makeFullName);
const memoizedReduceAdd = memoize(reduceAdd);

memoizedMakeFullName("Marko", "Polo");
memoizedMakeFullName("Marko", "Polo");

memoizedReduceAdd([1, 2, 3, 4, 5], 5);
memoizedReduceAdd([1, 2, 3, 4, 5], 5);

69. Why does typeof null return object? How to check if a value is null?
↑ typeof null == 'object' will always return true because this was the implementation of null since the birth of JavaScript. A fix was proposed to change typeof null == 'object' to typeof null == 'null' but was rejected because it will lead to more bugs to existing projects and softwares.

We can use the === or strict equality operator to check if a value is null.

  function isNull(value){
    return value === null;
  }
70. What does the new keyword do?
↑ The new keyword is used with constructor functions to make objects
in JavaScript.

Suppose we have an example code below.

function Employee(name, position, yearHired) {
  this.name = name;
  this.position = position;
  this.yearHired = yearHired;
};

const emp = new Employee("Marko Polo", "Software Developer", 2017);

The new keyword does 4 things.

Creates an empty object.
Assigns that empty object to the this value.
The function will inherit from functionName.prototype.
Returns the this if no Explicit return statement is used.
In the above image, it will first create an empty object {} then
it will the this value to that empty object this = {} and add properties to that this object. Because we don't have a explicit return statement it automatically returns the this for us.

Top 150+ JavaScript Interview Questions and Answers for full-stack Web Developer
by Pulak Pramanik 0 comments 996 views
Table of Contents

JavaScript interview Questions and Answer for full-stack Web Developer
Core JavaScript Concepts interview Questions:
interview Questions for JavaScript ES6+ Features:
interview Questions for JavaScript DOM Manipulation:
interview Questions for Asynchronous JavaScript:
interview Questions for JavaScript Modules:
interview Questions for Object-Oriented Programming (OOP) in JavaScript:
interview Questions for Functional Programming in JavaScript:
interview Questions for JavaScript Error Handling and Debugging:
interview Questions for JavaScript Array Manipulation:
interview Questions for JavaScript String Manipulation:
interview Questions for JavaScript Regular Expressions (RegEx):
interview Questions for JavaScript Browser APIs and DOM Manipulation:
interview Questions for Miscellaneous in JavaScript:
interview Questions for JavaScript AJAX and Fetch API:
interview Questions for JavaScript Local Storage and Cookies:
interview Questions for JavaScript Testing:
interview Questions for JavaScript Debugging:
interview Questions for JavaScript Performance Optimization:
interview Questions for JavaScript Security:
interview Questions for JavaScript Frameworks and Libraries:
JavaScript Interview Tips:
Conclusions
Prepare for your full-stack web developer JavaScript interview Questions and Answer From basic concepts to advanced topics, with our comprehensive JavaScript Interview Questions and Answers guide. Master essential concepts and ace your next technical interview.

JavaScript interview Questions and Answer for full-stack Web Developer
Dive into our friendly JavaScript Interview Questions and Answers guide in Full-Stack Web Development, chapter by chapter, designed for full-stack web developers like you! which is base on ECMA Script-262. Whether you’re brushing up on basics or exploring advanced topics, we’ve got you covered with simple explanations and helpful insights to ace your next interview with confidence. Another only Core JavaScript interviews questions & Answers you can prepare it.

Core JavaScript Concepts interview Questions:
What is JavaScript?
JavaScript is a high-level, interpreted programming language used to create interactive effects within web browsers.
What are the data types in JavaScript?
JavaScript has six primitive data types: string, number, boolean, null, undefined, and symbol. Additionally, there is an object data type.
Explain hoisting in JavaScript.
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
What is the difference between undefined and null?
undefined represents a variable that has been declared but has not been assigned a value, while null is an assignment value representing no value.
What is the this keyword in JavaScript?
The this keyword refers to the object to which the current code belongs. Its value depends on how a function is called.
What is the difference between == and ===?
== is used for equality comparison, where JavaScript performs type coercion if operands are of different types. === is used for strict equality comparison, where types and values must be the same.
Explain closures in JavaScript.
A closure is the combination of a function bundled together with references to its surrounding state. It gives you access to an outer function’s scope from an inner function.
What is event delegation in JavaScript?
Event delegation is a technique for listening to events where you delegate the responsibility of handling events to a common ancestor instead of handling the events on individual elements.
What is the event loop in JavaScript?
The event loop is a single-threaded mechanism that handles asynchronous callbacks in JavaScript. It continuously checks the call stack and the task queue, pushing tasks from the queue onto the stack when the stack is empty.
Explain the difference between let, const, and var.
var is function-scoped, let and const are block-scoped. var can be redeclared and reassigned, let can be reassigned but not redeclared, and const cannot be reassigned or redeclared.
What is the difference between dot notation and bracket notation?
Dot notation is used to access properties of an object using the dot (.) operator.
Bracket notation is used to access properties using square brackets ([]), and it allows for dynamic property names.
Explain object destructuring in JavaScript.
Object destructuring allows you to extract multiple properties from an object into separate variables.
interview Questions for JavaScript ES6+ Features:
What are arrow functions in JavaScript?
Arrow functions are a concise way to write anonymous function expressions in JavaScript, with a more intuitive syntax and lexical scoping of this.
What is a callback function?
A callback function is a function passed as an argument to another function, which is then invoked inside the outer function.
Explain destructuring in JavaScript.
Destructuring allows you to extract values from arrays or properties from objects into distinct variables.
What are template literals in JavaScript?
Template literals are string literals that allow embedded expressions, providing an easier way to concatenate strings and interpolate variables.
What is the ... spread operator in JavaScript?
The spread operator allows an iterable to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
What are the Map and Set data structures in JavaScript?
Map is a collection of key-value pairs, and Set is a collection of unique values.
Explain async/await in JavaScript.
async/await is a syntactic sugar for writing asynchronous code. It allows you to write asynchronous code in a synchronous manner, making it easier to read and maintain.
What are Promises in JavaScript?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous computations.
What is the for...of loop in JavaScript?
The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
Explain the Object.entries() and Object.fromEntries() methods.
Object.entries() returns an array of a given object’s own enumerable string-keyed property [key, value] pairs. Object.fromEntries() transforms a list of key-value pairs into an object.
What is the Symbol data type in JavaScript?
Symbol is a primitive data type introduced in ECMAScript 6, used to create unique identifiers for object properties.
Explain the this keyword in JavaScript?
this refers to the object to which a function belongs or is called upon.
Explain the difference between function declaration and function expression.
Function declarations are hoisted, meaning they can be called before they’re defined.
Function expressions are not hoisted and cannot be called before they’re defined.
interview Questions for JavaScript DOM Manipulation:
What is the Document Object Model (DOM)?
The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
Explain how you would add an event listener in JavaScript.
You can use the addEventListener() method to attach an event handler to an element.
What is the difference between innerText and innerHTML?
innerText sets or returns the text content of the specified node, while innerHTML sets or returns the HTML content of an element.
How can you create elements dynamically in JavaScript?
You can use the document.createElement() method to create a new element, and then append it to an existing element using methods like appendChild().
Explain event bubbling and event capturing.
Event bubbling is the process where the event is first captured and handled by the innermost element and then propagated to outer elements. Event capturing is the opposite; the event is first captured by the outermost element and propagated to the inner elements.
What is the difference between window.onload and document.ready?
window.onload fires when the entire page (including images and external resources) is loaded, while document.ready (used in jQuery) fires when the DOM is ready, which may be before images are fully loaded.
How can you remove an element from the DOM?
You can use the removeChild() method to remove a child node from an element.
What is event delegation, and how does it work?
Event delegation is a technique for handling events where you attach a single event listener to a parent element instead of individual child elements. When an event occurs, it bubbles up to the parent, and you can determine which child element triggered the event.
What are data attributes, and how are they used?
Data attributes allow you to store extra information on HTML elements in the form of custom attributes prefixed with data-. They are commonly used to store data for JavaScript to access.
How can you get and set attributes of an HTML element in JavaScript?
You can use methods like getAttribute() and setAttribute() to get and set attributes of an HTML element.
How do you access elements in the DOM using JavaScript?
Using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().
How do you manipulate HTML content using JavaScript?
By accessing element properties such as innerHTML, textContent, innerText, value, etc.
How do you add and remove event listeners in JavaScript?
Using the addEventListener() method to add listeners and the removeEventListener() method to remove them.
Explain event propagation in JavaScript.
Event propagation refers to the order in which event handlers are executed when an event occurs on a DOM element.
interview Questions for Asynchronous JavaScript:
What is asynchronous programming in JavaScript?
Asynchronous programming is a programming paradigm that allows the CPU to perform other tasks while waiting for long-running tasks (such as I/O operations) to complete.
Explain callbacks in JavaScript.
A callback is a function passed as an argument to another function, which will be invoked or executed later.
What is the callback hell? How can you avoid it?
Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain. You can avoid it by using promises, async/await, or modularizing your code.
What are promises in JavaScript?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous computations in a more manageable way.
Explain the fetch API in JavaScript.
The fetch API is a modern replacement for XMLHttpRequest for making HTTP requests. It provides a more flexible and powerful interface for fetching resources from the network.
What are async functions in JavaScript?
Async functions are a syntactic sugar for writing asynchronous code using promises. They allow you to write asynchronous code in a synchronous manner, making it easier to read and maintain.
What is the purpose of the await keyword in JavaScript?
The await keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected), and to resume execution after the promise is settled, with the resolved value returned by the promise.
How can you handle errors in asynchronous code in JavaScript?
You can use try...catch blocks or .catch() method chaining to handle errors in asynchronous code.
Explain the difference between Promise.all() and Promise.race().
Promise.all() takes an array of promises and returns a single promise that resolves when all of the input promises have resolved. Promise.race() takes an array of promises and returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects.
What are generators in JavaScript?
Generators are functions that can be paused and resumed. They allow you to generate a sequence of values lazily, on-demand.
interview Questions for JavaScript Modules:
What are modules in JavaScript?
Modules are reusable pieces of code that encapsulate related functionality.
How do you create and export modules in JavaScript?
Using the export keyword to export functions, variables, or objects from a module.
How do you import modules in JavaScript?
Using the import keyword to import functions, variables, or objects from a module.
What are named exports and default exports?
Named exports allow you to export multiple values from a module, while default exports allow you to export a single value.
interview Questions for Object-Oriented Programming (OOP) in JavaScript:
What is object-oriented programming (OOP)?
Object-oriented programming is a programming paradigm based on the concept of “objects,” which can contain data in the form of fields (properties) and code in the form of procedures (methods).
How can you create objects in JavaScript?
You can create objects using object literals, constructor functions, or the class syntax introduced in ES6.
Explain the concept of prototypes in JavaScript.
Prototypes are the mechanism by which JavaScript objects inherit features from one another. Each object has a prototype object from which it inherits properties and methods.
What is inheritance in JavaScript?
Inheritance is a mechanism by which an object can inherit properties and methods from another object. It allows for code reuse and promotes modularity.
What are constructor functions in JavaScript?
Constructor functions are functions used to create objects with a specific structure and behavior. They are typically used with the new keyword to create new instances of objects.
What is the prototype property in JavaScript?
The prototype property allows you to add properties and methods to an object’s prototype, which are then inherited by all instances of that object.
How do you create prototypes in JavaScript?
By adding properties and methods to the prototype object of a constructor function.
What is prototype chaining in JavaScript?
Prototype chaining is the process of searching for properties and methods in an object’s prototype chain if they are not found in the object itself.
Explain prototypal inheritance in JavaScript.
Prototypal inheritance is the ability of objects to inherit properties and methods from other objects.
What is the class keyword in JavaScript?
The class keyword is a syntactic sugar for defining constructor functions and prototype methods in a more concise and readable way.
Explain the super keyword in JavaScript.
The super keyword is used to call methods on an object’s parent class. It is used within constructor functions and methods of child classes to call corresponding methods or constructors of the parent class.
What is method chaining in JavaScript?
Method chaining is a technique where multiple methods are called on the same object in a single statement, with each method returning the object itself, allowing for the creation of fluent interfaces.
What is encapsulation in JavaScript?
Encapsulation is the bundling of data and methods that operate on the data into a single unit (object). It allows for the hiding of implementation details and the exposure of a controlled interface to the outside world.
What are constructors in JavaScript?
Constructors are special methods used for initializing objects created with a class.
interview Questions for Functional Programming in JavaScript:
What is functional programming?
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
Explain pure functions in JavaScript.
A pure function is a function that always returns the same result given the same input and does not have any side effects. It does not modify variables outside its scope or change the state of the program.
What are higher-order functions in JavaScript?
Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are a fundamental concept in functional programming.
What is currying in JavaScript?
Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. It allows for partial application of functions.
What is immutability in JavaScript?
Immutability is the concept of not changing the state of an object after it has been created. In JavaScript, immutable data structures are often used to ensure that data remains unchanged.
What is function composition in JavaScript?
Function composition is the process of combining two or more functions to produce a new function. It involves passing the output of one function as the input to another function.
Explain the map, filter, and reduce functions in JavaScript.
map is used to transform each element of an array using a given function. filter is used to create a new array with elements that pass a certain condition. reduce is used to reduce an array to a single value by applying a function to each element.
What are side effects in JavaScript?
Side effects are changes made to the state of a program that are observable outside the function performing the computation. They can include modifying external variables, performing I/O operations, or throwing exceptions.
What is memoization in JavaScript?
Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.
What is recursion in JavaScript?
Recursion is a programming technique where a function calls itself in order to solve smaller instances of the same problem. It is often used in situations where a problem can be divided into smaller subproblems.
interview Questions for JavaScript Error Handling and Debugging:
How can you debug JavaScript code?
You can use browser developer tools, console.log statements, breakpoints, and debugging statements like debugger to debug JavaScript code.
What is error handling in JavaScript?
Error handling is the process of anticipating and responding to errors that may occur during the execution of a program. It involves catching and handling exceptions to prevent program crashes.
Explain the try…catch…finally statement in JavaScript.
The try...catch...finally statement is used for error handling in JavaScript. The try block contains the code that may throw an exception, the catch block handles the exception if one occurs, and the finally block executes code regardless of whether an exception was thrown.
What is the throw statement in JavaScript?
The throw statement is used to explicitly throw an exception. It can be used in conjunction with the try...catch statement to handle errors.
What is the console object in JavaScript?
The console object provides access to the browser’s debugging console and methods for logging messages, warnings, errors, and other information.
How can you log messages to the console in JavaScript?
You can use methods like console.log(), console.warn(), console.error(), and console.info() to log messages to the console.
What is the difference between console.log() and console.dir()?
console.log() is used to log a message to the console, while console.dir() is used to display an interactive list of the properties of a specified JavaScript object.
Explain the debugger statement in JavaScript.
The debugger statement is used to pause the execution of JavaScript code and start a debugging session. It can be placed anywhere in the code, and when encountered, it will cause the browser’s debugger to open.
What is source mapping in JavaScript debugging?
Source mapping is a technique used to map the generated code (e.g., minified or transpiled code) back to its original source code, making it easier to debug.
What are some common debugging techniques in JavaScript?
Some common debugging techniques include using breakpoints, stepping through code, inspecting variables, logging messages to the console, and using the browser’s developer tools.
What is the finally block in error handling?
The finally block is used to execute code, regardless of whether an exception is thrown or caught.
Explain the throw statement in JavaScript.
The throw statement allows you to throw an exception explicitly.
interview Questions for JavaScript Array Manipulation:
What are arrays in JavaScript?
Arrays are ordered collections of values, each identified by an index. They can contain values of any data type, including other arrays.
How can you create an array in JavaScript?
You can create an array using array literals ([]) or the Array() constructor.
Explain how you can access and modify elements in an array in JavaScript.
You can access elements in an array using bracket notation (array[index]), and you can modify elements by assigning new values to specific indices.
What are array methods in JavaScript?
Array methods are built-in functions that can be called on arrays to perform common operations such as adding or removing elements, iterating over elements, and transforming arrays.
What is the push() method in JavaScript?
The push() method adds one or more elements to the end of an array and returns the new length of the array.
What is the pop() method in JavaScript?
The pop() method removes the last element from an array and returns that element.
What is the shift() method in JavaScript?
The shift() method removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.
What is the unshift() method in JavaScript?
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Explain the splice() method in JavaScript.
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
What is the slice() method in JavaScript?
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
interview Questions for JavaScript String Manipulation:
What are strings in JavaScript?
Strings are sequences of characters used to represent text. They can be created using string literals or the String() constructor.
How can you concatenate strings in JavaScript?
You can concatenate strings using the + operator or the concat() method.
What is the charAt() method in JavaScript?
The charAt() method returns the character at the specified index (position) in a string.
What is the split() method in JavaScript?
The split() method splits a string into an array of substrings based on a specified separator and returns the new array.
What is the substring() method in JavaScript?
The substring() method returns a subset of a string between two indices, not including the end index.
What is the substr() method in JavaScript?
The substr() method returns a substring of a string starting from a specified index and optionally including a specified number of characters.
What is the toUpperCase() method in JavaScript?
The toUpperCase() method returns the calling string value converted to uppercase.
What is the toLowerCase() method in JavaScript?
The toLowerCase() method returns the calling string value converted to lowercase.
What is the trim() method in JavaScript?
The trim() method removes whitespace from both ends of a string.
What is the replace() method in JavaScript?
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement string.
interview Questions for JavaScript Regular Expressions (RegEx):
What are regular expressions in JavaScript?
Regular expressions are patterns used to match character combinations in strings. They are a powerful tool for text processing and manipulation.
How can you create a regular expression in JavaScript?
You can create a regular expression using the RegExp constructor or a literal notation (/pattern/flags).
What are flags in regular expressions?
Flags are optional parameters that modify the behavior of a regular expression (e.g., i for case-insensitive matching, g for global matching).
How do you use regular expressions in JavaScript?
Using methods like test(), exec(), match(), replace(), search(), and split().
Explain the test() method in JavaScript regular expressions.
The test() method executes a search for a match between a regular expression and a specified string. It returns true if a match is found, otherwise false.
Explain the exec() method in JavaScript regular expressions.
The exec() method executes a search for a match in a specified string. It returns an array containing the matched text if a match is found, otherwise null.
What are character classes in JavaScript regular expressions?
Character classes allow you to match any one of a range of characters. They are denoted by square brackets ([ ]) and can contain individual characters or ranges.
What are quantifiers in JavaScript regular expressions?
Quantifiers specify the number of occurrences of a character or group in a regular expression. They include * (zero or more), + (one or more), ? (zero or one), and {} (specific number of occurrences).
What are capturing groups in JavaScript regular expressions?
Capturing groups are portions of a pattern that are enclosed in parentheses. They allow you to extract and manipulate parts of a matched string.
What are lookahead and lookbehind assertions in JavaScript regular expressions?
Lookahead and lookbehind assertions are zero-length assertions that match a string only if it is followed or preceded by another string, respectively.
What are boundary matchers in JavaScript regular expressions?
Boundary matchers are used to match positions where specific boundaries occur in a string. They include ^ (start of string), $ (end of string), \b (word boundary), and \B (non-word boundary).
What are flags in JavaScript regular expressions?
Flags are optional parameters that modify the behavior of a regular expression. They are appended to the end of a regular expression literal and include i (case-insensitive), g (global match), and m (multiline).
interview Questions for JavaScript Browser APIs and DOM Manipulation:
What are browser APIs in JavaScript?
Browser APIs are sets of functions and methods provided by web browsers to interact with various aspects of the browser environment, such as the DOM, HTML5 features, CSS styling, and more.
Explain the localStorage and sessionStorage APIs in JavaScript.
localStorage and sessionStorage are web storage APIs that allow you to store key-value pairs locally in the browser. localStorage persists data even after the browser is closed, while sessionStorage data is cleared when the session ends (i.e., when the browser is closed).
What is the addEventListener() method in JavaScript?
The addEventListener() method is used to attach an event listener to an element. It takes an event type and a callback function as arguments and executes the callback when the specified event occurs on the element.
What is the fetch() API in JavaScript?
The fetch() API is used to make asynchronous HTTP requests in JavaScript. It returns a promise that resolves to the response to the request.
What is the XMLHttpRequest object in JavaScript?
The XMLHttpRequest object is a built-in browser object used to make HTTP requests in JavaScript. It provides an easy way to send and receive data from a web server asynchronously.
What are WebSockets in JavaScript?
WebSockets are a communication protocol that provides full-duplex communication channels over a single TCP connection. They enable real-time, bidirectional communication between a client and a server.
What is the Canvas API in JavaScript?
The Canvas API is a HTML5 feature that allows you to draw graphics and animations on a web page using JavaScript.
What is the Web Storage API in JavaScript?
The Web Storage API provides mechanisms by which browsers can store key/value pairs in a much more intuitive fashion than using cookies.
What is the File API in JavaScript?
The File API provides access to the contents of files using JavaScript, allowing web applications to read and manipulate files on the client’s system.
What is the Geolocation API in JavaScript?
The Geolocation API allows web applications to retrieve the geographical location information of a user’s device.
interview Questions for Miscellaneous in JavaScript:
What are polyfills in JavaScript?
Polyfills are pieces of code (usually JavaScript) that provide modern functionality on older browsers that do not natively support it.
What is the JavaScript event loop?
The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by handling asynchronous callbacks in a single-threaded environment.
What are some common JavaScript performance optimization techniques?
Some common performance optimization techniques include minimizing DOM manipulation, reducing HTTP requests, optimizing JavaScript code, using caching techniques, and lazy-loading resources.
What are some security considerations when working with JavaScript?
Some security considerations include avoiding injection attacks (such as XSS and SQL injection), validating and sanitizing user input, using secure authentication and authorization mechanisms, and protecting sensitive data.
How can you improve the accessibility of a web application using JavaScript?
You can improve accessibility by ensuring proper semantic HTML markup, providing alternative text for images, implementing keyboard navigation, using ARIA roles and attributes, and testing with screen readers.
What are some best practices for writing clean and maintainable JavaScript code?
Some best practices include using meaningful variable and function names, following consistent coding style conventions, avoiding unnecessary global variables, modularizing code, commenting code where necessary, and writing unit tests.
How can you optimize website performance for mobile devices using JavaScript?
You can optimize performance for mobile devices by minimizing file sizes (e.g., JavaScript, CSS, and images), using responsive design techniques, lazy-loading resources, minimizing DOM manipulation, and testing on real mobile devices.
What are some JavaScript design patterns, and when would you use them?
Some common design patterns include Singleton, Module, Factory, Observer, and MVC. You would use design patterns to solve recurring design problems and improve code maintainability, scalability, and reusability.
What are some tools and libraries commonly used in JavaScript development?
Some common tools and libraries include package managers (such as npm and Yarn), task runners (such as Gulp and Grunt), build tools (such as webpack and Babel), testing frameworks (such as Jest and Mocha), and front-end libraries and frameworks (such as React, Angular, and Vue.js).
Explain the difference between cookies, localStorage, and sessionStorage.
Cookies are small pieces of data stored in the browser that are sent with every HTTP request. They have a limited size (typically 4KB) and are sent to the server with every request, which can impact performance. localStorage and sessionStorage are newer web storage APIs that allow larger amounts of data (up to 5MB) to be stored locally in the browser. localStorage data persists even after the browser is closed, while sessionStorage data is cleared when the session ends (i.e., when the browser is closed).
interview Questions for JavaScript AJAX and Fetch API:
What is AJAX in JavaScript?
AJAX (Asynchronous JavaScript and XML) is a technique for updating parts of a web page without reloading the whole page.
How do you make AJAX requests in JavaScript?
Using the XMLHttpRequest object or the newer fetch() API.
What is the Fetch API in JavaScript?
The Fetch API provides an interface for fetching resources asynchronously across the network.
How do you use the Fetch API to make HTTP requests?
By calling the fetch() function with the URL of the resource you want to fetch.
What are promises in the Fetch API?
Promises are used to handle the results of asynchronous operations in the Fetch API.
How do you handle errors in Fetch API requests?
By chaining a .catch() method to the promise returned by the fetch() function.
interview Questions for JavaScript Local Storage and Cookies:
What is local storage in JavaScript?
Local storage is a mechanism that allows web applications to store data locally within the user’s browser.
How do you use local storage in JavaScript?
By using the localStorage object, which provides methods like setItem(), getItem(), removeItem(), and clear().
What are cookies in JavaScript?
Cookies are small pieces of data stored on the client’s browser by websites.
How do you create and read cookies in JavaScript?
By setting cookie values using the document.cookie property and reading them from the same property.
What are the differences between local storage and cookies?
Local storage has a larger storage capacity than cookies.
Local storage data is not sent with every HTTP request, while cookies are.
Local storage data is stored indefinitely, while cookies can have expiration dates.
interview Questions for JavaScript Testing:
What is unit testing in JavaScript?
Unit testing is the process of testing individual units or components of a software application in isolation.
How do you write unit tests in JavaScript?
Using testing frameworks like Jasmine, Mocha, or Jest, and assertion libraries like Chai or Expect.
What is test-driven development (TDD)?
Test-driven development is a software development process where tests are written before the code is implemented.
What is mocking in JavaScript testing?
Mocking is the process of creating simulated versions of objects or functions in order to test the behavior of other objects or functions.
What is code coverage in JavaScript testing?
Code coverage is a measure used to describe the degree to which the source code of a program has been tested.
interview Questions for JavaScript Debugging:
How do you debug JavaScript code?
Using browser developer tools like Chrome DevTools or Firefox Developer Tools.
By inserting console.log() statements into the code.
What are breakpoints in JavaScript debugging?
Breakpoints are points in the code where execution will pause so that you can inspect the state of the program.
How do you set breakpoints in JavaScript code?
By clicking on the line number in the source code or using the debugger statement.
interview Questions for JavaScript Performance Optimization:
What are some common performance issues in JavaScript?
Inefficient DOM manipulation, excessive memory usage, long-running JavaScript code, blocking operations, etc.
How do you optimize JavaScript performance?
Minifying and compressing JavaScript code.
Reducing DOM manipulation.
Optimizing images and other media files.
What is lazy loading in JavaScript?
Lazy loading is a technique where resources are loaded only when they are needed, rather than all at once.
How do you implement lazy loading in JavaScript?
By deferring the loading of non-critical resources until they are needed, often using Intersection Observer API or custom JavaScript.
interview Questions for JavaScript Security:
What are some common security vulnerabilities in JavaScript?
Cross-site scripting (XSS), Cross-site request forgery (CSRF), SQL injection, insecure direct object references, etc.
How do you prevent XSS attacks in JavaScript?
By properly escaping user input, validating and sanitizing data, and using Content Security Policy (CSP) headers.
What is Content Security Policy (CSP) in JavaScript?
CSP is a security standard that helps prevent XSS attacks by allowing website administrators to control which resources can be loaded and executed on their web pages.
How do you handle authentication and authorization in JavaScript applications?
By using techniques like JSON Web Tokens (JWT), OAuth, and session management.
interview Questions for JavaScript Frameworks and Libraries:
What are some popular JavaScript frameworks and libraries?
React, Angular, Vue.js, jQuery, Bootstrap, Express.js, Node.js, etc.
What is React and how does it differ from other frameworks?
React is a JavaScript library for building user interfaces. It uses a virtual DOM and a component-based architecture.
What is Angular and how does it differ from React?
Angular is a JavaScript framework for building single-page applications. It provides a full-featured MVC architecture and two-way data binding.
What is Vue.js and how does it differ from React and Angular?
Vue.js is a progressive JavaScript framework for building user interfaces. It is more lightweight and easier to learn than React and Angular.
How do you choose between different JavaScript frameworks and libraries?
It depends on factors like project requirements, team expertise, performance, community support, and ecosystem.
What are some advantages of using JavaScript frameworks and libraries?
They provide pre-built components and tools for building applications faster.
They have active communities and ecosystems with extensive documentation and resources.
What are some disadvantages of using JavaScript frameworks and libraries?
They may introduce a learning curve for developers.
They can add overhead to the application size and complexity.
JavaScript Interview Tips:
Practice coding regularly to improve your problem-solving skills.
Review common algorithms and data structures used in JavaScript.
Be prepared to discuss your previous projects and experiences.
Stay updated on the latest developments in JavaScript and web development.
Ask questions during the interview to demonstrate your interest and understanding.
Conclusions
This comprehensive list covers various aspects of JavaScript that are commonly asked in interviews for full-stack web development positions. Make sure to understand each concept thoroughly and practice coding examples to solidify your understanding. Good luck with your interviews!

TOP 45 JavaScript Interview Questions With Detailed Answers
By Sruthy  Updated August 29, 2025
 
 Edited by Kamila
Most frequently asked basic and advanced JavaScript interview questions with detailed answers for every JavaScript Developer. 

If you are preparing for an interview, here are the most frequently asked JS interview questions and answers for your reference.

We have designed the same to get you to the questions you may likely encounter during your technical interview.

Table of Contents: [Show]

Expert Quiz on JavaScript Interview Questions
Take this quick quiz to test your JavaScript knowledge and land your dream job. This quiz on JavaScript interview questions covers essential and advanced concepts with real-world scenarios for your easy understanding.

⚡ JavaScript Interview Questions QUIZ
Master JavaScript – From Basics to Advanced Concepts!
Scenario-Based Questions
Question 1 of 15
How would you implement a custom Promise in JavaScript?
Simple function returning boolean
Class with constructor, then, catch methods
Object with getter/setter properties
Array with callback methods
Next Question ➡️

JavaScript Interview Questions
About JavaScript
JavaScript is a high-level programming language, probably one of the most used programming languages in the world right now. It can program web browsers or even servers.

To understand the importance of JavaScript, disable JavaScript in your browser and try to load the Web page in it. These Web pages will not work properly. Many of the content in them may misbehave. Almost all modern browsers use a combination of JavaScript, CSS, and HTML.

JavaScript is an interpreted programming language. An interpreter is embedded in browsers like Google Chrome, Microsoft Internet Explorer, etc. So, its code can be handled by the JavaScript Engine of the browser.

JavaScript appeared in December 1995 and was initially called LiveScript, although the name was soon changed for marketing reasons. It should not be confused with ‘Java’, which also bears some resemblance but is a completely different language.

Interview Questions for JavaScript Developers
Q #1) What is JavaScript?

Answer: JavaScript is a scripting language developed by Netscape. It can program web browsers or even servers. It can dynamically update the contents of the webpage, which is the beauty of this language.

Q #2) What are the advantages of using External JavaScript?

Answer: Using external JavaScript in our code has many advantages.

These are stated below.

Separation of code is done.
Code maintainability is easy.
The performance is better.
Q #3) In the following code snippet, can you please predict the output or If you get an error, please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p id="studentName"></p>
  
<script>
var studentName = "Sajeesh Sreeni"; // String 'Sajeesh Sreeni' stored in studentName
var studentName; // varaible is decalred again
document.getElementById("studentName").innerHTML = 
"Redeclaring the varaible will not lose the value!.<br>"
+"Here the value in studentName is "+ studentName;
  
</script>
</body>
</html>
Answer: This code will not produce any errors. Redeclaration of the variables is allowed in JavaScript. Hence, the value of the variable will not be lost after the execution of the statement here.

Q #4) In the following code snippet, can you please predict the output or if you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p id="sum_first"></p>
<p id="sum_second"></p>
<script>
var sum_first =50+20+' Sajeesh Sreeni ';
var sum_second= " Sajeesh Sreeni "+50+20;
document.getElementById("sum_first").innerHTML = "The first varaible sum is :"+sum_first +
"<br>The second varaible sum is :"+sum_second ;
</script>
</body>
</html>
Answer: This code will not show any errors!

Output of the code snippet:

      The first variable sum is: 70 Sajeesh Sreeni
   The second variable sum is: Sajeesh Sreeni 5020

Q #5) What is the difference between test () and exec () methods?

Answer: Both test () and exec () are RegExp expression methods.

By using a test (), we will search a string for a given pattern, if it finds the matching text, then it returns the Boolean value ‘true’ or else it returns ‘false’.

But in exec (), we will search a string for a given pattern. If it finds the matching text, then it returns the pattern itself or else it returns ‘null’ value.

Q #6) What are the advantages of JavaScript?

Answer: This Scripting language has many advantages, as stated below.

Lightweight: It is easy to implement. It has a small memory footprint.
Interpreted: It is an interpreted language. Instructions are executed directly.
Object-oriented: It is an object-oriented language.
First-class functions: In JavaScript, a function can be used as a value.
Scripting Language: It’s a language in which instructions are written for a run-time environment.
Q #7) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Const Variable </p>
<p id="display"></p>
<script>
const first_num;
first_num =1000;
document.getElementById("display").innerHTML = "First Number:"+ first_num;
</script>
</body>
</html>
Answer: The ‘const’ variable ’first_num’ is not initialized with a value, so the code will produce a syntax error.

Output of the code snippet:

Error: Uncaught SyntaxError: Missing initializer in the const declaration

Q #8) Have you used any browsers for debugging? If yes, how is it done?

Answer: By pressing the ‘F12’ key on the keyboard, we can enable debugging in the browser. Choose the ‘Console’ tab to view the results.

In the Console, we can set breakpoints and view the value in variables. All modern browsers have a built-in debugger (for example, Chrome, Firefox, Opera, and Safari). This feature can be turned ON and OFF.

Q #9) What is the use of the ‘debugger’ keyword in JavaScript code?

Answer: Using the ‘debugger’ keyword in the code is like using breakpoints in the debugger.

To test the code, the debugger must be enabled for the browser. If debugging is disabled for the browser, the code will not work. During debugging of the code, the remaining part should stop executing before it goes to the next line.

Q #10) What are the distinct types of Error Name Values?

Answer: There are 6 types of values in ‘Error Name’ property.

Error
Description
Range Error	We will get this error if we use a number outside the range
Syntax Error	This error raises when we use the incorrect syntax. (Please refer Ques No: 7)
Reference Error	This error is thrown if used an undeclared variable Please refer Ques No: 19
Eval Error	Thrown due to the error in eval(). New JavaScript version doesn’t have this error
Type Error	Value is outside the range of types used. Please refer Ques No :22
URI Error
Due to the usage of illegal characters.
Q #11) What is JavaScript hoisting?

Answer: While using the ‘JavaScript Hoisting’ method, when an interpreter runs the code, all the variables are hoisted to the top of the original /current scope. If you have a variable declared anywhere inside the code, then it is brought to the top.

This method is only applicable to the declaration of a variable and does not apply to the initialization of a variable. Functions are also hoisted to the top, whereas function explanations are not hoisted to the top.

Where we declared the variable inside the code doesn’t matter much.

Q #12) What is JavaScript ‘Strict Mode’?

Answer: ‘Strict mode’ is a restricted variant of JavaScript. Usually, this language is ‘not very strict’ in throwing errors. But in ‘Strict mode’ it will throw all types of errors, even the silent errors. Thus, debugging becomes easier. And the chances of making a mistake for the developer are reduced.

Q #13) What are the characteristics of JavaScript ‘Strict Mode’?

Answer: Given below are the characteristics of ‘Strict Mode’:

‘Strict Mode’ will stop developers from creating global variables.
Developers are restricted from using duplicate parameters.
Strict mode will restrict you from using the JavaScript keyword as a variable name or function name.
Strict mode is declared with ‘the use strict’ keyword at the beginning of the script.
All browsers support strict mode.
Q #14) What are Self Invoking Functions?

Answer: They are also known as ‘Immediately Invoked Function Expressions’ or ‘Self-Executing Anonymous Functions’. These functions are invoked automatically in the code, hence they are named as ‘Self Invoking Functions’.

Usually, we define a function and invoke it, but if we want to execute a function automatically where it is explained, and if we are not going to call it again, we can use anonymous functions. And these types of functions have no name.

Q #15) What is the syntax of ‘Self-Invoking Function’? Give an example?

Answer:

The syntax for the self-invoking function:

1
2
(function () {
return () } () ;
Here, the last ‘()’ parenthesis in the syntax states that it is a function expression.

Example of Self-Invoked Functions:

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for Self-Invoking </p>
<p id="dispaly_num"></p>
<script>
(function (){
elem = document.getElementById("dispaly_num");
elem.innerHTML = "This function has no name.<br>It is called automatically";
}());
</script>
</body>
</html>
Here, the anonymous function is automatically invoked in the code snippet.

The function is used to set the text property of the <p> tag having ‘display_num’ as Id.

Output of the code snippet:

      This function has no name.
   It is called automatically

Q #16) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

Answer: 

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample : Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for JavaScript Hoisting </p>
<p id="dispaly_num"></p>
<script>
first_num = 100; // Assign value 100 to num
elem = document.getElementById("dispaly_num");
elem.innerHTML = " Here the variable first_num:<u> "+first_num +"</u> is taken to the top <br>" +
"Since second variable is initialised the value is not taken to the top and it's value is "
+ "<u>"+second_num +"</u> “;
var first_num; // declaration only
var second_num =200; // Initialised the variable
</script>
</body>
</html>
Please refer to previous Q #11. As explained there, the interpreter will take all the variables declared except initialization to the top.

As per this, the ‘first_num’ variable is taken to the top, and the ‘second_num’ variable is initialized with a value, so it is not taken to the top. This code will not throw an error. But the value of ‘second_num’ is undefined.

Output of the code snippet:

        Here the variable first_num: 100 is taken to the top
       Since the second variable is initialized the value is not taken to the top and its value is undefined

Q #17) If you need to hide the JavaScript code from older browser versions, how will you do it?

Answer: In Code, after the <script> tag, add ‘<! –’ HTML tag.

This will not allow the browser to execute the JavaScript code if it were an older version of it. Also, after the end </script> tag, add ‘//–>’ HTML tag.

This method will help in solving compatibility issues and UI issues to an extent.

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p id="display"></p>
<script> <!--
document.getElementById("display").innerHTML = "Here I am not using an older version of browser.<br> 
So the code will work in my browser";
//-->
</script>
</body>
</html>
Here, the code snippet after a <script> tag is executed in my browser, as I am not using an older version of the browser.

Output of the code snippet:

      Here I am not using an older version of the browser.
      So the code will work in my browser

Q #18) In the following code snippet, can you please predict the output, or if you get an error, please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Find the output </p>
<p id="display"></p>
<script>
var first_num =500;
var result= function(){
document.getElementById("display").innerHTML = first_num;
var first_num =1000;
}
result();
</script>
</body>
</html>
Answer: Here in the code given above, the value of the ‘first_num’ variable will not be 1000.

In JavaScript, there is no hoisting for variable initialization. The function ‘result ()’ will choose the local variable ‘first_num’, as it is declared inside the function. Since the variable is declared after it is used, the value of ‘first_num’ is undefined.

Output of the code snippet:

Undefined

Q #19) What is the difference between ‘var’ and ‘let’ keywords?

Answer: The differences are:

Var
let


’var’ keyword was introduced in JavaScript code from the beginning Stage itself.	‘let’ keyword is introduced in 2015 only.
’Var’ keyword has function scope. The variable defined with var is available anywhere within the function	A variable declared with ‘let’ keyword has a scope only with in that block. So, let has a Block Scope.
The variable declared with ‘var’ be hoisted	The variable declared with ‘let’ be hoisted
Q #20) In the following code snippet, can you please predict the output, or if you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Find the output </p>
<p id="display_first"></p>
<p id="display_second"></p>
<script>
if(true){ 
var first_num =1000; 
let second_num=500; 
}
document.getElementById("display_first").innerHTML = "First Number:" + first_num;
document.getElementById("display_second").innerHTML = "Second Number:" + second_num;
</script>
</body>
</html>
Answer:

Output of the code snippet:

     First Number :1000

We will get ‘First Number :1000’ as output. There is an ‘Uncaught Reference Error’ error as well.

In the code snippet, the scope of ‘second_num’ is only within the if() block. If a developer tries to access the value outside the block, he will get an ‘Uncaught Reference Error’.
Uncaught Reference Error: second_num is not defined.

Q #21) What is the difference between ‘==’ and ‘===’?

Answer: Both ‘==’ and ‘===’ are comparison operators.

‘==’ operator
‘===’ operator


It is known as ‘Type Converting Operator’
It is known as ‘Strict Equality Operator’
It compares Value, do not compare type
It compares both value and type.
Q #22) What is the difference between ‘let’ and ‘const’?

Answer: Differences are as follows:

let
const

using ‘let’ we can change the value of variable any number of times	using ‘const’, after the first assignment of the value we cannot redefine the value again
Consider the code
{
let first_num =1;
first_num=2;
document. write (first_num);
}
Here the code will give an output, since the change in value of first_num is possible.	Consider the code
{
const second_num =1;
second_num=2;
document. write (second_num);
}
Here the code will produce an error, since the ‘second_num’ is assigned with a second value.
Q #23) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example of 'Const' Keyword </p> 
<p id="display_first"></p>
<p id="display_second"></p>
<script>
let first_num =500; 
first_num=501; 
document.getElementById("display_first").innerHTML = "First Number:"+ first_num ; 
const second_num =1000; 
second_num=1001; 
document.getElementById("display_second").innerHTML = "Second Number :"+second_num;
</script>
</body>
</html>
Answer: Please refer to Q #21 before reading further

Output of the code snippet:

 First Number:501

We will also get an error while running the code, as we are trying to change the value of a ‘const’ variable.

Error: Uncaught TypeError: Assignment to constant variable.

Q #24) What is the difference between ‘null’ and ‘undefined’?

Answer: Both keywords represent empty values.

The differences are:

In ‘undefined’, we will define a variable, but we won’t assign a value to that variable. On the other hand, in ‘null’ we will define a variable and assign the ‘null’ value to the variable.
type of (undefined) and type of (null) object.
Q #25) What is the difference between ‘function declaration’ and ‘function expression’?

Answer: It can be explained with an example:

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Function Declaration</p> 
<p id="display_add"></p>
<p id="display_sub"></p>
<script>
function add(first_num,second_num){
return first_num + second_num;
}
var substract = function sub(first_num,second_num){
return first_num - second_num;
}
var first_num=700;
var second_num=300;
document.getElementById("display_add").innerHTML = "Sum of the number is:" + add(first_num,second_num);
document.getElementById("display_sub").innerHTML = "Difference of the number is:" + substract(first_num,second_num);
</script>
</body>
</html>
As shown in the example add() is a function declaration and subtract() is a function expression. The syntax of the function declaration is like a function that is saved into a variable.

Function declarations are hoisted, but function expressions are not hoisted.

Q #26) What is ‘settimeout()’?

Answer: It will be better explained with an example.

Consider the code snippet

1
2
3
Console.log (‘First Line’);
Console.log (‘Second Line’);
Console.log (‘Third Line’);
Output of the code snippet:

First Line
Second Line
Third Line

Now you introduce the settimeout() method and wrap the same set of code in it.

1
2
3
4
5
Settimeout(function() {
Console.log (‘First Line’);
},0);
Console.log (‘Second Line’);
Console.log (‘Third Line’);
Output of the code snippet:

Second Line
Third Line
First Line

With the introduction of settimeout(), the processes become asynchronous. The first statements to be placed in the stack is Console.log (‘Second Line’), and Console.log (‘Third Line’), and they will get executed first. You need to wait until everything in the stack is completed first.

Even though ‘0’ is the timeout period, it doesn’t mean that it will be executed right away.

Scenario-Based Questions for JavaScript Interview
Q #27) What is a Closure and how do you use it?

Answer: A closure is an inner function. It can access the outer variables of a function. In Closure, within function_1 there is another function_2 which returns ‘A’ value and function_1 also returns a value; say ‘B’.

Here, sum() is the outer function, and add () is an inner function, it can access all the variables including ‘first_num’ ‘second_num’, and ‘third_num’. The outer function is called the inner function add().

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
<script>
// To find the sum of two numbers using closure method
function sum( first_num, second_num )
{
var sumStr= 600;
function add(first_num , second_num)
{
return (sumStr + (first_num + second_num));
}
return add();
}
document.write("Result is :"+ sum(150,350));
</script>
Output of the code snippet:

The result is: 500

Q #28) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Assignmnet Statement</p>
<p id="display"></p>
<script>
var x =500;
let y,z,p,q;
q=200;
if(true){
x=y=z=p=q;
document.getElementById("display").innerHTML = "x="+ x + "<br>y :"+ y +"<br>z :"+ z+"<br>p :"+ p+"<br>q :"+ q;
}
</script>
</body>
</html>
Answer: The assignment statements are considered from Right to left.

Output of the code snippet:

x=200
y:200
z:200
p:200
q:200

Q #29) Can you give an example where the code snippet shows the difference between test () and exec () methods?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample : Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for exec() methods </p>
<p>Click the button to search for a pattern "How“ in the given string "Hello. Good Morning. How do you feel today?"</p>
<p>If the "How" is found, the method will return the pattern </p>
<button onclick="searchTxt()">Search</button>
<p id="result"></p>
<script>
function searchTxt() {
var str = "Hello. Good Morning. How do you feel today?";
var search_patt = new RegExp("How");
var res = search_patt.exec(str);
document.getElementById("result").innerHTML ="Found the pattern :"+ res;
}
</script>
</body>
</html>
Answer: This is an example of the test () and exec () method, Refer Ques No: 5 for more details.

Output of the code snippet:

Found the pattern using exec (): How
Using test () the result is: true

Q #30) Can you give an example showing JavaScript Hoisting?

Answer:

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for JavaScript Hoisting </p>
<p id="dispaly_num"></p>
<script>
num = 100; // Assign value 100 to num
elem = document.getElementById("dispaly_num"); 
elem.innerHTML = "Here the variables are used before declaring it." +
" <br>The value of the variable is " + num;
var num; // Declare the varaible </script>
</body>
</html>
Please refer to Q #11 for more details.

Here the variable ‘num’ is used before declaring it. But JavaScript Hoisting will allow it.

Output of the code snippet:

       Here the variables are used before declaring it.
  The value of the variable is 100

Q #31) Can you give an example showing the use of the ‘debugger’ keyword in the JavaScript code?

Answer:

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
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'> Example for debug keyword </p>
<p> Here to test the code, debugger must be enabled for the browser, 
<br>during debugging the code below should stop executing before it goes to the next line. </p>
<p id="wait_result"></p>
<p id="show_result"></p>
<script>
var a = 1000;
var b = 500;
var sum = a + b;
document.getElementById("wait_result").innerHTML = "Adding numbers......<br>
Select 'Resume Script execution' to continue: ";
debugger;
document.getElementById("show_result").innerHTML = "Sum of the numbers : "+sum;
</script>
</body>
</html>
Note: The debugger must be enabled for the browser to test the code. Refer to Ques No: 5 for more details

This is an example of a debugging keyword (Browser used: Chrome)

Output of the code snippet:

Here to test the code, the debugger must be enabled for the browser,
during debugging the code below should stop executing before it goes to the next line.
Adding numbers…
Select ‘Resume Script execution’ to continue:

<Click on ‘Resume Script execution’ Button>

Some of the numbers: 1500

Q #32) In the following code snippet can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Type Converting </p>
<p id="display"></p>
<script>
var first_num =500;
var first_name='500';
if(first_num == first_name){ 
document.getElementById("display").innerHTML = "Comparison will return 'true' by Type converting Operator ";
}
</script>
</body>
</html>
Answer: Consider the code

1
2
3
4
5
6
7
If (‘100’==100) {
document. write (“It’s a Type Converting Operator”);
}
Here
  typeof(‘100’) is string
   typeof(100) is number
the ‘==’ operator will convert the number type, which is on the right side of the operator to string and compare both values
Output of the code snippet:

Comparison will return ‘true’ by Type converting Operator

Q #33) Are Java and JavaScript similar? If not, then what is the difference between Java & JavaScript?

Answer:

Sl No
Java
JavaScript
1	Java is a general-purpose programming language.	JavaScript is a high-level, interpreted scripting language. 
2	Java is based on Object-Oriented Programming (OOPS)concepts.	JavaScript  is both an  object-oriented  as well as a  functional  scripting.
3	Runs in a Java Virtual Machine ( JVM ) or browser.	Runs on a browser only.
4	Java code needs to get compiled as Java class file.	JavaScript  has no  compilation  step.
Instead, an interpreter in the browser reads over the  JavaScript code , interprets each line, and runs it.
So, in short, these languages are not at all linked with or dependent on each other.

Q #34) Which data types are supported by JavaScript?

Answer: JavaScript supports the following Seven primitives data types and Object:

(i) Boolean: This is a logical data type that can have only two values i.e. true or false. When we check the data type of ‘true’ or ‘false’ using typeof operator, it returns a boolean value.

For Example,  typeof(true) // returns boolean

Boolean values can be used for comparing two variables.

For Example, 

1
2
3
var x = 2;
var y = 3;
x==y //returns false
The boolean value can also be used to check a condition

For Example, 

1
2
3
4
5
var x = 2;
var y = 3;
If(x<y){
alert(‘Hi’);
}
If the above condition ‘x<y’ is true, the alert gets pop up.

A boolean variable can be created using the Boolean() function.

1
2
var myvar = ‘Hi';
Boolean(myvar); // This returns true because the 'myvar' value exists
Also, the Boolean object can be created using the new operator as follows:

1
var myobj = new Boolean(true);
(ii) Null: This is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.

For Example, 

1
2
var x = null;
console.log(x);// This returns null
If we check the data type of a using the typeof operator, we get:

1
typeof(x); // This returns object. type of a null value is an object, not null.
(iii) Undefined: This data type means a variable that is not defined. The variable is declared but it does not contain any value.

For Example, 

1
2
3
4
var x;
console.log(x); // This returns undefined
x=10;//Assign value to x
console.log(x); // This returns 10
The variable ‘a’ has been declared but hasn’t been assigned a value yet.
We can assign a value to a:

(iv) Number: This data type can be a floating-point value, an integer, an exponential value, a ‘NaN’ or an ‘Infinity’.

For Example, 

1
2
3
4
5
var x=10; // This is an integer value
var y=10.5; // decimal value
var c = 10e5 // an exponential value
‘xyz’ * 10; //This returns NaN
10/0; // This returns infinity
Number literal can be created by using the Number() function:

1
2
var x = Number(10);
console.log(x);// This returns 10
Also, the number object can be created using the ‘new’ operator as follows:

1
2
var x= new Number(10);
console.log(x); // This returns 10
(v) BigInt: This is a numeric primitive that can represent integers with arbitrary precision. BigInt is created by appending n to the end of an integer

For Example, 

1
const x = 15n;
The number can be converted to a BigInt with the BigInt(number) function.

1
2
3
const x = 251;
const y = BigInt(x);
y === 251n // returns true
(vi) String: This data type is used to represent textual data.

For Example, 

1
2
var strVar1 = “Hi,how are you?”;
var strVar2 = ‘Hi,how are you?’;
New string can also be created using String() function as follows:

1
var strVar3 = String(‘Hi,how are you?’); // This creates a string literal with value ‘Hi,how are you?’
The String() function is also used to convert a non-string value to a string.

1
String(150); // This statement will create a string ‘150’
The string can also be created using the ‘new’ operator

1
2
var strVar4 = new String(“Hi,how are you?”); // This is a string object
console.log(strVar4); // This will return the string ‘Hi,how are you?’
JavaScript strings are immutable i.e. once a string is created, it can’t be modified. But another string can be created using an operation on the original string.

For Example, 

By concatenating two strings using the concatenation operator (+) or String.concat().
By getting substring using String.substr().
(vii) Symbol: This is a unique and immutable primitive value and used as the key of an Object property. Symbols are new to JavaScript in ECMAScript 2015

A Symbol value represents a unique identifier.

For Example, 

1
2
3
var symVar1 = Symbol("Symbol1");
let symVar2 = Symbol("Symbol1"); 
console.log(symVar1 === symVar2); // This returns "false".
So, many symbols are created with the same description, but with different values.

Symbols can’t be auto-converted.

For Example, 

1
2
var symVar1 = Symbol("Symbol1");
alert(symVar1); // This gives TypeError: Cannot convert a Symbol value to a string
This can be worked using toString() as follows:

1
alert(symVar1.toString()); // Symbol(symVar1), this works
Object data type

An object is a value in memory referenced by an identifier.

Object refers to a data structure having data and instructions to work with the data. Objects sometimes refer to real-world things, For Example,  an employee or a car.

For Example, 

In JavaScript objects, values are written as name:value pairs as below:

1
2
3
4
5
6
7
var car1 = {type:"BMW", model:” The BMW X5“, color:"white"};
An object definition can span multiple lines as follows:
var car1 = {
type:"BMW",
model: "The BMW X5",
color:"white"
};
The name:values pairs are called properties. For Example,  ‘type’ is the property, and ‘BMW’ is the value of the property.

Property values are accessed using objectName.propertyName

or objectName[“propertyName”]

For Example,  car1.type or car1[“type”] , returns ‘BMW’

The value of the object car1 can be changed as follows:

1
car1.type = “Audi”;
Now,

1
console.log(car1) ;//This will return {type:"Audi", model:” The BMW X5“ , color:"white"};
Q #35) Is JavaScript a case-sensitive language?

Answer: Yes, JavaScript is a case-sensitive language. The meaning of this is keywords of the language, variables, function names, and any other identifiers that must always be typed with consistent uppercase or lower-case letters.

For Example,  myVar is a different variable to myvar.

Q #36) How to determine what data type an operand belongs to?

Answer:  Operand data type can be found using the typeof operator

It returns a string indicating the type of the operand.

Syntax: typeof operand

typeof(operand)

The operand can be any variable, object or function.

For Example, 

1
2
3
console.log (typeof 10);// expected output: "number"
console.log (typeof 'hello');// expected output: "string"
console.log (typeof<declared But UndefinedVariable>);//expected output: //"undefined";
Q #37) Why JavaScript is called a loosely typed or dynamic language?

Answer:  JavaScript is called a loosely typed or a dynamic language because JavaScript variables are not directly associated with any value type and any variable can be assigned and re-assigned values of all types:

For Example, 

1
2
3
var myvar = ‘abc’; // myvar is string
myvar =true; // myvar is now a boolean
myvar = 10; // myvar is now a number
JavaScript Interview Questions for Experienced
Q #38) What is null in JavaScript?

Answer: The value null represents the intentional absence of any object value.

This is one of JavaScript’s primitive values.

For Example, 

1
2
Var myvar = null;
console.log(myvar); //This will print null
Q #39) What is NaN?

Answer: NaN is a property of a global object representing Not-A-Number.

For Example, 

1
2
3
4
5
6
7
8
9
function checkValue(x) {
if (isNaN(x)) {
return NaN;
}
return x;
}
  
console.log(checkValue ('5')); //expected output: "5"
console.log(checkValue (‘Any value’)); //expected output: NaN
Q #40) How to split a string into array items?

Answer: A string can be split into an array using the JavaScript split() method. This method takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

For Example, 

1
2
3
4
5
myDaysString = ''Sunday,Monday,Tuesday,Wednesday”;
String can be split at comma as below:
myDaysArray= myDaysString.split(',');
console.log(myDaysArray[0]); //output is the first item in the array i.e. Sunday
console.log (myDaysArray[myDaysArray.length-1]); //output is the last //item in the array i.e. Wednesday
Q #41) How to join array items into a string?

Answer: Array items can be joined using the join() method.

For Example, 

1
var myDaysArray= ["Sunday","Monday","Tuesday",”Wednesday”];
Array items are joined into a string as follows:

1
2
myDaysString= myDaysArray.join(',');
console.log(myDaysString);//output is joined string i.e.//Sunday,Monday,Tuesday,Wednesday
Q #42) What type of errors does JavaScript have?

Answer: The following are the 2 types of errors:

Syntax errors: These are typos or errors in spelling in the code which cause the program not to run at all or stop working partway through. Usually, error messages are also provided.
Logic errors: These are errors when the syntax is correct, but the logic or code is inaccurate. Here, the program runs successfully without errors. Butthe output results are incorrect. These are often harder to fix than syntax errors as these programs don’t give any error messages for logic errors.
Q #43) How to handle a large number of choices for one condition in an effective way?

Answer: This is done using switch statements:

For Example, 

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
switch (expression) {
case choice1:
code to be run
break;
  
case choice2:
code to be run
break;
  
:
:
  
default:
code to run if there is no case match
}
Q #44) What is a ternary operator?

Answer: The ternary or conditional is an operator that is used to make a quick choice between two options based on a true or false test.

This can be used as a substitute forif…else block when having two choices that are chosen between a true/false condition.

For Example, 

1
2
3
4
if (some condition)
result = ‘result 1’;
else
result = ‘result 2’;
The same code can be written using a ternary operator in a single statement as follows:

1
result = (condition)?‘result 1’:‘result 2’;
Q #45) Suppose, there is an object called a person

const person = {

name : {

first: ‘Bob’,

last: ‘Smith’

}

};

Which of the following is the correct way of accessing the object property ‘first’ ?

person.name.first, or
person[‘name’][‘first’] ?
Answer: Both are correct ways. i.e. using dots like person.name.first or using bracket notation like person[‘name’][‘first’]

Q #46) What is “this”?

Answer: The ‘this’ keyword refers to the current object the code is being written inside.

This is to ensure that the correct values are used when a member’s context changes

For Example, there are two different instances of a person having different names and it is required to print their own name in the alert as follows:

1
2
3
4
5
6
const person1 = {
name: 'Tom',
greeting: function() {
alert('Good Morning! I am ' + this.name + '.');
}
}
Here, output is Good Morning! I am ‘Tom’

1
2
3
4
5
6
const person2 = {
name: 'Jerry',
greeting: function() {
alert('Good Morning! I am ' + this.name + '.');
}
}
Here, the output is Good Morning! I am ‘Jerry’

Q #47) What are Anonymous functions?

Answer: Anonymous functions are functions without having any name and won’t do anything on their own. These are generally used along with an event handler.

For Example, in the following code, anonymous function code i.e. alert(‘Hi’); would run on click of the associated button:

1
2
3
4
5
var myButton = document.querySelector('button');
  
myButton.onclick = function() {
alert('Hi');
}
An anonymous function can also be assigned to the value of a variable.

For Example, 

1
2
3
var myVar = function() {
    alert('Hi');
}
This function can be invoked using:

1
myVar();

Top 30 JavaScript Design Patterns Interview Questions
Last Updated : 23 Jul, 2025
The Design Patterns are basically defined as the reusable and generalized solutions to the common problems that arise during software design and development. Design patterns are not specific to any particular programming language or technology instead, they provide abstract templates or blueprints for solving recurring design-related problems. They help software developers create well-structured, maintainable, and flexible code by promoting best practices and proven solutions.

JavaScript Design Patterns Interview Questions

1. What is Design Pattern in JavaScript?
2. Types of Design Pattern in JavaScript?
3. What are the Main advantages of using design pattern in JavaScript?
4. How does the Module design pattern work in JavaScript?
5. What is the Observer pattern?
6. Explain the Singleton design pattern in JavaScript.
7. How does the Strategy pattern work in JavaScript?
8. Explain the Factory Design Pattern.
9. How does the Prototype pattern work?
10. What is the Decorator pattern in JavaScript?
11. What is Known as Gang of Four?
12. Define the MVC (Model-View-Controller) pattern in JavaScript.
13. Which is the most common used design pattern in javascript?
14. What do you understand by Dependency Injection pattern and how do you implemented it in JavaScript?
15. Explain the Publish-Subscribe pattern and provide an example in JavaScript.
16. How is the Strategy pattern different from the State pattern?
17. Explain the Proxy pattern in JavaScript.
18. How does the Template Method pattern work?
19. Explain the Chain of Responsibility pattern and provide an example in JavaScrip.
20. How is the Factory pattern different from the Abstract Factory pattern?
21. Describe the Proxy pattern and provide a real-world example in JavaScript
22. Explain the Command pattern and provide a use case in JavaScript
23. Describe the Memento pattern with example
24. What is the Revealing Module pattern?
25. How does the State Pattern work, and when it is used in JavaScript?
26. Explain the Flux architecture and how it utilizes the Observer Pattern
27. How does Module Pattern differ from the Revealing Module Pattern?
28. Differentiate between the Factory and Abstract Factory Patterns
29. Explain the Flux Pattern and its relationship with React
30. Example of Revealing Module pattern in JavaScript
Top 30 Interview Questions for Design Patterns in JavaScript
1. What is Design Pattern in JavaScript?
A design pattern is the reusable solution to the common problem in software design and software development. It is basically a general template that can be applied to solve a particular design problem in code.

2. Types of Design Pattern in JavaScript?
There are mainly three types of design patterns:

Creational Design Pattern
Structural Design Pattern
Behavioral Design Pattern
3. What are the Main advantages of using design pattern in JavaScript?
There are so many advantages of using design pattern let's see some of them are:

The Design Patterns in JavaScript capture software engineering experiences.
They are reusable, Scalable and can be used in multiple projects.
They provide transparency to software design.
The Design Patterns provide a solution that helps to define the system architecture.
4. How does the Module design pattern work in JavaScript?
The module pattern is used in JavaScript to provide a structure for organizing code into reusable and maintainable modules. It provides a way to encapsulate variables and functions within a single unit of code, making it easier to manage complex applications.

Let's understand by the help of example:




// Module definition
var MyModule = (function() {
  // Private variables and functions
  var privateVariable = 'I am private';
​
  function privateFunction() {
    console.log('This is a private function');
  }
​
  // Public API (exposed to the outside world)
  return {
    publicVariable: 'I am public',
​
    publicFunction: function() {
      console.log('This is a public function');
      // Accessing private members
      console.log(privateVariable);
      privateFunction();
    }
  };
})();
​
// Using the Module
console.log(MyModule.publicVariable); // Outputs: I am public
MyModule.publicFunction(); // Outputs: This is a public function, I am private, This is a private function

Output
I am public
This is a public function
I am private
This is a private function
5. What is the Observer pattern?
The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Example:




// Subject
class Subject {
  constructor() {
    this.observers = [];
  }
​
  addObserver(observer) {
    this.observers.push(observer);
  }
​
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
​
  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }
  
  // Some state change in the subject
  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }
}
​
// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }
​
  update() {
    console.log(`${this.name} has been notified of the state change.`);
  }
}
​
// Example usage
const subject = new Subject();
​
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
​
subject.addObserver(observer1);
subject.addObserver(observer2);
​
subject.setState("New State");

Output
Observer 1 has been notified of the state change.
Observer 2 has been notified of the state change.
In this example, Subject maintains a list of observers, and when its state changes (using the setState method), it notifies all registered observers through the notifyObservers method. Observers, in turn, implement an update method to define what actions they should take when notified.

6. Explain the Singleton design pattern in JavaScript
The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It is often used for logging, driver objects, caching, thread pools, or database connections.




var Singleton = (function () {
  var instance;
​
  function createInstance() {
    // Private constructor logic here
​
    return {
      // Public methods and properties
      getInstanceInfo: function () {
        return "I am a singleton instance!";
      }
    };
  }
​
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
​
// Usage
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();
​
console.log(singletonInstance1 === singletonInstance2); // true
console.log(singletonInstance1.getInstanceInfo()); // "I am a singleton instance!"

Output
true
I am a singleton instance!
In this example, the Singleton module is an immediately invoked function expression (IIFE) that encapsulates the logic for creating a singleton instance. The instance variable is used to store the reference to the single instance.

7. How does the Strategy pattern work in JavaScript?
Strategy pattern is a behavioral design pattern that allows the behavior of an object to be selected at runtime. It is one of the Gang of Four (GoF) design patterns, which are widely used in object-oriented programming.

The Strategy pattern is based on the idea of encapsulating a family of algorithms into separate classes that implement a common interface. The pattern consists of three main components: the Context, the Strategy, and the Concrete Strategy.

The Context is the class that contains the object whose behavior needs to be changed dynamically.
The Strategy is the interface or abstract class that defines the common methods for all the algorithms that can be used by the Context object.
The Concrete Strategy is the class that implements the Strategy interface and provides the actual implementation of the algorithm.
Here's a simple example to illustrate how it works:




// Define a set of strategies
​
// Strategy 1
const strategyA = {
  execute: function () {
    console.log("Executing Strategy A");
  },
};
​
// Strategy 2
const strategyB = {
  execute: function () {
    console.log("Executing Strategy B");
  },
};
​
// Context that will use the strategy
function Context(strategy) {
  this.strategy = strategy;
​
  // Method to set a new strategy
  this.setStrategy = function (strategy) {
    this.strategy = strategy;
  };
​
  // Method to execute the current strategy
  this.executeStrategy = function () {
    this.strategy.execute();
  };
}
​
// Example usage
​
const context = new Context(strategyA);
​
context.executeStrategy(); // Output: Executing Strategy A
​
context.setStrategy(strategyB);
context.executeStrategy(); // Output: Executing Strategy B

Output
Executing Strategy A
Executing Strategy B
In this example, we have two strategies (strategyA and strategyB) that encapsulate different algorithms. The Context object is responsible for using the current strategy and can switch between different strategies at runtime using the setStrategy method.

8. Explain the Factory Design Pattern.
The factory method is a creational design pattern, i.e., related to object creation. The Factory Method pattern is used to create objects without specifying the exact class of object that will be created. This pattern is useful when you need to decouple the creation of an object from its implementation.




// Product constructor
function Car(model, year) {
    this.model = model;
    this.year = year;
}
​
// Factory function
function CarFactory() {}
​
CarFactory.prototype.createCar = function (model, year) {
    return new Car(model, year);
};
​
// Usage
const factory = new CarFactory();
const car1 = factory.createCar('Toyota', 2022);
const car2 = factory.createCar('Honda', 2023);
​
console.log(car1); // Car { model: 'Toyota', year: 2022 }
console.log(car2); // Car { model: 'Honda', year: 2023 }

Output
Car { model: 'Toyota', year: 2022 }
Car { model: 'Honda', year: 2023 }
9. How does the Prototype pattern work?
The Prototype pattern creates new objects by copying an existing object, known as the prototype. It is useful when creating many similar objects.

Example:




// Define a prototype object
var carPrototype = {
  drive: function() {
    console.log("Driving the car!");
  },
  stop: function() {
    console.log("Stopping the car!");
  }
};
​
// Create a new object using the prototype
var myCar = Object.create(carPrototype);
​
// Now, myCar has the drive and stop methods
myCar.drive(); // Output: Driving the car!
myCar.stop();  // Output: Stopping the car!

Output
Driving the car!
Stopping the car!
10. What is the Decorator pattern in JavaScript?
The Decorator pattern allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.




function Coffee() {
  this.cost = function () {
    return 5;
  };
}
​
function MilkDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 2;
  };
}
​
function SugarDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 1;
  };
}
​
var coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
​
console.log(coffee.cost()); // Output: 8

Output
8
11. What is Known as Gang of Four?
The four authors who published the book Design Patterns Elements of Reusable Object-Oriented Software are known as Gang of Four. The name of four authors are Erich Gamma, Ralph Johnson, Richard Hel, and John Vlissides.

12. Define the MVC (Model-View-Controller) pattern in JavaScript
MVC is an architectural design pattern that separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates the model and view).

13. Which is the most common used design pattern in javascript?
One of the most commonly used design patterns in JavaScript is the Module Pattern. The Module Pattern is a way to encapsulate a set of functionalities, creating a modular and organized structure for your code. It leverages closures to provide private and public members, allowing for better control over the scope and access to variables and functions.

14. What do you understand by Dependency Injection pattern and how do you implemented it in JavaScript?
The Dependency Injection pattern involves supplying an external dependency to a software component rather than creating it within the component. In JavaScript, this can be achieved through constructor injection or property injection.

15. Explain the Publish-Subscribe pattern and provide an example in JavaScript.
The Publish-Subscribe pattern, also known as the Observer pattern, allows multiple objects to listen and respond to events. This pattern is used to establish communication between objects without them being directly coupled.




// Publisher (Subject)
class NewsAgency {
  constructor() {
    this.subscribers = [];
  }
​
  // Method to subscribe a new observer
  subscribe(observer) {
    this.subscribers.push(observer);
  }
​
  // Method to unsubscribe an observer
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
  }
​
  // Method to notify all subscribers about a news update
  notify(news) {
    this.subscribers.forEach(subscriber => {
      subscriber.update(news);
    });
  }
}
​
// Subscriber (Observer)
class NewsSubscriber {
  constructor(name) {
    this.name = name;
  }
​
  // Update method to be called when notified
  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }
}
​
// Example usage
const newsAgency = new NewsAgency();
​
const subscriber1 = new NewsSubscriber("Subscriber 1");
const subscriber2 = new NewsSubscriber("Subscriber 2");
​
// Subscribers subscribe to the news agency
newsAgency.subscribe(subscriber1);
newsAgency.subscribe(subscriber2);
​
// News agency notifies subscribers about a news update
newsAgency.notify("Breaking News: Important event!");
​
// Output:
// Subscriber 1 received news: Breaking News: Important event!
// Subscriber 2 received news: Breaking News: Important event!

Output
Subscriber 1 received news: Breaking News: Important event!
Subscriber 2 received news: Breaking News: Important event!
16. How is the Strategy pattern different from the State pattern?
The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable and the State pattern allows an object to alter its behavior when its internal state changes.

17. Explain the Proxy pattern in JavaScript.
The Proxy pattern provides a surrogate or placeholder for another object to control access to it. It is useful for implementing lazy loading, access control, and logging.

Let's see a simple example of using the Proxy pattern to create a basic logging proxy:




// Original object
const realSubject = {
  request: function() {
    console.log("Real subject handles the request.");
  }
};
​
// Proxy handler
const handler = {
  request: function() {
    console.log("Proxy handles the request before forwarding it to the real subject.");
    realSubject.request();
  }
};
​
// Creating a Proxy
const proxy = new Proxy(realSubject, handler);
​
// Using the Proxy
proxy.request();

Output
Real subject handles the request.
In this example, the proxy object intercepts the request operation and logs a message before forwarding the request to the realSubject. You can customize the behavior of the proxy by defining different traps in the handler object.

18. How does the Template Method pattern work?
The Template Method pattern defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

Example:




// Abstract class with the template method
function AbstractClass() {}
​
AbstractClass.prototype.templateMethod = function () {
  this.step1();
  this.step2();
  this.step3();
};
​
AbstractClass.prototype.step1 = function () {
  console.log("AbstractClass: Step 1");
};
​
AbstractClass.prototype.step2 = function () {
  console.log("AbstractClass: Step 2");
};
​
AbstractClass.prototype.step3 = function () {
  console.log("AbstractClass: Step 3");
};
​
// Concrete subclass inheriting from AbstractClass
function ConcreteClass() {}
​
ConcreteClass.prototype = Object.create(AbstractClass.prototype);
ConcreteClass.prototype.constructor = ConcreteClass;
​
// Override specific steps in the template method
ConcreteClass.prototype.step2 = function () {
  console.log("ConcreteClass: Step 2 overridden");
};
​
// Usage
const concreteObject = new ConcreteClass();
concreteObject.templateMethod();

Output
AbstractClass: Step 1
ConcreteClass: Step 2 overridden
AbstractClass: Step 3
19. Explain the Chain of Responsibility pattern and provide an example in JavaScript.
The Chain of Responsibility pattern passes a request along a chain of handlers. In JavaScript, this is often used in event handling where multiple objects can handle an event, and the event is passed through a chain of handlers until one handles it.




// Step 1: Request
class ExpenseRequest {
  constructor(amount) {
    this.amount = amount;
  }
}
​
// Step 2: Handler
class Approver {
  constructor(name, approvalLimit) {
    this.name = name;
    this.approvalLimit = approvalLimit;
    this.nextApprover = null; // Reference to the next handler in the chain
  }
​
  setNextApprover(nextApprover) {
    this.nextApprover = nextApprover;
  }
​
  processRequest(expenseRequest) {
    if (expenseRequest.amount <= this.approvalLimit) {
      console.log(`${this.name} approved the expense request of $${expenseRequest.amount}`);
    } else if (this.nextApprover) {
      console.log(`${this.name} cannot approve. Passing to ${this.nextApprover.name}`);
      this.nextApprover.processRequest(expenseRequest);
    } else {
      console.log(`No one can approve the expense request of $${expenseRequest.amount}`);
    }
  }
}
​
// Step 3: ConcreteHandlers
const manager = new Approver("Manager", 1000);
const director = new Approver("Director", 5000);
const vp = new Approver("VP", 10000);
​
manager.setNextApprover(director);
director.setNextApprover(vp);
​
// Step 4: Client
const expenseRequest1 = new ExpenseRequest(800);
const expenseRequest2 = new ExpenseRequest(4500);
const expenseRequest3 = new ExpenseRequest(12000);
​
// The client initiates the request and starts the chain
manager.processRequest(expenseRequest1);
manager.processRequest(expenseRequest2);
manager.processRequest(expenseRequest3);

Output
Manager approved the expense request of $800
Manager cannot approve. Passing to Director
Director approved the expense request of $4500
Manager cannot approve. Passing to Director
Director cannot appr...
20. How is the Factory pattern different from the Abstract Factory pattern?
The Factory pattern involves creating objects through a common interface, while the Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

21. Describe the Proxy pattern and provide a real-world example in JavaScript.
The Proxy pattern provides a surrogate or placeholder for another object to control access to it. In JavaScript, a common example is the Proxy API, which allows you to create a proxy for another object with custom behavior.




// Real subject
class RealSubject {
  request() {
    console.log("RealSubject: Handling request");
  }
}
​
// Proxy
class ProxySubject {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }
​
  request() {
    // Perform some additional logic before forwarding the request to the real subject
    console.log("ProxySubject: Performing pre-request actions");
    
    // Call the request method of the real subject
    this.realSubject.request();
    
    // Perform some additional logic after the request is handled by the real subject
    console.log("ProxySubject: Performing post-request actions");
  }
}
​
// Usage
const realSubject = new RealSubject();
const proxy = new ProxySubject(realSubject);
​
// Accessing the real subject through the proxy
proxy.request();

Output
ProxySubject: Performing pre-request actions
RealSubject: Handling request
ProxySubject: Performing post-request actions
22. Explain the Command pattern and provide a use case in JavaScript.
The Command pattern involves encapsulating a request as an object, allowing for parameterization of clients with different requests, queuing of requests, and logging of the requests. In JavaScript, it's commonly used in UI components and event handling.

23. Describe the Memento pattern with example.
The Memento pattern captures and externalizes an object's internal state so that the object can be restored to this state later.

Let's see the example:




// Originator: Object whose state needs to be saved
class Originator {
  constructor(state) {
    this.state = state;
  }
​
  // Save the current state to a memento
  save() {
    return new Memento(this.state);
  }
​
  // Restore the state from a memento
  restore(memento) {
    this.state = memento.getState();
  }
​
  // Modify the state
  setState(newState) {
    this.state = newState;
  }
​
  // Display the current state
  displayState() {
    console.log(`Current State: ${this.state}`);
  }
}
​
// Memento: Object that stores the state of the originator
class Memento {
  constructor(state) {
    this.state = state;
  }
​
  getState() {
    return this.state;
  }
}
​
// Caretaker: Manages and stores mementos
class Caretaker {
  constructor() {
    this.mementos = [];
  }
​
  addMemento(memento) {
    this.mementos.push(memento);
  }
​
  getMemento(index) {
    return this.mementos[index];
  }
}
​
// Example usage
const originator = new Originator("Initial State");
const caretaker = new Caretaker();
​
originator.displayState(); // Current State: Initial State
​
// Save the current state
caretaker.addMemento(originator.save());
​
// Modify the state
originator.setState("Modified State");
originator.displayState(); // Current State: Modified State
​
// Restore the state from the memento
originator.restore(caretaker.getMemento(0));
originator.displayState(); // Current State: Initial State

Output
Current State: Initial State
Current State: Modified State
Current State: Initial State
24. What is the Revealing Module pattern?
The Revealing Module pattern is defined as an extension of the Module pattern, where only the parts of the module pattern that should be public are revealed, and keeping the rest private.

25. How does the State Pattern work, and when it is used in JavaScript?
The State Pattern basically allows an object to alter its behavior when its internal state changes. The pattern represents states as separate classes and delegates the state-specific behavior to these classes. This can make the object's behavior more modular and easier to extend.




// State interface
class State {
  handleState() {}
}
​
// Concrete state 1
class ConcreteState1 extends State {
  handleState() {
    console.log("Handling state 1");
  }
}
​
// Concrete state 2
class ConcreteState2 extends State {
  handleState() {
    console.log("Handling state 2");
  }
}
​
// Context
class Context {
  constructor() {
    this.state = new ConcreteState1();
  }
​
  setState(state) {
    this.state = state;
  }
​
  request() {
    this.state.handleState();
  }
}
​
// Example usage
const context = new Context();
​
context.request(); // Output: Handling state 1
​
context.setState(new ConcreteState2());
context.request(); // Output: Handling state 2

Output
Handling state 1
Handling state 2
26. Explain the Flux architecture and how it utilizes the Observer Pattern.
Flux is an architectural pattern used in building client-side web applications. It involves unidirectional data flow and uses the Observer Pattern to handle updates between different components of the application. It's commonly associated with React applications.

27. How does Module Pattern differ from the Revealing Module Pattern?
The Module Pattern is a way to encapsulate private and public members using closures. The Revealing Module Pattern is a variation where the pattern reveals only the necessary functions and properties.

28. Differentiate between the Factory and Abstract Factory Patterns
Factory Pattern: Creates objects without specifying the exact class of the object to be created. It uses a method to create objects.
Abstract Factory Pattern: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
29. Explain the Flux Pattern and its relationship with React
The Flux Pattern is an architecture for managing state in a JavaScript application. It is commonly associated with React.js. The key components are the dispatcher, stores, and views. Actions trigger updates in the stores, which then notify the views to re-render. This unidirectional flow helps in managing complex state in large applications.

30. Example of Revealing Module pattern in JavaScript



const RevealingModule = (function () {
    let privateVar = 10;
​
    function privateFunction() {
        console.log("Private function");
    }
​
    function publicFunction() {
        console.log("Public function");
    }
​
    return {
        publicFunction: publicFunction
    };
})();

Output
Conclusion
These interview questions of design pattern in JavaScript cover a wide range of topics related to design patterns in JavaScript and software design principles. Preparing answers to these questions will help you demonstrate your understanding of JavaScript design patterns and their practical applications in interviews.
