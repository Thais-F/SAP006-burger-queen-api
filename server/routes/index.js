const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
const usersRouter = require('../routes/usersRouter')
const productsRouter = require('../routes/productsRouter')
const ordersRouter = require('../routes/ordersRouter')

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);


module.exports = router
