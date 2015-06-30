var onelook = require("./onelook");

exports["test getUrl simple word"] = function(assert) {
	onelook.setText("Letter");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Letter&ls=a");
	onelook.setText("take off");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=take off&ls=a");
	onelook.setText("congratulation");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=congratulation&ls=a");
	onelook.setText("Kelly");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Kelly&ls=a");
	onelook.setText("DOM");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=DOM&ls=a");
	onelook.setText("A");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=A&ls=a");
};

exports["test getUrl trimed word"] = function(assert) {
	onelook.setText(" ");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/");
	onelook.setText("  ");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/");
	onelook.setText("Day ");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Day&ls=a");
	onelook.setText(" Clear ");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Clear&ls=a");
	onelook.setText(" Dream");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Dream&ls=a");
	onelook.setText("  Love");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Love&ls=a");
	onelook.setText("  Running  ");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Running&ls=a");
	onelook.setText("Playground  ");
	assert.equal(onelook.getUrl(), "http://www.onelook.com/?w=Playground&ls=a");
};

exports["test getLabelText simple"] = function(assert) {
	onelook.setText("Letter");
	assert.equal(onelook.getLabelText(), "Onelook「Letter」");
	onelook.setText("take off");
	assert.equal(onelook.getLabelText(), "Onelook「take off」");
	onelook.setText("congratulation");
	assert.equal(onelook.getLabelText(), "Onelook「congratulation」");
	onelook.setText("Kelly");
	assert.equal(onelook.getLabelText(), "Onelook「Kelly」");
	onelook.setText("DOM");
	assert.equal(onelook.getLabelText(), "Onelook「DOM」");
	onelook.setText("A");
	assert.equal(onelook.getLabelText(), "Onelook「A」");
};

exports["test getLabelText trimed word"] = function(assert) {
	onelook.setText(" ");
	assert.equal(onelook.getLabelText(), "Onelook");
	onelook.setText("  ");
	assert.equal(onelook.getLabelText(), "Onelook");
	onelook.setText("Day ");
	assert.equal(onelook.getLabelText(), "Onelook「Day」");
	onelook.setText(" Clear ");
	assert.equal(onelook.getLabelText(), "Onelook「Clear」");
	onelook.setText(" Dream");
	assert.equal(onelook.getLabelText(), "Onelook「Dream」");
	onelook.setText("  Love");
	assert.equal(onelook.getLabelText(), "Onelook「Love」");
	onelook.setText("  Running  ");
	assert.equal(onelook.getLabelText(), "Onelook「Running」");
	onelook.setText("Playground  ");
	assert.equal(onelook.getLabelText(), "Onelook「Playground」");
};

exports["test getLabelText long text"] = function(assert) {
	onelook.setText(" KellyIsAGoodBoyRight!");
	assert.equal(onelook.getLabelText(), "Onelook「KellyIsAGoodBoy...」");
	onelook.setText("  KellyIsAGoodBoyRight");
	assert.equal(onelook.getLabelText(), "Onelook「KellyIsAGoodBoy...」");
	onelook.setText("Today is a good day ");
	assert.equal(onelook.getLabelText(), "Onelook「Today is a good...」");
	onelook.setText(" I hope all tests are passed ");
	assert.equal(onelook.getLabelText(), "Onelook「I hope all test...」");
	onelook.setText(" Missing you say good bye");
	assert.equal(onelook.getLabelText(), "Onelook「Missing you say...」");
	onelook.setText("  Martin Fowler Refactoring");
	assert.equal(onelook.getLabelText(), "Onelook「Martin Fowler R...」");
	onelook.setText("  Code Complete is a good book  ");
	assert.equal(onelook.getLabelText(), "Onelook「Code Complete i...」");
	onelook.setText("I want to play forever  ");
	assert.equal(onelook.getLabelText(), "Onelook「I want to play ...」");
};

exports["test getLabelText empty"] = function(assert) {
	onelook.setText("");
	assert.equal(onelook.getLabelText(), "Onelook");
}

require("sdk/test").run(exports);
