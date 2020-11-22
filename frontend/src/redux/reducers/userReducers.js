import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_USER,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CLEAR_ERROR_SUBMIT
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
        default:
            return {
                ...state
            }
    }
}

export {
    userReducer
}