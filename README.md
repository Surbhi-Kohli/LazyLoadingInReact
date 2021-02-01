# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

React Code-Splitting, Lazy, Suspense Interview Questions

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
### Question:What is bundling?

 ### Answer:

  Bundling is the process of combining multiple JavaScript files to one single file without breaking the dependency hierarchy. In a React project, we make use bundlers like      Webpack or Browserify to bundle files.

 ### Question 2: What is Code Splitting? How it helps a React application?

Answer:

In a typical React project, all the components and their dependencies are bundled to one file. Therefore, as the size of application increases, 
the bundle size increases. This affects performance because to show a single page in the application, we need to load the full bundle first. 
Code splitting gives control to developer to efficiently load components on demand.

