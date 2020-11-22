import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//! REDUCERS
import { productListReducer, SingleProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userReducer, userDetailsReducer, updateUserDetailReducer } from './reducers/userReducers';

const reducer = combineReducers({
    productsList: productListReducer,
    singleProduct: SingleProductReducer,
    cart: cartReducer,
    user: userReducer,
    userDetails: userDetailsReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage }, 
    user: { user: userInfoFromLocalStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;