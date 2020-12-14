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

//?   @description : Get all users for Admin Screen
//?   @method : GET /api/users
//?   @access : private/admin 
const getAllUsers = AsyncHandler(async (req, res) => {
    const users = await User.find();

    if (!users) {
        res.status(400);
        throw new Error("There are no users in the databases");
    }

    res.status(200).send(users);
}); 

//?   @description : Delete a user based on it ID
//?   @method : DELETE /api/users/delete/:id
//?   @access : private/admin 
const deleteUserAdmin = AsyncHandler(async (req, res) => {
    console.log(req.params.id);
    const deletedUser = await User.findById(req.params.id);

    if (!deletedUser) {
        res.status(400);
        throw new Error("Failed to delete a user. Something is wrong, please try again.");
    }

    await deletedUser.remove();
    res.status(200).send('User deleted successfully');
}); 

//?   @description : Get a user based on it ID
//?   @method : GET /api/users/:id
//?   @access : private/admin 
const getSingleUserAdmin = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
        res.status(400);
        throw new Error("This User is not existed.");
    }

    res.status(200).send(user);
}); 

//?   @description : Update a user based on it ID
//?   @method : PUT /api/users/:id
//?   @access : private/admin 
const updateSingleUserAdmin = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin;

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

//?   @description : Add an Item to the wishList
//?   @method : POST /api/users/wishlist/additem
//?   @access : private
const addItemToUserWishList = AsyncHandler(async (req, res) => {
    const { itemId, productName, productPrice, productImage } = req.body;
    const user = await User.findById(req.user._id);
    const theItem = {
        itemId, 
        productName, 
        productPrice, 
        productImage
    }    

    user.wishList.push(theItem);
    const newUser = await user.save();
    
    res.status(200);
    res.send(newUser);
});

//?   @description : Delete an Item from the wishList
//?   @method : DELETE /api/users/wishlist/deleteitem/:id
//?   @access : private
const deleteAnItemFromWishList = AsyncHandler(async (req, res) => {
    const wishListItemId = req.params.id;
    const user = await User.findById(req.user._id);

    let deleteIndex;
    for (let i = 0; i < user.wishList.length; i++) {
        if (user.wishList[i]._id == wishListItemId) {
            deleteIndex = i;
            break;
        } 
    }

    if (deleteIndex == undefined) {
        res.status(404);
        throw new Error("Can't find the item that you want to delete base on this wishListItemId");
    }

    user.wishList.splice(deleteIndex, 1);
    await user.save();
    res.status(200);
    res.send("Delete the item from wishList successfully");
});

export {
    login,
    getUserProfile,
    createUser,
    changeUserProfile,
    getAllUsers,
    deleteUserAdmin,
    getSingleUserAdmin,
    updateSingleUserAdmin,
    addItemToUserWishList,
    deleteAnItemFromWishList
}