# ECMAScript 6 React Component

![Image](README_pic.jpg?raw=true "screenshot")

[![Build Status](https://travis-ci.org/aaronkaka/es6-react-component.svg?branch=master)](https://travis-ci.org/aaronkaka/es6-react-component)

## Goals

Card web component written with ES6 modules, classes, and syntax (transpiled by Babel 6) using React to achieve the 
following goals:

- Reusable and responsively-designed; just drop into DOM node
- Self-contained; no knowledge of React required to consume the component
- No component API; event all interaction
- External styling is bundled with and scoped to the component; targets Bootstrap 3
- Cross-browser for modern browsers [no IE]; thus no style scoped attribute or Shadow DOM encapsulation

[no IE] Uses the native CustomEvent constructor that no version of IE supports (MS Edge does!). This choice was made to 
reduce complexity and encourage adherence to web standards - add the polyfill if needed.

## Tool Chain

- [node.js](http://nodejs.org) (v4 is required)
- [webpack](https://webpack.github.io/) (`npm install -g webpack`)

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) 
to manage them.

## Playtime

### Can I see the project working before I change anything?

After cloning the repo:

    cd es6-react-component
    npm install
    npm run dev

Once the above is complete, open a browser tab to **localhost:8080**, and dev.card-component.js is served from memory.

### Hot Reload

Hot module replacement is activated; so for the watched source, changes are automatically reloaded.

### Test

The project is wired to unit test with the Jest framework.

    npm test

## Consume

The component can be consumed from either an ES5 or ES6 application.
     
### Script Include

Build the transpiled, minified version of this component to build/dist.card-component.js:

    > npm run build
    
Include it in the consuming page, then event `cardstrap` with the container type, e.g.

    { detail: '.container' }
    
To remove a card instance, event `destroyCard` with the DOM element ID, e.g.

    { detail: 'div2' }

### How do I consume the npm module?

Do as described in this section from the consuming application:
     
    > npm i es6-react-component --save

Example javascript:

    var cardstrap = require('es6-react-component').default;
    cardstrap('.container');
    
Then build the required bundle with webpack, similar to this webpack.config.js:

    module.exports = {
      entry: ['./eventing.js'],
      output: {
        path: './',
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {test: /\.css$/, loader: 'style-loader!css-loader'},
          {test: /\.js$/, loader: 'babel-loader'},
          {test: /\.woff$/, loader: 'url?limit=100000'},
          {test: /\.eot$/, loader: 'url?limit=100000'},
          {test: /\.svg$/, loader: 'url?limit=100000'},
          {test: /\.ttf$/, loader: 'url?limit=100000'}
        ]
      }
    };
    
### Events

After the card component is bootstrapped for a container, each instance is initialized with the `initCard` event:

      eventedElement.dispatchEvent(new CustomEvent('initCard', {
          detail: {
            eventedElem: eventedElementId,
            targetElem: "div2",                         // Required
            userId: "c685a8ed331c70a47dea8812da69c1bd", // Required
            username: "joe.schmo",                      // Required
            bio: "This is Joe's bio.",
            avatar: "images/wired.jpg"
          }
        })
      );

The following events and data are emitted by this component.

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