import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const hasVoted = false;

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {hasVoted: hasVoted, result: "fOOBUM"});
  }
});
