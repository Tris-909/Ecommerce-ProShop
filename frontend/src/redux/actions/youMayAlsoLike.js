import {
    GET_ALSOLIKE_PRODUCTS_PENDING,
    GET_ALSOLIKE_PRODUCTS_SUCCESS,
    GET_ALSOLIKE_PRODUCTS_FAIL,
} from './actionTypes';
import axios from 'axios';

const getAlsoLikeProducts = (category) => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALSOLIKE_PRODUCTS_PENDING
        });

        const { data } = await axios.get('/api/products/alsolike', {
            params: {
                category: category
            }
        });

        dispatch({
            type: GET_ALSOLIKE_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ALSOLIKE_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        });
    }
}

export {
    getAlsoLikeProducts
}