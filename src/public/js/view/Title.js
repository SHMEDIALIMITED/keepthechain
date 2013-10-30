/**
 * Created by patrickwolleb on 30/10/2013.
 */
define(
    [
        'backbone'
    ]
    ,function() {

        var Title = Backbone.View.extend({

            el : '#title',

            initialize : function(options) {
                this.animation = options.animation;
            },

            update : function(frameIndex, rect) {
                var frame = this.animation[frameIndex];

                if(!frame) return;
                var x = (rect.x * frame.x);
                var y = (rect.y * frame.y);
                this.$el.css('-webkit-transform', 'translate3d(' + x + 'px, ' + y + 'px, 0px)');
            },

            open : function() {

            },

            close : function() {

            },

            align : function(rect) {

            },

            remove : function() {

            },

            prepend : function() {

            },

            append : function() {

            }

        });

        return Title;

    }
);