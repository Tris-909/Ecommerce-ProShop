import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_TO_CART
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