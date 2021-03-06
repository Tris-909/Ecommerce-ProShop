import AsyncHandler from 'express-async-handler';
import Product from '../../models/product.js';
import { AppError } from '../../utils/appError.js';

//? "YOU MAY ALSO LIKE" GET 6 cheapest products 
//? /api/products/alsolike?category=
//? public

const getAlsoLikeProductsBasedOnCategory = AsyncHandler(async (req, res, next) => {
    const category = req.query.category;

    const product = await Product.find({ category: category }).select({
        "_id": 1,
        "rating": 1,
        "name": 1,
        "price": 1,
        "image": 1,
        "numReviews": 1,
        "onSale": 1,
        "newProduct": 1,
        "preOrder": 1
    }).sort({ price: 1 });

    if (product) {
        const productsSliced = product.slice(0, 6);
        res.status(200);
        res.send(productsSliced);
    } else {
        next(new AppError("Can't fetch recommended Games !", 404));
    }
});

export {
    getAlsoLikeProductsBasedOnCategory
}