import { 
    ADD_PRODUCT_TO_CART, 
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_FAIL,
    ADD_PRODUCT_TO_CART_RESET,
    
    REMOVE_PRODUCT_FROM_CART_REQUEST,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_FAIL,
    REMOVE_PRODUCT_FROM_CART_RESET,

    GET_ALL_ITEMS_FROM_CART_REQUEST,
    GET_ALL_ITEMS_FROM_CART_SUCCESS,
    GET_ALL_ITEMS_FROM_CART_FAIL,
    GET_ALL_ITEMS_FROM_CART_RESET,

    SAVE_SHIPPING_ADDRESS_CART, 
    SAVE_PAYMENT_METHOD,
    REMOVE_PRODUCTS_FROM_CART_AFTERBUY
} from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    addItemLoading: false,
    addItemSuccess: false,
    addItemError: null,
    shippingAddress: {
        address: 'No Info',
        city: 'No Info',
        postalCode: 'No Info',
        country: 'No Info'
    },
    paymentMethod: '',
    error: null
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART: 
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                addItemSuccess: true
            }
        case ADD_PRODUCT_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case ADD_PRODUCT_TO_CART_RESET:
            return {
                ...state,
                addItemSuccess: false,
                addItemLoading: false,
                addItemError: null,
            }
        case SAVE_SHIPPING_ADDRESS_CART: 
            return {
                ...state,
                shippingAddress: action.payload
            }
        case SAVE_PAYMENT_METHOD: 
            return {
                ...state,
                paymentMethod: action.payload
            }
        case REMOVE_PRODUCTS_FROM_CART_AFTERBUY: 
            return {
                ...state,
                cartItems: []
            }
        case GET_ALL_ITEMS_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_ITEMS_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [...action.payload]
            }
        case GET_ALL_ITEMS_FROM_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ALL_ITEMS_FROM_CART_RESET:
            return {
                cartItems: [],
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

const initialRemoveItemCartState = {
    loading: false,
    success: false,
    error: null
}

export const removeItemFromCart = (state = initialRemoveItemCartState, action) => {
    switch(action.type) {
        case REMOVE_PRODUCT_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }            
        case REMOVE_PRODUCT_FROM_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }            
        case REMOVE_PRODUCT_FROM_CART_RESET:
            return {
                loading: false,
                success: false,
                error: null
            }
        default: 
            return state;
    }
}
