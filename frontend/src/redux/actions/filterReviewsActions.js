import {
    GET_REVIEWS_HTLR_PENDING,
    GET_REVIEWS_HTLR_SUCCESS,
    GET_REVIEWS_HTLR_FAIL,

    GET_REVIEWS_LTHR_PENDING,
    GET_REVIEWS_LTHR_SUCCESS,
    GET_REVIEWS_LTHR_FAIL,

    GET_REVIEWS_HTLA_PENDING,
    GET_REVIEWS_HTLA_SUCCESS,
    GET_REVIEWS_HTLA_FAIL,

    GET_REVIEWS_LTHA_PENDING,
    GET_REVIEWS_LTHA_SUCCESS,
    GET_REVIEWS_LTHA_FAIL,

    GET_REVIEWS_HTLDA_PENDING,
    GET_REVIEWS_HTLDA_SUCCESS,
    GET_REVIEWS_HTLDA_FAIL,

    GET_REVIEWS_LTHDA_PENDING,
    GET_REVIEWS_LTHDA_SUCCESS,
    GET_REVIEWS_LTHDA_FAIL
} from './actionTypes';
import axios from 'axios';

const getReviewsHTLR = (productId, pageReviewNumber) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_REVIEWS_HTLR_PENDING
        });
        
        const {data} = await axios.get(`/api/products/getreviews/HtLR/${productId}?pageReviewNumber=${pageReviewNumber}`);
        dispatch({
            type: GET_REVIEWS_HTLR_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_REVIEWS_HTLR_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            } 
        })
    }
}

const getReviewsLTHR = (productId, pageReviewNumber) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_REVIEWS_LTHR_PENDING
        });
        
        const {data} = await axios.get(`/api/products/getreviews/LtHR/${productId}?pageReviewNumber=${pageReviewNumber}`);
        dispatch({
            type: GET_REVIEWS_LTHR_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_REVIEWS_LTHR_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            } 
        })
    }
}

const getReviewsHTLA = (productId, pageReviewNumber) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_REVIEWS_HTLA_PENDING
        });
        
        const {data} = await axios.get(`/api/products/getreviews/HtLA/${productId}?pageReviewNumber=${pageReviewNumber}`);
        dispatch({
            type: GET_REVIEWS_HTLA_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_REVIEWS_HTLA_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            } 
        })
    }
}

const getReviewsLTHA = (productId, pageReviewNumber) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_REVIEWS_LTHA_PENDING
        });
        
        const {data} = await axios.get(`/api/products/getreviews/LtHA/${productId}?pageReviewNumber=${pageReviewNumber}`);
        dispatch({
            type: GET_REVIEWS_LTHA_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_REVIEWS_LTHA_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            } 
        })
    }
}

const getReviewsHTLDA = (productId, pageReviewNumber) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_REVIEWS_HTLDA_PENDING
        });
        
        const {data} = await axios.get(`/api/products/getreviews/HtLDA/${productId}?pageReviewNumber=${pageReviewNumber}`);
        dispatch({
            type: GET_REVIEWS_HTLDA_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_REVIEWS_HTLDA_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            } 
        })
    }
}

const getReviewsLTHDA = (productId, pageReviewNumber) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_REVIEWS_LTHDA_PENDING
        });
        
        const {data} = await axios.get(`/api/products/getreviews/LtHDA/${productId}?pageReviewNumber=${pageReviewNumber}`);
        dispatch({
            type: GET_REVIEWS_LTHDA_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_REVIEWS_LTHDA_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            } 
        })
    }
}

export {
    getReviewsHTLR,
    getReviewsLTHR,
    getReviewsHTLA,
    getReviewsLTHA,
    getReviewsHTLDA,
    getReviewsLTHDA
}