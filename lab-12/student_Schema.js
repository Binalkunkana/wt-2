const mongoose=require('mongoose')

const schema = mongoose.Schema({
    Name:String,
    Rollno:Number,
    Email:String
})

module.exports=mongoose.model("students",schema);