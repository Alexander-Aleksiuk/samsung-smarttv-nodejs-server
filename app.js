var httpServer = require('./modules/httpServer.js');
var fileStorage = require('./modules/fileStorage.js');
var widgetListCreator = require('./modules/widgetListCreator.js');

const config = {
	schema: 'http',
	port: 3000,
	widgetsFolder: 'widgets'
};

httpServer.startServer(config, (request, response) => {
	var widgets = fileStorage.loadWidgets(config);
	var widgetList = widgetListCreator.createWidgetList(widgets);

	response.send(widgetList);
});
