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
import crypto from 'crypto';
import handlebars  from 'handlebars';
import * as fs from 'fs';
import nodemailer from 'nodemailer';
import sibTransport from 'nodemailer-sendinblue-transport';
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
app.use('/reset/api/resetPassword', resetPasswordRoutes);

app.post('/api/resetPassword/forgotpassword', async (req, res) => {
    if (req.body.email === '') {
        res.status(400).send('email required');
    }

    const user = await User.findOne({
        email: req.body.email
    });

    if (user === null) {
        res.status(403).send('email not in db');
    }

    const token = crypto.randomBytes(20).toString('hex');

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();

    const transport = nodemailer.createTransport(sibTransport({
        apiKey: process.env.SENDIBLUE_API_V2
    }));

    var readHTMLFile = function(path, callback) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };

    readHTMLFile(__dirname + '/backend/emails/forgetPassword.hbs', function(err, html) {
        let websitesLink;

        if (process.env.NODE_ENV === 'DEVELOPMENT') {
            websitesLink = `http://localhost:3000`;
        } else if (process.env.NODE_ENV === 'production') {
            websitesLink = `https://proshop-tris.herokuapp.com`;
        }

        var template = handlebars.compile(html);
        var replacements = {
             username: `${user.email}`,
             websitesLink: `${websitesLink}`,
             token: `${token}`
        };
        var htmlToSend = template(replacements);

        const mailOptions = {
            from: 'tranminhtri9090@gmail.com',
            to: `${user.email}`,
            subject: 'Link to Reset Your Password',
            html: htmlToSend
        };

        transport.sendMail(mailOptions);
        res.status(200).send('SendEmail Successfully');
    });
})

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
