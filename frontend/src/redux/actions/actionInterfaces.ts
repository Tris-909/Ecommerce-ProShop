export interface SingleWishListItem {
    _id: string,
    itemId: string,
    productName: string,
    productPrice: number,
    productImage: string,
    productRating: number,
    productNumReviews: number
} 

export interface SingleCartItem {
    _id: string,
    itemId: string,
    productName: string,
    productImage: string,
    productPrice: number,
    countInStock: number,
    quantity: number
}

export interface singleAgreeOrDisAgreeVote {
    _id: string,
    productId: string,
    reviewId: string,
    agree: boolean
}

export interface User {
    _id: string,
    name: string,
    email: string,
    isAdmin: boolean,
    wishList?: SingleWishListItem[],
    cartList?: SingleCartItem[],
    agreeAndDisAgree?: singleAgreeOrDisAgreeVote[],
    token: string
}
