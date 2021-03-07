import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Form, Button, Col, Row, Alert} from 'react-bootstrap';
import Helmet from '../components/Helmet';
import LoadingScreen from '../components/LoadingScreen';
import FormContainer from '../components/FormContainer';

const ResetPasswordAfterLink = ({ match, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [update, setUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [notMatch, setNotMatch] = useState(false);

    useEffect(() => {
        axios.get(`/resetPassword/${match.params.token}`).then((res) => {
            console.log(res);
            if (res.data.message === 'password reset link a-ok') {
                setEmail(res.data.email);
                setUpdate(false);
                setIsLoading(false);
                setError(false);
            } else {
                setUpdate(false);
                setIsLoading(false);
                setError(true);
            }
        }).catch((err) => {
            console.log(err.data);
        });
    }, []);
    
    useEffect(() => {
        if (update === true) {
            history.push('/login');
        }
    }, [update]);

    const updatePasswordViaEmail = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setNotMatch(true);
        } else {
            await axios.post('/updatePasswordViaEmail', {
                email: email,
                password: password
            }).then((res) => {
                if (res.data.message === 'password updated') {
                    setUpdate(true);
                    setError(false);
                } else {
                    setUpdate(false);
                    setError(true);
                }
            }).catch((error) => {
                console.log(error.data);
            });
        }
    }

    if (error) {
        console.log(error);
        return(
            <>
                <Helmet title="Reset Password | Proshop" />
                <h1> Something wrong happens, please send another reset link again ! </h1>
                <Row className="py-3">
                    <Col>
                        <Link to={'/forgotpassword'}> 
                            Click here to comback to Forgot Password Screen again 
                        </Link>
                    </Col>
                </Row>
            </>
        )
    } else if (isLoading) {
        return( <LoadingScreen /> );
    } else {
        return(
            <FormContainer>
                  <Helmet title="Reset Password | Proshop" />
                  <Form onSubmit={updatePasswordViaEmail}>
                    <h1> Reset Your Password For {email} : </h1>
                    {
                        notMatch ? (
                            <Alert variant="danger">
                                Password and Confirmed Password are not matched !
                            </Alert>
                        ) : null
                    }
                    {
                        update ? (
                            <Alert variant="success">
                                You have updated your password successfully !
                            </Alert>
                        ) : null
                    }
                    <Form.Group controlId='password'>
                        <Form.Label>New Passowrd :</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Re-type New Passowrd :</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Re-type Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    <Button type="submit" variant='primary'>RESET</Button>

                  </Form>
            </FormContainer>
        );
    }
}

export default ResetPasswordAfterLink;