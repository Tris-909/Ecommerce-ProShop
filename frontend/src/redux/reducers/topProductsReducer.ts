import {
    GET_TOP_PRODUCTS_REQUEST,

    GET_TOP_PHONES_SUCCESS,
    GET_TOP_LAPTOPS_SUCCESS,
    GET_TOP_TVS_SUCCESS,
    GET_TOP_HEADPHONE_SUCCESS,
    GET_TOP_GAMES_SUCCESS,

    GET_TOP_PRODUCTS_WITH_IMAGES_LAPTOPS_SUCCESS,
    GET_TOP_PRODUCTS_WITH_IMAGES_TVS_SUCCESS,
    GET_TOP_PRODUCTS_WITH_IMAGES_PHONE_SUCCESS,
    GET_TOP_PRODUCTS_WITH_IMAGES_HEADPHONE_SUCCESS,
    GET_TOP_PRODUCTS_WITH_IMAGES_GAME_SUCCESS,

    GET_TOP_PRODUCTS_FAIL
} from '../actions/actionTypes';
import { Action } from './interfaces';

interface topProduct {
    rating: number,
    numReviews: number,
    price: number,
    _id: string,
    name: string,
    image: string,
    category: string,
    onSale?: number,
    newProduct?: boolean,
    preOrder?: boolean
}

interface topProductWithImages {
    _id: string,
    subImages: string[],
    name: string,
    price: number,
    category: string
}

interface initialProducts {
    topPhones: topProduct[],
    topPhonesWithImages: topProductWithImages[],

    topLaptops: topProduct[],
    topLaptopsWithImages: topProductWithImages[],

    topTVs: topProduct[],
    topTVsWithImages: topProductWithImages[],

    topHeadphones: topProduct[],
    topHeadphonesWithImages: topProductWithImages[],

    topGames: topProduct[],
    topGamesWithImages: topProductWithImages[],

    loading: boolean,
    error: null | string
}

const initialTopProducts: initialProducts = {
    topPhones: [],
    topPhonesWithImages: [],

    topLaptops: [],
    topLaptopsWithImages: [],

    topTVs: [],
    topTVsWithImages: [],

    topHeadphones: [],
    topHeadphonesWithImages: [],

    topGames: [],
    topGamesWithImages: [],

    loading: false,
    error: null
}

export const topProductsReducer = (state = initialTopProducts, action:Action) => {
    switch(action.type) {
        case GET_TOP_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_PHONES_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topPhonesWithImages: [...action.payload]
                }
            }
            break;
        case GET_TOP_PRODUCTS_WITH_IMAGES_PHONE_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topPhones: [...action.payload]
                }
            }
            break;
        case GET_TOP_LAPTOPS_SUCCESS: 
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topLaptops: [...action.payload]
                }         
            }
            break;
        case GET_TOP_PRODUCTS_WITH_IMAGES_LAPTOPS_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topLaptopsWithImages: [...action.payload]
                }
            }
            break;
        case GET_TOP_TVS_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topTVs: [...action.payload] 
                }
            }
            break;
        case GET_TOP_PRODUCTS_WITH_IMAGES_TVS_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topTVsWithImages: [...action.payload]
                }
            }
            break;
        case GET_TOP_HEADPHONE_SUCCESS: 
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topHeadphones: [...action.payload]
                }
            }
            break;
        case GET_TOP_PRODUCTS_WITH_IMAGES_HEADPHONE_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topHeadphonesWithImages: [...action.payload]
                }
            }
            break;
        case GET_TOP_GAMES_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topGames: [...action.payload]
                }
            }
            break;
        case GET_TOP_PRODUCTS_WITH_IMAGES_GAME_SUCCESS:
            if (action.payload instanceof Array) {
                return {
                    ...state,
                    loading: false,
                    topGamesWithImages: [...action.payload]
                }
            }
            break;
        case GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}