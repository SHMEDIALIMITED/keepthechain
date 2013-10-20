/**
 * Created with JetBrains WebStorm.
 * User: patrickwolleb
 * Date: 19/08/2013
 * Time: 11:04
 * To change this template use File | Settings | File Templates.
 */


define(

    [

    ],
    function() {


        return {

            extend: function(subClass, superClass) {
                var F = function() {};
                F.prototype = superClass.prototype;
                subClass.prototype = new F();
                subClass.prototype.constructor = subClass;
            }

        }

    }

)