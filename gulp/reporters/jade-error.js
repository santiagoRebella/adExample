(function () {
  "use strict";

  var gutil = require('gulp-util');

  module.exports = function (err) {

    var file = err.message.split(':')[0].split('src')[1],
        line = parseInt(err.message.split('>')[0].split(':')[1]),
        draw = '  >' + err.message.split('>')[1].split('\n\n')[0],
        message = err.message.split('>')[1].split('\n\n')[1],
        space = line > 9 ? '' : ' ';

    gutil.log(
      gutil.colors.red('######################## ') +
      gutil.colors.red.bold(err.plugin) +
      gutil.colors.red(' ########################')
    );
    gutil.log(
      gutil.colors.red('>>>> ') +
      gutil.colors.yellow(message)
    );
    gutil.log(
      gutil.colors.dim.gray('file ') +
      gutil.colors.yellow(file)
    );
    gutil.log(
      gutil.colors.dim.gray('line ') +
      gutil.colors.dim.cyan(line)
    );
    gutil.log(gutil.colors.dim.gray('|---------------------------------------------------------|'));
    draw.split('\n').forEach(function (item, index) {
      if (index === 0) {
        gutil.log(space + gutil.colors.yellow.bold(item));
      } else {
        gutil.log(gutil.colors.gray(item));
      }
    });
    gutil.log( gutil.colors.red('###########################################################') );

  };


}());



/*
 { [Error: /home/san/workspace/blade_prototype/stacks/es6-polymer/src/index.jade:9
 7|         title Polymer try
 8|
 > 9|         script(src="js/vendor.min.js")YE^$E
 10|
 11|         link(rel="import" href="html/elements.html")
 12|     body

 Unexpected token `tag` expected `text`, `code`, `:`, `newline` or `eos`]
 path: '/home/san/workspace/blade_prototype/stacks/es6-polymer/src/index.jade',
 name: 'Error',
 message: '/home/san/workspace/blade_prototype/stacks/es6-polymer/src/index.jade:9\n    7|         title Polymer try\n    8| \n  > 9|         script(src="js/vendor.min.js")YE^$E\n    10| \n    11|         link(rel="import" href="html/elements.html")\n    12|     body\n\nUnexpected token `tag` expected `text`, `code`, `:`, `newline` or `eos`',
 stack: 'Error: /home/san/workspace/blade_prototype/stacks/es6-polymer/src/index.jade:9\n    7|         title Polymer try\n    8| \n  > 9|         script(src="js/vendor.min.js")YE^$E\n    10| \n    11|         link(rel="import" href="html/elements.html")\n    12|     body\n\nUnexpected token `tag` expected `text`, `code`, `:`, `newline` or `eos`\n    at Parser.tag (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:807:15)\n    at Parser.parseTag (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:738:17)\n    at Parser.parseExpr (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:211:21)\n    at Parser.block (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:708:25)\n    at Parser.tag (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:817:24)\n    at Parser.parseTag (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:738:17)\n    at Parser.parseExpr (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:211:21)\n    at Parser.block (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:708:25)\n    at Parser.tag (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:817:24)\n    at Parser.parseTag (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-jade/node_modules/jade/lib/parser.js:738:17)',
 showStack: false,
 showProperties: true,
 plugin: 'gulp-jade' }








 */
