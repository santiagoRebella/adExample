(function () {
  "use strict";

  var gutil = require('gulp-util');

  module.exports = function (err) {

    var cleansedMessageArray = err.message.split('\n')[1].split(' ');
    gutil.log(
      gutil.colors.red('######################## ') +
      gutil.colors.red.bold(err.plugin) +
      gutil.colors.red(' ########################')
    );
    gutil.log(
      gutil.colors.red('>>>> ') +
      gutil.colors.yellow(cleansedMessageArray.splice(4).join(' '))
    );
    gutil.log(
      gutil.colors.dim.gray('file ') +
      gutil.colors.yellow(err.message.split('\n')[0])
    );
    gutil.log(
      gutil.colors.dim.gray('line ') +
      gutil.colors.dim.cyan(err.line) +
      gutil.colors.dim.gray(' column ') +
      gutil.colors.dim.cyan(err.column)
    );
    gutil.log( gutil.colors.red('###########################################################') );

  };


}());



/*
 {[Error: src/components/header/header.scss
 5:38  invalid top-level expression]
 message: 'src/components/header/header.scss\n  5:38  invalid top-level expression',
 column: 38,
 line: 5,
 file: 'stdin',
 status: 1,
 messageFormatted: '\u001b[4msrc/components/header/header.scss\u001b[24m\n\u001b[90m  5:38\u001b[39m  invalid top-level expression',
 name: 'Error',
 plugin: 'gulp-sass' }
 */


/*


{ [Error: src/sass/style.scss
  34:9  file to import not found or unreadable: layout/header
  Current dir: ]
  message: 'src/sass/style.scss\n  34:9  file to import not found or unreadable: layout/header\nCurrent dir: ',
    column: 9,
  line: 34,
  file: 'stdin',
  status: 1,
  messageFormatted: '\u001b[4msrc/sass/style.scss\u001b[24m\n\u001b[90m  34:9\u001b[39m  file to import not found or unreadable: layout/header\nCurrent dir: ',
  name: 'Error',
  stack: 'Error: src/sass/style.scss\n  34:9  file to import not found or unreadable: layout/header\nCurrent dir: \n    at options.error (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-sass/node_modules/node-sass/lib/index.js:276:32)',
  showStack: false,
  showProperties: true,
  plugin: 'gulp-sass' }








 */
