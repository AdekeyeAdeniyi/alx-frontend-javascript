ES6 Classes
===========

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20221224%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221224T003219Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9e62c19bbf80177e777dec09f00293c2be1ba5254e09a82676fdfea9c5ec40d6)

Resources
---------

**Read or watch**:

*   [Classes](/rltoken/IDo2mlwrId8srxeBNEjftw "Classes")
*   [Metaprogramming](/rltoken/CQS69TtR8objrRABVPVNZA "Metaprogramming")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/Ma9lyltun86unTeMpNFqnQ "explain to anyone"), **without the help of Google**:

*   How to define a Class
*   How to add methods to a class
*   Why and how to add a static method to a class
*   How to extend a class from another
*   Metaprogramming and symbols

Requirements
------------

*   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using `Jest` and the command `npm run test`
*   Your code will be verified against lint using ESLint
*   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    

### Install Jest, Babel, and ESLint

in your project directory:

*   Install Jest using: `npm install --save-dev jest`
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
*   Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

<details>
    <summary> Click to show/hide file contents </summary>

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
</details>

### `babel.config.js`

<details>
    <summary> Click to show/hide file contents </summary>

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
</details>

### `.eslintrc.js`

<details>
    <summary> Click to show/hide file contents </summary>

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
</details>

### and???

Don???t forget to run `$ npm install` when you have the `package.json`