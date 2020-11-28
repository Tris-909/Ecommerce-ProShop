import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_REQUEST_SUCCESS,
    ORDER_CREATE_REQUEST_FAIL
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

export { 
    ordersReducer 
};