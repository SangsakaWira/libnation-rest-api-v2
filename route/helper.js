// kita perlu import controller dan kita initiate routing express juga disini
const express = require("express")
const multer  = require('multer')
const path = require("path")
const crypto = require("crypto")
const router = express.Router()
const helperController = require("../controller/helper")

storage = multer.diskStorage({
    destination: './cover',
    filename: function (req, file, cb) {
      console.log(file)
      return crypto.randomBytes(16, function (err, raw) {
        if (err) {
          return cb(err);
        }
        return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
      });
    }
  })
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

// Create book
router.post("/", multer({ storage: storage, fileFilter: fileFilter }).single('image'), helperController.upload)

module.exports = router


