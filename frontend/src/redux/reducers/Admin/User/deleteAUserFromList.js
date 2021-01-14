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
exports.deleted_user_admin_Reducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var deleted_User_Admin_Reducer_InitialState = {
    loading: false,
    messages: '',
    success: false,
    error: null
};
var deleted_user_admin_Reducer = function (state, action) {
    if (state === void 0) { state = deleted_User_Admin_Reducer_InitialState; }
    switch (action.type) {
        case actionTypes_1.DELETE_USER_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.DELETE_USER_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true, messages: action.messages });
        case actionTypes_1.DELETE_USER_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.deleted_user_admin_Reducer = deleted_user_admin_Reducer;
