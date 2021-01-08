// THIS PROJECT USING BETTER-COMMENT Expansions with VSCODE to see highlight comments (Tris)
//! PRODUCT
//TODO : GET ALL PRODUCTS 
export const GET_ALL_PRODUCTS_PENDING = 'GET_ALL_PRODUCTS_PENDING';
export const GET_ALL_PRODUCTS_FAIL = 'GET_ALL_PRODUCTS_FAIL';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';

//TODO: GET LIST OF PRODUCTS WITH PAGINATION SYSTEM
export const GET_LIST_PRODUCTS_PENDING = 'GET_LIST_PRODUCTS_PENDING';
export const GET_LIST_PRODUCTS_SUCCESS = 'GET_LIST_PRODUCTS_SUCCESS';
export const GET_LIST_PRODUCTS_FAIL = 'GET_LIST_PRODUCTS_FAIL';
export const GET_LIST_PRODUCTS_RESET = 'GET_LIST_PRODUCTS_RESET';

//TODO : GET A PRODUCT BY ID
export const GET_SINGLE_PRODUCT_PENDING  = 'GET_SINGLE_PRODUCT_PENDING';
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
export const GET_SINGLE_PRODUCT_FAIL = 'GET_SINGLE_PRODUCT_FAIL';

//TODO: GET 3 TOP RATED PRODUCT
export const GET_CAROUSEL_PRODUCTS_REQUEST = 'GET_CAROUSEL_PRODUCTS_REQUEST';
export const GET_CAROUSEL_PRODUCTS_SUCCESS = 'GET_CAROUSEL_PRODUCTS_SUCCESS';
export const GET_CAROUSEL_PRODUCTS_FAIL = 'GET_CAROUSEL_PRODUCTS_FAIL';

//! CART
//TODO: ADD ITEM TO CART
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS';
export const ADD_PRODUCT_TO_CART_FAIL = 'ADD_PRODUCT_TO_CART_FAIL'; 
export const ADD_PRODUCT_TO_CART_RESET = 'ADD_PRODUCT_TO_CART_RESET';

//TODO: REMOVE ITEM FROM CART
export const REMOVE_PRODUCT_FROM_CART_REQUEST = 'REMOVE_PRODUCT_TO_CART_REQUEST';
export const REMOVE_PRODUCT_FROM_CART_SUCCESS = 'REMOVE_PRODUCT_FROM_CART_SUCCESS';
export const REMOVE_PRODUCT_FROM_CART_FAIL = 'REMOVE_PRODUCT_FROM_CART_FAIL';
export const REMOVE_PRODUCT_FROM_CART_RESET = 'REMOVE_PRODUCT_FROM_CART_RESET';

//TODO: GET ALL ITEMS FROM CART
export const GET_ALL_ITEMS_FROM_CART_REQUEST = 'GET_ALL_ITEMS_FROM_CART_REQUEST';
export const GET_ALL_ITEMS_FROM_CART_SUCCESS = 'GET_ALL_ITEMS_FROM_CART_SUCCESS';
export const GET_ALL_ITEMS_FROM_CART_FAIL = 'GET_ALL_ITEMS_FROM_CART_FAIL';
export const GET_ALL_ITEMS_FROM_CART_RESET = 'GET_ALL_ITEMS_FROM_CART_RESET';

export const SAVE_SHIPPING_ADDRESS_CART = 'SAVE_SHIPPING_ADDRESS_CART';
export const SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD';
export const REMOVE_PRODUCTS_FROM_CART_AFTERBUY = 'REMOVE_PRODUCTS_FROM_CART_AFTERBUY';

//! WISH-LIST
//TODO: GET USER WISHLIST
export const GET_WISH_LIST_REQUEST = 'GET_WISH_LIST_REQUEST';
export const GET_WISH_LIST_SUCCESS = 'GET_WISH_LIST_SUCCESS';
export const GET_WISH_LIST_FAIL = 'GET_WISH_LIST_FAIL';
export const GET_WISH_LIST_RESET = 'GET_WISH_LIST_RESET'; 

