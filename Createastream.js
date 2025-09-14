const { createReadStream } = require("fs");
const http = require("http");
const thecreatedstreamfromafile = createReadStream("./sub/numbersfile.txt", {
	encoding: "utf8",
});

thecreatedstreamfromafile.on("data", (always) => {});

const server = http.createServer((req, res) => {
	thecreatedstreamfromafile.pipe(res);
});
server.listen(5000);
