import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const DisAgreeTextContainer = styled.div`
padding: 0px 10px;
border: none;
margin-left: 1rem;
margin-right: 1rem;
background-color:  #f1f1f1;
font-weight: 700;
color: ${props => props.isDisAgreeded ? "red" : "black"};
`;

const DisAgreeText = ({ numOfDisAgrees, useAgreeOrDisAgreeArray, reviewID }) => {
    const [isDisAgreeded, setIsDisAgreeded] = useState(false);

    useEffect(() => {
        for (let i = 0; i < useAgreeOrDisAgreeArray.length; i++) {
            if (useAgreeOrDisAgreeArray[i].reviewId == reviewID && !useAgreeOrDisAgreeArray[i].agree) {
                setIsDisAgreeded(true);
            }
        }
    }, [useAgreeOrDisAgreeArray, reviewID]);
    
    return (
        <DisAgreeTextContainer isDisAgreeded={isDisAgreeded}>
            No . <span>{numOfDisAgrees}</span>
        </DisAgreeTextContainer>
    )
}

export default DisAgreeText;