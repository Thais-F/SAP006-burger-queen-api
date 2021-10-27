const { Router } = require('express')
const { getOrders, getOrderById, postOrder, updateOrder, deleteOrder } = require('../controller/ordersController')


const router = Router()

// aqui vão as requisições
router.get("/", getOrders)
router.get("/:orderId", getOrderById)
router.post("/", postOrder)
router.put("/:orderId", updateOrder)
router.delete("/:orderId", deleteOrder)

module.exports = router
