import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../redux/actions/cartActions';
import {ADD_PRODUCT_TO_CART_RESET} from '../redux/actions/actionTypes';

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
`;

const ButtonContainer = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Product = ({ product, link = '/product' }) => {
    const dispatch = useDispatch();
    const { cartItems, addItemSuccess } = useSelector(state => state.cart);

    const onAddItemToCartHandler = (e, id) => {
        e.preventDefault();
        dispatch({ type: ADD_PRODUCT_TO_CART_RESET });
        dispatch(addItemToCart(id, 1));
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
                {
                    addItemSuccess && (cartItems[cartItems.length-1].product === product._id) ? (
                    <div style={{marginTop: '1rem'}}>
                        <Message variant="success" content="Add Item To Cart Successfully" /> 
                    </div>
                    ): null
                }
                <FootProductContainer>
                    <CardMoneyText>
                        $ {product.price}
                    </CardMoneyText>

                    <ButtonContainer>
                        <i className="fas fa-cart-plus" 
                            style={{ fontSize: '1.5rem', marginRight: '1.5rem', cursor: 'pointer' }}
                            onClick={(e) => onAddItemToCartHandler(e, product._id)}></i>
                        <i className="far fa-heart" style={{ fontSize: '1.5rem', cursor: 'pointer' }} ></i>
                    </ButtonContainer>
                </FootProductContainer>
            </Card.Body>
        </Card>
    )
}

export default Product
