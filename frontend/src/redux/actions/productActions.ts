import {
    GET_ALL_PRODUCTS_PENDING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,

    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,

    GET_CAROUSEL_PRODUCTS_REQUEST,
    GET_CAROUSEL_PRODUCTS_SUCCESS,
    GET_CAROUSEL_PRODUCTS_FAIL,

    GET_SET_REVIEWS_PENDING,
    GET_SET_REVIEWS_SUCCESS,
    GET_SET_REVIEWS_FAIL,

    GET_LIST_PRODUCTS_PENDING,
    GET_LIST_PRODUCTS_SUCCESS,
    GET_LIST_PRODUCTS_FAIL
} from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';
import { SingleProduct } from '../reducers/Products/SingleProduct/singleProductInterface';
import { SingleReview } from '../reducers/Products/ReviewProduct/Review';

interface SingleProductInProductList {
    _id: string,
    name: string,
    price: number,
    image: string,
    category: string,
    brand: string,
    numReviews: string,
    rating: number
}

interface GetProductListResult {
    products: SingleProductInProductList[],
    page: number,
    pages: number
}

export const getProductsList = (keyword = '', pageNumber = '') => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_PENDING });
        
        const { data } = await axios.get<GetProductListResult>(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
        
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch(error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: {error: error.response && error.response.data.message ? error.response.data : null} 
        });
    }
}

export const getSingleProduct = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_PRODUCT_PENDING });
        const { data } = await axios.get<SingleProduct>(`/api/products/${id}`);

        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

export const getCarouselProducts = () => async(dispatch: Dispatch) => {
    try {
        dispatch({
            type: GET_CAROUSEL_PRODUCTS_REQUEST
        });

        const { data } = await axios.get<SingleProductInProductList[]>('/api/products/carousel');

        dispatch({
            type: GET_CAROUSEL_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_CAROUSEL_PRODUCTS_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : null
        });
    }
}

interface GetReviewResult {
    setOfReviews: SingleReview[],
    page: number,
    pages: number
}

export const getSetOfReviewsOfCurrentProductBasedOnPageNumber = (productId: string, pageReviewNumber: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GET_SET_REVIEWS_PENDING
        });
        const {data} = await axios.get<GetReviewResult>(`/api/products/getreviews/${productId}?pageReviewNumber=${pageReviewNumber}`);
        
        dispatch({
            type: GET_SET_REVIEWS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_SET_REVIEWS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : null
        });
    }
}

interface filteredBrandsSingleItem {
    isChecked: boolean,
    value: string
}

