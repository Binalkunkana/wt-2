import React from "react";

let student=[
    {
        "name": "Binal",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "MobileNumber":1234567891
    },
    {
        "name": "Jill",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "MobileNumber":1234567891
    },
    {
        "name": "Khushi",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "MobileNumber":1234567891
    },
    {
        "name": "Jevarth",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "MobileNumber":1234567891
    },
    {
        "name": "Ronak",
        "age": 30,
        "city": "New York",
        "country": "USA",
        "MobileNumber":1234567891
    }]

function StudentTable(){
    return(
        <>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    <th >Name</th>
                    <th >Age</th>
                    <th >City</th>
                    <th >Country</th>
                    <th >Mobile Number</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((stu)=>{
                            return(
                                <tr>
                                    <td >{stu.name}</td>
                                    <td >{stu.age}</td>
                                    <td >{stu.city}</td>
                                    <td >{stu.country}</td>
                                    <td >{stu.MobileNumber}</td>
                                </tr> 
                           )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default StudentTable