# draft-js-regex-highlighter-plugin

A [DraftJS] plugin for highlighting valid/invalid strings based on regex and/or supplied strings.

This plugin has only been tested with [react-draft-wysiwyg] but should work using any DraftJS-based editor.

[View Demo][demo]

## Usage

```sh
npm i --save draft-js-regex-highlighter-plugin
```

then import from your editor component

```js
import createHighlighterPlugin from "draft-js-regex-highlighter-plugin"
```

## Example

This example uses a regex to match all {{ handlebar }} variables.

```js
import React, { Component } from "react"
import { Editor } from "react-draft-wysiwyg"
import createHighlighterPlugin from "draft-js-regex-highlighter-plugin"
import { EditorState } from "draft-js"

const highlighterConfig = {
      regex: new RegExp(/{{\s*([^}]+)\s*}}/, 'g'),
      theme: {
        valid: {
            background: "lightblue"
        }
        invalid: {
            background: "red"
        }
      }
    }

const customDecorators = [
    createHighlighterPlugin(highlighterConfig)
]

export default class DemoEditor extends Component {

    state = {
        editorState: EditorState.createEmpty()
    }

    onChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onEditorStateChange={this.onChange}
                customDecorators={customDecorators}
            />
        )
    }
}
```

## Options

Param | Type | Required | Description 
------|------|:----------:|-------------
regex | RegExp | * | The primary pattern used to match content
secondaryRegex | RegExp | | Optional secondary pattern to further drill down on validity of matches
variables | object | | An object of strings to further drill down on validity of matches
component | Node | | Optional React component to render instead of the default Highlighter component
theme | object | | Theme object for styling the valid and invalid matches

## TODO

1. bundle package

## License

MIT

[demo]: https://stackblitz.com/edit/react-q1g4jg
[draftjs]: https://facebook.io/draft-js
[react-draft-wysiwig]: https://github.com/jpuri/react-draft-wysiwyg
[npm]: https://www.npmjs.com/package/draft-js-regex-highlighter-plugin
