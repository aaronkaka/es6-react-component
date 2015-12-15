jest.dontMock('../react_components/Alert.js');

import React from 'react';
import Alert from '../react_components/Alert';
import TestUtils from 'react-addons-test-utils';

describe('Alert', function() {

  let AlertElement = TestUtils.renderIntoDocument(
    <Alert text={'Somebody deleted their bio!'} />
  );

  let item = TestUtils.findRenderedDOMComponentWithClass(AlertElement, 'alert-info');

  it('renders the alert', function () {
    expect(item.textContent).toEqual('×Somebody deleted their bio!');
  });
});