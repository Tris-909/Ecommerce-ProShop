import express from 'express';
const router = express.Router();
import { getProducts, getProductById, deleteProductByIdAsAdmin } from '../controller/productController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProductByIdAsAdmin);

export default router;
