const http = require("http");
const servertest = http.createServer((req, res) => {
	if (req.url === "/") {
    // sync code that lags asf
		for (let i = 0; i < 100000; i++) {
			console.log(i);
		}
		res.write("Hello world MAIN");

		res.end();
	} else if (req.url === "/about") {
		res.write("wassap ppl");
		res.end();
	}
});
servertest.listen(5800, () => {
	console.log("makima is listening");
});
//
