import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,

    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,

    LOGOUT_USER,

    CLEAR_ERROR_SUBMIT,

    GET_USER_DETAILS_PENDING,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,

    UPDATE_USER_DETAIL_PENDING,
    UPDATE_USER_DETAIL_SUCCESS,
    UPDATE_USER_DETAIL_FAIL,
    UPDATE_USER_DETAIL_RESET,

    CREATE_REVIEW_PENDING,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAIL,

    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,

    SET_A_REVIEW_AS_AGREE_PENDING,
    SET_A_REVIEW_AS_AGREE_SUCCESS,
    SET_A_REVIEW_AS_AGREE_FAIL,

    SET_A_REVIEW_AS_DISAGREE_PENDING,
    SET_A_REVIEW_AS_DISAGREE_SUCCESS,
    SET_A_REVIEW_AS_DISAGREE_FAIL,

    GET_USER_CURRENT_STATUS_PENDING,
    GET_USER_CURRENT_STATUS_SUCCESS,
    GET_USER_CURRENT_STATUS_FAIL
} from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';
import { User } from './actionInterfaces';

export const loginUser = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_PENDING
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post<User>(`/api/users/login`, {email, password}, config);
        
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const logOut = () => (dispatch: Dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: LOGOUT_USER
    });
} 

export const clearError = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_ERROR_SUBMIT
    })
}

export const createUser = (name: string, email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: CREATE_USER_PENDING
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post<User>('api/users', { name, email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));

        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: data
        });

    } catch(error) {
        dispatch({
            type: CREATE_USER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

interface Details {
    _id?: string,
    name?: string,
    email?: string,
    isAdmin?: boolean
}

export const getUserDetails = () => async (dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: GET_USER_DETAILS_PENDING
        });

        const { user: { user } }:{ user: {user: User} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const { data } = await axios.get<Details>(`api/users/profile`, config);

        dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const updateUserDetails = (userSubmitted: {
    name: string,
    email: string,
    password: string
}) => async (dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: UPDATE_USER_DETAIL_PENDING
        });

        const { user: {user} }:{ user: {user: User} } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const { data } = await axios.put<Details>(`/api/users/profile`, userSubmitted, config);
        dispatch({
            type: UPDATE_USER_DETAIL_SUCCESS,
            payload: data
        });

        dispatch({
            type: UPDATE_USER_DETAIL_RESET,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: UPDATE_USER_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const createReview = (rating: number, comment: string, productID: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: CREATE_REVIEW_PENDING
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        await axios.post(`/api/products/createreview`, { rating, comment, productID }, config);

        dispatch({
            type: CREATE_REVIEW_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const deleteReview = (productID: string, reviewID: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: DELETE_REVIEW_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.delete(`/api/products/deletereview/${productID}/${reviewID}`, config);

        dispatch({
            type: DELETE_REVIEW_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const stickAReviewAsAgree = (productId: string, reviewID: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: SET_A_REVIEW_AS_AGREE_PENDING
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.post('/api/products/reviews/agree', {
            productId: productId,
            reviewId: reviewID
        }, config);

        dispatch({
            type: SET_A_REVIEW_AS_AGREE_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: SET_A_REVIEW_AS_AGREE_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const stickAReviewAsDisAgree = (productId: string, reviewID: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({
            type: SET_A_REVIEW_AS_DISAGREE_PENDING
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.post('/api/products/reviews/disagree', {
            productId: productId,
            reviewId: reviewID
        }, config);

        dispatch({
            type: SET_A_REVIEW_AS_DISAGREE_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: SET_A_REVIEW_AS_DISAGREE_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getCurrentUserStatus = () => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({ type: GET_USER_CURRENT_STATUS_PENDING });

        const {user: {user}}:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get<User>('/api/users/currentstatus', config);
        
        dispatch({
            type: GET_USER_CURRENT_STATUS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_USER_CURRENT_STATUS_FAIL,
            error:  error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}