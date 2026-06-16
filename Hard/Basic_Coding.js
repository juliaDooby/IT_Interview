Basic Coding/Programming Interview Questions
Q #1) How can you reverse a string?

Answer: String is reversed with the following algorithm:

Initiate
The string that is to be reversed is declared.
Get the length of the string.
Start a loop and then swap the positions of the array elements.
Keep the exchanged positions.
Print the reversed string.
Q #2) What is a palindrome string?

Answer: After the string is reversed as discussed in Q #1, we need to put the following condition:

Code snippet:

1
2
3
4
5
if(actualtxt.equals(reversetxt)){
   return “Palindrome”;
else
     return “Not Palindrome”;
}
Thus, a palindrome string is one that, on reversing, remains the same; for example, ‘madam’ is a palindrome string.

Q #3) How to get the matching characters in a string?

Answer: To get the matching characters in a string, the following steps are followed:

Hash Map data structure is taken, which works with key-value pairs.
Loop through the strings, character by character, and verify if that character of the string exists in the hash map or not.
If the result is true, the counter for the character in the hash map is increased; otherwise, set the count to 1.
Once the loop ends, the HashMap is traversed and prints the characters with over 1 count.
Code snippet:

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
HashMap<Character, Integer> mp = new Hasheem<> ();
   for (int j = 0; j<text.length (); j++) {
       char ch = text.charAt(j);
          if(mp.containsKey(ch)){
                int cnt = mp.get(ch);
             mp.put(ch, ++cnt);
         }else{
            mp.put(ch, 1);
          }
}
Set<Character> charct = map.keySet();
  
for (Character ch: charct){
     int c= mp.get(ch);
     if(c>1){
        System.out.println(ch+ " - " + c);
     }
}
Q #4) How to get the non-matching characters in a string?

Answer: To get the non-matching characters in a string, the following steps are followed:

Hash Map data structure is taken, which works with key-value pairs.
Loop through the string, character by character and verify if that character of the string exists in the hash map or not.
If the result is true, the counter for the character in the hash map is increased, or otherwise, put a count as 1.
Once the loop ends, the Hash map is traversed, and the characters with a count equal to 1.
Code snippet:

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
HashMap<Character, Integer> mp = new Hasheem<> ();
   for (int j = 0; j<text.length (); j++) {
       char ch = text.charAt(j);
          if(mp.containsKey(ch)){
                int cnt = mp.get(ch);
             mp.put(ch, ++cnt);
         }else{
            mp.put(ch, 1);
          }
}
Set<Character> charct = map.keySet();
for (Character ch: charct){
     int c= mp.get(ch);
     if(c==1){
        System.out.println(ch+ " - " + c);
     }
}
Q #5) How to calculate the number of vowels and consonants in a string?

Answer: Here’s how to count vowels and consonants in a string:

Get the string on which the count has to be performed.
Run a loop from 0 to the length of the string.
Take a single character at a time and verify if it is a part of the group of vowels.
If the result is true, increase the count of vowels; otherwise, increment the count of consonants.
Code snippet:

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
for (int k = 0; k < text.length(); k++) {
    char c = text.charAt(k);
    if (c == 'a' || c == 'e' || c == 'i' || 
       c == 'o' || c == 'u') 
              owls += vowls
else
            consonts += consonts
}
System.out.println("Vowel count is " + vowls); 
System.out.println("Consonant count is: " + consonts); 
Q #6) How do you prove that the two strings are anagrams?

Answer: Two strings are called anagrams if they accommodate a similar group of characters in a varied sequence.

To check if two strings are anagrams, the following steps are followed:

Initialize two strings in two variables.
Check if the length of the two strings is similar; if not, then the strings are not an anagram.
If the result is true, take the two strings and store them in a character array.
Sort the two character arrays, then check if the two sorted arrays are alike.
If the result is true, the two strings are anagrams; otherwise, not anagrams.
Code snippet:

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
if (str1.length() != str2.length()) {  
       System.out.println(str1 + " and " +str2 + " not anagrams string");  
}else{
        char[] anagram1 = str1.toCharArray();  
         char[] anagram2 = str2.toCharArray(); 
         Arrays.sort(anagram1);  
         Arrays.sort(anagram2);
          anagrmstat = Arrays.equals(anagram1, anagram2); 
}
if (anagrmstat == true) {
     System.out.println(str1 + " and " +str2 + " anagrams string");  
}else{
    System.out.println(str1 + " and " +str2 + " not anagrams string");  
        }
}
Q #7) Find the count for the occurrence of a particular character in a string.

