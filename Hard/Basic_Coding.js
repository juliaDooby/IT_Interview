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

Одна React-задача, демонстрирующая ключевые навыки на собеседовании
Простой
7 мин
60K
ReactJS
*
JavaScript
*
TypeScript
*
Веб-разработка
*
Кейс
Фото из сериала Silicon Valley
Фото из сериала Silicon Valley
Ниже - пример того, как я обычно представляю (и детально разбираю) один из моих любимых вопросов по фронтенд-разработке на собеседовании. Он основан на моем опыте интервьюирования в крупных IT-компаниях. Этот вопрос посвящён созданию небольшого React-компонента, который асинхронно получает данные на основе пропса username. Он кажется простым, но на самом деле показывает много нюансов понимания кандидатом хуков React, сайд-эффектов, состояния гонки (race conditions) и компромиссов в дизайне. Приятного чтения!

Как и у любых других вопросов для собеседования, у этого есть недостатки. Собеседование - искусственная ситуация с жёсткими временными ограничениями, и кандидат может нервничать или уставать. Моя цель - не поймать человека на ошибке, а понять, как он рассуждает о реальных проблемах, с которыми может столкнуться в работе.

Суть задачи на интервью
Перед вами один из возможных примеров использования компоненты <Profile>, который получает проп username и внутри делает запрос на некий API (например, fetchProfile(username)) – это некая абстракция: может быть GitHub, может быть корпоративный сервис, без разницы.

const App = () => {
  return (
    <Profile username="john_doe">
      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}
    </Profile>
  );
};
Объяснить с
Представьте, что вы разрабатываете библиотеку компонентов внутри большой компании, и этой библиотекой будут пользоваться другие команды (вполне реальный сценарий в больших IT-компаниях). Задача: написать реализацию компонента Profile, чтобы им удобно и ожидаемо могли пользоваться в самых разных контекстах.

import React, { useState, useEffect, useRef } from 'react';
import fetchProfile from 'somewhere'; 
// Это фиктивная функция, которая возвращает Promise,
// резолвящийся в объект пользователя

function Profile() {
  // Допишите здесь логику
}
Объяснить с
Важный дисклеймер:

user === null ? <Loading /> : <Badge info={user} /> - это упрощённая проверка. В реальном мире сервер может вернуть null в ответ, и нам придётся делать дополнительную логику, чтобы корректно обрабатывать “нет данных” vs. “данные ещё загружаются”. Однако мы намеренно оставим такой код, чтобы посмотреть, заметит ли кандидат потенциальную проблему и предложит ли более надёжное решение (например, isLoading флаг).

Наш fetchProfile не даёт возможности вызвать abort(). Это сделано специально, чтобы проверить, знает ли кандидат про аборт запросов (AbortController) и как он будет рассуждать, если такой возможности нет.

Начинаем решение
Чаще всего кандидаты сначала пишут что-нибудь простое, используя функциональные компоненты и хуки:

import React, { useState, useEffect } from 'react';
import fetchProfile from 'profileApi'; // воображаемый модуль

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile(username).then(setUser);
  }, []);

  return children(user);
};
Объяснить с
Как ни странно, но на этом этапе у многих возникают сложности с пониманием того, что в children может быть функция, и её можно просто вызвать: children(user), даже не оборачивая во всякие <div>...</div> или <></>. Почему-то кандидатам с ними спокойнее.

Однако уже тут видно несколько типичных моментов:

Отсутствие зависимостей в useEffect.Часто люди забывают добавить username в массив зависимостей. Это значит, что если username поменяется, запрос на новый профиль не произойдёт.

Необработанные ошибки. А что если fetchProfile завершится ошибкой или вернёт null?

Уточняем детали
В интервью я обязательно спрашиваю: "А что, если проп username может динамически меняться? Например, пользователь кликает по списку пользователей?" Тогда кандидат обычно исправляет код, добавляя username в зависимости эффекта:

useEffect(() => {
  fetchProfile(username).then(setUser);
}, [username]);
Объяснить с
Теперь, если username меняется, мы делаем новый запрос. Так понятнее. Но…

Race condition (гонка состояний)
Дальше я описываю сценарий: представьте, что в вашем приложении две панели. Слева - список пользователей, справа - <Profile username={currentUsername} />. Пользователь начинает быстро кликать то по одному, то по другому пользователю.

Запрос A уходит для username = 'alice'.

Тут же пользователь кликает на username = 'bob', отправляется запрос B.

Запрос B возвращается быстрее, мы записываем в state данные bob.

Потом запрос A (более медленный) тоже возвращается, и внезапно перезаписывает state данными пользователя Alice!

"Может быть тут какая либо проблема?". К счастью в основном ответ да - при таком кейсе у нас может отображаться неправильная информация. На экране написано “bob”, а по факту в компоненте данные “alice”.

Разбор типичных решений
Приведу несколько реальных подходов, которые я видел от кандидатов. Самые экзотические - типа очереди запросов - опустим :)

Локальная переменная вне компонента
Иногда пытаются сделать что-то вроде:

let lastUsernameFetched = null;
function Profile({ username, children }) {
  const [user, setUser] = useState(null);
  lastUsernameFetched = username;

  useEffect(() => {
    fetchProfileManaged(username).then((profile) => {
      if (lastUsernameFetched !== username) {
        setUser(profile);
      }
    });
  }, [username]);

  return children(user);
}
Объяснить с
По сути, мы храним состояние (lastUsernameFetched) на уровне модуля. Но что, если на странице несколько экземпляров <Profile>? Придётся как-то разделять их по идентификаторам. Это далеко не лучшее решение…

Использование useRef для отслеживания текущего username
Иногда кандидаты придумывают хранить текущий username в useRef, чтобы при получении результата сравнивать, совпадает ли он со значением пропса. Кандидат начинает спрашивать про структуру ответа, и в этом месте мы обычно вводим предположение, что username в объекте профиля всё-таки есть. В результате вижу такое решение:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);
  const usernameRef = useRef(username);

  useEffect(() => {
    fetchProfile(username).then((profile) => {
      if (usernameRef.current === profile?.username) {
        setUser(profile);
      }
    });
  }, [username]);

  return children(user);
};
Объяснить с
Почему-то часто встречал заблуждение, что useRef(username) всегда будет передавать в usernameRef актуальное значение пропса 🤷‍♂️ (хотя на самом деле это лишь начальное значение). После выяснения этого обстоятельства встречаются исправления в виде:

...
useEffect(() => {
  usernameRef.current = username;
}, [username]);
...
Объяснить с
Это приводит к лишнему вызову эффекта, но чаще встречается, к счастью, такой ответ:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);
  const usernameRef = useRef(username);

  useEffect(() => {
    usernameRef.current = username;
    fetchProfile(username).then((profile) => {
      if (usernameRef.current === profile?.username) {
        setUser(profile);
      }
    });
  }, [username]);

  return children(user);
};
Объяснить с
Отлично, идем дальше.

А если у нас в приложении две страницы, и пользователь уходит со страницы с <Profile> раньше, чем придёт ответ от fetchProfile будет ли тут какая-либо проблема?

"Да, будет", ведь компонент может быть размонтирован, а асинхронный вызов вернётся. Возникает сценарий, когда React ругается - “Can’t perform a React state update on an unmounted component…”.

Тогда нередко вижу такой решение:

