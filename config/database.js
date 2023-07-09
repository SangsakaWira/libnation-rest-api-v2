const mongoose = require('mongoose');
const fs = require('fs');
const dir = '../cover';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

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