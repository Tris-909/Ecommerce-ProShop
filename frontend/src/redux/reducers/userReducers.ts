import { BooleanLiteral } from 'typescript';
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
    UPDATE_USER_DETAIL_RESET,

    CREATE_REVIEW_PENDING,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAIL,
    CREATE_REVIEW_RESET,

    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,

    GET_USER_CURRENT_STATUS_PENDING,
    GET_USER_CURRENT_STATUS_SUCCESS,
    GET_USER_CURRENT_STATUS_FAIL,
    GET_USER_CURRENT_STATUS_RESET
} from '../actions/actionTypes';
import { 
    singleWishListItem, 
    singleCartItem,
    agreeAndDisAgree,
    Action 
} from './interfaces';

//! USER LOGGED-IN  
interface User {
    _id: string,
    name: string,
    email: string,
    isAdmin: boolean,
    wishList?: singleWishListItem[],
    cartList?: singleCartItem[],
    agreeAndDisAgree?: agreeAndDisAgree[],
    token: string
}

interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null
}

const initialUserState: UserState = {
    user: null,
    loading: false,
    error: null
}

const userReducer = (state = initialUserState, action: Action) => {
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

interface Details {
    _id?: string,
    name?: string,
    email?: string,
    isAdmin?: boolean
}

interface DetailState {
    details: Details,
    loading: boolean,
    detailError: string | null,
    success: boolean
}

//! USER PROFILE 
const initialDetailState: DetailState = {
    details: {},
    loading: false,
    detailError: null,
    success: false
}

const userDetailsReducer = (state = initialDetailState, action: Action) => {
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

const initialReviewState = {
    loading: false,
    success: false,
    error: null
}

const userReviewReducer = (state = initialReviewState, action: Action) => {
    switch(action.type) {
        case CREATE_REVIEW_PENDING:
            return {
                ...state,
                loading: true
            }
        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case CREATE_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_REVIEW_RESET: 
            return {
                loading: false,
                success: false,
                error: null
            }
        default:
            return state;
    }
}

const deleteReviewInitalState = {
    loading: false,
    error: null,
    success: false
}

const deleteReviewReducer = (state = deleteReviewInitalState, action: Action) => {
    switch(action.type) {
        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_REVIEW_RESET:
            return {
                loading: false,
                error: null,
                success: false  
            }
        default: 
            return state;
    }
}

interface UserStatus {
    name: string,
    email: string,
    isAdmin: boolean,
    wishList: singleWishListItem[],
    cartList: singleCartItem[],
    agreeAndDisAgree: agreeAndDisAgree[]
}

interface UserStatusState {
    userStatus: UserStatus | null,
    loading: boolean,
    error: string | null
}

const currentUserStatusState: UserStatusState = {
    userStatus: null,
    loading: false,
    error: null
}

const currentUserStatusReducer = (state = currentUserStatusState, action: Action) => {
    switch(action.type) {
        case GET_USER_CURRENT_STATUS_PENDING: 
            return {
                ...state,
                loading: true
            }
        case GET_USER_CURRENT_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                userStatus: action.payload
            }
        case GET_USER_CURRENT_STATUS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_USER_CURRENT_STATUS_RESET:
            return {
                userStatus: null,
                loading: false,
                error: null
            }
        default: 
            return state;
    }
}

export {
    userReducer,
    userDetailsReducer,
    userReviewReducer,
    deleteReviewReducer,
    currentUserStatusReducer
}