// import dari model
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const user = require('../model/user')

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userData = await user.findOne({ username });
        const match = await bcryptjs.compare(password, userData.password);

        if (userData) {
            if (match) {
                const token = jwt.sign({ id_user:userData._id, role:userData.role }, process.env.SECRET_KEY, { expiresIn: '60s' });
                res.send({
                    token
                })
            } else {
                res.send({
                    msg:"Password salah!"
                })
            }
        } else {
            res.send({
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