import express from 'express';
const router = express.Router();
import { 
    getProducts, 
    getProductById, 
    deleteProductByIdAsAdmin, 
    createProduct, 
    updateProduct,
    createReview ,
    deleteReviewProduct,
    getTopRatedProducts,
    getAllLaptops,
    getTopTierLaptops,
    getAllTVs,
    getTopTierTVs,
    getTopPhones,
    getAllPhones,
    getTopHeadphone,
    getAllHeadphones,
    getTopGames,
    getAllGames
} from '../controller/productController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/carousel').get(getTopRatedProducts);
router.route('/laptops').get(getAllLaptops);
router.route('/laptops/toptier').get(getTopTierLaptops);
router.route('/tvs').get(getAllTVs);
router.route('/tvs/toptier').get(getTopTierTVs);
router.route('/phones').get(getAllPhones);
router.route('/phones/toptier').get(getTopPhones);
router.route('/headphones').get(getAllHeadphones);
router.route('/headphones/toptier').get(getTopHeadphone);
router.route('/games/toptier').get(getTopGames);
router.route('/games').get(getAllGames);
router.route('/createReview').post(protect, createReview);
router.route('/deletereview/:productid/:reviewid').delete(protect, deleteReviewProduct);
router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProductByIdAsAdmin)
.put(protect, admin, updateProduct);

export default router;
