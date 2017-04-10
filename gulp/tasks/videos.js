'use strict'

import gulp from 'gulp'

gulp.task('videos', () => {
  return gulp.src('./assets/videos/**/*')
    .pipe(gulp.dest('./web/videos'))
})
