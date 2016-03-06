var gulp = require('gulp')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')

gulp.task('default', ['watch'])

gulp.task('build', function () {
  return gulp.src('src/rog.js')
  .pipe(babel({
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }))
  // .pipe(uglify())
  .pipe(gulp.dest('lib'))
})

gulp.task('watch', function () {
  gulp.watch(['src/rog.js'], ['build'])
})
