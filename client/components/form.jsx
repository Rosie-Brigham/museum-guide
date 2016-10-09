import React from 'react';
import { Field, Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    const { dispatch } = this.props;
    console.log(user)
    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form model="user"
        onSubmit={(user) => this.handleSubmit(user)}>

        <span> What is your current mood?</span>
        <Field model=".mood" className="field">
          <label>
            <input type="radio" value="excited" />
            excited
          </label>
          <label>
            <input type="radio" value="tired" />
            tired
          </label>
          <label>
            <input type="radio" value="quiet" />
            quiet
          </label>
          <label>
            <input type="radio" value="loud" />
            loud
          </label>
          <label>
            <input type="radio" value="interested" />
            interested
          </label>
        </Field>


        <span>Which of the following categories appeals most to you at the moment?</span>
        <Field model=".category" className="field">
          <label>
            <input type="radio" value="Art" />
            Art
          </label>
          <label>
            <input type="radio" value="History" />
            History
          </label>
          <label>
            <input type="radio" value="Stories" />
            Stories
          </label>
          <label>
            <input type="radio" value="Music" />
            Music
          </label>
        </Field>

        <span>Which is your favourite out of the following?</span>
        (think of something to go here)

        <span>pick a dog</span>
        (pick some dogs)

        <span>Would you like us to include your location?</span>
        <Field model=".location" className="field">
          <label>
            <input type="radio" value="yes" />
            yes
          </label>
          <label>
            <input type="radio" value="no" />
            no
          </label>
        </Field>


        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

export default UserForm;