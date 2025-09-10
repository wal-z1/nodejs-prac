const path = require("path");
console.log(path.sep); // returns the path sepearator for current system
console.log(path.join("/house", "noise", "box.txt")); // just creates a path from variables
pathtepm = path.join("/house", "noise", "box.txt");
console.log(path.basename(pathtepm));
console.log(__dirname);
console.log(path.resolve(__dirname, "house.txt"));
console.log(path.resolve("house.txt"));
