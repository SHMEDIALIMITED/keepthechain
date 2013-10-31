/**
 * Created by patrickwolleb on 31/10/2013.
 */
define(
    ['view/FoldOutMenu'],
    function(FoldOutMenu) {

        var BrushMenu = FoldOutMenu.extend({

            _select : function(e) {

                console.log($(e.currentTarget).css('background-size'))

                this.$el.find('.menu-trigger').css('background-size', $(e.currentTarget).css('background-size'));
                FoldOutMenu.prototype._select.apply(this, arguments);
            }

        });

        return BrushMenu;

    }


);