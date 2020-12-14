import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row} from 'react-bootstrap';
import styled from 'styled-components';

const WishListScreen = () => {
    const { user } = useSelector(state => state.user);

    return (
        <div>
            <h1> Wish List </h1>
            <div>
                <div>clear wish list</div>
                <div>show grid or show list</div>
            </div>
            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>

            </Row>
        </div>
    )
}

export default WishListScreen
