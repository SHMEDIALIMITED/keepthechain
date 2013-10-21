module.exports = function(config) {

	return  {
        index : function(req, res) {
            res.render('index', {layout:false,locals:{
                version: config.version}});

        },

        edit : function(req, res) {
            res.render('edit', {layout:false,locals:{
                version: config.version}});
        }
	}
}