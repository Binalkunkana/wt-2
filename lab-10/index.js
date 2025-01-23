const schema=require('../lab-11/student_Schema')
const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const student_Schema = require('../lab-11/student_Schema')

const atlasurl="mongodb+srv://24010101655:binal@1611@cluster0.hesol.mongodb.net/students"

mongoose.connect(atlasurl).then(()=>{
    const app= express();

    app.use(bodyparser.json())
    app.post("/student",async(req,res)=>{
        const obj=new student_Schema({
            StudentName:req.body.Name,
            StudentRollno:req.body.Rollno,
            StudentEmail:req.body.Email,

            //  ...req.body
        })
    })
})

// faculty no ne prodyct no database bnavano che 
// function  ma : find,findone,findmany,delete...aa bdhi
// avu j bdhu faculty ne product mate
// 