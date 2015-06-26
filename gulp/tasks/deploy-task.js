/****************************************************************************/
/* deploy task                                            */
/****************************************************************************/
(function () {
  "use strict";

  var gulp = require( 'gulp' ),
      gutil = require( 'gulp-util' );

  module.exports = function(gp) {

    gulp.task('deploy', ['ad:assets', 'ad:build'], function() {

      setTimeout(function () {
        return gulp.src('bin/**')
          .pipe(gp.ftp({
            host: 'XXXXXX.co.nf',
            user: 'XXXXXXXX',
            pass: 'XXXXXXXX'
          }))
          .pipe(gutil.noop());
      }, 1500);

    });

  };

}());
