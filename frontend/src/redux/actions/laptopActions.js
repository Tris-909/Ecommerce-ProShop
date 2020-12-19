import {
    GET_TOP_LAPTOPS_REQUEST,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_LAPTOPS_FAIL,
} from './actionTypes';
import axios from 'axios';

export const getTopTiersLaptop = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_LAPTOPS_REQUEST
        });

        const { data } = await axios.get('/api/products/laptops/toptier');
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
