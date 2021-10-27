const { products } = require('../db/models')

// feito!
const getProducts = async (req, res, next) => {
    try{
      const allProducts = await products.findAll();
      res.status(200).json(allProducts)
    }
    catch (error){
      next(error)
    }
}

// feito!
const getproductById = async (req, res, next) => {
  try{
    const product_id = req.params.productid;
    const product = await products.findByPk(product_id);
    if (!product) {
      return res.status(400).json({message: "Produto não encontrado"});
    }
    res.status(200).json(product);
  }
  catch (error){
    next(error)
  }
}

// feito!
const postProduct = async (req, res, next) => {
  try{
    const { name, price, flavor, complement, image, type, sub_type } = req.body

    const newProduct = await products.create({name, price, flavor, complement, image, type, sub_type});
  
    res.status(200).json(newProduct)
  }
  catch (error){
    next(error)
  }
}

// feito!
const updateProduct = async (req, res, next) => {
  try{
    const product_id = req.params.productid;

    const product = await products.findByPk(product_id);
      if (!product) {
        return res.status(400).json({message: "Produto não encontrado"});
      }
  
    const { name, price, flavor, complement, image, type, sub_type } = req.body;
  
    await products.update({ name, price, flavor, complement, image, type, sub_type }, {
      where: {
        id: product_id
      }
    });
  
    const updatedProduct = await products.findByPk(product_id);
  
    res.status(200).json(updatedProduct);
  }
  catch (error){
    next(error)
  }
}

// feito!
const deleteProduct = async (req, res, next) => {
  try{
    const product_id = req.params.productid;
    await products.destroy({
      where: {
        id: product_id
      }
    });
  
    res.status(200).send("Produto deletado com sucesso!");
  }
  catch (error){
    next(error)
  }
}
  
  module.exports = { getProducts, getproductById, postProduct, updateProduct, deleteProduct }