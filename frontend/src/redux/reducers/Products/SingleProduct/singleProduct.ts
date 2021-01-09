import {
    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL
} from '../../../actions/actionTypes';
import {SingleProduct} from './singleProductInterface';

interface SingleProductState {
    singleProduct: SingleProduct | null,
    loading: boolean,
    error: null | string
}

const initlaStateSingleProduct: SingleProductState = {
    singleProduct: null,
    loading: false,
    error: null
}

export const SingleProductReducer = (state = initlaStateSingleProduct, action: {
    type: string,
    payload: SingleProduct | string
}) => {
    switch(action.type) {
        case GET_SINGLE_PRODUCT_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                singleProduct: action.payload
            }
        case GET_SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}