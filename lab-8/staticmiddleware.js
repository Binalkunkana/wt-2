const express = require('express');

const app=express()

app.use(express.static("./images"))
app.use(express.static("./"))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(3000,(req,res)=>{
    console.log("Server Started");
})