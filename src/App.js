import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/css/element.css';
import './assets/css/dashboard.css';

// import Login from "./component/Login";
import Dashboard from "./component/Dashboard";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
