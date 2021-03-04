import AsyncHandler from 'express-async-handler';
import { AppError } from '../../utils/appError.js';
import StoreInfo from '../../models/storeInfo.js';

//?   Take Stores Info
//?   /api/storefinder
//?   Public Routes
const getStoreInfo = AsyncHandler(async  (req, res, next) => {
    const storeInfo = await StoreInfo.find();

    if (storeInfo) {
        res.status(200).send(storeInfo);
    } else {
        next(new AppError("Can't fetch Store Info", 500));
    }
});

export {
    getStoreInfo
}