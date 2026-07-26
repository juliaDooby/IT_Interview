
25 вопросов задаваемых на собеседовании системным администраторам Linux
2016-03-24 в 13:21, рубрики: linux, ит-инфраструктура, Настройка Linux, системное администрирование
Перевод Андрей А. Породько. Оригинал Pradeep Kumar · March 21, 2016 (http://www.linuxtechi.com/25-interview-questions-for-linux-administrator-job/).
Надеюсь кому-нибудь пригодится. Меня спрашивали про ps, top и overcommitment в kvm ;-)
Внимание! Много букв и нет картинок.
От переводчика. Пожалуйста, не пишите в комментариях что что-то можно сделать по-другому — это перевод. Когда вам зададут на интервью в RedHat подобный вопрос, у вас будет возможность проявить себя ;-)

Вопрос:1 Что такое Kdump и для чего предназначен?

Ответ:
Kdump это механизм сохранения дампов при крахе системы или панике ядра. Дампы могут быть сохранены как на удаленной машине, так и на локальном диске. Анализируя дампы мы можем найти корневую причину отказа системы или паники ядра. В случае, если у вас есть платная поддержка ОС, вы можете отправить файл vmcore поставщику для дальнейшего анализа.
Вопрос:2 Как узнать когда файловая система проверялась последний раз?

Ответ:
При помощи команды tune2fs мы можем проверить, когда файловая система последний раз сканировалась на предмет ошибок.
# tune2fs -l <Device_Name> | grep «Last checked»
Вопрос:3 Как изменить срок действия пароля пользователя без изменения самого пароля?

Ответ:
Команда chage позволяет задать дату (срок) действия пароля для локальной учетной записи пользователя. Синтаксис команды такой:
# chage -d <date-in-yy-mm-dd> <User_Name>
Вопрос:4 Как заставить fsck проверить файловую систему ОС при следующей перезагрузке?

Ответ:
Для принудительного запуска утилиты fsck для проверки конкретной файловой системы при следующей перезагрузке, нужно создать пустой файл с именем 'forcefsck' в корне этой файловой системы. Например, если мы хотим проверить файловую системы смонтированную в каталог /home, команду будет выглядеть примерно так:
# cd /home; touch forcefsck; reboot
Вопрос:5 Каким инструментом анализируются дампы краха системы или файл vmcore в ОС CentOS 7 & RHEL 7?

Ответ:
Утилита или команда crash операционных систем CentOS 7 и RHEL 7 позволяет проводить анализ файлов дампов.
Вопрос:6 Как установить все патчи за исключением патчей ядра в CentOS и RHEL?

Ответ:
Параметр '–exclude=kernel*' команды yum позволяет установить все патчи кроме предназначенных для ядра. Например так:
# yum update –exclude=kernel*
Если добавить следующую строку в файл '/etc/yum.conf' мы предотвратим любые обновления ядра навсегда:
exclude=kernel*

Вопрос:7 Как проверить, что вы работаете на физическом или виртуальном сервере?

Ответ:
С помощью команды dmidecode мы можем проверить платформу сервера. Например так:
# dmidecode -t system | grep «Product Name»
Product Name: VMware Virtual Platform
Вопрос:8 Что такое automounter и для чего он служит?

Ответ:
Automounter это сервис в операционной системе Linux которые используется для монтирования удаленной или локальной файловой системы автоматически в момент обращения к ней. Когда файловая система неактивна в течение определенного периода времени сервис automounter (autofs) автоматически размонтирует ее. Основная польза от autofs заключается в том, что мы не должны монтировать файловую систему каждый раз когда она нам нужна, automounter сделает это за нас при обращении к этой файловой системе.
Вопрос:9 Как принудить пользователя изменить пароль при регистрации?

Ответ:
Команда 'chage' позволяет задать время окончания действия пользовательского пароля, например «chage -d 0 <user_name>». После этого, при попытке регистрации пользователя в системе (в том числе и по ssh), он будет получать предупреждение «Срок действия вашего пароля истек. Вы должны изменить ваш пароль и войти заново».
Вопрос:10 Как узнать как завершилась последняя команда — успешно или нет?

