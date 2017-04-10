'use strict'

import gulp from 'gulp'
import standard from 'gulp-standard'
import handleErrors from '../utils/handle-errors'

const standardGlob = [
  './assets/**/*.jsx',
  './gulp/**/*.js'
]

gulp.task('standard', () => {
  return gulp.src(standardGlob)
    .pipe(standard())
    .on('error', handleErrors)
    .pipe(standard.reporter('default', {}))
})