...
useEffect(() => {
  return () => {
    usernameRef.current = null;
  }
}, []);
...
Объяснить с
Это, как правило, вовсе не гарантирует, что setUser никогда не будет вызван (мало ли, если не хороший сервер вернёт null).

Идеальное решение
Часто самый простой подход (при отсутствии AbortController) - завести внутри useEffect переменную-флаг:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isLive = true;
    setUser(null);
    fetchProfile(username)
      .then((profile) => {
        if (isLive) {
          setUser(profile);
        }
      })
      .catch((err) => {
        // Здесь можно обсудить дополнительные аспекты обработки ошибок.
        // Если интересно, какие именно - пишите вопросы к статье :)
      });

    return () => {
      isLive = false;
    };
  }, [username]);

  return children(user);
};
Объяснить с
Пока isLive = true, состояние обновляется при поступлении ответа

Если компонент размонтировался или username изменился (а значит, эффект сработает заново), переменная isLive сбрасывается в false. В результате старый запрос, вернувшийся с задержкой, не изменит состояние.

Таким образом, удаётся избежать гонки при обновлении состояния и предупредить возникновение ошибки в React при вызове setState на размонтированном компоненте.

Добавление блока catch наглядно показывает возможность обработки ошибок от сервера или сети. При необходимости можно обсудить способы уведомления пользователя и логирования таких ошибок.

Примечание: для упрощения здесь не рассматривается сценарий, когда username или children могут оказаться "пустыми" (например, null, undefined или пустая строка), а также ситуация, когда children не является функцией. Однако здорово, если кандидат обратит внимание и на эти нюансы.

Почему мне нравится этот вопрос
Он небольшой по объёму и наглядно показывает ключевые аспекты работы с React: получение данных, состояние загрузки, корректный рендер и работу с пропами.

Он проверяет базовые знания React: хуки, сайд-эффекты, “cleanup” при размонтировании, изменение пропсов со временем - всё это ключевые концепции во фронтенд-разработке на React.

Он выявляет важные крайние случаи:

Проп username может меняться, пока запрос ещё выполняется.

При уходе со страницы до завершения запроса может случиться попытка обновить state размонтированного компонента.

Сервер может вернуть null или ошибку.

Может возникнуть состояние гонки при быстрых переключениях пользователя.

Его можно масштабировать. Джуны могут представить простую рабочую версию, а для синьоров я могу задать дополнительные вопросы про оптимизацию, отмену запросов, работу с несколькими запросами одновременно.

Итог
Моя цель в подобных React-вопросах - не просто услышать готовое решение, а понять, как человек рассуждает:

Задаёт ли он уточняющие вопросы: “Что если username меняется?”, “Что если у нас много быстрых кликов?”, “Нужна ли отмена запроса?”

Понимает ли он асинхронные эффекты и их подводные камни?

Учитывает ли он необходимость освободить ресурсы при размонтировании компонента?

Думает ли о загрузке / ошибках / логировании - ведь сервер может вернуть null, ошибку, или просто долго висеть.

В конце концов, главное - это структура размышлений. Точно так же, как в системном дизайне мы обсуждаем компромиссы по сложности, памяти, пропускной способности, здесь в React-собеседовании смотрим на подход к работе с данными, пропами, асинхронностью, состоянием и реактивным UI.

Удачи на ваших будущих собеседованиях!

Теги:reactсобеседование
Хабы:ReactJSJavaScriptTypeScriptВеб-разработка
+26

164

56
+56


29

Карма
Andrei Chmelev@andry36
Senior Full Stack Engineer / Tech Lead

Подписаться

Комментарии 56




Alex_Diamond
3 фев 2025 в 16:44
Подскажите, пожалуйста, пару интересных вопросов для сеньоров по этой задаче.


+1



andry36
4 фев 2025 в 16:31
Спасибо, что обратили внимание на задачу!
Я бы задал вопросы, связанные с производительностью и оптимизацией, например:
Как организовать параллельную загрузку нескольких профилей и синхронизировать их результат в одном компоненте?
Как выстроить отказоустойчивость при сбоях сети (ретраи, отмена запросов, механизмы кэширования)?
Как решать проблему при работе в среде SSR, где запросы нужно делать ещё до рендера?
Как совместить подход с Suspense и Error Boundaries для более реактивной UX-модели?


+3



dark_gf
3 фев 2025 в 18:11
Вопрос в общем хороший, у меня больше инетресует вот эта часть:

    <Profile username="john_doe">      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}    </Profile>

Видя такой код я могу предположить что в проекте вашем может быть такого очень много, что имхо есть намек к не очень хорошему проекту )))


+4



SergeyEgorov
3 фев 2025 в 19:10
Тоже хотел спросить- Это весь код компонента App, или что-то не показано с какой-то целью?


-3



andry36
4 фев 2025 в 16:40
Да, в статье показан только упрощённый фрагмент компонента App. Он служит примером того, как использовать <Profile> на практике - без лишнего кода, не относящегося к сути задачи.


0



andry36
4 фев 2025 в 16:39
Благодарю за мнение.
Этот пример с функцией в children демонстрирует, что это обычный React-проп, которому можно передавать функцию как значение.
Сама идея упрощена для собеседования (в статье это указано), чтобы оценить именно понимание жизненного цикла и эффектов - в боевом проекте, конечно, принято грамотно разделять ответственность и не плодить запросы во всех мелких компонентах.


0



Zukomux
3 фев 2025 в 19:46
Простите, но запрос данных в эффекте это моветон. Если нужна загрузка данных, то ее надо оформлять хуком и делать функциональную композицию на уровне "умного" компонента(контроллера)


+1



Xao
3 фев 2025 в 21:45
А уже хук будет вызывать внутри useEffect? Давайте угадаю, на выходе хотим три стейта - loading, error и result?

Начиная с React 19, этот подход устарел окончательно, лучше сделать запрос, получить промис и передать его дальше потребителям, используя Suspense и новый метод use. А ошибку ловить в ErrorBoundary.


+4



Anaferat
4 фев 2025 в 05:19
А почему мы считаем что подход от команды реакт лучше?


+4



js2me
4 фев 2025 в 09:27
Больше возникает вопрос - почему хранение бизнес логики приложения в слое предоставления правильное решение и почему команда React тоже так считает?

Почему это считается правильным только во фронтенд веба ?)


+4



Vitaly_js
4 фев 2025 в 12:27
Из документации по реакт:

Only Suspense-enabled data sources will activate the Suspense component. They include:

Data fetching with Suspense-enabled frameworks like Relay and Next.js

Lazy-loading component code with lazy

Reading the value of a cached Promise with use

Suspense does not detect when data is fetched inside an Effect or event handler.

The exact way you would load data in the Albums component above depends on your framework. If you use a Suspense-enabled framework, you’ll find the details in its data fetching documentation.

Suspense-enabled data fetching without the use of an opinionated framework is not yet supported. The requirements for implementing a Suspense-enabled data source are unstable and undocumented. An official API for integrating data sources with Suspense will be released in a future version of React.

Что имеется в виду в последнем абзаце?


0



andry36
4 фев 2025 в 16:56
В последнем абзаце речь идёт о том, что полноценная реализация Suspense для произвольных запросов (без специальных фреймворков, типа Relay или Next.js) всё ещё считается нестабильной API. Другими словами, официальной документации и гарантий для общего случая пока нет, и React-команда может менять поведение или интерфейсы в будущем. Поэтому, если вы хотите «чистый» Suspense без дополнительных библиотек, стоит учесть, что это пока не является полностью поддерживаемым сценарием, и ваши решения могут сломаться в следующих версиях React.


