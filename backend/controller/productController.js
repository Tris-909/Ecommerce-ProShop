import AsyncHandler from 'express-async-handler';
import Product from '../models/product.js';
import User from '../models/user.js';

//?   Fetch All Products
//?   /api/products
//?   Public Route
const getProducts = AsyncHandler(async (req, res) => {
    //TODO: Pagination Size 
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    
    //TODO: search function for search bar
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'    
        }
    } : {};
    
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword }).select({
        "rating": 1,
        "numReviews": 1,
        "price": 1,
        "_id": 1,
        "name": 1,
        "image": 1,
        "category": 1,
        "brand": 1,
        "onSale": 1
    }).limit(pageSize).skip(pageSize * (page - 1));
    res.send({ products, page, pages: Math.ceil(count / pageSize) });
}) 

//? Get a single product based on ID
//? /api/products/:id
//? Public Route
const getProductById = AsyncHandler(async (req, res) => {
    const theProduct = await Product.findById(req.params.id);

    if (theProduct) {
        theProduct.reviews = [];
        res.send(theProduct);
    } else {
        res.status(404).send('Something went wrong :(');
    }
})

//? GET some reviews out of a product based on the product ID
//? /api/products/getreviews/:id?pageReviewNumber=1
//? Public Route
const getSomeReviews = AsyncHandler(async (req, res) => {
    const pageSize = 5;
    const page = Number(req.query.pageReviewNumber) || 1

    const currentNumOfReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }).select('reviews').then(function(myDoc) {

        const setOfReviews = myDoc.reviews.slice((page-1)*pageSize , (page)*pageSize);
        res.send({setOfReviews, page, pages: Math.ceil( currentNumOfReviews.numReviews / pageSize )}); 
    });
});

//? GET some reviews out of a product based on the product ID filtered by High to Low Rating
//? /api/products/getreviews/HtLR/:id?pageReviewNumber=1
//? Public Route
const getSomeReviewsFilteredHighToLowRating = AsyncHandler(async (req, res) => {
    const pageSize = 5;
    const page = Number(req.query.pageReviewNumber) || 1;

    const currentNumOfReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }, 'reviews',function(err, docs) {
        docs.reviews.sort(function(a, b) {return  b.rating - a.rating});

        const setOfReviews = docs.reviews.slice((page-1)*pageSize , (page)*pageSize);
        res.send({setOfReviews, page, pages: Math.ceil( currentNumOfReviews.numReviews / pageSize )});
    })
});

//? GET some reviews out of a product based on the product ID filtered by High to Low Rating
//? /api/products/getreviews/LtHR/:id?pageReviewNumber=1
//? Public Route
const getReviewsFilteredLowToHighRating = AsyncHandler(async (req, res) => {
    const pageSize = 5;
    const pageNumber = Number(req.query.pageReviewNumber) || 1;
    
    const currentNumOfReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }, 'reviews', function(err, docs) {
        docs.reviews.sort(function(a ,b) { return a.rating - b.rating });
        const currentSetOfReviews = docs.reviews.slice((pageSize)*(pageNumber-1), pageSize*pageNumber);
        res.send({ currentSetOfReviews, page: pageNumber, pages: Math.ceil( currentNumOfReviews/pageSize )});
    });
});

//? GET some reviews out of a product based on the product ID filtered by high to low agree
//? /api/products/getreviews/HtLA/:id?pageReviewNumber=1
//? Public Route
const getReviewsFilteredHighToLowAgree = AsyncHandler(async(req, res) => {
    const pageSize  = 5;
    const currentPage = Number(req.query.pageReviewNumber) || 1;

    const currentNumOfReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }, 'reviews', function(err, docs) {
        docs.reviews.sort(function(a, b) { return b.numOfAgrees - a.numOfAgrees });
        const currentSetOfReviews = docs.reviews.slice((currentPage-1)*pageSize, currentPage*pageSize);
        console.log(currentNumOfReviews);
        res.send({ currentSetOfReviews, page: currentPage, pages: Math.ceil(currentNumOfReviews.numReviews/pageSize)})
    })
});


