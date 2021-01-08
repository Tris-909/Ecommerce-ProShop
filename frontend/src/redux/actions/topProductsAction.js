import {
    GET_TOP_PRODUCTS_REQUEST,

    GET_TOP_PHONES_SUCCESS,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_TVS_SUCCESS,
    GET_TOP_HEADPHONE_SUCCESS,
    GET_TOP_GAMES_SUCCESS,

    GET_TOP_PRODUCTS_FAIL
} from './actionTypes';
import axios from 'axios';

export const getTopProductsForHomeScreen = (category) => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_PRODUCTS_REQUEST
        });
        console.log(category);
        const { data } = await axios.get('/api/products/toptier', {
            params: {
                category: category
            }
        });

        switch(data[0].category) {
            case 'laptops':
                dispatch({
                    type: GET_TOP_LAPTOPS_SUCCESS,
                    payload: data
                });
                break;
            case 'tvs':
                dispatch({
                    type: GET_TOP_TVS_SUCCESS,
                    payload: data
                });
                break;
            case 'phones':
                dispatch({
                    type: GET_TOP_PHONES_SUCCESS,
                    payload: data
                });
                break;
            case 'headphone':
                dispatch({
                    type: GET_TOP_HEADPHONE_SUCCESS,
                    payload: data
                });
                break;
            case 'game':
                dispatch({
                    type: GET_TOP_GAMES_SUCCESS,
                    payload: data
                });
                break;
            default:
                return;
        }

    } catch(error) {
        dispatch({
            type: GET_TOP_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        });
    }
}