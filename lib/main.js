var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");
var selection = require("sdk/selection");
const data = require("sdk/self").data;
// equals to below code, but can use data.url without self
// var self = require("sdk/self");

const ONELOOK = "Onelook";

// MenuItem show only you selected an text
var menuItem = contextMenu.Item({
	label: ONELOOK,
	context: contextMenu.SelectionContext(),
	image: data.url("onelook.png"),
	contentScript: 'self.on("click", function () {' +
		'  var text = window.getSelection().toString();' +
		'  self.postMessage(text.trim());' +
		'});',
	// contentScriptFile: "./content-script-file"
	onMessage: function (selectionText) {

		var text = selection.text;
		console.log(text);
		console.log(selectionText);
		tabs.open("http://www.onelook.com/?w=" + selectionText +"&ls=a")
	}
});

selection.on("select", function()
{
	console.log(selection.text.length);
	console.log(selection.text);
	menuItem.label = ONELOOK + "「" + selection.text + "」";
});