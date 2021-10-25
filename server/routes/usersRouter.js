const { Router } = require('express')
const { getUsers, postUsers, getUserbyId, updateUser, deleteUser } = require('../controller/usersController')


const router = Router()

// aqui vão as requisições
router.get("/", getUsers)
router.get("/:uid", getUserbyId)
router.post("/", postUsers)
router.put("/:uid", updateUser)
router.delete("/:uid", deleteUser)

module.exports = router