import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from '../store.js';


import Home from './home.jsx'
import Info from './info.jsx'
import Main from './generator.jsx'

const hasVoted = false;

// export default React.createClass({
//   render: function() {
//     return React.cloneElement(this.props.children, {hasVoted: hasVoted, result: "result"});
//   }
// });

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
          { React.cloneElement(this.props.children, {hasVoted: hasVoted, result: "result"}) }
          <Info/>
        </section>
      </Provider>
    )
  },
})

export default App
