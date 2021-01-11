import {
    UPDATE_PRODUCT_AS_ADMIN_REQUEST,
    UPDATE_PRODUCT_AS_ADMIN_SUCCESS,
    UPDATE_PRODUCT_AS_ADMIN_FAIL,
    UPDATE_PRODUCT_AS_ADMIN_RESET
} from '../../../actions/actionTypes';

const updated_Product_Admin_Reducer_InitialState = {
    loading: false,
    success: false,
    error: null 
}

export const update_Product_Admin_Reducer = (state = updated_Product_Admin_Reducer_InitialState, action: any) => {
    switch(action.type) {
        case UPDATE_PRODUCT_AS_ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PRODUCT_AS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case UPDATE_PRODUCT_AS_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                errro: action.payload
            }
        case UPDATE_PRODUCT_AS_ADMIN_RESET:
            return {
                ...state,
                success: false
            }
        default:
            return state;
    }
}