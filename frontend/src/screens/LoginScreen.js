import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import LoadingScreen from '../components/LoadingScreen';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import { loginUser } from '../redux/actions/userActions';
import Helmet from '../components/Helmet';

const LoginScreen = ({ location, history }) => {
    const dispatch = useDispatch(); 
    const {user, loading, error} = useSelector(state => state.user);
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user) {
            history.push(redirect)
        }   
    }, [history, user, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    }

    return (
        <FormContainer>
            <Helmet title="Log In | ProShop" href="/login" />
            <h1>Sign In</h1>
            { error ? <Message variant="danger" content={error} /> : null }
            { loading ? <LoadingScreen /> : (
                <>
                <Form onSubmit={submitHandler}>
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
                 
                 <Button type="submit" variant='primary'>Sign In</Button>
                </Form>

                <Row className="py-3">
                    <Col>
                        Don't have an account ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Click Here !</Link>
                    </Col>
                </Row>
                </>
            ) }
        </FormContainer>    
    )
}

export default LoginScreen;