Ответ:
Можно получить статус завершения последней команды из переменной среды '$?', в ней хранится код завершения. Например:
# ls -l /var/
# echo $?
0
# ls -l /var/wwer
# echo $?
2
Код завершения 0 означает что команды выполнена успешно, любой отличное от нуля число свидетельствует об ошибке.
Вопрос:11 Как узнать, установлен ли конкретный rpm-пакет?

Ответ:
Возьмем например postfix. Следующее использование команды rpm покажет нам, установлен ли postfix или нет:
[root@cloud ~]# rpm -q postfix –last
postfix-2.10.1-6.el7.x86_64 Saturday 27 February 2016 11:56:43 PM EST
[root@cloud ~]#
Для этих же целей мы можем воспользоваться командой yum:
[root@cloud ~]# yum history package postfix

Вопрос:12 Как войти в режим одиночного пользователя (single user mode) в RHEL 7?

Ответ:
При загрузке системы нужно войти в меню загрузчика GRUB2, нажать 'e', найти строку начинающуюся с 'linux16/vmlinz' и заменить параметр 'ro' на 'rw init=/sysroot/bin/bash'. Нажать ctrl-x для продолжения загрузки.
Вопрос:13 Какая команда позволяет изменить имя хоста навсегда в CentOS 7 & RHEL 7?

Ответ:
Команда 'hostnamectl' используется для задания или изменения имени хоста. Например, так:
# hostnamectl set-hostname «New_HostName»
Кроме hostnamectl могут быть использованы команда 'nmtui'& 'nmcli', которые тоже могут изменять имя хоста в CentOS 7 и RHEL 7.

Вопрос:14 Как включить политики паролей (password policies) в Linux?

Ответ:
Политики паролей (password policies) включаются через pam (подсистему загружаемых модулей аутентификации). В Centos и RHEL у нас есть файл "/etc/pam.d/system-auth", в котором мы определяем требования к паролям. В ОС, основанных на Debian, для этих же целей служит файл "/etc/pam.d/common-password".
Вопрос:15 Как узнать, какие модуля ядра загружены в ОС Linux?

Ответ:
Команда 'lsmod' выдает список загруженных модулей ядра.
Вопрос:16 Какой командой можно проверить состояние ввода-вывода в Linux?

Ответ:
Есть несколько команд, таких как 'sar', 'iostat' и 'vmstat' с использованием которых мы можем проверить состояние ввода-вывода в Linux.
Вопрос:17 Каково назначение файлов '/etc/lvm/backup' и '/etc/lvm/archive'?

Ответ:
Каждый раз, когда мы создаём или изменяем любой lvm раздел, резервная копия метаданных сохраняется в файле '/etc/lvm/backup', а архив метаданных ведется в файле '/etc/lvm/archive' file. Используя команду vgcfgrestore мы можем восстановить метаданные группы томов lvm.
Вопрос:18 Как просмотреть таблицу маршрутизации в Linux?

Ответ:
Используя команды 'route -n' и 'netstat -nr' мы можем просмотреть таблицу маршрутизации в Linux.
Вопрос:19 Что происходит на фоне когда вы заходите по ssh на сервер Linux?

Ответ:
Каждый раз, когда мы заходим по ssh на любой Unix сервер, устанавливает TCP соединение между Клиентом и Сервером по порту 22 (по-умолчанию, если не указано другое) и Сервер выдает список версию протокола SSH которую он поддерживает. Если клиента она «устраивает», то соединение продолжается и после того как Сервер передаст свой публичный ключ и Клиент сохранит его в файле '~/.ssh/known_hosts' мы получим подсказку ssh.
Вопрос:20 Как изменить порт по-умолчанию для SSH на сервере Linux?

Ответ:
Значение порта по-умолчанию (22) для SSH может быть изменено в параметре «Port <NNN>» в файле '/etc/ssh/sshd_config'. Где NNN — это номер порта. После внесения изменений в этом файл, сервис SSH следует перезапустить.
Вопрос:21 Как увидеть временные метки dmesg в RHEL7?

Ответ:
Добавим параметр '-T' к команде dmesg можно увидеть временные метки dmesg.
Вопрос:22 Как узнать модель физического сервера из командной строки?

