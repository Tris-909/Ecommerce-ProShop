import {
    GET_TOP_LAPTOPS_REQUEST,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_LAPTOPS_FAIL,
} from '../actions/actionTypes';
import { Action } from './interfaces';

interface singleTopLaptop {
    _id: string,
    image: string,
    name: string,
    rating: number,
    numReviews: number,
    price: number 
}

interface topLaptop {
    topLaptops: singleTopLaptop[],
    loading: boolean,
    error: string | null
}

const topLaptopInitialState: topLaptop = {
    topLaptops: [],
    loading: false,
    error: null
}

export const topLaptopReducer = (state = topLaptopInitialState, action: Action) => {
    switch(action.type) {
        case GET_TOP_LAPTOPS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_LAPTOPS_SUCCESS:
            return {
                ...state,
                loading: false,
                topLaptops: action.payload
            }
        case GET_TOP_LAPTOPS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

