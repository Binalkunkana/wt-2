const express = require('express')
const User = require('../models/User')
const router= express.Router()

router.get('/', async (req,res)=>{
    const data = await User.find()
    res.send(data)
})

router.get('/:id', async (req,res)=>{
    const data = await User.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req,res)=>{
    const data = await User.create(req.body)
    res.send(data)
})


router.put('/:id', async (req,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(User=>res.json(User))
})

router.delete('/:id', async (req,res)=>{
    User.findByIdAndDelete(req.params.id).then(() => res.json({ message: "User deleted" }));
})

module.exports=router