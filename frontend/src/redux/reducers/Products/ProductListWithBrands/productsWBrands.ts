import {
    GET_LIST_PRODUCTS_PENDING,
    GET_LIST_PRODUCTS_SUCCESS,
    GET_LIST_PRODUCTS_FAIL,
    GET_LIST_PRODUCTS_RESET
} from '../../../actions/actionTypes';
import { singleProduct } from '../../interfaces';

interface ProductListAndBrandsState {
    productsList: singleProduct[],
    brands: string[],
    currentPickedBrands: string[],
    page: number | null,
    pages: number | null,
    loading: boolean,
    error: string | null
}

const productListBasedOnCategory: ProductListAndBrandsState = {
    productsList: [],
    brands: [],
    currentPickedBrands: [],
    pages: null,
    page: null,
    loading: false,
    error: null
}

interface CurrentAction {
    type: string,
    payload: {
        listItems?: singleProduct[],
        brands?: string[],
        currentPickedBrands?: string[],
        page?: number,
        pages?: number,
        error? : string
    }
}

export const getListOfProductsBasedOnCategory = (state = productListBasedOnCategory, action: CurrentAction) => {
    switch(action.type) {
        case GET_LIST_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_LIST_PRODUCTS_SUCCESS:
            if ( action.payload.listItems instanceof Array &&
                 action.payload.brands instanceof Array &&
                 action.payload.currentPickedBrands instanceof Array) {
                    return {
                        ...state,
                        loading: false,
                        productsList: [...action.payload.listItems],
                        brands: [...action.payload.brands],
                        currentPickedBrands: [...action.payload.currentPickedBrands],
                        page: action.payload.page,
                        pages: action.payload.pages
                    }
                }
                break;
        case GET_LIST_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case GET_LIST_PRODUCTS_RESET:
            return {
                productsList: [],
                page: null,
                pages: null,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}