const os = require("os");
const CurrentOSInfo = {
	type: os.type(),
	Totalmemory: os.totalmem(),
	freeMemory: os.freemem(),
};
console.log(CurrentOSInfo);
