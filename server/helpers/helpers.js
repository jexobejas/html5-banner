module.exports = {
	getController: function(route, method) {
		return require('./../controllers/' + method + '/' + route );
	}
};