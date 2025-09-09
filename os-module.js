const os = require("os");
console.log(os);
const CurrentOSInfo = {
	type: os.type(),
	Totalmemory: os.totalmem(),
	freeMemory: os.freemem(),
};
console.log(CurrentOSInfo);
