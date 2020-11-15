import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productListReducer, SingleProductReducer } from './reducers/productReducers';
 
const reducer = combineReducers({
    productsList: productListReducer,
    singleProduct: SingleProductReducer
});
const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;