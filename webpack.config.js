module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './react_components/index.js'],
   dist: ['./react_components/index.js']
  },
  output: {
    path: './',
    filename: 'build/[name].card-component.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {test: /\.woff$/, loader: 'url?limit=100000'},
      {test: /\.eot$/, loader: 'url?limit=100000'},
      {test: /\.svg$/, loader: 'url?limit=100000'},
      {test: /\.ttf$/, loader: 'url?limit=100000'}
    ]
  }
};