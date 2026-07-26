Core Mockito Interview Questions
Enlisted below are the most commonly asked questions about Mocking Frameworks.
Q #1) Why do we need mocking?
Answer: There are a lot of use cases of mocking that aid in unit testing of the code under isolation and make the test highly repeatable and predictable.
Mocking is required when:
a) The component under test has dependencies that are not yet implemented, or the implementation is in progress.
A good example can be a REST API endpoint, which will be available later at some point in time, but you have consumed it in the code via a dependency.
Now, as the real implementation is still not available, you really know most of the time what the expected response of that API is. Mocks allow you to test those kinds of integration.
b) Component updates the state in the system.
Example: DB calls – you would not want to update your DB with data that is just for testing. This might result in corrupting the data; the availability of the DB is another challenge when the test is executed.
Thus, to avoid such behavior, DB calls could be mocked in the component under test. Hence, there is no direct coupling of the DB and the component under test.
Q #2) Difference between doReturn and thenReturn.
Answer: Mockito provides two different syntaxes for creating stubs, like:
•	doReturn and thenReturn
•	doNothing (no thenNothing)
•	doThrow and thenThrow
Both these methods set up stubs and can create/setup stubs and could be used interchangeably at times.
So how do both of these differ?
a) The thenReturn way of stubbing is a type-safe way of setting up stubs. What this essentially means is that it does a compile-time check against the return types that you want to stub to.
Let’s understand this with an example:
Assume a method getItemDetails on mockedItemService which returns an object of type ItemSku. So with thenReturn, you will not be able to return anything other than of type ItemSku, but with doReturn, you can set up the stub to return anything, and the test will fail (or throw an exception) during execution.
// works
1	when(mockedItemService.getItemDetails(123)).thenReturn(new ItemSku());
// throws compile time exception
1	when(mockedItemService.getItemDetails(123)).thenReturn(expectedPrice);
// with doReturn,  both the stub setup works as it’s not compile safe.
// here we are trying to return an object of type double, which still works and does not throw any compile time warning.
1
2	doReturn(expectedPrice).when(mockedItemService.getItemDetails(123));
doReturn(new ItemSku()).when(mockedItemService.getItemDetails(123));
b) Another important difference between these 2 ways to the stub is for Mocked objects, apart from compile safety, there is not much difference.
However, for Spied objects, “thenReturn” kind of stub setup will not work, as it will result in calling the real method before the stubbed response is returned as the call and not on a Mock, but on Spy, which is wrapping a real object instance.
So suppose there is a spy named spiedObject and it has a method testMethod which returns an integer, then to setup a stub on this you will need to use doReturn instead of thenReturn.
1	doReturn(10).when(spiedObject.testMethod());
Q #3) When and why should a spy be used?
Answer: Spy is a type of partial mock supported by Mockito.
This essentially means is a type of instance where:
a) When no mock is set up, any interaction on spy results in calling the real methods. But it still allows you to verify the interactions with the spied object – was a method called, how many times the method was called, what were the arguments using which the method was called, etc.
b) It gives you the flexibility to set up partial mocks.
For example, if you have an object with 2 methods – method1 and method2, and you want method1 to be called and method2 to be mocked. Spies provide this kind of setup.
So, the difference between a mock and a stub in simple terms is that a mock is created from a type and not from an instance, whereas a stub wraps an actual instance of the class object.
Q #4) Why can’t static methods be mocked using Mockito?
Answer: Static methods are associated with the class itself and not any particular instance of the class. This means that all instances/objects of the class use the same instance of the static method.
Static methods are more like procedural code and are mostly used in legacy systems in general.
Mock libraries typically create mocks by dynamical instance creation at runtime, either through interfaces or through inheritance, and as the static method is not associated with any instance, mocking frameworks (like Mockito, EasyMock, etc) can’t mock Static methods.
Frameworks like PowerMock, which do have support for static methods, perform bytecode manipulation at runtime to mock static methods.
Q #5) What’s the need to verify that the mock was called?
Answer: Setting up a stub on a mocked object (or a spied instance) does not guarantee whether the stubbed setup was even invoked.
“verification” matchers, give a facility to validate whether the stub that was set up was invoked or not, how many times was the call made, what arguments the stubbed method called with, etc.
In essence, it allows us to verify the test setup and expected outcome more robustly.
Q #6) What is good testable code?
Answer:
A few points about testable code (meaning that could be easily unit-tested) include:
•	Reduced no of dependencies or tight coupling – Example: Dependencies should be injected rather than instantiated directly.
•	Code that adheres to SRP (Single Responsibility Principle) – This essentially means that the class should not have multiple reasons to change. Adherence to SRP avoids classes creating dependency on itself and keeps the code cohesive and clean.
•	Less / Minimal usage of static methods and final classes – These indicate code smells and were mostly associated with the legacy code.
Scenario-Based Interview Questions on Mockito
Q #7) What are the limitations of Mockito?
Answer: Mockito is a framework of choice for most of Java-based projects. It is easy to implement, read, and understand.
Some of the drawbacks or limitations in terms of functionality are:
•	Its inability to mock static methods.
•	Constructors, private methods, and final classes cannot be mocked.
Q #8) Which frameworks can support mocking Private and Static methods?
Answer: Frameworks like PowerMockito (extensions of the Mockito framework), JMockit, etc. do provide means to mock private and static methods.
Q #9) Mocking/Stubbing default methods in an Interface in Java 8.
Answer: With Java 8’s implementation of default methods in interfaces, Mockito provides out of box support to mock such default methods. (Please note that this support was introduced from Mockito 2 onwards).
These methods can be mocked/stubbed like any other method of a class or interface.
Q #10) How can the order of stub invocations be verified in Mockito?
Answer: When you want to verify the order in which mocks were called, Mockito’s “InOrder” interface can be used.
During the test, you simply have to set/create an Inorder object, listing down a list of mock objects on which the order of mocks needs to be ascertained (if there are multiple methods on the same mock and there is no other mock that needs to be verified, then it’s sufficient to mention the mocked class only once).
Consider the test given below, which defines an object of InOrder and mentions 2 occurrences of mockDatabaseImpl
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
19	@Test
public void calculateSumAndStore_withValidInput_verifyMockOrder()
{
// Arrange
studentScores = new StudentScoreUpdates(mockDatabaseImpl);
int[] scores = {60,70,90};
  
Mockito.doNothing().when(mockDatabaseImpl).updateScores(anyString(), anyInt());
Mockito.doReturn("A").when(mockDatabaseImpl).getGrade(anyInt());
  
InOrder inorder = inOrder(mockDatabaseImpl);
  
// Act
studentScores.calculateSumAndStore("Student1", scores);
  
// Assert
inorder.verify(mockDatabaseImpl).updateScores(anyString(),anyInt());
inorder.verify(mockDatabaseImpl).getGrade(anyInt());
}
Also, for reference, listing down the code of the method under test will be helpful to understand the order of test execution:
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
13	public void calculateSumAndStore(String studentId, int[] scores)
{
int total = 0;
for(int score : scores)
{
total = total + score;
}
// write total to DB
databaseImpl.updateScores(studentId, total);
  
databaseImpl.getGrade(total);
  
}
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
13	public void calculateSumAndStore(String studentId, int[] scores)
{
int total = 0;
for(int score : scores)
{
total = total + score;
}
// write total to DB
databaseImpl.updateScores(studentId, total);
  
databaseImpl.getGrade(total);
  
}
As seen above, databaseImpl first calls updateScores and then calls getGrade.
So, if you are writing a unit test using Mockito, for this, and you need to ensure the order of the calls on databaseImpl, refer to the test code and ensure that the assertions are made as per the expected order.
In the above example, if I change the order of asserts, then it will cause the test to fail except “VerificationInOrderFailure”.
After changing the assert order, the code looks as shown below:
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
19	@Test
public void calculateSumAndStore_withValidInput_verifyMockOrder()
{
// Arrange
studentScores = new StudentScoreUpdates(mockDatabaseImpl);
int[] scores = {60,70,90};
  
Mockito.doNothing().when(mockDatabaseImpl).updateScores(anyString(), anyInt());
Mockito.doReturn("A").when(mockDatabaseImpl).getGrade(anyInt());
  
InOrder inorder = inOrder(mockDatabaseImpl);
  
// Act
studentScores.calculateSumAndStore("Student1", scores);
  
// Assert
inorder.verify(mockDatabaseImpl).updateScores(anyString(),anyInt());
inorder.verify(mockDatabaseImpl).getGrade(anyInt());
}
The above test execution throws an exception with type:
“VerificationInOrderFailure” org.mockito.exceptions.verification.VerificationInOrderFailure:
Verification in order failure
Wanted but not invoked:
mockDatabaseImpl.updateScores(
   isA(java.lang.String),
   isA(java.lang.Integer)
Q #11) Returning multiple values against consecutive method calls
Answer: To return different values for multiple invocations of the same stubbed method, Mockito provides 3 approaches as given below:
a) Using comma separated: This works with the return.
For example, taking the above code sample, let us try to set a consecutive stub for method getGrade, which will return different values depending on the sequence of iterations:
1	when(mockDatabaseImpl.getGrade(anyInt())).thenReturn("A","B", "C");
This means that when getGrade methods get called in the method under test, the first invocation will return “A”, the second invocation will return “B”, and so on.
b) Consecutive thenReturn: This is an approach that is chained with thenReturn statements. Applying chained calls to the same example will look as shown below.
1	when(mockDatabaseImpl.getGrade(anyInt())).thenReturn("A").thenReturn("B").thenReturn("C");
c) Consecutive doReturn: The last approach is using doReturn in the chained format as above.
1	doReturn("A").doReturn("B").doReturn("C").when(mockDatabaseImpl).getGrade(anyInt())
Q #12) What are the different types of mocking frameworks and how do they work?
Answer: Types of the Mocking framework and how they work are explained below.
There are broadly 2 categories of mocking frameworks:
1.	Proxy-based – Example, Mockito, EasyMock, etc.
2.	Bytecode based – Example, PowerMock, JMockit, etc.
Let’s compare both these frameworks on different parameters.
	Proxy based	Bytecode based
		
Simplicitly	More simple and easy to use	Might involve complex mock setup logic
Mode of creation	A proxy or fake object which does not actually require instance of class / interface is created	It essentially involves creating objects and at runtime manipulates the instances for the mocked/stubbed behavior
Functionality	Mocking classes and interfaces	In addition to classes and interfaces, allows mocking static methods, final classes etc
Java dependency	Not very tightly coupled to Java versions	Since these frameworks involve bytecode manipulation they are tightly coupled and might not be backward/forward compatible across java versions.
Examples	Mockito, EasyMock etc.	PowerMock, JMockit etc.

