const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    author_id: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    judul:String,
    harga:String,
    deskripsi:String,
    cover:String,
});

const book = mongoose.model('book', bookSchema);

module.exports = book;


