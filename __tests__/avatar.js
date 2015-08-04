jest.dontMock('../react_components/Avatar.js');

let React = require('react/addons'),
    Avatar = require('../react_components/Avatar.js'),
    TestUtils = React.addons.TestUtils;

describe('Avatar', function() {

  let AvatarElement = TestUtils.renderIntoDocument(
    <Avatar imgSrc={'http://placehold.it/150x150'} />
  );

  let item = TestUtils.findRenderedDOMComponentWithTag(AvatarElement, 'img');

  it('sets the image source', function () {
    expect(item.props.src).toEqual('http://placehold.it/150x150');
  });
});