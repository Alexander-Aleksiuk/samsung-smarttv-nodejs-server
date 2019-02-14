var builder = require('xmlbuilder');

/*Response example:
<?xml version="1.0" encoding="UTF-8"?>
<rsp stat="ok">
	<list>
		<widget id="appName1">
			<title>app name 1</title>
			<compression size="100000" type="zip"/>
			<description></description>
			<download>http://xxx.xxx.xxx.xxx/Widget/appName1_20130523.zip</download>
		</widget>
		<widget id="appName2">
			<title>app name 2</title>
			<compression size="500000" type="zip"/>
			<description></description>
			<download>http://xxx.xxx.xxx.xxx/Widget/appName2_20130910.zip</download>
		</widget>
	</list>
</rsp>
*/

function createWidgetList(widgets) {
	var widgetList = builder.create('rsp', { encoding: 'utf-8' })
		.att('stat', 'ok')
		.ele('list');

	widgets.forEach(widget => {
		widgetList
			.ele('widget', { 'id': widget.name })
				.ele('title', widget.name).up()
				.ele('compression', { 'size': widget.size, 'type': widget.ext }).up()
				.ele('description').up()
				.ele('download', widget.url)
	});

	return widgetList.end({ pretty: true });
}

exports.createWidgetList = createWidgetList;