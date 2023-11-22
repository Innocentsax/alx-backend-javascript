# 0x06. Unittests in JS

![](https://static1.smartbear.co/crossbrowsertesting/media/blog/cbt-blog-javascript-frameworks-3.png)

## Resources

**Read or watch:**

- [Mocha documentation](https://mochajs.org/)

- [Chai](https://www.chaijs.com/api/)

- [Sinon](https://sinonjs.org/releases/v7.5.0/)

- [Express](https://expressjs.com/en/guide/routing.html)

- [Request](https://www.npmjs.com/package/request)

- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone **without the help of Google**:

-   How to use Mocha to write a test suite
-   How to use different assertion libraries (Node or Chai)
-   How to present long test suites
-   When and how to use spies
-   When and how to use stubs
-   What are hooks and when to use them
-   Unit testing with Async functions
-   How to write integration tests with a small node server


## Tasks

### 0. Basic test with Mocha and Node assertion library


**Install Mocha using npm:**

-   Set up a scripts in your  `package.json`  to quickly run Mocha using  `npm test`
-   You have to use  `assert`

**Create a new file named  `0-calcul.js`:**

-   Create a function named  `calculateNumber`. It should accepts two arguments (number)  `a`  and  `b`
-   The function should round  `a`  and  `b`  and return the sum of it

**Test cases**

-   Create a file  `0-calcul.test.js`  that contains test cases of this function
-   You can assume  `a`  and  `b`  are always number
-   Tests should be around the “rounded” part

**Tips:**

-   For the sake of the example, this test suite is slightly extreme and probably not needed
-   However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements:**

-   You have to use  `assert`
-   You should be able to run the test suite using  `npm test 0-calcul.test.js`
-   Every test should pass without any warning

**Expected output**

```
> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 

```

**Run test**

```
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 

```


### 1. Combining descriptions


**Create a new file named  `1-calcul.js`:**

-   Upgrade the function you created in the previous task (`0-calcul.js`)
-   Add a new argument named  `type`  at first argument of the function.  `type`  can be  `SUM`,  `SUBTRACT`, or  `DIVIDE`  (string)
-   When type is  `SUM`, round the two numbers, and add  `a`  from  `b`
-   When type is  `SUBTRACT`, round the two numbers, and subtract  `b`  from  `a`
-   When type is  `DIVIDE`, round the two numbers, and divide  `a`  with  `b`  - if the rounded value of  `b`  is equal to 0, return the string  `Error`

**Test cases**

-   Create a file  `1-calcul.test.js`  that contains test cases of this function
-   You can assume  `a`  and  `b`  are always number
-   Usage of  `describe`  will help you to organize your test cases

**Tips:**

-   For the sake of the example, this test suite is slightly extreme and probably not needed
-   However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements:**

-   You have to use  `assert`
-   You should be able to run the test suite using  `npm test 1-calcul.test.js`
-   Every test should pass without any warning

**Expected output**

```
> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'

```


### 2. Basic test using Chai assertion library


While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

**Let’s install Chai with npm:**

-   Copy the file  `1-calcul.js`  in a new file  `2-calcul_chai.js`  (same content, same behavior)
-   Copy the file  `1-calcul.test.js`  in a new file  `2-calcul_chai.test.js`
-   Rewrite the test suite, using  `expect`  from  `Chai`

**Tips:**

-   Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
-   The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code

**Requirements:**

-   You should be able to run the test suite using  `npm test 2-calcul_chai.test.js`
-   Every test should pass without any warning


### 3. Spies


Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.

**Let’s install Sinon with npm:**

-   Create a new file named  `utils.js`
-   Create a new module named  `Utils`
-   Create a property named  `calculateNumber`  and paste your previous code in the function
-   Export the Utils module

**Create a new file named  `3-payment.js`:**

-   Create a new function named  `sendPaymentRequestToApi`. The function takes two argument  `totalAmount`, and  `totalShipping`
-   The function calls the  `Utils.calculateNumber`  function with type  `SUM`,  `totalAmount`  as  `a`,  `totalShipping`  as  `b`  and display in the console the message  `The total is: <result of the sum>`

**Create a new file named  `3-payment.test.js`  and add a new suite named  `sendPaymentRequestToApi`:**

-   By using  `sinon.spy`, make sure the math used for  `sendPaymentRequestToApi(100, 20)`  is the same as  `Utils.calculateNumber('SUM', 100, 20)`  (validate the usage of the  `Utils`  function)

**Requirements:**

-   You should be able to run the test suite using  `npm test 3-payment.test.js`
-   Every test should pass without any warning
-   You should use a  `spy`  to complete this exercise

**Tips:**

-   Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors
-   Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions
-   Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function
