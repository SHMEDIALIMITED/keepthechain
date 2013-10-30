/**
 * Created by patrickwolleb on 29/10/2013.
 */
define(

    [
        'pablo'
    ],

    function() {

        var Sketch = function(parent, model) {


            this.animation = model.get('animation');
            this.direction = model.get('direction');
            this.parent = parent;
            this.closed = model.get('closed');
            this.opened = model.get('open');
            this.el = Pablo('<g display="inline"></g>');

            this.graphic = Pablo('<g display="inline">' + this.opened  + '</g>').appendTo(this.el)


            this.isOpen = false;
            this.isClosed = false;


        }

        Sketch.prototype = {

            update : function(frameIndex, rect) {
                var frame = this.animation[frameIndex];



                if(!frame) return;
                var x = (rect.x * frame.x);
                var y = (rect.y * frame.y);
                this.graphic.css('-webkit-transform', 'translate3d(' + (x * this.direction.pos) + 'px, ' + (y * this.direction.pos)+ 'px, 0px) scale3d(' + (frame.scale * this.direction.scale) + ', ' + (frame.scale * this.direction.scale) + ', 1)');
            },

            close : function() {
                if(this.isClosed) return;

                console.log('CLOSE', this.prev)

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