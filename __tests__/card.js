/* global jest describe it expect */

jest.dontMock('../react_components/Card.js');

import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../react_components/Card';
import TestUtils from 'react-addons-test-utils';
import {IntlProvider} from 'react-intl';
import {findWithType, findWithClass, findAllWithClass} from 'react-shallow-testutils';


//const enJson = require('json!translations/en-US.json');

describe('Card', function() {
    const renderer = TestUtils.createRenderer();

    const messages = {
        'en-US' : {
            "some.message" : "Some Message",
            "delete-bio" : "Delete bio",
            "sample-text" : "Sample Text",
            "comment-placeholder-text" : "Add a comment ..."
        }
    };

    const locale = 'en-US';
    const intlProvider = new IntlProvider({locale: locale, messages : messages[locale]}, {});
    const {intl} = intlProvider.getChildContext();

    const targetData = {
      targetElem: 'div4',
      userId: 'abc123',
      username: 'outsider.abcdefghijklmnopqrstuvwxyz',
      bio: 'This card does not belong to the evented group of cards.'
    };


    renderer.render(
          <Card.WrappedComponent
              data={targetData}
              intl = {intl}
              />
    );

    const renderedTree = renderer.getRenderOutput();
    const label = findWithType(renderedTree, 'span');

  it('creates the card component instance', function () {
    expect(renderedTree).toBeDefined();
  });

  it('correctly displays the username', function () {
    const usernameDisplay = findWithType(renderedTree, 'h4');
    expect(usernameDisplay.props.children[0]).toEqual('outsider.abcdefghijklmnopqrstu'); // add spacer
  });

  it('initially has no like count displayed', function () {
    expect(label.props.children.length).toEqual(0);
  });

  it('increments and displays the like count', function () {
    const likeButton = findWithClass(renderedTree, 'likeBut');
    likeButton.props.onClick({ preventDefault: () => {} });
    const renderedTree2 = renderer.getRenderOutput();
    const label2 = findWithType(renderedTree2, 'span');
    expect(label2.props.children).toEqual('+1');
  });

});
