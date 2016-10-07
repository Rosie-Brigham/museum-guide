import React, {Component} from 'react'

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="row landing">
        <div className="twelve columns">
          <h1>London Museum Guide</h1>
          <p>“You're off to Great Places!
              Today is your day!
              Your mountain is waiting,
              So... get on your way!”


              <br/><span>Dr. Seuss, Oh, The Places You'll Go!</span>
          </p>
          <div className="images">
            <img className="icon" src="../images/help-round-button.png"/>
            <img className="icon" src="../images/play-button.png"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home