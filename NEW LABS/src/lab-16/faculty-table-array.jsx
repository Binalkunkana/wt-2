import React from "react";

let faculy=[
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


function FacultyTable(){
    return(
        <table className="table table-bordered border-primary">
            <thead>
            <tr>
                <th className="table-primary">Name</th>
                <th className="table-secondary">Age</th>
                <th className="table-success">City</th>
                <th className="table-danger">Country</th>
                <th className="table-warning">Mobile Number</th> 
            </tr>
            </thead>
            <tbody>
        {faculy.map((fac)=>{
            return(
                    <tr>
                        <td className="table-primary">{fac.name}</td>
                        <td className="table-secondary">{fac.age}</td>
                        <td className="table-success">{fac.city}</td>
                        <td className="table-danger">{fac.country}</td>
                        <td className="table-warning">{fac.MobileNumber}</td>
                </tr>  
            )
        })}
        </tbody>
    </table>
    )
}

export default FacultyTable 