const mongoose = require("mongoose");

const productSchema =mongoose.Schema({
    name:{type:String,
    required:true
},
    category:{type:String,
    required:true
},
    description:{type:String,
    required:true
},
   price:{type:String,
    required:true
},
    imageURL:{type:String,
    required:true},

    user_id: {type:mongoose.Schema.Types.ObjectId,
    ref:'Users',required:true}

});
const Product = mongoose.model('product', productSchema);
module.exports = Product;