import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { loadUserInfo, updateUserInfo } from '../redux/actions/adminActions';
import Message from '../components/Message';
import Loading from '../components/Loading';
import FormContainer from '../components/FormContainer';

const AdminUserInfoScreen = ({ match }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);

    const dispatch = useDispatch();
    const userId = match.params.id;
    const { user, loading, error } = useSelector(state => state.userInfoAdmin);
    const { success } = useSelector(state => state.updateUserInfo);

    useEffect(() => {   
        if (!user) {
            dispatch(loadUserInfo(userId));
        } 
    }, [ dispatch, userId, user]);    
    
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAdmin(user.isAdmin);
        }
    }, [user]);

    useEffect(() => {
        dispatch(loadUserInfo(userId));
    }, [success]);

    const submitHandler = () => {
        dispatch(updateUserInfo(name, email, admin, userId));
    }

    return (
        <>
        <Link to='/admin/usersList' className="btn btn-light my-3">
            Go Back
        </Link>
        <FormContainer>
            <h1>Edit User :</h1>
            { error ? <Message variant="danger" content={error} /> : null }
            { loading ? <Loading /> : (
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

                <Form.Group controlId='isadmin'>
                    <Form.Check 
                    type='checkbox'
                    label='Is Admin'    
                    value={admin}
                    checked={admin}
                    onChange={(e) => setAdmin(e.target.checked)}>
                    </Form.Check>
                </Form.Group>

                <Button type="submit" variant='primary'>Update</Button>
            </Form>
            ) }
        </FormContainer>
    </>  
    )
}

export default AdminUserInfoScreen;
