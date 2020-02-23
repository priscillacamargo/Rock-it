This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all dependencies

### `npx json-server --watch db.json --port 3004`

First of all run the above command to start the server in the right port - this is important for the requests calls

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npx cypress open`

It opens the cypress test runner for integration tests

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing

For a smooth maintenance of the code base we use pre-commit hooks (through [husky](https://github.com/typicode/husky)) which check for [eslint](https://eslint.org/) errors and format the code with [prettier](https://prettier.io/). Please make sure your code respect the eslint rules otherwise you will not be able to commit.

In case you want to set in your editor the same rules used in this project regarding formatting (Really recommended!!!!) here are the specs for your .prettierrc.js file

```
module.exports = {
  printWidth: 100,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true
};
```

## Styles

For speed up the process the [Base Web](https://baseweb.design/) compoenent library was used and adapted according to the company's styleguide.
Globals settings were defined at the index.css.
The BEM methodology was used.

### Happy Coding (ﾉ ◕ ヮ ◕)ﾉ\*:・ﾟ ✧
