// import dari model
const book = require('../model/book')

exports.create = (req, res) => {
    book.create(req.body).then(doc=>{
        res.send(doc)
    })
}

exports.get = (req, res) => {
    book.find().then(doc=>{
        res.send(doc)
    })
}

exports.getById = (req, res) => {
    const {id} = req.params
    book.findOne({_id:id}).then(doc=>{
        res.send(doc)
    })
}

exports.updateById = (req, res) => {
    book.findOneAndUpdate({_id:req.body.id},req.body,{new:true}).then(doc=>{
        res.send(doc)
    })
}

exports.deleteById = (req, res) => {
    book.findOneAndDelete({_id:req.params.id}).then(doc=>{
        res.send(doc)
    })
}