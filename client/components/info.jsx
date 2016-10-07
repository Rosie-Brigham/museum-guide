import React, {Component} from 'react'

var Info = React.createClass({
  render: function() {
    return (
      <div className="row info">
        <div className="twelve columns full-height">
        <img className="icon" src="../images/up-arrow.png"/>
          <h1>Que?</h1>
          <p>
          The London Museum guide is the definiative guide for museums, galleries and historic houses around london.

          Our bespoke reccomendation generator will create a day out tailored for what you feel like, so you always have a new thing to look at.
          </p>
        </div>
      </div>
    )
  },
})


export default Info