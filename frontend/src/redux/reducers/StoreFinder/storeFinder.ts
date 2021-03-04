import {
    GET_STORE_INFO_PENDING,
    GET_STORE_INFO_SUCESS,
    GET_STORE_INFO_FAIL
} from '../../actions/actionTypes';
import { Action } from '../interfaces';

interface singleStoreInfo {
    _id: string,
    name: string,
    address: string,
    phone: string,
    link: string,
    position: {
        lat: number,
        lng: number
    }
}

interface storeInfoInitialStateType {
    storeInfo: singleStoreInfo[],
    loading: boolean,
    success: boolean,
    error: string | null
}

const storeInfoInitialState: storeInfoInitialStateType = {
    storeInfo: [],
    loading: false,
    success: false,
    error: null
}

export const storeInfoReducer = ( state = storeInfoInitialState, action: Action ) => {
    switch(action.type) {
        case GET_STORE_INFO_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_STORE_INFO_SUCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    storeInfo: [...action.payload],
                    loading: false,
                    success: true
                }
            }
            break;
        case GET_STORE_INFO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}