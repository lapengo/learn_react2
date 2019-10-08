import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Navbar from './components/Navbar';


function App() {

  state = {
    login: false
  }
  
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container">
        <div className="row">
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Image' rende={() => (
            this.state.login ? <Image /> : (<Redirect to='/' />)
          )} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
