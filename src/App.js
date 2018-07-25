import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team'
import Us from './components/Team/Us';
import Product from './components/Product';
import Partnership from './components/Partnership';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <Footer/>
      </div>

    );
  }
}

export default App;
