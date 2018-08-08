var httpServer = require('./modules/httpServer/httpServer.js');
var fileStorage = require('./modules/fileStorage/fileStorage.js');

httpServer.startServer((request, response) => {
	var files = fileStorage.loadWidgets();

	var output = '';
	files.forEach(file => {
		output += JSON.stringify(file);
	});

	response.send(output);
});
