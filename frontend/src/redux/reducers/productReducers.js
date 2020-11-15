import { 
    GET_ALL_PRODUCTS_PENDING, 
    GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_FAIL,
    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL
} from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_ALL_PRODUCTS_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const initlaStateSingleProduct = {
    singleProduct: null,
    loading: false,
    error: null
}

export const SingleProductReducer = (state = initlaStateSingleProduct, action) => {
    switch(action.type) {
        case GET_SINGLE_PRODUCT_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                singleProduct: action.payload
            }
        case GET_SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}