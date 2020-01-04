import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from "./component/Dashboard";
import './assets/css/element.css';
import './assets/css/dashboard.css';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