//TODO: ADD AN ITEM TO WISHLIST
export const ADD_ITEM_TO_WISH_LIST_REQUEST = 'ADD_ITEM_TO_WISH_LIST_REQUEST';
export const ADD_ITEM_TO_WISH_LIST_SUCCESS = 'ADD_ITEM_TO_WISH_LIST_SUCCESS';
export const ADD_ITEM_TO_WISH_LIST_FAIL = 'ADD_ITEM_TO_WISH_LIST_FAIL';
export const ADD_ITEM_TO_WISH_LIST_RESET = 'ADD_ITEM_TO_WISH_LIST_RESET';

//TODO: REMOVE AN ITEM FROM WISHLIST
export const REMOVE_ITEM_FROM_WISH_LIST_REQUEST = 'REMOVE_ITEM_FROM_WISH_LIST_REQUEST';
export const REMOVE_ITEM_FROM_WISH_LIST_SUCCESS = 'REMOVE_ITEM_FROM_WISH_LIST_SUCCESS';
export const REMOVE_ITEM_FROM_WISH_LIST_FAIL = 'REMOVE_ITEM_FROM_WISH_LIST_FAIL';  
export const REMOVE_ITEM_FROM_WISH_LIST_RESET = 'REMOVE_ITEM_FROM_WISH_LIST_RESET';

//TODO: REMOVE ALL ITEMS FROM WISHLIST
export const REMOVE_ALL_ITEMS_WISHLIST_REQUEST = 'REMOVE_ALL_ITEMS_WISHLIST_REQUEST';
export const REMOVE_ALL_ITEMS_WISHLIST_SUCCESS = 'REMOVE_ALL_ITEMS_WISHLIST_SUCCESS';
export const REMOVE_ALL_ITEMS_WISHLIST_FAIL = 'REMOVE_ALL_ITEMS_WISHLIST_FAIL';
export const REMOVE_ALL_ITEMS_WISHLIST_RESET = 'REMOVE_ALL_ITEMS_WISHLIST_RESET';

//! USER
//TODO : LOGIN
export const LOGIN_USER_PENDING = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

//TODO : LOG-OUT
export const LOGOUT_USER = 'LOG_OUT';

//TODO : REGISTER
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
export const CLEAR_ERROR_SUBMIT =  'CLEAR_ERROR_SUBMIT';

//TODO : GET PERSONAL INFORMATION AS ADMIN TO SHOW ON ADMIN PAGE
export const GET_USER_DETAILS_PENDING = 'GET_USER_DETAILS_PENDING';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_FAIL = 'GET_USER_DETAILS_FAIL';
export const GET_USER_DETAILS_RESET = 'GET_USER_DETAILS_RESET';

//TODO: GET NEW INFO ABOUT THE CURRENT USER LOGGED IN
export const GET_USER_CURRENT_STATUS_PENDING = 'GET_USER_CURRENT_STATUS_PENDING';
export const GET_USER_CURRENT_STATUS_SUCCESS = 'GET_USER_CURRENT_STATUS_SUCCESS';
export const GET_USER_CURRENT_STATUS_FAIL = 'GET_USER_CURRENT_STATUS_FAIL';
export const GET_USER_CURRENT_STATUS_RESET = 'GET_USER_CURRENT_STATUS_RESET';

//TODO : CHANGE PERSONAL INFORMATION
export const UPDATE_USER_DETAIL_PENDING = 'UPDATE_USER_DETAIL_PENDING';
export const UPDATE_USER_DETAIL_SUCCESS = 'UPDATE_USER_DETAIL_SUCCESS';
export const UPDATE_USER_DETAIL_FAIL = 'UPDATE_USER_DETAIL_FAIL';
export const UPDATE_USER_DETAIL_RESET = 'UPDATE_USER_DETAIL_RESET';

