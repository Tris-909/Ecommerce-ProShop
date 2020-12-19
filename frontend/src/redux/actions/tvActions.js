import {
    GET_TOP_TVS_REQUEST,
    GET_TOP_TVS_SUCCESS,
    GET_TOP_TVS_FAIL,

    GET_ALL_TVS_REQUEST,
    GET_ALL_TVS_SUCCESS,
    GET_ALL_TVS_FAIL
} from './actionTypes';
import axios from 'axios';

export const getTopTVs = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_TVS_REQUEST
        });

        const {data} = await axios.get('/api/products/tvs/toptier');

        dispatch({
            type: GET_TOP_TVS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_TOP_TVS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

export const getAllTVs = (nextPage) => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALL_TVS_REQUEST
        });

        const { data } = await axios.get(`/api/products/tvs?page=${nextPage}`);

        dispatch({
            type: GET_ALL_TVS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ALL_TVS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        });
    }
}