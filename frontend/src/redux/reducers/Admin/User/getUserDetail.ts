import {
    GET_USER_AS_ADMIN_REQUEST,
    GET_USER_AS_ADMIN_SUCCESS,
    GET_USER_AS_ADMIN_FAIL
} from '../../../actions/actionTypes';

interface GetOneUserInfoAsAdminState {
    user: {
        _id: string,
        name: string,
        email: string,
        isAdmin: boolean
    },
    loading: boolean,
    error: string | null,
    success: boolean
}

const user_Info_Admin_Reducer_InitialState:GetOneUserInfoAsAdminState = {
    user: {
        _id: "",
        name: "",
        email: "",
        isAdmin: false
    },
    loading: false,
    error: null,
    success: false
}

interface GetUserInfoAction {
    type: string,
    payload?: {
        _id: string,
        name: string, 
        email: "",
        isAdmin: false
    },
    error?: string 
}

export const get_userInfo_admin_Reducer = (state = user_Info_Admin_Reducer_InitialState, action: GetUserInfoAction) => {
    switch(action.type) {
        case GET_USER_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: false
            }
        case GET_USER_AS_ADMIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                success: true
            }
        case GET_USER_AS_ADMIN_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
} 