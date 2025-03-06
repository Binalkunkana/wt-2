import React from "react"

let student=[
    {
        "name": "Student",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile_Number":1234567891
    },
    {
        "name": "Jill",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile_Number":1234567891
    },
    {
        "name": "Khushi",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile_Number":1234567891
    },
    {
        "name": "Jevarth",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile_Number":1234567891
    },
    {
        "name": "Ronak",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "Mobile_Number":1234567891
    }]

function StudentArray(){
    return (
        <div>
            {
                student.map((stu,index) => {
                return (<div class="card" style={{width:"300px",height:"200"}}>
                <div class="card-body">
                    <h5 class="card-title">{index}-{stu.name}</h5>
                    <p class="card-text">{stu.age}</p>
                    <p class="card-text">{stu.city}</p>
                    <p class="card-text">{stu.country}</p>
                    <p class="card-text">{stu.Mobile_Number}</p>
                    </div>
                </div>)
                })
            }
        </div>
    )
}

export default StudentArray;