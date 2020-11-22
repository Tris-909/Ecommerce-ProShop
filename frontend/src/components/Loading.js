import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
    );
}
