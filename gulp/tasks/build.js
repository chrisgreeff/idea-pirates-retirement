'use strict'

import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', () => {
  return runSequence(['fonts', 'standard', 'html', 'images', 'videos', 'styles', 'scripts'])
})

gulp.task('build:prod', () => {
  return runSequence(['fonts', 'standard', 'html', 'images', 'videos', 'styles', 'scripts:prod'])
})
