import { 
    ADD_PRODUCT_TO_CART, 
    ADD_PRODUCT_TO_CART_SUCCES,
    ADD_PRODUCT_TO_CART_RESET,
    REMOVE_PRODUCT_TO_CART, 
    SAVE_SHIPPING_ADDRESS_CART, 
    SAVE_PAYMENT_METHOD,
    REMOVE_PRODUCTS_FROM_CART_AFTERBUY
} from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    addItemSuccess: false,
    shippingAddress: {
        address: '',
        city: '',
        postalCode: '',
        country: ''
    },
    paymentMethod: ''
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART: 
            const item = action.payload;

            const existedItem = state.cartItems.find(x => x.product === item.product);

            if (existedItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existedItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case ADD_PRODUCT_TO_CART_SUCCES:
            return {
                ...state,
                addItemSuccess: true
            }
        case ADD_PRODUCT_TO_CART_RESET:
            return {
                ...state,
                addItemSuccess: false
            }
        case REMOVE_PRODUCT_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
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
        default:
            return state;
    }
}
