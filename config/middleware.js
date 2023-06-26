const jwt = require('jsonwebtoken');

exports.isValidated = (req, res, next) => {
    try{
        if(!req.headers.token) return res.status(401).send({msg:"Token tidak ada!"})
        jwt.verify(req.headers.token, process.env.SECRET_KEY)
        return next()
    }catch(err){
        res.status(401).send({
            msg: "Unauthorized!",
            err:err
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try{
        const decode = jwt.verify(req.headers.token, process.env.SECRET_KEY)
        if(decode.role === "admin") return next()
        res.status(401).send({
            msg: "Unauthorized! Anda bukan admin!"
        })
    }catch(err){
        res.status(401).send({
            msg: "Unauthorized!",
            err:err
        })
    }
}