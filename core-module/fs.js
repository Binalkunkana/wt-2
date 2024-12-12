const fs=require('fs')

// fs.readFile('index.js',(err,data)=>{
//     if(err){
//         console.log("Error occured");
//     }
//     else{
//         console.log('File read successfully');
//     }
// })

// fs.writeFile('content.txt','Hellow',(err)=>{
//     if (err) {
//         console.log('File Not Found');
//     }
//     else{
//         console.log('File saved successfully');
//     }
// })

// fs.exists('index.js',(exists)=>{
//     console.log((exists)?'File Exist!!!':'File Not Exist!!!!')
// })

// fs.appendFile('content.txt','Appended Text Is-This is appended text',(err)=>{
//     if(err){
//         console.log('Text Not Apended');
//     }
//     else{
//         console.log('Text Apended');
//     }
// })

// fs.unlink('context.txt',(err)=>{
//     console.log((err)?'File Not Deleted Successfully':'File Deleted Successfully');
    
// })

// fs.rename('path-module.js','path.js',(err)=>{
//     console.log((err)?'Rename Not Successfully':'Rename Successfully');  
// })

const readFile=fs.readFileSync('content.txt');
console.log(readFile.toString());

const writeFile=fs.writeFileSync('content.txt','This Is Synchronize Write Method','utf-8')
console.log(writeFile);

const appendedFile=fs.appendFileSync('content.txt',' This is Append File Syc','utf-8')
console.log(appendedFile);
