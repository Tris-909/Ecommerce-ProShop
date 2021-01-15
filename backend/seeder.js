import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';

import users from './data/users.js';
import laptops from './data/laptops.js';
import products from './data/products.js';

import Order from './models/order.js';
import Product from './models/product.js';
import User from './models/user.js';

import connectDB from './config/db.js';
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return {
                ...product,
                numOf5StarsReviews: 0,
                numOf4StarsReviews: 0,
                numOf3StarsReviews: 0,
                numOf2StarsReviews: 0,
                numOf1StarsReviews: 0,
                user: adminUser
            }
        });

        const bindingOnSale = sampleProducts.map((product) => {
            return {
                ...product,
                onSale: 0
            }
        });

        await Product.insertMany(bindingOnSale);
        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch(error) {
        console.log(`error: ${error.message}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed'.red.inverse);
        process.exit();
    } catch(error) {
        console.log(`error: ${error.message}`.red.inverse);
        process.exit(1);
    }
}

const uploadLaptopsData = async()  => {
    try {
        await Laptop.insertMany(laptops);
        console.log('Laptops imported successfully !'.green.inverse); 
        process.exit();
    } catch (error) {
        console.log(`error: ${error.message}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else if (process.argv[2] === '-l') {
    uploadLaptopsData();
} else {
    importData();
}