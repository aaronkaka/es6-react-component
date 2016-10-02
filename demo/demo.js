import ReactDOM from 'react-dom';
import Cards from '../react_components/index.js';

function init() {

  const eventedElementId = 'eventedElement';
  const eventedElement = document.getElementById(eventedElementId);
  const foucTarget = document.getElementsByClassName('no-fouc')[0];

  // Un-hide the page elements now that the DOM has fully rendered
  foucTarget && (foucTarget.className = '');

  // Add the card container listeners
  const cardContainer = new Cards('.container');
  console.info(cardContainer.toString());

  // Listen for any events coming out of evented components
  eventedElement.addEventListener('card-comment', function(e) {
    console.info(`${e.detail.username} says "${e.detail.comment}"`);
  });

  // Initialize the card instances
  // Data in detail objects could come from a service endpoint

  eventedElement.dispatchEvent(new CustomEvent('initCard', {
    detail: {
      eventedElem: eventedElementId,
      targetElem: 'div1',
      userId: '3c832cbae883f988cfb877f4322d137c',
      username: 'aaron.kaka',
      bio: 'This is Aaron\'s bio.',
      avatar: 'images/avatar.png'
    }
  }));

  eventedElement.dispatchEvent(new CustomEvent('initCard', {
    detail: {
      eventedElem: eventedElementId,
      targetElem: 'div2',
      userId: 'c685a8ed331c70a47dea8812da69c1bd',
      username: 'joe.schmo',
      bio: 'This is Joe\'s bio.',
      avatar: 'images/wired.jpg'
    }
  }));

  eventedElement.dispatchEvent(new CustomEvent('initCard', {
    detail: {
      eventedElem: eventedElementId,
      targetElem: 'div3',
      userId: '40568a02136514ee93b6847a854ede22',
      username: 'suzie.q',
      bio: 'This is Suzie\'s bio.',
      avatar: 'images/suzieq.jpg',
      locale: 'fr-CA'
    }
  }));

  // Outside the evented group
  document.getElementById('outsider').dispatchEvent(new CustomEvent('initCard', {
    detail: {
      // NO eventedElem
      targetElem: 'div4',
      userId: '9e9fdb4e7377b80e7ce8c10c57db1676',
      username: 'outsider.card',
      bio: 'This card does not belong to the evented group of cards.'
      // NO avatar
    }
  }));

  // Remove a card instance after some delay
  setTimeout(function() {
    const unmountElement  = 'div2';
    ReactDOM.unmountComponentAtNode(document.getElementById(unmountElement));
    console.info(`Unmounted component instance at ${unmountElement}`);
  }, 2000);

}

window.onload = init;
