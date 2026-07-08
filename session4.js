// Session 4 — Node.js: Events, Streams & Error Handling

/*
const EventEmitter = require("events")

// Create an instance of EventEmitter
// "instance" means a single object created from a class blueprint
const emitter = new EventEmitter()

// Register a listener — tell the emitter what to do when an event fires
emitter.on("userSignedUp", (data) => {
    console.log("New user signed up:", data.name)
})

// Register another listener on the same event
emitter.on("userSignedUp", (data) => {
    console.log("Sending welcome email to:", data.email)
})

// Emit the event — trigger it, passing data along
emitter.emit("userSignedUp", { name: "Gee", email: "gee@email.com" })
*/