Ответ:
С помощью команды dmidecode можно узнать производителя и модель физического сервера. Например:
# dmidecode -t system
…
Handle 0x0011, DMI type 1, 27 bytes
System Information
Manufacturer: HP
Product Name: ProLiant DL580 Gen8
Version: P79
Serial Number: CKX42926E0
UUID: 97387735-1541-238A-1B33-533850564430
Wake-up Type: Power Switch
SKU Number: 728551-B21
Family: ProLiant
…

Вопрос:23 Как узнать версию BIOS сервера из командной строки?

Ответ:
С помощью команды dmidecode можно получить версию bios:
# dmidecode -t bios
# dmidecode 2.12
SMBIOS 2.8 present.
Handle 0x0010, DMI type 0, 24 bytes
BIOS Information
Vendor: HP
Version: P79
Release Date: 04/01/2014
Address: 0xF0000
Runtime Size: 64 kB
ROM Size: 16384 kB
…

Вопрос:24 Как расширить существующую группу томов lvm?

Ответ:
Сначала нужно создать pv (физический том) на пустом новом диске (например /dev/sdb) командой «pvcreate /dev/sdb» и затем, командой vgextend расширить группу: «vgextend <vloume_group_name> /dev/sdb».
Вопрос:25 Как посмотреть номер WWN на карте HBA на сервере Linux?

Ответ:
Существует как минимум, два способа с помощью которых можно узнать номер WWN для карты HBA.
Первый, с использованием команды systool. Например так:
# systool -c fc_host -v | grep «port_name»

Второй способ — просмотреть содержимое файла классов в файловой системе sys:
# cat /sys/class/fc_host/host*/port_name
0x7001639028cbeca0
0x7001639028cbefa2
0x7001639028cbf5d8
0x7001639028cbf6da

Top 35 Linux Interview Questions and Answers
By Vijay  Updated July 21, 2025
LINUX is one of the most used operating systems and is best known for its efficiency and fast performance. LINUX was first introduced by Linux Torvalds and is based on the Linux Kernel.

It can run on different hardware platforms manufactured by HP, Intel, IBM, etc.

In this article, we have covered many basic and advanced Linux interview questions and answers that include Linux admin and Linux commands interview questions to prepare for Linux OS interviews. Questions include Linux admin, Linux commands interview questions, etc.

LINUX Interview Question
Table of Contents: [Show]

Quick Quiz on Linux Interview Questions
Challenge your Linux knowledge with our comprehensive quiz covering Linux commands, file systems, networking, shell scripting, and system administration. Best for system administrators and Linux professionals preparing for technical interviews.

LINUX Interview Questions QUIZ
Master Linux concepts and ace your technical interviews
Question 1 of 10
Advanced Questions
What is the purpose of the 'awk' command?
Archive working files
Audio/video processing
Application workflow management
Text processing and pattern scanning
Beginner Level LINUX Interview Questions
Here we go.

Q #1) What do you understand by Linux Kernel? Is it legal to edit it?

Answer: ‘Kernel’ basically refers to the core component of a computer operating system that provides basic services for the other parts, as well as interacts with user commands. When it comes to the Linux Kernel, it is referred to as low-level system software providing an interface for user-level interactions.

The Linux Kernel is considered free and open-source software that is capable of managing hardware resources for users. Because it is released under the General Public License (GPL), it becomes legal for anyone to edit it.

Q #2) Differentiate between LINUX and UNIX?

Answer: Although there are multiple differences between LINUX and UNIX, enlisted points in the table below cover all the major differences.

LINUX	UNIX
LINUX is an open source software development and free operating system used for computer hardware & software, game development, PCs, etc.	UNIX is an operating system which is basically used in Intel, HP, internet servers, etc.
LINUX has priced as well as freely distributed and downloaded versions.	Different versions/flavours of UNIX have different price structures.
Users of this operating system could be anyone including home users, developers, etc.	This operating system was basically developed for mainframes, servers and workstations except for OSX which is designed such that it can be used by anyone.
File support system includes Ext2, Ext3, Ext4, Jfs, Xfs, Btrfs, FAT, etc.	File support system includes jfs, gpfs, hfs, etc.
BASH (Bourne Again Shell) is the Linux default shell i.e. text mode interface which supports multiple command interpreters.	Bourne shell serves as the text mode interface which is now compatible with many others including BASH.
LINUX provides two GUIs, KDE and Gnome.	Common desktop environment was created which serves as a GUI for UNIX.
Examples: Red Hat, Fedora, Ubuntu, Debian, etc.	Examples: Solaris, All Linux
It provides higher security and has about 60-100 viruses listed till date.	It is also highly secured and has about 85-120 viruses listed till date.
Q #3) Enlist the basic components of LINUX?