//TODO: GET A SET OF REVIEWS BASED ON PAGENUMBER
export const GET_SET_REVIEWS_PENDING = 'GET_SET_REVIEWS_PENDING';
export const GET_SET_REVIEWS_SUCCESS = 'GET_SET_REVIEWS_SUCCESS';
export const GET_SET_REVIEWS_FAIL = 'GET_SET_REVIEWS_FAIL';
export const GET_SET_REVIEWS_RESET = 'GET_SET_REVIEWS_RESET';

//TODO: CREATE A REVIEW FOR A PRODUCT AS USER
export const CREATE_REVIEW_PENDING = 'CREATE_REVIEW_PENDING';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_FAIL = 'CREATE_REVIEW_FAIL';
export const CREATE_REVIEW_RESET = 'CREATE_REVIEW_RESET';

//TODO: DELETE A REVIEW OF A PRODUCT BASED ON USERID, PRODUCTID AND REVIEW ID
export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_FAIL = 'DELETE_REVIEW_FAIL';
export const DELETE_REVIEW_RESET = 'DELETE_REVIEW_RESET';

//TODO: SET A REVIEW AS "AGREE" 
export const SET_A_REVIEW_AS_AGREE_PENDING = 'SET_A_REVIEW_AS_AGREE_PENDING';
export const SET_A_REVIEW_AS_AGREE_SUCCESS = 'SET_A_REVIEW_AS_AGREE_SUCCESS';
export const SET_A_REVIEW_AS_AGREE_FAIL = 'SET_A_REVIEW_AS_AGREE_FAIL';
export const SET_A_REVIEW_AS_AGREE_RESET = 'SET_A_REVIEW_AS_AGREE_RESET';

//TODO: SET A REVIEW AS "DIS-AGREE"
export const SET_A_REVIEW_AS_DISAGREE_PENDING = 'SET_A_REVIEW_AS_DISAGREE_PENDING';
export const SET_A_REVIEW_AS_DISAGREE_SUCCESS = 'SET_A_REVIEW_AS_DISAGREE_SUCCESS';
export const SET_A_REVIEW_AS_DISAGREE_FAIL = 'SET_A_REVIEW_AS_DISAGREE_FAIL';
export const SET_A_REVIEW_AS_DISAGREE_RESET = 'SET_A_REVIEW_AS_DISAGREE_RESET';

//TODO: GET REVIEWS SORT BY HIGH TO LOW RATING
export const GET_REVIEWS_HTLR_PENDING = 'GET_REVIEWS_HTLR_PENDING';
export const GET_REVIEWS_HTLR_SUCCESS = 'GET_REVIEWS_HTLR_SUCCESS';
export const GET_REVIEWS_HTLR_FAIL = 'GET_REVIEWS_HTLR_FAIL';
export const GET_REVIEWS_HTLR_RESET = 'GET_REVIEWS_HTLR_RESET';

//TODO: GET REVIEWS SORT BY LOW TO HIGH RATING
export const GET_REVIEWS_LTHR_PENDING = 'GET_REVIEWS_LTHR_PENDING';
export const GET_REVIEWS_LTHR_SUCCESS = 'GET_REVIEWS_LTHR_SUCCESS';
export const GET_REVIEWS_LTHR_FAIL = 'GET_REVIEWS_LTHR_FAIL';
export const GET_REVIEWS_LTHR_RESET = 'GET_REVIEWS_LTHR_RESET';

//TODO: GET REVIEWS SORT BY HIGH TO LOW NUMBER OF AGREES
export const GET_REVIEWS_HTLA_PENDING = 'GET_REVIEWS_LTHA_PENDING';
export const GET_REVIEWS_HTLA_SUCCESS = 'GET_REVIEWS_LTHA_SUCCESS';
export const GET_REVIEWS_HTLA_FAIL = 'GET_REVIEWS_LTHA_FAIL';
export const GET_REVIEWS_HTLA_RESET = 'GET_REVIEWS_LTHA_RESET';