Answer: To count the occurrence of a particular character in a string, the following steps are followed:

Start with a string and a particular character whose occurrence shall be counted.
Start a loop from 0 to the length of the string.
Compare if a particular character of the string equals the character that is being searched.
If the result is true, then increment the value of the counter.
Code snippet:

1
2
3
4
5
6
7
for (int l=0; l<strng.length(); l++)
{
    if ( strng.charAt(l)== searchedcharacter)
          rslt ++;
  
}
System.out.println(rslt);
Q #8) How to verify if two strings are rotations mutually?

Answer: To verify if two strings are rotations mutually, the following steps are followed:

Initialize the two strings in two variables.
Check if the length of two strings is similar; if not, return false.
Join the string to itself.
Verify if the string that is rotated is present in the joined string.
If the result is true, the second string is a rotation of the first string.
Code snippet:

1
2
3
4
String concat  = org_string + org_string;
 if (concat.indexOf (rotat) !  = -1) {
     return true;
}
Q #9) How to calculate the number of numerical digits in a string?

Answer: To calculate the number of digits in a string, follow these steps:

Get the string on which the count has to be performed
Use the replaceAll function, which replaces all the numerical digits with “”.
Get the length of the string without digits.
Code snippet:

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
package introduction;
  
public class GG {
  
       public static void main(String[] args) {
               // TODO Auto-generated method stub
               String str = "TESTu45";
                str=str.replaceAll("\\d", "");
                int l = str.length();
                System.out.println("The length of the string without digit is:" + l);
  
        }
  
}
In this solution, a regular expression is utilized.

Q #10) How to compute the first character of a string that is not repeated?

Answer: To compute the first character of a string that is not repeated, the following steps are followed:

A Set data structure for the repeated characters and a list for the non-repeated characters is taken.
After segregating the repeated and non-repeated elements, the program prints the first element of the list in the console at the end of the iteration.
Code snippet:

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
Set<Character> repeated = new HashSet<>();
List<Character> nonRepeated = new ArrayList<>();
for (int m = 0; m < wrd.length(); m++) {
            char l = wrd.charAt(m);
            if (repeated.contains(l)) {
                continue;
            }
            if (nonRepeated.contains(l)) {
                nonRepeated.remove((Character) l);
                repeated.add(l);
            } else {
                nonRepeated.add(l);
            }
        }
        return nonRepeated.get(0);
    }
Q #11) How to search for a missing number in an array that contains integers from 1 to 100?

Answer: To search for a missing number in an array that contains integers from 1 to 100, the following steps are followed:

Take an integer array with the numbers from 1 to 100.
Compute the sum of the numbers, the summation shall be= l*(l+1)/2, where l is the number of integers.
Perform subtraction of the missing element from the total addition of numbers.
Q #12) How to get the matching elements in an integer array?

Answer: To get the matching elements in an integer array, the following steps are followed:

Build two loops.
In the first loop, collect elements one at a time and add up the number of instances of the selected element.
Code snippet:

1
2
3
4
5
6
7
8
for (m = 0; m < size; m++)  
        { 
            for (n = m + 1; n < size; n++)  
            { 
                if (arry[m] == arry[n])  
                    System.out.print(arr[m]); 
            } 
        } 
Q #13) How to delete the repeated elements in an integer array?

Answer: To delete the repeated elements in an integer array, the following steps are followed:

Build a hashmap that will pick all the elements that were present before.
Loop through the array and verify if the element already exists in the hash map
If the result is true, array traversal is continued; otherwise, the element is printed out in the console.
Code snippet:

1
2
3
4
5
6
7
8
HashMap<Integer,Boolean> m =  new HashMap<>();
    for (int j = 0; j < a.length); j++)
         {
            if (m.get(a[j]) == null) 
                System.out.print(a[j] + " "); 
                 mp.put(a[j], true); 
        } 
    } 
Q #14) Determine the largest and the smallest element of an array that is not sorted.

