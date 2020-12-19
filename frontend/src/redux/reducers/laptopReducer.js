import {
    GET_TOP_LAPTOPS_REQUEST,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_LAPTOPS_FAIL,

    GET_ALL_LAPTOPS_REQUEST,
    GET_ALL_LAPTOPS_SUCCESS,
    GET_ALL_LAPTOPS_FAIL,

    GET_A_LAPTOP_REQUEST,
    GET_A_LAPTOP_SUCCESS,
    GET_A_LAPTOP_FAIL,
    GET_A_LAPTOP_RESET
} from '../actions/actionTypes';

const topLaptopInitialState = {
    topLaptops: [],
    loading: false,
    error: null
}

export const topLaptopReducer = (state = topLaptopInitialState, action) => {
    switch(action.type) {
        case GET_TOP_LAPTOPS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_LAPTOPS_SUCCESS:
            return {
                ...state,
                loading: false,
                topLaptops: action.payload
            }
        case GET_TOP_LAPTOPS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const allLaptopsInitialState = {
    laptops: [],
    page: null,
    pages: null,
    loading: false,
    error: null
}

export const allLaptopsReducer = (state = allLaptopsInitialState, action) => {
    switch(action.type) {
        case GET_ALL_LAPTOPS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_LAPTOPS_SUCCESS:
            return {
                ...state,
                loading: false,
                laptops: [...action.payload.laptops],
                page: action.payload.page,
                pages: action.payload.pages
            }
        case GET_ALL_LAPTOPS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

const singleLaptopInitialState = {
    singleLaptop: null,
    loading: false,
    success: false,
    error: null
}

export const getALaptopReducer = (state = singleLaptopInitialState, action) => {
    switch(action.type) {
        case GET_A_LAPTOP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_A_LAPTOP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                singleLaptop: action.payload
            }
        case GET_A_LAPTOP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_A_LAPTOP_RESET:
            return {
                singleLaptop: null,
                loading: false,
                success: false,
                error: null
            }
        default: 
            return state;
    }
}