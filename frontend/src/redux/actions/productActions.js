import {
    GET_ALL_PRODUCTS_PENDING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,

    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,

    GET_CAROUSEL_PRODUCTS_REQUEST,
    GET_CAROUSEL_PRODUCTS_SUCCESS,
    GET_CAROUSEL_PRODUCTS_FAIL,

    GET_SET_REVIEWS_PENDING,
    GET_SET_REVIEWS_SUCCESS,
    GET_SET_REVIEWS_FAIL,

    GET_LIST_PRODUCTS_PENDING,
    GET_LIST_PRODUCTS_SUCCESS,
    GET_LIST_PRODUCTS_FAIL
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

export const getCarouselProducts = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_CAROUSEL_PRODUCTS_REQUEST
        });

        const { data } = await axios.get('/api/products/carousel');

        dispatch({
            type: GET_CAROUSEL_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_CAROUSEL_PRODUCTS_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : null
        });
    }
}

export const getSetOfReviewsOfCurrentProductBasedOnPageNumber = (productId, pageReviewNumber) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SET_REVIEWS_PENDING
        });
        const {data} = await axios.get(`/api/products/getreviews/${productId}?pageReviewNumber=${pageReviewNumber}`);
        
        dispatch({
            type: GET_SET_REVIEWS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_SET_REVIEWS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : null
        });
    }
}

export const getListOfProductsBasedOnCategory = (category, page, lowPrice, highPrice) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_LIST_PRODUCTS_PENDING
        });

        const { data } = await axios.get(`/api/products/list/${category}?page=${page}&lowPrice=${Number(lowPrice)}&highPrice=${Number(highPrice)}`);

        dispatch({
            type: GET_LIST_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_LIST_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : null
        })
    }
}
