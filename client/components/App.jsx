import React, {Component} from 'react'
import Home from './home.jsx'
import Info from './info.jsx'

var App = React.createClass({
  getInitialState: function()
  {
    return ({
        view: this.props.view
    });
  },

  render: function() {
    return (
      <section>
        <Home/>
        <Info/>
      </section>
    )
  },
})

export default App
