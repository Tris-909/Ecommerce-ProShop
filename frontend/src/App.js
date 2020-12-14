import React from 'react';
import Header from './components/Header';
import SubNavbar from './components/SubNavbar';
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
import ProductListAdminScreen from './screens/ProductListAdminScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import AdminOrdersScreen from './screens/AdminOrdersScreen';
import LaptopScreen from './screens/LaptopScreen';
import SearchScreen from './screens/SearchScreen';
import TVScreen from './screens/TVScreen';
import PhonesScreen from './screens/phonesScreen';
import HeadphonesScreen from './screens/HeadphoneScreen';
import GamesScreen from './screens/GamesScreen';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import styled from 'styled-components';

const MarginContainer = styled.div`
margin-top: 0%;  
margin-left: 5%;
margin-right: 5%;
`;

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header/>
        <SubNavbar />
      <main className='py-3'>
        <MarginContainer>  
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/laptops" component={LaptopScreen} exact />
          <Route path="/tvs" component={TVScreen} exact />
          <Route path="/phones" component={PhonesScreen} exact />
          <Route path="/headphones" component={HeadphonesScreen} exact />
          <Route path="/gaming" component={GamesScreen} exact />
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
          <Route path="/admin/productsList" component={ProductListAdminScreen} exact />
          <Route path="/admin/productsList/:pageNumber" component={ProductListAdminScreen} />
          <Route path="/admin/products/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/ordersList" component={AdminOrdersScreen} exact />
          <Route path="/search/:keyword" component={SearchScreen} exact />
          <Route path="/page/:pageNumber" component={SearchScreen} />
          <Route path="/search/:keyword/page/:pageNumber" component={SearchScreen} />
          <Route path="/" component={HomeScreen} exact />
        </MarginContainer>
      </main>
      <Footer/>
      </ScrollToTop>
    </Router>
  );
}

export default App;
