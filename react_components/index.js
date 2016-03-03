// bundled component styling
import '../css/card.css';
import '../css/fontello.css';

import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './Card';
import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/lib/locale-data/fr'
import enLocaleData from 'react-intl/lib/locale-data/en'

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);

const enJson = require('json!../translations/en-US.json');
const frJson = require('json!../translations/fr.json');


export default function cardstrap(containerType) {

  // Convention used is that cards go into container-styled divs
  const containers = document.querySelectorAll(containerType);
  // Be advised that containers is a NodeList, not an Array

  // Listen for card instance initialization in each container
  [].map.call(containers, container => {

    document.getElementById(container.id)
      .addEventListener('initCard', e => {

        const targetData = e.detail;
        const targetElement = e.detail.targetElem;
        const keyId = e.detail.userId;

        console.info(`New Event ${e.type} for ${targetElement}`);
        console.info(targetData);

        const messages = {
          'en-US' : enJson,
          'fr' : frJson
        };

        const locale = 'fr';

        ReactDOM.render(
            <IntlProvider locale={locale} messages={messages[locale]}>
              <CardComponent data={targetData} key={keyId} />
            </IntlProvider>,
            document.getElementById(targetElement)
        );
      });
  });
}

export function destroyCard(elementId) {

  console.info(`Unmounted card at ${elementId}:`,
    ReactDOM.unmountComponentAtNode(document.getElementById(elementId))
  );
}

// Event Listeners for script include scenario
document.body.addEventListener('cardstrap', e => cardstrap(e.detail));
document.body.addEventListener('destroyCard', e => destroyCard(e.detail));
