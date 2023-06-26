const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    top_up:String,
    checkout_link:String,
    status:String,
});

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;


