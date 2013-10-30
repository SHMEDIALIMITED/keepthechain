/**
 * Created by patrickwolleb on 29/10/2013.
 */
define(
    [
        'backbone'
    ],

function() {


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


    var SketchModel = Backbone.Model.extend({

        defaults : {
            open    : '<path id="open" d="m-4,-120c57,0 132,36 137,117c5,81 -70,131 -128,126c-58,-5 -92,-70 -92,-70c0,0 101,-41 101,-41c0,0 -89,-78 -89,-78c0,0 14,-54 71,-54z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffff00"/>',
            closed  : '<path id="closed" d="m-3,-121c57,0 132,36 137,117c5,81 -70,131 -128,126c-58,-5 -92,-129 -92,-122c0,7 101,-1 101,0c0,1 -89,0 -89,0c0,0 14,-121 71,-121z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffff00"/>',
            direction : (function() {
                return directions[Math.round(Math.random())];
            })()

        }

    });


    return SketchModel;

});

