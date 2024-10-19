export const formatTable = (text: string): string => {
	// Split the text into lines
	let lines = text.split('\n');

	// Format each line
	lines = lines.map(line => {
		// Add space after list markers
		line = line.replace(/^(\s*[-*+])\s*/, '$1 ');

		// Ensure single space after hash signs for headers
		line = line.replace(/^(#{1,6})\s*/, '$1 ');

		// Remove trailing spaces
		line = line.trimRight();

		return line;
	});

	return lines.join('\n');
};