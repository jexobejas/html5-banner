module.exports = {
	sendStatus: function(status, data) {
		return {
			status: status,
			data: data
		}
	},
	getController: function(route, method) {
		return require('./../controllers/' + method + '/' + route );
	}
};