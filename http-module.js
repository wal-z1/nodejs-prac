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
	res.end(`<h1>hey this page does not exist</h1>
		<a href="/">Check here instead</a>`);
});
servertest.listen(5800);
