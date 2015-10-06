// component styling
import styles from '../css/card.css';
import fontStyles from '../css/fontello.css';

import React from 'react';
import CardComponent from './Card';

export default function cardstrap(containerType) {

  // Convention used is that cards go into container-styled divs
  let containers = document.querySelectorAll(containerType);
  // Be advised that containers is a NodeList, not an Array

  // Listen for card instance initialization in each container
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

export function destroyCard(elementId) {

  console.info('Unmounted card at ' + elementId + ':',
    React.unmountComponentAtNode(document.getElementById(elementId))
  );
}

// Event Listeners for script include scenario
document.body.addEventListener('cardstrap', e => cardstrap(e.detail));
document.body.addEventListener('destroyCard', e => destroyCard(e.detail));