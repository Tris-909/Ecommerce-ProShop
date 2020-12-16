import React, {useState, useEffect} from 'react'
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

import Message from '../Message';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid grey;
    padding: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const CardTopSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const CardImageContainer = styled.div`
    width: 40%;
    height: 100%;
    margin-right: 10px;
`;

const CartTextContainer = styled.div`
    width: 60%;
    font-size: 13px;
    font-weight: 800;

    @media (min-width: 450px) {
        margin-top: 10px;
        font-size: 0.8rem;
    }

    @media (min-width: 600px) {
        margin-top: 10px;
        font-size: 1rem;
        align-self: center;
    }

    @media (min-width: 800px) {
        font-size: 1.5rem;
    }
`;

const CardBototmContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardMoneyText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Luckiest Guy', cursive;
`;

const CardButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WishListProductHorizontal = ({ product }) => {
    const [isLoved, setIsLoved] = useState(true);
    const [wishListID, setWishListID] = useState(null);

    const dispatch = useDispatch();
    const { cartItems, addItemSuccess } = useSelector(state => state.cart);
    const { wishList } = useSelector(state => state.wishList);
    const { 
        loading: addItemToWishListLoading, 
        success: addItemToWishListSuccess, 
        error: addItemToWishListError} = useSelector(state => state.addItemToWishList);

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

    return(
        <Card>
            <CardTopSectionContainer>
                <CardImageContainer>
                    <img src={product.productImage} alt={product.productName} style={{ width: '100%' }}/>
                </CardImageContainer>
                <CartTextContainer>
                    {product.productName}
                </CartTextContainer>
            </CardTopSectionContainer>
            <CardBototmContainer>
                <CardMoneyText>
                    $ {product.productPrice}
                </CardMoneyText>
                <CardButtonContainer>
                    <div>
                        <i className="fas fa-cart-plus" 
                            style={{ fontSize: '1.5rem', marginRight: '1.5rem', cursor: 'pointer' }}
                            onClick={(e) => onAddItemToCartHandler(e, product._id)}></i>
                    </div>
                    <div>
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
                    </div>
                </CardButtonContainer>
            </CardBototmContainer>
            {
                addItemSuccess && (cartItems[cartItems.length-1].product === product._id) ? (
                <div style={{marginTop: '1rem'}}>
                    <Message variant="success" content="Add Item To Cart Successfully" /> 
                </div>
                ): null
            }
        </Card>
    )
} 

export default WishListProductHorizontal;