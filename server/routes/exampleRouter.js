const { Router } = require('express')
const { getExample, getOtherExample, postExample } = require('../controller/ExampleController')
const { getUsers } = require('../controller/usersController')
const { getProducts } = require('../controller/productsController')
const { getOrders } = require('../controller/ordersController')

const router = Router()

// aqui vai as requisições
router.get("/", getExample)
router.post("/", postExample)
router.get("/other", getOtherExample)

module.exports = router