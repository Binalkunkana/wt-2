const schema=require('./student_Schema')
const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const student_Schema = require('./student_Schema')
const local="mongodb://localhost:27017/admin"
const atlas = "mongodb+srv://Binal:binal1611@cluster0.hesol.mongodb.net/simplecrud"

mongoose.connect(atlas).then(()=>{
    console.log("Connect to db server:");
    
    const app=express();
    app.use(bodyparser.json());

    // grt all
    app.get("/student",async (req,res)=>{
        const data = await student_Schema.find()
        res.send(data)
    })

    // get by id
    app.get("/student/:id",async (req,res)=>{
        const data=await student_Schema.findOne({id:req.params.id})
        res.send(data)
    })

    // insert
    app.post("/student",async (req,res)=>{
        const obj=new student_Schema({
            Name:req.body.Name,
            Rollno:req.body.Rollno,
            Email:req.body.Email
        })
        const data=await obj.save();
        res.send(data)
    })

    // get by id
    app.get("/student/id/:id",async(req,res)=>{
        let data = await student_Schema.findOne({_id:req.params.id})
        res.send(data);
    })

    // update
    app.patch("/student/:id:",async(req,res)=>{
        let upd=await student_Schema.findOne({_id:req.params.id})
        upd.Name = req.body.name
        upd.Rollno = req.body.rollno
        upd.Email = req.body.email
        const data=obj.save();
        res.send(data);
    })

    // delete
    app.delete("/student/:id", async (req,res)=>{
        const data= await student_Schema.deleteOne({_id:req.params.id})
        res.send(data);
    })

    app.listen(3000,()=>{
        console.log("Server Started @ 3000");
    })
})

