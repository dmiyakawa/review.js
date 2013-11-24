module.exports = function (review) {
	var ReVIEW = require("../../bin/review.js");

	review.initConfig({

		builders: [new ReVIEW.Build.HtmlBuilder()],
		book: {
			preface: [],
			chapters: [
				"ch01.re",
				"ch02.re"
			],
			afterword: []
		}
	});
};
