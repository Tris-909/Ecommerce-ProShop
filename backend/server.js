import express from 'express';
import path from 'path';

//? This is for setting up environment variables
import dotenv from 'dotenv';
dotenv.config();

//? Setting Up for MongoDB connection
import connectDB from './config/db.js';
connectDB();

//? Setting up color for console.log 
import colors from 'colors';
colors.setTheme({
    success: ['black', 'bgGreen', 'underline', 'bold'],
    fail: ['black', 'bgred', 'underline', 'bold']
});

//? Morgan npm package to console.log information about the route on the server
import morgan from 'morgan';

//? Express Router amd Middlewares
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/userRoute.js'; 
import ordersRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import storeInfoRoutes from './routes/storeInfoRoutes.js';
import resetPasswordRoutes from './routes/forgotPassword.js';
import { notFound, errorHandler } from './middlewares/error.js';

//? Forgot password
import User from './models/user.js';

//!--------------------- EXPRESS START -----------------------------------------------------//
const app = express();

//? Morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())

app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/storefinder', storeInfoRoutes);
app.use('/api/resetPassword', resetPasswordRoutes);

//! PAYPAL INTEGRATION -----------------------------------------------------------------
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENTID));

//! SAVE IMAGES BY STATIC PATH ---------------------------------------------------------
const __dirname = path.resolve()
app.use('/frontend/public/images', express.static(path.join(__dirname, '/frontend/public/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => {
        res.send('Your API is running');
    });
}

// ERROR HANDLER
app.all('*', notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));
