import AsyncHandler from 'express-async-handler';
import Product from '../../models/product.js';

//? Get 3 top rated products 
//? GET /api/products/carousel
//? public 
const getTopRatedProducts = AsyncHandler(async(req, res) => {
    const products = await Product.find({}).sort({ price: -1 }).select({
        "rating": 1,
        "numReviews": 1,
        "price": 1,
        "_id": 1,
        "name": 1,
        "image": 1,
    }).limit(3);

    res.json(products);
});

export {
    getTopRatedProducts
}