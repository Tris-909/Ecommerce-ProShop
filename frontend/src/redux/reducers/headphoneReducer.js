import {
    GET_ALL_HEADPHONE_REQUEST,
    GET_ALL_HEADPHONE_SUCCESS,
    GET_ALL_HEADPHONE_FAIL,

    GET_TOP_HEADPHONE_REQUEST,
    GET_TOP_HEADPHONE_SUCCESS,
    GET_TOP_HEADPHONE_FAIL
} from '../actions/actionTypes';

const topHeadPhoneInitialState = {
    topHeadphone: [],
    loading: false,
    error: null
}

export const topHeadphoneReducer = (state = topHeadPhoneInitialState, action) => {
    switch(action.type) {
        case GET_TOP_HEADPHONE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_HEADPHONE_SUCCESS:
            return {
                ...state,
                loading: false,
                topHeadphone: [...action.payload]
            }
        case GET_TOP_HEADPHONE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

const allHeadphonesInitialState = {
    headPhones: [],
    loading: false,
    error: null
}

export const allHeadphonesReducer = (state = allHeadphonesInitialState, action) => {
    switch(action.type) {
        case GET_ALL_HEADPHONE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_HEADPHONE_SUCCESS:
            return {
                ...state,
                loading: false,
                headPhones: [...action.payload]
            }
        case GET_ALL_HEADPHONE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}