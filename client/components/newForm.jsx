import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.options || [];
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        // MAYBE THIS SHOULD JUST BE REPLACED WITH THE FORM< LETS SEE HOW IT GOES
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});