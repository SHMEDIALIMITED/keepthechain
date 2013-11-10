/**
 * Created by patrickwolleb on 29/10/2013.
 */
define([
    'backbone'
],
function() {

    var ScrollController = function() {
        this.delta = 0.0;
    }

    ScrollController.prototype = {

        _processDelta: function(delta) {
            this.delta = delta >> 2;
        },

        _hammerDrag : function(e) {

            this._processDelta(e.gesture.deltaY);
        },

        _mouseWheel : function(e) {
            this._processDelta(e.originalEvent.wheelDelta);;
        },

        update : function() {
            this.delta *= 0.97;
        },

        bind : function() {
            $(window).bind('mousewheel', _.bind(this._mouseWheel, this));
            $('body').hammer({drag_block_vertical: true}).on('drag', _.bind(this._hammerDrag, this));
        },

        unbind : function( ){
            $(window).unbind('mousewheel');
            $('body').hammer().off('drag');
        }

    }

    return ScrollController;

});
