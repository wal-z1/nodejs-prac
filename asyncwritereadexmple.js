const fs = require("fs");
const util = require("util");
//using a promise normally
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

//getxt("./sub/test_text1.txt")
//.then((res) => console.log(res))
// .catch((err) => console.log(err));

// using async approuch
/* ---------------
const sure = async () => {
	try {
		const trying = await getxt("./sub/test_text1.txt");
		console.log(trying);
	} catch (error) {
		console.log(error);
	}
};
sure();
*/
// using the promisify approch
const WriteFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);
const sure = async () => {
	try {
		const trying = await readFilePromise("./sub/test_text1.txt", "utf8");
		console.log(trying);
		await WriteFilePromise("sub/asyncawitwritng.txt", "HELLLO");
	} catch (error) {
		console.log(error);
	}
};
sure()
