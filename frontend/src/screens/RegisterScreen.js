import React, {useState, useEffect} from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {createUser, clearError} from '../redux/actions/userActions';
import Loading from '../components/Loading';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState(null);

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
        dispatch(clearError());
        
        if (password !== confirmPassword) {
            setFormError('Your password and confirm password did not match, please try again');
        } else {
            setFormError("");
            dispatch(createUser(name, email, password));
        }
    }

    return (
        <FormContainer>
            <h1>Sign Up With Us</h1>
            { formError ? <Message content={formError} /> : null }
            { error ? <Message content={error} /> : null }
            { loading ? <Loading /> : null }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email :</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password :</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Your Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Re-Confirm Your Password :</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Re-type Your Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit" variant='primary'>Submit</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Already have an account ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Log In</Link>
                </Col>
            </Row>
        </FormContainer>  
    )
}

export default RegisterScreen;
