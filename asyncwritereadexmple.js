const fs = require("fs");

const getxt = (path) => {
	return new Promise((yes, no) => {
		fs.readFile(path, "utf8", (err, txt) => {
			if (err) {
				no(err);
			} else {
				yes(txt);
			}
		});
	});
};
getxt("./sub/test_text1.txt")
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
