import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route } from 'react-router-dom';
// import Route from '../../components/router';
import Home from './mod/index';
import Simple from '../simple';
import Help from '../help';
import List from '../list'
import './index.scss';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/simple" component={Simple} />
    <Route path="/help" component={Help} />
    <Route path="/list" component={List} />
  </Router>,
  document.getElementById('container'),
);
