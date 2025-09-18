const express = require("express");
const app = express();

app.listen(5000, () => {
	console.log("listening on port 5000");
});

//get method that is preformed by the browser

app.get("/", (req, res) => {
	res.send("hello");
});
app.get("/about", (req, res) => {
	res.send("about pagen ahh");
});

app.all("*", (req, res) => {
	res.send("<h1>error source not found</h1>");
});
