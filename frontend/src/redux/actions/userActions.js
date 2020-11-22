import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGOUT_USER,
    CLEAR_ERROR_SUBMIT
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