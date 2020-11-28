import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_REQUEST_SUCCESS,
    ORDER_CREATE_REQUEST_FAIL,
    GET_ORDER_BY_ID,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAIL
} from './actionTypes';
import axios from 'axios';

export const createOrder = ( orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        });

        const { user: { user } } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const createdOrder = await axios.post(`/api/orders`, {
            orderItems, 
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice,
            user
        }, config);

        dispatch({
            type: ORDER_CREATE_REQUEST_SUCCESS,
            payload: createdOrder.data
        });
    } catch(error) {
        dispatch({
            type: ORDER_CREATE_REQUEST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getOrderById = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_ORDER_BY_ID
        });

        const { user: {user} } = getState();
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }

        const order = await axios.get(`/${id}`, config);

        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: order
        });
    } catch(error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAIL,
            payload: error
        });
    }
}