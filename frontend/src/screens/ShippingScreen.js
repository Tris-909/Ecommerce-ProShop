import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../redux/actions/cartActions';
import CheckOutStep from '../components/CheckOutStep';
import Helmet from '../components/Helmet';

const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({
            address,
            city,
            postalCode, 
            country
        }));
        history.push('/payment');
    }

    return (
        <FormContainer>
            <Helmet title={`Shipping Info | ProShop`} href="/shipping" />
            <CheckOutStep step1 step2 />
            <h1>Your Shipping Address :</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Your Address :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your Address" 
                        value={address} 
                        required
                        onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>City :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your City" 
                        value={city} 
                        required
                        onChange={(e) => setCity(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>PostalCode :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="PostalCode" 
                        value={postalCode} 
                        required
                        onChange={(e) => setPostalCode(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>Country :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your City" 
                        value={country} 
                        required
                        onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary"> Continue </Button>

            </Form>
        </FormContainer>
    )
}

export default ShippingScreen;
