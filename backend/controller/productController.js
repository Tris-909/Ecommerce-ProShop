import AsyncHandler from 'express-async-handler';
import Product from '../models/product.js';

//?   Fetch All Products
//?   /api/products
//?   Public Route
const getProducts = AsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
}) 

//? Get a single product based on ID
//? /api/products/:id
//? Public Route
const getProductById = AsyncHandler(async (req, res) => {
    const theProduct = await Product.findById(req.params.id);

    if (theProduct) {
        res.send(theProduct);
    } else {
        res.status(404).send('Something went wrong :(');
    }
})

export {
    getProducts,
    getProductById
}