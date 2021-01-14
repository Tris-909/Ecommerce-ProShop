import {
    UPDATE_USER_AS_ADMIN_REQUEST,
    UPDATE_USER_AS_ADMIN_SUCCESS,
    UPDATE_USER_AS_ADMIN_FAIL
} from '../../../actions/actionTypes';

interface UpdateUserAdminState {
    updatedUser: {
        _id: string,
        name: string,
        email: string,
        isAdmin:  boolean,
        token: string
    },
    success: boolean,
    loading: boolean,
    error: string | null
}

const update_User_Admin_Reducer_InitialState: UpdateUserAdminState = {
    updatedUser: {
        _id: "",
        name: "",
        email: "",
        isAdmin:  false,
        token: ""
    },
    success: false,
    loading: false,
    error: null
}

interface UpdateUserAsAdminAction {
    type: string,
    payload?: {
        _id: string,
        name: string,
        email: string,
        isAdmin:  boolean,
        token: string
    },
    error?: string
}

export const update_userInfo_Admin_Reducer = (state = update_User_Admin_Reducer_InitialState, action: UpdateUserAsAdminAction) => {
    switch(action.type) {
        case UPDATE_USER_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                updatedUser: action.payload
            }
        case UPDATE_USER_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
