import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Result from './Result';
import UserForm from './form';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.result ?
        <Result ref="winner" result={this.props.result} /> :
        <UserForm {...this.props} />}
    </div>;
  }
});