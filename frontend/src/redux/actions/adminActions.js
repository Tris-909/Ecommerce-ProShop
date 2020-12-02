import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,

    DELETE_USER_AS_ADMIN_REQUEST,
    DELETE_USER_AS_ADMIN_SUCCESS,
    DELETE_USER_AS_ADMIN_FAIL,

    GET_USER_AS_ADMIN_REQUEST,
    GET_USER_AS_ADMIN_SUCCESS,
    GET_USER_AS_ADMIN_FAIL,

    UPDATE_USER_AS_ADMIN_REQUEST,
    UPDATE_USER_AS_ADMIN_SUCCESS,
    UPDATE_USER_AS_ADMIN_FAIL,

    DELETE_PRODUCT_AS_ADMIN_REQUEST,
    DELETE_PRODUCT_AS_ADMIN_SUCCESS,
    DELETE_PRODUCT_AS_ADMIN_FAIL,

    CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST,
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS,
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL,

    UPDATE_PRODUCT_AS_ADMIN_REQUEST,
    UPDATE_PRODUCT_AS_ADMIN_SUCCESS,
    UPDATE_PRODUCT_AS_ADMIN_FAIL
} from './actionTypes';
import axios from 'axios';

export const getAllUsers = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_ALL_USERS
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'applicaton/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get('/api/users', config);

        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ALL_USERS_FAIL,
            error:  error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteUserAsAdmin = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_USER_AS_ADMIN_REQUEST
        });

        const { user: {user} } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}` 
            }
        }
        
        await axios.delete(`/api/users/delete/${id}`, config);

        dispatch({
            type: DELETE_USER_AS_ADMIN_SUCCESS,
            payload: 'User has been deleted successfully.'
        });
    } catch (error) {
        dispatch({ 
            type: DELETE_USER_AS_ADMIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const loadUserInfo = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_USER_AS_ADMIN_REQUEST
        });

        const { user: {user}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get(`/api/users/${id}`, config);

        dispatch({
            type: GET_USER_AS_ADMIN_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_USER_AS_ADMIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUserInfo = (name, email, isAdmin, id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_AS_ADMIN_REQUEST
        });

        const { user: {user}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.put(`/api/users/${id}`, { name, email, isAdmin } ,config);

        dispatch({
            type: UPDATE_USER_AS_ADMIN_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: UPDATE_USER_AS_ADMIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteProductAsAdmin = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_AS_ADMIN_REQUEST
        });

        const {user: {user}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.delete(`/api/products/${id}`, config);

        dispatch({
            type: DELETE_PRODUCT_AS_ADMIN_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: DELETE_PRODUCT_AS_ADMIN_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const createProductAsAdmin = () => async(dispatch, getState) => {
    try {
        dispatch({ type: CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST });

        const {user: {user}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const {data} = await axios.post(`/api/products`, {}, config);

        dispatch({
            type: CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const updateProductAsAdmin = (name, price, image, brand, category, countInStock, description, id) => async(dispatch, getState) => {
    try {
        dispatch({ type:  UPDATE_PRODUCT_AS_ADMIN_REQUEST });

        const {user: {user}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.put(`/api/products/${id}`, {
            name, 
            price,
            image,
            brand,
            category,
            countInStock, 
            description
        }, config);

        dispatch({
            type: UPDATE_PRODUCT_AS_ADMIN_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: UPDATE_PRODUCT_AS_ADMIN_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}