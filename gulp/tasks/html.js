'use strict'

import gulp from 'gulp'

gulp.task('html', () => {
  return gulp.src('./assets/index.html')
    .pipe(gulp.dest('./web'))
})
