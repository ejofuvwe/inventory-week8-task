const Product = require('../model/Product')

exports.addproduct = async (req,res) => {
    let product = req.body
    let user = req.user
    product.userid = user._id;
    let response = await Product.add(product)
    res.status(201).json(`product added with id:${response._id}`);
}