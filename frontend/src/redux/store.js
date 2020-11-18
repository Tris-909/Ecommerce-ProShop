import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productListReducer, SingleProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    productsList: productListReducer,
    singleProduct: SingleProductReducer,
    cart: cartReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;