import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {stickAReviewAsDisAgree} from '../../../redux/actions/userActions';
import { SET_A_REVIEW_AS_DISAGREE_RESET } from '../../../redux/actions/actionTypes';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const DisAgreeTextContainer = styled.div`
padding: 0px 10px;
border: none;
margin-left: 1rem;
margin-right: 1rem;
cursor: pointer;
background-color:  #f1f1f1;
font-weight: 700;
color: ${props => props.isDisAgreeded ? "red" : "black"};

@media (max-width: 420px) {
    margin-left: 0rem;
    margin-top: 1rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 40%;
}
`;

const DisAgreeText = (props) => {
    const dispatch = useDispatch();
    const { numOfDisAgrees, useAgreeOrDisAgreeArray, reviewID, productID, history } = props;
    const [isDisAgreeded, setIsDisAgreeded] = useState(false);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        for (let i = 0; i < useAgreeOrDisAgreeArray.length; i++) {
            if (useAgreeOrDisAgreeArray[i].reviewId == reviewID && !useAgreeOrDisAgreeArray[i].agree) {
                setIsDisAgreeded(true);
            }
        }
    }, [useAgreeOrDisAgreeArray, reviewID]);
    
    const onClickHandler = (e) => {
        e.preventDefault();
        if (!user) {
            history.push('/login');
        }
        dispatch({ type: SET_A_REVIEW_AS_DISAGREE_RESET });
        dispatch(stickAReviewAsDisAgree(productID, reviewID));
    }

    return (
        <DisAgreeTextContainer isDisAgreeded={isDisAgreeded} onClick={(e) => onClickHandler(e)}>
            No . <span>{numOfDisAgrees}</span>
        </DisAgreeTextContainer>
    )
}

export default withRouter(DisAgreeText);