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
exports.__esModule = true;
exports.searchProductsListReducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
//TODO: Search bar products list
var initialState = {
    products: [],
    loading: false,
    error: null
};
var searchProductsListReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.GET_ALL_PRODUCTS_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ALL_PRODUCTS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page });
        case actionTypes_1.GET_ALL_PRODUCTS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
exports.searchProductsListReducer = searchProductsListReducer;