0



Vitaly_js
4 фев 2025 в 17:06
О чем-то таком я тоже догадался. Мой вопрос спровоцировало вот это предложение: "Начиная с React 19, этот подход устарел окончательно". На мой взгляд, что бы что-то устарело окончательно должен накопиться опыт, и этот опыт должен перейти в эффективные решения. Данное же предложение из доки подсказывает, что это далеко не так.


+1



Zukomux
5 фев 2025 в 07:16
И в итоге получаем компонент-мультитул. Тут и загрузка данных, и обработка ошибок, мапинг входных данных, формирование представления. Это подойдёт разве что для пет проекта, а в контексте статьи для проверки на джуна. Поменяйте роут с данными и придется 80% компонента переписать заново. Про тестирование я уже молчу


+1



andry36
4 фев 2025 в 16:46
Хук внутри себя всё равно будет использовать useEffect для запроса данных, так что это вопрос именно композиции и структурирования кода, а не принципиального отличия в подходе. Пример был упрощен оставляя пространство для вопроса "А как бы вы сделали это?" :)


0



Vitaly_js
4 фев 2025 в 18:03
Не обязательно же. Можно сделать через useSyncExternalStore. Тогда все эти задачи, которые вы проверяете в данном примере с монтирование/размонтирование, состоянием гонки и т.п. будут решены внутри объекта Profile и реакт тут вообще будет как бы ни при чем. Для использования надо только знать спецификацию useSyncExternalStore.


0



YuriyUl
4 фев 2025 в 08:46
а проброс функции в children не противоречит самому смыслу {children}?


+4



bycolour
4 фев 2025 в 16:56
Нет, это называется render function


+1



radist2s
4 фев 2025 в 12:20
Пожалуй, вы забыли про пару важных моментов: Abort Controller и React Strict Mode.


0



andry36
4 фев 2025 в 16:58
В статье я специально упомянул, что у нас якобы нет возможности вызвать abort(), чтобы проверить реакцию кандидата на ситуацию неуправляемого запроса. А Strict Mode помогает увидеть возможные побочные эффекты и дважды вызываемые функции - это тоже важно учитывать для корректной реализации асинхронной логики.


+1



radist2s
4 фев 2025 в 20:04
Просто обожаю технические задачи в вакууме на собеседованиях. Ваше идеальное решение не проходит даже базовую проверку на предотвращение рефетча (откройте консоль, и увидите как запрос выполняется дважды при первом маунте).

Меня всегда поражала подобная самоуверенность интервьюеров.


0



bakunovdo
5 фев 2025 в 06:17
Strict mode удалить нужно


0



username-ka
4 фев 2025 в 12:25
Прикольный вопрос, я бы не принял ни предложенное решение, ни сам факт существования подобного компонента. Весь мир использует tanstack-query в качестве стандарта де-факто, камон.


-1



andry36
4 фев 2025 в 17:01
Спасибо за комент!
"Весь мир использует..." громкое утверджение, сразу хочется попросить пруфы :)
Не все компании применяют именно tanstack-query. К тому же в задаче проверяются общие принципы работы с асинхронностью в React: если человек хорошо понимает эту логику, он без труда освоит и любую абстракцию вроде React Query или SWR.


+3



username-ka
4 фев 2025 в 19:29
У всех разные стандарты, это нормально. В моей реальности в 2025 году всё-таки стыдно было бы рисовать спиннеры руками "если данные null", тригерить загрузку в useEffect, игнорировать серверные компоненты и существование хуков.

"Не все компании применяют именно tanstack-query" - это действительно так. Но всерьёз кандидатов, который не задаёт первым вопросом "а нам точно надо такой велосипед напилить", я на своих интервью не рассматриваю.


0



onets
4 фев 2025 в 15:53
Есть callback hell, а это nano-micro-component hell, когда каждый уважающий себя микро-компонент лезет на сервер за данными. Когда их становится много - начинается подобное веселье.


0



andry36
4 фев 2025 в 17:02
Пример из статьи не призывает каждый микро-компонент делать собственный запрос. Это лишь иллюстрация ключевых вопросов, которые помогают оценить понимание React-хуков и потенциальных ловушек асинхронности. Для боевого применения, конечно, нужно распределять логику так, чтобы не превратить приложение в зоопарк из сотен запросов. Но на собеседовании хочется увидеть, как кандидат работает именно с базовой механикой React - тогда уже понятно, сможет ли он грамотно её применить внутри более продуманной архитектуры.


-1



Vitaly_js
4 фев 2025 в 16:50
Представьте, что вы разрабатываете библиотеку компонентов внутри большой компании, и этой библиотекой будут пользоваться другие команды (вполне реальный сценарий в больших IT-компаниях). Задача: написать реализацию компонента Profile, чтобы им удобно и ожидаемо могли пользоваться в самых разных контекстах.

Не очень люблю такое, потому что это смахивает на чисто синтетическую задачу или банальное запудривание мозгов соискателю.

Вот вы сами пишете, что уже есть fetchProfile Тогда зачем нужен вот этот вот компонент? Реэкспортируйте вы этот fetchProfile и тогда действительно его можно использовать в разных контекстах. И внутри реакт компонентов, и внутри какой-нибудь rtkquery. По сути, вся задача - это прослойка между пользовательским кодом и fetchProfile , которая уже откидывает часть контекстов в которых будет использована.

Вы действительно проверяете знания реакта, но, на мой взгляд, в неестественных условиях, т.е. создаете дополнительно пространство для стресса и для траты времени на муру.


-2



andry36
4 фев 2025 в 17:20
Спасибо за комментарий!
Понимаю, что такая постановка задачи может показаться искусственной, но для собеседований она довольно типична: нам нужно в ограниченное время проверить, как кандидат мыслит в контексте React, понимает ли он тонкости хуков и асинхронных запросов.
На интервью часто задают подобные микро-задачи, чтобы быстро увидеть, как разработчик работает со стейтом, эффектами и обработкой ошибок на практике - без вдавания в детали полной архитектуры приложения.

Т.е. что это не замена реального проектного кода, а тестовое окружение, где проявляются навыки кандидата.


+1



Vitaly_js
4 фев 2025 в 17:46
Так в этом и проблема. Ваша задача быстро проверить навыки. А задача соискателя не ударить в грязь лицом. Если вы даете липовую задачу, действительно, можно не думая начать решать и вроде как показывать навыки. А можно начать рефлексировать и пытаться выяснить, а что тут проверяют?

Создавая искусственные ограничения вы не "упрощаете" задачу, а наоборот создаете реальные препятствия для ее решения. И как выше заметили можете создавать неверное представление о проекте.

fetchProfile не позволяет отменять запросы. А fetchData1, fetchData2 тоже не позволяют? Как должен ответить соискатель? Решить задачу слепо заткнув дыру в архитектуре или поставить под сомнение реализацию fetchProfile ? В любом случае это игра ва-банк. Ты можешь показать себя либо безынициативным сразу взявшись за работу, либо наоборот излишне инициативным, либо неуверенным, либо болтливым и все это ровно из-за "липовости" тестового примера.

