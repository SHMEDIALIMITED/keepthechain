/**
 * Created by patrickwolleb on 29/10/2013.
 */
define(
    [


        'view/Navigation',
        'model/Animations',
        'view/Title',
        'view/Sketch',
        'model/SketchCollection',
        'controller/ScrollController',
        'view/Editor',
        'backbone'
    ],

    function(


        Navigation,
        Animations,
        Title,
        Sketch,
        SketchCollection,
        ScrollController,
        Editor


    ) {



        var pos = 0.0;
        var currentIndex = -1;
        var current, next, prev;

        var sketcheCollection;
        var sketchViews;

        var scrollController;

        var navigation;
        var editor;

        var svg;

        var rect;

        var App = Backbone.View.extend({

            el : 'body',

            initialize : function() {

                rect = {};
                sketchViews = [];

                sketchViews.push(new Title({animation:Animations.title}));

                sketcheCollection = new SketchCollection();
                sketcheCollection.on('add', _.bind(this._sketchesAdded, this));
                sketcheCollection.fetch(
                    {   remove: false,
                        success: _.bind(this._run, this)
                    }
                );

                scrollController = new ScrollController();

                navigation = new Navigation();
                navigation.on('navigate', _.bind(this._onStateChange, this));
                navigation.show();




                svg = Pablo('svg');

                $(window).resize(_.bind(this._resize));
                this._resize();




            },

            _run : function() {
                scrollController.bind();
                this._render();
            },

            _sketchesAdded : function(sketchModel) {
                //var directions = sketchModel.get('direction').split(',');
                sketchModel.set('animation', Animations.sketches[0]);
                var sketch = new Sketch(svg, sketchModel,  null);
                sketch.update(1, rect);
                sketch.prev = sketchViews[sketchViews.length - 1];
                sketchViews.push(sketch);

            },


            _onStateChange : function(newState) {
                switch(newState) {
                    case 'edit' :
                        scrollController.unbind();
                        if(!editor) editor = new Editor({rect:rect});
                        editor.on('navigate', _.bind(this._onStateChange, this));
                        editor.on('created', _.bind(this._onNewCreatureCreated, this));
                        editor.resize(rect)
                        editor.show();
                        break;

                    case 'main' :
                        if(editor) editor.hide();
                        scrollController.bind();
                        break;
                }
            },


            _onNewCreatureCreated : function(sketchModel) {
                sketcheCollection.add(sketchModel);
                this._onStateChange('main');
            },

            _render : function() {

                requestAnimFrame(_.bind(this._render, this));

                scrollController.update();




                pos -= ~~(scrollController.delta);
                pos = Math.min(Math.max(pos, 1),sketchViews.length * 480 );


                if(pos > 100) {
                    navigation.show();
                } else {
                   // navigation.hide();
                }

                var index = ~~(pos / 480);



                if(index >= sketchViews.length) {

                    // TODO : load more sketches

                    console.log('LOAD MORE SKETCHES', sketchViews.length);

                } else {

                    if(currentIndex < index) {

                        currentIndex = index;
                        current = next;
                        if(current) current.close();
                        next = sketchViews[currentIndex];
                        next.append();
                        this._resize();
                    } else if(currentIndex > index) {

                        if(current) current.open();
                        currentIndex = index;
                        if(next) next.remove();
                        next = current;

                        current  = sketchViews[currentIndex-1];

                        this._resize();
                    }

                    // get animation frame index
                    var frameIndex = pos - currentIndex * 480;

//                    // control mouth
//                    if(current && frameIndex > 480) {
//                        current.close();
//                    } else if(current && frameIndex < 480) {
//                        current.open();
//                    }


                    // update sketch position

                    if(current) {
                        current.update(frameIndex+480, rect);
                    }
                    if(next) {
                        next.update(frameIndex, rect);
                    }
                }





            },

            _resize : function() {

                var w = $(window);

                rect.width = w.width();
                rect.height = w.height();
                rect.x = w.width() >> 1;
                rect.y = w.height() >> 1;
                if(current) current.align(rect);
                if(next) next.align(rect);

                if(editor) editor.resize(rect)
            }

        });

        return App;

});