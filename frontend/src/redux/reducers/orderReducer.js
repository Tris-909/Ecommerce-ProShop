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
    PUT_ISPAID_STATUS_ORDER_RESET,

    GET_ORDERS_OF_USERS,
    GET_ORDERS_OF_USERS_SUCCESS,
    GET_ORDERS_OF_USERS_FAIL,
    GET_ORDER_OF_USER_RESET
} from '../actions/actionTypes';

//TODO: First Loaded Order
const orderInitialState = {
    orders: {},
    loading: false,
    error: null,
    success: false
}

const ordersReducer = (state = orderInitialState, action) => {
    switch(action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                success: true
            }
        case ORDER_CREATE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

//TODO: Loading an order based on it ID
const loadedOrdersState = {
    orderItem: {},
    loading: false,
    error: null, 
    success: false
}

const loadedOrderFromDatabasesReducer = (state = loadedOrdersState, action) => { 
    switch(action.type) {
        case GET_ORDER_BY_ID:
            return {
                ...state,
                loading: true
            }
        case GET_ORDER_BY_ID_SUCCESS: 
            return {
                ...state,
                orderItem: action.payload,
                loading: false,
                success: true
            }
        case GET_ORDER_BY_ID_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

//TODO: Updating Order.isPaid status
const orderPayInitialState = {

    loading: false,
    success: false,
    error: null
}

const orderPayReducer = (state = orderPayInitialState, action) => {
    switch(action.type) {
        case PUT_ISPAID_STATUS_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true                
            }
        case PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PUT_ISPAID_STATUS_ORDER_RESET:
            const newState = {}
            return newState
        default: 
            return state
    }
}

//TODO: Get all orders related to the user
const userOrdersInitialState = {
    orders: [],
    loading: false,
    success: false,
    error: null
}

const getOrdersBasedOnUserId = (state = userOrdersInitialState, action) => {
    switch(action.type) {
        case GET_ORDERS_OF_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_ORDERS_OF_USERS_SUCCESS:
            return {
                ...state,
                orders: [...action.payload],
                loading: false,
                success: true
            }
        case GET_ORDERS_OF_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ORDER_OF_USER_RESET:
            const nullState = {
                orders: [],
                loading: false,
                success: false,
                error: null
            };
            return nullState;
        default: 
            return {
                ...state
            }
    }
}

export { 
    ordersReducer,
    loadedOrderFromDatabasesReducer,
    orderPayReducer,
    getOrdersBasedOnUserId 
};