/**
 * Created by patrickwolleb on 30/10/2013.
 */
define([

    'fabric',
    'backbone'

], function(fabric, Backbone) {

    var canvas;

    var Editor = Backbone.View.extend({

        el : '#editor',

        initialize : function() {



            canvas = new fabric.Canvas('c', {
                isDrawingMode: true,
                backgroundColor : '#eeeeee'
            });



            canvas.freeDrawingBrush = new fabric['PencilBrush'](canvas);

            this.$el.attr('id', 'editor')






        },

        show : function() {
            this.$el.show();
        },

        resize : function(rect) {


            canvas.setWidth(rect.width);
            canvas.setHeight(rect.height);
            //canvas.renderAll();
        }
    });

    return Editor;

});