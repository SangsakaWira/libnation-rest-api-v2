// import dari model
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const user = require('../model/user')
const SECRET_KEY = process.env.SECRET_KEY || "scr3t561!kxlh"

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userData = await user.findOne({ username:username });
        if (userData) {
            const match = await bcryptjs.compare(password, userData.password);
            if (match) {
                const token = jwt.sign({ id_user:userData._id, role:userData.role }, SECRET_KEY, { expiresIn: '36000s' });
                res.status(200).send({
                    token
                })
            } else {
                res.status(401).send({
                    msg:"Password salah!"
                })
            }
        } else {
            res.status(401).send({
                msg: "User tidak ditemukan!"
            })
        }
    } catch (err) {
        console.log(err)
        res.send({ err })
    }
}

exports.register = (req, res) => {
    user.create({
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10)
    }).then(doc => {
        res.send(doc)
    })
}

exports.create = (req, res) => {
    user.create(req.body).then(doc => {
        res.send(doc)
    })
}

exports.get = (req, res) => {
    user.find().then(doc => {
        res.send(doc)
    })
}

exports.getById = (req, res) => {
    const { id } = req.params
    user.findOne({ _id: id }).then(doc => {
        res.send(doc)
    })
}

exports.updateById = (req, res) => {
    user.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }).then(doc => {
        res.send(doc)
    })
}

exports.deleteById = (req, res) => {
    user.findOneAndDelete({ _id: req.params.id }).then(doc => {
        res.send(doc)
    })
}