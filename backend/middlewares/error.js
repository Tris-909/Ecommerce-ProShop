import { AppError } from '../utils/appError.js'

const notFound = (req, res, next) => {
    next(new AppError(`Routes Not Found - ${req.originalUrl}`, 404));
} 

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'fail';

    res.status(statusCode);
    res.json({
        status: status,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export { notFound, errorHandler } 