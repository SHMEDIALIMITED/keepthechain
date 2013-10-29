var mongoose = require('mongoose');

var Sketch = new mongoose.Schema({

    open : { type : String },
    closed : { type : String }

});



module.exports = {

    Sketch : mongoose.model('Sketch', Sketch)

}