import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScren from './screens/HomeScren';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <HomeScren />
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
