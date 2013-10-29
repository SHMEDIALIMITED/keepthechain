

module.exports = function (app, config) { 

	var pages = require('../app/controllers/pages')(config);
    var sketches = require('../app/controllers/sketches')(config);


    console.log('SETTING ROUTES')

	// Web App
	app.get('/edit', pages.edit);
    app.get('/', pages.index);

    // API
    //app.post('/api/sketches', sketches.create);
    app.get('/api/sketches', sketches.retrieve);
    //app.update('/api/sketches', sketches.update);
    //app.del('/api/sketches', sketches.del);



}