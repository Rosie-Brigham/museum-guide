import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App'
import List from './components/List'
import Generator from './components/generator'


const routes = <Route component={App}>
  <Route path="/" component={Generator} />
  <Route path="/list" component={List} />
</Route>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
  )
})
