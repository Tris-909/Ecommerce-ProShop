import AsyncHandler from 'express-async-handler';
import Product from '../../models/product.js';

//? Get a list of product based on it category combined with pagination system and filter system
//? /api/products/:category?page=0
//? Public Route
const getListOfProducts = AsyncHandler(async (req, res) => {
    //TODO: Pagination System
    const pageSize = 6;
    const currentPage = Number(req.query.page) || 0;
    
    //TODO: Price Filter
    const lowPrice = Number(req.query.lowPrice) || 0;
    const highPrice = Number(req.query.highPrice) || 7600;

    //TODO: Get list of brands to send to frontend 
    const listOfBrands = await Product.find({ category: req.params.category }).select({
        "brand": 1
    });
    const ArrayOfBrands = [];
    for (let i = 0; i < listOfBrands.length; i++) {
        if (!ArrayOfBrands.includes(listOfBrands[i].brand)) {
            ArrayOfBrands.push(listOfBrands[i].brand);
        }
    }

    //! LAPTOP FILTERS 
    //TODO : Filter laptops based on screen sizes
    const arrayOfLaptopScreenSizes = [];
    if (req.params.category === 'laptops') {
        const listOfScreenSizes = await Product.find({ category: req.params.category }).select({
            "details": {
                "displaySizeInches": 1
            }
        });
        for (let i = 0; i < listOfScreenSizes.length; i++) {
            if (!arrayOfLaptopScreenSizes.includes(listOfScreenSizes[i].details.displaySizeInches)) {
                arrayOfLaptopScreenSizes.push(listOfScreenSizes[i].details.displaySizeInches);
            }
        }
    } 
    //! END OF LAPTOP FILTERS

    //TODO: Brands Filter

    //TODO: lAPTOP filters summary 
    let pickedLaptopScreenSizes;
    if (req.query.screenSizes) {
        pickedLaptopScreenSizes = req.query.screenSizes.split(',');
    }

    let pickedBrands = req.query.brands.split(',');
    
    if (pickedBrands[0] == '' && 
        pickedLaptopScreenSizes == undefined) {
        console.log('No filters');
        //! No filters applied
        const totalProductsOfThatCategoryWithNoBrands = await Product.countDocuments({ 
            category: req.params.category
        });

        const productListNoBrand = await Product.find({ 
            category: req.params.category,
            price: { $gt: lowPrice, $lt: highPrice }
            })
            .select({
            "rating": 1,
            "numReviews": 1,
            "price": 1,
            "countInStock": 1,
            "_id": 1,
            "name": 1,
            "image": 1,
            "onSale": 1
        }).skip(pageSize * currentPage).limit(pageSize);

        if (productListNoBrand) {
            res.status(200).send({ 
                listItems: productListNoBrand, 
                brands: ArrayOfBrands,
                screenSizes: arrayOfLaptopScreenSizes,
                currentPickedBrands: [],
                currentPickedLaptopScreenSizes: [],
                page: pageSize, 
                pages: Math.ceil(totalProductsOfThatCategoryWithNoBrands/pageSize)
            });
        } else {
            res.status(404);
            throw new Error("Can't find the list of product");
        }
    } else {
        console.log('Has filters');
        console.log(pickedLaptopScreenSizes);
        console.log(pickedBrands);

        //TODO: Check if pickedLaptopScreenSizes and pickedBrands is empty or not
        //TODO: If it empty mean that we want to search for everything, everyscreens, everybrands,...
        if (pickedLaptopScreenSizes == undefined) {
            pickedLaptopScreenSizes = arrayOfLaptopScreenSizes;
        }
        if (pickedBrands[0] == "") {
            pickedBrands = ArrayOfBrands;
        }

        const totalProductsOfThatCategoryWithFilter = await Product.countDocuments({ 
            category: req.params.category,
            price: { $gt: lowPrice, $lt: highPrice },
            brand: { $in: pickedBrands },
            "details.displaySizeInches": {
                $in: pickedLaptopScreenSizes
            }
        });
        console.log(totalProductsOfThatCategoryWithFilter);

        const productListWithBrands = await Product.find({ 
            category: req.params.category,
            price: { $gt: lowPrice, $lt: highPrice },
            brand: { $in: pickedBrands },
            "details.displaySizeInches": {
                $in: pickedLaptopScreenSizes
            }
            })
            .select({
            "rating": 1,
            "numReviews": 1,
            "price": 1,
            "countInStock": 1,
            "_id": 1,
            "name": 1,
            "image": 1,
            "onSale": 1
        }).skip(pageSize * currentPage).limit(pageSize);

        //TODO: We have this 2 `if` because we don't want to send the signal to make all the 
        //TODO: box checked on the front-end. Here we return what we receive in the start
        if (pickedLaptopScreenSizes.length == arrayOfLaptopScreenSizes.length) {
            pickedLaptopScreenSizes = [];
        }
        if (pickedBrands.length == ArrayOfBrands.length) {
            pickedBrands = [];
        }

        if (productListWithBrands) {
            res.status(200).send({ 
                listItems: productListWithBrands, 
                brands: ArrayOfBrands,
                screenSizes: arrayOfLaptopScreenSizes,
                currentPickedBrands: pickedBrands,
                currentPickedLaptopScreenSizes: pickedLaptopScreenSizes,
                page: pageSize, 
                pages: Math.ceil(totalProductsOfThatCategoryWithFilter/pageSize)
            });
        } else {
            res.status(404);
            throw new Error("Can't find the list of product");
        }
    }
});

export {
    getListOfProducts
}