(function () {
  "use strict";

  var gulp = require('gulp'),
      options = require('./gulp/options'),
      gp = require('gulp-load-plugins')(),
      gt = require('require-dir')('./gulp/tasks', options.requireDir),
      rp = require('require-dir')('./gulp/reporters', options.requireDir);

  /****************************************************************************/
  /*                       CUSTOM TASKS                                       */
  /****************************************************************************/

  gt.adTask(gp, rp);
  gt.assetsTask(gp);
  gt.watchTask(gp);
  gt.deployTask(gp);

  /****************************************************************************/
  /* TASKS DEFINITION                                                         */
  /****************************************************************************/

  gulp.task('default', ['watch']);
  gulp.task('build', ['app:build']);


}());