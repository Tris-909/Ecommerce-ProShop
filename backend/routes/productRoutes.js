import express from 'express';
const router = express.Router();
import { 
    getProducts, 
    getProductById, 
    deleteProductByIdAsAdmin, 
    createProduct, 
    updateProduct,
    createReview ,
    getTopRatedProducts
} from '../controller/productController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/carousel').get(getTopRatedProducts);
router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProductByIdAsAdmin)
.put(protect, admin, updateProduct);
router.route('/:id/review').post(protect, createReview);

export default router;
