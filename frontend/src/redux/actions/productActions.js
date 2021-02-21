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
exports.getListOfProductsBasedOnCategory = exports.getSetOfReviewsOfCurrentProductBasedOnPageNumber = exports.getCarouselProducts = exports.getSingleProduct = exports.getProductsList = void 0;
var actionTypes_1 = require("./actionTypes");
var axios_1 = require("axios");
var getProductsList = function (keyword, pageNumber) {
    if (keyword === void 0) { keyword = ''; }
    if (pageNumber === void 0) { pageNumber = ''; }
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    dispatch({ type: actionTypes_1.GET_ALL_PRODUCTS_PENDING });
                    return [4 /*yield*/, axios_1["default"].get("/api/products?keyword=" + keyword + "&pageNumber=" + pageNumber)];
                case 1:
                    data = (_a.sent()).data;
                    dispatch({
                        type: actionTypes_1.GET_ALL_PRODUCTS_SUCCESS,
                        payload: data
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    dispatch({
                        type: actionTypes_1.GET_ALL_PRODUCTS_FAIL,
                        payload: { error: error_1.response && error_1.response.data.message ? error_1.response.data : null }
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.getProductsList = getProductsList;
var getSingleProduct = function (id) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({ type: actionTypes_1.GET_SINGLE_PRODUCT_PENDING });
                return [4 /*yield*/, axios_1["default"].get("/api/products/" + id)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_SINGLE_PRODUCT_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_SINGLE_PRODUCT_FAIL,
                    payload: error_2.response && error_2.response.data.message ? error_2.response.data : null
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getSingleProduct = getSingleProduct;
var getCarouselProducts = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.GET_CAROUSEL_PRODUCTS_REQUEST
                });
                return [4 /*yield*/, axios_1["default"].get('/api/products/carousel')];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_CAROUSEL_PRODUCTS_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_CAROUSEL_PRODUCTS_FAIL,
                    error: error_3.response && error_3.response.data.message ? error_3.response.data.message : null
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getCarouselProducts = getCarouselProducts;
var getSetOfReviewsOfCurrentProductBasedOnPageNumber = function (productId, pageReviewNumber) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: actionTypes_1.GET_SET_REVIEWS_PENDING
                });
                return [4 /*yield*/, axios_1["default"].get("/api/products/getreviews/" + productId + "?pageReviewNumber=" + pageReviewNumber)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_SET_REVIEWS_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_SET_REVIEWS_FAIL,
                    payload: error_4.response && error_4.response.data.message ? error_4.response.data.message : null
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getSetOfReviewsOfCurrentProductBasedOnPageNumber = getSetOfReviewsOfCurrentProductBasedOnPageNumber;
var getListOfProductsBasedOnCategory = function (category, page, lowPrice, highPrice, filteredBrands, laptopScreenSizes, laptopRAMs, laptopProcessorTypes, tvScreenSizes) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var BrandsArray, i, brandArrayQuery, i, ScreenSizesArray, i, screenSizesQuery, i, RAMSizeArray, i, RAMSizeQuery, i, ProcessorTypeArray, i, ProcessorTypeQuery, i, data, TVScreenSizesArray, i, TVscreenSizesQuery, i, TVData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                dispatch({
                    type: actionTypes_1.GET_LIST_PRODUCTS_PENDING
                });
                BrandsArray = [];
                for (i = 0; i < filteredBrands.length; i++) {
                    if (filteredBrands[i].isChecked) {
                        BrandsArray.push(filteredBrands[i].value);
                    }
                }
                brandArrayQuery = "&brands=";
                for (i = 0; i < BrandsArray.length; i++) {
                    brandArrayQuery += BrandsArray[i] + ",";
                }
                if (!(category === 'laptops')) return [3 /*break*/, 2];
                ScreenSizesArray = [];
                for (i = 0; i < laptopScreenSizes.length; i++) {
                    if (laptopScreenSizes[i].isChecked) {
                        ScreenSizesArray.push(laptopScreenSizes[i].value);
                    }
                }
                screenSizesQuery = "&screenSizes=";
                for (i = 0; i < ScreenSizesArray.length; i++) {
                    screenSizesQuery += ScreenSizesArray[i] + ",";
                }
                RAMSizeArray = [];
                for (i = 0; i < laptopRAMs.length; i++) {
                    if (laptopRAMs[i].isChecked) {
                        RAMSizeArray.push(laptopRAMs[i].value);
                    }
                }
                RAMSizeQuery = "&ramSize=";
                for (i = 0; i < RAMSizeArray.length; i++) {
                    RAMSizeQuery += RAMSizeArray[i] + ",";
                }
                ProcessorTypeArray = [];
                for (i = 0; i < laptopProcessorTypes.length; i++) {
                    if (laptopProcessorTypes[i].isChecked) {
                        ProcessorTypeArray.push(laptopProcessorTypes[i].value);
                    }
                }
                ProcessorTypeQuery = "&processorType=";
                for (i = 0; i < ProcessorTypeArray.length; i++) {
                    ProcessorTypeQuery += ProcessorTypeArray[i] + ",";
                }
                return [4 /*yield*/, axios_1["default"].get("/api/products/list/" + category + "?page=" + page + "&lowPrice=" + Number(lowPrice) + "&highPrice=" + Number(highPrice) + brandArrayQuery + screenSizesQuery + RAMSizeQuery + ProcessorTypeQuery)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: actionTypes_1.GET_LIST_PRODUCTS_SUCCESS,
                    payload: data
                });
                return [3 /*break*/, 4];
            case 2:
                if (!(category === 'tvs')) return [3 /*break*/, 4];
                console.log(tvScreenSizes);
                TVScreenSizesArray = [];
                for (i = 0; i < tvScreenSizes.length; i++) {
                    if (tvScreenSizes[i].isChecked) {
                        TVScreenSizesArray.push(tvScreenSizes[i].value);
                    }
                }
                console.log('theArray', TVScreenSizesArray);
                TVscreenSizesQuery = "&tvScreenSize=";
                for (i = 0; i < TVScreenSizesArray.length; i++) {
                    TVscreenSizesQuery += TVScreenSizesArray[i] + ",";
                }
                console.log(TVscreenSizesQuery);
                return [4 /*yield*/, axios_1["default"].get("/api/products/list/" + category + "?page=" + page + "&lowPrice=" + Number(lowPrice) + "&highPrice=" + Number(highPrice) + brandArrayQuery + TVscreenSizesQuery)];
            case 3:
                TVData = (_a.sent()).data;
                console.log(TVData);
                dispatch({
                    type: actionTypes_1.GET_LIST_PRODUCTS_SUCCESS,
                    payload: TVData
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                dispatch({
                    type: actionTypes_1.GET_LIST_PRODUCTS_FAIL,
                    payload: { error: error_5.response && error_5.response.data.message ? error_5.response.data.message : null }
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); }; };
exports.getListOfProductsBasedOnCategory = getListOfProductsBasedOnCategory;
