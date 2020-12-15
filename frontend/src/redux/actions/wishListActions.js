import {
    GET_WISH_LIST_REQUEST,
    GET_WISH_LIST_SUCCESS,
    GET_WISH_LIST_FAIL,

    ADD_ITEM_TO_WISH_LIST_REQUEST,
    ADD_ITEM_TO_WISH_LIST_SUCCESS,
    ADD_ITEM_TO_WISH_LIST_FAIL,

    REMOVE_ITEM_FROM_WISH_LIST_REQUEST,
    REMOVE_ITEM_FROM_WISH_LIST_SUCCESS,
    REMOVE_ITEM_FROM_WISH_LIST_FAIL,

    REMOVE_ALL_ITEMS_WISHLIST_REQUEST,
    REMOVE_ALL_ITEMS_WISHLIST_SUCCESS,
    REMOVE_ALL_ITEMS_WISHLIST_FAIL
} from './actionTypes';
import axios from 'axios';

export const getWishList = () => async (dispatch, getState) => {
    try {
        dispatch({ 
            type: GET_WISH_LIST_REQUEST
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get('/api/users/wishlist', config);

        dispatch({
            type: GET_WISH_LIST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_WISH_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

export const addItemToWishList = (itemId, productName, productPrice, productImage, productRating, productNumReviews) => async (dispatch, getState) => {
    try {
        dispatch({ 
            type: ADD_ITEM_TO_WISH_LIST_REQUEST
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.post('/api/users/wishlist/additem',{
            itemId, 
            productName, 
            productPrice, 
            productImage, 
            productRating, 
            productNumReviews
        } ,config);

        dispatch({
            type: ADD_ITEM_TO_WISH_LIST_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: ADD_ITEM_TO_WISH_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

export const removeAnItemFromWishList = (wishListItemId) => async(dispatch, getState) => {
    try {
        dispatch({ 
            type: REMOVE_ITEM_FROM_WISH_LIST_REQUEST
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.delete(`/api/users/wishlist/deleteitem/${wishListItemId}`, config);

        dispatch({
            type: REMOVE_ITEM_FROM_WISH_LIST_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: REMOVE_ITEM_FROM_WISH_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        })
    }
}

export const removeAllItemsFromWishList = () => async( dispatch ,getState) => {
    try {
        dispatch({
            type: REMOVE_ALL_ITEMS_WISHLIST_REQUEST
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        await axios.delete('/api/users/wishlist/deleteitem', config);

        dispatch({
            type: REMOVE_ALL_ITEMS_WISHLIST_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: REMOVE_ALL_ITEMS_WISHLIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data : null
        });
    }
}