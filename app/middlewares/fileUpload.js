const multer = require('multer');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname.toLowerCase()));
    }
});

// Init Upload
const upload = multer({
    storage: storage
    // limits: { fileSize: 1000000 },
    // fileFilter: function (req, file, cb) {
    //     checkFileType(file, cb);
})

// Check FileType
// function checkFileType(file, cb) {
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check ext
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype);

//     if (mimetype && extname) {
//         return cb(null, true);
//     } else {
//         cb('Error: Images Only!');
//     }
// }



module.exports = {
    storage, upload
}
