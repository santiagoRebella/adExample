(function () {
  "use strict";

  var gutil = require('gulp-util');

  module.exports = function (err, paths) {

    if (err) {
      gutil.log(
        gutil.colors.red('######################## ') +
        gutil.colors.red.bold('del error') +
        gutil.colors.red(' ########################')
      );
      gutil.log( gutil.colors.red(err) );
      gutil.log( gutil.colors.red('############################################################') );
    } else {
      paths.forEach(function (item) {
        gutil.log(
          gutil.colors.gray('deleted') + gutil.colors.green(' >>>> ') +
          gutil.colors.yellow(item.split('/src')[1]? '/src' + item.split('/src')[1]: '/bin' + item.split('/bin')[1])
        );
      });
    }





  };


}());

