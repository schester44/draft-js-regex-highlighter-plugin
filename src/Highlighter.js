import React from "react"

const Highlighter = props => {
    // TODO: Currently this component renders only one child. Should support the entire {props.children}
    const child = props.children[0]

    // secondaryRegex allows for a more granular check on the regex
    const hasRegex = !!props.secondaryRegex

    // can match the text against an object of strings
    const variableExists = !!props.variables[child.props.text]
	const theme = props.theme || {}

	// if the user supplied variables, check to see if the variable name exists.
	// if they did not supply variables, check to see if they supplied a secondary regex to match against
    // else just default to true
    const isValid = variableExists ? true : hasRegex ? props.secondaryRegex.exec(child.props.text) : true

	return <span style={isValid ? theme.valid : theme.invalid}>{child}</span>
}

export default Highlighter
