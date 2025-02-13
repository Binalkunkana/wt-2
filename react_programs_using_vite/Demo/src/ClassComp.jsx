import { Component } from "react";
import Func1 from "./Func1";
import { Func2,Func3 } from "./Func2";
class ClassComp extends Component{
    render(){
        return (
            <>
                <h1>Hello World</h1>
                <h2>How Are You ?</h2>
                <Func1/>
                <Func2/> 
                <Func3/> 
            </>
        )
    }
}
export default ClassComp