import React, {Component} from 'react'
import ReactDOM from 'react-dom';



import Home from './home.jsx'
import Info from './info.jsx'
import Generator from './generator.jsx'

const hasVoted = false;

var Main = React.createClass({
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
        <Generator hasVoted={this.props.hasVoted} result={this.props.result} />
        <Info/>
      </section>
    )
  },
})

export default Main
