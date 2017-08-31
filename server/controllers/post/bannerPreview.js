const _ = require('underscore');
const fs = require('fs');
const config = require('./../../config/config');
const helper = require('./../../helpers/helpers');

var controller = function(params, res) {
	var params = params;

	if (_.isEmpty(params)) {
		res.sendStatus(500).send('No params received.');
	}
	var images_url = config.banners_dir + '/' + params.client_code + '/' + params.project_code + '/' + params.banner_name + '/images';
	var images = fs.readdirSync(images_url);

	if (_.indexOf(images, 'preview.jpg') == -1) {
		res.send(helper.sendStatus('success', 'No Preview')); 
	}

	var preview_img = fs.readFileSync(images_url + '/preview.jpg');
	var buffered = new Buffer(preview_img);
	var encoded = 'data:image/jpg;base64,' + buffered.toString('base64');

	res.send(helper.sendStatus('success', encoded)); 
};

module.exports = controller;