import React, {useState, useEffect} from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { getUserDetails, updateUserDetails } from '../redux/actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState(null);

    const dispatch = useDispatch();
    const { details, loading, detailError, success } = useSelector(state => state.userDetails);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        if (!user) {
            history.push('/login');
        } else {
            if(!details.name) {
                dispatch(getUserDetails('profile'));
            } else {
                setName(details.name);
                setEmail(details.email);
            }
        }
    }, [dispatch, history, user, details]);

    const submitHandler = (e) => {
        e.preventDefault();        
        if (password !== confirmPassword) {
            setFormError('Your password and confirm password did not match, please try again');
        } else {
            setFormError("");
            //UPDATE PROFILE
            dispatch(updateUserDetails({
                id: user._id,
                name,
                email,
                password
            }));
        }
    }

    return (
        <Row>
            <Col md={4}>
                <h1>Your Profile :</h1>
                { formError ? <Message variant="danger" content={formError} /> : null }
                { detailError ? <Message variant="danger" content={detailError} /> : null }
                { success ? <Message variant="success" content="Update profile successfully !" /> : null }
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

                    <Button type="submit" variant='primary'>Update</Button>
                </Form>
            </Col>
            <Col md={8}>
                <h2>My Orders :</h2>
            </Col>
        </Row>  
    )
}

export default ProfileScreen;