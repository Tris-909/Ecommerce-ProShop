import express from 'express';
const router = express.Router();
import { addOrder } from '../controller/orderController.js';

router.route('/').post(addOrder);

export default router;