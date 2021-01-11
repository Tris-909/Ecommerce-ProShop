import {
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST,
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS,
    CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL,
    CREATE_SAMPLE_PRODUCT_RESET
} from '../../../actions/actionTypes';


const create_Product_Admin_Reducer_InitialState = {
    createdProduct: null,
    loading: false,
    error: null,
    success: false
}

export const created_Product_Admin_Reducer = (state = create_Product_Admin_Reducer_InitialState, action: any) => {
    switch(action.type) {
        case CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                createdProduct: action.payload,
                success: true
            }
        case CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_SAMPLE_PRODUCT_RESET: 
            return {
                ...state,
                loading: false,
                error: null,
                success: false
            }
        default: 
            return state;
    }
}
