import express from 'express';
import {
    getLaptops,
    getSingleLaptop
} from '../controller/laptopController.js';
const router = express.Router();

router.route('/').get(getLaptops);
router.route('/:id').get(getSingleLaptop);

export default router;