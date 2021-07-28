const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
// const productRoute =require('./routes/product')
// import routes

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

dotenv.config({path: './config.env'});


// connecting to Db
const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD )

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> console.log('connected to db'));



// body parser 
app.use(express.json());

// middlewares
app.use('/api/v1/user', authRoute);
// app.use('/api/v1/user', productRoute);

const port = process.env.PORT
app.listen(port,()=>
    console.log(`server up and running on ${port}`)
);

























