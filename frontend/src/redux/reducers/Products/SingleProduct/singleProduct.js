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
exports.SingleProductReducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var initlaStateSingleProduct = {
    singleProduct: null,
    loading: false,
    error: null
};
var SingleProductReducer = function (state, action) {
    if (state === void 0) { state = initlaStateSingleProduct; }
    switch (action.type) {
        case actionTypes_1.GET_SINGLE_PRODUCT_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_SINGLE_PRODUCT_SUCCESS:
            return __assign(__assign({}, state), { loading: false, error: null, singleProduct: action.payload });
        case actionTypes_1.GET_SINGLE_PRODUCT_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return __assign({}, state);
    }
};
exports.SingleProductReducer = SingleProductReducer;
