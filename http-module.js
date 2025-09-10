const http = require("http");
const servertest = http.createServer((req, res) => {
  console.log(req)
	res.write("Hello world");
  res.end()
});
servertest.listen(5800)
