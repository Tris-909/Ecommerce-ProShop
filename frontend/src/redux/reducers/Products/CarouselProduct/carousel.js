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
exports.carouselProductReducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var carouselProductInitialState = {
    carouselProducts: [],
    loading: false,
    error: null
};
var carouselProductReducer = function (state, action) {
    if (state === void 0) { state = carouselProductInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_CAROUSEL_PRODUCTS_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_CAROUSEL_PRODUCTS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, carouselProducts: action.payload });
        case actionTypes_1.GET_CAROUSEL_PRODUCTS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
exports.carouselProductReducer = carouselProductReducer;
