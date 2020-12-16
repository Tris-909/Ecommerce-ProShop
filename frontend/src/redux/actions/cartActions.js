import {
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_FAIL,

    REMOVE_PRODUCT_FROM_CART_REQUEST,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_FAIL,

    GET_ALL_ITEMS_FROM_CART_REQUEST,
    GET_ALL_ITEMS_FROM_CART_SUCCESS,
    GET_ALL_ITEMS_FROM_CART_FAIL,

    SAVE_SHIPPING_ADDRESS_CART,
    SAVE_PAYMENT_METHOD,
    REMOVE_PRODUCTS_FROM_CART_AFTERBUY
} from './actionTypes';
import axios from 'axios';

export const addItemToCart = (itemId, productName, productImage, productPrice, countInStock, qty) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_PRODUCT_TO_CART
        });
        console.log({
            itemId, 
            productName, 
            productImage, 
            productPrice, 
            countInStock: countInStock, 
            quantity: qty
        });
        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.post('/api/users/cart/additem', { 
            itemId, 
            productName, 
            productImage, 
            productPrice, 
            countInStock: countInStock, 
            quantity: qty
        }, config);

        dispatch({
            type: ADD_PRODUCT_TO_CART_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: ADD_PRODUCT_TO_CART_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    } 
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART_REQUEST
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.delete(`/api/users/cart/removeitem/${id}`, config);

        dispatch({
            type: REMOVE_PRODUCT_FROM_CART_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getAllItemsCart = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_ITEMS_FROM_CART_REQUEST });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get('/api/users/cart', config);

        dispatch({
            type: GET_ALL_ITEMS_FROM_CART_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ALL_ITEMS_FROM_CART_FAIL
        })
    }
}

export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS_CART,
        payload: data
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = (paymentMethod) => async (dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: paymentMethod
    });

    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
}

export const removeProductsInCartAfterBuy = () => async (dispatch) => {
    dispatch({
        type: REMOVE_PRODUCTS_FROM_CART_AFTERBUY
    });

    localStorage.setItem('cartItems', []);
}