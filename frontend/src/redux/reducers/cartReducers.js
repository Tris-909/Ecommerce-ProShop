import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART, SAVE_SHIPPING_ADDRESS_CART } from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    shippingAddress: {
        address: '',
        city: '',
        postalCode: '',
        country: ''
    }
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
        default:
            return state;
    }
}