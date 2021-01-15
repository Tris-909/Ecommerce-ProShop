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
exports.removeProductsInCartAfterBuy = exports.savePaymentMethod = exports.saveShippingAddress = exports.getAllItemsCart = exports.removeItemFromCart = exports.addItemToCart = void 0;
var actionTypes_1 = require("./actionTypes");
var axios_1 = require("axios");
var addItemToCart = function (itemId, productName, productImage, productPrice, onSale, countInStock, qty) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.ADD_PRODUCT_TO_CART
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].post('/api/users/cart/additem', {
                        itemId: itemId,
                        productName: productName,
                        productImage: productImage,
                        productPrice: productPrice,
                        onSale: onSale,
                        countInStock: countInStock,
                        quantity: qty
                    }, config)];
            case 1:
                _a.sent();
                dispatch({
                    type: actionTypes_1.ADD_PRODUCT_TO_CART_SUCCESS
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                dispatch({
                    type: actionTypes_1.ADD_PRODUCT_TO_CART_FAIL,
                    addItemError: error_1.response && error_1.response.data.message ? error_1.response.data.message : error_1.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.addItemToCart = addItemToCart;
var removeItemFromCart = function (id) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.REMOVE_PRODUCT_FROM_CART_REQUEST
                });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"]["delete"]("/api/users/cart/removeitem/" + id, config)];
            case 1:
                _a.sent();
                dispatch({
                    type: actionTypes_1.REMOVE_PRODUCT_FROM_CART_SUCCESS
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                dispatch({
                    type: actionTypes_1.REMOVE_PRODUCT_FROM_CART_FAIL,
                    error: error_2.response && error_2.response.data.message ? error_2.response.data.message : error_2.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.removeItemFromCart = removeItemFromCart;
var getAllItemsCart = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var user, config, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({ type: actionTypes_1.GET_ALL_ITEMS_FROM_CART_REQUEST });
                user = getState().user.user;
                config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.token
                    }
                };
                return [4 /*yield*/, axios_1["default"].get('/api/users/cart', config)];
            case 1:
                data = (_a.sent()).data;
                localStorage.setItem('cartItems', JSON.stringify(data));
                dispatch({
                    type: actionTypes_1.GET_ALL_ITEMS_FROM_CART_SUCCESS,
                    cartItems: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_ALL_ITEMS_FROM_CART_FAIL,
                    error: error_3.response && error_3.response.data.message ? error_3.response.data.message : error_3.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getAllItemsCart = getAllItemsCart;
var saveShippingAddress = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        dispatch({
            type: actionTypes_1.SAVE_SHIPPING_ADDRESS_CART,
            shippingAddress: data
        });
        localStorage.setItem('shippingAddress', JSON.stringify(data));
        return [2 /*return*/];
    });
}); }; };
exports.saveShippingAddress = saveShippingAddress;
var savePaymentMethod = function (paymentMethod) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        dispatch({
            type: actionTypes_1.SAVE_PAYMENT_METHOD,
            paymentMethod: paymentMethod
        });
        localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
        return [2 /*return*/];
    });
}); }; };
exports.savePaymentMethod = savePaymentMethod;
var removeProductsInCartAfterBuy = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        dispatch({
            type: actionTypes_1.REMOVE_PRODUCTS_FROM_CART_AFTERBUY
        });
        localStorage.setItem('cartItems', JSON.stringify([]));
        return [2 /*return*/];
    });
}); }; };
exports.removeProductsInCartAfterBuy = removeProductsInCartAfterBuy;
