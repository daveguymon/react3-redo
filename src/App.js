import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ListAllTasks from './ListAllTasks';
import DetailedView from './DetailedView';


export default class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Switch>
          <Route exact path="/" component={ListAllTasks} />
          <Route path="/:index/:id" component={DetailedView} />
        </Switch>
      </div>
    );
  }
}
