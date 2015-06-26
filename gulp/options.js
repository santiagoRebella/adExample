(function () {
  "use strict";

  var options = {};

  options.csslint = {
    'shorthand': false,
    'known-properties': false,
    'adjoining-classes': false,
    'compatible-vendor-prefixes': false,
    'fallback-colors': false,
    'duplicate-background-images': false,
    'ids': false,
    'overqualified-elements': false,
    'box-model': false,
    'important': false,
    'font-sizes': false,
    'qualified-headings': false
  };

  options.sass = {
    'debug_info': true
  };
  options.jade = { pretty: true };

  options.livereload = {
    auto: true
  };

  options.requireDir = {
    camelcase: true
  };

  options.vulcanize = {
    inlineCss: true,
    inlineScripts: true,
    abspath: '/',
    dest: 'bin/html'
  };

  module.exports = options;

}());