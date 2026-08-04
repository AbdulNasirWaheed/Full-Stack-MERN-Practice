
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

const imagePath = path.join(__dirname, './uploads/images');

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    if (!fs.existsSync(imagePath)) {
      fs.mkdirSync(imagePath, { recursive: true });
     return next(null, imagePath);
    },
    filename: (req, file, next) => {
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = path.extname(file.originalname).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            return next(new Error('Only these extensions are allowed: ' + allowedExtensions.join(', ') ));
        }
        return next(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });
app.post('/create',upload.single('profile'), (req, res) => {
   try {
    return res.status(200).json({ message: 'File uploaded successfully' }); 
   }
   catch (error) {
    return res.status(500).json({ message: 'Error uploading file', error: error.message });
   }

});

app.listen(80,() => {
    console.log('Server is running on port 80');
});