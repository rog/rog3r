var gulp = require('gulp')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')

gulp.task('default', ['build'])

gulp.task('babel', function () {
  return gulp.src('src/rog.js')
  .pipe(babel({
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }))
  .pipe(gulp.dest('lib'))
})

gulp.task('copy-me-json', function () {
  gulp.src('src/me.json')
  .pipe(gulp.dest('lib'))
  .pipe(gulp.dest('lib/min'))
})

gulp.task('min', function () {
  return gulp.src('src/rog.js')
  .pipe(babel({
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('lib/min'))
})

gulp.task('build', ['watch', 'babel', 'min', 'copy-me-json'])

gulp.task('watch', function () {
  gulp.watch(['src/rog.js'], ['build'])
})
