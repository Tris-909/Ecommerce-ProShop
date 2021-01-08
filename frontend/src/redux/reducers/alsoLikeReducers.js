import {
    GET_ALSOLIKE_PRODUCTS_PENDING,
    GET_ALSOLIKE_PRODUCTS_SUCCESS,
    GET_ALSOLIKE_PRODUCTS_FAIL,

    GET_ALSOLIKE_LAPTOPS_PENDING,
    GET_ALSOLIKE_LAPTOPS_SUCCESS,
    GET_ALSOLIKE_LAPTOPS_FAIL,

    GET_ALSOLIKE_TVS_PENDING,
    GET_ALSOLIKE_TVS_SUCCESS,
    GET_ALSOLIKE_TVS_FAIL,

    GET_ALSOLIKE_PHONES_PENDING,
    GET_ALSOLIKE_PHONES_SUCCESS,
    GET_ALSOLIKE_PHONES_FAIL,

    GET_ALSOLIKE_HEADPHONES_PENDING,
    GET_ALSOLIKE_HEADPHONES_SUCCESS,
    GET_ALSOLIKE_HEADPHONES_FAIL,

    GET_ALSOLIKE_GAMES_PENDING,
    GET_ALSOLIKE_GAMES_SUCCESS,
    GET_ALSOLIKE_GAMES_FAIL,

    GET_ALSOLIKE_RESET
} from '../actions/actionTypes';

const alsoLikeInitialState = {
    alsoLikeItems: [],
    loading: false,
    success: false,
    error: null
}

export const alsoLikeReducer = (state = alsoLikeInitialState, action) => {
    switch(action.type) {
        case GET_ALSOLIKE_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                alsoLikeItems: [...action.payload],
                success: true
            }
        case GET_ALSOLIKE_LAPTOPS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_LAPTOPS_SUCCESS:
            return {
                ...state,
                loading: false,
                alsoLikeItems: [...action.payload],
                success: true
            }
        case GET_ALSOLIKE_LAPTOPS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ALSOLIKE_TVS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_TVS_SUCCESS:
            return {
                ...state,
                loading: false,
                alsoLikeItems: [...action.payload],
                success: true
            }
        case GET_ALSOLIKE_TVS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ALSOLIKE_PHONES_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_PHONES_SUCCESS:
            return {
                ...state,
                loading: false,
                alsoLikeItems: [...action.payload],
                success: true
            }
        case GET_ALSOLIKE_PHONES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ALSOLIKE_HEADPHONES_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_HEADPHONES_SUCCESS:
            return {
                ...state,
                loading: false,
                alsoLikeItems: [...action.payload],
                success: true
            }
        case GET_ALSOLIKE_HEADPHONES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALSOLIKE_GAMES_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                alsoLikeItems: [...action.payload],
                success: true
            }
        case GET_ALSOLIKE_GAMES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ALSOLIKE_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALSOLIKE_RESET:
            return {
                alsoLikeItems: [],
                loading: false,
                success: false,
                error: null
            }
        default:
            return state;
    }
}