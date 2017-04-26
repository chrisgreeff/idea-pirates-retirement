'use strict'

import gulp from 'gulp'
import wrap from 'gulp-wrap'
import util from 'gulp-util'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import watchify from 'watchify'
import handleErrors from '../utils/handle-errors'

function runBundler ({ bundler, destPath, destName }) {
  util.log(`Running bundler for ${destName}`)

  return bundler.bundle()
    .on('error', handleErrors)
    .pipe(source(destName))
    .pipe(buffer())
    // Wrapping scripts in an IIFE to prevent the risk of standardised code (specifically lack of closing and opening
    // semi-colons) causing JavaScript errors.
    .pipe(wrap(';(function() {<%= contents %>}());'))
    .on('error', handleErrors)
    .pipe(gulp.dest(destPath))
    .on('end', () => {
      util.log('Bundler complete.')
    })
}

gulp.task('scripts', () => {
  const destPath = './web/js'
  const destName = 'app.js'
  const bundler = browserify({
    entries: './assets/scripts/main.jsx',
    debug: true,
    plugin: [watchify],
    cache: {},
    packageCache: {},
    transform: [
      babelify.configure({ compact: false, presets: [ 'es2015', 'react' ] })
    ]
  })

  bundler.on('update', () => runBundler({ bundler, destPath, destName }))

  runBundler({ bundler, destPath, destName })
  return bundler
})
