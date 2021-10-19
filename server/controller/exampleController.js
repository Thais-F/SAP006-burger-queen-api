// aqui vai o código que acessa o banco de dados
// const  teste  = require('../db/models/teste'); 
// const Sequelize = require('sequelize');
// aqui vão as importações dos models

const getExample = async (req, res) => {
  const testeTable = await teste.teste.findAll()
  console.log("você também pode utilizar o console para visualizar =)")
  res.json(testeTable)
}

const postExample = async (req, res) => {
  const { name, surname } = req.body
  await teste.teste.create({ name, surname})
  res.send("teste adicionado com sucesso")
}

const getOtherExample = (req, res) => {
  console.log("outro console =)")
  res.send("Request getOtherExample feita")
}

module.exports = { getExample, getOtherExample, postExample }