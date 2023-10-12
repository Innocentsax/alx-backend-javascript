# ES6 Promises - Javascript

![](https://raw.githubusercontent.com/yingshandeng/image-host/master/data/do-you-promise.png)

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.[read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Learning Objectives

- Promises (how, why, and what)
- How to use the __then__, __resolve__, __catch__ methods
- How to use every method of the `Promise object`
- __Throw / Try__
- The `await` operator
- How to use an `async function`

## Get a quick idea about the subject matter

- [Introduction to Javascript Promise](https://web.dev/promises/)
- [The await keyword in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [async in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Try /Throw in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Requirements

- All your files will be executed on `Ubuntu 18.04 LTS` using `NodeJS 12.11.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Installation Breakdown

- Machine ubuntu 18.04 LTS
    To install node on your ubuntu machine
```bash
$ sudo apt-get install -y nodejs
```
- NodeJs v12.22.12
- npm v6.14.16
- insatalling __jest, babel, eslint__
```bash
$ npm install --save-dev eslint jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
```
- create a file called __package.json__ then copy-paste the following code
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

-  create a file called __babel.config.js__ then copy paste the following code
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
- copy paste this into a file __utils.js__
```js
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```
- copy-paste this in a file called __.eslintrc.js__
