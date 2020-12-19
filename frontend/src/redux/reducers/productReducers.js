import { 
    GET_ALL_PRODUCTS_PENDING, 
    GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_FAIL,

    GET_SINGLE_PRODUCT_PENDING,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,

    DELETE_PRODUCT_AS_ADMIN_REQUEST,
    DELETE_PRODUCT_AS_ADMIN_SUCCESS,
    DELETE_PRODUCT_AS_ADMIN_FAIL,
    DELETE_PRODUCT_AS_ADMIN_RESET,

    GET_CAROUSEL_PRODUCTS_REQUEST,
    GET_CAROUSEL_PRODUCTS_SUCCESS,
    GET_CAROUSEL_PRODUCTS_FAIL,
    GET_SET_REVIEWS_PENDING,
    GET_SET_REVIEWS_SUCCESS,
    GET_SET_REVIEWS_FAIL,
    GET_SET_REVIEWS_RESET,

    SET_A_REVIEW_AS_AGREE_PENDING,
    SET_A_REVIEW_AS_AGREE_SUCCESS,
    SET_A_REVIEW_AS_AGREE_FAIL,
    SET_A_REVIEW_AS_AGREE_RESET,

    SET_A_REVIEW_AS_DISAGREE_PENDING,
    SET_A_REVIEW_AS_DISAGREE_SUCCESS,
    SET_A_REVIEW_AS_DISAGREE_FAIL,
    SET_A_REVIEW_AS_DISAGREE_RESET,

    GET_REVIEWS_HTLR_PENDING,
    GET_REVIEWS_HTLR_SUCCESS,
    GET_REVIEWS_HTLR_FAIL,
    GET_REVIEWS_HTLR_RESET,

    GET_REVIEWS_LTHR_PENDING,
    GET_REVIEWS_LTHR_SUCCESS,
    GET_REVIEWS_LTHR_FAIL,
    GET_REVIEWS_LTHR_RESET,

    GET_REVIEWS_HTLA_PENDING,
    GET_REVIEWS_HTLA_SUCCESS,
    GET_REVIEWS_HTLA_FAIL,
    GET_REVIEWS_HTLA_RESET,

    GET_REVIEWS_LTHA_PENDING,
    GET_REVIEWS_LTHA_SUCCESS,
    GET_REVIEWS_LTHA_FAIL,
    GET_REVIEWS_LTHA_RESET,

    GET_REVIEWS_HTLDA_PENDING,
    GET_REVIEWS_HTLDA_SUCCESS,
    GET_REVIEWS_HTLDA_FAIL,
    GET_REVIEWS_HTLDA_RESET,

    GET_REVIEWS_LTHDA_PENDING,
    GET_REVIEWS_LTHDA_SUCCESS,
    GET_REVIEWS_LTHDA_FAIL,
    GET_REVIEWS_LTHDA_RESET,
    GET_LIST_PRODUCTS_PENDING,
    GET_LIST_PRODUCTS_SUCCESS,
    GET_LIST_PRODUCTS_FAIL,
    GET_LIST_PRODUCTS_RESET
} from '../actions/actionTypes';

const initialState = {
    products: [],
    pages: null,
    page: null,
    loading: false,
    error: null
}

