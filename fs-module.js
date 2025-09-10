const { error } = require("console");
const { readFile, writeFile, readFileSync, writeFileSync } = require("fs");

const TextOfirstFile = readFileSync("./sub/test_text1.txt", "utf8");
const TextOfSecondFile = readFileSync("./sub/test_text2.txt", "utf8");

console.log(TextOfirstFile);
console.log(TextOfSecondFile);

writeFileSync(
	"./sub/ConcatOfTheTwoFiles.txt",
	`\nhere is the concat ${TextOfirstFile} + ${TextOfSecondFile} `,
	
);
const TextOfMix = readFileSync("./sub/ConcatOfTheTwoFiles.txt", "utf8");
console.log(TextOfMix);

readFile("./sub/test_text1.txt", "utf8", (err, res) => {
	if (err) {
		console.log(error);
		return;
	}
	console.log(res);
});
