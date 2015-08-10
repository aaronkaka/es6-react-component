'use strict';

// component styling
import styles from '../css/card.css';

import React from 'react';
import CardComponent from './Card';

function cardstrap(containerType) {

  // Convention being used is that the card components go into container-styled divs
  let containers = document.querySelectorAll(containerType);
  // Be advised that containers is a NodeList, not an Array

  // Listen for card component initialization in each container
  [].map.call(containers, container => {

      document.getElementById(container.id)
      .addEventListener('initCard', e => {

        let targetData = e.detail,
            targetElement = e.detail.targetElem;

        console.info(`New Event ${e.type} for ${targetElement}`);
        console.info(targetData);

        React.render(
          <CardComponent data={targetData} key={targetElement} />,
          document.getElementById(targetElement));
      });
  });
}

document.body.addEventListener('scriptinclude', e => cardstrap(e.detail) );

export default cardstrap;