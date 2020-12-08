import express from 'express';
import path from 'path';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.filename}-${Date.now()}${path.extname(file.originalname)}`)
    }
});

function checkFileType(file, cb) {
    const fileTypes = /jpg|jpeg|png/
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeTypes = fileTypes.test(file.mimetype);

    if (extname && mimeTypes) {
        return cb(null, true);
    } else {
        return cb('Images only!');
    }
}

const upload = multer({
    storage,
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb)
    }
})

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path.replace(/\\/g, "/")}`)
});

export default router;