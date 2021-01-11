import {
    DELETE_PRODUCT_AS_ADMIN_REQUEST,
    DELETE_PRODUCT_AS_ADMIN_SUCCESS,
    DELETE_PRODUCT_AS_ADMIN_FAIL,
    DELETE_PRODUCT_AS_ADMIN_RESET
} from '../../../actions/actionTypes';

interface DeleteProductAsAdmin {
    success: boolean;
    loading: boolean;
    error: string | null;
}

const delete_Product_InitialState: DeleteProductAsAdmin = {
    success: false,
    loading: false,
    error: null
}

interface DeleteProductAdminAction {
    type: string;
    payload?: string;
}

export const deleteProductAsAdmin = (state = delete_Product_InitialState, action: DeleteProductAdminAction) => {
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