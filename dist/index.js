"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createHighlighterPlugin = undefined;

var _decorateComponentWithProps = require("decorate-component-with-props");

var _decorateComponentWithProps2 = _interopRequireDefault(_decorateComponentWithProps);

var _utils = require("./utils");

var _Highlighter = require("./Highlighter");

var _Highlighter2 = _interopRequireDefault(_Highlighter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHighlighterPlugin = function createHighlighterPlugin(_ref) {
	var component = _ref.component,
	    regex = _ref.regex,
	    theme = _ref.theme,
	    secondaryRegex = _ref.secondaryRegex,
	    _ref$variables = _ref.variables,
	    variables = _ref$variables === undefined ? {} : _ref$variables;

	// allow the user to overwrite our component
	var decoratedComponent = component ? component : _Highlighter2.default;

	return [{
		strategy: function strategy(contentBlock, callback) {
			return (0, _utils.findAllPossibleVariables)(contentBlock, regex, callback);
		},
		component: (0, _decorateComponentWithProps2.default)(decoratedComponent, { variables: variables, secondaryRegex: secondaryRegex, theme: theme })
	}];
};

exports.createHighlighterPlugin = createHighlighterPlugin;