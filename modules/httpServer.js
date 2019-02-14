var express = require('express');
var app = express();

function startServer(config, callback) {
	app.get('/widgetlist.xml', callback);

	app.get('/', (request, response) => {
		response.send('Wrong request');
	});

	app.use(express.static(config.widgetsFolder));

	var server = app.listen(config.port, () => {
		console.log('Listening on port ' + config.port);
	});
}

exports.startServer = startServer;