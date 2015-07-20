var concat      = require('broccoli-concat');
var pickFiles   = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

// var libraries = concat('libraries/', {
//   inputFiles: ['**/*.js'],
//   outputFile: '/libraries.js'
// });
var scripts = concat('js/', {
  inputFiles: ['**/views.js', '**/polyfills.js', '**/settings.js', '**/save.js', '**/animation.js', '**/general.js', '**/nodes.js', '**/popup.js', '**/life.js', '**/main.js'],
  outputFile: '/scripts.js'
});

var appCss = compileLess(['css/'], 'main.less', '/styles.css')

var publicAssets = pickFiles('public/', {
  srcDir: '/assets',
  destDir: '/assets'
});
var publicIconFont = pickFiles('public/', {
  srcDir: '/fonts',
  destDir: '/fonts'
});
var publicFiles = pickFiles('public/', {
  srcDir: 'index.html',
  destDir: 'index.html'
});


module.exports = mergeTrees([ scripts, appCss, publicAssets, publicIconFont, publicFiles ]); //libraries, menuJs, publicMenu, menuCss,
