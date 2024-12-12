const fs=require('fs');


fs.copyFile('studentdetail.txt','xyz.txt',(err)=>{
    console.log((err)? "File Not Write Sucsessfully" : "File Write Sucsessfully")
})

