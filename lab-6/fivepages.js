const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url=='/'){
        res.end("Home Page")
    }
    else if(req.url=='/about'){
        res.end("About Page")
    }
    else if(req.url=='/contact'){
        res.end("Contact Page")
    }
    else if(req.url=='/profile'){
        res.end("Profile Page")
    }
    else if(req.url=='/cart'){
        res.end("Cart Page")
    }
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})