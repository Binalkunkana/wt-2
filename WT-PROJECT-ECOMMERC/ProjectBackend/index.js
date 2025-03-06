const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const app= express();
const UserRoute = require('./routes/UserRoutes')
const ProductRoute = require('./routes/ProductRoute')
const CategoryRoute = require('./routes/CategoryRoute')
const OrderRoute = require('./routes/OrderRoute')
// const PaymentRoute = require('./routes/PaymentRoute')
const CartRoute = require('./routes/CartRoute');
const ReviewRoute = require('./models/Review');

app.use(bodyParser.json());
app.use('/user',UserRoute)
app.use('/product',ProductRoute)
app.use('/category',CategoryRoute)
app.use('/order',OrderRoute)
// app.use('/payment',PaymentRoute)
app.use("/cart",CartRoute)
app.use("/review",ReviewRoute)


mongoose.connect(process.env.dbUrl).then(()=>{
    useNewUrlParser:true
    useUnifiedTopology:true
    console.log("Connected to DB");

    app.listen(process.env.PORT,()=>{
        console.log("Server Started");
    })
})