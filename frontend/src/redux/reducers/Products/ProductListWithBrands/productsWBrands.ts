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
    
    screenSizes: string[],
    rams: string[],
    processorTypes: string[],

    tvScreenSize: string[],

    currentPickedBrands: string[],

    currentPickedLaptopScreenSizes: string[],
    currentPickedRam: string[],
    currentPickedProcessorType: string[],
    
    currentPickedTVScreenSize: string[],

    page: number | null,
    pages: number | null,
    
    loading: boolean,
    error: string | null
}

const productListBasedOnCategory: ProductListAndBrandsState = {
    productsList: [],
    brands: [],
    screenSizes: [],
    rams: [],
    processorTypes: [],
    tvScreenSize: [],
    currentPickedBrands: [],
    currentPickedLaptopScreenSizes: [],
    currentPickedRam: [],
    currentPickedProcessorType: [],
    currentPickedTVScreenSize: [],
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
        screenSizes?: string[],
        rams?: string[],
        processorTypes?: [],
        tvScreenSize?: [],
        currentPickedBrands?: string[],
        currentPickedLaptopScreenSizes?: string[],
        currentPickedRam?: string[],
        currentPickedProcessorType?: string[],
        currentPickedTVScreenSize?: string[],
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
            // console.log(action.payload.listItems instanceof Array);
            // console.log(action.payload.brands instanceof Array);
            // console.log(action.payload.rams instanceof Array);
            // console.log(action.payload.processorTypes instanceof Array);
            // console.log(action.payload.tvScreenSize instanceof Array);
            // console.log(action.payload.currentPickedBrands instanceof Array);
            // console.log(action.payload.currentPickedLaptopScreenSizes instanceof Array);
            // console.log(action.payload.screenSizes instanceof Array);
            // console.log(action.payload.currentPickedRam instanceof Array);
            // console.log(action.payload.currentPickedProcessorType instanceof Array);
            // console.log(action.payload.currentPickedTVScreenSize instanceof Array);

            if ( action.payload.listItems instanceof Array &&
                 action.payload.brands instanceof Array &&
                 action.payload.rams instanceof Array &&
                 action.payload.processorTypes instanceof Array &&
                 action.payload.tvScreenSize instanceof Array &&
                 action.payload.currentPickedBrands instanceof Array &&
                 action.payload.currentPickedLaptopScreenSizes instanceof  Array &&
                 action.payload.screenSizes instanceof  Array &&
                 action.payload.currentPickedRam instanceof Array &&
                 action.payload.currentPickedProcessorType instanceof Array &&
                 action.payload.currentPickedTVScreenSize instanceof Array) {
                     console.log(action.payload.listItems);
                    return {
                        ...state,
                        loading: false,

                        productsList: [...action.payload.listItems],

                        brands: [...action.payload.brands],
                        screenSizes: [...action.payload.screenSizes],
                        rams: [...action.payload.rams],
                        processorTypes: [...action.payload.processorTypes],
                        tvScreenSize: [...action.payload.tvScreenSize],
                        currentPickedBrands: [...action.payload.currentPickedBrands],
                        currentPickedLaptopScreenSizes: [...action.payload.currentPickedLaptopScreenSizes],
                        currentPickedRam: [...action.payload.currentPickedRam],
                        currentPickedProcessorType: [...action.payload.currentPickedProcessorType],
                        currentPickedTVScreenSize: [...action.payload.currentPickedTVScreenSize],
                        page: action.payload.page,
                        pages: action.payload.pages
                    }
                }
                console.log('SUCESS NOT RUN');
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