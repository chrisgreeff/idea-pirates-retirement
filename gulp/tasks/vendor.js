'use strict'

import gulp from 'gulp'
import bower from 'main-bower-files'
import wrap from 'gulp-wrap'
import concat from 'gulp-concat'
import es from 'event-stream'
import scriptFilter from '../utils/script-filter'

const vendorScriptsGlob = bower({ includeDev: true }).filter(scriptFilter)

gulp.task('vendor', () => {
  return es.merge(
    gulp.src(vendorScriptsGlob)
      .pipe(wrap(';(function() {\r<%= contents %>\r}());'))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./web/js'))
  )
})
