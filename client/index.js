import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App'
import List from './components/List'
import Main from './components/main'

const routes = <Route component={App}>
  <Route path="/" component={Main} />
  <Route path="/list" component={List} />
</Route>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
  )
})
