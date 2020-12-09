import {
    GET_ALL_PRODUCTS_PENDING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL
} from './actionTypes';
import axios from 'axios';

export const getProductsList = (keyword = '', pageNumber = '') => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_PENDING });
        
        const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
        
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch(error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        });
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_PRODUCT_PENDING });
        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

