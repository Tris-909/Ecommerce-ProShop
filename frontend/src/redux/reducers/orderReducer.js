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
exports.putIsDeliveredStatus = exports.getOrdersAsAdmin = exports.getOrdersBasedOnUserId = exports.orderPayReducer = exports.loadedOrderFromDatabasesReducer = exports.ordersReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var orderInitialState = {
    orders: {},
    loading: false,
    error: null,
    success: false
};
var ordersReducer = function (state, action) {
    if (state === void 0) { state = orderInitialState; }
    switch (action.type) {
        case actionTypes_1.ORDER_CREATE_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.ORDER_CREATE_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { orders: action.payload, loading: false, success: true });
        case actionTypes_1.ORDER_CREATE_REQUEST_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.ordersReducer = ordersReducer;
var loadedOrdersState = {
    orderItem: {},
    loading: false,
    error: null,
    success: false
};
var loadedOrderFromDatabasesReducer = function (state, action) {
    if (state === void 0) { state = loadedOrdersState; }
    switch (action.type) {
        case actionTypes_1.GET_ORDER_BY_ID:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ORDER_BY_ID_SUCCESS:
            return __assign(__assign({}, state), { orderItem: action.payload, loading: false, success: true });
        case actionTypes_1.GET_ORDER_BY_ID_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.loadedOrderFromDatabasesReducer = loadedOrderFromDatabasesReducer;
//!-------------------------------------------------------------------------------------------------
//TODO: Updating Order.isPaid status
var orderPayInitialState = {
    loading: false,
    success: false,
    error: null
};
var orderPayReducer = function (state, action) {
    if (state === void 0) { state = orderPayInitialState; }
    switch (action.type) {
        case actionTypes_1.PUT_ISPAID_STATUS_ORDER_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        case actionTypes_1.PUT_ISPAID_STATUS_ORDER_RESET:
            var newState = {};
            return newState;
        default:
            return state;
    }
};
exports.orderPayReducer = orderPayReducer;
var userOrdersInitialState = {
    orders: [],
    loading: false,
    success: false,
    error: null
};
var getOrdersBasedOnUserId = function (state, action) {
    if (state === void 0) { state = userOrdersInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_ORDERS_OF_USERS:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ORDERS_OF_USERS_SUCCESS:
            if (action.payload && action.payload instanceof Array) {
                return __assign(__assign({}, state), { orders: __spreadArrays(action.payload), loading: false, success: true });
            }
            break;
        case actionTypes_1.GET_ORDERS_OF_USERS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        case actionTypes_1.GET_ORDER_OF_USER_RESET:
            var nullState = {
                orders: [],
                loading: false,
                success: false,
                error: null
            };
            return nullState;
        default:
            return __assign({}, state);
    }
};
exports.getOrdersBasedOnUserId = getOrdersBasedOnUserId;
var ordersAdminInitialState = {
    orders: [],
    loading: false,
    success: false,
    error: null
};
var getOrdersAsAdmin = function (state, action) {
    if (state === void 0) { state = ordersAdminInitialState; }
    switch (action.type) {
        case actionTypes_1.GET_ALL_ORDERS_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.GET_ALL_ORDERS_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true, orders: action.payload });
        case actionTypes_1.GET_ALL_ORDERS_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        default:
            return __assign({}, state);
    }
};
exports.getOrdersAsAdmin = getOrdersAsAdmin;
var putIsDeliveredInitialState = {
    success: false,
    loading: false,
    error: null
};
var putIsDeliveredStatus = function (state, action) {
    if (state === void 0) { state = putIsDeliveredInitialState; }
    switch (action.type) {
        case actionTypes_1.PUT_IS_DELIVERED_AS_ADMIN_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actionTypes_1.PUT_IS_DELIVERED_AS_ADMIN_SUCCESS:
            return __assign(__assign({}, state), { loading: false, success: true });
        case actionTypes_1.PUT_IS_DELIVERED_AS_ADMIN_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        case actionTypes_1.PUT_IS_DELIVERED_AS_ADMIN_RESET:
            return {
                success: false,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
exports.putIsDeliveredStatus = putIsDeliveredStatus;
