'use strict'

const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
  normalize: join(__dirname, '..', 'node_modules', 'normalize.css')
}

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },
  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'Cheesecake Labs Challenge',
    template: join(paths.src, 'html', 'template.html')
  },

  standardPreLoader: {
    enforce: 'pre',
    test: /\.js$/,
    include: paths.src,
    use: {
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: ['react-hot-loader/webpack', {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          ['env', { 'modules': false }],
          'stage-0',
          'react'
        ],
        plugins: [
          ['transform-runtime', {
            'helpers': false,
            'polyfill': false,
            'regenerator': true
          }]
        ]
      }
    }]
  },

  cssLoader: {
    test: /\.css$/,
    include: [paths.src, paths.normalize],
    use: ['style-loader', 'css-loader']
  },

  fileLoader:
  {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  urlLoader:
  {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  resolve: {
    alias: {
      src: paths.src,
      components: join(paths.src, 'components'),
      config: join(paths.src, 'config'),
      utils: join(paths.src, 'utils'),
      views: join(paths.src, 'views'),
      reducers: join(paths.src, 'redux-flow', 'reducers'),
      images: join(paths.src, 'assets', 'images'),
      fonts: join(paths.src, 'assets', 'fonts')
    }
  }
}
