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
exports.alsoLikeReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var alsoLikeInitialState = {
    alsoLikeItems: [],
    loading: false,
    success: false,
    error: null
};
var alsoLikeReducer = function (state, action) {
    if (state === void 0) { state = alsoLikeInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_ALSOLIKE_PRODUCTS_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ALSOLIKE_PRODUCTS_SUCCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { loading: false, alsoLikeItems: __spreadArrays(action.payload), success: true });
            }
            break;
        case actionTypes_1.GET_ALSOLIKE_PRODUCTS_FAIL:
            return __assign(__assign({}, state), { error: action.payload });
        case actionTypes_1.GET_ALSOLIKE_RESET:
            return {
                alsoLikeItems: [],
                loading: false,
                success: false,
                error: null
            };
        default:
            return state;
    }
};
exports.alsoLikeReducer = alsoLikeReducer;
