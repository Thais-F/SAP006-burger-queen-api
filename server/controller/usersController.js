const { users } = require('../db/models')

// tratamento de erro
const getUsers = async (req, res) => {
  const Users = await users.findAll({
    attributes: { exclude: ['password'] }
  });
  res.status(200).json(Users);
}

// tratamento de erro
const getUserbyId = async (req, res) => {
  const user_id = req.params.uid;
  const userbyId = await users.findByPk(user_id, {
    attributes: { exclude: ['password'] }
  });
  if (!userbyId) {
    return res.status(400).json({error: "Usuário não encontrado"});
  }
  res.status(200).json(userbyId);
}

// tratamento de erro
const postUsers = async (req, res) => {
  const { name, email, password, role, restaurant } = req.body
  const newUser = await users.create({ name, email, password, role, restaurant })
  res.status(200).send("usuário adicionado com sucesso")
}

// tratamento de erro
const updateUser = async (req, res) => {
  const user_id = req.params.uid;
  const { name, email, password, role, restaurant } = req.body;
    await users.update({name, email, password, role, restaurant}, 
      {
        where: {
          id: user_id
        }
      })
    const updatedUser = await users.findByPk(user_id);
    res.status(200).json(updatedUser);
 }

 // tratamento de erro
 const deleteUser = async (req, res) => {
  const user_id = req.params.uid;
  await users.destroy({
    where: {
      id: user_id
    }
  })
  res.status(200).send("Usuário deletado com sucesso");
 }

module.exports = { getUsers, postUsers, getUserbyId, updateUser, deleteUser }