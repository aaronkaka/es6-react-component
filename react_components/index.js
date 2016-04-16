// bundled component styling
import '../css/card.css';
import '../css/fontello.css';

import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './Card';

import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr'
import frJson from '../translations/fr.json';
const translations = {
  'fr-CA' : frJson
};
addLocaleData(frLocaleData);

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
        const locale = e.detail.locale ? e.detail.locale : 'en';

        console.info(`New Event ${e.type} for ${targetElement}`);
        console.info(targetData);

        ReactDOM.render(
            <IntlProvider locale={locale} messages={translations[locale]}>
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
