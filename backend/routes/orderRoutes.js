import express from 'express';
const router = express.Router();
import { addOrder } from '../controller/orderController.js';
import { protect } from '../middlewares/auth.js';

router.route('/').post(protect, addOrder);

export default router;