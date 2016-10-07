import React, {Component} from 'react'

class Images extends Component {
  constructor(props){
    super(props)
  }

  handleClick() {
    console.log('boo')
    console.log(this)
    // debugger
    this.setState({view: this});
  }

  render () {
    return (
      <div className="images">
        <img className="info" onClick={this.handleClick.bind("info")} src="../images/info.png"/>
        <img className="play" onClick={this.handleClick.bind("home")} src="../images/play-button.png"/>
      </div>
    )
  }
}

export default Images