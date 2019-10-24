const express = require('express')
const router = express.Router()



const categoriesController = require('../controllers/categoriesControllers')
const productController = require('../../app/controllers/productControllers')
const cartController = require('../../app/controllers/cartControllers')
const orderController = require('../../app/controllers/orderControllers')
const usersController = require('../../app/controllers/usersControllers')

const { authenticateUser } = require('../../app/middlewares/authentication')
router.post('/user/register', usersController.register)
router.post('/user/login', usersController.login)
router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)
router.delete('/categories/:id', categoriesController.destroy)
router.get('/products', productController.list)
router.get('/products/:id', productController.show)
router.post('/products', productController.create)
router.delete('/products/:id', productController.destroy)
router.get('/carts', authenticateUser,cartController.list)

router.post('/carts', authenticateUser,cartController.create)
router.delete('/products/:id', authenticateUser,cartController.destroy)
router.get('/orders', authenticateUser,orderController.list)
//router.get('/orders/:id',authenticateUser, orderController.show)
router.post('/orders', authenticateUser,orderController.create)
router.delete('/orders/:id',authenticateUser, orderController.destroy)



//router.delete('/user/logout', authenticateUser, usersController.logout)
router.get('/user/account', authenticateUser, usersController.account)

module.exports = router