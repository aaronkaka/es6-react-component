/* global jest describe it expect */

jest.dontMock('../react_components/Card.js');

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Card from '../react_components/Card';
import {IntlProvider} from 'react-intl';
import {shallow, mount, render} from 'enzyme';

describe('Card', function() {

  const messages = {
    'en-US' : {
      'delete-bio': 'Delete bio',
      'comment-placeholder': 'Add a comment ...'
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

  const wrapper = shallow(
        <Card.WrappedComponent
            data={targetData}
            intl={intl}
        />
  );

  it('creates the card component instance', function () {
    expect(wrapper).toBeDefined();
  });

  it('correctly displays the username', function () {
    const usernameDisplay = wrapper.find('h4').first().text();
    expect(usernameDisplay).toEqual('outsider.abcdefghijklmnopqrstu '); // add space
  });

  it('initially has no like count displayed', function () {
    const label = wrapper.find('span');
    expect(label.text()).toEqual('');
  });

  it('increments and displays the like count', function () {

    const likeButton = wrapper.find('.shallowRenderRef');
    likeButton.simulate('click');

    const label = wrapper.find('.badge');
    expect(label.text()).toEqual('+1');
  });

});
