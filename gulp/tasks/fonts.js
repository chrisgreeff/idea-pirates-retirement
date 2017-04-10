'use strict'

import gulp from 'gulp'

gulp.task('fonts', () => {
  return gulp.src('./assets/fonts/**/*')
    .pipe(gulp.dest('./web/fonts'))
})
