import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_RESET
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

