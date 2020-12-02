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

//? Delete a product based on it ID
//? DELETE /api/products/:id
//? private/admin
const deleteProductByIdAsAdmin = AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error('The Product Is Not Existed');
    }

    await product.remove(); 
    res.status(200).send('Delete product successfully'); 
});

//? Create a product 
//? POST /api/products
//? private/admin
const createProduct = AsyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample Name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'sample brand',
        category: 'Text',
        countInStock: 0,
        numReviews: 0,
        description: 'text'
    });

    await product.save();
    res.status(201).send(product);
});

//? Update a product
//? PUT /api/product/:id
//? private/admin
const updateProduct = AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.image = req.body.image || product.image;
        product.brand = req.body.brand || product.brand;
        product.category = req.body.category || product.category;
        product.countInStock = req.body.countInStock || product.countInStock;
        product.numReviews = req.body.numReviews || product.numReviews;
        product.description = req.body.description || product.description;

        const updatedProduct = await product.save();
        res.status(201).send(updatedProduct);
    } else {
        res.status(404);
        throw new Error('This product is not existed');
    }
});

export {
    getProducts,
    getProductById,
    deleteProductByIdAsAdmin,
    createProduct,
    updateProduct
}