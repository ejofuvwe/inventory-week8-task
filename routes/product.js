const express = require('express');
const router = express.Router();
const product = require('../controllers/productController')

router.post('/', product.addProduct)


module.exports=router;