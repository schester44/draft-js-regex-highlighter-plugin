const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	mode: "production"
}
