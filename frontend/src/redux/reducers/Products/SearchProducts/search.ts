import {
    GET_ALL_PRODUCTS_PENDING, 
    GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_FAIL
} from '../../../actions/actionTypes';
import { singleProduct } from '../../interfaces';

interface ProductListState {
    products: singleProduct[],
    pages?: number,
    page?: number,
    loading: boolean,
    error?: null | string
}

interface SearchResult {
    products: singleProduct[],
    pages: number,
    page: number,
    error?: string
}

interface SearchAction {
    type: string,
    payload: SearchResult
}

//TODO: Search bar products list
const initialState: ProductListState = {
    products: [],
    loading: false,
    error: null
}

export const searchProductsListReducer = (state = initialState, action: SearchAction) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page
            }
        case GET_ALL_PRODUCTS_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
