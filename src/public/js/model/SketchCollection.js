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


    var directions = [
        { // right
            pos: 1,
            scale: 1,
            roation : '0deg'
        },
        { // left
            pos: -1,
            scale: -1,
            roation : '0deg'
        },
        { // top
            x: 1,
            y: 1,
            scale: 1,
            roation : '0deg'
        },
        {
            x: 1,
            y: 1,
            scale: 1,
            roation : '0deg'
        }
    ];

    var SketchCollection = Backbone.Collection.extend({

        url : '/api/sketches',

        model: SketchModel,

        parse : function(res) {

            var items = [];

            for(var i = 0; i < 10; ++i) {
                var direction = directions[Math.floor(Math.random() * 2)];
                var s = new SketchModel();
                s.set('direction', direction);
                items.push(s);
            }

            res = items;
            return res;
        }

    });

    return SketchCollection;

})