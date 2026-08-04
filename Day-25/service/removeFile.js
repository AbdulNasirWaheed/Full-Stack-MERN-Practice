const fs = require('fs');
const path = require('path');

function removeFile(fileName) {
    if (!fileName) return;
    const imagePath = path.join(__dirname, '../uploads/images');
    const fullPath = path.join(imagePath, fileName);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
    }
}

module.exports = removeFile;