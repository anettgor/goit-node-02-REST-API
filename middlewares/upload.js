const multer = require("multer");
const path = require("path");

const tmpDir = path.join(process.cwd(), "tmp");

const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({ storage: uploadStorage });

module.exports = upload;