//TODO: GET REVIEWS SORT BY LOW TO HIGH NUMBER OF AGREES
export const GET_REVIEWS_LTHA_PENDING = 'GET_REVIEWS_LTHA_PENDING';
export const GET_REVIEWS_LTHA_SUCCESS = 'GET_REVIEWS_LTHA_SUCCESS';
export const GET_REVIEWS_LTHA_FAIL = 'GET_REVIEWS_LTHA_FAIL';
export const GET_REVIEWS_LTHA_RESET = 'GET_REVIEWS_LTHA_RESET';

//TODO: GET REVIEWS SORT BY HIGH TO LOW NUMBER OF DISAGREES
export const GET_REVIEWS_HTLDA_PENDING = 'GET_REVIEWS_HTLDA_PENDING';
export const GET_REVIEWS_HTLDA_SUCCESS = 'GET_REVIEWS_HTLDA_SUCCESS';
export const GET_REVIEWS_HTLDA_FAIL = 'GET_REVIEWS_HTLDA_FAIL';
export const GET_REVIEWS_HTLDA_RESET = 'GET_REVIEWS_HTLDA_RESET';

//TODO: GET REVIEWS SORT BY LOW TO HIGH NUMBER OF DISAGREES
export const GET_REVIEWS_LTHDA_PENDING = 'GET_REVIEWS_LTHDA_PENDING';
export const GET_REVIEWS_LTHDA_SUCCESS = 'GET_REVIEWS_LTHDA_SUCCESS';
export const GET_REVIEWS_LTHDA_FAIL = 'GET_REVIEWS_LTHDA_FAIL';
export const GET_REVIEWS_LTHDA_RESET = 'GET_REVIEWS_LTHDA_RESET';

//! ORDER
//TODO : CREATE AN ORDER 
export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_REQUEST_SUCCESS = 'ORDER_CREATE_REQUEST_SUCCESS';
export const ORDER_CREATE_REQUEST_FAIL = 'ORDER_CREATE_REQUEST_FAIL';

//TODO: GET AN ORDER BASED ON ID
export const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID';
export const GET_ORDER_BY_ID_SUCCESS = 'GET_ORDER_BY_ID_SUCCESS';
export const GET_ORDER_BY_ID_FAIL = 'GET_ORDER_BY_ID_FAIL';

//TODO: UPDATE ORDER IS_PAID STATUS BASED ON ID
export const PUT_ISPAID_STATUS_ORDER_REQUEST = 'PUT_ISPAID_STATUS_ORDER_REQUEST';
export const PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS = 'PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS';
export const PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL = 'PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL';
export const PUT_ISPAID_STATUS_ORDER_RESET = 'PUT_ISPAID_STATUS_ORDER_RESET';

//TODO: GET ALL ORDERS OF ONE USER BASED ON THE USER ID
export const GET_ORDERS_OF_USERS = 'GET_ORDERS_OF_USERS';
export const GET_ORDERS_OF_USERS_SUCCESS = 'GET_ORDERS_OF_USERS_SUCCESS';
export const GET_ORDERS_OF_USERS_FAIL = 'GET_ORDERS_OF_USERS_FAIL';

//TODO: GET ALL ORDERS AS ADMIN
export const GET_ALL_ORDERS_AS_ADMIN_REQUEST = 'GET_ALL_ORDERS_AS_ADMIN_REQUEST';
export const GET_ALL_ORDERS_AS_ADMIN_SUCCESS = 'GET_ALL_ORDERS_AS_ADMIN_SUCCESS';
export const GET_ALL_ORDERS_AS_ADMIN_FAIL = 'GET_ALL_ORDERS_AS_ADMIN_FAIL';

