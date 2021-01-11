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
exports.removeItemFromCart = exports.cartReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var initialState = {
    cartItems: [],
    addItemLoading: false,
    addItemSuccess: false,
    addItemError: null,
    shippingAddress: {
        address: 'No Info',
        city: 'No Info',
        postalCode: 'No Info',
        country: 'No Info'
    },
    paymentMethod: '',
    error: null
};
var cartReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.ADD_PRODUCT_TO_CART:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.ADD_PRODUCT_TO_CART_SUCCESS:
            return __assign(__assign({}, state), { addItemSuccess: true });
        case actionTypes_1.ADD_PRODUCT_TO_CART_FAIL:
            return __assign(__assign({}, state), { addItemError: action.addItemError });
        case actionTypes_1.ADD_PRODUCT_TO_CART_RESET:
            return __assign(__assign({}, state), { addItemSuccess: false, addItemLoading: false, addItemError: null });
        case actionTypes_1.SAVE_SHIPPING_ADDRESS_CART:
            return __assign(__assign({}, state), { shippingAddress: action.shippingAddress });
        case actionTypes_1.SAVE_PAYMENT_METHOD:
            return __assign(__assign({}, state), { paymentMethod: action.paymentMethod });
        case actionTypes_1.REMOVE_PRODUCTS_FROM_CART_AFTERBUY:
            return __assign(__assign({}, state), { cartItems: [] });
        case actionTypes_1.GET_ALL_ITEMS_FROM_CART_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ALL_ITEMS_FROM_CART_SUCCESS:
            if (action.cartItems instanceof Array) {
                return __assign(__assign({}, state), { loading: false, cartItems: __spreadArrays(action.cartItems) });
            }
            break;
        case actionTypes_1.GET_ALL_ITEMS_FROM_CART_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        case actionTypes_1.GET_ALL_ITEMS_FROM_CART_RESET:
            return {
                cartItems: [],
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.cartReducer = cartReducer;
var initialRemoveItemCartState = {
    loading: false,
    success: false,
    error: null
};
var removeItemFromCart = function (state, action) {
    if (state === void 0) { state = initialRemoveItemCartState; }
    switch (action.type) {
        case actionTypes_1.REMOVE_PRODUCT_FROM_CART_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.REMOVE_PRODUCT_FROM_CART_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.REMOVE_PRODUCT_FROM_CART_RESET:
            return {
                loading: false,
                success: false,
                error: null
            };
        default:
            return state;
    }
};
exports.removeItemFromCart = removeItemFromCart;
