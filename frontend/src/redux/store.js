import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//! REDUCERS
import { 
    productListReducer, 
    SingleProductReducer, 
    deleteProductAsAdmin,
    carouselProductReducer ,
    setReviewsReducer,
    getListOfProductsBasedOnCategory
} from './reducers/productReducers';
import { 
    cartReducer, 
    removeItemFromCart, 
} from './reducers/cartReducers';
import {
    getWishListReducer,
    addItemToWishListReducer,
    removeItemFromWishListReducer,
    removeAllItemsFromWishListReducer
} from './reducers/wishListReducer';
import { 
    userReducer, 
    userDetailsReducer,
    userReviewReducer,
    deleteReviewReducer,
    currentUserStatusReducer 
} from './reducers/userReducers';
import { 
    ordersReducer, 
    loadedOrderFromDatabasesReducer, 
    orderPayReducer, 
    getOrdersBasedOnUserId,
    getOrdersAsAdmin,
    putIsDeliveredStatus 
} from './reducers/orderReducer.js';
import { 
    users_List_Admin_Reducer, 
    deleted_user_admin_Reducer, 
    get_userInfo_admin_Reducer, 
    update_userInfo_Admin_Reducer,
    created_Product_Admin_Reducer,
    update_Product_Admin_Reducer 
} from './reducers/adminReducers';
import {
    topLaptopReducer
} from './reducers/laptopReducer';
import {
    getTopTVs
} from './reducers/tvReducers';
import {
    topPhonesReducer
} from './reducers/phoneReducers';
import {
    topHeadphoneReducer
} from './reducers/headphoneReducer';
import {
    topGameReducer
} from './reducers/gameReducer';
import {
    alsoLikeReducer
} from './reducers/alsoLikeReducers';

const reducer = combineReducers({
    productsList: productListReducer,
    singleProduct: SingleProductReducer,
    listProducts: getListOfProductsBasedOnCategory,
    setOfReviews: setReviewsReducer,
    currentUserStatus: currentUserStatusReducer,
    deleteProduct: deleteProductAsAdmin,
    cart: cartReducer,
    removeCart: removeItemFromCart,
    user: userReducer,
    userDetails: userDetailsReducer,
    orders: ordersReducer,
    loadedOrder: loadedOrderFromDatabasesReducer,
    updatedIsPaidOrder: orderPayReducer,
    userOrders: getOrdersBasedOnUserId,
    adminUsersList: users_List_Admin_Reducer,
    deletedAdmin: deleted_user_admin_Reducer,
    userInfoAdmin: get_userInfo_admin_Reducer,
    updateUserInfo: update_userInfo_Admin_Reducer,
    createdProduct: created_Product_Admin_Reducer,
    updatedProduct: update_Product_Admin_Reducer,
    adminOrders: getOrdersAsAdmin,
    isDeliveredOrderAdmin: putIsDeliveredStatus,
    userReview: userReviewReducer,
    deleteReview: deleteReviewReducer,
    carouselProducts: carouselProductReducer,
    topLaptops: topLaptopReducer,
    topTVs: getTopTVs,
    topPhones: topPhonesReducer,
    topHeadphone: topHeadphoneReducer,
    topGames: topGameReducer,
    wishList: getWishListReducer,
    addItemToWishList: addItemToWishListReducer,
    removeItemFromWishList: removeItemFromWishListReducer,
    removeAllItemsFromWishList: removeAllItemsFromWishListReducer,
    alsoLike: alsoLikeReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : null;
const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '';

const initialState = {
    cart: { 
        cartItems: cartItemsFromLocalStorage, 
        shippingAddress: shippingAddressFromLocalStorage, 
        paymentMethod: paymentMethodFromLocalStorage
    }, 
    user: { user: userInfoFromLocalStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;