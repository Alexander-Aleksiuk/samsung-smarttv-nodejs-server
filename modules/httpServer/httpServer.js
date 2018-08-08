var express = require('express');
var app = express();

function startServer(callback) {
	app.get('/widgetlist.xml', callback);

	app.get('/', (request, response) => {
		response.send('Wrong request');
	});

	app.listen(3000, () => {
		console.log('Listening on port 3000!');
	});
}

exports.startServer = startServer;