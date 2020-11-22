import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_USER,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
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
                user: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: null
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