// kita perlu import controller dan kita initiate routing express juga disini
const express = require("express")
const router = express.Router()
const transactionController = require("../controller/transaction")

// Create transaction
router.post("/", transactionController.create)

// Get all transactions
router.get("/", transactionController.get)

// Get transaction by id
router.get("/:id", transactionController.getById)

// Update transaction by id
router.put("/", transactionController.updateById)

// Delete transaction by id
router.delete("/:id", transactionController.deleteById)

module.exports = router