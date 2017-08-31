const _ = require('underscore');
const fs = require('fs');
const archiver = require('archiver');
const config = require('./../../config/config');
const helper = require('./../../helpers/helpers');

var controller = function(params, res) {
	var params = params;

	if (_.isEmpty(params)) {
		res.sendStatus(500).send('No params received.');
	}

	var banner_url = config.banners_dir + '/' + params.client_code + '/' + params.project_code + '/' + params.banner_name;
	var temp_banner = config.banners_temp_dir + '/' + params.banner_name + '.zip';
	var output = fs.createWriteStream(temp_banner);
	var archive = archiver('zip', {
	    zlib: { level: 9 } // Sets the compression level.
	});
	 
	// listen for all archive data to be written
	output.on('close', function() {
		console.log(archive.pointer() + ' total bytes');
		console.log('archiver has been finalized and the output file descriptor has closed.');
	});
	 
	// good practice to catch warnings (ie stat failures and other non-blocking errors)
	archive.on('warning', function(err) {
	  	if (err.code === 'ENOENT') {
	      	// log warning
	  	} else {
	      	// throw error
	      	res.send(helper.sendStatus('error', err)); 
	  	}
	});
	 
	// good practice to catch this error explicitly
	archive.on('error', function(err) {
	  	throw err;
	});
	 
	// pipe archive data to the file
	archive.pipe(output);
	archive.directory(banner_url, false);
	archive.finalize();

	var zipfile = fs.readFileSync(temp_banner);
	console.log(Buffer.from(zipfile).toString('base64'));
	var encoded = 'data:application/zip;base64,' + Buffer.from(zipfile).toString('base64');

	res.send(helper.sendStatus('success', encoded)); 
};

module.exports = controller;