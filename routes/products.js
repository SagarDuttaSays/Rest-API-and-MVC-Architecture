const express = require('express')
const route = express.Router();
const productController = require('../controllers/products')

//middleware
const auth = require('../middleware/product').auth;

//Controllers -MVC
const createProduct = productController.createProduct;
const getProducts = productController.getProducts;
const getProduct = productController.getProduct;
const updateProduct = productController.updateProduct;
const replaceProduct = productController.replaceProduct;
const deleteProduct = productController.deleteProduct;

//routes
route.post('/', auth, createProduct)
.get('/', auth, getProducts)
.get('/:id', auth, getProduct)
.put('/:id', auth, replaceProduct)
.patch('/:id', auth, updateProduct)
.delete('/:id', auth, deleteProduct)

exports.router = route;