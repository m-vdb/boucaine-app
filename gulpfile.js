var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    gutil = require('gulp-util'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    partialify = require('partialify'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs'),
    mainBowerFiles = require('main-bower-files'),
    uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss'],
  scripts: ["./www/js/**/*.js", "./www/js/**/*.html"],
  build: './www/js/build'
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js', function() {
  gulp.src(['www/js/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true,
    transform: [partialify]
  }))
  // Bundle to a single file
  .pipe(concat('app.js'))
  // Output it to our dist folder
  .pipe(gulp.dest(paths.build));
});

gulp.task('libs', function() {
    return gulp.src(mainBowerFiles())
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(paths.build));
});

gulp.task('build', ['default'], function() {
  gulp.src(['app.js', 'lib.js'], {cwd: paths.build})
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['js']);
});

gulp.task('default', ['sass', 'js', 'libs']);
