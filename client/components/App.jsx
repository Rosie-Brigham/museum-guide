import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from '../store.js';


import Home from './home.jsx'
import Info from './info.jsx'
import UserForm from './form'

var App = React.createClass({
  getInitialState: function()
  {
    return ({
        view: this.props.view
    });
  },

  render: function() {
    return (
      <Provider store={ store }>
        <section>
          <Home/>
          <UserForm/>
          <Info/>
        </section>
      </Provider>
    )
  },
})

export default App
