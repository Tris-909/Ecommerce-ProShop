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
exports.setReviewsReducer = void 0;
var actionTypes_1 = require("../../../actions/actionTypes");
var setReviewsInitialState = {
    currentReviews: [],
    setAgreeSuccess: false,
    setDisAgreeSuccess: false,
    getReviewsHTLRSuccess: false,
    getReviewsHTLRError: null,
    getReviewsLTHRSuccess: false,
    getReviewsLHTRError: null,
    getReviewsHTLASuccess: false,
    getReviewsHTLAError: null,
    getReviewsLTHASuccess: false,
    getReviewsLTHAError: null,
    getReviewsHTLDASuccess: false,
    getReviewsHTLDAError: null,
    getReviewsLTHDASuccess: false,
    getReviewsLTHDAError: null,
    page: null,
    pages: null,
    success: false,
    loading: false,
    error: null
};
var setReviewsReducer = function (state, action) {
    if (state === void 0) { state = setReviewsInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_SET_REVIEWS_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_SET_REVIEWS_SUCCESS:
            if (action.payload.setOfReviews instanceof Array) {
                return __assign(__assign({}, state), { loading: false, success: true, currentReviews: __spreadArrays(action.payload.setOfReviews), page: action.payload.page, pages: action.payload.pages });
            }
            break;
        case actionTypes_1.GET_SET_REVIEWS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload.error });
        case actionTypes_1.GET_SET_REVIEWS_RESET:
            return {
                currentReviews: [],
                page: null,
                pages: null,
                loading: false,
                error: null,
                success: false
            };
        case actionTypes_1.GET_REVIEWS_HTLR_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_REVIEWS_HTLR_SUCCESS:
            if (action.payload.setOfReviews instanceof Array) {
                return __assign(__assign({}, state), { currentReviews: __spreadArrays(action.payload.setOfReviews), page: action.payload.page, pages: action.payload.pages, getReviewsHTLRSuccess: true, loading: false });
            }
            break;
        case actionTypes_1.GET_REVIEWS_HTLR_FAIL:
            return __assign(__assign({}, state), { loading: false, getReviewsHTLRError: action.payload.error });
        case actionTypes_1.GET_REVIEWS_HTLR_RESET:
            return __assign(__assign({}, state), { currentReviews: [], page: null, pages: null, loading: false, getReviewsHTLRError: null, getReviewsHTLRSuccess: false });
        case actionTypes_1.GET_REVIEWS_LTHR_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_REVIEWS_LTHR_SUCCESS:
            if (action.payload.currentSetOfReviews instanceof Array) {
                return __assign(__assign({}, state), { loading: false, currentReviews: __spreadArrays(action.payload.currentSetOfReviews), page: action.payload.page, pages: action.payload.pages, getReviewsLTHRSuccess: true });
            }
            break;
        case actionTypes_1.GET_REVIEWS_LTHR_FAIL:
            return __assign(__assign({}, state), { loading: false, getReviewsLTHRError: action.payload.error });
        case actionTypes_1.GET_REVIEWS_LTHR_RESET:
            return __assign(__assign({}, state), { currentReviews: [], page: null, pages: null, loading: false, getReviewsLTHRError: null, getReviewsLTHRSuccess: false });
        case actionTypes_1.GET_REVIEWS_HTLA_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_REVIEWS_HTLA_SUCCESS:
            if (action.payload.currentSetOfReviews instanceof Array) {
                return __assign(__assign({}, state), { loading: false, currentReviews: __spreadArrays(action.payload.currentSetOfReviews), page: action.payload.page, pages: action.payload.pages, getReviewsHTLASuccess: true });
            }
            break;
        case actionTypes_1.GET_REVIEWS_HTLA_FAIL:
            return __assign(__assign({}, state), { loading: false, getReviewsHTLAError: action.payload.error });
        case actionTypes_1.GET_REVIEWS_HTLA_RESET:
            return __assign(__assign({}, state), { currentReviews: [], page: null, pages: null, loading: false, getReviewsHTLAError: null, getReviewsHTLASuccess: false });
        case actionTypes_1.GET_REVIEWS_LTHA_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_REVIEWS_LTHA_SUCCESS:
            if (action.payload.currentSetOfReviews instanceof Array) {
                return __assign(__assign({}, state), { loading: false, currentReviews: __spreadArrays(action.payload.currentSetOfReviews), page: action.payload.page, pages: action.payload.pages, getReviewsLTHASuccess: true });
            }
            break;
        case actionTypes_1.GET_REVIEWS_LTHA_FAIL:
            return __assign(__assign({}, state), { loading: false, getReviewsLTHAError: action.payload.error });
        case actionTypes_1.GET_REVIEWS_LTHA_RESET:
            return __assign(__assign({}, state), { currentReviews: [], page: null, pages: null, loading: false, getReviewsLTHAError: null, getReviewsLTHASuccess: false });
        case actionTypes_1.GET_REVIEWS_HTLDA_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_REVIEWS_HTLDA_SUCCESS:
            if (action.payload.currentSetOfReviews instanceof Array) {
                return __assign(__assign({}, state), { loading: false, currentReviews: __spreadArrays(action.payload.currentSetOfReviews), page: action.payload.page, pages: action.payload.pages, getReviewsHTLDASuccess: true });
            }
            break;
        case actionTypes_1.GET_REVIEWS_HTLDA_FAIL:
            return __assign(__assign({}, state), { loading: false, getReviewsHTLDAError: action.payload.error });
        case actionTypes_1.GET_REVIEWS_HTLDA_RESET:
            return __assign(__assign({}, state), { currentReviews: [], page: null, pages: null, loading: false, getReviewsHTLDAError: null, getReviewsHTLDASuccess: false });
        case actionTypes_1.GET_REVIEWS_LTHDA_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_REVIEWS_LTHDA_SUCCESS:
            if (action.payload.currentSetOfReviews instanceof Array) {
                return __assign(__assign({}, state), { loading: false, currentReviews: __spreadArrays(action.payload.currentSetOfReviews), page: action.payload.page, pages: action.payload.pages, getReviewsLTHDASuccess: true });
            }
            break;
        case actionTypes_1.GET_REVIEWS_LTHDA_FAIL:
            return __assign(__assign({}, state), { loading: false, getReviewsLTHDAError: action.payload.error });
        case actionTypes_1.GET_REVIEWS_LTHDA_RESET:
            return __assign(__assign({}, state), { currentReviews: [], page: null, pages: null, loading: false, getReviewsLTHDAError: null, getReviewsLTHDASuccess: false });
        case actionTypes_1.SET_A_REVIEW_AS_AGREE_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.SET_A_REVIEW_AS_AGREE_SUCCESS:
            return __assign(__assign({}, state), { loading: false, setAgreeSuccess: true });
        case actionTypes_1.SET_A_REVIEW_AS_AGREE_FAIL:
            return __assign(__assign({}, state), { loading: false });
        case actionTypes_1.SET_A_REVIEW_AS_AGREE_RESET:
            return __assign(__assign({}, state), { loading: false, setAgreeError: null, setAgreeSuccess: false });
        case actionTypes_1.SET_A_REVIEW_AS_DISAGREE_PENDING:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.SET_A_REVIEW_AS_DISAGREE_SUCCESS:
            return __assign(__assign({}, state), { loading: false, setDisAgreeSuccess: true });
        case actionTypes_1.SET_A_REVIEW_AS_DISAGREE_FAIL:
            return __assign(__assign({}, state), { loading: false });
        case actionTypes_1.SET_A_REVIEW_AS_DISAGREE_RESET:
            return __assign(__assign({}, state), { loading: false, setDisAgreeSuccess: false });
        default:
            return state;
    }
};
exports.setReviewsReducer = setReviewsReducer;
