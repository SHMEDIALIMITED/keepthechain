/**
 * Created by patrickwolleb on 29/10/2013.
 */
define(

    [
        'pablo'
    ],

    function() {

        var Sketch = function(parent, model, dir) {


            this.animation = model.get('animation').frames;
            this.direction = model.get('animation').directions[dir];


            console.log(this.direction, dir)

            this.parent = parent;
            this.closed = model.get('closed');
            this.opened = model.get('open');
            this.el = Pablo('<g><g class="sketch"></g></g>');

            this.graphic = this.el.find('.sketch');

            this.open();


            console.log(this.direction)
            //console.log(this.graphic)


            this.isOpen = false;
            this.isClosed = false;


        }

        Sketch.prototype = {

            update : function(frameIndex, rect) {
                var frame = this.animation[frameIndex];



                if(!frame) return;
                var x = (rect.x * frame.x);
                var y = (rect.y * frame.y);


                var transform = 'translate3d(' + (x * this.direction.pos) + 'px, ' + (y * this.direction.pos)+ 'px, 0px) ';
                transform += 'scale3d(' + (frame.scale * this.direction.scaleX) + ', ' + (frame.scale * this.direction.scaleY) + ', 1) ';
                transform += 'rotate(' + this.direction.rotation + ')';

                this.graphic.css('-webkit-transform', transform);
            },

            close : function() {
                if(this.isClosed) return;



                if(this.prev) this.prev.remove();
                this.isOpen= false;
                this.isClosed = true;
                this.graphic.empty();
                this.graphic.append(this.closed)
            },

            open : function() {
                if(this.isOpen) return;
                if(this.prev) this.prev.prepend();
                this.isClosed = false;
                this.isOpen = true;
                this.graphic.empty();
                this.graphic.append(this.opened)
            },

            align : function(rect) {
                this.el.css('-webkit-transform', 'translate(' + (rect.x) + 'px, ' + (rect.y)  + 'px)');
            },

            remove : function() {
                this.el.remove();
            },

            prepend : function() {
                this.parent.prepend(this.el);
            },

            append : function() {
                this.parent.append(this.el);
            }





        }

        return Sketch;

    }

);