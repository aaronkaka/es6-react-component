jest.dontMock('../react_components/Bio.js');

let React = require('react'),
    Bio = require('../react_components/Bio'),
    TestUtils = require('react-addons-test-utils');

describe('Bio', function() {

  let BioElement = TestUtils.renderIntoDocument(
    <Bio text={'This is a bio.'} />
  );

  let item = TestUtils.findRenderedDOMComponentWithTag(BioElement, 'p');

  it('renders the bio paragraph', function () {
    expect(item.textContent).toEqual('This is a bio.');
  });
});