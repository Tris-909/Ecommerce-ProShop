import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL
} from './actionTypes';
import axios from 'axios';

const getAllUsers = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_ALL_USERS
        });

        const { user: {user} } = getState();
        const config = {
            headers: {
                'Content-Type': 'applicaton/json',
                'Authorization': `Bearer ${user.token}`
            }
        }

        const { data } = await axios.get('/api/users', config);

        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_ALL_USERS_FAIL,
            error:  error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export {
    getAllUsers
}