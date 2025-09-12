const http = require("http");
const servertest = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello world MAIN");
	} else if (req.url === "/about") {
		res.write("wassap ppl");
	}

	res.end();
});
servertest.listen(5800, () => {
	console.log("makima is listening");
});
//
