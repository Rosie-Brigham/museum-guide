import React from 'react'

var Generator = React.createClass({
  render: function() {
    return (
      <div className="row generator">
        <div className="twelve columns">
          <form>
            <label>What word best describes your current mood?</label>

              <input type="radio" name="mood" value="excited"/> excited<br/>
              <input type="radio" name="mood" value="tired"/> tired<br/>
              <input type="radio" name="mood" value="quiet"/> quiet<br/>
              <input type="radio" name="mood" value="loud"/> loud<br/>
              <input type="radio" name="mood" value="interested"/> interested<br/>
              <input type="radio" name="mood" value="hungry"/> hungry<br/>

            <label>Which of the following categories appeals most to you at the moment?</label>
              <input type="radio" name="mood" value="Art"/> Art<br/>
              <input type="radio" name="mood" value="History"/> History<br/>
              <input type="radio" name="mood" value="Stories"/> Stories<br/>
              <input type="radio" name="mood" value="Music"/> Music<br/>

            <label>Which is your favourite out of the following?</label>

            <label>Pick a dog</label>

            <label>Would you like us to include your location?</label>
              <input type="radio" name="mood" value="yes" checked/> Yes<br/>
              <input type="radio" name="mood" value="no"/> No<br/>

            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  },
})


export default Generator