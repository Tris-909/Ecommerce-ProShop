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
exports.deleteProductAsAdmin = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var delete_Product_InitialState = {
    success: false,
    loading: false,
    error: null
};
var deleteProductAsAdmin = function (state, action) {
    if (state === void 0) { state = delete_Product_InitialState; }
    switch (action.type) {
        case actionTypes_1.DELETE_PRODUCT_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.DELETE_PRODUCT_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.DELETE_PRODUCT_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.DELETE_PRODUCT_AS_ADMIN_RESET:
            return {
                success: false,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.deleteProductAsAdmin = deleteProductAsAdmin;