Answer: The Linux operating system consists of 3 components. They are:

Kernel: This is considered the core part and is responsible for all major activities of the Linux operating system. The Linux Kernel is considered free and open-source software that is capable of managing hardware resources for users. It consists of various modules and interacts directly with the underlying hardware.
System Libraries: Most of the functionalities of the operating system are implemented by the System Libraries. These act as special functions, using which application programs access the Kernel’s features.
System Utilities: These programs are responsible for performing specialized, individual-level tasks.
Q #4) Why do we use LINUX?

Answer: LINUX is used widely because it is completely different from other operating systems, where every aspect comes with something extra i.e. some additional features.

Some of the major reasons to use LINUX are listed below:

It is an open-source operating system where programmers get the advantage of designing their own custom OS
Software and the server licensing required to install Linux are completely free and can be installed on as many computers as required
It has low or minimum but controllable issues with viruses, malware, etc
It is highly secure and supports multiple file systems
Q #5) Enlist the features of the Linux operating system.

Answer: The following are some important features of the LINUX operating system:

Linux Kernel and application programs can be installed on any kind of hardware platform and thus are considered portable.
It serves the purpose of multitasking by serving various functions simultaneously.
It provides security services in three ways, namely, Authentication, Authorization, and Encryption.
It supports multiple users accessing the same system resources but using different terminals for operation.
Linux provides a hierarchical file system, and its code is freely available to all.
It has its own application support (to download and install applications) and customized keyboards.
Linux distros provide a live CD/USB to their users for installation.
Q #6) Explain LILO?

Answer: LILO (Linux Loader) is the boot loader for the Linux operating system to load it into the main memory so that it can begin its operations. Bootloader here is a small program that manages a dual boot. LILO resides in the MBR (Master Boot Record).

Its major advantage is that it allows the fast bootup of Linux when installed in the MBR.

Its limitation lies in the fact that all computers can’t tolerate modification of the MBR.

Q #7) What is Swap space?

Answer: Swap space is the amount of physical memory that is allocated for use by Linux to hold some concurrently running programs temporarily. This condition usually occurs when the RAM does not have enough memory to support all concurrently running programs. This memory management involves the swapping of memory to and from physical storage.

There are different commands and tools available to manage the Swap space usage.

Q #8) What do you understand by the Root account?

Answer: As the name suggests, it is like a system administrator account that gives you the ability to fully control the system. The root account serves as the default account whenever Linux is installed.

The following functions can be performed by the Root account:

Create user accounts
Maintain user accounts
Assign different permissions to each account created and so on.
Q #9) Explain what a virtual desktop is.

Answer: When there are multiple windows available on the current desktop and there appears the problem of minimizing and maximizing windows or restoring all the current programs, the ‘Virtual Desktop’ serves as an alternative. It allows you to open one or more programs on a clean slate.

Virtual desktops are stored on a remote server and offer the following benefits:

Cost savings as resources can be shared and allocated as and when required.
Resources and energy are used more efficiently.
Data integrity is improved.
Centralized administration.
Fewer compatibility issues.
Q #10) Differentiate between BASH and DOS?

Answer: The basic differences between BASH and DOS can be understood from the table below.


10
entries per page
Search:
BASH
DOS
BASH commands are case sensitive.	DOS commands are not case sensitive.
‘/’ character used as a directory separator.
‘\’ character acts as an escape character.	‘/’ character: serves as a command argument delimiter.
‘\’ character: serves as a directory separator.
File naming convention includes: 8 character file name followed by a dot and 3 characters for the extension.	No file naming convention is followed in DOS.
Showing 1 to 3 of 3 entries
‹1›
Q #11) Explain the term GUI.

Answer: GUI stands for Graphical User Interface. GUI is considered the most attractive and user-friendly because it consists of the use of images and icons. These images and icons are clicked and manipulated by the users for communication with the system.

Advantages of GUI:

