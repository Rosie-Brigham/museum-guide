import React, {Component} from 'react'
import ReactDOM from 'react-dom';

const hasVoted = false;

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {hasVoted: hasVoted, result: "fOOBUM"});
  }
});
