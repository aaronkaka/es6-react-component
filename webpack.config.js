// [name] under the output section denotes the entry prop names
module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './react_components/index.js', './demo/demo-scriptinclude.js'],
   dist: ['./react_components/index.js']
  },
  output: {
    path: './',
    filename: 'build/[name].card-component.js',
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
  contentBase: './demo', // for webpack dev server
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css', // CSS is turned into JavaScript with css loader, then embedded as styles using style loader
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: 'url?limit=100000',
        exclude: /node_modules/
      }
    ]
  }
};
