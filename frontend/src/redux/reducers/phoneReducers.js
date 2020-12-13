import {
    GET_TOP_PHONES_REQUEST,
    GET_TOP_PHONES_SUCCESS,
    GET_TOP_PHONES_FAIL,

    GET_ALL_PHONES_REQUEST,
    GET_ALL_PHONES_SUCCESS,
    GET_ALL_PHONES_FAIL
} from '../actions/actionTypes';

const topPhonesInitialState = {
    topPhones: [],
    loading: false,
    error: null
}

export const topPhonesReducer = (state = topPhonesInitialState, action) => {
    switch(action.type) {
        case GET_TOP_PHONES_REQUEST:
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
        case GET_TOP_PHONES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

const allPhonesInitialState = {
    allPhones: [],
    loading: false,
    error: null
}

export const allPhonesReducer = (state = allPhonesInitialState, action) => {
    switch(action.type) {
        case GET_ALL_PHONES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PHONES_SUCCESS: 
            return {
                ...state,
                loading: false,
                allPhones: [...action.payload]
            }
        case GET_ALL_PHONES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}