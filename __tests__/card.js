jest.dontMock('../react_components/Card.js');

let React = require('react/addons'),
    Card = require('../react_components/Card.js'),
    TestUtils = React.addons.TestUtils;

describe('Card', function() {

  let targetData = {};

  let CardElement = TestUtils.renderIntoDocument(
    <Card data={targetData} />
  );

  let item = TestUtils.findRenderedDOMComponentWithClass(CardElement, 'panel');

  it('creates the card component', function () {
    expect(item).toBeDefined();
  });
});