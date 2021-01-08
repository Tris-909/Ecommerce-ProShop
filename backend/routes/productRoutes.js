import express from 'express';
const router = express.Router();
import { 
    getProducts, 
    getListOfProducts,
    getProductById, 
    stickAReviewAsAgree,
    stickAReviewAsDisAgree,
    getSomeReviews,
    getSomeReviewsFilteredHighToLowRating,
    getReviewsFilteredLowToHighRating,
    getReviewsFilteredHighToLowAgree,
    getReviewsFilteredLowToHighAgree,
    getReviewsFilteredHighToLowDisAgree,
    getReviewsFilteredLowToHighDisAgree,
    deleteProductByIdAsAdmin, 
    createProduct, 
    updateProduct,
    createReview ,
    deleteReviewProduct,
    getTopRatedProducts,
    getLaptopsReccommendation,
    getTVSRecommendation,
    getPhonesRecommendation,
    getHeadPhonesRecommendation,
    getGamesRecommendation
} from '../controller/productController.js';
import { getTopProducts } from '../controller/HomeScreenController/topProducts.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/toptier').get(getTopProducts);
router.route('/laptops/alsolike').get(getLaptopsReccommendation);
router.route('/tvs/alsolike').get(getTVSRecommendation);
router.route('/phones/alsolike').get(getPhonesRecommendation);
router.route('/headphones/alsolike').get(getHeadPhonesRecommendation);
router.route('/games/alsolike').get(getGamesRecommendation);
router.route('/carousel').get(getTopRatedProducts);
router.route('/reviews/agree').post(protect, stickAReviewAsAgree);
router.route('/reviews/disagree').post(protect, stickAReviewAsDisAgree);
router.route('/createReview').post(protect, createReview);

router.route('/getreviews/:id').get(getSomeReviews);

router.route('/getreviews/HtLR/:id').get(getSomeReviewsFilteredHighToLowRating);
router.route('/getreviews/LtHR/:id').get(getReviewsFilteredLowToHighRating);

router.route('/getreviews/HtLA/:id').get(getReviewsFilteredHighToLowAgree);
router.route('/getreviews/LtHA/:id').get(getReviewsFilteredLowToHighAgree);

router.route('/getreviews/HtLDA/:id').get(getReviewsFilteredHighToLowDisAgree);
router.route('/getreviews/LtHDA/:id').get(getReviewsFilteredLowToHighDisAgree);

router.route('/deletereview/:productid/:reviewid').delete(protect, deleteReviewProduct);
router.route('/list/:category').get(getListOfProducts);
router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProductByIdAsAdmin)
.put(protect, admin, updateProduct);

export default router;
