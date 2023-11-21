# 0x05. NodeJS Basics

![](https://tsh.io/wp-content/uploads/fly-images/12842/why-node-js-810x540.jpg)

## Resources

**Read or watch**:

-   [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide)

-   [Process API doc](https://node.readthedocs.io/en/latest/api/process/)

-   [Child process](https://nodejs.org/api/child_process.html)

-   [Express getting started](https://expressjs.com/en/starter/installing.html)

-   [Mocha documentation](https://mochajs.org/)

-   [Nodemon documentation](https://mochajs.org/)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone,  **without the help of Google**:

-   run javascript using NodeJS
-   use NodeJS modules
-   use specific Node JS module to read files
-   use  `process`  to access command line arguments and the environment
-   create a small HTTP server using Node JS
-   create a small HTTP server using Express JS
-   create advanced routes with Express JS
-   use ES6 with Node JS with Babel-node
-   use Nodemon to develop faster

## Requirements

-   Allowed editors:  `vi`,  `vim`,  `emacs`,  `Visual Studio Code`
-   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using  `node`  (version 12.x.x)
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory
-   Your code should use the  `js`  extension
-   Your code will be tested using  `Jest`  and the command  `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running  `npm run full-test`
-   All of your functions/classes must be exported by using this format:  `module.exports = myFunction;`

## Provided files

### `database.csv`

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS

```

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### and…

Don’t forget to run  `$ npm install`  when you have the  `package.json`

## Tasks

### 0. Executing basic javascript with Node JS


In the file  `0-console.js`, create a function named  `displayMessage`  that prints in  `STDOUT`  the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$

```


### 1. Using Process stdin


Create a program named  `1-stdin.js`  that will be executed through command line:

-   It should display the message  `Welcome to Holberton School, what is your name?`  (followed by a new line)
-   The user should be able to input their name on a new line
-   The program should display  `Your name is: INPUT`
-   When the user ends the program, it should display  `This important software is now closing`  (followed by a new line)

**Requirements:**

-   Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 

```


### 2. Reading a file synchronously with Node JS


Using the database  `database.csv`  (provided in project description), create a function  `countStudents`  in the file  `2-read_file.js`

-   Create a function named  `countStudents`. It should accept a path in argument
-   The script should attempt to read the database file synchronously
-   If the database is not available, it should throw an error with the text  `Cannot load the database`
-   If the database is available, it should log the following message to the console  `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format:  `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 

```


### 3. Reading a file asynchronously with Node JS


Using the database  `database.csv`  (provided in project description), create a function  `countStudents`  in the file  `3-read_file_async.js`

-   Create a function named  `countStudents`. It should accept a path in argument (same as in  `2-read_file.js`)
-   The script should attempt to read the database file asynchronously
-   The function should return a Promise
-   If the database is not available, it should throw an error with the text  `Cannot load the database`
-   If the database is available, it should log the following message to the console  `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format:  `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
