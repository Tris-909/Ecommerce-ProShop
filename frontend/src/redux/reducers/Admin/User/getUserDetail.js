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
exports.get_userInfo_admin_Reducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var user_Info_Admin_Reducer_InitialState = {
    user: {
        _id: "",
        name: "",
        email: "",
        isAdmin: false
    },
    loading: false,
    error: null,
    success: false
};
var get_userInfo_admin_Reducer = function (state, action) {
    if (state === void 0) { state = user_Info_Admin_Reducer_InitialState; }
    switch (action.type) {
        case actionTypes_1.GET_USER_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: false });
        case actionTypes_1.GET_USER_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { user: action.payload, loading: false, success: true });
        case actionTypes_1.GET_USER_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};
exports.get_userInfo_admin_Reducer = get_userInfo_admin_Reducer;