It allows users to navigate and operate the software with the help of visual elements.
A more intuitive and rich interface is possible to create.
Fewer chances of occurrence of errors as complex, multi-step, dependent tasks are easily grouped.
Productivity is enhanced with the means of multitasking, as with a simple click of the mouse, the user is able to maintain multiple open applications and transitions between them.
Disadvantages of GUI:

End-users have less control over the operating system and file systems.
Although it is easier to use a mouse and keyboard for navigation and controlling the operating system, the whole process is a bit slow.
It requires more resources because of the elements that need to be loaded, such as icons, fonts, etc.
Q #12) Explain the term CLI.

Answer: CLI stands for Command Line Interface. It is a way for humans to interact with computers and is also known as the Command-line user interface. It relies on a textual request and response transaction process where the user types declarative commands to instruct the computer to perform operations.

Advantages of CLI

Very flexible
Can easily access commands
Much faster and easier to use by experts
It does not use much CPU processing time.
Disadvantages of CLI

Learning and remembering to type commands is hard.
It has to be typed precisely.
It can be very confusing.
Surfing the web, graphics, etc, are a few tasks that are hard or impossible to do on the command line.
Q #13) Enlist some Linux distributors (Distros) along with their usage.

Answer: Different parts of Linux, such as the kernel, system environment, graphical programs, etc, are developed by different organizations. LINUX Distributions (Distros) assemble all these different parts of Linux and give us a compiled operating system to be installed and used.

There are around six hundred Linux distributors. Some of the important ones are:

UBuntu: It is a well-known Linux Distribution with a lot of pre-installed apps and easy-to-use repositories and libraries. It is very easy to use and works like a MAC operating system.
Linux Mint: It uses Cinnamon and Mates Desktop. It works on Windows and should be used by newcomers.
Debian: It is the most stable, quickest, and user-friendly Linux distribution.
Fedora: It is less stable but provides the latest version of the software. It has a GNOME 3 desktop environment by default.
Red Hat Enterprise: It is to be used commercially and well-tested before release. It usually provides a stable platform for a long time.
Arch Linux: Every package has to be installed by you and is not suitable for beginners.
Intermediate-Level Linux Interview Questions
Q #14) How can you determine the total memory used by LINUX?

Answer: It is always required to keep a check on the memory usage in order to find out whether the user is able to access the server or the resources adequately. There are roughly 5 methods to determine the total memory used by Linux.

This is explained as below:

Free command: This is the simplest command to check memory usage. For Example, ‘$ free –m’, the option ‘m’ displays all the data in MBs.
/proc/meminfo: The next way to determine memory usage is to read /proc/meminfo file. For Example,  ‘$ cat /proc/meminfo’
Vmstat: This command lays out the memory usage statistics. For Example,  ‘$ vmstat –s’
Top command: This command determines the total memory usage as well as monitors the RAM usage.
Htop: This command also displays memory usage along with other details.
Q #15) Explain the 3 types of file permissions under LINUX?

Answer: Every file and directory in Linux is assigned three types of owners, namely ‘User’, ‘Group’, and ‘Others’. The three kinds of permissions defined for all three owners are:

Read: This permission allows you to open and read the file as well as list the contents of the directory.
Write: This permission allows you to modify the contents of the file, as well as add, remove, and rename files stored in the directories.
Execute: Users can access and run the file in the directory. You cannot run a file unless the execute permission is set.
Q #16) What is the maximum length for any file name under LINUX?

Answer: The maximum length for any file name under Linux is 255 characters.

Q #17) What are the permissions granted under LINUX?

Answer: A system administrator or the owner of the file can grant permissions using the ‘chmod’ command. The following symbols are used when writing permissions:

‘+’ for adding permission
‘-‘ for denying permission
Permissions also include a single letter, which denotes

u : user; g: group; o: other; a: all; r: read; w: write; x: execute.

Q #18) What are the different modes when using the vi editor?

Answer: The 3 different modes in the vi editor are listed below:

Command Mode/ Regular Mode
Insertion Mode/ Edit Mode
Ex Mode/ Replacement Mode
Q #19) Explain the Linux Directory commands along with the description.

Answer: The Linux Directory commands, along with descriptions, are as follows:

