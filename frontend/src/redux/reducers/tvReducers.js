import {
    GET_TOP_TVS_REQUEST,
    GET_TOP_TVS_SUCCESS,
    GET_TOP_TVS_FAIL,

    GET_ALL_TVS_REQUEST,
    GET_ALL_TVS_SUCCESS,
    GET_ALL_TVS_FAIL
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

const all_TVs_Initial_State = {
    tvs: [],
    loading: false,
    error: null
}

export const getALLTVs = (state = all_TVs_Initial_State, action) => {
    switch(action.type) {
        case GET_ALL_TVS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_TVS_SUCCESS:
            return {
                ...state,
                loading: false,
                tvs: [...action.payload.AllTVs],
                page: action.payload.page,
                pages: action.payload.pages
            }
        case GET_ALL_TVS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}