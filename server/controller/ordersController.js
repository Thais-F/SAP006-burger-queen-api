const { orders } = require('../db/models')
const { ordersproducts } = require('../db/models')
const { products } = require('../db/models')

// Feito!
const getOrders = async (req, res, next) => {
  try {
    const allOrders = await orders.findAll({
      include: {
        association: 'products',
        attributes: { exclude: ["createdAt", "updatedAt"] },
        through: {
          as: 'qtd',
          attributes: ['qtd']
        }
      },
    })
    res.status(200).json(allOrders);
  }
  catch (error) {
    next(error)
  }
}

// Feito!
const getOrderById = async (req, res, next) => {
  try {
    const order_id = req.params.orderId;
    const order = await orders.findByPk(order_id, {
      include: {
        association: 'products',
        attributes: { exclude: ["createdAt", "updatedAt"] },
        through: {
          as: 'qtd',
          attributes: ['qtd']
        }
      },
    });

    if (!order) {
      return res.status(400).json({ message: "Pedido não encontrado" });
    }
    res.status(200).json(order);
  }
  catch (error) {
    next(error)
  }
}

// Feito!
const postOrder = async (req, res, next) => {
  try {
    const { client_name, table } = req.body;
    const user_id = 1;
    const productsArray = req.body.products;

    let { product_id, qtd } = 0;
    let allChecked = true;

    const checkProduct = productsArray.map(async product => {
      product_id = product.id;
      const checked = await products.findByPk(product_id)
      if (!checked) {
        const productNotFound = product_id;
        allChecked = false
        return res.status(400).json({ message: `Produto ${productNotFound} não encontrado!` })
      }
    })

    await Promise.all(checkProduct);

    if (allChecked) {
      const order = await orders.create({ client_name, table, user_id, processedAt: new Date() })
      const order_id = order.id;

      const createAssociation = productsArray.map(async product => {
        product_id = product.id;
        qtd = product.qtd;
        await ordersproducts.create({ order_id, product_id, qtd })
      })

      await Promise.all(createAssociation);

      const newOrder = await orders.findByPk(order_id, {
        include: {
          association: 'products',
          attributes: { exclude: ["createdAt", "updatedAt"] },
          through: {
            as: 'qtd',
            attributes: ['qtd']
          }
        },
      });

      res.status(200).send(newOrder);
    }
  }
  catch (error) {
    next(error)
  }
}

// Feito!
const updateOrder = async (req, res, next) => {
  try {
    const order_id = req.params.orderId;

    const order = await orders.findByPk(order_id);
    if (!order) {
      return res.status(400).json({ message: "Pedido não encontrado" });
    }

    const { status } = req.body;
    await orders.update({ status, processedAt: new Date() }, {
      where: {
        id: order_id
      }
    });

    const updatedOrder = await orders.findByPk(order_id, {
      include: {
        association: 'products',
        attributes: { exclude: ["createdAt", "updatedAt"] },
        through: {
          as: 'qtd',
          attributes: ['qtd']
        }
      },
    });
    res.status(200).json(updatedOrder);
  }
  catch (error) {
    next(error)
  }
}

// Feito!
const deleteOrder = async (req, res, next) => {
  try {
    const order_id = req.params.orderId;

    await orders.destroy({
      where: {
        id: order_id
      }
    })

    res.status(200).send("Pedido deletado com sucesso");
  }
  catch (error) {
    next(error)
  }
}

module.exports = { getOrders, getOrderById, postOrder, updateOrder, deleteOrder }