И да, это действительно типично для собеседований, поэтому я и говорю, что такое не очень люблю. Вроде как хотят протестировать навыки (точно хотите навыки протестировать?)), вроде как сами же думают, что речь идет о реальных условиях, но тестируются далеко не только навыки и далеко не в реальных условиях.


+2



Ione1991
4 фев 2025 в 17:58
Не совсем понятен первый пример с lastUsernameFetched. Разве там условие не будет всегда ложно?


0



aw350me
4 фев 2025 в 17:59
Боже, как же все это противно выглядит.

Я все понимаю и про плюсы реакта и джаваскрипта в целом, у каждого языка есть свои недостатки, но конкретно этот пример показывает насколько же банальная работа с запросами это вязкая, противная, неоднозначная и нагроможденная работа в вебе с джс и реактом конкретно.

Сильно отталкивает от изучения и даже просто наблюдения за, казалось бы, перспективными и популярными разработками в сфере разработки веб приложений


+3



questpc
5 фев 2025 в 07:23
Это просто им движет желание сделать "слишком хорошо" или идеально. По факту же консоль браузера в поисках ошибок обычный пользователь смотреть не будет. И непонятно почему сервер вернет null. Если пользователь отсутствует, то сервер вероятно вернет не 200 код вообще и ошибка будет на уровне запроса.

Частое тыканье в имена пользователей вообще лучше всего решить загрузкой данных для всех отображаемых в данный момент. Ну или Profile создавать не одну инстанцию а на каждый клик отдельно.


0



Kergan88
5 фев 2025 в 16:37
В интервью я обязательно спрашиваю: "А что, если проп username может динамически меняться? Например, пользователь кликает по спис

В этих случаях есть стандартное рекомендованное командой реакта решение - использовать ключи. Т.е.:

<Profile key={username} username={username}>
В итоге username внутри компонента меняться не будет. В этом случае нам не надо писать "мусорный" код, вместо этого гарантия корректности будет обеспечена на уровне фреймворка.

Дальше я описываю сценарий: представьте, что в вашем приложении две панели. Слева - список пользователей, справа - . Пользователь начинает быстро кликать то по одному, то по другому пользователю.

Поскольку реакт гарантирует корректность, об этом думать не надо, и ни чего по этому поводу делать не надо. Все будет работать правильно само по себе.

"Да, будет", ведь компонент может быть размонтирован, а асинхронный вызов вернётся. Возникает сценарий, когда React ругается - “Can’t perform a React state update on an unmounted component…”.

Нет, не будет. Это не является какой-либо проблемой. Корректность работы компонента уже гарантирована, и поэтому можно не думать о подобных вещах.

Идеальное решение

А теперь правильное идеальное решение:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => fetchProfile(username).then(setUser), []);

  return children(user);
};
Чтобы обеспечить тот же интерфейс, который требуется изначально, можно объявить дополнительный компонент:

const ProfileWrapper = ({ username, children }) => (
  <Profile key={username} username={username}>
    {children}
  </Profile>
);
Код работает корректно, согласно требованиям, ни каких проблем не имеет.

ЗЫ: а при использовании suspense компонент будет и вовсе выглядеть так:

const Profile = ({ username, children }) => children(use(fetchProfile(username)));
с соответствующей оберткой. И, что характерно - все будет работать как надо. Без ненужных изъебов. KISS.


+1



taujavarob
6 фев 2025 в 21:58
А теперь правильное идеальное решение:

Супер интересное решение. Браво!

Но в реале наверняка надо в key помещать какое-то Id , так как имена в списке могут совпадать.

Да и что будет если кто-то использует Profile без обёртки ProfileWrapper? - но это конечно, наверное, организационный момент, хотя, согласно "правилу Мерфи" - такое рано или поздно произойдет. 


0



Kergan88
7 фев 2025 в 06:18
Супер интересное решение.

Это же _стандартное_ решение, которое явно рекомендовано вот тут:
https://react.dev/learn/you-might-not-need-an-effect "Resetting all state when a prop changes"

Но в реале наверняка надо в key помещать какое-то Id , так как имена в списке могут совпадать.

В каком списке? Это один компонент-панелька, который не выводится в массиве.

Да и что будет если кто-то использует Profile без обёртки ProfileWrapper?

То же самое, что и в том случае, если кто угодно будет использовать любой другой компонент _непредназначенным образом_. В крайнем случае можно импортировать только обертку. Все равно это выглядит гораздо проще. Ну и работает корректнее - тут, как уже отметили, "идеальное" решение автора-то по факту глючное - если быстро протыкать например по 5 разным юзерам, то начнут запросы приходить по очереди и мы увидим как на панельке с задержкой переключается пять юзеров)

Смысл то моего подхода именно в том, чтобы не писать когнитивно сложный код, когда можно его не писать. Тогда и места для ошибки не будет. Нельзя ошибиться в кодле, который не написан) а автор вот решил такой код написать - и посадил ошибку.


0



Vitaly_js
7 фев 2025 в 12:21
Это же _стандартное_ решение, которое явно рекомендовано вот тут:

Это стандартное решение, когда речь идет о коде без эффектов. В данном случае, оно, очевидно, не подходит. По сути, вы заявляете, что у вас есть компонент Profile, который имеет сайдэффекты и зависит от клиентских данных. Но по факту, он от клиентских данных не зависит и любой кто будет его использовать как есть, т.е. просто посылая новые данные в username никакого эффекта не получат. Только изучая документацию или исходный код они узнают, что частью публичного интерфейса является так же и инфраструктурное свойство key.

По сути, вы убираете из реакта функциональность useEffect, и реализуете ее окольными путями.

В документации прямо пишут:

Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM.

Вы же, вместо того, что бы синхронизировать компонент используя встроенные средства, делаете такую синхронизацию средствами предназначенными для другого.

Команда реакт не советует так делать. Эти оптимизации логичны и работают как оптимизации именно когда нет useEffect


0



Kergan88
8 фев 2025 в 06:19
Это стандартное решение, когда речь идет о коде без эффектов. 

Нет, это стандартное решение, когда надо сбрасывать стейт при изменении пропса. По линку буквально описан кейс из статьи - даже компонент тот же самый с пропсом - Profile и userId.

Только изучая документацию или исходный код они узнают, что частью публичного интерфейса является так же и инфраструктурное свойство key.

Так написано же: "Note that in this example, only the outer ProfilePage component is exported and visible to other files in the project." (в моем посте это ProfileWrapper). Интерфейс точно такой же, как требуется. Тому, кто использует компонент, ни чего про ключи знать не надо.

По сути, вы убираете из реакта функциональность useEffect, и реализуете ее окольными путями.

useEffect остался там, где был: "useEffect(() => fetchProfile(username).then(setUser), []);" вместе со всей своей функциональностью.

Вы же, вместо того, что бы синхронизировать компонент используя встроенные средства

Наоборот, я как раз предлагаю использовать встроенные средства, предлагаемые фреймворком, вместо того чтобы писать для синхронизации свои велосипеды. В итоге мой код выше работает правильно (и не может не работать, потому что там негде ошибиться), а код автора с велосипедами - _не работает_ правильно (потому что синхронизация стейта - сложная задача, и даже в таких примитивных кейсах делать ее руками - значить обосраться). Не говоря уже о том, что сам код гораздо проще и лучше поддерживается.

Команда реакт не советует так делать.

Это прямая ложь, я выше дал ссылку, где рассматривается буквально наш кейс и команда реакта четко и однозначно говорит "используйте в этом и похожих случаях ключи".

