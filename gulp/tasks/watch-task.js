/****************************************************************************/
/* Watch                                                                    */
/****************************************************************************/
(function () {
  "use strict";

  var gulp = require('gulp'),
      spawn = require('child_process').spawn,
      process;

  function restart() {
    if (process) { process.kill(); }
    process = spawn('gulp', ['ad:build'], {stdio: 'inherit'});
  }

  module.exports = function(gp) {

    gulp.task('watch', function () {

      gp.livereload.listen(); // to see if livereload is occupied lsof -iTCP:35729

      gp.nodemon({
        script: 'server.js',
        watch: ['server.js'],
        execMap: {
          js: "node --harmony"
        }
      });

      gulp.watch(['gulpfile.js', 'gulp/**'], restart);
      gulp.watch('src/index.jade', ['ad:jade']);
      gulp.watch('src/js/main.js', ['ad:js']);
      gulp.watch(['src/sass/*.scss'], ['ad:sass']);

      restart();

    });
  };
}());

