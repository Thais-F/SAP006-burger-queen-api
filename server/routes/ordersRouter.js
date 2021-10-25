const { Router } = require('express')
const { getOrders, getOrderById } = require('../controller/ordersController')


const router = Router()

// aqui vão as requisições
router.get("/", getOrders)
router.get("/:orderId", getOrderById)
router.post("/", )
router.put("/:orderId", )
router.delete("/:orderId", )

module.exports = router
