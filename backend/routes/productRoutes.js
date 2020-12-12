import express from 'express';
const router = express.Router();
import { 
    getProducts, 
    getProductById, 
    deleteProductByIdAsAdmin, 
    createProduct, 
    updateProduct,
    createReview ,
    getTopRatedProducts,
    getAllLaptops,
    getSingleLaptop,
    getTopTierLaptops,
    getAllTVs,
    getTopTierTVs,
    getSingleTVs
} from '../controller/productController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/carousel').get(getTopRatedProducts);
router.route('/laptops').get(getAllLaptops);
router.route('/laptops/toptier').get(getTopTierLaptops);
router.route('/laptops/:id').get(getSingleLaptop);
router.route('/tvs').get(getAllTVs);
router.route('/tvs/toptier').get(getTopTierTVs);
router.route('/tvs/:id').get(getSingleTVs);
router.route('/createReview').post(protect, createReview);
router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProductByIdAsAdmin)
.put(protect, admin, updateProduct);

export default router;
