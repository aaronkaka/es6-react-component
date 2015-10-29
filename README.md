# ECMAScript 6 React Component

![Image](screenshot_mini.jpg?raw=true "screenshot")

[![Build Status](https://travis-ci.org/aaronkaka/es6-react-component.svg?branch=master)](https://travis-ci.org/aaronkaka/es6-react-component)

## Goals

Card web component written with ES6 modules, classes, and syntax using React to achieve the following goals:

- Reusable and responsively-designed; just drop into DOM node
- Self-contained; no knowledge of React required to consume the component
- No component API; event all interaction
- External styling is bundled with and scoped to the component; targets Bootstrap 3
- Cross-browser for modern browsers [no IE]; thus no style scoped attribute or Shadow DOM encapsulation

[no IE] Uses the native CustomEvent constructor that no version of IE supports (MS Edge does!). This choice was made to 
reduce complexity and encourage adherence to web standards - add the polyfill if needed.

## Tool Chain

Install [NodeJS](http://nodejs.org/download/). This installs npm.

Make the webpack command available:

    npm install webpack -g

## Playtime

### Can I see the project working before I change anything?

After cloning the repo:

    cd es6-react-component
    npm install
    npm run dev

Once the above is complete, open a browser tab to **localhost:8080**.

The dev.card-component.js is automagically hoisted into the build directory for use.

### Hot Reload

Hot module replacement is activated, so that any saved change to the watched source automatically reloads the page.

### Test

The project is wired to unit test with the Jest framework.

    npm test

## Consume

The component can be consumed from either an ES5 or ES6 application.
     
### Script Include

Build the transpiled, minified version of this component to build/dist.card-component.js:

    > webpack -p
    
Include it in the consuming page, then event `cardstrap` with the container type, e.g.

    detail: '.container'
    
To remove a card instance, event `destroyCard` with the DOM element ID, e.g.

    detail: 'div2'

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
          {test: /\.js$/, loader: 'jsx-loader'},
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

The following events and data are emitted by this card component.

<table>
    <tr>
        <th>CustomEvent</th><th>detail</th>
    </tr>
    <tr>
        <td>card-bioDeleted</td><td>[sUsername]</td>
    </tr>
    <tr>
        <td>card-liked</td><td>{ username: [sUsername], likes: [iLikes] }</td>
    </tr>
    <tr>
        <td>card-comment</td><td>{ username: [sUsername], comment: [sComment] }</td>
    </tr>
</table>