@taujavarob

Оно понятное, но оно основано на том, что у вас в компоненте нет никакого состояния

Если бы состояния не было, то нам не надо было бы его обнулять при помощи key. Состояние то у нас есть, просто нам не надо поддерживать "непрерывность" этого состояния при изменении пропса - наоборот, нам надо состояние сбрасывать. И вот в таких случаях, когда надо сбрасывать состояние при изменении пропсов - и надо использовать ключи.

Возможно, наверное, всё приложение создавать в таком стиле "рубки" - но оно будет какое-то странное для React.

Наоборот, это и есть react-way. Напомню, что реакт - это порт внутреннего php-фреймворка, основа его логики - если мы что-то сделали, то пришел новый ответ с сервера, который заново с нуля и полностью отрендерил всю страницу. Реакт изначально сделан так, чтобы эмулировать такое поведение (и чтобы можно было потом с наименьшими болями портировать код с php на js), это основа его архитектуры.

В React все хороводят вокруг "состояния", а в случае key состояния нет вообще. 

Все верно, состояние и работа с ним - это сложно и чревато ошибками. Если есть возможность написать код так, чтобы избежать работы с состоянием или положить работу с ним на плечи самого фреймворка - так и надо делать. Чтобы не обосраться со сложным кодом - надо просто не писать сложный код.


0



Vitaly_js
8 фев 2025 в 10:38
Нет, это стандартное решение, когда надо сбрасывать стейт при изменении пропса. По линку буквально описан кейс из статьи - даже компонент тот же самый с пропсом - Profile и userId.

По ссылке которую вы дали, данный вид оптимизаций может быть выполнен если не используется сайдэффект. Если сайдэффект используется то для этого существует useEffect. О чем прямо написано в первом же абзаце. И пример, который вы упоминаете так же useEffect не использует. Поэтому никакое это не стандартное решение.

Вы взяли частный случай случай оптимизации и заменили им общий случай использования useEffect. Разумеется подобный подход командой реакт не продвигается.

Интерфейс точно такой же, как требуется. Тому, кто использует компонент, ни чего про ключи знать не надо.

Это понятно, что все что угодно можно замаскировать. Но в данном случае, использовать обертку, инфраструктурное свойство только для того, что бы не использовать по назначению useEffect - это антишаблон. Вы просто вынесли и замаскировали зависимость useEffect в шапку компонента. Спрашивается зачем, если для сайдэффектов есть useEffect и возможность задания зависимостей для него.

useEffect остался там, где был: "useEffect(() => fetchProfile(username).then(setUser), []);" вместе со всей своей функциональностью.

Вы прочитайте полностью раздел на который ссылаетесь. Он прямо так и называется: "Вам возможно не нужны эффекты". Иными словами, семантику useEffect вы игнорируете. И относитесь к нему как к useMemo например. Так же игнорируете возможность настроить useEffect через массив зависимостей перенося их в шапку компонента. Это и называете проигнорировали функциональность.

Наоборот, я как раз предлагаю использовать встроенные средства, предлагаемые фреймворком, вместо того чтобы писать для синхронизации свои велосипеды.

Какие велосипеды? Ниже человек дал ссылку в которой разработчики Реакт объяснили смысл предупреждения об обновлении стейта на размонтированном компоненте. Проблема действительно есть, но автор статьи использовал пример в котором проблемы нет. Тем не менее, знать о том, что такая проблема существует полезна. И именно для таких вещей придуман useEffect. Если убрать избыточную функциональность для данного примера. То получится ровно тоже самое что и у вас.

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile(username)
      .then(setUser)
      .catch((err) => {
        // Здесь можно обсудить дополнительные аспекты обработки ошибок.
        // Если интересно, какие именно - пишите вопросы к статье :)
      });
  }, [username]);

  return children(user);
А вот ваше решение:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => fetchProfile(username).then(setUser), []);

  return children(user);
};
Вы просто решили работать с useEffect как с useMemo в соответствии с теми рекомендациями, которые содержатся в приведенном вами разделе документации. Но так делать никто не советовал, потому что useEffect не равно useMemo.

 В итоге мой код выше работает правильно (и не может не работать, потому что там негде ошибиться)

Вообще-то нет. Вы так спешили, что неправильно сконфигурировали useEffect. Поэтому как раз ваш код не работает.

а код автора с велосипедами - _не работает_ правильно (потому что синхронизация стейта - сложная задача, и даже в таких примитивных кейсах делать ее руками - значить обосраться).

Он работает правильно. Избыточно в данной ситуации, но все корректно. Никакой сложной задачи в синхронизации стейта нет. Это как раз обычная для реактразработчика задача. Проблема этого кода именно в смысловой нагрузке, а не в технической реализации.

Это прямая ложь, я выше дал ссылку, где рассматривается буквально наш кейс и команда реакта четко и однозначно говорит "используйте в этом и похожих случаях ключи".

Неужели?

Раздел называется "You Might Not Need an Effect". Так, у нас уже не наш случай.

Пример из статьи

export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
Вы видите тут эффекты?


0



Kergan88
10 фев 2025 в 08:15
То получится ровно тоже самое что и у вас.

Не получится. Мой код _работает правильно_, а ваш - _не_ работает правильно_. Это весьма принципиальная разница.

Я еще раз повторяю - если вы сами занимаетесь велосипедной синхронизацией, то вы уже обосрались. Потому что вы пишите код, в котором можно ошибиться миллионом разных способов. И вы - ошиблись. А у меня код правильный просто потому, что _ошибиться негде_. Вот и ошибок нет.

Он работает правильно. 

Нет, не работает. Если быстро поменять несколько юзеров (быстрее, чем они догружаются), то компонент их все выведет подряд, хотя должен вывести только последнего.

Поэтому как раз ваш код не работает.

Так приведите юзкейс, в котором он не работает. Я выше привел юзкейс, в котором не работает ваш.

Вы видите тут эффекты?

Этот раздел иррелевантен эффектам. Там описывается рекомендованный командой реакта универсальный способ полного сброса стейта компонента.

Если вам надо сбрасывать стейт в общем случае (если нет специфичной для вашего кейса причины, по которой так делать нельзя) - вы используете ключи. Либо пишете говнокод с ошибками.


0



Vitaly_js
10 фев 2025 в 11:27
Я еще раз повторяю - если вы сами занимаетесь велосипедной синхронизацией, то вы уже обосрались. Потому что вы пишите код, в котором можно ошибиться миллионом разных способов. И вы - ошиблись. А у меня код правильный просто потому, что _ошибиться негде_. Вот и ошибок нет.

Я же говорю, вы поспешили. И useEffect сконфигурировали как useMemo, у вас setup функция промис возвращает. Понятно, что легко правится, просто на фоне таких вот выражений выглядит иронично.

Нет, не работает. Если быстро поменять несколько юзеров (быстрее, чем они догружаются), то компонент их все выведет подряд, хотя должен вывести только последнего.

Минуточку. Вы как и автор статьи все скидываете в одну кучу. Но автор объяснил для чего он это делал. Задачи накидывались для того, что бы посмотреть как они решаются сами по себе. А вы выражаетесь так как будто реально будете подобное использовать и у нас тут финальное решение. Но, дело в том, что у нас тут не финальное решение. У нас тут нет списка требований, который объясняет как должно вести себя приложение. Вы, почему то решили, что данное предсказуемое поведение компонента - это проблема. Допустим, но вы предлагаете решить ее запросами к серверу которые будут просто повисать в воздухе. Тогда у меня встречный вопрос - это зачем? Зачем пропускать запросы, которые не планируется показывать на экране? Вы уверены, что проблема в данном случае в данном компоненте, а не в пользовательском опыте?

