/**
 * Created by patrickwolleb on 31/10/2013.
 */
define(
    ['view/FoldOutMenu'],
    function(FoldOutMenu) {

        var ColorMenu = FoldOutMenu.extend({

            _select : function(e) {
                this.$el.find('.menu-trigger span').css('background-color', $(e.currentTarget).data('value'));
                FoldOutMenu.prototype._select.apply(this, arguments);
            }

        });

        return ColorMenu;

    }


);