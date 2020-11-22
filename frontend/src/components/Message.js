import React from 'react'
import {Alert} from 'react-bootstrap';

const Message = ({content, variant}) => {
    return (
        <Alert variant={variant}>
            {content}
        </Alert>
    )
}

export default Message; 
