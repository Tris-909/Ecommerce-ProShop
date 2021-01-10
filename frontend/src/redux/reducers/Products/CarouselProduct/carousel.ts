import {
    GET_CAROUSEL_PRODUCTS_REQUEST,
    GET_CAROUSEL_PRODUCTS_SUCCESS,
    GET_CAROUSEL_PRODUCTS_FAIL
} from '../../../actions/actionTypes';
import { singleProduct, Action } from '../../interfaces';

interface CarouselProducts {
    carouselProducts: singleProduct[],
    loading: boolean,
    error: null | string
}

const carouselProductInitialState: CarouselProducts = {
    carouselProducts: [],
    loading: false,
    error: null
}

export const carouselProductReducer = (state = carouselProductInitialState, action: Action) => {
    switch(action.type) {
        case GET_CAROUSEL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CAROUSEL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                carouselProducts: action.payload
            }
        case GET_CAROUSEL_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
} 