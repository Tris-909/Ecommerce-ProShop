import express from 'express';
const router = express.Router();
import { getStoreInfo } from '../controller/StoreInfoController/storeInfo.js';

router.route('/').get(getStoreInfo);
export default router;