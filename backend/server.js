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
    user.update({
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 3600000
    });

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

    const mailOptions = {
        from: 'Proshop@business.com',
        to: `${user.email}`,
        subject: 'Link to Reset Your Password',
        text: 
        'Hi this is ProShop Manager, Please click on the link below to reset your password : \n \n' +
        `http://localhost:3000/reset/${token} \n \n` + 
        `If you did not request this email, please ignore this and your password will remain the same \n \n`
    };

    transporter.sendMail(mailOptions, function(err, response) {
        if (err) {
            console.log('Error : ' + err);
        }  else {
            res.status(200).json('recovery email sent');
        }
    });
})

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));
