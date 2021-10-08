const { Router } = require('express')
const { getExample, getOtherExample } = require('../controller/ExampleController')
const { getUsers } = require('../controller/usersController')
const { getProducts } = require('../controller/productsController')
const { getOrders } = require('../controller/ordersController')

const router = Router()

// aqui vai as requisições
router.get("/", getExample)
router.get("/other", getOtherExample)
router.get("/")
router.get("/")
router.get("/")

module.exports = router