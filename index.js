import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
     <BrowserRouter>
    <Switch>
      <Route path="/home" component={Hello} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
