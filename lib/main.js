var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
	label: "Onelook",
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function () {' +
		'  var text = window.getSelection().toString();' +
		'  self.postMessage(text.trim());' +
		'});',
	onMessage: function (selectionText) {
		console.log(selectionText);
		tabs.open("http://www.onelook.com/?w=" + selectionText +"&ls=a")
	}
});