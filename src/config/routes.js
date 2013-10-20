

module.exports = function (app, config) { 

	var pages = require('../app/controllers/pages')(config);

	// Web App
	app.get('/:story', pages.index);
    app.get('/', pages.index);

}