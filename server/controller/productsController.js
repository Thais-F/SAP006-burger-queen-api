const { products } = require('../db/models')

// tratamento de erro
const getProducts = async (req, res) => {
    const allProducts = await products.findAll();
    res.status(200).json(allProducts)
}

// tratamento de erro
const getproductById = async (req, res) => {
    const product_id = req.params.productid;
    const product = await products.findByPk(product_id);
    if (!product) {
      return res.status(400).json({message: "Produto não encontrado"});
    }
    res.status(200).json(product);
}
  
  module.exports = { getProducts, getproductById }