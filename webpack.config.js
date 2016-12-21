module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'vue-smooth-scroll.js',
    library: 'VueSmoothScroll',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
