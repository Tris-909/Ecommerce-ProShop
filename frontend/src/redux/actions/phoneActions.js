import {
    GET_TOP_PHONES_REQUEST,
    GET_TOP_PHONES_SUCCESS,
    GET_TOP_PHONES_FAIL,
} from './actionTypes';
import axios from 'axios';

export const getTopPhones = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_PHONES_REQUEST
        });

        const { data } = await axios.get('/api/products/phones/toptier');

        dispatch({
            type: GET_TOP_PHONES_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_TOP_PHONES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}