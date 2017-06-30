/* global jest describe it expect */

jest.dontMock('../react_components/Bio.js');

import React from 'react';
import Bio from '../react_components/Bio';
import TestUtils from 'react-dom/test-utils';

describe('Bio', function() {

  const BioElement = TestUtils.renderIntoDocument(
    <Bio text={'This is a bio.'} />
  );

  const item = TestUtils.findRenderedDOMComponentWithTag(BioElement, 'p');

  it('renders the bio paragraph', function () {
    expect(item.textContent).toEqual('This is a bio.');
  });
});
