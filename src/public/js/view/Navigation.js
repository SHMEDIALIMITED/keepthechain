/**
 * Created by patrickwolleb on 30/10/2013.
 */
define(
    [
        'backbone'
    ],
    function() {

        var Navigation = Backbone.View.extend({

            el : 'nav',

            events : {

                'mousedown .info-btn' : '_toggleInfo',
                'mousedown .plus-btn' : '_showEditor'

            },

            initialize : function() {
                _.bindAll(this, '_toggleInfo');
                this.$info = $('#info').show();
                this.$editor = $('#editor');
            },

            _toggleInfo : function(e) {

                console.log('TOGGLE');
                e.preventDefault();
                this.$info.css('opacity', 1);


                return false;

            },

            _showEditor : function() {
                this.trigger('navigate', 'edit');
            },

            show : function() {
                this.$el.addClass('show');
            },

            hide : function() {
                this.$el.removeClass('show');
            }

        });

        return Navigation;

    }
);