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
exports.update_userInfo_Admin_Reducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var update_User_Admin_Reducer_InitialState = {
    updatedUser: {
        _id: "",
        name: "",
        email: "",
        isAdmin: false,
        token: ""
    },
    success: false,
    loading: false,
    error: null
};
var update_userInfo_Admin_Reducer = function (state, action) {
    if (state === void 0) { state = update_User_Admin_Reducer_InitialState; }
    switch (action.type) {
        case actionTypes_1.UPDATE_USER_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.UPDATE_USER_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true, updatedUser: action.payload });
        case actionTypes_1.UPDATE_USER_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.update_userInfo_Admin_Reducer = update_userInfo_Admin_Reducer;
