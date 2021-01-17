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
import { notFound, errorHandler } from './middlewares/error.js';

//? Forgot password
import crypto from 'crypto';
import User from './models/user.js';
import handlebars  from 'handlebars';
import * as fs from 'fs';
import nodemailer from 'nodemailer';

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

//! PAYPAL INTEGRATION -----------------------------------------------------------------
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENTID));

//! SAVE IMAGES BY STATIC PATH ---------------------------------------------------------
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => {
        res.send('Your API is running');
    });
}

//! FORGOT PASSWORD --------------------------------------------------------------------
app.post('/forgotpassword',async (req, res) => {
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

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`
        },
        tls: {
            rejectUnauthorized: false
        }
    });

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
        } else {
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
            from: 'Proshop@business.com',
            to: `${user.email}`,
            subject: 'Link to Reset Your Password',
            html: htmlToSend
        };

        transporter.sendMail(mailOptions, function(err, response) {
            if (err) {
                console.log('Error : ' + err);
            }  else {
                res.status(200).json('recovery email sent');
            }
        });
    });
});

app.get('/reset',async (req, res) => {
    const user = await User.findOne({
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordToken: { $gt: Date.now() } 
    });

    console.log(req.query.resetPasswordToken);

    if (user === null) {
        res.json('Link have expired !');
    }

    res.status(200).send({
        email: user.email,
        message: 'password reset link a-ok'
    });
});

app.put('/updatePasswordViaEmail', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    });

    if (user === null) {
        res.status(404);
        throw new Error('This user is not existed');
    }

    user.password = req.body.password;
    // Hashing function is in model file
    await user.save();

    res.status(200).send({
        message: 'password updated'
    })
})

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));
