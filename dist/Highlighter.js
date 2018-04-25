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

   // secondaryRegex allows for a more granular check on the regex
   var hasRegex = !!props.secondaryRegex;

   // can match the text against an object of strings
   var variableExists = !!props.variables[child.props.text];
   var theme = props.theme || {};

   // if the user supplied variables, check to see if the variable name exists.
   // if they did not supply variables, check to see if they supplied a secondary regex to match against
   // else just default to true
   var isValid = variableExists ? true : hasRegex ? props.secondaryRegex.exec(child.props.text) : true;

   return React.createElement(
      "span",
      { style: isValid ? theme.valid : theme.invalid },
      child
   );
};

exports.default = Highlighter;