import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import UserForm from '../client/components/form.jsx';
import {expect} from 'chai';

describe('UserForm', () => {

  it('renders a form', () => {
    const component = renderIntoDocument(
      <UserForm/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'form');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('foo');
  });

});