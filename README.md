# ECMAScript 6 React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A proof-of-concept that evolves [commonjs-react-components](https://github.com/aaronkaka/commonjs-react-components) to 
ES6 and new solutions for existing limitations.

- Use ES6 Modules to build and share responsive UI components
- Abstract away the component's implementation without leakage
- No component API, event all interaction
- **External styling is bundled with and scoped to the component**

## Tool Chain

Install [NodeJS](http://nodejs.org/download/). This automatically installs npm.

Make the webpack command available:

    npm install webpack -g

## Playtime

### Can I see the project working before I change anything?

After cloning the repo:

    cd es6-react-component
    npm install
    npm run dev

Once the above is complete, open a browser tab to **localhost:8080**.

### Live Reload

Hot module replacement is activated, so that any saved change to the watched source automatically reloads the browser page.

### Test

The project is wired to unit test with the Jest framework.

    npm test

## Consume

The card component is built for use with Bootstrap v3.

### Script Include

In the case of a script include for _build/dist.card-component.js_, build the minified version:

    > webpack -p
    
In the consuming app, event the script include target container, as in the example:

    document.body.dispatchEvent(
        new CustomEvent('scriptinclude', {
            detail: '.container'
        })
    );

### How do I require() it into my consuming application?

Publish your component to an npm registry; set up your project with webpack, including loaders.
    
Then in your consuming app:
 
    > npm i es6-react-component

Example javascript:

    var Cardstrap = require('es6-react-component');
    Cardstrap('.container');
    
Then you must build the required bundle you've configured:

    > webpack
