'use strict'

import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', () => {
  return runSequence(['fonts', 'vendor', 'standard', 'html', 'images', 'styles', 'scripts'])
})

gulp.task('build:prod', () => {
  return runSequence(['fonts', 'vendor', 'standard', 'html', 'images', 'styles', 'scripts:prod'])
})
