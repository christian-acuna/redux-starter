// let's go!
import React from 'react';
import { render } from 'react-dom'

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//react-redux
import { Provider } from 'react-redux';

// import store
import store, { history } from './store';
import AppContainer from './containers/AppContainer'


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}/>
    </Router>
  </Provider>
);




render(router, document.getElementById('root'));
