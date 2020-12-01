import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import AdminUserInfoScreen from './screens/AdminUserInfoScreen';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const { user } = useSelector(state => state.user);

  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} exact /> 
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/shipping" component={ShippingScreen} exact />
          <Route path="/payment" component={PaymentScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/orders/:id" component={OrderScreen} />
          <Route path="/admin/usersList" component={AdminScreen} exact />
          <Route path="/admin/users/:id/edit" component={AdminUserInfoScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
