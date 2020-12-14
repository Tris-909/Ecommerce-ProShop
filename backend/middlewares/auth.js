import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
    let token; 
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
        console.log('the token ', token);
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findById(decoded.id).select('-password');
        } catch(error) {
            console.log(error);
            res.status(401);
            throw new Error('Not Authorized, token failed');
        }
    } 

    if (!token) {
        console.log(token);
        res.status(401);
        throw new Error('Not Authorized, no token');
    }
    next();
}); 

export { protect }; 