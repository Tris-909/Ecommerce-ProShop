import AsyncHandler from 'express-async-handler';
import Product from '../models/product.js';

//?   Fetch All Products
//?   /api/products
//?   Public Route
const getProducts = AsyncHandler(async (req, res) => {
    //TODO: Pagination Size 
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    
    //TODO: search function for search bar
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'    
        }
    } : {};
    
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1));
    res.send({ products, page, pages: Math.ceil(count / pageSize) });
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

//? Create A review
//? POST /api/product/:id/review
//? private
const createReview = AsyncHandler(async(req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
        const alreadyReviewed = product.reviews.find(review => review.user.toString() === req.user._id.toString());

        if (alreadyReviewed) {
            res.status(400);
            throw new Error('User has already review this product');
        }

        const review = {
            rating: Number(rating),
            comment,
            user: req.user._id,
            name: req.user.name
        }

        product.reviews.push(review);
        product.numReviews = product.numReviews++;
        product.rating = product.reviews.reduce((acc, cur) => cur.rating + acc, 0) / product.numReviews;

        await product.save();

        res.status(200);
        res.send('Review has been added'); 
    } else {
        res.status(404);
        throw new Error('Can\'t find the product');
    }
});

//? Get 3 top rated products 
//? GET /api/products/carousel
//? public 
const getTopRatedProducts = AsyncHandler(async(req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3);

    res.json(products);
});

//?   Fetch All Laptops from databases
//?   GET /api/products/laptops
//?   Public Route
const getAllLaptops = AsyncHandler(async(req, res) => {
    const laptops = await Product.find({
        category: 'laptops'
    });
    res.json(laptops);
});

//?   Fetch Laptops from databases based on ID
//?   GET /api/products/laptops/:id
//?   Public Route
const getSingleLaptop = AsyncHandler(async (req, res) => {
    const laptop = await Product.findOne({
        _id: req.params.id,
        category: 'laptops'
    });

    if (laptop) {
        res.status(200);
        res.send(laptop);
    } else {
        res.status(404);
        throw new Error("No data about this laptop is found !");
    }
});

//? Fetch 3 most expensive laptops from databases to render to HomeScreen
//? GET /api/products/laptops/toptiers
//? public routes
const getTopTierLaptops = AsyncHandler(async (req, res) => {
    const topLaptops = await Product.find({category: 'laptops'}).sort({price: -1}).limit(3);

    res.send(topLaptops);
});

export {
    getProducts,
    getProductById,
    deleteProductByIdAsAdmin,
    createProduct,
    updateProduct,
    createReview,
    getTopRatedProducts,
    getAllLaptops,
    getSingleLaptop,
    getTopTierLaptops
}