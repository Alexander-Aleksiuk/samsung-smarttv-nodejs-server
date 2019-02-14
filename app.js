var httpServer = require('./modules/httpServer.js');
var fileStorage = require('./modules/fileStorage.js');

const config = {
	schema: 'http',
	port: 3000,
	widgetsFolder: 'widgets'
};

httpServer.startServer(config, (request, response) => {
	var output = '';

	fileStorage.loadWidgets(config).forEach(file => {
		output += JSON.stringify(file);
	});

	response.send(output);
});
