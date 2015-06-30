var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");
var selection = require("sdk/selection");
var self = require("sdk/self");
var onelook = require("./onelook");

// MenuItem show only you selected an text
var menuItem = contextMenu.Item({
	label: onelook.getLabelText(),
	context: contextMenu.SelectionContext(),
	image: self.data.url("onelook.png"),
	contentScript:
		'self.on("click", function() {' +
		'	self.postMessage();' +
		'});',
	onMessage: function () {
		tabs.open({
		 	url: onelook.getUrl(),
			onOpen: function (tab) {
				tab.index = tabs.activeTab.index + 1;
			}
		});
	}
});

selection.on("select", function()
{
	onelook.setText(selection.text);
	menuItem.label = onelook.getLabelText();
});