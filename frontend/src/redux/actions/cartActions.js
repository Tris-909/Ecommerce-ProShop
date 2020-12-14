import {
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_CART_SUCCES,
    REMOVE_PRODUCT_TO_CART,
    SAVE_SHIPPING_ADDRESS_CART,
    SAVE_PAYMENT_METHOD,
    REMOVE_PRODUCTS_FROM_CART_AFTERBUY
} from './actionTypes';
import axios from 'axios';

export const addItemToCart = (id, qty) => async (dispatch, getState) => {
    try {
        const data = (await axios.get(`/api/products/${id}`)).data;

        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

        dispatch({
            type: ADD_PRODUCT_TO_CART_SUCCES
        });
    } catch(error) {
        console.log(error);
    } 
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_PRODUCT_TO_CART,
        payload: id
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
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