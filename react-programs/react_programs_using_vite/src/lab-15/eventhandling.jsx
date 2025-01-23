import React from "react";

function Eventhandling(){
    const handleclick=()=>{
        console.log("Button clicked");
    }

    return(
        <div>
            <button onClick={handleclick}>Click Me</button>
        </div>
    )
}

export default Eventhandling