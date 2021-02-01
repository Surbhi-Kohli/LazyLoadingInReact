# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

React Code-Splitting, Lazy, Suspense Interview Questions

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
### Question 1:What is bundling?

Answer:
Bundling is the process of combining multiple JavaScript files to one single file without breaking the dependency hierarchy. In a React project, we make use bundlers like      Webpack or Browserify to bundle files.

 ### Question 2: What is Code Splitting? How it helps a React application?

Answer:
In a typical React project, all the components and their dependencies are bundled to one file. Therefore, as the size of application increases, 
the bundle size increases. This affects performance because to show a single page in the application, we need to load the full bundle first. 
Code splitting gives control to developer to efficiently load components on demand.

 ### Question 3: How can we implement code-splitting in React?

Answer:
One way to implement code-splitting is by using dynamic import() function. Webpack will not add the files included by dynamic import using import()
to the main bundle file.

Second technique is to use Lazy and Suspense.

 ### Question 4 :How Lazy and Suspense work in React?

Answer:
Lazy and Suspense is used to implement code splitting in React. If there is a component like <RelatedProductsWidget /> 
which needs to be lazy loaded, we can go with Lazy.

First we keep the component ready using Lazy.
```
const RelatedProductsWidget = React.lazy(() => import('./RelatedProductsWidget'));
And where ever we need
<Suspense>
  <RelatedProductsWidget />
</Suspense>
```
 ### Question 5 :Will lazy works with React components that does not have default exports?
 Answer:No
 

 ### Question 6 :

Here we have a component <App /> which loads
component using Lazy.

Banner.js
```
import React from "react";

function Banner() {
  return <div>Here is the banner text</div>;
}

export default Banner;
```
And here is the <App/> component that loads <Banner />.
```
import React, { lazy, Suspense } from "react";

const Banner = lazy(() => import("./Banner"));

function App() {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Banner />
    </div>
  );
}
export default App;
```
For some reasons the application is not working. What can be the issue?

Answer:
 ```<Banner/>``` needs to be wrapped inside  ```<Suspense>```. Now, React is trying to load the banner component immediately.
 It is not waiting for the lazy load response. That is why it throws the error.

 ### Question 7 : What is the purpose of fallback property in Suspense?
 
 Answer:```Suspense``` lazy loads a component and renders it. During the waiting time, the component which is set as fallback will be displayed.
 
 ### Question 8: Will React.lazy and suspense work with server Side rendering?
 
 Answer:No

 ### Question 9 :Improve the performance of following code using Lazy and Suspense?
 ```
 import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);
```
