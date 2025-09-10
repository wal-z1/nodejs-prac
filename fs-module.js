const { readFileSync, writeFileSync } = require("fs");

const TextOfirstFile = readFileSync("./sub/test_text1.txt", "utf8");
const TextOfSecondFile = readFileSync("./sub/test_text2.txt", "utf8");

console.log(TextOfirstFile);
console.log(TextOfSecondFile);

writeFileSync(
	"./sub/ConcatOfTheTwoFiles.txt",
	`\nhere is the concat ${TextOfirstFile} + ${TextOfSecondFile} `
);
