const http = require("http");
const servertest = http.createServer((req, res) => {
	console.log(req);
	if (req.url === "/") {
		res.write("Hello world MAIN");
		res.end();
	} else if (req.url === "/second") {
		res.write("Hello world second");
		res.end();
	}
	res.end("hey this page does not exist ");
});
servertest.listen(5800);
