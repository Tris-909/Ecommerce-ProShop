import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_REQUEST_SUCCESS,
    ORDER_CREATE_REQUEST_FAIL,
    GET_ORDER_BY_ID,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAIL
} from '../actions/actionTypes';

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

const loadedOrdersState = {
    orderItems: [],
    shippingAddress: {},
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
                order: action.payload,
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

export { 
    ordersReducer,
    loadedOrderFromDatabasesReducer 
};