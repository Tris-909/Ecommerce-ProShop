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
import { User, SingleWishListItem } from './actionInterfaces';
import { Dispatch } from 'redux';

//! Get user who logged-in wish list when they open wishList page
export const getWishList = () => async (dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({ 
            type: GET_WISH_LIST_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get<SingleWishListItem[]>('/api/users/wishlist', config);

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

interface postBody {
    itemId: string,
    onSale: number,
    productName: string,
    productPrice: number,
    productImage: string,
    productRating: number,
    productNumReviews: number
}

export const addItemToWishList = ( itemId: string, 
    productName: string, 
    productPrice: number, 
    productImage: string, 
    productRating: number, 
    productNumReviews: number,
    onSale: number) => async (dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({ 
            type: ADD_ITEM_TO_WISH_LIST_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const postBody:postBody = {
            itemId, 
            onSale,
            productName, 
            productPrice, 
            productImage, 
            productRating, 
            productNumReviews
        }

        await axios.post('/api/users/wishlist/additem', postBody, config);

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

export const removeAnItemFromWishList = (wishListItemId: string) => async(dispatch: Dispatch, getState: Function) => {
    try {
        dispatch({ 
            type: REMOVE_ITEM_FROM_WISH_LIST_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
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

export const removeAllItemsFromWishList = () => async( dispatch: Dispatch ,getState: Function) => {
    try {
        dispatch({
            type: REMOVE_ALL_ITEMS_WISHLIST_REQUEST
        });

        const { user: {user} }:{ user: {user: User} } = getState();
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