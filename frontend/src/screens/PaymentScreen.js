import React, {useState} from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckOutStep from '../components/CheckOutStep';
import { savePaymentMethod } from '../redux/actions/cartActions';
import Helmet from '../components/Helmet';

const PaymentScreen = ({ history }) => {
    const dispatch = useDispatch();

    //? Directing user to shipping page if they don't have the shipping address and try to access
    //? the page through url
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;   
    if (!shippingAddress) {
        history.push('/shipping')
    }
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/placeorder');
    }

    return (
        <FormContainer>
            <Helmet title={`Payment Selection | ProShop`} href="/payment" />
            <CheckOutStep step1 step2 step3/>
            <h1>Payment Methods :</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>    
                </Form.Group>    

                <Col className="mb-3">
                    <Form.Check 
                        type="radio" 
                        label="PayPal or CreditCard" 
                        id="PayPal" 
                        name="paymentMethod" 
                        value="PayPal" 
                        checked 
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Col>

                <Button type="submit" variant="primary"> Continue </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen;
