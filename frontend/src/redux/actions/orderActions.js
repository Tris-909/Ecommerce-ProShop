import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_REQUEST_SUCCESS,
    ORDER_CREATE_REQUEST_FAIL,

    GET_ORDER_BY_ID,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAIL,

    PUT_ISPAID_STATUS_ORDER_REQUEST,
    PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS,
    PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL,

    GET_ORDERS_OF_USERS,
    GET_ORDERS_OF_USERS_SUCCESS,
    GET_ORDERS_OF_USERS_FAIL
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
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const order = await axios.get(`/api/orders/${id}`,config);

        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: order.data
        });
    } catch(error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const payOrder = (orderID, paymentResult) => async(dispatch, getState) => {
    try {
        dispatch({
            type: PUT_ISPAID_STATUS_ORDER_REQUEST
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const { data } = await axios.put(`/api/orders/${orderID}/pay`, paymentResult ,config)
        dispatch({
            type: PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getOrdersByUserId = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_ORDERS_OF_USERS
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get('/api/orders/myorders', config);
        dispatch({
            type: GET_ORDERS_OF_USERS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ORDERS_OF_USERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
