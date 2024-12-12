const fs=require('fs');

const stu = `
    Rollno:101,Name:Binal,Surname:Kunkana
    Rollno:102,Name:Jill,Surname:Jagad
    Rollno:103,Name:Khushi,Surname:Bosamiya 
`

fs.writeFile('studentdetail.txt',stu,(err)=>{
    console.log((err)? "File Not Write Sucsessfully" : "File Write Sucsessfully")
})

