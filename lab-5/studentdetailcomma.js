const fs=require('fs')

const detail= fs.readFile('studentdetail.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Not Sucsessfull");
    }
    else{
        console.log(data.slice(':'));
    }
})