import React from "react";
const Component3=(props)=>{
 return( <div>
           <h1>In component 3</h1>
           <h2>Lazy loaded with React.Suspense. React.Suspense does not work in Server Side Rendering</h2>
           <h3>Not In main bundle</h3>
        </div>
 );
}
export default Component3;