pwd: It is a built-in command that stands for ‘print working directory’. It displays the current working location, and the working path starting with / and the directory of the user. It displays the full path to the directory you are currently in.
Is: This command lists all the files in the current directory.
cd: This stands for ‘change directory’. This command is used to change to the directory you want to work from the present directory. We just need to type cd followed by the directory name to access that particular directory.
mkdir: This command is used to create an entirely new directory.
rmdir: This command is used to remove a directory from the system.
Q #20) Differentiate between Cron and Anacron?

Answer: The difference between Cron and Anacron can be understood from the table below:

Cron	Anacron
Cron allows the user to schedule tasks to be executed every minute.	Anacron allows the user to schedule tasks to be run either on a specific date or the first available cycle after the date.
Tasks can be scheduled by any normal user and are basically used when tasks have to be completed/executed at a particular hour or minute.	Anacron can be used only by super users and is used when a task has to be executed irrespective of hour or minute.
It is ideal for servers	It is ideal for desktops and laptops
Cron expects the system to be running 24×7.	Anacron does not expects the system to be running 24×7.
Q #21) Explain the working of the Ctrl+Alt+Del key combination on the Linux operating system.

Answer: The Ctrl+Alt+Del key combination on the Linux operating system is the same as it is for Windows, i.e., to restart the system. The only difference is that there is no confirmation message displayed, and the system is rebooted directly.

Q #22) What is the role of case sensitivity in affecting the way commands are used?

Answer: Linux is considered case-sensitive. Case sensitivity can sometimes serve as the reason for displaying different answers for the same command, as you might enter the different formats of commands each time. In terms of case sensitivity, the command is the same, but the only difference occurs in uppercase and lowercase letters.

For example,

cd, CD, Cd are different commands with different outputs.

Q #23) Explain the Linux Shell.

Answer: To execute any commands, the user uses a program known as the shell. The Linux shell is a user interface used for executing commands and communicating with the Linux operating system. Shell does not use the kernel to execute certain programs, create files, etc.

There are several shells available with Linux that include the following:

BASH (Bourne Again Shell)
CSH ( C Shell)
KSH ( Korn Shell)
TCSH
There are two types of Shell commands

Built-in shell commands: These commands are called from the shell and executed directly within the shell. Examples: ‘pwd’, ’help’, ’type’, ’set’, etc.
External/ Linux commands: These commands are shell-independent, have their binary, and are located in the file system.
Q #24) What is a Shell script?

Answer: As the name suggests, a shell script is a script written for the shell. This is a program file, or a flat text file, where certain Linux commands are executed one after another. Although the execution speed is slow, the Shell script is easy to debug and can also simplify everyday automation processes.

Q #25) Explain the features of a stateless Linux server.

Answer: The word stateless itself means no state. When on a single workstation, no state exists for the centralized server, and then the stateless Linux server comes into the picture. Under such conditions, scenarios like keeping all the systems in the same particular state can occur.

Some of the features of the Stateless Linux server are:

Stores a prototype of every machine
Store snapshots
Store home directories
Uses LDAP, which determines the snapshot of state to be run on which system.
Q #26) What are the system calls used for process management in Linux?

Answer: Process management in Linux uses certain system calls. These are mentioned in the table below with a brief explanation

System calls	Explanation
Fork()	To create a new process
Exec()	For execution of a new program
Wait()	To make the process to wait
Exit()	Exit/terminate the process
Getpid()	To find the unique process id
Getppid()	To find the parent process id
Nice()	To bias the currently running process property
Q #27) Enlist some Linux file content commands.

Answer: There are many commands present in Linux that are used to look at the contents of a file.

Some of them are listed below:

head: Displays the beginning of the file
tail: Displays the last part of the file
cat: Concatenate files and print on the standard output.
more: Displays the content in pager form and is used to view the text in the terminal window one page or screen at a time.
less: Displays the content in pager form and allows backward and single-line movement.
Q #28) Explain Redirection?

Answer: It is well known that every command takes input and displays output. The keyboard serves as the standard input device, and the screen serves as the standard output device. Redirection is defined as the process of directing data from one output to another or even cases where output serves as input data for another process.

There are three streams available in which the input and output of the Linux environment are distributed.

These are explained below:

