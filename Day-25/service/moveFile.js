const multer = require('multer');
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '../uploads/images');


const storage = multer.diskStorage({
  destination: (req, file, next) => {
    if (!fs.existsSync(imagePath)) {
      fs.mkdirSync(imagePath, { recursive: true });
    }
    return next(null, imagePath);
  },
  filename: (req, file, next) => {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase().replace('.', '');
    if (!allowedExtensions.includes(fileExtension)) {
        return next(new Error('Only these extensions are allowed: ' + allowedExtensions.join(', ')));
    }
    return next(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });
module.exports = upload;