define([], function() {

    if(!window.console) {
        window.console = {

            log:function(text) {
                alert(text);
            }

        }
    }

});