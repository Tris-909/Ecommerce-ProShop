import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {
    addItemToCart,
    getAllItemsCart
} from '../../redux/actions/cartActions';
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

const Container = styled.div`
    border: 0.5px solid grey;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductName = styled.div`
    font-size: 1.2rem;
    font-weight: 800;
`;

const LinkContainerForText = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;
`;

const MoneyText = styled.div`
    font-family: Rokkitt;
    font-size: 2rem;
    font-weight: 800;
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

const AlsoLikeProduct = (props) => {
    const {itemId, productName, productPrice, productImage, numReviews, rating} = props.product;
    const [isLoved, setIsLoved] = useState(false);
    const [wishListID, setWishListID] = useState(null);

    const dispatch = useDispatch();
    const { addItemSuccess } = useSelector(state => state.cart);
    const { cartItems } = useSelector(state => state.cartList);
    const { user } = useSelector(state => state.user);
    const { wishList } = useSelector(state => state.wishList);
    const { success: addItemToWishListSuccess } = useSelector(state => state.addItemToWishList);

    useEffect(() => {
        wishList.map((item) => {
            if (item.itemId === itemId) {
                setIsLoved(true);
                setWishListID(item._id);
            }
        })
    }, [wishList, itemId]);

    useEffect(() => {
        dispatch(getAllItemsCart());
    }, [dispatch, addItemSuccess]);

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
            dispatch(addItemToWishList(itemId, productName, productPrice, productImage, rating, numReviews));
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
            <Container>
                <Link to={`/product/${itemId}`}>
                    <img src={productImage} alt={itemId} style={{width: '100%'}} />
                </Link>
                <LinkContainerForText to={`/product/${itemId}`}>
                    <ProductName>{productName}</ProductName>
                </LinkContainerForText>
                {
                    addItemSuccess ? cartItems.map((item) => {
                        if (item.itemId == itemId) {
                            return(
                            <div style={{marginTop: '1rem'}}>
                                <Message variant="success" content="Add Item To Cart Successfully" addToCart={true} /> 
                            </div>
                            );
                        }
                    }) : null
                }
                <BottomContainer>
                    <MoneyText>$ {productPrice}</MoneyText>
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" 
                            style={{ fontSize: '1.5rem', marginRight: '1.5rem', cursor: 'pointer' }}
                            onClick={(e) => 
                            onAddItemToCartHandler(e, itemId, productName, productImage, productPrice, 10, 1)}></i>
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
                </BottomContainer>
            </Container>
    )
}

export default withRouter(AlsoLikeProduct);
