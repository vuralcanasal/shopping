import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartView from './views/CartView'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} exact />
          <Route path='/product/:id' component={ProductView} />
          <Route path='/cart/:id?' component={CartView} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
