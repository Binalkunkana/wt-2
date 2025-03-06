const express = require('express')
const Category = require('../models/Category')
const router = express.Router()


router.get('/', async (req,res)=>{
    const data = await Category.find()
    res.send(data)
})

router.get('/:id', async (req,res)=>{
    const data = await Category.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req,res)=>{
    const data = await Category.create(req.body)
    res.send(data)
})


router.put('/:id', async (req,res)=>{
    const data = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(data)
})

router.delete('/:id', async (req,res)=>{
    Category.findByIdAndDelete(req.params.id).then(() => res.json({ message: "User deleted" }));
})

module.exports = router