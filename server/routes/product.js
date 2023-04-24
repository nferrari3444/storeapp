const express = require('express')

const ProductCtrl = require('../controllers/product')
const {isAdmin} = require("../controllers/auth")


const router = express.Router()

// CREATE
router.post('/product',  isAdmin, ProductCtrl.createProduct)

router.put('/product/:id', ProductCtrl.updateProduct )

router.delete('/product/:id', ProductCtrl.deleteProduct)

router.get('/product/:id', ProductCtrl.getProductById)

router.get('/products', ProductCtrl.getProducts)

module.exports = router