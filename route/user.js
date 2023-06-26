// kita perlu import controller dan kita initiate routing express juga disini
const express = require("express")
const router = express.Router()
const userController = require("../controller/user")
const middleware = require("../config/middleware")

// login & register
router.post("/login", userController.login)
router.post("/register", userController.register)

// Create user
router.post("/",middleware.isValidated,userController.create)

// Get all users
router.get("/",middleware.isValidated,middleware.isAdmin,userController.get)

// Get user by id
router.get("/:id",middleware.isValidated,userController.getById)

// Update user by id
router.put("/",middleware.isValidated,userController.updateById)

// Delete user by id
router.delete("/:id",middleware.isValidated,userController.deleteById)

module.exports = router
