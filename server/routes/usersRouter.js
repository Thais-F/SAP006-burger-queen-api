const { Router } = require('express')
const { getUsers } = require('../controller/usersController')


const router = Router()

// aqui vai as requisições
router.get("/", getUsers)
router.get("/:uid",  )
router.post("/", )
router.put("/:uid", )
router.delete("/:uid", )

module.exports = router