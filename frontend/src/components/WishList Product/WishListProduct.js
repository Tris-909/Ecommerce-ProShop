import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../../redux/actions/cartActions';
import {
    addItemToWishList, 
    removeAnItemFromWishList
} from '../../redux/actions/wishListActions';
import {
    ADD_PRODUCT_TO_CART_RESET,
    ADD_ITEM_TO_WISH_LIST_RESET,
    REMOVE_ITEM_FROM_WISH_LIST_RESET
} from '../../redux/actions/actionTypes';

import Rating from '../Rating';
import Message from '../Message';

const CardMoneyText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 1rem;
    font-family: 'Luckiest Guy', cursive;
`;

const FootProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonContainer = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WishListProduct = ({ product, showList }) => {
    const [isLoved, setIsLoved] = useState(true);
    const [wishListID, setWishListID] = useState(null);

    const dispatch = useDispatch();
    const { cartItems, addItemSuccess } = useSelector(state => state.cart);
    const { wishList } = useSelector(state => state.wishList);
    const { 
        loading: addItemToWishListLoading, 
        success: addItemToWishListSuccess, 
        error: addItemToWishListError} = useSelector(state => state.addItemToWishList);
    const {
        loading: removeItemFromWishListLoading,
        success: removeItemFromWishListSuccess,
        error: removeItemFromWishListError
    } = useSelector(state => state.removeItemFromWishList);

    useEffect(() => {
        wishList.map((item) => {
            if (item.itemId === product.itemId) {
                setIsLoved(true);
                setWishListID(item._id);
            }
        })
    }, [wishList, product]);

    const onAddItemToCartHandler = (e, id) => {
        e.preventDefault();
        dispatch({ type: ADD_PRODUCT_TO_CART_RESET });
        dispatch(addItemToCart(id, 1));
    }

    const onAddItemToWishList = (e) => {
        e.preventDefault();
        dispatch({type: ADD_ITEM_TO_WISH_LIST_RESET});
        dispatch(addItemToWishList(product._id, product.name, product.price, product.image ,product.rating, product.numReviews));
        if (addItemToWishListSuccess) {
            setIsLoved(true);
        }
    }

    const onRemoveItemFromWishList = (e) => {
        e.preventDefault();
        dispatch({ type: REMOVE_ITEM_FROM_WISH_LIST_RESET });
        dispatch(removeAnItemFromWishList(wishListID));
        setIsLoved(false);
    }

    
    return (
        <Card className="my-3 p-3 rounded" style={{ flexDirection: showList ? 'row' : 'column' }}>
            <Link to={`/product/${product.itemId}`}>
                <Card.Img src={product.productImage} variant="top" style={{ width: showList ? '50%' : '100%' }} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.itemId}`}>
                    <Card.Title as="div" style={{ fontSize: showList ? '1.5rem' : '1rem' }}>
                        <strong>{product.productName}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating 
                        rating={product.productRating} 
                        text={`${product.productNumReviews} reviews`}
                    />
                </Card.Text>
                {
                    addItemSuccess && (cartItems[cartItems.length-1].product === product._id) ? (
                    <div style={{marginTop: '1rem'}}>
                        <Message variant="success" content="Add Item To Cart Successfully" /> 
                    </div>
                    ): null
                }
                <FootProductContainer>
                    <CardMoneyText>
                        $ {product.productPrice}
                    </CardMoneyText>

                    <ButtonContainer>
                        <i className="fas fa-cart-plus" 
                            style={{ fontSize: '1.5rem', marginRight: '1.5rem', cursor: 'pointer' }}
                            onClick={(e) => onAddItemToCartHandler(e, product._id)}></i>
                        {
                            isLoved ? (
                                //TODO: Full Heart
                                <span style={{color: '#f01838'}} onClick={(e) => onRemoveItemFromWishList(e)}>
                                    <i className="fas fa-heart" style={{ fontSize: '1.5rem', cursor: 'pointer' }} ></i>
                                </span>
                            ) : (
                                //TODO: Empty Heart
                                <span style={{color: '#f01838'}} onClick={(e) => onAddItemToWishList(e)}>
                                    <i className="far fa-heart" style={{ fontSize: '1.5rem', cursor: 'pointer' }} ></i>
                                </span>
                            )
                        }
                    </ButtonContainer>
                </FootProductContainer>
            </Card.Body>
        </Card>
    )
}

export default WishListProduct;
