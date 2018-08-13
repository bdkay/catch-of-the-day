import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  // Constructors are good if we want to bind functions we're going to use more than once to the class
  
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  
  goToStore(event){
    event.preventDefault();
    console.log("You changed the url");
    // First grab the text from the box
    
    // Transition from / to /store/:storeId
  }
  
  render(){
    // We can use this inside render because render is always bound to the component
    return (
      // Can bind this function to the class onSubmit
      // <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
  
      // (e) => this.goToStore(e) also binds goToStore
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
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