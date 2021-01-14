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
import { Dispatch } from 'redux';
import { User } from './actionInterfaces';
import { singleCartItem } from '../reducers/interfaces';

export const addItemToCart = ( 
    itemId: string, 
    productName: string,
    productImage: string, 
    productPrice: number, 
    countInStock: number, 
    qty: number
    ) => async (dispatch: Dispatch, getState: Function) => {
    
    try {
        dispatch({
            type: ADD_PRODUCT_TO_CART
        });

        const { user: {user} }:{ user: {user: User} } = getState();
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
            addItemError: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    } 
}

export const removeItemFromCart = (id: string) => async (dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
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

export const getAllItemsCart = () => async (dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({ type: GET_ALL_ITEMS_FROM_CART_REQUEST });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get<singleCartItem[]>('/api/users/cart', config);

        dispatch({
            type: GET_ALL_ITEMS_FROM_CART_SUCCESS,
            cartItems: data
        });
    } catch(error) {
        dispatch({
            type: GET_ALL_ITEMS_FROM_CART_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const saveShippingAddress = (data: {
    address: string,
    city: string,
    postalCode: string,
    country: string
}) => async (dispatch: Dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS_CART,
        shippingAddress: data
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = (paymentMethod: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        paymentMethod: paymentMethod
    });

    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
}

export const removeProductsInCartAfterBuy = () => async (dispatch: Dispatch) => {
    dispatch({
        type: REMOVE_PRODUCTS_FROM_CART_AFTERBUY
    });
}