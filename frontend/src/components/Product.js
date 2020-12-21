import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import {
    addItemToCart,
    getAllItemsCart
} from '../redux/actions/cartActions';
import {
    addItemToWishList, 
    removeAnItemFromWishList
} from '../redux/actions/wishListActions';
import {
    ADD_PRODUCT_TO_CART_RESET,
    ADD_ITEM_TO_WISH_LIST_RESET,
    REMOVE_ITEM_FROM_WISH_LIST_RESET
} from '../redux/actions/actionTypes';

import Rating from './Rating';
import Message from './Message';

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

    @media (max-width: 360px) {
        flex-direction: column;
    }
`;

const ButtonContainer = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        width: 100%;
        justify-content: space-between;
    }
`;

const Product = (props) => {
    const { product, link = '/product' } = props;
    const [isLoved, setIsLoved] = useState(false);
    const [wishListID, setWishListID] = useState(null);

    const dispatch = useDispatch();
    const { cartItems, addItemSuccess } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    const { wishList } = useSelector(state => state.wishList);
    const { success: addItemToWishListSuccess } = useSelector(state => state.addItemToWishList);

    useEffect(() => {
        wishList.map((item) => {
            if (item.itemId === product._id) {
                setIsLoved(true);
                setWishListID(item._id);
            }
        })
    }, [wishList, product]);

    const onAddItemToCartHandler = (e, id, productName, productImage, productPrice, countInStock) => {
        e.preventDefault();

        if (user) {
            dispatch({ type: ADD_PRODUCT_TO_CART_RESET });
            dispatch(addItemToCart(id, productName, productImage, productPrice, countInStock, 1));
        } else {
            props.history.push('/login')
        }
    }

    const onAddItemToWishList = (e) => {
        e.preventDefault();
        dispatch({type: ADD_ITEM_TO_WISH_LIST_RESET});
        
        if (user) {
            dispatch(addItemToWishList(product._id, product.name, product.price, product.image ,product.rating, product.numReviews));
            if (addItemToWishListSuccess) {
                setIsLoved(true);
            }
        } else {
            props.history.push('/login');
        }
    }

    const onRemoveItemFromWishList = (e) => {
        e.preventDefault();
        dispatch({ type: REMOVE_ITEM_FROM_WISH_LIST_RESET });
        
        if (user) {
            dispatch(removeAnItemFromWishList(wishListID));
            setIsLoved(false);
        } else {
            props.history.push('/login');
        }
    }

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`${link}/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`${link}/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating 
                        rating={product.rating} 
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>

                <FootProductContainer>
                    <CardMoneyText>
                        $ {product.price}
                    </CardMoneyText>

                    <ButtonContainer>
                        <i className="fas fa-cart-plus" 
                            style={{ fontSize: '1.5rem', marginRight: '1.5rem', cursor: 'pointer' }}
                            onClick={(e) => 
                            onAddItemToCartHandler(e, product._id, product.name, product.image, product.price, product.countInStock, 1)}></i>
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

export default withRouter(Product)
