/**
 * Created with JetBrains WebStorm.
 * User: patrickwolleb
 * Date: 16/08/2013
 * Time: 17:37
 * To change this template use File | Settings | File Templates.
 */


define([] , function() {

    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

});