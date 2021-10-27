const { Router } = require('express')
const { getProducts, getproductById, postProduct, updateProduct, deleteProduct } = require('../controller/productsController')


const router = Router()

// aqui vão as requisições
router.get("/", getProducts)
router.get("/:productid", getproductById)
router.post("/", postProduct)
router.put("/:productid", updateProduct)
router.delete("/:productid", deleteProduct)

module.exports = router