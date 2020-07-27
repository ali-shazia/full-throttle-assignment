import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {getAllData, getUserActivity, getUsers} from './utils/MockApi'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path='/' component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
