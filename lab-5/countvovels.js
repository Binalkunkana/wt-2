const fs=require('fs');

const readfile=fs.readFile('count.txt',(err,data)=>{
    if(err){
        console.log("Read Not succ...");
    }
    else{
        const lowercase=data.toString().toLowerCase()

        const count=lowercase.match(/[aeiou]/g).length;

        console.log("Number of Vovel Is:",count);
        
    }
})

