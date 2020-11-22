import React from 'react'
import {Alert} from 'react-bootstrap';

const Message = ({content}) => {
    return (
        <Alert variant='danger'>
            {content}
        </Alert>
    )
}

export default Message; 
