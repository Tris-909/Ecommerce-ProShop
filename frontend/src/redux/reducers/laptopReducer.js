import {
    GET_TOP_LAPTOPS_REQUEST,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_LAPTOPS_FAIL,

    GET_ALL_LAPTOPS_REQUEST,
    GET_ALL_LAPTOPS_SUCCESS,
    GET_ALL_LAPTOPS_FAIL
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
                laptops: action.payload
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