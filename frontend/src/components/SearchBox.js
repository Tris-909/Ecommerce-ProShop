import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import {withRouter} from 'react-router'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 990);
    
    //TODO: Hide or Show the sub nav-bar when screenSize < 950
    const updateMedia = () => {
        setScreenWidth(window.innerWidth <= 991);
      };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    }

    return (
        <Form onSubmit={submitHandler} inline autoComplete="off" style={{ width: screenWidth ? '100%' : '60%', marginTop: screenWidth ? '1rem' : '0rem'}}>
            <Container>
                <Form.Control 
                    type='text' 
                    name="q" 
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search for Product"
                    className="mr-sm-2"
                    style={{width: '60%'}}>
                </Form.Control>
                <Button type="submit" variant="outline-dark" className="p-2">Search</Button>
            </Container>
        </Form>
    )
}

export default withRouter(SearchBox);
