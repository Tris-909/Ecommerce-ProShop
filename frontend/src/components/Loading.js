import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading({ size: lg }) {
    return (
        <Spinner animation="border" size={lg} style={{ width: '100px', height: '100px' }} /> 
    );
}
