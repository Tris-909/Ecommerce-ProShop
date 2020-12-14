import React, {useState} from 'react'
import {Alert} from 'react-bootstrap';
import styled from 'styled-components';

const XSymbol = styled.strong`
    position: absolute;
    top: 0;
    right: 2%;
    cursor: pointer;
`;

const Message = ({content, variant}) => {
    const [show, setShow] = useState(true);
    
    const onClickHandler = (e) => {
        e.preventDefault();
        setShow(false);
    }

    return (
        <Alert 
            variant={variant} 
            style={{ 
                position: 'relative', 
                display: show ? 'initial' : 'none',
                marginBottom: '1rem'
            }}
            >
            <XSymbol onClick={(e) => onClickHandler(e)}>X</XSymbol>
            {content}
        </Alert>
    )
}

export default Message; 
