// import dari model
const transaction = require('../model/transaction')

exports.create = (req, res) => {
    transaction.create(req.body).then(doc=>{
        res.send(doc)
    })
}

exports.get = (req, res) => {
    transaction.find().then(doc=>{
        res.send(doc)
    })
}

exports.getById = (req, res) => {
    const {id} = req.params
    transaction.findOne({_id:id}).then(doc=>{
        res.send(doc)
    })
}



exports.updateById = (req, res) => {
    transaction.findOneAndUpdate({_id:req.body.id},req.body,{new:true}).then(doc=>{
        res.send(doc)
    })
}

exports.deleteById = (req, res) => {
    transaction.findOneAndDelete({_id:req.params.id}).then(doc=>{
        res.send(doc)
    })
}