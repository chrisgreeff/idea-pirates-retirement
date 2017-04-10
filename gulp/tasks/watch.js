'use strict'

import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./assets/**/*.less', ['styles'])
  gulp.watch('./assets/index.html', ['html'])
  gulp.watch('./assets/scripts/**/*', ['webpack'])
  gulp.watch([
    './assets/**/*.jsx',
    './assets/**/*.js',
    './gulp/**/*.js'
  ], ['standard'])
})
