import express from 'express';
const router = express.Router();
import { 
    addOrder, 
    getOrderById, 
    updateOrderIsPaidStatus, 
    getOrdersByUserId,
    getAllOrders
} from '../controller/orderController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/').post(protect, addOrder);
router.route('/allorders').get(protect, admin, getAllOrders);
router.route('/myorders').get(protect, getOrdersByUserId);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderIsPaidStatus);

export default router;