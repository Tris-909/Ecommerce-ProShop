import AsyncHandler from 'express-async-handler';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';

//?   @description : Auth user & get token 
//?   @method : POST /api/users/login
//?   @access : public 
const login = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id, 
            name: user.name,
            email: user.email,
            isAdmin:  user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}); 

//?   @description : Get User Profile 
//?   @method : GET /api/users/profile
//?   @access : private 
const getUserProfile = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id, 
            name: user.name,
            email: user.email,
            isAdmin:  user.isAdmin
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}); 

//?   @description : Change User Profile Information
//?   @method : PUT /api/users/profile
//?   @access : private 
const changeUserProfile = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if ( req.body.password ) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id, 
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin:  updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(404);
        throw new Error('This is not supposed to be happening');
    }   
}); 

//?   @description : Create A New User 
//?   @method : POST /api/users
//?   @access : public 
const createUser = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201);
        res.json({
            _id: user._id, 
            name: user.name,
            email: user.email,
            isAdmin:  user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
}); 

export {
    login,
    getUserProfile,
    createUser,
    changeUserProfile
}