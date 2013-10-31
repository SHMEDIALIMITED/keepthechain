/**
 * Created by patrickwolleb on 29/10/2013.
 */
define(
    [
        'model/SketchModel',
        'backbone'
    ],
function(

        SketchModel

    ) {



    var SketchCollection = Backbone.Collection.extend({

        url : '/api/sketches',

        model: SketchModel,

        parse : function(res) {

            var items = [];

            for(var i = 0; i < 10; ++i) {

                var s = new SketchModel();

                items.push(s);
            }


            //res = items;
            return res;
        }

    });

    return SketchCollection;

})