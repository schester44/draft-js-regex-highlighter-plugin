"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var findAllPossibleVariables = exports.findAllPossibleVariables = function findAllPossibleVariables(content, regex, callback) {
	var text = content.getText();
	var matchArr = void 0,
	    start = void 0;

	while ((matchArr = regex.exec(text)) !== null) {
		start = matchArr.index;
		callback(start, start + matchArr[0].length);
	}
};