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


AI Engine Chatbot
