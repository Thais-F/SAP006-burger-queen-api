const { Router } = require('express')
const { getProducts, getproductById } = require('../controller/productsController')


const router = Router()

// aqui vão as requisições
router.get("/", getProducts)
router.get("/:productid", getproductById)
router.post("/", )
router.put("/:productid", )
router.delete("/:productid")

module.exports = router