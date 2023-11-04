import './App.css';
import Navbar from './components/menu/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Welcome from './components/welcome/Welcome';
import Resources from './components/resources/Resources';
import Products from './components/products/Products';
import Services from './components/services/Services';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Welcome />
        <div className='page'>
          <Home />
          <Resources />
          <Products />
          <Services />
        </div>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
