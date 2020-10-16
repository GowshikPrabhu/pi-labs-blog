const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'postfiles/');
  },
  filename: function (req, file, cb) {
    let d = new Date();
    cb(
      null,
      d.getDate() +
        '-' +
        d.getMonth() +
        '-' +
        d.getFullYear() +
        '_' +
        file.originalname
    );
  }
});

module.exports = storage;
