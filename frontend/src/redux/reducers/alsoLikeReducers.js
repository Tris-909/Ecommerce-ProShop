import {
    GET_ALSOLIKE_PRODUCTS_PENDING,
    GET_ALSOLIKE_PRODUCTS_SUCCESS,
    GET_ALSOLIKE_PRODUCTS_FAIL,
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