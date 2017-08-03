// Get dependencies
const express = require('express');
const connect = require('connect');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const hostname = 'api-html5-banners.dev';

const app = express();
const mainApp = connect();

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
mainApp.use(bodyParser.json());
mainApp.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
mainApp.use(express.static(path.join(__dirname, 'dist')));

// setup cors
app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

	if (req.method === "OPTIONS") {
		res.sendStatus(200);
	} else {
		next();
	}
});

// Set our api routes
mainApp.use('/api', api);

// handles 404/500 pages
mainApp.use(function(req, res) {
	res.status(500);
	res.send('Something went wrong. Please try again later.');
});


/**
* Setup vhost
**/
app.use(vhost(hostname, mainApp));


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 8000;
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${hostname}:${port}`));