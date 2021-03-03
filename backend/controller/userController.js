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
            wishList: user.wishList,
            cartList: user.cartList,
            agreeAndDisAgree: user.agreeAndDisAgree,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}); 

//?   @description : take user current details in databases
//?   @method : GET /api/users/currentstatus
//?   @access : private 
const getCurrentUserStatus = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).send({
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            wishList: user.wishList,
            cartList: user.cartList,
            agreeAndDisAgree: user.agreeAndDisAgree
        });
    } else {
        res.status(404);
        throw new Error("Can't find the user");
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
//?   @method : GET /api/users?pageNumber=
//?   @access : private/admin 
const getAllUsers = AsyncHandler(async (req, res) => {
    const totalPageSize = 10;
    const currentPage = Number(req.query.pageNumber) || 1;

    const count = await User.countDocuments();

    const users = await User.find().select({
        "_id": 1,
        "name": 1,
        "email": 1,
        "isAdmin": 1
    }).limit(totalPageSize).skip((currentPage-1)*totalPageSize);

    if (!users) {
        res.status(400);
        throw new Error("There are no users in the databases");
    }

    res.status(200).send({page: currentPage, pages: Math.ceil(count/totalPageSize), users});
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
    const user = await User.findById(req.params.id).select({
        "_id": 1,
        "name": 1,
        "email": 1,
        "isAdmin": 1
    });

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

//?   @description : Get users wishList based on there ID
//?   @method : GET /api/users/wishlist
//?   @access : private
const getWishListItems = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        const theWishList = [...user.wishList];
        res.status(200);
        res.send(theWishList);
    } else {
        res.status(404);
        throw new Error('User is not existed');
    }
})

//?   @description : Add an Item to the wishList
//?   @method : POST /api/users/wishlist/additem
//?   @access : private
const addItemToUserWishList = AsyncHandler(async (req, res) => {
    const { itemId, productName, productPrice, productImage, productRating, productNumReviews, onSale } = req.body;
    const user = await User.findById(req.user._id);
    const theItem = {
        itemId, 
        productName, 
        productPrice, 
        productImage,
        productRating,
        productNumReviews,
        onSale
    }    
    console.log(theItem);

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

//?   @description : Delete all Items from the wishList
//?   @method : DELETE /api/users/wishlist/deleteitem
//?   @access : private
const deleteAllItemsFromWishList = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.wishList = [];
        await user.save();

        res.status(200);
        res.send("Clear all items in the wish list successfully");
    } else {
        res.status(404);
        throw new Error("Can't find the user that you are looking for");
    }
});

//?   @description : Add an Item to the Cart
//?   @method : POST /api/users/cart/additem
//?   @access : private
const addItemToCart = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const { itemId, productName, productImage, productPrice, onSale, countInStock, quantity } = req.body;
    
    if (user) {
        const item = {
            itemId,
            productName, 
            productImage, 
            productPrice, 
            onSale,
            countInStock, 
            quantity
        }

        const existedItem = user.cartList.find(x => x.itemId === item.itemId);
        if (existedItem) {
            res.status(400);
            throw new Error("This item is already in the cart");
        }

        console.log(user.cartList);

        user.cartList.push({
            itemId,
            productName, 
            productImage, 
            productPrice, 
            onSale,
            countInStock, 
            quantity
        });

        const savedUser = await user.save();
        res.status(200).send(savedUser);
    } else {
        res.status(404);
        throw new Error('Cant find the user')
    }
});

//?   @description : Remove an Item from the Cart
//?   @method : DELETE /api/users/cart/removeitem/:id
//?   @access : private
const removeItemFromCart = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const cartItemId = req.params.id;

    if (user) {
        let deletedIndex;
        for (let i = 0; i < user.cartList.length; i++) {
            if (user.cartList[i].itemId == cartItemId) {
                deletedIndex = i;
                break;
            }
        }

        if (deletedIndex === undefined) {
            res.status(404);
            throw new Error("Can't find the item in the cart with this Id, please try again");
        }

        user.cartList.splice(deletedIndex, 1);
        await user.save();

        res.status(200);
        res.send('Delete item from cartList successfully');
    } else {
        res.status(404);
        throw new Error('User is not existed');
    }
});

//?   @description : GET all Items from the Cart
//?   @method : GET /api/users/cart
//?   @access : private
const getUserCartList = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200);
        res.send(user.cartList);
    } else {
        res.status(404);
        throw new Error("Can't Find User With This ID");
    }
});

export {
    login,
    getUserProfile,
    getCurrentUserStatus,
    createUser,
    changeUserProfile,
    
    getAllUsers,
    deleteUserAdmin,
    getSingleUserAdmin,
    updateSingleUserAdmin,

    getWishListItems,
    addItemToUserWishList,
    deleteAnItemFromWishList,
    deleteAllItemsFromWishList,

    addItemToCart,
    removeItemFromCart,
    getUserCartList
}