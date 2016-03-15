var gulp = require('gulp')
var babel = require('gulp-babel')
var rename = require('gulp-rename')
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

gulp.task('copy', function () {
  gulp.src('src/me.json')
    .pipe(gulp.dest('lib'))
  gulp.src('lib/rog.js')
    .pipe(uglify())
    .pipe(rename('rog.min.js'))
    .pipe(gulp.dest('lib'))
})

gulp.task('build', ['babel', 'copy'])

gulp.task('watch', function () {
  gulp.watch(['src/rog.js'], ['build'])
})
