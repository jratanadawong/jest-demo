# JEST demo
## Prerequisites
* You will need access to your terminal/command line
* You will need to have the following installed:
  * git: http://git-scm.com/downloads
  * Node/npm: https://nodejs.org
  * yarn (optional/recommended): https://yarnpkg.com

## Preparing this demo
1. Clone this repository
`git clone https://github.com/jratanadawong/jest-demo.git`

This will clone the repo to your machine.
2. Run yarn
`yarn`

or if you didn't install yarn, run:
`npm install`

This installs all the necessary dependencies to play around with this demo.

### Running tests
* To run a test once: `yarn test` or `npm test`
* Run Jest in watch mode: `yarn test:watch` or `npm run test:watch`


### Usage
Open `tests/lessons.test.js` in your text editor of choice. Go through the commented out code that's separated by numbers one section at a time, and then run the tests using the command `yarn lessons` in your terminal.

Take your time trying to understand what's going on.

When you've got a grasp of that, open up `tests/quiz.test.js` to try to apply that learning yourself. You shouldn't need to edit anything in the `src` directory to get your tests to pass. You can run these tests by typing `yarn quiz` in your terminal.

Your tests will fail. Your goal is to get more tests passing until you've got them all complete!

### Jest documentation
Jest documentation can be found here:
https://jestjs.io/docs/getting-started

### TODO
* Mocks
* Test Driven Development