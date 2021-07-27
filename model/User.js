
const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        max:122,
        min:6
        
    },  
    

     email:{
        type:String,
        required:true,
        validate: [validator.isEmail, 'Please input a valid email!']

        
     },
     password: {
        type:String,
        required:true       
     },
     date:{
         type:Date,
         default:Date.now
     }


    }
);

const User = mongoose.model('User', userSchema);
module.exports = User