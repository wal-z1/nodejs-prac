const EventEmitter = require("events");

const CreatedEvent = new EventEmitter();

CreatedEvent.on("name", () => {
	console.log("event triggred");
});

CreatedEvent.emit("name");
