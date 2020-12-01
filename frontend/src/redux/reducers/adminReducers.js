import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_RESET,

    DELETE_USER_AS_ADMIN_REQUEST,
    DELETE_USER_AS_ADMIN_SUCCESS,
    DELETE_USER_AS_ADMIN_FAIL
} from '../actions/actionTypes';

const users_List_Admin_Initial_State = {
    usersList: [],
    loading: false,
    success: false,
    error: null
}

export const users_List_Admin_Reducer = (state = users_List_Admin_Initial_State, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                usersList: action.payload
            }
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_ALL_USERS_RESET:
            const nullState = {};
            return nullState;
        default: 
            return state
    }
}

const deleted_User_Admin_Reducer_InitialState = {
    loading: false,
    messages: '',
    success: false,
    error: null
}

export const deleted_user_admin_Reducer = (state = deleted_User_Admin_Reducer_InitialState, action) => {
    switch(action.type) {
        case DELETE_USER_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_USER_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                messages: action.payload
            }
        case DELETE_USER_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}