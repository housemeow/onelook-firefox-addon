module.exports = function()
{
	const ONELOOK = "Onelook";
	const ONELOOK_URL = "http://www.onelook.com/";
	const MAX_PREVIEW_SIZE = 15;
	var selection = "";
	return {
		setText: function(text) {
			selection = text.trim();
		},
		getUrl: function() {
			if(selection == "") {
				return ONELOOK_URL;
			}
			return ONELOOK_URL + "?w=" + selection +"&ls=a";
		},
		getLabelText: function() {
			if (selection == "") {
				return ONELOOK;
			}else if (selection.length > MAX_PREVIEW_SIZE) {
				var previewSelection = selection.substring(0, MAX_PREVIEW_SIZE);
				return ONELOOK + "「" + previewSelection + "...」";
			} else {
				return ONELOOK + "「" + selection + "」";
			}
		}
	}
}();