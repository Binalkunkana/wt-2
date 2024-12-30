const fs=require('fs')

const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    fs.readFile('home.txt',(err,data)=>{
        res.send(data.toString())
    })
})

app.get('/about',(req,res)=>{
    fs.readFile('about.txt',(err,data)=>{
        res.send(data.toString())
    })
})

app.get('/contact',(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
        res.send(data.toString())
    })
})

app.get('/cart',(req,res)=>{
    fs.readFile('cart.txt',(err,data)=>{
        res.send(data.toString())
    })
})

app.get('profile',(req,res)=>{
    fs.readFile('profile.txt',(err,data)=>{
        res.send(data.toString())
    })
})