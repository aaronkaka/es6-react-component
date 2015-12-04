jest.dontMock('../react_components/Card.js');

let React = require('react'),
    ReactDOM = require('react-dom'),
    Card = require('../react_components/Card'),
    TestUtils = require('react-addons-test-utils');

describe('Card', function() {

  let targetData = {
        targetElem: 'div4',
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