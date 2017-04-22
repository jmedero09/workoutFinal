import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import * as actions from './actions';
var store = require('./store/configureStore').configure();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