//TODO: CHANGE DELIVERY STATUS AS ADMIN
export const PUT_IS_DELIVERED_AS_ADMIN_REQUEST = 'PUT_IS_DELIVERED_AS_ADMIN_REQUEST';
export const PUT_IS_DELIVERED_AS_ADMIN_SUCCESS = 'PUT_IS_DELIVERED_AS_ADMIN_SUCCESS';
export const PUT_IS_DELIVERED_AS_ADMIN_FAIL = 'PUT_IS_DELIVERED_AS_ADMIN_FAIL';
export const PUT_IS_DELIVERED_AS_ADMIN_RESET = 'PUT_IS_DELIVERED_AS_ADMIN_RESET';

//? return a null "state" when user logout, clear all the state of the current app 
export const GET_ORDER_OF_USER_RESET = 'GET_ORDER_OF_USER_RESET';

//! ADMIN
//TODO: GET ALL USERS FROM DATABASES 
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL';
export const GET_ALL_USERS_RESET = 'GET_ALL_USERS_RESET';

//TODO: DELETE AN USER BASED ON THERE ID AS AN ADMIN
export const DELETE_USER_AS_ADMIN_REQUEST = 'DELETE_USER_AS_ADMIN_REQUEST';
export const DELETE_USER_AS_ADMIN_SUCCESS = 'DELETE_USER_AS_ADMIN_SUCCESS';
export const DELETE_USER_AS_ADMIN_FAIL = 'DELETE_USER_AS_ADMIN_FAIL';

//TODO: GET A USER BASED ON HIS ID
export const GET_USER_AS_ADMIN_REQUEST = 'GET_USER_AS_ADMIN_REQUEST';
export const GET_USER_AS_ADMIN_SUCCESS = 'GET_USER_AS_ADMIN_SUCCESS';
export const GET_USER_AS_ADMIN_FAIL = 'GET_USER_AS_ADMIN_FAIL';

//TODO: UPDATE USER PROFILE AS AN ADMIN
export const UPDATE_USER_AS_ADMIN_REQUEST = 'UPDATE_USER_AS_ADMIN_REQUEST';
export const UPDATE_USER_AS_ADMIN_SUCCESS = 'UPDATE_USER_AS_ADMIN_SUCCESS';
export const UPDATE_USER_AS_ADMIN_FAIL = 'UPDATE_USER_AS_ADMIN_FAIL';

//TODO: DELETE A PRODUCT BASED ON IT ID AS AN ADMIN
export const DELETE_PRODUCT_AS_ADMIN_REQUEST = 'DELETE_PRODUCT_AS_ADMIN_REQUEST';
export const DELETE_PRODUCT_AS_ADMIN_SUCCESS = 'DELETE_PRODUCT_AS_ADMIN_SUCCESS';
export const DELETE_PRODUCT_AS_ADMIN_FAIL = 'DELETE_PRODUCT_AS_ADMIN_FAIL';
export const DELETE_PRODUCT_AS_ADMIN_RESET = 'DELETE_PRODUCT_AS_ADMIN_RESET';

//TODO: CREATE A SAMPLE PRODUCT AS AN ADMIN
export const CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST = 'CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST';
export const CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS = 'CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS';
export const CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL = 'CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL'; 
export const CREATE_SAMPLE_PRODUCT_RESET = 'CREATE_SAMPLE_PRODUCT_RESET';

//TODO: UPDATE A PRODUCT INFO AS AN ADMIN
export const UPDATE_PRODUCT_AS_ADMIN_REQUEST = 'UPDATE_PRODUCT_AS_ADMIN_REQUEST';
export const UPDATE_PRODUCT_AS_ADMIN_SUCCESS = 'UPDATE_PRODUCT_AS_ADMIN_SUCCESS';
export const UPDATE_PRODUCT_AS_ADMIN_FAIL = 'UPDATE_PRODUCT_AS_ADMIN_FAIL';
export const UPDATE_PRODUCT_AS_ADMIN_RESET = 'UPDATE_PRODUCT_AS_ADMIN_RESET';

