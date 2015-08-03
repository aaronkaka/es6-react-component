'use strict';

// component styling
import styles from '../css/card.css';

import React from 'react';
import CardComponent from './Card.js';

function cardstrap(containerClass) {

  // Convention being used is that the card components go into container-styled divs
  let containers = document.querySelectorAll(containerClass);

  // Listen for card component initialization in each container
  [].map.call(containers, function(container) {

      document.getElementById(container.id)
      .addEventListener('initCard', function (e) {

        let targetData = e.detail,
            targetElement = e.detail.targetElem;

        console.info('New Event: ' + e.type + ' for ' + targetElement);
        console.info('Custom data: ', targetData);

        React.render(
          <CardComponent data={targetData} key={targetElement} />,
          document.getElementById(targetElement));
      });
  });
}

document.body.addEventListener('scriptinclude', function(e) {
  cardstrap(e.detail);
});

export default cardstrap;