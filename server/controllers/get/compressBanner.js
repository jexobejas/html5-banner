const _ = require('underscore');
const fs = require('fs');
const AdmZip = require("adm-zip");

const config = require('./../../config/config');
const helper = require('./../../helpers/helpers');

var controller = function(req, res) {
	var params = req.params;

	if (_.isEmpty(params)) {
		res.sendStatus(500).send('No params received.');
	}

	var banner_url = config.banners_dir + '/' + params.client_code + '/' + params.project_code + '/' + params.banner_name;
	var temp_banner = config.banners_temp_dir + '/' + params.banner_name + '.zip';
	var zip = new AdmZip();
    
    zip.addLocalFolder(banner_url);

    zip.writeZip(temp_banner);

	res.download(temp_banner, params.banner_name + '.zip');	

	var fileStream = fs.createReadStream(temp_banner); 

	fileStream.pipe(res); 
	fileStream.end();
	fileStream.on('finish', function() {
		fs.unlinkSync(temp_banner);
	});
};

module.exports = controller;