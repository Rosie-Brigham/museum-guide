import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.options || [];
  },
  render: function() {
        // MAYBE THIS SHOULD JUST BE REPLACED WITH THE FORM< LETS SEE HOW IT GOES
    return <div className="voting">
        yo
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});