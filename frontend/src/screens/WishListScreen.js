import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import {getWishList, removeAllItemsFromWishList} from '../redux/actions/wishListActions';
import {REMOVE_ALL_ITEMS_WISHLIST_RESET} from '../redux/actions/actionTypes';
import WishListProduct from '../components/WishList Product/WishListProduct';
import WishListProductHorizontal from '../components/WishList Product/WishListProductHorizontal';
import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

const DisplayContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DisplayButtonContainer = styled.div`
    border: 1px solid black;
    margin-left: 1rem;
    margin-rigth: 1rem;
    padding: 10px;
    cursor: pointer;
`;

const ClearWishListButton = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 10px;
    border: none;

    @media (max-width: 350px) {
        padding: 8px;
        font-size: 0.7rem;
    }
`;

const WishListText = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: black;
    font-family: Rokkitt;

`;

const NoItemText = styled.div`
    font-size: 3rem;
    font-weight: 700;
    font-family: Rokkitt;
    margin-top: 3rem;
    text-align: center;
`;

const WishListScreen = () => {
    const dispatch = useDispatch();
    const [showGrid, setShowGrid] = useState(true);
    const { user } = useSelector(state => state.user);
    const { wishList, loading, error } = useSelector(state => state.wishList)
    const { success: removeItemFromWishListSuccess } = useSelector(state => state.removeItemFromWishList);
    const { success: addItemToWishListSuccess } = useSelector(state => state.addItemToWishList);
    const { success: removeAllItemsFromWishListSuccess } = useSelector(state => state.removeAllItemsFromWishList);

    const swapToShowGridMode = (e) => {
        e.preventDefault();
        setShowGrid(true);
    }

    const swapToShowListMode = (e) => {
        e.preventDefault();
        setShowGrid(false);
    }

    const clearWishList = (e) => {
        e.preventDefault();
        dispatch({ type: REMOVE_ALL_ITEMS_WISHLIST_RESET });
        dispatch(removeAllItemsFromWishList());
    }

    useEffect(() => {
        dispatch(getWishList());
    }, [dispatch, removeItemFromWishListSuccess, addItemToWishListSuccess, removeAllItemsFromWishListSuccess]);

    return (
        <div>
            <WishListText> Wish List </WishListText>
            <FlexContainer>
                <ClearWishListButton onClick={(e) => clearWishList(e)} style={{ visibility: wishList.length===0 ? 'hidden' : 'initial' }}>Clear Wish List</ClearWishListButton>
                <DisplayContainer>
                    <DisplayButtonContainer onClick={(e) => swapToShowGridMode(e)}>
                        <i className="fas fa-th-large"></i>
                    </DisplayButtonContainer>
                    <DisplayButtonContainer onClick={(e) => swapToShowListMode(e)}>
                        <i className="fas fa-list"></i>
                    </DisplayButtonContainer>
                </DisplayContainer>
            </FlexContainer>
            <Row style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: showGrid ? 'initial' : 'column',
                transition: 'all .5s'}}>
                {
                    wishList.length !== 0 ? wishList.map((item) => {
                        if (showGrid) {
                            return(
                                <Col key={item._id} sm={12} md={4} lg={4} xl={4}>
                                    <WishListProduct product={item} /> 
                                </Col>
                            )
                        } else {
                            return(
                                <Col key={item._id}>
                                    <WishListProductHorizontal product={item} />
                                </Col>
                            )
                        }
                    }) : (
                        <NoItemText>You Have No Items</NoItemText>
                    )
                }
            </Row>
        </div>
    )
}

export default WishListScreen