//! GET TOP 3 PRODUCTS OF EACH TYPE FOR HOME SCREEN
export const GET_TOP_PRODUCTS_REQUEST = 'GET_TOP_PRODUCTS_REQUEST';

export const GET_TOP_LAPTOPS_SUCCESS = 'GET_TOP_LAPTOPS_SUCCESS';
export const GET_TOP_TVS_SUCCESS = 'GET_TOP_TVS_SUCCESS';
export const GET_TOP_PHONES_SUCCESS = 'GET_TOP_PHONES_SUCCESS';
export const GET_TOP_HEADPHONE_SUCCESS = 'GET_TOP_HEADPHONE_SUCCESS';
export const GET_TOP_GAMES_SUCCESS = 'GET_TOP_GAMES_SUCCESS';

export const GET_TOP_PRODUCTS_FAIL = 'GET_TOP_PRODUCTS_FAIL';

//! ALSO LIKE
export const GET_ALSOLIKE_PRODUCTS_PENDING = 'GET_ALSOLIKE_PRODUCTS_PENDING';
export const GET_ALSOLIKE_PRODUCTS_SUCCESS = 'GET_ALSOLIKE_PRODUCTS_SUCCESS';
export const GET_ALSOLIKE_PRODUCTS_FAIL = 'GET_ALSOLIKE_PRODUCTS_FAIL';

//TODO: GET 6 ALSO LIKES OF LAPTOPS
export const GET_ALSOLIKE_LAPTOPS_PENDING = 'GET_ALSOLIKE_LAPTOPS_PENDING';
export const GET_ALSOLIKE_LAPTOPS_SUCCESS = 'GET_ALSOLIKE_LAPTOPS_SUCCESS';
export const GET_ALSOLIKE_LAPTOPS_FAIL = 'GET_ALSOLIKE_LAPTOPS_FAIL';

//TODO: GET 6 ALSO LIKES OF TVS
export const GET_ALSOLIKE_TVS_PENDING = 'GET_ALSOLIKE_TVS_PENDING';
export const GET_ALSOLIKE_TVS_SUCCESS = 'GET_ALSOLIKE_TVS_SUCCESS';
export const GET_ALSOLIKE_TVS_FAIL = 'GET_ALSOLIKE_TVS_FAIL';

//TODO: GET 6 ALSO LIKES OF PHONES
export const GET_ALSOLIKE_PHONES_PENDING = 'GET_ALSOLIKE_PHONES_PENDING';
export const GET_ALSOLIKE_PHONES_SUCCESS = 'GET_ALSOLIKE_PHONES_SUCCESS';
export const GET_ALSOLIKE_PHONES_FAIL = 'GET_ALSOLIKE_PHONES_FAIL';

//TODO: GET 6 ALSO LIKES OF HEADPHONES 
export const GET_ALSOLIKE_HEADPHONES_PENDING = 'GET_ALSOLIKE_HEADPHONES_PENDING';
export const GET_ALSOLIKE_HEADPHONES_SUCCESS = 'GET_ALSOLIKE_HEADPHONES_SUCCESS';
export const GET_ALSOLIKE_HEADPHONES_FAIL = 'GET_ALSOLIKE_HEADPHONES_FAIL';

//TODO: GET 6 ALSO LIKES GAMES
export const GET_ALSOLIKE_GAMES_PENDING = 'GET_ALSOLIKE_GAMES_PENDING';
export const GET_ALSOLIKE_GAMES_SUCCESS = 'GET_ALSOLIKE_GAMES_SUCCESS';
export const GET_ALSOLIKE_GAMES_FAIL = 'GET_ALSOLIKE_GAMES_FAIL';

//TODO: RESET ARRAY ITEMS OF ALSOLIKES
export const GET_ALSOLIKE_RESET = 'GET_ALSOLIKE_RESET';