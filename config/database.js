const mongoose = require('mongoose');

const URI = process.env.MONGODB || "mongodb://localhost:27017/libnation-back-end";

module.exports = () => {
    // DB configuration
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once('open', () => {
        console.warn('DB connected');
    });
};