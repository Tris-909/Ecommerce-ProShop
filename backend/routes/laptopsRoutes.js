import express from 'express';
import {
    getLaptops,
    getSingleLaptop,
    getTopTierLaptops
} from '../controller/laptopController.js';
const router = express.Router();

router.route('/').get(getLaptops);
router.route('/toptiers').get(getTopTierLaptops);
router.route('/:id').get(getSingleLaptop);

export default router;