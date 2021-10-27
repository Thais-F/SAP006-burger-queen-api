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

// tratamento de erro
const postProduct = async (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body

  const newProduct = await products.create({name, price, flavor, complement, image, type, sub_type});

  res.status(200).json(newProduct)
}

// tratamento de erro, testar
const updateProduct = async (req, res) => {
  const product_id = req.params.productid;

  const product = await products.findByPk(product_id);
    if (!product) {
      return res.status(400).json({message: "Produto não encontrado"});
    }

  const { name, price, flavor, complement, image, type, sub_type } = req.body;

  const updatedProduct = await products.update({ name, price, flavor, complement, image, type, sub_type }, {
    where: {
      id: product_id
    }
  });

  res.status(200).json(updatedProduct);

}

// tratamento de erro
const deleteProduct = async (req, res) => {
  const product_id = req.params.productid;
  await products.destroy({
    where: {
      id: product_id
    }
  });

  res.status(200).send("Produto deletado com sucesso!");
}
  
  module.exports = { getProducts, getproductById, postProduct, updateProduct, deleteProduct }