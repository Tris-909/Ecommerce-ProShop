import {
    GET_STORE_INFO_PENDING,
    GET_STORE_INFO_SUCESS,
    GET_STORE_INFO_FAIL
} from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';
import { SingleStoreInfo } from './actionInterfaces';

const getStoreInfo = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GET_STORE_INFO_PENDING
        });

        const { data } = await axios.get<SingleStoreInfo[]>('/api/storefinder');

        dispatch({
            type: GET_STORE_INFO_SUCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_STORE_INFO_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        });
    }
}

export {
    getStoreInfo
}