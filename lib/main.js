var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");
var selection = require("sdk/selection");
var self = require("sdk/self");

const ONELOOK = "Onelook";
const MAX_PREVIEW_SIZE = 15;

// MenuItem show only you selected an text
var menuItem = contextMenu.Item({
	label: ONELOOK,
	context: contextMenu.SelectionContext(),
	image: self.data.url("onelook.png"),
	contentScript: 
		'self.on("click", function() {' +
		'	self.postMessage();' +
		'});',
	onMessage: function () {
		var text = selection.text;
		console.log("selection.text:" + text + ".");
		var index = tabs.activeTab.index;
		tabs.open({
		 	url: "http://www.onelook.com/?w=" + text +"&ls=a",
			onOpen: function (tab) {
				tab.index = index + 1;
			}
		});
	}
});

selection.on("select", function()
{
	updateMenuItemLabel();
});

function updateMenuItemLabel()
{
	var selectionText = selection.text;
	selectionText = selectionText.trim();
	if (selectionText.length > MAX_PREVIEW_SIZE) {
		selectionText = selectionText.substring(0, MAX_PREVIEW_SIZE);
		menuItem.label = ONELOOK + "「" + selectionText + "...」";
	} else {
		menuItem.label = ONELOOK + "「" + selectionText + "」";
	}
}