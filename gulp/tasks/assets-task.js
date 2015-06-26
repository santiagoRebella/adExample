/****************************************************************************/
/* assets                                                              */
/****************************************************************************/
(function () {
  "use strict";

  var del = require('del'),
      gulp = require('gulp'),
      sprity = require('sprity'),
      pngquant = require('imagemin-pngquant');

  module.exports = function(gp) {

    gulp.task('ad:sprites', function () {
      return sprity.src({
          src: './src/assets/*.png',
          style: './src/sass/sprites.css'
        })
        .pipe(gp.if('*.png', gulp.dest('./bin/assets/'), gulp.dest('./src/sass/')));
    });

    gulp.task('ad:assets', function () {

      del.sync(['bin/assets']);

      return gulp.src(['src/assets/*.jpg', 'src/assets/*.png'])
        .pipe(gp.imagemin({
          progressive: true,
          optimizationLevel: 7,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
        }))
        .pipe(gulp.dest('bin/assets/'));
    });

  };

}());

