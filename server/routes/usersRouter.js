const { Router } = require('express')
const { getUsers, postUsers, getUserbyId } = require('../controller/usersController')


const router = Router()

// aqui vai as requisições
router.get("/", getUsers)
router.get("/:uid", getUserbyId)
router.post("/", postUsers)
router.put("/:uid", )
router.delete("/:uid", )

module.exports = router