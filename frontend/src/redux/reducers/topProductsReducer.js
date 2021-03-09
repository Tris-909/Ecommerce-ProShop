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
exports.topProductsReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var initialTopProducts = {
    topPhones: [],
    topPhonesWithImages: [],
    topLaptops: [],
    topLaptopsWithImages: [],
    topTVs: [],
    topTVsWithImages: [],
    topHeadphones: [],
    topHeadphonesWithImages: [],
    topGames: [],
    topGamesWithImages: [],
    loading: false,
    error: null
};
var topProductsReducer = function (state, action) {
    if (state === void 0) { state = initialTopProducts; }
    switch (action.type) {
        case actionTypes_1.GET_TOP_PRODUCTS_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_TOP_PHONES_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topPhonesWithImages: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_PRODUCTS_WITH_IMAGES_PHONE_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topPhones: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_LAPTOPS_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topLaptops: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_PRODUCTS_WITH_IMAGES_LAPTOPS_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topLaptopsWithImages: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_TVS_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topTVs: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_PRODUCTS_WITH_IMAGES_TVS_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topTVsWithImages: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_HEADPHONE_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topHeadphones: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_PRODUCTS_WITH_IMAGES_HEADPHONE_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topHeadphonesWithImages: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_GAMES_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topGames: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_PRODUCTS_WITH_IMAGES_GAME_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, topGamesWithImages: __spreadArrays(action.payload) });
            }
            break;
        case actionTypes_1.GET_TOP_PRODUCTS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
exports.topProductsReducer = topProductsReducer;
