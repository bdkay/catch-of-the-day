import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  goToStore(event){
    event.preventDefault();
    console.log("You changed the url");
    // First grab the text from the box
    
    // Transition from / to /store/:storeId
  }
  
  render(){
    // We can use this inside render because render is always bound to the component
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={(input) => { this.storeInput = input; }}
          defaultValue={ getFunName() }
          required placeholder="Store Name"
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;