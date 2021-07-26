const express = require('express')
const app = express();
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import routes
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();



// connecting to Db

mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, ()=> console.log('connected to db'));



// body parser 
app.use(express.json());

// middlewares
app.use('/api/user', authRoute);


app.listen(5000,()=>
    console.log('server up and running')
);

























