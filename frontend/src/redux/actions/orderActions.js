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
exports.getOrdersByUserId = exports.payOrder = exports.getOrderById = exports.createOrder = void 0;
var actionTypes_1 = require("./actionTypes");
var axios_1 = require("axios");
var createOrder = function (orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, createdOrder, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.ORDER_CREATE_REQUEST
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].post("/api/orders", {
                        orderItems: orderItems,
                        shippingAddress: shippingAddress,
                        paymentMethod: paymentMethod,
                        itemsPrice: itemsPrice,
                        taxPrice: taxPrice,
                        shippingPrice: shippingPrice,
                        totalPrice: totalPrice,
                        user: user
                    }, config)];
            case 1:
                createdOrder = _a.sent();
                dispatch({
                    type: actionTypes_1.ORDER_CREATE_REQUEST_SUCCESS,
                    payload: createdOrder.data
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                dispatch({
                    type: actionTypes_1.ORDER_CREATE_REQUEST_FAIL,
                    error: error_1.response && error_1.response.data.message ? error_1.response.data.message : error_1.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.createOrder = createOrder;
var getOrderById = function (id) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, order, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.GET_ORDER_BY_ID
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].get("/api/orders/" + id, config)];
            case 1:
                order = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_ORDER_BY_ID_SUCCESS,
                    payload: order.data
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_ORDER_BY_ID_FAIL,
                    error: error_2.response && error_2.response.data.message ? error_2.response.data.message : error_2.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getOrderById = getOrderById;
var payOrder = function (orderID, paymentResult) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.PUT_ISPAID_STATUS_ORDER_REQUEST
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].put("/api/orders/" + orderID + "/pay", paymentResult, config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                dispatch({
                    type: actionTypes_1.PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL,
                    error: error_3.response && error_3.response.data.message ? error_3.response.data.message : error_3.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.payOrder = payOrder;
var getOrdersByUserId = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.GET_ORDERS_OF_USERS
                });
                user = getState().user.user;
                config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].get('/api/orders/myorders', config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_ORDERS_OF_USERS_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_ORDERS_OF_USERS_FAIL,
                    error: error_4.response && error_4.response.data.message ? error_4.response.data.message : error_4.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getOrdersByUserId = getOrdersByUserId;
