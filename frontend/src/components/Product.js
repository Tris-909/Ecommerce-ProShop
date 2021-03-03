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

const CrossPrice = styled.div`
    position: relative;
    &:before {
        position: absolute;
        content: "";
        left: 0;
        top: 45%;
        right: 0;
        border-top: 5px solid red;
        border-color: red;
      
        -webkit-transform:rotate(-10deg);
        -moz-transform:rotate(-10deg);
        -ms-transform:rotate(-10deg);
        -o-transform:rotate(-10deg);
        transform:rotate(-10deg);
    }
`;

const OnSaleTag = styled.div`
    top: 0;
    left: -10%;
    height: 10%;
    width: 100%;
    background-color: red;
    font-family: 'Luckiest Guy', cursive;
    color: white;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 0.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 85%);
`;

const NewReleaseTag = styled.div`
    top: 0;
    left: -10%;
    height: 10%;
    width: 100%;
    background-color: black;
    font-family: 'Luckiest Guy', cursive;
    color: yellow;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 0.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 85%);
`;


const PreOrderTag = styled.div`
    top: 0;
    left: -10%;
    height: 10%;
    width: 100%;
    background-color: orange;
    font-family: 'Luckiest Guy', cursive;
    color: white;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 0.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 85%);
`;


const ImageContainer = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
`;

const TextBold = styled.div`
    font-size: 1.3rem;
    font-weight: 700;

    &:hover {
        text-decoration: none; !important
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
        //TODO: Compare ID to show Heart Icon
        wishList.map((item) => {
            if (item.itemId === product._id) {
                setIsLoved(true);
                setWishListID(item._id);
            }
        });

        //TODO: Switch addItemSuccess to false to not going to cart page
        // dispatch({ type: ADD_PRODUCT_TO_CART_RESET });
    }, [wishList, product]);

    const onAddItemToCartHandler = async (e, id, productName, productImage, productPrice, onSale , countInStock, qty) => {
        e.preventDefault();

        if (user) {
            dispatch({ type: ADD_PRODUCT_TO_CART_RESET });
            await dispatch(addItemToCart(id, productName, productImage, productPrice, onSale, countInStock, 1));
        
            props.history.push('/cart')

        } else {
            props.history.push('/login')
        }
    }

    const onAddItemToWishList = (e) => {
        e.preventDefault();
        dispatch({type: ADD_ITEM_TO_WISH_LIST_RESET});
        
        if (user) {
            dispatch(addItemToWishList(product._id, 
                product.name, 
                product.price, 
                product.image, 
                product.rating, 
                product.numReviews, 
                product.onSale
            ));
            
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
        <Card className="my-3 rounded">
            {/* Only One out of 3 features like : onSale, newProduct, Pre-Order exist on a single product */}
            {
                product.onSale !== 0 ? (
                    <OnSaleTag>ON SALE</OnSaleTag>
                ) : null
            }
            {
                product.newProduct === true ? (
                    <NewReleaseTag> New Release </NewReleaseTag>
                ) : null
            }
            {
                product.preOrder === true ? (
                    <PreOrderTag> Pre-Order </PreOrderTag>
                ) : null
            }
            <Link to={`${link}/${product._id}`}>
                <ImageContainer>
                    <Card.Img src={product.image} variant="top" />
                </ImageContainer>
            </Link>
            <Card.Body>
                <Link to={`${link}/${product._id}`} style={{textDecoration: 'none'}}>
                    <Card.Title as="div">
                        <TextBold>{product.name}</TextBold>
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
                    { 
                        product.onSale !== 0 ? (
                            <>
                            <CrossPrice>$ {product.price}</CrossPrice>
                            <p> $ {product.price - product.onSale} </p>
                            </>
                        ) : ( 
                            <span> 
                                $ {product.price} 
                            </span> 
                        )
                    } 
                    </CardMoneyText>
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" 
                            style={{ fontSize: '1.5rem', marginRight: '1.5rem', cursor: 'pointer' }}
                            onClick={(e) => 
                            onAddItemToCartHandler(e, product._id, product.name, product.image, product.price, product.onSale, 1, 1)}></i>
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
