const http = require('http')
const fs = require('fs')
const { log } = require('console')

const server = http.createServer((req,res)=>{
    if(req.url=='/about'){
        res.end(fs.readFileSync('about.txt','utf-8'))
    }if(req.url=='/contact'){
        res.end(fs.readFileSync('contact.txt','utf-8'))
    }
})

server.listen(3000,()=>{
    console.log("Server Started In 3000 Port");
    
})