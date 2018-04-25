export const findAllPossibleVariables = (content, regex, callback) => {
	const text = content.getText()
	let matchArr, start

	while ((matchArr = regex.exec(text)) !== null) {
		start = matchArr.index
		callback(start, start + matchArr[0].length)
	}
}
