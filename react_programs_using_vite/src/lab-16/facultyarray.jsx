import React from "react"

let faculy=[
    {
        "name": "Binal",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile Number":1234567891
    },
    {
        "name": "Jill",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile Number":1234567891
    },
    {
        "name": "Khushi",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile Number":1234567891
    },
    {
        "name": "Jevarth",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile Number":1234567891
    },
    {
        "name": "Ronak",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile Number":1234567891
    }]

function FacultyArray(){
    return (
        <div className="container">
            <div className="row">
            {
                faculy.map((fac,index) => {
                return (
                
                <div className="col">    
                <div class="card" style={{width:"300px",height:"200"}}>
                <div class="card-body">
                    <h5 class="card-title">{index}-{fac.name}</h5>
                    <p class="card-text">{fac.age}</p>
                    <p class="card-text">{fac.city}</p>
                    </div>
                </div>
                </div>
                )
                })
            }
            </div>
        </div>
    )
}

export default FacultyArray;