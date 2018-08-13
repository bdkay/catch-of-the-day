import React from 'react';

const Header = (props) => {
  return (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
            of the
          </span>
        Day
      </h1>
      <div className="menu">
        <h3 className="tagline"><span>{ this.props.tagline }</span></h3>
      </div>
    </header>
  );
};

export default Header;