const { orders } = require('../db/models')

// tratamento de erro
const getOrders = async (req, res) => {
    const allOrders = await orders.findAll()
    res.status(200).json(allOrders);
}

// tratamento de erro
const getOrderById = async (req, res) => {
    const order_id = req.params.orderId;
    const order = await orders.findByPk(order_id);
    if (!order) {
      return res.status(400).json({message: "Pedido não encontrado"});
    }
    res.status(200).json(order);
}

const postOrder = async (req, res) => {
  const { client_name, table } = req.body;
  const products = req.body.products;

}
  
  module.exports = { getOrders, getOrderById }