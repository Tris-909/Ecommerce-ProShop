import AsyncHandler from 'express-async-handler';
import User from '../models/user.js';

const admin = AsyncHandler(async (req, res, next) => {
    const admin = await User.findOne({
        _id: req.user._id,
        isAdmin: true
    });

    if (!admin) {
        res.status(404);
        throw new Error('This user is not an admin, requests is rejected');
    }

    next();
});

export { admin };