Так приведите юзкейс, в котором он не работает. Я выше привел юзкейс, в котором не работает ваш.

Если добавить кэшпрофилей, то уже нет никакого смысла работать с ключами и отключать компонент. Еще раз хочу напомнить, что автор в одну кучу свалил все и работу с транспортной системой и конфигурирование компонента. Далее, если у вас внешний источник данных - это какой-нибудь обсервер, тоже нет никакого смысла работать с ключами. Никакого существенного упрощения там не будет.

Вы что оптимизируете? Вот создатели реакта понимали, что это частный случай оптимизации. Что если исключить эффекты у нас не будет никаких промежуточных состояний из которых компонент будет переходить из одного в другое. И тогда да, можно каждый раз отрисовывать актуальное состояние компонента. А когда такие состояния есть сразу возникают вопросы к пользовательскому опыту. Насколько они должны быть плавными? Должны ли быть обработки промежуточных действий? Зачем собственно постоянно все скидывать в нуль?

Этот раздел иррелевантен эффектам. Там описывается рекомендованный командой реакта универсальный способ полного сброса стейта компонента.

Если вам надо сбрасывать стейт в общем случае (если нет специфичной для вашего кейса причины, по которой так делать нельзя) - вы используете ключи. Либо пишете говнокод с ошибками.

Минуточку, сброс ВСЕХ стейтов компонента - это не ровно сбрасывать стейт в общем случае. Разрабы реакта показали, что они имеют в виду. А для того, что бы минимизировать использование подхода, только подходящими случаями они расположили этот раздел в разделе посвященном компонентам без эффектов.


0



taujavarob
13 фев 2025 в 02:35
вы предлагаете решить ее запросами к серверу которые будут просто повисать в воздухе. Тогда у меня встречный вопрос - это зачем? Зачем пропускать запросы, которые не планируется показывать на экране?

Незачем. Хотя для сервера это не имеет значение, так как мы не можем передать серверу что запрос уже не нужен. Но это поправимо. - При "размонтировании" компонента запросу посылается Cancel. Это помогает не забивать ограниченное количество запросов к сайту в броузере. Но это не относится к использованию или нет key-техники. И в том и в другом случае это нужно применять.

Если добавить кэшпрофилей, то уже нет никакого смысла работать с ключами и отключать компонент.

Почему? Какая разница есть кеш или нет? Кеш находится вне компонента и использование key-техники никак не затрагивает есть он или нет.

Минуточку, сброс ВСЕХ стейтов компонента - это не ровно сбрасывать стейт в общем случае. Разрабы реакта показали, что они имеют в виду.

Они явно написали, что если вы хотите при каждом изменение пропсов сбрасывать стейт компонента, то используйте key-технику, иначе пишите тонну дополнительного кода в своём компоненте. - выбор что использовать довольно ясен.


0



Vitaly_js
13 фев 2025 в 16:03
После вопроса про кэш уже хочется задать вопрос, вы точно понимаете, что делает key? Вы не забыли про вот эту вот особенность: "... React will recreate the DOM ..."? То, что все useMemo и другие мемоизированные элементы скинутся? Речь идет именно о сбрасывании ВСЕХ стейтов компонента и перерисовку на экране.

Иными словами, вот берете вы данные из кэша и вам не нужно пересоздавать дом. Реакт сам выполнит сверку и найдет дом узлы, которые нужно обновить. А если внутри есть компоненты, которые не зависят от входных пропсов, ну не знаю, какая-нибудь косметика она вообще даже в сверке участвовать не будет. А вот при использовании key она будет вся пересоздана.

Мне вот любопытно, вы все это учитываете? И не забываем, что из-за эффектов могут быть переходные состояния и в вашем случае они всегда будут идти из начального состояния в чем далеко не всегда есть смысл. При этом вы сами пишете, что все эффекты все равно нужно полностью сконфигурировать. Просто вместо того, что бы сконфигурировать еще и зависимости, вы должны так спроектировать, что бы всегда все шло из начального состояния.

Если выкинуть эффекты, оно наверное так и будет. Хотя продумать, что мемные компоненты без зависимостей от входа должны быть вынесены куда-то в другое место иначе они все будут так же пересоздаваться впустую.


0



taujavarob
14 фев 2025 в 04:31
После вопроса про кэш уже хочется задать вопрос, вы точно понимаете, что делает key? Вы не забыли про вот эту вот особенность: "... React will recreate the DOM ..."? То, что все useMemo и другие мемоизированные элементы скинутся? Речь идет именно о сбрасывании ВСЕХ стейтов компонента и перерисовку на экране

Это я помню. Сброс всех стейтов - это именно то что нам надо. В данном случае.

Про кэш и useMemo - современная реализация кэша, типа TanStack Query, вполне имеет реализацию, когда кэш находится на самом верхнем уровне (ключом к нему являются обычно символьное значение) и такой кэш никак не волнует сброс состояния в различных компонентах приложения.

Просто вместо того, что бы сконфигурировать еще и зависимости, вы должны так спроектировать, что бы всегда все шло из начального состояния.

Но эта конфигурация есть не более чем действие по освобождению ресурсов при размонтировании компонентов. Не более того. - и тогда не надо думать как сбросить состояние компонента (и возможно нижележащих его children компонентов).

Хотя продумать, что мемные компоненты без зависимостей от входа должны быть вынесены куда-то в другое место иначе они все будут так же пересоздаваться впустую.

Да, кэш будет в другом месте. Это верно. Так и реализован кэш в TanStack Query.


0



Vitaly_js
14 фев 2025 в 11:44
Это я помню. Сброс всех стейтов - это именно то что нам надо. В данном случае.

Если под данным случаем вы понимаете реализацию какого-то профиля, то напоминаю вам использование key не учитывает ни кэш, ни то, что весь компонент со всеми дочерними элементами особенно если они обернуты в memo может вообще не требовать перерисовки. Вы просто каждый раз пересоздаете весь дом, скидываете все состояния. В зависимости от сложности использование key увеличивает время работы скриптов и отрисовки на экране и все это просто для того, что бы не конфигурировать зависимости. Напоминаю, использование кэша не приводит к пересозданию всего дома. Обновляются только конкретные элементы.

Я понимаю, что можно полностью плевать на любые оптимизации реакта. Но такой подход все таки не является общим случаем при использовании реакта. Поэтому сами разработчики предлагают его использовать только в конкретных узких случаях, когда компонент переключается в начальное состояние. Когда используется кэш в начальное состояние никто не переключается, поэтому пересоздавать весь Дом не нужно.

Про кэш и useMemo - современная реализация кэша, типа TanStack Query, вполне имеет реализацию, когда кэш находится на самом верхнем уровне (ключом к нему являются обычно символьное значение) и такой кэш никак не волнует сброс состояния в различных компонентах приложения.

Так об этом и речь. У нас есть кэш, и вместо того, что бы его использовать вы предлагает убирать старый дом, строить новый дом точно такой же как и старый, но с другими данными из кэша. В данном случае вообще состояние компонента обслуживается в другом месте. Зачем сам то компонент скидывать и пересоздавать дом? Почитайте какой кейс описан в документации. Когда у компонента нет вот этих сайдэффектов все сильно упрощается.

