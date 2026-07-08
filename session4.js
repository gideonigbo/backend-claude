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
//Session 4 - Assignment

/*Task 1: EventEmitter
const EventEmitter = require("events")

const orderEmitter = new EventEmitter()

orderEmitter.on("orderPlaced", (order) => {
    console.log(`Order saved to database: [${order.id}]`)
})

orderEmitter.on("orderPlaced", (order) => {
    console.log(`Confirmation email sent to:${order.email}`)
})

orderEmitter.once("orderCancelled", (order) => {
    console.log(`Order ${order.id} has been cancelled`)
})

orderEmitter.emit("orderPlaced", {name: "Gee", id: 3, email: "gideon@google.com"})

orderEmitter.emit("orderCancelled",{name: "Gee", id: 3, email: "gideon@google.com"})

orderEmitter.emit("orderCancelled",{name: "Gee", id: 3, email: "gideon@google.com"})
*/

/*//Task 2 — Streams:

const fs = require("fs/promises")
const path = require("path")

const filePath = path.join(__dirname, "source.txt")
const destination = path.join(__dirname, "destination.txt")


const sourceRead = fs.readFile(filePath, "utf8")
console.log(sourceRead)

const readStream = fs.createReadStream(filePath, "utf8")
readStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk)
})

// "end" event fires when all chunks have been received
readStream.on("end", () => {
    console.log("Finished reading file")
})

// "error" event fires if something goes wrong
readStream.on("error", (err) => {
    console.error("Stream error:", err.message)
})

const writeStream = fs.createWriteStream(destination, "utf8")

readStream.pipe(writeStream)

writeStream.on("finish", () => {
    console.log("File copied successfully using streams!")
})

const newRead = fs.readFile(destination, "utf8")
console.log(newRead)
*/

/*//Task 3 — Error Handling:
class webError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = "webError"
    }
}

class NotFoundError extends webError {
    constructor (resource) {
        super(`${resource} not found`, 404)
        this.name = "NotFoundError"
    }
}

class ValidationError extends webError {
    constructor (message) {
        super(`Email/Pass not correct`, 400)
        this.name = "ValidationError"
    }
}

class UnauthorizedError extends webError {
    constructor (username) {
        super(`${username} not authorized`, 401)
        this.name = "UnauthorizedError"
    }
}


const processRequest = (arg) => {
    if (arg ==="notfound") {
        throw new NotFoundError("product")
    }
    if (arg ==="validation") {
        throw new ValidationError()
    }
    if (arg ==="unauthorized") {
        throw new UnauthorizedError("Giddy")
    }
}

try {
    processRequest("notfound")
} catch (err) {
    if (err instanceof NotFoundError) {
        console.error(`(${err.statusCode})${err.name}: ${err.message}`)
    } else {
        console.error("Unexpected error:", err.message)
    }
}

try {
    processRequest("validation")
} catch (err) {
    if (err instanceof ValidationError) {
        console.error(`(${err.statusCode})${err.name}: ${err.message}`)
    } else {
        console.error("Unexpected error:", err.message)
    }
}

try {
    processRequest("unauthorized")
} catch (err) {
    if (err instanceof UnauthorizedError) {
        console.error(`(${err.statusCode})${err.name}: ${err.message}`)
    } else {
        console.error("Unexpected error:", err.message)
    }
}
*/


