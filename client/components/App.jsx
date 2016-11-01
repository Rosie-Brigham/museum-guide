import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from '../store.js';


import Home from './home.jsx'
import Info from './info.jsx'
import Generator from './generator.jsx'


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
          <Generator hasVoted="false" result="result"/>
          <Info/>
        </section>
      </Provider>
    )
  },
})

export default App
