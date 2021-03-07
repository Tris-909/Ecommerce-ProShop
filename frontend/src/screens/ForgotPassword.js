import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Col, Row, Alert} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Helmet from '../components/Helmet';
import axios from 'axios';

const ForgotPasswordScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [messageFromServer, setmessageFromServer] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const dispatch = useDispatch();
    const { user, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        if (user) {
            history.push(redirect);
        }
    }, [history, user, redirect]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (email === '') {
            setShowError(true);
            setmessageFromServer('This email is not valid');
        } else {
            axios.post('api/resetPassword/forgotpassword', {email}).then((res) => {
                console.log(res.data);
                if (res.data === 'email not in db') {
                    setShowError(true);
                    setmessageFromServer('This email is not valid');
                } else if (res.data === 'recovery email sent') {
                    setShowError(false);
                    setmessageFromServer('Recovery email has been sent');
                }
            }).catch((error) => {
                console.log(error.data);
            })
        }
    }

    return(
        <FormContainer>
            <Helmet title="Forgot Password | Proshop" />
            <h1>Reset Your Password :</h1>
            {
                showError ? (
                    <Alert variant="danger">
                        {messageFromServer}
                    </Alert>
                ) : null
            }
            {
                !showError && messageFromServer ? (
                    <Alert variant="success">
                        {messageFromServer}
                    </Alert>
                ) : null
            }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Gmail :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your Gmail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Button type="submit" variant='primary'>SEND</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Already have an account ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Log In</Link>
                </Col>
            </Row>
        </FormContainer>  
    );
}

export default ForgotPasswordScreen;