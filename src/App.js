import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Navbar from './components/Navbar';


class App extends Component {

  state = {
    login: true
  }

  render() {
    return (
      <BrowserRouter>

        <Navbar />

        <div className="container">
          <div className="row">
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            {/* <Route path='/image' render={()=>(
              this.state.login ? <Image /> : (<Redirect to='/' />)
            )} /> */}
            <Route path='/image' render={(props)=> <Image {...props} login={this.state.login} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
