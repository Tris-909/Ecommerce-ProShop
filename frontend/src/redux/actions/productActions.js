import {
    GET_ALL_PRODUCTS_PENDING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL
} from './actionTypes';
import axios from 'axios';

export const getProductsList = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_PENDING });
        
        const { data } = await axios.get('/api/products');
        
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch(error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            error: error.response.payload.data
        });
    }
}