Answer: To determine the largest and the smallest element of an array, the following steps need to be followed:

Traverse the array, and monitor the maximum element found so far, till we are at the border of the array, the largest element is achieved.
Traverse the array, and monitor the minimum element found so far, till we are at the border of the array, the smallest element is achieved.
Q #15) Explain the bubble sort algorithm.

Answer: The bubble sort algorithm includes the following steps:

Begin from the first element, then perform a comparison with the following element in the array
If the present element is larger than the following element of the array, then swap their positions.
If the present element is lesser than the following element of the array, shift to the next element, and again repeat step 1.
Code snippet:

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
for(k = 0; k < arry.length; k++)
    {
        for(l = 0; l < arry.length-l-1; l++)
        {
            if( arry[l] > arr[l+1])
            {
                t = arry[l];
                arry[l] = arry[l+1];
                arry[l+1] = t;
            } 
        }
Scenario-Based Questions for Programming/Coding Interview
Q #16) Implement the insertion sort algorithm.

Answer: Implementation of insertion sort.

Code snippet:

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
for (m = 1; m < arry.length; m++) 
    {
        n = m;
        while (n> 0 && arry[n - 1] > arry[n]) 
        {
            k = arry[n];
            arry[n] = arry[n - 1];
            arry[n - 1] = k;
            n--;
        }
    }
Q #17) Determine the second-largest element of an array.

Answer: The second largest element of an array can be computed by the following steps:

State the largest element as the first element of the array and the second largest element as the second element of the array.
Iterate through the loop for traversing the array.
IF arry[i] is greater than the largest element, THEN
Second element? largest element
Largest element = arry[i]
IF the second element is less than arry[i] THEN
Second element = arry[i]
Code snippet:

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
if(arry[0] > arry[1]) {
      l = arry[0];
      s  = arry[1];
   } else {
      l = arry[1];
      s = arry[0];
   }
  
   for(i = 2; i < arry.length; i++) {
      if( l < a[i] ) {
         s = l;
         l = arry[i];
      } else if( s < arry[i] ) {
         s =  arry[i];
      }
   }
Q #18) Explain the reversal of an array.

Answer: Array reversal is performed in the following ways:

Take an array with elements.
Now, exchange the position of the first element with the final element, and similarly, the second element with the penultimate element.
This will continue until the entire array is reversed.
Code snippet:

1
2
3
4
5
for (t = 0; t < arr.length / 2; t++) { 
            tmp = arr[t]; 
            arr[t] = arr[arr.length - t - 1]; 
            arr[arr.length - t- 1] = tmp; 
        } 
Q #19) How to remove special characters in a string that is in lowercase?

Answer: Special characters in a string can be removed by using the replaceAll function in Java.

Code snippet:

1
2
string str = “Testing@”
str.replaceAll(“[^a-z0-9]”,””)
In this solution, a regular expression is utilized.

Q #20) How to perform swapping two strings without using a third variable?

Answer: Two strings are swapped without the help of the third variable by the following steps:

(i) Take two strings i, j, and append them then store them in the first string.

(ii) Using the substring method, extract the string:

j = substring(0,i.length()-j.length())
(iii) Store the string j in string i

i= subsrtirng(j.length)
Code snippet:

1
2
3
4
5
string i = “abc”, j =”def”;
    i = i+j;
    j = i. substring(0,i.length()-j.length());
    i = i.substring(j.length())
   System.out.println(i +””+j);
Q #21) How to traverse to the middle of a linked list?

Answer: To traverse to the middle of a linked list, the following steps are followed:

Declare two pointers, first and second, which are initialized to the linked list head.
Increment the first linked list by two nodes and the second by one node in each loop.
While the first node reaches the end of the list, the second node will point to the middle.
Code snippet:

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
first = second = head; 
 while(first !=null) { 
    first = first.next; 
     if(first != null && first.next != null) { 
          second = second.next; 
          first = first.next; 
     } 
} 
 return second; 
   
}
Q #22) Implement the process of reversing a linked list.

Answer: A linked list can be reversed by the following steps:

