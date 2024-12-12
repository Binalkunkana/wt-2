const Eventemitter = require('events');
const { EventEmitter } = require('stream');

class myevent extends EventEmitter{}

const ticker=new EventEmitter()

ticker.on("upload",()=>{
    console.log("Video Uploaded");
})

setInterval(()=>{
    ticker.emit("upload")
},1000)