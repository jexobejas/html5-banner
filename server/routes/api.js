const express = require('express');
const _ = require('underscore');
const router = express.Router();
const helper = require('./../helpers/helpers');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* POST generate screenshot. */
router.post('/downloadBanner', (req, res) => {
	var params = req.body;

	var controller = helper.getController('downloadBanner', 'post');

	controller(params, res);
});

/* POST generate screenshot. */
router.post('/bannerPreview', (req, res) => {
	var params = req.body;

	var controller = helper.getController('bannerPreview', 'post');

	controller(params, res);
});

/* GET compress banner. */
router.get('/compressBanner/:client_code/:project_code/:banner_name', (req, res) => {
	var controller = helper.getController('compressBanner', 'get');

	controller(req, res);
});

module.exports = router;