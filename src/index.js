import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <Router>
      <Switch>
        { /* When at the homepage, show the StorePicker component */ }
        <Route exact path="/" component={StorePicker} />
        { /* After a storeId has been set, show the main app component */ }
        <Route path="/store/:storeId" component={App} />
      </Switch>
    </Router>
  );
};

render(<Root />, document.getElementById('main'));