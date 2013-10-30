/**
 *  Copyright Reserved SH MEDIA LIMITED
 *  Author: Patrick Wolleb, patrick.wolleb@shmedia.co.uk
 *  Licensed under Creative Commons
 *  http://creativecommons.org/licenses/by-nc-nd/2.0/uk/deed.en_US
 */

require.config({
	'paths': {
		'jquery': 'libs/jquery-1.8.3.min',
		'backbone': 'libs/backbone-min',
		'underscore': 'libs/underscore-min',
        'sprite3d': 'libs/sprite3d',
        'touchwipe' : 'libs/jquery.touchwipe.min',
        'ui' : 'libs/ui/jquery-ui',
        'donatello' : 'libs/donatello-min',
        'sprite' :   'libs/sprite3d',
        'console' : 'libs/console',
        'raf':      'libs/raf',
        'twitter' : '//platform.twitter.com/widgets',
        'facebook' : '//connect.facebook.net/en_US/all',
        'three' : 'libs/three',
        'pablo' : 'libs/pablo.min',
        'hammer' : 'libs/jquery.hammer',
        'fabric' : 'libs/fabric.require'

	},
 
	shim: {
        'facebook' : {
            exports: 'FB'
        },

        'twitter' : {
            exports: 'twttr'
        },

		'backbone': {
			deps: ['underscore', 'jquery', 'touchwipe', 'hammer'],
			exports: 'Backbone'
		},
        'touchwipe' : {
            deps: ['jquery'],
            exports: 'touchwipe'
        },

        'ui' : {
            deps: ['jquery'],
            exports: 'ui'
        },

		'underscore': {
			exports: '_'
		},

        'sprite': {
            exports: 'Sprite3D'
        }
	}
});
 
require([
    'underscore',
    'view/App',
    'raf',

],

    function( _, App ) {

        var app;

        $(function() {
            app = new App();
        });

});