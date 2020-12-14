import {
    GET_WISH_LIST_REQUEST,
    GET_WISH_LIST_SUCCESS,
    GET_WISH_LIST_FAIL,

    ADD_ITEM_TO_WISH_LIST_REQUEST,
    ADD_ITEM_TO_WISH_LIST_SUCCESS,
    ADD_ITEM_TO_WISH_LIST_FAIL,
    ADD_ITEM_TO_WISH_LIST_RESET,

    REMOVE_ITEM_FROM_WISH_LIST_REQUEST,
    REMOVE_ITEM_FROM_WISH_LIST_SUCCESS,
    REMOVE_ITEM_FROM_WISH_LIST_FAIL,
    REMOVE_ITEM_FROM_WISH_LIST_RESET
} from '../actions/actionTypes';

const wishListInitialState = {
    wishList: [],
    loading: false,
    error: null
}

export const getWishListReducer = (state = wishListInitialState, action) => {
    switch(action.type) {
        case GET_WISH_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_WISH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                wishList: [...action.payload]
            }
        case GET_WISH_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const addItemToWishListInitialState = {
    loading: false,
    success: false,
    error: null
}

export const addItemToWishListReducer = (state = addItemToWishListInitialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_WISH_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_ITEM_TO_WISH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case ADD_ITEM_TO_WISH_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_ITEM_TO_WISH_LIST_RESET:
            return {
                loading: false,
                success: false,
                error: null
            }
        default: 
            return state;
    }
}

const removeItemFromWishListInitialState = {
    loading: false,
    success: false,
    error: null
}

export const removeItemFromWishListReducer = (state = removeItemFromWishListInitialState, action) => {
    switch(action.type) {
        case REMOVE_ITEM_FROM_WISH_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REMOVE_ITEM_FROM_WISH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case REMOVE_ITEM_FROM_WISH_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case REMOVE_ITEM_FROM_WISH_LIST_RESET:
            return {
                loading: false,
                success: false,
                error: null
            }
        default: 
            return state;
    }
}