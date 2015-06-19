var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");
var selection = require("sdk/selection");
//const data = require("self").data;
// equals to below code, but can use data.url without self
var self = require("self");

// MenuItem show only you selected an text
var menuItem = contextMenu.Item({
	label: "Onelook",
	context: contextMenu.SelectionContext(),
	image: self.data.url("onelook.png"),
	contentScript: 'self.on("click", function () {' +
		'  var text = window.getSelection().toString();' +
		'  self.postMessage(text.trim());' +
		'});',
	onMessage: function (selectionText) {
		var text = selection.text;
		console.log(text);
		console.log(selectionText);
		tabs.open("http://www.onelook.com/?w=" + selectionText +"&ls=a")
	}
});