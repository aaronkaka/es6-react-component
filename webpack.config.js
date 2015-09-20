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
      {test: /\.js$/, loader: 'jsx-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {test: /\.woff$/, loader: 'url?limit=100000', exclude: /node_modules/},
      {test: /\.eot$/, loader: 'url?limit=100000', exclude: /node_modules/},
      {test: /\.svg$/, loader: 'url?limit=100000', exclude: /node_modules/},
      {test: /\.ttf$/, loader: 'url?limit=100000', exclude: /node_modules/}
    ]
  }
};