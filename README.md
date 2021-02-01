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
### Question 1 : What is bundling?

Answer:
Bundling is the process of combining multiple JavaScript files to one single file without breaking the dependency hierarchy. In a React project, we make use bundlers like      Webpack or Browserify to bundle files.

 ### Question 2 : What is Code Splitting? How it helps a React application?

Answer:
In a typical React project, all the components and their dependencies are bundled to one file. Therefore, as the size of application increases, 
the bundle size increases. This affects performance because to show a single page in the application, we need to load the full bundle first. 
Code splitting gives control to developer to efficiently load components on demand.

 ### Question 3 : How can we implement code-splitting in React?

Answer:
One way to implement code-splitting is by using dynamic import() function. Webpack will not add the files included by dynamic import using import()
to the main bundle file.

Second technique is to use Lazy and Suspense.

 ### Question 4 : How Lazy and Suspense work in React?

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
 ### Question 5 : What is the role of  React.lazy() in code splitting ?
 
Answer : 
 React.lazy() makes it easy to create components that are loaded using dynamic import() but rendered like regular components.
 This automatically causes the bundle containing the component to load when the component is rendered. React.lazy() takes as its argument a
 function that must return a promise by calling import() to load the component. The returned promise resolves to a module with a default export 
 containing the React component.

 ### Question 6 : What is the role of Suspense in code splitting ?
 
 Answer : A component created using React.lazy() is loaded only when it needs to be rendered. 
 Therefore, you should display some kind of placeholder content while the lazy component is being loaded , such as a loading indicator. 
 This is exactly what React.Suspense is designed for.

React.Suspense is a component for wrapping lazy components. You can wrap multiple lazy components at different hierarchy levels with a single Suspense component.

The Suspense component takes a fallback prop that accepts the React elements you want rendered as placeholder content while all the lazy components get loaded.

 ### Question 7 : Will lazy works with React components that does not have default exports?
 Answer:No. At the moment, React.lazy() does not support using named exports for React components. 
 If you wish to use named exports containing React components, you need to reexport them as default exports in separate intermediate modules.

For example, let’s say you have OtherComponent as a named export in a module and you wish to load OtherComponent using React.lazy().
You would create an intermediate module for reexporting OtherComponent as a default export.

Components.js:
```
export const FirstComponent=()=>{/* some code */}
export const SecondCompoent=()=>{/* some code */}
export const ThirdCompoent=()=>{/* some code */}
```
OtherComponent.js:
```
export { ThirdComponent as default } from './Component'
```
You can now use React.lazy() to load ThirdComponent from the intermediate module. 

 ### Question 8 :

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

 ### Question 9 : What is the purpose of fallback property in Suspense?
 
 Answer:```Suspense``` lazy loads a component and renders it. During the waiting time, the component which is set as fallback will be displayed.
 
 ### Question 10: Will React.lazy and suspense work with server Side rendering?
 
 Answer:No. For server-side code-splitting, you should still use react-loadable.

 ### Question 11 :Improve the performance of following code using Lazy and Suspense?
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
