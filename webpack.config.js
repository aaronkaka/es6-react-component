const path             = require('path');
const demo             = `${__dirname}/demo/demo.js`;
const componentRoot    = `${__dirname}/react_components/index.js`;

// [name] under the output section denotes the entry prop names
module.exports = {
  entry: {
   dev: demo,
   dist: componentRoot
  },
  output: {
    path: path.resolve(__dirname, 'demo'),
    publicPath : '/demo/',
    filename: '[name].card-component.js',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
   devServer: {
      host               : '0.0.0.0',
      port               : 8080,
      publicPath         : '/demo/',
      hot                : true,
      https              : false,
      overlay            : true,
      watchContentBase   : true,
      disableHostCheck   : true,
      historyApiFallback : true,
      watchOptions       : { poll: true },
      contentBase        : path.join(__dirname, 'demo')
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ], // CSS is turned into JavaScript with css loader, then embedded as styles using style loader
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['react', ['es2015', {modules: false}]]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=100000',
        exclude: /node_modules/
      }
    ]
  }
};
