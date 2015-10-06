'use strict';

function init() {

  var eventedElementId = 'eventedElement',
      eventedElement = document.getElementById(eventedElementId),
      foucTarget = document.getElementsByClassName('no-fouc')[0];

  // Un-hide the page elements now that the DOM has fully rendered
  foucTarget && (foucTarget.className = '');

  // Add the card container listeners, using the necessary event trigger
  document.body.dispatchEvent(new CustomEvent('cardstrap', {
      detail: '.container'
    })
  );

  // Data in detail objects could come from a service endpoint

  eventedElement.dispatchEvent(new CustomEvent('initCard', {
      detail: {
        eventedElem: eventedElementId,
        targetElem: "div1",
        username: "aaron.kaka",
        bio: "This is Aaron's bio.",
        avatar: "images/avatar.jpg"
      }
    })
  );

  eventedElement.dispatchEvent(new CustomEvent('initCard', {
      detail: {
        eventedElem: eventedElementId,
        targetElem: "div2",
        username: "joe.schmo",
        bio: "This is Joe's bio.",
        avatar: "images/wired.jpg"
      }
    })
  );

  eventedElement.dispatchEvent(new CustomEvent('initCard', {
      detail: {
        eventedElem: eventedElementId,
        targetElem: "div3",
        username: "suzie.q",
        bio: "This is Suzie's bio.",
        avatar: "images/suzieq.jpg"
      }
    })
  );

  // Outside the evented group
  document.getElementById('outsider').dispatchEvent(new CustomEvent('initCard', {
      detail: {
        // NO eventedElem
        targetElem: "div4",
        username: "outsider.card",
        bio: "This card does not belong to the evented group of cards."
        // NO avatar
      }
    })
  );

  // Remove a card instance after some delay
  setTimeout(function() {
    document.body.dispatchEvent(new CustomEvent('destroyCard', {
      detail: 'div2'
    }))
  }, 2000);

}

window.onload = init;