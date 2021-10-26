const { orders } = require('../db/models')
const { ordersproducts } = require('../db/models')
const { products } = require('../db/models')

// tratamento de erro, excluir ordersproducts do resultado
const getOrders = async (req, res) => {
    const allOrders = await orders.findAll({
      include: { model: products, as: 'products' },
      attributes: { exclude: ['products[0].ordersproducts'] } 
    })
    res.status(200).json(allOrders);
}

// tratamento de erro, excluir ordersproducts do resultado
const getOrderById = async (req, res) => {
    const order_id = req.params.orderId;
    const order = await orders.findByPk(order_id, {
      include: { model: products, as: 'products' }
    });

    if (!order) {
      return res.status(400).json({message: "Pedido não encontrado"});
    }
    res.status(200).json(order);
}

// tratamento de erro, excluir ordersproducts do resultado
const postOrder = async (req, res) => {
  const { client_name, table } = req.body;
  const user_id = 1;
  const productsArray = req.body.products;

  let { product_id, qtd } = 0;

  const order = await orders.create({ client_name, table, user_id})
  const order_id = order.id;

  const promises = productsArray.map(async product => {
    product_id = product.id;
    qtd = product.qtd;
    await ordersproducts.create({ order_id, product_id, qtd})
  })

  await Promise.all(promises);

  const newOrder = await orders.findByPk(order_id, { 
    include: { model: products, as: 'products' },
    // through: { 
    //   model: ordersproducts,
    //   as: "ordersproducts",
    //   attributes: {exclude: ["order_id"] ["product_id"] }
    // }
  });
  
  res.status(200).send(newOrder);

}

// tratamento de erro, excluir ordersproducts do resultado
const updateOrder = async (req, res) => {
  const order_id = req.params.orderId;
  const { status } = req.body;
  
  await orders.update({status}, {
    where: {
      id: order_id
    }
  });

  const updatedOrder = await orders.findByPk(order_id, {
    include: { model: products, as: 'products' }
  });
    res.status(200).json(updatedOrder);
}

// tratamento de erro
const deleteOrder = async (req, res) => {
  const order_id = req.params.orderId;

  await orders.destroy({
    where: {
      id: order_id
    }
  })

  res.status(200).send("Pedido deletado com sucesso");
}
  
  module.exports = { getOrders, getOrderById, postOrder, updateOrder, deleteOrder }