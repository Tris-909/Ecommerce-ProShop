import { 
    GET_ALL_PRODUCTS_PENDING, 
    GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_FAIL,

    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,

    DELETE_PRODUCT_AS_ADMIN_REQUEST,
    DELETE_PRODUCT_AS_ADMIN_SUCCESS,
    DELETE_PRODUCT_AS_ADMIN_FAIL,
    DELETE_PRODUCT_AS_ADMIN_RESET,

    GET_CAROUSEL_PRODUCTS_REQUEST,
    GET_CAROUSEL_PRODUCTS_SUCCESS,
    GET_CAROUSEL_PRODUCTS_FAIL
} from '../actions/actionTypes';

const initialState = {
    products: [],
    pages: null,
    page: null,
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
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page
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
                error: null,
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

const delete_Product_InitialState = {
    success: false,
    loading: false,
    error: null
}

export const deleteProductAsAdmin = (state = delete_Product_InitialState, action) => {
    switch(action.type) {
        case DELETE_PRODUCT_AS_ADMIN_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case DELETE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case DELETE_PRODUCT_AS_ADMIN_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_PRODUCT_AS_ADMIN_RESET:
            return {
                success: false,
                loading: false,
                error: null
            }
        default: 
            return state;
    }

}

const carouselProductInitialState = {
    carouselProducts: [],
    loading: false,
    error: null
}

export const carouselProductReducer = (state = carouselProductInitialState, action) => {
    switch(action.type) {
        case GET_CAROUSEL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CAROUSEL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                carouselProducts: action.payload
            }
        case GET_CAROUSEL_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
} 