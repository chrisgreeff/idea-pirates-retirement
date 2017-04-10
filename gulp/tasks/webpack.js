'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'

gulp.task('webpack', (callback) => {
  webpack({
    entry: './assets/scripts/app.jsx',
    output: {
      path: './web/js',
      filename: 'app.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'react'] }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true,
      errorDetails: true
    }
  }, (err, stats) => {
    if (err) { throw new gutil.PluginError('webpack', err) }
    callback()
  })
})
