import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            of the
          </span>
          Day
        </h1>
        <div className="menu">
          <h3 className="tagline">{ this.props.tagline }</h3>
        </div>
      </header>
    );
  }
}

export default Header;