import express from 'express';
import path from 'path';
import multer from 'multer';
import Product from '../models/product.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'frontend/public/images')
    },
    filename(req, file, cb) {
        console.log(file);
        cb(null, `${file.originalname}`)
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

router.post('/:id', upload.single('image'),async (req, res) => {
    const product = await Product.findById(req.params.id);
    product.image = `/${req.file.path.replace(/\\/g, "/")}`;
    await product.save();

    res.send(`/${req.file.path.replace(/\\/g, "/")}`)
});

export default router;