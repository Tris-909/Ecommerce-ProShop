import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_RESET
} from '../../../actions/actionTypes';

interface SingleUserInAdminUsersScreen {
    _id: string,
    name: string,
    email: string,
    isAdmin: boolean
}

interface UserAdminState {
    usersList: SingleUserInAdminUsersScreen[],
    page: number,
    pages: number,
    loading: boolean,
    success: boolean,
    error: null | string
}

const users_List_Admin_Initial_State:UserAdminState = {
    usersList: [],
    page: 1,
    pages: 10,
    loading: false,
    success: false,
    error: null
}

interface ReturnUsersListAction {
    type: string,
    payload?: {
        users: SingleUserInAdminUsersScreen[],
        pages: number,
        page: number
    },
    error?: string
}

export const users_List_Admin_Reducer = (state = users_List_Admin_Initial_State, action: ReturnUsersListAction) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_USERS_SUCCESS:
            if (action.payload !== undefined) {
                return {
                    ...state,
                    loading: false,
                    success: true,
                    usersList: action.payload.users,
                    pages: action.payload.pages, 
                    page: action.payload.page
                }
            }
            break;
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case GET_ALL_USERS_RESET:
            const nullState = {};
            return nullState;
        default: 
            return state
    }
}