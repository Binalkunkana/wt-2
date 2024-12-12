const child_process=require('child_process');
const { stdout, stderr } = require('process');

child_process.exec("echo 'Hello!!'",(err,stdout,stderr)=>{
    console.log(stdout);
})