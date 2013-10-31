/**
 * Created by patrickwolleb on 31/10/2013.
 */
define(

    ['backbone'],

    function() {

        var Popup = Backbone.View.extend({

            events : {
                'mousedown a' : '_confirm'
            },

            initialize : function() {
                _.bindAll(this, '_confirm');
            },

            _confirm : function(e) {
                this.trigger('confirm');
                this.hide();
            },

            show : function() {
                this.$el.show();
            },

            hide : function() {
                this.$el.hide();
            }



        });

        return Popup;

    }

);