export const getListOfProductsBasedOnCategory = (
    category: string, 
    page: string, 
    lowPrice: number, 
    highPrice: number, 
    filteredBrands: filteredBrandsSingleItem[],
    laptopScreenSizes: filteredBrandsSingleItem[],
    laptopRAMs: filteredBrandsSingleItem[],
    laptopProcessorTypes: filteredBrandsSingleItem[],
    tvScreenSizes: filteredBrandsSingleItem[],
    tvScreenSolution: filteredBrandsSingleItem[],
    phoneCoulours: filteredBrandsSingleItem[]) => async(dispatch: Dispatch) => {
    
    try {
        dispatch({
            type: GET_LIST_PRODUCTS_PENDING
        });

        let BrandsArray = [];
        for (let i = 0; i < filteredBrands.length ; i++) {
            if (filteredBrands[i].isChecked) {
                BrandsArray.push(filteredBrands[i].value);
            }
        }
        let brandArrayQuery = `&brands=`;
        for (let i = 0; i < BrandsArray.length; i++) {
            brandArrayQuery += `${BrandsArray[i]},`;
        }

        if (category === 'laptops') {
            let ScreenSizesArray = [];
            for (let i = 0; i < laptopScreenSizes.length; i++) {
                if (laptopScreenSizes[i].isChecked) {
                    ScreenSizesArray.push(laptopScreenSizes[i].value);
                }
            }
            let screenSizesQuery = `&screenSizes=`;
            for (let i = 0; i < ScreenSizesArray.length; i++) {
                screenSizesQuery += `${ScreenSizesArray[i]},`;
            }
    
            let RAMSizeArray = [];
            for (let i = 0; i < laptopRAMs.length; i++) {
                if (laptopRAMs[i].isChecked) {
                    RAMSizeArray.push(laptopRAMs[i].value);
                }
            }
            let RAMSizeQuery = `&ramSize=`;
            for (let i = 0; i < RAMSizeArray.length; i++) {
                RAMSizeQuery += `${RAMSizeArray[i]},`;
            }
    
            let ProcessorTypeArray = [];
            for (let i = 0; i < laptopProcessorTypes.length; i++) {
                if (laptopProcessorTypes[i].isChecked) {
                    ProcessorTypeArray.push(laptopProcessorTypes[i].value);
                }
            }
            let ProcessorTypeQuery = `&processorType=`;
            for (let i = 0; i < ProcessorTypeArray.length; i++) {
                ProcessorTypeQuery += `${ProcessorTypeArray[i]},`;
            }
            
            const { data } = await axios.get(`/api/products/list/${category}?page=${page}&lowPrice=${Number(lowPrice)}&highPrice=${Number(highPrice)}${brandArrayQuery}${screenSizesQuery}${RAMSizeQuery}${ProcessorTypeQuery}`);        
            dispatch({
                type: GET_LIST_PRODUCTS_SUCCESS,
                payload: data
            });
        } else if (category === 'tvs') {
            let TVScreenSizesArray = [];
            for (let i = 0; i < tvScreenSizes.length; i++) {
                if (tvScreenSizes[i].isChecked) {
                    TVScreenSizesArray.push(tvScreenSizes[i].value);
                }
            }
            let TVscreenSizesQuery = `&tvScreenSize=`;
            for (let i = 0; i < TVScreenSizesArray.length; i++) {
                TVscreenSizesQuery += `${TVScreenSizesArray[i]},`;
            }

            let TVScreenSolutionArray = [];
            for (let i = 0; i < tvScreenSolution.length; i++) {
                if (tvScreenSolution[i].isChecked) {
                    TVScreenSolutionArray.push(tvScreenSolution[i].value);
                }
            }
            let TVscreenSolutionQuery = `&tvScreenSolution=`;
            for (let i = 0; i < TVScreenSolutionArray.length; i++) {
                TVscreenSolutionQuery += `${TVScreenSolutionArray[i]},`;
            }
    
            const { data: TVData } = await axios.get(`/api/products/list/${category}?page=${page}&lowPrice=${Number(lowPrice)}&highPrice=${Number(highPrice)}${brandArrayQuery}${TVscreenSizesQuery}${TVscreenSolutionQuery}`);        
            
            console.log(TVData);
            
            dispatch({
                type: GET_LIST_PRODUCTS_SUCCESS,
                payload: TVData
            });
        } else if (category === 'phones') {
            let PhoneColourArray = [];
            for (let i = 0; i < phoneCoulours.length; i++) {
                if (phoneCoulours[i].isChecked) {
                    PhoneColourArray.push(phoneCoulours[i].value);
                }
            }
            let PhoneColourQuery = `&phoneColour=`;
            for (let i = 0; i < PhoneColourArray.length; i++) {
                PhoneColourQuery += `${PhoneColourArray[i]},`;
            }
    
            const { data: PhoneData } = await axios.get(`/api/products/list/${category}?page=${page}&lowPrice=${Number(lowPrice)}&highPrice=${Number(highPrice)}${brandArrayQuery}${PhoneColourQuery}`);        
            
            console.log(PhoneData);
            
            dispatch({
                type: GET_LIST_PRODUCTS_SUCCESS,
                payload: PhoneData
            });
        } else {
            console.log(`/api/products/list/${category}?page=${page}&lowPrice=${Number(lowPrice)}&highPrice=${Number(highPrice)}${brandArrayQuery}`);
            const { data: otherData } = await axios.get(`/api/products/list/${category}?page=${page}&lowPrice=${Number(lowPrice)}&highPrice=${Number(highPrice)}${brandArrayQuery}`);        
            console.log(otherData);
            dispatch({
                type: GET_LIST_PRODUCTS_SUCCESS,
                payload: otherData
            });
        }
    } catch(error) {
        dispatch({
            type: GET_LIST_PRODUCTS_FAIL,
            payload: { error: error.response && error.response.data.message ? error.response.data.message : null }
        })
    }
}
