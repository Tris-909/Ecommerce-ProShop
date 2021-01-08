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
exports.currentUserStatusReducer = exports.deleteReviewReducer = exports.userReviewReducer = exports.userDetailsReducer = exports.userReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var initialUserState = {
    user: null,
    loading: false,
    error: null
};
var userReducer = function (state, action) {
    if (state === void 0) { state = initialUserState; }
    switch (action.type) {
        case actionTypes_1.LOGIN_USER_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.LOGIN_USER_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.LOGIN_USER_SUCCESS:
            return __assign(__assign({}, state), { loading: false, user: action.payload, error: null });
        case actionTypes_1.LOGOUT_USER:
            return __assign(__assign({}, state), { user: null });
        case actionTypes_1.CREATE_USER_PENDING:
            return __assign(__assign({}, state), { loading: false });
        case actionTypes_1.CREATE_USER_SUCCESS:
            return __assign(__assign({}, state), { user: action.payload, error: null });
        case actionTypes_1.CREATE_USER_FAIL:
            return __assign(__assign({}, state), { error: action.payload });
        case actionTypes_1.CLEAR_ERROR_SUBMIT:
            return __assign(__assign({}, state), { error: null });
        case actionTypes_1.UPDATE_USER_DETAIL_RESET:
            return __assign(__assign({}, state), { user: action.payload });
        default:
            return __assign({}, state);
    }
};
exports.userReducer = userReducer;
//! USER PROFILE 
var initialDetailState = {
    details: {},
    loading: false,
    detailError: null,
    success: false
};
var userDetailsReducer = function (state, action) {
    if (state === void 0) { state = initialDetailState; }
    switch (action.type) {
        case actionTypes_1.GET_USER_DETAILS_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_USER_DETAILS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, details: action.payload });
        case actionTypes_1.GET_USER_DETAILS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.UPDATE_USER_DETAIL_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.UPDATE_USER_DETAIL_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true, details: action.payload });
        case actionTypes_1.UPDATE_USER_DETAIL_FAIL:
            return __assign(__assign({}, state), { detailError: action.payload });
        case actionTypes_1.GET_USER_DETAILS_RESET:
            return {
                details: {},
                loading: false,
                detailError: null,
                success: false
            };
        default:
            return __assign({}, state);
    }
};
exports.userDetailsReducer = userDetailsReducer;
var initialReviewState = {
    loading: false,
    success: false,
    error: null
};
var userReviewReducer = function (state, action) {
    if (state === void 0) { state = initialReviewState; }
    switch (action.type) {
        case actionTypes_1.CREATE_REVIEW_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.CREATE_REVIEW_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.CREATE_REVIEW_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.CREATE_REVIEW_RESET:
            return {
                loading: false,
                success: false,
                error: null
            };
        default:
            return state;
    }
};
exports.userReviewReducer = userReviewReducer;
var deleteReviewInitalState = {
    loading: false,
    error: null,
    success: false
};
var deleteReviewReducer = function (state, action) {
    if (state === void 0) { state = deleteReviewInitalState; }
    switch (action.type) {
        case actionTypes_1.DELETE_REVIEW_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.DELETE_REVIEW_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.DELETE_REVIEW_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.DELETE_REVIEW_RESET:
            return {
                loading: false,
                error: null,
                success: false
            };
        default:
            return state;
    }
};
exports.deleteReviewReducer = deleteReviewReducer;
var currentUserStatusState = {
    userStatus: null,
    loading: false,
    error: null
};
var currentUserStatusReducer = function (state, action) {
    if (state === void 0) { state = currentUserStatusState; }
    switch (action.type) {
        case actionTypes_1.GET_USER_CURRENT_STATUS_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_USER_CURRENT_STATUS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, userStatus: action.payload });
        case actionTypes_1.GET_USER_CURRENT_STATUS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case actionTypes_1.GET_USER_CURRENT_STATUS_RESET:
            return {
                userStatus: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.currentUserStatusReducer = currentUserStatusReducer;
