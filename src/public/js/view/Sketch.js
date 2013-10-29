/**
 * Created by patrickwolleb on 29/10/2013.
 */
define(

    [
        ''
    ],

    function() {

        var Sketch = function(parent, direction ,open,closed) {
            this.direction = direction;
            this.parent = parent;
            this.closed = closed;
            this.opened = open;
            this.el = Pablo('<g id="unit" display="inline"><g id="unit-inner" display="inline">' + open + '</g></g>');
            this.graphic = this.el.find('#unit-inner');
            this.isOpen = false;
            this.isClosed = false;
        }

        Sketch.prototype = {

            update : function(frame, rect) {
                var x = (rect.x * frame.x);
                var y = (rect.y * frame.y);
                this.graphic.css('-webkit-transform', 'translate3d(' + (x * this.direction.pos) + 'px, ' + (y * this.direction.pos)+ 'px, 0px) scale3d(' + (frame.scale * this.direction.scale) + ', ' + (frame.scale * this.direction.scale) + ', 1)');
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
            }

        }

        return Sketch;

    }

);