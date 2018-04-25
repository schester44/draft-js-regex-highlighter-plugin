import * as React from "react"

const Highlighter = props => {
	// TODO: Currently this component renders only one child. Should support the entire {props.children}
	const child = props.children[0]
	const theme = props.theme || {}

	const variableExists = !!props.variables[child.props.text]
	const hasRegex = !!props.secondaryRegex
	const hasVariables = Object.keys(props.variables).length > 0

	let isValid = true

	if (hasVariables) {
		isValid = variableExists
	} else if (hasRegex) {
		isValid = !!props.secondaryRegex.exec(child.props.text)
    }
    
	return <span style={isValid ? theme.valid : theme.invalid}>{child}</span>
}

export default Highlighter
