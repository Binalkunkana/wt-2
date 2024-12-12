const fs=require('fs');
const world_count=require('word-count')
var str;
fs.readFile('count.txt',(err,data)=>{
    if(err){
        console.log("File Not Read Successfully");
    }
    else{
       str= data.toString();  
       var words=world_count(str);
       console.log(words);
    }
})