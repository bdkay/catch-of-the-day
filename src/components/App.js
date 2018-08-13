import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header
            age="5000"
            tagline="Brendon is cool"
            cool={ true }
          />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;