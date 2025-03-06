import React, { useState } from "react";

function Calculator() {
    const [input,setInput] = useState('')
    const handle=(e)=>{
        console.log(e);
        setInput(input+e)
        if(e == "=")
        {
            setInput(eval(input)) 
        }
        if(e=="CE"){
            setInput("")
        }
    }
    return (
        <>
            <input type="text" value={input}/>
            <table class="table">
            <tbody>
                    <tr>
                        <button onClick={()=>handle("1")}>1</button>
                        <button onClick={()=>handle("2")}>2</button>
                        <button onClick={()=>handle("3")}>3</button>
                        <button onClick={()=>handle("+")}>+</button>
                    </tr>
                    <tr >
                        <button onClick={()=>handle("4")}>4</button>
                        <button onClick={()=>handle("5")}>5</button>
                        <button onClick={()=>handle("6")}>6</button>
                        <button onClick={()=>handle("-")}>-</button>
                    </tr>
                    <tr>
                        <button onClick={()=>handle("7")}>7</button>
                        <button onClick={()=>handle("8")}>8</button>
                        <button onClick={()=>handle("9")}>9</button>
                        <button onClick={()=>handle("*")}>*</button>
                    </tr>
                    <tr>
                        <button onClick={()=>handle("/")}>/</button>
                        <button onClick={()=>handle(".")}>.</button>
                        <button onClick={()=>handle("%")}>%</button>
                        <button onClick={()=>handle("=")}>=</button>
                    </tr>
                    <tr>
                        <button onClick={()=>handle("0")}>0</button>
                        <button onClick={()=>handle("CE")}>CE</button>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Calculator