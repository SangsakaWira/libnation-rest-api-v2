const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    wallet:String,
    nama_lengkap:String,
    role:{
        type:String,
        enum : ['user','admin','operator'],
        default: 'user'
    }
});

const user = mongoose.model('user', userSchema);

// Yang butuh adalah controller
module.exports = user;


