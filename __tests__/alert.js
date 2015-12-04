jest.dontMock('../react_components/Alert.js');

let React = require('react'),
    Alert = require('../react_components/Alert'),
    TestUtils = require('react-addons-test-utils');

describe('Alert', function() {

  let AlertElement = TestUtils.renderIntoDocument(
    <Alert text={'Somebody deleted their bio!'} />
  );

  let item = TestUtils.findRenderedDOMComponentWithClass(AlertElement, 'alert-info');

  it('renders the alert', function () {
    expect(item.textContent).toEqual('×Somebody deleted their bio!');
  });
});