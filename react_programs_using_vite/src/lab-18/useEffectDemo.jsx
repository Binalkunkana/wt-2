import React, { useEffect, setState, useState } from "react";

function UseEffectDemo() {
    const [count,setCount] = useState(0)//0 thi start kre
    useEffect(()=>{
        console.log("Hellow World");
    },[])//[count]
    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>
    )
}

export default UseEffectDemo;