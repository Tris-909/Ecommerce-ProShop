import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const AgreeTextContainer = styled.div`
padding: 0px 10px;
border: none;
margin-left: 1rem;
margin-right: 1rem;
background-color:  #f1f1f1;
font-weight: 700;
color: ${props => props.isAgreeded ? "green" : "black"};
`;

const AgreeText = ({ numOfAgrees, useAgreeOrDisAgreeArray, reviewID }) => {
    const [isAgreeded, setIsAgreeded] = useState(false);

    useEffect(() => {
        for (let i = 0; i < useAgreeOrDisAgreeArray.length; i++) {
            if (useAgreeOrDisAgreeArray[i].reviewId == reviewID && useAgreeOrDisAgreeArray[i].agree) {
                setIsAgreeded(true);
            }
        }
    }, [useAgreeOrDisAgreeArray, reviewID]);
    
    return (
        <AgreeTextContainer isAgreeded={isAgreeded}>
            Yes . <span>{numOfAgrees}</span>
        </AgreeTextContainer>
    )
}

export default AgreeText;
