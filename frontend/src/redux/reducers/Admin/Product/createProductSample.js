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
exports.created_Product_Admin_Reducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var create_Product_Admin_Reducer_InitialState = {
    createdProduct: null,
    loading: false,
    error: null,
    success: false
};
var created_Product_Admin_Reducer = function (state, action) {
    if (state === void 0) { state = create_Product_Admin_Reducer_InitialState; }
    switch (action.type) {
        case actionTypes_1.CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { loading: false, createdProduct: action.payload, success: true });
        case actionTypes_1.CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.CREATE_SAMPLE_PRODUCT_RESET:
            return __assign(__assign({}, state), { loading: false, error: null, success: false });
        default:
            return state;
    }
};
exports.created_Product_Admin_Reducer = created_Product_Admin_Reducer;