Но эта конфигурация есть не более чем действие по освобождению ресурсов при размонтировании компонентов. Не более того. - и тогда не надо думать как сбросить состояние компонента (и возможно нижележащих его children компонентов).

В том то и дело, в вашем случае вы не думаете о том, о чем нужно думать. Вы говорите, что упрощается сбрасывание в начальное состояние вообще всего. Это так. Вопрос, зачем? Вот если у вас есть мемные компоненты зачем их сбрасывать в нуль? Они зависят от своих свойств. Если у нескольких профилей один и тот же набор свойств, то получая данные из кэша эти компоненты даже в сверке участвовать по сути не будут. А вы предлагаете их создавать с нуля по новому. Зачем?

Я просто интереса ради взял пару простеньких компонентов внедрил в них хук, который просто по строке выбирает данные из массива. Получился такой импровизированный кэш. И посмотрел как все это работает. Без key 200 мс, с key 360мс. Разумеется не одна итерация.

Понятное дело мелочь. Но если вот так вот не думать на протяжении всего приложения может что-то существенное и получится.

Да, кэш будет в другом месте. Это верно. Так и реализован кэш в TanStack Query.

мемные компоненты это memo(ComponentName), а кэш - это данные, которые в них передаются.


0



taujavarob
15 фев 2025 в 06:41
Если под данным случаем вы понимаете реализацию какого-то профиля, то напоминаю вам использование key не учитывает ни кэш, ни то, что весь компонент со всеми дочерними элементами особенно если они обернуты в memo может вообще не требовать перерисовки

Случай, когда есть список имён слева и, при клике на имя в списке, справа появляется Профиль с этим именем.- то есть всякий раз приходится сбрасывать состояние компонента Профиль, обращаться к бакенду и выводить присланную.с бакенда информацию. - что тут можно то закешировать то? Разве что то что присылает бакенд, но тот кеш не зависит от реализации нашего компонента Профиль.

использование кэша не приводит к пересозданию всего дома. Обновляются только конкретные элементы.

В данном случае (по клике на имя в списке слева) мемоизация (Profile) никак не помогает. memo(Profile) всегда при каждом клике будет терять своё состояние и обращаться к бакенду за новым.

Я понимаю, что можно полностью плевать на любые оптимизации реакта. Но такой подход все таки не является общим случаем при использовании реакта.

Я не знаю что такое "общий случай" в React. - React предлагает много патернов для решения ваших задач. Вы вольны выбрать любой из них, который конкретно подходит в данном случае (слева список, справа Profile, который постоянно меняется при клике по имени в списке.)

Если у нескольких профилей один и тот же набор свойств, то получая данные из кэша эти компоненты даже в сверке участвовать по сути не будут.

У разных Profile разное имя. Что там может быть одинаковое? При смене имени состояние в Profile сбрасывается. Key-техника отлично подходит для данного случая - сброса состояния в Profile.

мемные компоненты это memo(ComponentName), а кэш - это данные, которые в них передаются

Мы разобрали случай, когла слева список имён а справа один(!) Profile с одним именем. Мемоизация Profile в данном случае не нужна вовсе. Ибо пропсы у него всегда будет меняться при клике по имени в списке.

Интересный случай, когда есть список компонентов Profile. К примеру. - в этом случае можно мемоизировать компонет Profile (memo(Profile)) , но раз это список то нужно будет также использовать key (как всегда для списка) - в этом случае при изменении списка memo(Profile) перерендится не будет, если данный профиль останется в списке при изменении (если нет, если исчезает из списка и потом снова появляется в списке , то создание, монтирование и рендер Profile будут производить всегда (независимо от мемоизация).

Так что использовпние memo(Profile) и key-техники в случае списка Profile, так и в случае наличия одного (или несколько) Profile на форме - нормально вполне.

Я думаю можно применять такую тактику разработки:

Использовать первоначально всюду key-технику. И мемоизацию компонент.

И в продакшен.

Если кто-то обнаружит медленную работу на клиенте, то подключать кеш сетевых запросов (типа что есть у TanStack Query) - и в продакшен.

Если снова со аременем кто-то на слабом компьютере обнаружит медленно работу по перерисовке дисплея компьютера, то купить ему новый компьютер только тогда заниматься более тонкой оптимизацией рендера.

Я как-то не вижу особого смысла заранее всюду писать memo или useMemo или useCallback (это необходимо при разработке библиотеки компонентов, но не в приложении). - тут наверное нужно применить принцип "не делай предварительной оптимизации если и так всё работает нормально.


0



Vitaly_js
15 фев 2025 в 11:56
Случай, когда есть список имён слева и, при клике на имя в списке, справа появляется Профиль с этим именем.- то есть всякий раз приходится сбрасывать состояние компонента Профиль, обращаться к бакенду и выводить присланную.с бакенда информацию. - что тут можно то закешировать то? Разве что то что присылает бакенд, но тот кеш не зависит от реализации нашего компонента Профиль.

Все что угодно. С одной стороны весь запрос к беку, а с другой стороны использовать мемные компоненты для различных данных профиля. Кэш, конечно, не зависит, а вот компонент, который использует данные может как учитывать кэш, так и каждый раз все скидывать и рисовать с нуля, хотя, данные получает моментально из кэша.

В данном случае (по клике на имя в списке слева) мемоизация (Profile) никак не помогает. memo(Profile) всегда при каждом клике будет терять своё состояние и обращаться к бакенду за новым.

Все зависит от реализации. Я имел в виду именно дочерние компоненты. Сам же профайл при получении нового id сразу получает данные из кэша, поэтому он ничего не скидывает и открисовывается новыми данными. Реакт запускает сверку и обновляет нужные дом узлы. Он не создает дом по новой как в случае с key

Я не знаю что такое "общий случай" в React.

Можете открыть документацию по реакт. И в обучающем приложении как раз рассказаны базовые возможности реакта. Это и есть общие случаи.

У разных Profile разное имя. Что там может быть одинаковое? При смене имени состояние в Profile сбрасывается. Key-техника отлично подходит для данного случая - сброса состояния в Profile.

Вы забываете суть данной статьи. Она не описывает реальное приложение, а предложена на подумать. Там все что угодно может быть. Например, там может быть название города пользователя, с иконкой и краткой информацией. Что может совпадать у тысяч пользователей. Выделяя эту информацию в мемный компонент, получая данные из кэша и вам уже не нужно перерисовывать на экране эту часть пользователя, если города совпадают. А вот если вы работаете через key эта часть будет полностью пересоздана, даже если у разных пользователей эта часть профиля совпадает.

Мы разобрали случай, когла слева список имён а справа один(!) Profile с одним именем. Мемоизация Profile в данном случае не нужна вовсе. Ибо пропсы у него всегда будет меняться при клике по имени в списке.

Еще раз посмотрите, что и как тут разбирается. А так же для чего.

То что разбирается конкретный небольшой функционал, что бы посмотреть на навыки вовсе не означает, что имеется в виду компонент из одной строки =) А Profile не нужно мемоизировать только если родительский компонент не перерисовывается. Но вообще, я повторяю, я имел в виду дочерние для Profile компоненты.

