

module.exports = function (app, config) { 

	var pages = require('../app/controllers/pages')(config);

	// Web App
	app.get('/edit', pages.edit);
    app.get('/', pages.index);

}