Declare three nodes preceding, present, and following.
While in the present node, the preceding will be null.
Let the present.next be preceding to reverse the list.
In each loop, present and preceding are incremented by 1.
Code snippet:

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
Node preceding=null;
Node following
while(present!=null)
 {
     following=present.next;
     present.next=preceding;
     preceding=present;
     present=following;
  }
return preceding;
}
Q #23) What is the process of deleting matched elements from a linked list that is not sorted?

Answer: To delete matched elements from a linked list that is not sorted, perform the following steps:

Travel from the head to the tail of the linked list.
For every value in the linked list, verify if it’s already present in the hash table.
If the result is true, the element is not added to the hash table.
Code snippet:

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
HashSet<Integer> h = new HashSet<>(); 
        
        node present = head; 
        node preceding = null; 
        while (present != null)  
        { 
            int presentval = present.value; 
               
            if (h.contains(presentval)) { 
                preceding.next = present.next; 
            } else { 
                h.add(presentval); 
                preceding = present; 
            } 
            present = present.next; 
        } 
    
    } 
Q #24) How to get the length of a linked list?

Answer: To get the length of a linked list, the following steps are followed:

Start a counter with a value of 0 and present the node as the head.
Till the present node is not null, perform these :
present = present -> next
counter = counter + 1
Counter value is returned.
Code snippet:

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
{ 
        Node present = head; 
        int c = 0; 
        while (present != null) 
        { 
            c = c + 1; 
            present = present.next; 
        } 
        return c; 
    } 
Q #25) How to search for a specific value in a linked list?

Answer: You complete the following steps to search for a specific value in a linked list:

Declare the present node as head.
Till the present node is not null, perform these :
present -> value is equal to the value being looked for, return true.
present = present -> next.
If not found, false is returned.
Code snippet:

1
2
3
4
5
6
7
8
9
Node present = head;  
        while (present != null) 
        { 
            if (present.value == value) 
                return true;     
            present = present.next; 
        } 
        return false;     
    } 
Q #26) How to verify if a number is prime or not?

Answer: To verify if a number is prime or not, the following steps are followed:

Start a loop from value 2(k) up to (number / 2)
If the number is perfectly divisible by k, then the number is non–prime.
If the number is not perfectly divisible except for 1 and by itself, then the number is prime.
Code snippet:

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
for(k = 2; k <= number / 2; k++)
  {
      if(number % k == 0)
      {
          stat = false;
          break;
      }
  }
  if (stat)
     System.out.println("Prime";
        
  else
      System.out.println("Not prime");
Q #27) How to get the third node of a linked list?

Answer: To get to the third node of the linked list, you perform the following steps:

Start a counter with a value of 0.
Iterate through the linked list and perform these steps:
If the value of the counter is 3, then the present node is returned.
The counter is increased by 1.
Modify the present such that it implies the next present.
Code snippet:

1
2
3
4
5
6
7
8
9
Node present = head; 
        int c = 0; 
        while (c != null) 
        { 
            if (c == 3) 
                return present.val; 
            c = c+1; 
            present = present.next; 
        } 
Q #28) Compute the first five Fibonacci numbers.

Answer: 0 and 1 are the first two Fibonacci numbers, and all the numbers after 0 and 1 are the sum of the two previous numbers.

Code snippet:

1
2
3
4
5
6
7
int num1=0, num2=1,t;
for ( int k = 0; k<5,k++)
{
   System.out.println(num1);
   t = num1 + num2;
   num1 = num2; num2 = t;
}
Q #29) How to reverse a number?

Answer: Reversal of a number is achieved in the following steps:

Take out the rightmost digit of the number.
Sum up the digits with the new reversed number.
Perform multiplication by 10.
Divide the number by 10.
Q #30) Determine the factors of a number.

Answer: The factors of a number are expressed by the following code snippet:

1
2
3
4
5
6
int no = 75;
  
         for(int j = 1; j <= no; j++) {
            if (no % j == 0) {
                System.out.print(j);
            }
Final Thoughts on Interview Questions for Coding Developers
We are hopeful that we have clarified many of the answers to your queries on the basic coding interview questions.

Most of the coding implementations that we have discussed are in Java; however, even if you are unaware of the language, the steps or the details of the algorithm given here for most of the questions will help you to prepare for an interview.

Work hard on your basics of programming, logic, and data structures, stay calm, and practice these programming interview questions.
