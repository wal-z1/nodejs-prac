const os = require("os");
const CurrentOSInfo = {
	type: os.type(),
	Totalmemory: os.totalmem(),
	freeMemory: os.freemem(),
	UpTime: os.uptime(),
};
console.log(CurrentOSInfo);
