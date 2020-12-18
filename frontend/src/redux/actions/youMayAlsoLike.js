import {
    GET_ALSOLIKE_LAPTOPS_PENDING,
    GET_ALSOLIKE_LAPTOPS_SUCCESS,
    GET_ALSOLIKE_LAPTOPS_FAIL,

    GET_ALSOLIKE_TVS_PENDING,
    GET_ALSOLIKE_TVS_SUCCESS,
    GET_ALSOLIKE_TVS_FAIL,

    GET_ALSOLIKE_PHONES_PENDING,
    GET_ALSOLIKE_PHONES_SUCCESS,
    GET_ALSOLIKE_PHONES_FAIL,

    GET_ALSOLIKE_HEADPHONES_PENDING,
    GET_ALSOLIKE_HEADPHONES_SUCCESS,
    GET_ALSOLIKE_HEADPHONES_FAIL,

    GET_ALSOLIKE_GAMES_PENDING,
    GET_ALSOLIKE_GAMES_SUCCESS,
    GET_ALSOLIKE_GAMES_FAIL
} from './actionTypes';
import axios from 'axios';

const getAlsoLikeLaptops = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALSOLIKE_LAPTOPS_PENDING
        });

        const { data } = await axios.get('/api/products/laptops/alsolike');

        dispatch({
            type: GET_ALSOLIKE_LAPTOPS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ALSOLIKE_LAPTOPS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

const getAlsoLikeTVs = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALSOLIKE_TVS_PENDING
        });

        const { data } = await axios.get('/api/products/tvs/alsolike');

        dispatch({
            type: GET_ALSOLIKE_TVS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ALSOLIKE_TVS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

const getAlsoLikePhones = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALSOLIKE_PHONES_PENDING
        });

        const { data } = await axios.get('/api/products/phones/alsolike');

        dispatch({
            type: GET_ALSOLIKE_PHONES_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ALSOLIKE_PHONES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

const getAlsoLikeHeadPhones = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALSOLIKE_HEADPHONES_PENDING
        });

        const { data } = await axios.get('/api/products/headphones/alsolike');

        dispatch({
            type: GET_ALSOLIKE_HEADPHONES_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ALSOLIKE_HEADPHONES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

const getAlsoLikeGames = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_ALSOLIKE_GAMES_PENDING
        });

        const { data } = await axios.get('/api/products/games/alsolike');

        dispatch({
            type: GET_ALSOLIKE_GAMES_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ALSOLIKE_GAMES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

export {
    getAlsoLikeLaptops,
    getAlsoLikeTVs,
    getAlsoLikePhones,
    getAlsoLikeHeadPhones,
    getAlsoLikeGames    
}