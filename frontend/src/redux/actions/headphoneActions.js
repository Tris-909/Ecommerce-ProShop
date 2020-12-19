import {
    GET_TOP_HEADPHONE_REQUEST,
    GET_TOP_HEADPHONE_SUCCESS,
    GET_TOP_HEADPHONE_FAIL
} from './actionTypes';
import axios from 'axios';

export const getTopHeadphone = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_HEADPHONE_REQUEST
        });

        const { data } = await axios.get('/api/products/headphones/toptier');

        dispatch({
            type: GET_TOP_HEADPHONE_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_TOP_HEADPHONE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}
