import {
    DELETE_USER_AS_ADMIN_REQUEST,
    DELETE_USER_AS_ADMIN_SUCCESS,
    DELETE_USER_AS_ADMIN_FAIL
} from '../../../actions/actionTypes';

interface DeleteUserAsAdminState {
    loading: boolean,
    messages: string,
    success: boolean,
    error: string | null
}

const deleted_User_Admin_Reducer_InitialState: DeleteUserAsAdminState = {
    loading: false,
    messages: '',
    success: false,
    error: null
}

interface DeleteUserAsAdminAction {
    type: string,
    messages?: string,
    error?: string
}

export const deleted_user_admin_Reducer = (state = deleted_User_Admin_Reducer_InitialState, action: DeleteUserAsAdminAction) => {
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
                messages: action.messages
            }
        case DELETE_USER_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
}
