import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,

    LOGOUT_USER,

    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,

    CLEAR_ERROR_SUBMIT,

    GET_USER_DETAILS_PENDING,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
    GET_USER_DETAILS_RESET,

    UPDATE_USER_DETAIL_PENDING,
    UPDATE_USER_DETAIL_SUCCESS,
    UPDATE_USER_DETAIL_FAIL,
    UPDATE_USER_DETAIL_RESET
} from '../actions/actionTypes';

const initialUserState = {
    user: null,
    loading: false,
    error: null
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case LOGIN_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        case CREATE_USER_PENDING:
            return {
                ...state,
                loading: false
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case CREATE_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERROR_SUBMIT:    
            return {
                ...state,
                error: null
            }
        case UPDATE_USER_DETAIL_RESET: 
            return {
                ...state,
                user: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

const initialDetailState = {
    details: {},
    loading: false,
    detailError: null,
    success: false
}

const userDetailsReducer = (state = initialDetailState, action) => {
    switch(action.type) {
        case GET_USER_DETAILS_PENDING :
            return {
                ...state,
                loading: true
            }
        case GET_USER_DETAILS_SUCCESS :
            return {
                ...state,
                loading: false,
                details: action.payload
            }
        case GET_USER_DETAILS_FAIL :
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UPDATE_USER_DETAIL_PENDING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                details: action.payload
            }
        case UPDATE_USER_DETAIL_FAIL:
            return {
                ...state,
                detailError: action.payload
            }   
        case GET_USER_DETAILS_RESET: 
            return {
                details: {},
                loading: false,
                detailError: null,
                success: false   
            }
        default : 
            return {
                ...state
            }
    }
}

export {
    userReducer,
    userDetailsReducer
}