const mongoose = require('mongoose');

const URI = process.env.MONGODB || "http://localhost:27107";

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