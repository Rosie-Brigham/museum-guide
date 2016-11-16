import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Result from './Result';
import UserForm from './form';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.result ?
        <Result ref="winner" result={this.props.result} /> :
        <UserForm {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']), // get the results of the form somehow?
    winner: state.get('winner') // get the result somehow
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);