//? GET some reviews out of a product based on productID filtered by low to high agree
//? /api/products/getreviews/LtHA/:id?pageReviewNumber
//? Public Route
const getReviewsFilteredLowToHighAgree = AsyncHandler(async(req, res) => {
    const pageSize = 5;
    const currentPage = Number(req.query.pageReviewNumber) || 1;

    const currentNumOfReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }, 'reviews', function(err, docs) {
        docs.reviews.sort(function(a, b) { return a.numOfAgrees - b.numOfAgrees });
        const currentSetOfReviews = docs.reviews.slice((currentPage-1)*pageSize, currentPage*pageSize);
        res.send({ currentSetOfReviews, page: currentPage, pages: Math.ceil( currentNumOfReviews/pageSize )});
    });
});

//? GET some reviews out of a product based on productID filtered by high to low DISagree
//? /api/products/getreviews/HtLDA/:id?pageReviewNumber
//? Public Route
const getReviewsFilteredHighToLowDisAgree = AsyncHandler(async (req, res) => {
    const pageSize = 5;
    const currentPage = Number(req.query.pageReviewNumber) ||  1;

    const numReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }, 'reviews', function(err, docs) {
        docs.reviews.sort(function(a,b) { return( b.numOfDisAgrees - a.numOfDisAgrees )});
        const currentSetOfReviews = docs.reviews.slice((currentPage - 1)*pageSize, pageSize*currentPage);
        res.send({ currentSetOfReviews, page: currentPage, pageSize: Math.ceil( numReviews/pageSize )});
    });
});

//? GET some reviews out of a product based on productID filtered by low to high DISagree
//? /api/products/getreviews/LtHDA/:id?pageReviewNumber
//? Public Route
const getReviewsFilteredLowToHighDisAgree = AsyncHandler(async (req, res) => {
    const pageSize = 5;
    const currentPage = Number(req.query.pageReviewNumber) ||  1;

    const numReviews = await Product.findById(req.params.id).select('numReviews');
    await Product.findOne({ _id: req.params.id }, 'reviews', function(err, docs) {
        docs.reviews.sort(function(a,b) { return( a.numOfDisAgrees - b.numOfDisAgrees )});
        const currentSetOfReviews = docs.reviews.slice((currentPage - 1)*pageSize, pageSize*currentPage);
        res.send({ currentSetOfReviews, page: currentPage, pageSize: Math.ceil( numReviews/pageSize )});
    });
}); 

//? stick a review as agree
//? POST /api/products/reviews/agree
//? private Route
const stickAReviewAsAgree = AsyncHandler(async (req, res) => {
    console.log('start StickAReviewAgree')
    const { productId, reviewId } = req.body;
    const product = await Product.findById(productId);
    const user = await User.findById(req.user._id);

    if (product) {        
        for (let i = 0; i < req.user.agreeAndDisAgree.length; i++) {
            if (reviewId == req.user.agreeAndDisAgree[i].reviewId ) {
                res.status(400);
                res.send("User have already choosen and this process can't be reversed");
            }
        }

        let currentReviewIndex;
        for (let i = 0; i < product.reviews.length; i++) {
            if (product.reviews[i]._id  == reviewId ) {
                currentReviewIndex = i;
            }
        }

        product.reviews[currentReviewIndex].agree.push({
            userId: req.user._id
        });
        product.reviews[currentReviewIndex].numOfAgrees = product.reviews[currentReviewIndex].numOfAgrees + 1;


        user.agreeAndDisAgree.push({
            productId: productId,
            reviewId: reviewId,
            agree: true
        });

        await product.save();
        await user.save();

        res.status(200);
        res.send('Adding new numOfAgreees and agreeArray into that new review adding a new item into agreeorDisAgree array of user');
    } else {
        res.status(404);
        throw new Error("Can't find the product that you are looking for");
    }
});

