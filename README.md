# ECMAScript 6 React Card Component [![Build Status](https://travis-ci.org/aaronkaka/es6-react-component.svg?branch=master)](https://travis-ci.org/aaronkaka/es6-react-component)

![Image](https://cloud.githubusercontent.com/assets/1950683/13100443/594fa604-d4fa-11e5-8042-77dc6b77280a.jpg?raw=true "screenshot")

**React and ReactDOM are external dependencies required to use this component.**

## Goals

Card web component written with ES6 modules, classes, and syntax using [React](http://facebook.github.io/react) to 
achieve the following goals:

- Reusable and responsively-designed; just drop into DOM node
- External styling is bundled with and scoped to the component; targets Bootstrap 3
- Cross-browser for modern browsers [no IE]; thus no style scoped attribute or Shadow DOM encapsulation
- Internationalization using React Intl (thanks to @deepak2510)

[no IE] Uses the native CustomEvent constructor that no version of IE supports (MS Edge does!). This choice was made to 
reduce complexity and encourage adherence to web standards - add the polyfill if needed.

## Toolchain

- [Node.js](http://nodejs.org) v6+
- [webpack](https://webpack.github.io/) v2
    - Bundle javascript, styles and icon
    - Babel 6 transpiles ES6 and JSX
    - ESLint as configured in .eslintrc

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) 
to manage them.

## Polyfill Service

Use the following [Intl.js](https://github.com/andyearnshaw/Intl.js/) polyfill for Safari, which is the only modern 
browser to not yet implement the ECMAScript Internationalization API:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=Intl.~locale.en,Intl.~locale.fr"></script>
```

## Externalizing React

In webpack, "externals" allows you to specify dependencies that are not resolved by webpack, but become dependencies of 
the output. This means they are imported from the environment during runtime.

By doing this with React, it reduced the byte size of the bundle from 288521 to 85990 - about a 70% reduction!

## Playtime

### Can I see the project working before I change anything?

After cloning the repo:

    cd es6-react-component
    npm install
    npm start

Once bundling is complete, open a browser tab to **localhost:8080/demo/**, and dev.card-component.js is served in memory.

### Hot Reload

Hot module replacement is activated in the webpack dev server; changes to react_components are automatically reloaded in
 the browser.

### Test

The project is wired to unit test with the Jest framework and Enzyme, a JavaScript testing utility for React that makes 
it easier to assert, manipulate, and traverse your component's output.

    npm test    

### Debug

Source maps are enabled for the webpack dev server. Using Chrome dev tools - open the "Sources" tab, navigate to 
`top/webpack://./`, and you will find the original source files for which you can set breakpoints in Chrome's debugger.

Optionally, install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
for additional React debugging support in Chrome dev tools under the "React" tab.

## Usage

From the consuming application:
     
    > npm i --save es6-react-component

Eventing example: Include it in the consuming page, then event `cardstrap` with the container type, as in

    { detail: '.container' }

CommonJS example:

    var Cards = require('es6-react-component').default;
    var cardContainer = new Cards('.container'); // pass in your container element
    
ES2015 example:

    import Cards from 'es6-react-component';
    const cardContainer = new Cards('.container');
    
### Card Instances

After the card component is bootstrapped for a container, each instance is initialized with the `initCard` event:

      eventedElement.dispatchEvent(new CustomEvent('initCard', {
          detail: {
            eventedElem: eventedElementId,
            targetElem: "div2",                         // Required
            userId: "c685a8ed331c70a47dea8812da69c1bd", // Required
            username: "joe.schmo",                      // Required
            bio: "This is Joe's bio.",
            avatar: "images/wired.jpg",
            locale: "fr-CA"
          }
        })
      );

The following events and data are emitted by each card instance.

<table>
    <tr>
        <th>CustomEvent</th><th>detail</th>
    </tr>
    <tr>
        <td>card-bioDeleted</td><td>{ userId: [sUserId], username: [sUsername] }</td>
    </tr>
    <tr>
        <td>card-liked</td><td>{ userId: [sUserId], username: [sUsername], likes: [iLikes] }</td>
    </tr>
    <tr>
        <td>card-comment</td><td>{ userId: [sUserId], username: [sUsername], comment: [sComment] }</td>
    </tr>
</table>
