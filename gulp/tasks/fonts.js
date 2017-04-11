'use strict'

import gulp from 'gulp'

const fontsGlob = [
  './assets/fonts/**/*',
  './bower_components/font-awesome/fonts/**/*'
]

gulp.task('fonts', () => {
  return gulp.src(fontsGlob)
    .pipe(gulp.dest('./web/fonts'))
})
