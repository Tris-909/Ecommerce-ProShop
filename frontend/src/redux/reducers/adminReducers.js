import {
    DELETE_PRODUCT_AS_ADMIN_REQUEST,
    DELETE_PRODUCT_AS_ADMIN_SUCCESS,
    DELETE_PRODUCT_AS_ADMIN_FAIL,
    DELETE_PRODUCT_AS_ADMIN_RESET,

    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_RESET,

    DELETE_USER_AS_ADMIN_REQUEST,
    DELETE_USER_AS_ADMIN_SUCCESS,
    DELETE_USER_AS_ADMIN_FAIL,

    GET_USER_AS_ADMIN_REQUEST,
    GET_USER_AS_ADMIN_SUCCESS,
    GET_USER_AS_ADMIN_FAIL,

    UPDATE_USER_AS_ADMIN_REQUEST,
    UPDATE_USER_AS_ADMIN_SUCCESS,
    UPDATE_USER_AS_ADMIN_FAIL,

    CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST,
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS,
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL,
    CREATE_SAMPLE_PRODUCT_RESET,

    UPDATE_PRODUCT_AS_ADMIN_REQUEST,
    UPDATE_PRODUCT_AS_ADMIN_SUCCESS,
    UPDATE_PRODUCT_AS_ADMIN_FAIL,
    UPDATE_PRODUCT_AS_ADMIN_RESET
} from '../actions/actionTypes';


const delete_Product_InitialState = {
    success: false,
    loading: false,
    error: null
}

export const deleteProductAsAdmin = (state = delete_Product_InitialState, action) => {
    switch(action.type) {
        case DELETE_PRODUCT_AS_ADMIN_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case DELETE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case DELETE_PRODUCT_AS_ADMIN_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_PRODUCT_AS_ADMIN_RESET:
            return {
                success: false,
                loading: false,
                error: null
            }
        default: 
            return state;
    }

}

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

const user_Info_Admin_Reducer_InitialState = {
    user: null,
    loading: false,
    error: null,
    success: false
}

export const get_userInfo_admin_Reducer = (state = user_Info_Admin_Reducer_InitialState, action) => {
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
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
} 

const update_User_Admin_Reducer_InitialState = {
    updatedUser: null,
    success: false,
    loading: false,
    error: null
}

export const update_userInfo_Admin_Reducer = (state = update_User_Admin_Reducer_InitialState, action) => {
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
                error: action.payload
            }
        default:
            return state;
    }
}

const create_Product_Admin_Reducer_InitialState = {
    createdProduct: null,
    loading: false,
    error: null,
    success: false
}

export const created_Product_Admin_Reducer = (state = create_Product_Admin_Reducer_InitialState, action) => {
    switch(action.type) {
        case CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                createdProduct: action.payload,
                success: true
            }
        case CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_SAMPLE_PRODUCT_RESET: 
            return {
                ...state,
                loading: false,
                error: null,
                success: false
            }
        default: 
            return state;
    }
}

const updated_Product_Admin_Reducer_InitialState = {
    loading: false,
    success: false,
    error: null 
}

export const update_Product_Admin_Reducer = (state = updated_Product_Admin_Reducer_InitialState, action) => {
    switch(action.type) {
        case UPDATE_PRODUCT_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case UPDATE_PRODUCT_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                errro: action.payload
            }
        case UPDATE_PRODUCT_AS_ADMIN_RESET:
            return {
                ...state,
                success: false
            }
        default:
            return state;
    }
}