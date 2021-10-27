const { users } = require('../db/models')

// feito!
const getUsers = async (req, res, next) => {
  try {
    const Users = await users.findAll({
      attributes: { exclude: ['password'] }
    });
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
}

// feito!
const getUserById = async (req, res, next) => {
  try {
    const user_id = req.params.uid;
    const userbyId = await users.findByPk(user_id, {
      attributes: { exclude: ['password'] }
    });
    if (!userbyId) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(userbyId);
  } catch (error) {
    next(error);
  }
}

// feito!
const postUsers = async (req, res, next) => {
  try {
    const { name, email, password, role, restaurant } = req.body
    const newUser = await users.create({ name, email, password, role, restaurant })
    res.status(200).send(newUser)
  } catch (error) {
    next(error);
  }
}

// feito!
const updateUser = async (req, res, next) => {
  try {
    const user_id = req.params.uid;
    const userbyId = await users.findByPk(user_id);
    if (!userbyId) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const { name, email, password, role, restaurant } = req.body;
    await users.update({ name, email, password, role, restaurant },
      {
        where: {
          id: user_id
        }
      })
    const updatedUser = await users.findByPk(user_id, {
      attributes: { exclude: ['password'] }
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

// feito!
const deleteUser = async (req, res, next) => {
  try {
    const user_id = req.params.uid;
    await users.destroy({
      where: {
        id: user_id
      }
    })
    res.status(200).send("Usuário deletado com sucesso");
  } catch(error) {
    next(error);
  }
}

module.exports = { getUsers, postUsers, getUserById, updateUser, deleteUser }