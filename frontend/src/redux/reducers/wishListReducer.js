"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.removeAllItemsFromWishListReducer = exports.removeItemFromWishListReducer = exports.addItemToWishListReducer = exports.getWishListReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var wishListInitialState = {
    wishList: [],
    loading: false,
    error: null
};
var getWishListReducer = function (state, action) {
    if (state === void 0) { state = wishListInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_WISH_LIST_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_WISH_LIST_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, wishList: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_WISH_LIST_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.GET_WISH_LIST_RESET:
            return {
                wishList: [],
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.getWishListReducer = getWishListReducer;
var addItemToWishListInitialState = {
    loading: false,
    success: false,
    error: null
};
var addItemToWishListReducer = function (state, action) {
    if (state === void 0) { state = addItemToWishListInitialState; }
    switch (action.type) {
        case actionTypes_1.ADD_ITEM_TO_WISH_LIST_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.ADD_ITEM_TO_WISH_LIST_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.ADD_ITEM_TO_WISH_LIST_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.ADD_ITEM_TO_WISH_LIST_RESET:
            return {
                loading: false,
                success: false,
                error: null
            };
        default:
            return state;
    }
};
exports.addItemToWishListReducer = addItemToWishListReducer;
var removeItemFromWishListInitialState = {
    loading: false,
    success: false,
    error: null
};
var removeItemFromWishListReducer = function (state, action) {
    if (state === void 0) { state = removeItemFromWishListInitialState; }
    switch (action.type) {
        case actionTypes_1.REMOVE_ITEM_FROM_WISH_LIST_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.REMOVE_ITEM_FROM_WISH_LIST_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.REMOVE_ITEM_FROM_WISH_LIST_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.REMOVE_ITEM_FROM_WISH_LIST_RESET:
            return {
                loading: false,
                success: false,
                error: null
            };
        default:
            return state;
    }
};
exports.removeItemFromWishListReducer = removeItemFromWishListReducer;
var removeAllItemInitlaState = {
    success: false,
    loading: false,
    error: null
};
var removeAllItemsFromWishListReducer = function (state, action) {
    if (state === void 0) { state = removeAllItemInitlaState; }
    switch (action.type) {
        case actionTypes_1.REMOVE_ALL_ITEMS_WISHLIST_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.REMOVE_ALL_ITEMS_WISHLIST_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.REMOVE_ALL_ITEMS_WISHLIST_FAIL:
            return __assign(__assign({}, state), { loading: false, errro: action.payload });
        case actionTypes_1.REMOVE_ALL_ITEMS_WISHLIST_RESET:
            return {
                success: false,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.removeAllItemsFromWishListReducer = removeAllItemsFromWishListReducer;
