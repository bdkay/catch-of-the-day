import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  render(){
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          defaultValue={ getFunName() }
          required placeholder="Store Name"
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;