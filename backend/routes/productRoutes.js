import express from 'express';
import AsyncHandler from 'express-async-handler';
import Product from '../models/product.js';

const router = express.Router();

//?   Fetch All Products
//?   /api/products
//?   Public Route
router.get('/',AsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
}));

//? Get a single product based on ID
//? /api/products/:id
//? Public Route
router.get('/:id', AsyncHandler(async (req, res) => {
    const theProduct = await Product.findById(req.params.id);

    if (theProduct) {
        res.send(theProduct);
    } else {
        res.status(404).send('Something went wrong :(');
    }
}));

export default router;
