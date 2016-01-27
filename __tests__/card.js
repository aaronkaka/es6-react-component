jest.dontMock('../react_components/Card.js');

import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../react_components/Card';
import TestUtils from 'react-addons-test-utils';

describe('Card', function() {

  let targetData = {
        targetElem: 'div4',
        userId: 'abc123',
        username: 'outsider.abcdefghijklmnopqrstuvwxyz',
        bio: 'This card does not belong to the evented group of cards.'
      },

      CardElement = TestUtils.renderIntoDocument(
        <Card data={targetData} />
      ),

      label = TestUtils.findRenderedDOMComponentWithTag(CardElement, 'span');

  it('creates the card component instance', function () {
    expect(CardElement).toBeDefined();
  });

  it('correctly displays the username', function () {
    let usernameDisplay = TestUtils.findRenderedDOMComponentWithTag(CardElement, 'h4');
    expect(ReactDOM.findDOMNode(usernameDisplay).textContent).toEqual('outsider.abcdefghijklmnopqrstu '); // add spacer
  });

  it('initially has no like count displayed', function () {
    expect(ReactDOM.findDOMNode(label).textContent).toEqual('');
  });

  it('increments and displays the like count', function () {
    let likeButton = ReactDOM.findDOMNode(CardElement.refs.likeButton);
    TestUtils.Simulate.click(likeButton);
    expect(ReactDOM.findDOMNode(label).textContent).toEqual('+1');
  });

});