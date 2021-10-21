const { users } = require('../db/models')

// só ajustar a resposta, por enquanto testando o que são parâmetros da requisição; tratamento de erro
const getUsers = async (req, res) => {
  const Users = await users.findAll({
    attributes: { exclude: ['password'] }
  });
  res.status(200).json(req.params.uid);
}

// Ajustar o uid, tratamento de erro
const getUserbyId = async (req, res) => {
  const userbyId = await users.findAll({
    where: {
      id: req.body.id,
    },
    attributes: { exclude: ['password'] }
  });
  res.status(200).json(userbyId);
}

// tratamento de erro
const postUsers = async (req, res) => {
  const { name, email, password, role, restaurant } = req.body
  await users.create({ name, email, password, role, restaurant })
  res.status(200).send("usuário adicionado com sucesso")
}

module.exports = { getUsers, postUsers, getUserbyId }