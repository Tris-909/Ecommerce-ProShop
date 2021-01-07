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
exports.topLaptopReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var topLaptopInitialState = {
    topLaptops: [],
    loading: false,
    error: null
};
var topLaptopReducer = function (state, action) {
    if (state === void 0) { state = topLaptopInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_TOP_LAPTOPS_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_TOP_LAPTOPS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, topLaptops: action.payload });
        case actionTypes_1.GET_TOP_LAPTOPS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
exports.topLaptopReducer = topLaptopReducer;
