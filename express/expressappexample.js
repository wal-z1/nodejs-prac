const express = require("express");
const app = express();
const path = require("path");
app.listen(5000, () => {
	console.log("listening on port 5000");
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use((req, res) => {
	res.status(404).send("<h1>error source not found</h1>");
});
//static and middleware
app.use(express.static("/."));
