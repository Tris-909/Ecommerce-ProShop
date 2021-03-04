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

export interface SingleTopProduct {
    _id: string,
    image: string,
    name: string,
    rating: number,
    numReviews: number,
    price: number,
    category: string
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

export interface SingleStoreInfo {
    _id: string,
    name: string,
    address: string,
    phone: string,
    link: string
}