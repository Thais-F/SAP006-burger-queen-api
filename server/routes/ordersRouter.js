const { Router } = require('express')
const { getOrders } = require('../controller/ordersController')


const router = Router()

// aqui vai as requisições
router.get("/", getOrders)
router.get("/:orderId", )
router.post("/", )
router.put("/:orderId", )
router.delete("/:orderId", )

module.exports = router
