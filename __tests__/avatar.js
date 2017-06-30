/* global jest describe it expect */

jest.dontMock('../react_components/Avatar.js');

import React from 'react';
import Avatar from '../react_components/Avatar';
import TestUtils from 'react-dom/test-utils';

describe('Avatar', function() {

  const AvatarElement = TestUtils.renderIntoDocument(
    <Avatar imgSrc={'http://placehold.it/150x150'} />
  );

  const item = TestUtils.findRenderedDOMComponentWithTag(AvatarElement, 'img');

  it('sets the image source', function () {
    expect(item.src).toEqual('http://placehold.it/150x150');
  });
});
