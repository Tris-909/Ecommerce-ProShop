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
exports.getListOfProductsBasedOnCategory = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var productListBasedOnCategory = {
    productsList: [],
    brands: [],
    screenSizes: [],
    rams: [],
    processorTypes: [],
    tvScreenSize: [],
    currentPickedBrands: [],
    currentPickedLaptopScreenSizes: [],
    currentPickedRam: [],
    currentPickedProcessorType: [],
    currentPickedTVScreenSize: [],
    pages: null,
    page: null,
    loading: false,
    error: null
};
var getListOfProductsBasedOnCategory = function (state, action) {
    if (state === void 0) { state = productListBasedOnCategory; }
    switch (action.type) {
        case actionTypes_1.GET_LIST_PRODUCTS_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_LIST_PRODUCTS_SUCCESS:
            // console.log(action.payload.listItems instanceof Array);
            // console.log(action.payload.brands instanceof Array);
            // console.log(action.payload.rams instanceof Array);
            // console.log(action.payload.processorTypes instanceof Array);
            // console.log(action.payload.tvScreenSize instanceof Array);
            // console.log(action.payload.currentPickedBrands instanceof Array);
            // console.log(action.payload.currentPickedLaptopScreenSizes instanceof Array);
            // console.log(action.payload.screenSizes instanceof Array);
            // console.log(action.payload.currentPickedRam instanceof Array);
            // console.log(action.payload.currentPickedProcessorType instanceof Array);
            // console.log(action.payload.currentPickedTVScreenSize instanceof Array);
            if (action.payload.listItems instanceof Array &&
                action.payload.brands instanceof Array &&
                action.payload.rams instanceof Array &&
                action.payload.processorTypes instanceof Array &&
                action.payload.tvScreenSize instanceof Array &&
                action.payload.currentPickedBrands instanceof Array &&
                action.payload.currentPickedLaptopScreenSizes instanceof Array &&
                action.payload.screenSizes instanceof Array &&
                action.payload.currentPickedRam instanceof Array &&
                action.payload.currentPickedProcessorType instanceof Array &&
                action.payload.currentPickedTVScreenSize instanceof Array) {
                console.log(action.payload.listItems);
                return __assign(__assign({}, state), { loading: false, productsList: __spreadArrays(action.payload.listItems), brands: __spreadArrays(action.payload.brands), screenSizes: __spreadArrays(action.payload.screenSizes), rams: __spreadArrays(action.payload.rams), processorTypes: __spreadArrays(action.payload.processorTypes), tvScreenSize: __spreadArrays(action.payload.tvScreenSize), currentPickedBrands: __spreadArrays(action.payload.currentPickedBrands), currentPickedLaptopScreenSizes: __spreadArrays(action.payload.currentPickedLaptopScreenSizes), currentPickedRam: __spreadArrays(action.payload.currentPickedRam), currentPickedProcessorType: __spreadArrays(action.payload.currentPickedProcessorType), currentPickedTVScreenSize: __spreadArrays(action.payload.currentPickedTVScreenSize), page: action.payload.page, pages: action.payload.pages });
            }
            console.log('SUCESS NOT RUN');
            break;
        case actionTypes_1.GET_LIST_PRODUCTS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload.error });
        case actionTypes_1.GET_LIST_PRODUCTS_RESET:
            return {
                productsList: [],
                page: null,
                pages: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.getListOfProductsBasedOnCategory = getListOfProductsBasedOnCategory;