export const productListReducer = (state = initialState, action) => {
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

const initlaStateSingleProduct = {
    singleProduct: null,
    loading: false,
    error: null
}

export const SingleProductReducer = (state = initlaStateSingleProduct, action) => {
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

const delete_Product_InitialState = {
    success: false,
    loading: false,
    error: null
}

export const deleteProductAsAdmin = (state = delete_Product_InitialState, action) => {
    switch(action.type) {
        case DELETE_PRODUCT_AS_ADMIN_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case DELETE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case DELETE_PRODUCT_AS_ADMIN_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_PRODUCT_AS_ADMIN_RESET:
            return {
                success: false,
                loading: false,
                error: null
            }
        default: 
            return state;
    }

}

const carouselProductInitialState = {
    carouselProducts: [],
    loading: false,
    error: null
}

export const carouselProductReducer = (state = carouselProductInitialState, action) => {
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

const setReviewsInitialState = {
    currentReviews: [],
    setAgreeSuccess: false,
    setAgreeError: null,
    setDisAgreeSuccess: false,
    setDisAgreeError: null,

    getReviewsHTLRSuccess: false,
    getReviewsHTLRError: null,

    getReviewsLTHRSuccess: false,
    getReviewsLHTRError: null,

    getReviewsHTLASuccess: false,
    getReviewsHTLAError: null,

    getReviewsLTHASuccess: false,
    getReviewsLTHAError: null, 

    getReviewsHTLDASuccess:false,
    getReviewsHTLDAError: null,

    getReviewsLTHDASuccess: false,
    getReviewsLTHDAError: null,

    page: null,
    pages: null,
    success: false,
    loading: false,
    error: null
}

export const setReviewsReducer = (state = setReviewsInitialState, action) => {
    switch(action.type) {
        case GET_SET_REVIEWS_PENDING:
            return {
                ...state,
                loading: true,
            }
        case GET_SET_REVIEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                currentReviews: [...action.payload.setOfReviews],
                page: action.payload.page,
                pages: action.payload.pages
            }
        case GET_SET_REVIEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_SET_REVIEWS_RESET:
            return {
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                error: null,
                success: false
            }
        case GET_REVIEWS_HTLR_PENDING: 
            return {
                ...state,
                loading: true
            }
        case GET_REVIEWS_HTLR_SUCCESS: 
            return {
                ...state,
                currentReviews: [...action.payload.setOfReviews],
                page: action.payload.page,
                pages: action.payload.pages,
                getReviewsHTLRSuccess: true,
                loading: false,
            }
        case GET_REVIEWS_HTLR_FAIL:
            return {
                ...state,
                loading: false,
                getReviewsHTLRError: action.payload
            }
        case GET_REVIEWS_HTLR_RESET:
            return {
                ...state,
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                getReviewsHTLRError: null,
                getReviewsHTLRSuccess: false
            }
        case GET_REVIEWS_LTHR_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_REVIEWS_LTHR_SUCCESS:
            return {
                ...state,
                loading: false,
                currentReviews: [...action.payload.currentSetOfReviews],
                page: action.payload.page,
                pages: action.payload.pages,
                getReviewsLTHRSuccess: true
            }
        case GET_REVIEWS_LTHR_FAIL:
            return {
                ...state,
                loading: false,
                getReviewsLTHRError: action.payload
            }
        case GET_REVIEWS_LTHR_RESET:
            return {
                ...state,
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                getReviewsLTHRError: null,
                getReviewsLTHRSuccess: false
            }
        case GET_REVIEWS_HTLA_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_REVIEWS_HTLA_SUCCESS:
            return {
                ...state,
                loading: false,
                currentReviews: [...action.payload.currentSetOfReviews],
                page: action.payload.page,
                pages: action.payload.pages,
                getReviewsHTLASuccess: true
            }
        case GET_REVIEWS_HTLA_FAIL:
            return {
                ...state,
                loading: false,
                getReviewsHTLAError: action.payload
            }
        case GET_REVIEWS_HTLA_RESET:
            return {
                ...state,
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                getReviewsHTLAError: null,
                getReviewsHTLASuccess: false
            }
        case GET_REVIEWS_LTHA_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_REVIEWS_LTHA_SUCCESS:
            return {
                ...state,
                loading: false,
                currentReviews: [...action.payload.currentSetOfReviews],
                page: action.payload.page,
                pages: action.payload.pages,
                getReviewsLTHASuccess: true
            }
        case GET_REVIEWS_LTHA_FAIL:
            return {
                ...state,
                loading: false,
                getReviewsLTHAError: action.payload
            }
        case GET_REVIEWS_LTHA_RESET:
            return {
                ...state,
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                getReviewsLTHAError: null,
                getReviewsLTHASuccess: false
            }
        case GET_REVIEWS_HTLDA_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_REVIEWS_HTLDA_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentReviews: [...action.payload.currentSetOfReviews],
                page: action.payload.page,
                pages: action.payload.pages,
                getReviewsHTLDASuccess: true
            }
        case GET_REVIEWS_HTLDA_FAIL:
            return {
                ...state,
                loading: false,
                getReviewsHTLDAError: action.payload
            }
        case GET_REVIEWS_HTLDA_RESET: 
            return {
                ...state,
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                getReviewsHTLDAError: null,
                getReviewsHTLDASuccess: false
            }
        case GET_REVIEWS_LTHDA_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_REVIEWS_LTHDA_SUCCESS:
            return {
                ...state,
                loading: false,
                currentReviews: [...action.payload.currentSetOfReviews],
                page: action.payload.page,
                pages: action.payload.pages,
                getReviewsLTHDASuccess: true
            }
        case GET_REVIEWS_LTHDA_FAIL:
            return {
                ...state,
                loading: false,
                getReviewsLTHDAError: action.payload
            }
        case GET_REVIEWS_LTHDA_RESET: 
            return {
                ...state,
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                getReviewsLTHDAError: null,
                getReviewsLTHDASuccess: false
            }
        case SET_A_REVIEW_AS_AGREE_PENDING: 
            return {
                ...state,
                loading: true
            }
        case SET_A_REVIEW_AS_AGREE_SUCCESS:
            return {
                ...state,
                loading: false,
                setAgreeSuccess: true
            }
        case SET_A_REVIEW_AS_AGREE_FAIL:
            return {
                ...state,
                loading: false,
                setAgreeError: action.payload
            }
        case SET_A_REVIEW_AS_AGREE_RESET:
            return {
                ...state,
                loading: false,
                setAgreeError: null,
                setAgreeSuccess: false
            }
        case SET_A_REVIEW_AS_DISAGREE_PENDING:
            return {
                ...state,
                loading: true
            }
        case SET_A_REVIEW_AS_DISAGREE_SUCCESS:
            return {
                ...state,
                loading: false,
                setDisAgreeSuccess: true
            }
        case SET_A_REVIEW_AS_DISAGREE_FAIL:
            return {
                ...state,
                loading: false,
                setDisAgreeError: action.payload
            }
        case SET_A_REVIEW_AS_DISAGREE_RESET:
            return {
                ...state,
                loading: false,
                setDisAgreeSuccess: false,
                setDisAgreeError: null
            }
        default:
            return state;
    }
}

const productListBasedOnCategory = {
    productsList: [],
    page: null,
    pages: null,
    loading: false,
    error: null
}

export const getListOfProductsBasedOnCategory = (state = productListBasedOnCategory, action) => {
    switch(action.type) {
        case GET_LIST_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_LIST_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                productsList: [...action.payload.listItems],
                page: action.payload.page,
                pages: action.payload.pages
            }
        case GET_LIST_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
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