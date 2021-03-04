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
exports.storeInfoReducer = void 0;
var actionTypes_1 = require("../../actions/actionTypes");
var storeInfoInitialState = {
    storeInfo: [],
    loading: false,
    success: false,
    error: null
};
var storeInfoReducer = function (state, action) {
    if (state === void 0) { state = storeInfoInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_STORE_INFO_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_STORE_INFO_SUCESS:
            if (action.payload instanceof Array) {
                return __assign(__assign({}, state), { storeInfo: __spreadArrays(action.payload), loading: false, success: true });
            }
            break;
        case actionTypes_1.GET_STORE_INFO_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
exports.storeInfoReducer = storeInfoReducer;
