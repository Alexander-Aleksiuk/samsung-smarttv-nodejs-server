var fs = require('fs');

const WIDGETS_DIR = 'widgets';

function loadWidgets() {
	var widgetsInfo = [];

	fs.readdirSync(WIDGETS_DIR).forEach(file => {
		widgetsInfo.push(getWidgetInfo(file));
	});

	return widgetsInfo;
}

function getFileSize(file) {
	var stat = fs.statSync(WIDGETS_DIR + '/' + file);
	return stat.size;
}

function getFileName(file) {
	return file.split('.')[0];
}

function getFileExtension(file) {
	return file.split('.')[1];
}

function getWidgetInfo(file) {
	return {
		name: getFileName(file),
		ext: getFileExtension(file),
		size: getFileSize(file)
	};
}

exports.loadWidgets = loadWidgets;