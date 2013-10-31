/**
 * Created by patrickwolleb on 31/10/2013.
 */
define(
    ['backbone'],
    function() {

        var FoldOutMenu = Backbone.View.extend({

            events :{
                'mousedown .menu-trigger' : '_toggle',
                'mousedown ul li a' : '_select'
            },

            initialize : function() {

                _.bindAll(this, '_toggle');
                _.bindAll(this, '_select');

                this.$list = this.$el.find('ul').hide();
            },

            _toggle : function() {
                this.$list.show();
            },

            _select : function(e) {
                this.$list.hide();
                this.trigger('selected',  $(e.currentTarget).data('value'));
            }

        });

        return FoldOutMenu;

    }
)