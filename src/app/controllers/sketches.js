/**
 * Created by patrickwolleb on 29/10/2013.
 */

var Sketch = require('../models').Sketch;

module.exports = function(config) {

    return  {

        create : function(req, res) {

            // TODO: validate

            var sketch = new Sketch(req.body);
            sketch.save(function(err, model) {
                res.send(201, model);
            });

        },

        retrieve : function(req, res) {



            Sketch.find(function(err, collection){
                res.send(200, collection);
            });

        },

        update : function(req, res) {

        },

        del : function(req, res) {

        }

    }
}