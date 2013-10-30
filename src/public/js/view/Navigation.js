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

                'mousedown .info-btn' : '_toggleInfo'

            },

            initialize : function() {
                _.bindAll(this, '_toggleInfo');
                this.$info = $('#info').show();
            },

            _toggleInfo : function(e) {

                console.log('TOGGLE');
                e.preventDefault();
                this.$info.css('opacity', 1);
               

                return false;

            },

            show : function() {
                this.$el.show();
            }

        });

        return Navigation;

    }
);