import React from "react";

let fruit= ["banana","apple","cherry"]
function MapMethod(){
    return (
        <div>
            {fruit.map((fruit,index)=>{
                    return <h1>{fruit} - {index}</h1>
            })}
        </div>
    )
}

export default MapMethod;