Я как-то не вижу особого смысла заранее всюду писать memo или useMemo или useCallback (это необходимо при разработке библиотеки компонентов, но не в приложении). - тут наверное нужно применить принцип "не делай предварительной оптимизации если и так всё работает нормально.

Без проблем. Но, что мешает вам тогда убрать вообще реакт. Взять шаблонизатор и всю страницу перерисовывать при каждом чихе? Вы понимаете, что использование реакт уже само по себе есть предварительная оптимизация?

Никто не говорит, что нужно от балды везде пихать всякое. Я говорю о том, что нужно понимать, что и как работает. Если вы понимаете с какими данными работаете, тогда зачем вам например лишний раз их обновлять на экране, когда в этом нет необходимости?

Я понимаю, если на вас насели и вы просто не спроектировали систему и сделали кое как. Но если вы во всем разобрались. Потратили на это время, зачем делать плохо?


0



taujavarob
16 фев 2025 в 06:58
Например, там может быть название города пользователя, с иконкой и краткой информацией. Что может совпадать у тысяч пользователей. Выделяя эту информацию в мемный компонент, получая данные из кэша и вам уже не нужно перерисовывать на экране эту часть пользователя, если города совпадают

Ок. Придумать такое конечно можно. При этом это будет работать если город не меняется при кликах по разным профилям. Но обычно и Профиль и Карточка Товара- это всегда с чистого листа выводится. То есть со сброса состояния.

Но, что мешает вам тогда убрать вообще реакт. Взять шаблонизатор и всю страницу перерисовывать при каждом чихе? Вы понимаете, что использование реакт уже само по себе есть предварительная оптимизация?

Мешает что на рынке растёт только количество React разработчиков. А остальных - не растёт или падает. Да и при необходимости оптимизировать React вполне подходит. Да, при необходимости. И только при необходимости.

Я понимаю, если на вас насели и вы просто не спроектировали систему и сделали кое как. Но если вы во всем разобрались. Потратили на это время, зачем делать плохо?

Не считаю key-технику чем-то "плохим". Одна из возможностей. А совершествование и оптимизация? - смотри ниже:

"Из выступления Педро Дуарте на конференции Next.js в 2021 году. Педро — один из создателей Radix UI, и здесь он описывает, сколько времени им потребовалось, чтобы реализовать полностью доступное раскрывающееся меню, которое хорошо работает во всех браузерах и поддерживает все программы чтения с экрана:

Dropdown Menu:
2,000+ hours
6 months
50 reviews
1,000s commits"

Вывод? - совершенству нет предела если есть ресурсы. Если у вас есть 2000 часов на реализацию Dropdown Menu, то оно конечно можно.

P. S. Вспомнил как выпустили iOS v1.0, в которой не было операции "копи-пасте" - ну, не успели. Бывает. Потом, через 6 месяцев, конечно, обновили версию и эта операция появилась. - но требование бизнеса успеть выпустить раньше всё же часто оказывается реальным. А оптимизация - часто это уже потом.

Спасибо за ответы. Беседа была интересная. Удачи! :-)


0



taujavarob
9 фев 2025 в 02:06
И вот в таких случаях, когда надо сбрасывать состояние при изменении пропсов - и надо использовать ключи.

Согласен с вами. Надо рассматривать и такую возможность как "рубить" "лист" или даже "сук" дерева компонентов, если это не приводит к потери производительности при смене key.

@Vitaly_js, - @Kergan88 имеет в виду раздел с названием "Resetting all state when a prop changes" в You Might Not Need an Effect.

В этом случае не имеет значение вообще что происходит (используется ли useEffect) в том компоненте, что монтируется в "дерево" с помощью key. - главное просто "сбросить всё состояние" компонента, и неважно как оно было установлено, с помощью useEffect или другим путём. Просто "рубится", создаётся новый "лист" или "сук" с новым состоянием и монтируется в "дерево". И всё. Довольно простое решение. В данном случае.


0



Vitaly_js
9 фев 2025 в 10:54
У автора статьи был усеченный случай, который должен был показывать общее поведение. Поэтому не нужно пытаться сюда впихнуть частные случаи, которые можно по разному оптимизировать.

Тем более, что при работе с запросами сбрасывать все состояния и переключение на нужные состояния это не одно и тоже.

То, что автор использовал setUser(null) вовсе не означает, что нужно все бросать и начинать оптимизацию. Переключение пользователей может быть вообще без фазы сброса, если брать все из кэша. В зависимости от различного поведения в useEffect компонент при изменении пропсов может вести себя по разному. Автор, во всяком случае, хотел проверить умение работать именно в этом случае.

Поэтому имеет значение, что и как происходит в эффектах и оптимизации начинать уже с финальным компонентом.

Или вы в принципе начинаете новый компонент зафигачив что-то в key?


0



taujavarob
10 фев 2025 в 03:36
Или вы в принципе начинаете новый компонент зафигачив что-то в key?

Это хороший вопрос. Я просто не знал вовсе про key до этого. - Но вот сейчас задумался- а почему бы его не использовать, ведь код становится проще. Гораздо проще.


0



taujavarob
8 фев 2025 в 01:24
Это же _стандартное_ решение, которое явно рекомендовано вот тут:

Оно понятное, но оно основано на том, что у вас в компоненте нет никакого состояния, как только username меняется, а более точно как только значение key меняется, компонент "отрезается" от дерева компонентов, создаётся заново и "пришивается" к дереву.

Такое поведение возможно, но для React он странное. В React все хороводят вокруг "состояния", а в случае key состояния нет вообще. Оно не нужно тогда. Поменялся key - руби компонент со всем его состоянием и возможно состоянием всех его children, создавай заново и монтируй снова в дерево компонентов.

Возможно, наверное, всё приложение создавать в таком стиле "рубки" - но оно будет какое-то странное для React.


0



UnknownHero
6 фев 2025 в 04:24
1. Key решает проблему и будет показывать только последнее состояние и не важно что там вызывалось до этого.
2. По "Can’t perform a React state update on an unmounted component…” https://github.com/reactwg/react-18/discussions/82
3. Dependency тоже условный для сценария с key, можно не писать если код стайл позволяет.

Ох уж эти собесы с задачками.


0



walkwithmeinhell
6 фев 2025 в 05:44
Объясните плиз, как работает идеальное решение, если юзер быстро кликает по рандомным юзернеймам. С useref понял как люди предлагали. В идеальном не понимаю как и зачем тот setUser(null) в начале useeffect


0



taujavarob
5 мар 2025 в 07:36
и зачем тот setUser(null) в начале useeffect

Если у вас уже есть старый user и при обращении на сервер произошла ошибка, то у вас новый user не заменит старого user. Для этого и нужно "сбросить" значение user на null перед обращением на сервер.


0



archyCuber
19 фев 2025 в 15:42
А что думаете насчет варианта с withResolvers?

function Profile({
  username,
  children,
}: {
  username: string;
  children: (user: User | null) => ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(null);
    const { promise, reject } = fetchProfile(username);
    promise.then(setUser);

    return () => {
      reject();
    };
  }, [username]);

  return children(user);
}

let fetchCount = 1;

function fetchProfile(username: string) {
  console.log(`🛜 Fetched ${getPluralizedTimes(fetchCount)}`);
  let { promise, resolve, reject } = Promise.withResolvers();
  setTimeout(
    () => resolve({ name: `Full Name ${username}`, username }),
    200 * fetchCount
  );
  return { promise, reject };
}
