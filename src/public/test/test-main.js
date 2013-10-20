/**
 * Created with JetBrains WebStorm.
 * User: patrickwolleb
 * Date: 18/08/2013
 * Time: 12:42
 * To change this template use File | Settings | File Templates.
 */
var tests = [];
for (var file in window.__karma__.files) {
    if (/AssetManager.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

console.log(tests)

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/js',


    paths: {
        'jquery': 'libs/jquery-1.8.3.min',
        'underscore': 'libs/underscore-min',
        'backbone': 'libs/backbone-min'
    },

   shim: {
       'backbone': {
           deps: ['underscore', 'jquery'],
           exports: 'Backbone'
       },

       'underscore': {
           exports: '_'
       },
   },

    deps: tests,

    callback: window.__karma__.start

});
