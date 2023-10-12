# ES6 Basics

![](https://res.cloudinary.com/practicaldev/image/fetch/s--3uACPZfr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/398a310kjdiv647cld1y.jpg)

ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

JavaScript ES6 brings new syntax and new awesome features to make your code more modern and more readable. It allows you to write less code and do more. ES6 introduces us to many great features like arrow functions, template strings, class destruction, Modules… and more.

## Learning Objectives

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Project requirements

- All your files will be executed on `Ubuntu 18.04 LTS` using `NodeJS 12.11.x`
- Allowed editors: __vi, vim, emacs, Visual Studio Code__
- All your files should end with a new line
- A __README.md__ file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the `Jest` Testing Framework
- Your code will be analyzed using the linter `ESLint` along with specific rules that we’ll provide
- All of your functions must be exported

## Work environment setup

- machine: Ubuntu 18.04 LTS
- Node version: v12.22.12
- npm version: v6.14.16

you can install node from your apt repo with the below command
```bash

$ sudo apt-get install -y nodejs

# or install from the github

$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs -y

# to check version installed

$ node -v
$ npm -v
```
### Insatalling jest, Babel and ESLint

- [ESLint insatallation guide](https://eslint.org/docs/latest/use/getting-started)

```bash

$ npm install --save-dev jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ npm install --save-dev eslint

```

### Configurations

- create a file pakage.json and add copy-paste this code
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

- create a file babel.config.js and copy-paste this code

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

- create a file called .eslintrc.js and cop-paste this code
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

- now run the command
```bash
$ npm install
```
__AFTER THIS IS DONE A node_module would be in your current directory containing all packages installed__
