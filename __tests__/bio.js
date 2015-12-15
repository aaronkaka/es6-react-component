jest.dontMock('../react_components/Bio.js');

import React from 'react';
import Bio from '../react_components/Bio';
import TestUtils from 'react-addons-test-utils';

describe('Bio', function() {

  let BioElement = TestUtils.renderIntoDocument(
    <Bio text={'This is a bio.'} />
  );

  let item = TestUtils.findRenderedDOMComponentWithTag(BioElement, 'p');

  it('renders the bio paragraph', function () {
    expect(item.textContent).toEqual('This is a bio.');
  });
});