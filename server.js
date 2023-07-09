const PORT = process.env.PORT || 5000
const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const dbInit = require("./config/database")
const app = express()

dotenv.config()
dbInit()

const middleware = require("./config/middleware")

// Import routes
const userRouter = require("./route/user")
const bookRouter = require("./route/book")
const helperRouter = require("./route/helper")
const transactionRouter = require("./route/transaction")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

// publikasi folder cover
app.use('/cover', express.static('cover'))

app.use("/user", userRouter)
app.use("/helper", helperRouter)
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
