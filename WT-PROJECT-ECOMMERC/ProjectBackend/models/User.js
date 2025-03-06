const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:String,
    email:{ type: String, unique: true, required: true },
    password:{type :String,required:true},
    address: String,
    phoneNumber: String,
    DateOfBirth: String,
    isActive:Boolean,
    balance:Number,
})

module.exports=mongoose.model('user_details',schema)