const {
  src,
  dest,
  watch,
  series
} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');


function buildCss(done) {
  src('css/**/**.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(dest('../dist/css/'));
  done();
}

function buildJs(done) {
  src(['js/**.js', '!js/**.min.js'], {
      allowEmpty: true
    })
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(dest('../dist/js/'));
  src('js/**.min.js').pipe(dest('../dist/js/'));
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('../dist/'));

  done();
}

function php(done) {
  src('**.php')
    .pipe(dest('../dist/'));
  src('phpmailer/**/**')
    .pipe(dest('../dist/phpmailer/'));

  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('../dist/fonts/'));

  done();
}

function root(done) {
  src('root/**')
    .pipe(dest('../dist/root/'));

  done();
}

function imgmin(done) {
  src('img/**/*.{png,jpg}')
    .pipe(tinypng({
      key: '1MnPPxqxjjHK8rtBplg0PTdpZKLDf8BT',
      log: true
    }))
    .pipe(dest('../dist/img/'))
  src('img/**/*.svg')
    .pipe(dest('../dist/img/'))
  done();
}


exports.build = series(buildCss, buildJs, html, php, fonts, root, imgmin);