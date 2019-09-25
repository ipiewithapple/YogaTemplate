var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var mincss = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var babel = require('gulp-babel');
var jsminify = require('gulp-babel-minify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pug = require('gulp-pug');
var webp = require('gulp-webp');

// Pug

gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/index.pug')
      .pipe(pug({
          pretty: true
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('src/'))
});

// Minify HTML

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build/'))

});

// ES5 and minify JS

gulp.task('js', () =>
  gulp.src('src/js/script.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('build/js'))
  .pipe(jsminify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(rename('min.script.js'))
  .pipe(gulp.dest('build/js'))
);

// Compile sass into CSS & auto-inject into browsers + plumber, autoprefixer and minify CSS

gulp.task('sass', function () {
  return gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('build/css'))
    .pipe(mincss())
    .pipe(rename('min.style.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', function () {

  browserSync.init({
    server: "build"
  });

  gulp.watch("src/sass/**/*.scss", gulp.series('sass'));
  gulp.watch("src/*.html", gulp.series('html')).on('change', browserSync.reload);
  gulp.watch("src/pug/**/*.pug", gulp.series('pug')).on('change', browserSync.reload);
  gulp.watch("src/js/**/*.js", gulp.series('js')).on('change', browserSync.reload);
});

// Minify img

gulp.task('imagemin', function () {

  return gulp.src('src/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('src/img'))
});

// Create webp images

gulp.task('webp', function () {
  return gulp.src('src/img/**/*.{png,jpg}')
    .pipe(webp({
      quality: 80
    }))
    .pipe(gulp.dest('src/img'))
});

// Copy files to "build"

gulp.task('copy', function () {
  return gulp.src([
      'src/fonts/**/*.{woff,woff2}',
      'src/img/**',
      'src/js/**/*.js',
      'src/css/**/*.css'
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('build'))
});

// Delete "build"

gulp.task('del', function () {
  return del('build')
});

// Start tasks

gulp.task('build', gulp.series('del', 'copy', 'sass', 'js', 'html'));
gulp.task('start', gulp.series('build', 'serve'));
gulp.task('prepimg', gulp.series('webp', 'imagemin'));
