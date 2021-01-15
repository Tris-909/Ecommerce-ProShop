import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//! REDUCERS
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
    deleteProductAsAdmin
} from './reducers/Admin/Product/deleteProduct';
import {
    alsoLikeReducer
} from './reducers/alsoLikeReducers';
import {
    topProductsReducer
} from './reducers/topProductsReducer';
import {
    searchProductsListReducer
} from './reducers/Products/SearchProducts/search';
import {
    SingleProductReducer
} from './reducers/Products/SingleProduct/singleProduct';
import {
    carouselProductReducer
} from './reducers/Products/CarouselProduct/carousel';
import {
    getListOfProductsBasedOnCategory
} from './reducers/Products/ProductListWithBrands/productsWBrands';
import {
    setReviewsReducer
} from './reducers/Products/ReviewProduct/Review';
import {
    created_Product_Admin_Reducer
} from './reducers/Admin/Product/createProductSample';
import {
    update_Product_Admin_Reducer 
} from './reducers/Admin/Product/updateProduct';
import {
    users_List_Admin_Reducer
} from './reducers/Admin/User/getUserList';
import {
    deleted_user_admin_Reducer
} from './reducers/Admin/User/deleteAUserFromList';
import {
    get_userInfo_admin_Reducer
} from './reducers/Admin/User/getUserDetail';
import {
    update_userInfo_Admin_Reducer
} from './reducers/Admin/User/updateAUserInfo';

const reducer = combineReducers({
    productsList: searchProductsListReducer,
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
    topProductsReducer: topProductsReducer,
    wishList: getWishListReducer,
    addItemToWishList: addItemToWishListReducer,
    removeItemFromWishList: removeItemFromWishListReducer,
    removeAllItemsFromWishList: removeAllItemsFromWishListReducer,
    alsoLike: alsoLikeReducer
});

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : null;
const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '';
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

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