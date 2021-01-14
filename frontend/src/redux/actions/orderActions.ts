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
import { Dispatch } from 'redux';
import {SingleOrderItem, SingleOrder} from '../reducers/orderReducer';
import { User } from './actionInterfaces';

export const createOrder = ( 
    orderItems: SingleOrderItem[], 
    shippingAddress: {
        address: string,
        city: string,
        postalCode: string,
        country: string
    }, 
    paymentMethod: string, 
    itemsPrice: number, 
    taxPrice: number, 
    shippingPrice: number, 
    totalPrice: number) => async (dispatch: Dispatch, getState: Function) => {
    
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
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getOrderById = (id: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: GET_ORDER_BY_ID
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const order = await axios.get<SingleOrder>(`/api/orders/${id}`,config);

        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: order.data
        });
    } catch(error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const payOrder = (orderID: string, paymentResult: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: PUT_ISPAID_STATUS_ORDER_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const { data } = await axios.put<SingleOrder>(`/api/orders/${orderID}/pay`, paymentResult ,config)
        dispatch({
            type: PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getOrdersByUserId = () => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: GET_ORDERS_OF_USERS
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get<SingleOrder[]>('/api/orders/myorders', config);
        dispatch({
            type: GET_ORDERS_OF_USERS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ORDERS_OF_USERS_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