Input Redirection: ‘<’ symbol is used for input redirection and is numbered as (0). Thus it is denoted as STDIN(0).
Output Redirection: ‘>’ symbol is used for output redirection and is numbered as (1). Thus, it is denoted as STDOUT(1).
Error Redirection: It is denoted as STDERR(2).
Q #29) Why is Linux considered more secure than other operating systems?

Answer: Linux is an open-source operating system, and nowadays it is growing rapidly in the tech world/market. Although the entire code written in Linux can be read by anyone, it is considered more secure for the following reasons:

Linux provides its users with limited default privileges, which are restricted to the lower levels. i.e., in the case of any virus attack, it will only reach local files and folders where the system-wide damage is saved.
It has a powerful auditing system that includes detailed logs.
Enhanced features of IPtables are used in order to implement a greater level of security for the Linux machine.
Linux has tougher program permissions before installing anything on your machine.
Linux Commands Interview Questions
Q #30) Explain command grouping in Linux?

Answer: Command grouping is done by the use of braces ‘()’ and parenthesis ‘{}’. Redirection is applied to the entire group when the command is grouped.

When commands are placed within the braces, they are executed by the current shell. Example, (list)
When the commands are placed within the parentheses, then they are executed by a subshell. Example, {list;}
Q #31) What does the Linux pwd (print working directory) command do?

Answer: The Linux pwd command displays the full path of the current location you are working in, starting from the root ‘/’. For example, to print the current working directory, enter “$ pwd”.

It can be used for the following purposes:

To find the full path of the current directory
Store the full path
Verify the absolute and physical path
Q #32) Explain the Linux ‘cd’ command options along with the description.

Answer: ‘cd’ stands for change directory and is used to change the current directory on which the user is working.

cd syntax : $ cd {directory}

The following purposes can be served with the ‘cd’ command:

Change from the current to a new directory
Change the directory using the absolute path
Change directory using the relative path
A few of the ‘cd’ options are listed below

cd~: Brings you to the home directory
cd-: Brings you to the previous directory
. : Bring you to the parent directory
cd/: Takes you to the entire system’s root directory
Q #33) What is known about the grep command?

Answer: Grep stands for ‘global regular expression print’. This command is used to match a regular expression against text in a file. This command performs pattern-based searching and only the matching lines are displayed as output. It makes use of options and parameters that are specified along with the command line.

For example, suppose we need to locate the phrase “our orders” in an HTML file named “order-listing.html”.

The command would then be as follows:

$ grep “our orders” order-listing.html

The grep command outputs the entire matching line to the terminal.

Q #34) How do you create a new file and modify an existing file in the vi editor? Also, list the commands used to delete information from the vi editor.?

Answer: The commands are:

vi filename: This is the command used to create a new file as well as modify an existing file.
View filename: This command opens an existing file in read-only mode.
X: This command deletes the character that is under the cursor or before the cursor location.
dd: This command is used to delete the current line.
Q #35) Enlist some Linux networking and troubleshooting commands.

Answer: Every computer is connected to a network internally or externally to exchange information. Network troubleshooting and configuration are essential parts of network administration. The networking commands enable you to quickly troubleshoot connection issues with another system, check the response of another host, etc.

A network administrator maintains a system network that includes network configuration and troubleshooting. Mentioned below are a few commands along with their description:

Mentioned below are a few commands along with their description

Hostname: To view the hostname (domain and IP address) of the machine and to set the hostname.
Ping: To check if the remote server is reachable or not.
ifconfig: To display and manipulate route and network interfaces. It displays network configuration. ‘ip’ is the replacement of ifconfig command.
netstat: It displays network connections, routing tables, and interface statistics. ‘ss’ is the replacement of netstat command which is used to get more information.
Traceroute: It is a network troubleshooting utility that is used to find the number of hops required for a particular packet to reach the destination.
Tracepath: It is the same as traceroute with the difference that it does not require root privileges.
Dig: This command is used to query the DNS name servers for any task related to the DNS lookup.
nslookup: To find DNS related query.
Route: It shows the details of the route table and manipulates the IP routing table.
mtr: This command combines ping and trace path into a single command.
Ifplugstatus: This command tells us whether the network cable is plugged in or not.
Conclusion
Thus concluding this article with the fact that Linux is a complete operating system having different versions that suit any type of user (new/experienced). Linux is considered a lot more user-friendly, stable, secure, reliable, and can run non-stop for years without a single reboot.
