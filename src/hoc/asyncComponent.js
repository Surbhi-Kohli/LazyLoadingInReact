import React ,{Component} from "react";
const asyncComponent=(importComponent)=>{
    return class extends Component
    { 
        state={
            component:null
        }
        componentDidMount(){
            //importCOmponent is a function reference and when we execute it,it will return us a promise
            importComponent()
            .then(cmp=>{
                //cmp.default =dynamically imported component 
                this.setState({component:cmp.default});
            })
        }
        render(){
               const C=this.state.component;
               return C?<C {...this.props}/>:null
        }
    }
}
export default asyncComponent;
