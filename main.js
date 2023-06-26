const PORT = 3000
const express = require("express")
const dbInit = require("./config/database")
const dotenv = require('dotenv')
const app = express()

const middleware = require("./config/middleware")

dbInit()
dotenv.config()

// Import routes
const userRouter = require("./route/user")
const bookRouter = require("./route/book")
const transactionRouter = require("./route/transaction")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use("/user", userRouter)
app.use("/book",middleware.isValidated,bookRouter)
app.use("/transaction",middleware.isValidated,transactionRouter)

app.get("/",(req,res)=>{
    res.send({
        msg:"Libnation REST API v1.0.0"
    })
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server is running in port", PORT)
})
