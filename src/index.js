import decorateComponentWithProps from "decorate-component-with-props"
import { findAllPossibleVariables } from "./utils"

import Highlighter from "./Highlighter"

const createHighlighterPlugin = ({ component, regex, theme, secondaryRegex, variables = {} }) => {
    // allow the user to overwrite our component
	const decoratedComponent = component ? component : Highlighter

	return [
		{
			strategy: (contentBlock, callback) => findAllPossibleVarPiables(contentBlock, regex, callback),
			component: decorateComponentWithProps(decoratedComponent, { variables, secondaryRegex, theme })
		}
	]
}

export { createHighlighterPlugin }
