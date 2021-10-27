const { Router } = require('express')
const usersRouter = require('../routes/usersRouter')
const productsRouter = require('../routes/productsRouter')
const ordersRouter = require('../routes/ordersRouter')

const router = Router()

// aqui vão todas as rotas
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);


module.exports = router
