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
exports.users_List_Admin_Reducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var users_List_Admin_Initial_State = {
    usersList: [],
    page: 1,
    pages: 10,
    loading: false,
    success: false,
    error: null
};
var users_List_Admin_Reducer = function (state, action) {
    if (state === void 0) { state = users_List_Admin_Initial_State; }
    switch (action.type) {
        case actionTypes_1.GET_ALL_USERS:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ALL_USERS_SUCCESS:
            if (action.payload !== undefined) {
                return __assign(__assign({}, state), { loading: false, success: true, usersList: action.payload.users, pages: action.payload.pages, page: action.payload.page });
            }
            break;
        case actionTypes_1.GET_ALL_USERS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        case actionTypes_1.GET_ALL_USERS_RESET:
            var nullState = {};
            return nullState;
        default:
            return state;
    }
};
exports.users_List_Admin_Reducer = users_List_Admin_Reducer;