//? stick a review as disagree
//? POST /api/products/reviews/disagree
//? privateRoute
const stickAReviewAsDisAgree = AsyncHandler(async (req, res) => {
    const { productId, reviewId } = req.body;
    const product = await Product.findById(productId);
    const user = await User.findById(req.user._id);

    if (product) {      
        for (let i = 0; i < req.user.agreeAndDisAgree.length; i++) {
            if (reviewId == req.user.agreeAndDisAgree[i].reviewId ) {
                res.status(400);
                res.send("User have already choosen and this process can't be reversed");
            }
        }

        let currentReviewIndex;
        for (let i = 0; i < product.reviews.length; i++) {
            if (product.reviews[i]._id  == reviewId ) {
                currentReviewIndex = i;
            }
        }

        product.reviews[currentReviewIndex].disAgree.push({
            userId: req.user._id
        });
        product.reviews[currentReviewIndex].numOfDisAgrees = product.reviews[currentReviewIndex].numOfDisAgrees + 1;


        user.agreeAndDisAgree.push({
            productId: productId,
            reviewId: reviewId,
            agree: false
        });

        await product.save();
        await user.save();

        res.status(200);
        res.send('Adding new numOfDisAgrees and disagreeArray into that new review adding a new item into agreeorDisAgree array of user');
    } else {
        res.status(404);
        throw new Error("Can't find the product that you are looking for");
    }
});

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
        user: req.user._id,
        name: 'Sample Name',
        image: '/images/sample.jpg',
        brand: 'sample brand',
        category: 'Text',
        description: 'text',
        youtube: 'youtubelink',
        details: {exist: true},
        tvsDetail: {exist: true},
        phoneDetail: {exist: true},
        headphoneDetail: {exist: true},
        gameDetail: {exist: true},
        rating: 0,
        price: 0,
        onSale: 0,
        newProduct: false,
        preOrder: false,
        countInStock: 0,
        numReviews: 0,
        numOf5StarsReviews: 0,
        numOf4StarsReviews: 0,
        numOf3StarsReviews: 0,
        numOf2StarsReviews: 0,
        numOf1StarsReviews: 0,
    });

    await product.save();
    res.status(201).send(product);
});

//? Update a product
//? PUT /api/products/:id
//? private/admin
const updateProduct = AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    
    console.log('onSale', req.body.onSale);
    console.log('preOrder', req.body.preOrder);
    console.log('newProduct', req.body.newProduct);


    if (product) {
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.onSale = req.body.onSale;
        product.image = req.body.image || product.image;
        product.brand = req.body.brand || product.brand;
        product.category = req.body.category || product.category;
        product.countInStock = req.body.countInStock || product.countInStock;
        product.numReviews = req.body.numReviews || product.numReviews;
        product.description = req.body.description || product.description;
        product.newProduct = req.body.newProduct;
        product.preOrder = req.body.preOrder;

        console.log('product.onSale', product.onSale);
        console.log('product.newProduct', product.newProduct);
        console.log('product.preOrder', product.preOrder);

        if (req.body.details !== undefined) {
            product.details = req.body.details || product.details;
        }

        if (req.body.tvsDetail !== undefined) {
            product.tvsDetail = req.body.tvsDetail || product.tvsDetail;
        }

        if (req.body.phoneDetail !== undefined) {
            product.phoneDetail = req.body.phoneDetail || product.phoneDetail;
        }

        if (req.body.headphoneDetail !== undefined) {
            product.headphoneDetail = req.body.headphoneDetail || product.headphoneDetail;
        } 
        
        if (req.body.gameDetail !== undefined) {
            product.gameDetail = req.body.gameDetail || product.gameDetail;
        }

        const updatedProduct = await product.save();
        res.status(201).send(updatedProduct);
    } else {
        res.status(404);
        throw new Error('This product is not existed');
    }
});

//? Create A review
//? POST /api/products/createreview
//? private
const createReview = AsyncHandler(async(req, res) => {
    const { rating, comment, productID } = req.body;
    const product = await Product.findById(productID);

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
        product.numReviews = product.numReviews +1;
        product.rating = product.reviews.reduce((acc, cur) => cur.rating + acc, 0) / product.numReviews;

        switch(Number(rating)) {
            case 1: 
                product.numOf1StarsReviews =  product.numOf1StarsReviews + 1;
                await product.save();

                break;
            case 2: 
                product.numOf2StarsReviews =  product.numOf2StarsReviews + 1;
                await product.save();

                break;
            case 3: 
                product.numOf3StarsReviews =  product.numOf3StarsReviews + 1;
                await product.save();

                break;
            case 4:
                product.numOf4StarsReviews =  product.numOf4StarsReviews + 1;
                await product.save();

                break;
            case 5:
                product.numOf5StarsReviews =  product.numOf5StarsReviews + 1;
                await product.save();

                break;
            default:
                break;
        }

        await product.save();
        res.status(200);
        res.send('Review has been added'); 
    } else {
        res.status(404);
        throw new Error('Can\'t find the product');
    }
});

