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

/* POST compress banner. */
router.post('/compressBanner', (req, res) => {
	var params = req.body;

	var controller = helper.getController('compressBanner', 'post');

	controller(params, res);
});

module.exports = router;