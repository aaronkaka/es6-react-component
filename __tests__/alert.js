jest.dontMock('../react_components/Alert.js');

let React = require('react/addons'),
    Alert = require('../react_components/Alert.js'),
    TestUtils = React.addons.TestUtils;

describe('Alert', function() {

  let AlertElement = TestUtils.renderIntoDocument(
    <Alert text={'Somebody deleted their bio!'} />
  );

  let item = TestUtils.findRenderedDOMComponentWithClass(AlertElement, 'alert-info');

  it('renders the alert', function () {
    expect(item.getDOMNode().textContent).toEqual('×Somebody deleted their bio!');
  });
});