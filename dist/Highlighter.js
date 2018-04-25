"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Highlighter = function Highlighter(props) {
	// TODO: Currently this component renders only one child. Should support the entire {props.children}
	var child = props.children[0];
	var theme = props.theme || {};

	var variableExists = !!props.variables[child.props.text];
	var hasRegex = !!props.secondaryRegex;
	var hasVariables = Object.keys(props.variables).length > 0;

	var isValid = true;

	if (hasVariables) {
		isValid = variableExists;
	} else if (hasRegex) {
		isValid = !!props.secondaryRegex.exec(child.props.text);
	}

	return React.createElement(
		"span",
		{ style: isValid ? theme.valid : theme.invalid },
		child
	);
};

exports.default = Highlighter;