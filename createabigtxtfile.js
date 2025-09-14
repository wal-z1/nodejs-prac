const { writeFileSync } = require("fs");
for (let i = 1; i < 100; i++) {
	writeFileSync("./sub/numbersfile.txt", `Line ${i}`, { flag: "a" });
}
