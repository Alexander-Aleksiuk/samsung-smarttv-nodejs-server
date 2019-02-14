var fs = require('fs');
var path = require('path');
var os = require('os');

function loadWidgets(config) {
	var widgetsInfo = [];

	fs.readdirSync(config.widgetsFolder).forEach(file => {
		widgetsInfo.push(getWidgetInfo(config, file));
	});

	return widgetsInfo;
}

function getFileSize(config, file) {
	var stat = fs.statSync(config.widgetsFolder + '/' + file);
	return stat.size;
}

function getFileName(file) {
	var extension = getFileExtension(file);
	return path.basename(file, '.' + extension);
}

function getFileExtension(file) {
	var ext = path.extname(file || '').split('.');
	return ext[ext.length - 1];
}

function getFileDownloadUrl(config, file) {
	var hostIp = getHostIp();

	return config.port === 80
		? config.schema + '://' + os.hostname() + '/' + file
		: config.schema + '://' + os.hostname() + ':' + config.port + '/' + file;
}

function getWidgetInfo(config, file) {
	return {
		name: getFileName(file),
		ext: getFileExtension(file),
		size: getFileSize(config, file),
		url: getFileDownloadUrl(config, file)
	};
}

function getHostIp() {
	var os = require('os');
	var ifaces = os.networkInterfaces();

	Object.keys(ifaces).forEach(function (ifname) {
		var alias = 0;

		ifaces[ifname].forEach(function (iface) {
			if ('IPv4' !== iface.family || iface.internal !== false) {
				return;
			}

			if (alias >= 1) {
				console.log(ifname + ':' + alias, iface.address);
			} else {
				console.log(ifname, iface.address);
			}
			++alias;
		});
	});

	return '';
}

exports.loadWidgets = loadWidgets;