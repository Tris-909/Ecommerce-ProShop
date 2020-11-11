import express from 'express';
import products from './data/products.js';

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


//!--------------------- EXPRESS START -----------------------------------------------------//
const app = express();

app.get('/', (req, res) => {
    res.send('Your API is running');
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.send(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`.success));
