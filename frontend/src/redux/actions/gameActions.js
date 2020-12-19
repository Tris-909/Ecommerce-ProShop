import {
    GET_TOP_GAMES_REQUEST,
    GET_TOP_GAMES_SUCCESS,
    GET_TOP_GAMES_FAIL
} from './actionTypes';
import axios from 'axios';

export const getTopGames = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TOP_GAMES_REQUEST
        });

        const { data } = await axios.get('/api/products/games/toptier');

        dispatch({
            type: GET_TOP_GAMES_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_TOP_GAMES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}