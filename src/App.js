import logo from './logo.svg';
import React ,{Suspense,useState} from "react";
import './App.css';
import {BrowserRouter as Router,Route,NavLink,Switch } from 'react-router-dom'
import Component1 from "./Components/Component1/Component1";//included in global bundle
//import Component2 from "./Components/Component2/Component2";//this kind of import instructs webpack(the build tool) to include imported file in global bundle
//import Component3 from "./Components/Component3/Component3";
import asyncComponent from "./hoc/asyncComponent";
const asyncComponent2= asyncComponent(()=>{
  return import("./Components/Component2/Component2")//Dynamic import syntax -->means whatever is passed in params to import will be imported only when the outer function is 
})                                                      //executed
const AsyncComponent3=React.lazy(()=>import("./Components/Component3/Component3")); //we pass a function inside React.lazy()
//we ought to use default exports only,Named exports are not supported
//i.e the Component3 must be default exported for it to be passed in React.lazy()
function App() {
  const [show,setShow]=useState(false);
  const modeHandler=()=>{
    setShow(show=>!show);
  }
  return (
    <Router>

    <div className="App">
      <header className="App-header">
       <NavLink className="navClass" exact  activeStyle={{
    fontWeight: "bold",
    color: "white",
    textDecoration:"none"
  }} to="/"><nav>Component 1</nav></NavLink>
       
         <NavLink className="navClass" exact  activeStyle={{
    fontWeight: "bold",
    color: "white",
    textDecoration:"none"
  }} to="/Component2"><nav>Component 2</nav></NavLink>   
   <NavLink className="navClass" exact  activeStyle={{
      fontWeight: "bold",
      color: "white",
      textDecoration:"none"
     }} to="/Component3">
      <nav>Component 3</nav>
  </NavLink>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={modeHandler}>Toggle</button>
      {
        show?(<Suspense fallback={<div>Loading...</div>}><h5>I am not in routes but still can be lazy loaded</h5></Suspense>):null
      }
      <Switch>
      <Route path="/Component2" exact component={asyncComponent2}/>
      <Route path="/Component3" render={()=>(<Suspense fallback={<div>loading...</div>}>
                                               <AsyncComponent3/>
                                          </Suspense>)}/>
      <Route path="/" component={Component1}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
