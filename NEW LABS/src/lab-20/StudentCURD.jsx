import { useState } from "react";

function StudentCurd() {
    const [studet,setStudent]= useState([
        {id:0,name:"Binal",rollno:1},
        {id:1,name:"Jill",rollno:2},
        {id:2,name:"Khushi",rollno:3},
        {id:3,name:"Yuvli",rollno:4},
        {id:4,name:"Shubham",rollno:5}
    ])

    const deletestudent = ()=>{
        setStudent(studet.filter(item=>item.id !== id))
    }

    return(
        <>
            <ol className="list-group list-group-numbered">
                {studet.map((stu)=>{
                    return(
                        <li className="list-group-item">
                            <span>{stu.name} - {stu.rollno}</span>
                            <button onClick={()=>{
                                deletestudent(stu.id)
                            }}>DELETE</button>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}

export default StudentCurd;