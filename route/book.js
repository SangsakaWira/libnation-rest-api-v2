// kita perlu import controller dan kita initiate routing express juga disini
const express = require("express")
const router = express.Router()
const bookController = require("../controller/book")

// Create book
router.post("/", bookController.create)

// Get all books
router.get("/", bookController.get)

// Get book by id
router.get("/:id", bookController.getById)

// Update book by id
router.put("/", bookController.updateById)

// Delete book by id
router.delete("/:id", bookController.deleteById)

module.exports = router


