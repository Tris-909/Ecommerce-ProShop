import AsyncHandler from 'express-async-handler';
import Product from '../../models/product.js';

//? GET top 3 products based on highest price for HomeScreen
//? /api/products/toptier
//? public
const getTopProducts = AsyncHandler(async(req, res) => {
    const category = req.query.category;

    const topProducts = await Product.find({ category: category }).sort({ price: -1 }).select({
        "_id": 1,
        "image": 1,
        "name": 1,
        "rating": 1,
        "numReviews": 1,
        "price": 1,
        "category": 1,
        "onSale": 1,
        "newProduct": 1,
        "preOrder": 1
    }).limit(3);

    if (topProducts) {
        res.status(200).send(topProducts);
    } else {
        res.status(404);
        throw new Error(`Can't fetch top products for HomeScreen based on this category : ${category}`);
    }
});

export {
    getTopProducts
};