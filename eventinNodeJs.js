const EventEmitter = require("events");

const CreatedEvent = new EventEmitter();

CreatedEvent.on("name", () => {
	console.log("event triggred");
});

CreatedEvent.on("name", (Var1, Var2) => {
	console.log(`event triggred ${Var1} and here is ${Var2}`);
});

CreatedEvent.emit("name", 1, 6);
