import React, {useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { getAllUsers, deleteUserAsAdmin } from '../redux/actions/adminActions'; 
import Helmet from '../components/Helmet';

const AdminScreen = ({ history }) => {
    const dispatch = useDispatch();
    const { usersList, loading, error } = useSelector(state => state.adminUsersList);
    const { user } = useSelector(state => state.user);
    const { success } = useSelector(state => state.deletedAdmin);

    useEffect(() => {
        if (user && user.isAdmin) {
            dispatch(getAllUsers());
        } else {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [dispatch, success, history]);

    const deleteHandler = (id) => {
        dispatch(deleteUserAsAdmin(id));
    }

    return (
        <>
            <Helmet title={`Admin Users List | ProShop`} href="/admin/usersList" />
            <h1>Users</h1>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please try again" /> : (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList && usersList.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                <td>{user.isAdmin ? <i className="fas fa-check" style={{color: 'green'}}></i> :  <i className='fas fa-times' style={{color: 'red'}}></i> }</td>
                                <td>
                                    <LinkContainer to={`users/${user._id}/edit`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}   
        </>
    )
}

export default AdminScreen
