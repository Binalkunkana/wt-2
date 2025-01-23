import React from "react";

function Childcomponent(props){
    return <h1>{props.message}</h1>
}

function Parentcomponent(){
    return <Childcomponent message="Props Executed!!"/>
}

export default Parentcomponent