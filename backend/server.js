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

//? Express Router amd Middlewares
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/userRoute.js'; 
import ordersRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middlewares/error.js';

//!--------------------- EXPRESS START -----------------------------------------------------//
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Your API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENTID));

// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname)));
const folder = path.resolve()
app.use('/uploads', express.static(path.join(folder, '/uploads')));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`.success));
