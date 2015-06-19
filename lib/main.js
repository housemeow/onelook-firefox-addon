var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");
var selection = require("sdk/selection");
const data = require("sdk/self").data;
// equals to below code, but can use data.url without self
// var self = require("sdk/self");

const ONELOOK = "Onelook";

selection.on("select", function()
{
	updateMenuItemLabel();
});

// MenuItem show only you selected an text
var menuItem = contextMenu.Item({
	label: ONELOOK,
	context: contextMenu.SelectionContext(),
	image: data.url("onelook.png"),
	contentScript: 
		'self.on("click", function() {' +
		'	self.postMessage();' +
		'});',
	onMessage: function () {
		var text = selection.text;
		console.log("selection.text:" + text + ".");
		tabs.open("http://www.onelook.com/?w=" + text +"&ls=a")
	}
});

function updateMenuItemLabel()
{
	var selectionText = selection.text;
	selectionText = selectionText.trim();
	selectionText = selectionText.substring(0, 20);
	menuItem.label = ONELOOK + "「" + selectionText + "」";
}