import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from 'Main';

require('./styles/main.scss');

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('app')
);