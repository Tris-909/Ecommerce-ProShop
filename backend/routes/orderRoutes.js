import express from 'express';
const router = express.Router();
import { addOrder, getOrderById } from '../controller/orderController.js';
import { protect } from '../middlewares/auth.js';

router.route('/').post(protect, addOrder);
router.route('/:id').get(protect, getOrderById);

export default router;