'use strict'

import gulp from 'gulp'

gulp.task('images', () => {
  return gulp.src('./assets/images/**/*')
    .pipe(gulp.dest('./web/images'))
})
