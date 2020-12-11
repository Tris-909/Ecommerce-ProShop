import {
    GET_TOP_LAPTOPS_REQUEST,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_LAPTOPS_FAIL,

    GET_ALL_LAPTOPS_REQUEST,
    GET_ALL_LAPTOPS_SUCCESS,
    GET_ALL_LAPTOPS_FAIL,

    GET_A_LAPTOP_REQUEST,
    GET_A_LAPTOP_SUCCESS,
    GET_A_LAPTOP_FAIL
} from './actionTypes';
import axios from 'axios';

export const getTopTiersLaptop = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_LAPTOPS_REQUEST
        });

        const { data } = await axios.get('/api/laptops/toptiers');
        dispatch({
            type: GET_TOP_LAPTOPS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_TOP_LAPTOPS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getAllLaptops = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALL_LAPTOPS_REQUEST
        });

        const { data } = await axios.get('/api/laptops');

        dispatch({
            type: GET_ALL_LAPTOPS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ALL_LAPTOPS_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getSingleLaptopBasedOnId = (id) => async(dispatch) => {
    try {
        dispatch({
            type: GET_A_LAPTOP_REQUEST
        });

        const { data } = await axios.get(`/api/laptops/${id}`);

        dispatch({
            type: GET_A_LAPTOP_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_A_LAPTOP_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}