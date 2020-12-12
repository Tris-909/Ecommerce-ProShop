import {
    GET_TOP_TVS_REQUEST,
    GET_TOP_TVS_SUCCESS,
    GET_TOP_TVS_FAIL
} from '../actions/actionTypes';

const top_TV_Initial_State = {
    topTV: [],
    loading: false,
    error: null
}

export const getTopTVs = (state = top_TV_Initial_State, action) => {
    switch(action.type) {
        case GET_TOP_TVS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_TVS_SUCCESS:
            return {
                ...state,
                loading: false,
                topTV: [...action.payload]
            }
        case GET_TOP_TVS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}