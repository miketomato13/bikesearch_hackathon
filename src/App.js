import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
