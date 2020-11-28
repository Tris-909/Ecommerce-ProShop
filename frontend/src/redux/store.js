import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//! REDUCERS
import { productListReducer, SingleProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userReducer, userDetailsReducer } from './reducers/userReducers';
import { ordersReducer } from './reducers/orderReducer.js';

const reducer = combineReducers({
    productsList: productListReducer,
    singleProduct: SingleProductReducer,
    cart: cartReducer,
    user: userReducer,
    userDetails: userDetailsReducer,
    orders: ordersReducer
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