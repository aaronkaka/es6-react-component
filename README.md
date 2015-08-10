# ECMAScript 6 React Component

![Image](screenshot_mini.jpg?raw=true "screenshot")

## Goals

A proof-of-concept that evolves [commonjs-react-components](https://github.com/aaronkaka/commonjs-react-components) to 
ES6 modules, classes, and syntax to achieve the following goals:

- Build and share decoupled and responsive web components
- Abstract away the component's implementation without leakage
- No component API, event all interaction
- External styling is bundled with and scoped to the component

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

### Hot Reload

Hot module replacement is activated, so that any saved change to the watched source automatically reloads the page.

### Test

The project is wired to unit test with the Jest framework.

    npm test

## Consume

This card component targets Bootstrap v3 styling.

### Script Include

Build the minified version of this component to build/dist.card-component.js:

    > webpack -p
    
Include it in the consuming page, then event `scriptinclude` with the container type, e.g.

    detail: '.container'

### How do I consume the npm module?
     
    > npm i es6-react-component --save

Example javascript:

    import Cardstrap from 'es6-react-component';
    Cardstrap('.container');
    
Then build the required bundle with webpack, similar to this webpack.config.js:

    module.exports = {
      entry: ['./eventing.js'],
      output: {
        path: './',
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'jsx-loader' },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.js$/, loader: "babel-loader"}
        ]
      }
    };