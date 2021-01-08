import {
    GET_TOP_PRODUCTS_REQUEST,

    GET_TOP_PHONES_SUCCESS,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_TVS_SUCCESS,
    GET_TOP_HEADPHONE_SUCCESS,
    GET_TOP_GAMES_SUCCESS,

    GET_TOP_PRODUCTS_FAIL
} from '../actions/actionTypes';

const initialTopProducts = {
    topPhones: [],
    topLaptops: [],
    topTVs: [],
    topHeadphones: [],
    topGames: [],
    loading: false,
    error: null
}

export const topProductsReducer = (state = initialTopProducts, action) => {
    switch(action.type) {
        case GET_TOP_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_PHONES_SUCCESS:
            return {
                ...state,
                loading: false,
                topPhones: [...action.payload]
            }
        case GET_TOP_LAPTOPS_SUCCESS: 
            return {
                ...state,
                loading: false,
                topLaptops: [...action.payload]
            }         
        case GET_TOP_TVS_SUCCESS:
            return {
                ...state,
                loading: false,
                topTVs: [...action.payload] 
            }
        case GET_TOP_HEADPHONE_SUCCESS: 
            return {
                ...state,
                loading: false,
                topHeadphones: [...action.payload]
            }
        case GET_TOP_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                topGames: [...action.payload]
            }
        case GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}