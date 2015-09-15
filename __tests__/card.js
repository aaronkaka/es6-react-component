jest.dontMock('../react_components/Card.js');

let React = require('react/addons'),
    Card = require('../react_components/Card.js'),
    TestUtils = React.addons.TestUtils;

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
    expect(React.findDOMNode(usernameDisplay).textContent).toEqual('outsider.abcdefghijklmnopqrstu '); // add spacer
  });

  it('initially has no like count displayed', function () {
    expect(React.findDOMNode(label).textContent).toEqual('');
  });

  it('increments and displays the like count', function () {
    let likeButton = React.findDOMNode(CardElement.refs.likeButton);
    TestUtils.Simulate.click(likeButton);
    expect(React.findDOMNode(label).textContent).toEqual('+1');
  });

});