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
    UPDATE_USER_DETAIL_RESET
} from './actionTypes';
import axios from 'axios';

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_PENDING
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const user = await axios.post(`/api/users/login`, {email, password}, config);
        
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user.data
        });

        localStorage.setItem('userInfo', JSON.stringify(user.data));
    } catch(error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const logOut = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: LOGOUT_USER
    });
} 

export const clearError = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERROR_SUBMIT
    })
}

export const createUser = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_USER_PENDING
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const user = await axios.post('api/users', { name, email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(user.data));

        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: user.data
        });

    } catch(error) {
        dispatch({
            type: CREATE_USER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_USER_DETAILS_PENDING
        });

        const { user: { user } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const { data } = await axios.get(`/api/users/${id}`, config);

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

export const updateUserDetails = (userSubmitted) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_DETAIL_PENDING
        });

        const { user: {user} } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }

        const { data } = await axios.put(`/api/users/profile`, userSubmitted, config);
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