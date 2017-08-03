const _ = require('underscore');

var controller = function(params, res) {
	var params = params;

	if (_.isEmpty(params)) {
		res.sendStatus(500).send('No params received.');
	}

	res.send('test');
};

module.exports = controller;