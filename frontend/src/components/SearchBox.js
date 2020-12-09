import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import {withRouter} from 'react-router'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    }

    return (
        <Form onSubmit={submitHandler} inline autoComplete="off">
            <Form.Control 
                type='text' 
                name="q" 
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search for Product"
                className="mr-sm-2 ml-sm-5">
            </Form.Control>
            <Button type="submit" variant="outline-info" className="p-2">Search</Button>
        </Form>
    )
}

export default withRouter(SearchBox);
