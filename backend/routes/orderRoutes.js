import express from 'express';
const router = express.Router();
import { 
    addOrder, 
    getOrderById, 
    updateOrderIsPaidStatus, 
    getOrdersByUserId 
} from '../controller/orderController.js';
import { protect } from '../middlewares/auth.js';

router.route('/').post(protect, addOrder);
router.route('/myorders').get(protect, getOrdersByUserId);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderIsPaidStatus);

export default router;