const express=require("express")

const app=express()

app.use("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/about",(req,res)=>{
    res.send("About Us")
})

app.get("/student",(req,res)=>{
    res.send("Student Page")
})

app.get("/student/contct",(req,res)=>{
    res.send("Contact Page")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})