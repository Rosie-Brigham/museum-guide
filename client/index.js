import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

// import store from '../store.js';

import App from './components/App'
import List from './components/List'
import Main from './components/main'

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});



const routes = <Route component={App}>
  <Route path="/" component={Main} />
  <Route path="/list" component={List} />
</Route>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Provider store={ store }>
        <Router history={hashHistory}>{routes}</Router>
      </Provider>,
    document.getElementById('app')
  )
})
