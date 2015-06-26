/****************************************************************************/
/* App jade, js and sass main builds                                              */
/****************************************************************************/
(function () {
  "use strict";

  var gulp = require('gulp'),
      options =  require('../options'),
      del = require('del'),
      pkg = require('../../package.json'),
      banner = [
        '/**',
        ' * @author:  <%= pkg.author %>',
        ' * @name:    <%= pkg.name %>',
        ' * @desc:    <%= pkg.description %>',
        ' * @version: <%= pkg.version %>',
        ' */',
        ''].join('\n');

  module.exports = function(gp, rp) {

    gulp.task('ad:sass', function () {

      del.sync(['bin/css/main.min.css']);

      gulp.src('./src/sass/main.scss')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass(options.sass))
          .on('error', rp.sassError)
        .pipe(gp.rename("main.min.css"))
        .pipe(gp.csslint(options.csslint))
          .pipe(gp.csslint.reporter(rp.csslintReporter))
        .pipe(gp.minifyCss({compatibility: 'ie8'}))
        .pipe(gp.header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./bin/css'))
        .pipe(gp.livereload(options.livereload));
    });

    gulp.task('ad:js', function() {

      del.sync(['bin/js/main.min.js', 'bin/js/main.min.js.map']);

      gulp.src(["./src/lib/shake.js", "./src/js/main.js"])
        .pipe(gp.jshint())
        .pipe(gp.jshint.reporter('jshint-stylish'))
        .pipe(gp.uglify())
        .pipe(gp.concat("main.min.js"))
        .pipe(gp.header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('bin/js'))
        .pipe(gp.livereload(options.livereload));

    });

    gulp.task('ad:jade', function() {
      del.sync(['bin/index.html']);
      gulp.src('src/index.jade')
        .pipe(gp.jade(options.jade))
          .on('error', rp.jadeError)
        .pipe(gulp.dest('bin'))
        .pipe(gp.livereload(options.livereload));
    });


    gulp.task('ad:build', ['ad:sass', 'ad:js', 'ad:jade']);

  };

}());
