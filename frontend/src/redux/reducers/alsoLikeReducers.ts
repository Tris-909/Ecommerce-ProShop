import {
    GET_ALSOLIKE_PRODUCTS_PENDING,
    GET_ALSOLIKE_PRODUCTS_SUCCESS,
    GET_ALSOLIKE_PRODUCTS_FAIL,
    GET_ALSOLIKE_RESET
} from '../actions/actionTypes';
import { Action } from './interfaces';

interface singleAlsoLikeProduct {
    _id: string,
    rating: number,
    name: string,
    price: number,
    onSale: number,
    image: string,
    numReviews: number
}

interface alsoLikeInitalState {
    alsoLikeItems: singleAlsoLikeProduct[],
    loading: boolean,
    success: boolean,
    error: string | null
}

const alsoLikeInitialState: alsoLikeInitalState = {
    alsoLikeItems: [],
    loading: false,
    success: false,
    error: null
}

export const alsoLikeReducer = (state = alsoLikeInitialState, action: Action) => {
    switch(action.type) {
        case GET_ALSOLIKE_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALSOLIKE_PRODUCTS_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    alsoLikeItems: [...action.payload],
                    success: true
                }
            }
            break;
        case GET_ALSOLIKE_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            }          
        
        case GET_ALSOLIKE_RESET:
            return {
                alsoLikeItems: [],
                loading: false,
                success: false,
                error: null
            }
        default:
            return state;
    }
}