//? Delete A Review of A Product based on UserID and ProductID and ReviewID
//? DELETE /api/products/deletereview
//? Private
const deleteReviewProduct = AsyncHandler(async(req, res) => {
    const { reviewid, productid } = req.params;
    const choosenProduct = await Product.findById(productid);

    if (choosenProduct) {
        //TODO: FIND THE POSITION OF THE DELETED REVIEWS AND DELETE THE REVIEW
        let deletedReviewIndex;
        for (let i = 0; i < choosenProduct.reviews.length; i++) {
            if (reviewid == choosenProduct.reviews[i]._id) {
                deletedReviewIndex = i;
                break;
            }
        }
        
        if (deletedReviewIndex !== undefined) {
            switch(choosenProduct.reviews[deletedReviewIndex].rating) {
                case 1:
                    choosenProduct.numOf1StarsReviews = choosenProduct.numOf1StarsReviews -1;
                    choosenProduct.reviews.splice(deletedReviewIndex, 1);
                    choosenProduct.rating =  choosenProduct.reviews.reduce((acc, cur) => cur.rating + acc, 0) / choosenProduct.numReviews;
                    choosenProduct.numReviews = choosenProduct.numReviews - 1;
                    await choosenProduct.save();

                    break;
                case 2:
                    choosenProduct.numOf2StarsReviews = choosenProduct.numOf2StarsReviews -1;
                    choosenProduct.reviews.splice(deletedReviewIndex, 1);
                    choosenProduct.rating =  choosenProduct.reviews.reduce((acc, cur) => cur.rating + acc, 0) / choosenProduct.numReviews;
                    choosenProduct.numReviews = choosenProduct.numReviews - 1;
                    await choosenProduct.save();

                    break;
                case 3: 
                    choosenProduct.numOf3StarsReviews = choosenProduct.numOf3StarsReviews -1;
                    choosenProduct.reviews.splice(deletedReviewIndex, 1);
                    choosenProduct.rating =  choosenProduct.reviews.reduce((acc, cur) => cur.rating + acc, 0) / choosenProduct.numReviews;
                    choosenProduct.numReviews = choosenProduct.numReviews - 1;
                    await choosenProduct.save();

                    break;
                case 4:
                    choosenProduct.numOf4StarsReviews = choosenProduct.numOf4StarsReviews -1;
                    choosenProduct.reviews.splice(deletedReviewIndex, 1);
                    choosenProduct.rating =  choosenProduct.reviews.reduce((acc, cur) => cur.rating + acc, 0) / choosenProduct.numReviews;
                    choosenProduct.numReviews = choosenProduct.numReviews - 1;
                    await choosenProduct.save();

                    break;
                case 5:
                    choosenProduct.numOf5StarsReviews = choosenProduct.numOf5StarsReviews -1;
                    choosenProduct.reviews.splice(deletedReviewIndex, 1);
                    choosenProduct.rating =  choosenProduct.reviews.reduce((acc, cur) => cur.rating + acc, 0) / choosenProduct.numReviews;
                    choosenProduct.numReviews = choosenProduct.numReviews - 1;
                    await choosenProduct.save();

                    break;
                default: 
                    return;
            }

            res.status(200).send('Review has been deleted');
        } else {
            res.status(404);
            throw new Error("Can't find the review based on reviewID thus no review is deleted");
        }
        
    } else {
        res.status(404);
        throw new Error("Can't find the product you want to delete review from");
    }
});

export {
    getProducts,
    getProductById,
    getSomeReviews,
    getSomeReviewsFilteredHighToLowRating,
    getReviewsFilteredLowToHighRating,
    getReviewsFilteredHighToLowAgree,
    getReviewsFilteredLowToHighAgree,
    getReviewsFilteredHighToLowDisAgree,
    getReviewsFilteredLowToHighDisAgree,
    stickAReviewAsAgree,
    stickAReviewAsDisAgree,
    deleteProductByIdAsAdmin,
    createProduct,
    updateProduct,
    createReview,
    deleteReviewProduct
}
