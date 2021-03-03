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
    GET_ORDER_OF_USER_RESET,

    GET_ALL_ORDERS_AS_ADMIN_REQUEST,
    GET_ALL_ORDERS_AS_ADMIN_SUCCESS,
    GET_ALL_ORDERS_AS_ADMIN_FAIL,

    PUT_IS_DELIVERED_AS_ADMIN_REQUEST,
    PUT_IS_DELIVERED_AS_ADMIN_SUCCESS,
    PUT_IS_DELIVERED_AS_ADMIN_FAIL,
    PUT_IS_DELIVERED_AS_ADMIN_RESET
} from '../actions/actionTypes';

//TODO: CREATING AN ORDER
export interface SingleOrderItem {
    qty: number,
    _id: string,
    itemId: string,
    productName: string,
    productImage: string,
    productPrice: number,
    onSale: number
}

export interface SingleOrder {
    taxPrice?: number,
    shipping_price?: number,
    totalPrice?: number,
    onSale?: number,
    isPaid?: boolean,
    isDelivered?: boolean,
    _id?: string,
    orderItems?: SingleOrderItem[],
    user?: string,
    shippingAddress?: {
        address: string,
        city: string,
        postalCode: string,
        country: string
    },
    paymentMethod?: string,
    createdAt?: Date,
    updatedAt?: Date
}

interface OrderReducerState {
    orders: SingleOrder,
    loading: boolean,
    error: string | null,
    success: boolean
}

const orderInitialState: OrderReducerState = {
    orders: {},
    loading: false,
    error: null,
    success: false
}

interface CreateOrderAction {
    type: string,
    payload?: SingleOrder,
    error?: string
}

const ordersReducer = (state = orderInitialState, action: CreateOrderAction) => {
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
                error: action.error
            }
        default:
            return state;
    }
}

//!-------------------------------------------------------------------------------------------------
//TODO: Loading an order based on it ID

interface LoadedOrder {
    orderItem: SingleOrder,
    loading: boolean,
    error: string | null,
    success: boolean
}

const loadedOrdersState: LoadedOrder = {
    orderItem: {},
    loading: false,
    error: null, 
    success: false
}

interface LoadedOrderAction {
    type: string,
    payload?: SingleOrder,
    error?: string
}

const loadedOrderFromDatabasesReducer = (state = loadedOrdersState, action: LoadedOrderAction) => { 
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
                error: action.error
            }
        default: 
            return state;
    }
}

//!-------------------------------------------------------------------------------------------------
//TODO: Updating Order.isPaid status
const orderPayInitialState = {
    loading: false,
    success: false,
    error: null
}

interface OrderIsPaidAction {
    type: string,
    error?: string
}

const orderPayReducer = (state = orderPayInitialState, action: OrderIsPaidAction) => {
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
                error: action.error
            }
        case PUT_ISPAID_STATUS_ORDER_RESET:
            const newState = {}
            return newState
        default: 
            return state
    }
}

//!-------------------------------------------------------------------------------------------------
//TODO: Get all orders related to the user
interface UserOrdersState {
    orders: SingleOrder[],
    loading: boolean,
    success: boolean,
    error: string | null
}

const userOrdersInitialState: UserOrdersState = {
    orders: [],
    loading: false,
    success: false,
    error: null
}

interface UserOrderAction {
    type: string,
    payload?: SingleOrder[],
    error?: string 
}

const getOrdersBasedOnUserId = (state = userOrdersInitialState, action: UserOrderAction) => {
    switch(action.type) {
        case GET_ORDERS_OF_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_ORDERS_OF_USERS_SUCCESS:
            if (action.payload && action.payload instanceof Array) {
                return {
                    ...state,
                    orders: [...action.payload],
                    loading: false,
                    success: true
                }
            }
            break;
        case GET_ORDERS_OF_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
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

//!-------------------------------------------------------------------------------------------------
//TODO: Get all orders as admin

interface OrdersAdminState {
    orders: SingleOrder[],
    loading: boolean,
    success: boolean,
    error: string | null
}

const ordersAdminInitialState: OrdersAdminState = { 
    orders: [],
    loading: false,
    success: false,
    error: null
} 

interface OrderAdminAction {
    type: string,
    payload?: SingleOrder[],
    error?: string
}

const getOrdersAsAdmin = (state = ordersAdminInitialState, action: OrderAdminAction) => {
    switch(action.type) {
        case GET_ALL_ORDERS_AS_ADMIN_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case GET_ALL_ORDERS_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                orders: action.payload
            }
        case GET_ALL_ORDERS_AS_ADMIN_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

//!-------------------------------------------------------------------------------------------------
//TODO: PUT isDelivered Status as Admin 
interface IsDelieveredAdmin {
    success: boolean,
    loading: boolean,
    error: string | null
}

const putIsDeliveredInitialState: IsDelieveredAdmin = {
    success: false,
    loading: false,
    error: null
}

const putIsDeliveredStatus = (state = putIsDeliveredInitialState, action: {type: string, error?: string}) => {
    switch(action.type) {
        case PUT_IS_DELIVERED_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PUT_IS_DELIVERED_AS_ADMIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                success: true
            }
        case PUT_IS_DELIVERED_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case PUT_IS_DELIVERED_AS_ADMIN_RESET:
            return {
                success: false,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

export { 
    ordersReducer,
    loadedOrderFromDatabasesReducer,
    orderPayReducer,
    getOrdersBasedOnUserId,
    getOrdersAsAdmin,
    putIsDeliveredStatus
};