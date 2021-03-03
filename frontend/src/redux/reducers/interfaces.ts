export interface Action {
    type: string,
    payload?: any[] | string
}

export interface singleProduct {
    _id: string,
    name: string,
    price: number,
    image: string,
    rating: number,
    numReviews: number,
    onSale: number
}

export interface singleWishListItem {
    _id: string,
    itemId: string,
    productName: string,
    productPrice: number,
    productImage: string,
    productRating: number,
    productNumReviews: number,
    onSale: number,
    newProduct: boolean,
    preOrder: boolean,
}

export interface singleCartItem {
    _id: string,
    itemId: string,
    productName: string,
    productImage: string,
    productPrice: number,
    onSale: number,
    newProduct: boolean,
    preOrder: boolean,
    countInStock: number,
    quantity: number
}

export interface agreeAndDisAgree {
    _id: string,
    productId: string,
    reviewId: string,
    agree: boolean 
}