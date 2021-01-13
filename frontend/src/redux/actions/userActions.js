"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getCurrentUserStatus = exports.stickAReviewAsDisAgree = exports.stickAReviewAsAgree = exports.deleteReview = exports.createReview = exports.updateUserDetails = exports.getUserDetails = exports.createUser = exports.clearError = exports.logOut = exports.loginUser = void 0;
var actionTypes_1 = require("./actionTypes");
var axios_1 = require("axios");
var loginUser = function (email, password) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var config, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.LOGIN_USER_PENDING
                });
                config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                return [4 /*yield*/, axios_1["default"].post("/api/users/login", { email: email, password: password }, config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.LOGIN_USER_SUCCESS,
                    payload: data
                });
                localStorage.setItem('userInfo', JSON.stringify(data));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                dispatch({
                    type: actionTypes_1.LOGIN_USER_FAIL,
                    payload: error_1.response && error_1.response.data.message ? error_1.response.data.message : error_1.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.loginUser = loginUser;
var logOut = function () { return function (dispatch) {
    localStorage.removeItem('userInfo');
    dispatch({
        type: actionTypes_1.LOGOUT_USER
    });
}; };
exports.logOut = logOut;
var clearError = function () { return function (dispatch) {
    dispatch({
        type: actionTypes_1.CLEAR_ERROR_SUBMIT
    });
}; };
exports.clearError = clearError;
var createUser = function (name, email, password) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var config, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.CREATE_USER_PENDING
                });
                config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                return [4 /*yield*/, axios_1["default"].post('api/users', { name: name, email: email, password: password }, config)];
            case 1:
                data = (_a.sent()).data;
                localStorage.setItem('userInfo', JSON.stringify(data));
                dispatch({
                    type: actionTypes_1.CREATE_USER_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                dispatch({
                    type: actionTypes_1.CREATE_USER_FAIL,
                    payload: error_2.response && error_2.response.data.message ? error_2.response.data.message : error_2.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.createUser = createUser;
var getUserDetails = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.GET_USER_DETAILS_PENDING
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].get("api/users/profile", config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_USER_DETAILS_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_USER_DETAILS_FAIL,
                    payload: error_3.response && error_3.response.data.message ? error_3.response.data.message : error_3.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getUserDetails = getUserDetails;
var updateUserDetails = function (userSubmitted) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.UPDATE_USER_DETAIL_PENDING
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].put("/api/users/profile", userSubmitted, config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.UPDATE_USER_DETAIL_SUCCESS,
                    payload: data
                });
                dispatch({
                    type: actionTypes_1.UPDATE_USER_DETAIL_RESET,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                dispatch({
                    type: actionTypes_1.UPDATE_USER_DETAIL_FAIL,
                    payload: error_4.response && error_4.response.data.message ? error_4.response.data.message : error_4.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.updateUserDetails = updateUserDetails;
var createReview = function (rating, comment, productID) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.CREATE_REVIEW_PENDING
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].post("/api/products/createreview", { rating: rating, comment: comment, productID: productID }, config)];
            case 1:
                _a.sent();
                dispatch({
                    type: actionTypes_1.CREATE_REVIEW_SUCCESS
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                dispatch({
                    type: actionTypes_1.CREATE_REVIEW_FAIL,
                    payload: error_5.response && error_5.response.data.message ? error_5.response.data.message : error_5.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.createReview = createReview;
var deleteReview = function (productID, reviewID) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.DELETE_REVIEW_REQUEST
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"]["delete"]("/api/products/deletereview/" + productID + "/" + reviewID, config)];
            case 1:
                _a.sent();
                dispatch({
                    type: actionTypes_1.DELETE_REVIEW_SUCCESS
                });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                dispatch({
                    type: actionTypes_1.DELETE_REVIEW_FAIL,
                    payload: error_6.response && error_6.response.data.message ? error_6.response.data.message : error_6.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.deleteReview = deleteReview;
var stickAReviewAsAgree = function (productId, reviewID) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.SET_A_REVIEW_AS_AGREE_PENDING
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].post('/api/products/reviews/agree', {
                        productId: productId,
                        reviewId: reviewID
                    }, config)];
            case 1:
                _a.sent();
                dispatch({
                    type: actionTypes_1.SET_A_REVIEW_AS_AGREE_SUCCESS
                });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                dispatch({
                    type: actionTypes_1.SET_A_REVIEW_AS_AGREE_FAIL,
                    error: error_7.response && error_7.response.data.message ? error_7.response.data.message : error_7.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.stickAReviewAsAgree = stickAReviewAsAgree;
var stickAReviewAsDisAgree = function (productId, reviewID) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.SET_A_REVIEW_AS_DISAGREE_PENDING
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].post('/api/products/reviews/disagree', {
                        productId: productId,
                        reviewId: reviewID
                    }, config)];
            case 1:
                _a.sent();
                dispatch({
                    type: actionTypes_1.SET_A_REVIEW_AS_DISAGREE_SUCCESS
                });
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                dispatch({
                    type: actionTypes_1.SET_A_REVIEW_AS_DISAGREE_FAIL,
                    error: error_8.response && error_8.response.data.message ? error_8.response.data.message : error_8.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.stickAReviewAsDisAgree = stickAReviewAsDisAgree;
var getCurrentUserStatus = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, data, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({ type: actionTypes_1.GET_USER_CURRENT_STATUS_PENDING });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].get('/api/users/currentstatus', config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_USER_CURRENT_STATUS_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_USER_CURRENT_STATUS_FAIL,
                    error: error_9.response && error_9.response.data.message ? error_9.response.data.message : error_9.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getCurrentUserStatus = getCurrentUserStatus;
