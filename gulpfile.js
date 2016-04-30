var gulp = require('gulp');
var mincss = require('gulp-minify-css');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var paths = {
  scss: ['stylesheets/*.scss']
}

gulp.task('go', function () {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(mincss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('stylesheets/style_min'));
});

gulp.task('watch', function(){
  gulp.watch(paths.scss, ['go']);
  // gulp.watch(paths.comp, ['comp']);
});

gulp.task('default', ['watch', 'go']);
